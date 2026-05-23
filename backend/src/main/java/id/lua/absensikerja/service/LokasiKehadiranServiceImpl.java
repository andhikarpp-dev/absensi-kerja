package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.LokasiKehadiranDTO;
import id.lua.absensikerja.model.dto.LokasiKehadiranRequest;
import id.lua.absensikerja.model.dto.LokasiKehadiranRiwayatDTO;
import id.lua.absensikerja.model.dto.PengaturanLokasiKehadiranDTO;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.LokasiKehadiran;
import id.lua.absensikerja.model.entity.LokasiKehadiranRiwayat;
import id.lua.absensikerja.model.entity.PengaturanLokasiKehadiran;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.enums.TargetLokasiKehadiran;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.LokasiKehadiranRepository;
import id.lua.absensikerja.repository.LokasiKehadiranRiwayatRepository;
import id.lua.absensikerja.repository.PengaturanLokasiKehadiranRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LokasiKehadiranServiceImpl implements LokasiKehadiranService {

    private final LokasiKehadiranRepository repo;
    private final PerusahaanRepository      perusahaanRepository;
    private final DivisiRepository          divisiRepository;
    private final KaryawanRepository        karyawanRepository;
    private final PengaturanLokasiKehadiranRepository pengaturanRepo;
    private final LokasiKehadiranRiwayatRepository   riwayatRepo;

    private Perusahaan resolvePerusahaan(Long callerUserId) {
        if (callerUserId == null) return null;
        return perusahaanRepository.findByOwnerId(callerUserId).orElse(null);
    }

    @Override
    public List<LokasiKehadiranDTO> findAll(Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);
        List<LokasiKehadiran> list = (p != null)
                ? repo.findByPerusahaanIdOrderByNamaLokasiAsc(p.getId())
                : repo.findAllByOrderByNamaLokasiAsc();
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public LokasiKehadiranDTO findById(Long id) {
        return toDTO(getOrThrow(id));
    }

    @Override
    @Transactional
    public LokasiKehadiranDTO create(LokasiKehadiranRequest req, Long callerUserId) {
        Perusahaan perusahaan = resolvePerusahaan(callerUserId);

        // ── Validasi kuota lokasi tambahan ──
        PengaturanLokasiKehadiran pengaturan = (perusahaan != null
                ? pengaturanRepo.findByPerusahaanId(perusahaan.getId())
                : pengaturanRepo.findFirstByPerusahaanIsNull())
                .orElseGet(() -> {
                    PengaturanLokasiKehadiran fresh = new PengaturanLokasiKehadiran();
                    fresh.setPerusahaan(perusahaan);
                    return fresh;
                });
        if (pengaturan.getKuotaLokasi() <= 0) {
            throw new ResponseStatusException(HttpStatus.PAYMENT_REQUIRED,
                    "Kuota lokasi habis. Silakan pesan kuota lokasi tambahan terlebih dahulu.");
        }

        Optional<LokasiKehadiran> existing = (perusahaan != null)
                ? repo.findByNamaAndPerusahaanIgnoreFilter(req.getNamaLokasi(), perusahaan.getId())
                : repo.findByNamaIgnoreFilter(req.getNamaLokasi());

        LokasiKehadiran entity;
        if (existing.isPresent()) {
            entity = existing.get();
            if (!entity.isDeleted()) {
                throw new ResponseStatusException(HttpStatus.CONFLICT,
                        "Nama lokasi '" + req.getNamaLokasi() + "' sudah digunakan");
            }
            // Restore soft-deleted
            entity.setDeleted(false);
            entity.setDeletedAt(null);
        } else {
            entity = new LokasiKehadiran();
            entity.setPerusahaan(perusahaan);
        }
        applyRequest(req, entity);
        LokasiKehadiran saved = repo.save(entity);
        LokasiKehadiranDTO dto = toDTO(saved);

        // ── Decrement kuota setelah berhasil ──
        pengaturan.setKuotaLokasi(pengaturan.getKuotaLokasi() - 1);
        pengaturanRepo.save(pengaturan);

        // ── Riwayat: DIBUAT ──
        simpanRiwayat(saved, "DIBUAT", buildAktivitasDibuat(saved));
        return dto;
    }

    @Override
    @Transactional
    public LokasiKehadiranDTO update(Long id, LokasiKehadiranRequest req, Long callerUserId) {
        LokasiKehadiran entity = getOrThrow(id);
        Snapshot before = snapshot(entity);
        applyRequest(req, entity);
        LokasiKehadiran saved = repo.save(entity);
        // ── Riwayat: DIUBAH ──
        List<LokasiKehadiranRiwayatDTO.AktivitasItem> aktivitas =
                buildAktivitasDiubah(before, saved);
        if (!aktivitas.isEmpty()) {
            simpanRiwayat(saved, "DIUBAH", aktivitas);
        }
        return toDTO(saved);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        LokasiKehadiran entity = getOrThrow(id);
        // ── Riwayat: DIHAPUS ──
        simpanRiwayat(entity, "DIHAPUS",
                List.of(item("Nama Lokasi", entity.getNamaLokasi())));
        entity.setDeleted(true);
        entity.setDeletedAt(LocalDateTime.now());
        repo.save(entity);
    }

    @Override
    public List<LokasiKehadiranRiwayatDTO> findRiwayat(Long lokasiId) {
        return riwayatRepo.findByLokasiIdOrderByChangedAtDesc(lokasiId).stream()
                .map(this::toRiwayatDTO)
                .collect(Collectors.toList());
    }

    // ─────────── Pengaturan Lokasi Kehadiran ────────────

    @Override
    public PengaturanLokasiKehadiranDTO getPengaturan(Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);
        PengaturanLokasiKehadiran ent = (p != null
                ? pengaturanRepo.findByPerusahaanId(p.getId())
                : pengaturanRepo.findFirstByPerusahaanIsNull())
                .orElseGet(() -> {
                    PengaturanLokasiKehadiran fresh = new PengaturanLokasiKehadiran();
                    fresh.setPerusahaan(p);
                    return fresh;
                });
        return toPengaturanDTO(ent);
    }

    @Override
    @Transactional
    public PengaturanLokasiKehadiranDTO updatePengaturan(
            PengaturanLokasiKehadiranDTO req, Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);
        PengaturanLokasiKehadiran ent = (p != null
                ? pengaturanRepo.findByPerusahaanId(p.getId())
                : pengaturanRepo.findFirstByPerusahaanIsNull())
                .orElseGet(PengaturanLokasiKehadiran::new);
        ent.setPerusahaan(p);
        ent.setSpvDapatMenambahLokasi(req.isSpvDapatMenambahLokasi());
        ent.setSpvDapatMemperbaruiLokasi(req.isSpvDapatMemperbaruiLokasi());
        return toPengaturanDTO(pengaturanRepo.save(ent));
    }

    private PengaturanLokasiKehadiranDTO toPengaturanDTO(PengaturanLokasiKehadiran e) {
        return PengaturanLokasiKehadiranDTO.builder()
                .spvDapatMenambahLokasi(e.isSpvDapatMenambahLokasi())
                .spvDapatMemperbaruiLokasi(e.isSpvDapatMemperbaruiLokasi())
                .kuotaLokasi(e.getKuotaLokasi())
                .build();
    }

    @Override
    @Transactional
    public PengaturanLokasiKehadiranDTO pesanKuotaLokasi(int kuota, Long callerUserId) {
        if (kuota != 2 && kuota != 5 && kuota != 10) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Paket kuota tidak valid. Pilihan: 2, 5, atau 10.");
        }
        Perusahaan p = resolvePerusahaan(callerUserId);
        PengaturanLokasiKehadiran ent = (p != null
                ? pengaturanRepo.findByPerusahaanId(p.getId())
                : pengaturanRepo.findFirstByPerusahaanIsNull())
                .orElseGet(PengaturanLokasiKehadiran::new);
        ent.setPerusahaan(p);
        ent.setKuotaLokasi(ent.getKuotaLokasi() + kuota);
        return toPengaturanDTO(pengaturanRepo.save(ent));
    }

    // ── helpers ──────────────────────────────────────────────────

    private LokasiKehadiran getOrThrow(Long id) {
        return repo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Lokasi kehadiran id=" + id + " tidak ditemukan"));
    }

    private void applyRequest(LokasiKehadiranRequest r, LokasiKehadiran e) {
        e.setNamaLokasi(r.getNamaLokasi().trim());
        e.setAlamat(r.getAlamat());
        e.setLatitude(r.getLatitude());
        e.setLongitude(r.getLongitude());
        e.setRadiusMeter(r.getRadiusMeter() != null ? r.getRadiusMeter() : 100);
        e.setAktif(r.getAktif() == null || r.getAktif());

        // ── Target / Penugasan ──
        TargetLokasiKehadiran tipe = TargetLokasiKehadiran.SEMUA;
        if (r.getTargetTipe() != null && !r.getTargetTipe().isBlank()) {
            try {
                tipe = TargetLokasiKehadiran.valueOf(r.getTargetTipe().trim().toUpperCase());
            } catch (IllegalArgumentException ex) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "targetTipe tidak valid: " + r.getTargetTipe());
            }
        }
        e.setTargetTipe(tipe);

        // Reset relasi sesuai tipe
        if (e.getDivisiTugas() == null) e.setDivisiTugas(new LinkedHashSet<>());
        if (e.getKaryawanTugas() == null) e.setKaryawanTugas(new LinkedHashSet<>());
        e.getDivisiTugas().clear();
        e.getKaryawanTugas().clear();

        if (tipe == TargetLokasiKehadiran.DIVISI) {
            if (r.getDivisiIds() == null || r.getDivisiIds().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Pilih minimal satu divisi");
            }
            for (Long did : r.getDivisiIds()) {
                Divisi d = divisiRepository.findById(did).orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Divisi id=" + did + " tidak ditemukan"));
                e.getDivisiTugas().add(d);
            }
        } else if (tipe == TargetLokasiKehadiran.KARYAWAN) {
            if (r.getKaryawanIds() == null || r.getKaryawanIds().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Pilih minimal satu karyawan");
            }
            for (Long kid : r.getKaryawanIds()) {
                Karyawan k = karyawanRepository.findById(kid).orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Karyawan id=" + kid + " tidak ditemukan"));
                e.getKaryawanTugas().add(k);
            }
        }

        e.setHanyaFingerspot(Boolean.TRUE.equals(r.getHanyaFingerspot()));
        e.setFingerspotSn(r.getFingerspotSn());
        e.setFingerspotIp(r.getFingerspotIp());
        e.setFingerspotPort(r.getFingerspotPort());
        e.setFingerspotCatatan(r.getFingerspotCatatan());
    }

    private LokasiKehadiranDTO toDTO(LokasiKehadiran e) {
        List<LokasiKehadiranDTO.RefDTO> divisi = (e.getDivisiTugas() == null) ? List.of()
                : e.getDivisiTugas().stream()
                    .map(d -> LokasiKehadiranDTO.RefDTO.builder()
                            .id(d.getId()).nama(d.getNamaDivisi()).build())
                    .collect(Collectors.toList());
        List<LokasiKehadiranDTO.RefDTO> karyawan = (e.getKaryawanTugas() == null) ? List.of()
                : e.getKaryawanTugas().stream()
                    .map(k -> LokasiKehadiranDTO.RefDTO.builder()
                            .id(k.getId()).nama(k.getNamaLengkap()).build())
                    .collect(Collectors.toList());

        return LokasiKehadiranDTO.builder()
                .id(e.getId())
                .perusahaanId(e.getPerusahaan() != null ? e.getPerusahaan().getId() : null)
                .namaLokasi(e.getNamaLokasi())
                .alamat(e.getAlamat())
                .latitude(e.getLatitude())
                .longitude(e.getLongitude())
                .radiusMeter(e.getRadiusMeter())
                .aktif(e.isAktif())
                .targetTipe(e.getTargetTipe() != null ? e.getTargetTipe().name()
                                                     : TargetLokasiKehadiran.SEMUA.name())
                .divisiTugas(divisi)
                .karyawanTugas(karyawan)
                .hanyaFingerspot(e.isHanyaFingerspot())
                .fingerspotSn(e.getFingerspotSn())
                .fingerspotIp(e.getFingerspotIp())
                .fingerspotPort(e.getFingerspotPort())
                .fingerspotCatatan(e.getFingerspotCatatan())
                .createdAt(e.getCreatedAt())
                .updatedAt(e.getUpdatedAt())
                .build();
    }

    // ─────────────────── RIWAYAT (audit trail) ───────────────────

    /** Snapshot field penting sebelum update untuk membandingkan perubahan. */
    private record Snapshot(
            String namaLokasi, String alamat,
            BigDecimal latitude, BigDecimal longitude,
            Integer radiusMeter, boolean aktif,
            TargetLokasiKehadiran targetTipe,
            String divisiNama, String karyawanNama,
            boolean hanyaFingerspot,
            String fingerspotSn, String fingerspotIp,
            Integer fingerspotPort, String fingerspotCatatan
    ) {}

    private Snapshot snapshot(LokasiKehadiran e) {
        return new Snapshot(
                e.getNamaLokasi(), e.getAlamat(),
                e.getLatitude(), e.getLongitude(),
                e.getRadiusMeter(), e.isAktif(),
                e.getTargetTipe(),
                joinDivisi(e.getDivisiTugas()),
                joinKaryawan(e.getKaryawanTugas()),
                e.isHanyaFingerspot(),
                e.getFingerspotSn(), e.getFingerspotIp(),
                e.getFingerspotPort(), e.getFingerspotCatatan());
    }

    private String joinDivisi(Set<Divisi> set) {
        if (set == null || set.isEmpty()) return "";
        return set.stream().map(Divisi::getNamaDivisi).collect(Collectors.joining(", "));
    }

    private String joinKaryawan(Set<Karyawan> set) {
        if (set == null || set.isEmpty()) return "";
        return set.stream().map(Karyawan::getNamaLengkap).collect(Collectors.joining(", "));
    }

    private List<LokasiKehadiranRiwayatDTO.AktivitasItem> buildAktivitasDibuat(LokasiKehadiran e) {
        List<LokasiKehadiranRiwayatDTO.AktivitasItem> list = new ArrayList<>();
        list.add(item("Nama",      e.getNamaLokasi()));
        if (e.getLatitude()  != null) list.add(item("Latitude",  e.getLatitude().toPlainString()));
        if (e.getLongitude() != null) list.add(item("Longitude", e.getLongitude().toPlainString()));
        if (e.getAlamat() != null && !e.getAlamat().isBlank())
            list.add(item("Alamat", e.getAlamat()));
        list.add(item("Radius", (e.getRadiusMeter() == null ? 0 : e.getRadiusMeter()) + " meter"));
        list.add(item("Status", e.isAktif() ? "Aktif" : "Nonaktif"));
        list.add(item("Target Penugasan", labelTarget(e.getTargetTipe())));
        if (!joinDivisi(e.getDivisiTugas()).isEmpty())
            list.add(item("Divisi Ditugaskan", joinDivisi(e.getDivisiTugas())));
        if (!joinKaryawan(e.getKaryawanTugas()).isEmpty())
            list.add(item("Karyawan Ditugaskan", joinKaryawan(e.getKaryawanTugas())));
        if (e.isHanyaFingerspot()) list.add(item("Mode", "Hanya Fingerspot"));
        if (e.getFingerspotSn() != null && !e.getFingerspotSn().isBlank())
            list.add(item("Fingerspot SN", e.getFingerspotSn()));
        if (e.getFingerspotIp() != null && !e.getFingerspotIp().isBlank())
            list.add(item("Fingerspot IP", e.getFingerspotIp()));
        return list;
    }

    private List<LokasiKehadiranRiwayatDTO.AktivitasItem> buildAktivitasDiubah(
            Snapshot o, LokasiKehadiran n) {
        List<LokasiKehadiranRiwayatDTO.AktivitasItem> list = new ArrayList<>();
        diff(list, "Nama",      o.namaLokasi(), n.getNamaLokasi());
        diff(list, "Alamat",    o.alamat(),     n.getAlamat());
        diff(list, "Latitude",
                o.latitude()  == null ? "" : o.latitude().toPlainString(),
                n.getLatitude()  == null ? "" : n.getLatitude().toPlainString());
        diff(list, "Longitude",
                o.longitude() == null ? "" : o.longitude().toPlainString(),
                n.getLongitude() == null ? "" : n.getLongitude().toPlainString());
        diff(list, "Radius",
                (o.radiusMeter() == null ? 0 : o.radiusMeter()) + " meter",
                (n.getRadiusMeter() == null ? 0 : n.getRadiusMeter()) + " meter");
        diff(list, "Status",
                o.aktif() ? "Aktif" : "Nonaktif",
                n.isAktif() ? "Aktif" : "Nonaktif");
        diff(list, "Target Penugasan",
                labelTarget(o.targetTipe()),
                labelTarget(n.getTargetTipe()));
        diff(list, "Divisi Ditugaskan", o.divisiNama(),   joinDivisi(n.getDivisiTugas()));
        diff(list, "Karyawan Ditugaskan", o.karyawanNama(), joinKaryawan(n.getKaryawanTugas()));
        diff(list, "Mode Fingerspot",
                o.hanyaFingerspot() ? "Hanya Fingerspot" : "Aplikasi & Fingerspot",
                n.isHanyaFingerspot() ? "Hanya Fingerspot" : "Aplikasi & Fingerspot");
        diff(list, "Fingerspot SN", o.fingerspotSn(), n.getFingerspotSn());
        diff(list, "Fingerspot IP", o.fingerspotIp(), n.getFingerspotIp());
        diff(list, "Fingerspot Port",
                o.fingerspotPort() == null ? "" : String.valueOf(o.fingerspotPort()),
                n.getFingerspotPort() == null ? "" : String.valueOf(n.getFingerspotPort()));
        diff(list, "Catatan Fingerspot", o.fingerspotCatatan(), n.getFingerspotCatatan());
        return list;
    }

    private String labelTarget(TargetLokasiKehadiran t) {
        if (t == null) return "Semua Karyawan";
        return switch (t) {
            case SEMUA    -> "Semua Karyawan";
            case DIVISI   -> "Spesifik Divisi";
            case KARYAWAN -> "Spesifik Karyawan";
        };
    }

    /** Tambah item bila berbeda; format nilai: "lama → baru" (atau hanya baru bila lama kosong). */
    private void diff(List<LokasiKehadiranRiwayatDTO.AktivitasItem> list,
                      String label, String oldVal, String newVal) {
        String o = oldVal == null ? "" : oldVal;
        String n = newVal == null ? "" : newVal;
        if (Objects.equals(o, n)) return;
        String nilai = (o.isBlank() ? "—" : o) + " → " + (n.isBlank() ? "—" : n);
        list.add(item(label, nilai));
    }

    private LokasiKehadiranRiwayatDTO.AktivitasItem item(String label, String nilai) {
        return LokasiKehadiranRiwayatDTO.AktivitasItem.builder()
                .label(label).nilai(nilai == null ? "" : nilai).build();
    }

    private void simpanRiwayat(LokasiKehadiran lokasi, String tipe,
                               List<LokasiKehadiranRiwayatDTO.AktivitasItem> aktivitasList) {
        try {
            LokasiKehadiranRiwayat r = new LokasiKehadiranRiwayat();
            r.setLokasi(lokasi);
            r.setTipe(tipe);
            r.setChangedBy(currentUser());
            r.setChangedAt(LocalDateTime.now());
            r.setAktivitas(toJson(aktivitasList));
            riwayatRepo.save(r);
        } catch (Exception ignored) {}
    }

    private String toJson(List<LokasiKehadiranRiwayatDTO.AktivitasItem> list) {
        if (list == null || list.isEmpty()) return "[]";
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < list.size(); i++) {
            LokasiKehadiranRiwayatDTO.AktivitasItem a = list.get(i);
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

    private String unescapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\\"", "\"").replace("\\\\", "\\")
                .replace("\\n", "\n").replace("\\r", "\r").replace("\\t", "\t");
    }

    private LokasiKehadiranRiwayatDTO toRiwayatDTO(LokasiKehadiranRiwayat r) {
        return LokasiKehadiranRiwayatDTO.builder()
                .id(r.getId())
                .tipe(r.getTipe())
                .changedBy(r.getChangedBy())
                .changedAt(r.getChangedAt())
                .aktivitas(fromJson(r.getAktivitas()))
                .build();
    }

    private List<LokasiKehadiranRiwayatDTO.AktivitasItem> fromJson(String json) {
        List<LokasiKehadiranRiwayatDTO.AktivitasItem> result = new ArrayList<>();
        if (json == null || json.isBlank()) return result;
        Pattern p = Pattern.compile(
                "\\{\\s*\"label\"\\s*:\\s*\"((?:[^\"\\\\]|\\\\.)*)\"\\s*,\\s*\"nilai\"\\s*:\\s*\"((?:[^\"\\\\]|\\\\.)*)\"}");
        Matcher m = p.matcher(json);
        while (m.find()) {
            result.add(LokasiKehadiranRiwayatDTO.AktivitasItem.builder()
                    .label(unescapeJson(m.group(1)))
                    .nilai(unescapeJson(m.group(2)))
                    .build());
        }
        return result;
    }

    /** Ambil username dari JWT Bearer di header Authorization. */
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
            Matcher m = Pattern.compile("\"sub\"\\s*:\\s*\"([^\"]+)\"").matcher(payload);
            return m.find() ? m.group(1) : null;
        } catch (Exception ignored) {
            return null;
        }
    }
}
