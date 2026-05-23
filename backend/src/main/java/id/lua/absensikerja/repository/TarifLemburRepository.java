package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.TarifLembur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarifLemburRepository extends JpaRepository<TarifLembur, Long> {
    List<TarifLembur> findByPerusahaanIdOrderByJamLemburAsc(Long perusahaanId);
    void deleteByPerusahaanId(Long perusahaanId);
}
