package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_sertifikat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanSertifikat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "nama_sertifikat", nullable = false, length = 200)
    private String namaSertifikat;

    @Column(name = "penerbit", length = 200)
    private String penerbit;

    @Column(name = "nomor_sertifikat", length = 100)
    private String nomorSertifikat;

    @Column(name = "tanggal_terbit")
    private LocalDate tanggalTerbit;

    @Column(name = "tanggal_kadaluarsa")
    private LocalDate tanggalKadaluarsa;

    @Column(name = "file_url", length = 500)
    private String fileUrl;

    @Column(name = "keterangan", columnDefinition = "TEXT")
    private String keterangan;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
