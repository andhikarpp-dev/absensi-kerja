package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusPersetujuanSP;
import id.lua.absensikerja.model.enums.StatusSuratPeringatan;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder
public class SuratPeringatanDTO {
    private Long                  id;
    private Long                  karyawanId;
    private String                namaKaryawan;
    private String                namaDivisi;
    private String                namaJabatan;

    private Long                  jenisId;
    private String                jenisKode;
    private String                jenisNama;

    private LocalDate             tanggalMulai;
    private LocalDate             tanggalSelesai;
    private String                pelanggaran;
    private String                dokumenUrl;
    private boolean               cegahPresensi;

    private StatusSuratPeringatan status;
    private StatusPersetujuanSP   statusPersetujuan;
    private String                catatanPenolakan;

    private List<PenyetujuSuratPeringatanDTO> penyetuju;

    private LocalDateTime         createdAt;
    private LocalDateTime         updatedAt;
}
