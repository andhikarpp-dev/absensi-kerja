package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PortofolioDTO;
import id.lua.absensikerja.model.dto.PortofolioRequest;

import java.util.List;

public interface PortofolioService {
    List<PortofolioDTO> findByKaryawan(Long karyawanId);
    PortofolioDTO create(Long karyawanId, PortofolioRequest request);
    PortofolioDTO update(Long karyawanId, Long portofolioId, PortofolioRequest request);
    void delete(Long karyawanId, Long portofolioId);
}
