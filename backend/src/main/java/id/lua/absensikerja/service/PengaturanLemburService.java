package id.lua.absensikerja.service;

import id.lua.absensikerja.model.entity.*;
import id.lua.absensikerja.model.enums.CatatanPresensi;
import id.lua.absensikerja.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PengaturanLemburService {

    private final PerusahaanRepository            perusahaanRepository;
    private final TarifLemburRepository           tarifLemburRepository;
    private final PengaturanJadwalLemburRepository pengaturanJadwalLemburRepository;
    private final DivisiRepository                divisiRepository;

    // ── Helpers ───────────────────────────────────────────────────────────
    private Perusahaan resolvePerusahaan(Long userId) {
        return perusahaanRepository.findFirstByOwnerIdOrderByIdAsc(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Perusahaan tidak ditemukan"));
    }

    // ── Tarif Upah Lembur ─────────────────────────────────────────────────
    public List<Map<String, Object>> getTarifLembur(Long userId) {
        Perusahaan p = resolvePerusahaan(userId);
        List<TarifLembur> list = tarifLemburRepository.findByPerusahaanIdOrderByJamLemburAsc(p.getId());
        if (list.isEmpty()) return defaultTarif();
        return list.stream().map(this::tarifToMap).collect(Collectors.toList());
    }

    @Transactional
    public void saveTarifLembur(Long userId, List<Map<String, Object>> items) {
        Perusahaan p = resolvePerusahaan(userId);
        tarifLemburRepository.deleteByPerusahaanId(p.getId());
        for (Map<String, Object> item : items) {
            TarifLembur t = TarifLembur.builder()
                    .perusahaan(p)
                    .jamLembur(toInt(item.get("jamLembur")))
                    .hariKerja(toDouble(item.get("hariKerja")))
                    .hariLibur5HariKerja(toDouble(item.get("hariLibur5HariKerja")))
                    .hariLibur6HariKerja(toDouble(item.get("hariLibur6HariKerja")))
                    .build();
            tarifLemburRepository.save(t);
        }
    }

    private Map<String, Object> tarifToMap(TarifLembur t) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("id", t.getId());
        m.put("jamLembur", t.getJamLembur());
        m.put("hariKerja", t.getHariKerja());
        m.put("hariLibur5HariKerja", t.getHariLibur5HariKerja());
        m.put("hariLibur6HariKerja", t.getHariLibur6HariKerja());
        return m;
    }

    private List<Map<String, Object>> defaultTarif() {
        List<Map<String, Object>> list = new ArrayList<>();
        for (int i = 1; i <= 14; i++) {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("jamLembur", i);
            m.put("hariKerja", i == 1 ? 1.5 : 2.0);
            m.put("hariLibur5HariKerja", 2.0);
            m.put("hariLibur6HariKerja", i == 8 ? 3.0 : 2.0);
            list.add(m);
        }
        return list;
    }

    // ── Pengaturan Jadwal Lembur ──────────────────────────────────────────
    public Map<String, Object> getJadwalSetting(Long userId) {
        Perusahaan p = resolvePerusahaan(userId);
        PengaturanJadwalLembur pjl = pengaturanJadwalLemburRepository
                .findByPerusahaanId(p.getId()).orElse(null);
        Map<String, Object> m = new LinkedHashMap<>();
        if (pjl != null) {
            m.put("cegahPresensiTanpaJadwal", pjl.isCegahPresensiTanpaJadwal());
            m.put("kirimNotifikasiJadwal", pjl.isKirimNotifikasiJadwal());
            m.put("menitSebelumJadwal", pjl.getMenitSebelumJadwal());
        } else {
            m.put("cegahPresensiTanpaJadwal", false);
            m.put("kirimNotifikasiJadwal", true);
            m.put("menitSebelumJadwal", null);
        }
        return m;
    }

    @Transactional
    public void saveJadwalSetting(Long userId, Map<String, Object> body) {
        Perusahaan p = resolvePerusahaan(userId);
        PengaturanJadwalLembur pjl = pengaturanJadwalLemburRepository
                .findByPerusahaanId(p.getId())
                .orElse(PengaturanJadwalLembur.builder().perusahaan(p).build());
        pjl.setCegahPresensiTanpaJadwal(Boolean.TRUE.equals(body.get("cegahPresensiTanpaJadwal")));
        pjl.setKirimNotifikasiJadwal(body.get("kirimNotifikasiJadwal") == null || Boolean.TRUE.equals(body.get("kirimNotifikasiJadwal")));
        Object menit = body.get("menitSebelumJadwal");
        pjl.setMenitSebelumJadwal(menit != null ? toInt(menit) : null);
        pengaturanJadwalLemburRepository.save(pjl);
    }

    // ── Divisi Pengaturan Lembur ──────────────────────────────────────────
    public List<Map<String, Object>> getDivisiPengaturan(Long userId) {
        Perusahaan p = resolvePerusahaan(userId);
        return divisiRepository.findByPerusahaanId(p.getId()).stream()
                .filter(d -> !d.isDeleted())
                .map(this::divisiToMap)
                .collect(Collectors.toList());
    }

    @Transactional
    public void saveDivisiPengaturan(Long userId, List<Map<String, Object>> items) {
        resolvePerusahaan(userId); // verify ownership
        for (Map<String, Object> item : items) {
            Long id = toLong(item.get("id"));
            if (id == null) continue;
            divisiRepository.findById(id).ifPresent(d -> {
                d.setLokasiLembur(Boolean.TRUE.equals(item.get("presensiLokasiMulai")));
                d.setLokasiSelesaiLembur(Boolean.TRUE.equals(item.get("presensiLokasiSelesai")));
                d.setCatatanMulaiLembur(parseCatatan((String) item.get("catatanMulaiLembur")));
                d.setCatatanSelesaiLembur(parseCatatan((String) item.get("catatanSelesaiLembur")));
                d.setCegahPresensiLemburTanpaJadwal(Boolean.TRUE.equals(item.get("cegahTanpaJadwal")));
                divisiRepository.save(d);
            });
        }
    }

    private Map<String, Object> divisiToMap(Divisi d) {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("id", d.getId());
        m.put("nama", d.getNamaDivisi());
        m.put("polaMinggu", d.getSistemKerja() != null ? d.getSistemKerja().name() : null);
        m.put("presensiLokasiMulai", d.isLokasiLembur());
        m.put("presensiLokasiSelesai", d.isLokasiSelesaiLembur());
        m.put("catatanMulaiLembur", catatanToLabel(d.getCatatanMulaiLembur()));
        m.put("catatanSelesaiLembur", catatanToLabel(d.getCatatanSelesaiLembur()));
        m.put("cegahTanpaJadwal", d.isCegahPresensiLemburTanpaJadwal());
        return m;
    }

    private CatatanPresensi parseCatatan(String label) {
        if (label == null) return CatatanPresensi.TIDAK_DIBUTUHKAN;
        return switch (label.toLowerCase()) {
            case "opsional", "optional" -> CatatanPresensi.OPTIONAL;
            case "dibutuhkan"           -> CatatanPresensi.DIBUTUHKAN;
            default                     -> CatatanPresensi.TIDAK_DIBUTUHKAN;
        };
    }

    private String catatanToLabel(CatatanPresensi c) {
        if (c == null) return "Tidak Dibutuhkan";
        return switch (c) {
            case OPTIONAL    -> "Opsional";
            case DIBUTUHKAN  -> "Dibutuhkan";
            default          -> "Tidak Dibutuhkan";
        };
    }

    // ── Utils ─────────────────────────────────────────────────────────────
    private int toInt(Object v) {
        if (v instanceof Number n) return n.intValue();
        try { return Integer.parseInt(String.valueOf(v)); } catch (Exception e) { return 0; }
    }

    private double toDouble(Object v) {
        if (v instanceof Number n) return n.doubleValue();
        try { return Double.parseDouble(String.valueOf(v)); } catch (Exception e) { return 0.0; }
    }

    private Long toLong(Object v) {
        if (v == null) return null;
        if (v instanceof Number n) return n.longValue();
        try { return Long.parseLong(String.valueOf(v)); } catch (Exception e) { return null; }
    }
}
