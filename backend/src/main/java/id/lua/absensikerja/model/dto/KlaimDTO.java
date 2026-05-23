package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisKlaim;
import id.lua.absensikerja.model.enums.StatusKlaim;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder
public class KlaimDTO {
    private Long           id;
    private Long           karyawanId;
    private String         namaKaryawan;
    private String         fotoProfil;
    private String         namaJabatan;
    private String         namaDivisi;
    private String         zonaWaktu;
    private JenisKlaim     jenisKlaim;
    private BigDecimal     nominal;
    private String         keterangan;
    private String         lampiranUrl;
    private StatusKlaim    status;
    private String         catatanPenolakan;
    private List<KlaimItemPengeluaranDTO> itemPengeluaran;
    private LocalDateTime  createdAt;
    private LocalDateTime  updatedAt;
}
