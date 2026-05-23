package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

/**
 * Pengaturan global Lokasi Kehadiran — satu baris per perusahaan.
 *
 * <ul>
 *   <li>{@code spvDapatMenambahLokasi} — apakah supervisor (SPV) boleh
 *       menambahkan lokasi kehadiran baru.</li>
 *   <li>{@code spvDapatMemperbaruiLokasi} — apakah SPV boleh mengubah
 *       lokasi kehadiran yang sudah ada.</li>
 * </ul>
 */
@Entity
@Table(name = "pengaturan_lokasi_kehadiran",
       uniqueConstraints = @UniqueConstraint(columnNames = "perusahaan_id"))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanLokasiKehadiran {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Null = pengaturan global (untuk ADMIN tanpa perusahaan). */
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @Column(name = "spv_dapat_menambah_lokasi", nullable = false)
    @ColumnDefault("false")
    @Builder.Default
    private boolean spvDapatMenambahLokasi = false;

    @Column(name = "spv_dapat_memperbarui_lokasi", nullable = false)
    @ColumnDefault("false")
    @Builder.Default
    private boolean spvDapatMemperbaruiLokasi = false;

    /** Sisa kuota lokasi tambahan yang sudah dibeli oleh perusahaan. */
    @Column(name = "kuota_lokasi", nullable = false)
    @ColumnDefault("0")
    @Builder.Default
    private int kuotaLokasi = 0;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    void onUpdate() { this.updatedAt = LocalDateTime.now(); }
}
