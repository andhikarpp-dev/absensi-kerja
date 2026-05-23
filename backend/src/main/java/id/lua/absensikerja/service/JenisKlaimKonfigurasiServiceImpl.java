package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JenisKlaimKonfigurasiDTO;
import id.lua.absensikerja.model.dto.JenisKlaimKonfigurasiRequest;
import id.lua.absensikerja.model.entity.JenisKlaimKonfigurasi;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.repository.JenisKlaimKonfigurasiRepository;
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
public class JenisKlaimKonfigurasiServiceImpl implements JenisKlaimKonfigurasiService {

    private final JenisKlaimKonfigurasiRepository repo;
    private final PerusahaanRepository            perusahaanRepository;

    private JenisKlaimKonfigurasiDTO toDTO(JenisKlaimKonfigurasi e) {
        return JenisKlaimKonfigurasiDTO.builder()
                .id(e.getId())
                .perusahaanId(e.getPerusahaan() != null ? e.getPerusahaan().getId() : null)
                .nama(e.getNama())
                .deskripsi(e.getDeskripsi())
                .tglMulaiBerlaku(e.getTglMulaiBerlaku())
                .kadaluwarsa(e.getKadaluwarsa())
                .kuota(e.getKuota())
                .tampilkanKuotaKeKaryawan(e.isTampilkanKuotaKeKaryawan())
                .terapkanKeKaryawanBaru(e.isTerapkanKeKaryawanBaru())
                .minJumlahPengajuan(e.getMinJumlahPengajuan())
                .maxJumlahPengajuan(e.getMaxJumlahPengajuan())
                .minKlaimSelanjutnya(e.getMinKlaimSelanjutnya())
                .createdAt(e.getCreatedAt())
                .updatedAt(e.getUpdatedAt())
                .build();
    }

    private JenisKlaimKonfigurasi get(Long id) {
        return repo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Jenis klaim tidak ditemukan"));
    }

    @Override
    public List<JenisKlaimKonfigurasiDTO> findAll(Long perusahaanId) {
        if (perusahaanId != null) {
            return repo.findByPerusahaanIdOrderByNamaAsc(perusahaanId)
                    .stream().map(this::toDTO).toList();
        }
        return repo.findAll().stream().map(this::toDTO).toList();
    }

    @Override
    public JenisKlaimKonfigurasiDTO findById(Long id) {
        return toDTO(get(id));
    }

    @Override
    @Transactional
    public JenisKlaimKonfigurasiDTO create(JenisKlaimKonfigurasiRequest req, Long perusahaanId) {
        JenisKlaimKonfigurasi e = new JenisKlaimKonfigurasi();
        applyRequest(req, e);
        if (perusahaanId != null) {
            Perusahaan p = perusahaanRepository.findById(perusahaanId).orElse(null);
            e.setPerusahaan(p);
        }
        return toDTO(repo.save(e));
    }

    @Override
    @Transactional
    public JenisKlaimKonfigurasiDTO update(Long id, JenisKlaimKonfigurasiRequest req) {
        JenisKlaimKonfigurasi e = get(id);
        applyRequest(req, e);
        return toDTO(repo.save(e));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repo.delete(get(id));
    }

    private void applyRequest(JenisKlaimKonfigurasiRequest req, JenisKlaimKonfigurasi e) {
        e.setNama(req.getNama().trim());
        e.setDeskripsi(req.getDeskripsi());
        e.setTglMulaiBerlaku(req.getTglMulaiBerlaku());
        e.setKadaluwarsa(req.getKadaluwarsa());
        e.setKuota(req.getKuota());
        e.setTampilkanKuotaKeKaryawan(req.isTampilkanKuotaKeKaryawan());
        e.setTerapkanKeKaryawanBaru(req.isTerapkanKeKaryawanBaru());
        e.setMinJumlahPengajuan(req.getMinJumlahPengajuan());
        e.setMaxJumlahPengajuan(req.getMaxJumlahPengajuan());
        e.setMinKlaimSelanjutnya(req.getMinKlaimSelanjutnya());
    }
}
