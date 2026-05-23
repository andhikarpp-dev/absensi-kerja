package id.lua.absensikerja.model.enums;

/**
 * Tipe penugasan lokasi kehadiran:
 * <ul>
 *   <li>{@code SEMUA} — berlaku untuk semua karyawan di perusahaan.</li>
 *   <li>{@code DIVISI} — hanya karyawan pada divisi-divisi tertentu.</li>
 *   <li>{@code KARYAWAN} — hanya karyawan-karyawan tertentu yang dipilih.</li>
 * </ul>
 */
public enum TargetLokasiKehadiran {
    SEMUA,
    DIVISI,
    KARYAWAN
}
