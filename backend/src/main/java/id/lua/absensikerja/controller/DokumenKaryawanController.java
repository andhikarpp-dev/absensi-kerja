package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.DokumenKaryawanDTO;
import id.lua.absensikerja.model.dto.DokumenKaryawanRequest;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KuotaDokumenDTO;
import id.lua.absensikerja.service.DokumenKaryawanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/karyawan/{karyawanId}/dokumen")
@RequiredArgsConstructor
public class DokumenKaryawanController {

    private final DokumenKaryawanService service;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<DokumenKaryawanDTO>>>> getAll(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("dokumen", service.findByKaryawan(karyawanId, search))));
    }

    @GetMapping("/kuota")
    public ResponseEntity<JsendResponse<Map<String, KuotaDokumenDTO>>> getKuota(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("kuota", service.getKuota(karyawanId))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, DokumenKaryawanDTO>>> getById(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("dokumen", service.findById(id))));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, DokumenKaryawanDTO>>> create(
            @PathVariable Long karyawanId,
            @RequestPart("data") DokumenKaryawanRequest req,
            @RequestPart("berkas") MultipartFile berkas) throws IOException {
        DokumenKaryawanDTO dto = service.create(karyawanId, req, berkas);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("dokumen", dto)));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, DokumenKaryawanDTO>>> update(
            @PathVariable Long karyawanId, @PathVariable Long id,
            @RequestPart("data") DokumenKaryawanRequest req,
            @RequestPart(value = "berkas", required = false) MultipartFile berkas) throws IOException {
        DokumenKaryawanDTO dto = service.update(id, req, berkas);
        return ResponseEntity.ok(JsendResponse.success(Map.of("dokumen", dto)));
    }

    @PostMapping("/kuota-berbayar")
    public ResponseEntity<JsendResponse<Map<String, KuotaDokumenDTO>>> tambahKuotaBerbayar(
            @PathVariable Long karyawanId,
            @RequestBody Map<String, Integer> body) {
        int jumlah = body.getOrDefault("jumlah", 0);
        KuotaDokumenDTO kuota = service.tambahKuotaBerbayar(karyawanId, jumlah);
        return ResponseEntity.ok(JsendResponse.success(Map.of("kuota", kuota)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
