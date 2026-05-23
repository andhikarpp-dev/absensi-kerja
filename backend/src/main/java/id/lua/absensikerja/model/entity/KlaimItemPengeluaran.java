package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "klaim_item_pengeluaran")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KlaimItemPengeluaran {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "klaim_id", nullable = false)
    private Klaim klaim;

    @Column(name = "keterangan", nullable = false, columnDefinition = "TEXT")
    private String keterangan;

    @Column(name = "jumlah", nullable = false, precision = 15, scale = 2)
    private BigDecimal jumlah;
}
