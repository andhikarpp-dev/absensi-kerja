package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KaryawanDTO;
import id.lua.absensikerja.model.dto.KaryawanRequest;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.Jabatan;
import id.lua.absensikerja.model.entity.KabupatenKota;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PolaKerja;
import id.lua.absensikerja.model.entity.Provinsi;
import id.lua.absensikerja.repository.PolaKerjaRepository;
import id.lua.absensikerja.model.entity.Role;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.JabatanRepository;
import id.lua.absensikerja.repository.KabupatenKotaRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.ProvinsiRepository;
import id.lua.absensikerja.repository.RoleRepository;
import id.lua.absensikerja.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KaryawanServiceImpl implements KaryawanService {

    private final KaryawanRepository      karyawanRepository;
    private final JabatanRepository       jabatanRepository;
    private final DivisiRepository        divisiRepository;
    private final UserRepository          userRepository;
    private final RoleRepository          roleRepository;
    private final PasswordEncoder         passwordEncoder;
    private final ProvinsiRepository      provinsiRepository;
    private final KabupatenKotaRepository kabupatenKotaRepository;
    private final id.lua.absensikerja.repository.PerusahaanRepository perusahaanRepository;
    private final PolaKerjaRepository     polaKerjaRepository;
    private final EmailService            emailService;

    @Value("${app.base-url}")
    private String baseUrl;

    @Override
    public List<KaryawanDTO> findAll(Long ownerId) {
        if (ownerId != null) {
            // Cari perusahaan milik owner ini, lalu filter karyawan berdasarkan perusahaan
            return perusahaanRepository.findByOwnerId(ownerId)
                    .map(p -> karyawanRepository.findByPerusahaanId(p.getId()))
                    .orElse(java.util.Collections.emptyList())
                    .stream()
                    .filter(k -> !k.isDeleted())
                    .map(this::toDTO).collect(Collectors.toList());
        }
        return karyawanRepository.findAll()
                .stream()
                .filter(k -> !k.isDeleted())
                .map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public KaryawanDTO findById(Long id) {
        return toDTO(getOrThrow(id));
    }

    @Override
    @Transactional
    public KaryawanDTO create(KaryawanRequest req, Long callerUserId) {
        // ── Validasi NIP unik ──────────────────────────────────
        if (karyawanRepository.existsByNip(req.getNip())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "NIP " + req.getNip() + " sudah digunakan");
        }

        // ── Validasi email unik ────────────────────────────────
        if (userRepository.existsByEmail(req.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Email " + req.getEmail() + " sudah digunakan");
        }

        // ── Validasi password wajib saat create ────────────────
        if (req.getPassword() == null || req.getPassword().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Kata sandi tidak boleh kosong");
        }
        if (!req.getPassword().equals(req.getKonfirmasiPassword())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Kata sandi dan konfirmasi kata sandi tidak cocok");
        }

        // ── Buat User ──────────────────────────────────────────
        Role role = roleRepository.findByName(RoleType.KARYAWAN)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Role KARYAWAN tidak ditemukan"));

        // username = email (bagian sebelum @) — tanpa generate suffix
        String username = req.getEmail().split("@")[0];
        if (userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Username '" + username + "' sudah digunakan. Gunakan email lain.");
        }

        // Generate token verifikasi — akun belum aktif hingga email diverifikasi
        String verificationToken = java.util.UUID.randomUUID().toString();

        User user = User.builder()
                .username(username)
                .namaLengkap(req.getNamaLengkap())
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .role(role)
                .isActive(false)                         // ← belum aktif
                .verificationToken(verificationToken)    // ← butuh verifikasi
                .build();

        // ── Resolve Jabatan & Divisi ───────────────────────────
        Jabatan jabatan = req.getJabatanId() != null
                ? jabatanRepository.findById(req.getJabatanId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Jabatan dengan id " + req.getJabatanId() + " tidak ditemukan"))
                : null;

        Divisi divisi = req.getDivisiId() != null
                ? divisiRepository.findById(req.getDivisiId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Divisi dengan id " + req.getDivisiId() + " tidak ditemukan"))
                : null;

        // ── Resolve Perusahaan ─────────────────────────────────
        // Prioritas 1: PEMILIK → ambil perusahaan milik callerUserId langsung dari tabel perusahaan
        // Prioritas 2: ADMIN  → ambil dari divisi yang dipilih (divisi sudah terikat perusahaan)
        id.lua.absensikerja.model.entity.Perusahaan perusahaan =
                perusahaanRepository.findByOwnerId(callerUserId).orElse(null);

        if (perusahaan == null && divisi != null) {
            perusahaan = divisi.getPerusahaan();
        }

        // ── Resolve Provinsi & KabupatenKota ──────────────────
        Provinsi provinsi = req.getProvinsiId() != null
                ? provinsiRepository.findById(req.getProvinsiId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Provinsi dengan id " + req.getProvinsiId() + " tidak ditemukan"))
                : null;

        KabupatenKota kabupatenKota = req.getKabupatenKotaId() != null
                ? kabupatenKotaRepository.findById(req.getKabupatenKotaId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Kabupaten/Kota dengan id " + req.getKabupatenKotaId() + " tidak ditemukan"))
                : null;

        // ── Simpan Karyawan (cascade simpan User) ─────────────
        Karyawan karyawan = Karyawan.builder()
                .fotoProfil(req.getFotoProfil())
                .namaLengkap(req.getNamaLengkap())
                .tempatLahir(req.getTempatLahir())
                .tanggalLahir(req.getTanggalLahir())
                .jenisKelamin(req.getJenisKelamin())
                .golonganDarah(req.getGolonganDarah())
                .statusPerkawinan(req.getStatusPerkawinan())
                .agama(req.getAgama())
                .jenisIdentitas(req.getJenisIdentitas())
                .nomorIdentitas(req.getNomorIdentitas())
                .alamatKtp(req.getAlamatKtp())
                .provinsi(provinsi)
                .kabupatenKota(kabupatenKota)
                .alamatDomisili(req.getAlamatDomisili())
                .noTelepon(req.getNoTelepon())
                .zonaWaktu(req.getZonaWaktu())
                .catatan(req.getCatatan())
                .jenjangPendidikan(req.getJenjangPendidikan())
                .jurusan(req.getJurusan())
                .namaInstitusi(req.getNamaInstitusi())
                .tahunLulus(req.getTahunLulus())
                .nip(req.getNip())
                .jabatan(jabatan)
                .divisi(divisi)
                .perusahaan(perusahaan)
                .statusKerja(req.getStatusKerja())
                .tglMulaiBekerja(req.getTglMulaiBekerja())
                .tglMulaiDapatCuti(req.getTglMulaiDapatCuti())
                .sisaCuti(req.getSisaCuti() != null ? req.getSisaCuti() : 0)
                .tglCutiBeakhir(req.getTglCutiBeakhir())
                .user(user)
                .build();

        KaryawanDTO result = toDTO(karyawanRepository.save(karyawan));

        // Kirim email verifikasi — akun belum aktif, harus klik link untuk aktivasi
        String namaPerusahaanEmail = perusahaan != null ? perusahaan.getNamaPerusahaan() : "Perusahaan";
        String verificationUrl = baseUrl + "/auth/verify?token=" + verificationToken;
        emailService.sendVerificationEmail(
                req.getEmail(), req.getNamaLengkap(), namaPerusahaanEmail, verificationUrl);

        return result;
    }

    @Override
    @Transactional
    public KaryawanDTO update(Long id, KaryawanRequest req, Long callerUserId) {
        Karyawan karyawan = getOrThrow(id);

        // ── Validasi NIP unik (kecuali milik sendiri) ──────────
        if (karyawanRepository.existsByNipAndIdNot(req.getNip(), id)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "NIP " + req.getNip() + " sudah digunakan");
        }

        // ── Validasi email unik (kecuali milik sendiri) ────────
        User user = karyawan.getUser();
        if (user != null && !req.getEmail().equals(user.getEmail())
                && userRepository.existsByEmail(req.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Email " + req.getEmail() + " sudah digunakan");
        }

        // ── Update User ────────────────────────────────────────
        if (user != null) {
            user.setNamaLengkap(req.getNamaLengkap());
            user.setEmail(req.getEmail());
            if (req.getPassword() != null && !req.getPassword().isBlank()) {
                if (!req.getPassword().equals(req.getKonfirmasiPassword())) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                            "Kata sandi dan konfirmasi kata sandi tidak cocok");
                }
                user.setPassword(passwordEncoder.encode(req.getPassword()));
            }
        }

        // ── Resolve Jabatan & Divisi ───────────────────────────
        Jabatan jabatan = req.getJabatanId() != null
                ? jabatanRepository.findById(req.getJabatanId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Jabatan dengan id " + req.getJabatanId() + " tidak ditemukan"))
                : null;

        Divisi divisi = req.getDivisiId() != null
                ? divisiRepository.findById(req.getDivisiId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Divisi dengan id " + req.getDivisiId() + " tidak ditemukan"))
                : null;

        // ── Resolve Perusahaan ─────────────────────────────────
        // Prioritas 1: PEMILIK → perusahaan milik callerUserId
        // Prioritas 2: ADMIN   → ambil dari divisi yang dipilih
        // Prioritas 3: pertahankan perusahaan karyawan yang sudah ada
        id.lua.absensikerja.model.entity.Perusahaan perusahaan =
                perusahaanRepository.findByOwnerId(callerUserId).orElse(null);
        if (perusahaan == null && divisi != null) {
            perusahaan = divisi.getPerusahaan();
        }
        if (perusahaan == null) {
            perusahaan = karyawan.getPerusahaan(); // pertahankan yang sudah ada
        }

        // ── Resolve Provinsi & KabupatenKota ──────────────────
        Provinsi provinsi = req.getProvinsiId() != null
                ? provinsiRepository.findById(req.getProvinsiId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Provinsi dengan id " + req.getProvinsiId() + " tidak ditemukan"))
                : null;

        KabupatenKota kabupatenKota = req.getKabupatenKotaId() != null
                ? kabupatenKotaRepository.findById(req.getKabupatenKotaId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Kabupaten/Kota dengan id " + req.getKabupatenKotaId() + " tidak ditemukan"))
                : null;

        // ── Update Karyawan fields ─────────────────────────────
        karyawan.setFotoProfil(req.getFotoProfil());
        karyawan.setNamaLengkap(req.getNamaLengkap());
        karyawan.setTempatLahir(req.getTempatLahir());
        karyawan.setTanggalLahir(req.getTanggalLahir());
        karyawan.setJenisKelamin(req.getJenisKelamin());
        karyawan.setGolonganDarah(req.getGolonganDarah());
        karyawan.setStatusPerkawinan(req.getStatusPerkawinan());
        karyawan.setAgama(req.getAgama());
        karyawan.setJenisIdentitas(req.getJenisIdentitas());
        karyawan.setNomorIdentitas(req.getNomorIdentitas());
        karyawan.setAlamatKtp(req.getAlamatKtp());
        karyawan.setProvinsi(provinsi);
        karyawan.setKabupatenKota(kabupatenKota);
        karyawan.setAlamatDomisili(req.getAlamatDomisili());
        karyawan.setNoTelepon(req.getNoTelepon());
        karyawan.setZonaWaktu(req.getZonaWaktu());
        karyawan.setCatatan(req.getCatatan());
        karyawan.setJenjangPendidikan(req.getJenjangPendidikan());
        karyawan.setJurusan(req.getJurusan());
        karyawan.setNamaInstitusi(req.getNamaInstitusi());
        karyawan.setTahunLulus(req.getTahunLulus());
        karyawan.setNip(req.getNip());
        karyawan.setJabatan(jabatan);
        karyawan.setDivisi(divisi);
        karyawan.setPerusahaan(perusahaan);
        karyawan.setStatusKerja(req.getStatusKerja());
        karyawan.setTglMulaiBekerja(req.getTglMulaiBekerja());
        karyawan.setTglMulaiDapatCuti(req.getTglMulaiDapatCuti());
        karyawan.setSisaCuti(req.getSisaCuti() != null ? req.getSisaCuti() : 0);
        karyawan.setTglCutiBeakhir(req.getTglCutiBeakhir());

        return toDTO(karyawanRepository.save(karyawan));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Karyawan karyawan = getOrThrow(id);
        if (karyawan.isDeleted()) return;
        karyawan.setDeleted(true);
        karyawan.setDeletedAt(java.time.LocalDateTime.now());
        karyawanRepository.save(karyawan);
    }

    @Override
    public List<KaryawanDTO> findAllDeleted(Long ownerId) {
        if (ownerId != null) {
            return perusahaanRepository.findByOwnerId(ownerId)
                    .map(p -> karyawanRepository.findByIsDeletedTrueAndPerusahaanId(p.getId()))
                    .orElse(java.util.Collections.emptyList())
                    .stream().map(this::toDTO).collect(Collectors.toList());
        }
        return karyawanRepository.findByIsDeletedTrue()
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public KaryawanDTO restore(Long id) {
        Karyawan karyawan = getOrThrow(id);
        karyawan.setDeleted(false);
        karyawan.setDeletedAt(null);
        return toDTO(karyawanRepository.save(karyawan));
    }

    @Override
    @Transactional
    public void hardDelete(Long id) {
        Karyawan karyawan = getOrThrow(id);
        karyawanRepository.delete(karyawan);
    }

    // ── Aksi Massal ──────────────────────────────────────────

    @Override
    @Transactional
    public id.lua.absensikerja.model.dto.KaryawanAksiMassalResult aksiMassal(
            id.lua.absensikerja.model.dto.KaryawanAksiMassalRequest req) {
        if (req == null || req.getIds() == null || req.getIds().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Pilih minimal satu karyawan");
        }
        String aksi = req.getAksi() == null ? "" : req.getAksi().trim().toUpperCase();
        if (aksi.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Jenis aksi wajib diisi");
        }

        // Validasi argumen per jenis aksi
        id.lua.absensikerja.model.enums.StatusKerja statusBaru = null;
        Divisi  divisiBaru  = null;
        Jabatan jabatanBaru = null;
        boolean lepasDivisi  = false;
        boolean lepasJabatan = false;

        switch (aksi) {
            case "HAPUS":
                // tidak butuh argumen tambahan
                break;
            case "UBAH_STATUS":
                if (req.getStatusKerja() == null || req.getStatusKerja().isBlank()) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                            "Status kerja wajib diisi");
                }
                try {
                    statusBaru = id.lua.absensikerja.model.enums.StatusKerja
                            .valueOf(req.getStatusKerja().trim().toUpperCase());
                } catch (IllegalArgumentException ex) {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                            "Status kerja tidak valid: " + req.getStatusKerja());
                }
                break;
            case "PINDAH_DIVISI":
                if (req.getDivisiId() == null) {
                    lepasDivisi = true;
                } else {
                    divisiBaru = divisiRepository.findById(req.getDivisiId())
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                    "Divisi tidak ditemukan"));
                }
                break;
            case "PINDAH_JABATAN":
                if (req.getJabatanId() == null) {
                    lepasJabatan = true;
                } else {
                    jabatanBaru = jabatanRepository.findById(req.getJabatanId())
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                    "Jabatan tidak ditemukan"));
                }
                break;
            default:
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Jenis aksi tidak dikenal: " + aksi);
        }

        int berhasil = 0, gagal = 0;
        java.util.List<String> errors = new java.util.ArrayList<>();
        for (Long id : req.getIds()) {
            try {
                Karyawan k = karyawanRepository.findById(id)
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Karyawan id=" + id + " tidak ditemukan"));
                if (k.isDeleted()) {
                    throw new IllegalStateException("Karyawan sudah dihapus");
                }
                switch (aksi) {
                    case "HAPUS":          delete(id); break;
                    case "UBAH_STATUS":    k.setStatusKerja(statusBaru); karyawanRepository.save(k); break;
                    case "PINDAH_DIVISI":  k.setDivisi(lepasDivisi ? null : divisiBaru);  karyawanRepository.save(k); break;
                    case "PINDAH_JABATAN": k.setJabatan(lepasJabatan ? null : jabatanBaru); karyawanRepository.save(k); break;
                }
                berhasil++;
            } catch (Exception ex) {
                gagal++;
                String msg = ex instanceof ResponseStatusException rse
                        ? (rse.getReason() != null ? rse.getReason() : rse.getMessage())
                        : (ex.getMessage() != null ? ex.getMessage() : ex.getClass().getSimpleName());
                errors.add("id=" + id + ": " + msg);
            }
        }

        return id.lua.absensikerja.model.dto.KaryawanAksiMassalResult.builder()
                .aksi(aksi)
                .diminta(req.getIds().size())
                .berhasil(berhasil)
                .gagal(gagal)
                .errors(errors)
                .build();
    }

    // ── helpers ──────────────────────────────────────────────

    @Override
    @Transactional
    public void updatePolaKerja(Long karyawanId, Long polaKerjaId) {
        Karyawan karyawan = getOrThrow(karyawanId);
        if (karyawan.getDivisi() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Karyawan ini belum memiliki divisi");
        }
        PolaKerja pola = polaKerjaRepository.findById(polaKerjaId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Pola kerja tidak ditemukan"));

        // Assign pola ke divisi karyawan jika belum terdaftar
        Divisi divisi = karyawan.getDivisi();
        if (!pola.getDivisiSet().contains(divisi)) {
            pola.getDivisiSet().add(divisi);
            polaKerjaRepository.save(pola);
        }
    }

    private Karyawan getOrThrow(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan dengan id " + id + " tidak ditemukan"));
    }

    private KaryawanDTO toDTO(Karyawan k) {
        User u = k.getUser();
        return KaryawanDTO.builder()
                .id(k.getId())
                .fotoProfil(k.getFotoProfil())
                .namaLengkap(k.getNamaLengkap())
                .tempatLahir(k.getTempatLahir())
                .tanggalLahir(k.getTanggalLahir())
                .jenisKelamin(k.getJenisKelamin())
                .golonganDarah(k.getGolonganDarah())
                .statusPerkawinan(k.getStatusPerkawinan())
                .agama(k.getAgama())
                .jenisIdentitas(k.getJenisIdentitas())
                .nomorIdentitas(k.getNomorIdentitas())
                .alamatKtp(k.getAlamatKtp())
                .provinsiId(k.getProvinsi() != null ? k.getProvinsi().getId() : null)
                .namaProvinsi(k.getProvinsi() != null ? k.getProvinsi().getNamaProvinsi() : null)
                .kabupatenKotaId(k.getKabupatenKota() != null ? k.getKabupatenKota().getId() : null)
                .namaKabupatenKota(k.getKabupatenKota() != null ? k.getKabupatenKota().getNamaKabupatenKota() : null)
                .alamatDomisili(k.getAlamatDomisili())
                .noTelepon(k.getNoTelepon())
                .zonaWaktu(k.getZonaWaktu())
                .catatan(k.getCatatan())
                .jenjangPendidikan(k.getJenjangPendidikan())
                .jurusan(k.getJurusan())
                .namaInstitusi(k.getNamaInstitusi())
                .tahunLulus(k.getTahunLulus())
                .nip(k.getNip())
                .jabatanId(k.getJabatan() != null ? k.getJabatan().getId() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .divisiId(k.getDivisi() != null ? k.getDivisi().getId() : null)
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .statusKerja(k.getStatusKerja())
                .tglMulaiBekerja(k.getTglMulaiBekerja())
                .tglMulaiDapatCuti(k.getTglMulaiDapatCuti())
                .sisaCuti(k.getSisaCuti())
                .tglCutiBeakhir(k.getTglCutiBeakhir())
                .pembaruanCutiAktif(k.isPembaruanCutiAktif())
                .tglPembaruanBerikutnya(k.getTglPembaruanBerikutnya())
                .isDeleted(k.isDeleted())
                .deletedAt(k.getDeletedAt())
                .userId(u != null ? u.getId() : null)
                .email(u != null ? u.getEmail() : null)
                .username(u != null ? u.getUsername() : null)
                .build();
    }
}
