export type StatusAbsensi = 'HADIR' | 'IZIN' | 'SAKIT' | 'ALPHA';

export interface Absensi {
  id?: number;
  karyawanId: number;
  namaKaryawan: string;
  fotoProfil?: string;
  namaDivisi?: string;
  namaJabatan?: string;

  tanggal: string;       // YYYY-MM-DD
  namaHari: string;      // SENIN, SELASA, …
  bulan: number;
  tahun: number;

  jamMasuk?: string;     // HH:mm:ss
  jamKeluar?: string;

  jamMulaiIstirahat?: string;
  jamSelesaiIstirahat?: string;

  jamMulaiLembur?: string;
  jamSelesaiLembur?: string;

  jamKerjaMulai?: string;    // HH:mm
  jamKerjaSelesai?: string;
  namaPolaKerja?: string;

  menitTerlambat: number;
  status: StatusAbsensi;

  catatanMasuk?: string;
  catatanKeluar?: string;
  fotoMasukUrl?: string;
  fotoKeluarUrl?: string;
  lokasiMasukUrl?: string;
  lokasiKeluarUrl?: string;

  sudahCheckIn: boolean;
  sudahCheckOut: boolean;

  // Info perangkat
  namaPerangkat?: string;
  modelPerangkat?: string;
  manufaktur?: string;
  deviceId?: string;
  platform?: string;

  // Info jadwal kerja
  polaKerjaHariId?: number;
  toleransiKeterlambatan?: number;
  jamIstirahatMulai?: string;
  jamIstirahatSelesai?: string;
  maksMenitIstirahat?: number;
  zonaWaktu?: string;

  // Review kehadiran
  perluDicek?: boolean;
  sudahDicek?: boolean;
  alasanReview?: string;
  diLuarLokasi?: boolean;
  perangkatBerbeda?: boolean;
}

export interface CheckInRequest {
  catatan?: string;
  lat?: number;
  lng?: number;
}

export interface CheckOutRequest {
  catatan?: string;
  lat?: number;
  lng?: number;
}

export interface RingkasanKehadiranRow {
  karyawanId:   number;
  namaKaryawan: string;
  fotoProfil?:  string;
  namaDivisi?:  string;
  namaJabatan?: string;
  namaPolaKerja?: string;
  ringkasan:    RingkasanKehadiran;
}

export interface RingkasanKehadiran {
  // Kolom Kiri
  totalHariJadwalKerja:       number;
  totalHariKehadiran:         number;
  totalHariTidakMasuk:        number;
  totalHariCuti:              number;
  totalHariIzin:              number;
  totalHariSakit:             number;
  persentaseKehadiran:        number;
  targetKehadiranJabatan:     number | null;
  totalMenitJadwalKerja:      number;
  totalMenitKerja:            number;
  persentaseCapaianJamKerja:  number;
  totalMenitIstirahat:        number;
  totalMenitLembur:           number;
  totalHariOpenshift:         number;

  // Kolom Kanan
  totalMenitTerlambat:              number;
  totalHariTerlambat:               number;
  totalDendaKeterlambatan:          number;
  totalHariTerlambatPresensiKeluar: number;
  totalDendaTerlambatPresensiKeluar:number;
  totalMenitToleransi:              number;
  totalHariToleransi:               number;
  totalMenitIzinJam:                number;
  totalMenitIzinJamBelumDiganti:    number;
  totalHariPresensiKeluarOtomatis:  number;
  menitJamKerjaTidakTerpenuhi:      number;
}

