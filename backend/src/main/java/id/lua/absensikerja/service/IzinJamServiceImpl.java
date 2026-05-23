package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.IzinJamDTO;
import id.lua.absensikerja.model.dto.IzinJamRequest;
import id.lua.absensikerja.model.dto.IzinJamRiwayatDTO;
import id.lua.absensikerja.model.entity.IzinJam;
import id.lua.absensikerja.model.entity.IzinJamRiwayat;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.repository.IzinJamRepository;
import id.lua.absensikerja.repository.IzinJamRiwayatRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import jakarta.persistence.EntityManager;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IzinJamServiceImpl implements IzinJamService {

    private final IzinJamRepository        izinJamRepository;
    private final IzinJamRiwayatRepository riwayatRepository;
    private final KaryawanRepository       karyawanRepository;
    private final AuthUserUtil             authUserUtil;
    private final EntityManager            entityManager;

    @Value("${app.base-url:http://localhost:8080}")
    private String baseUrl;

    // ── helpers entity ────────────────────────────────────────

    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private IzinJam getIzinJam(Long id) {
        return izinJamRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Izin jam tidak ditemukan"));
    }

    private IzinJamDTO toDTO(IzinJam i) {
        Karyawan k = i.getKaryawan();
        String fotoUrl = (k.getFotoProfil() != null) ? baseUrl + "/" + k.getFotoProfil() : null;
        return IzinJamDTO.builder()
                .id(i.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .fotoProfil(fotoUrl)
                .namaDivisi(k.getDivisi()   != null ? k.getDivisi().getNamaDivisi()   : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .tanggalMulai(i.getTanggalMulai())
                .jamMulai(i.getJamMulai())
                .tanggalSelesai(i.getTanggalSelesai())
                .jamSelesai(i.getJamSelesai())
                .durasiMenit(i.getDurasiMenit())
                .jamPengganti(i.getJamPengganti())
                .dapatMengganti(i.isDapatMengganti())
                .kenaPotong(i.isKenaPotong())
                .kenaDenda(i.isKenaDenda())
                .keperluan(i.getKeperluan())
                .status(i.getStatus())
                .catatanPenolakan(i.getCatatanPenolakan())
                .createdAt(i.getCreatedAt())
                .updatedAt(i.getUpdatedAt())
                .build();
    }

    private int hitungDurasi(IzinJamRequest req) {
        LocalDateTime mulai   = req.getTanggalMulai().atTime(req.getJamMulai());
        LocalDateTime selesai = req.getTanggalSelesai().atTime(req.getJamSelesai());
        long menit = ChronoUnit.MINUTES.between(mulai, selesai);
        return menit > 0 ? (int) menit : 0;
    }

    // ── Audit trail helpers ───────────────────────────────────

    private String currentUser() {
        try {
            return authUserUtil.getCurrentUser().getUsername();
        } catch (Exception e) {
            return "sistem";
        }
    }

    private void simpanRiwayat(IzinJam izin, String tipe, List<IzinJamRiwayatDTO.Item> items) {
        try {
            IzinJamRiwayat r = IzinJamRiwayat.builder()
                    .izinJam(izin)
                    .tipe(tipe)
                    .changedBy(currentUser())
                    .changedAt(LocalDateTime.now())
                    .aktivitas(toJson(items))
                    .build();
            riwayatRepository.save(r);
        } catch (Exception ignored) {}
    }

    private String toJson(List<IzinJamRiwayatDTO.Item> list) {
        if (list == null || list.isEmpty()) return "[]";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            IzinJamRiwayatDTO.Item a = list.get(i);
            sb.append("{\"label\":\"").append(esc(a.getLabel()))
              .append("\",\"lama\":\"").append(esc(a.getLama()))
              .append("\",\"baru\":\"").append(esc(a.getBaru())).append("\"}");
            if (i < list.size() - 1) sb.append(",");
        }
        return sb.append("]").toString();
    }

    private List<IzinJamRiwayatDTO.Item> fromJson(String json) {
        List<IzinJamRiwayatDTO.Item> result = new ArrayList<>();
        if (json == null || json.isBlank()) return result;
        Pattern p = Pattern.compile("\\{\"label\":\"(.*?)\",\"lama\":\"(.*?)\",\"baru\":\"(.*?)\"}");
        Matcher m = p.matcher(json);
        while (m.find()) {
            result.add(IzinJamRiwayatDTO.Item.builder()
                    .label(unesc(m.group(1)))
                    .lama(unesc(m.group(2)))
                    .baru(unesc(m.group(3)))
                    .build());
        }
        return result;
    }

    private String esc(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n");
    }

    private String unesc(String s) {
        if (s == null) return "";
        return s.replace("\\\"", "\"").replace("\\\\", "\\").replace("\\n", "\n");
    }

    private String ya(boolean b) { return b ? "Ya" : "Tidak"; }

    // ── Build aktivitas ───────────────────────────────────────

    private List<IzinJamRiwayatDTO.Item> aktivitasDibuat(IzinJam i) {
        List<IzinJamRiwayatDTO.Item> list = new ArrayList<>();
        list.add(item("Status",                   "", i.getStatus() != null ? i.getStatus().name() : ""));
        list.add(item("Terpenuhi",                "", "Tidak"));
        list.add(item("Jam Mulai",                "", i.getJamMulai()   != null ? i.getJamMulai().toString()   : ""));
        list.add(item("Jam Selesai",              "", i.getJamSelesai() != null ? i.getJamSelesai().toString() : ""));
        list.add(item("Dapat Mengganti Izin Jam", "", ya(i.isDapatMengganti())));
        list.add(item("Kenakan Potongan Izin Jam","", ya(i.isKenaPotong())));
        return list;
    }

    private List<IzinJamRiwayatDTO.Item> aktivitasDiubah(IzinJam lama, IzinJamRequest req) {
        List<IzinJamRiwayatDTO.Item> list = new ArrayList<>();
        list.add(item("Dapat Mengganti Izin Jam",   ya(lama.isDapatMengganti()), ya(req.isDapatMengganti())));
        list.add(item("Kenakan Potongan Izin Jam",   ya(lama.isKenaPotong()),     ya(req.isKenaPotong())));
        list.add(item("Kenakan Denda Keterlambatan", ya(lama.isKenaDenda()),      ya(req.isKenaDenda())));
        return list;
    }

    private IzinJamRiwayatDTO.Item item(String label, String lama, String baru) {
        return IzinJamRiwayatDTO.Item.builder().label(label).lama(lama).baru(baru).build();
    }

    private IzinJamRiwayatDTO toRiwayatDTO(IzinJamRiwayat r) {
        return IzinJamRiwayatDTO.builder()
                .id(r.getId())
                .izinJamId(r.getIzinJam().getId())
                .tipe(r.getTipe())
                .changedBy(r.getChangedBy())
                .changedAt(r.getChangedAt())
                .aktivitas(fromJson(r.getAktivitas()))
                .build();
    }

    // ── CRUD ──────────────────────────────────────────────────

    @Override
    @Transactional
    public IzinJamDTO create(Long karyawanId, IzinJamRequest req) {
        Karyawan karyawan = getKaryawan(karyawanId);
        IzinJam izin = IzinJam.builder()
                .karyawan(karyawan)
                .tanggalMulai(req.getTanggalMulai())
                .jamMulai(req.getJamMulai())
                .tanggalSelesai(req.getTanggalSelesai())
                .jamSelesai(req.getJamSelesai())
                .durasiMenit(hitungDurasi(req))
                .jamPengganti(req.getJamPengganti())
                .dapatMengganti(req.isDapatMengganti())
                .kenaPotong(req.isKenaPotong())
                .kenaDenda(req.isKenaDenda())
                .keperluan(req.getKeperluan())
                .status(StatusIzin.DISETUJUI)
                .build();
        IzinJam saved = izinJamRepository.save(izin);
        simpanRiwayat(saved, "DIBUAT", aktivitasDibuat(saved));
        return toDTO(saved);
    }

    @Override
    @Transactional
    public IzinJamDTO update(Long izinJamId, IzinJamRequest req) {
        IzinJam izin = getIzinJam(izinJamId);
        List<IzinJamRiwayatDTO.Item> aktivitas = aktivitasDiubah(izin, req);
        izin.setTanggalMulai(req.getTanggalMulai());
        izin.setJamMulai(req.getJamMulai());
        izin.setTanggalSelesai(req.getTanggalSelesai());
        izin.setJamSelesai(req.getJamSelesai());
        izin.setDurasiMenit(hitungDurasi(req));
        izin.setJamPengganti(req.getJamPengganti());
        izin.setDapatMengganti(req.isDapatMengganti());
        izin.setKenaPotong(req.isKenaPotong());
        izin.setKenaDenda(req.isKenaDenda());
        izin.setKeperluan(req.getKeperluan());
        IzinJam saved = izinJamRepository.save(izin);
        simpanRiwayat(saved, "DIUBAH", aktivitas);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public IzinJamDTO updateStatus(Long izinJamId, StatusIzin status, String catatanPenolakan) {
        IzinJam izin = getIzinJam(izinJamId);
        String lamaSt = izin.getStatus() != null ? izin.getStatus().name() : "";
        izin.setStatus(status);
        if (catatanPenolakan != null) izin.setCatatanPenolakan(catatanPenolakan);
        IzinJam saved = izinJamRepository.save(izin);
        simpanRiwayat(saved, "DIUBAH", List.of(item("Status", lamaSt, status.name())));
        return toDTO(saved);
    }

    @Override
    @Transactional
    public void delete(Long izinJamId) {
        IzinJam izin = getIzinJam(izinJamId);
        // Hapus semua riwayat terlebih dahulu agar tidak ada FK constraint violation
        riwayatRepository.deleteAll(
                riwayatRepository.findByIzinJamIdOrderByChangedAtDesc(izinJamId));
        entityManager.flush();
        izinJamRepository.delete(izin);
    }

    @Override
    public List<IzinJamDTO> findByKaryawan(Long karyawanId, StatusIzin status,
                                            LocalDate from, LocalDate to) {
        Karyawan karyawan = getKaryawan(karyawanId);
        List<IzinJam> list;
        if (status != null && from != null && to != null)
            list = izinJamRepository.findByKaryawanAndStatusAndTanggalMulaiBetweenOrderByTanggalMulaiDesc(karyawan, status, from, to);
        else if (status != null)
            list = izinJamRepository.findByKaryawanAndStatusOrderByTanggalMulaiDesc(karyawan, status);
        else if (from != null && to != null)
            list = izinJamRepository.findByKaryawanAndTanggalMulaiBetweenOrderByTanggalMulaiDesc(karyawan, from, to);
        else
            list = izinJamRepository.findByKaryawanOrderByTanggalMulaiDesc(karyawan);
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public IzinJamDTO findById(Long izinJamId) {
        return toDTO(getIzinJam(izinJamId));
    }

    @Override
    public List<IzinJamRiwayatDTO> findRiwayat(Long izinJamId) {
        return riwayatRepository.findByIzinJamIdOrderByChangedAtDesc(izinJamId)
                .stream().map(this::toRiwayatDTO).collect(Collectors.toList());
    }

    // ── Export Excel ──────────────────────────────────────────

    @Override
    public byte[] exportExcel(Long karyawanId, StatusIzin status, LocalDate from, LocalDate to) throws IOException {
        Karyawan karyawan = getKaryawan(karyawanId);
        List<IzinJamDTO> data = findByKaryawan(karyawanId, status, from, to);
        return buildExcel(data, "Laporan Izin Jam Karyawan",
                "Nama Karyawan : " + karyawan.getNamaLengkap(),
                status, from, to);
    }

    @Override
    public byte[] exportExcelFromList(List<IzinJam> list) throws IOException {
        List<IzinJamDTO> data = list.stream().map(this::toDTO).collect(Collectors.toList());
        return buildExcel(data, "Laporan Izin Jam (Semua Karyawan)",
                "Total Data : " + data.size(), null, null, null);
    }

    private byte[] buildExcel(List<IzinJamDTO> data, String judul, String infoLine,
                              StatusIzin status, LocalDate from, LocalDate to) throws IOException {
        DateTimeFormatter tglFmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter jamFmt = DateTimeFormatter.ofPattern("HH:mm");

        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            Sheet sheet = wb.createSheet("Izin Jam");

            // ── Styles ──
            CellStyle headerStyle = wb.createCellStyle();
            headerStyle.setFillForegroundColor(IndexedColors.DARK_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            Font headerFont = wb.createFont();
            headerFont.setColor(IndexedColors.WHITE.getIndex());
            headerFont.setBold(true);
            headerFont.setFontHeightInPoints((short) 10);
            headerStyle.setFont(headerFont);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);
            headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);
            headerStyle.setWrapText(true);

            CellStyle titleStyle = wb.createCellStyle();
            Font titleFont = wb.createFont();
            titleFont.setBold(true);
            titleFont.setFontHeightInPoints((short) 12);
            titleStyle.setFont(titleFont);

            CellStyle infoStyle = wb.createCellStyle();
            Font infoFont = wb.createFont();
            infoFont.setFontHeightInPoints((short) 10);
            infoStyle.setFont(infoFont);

            CellStyle dataStyle = wb.createCellStyle();
            dataStyle.setBorderBottom(BorderStyle.THIN);
            dataStyle.setBorderTop(BorderStyle.THIN);
            dataStyle.setBorderLeft(BorderStyle.THIN);
            dataStyle.setBorderRight(BorderStyle.THIN);
            dataStyle.setVerticalAlignment(VerticalAlignment.CENTER);

            CellStyle centerStyle = wb.createCellStyle();
            centerStyle.cloneStyleFrom(dataStyle);
            centerStyle.setAlignment(HorizontalAlignment.CENTER);

            CellStyle boolStyle = wb.createCellStyle();
            boolStyle.cloneStyleFrom(centerStyle);

            // ── Judul ──
            int rowIdx = 0;
            Row titleRow = sheet.createRow(rowIdx++);
            titleRow.setHeightInPoints(20);
            Cell titleCell = titleRow.createCell(0);
            titleCell.setCellValue(judul);
            titleCell.setCellStyle(titleStyle);
            sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 12));

            Row infoNama = sheet.createRow(rowIdx++);
            Cell c1 = infoNama.createCell(0);
            c1.setCellValue(infoLine);
            c1.setCellStyle(infoStyle);
            sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 12));

            String statusLabel = status != null ? status.name() : "Semua";
            String periodeLabel = (from != null && to != null)
                    ? from.format(tglFmt) + " s/d " + to.format(tglFmt)
                    : "Semua Periode";
            Row infoStatus = sheet.createRow(rowIdx++);
            Cell c2 = infoStatus.createCell(0);
            c2.setCellValue("Status : " + statusLabel + "   |   Periode : " + periodeLabel);
            c2.setCellStyle(infoStyle);
            sheet.addMergedRegion(new CellRangeAddress(2, 2, 0, 12));

            Row infoDate = sheet.createRow(rowIdx++);
            Cell c3 = infoDate.createCell(0);
            c3.setCellValue("Diekspor pada : " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")));
            c3.setCellStyle(infoStyle);
            sheet.addMergedRegion(new CellRangeAddress(3, 3, 0, 12));

            rowIdx++; // baris kosong

            // ── Header kolom ──
            String[] headers = {
                "No", "Tgl Mulai", "Jam Mulai", "Tgl Selesai", "Jam Selesai",
                "Durasi", "Jam Pengganti", "Dapat Mengganti", "Kena Potongan",
                "Kena Denda", "Keperluan", "Status", "Catatan Penolakan"
            };
            Row hRow = sheet.createRow(rowIdx++);
            hRow.setHeightInPoints(32);
            for (int i = 0; i < headers.length; i++) {
                Cell hc = hRow.createCell(i);
                hc.setCellValue(headers[i]);
                hc.setCellStyle(headerStyle);
            }

            // ── Data rows ──
            int no = 1;
            for (IzinJamDTO d : data) {
                Row r = sheet.createRow(rowIdx++);
                r.setHeightInPoints(18);

                setCell(r, 0, String.valueOf(no++), centerStyle);
                setCell(r, 1, d.getTanggalMulai() != null ? d.getTanggalMulai().format(tglFmt) : "", dataStyle);
                setCell(r, 2, d.getJamMulai() != null ? d.getJamMulai().format(jamFmt) : "", centerStyle);
                setCell(r, 3, d.getTanggalSelesai() != null ? d.getTanggalSelesai().format(tglFmt) : "", dataStyle);
                setCell(r, 4, d.getJamSelesai() != null ? d.getJamSelesai().format(jamFmt) : "", centerStyle);

                String durasi = "";
                if (d.getDurasiMenit() != null && d.getDurasiMenit() > 0) {
                    int j = d.getDurasiMenit() / 60;
                    int m = d.getDurasiMenit() % 60;
                    if (j > 0 && m > 0) durasi = j + " jam " + m + " mnt";
                    else if (j > 0) durasi = j + " jam";
                    else durasi = m + " mnt";
                }
                setCell(r, 5, durasi, centerStyle);
                setCell(r, 6, d.getJamPengganti() != null ? d.getJamPengganti().format(jamFmt) : "-", centerStyle);
                setCell(r, 7, d.isDapatMengganti() ? "Ya" : "Tidak", centerStyle);
                setCell(r, 8, d.isKenaPotong()     ? "Ya" : "Tidak", centerStyle);
                setCell(r, 9, d.isKenaDenda()       ? "Ya" : "Tidak", centerStyle);
                setCell(r, 10, d.getKeperluan() != null ? d.getKeperluan() : "", dataStyle);
                setCell(r, 11, d.getStatus() != null ? d.getStatus().name() : "", centerStyle);
                setCell(r, 12, d.getCatatanPenolakan() != null ? d.getCatatanPenolakan() : "", dataStyle);
            }

            // ── Column widths ──
            int[] widths = { 5, 14, 12, 14, 12, 12, 14, 18, 18, 18, 40, 16, 30 };
            for (int i = 0; i < widths.length; i++) {
                sheet.setColumnWidth(i, widths[i] * 256);
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            wb.write(out);
            return out.toByteArray();
        }
    }

    private void setCell(Row row, int col, String value, CellStyle style) {
        Cell c = row.createCell(col);
        c.setCellValue(value);
        c.setCellStyle(style);
    }
}
