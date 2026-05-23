package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusJadwalShift;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;

@Data
public class JadwalShiftRequest {

    @NotNull(message = "karyawanId wajib diisi")
    private Long karyawanId;

    @NotNull(message = "tanggal wajib diisi")
    private LocalDate tanggal;

    private Long polaKerjaId;

    @Size(max = 5)
    private String jamMasuk;

    @Size(max = 5)
    private String jamKeluar;

    @NotNull(message = "status wajib diisi")
    private StatusJadwalShift status = StatusJadwalShift.AKTIF;

    @Size(max = 255)
    private String keterangan;

    @Size(max = 10)
    private String warna;
}
