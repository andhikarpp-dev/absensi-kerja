package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "klaim_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KlaimRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "klaim_id", nullable = false)
    private Klaim klaim;

    /** DIBUAT / DIUBAH / STATUS_DISETUJUI / STATUS_DITOLAK / STATUS_DIBATALKAN */
    @Column(name = "tipe", length = 50, nullable = false)
    private String tipe;

    @Column(name = "keterangan", columnDefinition = "TEXT")
    private String keterangan;

    @Column(name = "changed_by", length = 150)
    private String changedBy;

    @Column(name = "changed_at", nullable = false)
    @Builder.Default
    private LocalDateTime changedAt = LocalDateTime.now();
}
