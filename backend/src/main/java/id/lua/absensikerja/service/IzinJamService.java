package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.IzinJamDTO;
import id.lua.absensikerja.model.dto.IzinJamRequest;
import id.lua.absensikerja.model.dto.IzinJamRiwayatDTO;
import id.lua.absensikerja.model.enums.StatusIzin;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public interface IzinJamService {

    IzinJamDTO create(Long karyawanId, IzinJamRequest req);
    IzinJamDTO update(Long izinJamId, IzinJamRequest req);
    IzinJamDTO updateStatus(Long izinJamId, StatusIzin status, String catatanPenolakan);
    void delete(Long izinJamId);
    List<IzinJamDTO> findByKaryawan(Long karyawanId, StatusIzin status, LocalDate from, LocalDate to);
    IzinJamDTO findById(Long izinJamId);
    List<IzinJamRiwayatDTO> findRiwayat(Long izinJamId);
    byte[] exportExcel(Long karyawanId, StatusIzin status, LocalDate from, LocalDate to) throws IOException;

    byte[] exportExcelFromList(java.util.List<id.lua.absensikerja.model.entity.IzinJam> list) throws IOException;
}
