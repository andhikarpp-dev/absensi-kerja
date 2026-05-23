package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisUpahOpenshift;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class OpenshiftRequest {

    @NotNull(message = "Jam masuk wajib diisi")
    private LocalDateTime jamMasuk;

    @NotNull(message = "Jam keluar wajib diisi")
    private LocalDateTime jamKeluar;

    @NotNull
    private JenisUpahOpenshift jenisUpah = JenisUpahOpenshift.SESUAI_LEMBUR;

    @Min(value = 0, message = "Upah per jam tidak boleh negatif")
    private Long upahPerJam = 0L;

    /** Null = tidak terbatas */
    @Min(value = 0, message = "Maks. karyawan tidak boleh negatif")
    private Integer maksKaryawan;

    @Size(max = 500)
    private String catatan;

    @NotEmpty(message = "Pilih minimal satu divisi target")
    private Set<Long> divisiIds;
}
