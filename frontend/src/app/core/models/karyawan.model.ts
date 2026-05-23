export type JenisKelamin = 'LAKI_LAKI' | 'PEREMPUAN';

// ── Hasil Impor Karyawan ─────────────────────────────────
export type TipeImporKaryawan = 'tambah' | 'perbarui' | 'bpjs' | 'pph21';

export interface ImporKaryawanBarisSalah {
  baris: number;
  nip?: string;
  nama?: string;
  pesan: string;
}

export interface ImporKaryawanResult {
  tipe?: string;
  berhasil: number;
  gagal: number;
  errors: ImporKaryawanBarisSalah[];
}

// ── File Identitas Tambahan ──────────────────────────────
export type JenisIdentitasTambahan = 'KTP' | 'SIM_A' | 'SIM_B' | 'SIM_C' | 'PASPOR' | 'KITAS' | 'NPWP' | 'BPJS_KESEHATAN' | 'BPJS_KETENAGAKERJAAN' | 'LAINNYA';

export interface FileIdentitas {
  id: number;
  karyawanId: number;
  jenisIdentitas: JenisIdentitasTambahan;
  nomor: string;
  fileUrl?: string;
  namaFile?: string;
  createdAt?: string;
}

export interface FileIdentitasRequest {
  jenisIdentitas: JenisIdentitasTambahan;
  nomor: string;
}

// ── Pengalaman Kerja ──────────────────────────────────────
export interface PengalamanKerja {
  id: number;
  karyawanId: number;
  namaPerusahaan: string;
  jabatan: string;
  bidangIndustri?: string;
  tanggalMulai?: string;
  tanggalSelesai?: string;
  masihBekerja?: boolean;
  deskripsi?: string;
  createdAt?: string;
}

export interface PengalamanKerjaRequest {
  namaPerusahaan: string;
  jabatan: string;
  bidangIndustri?: string;
  tanggalMulai?: string | null;
  tanggalSelesai?: string | null;
  masihBekerja?: boolean;
  deskripsi?: string;
}

// ── Background Pendidikan ─────────────────────────────────
export type TingkatPendidikan = 'SD' | 'SMP' | 'SMA_SMK' | 'D1' | 'D2' | 'D3' | 'D4' | 'S1' | 'S2' | 'S3';

export interface BackgroundPendidikan {
  id: number;
  karyawanId: number;
  tingkatPendidikan: TingkatPendidikan;
  namaInstitusi: string;
  jurusan?: string;
  tahunMasuk?: number;
  tahunLulus?: number;
  nilai?: string;
  keterangan?: string;
  createdAt?: string;
}

export interface BackgroundPendidikanRequest {
  tingkatPendidikan: TingkatPendidikan;
  namaInstitusi: string;
  jurusan?: string;
  tahunMasuk?: number | null;
  tahunLulus?: number | null;
  nilai?: string;
  keterangan?: string;
}

// ── Portofolio ────────────────────────────────────────────
export interface Portofolio {
  id: number;
  karyawanId: number;
  judul: string;
  urlLink?: string;
  deskripsi?: string;
  createdAt?: string;
}

export interface PortofolioRequest {
  judul: string;
  urlLink?: string;
  deskripsi?: string;
}

// ── Penghargaan ───────────────────────────────────────────
export interface Penghargaan {
  id: number;
  karyawanId: number;
  namaPenghargaan: string;
  penerbit?: string;
  tahun?: number;
  deskripsi?: string;
  createdAt?: string;
}

export interface PenghargaanRequest {
  namaPenghargaan: string;
  penerbit?: string;
  tahun?: number | null;
  deskripsi?: string;
}

// ── Sertifikat ────────────────────────────────────────────
export interface Sertifikat {
  id: number;
  karyawanId: number;
  namaSertifikat: string;
  penerbit?: string;
  nomorSertifikat?: string;
  tanggalTerbit?: string;
  tanggalKadaluarsa?: string;
  fileUrl?: string;
  keterangan?: string;
  createdAt?: string;
}

export interface SertifikatRequest {
  namaSertifikat: string;
  penerbit?: string;
  nomorSertifikat?: string;
  tanggalTerbit?: string | null;
  tanggalKadaluarsa?: string | null;
  keterangan?: string;
}

// ── Pengalaman Organisasi ─────────────────────────────────
export interface PengalamanOrganisasi {
  id: number;
  karyawanId: number;
  namaOrganisasi: string;
  jabatan?: string;
  tanggalMulai?: string;
  tanggalSelesai?: string;
  masihAktif?: boolean;
  deskripsi?: string;
  createdAt?: string;
}

