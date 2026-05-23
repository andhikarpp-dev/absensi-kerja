package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanSertifikat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanSertifikatRepository extends JpaRepository<KaryawanSertifikat, Long> {
    List<KaryawanSertifikat> findByKaryawanIdOrderByTanggalTerbitDesc(Long karyawanId);
}
