/** Model Surat Peringatan — sinkron dengan backend DTO. */

export type StatusSuratPeringatan = 'AKTIF' | 'KEDALUWARSA' | 'DICABUT';
export type StatusPersetujuanSP = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK';

export interface JenisPeringatan {
  id: number;
  kode: string;        // SP1, SP2, SP3
  nama: string;
  deskripsi?: string;
  aktif?: boolean;
}

export interface PenyetujuSP {
  id?: number;
  karyawanId?: number | null;
  nama: string;
  urutan?: number;
  status?: StatusPersetujuanSP;
  catatan?: string;
  diprosesAt?: string;
}

export interface SuratPeringatan {
  id: number;
  karyawanId: number;
  namaKaryawan?: string;
  namaDivisi?: string;
  namaJabatan?: string;

  jenisId: number;
  jenisKode: string;
  jenisNama: string;

  tanggalMulai: string;
  tanggalSelesai: string;
  pelanggaran?: string;
  dokumenUrl?: string;
  cegahPresensi: boolean;

  status: StatusSuratPeringatan;
  statusPersetujuan: StatusPersetujuanSP;
  catatanPenolakan?: string;

  penyetuju: PenyetujuSP[];

  createdAt?: string;
  updatedAt?: string;
}

export interface SuratPeringatanRequest {
  jenisId: number | null;
  tanggalMulai: string;
  tanggalSelesai: string;
  pelanggaran: string;
  cegahPresensi: boolean;
  penyetuju: { karyawanId?: number | null; nama: string }[];
  /** Hanya untuk preview/UI (tidak dikirim ke backend dalam payload JSON). */
  dokumen?: File | null;
}
