package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class PengalamanKerjaDTO {
    private Long id;
    private Long karyawanId;
    private String namaPerusahaan;
    private String jabatan;
    private String bidangIndustri;
    private LocalDate tanggalMulai;
    private LocalDate tanggalSelesai;
    private Boolean masihBekerja;
    private String deskripsi;
    private LocalDateTime createdAt;
}
