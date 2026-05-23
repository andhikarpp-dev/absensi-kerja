package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisIdentitasTambahan;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class FileIdentitasRequest {

    @NotNull(message = "Jenis identitas wajib diisi")
    private JenisIdentitasTambahan jenisIdentitas;

    @NotBlank(message = "Nomor wajib diisi")
    private String nomor;
}
