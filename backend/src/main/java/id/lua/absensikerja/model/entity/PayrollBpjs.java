package id.lua.absensikerja.model.entity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
@Entity
@Table(name = "payroll_bpjs")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PayrollBpjs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false, unique = true)
    private Karyawan karyawan;
    // BPJS Ketenagakerjaan
    @Column(name = "tk_tanggal_kepesertaan")
    private LocalDate tkTanggalKepesertaan;
    @Column(name = "tk_nomor", length = 100)
    private String tkNomor;
    @Column(name = "tk_upah_didaftarkan", precision = 15, scale = 2)
    @Builder.Default
    private BigDecimal tkUpahDidaftarkan = BigDecimal.ZERO;
    // BPJS Kesehatan
    @Column(name = "kes_tanggal_kepesertaan")
    private LocalDate kesTanggalKepesertaan;
    @Column(name = "kes_nomor", length = 100)
    private String kesNomor;
    @Column(name = "kes_upah_didaftarkan", precision = 15, scale = 2)
    @Builder.Default
    private BigDecimal kesUpahDidaftarkan = BigDecimal.ZERO;
    @Column(name = "kes_anggota_keluarga_inti")
    @Builder.Default
    private Integer kesAnggotaKeluargaInti = 0;
    @Column(name = "kes_anggota_keluarga_tambahan")
    @Builder.Default
    private Integer kesAnggotaKeluargaTambahan = 0;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
