package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengalamanKerjaDTO;
import id.lua.absensikerja.model.dto.PengalamanKerjaRequest;

import java.util.List;

public interface PengalamanKerjaService {
    List<PengalamanKerjaDTO> findByKaryawan(Long karyawanId);
    PengalamanKerjaDTO create(Long karyawanId, PengalamanKerjaRequest request);
    PengalamanKerjaDTO update(Long karyawanId, Long pengalamanId, PengalamanKerjaRequest request);
    void delete(Long karyawanId, Long pengalamanId);
}
