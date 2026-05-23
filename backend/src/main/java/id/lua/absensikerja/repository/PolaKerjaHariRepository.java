package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PolaKerjaHari;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolaKerjaHariRepository extends JpaRepository<PolaKerjaHari, Long> {
}
