package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data @Builder
public class PersetujuanPresensiDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaKaryawan;
    private String        namaDivisi;
    private String        namaJabatan;
    private String        fotoProfil;

    private LocalDate     tanggal;
    private String        jenisPresensi;

    private String        namaPolaKerja;
    private String        jamJadwalMasuk;
    private String        jamJadwalKeluar;

    private String        alasan;
    private boolean       diizinkan;
    private LocalDateTime diizinkanAt;
    private LocalDateTime createdAt;
}
