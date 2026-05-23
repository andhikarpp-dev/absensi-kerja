package id.lua.absensikerja.model.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JenisKlaimKonfigurasiDTO {
    private Long        id;
    private Long        perusahaanId;
    private String      nama;
    private String      deskripsi;
    private LocalDate   tglMulaiBerlaku;
    private Integer     kadaluwarsa;        // null = unlimited
    private BigDecimal  kuota;
    private boolean     tampilkanKuotaKeKaryawan;
    private boolean     terapkanKeKaryawanBaru;
    private BigDecimal  minJumlahPengajuan;
    private BigDecimal  maxJumlahPengajuan;
    private Integer     minKlaimSelanjutnya; // null = tidak ada
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
