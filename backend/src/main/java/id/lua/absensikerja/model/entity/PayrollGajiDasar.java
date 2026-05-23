package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "payroll_gaji_dasar")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PayrollGajiDasar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false, unique = true)
    private Karyawan karyawan;

    @Column(name = "tipe_gaji", length = 20, nullable = false)
    @Builder.Default
    private String tipeGaji = "PER_BULAN";

    @Column(name = "tipe_upah_lembur", length = 100)
    private String tipeUpahLembur;

    @Column(name = "satuan_lembur", length = 20)
    @Builder.Default
    private String satuanLembur = "PER_JAM";

    @Column(name = "lembur_hari_kerja")
    @Builder.Default
    private Double lemburHariKerja = 0.0;

    @Column(name = "lembur_sabtu")
    @Builder.Default
    private Double lemburSabtu = 0.0;

    @Column(name = "lembur_minggu")
    @Builder.Default
    private Double lemburMinggu = 0.0;

    @Column(name = "lembur_kalender_libur")
    @Builder.Default
    private Double lemburKalenderLibur = 0.0;

    @Column(name = "potongan_izin_jam")
    @Builder.Default
    private Double potonganIzinJam = 0.0;

    @Column(name = "potongan_jam_kerja_tidak_terpenuhi")
    @Builder.Default
    private Double potonganJamKerjaTidakTerpenuhi = 0.0;

    @Column(name = "potongan_absen_otomatis")
    @Builder.Default
    private Boolean potonganAbsenOtomatis = true;

    @Column(name = "potongan_absen_manual")
    @Builder.Default
    private Boolean potonganAbsenManual = false;

    @OneToMany(mappedBy = "payrollGajiDasar", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("urutan ASC")
    @Builder.Default
    private List<PayrollRincianGaji> rincianGaji = new ArrayList<>();

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
