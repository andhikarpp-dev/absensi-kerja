package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.ImporSupervisorResult;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
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
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DivisiImporService {

    private static final long MAX_SIZE_BYTES = 500L * 1024; // 500 KB
    private static final String CONTENT_TYPE  =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    private final DivisiRepository    divisiRepository;
    private final KaryawanRepository  karyawanRepository;

    // ── Download template ──────────────────────────────────────────────────────

    public byte[] buatTemplate() throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Supervisor Divisi");

            // Header style
            CellStyle headerStyle = wb.createCellStyle();
            Font headerFont = wb.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);
            headerStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);

            Row header = sheet.createRow(0);
            String[] cols = {"Nama Divisi", "Supervisor (Nama Karyawan)"};
            for (int i = 0; i < cols.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(cols[i]);
                cell.setCellStyle(headerStyle);
                sheet.setColumnWidth(i, 30 * 256);
            }

            // Contoh data
            Row contoh = sheet.createRow(1);
            contoh.createCell(0).setCellValue("Graha Kreatif");
            contoh.createCell(1).setCellValue("Idris Ependi");

            wb.write(out);
            return out.toByteArray();
        }
    }

    // ── Proses impor ──────────────────────────────────────────────────────────

    @Transactional
    public ImporSupervisorResult prosesImpor(MultipartFile file) throws IOException {

        // Validasi file
        if (file == null || file.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File tidak boleh kosong");
        }
        if (file.getSize() > MAX_SIZE_BYTES) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Ukuran file melebihi batas maksimal 500 KB");
        }
        String ct = file.getContentType();
        String fn = file.getOriginalFilename() != null ? file.getOriginalFilename() : "";
        if (!CONTENT_TYPE.equals(ct) && !fn.endsWith(".xlsx")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Format file tidak valid. Harap upload file .xlsx");
        }

        List<ImporSupervisorResult.BarisSalah> errors = new ArrayList<>();
        int berhasil = 0;
        int gagal    = 0;

        try (InputStream is = file.getInputStream();
             Workbook wb   = new XSSFWorkbook(is)) {

            Sheet sheet = wb.getSheetAt(0);
            if (sheet == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sheet pertama tidak ditemukan");
            }

            // Mulai dari baris ke-1 (skip header baris ke-0)
            for (int rowIdx = 1; rowIdx <= sheet.getLastRowNum(); rowIdx++) {
                Row row = sheet.getRow(rowIdx);
                if (row == null) continue;

                String namaDivisi    = getCellString(row, 0);
                String namaKaryawan  = getCellString(row, 1);

                // Skip baris kosong
                if (namaDivisi.isBlank() && namaKaryawan.isBlank()) continue;

                int nomorBaris = rowIdx + 1; // 1-based untuk tampilan user

                // Validasi kolom tidak kosong
                if (namaDivisi.isBlank()) {
                    errors.add(barisSalah(nomorBaris, namaDivisi, namaKaryawan, "Nama Divisi tidak boleh kosong"));
                    gagal++;
                    continue;
                }
                if (namaKaryawan.isBlank()) {
                    errors.add(barisSalah(nomorBaris, namaDivisi, namaKaryawan, "Nama Karyawan tidak boleh kosong"));
                    gagal++;
                    continue;
                }

                // Cari divisi
                Divisi divisi = divisiRepository.findByNamaDivisi(namaDivisi).orElse(null);
                if (divisi == null) {
                    errors.add(barisSalah(nomorBaris, namaDivisi, namaKaryawan,
                            "Divisi '" + namaDivisi + "' tidak ditemukan"));
                    gagal++;
                    continue;
                }

                // Cari karyawan by nama (case-insensitive)
                Karyawan karyawan = karyawanRepository.findByNamaLengkapIgnoreCase(namaKaryawan).orElse(null);
                if (karyawan == null) {
                    errors.add(barisSalah(nomorBaris, namaDivisi, namaKaryawan,
                            "Karyawan '" + namaKaryawan + "' tidak ditemukan"));
                    gagal++;
                    continue;
                }

                // Set supervisor
                divisi.setSupervisor(karyawan);
                divisiRepository.save(divisi);
                berhasil++;
            }
        }

        return ImporSupervisorResult.builder()
                .berhasil(berhasil)
                .gagal(gagal)
                .errors(errors)
                .build();
    }

    // ── helpers ───────────────────────────────────────────────────────────────

    private String getCellString(Row row, int col) {
        Cell cell = row.getCell(col, Row.MissingCellPolicy.RETURN_BLANK_AS_NULL);
        if (cell == null) return "";
        return switch (cell.getCellType()) {
            case STRING  -> cell.getStringCellValue().trim();
            case NUMERIC -> {
                // Hindari angka menjadi "1.0"
                long lv = (long) cell.getNumericCellValue();
                yield String.valueOf(lv);
            }
            default -> cell.toString().trim();
        };
    }

    private ImporSupervisorResult.BarisSalah barisSalah(
            int baris, String divisi, String karyawan, String pesan) {
        return ImporSupervisorResult.BarisSalah.builder()
                .baris(baris)
                .namaDivisi(divisi)
                .namaKaryawan(karyawan)
                .pesan(pesan)
                .build();
    }
}
