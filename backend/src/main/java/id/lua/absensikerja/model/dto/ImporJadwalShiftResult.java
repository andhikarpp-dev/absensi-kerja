package id.lua.absensikerja.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class ImporJadwalShiftResult {
    private int berhasil;
    private int gagal;

    @Builder.Default
    private List<BarisSalah> errors = new ArrayList<>();

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class BarisSalah {
        private int    baris;
        private String nip;
        private String nama;
        private String tanggal;
        private String pesan;
    }
}
