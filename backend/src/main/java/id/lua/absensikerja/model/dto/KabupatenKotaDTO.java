package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KabupatenKotaDTO {
    private Long id;
    private String namaKabupatenKota;
    private Long provinsiId;
    private String namaProvinsi;
}
