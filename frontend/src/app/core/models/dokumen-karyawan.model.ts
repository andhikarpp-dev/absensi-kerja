export type StatusKuotaDokumen = 'GRATIS' | 'BERBAYAR';

export interface DokumenKaryawan {
  id: number;
  karyawanId: number;
  namaDokumen: string;
  namaBerkas?: string;
  pathBerkas?: string;
  ukuranBerkas?: number;
  tanggalUpload?: string;
  tanggalBerakhir?: string;
  hariReminder?: number;
  statusKuota: StatusKuotaDokumen;
  fileUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DokumenKaryawanRequest {
  namaDokumen: string;
  tanggalBerakhir?: string | null;
  hariReminder?: number;
  statusKuota: StatusKuotaDokumen;
}

export interface KuotaDokumen {
  totalGratis: number;
  kuotaGratis: number;
  totalBerbayar: number;
  kuotaBerbayar: number;
}
