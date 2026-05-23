package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisIdentitasTambahan;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class FileIdentitasDTO {
    private Long id;
    private Long karyawanId;
    private JenisIdentitasTambahan jenisIdentitas;
    private String nomor;
    private String fileUrl;
    private String namaFile;
    private LocalDateTime createdAt;
}
