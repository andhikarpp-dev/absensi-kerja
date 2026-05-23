package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Riwayat pembayaran PPH 21 per periode (per bulan).
 */
@Entity
@Table(name = "payroll_pph21_riwayat", indexes = {
        @Index(name = "idx_pph21_riwayat_karyawan", columnList = "karyawan_id"),
        @Index(name = "idx_pph21_riwayat_periode",  columnList = "periode")
})
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PayrollPph21Riwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    /** Periode bulan & tahun (selalu disimpan dengan tanggal=1). */
    @Column(name = "periode", nullable = false)
    private LocalDate periode;

    @Column(name = "pendapatan_bruto", precision = 18, scale = 2)
    @Builder.Default
    private BigDecimal pendapatanBruto = BigDecimal.ZERO;

    @Column(name = "pph21_terutang", precision = 18, scale = 2)
    @Builder.Default
    private BigDecimal pph21Terutang = BigDecimal.ZERO;

    @Column(name = "dibayarkan", precision = 18, scale = 2)
    @Builder.Default
    private BigDecimal dibayarkan = BigDecimal.ZERO;

    @Column(name = "tanggal_bayar")
    private LocalDate tanggalBayar;

    /** LUNAS / BELUM_DIBAYAR / SEBAGIAN. */
    @Column(name = "status_pembayaran", length = 20)
    @Builder.Default
    private String statusPembayaran = "BELUM_DIBAYAR";

    @Column(name = "catatan", length = 500)
    private String catatan;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
