package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JadwalLemburDTO;
import id.lua.absensikerja.model.dto.JadwalLemburRequest;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.service.JadwalLemburEksporImporService;
import id.lua.absensikerja.service.JadwalLemburService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/jadwal-lembur")
@RequiredArgsConstructor
public class JadwalLemburController {

    private final JadwalLemburService           jadwalLemburService;
    private final JadwalLemburEksporImporService eksporImporService;
    private final AuthUserUtil                  authUserUtil;

    private Long userId() { return authUserUtil.getCurrentUser().getId(); }

    /** GET /api/jadwal-lembur */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<JadwalLemburDTO>>>> getAll(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", jadwalLemburService.getAll(status, dari, sampai, divisiId, cari))));
    }

    /** POST /api/jadwal-lembur */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, JadwalLemburDTO>>> tambah(
            @RequestBody JadwalLemburRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", jadwalLemburService.tambah(req, userId()))));
    }

    /** PUT /api/jadwal-lembur/{id} */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JadwalLemburDTO>>> update(
            @PathVariable Long id, @RequestBody JadwalLemburRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", jadwalLemburService.update(id, req))));
    }

    /** PATCH /api/jadwal-lembur/{id}/setujui */
    @PatchMapping("/{id}/setujui")
    public ResponseEntity<JsendResponse<Map<String, JadwalLemburDTO>>> setujui(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", jadwalLemburService.setujui(id))));
    }

    /** PATCH /api/jadwal-lembur/{id}/tolak */
    @PatchMapping("/{id}/tolak")
    public ResponseEntity<JsendResponse<Map<String, JadwalLemburDTO>>> tolak(
            @PathVariable Long id,
            @RequestParam(required = false) String catatan) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", jadwalLemburService.tolak(id, catatan))));
    }

    /** DELETE /api/jadwal-lembur/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, String>>> hapus(@PathVariable Long id) {
        jadwalLemburService.hapus(id);
        return ResponseEntity.ok(JsendResponse.success(Map.of("message", "Berhasil dihapus")));
    }

    // ── Ekspor & Impor ────────────────────────────────────────

    /** GET /api/jadwal-lembur/ekspor?status=&dari=&sampai=&divisiId=&cari= */
    @GetMapping("/ekspor")
    public ResponseEntity<byte[]> ekspor(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) throws IOException {

        String statusP = (status   != null && !status.isBlank())   ? status   : null;
        String dariP   = dari      != null ? dari.atStartOfDay().toString()        : null;
        String sampaiP = sampai    != null ? sampai.atTime(23, 59, 59).toString()  : null;
        String divisiP = divisiId  != null ? divisiId.toString()                   : null;
        String cariP   = (cari     != null && !cari.isBlank()) ? "%" + cari.trim().toLowerCase() + "%" : null;

        byte[] data = eksporImporService.ekspor(statusP, dariP, sampaiP, divisiP, cariP);
        String filename = "jadwal-lembur-" +
                LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss")) + ".xlsx";

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        ContentDisposition.attachment().filename(filename).build().toString())
                .body(data);
    }

    /** GET /api/jadwal-lembur/impor/template — download template Excel */
    @GetMapping("/impor/template")
    public ResponseEntity<byte[]> downloadTemplate() throws IOException {
        byte[] data = eksporImporService.templateImpor();
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        ContentDisposition.attachment().filename("template-jadwal-lembur.xlsx").build().toString())
                .body(data);
    }

    /** POST /api/jadwal-lembur/impor — upload Excel */
    @PostMapping(value = "/impor", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, Object>>> prosesImpor(
            @RequestParam("file") MultipartFile file) throws IOException {
        var hasil = eksporImporService.prosesImpor(file);
        return ResponseEntity.ok(JsendResponse.success(Map.of(
                "berhasil", hasil.berhasil(),
                "gagal",    hasil.gagal(),
                "errors",   hasil.errors())));
    }
}
