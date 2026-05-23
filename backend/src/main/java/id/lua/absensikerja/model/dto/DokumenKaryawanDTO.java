package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusKuotaDokumen;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class DokumenKaryawanDTO {
    private Long id;
    private Long karyawanId;
    private String namaDokumen;
    private String namaBerkas;
    private String pathBerkas;
    private Long ukuranBerkas;
    private LocalDateTime tanggalUpload;
    private LocalDate tanggalBerakhir;
    private Integer hariReminder;
    private StatusKuotaDokumen statusKuota;
    private String fileUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
