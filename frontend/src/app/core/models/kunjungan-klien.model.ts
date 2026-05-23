export interface Klien {
  id: number;
  perusahaanId: number;
  namaKlien: string;
  alamat?: string;
  telepon?: string;
  email?: string;
  keterangan?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface KlienRequest {
  namaKlien: string;
  alamat?: string;
  telepon?: string;
  email?: string;
  keterangan?: string;
}

export interface KunjunganKlien {
  id: number;
  karyawanId: number;
  namaKaryawan?: string;
  fotoProfil?: string;
  namaDivisi?: string;
  zonaWaktu?: string;
  klienId: number;
  namaKlien?: string;
  waktuMulai?: string;
  waktuSelesai?: string;
  lokasiMulaiLat?: number;
  lokasiMulaiLng?: number;
  lokasiSelesaiLat?: number;
  lokasiSelesaiLng?: number;
  fotoMulai?: string;
  fotoSelesai?: string;
  catatan?: string;
  totalJarak?: number;
  penjualanProduk?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface KunjunganKlienRequest {
  karyawanId: number;
  klienId: number;
  waktuMulai?: string;
  waktuSelesai?: string;
  lokasiMulaiLat?: number;
  lokasiMulaiLng?: number;
  lokasiSelesaiLat?: number;
  lokasiSelesaiLng?: number;
  catatan?: string;
  totalJarak?: number;
  penjualanProduk?: string;
}
