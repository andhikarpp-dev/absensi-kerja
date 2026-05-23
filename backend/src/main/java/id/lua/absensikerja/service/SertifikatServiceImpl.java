package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.SertifikatDTO;
import id.lua.absensikerja.model.dto.SertifikatRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanSertifikat;
import id.lua.absensikerja.repository.KaryawanSertifikatRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SertifikatServiceImpl implements SertifikatService {

    private static final String UPLOAD_DIR = "uploads/sertifikat/";

    private final KaryawanSertifikatRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<SertifikatDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByTanggalTerbitDesc(karyawanId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public SertifikatDTO create(Long karyawanId, SertifikatRequest request, MultipartFile file) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));

        String fileUrl = null;
        if (file != null && !file.isEmpty()) {
            fileUrl = saveFile(file);
        }

        KaryawanSertifikat entity = KaryawanSertifikat.builder()
                .karyawan(karyawan)
                .namaSertifikat(request.getNamaSertifikat())
                .penerbit(request.getPenerbit())
                .nomorSertifikat(request.getNomorSertifikat())
                .tanggalTerbit(request.getTanggalTerbit())
                .tanggalKadaluarsa(request.getTanggalKadaluarsa())
                .fileUrl(fileUrl)
                .keterangan(request.getKeterangan())
                .build();

        return toDTO(repo.save(entity));
    }

    @Override
    public SertifikatDTO update(Long karyawanId, Long sertifikatId, SertifikatRequest request, MultipartFile file) {
        KaryawanSertifikat entity = repo.findById(sertifikatId)
                .orElseThrow(() -> new RuntimeException("Sertifikat tidak ditemukan: " + sertifikatId));

        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Sertifikat tidak milik karyawan ini");

        if (file != null && !file.isEmpty()) {
            entity.setFileUrl(saveFile(file));
        }

        entity.setNamaSertifikat(request.getNamaSertifikat());
        entity.setPenerbit(request.getPenerbit());
        entity.setNomorSertifikat(request.getNomorSertifikat());
        entity.setTanggalTerbit(request.getTanggalTerbit());
        entity.setTanggalKadaluarsa(request.getTanggalKadaluarsa());
        entity.setKeterangan(request.getKeterangan());

        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long sertifikatId) {
        KaryawanSertifikat entity = repo.findById(sertifikatId)
                .orElseThrow(() -> new RuntimeException("Sertifikat tidak ditemukan: " + sertifikatId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Sertifikat tidak milik karyawan ini");
        repo.delete(entity);
    }

    private String saveFile(MultipartFile file) {
        try {
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) Files.createDirectories(uploadPath);
            String ext = StringUtils.getFilenameExtension(file.getOriginalFilename());
            String filename = UUID.randomUUID() + (ext != null ? "." + ext : "");
            Files.copy(file.getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
            return UPLOAD_DIR + filename;
        } catch (IOException e) {
            throw new RuntimeException("Gagal menyimpan file sertifikat", e);
        }
    }

    private SertifikatDTO toDTO(KaryawanSertifikat e) {
        return SertifikatDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .namaSertifikat(e.getNamaSertifikat())
                .penerbit(e.getPenerbit())
                .nomorSertifikat(e.getNomorSertifikat())
                .tanggalTerbit(e.getTanggalTerbit())
                .tanggalKadaluarsa(e.getTanggalKadaluarsa())
                .fileUrl(e.getFileUrl())
                .keterangan(e.getKeterangan())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
