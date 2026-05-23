package id.lua.absensikerja.repository;

import id.lua.absensikerja.model.entity.Role;
import id.lua.absensikerja.model.enums.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    /** Aman terhadap duplikat baris role dengan nama yang sama. */
    Optional<Role> findFirstByNameOrderByIdAsc(RoleType name);

    default Optional<Role> findByName(RoleType name) {
        return findFirstByNameOrderByIdAsc(name);
    }
}

