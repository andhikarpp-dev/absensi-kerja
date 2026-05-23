package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class KaryawanDTO {

    private Long id;

    // ── Foto Profil ─────────────────────────────────────────
    private String fotoProfil;

    // ── Data Pribadi ─────────────────────────────────────────
    private String namaLengkap;
    private String tempatLahir;
    private LocalDate tanggalLahir;
    private JenisKelamin jenisKelamin;
    private GolonganDarah golonganDarah;
    private StatusPerkawinan statusPerkawinan;
    private Agama agama;

    // ── Identitas ─────────────────────────────────────────
    private JenisIdentitas jenisIdentitas;
    private String nomorIdentitas;

    // ── Alamat ────────────────────────────────────────────
    private String alamatKtp;
    private Long provinsiId;
    private String namaProvinsi;
    private Long kabupatenKotaId;
    private String namaKabupatenKota;
    private String alamatDomisili;

    // ── Kontak ─────────────────────────────────────────────
    private String noTelepon;
    private ZonaWaktu zonaWaktu;
    private String catatan;

    // ── Pendidikan ─────────────────────────────────────────
    private JenjangPendidikan jenjangPendidikan;
    private String jurusan;
    private String namaInstitusi;
    private Integer tahunLulus;

    // ── Data Kepegawaian ───────────────────────────────────
    private String nip;
    private Long jabatanId;
    private String namaJabatan;
    private Long divisiId;
    private String namaDivisi;
    private StatusKerja statusKerja;
    private LocalDate tglMulaiBekerja;
    private LocalDate tglMulaiDapatCuti;
    private Integer sisaCuti;
    private LocalDate tglCutiBeakhir;

    // ── Pembaruan Cuti Otomatis ────────────────────────────
    private boolean pembaruanCutiAktif;
    private LocalDate tglPembaruanBerikutnya;

    // ── Soft Delete ────────────────────────────────────────
    private boolean isDeleted;
    private java.time.LocalDateTime deletedAt;

    // ── Akun User ──────────────────────────────────────────
    private Long userId;
    private String email;
    private String username;
}
