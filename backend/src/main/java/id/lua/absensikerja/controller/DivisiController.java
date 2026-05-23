package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.DivisiDTO;
import id.lua.absensikerja.model.dto.DivisiRequest;
import id.lua.absensikerja.model.dto.DivisiRiwayatDTO;
import id.lua.absensikerja.model.dto.ImporSupervisorResult;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.service.DivisiEksporService;
import id.lua.absensikerja.service.DivisiImporService;
import id.lua.absensikerja.service.DivisiService;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/divisi")
@RequiredArgsConstructor
public class DivisiController {

    private final DivisiService       divisiService;
    private final DivisiImporService  divisiImporService;
    private final DivisiEksporService divisiEksporService;
    private final AuthUserUtil        authUserUtil;

    private Long resolveOwnerId() {
        User user = authUserUtil.getCurrentUser();
        return user.getRole().getName() == RoleType.PEMILIK ? user.getId() : null;
    }

    /** GET /api/divisi */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<DivisiDTO>>>> findAll() {
        return ResponseEntity.ok(JsendResponse.success(Map.of("divisi", divisiService.findAll(resolveOwnerId()))));
    }

    /** GET /api/divisi/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, DivisiDTO>>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("divisi", divisiService.findById(id))));
    }

    /** POST /api/divisi */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, DivisiDTO>>> create(
            @Valid @RequestBody DivisiRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("divisi", divisiService.create(request, resolveOwnerId()))));
    }

    /** PUT /api/divisi/{id} */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, DivisiDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody DivisiRequest request) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("divisi", divisiService.update(id, request))));
    }

    /** DELETE /api/divisi/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        divisiService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** GET /api/divisi/{id}/riwayat */
    @GetMapping("/{id}/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<DivisiRiwayatDTO>>>> getRiwayat(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("riwayat", divisiService.findRiwayat(id))));
    }

    // ── Ekspor ────────────────────────────────────────────────────────────────

    /**
     * GET /api/divisi/ekspor
     * Download seluruh data divisi sebagai file Excel (.xlsx).
     */
    @GetMapping("/ekspor")
    public ResponseEntity<byte[]> ekspor() throws IOException {
        byte[] bytes = divisiEksporService.eksporSemua();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment()
                .filename("data-divisi.xlsx")
                .build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }

    // ── Impor Supervisor ──────────────────────────────────────────────────────

    /**
     * GET /api/divisi/template-supervisor
     * Download file Excel template untuk impor supervisor divisi.
     */
    @GetMapping("/template-supervisor")
    public ResponseEntity<byte[]> downloadTemplate() throws IOException {
        byte[] bytes = divisiImporService.buatTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment()
                .filename("format-impor-supervisor-divisi.xlsx")
                .build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }

    /**
     * POST /api/divisi/impor-supervisor
     * Proses file Excel impor supervisor divisi.
     */
    @PostMapping(value = "/impor-supervisor", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, ImporSupervisorResult>>> imporSupervisor(
            @RequestParam("file") MultipartFile file) throws IOException {
        ImporSupervisorResult result = divisiImporService.prosesImpor(file);
        return ResponseEntity.ok(JsendResponse.success(Map.of("hasil", result)));
    }
}

