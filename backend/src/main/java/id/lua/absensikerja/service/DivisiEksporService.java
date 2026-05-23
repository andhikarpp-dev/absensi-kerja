package id.lua.absensikerja.service;

import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.repository.DivisiRepository;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DivisiEksporService {

    private final DivisiRepository divisiRepository;

    @Transactional(readOnly = true)
    public byte[] eksporSemua() throws IOException {
        List<Divisi> list = divisiRepository.findAll();
        return buatExcel(list);
    }

    // ── Builder Excel ──────────────────────────────────────────────────────────

    private byte[] buatExcel(List<Divisi> list) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Data Divisi");
            sheet.setDefaultColumnWidth(20);

            // ── Styles ────────────────────────────────────────────────────────
            CellStyle styleJudul      = buatStyleJudul(wb);
            CellStyle styleHeader     = buatStyleHeader(wb);
            CellStyle styleSubHeader  = buatStyleSubHeader(wb);
            CellStyle styleData       = buatStyleData(wb);
            CellStyle styleDataCenter = buatStyleDataCenter(wb);
            CellStyle styleYaTidak    = buatStyleYaTidak(wb, true);
            CellStyle styleTidak      = buatStyleYaTidak(wb, false);

            int rowNum = 0;

            // ── Baris judul ───────────────────────────────────────────────────
            Row rowJudul = sheet.createRow(rowNum++);
            rowJudul.setHeightInPoints(24);
            Cell judulCell = rowJudul.createCell(0);
            judulCell.setCellValue("DATA DIVISI");
            judulCell.setCellStyle(styleJudul);
            sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 18));

            rowNum++; // baris kosong

            // ── Header kolom ──────────────────────────────────────────────────
            String[] headers = {
                "#",
                "Nama Divisi",
                "Sistem Kerja",
                "Supervisor",
                // Denda
                "Denda Keterlambatan",
                "Denda Terlambat Keluar",
                // Catatan presensi
                "Catatan Masuk",
                "Catatan Keluar",
                "Catatan Mulai Lembur",
                "Catatan Selesai Lembur",
                // Lokasi
                "Lokasi Masuk",
                "Lokasi Istirahat",
                "Lokasi Selesai Istirahat",
                "Lokasi Keluar",
                "Lokasi Lembur",
                // Pembatasan
                "Menit Sebelum Masuk",
                "Menit Setelah Masuk",
                "Menit Setelah Jadwal Keluar",
                // Fitur
                "Validasi Perangkat"
            };

            Row rowHeader = sheet.createRow(rowNum++);
            rowHeader.setHeightInPoints(18);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = rowHeader.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(styleHeader);
            }

            // Atur lebar kolom spesifik
            sheet.setColumnWidth(0, 5  * 256);  // #
            sheet.setColumnWidth(1, 30 * 256);  // Nama Divisi
            sheet.setColumnWidth(2, 15 * 256);  // Sistem Kerja
            sheet.setColumnWidth(3, 25 * 256);  // Supervisor
            sheet.setColumnWidth(6, 20 * 256);  // Catatan Masuk
            sheet.setColumnWidth(7, 20 * 256);  // Catatan Keluar
            sheet.setColumnWidth(8, 22 * 256);  // Catatan Mulai Lembur
            sheet.setColumnWidth(9, 25 * 256);  // Catatan Selesai Lembur

            // ── Data ──────────────────────────────────────────────────────────
            int no = 1;
            for (Divisi d : list) {
                Row row = sheet.createRow(rowNum++);

                setCell(row, 0, String.valueOf(no++),        styleDataCenter);
                setCell(row, 1, d.getNamaDivisi(),           styleData);
                setCell(row, 2, labelSistemKerja(d),         styleDataCenter);
                setCell(row, 3, supervisorNama(d),           styleData);
                setYaTidak(row, 4,  d.isDendaKeterlambatan(),  styleYaTidak, styleTidak);
                setYaTidak(row, 5,  d.isDendaTerlambatKeluar(), styleYaTidak, styleTidak);
                setCell(row, 6,  labelCatatan(d.getCatatanMasuk()),         styleDataCenter);
                setCell(row, 7,  labelCatatan(d.getCatatanKeluar()),        styleDataCenter);
                setCell(row, 8,  labelCatatan(d.getCatatanMulaiLembur()),   styleDataCenter);
                setCell(row, 9,  labelCatatan(d.getCatatanSelesaiLembur()), styleDataCenter);
                setYaTidak(row, 10, d.isLokasiMasuk(),          styleYaTidak, styleTidak);
                setYaTidak(row, 11, d.isLokasiIstirahat(),      styleYaTidak, styleTidak);
                setYaTidak(row, 12, d.isLokasiSelesaiIstirahat(), styleYaTidak, styleTidak);
                setYaTidak(row, 13, d.isLokasiKeluar(),         styleYaTidak, styleTidak);
                setYaTidak(row, 14, d.isLokasiLembur(),         styleYaTidak, styleTidak);
                setCellNum(row, 15, d.getMenitSebelumMasuk(),   styleDataCenter);
                setCellNum(row, 16, d.getMenitSetelahMasuk(),   styleDataCenter);
                setCellNum(row, 17, d.getMenitSetelahJadwalKeluar(), styleDataCenter);
                setYaTidak(row, 18, d.isValidasiPerangkat(),    styleYaTidak, styleTidak);
            }

            // ── Freeze panes (beku baris header) ─────────────────────────────
            sheet.createFreezePane(0, 3); // beku 3 baris teratas (judul + kosong + header)

            // ── Auto filter ───────────────────────────────────────────────────
            sheet.setAutoFilter(new CellRangeAddress(2, rowNum - 1, 0, headers.length - 1));

            wb.write(out);
            return out.toByteArray();
        }
    }

    // ── Helpers cell ──────────────────────────────────────────────────────────

    private void setCell(Row row, int col, String value, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value != null ? value : "");
        cell.setCellStyle(style);
    }

    private void setCellNum(Row row, int col, Integer value, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value != null ? value : 0);
        cell.setCellStyle(style);
    }

    private void setYaTidak(Row row, int col, boolean value, CellStyle styleYa, CellStyle styleTidak) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value ? "Ya" : "Tidak");
        cell.setCellStyle(value ? styleYa : styleTidak);
    }

    // ── Helpers label ─────────────────────────────────────────────────────────

    private String labelSistemKerja(Divisi d) {
        if (d.getSistemKerja() == null) return "-";
        return switch (d.getSistemKerja()) {
            case HARI_KERJA -> "Hari Kerja";
            case SHIFT      -> "Shift";
        };
    }

    private String supervisorNama(Divisi d) {
        if (d.getSupervisor() == null) return "-";
        return d.getSupervisor().getNamaLengkap();
    }

    private String labelCatatan(Object catatan) {
        if (catatan == null) return "-";
        return switch (catatan.toString()) {
            case "TIDAK_DIBUTUHKAN" -> "Tidak Dibutuhkan";
            case "OPTIONAL"         -> "Opsional";
            case "DIBUTUHKAN"       -> "Dibutuhkan";
            default                 -> catatan.toString();
        };
    }

    // ── Helpers style ─────────────────────────────────────────────────────────

    private CellStyle buatStyleJudul(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        Font f = wb.createFont();
        f.setBold(true);
        f.setFontHeightInPoints((short) 14);
        s.setFont(f);
        s.setAlignment(HorizontalAlignment.CENTER);
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        s.setFillForegroundColor(IndexedColors.DARK_BLUE.getIndex());
        s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        f.setColor(IndexedColors.WHITE.getIndex());
        return s;
    }

    private CellStyle buatStyleHeader(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        Font f = wb.createFont();
        f.setBold(true);
        f.setColor(IndexedColors.WHITE.getIndex());
        s.setFont(f);
        s.setFillForegroundColor(IndexedColors.ROYAL_BLUE.getIndex());
        s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        s.setAlignment(HorizontalAlignment.CENTER);
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        s.setBorderBottom(BorderStyle.THIN);
        s.setBorderTop(BorderStyle.THIN);
        s.setBorderLeft(BorderStyle.THIN);
        s.setBorderRight(BorderStyle.THIN);
        s.setWrapText(true);
        return s;
    }

    private CellStyle buatStyleSubHeader(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        Font f = wb.createFont();
        f.setBold(true);
        s.setFont(f);
        s.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
        s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        s.setAlignment(HorizontalAlignment.CENTER);
        setBorder(s);
        return s;
    }

    private CellStyle buatStyleData(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        setBorder(s);
        return s;
    }

    private CellStyle buatStyleDataCenter(Workbook wb) {
        CellStyle s = buatStyleData(wb);
        s.setAlignment(HorizontalAlignment.CENTER);
        return s;
    }

    private CellStyle buatStyleYaTidak(Workbook wb, boolean ya) {
        CellStyle s = wb.createCellStyle();
        Font f = wb.createFont();
        f.setBold(true);
        f.setColor(IndexedColors.WHITE.getIndex());
        s.setFont(f);
        s.setAlignment(HorizontalAlignment.CENTER);
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        s.setFillForegroundColor(ya
                ? IndexedColors.GREEN.getIndex()
                : IndexedColors.GREY_50_PERCENT.getIndex());
        s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        setBorder(s);
        return s;
    }

    private void setBorder(CellStyle s) {
        s.setBorderBottom(BorderStyle.THIN);
        s.setBorderTop(BorderStyle.THIN);
        s.setBorderLeft(BorderStyle.THIN);
        s.setBorderRight(BorderStyle.THIN);
    }
}
