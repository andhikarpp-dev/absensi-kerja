package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.RevisiKehadiranDTO;
import id.lua.absensikerja.model.dto.RevisiKehadiranRequest;
import id.lua.absensikerja.model.enums.StatusRevisi;
import id.lua.absensikerja.service.RevisiKehadiranService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/revisi-kehadiran")
@RequiredArgsConstructor
public class RevisiKehadiranController {

    private final RevisiKehadiranService service;
    private final AuthUserUtil           authUserUtil;

    private Long userId() { return authUserUtil.getCurrentUser().getId(); }

    /** POST /api/revisi-kehadiran — buat permintaan revisi */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, RevisiKehadiranDTO>>> buat(
            @Valid @RequestBody RevisiKehadiranRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("revisi", service.buat(req, userId()))));
    }

    /** GET /api/revisi-kehadiran?status=PENGAJUAN&divisiId=&dari=&sampai=&cari= */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<RevisiKehadiranDTO>>>> findByStatus(
            @RequestParam(defaultValue = "PENGAJUAN") StatusRevisi status,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("revisi", service.findByStatus(status, divisiId, dari, sampai, cari, userId()))));
    }

    /** PATCH /api/revisi-kehadiran/{id}/setujui */
    @PatchMapping("/{id}/setujui")
    public ResponseEntity<JsendResponse<Map<String, RevisiKehadiranDTO>>> setujui(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("revisi", service.setujui(id, userId()))));
    }

    /** PATCH /api/revisi-kehadiran/{id}/tolak */
    @PatchMapping("/{id}/tolak")
    public ResponseEntity<JsendResponse<Map<String, RevisiKehadiranDTO>>> tolak(
            @PathVariable Long id,
            @RequestBody(required = false) Map<String, String> body) {
        String catatan = body != null ? body.get("catatanPenolakan") : null;
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("revisi", service.tolak(id, catatan, userId()))));
    }

    /** DELETE /api/revisi-kehadiran/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> hapus(@PathVariable Long id) {
        service.hapus(id, userId());
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
