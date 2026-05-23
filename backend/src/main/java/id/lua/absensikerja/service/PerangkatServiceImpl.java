package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PerangkatDTO;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.KaryawanPerangkat;
import id.lua.absensikerja.repository.KaryawanPerangkatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PerangkatServiceImpl implements PerangkatService {

    private final KaryawanPerangkatRepository repo;

    @Override
    public List<PerangkatDTO> findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanIdOrderByTerakhirAktifDesc(karyawanId)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public PerangkatDTO registerOrUpdate(Karyawan karyawan,
                                         String deviceId,
                                         String namaPerangkat,
                                         String modelPerangkat,
                                         String manufaktur,
                                         String platform) {
        if (deviceId == null || deviceId.isBlank()) return null;

        KaryawanPerangkat perangkat = repo
                .findByKaryawanIdAndDeviceId(karyawan.getId(), deviceId)
                .orElse(KaryawanPerangkat.builder()
                        .karyawan(karyawan)
                        .deviceId(deviceId)
                        .build());

        // Selalu update info & waktu aktif
        if (namaPerangkat  != null) perangkat.setNamaPerangkat(namaPerangkat);
        if (modelPerangkat != null) perangkat.setModelPerangkat(modelPerangkat);
        if (manufaktur     != null) perangkat.setManufaktur(manufaktur);
        if (platform       != null) perangkat.setPlatform(platform);
        perangkat.setTerakhirAktif(LocalDateTime.now());

        return toDTO(repo.save(perangkat));
    }

    @Override
    @Transactional
    public void delete(Long karyawanId, Long perangkatId) {
        KaryawanPerangkat p = repo.findById(perangkatId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Perangkat tidak ditemukan"));
        if (!p.getKaryawan().getId().equals(karyawanId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN,
                    "Perangkat ini bukan milik karyawan tersebut");
        }
        repo.delete(p);
    }

    private PerangkatDTO toDTO(KaryawanPerangkat p) {
        return PerangkatDTO.builder()
                .id(p.getId())
                .karyawanId(p.getKaryawan().getId())
                .deviceId(p.getDeviceId())
                .namaPerangkat(p.getNamaPerangkat())
                .modelPerangkat(p.getModelPerangkat())
                .manufaktur(p.getManufaktur())
                .platform(p.getPlatform())
                .terakhirAktif(p.getTerakhirAktif())
                .createdAt(p.getCreatedAt())
                .build();
    }
}
