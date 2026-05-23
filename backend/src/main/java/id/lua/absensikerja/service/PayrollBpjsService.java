package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PayrollBpjsDTO;
import id.lua.absensikerja.model.dto.PayrollBpjsRequest;

public interface PayrollBpjsService {
    PayrollBpjsDTO findByKaryawan(Long karyawanId);
    PayrollBpjsDTO save(Long karyawanId, PayrollBpjsRequest req);
}
