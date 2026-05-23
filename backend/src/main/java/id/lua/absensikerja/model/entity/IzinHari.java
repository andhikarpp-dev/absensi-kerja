package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusIzin;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "izin_hari")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class IzinHari {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @ElementCollection
    @CollectionTable(name = "izin_hari_tanggal",
            joinColumns = @JoinColumn(name = "izin_hari_id"))
    @Column(name = "tanggal", nullable = false)
    @OrderBy("tanggal ASC")
    @Builder.Default
    private List<LocalDate> tanggalList = new ArrayList<>();

    @Column(name = "keperluan", columnDefinition = "TEXT", nullable = false)
    private String keperluan;

    @Column(name = "mengurangi_gaji", nullable = false)
    @Builder.Default
    private boolean mengurangiGaji = false;

    /** Path relatif file lampiran, e.g. uploads/izin-hari/xxx.pdf */
    @Column(name = "lampiran_url")
    private String lampiranUrl;

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
