package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PayrollPph21DTO;
import id.lua.absensikerja.model.dto.PayrollPph21Request;
import id.lua.absensikerja.model.dto.PayrollPph21RiwayatDTO;
import id.lua.absensikerja.model.dto.PayrollPph21RiwayatRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PayrollPph21;
import id.lua.absensikerja.model.entity.PayrollPph21Riwayat;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PayrollPph21Repository;
import id.lua.absensikerja.repository.PayrollPph21RiwayatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PayrollPph21ServiceImpl implements PayrollPph21Service {

    private final PayrollPph21Repository        repo;
    private final PayrollPph21RiwayatRepository riwayatRepo;
    private final KaryawanRepository            karyawanRepository;

    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private PayrollPph21DTO toDTO(PayrollPph21 e) {
        return PayrollPph21DTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .statusPkp(e.getStatusPkp())
                .npwp(e.getNpwp())
                .statusPtkp(e.getStatusPtkp())
                .jumlahTanggungan(e.getJumlahTanggungan())
                .metodePph(e.getMetodePph())
                .updatedAt(e.getUpdatedAt())
                .build();
    }

    private PayrollPph21RiwayatDTO toRiwayatDTO(PayrollPph21Riwayat e) {
        return PayrollPph21RiwayatDTO.builder()
                .id(e.getId())
                .karyawanId(e.getKaryawan().getId())
                .periode(e.getPeriode())
                .pendapatanBruto(e.getPendapatanBruto())
                .pph21Terutang(e.getPph21Terutang())
                .dibayarkan(e.getDibayarkan())
                .tanggalBayar(e.getTanggalBayar())
                .statusPembayaran(e.getStatusPembayaran())
                .catatan(e.getCatatan())
                .createdAt(e.getCreatedAt())
                .updatedAt(e.getUpdatedAt())
                .build();
    }

    // ── Pengaturan ───────────────────────────────────────────────────

    @Override
    public PayrollPph21DTO findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanId(karyawanId).map(this::toDTO).orElse(null);
    }

    @Override
    @Transactional
    public PayrollPph21DTO save(Long karyawanId, PayrollPph21Request req) {
        Karyawan karyawan = getKaryawan(karyawanId);
        PayrollPph21 e = repo.findByKaryawanId(karyawanId)
                .orElseGet(() -> PayrollPph21.builder().karyawan(karyawan).build());
        if (req.getStatusPkp()        != null) e.setStatusPkp(req.getStatusPkp());
        if (req.getNpwp()             != null) e.setNpwp(req.getNpwp());
        if (req.getStatusPtkp()       != null) e.setStatusPtkp(req.getStatusPtkp());
        if (req.getJumlahTanggungan() != null) e.setJumlahTanggungan(req.getJumlahTanggungan());
        if (req.getMetodePph()        != null) e.setMetodePph(req.getMetodePph());
        return toDTO(repo.save(e));
    }

    // ── Riwayat ──────────────────────────────────────────────────────

    @Override
    public List<PayrollPph21RiwayatDTO> listRiwayat(Long karyawanId) {
        return riwayatRepo.findByKaryawanIdOrderByPeriodeDesc(karyawanId)
                .stream().map(this::toRiwayatDTO).toList();
    }

    /** Normalisasi periode: paksa hari menjadi tanggal-1 agar 1 baris per bulan. */
    private LocalDate normalisasiPeriode(LocalDate p) {
        if (p == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Periode wajib diisi");
        }
        return p.withDayOfMonth(1);
    }

    private BigDecimal nz(BigDecimal v) { return v == null ? BigDecimal.ZERO : v; }

    @Override
    @Transactional
    public PayrollPph21RiwayatDTO saveRiwayat(Long karyawanId, PayrollPph21RiwayatRequest req) {
        Karyawan karyawan = getKaryawan(karyawanId);
        LocalDate periode = normalisasiPeriode(req.getPeriode());

        // Upsert berdasarkan (karyawan, periode) agar 1 baris per bulan.
        PayrollPph21Riwayat e = riwayatRepo.findByKaryawanIdAndPeriode(karyawanId, periode)
                .orElseGet(() -> PayrollPph21Riwayat.builder()
                        .karyawan(karyawan)
                        .periode(periode)
                        .build());
        applyRiwayat(e, req, periode);
        return toRiwayatDTO(riwayatRepo.save(e));
    }

    @Override
    @Transactional
    public PayrollPph21RiwayatDTO updateRiwayat(Long karyawanId, Long riwayatId,
                                                PayrollPph21RiwayatRequest req) {
        PayrollPph21Riwayat e = riwayatRepo.findById(riwayatId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Riwayat PPH 21 tidak ditemukan"));
        if (!e.getKaryawan().getId().equals(karyawanId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Riwayat bukan milik karyawan ini");
        }
        LocalDate periode = req.getPeriode() != null
                ? normalisasiPeriode(req.getPeriode())
                : e.getPeriode();
        applyRiwayat(e, req, periode);
        return toRiwayatDTO(riwayatRepo.save(e));
    }

    private void applyRiwayat(PayrollPph21Riwayat e, PayrollPph21RiwayatRequest req, LocalDate periode) {
        e.setPeriode(periode);
        e.setPendapatanBruto(nz(req.getPendapatanBruto()));
        e.setPph21Terutang(nz(req.getPph21Terutang()));
        e.setDibayarkan(nz(req.getDibayarkan()));
        e.setTanggalBayar(req.getTanggalBayar());
        if (req.getStatusPembayaran() != null && !req.getStatusPembayaran().isBlank()) {
            e.setStatusPembayaran(req.getStatusPembayaran());
        } else {
            // Auto: jika dibayarkan >= terutang & > 0 → LUNAS, dibayarkan>0 → SEBAGIAN, else BELUM_DIBAYAR
            BigDecimal d = nz(req.getDibayarkan());
            BigDecimal t = nz(req.getPph21Terutang());
            if (d.compareTo(BigDecimal.ZERO) <= 0)            e.setStatusPembayaran("BELUM_DIBAYAR");
            else if (d.compareTo(t) >= 0 && t.signum() > 0)    e.setStatusPembayaran("LUNAS");
            else                                               e.setStatusPembayaran("SEBAGIAN");
        }
        e.setCatatan(req.getCatatan());
    }

    @Override
    @Transactional
    public void deleteRiwayat(Long karyawanId, Long riwayatId) {
        PayrollPph21Riwayat e = riwayatRepo.findById(riwayatId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Riwayat PPH 21 tidak ditemukan"));
        if (!e.getKaryawan().getId().equals(karyawanId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Riwayat bukan milik karyawan ini");
        }
        riwayatRepo.delete(e);
    }
}
