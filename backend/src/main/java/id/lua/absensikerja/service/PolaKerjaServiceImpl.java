package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PolaKerjaDTO;
import id.lua.absensikerja.model.dto.PolaKerjaHariDTO;
import id.lua.absensikerja.model.dto.PolaKerjaRequest;
import id.lua.absensikerja.model.entity.Divisi;
import id.lua.absensikerja.model.entity.PolaKerja;
import id.lua.absensikerja.model.entity.PolaKerjaHari;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.enums.KategoriPolaKerja;
import id.lua.absensikerja.repository.DivisiRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.repository.PolaKerjaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PolaKerjaServiceImpl implements PolaKerjaService {

    private final PolaKerjaRepository polaKerjaRepository;
    private final DivisiRepository    divisiRepository;
    private final PerusahaanRepository perusahaanRepository;

    @Override
    public List<PolaKerjaDTO> findAll(Long ownerId) {
        if (ownerId != null) {
            return perusahaanRepository.findByOwnerId(ownerId)
                    .map(p -> polaKerjaRepository.findByPerusahaanId(p.getId()))
                    .orElse(java.util.Collections.emptyList())
                    .stream().map(this::toDTO).collect(Collectors.toList());
        }
        return polaKerjaRepository.findAll()
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public List<PolaKerjaDTO> findAll(Long ownerId, KategoriPolaKerja kategori) {
        List<PolaKerjaDTO> all = findAll(ownerId);
        if (kategori == null) return all;
        return all.stream()
                .filter(d -> {
                    KategoriPolaKerja k = d.getKategori();
                    // Treat null (data lama) as HARI_KERJA
                    if (k == null) k = KategoriPolaKerja.HARI_KERJA;
                    return k == kategori;
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<PolaKerjaDTO> findByDivisi(Long divisiId, Long ownerId) {
        if (ownerId != null) {
            return perusahaanRepository.findByOwnerId(ownerId)
                    .map(p -> polaKerjaRepository.findByDivisiIdAndPerusahaanId(divisiId, p.getId()))
                    .orElse(java.util.Collections.emptyList())
                    .stream().map(this::toDTO).collect(Collectors.toList());
        }
        return polaKerjaRepository.findByDivisiId(divisiId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public PolaKerjaDTO findById(Long id) {
        return toDTO(getOrThrow(id));
    }

    @Override
    @Transactional
    public PolaKerjaDTO create(PolaKerjaRequest req, Long ownerId) {
        PolaKerja pk = new PolaKerja();
        if (ownerId != null) {
            Perusahaan perusahaan = perusahaanRepository.findByOwnerId(ownerId).orElse(null);
            pk.setPerusahaan(perusahaan);
        }
        return toDTO(polaKerjaRepository.save(toEntity(req, pk)));
    }

    @Override
    @Transactional
    public PolaKerjaDTO update(Long id, PolaKerjaRequest req) {
        PolaKerja pk = getOrThrow(id);
        return toDTO(polaKerjaRepository.save(toEntity(req, pk)));
    }

    @Override
    @Transactional
    public PolaKerjaDTO assignDivisi(Long id, Set<Long> divisiIds) {
        PolaKerja pk = getOrThrow(id);
        Set<Divisi> divisiSet = new HashSet<>();
        if (divisiIds != null) {
            divisiIds.forEach(divisiId ->
                divisiRepository.findById(divisiId).ifPresent(divisiSet::add)
            );
        }
        pk.setDivisiSet(divisiSet);
        return toDTO(polaKerjaRepository.save(pk));
    }

    @Override
    @Transactional
    public PolaKerjaDTO unassignDivisi(Long id, Long divisiId) {
        PolaKerja pk = getOrThrow(id);
        pk.getDivisiSet().removeIf(d -> d.getId().equals(divisiId));
        return toDTO(polaKerjaRepository.save(pk));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        PolaKerja pk = getOrThrow(id);
        pk.setDeleted(true);
        pk.setDeletedAt(LocalDateTime.now());
        polaKerjaRepository.save(pk);
    }

    // ── helpers ─────────────────────────────────────────────

    private PolaKerja getOrThrow(Long id) {
        return polaKerjaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Pola kerja dengan id " + id + " tidak ditemukan"));
    }

    private PolaKerja toEntity(PolaKerjaRequest req, PolaKerja pk) {
        // Assign divisi-divisi yang memakai pola ini
        Set<Divisi> divisiSet = new HashSet<>();
        if (req.getDivisiIds() != null) {
            req.getDivisiIds().forEach(divisiId ->
                divisiRepository.findById(divisiId).ifPresent(divisiSet::add)
            );
        }
        pk.setDivisiSet(divisiSet);
        pk.setNamaPolaKerja(req.getNamaPolaKerja());
        pk.setToleransiKeterlambatan(req.getToleransiKeterlambatan() != null ? req.getToleransiKeterlambatan() : 0);
        pk.setJenisJadwal(req.getJenisJadwal());
        pk.setKategori(req.getKategori() != null ? req.getKategori() : KategoriPolaKerja.HARI_KERJA);
        pk.setWarna(req.getWarna());
        pk.setCatatan(req.getCatatan());

        pk.getHariList().clear();
        if (req.getHariList() != null) {
            req.getHariList().forEach(item -> {
                PolaKerjaHari h = new PolaKerjaHari();
                h.setPolaKerja(pk);
                h.setHari(item.getHari());
                h.setPolaHari(item.getPolaHari());
                h.setJamMasuk(item.getJamMasuk());
                h.setJamKeluar(item.getJamKeluar());
                h.setMulaiIstirahat(item.getMulaiIstirahat());
                h.setSelesaiIstirahat(item.getSelesaiIstirahat());
                h.setMaksMenitIstirahat(item.getMaksMenitIstirahat() != null ? item.getMaksMenitIstirahat() : 60);
                h.setTotalJamKerjaDibutuhkan(item.getTotalJamKerjaDibutuhkan());
                pk.getHariList().add(h);
            });
        }
        return pk;
    }

    private PolaKerjaDTO toDTO(PolaKerja pk) {
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
                        .build())
                        .collect(Collectors.toList());

        Set<Long> divisiIds = pk.getDivisiSet() == null ? new HashSet<>() :
                pk.getDivisiSet().stream().map(Divisi::getId).collect(Collectors.toSet());

        return PolaKerjaDTO.builder()
                .id(pk.getId())
                .divisiIds(divisiIds)
                .namaPolaKerja(pk.getNamaPolaKerja())
                .toleransiKeterlambatan(pk.getToleransiKeterlambatan())
                .jenisJadwal(pk.getJenisJadwal())
                .kategori(pk.getKategori() != null ? pk.getKategori() : KategoriPolaKerja.HARI_KERJA)
                .warna(pk.getWarna())
                .catatan(pk.getCatatan())
                .hariList(hariDTOs)
                .build();
    }
}
