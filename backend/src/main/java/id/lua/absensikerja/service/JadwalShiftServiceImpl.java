package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.*;
import id.lua.absensikerja.model.entity.*;
import id.lua.absensikerja.model.enums.HariKerja;
import id.lua.absensikerja.model.enums.SistemKerja;
import id.lua.absensikerja.model.enums.StatusJadwalShift;
import id.lua.absensikerja.repository.JadwalShiftRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.repository.PolaKerjaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class JadwalShiftServiceImpl implements JadwalShiftService {

    private final JadwalShiftRepository jadwalShiftRepository;
    private final KaryawanRepository    karyawanRepository;
    private final PolaKerjaRepository   polaKerjaRepository;
    private final PerusahaanRepository  perusahaanRepository;

    private Long perusahaanIdOf(Long ownerId) {
        if (ownerId == null) return null;
        return perusahaanRepository.findByOwnerId(ownerId).map(Perusahaan::getId).orElse(null);
    }

    @Override
    public JadwalShiftMatrixDTO getMatrix(YearMonth bulan, Long divisiId, String search, Long ownerId) {
        if (bulan == null) bulan = YearMonth.now();
        LocalDate start = bulan.atDay(1);
        LocalDate end   = bulan.atEndOfMonth();

        List<KaryawanShiftDTO> karyawanList = findEligibleKaryawan(divisiId, search, ownerId);
        List<Long> karyawanIds = karyawanList.stream().map(KaryawanShiftDTO::getId).toList();

        List<JadwalShiftDTO> assignments = karyawanIds.isEmpty() ? List.of()
                : jadwalShiftRepository.findInRangeByKaryawan(start, end, karyawanIds)
                    .stream().map(this::toDTO).collect(Collectors.toList());

        List<LocalDate> dates = Stream.iterate(start, d -> !d.isAfter(end), d -> d.plusDays(1))
                .collect(Collectors.toList());

        return JadwalShiftMatrixDTO.builder()
                .startDate(start)
                .endDate(end)
                .dates(dates)
                .karyawan(karyawanList)
                .assignments(assignments)
                .shiftOptions(findShiftOptions(ownerId))
                .build();
    }

    @Override
    public List<KaryawanShiftDTO> findEligibleKaryawan(Long divisiId, String search, Long ownerId) {
        Long perusahaanId = perusahaanIdOf(ownerId);
        List<Karyawan> source = (perusahaanId != null)
                ? karyawanRepository.findByPerusahaanId(perusahaanId)
                : karyawanRepository.findAll();

        String q = search == null ? "" : search.trim().toLowerCase();
        return source.stream()
                .filter(k -> k.getDivisi() != null
                        && k.getDivisi().getSistemKerja() == SistemKerja.SHIFT)
                .filter(k -> divisiId == null || (k.getDivisi() != null && divisiId.equals(k.getDivisi().getId())))
                .filter(k -> q.isEmpty()
                        || (k.getNamaLengkap() != null && k.getNamaLengkap().toLowerCase().contains(q))
                        || (k.getNip() != null && k.getNip().toLowerCase().contains(q)))
                .sorted(Comparator
                        .comparing((Karyawan k) -> k.getDivisi() == null ? "" : k.getDivisi().getNamaDivisi(),
                                Comparator.nullsLast(String::compareToIgnoreCase))
                        .thenComparing(Karyawan::getNamaLengkap,
                                Comparator.nullsLast(String::compareToIgnoreCase)))
                .map(this::toKaryawanDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<PolaKerjaDTO> findShiftOptions(Long ownerId) {
        Long perusahaanId = perusahaanIdOf(ownerId);
        List<PolaKerja> all = (perusahaanId != null)
                ? polaKerjaRepository.findByPerusahaanId(perusahaanId)
                : polaKerjaRepository.findAll();

        // Hanya pola kerja yang terhubung ke ≥1 divisi SHIFT.
        // (TIDAK ada fallback ke semua pola — agar dropdown benar-benar khusus shift.)
        return all.stream()
                .filter(pk -> pk.getDivisiSet() != null && pk.getDivisiSet().stream()
                        .anyMatch(d -> d.getSistemKerja() == SistemKerja.SHIFT))
                .map(this::toPolaDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public JadwalShiftDTO upsert(JadwalShiftRequest req, Long ownerId) {
        Karyawan k = karyawanRepository.findById(req.getKaryawanId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
        ensureTenancy(k, ownerId);

        JadwalShift entity = jadwalShiftRepository
                .findByKaryawanIdAndTanggal(req.getKaryawanId(), req.getTanggal())
                .orElseGet(JadwalShift::new);

        entity.setKaryawan(k);
        entity.setPerusahaan(k.getPerusahaan());
        entity.setTanggal(req.getTanggal());
        entity.setStatus(req.getStatus() != null ? req.getStatus() : StatusJadwalShift.AKTIF);
        entity.setKeterangan(req.getKeterangan());
        entity.setWarna(req.getWarna());
        entity.setJamMasuk(req.getJamMasuk());
        entity.setJamKeluar(req.getJamKeluar());

        if (req.getPolaKerjaId() != null) {
            PolaKerja pk = polaKerjaRepository.findById(req.getPolaKerjaId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pola kerja tidak ditemukan"));
            entity.setPolaKerja(pk);
        } else {
            entity.setPolaKerja(null);
        }

        return toDTO(jadwalShiftRepository.save(entity));
    }

    @Override
    @Transactional
    public List<JadwalShiftDTO> batchAssign(JadwalShiftBatchRequest req, Long ownerId) {
        List<JadwalShiftDTO> result = new ArrayList<>();
        for (Long kid : req.getKaryawanIds()) {
            for (LocalDate tgl : req.getTanggalList()) {
                JadwalShiftRequest r = new JadwalShiftRequest();
                r.setKaryawanId(kid);
                r.setTanggal(tgl);
                r.setPolaKerjaId(req.getPolaKerjaId());
                r.setJamMasuk(req.getJamMasuk());
                r.setJamKeluar(req.getJamKeluar());
                r.setStatus(req.getStatus());
                r.setKeterangan(req.getKeterangan());
                r.setWarna(req.getWarna());

                Optional<JadwalShift> existing = jadwalShiftRepository.findByKaryawanIdAndTanggal(kid, tgl);
                if (existing.isPresent() && !req.isOverwrite()) continue;
                result.add(upsert(r, ownerId));
            }
        }
        return result;
    }

    @Override
    @Transactional
    public int copyWeek(CopyJadwalShiftRequest req, Long ownerId) {
        LocalDate srcStart = req.getSourceWeekStart();
        LocalDate srcEnd   = srcStart.plusDays(6);
        LocalDate tgtStart = req.getTargetWeekStart();
        long offset = srcStart.until(tgtStart, java.time.temporal.ChronoUnit.DAYS);

        List<Long> karyawanIds = req.getKaryawanIds();
        if (karyawanIds == null || karyawanIds.isEmpty()) {
            karyawanIds = findEligibleKaryawan(null, null, ownerId)
                    .stream().map(KaryawanShiftDTO::getId).toList();
        }
        if (karyawanIds.isEmpty()) return 0;

        List<JadwalShift> sources = jadwalShiftRepository.findInRangeByKaryawan(srcStart, srcEnd, karyawanIds);
        int count = 0;
        for (JadwalShift src : sources) {
            LocalDate newDate = src.getTanggal().plusDays(offset);
            Optional<JadwalShift> existing = jadwalShiftRepository
                    .findByKaryawanIdAndTanggal(src.getKaryawan().getId(), newDate);
            if (existing.isPresent() && !req.isOverwrite()) continue;

            JadwalShift target = existing.orElseGet(JadwalShift::new);
            target.setKaryawan(src.getKaryawan());
            target.setPerusahaan(src.getPerusahaan());
            target.setTanggal(newDate);
            target.setPolaKerja(src.getPolaKerja());
            target.setJamMasuk(src.getJamMasuk());
            target.setJamKeluar(src.getJamKeluar());
            target.setStatus(src.getStatus());
            target.setKeterangan(src.getKeterangan());
            target.setWarna(src.getWarna());
            jadwalShiftRepository.save(target);
            count++;
        }
        return count;
    }

    @Override
    @Transactional
    public void delete(Long id, Long ownerId) {
        JadwalShift entity = jadwalShiftRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jadwal shift tidak ditemukan"));
        if (entity.getKaryawan() != null) ensureTenancy(entity.getKaryawan(), ownerId);
        entity.setDeleted(true);
        entity.setDeletedAt(LocalDateTime.now());
        jadwalShiftRepository.save(entity);
    }

    // ── helpers ──────────────────────────────────────────

    private void ensureTenancy(Karyawan k, Long ownerId) {
        if (ownerId == null) return; // ADMIN
        Long perusahaanId = perusahaanIdOf(ownerId);
        if (perusahaanId == null) return;
        if (k.getPerusahaan() == null || !perusahaanId.equals(k.getPerusahaan().getId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Karyawan bukan milik perusahaan Anda");
        }
    }

    private KaryawanShiftDTO toKaryawanDTO(Karyawan k) {
        return KaryawanShiftDTO.builder()
                .id(k.getId())
                .nip(k.getNip())
                .namaLengkap(k.getNamaLengkap())
                .fotoProfil(k.getFotoProfil())
                .divisiId(k.getDivisi() != null ? k.getDivisi().getId() : null)
                .divisiNama(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .jabatanId(k.getJabatan() != null ? k.getJabatan().getId() : null)
                .jabatanNama(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .build();
    }

    private JadwalShiftDTO toDTO(JadwalShift j) {
        String jamMasuk  = j.getJamMasuk();
        String jamKeluar = j.getJamKeluar();

        // Derive dari PolaKerjaHari sesuai DayOfWeek bila override null
        if ((jamMasuk == null || jamKeluar == null) && j.getPolaKerja() != null && j.getTanggal() != null) {
            HariKerja hari = toHari(j.getTanggal().getDayOfWeek());
            for (PolaKerjaHari h : j.getPolaKerja().getHariList()) {
                if (h.getHari() == hari) {
                    if (jamMasuk == null)  jamMasuk  = h.getJamMasuk();
                    if (jamKeluar == null) jamKeluar = h.getJamKeluar();
                    break;
                }
            }
        }

        return JadwalShiftDTO.builder()
                .id(j.getId())
                .karyawanId(j.getKaryawan() != null ? j.getKaryawan().getId() : null)
                .karyawanNama(j.getKaryawan() != null ? j.getKaryawan().getNamaLengkap() : null)
                .divisiId(j.getKaryawan() != null && j.getKaryawan().getDivisi() != null
                        ? j.getKaryawan().getDivisi().getId() : null)
                .divisiNama(j.getKaryawan() != null && j.getKaryawan().getDivisi() != null
                        ? j.getKaryawan().getDivisi().getNamaDivisi() : null)
                .tanggal(j.getTanggal())
                .polaKerjaId(j.getPolaKerja() != null ? j.getPolaKerja().getId() : null)
                .polaKerjaNama(j.getPolaKerja() != null ? j.getPolaKerja().getNamaPolaKerja() : null)
                .jamMasuk(jamMasuk)
                .jamKeluar(jamKeluar)
                .status(j.getStatus())
                .keterangan(j.getKeterangan())
                .warna(j.getWarna())
                .build();
    }

    private PolaKerjaDTO toPolaDTO(PolaKerja pk) {
        Set<Long> divisiIds = pk.getDivisiSet() == null ? new HashSet<>() :
                pk.getDivisiSet().stream().map(Divisi::getId).collect(Collectors.toSet());
        List<PolaKerjaHariDTO> hariDTOs = pk.getHariList() == null ? new ArrayList<>() :
                pk.getHariList().stream().map(h -> PolaKerjaHariDTO.builder()
                        .id(h.getId())
                        .hari(h.getHari())
                        .polaHari(h.getPolaHari())
                        .jamMasuk(h.getJamMasuk())
                        .jamKeluar(h.getJamKeluar())
                        .mulaiIstirahat(h.getMulaiIstirahat())
                        .selesaiIstirahat(h.getSelesaiIstirahat())
                        .maksMenitIstirahat(h.getMaksMenitIstirahat())
                        .totalJamKerjaDibutuhkan(h.getTotalJamKerjaDibutuhkan())
                        .build()).collect(Collectors.toList());
        return PolaKerjaDTO.builder()
                .id(pk.getId())
                .divisiIds(divisiIds)
                .namaPolaKerja(pk.getNamaPolaKerja())
                .toleransiKeterlambatan(pk.getToleransiKeterlambatan())
                .jenisJadwal(pk.getJenisJadwal())
                .hariList(hariDTOs)
                .build();
    }

    private HariKerja toHari(DayOfWeek dow) {
        return switch (dow) {
            case MONDAY    -> HariKerja.SENIN;
            case TUESDAY   -> HariKerja.SELASA;
            case WEDNESDAY -> HariKerja.RABU;
            case THURSDAY  -> HariKerja.KAMIS;
            case FRIDAY    -> HariKerja.JUMAT;
            case SATURDAY  -> HariKerja.SABTU;
            case SUNDAY    -> HariKerja.MINGGU;
        };
    }
}
