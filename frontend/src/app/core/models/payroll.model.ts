export interface PayrollRincianGaji {
  id?: number;
  urutan?: number;
  nama: string;
  jumlah: number;
  periode: string;
}

export interface PayrollGajiDasar {
  id?: number;
  karyawanId?: number;
  namaKaryawan?: string;
  tipeGaji: string;
  rincianGaji: PayrollRincianGaji[];
  totalGaji?: number;
  tipeUpahLembur?: string;
  satuanLembur?: string;
  lemburHariKerja?: number;
  lemburSabtu?: number;
  lemburMinggu?: number;
  lemburKalenderLibur?: number;
  potonganIzinJam?: number;
  potonganJamKerjaTidakTerpenuhi?: number;
  potonganAbsenOtomatis?: boolean;
  potonganAbsenManual?: boolean;
  updatedAt?: string;
}

export interface PayrollGajiDasarRequest {
  tipeGaji: string;
  rincianGaji: PayrollRincianGaji[];
  tipeUpahLembur?: string;
  satuanLembur?: string;
  lemburHariKerja?: number;
  lemburSabtu?: number;
  lemburMinggu?: number;
  lemburKalenderLibur?: number;
  potonganIzinJam?: number;
  potonganJamKerjaTidakTerpenuhi?: number;
  potonganAbsenOtomatis?: boolean;
  potonganAbsenManual?: boolean;
}

export interface PayrollBpjs {
  id?: number;
  karyawanId?: number;
  // Ketenagakerjaan
  tkTanggalKepesertaan?: string;
  tkNomor?: string;
  tkUpahDidaftarkan?: number;
  // Kesehatan
  kesTanggalKepesertaan?: string;
  kesNomor?: string;
  kesUpahDidaftarkan?: number;
  kesAnggotaKeluargaInti?: number;
  kesAnggotaKeluargaTambahan?: number;
  updatedAt?: string;
}

export type PayrollBpjsRequest = Omit<PayrollBpjs, 'id' | 'karyawanId' | 'updatedAt'>;

export interface PayrollRekeningBank {
  id?: number;
  karyawanId?: number;
  namaBank?: string;
  nomorRekening?: string;
  atasNama?: string;
  updatedAt?: string;
}

export type PayrollRekeningBankRequest = Omit<PayrollRekeningBank, 'id' | 'karyawanId' | 'updatedAt'>;

// ── PPH 21 ───────────────────────────────────────────────────────────────
export interface PayrollPph21 {
  id?: number;
  karyawanId?: number;
  statusPkp?: string;            // NON_PKP | PKP
  npwp?: string;
  statusPtkp?: string;           // TK/0..K/3
  jumlahTanggungan?: number;
  metodePph?: string;            // GROSS | GROSS_UP | NET
  updatedAt?: string;
}

export type PayrollPph21Request = Omit<PayrollPph21, 'id' | 'karyawanId' | 'updatedAt'>;

export interface PayrollPph21Riwayat {
  id?: number;
  karyawanId?: number;
  periode: string;               // yyyy-MM-dd (tanggal=1)
  pendapatanBruto?: number;
  pph21Terutang?: number;
  dibayarkan?: number;
  tanggalBayar?: string;
  statusPembayaran?: string;     // LUNAS | BELUM_DIBAYAR | SEBAGIAN
  catatan?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type PayrollPph21RiwayatRequest =
  Omit<PayrollPph21Riwayat, 'id' | 'karyawanId' | 'createdAt' | 'updatedAt'>;
