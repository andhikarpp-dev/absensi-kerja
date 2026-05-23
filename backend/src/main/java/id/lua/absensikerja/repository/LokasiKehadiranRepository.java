package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.LokasiKehadiran;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LokasiKehadiranRepository extends JpaRepository<LokasiKehadiran, Long> {

    List<LokasiKehadiran> findByPerusahaanIdOrderByNamaLokasiAsc(Long perusahaanId);

    List<LokasiKehadiran> findAllByOrderByNamaLokasiAsc();

    boolean existsByNamaLokasiAndPerusahaanIdAndIsDeletedFalse(String namaLokasi, Long perusahaanId);

    boolean existsByNamaLokasiAndIsDeletedFalse(String namaLokasi);

    /** Cari berdasarkan nama (termasuk soft-deleted) — per perusahaan. */
    @Query(value = "SELECT * FROM lokasi_kehadiran WHERE nama_lokasi = :nama "
                 + "AND (perusahaan_id = :pid OR perusahaan_id IS NULL) LIMIT 1",
           nativeQuery = true)
    Optional<LokasiKehadiran> findByNamaAndPerusahaanIgnoreFilter(
            @Param("nama") String nama, @Param("pid") Long perusahaanId);

    /** Cari berdasarkan nama (termasuk soft-deleted) — global. */
    @Query(value = "SELECT * FROM lokasi_kehadiran WHERE nama_lokasi = :nama LIMIT 1",
           nativeQuery = true)
    Optional<LokasiKehadiran> findByNamaIgnoreFilter(@Param("nama") String nama);
}
