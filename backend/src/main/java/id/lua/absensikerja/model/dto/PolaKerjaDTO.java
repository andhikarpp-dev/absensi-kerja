package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisJadwal;
import id.lua.absensikerja.model.enums.KategoriPolaKerja;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PolaKerjaDTO {
    private Long          id;
    /** Daftar divisi yang memakai pola ini */
    private Set<Long>     divisiIds;
    private String        namaPolaKerja;
    private Integer       toleransiKeterlambatan;
    private JenisJadwal   jenisJadwal;
    private KategoriPolaKerja kategori;
    private String        warna;
    private String        catatan;
    private List<PolaKerjaHariDTO> hariList;
}
