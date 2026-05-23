package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.TukarJadwalShift;
import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TukarJadwalShiftRepository extends JpaRepository<TukarJadwalShift, Long> {

    @Query("""
        SELECT t FROM TukarJadwalShift t
        WHERE (:perusahaanId IS NULL OR t.perusahaan.id = :perusahaanId)
        AND (:status IS NULL OR t.status = :status)
        AND (:divisiId IS NULL OR t.karyawanPemohon.divisi.id = :divisiId
                               OR t.karyawanTarget.divisi.id = :divisiId)
        AND (:dari IS NULL OR t.createdAt >= :dari)
        AND (:sampai IS NULL OR t.createdAt <= :sampai)
        AND (:cari IS NULL OR LOWER(t.karyawanPemohon.namaLengkap) LIKE LOWER(CONCAT('%',:cari,'%'))
                           OR LOWER(t.karyawanTarget.namaLengkap)  LIKE LOWER(CONCAT('%',:cari,'%')))
        ORDER BY t.createdAt DESC
        """)
    List<TukarJadwalShift> findByFilter(
            @Param("perusahaanId") Long perusahaanId,
            @Param("status")      StatusTukarJadwalShift status,
            @Param("divisiId")    Long divisiId,
            @Param("dari")        LocalDateTime dari,
            @Param("sampai")      LocalDateTime sampai,
            @Param("cari")        String cari);
}
