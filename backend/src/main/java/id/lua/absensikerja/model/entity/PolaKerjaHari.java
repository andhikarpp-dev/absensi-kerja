package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.HariKerja;
import id.lua.absensikerja.model.enums.PolaHariKerja;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "pola_kerja_hari")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PolaKerjaHari {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pola_kerja_id", nullable = false)
    private PolaKerja polaKerja;

    @Enumerated(EnumType.STRING)
    @Column(name = "hari", nullable = false, length = 10)
    private HariKerja hari;

    @Enumerated(EnumType.STRING)
    @Column(name = "pola_hari", nullable = false, length = 20)
    @Builder.Default
    private PolaHariKerja polaHari = PolaHariKerja.HARI_KERJA;

    @Column(name = "jam_masuk", length = 5)
    private String jamMasuk;          // format HH:mm

    @Column(name = "jam_keluar", length = 5)
    private String jamKeluar;

    @Column(name = "mulai_istirahat", length = 5)
    private String mulaiIstirahat;

    @Column(name = "selesai_istirahat", length = 5)
    private String selesaiIstirahat;

    @Column(name = "maks_menit_istirahat")
    @Builder.Default
    private Integer maksMenitIstirahat = 60;

    // Khusus Jam Fleksibel
    @Column(name = "total_jam_kerja_dibutuhkan")
    private Integer totalJamKerjaDibutuhkan;
}
