package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data @NoArgsConstructor @AllArgsConstructor
public class JenisKlaimKonfigurasiRequest {

    @NotBlank(message = "Nama wajib diisi")
    private String nama;

    private String deskripsi;

    private LocalDate tglMulaiBerlaku;

    /** null = unlimited */
    private Integer kadaluwarsa;

    @NotNull(message = "Kuota wajib diisi")
    private BigDecimal kuota;

    private boolean tampilkanKuotaKeKaryawan = false;

    private boolean terapkanKeKaryawanBaru = false;

    private BigDecimal minJumlahPengajuan;

    private BigDecimal maxJumlahPengajuan;

    /** null = tidak ada batasan */
    private Integer minKlaimSelanjutnya;
}
