package id.lua.absensikerja.model.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class JadwalLemburRequest {
    private Long          karyawanId;        // wajib
    private LocalDateTime waktuMulai;        // wajib
    private LocalDateTime waktuSelesai;      // wajib
    private Integer       menitSebelumJadwal;
    private String        catatan;
}
