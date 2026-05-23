package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JabatanDTO;
import id.lua.absensikerja.model.dto.JabatanRequest;

import java.util.List;

public interface JabatanService {

    /**
     * @param callerUserId id user yang login — null berarti ADMIN global (lihat semua perusahaan)
     */
    List<JabatanDTO> findAll(Long callerUserId);

    JabatanDTO findById(Long id);

    /**
     * @param callerUserId id user yang login — digunakan untuk set perusahaan pada jabatan baru
     */
    JabatanDTO create(JabatanRequest request, Long callerUserId);

    /**
     * @param callerUserId id user yang login — digunakan untuk validasi nama jabatan dalam perusahaan
     */
    JabatanDTO update(Long id, JabatanRequest request, Long callerUserId);

    void delete(Long id);
}
