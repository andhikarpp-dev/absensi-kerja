package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Klaim;
import id.lua.absensikerja.model.enums.StatusKlaim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KlaimRepository extends JpaRepository<Klaim, Long> {
    List<Klaim> findByKaryawanIdOrderByCreatedAtDesc(Long karyawanId);
    List<Klaim> findByKaryawanIdAndStatusOrderByCreatedAtDesc(Long karyawanId, StatusKlaim status);
}
