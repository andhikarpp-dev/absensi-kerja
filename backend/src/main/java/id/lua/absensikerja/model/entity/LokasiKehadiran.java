package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.TargetLokasiKehadiran;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.SQLRestriction;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Lokasi presensi (geofence) — opsional terhubung ke perusahaan.
 *
 * <p>Jika {@code hanyaFingerspot = true}, presensi pada lokasi ini hanya
 * boleh dilakukan melalui mesin Fingerspot terdaftar (lihat
 * {@link #fingerspotSn}, {@link #fingerspotIp}).</p>
 */
@Entity
@Table(name = "lokasi_kehadiran")
@SQLRestriction("is_deleted = false")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class LokasiKehadiran {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Perusahaan pemilik lokasi ini. Null = data global / ADMIN. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @Column(name = "nama_lokasi", nullable = false, length = 150)
    private String namaLokasi;

    @Column(name = "alamat", length = 500)
    private String alamat;

    @Column(name = "latitude",  precision = 10, scale = 7)
    private BigDecimal latitude;

    @Column(name = "longitude", precision = 10, scale = 7)
    private BigDecimal longitude;

    /** Radius geofence dalam meter (untuk presensi via aplikasi mobile/web). */
    @Column(name = "radius_meter", nullable = false)
    @Builder.Default
    private Integer radiusMeter = 100;

    /** Aktif / non-aktif. */
    @Column(name = "aktif", nullable = false)
    @Builder.Default
    private boolean aktif = true;

    // ─────────────────────── Penugasan Karyawan ─────────────────────

    /**
     * Tipe penugasan: SEMUA / DIVISI / KARYAWAN.
     * - SEMUA    → lokasi berlaku untuk semua karyawan.
     * - DIVISI   → hanya untuk karyawan pada divisi di {@link #divisiTugas}.
     * - KARYAWAN → hanya untuk karyawan pada {@link #karyawanTugas}.
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "target_tipe", nullable = false, length = 20)
    @ColumnDefault("'SEMUA'")
    @Builder.Default
    private TargetLokasiKehadiran targetTipe = TargetLokasiKehadiran.SEMUA;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "lokasi_kehadiran_divisi",
        joinColumns        = @JoinColumn(name = "lokasi_id"),
        inverseJoinColumns = @JoinColumn(name = "divisi_id")
    )
    @Builder.Default
    private Set<Divisi> divisiTugas = new LinkedHashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "lokasi_kehadiran_karyawan",
        joinColumns        = @JoinColumn(name = "lokasi_id"),
        inverseJoinColumns = @JoinColumn(name = "karyawan_id")
    )
    @Builder.Default
    private Set<Karyawan> karyawanTugas = new LinkedHashSet<>();

    // ─────────────────────── Mode Fingerspot ────────────────────────

    /**
     * Jika true, presensi pada lokasi ini hanya boleh melalui mesin
     * Fingerspot terdaftar — bukan via aplikasi/selfie.
     */
    @Column(name = "hanya_fingerspot", nullable = false)
    @Builder.Default
    private boolean hanyaFingerspot = false;

    /** Serial number mesin Fingerspot (boleh kosong jika belum dipasang). */
    @Column(name = "fingerspot_sn", length = 100)
    private String fingerspotSn;

    /** Alamat IP / hostname mesin Fingerspot. */
    @Column(name = "fingerspot_ip", length = 100)
    private String fingerspotIp;

    /** Port komunikasi mesin Fingerspot (default 80). */
    @Column(name = "fingerspot_port")
    private Integer fingerspotPort;

    /** Catatan tambahan — mis. nomor mesin, lokasi pemasangan. */
    @Column(name = "fingerspot_catatan", length = 255)
    private String fingerspotCatatan;

    // ─────────────────────── Audit / Soft Delete ────────────────────

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "is_deleted", nullable = false)
    @Builder.Default
    private boolean isDeleted = false;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    @PrePersist
    void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
