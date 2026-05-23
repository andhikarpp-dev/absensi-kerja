package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class SertifikatDTO {
    private Long id;
    private Long karyawanId;
    private String namaSertifikat;
    private String penerbit;
    private String nomorSertifikat;
    private LocalDate tanggalTerbit;
    private LocalDate tanggalKadaluarsa;
    private String fileUrl;
    private String keterangan;
    private LocalDateTime createdAt;
}
