package id.lua.absensikerja.model.dto;

import lombok.Data;

/** Dikirim saat check-in (foto sudah diupload terpisah via multipart). */
@Data
public class CheckInRequest {
    private String catatan;
    // fotoMasuk diisi controller dari multipart
}
