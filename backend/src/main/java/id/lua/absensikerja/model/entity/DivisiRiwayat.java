package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * Riwayat perubahan data divisi (audit trail).
 */
@Entity
@Table(name = "divisi_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class DivisiRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "divisi_id", nullable = false)
    private Divisi divisi;

    /** DIBUAT / DIUBAH / DIHAPUS */
    @Column(name = "tipe", length = 20, nullable = false)
    private String tipe;

    /** Nama pengguna yang melakukan perubahan */
    @Column(name = "changed_by", length = 100)
    private String changedBy;

    @Column(name = "changed_at", nullable = false)
    @Builder.Default
    private LocalDateTime changedAt = LocalDateTime.now();

    /**
     * Daftar perubahan field dalam format JSON:
     * [{"label":"Nama Divisi","nilai":"LUA"},{"label":"Catatan Masuk","nilai":"optional"}, ...]
     */
    @Column(name = "aktivitas", columnDefinition = "TEXT")
    private String aktivitas;
}
