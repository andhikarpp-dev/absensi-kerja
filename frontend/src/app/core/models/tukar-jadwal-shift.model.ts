export type StatusTukarJadwal = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK';

export interface TukarJadwalShift {
  id: number;
  karyawanPemohonId: number;
  namaKaryawanPemohon: string;
  divisiPemohon?: string;
  jadwalPemohon: string;
  karyawanTargetId: number;
  namaKaryawanTarget: string;
  divisiTarget?: string;
  jadwalTarget: string;
  tanggalDibuat: string;   // ISO datetime from backend (createdAt mapped as tanggalDibuat)
  status: StatusTukarJadwal;
  catatan?: string;
  catatanPenolakan?: string;
}

export interface TukarJadwalShiftParams {
  dari?: string;
  sampai?: string;
  divisiId?: string;
  status?: string;
  search?: string;
}
