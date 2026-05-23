package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.ReviewLemburDTO;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class LemburEksporService {

    private static final DateTimeFormatter TGL_FMT =
            DateTimeFormatter.ofPattern("dd/MM/yyyy", new Locale("id", "ID"));

    public byte[] generate(List<ReviewLemburDTO> data) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            Sheet sheet = wb.createSheet("Review Lembur");

            // ── Header style ──────────────────────────────────────
            CellStyle hStyle = wb.createCellStyle();
            hStyle.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            hStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            hStyle.setBorderBottom(BorderStyle.THIN);
            hStyle.setAlignment(HorizontalAlignment.CENTER);
            Font hFont = wb.createFont();
            hFont.setBold(true);
            hFont.setColor(IndexedColors.WHITE.getIndex());
            hStyle.setFont(hFont);

            // ── Even row style ────────────────────────────────────
            CellStyle evenStyle = wb.createCellStyle();
            evenStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
            evenStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            // ── Header row ────────────────────────────────────────
            String[] headers = { "No", "Karyawan", "Divisi", "Jabatan",
                    "Tanggal", "Hari", "Mulai Lembur", "Selesai Lembur", "Total Lembur",
                    "Shift", "Jam Kerja Mulai", "Jam Kerja Selesai" };
            Row hr = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell c = hr.createCell(i);
                c.setCellValue(headers[i]);
                c.setCellStyle(hStyle);
                sheet.setColumnWidth(i, 5000);
            }
            sheet.setColumnWidth(0, 1500);
            sheet.setColumnWidth(1, 7000);
            sheet.setColumnWidth(3, 6000);

            // ── Data rows ─────────────────────────────────────────
            int rowIdx = 1;
            for (ReviewLemburDTO r : data) {
                Row row = sheet.createRow(rowIdx);
                CellStyle style = rowIdx % 2 == 0 ? evenStyle : null;

                set(row, 0, String.valueOf(rowIdx), style);
                set(row, 1, r.getNamaKaryawan(), style);
                set(row, 2, r.getNamaDivisi() != null ? r.getNamaDivisi() : "-", style);
                set(row, 3, r.getNamaJabatan() != null ? r.getNamaJabatan() : "-", style);
                set(row, 4, r.getTanggal() != null ? r.getTanggal().format(TGL_FMT) : "-", style);
                set(row, 5, r.getNamaHari() != null ? r.getNamaHari() : "-", style);
                set(row, 6, r.getJamMulaiLembur() != null ? r.getJamMulaiLembur() : "-", style);
                set(row, 7, r.getJamSelesaiLembur() != null ? r.getJamSelesaiLembur() : "-", style);
                set(row, 8, r.getTotalLembur() != null ? r.getTotalLembur() : "-", style);
                set(row, 9, r.getNamaPolaKerja() != null ? r.getNamaPolaKerja() : "-", style);
                set(row, 10, r.getJamKerjaMulai() != null ? r.getJamKerjaMulai() : "-", style);
                set(row, 11, r.getJamKerjaSelesai() != null ? r.getJamKerjaSelesai() : "-", style);
                rowIdx++;
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out);
            return out.toByteArray();
        }
    }

    private void set(Row row, int col, String val, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(val != null ? val : "");
        if (style != null) cell.setCellStyle(style);
    }
}
