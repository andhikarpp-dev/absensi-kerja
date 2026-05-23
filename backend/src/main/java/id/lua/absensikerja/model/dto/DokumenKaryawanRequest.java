package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusKuotaDokumen;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class DokumenKaryawanRequest {

    @NotBlank(message = "Nama dokumen wajib diisi")
    private String namaDokumen;

    private LocalDate tanggalBerakhir;

    private Integer hariReminder;

    @NotNull(message = "Status kuota wajib diisi")
    private StatusKuotaDokumen statusKuota;
}
