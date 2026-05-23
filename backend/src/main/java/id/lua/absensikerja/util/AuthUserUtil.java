package id.lua.absensikerja.util;

import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.server.ResponseStatusException;

import jakarta.servlet.http.HttpServletRequest;

/**
 * Helper untuk mengambil User yang sedang login dari JWT di Authorization header.
 */
@Component
@RequiredArgsConstructor
public class AuthUserUtil {

    private final JwtUtil        jwtUtil;
    private final UserRepository userRepository;

    /** Ambil User yang sedang login. Lempar 401 jika token tidak valid. */
    public User getCurrentUser() {
        HttpServletRequest request = ((ServletRequestAttributes)
                RequestContextHolder.currentRequestAttributes()).getRequest();

        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Token tidak ditemukan");
        }

        String token    = authHeader.substring(7);
        String username = jwtUtil.extractUsername(token);

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "User tidak ditemukan"));
    }

    /** Ambil User, kembalikan null jika tidak ada token (guest). */
    public User getCurrentUserOrNull() {
        try {
            return getCurrentUser();
        } catch (Exception e) {
            return null;
        }
    }
}
