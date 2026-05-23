package id.lua.absensikerja.model.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PengaturanLokasiKehadiranDTO {
    private boolean spvDapatMenambahLokasi;
    private boolean spvDapatMemperbaruiLokasi;
    private int     kuotaLokasi;
}
