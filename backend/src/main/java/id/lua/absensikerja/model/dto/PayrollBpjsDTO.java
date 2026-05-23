package id.lua.absensikerja.model.dto;
import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
@Data @Builder
public class PayrollBpjsDTO {
    private Long      id;
    private Long      karyawanId;
    // BPJS Ketenagakerjaan
    private LocalDate  tkTanggalKepesertaan;
    private String     tkNomor;
    private BigDecimal tkUpahDidaftarkan;
    // BPJS Kesehatan
    private LocalDate  kesTanggalKepesertaan;
    private String     kesNomor;
    private BigDecimal kesUpahDidaftarkan;
    private Integer    kesAnggotaKeluargaInti;
    private Integer    kesAnggotaKeluargaTambahan;
    private LocalDateTime updatedAt;
}
