package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "jenis_peringatan",
       uniqueConstraints = @UniqueConstraint(columnNames = "kode"))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class JenisPeringatan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "kode", nullable = false, length = 30)
    private String kode;          // mis. SP1, SP2, SP3

    @Column(name = "nama", nullable = false, length = 100)
    private String nama;

    @Column(name = "deskripsi", columnDefinition = "TEXT")
    private String deskripsi;

    @Column(name = "aktif", nullable = false)
    @Builder.Default
    private boolean aktif = true;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
