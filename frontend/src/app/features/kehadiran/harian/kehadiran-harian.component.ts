import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbsensiService } from '../../../core/services/absensi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PolaKerjaService } from '../../../core/services/pola-kerja.service';
import { Absensi } from '../../../core/models/absensi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { EksporExcelModalComponent } from './ekspor-excel-modal.component';
import { environment } from '../../../../environments/environment';

type TabKey = 'masuk' | 'tidak-masuk' | 'cuti' | 'izin' | 'libur';
type SortDir = 'asc' | 'desc';

interface SortState { col: string; dir: SortDir; }

@Component({
  selector: 'app-kehadiran-harian',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, EksporExcelModalComponent],
  templateUrl: './kehadiran-harian.component.html'
})
export class KehadiranHarianComponent implements OnInit {
  private absensiSvc   = inject(AbsensiService);
  private karyawanSvc  = inject(KaryawanService);
  private polaKerjaSvc = inject(PolaKerjaService);

  // ── State ──────────────────────────────────────────────
  tanggalFilter = signal(new Date().toISOString().substring(0, 10));
  absensiList   = signal<Absensi[]>([]);
  karyawanList  = signal<Karyawan[]>([]);
  loading       = signal(false);
  error         = signal('');
  activeTab     = signal<TabKey>('masuk');

  // ── DataTable state — Presensi Masuk ──────────────────
  dtMasukSearch   = '';
  dtMasukPageSize = 10;
  dtMasukPage     = signal(1);
  dtMasukSort     = signal<SortState>({ col: 'namaKaryawan', dir: 'asc' });

  // ── DataTable state — Tidak Masuk ─────────────────────
  dtTidakSearch   = '';
  dtTidakPageSize = 10;
  dtTidakPage     = signal(1);
  dtTidakSort     = signal<SortState>({ col: 'namaLengkap', dir: 'asc' });

  readonly pageSizeOptions = [10, 25, 50, 100];

