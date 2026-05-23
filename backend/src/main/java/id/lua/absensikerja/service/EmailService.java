package id.lua.absensikerja.service;

public interface EmailService {
    void sendWelcomeOwnerEmail(String toEmail, String namaLengkap, String namaPerusahaan);
    void sendWelcomeKaryawanEmail(String toEmail, String namaLengkap, String namaPerusahaan);
    void sendVerificationEmail(String toEmail, String namaLengkap, String namaPerusahaan, String verificationUrl);

    /** Kirim email dengan attachment biner (mis. file Excel hasil ekspor). */
    void sendEmailWithAttachment(String toEmail, String subject, String htmlBody,
                                 String attachmentName, byte[] attachment, String contentType);
}
