package id.lua.absensikerja.model.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateSisaCutiRequest {
    private Integer   sisaCuti;
    private LocalDate tglCutiBerakhir;

    // Pengaturan Pembaruan Otomatis
    private Boolean   pembaruanCutiAktif;
    private Integer   periodePembaruanBulan;
    private Integer   jumlahCutiPembaruan;
    private Boolean   tambahkanSisaCutiSebelumnya;
    private LocalDate tglPembaruanBerikutnya;
}
