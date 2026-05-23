import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PersetujuanPresensiService } from '../../../core/services/persetujuan-presensi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PersetujuanPresensi, PersetujuanPresensiRequest } from '../../../core/models/persetujuan-presensi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

type SortDir = 'asc' | 'desc' | '';

const JENIS_OPTIONS = [
  { value: 'MASUK',             label: 'Presensi Masuk' },
  { value: 'KELUAR',            label: 'Presensi Keluar' },
  { value: 'ISTIRAHAT',         label: 'Mulai Istirahat' },
  { value: 'SELESAI_ISTIRAHAT', label: 'Selesai Istirahat' },
  { value: 'LEMBUR',            label: 'Mulai Lembur' },
  { value: 'SELESAI_LEMBUR',    label: 'Selesai Lembur' },
];

@Component({
  selector: 'app-persetujuan-presensi',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './persetujuan-presensi.component.html'
})
export class PersetujuanPresensiComponent implements OnInit {
  private svc         = inject(PersetujuanPresensiService);
  private karyawanSvc = inject(KaryawanService);

  // ── State ─────────────────────────────────────────────────
  rows         = signal<PersetujuanPresensi[]>([]);
  karyawanList = signal<Karyawan[]>([]);
  loading      = signal(false);
  error        = signal('');
  savingId     = signal<number | null>(null);
  bulkSaving   = signal(false);
  selectedIds  = signal<Set<number>>(new Set());

  // ── Filter ────────────────────────────────────────────────
  filterTanggal      = signal('');
  filterJenis        = signal('');
  filterCari         = signal('');
  showDiizinkan      = signal(false);   // false = belum diizinkan, true = sudah

  // ── DataTable ─────────────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];
  readonly Math = Math;

  // ── Modal Tambah ──────────────────────────────────────────
  showBuatModal    = signal(false);
  modalSaving      = signal(false);
  modalError       = signal('');
  formKaryawanId   = signal('');
  formTanggal      = signal('');
  formJenis        = signal('MASUK');
  formPolaKerja    = signal('');
  formJamMasuk     = signal('');
  formJamKeluar    = signal('');
  formAlasan       = signal('');

  readonly jenisOptions = JENIS_OPTIONS;

