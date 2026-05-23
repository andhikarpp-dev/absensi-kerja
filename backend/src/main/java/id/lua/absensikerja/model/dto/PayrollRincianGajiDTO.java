package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data @Builder
public class PayrollRincianGajiDTO {
    private Long       id;
    private Integer    urutan;
    private String     nama;
    private BigDecimal jumlah;
    private String     periode;
}
