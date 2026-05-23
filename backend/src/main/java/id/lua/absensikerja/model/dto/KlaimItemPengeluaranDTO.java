package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data @Builder
public class KlaimItemPengeluaranDTO {
    private Long       id;
    private String     keterangan;
    private BigDecimal jumlah;
}
