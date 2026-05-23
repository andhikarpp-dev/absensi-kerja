package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PayrollRekeningBankDTO;
import id.lua.absensikerja.model.dto.PayrollRekeningBankRequest;

public interface PayrollRekeningBankService {
    PayrollRekeningBankDTO findByKaryawan(Long karyawanId);
    PayrollRekeningBankDTO save(Long karyawanId, PayrollRekeningBankRequest req);
    void delete(Long karyawanId);
}
