package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BackgroundPendidikanRequest {

    @NotBlank(message = "Tingkat pendidikan wajib diisi")
    private String tingkatPendidikan;

    @NotBlank(message = "Nama institusi wajib diisi")
    private String namaInstitusi;

    private String jurusan;
    private Integer tahunMasuk;
    private Integer tahunLulus;
    private String nilai;
    private String keterangan;
}
