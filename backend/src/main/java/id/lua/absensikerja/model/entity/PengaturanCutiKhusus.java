package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

/**
 * Konfigurasi jenis Cuti Khusus per perusahaan (atau global untuk ADMIN).
 */
@Entity
@Table(name = "pengaturan_cuti_khusus")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanCutiKhusus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Null = pengaturan global (ADMIN tanpa perusahaan). */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @Column(name = "nama", nullable = false, length = 150)
    private String nama;

    /** Maks. hari per request (wajib diisi). */
    @Column(name = "maks_hari_per_request")
    private Integer maksHariPerRequest;

    /** Maks. berapa kali boleh request per tahun (null = tak dibatasi). */
    @Column(name = "maks_request_per_tahun")
    private Integer maksRequestPerTahun;

    /** Maks. hari yang dikonsumsi per tahun (null = tak dibatasi). */
    @Column(name = "maks_hari_per_tahun")
    private Integer maksHariPerTahun;

    @Column(name = "aktif", nullable = false)
    @Builder.Default
    private boolean aktif = true;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
