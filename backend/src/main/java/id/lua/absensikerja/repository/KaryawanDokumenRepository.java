package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanDokumen;
import id.lua.absensikerja.model.enums.StatusKuotaDokumen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanDokumenRepository extends JpaRepository<KaryawanDokumen, Long> {

    List<KaryawanDokumen> findByKaryawanIdOrderByCreatedAtDesc(Long karyawanId);

    long countByKaryawanIdAndStatusKuota(Long karyawanId, StatusKuotaDokumen statusKuota);
}
