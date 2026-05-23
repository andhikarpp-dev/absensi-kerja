package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "izin_jam_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class IzinJamRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "izin_jam_id", nullable = false)
    private IzinJam izinJam;

    /** DIBUAT / DIUBAH / DIHAPUS */
    @Column(name = "tipe", length = 20, nullable = false)
    private String tipe;

    @Column(name = "changed_by", length = 150)
    private String changedBy;

    @Column(name = "changed_at", nullable = false)
    @Builder.Default
    private LocalDateTime changedAt = LocalDateTime.now();

    /** JSON: [{"label":"...","nilai":"..."},...] */
    @Column(name = "aktivitas", columnDefinition = "TEXT")
    private String aktivitas;
}
