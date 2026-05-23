package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.JadwalLembur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JadwalLemburRepository extends JpaRepository<JadwalLembur, Long> {

    @Query(value = """
        SELECT j.* FROM jadwal_lembur j
        JOIN karyawan k ON k.id = j.karyawan_id
        WHERE (CAST(:status AS text) IS NULL OR j.status = CAST(:status AS text))
        AND   (CAST(:dari AS timestamp) IS NULL OR j.waktu_mulai >= CAST(:dari AS timestamp))
        AND   (CAST(:sampai AS timestamp) IS NULL OR j.waktu_mulai <= CAST(:sampai AS timestamp))
        AND   (CAST(:divisiId AS bigint) IS NULL OR k.divisi_id = CAST(:divisiId AS bigint))
        AND   (CAST(:cari AS text) IS NULL OR LOWER(k.nama_lengkap) LIKE CAST(:cari AS text))
        ORDER BY j.waktu_mulai DESC
        """, nativeQuery = true)
    List<JadwalLembur> findJadwal(
            @Param("status")   String status,
            @Param("dari")     String dari,
            @Param("sampai")   String sampai,
            @Param("divisiId") String divisiId,
            @Param("cari")     String cari);
}
