package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.IzinHariRiwayat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IzinHariRiwayatRepository extends JpaRepository<IzinHariRiwayat, Long> {
    List<IzinHariRiwayat> findByIzinHariIdOrderByChangedAtDesc(Long izinHariId);
    void deleteByIzinHariId(Long izinHariId);
}
