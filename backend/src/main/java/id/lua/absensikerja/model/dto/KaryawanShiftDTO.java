package id.lua.absensikerja.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class KaryawanShiftDTO {
    private Long id;
    private String nip;
    private String namaLengkap;
    private String fotoProfil;
    private Long divisiId;
    private String divisiNama;
    private Long jabatanId;
    private String jabatanNama;
}
