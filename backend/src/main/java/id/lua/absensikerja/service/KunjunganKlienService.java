package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KunjunganKlienDTO;
import id.lua.absensikerja.model.dto.KunjunganKlienRequest;

import java.time.LocalDate;
import java.util.List;

public interface KunjunganKlienService {
    List<KunjunganKlienDTO> findAll(Long perusahaanId, Long divisiId, Long klienId, LocalDate from, LocalDate to, String cari);
    KunjunganKlienDTO findById(Long id);
    KunjunganKlienDTO create(Long perusahaanId, KunjunganKlienRequest req);
    KunjunganKlienDTO update(Long id, KunjunganKlienRequest req);
    void delete(Long id);
}
