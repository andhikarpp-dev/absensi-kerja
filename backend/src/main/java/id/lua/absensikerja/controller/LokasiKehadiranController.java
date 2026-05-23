package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.LokasiKehadiranDTO;
import id.lua.absensikerja.model.dto.LokasiKehadiranRequest;
import id.lua.absensikerja.model.dto.LokasiKehadiranRiwayatDTO;
import id.lua.absensikerja.model.dto.PengaturanLokasiKehadiranDTO;
import id.lua.absensikerja.model.dto.PesanKuotaLokasiRequest;
import id.lua.absensikerja.service.LokasiKehadiranService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/lokasi-kehadiran")
@RequiredArgsConstructor
public class LokasiKehadiranController {

    private final LokasiKehadiranService service;
    private final AuthUserUtil           authUserUtil;

    private Long callerUserId() {
        return authUserUtil.getCurrentUser().getId();
    }

    /** GET /api/lokasi-kehadiran */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<LokasiKehadiranDTO>>>> findAll() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("lokasiKehadiran", service.findAll(callerUserId()))));
    }

    /** GET /api/lokasi-kehadiran/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, LokasiKehadiranDTO>>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("lokasiKehadiran", service.findById(id))));
    }

    /** POST /api/lokasi-kehadiran */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, LokasiKehadiranDTO>>> create(
            @Valid @RequestBody LokasiKehadiranRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("lokasiKehadiran", service.create(request, callerUserId()))));
    }

    /** PUT /api/lokasi-kehadiran/{id} */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, LokasiKehadiranDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody LokasiKehadiranRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("lokasiKehadiran", service.update(id, request, callerUserId()))));
    }

    /** DELETE /api/lokasi-kehadiran/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** GET /api/lokasi-kehadiran/{id}/riwayat */
    @GetMapping("/{id}/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<LokasiKehadiranRiwayatDTO>>>> riwayat(
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("riwayat", service.findRiwayat(id))));
    }

    // ─────────── Pengaturan ───────────

    /** GET /api/lokasi-kehadiran/pengaturan */
    @GetMapping("/pengaturan")
    public ResponseEntity<JsendResponse<Map<String, PengaturanLokasiKehadiranDTO>>> getPengaturan() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengaturan", service.getPengaturan(callerUserId()))));
    }

    /** PUT /api/lokasi-kehadiran/pengaturan */
    @PutMapping("/pengaturan")
    public ResponseEntity<JsendResponse<Map<String, PengaturanLokasiKehadiranDTO>>> updatePengaturan(
            @RequestBody PengaturanLokasiKehadiranDTO request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengaturan", service.updatePengaturan(request, callerUserId()))));
    }

    /** POST /api/lokasi-kehadiran/pesan-kuota */
    @PostMapping("/pesan-kuota")
    public ResponseEntity<JsendResponse<Map<String, PengaturanLokasiKehadiranDTO>>> pesanKuota(
            @Valid @RequestBody PesanKuotaLokasiRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengaturan", service.pesanKuotaLokasi(request.getKuota(), callerUserId()))));
    }
}
