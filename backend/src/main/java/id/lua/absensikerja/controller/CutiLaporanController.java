package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KaryawanDTO;
import id.lua.absensikerja.model.dto.SisaCutiDTO;
import id.lua.absensikerja.model.dto.SisaCutiRiwayatDTO;
import id.lua.absensikerja.model.dto.UpdateSisaCutiRequest;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.CutiService;
import id.lua.absensikerja.service.KaryawanService;
import id.lua.absensikerja.service.PembaruanCutiScheduler;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Laporan Cuti — daftar semua karyawan + sisa cuti + pembaruan otomatis.
 * Base URL: /api/cuti/laporan
 */
@RestController
@RequestMapping("/api/cuti/laporan")
@RequiredArgsConstructor
public class CutiLaporanController {

    private final KaryawanService          karyawanService;
    private final CutiService              cutiService;
    private final PembaruanCutiScheduler   pembaruanCutiScheduler;
    private final PerusahaanRepository     perusahaanRepository;
    private final AuthUserUtil             authUserUtil;

    private Long resolveOwnerId() {
        User user = authUserUtil.getCurrentUser();
        if (user.getRole() != null && user.getRole().getName() == RoleType.PEMILIK) {
            return user.getId();
        }
        return null;
    }

    /** GET /api/cuti/laporan — list karyawan dengan data sisa cuti */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<KaryawanDTO>>>> getLaporan(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) Long jabatanId,
            @RequestParam(required = false) String cari) {

        Long ownerId = resolveOwnerId();
        List<KaryawanDTO> list = karyawanService.findAll(ownerId);

        // filter divisi
        if (divisiId != null) {
            final Long fd = divisiId;
            list = list.stream()
                    .filter(k -> fd.equals(k.getDivisiId()))
                    .collect(java.util.stream.Collectors.toList());
        }
        // filter jabatan
        if (jabatanId != null) {
            final Long fj = jabatanId;
            list = list.stream()
                    .filter(k -> fj.equals(k.getJabatanId()))
                    .collect(java.util.stream.Collectors.toList());
        }
        // filter cari (nama)
        if (cari != null && !cari.isBlank()) {
            final String fc = cari.toLowerCase();
            list = list.stream()
                    .filter(k -> k.getNamaLengkap() != null && k.getNamaLengkap().toLowerCase().contains(fc))
                    .collect(java.util.stream.Collectors.toList());
        }

        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", list)));
    }

    /** GET /api/cuti/laporan/{karyawanId}/sisa — sisa cuti detail 1 karyawan */
    @GetMapping("/{karyawanId}/sisa")
    public ResponseEntity<JsendResponse<Map<String, SisaCutiDTO>>> getSisa(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("sisaCuti", cutiService.getSisaCuti(karyawanId))));
    }

    /** PATCH /api/cuti/laporan/{karyawanId}/sisa — update pengaturan pembaruan otomatis */
    @PatchMapping("/{karyawanId}/sisa")
    public ResponseEntity<JsendResponse<Map<String, SisaCutiDTO>>> updateSisa(
            @PathVariable Long karyawanId,
            @RequestBody UpdateSisaCutiRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("sisaCuti", cutiService.updateSisaCuti(karyawanId, req))));
    }

    /** POST /api/cuti/laporan/{karyawanId}/sisa/trigger-pembaruan */
    @PostMapping("/{karyawanId}/sisa/trigger-pembaruan")
    public ResponseEntity<JsendResponse<Map<String, Object>>> triggerPembaruan(
            @PathVariable Long karyawanId) {
        boolean applied = pembaruanCutiScheduler.triggerManual(karyawanId);
        SisaCutiDTO sisa = cutiService.getSisaCuti(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of(
                "applied", applied, "sisaCuti", sisa)));
    }

    /** GET /api/cuti/laporan/{karyawanId}/riwayat-transaksi */
    @GetMapping("/{karyawanId}/riwayat-transaksi")
    public ResponseEntity<JsendResponse<Map<String, List<SisaCutiRiwayatDTO>>>> getRiwayatTransaksi(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("riwayat", cutiService.getSisaCutiRiwayat(karyawanId))));
    }
}
