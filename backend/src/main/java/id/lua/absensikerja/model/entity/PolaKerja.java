package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.JenisJadwal;
import id.lua.absensikerja.model.enums.KategoriPolaKerja;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "pola_kerja")
@SQLRestriction("is_deleted = false")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PolaKerja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Perusahaan pemilik pola kerja ini. Null = ADMIN / data lama. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    // Tidak lagi per-divisi — satu pola bisa dipakai banyak divisi
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "divisi_pola_kerja",
        joinColumns = @JoinColumn(name = "pola_kerja_id"),
        inverseJoinColumns = @JoinColumn(name = "divisi_id")
    )
    @Builder.Default
    private Set<Divisi> divisiSet = new HashSet<>();

    @Column(name = "nama_pola_kerja", nullable = false, length = 100)
    private String namaPolaKerja;

    @Column(name = "toleransi_keterlambatan")
    @Builder.Default
    private Integer toleransiKeterlambatan = 0;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_jadwal", nullable = false, length = 20)
    @Builder.Default
    private JenisJadwal jenisJadwal = JenisJadwal.JAM_TETAP;

    /** Kategori: pemisah Hari Kerja vs Shift. Nullable untuk kompatibilitas data lama
     *  (akan diperlakukan sebagai HARI_KERJA di service layer). */
    @Enumerated(EnumType.STRING)
    @Column(name = "kategori", length = 20)
    @Builder.Default
    private KategoriPolaKerja kategori = KategoriPolaKerja.HARI_KERJA;

    /** Warna penanda (untuk shift). */
    @Column(name = "warna", length = 20)
    private String warna;

    /** Catatan bebas (untuk shift). */
    @Column(name = "catatan", length = 255)
    private String catatan;

    @OneToMany(mappedBy = "polaKerja", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("hari ASC")
    @Builder.Default
    private List<PolaKerjaHari> hariList = new ArrayList<>();

    // Soft delete
    @Column(name = "is_deleted", nullable = false)
    @Builder.Default
    private boolean isDeleted = false;

    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;

    /** Pastikan kategori tidak pernah NULL agar pemisahan Hari Kerja vs Shift selalu konsisten. */
    @PrePersist
    @PreUpdate
    private void ensureKategori() {
        if (kategori == null) {
            kategori = KategoriPolaKerja.HARI_KERJA;
        }
    }
}
