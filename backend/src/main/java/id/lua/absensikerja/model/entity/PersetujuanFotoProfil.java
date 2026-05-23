package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

/**
 * Permintaan ganti foto profil dari karyawan — menunggu persetujuan admin/pemilik.
 */
@Entity
@Table(name = "persetujuan_foto_profil")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PersetujuanFotoProfil {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    /** Path foto baru yang diajukan karyawan */
    @Column(name = "foto_baru", nullable = false)
    private String fotoBaru;

    /** Path foto lama (sebelum diganti) */
    @Column(name = "foto_lama")
    private String fotoLama;

    /** MENUNGGU / DISETUJUI / DITOLAK */
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private String status = "MENUNGGU";

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @Column(name = "diproses_at")
    private LocalDateTime diprosesAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
