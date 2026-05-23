package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.IzinJamDTO;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.entity.IzinJam;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.StatusIzin;
import id.lua.absensikerja.repository.IzinJamRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.service.IzinJamService;
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
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Admin / Pemilik overview untuk Izin Jam lintas karyawan.
 * Base URL: /api/izin-jam
 */
@RestController
@RequestMapping("/api/izin-jam")
@RequiredArgsConstructor
public class IzinJamAdminController {

    private final IzinJamRepository    izinJamRepository;
    private final PerusahaanRepository perusahaanRepository;
    private final IzinJamService       izinJamService;
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

    private List<IzinJam> queryList(StatusIzin status, LocalDate from, LocalDate to,
                                    Long divisiId, String cari,
                                    Boolean dapatMengganti, Boolean kenaPotong, Boolean kenaDenda) {
        Long perusahaanId = resolvePerusahaanId();
        List<IzinJam> list;
        if (perusahaanId != null) {
            if (status != null && from != null && to != null)
                list = izinJamRepository.findByPerusahaanIdAndStatusAndTanggalBetween(perusahaanId, status, from, to);
            else if (status != null)
                list = izinJamRepository.findByPerusahaanIdAndStatus(perusahaanId, status);
            else if (from != null && to != null)
                list = izinJamRepository.findByPerusahaanIdAndTanggalBetween(perusahaanId, from, to);
            else
                list = izinJamRepository.findByPerusahaanId(perusahaanId);
        } else {
            list = izinJamRepository.findAll();
            if (status != null)             list = list.stream().filter(i -> i.getStatus() == status).collect(Collectors.toList());
            if (from != null && to != null) list = list.stream().filter(i -> {
                LocalDate t = i.getTanggalMulai();
                return t != null && !t.isBefore(from) && !t.isAfter(to);
            }).collect(Collectors.toList());
        }

        if (divisiId != null)
            list = list.stream().filter(i ->
                    i.getKaryawan().getDivisi() != null
                    && divisiId.equals(i.getKaryawan().getDivisi().getId()))
                    .collect(Collectors.toList());

        if (cari != null && !cari.isBlank()) {
            String c = cari.toLowerCase();
            list = list.stream().filter(i ->
                    i.getKaryawan().getNamaLengkap().toLowerCase().contains(c) ||
                    (i.getKeperluan() != null && i.getKeperluan().toLowerCase().contains(c)))
                    .collect(Collectors.toList());
        }

        if (dapatMengganti != null)
            list = list.stream().filter(i -> i.isDapatMengganti() == dapatMengganti).collect(Collectors.toList());
        if (kenaPotong != null)
            list = list.stream().filter(i -> i.isKenaPotong() == kenaPotong).collect(Collectors.toList());
        if (kenaDenda != null)
            list = list.stream().filter(i -> i.isKenaDenda() == kenaDenda).collect(Collectors.toList());

        return list;
    }

    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, Object>>> getAll(
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari,
            @RequestParam(required = false) Boolean dapatMengganti,
            @RequestParam(required = false) Boolean kenaPotong,
            @RequestParam(required = false) Boolean kenaDenda) {

        List<IzinJam> list = queryList(status, from, to, divisiId, cari,
                dapatMengganti, kenaPotong, kenaDenda);

        List<IzinJamDTO> dtoList = list.stream().map(i -> {
            Karyawan k = i.getKaryawan();
            String fotoProfilUrl = (k.getFotoProfil() != null && !k.getFotoProfil().isBlank())
                    ? baseUrl + "/" + k.getFotoProfil() : null;
            return IzinJamDTO.builder()
                    .id(i.getId()).karyawanId(k.getId())
                    .namaKaryawan(k.getNamaLengkap())
                    .fotoProfil(fotoProfilUrl)
                    .namaDivisi(k.getDivisi()   != null ? k.getDivisi().getNamaDivisi()   : null)
                    .namaJabatan(k.getJabatan() != null ? k.getJabatan().getNamaJabatan() : null)
                    .tanggalMulai(i.getTanggalMulai())
                    .jamMulai(i.getJamMulai())
                    .tanggalSelesai(i.getTanggalSelesai())
                    .jamSelesai(i.getJamSelesai())
                    .durasiMenit(i.getDurasiMenit())
                    .jamPengganti(i.getJamPengganti())
                    .dapatMengganti(i.isDapatMengganti())
                    .kenaPotong(i.isKenaPotong())
                    .kenaDenda(i.isKenaDenda())
                    .keperluan(i.getKeperluan())
                    .status(i.getStatus())
                    .catatanPenolakan(i.getCatatanPenolakan())
                    .createdAt(i.getCreatedAt())
                    .updatedAt(i.getUpdatedAt())
                    .build();
        }).collect(Collectors.toList());

        long pending = dtoList.stream().filter(d -> d.getStatus() == StatusIzin.MENUNGGU).count();
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("izinJam", dtoList);
        result.put("totalMenunggu", pending);
        return ResponseEntity.ok(JsendResponse.success(result));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<JsendResponse<Map<String, IzinJamDTO>>> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        StatusIzin status = StatusIzin.valueOf(body.get("status"));
        String catatan    = body.get("catatanPenolakan");
        IzinJamDTO dto    = izinJamService.updateStatus(id, status, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("izinJam", dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        izinJamService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @RequestParam(required = false) StatusIzin status,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari,
            @RequestParam(required = false) Boolean dapatMengganti,
            @RequestParam(required = false) Boolean kenaPotong,
            @RequestParam(required = false) Boolean kenaDenda) throws IOException {

        List<IzinJam> list = queryList(status, from, to, divisiId, cari,
                dapatMengganti, kenaPotong, kenaDenda);
        byte[] bytes = izinJamService.exportExcelFromList(list);
        String filename = "izin-jam-" + LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE) + ".xlsx";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(bytes);
    }
}
