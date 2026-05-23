package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * Riwayat perubahan data Lokasi Kehadiran (audit trail).
 */
@Entity
@Table(name = "lokasi_kehadiran_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class LokasiKehadiranRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "lokasi_id", nullable = false)
    private LokasiKehadiran lokasi;

    /** DIBUAT / DIUBAH / DIHAPUS */
    @Column(name = "tipe", length = 20, nullable = false)
    private String tipe;

    /** Username pengguna yang melakukan perubahan. */
    @Column(name = "changed_by", length = 100)
    private String changedBy;

    @Column(name = "changed_at", nullable = false)
    @Builder.Default
    private LocalDateTime changedAt = LocalDateTime.now();

    /**
     * Daftar perubahan field dalam format JSON:
     * [{"label":"Radius","nilai":"100 meter → 50 meter"}, ...]
     */
    @Column(name = "aktivitas", columnDefinition = "TEXT")
    private String aktivitas;
}
