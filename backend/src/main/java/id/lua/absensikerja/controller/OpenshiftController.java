package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.ImporOpenshiftResult;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.OpenshiftDTO;
import id.lua.absensikerja.model.dto.OpenshiftRequest;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.service.OpenshiftService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/openshift")
@RequiredArgsConstructor
public class OpenshiftController {

    private final OpenshiftService openshiftService;
    private final AuthUserUtil     authUserUtil;

    private Long resolveOwnerId() {
        User user = authUserUtil.getCurrentUser();
        return user.getRole().getName() == RoleType.PEMILIK ? user.getId() : null;
    }

    /** GET /api/openshift?mulai=YYYY-MM-DD&selesai=YYYY-MM-DD&divisiId=1 */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<OpenshiftDTO>>>> findAll(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate mulai,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate selesai,
            @RequestParam(required = false) Long divisiId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("openshift", openshiftService.findAll(resolveOwnerId(), mulai, selesai, divisiId))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, OpenshiftDTO>>> findById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("openshift", openshiftService.findById(id))));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, OpenshiftDTO>>> create(
            @Valid @RequestBody OpenshiftRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("openshift", openshiftService.create(req, resolveOwnerId()))));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, OpenshiftDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody OpenshiftRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("openshift", openshiftService.update(id, req))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        openshiftService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** POST /api/openshift/import (multipart/form-data, field name: file) */
    @PostMapping(value = "/import", consumes = "multipart/form-data")
    public ResponseEntity<JsendResponse<Map<String, ImporOpenshiftResult>>> importCsv(
            @RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("hasil", openshiftService.importCsv(file, resolveOwnerId()))));
    }
}
