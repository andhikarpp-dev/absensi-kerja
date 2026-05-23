package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.ImporOpenshiftResult;
import id.lua.absensikerja.model.dto.OpenshiftDTO;
import id.lua.absensikerja.model.dto.OpenshiftRequest;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

public interface OpenshiftService {

    List<OpenshiftDTO> findAll(Long ownerId, LocalDate mulai, LocalDate selesai, Long divisiId);

    OpenshiftDTO findById(Long id);

    OpenshiftDTO create(OpenshiftRequest req, Long ownerId);

    OpenshiftDTO update(Long id, OpenshiftRequest req);

    void delete(Long id);

    /** Impor dari file CSV. All-or-nothing. */
    ImporOpenshiftResult importCsv(MultipartFile file, Long ownerId);
}
