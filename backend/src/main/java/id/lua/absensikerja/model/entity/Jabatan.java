package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

// same-package classes resolved at compile time — explicit imports for IDE clarity

@Entity
@Table(name = "jabatan")
@SQLRestriction("is_deleted = false")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Jabatan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nama_jabatan", nullable = false, length = 100)
    private String namaJabatan;

    // Perusahaan pemilik jabatan ini
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    // Induk jabatan (self-referencing)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "induk_id")
    private Jabatan induk;

    /** Hanya baca FK-nya tanpa trigger lazy-load, dipakai di toDTO() */
    @Column(name = "induk_id", insertable = false, updatable = false)
    private Long indukId;

    // Target kehadiran per lokasi
    @OneToMany(mappedBy = "jabatan", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<JabatanTargetKehadiran> targetKehadiranList = new ArrayList<>();

    // Riwayat perubahan
    @OneToMany(mappedBy = "jabatan", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("changedAt DESC")
    @Builder.Default
    private List<JabatanRiwayat> riwayatList = new ArrayList<>();

    // Soft delete
    @Column(name = "is_deleted", nullable = false)
    @Builder.Default
    private boolean isDeleted = false;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    @Column(name = "created_at", nullable = false, updatable = false)
    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
