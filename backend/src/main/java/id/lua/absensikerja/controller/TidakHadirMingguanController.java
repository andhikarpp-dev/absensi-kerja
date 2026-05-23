package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KaryawanDTO;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.AbsensiRepository;
import id.lua.absensikerja.service.KaryawanService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Laporan: Karyawan Tidak Hadir 1 Minggu Terakhir.
 *
 * Endpoint:
 *   GET /api/laporan/tidak-hadir-mingguan
 *
 * Mengembalikan daftar karyawan yang TIDAK memiliki satu pun catatan
 * absensi pada rentang (today - days + 1) s/d today.
 */
@RestController
@RequestMapping("/api/laporan/tidak-hadir-mingguan")
@RequiredArgsConstructor
public class TidakHadirMingguanController {

    private final KaryawanService    karyawanService;
    private final AbsensiRepository  absensiRepository;
    private final AuthUserUtil       authUserUtil;

    /** GET /api/laporan/tidak-hadir-mingguan?days=7 */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> findTidakHadir(
            @RequestParam(name = "days", defaultValue = "7") int days) {

        if (days < 1) days = 7;

        LocalDate sampai = LocalDate.now();
        LocalDate dari   = sampai.minusDays(days - 1L);

        // 1. Ambil semua karyawan dalam scope user (PEMILIK = perusahaannya, ADMIN = global)
        User user = authUserUtil.getCurrentUser();
        Long ownerId = user.getRole().getName() == RoleType.PEMILIK ? user.getId() : null;
        List<KaryawanDTO> semuaKaryawan = karyawanService.findAll(ownerId);

        // 2. Ambil ID karyawan yang ADA absensi-nya dalam rentang
        Set<Long> idHadir = new HashSet<>(
                absensiRepository.findKaryawanIdsHadirBetween(dari, sampai));

        // 3. Sisanya = karyawan yang tidak pernah absen 1 minggu terakhir
        List<KaryawanDTO> tidakHadir = semuaKaryawan.stream()
                .filter(k -> !idHadir.contains(k.getId()))
                .collect(Collectors.toList());

        Map<String, Object> payload = Map.of(
                "dari",       dari.toString(),
                "sampai",     sampai.toString(),
                "days",       days,
                "total",      tidakHadir.size(),
                "karyawan",   tidakHadir
        );
        return ResponseEntity.ok(JsendResponse.success(payload));
    }
}
