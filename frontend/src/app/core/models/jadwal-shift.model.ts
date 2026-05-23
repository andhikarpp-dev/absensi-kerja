import { PolaKerja } from './pola-kerja.model';

export type StatusJadwalShift = 'AKTIF' | 'LIBUR' | 'OFF';

export interface JadwalShift {
  id: number;
  karyawanId: number;
  karyawanNama: string;
  divisiId: number | null;
  divisiNama: string | null;
  tanggal: string;          // ISO yyyy-MM-dd
  polaKerjaId: number | null;
  polaKerjaNama: string | null;
  jamMasuk: string | null;
  jamKeluar: string | null;
  status: StatusJadwalShift;
  keterangan: string | null;
  warna: string | null;
}

export interface KaryawanShift {
  id: number;
  nip: string;
  namaLengkap: string;
  fotoProfil: string | null;
  divisiId: number | null;
  divisiNama: string | null;
  jabatanId: number | null;
  jabatanNama: string | null;
}

export interface JadwalShiftMatrix {
  startDate: string;
  endDate: string;
  dates: string[];
  karyawan: KaryawanShift[];
  assignments: JadwalShift[];
  shiftOptions: PolaKerja[];
}

export interface JadwalShiftRequest {
  karyawanId: number;
  tanggal: string;
  polaKerjaId?: number | null;
  jamMasuk?: string | null;
  jamKeluar?: string | null;
  status: StatusJadwalShift;
  keterangan?: string | null;
  warna?: string | null;
}

export interface JadwalShiftBatchRequest {
  karyawanIds: number[];
  tanggalList: string[];
  polaKerjaId?: number | null;
  jamMasuk?: string | null;
  jamKeluar?: string | null;
  status: StatusJadwalShift;
  keterangan?: string | null;
  warna?: string | null;
  overwrite?: boolean;
}

export interface CopyJadwalShiftRequest {
  sourceWeekStart: string;
  targetWeekStart: string;
  karyawanIds?: number[];
  overwrite?: boolean;
}
