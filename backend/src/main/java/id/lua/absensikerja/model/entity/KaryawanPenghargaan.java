package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_penghargaan")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanPenghargaan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "nama_penghargaan", nullable = false, length = 200)
    private String namaPenghargaan;

    @Column(name = "penerbit", length = 200)
    private String penerbit;

    @Column(name = "tahun")
    private Integer tahun;

    @Column(name = "deskripsi", columnDefinition = "TEXT")
    private String deskripsi;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
