package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.CutiRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CutiRiwayatRepository extends JpaRepository<CutiRiwayat, Long> {
    List<CutiRiwayat> findByCutiIdOrderByChangedAtDesc(Long cutiId);
    void deleteByCutiId(Long cutiId);
}
