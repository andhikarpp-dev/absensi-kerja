package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.AbsensiDTO;
import id.lua.absensikerja.model.dto.RekapCatatanPresensiDTO;
import id.lua.absensikerja.model.dto.ReviewLemburDTO;
import id.lua.absensikerja.model.dto.RiwayatHapusLemburDTO;
import id.lua.absensikerja.model.dto.RingkasanKehadiranDTO;

import java.time.LocalDate;
import java.util.List;

public interface AbsensiService {

    /** Status absensi hari ini untuk user yang sedang login. */
    AbsensiDTO getHariIni(Long userId);

    /** Riwayat absensi bulan berjalan (atau semua jika admin). */
    List<AbsensiDTO> getRiwayat(Long userId, int bulan, int tahun);

    /** Check-in: buat record absensi baru hari ini. */
    AbsensiDTO checkIn(Long userId, String catatan, String fotoPath,
                       String deviceId, String namaPerangkat,
                       String modelPerangkat, String manufaktur, String platform,
                       Double lat, Double lng);

    /** Check-out: isi jam keluar. */
    AbsensiDTO checkOut(Long userId, String catatan, Double lat, Double lng);

    // ── Admin endpoints ───────────────────────────────────────
    /** Riwayat absensi karyawan tertentu (by karyawanId) untuk admin */
    List<AbsensiDTO> getRiwayatByKaryawan(Long karyawanId, int bulan, int tahun);

    /** Tambah presensi manual oleh admin */
    AbsensiDTO tambahManual(Long karyawanId, LocalDate tanggal,
                             String tipePresensi,
                             String waktuMulai, String waktuSelesai,
                             String catatan);

    /** Ringkasan kehadiran karyawan tertentu untuk rentang bulan/tahun (admin) */
    RingkasanKehadiranDTO getRingkasanByKaryawan(Long karyawanId, int bulan, int tahun);

    /** Ringkasan kehadiran semua karyawan untuk rentang tanggal (admin) */
    List<RingkasanKehadiranRow> getRingkasanSemua(LocalDate dari, LocalDate sampai, Long divisiId, String cari);

    /** Semua absensi karyawan pada tanggal tertentu (admin - kehadiran harian) */
    List<AbsensiDTO> getKehadiranHarian(LocalDate tanggal);

    /** Batalkan presensi (hapus record absensi) — admin */
    void batalkanPresensi(Long absensiId);

    /** Ubah waktu presensi (jam masuk / jam keluar) — admin */
    AbsensiDTO ubahWaktuPresensi(Long absensiId, String jamMasuk, String jamKeluar);

    // ── Review Kehadiran ──────────────────────────────────────
    /** Daftar presensi yang perlu dicek (perlu_dicek=true & sudah_dicek=false) */
    List<AbsensiDTO> getReviewPerluDicek(Long divisiId, String cari);

    /** Daftar presensi yang sudah dicek */
    List<AbsensiDTO> getReviewSudahDicek(Long divisiId, String cari);

    /** Tandai satu presensi sebagai perlu dicek (manual/admin) */
    AbsensiDTO tandaiPerluDicek(Long absensiId, String alasan);

    /** Tandai satu presensi sebagai sudah dicek */
    AbsensiDTO tandaiSudahDicek(Long absensiId);

    /** Tandai semua presensi perlu dicek sebagai sudah dicek */
    int tandaiSemuaSudahDicek(Long divisiId);

    /** Rekap catatan presensi mingguan — tampilan matrix per karyawan per hari */
    RekapCatatanPresensiDTO getRekapCatatanPresensi(LocalDate tanggalDalamMinggu, Long divisiId, String cari, Long userId);

    // ── Review Lembur ─────────────────────────────────────────
    /** Daftar absensi yang memiliki jam lembur */
    List<ReviewLemburDTO> getLembur(LocalDate dari, LocalDate sampai, Long divisiId, String cari, Long userId);

    /** Hapus data lembur (reset jam_mulai_lembur & jam_selesai_lembur) */
    ReviewLemburDTO hapusLembur(Long absensiId, Long userId);

    /** Riwayat penolakan / hapus lembur */
    List<RiwayatHapusLemburDTO> getRiwayatHapusLembur(Long divisiId, String cari, Long userId);
}
