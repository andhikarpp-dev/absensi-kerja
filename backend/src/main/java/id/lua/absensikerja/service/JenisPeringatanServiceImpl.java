package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JenisPeringatanDTO;
import id.lua.absensikerja.model.dto.JenisPeringatanRequest;
import id.lua.absensikerja.model.entity.JenisPeringatan;
import id.lua.absensikerja.repository.JenisPeringatanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class JenisPeringatanServiceImpl implements JenisPeringatanService {

    private final JenisPeringatanRepository repo;

    private JenisPeringatanDTO toDTO(JenisPeringatan e) {
        return JenisPeringatanDTO.builder()
                .id(e.getId()).kode(e.getKode()).nama(e.getNama())
                .deskripsi(e.getDeskripsi()).aktif(e.isAktif())
                .build();
    }

    private JenisPeringatan get(Long id) {
        return repo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Jenis peringatan tidak ditemukan"));
    }

    @Override
    public List<JenisPeringatanDTO> findAll(boolean aktifSaja) {
        List<JenisPeringatan> list = aktifSaja
                ? repo.findByAktifTrueOrderByKodeAsc()
                : repo.findAllByOrderByKodeAsc();
        return list.stream().map(this::toDTO).toList();
    }

    @Override
    public JenisPeringatanDTO findById(Long id) {
        return toDTO(get(id));
    }

    @Override
    @Transactional
    public JenisPeringatanDTO create(JenisPeringatanRequest req) {
        if (repo.existsByKodeIgnoreCase(req.getKode().trim())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kode sudah digunakan");
        }
        JenisPeringatan e = JenisPeringatan.builder()
                .kode(req.getKode().trim())
                .nama(req.getNama().trim())
                .deskripsi(req.getDeskripsi())
                .aktif(req.getAktif() == null || req.getAktif())
                .build();
        return toDTO(repo.save(e));
    }

    @Override
    @Transactional
    public JenisPeringatanDTO update(Long id, JenisPeringatanRequest req) {
        JenisPeringatan e = get(id);
        if (!e.getKode().equalsIgnoreCase(req.getKode().trim())
                && repo.existsByKodeIgnoreCase(req.getKode().trim())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kode sudah digunakan");
        }
        e.setKode(req.getKode().trim());
        e.setNama(req.getNama().trim());
        e.setDeskripsi(req.getDeskripsi());
        if (req.getAktif() != null) e.setAktif(req.getAktif());
        return toDTO(repo.save(e));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repo.delete(get(id));
    }
}
