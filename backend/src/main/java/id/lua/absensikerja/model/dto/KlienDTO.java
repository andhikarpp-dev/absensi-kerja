package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data @Builder
public class KlienDTO {
    private Long   id;
    private Long   perusahaanId;
    private String namaKlien;
    private String alamat;
    private String telepon;
    private String email;
    private String keterangan;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
