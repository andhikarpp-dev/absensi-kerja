package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PersetujuanFotoProfilDTO;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PersetujuanFotoProfil;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PersetujuanFotoProfilRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PersetujuanFotoProfilServiceImpl implements PersetujuanFotoProfilService {

    private final PersetujuanFotoProfilRepository repo;
    private final KaryawanRepository              karyawanRepo;
    private final PerusahaanRepository            perusahaanRepo;
    private final AuthUserUtil                    authUserUtil;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── Helper ────────────────────────────────────────────────
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

    private String toUrl(String path) {
        if (path == null) return null;
        return path.startsWith("http") ? path : baseUrl + "/" + path;
    }

    private PersetujuanFotoProfilDTO toDTO(PersetujuanFotoProfil p) {
        Karyawan k = p.getKaryawan();
        return PersetujuanFotoProfilDTO.builder()
                .id(p.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .fotoBaru(toUrl(p.getFotoBaru()))
                .fotoLama(toUrl(p.getFotoLama()))
                .status(p.getStatus())
                .catatanPenolakan(p.getCatatanPenolakan())
                .diprosesAt(p.getDiprosesAt())
                .createdAt(p.getCreatedAt())
                .build();
    }

    // ── Implementasi ──────────────────────────────────────────

    @Override
    public List<PersetujuanFotoProfilDTO> findByStatus(String status, String cari, Long callerUserId) {
        Set<Long> allowed = resolveKaryawanIds();
        List<PersetujuanFotoProfil> list = "SEMUA".equalsIgnoreCase(status)
                ? repo.findAll()
                : repo.findByStatus(status.toUpperCase());
        return list.stream()
                .filter(p -> allowed.contains(p.getKaryawan().getId()))
                .filter(p -> cari == null || cari.isBlank() ||
                        p.getKaryawan().getNamaLengkap().toLowerCase().contains(cari.toLowerCase()))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public PersetujuanFotoProfilDTO setujui(Long id, Long callerUserId) {
        PersetujuanFotoProfil p = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));

        // Terapkan foto baru ke profil karyawan
        Karyawan k = p.getKaryawan();
        k.setFotoProfil(p.getFotoBaru());
        karyawanRepo.save(k);

        p.setStatus("DISETUJUI");
        p.setDiprosesAt(LocalDateTime.now());
        return toDTO(repo.save(p));
    }

    @Override
    @Transactional
    public PersetujuanFotoProfilDTO tolak(Long id, String catatanPenolakan, Long callerUserId) {
        PersetujuanFotoProfil p = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));
        p.setStatus("DITOLAK");
        p.setCatatanPenolakan(catatanPenolakan);
        p.setDiprosesAt(LocalDateTime.now());
        return toDTO(repo.save(p));
    }

    @Override
    @Transactional
    public void hapus(Long id, Long callerUserId) {
        PersetujuanFotoProfil p = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data tidak ditemukan"));
        repo.delete(p);
    }

    @Override
    @Transactional
    public PersetujuanFotoProfilDTO ajukan(Long karyawanId, String fotoBaru, Long callerUserId) {
        Karyawan k = karyawanRepo.findById(karyawanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));

        PersetujuanFotoProfil p = PersetujuanFotoProfil.builder()
                .karyawan(k)
                .fotoLama(k.getFotoProfil())
                .fotoBaru(fotoBaru)
                .status("MENUNGGU")
                .build();
        return toDTO(repo.save(p));
    }
}
