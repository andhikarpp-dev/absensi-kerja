export type JenisJadwal  = 'JAM_TETAP' | 'JAM_FLEKSIBEL';
export type KategoriPolaKerja = 'HARI_KERJA' | 'SHIFT';
export type HariKerja    = 'SENIN' | 'SELASA' | 'RABU' | 'KAMIS' | 'JUMAT' | 'SABTU' | 'MINGGU';
export type PolaHariKerja = 'HARI_KERJA' | 'LIBUR' | 'FLEKSIBEL';

export interface PolaKerjaHariItem {
  id?: number;
  hari: HariKerja;
  polaHari: PolaHariKerja;
  jamMasuk: string;
  jamKeluar: string;
  mulaiIstirahat: string;
  selesaiIstirahat: string;
  maksMenitIstirahat: number;
  totalJamKerjaDibutuhkan?: number;
}

export interface PolaKerja {
  id: number;
  divisiIds: number[];   // pola bisa dipakai banyak divisi
  namaPolaKerja: string;
  toleransiKeterlambatan: number;
  jenisJadwal: JenisJadwal;
  kategori?: KategoriPolaKerja;
  warna?: string;
  catatan?: string;
  hariList: PolaKerjaHariItem[];
}

// Request tidak lagi butuh divisiId wajib — divisiIds opsional
export interface PolaKerjaRequest {
  divisiIds?: number[];
  namaPolaKerja: string;
  toleransiKeterlambatan: number;
  jenisJadwal: JenisJadwal;
  kategori?: KategoriPolaKerja;
  warna?: string;
  catatan?: string;
  hariList: PolaKerjaHariItem[];
}

export const HARI_LIST: HariKerja[] = ['SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU','MINGGU'];

export function defaultHariList(): PolaKerjaHariItem[] {
  return HARI_LIST.map(hari => ({
    hari,
    polaHari: 'HARI_KERJA' as PolaHariKerja,
    jamMasuk: '',
    jamKeluar: '',
    mulaiIstirahat: '',
    selesaiIstirahat: '',
    maksMenitIstirahat: 60
  }));
}
