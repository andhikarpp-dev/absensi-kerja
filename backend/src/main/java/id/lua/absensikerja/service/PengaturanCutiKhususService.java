package id.lua.absensikerja.service;

import id.lua.absensikerja.model.dto.PengaturanCutiKhususDTO;
import id.lua.absensikerja.model.dto.PengaturanCutiKhususRequest;

import java.util.List;

public interface PengaturanCutiKhususService {
    List<PengaturanCutiKhususDTO> findAll(Long callerUserId);
    PengaturanCutiKhususDTO create(PengaturanCutiKhususRequest req, Long callerUserId);
    PengaturanCutiKhususDTO update(Long id, PengaturanCutiKhususRequest req, Long callerUserId);
    /** Toggle aktif/nonaktif. */
    PengaturanCutiKhususDTO toggleAktif(Long id, Long callerUserId);
    void delete(Long id, Long callerUserId);
}
