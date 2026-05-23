package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 * Request body untuk registrasi pemilik bisnis (role PEMILIK).
 * POST /auth/register/owner
 */
@Getter
@Setter
public class RegisterOwnerRequest {

    @NotBlank(message = "Nama lengkap tidak boleh kosong")
    @Size(max = 100, message = "Nama lengkap maksimal 100 karakter")
    private String namaLengkap;

    @NotBlank(message = "Nama perusahaan tidak boleh kosong")
    @Size(max = 150, message = "Nama perusahaan maksimal 150 karakter")
    private String namaPerusahaan;

    /** Nama divisi — jika belum ada akan dibuat otomatis */
    @NotBlank(message = "Nama divisi tidak boleh kosong")
    @Size(max = 100, message = "Nama divisi maksimal 100 karakter")
    private String namaDivisi;

    /** Jabatan pemilik di perusahaan, misal "Owner", "CEO", "Direktur" */
    @NotBlank(message = "Jabatan tidak boleh kosong")
    @Size(max = 50, message = "Jabatan maksimal 50 karakter")
    private String jabatan;

    @NotBlank(message = "Email tidak boleh kosong")
    @Email(message = "Format email tidak valid")
    private String email;

    @NotBlank(message = "Nomor WhatsApp tidak boleh kosong")
    @Pattern(regexp = "^[0-9+\\-\\s]{8,20}$", message = "Format nomor WhatsApp tidak valid")
    private String whatsapp;

    /**
     * Zona waktu: WIB, WITA, atau WIT
     */
    @NotBlank(message = "Zona waktu tidak boleh kosong")
    @Pattern(regexp = "^(WIB|WITA|WIT)$", message = "Zona waktu harus salah satu dari: WIB, WITA, WIT")
    private String zonaWaktu;

    /** Kebutuhan fitur tambahan (opsional) */
    private String fiturKebutuhan;

    /** Password untuk login – minimal 6 karakter */
    @NotBlank(message = "Password tidak boleh kosong")
    @Size(min = 6, message = "Password minimal 6 karakter")
    private String password;
}
