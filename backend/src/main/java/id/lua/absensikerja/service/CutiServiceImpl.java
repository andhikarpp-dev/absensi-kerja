package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.*;
import id.lua.absensikerja.model.entity.Cuti;
import id.lua.absensikerja.model.entity.CutiRiwayat;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.SisaCutiRiwayat;
import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.SesiSetengahHari;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.repository.CutiRepository;
import id.lua.absensikerja.repository.CutiRiwayatRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.SisaCutiRiwayatRepository;
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
import java.nio.file.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CutiServiceImpl implements CutiService {

    private static final String UPLOAD_DIR = "uploads/cuti/";

    private final CutiRepository             cutiRepository;
    private final CutiRiwayatRepository      riwayatRepository;
    private final SisaCutiRiwayatRepository  sisaCutiRiwayatRepository;
    private final KaryawanRepository         karyawanRepository;
    private final AuthUserUtil               authUserUtil;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── helpers ──────────────────────────────────────────────
    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private Cuti getCuti(Long id) {
        return cutiRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Cuti tidak ditemukan"));
    }

    private String currentUser() {
        try { return authUserUtil.getCurrentUser().getUsername(); }
        catch (Exception e) { return "sistem"; }
    }

    private double hitungJumlahHari(CutiRequest req) {
        if (req.getJenisCuti() == JenisCuti.SETENGAH_HARI) return 0.5;
        long days = ChronoUnit.DAYS.between(req.getTanggalMulai(), req.getTanggalSelesai()) + 1;
        return Math.max(1, days);
    }

    // ── audit ────────────────────────────────────────────────
    private void simpanRiwayat(Cuti cuti, String tipe, List<CutiRiwayatDTO.Item> items) {
        try {
            CutiRiwayat r = CutiRiwayat.builder()
                    .cuti(cuti).tipe(tipe).changedBy(currentUser())
                    .changedAt(LocalDateTime.now()).aktivitas(toJson(items)).build();
            riwayatRepository.save(r);
        } catch (Exception ignored) {}
    }

    private String toJson(List<CutiRiwayatDTO.Item> list) {
        if (list == null || list.isEmpty()) return "[]";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            CutiRiwayatDTO.Item a = list.get(i);
            sb.append("{\"label\":\"").append(esc(a.getLabel()))
              .append("\",\"lama\":\"").append(esc(a.getLama()))
              .append("\",\"baru\":\"").append(esc(a.getBaru())).append("\"}");
            if (i < list.size() - 1) sb.append(",");
        }
        return sb.append("]").toString();
    }

    private List<CutiRiwayatDTO.Item> fromJson(String json) {
        List<CutiRiwayatDTO.Item> result = new ArrayList<>();
        if (json == null || json.isBlank()) return result;
        Pattern p = Pattern.compile("\\{\"label\":\"(.*?)\",\"lama\":\"(.*?)\",\"baru\":\"(.*?)\"}");
        Matcher m = p.matcher(json);
        while (m.find()) result.add(CutiRiwayatDTO.Item.builder()
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

    private CutiRiwayatDTO.Item item(String label, String lama, String baru) {
        return CutiRiwayatDTO.Item.builder().label(label).lama(lama).baru(baru).build();
    }

    private CutiRiwayatDTO toRiwayatDTO(CutiRiwayat r) {
        return CutiRiwayatDTO.builder()
                .id(r.getId()).cutiId(r.getCuti().getId())
                .tipe(r.getTipe()).changedBy(r.getChangedBy())
                .changedAt(r.getChangedAt()).aktivitas(fromJson(r.getAktivitas()))
                .build();
    }

    // ── files ────────────────────────────────────────────────
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

    private CutiDTO toDTO(Cuti c) {
        Karyawan k = c.getKaryawan();
        String url = (c.getLampiranUrl() != null) ? baseUrl + "/" + c.getLampiranUrl() : null;
        return CutiDTO.builder()
                .id(c.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi()   != null ? k.getDivisi().getNamaDivisi()   : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .jenisCuti(c.getJenisCuti())
                .tanggalMulai(c.getTanggalMulai())
                .tanggalSelesai(c.getTanggalSelesai())
                .jumlahHari(c.getJumlahHari())
                .sesiSetengahHari(c.getSesiSetengahHari())
                .keperluan(c.getKeperluan())
                .lampiranUrl(url)
                .mengurangiSisaCuti(c.isMengurangiSisaCuti())
                .status(c.getStatus())
                .catatanPenolakan(c.getCatatanPenolakan())
                .createdAt(c.getCreatedAt())
                .updatedAt(c.getUpdatedAt())
                .build();
    }

    // ── CRUD ─────────────────────────────────────────────────
    @Override
    @Transactional
    public CutiDTO create(Long karyawanId, CutiRequest req, MultipartFile lampiran) throws IOException {
        Karyawan karyawan = getKaryawan(karyawanId);

        if (req.getJenisCuti() == JenisCuti.SETENGAH_HARI) {
            req.setTanggalSelesai(req.getTanggalMulai());
            if (req.getSesiSetengahHari() == null) req.setSesiSetengahHari(SesiSetengahHari.PAGI);
        }
        if (req.getTanggalSelesai().isBefore(req.getTanggalMulai())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tanggal selesai harus >= tanggal mulai");
        }

        boolean mengurangi = req.getMengurangiSisaCuti() != null
                ? req.getMengurangiSisaCuti()
                : (req.getJenisCuti() != JenisCuti.KHUSUS);

        String lampiranUrl = null;
        if (lampiran != null && !lampiran.isEmpty()) lampiranUrl = saveFile(lampiran);

        Cuti cuti = Cuti.builder()
                .karyawan(karyawan)
                .jenisCuti(req.getJenisCuti())
                .tanggalMulai(req.getTanggalMulai())
                .tanggalSelesai(req.getTanggalSelesai())
                .jumlahHari(hitungJumlahHari(req))
                .sesiSetengahHari(req.getJenisCuti() == JenisCuti.SETENGAH_HARI ? req.getSesiSetengahHari() : null)
                .keperluan(req.getKeperluan())
                .lampiranUrl(lampiranUrl)
                .mengurangiSisaCuti(mengurangi)
                .status(StatusIzin.MENUNGGU)
                .build();
        Cuti saved = cutiRepository.save(cuti);

        List<CutiRiwayatDTO.Item> items = new ArrayList<>();
        items.add(item("Status", "", StatusIzin.MENUNGGU.name()));
        items.add(item("Jenis Cuti", "", saved.getJenisCuti().name()));
        items.add(item("Jumlah Hari", "", String.valueOf(saved.getJumlahHari())));
        simpanRiwayat(saved, "DIBUAT", items);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public CutiDTO update(Long cutiId, CutiRequest req, MultipartFile lampiran) throws IOException {
        Cuti cuti = getCuti(cutiId);
        List<CutiRiwayatDTO.Item> items = new ArrayList<>();

        if (req.getJenisCuti() == JenisCuti.SETENGAH_HARI) {
            req.setTanggalSelesai(req.getTanggalMulai());
        }

        if (cuti.getJenisCuti() != req.getJenisCuti())
            items.add(item("Jenis Cuti", cuti.getJenisCuti().name(), req.getJenisCuti().name()));
        if (!cuti.getTanggalMulai().equals(req.getTanggalMulai()))
            items.add(item("Tanggal Mulai", cuti.getTanggalMulai().toString(), req.getTanggalMulai().toString()));
        if (!cuti.getTanggalSelesai().equals(req.getTanggalSelesai()))
            items.add(item("Tanggal Selesai", cuti.getTanggalSelesai().toString(), req.getTanggalSelesai().toString()));
        if (!cuti.getKeperluan().equals(req.getKeperluan()))
            items.add(item("Keperluan", cuti.getKeperluan(), req.getKeperluan()));

        if (lampiran != null && !lampiran.isEmpty()) {
            deleteFile(cuti.getLampiranUrl());
            cuti.setLampiranUrl(saveFile(lampiran));
            items.add(item("Lampiran", "Ada perubahan file", ""));
        }

        boolean mengurangi = req.getMengurangiSisaCuti() != null
                ? req.getMengurangiSisaCuti()
                : (req.getJenisCuti() != JenisCuti.KHUSUS);

        cuti.setJenisCuti(req.getJenisCuti());
        cuti.setTanggalMulai(req.getTanggalMulai());
        cuti.setTanggalSelesai(req.getTanggalSelesai());
        cuti.setJumlahHari(hitungJumlahHari(req));
        cuti.setSesiSetengahHari(req.getJenisCuti() == JenisCuti.SETENGAH_HARI ? req.getSesiSetengahHari() : null);
        cuti.setKeperluan(req.getKeperluan());
        cuti.setMengurangiSisaCuti(mengurangi);

        Cuti saved = cutiRepository.save(cuti);
        if (!items.isEmpty()) simpanRiwayat(saved, "DIUBAH", items);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public CutiDTO updateStatus(Long cutiId, StatusIzin status, String catatanPenolakan) {
        Cuti cuti = getCuti(cutiId);
        StatusIzin lama = cuti.getStatus();

        // Sinkronisasi sisa cuti
        Karyawan k = cuti.getKaryawan();
        if (cuti.isMengurangiSisaCuti() && k.getSisaCuti() != null) {
            double pemakaian = cuti.getJumlahHari() != null ? cuti.getJumlahHari() : 0;
            int jumlahBulat = (int) Math.ceil(pemakaian);
            String tglStr = cuti.getTanggalMulai() != null ? cuti.getTanggalMulai().toString() : "";
            String keperluan = cuti.getKeperluan() != null ? cuti.getKeperluan() : "";
            // Sebelumnya DISETUJUI → status berubah ke selain DISETUJUI: kembalikan
            if (lama == StatusIzin.DISETUJUI && status != StatusIzin.DISETUJUI) {
                int newSaldo = k.getSisaCuti() + jumlahBulat;
                k.setSisaCuti(newSaldo);
                karyawanRepository.save(k);
                logSisaCutiChange(k.getId(), "Pembatalan Cuti (" + keperluan + ") pada " + tglStr, +jumlahBulat, newSaldo);
            }
            // Sebelumnya bukan DISETUJUI → menjadi DISETUJUI: kurangi
            else if (lama != StatusIzin.DISETUJUI && status == StatusIzin.DISETUJUI) {
                int newSaldo = Math.max(0, k.getSisaCuti() - jumlahBulat);
                k.setSisaCuti(newSaldo);
                karyawanRepository.save(k);
                logSisaCutiChange(k.getId(), "Cuti (" + keperluan + ") pada " + tglStr, -jumlahBulat, newSaldo);
            }
        }

        cuti.setStatus(status);
        if (catatanPenolakan != null) cuti.setCatatanPenolakan(catatanPenolakan);
        Cuti saved = cutiRepository.save(cuti);

        List<CutiRiwayatDTO.Item> items = new ArrayList<>();
        items.add(item("Status", lama != null ? lama.name() : "", status.name()));
        if (catatanPenolakan != null && !catatanPenolakan.isBlank())
            items.add(item("Catatan", "", catatanPenolakan));
        simpanRiwayat(saved, "STATUS", items);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public void delete(Long cutiId) {
        Cuti cuti = getCuti(cutiId);
        // rollback sisa cuti bila statusnya DISETUJUI
        if (cuti.getStatus() == StatusIzin.DISETUJUI && cuti.isMengurangiSisaCuti()) {
            Karyawan k = cuti.getKaryawan();
            if (k.getSisaCuti() != null && cuti.getJumlahHari() != null) {
                k.setSisaCuti(k.getSisaCuti() + (int) Math.ceil(cuti.getJumlahHari()));
                karyawanRepository.save(k);
            }
        }
        deleteFile(cuti.getLampiranUrl());
        riwayatRepository.deleteByCutiId(cutiId);
        cutiRepository.delete(cuti);
    }

    @Override
    public List<CutiRiwayatDTO> findRiwayat(Long cutiId) {
        return riwayatRepository.findByCutiIdOrderByChangedAtDesc(cutiId)
                .stream().map(this::toRiwayatDTO).collect(Collectors.toList());
    }

    @Override
    public List<CutiDTO> findByKaryawan(Long karyawanId, StatusIzin status, JenisCuti jenis,
                                        LocalDate from, LocalDate to, String filter) {
        Karyawan karyawan = getKaryawan(karyawanId);
        LocalDate today = LocalDate.now();

        if ("HARI_INI".equals(filter)) { from = today; to = today; }
        else if ("BESOK".equals(filter)) { from = today.plusDays(1); to = today.plusDays(1); }
        else if ("7_HARI".equals(filter)) { from = today.plusDays(1); to = today.plusDays(7); }

        final StatusIzin fStatus = status;
        final JenisCuti  fJenis  = jenis;
        final LocalDate  fFrom   = from;
        final LocalDate  fTo     = to;

        return cutiRepository.findByKaryawanOrderByCreatedAtDesc(karyawan).stream()
                .filter(c -> fStatus == null || c.getStatus() == fStatus)
                .filter(c -> fJenis  == null || c.getJenisCuti() == fJenis)
                .filter(c -> fFrom   == null || (c.getTanggalSelesai() != null
                                && !c.getTanggalSelesai().isBefore(fFrom)))
                .filter(c -> fTo     == null || (c.getTanggalMulai() != null
                                && !c.getTanggalMulai().isAfter(fTo)))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CutiDTO findById(Long cutiId) {
        return toDTO(getCuti(cutiId));
    }

    // ── Sisa cuti ────────────────────────────────────────────
    @Override
    public SisaCutiDTO getSisaCuti(Long karyawanId) {
        Karyawan k = getKaryawan(karyawanId);
        Double terpakai = cutiRepository.sumJumlahHari(k, StatusIzin.DISETUJUI);

        // Hitung tanggal pembaruan berikutnya bila belum disimpan
        LocalDate nextRenewal = k.getTglPembaruanBerikutnya();
        if (k.isPembaruanCutiAktif() && nextRenewal == null) {
            LocalDate basis = k.getTglMulaiDapatCuti() != null
                    ? k.getTglMulaiDapatCuti()
                    : (k.getTglMulaiBekerja() != null ? k.getTglMulaiBekerja() : LocalDate.now());
            int periode = k.getPeriodePembaruanBulan() != null ? k.getPeriodePembaruanBulan() : 12;
            nextRenewal = basis.plusMonths(periode);
        }

        return SisaCutiDTO.builder()
                .sisaCuti(k.getSisaCuti())
                .tglCutiBerakhir(k.getTglCutiBeakhir())
                .terpakai(terpakai != null ? terpakai : 0.0)
                .pembaruanCutiAktif(k.isPembaruanCutiAktif())
                .periodePembaruanBulan(k.getPeriodePembaruanBulan())
                .jumlahCutiPembaruan(k.getJumlahCutiPembaruan())
                .tambahkanSisaCutiSebelumnya(k.isTambahkanSisaCutiSebelumnya())
                .tglPembaruanBerikutnya(nextRenewal)
                .build();
    }

    @Override
    @Transactional
    public SisaCutiDTO updateSisaCuti(Long karyawanId, UpdateSisaCutiRequest req) {
        Karyawan k = getKaryawan(karyawanId);
        Integer oldSisa = k.getSisaCuti();
        if (req.getSisaCuti() != null)        k.setSisaCuti(req.getSisaCuti());
        if (req.getTglCutiBerakhir() != null) k.setTglCutiBeakhir(req.getTglCutiBerakhir());

        // Pengaturan pembaruan otomatis
        if (req.getPembaruanCutiAktif() != null)
            k.setPembaruanCutiAktif(req.getPembaruanCutiAktif());
        if (req.getPeriodePembaruanBulan() != null && req.getPeriodePembaruanBulan() > 0)
            k.setPeriodePembaruanBulan(req.getPeriodePembaruanBulan());
        if (req.getJumlahCutiPembaruan() != null && req.getJumlahCutiPembaruan() >= 0)
            k.setJumlahCutiPembaruan(req.getJumlahCutiPembaruan());
        if (req.getTambahkanSisaCutiSebelumnya() != null)
            k.setTambahkanSisaCutiSebelumnya(req.getTambahkanSisaCutiSebelumnya());
        if (req.getTglPembaruanBerikutnya() != null)
            k.setTglPembaruanBerikutnya(req.getTglPembaruanBerikutnya());

        // Bila pembaruan diaktifkan & belum ada tanggal berikutnya, hitung otomatis
        if (k.isPembaruanCutiAktif() && k.getTglPembaruanBerikutnya() == null) {
            LocalDate basis = k.getTglMulaiDapatCuti() != null
                    ? k.getTglMulaiDapatCuti()
                    : (k.getTglMulaiBekerja() != null ? k.getTglMulaiBekerja() : LocalDate.now());
            int periode = k.getPeriodePembaruanBulan() != null ? k.getPeriodePembaruanBulan() : 12;
            k.setTglPembaruanBerikutnya(basis.plusMonths(periode));
        }

        karyawanRepository.save(k);

        // Log jika sisa cuti berubah
        if (req.getSisaCuti() != null && !req.getSisaCuti().equals(oldSisa)) {
            int delta = req.getSisaCuti() - (oldSisa != null ? oldSisa : 0);
            logSisaCutiChange(karyawanId, "Perubahan Manual Cuti", delta, req.getSisaCuti());
        }

        return getSisaCuti(karyawanId);
    }

    // ── Export Excel ─────────────────────────────────────────
    @Override
    public byte[] exportExcel(Long karyawanId, StatusIzin status, JenisCuti jenis,
                              LocalDate from, LocalDate to) throws IOException {
        List<CutiDTO> data = findByKaryawan(karyawanId, status, jenis, from, to, null);
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = wb.createSheet("Cuti");
            CellStyle header = wb.createCellStyle();
            Font hf = wb.createFont(); hf.setBold(true); header.setFont(hf);
            header.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            header.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            String[] cols = {"No", "Tgl. Pengajuan", "Jenis Cuti", "Tgl. Mulai", "Tgl. Selesai",
                             "Jumlah Hari", "Sesi", "Keperluan", "Lampiran", "Mengurangi Cuti", "Status"};
            Row hRow = sheet.createRow(0);
            for (int c = 0; c < cols.length; c++) {
                Cell cell = hRow.createCell(c);
                cell.setCellValue(cols[c]);
                cell.setCellStyle(header);
            }

            int rowNum = 1;
            for (CutiDTO d : data) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(d.getCreatedAt() != null
                        ? d.getCreatedAt().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) : "");
                row.createCell(2).setCellValue(d.getJenisCuti() != null ? d.getJenisCuti().name() : "");
                row.createCell(3).setCellValue(d.getTanggalMulai() != null ? d.getTanggalMulai().format(fmt) : "");
                row.createCell(4).setCellValue(d.getTanggalSelesai() != null ? d.getTanggalSelesai().format(fmt) : "");
                row.createCell(5).setCellValue(d.getJumlahHari() != null ? d.getJumlahHari() : 0);
                row.createCell(6).setCellValue(d.getSesiSetengahHari() != null ? d.getSesiSetengahHari().name() : "");
                row.createCell(7).setCellValue(d.getKeperluan());
                row.createCell(8).setCellValue(d.getLampiranUrl() != null ? d.getLampiranUrl() : "");
                row.createCell(9).setCellValue(d.isMengurangiSisaCuti() ? "Ya" : "Tidak");
                row.createCell(10).setCellValue(d.getStatus() != null ? d.getStatus().name() : "");
            }
            for (int c = 0; c < cols.length; c++) sheet.autoSizeColumn(c);
            wb.write(out);
            return out.toByteArray();
        }
    }

    // ── Admin ─────────────────────────────────────────────────
    @Override
    public List<CutiDTO> findAllAdmin(Long perusahaanId, StatusIzin status, JenisCuti jenis,
                                      LocalDate from, LocalDate to, Long divisiId, String cari) {
        List<Cuti> list;
        if (perusahaanId != null) {
            list = cutiRepository.searchAdmin(perusahaanId, status, jenis, from, to);
        } else {
            list = cutiRepository.findAll().stream()
                    .filter(c -> (status == null || c.getStatus() == status))
                    .filter(c -> (jenis == null || c.getJenisCuti() == jenis))
                    .filter(c -> (from == null || !c.getTanggalSelesai().isBefore(from)))
                    .filter(c -> (to == null || !c.getTanggalMulai().isAfter(to)))
                    .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                    .collect(Collectors.toList());
        }
        final Long fDivisi = divisiId;
        final String fCari = (cari != null ? cari.toLowerCase() : null);
        if (fDivisi != null)
            list = list.stream().filter(c ->
                c.getKaryawan().getDivisi() != null &&
                fDivisi.equals(c.getKaryawan().getDivisi().getId()))
                .collect(Collectors.toList());
        if (fCari != null && !fCari.isBlank())
            list = list.stream().filter(c ->
                c.getKaryawan().getNamaLengkap().toLowerCase().contains(fCari) ||
                (c.getKeperluan() != null && c.getKeperluan().toLowerCase().contains(fCari)))
                .collect(Collectors.toList());
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public byte[] exportExcelFromList(java.util.List<id.lua.absensikerja.model.entity.Cuti> rawList) throws IOException {
        List<CutiDTO> data = rawList.stream().map(this::toDTO).collect(Collectors.toList());
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        try (XSSFWorkbook wb = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Sheet sheet = wb.createSheet("Cuti");
            CellStyle header = wb.createCellStyle();
            Font hf = wb.createFont(); hf.setBold(true); header.setFont(hf);
            header.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
            header.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            String[] cols = {"No","Karyawan","Divisi","Tgl. Pengajuan","Jenis Cuti",
                             "Tgl. Mulai","Tgl. Selesai","Jumlah Hari","Sesi","Keperluan","Status"};
            Row hRow = sheet.createRow(0);
            for (int c = 0; c < cols.length; c++) {
                Cell cell = hRow.createCell(c);
                cell.setCellValue(cols[c]); cell.setCellStyle(header);
            }
            int rowNum = 1;
            for (CutiDTO d : data) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(rowNum - 1);
                row.createCell(1).setCellValue(d.getNamaKaryawan() != null ? d.getNamaKaryawan() : "");
                row.createCell(2).setCellValue(d.getNamaDivisi() != null ? d.getNamaDivisi() : "");
                row.createCell(3).setCellValue(d.getCreatedAt() != null
                        ? d.getCreatedAt().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) : "");
                row.createCell(4).setCellValue(d.getJenisCuti() != null ? d.getJenisCuti().name() : "");
                row.createCell(5).setCellValue(d.getTanggalMulai() != null ? d.getTanggalMulai().format(fmt) : "");
                row.createCell(6).setCellValue(d.getTanggalSelesai() != null ? d.getTanggalSelesai().format(fmt) : "");
                row.createCell(7).setCellValue(d.getJumlahHari() != null ? d.getJumlahHari() : 0);
                row.createCell(8).setCellValue(d.getSesiSetengahHari() != null ? d.getSesiSetengahHari().name() : "");
                row.createCell(9).setCellValue(d.getKeperluan() != null ? d.getKeperluan() : "");
                row.createCell(10).setCellValue(d.getStatus() != null ? d.getStatus().name() : "");
            }
            for (int c = 0; c < cols.length; c++) sheet.autoSizeColumn(c);
            wb.write(out);
            return out.toByteArray();
        }
    }

    // ── Ledger Sisa Cuti ──────────────────────────────────────
    @Override
    public List<SisaCutiRiwayatDTO> getSisaCutiRiwayat(Long karyawanId) {
        return sisaCutiRiwayatRepository
                .findByKaryawanIdOrderByTanggalDesc(karyawanId)
                .stream()
                .map(r -> SisaCutiRiwayatDTO.builder()
                        .id(r.getId())
                        .tanggal(r.getTanggal())
                        .deskripsi(r.getDeskripsi())
                        .jumlah(r.getJumlah())
                        .saldo(r.getSaldo())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void logSisaCutiChange(Long karyawanId, String deskripsi, int jumlah, int saldoBaru) {
        Karyawan k = karyawanRepository.findById(karyawanId).orElse(null);
        if (k == null) return;
        SisaCutiRiwayat entry = SisaCutiRiwayat.builder()
                .karyawan(k)
                .tanggal(LocalDateTime.now())
                .deskripsi(deskripsi)
                .jumlah(jumlah)
                .saldo(saldoBaru)
                .build();
        sisaCutiRiwayatRepository.save(entry);
    }
}
