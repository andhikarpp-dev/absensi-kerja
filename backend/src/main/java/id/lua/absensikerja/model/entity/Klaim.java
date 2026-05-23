package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.JenisKlaim;
import id.lua.absensikerja.model.enums.StatusKlaim;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "klaim")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Klaim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_klaim", nullable = false, length = 30)
    private JenisKlaim jenisKlaim;

    @Column(name = "nominal", nullable = false, precision = 15, scale = 2)
    private BigDecimal nominal;

    @Column(name = "keterangan", columnDefinition = "TEXT")
    private String keterangan;

    /** Path relatif file lampiran */
    @Column(name = "lampiran_url", length = 500)
    private String lampiranUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private StatusKlaim status = StatusKlaim.MENUNGGU;

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @OneToMany(mappedBy = "klaim", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("id ASC")
    private List<KlaimItemPengeluaran> itemPengeluaran = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
