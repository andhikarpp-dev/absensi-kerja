package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data @Builder
public class PersetujuanFotoProfilDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaKaryawan;
    private String        namaDivisi;
    private String        namaJabatan;

    private String        fotoBaru;      // URL lengkap foto baru
    private String        fotoLama;      // URL lengkap foto lama
    private String        status;        // MENUNGGU / DISETUJUI / DITOLAK
    private String        catatanPenolakan;
    private LocalDateTime diprosesAt;
    private LocalDateTime createdAt;
}
