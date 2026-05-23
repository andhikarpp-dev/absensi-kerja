package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.IzinHariDTO;
import id.lua.absensikerja.model.dto.IzinHariRequest;
import id.lua.absensikerja.model.dto.IzinHariRiwayatDTO;
import id.lua.absensikerja.model.entity.IzinHari;
import id.lua.absensikerja.model.enums.StatusIzin;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public interface IzinHariService {

    IzinHariDTO create(Long karyawanId, IzinHariRequest req, MultipartFile lampiran) throws IOException;
    IzinHariDTO update(Long izinHariId, IzinHariRequest req, MultipartFile lampiran) throws IOException;
    IzinHariDTO updateStatus(Long izinHariId, StatusIzin status, String catatanPenolakan);
    void delete(Long izinHariId);

    List<IzinHariDTO> findByKaryawan(Long karyawanId, StatusIzin status, LocalDate from, LocalDate to, String filter);
    IzinHariDTO findById(Long izinHariId);
    List<IzinHariRiwayatDTO> findRiwayat(Long izinHariId);

    byte[] exportExcel(Long karyawanId, StatusIzin status, LocalDate from, LocalDate to) throws IOException;
    byte[] exportExcelFromList(List<IzinHari> list) throws IOException;
}
