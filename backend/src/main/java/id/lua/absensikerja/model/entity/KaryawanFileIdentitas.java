package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.JenisIdentitasTambahan;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "karyawan_file_identitas")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KaryawanFileIdentitas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_identitas", nullable = false, length = 30)
    private JenisIdentitasTambahan jenisIdentitas;

    @Column(name = "nomor", nullable = false, length = 100)
    private String nomor;

    /** Path relatif file yang disimpan di server, mis: uploads/identitas/xxx.pdf */
    @Column(name = "file_url", length = 255)
    private String fileUrl;

    /** Nama asli file yang diupload */
    @Column(name = "nama_file", length = 255)
    private String namaFile;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
