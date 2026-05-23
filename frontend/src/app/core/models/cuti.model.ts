import { StatusIzin } from './izin-hari.model';

export type JenisCuti = 'TAHUNAN' | 'SETENGAH_HARI' | 'KHUSUS';
export type SesiSetengahHari = 'PAGI' | 'SIANG';
export type JenisCutiKhusus =
  | 'Cuti Menikah'
  | 'Cuti Menikahkan Anak'
  | 'Cuti Mengkhitankan Anak'
  | 'Cuti Membaptiskan Anak'
  | 'Cuti Melahirkan'
  | 'Cuti Istri Melahirkan'
  | 'Cuti Istri Keguguran Kandungan'
  | 'Cuti Duka (Suami/Istri, Orangtua/Mertua, Anak/Menantu)'
  | 'Cuti Duka (Anggota Keluarga dalam Satu Rumah)';

export const JENIS_CUTI_KHUSUS_LIST: JenisCutiKhusus[] = [
  'Cuti Menikah',
  'Cuti Menikahkan Anak',
  'Cuti Mengkhitankan Anak',
  'Cuti Membaptiskan Anak',
  'Cuti Melahirkan',
  'Cuti Istri Melahirkan',
  'Cuti Istri Keguguran Kandungan',
  'Cuti Duka (Suami/Istri, Orangtua/Mertua, Anak/Menantu)',
  'Cuti Duka (Anggota Keluarga dalam Satu Rumah)',
];

export interface Cuti {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;

  jenisCuti: JenisCuti;
  tanggalMulai: string;
  tanggalSelesai: string;
  jumlahHari: number;
  sesiSetengahHari?: SesiSetengahHari;

  keperluan: string;
  lampiranUrl?: string;
  mengurangiSisaCuti: boolean;

  status: StatusIzin;
  catatanPenolakan?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface CutiRequest {
  jenisCuti: JenisCuti;
  tanggalMulai: string;
  tanggalSelesai: string;
  sesiSetengahHari?: SesiSetengahHari;
  keperluan: string;
  mengurangiSisaCuti?: boolean;
}

export interface CutiRiwayatItem {
  label: string;
  lama: string;
  baru: string;
}

export interface CutiRiwayat {
  id: number;
  cutiId: number;
  tipe: 'DIBUAT' | 'DIUBAH' | 'STATUS' | 'DIHAPUS' | string;
  changedBy?: string;
  changedAt: string;
  aktivitas: CutiRiwayatItem[];
}

export interface SisaCuti {
  sisaCuti: number;
  tglCutiBerakhir?: string;
  terpakai: number;

  // Pengaturan Pembaruan Otomatis
  pembaruanCutiAktif?: boolean;
  periodePembaruanBulan?: number;
  jumlahCutiPembaruan?: number;
  tambahkanSisaCutiSebelumnya?: boolean;
  tglPembaruanBerikutnya?: string;
}

export interface UpdateSisaCutiRequest {
  sisaCuti?: number;
  tglCutiBerakhir?: string;

  // Pengaturan Pembaruan Otomatis
  pembaruanCutiAktif?: boolean;
  periodePembaruanBulan?: number;
  jumlahCutiPembaruan?: number;
  tambahkanSisaCutiSebelumnya?: boolean;
  tglPembaruanBerikutnya?: string;
}

export interface SisaCutiRiwayatItem {
  id: number;
  tanggal: string;
  deskripsi: string;
  jumlah: number;
  saldo: number;
}

export interface PengaturanCutiKhusus {
  id: number;
  nama: string;
  maksHariPerRequest: number | null;
  maksRequestPerTahun: number | null;
  maksHariPerTahun: number | null;
  aktif: boolean;
}

export interface PengaturanCutiKhususRequest {
  nama: string;
  maksHariPerRequest: number | null;
  maksRequestPerTahun: number | null;
  maksHariPerTahun: number | null;
  aktif: boolean;
}

export interface PengaturanCutiSetengahHari {
  id?: number;
  aktif: boolean;
  presensiMasukMode: 'jadwal' | 'manual';
  presensiMasukJam: string | null;
  presensiKeluarMode: 'jadwal' | 'manual';
  presensiKeluarJam: string | null;
}

export interface PengaturanCutiSetengahHariRequest {
  aktif: boolean;
  presensiMasukMode: 'jadwal' | 'manual';
  presensiMasukJam?: string | null;
  presensiKeluarMode: 'jadwal' | 'manual';
  presensiKeluarJam?: string | null;
}

