package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusJadwalShift;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JadwalShiftDTO {
    private Long id;
    private Long karyawanId;
    private String karyawanNama;
    private Long divisiId;
    private String divisiNama;
    private LocalDate tanggal;
    private Long polaKerjaId;
    private String polaKerjaNama;
    private String jamMasuk;
    private String jamKeluar;
    private StatusJadwalShift status;
    private String keterangan;
    private String warna;
}
