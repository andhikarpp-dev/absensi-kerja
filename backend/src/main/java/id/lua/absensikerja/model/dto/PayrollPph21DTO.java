package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PayrollPph21DTO {
    private Long          id;
    private Long          karyawanId;
    private String        statusPkp;
    private String        npwp;
    private String        statusPtkp;
    private Integer       jumlahTanggungan;
    private String        metodePph;
    private LocalDateTime updatedAt;
}
