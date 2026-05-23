import { Component, inject, signal, OnInit, output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DivisiService } from '../../../core/services/divisi.service';
import { LokasiKehadiranService } from '../../../core/services/lokasi-kehadiran.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { AbsensiService } from '../../../core/services/absensi.service';
import { Divisi } from '../../../core/models/divisi.model';
import { LokasiKehadiran } from '../../../core/models/lokasi-kehadiran.model';
import { Karyawan } from '../../../core/models/karyawan.model';

export type EksporTab = 'tanggal-tertentu' | 'rentang-waktu';

export type FormatEkspor =
  | 'LENGKAP'
  | 'HANYA_MASUK_KELUAR'
  | 'MASUK_TERLAMBAT_KELUAR'
  | 'MASUK_TERLAMBAT_KELUAR_LEMBUR'
  | 'HANYA_CATATAN'
  | 'REKAP_PRESENSI'
  | 'REKAP_KEHADIRAN'
  | 'PILIH_KOLOM';

interface KolomGroup {
  label: string;
  key: string;
  items: { label: string; key: string; checked: boolean }[];
  get allChecked(): boolean;
}

@Component({
  selector: 'app-ekspor-excel-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ekspor-excel-modal.component.html'
})
export class EksporExcelModalComponent implements OnInit {
  @Input() tanggalAwal = '';   // pre-fill dari halaman pemanggil
  closed = output<void>();

  private divisiSvc   = inject(DivisiService);
  private lokasiSvc   = inject(LokasiKehadiranService);
  private karyawanSvc = inject(KaryawanService);
  private absensiSvc  = inject(AbsensiService);

  // ── Tab ────────────────────────────────────────────────
  activeTab = signal<EksporTab>('tanggal-tertentu');
  setTab(t: EksporTab): void { this.activeTab.set(t); }

  // ── Filter umum ────────────────────────────────────────
  tanggal        = '';
  tanggalDari    = '';
  tanggalSampai  = '';
  divisiId       = '';
  lokasiId       = '';
  karyawanKunci  = '';
  emailTujuan    = '';

  // ── Format ─────────────────────────────────────────────
  readonly formatList: { value: FormatEkspor; label: string }[] = [
    { value: 'LENGKAP',                          label: 'Lengkap' },
    { value: 'HANYA_MASUK_KELUAR',               label: 'Hanya Presensi masuk dan keluar' },
    { value: 'MASUK_TERLAMBAT_KELUAR',           label: 'Hanya presensi masuk, terlambat dan keluar' },
    { value: 'MASUK_TERLAMBAT_KELUAR_LEMBUR',    label: 'Hanya presensi masuk, terlambat, keluar dan lembur' },
    { value: 'HANYA_CATATAN',                    label: 'Hanya catatan' },
    { value: 'REKAP_PRESENSI',                   label: 'Rekap Presensi' },
    { value: 'REKAP_KEHADIRAN',                  label: 'Rekap kehadiran' },
    { value: 'PILIH_KOLOM',                      label: 'Pilih Kolom' },
  ];
  selectedFormat: FormatEkspor = 'LENGKAP';

  get isPilihKolom(): boolean { return this.selectedFormat === 'PILIH_KOLOM'; }

  // ── Kolom ──────────────────────────────────────────────
  readonly kolomGroups: KolomGroup[] = this.buildKolomGroups();

  // ── Data dropdown ──────────────────────────────────────
  divisiList  = signal<Divisi[]>([]);
  lokasiList  = signal<LokasiKehadiran[]>([]);
  karyawanList = signal<Karyawan[]>([]);
  karyawanFiltered = signal<Karyawan[]>([]);

  // ── State ──────────────────────────────────────────────
  loading   = signal(false);
  error     = signal('');
  success   = signal('');

  ngOnInit(): void {
    const today = new Date().toISOString().substring(0, 10);
    this.tanggal       = this.tanggalAwal || today;
    this.tanggalSampai = today;
    const sebulanLalu  = new Date(); sebulanLalu.setMonth(sebulanLalu.getMonth() - 1);
    this.tanggalDari   = sebulanLalu.toISOString().substring(0, 10);

    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.lokasiSvc.findAll().subscribe(l => this.lokasiList.set(l));
    this.karyawanSvc.findAll().subscribe(k => {
      this.karyawanList.set(k);
      this.karyawanFiltered.set(k);
    });
  }

