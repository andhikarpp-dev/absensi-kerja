package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Jabatan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JabatanRepository extends JpaRepository<Jabatan, Long> {

    // ── Global (ADMIN lihat semua) ─────────────────────────────
    boolean existsByNamaJabatanAndIsDeletedFalse(String namaJabatan);

    // ── Per Perusahaan ─────────────────────────────────────────
    List<Jabatan> findByPerusahaanId(Long perusahaanId);

    boolean existsByNamaJabatanAndPerusahaanIdAndIsDeletedFalse(String namaJabatan, Long perusahaanId);

    // ── Native queries (bypass @SQLRestriction) ────────────────

    /** Cari jabatan (termasuk soft-deleted) berdasarkan nama — global. */
    @Query(value = "SELECT * FROM jabatan WHERE nama_jabatan = :nama LIMIT 1", nativeQuery = true)
    Optional<Jabatan> findByNamaJabatanIgnoreFilter(@Param("nama") String nama);

    /** Cari jabatan (termasuk soft-deleted) berdasarkan nama dalam satu perusahaan. */
    @Query(value = "SELECT * FROM jabatan WHERE nama_jabatan = :nama AND (perusahaan_id = :pid OR perusahaan_id IS NULL) LIMIT 1", nativeQuery = true)
    Optional<Jabatan> findByNamaJabatanAndPerusahaanIgnoreFilter(@Param("nama") String nama, @Param("pid") Long perusahaanId);

    /** Cari jabatan by ID tanpa filter soft-delete. */
    @Query(value = "SELECT * FROM jabatan WHERE id = :id", nativeQuery = true)
    Optional<Jabatan> findByIdIgnoreFilter(@Param("id") Long id);
}
