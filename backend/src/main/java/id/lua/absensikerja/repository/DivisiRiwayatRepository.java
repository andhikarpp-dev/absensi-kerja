package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.DivisiRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DivisiRiwayatRepository extends JpaRepository<DivisiRiwayat, Long> {
    List<DivisiRiwayat> findByDivisiIdOrderByChangedAtDesc(Long divisiId);
}
