package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.BackgroundPendidikanDTO;
import id.lua.absensikerja.model.dto.BackgroundPendidikanRequest;

import java.util.List;

public interface BackgroundPendidikanService {
    List<BackgroundPendidikanDTO> findByKaryawan(Long karyawanId);
    BackgroundPendidikanDTO create(Long karyawanId, BackgroundPendidikanRequest request);
    BackgroundPendidikanDTO update(Long karyawanId, Long pendidikanId, BackgroundPendidikanRequest request);
    void delete(Long karyawanId, Long pendidikanId);
}
