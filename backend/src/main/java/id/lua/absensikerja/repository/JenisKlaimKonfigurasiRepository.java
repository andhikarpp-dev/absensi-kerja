package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.JenisKlaimKonfigurasi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JenisKlaimKonfigurasiRepository extends JpaRepository<JenisKlaimKonfigurasi, Long> {

    List<JenisKlaimKonfigurasi> findByPerusahaanIdOrderByNamaAsc(Long perusahaanId);

    List<JenisKlaimKonfigurasi> findByPerusahaanIsNullOrderByNamaAsc();
}
