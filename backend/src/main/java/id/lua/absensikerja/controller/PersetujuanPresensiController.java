package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PersetujuanPresensiDTO;
import id.lua.absensikerja.model.dto.PersetujuanPresensiRequest;
import id.lua.absensikerja.service.PersetujuanPresensiService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/persetujuan-presensi")
@RequiredArgsConstructor
public class PersetujuanPresensiController {

    private final PersetujuanPresensiService service;
    private final AuthUserUtil               authUserUtil;

    private Long userId() { return authUserUtil.getCurrentUser().getId(); }

    /** POST /api/persetujuan-presensi — buat */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PersetujuanPresensiDTO>>> buat(
            @RequestBody PersetujuanPresensiRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("persetujuan", service.buat(req, userId()))));
    }

    /** GET /api/persetujuan-presensi?diizinkan=false&tanggal=&jenisPresensi=&cari= */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<PersetujuanPresensiDTO>>>> findAll(
            @RequestParam(defaultValue = "false") boolean diizinkan,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate tanggal,
            @RequestParam(required = false) String jenisPresensi,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("persetujuan", service.findAll(diizinkan, tanggal, jenisPresensi, cari, userId()))));
    }

    /** PATCH /api/persetujuan-presensi/{id}/izinkan */
    @PatchMapping("/{id}/izinkan")
    public ResponseEntity<JsendResponse<Map<String, PersetujuanPresensiDTO>>> izinkan(
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("persetujuan", service.izinkan(id, userId()))));
    }

    /** POST /api/persetujuan-presensi/izinkan-terpilih */
    @PostMapping("/izinkan-terpilih")
    public ResponseEntity<JsendResponse<Map<String, Integer>>> izinkanTerpilih(
            @RequestBody Map<String, List<Long>> body) {
        List<Long> ids = body.get("ids");
        if (ids == null || ids.isEmpty()) {
            return ResponseEntity.ok(JsendResponse.success(Map.of("jumlah", 0)));
        }
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jumlah", service.izinkanBanyak(ids, userId()))));
    }

    /** POST /api/persetujuan-presensi/izinkan-semua */
    @PostMapping("/izinkan-semua")
    public ResponseEntity<JsendResponse<Map<String, Integer>>> izinkanSemua(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate tanggal,
            @RequestParam(required = false) String jenisPresensi,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jumlah", service.izinkanSemua(tanggal, jenisPresensi, cari, userId()))));
    }

    /** DELETE /api/persetujuan-presensi/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> hapus(@PathVariable Long id) {
        service.hapus(id, userId());
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** GET /api/persetujuan-presensi/cek?karyawanId=&tanggal=&jenisPresensi= */
    @GetMapping("/cek")
    public ResponseEntity<JsendResponse<Map<String, Boolean>>> cek(
            @RequestParam Long karyawanId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate tanggal,
            @RequestParam String jenisPresensi) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("diizinkan", service.cekIzin(karyawanId, tanggal, jenisPresensi))));
    }
}
