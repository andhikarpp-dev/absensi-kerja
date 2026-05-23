package id.lua.absensikerja.service;
import id.lua.absensikerja.model.dto.PayrollRekeningBankDTO;
import id.lua.absensikerja.model.dto.PayrollRekeningBankRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PayrollRekeningBank;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PayrollRekeningBankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PayrollRekeningBankServiceImpl implements PayrollRekeningBankService {
    private final PayrollRekeningBankRepository repo;
    private final KaryawanRepository            karyawanRepository;
    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }
    private PayrollRekeningBankDTO toDTO(PayrollRekeningBank r) {
        return PayrollRekeningBankDTO.builder()
                .id(r.getId())
                .karyawanId(r.getKaryawan().getId())
                .namaBank(r.getNamaBank())
                .nomorRekening(r.getNomorRekening())
                .atasNama(r.getAtasNama())
                .updatedAt(r.getUpdatedAt())
                .build();
    }
    @Override
    public PayrollRekeningBankDTO findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanId(karyawanId).map(this::toDTO).orElse(null);
    }
    @Override
    @Transactional
    public PayrollRekeningBankDTO save(Long karyawanId, PayrollRekeningBankRequest req) {
        Karyawan karyawan = getKaryawan(karyawanId);
        PayrollRekeningBank rek = repo.findByKaryawanId(karyawanId)
                .orElseGet(() -> PayrollRekeningBank.builder().karyawan(karyawan).build());
        rek.setNamaBank(req.getNamaBank());
        rek.setNomorRekening(req.getNomorRekening());
        rek.setAtasNama(req.getAtasNama());
        return toDTO(repo.save(rek));
    }
    @Override
    @Transactional
    public void delete(Long karyawanId) {
        repo.findByKaryawanId(karyawanId).ifPresent(repo::delete);
    }
}
