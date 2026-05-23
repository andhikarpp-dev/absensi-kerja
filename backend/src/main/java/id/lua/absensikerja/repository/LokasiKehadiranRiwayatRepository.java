package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.LokasiKehadiranRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LokasiKehadiranRiwayatRepository
        extends JpaRepository<LokasiKehadiranRiwayat, Long> {

    List<LokasiKehadiranRiwayat> findByLokasiIdOrderByChangedAtDesc(Long lokasiId);
}
