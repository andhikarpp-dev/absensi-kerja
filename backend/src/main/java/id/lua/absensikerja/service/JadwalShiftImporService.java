package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.ImporJadwalShiftResult;
import id.lua.absensikerja.model.dto.ImporJadwalShiftResult.BarisSalah;
import id.lua.absensikerja.model.entity.JadwalShift;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PolaKerja;
import id.lua.absensikerja.model.entity.PolaKerjaHari;
import id.lua.absensikerja.model.enums.SistemKerja;
import id.lua.absensikerja.model.enums.StatusJadwalShift;
import id.lua.absensikerja.repository.JadwalShiftRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PolaKerjaRepository;
import lombok.RequiredArgsConstructor;
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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Layanan untuk download template & impor jadwal shift via Excel.
 *
 * Layout template (matrix per bulan):
 *   Kolom A : Nama Pola         (legenda referensi pola kerja shift)
 *   Kolom B : Masuk Jam
 *   Kolom C : Keluar Jam
 *   Kolom D : (pemisah)
 *   Kolom E : Nama Karyawan     (daftar karyawan SHIFT)
 *   Kolom F : Nomor Induk Karyawan
 *   Kolom G : (pemisah)
 *   Kolom H..: tanggal-tanggal pada bulan dipilih (header: dd/MM/yyyy
 *              dengan tambahan " Libur" untuk hari Minggu)
 *
 * Pengguna mengisi cell di kolom tanggal dengan "Nama Pola" untuk masing-masing
 * baris karyawan. Cell kosong dianggap LIBUR.
 */
@Service
@RequiredArgsConstructor
public class JadwalShiftImporService {

    private static final long   MAX_SIZE_BYTES = 1024L * 1024; // 1 MB
    private static final String CONTENT_TYPE   =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    private final JadwalShiftRepository jadwalShiftRepository;
    private final KaryawanRepository    karyawanRepository;
    private final PolaKerjaRepository   polaKerjaRepository;

    // ── Download template ────────────────────────────────

