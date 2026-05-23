package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.RiwayatHapusLembur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RiwayatHapusLemburRepository extends JpaRepository<RiwayatHapusLembur, Long> {

    @Query(value = """
        SELECT r.* FROM riwayat_hapus_lembur r
        JOIN karyawan k ON k.id = r.karyawan_id
        WHERE (CAST(:divisiId AS bigint) IS NULL OR k.divisi_id = CAST(:divisiId AS bigint))
        AND   (CAST(:cari AS text) IS NULL OR LOWER(k.nama_lengkap) LIKE CAST(:cari AS text))
        ORDER BY r.dihapus_at DESC
        """, nativeQuery = true)
    List<RiwayatHapusLembur> findRiwayat(
            @Param("divisiId") String divisiId,
            @Param("cari")     String cari);
}
