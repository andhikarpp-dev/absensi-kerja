package id.lua.absensikerja.model.dto;

import lombok.Data;

import java.util.List;

/**
 * Request body untuk endpoint Aksi Massal pada karyawan.
 * Field {@code statusKerja}, {@code divisiId}, {@code jabatanId} hanya
 * digunakan sesuai jenis aksi.
 */
@Data
public class KaryawanAksiMassalRequest {

    /** Daftar ID karyawan yang dipilih. */
    private List<Long> ids;

    /**
     * Jenis aksi yang akan dijalankan:
     * <ul>
     *   <li>{@code HAPUS} — soft-delete semua karyawan terpilih.</li>
     *   <li>{@code UBAH_STATUS} — set {@code statusKerja} untuk semua karyawan terpilih.</li>
     *   <li>{@code PINDAH_DIVISI} — set divisi ke {@code divisiId} (boleh null = lepas divisi).</li>
     *   <li>{@code PINDAH_JABATAN} — set jabatan ke {@code jabatanId} (boleh null = lepas jabatan).</li>
     * </ul>
     */
    private String aksi;

    /** Untuk aksi UBAH_STATUS — nama enum StatusKerja (AKTIF/NONAKTIF/CUTI/...). */
    private String statusKerja;

    /** Untuk aksi PINDAH_DIVISI. */
    private Long divisiId;

    /** Untuk aksi PINDAH_JABATAN. */
    private Long jabatanId;
}
