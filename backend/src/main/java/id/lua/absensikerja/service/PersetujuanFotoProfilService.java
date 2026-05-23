package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PersetujuanFotoProfilDTO;

import java.util.List;

public interface PersetujuanFotoProfilService {

    /** Daftar pengajuan berdasarkan status */
    List<PersetujuanFotoProfilDTO> findByStatus(String status, String cari, Long callerUserId);

    /** Setujui — foto baru diterapkan ke profil karyawan */
    PersetujuanFotoProfilDTO setujui(Long id, Long callerUserId);

    /** Tolak */
    PersetujuanFotoProfilDTO tolak(Long id, String catatanPenolakan, Long callerUserId);

    /** Hapus entri */
    void hapus(Long id, Long callerUserId);

    /** Karyawan mengajukan foto baru (path sudah di-upload) */
    PersetujuanFotoProfilDTO ajukan(Long karyawanId, String fotoBaru, Long callerUserId);
}
