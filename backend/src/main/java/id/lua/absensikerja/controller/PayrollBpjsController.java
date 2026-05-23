package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PayrollBpjsDTO;
import id.lua.absensikerja.model.dto.PayrollBpjsRequest;
import id.lua.absensikerja.service.PayrollBpjsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * REST controller untuk Payroll – BPJS.
 * Base URL: /api/karyawan/{karyawanId}/payroll/bpjs
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/payroll/bpjs")
@RequiredArgsConstructor
public class PayrollBpjsController {

    private final PayrollBpjsService service;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> get(
            @PathVariable Long karyawanId) {
        PayrollBpjsDTO dto = service.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("bpjs", dto != null ? dto : Map.of())));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PayrollBpjsDTO>>> save(
            @PathVariable Long karyawanId,
            @RequestBody PayrollBpjsRequest req) {
        PayrollBpjsDTO dto = service.save(karyawanId, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("bpjs", dto)));
    }
}
