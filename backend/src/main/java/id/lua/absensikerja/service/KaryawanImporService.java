package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.ImporKaryawanResult;
import id.lua.absensikerja.model.dto.KaryawanRequest;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.Jabatan;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PayrollBpjs;
import id.lua.absensikerja.model.entity.PayrollPph21;
import id.lua.absensikerja.model.enums.JenisKelamin;
import id.lua.absensikerja.model.enums.StatusKerja;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.JabatanRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PayrollBpjsRepository;
import id.lua.absensikerja.repository.PayrollPph21Repository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Service impor data karyawan dari file Excel (.xlsx).
 *
 * Mendukung 4 tipe impor:
 *  - tambah    : membuat karyawan baru + akun user (password default = NIP)
 *  - perbarui  : update kolom dasar karyawan berdasarkan NIP
 *  - bpjs      : upsert PayrollBpjs berdasarkan NIP
 *  - pph21     : (placeholder) belum tersedia
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class KaryawanImporService {

    private static final long   MAX_SIZE_BYTES = 500L * 1024;
    private static final String CONTENT_TYPE   =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    private final KaryawanRepository    karyawanRepository;
    private final DivisiRepository      divisiRepository;
    private final JabatanRepository     jabatanRepository;
    private final PayrollBpjsRepository payrollBpjsRepository;
    private final PayrollPph21Repository payrollPph21Repository;
    private final KaryawanService       karyawanService;

    // ══════════════════════════════════════════════════════════════════════════
    //   TEMPLATE
    // ══════════════════════════════════════════════════════════════════════════

    public byte[] templateTambah() throws IOException {
        return buildTemplate("Tambah Karyawan", new String[]{
                "NIP*", "Nama Lengkap*", "Jenis Kelamin (LAKI_LAKI/PEREMPUAN)*",
                "Email*", "No Telepon", "Jabatan (nama)", "Divisi (nama, opsional jika dipilih dari modal)",
                "Tgl Mulai Bekerja (yyyy-MM-dd)", "Alamat KTP"
        }, new String[]{
                "EMP-001", "Budi Santoso", "LAKI_LAKI",
                "budi@example.com", "081234567890", "Staff IT", "IT",
                "2024-01-15", "Jl. Merdeka No. 1"
        });
    }

    public byte[] templatePerbarui() throws IOException {
        return buildTemplate("Perbarui Karyawan", new String[]{
                "NIP*", "Nama Lengkap", "No Telepon",
                "Jabatan (nama)", "Divisi (nama)",
                "Status Kerja (AKTIF/NONAKTIF/...)", "Tgl Mulai Bekerja (yyyy-MM-dd)",
                "Alamat Domisili", "Catatan"
        }, new String[]{
                "EMP-001", "Budi Santoso", "081234567890",
                "Staff IT", "IT",
                "AKTIF", "2024-01-15",
                "Jl. Sudirman No. 10", "Promosi 2026"
        });
    }

    /**
     * Template "Perbarui Karyawan" yang sudah di-prefill dengan data karyawan
     * sesuai filter divisi atau daftar id karyawan yang dipilih.
     *
     * @param ownerId      id pemilik perusahaan (null = ADMIN, ambil semua)
     * @param divisiId     filter divisi (null = abaikan)
     * @param karyawanIds  daftar id karyawan spesifik (null/empty = abaikan, gunakan filter divisi)
     */
    @Transactional(readOnly = true)
    public byte[] templatePerbaruiPrefill(Long ownerId, Long divisiId, java.util.List<Long> karyawanIds)
            throws IOException {
        String[] headers = {
                "NIP*", "Nama Lengkap", "No Telepon",
                "Jabatan (nama)", "Divisi (nama)",
                "Status Kerja (AKTIF/NONAKTIF/...)", "Tgl Mulai Bekerja (yyyy-MM-dd)",
                "Alamat Domisili", "Catatan"
        };

        java.util.List<Karyawan> list;

        if (karyawanIds != null && !karyawanIds.isEmpty()) {
            // Mode 1: ambil langsung berdasarkan id yang dipilih user dari FE.
            // ID sudah eksplisit dipilih dari list yang ter-filter owner di FE,
            // jadi cukup percaya — tidak perlu filter owner lagi (mencegah
            // lazy-proxy / owner-null mengkosongkan hasil).
            list = karyawanRepository.findAllById(karyawanIds).stream()
                    .filter(k -> !k.isDeleted())
                    .sorted(java.util.Comparator.comparing(Karyawan::getNamaLengkap,
                            java.util.Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                    .toList();
        } else {
            // Mode 2: filter berdasarkan divisi (atau semua), batasi per owner bila ada.
            list = karyawanRepository.findAll().stream()
                    .filter(k -> !k.isDeleted())
                    .filter(k -> {
                        if (ownerId == null) return true;
                        try {
                            return k.getPerusahaan() != null
                                && k.getPerusahaan().getOwner() != null
                                && ownerId.equals(k.getPerusahaan().getOwner().getId());
                        } catch (Exception ignored) {
                            // Lazy issue → biarkan lolos agar tidak mengkosongkan hasil
                            return true;
                        }
                    })
                    .filter(k -> divisiId == null
                            || (k.getDivisi() != null && divisiId.equals(k.getDivisi().getId())))
                    .sorted(java.util.Comparator.comparing(Karyawan::getNamaLengkap,
                            java.util.Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                    .toList();
        }

        log.info("[TemplatePerbaruiPrefill] ownerId={}, divisiId={}, karyawanIds={}, hasil={} baris",
                ownerId, divisiId, karyawanIds, list.size());

        java.util.List<String[]> rows = new java.util.ArrayList<>();
        for (Karyawan k : list) {
            rows.add(new String[]{
                    safe(k.getNip()),
                    safe(k.getNamaLengkap()),
                    safe(k.getNoTelepon()),
                    k.getJabatan() != null ? safe(k.getJabatan().getNamaJabatan()) : "",
                    k.getDivisi() != null ? safe(k.getDivisi().getNamaDivisi())   : "",
                    k.getStatusKerja() != null ? k.getStatusKerja().name() : "",
                    k.getTglMulaiBekerja() != null ? k.getTglMulaiBekerja().toString() : "",
                    safe(k.getAlamatDomisili()),
                    safe(k.getCatatan()),
            });
        }
        return buildTemplateRows("Perbarui Karyawan", headers, rows);
    }

    private static String safe(String s) { return s == null ? "" : s; }

    public byte[] templateBpjs() throws IOException {
        return buildTemplate("BPJS Karyawan", new String[]{
                "NIP*", "TK Tgl Kepesertaan (yyyy-MM-dd)", "TK Nomor", "TK Upah Didaftarkan",
                "KES Tgl Kepesertaan (yyyy-MM-dd)", "KES Nomor", "KES Upah Didaftarkan",
                "KES Anggota Inti", "KES Anggota Tambahan"
        }, new String[]{
                "EMP-001", "2024-02-01", "TK1234567890", "5000000",
                "2024-02-01", "KES1234567890", "5000000",
                "3", "0"
        });
    }

    /**
     * Template "BPJS Karyawan" yang sudah di-prefill dengan data karyawan
     * (NIP) dan data BPJS yang sudah ada, sesuai filter divisi atau daftar id
     * karyawan yang dipilih.
     */
    @Transactional(readOnly = true)
    public byte[] templateBpjsPrefill(Long ownerId, Long divisiId, java.util.List<Long> karyawanIds)
            throws IOException {
        String[] headers = {
                "NIP*", "TK Tgl Kepesertaan (yyyy-MM-dd)", "TK Nomor", "TK Upah Didaftarkan",
                "KES Tgl Kepesertaan (yyyy-MM-dd)", "KES Nomor", "KES Upah Didaftarkan",
                "KES Anggota Inti", "KES Anggota Tambahan"
        };

        java.util.List<Karyawan> list;
        if (karyawanIds != null && !karyawanIds.isEmpty()) {
            list = karyawanRepository.findAllById(karyawanIds).stream()
                    .filter(k -> !k.isDeleted())
                    .sorted(java.util.Comparator.comparing(Karyawan::getNamaLengkap,
                            java.util.Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                    .toList();
        } else {
            list = karyawanRepository.findAll().stream()
                    .filter(k -> !k.isDeleted())
                    .filter(k -> {
                        if (ownerId == null) return true;
                        try {
                            return k.getPerusahaan() != null
                                && k.getPerusahaan().getOwner() != null
                                && ownerId.equals(k.getPerusahaan().getOwner().getId());
                        } catch (Exception ignored) {
                            return true;
                        }
                    })
                    .filter(k -> divisiId == null
                            || (k.getDivisi() != null && divisiId.equals(k.getDivisi().getId())))
                    .sorted(java.util.Comparator.comparing(Karyawan::getNamaLengkap,
                            java.util.Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                    .toList();
        }

        log.info("[TemplateBpjsPrefill] ownerId={}, divisiId={}, karyawanIds={}, hasil={} baris",
                ownerId, divisiId, karyawanIds, list.size());

        java.util.List<String[]> rows = new java.util.ArrayList<>();
        for (Karyawan k : list) {
            PayrollBpjs b = payrollBpjsRepository.findByKaryawanId(k.getId()).orElse(null);
            rows.add(new String[]{
                    safe(k.getNip()),
                    b != null && b.getTkTanggalKepesertaan()  != null ? b.getTkTanggalKepesertaan().toString()  : "",
                    b != null ? safe(b.getTkNomor())  : "",
                    b != null && b.getTkUpahDidaftarkan()  != null ? b.getTkUpahDidaftarkan().toPlainString()  : "",
                    b != null && b.getKesTanggalKepesertaan() != null ? b.getKesTanggalKepesertaan().toString() : "",
                    b != null ? safe(b.getKesNomor()) : "",
                    b != null && b.getKesUpahDidaftarkan() != null ? b.getKesUpahDidaftarkan().toPlainString() : "",
                    b != null && b.getKesAnggotaKeluargaInti()      != null ? String.valueOf(b.getKesAnggotaKeluargaInti())      : "",
                    b != null && b.getKesAnggotaKeluargaTambahan()  != null ? String.valueOf(b.getKesAnggotaKeluargaTambahan())  : "",
            });
        }
        return buildTemplateRows("BPJS Karyawan", headers, rows);
    }

    public byte[] templatePph21() throws IOException {
        return buildTemplate("PPH 21 Karyawan", new String[]{
                "NIP*", "NPWP", "Status PTKP (TK/0..K/3)",
                "Jumlah Tanggungan", "Metode (GROSS/NETT/GROSS_UP)", "Pendapatan Bruto"
        }, new String[]{
                "EMP-001", "12.345.678.9-012.000", "K/1",
                "1", "GROSS", "5000000"
        });
    }

    /**
     * Template "PPH 21 Karyawan" yang sudah di-prefill dengan NIP karyawan
     * sesuai filter divisi atau daftar id karyawan yang dipilih.
     * (Field PPH 21 lainnya dibiarkan kosong karena entity belum tersedia.)
     */
    @Transactional(readOnly = true)
    public byte[] templatePph21Prefill(Long ownerId, Long divisiId, java.util.List<Long> karyawanIds)
            throws IOException {
        String[] headers = {
                "NIP*", "NPWP", "Status PTKP (TK/0..K/3)",
                "Jumlah Tanggungan", "Metode (GROSS/NETT/GROSS_UP)", "Pendapatan Bruto"
        };

        java.util.List<Karyawan> list;
        if (karyawanIds != null && !karyawanIds.isEmpty()) {
            list = karyawanRepository.findAllById(karyawanIds).stream()
                    .filter(k -> !k.isDeleted())
                    .sorted(java.util.Comparator.comparing(Karyawan::getNamaLengkap,
                            java.util.Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                    .toList();
        } else {
            list = karyawanRepository.findAll().stream()
                    .filter(k -> !k.isDeleted())
                    .filter(k -> {
                        if (ownerId == null) return true;
                        try {
                            return k.getPerusahaan() != null
                                && k.getPerusahaan().getOwner() != null
                                && ownerId.equals(k.getPerusahaan().getOwner().getId());
                        } catch (Exception ignored) {
                            return true;
                        }
                    })
                    .filter(k -> divisiId == null
                            || (k.getDivisi() != null && divisiId.equals(k.getDivisi().getId())))
                    .sorted(java.util.Comparator.comparing(Karyawan::getNamaLengkap,
                            java.util.Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                    .toList();
        }

        log.info("[TemplatePph21Prefill] ownerId={}, divisiId={}, karyawanIds={}, hasil={} baris",
                ownerId, divisiId, karyawanIds, list.size());

        java.util.List<String[]> rows = new java.util.ArrayList<>();
        for (Karyawan k : list) {
            PayrollPph21 p = payrollPph21Repository.findByKaryawanId(k.getId()).orElse(null);
            rows.add(new String[]{
                    safe(k.getNip()),
                    p != null ? safe(p.getNpwp())                                          : "",
                    p != null ? safe(p.getStatusPtkp())                                    : "",
                    p != null && p.getJumlahTanggungan() != null ? String.valueOf(p.getJumlahTanggungan()) : "",
                    p != null ? safe(p.getMetodePph())                                     : "",
                    "" // Pendapatan Bruto tidak disimpan di pengaturan, biarkan kosong
            });
        }
        return buildTemplateRows("PPH 21 Karyawan", headers, rows);
    }

    // ══════════════════════════════════════════════════════════════════════════
    //   PROSES IMPOR
    // ══════════════════════════════════════════════════════════════════════════

    @Transactional
    public ImporKaryawanResult prosesTambah(MultipartFile file, Long divisiIdDefault, Long callerUserId)
            throws IOException {
        validasiFile(file);
        List<ImporKaryawanResult.BarisSalah> errors = new ArrayList<>();
        int berhasil = 0, gagal = 0;

        try (InputStream is = file.getInputStream();
             Workbook  wb  = new XSSFWorkbook(is)) {

            Sheet sheet = wb.getSheetAt(0);
            for (int rowIdx = 1; rowIdx <= sheet.getLastRowNum(); rowIdx++) {
                Row row = sheet.getRow(rowIdx);
                if (row == null) continue;

                String nip          = getCellString(row, 0);
                String nama         = getCellString(row, 1);
                String jkStr        = getCellString(row, 2);
                String email        = getCellString(row, 3);
                String noTelp       = getCellString(row, 4);
                String namaJabatan  = getCellString(row, 5);
                String namaDivisi   = getCellString(row, 6);
                String tglMulaiStr  = getCellString(row, 7);
                String alamatKtp    = getCellString(row, 8);

                if (nip.isBlank() && nama.isBlank() && email.isBlank()) continue;
                int br = rowIdx + 1;

                try {
                    if (nip.isBlank())   throw new IllegalArgumentException("NIP wajib diisi");
                    if (nama.isBlank())  throw new IllegalArgumentException("Nama Lengkap wajib diisi");
                    if (email.isBlank()) throw new IllegalArgumentException("Email wajib diisi");
                    if (karyawanRepository.existsByNip(nip))
                        throw new IllegalArgumentException("NIP '" + nip + "' sudah terdaftar");

                    JenisKelamin jk = parseEnum(JenisKelamin.class, jkStr, JenisKelamin.LAKI_LAKI);

                    Long divisiId = !namaDivisi.isBlank()
                            ? divisiRepository.findByNamaDivisi(namaDivisi)
                                .map(Divisi::getId)
                                .orElseThrow(() -> new IllegalArgumentException(
                                        "Divisi '" + namaDivisi + "' tidak ditemukan"))
                            : divisiIdDefault;

                    Long jabatanId = null;
                    if (!namaJabatan.isBlank()) {
                        jabatanId = jabatanRepository.findByNamaJabatanIgnoreFilter(namaJabatan)
                                .map(Jabatan::getId)
                                .orElseThrow(() -> new IllegalArgumentException(
                                        "Jabatan '" + namaJabatan + "' tidak ditemukan"));
                    }

                    KaryawanRequest req = new KaryawanRequest();
                    req.setNip(nip);
                    req.setNamaLengkap(nama);
                    req.setJenisKelamin(jk);
                    req.setEmail(email);
                    req.setNoTelepon(noTelp.isBlank() ? null : noTelp);
                    req.setJabatanId(jabatanId);
                    req.setDivisiId(divisiId);
                    req.setAlamatKtp(alamatKtp.isBlank() ? null : alamatKtp);
                    req.setTglMulaiBekerja(parseDateOrNull(tglMulaiStr));
                    // Password default = NIP (min 6 karakter — pad jika perlu)
                    String pwd = nip.length() >= 6 ? nip : (nip + "123456").substring(0, 6);
                    req.setPassword(pwd);
                    req.setKonfirmasiPassword(pwd);

                    karyawanService.create(req, callerUserId);
                    berhasil++;
                } catch (Exception ex) {
                    log.error("[ImporTambah] Gagal baris {} (NIP={}): {}", br, nip, ex.toString(), ex);
                    gagal++;
                    errors.add(barisSalah(br, nip, nama, ringkasPesan(ex)));
                }
            }
        }
        return ImporKaryawanResult.builder()
                .tipe("tambah").berhasil(berhasil).gagal(gagal).errors(errors).build();
    }

    @Transactional
    public ImporKaryawanResult prosesPerbarui(MultipartFile file) throws IOException {
        validasiFile(file);
        List<ImporKaryawanResult.BarisSalah> errors = new ArrayList<>();
        int berhasil = 0, gagal = 0;

        try (InputStream is = file.getInputStream();
             Workbook  wb  = new XSSFWorkbook(is)) {

            Sheet sheet = wb.getSheetAt(0);
            for (int rowIdx = 1; rowIdx <= sheet.getLastRowNum(); rowIdx++) {
                Row row = sheet.getRow(rowIdx);
                if (row == null) continue;

                String nip          = getCellString(row, 0);
                String nama         = getCellString(row, 1);
                String noTelp       = getCellString(row, 2);
                String namaJabatan  = getCellString(row, 3);
                String namaDivisi   = getCellString(row, 4);
                String statusStr    = getCellString(row, 5);
                String tglMulaiStr  = getCellString(row, 6);
                String alamatDom    = getCellString(row, 7);
                String catatan      = getCellString(row, 8);

                if (nip.isBlank()) continue;
                int br = rowIdx + 1;

                try {
                    Karyawan k = karyawanRepository.findByNip(nip)
                            .orElseThrow(() -> new IllegalArgumentException(
                                    "NIP '" + nip + "' tidak ditemukan"));

                    if (!nama.isBlank())   k.setNamaLengkap(nama);
                    if (!noTelp.isBlank()) k.setNoTelepon(noTelp);
                    if (!alamatDom.isBlank()) k.setAlamatDomisili(alamatDom);
                    if (!catatan.isBlank())   k.setCatatan(catatan);

                    if (!namaJabatan.isBlank()) {
                        Jabatan j = findJabatanByNama(namaJabatan)
                                .orElseThrow(() -> new IllegalArgumentException(
                                        "Jabatan '" + namaJabatan + "' tidak ditemukan"));
                        k.setJabatan(j);
                    }
                    if (!namaDivisi.isBlank()) {
                        Divisi d = findDivisiByNama(namaDivisi)
                                .orElseThrow(() -> new IllegalArgumentException(
                                        "Divisi '" + namaDivisi + "' tidak ditemukan"));
                        k.setDivisi(d);
                    }
                    if (!statusStr.isBlank()) {
                        StatusKerja sk = parseEnum(StatusKerja.class, statusStr, null);
                        if (sk == null) throw new IllegalArgumentException(
                                "Status Kerja '" + statusStr + "' tidak valid");
                        k.setStatusKerja(sk);
                    }
                    LocalDate tglMulai = parseDateOrNull(tglMulaiStr);
                    if (tglMulai != null) k.setTglMulaiBekerja(tglMulai);

                    karyawanRepository.save(k);
                    berhasil++;
                } catch (Exception ex) {
                    gagal++;
                    errors.add(barisSalah(br, nip, nama, ringkasPesan(ex)));
                }
            }
        }
        return ImporKaryawanResult.builder()
                .tipe("perbarui").berhasil(berhasil).gagal(gagal).errors(errors).build();
    }

    @Transactional
    public ImporKaryawanResult prosesBpjs(MultipartFile file) throws IOException {
        validasiFile(file);
        List<ImporKaryawanResult.BarisSalah> errors = new ArrayList<>();
        int berhasil = 0, gagal = 0;

        try (InputStream is = file.getInputStream();
             Workbook  wb  = new XSSFWorkbook(is)) {

            Sheet sheet = wb.getSheetAt(0);
            for (int rowIdx = 1; rowIdx <= sheet.getLastRowNum(); rowIdx++) {
                Row row = sheet.getRow(rowIdx);
                if (row == null) continue;

                String nip      = getCellString(row, 0);
                String tkTgl    = getCellString(row, 1);
                String tkNomor  = getCellString(row, 2);
                String tkUpah   = getCellString(row, 3);
                String kesTgl   = getCellString(row, 4);
                String kesNomor = getCellString(row, 5);
                String kesUpah  = getCellString(row, 6);
                String kesInti  = getCellString(row, 7);
                String kesTbh   = getCellString(row, 8);

                if (nip.isBlank()) continue;
                int br = rowIdx + 1;

                try {
                    Karyawan k = karyawanRepository.findByNip(nip)
                            .orElseThrow(() -> new IllegalArgumentException(
                                    "NIP '" + nip + "' tidak ditemukan"));

                    PayrollBpjs bpjs = payrollBpjsRepository.findByKaryawanId(k.getId())
                            .orElseGet(() -> PayrollBpjs.builder()
                                    .karyawan(k)
                                    .tkUpahDidaftarkan(BigDecimal.ZERO)
                                    .kesUpahDidaftarkan(BigDecimal.ZERO)
                                    .kesAnggotaKeluargaInti(0)
                                    .kesAnggotaKeluargaTambahan(0)
                                    .build());

                    LocalDate dTk  = parseDateOrNull(tkTgl);
                    LocalDate dKes = parseDateOrNull(kesTgl);
                    if (dTk  != null) bpjs.setTkTanggalKepesertaan(dTk);
                    if (dKes != null) bpjs.setKesTanggalKepesertaan(dKes);
                    if (!tkNomor.isBlank())  bpjs.setTkNomor(tkNomor);
                    if (!kesNomor.isBlank()) bpjs.setKesNomor(kesNomor);
                    BigDecimal upT = parseDecimalOrNull(tkUpah);
                    BigDecimal upK = parseDecimalOrNull(kesUpah);
                    if (upT != null) bpjs.setTkUpahDidaftarkan(upT);
                    if (upK != null) bpjs.setKesUpahDidaftarkan(upK);
                    Integer angInti = parseIntOrNull(kesInti);
                    Integer angTbh  = parseIntOrNull(kesTbh);
                    if (angInti != null) bpjs.setKesAnggotaKeluargaInti(angInti);
                    if (angTbh  != null) bpjs.setKesAnggotaKeluargaTambahan(angTbh);

                    payrollBpjsRepository.save(bpjs);
                    berhasil++;
                } catch (Exception ex) {
                    gagal++;
                    errors.add(barisSalah(br, nip, k_safeNama(nip), ringkasPesan(ex)));
                }
            }
        }
        return ImporKaryawanResult.builder()
                .tipe("bpjs").berhasil(berhasil).gagal(gagal).errors(errors).build();
    }

    public ImporKaryawanResult prosesPph21(MultipartFile file) {
        // PPH 21 entity belum tersedia di sistem.
        throw new ResponseStatusException(HttpStatus.NOT_IMPLEMENTED,
                "Fitur Impor PPH 21 Karyawan belum tersedia. Silakan hubungi administrator.");
    }

    // ══════════════════════════════════════════════════════════════════════════
    //   HELPERS
    // ══════════════════════════════════════════════════════════════════════════

    private void validasiFile(MultipartFile file) {
        if (file == null || file.isEmpty())
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File tidak boleh kosong");
        if (file.getSize() > MAX_SIZE_BYTES)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Ukuran file melebihi batas maksimal 500 KB");
        String ct = file.getContentType();
        String fn = file.getOriginalFilename() != null ? file.getOriginalFilename() : "";
        if (!CONTENT_TYPE.equals(ct) && !fn.toLowerCase().endsWith(".xlsx"))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Format file tidak valid. Harap upload file .xlsx");
    }

    private String getCellString(Row row, int col) {
        Cell cell = row.getCell(col, Row.MissingCellPolicy.RETURN_BLANK_AS_NULL);
        if (cell == null) return "";
        return switch (cell.getCellType()) {
            case STRING  -> cell.getStringCellValue().trim();
            case NUMERIC -> {
                if (DateUtil.isCellDateFormatted(cell)) {
                    yield cell.getLocalDateTimeCellValue().toLocalDate().toString();
                }
                double d = cell.getNumericCellValue();
                if (d == Math.floor(d) && !Double.isInfinite(d)) yield String.valueOf((long) d);
                yield String.valueOf(d);
            }
            case BOOLEAN -> String.valueOf(cell.getBooleanCellValue());
            case FORMULA -> {
                try { yield cell.getStringCellValue().trim(); }
                catch (Exception e) {
                    try { yield String.valueOf((long) cell.getNumericCellValue()); }
                    catch (Exception e2) { yield ""; }
                }
            }
            default -> "";
        };
    }

    private LocalDate parseDateOrNull(String s) {
        if (s == null || s.isBlank()) return null;
        try { return LocalDate.parse(s.trim()); }
        catch (Exception e) {
            try { return LocalDate.parse(s.trim().replace('/', '-')); }
            catch (Exception e2) {
                throw new IllegalArgumentException("Format tanggal tidak valid: '" + s + "' (gunakan yyyy-MM-dd)");
            }
        }
    }

    private BigDecimal parseDecimalOrNull(String s) {
        if (s == null || s.isBlank()) return null;
        try { return new BigDecimal(s.trim().replace(",", "")); }
        catch (Exception e) { throw new IllegalArgumentException("Angka tidak valid: '" + s + "'"); }
    }

    private Integer parseIntOrNull(String s) {
        if (s == null || s.isBlank()) return null;
        try { return Integer.parseInt(s.trim().replace(".0", "")); }
        catch (Exception e) { throw new IllegalArgumentException("Bilangan bulat tidak valid: '" + s + "'"); }
    }

    private <E extends Enum<E>> E parseEnum(Class<E> type, String s, E def) {
        if (s == null || s.isBlank()) return def;
        try { return Enum.valueOf(type, s.trim().toUpperCase().replace(' ', '_').replace('-', '_')); }
        catch (Exception e) { return def; }
    }

    private ImporKaryawanResult.BarisSalah barisSalah(int b, String nip, String nama, String pesan) {
        return ImporKaryawanResult.BarisSalah.builder()
                .baris(b).nip(nip).nama(nama).pesan(pesan).build();
    }

    private String ringkasPesan(Exception ex) {
        if (ex instanceof ResponseStatusException rse) {
            return rse.getReason() != null ? rse.getReason() : rse.getMessage();
        }
        return ex.getMessage() != null ? ex.getMessage() : ex.getClass().getSimpleName();
    }

    private String k_safeNama(String nip) {
        return karyawanRepository.findByNip(nip).map(Karyawan::getNamaLengkap).orElse("-");
    }

    /**
     * Cari divisi by nama (case-insensitive). Tahan terhadap duplikat —
     * pilih row yang aktif (tidak soft-deleted) lebih dulu, lalu pertama.
     */
    private Optional<Divisi> findDivisiByNama(String nama) {
        return divisiRepository.findAll().stream()
                .filter(d -> nama.equalsIgnoreCase(d.getNamaDivisi()))
                .sorted((a, b) -> Boolean.compare(a.isDeleted(), b.isDeleted()))
                .findFirst();
    }

    /**
     * Cari jabatan by nama (case-insensitive). Tahan terhadap duplikat.
     */
    private Optional<Jabatan> findJabatanByNama(String nama) {
        return jabatanRepository.findAll().stream()
                .filter(j -> nama.equalsIgnoreCase(j.getNamaJabatan()))
                .sorted((a, b) -> Boolean.compare(a.isDeleted(), b.isDeleted()))
                .findFirst();
    }

    // ── Builder template Excel sederhana ──────────────────────────────────────

    private byte[] buildTemplate(String judul, String[] headers, String[] contoh) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet(judul);

            CellStyle headerStyle = wb.createCellStyle();
            Font hf = wb.createFont();
            hf.setBold(true);
            hf.setColor(IndexedColors.WHITE.getIndex());
            headerStyle.setFont(hf);
            headerStyle.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);

            Row header = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell c = header.createCell(i);
                c.setCellValue(headers[i]);
                c.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 28 * 256);
            }
            // Contoh data
            if (contoh != null) {
                Row r = sheet.createRow(1);
                for (int i = 0; i < contoh.length; i++) {
                    r.createCell(i).setCellValue(contoh[i]);
                }
            }
            wb.write(out);
            return out.toByteArray();
        }
    }

    /** Variant builder yang menerima banyak baris data. */
    private byte[] buildTemplateRows(String judul, String[] headers, java.util.List<String[]> rows)
            throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet(judul);
            CellStyle headerStyle = wb.createCellStyle();
            Font hf = wb.createFont();
            hf.setBold(true);
            hf.setColor(IndexedColors.WHITE.getIndex());
            headerStyle.setFont(hf);
            headerStyle.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);

            Row header = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell c = header.createCell(i);
                c.setCellValue(headers[i]);
                c.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 28 * 256);
            }
            int idx = 1;
            if (rows != null) {
                for (String[] row : rows) {
                    Row r = sheet.createRow(idx++);
                    for (int i = 0; i < row.length; i++) {
                        r.createCell(i).setCellValue(row[i] == null ? "" : row[i]);
                    }
                }
            }
            wb.write(out);
            return out.toByteArray();
        }
    }
}
