package id.lua.absensikerja.model.dto;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;
@Data @Builder
public class PayrollRekeningBankDTO {
    private Long          id;
    private Long          karyawanId;
    private String        namaBank;
    private String        nomorRekening;
    private String        atasNama;
    private LocalDateTime updatedAt;
}
