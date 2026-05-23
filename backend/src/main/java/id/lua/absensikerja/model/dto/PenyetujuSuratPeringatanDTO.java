package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data @Builder
public class PenyetujuSuratPeringatanDTO {
    private Long                id;
    private Long                karyawanId;
    private String              nama;
    private Integer             urutan;
    private StatusPersetujuanSP status;
    private String              catatan;
    private LocalDateTime       diprosesAt;
}
