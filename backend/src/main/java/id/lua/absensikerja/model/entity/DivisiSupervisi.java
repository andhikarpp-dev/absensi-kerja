package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "divisi_supervisi")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class DivisiSupervisi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "divisi_id", nullable = false)
    private Divisi divisi;

    @Column(name = "nama", length = 100)
    private String nama;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "bcc", length = 255)
    private String bcc;

    @Column(name = "urutan")
    private Integer urutan;
}
