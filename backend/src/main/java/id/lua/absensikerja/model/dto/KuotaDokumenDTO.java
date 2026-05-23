package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KuotaDokumenDTO {
    private long totalGratis;
    private long kuotaGratis;
    private long totalBerbayar;
    private long kuotaBerbayar;
}
