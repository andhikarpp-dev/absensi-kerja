package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PolaKerjaDTO;
import id.lua.absensikerja.model.dto.PolaKerjaRequest;
import id.lua.absensikerja.model.enums.KategoriPolaKerja;

import java.util.List;
import java.util.Set;

public interface PolaKerjaService {
    List<PolaKerjaDTO> findAll(Long ownerId);
    List<PolaKerjaDTO> findAll(Long ownerId, KategoriPolaKerja kategori);
    List<PolaKerjaDTO> findByDivisi(Long divisiId, Long ownerId);
    PolaKerjaDTO findById(Long id);
    PolaKerjaDTO create(PolaKerjaRequest request, Long ownerId);
    PolaKerjaDTO update(Long id, PolaKerjaRequest request);
    PolaKerjaDTO assignDivisi(Long id, Set<Long> divisiIds);
    PolaKerjaDTO unassignDivisi(Long id, Long divisiId);
    void delete(Long id);
}
