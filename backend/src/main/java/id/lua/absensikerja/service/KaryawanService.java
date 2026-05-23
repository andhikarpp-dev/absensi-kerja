package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KaryawanDTO;
import id.lua.absensikerja.model.dto.KaryawanRequest;

import java.util.List;

public interface KaryawanService {

    /**
     * Jika ownerId != null → hanya kembalikan karyawan di divisi milik owner tsb.
     * Jika ownerId == null (ADMIN) → kembalikan semua.
     */
    List<KaryawanDTO> findAll(Long ownerId);

    KaryawanDTO findById(Long id);

    KaryawanDTO create(KaryawanRequest request, Long callerUserId);

    /**
     * @param callerUserId id user yang sedang login — digunakan untuk resolve perusahaan
     *                     jika karyawan belum memiliki perusahaan.
     */
    KaryawanDTO update(Long id, KaryawanRequest request, Long callerUserId);

    void delete(Long id);

    /** List karyawan yang sudah di-soft-delete. */
    List<KaryawanDTO> findAllDeleted(Long ownerId);

    /** Pulihkan karyawan dari trash. */
    KaryawanDTO restore(Long id);

    /** Hapus permanen karyawan (hard delete). */
    void hardDelete(Long id);

    /**
     * Eksekusi aksi massal (HAPUS / UBAH_STATUS / PINDAH_DIVISI / PINDAH_JABATAN)
     * untuk daftar karyawan yang dipilih.
     */
    id.lua.absensikerja.model.dto.KaryawanAksiMassalResult aksiMassal(
            id.lua.absensikerja.model.dto.KaryawanAksiMassalRequest request);

    /** Ubah pola kerja aktif untuk karyawan (assign pola ke divisi karyawan) */
    void updatePolaKerja(Long karyawanId, Long polaKerjaId);
}
