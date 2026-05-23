package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KlienDTO;
import id.lua.absensikerja.model.dto.KlienRequest;
import id.lua.absensikerja.model.entity.Klien;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.repository.KlienRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KlienServiceImpl implements KlienService {

    private final KlienRepository      klienRepository;
    private final PerusahaanRepository perusahaanRepository;

    private Perusahaan getPerusahaan(Long id) {
        return perusahaanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Perusahaan tidak ditemukan"));
    }

    private Klien getKlien(Long id) {
        return klienRepository.findById(id)
                .filter(k -> !k.isDeleted())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Klien tidak ditemukan"));
    }

    private KlienDTO toDto(Klien k) {
        return KlienDTO.builder()
                .id(k.getId())
                .perusahaanId(k.getPerusahaan().getId())
                .namaKlien(k.getNamaKlien())
                .alamat(k.getAlamat())
                .telepon(k.getTelepon())
                .email(k.getEmail())
                .keterangan(k.getKeterangan())
                .createdAt(k.getCreatedAt())
                .updatedAt(k.getUpdatedAt())
                .build();
    }

    @Override
    public List<KlienDTO> findAll(Long perusahaanId) {
        return klienRepository
                .findByPerusahaanIdAndIsDeletedFalseOrderByNamaKlienAsc(perusahaanId)
                .stream().map(this::toDto).toList();
    }

    @Override
    public KlienDTO findById(Long id) {
        return toDto(getKlien(id));
    }

    @Override
    @Transactional
    public KlienDTO create(Long perusahaanId, KlienRequest req) {
        Klien klien = Klien.builder()
                .perusahaan(getPerusahaan(perusahaanId))
                .namaKlien(req.getNamaKlien())
                .alamat(req.getAlamat())
                .telepon(req.getTelepon())
                .email(req.getEmail())
                .keterangan(req.getKeterangan())
                .build();
        return toDto(klienRepository.save(klien));
    }

    @Override
    @Transactional
    public KlienDTO update(Long id, KlienRequest req) {
        Klien klien = getKlien(id);
        klien.setNamaKlien(req.getNamaKlien());
        klien.setAlamat(req.getAlamat());
        klien.setTelepon(req.getTelepon());
        klien.setEmail(req.getEmail());
        klien.setKeterangan(req.getKeterangan());
        return toDto(klienRepository.save(klien));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Klien klien = getKlien(id);
        klien.setDeleted(true);
        klienRepository.save(klien);
    }
}
