package id.lua.absensikerja.model.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class PayrollRincianGajiRequest {
    private String nama;
    private BigDecimal jumlah;
    private String periode;
}
