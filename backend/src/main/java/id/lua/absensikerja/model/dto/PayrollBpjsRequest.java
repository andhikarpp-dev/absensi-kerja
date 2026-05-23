package id.lua.absensikerja.model.dto;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
@Data
public class PayrollBpjsRequest {
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
}
