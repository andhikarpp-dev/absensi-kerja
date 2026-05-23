package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanPengalamanKerja;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanPengalamanKerjaRepository extends JpaRepository<KaryawanPengalamanKerja, Long> {

    List<KaryawanPengalamanKerja> findByKaryawanIdOrderByTanggalMulaiDesc(Long karyawanId);
}
