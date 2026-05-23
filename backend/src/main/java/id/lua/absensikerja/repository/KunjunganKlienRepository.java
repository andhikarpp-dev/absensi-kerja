package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.KunjunganKlien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface KunjunganKlienRepository extends JpaRepository<KunjunganKlien, Long>,
        JpaSpecificationExecutor<KunjunganKlien> {
}
