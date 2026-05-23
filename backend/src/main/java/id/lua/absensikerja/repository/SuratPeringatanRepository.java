package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.SuratPeringatan;
import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import id.lua.absensikerja.model.enums.StatusSuratPeringatan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SuratPeringatanRepository extends JpaRepository<SuratPeringatan, Long> {

    @Query("SELECT s FROM SuratPeringatan s WHERE s.karyawan = :karyawan " +
           "AND (:status IS NULL OR s.status = :status) " +
           "AND (:statusPersetujuan IS NULL OR s.statusPersetujuan = :statusPersetujuan) " +
           "AND (:from IS NULL OR s.tanggalSelesai >= :from) " +
           "AND (:to IS NULL OR s.tanggalMulai <= :to) " +
           "ORDER BY s.createdAt DESC")
    List<SuratPeringatan> search(@Param("karyawan") Karyawan karyawan,
                                 @Param("status") StatusSuratPeringatan status,
                                 @Param("statusPersetujuan") StatusPersetujuanSP statusPersetujuan,
                                 @Param("from") LocalDate from,
                                 @Param("to") LocalDate to);

    /** Cek apakah ada SP aktif yang mencegah presensi pada tanggal tertentu. */
    @Query("SELECT COUNT(s) > 0 FROM SuratPeringatan s WHERE s.karyawan = :karyawan " +
           "AND s.cegahPresensi = true " +
           "AND s.status = id.lua.absensikerja.model.enums.StatusSuratPeringatan.AKTIF " +
           "AND :tanggal BETWEEN s.tanggalMulai AND s.tanggalSelesai")
    boolean existsActiveCegahPresensi(@Param("karyawan") Karyawan karyawan,
                                      @Param("tanggal") LocalDate tanggal);
}
