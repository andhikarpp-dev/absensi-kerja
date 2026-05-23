package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JenisPeringatanDTO;
import id.lua.absensikerja.model.dto.JenisPeringatanRequest;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.service.JenisPeringatanService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/jenis-peringatan")
@RequiredArgsConstructor
public class JenisPeringatanController {

    private final JenisPeringatanService service;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<JenisPeringatanDTO>>>> getAll(
            @RequestParam(required = false, defaultValue = "false") boolean aktifSaja) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jenisPeringatan", service.findAll(aktifSaja))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JenisPeringatanDTO>>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jenisPeringatan", service.findById(id))));
    }

    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, JenisPeringatanDTO>>> create(
            @Valid @RequestBody JenisPeringatanRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("jenisPeringatan", service.create(req))));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, JenisPeringatanDTO>>> update(
            @PathVariable Long id, @Valid @RequestBody JenisPeringatanRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jenisPeringatan", service.update(id, req))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
