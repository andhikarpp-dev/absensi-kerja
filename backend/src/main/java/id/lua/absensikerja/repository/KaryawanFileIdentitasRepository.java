package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanFileIdentitas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanFileIdentitasRepository extends JpaRepository<KaryawanFileIdentitas, Long> {

    List<KaryawanFileIdentitas> findByKaryawanIdOrderByCreatedAtDesc(Long karyawanId);
}
