export interface LokasiRefDTO { id: number; nama: string; }

export type TargetLokasi = 'SEMUA' | 'DIVISI' | 'KARYAWAN';

export interface LokasiKehadiran {
  id?:                number;
  perusahaanId?:      number | null;
  namaLokasi:         string;
  alamat?:            string;
  latitude?:          number | null;
  longitude?:         number | null;
  radiusMeter?:       number;
  aktif?:             boolean;

  /** SEMUA / DIVISI / KARYAWAN. */
  targetTipe?:        TargetLokasi;
  divisiTugas?:       LokasiRefDTO[];
  karyawanTugas?:     LokasiRefDTO[];

  /** Jika true → presensi pada lokasi ini hanya melalui mesin Fingerspot. */
  hanyaFingerspot?:   boolean;
  fingerspotSn?:      string;
  fingerspotIp?:      string;
  fingerspotPort?:    number | null;
  fingerspotCatatan?: string;

  createdAt?:         string;
  updatedAt?:         string;
}

export interface LokasiKehadiranRequest {
  namaLokasi:         string;
  alamat?:            string;
  latitude?:          number | null;
  longitude?:         number | null;
  radiusMeter?:       number;
  aktif?:             boolean;

  targetTipe?:        TargetLokasi;
  divisiIds?:         number[];
  karyawanIds?:       number[];

  hanyaFingerspot?:   boolean;
  fingerspotSn?:      string;
  fingerspotIp?:      string;
  fingerspotPort?:    number | null;
  fingerspotCatatan?: string;
}
