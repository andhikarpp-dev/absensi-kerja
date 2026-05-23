package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PenghargaanDTO;
import id.lua.absensikerja.model.dto.PenghargaanRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanPenghargaan;
import id.lua.absensikerja.repository.KaryawanPenghargaanRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PenghargaanServiceImpl implements PenghargaanService {

    private final KaryawanPenghargaanRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<PenghargaanDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByTahunDesc(karyawanId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public PenghargaanDTO create(Long karyawanId, PenghargaanRequest request) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));
        KaryawanPenghargaan entity = KaryawanPenghargaan.builder()
                .karyawan(karyawan)
                .namaPenghargaan(request.getNamaPenghargaan())
                .penerbit(request.getPenerbit())
                .tahun(request.getTahun())
                .deskripsi(request.getDeskripsi())
                .build();
        return toDTO(repo.save(entity));
    }

    @Override
    public PenghargaanDTO update(Long karyawanId, Long penghargaanId, PenghargaanRequest request) {
        KaryawanPenghargaan entity = repo.findById(penghargaanId)
                .orElseThrow(() -> new RuntimeException("Penghargaan tidak ditemukan: " + penghargaanId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Penghargaan tidak milik karyawan ini");
        entity.setNamaPenghargaan(request.getNamaPenghargaan());
        entity.setPenerbit(request.getPenerbit());
        entity.setTahun(request.getTahun());
        entity.setDeskripsi(request.getDeskripsi());
        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long penghargaanId) {
        KaryawanPenghargaan entity = repo.findById(penghargaanId)
                .orElseThrow(() -> new RuntimeException("Penghargaan tidak ditemukan: " + penghargaanId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Penghargaan tidak milik karyawan ini");
        repo.delete(entity);
    }

    private PenghargaanDTO toDTO(KaryawanPenghargaan e) {
        return PenghargaanDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .namaPenghargaan(e.getNamaPenghargaan())
                .penerbit(e.getPenerbit())
                .tahun(e.getTahun())
                .deskripsi(e.getDeskripsi())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
