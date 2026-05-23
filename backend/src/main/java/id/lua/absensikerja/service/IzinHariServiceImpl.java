package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.IzinHariDTO;
import id.lua.absensikerja.model.dto.IzinHariRequest;
import id.lua.absensikerja.model.dto.IzinHariRiwayatDTO;
import id.lua.absensikerja.model.entity.IzinHari;
import id.lua.absensikerja.model.entity.IzinHariRiwayat;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.repository.IzinHariRepository;
import id.lua.absensikerja.repository.IzinHariRiwayatRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.util.AuthUserUtil;
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
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IzinHariServiceImpl implements IzinHariService {

    private static final String UPLOAD_DIR = "uploads/izin-hari/";

    private final IzinHariRepository        izinHariRepository;
    private final IzinHariRiwayatRepository riwayatRepository;
    private final KaryawanRepository        karyawanRepository;
    private final AuthUserUtil              authUserUtil;

    @Value("${app.base-url:http://localhost:8080}")
    private String baseUrl;

    // ── helpers ───────────────────────────────────────────────

    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private IzinHari getIzinHari(Long id) {
        return izinHariRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Izin hari tidak ditemukan"));
    }

    private String currentUser() {
        try { return authUserUtil.getCurrentUser().getUsername(); }
        catch (Exception e) { return "sistem"; }
    }

    // ── Audit trail ───────────────────────────────────────────

    private void simpanRiwayat(IzinHari izin, String tipe, List<IzinHariRiwayatDTO.Item> items) {
        try {
            IzinHariRiwayat r = IzinHariRiwayat.builder()
                    .izinHari(izin).tipe(tipe).changedBy(currentUser())
                    .changedAt(LocalDateTime.now()).aktivitas(toJson(items)).build();
            riwayatRepository.save(r);
        } catch (Exception ignored) {}
    }

    private String toJson(List<IzinHariRiwayatDTO.Item> list) {
        if (list == null || list.isEmpty()) return "[]";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            IzinHariRiwayatDTO.Item a = list.get(i);
            sb.append("{\"label\":\"").append(esc(a.getLabel()))
              .append("\",\"lama\":\"").append(esc(a.getLama()))
              .append("\",\"baru\":\"").append(esc(a.getBaru())).append("\"}");
            if (i < list.size() - 1) sb.append(",");
        }
        return sb.append("]").toString();
    }

    private List<IzinHariRiwayatDTO.Item> fromJson(String json) {
        List<IzinHariRiwayatDTO.Item> result = new ArrayList<>();
        if (json == null || json.isBlank()) return result;
        Pattern p = Pattern.compile("\\{\"label\":\"(.*?)\",\"lama\":\"(.*?)\",\"baru\":\"(.*?)\"}");
        Matcher m = p.matcher(json);
        while (m.find()) result.add(IzinHariRiwayatDTO.Item.builder()
                .label(unesc(m.group(1))).lama(unesc(m.group(2))).baru(unesc(m.group(3))).build());
        return result;
    }

    private String esc(String s) {
        if (s == null) return "";
        return s.replace("\\","\\\\").replace("\"","\\\"").replace("\n","\\n");
    }
    private String unesc(String s) {
        if (s == null) return "";
        return s.replace("\\\"","\"").replace("\\\\","\\").replace("\\n","\n");
    }

    private IzinHariRiwayatDTO.Item item(String label, String lama, String baru) {
        return IzinHariRiwayatDTO.Item.builder().label(label).lama(lama).baru(baru).build();
    }

    private IzinHariRiwayatDTO toRiwayatDTO(IzinHariRiwayat r) {
        return IzinHariRiwayatDTO.builder()
                .id(r.getId()).izinHariId(r.getIzinHari().getId())
                .tipe(r.getTipe()).changedBy(r.getChangedBy())
                .changedAt(r.getChangedAt()).aktivitas(fromJson(r.getAktivitas()))
                .build();
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

    private IzinHariDTO toDTO(IzinHari i) {
        Karyawan k = i.getKaryawan();
        String lampiranFullUrl = (i.getLampiranUrl() != null)
                ? baseUrl + "/" + i.getLampiranUrl() : null;
        return IzinHariDTO.builder()
                .id(i.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi()   != null ? k.getDivisi().getNamaDivisi()   : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .tanggalList(new ArrayList<>(i.getTanggalList()))
                .keperluan(i.getKeperluan())
                .mengurangiGaji(i.isMengurangiGaji())
                .lampiranUrl(lampiranFullUrl)
                .status(i.getStatus())
                .catatanPenolakan(i.getCatatanPenolakan())
                .createdAt(i.getCreatedAt())
                .updatedAt(i.getUpdatedAt())
                .build();
    }

    // ── CRUD ──────────────────────────────────────────────────

    @Override
    @Transactional
    public IzinHariDTO create(Long karyawanId, IzinHariRequest req, MultipartFile lampiran) throws IOException {
        Karyawan karyawan = getKaryawan(karyawanId);
        String lampiranUrl = null;
        if (lampiran != null && !lampiran.isEmpty()) lampiranUrl = saveFile(lampiran);

        IzinHari izin = IzinHari.builder()
                .karyawan(karyawan)
                .tanggalList(new ArrayList<>(req.getTanggalList()))
                .keperluan(req.getKeperluan())
                .mengurangiGaji(req.isMengurangiGaji())
                .lampiranUrl(lampiranUrl)
                .status(StatusIzin.MENUNGGU)
                .build();
        IzinHari saved = izinHariRepository.save(izin);
        List<IzinHariRiwayatDTO.Item> items = new ArrayList<>();
        items.add(item("Status", "", StatusIzin.MENUNGGU.name()));
        items.add(item("Keperluan", "", saved.getKeperluan()));
        items.add(item("Mengurangi Gaji", "", saved.isMengurangiGaji() ? "Ya" : "Tidak"));
        items.add(item("Jumlah Hari", "", String.valueOf(saved.getTanggalList().size())));
        simpanRiwayat(saved, "DIBUAT", items);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public IzinHariDTO update(Long izinHariId, IzinHariRequest req, MultipartFile lampiran) throws IOException {
        IzinHari izin = getIzinHari(izinHariId);
        List<IzinHariRiwayatDTO.Item> items = new ArrayList<>();
        if (!izin.getKeperluan().equals(req.getKeperluan()))
            items.add(item("Keperluan", izin.getKeperluan(), req.getKeperluan()));
        if (izin.isMengurangiGaji() != req.isMengurangiGaji())
            items.add(item("Mengurangi Gaji",
                    izin.isMengurangiGaji() ? "Ya" : "Tidak",
                    req.isMengurangiGaji()  ? "Ya" : "Tidak"));
        if (lampiran != null && !lampiran.isEmpty()) {
            deleteFile(izin.getLampiranUrl());
            izin.setLampiranUrl(saveFile(lampiran));
            items.add(item("Lampiran", "Ada perubahan file", ""));
        }
        izin.getTanggalList().clear();
        izin.getTanggalList().addAll(req.getTanggalList());
        izin.setKeperluan(req.getKeperluan());
        izin.setMengurangiGaji(req.isMengurangiGaji());
        IzinHari saved = izinHariRepository.save(izin);
        if (!items.isEmpty()) simpanRiwayat(saved, "DIUBAH", items);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public IzinHariDTO updateStatus(Long izinHariId, StatusIzin status, String catatanPenolakan) {
        IzinHari izin = getIzinHari(izinHariId);
        String lamaStatus = izin.getStatus() != null ? izin.getStatus().name() : "";
        izin.setStatus(status);
        if (catatanPenolakan != null) izin.setCatatanPenolakan(catatanPenolakan);
        IzinHari saved = izinHariRepository.save(izin);
        List<IzinHariRiwayatDTO.Item> items = new ArrayList<>();
        items.add(item("Status", lamaStatus, status.name()));
        if (catatanPenolakan != null && !catatanPenolakan.isBlank())
            items.add(item("Catatan", "", catatanPenolakan));
        simpanRiwayat(saved, "STATUS", items);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public void delete(Long izinHariId) {
        IzinHari izin = getIzinHari(izinHariId);
        deleteFile(izin.getLampiranUrl());
        riwayatRepository.deleteByIzinHariId(izinHariId);
        izinHariRepository.delete(izin);
    }

    @Override
    public List<IzinHariRiwayatDTO> findRiwayat(Long izinHariId) {
        return riwayatRepository.findByIzinHariIdOrderByChangedAtDesc(izinHariId)
                .stream().map(this::toRiwayatDTO).collect(Collectors.toList());
    }

    @Override
    public List<IzinHariDTO> findByKaryawan(Long karyawanId, StatusIzin status,
                                             LocalDate from, LocalDate to, String filter) {
        Karyawan karyawan = getKaryawan(karyawanId);
        LocalDate today = LocalDate.now();

        // Quick-filter shortcuts — tidak saling tumpang tindih
        if ("HARI_INI".equals(filter)) {
            from = today;               to = today;
        } else if ("BESOK".equals(filter)) {
            from = today.plusDays(1);   to = today.plusDays(1);
        } else if ("7_HARI".equals(filter)) {
            // Mulai lusa (today+2) agar tidak campur dengan tab Besok
            from = today.plusDays(2);   to = today.plusDays(7);
        }

        List<IzinHari> list;
        if (status != null && from != null && to != null)
            list = izinHariRepository.findByKaryawanAndStatusAndTanggalBetween(karyawan, status, from, to);
        else if (status != null)
            list = izinHariRepository.findByKaryawanAndStatusOrderByCreatedAtDesc(karyawan, status);
        else if (from != null && to != null)
            list = izinHariRepository.findByKaryawanAndTanggalBetween(karyawan, from, to);
        else
            list = izinHariRepository.findByKaryawanOrderByCreatedAtDesc(karyawan);
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public IzinHariDTO findById(Long izinHariId) {
        return toDTO(getIzinHari(izinHariId));
    }

    // ── Export Excel ──────────────────────────────────────────

    @Override
    public byte[] exportExcel(Long karyawanId, StatusIzin status, LocalDate from, LocalDate to) throws IOException {
        return buildExcel(findByKaryawan(karyawanId, status, from, to, null));
    }

    @Override
    public byte[] exportExcelFromList(java.util.List<IzinHari> list) throws IOException {
        return buildExcel(list.stream().map(this::toDTO).collect(Collectors.toList()));
    }

    private byte[] buildExcel(List<IzinHariDTO> data) throws IOException {
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Izin Hari");
            CellStyle header = wb.createCellStyle();
            Font hf = wb.createFont(); hf.setBold(true); header.setFont(hf);
            header.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            header.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            String[] cols = {"No", "Tgl. Pengajuan", "Tgl. Izin", "Keperluan",
                             "Mengurangi Gaji", "Lampiran", "Status"};
            Row hRow = sheet.createRow(0);
            for (int c = 0; c < cols.length; c++) {
                Cell cell = hRow.createCell(c);
                cell.setCellValue(cols[c]);
                cell.setCellStyle(header);
            }

            int rowNum = 1;
            for (IzinHariDTO d : data) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(
                        d.getCreatedAt() != null ? d.getCreatedAt().format(
                                DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) : "");
                String tglStr = d.getTanggalList() != null
                        ? d.getTanggalList().stream().map(t -> t.format(fmt))
                               .collect(Collectors.joining(", "))
                        : "";
                row.createCell(2).setCellValue(tglStr);
                row.createCell(3).setCellValue(d.getKeperluan());
                row.createCell(4).setCellValue(d.isMengurangiGaji() ? "Ya" : "Tidak");
                row.createCell(5).setCellValue(d.getLampiranUrl() != null ? d.getLampiranUrl() : "");
                row.createCell(6).setCellValue(d.getStatus() != null ? d.getStatus().name() : "");
            }
            for (int c = 0; c < cols.length; c++) sheet.autoSizeColumn(c);
            wb.write(out);
            return out.toByteArray();
        }
    }
}
