package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusIzin;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data @Builder
public class IzinJamDTO {
    private Long        id;
    private Long        karyawanId;
    private String      namaKaryawan;
    private String      fotoProfil;
    private String      namaDivisi;
    private String      namaJabatan;

    private LocalDate   tanggalMulai;
    private LocalTime   jamMulai;
    private LocalDate   tanggalSelesai;
    private LocalTime   jamSelesai;
    private Integer     durasiMenit;
    private LocalTime   jamPengganti;

    private boolean     dapatMengganti;
    private boolean     kenaPotong;
    private boolean     kenaDenda;
    private String      keperluan;
    private StatusIzin  status;
    private String      catatanPenolakan;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
