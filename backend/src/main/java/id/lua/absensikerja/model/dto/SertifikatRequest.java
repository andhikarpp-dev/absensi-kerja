package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class SertifikatRequest {

    @NotBlank(message = "Nama sertifikat wajib diisi")
    private String namaSertifikat;

    private String penerbit;
    private String nomorSertifikat;
    private LocalDate tanggalTerbit;
    private LocalDate tanggalKadaluarsa;
    private String keterangan;
}
