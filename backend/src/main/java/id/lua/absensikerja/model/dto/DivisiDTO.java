package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.CatatanPresensi;
import id.lua.absensikerja.model.enums.SistemKerja;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class DivisiDTO {

    private Long id;
    private String namaDivisi;

    // Denda & sistem kerja
    private boolean dendaKeterlambatan;
    private SistemKerja sistemKerja;

    // Catatan presensi
    private CatatanPresensi catatanMasuk;
    private String catatanMasukLabel;
    private String catatanMasukPlaceholder;
    private CatatanPresensi catatanKeluar;
    private String catatanKeluarLabel;
    private String catatanKeluarPlaceholder;
    private CatatanPresensi catatanMulaiLembur;
    private String catatanMulaiLemburLabel;
    private String catatanMulaiLemburPlaceholder;
    private CatatanPresensi catatanSelesaiLembur;
    private String catatanSelesaiLemburLabel;
    private String catatanSelesaiLemburPlaceholder;

    // Lokasi
    private boolean lokasiMasuk;
    private boolean lokasiIstirahat;
    private boolean lokasiSelesaiIstirahat;
    private boolean lokasiKeluar;
    private boolean lokasiLembur;
    private boolean lokasiSelesaiLembur;
    private boolean lokasiPertamaKali;
    private boolean lokasiDiLuar;
    private boolean lokasiPerangkatBerbeda;
    private boolean lokasiFotoSelfieBermasalah;

    // Supervisor
    private Long supervisorId;
    private String supervisorNama;

    // Supervisi list + BCC global
    private List<SupervisiItemDTO> supervisiList;
    private String bccGlobal;

    // Pembatasan presensi
    private Integer menitSebelumMasuk;
    private Integer menitSetelahMasuk;
    private boolean cegahPresensiKalenderLibur;
    private boolean cegahPresensiJadwalLibur;
    // Presensi Keluar
    private Integer menitSetelahJadwalKeluar;
    // Presensi Lembur
    private boolean cegahPresensiLemburTanpaJadwal;

    // Fitur on/off
    private boolean validasiPerangkat;
    private boolean presensiKeluarOtomatis;
    private boolean dendaTerlambatKeluar;
    private boolean kunjunganKlien;

    // Cuti
    private Integer minimalHariSebelumCuti;
    private Integer maksHariPerRequest;
    private Integer maksRequestPerBulan;

    // Riwayat perubahan
    private List<DivisiRiwayatDTO> riwayatList;
}
