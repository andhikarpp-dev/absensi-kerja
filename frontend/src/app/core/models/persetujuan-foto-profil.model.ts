export type StatusFotoProfil = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK';

export interface PersetujuanFotoProfil {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;

  fotoBaru: string;       // URL foto baru
  fotoLama?: string;      // URL foto lama

  status: StatusFotoProfil;
  catatanPenolakan?: string;
  diprosesAt?: string;
  createdAt?: string;
}
