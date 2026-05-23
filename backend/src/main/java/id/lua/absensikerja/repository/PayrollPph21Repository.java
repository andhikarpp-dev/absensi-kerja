package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PayrollPph21;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PayrollPph21Repository extends JpaRepository<PayrollPph21, Long> {
    Optional<PayrollPph21> findByKaryawanId(Long karyawanId);
}
