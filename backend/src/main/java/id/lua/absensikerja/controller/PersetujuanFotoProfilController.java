package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PersetujuanFotoProfilDTO;
import id.lua.absensikerja.service.PersetujuanFotoProfilService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/persetujuan-foto-profil")
@RequiredArgsConstructor
public class PersetujuanFotoProfilController {

    private final PersetujuanFotoProfilService service;
    private final AuthUserUtil                 authUserUtil;

    private static final String UPLOAD_DIR = "uploads/foto-profil/";

    private Long userId() { return authUserUtil.getCurrentUser().getId(); }

    /** GET /api/persetujuan-foto-profil?status=MENUNGGU&cari= */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<PersetujuanFotoProfilDTO>>>> findAll(
            @RequestParam(defaultValue = "MENUNGGU") String status,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("persetujuan", service.findByStatus(status, cari, userId()))));
    }

    /** POST /api/persetujuan-foto-profil/ajukan — multipart upload foto baru */
    @PostMapping(value = "/ajukan", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, PersetujuanFotoProfilDTO>>> ajukan(
            @RequestParam Long karyawanId,
            @RequestParam("foto") MultipartFile foto) throws IOException {
        String path = savePhoto(foto);
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("persetujuan", service.ajukan(karyawanId, path, userId()))));
    }

    /** PATCH /api/persetujuan-foto-profil/{id}/setujui */
    @PatchMapping("/{id}/setujui")
    public ResponseEntity<JsendResponse<Map<String, PersetujuanFotoProfilDTO>>> setujui(
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("persetujuan", service.setujui(id, userId()))));
    }

    /** PATCH /api/persetujuan-foto-profil/{id}/tolak */
    @PatchMapping("/{id}/tolak")
    public ResponseEntity<JsendResponse<Map<String, PersetujuanFotoProfilDTO>>> tolak(
            @PathVariable Long id,
            @RequestBody(required = false) Map<String, String> body) {
        String catatan = body != null ? body.get("catatanPenolakan") : null;
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("persetujuan", service.tolak(id, catatan, userId()))));
    }

    /** DELETE /api/persetujuan-foto-profil/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> hapus(@PathVariable Long id) {
        service.hapus(id, userId());
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Helper upload ────────────────────────────────────────
    private String savePhoto(MultipartFile foto) throws IOException {
        String ext  = StringUtils.getFilenameExtension(foto.getOriginalFilename());
        String name = UUID.randomUUID() + (ext != null ? "." + ext : ".jpg");
        Path dir    = Paths.get(UPLOAD_DIR);
        if (!Files.exists(dir)) Files.createDirectories(dir);
        Files.copy(foto.getInputStream(), dir.resolve(name), StandardCopyOption.REPLACE_EXISTING);
        return UPLOAD_DIR + name;
    }
}
