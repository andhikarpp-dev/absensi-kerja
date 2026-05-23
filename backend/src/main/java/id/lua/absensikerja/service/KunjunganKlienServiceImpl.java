package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KunjunganKlienDTO;
import id.lua.absensikerja.model.dto.KunjunganKlienRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.Klien;
import id.lua.absensikerja.model.entity.KunjunganKlien;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.KlienRepository;
import id.lua.absensikerja.repository.KunjunganKlienRepository;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KunjunganKlienServiceImpl implements KunjunganKlienService {

    private final KunjunganKlienRepository kunjunganRepository;
    private final KaryawanRepository       karyawanRepository;
    private final KlienRepository          klienRepository;

    private KunjunganKlien getKunjungan(Long id) {
        return kunjunganRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Kunjungan tidak ditemukan"));
    }

    private KunjunganKlienDTO toDto(KunjunganKlien k) {
        Karyawan kar = k.getKaryawan();
        Klien    kl  = k.getKlien();
        String divisi = kar.getDivisi() != null ? kar.getDivisi().getNamaDivisi() : null;
        String zona   = kar.getZonaWaktu() != null ? kar.getZonaWaktu().name() : null;
        return KunjunganKlienDTO.builder()
                .id(k.getId())
                .karyawanId(kar.getId())
                .namaKaryawan(kar.getNamaLengkap())
                .fotoProfil(kar.getFotoProfil())
                .namaDivisi(divisi)
                .zonaWaktu(zona)
                .klienId(kl.getId())
                .namaKlien(kl.getNamaKlien())
                .waktuMulai(k.getWaktuMulai())
                .waktuSelesai(k.getWaktuSelesai())
                .lokasiMulaiLat(k.getLokasiMulaiLat())
                .lokasiMulaiLng(k.getLokasiMulaiLng())
                .lokasiSelesaiLat(k.getLokasiSelesaiLat())
                .lokasiSelesaiLng(k.getLokasiSelesaiLng())
                .fotoMulai(k.getFotoMulai())
                .fotoSelesai(k.getFotoSelesai())
                .catatan(k.getCatatan())
                .totalJarak(k.getTotalJarak())
                .penjualanProduk(k.getPenjualanProduk())
                .createdAt(k.getCreatedAt())
                .updatedAt(k.getUpdatedAt())
                .build();
    }

    @Override
    public List<KunjunganKlienDTO> findAll(Long perusahaanId, Long divisiId, Long klienId, LocalDate from, LocalDate to, String cari) {
        LocalDateTime fromDt = from != null ? from.atStartOfDay() : null;
        LocalDateTime toDt   = to   != null ? to.atTime(LocalTime.MAX) : null;

        Specification<KunjunganKlien> spec = (root, query, cb) -> {
            root.fetch("karyawan", JoinType.INNER);
            root.fetch("klien", JoinType.INNER);
            query.distinct(true);

            Join<Object, Object> kar = root.join("karyawan", JoinType.INNER);
            Join<Object, Object> kl  = root.join("klien", JoinType.INNER);

            List<Predicate> predicates = new ArrayList<>();
            predicates.add(cb.equal(kar.get("perusahaan").get("id"), perusahaanId));
            if (divisiId != null) predicates.add(cb.equal(kar.get("divisi").get("id"), divisiId));
            if (klienId  != null) predicates.add(cb.equal(kl.get("id"), klienId));
            if (fromDt   != null) predicates.add(cb.greaterThanOrEqualTo(root.get("waktuMulai"), fromDt));
            if (toDt     != null) predicates.add(cb.lessThanOrEqualTo(root.get("waktuMulai"), toDt));
            return cb.and(predicates.toArray(new Predicate[0]));
        };

        List<KunjunganKlien> list = kunjunganRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "waktuMulai"));
        if (cari != null && !cari.isBlank()) {
            String c = cari.trim().toLowerCase();
            list = list.stream()
                    .filter(k -> k.getKaryawan().getNamaLengkap().toLowerCase().contains(c))
                    .toList();
        }
        return list.stream().map(this::toDto).toList();
    }

    @Override
    public KunjunganKlienDTO findById(Long id) {
        return toDto(getKunjungan(id));
    }

    @Override
    @Transactional
    public KunjunganKlienDTO create(Long perusahaanId, KunjunganKlienRequest req) {
        Karyawan karyawan = karyawanRepository.findById(req.getKaryawanId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
        Klien klien = klienRepository.findById(req.getKlienId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Klien tidak ditemukan"));

        KunjunganKlien kunjungan = KunjunganKlien.builder()
                .karyawan(karyawan)
                .klien(klien)
                .waktuMulai(req.getWaktuMulai())
                .waktuSelesai(req.getWaktuSelesai())
                .lokasiMulaiLat(req.getLokasiMulaiLat())
                .lokasiMulaiLng(req.getLokasiMulaiLng())
                .lokasiSelesaiLat(req.getLokasiSelesaiLat())
                .lokasiSelesaiLng(req.getLokasiSelesaiLng())
                .catatan(req.getCatatan())
                .totalJarak(req.getTotalJarak() != null ? req.getTotalJarak() : 0)
                .penjualanProduk(req.getPenjualanProduk())
                .build();
        return toDto(kunjunganRepository.save(kunjungan));
    }

    @Override
    @Transactional
    public KunjunganKlienDTO update(Long id, KunjunganKlienRequest req) {
        KunjunganKlien kunjungan = getKunjungan(id);
        if (req.getKlienId() != null) {
            Klien klien = klienRepository.findById(req.getKlienId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Klien tidak ditemukan"));
            kunjungan.setKlien(klien);
        }
        if (req.getKaryawanId() != null) {
            Karyawan kar = karyawanRepository.findById(req.getKaryawanId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
            kunjungan.setKaryawan(kar);
        }
        kunjungan.setWaktuMulai(req.getWaktuMulai());
        kunjungan.setWaktuSelesai(req.getWaktuSelesai());
        kunjungan.setLokasiMulaiLat(req.getLokasiMulaiLat());
        kunjungan.setLokasiMulaiLng(req.getLokasiMulaiLng());
        kunjungan.setLokasiSelesaiLat(req.getLokasiSelesaiLat());
        kunjungan.setLokasiSelesaiLng(req.getLokasiSelesaiLng());
        kunjungan.setCatatan(req.getCatatan());
        if (req.getTotalJarak() != null) kunjungan.setTotalJarak(req.getTotalJarak());
        kunjungan.setPenjualanProduk(req.getPenjualanProduk());
        return toDto(kunjunganRepository.save(kunjungan));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        kunjunganRepository.delete(getKunjungan(id));
    }
}
