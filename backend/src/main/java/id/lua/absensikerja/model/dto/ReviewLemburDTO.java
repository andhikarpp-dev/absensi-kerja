package id.lua.absensikerja.model.dto;

import lombok.*;
import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ReviewLemburDTO {
    private Long      id;               // absensiId
    private Long      karyawanId;
    private String    namaKaryawan;
    private String    namaDivisi;
    private String    namaJabatan;
    private String    fotoProfil;

    private LocalDate tanggal;
    private String    namaHari;

    private String    jamMulaiLembur;   // "HH:mm:ss"
    private String    jamSelesaiLembur;
    private String    totalLembur;      // "2j 30m"

    private String    namaPolaKerja;
    private String    jamKerjaMulai;
    private String    jamKerjaSelesai;

    // Status validasi
    private boolean   divalidasi;
    private String    catatanValidasi;
}
