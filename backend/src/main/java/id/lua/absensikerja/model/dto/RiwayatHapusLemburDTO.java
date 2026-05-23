package id.lua.absensikerja.model.dto;

import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RiwayatHapusLemburDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaKaryawan;
    private String        namaDivisi;
    private String        fotoProfil;
    private LocalDate     tanggalAbsensi;
    private String        namaHari;
    private String        jamMulaiLembur;
    private String        jamSelesaiLembur;
    private String        totalLembur;      // "2j 30m"
    private String        dihapusOleh;      // nama user admin
    private String        catatan;
    private LocalDateTime dihapusAt;
}
