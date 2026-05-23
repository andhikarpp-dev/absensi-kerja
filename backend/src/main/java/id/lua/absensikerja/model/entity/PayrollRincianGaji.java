package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "payroll_rincian_gaji")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PayrollRincianGaji {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "payroll_gaji_dasar_id", nullable = false)
    private PayrollGajiDasar payrollGajiDasar;

    @Column(name = "urutan", nullable = false)
    @Builder.Default
    private Integer urutan = 0;

    @Column(name = "nama", nullable = false, length = 150)
    private String nama;

    @Column(name = "jumlah", nullable = false, precision = 15, scale = 2)
    @Builder.Default
    private BigDecimal jumlah = BigDecimal.ZERO;

    @Column(name = "periode", length = 30)
    @Builder.Default
    private String periode = "Perbulan";
}
