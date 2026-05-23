export interface ReviewLembur {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  namaJabatan?: string;
  fotoProfil?: string;
  tanggal: string;
  namaHari: string;
  jamMulaiLembur?: string;
  jamSelesaiLembur?: string;
  totalLembur?: string;
  namaPolaKerja?: string;
  jamKerjaMulai?: string;
  jamKerjaSelesai?: string;
  divalidasi: boolean;
  catatanValidasi?: string;
}
