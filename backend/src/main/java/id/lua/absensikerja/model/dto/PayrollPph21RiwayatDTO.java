package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class PayrollPph21RiwayatDTO {
    private Long          id;
    private Long          karyawanId;
    private LocalDate     periode;
    private BigDecimal    pendapatanBruto;
    private BigDecimal    pph21Terutang;
    private BigDecimal    dibayarkan;
    private LocalDate     tanggalBayar;
    private String        statusPembayaran;
    private String        catatan;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
