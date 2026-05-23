package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_pengalaman_kerja")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanPengalamanKerja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    /** Nama perusahaan tempat bekerja sebelumnya */
    @Column(name = "nama_perusahaan", nullable = false, length = 150)
    private String namaPerusahaan;

    /** Jabatan / posisi yang dipegang */
    @Column(name = "jabatan", nullable = false, length = 100)
    private String jabatan;

    /** Bidang industri / jenis pekerjaan */
    @Column(name = "bidang_industri", length = 100)
    private String bidangIndustri;

    @Column(name = "tanggal_mulai")
    private LocalDate tanggalMulai;

    @Column(name = "tanggal_selesai")
    private LocalDate tanggalSelesai;

    /** true = masih bekerja di sini (tanggal_selesai diabaikan) */
    @Column(name = "masih_bekerja")
    @Builder.Default
    private Boolean masihBekerja = false;

    @Column(name = "deskripsi", columnDefinition = "TEXT")
    private String deskripsi;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
