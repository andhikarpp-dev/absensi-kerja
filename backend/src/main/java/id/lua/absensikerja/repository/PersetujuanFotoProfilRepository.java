package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.PersetujuanFotoProfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersetujuanFotoProfilRepository extends JpaRepository<PersetujuanFotoProfil, Long> {

    @Query("SELECT p FROM PersetujuanFotoProfil p WHERE p.status = :status ORDER BY p.createdAt DESC")
    List<PersetujuanFotoProfil> findByStatus(@Param("status") String status);

    @Query("SELECT p FROM PersetujuanFotoProfil p WHERE p.status IN :statuses ORDER BY p.createdAt DESC")
    List<PersetujuanFotoProfil> findByStatusIn(@Param("statuses") List<String> statuses);
}
