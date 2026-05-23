package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PolaKerja;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PolaKerjaRepository extends JpaRepository<PolaKerja, Long> {

    /** Semua pola kerja yang terhubung ke divisi tertentu */
    @Query("SELECT pk FROM PolaKerja pk JOIN pk.divisiSet d WHERE d.id = :divisiId")
    List<PolaKerja> findByDivisiId(@Param("divisiId") Long divisiId);

    /** Semua pola kerja milik perusahaan tertentu */
    @Query("SELECT pk FROM PolaKerja pk WHERE pk.perusahaan.id = :perusahaanId")
    List<PolaKerja> findByPerusahaanId(@Param("perusahaanId") Long perusahaanId);

    /** Pola kerja yang dipakai divisi tertentu dan milik perusahaan tertentu */
    @Query("SELECT pk FROM PolaKerja pk JOIN pk.divisiSet d WHERE d.id = :divisiId AND pk.perusahaan.id = :perusahaanId")
    List<PolaKerja> findByDivisiIdAndPerusahaanId(@Param("divisiId") Long divisiId, @Param("perusahaanId") Long perusahaanId);
}
