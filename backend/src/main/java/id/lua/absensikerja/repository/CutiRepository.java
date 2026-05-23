package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Cuti;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.StatusIzin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CutiRepository extends JpaRepository<Cuti, Long> {

    List<Cuti> findByKaryawanOrderByCreatedAtDesc(Karyawan karyawan);

    @Query("SELECT c FROM Cuti c WHERE c.karyawan = :karyawan " +
           "AND (:status IS NULL OR c.status = :status) " +
           "AND (:jenis IS NULL OR c.jenisCuti = :jenis) " +
           "AND (:from IS NULL OR c.tanggalSelesai >= :from) " +
           "AND (:to IS NULL OR c.tanggalMulai <= :to) " +
           "ORDER BY c.createdAt DESC")
    List<Cuti> search(@Param("karyawan") Karyawan karyawan,
                      @Param("status") StatusIzin status,
                      @Param("jenis") JenisCuti jenis,
                      @Param("from") LocalDate from,
                      @Param("to") LocalDate to);

    @Query("SELECT COALESCE(SUM(c.jumlahHari),0) FROM Cuti c " +
           "WHERE c.karyawan = :karyawan AND c.status = :status " +
           "AND c.mengurangiSisaCuti = true")
    Double sumJumlahHari(@Param("karyawan") Karyawan karyawan,
                         @Param("status") StatusIzin status);

    /** Admin: semua cuti untuk satu perusahaan */
    @Query("SELECT c FROM Cuti c JOIN c.karyawan k " +
           "WHERE k.perusahaan.id = :perusahaanId " +
           "AND (:status IS NULL OR c.status = :status) " +
           "AND (:jenis IS NULL OR c.jenisCuti = :jenis) " +
           "AND (:from IS NULL OR c.tanggalSelesai >= :from) " +
           "AND (:to IS NULL OR c.tanggalMulai <= :to) " +
           "ORDER BY c.createdAt DESC")
    List<Cuti> searchAdmin(@Param("perusahaanId") Long perusahaanId,
                           @Param("status") StatusIzin status,
                           @Param("jenis") JenisCuti jenis,
                           @Param("from") LocalDate from,
                           @Param("to") LocalDate to);
}
