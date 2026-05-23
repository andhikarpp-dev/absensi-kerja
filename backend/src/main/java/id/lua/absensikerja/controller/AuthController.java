package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import id.lua.absensikerja.model.dto.LoginRequest;
import id.lua.absensikerja.model.dto.LoginResponse;
import id.lua.absensikerja.model.dto.RegisterOwnerRequest;
import id.lua.absensikerja.model.dto.RegisterRequest;
import id.lua.absensikerja.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

/**
 * REST controller untuk autentikasi.
 *
 * POST /auth/login    – login, kembalikan JWT
 * POST /auth/register – daftar akun baru (role KARYAWAN)
 * GET  /auth/me       – info user dari token (contoh endpoint terproteksi)
 */
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @Value("${app.frontend-url}")
    private String frontendUrl;

    // ── POST /auth/login ──────────────────────────────────────────────────────

    /**
     * Login dengan username + password.
     * Response: { status:"success", data:{ token, tokenType, expiresIn, username, namaLengkap, email, role } }
     */
    @PostMapping("/login")
    public ResponseEntity<JsendResponse<Map<String, LoginResponse>>> login(
            @Valid @RequestBody LoginRequest request) {

        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(
                JsendResponse.success(Map.of("user", response)));
    }

    // ── POST /auth/register ───────────────────────────────────────────────────

    /**
     * Daftar akun baru. Role default: KARYAWAN.
     * Response: { status:"success", data:{ message:"..." } }
     */
    @PostMapping("/register")
    public ResponseEntity<JsendResponse<Map<String, String>>> register(
            @Valid @RequestBody RegisterRequest request) {

        authService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(
                        Map.of("message", "Akun berhasil dibuat. Silakan login.")));
    }

    // ── POST /auth/register/owner ─────────────────────────────────────────────

    /**
     * Daftar akun pemilik bisnis (role PEMILIK).
     * Langsung mengembalikan token (auto-login) setelah registrasi berhasil.
     * Response: { status:"success", data:{ user:{ token, ... } } }
     */
    @PostMapping("/register/owner")
    public ResponseEntity<JsendResponse<Map<String, LoginResponse>>> registerOwner(
            @Valid @RequestBody RegisterOwnerRequest request) {

        LoginResponse response = authService.registerOwner(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(JsendResponse.success(Map.of("user", response)));
    }

    // ── GET /auth/verify?token=... ────────────────────────────────────────────

    /**
     * Verifikasi email karyawan via link dari email.
     * Setelah berhasil akan redirect ke halaman login frontend dengan query status.
     */
    @GetMapping("/verify")
    public RedirectView verifyEmail(@RequestParam("token") String token) {
        String verifyPage = frontendUrl + "/auth/verify-email";
        try {
            authService.verifyEmail(token);
            return new RedirectView(verifyPage + "?status=success");
        } catch (Exception ex) {
            String msg = URLEncoder.encode(
                    ex.getMessage() == null ? "Verifikasi gagal" : ex.getMessage(),
                    StandardCharsets.UTF_8);
            return new RedirectView(verifyPage + "?status=failed&message=" + msg);
        }
    }
}
