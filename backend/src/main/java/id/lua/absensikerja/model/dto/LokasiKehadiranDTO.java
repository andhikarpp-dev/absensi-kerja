package id.lua.absensikerja.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LokasiKehadiranDTO {
    private Long          id;
    private Long          perusahaanId;
    private String        namaLokasi;
    private String        alamat;
    private BigDecimal    latitude;
    private BigDecimal    longitude;
    private Integer       radiusMeter;
    private boolean       aktif;

    /** SEMUA / DIVISI / KARYAWAN */
    private String        targetTipe;
    private List<RefDTO>  divisiTugas;
    private List<RefDTO>  karyawanTugas;

    private boolean       hanyaFingerspot;
    private String        fingerspotSn;
    private String        fingerspotIp;
    private Integer       fingerspotPort;
    private String        fingerspotCatatan;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RefDTO {
        private Long   id;
        private String nama;
    }
}
