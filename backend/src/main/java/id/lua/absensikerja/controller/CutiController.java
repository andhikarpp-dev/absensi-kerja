package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.*;
import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.service.CutiService;
import id.lua.absensikerja.service.PembaruanCutiScheduler;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/karyawan/{karyawanId}/cuti")
@RequiredArgsConstructor
public class CutiController {

    private final CutiService cutiService;
    private final PembaruanCutiScheduler pembaruanCutiScheduler;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<CutiDTO>>>> getAll(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) JenisCuti jenis,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String filter) {
        List<CutiDTO> list = cutiService.findByKaryawan(karyawanId, status, jenis, from, to, filter);
        return ResponseEntity.ok(JsendResponse.success(Map.of("cuti", list)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, CutiDTO>>> getById(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("cuti", cutiService.findById(id))));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, CutiDTO>>> create(
            @PathVariable Long karyawanId,
            @RequestPart("data") CutiRequest req,
            @RequestPart(value = "lampiran", required = false) MultipartFile lampiran) throws IOException {
        CutiDTO dto = cutiService.create(karyawanId, req, lampiran);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("cuti", dto)));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, CutiDTO>>> update(
            @PathVariable Long karyawanId, @PathVariable Long id,
            @RequestPart("data") CutiRequest req,
            @RequestPart(value = "lampiran", required = false) MultipartFile lampiran) throws IOException {
        CutiDTO dto = cutiService.update(id, req, lampiran);
        return ResponseEntity.ok(JsendResponse.success(Map.of("cuti", dto)));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, CutiDTO>>> updateStatus(
            @PathVariable Long karyawanId, @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusIzin status = StatusIzin.valueOf(body.get("status"));
        String catatan    = body.get("catatanPenolakan");
        CutiDTO dto       = cutiService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("cuti", dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        cutiService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    @GetMapping("/{id}/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<CutiRiwayatDTO>>>> getRiwayat(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("riwayat", cutiService.findRiwayat(id))));
    }

    @GetMapping("/sisa")
    public ResponseEntity<JsendResponse<Map<String, SisaCutiDTO>>> getSisa(@PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("sisaCuti", cutiService.getSisaCuti(karyawanId))));
    }

    @PatchMapping("/sisa")
    public ResponseEntity<JsendResponse<Map<String, SisaCutiDTO>>> updateSisa(
            @PathVariable Long karyawanId, @RequestBody UpdateSisaCutiRequest req) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("sisaCuti", cutiService.updateSisaCuti(karyawanId, req))));
    }

    /** Trigger manual scheduler pembaruan cuti otomatis untuk karyawan ini. */
    @PostMapping("/sisa/trigger-pembaruan")
    public ResponseEntity<JsendResponse<Map<String, Object>>> triggerPembaruan(
            @PathVariable Long karyawanId) {
        boolean applied = pembaruanCutiScheduler.triggerManual(karyawanId);
        SisaCutiDTO sisa = cutiService.getSisaCuti(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of(
                "applied", applied,
                "sisaCuti", sisa
        )));
    }

    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) JenisCuti jenis,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) throws IOException {
        byte[] bytes = cutiService.exportExcel(karyawanId, status, jenis, from, to);
        String filename = "cuti-" + LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE) + ".xlsx";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
