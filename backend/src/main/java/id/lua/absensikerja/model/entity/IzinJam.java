package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusIzin;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "izin_jam")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class IzinJam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @OneToMany(mappedBy = "izinJam", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<IzinJamRiwayat> riwayatList = new ArrayList<>();

    @Column(name = "tanggal_mulai", nullable = false)
    private LocalDate tanggalMulai;

    @Column(name = "jam_mulai", nullable = false)
    private LocalTime jamMulai;

    @Column(name = "tanggal_selesai", nullable = false)
    private LocalDate tanggalSelesai;

    @Column(name = "jam_selesai", nullable = false)
    private LocalTime jamSelesai;

    /** Durasi izin dalam menit */
    @Column(name = "durasi_menit")
    private Integer durasiMenit;

    /** Jam pengganti (opsional) */
    @Column(name = "jam_pengganti")
    private LocalTime jamPengganti;

    @Column(name = "dapat_mengganti", nullable = false)
    @Builder.Default
    private boolean dapatMengganti = false;

    @Column(name = "kena_potong", nullable = false)
    @Builder.Default
    private boolean kenaPotong = false;

    @Column(name = "kena_denda", nullable = false)
    @Builder.Default
    private boolean kenaDenda = false;

    @Column(name = "keperluan", columnDefinition = "TEXT")
    private String keperluan;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20, nullable = false)
    @Builder.Default
    private StatusIzin status = StatusIzin.MENUNGGU;

    @Column(name = "catatan_penolakan", columnDefinition = "TEXT")
    private String catatanPenolakan;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
