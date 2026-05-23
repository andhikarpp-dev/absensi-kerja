package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.PolaKerjaDTO;
import id.lua.absensikerja.model.dto.PolaKerjaHariDTO;
import id.lua.absensikerja.model.dto.PolaKerjaRequest;
import id.lua.absensikerja.model.entity.PolaKerjaHari;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.KategoriPolaKerja;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.PolaKerjaHariRepository;
import id.lua.absensikerja.service.PolaKerjaService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api/pola-kerja")
@RequiredArgsConstructor
public class PolaKerjaController {

    private final PolaKerjaService        polaKerjaService;
    private final AuthUserUtil            authUserUtil;
    private final PolaKerjaHariRepository polaKerjaHariRepository;

    /** Kembalikan id user jika PEMILIK, null jika ADMIN. */
    private Long resolveOwnerId() {
        User user = authUserUtil.getCurrentUser();
        return user.getRole().getName() == RoleType.PEMILIK ? user.getId() : null;
    }

    /** GET /api/pola-kerja/all?kategori=HARI_KERJA — semua pola kerja (filter optional kategori) */
    @GetMapping("/all")
    public ResponseEntity<JsendResponse<Map<String, List<PolaKerjaDTO>>>> findAll(
            @RequestParam(required = false) KategoriPolaKerja kategori) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.findAll(resolveOwnerId(), kategori))));
    }

    /** GET /api/pola-kerja?divisiId=1 — pola kerja divisi tertentu (hanya milik perusahaan sendiri untuk PEMILIK) */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<PolaKerjaDTO>>>> findByDivisi(
            @RequestParam Long divisiId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.findByDivisi(divisiId, resolveOwnerId()))));
    }

    /** GET /api/pola-kerja/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, PolaKerjaDTO>>> findById(
            @PathVariable Long id) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.findById(id))));
    }

    /** POST /api/pola-kerja */
    @PostMapping
    public ResponseEntity<JsendResponse<Map<String, PolaKerjaDTO>>> create(
            @Valid @RequestBody PolaKerjaRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.create(request, resolveOwnerId()))));
    }

    /** PUT /api/pola-kerja/{id} */
    @PutMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, PolaKerjaDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestBody PolaKerjaRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.update(id, request))));
    }

    /** DELETE /api/pola-kerja/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        polaKerjaService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** POST /api/pola-kerja/{id}/assign-divisi — assign pola ke divisi */
    @PostMapping("/{id}/assign-divisi")
    public ResponseEntity<JsendResponse<Map<String, PolaKerjaDTO>>> assignDivisi(
            @PathVariable Long id,
            @RequestBody Set<Long> divisiIds) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.assignDivisi(id, divisiIds))));
    }

    /** DELETE /api/pola-kerja/{id}/unassign-divisi/{divisiId} — lepas relasi pola dari divisi tertentu */
    @DeleteMapping("/{id}/unassign-divisi/{divisiId}")
    public ResponseEntity<JsendResponse<Map<String, PolaKerjaDTO>>> unassignDivisi(
            @PathVariable Long id,
            @PathVariable Long divisiId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("polaKerja", polaKerjaService.unassignDivisi(id, divisiId))));
    }

    /** PUT /api/pola-kerja/hari/{hariId} — ubah jadwal hari tertentu */
    @PutMapping("/hari/{hariId}")
    @Transactional
    public ResponseEntity<JsendResponse<Map<String, PolaKerjaHariDTO>>> updateHari(
            @PathVariable Long hariId,
            @RequestBody UbahJadwalHariRequest req) {
        PolaKerjaHari hari = polaKerjaHariRepository.findById(hariId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Data jadwal hari tidak ditemukan"));

        if (req.getJamMasuk()           != null) hari.setJamMasuk(req.getJamMasuk());
        if (req.getJamKeluar()          != null) hari.setJamKeluar(req.getJamKeluar());
        if (req.getMulaiIstirahat()     != null) hari.setMulaiIstirahat(req.getMulaiIstirahat());
        if (req.getSelesaiIstirahat()   != null) hari.setSelesaiIstirahat(req.getSelesaiIstirahat());
        if (req.getMaksMenitIstirahat() != null) hari.setMaksMenitIstirahat(req.getMaksMenitIstirahat());
        if (req.getToleransiKeterlambatan() != null) {
            hari.getPolaKerja().setToleransiKeterlambatan(req.getToleransiKeterlambatan());
        }

        polaKerjaHariRepository.save(hari);

        PolaKerjaHariDTO dto = PolaKerjaHariDTO.builder()
                .id(hari.getId())
                .hari(hari.getHari())
                .polaHari(hari.getPolaHari())
                .jamMasuk(hari.getJamMasuk())
                .jamKeluar(hari.getJamKeluar())
                .mulaiIstirahat(hari.getMulaiIstirahat())
                .selesaiIstirahat(hari.getSelesaiIstirahat())
                .maksMenitIstirahat(hari.getMaksMenitIstirahat())
                .build();

        return ResponseEntity.ok(JsendResponse.success(Map.of("polaKerjaHari", dto)));
    }

    /** Request body untuk ubah jadwal satu hari */
    @lombok.Data
    static class UbahJadwalHariRequest {
        private String  jamMasuk;
        private String  jamKeluar;
        private String  mulaiIstirahat;
        private String  selesaiIstirahat;
        private Integer maksMenitIstirahat;
        private Integer toleransiKeterlambatan;
    }

    /** DELETE /api/pola-kerja/hari/{hariId} — hapus jadwal hari (reset menjadi LIBUR/kosong) */
    @DeleteMapping("/hari/{hariId}")
    @Transactional
    public ResponseEntity<JsendResponse<Void>> hapusHari(@PathVariable Long hariId) {
        PolaKerjaHari hari = polaKerjaHariRepository.findById(hariId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Data jadwal hari tidak ditemukan"));

        // Reset semua jam jadwal → hari ini menjadi libur/tidak ada jadwal
        hari.setPolaHari(id.lua.absensikerja.model.enums.PolaHariKerja.LIBUR);
        hari.setJamMasuk(null);
        hari.setJamKeluar(null);
        hari.setMulaiIstirahat(null);
        hari.setSelesaiIstirahat(null);

        polaKerjaHariRepository.save(hari);
        return ResponseEntity.ok(JsendResponse.success(null));
    }
}
