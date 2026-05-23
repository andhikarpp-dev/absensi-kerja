package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JenisPeringatanDTO;
import id.lua.absensikerja.model.dto.JenisPeringatanRequest;

import java.util.List;

public interface JenisPeringatanService {
    List<JenisPeringatanDTO> findAll(boolean aktifSaja);
    JenisPeringatanDTO findById(Long id);
    JenisPeringatanDTO create(JenisPeringatanRequest req);
    JenisPeringatanDTO update(Long id, JenisPeringatanRequest req);
    void delete(Long id);
}
