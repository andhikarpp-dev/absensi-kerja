package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.*;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.JadwalShiftImporService;
import id.lua.absensikerja.service.JadwalShiftService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.YearMonth;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/jadwal-shift")
@RequiredArgsConstructor
public class JadwalShiftController {

    private static final String XLSX_MIME =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    private final JadwalShiftService      jadwalShiftService;
    private final JadwalShiftImporService jadwalShiftImporService;
    private final PerusahaanRepository    perusahaanRepository;
    private final AuthUserUtil            authUserUtil;

    private Long resolveOwnerId() {
        User user = authUserUtil.getCurrentUser();
        return user.getRole().getName() == RoleType.PEMILIK ? user.getId() : null;
    }

    private Long resolvePerusahaanId() {
        Long ownerId = resolveOwnerId();
        if (ownerId == null) return null;
        return perusahaanRepository.findByOwnerId(ownerId).map(Perusahaan::getId).orElse(null);
    }

    /** GET /api/jadwal-shift?bulan=2026-04&divisiId=&search= */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, JadwalShiftMatrixDTO>>> getMatrix(
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM") YearMonth bulan,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("matrix", jadwalShiftService.getMatrix(bulan, divisiId, search, resolveOwnerId()))));
    }

    /** GET /api/jadwal-shift/karyawan?divisiId=&search= */
    @GetMapping("/karyawan")
    public ResponseEntity<JsendResponse<Map<String, List<KaryawanShiftDTO>>>> getKaryawan(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("karyawan", jadwalShiftService.findEligibleKaryawan(divisiId, search, resolveOwnerId()))));
    }

    /** GET /api/jadwal-shift/shift-options */
    @GetMapping("/shift-options")
    public ResponseEntity<JsendResponse<Map<String, List<PolaKerjaDTO>>>> getShiftOptions() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("shiftOptions", jadwalShiftService.findShiftOptions(resolveOwnerId()))));
    }

    /** POST /api/jadwal-shift — upsert satu sel jadwal */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, JadwalShiftDTO>>> upsert(
            @Valid @RequestBody JadwalShiftRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("jadwalShift", jadwalShiftService.upsert(request, resolveOwnerId()))));
    }

    /** POST /api/jadwal-shift/batch — assign massal */
    @PostMapping("/batch")
    public ResponseEntity<JsendResponse<Map<String, List<JadwalShiftDTO>>>> batch(
            @Valid @RequestBody JadwalShiftBatchRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jadwalShift", jadwalShiftService.batchAssign(request, resolveOwnerId()))));
    }

    /** POST /api/jadwal-shift/copy-week — salin minggu sumber ke minggu tujuan */
    @PostMapping("/copy-week")
    public ResponseEntity<JsendResponse<Map<String, Integer>>> copyWeek(
            @Valid @RequestBody CopyJadwalShiftRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("jumlah", jadwalShiftService.copyWeek(request, resolveOwnerId()))));
    }

    /** GET /api/jadwal-shift/template?bulan=YYYY-MM — download Excel template impor jadwal shift. */
    @GetMapping("/template")
    public ResponseEntity<byte[]> downloadTemplate(
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM") YearMonth bulan
    ) throws IOException {
        byte[] bytes = jadwalShiftImporService.buatTemplate(bulan, resolvePerusahaanId());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(XLSX_MIME));
        headers.setContentDisposition(ContentDisposition.attachment()
                .filename("format-impor-jadwal-shift.xlsx").build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }

    /** POST /api/jadwal-shift/impor — proses file Excel jadwal shift. */
    @PostMapping(value = "/impor", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, ImporJadwalShiftResult>>> impor(
            @RequestParam("file") MultipartFile file) throws IOException {
        ImporJadwalShiftResult result = jadwalShiftImporService.prosesImpor(file, resolvePerusahaanId());
        return ResponseEntity.ok(JsendResponse.success(Map.of("hasil", result)));
    }

    /** GET /api/jadwal-shift/ekspor?bulan=YYYY-MM&divisiId=&search= — ekspor jadwal shift ke Excel. */
    @GetMapping("/ekspor")
    public ResponseEntity<byte[]> eksporExcel(
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM") YearMonth bulan,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String search
    ) throws IOException {
        byte[] bytes = jadwalShiftImporService.eksporJadwal(
                bulan, resolvePerusahaanId(), divisiId, search);
        String suffix = bulan != null ? "-" + bulan.toString() : "";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(XLSX_MIME));
        headers.setContentDisposition(ContentDisposition.attachment()
                .filename("jadwal-shift" + suffix + ".xlsx").build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }

    /** DELETE /api/jadwal-shift/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        jadwalShiftService.delete(id, resolveOwnerId());
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
