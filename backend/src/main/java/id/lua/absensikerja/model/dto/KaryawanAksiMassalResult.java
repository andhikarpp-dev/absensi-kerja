package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * Hasil eksekusi Aksi Massal karyawan.
 */
@Data
@Builder
public class KaryawanAksiMassalResult {

    private String aksi;
    private int    diminta;
    private int    berhasil;
    private int    gagal;

    /** Pesan error per id (untuk debug). */
    private List<String> errors;
}
