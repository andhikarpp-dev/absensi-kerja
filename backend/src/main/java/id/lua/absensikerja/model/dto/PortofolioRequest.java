package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PortofolioRequest {

    @NotBlank(message = "Judul portofolio wajib diisi")
    private String judul;

    private String urlLink;
    private String deskripsi;
}
