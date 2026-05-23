export interface TargetKehadiranItem {
  id?: number;
  namaLokasi: string;
  targetPersen: number;
}

export interface JabatanRiwayat {
  id: number;
  keterangan: string;
  changedBy: string | null;
  changedAt: string;
}

export interface Jabatan {
  id: number;
  namaJabatan: string;
  indukId: number | null;
  indukNama: string | null;
  targetKehadiranList: TargetKehadiranItem[];
  riwayatList: JabatanRiwayat[];
}

export interface JabatanRequest {
  namaJabatan: string;
  indukId: number | null;
  targetKehadiranList: TargetKehadiranItem[];
}
