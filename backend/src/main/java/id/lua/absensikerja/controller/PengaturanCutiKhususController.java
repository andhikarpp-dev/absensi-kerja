package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PengaturanCutiKhususDTO;
import id.lua.absensikerja.model.dto.PengaturanCutiKhususRequest;
import id.lua.absensikerja.service.PengaturanCutiKhususService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Pengaturan Cuti Khusus per perusahaan.
 * Base URL: /api/cuti/pengaturan-khusus
 */
@RestController
@RequestMapping("/api/cuti/pengaturan-khusus")
@RequiredArgsConstructor
public class PengaturanCutiKhususController {

    private final PengaturanCutiKhususService service;
    private final AuthUserUtil               authUserUtil;

    private Long callerUserId() {
        return authUserUtil.getCurrentUser().getId();
    }

    /** GET /api/cuti/pengaturan-khusus */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<PengaturanCutiKhususDTO>>>> getAll() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("cutiKhusus", service.findAll(callerUserId()))));
    }

    /** POST /api/cuti/pengaturan-khusus */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PengaturanCutiKhususDTO>>> create(
            @Valid @RequestBody PengaturanCutiKhususRequest req) {
        PengaturanCutiKhususDTO dto = service.create(req, callerUserId());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("cutiKhusus", dto)));
    }

    /** PUT /api/cuti/pengaturan-khusus/{id} */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, PengaturanCutiKhususDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody PengaturanCutiKhususRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("cutiKhusus", service.update(id, req, callerUserId()))));
    }

    /** PATCH /api/cuti/pengaturan-khusus/{id}/toggle-aktif */
    @PatchMapping("/{id}/toggle-aktif")
    public ResponseEntity<JsendResponse<Map<String, PengaturanCutiKhususDTO>>> toggleAktif(
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("cutiKhusus", service.toggleAktif(id, callerUserId()))));
    }

    /** DELETE /api/cuti/pengaturan-khusus/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id, callerUserId());
        return ResponseEntity.noContent().build();
    }
}
