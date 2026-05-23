package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.FileIdentitasDTO;
import id.lua.absensikerja.model.dto.FileIdentitasRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface FileIdentitasService {

    List<FileIdentitasDTO> findByKaryawan(Long karyawanId);

    FileIdentitasDTO create(Long karyawanId, FileIdentitasRequest request, MultipartFile file) throws IOException;

    void delete(Long karyawanId, Long fileIdentitasId);
}
