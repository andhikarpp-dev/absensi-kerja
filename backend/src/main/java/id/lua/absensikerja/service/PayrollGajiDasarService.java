package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PayrollGajiDasarDTO;
import id.lua.absensikerja.model.dto.PayrollGajiDasarRequest;

public interface PayrollGajiDasarService {
    PayrollGajiDasarDTO findByKaryawan(Long karyawanId);
    PayrollGajiDasarDTO save(Long karyawanId, PayrollGajiDasarRequest req);
}
