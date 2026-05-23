package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KlaimDTO;
import id.lua.absensikerja.model.dto.KlaimRequest;
import id.lua.absensikerja.model.dto.KlaimRiwayatDTO;
import id.lua.absensikerja.model.enums.StatusKlaim;
import id.lua.absensikerja.service.KlaimService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * REST controller untuk CRUD Klaim karyawan.
 * Base URL: /api/karyawan/{karyawanId}/klaim
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/klaim")
@RequiredArgsConstructor
public class KlaimController {

    private final KlaimService klaimService;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<KlaimDTO>>>> getAll(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusKlaim status) {
        List<KlaimDTO> list = klaimService.findByKaryawan(karyawanId, status);
        return ResponseEntity.ok(JsendResponse.success(Map.of("klaim", list)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, KlaimDTO>>> getById(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("klaim", klaimService.findById(id))));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, KlaimDTO>>> create(
            @PathVariable Long karyawanId,
            @Valid @RequestPart("data") KlaimRequest req,
            @RequestPart(value = "lampiran", required = false) MultipartFile lampiran) throws IOException {
        KlaimDTO dto = klaimService.create(karyawanId, req, lampiran);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("klaim", dto)));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, KlaimDTO>>> update(
            @PathVariable Long karyawanId,
            @PathVariable Long id,
            @Valid @RequestPart("data") KlaimRequest req,
            @RequestPart(value = "lampiran", required = false) MultipartFile lampiran) throws IOException {
        KlaimDTO dto = klaimService.update(id, req, lampiran);
        return ResponseEntity.ok(JsendResponse.success(Map.of("klaim", dto)));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, KlaimDTO>>> updateStatus(
            @PathVariable Long karyawanId,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusKlaim status     = StatusKlaim.valueOf(body.get("status"));
        String catatan         = body.get("catatanPenolakan");
        KlaimDTO dto           = klaimService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("klaim", dto)));
    }

    @GetMapping("/{id}/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<KlaimRiwayatDTO>>>> getRiwayat(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        List<KlaimRiwayatDTO> riwayat = klaimService.findRiwayat(id);
        return ResponseEntity.ok(JsendResponse.success(Map.of("riwayat", riwayat)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        klaimService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
