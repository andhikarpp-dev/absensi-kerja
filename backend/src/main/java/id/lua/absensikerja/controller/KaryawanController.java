package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.BackgroundPendidikanDTO;
import id.lua.absensikerja.model.dto.BackgroundPendidikanRequest;
import id.lua.absensikerja.model.dto.FileIdentitasDTO;
import id.lua.absensikerja.model.dto.FileIdentitasRequest;
import id.lua.absensikerja.model.dto.ImporKaryawanResult;
import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.KaryawanDTO;
import id.lua.absensikerja.model.dto.KaryawanRequest;
import id.lua.absensikerja.model.dto.KontakDaruratDTO;
import id.lua.absensikerja.model.dto.KontakDaruratRequest;
import id.lua.absensikerja.model.dto.PengalamanKerjaDTO;
import id.lua.absensikerja.model.dto.PengalamanKerjaRequest;
import id.lua.absensikerja.model.dto.PengalamanOrganisasiDTO;
import id.lua.absensikerja.model.dto.PengalamanOrganisasiRequest;
import id.lua.absensikerja.model.dto.PenghargaanDTO;
import id.lua.absensikerja.model.dto.PenghargaanRequest;
import id.lua.absensikerja.model.dto.PerangkatDTO;
import id.lua.absensikerja.service.PerangkatService;
import id.lua.absensikerja.model.dto.PortofolioDTO;
import id.lua.absensikerja.model.dto.PortofolioRequest;
import id.lua.absensikerja.model.dto.SertifikatDTO;
import id.lua.absensikerja.model.dto.SertifikatRequest;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.service.BackgroundPendidikanService;
import id.lua.absensikerja.service.FileIdentitasService;
import id.lua.absensikerja.service.KaryawanService;
import id.lua.absensikerja.service.KaryawanEksporService;
import id.lua.absensikerja.service.KaryawanImporService;
import id.lua.absensikerja.service.KontakDaruratService;
import id.lua.absensikerja.service.PengalamanKerjaService;
import id.lua.absensikerja.service.PengalamanOrganisasiService;
import id.lua.absensikerja.service.PenghargaanService;
import id.lua.absensikerja.service.PortofolioService;
import id.lua.absensikerja.service.SertifikatService;
import id.lua.absensikerja.util.AuthUserUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;
import java.util.UUID;


@RestController
@RequestMapping("/api/karyawan")
@RequiredArgsConstructor
public class KaryawanController {

    private final KaryawanService            karyawanService;
    private final FileIdentitasService       fileIdentitasService;
    private final PengalamanKerjaService     pengalamanKerjaService;
    private final BackgroundPendidikanService backgroundPendidikanService;
    private final PortofolioService          portofolioService;
    private final PenghargaanService         penghargaanService;
    private final SertifikatService          sertifikatService;
    private final PengalamanOrganisasiService pengalamanOrganisasiService;
    private final KontakDaruratService        kontakDaruratService;
    private final PerangkatService            perangkatService;
    private final KaryawanEksporService       karyawanEksporService;
    private final KaryawanImporService        karyawanImporService;
    private final AuthUserUtil               authUserUtil;

    /** Direktori penyimpanan foto profil relatif terhadap working directory */
    private static final String UPLOAD_DIR = "uploads/foto-profil/";

    /** Kembalikan id user jika PEMILIK, null jika ADMIN (untuk filter list). */
    private Long resolveOwnerId() {
        User user = authUserUtil.getCurrentUser();
        return user.getRole().getName() == RoleType.PEMILIK ? user.getId() : null;
    }

    /** Selalu kembalikan id user yang sedang login (untuk create/update agar perusahaan bisa di-resolve). */
    private Long resolveCallerUserId() {
        return authUserUtil.getCurrentUser().getId();
    }

    /** GET /api/karyawan */
    @GetMapping
    public ResponseEntity<JsendResponse<Map<String, List<KaryawanDTO>>>> findAll() {
        List<KaryawanDTO> list = karyawanService.findAll(resolveOwnerId());
        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", list)));
    }

