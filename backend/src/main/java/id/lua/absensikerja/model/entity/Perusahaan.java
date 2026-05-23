package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.ZonaWaktu;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * Merepresentasikan satu perusahaan yang didaftarkan oleh PEMILIK.
 * Satu PEMILIK → satu Perusahaan (OneToOne via owner).
 * Satu Perusahaan → banyak Divisi dan banyak Karyawan.
 */
@Entity
@Table(name = "perusahaan")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Perusahaan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nama_perusahaan", nullable = false, length = 150)
    private String namaPerusahaan;

    @Column(name = "whatsapp", length = 20)
    private String whatsapp;

    @Enumerated(EnumType.STRING)
    @Column(name = "zona_waktu", nullable = false, length = 10)
    @Builder.Default
    private ZonaWaktu zonaWaktu = ZonaWaktu.WIB;

    @Column(name = "jabatan_pemilik", length = 50)
    private String jabatanPemilik;

    @Column(name = "fitur_kebutuhan", columnDefinition = "TEXT")
    private String fiturKebutuhan;

    /** Akun user yang mendaftarkan perusahaan ini (role PEMILIK). */
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false, unique = true)
    private User owner;

    @Column(name = "created_at", nullable = false, updatable = false)
    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();
}
