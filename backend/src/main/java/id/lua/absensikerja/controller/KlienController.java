package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KlienDTO;
import id.lua.absensikerja.model.dto.KlienRequest;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.KlienService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * CRUD Klien — hanya ADMIN & PEMILIK.
 * Base URL: /api/klien
 */
@RestController
@RequestMapping("/api/klien")
@RequiredArgsConstructor
public class KlienController {

    private final KlienService         klienService;
    private final PerusahaanRepository perusahaanRepository;
    private final AuthUserUtil         authUserUtil;

    private Long resolvePerusahaanId() {
        User user = authUserUtil.getCurrentUser();
        if (user.getRole() != null && user.getRole().getName() == RoleType.PEMILIK) {
            return perusahaanRepository.findFirstByOwnerIdOrderByIdAsc(user.getId())
                    .map(Perusahaan::getId).orElse(null);
        }
        return null;
    }

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<KlienDTO>>>> getAll() {
        Long perusahaanId = resolvePerusahaanId();
        List<KlienDTO> list = klienService.findAll(perusahaanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("klien", list)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, KlienDTO>>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("klien", klienService.findById(id))));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, KlienDTO>>> create(@Valid @RequestBody KlienRequest req) {
        Long perusahaanId = resolvePerusahaanId();
        KlienDTO dto = klienService.create(perusahaanId, req);
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(Map.of("klien", dto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, KlienDTO>>> update(
            @PathVariable Long id, @Valid @RequestBody KlienRequest req) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("klien", klienService.update(id, req))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        klienService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
