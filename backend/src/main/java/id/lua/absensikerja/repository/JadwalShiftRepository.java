package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.JadwalShift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface JadwalShiftRepository extends JpaRepository<JadwalShift, Long> {

    @Query("SELECT j FROM JadwalShift j " +
           "WHERE j.tanggal BETWEEN :start AND :end " +
           "AND (:perusahaanId IS NULL OR j.perusahaan.id = :perusahaanId)")
    List<JadwalShift> findInRange(@Param("start") LocalDate start,
                                  @Param("end") LocalDate end,
                                  @Param("perusahaanId") Long perusahaanId);

    @Query("SELECT j FROM JadwalShift j " +
           "WHERE j.tanggal BETWEEN :start AND :end " +
           "AND j.karyawan.id IN :karyawanIds")
    List<JadwalShift> findInRangeByKaryawan(@Param("start") LocalDate start,
                                            @Param("end") LocalDate end,
                                            @Param("karyawanIds") List<Long> karyawanIds);

    Optional<JadwalShift> findByKaryawanIdAndTanggal(Long karyawanId, LocalDate tanggal);

    List<JadwalShift> findByKaryawanIdAndTanggalBetween(Long karyawanId, LocalDate start, LocalDate end);
}
