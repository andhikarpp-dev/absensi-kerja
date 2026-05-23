package id.lua.absensikerja.service;

import id.lua.absensikerja.model.entity.JadwalLembur;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.repository.JadwalLemburRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor
public class JadwalLemburEksporImporService {

    private final JadwalLemburRepository jadwalLemburRepository;
    private final KaryawanRepository     karyawanRepository;

    private static final DateTimeFormatter DT_FMT =
            DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
    private static final DateTimeFormatter DT_PARSE =
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

    // ── Template Impor ───────────────────────────────────────
    public byte[] templateImpor() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            Sheet sheet = wb.createSheet("Template Jadwal Lembur");
            sheet.setColumnWidth(0, 3000);
            sheet.setColumnWidth(1, 8000);
            sheet.setColumnWidth(2, 6000);
            sheet.setColumnWidth(3, 6000);
            sheet.setColumnWidth(4, 4000);
            sheet.setColumnWidth(5, 8000);

            // Header style
            CellStyle hs = wb.createCellStyle();
            hs.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            hs.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            hs.setBorderBottom(BorderStyle.THIN);
            hs.setAlignment(HorizontalAlignment.CENTER);
            Font hf = wb.createFont(); hf.setBold(true); hf.setColor(IndexedColors.WHITE.getIndex());
            hs.setFont(hf);

            // Info style
            CellStyle is = wb.createCellStyle();
            is.setFillForegroundColor(IndexedColors.LIGHT_YELLOW.getIndex());
            is.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            is.setWrapText(true);

            // Baris info
            Row info = sheet.createRow(0);
            Cell ic = info.createCell(0);
            ic.setCellValue("Format: NIP, Nama Karyawan (info), Waktu Mulai (yyyy-MM-dd HH:mm), " +
                    "Waktu Selesai (yyyy-MM-dd HH:mm), Menit Sebelum Jadwal (opsional, angka), Catatan (opsional)");
            ic.setCellStyle(is);
            sheet.addMergedRegion(new org.apache.poi.ss.util.CellRangeAddress(0, 0, 0, 5));
            info.setHeight((short)(800));

            // Header
            String[] cols = {"NIP*", "Nama Karyawan (info)", "Waktu Mulai*\n(yyyy-MM-dd HH:mm)",
                    "Waktu Selesai*\n(yyyy-MM-dd HH:mm)", "Menit Sebelum\nJadwal", "Catatan"};
            Row hr = sheet.createRow(1);
            for (int i = 0; i < cols.length; i++) {
                Cell c = hr.createCell(i); c.setCellValue(cols[i]); c.setCellStyle(hs);
            }

