package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.SisaCutiRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SisaCutiRiwayatRepository extends JpaRepository<SisaCutiRiwayat, Long> {

    List<SisaCutiRiwayat> findByKaryawanIdOrderByTanggalDesc(Long karyawanId);

    void deleteByKaryawanId(Long karyawanId);
}
