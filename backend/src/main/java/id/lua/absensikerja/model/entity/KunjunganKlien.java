package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "kunjungan_klien")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KunjunganKlien {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "klien_id", nullable = false)
    private Klien klien;

    @Column(name = "waktu_mulai")
    private LocalDateTime waktuMulai;

    @Column(name = "waktu_selesai")
    private LocalDateTime waktuSelesai;

    @Column(name = "lokasi_mulai_lat", precision = 10, scale = 7)
    private BigDecimal lokasiMulaiLat;

    @Column(name = "lokasi_mulai_lng", precision = 10, scale = 7)
    private BigDecimal lokasiMulaiLng;

    @Column(name = "lokasi_selesai_lat", precision = 10, scale = 7)
    private BigDecimal lokasiSelesaiLat;

    @Column(name = "lokasi_selesai_lng", precision = 10, scale = 7)
    private BigDecimal lokasiSelesaiLng;

    @Column(name = "foto_mulai", length = 500)
    private String fotoMulai;

    @Column(name = "foto_selesai", length = 500)
    private String fotoSelesai;

    @Column(name = "catatan", columnDefinition = "TEXT")
    private String catatan;

    /** Jarak dalam meter */
    @Column(name = "total_jarak")
    @Builder.Default
    private Integer totalJarak = 0;

    @Column(name = "penjualan_produk", columnDefinition = "TEXT")
    private String penjualanProduk;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
