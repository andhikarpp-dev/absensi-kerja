package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.IzinJamDTO;
import id.lua.absensikerja.model.dto.IzinJamRequest;
import id.lua.absensikerja.model.dto.IzinJamRiwayatDTO;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.service.IzinJamService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

/**
 * REST controller untuk CRUD Izin Jam karyawan.
 *
 * Base URL: /api/karyawan/{karyawanId}/izin-jam
 */
@RestController
@RequestMapping("/api/karyawan/{karyawanId}/izin-jam")
@RequiredArgsConstructor
public class IzinJamController {

    private final IzinJamService izinJamService;

    /**
     * GET /api/karyawan/{karyawanId}/izin-jam
     * Query params: status, from (YYYY-MM-DD), to (YYYY-MM-DD)
     */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<IzinJamDTO>>>> getAll(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {

        List<IzinJamDTO> list = izinJamService.findByKaryawan(karyawanId, status, from, to);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinJam", list)));
    }

    /**
     * GET /api/karyawan/{karyawanId}/izin-jam/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, IzinJamDTO>>> getById(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        IzinJamDTO dto = izinJamService.findById(id);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinJam", dto)));
    }

    /**
     * POST /api/karyawan/{karyawanId}/izin-jam
     */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, IzinJamDTO>>> create(
            @PathVariable Long karyawanId,
            @Valid @RequestBody IzinJamRequest req) {
        IzinJamDTO dto = izinJamService.create(karyawanId, req);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("izinJam", dto)));
    }

    /**
     * PUT /api/karyawan/{karyawanId}/izin-jam/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, IzinJamDTO>>> update(
            @PathVariable Long karyawanId,
            @PathVariable Long id,
            @Valid @RequestBody IzinJamRequest req) {
        IzinJamDTO dto = izinJamService.update(id, req);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinJam", dto)));
    }

    /**
     * PATCH /api/karyawan/{karyawanId}/izin-jam/{id}/status
     * Body: { "status": "DISETUJUI", "catatanPenolakan": "..." }
     */
    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, IzinJamDTO>>> updateStatus(
            @PathVariable Long karyawanId,
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusIzin status = StatusIzin.valueOf(body.get("status"));
        String catatan    = body.get("catatanPenolakan");
        IzinJamDTO dto    = izinJamService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinJam", dto)));
    }

    /**
     * GET /api/karyawan/{karyawanId}/izin-jam/{id}/riwayat
     */
    @GetMapping("/{id}/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<IzinJamRiwayatDTO>>>> getRiwayat(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        List<IzinJamRiwayatDTO> list = izinJamService.findRiwayat(id);
        return ResponseEntity.ok(JsendResponse.success(Map.of("riwayat", list)));
    }

    /**
     * GET /api/karyawan/{karyawanId}/izin-jam/ekspor-excel
     */
    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @PathVariable Long karyawanId,
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to)
            throws IOException {

        byte[] bytes = izinJamService.exportExcel(karyawanId, status, from, to);
        String filename = "izin-jam-" + LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")) + ".xlsx";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        headers.setContentLength(bytes.length);

        return new ResponseEntity<>(bytes, headers, HttpStatus.OK);
    }

    /**
     * DELETE /api/karyawan/{karyawanId}/izin-jam/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(
            @PathVariable Long karyawanId,
            @PathVariable Long id) {
        izinJamService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
