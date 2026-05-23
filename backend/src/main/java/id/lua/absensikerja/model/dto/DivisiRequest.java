package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.CatatanPresensi;
import id.lua.absensikerja.model.enums.SistemKerja;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class DivisiRequest {

    @NotBlank(message = "Nama divisi tidak boleh kosong")
    @Size(max = 100, message = "Nama divisi maksimal 100 karakter")
    private String namaDivisi;

    // Denda & sistem kerja
    private boolean dendaKeterlambatan = false;

    @NotNull(message = "Sistem kerja harus dipilih")
    private SistemKerja sistemKerja;

    // Catatan presensi
    @NotNull(message = "Catatan masuk harus dipilih")
    private CatatanPresensi catatanMasuk;

    @Size(max = 100)
    private String catatanMasukLabel;

    @Size(max = 255)
    private String catatanMasukPlaceholder;

    @NotNull(message = "Catatan keluar harus dipilih")
    private CatatanPresensi catatanKeluar;

    @Size(max = 100)
    private String catatanKeluarLabel;

    @Size(max = 255)
    private String catatanKeluarPlaceholder;

    @NotNull(message = "Catatan mulai lembur harus dipilih")
    private CatatanPresensi catatanMulaiLembur;

    @Size(max = 100)
    private String catatanMulaiLemburLabel;

    @Size(max = 255)
    private String catatanMulaiLemburPlaceholder;

    @NotNull(message = "Catatan selesai lembur harus dipilih")
    private CatatanPresensi catatanSelesaiLembur;

    @Size(max = 100)
    private String catatanSelesaiLemburLabel;

    @Size(max = 255)
    private String catatanSelesaiLemburPlaceholder;

    // Lokasi (multi-checkbox)
    private boolean lokasiMasuk              = false;
    private boolean lokasiIstirahat          = false;
    private boolean lokasiSelesaiIstirahat   = false;
    private boolean lokasiKeluar             = false;
    private boolean lokasiLembur             = false;
    private boolean lokasiSelesaiLembur      = false;
    private boolean lokasiPertamaKali        = false;
    private boolean lokasiDiLuar             = false;
    private boolean lokasiPerangkatBerbeda   = false;
    private boolean lokasiFotoSelfieBermasalah = false;

    // Supervisor
    private Long supervisorId;

    // Supervisi list + BCC global
    private java.util.List<SupervisiItemDTO> supervisiList = new java.util.ArrayList<>();

    @Size(max = 255)
    private String bccGlobal;

    // Pembatasan presensi
    // Pembatasan presensi - Presensi Masuk
    @Min(value = 0, message = "Menit tidak boleh negatif")
    private Integer menitSebelumMasuk = 0;

    @Min(value = 0, message = "Menit tidak boleh negatif")
    private Integer menitSetelahMasuk = 0;

    private boolean cegahPresensiKalenderLibur = false;
    private boolean cegahPresensiJadwalLibur   = false;

    // Pembatasan presensi - Presensi Keluar
    @Min(value = 0, message = "Menit tidak boleh negatif")
    private Integer menitSetelahJadwalKeluar = 0;

    // Pembatasan presensi - Presensi Lembur
    private boolean cegahPresensiLemburTanpaJadwal = false;

    // Fitur on/off
    private boolean validasiPerangkat      = false;
    private boolean presensiKeluarOtomatis = false;
    private boolean dendaTerlambatKeluar   = false;
    private boolean kunjunganKlien         = false;

    // Cuti
    @Min(0) private Integer minimalHariSebelumCuti = 0;
    @Min(0) private Integer maksHariPerRequest     = 0;
    @Min(0) private Integer maksRequestPerBulan    = 0;
}