  // ── Karyawan yang dipilih (id dari autocomplete) ──────
  selectedKaryawanId: number | undefined = undefined;

  onKunciChange(val: string): void {
    this.karyawanKunci = val;
    this.selectedKaryawanId = undefined;
    if (!val.trim()) { this.karyawanFiltered.set(this.karyawanList()); return; }
    const kw = val.toLowerCase();
    this.karyawanFiltered.set(
      this.karyawanList().filter(k => k.namaLengkap.toLowerCase().includes(kw) || k.nip?.toLowerCase().includes(kw))
    );
  }

  pilihKaryawan(k: Karyawan): void {
    this.karyawanKunci = k.namaLengkap;
    this.selectedKaryawanId = k.id;
    this.karyawanFiltered.set([]);
  }

  // ── Kolom: toggle semua dalam group ───────────────────
  toggleGroup(g: KolomGroup, checked: boolean): void {
    g.items.forEach(i => i.checked = checked);
  }

  isGroupAllChecked(g: KolomGroup): boolean {
    return g.items.every(i => i.checked);
  }

  isGroupIndeterminate(g: KolomGroup): boolean {
    const c = g.items.filter(i => i.checked).length;
    return c > 0 && c < g.items.length;
  }

  // ── Ekspor ─────────────────────────────────────────────
  ekspor(): void {
    this.error.set('');
    this.success.set('');

    if (this.activeTab() === 'tanggal-tertentu' && !this.tanggal) {
      this.error.set('Tanggal wajib diisi.'); return;
    }
    if (this.activeTab() === 'rentang-waktu') {
      if (!this.tanggalDari || !this.tanggalSampai) {
        this.error.set('Tanggal dari dan sampai wajib diisi.'); return;
      }
      if (!this.emailTujuan.trim()) {
        this.error.set('Email tujuan wajib diisi untuk ekspor rentang waktu.'); return;
      }
    }

    const selectedKolom = this.isPilihKolom
      ? this.kolomGroups.flatMap(g => g.items.filter(i => i.checked).map(i => i.key))
      : [];

    if (this.isPilihKolom && selectedKolom.length === 0) {
      this.error.set('Pilih minimal satu kolom untuk diekspor.'); return;
    }

    this.loading.set(true);

    const formatParam = this.isPilihKolom ? 'LENGKAP' : this.selectedFormat;

    const obs$ = this.activeTab() === 'tanggal-tertentu'
      ? this.absensiSvc.eksporHarian({
          tanggal:     this.tanggal,
          divisiId:    this.divisiId   || undefined,
          lokasiId:    this.lokasiId   || undefined,
          karyawanId:  this.selectedKaryawanId,
          format:      formatParam,
          kolom:       selectedKolom.length ? selectedKolom : undefined,
        })
      : this.absensiSvc.eksporRentang({
          dari:        this.tanggalDari,
          sampai:      this.tanggalSampai,
          divisiId:    this.divisiId   || undefined,
          karyawanId:  this.selectedKaryawanId,
          format:      formatParam,
          kolom:       selectedKolom.length ? selectedKolom : undefined,
        });

    obs$.subscribe({
      next: (blob: Blob) => {
        this.loading.set(false);
        // Trigger download di browser
        const url  = window.URL.createObjectURL(blob);
        const a    = document.createElement('a');
        const nama = this.activeTab() === 'tanggal-tertentu'
          ? `kehadiran-${this.tanggal}.xlsx`
          : `kehadiran-${this.tanggalDari}-sd-${this.tanggalSampai}.xlsx`;
        a.href     = url;
        a.download = nama;
        a.click();
        window.URL.revokeObjectURL(url);
        this.success.set(`File ${nama} berhasil diunduh.`);
      },
      error: (e: any) => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? 'Gagal mengekspor data. Silakan coba lagi.');
      }
    });
  }

  tutup(): void { this.closed.emit(); }

  // ── Builder kolom ──────────────────────────────────────
  private buildKolomGroups(): KolomGroup[] {
    const mk = (label: string, key: string) => ({ label, key, checked: false });
    const groups: { label: string; key: string; items: ReturnType<typeof mk>[] }[] = [
      {
        label: 'Karyawan', key: 'karyawan',
        items: [
          mk('Nama Karyawan',             'namaKaryawan'),
          mk('Nomor Induk Karyawan',      'nip'),
          mk('Jenis Identitas Karyawan',  'jenisIdentitas'),
          mk('Nomor Identitas Karyawan',  'nomorIdentitas'),
          mk('Divisi',                    'divisi'),
          mk('Jabatan',                   'jabatan'),
          mk('Hari Presensi',             'hariPresensi'),
          mk('Tanggal Presensi',          'tanggalPresensi'),
          mk('Jadwal',                    'jadwal'),
          mk('Rekap',                     'rekap'),
        ]
      },
      {
        label: 'Presensi Masuk', key: 'masuk',
        items: [
          mk('Masuk Selfie',      'masukSelfie'),
          mk('Masuk Jam',         'masukJam'),
          mk('Terlambat Menit',   'terlambatMenit'),
          mk('Denda',             'denda'),
          mk('Masuk Nama Spot',   'masukNamaSpot'),
          mk('Masuk Latitude',    'masukLat'),
          mk('Masuk Longitude',   'masukLng'),
          mk('Masuk Catatan',     'masukCatatan'),
          mk('Masuk Supervisi',   'masukSupervisi'),
        ]
      },
      {
        label: 'Presensi Keluar', key: 'keluar',
        items: [
          mk('Keluar Selfie',     'keluarSelfie'),
          mk('Keluar Jam',        'keluarJam'),
          mk('Keluar Nama Spot',  'keluarNamaSpot'),
          mk('Keluar Latitude',   'keluarLat'),
          mk('Keluar Longitude',  'keluarLng'),
          mk('Keluar Catatan',    'keluarCatatan'),
          mk('Keluar Supervisi',  'keluarSupervisi'),
        ]
      },
      {
        label: 'Istirahat', key: 'istirahat',
        items: [
          mk('Istirahat Jam',       'istirahatJam'),
          mk('Istirahat Nama Spot', 'istirahatNamaSpot'),
          mk('Istirahat Latitude',  'istirahatLat'),
          mk('Istirahat Longitude', 'istirahatLng'),
        ]
      },
      {
        label: 'Selesai Istirahat', key: 'selesaiIstirahat',
        items: [
          mk('Selesai Istirahat Jam',       'selesaiIstirahatJam'),
          mk('Selesai Istirahat Nama Spot', 'selesaiIstirahatNamaSpot'),
          mk('Selesai Istirahat Latitude',  'selesaiIstirahatLat'),
          mk('Selesai Istirahat Longitude', 'selesaiIstirahatLng'),
        ]
      },
      {
        label: 'Lembur', key: 'lembur',
        items: [
          mk('Lembur Selfie',     'lemburSelfie'),
          mk('Lembur Jam',        'lemburJam'),
          mk('Lembur Nama Spot',  'lemburNamaSpot'),
          mk('Lembur Latitude',   'lemburLat'),
          mk('Lembur Longitude',  'lemburLng'),
          mk('Lembur Catatan',    'lemburCatatan'),
          mk('Lembur Supervisi',  'lemburSupervisi'),
        ]
      },
      {
        label: 'Selesai Lembur', key: 'selesaiLembur',
        items: [
          mk('Selesai Lembur Selfie',     'selesaiLemburSelfie'),
          mk('Selesai Lembur Jam',        'selesaiLemburJam'),
          mk('Selesai Lembur Nama Spot',  'selesaiLemburNamaSpot'),
          mk('Selesai Lembur Latitude',   'selesaiLemburLat'),
          mk('Selesai Lembur Longitude',  'selesaiLemburLng'),
          mk('Selesai Lembur Catatan',    'selesaiLemburCatatan'),
          mk('Selesai Lembur Supervisi',  'selesaiLemburSupervisi'),
        ]
      },
      {
        label: 'Ringkasan', key: 'ringkasan',
        items: [
          mk('Total Jam Kerja',     'totalJamKerja'),
          mk('Total Jam Istirahat', 'totalJamIstirahat'),
          mk('Total Jam Lembur',    'totalJamLembur'),
        ]
      },
    ];

    // Tambahkan getter allChecked
    return groups.map(g => ({
      ...g,
      get allChecked() { return g.items.every(i => i.checked); }
    }));
  }
}
