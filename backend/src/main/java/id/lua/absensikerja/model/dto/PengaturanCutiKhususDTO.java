package id.lua.absensikerja.model.dto;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PengaturanCutiKhususDTO {
    private Long    id;
    private String  nama;
    private Integer maksHariPerRequest;
    private Integer maksRequestPerTahun;
    private Integer maksHariPerTahun;
    private boolean aktif;
}
