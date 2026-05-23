package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PerangkatDTO;
import id.lua.absensikerja.model.entity.Karyawan;

import java.util.List;

public interface PerangkatService {

    /** Ambil semua perangkat milik karyawan */
    List<PerangkatDTO> findByKaryawan(Long karyawanId);

    /**
     * Daftarkan / perbarui perangkat saat check-in.
     * Jika deviceId sudah ada, cukup update terakhirAktif + info lainnya.
     */
    PerangkatDTO registerOrUpdate(Karyawan karyawan,
                                  String deviceId,
                                  String namaPerangkat,
                                  String modelPerangkat,
                                  String manufaktur,
                                  String platform);

    /** Cabut (hapus) perangkat */
    void delete(Long karyawanId, Long perangkatId);
}
