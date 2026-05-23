package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class SisaCutiRiwayatDTO {
    private Long          id;
    private LocalDateTime tanggal;
    private String        deskripsi;
    private int           jumlah;
    private int           saldo;
}
