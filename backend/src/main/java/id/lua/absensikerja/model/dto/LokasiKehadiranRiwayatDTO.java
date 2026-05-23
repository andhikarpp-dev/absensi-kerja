package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class LokasiKehadiranRiwayatDTO {
    private Long          id;
    private String        tipe;        // DIBUAT / DIUBAH / DIHAPUS
    private String        changedBy;
    private LocalDateTime changedAt;
    private List<AktivitasItem> aktivitas;

    @Data
    @Builder
    public static class AktivitasItem {
        private String label;
        private String nilai;
    }
}