    /**
     * Buat template Excel matrix untuk bulan tertentu.
     * @param bulan        bulan target (default: bulan berjalan bila null)
     * @param perusahaanId perusahaan pemilik (untuk filter karyawan & pola)
     */
    public byte[] buatTemplate(YearMonth bulan, Long perusahaanId) throws IOException {
        YearMonth ym = bulan != null ? bulan : YearMonth.now();

        // Ambil daftar pola kerja shift milik perusahaan ini
        List<PolaKerja> polaList = (perusahaanId != null)
                ? polaKerjaRepository.findByPerusahaanId(perusahaanId)
                : polaKerjaRepository.findAll();
        polaList = polaList.stream()
                .filter(p -> p.getDivisiSet() != null && p.getDivisiSet().stream()
                        .anyMatch(d -> d.getSistemKerja() == SistemKerja.SHIFT))
                .sorted(Comparator.comparing(PolaKerja::getNamaPolaKerja,
                        Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                .toList();

        // Ambil daftar karyawan SHIFT milik perusahaan ini
        List<Karyawan> karyawanList = (perusahaanId != null)
                ? karyawanRepository.findByPerusahaanId(perusahaanId)
                : karyawanRepository.findAll();
        karyawanList = karyawanList.stream()
                .filter(k -> !k.isDeleted())
                .filter(k -> k.getDivisi() != null
                        && k.getDivisi().getSistemKerja() == SistemKerja.SHIFT)
                .sorted(Comparator.comparing(Karyawan::getNamaLengkap,
                        Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                .toList();

        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Jadwal Shift");

            // Styles
            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);

            CellStyle bold = wb.createCellStyle();
            Font boldFont = wb.createFont(); boldFont.setBold(true);
            bold.setFont(boldFont);

            // Header baris 0
            //   A=Nama Pola, B=Masuk Jam, C=Keluar Jam,
            //   D=(blank), E=Nama Karyawan, F=Nomor Induk Karyawan,
            //   G=(blank), H..=tanggal
            int[] widths = { 22, 12, 12, 3, 28, 22, 3 };
            String[] fixedHeaders = {
                    "Nama Pola", "Masuk Jam", "Keluar Jam", "",
                    "Nama Karyawan", "Nomor Induk Karyawan", ""
            };
            Row header = sheet.createRow(0);
            for (int i = 0; i < fixedHeaders.length; i++) {
                Cell c = header.createCell(i);
                c.setCellValue(fixedHeaders[i]);
                c.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, widths[i] * 256);
            }

            // Header tanggal kolom H..  (format: dd/MM/yyyy)
            DateTimeFormatter dfHeader = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            int dateColStart = 7;
            int daysInMonth = ym.lengthOfMonth();
            for (int d = 0; d < daysInMonth; d++) {
                LocalDate tgl = ym.atDay(d + 1);
                Cell c = header.createCell(dateColStart + d);
                c.setCellValue(tgl.format(dfHeader));
                c.setCellStyle(headerStyle);
                sheet.setColumnWidth(dateColStart + d, 14 * 256);
            }

            // Legenda pola kerja (kolom A–C, mulai baris 1)
            //   Baris pertama selalu "Libur" sebagai referensi default.
            int polaRow = 1;
            Row liburRow = sheet.createRow(polaRow);
            Cell liburCell = liburRow.createCell(0);
            liburCell.setCellValue("Libur");
            liburCell.setCellStyle(bold);
            polaRow++;

            for (PolaKerja p : polaList) {
                Row r = sheet.getRow(polaRow);
                if (r == null) r = sheet.createRow(polaRow);
                Cell cn = r.createCell(0);
                cn.setCellValue(p.getNamaPolaKerja() != null ? p.getNamaPolaKerja() : "");
                cn.setCellStyle(bold);

                String jm = "", jk = "";
                if (p.getHariList() != null) {
                    for (PolaKerjaHari h : p.getHariList()) {
                        if (h.getJamMasuk() != null && !h.getJamMasuk().isBlank()) {
                            jm = h.getJamMasuk();
                            jk = h.getJamKeluar() == null ? "" : h.getJamKeluar();
                            break;
                        }
                    }
                }
                r.createCell(1).setCellValue(jm);
                r.createCell(2).setCellValue(jk);
                polaRow++;
            }

            // Daftar karyawan (kolom E–F, mulai baris 1)
            int karyawanRow = 1;
            for (Karyawan k : karyawanList) {
                Row r = sheet.getRow(karyawanRow);
                if (r == null) r = sheet.createRow(karyawanRow);
                r.createCell(4).setCellValue(k.getNamaLengkap() != null ? k.getNamaLengkap() : "");
                r.createCell(5).setCellValue(k.getNip() != null ? k.getNip() : "");
                karyawanRow++;
            }

            wb.write(out);
            return out.toByteArray();
        }
    }

    /** Backward-compatible overload (tanpa filter bulan/perusahaan). */
    public byte[] buatTemplate() throws IOException {
        return buatTemplate(null, null);
    }

    // ── Ekspor jadwal shift ──────────────────────────────

    /**
     * Ekspor jadwal shift bulan tertentu ke Excel dengan layout matrix
     * (sama seperti template), lengkap dengan isi pola kerja per cell tanggal.
     */
    public byte[] eksporJadwal(YearMonth bulan, Long perusahaanId,
                               Long divisiId, String search) throws IOException {
        YearMonth ym = bulan != null ? bulan : YearMonth.now();
        LocalDate start = ym.atDay(1);
        LocalDate end   = ym.atEndOfMonth();

        // Pola kerja shift (untuk legenda kolom A–C)
        List<PolaKerja> polaList = (perusahaanId != null)
                ? polaKerjaRepository.findByPerusahaanId(perusahaanId)
                : polaKerjaRepository.findAll();
        polaList = polaList.stream()
                .filter(p -> p.getDivisiSet() != null && p.getDivisiSet().stream()
                        .anyMatch(d -> d.getSistemKerja() == SistemKerja.SHIFT))
                .sorted(Comparator.comparing(PolaKerja::getNamaPolaKerja,
                        Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                .toList();

        // Karyawan SHIFT (terfilter divisi & search)
        List<Karyawan> karyawanList = (perusahaanId != null)
                ? karyawanRepository.findByPerusahaanId(perusahaanId)
                : karyawanRepository.findAll();
        final String q = search == null ? "" : search.trim().toLowerCase();
        karyawanList = karyawanList.stream()
                .filter(k -> !k.isDeleted())
                .filter(k -> k.getDivisi() != null
                        && k.getDivisi().getSistemKerja() == SistemKerja.SHIFT)
                .filter(k -> divisiId == null
                        || (k.getDivisi() != null && divisiId.equals(k.getDivisi().getId())))
                .filter(k -> q.isEmpty()
                        || (k.getNamaLengkap() != null && k.getNamaLengkap().toLowerCase().contains(q))
                        || (k.getNip() != null && k.getNip().toLowerCase().contains(q)))
                .sorted(Comparator.comparing(Karyawan::getNamaLengkap,
                        Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                .toList();

        // Index lookup: karyawanId|yyyy-MM-dd → JadwalShift
        List<Long> karyawanIds = karyawanList.stream().map(Karyawan::getId).toList();
        Map<String, JadwalShift> jadwalMap = new HashMap<>();
        if (!karyawanIds.isEmpty()) {
            for (JadwalShift js : jadwalShiftRepository.findInRangeByKaryawan(start, end, karyawanIds)) {
                jadwalMap.put(js.getKaryawan().getId() + "|" + js.getTanggal(), js);
            }
        }

        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Jadwal Shift");

            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont(); headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);

            CellStyle bold = wb.createCellStyle();
            Font boldFont = wb.createFont(); boldFont.setBold(true);
            bold.setFont(boldFont);

            // Baris header
            int[] widths = { 22, 12, 12, 3, 28, 22, 3 };
            String[] fixedHeaders = {
                    "Nama Pola", "Masuk Jam", "Keluar Jam", "",
                    "Nama Karyawan", "Nomor Induk Karyawan", ""
            };
            Row header = sheet.createRow(0);
            for (int i = 0; i < fixedHeaders.length; i++) {
                Cell c = header.createCell(i);
                c.setCellValue(fixedHeaders[i]);
                c.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, widths[i] * 256);
            }
            DateTimeFormatter dfHeader = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            int dateColStart = 7;
            int daysInMonth = ym.lengthOfMonth();
            for (int d = 0; d < daysInMonth; d++) {
                LocalDate tgl = ym.atDay(d + 1);
                Cell c = header.createCell(dateColStart + d);
                c.setCellValue(tgl.format(dfHeader));
                c.setCellStyle(headerStyle);
                sheet.setColumnWidth(dateColStart + d, 14 * 256);
            }

            // Legenda pola (kolom A–C)
            int polaRow = 1;
            Row liburRow = sheet.createRow(polaRow);
            Cell liburCell = liburRow.createCell(0);
            liburCell.setCellValue("Libur");
            liburCell.setCellStyle(bold);
            polaRow++;
            for (PolaKerja p : polaList) {
                Row r = sheet.getRow(polaRow);
                if (r == null) r = sheet.createRow(polaRow);
                Cell cn = r.createCell(0);
                cn.setCellValue(p.getNamaPolaKerja() != null ? p.getNamaPolaKerja() : "");
                cn.setCellStyle(bold);
                String jm = "", jk = "";
                if (p.getHariList() != null) {
                    for (PolaKerjaHari h : p.getHariList()) {
                        if (h.getJamMasuk() != null && !h.getJamMasuk().isBlank()) {
                            jm = h.getJamMasuk();
                            jk = h.getJamKeluar() == null ? "" : h.getJamKeluar();
                            break;
                        }
                    }
                }
                r.createCell(1).setCellValue(jm);
                r.createCell(2).setCellValue(jk);
                polaRow++;
            }

            // Baris karyawan + isi cell jadwal
            int karyawanRow = 1;
            for (Karyawan k : karyawanList) {
                Row r = sheet.getRow(karyawanRow);
                if (r == null) r = sheet.createRow(karyawanRow);
                r.createCell(4).setCellValue(k.getNamaLengkap() != null ? k.getNamaLengkap() : "");
                r.createCell(5).setCellValue(k.getNip() != null ? k.getNip() : "");

                for (int d = 0; d < daysInMonth; d++) {
                    LocalDate tgl = ym.atDay(d + 1);
                    JadwalShift js = jadwalMap.get(k.getId() + "|" + tgl);
                    if (js == null) continue;
                    String isi;
                    if (js.getStatus() == StatusJadwalShift.LIBUR) {
                        isi = "Libur";
                    } else if (js.getStatus() == StatusJadwalShift.OFF) {
                        isi = "OFF";
                    } else if (js.getPolaKerja() != null && js.getPolaKerja().getNamaPolaKerja() != null) {
                        isi = js.getPolaKerja().getNamaPolaKerja();
                    } else {
                        continue;
                    }
                    r.createCell(dateColStart + d).setCellValue(isi);
                }
                karyawanRow++;
            }

            wb.write(out);
            return out.toByteArray();
        }
    }

    // ── Proses impor ─────────────────────────────────────

    @Transactional
    public ImporJadwalShiftResult prosesImpor(MultipartFile file, Long perusahaanId) throws IOException {
        if (file == null || file.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File tidak boleh kosong");
        }
        if (file.getSize() > MAX_SIZE_BYTES) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Ukuran file melebihi batas maksimal 1 MB");
        }
        String ct = file.getContentType();
        String fn = file.getOriginalFilename() == null ? "" : file.getOriginalFilename();
        if (!CONTENT_TYPE.equals(ct) && !fn.toLowerCase().endsWith(".xlsx")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Format file tidak valid. Harap upload file .xlsx");
        }

        ImporJadwalShiftResult result = ImporJadwalShiftResult.builder()
                .berhasil(0).gagal(0).errors(new java.util.ArrayList<>()).build();

        try (InputStream is = file.getInputStream();
             Workbook  wb  = new XSSFWorkbook(is)) {

            Sheet sheet = wb.getSheetAt(0);
            if (sheet == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sheet pertama tidak ditemukan");
            }

            Row header = sheet.getRow(0);
            if (header == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Header template tidak ditemukan");
            }

            // Parse kolom tanggal mulai dari kolom H (index 7).
            // Header bisa berupa "dd/MM/yyyy" atau "dd/MM/yyyy Libur".
            int dateColStart = 7;
            Map<Integer, LocalDate> tanggalKolom = new HashMap<>();
            DateTimeFormatter df = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            for (int c = dateColStart; c <= header.getLastCellNum(); c++) {
                String h = getCellString(header, c);
                if (h.isBlank()) continue;
                String token = h.trim().split("\\s+")[0];
                try {
                    tanggalKolom.put(c, LocalDate.parse(token, df));
                } catch (DateTimeParseException ignored) {
                    try { tanggalKolom.put(c, LocalDate.parse(token, DateTimeFormatter.ISO_LOCAL_DATE)); }
                    catch (DateTimeParseException ignored2) { /* skip kolom non-tanggal */ }
                }
            }

            if (tanggalKolom.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Header tanggal tidak ditemukan. Gunakan template terbaru.");
            }

            // Cache pola kerja milik perusahaan (case-insensitive lookup).
            List<PolaKerja> polaKandidat = (perusahaanId != null)
                    ? polaKerjaRepository.findByPerusahaanId(perusahaanId)
                    : polaKerjaRepository.findAll();
            Map<String, PolaKerja> polaByName = new HashMap<>();
            for (PolaKerja p : polaKandidat) {
                if (p.getNamaPolaKerja() != null) {
                    polaByName.put(p.getNamaPolaKerja().trim().toLowerCase(), p);
                }
            }

            for (int rowIdx = 1; rowIdx <= sheet.getLastRowNum(); rowIdx++) {
                Row row = sheet.getRow(rowIdx);
                if (row == null) continue;

                String namaKaryawan = getCellString(row, 4);
                String nip          = getCellString(row, 5);

                // Baris ini hanya legenda pola (kolom A–C), bukan baris karyawan.
                if (nip.isBlank() && namaKaryawan.isBlank()) continue;

                int nomorBaris = rowIdx + 1;

                if (nip.isBlank()) {
                    addError(result, nomorBaris, nip, namaKaryawan, "",
                            "Nomor Induk Karyawan (kolom F) wajib diisi");
                    continue;
                }

                Optional<Karyawan> kOpt = karyawanRepository.findByNip(nip);
                if (kOpt.isEmpty()) {
                    addError(result, nomorBaris, nip, namaKaryawan, "",
                            "NIP tidak ditemukan: " + nip);
                    continue;
                }
                Karyawan k = kOpt.get();

                if (perusahaanId != null && (k.getPerusahaan() == null
                        || !perusahaanId.equals(k.getPerusahaan().getId()))) {
                    addError(result, nomorBaris, nip, namaKaryawan, "",
                            "Karyawan bukan milik perusahaan Anda");
                    continue;
                }
                if (k.getDivisi() == null || k.getDivisi().getSistemKerja() != SistemKerja.SHIFT) {
                    addError(result, nomorBaris, nip, namaKaryawan, "",
                            "Karyawan bukan dari divisi ber-Sistem Kerja Shift");
                    continue;
                }

                // Iterasi setiap kolom tanggal pada baris ini.
                for (Map.Entry<Integer, LocalDate> e : tanggalKolom.entrySet()) {
                    int colIdx     = e.getKey();
                    LocalDate tgl  = e.getValue();
                    String isiCell = getCellString(row, colIdx);
                    if (isiCell.isBlank()) continue; // kosong → tidak diubah

                    StatusJadwalShift status;
                    PolaKerja pola = null;
                    String upper = isiCell.trim().toUpperCase();

                    if (upper.equals("LIBUR") || upper.equals("OFF")) {
                        status = upper.equals("OFF") ? StatusJadwalShift.OFF : StatusJadwalShift.LIBUR;
                    } else {
                        pola = polaByName.get(isiCell.trim().toLowerCase());
                        if (pola == null) {
                            addError(result, nomorBaris, nip, namaKaryawan, tgl.toString(),
                                    "Nama Pola Kerja tidak ditemukan: " + isiCell);
                            continue;
                        }
                        status = StatusJadwalShift.AKTIF;
                    }

                    JadwalShift entity = jadwalShiftRepository
                            .findByKaryawanIdAndTanggal(k.getId(), tgl)
                            .orElseGet(JadwalShift::new);

                    entity.setKaryawan(k);
                    entity.setPerusahaan(k.getPerusahaan());
                    entity.setTanggal(tgl);
                    entity.setStatus(status);
                    entity.setPolaKerja(pola);
                    if (entity.getCreatedAt() == null) entity.setCreatedAt(LocalDateTime.now());
                    entity.setUpdatedAt(LocalDateTime.now());

                    jadwalShiftRepository.save(entity);
                    result.setBerhasil(result.getBerhasil() + 1);
                }
            }
        }

        return result;
    }

    // ── Helpers ──────────────────────────────────────────

    private void addError(ImporJadwalShiftResult result, int baris, String nip, String nama,
                          String tanggal, String pesan) {
        result.getErrors().add(BarisSalah.builder()
                .baris(baris).nip(nip).nama(nama).tanggal(tanggal).pesan(pesan).build());
        result.setGagal(result.getGagal() + 1);
    }

    private LocalDate parseTanggal(String s) {
        String t = s.trim();
        try { return LocalDate.parse(t, DateTimeFormatter.ISO_LOCAL_DATE); }
        catch (DateTimeParseException ignored) {}
        try { return LocalDate.parse(t, DateTimeFormatter.ofPattern("dd/MM/yyyy")); }
        catch (DateTimeParseException ignored) {}
        try { return LocalDate.parse(t, DateTimeFormatter.ofPattern("d/M/yyyy")); }
        catch (DateTimeParseException ignored) {}
        throw new IllegalArgumentException("Format tanggal tidak valid: " + s);
    }

    private String getCellString(Row row, int idx) {
        Cell c = row.getCell(idx);
        if (c == null) return "";
        switch (c.getCellType()) {
            case STRING:  return c.getStringCellValue().trim();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(c)) {
                    return c.getLocalDateTimeCellValue().toLocalDate().toString();
                }
                double v = c.getNumericCellValue();
                if (v == Math.floor(v)) return String.valueOf((long) v);
                return String.valueOf(v);
            case BOOLEAN: return String.valueOf(c.getBooleanCellValue());
            case FORMULA: return c.getCellFormula();
            default:      return "";
        }
    }
}
