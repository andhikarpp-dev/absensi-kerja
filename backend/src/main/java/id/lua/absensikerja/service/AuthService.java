package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.LoginRequest;
import id.lua.absensikerja.model.dto.LoginResponse;
import id.lua.absensikerja.model.dto.RegisterOwnerRequest;
import id.lua.absensikerja.model.dto.RegisterRequest;

public interface AuthService {
    LoginResponse login(LoginRequest request);
    void register(RegisterRequest request);
    LoginResponse registerOwner(RegisterOwnerRequest request);
    void verifyEmail(String token);
}
