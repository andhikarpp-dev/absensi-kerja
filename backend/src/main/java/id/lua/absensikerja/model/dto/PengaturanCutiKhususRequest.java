package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanCutiKhususRequest {

    @NotBlank(message = "Nama jenis cuti khusus wajib diisi")
    private String  nama;

    private Integer maksHariPerRequest;
    private Integer maksRequestPerTahun;
    private Integer maksHariPerTahun;
    private Boolean aktif;
}
