package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class KlaimItemPengeluaranRequest {

    @NotBlank(message = "Keterangan item wajib diisi")
    private String keterangan;

    @NotNull(message = "Jumlah item wajib diisi")
    @Positive(message = "Jumlah harus bernilai positif")
    private BigDecimal jumlah;
}
