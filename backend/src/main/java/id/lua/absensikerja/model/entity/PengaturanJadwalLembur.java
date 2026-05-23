package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "pengaturan_jadwal_lembur")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanJadwalLembur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id", nullable = false, unique = true)
    private Perusahaan perusahaan;

    @Column(name = "cegah_presensi_tanpa_jadwal", nullable = false)
    @Builder.Default
    private boolean cegahPresensiTanpaJadwal = false;

    @Column(name = "kirim_notifikasi_jadwal", nullable = false)
    @Builder.Default
    private boolean kirimNotifikasiJadwal = true;

    @Column(name = "menit_sebelum_jadwal")
    private Integer menitSebelumJadwal;
}
