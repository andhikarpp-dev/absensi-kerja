package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.TukarJadwalShiftDTO;
import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;

import java.time.LocalDate;
import java.util.List;

public interface TukarJadwalShiftService {

    List<TukarJadwalShiftDTO> findAll(
            StatusTukarJadwalShift status,
            Long divisiId,
            LocalDate dari,
            LocalDate sampai,
            String cari,
            Long userId);

    TukarJadwalShiftDTO setujui(Long id, Long userId);

    TukarJadwalShiftDTO tolak(Long id, String catatan, Long userId);
}
