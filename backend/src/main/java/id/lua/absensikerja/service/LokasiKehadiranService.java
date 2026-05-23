package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.LokasiKehadiranDTO;
import id.lua.absensikerja.model.dto.LokasiKehadiranRequest;
import id.lua.absensikerja.model.dto.LokasiKehadiranRiwayatDTO;
import id.lua.absensikerja.model.dto.PengaturanLokasiKehadiranDTO;

import java.util.List;

public interface LokasiKehadiranService {

    List<LokasiKehadiranDTO> findAll(Long callerUserId);

    LokasiKehadiranDTO findById(Long id);

    LokasiKehadiranDTO create(LokasiKehadiranRequest request, Long callerUserId);

    LokasiKehadiranDTO update(Long id, LokasiKehadiranRequest request, Long callerUserId);

    void delete(Long id);

    // ── Pengaturan Lokasi Kehadiran (per perusahaan) ──
    PengaturanLokasiKehadiranDTO getPengaturan(Long callerUserId);

    PengaturanLokasiKehadiranDTO updatePengaturan(PengaturanLokasiKehadiranDTO req, Long callerUserId);

    /** Tambah kuota lokasi tambahan setelah pemesanan paket (2/5/10). */
    PengaturanLokasiKehadiranDTO pesanKuotaLokasi(int kuota, Long callerUserId);

    /** Riwayat perubahan lokasi (DIBUAT / DIUBAH / DIHAPUS). */
    List<LokasiKehadiranRiwayatDTO> findRiwayat(Long lokasiId);
}
