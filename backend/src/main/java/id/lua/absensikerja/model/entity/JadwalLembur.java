package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/**
 * Jadwal Lembur — permohonan/jadwal lembur yang dibuat admin/pemilik untuk karyawan.
 */
@Entity
@Table(name = "jadwal_lembur")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class JadwalLembur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    /** Waktu mulai lembur (datetime lengkap) */
    @Column(name = "waktu_mulai", nullable = false)
    private LocalDateTime waktuMulai;

    /** Waktu selesai lembur (datetime lengkap) */
    @Column(name = "waktu_selesai", nullable = false)
    private LocalDateTime waktuSelesai;

    /**
     * Pembatasan mulai lembur — jumlah menit sebelum jadwal mulai lembur
     * karyawan diizinkan memulai (null = tidak ada pembatasan).
     */
    @Column(name = "menit_sebelum_jadwal")
    private Integer menitSebelumJadwal;

    @Column(name = "catatan", columnDefinition = "TEXT")
    private String catatan;

    /**
     * Status: PENGAJUAN | DISETUJUI | DITOLAK
     */
    @Column(name = "status", nullable = false, length = 20)
    @Builder.Default
    private String status = "PENGAJUAN";

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @CreationTimestamp
    @Column(name = "dibuat_at", updatable = false)
    private LocalDateTime dibuatAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dibuat_oleh_id")
    private User dibuatOleh;
}
