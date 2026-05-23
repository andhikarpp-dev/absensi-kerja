package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "cuti_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CutiRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cuti_id", nullable = false)
    private Cuti cuti;

    /** DIBUAT / DIUBAH / DIHAPUS / STATUS */
    @Column(name = "tipe", length = 20, nullable = false)
    private String tipe;

    @Column(name = "changed_by", length = 150)
    private String changedBy;

    @Column(name = "changed_at", nullable = false)
    @Builder.Default
    private LocalDateTime changedAt = LocalDateTime.now();

    @Column(name = "aktivitas", columnDefinition = "TEXT")
    private String aktivitas;
}
