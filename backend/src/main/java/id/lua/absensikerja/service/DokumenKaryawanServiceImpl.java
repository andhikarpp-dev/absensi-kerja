package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.DokumenKaryawanDTO;
import id.lua.absensikerja.model.dto.DokumenKaryawanRequest;
import id.lua.absensikerja.model.dto.KuotaDokumenDTO;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanDokumen;
import id.lua.absensikerja.model.enums.StatusKuotaDokumen;
import id.lua.absensikerja.repository.KaryawanDokumenRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DokumenKaryawanServiceImpl implements DokumenKaryawanService {

    private static final String UPLOAD_DIR = "uploads/dokumen-karyawan/";

    /** Default kuota gratis dokumen per karyawan. */
    public static final long KUOTA_GRATIS_DEFAULT   = 2L;
    /** Default kuota berbayar dokumen per karyawan. */
    public static final long KUOTA_BERBAYAR_DEFAULT = 0L;

    private final KaryawanDokumenRepository repo;
    private final KaryawanRepository        karyawanRepository;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── helpers ──────────────────────────────────────────────
    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private KaryawanDokumen getDokumen(Long id) {
        return repo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Dokumen tidak ditemukan"));
    }

    private String saveFile(MultipartFile file) throws IOException {
        Path dir = Paths.get(UPLOAD_DIR);
        Files.createDirectories(dir);
        String ext = "";
        String orig = file.getOriginalFilename();
        if (orig != null && orig.contains(".")) ext = orig.substring(orig.lastIndexOf('.'));
        String filename = UUID.randomUUID() + ext;
        Files.copy(file.getInputStream(), dir.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        return UPLOAD_DIR + filename;
    }

    private void deleteFile(String path) {
        if (path == null) return;
        try { Files.deleteIfExists(Paths.get(path)); } catch (Exception ignored) {}
    }

    private DokumenKaryawanDTO toDTO(KaryawanDokumen d) {
        String url = (d.getPathBerkas() != null) ? baseUrl + "/" + d.getPathBerkas() : null;
        return DokumenKaryawanDTO.builder()
                .id(d.getId())
                .karyawanId(d.getKaryawan().getId())
                .namaDokumen(d.getNamaDokumen())
                .namaBerkas(d.getNamaBerkas())
                .pathBerkas(d.getPathBerkas())
                .ukuranBerkas(d.getUkuranBerkas())
                .tanggalUpload(d.getTanggalUpload())
                .tanggalBerakhir(d.getTanggalBerakhir())
                .hariReminder(d.getHariReminder())
                .statusKuota(d.getStatusKuota())
                .fileUrl(url)
                .createdAt(d.getCreatedAt())
                .updatedAt(d.getUpdatedAt())
                .build();
    }

    // ── CRUD ─────────────────────────────────────────────────
    @Override
    public List<DokumenKaryawanDTO> findByKaryawan(Long karyawanId, String search) {
        getKaryawan(karyawanId);
        List<KaryawanDokumen> all = repo.findByKaryawanIdOrderByCreatedAtDesc(karyawanId);
        String q = search == null ? "" : search.trim().toLowerCase();
        return all.stream()
                .filter(d -> q.isEmpty()
                        || (d.getNamaDokumen() != null && d.getNamaDokumen().toLowerCase().contains(q))
                        || (d.getNamaBerkas() != null && d.getNamaBerkas().toLowerCase().contains(q)))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DokumenKaryawanDTO findById(Long id) {
        return toDTO(getDokumen(id));
    }

    @Override
    @Transactional
    public DokumenKaryawanDTO create(Long karyawanId, DokumenKaryawanRequest req, MultipartFile berkas)
            throws IOException {
        Karyawan karyawan = getKaryawan(karyawanId);

        if (berkas == null || berkas.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Berkas dokumen wajib diunggah");
        }

        // Validasi kuota
        StatusKuotaDokumen status = req.getStatusKuota();
        long terpakai = repo.countByKaryawanIdAndStatusKuota(karyawanId, status);
        long limit = (status == StatusKuotaDokumen.GRATIS)
                ? KUOTA_GRATIS_DEFAULT
                : karyawan.getKuotaDokumenBerbayar();
        if (terpakai >= limit) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Kuota dokumen " + status.name().toLowerCase() + " sudah habis");
        }

        String path = saveFile(berkas);

        KaryawanDokumen d = KaryawanDokumen.builder()
                .karyawan(karyawan)
                .namaDokumen(req.getNamaDokumen())
                .namaBerkas(berkas.getOriginalFilename())
                .pathBerkas(path)
                .ukuranBerkas(berkas.getSize())
                .tanggalUpload(LocalDateTime.now())
                .tanggalBerakhir(req.getTanggalBerakhir())
                .hariReminder(req.getHariReminder() != null ? req.getHariReminder() : 7)
                .statusKuota(status)
                .build();
        return toDTO(repo.save(d));
    }

    @Override
    @Transactional
    public DokumenKaryawanDTO update(Long id, DokumenKaryawanRequest req, MultipartFile berkas)
            throws IOException {
        KaryawanDokumen d = getDokumen(id);

        // Tidak izinkan mengubah status kuota dari GRATIS -> BERBAYAR atau sebaliknya
        // jika kuota target sudah penuh
        if (req.getStatusKuota() != null && req.getStatusKuota() != d.getStatusKuota()) {
            long terpakai = repo.countByKaryawanIdAndStatusKuota(d.getKaryawan().getId(), req.getStatusKuota());
            long limit = (req.getStatusKuota() == StatusKuotaDokumen.GRATIS)
                    ? KUOTA_GRATIS_DEFAULT
                    : d.getKaryawan().getKuotaDokumenBerbayar();
            if (terpakai >= limit) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Kuota dokumen " + req.getStatusKuota().name().toLowerCase() + " sudah habis");
            }
            d.setStatusKuota(req.getStatusKuota());
        }

        d.setNamaDokumen(req.getNamaDokumen());
        d.setTanggalBerakhir(req.getTanggalBerakhir());
        d.setHariReminder(req.getHariReminder() != null ? req.getHariReminder() : 7);

        if (berkas != null && !berkas.isEmpty()) {
            String oldPath = d.getPathBerkas();
            String path = saveFile(berkas);
            d.setPathBerkas(path);
            d.setNamaBerkas(berkas.getOriginalFilename());
            d.setUkuranBerkas(berkas.getSize());
            d.setTanggalUpload(LocalDateTime.now());
            deleteFile(oldPath);
        }
        return toDTO(repo.save(d));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        KaryawanDokumen d = getDokumen(id);
        String path = d.getPathBerkas();
        repo.delete(d);
        deleteFile(path);
    }

    @Override
    public KuotaDokumenDTO getKuota(Long karyawanId) {
        Karyawan karyawan = getKaryawan(karyawanId);
        long gratis   = repo.countByKaryawanIdAndStatusKuota(karyawanId, StatusKuotaDokumen.GRATIS);
        long berbayar = repo.countByKaryawanIdAndStatusKuota(karyawanId, StatusKuotaDokumen.BERBAYAR);
        return KuotaDokumenDTO.builder()
                .totalGratis(gratis)
                .kuotaGratis(KUOTA_GRATIS_DEFAULT)
                .totalBerbayar(berbayar)
                .kuotaBerbayar(karyawan.getKuotaDokumenBerbayar())
                .build();
    }

    @Override
    @Transactional
    public KuotaDokumenDTO tambahKuotaBerbayar(Long karyawanId, int jumlah) {
        if (jumlah <= 0) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Jumlah kuota harus lebih dari 0");
        Karyawan karyawan = getKaryawan(karyawanId);
        karyawan.setKuotaDokumenBerbayar(karyawan.getKuotaDokumenBerbayar() + jumlah);
        karyawanRepository.save(karyawan);
        long berbayar = repo.countByKaryawanIdAndStatusKuota(karyawanId, StatusKuotaDokumen.BERBAYAR);
        long gratis   = repo.countByKaryawanIdAndStatusKuota(karyawanId, StatusKuotaDokumen.GRATIS);
        return KuotaDokumenDTO.builder()
                .totalGratis(gratis)
                .kuotaGratis(KUOTA_GRATIS_DEFAULT)
                .totalBerbayar(berbayar)
                .kuotaBerbayar(karyawan.getKuotaDokumenBerbayar())
                .build();
    }
}
