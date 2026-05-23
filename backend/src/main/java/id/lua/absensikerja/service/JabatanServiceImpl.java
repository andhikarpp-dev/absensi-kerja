package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JabatanDTO;
import id.lua.absensikerja.model.dto.JabatanRiwayatDTO;
import id.lua.absensikerja.model.dto.JabatanRequest;
import id.lua.absensikerja.model.entity.Jabatan;
import id.lua.absensikerja.model.entity.JabatanRiwayat;
import id.lua.absensikerja.model.entity.JabatanTargetKehadiran;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.repository.JabatanRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class JabatanServiceImpl implements JabatanService {

    private final JabatanRepository  jabatanRepository;
    private final PerusahaanRepository perusahaanRepository;

    // ── Resolve perusahaan dari callerUserId ──────────────────
    private Perusahaan resolvePerusahaan(Long callerUserId) {
        if (callerUserId == null) return null;
        return perusahaanRepository.findByOwnerId(callerUserId).orElse(null);
    }

    @Override
    public List<JabatanDTO> findAll(Long callerUserId) {
        Perusahaan perusahaan = resolvePerusahaan(callerUserId);
        if (perusahaan != null) {
            // PEMILIK / ADMIN yang terikat perusahaan → filter by perusahaan
            return jabatanRepository.findByPerusahaanId(perusahaan.getId()).stream()
                    .map(this::toDTO)
                    .collect(Collectors.toList());
        }
        // ADMIN global → semua jabatan
        return jabatanRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public JabatanDTO findById(Long id) {
        return toDTO(getOrThrow(id));
    }

    @Override
    @Transactional
    public JabatanDTO create(JabatanRequest req, Long callerUserId) {
        Perusahaan perusahaan = resolvePerusahaan(callerUserId);

        if (perusahaan != null) {
            // Cek nama duplikat dalam perusahaan (termasuk soft-deleted)
            Optional<Jabatan> existing = jabatanRepository
                    .findByNamaJabatanAndPerusahaanIgnoreFilter(req.getNamaJabatan(), perusahaan.getId());
            if (existing.isPresent()) {
                Jabatan jabatan = existing.get();
                if (!jabatan.isDeleted()) {
                    throw new ResponseStatusException(HttpStatus.CONFLICT,
                            "Nama jabatan '" + req.getNamaJabatan() + "' sudah digunakan");
                }
                // Restore soft-deleted
                jabatan.setDeleted(false);
                jabatan.setDeletedAt(null);
                jabatan.setUpdatedAt(LocalDateTime.now());
                jabatan.setPerusahaan(perusahaan);
                applyRequest(req, jabatan, "Jabatan dipulihkan dan diperbarui");
                return toDTO(jabatanRepository.save(jabatan));
            }
            Jabatan jabatan = new Jabatan();
            jabatan.setPerusahaan(perusahaan);
            applyRequest(req, jabatan, "Jabatan dibuat");
            return toDTO(jabatanRepository.save(jabatan));
        }

        // ADMIN global — perilaku lama
        Optional<Jabatan> existing = jabatanRepository.findByNamaJabatanIgnoreFilter(req.getNamaJabatan());
        if (existing.isPresent()) {
            Jabatan jabatan = existing.get();
            if (!jabatan.isDeleted()) {
                throw new ResponseStatusException(HttpStatus.CONFLICT,
                        "Nama jabatan '" + req.getNamaJabatan() + "' sudah digunakan");
            }
            jabatan.setDeleted(false);
            jabatan.setDeletedAt(null);
            jabatan.setUpdatedAt(LocalDateTime.now());
            applyRequest(req, jabatan, "Jabatan dipulihkan dan diperbarui");
            return toDTO(jabatanRepository.save(jabatan));
        }
        Jabatan jabatan = new Jabatan();
        applyRequest(req, jabatan, "Jabatan dibuat");
        return toDTO(jabatanRepository.save(jabatan));
    }

    @Override
    @Transactional
    public JabatanDTO update(Long id, JabatanRequest req, Long callerUserId) {
        Jabatan jabatan = getOrThrow(id);
        Perusahaan perusahaan = resolvePerusahaan(callerUserId);

        // Validasi nama duplikat dalam scope yang benar
        if (!jabatan.getNamaJabatan().equals(req.getNamaJabatan())) {
            if (perusahaan != null) {
                if (jabatanRepository.existsByNamaJabatanAndPerusahaanIdAndIsDeletedFalse(
                        req.getNamaJabatan(), perusahaan.getId())) {
                    throw new ResponseStatusException(HttpStatus.CONFLICT,
                            "Nama jabatan '" + req.getNamaJabatan() + "' sudah digunakan");
                }
            } else {
                if (jabatanRepository.existsByNamaJabatanAndIsDeletedFalse(req.getNamaJabatan())) {
                    throw new ResponseStatusException(HttpStatus.CONFLICT,
                            "Nama jabatan '" + req.getNamaJabatan() + "' sudah digunakan");
                }
            }
        }

        // Pastikan perusahaan ter-set jika belum ada
        if (perusahaan != null && jabatan.getPerusahaan() == null) {
            jabatan.setPerusahaan(perusahaan);
        }

        applyRequest(req, jabatan, "Jabatan diperbarui");
        jabatan.setUpdatedAt(LocalDateTime.now());
        return toDTO(jabatanRepository.save(jabatan));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Jabatan jabatan = getOrThrow(id);
        jabatan.setDeleted(true);
        jabatan.setDeletedAt(LocalDateTime.now());
        jabatanRepository.save(jabatan);
    }

    // ── helpers ───────────────────────────────────────────────

    private Jabatan getOrThrow(Long id) {
        return jabatanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Jabatan dengan id " + id + " tidak ditemukan"));
    }

    private void applyRequest(JabatanRequest req, Jabatan jabatan, String keterangan) {
        jabatan.setNamaJabatan(req.getNamaJabatan());

        // Induk
        if (req.getIndukId() != null) {
            jabatan.setInduk(jabatanRepository.findByIdIgnoreFilter(req.getIndukId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                            "Jabatan induk dengan id " + req.getIndukId() + " tidak ditemukan")));
        } else {
            jabatan.setInduk(null);
        }

        // Target kehadiran — clear & re-add
        if (jabatan.getTargetKehadiranList() == null) {
            jabatan.setTargetKehadiranList(new ArrayList<>());
        }
        jabatan.getTargetKehadiranList().clear();
        if (req.getTargetKehadiranList() != null) {
            req.getTargetKehadiranList().forEach(item -> {
                JabatanTargetKehadiran t = new JabatanTargetKehadiran();
                t.setJabatan(jabatan);
                t.setNamaLokasi(item.getNamaLokasi());
                t.setTargetPersen(item.getTargetPersen() != null ? item.getTargetPersen() : 0);
                jabatan.getTargetKehadiranList().add(t);
            });
        }

        // Riwayat — append-only
        if (jabatan.getRiwayatList() == null) {
            jabatan.setRiwayatList(new ArrayList<>());
        }
        JabatanRiwayat riwayat = new JabatanRiwayat();
        riwayat.setJabatan(jabatan);
        riwayat.setKeterangan(keterangan);
        riwayat.setChangedAt(LocalDateTime.now());
        jabatan.getRiwayatList().add(riwayat);
    }

    private JabatanDTO toDTO(Jabatan j) {
        List<JabatanDTO.TargetKehadiranItemDTO> targetDTOs = j.getTargetKehadiranList() == null
                ? new ArrayList<>()
                : j.getTargetKehadiranList().stream()
                    .map(t -> JabatanDTO.TargetKehadiranItemDTO.builder()
                            .id(t.getId())
                            .namaLokasi(t.getNamaLokasi())
                            .targetPersen(t.getTargetPersen())
                            .build())
                    .collect(Collectors.toList());

        List<JabatanRiwayatDTO> riwayatDTOs = j.getRiwayatList() == null
                ? new ArrayList<>()
                : j.getRiwayatList().stream()
                    .map(r -> JabatanRiwayatDTO.builder()
                            .id(r.getId())
                            .keterangan(r.getKeterangan())
                            .changedBy(r.getChangedBy())
                            .changedAt(r.getChangedAt())
                            .build())
                    .collect(Collectors.toList());

        Long indukId = j.getIndukId();
        String indukNama = null;
        if (indukId != null) {
            Jabatan indukEntity = jabatanRepository.findByIdIgnoreFilter(indukId).orElse(null);
            if (indukEntity != null) indukNama = indukEntity.getNamaJabatan();
        }

        return JabatanDTO.builder()
                .id(j.getId())
                .namaJabatan(j.getNamaJabatan())
                .indukId(indukId)
                .indukNama(indukNama)
                .targetKehadiranList(targetDTOs)
                .riwayatList(riwayatDTOs)
                .build();
    }
}
