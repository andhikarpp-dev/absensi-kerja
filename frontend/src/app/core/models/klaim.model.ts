export type StatusKlaim = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK';
export type JenisKlaim = 'OPERASIONAL' | 'INVOICE_TAGIHAN' | 'CASHBACK' | 'REIMBURSEMENT';

export interface KlaimItemPengeluaran {
  id?: number;
  keterangan: string;
  jumlah: number;
}

export interface Klaim {
  id: number;
  karyawanId: number;
  namaKaryawan?: string;
  fotoProfil?: string;
  namaJabatan?: string;
  namaDivisi?: string;
  zonaWaktu?: string;
  jenisKlaim: JenisKlaim;
  nominal: number;
  keterangan?: string;
  lampiranUrl?: string;
  status: StatusKlaim;
  catatanPenolakan?: string;
  itemPengeluaran: KlaimItemPengeluaran[];
  createdAt?: string;
  updatedAt?: string;
}

export interface KlaimRequest {
  jenisKlaim: JenisKlaim;
  nominal: number;
  keterangan?: string;
  itemPengeluaran: KlaimItemPengeluaran[];
}

export interface KlaimRiwayat {
  id: number;
  tipe: string;
  keterangan?: string;
  changedBy?: string;
  changedAt?: string;
}

export interface JenisKlaimKonfigurasi {
  id: number;
  perusahaanId?: number;
  nama: string;
  deskripsi?: string;
  tglMulaiBerlaku?: string;
  kadaluwarsa?: number | null;
  kuota: number;
  tampilkanKuotaKeKaryawan: boolean;
  terapkanKeKaryawanBaru: boolean;
  minJumlahPengajuan?: number | null;
  maxJumlahPengajuan?: number | null;
  minKlaimSelanjutnya?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface JenisKlaimKonfigurasiRequest {
  nama: string;
  deskripsi?: string;
  tglMulaiBerlaku?: string | null;
  kadaluwarsa?: number | null;
  kuota: number;
  tampilkanKuotaKeKaryawan: boolean;
  terapkanKeKaryawanBaru: boolean;
  minJumlahPengajuan?: number | null;
  maxJumlahPengajuan?: number | null;
  minKlaimSelanjutnya?: number | null;
}

