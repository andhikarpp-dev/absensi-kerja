package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PayrollPph21DTO;
import id.lua.absensikerja.model.dto.PayrollPph21Request;
import id.lua.absensikerja.model.dto.PayrollPph21RiwayatDTO;
import id.lua.absensikerja.model.dto.PayrollPph21RiwayatRequest;

import java.util.List;

public interface PayrollPph21Service {

    // Pengaturan
    PayrollPph21DTO findByKaryawan(Long karyawanId);
    PayrollPph21DTO save(Long karyawanId, PayrollPph21Request req);

    // Riwayat
    List<PayrollPph21RiwayatDTO> listRiwayat(Long karyawanId);
    PayrollPph21RiwayatDTO       saveRiwayat(Long karyawanId, PayrollPph21RiwayatRequest req);
    PayrollPph21RiwayatDTO       updateRiwayat(Long karyawanId, Long riwayatId, PayrollPph21RiwayatRequest req);
    void                          deleteRiwayat(Long karyawanId, Long riwayatId);
}
