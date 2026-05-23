package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.RevisiKehadiranDTO;
import id.lua.absensikerja.model.dto.RevisiKehadiranRequest;
import id.lua.absensikerja.model.entity.*;
import id.lua.absensikerja.model.enums.JenisRevisiKehadiran;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.StatusRevisi;
import id.lua.absensikerja.repository.*;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RevisiKehadiranServiceImpl implements RevisiKehadiranService {

    private final RevisiKehadiranRepository revisiRepo;
    private final KaryawanRepository        karyawanRepo;
    private final AbsensiRepository          absensiRepo;
    private final PerusahaanRepository       perusahaanRepo;
    private final AuthUserUtil               authUserUtil;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── Helper ────────────────────────────────────────────────────
    private Set<Long> resolveKaryawanIds() {
        User user = authUserUtil.getCurrentUser();
        boolean isPemilik = user.getRole() != null &&
                user.getRole().getName() == RoleType.PEMILIK;
        if (isPemilik) {
            return perusahaanRepo.findByOwnerId(user.getId())
                    .map(p -> karyawanRepo.findByPerusahaanId(p.getId()))
                    .orElse(java.util.Collections.emptyList())
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

    private RevisiKehadiranDTO toDTO(RevisiKehadiran r) {
        Karyawan k = r.getKaryawan();
        return RevisiKehadiranDTO.builder()
                .id(r.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .fotoProfil(k.getFotoProfil() != null ? baseUrl + "/" + k.getFotoProfil() : null)
                .absensiId(r.getAbsensi() != null ? r.getAbsensi().getId() : null)
                .tanggal(r.getTanggal())
                .jenisKehadiran(r.getJenisKehadiran())
                .alasan(r.getAlasan())
                .jamAsli(r.getJamAsli())
                .jamBaru(r.getJamBaru())
                .status(r.getStatus())
                .catatanPenolakan(r.getCatatanPenolakan())
                .createdAt(r.getCreatedAt())
                .updatedAt(r.getUpdatedAt())
                .build();
    }

    // ── Implementasi ─────────────────────────────────────────────

    @Override
    @Transactional
    public RevisiKehadiranDTO buat(RevisiKehadiranRequest req, Long callerUserId) {
        Karyawan karyawan = karyawanRepo.findById(req.getKaryawanId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));

        Absensi absensi = null;
        if (req.getAbsensiId() != null) {
            absensi = absensiRepo.findById(req.getAbsensiId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data absensi tidak ditemukan"));
        }

        RevisiKehadiran revisi = RevisiKehadiran.builder()
                .karyawan(karyawan)
                .absensi(absensi)
                .tanggal(req.getTanggal())
                .jenisKehadiran(req.getJenisKehadiran())
                .alasan(req.getAlasan())
                .jamAsli(req.getJamAsli())
                .jamBaru(req.getJamBaru())
                .status(StatusRevisi.PENGAJUAN)
                .build();

        return toDTO(revisiRepo.save(revisi));
    }

    @Override
    public List<RevisiKehadiranDTO> findByStatus(StatusRevisi status, Long divisiId,
                                                  LocalDate dari, LocalDate sampai,
                                                  String cari, Long callerUserId) {
        Set<Long> allowed = resolveKaryawanIds();
        return revisiRepo.findByStatusAndFilter(status, divisiId, dari, sampai)
                .stream()
                .filter(r -> allowed.contains(r.getKaryawan().getId()))
                .filter(r -> cari == null || cari.isBlank() ||
                        r.getKaryawan().getNamaLengkap().toLowerCase().contains(cari.toLowerCase()))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public RevisiKehadiranDTO setujui(Long id, Long callerUserId) {
        RevisiKehadiran revisi = revisiRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data revisi tidak ditemukan"));

        revisi.setStatus(StatusRevisi.DISETUJUI);

        // Terapkan jam baru ke absensi jika ada
        if (revisi.getAbsensi() != null) {
            Absensi ab = revisi.getAbsensi();
            LocalTime jamBaru = revisi.getJamBaru();
            switch (revisi.getJenisKehadiran()) {
                case MASUK              -> ab.setJamMasuk(jamBaru);
                case KELUAR             -> ab.setJamKeluar(jamBaru);
                case ISTIRAHAT          -> ab.setJamMulaiIstirahat(jamBaru);
                case SELESAI_ISTIRAHAT  -> ab.setJamSelesaiIstirahat(jamBaru);
                case LEMBUR             -> ab.setJamMulaiLembur(jamBaru);
                case SELESAI_LEMBUR     -> ab.setJamSelesaiLembur(jamBaru);
            }
            absensiRepo.save(ab);
        }

        return toDTO(revisiRepo.save(revisi));
    }

    @Override
    @Transactional
    public RevisiKehadiranDTO tolak(Long id, String catatanPenolakan, Long callerUserId) {
        RevisiKehadiran revisi = revisiRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data revisi tidak ditemukan"));
        revisi.setStatus(StatusRevisi.DITOLAK);
        revisi.setCatatanPenolakan(catatanPenolakan);
        return toDTO(revisiRepo.save(revisi));
    }

    @Override
    @Transactional
    public void hapus(Long id, Long callerUserId) {
        RevisiKehadiran revisi = revisiRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Data revisi tidak ditemukan"));
        revisiRepo.delete(revisi);
    }
}
