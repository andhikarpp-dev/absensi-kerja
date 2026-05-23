package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_background_pendidikan")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanBackgroundPendidikan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    /** Tingkat pendidikan: SD, SMP, SMA_SMK, D1, D2, D3, D4, S1, S2, S3 */
    @Column(name = "tingkat_pendidikan", nullable = false, length = 20)
    private String tingkatPendidikan;

    @Column(name = "nama_institusi", nullable = false, length = 150)
    private String namaInstitusi;

    @Column(name = "jurusan", length = 100)
    private String jurusan;

    @Column(name = "tahun_masuk")
    private Integer tahunMasuk;

    @Column(name = "tahun_lulus")
    private Integer tahunLulus;

    /** Nilai akhir / IPK */
    @Column(name = "nilai", length = 20)
    private String nilai;

    @Column(name = "keterangan", columnDefinition = "TEXT")
    private String keterangan;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
