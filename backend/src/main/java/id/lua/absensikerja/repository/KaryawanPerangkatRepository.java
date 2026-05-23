package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanPerangkat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface KaryawanPerangkatRepository extends JpaRepository<KaryawanPerangkat, Long> {

    List<KaryawanPerangkat> findByKaryawanIdOrderByTerakhirAktifDesc(Long karyawanId);

    Optional<KaryawanPerangkat> findByKaryawanIdAndDeviceId(Long karyawanId, String deviceId);

    boolean existsByKaryawanIdAndDeviceId(Long karyawanId, String deviceId);
}
