package id.lua.absensikerja.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class JabatanRequest {

    @NotBlank(message = "Nama jabatan tidak boleh kosong")
    @Size(max = 100, message = "Nama jabatan maksimal 100 karakter")
    private String namaJabatan;

    /** ID jabatan induk (boleh null untuk jabatan root) */
    private Long indukId;

    @Valid
    private List<TargetKehadiranItemRequest> targetKehadiranList = new ArrayList<>();

    @Data
    public static class TargetKehadiranItemRequest {
        @NotBlank(message = "Nama lokasi tidak boleh kosong")
        @Size(max = 100)
        private String namaLokasi;

        private Integer targetPersen = 0;
    }
}
