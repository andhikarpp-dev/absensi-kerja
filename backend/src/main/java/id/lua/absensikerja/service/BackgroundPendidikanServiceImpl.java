package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.BackgroundPendidikanDTO;
import id.lua.absensikerja.model.dto.BackgroundPendidikanRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanBackgroundPendidikan;
import id.lua.absensikerja.repository.KaryawanBackgroundPendidikanRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BackgroundPendidikanServiceImpl implements BackgroundPendidikanService {

    private final KaryawanBackgroundPendidikanRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<BackgroundPendidikanDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByTahunLulusDesc(karyawanId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BackgroundPendidikanDTO create(Long karyawanId, BackgroundPendidikanRequest request) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));

        KaryawanBackgroundPendidikan entity = KaryawanBackgroundPendidikan.builder()
                .karyawan(karyawan)
                .tingkatPendidikan(request.getTingkatPendidikan())
                .namaInstitusi(request.getNamaInstitusi())
                .jurusan(request.getJurusan())
                .tahunMasuk(request.getTahunMasuk())
                .tahunLulus(request.getTahunLulus())
                .nilai(request.getNilai())
                .keterangan(request.getKeterangan())
                .build();

        return toDTO(repo.save(entity));
    }

    @Override
    public BackgroundPendidikanDTO update(Long karyawanId, Long pendidikanId, BackgroundPendidikanRequest request) {
        KaryawanBackgroundPendidikan entity = repo.findById(pendidikanId)
                .orElseThrow(() -> new RuntimeException("Background pendidikan tidak ditemukan: " + pendidikanId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("Background pendidikan tidak milik karyawan ini");
        }

        entity.setTingkatPendidikan(request.getTingkatPendidikan());
        entity.setNamaInstitusi(request.getNamaInstitusi());
        entity.setJurusan(request.getJurusan());
        entity.setTahunMasuk(request.getTahunMasuk());
        entity.setTahunLulus(request.getTahunLulus());
        entity.setNilai(request.getNilai());
        entity.setKeterangan(request.getKeterangan());

        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long pendidikanId) {
        KaryawanBackgroundPendidikan entity = repo.findById(pendidikanId)
                .orElseThrow(() -> new RuntimeException("Background pendidikan tidak ditemukan: " + pendidikanId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("Background pendidikan tidak milik karyawan ini");
        }

        repo.delete(entity);
    }

    private BackgroundPendidikanDTO toDTO(KaryawanBackgroundPendidikan e) {
        return BackgroundPendidikanDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .tingkatPendidikan(e.getTingkatPendidikan())
                .namaInstitusi(e.getNamaInstitusi())
                .jurusan(e.getJurusan())
                .tahunMasuk(e.getTahunMasuk())
                .tahunLulus(e.getTahunLulus())
                .nilai(e.getNilai())
                .keterangan(e.getKeterangan())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
