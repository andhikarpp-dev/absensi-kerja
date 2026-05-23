package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "penyetuju_surat_peringatan")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PenyetujuSuratPeringatan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "surat_peringatan_id", nullable = false)
    private SuratPeringatan suratPeringatan;

    /** Karyawan penyetuju (opsional — bisa nama bebas jika belum di-link). */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id")
    private Karyawan karyawan;

    @Column(name = "nama", nullable = false, length = 150)
    private String nama;

    @Column(name = "urutan", nullable = false)
    @Builder.Default
    private Integer urutan = 1;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private StatusPersetujuanSP status = StatusPersetujuanSP.MENUNGGU;

    @Column(name = "catatan", columnDefinition = "TEXT")
    private String catatan;

    @Column(name = "diproses_at")
    private LocalDateTime diprosesAt;
}
