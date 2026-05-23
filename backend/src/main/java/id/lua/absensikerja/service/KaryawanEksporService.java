package id.lua.absensikerja.service;

import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;

/**
 * Service ekspor data karyawan ke Excel dengan filter divisi & jumlah karyawan.
 * Mendukung pengiriman hasil ekspor langsung ke email.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class KaryawanEksporService {

    private final KaryawanRepository karyawanRepository;
    private final EmailService       emailService;

    /**
     * Ambil daftar karyawan sesuai filter, hasilkan workbook Excel.
     *
     * @param ownerId  id pemilik perusahaan (null = ADMIN, ambil semua)
     * @param divisiId filter id divisi (null = semua divisi)
     * @param limit    jumlah maksimum karyawan (null/<=0 = tanpa batas)
     */
    @Transactional(readOnly = true)
    public byte[] eksporExcel(Long ownerId, Long divisiId, Integer limit) throws IOException {
        List<Karyawan> all = karyawanRepository.findAll().stream()
                .filter(k -> !k.isDeleted())
                .filter(k -> ownerId == null
                        || (k.getPerusahaan() != null
                            && k.getPerusahaan().getOwner() != null
                            && ownerId.equals(k.getPerusahaan().getOwner().getId())))
                .filter(k -> divisiId == null
                        || (k.getDivisi() != null && divisiId.equals(k.getDivisi().getId())))
                .sorted(Comparator.comparing(Karyawan::getNamaLengkap,
                        Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER)))
                .toList();

        if (limit != null && limit > 0 && all.size() > limit) {
            all = all.subList(0, limit);
        }
        return buildExcel(all);
    }

    /**
     * Versi async — kirim hasil ekspor sebagai attachment email.
     */
    @Async
    @Transactional(readOnly = true)
    public void eksporKeEmail(Long ownerId, Long divisiId, Integer limit, String email) {
        try {
            byte[] data = eksporExcel(ownerId, divisiId, limit);
            String filename = "Data_Karyawan_"
                    + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"))
                    + ".xlsx";
            String html = buildEmailHtml(data.length, filename);
            emailService.sendEmailWithAttachment(
                    email,
                    "Ekspor Data Karyawan – AbsensiKerja",
                    html,
                    filename,
                    data,
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            log.info("Ekspor karyawan dikirim ke {} ({} bytes)", email, data.length);
        } catch (Exception e) {
            log.error("Gagal ekspor & kirim email ke {}: {}", email, e.getMessage(), e);
        }
    }

    private String buildEmailHtml(int sizeBytes, String filename) {
        double sizeKb = sizeBytes / 1024.0;
        return """
            <!DOCTYPE html>
            <html><body style="font-family:'Segoe UI',Arial,sans-serif;background:#f1f5f9;padding:24px">
              <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;
                          padding:32px;box-shadow:0 4px 24px rgba(0,0,0,.08)">
                <h2 style="color:#4f46e5;margin:0 0 12px">📊 Ekspor Data Karyawan</h2>
                <p style="color:#475569;line-height:1.6">
                  File ekspor data karyawan telah dilampirkan pada email ini.
                </p>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;
                            padding:16px 20px;margin:16px 0">
                  <div style="color:#64748b;font-size:13px">Nama File</div>
                  <div style="font-family:monospace;color:#1e293b;font-size:14px">%s</div>
                  <div style="color:#64748b;font-size:13px;margin-top:8px">Ukuran</div>
                  <div style="color:#1e293b;font-size:14px">%.1f KB</div>
                </div>
                <p style="color:#94a3b8;font-size:13px;margin-top:24px">
                  Email otomatis dari sistem AbsensiKerja. Mohon untuk tidak membalas email ini.
                </p>
              </div>
            </body></html>
            """.formatted(filename, sizeKb);
    }

    // ── Builder Excel ──────────────────────────────────────────────────────────

    private byte[] buildExcel(List<Karyawan> list) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Data Karyawan");
            sheet.setDefaultColumnWidth(18);

            CellStyle styleJudul   = styleJudul(wb);
            CellStyle styleHeader  = styleHeader(wb);
            CellStyle styleData    = styleData(wb);
            CellStyle styleCenter  = styleCenter(wb);

            int rowNum = 0;

            // Judul
            Row rowJudul = sheet.createRow(rowNum++);
            rowJudul.setHeightInPoints(26);
            Cell judulCell = rowJudul.createCell(0);
            judulCell.setCellValue("DATA KARYAWAN");
            judulCell.setCellStyle(styleJudul);
            sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 11));

            // Info ekspor
            Row rowInfo = sheet.createRow(rowNum++);
            Cell info = rowInfo.createCell(0);
            info.setCellValue("Diekspor: "
                    + LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm"))
                    + "  ·  Total: " + list.size() + " karyawan");
            sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 11));

            rowNum++; // baris kosong

            // Header
            String[] headers = {
                    "#", "NIP", "Nama Lengkap", "Jenis Kelamin", "No. Identitas",
                    "Email", "No. Telepon", "Jabatan", "Divisi", "Status Kerja",
                    "Tgl. Mulai Bekerja", "Sisa Cuti"
            };
            Row rowHeader = sheet.createRow(rowNum++);
            rowHeader.setHeightInPoints(22);
            for (int i = 0; i < headers.length; i++) {
                Cell c = rowHeader.createCell(i);
                c.setCellValue(headers[i]);
                c.setCellStyle(styleHeader);
            }

            // Data
            DateTimeFormatter dfTgl = DateTimeFormatter.ofPattern("dd MMM yyyy");
            int no = 1;
            for (Karyawan k : list) {
                Row r = sheet.createRow(rowNum++);
                int col = 0;
                cell(r, col++, String.valueOf(no++), styleCenter);
                cell(r, col++, nullSafe(k.getNip()), styleData);
                cell(r, col++, nullSafe(k.getNamaLengkap()), styleData);
                cell(r, col++, k.getJenisKelamin() != null ? k.getJenisKelamin().name() : "-", styleCenter);
                cell(r, col++, nullSafe(k.getNomorIdentitas()), styleData);
                cell(r, col++, k.getUser() != null ? nullSafe(k.getUser().getEmail()) : "-", styleData);
                cell(r, col++, nullSafe(k.getNoTelepon()), styleData);
                cell(r, col++, k.getJabatan() != null ? nullSafe(k.getJabatan().getNamaJabatan()) : "-", styleData);
                cell(r, col++, k.getDivisi()  != null ? nullSafe(k.getDivisi().getNamaDivisi())  : "-", styleData);
                cell(r, col++, k.getStatusKerja() != null ? k.getStatusKerja().name() : "-", styleCenter);
                cell(r, col++, k.getTglMulaiBekerja() != null ? k.getTglMulaiBekerja().format(dfTgl) : "-", styleCenter);
                cell(r, col,   String.valueOf(k.getSisaCuti() != null ? k.getSisaCuti() : 0), styleCenter);
            }

            // Auto-size kolom
            for (int i = 0; i < headers.length; i++) sheet.autoSizeColumn(i);

            wb.write(out);
            return out.toByteArray();
        }
    }

    private static String nullSafe(String s) { return s == null || s.isBlank() ? "-" : s; }

    private static void cell(Row r, int col, String val, CellStyle style) {
        Cell c = r.createCell(col);
        c.setCellValue(val);
        c.setCellStyle(style);
    }

    // ── Styles ────────────────────────────────────────────────────────────────

    private CellStyle styleJudul(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        Font f = wb.createFont();
        f.setBold(true); f.setFontHeightInPoints((short) 14); f.setColor(IndexedColors.WHITE.getIndex());
        s.setFont(f);
        s.setAlignment(HorizontalAlignment.CENTER);
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        s.setFillForegroundColor(IndexedColors.INDIGO.getIndex());
        s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        return s;
    }

    private CellStyle styleHeader(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        Font f = wb.createFont();
        f.setBold(true); f.setColor(IndexedColors.WHITE.getIndex());
        s.setFont(f);
        s.setAlignment(HorizontalAlignment.CENTER);
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        s.setFillForegroundColor(IndexedColors.GREY_50_PERCENT.getIndex());
        s.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        addBorder(s);
        return s;
    }

    private CellStyle styleData(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        addBorder(s);
        return s;
    }

    private CellStyle styleCenter(Workbook wb) {
        CellStyle s = wb.createCellStyle();
        s.setAlignment(HorizontalAlignment.CENTER);
        s.setVerticalAlignment(VerticalAlignment.CENTER);
        addBorder(s);
        return s;
    }

    private void addBorder(CellStyle s) {
        s.setBorderTop(BorderStyle.THIN);
        s.setBorderBottom(BorderStyle.THIN);
        s.setBorderLeft(BorderStyle.THIN);
        s.setBorderRight(BorderStyle.THIN);
    }
}
