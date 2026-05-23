package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "provinsi")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Provinsi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nama_provinsi", nullable = false, unique = true, length = 100)
    private String namaProvinsi;
}
