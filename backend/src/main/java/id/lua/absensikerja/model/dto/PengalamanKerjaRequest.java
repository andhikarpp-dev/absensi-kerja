package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PengalamanKerjaRequest {

    @NotBlank(message = "Nama perusahaan wajib diisi")
    private String namaPerusahaan;

    @NotBlank(message = "Jabatan wajib diisi")
    private String jabatan;

    private String bidangIndustri;
    private LocalDate tanggalMulai;
    private LocalDate tanggalSelesai;
    private Boolean masihBekerja;
    private String deskripsi;
}
