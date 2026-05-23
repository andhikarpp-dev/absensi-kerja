package id.lua.absensikerja.model.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class PayrollPph21RiwayatRequest {
    /** Periode bulan-tahun. Frontend mengirim tanggal=1 atau format yyyy-MM. */
    private LocalDate  periode;
    private BigDecimal pendapatanBruto;
    private BigDecimal pph21Terutang;
    private BigDecimal dibayarkan;
    private LocalDate  tanggalBayar;
    /** LUNAS / BELUM_DIBAYAR / SEBAGIAN. */
    private String     statusPembayaran;
    private String     catatan;
}
