package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.JenisUpahOpenshift;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * Pola Kerja - Openshift.
 * Sebuah penawaran "open shift" yang bisa diambil karyawan pada divisi target.
 */
@Entity
@Table(name = "openshift")
@SQLRestriction("is_deleted = false")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Openshift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Perusahaan pemilik openshift ini. Null = ADMIN / data lama. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @Column(name = "jam_masuk", nullable = false)
    private LocalDateTime jamMasuk;

    @Column(name = "jam_keluar", nullable = false)
    private LocalDateTime jamKeluar;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_upah", nullable = false, length = 20)
    @Builder.Default
    private JenisUpahOpenshift jenisUpah = JenisUpahOpenshift.SESUAI_LEMBUR;

    /** Upah per jam (rupiah) saat jenisUpah = NOMINAL. */
    @Column(name = "upah_per_jam")
    @Builder.Default
    private Long upahPerJam = 0L;

    /** Maks. jumlah karyawan yang boleh ambil. NULL = tidak terbatas. */
    @Column(name = "maks_karyawan")
    private Integer maksKaryawan;

    @Column(name = "catatan", length = 500)
    private String catatan;

    /** Divisi yang menjadi target openshift ini. */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "openshift_divisi",
        joinColumns = @JoinColumn(name = "openshift_id"),
        inverseJoinColumns = @JoinColumn(name = "divisi_id")
    )
    @Builder.Default
    private Set<Divisi> divisiSet = new HashSet<>();

    // Soft delete
    @Column(name = "is_deleted", nullable = false)
    @Builder.Default
    private boolean isDeleted = false;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = this.createdAt;
        if (jenisUpah == null) jenisUpah = JenisUpahOpenshift.SESUAI_LEMBUR;
    }

    @PreUpdate
    void onUpdate() {
        this.updatedAt = LocalDateTime.now();
        if (jenisUpah == null) jenisUpah = JenisUpahOpenshift.SESUAI_LEMBUR;
    }
}
