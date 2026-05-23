package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Provinsi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvinsiRepository extends JpaRepository<Provinsi, Long> {
    List<Provinsi> findAllByOrderByNamaProvinsiAsc();
}
