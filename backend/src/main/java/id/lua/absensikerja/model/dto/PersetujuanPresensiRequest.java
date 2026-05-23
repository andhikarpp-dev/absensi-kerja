package id.lua.absensikerja.model.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class PersetujuanPresensiRequest {
    private Long       karyawanId;
    private LocalDate  tanggal;
    private String     jenisPresensi;
    private String     namaPolaKerja;
    private String     jamJadwalMasuk;
    private String     jamJadwalKeluar;
    private String     alasan;
}
