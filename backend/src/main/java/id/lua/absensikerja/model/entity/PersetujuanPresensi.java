package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Permintaan / catatan karyawan yang terblokir presensi akibat pembatasan waktu.
 * Admin dapat "mengizinkan" satu atau banyak sekaligus.
 */
@Entity
@Table(name = "persetujuan_presensi")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PersetujuanPresensi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "tanggal", nullable = false)
    private LocalDate tanggal;

    /** MASUK / KELUAR / ISTIRAHAT / SELESAI_ISTIRAHAT / LEMBUR / SELESAI_LEMBUR */
    @Column(name = "jenis_presensi", length = 30, nullable = false)
    private String jenisPresensi;

    /** Nama pola kerja yang berlaku */
    @Column(name = "nama_pola_kerja", length = 100)
    private String namaPolaKerja;

    /** Jam jadwal masuk (HH:mm) */
    @Column(name = "jam_jadwal_masuk", length = 5)
    private String jamJadwalMasuk;

    /** Jam jadwal keluar (HH:mm) */
    @Column(name = "jam_jadwal_keluar", length = 5)
    private String jamJadwalKeluar;

    /** Alasan / keterangan blokir */
    @Column(name = "alasan", columnDefinition = "TEXT")
    private String alasan;

    @Column(name = "diizinkan", nullable = false)
    @Builder.Default
    private boolean diizinkan = false;

    @Column(name = "diizinkan_at")
    private LocalDateTime diizinkanAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
