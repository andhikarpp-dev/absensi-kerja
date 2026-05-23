package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JabatanDTO;
import id.lua.absensikerja.model.dto.JabatanRequest;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.service.JabatanService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/jabatan")
@RequiredArgsConstructor
public class JabatanController {

    private final JabatanService jabatanService;
    private final AuthUserUtil   authUserUtil;

    /**
     * PEMILIK → selalu return userId-nya (punya perusahaan langsung).
     * ADMIN   → return userId juga, PerusahaanRepository.findByOwnerId akan null
     *           sehingga service fallback ke global.
     * Intinya: selalu pass userId, biarkan service yang memutuskan scope.
     */
    private Long callerUserId() {
        return authUserUtil.getCurrentUser().getId();
    }

    /** GET /api/jabatan */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<JabatanDTO>>>> findAll() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jabatan", jabatanService.findAll(callerUserId()))));
    }

    /** GET /api/jabatan/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JabatanDTO>>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("jabatan", jabatanService.findById(id))));
    }

    /** POST /api/jabatan */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, JabatanDTO>>> create(
            @Valid @RequestBody JabatanRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(
                        Map.of("jabatan", jabatanService.create(request, callerUserId()))));
    }

    /** PUT /api/jabatan/{id} */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JabatanDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody JabatanRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jabatan", jabatanService.update(id, request, callerUserId()))));
    }

    /** DELETE /api/jabatan/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        jabatanService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
