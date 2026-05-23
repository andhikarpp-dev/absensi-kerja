package id.lua.absensikerja.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class IzinHariRequest {

    @NotEmpty(message = "Minimal satu tanggal izin wajib dipilih")
    private List<LocalDate> tanggalList;

    @NotBlank(message = "Keperluan wajib diisi")
    private String keperluan;

    private boolean mengurangiGaji = false;
}
