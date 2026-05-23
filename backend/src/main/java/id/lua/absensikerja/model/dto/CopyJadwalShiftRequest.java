package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CopyJadwalShiftRequest {

    /** Tanggal awal minggu sumber (Senin). */
    @NotNull
    private LocalDate sourceWeekStart;

    /** Tanggal awal minggu tujuan (Senin). */
    @NotNull
    private LocalDate targetWeekStart;

    /** Bila kosong, copy untuk semua karyawan SHIFT. */
    private List<Long> karyawanIds;

    private boolean overwrite = true;
}
