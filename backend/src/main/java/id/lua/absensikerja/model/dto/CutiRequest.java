package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.SesiSetengahHari;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CutiRequest {

    @NotNull(message = "Jenis cuti wajib diisi")
    private JenisCuti jenisCuti;

    @NotNull(message = "Tanggal mulai wajib diisi")
    private LocalDate tanggalMulai;

    @NotNull(message = "Tanggal selesai wajib diisi")
    private LocalDate tanggalSelesai;

    /** Hanya diisi bila jenisCuti = SETENGAH_HARI */
    private SesiSetengahHari sesiSetengahHari;

    @NotBlank(message = "Keperluan wajib diisi")
    private String keperluan;

    /** Default true; untuk Cuti Khusus boleh false */
    private Boolean mengurangiSisaCuti;
}
