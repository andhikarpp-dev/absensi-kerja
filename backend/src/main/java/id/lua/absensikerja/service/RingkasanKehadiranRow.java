package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.RingkasanKehadiranDTO;
import lombok.Builder;
import lombok.Data;

/**
 * Baris pada halaman Ringkasan Kehadiran (semua karyawan).
 * Menggabungkan info karyawan + RingkasanKehadiranDTO.
 */
@Data
@Builder
public class RingkasanKehadiranRow {
    private Long   karyawanId;
    private String namaKaryawan;
    private String fotoProfil;
    private String namaDivisi;
    private String namaJabatan;
    private String namaPolaKerja;

    private RingkasanKehadiranDTO ringkasan;
}
