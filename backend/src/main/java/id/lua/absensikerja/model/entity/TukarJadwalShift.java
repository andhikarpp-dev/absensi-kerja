package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "tukar_jadwal_shift")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TukarJadwalShift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    /** Karyawan yang mengajukan tukar jadwal */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_pemohon_id", nullable = false)
    private Karyawan karyawanPemohon;

    /** Jadwal shift milik pemohon yang ingin ditukar */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jadwal_pemohon_id")
    private JadwalShift jadwalPemohon;

    /** Karyawan target yang diminta untuk tukar jadwal */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_target_id", nullable = false)
    private Karyawan karyawanTarget;

    /** Jadwal shift milik target yang ingin ditukar */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jadwal_target_id")
    private JadwalShift jadwalTarget;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private StatusTukarJadwalShift status = StatusTukarJadwalShift.MENUNGGU;

    @Column(name = "catatan", columnDefinition = "TEXT")
    private String catatan;

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
