package id.lua.absensikerja.model.dto;

import id.lua.absensikerja.model.enums.JenisUpahOpenshift;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OpenshiftDTO {
    private Long id;
    private LocalDateTime jamMasuk;
    private LocalDateTime jamKeluar;
    private JenisUpahOpenshift jenisUpah;
    private Long upahPerJam;
    private Integer maksKaryawan;
    private String catatan;
    private Set<Long> divisiIds;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
