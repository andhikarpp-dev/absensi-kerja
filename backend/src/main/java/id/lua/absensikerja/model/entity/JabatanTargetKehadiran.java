package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "jabatan_target_kehadiran")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class JabatanTargetKehadiran {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "jabatan_id", nullable = false)
    private Jabatan jabatan;

    @Column(name = "nama_lokasi", nullable = false, length = 100)
    private String namaLokasi;

    /** Target kehadiran dalam persen (0–100) */
    @Column(name = "target_persen", nullable = false)
    @Builder.Default
    private Integer targetPersen = 0;
}
