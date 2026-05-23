package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KaryawanBackgroundPendidikan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KaryawanBackgroundPendidikanRepository extends JpaRepository<KaryawanBackgroundPendidikan, Long> {

    List<KaryawanBackgroundPendidikan> findByKaryawanIdOrderByTahunLulusDesc(Long karyawanId);
}
