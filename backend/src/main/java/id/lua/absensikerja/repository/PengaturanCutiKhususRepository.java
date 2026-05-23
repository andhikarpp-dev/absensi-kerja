package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PengaturanCutiKhusus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PengaturanCutiKhususRepository extends JpaRepository<PengaturanCutiKhusus, Long> {

    List<PengaturanCutiKhusus> findByPerusahaanIdOrderByIdAsc(Long perusahaanId);

    List<PengaturanCutiKhusus> findByPerusahaanIsNullOrderByIdAsc();

    Optional<PengaturanCutiKhusus> findByIdAndPerusahaanId(Long id, Long perusahaanId);
}
