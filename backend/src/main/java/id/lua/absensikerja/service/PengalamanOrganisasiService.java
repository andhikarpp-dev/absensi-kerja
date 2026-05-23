package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengalamanOrganisasiDTO;
import id.lua.absensikerja.model.dto.PengalamanOrganisasiRequest;

import java.util.List;

public interface PengalamanOrganisasiService {
    List<PengalamanOrganisasiDTO> findByKaryawan(Long karyawanId);
    PengalamanOrganisasiDTO create(Long karyawanId, PengalamanOrganisasiRequest request);
    PengalamanOrganisasiDTO update(Long karyawanId, Long organisasiId, PengalamanOrganisasiRequest request);
    void delete(Long karyawanId, Long organisasiId);
}
