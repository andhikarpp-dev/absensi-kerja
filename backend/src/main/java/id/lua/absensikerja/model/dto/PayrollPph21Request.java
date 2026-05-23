package id.lua.absensikerja.model.dto;

import lombok.Data;

@Data
public class PayrollPph21Request {
    private String  statusPkp;
    private String  npwp;
    private String  statusPtkp;
    private Integer jumlahTanggungan;
    private String  metodePph;
}
