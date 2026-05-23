package id.lua.absensikerja.service;
import id.lua.absensikerja.model.dto.PayrollBpjsDTO;
import id.lua.absensikerja.model.dto.PayrollBpjsRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.PayrollBpjs;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PayrollBpjsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PayrollBpjsServiceImpl implements PayrollBpjsService {
    private final PayrollBpjsRepository repo;
    private final KaryawanRepository    karyawanRepository;
    private Karyawan getKaryawan(Long id) {
        return karyawanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
    }
    private PayrollBpjsDTO toDTO(PayrollBpjs b) {
        return PayrollBpjsDTO.builder()
                .id(b.getId())
                .karyawanId(b.getKaryawan().getId())
                .tkTanggalKepesertaan(b.getTkTanggalKepesertaan())
                .tkNomor(b.getTkNomor())
                .tkUpahDidaftarkan(b.getTkUpahDidaftarkan())
                .kesTanggalKepesertaan(b.getKesTanggalKepesertaan())
                .kesNomor(b.getKesNomor())
                .kesUpahDidaftarkan(b.getKesUpahDidaftarkan())
                .kesAnggotaKeluargaInti(b.getKesAnggotaKeluargaInti())
                .kesAnggotaKeluargaTambahan(b.getKesAnggotaKeluargaTambahan())
                .updatedAt(b.getUpdatedAt())
                .build();
    }
    @Override
    public PayrollBpjsDTO findByKaryawan(Long karyawanId) {
        return repo.findByKaryawanId(karyawanId).map(this::toDTO).orElse(null);
    }
    @Override
    @Transactional
    public PayrollBpjsDTO save(Long karyawanId, PayrollBpjsRequest req) {
        Karyawan karyawan = getKaryawan(karyawanId);
        PayrollBpjs bpjs = repo.findByKaryawanId(karyawanId)
                .orElseGet(() -> PayrollBpjs.builder().karyawan(karyawan).build());
        if (req.getTkTanggalKepesertaan()      != null) bpjs.setTkTanggalKepesertaan(req.getTkTanggalKepesertaan());
        if (req.getTkNomor()                   != null) bpjs.setTkNomor(req.getTkNomor());
        if (req.getTkUpahDidaftarkan()          != null) bpjs.setTkUpahDidaftarkan(req.getTkUpahDidaftarkan());
        if (req.getKesTanggalKepesertaan()     != null) bpjs.setKesTanggalKepesertaan(req.getKesTanggalKepesertaan());
        if (req.getKesNomor()                  != null) bpjs.setKesNomor(req.getKesNomor());
        if (req.getKesUpahDidaftarkan()         != null) bpjs.setKesUpahDidaftarkan(req.getKesUpahDidaftarkan());
        if (req.getKesAnggotaKeluargaInti()    != null) bpjs.setKesAnggotaKeluargaInti(req.getKesAnggotaKeluargaInti());
        if (req.getKesAnggotaKeluargaTambahan() != null) bpjs.setKesAnggotaKeluargaTambahan(req.getKesAnggotaKeluargaTambahan());
        return toDTO(repo.save(bpjs));
    }
}
