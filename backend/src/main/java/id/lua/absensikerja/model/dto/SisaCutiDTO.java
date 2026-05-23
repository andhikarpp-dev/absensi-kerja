package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data @Builder
public class SisaCutiDTO {
    private Integer   sisaCuti;
    private LocalDate tglCutiBerakhir;
    private Double    terpakai;

    // Pengaturan Pembaruan Otomatis
    private boolean   pembaruanCutiAktif;
    private Integer   periodePembaruanBulan;
    private Integer   jumlahCutiPembaruan;
    private boolean   tambahkanSisaCutiSebelumnya;
    private LocalDate tglPembaruanBerikutnya;
}
