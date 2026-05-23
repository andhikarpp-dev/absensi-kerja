package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class LokasiKehadiranRequest {

    @NotBlank(message = "Nama lokasi wajib diisi")
    @Size(max = 150)
    private String namaLokasi;

    @Size(max = 500)
    private String alamat;

    private BigDecimal latitude;
    private BigDecimal longitude;

    @PositiveOrZero(message = "Radius harus >= 0 meter")
    private Integer radiusMeter;

    private Boolean aktif;

    /** SEMUA / DIVISI / KARYAWAN. Default SEMUA. */
    private String targetTipe;

    /** ID divisi yang ditugaskan (jika targetTipe = DIVISI). */
    private java.util.List<Long> divisiIds;

    /** ID karyawan yang ditugaskan (jika targetTipe = KARYAWAN). */
    private java.util.List<Long> karyawanIds;

    // ── Fingerspot ──
    private Boolean hanyaFingerspot;

    @Size(max = 100)
    private String fingerspotSn;

    @Size(max = 100)
    private String fingerspotIp;

    private Integer fingerspotPort;

    @Size(max = 255)
    private String fingerspotCatatan;
}
