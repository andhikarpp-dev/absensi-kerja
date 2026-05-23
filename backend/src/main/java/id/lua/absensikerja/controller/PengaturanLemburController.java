package id.lua.absensikerja.controller;

import id.lua.absensikerja.service.PengaturanLemburService;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/lembur")
@RequiredArgsConstructor
public class PengaturanLemburController {

    private final PengaturanLemburService service;
    private final AuthUserUtil            authUserUtil;

    private Long userId() { return authUserUtil.getCurrentUser().getId(); }

    // ── Tarif Upah ────────────────────────────────────────────────────────
    @GetMapping("/tarif-upah")
    public ResponseEntity<List<Map<String, Object>>> getTarif() {
        return ResponseEntity.ok(service.getTarifLembur(userId()));
    }

    @PostMapping("/tarif-upah")
    public ResponseEntity<Void> saveTarif(@RequestBody List<Map<String, Object>> body) {
        service.saveTarifLembur(userId(), body);
        return ResponseEntity.ok().build();
    }

    // ── Jadwal Setting ────────────────────────────────────────────────────
    @GetMapping("/jadwal-setting")
    public ResponseEntity<Map<String, Object>> getJadwal() {
        return ResponseEntity.ok(service.getJadwalSetting(userId()));
    }

    @PostMapping("/jadwal-setting")
    public ResponseEntity<Void> saveJadwal(@RequestBody Map<String, Object> body) {
        service.saveJadwalSetting(userId(), body);
        return ResponseEntity.ok().build();
    }

    // ── Divisi Pengaturan ─────────────────────────────────────────────────
    @GetMapping("/divisi-pengaturan")
    public ResponseEntity<List<Map<String, Object>>> getDivisi() {
        return ResponseEntity.ok(service.getDivisiPengaturan(userId()));
    }

    @PutMapping("/divisi-pengaturan")
    public ResponseEntity<Void> saveDivisi(@RequestBody List<Map<String, Object>> body) {
        service.saveDivisiPengaturan(userId(), body);
        return ResponseEntity.ok().build();
    }
}
