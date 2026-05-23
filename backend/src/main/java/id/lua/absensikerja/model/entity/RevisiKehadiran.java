package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.JenisRevisiKehadiran;
import id.lua.absensikerja.model.enums.StatusRevisi;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

@Entity
@Table(name = "revisi_kehadiran")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class RevisiKehadiran {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "absensi_id")
    private Absensi absensi;

    @Column(name = "tanggal", nullable = false)
    private LocalDate tanggal;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_kehadiran", length = 30, nullable = false)
    private JenisRevisiKehadiran jenisKehadiran;

    @Column(name = "alasan", columnDefinition = "TEXT", nullable = false)
    private String alasan;

    @Column(name = "jam_asli")
    private LocalTime jamAsli;

    @Column(name = "jam_baru", nullable = false)
    private LocalTime jamBaru;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private StatusRevisi status = StatusRevisi.PENGAJUAN;

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
