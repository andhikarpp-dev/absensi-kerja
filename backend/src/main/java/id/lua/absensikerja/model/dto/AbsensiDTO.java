package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusAbsensi;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data @Builder
public class AbsensiDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaKaryawan;
    private String        fotoProfil;
    private String        namaDivisi;
    private String        namaJabatan;

    private LocalDate     tanggal;
    private String        namaHari;       // SENIN, SELASA, …
    private int           bulan;          // 1–12
    private int           tahun;

    private LocalTime     jamMasuk;
    private LocalTime     jamKeluar;

    private LocalTime     jamMulaiIstirahat;
    private LocalTime     jamSelesaiIstirahat;

    private LocalTime     jamMulaiLembur;
    private LocalTime     jamSelesaiLembur;

    /** Jam kerja sesuai pola (HH:mm) */
    private String        jamKerjaMulai;
    private String        jamKerjaSelesai;
    private String        namaPolaKerja;

    private Integer       menitTerlambat;
    private StatusAbsensi status;

    private String        catatanMasuk;
    private String        catatanKeluar;
    private String        fotoMasukUrl;
    private String        fotoKeluarUrl;

    /** Google Maps URL lokasi check-in / check-out */
    private String        lokasiMasukUrl;
    private String        lokasiKeluarUrl;

    /** true jika belum check-out */
    private boolean       sudahCheckIn;
    private boolean       sudahCheckOut;

    /** Info perangkat yang digunakan saat check-in */
    private String        namaPerangkat;
    private String        modelPerangkat;
    private String        manufaktur;
    private String        deviceId;
    private String        platform;

    /** Info jadwal kerja (dari pola kerja) */
    private Long          polaKerjaHariId;
    private Integer       toleransiKeterlambatan;
    private String        jamIstirahatMulai;
    private String        jamIstirahatSelesai;
    private Integer       maksMenitIstirahat;
    private String        zonaWaktu;

    // ── Review Kehadiran ──────────────────────────────────
    private boolean       perluDicek;
    private boolean       sudahDicek;
    private String        alasanReview;
    private boolean       diLuarLokasi;
    private boolean       perangkatBerbeda;
}
