package id.lua.absensikerja.model.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

/**
 * Rekap Catatan Presensi — tampilan mingguan per karyawan.
 */
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class RekapCatatanPresensiDTO {

    /** Tanggal awal minggu (Senin) */
    private LocalDate tanggalMulai;

    /** Tanggal akhir minggu (Minggu) */
    private LocalDate tanggalSelesai;

    /** Daftar tanggal dalam minggu ini (biasanya 7 hari) */
    private List<HariInfo> hariList;

    /** Baris per karyawan */
    private List<KaryawanRow> karyawanList;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class HariInfo {
        private LocalDate tanggal;
        private String    namaHari;       // Senin, Selasa, ...
        private boolean   hariIni;
        private boolean   libur;
        private String    keteranganLibur;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class KaryawanRow {
        private Long   karyawanId;
        private String namaKaryawan;
        private String namaDivisi;

        /**
         * Key = tanggal (ISO: yyyy-MM-dd), Value = catatan presensi hari itu
         */
        private Map<String, PresensiHari> presensiPerHari;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class PresensiHari {
        private Long   absensiId;
        private String jamMasuk;     // "07:30:57"
        private String jamKeluar;
        private String catatanMasuk;
        private String catatanKeluar;
        private boolean tidakMasuk;  // true jika tidak ada record tapi harusnya masuk
    }
}
