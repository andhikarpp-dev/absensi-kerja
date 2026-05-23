package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_kontak_darurat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanKontakDarurat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "nama", nullable = false, length = 200)
    private String nama;

    @Column(name = "no_telepon", length = 50)
    private String noTelepon;


    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
