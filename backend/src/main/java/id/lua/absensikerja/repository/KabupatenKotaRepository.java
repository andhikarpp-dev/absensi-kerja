package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KabupatenKota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KabupatenKotaRepository extends JpaRepository<KabupatenKota, Long> {
    List<KabupatenKota> findByProvinsiIdOrderByNamaKabupatenKotaAsc(Long provinsiId);
}
