package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanKontakDarurat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanKontakDaruratRepository extends JpaRepository<KaryawanKontakDarurat, Long> {
    List<KaryawanKontakDarurat> findByKaryawanIdOrderByCreatedAtAsc(Long karyawanId);
}
