package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanPortofolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanPortofolioRepository extends JpaRepository<KaryawanPortofolio, Long> {

    List<KaryawanPortofolio> findByKaryawanIdOrderByCreatedAtDesc(Long karyawanId);
}
