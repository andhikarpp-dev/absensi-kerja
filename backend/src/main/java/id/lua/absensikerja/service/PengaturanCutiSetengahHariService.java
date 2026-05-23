package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengaturanCutiSetengahHariDTO;
import id.lua.absensikerja.model.dto.PengaturanCutiSetengahHariRequest;

public interface PengaturanCutiSetengahHariService {
    /** Ambil pengaturan milik perusahaan caller. Jika belum ada, kembalikan default. */
    PengaturanCutiSetengahHariDTO get(Long callerUserId);
    /** Simpan/update pengaturan (upsert). */
    PengaturanCutiSetengahHariDTO save(PengaturanCutiSetengahHariRequest req, Long callerUserId);
}
