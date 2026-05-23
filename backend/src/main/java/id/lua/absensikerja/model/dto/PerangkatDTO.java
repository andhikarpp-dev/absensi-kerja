package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data @Builder
public class PerangkatDTO {
    private Long          id;
    private Long          karyawanId;
    private String        deviceId;
    private String        namaPerangkat;
    private String        modelPerangkat;
    private String        manufaktur;
    private String        platform;
    private LocalDateTime terakhirAktif;
    private LocalDateTime createdAt;
}
