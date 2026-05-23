package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusJadwalShift;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class JadwalShiftBatchRequest {

    @NotEmpty(message = "karyawanIds tidak boleh kosong")
    private List<Long> karyawanIds;

    @NotEmpty(message = "tanggalList tidak boleh kosong")
    private List<LocalDate> tanggalList;

    private Long polaKerjaId;

    @Size(max = 5)
    private String jamMasuk;

    @Size(max = 5)
    private String jamKeluar;

    @NotNull
    private StatusJadwalShift status = StatusJadwalShift.AKTIF;

    @Size(max = 255)
    private String keterangan;

    @Size(max = 10)
    private String warna;

    /** Bila true, timpa jadwal yang sudah ada di tanggal tsb. */
    private boolean overwrite = true;
}
