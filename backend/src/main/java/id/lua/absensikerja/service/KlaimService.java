package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KlaimDTO;
import id.lua.absensikerja.model.dto.KlaimRequest;
import id.lua.absensikerja.model.dto.KlaimRiwayatDTO;
import id.lua.absensikerja.model.enums.StatusKlaim;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public interface KlaimService {
    List<KlaimDTO> findByKaryawan(Long karyawanId, StatusKlaim status);
    List<KlaimDTO> findAllAdmin(Long perusahaanId, StatusKlaim status, Long divisiId, LocalDate from, LocalDate to, String cari);
    KlaimDTO findById(Long klaimId);
    KlaimDTO create(Long karyawanId, KlaimRequest req, MultipartFile lampiran) throws IOException;
    KlaimDTO update(Long klaimId, KlaimRequest req, MultipartFile lampiran) throws IOException;
    KlaimDTO updateStatus(Long klaimId, StatusKlaim status, String catatanPenolakan);
    void delete(Long klaimId);
    List<KlaimRiwayatDTO> findRiwayat(Long klaimId);
}
