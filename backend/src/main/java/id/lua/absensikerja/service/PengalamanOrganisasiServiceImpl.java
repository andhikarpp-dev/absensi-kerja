package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengalamanOrganisasiDTO;
import id.lua.absensikerja.model.dto.PengalamanOrganisasiRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanPengalamanOrganisasi;
import id.lua.absensikerja.repository.KaryawanPengalamanOrganisasiRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PengalamanOrganisasiServiceImpl implements PengalamanOrganisasiService {

    private final KaryawanPengalamanOrganisasiRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<PengalamanOrganisasiDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByTanggalMulaiDesc(karyawanId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public PengalamanOrganisasiDTO create(Long karyawanId, PengalamanOrganisasiRequest request) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));
        KaryawanPengalamanOrganisasi entity = KaryawanPengalamanOrganisasi.builder()
                .karyawan(karyawan)
                .namaOrganisasi(request.getNamaOrganisasi())
                .jabatan(request.getJabatan())
                .tanggalMulai(request.getTanggalMulai())
                .tanggalSelesai(request.getMasihAktif() != null && request.getMasihAktif() ? null : request.getTanggalSelesai())
                .masihAktif(request.getMasihAktif())
                .deskripsi(request.getDeskripsi())
                .build();
        return toDTO(repo.save(entity));
    }

    @Override
    public PengalamanOrganisasiDTO update(Long karyawanId, Long organisasiId, PengalamanOrganisasiRequest request) {
        KaryawanPengalamanOrganisasi entity = repo.findById(organisasiId)
                .orElseThrow(() -> new RuntimeException("Pengalaman organisasi tidak ditemukan: " + organisasiId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Data tidak milik karyawan ini");
        entity.setNamaOrganisasi(request.getNamaOrganisasi());
        entity.setJabatan(request.getJabatan());
        entity.setTanggalMulai(request.getTanggalMulai());
        entity.setTanggalSelesai(request.getMasihAktif() != null && request.getMasihAktif() ? null : request.getTanggalSelesai());
        entity.setMasihAktif(request.getMasihAktif());
        entity.setDeskripsi(request.getDeskripsi());
        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long organisasiId) {
        KaryawanPengalamanOrganisasi entity = repo.findById(organisasiId)
                .orElseThrow(() -> new RuntimeException("Pengalaman organisasi tidak ditemukan: " + organisasiId));
        if (!entity.getKaryawan().getId().equals(karyawanId))
            throw new RuntimeException("Data tidak milik karyawan ini");
        repo.delete(entity);
    }

    private PengalamanOrganisasiDTO toDTO(KaryawanPengalamanOrganisasi e) {
        return PengalamanOrganisasiDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .namaOrganisasi(e.getNamaOrganisasi())
                .jabatan(e.getJabatan())
                .tanggalMulai(e.getTanggalMulai())
                .tanggalSelesai(e.getTanggalSelesai())
                .masihAktif(e.getMasihAktif())
                .deskripsi(e.getDeskripsi())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
