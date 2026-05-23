package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KabupatenKotaDTO;
import id.lua.absensikerja.model.dto.ProvinsiDTO;
import id.lua.absensikerja.service.WilayahService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/wilayah")
@RequiredArgsConstructor
public class WilayahController {

    private final WilayahService wilayahService;

    /** GET /api/wilayah/provinsi */
    @GetMapping("/provinsi")
    public ResponseEntity<JsendResponse<Map<String, List<ProvinsiDTO>>>> findAllProvinsi() {
        return ResponseEntity.ok(
                JsendResponse.success(Map.of("provinsi", wilayahService.findAllProvinsi()))
        );
    }

    /** GET /api/wilayah/kabupaten-kota?provinsiId=1 */
    @GetMapping("/kabupaten-kota")
    public ResponseEntity<JsendResponse<Map<String, List<KabupatenKotaDTO>>>> findKabupatenKota(
            @RequestParam Long provinsiId) {
        return ResponseEntity.ok(
                JsendResponse.success(Map.of("kabupatenKota", wilayahService.findKabupatenKotaByProvinsi(provinsiId)))
        );
    }
}