            // Contoh data
            CellStyle ex = wb.createCellStyle();
            ex.setFillForegroundColor(IndexedColors.LIGHT_GREEN.getIndex());
            ex.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            Row sample = sheet.createRow(2);
            setCell(sample, 0, "EMP001", ex);
            setCell(sample, 1, "Contoh Karyawan", ex);
            setCell(sample, 2, "2026-05-20 18:00", ex);
            setCell(sample, 3, "2026-05-20 22:00", ex);
            setCell(sample, 4, "30", ex);
            setCell(sample, 5, "Lembur proyek A", ex);

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out); return out.toByteArray();
        }
    }

    // ── Proses Impor ─────────────────────────────────────────
    public ImporJadwalLemburResult prosesImpor(MultipartFile file) throws IOException {
        int berhasil = 0, gagal = 0;
        List<String> errors = new ArrayList<>();

        try (Workbook wb = WorkbookFactory.create(file.getInputStream())) {
            Sheet sheet = wb.getSheetAt(0);
            for (int i = 2; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null || isRowBlank(row)) continue;

                String nip       = getCellStr(row, 0).trim();
                String waktuMulaiStr  = getCellStr(row, 2).trim();
                String waktuSelesaiStr = getCellStr(row, 3).trim();
                String menitStr  = getCellStr(row, 4).trim();
                String catatan   = getCellStr(row, 5).trim();

                int baris = i + 1;
                if (nip.isEmpty()) { errors.add("Baris " + baris + ": NIP wajib diisi"); gagal++; continue; }
                if (waktuMulaiStr.isEmpty()) { errors.add("Baris " + baris + ": Waktu Mulai wajib diisi"); gagal++; continue; }
                if (waktuSelesaiStr.isEmpty()) { errors.add("Baris " + baris + ": Waktu Selesai wajib diisi"); gagal++; continue; }

                Optional<Karyawan> kOpt = karyawanRepository.findByNip(nip);
                if (kOpt.isEmpty()) { errors.add("Baris " + baris + ": NIP '" + nip + "' tidak ditemukan"); gagal++; continue; }

                LocalDateTime mulai, selesai;
                try { mulai   = LocalDateTime.parse(waktuMulaiStr, DT_PARSE); }
                catch (Exception e) { errors.add("Baris " + baris + ": Format Waktu Mulai salah (harus yyyy-MM-dd HH:mm)"); gagal++; continue; }
                try { selesai = LocalDateTime.parse(waktuSelesaiStr, DT_PARSE); }
                catch (Exception e) { errors.add("Baris " + baris + ": Format Waktu Selesai salah (harus yyyy-MM-dd HH:mm)"); gagal++; continue; }

                Integer menit = null;
                if (!menitStr.isEmpty()) {
                    try { menit = Integer.parseInt(menitStr); }
                    catch (NumberFormatException e) { errors.add("Baris " + baris + ": Menit Sebelum Jadwal harus berupa angka"); gagal++; continue; }
                }

                JadwalLembur j = JadwalLembur.builder()
                        .karyawan(kOpt.get())
                        .waktuMulai(mulai)
                        .waktuSelesai(selesai)
                        .menitSebelumJadwal(menit)
                        .catatan(catatan.isEmpty() ? null : catatan)
                        .status("PENGAJUAN")
                        .build();
                jadwalLemburRepository.save(j);
                berhasil++;
            }
        }
        return new ImporJadwalLemburResult(berhasil, gagal, errors);
    }

    // ── Ekspor Excel ─────────────────────────────────────────
    public byte[] ekspor(String status, String dari, String sampai, String divisiId, String cari) throws IOException {
        List<JadwalLembur> data = jadwalLemburRepository.findJadwal(status, dari, sampai, divisiId, cari);
        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            Sheet sheet = wb.createSheet("Jadwal Lembur");

            CellStyle hs = wb.createCellStyle();
            hs.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            hs.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            Font hf = wb.createFont(); hf.setBold(true); hf.setColor(IndexedColors.WHITE.getIndex());
            hs.setFont(hf); hs.setAlignment(HorizontalAlignment.CENTER);

            CellStyle even = wb.createCellStyle();
            even.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
            even.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            String[] headers = {"No","NIP","Karyawan","Divisi","Jabatan",
                    "Waktu Mulai","Waktu Selesai","Durasi",
                    "Pembatasan (menit)","Catatan","Status"};
            Row hr = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell c = hr.createCell(i); c.setCellValue(headers[i]); c.setCellStyle(hs);
                sheet.setColumnWidth(i, i == 2 || i == 3 ? 7000 : 5000);
            }

            int ri = 1;
            for (JadwalLembur j : data) {
                Row row = sheet.createRow(ri);
                CellStyle cs = ri % 2 == 0 ? even : null;
                Karyawan k = j.getKaryawan();
                long durasiMenit = j.getWaktuMulai() != null && j.getWaktuSelesai() != null
                        ? java.time.Duration.between(j.getWaktuMulai(), j.getWaktuSelesai()).toMinutes() : 0;
                String durasi = durasiMenit > 0 ? (durasiMenit / 60) + "j " + (durasiMenit % 60) + "m" : "-";

                setCell(row, 0, String.valueOf(ri), cs);
                setCell(row, 1, k.getNip(), cs);
                setCell(row, 2, k.getNamaLengkap(), cs);
                setCell(row, 3, k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : "-", cs);
                setCell(row, 4, k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : "-", cs);
                setCell(row, 5, j.getWaktuMulai() != null ? j.getWaktuMulai().format(DT_FMT) : "-", cs);
                setCell(row, 6, j.getWaktuSelesai() != null ? j.getWaktuSelesai().format(DT_FMT) : "-", cs);
                setCell(row, 7, durasi, cs);
                setCell(row, 8, j.getMenitSebelumJadwal() != null ? String.valueOf(j.getMenitSebelumJadwal()) : "-", cs);
                setCell(row, 9, j.getCatatan() != null ? j.getCatatan() : "-", cs);
                setCell(row, 10, j.getStatus(), cs);
                ri++;
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out); return out.toByteArray();
        }
    }

    // ── Helpers ──────────────────────────────────────────────
    private void setCell(Row row, int col, String val, CellStyle style) {
        Cell c = row.createCell(col); c.setCellValue(val != null ? val : "");
        if (style != null) c.setCellStyle(style);
    }
    private String getCellStr(Row row, int col) {
        Cell c = row.getCell(col, Row.MissingCellPolicy.RETURN_BLANK_AS_NULL);
        if (c == null) return "";
        return switch (c.getCellType()) {
            case STRING  -> c.getStringCellValue();
            case NUMERIC -> {
                if (DateUtil.isCellDateFormatted(c)) {
                    yield c.getLocalDateTimeCellValue().format(DT_PARSE);
                }
                double v = c.getNumericCellValue();
                yield v == Math.floor(v) ? String.valueOf((long) v) : String.valueOf(v);
            }
            case BOOLEAN -> String.valueOf(c.getBooleanCellValue());
            default -> "";
        };
    }
    private boolean isRowBlank(Row row) {
        for (int i = 0; i < 4; i++) {
            if (!getCellStr(row, i).isBlank()) return false;
        }
        return true;
    }

    public record ImporJadwalLemburResult(int berhasil, int gagal, List<String> errors) {}
}
