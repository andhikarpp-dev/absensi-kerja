package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisKlaim;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class KlaimRequest {

    @NotNull(message = "Jenis klaim wajib dipilih")
    private JenisKlaim jenisKlaim;

    @NotNull(message = "Nominal wajib diisi")
    @Positive(message = "Nominal harus bernilai positif")
    private BigDecimal nominal;

    private String keterangan;

    @Valid
    private List<KlaimItemPengeluaranRequest> itemPengeluaran;
}
