package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.*;
import id.lua.absensikerja.model.entity.Cuti;
import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.StatusIzin;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public interface CutiService {

    CutiDTO create(Long karyawanId, CutiRequest req, MultipartFile lampiran) throws IOException;
    CutiDTO update(Long cutiId, CutiRequest req, MultipartFile lampiran) throws IOException;
    CutiDTO updateStatus(Long cutiId, StatusIzin status, String catatanPenolakan);
    void delete(Long cutiId);

    List<CutiDTO> findByKaryawan(Long karyawanId, StatusIzin status, JenisCuti jenis,
                                 LocalDate from, LocalDate to, String filter);
    CutiDTO findById(Long cutiId);
    List<CutiRiwayatDTO> findRiwayat(Long cutiId);

    SisaCutiDTO getSisaCuti(Long karyawanId);
    SisaCutiDTO updateSisaCuti(Long karyawanId, UpdateSisaCutiRequest req);

    List<SisaCutiRiwayatDTO> getSisaCutiRiwayat(Long karyawanId);

    /** Catat perubahan sisa cuti ke ledger. Dipanggil juga dari scheduler. */
    void logSisaCutiChange(Long karyawanId, String deskripsi, int jumlah, int saldoBaru);

    byte[] exportExcel(Long karyawanId, StatusIzin status, JenisCuti jenis,
                       LocalDate from, LocalDate to) throws IOException;

    /** Admin: semua cuti lintas karyawan */
    List<CutiDTO> findAllAdmin(Long perusahaanId, StatusIzin status, JenisCuti jenis,
                               LocalDate from, LocalDate to, Long divisiId, String cari);

    byte[] exportExcelFromList(List<Cuti> list) throws IOException;
}