  // ── Computed ──────────────────────────────────────────────
  filtered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    return this.rows().filter(r =>
      !q ||
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q) ||
      (r.jenisPresensi ?? '').toLowerCase().includes(q)
    );
  });

  sorted = computed(() => {
    const col = this.sortCol();
    const dir = this.sortDir();
    if (!col || !dir) return this.filtered();
    return [...this.filtered()].sort((a: any, b: any) => {
      const va = (a[col] ?? '').toString().toLowerCase();
      const vb = (b[col] ?? '').toString().toLowerCase();
      return dir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    });
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.sorted().length / this.dtPageSize())));

  paged = computed(() => {
    const page  = Math.min(this.dtPage(), this.totalPages());
    const start = (page - 1) * this.dtPageSize();
    return this.sorted().slice(start, start + this.dtPageSize());
  });

  pagesArr = computed(() => this.buildPages(this.dtPage(), this.totalPages()));

  info = computed(() => {
    const total = this.sorted().length;
    if (total === 0) return 'Menampilkan 0 dari 0 total data';
    const page  = Math.min(this.dtPage(), this.totalPages());
    const start = (page - 1) * this.dtPageSize() + 1;
    const end   = Math.min(page * this.dtPageSize(), total);
    return `Menampilkan ${start}–${end} dari ${total} total data`;
  });

  allChecked = computed(() =>
    this.paged().length > 0 &&
    this.paged().every(r => this.selectedIds().has(r.id))
  );

  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit(): void {
    this.karyawanSvc.findAll().subscribe({ next: d => this.karyawanList.set(d) });
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);
    this.error.set('');
    this.selectedIds.set(new Set());
    this.svc.findAll(
      this.showDiizinkan(),
      this.filterTanggal() || undefined,
      this.filterJenis() || undefined,
      this.filterCari() || undefined
    ).subscribe({
      next: data => { this.rows.set(data); this.loading.set(false); },
      error: e   => { this.error.set(e?.error?.message ?? 'Gagal memuat data'); this.loading.set(false); }
    });
  }

  setTab(diizinkan: boolean): void {
    this.showDiizinkan.set(diizinkan);
    this.dtPage.set(1);
    this.loadData();
  }

  cari(): void { this.dtPage.set(1); this.loadData(); }

  prevDate(): void {
    const t = this.filterTanggal();
    if (!t) return;
    const d = new Date(t + 'T00:00:00');
    d.setDate(d.getDate() - 1);
    this.filterTanggal.set(d.toISOString().substring(0, 10));
    this.loadData();
  }

  nextDate(): void {
    const t = this.filterTanggal();
    if (!t) {
      this.filterTanggal.set(new Date().toISOString().substring(0, 10));
    } else {
      const d = new Date(t + 'T00:00:00');
      d.setDate(d.getDate() + 1);
      this.filterTanggal.set(d.toISOString().substring(0, 10));
    }
    this.loadData();
  }

  // ── Sort ─────────────────────────────────────────────────
  sort(col: string): void {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : this.sortDir() === 'desc' ? '' : 'asc');
      if (this.sortDir() === '') this.sortCol.set('');
    } else {
      this.sortCol.set(col);
      this.sortDir.set('asc');
    }
    this.dtPage.set(1);
  }

  sortIcon(col: string): string {
    if (this.sortCol() !== col) return 'bx-sort';
    return this.sortDir() === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  // ── Pagination ───────────────────────────────────────────
  buildPages(cur: number, total: number): number[] {
    const pages: number[] = [];
    for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++) pages.push(i);
    return pages;
  }

  goPage(p: number): void {
    if (p < 1 || p > this.totalPages()) return;
    this.dtPage.set(p);
  }

  // ── Checkbox ─────────────────────────────────────────────
  toggleAll(checked: boolean): void {
    const ids = new Set(this.selectedIds());
    this.paged().forEach(r => checked ? ids.add(r.id) : ids.delete(r.id));
    this.selectedIds.set(ids);
  }

  toggleOne(id: number, checked: boolean): void {
    const ids = new Set(this.selectedIds());
    checked ? ids.add(id) : ids.delete(id);
    this.selectedIds.set(ids);
  }

  isSelected(id: number): boolean { return this.selectedIds().has(id); }

  // ── Aksi ─────────────────────────────────────────────────
  izinkan(r: PersetujuanPresensi): void {
    this.savingId.set(r.id);
    this.svc.izinkan(r.id).subscribe({
      next: () => { this.savingId.set(null); this.loadData(); },
      error: e  => { this.savingId.set(null); alert(e?.error?.message ?? 'Gagal'); }
    });
  }

  izinkanTerpilih(): void {
    const ids = Array.from(this.selectedIds());
    if (!ids.length) { alert('Pilih setidaknya satu data'); return; }
    this.bulkSaving.set(true);
    this.svc.izinkanTerpilih(ids).subscribe({
      next: n  => { this.bulkSaving.set(false); alert(`${n} data berhasil diizinkan`); this.loadData(); },
      error: e => { this.bulkSaving.set(false); alert(e?.error?.message ?? 'Gagal'); }
    });
  }

  izinkanSemua(): void {
    if (!confirm('Izinkan semua presensi yang tampil saat ini?')) return;
    this.bulkSaving.set(true);
    this.svc.izinkanSemua(
      this.filterTanggal() || undefined,
      this.filterJenis() || undefined,
      this.filterCari() || undefined
    ).subscribe({
      next: n  => { this.bulkSaving.set(false); alert(`${n} data berhasil diizinkan`); this.loadData(); },
      error: e => { this.bulkSaving.set(false); alert(e?.error?.message ?? 'Gagal'); }
    });
  }

  hapus(r: PersetujuanPresensi): void {
    if (!confirm(`Hapus persetujuan presensi ${r.namaKaryawan}?`)) return;
    this.svc.hapus(r.id).subscribe({
      next: () => this.loadData(),
      error: e  => alert(e?.error?.message ?? 'Gagal menghapus')
    });
  }

  // ── Modal Tambah ─────────────────────────────────────────
  openBuat(): void {
    this.formKaryawanId.set('');
    this.formTanggal.set(this.filterTanggal() || new Date().toISOString().substring(0, 10));
    this.formJenis.set('MASUK');
    this.formPolaKerja.set('');
    this.formJamMasuk.set('');
    this.formJamKeluar.set('');
    this.formAlasan.set('');
    this.modalError.set('');
    this.showBuatModal.set(true);
  }

  submitBuat(): void {
    if (!this.formKaryawanId()) { this.modalError.set('Pilih karyawan'); return; }
    if (!this.formTanggal())    { this.modalError.set('Tanggal wajib diisi'); return; }

    const req: PersetujuanPresensiRequest = {
      karyawanId:    +this.formKaryawanId(),
      tanggal:       this.formTanggal(),
      jenisPresensi: this.formJenis(),
      namaPolaKerja: this.formPolaKerja() || undefined,
      jamJadwalMasuk:  this.formJamMasuk() || undefined,
      jamJadwalKeluar: this.formJamKeluar() || undefined,
      alasan:        this.formAlasan() || undefined,
    };
    this.modalSaving.set(true);
    this.svc.buat(req).subscribe({
      next: () => { this.modalSaving.set(false); this.showBuatModal.set(false); this.loadData(); },
      error: e  => { this.modalSaving.set(false); this.modalError.set(e?.error?.message ?? 'Gagal menyimpan'); }
    });
  }

  // ── Helpers ──────────────────────────────────────────────
  jenisLabel(jenis: string): string {
    return JENIS_OPTIONS.find(o => o.value === jenis)?.label ?? jenis;
  }

  jenisColor(jenis: string): string {
    const map: Record<string, string> = {
      MASUK: '#6c5ce7', KELUAR: '#00b894',
      ISTIRAHAT: '#fdcb6e', SELESAI_ISTIRAHAT: '#e17055',
      LEMBUR: '#0984e3', SELESAI_LEMBUR: '#00cec9'
    };
    return map[jenis] ?? '#6c5ce7';
  }

  formatTanggal(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatTanggalFilter(iso: string): string {
    if (!iso) return 'Tanggal';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
