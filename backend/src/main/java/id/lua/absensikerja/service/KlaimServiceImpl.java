package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.KlaimDTO;
import id.lua.absensikerja.model.dto.KlaimItemPengeluaranDTO;
import id.lua.absensikerja.model.dto.KlaimRequest;
import id.lua.absensikerja.model.dto.KlaimRiwayatDTO;
import id.lua.absensikerja.model.entity.Klaim;
import id.lua.absensikerja.model.entity.KlaimItemPengeluaran;
import id.lua.absensikerja.model.entity.KlaimRiwayat;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.enums.StatusKlaim;
import id.lua.absensikerja.repository.KlaimRepository;
import id.lua.absensikerja.repository.KlaimRiwayatRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KlaimServiceImpl implements KlaimService {

    private static final String UPLOAD_DIR = "uploads/klaim/";

    private final KlaimRepository        klaimRepository;
    private final KlaimRiwayatRepository riwayatRepository;
    private final KaryawanRepository     karyawanRepository;
    private final AuthUserUtil           authUserUtil;

    @PersistenceContext
    private EntityManager em;

    // ── helpers ────────────────────────────────────────────────────────────────

    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private Klaim getKlaim(Long id) {
        return klaimRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Klaim tidak ditemukan"));
    }

    private String currentUser() {
        try { return authUserUtil.getCurrentUser().getUsername(); }
        catch (Exception e) { return "sistem"; }
    }

    private void simpanRiwayat(Klaim klaim, String tipe, String keterangan) {
        riwayatRepository.save(KlaimRiwayat.builder()
                .klaim(klaim)
                .tipe(tipe)
                .keterangan(keterangan)
                .changedBy(currentUser())
                .changedAt(LocalDateTime.now())
                .build());
    }

    private String saveLampiran(MultipartFile file) throws IOException {
        Path dir = Paths.get(UPLOAD_DIR);
        if (!Files.exists(dir)) Files.createDirectories(dir);
        String ext      = StringUtils.getFilenameExtension(file.getOriginalFilename());
        String filename = UUID.randomUUID() + (ext != null ? "." + ext : "");
        Files.copy(file.getInputStream(), dir.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        return UPLOAD_DIR + filename;
    }

    private KlaimDTO toDTO(Klaim k) {
        List<KlaimItemPengeluaranDTO> items = k.getItemPengeluaran().stream()
                .map(i -> KlaimItemPengeluaranDTO.builder()
                        .id(i.getId())
                        .keterangan(i.getKeterangan())
                        .jumlah(i.getJumlah())
                        .build())
                .collect(Collectors.toList());

        return KlaimDTO.builder()
                .id(k.getId())
                .karyawanId(k.getKaryawan().getId())
                .namaKaryawan(k.getKaryawan().getNamaLengkap())
                .fotoProfil(k.getKaryawan().getFotoProfil())
                .namaJabatan(k.getKaryawan().getJabatan() != null ? k.getKaryawan().getJabatan().getNamaJabatan() : null)
                .namaDivisi(k.getKaryawan().getDivisi() != null ? k.getKaryawan().getDivisi().getNamaDivisi() : null)
                .zonaWaktu(k.getKaryawan().getZonaWaktu() != null ? k.getKaryawan().getZonaWaktu().name() : null)
                .jenisKlaim(k.getJenisKlaim())
                .nominal(k.getNominal())
                .keterangan(k.getKeterangan())
                .lampiranUrl(k.getLampiranUrl())
                .status(k.getStatus())
                .catatanPenolakan(k.getCatatanPenolakan())
                .itemPengeluaran(items)
                .createdAt(k.getCreatedAt())
                .updatedAt(k.getUpdatedAt())
                .build();
    }

    // ── CRUD ───────────────────────────────────────────────────────────────────

    @Override
    public List<KlaimDTO> findByKaryawan(Long karyawanId, StatusKlaim status) {
        List<Klaim> list = status != null
                ? klaimRepository.findByKaryawanIdAndStatusOrderByCreatedAtDesc(karyawanId, status)
                : klaimRepository.findByKaryawanIdOrderByCreatedAtDesc(karyawanId);
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public List<KlaimDTO> findAllAdmin(Long perusahaanId, StatusKlaim status, Long divisiId,
                                       LocalDate from, LocalDate to, String cari) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Klaim> cq = cb.createQuery(Klaim.class);
        Root<Klaim> k = cq.from(Klaim.class);

        // Eager fetch karyawan + jabatan + divisi
        Fetch<?, ?> karFetch = k.fetch("karyawan", JoinType.INNER);
        karFetch.fetch("jabatan", JoinType.LEFT);
        karFetch.fetch("divisi",  JoinType.LEFT);

        // Separate join for predicates (fetch path can't be used as Join for predicates in some JPA impls)
        Join<?, ?> kar = k.join("karyawan", JoinType.INNER);

        List<Predicate> predicates = new ArrayList<>();

        if (perusahaanId != null) {
            predicates.add(cb.equal(kar.get("perusahaan").get("id"), perusahaanId));
        }
        if (status != null) {
            predicates.add(cb.equal(k.get("status"), status));
        }
        if (divisiId != null) {
            predicates.add(cb.equal(kar.get("divisi").get("id"), divisiId));
        }
        if (from != null) {
            predicates.add(cb.greaterThanOrEqualTo(k.get("createdAt"), from.atStartOfDay()));
        }
        if (to != null) {
            predicates.add(cb.lessThanOrEqualTo(k.get("createdAt"), to.atTime(LocalTime.MAX)));
        }
        if (cari != null && !cari.isBlank()) {
            predicates.add(cb.like(cb.lower(kar.get("namaLengkap")), "%" + cari.toLowerCase() + "%"));
        }

        cq.select(k)
          .distinct(true)
          .where(predicates.toArray(new Predicate[0]))
          .orderBy(cb.desc(k.get("createdAt")));

        return em.createQuery(cq).getResultList()
                 .stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public KlaimDTO findById(Long klaimId) {
        return toDTO(getKlaim(klaimId));
    }

    @Override
    @Transactional
    public KlaimDTO create(Long karyawanId, KlaimRequest req, MultipartFile lampiran) throws IOException {
        Karyawan karyawan = getKaryawan(karyawanId);

        Klaim klaim = Klaim.builder()
                .karyawan(karyawan)
                .jenisKlaim(req.getJenisKlaim())
                .nominal(req.getNominal())
                .keterangan(req.getKeterangan())
                .build();

        if (lampiran != null && !lampiran.isEmpty()) {
            klaim.setLampiranUrl(saveLampiran(lampiran));
        }

        if (req.getItemPengeluaran() != null) {
            List<KlaimItemPengeluaran> items = new ArrayList<>();
            for (var itemReq : req.getItemPengeluaran()) {
                items.add(KlaimItemPengeluaran.builder()
                        .klaim(klaim)
                        .keterangan(itemReq.getKeterangan())
                        .jumlah(itemReq.getJumlah())
                        .build());
            }
            klaim.setItemPengeluaran(items);
        }

        Klaim saved = klaimRepository.save(klaim);
        simpanRiwayat(saved, "DIBUAT", "Klaim baru dibuat dengan jenis " + req.getJenisKlaim() + ", nominal Rp " + req.getNominal());
        return toDTO(saved);
    }

    @Override
    @Transactional
    public KlaimDTO update(Long klaimId, KlaimRequest req, MultipartFile lampiran) throws IOException {
        Klaim klaim = getKlaim(klaimId);

        klaim.setJenisKlaim(req.getJenisKlaim());
        klaim.setNominal(req.getNominal());
        klaim.setKeterangan(req.getKeterangan());

        if (lampiran != null && !lampiran.isEmpty()) {
            klaim.setLampiranUrl(saveLampiran(lampiran));
        }

        klaim.getItemPengeluaran().clear();
        if (req.getItemPengeluaran() != null) {
            for (var itemReq : req.getItemPengeluaran()) {
                klaim.getItemPengeluaran().add(KlaimItemPengeluaran.builder()
                        .klaim(klaim)
                        .keterangan(itemReq.getKeterangan())
                        .jumlah(itemReq.getJumlah())
                        .build());
            }
        }

        Klaim saved = klaimRepository.save(klaim);
        simpanRiwayat(saved, "DIUBAH", "Data klaim diperbarui — jenis: " + req.getJenisKlaim() + ", nominal: Rp " + req.getNominal());
        return toDTO(saved);
    }

    @Override
    @Transactional
    public KlaimDTO updateStatus(Long klaimId, StatusKlaim status, String catatanPenolakan) {
        Klaim klaim = getKlaim(klaimId);
        StatusKlaim statusLama = klaim.getStatus();
        klaim.setStatus(status);
        klaim.setCatatanPenolakan(catatanPenolakan);
        Klaim saved = klaimRepository.save(klaim);

        String tipe;
        String ket;
        switch (status) {
            case DISETUJUI -> { tipe = "STATUS_DISETUJUI"; ket = "Klaim disetujui"; }
            case DITOLAK   -> { tipe = "STATUS_DITOLAK";   ket = "Klaim ditolak" + (catatanPenolakan != null ? ": " + catatanPenolakan : ""); }
            default        -> { tipe = "STATUS_DIUBAH";    ket = "Status diubah dari " + statusLama + " ke " + status + (catatanPenolakan != null ? ". Catatan: " + catatanPenolakan : ""); }
        }
        simpanRiwayat(saved, tipe, ket);
        return toDTO(saved);
    }

    @Override
    @Transactional
    public void delete(Long klaimId) {
        Klaim klaim = getKlaim(klaimId);
        klaimRepository.delete(klaim);
    }

    @Override
    public List<KlaimRiwayatDTO> findRiwayat(Long klaimId) {
        return riwayatRepository.findByKlaimIdOrderByChangedAtAsc(klaimId).stream()
                .map(r -> KlaimRiwayatDTO.builder()
                        .id(r.getId())
                        .tipe(r.getTipe())
                        .keterangan(r.getKeterangan())
                        .changedBy(r.getChangedBy())
                        .changedAt(r.getChangedAt())
                        .build())
                .collect(Collectors.toList());
    }
}
