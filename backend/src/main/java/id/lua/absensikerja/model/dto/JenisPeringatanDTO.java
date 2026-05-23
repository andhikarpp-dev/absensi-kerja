package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

@Data @Builder
public class JenisPeringatanDTO {
    private Long    id;
    private String  kode;
    private String  nama;
    private String  deskripsi;
    private boolean aktif;
}
