package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PayrollPph21DTO;
import id.lua.absensikerja.model.dto.PayrollPph21Request;
import id.lua.absensikerja.model.dto.PayrollPph21RiwayatDTO;
import id.lua.absensikerja.model.dto.PayrollPph21RiwayatRequest;
import id.lua.absensikerja.service.PayrollPph21Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * REST controller untuk Payroll – PPH 21.
 * Base URL: /api/karyawan/{karyawanId}/payroll/pph21
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/payroll/pph21")
@RequiredArgsConstructor
public class PayrollPph21Controller {

    private final PayrollPph21Service service;

    // ── Pengaturan ───────────────────────────────────────────────────

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> get(
            @PathVariable Long karyawanId) {
        PayrollPph21DTO dto = service.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pph21", dto != null ? dto : Map.of())));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PayrollPph21DTO>>> save(
            @PathVariable Long karyawanId,
            @RequestBody PayrollPph21Request req) {
        PayrollPph21DTO dto = service.save(karyawanId, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("pph21", dto)));
    }

    // ── Riwayat ──────────────────────────────────────────────────────

    @GetMapping("/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<PayrollPph21RiwayatDTO>>>> listRiwayat(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("riwayat", service.listRiwayat(karyawanId))));
    }

    @PostMapping("/riwayat")
    public ResponseEntity<JsendResponse<Map<String, PayrollPph21RiwayatDTO>>> createRiwayat(
            @PathVariable Long karyawanId,
            @RequestBody PayrollPph21RiwayatRequest req) {
        PayrollPph21RiwayatDTO dto = service.saveRiwayat(karyawanId, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("riwayat", dto)));
    }

    @PutMapping("/riwayat/{riwayatId}")
    public ResponseEntity<JsendResponse<Map<String, PayrollPph21RiwayatDTO>>> updateRiwayat(
            @PathVariable Long karyawanId,
            @PathVariable Long riwayatId,
            @RequestBody PayrollPph21RiwayatRequest req) {
        PayrollPph21RiwayatDTO dto = service.updateRiwayat(karyawanId, riwayatId, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("riwayat", dto)));
    }

    @DeleteMapping("/riwayat/{riwayatId}")
    public ResponseEntity<JsendResponse<Object>> deleteRiwayat(
            @PathVariable Long karyawanId,
            @PathVariable Long riwayatId) {
        service.deleteRiwayat(karyawanId, riwayatId);
        return ResponseEntity.ok(JsendResponse.success(Map.of()));
    }
}
