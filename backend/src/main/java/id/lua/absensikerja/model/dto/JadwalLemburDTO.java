package id.lua.absensikerja.model.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JadwalLemburDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaKaryawan;
    private String        namaDivisi;
    private String        namaJabatan;
    private String        fotoProfil;

    private LocalDateTime waktuMulai;
    private LocalDateTime waktuSelesai;
    private String        durasiLembur;       // "2j 30m"

    private Integer       menitSebelumJadwal;
    private String        catatan;
    private String        status;             // PENGAJUAN|DISETUJUI|DITOLAK
    private String        catatanPenolakan;

    private LocalDateTime dibuatAt;
    private String        dibuatOleh;
}
