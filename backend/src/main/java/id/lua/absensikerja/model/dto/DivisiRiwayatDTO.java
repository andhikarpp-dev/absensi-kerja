package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class DivisiRiwayatDTO {
    private Long id;
    private String tipe;
    private String changedBy;
    private LocalDateTime changedAt;
    /** List perubahan field yang di-parse dari JSON aktivitas */
    private List<AktivitasItem> aktivitas;

    @Data
    @Builder
    public static class AktivitasItem {
        private String label;
        private String nilai;
    }
}
