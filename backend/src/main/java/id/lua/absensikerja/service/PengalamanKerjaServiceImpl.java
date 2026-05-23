package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengalamanKerjaDTO;
import id.lua.absensikerja.model.dto.PengalamanKerjaRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanPengalamanKerja;
import id.lua.absensikerja.repository.KaryawanPengalamanKerjaRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PengalamanKerjaServiceImpl implements PengalamanKerjaService {

    private final KaryawanPengalamanKerjaRepository repo;
    private final KaryawanRepository karyawanRepository;

    @Override
    public List<PengalamanKerjaDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByTanggalMulaiDesc(karyawanId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PengalamanKerjaDTO create(Long karyawanId, PengalamanKerjaRequest request) {
        Karyawan karyawan = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new RuntimeException("Karyawan tidak ditemukan: " + karyawanId));

        KaryawanPengalamanKerja entity = KaryawanPengalamanKerja.builder()
                .karyawan(karyawan)
                .namaPerusahaan(request.getNamaPerusahaan())
                .jabatan(request.getJabatan())
                .bidangIndustri(request.getBidangIndustri())
                .tanggalMulai(request.getTanggalMulai())
                .tanggalSelesai(Boolean.TRUE.equals(request.getMasihBekerja()) ? null : request.getTanggalSelesai())
                .masihBekerja(Boolean.TRUE.equals(request.getMasihBekerja()))
                .deskripsi(request.getDeskripsi())
                .build();

        return toDTO(repo.save(entity));
    }

    @Override
    public PengalamanKerjaDTO update(Long karyawanId, Long pengalamanId, PengalamanKerjaRequest request) {
        KaryawanPengalamanKerja entity = repo.findById(pengalamanId)
                .orElseThrow(() -> new RuntimeException("Pengalaman kerja tidak ditemukan: " + pengalamanId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("Pengalaman kerja tidak milik karyawan ini");
        }

        entity.setNamaPerusahaan(request.getNamaPerusahaan());
        entity.setJabatan(request.getJabatan());
        entity.setBidangIndustri(request.getBidangIndustri());
        entity.setTanggalMulai(request.getTanggalMulai());
        entity.setMasihBekerja(Boolean.TRUE.equals(request.getMasihBekerja()));
        entity.setTanggalSelesai(Boolean.TRUE.equals(request.getMasihBekerja()) ? null : request.getTanggalSelesai());
        entity.setDeskripsi(request.getDeskripsi());

        return toDTO(repo.save(entity));
    }

    @Override
    public void delete(Long karyawanId, Long pengalamanId) {
        KaryawanPengalamanKerja entity = repo.findById(pengalamanId)
                .orElseThrow(() -> new RuntimeException("Pengalaman kerja tidak ditemukan: " + pengalamanId));

        if (!entity.getKaryawan().getId().equals(karyawanId)) {
            throw new RuntimeException("Pengalaman kerja tidak milik karyawan ini");
        }

        repo.delete(entity);
    }

    private PengalamanKerjaDTO toDTO(KaryawanPengalamanKerja e) {
        return PengalamanKerjaDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .namaPerusahaan(e.getNamaPerusahaan())
                .jabatan(e.getJabatan())
                .bidangIndustri(e.getBidangIndustri())
                .tanggalMulai(e.getTanggalMulai())
                .tanggalSelesai(e.getTanggalSelesai())
                .masihBekerja(e.getMasihBekerja())
                .deskripsi(e.getDeskripsi())
                .createdAt(e.getCreatedAt())
                .build();
    }
}
