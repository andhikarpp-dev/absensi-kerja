package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class PengalamanOrganisasiDTO {
    private Long id;
    private Long karyawanId;
    private String namaOrganisasi;
    private String jabatan;
    private LocalDate tanggalMulai;
    private LocalDate tanggalSelesai;
    private Boolean masihAktif;
    private String deskripsi;
    private LocalDateTime createdAt;
}
