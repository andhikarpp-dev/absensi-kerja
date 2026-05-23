package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data @Builder
public class PayrollGajiDasarDTO {

    private Long   id;
    private Long   karyawanId;
    private String namaKaryawan;

    private String tipeGaji;
    private List<PayrollRincianGajiDTO> rincianGaji;
    private BigDecimal totalGaji;

    private String tipeUpahLembur;
    private String satuanLembur;
    private Double lemburHariKerja;
    private Double lemburSabtu;
    private Double lemburMinggu;
    private Double lemburKalenderLibur;

    private Double  potonganIzinJam;
    private Double  potonganJamKerjaTidakTerpenuhi;
    private Boolean potonganAbsenOtomatis;
    private Boolean potonganAbsenManual;

    private LocalDateTime updatedAt;
}
