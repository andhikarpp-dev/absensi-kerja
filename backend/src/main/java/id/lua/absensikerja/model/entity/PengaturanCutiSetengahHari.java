package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

/**
 * Pengaturan Cuti Setengah Hari per perusahaan (atau global untuk ADMIN).
 * Satu baris per perusahaan (unique).
 */
@Entity
@Table(name = "pengaturan_cuti_setengah_hari",
       uniqueConstraints = @UniqueConstraint(columnNames = "perusahaan_id"))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanCutiSetengahHari {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Null = global (ADMIN tanpa perusahaan). */
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    /** Apakah karyawan dapat mengajukan cuti setengah hari. */
    @Column(name = "aktif", nullable = false)
    @Builder.Default
    private boolean aktif = false;

    /**
     * Mode presensi masuk untuk sesi pagi:
     *   "jadwal"  = sesuai jam selesai istirahat pada jadwal
     *   "manual"  = jam tetap yang diset manual
     */
    @Column(name = "presensi_masuk_mode", length = 10, nullable = false)
    @Builder.Default
    private String presensiMasukMode = "jadwal";

    /** Jam presensi masuk manual (HH:mm), hanya berlaku jika mode = "manual". */
    @Column(name = "presensi_masuk_jam", length = 5)
    private String presensiMasukJam;

    /**
     * Mode presensi keluar untuk sesi siang:
     *   "jadwal"  = sesuai jam mulai istirahat pada jadwal
     *   "manual"  = jam tetap yang diset manual
     */
    @Column(name = "presensi_keluar_mode", length = 10, nullable = false)
    @Builder.Default
    private String presensiKeluarMode = "jadwal";

    /** Jam presensi keluar manual (HH:mm), hanya berlaku jika mode = "manual". */
    @Column(name = "presensi_keluar_jam", length = 5)
    private String presensiKeluarJam;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
