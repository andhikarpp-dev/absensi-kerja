package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.IzinHari;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.enums.StatusIzin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IzinHariRepository extends JpaRepository<IzinHari, Long> {

    List<IzinHari> findByKaryawanOrderByCreatedAtDesc(Karyawan karyawan);

    List<IzinHari> findByKaryawanAndStatusOrderByCreatedAtDesc(Karyawan karyawan, StatusIzin status);

    /** Cari berdasarkan tanggal dalam koleksi tanggalList */
    @Query("SELECT DISTINCT i FROM IzinHari i JOIN i.tanggalList t " +
           "WHERE i.karyawan = :karyawan AND t BETWEEN :from AND :to " +
           "ORDER BY i.createdAt DESC")
    List<IzinHari> findByKaryawanAndTanggalBetween(
            @Param("karyawan") Karyawan karyawan,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT DISTINCT i FROM IzinHari i JOIN i.tanggalList t " +
           "WHERE i.karyawan = :karyawan AND i.status = :status AND t BETWEEN :from AND :to " +
           "ORDER BY i.createdAt DESC")
    List<IzinHari> findByKaryawanAndStatusAndTanggalBetween(
            @Param("karyawan") Karyawan karyawan,
            @Param("status") StatusIzin status,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    // ── Admin / Pemilik – query lintas karyawan ───────────────
    @Query("SELECT i FROM IzinHari i JOIN i.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId " +
           "ORDER BY i.createdAt DESC")
    List<IzinHari> findByPerusahaanId(@Param("perusahaanId") Long perusahaanId);

    @Query("SELECT i FROM IzinHari i JOIN i.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId AND i.status = :status " +
           "ORDER BY i.createdAt DESC")
    List<IzinHari> findByPerusahaanIdAndStatus(
            @Param("perusahaanId") Long perusahaanId,
            @Param("status") StatusIzin status);

    @Query("SELECT DISTINCT i FROM IzinHari i JOIN i.karyawan k JOIN i.tanggalList t " +
           "WHERE k.perusahaan.id = :perusahaanId AND t BETWEEN :from AND :to " +
           "ORDER BY i.createdAt DESC")
    List<IzinHari> findByPerusahaanIdAndTanggalBetween(
            @Param("perusahaanId") Long perusahaanId,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);

    @Query("SELECT DISTINCT i FROM IzinHari i JOIN i.karyawan k JOIN i.tanggalList t " +
           "WHERE k.perusahaan.id = :perusahaanId AND i.status = :status AND t BETWEEN :from AND :to " +
           "ORDER BY i.createdAt DESC")
    List<IzinHari> findByPerusahaanIdAndStatusAndTanggalBetween(
            @Param("perusahaanId") Long perusahaanId,
            @Param("status") StatusIzin status,
            @Param("from") LocalDate from,
            @Param("to") LocalDate to);
}
