package id.lua.absensikerja.model.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class KunjunganKlienRequest {
    private Long          karyawanId;
    private Long          klienId;
    private LocalDateTime waktuMulai;
    private LocalDateTime waktuSelesai;
    private BigDecimal    lokasiMulaiLat;
    private BigDecimal    lokasiMulaiLng;
    private BigDecimal    lokasiSelesaiLat;
    private BigDecimal    lokasiSelesaiLng;
    private String        catatan;
    private Integer       totalJarak;
    private String        penjualanProduk;
}
