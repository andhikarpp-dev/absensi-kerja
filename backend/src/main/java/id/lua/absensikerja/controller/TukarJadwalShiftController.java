package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.TukarJadwalShiftDTO;
import id.lua.absensikerja.model.enums.StatusTukarJadwalShift;
import id.lua.absensikerja.service.TukarJadwalShiftEksporService;
import id.lua.absensikerja.service.TukarJadwalShiftService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tukar-jadwal-shift")
@RequiredArgsConstructor
public class TukarJadwalShiftController {

    private final TukarJadwalShiftService      service;
    private final TukarJadwalShiftEksporService eksporService;
    private final AuthUserUtil                 authUserUtil;

    private Long userId() { return authUserUtil.getCurrentUser().getId(); }

    /**
     * GET /api/tukar-jadwal-shift?status=&divisiId=&dari=&sampai=&search=
     */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<TukarJadwalShiftDTO>>>> findAll(
            @RequestParam(required = false) StatusTukarJadwalShift status,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", service.findAll(status, divisiId, dari, sampai, search, userId()))));
    }

    /**
     * PUT /api/tukar-jadwal-shift/{id}/setuju
     */
    @PutMapping("/{id}/setuju")
    public ResponseEntity<JsendResponse<Map<String, TukarJadwalShiftDTO>>> setujui(@PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", service.setujui(id, userId()))));
    }

    /**
     * PUT /api/tukar-jadwal-shift/{id}/tolak
     */
    @PutMapping("/{id}/tolak")
    public ResponseEntity<JsendResponse<Map<String, TukarJadwalShiftDTO>>> tolak(
            @PathVariable Long id,
            @RequestBody(required = false) Map<String, String> body) {
        String catatan = body != null ? body.get("catatan") : null;
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", service.tolak(id, catatan, userId()))));
    }

    /**
     * GET /api/tukar-jadwal-shift/ekspor-excel
     */
    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @RequestParam(required = false) StatusTukarJadwalShift status,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) String search) throws IOException {

        List<TukarJadwalShiftDTO> data = service.findAll(status, divisiId, dari, sampai, search, userId());
        byte[] bytes = eksporService.generate(data);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDispositionFormData("attachment", "rekap-tukar-jadwal-shift.xlsx");
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
