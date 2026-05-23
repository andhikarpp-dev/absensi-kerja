package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * Riwayat perubahan data jabatan (audit trail sederhana).
 */
@Entity
@Table(name = "jabatan_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class JabatanRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "jabatan_id", nullable = false)
    private Jabatan jabatan;

    @Column(name = "keterangan", length = 500)
    private String keterangan;

    @Column(name = "changed_by", length = 100)
    private String changedBy;

    @Column(name = "changed_at", nullable = false)
    @Builder.Default
    private LocalDateTime changedAt = LocalDateTime.now();
}
