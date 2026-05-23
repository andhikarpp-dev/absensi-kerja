package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.CatatanPresensi;
import id.lua.absensikerja.model.enums.SistemKerja;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDateTime;

@Entity
@Table(name = "divisi")
@SQLRestriction("is_deleted = false")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Divisi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ── Identitas ──────────────────────────────────────────
    @Column(name = "nama_divisi", nullable = false, length = 100)
    private String namaDivisi;

    /** Perusahaan pemilik divisi ini. Null = data lama / ADMIN. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    /** @deprecated digantikan oleh perusahaan.owner — tetap ada untuk kompatibilitas data lama */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;

    // ── Denda & Sistem Kerja ───────────────────────────────
    @Column(name = "denda_keterlambatan", nullable = false)
    @Builder.Default
    private boolean dendaKeterlambatan = false;

    @Enumerated(EnumType.STRING)
    @Column(name = "sistem_kerja", nullable = false, length = 20)
    @Builder.Default
    private SistemKerja sistemKerja = SistemKerja.HARI_KERJA;

    // ── Catatan Presensi ───────────────────────────────────
    @Enumerated(EnumType.STRING)
    @Column(name = "catatan_masuk", nullable = false, length = 20)
    @Builder.Default
    private CatatanPresensi catatanMasuk = CatatanPresensi.TIDAK_DIBUTUHKAN;

    @Column(name = "catatan_masuk_label", length = 100)
    private String catatanMasukLabel;

    @Column(name = "catatan_masuk_placeholder", length = 255)
    private String catatanMasukPlaceholder;

    @Enumerated(EnumType.STRING)
    @Column(name = "catatan_keluar", nullable = false, length = 20)
    @Builder.Default
    private CatatanPresensi catatanKeluar = CatatanPresensi.TIDAK_DIBUTUHKAN;

    @Column(name = "catatan_keluar_label", length = 100)
    private String catatanKeluarLabel;

    @Column(name = "catatan_keluar_placeholder", length = 255)
    private String catatanKeluarPlaceholder;

    @Enumerated(EnumType.STRING)
    @Column(name = "catatan_mulai_lembur", nullable = false, length = 20)
    @Builder.Default
    private CatatanPresensi catatanMulaiLembur = CatatanPresensi.TIDAK_DIBUTUHKAN;

    @Column(name = "catatan_mulai_lembur_label", length = 100)
    private String catatanMulaiLemburLabel;

    @Column(name = "catatan_mulai_lembur_placeholder", length = 255)
    private String catatanMulaiLemburPlaceholder;

    @Enumerated(EnumType.STRING)
    @Column(name = "catatan_selesai_lembur", nullable = false, length = 20)
    @Builder.Default
    private CatatanPresensi catatanSelesaiLembur = CatatanPresensi.TIDAK_DIBUTUHKAN;

    @Column(name = "catatan_selesai_lembur_label", length = 100)
    private String catatanSelesaiLemburLabel;

    @Column(name = "catatan_selesai_lembur_placeholder", length = 255)
    private String catatanSelesaiLemburPlaceholder;

    // ── Presensi Sesuai Lokasi (multi-pilih) ──────────────
    @Column(name = "lokasi_masuk")           @Builder.Default private boolean lokasiMasuk          = false;
    @Column(name = "lokasi_istirahat")       @Builder.Default private boolean lokasiIstirahat      = false;
    @Column(name = "lokasi_selesai_istirahat") @Builder.Default private boolean lokasiSelesaiIstirahat = false;
    @Column(name = "lokasi_keluar")          @Builder.Default private boolean lokasiKeluar         = false;
    @Column(name = "lokasi_lembur")          @Builder.Default private boolean lokasiLembur         = false;
    @Column(name = "lokasi_selesai_lembur")  @Builder.Default private boolean lokasiSelesaiLembur  = false;
    @Column(name = "lokasi_pertama_kali")    @Builder.Default private boolean lokasiPertamaKali    = false;
    @Column(name = "lokasi_di_luar")         @Builder.Default private boolean lokasiDiLuar         = false;
    @Column(name = "lokasi_perangkat_berbeda") @Builder.Default private boolean lokasiPerangkatBerbeda = false;
    @Column(name = "lokasi_foto_selfie_bermasalah") @Builder.Default private boolean lokasiFotoSelfieBermasalah = false;

    // ── Supervisor & Supervisi ─────────────────────────────
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supervisor_id")
    private Karyawan supervisor;

    @OneToMany(mappedBy = "divisi", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("urutan ASC")
    @Builder.Default
    private java.util.List<DivisiSupervisi> supervisiList = new java.util.ArrayList<>();

    @Column(name = "bcc_global", length = 255)
    private String bccGlobal;

    // ── Pembatasan Presensi ────────────────────────────────
    // # Presensi Masuk
    @Column(name = "menit_sebelum_masuk")
    @Builder.Default
    private Integer menitSebelumMasuk = 0;

    @Column(name = "menit_setelah_masuk")
    @Builder.Default
    private Integer menitSetelahMasuk = 0;

    @Column(name = "cegah_presensi_kalender_libur") @Builder.Default private boolean cegahPresensiKalenderLibur = false;
    @Column(name = "cegah_presensi_jadwal_libur")   @Builder.Default private boolean cegahPresensiJadwalLibur   = false;

    // # Presensi Keluar
    @Column(name = "menit_setelah_jadwal_keluar")
    @Builder.Default
    private Integer menitSetelahJadwalKeluar = 0;

    // # Presensi Lembur
    @Column(name = "cegah_presensi_lembur_tanpa_jadwal") @Builder.Default private boolean cegahPresensiLemburTanpaJadwal = false;

    // ── Fitur On/Off ───────────────────────────────────────
    @Column(name = "validasi_perangkat")        @Builder.Default private boolean validasiPerangkat       = false;
    @Column(name = "presensi_keluar_otomatis")  @Builder.Default private boolean presensiKeluarOtomatis  = false;
    @Column(name = "denda_terlambat_keluar")    @Builder.Default private boolean dendaTerlambatKeluar    = false;
    @Column(name = "kunjungan_klien")           @Builder.Default private boolean kunjunganKlien          = false;

    // ── Cuti ──────────────────────────────────────────────
    @Column(name = "minimal_hari_sebelum_cuti") @Builder.Default private Integer minimalHariSebelumCuti = 0;
    @Column(name = "maks_hari_per_request")     @Builder.Default private Integer maksHariPerRequest     = 0;
    @Column(name = "maks_request_per_bulan")    @Builder.Default private Integer maksRequestPerBulan    = 0;

    // ── Riwayat Perubahan ──────────────────────────────────
    @OneToMany(mappedBy = "divisi", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("changedAt DESC")
    @Builder.Default
    private java.util.List<DivisiRiwayat> riwayatList = new java.util.ArrayList<>();

    // ── Soft Delete ────────────────────────────────────────
    @Column(name = "is_deleted", nullable = false)
    @Builder.Default
    private boolean isDeleted = false;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;
}
