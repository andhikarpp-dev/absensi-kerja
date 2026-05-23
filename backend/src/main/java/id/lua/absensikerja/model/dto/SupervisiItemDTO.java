package id.lua.absensikerja.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SupervisiItemDTO {
    private Long   id;
    private String nama;
    private String email;
    private String bcc;
    private Integer urutan;
}
