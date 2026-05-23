package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PenghargaanRequest {

    @NotBlank(message = "Nama penghargaan wajib diisi")
    private String namaPenghargaan;

    private String penerbit;
    private Integer tahun;
    private String deskripsi;
}
