package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "jenis_klaim_konfigurasi")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class JenisKlaimKonfigurasi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @Column(name = "nama", nullable = false, length = 100)
    private String nama;

    @Column(name = "deskripsi", columnDefinition = "TEXT")
    private String deskripsi;

    @Column(name = "tgl_mulai_berlaku")
    private LocalDate tglMulaiBerlaku;

    /** null = unlimited; nilai dalam bulan */
    @Column(name = "kadaluwarsa_bulan")
    private Integer kadaluwarsa;

    @Column(name = "kuota", precision = 15, scale = 2)
    private BigDecimal kuota;

    @Column(name = "tampilkan_kuota_ke_karyawan", nullable = false)
    @Builder.Default
    private boolean tampilkanKuotaKeKaryawan = false;

    @Column(name = "terapkan_ke_karyawan_baru", nullable = false)
    @Builder.Default
    private boolean terapkanKeKaryawanBaru = false;

    @Column(name = "min_jumlah_pengajuan", precision = 15, scale = 2)
    private BigDecimal minJumlahPengajuan;

    @Column(name = "max_jumlah_pengajuan", precision = 15, scale = 2)
    private BigDecimal maxJumlahPengajuan;

    /** null = tidak ada batasan; nilai dalam bulan */
    @Column(name = "min_klaim_selanjutnya_bulan")
    private Integer minKlaimSelanjutnya;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
