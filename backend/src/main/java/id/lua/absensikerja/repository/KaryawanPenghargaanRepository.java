package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanPenghargaan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanPenghargaanRepository extends JpaRepository<KaryawanPenghargaan, Long> {
    List<KaryawanPenghargaan> findByKaryawanIdOrderByTahunDesc(Long karyawanId);
}
