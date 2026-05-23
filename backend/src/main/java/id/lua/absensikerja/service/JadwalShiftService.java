package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.*;

import java.time.YearMonth;
import java.util.List;

public interface JadwalShiftService {

    JadwalShiftMatrixDTO getMatrix(YearMonth bulan, Long divisiId, String search, Long ownerId);

    List<KaryawanShiftDTO> findEligibleKaryawan(Long divisiId, String search, Long ownerId);

    List<PolaKerjaDTO> findShiftOptions(Long ownerId);

    JadwalShiftDTO upsert(JadwalShiftRequest req, Long ownerId);

    List<JadwalShiftDTO> batchAssign(JadwalShiftBatchRequest req, Long ownerId);

    int copyWeek(CopyJadwalShiftRequest req, Long ownerId);

    void delete(Long id, Long ownerId);
}
