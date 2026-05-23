package id.lua.absensikerja.model.dto;

import lombok.Data;

/** Dikirim saat check-out. */
@Data
public class CheckOutRequest {
    private String catatan;
    private Double lat;
    private Double lng;
}
