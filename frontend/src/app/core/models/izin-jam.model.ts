export type StatusIzin = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK' | 'TERPENUHI' | 'TIDAK_TERPENUHI';

export interface IzinJam {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  fotoProfil?: string;
  namaDivisi?: string;
  namaJabatan?: string;

  tanggalMulai: string;
  jamMulai: string;
  tanggalSelesai: string;
  jamSelesai: string;
  durasiMenit?: number;
  jamPengganti?: string;

  dapatMengganti: boolean;
  kenaPotong: boolean;
  kenaDenda: boolean;
  keperluan?: string;
  status: StatusIzin;
  catatanPenolakan?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface IzinJamRequest {
  tanggalMulai: string;
  jamMulai: string;
  tanggalSelesai: string;
  jamSelesai: string;
  jamPengganti?: string;
  dapatMengganti: boolean;
  kenaPotong: boolean;
  kenaDenda: boolean;
  keperluan?: string;
}

export interface IzinJamRiwayatItem {
  label: string;
  lama: string;
  baru: string;
}

export interface IzinJamRiwayat {
  id: number;
  izinJamId: number;
  tipe: 'DIBUAT' | 'DIUBAH' | 'DIHAPUS' | string;
  changedBy?: string;
  changedAt: string;
  aktivitas: IzinJamRiwayatItem[];
}


export interface IzinJam {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  fotoProfil?: string;
  namaDivisi?: string;
  namaJabatan?: string;

  tanggalMulai: string;    // YYYY-MM-DD
  jamMulai: string;        // HH:mm:ss
  tanggalSelesai: string;
  jamSelesai: string;
  durasiMenit?: number;
  jamPengganti?: string;

  dapatMengganti: boolean;
  kenaPotong: boolean;
  kenaDenda: boolean;
  keperluan?: string;
  status: StatusIzin;
  catatanPenolakan?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface IzinJamRequest {
  tanggalMulai: string;
  jamMulai: string;
  tanggalSelesai: string;
  jamSelesai: string;
  jamPengganti?: string;
  dapatMengganti: boolean;
  kenaPotong: boolean;
  kenaDenda: boolean;
  keperluan?: string;
}
