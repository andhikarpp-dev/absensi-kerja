package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.HariKerja;
import id.lua.absensikerja.model.enums.JenisJadwal;
import id.lua.absensikerja.model.enums.KategoriPolaKerja;
import id.lua.absensikerja.model.enums.PolaHariKerja;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class PolaKerjaRequest {

    /** ID divisi yang memakai pola ini (opsional, bisa kosong) */
    private Set<Long> divisiIds;

    @NotBlank(message = "Nama pola kerja tidak boleh kosong")
    @Size(max = 100)
    private String namaPolaKerja;

    @Min(0)
    private Integer toleransiKeterlambatan = 0;

    @NotNull
    private JenisJadwal jenisJadwal;

    /** Default HARI_KERJA agar request lama tetap kompatibel. */
    private KategoriPolaKerja kategori = KategoriPolaKerja.HARI_KERJA;

    /** Untuk shift: warna penanda (#RRGGBB). */
    private String warna;

    /** Untuk shift: catatan bebas. */
    private String catatan;

    private List<HariItem> hariList;

    @Data
    public static class HariItem {
        private HariKerja     hari;
        private PolaHariKerja polaHari;
        private String        jamMasuk;
        private String        jamKeluar;
        private String        mulaiIstirahat;
        private String        selesaiIstirahat;
        private Integer       maksMenitIstirahat = 60;
        private Integer       totalJamKerjaDibutuhkan; // khusus JAM_FLEKSIBEL
        private Integer       toleransiKeterlambatan;  // ubah toleransi di pola kerja parent
    }
}
