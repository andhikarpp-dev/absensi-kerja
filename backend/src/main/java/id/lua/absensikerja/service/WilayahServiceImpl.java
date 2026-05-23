package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KabupatenKotaDTO;
import id.lua.absensikerja.model.dto.ProvinsiDTO;
import id.lua.absensikerja.model.entity.KabupatenKota;
import id.lua.absensikerja.model.entity.Provinsi;
import id.lua.absensikerja.repository.KabupatenKotaRepository;
import id.lua.absensikerja.repository.ProvinsiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WilayahServiceImpl implements WilayahService {

    private final ProvinsiRepository      provinsiRepository;
    private final KabupatenKotaRepository kabupatenKotaRepository;

    @Override
    public List<ProvinsiDTO> findAllProvinsi() {
        return provinsiRepository.findAllByOrderByNamaProvinsiAsc()
                .stream()
                .map(this::toProvinsiDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<KabupatenKotaDTO> findKabupatenKotaByProvinsi(Long provinsiId) {
        if (!provinsiRepository.existsById(provinsiId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Provinsi tidak ditemukan");
        }
        return kabupatenKotaRepository.findByProvinsiIdOrderByNamaKabupatenKotaAsc(provinsiId)
                .stream()
                .map(this::toKabKotDTO)
                .collect(Collectors.toList());
    }

    // ── Mapper ────────────────────────────────────────────

    private ProvinsiDTO toProvinsiDTO(Provinsi p) {
        return ProvinsiDTO.builder()
                .id(p.getId())
                .namaProvinsi(p.getNamaProvinsi())
                .build();
    }

    private KabupatenKotaDTO toKabKotDTO(KabupatenKota k) {
        return KabupatenKotaDTO.builder()
                .id(k.getId())
                .namaKabupatenKota(k.getNamaKabupatenKota())
                .provinsiId(k.getProvinsi().getId())
                .namaProvinsi(k.getProvinsi().getNamaProvinsi())
                .build();
    }
}
