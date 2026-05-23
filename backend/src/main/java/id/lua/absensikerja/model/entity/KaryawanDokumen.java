package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.StatusKuotaDokumen;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_dokumen")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanDokumen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "nama_dokumen", nullable = false, length = 200)
    private String namaDokumen;

    @Column(name = "nama_berkas", length = 255)
    private String namaBerkas;

    @Column(name = "path_berkas", length = 500)
    private String pathBerkas;

    @Column(name = "ukuran_berkas")
    private Long ukuranBerkas;

    @Column(name = "tanggal_upload")
    private LocalDateTime tanggalUpload;

    @Column(name = "tanggal_berakhir")
    private LocalDate tanggalBerakhir;

    @Column(name = "hari_reminder")
    private Integer hariReminder;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_kuota", nullable = false, length = 20)
    private StatusKuotaDokumen statusKuota;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
