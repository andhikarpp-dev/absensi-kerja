package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.RevisiKehadiran;
import id.lua.absensikerja.model.enums.StatusRevisi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RevisiKehadiranRepository extends JpaRepository<RevisiKehadiran, Long> {

    List<RevisiKehadiran> findByStatusOrderByCreatedAtDesc(StatusRevisi status);

    @Query("SELECT r FROM RevisiKehadiran r WHERE r.status = :status " +
           "AND (:divisiId IS NULL OR r.karyawan.divisi.id = :divisiId) " +
           "AND (:dari IS NULL OR r.tanggal >= :dari) " +
           "AND (:sampai IS NULL OR r.tanggal <= :sampai) " +
           "ORDER BY r.createdAt DESC")
    List<RevisiKehadiran> findByStatusAndFilter(
            @Param("status")   StatusRevisi status,
            @Param("divisiId") Long divisiId,
            @Param("dari")     LocalDate dari,
            @Param("sampai")   LocalDate sampai);

    List<RevisiKehadiran> findByKaryawanOrderByCreatedAtDesc(Karyawan karyawan);
}
