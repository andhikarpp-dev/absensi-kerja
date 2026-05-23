package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JenisKlaimKonfigurasiDTO;
import id.lua.absensikerja.model.dto.JenisKlaimKonfigurasiRequest;

import java.util.List;

public interface JenisKlaimKonfigurasiService {
    List<JenisKlaimKonfigurasiDTO> findAll(Long perusahaanId);
    JenisKlaimKonfigurasiDTO findById(Long id);
    JenisKlaimKonfigurasiDTO create(JenisKlaimKonfigurasiRequest req, Long perusahaanId);
    JenisKlaimKonfigurasiDTO update(Long id, JenisKlaimKonfigurasiRequest req);
    void delete(Long id);
}
