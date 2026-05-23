package id.lua.absensikerja.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

/**
 * Utility untuk membuat dan memvalidasi JSON Web Token (JWT).
 */
@Component
public class JwtUtil {

    private final SecretKey secretKey;
    private final long      expirationMs;

    public JwtUtil(
            @Value("${security.jwt.secret-key}") String secret,
            @Value("${security.jwt.expiration-time-hour}") long expirationHour) {

        this.secretKey    = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.expirationMs = expirationHour * 3600 * 1000L;
    }

    /** Buat token dengan subject = username dan claim role. */
    public String generateToken(String username, String role) {
        Date now    = new Date();
        Date expiry = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .subject(username)
                .claim("role", role)
                .issuedAt(now)
                .expiration(expiry)
                .signWith(secretKey)
                .compact();
    }

    /** Ambil username (subject) dari token. Lempar JwtException jika tidak valid. */
    public String extractUsername(String token) {
        return parseClaims(token).getSubject();
    }

    /** Ambil role dari token. */
    public String extractRole(String token) {
        return parseClaims(token).get("role", String.class);
    }

    /** Validasi token – kembalikan true jika valid dan belum expired. */
    public boolean isValid(String token) {
        try {
            parseClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    /** Waktu kadaluarsa dalam detik (untuk response). */
    public long getExpirationSeconds() {
        return expirationMs / 1000;
    }

    // ── internal ──────────────────────────────────────────────────────────────

    private Claims parseClaims(String token) {
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
