package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.ImporOpenshiftResult;
import id.lua.absensikerja.model.dto.OpenshiftDTO;
import id.lua.absensikerja.model.dto.OpenshiftRequest;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.Openshift;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.enums.JenisUpahOpenshift;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.OpenshiftRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class OpenshiftServiceImpl implements OpenshiftService {

    private final OpenshiftRepository  openshiftRepository;
    private final DivisiRepository     divisiRepository;
    private final PerusahaanRepository perusahaanRepository;

    private static final DateTimeFormatter FMT_DT_SPACE = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    private static final DateTimeFormatter FMT_DT_T     = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
    private static final DateTimeFormatter FMT_DT_SLASH = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
    private static final DateTimeFormatter FMT_DT_DASH  = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");

    // ─────────────────────────── READ ───────────────────────────

    @Override
    public List<OpenshiftDTO> findAll(Long ownerId, LocalDate mulai, LocalDate selesai, Long divisiId) {
        Long perusahaanId = resolvePerusahaanId(ownerId);
        // Untuk PEMILIK tanpa perusahaan → kosong
        if (ownerId != null && perusahaanId == null) return Collections.emptyList();

        LocalDateTime dtMulai   = mulai   != null ? mulai.atStartOfDay() : null;
        LocalDateTime dtSelesai = selesai != null ? selesai.atTime(LocalTime.MAX) : null;

        Specification<Openshift> spec = (root, query, cb) -> {
            query.distinct(true);
            // eager fetch divisiSet
            root.fetch("divisiSet", JoinType.LEFT);
            List<Predicate> predicates = new ArrayList<>();
            if (perusahaanId != null) {
                predicates.add(cb.equal(root.get("perusahaan").get("id"), perusahaanId));
            }
            if (dtMulai != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("jamKeluar"), dtMulai));
            }
            if (dtSelesai != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("jamMasuk"), dtSelesai));
            }
            if (divisiId != null) {
                Join<Object, Object> divisiJoin = root.join("divisiSet", JoinType.LEFT);
                predicates.add(cb.equal(divisiJoin.get("id"), divisiId));
            }
            query.orderBy(cb.desc(root.get("jamMasuk")));
            return cb.and(predicates.toArray(new Predicate[0]));
        };

        return openshiftRepository.findAll(spec)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public OpenshiftDTO findById(Long id) {
        return toDTO(getOrThrow(id));
    }

    // ─────────────────────────── CREATE ─────────────────────────

    @Override
    @Transactional
    public OpenshiftDTO create(OpenshiftRequest req, Long ownerId) {
        validate(req);
        Openshift o = new Openshift();
        if (ownerId != null) {
            Perusahaan p = perusahaanRepository.findByOwnerId(ownerId).orElse(null);
            o.setPerusahaan(p);
        }
        applyRequest(o, req);
        return toDTO(openshiftRepository.save(o));
    }

    // ─────────────────────────── UPDATE ─────────────────────────

    @Override
    @Transactional
    public OpenshiftDTO update(Long id, OpenshiftRequest req) {
        validate(req);
        Openshift o = getOrThrow(id);
        applyRequest(o, req);
        return toDTO(openshiftRepository.save(o));
    }

    // ─────────────────────────── DELETE (soft) ──────────────────

    @Override
    @Transactional
    public void delete(Long id) {
        Openshift o = getOrThrow(id);
        o.setDeleted(true);
        o.setDeletedAt(LocalDateTime.now());
        openshiftRepository.save(o);
    }

    // ─────────────────────────── IMPORT CSV ─────────────────────

    @Override
    @Transactional
    public ImporOpenshiftResult importCsv(MultipartFile file, Long ownerId) {
        if (file == null || file.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File kosong");
        }

        // Daftar divisi pemilik (untuk lookup by name & validasi id)
        Long perusahaanId = resolvePerusahaanId(ownerId);
        List<Divisi> divisiList = (perusahaanId != null)
                ? divisiRepository.findAll().stream()
                    .filter(d -> d.getPerusahaan() != null && perusahaanId.equals(d.getPerusahaan().getId()))
                    .collect(Collectors.toList())
                : divisiRepository.findAll();
        Map<String, Long> divisiByName = new HashMap<>();
        Set<Long> validDivisiIds = new HashSet<>();
        for (Divisi d : divisiList) {
            if (d.getNamaDivisi() != null) divisiByName.put(d.getNamaDivisi().toLowerCase().trim(), d.getId());
            validDivisiIds.add(d.getId());
        }

        Perusahaan perusahaan = (ownerId != null)
                ? perusahaanRepository.findByOwnerId(ownerId).orElse(null)
                : null;

        List<String> rawLines = readAllLines(file);
        // Strip BOM & "sep=," directive
        if (!rawLines.isEmpty()) {
            String first = rawLines.get(0);
            if (!first.isEmpty() && first.charAt(0) == '\uFEFF') {
                rawLines.set(0, first.substring(1));
            }
            if (!rawLines.isEmpty() && rawLines.get(0).trim().toLowerCase().matches("^sep=.$")) {
                rawLines.remove(0);
            }
        }
        if (rawLines.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File kosong");
        }

        // Auto-deteksi delimiter dari baris header (',', ';', atau tab)
        char delim = detectDelimiter(rawLines.get(0));

        // Header
        List<String> headerCells = parseCsvLine(rawLines.get(0), delim);
        Map<String, Integer> col = new HashMap<>();
        for (int i = 0; i < headerCells.size(); i++) {
            col.put(normalize(headerCells.get(i)), i);
        }
        int colJamMasuk   = idxOf(col, "jam masuk");
        int colJamKeluar  = idxOf(col, "jam keluar");
        int colDivisi     = idxOf(col, "divisi");
        int colMaksKar    = idxOf(col, "maks karyawan", "maks. karyawan", "maksimal karyawan");
        int colSesuai     = idxOf(col, "upah per jam sesuai upah lembur", "sesuai upah lembur");
        int colUpahJam    = idxOf(col, "upah per jam");
        int colCatatan    = idxOf(col, "catatan");

        ImporOpenshiftResult result = ImporOpenshiftResult.builder()
                .berhasil(0).gagal(0).errors(new ArrayList<>()).build();

        if (colJamMasuk < 0 || colJamKeluar < 0 || colDivisi < 0) {
            result.getErrors().add(new ImporOpenshiftResult.RowError(1,
                "Header CSV harus berisi minimal kolom: Jam Masuk, Jam Keluar, Divisi."));
            result.setGagal(1);
            return result;
        }

        List<Openshift> toSave = new ArrayList<>();

        for (int i = 1; i < rawLines.size(); i++) {
            String line = rawLines.get(i);
            if (line == null || line.trim().isEmpty()) continue;
            int baris = i + 1;
            List<String> cells = parseCsvLine(line, delim);

            String jamMasukRaw  = safeGet(cells, colJamMasuk);
            String jamKeluarRaw = safeGet(cells, colJamKeluar);

            LocalDateTime jamMasuk  = parseDateTime(jamMasukRaw);
            LocalDateTime jamKeluar = parseDateTime(jamKeluarRaw);
            if (jamMasuk == null || jamKeluar == null) {
                result.getErrors().add(new ImporOpenshiftResult.RowError(baris,
                    "Format Jam Masuk/Jam Keluar salah. Gunakan \"YYYY-MM-DD HH:mm\" (contoh: 2026-04-28 09:00). Diterima: \"" + jamMasukRaw + "\" / \"" + jamKeluarRaw + "\"."));
                continue;
            }
            if (!jamKeluar.isAfter(jamMasuk)) {
                result.getErrors().add(new ImporOpenshiftResult.RowError(baris,
                    "Jam Keluar harus setelah Jam Masuk."));
                continue;
            }

            String divRaw = safeGet(cells, colDivisi).trim();
            if (divRaw.isEmpty()) {
                result.getErrors().add(new ImporOpenshiftResult.RowError(baris, "Divisi wajib diisi."));
                continue;
            }
            Set<Long> divisiIds = new HashSet<>();
            List<String> tidakDikenal = new ArrayList<>();
            for (String tok : divRaw.split("[;|,]")) {
                String t = tok.trim();
                if (t.isEmpty()) continue;
                if (t.matches("\\d+")) {
                    Long id = Long.parseLong(t);
                    if (validDivisiIds.contains(id)) divisiIds.add(id);
                    else tidakDikenal.add(t);
                } else {
                    Long id = divisiByName.get(t.toLowerCase());
                    if (id != null) divisiIds.add(id);
                    else tidakDikenal.add(t);
                }
            }
            if (!tidakDikenal.isEmpty()) {
                result.getErrors().add(new ImporOpenshiftResult.RowError(baris,
                    "Divisi tidak dikenal: " + String.join(", ", tidakDikenal)));
                continue;
            }
            if (divisiIds.isEmpty()) {
                result.getErrors().add(new ImporOpenshiftResult.RowError(baris, "Divisi wajib diisi."));
                continue;
            }

            // Maks. Karyawan
            Integer maksKaryawan = null;
            String maksRaw = colMaksKar >= 0 ? safeGet(cells, colMaksKar).trim() : "";
            if (!maksRaw.isEmpty()) {
                try {
                    int n = Integer.parseInt(maksRaw);
                    if (n < 0) throw new NumberFormatException();
                    maksKaryawan = (n == 0) ? null : n;
                } catch (NumberFormatException e) {
                    result.getErrors().add(new ImporOpenshiftResult.RowError(baris,
                        "Maks. Karyawan harus angka >= 0."));
                    continue;
                }
            }

            // Sesuai upah lembur (YA/TIDAK)
            String sesuaiRaw = colSesuai >= 0 ? safeGet(cells, colSesuai).trim().toUpperCase() : "";
            boolean sesuai = sesuaiRaw.equals("YA") || sesuaiRaw.equals("Y") || sesuaiRaw.equals("TRUE") || sesuaiRaw.equals("1");

            // Upah Per Jam
            String upahRaw = colUpahJam >= 0 ? safeGet(cells, colUpahJam).replaceAll("[\\s.,]", "").trim() : "";
            long upahPerJam = 0L;
            if (!sesuai) {
                if (upahRaw.isEmpty()) {
                    result.getErrors().add(new ImporOpenshiftResult.RowError(baris,
                        "Upah Per jam wajib diisi jika \"Upah Per jam sesuai upah lembur\" = TIDAK."));
                    continue;
                }
                try {
                    upahPerJam = Long.parseLong(upahRaw);
                    if (upahPerJam < 0) throw new NumberFormatException();
                } catch (NumberFormatException e) {
                    result.getErrors().add(new ImporOpenshiftResult.RowError(baris,
                        "Upah Per jam harus angka >= 0."));
                    continue;
                }
            } else if (!upahRaw.isEmpty()) {
                try { upahPerJam = Long.parseLong(upahRaw); } catch (NumberFormatException ignored) {}
            }

            String catatan = colCatatan >= 0 ? safeGet(cells, colCatatan) : "";

            Openshift o = new Openshift();
            o.setPerusahaan(perusahaan);
            o.setJamMasuk(jamMasuk);
            o.setJamKeluar(jamKeluar);
            o.setJenisUpah(sesuai ? JenisUpahOpenshift.SESUAI_LEMBUR : JenisUpahOpenshift.NOMINAL);
            o.setUpahPerJam(upahPerJam);
            o.setMaksKaryawan(maksKaryawan);
            o.setCatatan(catatan);
            Set<Divisi> divSet = new HashSet<>();
            for (Long did : divisiIds) divisiRepository.findById(did).ifPresent(divSet::add);
            o.setDivisiSet(divSet);
            toSave.add(o);
        }

        // All-or-nothing
        if (!result.getErrors().isEmpty()) {
            result.setGagal(result.getErrors().size());
            return result;
        }

        openshiftRepository.saveAll(toSave);
        result.setBerhasil(toSave.size());
        return result;
    }

    // ─────────────────────────── helpers ────────────────────────

    private Long resolvePerusahaanId(Long ownerId) {
        if (ownerId == null) return null;
        return perusahaanRepository.findByOwnerId(ownerId).map(Perusahaan::getId).orElse(null);
    }

    private void validate(OpenshiftRequest req) {
        if (req.getJamMasuk() == null || req.getJamKeluar() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Jam masuk/keluar wajib diisi");
        }
        if (!req.getJamKeluar().isAfter(req.getJamMasuk())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Jam keluar harus setelah jam masuk");
        }
        if (req.getDivisiIds() == null || req.getDivisiIds().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Pilih minimal satu divisi target");
        }
        if (req.getJenisUpah() == JenisUpahOpenshift.NOMINAL
                && (req.getUpahPerJam() == null || req.getUpahPerJam() < 0)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Upah per jam wajib diisi (>=0) untuk jenis NOMINAL");
        }
    }

    private void applyRequest(Openshift o, OpenshiftRequest req) {
        o.setJamMasuk(req.getJamMasuk());
        o.setJamKeluar(req.getJamKeluar());
        o.setJenisUpah(req.getJenisUpah() != null ? req.getJenisUpah() : JenisUpahOpenshift.SESUAI_LEMBUR);
        o.setUpahPerJam(req.getUpahPerJam() != null ? req.getUpahPerJam() : 0L);
        o.setMaksKaryawan(req.getMaksKaryawan() != null && req.getMaksKaryawan() > 0 ? req.getMaksKaryawan() : null);
        o.setCatatan(req.getCatatan());
        Set<Divisi> divSet = new HashSet<>();
        for (Long did : req.getDivisiIds()) divisiRepository.findById(did).ifPresent(divSet::add);
        o.setDivisiSet(divSet);
    }

    private Openshift getOrThrow(Long id) {
        return openshiftRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Openshift dengan id " + id + " tidak ditemukan"));
    }

    private OpenshiftDTO toDTO(Openshift o) {
        Set<Long> ids = o.getDivisiSet() == null ? new HashSet<>() :
                o.getDivisiSet().stream().map(Divisi::getId).collect(Collectors.toSet());
        return OpenshiftDTO.builder()
                .id(o.getId())
                .jamMasuk(o.getJamMasuk())
                .jamKeluar(o.getJamKeluar())
                .jenisUpah(o.getJenisUpah() != null ? o.getJenisUpah() : JenisUpahOpenshift.SESUAI_LEMBUR)
                .upahPerJam(o.getUpahPerJam() != null ? o.getUpahPerJam() : 0L)
                .maksKaryawan(o.getMaksKaryawan())
                .catatan(o.getCatatan())
                .divisiIds(ids)
                .createdAt(o.getCreatedAt())
                .updatedAt(o.getUpdatedAt())
                .build();
    }

    // ─── CSV helpers ──────────────────────────────────────────

    private static String normalize(String s) {
        if (s == null) return "";
        return s.toLowerCase().trim().replace(".", "").replaceAll("\\s+", " ");
    }

    private static int idxOf(Map<String, Integer> col, String... names) {
        for (String n : names) {
            Integer i = col.get(normalize(n));
            if (i != null) return i;
        }
        return -1;
    }

    private static String safeGet(List<String> cells, int idx) {
        if (idx < 0 || idx >= cells.size()) return "";
        return cells.get(idx) != null ? cells.get(idx) : "";
    }

    private static List<String> readAllLines(MultipartFile file) {
        List<String> out = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) out.add(line);
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Gagal membaca file CSV: " + e.getMessage());
        }
        return out;
    }

    /** Parser CSV mini yang mendukung quoted field & delimiter di dalam quote. */
    private static List<String> parseCsvLine(String line, char delim) {
        List<String> out = new ArrayList<>();
        StringBuilder cur = new StringBuilder();
        boolean inQuote = false;
        for (int i = 0; i < line.length(); i++) {
            char ch = line.charAt(i);
            if (inQuote) {
                if (ch == '"') {
                    if (i + 1 < line.length() && line.charAt(i + 1) == '"') { cur.append('"'); i++; }
                    else inQuote = false;
                } else cur.append(ch);
            } else {
                if (ch == delim) { out.add(cur.toString().trim()); cur.setLength(0); }
                else if (ch == '"') inQuote = true;
                else cur.append(ch);
            }
        }
        out.add(cur.toString().trim());
        return out;
    }

    /** Deteksi delimiter dengan menghitung kemunculan ';', tab, lalu ',' di luar quote. */
    private static char detectDelimiter(String headerLine) {
        int c = 0, sc = 0, tb = 0;
        boolean q = false;
        for (int i = 0; i < headerLine.length(); i++) {
            char ch = headerLine.charAt(i);
            if (ch == '"') q = !q;
            else if (!q) {
                if (ch == ',') c++;
                else if (ch == ';') sc++;
                else if (ch == '\t') tb++;
            }
        }
        if (sc >= c && sc >= tb && sc > 0) return ';';
        if (tb >= c && tb > 0) return '\t';
        return ',';
    }

    private static LocalDateTime parseDateTime(String raw) {
        if (raw == null) return null;
        String s = raw.trim();
        if (s.isEmpty()) return null;
        // Buang detik jika ada
        s = s.replaceAll("(:\\d{2})(:\\d{2})$", "$1");
        try { return LocalDateTime.parse(s, FMT_DT_SPACE); } catch (DateTimeParseException ignored) {}
        try { return LocalDateTime.parse(s, FMT_DT_T); } catch (DateTimeParseException ignored) {}
        try { return LocalDateTime.parse(s, FMT_DT_SLASH); } catch (DateTimeParseException ignored) {}
        try { return LocalDateTime.parse(s, FMT_DT_DASH); } catch (DateTimeParseException ignored) {}
        return null;
    }
}
