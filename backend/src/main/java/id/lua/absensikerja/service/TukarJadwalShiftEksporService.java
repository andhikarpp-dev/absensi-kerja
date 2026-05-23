package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.TukarJadwalShiftDTO;
import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;
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
public class TukarJadwalShiftEksporService {

    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm", new Locale("id", "ID"));

    public byte[] generate(List<TukarJadwalShiftDTO> data) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            Sheet sheet = wb.createSheet("Rekap Tukar Jadwal Shift");

            // ── Header style ──────────────────────────────────────
            CellStyle headerStyle = wb.createCellStyle();
            headerStyle.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);
            Font hFont = wb.createFont();
            hFont.setBold(true);
            hFont.setColor(IndexedColors.WHITE.getIndex());
            headerStyle.setFont(hFont);

            // ── Data style (even row) ─────────────────────────────
            CellStyle evenStyle = wb.createCellStyle();
            evenStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
            evenStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            // ── Kolom header ──────────────────────────────────────
            String[] headers = {
                "No", "Karyawan Pemohon", "Divisi Pemohon", "Jadwal Pemohon",
                "Karyawan Target", "Divisi Target", "Jadwal Target",
                "Tanggal Dibuat", "Status", "Catatan Penolakan"
            };

            Row headerRow = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 5000);
            }
            sheet.setColumnWidth(0, 1500);
            sheet.setColumnWidth(3, 10000);
            sheet.setColumnWidth(6, 10000);
            sheet.setColumnWidth(7, 5000);

            // ── Data rows ─────────────────────────────────────────
            int rowIdx = 1;
            for (TukarJadwalShiftDTO dto : data) {
                Row row = sheet.createRow(rowIdx);
                CellStyle style = (rowIdx % 2 == 0) ? evenStyle : null;

                setCell(row, 0, String.valueOf(rowIdx), style);
                setCell(row, 1, dto.getNamaKaryawanPemohon(), style);
                setCell(row, 2, dto.getDivisiPemohon() != null ? dto.getDivisiPemohon() : "-", style);
                setCell(row, 3, dto.getJadwalPemohon() != null ? dto.getJadwalPemohon() : "-", style);
                setCell(row, 4, dto.getNamaKaryawanTarget(), style);
                setCell(row, 5, dto.getDivisiTarget() != null ? dto.getDivisiTarget() : "-", style);
                setCell(row, 6, dto.getJadwalTarget() != null ? dto.getJadwalTarget() : "-", style);
                setCell(row, 7, dto.getTanggalDibuat() != null ? dto.getTanggalDibuat().format(FMT) : "-", style);
                setCell(row, 8, labelStatus(dto.getStatus()), style);
                setCell(row, 9, dto.getCatatanPenolakan() != null ? dto.getCatatanPenolakan() : "-", style);

                rowIdx++;
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out);
            return out.toByteArray();
        }
    }

    private void setCell(Row row, int col, String value, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value != null ? value : "");
        if (style != null) cell.setCellStyle(style);
    }

    private String labelStatus(StatusTukarJadwalShift status) {
        if (status == null) return "-";
        return switch (status) {
            case DISETUJUI -> "Disetujui";
            case DITOLAK   -> "Ditolak";
            default        -> "Menunggu";
        };
    }
}
