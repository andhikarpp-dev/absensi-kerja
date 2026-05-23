package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Klien;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KlienRepository extends JpaRepository<Klien, Long> {
    List<Klien> findByPerusahaanIdAndIsDeletedFalseOrderByNamaKlienAsc(Long perusahaanId);
}
