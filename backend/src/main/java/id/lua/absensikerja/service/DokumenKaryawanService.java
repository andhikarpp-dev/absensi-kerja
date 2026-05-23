package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.DokumenKaryawanDTO;
import id.lua.absensikerja.model.dto.DokumenKaryawanRequest;
import id.lua.absensikerja.model.dto.KuotaDokumenDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface DokumenKaryawanService {

    List<DokumenKaryawanDTO> findByKaryawan(Long karyawanId, String search);

    DokumenKaryawanDTO findById(Long id);

    DokumenKaryawanDTO create(Long karyawanId, DokumenKaryawanRequest req, MultipartFile berkas) throws IOException;

    DokumenKaryawanDTO update(Long id, DokumenKaryawanRequest req, MultipartFile berkas) throws IOException;

    void delete(Long id);

    KuotaDokumenDTO getKuota(Long karyawanId);

    KuotaDokumenDTO tambahKuotaBerbayar(Long karyawanId, int jumlah);
}
