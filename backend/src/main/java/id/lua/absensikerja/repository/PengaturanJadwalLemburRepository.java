package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PengaturanJadwalLembur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PengaturanJadwalLemburRepository extends JpaRepository<PengaturanJadwalLembur, Long> {
    Optional<PengaturanJadwalLembur> findByPerusahaanId(Long perusahaanId);
}
