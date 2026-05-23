export interface HariInfo {
  tanggal: string;       // yyyy-MM-dd
  namaHari: string;      // Senin, Selasa, ...
  hariIni: boolean;
  libur: boolean;
  keteranganLibur?: string;
}

export interface PresensiHari {
  absensiId?: number;
  jamMasuk?: string;
  jamKeluar?: string;
  catatanMasuk?: string;
  catatanKeluar?: string;
  tidakMasuk: boolean;
}

export interface KaryawanRow {
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  presensiPerHari: { [tanggal: string]: PresensiHari };
}

export interface RekapCatatanPresensi {
  tanggalMulai: string;
  tanggalSelesai: string;
  hariList: HariInfo[];
  karyawanList: KaryawanRow[];
}
