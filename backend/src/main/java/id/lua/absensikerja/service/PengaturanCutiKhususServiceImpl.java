package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengaturanCutiKhususDTO;
import id.lua.absensikerja.model.dto.PengaturanCutiKhususRequest;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.PengaturanCutiKhusus;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.repository.PengaturanCutiKhususRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PengaturanCutiKhususServiceImpl implements PengaturanCutiKhususService {

    private final PengaturanCutiKhususRepository repo;
    private final PerusahaanRepository perusahaanRepo;

    // ── Helpers ────────────────────────────────────────────────
    private Perusahaan resolvePerusahaan(Long callerUserId) {
        if (callerUserId == null) return null;
        return perusahaanRepo.findByOwnerId(callerUserId).orElse(null);
    }

    private PengaturanCutiKhusus getOrThrow(Long id, Long callerUserId) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Pengaturan cuti khusus tidak ditemukan"));
    }

    private PengaturanCutiKhususDTO toDTO(PengaturanCutiKhusus e) {
        return PengaturanCutiKhususDTO.builder()
                .id(e.getId())
                .nama(e.getNama())
                .maksHariPerRequest(e.getMaksHariPerRequest())
                .maksRequestPerTahun(e.getMaksRequestPerTahun())
                .maksHariPerTahun(e.getMaksHariPerTahun())
                .aktif(e.isAktif())
                .build();
    }

    // ── API ────────────────────────────────────────────────────
    @Override
    public List<PengaturanCutiKhususDTO> findAll(Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);
        List<PengaturanCutiKhusus> list = (p != null)
                ? repo.findByPerusahaanIdOrderByIdAsc(p.getId())
                : repo.findByPerusahaanIsNullOrderByIdAsc();
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public PengaturanCutiKhususDTO create(PengaturanCutiKhususRequest req, Long callerUserId) {
        Perusahaan p = resolvePerusahaan(callerUserId);
        PengaturanCutiKhusus entity = PengaturanCutiKhusus.builder()
                .perusahaan(p)
                .nama(req.getNama().trim())
                .maksHariPerRequest(req.getMaksHariPerRequest())
                .maksRequestPerTahun(req.getMaksRequestPerTahun())
                .maksHariPerTahun(req.getMaksHariPerTahun())
                .aktif(req.getAktif() != null ? req.getAktif() : true)
                .build();
        return toDTO(repo.save(entity));
    }

    @Override
    @Transactional
    public PengaturanCutiKhususDTO update(Long id, PengaturanCutiKhususRequest req, Long callerUserId) {
        PengaturanCutiKhusus entity = getOrThrow(id, callerUserId);
        entity.setNama(req.getNama().trim());
        entity.setMaksHariPerRequest(req.getMaksHariPerRequest());
        entity.setMaksRequestPerTahun(req.getMaksRequestPerTahun());
        entity.setMaksHariPerTahun(req.getMaksHariPerTahun());
        if (req.getAktif() != null) entity.setAktif(req.getAktif());
        return toDTO(repo.save(entity));
    }

    @Override
    @Transactional
    public PengaturanCutiKhususDTO toggleAktif(Long id, Long callerUserId) {
        PengaturanCutiKhusus entity = getOrThrow(id, callerUserId);
        entity.setAktif(!entity.isAktif());
        return toDTO(repo.save(entity));
    }

    @Override
    @Transactional
    public void delete(Long id, Long callerUserId) {
        PengaturanCutiKhusus entity = getOrThrow(id, callerUserId);
        repo.delete(entity);
    }
}
