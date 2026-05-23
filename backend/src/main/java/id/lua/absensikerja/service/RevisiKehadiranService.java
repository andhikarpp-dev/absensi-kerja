package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.RevisiKehadiranDTO;
import id.lua.absensikerja.model.dto.RevisiKehadiranRequest;
import id.lua.absensikerja.model.enums.StatusRevisi;

import java.time.LocalDate;
import java.util.List;

public interface RevisiKehadiranService {

    /** Buat permintaan revisi baru (oleh karyawan atau admin) */
    RevisiKehadiranDTO buat(RevisiKehadiranRequest req, Long callerUserId);

    /** Daftar revisi berdasarkan status + filter */
    List<RevisiKehadiranDTO> findByStatus(StatusRevisi status, Long divisiId,
                                          LocalDate dari, LocalDate sampai,
                                          String cari, Long callerUserId);

    /** Setujui → terapkan jam baru ke absensi */
    RevisiKehadiranDTO setujui(Long id, Long callerUserId);

    /** Tolak */
    RevisiKehadiranDTO tolak(Long id, String catatanPenolakan, Long callerUserId);

    /** Hapus */
    void hapus(Long id, Long callerUserId);
}
