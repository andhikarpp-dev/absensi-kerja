package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Absensi;
import id.lua.absensikerja.model.entity.Karyawan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface AbsensiRepository extends JpaRepository<Absensi, Long> {
    Optional<Absensi> findByKaryawanAndTanggal(Karyawan karyawan, LocalDate tanggal);
    boolean existsByKaryawanAndTanggal(Karyawan karyawan, LocalDate tanggal);
    List<Absensi> findByKaryawanOrderByTanggalDesc(Karyawan karyawan);
    List<Absensi> findByKaryawanAndTanggalBetweenOrderByTanggalDesc(Karyawan karyawan, LocalDate from, LocalDate to);
    List<Absensi> findByTanggalBetweenOrderByTanggalDesc(LocalDate from, LocalDate to);
    List<Absensi> findByTanggal(LocalDate tanggal);

    // ── Tidak Hadir Mingguan ──────────────────────────────────
    /**
     * Ambil ID karyawan yang TERCATAT pernah absen (apapun status-nya)
     * dalam rentang tanggal tertentu. Digunakan untuk mencari siapa saja
     * yang TIDAK absen selama 1 minggu terakhir.
     */
    @Query("SELECT DISTINCT a.karyawan.id FROM Absensi a WHERE a.tanggal BETWEEN :from AND :to")
    List<Long> findKaryawanIdsHadirBetween(@Param("from") LocalDate from,
                                           @Param("to")   LocalDate to);

    // ── Review Kehadiran ──────────────────────────────────────
    /** Presensi perlu dicek: perlu_dicek=true dan belum sudah_dicek */
    @Query("SELECT a FROM Absensi a WHERE a.perluDicek = true AND (a.sudahDicek = false OR a.sudahDicek IS NULL) ORDER BY a.tanggal DESC")
    List<Absensi> findPerluDicek();

    @Query("SELECT a FROM Absensi a WHERE a.perluDicek = true AND a.sudahDicek = true ORDER BY a.tanggal DESC")
    List<Absensi> findSudahDicek();

    @Query("SELECT a FROM Absensi a WHERE a.perluDicek = true AND (a.sudahDicek = false OR a.sudahDicek IS NULL) AND a.karyawan.divisi.id = :divisiId ORDER BY a.tanggal DESC")
    List<Absensi> findPerluDicekByDivisi(@Param("divisiId") Long divisiId);

    @Query("SELECT a FROM Absensi a WHERE a.perluDicek = true AND a.sudahDicek = true AND a.karyawan.divisi.id = :divisiId ORDER BY a.tanggal DESC")
    List<Absensi> findSudahDicekByDivisi(@Param("divisiId") Long divisiId);

    // ── Review Lembur ─────────────────────────────────────────
    @Query(value = """
        SELECT a.* FROM absensi a
        JOIN karyawan k ON k.id = a.karyawan_id
        WHERE a.jam_mulai_lembur IS NOT NULL
        AND (CAST(:dari AS date) IS NULL OR a.tanggal >= CAST(:dari AS date))
        AND (CAST(:sampai AS date) IS NULL OR a.tanggal <= CAST(:sampai AS date))
        AND (CAST(:divisiId AS bigint) IS NULL OR k.divisi_id = CAST(:divisiId AS bigint))
        AND (CAST(:cari AS text) IS NULL OR LOWER(k.nama_lengkap) LIKE CAST(:cari AS text))
        ORDER BY a.tanggal DESC, k.nama_lengkap ASC
        """, nativeQuery = true)
    List<Absensi> findLembur(
            @Param("dari")      String dari,
            @Param("sampai")    String sampai,
            @Param("divisiId")  String divisiId,
            @Param("cari")      String cari);
}
