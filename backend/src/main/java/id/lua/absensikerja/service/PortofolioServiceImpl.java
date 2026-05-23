package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PortofolioDTO;
import id.lua.absensikerja.model.dto.PortofolioRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanPortofolio;
import id.lua.absensikerja.repository.KaryawanPortofolioRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PortofolioServiceImpl implements PortofolioService {

    private final KaryawanPortofolioRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<PortofolioDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByCreatedAtDesc(karyawanId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PortofolioDTO create(Long karyawanId, PortofolioRequest request) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));

        KaryawanPortofolio entity = KaryawanPortofolio.builder()
                .karyawan(karyawan)
                .judul(request.getJudul())
                .urlLink(request.getUrlLink())
                .deskripsi(request.getDeskripsi())
                .build();

        return toDTO(repo.save(entity));
    }

    @Override
    public PortofolioDTO update(Long karyawanId, Long portofolioId, PortofolioRequest request) {
        KaryawanPortofolio entity = repo.findById(portofolioId)
                .orElseThrow(() -> new RuntimeException("Portofolio tidak ditemukan: " + portofolioId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("Portofolio tidak milik karyawan ini");
        }

        entity.setJudul(request.getJudul());
        entity.setUrlLink(request.getUrlLink());
        entity.setDeskripsi(request.getDeskripsi());

        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long portofolioId) {
        KaryawanPortofolio entity = repo.findById(portofolioId)
                .orElseThrow(() -> new RuntimeException("Portofolio tidak ditemukan: " + portofolioId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("Portofolio tidak milik karyawan ini");
        }

        repo.delete(entity);
    }

    private PortofolioDTO toDTO(KaryawanPortofolio e) {
        return PortofolioDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .judul(e.getJudul())
                .urlLink(e.getUrlLink())
                .deskripsi(e.getDeskripsi())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
