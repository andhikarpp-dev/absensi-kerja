package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "kabupaten_kota")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class KabupatenKota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nama_kabupaten_kota", nullable = false, length = 100)
    private String namaKabupatenKota;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "provinsi_id", nullable = false)
    private Provinsi provinsi;
}
