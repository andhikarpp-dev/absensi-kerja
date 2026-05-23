package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import id.lua.absensikerja.model.enums.StatusSuratPeringatan;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "surat_peringatan")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class SuratPeringatan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jenis_peringatan_id", nullable = false)
    private JenisPeringatan jenis;

    @Column(name = "tanggal_mulai", nullable = false)
    private LocalDate tanggalMulai;

    @Column(name = "tanggal_selesai", nullable = false)
    private LocalDate tanggalSelesai;

    @Column(name = "pelanggaran", columnDefinition = "TEXT")
    private String pelanggaran;

    @Column(name = "dokumen_url")
    private String dokumenUrl;

    @Column(name = "cegah_presensi", nullable = false)
    @Builder.Default
    private boolean cegahPresensi = false;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private StatusSuratPeringatan status = StatusSuratPeringatan.AKTIF;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_persetujuan", length = 20, nullable = false)
    @Builder.Default
    private StatusPersetujuanSP statusPersetujuan = StatusPersetujuanSP.MENUNGGU;

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @OneToMany(mappedBy = "suratPeringatan",
               cascade = CascadeType.ALL,
               orphanRemoval = true,
               fetch = FetchType.LAZY)
    @Builder.Default
    private List<PenyetujuSuratPeringatan> penyetuju = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
