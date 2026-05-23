package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.IzinJamRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IzinJamRiwayatRepository extends JpaRepository<IzinJamRiwayat, Long> {
    List<IzinJamRiwayat> findByIzinJamIdOrderByChangedAtDesc(Long izinJamId);
}
