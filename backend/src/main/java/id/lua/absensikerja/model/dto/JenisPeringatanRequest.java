package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class JenisPeringatanRequest {

    @NotBlank(message = "Kode wajib diisi")
    private String kode;

    @NotBlank(message = "Nama wajib diisi")
    private String nama;

    private String  deskripsi;
    private Boolean aktif;
}
