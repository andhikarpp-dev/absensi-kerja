package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PengalamanOrganisasiRequest {

    @NotBlank(message = "Nama organisasi wajib diisi")
    private String namaOrganisasi;

    private String jabatan;
    private LocalDate tanggalMulai;
    private LocalDate tanggalSelesai;
    private Boolean masihAktif;
    private String deskripsi;
}
