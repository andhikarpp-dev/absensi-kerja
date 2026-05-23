package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Perusahaan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PerusahaanRepository extends JpaRepository<Perusahaan, Long> {
    /**
     * Cari perusahaan milik owner. Jika owner punya lebih dari satu perusahaan
     * (kasus yang seharusnya tidak terjadi tapi mungkin terjadi karena data legacy),
     * kembalikan yang paling awal dibuat agar tidak melempar
     * IncorrectResultSizeDataAccessException.
     */
    Optional<Perusahaan> findFirstByOwnerIdOrderByIdAsc(Long ownerId);

    /** @deprecated gunakan {@link #findFirstByOwnerIdOrderByIdAsc(Long)}. */
    default Optional<Perusahaan> findByOwnerId(Long ownerId) {
        return findFirstByOwnerIdOrderByIdAsc(ownerId);
    }

    boolean existsByOwnerId(Long ownerId);
    boolean existsByNamaPerusahaan(String namaPerusahaan);
}
