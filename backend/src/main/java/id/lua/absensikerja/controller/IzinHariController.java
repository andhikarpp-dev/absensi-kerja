package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.IzinHariDTO;
import id.lua.absensikerja.model.dto.IzinHariRequest;
import id.lua.absensikerja.model.dto.IzinHariRiwayatDTO;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.service.IzinHariService;
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

/**
 * REST controller untuk CRUD Izin Hari karyawan.
 * Base URL: /api/karyawan/{karyawanId}/izin-hari
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/izin-hari")
@RequiredArgsConstructor
public class IzinHariController {

    private final IzinHariService izinHariService;

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<IzinHariDTO>>>> getAll(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String filter) {

        List<IzinHariDTO> list = izinHariService.findByKaryawan(karyawanId, status, from, to, filter);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinHari", list)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, IzinHariDTO>>> getById(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinHari", izinHariService.findById(id))));
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, IzinHariDTO>>> create(
            @PathVariable Long karyawanId,
            @RequestPart("data") IzinHariRequest req,
            @RequestPart(value = "lampiran", required = false) MultipartFile lampiran) throws IOException {
        IzinHariDTO dto = izinHariService.create(karyawanId, req, lampiran);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("izinHari", dto)));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, IzinHariDTO>>> update(
            @PathVariable Long karyawanId,
            @PathVariable Long id,
            @RequestPart("data") IzinHariRequest req,
            @RequestPart(value = "lampiran", required = false) MultipartFile lampiran) throws IOException {
        IzinHariDTO dto = izinHariService.update(id, req, lampiran);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinHari", dto)));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, IzinHariDTO>>> updateStatus(
            @PathVariable Long karyawanId,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusIzin status  = StatusIzin.valueOf(body.get("status"));
        String catatan     = body.get("catatanPenolakan");
        IzinHariDTO dto    = izinHariService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinHari", dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        izinHariService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    @GetMapping("/{id}/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<IzinHariRiwayatDTO>>>> getRiwayat(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("riwayat", izinHariService.findRiwayat(id))));
    }

    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) throws IOException {

        byte[] bytes = izinHariService.exportExcel(karyawanId, status, from, to);
        String filename = "izin-hari-" + LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE) + ".xlsx";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
