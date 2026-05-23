package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PenghargaanDTO {
    private Long id;
    private Long karyawanId;
    private String namaPenghargaan;
    private String penerbit;
    private Integer tahun;
    private String deskripsi;
    private LocalDateTime createdAt;
}
