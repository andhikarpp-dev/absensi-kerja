package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.DivisiDTO;
import id.lua.absensikerja.model.dto.DivisiRequest;
import id.lua.absensikerja.model.dto.DivisiRiwayatDTO;

import java.util.List;

public interface DivisiService {
    /** ownerId != null → filter milik owner; null → semua (ADMIN) */
    List<DivisiDTO> findAll(Long ownerId);
    DivisiDTO findById(Long id);
    DivisiDTO create(DivisiRequest request, Long ownerId);
    DivisiDTO update(Long id, DivisiRequest request);
    void delete(Long id);
    List<DivisiRiwayatDTO> findRiwayat(Long divisiId);
}
