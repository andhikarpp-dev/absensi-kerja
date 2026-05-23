package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengaturanCutiSetengahHariDTO;
import id.lua.absensikerja.model.dto.PengaturanCutiSetengahHariRequest;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.PengaturanCutiSetengahHari;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.repository.PengaturanCutiSetengahHariRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PengaturanCutiSetengahHariServiceImpl implements PengaturanCutiSetengahHariService {

    private final PengaturanCutiSetengahHariRepository repo;
    private final PerusahaanRepository perusahaanRepo;

    // ── Helpers ────────────────────────────────────────────────
    private Perusahaan resolvePerusahaan(Long callerUserId) {
        if (callerUserId == null) return null;
        return perusahaanRepo.findByOwnerId(callerUserId).orElse(null);
    }

    private PengaturanCutiSetengahHariDTO toDTO(PengaturanCutiSetengahHari e) {
        return PengaturanCutiSetengahHariDTO.builder()
                .id(e.getId())
                .aktif(e.isAktif())
                .presensiMasukMode(e.getPresensiMasukMode())
                .presensiMasukJam(e.getPresensiMasukJam())
                .presensiKeluarMode(e.getPresensiKeluarMode())
                .presensiKeluarJam(e.getPresensiKeluarJam())
                .build();
    }

    /** Return default DTO (belum disimpan ke DB). */
    private PengaturanCutiSetengahHariDTO defaultDTO() {
        return PengaturanCutiSetengahHariDTO.builder()
                .aktif(false)
                .presensiMasukMode("jadwal")
                .presensiMasukJam(null)
                .presensiKeluarMode("jadwal")
                .presensiKeluarJam(null)
                .build();
    }

    // ── API ────────────────────────────────────────────────────
    @Override
    public PengaturanCutiSetengahHariDTO get(Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);
        Optional<PengaturanCutiSetengahHari> opt = (p != null)
                ? repo.findByPerusahaanId(p.getId())
                : repo.findFirstByPerusahaanIsNull();
        return opt.map(this::toDTO).orElse(defaultDTO());
    }

    @Override
    @Transactional
    public PengaturanCutiSetengahHariDTO save(PengaturanCutiSetengahHariRequest req, Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);

        // Upsert
        PengaturanCutiSetengahHari entity = (p != null)
                ? repo.findByPerusahaanId(p.getId()).orElse(new PengaturanCutiSetengahHari())
                : repo.findFirstByPerusahaanIsNull().orElse(new PengaturanCutiSetengahHari());

        // Set perusahaan hanya jika entity baru (id null)
        if (entity.getId() == null) entity.setPerusahaan(p);

        if (req.getAktif() != null)             entity.setAktif(req.getAktif());
        if (req.getPresensiMasukMode() != null)  entity.setPresensiMasukMode(req.getPresensiMasukMode());
        if (req.getPresensiKeluarMode() != null) entity.setPresensiKeluarMode(req.getPresensiKeluarMode());

        // Jam manual hanya berlaku jika mode = "manual", kosongkan jika jadwal
        if ("manual".equals(entity.getPresensiMasukMode())) {
            entity.setPresensiMasukJam(req.getPresensiMasukJam());
        } else {
            entity.setPresensiMasukJam(null);
        }
        if ("manual".equals(entity.getPresensiKeluarMode())) {
            entity.setPresensiKeluarJam(req.getPresensiKeluarJam());
        } else {
            entity.setPresensiKeluarJam(null);
        }

        return toDTO(repo.save(entity));
    }
}
