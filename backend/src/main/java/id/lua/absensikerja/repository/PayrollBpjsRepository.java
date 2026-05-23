package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PayrollBpjs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PayrollBpjsRepository extends JpaRepository<PayrollBpjs, Long> {
    Optional<PayrollBpjs> findByKaryawanId(Long karyawanId);
}
