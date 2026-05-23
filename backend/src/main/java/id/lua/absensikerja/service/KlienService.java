package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KlienDTO;
import id.lua.absensikerja.model.dto.KlienRequest;

import java.util.List;

public interface KlienService {
    List<KlienDTO> findAll(Long perusahaanId);
    KlienDTO findById(Long id);
    KlienDTO create(Long perusahaanId, KlienRequest req);
    KlienDTO update(Long id, KlienRequest req);
    void delete(Long id);
}
