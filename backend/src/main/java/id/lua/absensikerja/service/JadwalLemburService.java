package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.JadwalLemburDTO;
import id.lua.absensikerja.model.dto.JadwalLemburRequest;
import id.lua.absensikerja.model.entity.JadwalLembur;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.repository.JadwalLemburRepository;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.UserRepository;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class JadwalLemburService {

    private final JadwalLemburRepository jadwalLemburRepository;
    private final KaryawanRepository     karyawanRepository;
    private final UserRepository         userRepository;
    private final AuthUserUtil           authUserUtil;

    @Value("${app.base-url}")
    private String baseUrl;

    // ── List ──────────────────────────────────────────────────
    public List<JadwalLemburDTO> getAll(String status, LocalDate dari, LocalDate sampai,
                                        Long divisiId, String cari) {
        String statusP   = (status   != null && !status.isBlank())   ? status.trim()   : null;
        String dariP     = dari     != null ? dari.atStartOfDay().toString()   : null;
        String sampaiP   = sampai   != null ? sampai.atTime(23, 59, 59).toString() : null;
        String divisiP   = divisiId != null ? divisiId.toString() : null;
        String cariP     = (cari != null && !cari.isBlank()) ? "%" + cari.trim().toLowerCase() + "%" : null;

        return jadwalLemburRepository.findJadwal(statusP, dariP, sampaiP, divisiP, cariP)
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    // ── Tambah ────────────────────────────────────────────────
    @Transactional
    public JadwalLemburDTO tambah(JadwalLemburRequest req, Long userId) {
        Karyawan k = karyawanRepository.findById(req.getKaryawanId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
        User admin = userRepository.findById(userId).orElse(null);

        JadwalLembur j = JadwalLembur.builder()
                .karyawan(k)
                .waktuMulai(req.getWaktuMulai())
                .waktuSelesai(req.getWaktuSelesai())
                .menitSebelumJadwal(req.getMenitSebelumJadwal())
                .catatan(req.getCatatan())
                .status("PENGAJUAN")
                .dibuatOleh(admin)
                .build();
        return toDTO(jadwalLemburRepository.save(j));
    }

    // ── Update ────────────────────────────────────────────────
    @Transactional
    public JadwalLemburDTO update(Long id, JadwalLemburRequest req) {
        JadwalLembur j = findOrThrow(id);
        if (req.getKaryawanId() != null) {
            Karyawan k = karyawanRepository.findById(req.getKaryawanId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Karyawan tidak ditemukan"));
            j.setKaryawan(k);
        }
        if (req.getWaktuMulai()   != null) j.setWaktuMulai(req.getWaktuMulai());
        if (req.getWaktuSelesai() != null) j.setWaktuSelesai(req.getWaktuSelesai());
        j.setMenitSebelumJadwal(req.getMenitSebelumJadwal());
        j.setCatatan(req.getCatatan());
        return toDTO(jadwalLemburRepository.save(j));
    }

    // ── Setujui ───────────────────────────────────────────────
    @Transactional
    public JadwalLemburDTO setujui(Long id) {
        JadwalLembur j = findOrThrow(id);
        j.setStatus("DISETUJUI");
        j.setCatatanPenolakan(null);
        return toDTO(jadwalLemburRepository.save(j));
    }

    // ── Tolak ────────────────────────────────────────────────
    @Transactional
    public JadwalLemburDTO tolak(Long id, String catatanPenolakan) {
        JadwalLembur j = findOrThrow(id);
        j.setStatus("DITOLAK");
        j.setCatatanPenolakan(catatanPenolakan);
        return toDTO(jadwalLemburRepository.save(j));
    }

    // ── Hapus ────────────────────────────────────────────────
    @Transactional
    public void hapus(Long id) {
        jadwalLemburRepository.delete(findOrThrow(id));
    }

    // ── Helper ───────────────────────────────────────────────
    private JadwalLembur findOrThrow(Long id) {
        return jadwalLemburRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jadwal lembur tidak ditemukan"));
    }

    private JadwalLemburDTO toDTO(JadwalLembur j) {
        Karyawan k = j.getKaryawan();
        String durasi = null;
        if (j.getWaktuMulai() != null && j.getWaktuSelesai() != null) {
            long menit = java.time.Duration.between(j.getWaktuMulai(), j.getWaktuSelesai()).toMinutes();
            if (menit > 0) {
                long jam = menit / 60, sisa = menit % 60;
                durasi = (jam > 0 ? jam + "j " : "") + sisa + "m";
            }
        }
        return JadwalLemburDTO.builder()
                .id(j.getId())
                .karyawanId(k.getId())
                .namaKaryawan(k.getNamaLengkap())
                .namaDivisi(k.getDivisi() != null ? k.getDivisi().getNamaDivisi() : null)
                .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                .fotoProfil(k.getFotoProfil() != null ? baseUrl + "/" + k.getFotoProfil() : null)
                .waktuMulai(j.getWaktuMulai())
                .waktuSelesai(j.getWaktuSelesai())
                .durasiLembur(durasi)
                .menitSebelumJadwal(j.getMenitSebelumJadwal())
                .catatan(j.getCatatan())
                .status(j.getStatus())
                .catatanPenolakan(j.getCatatanPenolakan())
                .dibuatAt(j.getDibuatAt())
                .dibuatOleh(j.getDibuatOleh() != null ? j.getDibuatOleh().getUsername() : null)
                .build();
    }
}
