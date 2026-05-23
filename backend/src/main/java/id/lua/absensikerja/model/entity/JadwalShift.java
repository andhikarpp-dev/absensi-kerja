package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusJadwalShift;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "jadwal_shift", uniqueConstraints = {
        @UniqueConstraint(name = "uk_jadwal_shift_karyawan_tgl", columnNames = {"karyawan_id", "tanggal"})
})
@SQLRestriction("is_deleted = false")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class JadwalShift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Perusahaan pemilik (tenancy). */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "tanggal", nullable = false)
    private LocalDate tanggal;

    /** Pola kerja (shift) yang ditetapkan untuk hari ini. Nullable bila status LIBUR/OFF. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pola_kerja_id")
    private PolaKerja polaKerja;

    /** Override jam masuk (HH:mm). Bila null, ambil dari polaKerja.hariList sesuai hari. */
    @Column(name = "jam_masuk", length = 5)
    private String jamMasuk;

    @Column(name = "jam_keluar", length = 5)
    private String jamKeluar;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private StatusJadwalShift status = StatusJadwalShift.AKTIF;

    @Column(name = "keterangan", length = 255)
    private String keterangan;

    /** Warna tag (hex) untuk visualisasi grid. */
    @Column(name = "warna", length = 10)
    private String warna;

    // ── Audit & soft-delete ──────────────────────────────
    @Column(name = "created_at")
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
