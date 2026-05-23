package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PayrollRekeningBank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PayrollRekeningBankRepository extends JpaRepository<PayrollRekeningBank, Long> {
    Optional<PayrollRekeningBank> findByKaryawanId(Long karyawanId);
}
