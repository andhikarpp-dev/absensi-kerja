package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class KlienRequest {
    @NotBlank(message = "Nama klien wajib diisi")
    private String namaKlien;
    private String alamat;
    private String telepon;
    private String email;
    private String keterangan;
}
