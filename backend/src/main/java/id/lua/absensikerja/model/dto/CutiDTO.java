package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.SesiSetengahHari;
import id.lua.absensikerja.model.enums.StatusIzin;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data @Builder
public class CutiDTO {
    private Long             id;
    private Long             karyawanId;
    private String           namaKaryawan;
    private String           namaDivisi;
    private String           namaJabatan;

    private JenisCuti        jenisCuti;
    private LocalDate        tanggalMulai;
    private LocalDate        tanggalSelesai;
    private Double           jumlahHari;
    private SesiSetengahHari sesiSetengahHari;

    private String           keperluan;
    private String           lampiranUrl;
    private boolean          mengurangiSisaCuti;

    private StatusIzin       status;
    private String           catatanPenolakan;

    private LocalDateTime    createdAt;
    private LocalDateTime    updatedAt;
}
