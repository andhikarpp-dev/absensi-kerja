package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KabupatenKotaDTO;
import id.lua.absensikerja.model.dto.ProvinsiDTO;

import java.util.List;

public interface WilayahService {
    List<ProvinsiDTO> findAllProvinsi();
    List<KabupatenKotaDTO> findKabupatenKotaByProvinsi(Long provinsiId);
}