  // ── DataTable computed — Presensi Masuk ───────────────
  readonly masukFiltered = computed(() => {
    const q = this.dtMasukSearch.toLowerCase();
    let rows = this.absensiList().filter(a => a.jamMasuk);
    if (q) rows = rows.filter(a =>
      (a.namaKaryawan?.toLowerCase().includes(q)) ||
      (a.namaDivisi?.toLowerCase().includes(q)) ||
      (a.namaJabatan?.toLowerCase().includes(q))
    );
    const { col, dir } = this.dtMasukSort();
    rows = [...rows].sort((a, b) => {
      const va = this.sortValMasuk(a, col);
      const vb = this.sortValMasuk(b, col);
      return dir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return rows;
  });

  readonly masukTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.masukFiltered().length / this.dtMasukPageSize))
  );

  readonly masukPagedList = computed(() => {
    const page = Math.min(this.dtMasukPage(), this.masukTotalPages());
    const start = (page - 1) * this.dtMasukPageSize;
    return this.masukFiltered().slice(start, start + this.dtMasukPageSize);
  });

  readonly masukPagesArr = computed(() =>
    this.buildPagesArr(this.dtMasukPage(), this.masukTotalPages())
  );

  masukInfo = computed(() => {
    const total = this.masukFiltered().length;
    if (total === 0) return 'Tidak ada data';
    const page  = Math.min(this.dtMasukPage(), this.masukTotalPages());
    const start = (page - 1) * this.dtMasukPageSize + 1;
    const end   = Math.min(page * this.dtMasukPageSize, total);
    const all   = this.masukList().length;
    return total < all
      ? `Menampilkan ${start}–${end} dari ${total} entri (difilter dari ${all} total entri)`
      : `Menampilkan ${start}–${end} dari ${total} entri`;
  });

  // ── DataTable computed — Tidak Masuk ──────────────────
  readonly tidakFiltered = computed(() => {
    const hadirIds = new Set(this.absensiList().map(a => a.karyawanId));
    const q = this.dtTidakSearch.toLowerCase();
    let rows = this.karyawanList().filter(k => !hadirIds.has(k.id!));
    if (q) rows = rows.filter(k =>
      k.namaLengkap.toLowerCase().includes(q) ||
      (k.namaDivisi?.toLowerCase().includes(q)) ||
      (k.namaJabatan?.toLowerCase().includes(q))
    );
    const { col, dir } = this.dtTidakSort();
    rows = [...rows].sort((a, b) => {
      const va = (col === 'namaLengkap' ? a.namaLengkap : (a.namaDivisi ?? '')) ?? '';
      const vb = (col === 'namaLengkap' ? b.namaLengkap : (b.namaDivisi ?? '')) ?? '';
      return dir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return rows;
  });

  readonly tidakTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.tidakFiltered().length / this.dtTidakPageSize))
  );

  readonly tidakPagedList = computed(() => {
    const page  = Math.min(this.dtTidakPage(), this.tidakTotalPages());
    const start = (page - 1) * this.dtTidakPageSize;
    return this.tidakFiltered().slice(start, start + this.dtTidakPageSize);
  });

  readonly tidakPagesArr = computed(() =>
    this.buildPagesArr(this.dtTidakPage(), this.tidakTotalPages())
  );

  readonly tidakInfo = computed(() => {
    const total = this.tidakFiltered().length;
    if (total === 0) return 'Tidak ada data';
    const page  = Math.min(this.dtTidakPage(), this.tidakTotalPages());
    const start = (page - 1) * this.dtTidakPageSize + 1;
    const end   = Math.min(page * this.dtTidakPageSize, total);
    const all   = this.tidakMasukList().length;
    return total < all
      ? `Menampilkan ${start}–${end} dari ${total} entri (difilter dari ${all} total entri)`
      : `Menampilkan ${start}–${end} dari ${total} entri`;
  });

  // ── Modal Tambah Presensi ──────────────────────────────
  showModal       = signal(false);
  popupPerangkat  = signal<Absensi | null>(null);
  popupJadwal     = signal<Absensi | null>(null);

  openPerangkatPopup(a: Absensi): void  { this.popupPerangkat.set(a); }
  closePerangkatPopup(): void           { this.popupPerangkat.set(null); }
  openJadwalPopup(a: Absensi): void     { this.popupJadwal.set(a); }
  closeJadwalPopup(): void              { this.popupJadwal.set(null); this.showUbahJadwal.set(false); }

  // ── Popup Ubah Presensi (pilih aksi) ──────────────────
  popupUbahPresensi = signal<Absensi | null>(null);

  openUbahPresensi(a: Absensi): void { this.popupUbahPresensi.set(a); }
  closeUbahPresensi(): void          { this.popupUbahPresensi.set(null); this.showUbahWaktu.set(false); }

  formatTanggalLengkap(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  // ── Sub-popup: Ubah Waktu Presensi ────────────────────
  showUbahWaktu      = signal(false);
  ubahWaktuJamMasuk  = '';
  ubahWaktuJamKeluar = '';
  ubahWaktuSaving    = signal(false);
  ubahWaktuError     = signal('');

  openUbahWaktu(): void {
    const a = this.popupUbahPresensi();
    if (!a) return;
    this.ubahWaktuJamMasuk  = a.jamMasuk  ? a.jamMasuk.substring(0, 5)  : '';
    this.ubahWaktuJamKeluar = a.jamKeluar ? a.jamKeluar.substring(0, 5) : '';
    this.ubahWaktuError.set('');
    this.showUbahWaktu.set(true);
  }

  closeUbahWaktu(): void { this.showUbahWaktu.set(false); }

  simpanUbahWaktu(): void {
    const a = this.popupUbahPresensi();
    if (!a?.id) return;
    if (!this.ubahWaktuJamMasuk) { this.ubahWaktuError.set('Jam masuk wajib diisi'); return; }
    this.ubahWaktuSaving.set(true);
    this.ubahWaktuError.set('');
    this.absensiSvc.ubahWaktuPresensi(a.id, this.ubahWaktuJamMasuk, this.ubahWaktuJamKeluar || undefined).subscribe({
      next: () => {
        this.ubahWaktuSaving.set(false);
        this.showUbahWaktu.set(false);
        this.popupUbahPresensi.set(null);
        this.loadData();
      },
      error: (e: any) => {
        this.ubahWaktuSaving.set(false);
        this.ubahWaktuError.set(e?.error?.message ?? 'Gagal menyimpan waktu presensi.');
      }
    });
  }

  // ── Batalkan Presensi ─────────────────────────────────
  batalkanSaving = signal(false);
  batalkanError  = signal('');

  batalkanPresensi(): void {
    const a = this.popupUbahPresensi();
    if (!a?.id) return;
    if (!confirm(`Yakin ingin membatalkan presensi ${a.namaKaryawan} pada tanggal ini?\nData presensi akan dihapus permanen.`)) return;
    this.batalkanSaving.set(true);
    this.batalkanError.set('');
    this.absensiSvc.batalkanPresensi(a.id).subscribe({
      next: () => {
        this.batalkanSaving.set(false);
        this.popupUbahPresensi.set(null);
        this.loadData();
      },
      error: (e: any) => {
        this.batalkanSaving.set(false);
        this.batalkanError.set(e?.error?.message ?? 'Gagal membatalkan presensi.');
      }
    });
  }

  // ── Hapus Jadwal Kerja ─────────────────────────────────
  hapusSaving = signal(false);
  hapusError  = signal('');

  hapusJadwal(): void {
    const j = this.popupJadwal();
    if (!j?.polaKerjaHariId) {
      this.hapusError.set('Data jadwal hari tidak ditemukan.');
      return;
    }
    const namaHari = j.namaHari || 'hari ini';
    if (!confirm(`Yakin ingin menghapus jadwal kerja untuk ${namaHari}?\nJadwal akan direset menjadi Libur.`)) return;

    this.hapusSaving.set(true);
    this.hapusError.set('');
    this.polaKerjaSvc.hapusHari(j.polaKerjaHariId).subscribe({
      next: () => {
        this.hapusSaving.set(false);
        this.popupJadwal.set(null);
        this.loadData();
      },
      error: (e: any) => {
        this.hapusSaving.set(false);
        this.hapusError.set(e?.error?.message ?? 'Gagal menghapus jadwal.');
      }
    });
  }

  // ── Ubah Jadwal Kerja ──────────────────────────────────
  showUbahJadwal       = signal(false);
  ubahSaving           = signal(false);
  ubahError            = signal('');
  ubahJamMasuk         = '';
  ubahJamKeluar        = '';
  ubahToleransi        = 0;
  ubahMulaiIstirahat   = '';
  ubahSelesaiIstirahat = '';
  ubahMaksMenit        = 0;

  openUbahJadwal(): void {
    const j = this.popupJadwal();
    if (!j) return;
    this.ubahJamMasuk           = j.jamKerjaMulai    || '';
    this.ubahJamKeluar          = j.jamKerjaSelesai  || '';
    this.ubahToleransi          = j.toleransiKeterlambatan ?? 0;
    this.ubahMulaiIstirahat     = j.jamIstirahatMulai    || '';
    this.ubahSelesaiIstirahat   = j.jamIstirahatSelesai  || '';
    this.ubahMaksMenit          = j.maksMenitIstirahat   ?? 0;
    this.ubahError.set('');
    this.showUbahJadwal.set(true);
  }

  closeUbahJadwal(): void { this.showUbahJadwal.set(false); }

  simpanUbahJadwal(): void {
    const j = this.popupJadwal();
    if (!j?.polaKerjaHariId) {
      this.ubahError.set('Data jadwal hari tidak ditemukan. Karyawan mungkin belum memiliki pola kerja.');
      return;
    }
    if (!this.ubahJamMasuk || !this.ubahJamKeluar) {
      this.ubahError.set('Jam Masuk dan Jam Keluar wajib diisi.');
      return;
    }
    this.ubahSaving.set(true);
    this.ubahError.set('');

    this.polaKerjaSvc.updateHari(j.polaKerjaHariId, {
      jamMasuk:              this.ubahJamMasuk,
      jamKeluar:             this.ubahJamKeluar,
      mulaiIstirahat:        this.ubahMulaiIstirahat   || undefined,
      selesaiIstirahat:      this.ubahSelesaiIstirahat || undefined,
      maksMenitIstirahat:    this.ubahMaksMenit > 0 ? this.ubahMaksMenit : undefined,
      toleransiKeterlambatan: this.ubahToleransi,
    }).subscribe({
      next: () => {
        this.ubahSaving.set(false);
        this.showUbahJadwal.set(false);
        this.popupJadwal.set(null);
        this.loadData(); // refresh tabel
      },
      error: (e: any) => {
        this.ubahSaving.set(false);
        this.ubahError.set(e?.error?.message ?? 'Gagal menyimpan jadwal.');
      }
    });
  }

  // ── Modal Tambah Presensi ──────────────────────────────
  modalKaryawanId   = '';
  modalTanggal      = new Date().toISOString().substring(0, 10);
  modalWaktuMulai   = '';
  modalWaktuSelesai = '';
  modalCatatan      = '';
  modalSaving       = signal(false);
  modalError        = signal('');

  // ── Computed ───────────────────────────────────────────
  readonly masukList = computed(() => this.absensiList().filter(a => a.jamMasuk));

  readonly tidakMasukList = computed(() => {
    const hadirIds = new Set(this.absensiList().map(a => a.karyawanId));
    return this.karyawanList().filter(k => !hadirIds.has(k.id!));
  });

  readonly cutiList = computed(() =>
    this.absensiList().filter(a => a.status === 'IZIN')
  );

  readonly izinList = computed(() =>
    this.absensiList().filter(a => a.status === 'SAKIT')
  );

  readonly liburList = computed(() =>
    this.absensiList().filter(a => a.status === 'ALPHA')
  );

  readonly tabList: { key: TabKey; label: string; count: () => number }[] = [
    { key: 'masuk',       label: 'Presensi Masuk',    count: () => this.masukList().length       },
    { key: 'tidak-masuk', label: 'Tidak/Belum Masuk', count: () => this.tidakMasukList().length  },
    { key: 'cuti',        label: 'Cuti',              count: () => this.cutiList().length         },
    { key: 'izin',        label: 'Izin',              count: () => this.izinList().length         },
    { key: 'libur',       label: 'Libur',             count: () => this.liburList().length        },
  ];

  ngOnInit(): void {
    this.loadData();
    this.karyawanSvc.findAll().subscribe({ next: list => this.karyawanList.set(list) });
  }

  loadData(): void {
    this.loading.set(true);
    this.error.set('');
    this.absensiSvc.getKehadiranHarian(this.tanggalFilter()).subscribe({
      next: list => { this.absensiList.set(list); this.loading.set(false); },
      error: e   => { this.error.set(e?.error?.message ?? 'Gagal memuat data'); this.loading.set(false); }
    });
  }

  prevDay(): void {
    const d = new Date(this.tanggalFilter());
    d.setDate(d.getDate() - 1);
    this.tanggalFilter.set(d.toISOString().substring(0, 10));
    this.loadData();
  }

  nextDay(): void {
    const d = new Date(this.tanggalFilter());
    d.setDate(d.getDate() + 1);
    this.tanggalFilter.set(d.toISOString().substring(0, 10));
    this.loadData();
  }

  onTanggalChange(val: string): void {
    this.tanggalFilter.set(val);
    this.loadData();
  }

  setTab(t: TabKey): void { this.activeTab.set(t); }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.apiUrl.replace('/api', '')}/${path}`;
  }

  formatJam(jam?: string): string {
    if (!jam) return '—';
    return jam.substring(0, 8);
  }

  openModal(): void {
    this.modalKaryawanId  = '';
    this.modalTanggal     = this.tanggalFilter();
    this.modalWaktuMulai  = '';
    this.modalWaktuSelesai = '';
    this.modalCatatan     = '';
    this.modalError.set('');
    this.showModal.set(true);
  }

  closeModal(): void { this.showModal.set(false); }

  submitModal(): void {
    if (!this.modalKaryawanId) { this.modalError.set('Pilih karyawan terlebih dahulu'); return; }
    if (!this.modalWaktuMulai) { this.modalError.set('Waktu mulai wajib diisi'); return; }
    this.modalSaving.set(true);
    this.modalError.set('');
    this.absensiSvc.tambahManual(+this.modalKaryawanId, {
      tanggal:      this.modalTanggal,
      tipePresensi: 'MASUK_KELUAR',
      waktuMulai:   this.modalWaktuMulai,
      waktuSelesai: this.modalWaktuSelesai || undefined,
      catatan:      this.modalCatatan || undefined
    }).subscribe({
      next: () => {
        this.modalSaving.set(false);
        this.showModal.set(false);
        this.loadData();
      },
      error: e => {
        this.modalSaving.set(false);
        this.modalError.set(e?.error?.message ?? 'Gagal menyimpan');
      }
    });
  }

  // ── Ekspor Excel ──────────────────────────────────────
  showEkspor = signal(false);

  exportExcel(): void  { this.showEkspor.set(true); }
  tutupEkspor(): void  { this.showEkspor.set(false); }

  formatTanggalDisplay(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  // ── DataTable helpers ─────────────────────────────────
  private sortValMasuk(a: Absensi, col: string): string {
    switch (col) {
      case 'namaKaryawan': return a.namaKaryawan ?? '';
      case 'namaDivisi':   return a.namaDivisi   ?? '';
      case 'jamMasuk':     return a.jamMasuk      ?? '';
      case 'jamKeluar':    return a.jamKeluar     ?? '';
      case 'terlambat':    return String(a.menitTerlambat ?? 0).padStart(6, '0');
      default:             return '';
    }
  }

  sortMasuk(col: string): void {
    const cur = this.dtMasukSort();
    this.dtMasukSort.set({ col, dir: cur.col === col && cur.dir === 'asc' ? 'desc' : 'asc' });
    this.dtMasukPage.set(1);
  }

  sortTidak(col: string): void {
    const cur = this.dtTidakSort();
    this.dtTidakSort.set({ col, dir: cur.col === col && cur.dir === 'asc' ? 'desc' : 'asc' });
    this.dtTidakPage.set(1);
  }

  sortIcon(sort: SortState, col: string): string {
    if (sort.col !== col) return 'bx-sort';
    return sort.dir === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  onMasukSearch(): void   { this.dtMasukPage.set(1); }
  onTidakSearch(): void   { this.dtTidakPage.set(1); }
  onMasukPageSize(): void { this.dtMasukPage.set(1); }
  onTidakPageSize(): void { this.dtTidakPage.set(1); }

  private buildPagesArr(current: number, total: number): (number | '...')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
    if (current < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  }
}
