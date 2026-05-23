package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.SuratPeringatanDTO;
import id.lua.absensikerja.model.dto.SuratPeringatanRequest;
import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import id.lua.absensikerja.model.enums.StatusSuratPeringatan;
import id.lua.absensikerja.service.SuratPeringatanService;
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
@RequestMapping("/api/karyawan/{karyawanId}/surat-peringatan")
@RequiredArgsConstructor
public class SuratPeringatanController {

    private final SuratPeringatanService service;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<SuratPeringatanDTO>>>> getAll(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusSuratPeringatan status,
            @RequestParam(required = false) StatusPersetujuanSP statusPersetujuan,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String filter) {
        return ResponseEntity.ok(JsendResponse.success(Map.of(
                "suratPeringatan",
                service.findByKaryawan(karyawanId, status, statusPersetujuan, from, to, filter))));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, SuratPeringatanDTO>>> getById(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("suratPeringatan", service.findById(id))));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, SuratPeringatanDTO>>> create(
            @PathVariable Long karyawanId,
            @RequestPart("data") SuratPeringatanRequest req,
            @RequestPart(value = "dokumen", required = false) MultipartFile dokumen) throws IOException {
        SuratPeringatanDTO dto = service.create(karyawanId, req, dokumen);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("suratPeringatan", dto)));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, SuratPeringatanDTO>>> update(
            @PathVariable Long karyawanId, @PathVariable Long id,
            @RequestPart("data") SuratPeringatanRequest req,
            @RequestPart(value = "dokumen", required = false) MultipartFile dokumen) throws IOException {
        SuratPeringatanDTO dto = service.update(id, req, dokumen);
        return ResponseEntity.ok(JsendResponse.success(Map.of("suratPeringatan", dto)));
    }

    @PatchMapping("/{id}/persetujuan")
    public ResponseEntity<JsendResponse<Map<String, SuratPeringatanDTO>>> updatePersetujuan(
            @PathVariable Long karyawanId, @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusPersetujuanSP status = StatusPersetujuanSP.valueOf(body.get("status"));
        String catatan = body.get("catatan");
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("suratPeringatan", service.updateStatusPersetujuan(id, status, catatan))));
    }

    @PatchMapping("/{id}/cabut")
    public ResponseEntity<JsendResponse<Map<String, SuratPeringatanDTO>>> cabut(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("suratPeringatan", service.cabut(id))));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(
            @PathVariable Long karyawanId, @PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusSuratPeringatan status,
            @RequestParam(required = false) StatusPersetujuanSP statusPersetujuan,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to)
            throws IOException {
        byte[] bytes = service.exportExcel(karyawanId, status, statusPersetujuan, from, to);
        String filename = "surat-peringatan-"
                + LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE) + ".xlsx";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
