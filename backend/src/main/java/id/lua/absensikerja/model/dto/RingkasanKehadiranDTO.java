package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RingkasanKehadiranDTO {

    // ── Kolom Kiri ──────────────────────────────────────────
    private int     totalHariJadwalKerja;
    private int     totalHariKehadiran;
    private int     totalHariTidakMasuk;
    private int     totalHariCuti;
    private int     totalHariIzin;
    private int     totalHariSakit;
    private double  persentaseKehadiran;

    /** Target kehadiran jabatan dalam persen (null jika tidak dikonfigurasi) */
    private Integer targetKehadiranJabatan;

    /** Total jam jadwal kerja dalam menit */
    private long    totalMenitJadwalKerja;

    /** Total jam kerja aktual (masuk → keluar dikurangi istirahat) dalam menit */
    private long    totalMenitKerja;

    /** Persentase capaian jam kerja */
    private double  persentaseCapaianJamKerja;

    /** Total menit istirahat */
    private long    totalMenitIstirahat;

    /** Total menit lembur */
    private long    totalMenitLembur;

    /** Total hari openshift (placeholder = 0) */
    private int     totalHariOpenshift;

    // ── Kolom Kanan ─────────────────────────────────────────

    /** Total menit keterlambatan */
    private long    totalMenitTerlambat;

    /** Jumlah hari dengan keterlambatan masuk */
    private int     totalHariTerlambat;

    /** Total denda keterlambatan (Rp) — placeholder 0 */
    private long    totalDendaKeterlambatan;

    /** Total hari terlambat presensi keluar — placeholder 0 */
    private int     totalHariTerlambatPresensiKeluar;

    /** Total denda terlambat presensi keluar (Rp) — placeholder 0 */
    private long    totalDendaTerlambatPresensiKeluar;

    /** Total menit toleransi yang terpakai */
    private long    totalMenitToleransi;

    /** Total hari toleransi */
    private int     totalHariToleransi;

    /** Total menit izin jam — placeholder 0 */
    private long    totalMenitIzinJam;

    /** Total menit izin jam belum diganti — placeholder 0 */
    private long    totalMenitIzinJamBelumDiganti;

    /** Total hari presensi keluar otomatis — placeholder 0 */
    private int     totalHariPresensiKeluarOtomatis;

    /** Menit jam kerja tidak terpenuhi (jadwal – aktual, jika aktual < jadwal) */
    private long    menitJamKerjaTidakTerpenuhi;
}
