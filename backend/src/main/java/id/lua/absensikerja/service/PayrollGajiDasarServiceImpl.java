package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PayrollGajiDasarDTO;
import id.lua.absensikerja.model.dto.PayrollGajiDasarRequest;
import id.lua.absensikerja.model.dto.PayrollRincianGajiDTO;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PayrollGajiDasar;
import id.lua.absensikerja.model.entity.PayrollRincianGaji;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PayrollGajiDasarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PayrollGajiDasarServiceImpl implements PayrollGajiDasarService {

    private final PayrollGajiDasarRepository repo;
    private final KaryawanRepository         karyawanRepository;

    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }

    private PayrollRincianGajiDTO toRincianDTO(PayrollRincianGaji r) {
        return PayrollRincianGajiDTO.builder()
                .id(r.getId())
                .urutan(r.getUrutan())
                .nama(r.getNama())
                .jumlah(r.getJumlah())
                .periode(r.getPeriode())
                .build();
    }

    private PayrollGajiDasarDTO toDTO(PayrollGajiDasar p) {
        List<PayrollRincianGajiDTO> rincian = p.getRincianGaji().stream()
                .map(this::toRincianDTO)
                .collect(Collectors.toList());

        BigDecimal total = rincian.stream()
                .map(PayrollRincianGajiDTO::getJumlah)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return PayrollGajiDasarDTO.builder()
                .id(p.getId())
                .karyawanId(p.getKaryawan().getId())
                .namaKaryawan(p.getKaryawan().getNamaLengkap())
                .tipeGaji(p.getTipeGaji())
                .rincianGaji(rincian)
                .totalGaji(total)
                .tipeUpahLembur(p.getTipeUpahLembur())
                .satuanLembur(p.getSatuanLembur())
                .lemburHariKerja(p.getLemburHariKerja())
                .lemburSabtu(p.getLemburSabtu())
                .lemburMinggu(p.getLemburMinggu())
                .lemburKalenderLibur(p.getLemburKalenderLibur())
                .potonganIzinJam(p.getPotonganIzinJam())
                .potonganJamKerjaTidakTerpenuhi(p.getPotonganJamKerjaTidakTerpenuhi())
                .potonganAbsenOtomatis(p.getPotonganAbsenOtomatis())
                .potonganAbsenManual(p.getPotonganAbsenManual())
                .updatedAt(p.getUpdatedAt())
                .build();
    }

    @Override
    public PayrollGajiDasarDTO findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanId(karyawanId)
                .map(this::toDTO)
                .orElse(null);
    }

    @Override
    @Transactional
    public PayrollGajiDasarDTO save(Long karyawanId, PayrollGajiDasarRequest req) {
        Karyawan karyawan = getKaryawan(karyawanId);

        PayrollGajiDasar payroll = repo.findByKaryawanId(karyawanId)
                .orElseGet(() -> PayrollGajiDasar.builder().karyawan(karyawan).build());

        if (req.getTipeGaji() != null)              payroll.setTipeGaji(req.getTipeGaji());
        if (req.getTipeUpahLembur() != null)        payroll.setTipeUpahLembur(req.getTipeUpahLembur());
        if (req.getSatuanLembur() != null)          payroll.setSatuanLembur(req.getSatuanLembur());
        if (req.getLemburHariKerja() != null)       payroll.setLemburHariKerja(req.getLemburHariKerja());
        if (req.getLemburSabtu() != null)            payroll.setLemburSabtu(req.getLemburSabtu());
        if (req.getLemburMinggu() != null)           payroll.setLemburMinggu(req.getLemburMinggu());
        if (req.getLemburKalenderLibur() != null)    payroll.setLemburKalenderLibur(req.getLemburKalenderLibur());
        if (req.getPotonganIzinJam() != null)        payroll.setPotonganIzinJam(req.getPotonganIzinJam());
        if (req.getPotonganJamKerjaTidakTerpenuhi() != null)
            payroll.setPotonganJamKerjaTidakTerpenuhi(req.getPotonganJamKerjaTidakTerpenuhi());
        if (req.getPotonganAbsenOtomatis() != null)  payroll.setPotonganAbsenOtomatis(req.getPotonganAbsenOtomatis());
        if (req.getPotonganAbsenManual() != null)    payroll.setPotonganAbsenManual(req.getPotonganAbsenManual());

        // Rincian gaji — replace all
        if (req.getRincianGaji() != null) {
            if (payroll.getRincianGaji() == null) {
                payroll.setRincianGaji(new ArrayList<>());
            }
            payroll.getRincianGaji().clear();
            AtomicInteger urutan = new AtomicInteger(0);
            List<PayrollRincianGaji> items = new ArrayList<>();
            for (var r : req.getRincianGaji()) {
                items.add(PayrollRincianGaji.builder()
                        .payrollGajiDasar(payroll)
                        .urutan(urutan.getAndIncrement())
                        .nama(r.getNama())
                        .jumlah(r.getJumlah() != null ? r.getJumlah() : BigDecimal.ZERO)
                        .periode(r.getPeriode() != null ? r.getPeriode() : "Perbulan")
                        .build());
            }
            payroll.getRincianGaji().addAll(items);
        }

        return toDTO(repo.save(payroll));
    }
}
