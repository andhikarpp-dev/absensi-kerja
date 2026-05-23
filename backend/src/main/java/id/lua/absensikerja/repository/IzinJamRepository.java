package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.IzinJam;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.enums.StatusIzin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IzinJamRepository extends JpaRepository<IzinJam, Long> {

    List<IzinJam> findByKaryawanOrderByTanggalMulaiDesc(Karyawan karyawan);

    List<IzinJam> findByKaryawanAndStatusOrderByTanggalMulaiDesc(Karyawan karyawan, StatusIzin status);

    List<IzinJam> findByKaryawanAndTanggalMulaiBetweenOrderByTanggalMulaiDesc(
            Karyawan karyawan, LocalDate from, LocalDate to);

    List<IzinJam> findByKaryawanAndStatusAndTanggalMulaiBetweenOrderByTanggalMulaiDesc(
            Karyawan karyawan, StatusIzin status, LocalDate from, LocalDate to);

    // ── Admin / Pemilik – query lintas karyawan ───────────────
    @Query("SELECT i FROM IzinJam i JOIN i.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId " +
           "ORDER BY i.tanggalMulai DESC, i.jamMulai DESC")
    List<IzinJam> findByPerusahaanId(@Param("perusahaanId") Long perusahaanId);

    @Query("SELECT i FROM IzinJam i JOIN i.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId AND i.status = :status " +
           "ORDER BY i.tanggalMulai DESC, i.jamMulai DESC")
    List<IzinJam> findByPerusahaanIdAndStatus(
            @Param("perusahaanId") Long perusahaanId,
            @Param("status") StatusIzin status);

    @Query("SELECT i FROM IzinJam i JOIN i.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId AND i.tanggalMulai BETWEEN :from AND :to " +
           "ORDER BY i.tanggalMulai DESC, i.jamMulai DESC")
    List<IzinJam> findByPerusahaanIdAndTanggalBetween(
            @Param("perusahaanId") Long perusahaanId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT i FROM IzinJam i JOIN i.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId AND i.status = :status " +
           "AND i.tanggalMulai BETWEEN :from AND :to " +
           "ORDER BY i.tanggalMulai DESC, i.jamMulai DESC")
    List<IzinJam> findByPerusahaanIdAndStatusAndTanggalBetween(
            @Param("perusahaanId") Long perusahaanId,
            @Param("status") StatusIzin status,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);
}
