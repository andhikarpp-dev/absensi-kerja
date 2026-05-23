package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PersetujuanPresensi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PersetujuanPresensiRepository extends JpaRepository<PersetujuanPresensi, Long> {

    @Query("SELECT p FROM PersetujuanPresensi p WHERE p.diizinkan = :diizinkan " +
           "AND (:tanggal IS NULL OR p.tanggal = :tanggal) " +
           "AND (:jenisPresensi IS NULL OR p.jenisPresensi = :jenisPresensi) " +
           "ORDER BY p.createdAt DESC")
    List<PersetujuanPresensi> findByFilter(
            @Param("diizinkan")    boolean diizinkan,
            @Param("tanggal")      LocalDate tanggal,
            @Param("jenisPresensi") String jenisPresensi);

    /** Cek apakah sudah ada izin aktif untuk karyawan + tanggal + jenis */
    boolean existsByKaryawanIdAndTanggalAndJenisPresensiAndDiizinkan(
            Long karyawanId, LocalDate tanggal, String jenisPresensi, boolean diizinkan);
}
