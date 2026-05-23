package id.lua.absensikerja.model.dto;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanCutiSetengahHariDTO {
    private Long    id;
    private boolean aktif;
    private String  presensiMasukMode;
    private String  presensiMasukJam;
    private String  presensiKeluarMode;
    private String  presensiKeluarJam;
}
