package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PengaturanCutiSetengahHariDTO;
import id.lua.absensikerja.model.dto.PengaturanCutiSetengahHariRequest;
import id.lua.absensikerja.service.PengaturanCutiSetengahHariService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Pengaturan Cuti Setengah Hari.
 * GET  /api/cuti/pengaturan-setengah-hari  → ambil pengaturan
 * PUT  /api/cuti/pengaturan-setengah-hari  → simpan / update (upsert)
 */
@RestController
@RequestMapping("/api/cuti/pengaturan-setengah-hari")
@RequiredArgsConstructor
public class PengaturanCutiSetengahHariController {

    private final PengaturanCutiSetengahHariService service;
    private final AuthUserUtil                      authUserUtil;

    private Long callerUserId() {
        return authUserUtil.getCurrentUser().getId();
    }

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, PengaturanCutiSetengahHariDTO>>> get() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengaturan", service.get(callerUserId()))));
    }

    @PutMapping
    public ResponseEntity<JsendResponse<Map<String, PengaturanCutiSetengahHariDTO>>> save(
            @RequestBody PengaturanCutiSetengahHariRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengaturan", service.save(req, callerUserId()))));
    }
}
