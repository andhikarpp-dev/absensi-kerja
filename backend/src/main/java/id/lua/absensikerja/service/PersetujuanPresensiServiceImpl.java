package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PersetujuanPresensiDTO;
import id.lua.absensikerja.model.dto.PersetujuanPresensiRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PersetujuanPresensi;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PersetujuanPresensiRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PersetujuanPresensiServiceImpl implements PersetujuanPresensiService {

    private final PersetujuanPresensiRepository repo;
    private final KaryawanRepository            karyawanRepo;
    private final PerusahaanRepository           perusahaanRepo;
    private final AuthUserUtil                   authUserUtil;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── Helper ──────────────────────────────────────────────
    private Set<Long> resolveKaryawanIds() {
        User user = authUserUtil.getCurrentUser();
        boolean isPemilik = user.getRole() != null &&
                user.getRole().getName() == RoleType.PEMILIK;
        if (isPemilik) {
            return perusahaanRepo.findByOwnerId(user.getId())
                    .map(p -> karyawanRepo.findByPerusahaanId(p.getId()))
                    .orElse(Collections.emptyList())
                    .stream()
                    .filter(k -> !k.isDeleted())
                    .map(Karyawan::getId)
                    .collect(Collectors.toSet());
        }
        return karyawanRepo.findAll().stream()
                .filter(k -> !k.isDeleted())
                .map(Karyawan::getId)
                .collect(Collectors.toSet());
    }

    private PersetujuanPresensiDTO toDTO(PersetujuanPresensi p) {
        Karyawan k = p.getKaryawan();
        return PersetujuanPresensiDTO.builder()
                .id(p.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .fotoProfil(k.getFotoProfil() != null ? baseUrl + "/" + k.getFotoProfil() : null)
                .tanggal(p.getTanggal())
                .jenisPresensi(p.getJenisPresensi())
                .namaPolaKerja(p.getNamaPolaKerja())
                .jamJadwalMasuk(p.getJamJadwalMasuk())
                .jamJadwalKeluar(p.getJamJadwalKeluar())
                .alasan(p.getAlasan())
                .diizinkan(p.isDiizinkan())
                .diizinkanAt(p.getDiizinkanAt())
                .createdAt(p.getCreatedAt())
                .build();
    }

    // ── Implementasi ─────────────────────────────────────────

    @Override
    @Transactional
    public PersetujuanPresensiDTO buat(PersetujuanPresensiRequest req, Long callerUserId) {
        Karyawan karyawan = karyawanRepo.findById(req.getKaryawanId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));

        PersetujuanPresensi entity = PersetujuanPresensi.builder()
                .karyawan(karyawan)
                .tanggal(req.getTanggal())
                .jenisPresensi(req.getJenisPresensi())
                .namaPolaKerja(req.getNamaPolaKerja())
                .jamJadwalMasuk(req.getJamJadwalMasuk())
                .jamJadwalKeluar(req.getJamJadwalKeluar())
                .alasan(req.getAlasan())
                .build();
        return toDTO(repo.save(entity));
    }

    @Override
    public List<PersetujuanPresensiDTO> findAll(boolean diizinkan, LocalDate tanggal,
                                                 String jenisPresensi, String cari,
                                                 Long callerUserId) {
        Set<Long> allowed = resolveKaryawanIds();
        return repo.findByFilter(diizinkan, tanggal,
                        (jenisPresensi == null || jenisPresensi.isBlank()) ? null : jenisPresensi)
                .stream()
                .filter(p -> allowed.contains(p.getKaryawan().getId()))
                .filter(p -> cari == null || cari.isBlank() ||
                        p.getKaryawan().getNamaLengkap().toLowerCase().contains(cari.toLowerCase()))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public PersetujuanPresensiDTO izinkan(Long id, Long callerUserId) {
        PersetujuanPresensi p = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));
        p.setDiizinkan(true);
        p.setDiizinkanAt(LocalDateTime.now());
        return toDTO(repo.save(p));
    }

    @Override
    @Transactional
    public int izinkanBanyak(List<Long> ids, Long callerUserId) {
        int count = 0;
        for (Long id : ids) {
            try {
                izinkan(id, callerUserId);
                count++;
            } catch (Exception ignored) {}
        }
        return count;
    }

    @Override
    @Transactional
    public int izinkanSemua(LocalDate tanggal, String jenisPresensi, String cari, Long callerUserId) {
        List<PersetujuanPresensiDTO> list = findAll(false, tanggal, jenisPresensi, cari, callerUserId);
        List<Long> ids = list.stream().map(PersetujuanPresensiDTO::getId).collect(Collectors.toList());
        return izinkanBanyak(ids, callerUserId);
    }

    @Override
    @Transactional
    public void hapus(Long id, Long callerUserId) {
        PersetujuanPresensi p = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));
        repo.delete(p);
    }

    @Override
    public boolean cekIzin(Long karyawanId, LocalDate tanggal, String jenisPresensi) {
        return repo.existsByKaryawanIdAndTanggalAndJenisPresensiAndDiizinkan(
                karyawanId, tanggal, jenisPresensi, true);
    }
}
