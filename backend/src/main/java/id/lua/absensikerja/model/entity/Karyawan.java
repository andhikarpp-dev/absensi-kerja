package id.lua.absensikerja.model.entity;

import id.lua.absensikerja.model.enums.*;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "karyawan")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Karyawan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ── Foto Profil ─────────────────────────────────────────
    @Column(name = "foto_profil")
    private String fotoProfil;

    // ── Data Pribadi ─────────────────────────────────────────
    @Column(name = "nama_lengkap", nullable = false, length = 100)
    private String namaLengkap;

    @Column(name = "tempat_lahir", length = 100)
    private String tempatLahir;

    @Column(name = "tanggal_lahir")
    private LocalDate tanggalLahir;

    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_kelamin", nullable = false, length = 20, columnDefinition = "varchar(20) default 'LAKI_LAKI'")
    @Builder.Default
    private JenisKelamin jenisKelamin = JenisKelamin.LAKI_LAKI;

    @Enumerated(EnumType.STRING)
    @Column(name = "golongan_darah", length = 20)
    private GolonganDarah golonganDarah;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_perkawinan", length = 20)
    private StatusPerkawinan statusPerkawinan;

    @Enumerated(EnumType.STRING)
    @Column(name = "agama", length = 20)
    private Agama agama;

    // ── Identitas ─────────────────────────────────────────
    @Enumerated(EnumType.STRING)
    @Column(name = "jenis_identitas", length = 20)
    private JenisIdentitas jenisIdentitas;

    @Column(name = "nomor_identitas", length = 50)
    private String nomorIdentitas;

    // ── Alamat ────────────────────────────────────────────
    @Column(name = "alamat_ktp", columnDefinition = "TEXT")
    private String alamatKtp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "provinsi_id")
    private Provinsi provinsi;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "kabupaten_kota_id")
    private KabupatenKota kabupatenKota;

    @Column(name = "alamat_domisili", columnDefinition = "TEXT")
    private String alamatDomisili;

    // ── Kontak ─────────────────────────────────────────────
    @Column(name = "no_telepon", length = 20)
    private String noTelepon;

    @Enumerated(EnumType.STRING)
    @Column(name = "zona_waktu", nullable = false, length = 10, columnDefinition = "varchar(10) default 'WIB'")
    @Builder.Default
    private ZonaWaktu zonaWaktu = ZonaWaktu.WIB;

    @Column(name = "catatan", columnDefinition = "TEXT")
    private String catatan;

    // ── Pendidikan ─────────────────────────────────────────
    @Enumerated(EnumType.STRING)
    @Column(name = "jenjang_pendidikan", length = 20)
    private JenjangPendidikan jenjangPendidikan;

    @Column(name = "jurusan", length = 100)
    private String jurusan;

    @Column(name = "nama_institusi", length = 150)
    private String namaInstitusi;

    @Column(name = "tahun_lulus")
    private Integer tahunLulus;

    // ── Data Kepegawaian ───────────────────────────────────
    @Column(nullable = false, unique = true, length = 20)
    private String nip;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jabatan_id")
    private Jabatan jabatan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "divisi_id")
    private Divisi divisi;

    /** Perusahaan tempat karyawan ini bekerja. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "perusahaan_id")
    private Perusahaan perusahaan;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_kerja", length = 20)
    @Builder.Default
    private StatusKerja statusKerja = StatusKerja.AKTIF;

    @Column(name = "tgl_mulai_bekerja")
    private LocalDate tglMulaiBekerja;

    @Column(name = "tgl_mulai_dapat_cuti")
    private LocalDate tglMulaiDapatCuti;

    @Column(name = "sisa_cuti")
    @Builder.Default
    private Integer sisaCuti = 0;

    @Column(name = "tgl_cuti_berakhir")
    private LocalDate tglCutiBeakhir;

    // ── Pengaturan Pembaruan Sisa Cuti Otomatis ─────────────
    /** Apakah pembaruan sisa cuti otomatis diaktifkan. */
    @Column(name = "pembaruan_cuti_aktif", nullable = false,
            columnDefinition = "boolean default false")
    @Builder.Default
    private boolean pembaruanCutiAktif = false;

    /** Periode pembaruan dalam bulan (mis. 12 = 12 bulan sekali). */
    @Column(name = "periode_pembaruan_bulan",
            columnDefinition = "integer default 12")
    @Builder.Default
    private Integer periodePembaruanBulan = 12;

    /** Jumlah cuti yang ditambahkan setiap pembaruan. */
    @Column(name = "jumlah_cuti_pembaruan",
            columnDefinition = "integer default 12")
    @Builder.Default
    private Integer jumlahCutiPembaruan = 12;

    /** Apakah sisa cuti sebelumnya tetap ditambahkan saat pembaruan. */
    @Column(name = "tambahkan_sisa_cuti_sebelumnya", nullable = false,
            columnDefinition = "boolean default false")
    @Builder.Default
    private boolean tambahkanSisaCutiSebelumnya = false;

    /** Tanggal pembaruan otomatis berikutnya. */
    @Column(name = "tgl_pembaruan_berikutnya")
    private LocalDate tglPembaruanBerikutnya;

    /** Kuota dokumen berbayar yang telah dibeli/ditambahkan. */
    @Column(name = "kuota_dokumen_berbayar", nullable = false, columnDefinition = "bigint default 0")
    @Builder.Default
    private long kuotaDokumenBerbayar = 0L;

    // ── Soft Delete ─────────────────────────────────────────
    @Column(name = "is_deleted", nullable = false, columnDefinition = "boolean default false")
    @Builder.Default
    private boolean isDeleted = false;

    @Column(name = "deleted_at")
    private java.time.LocalDateTime deletedAt;

    // ── Relasi ke User (akun login) ────────────────────────
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", unique = true)
    private User user;
}
