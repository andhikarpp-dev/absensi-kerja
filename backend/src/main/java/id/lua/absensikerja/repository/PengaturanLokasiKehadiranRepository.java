package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PengaturanLokasiKehadiran;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PengaturanLokasiKehadiranRepository
        extends JpaRepository<PengaturanLokasiKehadiran, Long> {

    Optional<PengaturanLokasiKehadiran> findByPerusahaanId(Long perusahaanId);

    Optional<PengaturanLokasiKehadiran> findFirstByPerusahaanIsNull();
}
