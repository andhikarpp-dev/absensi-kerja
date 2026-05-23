package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KlaimRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KlaimRiwayatRepository extends JpaRepository<KlaimRiwayat, Long> {
    List<KlaimRiwayat> findByKlaimIdOrderByChangedAtAsc(Long klaimId);
}
