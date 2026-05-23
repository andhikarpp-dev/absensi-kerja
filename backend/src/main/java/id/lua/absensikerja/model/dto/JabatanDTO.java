package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class JabatanDTO {
    private Long id;
    private String namaJabatan;
    private Long indukId;
    private String indukNama;
    private List<TargetKehadiranItemDTO> targetKehadiranList;
    private List<JabatanRiwayatDTO> riwayatList;

    @Data
    @Builder
    public static class TargetKehadiranItemDTO {
        private Long id;
        private String namaLokasi;
        private Integer targetPersen;
    }
}
