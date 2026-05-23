package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PortofolioDTO {
    private Long id;
    private Long karyawanId;
    private String judul;
    private String urlLink;
    private String deskripsi;
    private LocalDateTime createdAt;
}
