package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * Hasil proses impor supervisor divisi.
 */
@Data
@Builder
public class ImporSupervisorResult {

    /** Jumlah baris berhasil diproses */
    private int berhasil;

    /** Jumlah baris yang dilewati / gagal */
    private int gagal;

    /** Detail error per baris */
    private List<BarisSalah> errors;

    @Data
    @Builder
    public static class BarisSalah {
        private int baris;
        private String namaDivisi;
        private String namaKaryawan;
        private String pesan;
    }
}
