package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PayrollGajiDasar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PayrollGajiDasarRepository extends JpaRepository<PayrollGajiDasar, Long> {
    Optional<PayrollGajiDasar> findByKaryawanId(Long karyawanId);
}
