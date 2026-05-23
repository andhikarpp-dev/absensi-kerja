package id.lua.absensikerja.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class JadwalShiftMatrixDTO {
    private LocalDate startDate;
    private LocalDate endDate;
    private List<LocalDate> dates;
    private List<KaryawanShiftDTO> karyawan;
    private List<JadwalShiftDTO> assignments;
    private List<PolaKerjaDTO> shiftOptions;
}
