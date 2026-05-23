package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Openshift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OpenshiftRepository extends JpaRepository<Openshift, Long>,
        JpaSpecificationExecutor<Openshift> {

    @Query("SELECT DISTINCT o FROM Openshift o LEFT JOIN FETCH o.divisiSet " +
           "WHERE (:perusahaanId IS NULL OR o.perusahaan.id = :perusahaanId) " +
           "ORDER BY o.jamMasuk DESC")
    List<Openshift> findAllByPerusahaan(@Param("perusahaanId") Long perusahaanId);
}
