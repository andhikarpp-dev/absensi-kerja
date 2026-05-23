package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.TukarJadwalShiftDTO;
import id.lua.absensikerja.model.entity.*;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.repository.TukarJadwalShiftRepository;
import id.lua.absensikerja.repository.UserRepository;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TukarJadwalShiftServiceImpl implements TukarJadwalShiftService {

    private final TukarJadwalShiftRepository repo;
    private final PerusahaanRepository       perusahaanRepo;
    private final UserRepository             userRepo;
    private final AuthUserUtil               authUserUtil;

    // ── Helpers ─────────────────────────────────────────────────

    private Long resolvePerusahaanId(Long userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
        boolean isPemilik = user.getRole() != null &&
                user.getRole().getName() == RoleType.PEMILIK;
        if (isPemilik) {
            return perusahaanRepo.findByOwnerId(userId)
                    .map(Perusahaan::getId).orElse(null);
        }
        // ADMIN: cari perusahaan dari karyawan yang terhubung ke user
        return null; // null = semua perusahaan (ADMIN global)
    }

    private String buildJadwalLabel(JadwalShift js) {
        if (js == null) return "-";
        DateTimeFormatter tgl = DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy", new Locale("id", "ID"));
        String tanggal = js.getTanggal() != null ? js.getTanggal().format(tgl) : "-";
        String shift = js.getPolaKerja() != null ? js.getPolaKerja().getNamaPolaKerja() : "Shift";
        String jamMasuk  = js.getJamMasuk()  != null ? js.getJamMasuk()  : (js.getPolaKerja() != null ? "" : "");
        String jamKeluar = js.getJamKeluar() != null ? js.getJamKeluar() : "";
        String jamInfo = (!jamMasuk.isEmpty() && !jamKeluar.isEmpty()) ? " (" + jamMasuk + " - " + jamKeluar + ")" : "";
        return tanggal + " | " + shift + jamInfo;
    }

    private TukarJadwalShiftDTO toDTO(TukarJadwalShift t) {
        Karyawan pemohon = t.getKaryawanPemohon();
        Karyawan target  = t.getKaryawanTarget();
        return TukarJadwalShiftDTO.builder()
                .id(t.getId())
                .karyawanPemohonId(pemohon.getId())
                .namaKaryawanPemohon(pemohon.getNamaLengkap())
                .divisiPemohon(pemohon.getDivisi() != null ? pemohon.getDivisi().getNamaDivisi() : null)
                .jadwalPemohon(buildJadwalLabel(t.getJadwalPemohon()))
                .karyawanTargetId(target.getId())
                .namaKaryawanTarget(target.getNamaLengkap())
                .divisiTarget(target.getDivisi() != null ? target.getDivisi().getNamaDivisi() : null)
                .jadwalTarget(buildJadwalLabel(t.getJadwalTarget()))
                .status(t.getStatus())
                .catatan(t.getCatatan())
                .catatanPenolakan(t.getCatatanPenolakan())
                .tanggalDibuat(t.getCreatedAt())
                .updatedAt(t.getUpdatedAt())
                .build();
    }

    // ── Public API ───────────────────────────────────────────────

    @Override
    public List<TukarJadwalShiftDTO> findAll(
            StatusTukarJadwalShift status,
            Long divisiId,
            LocalDate dari,
            LocalDate sampai,
            String cari,
            Long userId) {

        Long perusahaanId = resolvePerusahaanId(userId);
        LocalDateTime dariDt   = dari   != null ? dari.atStartOfDay()               : null;
        LocalDateTime sampaiDt = sampai != null ? sampai.atTime(23, 59, 59) : null;
        String cariParam = (cari != null && !cari.isBlank()) ? cari.trim() : null;

        return repo.findByFilter(perusahaanId, status, divisiId, dariDt, sampaiDt, cariParam)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public TukarJadwalShiftDTO setujui(Long id, Long userId) {
        TukarJadwalShift t = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));
        t.setStatus(StatusTukarJadwalShift.DISETUJUI);
        return toDTO(repo.save(t));
    }

    @Override
    @Transactional
    public TukarJadwalShiftDTO tolak(Long id, String catatan, Long userId) {
        TukarJadwalShift t = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));
        t.setStatus(StatusTukarJadwalShift.DITOLAK);
        t.setCatatanPenolakan(catatan);
        return toDTO(repo.save(t));
    }
}
