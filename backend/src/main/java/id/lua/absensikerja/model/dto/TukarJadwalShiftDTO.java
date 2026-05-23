package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TukarJadwalShiftDTO {
    private Long id;

    private Long   karyawanPemohonId;
    private String namaKaryawanPemohon;
    private String divisiPemohon;

    private String jadwalPemohon;   // "Senin, 05 Mei 2026 | Shift Pagi (08:00 - 16:00)"

    private Long   karyawanTargetId;
    private String namaKaryawanTarget;
    private String divisiTarget;

    private String jadwalTarget;    // same format

    private StatusTukarJadwalShift status;
    private String catatan;
    private String catatanPenolakan;

    private LocalDateTime tanggalDibuat;
    private LocalDateTime updatedAt;
}
