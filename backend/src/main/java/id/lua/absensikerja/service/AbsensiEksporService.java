package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.AbsensiDTO;
import id.lua.absensikerja.repository.AbsensiRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AbsensiEksporService {

    private final AbsensiRepository  absensiRepository;
    private final AbsensiService     absensiService;
    private final EmailService       emailService;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── Definisi semua kolom yang tersedia ─────────────────
    public static final List<KolomDef> SEMUA_KOLOM = List.of(
        // Karyawan
        new KolomDef("namaKaryawan",       "Nama Karyawan"),
        new KolomDef("nip",                "NIP"),
        new KolomDef("jenisIdentitas",      "Jenis Identitas"),
        new KolomDef("nomorIdentitas",      "Nomor Identitas"),
        new KolomDef("divisi",             "Divisi"),
        new KolomDef("jabatan",            "Jabatan"),
        new KolomDef("hariPresensi",       "Hari"),
        new KolomDef("tanggalPresensi",    "Tanggal"),
        new KolomDef("jadwal",             "Jadwal Kerja"),
        new KolomDef("rekap",              "Status"),
        // Masuk
        new KolomDef("masukJam",           "Jam Masuk"),
        new KolomDef("terlambatMenit",     "Terlambat (Menit)"),
        new KolomDef("masukLat",           "Masuk Latitude"),
        new KolomDef("masukLng",           "Masuk Longitude"),
        new KolomDef("masukCatatan",       "Catatan Masuk"),
        // Keluar
        new KolomDef("keluarJam",          "Jam Keluar"),
        new KolomDef("keluarLat",          "Keluar Latitude"),
        new KolomDef("keluarLng",          "Keluar Longitude"),
        new KolomDef("keluarCatatan",      "Catatan Keluar"),
        // Istirahat
        new KolomDef("istirahatJam",       "Mulai Istirahat"),
        new KolomDef("selesaiIstirahatJam","Selesai Istirahat"),
        // Lembur
        new KolomDef("lemburJam",          "Mulai Lembur"),
        new KolomDef("selesaiLemburJam",   "Selesai Lembur"),
        // Ringkasan
        new KolomDef("totalJamKerja",      "Total Jam Kerja"),
        new KolomDef("totalJamIstirahat",  "Total Jam Istirahat"),
        new KolomDef("totalJamLembur",     "Total Jam Lembur")
    );

    public record KolomDef(String key, String header) {}

    // ── Generate Excel bytes ───────────────────────────────
    public byte[] generate(
            LocalDate tanggal,
            Long divisiId,
            Long lokasiId,
            Long karyawanId,
            String format,
            List<String> selectedKolom) throws IOException {

        // Ambil data absensi pada tanggal tersebut
        List<AbsensiDTO> data = absensiService.getKehadiranHarian(tanggal);

        // Filter divisi
        if (divisiId != null) {
            data = data.stream()
                    .filter(a -> a.getKaryawanId() != null)
                    .collect(Collectors.toList());
            // filter by divisi name jika ada
        }

        // Filter karyawan spesifik
        if (karyawanId != null) {
            data = data.stream()
                    .filter(a -> karyawanId.equals(a.getKaryawanId()))
                    .collect(Collectors.toList());
        }

        // Tentukan kolom yang akan ditampilkan
        List<KolomDef> kolom = resolveKolom(format, selectedKolom);

        return buildExcel(data, kolom, tanggal);
    }

    // ── Generate Excel untuk rentang tanggal ──────────────
    public byte[] generateRentang(
            LocalDate dari,
            LocalDate sampai,
            Long divisiId,
            Long karyawanId,
            String format,
            List<String> selectedKolom) throws IOException {

        if (dari.isAfter(sampai)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Tanggal dari tidak boleh lebih besar dari tanggal sampai");
        }
        if (dari.plusDays(90).isBefore(sampai)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Rentang tanggal maksimal 90 hari");
        }

        List<AbsensiDTO> data = new ArrayList<>();
        LocalDate cur = dari;
        while (!cur.isAfter(sampai)) {
            data.addAll(absensiService.getKehadiranHarian(cur));
            cur = cur.plusDays(1);
        }

        if (karyawanId != null) {
            data = data.stream()
                    .filter(a -> karyawanId.equals(a.getKaryawanId()))
                    .collect(Collectors.toList());
        }

        List<KolomDef> kolom = resolveKolom(format, selectedKolom);
        return buildExcel(data, kolom, null);
    }

    // ── Resolve kolom berdasarkan format atau pilihan manual ─
    private List<KolomDef> resolveKolom(String format, List<String> selected) {
        if (selected != null && !selected.isEmpty()) {
            Set<String> keys = new HashSet<>(selected);
            return SEMUA_KOLOM.stream().filter(k -> keys.contains(k.key())).collect(Collectors.toList());
        }
        return switch (format != null ? format : "LENGKAP") {
            case "HANYA_MASUK_KELUAR" -> filterKolom(
                    "namaKaryawan","divisi","tanggalPresensi","masukJam","keluarJam");
            case "MASUK_TERLAMBAT_KELUAR" -> filterKolom(
                    "namaKaryawan","divisi","tanggalPresensi","masukJam","terlambatMenit","keluarJam");
            case "MASUK_TERLAMBAT_KELUAR_LEMBUR" -> filterKolom(
                    "namaKaryawan","divisi","tanggalPresensi","masukJam","terlambatMenit","keluarJam","lemburJam","selesaiLemburJam");
            case "HANYA_CATATAN" -> filterKolom(
                    "namaKaryawan","divisi","tanggalPresensi","masukCatatan","keluarCatatan");
            case "REKAP_PRESENSI" -> filterKolom(
                    "namaKaryawan","divisi","tanggalPresensi","rekap","masukJam","keluarJam","terlambatMenit","totalJamKerja");
            case "REKAP_KEHADIRAN" -> filterKolom(
                    "namaKaryawan","divisi","tanggalPresensi","rekap","totalJamKerja","totalJamIstirahat","totalJamLembur");
            default -> SEMUA_KOLOM; // LENGKAP
        };
    }

    private List<KolomDef> filterKolom(String... keys) {
        Set<String> k = new HashSet<>(Arrays.asList(keys));
        return SEMUA_KOLOM.stream().filter(c -> k.contains(c.key())).collect(Collectors.toList());
    }

    // ── Build Excel workbook ───────────────────────────────
    private byte[] buildExcel(List<AbsensiDTO> data, List<KolomDef> kolom, LocalDate tanggal) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            Sheet sheet = wb.createSheet("Kehadiran");

            // Style header
            CellStyle headerStyle = wb.createCellStyle();
            headerStyle.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            Font hFont = wb.createFont();
            hFont.setBold(true);
            hFont.setColor(IndexedColors.WHITE.getIndex());
            headerStyle.setFont(hFont);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);

            // Style data genap
            CellStyle evenStyle = wb.createCellStyle();
            evenStyle.setFillForegroundColor(IndexedColors.LEMON_CHIFFON.getIndex());
            evenStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            // Baris judul (opsional jika tanggal ada)
            int rowIdx = 0;
            if (tanggal != null) {
                Row titleRow = sheet.createRow(rowIdx++);
                Cell titleCell = titleRow.createCell(0);
                String label = tanggal.getDayOfWeek().getDisplayName(TextStyle.FULL, new Locale("id","ID"))
                        + ", " + tanggal;
                titleCell.setCellValue("Kehadiran Harian — " + label);
                CellStyle ts = wb.createCellStyle();
                Font tf = wb.createFont(); tf.setBold(true); tf.setFontHeightInPoints((short)12);
                ts.setFont(tf);
                titleCell.setCellStyle(ts);
                sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, kolom.size() - 1));
                rowIdx++;
            }

            // Baris header kolom
            Row headerRow = sheet.createRow(rowIdx++);
            for (int i = 0; i < kolom.size(); i++) {
                Cell c = headerRow.createCell(i);
                c.setCellValue(kolom.get(i).header());
                c.setCellStyle(headerStyle);
            }

            // Baris data
            for (int di = 0; di < data.size(); di++) {
                AbsensiDTO a = data.get(di);
                Row row = sheet.createRow(rowIdx++);
                CellStyle rowStyle = di % 2 == 1 ? evenStyle : null;

                for (int ci = 0; ci < kolom.size(); ci++) {
                    Cell cell = row.createCell(ci);
                    if (rowStyle != null) cell.setCellStyle(rowStyle);
                    String val = getKolomValue(a, kolom.get(ci).key());
                    cell.setCellValue(val != null ? val : "");
                }
            }

            // Auto-size kolom
            for (int i = 0; i < kolom.size(); i++) {
                sheet.autoSizeColumn(i);
                int width = sheet.getColumnWidth(i);
                sheet.setColumnWidth(i, Math.min(width + 512, 15000));
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out);
            return out.toByteArray();
        }
    }

    // ── Mapping kolom → nilai dari AbsensiDTO ─────────────
    private String getKolomValue(AbsensiDTO a, String key) {
        return switch (key) {
            case "namaKaryawan"       -> a.getNamaKaryawan();
            case "nip"                -> "";   // tidak ada di DTO, bisa ditambahkan
            case "jenisIdentitas"     -> "";
            case "nomorIdentitas"     -> "";
            case "divisi"             -> a.getNamaDivisi();
            case "jabatan"            -> a.getNamaJabatan();
            case "hariPresensi"       -> a.getNamaHari();
            case "tanggalPresensi"    -> a.getTanggal() != null ? a.getTanggal().toString() : "";
            case "jadwal"             -> buildJadwal(a);
            case "rekap"              -> a.getStatus() != null ? a.getStatus().name() : "";
            case "masukJam"           -> a.getJamMasuk() != null ? a.getJamMasuk().toString() : "";
            case "terlambatMenit"     -> a.getMenitTerlambat() != null ? a.getMenitTerlambat().toString() : "0";
            case "masukLat"           -> a.getLokasiMasukUrl() != null ? extractCoord(a.getLokasiMasukUrl(), 0) : "";
            case "masukLng"           -> a.getLokasiMasukUrl() != null ? extractCoord(a.getLokasiMasukUrl(), 1) : "";
            case "masukCatatan"       -> a.getCatatanMasuk();
            case "keluarJam"          -> a.getJamKeluar() != null ? a.getJamKeluar().toString() : "";
            case "keluarLat"          -> a.getLokasiKeluarUrl() != null ? extractCoord(a.getLokasiKeluarUrl(), 0) : "";
            case "keluarLng"          -> a.getLokasiKeluarUrl() != null ? extractCoord(a.getLokasiKeluarUrl(), 1) : "";
            case "keluarCatatan"      -> a.getCatatanKeluar();
            case "istirahatJam"       -> a.getJamMulaiIstirahat() != null ? a.getJamMulaiIstirahat().toString() : "";
            case "selesaiIstirahatJam"-> a.getJamSelesaiIstirahat() != null ? a.getJamSelesaiIstirahat().toString() : "";
            case "lemburJam"          -> a.getJamMulaiLembur() != null ? a.getJamMulaiLembur().toString() : "";
            case "selesaiLemburJam"   -> a.getJamSelesaiLembur() != null ? a.getJamSelesaiLembur().toString() : "";
            case "totalJamKerja"      -> hitungDurasi(a.getJamMasuk(), a.getJamKeluar());
            case "totalJamIstirahat"  -> hitungDurasi(a.getJamMulaiIstirahat(), a.getJamSelesaiIstirahat());
            case "totalJamLembur"     -> hitungDurasi(a.getJamMulaiLembur(), a.getJamSelesaiLembur());
            default -> "";
        };
    }

    private String buildJadwal(AbsensiDTO a) {
        if (a.getJamKerjaMulai() == null) return "";
        return a.getJamKerjaMulai() + " – " + (a.getJamKerjaSelesai() != null ? a.getJamKerjaSelesai() : "");
    }

    private String hitungDurasi(java.time.LocalTime dari, java.time.LocalTime sampai) {
        if (dari == null || sampai == null) return "";
        long menit = java.time.Duration.between(dari, sampai).toMinutes();
        if (menit <= 0) return "";
        return String.format("%d:%02d", menit / 60, menit % 60);
    }

    private String extractCoord(String mapsUrl, int idx) {
        try {
            String q = mapsUrl.substring(mapsUrl.indexOf("q=") + 2);
            String[] parts = q.split(",");
            return parts[idx].trim();
        } catch (Exception e) {
            return "";
        }
    }

    // ── Ekspor Ringkasan Kehadiran ────────────────────────────

    /**
     * Dipanggil dari controller — data rows sudah disiapkan di request thread.
     * Method ini berjalan async (Spring @Async) agar tidak blokir HTTP response.
     */
    @Async
    public void generateAndSendRingkasanAsync(
            List<RingkasanKehadiranRow> rows,
            LocalDate dari, LocalDate sampai,
            String format, String emailTujuan) {
        try {
            generateRingkasanAndSendEmail(rows, dari, sampai, format, emailTujuan);
            log.info("[EksporRingkasan] Selesai dikirim ke {}", emailTujuan);
        } catch (Exception e) {
            log.error("[EksporRingkasan] Gagal: {}", e.getMessage(), e);
        }
    }

    public void generateRingkasanAndSendEmail(
            List<RingkasanKehadiranRow> rows,
            LocalDate dari, LocalDate sampai,
            String format, String emailTujuan) throws IOException {

        byte[] bytes = generateRingkasanExcel(rows, dari, sampai, format);

        String filename = "ringkasan-kehadiran-" + dari + "-sd-" + sampai + ".xlsx";
        String subject  = "Ekspor Ringkasan Kehadiran " + dari + " s/d " + sampai;
        String body     = "<p>Terlampir file Excel ringkasan kehadiran karyawan periode <b>"
                + dari + "</b> s/d <b>" + sampai + "</b>.</p>"
                + "<p>Total karyawan: <b>" + rows.size() + "</b></p>"
                + "<p><i>Email ini dikirim otomatis, harap tidak membalas.</i></p>";

        for (String em : emailTujuan.split(",")) {
            String trimmed = em.trim();
            if (!trimmed.isEmpty()) {
                emailService.sendEmailWithAttachment(trimmed, subject, body, filename, bytes,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            }
        }
    }

    private byte[] generateRingkasanExcel(
            List<RingkasanKehadiranRow> rows,
            LocalDate dari, LocalDate sampai, String format) throws IOException {

        // Helper: menit → "H:MM"
        java.util.function.Function<Long, String> fmtMenit =
                m -> m == null || m == 0 ? "0" : String.format("%d:%02d", m / 60, m % 60);

        Workbook wb    = new XSSFWorkbook();
        Sheet    sheet = wb.createSheet("Ringkasan Kehadiran");

        // ── Style header ──────────────────────────────────────
        CellStyle headerStyle = wb.createCellStyle();
        headerStyle.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
        headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        Font hFont = wb.createFont();
        hFont.setBold(true);
        hFont.setColor(IndexedColors.WHITE.getIndex());
        headerStyle.setFont(hFont);
        headerStyle.setBorderBottom(BorderStyle.THIN);

        // ── Header row ────────────────────────────────────────
        boolean withDetail = !"LENGKAP_TANPA_DETAIL_TANGGAL".equals(format);
        boolean onlyDetail = "HANYA_DETAIL_TANGGAL".equals(format);

        List<String> headers = new ArrayList<>();
        if (!onlyDetail) {
            headers.addAll(Arrays.asList(
                "Nama Karyawan","Divisi","Jabatan","Pola Kerja",
                "Total Hari Jadwal","Total Hari Hadir","Total Hari Tidak Masuk",
                "Total Hari Cuti","Total Hari Izin","Persentase Kehadiran (%)",
                "Total Jam Jadwal","Total Jam Kerja","Persentase Capaian (%)",
                "Total Jam Istirahat","Total Jam Lembur",
                "Total Jam Terlambat","Total Hari Terlambat",
                "Jam Kerja Tidak Terpenuhi"
            ));
        }
        if (withDetail) {
            // Tambahkan kolom per tanggal jika format dengan detail
            LocalDate d = dari;
            while (!d.isAfter(sampai)) {
                headers.add(d.toString());
                d = d.plusDays(1);
            }
        }

        Row headerRow = sheet.createRow(0);
        for (int i = 0; i < headers.size(); i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers.get(i));
            cell.setCellStyle(headerStyle);
            sheet.setColumnWidth(i, 5000);
        }

        // ── Data rows ─────────────────────────────────────────
        int rowNum = 1;
        for (RingkasanKehadiranRow r : rows) {
            var s = r.getRingkasan();
            Row row = sheet.createRow(rowNum++);
            int col = 0;

            if (!onlyDetail) {
                row.createCell(col++).setCellValue(r.getNamaKaryawan());
                row.createCell(col++).setCellValue(r.getNamaDivisi() != null ? r.getNamaDivisi() : "");
                row.createCell(col++).setCellValue(r.getNamaJabatan() != null ? r.getNamaJabatan() : "");
                row.createCell(col++).setCellValue(r.getNamaPolaKerja() != null ? r.getNamaPolaKerja() : "-");
                row.createCell(col++).setCellValue(s.getTotalHariJadwalKerja());
                row.createCell(col++).setCellValue(s.getTotalHariKehadiran());
                row.createCell(col++).setCellValue(s.getTotalHariTidakMasuk());
                row.createCell(col++).setCellValue(s.getTotalHariCuti());
                row.createCell(col++).setCellValue(s.getTotalHariIzin());
                row.createCell(col++).setCellValue(s.getPersentaseKehadiran());
                row.createCell(col++).setCellValue(fmtMenit.apply(s.getTotalMenitJadwalKerja()));
                row.createCell(col++).setCellValue(fmtMenit.apply(s.getTotalMenitKerja()));
                row.createCell(col++).setCellValue(s.getPersentaseCapaianJamKerja());
                row.createCell(col++).setCellValue(fmtMenit.apply(s.getTotalMenitIstirahat()));
                row.createCell(col++).setCellValue(fmtMenit.apply(s.getTotalMenitLembur()));
                row.createCell(col++).setCellValue(fmtMenit.apply(s.getTotalMenitTerlambat()));
                row.createCell(col++).setCellValue(s.getTotalHariTerlambat());
                row.createCell(col++).setCellValue(fmtMenit.apply(s.getMenitJamKerjaTidakTerpenuhi()));
            }
            // Detail kolom per tanggal (placeholder — bisa dikembangkan)
            if (withDetail) {
                LocalDate d = dari;
                while (!d.isAfter(sampai)) {
                    row.createCell(col++).setCellValue(""); // placeholder per tanggal
                    d = d.plusDays(1);
                }
            }
        }

        // Auto-size kolom pertama
        sheet.setColumnWidth(0, 8000);

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        wb.write(out);
        wb.close();
        return out.toByteArray();
    }
}
