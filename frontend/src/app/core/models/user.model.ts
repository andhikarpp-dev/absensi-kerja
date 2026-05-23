export interface User {
  id: number;
  username: string;
  role: 'ADMIN' | 'KARYAWAN' | 'PEMILIK';
  namaLengkap: string;
  email: string;
  perusahaanId?: number | null;
  perusahaanNama?: string | null;
  divisiId?: number | null;
  divisiNama?: string | null;
  karyawanId?: number | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

/** Matches backend LoginResponse DTO */
export interface LoginResponse {
  token: string;
  tokenType: string;
  expiresIn: number;
  username: string;
  namaLengkap: string;
  email: string;
  role: string;
  perusahaanId?: number | null;
  perusahaanNama?: string | null;
  divisiId?: number | null;
  divisiNama?: string | null;
  karyawanId?: number | null;
}

export interface RegisterOwnerRequest {
  namaLengkap: string;
  namaPerusahaan: string;
  namaDivisi: string;
  jabatan: string;
  email: string;
  whatsapp: string;
  zonaWaktu: 'WIB' | 'WITA' | 'WIT';
  fiturKebutuhan?: string;
  password: string;
}
