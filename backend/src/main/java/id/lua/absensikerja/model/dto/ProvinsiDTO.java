package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProvinsiDTO {
    private Long id;
    private String namaProvinsi;
    private List<KabupatenKotaDTO> kabupatenKotaList;
}
