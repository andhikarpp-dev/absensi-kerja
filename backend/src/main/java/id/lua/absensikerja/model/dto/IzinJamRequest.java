package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class IzinJamRequest {

    @NotNull(message = "Tanggal mulai wajib diisi")
    private LocalDate tanggalMulai;

    @NotNull(message = "Jam mulai wajib diisi")
    private LocalTime jamMulai;

    @NotNull(message = "Tanggal selesai wajib diisi")
    private LocalDate tanggalSelesai;

    @NotNull(message = "Jam selesai wajib diisi")
    private LocalTime jamSelesai;

    private LocalTime jamPengganti;

    private boolean dapatMengganti = false;
    private boolean kenaPotong     = false;
    private boolean kenaDenda      = false;

    private String keperluan;
}
