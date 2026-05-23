package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data @Builder
public class KunjunganKlienDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaKaryawan;
    private String        fotoProfil;
    private String        namaDivisi;
    private String        zonaWaktu;
    private Long          klienId;
    private String        namaKlien;
    private LocalDateTime waktuMulai;
    private LocalDateTime waktuSelesai;
    private BigDecimal    lokasiMulaiLat;
    private BigDecimal    lokasiMulaiLng;
    private BigDecimal    lokasiSelesaiLat;
    private BigDecimal    lokasiSelesaiLng;
    private String        fotoMulai;
    private String        fotoSelesai;
    private String        catatan;
    private Integer       totalJarak;
    private String        penjualanProduk;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
