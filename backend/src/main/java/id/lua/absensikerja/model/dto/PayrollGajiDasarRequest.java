package id.lua.absensikerja.model.dto;

import jakarta.validation.Valid;
import lombok.Data;

import java.util.List;

@Data
public class PayrollGajiDasarRequest {

    private String tipeGaji;

    // Rincian gaji
    @Valid
    private List<PayrollRincianGajiRequest> rincianGaji;

    // Upah Lembur
    private String tipeUpahLembur;
    private String satuanLembur;
    private Double lemburHariKerja;
    private Double lemburSabtu;
    private Double lemburMinggu;
    private Double lemburKalenderLibur;

    // Potongan
    private Double  potonganIzinJam;
    private Double  potonganJamKerjaTidakTerpenuhi;
    private Boolean potonganAbsenOtomatis;
    private Boolean potonganAbsenManual;
}
