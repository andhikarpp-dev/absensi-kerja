export interface PersetujuanPresensi {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;
  fotoProfil?: string;

  tanggal: string;           // YYYY-MM-DD
  jenisPresensi: string;     // MASUK / KELUAR / dll

  namaPolaKerja?: string;
  jamJadwalMasuk?: string;   // HH:mm
  jamJadwalKeluar?: string;  // HH:mm

  alasan?: string;
  diizinkan: boolean;
  diizinkanAt?: string;
  createdAt?: string;
}

export interface PersetujuanPresensiRequest {
  karyawanId: number;
  tanggal: string;
  jenisPresensi: string;
  namaPolaKerja?: string;
  jamJadwalMasuk?: string;
  jamJadwalKeluar?: string;
  alasan?: string;
}
