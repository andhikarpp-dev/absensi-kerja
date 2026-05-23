package id.lua.absensikerja.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.mail.from}")
    private String from;

    @Value("${app.frontend-url}")
    private String frontendUrl;

    // ── Welcome Owner ─────────────────────────────────────────────────────────

    @Async
    @Override
    public void sendWelcomeOwnerEmail(String toEmail, String namaLengkap, String namaPerusahaan) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(from);
            helper.setTo(toEmail);
            helper.setSubject("Selamat Datang di AbsensiKerja 🎉");
            helper.setText(buildOwnerHtml(namaLengkap, toEmail, namaPerusahaan), true);
            mailSender.send(message);
            log.info("Welcome owner email sent to {}", toEmail);
        } catch (MessagingException e) {
            log.error("Gagal mengirim email ke {}: {}", toEmail, e.getMessage());
        }
    }

    private String buildOwnerHtml(String namaLengkap, String emailAkun, String namaPerusahaan) {
        return """
            <!DOCTYPE html>
            <html lang="id">
            <head>
              <meta charset="UTF-8"/>
              <style>
                body { margin:0; padding:0; background:#f1f5f9; font-family:'Segoe UI',Arial,sans-serif; }
                .wrap { max-width:560px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden;
                        box-shadow:0 4px 24px rgba(0,0,0,.08); }
                .header { background:linear-gradient(135deg,#4f46e5 0%%,#7c3aed 100%%); padding:36px 32px; text-align:center; }
                .header h1 { color:#fff; margin:0; font-size:26px; }
                .header p  { color:#c7d2fe; margin:6px 0 0; font-size:14px; }
                .body { padding:32px; }
                .body h2 { color:#1e293b; margin:0 0 12px; font-size:20px; }
                .body p  { color:#475569; line-height:1.7; margin:0 0 16px; font-size:15px; }
                .account-box { background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;
                               padding:20px 24px; margin-bottom:20px; }
                .account-box .label { color:#64748b; font-size:13px; margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px; }
                .account-box .email { display:block; background:#fff; border:1px solid #cbd5e1; border-radius:6px;
                                      padding:10px 14px; font-family:monospace; font-size:15px; color:#4f46e5; }
                .highlight { background:#f0fdf4; border-left:4px solid #22c55e; padding:12px 16px;
                             border-radius:6px; color:#166534; font-size:14px; margin-bottom:20px; }
                .btn { display:inline-block; background:linear-gradient(135deg,#4f46e5,#7c3aed);
                       color:#fff; text-decoration:none; padding:14px 32px; border-radius:8px;
                       font-size:15px; font-weight:600; margin:8px 0 24px; }
                .list { padding-left:20px; color:#475569; font-size:15px; line-height:1.9; }
                .footer { background:#f8fafc; text-align:center; padding:20px 32px;
                          font-size:12px; color:#94a3b8; border-top:1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="wrap">
                <div class="header">
                  <h1>AbsensiKerja</h1>
                  <p>Sistem Absensi Digital untuk Bisnis Anda</p>
                </div>
                <div class="body">
                  <h2>Halo, %s! 👋</h2>
                  <p>Selamat datang di <strong>AbsensiKerja</strong>! Akun perusahaan <strong>%s</strong> Anda telah berhasil didaftarkan.</p>
                  <div class="account-box">
                    <div class="label">Email akun Anda</div>
                    <span class="email">%s</span>
                  </div>
                  <div class="highlight">
                    ✅ Akun Anda aktif dan siap digunakan. Nikmati uji coba gratis selama <strong>14 hari</strong>!
                  </div>
                  <p>Dengan AbsensiKerja Anda dapat:</p>
                  <ul class="list">
                    <li>Kelola absensi karyawan secara real-time</li>
                    <li>Atur jadwal &amp; pola kerja dengan mudah</li>
                    <li>Pantau laporan kehadiran kapan saja</li>
                    <li>Kelola izin &amp; cuti secara digital</li>
                  </ul>
                  <a class="btn" href="%s/auth/login">Masuk ke Akun</a>
                  <p style="font-size:13px;color:#94a3b8">Jika Anda tidak merasa mendaftar, abaikan email ini.</p>
                </div>
                <div class="footer">© 2026 AbsensiKerja · Semua hak dilindungi</div>
              </div>
            </body>
            </html>
            """.formatted(namaLengkap, namaPerusahaan, emailAkun, frontendUrl);
    }

    // ── Verifikasi Email Karyawan ─────────────────────────────────────────────

    @Async
    @Override
    public void sendVerificationEmail(String toEmail, String namaLengkap, String namaPerusahaan, String verificationUrl) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(from);
            helper.setTo(toEmail);
            helper.setSubject("Verifikasi Akun Anda — AbsensiKerja");
            helper.setText(buildVerificationHtml(namaLengkap, toEmail, namaPerusahaan, verificationUrl), true);
            mailSender.send(message);
            log.info("Verification email sent to {}", toEmail);
        } catch (MessagingException e) {
            log.error("Gagal mengirim email verifikasi ke {}: {}", toEmail, e.getMessage());
        }
    }

    private String buildVerificationHtml(String namaLengkap, String emailAkun, String namaPerusahaan, String verificationUrl) {
        return """
            <!DOCTYPE html>
            <html lang="id">
            <head>
              <meta charset="UTF-8"/>
              <style>
                body { margin:0; padding:0; background:#f1f5f9; font-family:'Segoe UI',Arial,sans-serif; }
                .wrap { max-width:560px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden;
                        box-shadow:0 4px 24px rgba(0,0,0,.08); }
                .header { background:linear-gradient(135deg,#f59e0b 0%%,#ef4444 100%%); padding:36px 32px; text-align:center; }
                .header h1 { color:#fff; margin:0; font-size:26px; }
                .header p  { color:#fde68a; margin:6px 0 0; font-size:14px; }
                .body { padding:32px; }
                .body h2 { color:#1e293b; margin:0 0 12px; font-size:20px; }
                .body p  { color:#475569; line-height:1.7; margin:0 0 16px; font-size:15px; }
                .account-box { background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;
                               padding:20px 24px; margin-bottom:20px; }
                .account-box .label { color:#64748b; font-size:13px; margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px; }
                .account-box .email { display:block; background:#fff; border:1px solid #cbd5e1; border-radius:6px;
                                      padding:10px 14px; font-family:monospace; font-size:15px; color:#ef4444; }
                .warning { background:#fef2f2; border-left:4px solid #ef4444; padding:12px 16px;
                           border-radius:6px; color:#991b1b; font-size:13px; margin-bottom:20px; }
                .btn { display:inline-block; background:linear-gradient(135deg,#f59e0b,#ef4444);
                       color:#fff; text-decoration:none; padding:14px 36px; border-radius:8px;
                       font-size:16px; font-weight:700; margin:8px 0 24px; }
                .link-fallback { word-break:break-all; font-size:12px; color:#6366f1;
                                 background:#f1f5f9; padding:10px; border-radius:6px; }
                .footer { background:#f8fafc; text-align:center; padding:20px 32px;
                          font-size:12px; color:#94a3b8; border-top:1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="wrap">
                <div class="header">
                  <h1>Verifikasi Email 📧</h1>
                  <p>Satu langkah lagi untuk mengaktifkan akun Anda</p>
                </div>
                <div class="body">
                  <h2>Halo, %s! 👋</h2>
                  <p>Akun karyawan Anda di <strong>%s</strong> telah berhasil dibuat oleh administrator.
                     Namun, akun Anda <strong>belum aktif</strong> dan belum dapat digunakan untuk login.</p>

                  <div class="account-box">
                    <div class="label">Email akun Anda</div>
                    <span class="email">%s</span>
                  </div>

                  <p>Silakan klik tombol di bawah ini untuk memverifikasi email dan mengaktifkan akun Anda:</p>

                  <div style="text-align:center;">
                    <a class="btn" href="%s">✓ Verifikasi Akun Saya</a>
                  </div>

                  <div class="warning">
                    ⚠️ <strong>Penting:</strong> Akun Anda <u>tidak dapat digunakan untuk login</u>
                    hingga verifikasi email berhasil dilakukan.
                  </div>

                  <p style="font-size:13px;color:#64748b">
                    Jika tombol tidak berfungsi, salin dan tempel tautan berikut di browser Anda:
                  </p>
                  <div class="link-fallback">%s</div>

                  <p style="font-size:13px;color:#94a3b8;margin-top:20px">
                    Jika Anda tidak merasa mendaftar, harap abaikan email ini atau hubungi administrator perusahaan.
                  </p>
                </div>
                <div class="footer">© 2026 AbsensiKerja · Semua hak dilindungi</div>
              </div>
            </body>
            </html>
            """.formatted(namaLengkap, namaPerusahaan, emailAkun, verificationUrl, verificationUrl);
    }

    // ── Welcome Karyawan (setelah verifikasi berhasil) ────────────────────────

    @Async
    @Override
    public void sendWelcomeKaryawanEmail(String toEmail, String namaLengkap, String namaPerusahaan) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(from);
            helper.setTo(toEmail);
            helper.setSubject("Akun Karyawan Anda di " + namaPerusahaan + " Telah Dibuat 🎉");
            helper.setText(buildKaryawanHtml(namaLengkap, toEmail, namaPerusahaan), true);
            mailSender.send(message);
            log.info("Welcome karyawan email sent to {}", toEmail);
        } catch (MessagingException e) {
            log.error("Gagal mengirim email ke {}: {}", toEmail, e.getMessage());
        }
    }

    private String buildKaryawanHtml(String namaLengkap, String emailAkun, String namaPerusahaan) {
        return """
            <!DOCTYPE html>
            <html lang="id">
            <head>
              <meta charset="UTF-8"/>
              <style>
                body { margin:0; padding:0; background:#f1f5f9; font-family:'Segoe UI',Arial,sans-serif; }
                .wrap { max-width:560px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden;
                        box-shadow:0 4px 24px rgba(0,0,0,.08); }
                .header { background:linear-gradient(135deg,#0ea5e9 0%%,#6366f1 100%%); padding:36px 32px; text-align:center; }
                .header h1 { color:#fff; margin:0; font-size:26px; }
                .header p  { color:#bae6fd; margin:6px 0 0; font-size:14px; }
                .body { padding:32px; }
                .body h2 { color:#1e293b; margin:0 0 12px; font-size:20px; }
                .body p  { color:#475569; line-height:1.7; margin:0 0 16px; font-size:15px; }
                .account-box { background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px;
                               padding:20px 24px; margin-bottom:20px; }
                .account-box .label { color:#64748b; font-size:13px; margin-bottom:6px; text-transform:uppercase; letter-spacing:.5px; }
                .account-box .email { display:block; background:#fff; border:1px solid #cbd5e1; border-radius:6px;
                                      padding:10px 14px; font-family:monospace; font-size:15px; color:#0ea5e9; }
                .info { background:#eff6ff; border-left:4px solid #3b82f6; padding:12px 16px;
                        border-radius:6px; color:#1e40af; font-size:13px; margin-bottom:20px; }
                .btn { display:inline-block; background:linear-gradient(135deg,#0ea5e9,#6366f1);
                       color:#fff; text-decoration:none; padding:14px 32px; border-radius:8px;
                       font-size:15px; font-weight:600; margin:8px 0 24px; }
                .footer { background:#f8fafc; text-align:center; padding:20px 32px;
                          font-size:12px; color:#94a3b8; border-top:1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="wrap">
                <div class="header">
                  <h1>AbsensiKerja</h1>
                  <p>Sistem Absensi Digital — %s</p>
                </div>
                <div class="body">
                  <h2>Halo, %s! 👋</h2>
                  <p>Akun karyawan Anda di <strong>%s</strong> telah berhasil dibuat oleh administrator.</p>
                  <div class="account-box">
                    <div class="label">Email akun Anda</div>
                    <span class="email">%s</span>
                  </div>
                  <div class="info">
                    ℹ️ Silakan hubungi administrator perusahaan Anda untuk memperoleh kata sandi akun.
                  </div>
                  <a class="btn" href="%s/auth/login">Login Sekarang</a>
                  <p style="font-size:13px;color:#94a3b8">
                    Jika Anda tidak merasa mendaftar, harap hubungi administrator perusahaan Anda.
                  </p>
                </div>
                <div class="footer">© 2026 AbsensiKerja · Semua hak dilindungi</div>
              </div>
            </body>
            </html>
            """.formatted(namaPerusahaan, namaLengkap, namaPerusahaan, emailAkun, frontendUrl);
    }

    // ── Email dengan Attachment (Ekspor Excel) ────────────────────────────────

    @Async
    @Override
    public void sendEmailWithAttachment(String toEmail, String subject, String htmlBody,
                                        String attachmentName, byte[] attachment, String contentType) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(from);
            helper.setTo(toEmail);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);
            if (attachment != null && attachment.length > 0 && attachmentName != null) {
                helper.addAttachment(attachmentName,
                        new org.springframework.core.io.ByteArrayResource(attachment),
                        contentType != null ? contentType : "application/octet-stream");
            }
            mailSender.send(message);
            log.info("Email + attachment '{}' terkirim ke {}", attachmentName, toEmail);
        } catch (MessagingException e) {
            log.error("Gagal mengirim email attachment ke {}: {}", toEmail, e.getMessage());
        }
    }
}
