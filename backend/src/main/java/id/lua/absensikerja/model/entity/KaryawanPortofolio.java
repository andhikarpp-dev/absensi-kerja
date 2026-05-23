package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_portofolio")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanPortofolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "judul", nullable = false, length = 200)
    private String judul;

    @Column(name = "url_link", length = 500)
    private String urlLink;

    @Column(name = "deskripsi", columnDefinition = "TEXT")
    private String deskripsi;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
