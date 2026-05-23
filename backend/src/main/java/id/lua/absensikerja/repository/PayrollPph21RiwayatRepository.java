package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PayrollPph21Riwayat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PayrollPph21RiwayatRepository extends JpaRepository<PayrollPph21Riwayat, Long> {

    List<PayrollPph21Riwayat> findByKaryawanIdOrderByPeriodeDesc(Long karyawanId);

    Optional<PayrollPph21Riwayat> findByKaryawanIdAndPeriode(Long karyawanId, LocalDate periode);
}
