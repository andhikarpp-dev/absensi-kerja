package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.SertifikatDTO;
import id.lua.absensikerja.model.dto.SertifikatRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SertifikatService {
    List<SertifikatDTO> findByKaryawan(Long karyawanId);
    SertifikatDTO create(Long karyawanId, SertifikatRequest request, MultipartFile file);
    SertifikatDTO update(Long karyawanId, Long sertifikatId, SertifikatRequest request, MultipartFile file);
    void delete(Long karyawanId, Long sertifikatId);
}
