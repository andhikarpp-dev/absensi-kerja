package id.lua.absensikerja.model.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {
    private String  token;
    private String  tokenType;
    private long    expiresIn;
    private String  username;
    private String  namaLengkap;
    private String  email;
    private String  role;
    private Long    perusahaanId;
    private String  perusahaanNama;
    private Long    divisiId;
    private String  divisiNama;
    private Long    karyawanId;
}
