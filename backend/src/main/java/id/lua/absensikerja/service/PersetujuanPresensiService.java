package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PersetujuanPresensiDTO;
import id.lua.absensikerja.model.dto.PersetujuanPresensiRequest;

import java.time.LocalDate;
import java.util.List;

public interface PersetujuanPresensiService {

    /** Buat permintaan persetujuan presensi baru */
    PersetujuanPresensiDTO buat(PersetujuanPresensiRequest req, Long callerUserId);

    /** Daftar persetujuan berdasarkan status diizinkan / belum */
    List<PersetujuanPresensiDTO> findAll(boolean diizinkan, LocalDate tanggal,
                                          String jenisPresensi, String cari,
                                          Long callerUserId);

    /** Izinkan satu */
    PersetujuanPresensiDTO izinkan(Long id, Long callerUserId);

    /** Izinkan banyak sekaligus */
    int izinkanBanyak(List<Long> ids, Long callerUserId);

    /** Izinkan semua yang belum diizinkan (sesuai filter) */
    int izinkanSemua(LocalDate tanggal, String jenisPresensi, String cari, Long callerUserId);

    /** Hapus */
    void hapus(Long id, Long callerUserId);

    /** Cek apakah karyawan punya izin aktif untuk presensi pada tanggal + jenis tertentu */
    boolean cekIzin(Long karyawanId, LocalDate tanggal, String jenisPresensi);
}
