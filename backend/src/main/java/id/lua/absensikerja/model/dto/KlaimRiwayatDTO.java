package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data @Builder
public class KlaimRiwayatDTO {
    private Long          id;
    private String        tipe;
    private String        keterangan;
    private String        changedBy;
    private LocalDateTime changedAt;
}
