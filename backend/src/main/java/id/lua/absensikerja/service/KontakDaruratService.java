package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KontakDaruratDTO;
import id.lua.absensikerja.model.dto.KontakDaruratRequest;

import java.util.List;

public interface KontakDaruratService {
    List<KontakDaruratDTO> findByKaryawan(Long karyawanId);
    KontakDaruratDTO create(Long karyawanId, KontakDaruratRequest request);
    KontakDaruratDTO update(Long karyawanId, Long kontakId, KontakDaruratRequest request);
    void delete(Long karyawanId, Long kontakId);
}