    /** GET /api/karyawan/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<JsendResponse<Map<String, KaryawanDTO>>> findById(@PathVariable Long id) {
        KaryawanDTO dto = karyawanService.findById(id);
        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", dto)));
    }

    /**
     * POST /api/karyawan (multipart/form-data)
     */
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, KaryawanDTO>>> create(
            @Valid @RequestPart("data") KaryawanRequest request,
            @RequestPart(value = "foto", required = false) MultipartFile foto) throws IOException {

        if (foto != null && !foto.isEmpty()) {
            request.setFotoProfil(savePhoto(foto));
        }
        KaryawanDTO dto = karyawanService.create(request, resolveCallerUserId());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("karyawan", dto)));
    }

    /**
     * POST /api/karyawan (JSON only)
     */
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<JsendResponse<Map<String, KaryawanDTO>>> createJson(
            @Valid @RequestBody KaryawanRequest request) {
        KaryawanDTO dto = karyawanService.create(request, resolveCallerUserId());
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("karyawan", dto)));
    }

    /**
     * PUT /api/karyawan/{id} (multipart/form-data)
     */
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, KaryawanDTO>>> update(
            @PathVariable Long id,
            @Valid @RequestPart("data") KaryawanRequest request,
            @RequestPart(value = "foto", required = false) MultipartFile foto) throws IOException {

        if (foto != null && !foto.isEmpty()) {
            request.setFotoProfil(savePhoto(foto));
        }
        KaryawanDTO dto = karyawanService.update(id, request, resolveCallerUserId());
        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", dto)));
    }

    /**
     * PUT /api/karyawan/{id} (JSON only)
     */
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<JsendResponse<Map<String, KaryawanDTO>>> updateJson(
            @PathVariable Long id,
            @Valid @RequestBody KaryawanRequest request) {
        KaryawanDTO dto = karyawanService.update(id, request, resolveCallerUserId());
        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", dto)));
    }

    /** DELETE /api/karyawan/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<JsendResponse<Void>> delete(@PathVariable Long id) {
        karyawanService.delete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /** GET /api/karyawan/trash — list karyawan yang sudah di-soft-delete */
    @GetMapping("/trash")
    public ResponseEntity<JsendResponse<Map<String, List<KaryawanDTO>>>> findTrash() {
        List<KaryawanDTO> list = karyawanService.findAllDeleted(resolveOwnerId());
        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", list)));
    }

    /** POST /api/karyawan/{id}/restore — pulihkan karyawan dari trash */
    @PostMapping("/{id}/restore")
    public ResponseEntity<JsendResponse<Map<String, KaryawanDTO>>> restore(@PathVariable Long id) {
        KaryawanDTO dto = karyawanService.restore(id);
        return ResponseEntity.ok(JsendResponse.success(Map.of("karyawan", dto)));
    }

    /** DELETE /api/karyawan/{id}/permanent — hapus permanen (hard delete) */
    @DeleteMapping("/{id}/permanent")
    public ResponseEntity<JsendResponse<Void>> hardDelete(@PathVariable Long id) {
        karyawanService.hardDelete(id);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    /**
     * POST /api/karyawan/aksi-massal — eksekusi aksi massal pada beberapa karyawan.
     * Body:
     * {
     *   "ids": [1,2,3],
     *   "aksi": "HAPUS" | "UBAH_STATUS" | "PINDAH_DIVISI" | "PINDAH_JABATAN",
     *   "statusKerja": "AKTIF",   // jika UBAH_STATUS
     *   "divisiId":    10,        // jika PINDAH_DIVISI (null = lepas)
     *   "jabatanId":   3          // jika PINDAH_JABATAN (null = lepas)
     * }
     */
    @PostMapping("/aksi-massal")
    public ResponseEntity<JsendResponse<java.util.Map<String,
            id.lua.absensikerja.model.dto.KaryawanAksiMassalResult>>> aksiMassal(
            @RequestBody id.lua.absensikerja.model.dto.KaryawanAksiMassalRequest request) {
        var hasil = karyawanService.aksiMassal(request);
        return ResponseEntity.ok(JsendResponse.success(java.util.Map.of("hasil", hasil)));
    }

    /**
     * GET /api/karyawan/ekspor-excel?divisiId=&limit=
     * Download langsung file Excel data karyawan.
     */
    @GetMapping("/ekspor-excel")
    public ResponseEntity<byte[]> eksporExcel(
            @RequestParam(required = false) Long divisiId,
            @RequestParam(required = false) Integer limit) throws IOException {
        byte[] data = karyawanEksporService.eksporExcel(resolveOwnerId(), divisiId, limit);
        String filename = "Data_Karyawan_"
                + java.time.LocalDateTime.now()
                    .format(java.time.format.DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"))
                + ".xlsx";
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .header("Content-Disposition", "attachment; filename=\"" + filename + "\"")
                .body(data);
    }

    /**
     * POST /api/karyawan/ekspor-excel/email
     * Body: { "divisiId": ..., "limit": ..., "email": "..." }
     * Ekspor & kirim sebagai attachment ke email.
     */
    @PostMapping("/ekspor-excel/email")
    public ResponseEntity<JsendResponse<Map<String, String>>> eksporExcelKeEmail(
            @RequestBody Map<String, Object> body) {
        Long divisiId = body.get("divisiId") != null
                ? Long.valueOf(body.get("divisiId").toString()) : null;
        Integer limit = body.get("limit") != null
                ? Integer.valueOf(body.get("limit").toString()) : null;
        String email = body.get("email") != null ? body.get("email").toString().trim() : "";
        if (email.isBlank()) {
            return ResponseEntity.badRequest().body(JsendResponse.fail(
                    Map.of("email", "Email tujuan wajib diisi.")));
        }
        karyawanEksporService.eksporKeEmail(resolveOwnerId(), divisiId, limit, email);
        return ResponseEntity.ok(JsendResponse.success(Map.of(
                "message", "File ekspor sedang diproses & dikirim ke " + email
        )));
    }

    // ── Impor Excel ───────────────────────────────────────────────────────────

    /** GET /api/karyawan/impor/template/{tipe} — download template Excel sesuai tipe.
     *  Untuk tipe 'perbarui', boleh memberi query param divisiId &/atau karyawanIds
     *  untuk pre-fill data karyawan terpilih.
     */
    @GetMapping("/impor/template/{tipe}")
    public ResponseEntity<byte[]> downloadTemplateImpor(
            @PathVariable String tipe,
            @RequestParam(value = "divisiId",    required = false) Long divisiId,
            @RequestParam(value = "karyawanIds", required = false) java.util.List<Long> karyawanIds
    ) throws IOException {
        org.slf4j.LoggerFactory.getLogger(KaryawanController.class)
            .info("[downloadTemplateImpor] tipe={}, divisiId={}, karyawanIds={}",
                  tipe, divisiId, karyawanIds);
        byte[] data;
        String filename;
        switch (tipe.toLowerCase()) {
            case "tambah"   -> { data = karyawanImporService.templateTambah();   filename = "template-impor-tambah-karyawan.xlsx"; }
            case "perbarui" -> {
                boolean adaFilter = divisiId != null || (karyawanIds != null && !karyawanIds.isEmpty());
                data = adaFilter
                        ? karyawanImporService.templatePerbaruiPrefill(resolveOwnerId(), divisiId, karyawanIds)
                        : karyawanImporService.templatePerbarui();
                filename = "template-impor-perbarui-karyawan.xlsx";
            }
            case "bpjs"     -> {
                boolean adaFilter = divisiId != null || (karyawanIds != null && !karyawanIds.isEmpty());
                data = adaFilter
                        ? karyawanImporService.templateBpjsPrefill(resolveOwnerId(), divisiId, karyawanIds)
                        : karyawanImporService.templateBpjs();
                filename = "template-impor-bpjs-karyawan.xlsx";
            }
            case "pph21"    -> {
                boolean adaFilter = divisiId != null || (karyawanIds != null && !karyawanIds.isEmpty());
                data = adaFilter
                        ? karyawanImporService.templatePph21Prefill(resolveOwnerId(), divisiId, karyawanIds)
                        : karyawanImporService.templatePph21();
                filename = "template-impor-pph21-karyawan.xlsx";
            }
            default -> throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Tipe template tidak dikenal: " + tipe);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());
        return ResponseEntity.ok().headers(headers).body(data);
    }

    /** POST /api/karyawan/impor/tambah — multipart, optional divisiId. */
    @PostMapping(value = "/impor/tambah", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, ImporKaryawanResult>>> imporTambah(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "divisiId", required = false) Long divisiId) throws IOException {
        ImporKaryawanResult hasil = karyawanImporService.prosesTambah(file, divisiId, resolveCallerUserId());
        return ResponseEntity.ok(JsendResponse.success(Map.of("hasil", hasil)));
    }

    /** POST /api/karyawan/impor/perbarui — multipart. */
    @PostMapping(value = "/impor/perbarui", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, ImporKaryawanResult>>> imporPerbarui(
            @RequestParam("file") MultipartFile file) throws IOException {
        ImporKaryawanResult hasil = karyawanImporService.prosesPerbarui(file);
        return ResponseEntity.ok(JsendResponse.success(Map.of("hasil", hasil)));
    }

    /** POST /api/karyawan/impor/bpjs — multipart. */
    @PostMapping(value = "/impor/bpjs", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, ImporKaryawanResult>>> imporBpjs(
            @RequestParam("file") MultipartFile file) throws IOException {
        ImporKaryawanResult hasil = karyawanImporService.prosesBpjs(file);
        return ResponseEntity.ok(JsendResponse.success(Map.of("hasil", hasil)));
    }

    /** POST /api/karyawan/impor/pph21 — multipart (placeholder, masih 501). */
    @PostMapping(value = "/impor/pph21", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, ImporKaryawanResult>>> imporPph21(
            @RequestParam("file") MultipartFile file) {
        ImporKaryawanResult hasil = karyawanImporService.prosesPph21(file);
        return ResponseEntity.ok(JsendResponse.success(Map.of("hasil", hasil)));
    }

    // ── File Identitas ─────────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/file-identitas")
    public ResponseEntity<JsendResponse<Map<String, List<FileIdentitasDTO>>>> getFileIdentitas(
            @PathVariable Long karyawanId) {
        List<FileIdentitasDTO> list = fileIdentitasService.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("fileIdentitas", list)));
    }

    @PostMapping(value = "/{karyawanId}/file-identitas", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, FileIdentitasDTO>>> addFileIdentitas(
            @PathVariable Long karyawanId,
            @RequestPart("data") FileIdentitasRequest request,
            @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        FileIdentitasDTO dto = fileIdentitasService.create(karyawanId, request, file);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("fileIdentitas", dto)));
    }

    @DeleteMapping("/{karyawanId}/file-identitas/{fileId}")
    public ResponseEntity<JsendResponse<Void>> deleteFileIdentitas(
            @PathVariable Long karyawanId,
            @PathVariable Long fileId) {
        fileIdentitasService.delete(karyawanId, fileId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Pengalaman Kerja ────────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/pengalaman-kerja")
    public ResponseEntity<JsendResponse<Map<String, List<PengalamanKerjaDTO>>>> getPengalamanKerja(
            @PathVariable Long karyawanId) {
        List<PengalamanKerjaDTO> list = pengalamanKerjaService.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("pengalamanKerja", list)));
    }

    @PostMapping("/{karyawanId}/pengalaman-kerja")
    public ResponseEntity<JsendResponse<Map<String, PengalamanKerjaDTO>>> addPengalamanKerja(
            @PathVariable Long karyawanId,
            @Valid @RequestBody PengalamanKerjaRequest request) {
        PengalamanKerjaDTO dto = pengalamanKerjaService.create(karyawanId, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("pengalamanKerja", dto)));
    }

    @PutMapping("/{karyawanId}/pengalaman-kerja/{pengalamanId}")
    public ResponseEntity<JsendResponse<Map<String, PengalamanKerjaDTO>>> updatePengalamanKerja(
            @PathVariable Long karyawanId,
            @PathVariable Long pengalamanId,
            @Valid @RequestBody PengalamanKerjaRequest request) {
        PengalamanKerjaDTO dto = pengalamanKerjaService.update(karyawanId, pengalamanId, request);
        return ResponseEntity.ok(JsendResponse.success(Map.of("pengalamanKerja", dto)));
    }

    @DeleteMapping("/{karyawanId}/pengalaman-kerja/{pengalamanId}")
    public ResponseEntity<JsendResponse<Void>> deletePengalamanKerja(
            @PathVariable Long karyawanId,
            @PathVariable Long pengalamanId) {
        pengalamanKerjaService.delete(karyawanId, pengalamanId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Background Pendidikan ───────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/background-pendidikan")
    public ResponseEntity<JsendResponse<Map<String, List<BackgroundPendidikanDTO>>>> getBackgroundPendidikan(
            @PathVariable Long karyawanId) {
        List<BackgroundPendidikanDTO> list = backgroundPendidikanService.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("backgroundPendidikan", list)));
    }

    @PostMapping("/{karyawanId}/background-pendidikan")
    public ResponseEntity<JsendResponse<Map<String, BackgroundPendidikanDTO>>> addBackgroundPendidikan(
            @PathVariable Long karyawanId,
            @Valid @RequestBody BackgroundPendidikanRequest request) {
        BackgroundPendidikanDTO dto = backgroundPendidikanService.create(karyawanId, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("backgroundPendidikan", dto)));
    }

    @PutMapping("/{karyawanId}/background-pendidikan/{pendidikanId}")
    public ResponseEntity<JsendResponse<Map<String, BackgroundPendidikanDTO>>> updateBackgroundPendidikan(
            @PathVariable Long karyawanId,
            @PathVariable Long pendidikanId,
            @Valid @RequestBody BackgroundPendidikanRequest request) {
        BackgroundPendidikanDTO dto = backgroundPendidikanService.update(karyawanId, pendidikanId, request);
        return ResponseEntity.ok(JsendResponse.success(Map.of("backgroundPendidikan", dto)));
    }

    @DeleteMapping("/{karyawanId}/background-pendidikan/{pendidikanId}")
    public ResponseEntity<JsendResponse<Void>> deleteBackgroundPendidikan(
            @PathVariable Long karyawanId,
            @PathVariable Long pendidikanId) {
        backgroundPendidikanService.delete(karyawanId, pendidikanId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Portofolio ──────────────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/portofolio")
    public ResponseEntity<JsendResponse<Map<String, List<PortofolioDTO>>>> getPortofolio(
            @PathVariable Long karyawanId) {
        List<PortofolioDTO> list = portofolioService.findByKaryawan(karyawanId);
        return ResponseEntity.ok(JsendResponse.success(Map.of("portofolio", list)));
    }

    @PostMapping("/{karyawanId}/portofolio")
    public ResponseEntity<JsendResponse<Map<String, PortofolioDTO>>> addPortofolio(
            @PathVariable Long karyawanId,
            @Valid @RequestBody PortofolioRequest request) {
        PortofolioDTO dto = portofolioService.create(karyawanId, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("portofolio", dto)));
    }

    @PutMapping("/{karyawanId}/portofolio/{portofolioId}")
    public ResponseEntity<JsendResponse<Map<String, PortofolioDTO>>> updatePortofolio(
            @PathVariable Long karyawanId,
            @PathVariable Long portofolioId,
            @Valid @RequestBody PortofolioRequest request) {
        PortofolioDTO dto = portofolioService.update(karyawanId, portofolioId, request);
        return ResponseEntity.ok(JsendResponse.success(Map.of("portofolio", dto)));
    }

    @DeleteMapping("/{karyawanId}/portofolio/{portofolioId}")
    public ResponseEntity<JsendResponse<Void>> deletePortofolio(
            @PathVariable Long karyawanId,
            @PathVariable Long portofolioId) {
        portofolioService.delete(karyawanId, portofolioId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Penghargaan ─────────────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/penghargaan")
    public ResponseEntity<JsendResponse<Map<String, List<PenghargaanDTO>>>> getPenghargaan(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("penghargaan", penghargaanService.findByKaryawan(karyawanId))));
    }

    @PostMapping("/{karyawanId}/penghargaan")
    public ResponseEntity<JsendResponse<Map<String, PenghargaanDTO>>> addPenghargaan(
            @PathVariable Long karyawanId,
            @Valid @RequestBody PenghargaanRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("penghargaan", penghargaanService.create(karyawanId, request))));
    }

    @PutMapping("/{karyawanId}/penghargaan/{penghargaanId}")
    public ResponseEntity<JsendResponse<Map<String, PenghargaanDTO>>> updatePenghargaan(
            @PathVariable Long karyawanId,
            @PathVariable Long penghargaanId,
            @Valid @RequestBody PenghargaanRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("penghargaan", penghargaanService.update(karyawanId, penghargaanId, request))));
    }

    @DeleteMapping("/{karyawanId}/penghargaan/{penghargaanId}")
    public ResponseEntity<JsendResponse<Void>> deletePenghargaan(
            @PathVariable Long karyawanId,
            @PathVariable Long penghargaanId) {
        penghargaanService.delete(karyawanId, penghargaanId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Sertifikat ──────────────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/sertifikat")
    public ResponseEntity<JsendResponse<Map<String, List<SertifikatDTO>>>> getSertifikat(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("sertifikat", sertifikatService.findByKaryawan(karyawanId))));
    }

    @PostMapping(value = "/{karyawanId}/sertifikat", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, SertifikatDTO>>> addSertifikat(
            @PathVariable Long karyawanId,
            @Valid @RequestPart("data") SertifikatRequest request,
            @RequestPart(value = "file", required = false) MultipartFile file) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("sertifikat", sertifikatService.create(karyawanId, request, file))));
    }

    @PutMapping(value = "/{karyawanId}/sertifikat/{sertifikatId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<JsendResponse<Map<String, SertifikatDTO>>> updateSertifikat(
            @PathVariable Long karyawanId,
            @PathVariable Long sertifikatId,
            @Valid @RequestPart("data") SertifikatRequest request,
            @RequestPart(value = "file", required = false) MultipartFile file) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("sertifikat", sertifikatService.update(karyawanId, sertifikatId, request, file))));
    }

    @DeleteMapping("/{karyawanId}/sertifikat/{sertifikatId}")
    public ResponseEntity<JsendResponse<Void>> deleteSertifikat(
            @PathVariable Long karyawanId,
            @PathVariable Long sertifikatId) {
        sertifikatService.delete(karyawanId, sertifikatId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Pengalaman Organisasi ───────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/pengalaman-organisasi")
    public ResponseEntity<JsendResponse<Map<String, List<PengalamanOrganisasiDTO>>>> getPengalamanOrganisasi(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengalamanOrganisasi", pengalamanOrganisasiService.findByKaryawan(karyawanId))));
    }

    @PostMapping("/{karyawanId}/pengalaman-organisasi")
    public ResponseEntity<JsendResponse<Map<String, PengalamanOrganisasiDTO>>> addPengalamanOrganisasi(
            @PathVariable Long karyawanId,
            @Valid @RequestBody PengalamanOrganisasiRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("pengalamanOrganisasi", pengalamanOrganisasiService.create(karyawanId, request))));
    }

    @PutMapping("/{karyawanId}/pengalaman-organisasi/{organisasiId}")
    public ResponseEntity<JsendResponse<Map<String, PengalamanOrganisasiDTO>>> updatePengalamanOrganisasi(
            @PathVariable Long karyawanId,
            @PathVariable Long organisasiId,
            @Valid @RequestBody PengalamanOrganisasiRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("pengalamanOrganisasi", pengalamanOrganisasiService.update(karyawanId, organisasiId, request))));
    }

    @DeleteMapping("/{karyawanId}/pengalaman-organisasi/{organisasiId}")
    public ResponseEntity<JsendResponse<Void>> deletePengalamanOrganisasi(
            @PathVariable Long karyawanId,
            @PathVariable Long organisasiId) {
        pengalamanOrganisasiService.delete(karyawanId, organisasiId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Kontak Darurat ──────────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/kontak-darurat")
    public ResponseEntity<JsendResponse<Map<String, List<KontakDaruratDTO>>>> getKontakDarurat(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("kontakDarurat", kontakDaruratService.findByKaryawan(karyawanId))));
    }

    @PostMapping("/{karyawanId}/kontak-darurat")
    public ResponseEntity<JsendResponse<Map<String, KontakDaruratDTO>>> addKontakDarurat(
            @PathVariable Long karyawanId,
            @Valid @RequestBody KontakDaruratRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(JsendResponse.success(
                Map.of("kontakDarurat", kontakDaruratService.create(karyawanId, request))));
    }

    @PutMapping("/{karyawanId}/kontak-darurat/{kontakId}")
    public ResponseEntity<JsendResponse<Map<String, KontakDaruratDTO>>> updateKontakDarurat(
            @PathVariable Long karyawanId,
            @PathVariable Long kontakId,
            @Valid @RequestBody KontakDaruratRequest request) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("kontakDarurat", kontakDaruratService.update(karyawanId, kontakId, request))));
    }

    @DeleteMapping("/{karyawanId}/kontak-darurat/{kontakId}")
    public ResponseEntity<JsendResponse<Void>> deleteKontakDarurat(
            @PathVariable Long karyawanId,
            @PathVariable Long kontakId) {
        kontakDaruratService.delete(karyawanId, kontakId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Pola Kerja Karyawan ────────────────────────────────────────────────────

    @PutMapping("/{id}/pola-kerja")
    public ResponseEntity<JsendResponse<Void>> updatePolaKerja(
            @PathVariable Long id,
            @RequestParam Long polaKerjaId) {
        karyawanService.updatePolaKerja(id, polaKerjaId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── Perangkat Karyawan ──────────────────────────────────────────────────────

    @GetMapping("/{karyawanId}/perangkat")
    public ResponseEntity<JsendResponse<Map<String, List<PerangkatDTO>>>> getPerangkat(
            @PathVariable Long karyawanId) {
        return ResponseEntity.ok(JsendResponse.success(
                Map.of("perangkat", perangkatService.findByKaryawan(karyawanId))));
    }

    @DeleteMapping("/{karyawanId}/perangkat/{perangkatId}")
    public ResponseEntity<JsendResponse<Void>> deletePerangkat(
            @PathVariable Long karyawanId,
            @PathVariable Long perangkatId) {
        perangkatService.delete(karyawanId, perangkatId);
        return ResponseEntity.ok(JsendResponse.success(null));
    }

    // ── helper ─────────────────────────────────────────────────────────────────

    private String savePhoto(MultipartFile foto) throws IOException {
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) Files.createDirectories(uploadPath);
        String ext      = StringUtils.getFilenameExtension(foto.getOriginalFilename());
        String filename = UUID.randomUUID() + (ext != null ? "." + ext : "");
        Files.copy(foto.getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        return UPLOAD_DIR + filename;
    }
}
