package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 150)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = "nama_lengkap", nullable = false, length = 100)
    private String namaLengkap;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "whatsapp", length = 20)
    private String whatsapp;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private boolean isActive = true;

    /** Token untuk verifikasi email — null jika sudah diverifikasi */
    @Column(name = "verification_token", length = 100)
    private String verificationToken;

}

