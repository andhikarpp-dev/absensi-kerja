package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.SuratPeringatanDTO;
import id.lua.absensikerja.model.dto.SuratPeringatanRequest;
import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import id.lua.absensikerja.model.enums.StatusSuratPeringatan;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public interface SuratPeringatanService {

    SuratPeringatanDTO create(Long karyawanId, SuratPeringatanRequest req,
                              MultipartFile dokumen) throws IOException;

    SuratPeringatanDTO update(Long id, SuratPeringatanRequest req,
                              MultipartFile dokumen) throws IOException;

    void delete(Long id);

    SuratPeringatanDTO findById(Long id);

    List<SuratPeringatanDTO> findByKaryawan(Long karyawanId,
                                            StatusSuratPeringatan status,
                                            StatusPersetujuanSP statusPersetujuan,
                                            LocalDate from, LocalDate to,
                                            String filter);

    SuratPeringatanDTO updateStatusPersetujuan(Long id, StatusPersetujuanSP status, String catatan);

    SuratPeringatanDTO cabut(Long id);

    byte[] exportExcel(Long karyawanId,
                       StatusSuratPeringatan status,
                       StatusPersetujuanSP statusPersetujuan,
                       LocalDate from, LocalDate to) throws IOException;
}
