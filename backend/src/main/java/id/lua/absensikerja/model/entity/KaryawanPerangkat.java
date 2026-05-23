package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_perangkat",
       uniqueConstraints = @UniqueConstraint(columnNames = {"karyawan_id", "device_id"}))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanPerangkat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    /** Identifier unik perangkat (dikirim dari frontend/mobile) */
    @Column(name = "device_id", nullable = false, length = 255)
    private String deviceId;

    /** Nama perangkat, mis: "Infinix GT 10 Pro" */
    @Column(name = "nama_perangkat", length = 255)
    private String namaPerangkat;

    /** Model perangkat, mis: "Infinix X6739" */
    @Column(name = "model_perangkat", length = 100)
    private String modelPerangkat;

    /** Manufaktur, mis: "INFINIX" */
    @Column(name = "manufaktur", length = 100)
    private String manufaktur;

    /** Platform/OS, mis: "Android 13" */
    @Column(name = "platform", length = 100)
    private String platform;

    /** Terakhir kali digunakan untuk presensi */
    @Column(name = "terakhir_aktif")
    private LocalDateTime terakhirAktif;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
