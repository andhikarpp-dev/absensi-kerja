package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JenisKlaimKonfigurasiDTO;
import id.lua.absensikerja.model.dto.JenisKlaimKonfigurasiRequest;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.JenisKlaimKonfigurasiService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * CRUD Jenis Klaim (konfigurasi per perusahaan).
 * Base URL: /api/jenis-klaim
 */
@RestController
@RequestMapping("/api/jenis-klaim")
@RequiredArgsConstructor
public class JenisKlaimKonfigurasiController {

    private final JenisKlaimKonfigurasiService service;
    private final PerusahaanRepository         perusahaanRepository;
    private final AuthUserUtil                 authUserUtil;

    private Long resolvePerusahaanId() {
        User user = authUserUtil.getCurrentUser();
        if (user.getRole() != null && user.getRole().getName() == RoleType.PEMILIK) {
            return perusahaanRepository.findFirstByOwnerIdOrderByIdAsc(user.getId())
                    .map(Perusahaan::getId).orElse(null);
        }
        return null;
    }

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<JenisKlaimKonfigurasiDTO>>>> getAll() {
        Long perusahaanId = resolvePerusahaanId();
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jenisKlaim", service.findAll(perusahaanId))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JenisKlaimKonfigurasiDTO>>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jenisKlaim", service.findById(id))));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, JenisKlaimKonfigurasiDTO>>> create(
            @Valid @RequestBody JenisKlaimKonfigurasiRequest req) {
        Long perusahaanId = resolvePerusahaanId();
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("jenisKlaim", service.create(req, perusahaanId))));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JenisKlaimKonfigurasiDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody JenisKlaimKonfigurasiRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jenisKlaim", service.update(id, req))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
