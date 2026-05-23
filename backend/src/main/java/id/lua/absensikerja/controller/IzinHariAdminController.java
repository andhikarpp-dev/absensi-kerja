package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.IzinHariDTO;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.entity.IzinHari;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.repository.IzinHariRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.IzinHariService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Admin / Pemilik overview untuk Izin Hari lintas karyawan.
 * Base URL: /api/izin-hari
 */
@RestController
@RequestMapping("/api/izin-hari")
@RequiredArgsConstructor
public class IzinHariAdminController {

    private final IzinHariRepository   izinHariRepository;
    private final PerusahaanRepository perusahaanRepository;
    private final IzinHariService      izinHariService;
    private final AuthUserUtil         authUserUtil;

    @Value("${app.base-url:http://localhost:8192/absensikerja}")
    private String baseUrl;

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
            @RequestParam(required = false) StatusIzin status,
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

        List<IzinHari> list;
        if (perusahaanId != null) {
            if (status != null && from != null && to != null)
                list = izinHariRepository.findByPerusahaanIdAndStatusAndTanggalBetween(perusahaanId, status, from, to);
            else if (status != null)
                list = izinHariRepository.findByPerusahaanIdAndStatus(perusahaanId, status);
            else if (from != null && to != null)
                list = izinHariRepository.findByPerusahaanIdAndTanggalBetween(perusahaanId, from, to);
            else
                list = izinHariRepository.findByPerusahaanId(perusahaanId);
        } else {
            list = izinHariRepository.findAll();
        }

        final Long fDivisiId = divisiId;
        final String fCari   = (cari != null ? cari.toLowerCase() : null);
        if (fDivisiId != null)
            list = list.stream().filter(i ->
                    i.getKaryawan().getDivisi() != null &&
                    fDivisiId.equals(i.getKaryawan().getDivisi().getId()))
                    .collect(Collectors.toList());
        if (fCari != null && !fCari.isBlank())
            list = list.stream().filter(i ->
                    i.getKaryawan().getNamaLengkap().toLowerCase().contains(fCari) ||
                    (i.getKeperluan() != null && i.getKeperluan().toLowerCase().contains(fCari)))
                    .collect(Collectors.toList());

        List<IzinHariDTO> dtoList = list.stream().map(i -> {
            Karyawan k = i.getKaryawan();
            String lampiranFullUrl = (i.getLampiranUrl() != null) ? baseUrl + "/" + i.getLampiranUrl() : null;
            String fotoProfilUrl   = (k.getFotoProfil() != null && !k.getFotoProfil().isBlank())
                    ? baseUrl + "/" + k.getFotoProfil() : null;
            return IzinHariDTO.builder()
                    .id(i.getId()).karyawanId(k.getId())
                    .namaKaryawan(k.getNamaLengkap())
                    .namaDivisi(k.getDivisi()   != null ? k.getDivisi().getNamaDivisi()   : null)
                    .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                    .fotoProfil(fotoProfilUrl)
                    .zonaWaktu(k.getPerusahaan() != null && k.getPerusahaan().getZonaWaktu() != null
                            ? k.getPerusahaan().getZonaWaktu().name() : null)
                    .tanggalList(new ArrayList<>(i.getTanggalList()))
                    .keperluan(i.getKeperluan())
                    .mengurangiGaji(i.isMengurangiGaji())
                    .lampiranUrl(lampiranFullUrl)
                    .status(i.getStatus())
                    .catatanPenolakan(i.getCatatanPenolakan())
                    .createdAt(i.getCreatedAt()).updatedAt(i.getUpdatedAt())
                    .build();
        }).collect(Collectors.toList());

        long pending = dtoList.stream().filter(d -> d.getStatus() == StatusIzin.MENUNGGU).count();
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("izinHari", dtoList);
        result.put("totalMenunggu", pending);
        return ResponseEntity.ok(JsendResponse.success(result));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, IzinHariDTO>>> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusIzin status  = StatusIzin.valueOf(body.get("status"));
        String catatan     = body.get("catatanPenolakan");
        IzinHariDTO dto    = izinHariService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinHari", dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        izinHariService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) throws IOException {
        // Re-use: export for the first karyawan found matching criteria (simple approach: return empty if none)
        // For admin: we query all and build export manually - delegate to service via a workaround
        // We'll build a basic response here; a full export can be added later
        Long perusahaanId = resolvePerusahaanId();
        List<IzinHari> list;
        if (perusahaanId != null) {
            if (status != null && from != null && to != null)
                list = izinHariRepository.findByPerusahaanIdAndStatusAndTanggalBetween(perusahaanId, status, from, to);
            else if (status != null)
                list = izinHariRepository.findByPerusahaanIdAndStatus(perusahaanId, status);
            else if (from != null && to != null)
                list = izinHariRepository.findByPerusahaanIdAndTanggalBetween(perusahaanId, from, to);
            else
                list = izinHariRepository.findByPerusahaanId(perusahaanId);
        } else {
            list = izinHariRepository.findAll();
        }

        byte[] bytes = izinHariService.exportExcelFromList(list);
        String filename = "izin-hari-" + LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE) + ".xlsx";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
