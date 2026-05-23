package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KunjunganKlienDTO;
import id.lua.absensikerja.model.dto.KunjunganKlienRequest;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.KunjunganKlienService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

/**
 * CRUD Kunjungan Klien — hanya ADMIN & PEMILIK.
 * Base URL: /api/kunjungan-klien
 */
@RestController
@RequestMapping("/api/kunjungan-klien")
@RequiredArgsConstructor
public class KunjunganKlienController {

    private final KunjunganKlienService kunjunganService;
    private final PerusahaanRepository  perusahaanRepository;
    private final AuthUserUtil          authUserUtil;

    private Long resolvePerusahaanId() {
        User user = authUserUtil.getCurrentUser();
        if (user.getRole() != null && user.getRole().getName() == RoleType.PEMILIK) {
            return perusahaanRepository.findFirstByOwnerIdOrderByIdAsc(user.getId())
                    .map(Perusahaan::getId).orElse(null);
        }
        return null;
    }

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<KunjunganKlienDTO>>>> getAll(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) Long klienId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String cari) {

        Long perusahaanId = resolvePerusahaanId();
        List<KunjunganKlienDTO> list = kunjunganService.findAll(perusahaanId, divisiId, klienId, from, to, cari);
        return ResponseEntity.ok(JsendResponse.success(Map.of("kunjungan", list)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, KunjunganKlienDTO>>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("kunjungan", kunjunganService.findById(id))));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, KunjunganKlienDTO>>> create(
            @RequestBody KunjunganKlienRequest req) {
        Long perusahaanId = resolvePerusahaanId();
        KunjunganKlienDTO dto = kunjunganService.create(perusahaanId, req);
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(Map.of("kunjungan", dto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, KunjunganKlienDTO>>> update(
            @PathVariable Long id, @RequestBody KunjunganKlienRequest req) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("kunjungan", kunjunganService.update(id, req))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        kunjunganService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
