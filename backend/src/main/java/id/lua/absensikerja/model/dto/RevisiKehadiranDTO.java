package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisRevisiKehadiran;
import id.lua.absensikerja.model.enums.StatusRevisi;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Data @Builder
public class RevisiKehadiranDTO {
    private Long                 id;
    private Long                 karyawanId;
    private String               namaKaryawan;
    private String               namaDivisi;
    private String               namaJabatan;
    private String               fotoProfil;

    private Long                 absensiId;
    private LocalDate            tanggal;

    private JenisRevisiKehadiran jenisKehadiran;
    private String               alasan;
    private LocalTime            jamAsli;
    private LocalTime            jamBaru;

    private StatusRevisi         status;
    private String               catatanPenolakan;

    private LocalDateTime        createdAt;
    private LocalDateTime        updatedAt;
}
