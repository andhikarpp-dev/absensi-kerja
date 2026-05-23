package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Divisi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DivisiRepository extends JpaRepository<Divisi, Long> {

    boolean existsByNamaDivisiAndIsDeletedFalse(String namaDivisi);

    /** Aman terhadap duplikat: ambil baris pertama dengan nama yang sama. */
    Optional<Divisi> findFirstByNamaDivisiOrderByIdAsc(String namaDivisi);

    default Optional<Divisi> findByNamaDivisi(String namaDivisi) {
        return findFirstByNamaDivisiOrderByIdAsc(namaDivisi);
    }

    // Ambil semua divisi milik perusahaan tertentu
    List<Divisi> findByPerusahaanId(Long perusahaanId);

    boolean existsByNamaDivisiAndPerusahaanIdAndIsDeletedFalse(String namaDivisi, Long perusahaanId);

    // Ambil semua divisi milik owner tertentu (lama — kompatibilitas)
    List<Divisi> findByOwnerId(Long ownerId);


    // Ambil semua termasuk yang sudah dihapus (bypass @SQLRestriction)
    @Query("SELECT d FROM Divisi d WHERE d.isDeleted = true")
    List<Divisi> findAllDeleted();
}
