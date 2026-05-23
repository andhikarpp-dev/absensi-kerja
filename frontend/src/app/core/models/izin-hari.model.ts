export type StatusIzin = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK' | 'TERPENUHI' | 'TIDAK_TERPENUHI';

export interface IzinHari {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;
  fotoProfil?: string;
  zonaWaktu?: string;

  tanggalList: string[];
  keperluan: string;
  mengurangiGaji: boolean;
  lampiranUrl?: string;

  status: StatusIzin;
  catatanPenolakan?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface IzinHariRequest {
  tanggalList: string[];
  keperluan: string;
  mengurangiGaji: boolean;
}

export interface IzinHariRiwayatItem {
  label: string;
  lama: string;
  baru: string;
}

export interface IzinHariRiwayat {
  id: number;
  izinHariId: number;
  tipe: 'DIBUAT' | 'DIUBAH' | 'STATUS' | string;
  changedBy?: string;
  changedAt: string;
  aktivitas: IzinHariRiwayatItem[];
}


