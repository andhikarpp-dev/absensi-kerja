package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

/**
 * Audit trail setiap kali data lembur karyawan dihapus/ditolak oleh admin.
 */
@Entity
@Table(name = "riwayat_hapus_lembur")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class RiwayatHapusLembur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "tanggal_absensi", nullable = false)
    private LocalDate tanggalAbsensi;

    @Column(name = "jam_mulai_lembur")
    private LocalTime jamMulaiLembur;

    @Column(name = "jam_selesai_lembur")
    private LocalTime jamSelesaiLembur;

    /** Durasi dalam menit */
    @Column(name = "durasi_menit")
    private Integer durasiMenit;

    /** User (admin/pemilik) yang menghapus */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dihapus_oleh_id")
    private User dihapusOleh;

    @Column(name = "catatan", columnDefinition = "TEXT")
    private String catatan;

    @CreationTimestamp
    @Column(name = "dihapus_at", updatable = false)
    private LocalDateTime dihapusAt;
}
