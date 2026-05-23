export interface JadwalLembur {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;
  fotoProfil?: string;
  waktuMulai: string;       // ISO datetime
  waktuSelesai: string;
  durasiLembur?: string;    // "2j 30m"
  menitSebelumJadwal?: number;
  catatan?: string;
  status: 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';
  catatanPenolakan?: string;
  dibuatAt?: string;
  dibuatOleh?: string;
}
