package id.lua.absensikerja.model.dto;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanCutiSetengahHariRequest {
    private Boolean aktif;
    /** "jadwal" atau "manual" */
    private String  presensiMasukMode;
    /** HH:mm — wajib jika mode = "manual" */
    private String  presensiMasukJam;
    /** "jadwal" atau "manual" */
    private String  presensiKeluarMode;
    /** HH:mm — wajib jika mode = "manual" */
    private String  presensiKeluarJam;
}
