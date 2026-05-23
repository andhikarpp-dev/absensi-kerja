package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_pengalaman_organisasi")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanPengalamanOrganisasi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "nama_organisasi", nullable = false, length = 200)
    private String namaOrganisasi;

    @Column(name = "jabatan", length = 200)
    private String jabatan;

    @Column(name = "tanggal_mulai")
    private LocalDate tanggalMulai;

    @Column(name = "tanggal_selesai")
    private LocalDate tanggalSelesai;

    @Column(name = "masih_aktif")
    private Boolean masihAktif;

    @Column(name = "deskripsi", columnDefinition = "TEXT")
    private String deskripsi;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
