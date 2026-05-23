package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KontakDaruratDTO;
import id.lua.absensikerja.model.dto.KontakDaruratRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanKontakDarurat;
import id.lua.absensikerja.repository.KaryawanKontakDaruratRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class KontakDaruratServiceImpl implements KontakDaruratService {

    private final KaryawanKontakDaruratRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<KontakDaruratDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByCreatedAtAsc(karyawanId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public KontakDaruratDTO create(Long karyawanId, KontakDaruratRequest request) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));
        KaryawanKontakDarurat entity = KaryawanKontakDarurat.builder()
                .karyawan(karyawan)
                .nama(request.getNama())
                .noTelepon(request.getNoTelepon())
                .build();
        return toDTO(repo.save(entity));
    }

    @Override
    public KontakDaruratDTO update(Long karyawanId, Long kontakId, KontakDaruratRequest request) {
        KaryawanKontakDarurat entity = repo.findById(kontakId)
                .orElseThrow(() -> new RuntimeException("Kontak darurat tidak ditemukan: " + kontakId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Kontak darurat tidak milik karyawan ini");
        entity.setNama(request.getNama());
        entity.setNoTelepon(request.getNoTelepon());
        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long kontakId) {
        KaryawanKontakDarurat entity = repo.findById(kontakId)
                .orElseThrow(() -> new RuntimeException("Kontak darurat tidak ditemukan: " + kontakId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Kontak darurat tidak milik karyawan ini");
        repo.delete(entity);
    }

    private KontakDaruratDTO toDTO(KaryawanKontakDarurat e) {
        return KontakDaruratDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .nama(e.getNama())
                .noTelepon(e.getNoTelepon())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
