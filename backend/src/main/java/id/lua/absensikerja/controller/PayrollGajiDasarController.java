package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PayrollGajiDasarDTO;
import id.lua.absensikerja.model.dto.PayrollGajiDasarRequest;
import id.lua.absensikerja.service.PayrollGajiDasarService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * REST controller untuk Payroll – Gaji Dasar.
 * Base URL: /api/karyawan/{karyawanId}/payroll/gaji-dasar
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/payroll/gaji-dasar")
@RequiredArgsConstructor
public class PayrollGajiDasarController {

    private final PayrollGajiDasarService service;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> get(
            @PathVariable Long karyawanId) {
        PayrollGajiDasarDTO dto = service.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("gajiDasar", dto != null ? dto : Map.of())));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PayrollGajiDasarDTO>>> save(
            @PathVariable Long karyawanId,
            @Valid @RequestBody PayrollGajiDasarRequest req) {
        PayrollGajiDasarDTO dto = service.save(karyawanId, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("gajiDasar", dto)));
    }
}
