package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Karyawan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface KaryawanRepository extends JpaRepository<Karyawan, Long> {
    Optional<Karyawan> findByNip(String nip);
    Optional<Karyawan> findByUserId(Long userId);
    boolean existsByNip(String nip);
    boolean existsByNipAndIdNot(String nip, Long id);
    Optional<Karyawan> findByNamaLengkapIgnoreCase(String namaLengkap);

    // Ambil semua karyawan berdasarkan perusahaan
    List<Karyawan> findByPerusahaanId(Long perusahaanId);

    // (lama) filter by owner divisi — dipertahankan untuk kompatibilitas
    List<Karyawan> findByDivisiOwnerId(Long ownerId);

    /** Karyawan yang punya pembaruan otomatis aktif & sudah jatuh tempo. */
    List<Karyawan> findByPembaruanCutiAktifTrueAndTglPembaruanBerikutnyaLessThanEqual(java.time.LocalDate today);

    /** Karyawan yang sudah dihapus (soft delete). */
    List<Karyawan> findByIsDeletedTrue();

    /** Karyawan dihapus, filter per perusahaan. */
    List<Karyawan> findByIsDeletedTrueAndPerusahaanId(Long perusahaanId);
}
