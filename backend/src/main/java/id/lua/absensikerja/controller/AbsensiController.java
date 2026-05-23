package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.AbsensiDTO;
import id.lua.absensikerja.model.dto.CheckOutRequest;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.RekapCatatanPresensiDTO;
import id.lua.absensikerja.model.dto.ReviewLemburDTO;
import id.lua.absensikerja.model.dto.RiwayatHapusLemburDTO;
import id.lua.absensikerja.model.dto.RingkasanKehadiranDTO;
import id.lua.absensikerja.service.AbsensiEksporService;
import id.lua.absensikerja.service.AbsensiService;
import id.lua.absensikerja.service.EmailService;
import id.lua.absensikerja.service.LemburEksporService;
import id.lua.absensikerja.service.RingkasanKehadiranRow;
import id.lua.absensikerja.util.AuthUserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/absensi")
@RequiredArgsConstructor
public class AbsensiController {

    private final AbsensiService       absensiService;
    private final AbsensiEksporService  absensiEksporService;
    private final LemburEksporService   lemburEksporService;
    private final EmailService          emailService;
    private final AuthUserUtil          authUserUtil;

    private static final String UPLOAD_DIR = "uploads/foto-absensi/";

    private Long userId() {
        return authUserUtil.getCurrentUser().getId();
    }

