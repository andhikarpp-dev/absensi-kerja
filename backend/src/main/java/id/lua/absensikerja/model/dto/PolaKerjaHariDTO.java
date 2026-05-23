package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.HariKerja;
import id.lua.absensikerja.model.enums.PolaHariKerja;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PolaKerjaHariDTO {
    private Long        id;
    private HariKerja   hari;
    private PolaHariKerja polaHari;
    private String      jamMasuk;
    private String      jamKeluar;
    private String      mulaiIstirahat;
    private String      selesaiIstirahat;
    private Integer     maksMenitIstirahat;
    private Integer     totalJamKerjaDibutuhkan; // khusus JAM_FLEKSIBEL
}
