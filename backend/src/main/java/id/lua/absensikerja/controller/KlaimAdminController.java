package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KlaimDTO;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.StatusKlaim;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.KlaimService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Admin / Pemilik overview untuk Klaim lintas karyawan.
 * Base URL: /api/klaim
 */
@RestController
@RequestMapping("/api/klaim")
@RequiredArgsConstructor
public class KlaimAdminController {

    private final KlaimService         klaimService;
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
    public ResponseEntity<JsendResponse<Map<String, Object>>> getAll(
            @RequestParam(required = false) StatusKlaim status,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String cari) {

        Long perusahaanId = resolvePerusahaanId();
        List<KlaimDTO> list = klaimService.findAllAdmin(perusahaanId, status, divisiId, from, to, cari);
        long totalMenunggu = list.stream().filter(k -> k.getStatus() == StatusKlaim.MENUNGGU).count();

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("klaim", list);
        result.put("totalMenunggu", totalMenunggu);
        return ResponseEntity.ok(JsendResponse.success(result));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, KlaimDTO>>> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusKlaim status    = StatusKlaim.valueOf(body.get("status"));
        String catatan        = body.get("catatanPenolakan");
        KlaimDTO dto          = klaimService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("klaim", dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        klaimService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
