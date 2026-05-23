package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class KaryawanRequest {

    // ── Foto Profil ─────────────────────────────────────────
    /** Path/URL foto setelah di-upload, atau null jika belum ada */
    private String fotoProfil;

    // ── Data Pribadi ─────────────────────────────────────────
    @NotBlank(message = "Nama lengkap tidak boleh kosong")
    @Size(max = 100, message = "Nama lengkap maksimal 100 karakter")
    private String namaLengkap;

    @Size(max = 100, message = "Tempat lahir maksimal 100 karakter")
    private String tempatLahir;

    private LocalDate tanggalLahir;

    @NotNull(message = "Jenis kelamin tidak boleh kosong")
    private JenisKelamin jenisKelamin;

    private GolonganDarah golonganDarah;

    private StatusPerkawinan statusPerkawinan;

    private Agama agama;

    // ── Identitas ─────────────────────────────────────────
    private JenisIdentitas jenisIdentitas;

    @Size(max = 50, message = "Nomor identitas maksimal 50 karakter")
    private String nomorIdentitas;

    // ── Alamat ────────────────────────────────────────────
    private String alamatKtp;

    private Long provinsiId;

    private Long kabupatenKotaId;

    private String alamatDomisili;

    // ── Kontak ─────────────────────────────────────────────
    @Size(max = 20, message = "No telepon maksimal 20 karakter")
    private String noTelepon;

    @NotNull(message = "Zona waktu tidak boleh kosong")
    private ZonaWaktu zonaWaktu = ZonaWaktu.WIB;

    private String catatan;

    // ── Pendidikan ─────────────────────────────────────────
    private JenjangPendidikan jenjangPendidikan;

    @Size(max = 100, message = "Jurusan maksimal 100 karakter")
    private String jurusan;

    @Size(max = 150, message = "Nama institusi maksimal 150 karakter")
    private String namaInstitusi;

    @Min(value = 1900, message = "Tahun lulus tidak valid")
    @Max(value = 2100, message = "Tahun lulus tidak valid")
    private Integer tahunLulus;

    // ── Data Kepegawaian ───────────────────────────────────
    @NotBlank(message = "NIP tidak boleh kosong")
    @Size(max = 20, message = "NIP maksimal 20 karakter")
    private String nip;

    private Long jabatanId;

    private Long divisiId;

    private StatusKerja statusKerja = StatusKerja.AKTIF;

    private LocalDate tglMulaiBekerja;

    private LocalDate tglMulaiDapatCuti;

    private Integer sisaCuti = 0;

    private LocalDate tglCutiBeakhir;

    // ── Akun User ──────────────────────────────────────────
    @NotBlank(message = "Email tidak boleh kosong")
    @Email(message = "Format email tidak valid")
    @Size(max = 100, message = "Email maksimal 100 karakter")
    private String email;

    /** Wajib saat create; opsional saat update (kosong = tidak ganti sandi) */
    @Size(min = 6, message = "Kata sandi minimal 6 karakter")
    private String password;

    @Size(min = 6, message = "Ulangi kata sandi minimal 6 karakter")
    private String konfirmasiPassword;
}
