package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder
public class IzinJamRiwayatDTO {
    private Long          id;
    private Long          izinJamId;
    private String        tipe;
    private String        changedBy;
    private LocalDateTime changedAt;
    private List<Item>    aktivitas;

    @Data @Builder
    public static class Item {
        private String label;
        private String lama;
        private String baru;
    }
}
