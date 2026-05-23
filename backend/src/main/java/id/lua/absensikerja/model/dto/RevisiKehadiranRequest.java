package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisRevisiKehadiran;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class RevisiKehadiranRequest {

    @NotNull
    private Long karyawanId;

    private Long absensiId;

    @NotNull
    private LocalDate tanggal;

    @NotNull
    private JenisRevisiKehadiran jenisKehadiran;

    @NotNull
    private String alasan;

    private LocalTime jamAsli;

    @NotNull
    private LocalTime jamBaru;
}
