package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class PesanKuotaLokasiRequest {
    @NotNull
    @Positive
    private Integer kuota;
}
