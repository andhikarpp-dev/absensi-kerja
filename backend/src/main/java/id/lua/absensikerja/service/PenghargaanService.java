package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PenghargaanDTO;
import id.lua.absensikerja.model.dto.PenghargaanRequest;

import java.util.List;

public interface PenghargaanService {
    List<PenghargaanDTO> findByKaryawan(Long karyawanId);
    PenghargaanDTO create(Long karyawanId, PenghargaanRequest request);
    PenghargaanDTO update(Long karyawanId, Long penghargaanId, PenghargaanRequest request);
    void delete(Long karyawanId, Long penghargaanId);
}
