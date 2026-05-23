package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class KontakDaruratRequest {

    @NotBlank(message = "Nama wajib diisi")
    private String nama;

    private String noTelepon;
}
