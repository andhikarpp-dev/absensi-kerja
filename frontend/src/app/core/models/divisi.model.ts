export type CatatanPresensi = 'TIDAK_DIBUTUHKAN' | 'OPTIONAL' | 'DIBUTUHKAN';
export type SistemKerja = 'HARI_KERJA' | 'SHIFT';

export interface DivisiRiwayatAktivitas {
  label: string;
  nilai: string;
}

export interface DivisiRiwayat {
  id: number;
  tipe: string;
  changedBy: string | null;
  changedAt: string;
  aktivitas: DivisiRiwayatAktivitas[];
}

export interface SupervisiItem {
  id?: number;
  nama: string;
  email: string;
  bcc: string;
  urutan?: number;
}

export interface Divisi {
  id: number;
  namaDivisi: string;
  dendaKeterlambatan: boolean;
  sistemKerja: SistemKerja;
  catatanMasuk: CatatanPresensi;
  catatanMasukLabel: string | null;
  catatanMasukPlaceholder: string | null;
  catatanKeluar: CatatanPresensi;
  catatanKeluarLabel: string | null;
  catatanKeluarPlaceholder: string | null;
  catatanMulaiLembur: CatatanPresensi;
  catatanMulaiLemburLabel: string | null;
  catatanMulaiLemburPlaceholder: string | null;
  catatanSelesaiLembur: CatatanPresensi;
  catatanSelesaiLemburLabel: string | null;
  catatanSelesaiLemburPlaceholder: string | null;
  lokasiMasuk: boolean;
  lokasiIstirahat: boolean;
  lokasiSelesaiIstirahat: boolean;
  lokasiKeluar: boolean;
  lokasiLembur: boolean;
  lokasiSelesaiLembur: boolean;
  lokasiPertamaKali: boolean;
  lokasiDiLuar: boolean;
  lokasiPerangkatBerbeda: boolean;
  lokasiFotoSelfieBermasalah: boolean;
  supervisorId: number | null;
  supervisorNama: string | null;
  supervisiList: SupervisiItem[];
  bccGlobal: string;
  menitSebelumMasuk: number;
  menitSetelahMasuk: number;
  cegahPresensiKalenderLibur: boolean;
  cegahPresensiJadwalLibur: boolean;
  menitSetelahJadwalKeluar: number;
  cegahPresensiLemburTanpaJadwal: boolean;
  validasiPerangkat: boolean;
  presensiKeluarOtomatis: boolean;
  dendaTerlambatKeluar: boolean;
  kunjunganKlien: boolean;
  minimalHariSebelumCuti: number;
  maksHariPerRequest: number;
  maksRequestPerBulan: number;
}

export type DivisiRequest = Omit<Divisi, 'id' | 'supervisorNama'>;


