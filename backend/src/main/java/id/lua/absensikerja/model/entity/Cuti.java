package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.SesiSetengahHari;
import id.lua.absensikerja.model.enums.StatusIzin;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "cuti")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Cuti {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_cuti", length = 20, nullable = false)
    private JenisCuti jenisCuti;

    @Column(name = "tanggal_mulai", nullable = false)
    private LocalDate tanggalMulai;

    @Column(name = "tanggal_selesai", nullable = false)
    private LocalDate tanggalSelesai;

    /** Jumlah hari (bisa 0.5 untuk setengah hari). */
    @Column(name = "jumlah_hari", nullable = false)
    private Double jumlahHari;

    @Enumerated(EnumType.STRING)
    @Column(name = "sesi_setengah_hari", length = 10)
    private SesiSetengahHari sesiSetengahHari;

    @Column(name = "keperluan", columnDefinition = "TEXT", nullable = false)
    private String keperluan;

    @Column(name = "lampiran_url")
    private String lampiranUrl;

    /** Apakah cuti ini mengurangi sisa cuti karyawan? (Tahunan & Setengah Hari = true; Khusus default false). */
    @Column(name = "mengurangi_sisa_cuti", nullable = false)
    @Builder.Default
    private boolean mengurangiSisaCuti = true;

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
