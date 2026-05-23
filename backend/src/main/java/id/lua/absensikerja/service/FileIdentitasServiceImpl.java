package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.FileIdentitasDTO;
import id.lua.absensikerja.model.dto.FileIdentitasRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanFileIdentitas;
import id.lua.absensikerja.repository.KaryawanFileIdentitasRepository;
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
public class FileIdentitasServiceImpl implements FileIdentitasService {

    private static final String UPLOAD_DIR = "uploads/identitas/";

    private final KaryawanFileIdentitasRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<FileIdentitasDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByCreatedAtDesc(karyawanId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public FileIdentitasDTO create(Long karyawanId, FileIdentitasRequest request, MultipartFile file) throws IOException {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));

        String fileUrl = null;
        String namaFile = null;

        if (file != null && !file.isEmpty()) {
            namaFile = StringUtils.cleanPath(file.getOriginalFilename() != null ? file.getOriginalFilename() : "file");
            String ext = StringUtils.getFilenameExtension(namaFile);
            String filename = UUID.randomUUID() + (ext != null ? "." + ext : "");
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            Files.copy(file.getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
            fileUrl = UPLOAD_DIR + filename;
        }

        KaryawanFileIdentitas entity = KaryawanFileIdentitas.builder()
                .karyawan(karyawan)
                .jenisIdentitas(request.getJenisIdentitas())
                .nomor(request.getNomor())
                .fileUrl(fileUrl)
                .namaFile(namaFile)
                .build();

        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long fileIdentitasId) {
        KaryawanFileIdentitas entity = repo.findById(fileIdentitasId)
                .orElseThrow(() -> new RuntimeException("File identitas tidak ditemukan: " + fileIdentitasId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("File identitas tidak milik karyawan ini");
        }

        // Hapus file fisik jika ada
        if (entity.getFileUrl() != null) {
            try {
                Files.deleteIfExists(Paths.get(entity.getFileUrl()));
            } catch (IOException ignored) {}
        }

        repo.delete(entity);
    }

    private FileIdentitasDTO toDTO(KaryawanFileIdentitas e) {
        return FileIdentitasDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .jenisIdentitas(e.getJenisIdentitas())
                .nomor(e.getNomor())
                .fileUrl(e.getFileUrl())
                .namaFile(e.getNamaFile())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
