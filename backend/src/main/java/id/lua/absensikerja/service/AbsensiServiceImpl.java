package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.AbsensiDTO;
import id.lua.absensikerja.model.dto.RekapCatatanPresensiDTO;
import id.lua.absensikerja.model.dto.ReviewLemburDTO;
import id.lua.absensikerja.model.dto.RiwayatHapusLemburDTO;
import id.lua.absensikerja.model.dto.RingkasanKehadiranDTO;
import id.lua.absensikerja.model.entity.*;
import id.lua.absensikerja.model.enums.HariKerja;import id.lua.absensikerja.model.enums.PolaHariKerja;
import id.lua.absensikerja.model.enums.StatusAbsensi;
import id.lua.absensikerja.repository.*;
import id.lua.absensikerja.service.PerangkatService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AbsensiServiceImpl implements AbsensiService {

    private final AbsensiRepository          absensiRepository;
    private final KaryawanRepository         karyawanRepository;
    private final PolaKerjaRepository         polaKerjaRepository;
    private final PerangkatService            perangkatService;
    private final KaryawanPerangkatRepository karyawanPerangkatRepository;
    private final DivisiRepository            divisiRepository;
    private final AuthUserUtil                authUserUtil;
    private final id.lua.absensikerja.repository.PerusahaanRepository perusahaanRepository;
    private final id.lua.absensikerja.repository.LokasiKehadiranRepository lokasiKehadiranRepository;
    private final RiwayatHapusLemburRepository riwayatHapusLemburRepository;
    private final UserRepository               userRepository;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── Resolve karyawan dari userId ──────────────────────────
    private Karyawan getKaryawan(Long userId) {
        return karyawanRepository.findByUserId(userId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Data karyawan tidak ditemukan untuk user ini"));
    }

    /**
     * Ambil daftar karyawan aktif milik perusahaan user yang login.
     * Jika user PEMILIK → filter by perusahaan.
     * Jika user ADMIN   → ambil semua (tidak difilter).
     */
    private List<Karyawan> resolveKaryawanList() {
        id.lua.absensikerja.model.entity.User currentUser = authUserUtil.getCurrentUser();
        boolean isPemilik = currentUser.getRole() != null
                && currentUser.getRole().getName() == id.lua.absensikerja.model.enums.RoleType.PEMILIK;

        if (isPemilik) {
            return perusahaanRepository.findByOwnerId(currentUser.getId())
                    .map(p -> karyawanRepository.findByPerusahaanId(p.getId()))
                    .orElse(java.util.Collections.emptyList())
                    .stream()
                    .filter(k -> !k.isDeleted())
                    .collect(Collectors.toList());
        }
        // ADMIN: ambil semua
        return karyawanRepository.findAll()
                .stream()
                .filter(k -> !k.isDeleted())
                .collect(Collectors.toList());
    }

    // ── Resolve PolaKerjaHari aktif hari ini ──────────────────
    private PolaKerjaHari resolvePolaHariIni(Karyawan karyawan, LocalDate tanggal) {
        if (karyawan.getDivisi() == null) return null;
        List<PolaKerja> polaList = polaKerjaRepository.findByDivisiId(karyawan.getDivisi().getId());
        if (polaList.isEmpty()) return null;

        // Ambil pola kerja pertama yang aktif (bisa dikembangkan multi-pola)
        PolaKerja pola = polaList.get(0);

        // Konversi DayOfWeek → HariKerja enum
        DayOfWeek dow = tanggal.getDayOfWeek();
        HariKerja hariKerja = switch (dow) {
            case MONDAY    -> HariKerja.SENIN;
            case TUESDAY   -> HariKerja.SELASA;
            case WEDNESDAY -> HariKerja.RABU;
            case THURSDAY  -> HariKerja.KAMIS;
            case FRIDAY    -> HariKerja.JUMAT;
            case SATURDAY  -> HariKerja.SABTU;
            case SUNDAY    -> HariKerja.MINGGU;
        };

        return pola.getHariList().stream()
                .filter(h -> h.getHari() == hariKerja
                        && h.getPolaHari() == PolaHariKerja.HARI_KERJA)
                .findFirst()
                .orElse(null);
    }

    // ── Hitung keterlambatan (menit) ──────────────────────────
    private int hitungMenitTerlambat(LocalTime jamMasuk, String jamKerjaMulaiStr, int toleransi) {
        if (jamKerjaMulaiStr == null || jamKerjaMulaiStr.isBlank()) return 0;
        try {
            LocalTime jadwal = LocalTime.parse(jamKerjaMulaiStr);
            LocalTime batas  = jadwal.plusMinutes(toleransi);
            if (jamMasuk.isAfter(batas)) {
                return (int) java.time.Duration.between(jadwal, jamMasuk).toMinutes();
            }
        } catch (Exception ignored) {}
        return 0;
    }

    /** Hitung jarak dua koordinat (meter) menggunakan Haversine */
    private double hitungJarakMeter(double lat1, double lng1, double lat2, double lng2) {
        final double R = 6371000;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLng = Math.toRadians(lng2 - lng1);
        double a = Math.sin(dLat/2) * Math.sin(dLat/2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLng/2) * Math.sin(dLng/2);
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    /**
     * Cek apakah koordinat berada di luar semua lokasi kehadiran yang diatur perusahaan.
     * Jika perusahaan belum punya lokasi → dianggap tidak di luar (false).
     */
    private boolean cekDiLuarLokasi(Karyawan karyawan, Double lat, Double lng) {
        if (lat == null || lng == null) return false;
        if (karyawan.getPerusahaan() == null) return false;

        var lokasiList = lokasiKehadiranRepository
                .findByPerusahaanIdOrderByNamaLokasiAsc(karyawan.getPerusahaan().getId())
                .stream().filter(l -> l.isAktif()).toList();

        if (lokasiList.isEmpty()) return false; // belum ada lokasi dikonfigurasi

        for (var lokasi : lokasiList) {
            if (lokasi.getLatitude() == null || lokasi.getLongitude() == null) continue;
            double jarak = hitungJarakMeter(lat, lng,
                    lokasi.getLatitude().doubleValue(),
                    lokasi.getLongitude().doubleValue());
            if (jarak <= lokasi.getRadiusMeter()) return false; // masih dalam radius
        }
        return true; // di luar semua lokasi
    }

    /**
     * Cek apakah deviceId berbeda dari perangkat yang pernah dipakai karyawan sebelumnya.
     * Jika karyawan belum punya riwayat perangkat → dianggap tidak berbeda (presensi pertama).
     */
    private boolean cekPerangkatBerbeda(Karyawan karyawan, String deviceId) {
        if (deviceId == null || deviceId.isBlank()) return false;
        var riwayat = karyawanPerangkatRepository
                .findByKaryawanIdOrderByTerakhirAktifDesc(karyawan.getId());
        if (riwayat.isEmpty()) return false; // belum ada riwayat → bukan berbeda
        // Cek apakah deviceId ini sudah pernah terdaftar
        return riwayat.stream().noneMatch(p -> deviceId.equals(p.getDeviceId()));
    }

    /** Cek apakah ini presensi pertama kali karyawan (belum pernah check-in sama sekali) */
    private boolean cekPresensiPertamaKali(Karyawan karyawan) {
        return absensiRepository.findByKaryawanOrderByTanggalDesc(karyawan).isEmpty();
    }

    // ── toDTO ─────────────────────────────────────────────────
    private AbsensiDTO toDTO(Absensi a) {
        String namaHari = a.getTanggal().getDayOfWeek()
                .getDisplayName(TextStyle.FULL, new Locale("id", "ID")).toUpperCase();
        Karyawan k = a.getKaryawan();

        String fotoMasukUrl  = a.getFotoMasuk()  != null ? baseUrl + "/" + a.getFotoMasuk()  : null;
        String fotoKeluarUrl = a.getFotoKeluar() != null ? baseUrl + "/" + a.getFotoKeluar() : null;

        String lokasiMasukUrl  = (a.getLokasiMasukLat()  != null && a.getLokasiMasukLng()  != null)
                ? "https://www.google.com/maps?q=" + a.getLokasiMasukLat()  + "," + a.getLokasiMasukLng()  : null;
        String lokasiKeluarUrl = (a.getLokasiKeluarLat() != null && a.getLokasiKeluarLng() != null)
                ? "https://www.google.com/maps?q=" + a.getLokasiKeluarLat() + "," + a.getLokasiKeluarLng() : null;

        // Ambil info perangkat terbaru karyawan
        var perangkatList = karyawanPerangkatRepository.findByKaryawanIdOrderByTerakhirAktifDesc(k.getId());
        KaryawanPerangkat perangkat = perangkatList.isEmpty() ? null : perangkatList.get(0);

        // Ambil info jadwal kerja dari pola kerja hari tersebut
        PolaKerjaHari phk = resolvePolaHariIni(k, a.getTanggal());

        return AbsensiDTO.builder()
                .id(a.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .fotoProfil(k.getFotoProfil() != null ? baseUrl + "/" + k.getFotoProfil() : null)
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .tanggal(a.getTanggal())
                .namaHari(namaHari)
                .bulan(a.getTanggal().getMonthValue())
                .tahun(a.getTanggal().getYear())
                .jamMasuk(a.getJamMasuk())
                .jamKeluar(a.getJamKeluar())
                .jamMulaiIstirahat(a.getJamMulaiIstirahat())
                .jamSelesaiIstirahat(a.getJamSelesaiIstirahat())
                .jamMulaiLembur(a.getJamMulaiLembur())
                .jamSelesaiLembur(a.getJamSelesaiLembur())
                .jamKerjaMulai(a.getJamKerjaMulai())
                .jamKerjaSelesai(a.getJamKerjaSelesai())
                .namaPolaKerja(a.getNamaPolaKerja())
                .menitTerlambat(a.getMenitTerlambat())
                .status(a.getStatus())
                .catatanMasuk(a.getCatatanMasuk())
                .catatanKeluar(a.getCatatanKeluar())
                .fotoMasukUrl(fotoMasukUrl)
                .fotoKeluarUrl(fotoKeluarUrl)
                .lokasiMasukUrl(lokasiMasukUrl)
                .lokasiKeluarUrl(lokasiKeluarUrl)
                .sudahCheckIn(a.getJamMasuk() != null)
                .sudahCheckOut(a.getJamKeluar() != null)
                .namaPerangkat(perangkat != null ? perangkat.getNamaPerangkat() : null)
                .modelPerangkat(perangkat != null ? perangkat.getModelPerangkat() : null)
                .manufaktur(perangkat != null ? perangkat.getManufaktur() : null)
                .deviceId(perangkat != null ? perangkat.getDeviceId() : null)
                .platform(perangkat != null ? perangkat.getPlatform() : null)
                .toleransiKeterlambatan(phk != null && phk.getPolaKerja().getToleransiKeterlambatan() != null
                        ? phk.getPolaKerja().getToleransiKeterlambatan() : 0)
                .polaKerjaHariId(phk != null ? phk.getId() : null)
                .jamIstirahatMulai(phk != null ? phk.getMulaiIstirahat() : null)
                .jamIstirahatSelesai(phk != null ? phk.getSelesaiIstirahat() : null)
                .maksMenitIstirahat(phk != null ? phk.getMaksMenitIstirahat() : null)
                .zonaWaktu(k.getZonaWaktu() != null ? k.getZonaWaktu().name() : null)
                .perluDicek(Boolean.TRUE.equals(a.getPerluDicek()))
                .sudahDicek(Boolean.TRUE.equals(a.getSudahDicek()))
                .alasanReview(a.getAlasanReview())
                .diLuarLokasi(Boolean.TRUE.equals(a.getDiLuarLokasi()))
                .perangkatBerbeda(Boolean.TRUE.equals(a.getPerangkatBerbeda()))
                .build();
    }

    // ── BASE URL dari application.properties (app.base-url) ──

    @Override
    public AbsensiDTO getHariIni(Long userId) {
        Karyawan karyawan = getKaryawan(userId);
        LocalDate today = LocalDate.now();
        Optional<Absensi> opt = absensiRepository.findByKaryawanAndTanggal(karyawan, today);
        if (opt.isEmpty()) {
            // Belum check-in hari ini — kembalikan info jadwal saja
            PolaKerjaHari phk = resolvePolaHariIni(karyawan, today);
            String namaHari = today.getDayOfWeek()
                    .getDisplayName(TextStyle.FULL, new Locale("id", "ID")).toUpperCase();
            return AbsensiDTO.builder()
                    .karyawanId(karyawan.getId())
                    .namaKaryawan(karyawan.getNamaLengkap())
                    .fotoProfil(karyawan.getFotoProfil() != null ? baseUrl + "/" + karyawan.getFotoProfil() : null)
                    .namaDivisi(karyawan.getDivisi() != null ? karyawan.getDivisi().getNamaDivisi() : null)
                    .namaJabatan(karyawan.getJabatan() != null ? karyawan.getJabatan().getNamaJabatan() : null)
                    .tanggal(today)
                    .namaHari(namaHari)
                    .bulan(today.getMonthValue())
                    .tahun(today.getYear())
                    .jamKerjaMulai(phk != null ? phk.getJamMasuk() : null)
                    .jamKerjaSelesai(phk != null ? phk.getJamKeluar() : null)
                    .namaPolaKerja(phk != null ? phk.getPolaKerja().getNamaPolaKerja() : null)
                    .sudahCheckIn(false)
                    .sudahCheckOut(false)
                    .build();
        }
        return toDTO(opt.get());
    }

    @Override
    public List<AbsensiDTO> getRiwayat(Long userId, int bulan, int tahun) {
        Karyawan karyawan = getKaryawan(userId);
        LocalDate from = LocalDate.of(tahun, bulan, 1);
        LocalDate to   = from.withDayOfMonth(from.lengthOfMonth());
        return absensiRepository
                .findByKaryawanAndTanggalBetweenOrderByTanggalDesc(karyawan, from, to)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public AbsensiDTO checkIn(Long userId, String catatan, String fotoPath,
                              String deviceId, String namaPerangkat,
                              String modelPerangkat, String manufaktur, String platform,
                              Double lat, Double lng) {
        Karyawan karyawan = getKaryawan(userId);
        LocalDate today = LocalDate.now();

        if (absensiRepository.existsByKaryawanAndTanggal(karyawan, today)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Sudah melakukan check-in hari ini");
        }

        LocalTime now = LocalTime.now();
        PolaKerjaHari phk = resolvePolaHariIni(karyawan, today);

        int toleransi = 0;
        String jamMulai = null, jamSelesai = null, namaPolanya = null;
        if (phk != null) {
            toleransi  = phk.getPolaKerja().getToleransiKeterlambatan() != null
                    ? phk.getPolaKerja().getToleransiKeterlambatan() : 0;
            jamMulai   = phk.getJamMasuk();
            jamSelesai = phk.getJamKeluar();
            namaPolanya = phk.getPolaKerja().getNamaPolaKerja();
        }

        int menitTerlambat = hitungMenitTerlambat(now, jamMulai, toleransi);

        // ── Deteksi kondisi review ────────────────────────────
        boolean pertamaKali     = cekPresensiPertamaKali(karyawan);
        boolean diLuarLokasi    = cekDiLuarLokasi(karyawan, lat, lng);
        boolean perangkatBerbeda = cekPerangkatBerbeda(karyawan, deviceId);

        // Tentukan alasan review
        String alasanReview = null;
        if (pertamaKali) {
            alasanReview = "Presensi Pertama Kali";
        } else if (diLuarLokasi && perangkatBerbeda) {
            alasanReview = "Presensi di Luar Area & Device Berbeda";
        } else if (diLuarLokasi) {
            alasanReview = "Presensi di Luar Area";
        } else if (perangkatBerbeda) {
            alasanReview = "Presensi Menggunakan Device Berbeda";
        }

        // Perlu dicek jika salah satu kondisi terpenuhi
        boolean perluDicek = pertamaKali || diLuarLokasi || perangkatBerbeda;

        Absensi absensi = Absensi.builder()
                .karyawan(karyawan)
                .tanggal(today)
                .jamMasuk(now)
                .jamKerjaMulai(jamMulai)
                .jamKerjaSelesai(jamSelesai)
                .namaPolaKerja(namaPolanya)
                .menitTerlambat(menitTerlambat)
                .status(StatusAbsensi.HADIR)
                .catatanMasuk(catatan)
                .fotoMasuk(fotoPath)
                .lokasiMasukLat(lat)
                .lokasiMasukLng(lng)
                .perluDicek(perluDicek)
                .diLuarLokasi(diLuarLokasi)
                .perangkatBerbeda(perangkatBerbeda)
                .alasanReview(alasanReview)
                .sudahDicek(!perluDicek)
                .build();

        // Daftarkan / perbarui perangkat yang digunakan
        perangkatService.registerOrUpdate(karyawan, deviceId,
                namaPerangkat, modelPerangkat, manufaktur, platform);

        return toDTO(absensiRepository.save(absensi));
    }

    @Override
    @Transactional
    public AbsensiDTO checkOut(Long userId, String catatan, Double lat, Double lng) {
        Karyawan karyawan = getKaryawan(userId);
        LocalDate today = LocalDate.now();

        Absensi absensi = absensiRepository.findByKaryawanAndTanggal(karyawan, today)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Belum melakukan check-in hari ini"));

        if (absensi.getJamKeluar() != null) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Sudah melakukan check-out hari ini");
        }

        absensi.setJamKeluar(LocalTime.now());
        absensi.setCatatanKeluar(catatan);
        absensi.setLokasiKeluarLat(lat);
        absensi.setLokasiKeluarLng(lng);

        return toDTO(absensiRepository.save(absensi));
    }

    // ── Admin endpoints ───────────────────────────────────────

    @Override
    public List<AbsensiDTO> getRiwayatByKaryawan(Long karyawanId, int bulan, int tahun) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
        LocalDate from = LocalDate.of(tahun, bulan, 1);
        LocalDate to   = from.withDayOfMonth(from.lengthOfMonth());
        return absensiRepository
                .findByKaryawanAndTanggalBetweenOrderByTanggalDesc(karyawan, from, to)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public AbsensiDTO tambahManual(Long karyawanId, LocalDate tanggal,
                                   String tipePresensi,
                                   String waktuMulai, String waktuSelesai,
                                   String catatan) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));

        PolaKerjaHari phk = resolvePolaHariIni(karyawan, tanggal);
        int toleransi = 0;
        String jamMulaiTemp = null, jamSelesaiTemp = null, namaPolanyaTemp = null;
        if (phk != null) {
            toleransi      = phk.getPolaKerja().getToleransiKeterlambatan() != null
                    ? phk.getPolaKerja().getToleransiKeterlambatan() : 0;
            jamMulaiTemp   = phk.getJamMasuk();
            jamSelesaiTemp = phk.getJamKeluar();
            namaPolanyaTemp = phk.getPolaKerja().getNamaPolaKerja();
        }

        // effectively final copies for use inside lambda
        final String jamMulai    = jamMulaiTemp;
        final String jamSelesai  = jamSelesaiTemp;
        final String namaPolanya = namaPolanyaTemp;
        final int    tolFinal    = toleransi;

        LocalTime tMulai   = parseTime(waktuMulai);
        LocalTime tSelesai = parseTime(waktuSelesai);

        // Cari atau buat record absensi hari ini
        Absensi absensi = absensiRepository
                .findByKaryawanAndTanggal(karyawan, tanggal)
                .orElseGet(() -> Absensi.builder()
                        .karyawan(karyawan)
                        .tanggal(tanggal)
                        .jamKerjaMulai(jamMulai)
                        .jamKerjaSelesai(jamSelesai)
                        .namaPolaKerja(namaPolanya)
                        .menitTerlambat(0)
                        .status(StatusAbsensi.HADIR)
                        .build());

        switch (tipePresensi.toUpperCase()) {
            case "MASUK_KELUAR" -> {
                absensi.setJamMasuk(tMulai);
                absensi.setJamKeluar(tSelesai);
                if (tMulai != null) {
                    absensi.setMenitTerlambat(hitungMenitTerlambat(tMulai, jamMulai, tolFinal));
                }
                if (catatan != null) absensi.setCatatanMasuk(catatan);
            }
            case "ISTIRAHAT" -> {
                absensi.setJamMulaiIstirahat(tMulai);
                absensi.setJamSelesaiIstirahat(tSelesai);
            }
            case "LEMBUR" -> {
                absensi.setJamMulaiLembur(tMulai);
                absensi.setJamSelesaiLembur(tSelesai);
            }
            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Tipe presensi tidak valid: " + tipePresensi);
        }

        return toDTO(absensiRepository.save(absensi));
    }

    private LocalTime parseTime(String s) {
        if (s == null || s.isBlank()) return null;
        try { return LocalTime.parse(s); } catch (Exception e) { return null; }
    }

    // ── Ringkasan Kehadiran ───────────────────────────────────

    @Override
    public RingkasanKehadiranDTO getRingkasanByKaryawan(Long karyawanId, int bulan, int tahun) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));

        LocalDate from = LocalDate.of(tahun, bulan, 1);
        LocalDate to   = from.withDayOfMonth(from.lengthOfMonth());

        List<Absensi> list = absensiRepository
                .findByKaryawanAndTanggalBetweenOrderByTanggalDesc(karyawan, from, to);

        int totalHariJadwal   = list.size();
        int totalHadir        = 0;
        int totalAlpha        = 0;
        int totalIzin         = 0;
        int totalSakit        = 0;
        int totalTerlambat    = 0;
        int totalHariToleransi = 0;
        long menitTerlambat   = 0;
        long menitJadwal      = 0;
        long menitKerja       = 0;
        long menitIstirahat   = 0;
        long menitLembur      = 0;
        long menitToleransi   = 0;

        for (Absensi a : list) {
            // status
            if (a.getStatus() == StatusAbsensi.HADIR)       totalHadir++;
            else if (a.getStatus() == StatusAbsensi.ALPHA)  totalAlpha++;
            else if (a.getStatus() == StatusAbsensi.IZIN)   totalIzin++;
            else if (a.getStatus() == StatusAbsensi.SAKIT)  totalSakit++;

            // keterlambatan
            int mt = a.getMenitTerlambat() != null ? a.getMenitTerlambat() : 0;
            if (mt > 0) {
                totalTerlambat++;
                menitTerlambat += mt;
            }

            // jam jadwal kerja
            if (a.getJamKerjaMulai() != null && a.getJamKerjaSelesai() != null) {
                menitJadwal += hitungDurasiMenit(a.getJamKerjaMulai(), a.getJamKerjaSelesai());
            }

            // jam kerja aktual
            if (a.getJamMasuk() != null && a.getJamKeluar() != null) {
                long dur = java.time.Duration.between(a.getJamMasuk(), a.getJamKeluar()).toMinutes();
                // kurangi istirahat
                if (a.getJamMulaiIstirahat() != null && a.getJamSelesaiIstirahat() != null) {
                    long ist = java.time.Duration.between(a.getJamMulaiIstirahat(), a.getJamSelesaiIstirahat()).toMinutes();
                    if (ist > 0) dur -= ist;
                }
                if (dur > 0) menitKerja += dur;
            }

            // istirahat
            if (a.getJamMulaiIstirahat() != null && a.getJamSelesaiIstirahat() != null) {
                long ist = java.time.Duration.between(a.getJamMulaiIstirahat(), a.getJamSelesaiIstirahat()).toMinutes();
                if (ist > 0) menitIstirahat += ist;
            }

            // lembur
            if (a.getJamMulaiLembur() != null && a.getJamSelesaiLembur() != null) {
                long lem = java.time.Duration.between(a.getJamMulaiLembur(), a.getJamSelesaiLembur()).toMinutes();
                if (lem > 0) menitLembur += lem;
            }
        }

        // persentase kehadiran
        double persenHadir = totalHariJadwal == 0 ? 0
                : Math.round((double) totalHadir / totalHariJadwal * 100 * 100.0) / 100.0;

        // persentase capaian jam kerja
        double persenCapaian = menitJadwal == 0 ? 0
                : Math.round((double) menitKerja / menitJadwal * 100 * 100.0) / 100.0;

        // jam kerja tidak terpenuhi
        long menitTidakTerpenuhi = Math.max(0, menitJadwal - menitKerja);

        // target kehadiran jabatan
        Integer targetKehadiran = null;
        if (karyawan.getJabatan() != null && !karyawan.getJabatan().getTargetKehadiranList().isEmpty()) {
            targetKehadiran = karyawan.getJabatan().getTargetKehadiranList()
                    .stream().mapToInt(JabatanTargetKehadiran::getTargetPersen).max().orElse(0);
        }

        return RingkasanKehadiranDTO.builder()
                .totalHariJadwalKerja(totalHariJadwal)
                .totalHariKehadiran(totalHadir)
                .totalHariTidakMasuk(totalAlpha)
                .totalHariCuti(0)
                .totalHariIzin(totalIzin)
                .totalHariSakit(totalSakit)
                .persentaseKehadiran(persenHadir)
                .targetKehadiranJabatan(targetKehadiran)
                .totalMenitJadwalKerja(menitJadwal)
                .totalMenitKerja(menitKerja)
                .persentaseCapaianJamKerja(persenCapaian)
                .totalMenitIstirahat(menitIstirahat)
                .totalMenitLembur(menitLembur)
                .totalHariOpenshift(0)
                .totalMenitTerlambat(menitTerlambat)
                .totalHariTerlambat(totalTerlambat)
                .totalDendaKeterlambatan(0)
                .totalHariTerlambatPresensiKeluar(0)
                .totalDendaTerlambatPresensiKeluar(0)
                .totalMenitToleransi(menitToleransi)
                .totalHariToleransi(totalHariToleransi)
                .totalMenitIzinJam(0)
                .totalMenitIzinJamBelumDiganti(0)
                .totalHariPresensiKeluarOtomatis(0)
                .menitJamKerjaTidakTerpenuhi(menitTidakTerpenuhi)
                .build();
    }

    /** Hitung durasi menit dari string HH:mm */
    private long hitungDurasiMenit(String awal, String akhir) {
        try {
            LocalTime tAwal  = LocalTime.parse(awal.length() == 5 ? awal : awal.substring(0, 5));
            LocalTime tAkhir = LocalTime.parse(akhir.length() == 5 ? akhir : akhir.substring(0, 5));
            long diff = java.time.Duration.between(tAwal, tAkhir).toMinutes();
            return diff > 0 ? diff : 0;
        } catch (Exception e) {
            return 0;
        }
    }

    @Override
    public List<AbsensiDTO> getKehadiranHarian(LocalDate tanggal) {
        // Kumpulkan karyawanId milik perusahaan user yang login
        java.util.Set<Long> karyawanIdSet = resolveKaryawanList().stream()
                .map(Karyawan::getId)
                .collect(java.util.stream.Collectors.toSet());

        return absensiRepository.findByTanggal(tanggal)
                .stream()
                .filter(a -> a.getKaryawan() != null
                        && karyawanIdSet.contains(a.getKaryawan().getId()))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void batalkanPresensi(Long absensiId) {
        Absensi absensi = absensiRepository.findById(absensiId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Data absensi tidak ditemukan"));
        absensiRepository.delete(absensi);
    }

    @Override
    @Transactional
    public AbsensiDTO ubahWaktuPresensi(Long absensiId, String jamMasuk, String jamKeluar) {
        Absensi absensi = absensiRepository.findById(absensiId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Data absensi tidak ditemukan"));
        if (jamMasuk != null && !jamMasuk.isBlank()) {
            absensi.setJamMasuk(LocalTime.parse(jamMasuk.length() > 5 ? jamMasuk.substring(0, 5) : jamMasuk));
        }
        if (jamKeluar != null && !jamKeluar.isBlank()) {
            absensi.setJamKeluar(LocalTime.parse(jamKeluar.length() > 5 ? jamKeluar.substring(0, 5) : jamKeluar));
        } else if (jamKeluar != null && jamKeluar.isBlank()) {
            absensi.setJamKeluar(null); // reset jam keluar
        }
        return toDTO(absensiRepository.save(absensi));
    }

    // ── Review Kehadiran ──────────────────────────────────────

    @Override
    public List<AbsensiDTO> getReviewPerluDicek(Long divisiId, String cari) {
        java.util.Set<Long> karyawanIdSet = resolveKaryawanList().stream()
                .map(Karyawan::getId).collect(java.util.stream.Collectors.toSet());

        List<Absensi> list = divisiId != null
                ? absensiRepository.findPerluDicekByDivisi(divisiId)
                : absensiRepository.findPerluDicek();

        return list.stream()
                .filter(a -> karyawanIdSet.contains(a.getKaryawan().getId()))
                .filter(a -> cari == null || cari.isBlank() ||
                        a.getKaryawan().getNamaLengkap().toLowerCase().contains(cari.toLowerCase()))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<AbsensiDTO> getReviewSudahDicek(Long divisiId, String cari) {
        java.util.Set<Long> karyawanIdSet = resolveKaryawanList().stream()
                .map(Karyawan::getId).collect(java.util.stream.Collectors.toSet());

        List<Absensi> list = divisiId != null
                ? absensiRepository.findSudahDicekByDivisi(divisiId)
                : absensiRepository.findSudahDicek();

        return list.stream()
                .filter(a -> karyawanIdSet.contains(a.getKaryawan().getId()))
                .filter(a -> cari == null || cari.isBlank() ||
                        a.getKaryawan().getNamaLengkap().toLowerCase().contains(cari.toLowerCase()))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public AbsensiDTO tandaiPerluDicek(Long absensiId, String alasan) {
        Absensi absensi = absensiRepository.findById(absensiId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Data absensi tidak ditemukan"));
        absensi.setPerluDicek(true);
        absensi.setSudahDicek(false);
        if (alasan != null && !alasan.isBlank()) {
            absensi.setAlasanReview(alasan);
        }
        return toDTO(absensiRepository.save(absensi));
    }

    @Override
    @Transactional
    public AbsensiDTO tandaiSudahDicek(Long absensiId) {
        Absensi absensi = absensiRepository.findById(absensiId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Data absensi tidak ditemukan"));
        absensi.setSudahDicek(true);
        return toDTO(absensiRepository.save(absensi));
    }

    @Override
    @Transactional
    public int tandaiSemuaSudahDicek(Long divisiId) {
        java.util.Set<Long> karyawanIdSet = resolveKaryawanList().stream()
                .map(Karyawan::getId).collect(java.util.stream.Collectors.toSet());

        List<Absensi> list = divisiId != null
                ? absensiRepository.findPerluDicekByDivisi(divisiId)
                : absensiRepository.findPerluDicek();

        list.stream()
                .filter(a -> karyawanIdSet.contains(a.getKaryawan().getId()))
                .forEach(a -> a.setSudahDicek(true));
        absensiRepository.saveAll(list);
        return list.size();
    }

    @Override
    public List<RingkasanKehadiranRow> getRingkasanSemua(
            LocalDate dari, LocalDate sampai, Long divisiId, String cari) {

        // Ambil karyawan sesuai perusahaan user yang login
        List<Karyawan> karyawanList = resolveKaryawanList();

        // Filter spesifik divisi jika dipilih
        if (divisiId != null) {
            karyawanList = karyawanList.stream()
                    .filter(k -> k.getDivisi() != null && divisiId.equals(k.getDivisi().getId()))
                    .collect(Collectors.toList());
        }

        // Filter cari nama
        if (cari != null && !cari.isBlank()) {
            String q = cari.toLowerCase();
            karyawanList = karyawanList.stream()
                    .filter(k -> k.getNamaLengkap().toLowerCase().contains(q))
                    .collect(Collectors.toList());
        }

        List<RingkasanKehadiranRow> result = new ArrayList<>();
        for (Karyawan k : karyawanList) {
            RingkasanKehadiranDTO ringkasan = getRingkasanByKaryawanRentang(k, dari, sampai);

            String namaPolaKerja = "-";
            if (k.getDivisi() != null) {
                List<PolaKerja> polaList = polaKerjaRepository.findByDivisiId(k.getDivisi().getId());
                if (!polaList.isEmpty()) namaPolaKerja = polaList.getFirst().getNamaPolaKerja();
            }

            result.add(RingkasanKehadiranRow.builder()
                    .karyawanId(k.getId())
                    .namaKaryawan(k.getNamaLengkap())
                    .fotoProfil(k.getFotoProfil())
                    .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                    .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                    .namaPolaKerja(namaPolaKerja)
                    .ringkasan(ringkasan)
                    .build());
        }
        return result;
    }

    /** Hitung ringkasan untuk rentang tanggal bebas */
    private RingkasanKehadiranDTO getRingkasanByKaryawanRentang(
            Karyawan karyawan, LocalDate dari, LocalDate sampai) {

        List<Absensi> list = absensiRepository
                .findByKaryawanAndTanggalBetweenOrderByTanggalDesc(karyawan, dari, sampai);

        int totalHariJadwal   = list.size();
        int totalHadir = 0, totalAlpha = 0, totalIzin = 0, totalSakit = 0;
        int totalTerlambat = 0, totalHariToleransi = 0;
        long menitTerlambat = 0, menitJadwal = 0, menitKerja = 0;
        long menitIstirahat = 0, menitLembur = 0, menitToleransi = 0;
        long menitTidakTerpenuhi = 0;

        for (Absensi a : list) {
            if (a.getStatus() == StatusAbsensi.HADIR)      totalHadir++;
            else if (a.getStatus() == StatusAbsensi.ALPHA) totalAlpha++;
            else if (a.getStatus() == StatusAbsensi.IZIN)  totalIzin++;
            else if (a.getStatus() == StatusAbsensi.SAKIT) totalSakit++;

            int mt = a.getMenitTerlambat() != null ? a.getMenitTerlambat() : 0;
            if (mt > 0) { totalTerlambat++; menitTerlambat += mt; }

            if (a.getJamKerjaMulai() != null && a.getJamKerjaSelesai() != null)
                menitJadwal += hitungDurasiMenit(a.getJamKerjaMulai(), a.getJamKerjaSelesai());

            if (a.getJamMasuk() != null && a.getJamKeluar() != null) {
                long dur = java.time.Duration.between(a.getJamMasuk(), a.getJamKeluar()).toMinutes();
                if (a.getJamMulaiIstirahat() != null && a.getJamSelesaiIstirahat() != null) {
                    long ist = java.time.Duration.between(a.getJamMulaiIstirahat(), a.getJamSelesaiIstirahat()).toMinutes();
                    if (ist > 0) dur -= ist;
                }
                if (dur > 0) menitKerja += dur;
            }

            if (a.getJamMulaiIstirahat() != null && a.getJamSelesaiIstirahat() != null) {
                long ist = java.time.Duration.between(a.getJamMulaiIstirahat(), a.getJamSelesaiIstirahat()).toMinutes();
                if (ist > 0) menitIstirahat += ist;
            }

            if (a.getJamMulaiLembur() != null && a.getJamSelesaiLembur() != null) {
                long lem = java.time.Duration.between(a.getJamMulaiLembur(), a.getJamSelesaiLembur()).toMinutes();
                if (lem > 0) menitLembur += lem;
            }
        }

        double pctHadir = totalHariJadwal > 0 ? (totalHadir * 100.0 / totalHariJadwal) : 0.0;
        double pctJam   = menitJadwal > 0 ? (menitKerja * 100.0 / menitJadwal) : 0.0;
        if (menitJadwal > menitKerja) menitTidakTerpenuhi = menitJadwal - menitKerja;

        return RingkasanKehadiranDTO.builder()
                .totalHariJadwalKerja(totalHariJadwal)
                .totalHariKehadiran(totalHadir)
                .totalHariTidakMasuk(totalAlpha)
                .totalHariCuti(0)
                .totalHariIzin(totalIzin)
                .totalHariSakit(totalSakit)
                .persentaseKehadiran(Math.round(pctHadir * 100.0) / 100.0)
                .targetKehadiranJabatan(null)
                .totalMenitJadwalKerja(menitJadwal)
                .totalMenitKerja(menitKerja)
                .persentaseCapaianJamKerja(Math.round(pctJam * 100.0) / 100.0)
                .totalMenitIstirahat(menitIstirahat)
                .totalMenitLembur(menitLembur)
                .totalHariOpenshift(0)
                .totalMenitTerlambat(menitTerlambat)
                .totalHariTerlambat(totalTerlambat)
                .totalDendaKeterlambatan(0)
                .totalHariTerlambatPresensiKeluar(0)
                .totalDendaTerlambatPresensiKeluar(0)
                .totalMenitToleransi(menitToleransi)
                .totalHariToleransi(totalHariToleransi)
                .totalMenitIzinJam(0)
                .totalMenitIzinJamBelumDiganti(0)
                .totalHariPresensiKeluarOtomatis(0)
                .menitJamKerjaTidakTerpenuhi(menitTidakTerpenuhi)
                .build();
    }

    // ── Rekap Catatan Presensi ────────────────────────────────

    @Override
    public RekapCatatanPresensiDTO getRekapCatatanPresensi(
            LocalDate tanggalDalamMinggu, Long divisiId, String cari, Long userId) {

        // Normalisasi ke Senin minggu tersebut
        LocalDate senin  = tanggalDalamMinggu.with(DayOfWeek.MONDAY);
        LocalDate minggu = senin.plusDays(6);
        LocalDate today  = LocalDate.now();

        // ── Buat info hari ──────────────────────────────────
        List<RekapCatatanPresensiDTO.HariInfo> hariList = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            LocalDate tgl = senin.plusDays(i);
            String namaHari = tgl.getDayOfWeek()
                    .getDisplayName(TextStyle.FULL, new Locale("id", "ID"));
            hariList.add(RekapCatatanPresensiDTO.HariInfo.builder()
                    .tanggal(tgl)
                    .namaHari(namaHari.substring(0, 1).toUpperCase() + namaHari.substring(1))
                    .hariIni(tgl.equals(today))
                    .libur(false)
                    .keteranganLibur(null)
                    .build());
        }

        // ── Ambil karyawan aktif ─────────────────────────────
        List<Karyawan> semuaKaryawan = resolveKaryawanList();
        if (divisiId != null) {
            semuaKaryawan = semuaKaryawan.stream()
                    .filter(k -> k.getDivisi() != null && k.getDivisi().getId().equals(divisiId))
                    .collect(Collectors.toList());
        }
        if (cari != null && !cari.isBlank()) {
            String q = cari.trim().toLowerCase();
            semuaKaryawan = semuaKaryawan.stream()
                    .filter(k -> k.getNamaLengkap().toLowerCase().contains(q) ||
                                 (k.getDivisi() != null && k.getDivisi().getNamaDivisi().toLowerCase().contains(q)))
                    .collect(Collectors.toList());
        }
        semuaKaryawan.sort(Comparator.comparing(Karyawan::getNamaLengkap));

        // ── Ambil semua absensi dalam rentang minggu ─────────
        List<Absensi> absensiMingguIni = absensiRepository
                .findByTanggalBetweenOrderByTanggalDesc(senin, minggu);

        // Index by karyawanId + tanggal
        Map<String, Absensi> absensiIndex = new HashMap<>();
        for (Absensi a : absensiMingguIni) {
            absensiIndex.put(a.getKaryawan().getId() + "_" + a.getTanggal(), a);
        }

        DateTimeFormatter timeFmt = DateTimeFormatter.ofPattern("HH:mm:ss");

        // ── Bangun baris per karyawan ─────────────────────────
        List<RekapCatatanPresensiDTO.KaryawanRow> karyawanRows = new ArrayList<>();
        for (Karyawan k : semuaKaryawan) {
            Map<String, RekapCatatanPresensiDTO.PresensiHari> presensiMap = new LinkedHashMap<>();
            for (RekapCatatanPresensiDTO.HariInfo hari : hariList) {
                String key = k.getId() + "_" + hari.getTanggal();
                Absensi a = absensiIndex.get(key);

                RekapCatatanPresensiDTO.PresensiHari ph;
                if (a != null) {
                    ph = RekapCatatanPresensiDTO.PresensiHari.builder()
                            .absensiId(a.getId())
                            .jamMasuk(a.getJamMasuk() != null ? a.getJamMasuk().format(timeFmt) : null)
                            .jamKeluar(a.getJamKeluar() != null ? a.getJamKeluar().format(timeFmt) : null)
                            .catatanMasuk(a.getCatatanMasuk())
                            .catatanKeluar(a.getCatatanKeluar())
                            .tidakMasuk(false)
                            .build();
                } else {
                    // Hari sudah lewat & bukan hari libur → tandai tidak/belum masuk
                    boolean sudahLewat = !hari.getTanggal().isAfter(today);
                    ph = RekapCatatanPresensiDTO.PresensiHari.builder()
                            .tidakMasuk(sudahLewat && !hari.isLibur())
                            .build();
                }
                presensiMap.put(hari.getTanggal().toString(), ph);
            }

            karyawanRows.add(RekapCatatanPresensiDTO.KaryawanRow.builder()
                    .karyawanId(k.getId())
                    .namaKaryawan(k.getNamaLengkap())
                    .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                    .presensiPerHari(presensiMap)
                    .build());
        }

        return RekapCatatanPresensiDTO.builder()
                .tanggalMulai(senin)
                .tanggalSelesai(minggu)
                .hariList(hariList)
                .karyawanList(karyawanRows)
                .build();
    }

    // ── Review Lembur ─────────────────────────────────────────

    private ReviewLemburDTO toLemburDTO(Absensi a) {
        Karyawan k = a.getKaryawan();
        String jamMulai   = a.getJamMulaiLembur()   != null ? a.getJamMulaiLembur().toString()   : null;
        String jamSelesai = a.getJamSelesaiLembur()  != null ? a.getJamSelesaiLembur().toString() : null;

        String totalLembur = null;
        if (a.getJamMulaiLembur() != null && a.getJamSelesaiLembur() != null) {
            long menit = java.time.Duration.between(a.getJamMulaiLembur(), a.getJamSelesaiLembur()).toMinutes();
            if (menit < 0) menit += 24 * 60; // overnight
            long jam = menit / 60;
            long sisa = menit % 60;
            totalLembur = (jam > 0 ? jam + "j " : "") + sisa + "m";
        }

        String namaHari = a.getTanggal().getDayOfWeek()
                .getDisplayName(TextStyle.FULL, new Locale("id", "ID"));
        namaHari = namaHari.substring(0,1).toUpperCase() + namaHari.substring(1);

        return ReviewLemburDTO.builder()
                .id(a.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .fotoProfil(k.getFotoProfil() != null ? baseUrl + "/" + k.getFotoProfil() : null)
                .tanggal(a.getTanggal())
                .namaHari(namaHari)
                .jamMulaiLembur(jamMulai)
                .jamSelesaiLembur(jamSelesai)
                .totalLembur(totalLembur)
                .namaPolaKerja(a.getNamaPolaKerja())
                .jamKerjaMulai(a.getJamKerjaMulai())
                .jamKerjaSelesai(a.getJamKerjaSelesai())
                .build();
    }

    @Override
    public List<ReviewLemburDTO> getLembur(LocalDate dari, LocalDate sampai, Long divisiId, String cari, Long userId) {
        String dariStr    = dari    != null ? dari.toString()    : null;
        String sampaiStr  = sampai  != null ? sampai.toString()  : null;
        String divisiStr  = divisiId != null ? divisiId.toString() : null;
        String cariParam  = (cari != null && !cari.isBlank()) ? "%" + cari.trim().toLowerCase() + "%" : null;
        return absensiRepository.findLembur(dariStr, sampaiStr, divisiStr, cariParam)
                .stream().map(this::toLemburDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public ReviewLemburDTO hapusLembur(Long absensiId, Long userId) {
        Absensi a = absensiRepository.findById(absensiId)
                .orElseThrow(() -> new ResponseStatusException(
                        org.springframework.http.HttpStatus.NOT_FOUND, "Absensi tidak ditemukan"));

        // Simpan riwayat sebelum dihapus
        if (a.getJamMulaiLembur() != null) {
            int durasi = 0;
            if (a.getJamSelesaiLembur() != null) {
                long m = java.time.Duration.between(a.getJamMulaiLembur(), a.getJamSelesaiLembur()).toMinutes();
                if (m < 0) m += 24 * 60;
                durasi = (int) m;
            }
            User admin = userRepository.findById(userId).orElse(null);
            riwayatHapusLemburRepository.save(RiwayatHapusLembur.builder()
                    .karyawan(a.getKaryawan())
                    .tanggalAbsensi(a.getTanggal())
                    .jamMulaiLembur(a.getJamMulaiLembur())
                    .jamSelesaiLembur(a.getJamSelesaiLembur())
                    .durasiMenit(durasi)
                    .dihapusOleh(admin)
                    .build());
        }

        a.setJamMulaiLembur(null);
        a.setJamSelesaiLembur(null);
        return toLemburDTO(absensiRepository.save(a));
    }

    @Override
    public List<RiwayatHapusLemburDTO> getRiwayatHapusLembur(Long divisiId, String cari, Long userId) {
        String divisiStr = divisiId != null ? divisiId.toString() : null;
        String cariParam = (cari != null && !cari.isBlank()) ? "%" + cari.trim().toLowerCase() + "%" : null;
        return riwayatHapusLemburRepository.findRiwayat(divisiStr, cariParam)
                .stream().map(this::toRiwayatDTO).collect(Collectors.toList());
    }

    private RiwayatHapusLemburDTO toRiwayatDTO(RiwayatHapusLembur r) {
        Karyawan k = r.getKaryawan();
        String jamMulai   = r.getJamMulaiLembur()  != null ? r.getJamMulaiLembur().toString()  : null;
        String jamSelesai = r.getJamSelesaiLembur() != null ? r.getJamSelesaiLembur().toString() : null;
        String total = null;
        if (r.getDurasiMenit() != null && r.getDurasiMenit() > 0) {
            long jam = r.getDurasiMenit() / 60;
            long sisa = r.getDurasiMenit() % 60;
            total = (jam > 0 ? jam + "j " : "") + sisa + "m";
        }
        String namaHari = r.getTanggalAbsensi().getDayOfWeek()
                .getDisplayName(TextStyle.FULL, new Locale("id","ID"));
        namaHari = namaHari.substring(0,1).toUpperCase() + namaHari.substring(1);

        return RiwayatHapusLemburDTO.builder()
                .id(r.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .fotoProfil(k.getFotoProfil() != null ? baseUrl + "/" + k.getFotoProfil() : null)
                .tanggalAbsensi(r.getTanggalAbsensi())
                .namaHari(namaHari)
                .jamMulaiLembur(jamMulai)
                .jamSelesaiLembur(jamSelesai)
                .totalLembur(total)
                .dihapusOleh(r.getDihapusOleh() != null ? r.getDihapusOleh().getUsername() : null)
                .catatan(r.getCatatan())
                .dihapusAt(r.getDihapusAt())
                .build();
    }
}
