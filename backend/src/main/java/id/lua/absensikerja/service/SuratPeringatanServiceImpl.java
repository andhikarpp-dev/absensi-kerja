package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PenyetujuSuratPeringatanDTO;
import id.lua.absensikerja.model.dto.SuratPeringatanDTO;
import id.lua.absensikerja.model.dto.SuratPeringatanRequest;
import id.lua.absensikerja.model.entity.JenisPeringatan;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PenyetujuSuratPeringatan;
import id.lua.absensikerja.model.entity.SuratPeringatan;
import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import id.lua.absensikerja.model.enums.StatusSuratPeringatan;
import id.lua.absensikerja.repository.JenisPeringatanRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.SuratPeringatanRepository;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SuratPeringatanServiceImpl implements SuratPeringatanService {

    private static final String UPLOAD_DIR = "uploads/surat-peringatan/";

    private final SuratPeringatanRepository repo;
    private final JenisPeringatanRepository jenisRepo;
    private final KaryawanRepository        karyawanRepo;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── helpers ──────────────────────────────────────────────
    private Karyawan getKaryawan(Long id) {
        return karyawanRepo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private JenisPeringatan getJenis(Long id) {
        return jenisRepo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Jenis peringatan tidak ditemukan"));
    }

    private SuratPeringatan get(Long id) {
        return repo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Surat peringatan tidak ditemukan"));
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

    private StatusSuratPeringatan resolveStatus(SuratPeringatan s) {
        if (s.getStatus() == StatusSuratPeringatan.DICABUT) return StatusSuratPeringatan.DICABUT;
        LocalDate today = LocalDate.now();
        if (today.isAfter(s.getTanggalSelesai())) return StatusSuratPeringatan.KEDALUWARSA;
        return StatusSuratPeringatan.AKTIF;
    }

    private PenyetujuSuratPeringatanDTO toPenyetujuDTO(PenyetujuSuratPeringatan p) {
        return PenyetujuSuratPeringatanDTO.builder()
                .id(p.getId())
                .karyawanId(p.getKaryawan() != null ? p.getKaryawan().getId() : null)
                .nama(p.getNama())
                .urutan(p.getUrutan())
                .status(p.getStatus())
                .catatan(p.getCatatan())
                .diprosesAt(p.getDiprosesAt())
                .build();
    }

    private SuratPeringatanDTO toDTO(SuratPeringatan s) {
        Karyawan k = s.getKaryawan();
        String url = (s.getDokumenUrl() != null) ? baseUrl + "/" + s.getDokumenUrl() : null;
        // sinkron status by tanggal
        StatusSuratPeringatan effective = resolveStatus(s);
        return SuratPeringatanDTO.builder()
                .id(s.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .jenisId(s.getJenis().getId())
                .jenisKode(s.getJenis().getKode())
                .jenisNama(s.getJenis().getNama())
                .tanggalMulai(s.getTanggalMulai())
                .tanggalSelesai(s.getTanggalSelesai())
                .pelanggaran(s.getPelanggaran())
                .dokumenUrl(url)
                .cegahPresensi(s.isCegahPresensi())
                .status(effective)
                .statusPersetujuan(s.getStatusPersetujuan())
                .catatanPenolakan(s.getCatatanPenolakan())
                .penyetuju(s.getPenyetuju().stream()
                        .sorted((a, b) -> Integer.compare(a.getUrutan(), b.getUrutan()))
                        .map(this::toPenyetujuDTO).toList())
                .createdAt(s.getCreatedAt())
                .updatedAt(s.getUpdatedAt())
                .build();
    }

    private void applyPenyetuju(SuratPeringatan sp, List<SuratPeringatanRequest.Penyetuju> list) {
        sp.getPenyetuju().clear();
        if (list == null) return;
        int urutan = 1;
        for (SuratPeringatanRequest.Penyetuju p : list) {
            if (p.getNama() == null || p.getNama().isBlank()) continue;
            Karyawan k = null;
            if (p.getKaryawanId() != null) {
                k = karyawanRepo.findById(p.getKaryawanId()).orElse(null);
            }
            PenyetujuSuratPeringatan ent = PenyetujuSuratPeringatan.builder()
                    .suratPeringatan(sp)
                    .karyawan(k)
                    .nama(p.getNama().trim())
                    .urutan(urutan++)
                    .status(StatusPersetujuanSP.MENUNGGU)
                    .build();
            sp.getPenyetuju().add(ent);
        }
    }

    private void recomputeStatusPersetujuan(SuratPeringatan sp) {
        List<PenyetujuSuratPeringatan> list = sp.getPenyetuju();
        if (list.isEmpty()) {
            sp.setStatusPersetujuan(StatusPersetujuanSP.MENUNGGU);
            return;
        }
        boolean adaTolak  = list.stream().anyMatch(p -> p.getStatus() == StatusPersetujuanSP.DITOLAK);
        boolean semuaOk   = list.stream().allMatch(p -> p.getStatus() == StatusPersetujuanSP.DISETUJUI);
        if (adaTolak)      sp.setStatusPersetujuan(StatusPersetujuanSP.DITOLAK);
        else if (semuaOk)  sp.setStatusPersetujuan(StatusPersetujuanSP.DISETUJUI);
        else               sp.setStatusPersetujuan(StatusPersetujuanSP.MENUNGGU);
    }

    // ── CRUD ─────────────────────────────────────────────────
    @Override
    @Transactional
    public SuratPeringatanDTO create(Long karyawanId, SuratPeringatanRequest req,
                                     MultipartFile dokumen) throws IOException {
        Karyawan karyawan = getKaryawan(karyawanId);
        JenisPeringatan jenis = getJenis(req.getJenisId());

        if (req.getTanggalSelesai().isBefore(req.getTanggalMulai())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tanggal selesai harus >= tanggal mulai");
        }
        if (req.getPenyetuju() == null || req.getPenyetuju().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Minimal 1 penyetuju");
        }

        String dokumenUrl = null;
        if (dokumen != null && !dokumen.isEmpty()) dokumenUrl = saveFile(dokumen);

        SuratPeringatan sp = SuratPeringatan.builder()
                .karyawan(karyawan)
                .jenis(jenis)
                .tanggalMulai(req.getTanggalMulai())
                .tanggalSelesai(req.getTanggalSelesai())
                .pelanggaran(req.getPelanggaran())
                .dokumenUrl(dokumenUrl)
                .cegahPresensi(Boolean.TRUE.equals(req.getCegahPresensi()))
                .status(StatusSuratPeringatan.AKTIF)
                .statusPersetujuan(StatusPersetujuanSP.MENUNGGU)
                .penyetuju(new ArrayList<>())
                .build();
        applyPenyetuju(sp, req.getPenyetuju());

        return toDTO(repo.save(sp));
    }

    @Override
    @Transactional
    public SuratPeringatanDTO update(Long id, SuratPeringatanRequest req,
                                     MultipartFile dokumen) throws IOException {
        SuratPeringatan sp = get(id);

        JenisPeringatan jenis = getJenis(req.getJenisId());
        if (req.getTanggalSelesai().isBefore(req.getTanggalMulai())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tanggal selesai harus >= tanggal mulai");
        }

        sp.setJenis(jenis);
        sp.setTanggalMulai(req.getTanggalMulai());
        sp.setTanggalSelesai(req.getTanggalSelesai());
        sp.setPelanggaran(req.getPelanggaran());
        if (req.getCegahPresensi() != null) sp.setCegahPresensi(req.getCegahPresensi());

        if (dokumen != null && !dokumen.isEmpty()) {
            deleteFile(sp.getDokumenUrl());
            sp.setDokumenUrl(saveFile(dokumen));
        }

        if (req.getPenyetuju() != null) applyPenyetuju(sp, req.getPenyetuju());
        recomputeStatusPersetujuan(sp);

        return toDTO(repo.save(sp));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        SuratPeringatan sp = get(id);
        deleteFile(sp.getDokumenUrl());
        repo.delete(sp);
    }

    @Override
    public SuratPeringatanDTO findById(Long id) {
        return toDTO(get(id));
    }

    @Override
    public List<SuratPeringatanDTO> findByKaryawan(Long karyawanId,
                                                   StatusSuratPeringatan status,
                                                   StatusPersetujuanSP statusPersetujuan,
                                                   LocalDate from, LocalDate to,
                                                   String filter) {
        Karyawan k = getKaryawan(karyawanId);
        List<SuratPeringatan> list = repo.search(k, status, statusPersetujuan, from, to);
        String q = filter == null ? "" : filter.trim().toLowerCase();
        return list.stream()
                .filter(s -> q.isEmpty()
                        || s.getJenis().getNama().toLowerCase().contains(q)
                        || s.getJenis().getKode().toLowerCase().contains(q)
                        || (s.getPelanggaran() != null && s.getPelanggaran().toLowerCase().contains(q)))
                .map(this::toDTO)
                .toList();
    }

    @Override
    @Transactional
    public SuratPeringatanDTO updateStatusPersetujuan(Long id, StatusPersetujuanSP status, String catatan) {
        SuratPeringatan sp = get(id);
        sp.setStatusPersetujuan(status);
        if (status == StatusPersetujuanSP.DITOLAK) sp.setCatatanPenolakan(catatan);
        // sinkronkan semua penyetuju
        for (PenyetujuSuratPeringatan p : sp.getPenyetuju()) {
            p.setStatus(status);
            p.setCatatan(catatan);
            p.setDiprosesAt(LocalDateTime.now());
        }
        return toDTO(repo.save(sp));
    }

    @Override
    @Transactional
    public SuratPeringatanDTO cabut(Long id) {
        SuratPeringatan sp = get(id);
        sp.setStatus(StatusSuratPeringatan.DICABUT);
        return toDTO(repo.save(sp));
    }

    // ── Excel export ─────────────────────────────────────────
    @Override
    public byte[] exportExcel(Long karyawanId,
                              StatusSuratPeringatan status,
                              StatusPersetujuanSP statusPersetujuan,
                              LocalDate from, LocalDate to) throws IOException {
        List<SuratPeringatanDTO> list = findByKaryawan(karyawanId, status, statusPersetujuan, from, to, null);
        DateTimeFormatter df = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        try (Workbook wb = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sh = wb.createSheet("Surat Peringatan");
            String[] headers = {"No", "Jenis", "Mulai", "Selesai", "Pelanggaran",
                    "Sanksi", "Status", "Status Persetujuan"};
            Row h = sh.createRow(0);
            CellStyle hs = wb.createCellStyle();
            Font f = wb.createFont(); f.setBold(true); hs.setFont(f);
            for (int i = 0; i < headers.length; i++) {
                Cell c = h.createCell(i); c.setCellValue(headers[i]); c.setCellStyle(hs);
            }
            int r = 1;
            for (SuratPeringatanDTO d : list) {
                Row row = sh.createRow(r++);
                row.createCell(0).setCellValue(r - 1);
                row.createCell(1).setCellValue(d.getJenisNama());
                row.createCell(2).setCellValue(d.getTanggalMulai().format(df));
                row.createCell(3).setCellValue(d.getTanggalSelesai().format(df));
                row.createCell(4).setCellValue(d.getPelanggaran() == null ? "" : d.getPelanggaran());
                row.createCell(5).setCellValue(d.isCegahPresensi() ? "Cegah Presensi" : "-");
                row.createCell(6).setCellValue(d.getStatus().name());
                row.createCell(7).setCellValue(d.getStatusPersetujuan().name());
            }
            for (int i = 0; i < headers.length; i++) sh.autoSizeColumn(i);
            wb.write(out);
            return out.toByteArray();
        }
    }
}
