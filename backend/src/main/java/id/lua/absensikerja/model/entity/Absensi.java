package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusAbsensi;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "absensi")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Absensi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(nullable = false)
    private LocalDate tanggal;

    @Column(name = "jam_masuk")
    private LocalTime jamMasuk;

    @Column(name = "jam_keluar")
    private LocalTime jamKeluar;

    /** Istirahat */
    @Column(name = "jam_mulai_istirahat")
    private LocalTime jamMulaiIstirahat;

    @Column(name = "jam_selesai_istirahat")
    private LocalTime jamSelesaiIstirahat;

    /** Lembur */
    @Column(name = "jam_mulai_lembur")
    private LocalTime jamMulaiLembur;

    @Column(name = "jam_selesai_lembur")
    private LocalTime jamSelesaiLembur;

    /** Jam mulai kerja sesuai pola kerja hari ini */
    @Column(name = "jam_kerja_mulai", length = 5)
    private String jamKerjaMulai;

    /** Jam selesai kerja sesuai pola kerja hari ini */
    @Column(name = "jam_kerja_selesai", length = 5)
    private String jamKerjaSelesai;

    /** Nama pola kerja yang berlaku */
    @Column(name = "nama_pola_kerja", length = 100)
    private String namaPolaKerja;

    /** Durasi keterlambatan dalam menit (0 jika tepat waktu) */
    @Column(name = "menit_terlambat")
    @Builder.Default
    private Integer menitTerlambat = 0;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private StatusAbsensi status = StatusAbsensi.HADIR;

    /** Catatan saat check-in */
    @Column(name = "catatan_masuk", columnDefinition = "TEXT")
    private String catatanMasuk;

    /** Catatan saat check-out */
    @Column(name = "catatan_keluar", columnDefinition = "TEXT")
    private String catatanKeluar;

    /** Path foto selfie check-in */
    @Column(name = "foto_masuk")
    private String fotoMasuk;

    /** Path foto selfie check-out */
    @Column(name = "foto_keluar")
    private String fotoKeluar;

    /** Koordinat lokasi saat check-in */
    @Column(name = "lokasi_masuk_lat")
    private Double lokasiMasukLat;

    @Column(name = "lokasi_masuk_lng")
    private Double lokasiMasukLng;

    /** Koordinat lokasi saat check-out */
    @Column(name = "lokasi_keluar_lat")
    private Double lokasiKeluarLat;

    @Column(name = "lokasi_keluar_lng")
    private Double lokasiKeluarLng;

    // ── Review Kehadiran ──────────────────────────────────────

    /**
     * Flag utama review — true jika salah satu kondisi terpenuhi:
     * presensi pertama kali / di luar lokasi / device berbeda.
     * Nullable agar Hibernate bisa ALTER TABLE pada data lama (null = false).
     */
    @Column(name = "perlu_dicek")
    @Builder.Default
    private Boolean perluDicek = false;

    /**
     * true setelah admin menandai "Sudah Dicek".
     * Nullable agar Hibernate bisa ALTER TABLE pada data lama (null = false).
     */
    @Column(name = "sudah_dicek")
    @Builder.Default
    private Boolean sudahDicek = false;

    @Column(name = "alasan_review", length = 255)
    private String alasanReview;

    @Column(name = "di_luar_lokasi")
    @Builder.Default
    private Boolean diLuarLokasi = false;

    @Column(name = "perangkat_berbeda")
    @Builder.Default
    private Boolean perangkatBerbeda = false;
}