    /** GET /api/absensi/hari-ini — status absensi hari ini */
    @GetMapping("/hari-ini")
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> hariIni() {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.getHariIni(userId()))));
    }

    /** GET /api/absensi/riwayat?bulan=4&tahun=2026 */
    @GetMapping("/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<AbsensiDTO>>>> riwayat(
            @RequestParam(defaultValue = "0") int bulan,
            @RequestParam(defaultValue = "0") int tahun) {
        LocalDate now = LocalDate.now();
        int b = bulan > 0 ? bulan : now.getMonthValue();
        int y = tahun  > 0 ? tahun  : now.getYear();
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.getRiwayat(userId(), b, y))));
    }

    /** POST /api/absensi/check-in (multipart: catatan + foto + info perangkat + lokasi) */
    @PostMapping(value = "/check-in", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> checkIn(
            @RequestParam(value = "catatan",        required = false) String catatan,
            @RequestParam(value = "deviceId",       required = false) String deviceId,
            @RequestParam(value = "namaPerangkat",  required = false) String namaPerangkat,
            @RequestParam(value = "modelPerangkat", required = false) String modelPerangkat,
            @RequestParam(value = "manufaktur",     required = false) String manufaktur,
            @RequestParam(value = "platform",       required = false) String platform,
            @RequestParam(value = "lat",            required = false) Double lat,
            @RequestParam(value = "lng",            required = false) Double lng,
            @RequestPart(value = "foto",            required = false) MultipartFile foto) throws IOException {

        String fotoPath = null;
        if (foto != null && !foto.isEmpty()) {
            fotoPath = saveFoto(foto);
        }
        AbsensiDTO dto = absensiService.checkIn(userId(), catatan, fotoPath,
                deviceId, namaPerangkat, modelPerangkat, manufaktur, platform, lat, lng);
        return ResponseEntity.ok(JsendResponse.success(Map.of("absensi", dto)));
    }

    /** POST /api/absensi/check-out */
    @PostMapping("/check-out")
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> checkOut(
            @RequestBody(required = false) CheckOutRequest req) {
        String catatan = req != null ? req.getCatatan() : null;
        Double lat     = req != null ? req.getLat()     : null;
        Double lng     = req != null ? req.getLng()     : null;
        AbsensiDTO dto = absensiService.checkOut(userId(), catatan, lat, lng);
        return ResponseEntity.ok(JsendResponse.success(Map.of("absensi", dto)));
    }

    // ── helper simpan foto ────────────────────────────────────
    private String saveFoto(MultipartFile foto) throws IOException {
        Path dir = Paths.get(UPLOAD_DIR);
        if (!Files.exists(dir)) Files.createDirectories(dir);
        String ext = StringUtils.getFilenameExtension(foto.getOriginalFilename());
        String filename = UUID.randomUUID() + (ext != null ? "." + ext : "");
        Files.copy(foto.getInputStream(), dir.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        return UPLOAD_DIR + filename;
    }

    // ── Admin endpoints ───────────────────────────────────────

    /** GET /api/absensi/admin/harian?tanggal=2026-05-04 */
    @GetMapping("/admin/harian")
    public ResponseEntity<JsendResponse<Map<String, List<AbsensiDTO>>>> kehadiranHarian(
            @RequestParam(required = false) String tanggal) {
        LocalDate tgl = (tanggal != null && !tanggal.isBlank())
                ? LocalDate.parse(tanggal)
                : LocalDate.now();
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.getKehadiranHarian(tgl))));
    }

    /**
     * GET /api/absensi/admin/rekap-catatan-presensi
     * ?tanggal=2026-05-11&divisiId=&cari=
     */
    @GetMapping("/admin/rekap-catatan-presensi")
    public ResponseEntity<JsendResponse<Map<String, RekapCatatanPresensiDTO>>> rekapCatatanPresensi(
            @RequestParam(required = false) String tanggal,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        LocalDate tgl = (tanggal != null && !tanggal.isBlank())
                ? LocalDate.parse(tanggal)
                : LocalDate.now();
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", absensiService.getRekapCatatanPresensi(tgl, divisiId, cari, userId()))));
    }

    /**
     * GET /api/absensi/admin/lembur?dari=&sampai=&divisiId=&cari=
     */
    @GetMapping("/admin/lembur")
    public ResponseEntity<JsendResponse<Map<String, List<ReviewLemburDTO>>>> reviewLembur(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", absensiService.getLembur(dari, sampai, divisiId, cari, userId()))));
    }

    /**
     * DELETE /api/absensi/admin/lembur/{absensiId} — hapus data lembur
     */
    @DeleteMapping("/admin/lembur/{absensiId}")
    public ResponseEntity<JsendResponse<Map<String, ReviewLemburDTO>>> hapusLembur(@PathVariable Long absensiId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", absensiService.hapusLembur(absensiId, userId()))));
    }

    /**
     * GET /api/absensi/admin/lembur/riwayat?divisiId=&cari=
     */
    @GetMapping("/admin/lembur/riwayat")
    public ResponseEntity<JsendResponse<Map<String, List<RiwayatHapusLemburDTO>>>> riwayatHapusLembur(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("data", absensiService.getRiwayatHapusLembur(divisiId, cari, userId()))));
    }

    /**
     * POST /api/absensi/admin/lembur/ekspor-email
     * ?dari=&sampai=&divisiId=&cari=&email=
     */
    @PostMapping("/admin/lembur/ekspor-email")
    public ResponseEntity<JsendResponse<Map<String, String>>> eksporLemburEmail(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dari,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate sampai,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari,
            @RequestParam String email) throws IOException {

        // Ambil data lembur (service menerima LocalDate, dikonversi String di dalam service)
        List<ReviewLemburDTO> data = absensiService.getLembur(dari, sampai, divisiId, cari, userId());

        // Generate Excel
        byte[] excel = lemburEksporService.generate(data);

        // Format subject dengan tanggal
        String tglLabel = (dari != null ? dari.toString() : "") +
                          (sampai != null ? " – " + sampai : "");
        String subject  = "Rekap Lembur" + (!tglLabel.isBlank() ? " (" + tglLabel + ")" : "");
        String htmlBody = """
            <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto">
              <h3 style="color:#4f46e5">Rekap Lembur Karyawan</h3>
              <p>Terlampir file Excel rekap lembur karyawan%s.</p>
              <p style="font-size:12px;color:#888">Email ini dikirim otomatis oleh sistem AbsensiKerja.</p>
            </div>
            """.formatted(!tglLabel.isBlank() ? " periode " + tglLabel : "");
        String filename    = "rekap-lembur" + (!tglLabel.isBlank() ? "-" + (dari != null ? dari : "") : "") + ".xlsx";
        String contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        for (String e : email.split(",")) {
            String trimmed = e.trim();
            if (!trimmed.isEmpty()) {
                emailService.sendEmailWithAttachment(trimmed, subject, htmlBody, filename, excel, contentType);
            }
        }

        return ResponseEntity.ok(JsendResponse.success(Map.of("message", "Email sedang diproses dan akan dikirim segera.")));
    }

    /** GET /api/absensi/admin/karyawan/{karyawanId}?bulan=4&tahun=2026 */
    @GetMapping("/admin/karyawan/{karyawanId}")
    public ResponseEntity<JsendResponse<Map<String, List<AbsensiDTO>>>> riwayatByKaryawan(
            @PathVariable Long karyawanId,
            @RequestParam(defaultValue = "0") int bulan,
            @RequestParam(defaultValue = "0") int tahun) {
        LocalDate now = LocalDate.now();
        int b = bulan > 0 ? bulan : now.getMonthValue();
        int y = tahun  > 0 ? tahun  : now.getYear();
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.getRiwayatByKaryawan(karyawanId, b, y))));
    }

    /** GET /api/absensi/admin/karyawan/{karyawanId}/ringkasan?bulan=4&tahun=2026 */
    @GetMapping("/admin/karyawan/{karyawanId}/ringkasan")
    public ResponseEntity<JsendResponse<Map<String, RingkasanKehadiranDTO>>> ringkasanByKaryawan(
            @PathVariable Long karyawanId,
            @RequestParam(defaultValue = "0") int bulan,
            @RequestParam(defaultValue = "0") int tahun) {
        LocalDate now = LocalDate.now();
        int b = bulan > 0 ? bulan : now.getMonthValue();
        int y = tahun  > 0 ? tahun  : now.getYear();
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("ringkasan", absensiService.getRingkasanByKaryawan(karyawanId, b, y))));
    }

    /** POST /api/absensi/admin/karyawan/{karyawanId}/tambah */
    @PostMapping("/admin/karyawan/{karyawanId}/tambah")
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> tambahManual(
            @PathVariable Long karyawanId,
            @RequestParam String tanggal,
            @RequestParam(defaultValue = "MASUK_KELUAR") String tipePresensi,
            @RequestParam(required = false) String waktuMulai,
            @RequestParam(required = false) String waktuSelesai,
            @RequestParam(required = false) String catatan) {
        AbsensiDTO dto = absensiService.tambahManual(
                karyawanId, LocalDate.parse(tanggal),
                tipePresensi, waktuMulai, waktuSelesai, catatan);
        return ResponseEntity.ok(JsendResponse.success(Map.of("absensi", dto)));
    }

    /** DELETE /api/absensi/admin/{id} — batalkan presensi */
    @DeleteMapping("/admin/{id}")
    public ResponseEntity<JsendResponse<Void>> batalkanPresensi(@PathVariable Long id) {
        absensiService.batalkanPresensi(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** PUT /api/absensi/admin/{id}/waktu — ubah waktu presensi */
    @PutMapping("/admin/{id}/waktu")
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> ubahWaktuPresensi(
            @PathVariable Long id,
            @RequestParam(required = false) String jamMasuk,
            @RequestParam(required = false) String jamKeluar) {
        AbsensiDTO dto = absensiService.ubahWaktuPresensi(id, jamMasuk, jamKeluar);
        return ResponseEntity.ok(JsendResponse.success(Map.of("absensi", dto)));
    }

    /**
     * GET /api/absensi/admin/ringkasan?dari=2026-05-01&sampai=2026-05-04&divisiId=1&cari=keyword
     * Ringkasan kehadiran semua karyawan dalam rentang tanggal
     */
    @GetMapping("/admin/ringkasan")
    public ResponseEntity<JsendResponse<Map<String, List<RingkasanKehadiranRow>>>> ringkasanSemua(
            @RequestParam(required = false) String dari,
            @RequestParam(required = false) String sampai,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        LocalDate today = LocalDate.now();
        LocalDate tDari   = dari   != null && !dari.isBlank()   ? LocalDate.parse(dari)   : today.withDayOfMonth(1);
        LocalDate tSampai = sampai != null && !sampai.isBlank() ? LocalDate.parse(sampai) : today;
        List<RingkasanKehadiranRow> rows = absensiService.getRingkasanSemua(tDari, tSampai, divisiId, cari);
        return ResponseEntity.ok(JsendResponse.success(Map.of("ringkasan", rows)));
    }

    // ── Review Kehadiran ─────────────────────────────────────────

    @GetMapping("/admin/review/perlu-dicek")
    public ResponseEntity<JsendResponse<Map<String, List<AbsensiDTO>>>> reviewPerluDicek(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.getReviewPerluDicek(divisiId, cari))));
    }

    @GetMapping("/admin/review/sudah-dicek")
    public ResponseEntity<JsendResponse<Map<String, List<AbsensiDTO>>>> reviewSudahDicek(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) String cari) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.getReviewSudahDicek(divisiId, cari))));
    }

    @PatchMapping("/admin/review/{absensiId}/tandai-dicek")
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> tandaiDicek(
            @PathVariable Long absensiId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.tandaiSudahDicek(absensiId))));
    }

    @PatchMapping("/admin/review/{absensiId}/tandai-perlu-dicek")
    public ResponseEntity<JsendResponse<Map<String, AbsensiDTO>>> tandaiPerluDicek(
            @PathVariable Long absensiId,
            @RequestParam(required = false, defaultValue = "Ditandai Manual") String alasan) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("absensi", absensiService.tandaiPerluDicek(absensiId, alasan))));
    }

    @PatchMapping("/admin/review/tandai-dicek")
    public ResponseEntity<JsendResponse<Map<String, Integer>>> tandaiSemuaDicek(
            @RequestParam(required = false) Long divisiId) {
        int count = absensiService.tandaiSemuaSudahDicek(divisiId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("count", count)));
    }

    /**
     * POST /api/absensi/admin/ekspor/ringkasan     * Generate Excel ringkasan kehadiran semua karyawan & kirim ke email
     */
    @PostMapping("/admin/ekspor/ringkasan")
    public ResponseEntity<JsendResponse<Map<String, String>>> eksporRingkasan(
            @RequestParam String dari,
            @RequestParam String sampai,
            @RequestParam String email,
            @RequestParam(defaultValue = "LENGKAP_DETAIL_TANGGAL") String format,
            @RequestParam(required = false) Long divisiId) {

        LocalDate tDari   = LocalDate.parse(dari);
        LocalDate tSampai = LocalDate.parse(sampai);

        // Ambil data rows di sini (dalam request context) agar authUserUtil bisa resolve user
        List<RingkasanKehadiranRow> rows =
                absensiService.getRingkasanSemua(tDari, tSampai, divisiId, null);

        // Generate Excel + kirim email secara async agar tidak blokir response
        absensiEksporService.generateAndSendRingkasanAsync(rows, tDari, tSampai, format, email);

        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pesan", "Permintaan ekspor diterima. File akan dikirim ke email: " + email
                        + " (maksimal 20 menit).")));
    }

    /**
     * GET /api/absensi/admin/ekspor/harian?tanggal=2026-05-04&format=LENGKAP&kolom=namaKaryawan,masukJam,...
     * Download file Excel langsung (tanggal tertentu)
     */
    @GetMapping("/admin/ekspor/harian")
    public ResponseEntity<byte[]> eksporHarian(
            @RequestParam(required = false) String tanggal,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) Long lokasiId,
            @RequestParam(required = false) Long karyawanId,
            @RequestParam(defaultValue = "LENGKAP") String format,
            @RequestParam(required = false) List<String> kolom) throws IOException {

        LocalDate tgl = (tanggal != null && !tanggal.isBlank())
                ? LocalDate.parse(tanggal) : LocalDate.now();

        byte[] bytes = absensiEksporService.generate(tgl, divisiId, lokasiId, karyawanId, format, kolom);

        String filename = "kehadiran-" + tgl + ".xlsx";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(bytes);
    }

    /**
     * GET /api/absensi/admin/ekspor/rentang?dari=2026-04-01&sampai=2026-05-04&format=LENGKAP
     * Download file Excel rentang waktu
     */
    @GetMapping("/admin/ekspor/rentang")
    public ResponseEntity<byte[]> eksporRentang(
            @RequestParam String dari,
            @RequestParam String sampai,
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) Long karyawanId,
            @RequestParam(defaultValue = "LENGKAP") String format,
            @RequestParam(required = false) List<String> kolom) throws IOException {

        byte[] bytes = absensiEksporService.generateRentang(
                LocalDate.parse(dari), LocalDate.parse(sampai),
                divisiId, karyawanId, format, kolom);

        String filename = "kehadiran-" + dari + "-sd-" + sampai + ".xlsx";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .contentType(MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(bytes);
    }
}
