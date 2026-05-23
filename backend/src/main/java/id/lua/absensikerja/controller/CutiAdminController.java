package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.CutiDTO;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.entity.Cuti;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.JenisCuti;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.repository.CutiRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.CutiService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Admin / Pemilik overview untuk Cuti lintas karyawan.
 * Base URL: /api/cuti
 */
@RestController
@RequestMapping("/api/cuti")
@RequiredArgsConstructor
public class CutiAdminController {

    private final CutiService          cutiService;
    private final CutiRepository       cutiRepository;
    private final PerusahaanRepository perusahaanRepository;
    private final AuthUserUtil         authUserUtil;

    private Long resolvePerusahaanId() {
        User user = authUserUtil.getCurrentUser();
        if (user.getRole() != null && user.getRole().getName() == RoleType.PEMILIK) {
            return perusahaanRepository.findFirstByOwnerIdOrderByIdAsc(user.getId())
                    .map(Perusahaan::getId).orElse(null);
        }
        // ADMIN: return null — queries all data (same as IzinHariAdminController)
        return null;
    }

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> getAll(
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) JenisCuti jenis,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) String filter,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {

        Long perusahaanId = resolvePerusahaanId();
        LocalDate today = LocalDate.now();

        if ("HARI_INI".equals(filter))    { from = today;               to = today;              }
        else if ("BESOK".equals(filter))  { from = today.plusDays(1);   to = today.plusDays(1);  }
        else if ("7_HARI".equals(filter)) { from = today;               to = today.plusDays(7);  }

        List<CutiDTO> list = cutiService.findAllAdmin(perusahaanId, status, jenis, from, to, divisiId, cari);

        long pending = list.stream().filter(d -> d.getStatus() == StatusIzin.MENUNGGU).count();
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("cuti", list);
        result.put("totalMenunggu", pending);
        return ResponseEntity.ok(JsendResponse.success(result));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, CutiDTO>>> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusIzin status = StatusIzin.valueOf(body.get("status"));
        String catatan    = body.get("catatanPenolakan");
        CutiDTO dto       = cutiService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("cuti", dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        cutiService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) JenisCuti jenis,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) throws IOException {
        Long perusahaanId = resolvePerusahaanId();
        List<Cuti> list;
        if (perusahaanId != null) {
            list = cutiRepository.searchAdmin(perusahaanId, status, jenis, from, to);
        } else {
            final StatusIzin fStatus = status;
            final JenisCuti fJenis = jenis;
            final LocalDate fFrom = from;
            final LocalDate fTo = to;
            list = cutiRepository.findAll().stream()
                .filter(c -> fStatus == null || c.getStatus() == fStatus)
                .filter(c -> fJenis == null || c.getJenisCuti() == fJenis)
                .filter(c -> fFrom == null || !c.getTanggalSelesai().isBefore(fFrom))
                .filter(c -> fTo == null || !c.getTanggalMulai().isAfter(fTo))
                .collect(java.util.stream.Collectors.toList());
        }
        byte[] bytes = cutiService.exportExcelFromList(list);
        String filename = "cuti-" + LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE) + ".xlsx";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
