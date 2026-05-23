package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanPengalamanOrganisasi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanPengalamanOrganisasiRepository extends JpaRepository<KaryawanPengalamanOrganisasi, Long> {
    List<KaryawanPengalamanOrganisasi> findByKaryawanIdOrderByTanggalMulaiDesc(Long karyawanId);
}
