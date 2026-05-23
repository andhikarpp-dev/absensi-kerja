package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * Hasil generic untuk proses impor data karyawan (Tambah / Perbarui / BPJS / PPH 21).
 */
@Data
@Builder
public class ImporKaryawanResult {

    /** Tipe impor yang diproses (informasi). */
    private String tipe;

    /** Jumlah baris berhasil diproses */
    private int berhasil;

    /** Jumlah baris yang dilewati / gagal */
    private int gagal;

    /** Detail error per baris */
    private List<BarisSalah> errors;

    @Data
    @Builder
    public static class BarisSalah {
        private int    baris;
        private String nip;
        private String nama;
        private String pesan;
    }
}
