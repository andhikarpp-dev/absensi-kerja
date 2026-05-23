package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.DivisiDTO;
import id.lua.absensikerja.model.dto.DivisiRequest;
import id.lua.absensikerja.model.dto.DivisiRiwayatDTO;
import id.lua.absensikerja.model.dto.SupervisiItemDTO;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.DivisiRiwayat;
import id.lua.absensikerja.model.entity.DivisiSupervisi;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.DivisiRiwayatRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.server.ResponseStatusException;

import jakarta.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DivisiServiceImpl implements DivisiService {

    private final DivisiRepository        divisiRepository;
    private final KaryawanRepository      karyawanRepository;
    private final DivisiRiwayatRepository riwayatRepository;
    private final id.lua.absensikerja.repository.PerusahaanRepository perusahaanRepository;

    @Override
    public List<DivisiDTO> findAll(Long ownerId) {
        if (ownerId != null) {
            return perusahaanRepository.findByOwnerId(ownerId)
                    .map(p -> divisiRepository.findByPerusahaanId(p.getId()))
                    .orElse(java.util.Collections.emptyList())
                    .stream().map(this::toDTO).collect(Collectors.toList());
        }
        return divisiRepository.findAll().stream()
                .map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public DivisiDTO findById(Long id) {
        return toDTO(getOrThrow(id));
    }

    @Override
    @Transactional
    public DivisiDTO create(DivisiRequest req, Long ownerId) {
        if (ownerId != null) {
            id.lua.absensikerja.model.entity.Perusahaan perusahaan =
                    perusahaanRepository.findByOwnerId(ownerId).orElse(null);
            Long perusahaanId = perusahaan != null ? perusahaan.getId() : null;
            if (perusahaanId != null && divisiRepository
                    .existsByNamaDivisiAndPerusahaanIdAndIsDeletedFalse(req.getNamaDivisi(), perusahaanId)) {
                throw new ResponseStatusException(HttpStatus.CONFLICT,
                        "Nama divisi '" + req.getNamaDivisi() + "' sudah digunakan");
            }
            Divisi divisi = new Divisi();
            toEntity(req, divisi);
            if (perusahaan != null) divisi.setPerusahaan(perusahaan);
            Divisi saved = divisiRepository.save(divisi);
            simpanRiwayat(saved, "DIBUAT", buildAktivitasDibuat(req));
            return toDTO(divisiRepository.save(saved));
        } else {
            if (divisiRepository.existsByNamaDivisiAndIsDeletedFalse(req.getNamaDivisi())) {
                throw new ResponseStatusException(HttpStatus.CONFLICT,
                        "Nama divisi '" + req.getNamaDivisi() + "' sudah digunakan");
            }
            Divisi divisi = new Divisi();
            toEntity(req, divisi);
            Divisi saved = divisiRepository.save(divisi);
            simpanRiwayat(saved, "DIBUAT", buildAktivitasDibuat(req));
            return toDTO(divisiRepository.save(saved));
        }
    }

    @Override
    @Transactional
    public DivisiDTO update(Long id, DivisiRequest req) {
        Divisi divisi = getOrThrow(id);
        if (!divisi.getNamaDivisi().equals(req.getNamaDivisi())
                && divisiRepository.existsByNamaDivisiAndIsDeletedFalse(req.getNamaDivisi())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Nama divisi '" + req.getNamaDivisi() + "' sudah digunakan");
        }
        List<DivisiRiwayatDTO.AktivitasItem> aktivitas = buildAktivitasDiubah(divisi, req);
        toEntity(req, divisi);
        Divisi saved = divisiRepository.save(divisi);
        simpanRiwayat(saved, "DIUBAH", aktivitas);
        return toDTO(divisiRepository.save(saved));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Divisi divisi = getOrThrow(id);
        simpanRiwayat(divisi, "DIHAPUS", List.of(
                DivisiRiwayatDTO.AktivitasItem.builder().label("Nama Divisi").nilai(divisi.getNamaDivisi()).build()
        ));
        divisi.setDeleted(true);
        divisi.setDeletedAt(LocalDateTime.now());
        divisiRepository.save(divisi);
    }

    @Override
    public List<DivisiRiwayatDTO> findRiwayat(Long divisiId) {
        return riwayatRepository.findByDivisiIdOrderByChangedAtDesc(divisiId)
                .stream()
                .map(this::toRiwayatDTO)
                .collect(Collectors.toList());
    }

    // ── helpers ───────────────────────────────────────────

    private Divisi getOrThrow(Long id) {
        return divisiRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Divisi dengan id " + id + " tidak ditemukan"));
    }

    private Karyawan getSupervisor(Long supervisorId) {
        if (supervisorId == null) return null;
        return karyawanRepository.findById(supervisorId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Supervisor dengan id " + supervisorId + " tidak ditemukan"));
    }

    /**
     * Ambil username dari JWT Bearer token di header Authorization.
     * JWT payload (bagian ke-2) adalah Base64Url; field "sub" adalah username.
     */
    private String currentUser() {
        try {
            ServletRequestAttributes attrs =
                    (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (attrs == null) return null;
            HttpServletRequest request = attrs.getRequest();
            String auth = request.getHeader("Authorization");
            if (auth == null || !auth.startsWith("Bearer ")) return null;
            String token = auth.substring(7);
            String[] parts = token.split("\\.");
            if (parts.length < 2) return null;
            String payload = new String(Base64.getUrlDecoder().decode(parts[1]));
            // Cari "sub":"<username>" dalam JSON payload
            Matcher m = Pattern.compile("\"sub\"\\s*:\\s*\"([^\"]+)\"").matcher(payload);
            return m.find() ? m.group(1) : null;
        } catch (Exception ignored) {
            return null;
        }
    }

    private void simpanRiwayat(Divisi divisi, String tipe, List<DivisiRiwayatDTO.AktivitasItem> aktivitasList) {
        try {
            String json = toJson(aktivitasList);
            DivisiRiwayat r = new DivisiRiwayat();
            r.setDivisi(divisi);
            r.setTipe(tipe);
            r.setChangedBy(currentUser());
            r.setChangedAt(LocalDateTime.now());
            r.setAktivitas(json);
            riwayatRepository.save(r);
        } catch (Exception ignored) {}
    }

    /** Serialize list ke JSON sederhana tanpa library eksternal */
    private String toJson(List<DivisiRiwayatDTO.AktivitasItem> list) {
        if (list == null || list.isEmpty()) return "[]";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            DivisiRiwayatDTO.AktivitasItem a = list.get(i);
            sb.append("{\"label\":\"").append(escapeJson(a.getLabel()))
              .append("\",\"nilai\":\"").append(escapeJson(a.getNilai())).append("\"}");
            if (i < list.size() - 1) sb.append(",");
        }
        return sb.append("]").toString();
    }

    private String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"")
                .replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
    }

    /** Bangun daftar aktivitas saat divisi DIBUAT */
    private List<DivisiRiwayatDTO.AktivitasItem> buildAktivitasDibuat(DivisiRequest req) {
        List<DivisiRiwayatDTO.AktivitasItem> list = new ArrayList<>();
        list.add(item("Nama Divisi", req.getNamaDivisi()));
        list.add(item("Denda Keterlambatan", req.isDendaKeterlambatan() ? "Aktif" : "Non Aktif"));
        list.add(item("Sistem Kerja", labelSistemKerja(req.getSistemKerja() != null ? req.getSistemKerja().name() : null)));
        list.add(item("Catatan Saat Presensi Masuk", labelCatatan(req.getCatatanMasuk())));
        if (req.getCatatanMasukLabel()    != null) list.add(item("Catatan Saat Presensi Masuk (Label)", req.getCatatanMasukLabel()));
        if (req.getCatatanMasukPlaceholder() != null) list.add(item("Catatan Saat Presensi Masuk (EN)", req.getCatatanMasukPlaceholder()));
        list.add(item("Catatan Saat Presensi Keluar", labelCatatan(req.getCatatanKeluar())));
        if (req.getCatatanKeluarLabel()    != null) list.add(item("Catatan Saat Presensi Keluar (Label)", req.getCatatanKeluarLabel()));
        if (req.getCatatanKeluarPlaceholder() != null) list.add(item("Catatan Saat Presensi Keluar (EN)", req.getCatatanKeluarPlaceholder()));
        list.add(item("Catatan Saat Presensi Mulai Lembur", labelCatatan(req.getCatatanMulaiLembur())));
        if (req.getCatatanMulaiLemburLabel()    != null) list.add(item("Catatan Saat Presensi Mulai Lembur (Label)", req.getCatatanMulaiLemburLabel()));
        if (req.getCatatanMulaiLemburPlaceholder() != null) list.add(item("Catatan Saat Presensi Mulai Lembur (EN)", req.getCatatanMulaiLemburPlaceholder()));
        list.add(item("Catatan Saat Presensi Selesai Lembur", labelCatatan(req.getCatatanSelesaiLembur())));
        if (req.getCatatanSelesaiLemburLabel()    != null) list.add(item("Catatan Saat Presensi Selesai Lembur (Label)", req.getCatatanSelesaiLemburLabel()));
        if (req.getCatatanSelesaiLemburPlaceholder() != null) list.add(item("Catatan Saat Presensi Selesai Lembur (EN)", req.getCatatanSelesaiLemburPlaceholder()));
        list.add(item("Masuk",            req.isLokasiMasuk()             ? "Aktif" : "Non Aktif"));
        list.add(item("Istirahat",        req.isLokasiIstirahat()         ? "Aktif" : "Non Aktif"));
        list.add(item("Selesai Istirahat",req.isLokasiSelesaiIstirahat()  ? "Aktif" : "Non Aktif"));
        list.add(item("Keluar",           req.isLokasiKeluar()            ? "Aktif" : "Non Aktif"));
        list.add(item("Lembur",           req.isLokasiLembur()            ? "Aktif" : "Non Aktif"));
        list.add(item("Selesai Lembur",   req.isLokasiSelesaiLembur()     ? "Aktif" : "Non Aktif"));
        list.add(item("Validasi Perangkat",         req.isValidasiPerangkat()       ? "Aktif" : "Non Aktif"));
        list.add(item("Presensi Keluar Otomatis",   req.isPresensiKeluarOtomatis()  ? "Aktif" : "Non Aktif"));
        list.add(item("Denda Terlambat Keluar",     req.isDendaTerlambatKeluar()    ? "Aktif" : "Non Aktif"));
        list.add(item("Kunjungan Klien",            req.isKunjunganKlien()          ? "Aktif" : "Non Aktif"));
        return list;
    }

    /** Bangun daftar aktivitas saat divisi DIUBAH — hanya field yang berubah */
    private List<DivisiRiwayatDTO.AktivitasItem> buildAktivitasDiubah(Divisi old, DivisiRequest req) {
        List<DivisiRiwayatDTO.AktivitasItem> list = new ArrayList<>();
        diff(list, "Nama Divisi", old.getNamaDivisi(), req.getNamaDivisi());
        diff(list, "Denda Keterlambatan", old.isDendaKeterlambatan() ? "Aktif" : "Non Aktif",
                req.isDendaKeterlambatan() ? "Aktif" : "Non Aktif");
        diff(list, "Sistem Kerja",
                labelSistemKerja(old.getSistemKerja() != null ? old.getSistemKerja().name() : null),
                labelSistemKerja(req.getSistemKerja() != null ? req.getSistemKerja().name() : null));
        diff(list, "Catatan Saat Presensi Masuk", labelCatatan(old.getCatatanMasuk()), labelCatatan(req.getCatatanMasuk()));
        diff(list, "Catatan Saat Presensi Masuk (Label)", old.getCatatanMasukLabel(), req.getCatatanMasukLabel());
        diff(list, "Catatan Saat Presensi Masuk (EN)", old.getCatatanMasukPlaceholder(), req.getCatatanMasukPlaceholder());
        diff(list, "Catatan Saat Presensi Keluar", labelCatatan(old.getCatatanKeluar()), labelCatatan(req.getCatatanKeluar()));
        diff(list, "Catatan Saat Presensi Keluar (Label)", old.getCatatanKeluarLabel(), req.getCatatanKeluarLabel());
        diff(list, "Catatan Saat Presensi Keluar (EN)", old.getCatatanKeluarPlaceholder(), req.getCatatanKeluarPlaceholder());
        diff(list, "Catatan Saat Presensi Mulai Lembur", labelCatatan(old.getCatatanMulaiLembur()), labelCatatan(req.getCatatanMulaiLembur()));
        diff(list, "Catatan Saat Presensi Mulai Lembur (Label)", old.getCatatanMulaiLemburLabel(), req.getCatatanMulaiLemburLabel());
        diff(list, "Catatan Saat Presensi Mulai Lembur (EN)", old.getCatatanMulaiLemburPlaceholder(), req.getCatatanMulaiLemburPlaceholder());
        diff(list, "Catatan Saat Presensi Selesai Lembur", labelCatatan(old.getCatatanSelesaiLembur()), labelCatatan(req.getCatatanSelesaiLembur()));
        diff(list, "Catatan Saat Presensi Selesai Lembur (Label)", old.getCatatanSelesaiLemburLabel(), req.getCatatanSelesaiLemburLabel());
        diff(list, "Catatan Saat Presensi Selesai Lembur (EN)", old.getCatatanSelesaiLemburPlaceholder(), req.getCatatanSelesaiLemburPlaceholder());
        diffBool(list, "Masuk",            old.isLokasiMasuk(),            req.isLokasiMasuk());
        diffBool(list, "Istirahat",        old.isLokasiIstirahat(),        req.isLokasiIstirahat());
        diffBool(list, "Selesai Istirahat",old.isLokasiSelesaiIstirahat(), req.isLokasiSelesaiIstirahat());
        diffBool(list, "Keluar",           old.isLokasiKeluar(),           req.isLokasiKeluar());
        diffBool(list, "Lembur",           old.isLokasiLembur(),           req.isLokasiLembur());
        diffBool(list, "Selesai Lembur",   old.isLokasiSelesaiLembur(),    req.isLokasiSelesaiLembur());
        diffBool(list, "Validasi Perangkat",        old.isValidasiPerangkat(),      req.isValidasiPerangkat());
        diffBool(list, "Presensi Keluar Otomatis",  old.isPresensiKeluarOtomatis(), req.isPresensiKeluarOtomatis());
        diffBool(list, "Denda Terlambat Keluar",    old.isDendaTerlambatKeluar(),   req.isDendaTerlambatKeluar());
        diffBool(list, "Kunjungan Klien",           old.isKunjunganKlien(),         req.isKunjunganKlien());
        diffNum(list,  "Menit Sebelum Masuk",   old.getMenitSebelumMasuk(),   req.getMenitSebelumMasuk());
        diffNum(list,  "Menit Setelah Masuk",   old.getMenitSetelahMasuk(),   req.getMenitSetelahMasuk());
        diffNum(list,  "Menit Setelah Jadwal Keluar", old.getMenitSetelahJadwalKeluar(), req.getMenitSetelahJadwalKeluar());
        if (list.isEmpty()) list.add(item("Keterangan", "Tidak ada perubahan data"));
        return list;
    }

    private void diff(List<DivisiRiwayatDTO.AktivitasItem> list, String label, String oldVal, String newVal) {
        String o = oldVal == null ? "" : oldVal;
        String n = newVal == null ? "" : newVal;
        if (!o.equals(n)) list.add(item(label, n));
    }

    private void diffBool(List<DivisiRiwayatDTO.AktivitasItem> list, String label, boolean oldVal, boolean newVal) {
        if (oldVal != newVal) list.add(item(label, newVal ? "Aktif" : "Non Aktif"));
    }

    private void diffNum(List<DivisiRiwayatDTO.AktivitasItem> list, String label, Integer oldVal, Integer newVal) {
        int o = oldVal == null ? 0 : oldVal;
        int n = newVal == null ? 0 : newVal;
        if (o != n) list.add(item(label, String.valueOf(n)));
    }

    private DivisiRiwayatDTO.AktivitasItem item(String label, String nilai) {
        return DivisiRiwayatDTO.AktivitasItem.builder().label(label).nilai(nilai != null ? nilai : "").build();
    }

    private String labelCatatan(Object catatan) {
        if (catatan == null) return "Tidak Dibutuhkan";
        return switch (catatan.toString()) {
            case "TIDAK_DIBUTUHKAN" -> "Tidak Dibutuhkan";
            case "OPTIONAL"        -> "Optional";
            case "DIBUTUHKAN"      -> "Dibutuhkan";
            default                -> catatan.toString();
        };
    }

    private String labelSistemKerja(String sk) {
        if (sk == null) return "-";
        return switch (sk) {
            case "HARI_KERJA" -> "Hari Kerja";
            case "SHIFT"      -> "Shift";
            default           -> sk;
        };
    }

    private DivisiRiwayatDTO toRiwayatDTO(DivisiRiwayat r) {
        List<DivisiRiwayatDTO.AktivitasItem> aktivitasList = fromJson(r.getAktivitas());
        return DivisiRiwayatDTO.builder()
                .id(r.getId())
                .tipe(r.getTipe())
                .changedBy(r.getChangedBy())
                .changedAt(r.getChangedAt())
                .aktivitas(aktivitasList)
                .build();
    }

    /** Parse JSON array [{\"label\":\"...\",\"nilai\":\"...\"},...] tanpa library eksternal */
    private List<DivisiRiwayatDTO.AktivitasItem> fromJson(String json) {
        List<DivisiRiwayatDTO.AktivitasItem> result = new ArrayList<>();
        if (json == null || json.isBlank()) return result;
        // Pattern cocok dengan setiap objek {"label":"...","nilai":"..."}
        Pattern p = Pattern.compile("\\{\\s*\"label\"\\s*:\\s*\"((?:[^\"\\\\]|\\\\.)*)\"\\s*,\\s*\"nilai\"\\s*:\\s*\"((?:[^\"\\\\]|\\\\.)*)\"}");
        Matcher m = p.matcher(json);
        while (m.find()) {
            result.add(DivisiRiwayatDTO.AktivitasItem.builder()
                    .label(unescapeJson(m.group(1)))
                    .nilai(unescapeJson(m.group(2)))
                    .build());
        }
        return result;
    }

    private String unescapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\\"", "\"").replace("\\\\", "\\")
                .replace("\\n", "\n").replace("\\r", "\r").replace("\\t", "\t");
    }

    private Divisi toEntity(DivisiRequest req, Divisi d) {
        d.setNamaDivisi(req.getNamaDivisi());
        d.setDendaKeterlambatan(req.isDendaKeterlambatan());
        d.setSistemKerja(req.getSistemKerja());
        d.setCatatanMasuk(req.getCatatanMasuk());
        d.setCatatanMasukLabel(req.getCatatanMasukLabel());
        d.setCatatanMasukPlaceholder(req.getCatatanMasukPlaceholder());
        d.setCatatanKeluar(req.getCatatanKeluar());
        d.setCatatanKeluarLabel(req.getCatatanKeluarLabel());
        d.setCatatanKeluarPlaceholder(req.getCatatanKeluarPlaceholder());
        d.setCatatanMulaiLembur(req.getCatatanMulaiLembur());
        d.setCatatanMulaiLemburLabel(req.getCatatanMulaiLemburLabel());
        d.setCatatanMulaiLemburPlaceholder(req.getCatatanMulaiLemburPlaceholder());
        d.setCatatanSelesaiLembur(req.getCatatanSelesaiLembur());
        d.setCatatanSelesaiLemburLabel(req.getCatatanSelesaiLemburLabel());
        d.setCatatanSelesaiLemburPlaceholder(req.getCatatanSelesaiLemburPlaceholder());
        d.setLokasiMasuk(req.isLokasiMasuk());
        d.setLokasiIstirahat(req.isLokasiIstirahat());
        d.setLokasiSelesaiIstirahat(req.isLokasiSelesaiIstirahat());
        d.setLokasiKeluar(req.isLokasiKeluar());
        d.setLokasiLembur(req.isLokasiLembur());
        d.setLokasiSelesaiLembur(req.isLokasiSelesaiLembur());
        d.setLokasiPertamaKali(req.isLokasiPertamaKali());
        d.setLokasiDiLuar(req.isLokasiDiLuar());
        d.setLokasiPerangkatBerbeda(req.isLokasiPerangkatBerbeda());
        d.setLokasiFotoSelfieBermasalah(req.isLokasiFotoSelfieBermasalah());
        d.setSupervisor(getSupervisor(req.getSupervisorId()));
        d.setBccGlobal(req.getBccGlobal());

        // Supervisi list — clear then re-add (orphanRemoval handles deletes)
        d.getSupervisiList().clear();
        if (req.getSupervisiList() != null) {
            AtomicInteger idx = new AtomicInteger(1);
            req.getSupervisiList().forEach(item -> {
                DivisiSupervisi s = new DivisiSupervisi();
                s.setDivisi(d);
                s.setNama(item.getNama());
                s.setEmail(item.getEmail());
                s.setBcc(item.getBcc());
                s.setUrutan(idx.getAndIncrement());
                d.getSupervisiList().add(s);
            });
        }

        d.setMenitSebelumMasuk(req.getMenitSebelumMasuk());
        d.setMenitSetelahMasuk(req.getMenitSetelahMasuk());
        d.setCegahPresensiKalenderLibur(req.isCegahPresensiKalenderLibur());
        d.setCegahPresensiJadwalLibur(req.isCegahPresensiJadwalLibur());
        d.setMenitSetelahJadwalKeluar(req.getMenitSetelahJadwalKeluar());
        d.setCegahPresensiLemburTanpaJadwal(req.isCegahPresensiLemburTanpaJadwal());
        d.setValidasiPerangkat(req.isValidasiPerangkat());
        d.setPresensiKeluarOtomatis(req.isPresensiKeluarOtomatis());
        d.setDendaTerlambatKeluar(req.isDendaTerlambatKeluar());
        d.setKunjunganKlien(req.isKunjunganKlien());
        d.setMinimalHariSebelumCuti(req.getMinimalHariSebelumCuti());
        d.setMaksHariPerRequest(req.getMaksHariPerRequest());
        d.setMaksRequestPerBulan(req.getMaksRequestPerBulan());
        return d;
    }

    private DivisiDTO toDTO(Divisi d) {
        List<SupervisiItemDTO> supervisiDTOs = d.getSupervisiList() == null ? new ArrayList<>() :
                d.getSupervisiList().stream()
                        .map(s -> SupervisiItemDTO.builder()
                                .id(s.getId())
                                .nama(s.getNama())
                                .email(s.getEmail())
                                .bcc(s.getBcc())
                                .urutan(s.getUrutan())
                                .build())
                        .collect(Collectors.toList());

        return DivisiDTO.builder()
                .id(d.getId())
                .namaDivisi(d.getNamaDivisi())
                .dendaKeterlambatan(d.isDendaKeterlambatan())
                .sistemKerja(d.getSistemKerja())
                .catatanMasuk(d.getCatatanMasuk())
                .catatanMasukLabel(d.getCatatanMasukLabel())
                .catatanMasukPlaceholder(d.getCatatanMasukPlaceholder())
                .catatanKeluar(d.getCatatanKeluar())
                .catatanKeluarLabel(d.getCatatanKeluarLabel())
                .catatanKeluarPlaceholder(d.getCatatanKeluarPlaceholder())
                .catatanMulaiLembur(d.getCatatanMulaiLembur())
                .catatanMulaiLemburLabel(d.getCatatanMulaiLemburLabel())
                .catatanMulaiLemburPlaceholder(d.getCatatanMulaiLemburPlaceholder())
                .catatanSelesaiLembur(d.getCatatanSelesaiLembur())
                .catatanSelesaiLemburLabel(d.getCatatanSelesaiLemburLabel())
                .catatanSelesaiLemburPlaceholder(d.getCatatanSelesaiLemburPlaceholder())
                .lokasiMasuk(d.isLokasiMasuk())
                .lokasiIstirahat(d.isLokasiIstirahat())
                .lokasiSelesaiIstirahat(d.isLokasiSelesaiIstirahat())
                .lokasiKeluar(d.isLokasiKeluar())
                .lokasiLembur(d.isLokasiLembur())
                .lokasiSelesaiLembur(d.isLokasiSelesaiLembur())
                .lokasiPertamaKali(d.isLokasiPertamaKali())
                .lokasiDiLuar(d.isLokasiDiLuar())
                .lokasiPerangkatBerbeda(d.isLokasiPerangkatBerbeda())
                .lokasiFotoSelfieBermasalah(d.isLokasiFotoSelfieBermasalah())
                .supervisorId(d.getSupervisor() != null ? d.getSupervisor().getId() : null)
                .supervisorNama(d.getSupervisor() != null ? d.getSupervisor().getNamaLengkap() : null)
                .supervisiList(supervisiDTOs)
                .bccGlobal(d.getBccGlobal())
                .menitSebelumMasuk(d.getMenitSebelumMasuk())
                .menitSetelahMasuk(d.getMenitSetelahMasuk())
                .cegahPresensiKalenderLibur(d.isCegahPresensiKalenderLibur())
                .cegahPresensiJadwalLibur(d.isCegahPresensiJadwalLibur())
                .menitSetelahJadwalKeluar(d.getMenitSetelahJadwalKeluar())
                .cegahPresensiLemburTanpaJadwal(d.isCegahPresensiLemburTanpaJadwal())
                .validasiPerangkat(d.isValidasiPerangkat())
                .presensiKeluarOtomatis(d.isPresensiKeluarOtomatis())
                .dendaTerlambatKeluar(d.isDendaTerlambatKeluar())
                .kunjunganKlien(d.isKunjunganKlien())
                .minimalHariSebelumCuti(d.getMinimalHariSebelumCuti())
                .maksHariPerRequest(d.getMaksHariPerRequest())
                .maksRequestPerBulan(d.getMaksRequestPerBulan())
                .build();
    }
}
