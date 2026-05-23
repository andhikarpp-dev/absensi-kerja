package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PayrollRekeningBankDTO;
import id.lua.absensikerja.model.dto.PayrollRekeningBankRequest;
import id.lua.absensikerja.service.PayrollRekeningBankService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * REST controller untuk Payroll – Rekening Bank.
 * Base URL: /api/karyawan/{karyawanId}/payroll/rekening-bank
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/payroll/rekening-bank")
@RequiredArgsConstructor
public class PayrollRekeningBankController {

    private final PayrollRekeningBankService service;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> get(
            @PathVariable Long karyawanId) {
        PayrollRekeningBankDTO dto = service.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("rekeningBank", dto != null ? dto : Map.of())));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PayrollRekeningBankDTO>>> save(
            @PathVariable Long karyawanId,
            @RequestBody PayrollRekeningBankRequest req) {
        PayrollRekeningBankDTO dto = service.save(karyawanId, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("rekeningBank", dto)));
    }

    @DeleteMapping
    public ResponseEntity<JsendResponse<Map<String, String>>> delete(
            @PathVariable Long karyawanId) {
        service.delete(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("message", "Rekening bank dihapus")));
    }
}
