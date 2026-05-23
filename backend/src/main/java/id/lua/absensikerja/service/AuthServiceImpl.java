package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.LoginRequest;
import id.lua.absensikerja.model.dto.LoginResponse;
import id.lua.absensikerja.model.dto.RegisterOwnerRequest;
import id.lua.absensikerja.model.dto.RegisterRequest;
import id.lua.absensikerja.model.entity.Karyawan;
import id.lua.absensikerja.model.entity.Perusahaan;
import id.lua.absensikerja.model.entity.Role;
import id.lua.absensikerja.model.entity.User;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.model.enums.ZonaWaktu;
import id.lua.absensikerja.repository.KaryawanRepository;
import id.lua.absensikerja.repository.PerusahaanRepository;
import id.lua.absensikerja.repository.RoleRepository;
import id.lua.absensikerja.repository.UserRepository;
import id.lua.absensikerja.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository       userRepository;
    private final RoleRepository       roleRepository;
    private final KaryawanRepository   karyawanRepository;
    private final PerusahaanRepository perusahaanRepository;
    private final PasswordEncoder      passwordEncoder;
    private final JwtUtil              jwtUtil;
    private final EmailService         emailService;

    // ── Login ─────────────────────────────────────────────────────────────────

    @Override
    public LoginResponse login(LoginRequest request) {
        // Support login dengan email ATAU username
        User user = userRepository.findByEmail(request.getUsername())
                .or(() -> userRepository.findByUsername(request.getUsername()))
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "Email/username atau password salah"));

        if (!user.isActive()) {
            if (user.getVerificationToken() != null) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN,
                        "Akun belum diverifikasi. Silakan cek email Anda dan klik tautan verifikasi.");
            }
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Akun tidak aktif");
        }
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email/username atau password salah");
        }

        String roleName = user.getRole().getName().name();
        String token    = jwtUtil.generateToken(user.getUsername(), roleName);

        // Ambil data karyawan → divisi
        Karyawan karyawan = karyawanRepository.findByUserId(user.getId()).orElse(null);
        Long   divisiId   = (karyawan != null && karyawan.getDivisi() != null) ? karyawan.getDivisi().getId()        : null;
        String divisiNama = (karyawan != null && karyawan.getDivisi() != null) ? karyawan.getDivisi().getNamaDivisi() : null;

        // Ambil perusahaan — dari karyawan record atau langsung dari tabel perusahaan (PEMILIK)
        Long   perusahaanId   = (karyawan != null && karyawan.getPerusahaan() != null) ? karyawan.getPerusahaan().getId()              : null;
        String perusahaanNama = (karyawan != null && karyawan.getPerusahaan() != null) ? karyawan.getPerusahaan().getNamaPerusahaan()   : null;
        if (perusahaanId == null) {
            Perusahaan p = perusahaanRepository.findByOwnerId(user.getId()).orElse(null);
            if (p != null) { perusahaanId = p.getId(); perusahaanNama = p.getNamaPerusahaan(); }
        }

        return LoginResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .expiresIn(jwtUtil.getExpirationSeconds())
                .username(user.getUsername())
                .namaLengkap(user.getNamaLengkap())
                .email(user.getEmail())
                .role(roleName)
                .perusahaanId(perusahaanId)
                .perusahaanNama(perusahaanNama)
                .divisiId(divisiId)
                .divisiNama(divisiNama)
                .karyawanId(karyawan != null ? karyawan.getId() : null)
                .build();
    }

    // ── Register Karyawan ─────────────────────────────────────────────────────

    @Override
    public void register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Username '" + request.getUsername() + "' sudah digunakan");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Email '" + request.getEmail() + "' sudah terdaftar");
        }

        Role role = roleRepository.findByName(RoleType.KARYAWAN)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.INTERNAL_SERVER_ERROR, "Role KARYAWAN tidak ditemukan"));

        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .namaLengkap(request.getNamaLengkap())
                .email(request.getEmail())
                .role(role)
                .isActive(true)
                .build();
        userRepository.save(user);
    }

    // ── Register Owner ─────────────────────────────────────────────────────────

    @Override
    @Transactional
    public LoginResponse registerOwner(RegisterOwnerRequest request) {

        // 1. Cek duplikat email
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Email '" + request.getEmail() + "' sudah terdaftar");
        }

        // 2. Username = bagian sebelum @ pada email (tanpa generate suffix)
        String username = request.getEmail().split("@")[0];
        if (userRepository.existsByUsername(username)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Username '" + username + "' sudah digunakan. Gunakan email lain.");
        }

        // 3. Ambil role PEMILIK
        Role role = roleRepository.findByName(RoleType.PEMILIK)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.INTERNAL_SERVER_ERROR, "Role PEMILIK tidak ditemukan"));

        // 4. Simpan User — username = email
        User user = User.builder()
                .username(username)          // email dipakai sebagai username
                .password(passwordEncoder.encode(request.getPassword()))
                .namaLengkap(request.getNamaLengkap())
                .email(request.getEmail())
                .whatsapp(request.getWhatsapp())
                .role(role)
                .isActive(true)
                .build();
        userRepository.save(user);

        // 5. Buat Perusahaan — hanya ini, tidak ada Divisi/Karyawan
        ZonaWaktu zona = ZonaWaktu.valueOf(request.getZonaWaktu());
        Perusahaan perusahaan = Perusahaan.builder()
                .namaPerusahaan(request.getNamaPerusahaan())
                .whatsapp(request.getWhatsapp())
                .zonaWaktu(zona)
                .jabatanPemilik(request.getJabatan())
                .fiturKebutuhan(request.getFiturKebutuhan())
                .owner(user)
                .build();
        perusahaanRepository.save(perusahaan);

        // 6a. Kirim email selamat datang (async – tidak menghambat response)
        emailService.sendWelcomeOwnerEmail(user.getEmail(), user.getNamaLengkap(), perusahaan.getNamaPerusahaan());

        // 6. Auto-login: generate JWT — divisi & karyawan kosong (belum ada)
        String token = jwtUtil.generateToken(user.getUsername(), RoleType.PEMILIK.name());
        return LoginResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .expiresIn(jwtUtil.getExpirationSeconds())
                .username(user.getUsername())
                .namaLengkap(user.getNamaLengkap())
                .email(user.getEmail())
                .role(RoleType.PEMILIK.name())
                .perusahaanId(perusahaan.getId())
                .perusahaanNama(perusahaan.getNamaPerusahaan())
                .divisiId(null)
                .divisiNama(null)
                .build();
    }

    // ── Verifikasi Email ──────────────────────────────────────────────────────

    @Override
    @Transactional
    public void verifyEmail(String token) {
        if (token == null || token.isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Token verifikasi tidak valid");
        }

        User user = userRepository.findByVerificationToken(token)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Token verifikasi tidak ditemukan atau sudah digunakan"));

        user.setActive(true);
        user.setVerificationToken(null);
        userRepository.save(user);
    }
}