export interface PengalamanOrganisasiRequest {
  namaOrganisasi: string;
  jabatan?: string;
  tanggalMulai?: string | null;
  tanggalSelesai?: string | null;
  masihAktif?: boolean;
  deskripsi?: string;
}

// ── Kontak Darurat ────────────────────────────────────────
export interface KontakDarurat {
  id: number;
  karyawanId: number;
  nama: string;
  noTelepon?: string;
  createdAt?: string;
}

export interface KontakDaruratRequest {
  nama: string;
  noTelepon?: string;
}
export type GolonganDarah = 'A' | 'B' | 'AB' | 'O' | 'A_PLUS' | 'A_MINUS' | 'B_PLUS' | 'B_MINUS' | 'AB_PLUS' | 'AB_MINUS' | 'O_PLUS' | 'O_MINUS';
export type StatusPerkawinan = 'BELUM_MENIKAH' | 'MENIKAH' | 'CERAI_HIDUP' | 'CERAI_MATI';
export type Agama = 'ISLAM' | 'KRISTEN' | 'KATOLIK' | 'HINDU' | 'BUDHA' | 'KONGHUCU' | 'LAINNYA';
export type JenisIdentitas = 'KTP' | 'SIM' | 'PASPOR' | 'KITAS';
export type StatusKerja = 'AKTIF' | 'NONAKTIF' | 'CUTI' | 'KONTRAK' | 'PROBASI' | 'PENSIUN' | 'RESIGN';
export type ZonaWaktu = 'WIB' | 'WITA' | 'WIT';
export type JenjangPendidikan = 'SD' | 'SMP' | 'SMA_SMK' | 'D1' | 'D2' | 'D3' | 'D4' | 'S1' | 'S2' | 'S3';

export interface Karyawan {
  id: number;

  // Foto Profil
  fotoProfil?: string;

  // Data Pribadi
  namaLengkap: string;
  tempatLahir?: string;
  tanggalLahir?: string;
  jenisKelamin: JenisKelamin;
  golonganDarah?: GolonganDarah;
  statusPerkawinan?: StatusPerkawinan;
  agama?: Agama;

  // Identitas
  jenisIdentitas?: JenisIdentitas;
  nomorIdentitas?: string;

  // Alamat
  alamatKtp?: string;
  provinsiId?: number;
  namaProvinsi?: string;
  kabupatenKotaId?: number;
  namaKabupatenKota?: string;
  alamatDomisili?: string;

  // Kontak
  noTelepon?: string;
  zonaWaktu: ZonaWaktu;
  catatan?: string;

  // Pendidikan
  jenjangPendidikan?: JenjangPendidikan;
  jurusan?: string;
  namaInstitusi?: string;
  tahunLulus?: number;

  // Kepegawaian
  nip: string;
  jabatanId?: number;
  namaJabatan?: string;
  divisiId?: number;
  namaDivisi?: string;
  statusKerja: StatusKerja;
  tglMulaiBekerja?: string;
  tglMulaiDapatCuti?: string;
  sisaCuti: number;
  tglCutiBeakhir?: string;

  // Pembaruan Cuti Otomatis
  pembaruanCutiAktif?: boolean;
  tglPembaruanBerikutnya?: string;

  // Soft Delete
  isDeleted?: boolean;
  deletedAt?: string;

  // Akun
  userId?: number;
  email?: string;
  username?: string;
}

// ── Perangkat Karyawan ────────────────────────────────────
export interface PerangkatKaryawan {
  id: number;
  karyawanId: number;
  deviceId: string;
  namaPerangkat: string;
  modelPerangkat?: string;
  manufaktur?: string;
  platform?: string;
  terakhirAktif?: string;
  createdAt?: string;
}

export interface KaryawanRequest {
  fotoProfil?: string;

  namaLengkap: string;
  tempatLahir?: string;
  tanggalLahir?: string;
  jenisKelamin: JenisKelamin;
  golonganDarah?: GolonganDarah;
  statusPerkawinan?: StatusPerkawinan;
  agama?: Agama;

  jenisIdentitas?: JenisIdentitas;
  nomorIdentitas?: string;

  alamatKtp?: string;
  provinsiId?: number;
  kabupatenKotaId?: number;
  alamatDomisili?: string;

  noTelepon?: string;
  zonaWaktu: ZonaWaktu;
  catatan?: string;

  jenjangPendidikan?: JenjangPendidikan;
  jurusan?: string;
  namaInstitusi?: string;
  tahunLulus?: number;

  nip: string;
  jabatanId?: number;
  divisiId?: number;
  statusKerja: StatusKerja;
  tglMulaiBekerja?: string;
  tglMulaiDapatCuti?: string;
  sisaCuti?: number;
  tglCutiBeakhir?: string;

  email: string;
  password?: string;
  konfirmasiPassword?: string;
}
