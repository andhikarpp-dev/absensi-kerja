package id.lua.absensikerja.service;

import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.repository.KaryawanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

/**
 * Scheduler pembaruan otomatis sisa cuti karyawan.
 * Berjalan tiap hari pukul 00:05 — menambahkan jumlah cuti & menggeser
 * tanggal pembaruan berikutnya untuk semua karyawan yang sudah jatuh tempo.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class PembaruanCutiScheduler {

    private final KaryawanRepository karyawanRepository;
    private final CutiService        cutiService;

    /** Setiap hari pukul 00:05 waktu server. */
    @Scheduled(cron = "0 5 0 * * *")
    @Transactional
    public void prosesPembaruanOtomatis() {
        LocalDate today = LocalDate.now();
        List<Karyawan> due = karyawanRepository
                .findByPembaruanCutiAktifTrueAndTglPembaruanBerikutnyaLessThanEqual(today);
        if (due.isEmpty()) return;

        log.info("[PembaruanCuti] Memproses {} karyawan jatuh tempo.", due.size());
        for (Karyawan k : due) {
            try {
                applyRenewal(k, today);
            } catch (Exception ex) {
                log.warn("[PembaruanCuti] Gagal memproses karyawan id={}: {}",
                        k.getId(), ex.getMessage());
            }
        }
        karyawanRepository.saveAll(due);
    }

    /**
     * Trigger manual untuk satu karyawan tertentu — dipanggil dari endpoint
     * test/admin tanpa menunggu cron 00:05.
     * @return true bila renewal benar-benar diterapkan, false bila belum jatuh tempo.
     */
    @Transactional
    public boolean triggerManual(Long karyawanId) {
        Karyawan k = karyawanRepository.findById(karyawanId)
                .orElseThrow(() -> new IllegalArgumentException("Karyawan tidak ditemukan: " + karyawanId));
        if (!k.isPembaruanCutiAktif()) {
            log.info("[PembaruanCuti-MANUAL] Karyawan {} pembaruan tidak aktif, dilewati.", karyawanId);
            return false;
        }
        applyRenewal(k, LocalDate.now());
        karyawanRepository.save(k);
        return true;
    }

    private void applyRenewal(Karyawan k, LocalDate today) {
        int tambahan = k.getJumlahCutiPembaruan() != null ? k.getJumlahCutiPembaruan() : 12;
        int sebelumnya = k.getSisaCuti() != null ? k.getSisaCuti() : 0;
        int sisaBaru   = k.isTambahkanSisaCutiSebelumnya()
                ? sebelumnya + tambahan
                : tambahan;
        k.setSisaCuti(sisaBaru);

        // Geser tanggal pembaruan berikutnya. Loop bila tertinggal banyak periode.
        int periode = k.getPeriodePembaruanBulan() != null && k.getPeriodePembaruanBulan() > 0
                ? k.getPeriodePembaruanBulan() : 12;
        LocalDate next = k.getTglPembaruanBerikutnya();
        if (next == null) next = today;
        while (!next.isAfter(today)) next = next.plusMonths(periode);
        k.setTglPembaruanBerikutnya(next);

        log.info("[PembaruanCuti] Karyawan {} → sisa cuti {} (sebelumnya {}). Berikutnya: {}",
                k.getId(), sisaBaru, sebelumnya, next);

        // Catat ke ledger
        int delta = sisaBaru - sebelumnya;
        try {
            cutiService.logSisaCutiChange(k.getId(), "Pembaruan Otomatis Cuti", delta, sisaBaru);
        } catch (Exception ex) {
            log.warn("[PembaruanCuti] Gagal catat ledger karyawan {}: {}", k.getId(), ex.getMessage());
        }
    }
}
