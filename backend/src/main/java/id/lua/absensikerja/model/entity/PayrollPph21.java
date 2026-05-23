package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

/**
 * Pengaturan PPH 21 per karyawan.
 * One-to-one dengan Karyawan.
 */
@Entity
@Table(name = "payroll_pph21")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PayrollPph21 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false, unique = true)
    private Karyawan karyawan;

    /** NON_PKP atau PKP. */
    @Column(name = "status_pkp", length = 20)
    @Builder.Default
    private String statusPkp = "NON_PKP";

    @Column(name = "npwp", length = 30)
    private String npwp;

    /** Status PTKP. Contoh: TK/0, TK/1, K/0, K/1, K/2, K/3. */
    @Column(name = "status_ptkp", length = 10)
    @Builder.Default
    private String statusPtkp = "TK/0";

    @Column(name = "jumlah_tanggungan")
    @Builder.Default
    private Integer jumlahTanggungan = 0;

    /** GROSS / GROSS_UP / NET. */
    @Column(name = "metode_pph", length = 20)
    @Builder.Default
    private String metodePph = "GROSS";

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
