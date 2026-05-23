export type JenisRevisiKehadiran =
  'MASUK' | 'KELUAR' | 'ISTIRAHAT' | 'SELESAI_ISTIRAHAT' | 'LEMBUR' | 'SELESAI_LEMBUR';

export type StatusRevisi = 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';

export interface RevisiKehadiran {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;
  fotoProfil?: string;

  absensiId?: number;
  tanggal: string;           // YYYY-MM-DD

  jenisKehadiran: JenisRevisiKehadiran;
  alasan: string;
  jamAsli?: string;          // HH:mm:ss
  jamBaru: string;           // HH:mm:ss

  status: StatusRevisi;
  catatanPenolakan?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface RevisiKehadiranRequest {
  karyawanId: number;
  absensiId?: number;
  tanggal: string;
  jenisKehadiran: JenisRevisiKehadiran;
  alasan: string;
  jamAsli?: string;
  jamBaru: string;
}
