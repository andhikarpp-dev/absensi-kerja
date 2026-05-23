package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PengaturanCutiSetengahHari;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PengaturanCutiSetengahHariRepository extends JpaRepository<PengaturanCutiSetengahHari, Long> {
    Optional<PengaturanCutiSetengahHari> findByPerusahaanId(Long perusahaanId);
    Optional<PengaturanCutiSetengahHari> findFirstByPerusahaanIsNull();
}
