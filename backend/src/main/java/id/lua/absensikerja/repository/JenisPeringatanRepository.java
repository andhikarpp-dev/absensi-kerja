package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.JenisPeringatan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JenisPeringatanRepository extends JpaRepository<JenisPeringatan, Long> {
    List<JenisPeringatan> findAllByOrderByKodeAsc();
    List<JenisPeringatan> findByAktifTrueOrderByKodeAsc();
    Optional<JenisPeringatan> findByKodeIgnoreCase(String kode);
    boolean existsByKodeIgnoreCase(String kode);
}
