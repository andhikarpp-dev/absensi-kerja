package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class BackgroundPendidikanDTO {
    private Long id;
    private Long karyawanId;
    private String tingkatPendidikan;
    private String namaInstitusi;
    private String jurusan;
    private Integer tahunMasuk;
    private Integer tahunLulus;
    private String nilai;
    private String keterangan;
    private LocalDateTime createdAt;
}
