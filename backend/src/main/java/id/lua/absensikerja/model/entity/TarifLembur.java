package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tarif_lembur")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TarifLembur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id", nullable = false)
    private Perusahaan perusahaan;

    @Column(name = "jam_lembur", nullable = false)
    private int jamLembur;

    @Column(name = "hari_kerja", nullable = false)
    private double hariKerja;

    @Column(name = "hari_libur_5_hari_kerja", nullable = false)
    private double hariLibur5HariKerja;

    @Column(name = "hari_libur_6_hari_kerja", nullable = false)
    private double hariLibur6HariKerja;
}
