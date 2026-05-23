package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class SuratPeringatanRequest {

    @NotNull(message = "Jenis peringatan wajib diisi")
    private Long jenisId;

    @NotNull(message = "Tanggal mulai wajib diisi")
    private LocalDate tanggalMulai;

    @NotNull(message = "Tanggal selesai wajib diisi")
    private LocalDate tanggalSelesai;

    private String  pelanggaran;
    private Boolean cegahPresensi;

    /** Daftar penyetuju (urutan sesuai posisi list). */
    private List<Penyetuju> penyetuju;

    @Data
    public static class Penyetuju {
        private Long   karyawanId;   // opsional
        private String nama;         // wajib
    }
}
