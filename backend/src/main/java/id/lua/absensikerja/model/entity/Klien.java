package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "klien")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Klien {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "perusahaan_id", nullable = false)
    private Perusahaan perusahaan;

    @Column(name = "nama_klien", nullable = false, length = 200)
    private String namaKlien;

    @Column(name = "alamat", columnDefinition = "TEXT")
    private String alamat;

    @Column(name = "telepon", length = 30)
    private String telepon;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "keterangan", columnDefinition = "TEXT")
    private String keterangan;

    @Column(name = "is_deleted", nullable = false, columnDefinition = "boolean default false")
    @Builder.Default
    private boolean isDeleted = false;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
