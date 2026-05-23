package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.StatusIzin;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder
public class IzinHariDTO {
    private Long            id;
    private Long            karyawanId;
    private String          namaKaryawan;
    private String          namaDivisi;
    private String          namaJabatan;
    private String          fotoProfil;
    private String          zonaWaktu;

    private List<LocalDate> tanggalList;
    private String          keperluan;
    private boolean         mengurangiGaji;
    private String          lampiranUrl;

    private StatusIzin      status;
    private String          catatanPenolakan;

    private LocalDateTime   createdAt;
    private LocalDateTime   updatedAt;
}
