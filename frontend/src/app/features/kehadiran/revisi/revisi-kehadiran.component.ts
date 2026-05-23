import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RevisiKehadiranService } from '../../../core/services/revisi-kehadiran.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { RevisiKehadiran, RevisiKehadiranRequest, JenisRevisiKehadiran, StatusRevisi } from '../../../core/models/revisi-kehadiran.model';
import { Divisi } from '../../../core/models/divisi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

type TabKey = 'PENGAJUAN' | 'DIPROSES';
type SortDir = 'asc' | 'desc' | '';

@Component({
  selector: 'app-revisi-kehadiran',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './revisi-kehadiran.component.html'
})
export class RevisiKehadiranComponent implements OnInit {
  private svc        = inject(RevisiKehadiranService);
  private divisiSvc  = inject(DivisiService);
  private karyawanSvc = inject(KaryawanService);

  // ── State ─────────────────────────────────────────────
  activeTab   = signal<TabKey>('PENGAJUAN');
  filterMulai = signal('');
  filterAkhir = signal('');
  filterDivisi = signal('');
  filterCari  = signal('');

  rows      = signal<RevisiKehadiran[]>([]);
  divisiList = signal<Divisi[]>([]);
  karyawanList = signal<Karyawan[]>([]);
  loading   = signal(false);
  error     = signal('');
  savingId  = signal<number | null>(null);

  // ── DataTable state ────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];
  readonly Math = Math;

  // ── Modal Buat Revisi ──────────────────────────────────
  showBuatModal  = signal(false);
  modalSaving    = signal(false);
  modalError     = signal('');
  formKaryawanId = signal('');
  formAbsensiId  = signal('');
  formTanggal    = signal('');
  formJenis      = signal<JenisRevisiKehadiran>('MASUK');
  formAlasan     = signal('');
  formJamAsli    = signal('');
  formJamBaru    = signal('');

  // ── Modal Tolak ────────────────────────────────────────
  showTolakModal   = signal(false);
  tolakId          = signal<number | null>(null);
  tolakCatatan     = signal('');
  tolakSaving      = signal(false);
  tolakError       = signal('');

  // ── Computed ──────────────────────────────────────────
  filtered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    return this.rows().filter(r =>
      !q ||
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q) ||
      (r.alasan ?? '').toLowerCase().includes(q)
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
    if (total === 0) return 'Tidak ada data';
    const page  = Math.min(this.dtPage(), this.totalPages());
    const start = (page - 1) * this.dtPageSize() + 1;
    const end   = Math.min(page * this.dtPageSize(), total);
    return `Menampilkan ${start}–${end} dari ${total} data`;
  });

  readonly jenisOptions: { value: JenisRevisiKehadiran; label: string }[] = [
    { value: 'MASUK',             label: 'Presensi Masuk' },
    { value: 'KELUAR',            label: 'Presensi Keluar' },
    { value: 'ISTIRAHAT',         label: 'Mulai Istirahat' },
    { value: 'SELESAI_ISTIRAHAT', label: 'Selesai Istirahat' },
    { value: 'LEMBUR',            label: 'Mulai Lembur' },
    { value: 'SELESAI_LEMBUR',    label: 'Selesai Lembur' },
  ];

  // ── Lifecycle ─────────────────────────────────────────
  ngOnInit(): void {
    this.divisiSvc.findAll().subscribe({ next: d => this.divisiList.set(d) });
    this.karyawanSvc.findAll().subscribe({ next: d => this.karyawanList.set(d) });
    this.loadData();
  }

  setTab(tab: TabKey): void {
    this.activeTab.set(tab);
    this.dtPage.set(1);
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);
    this.error.set('');
    const status: StatusRevisi = this.activeTab() === 'PENGAJUAN' ? 'PENGAJUAN' : 'DISETUJUI';
    const divisiId = this.filterDivisi() ? +this.filterDivisi() : undefined;
    this.svc.findByStatus(
      status,
      divisiId,
      this.filterMulai() || undefined,
      this.filterAkhir() || undefined,
      this.filterCari() || undefined
    ).subscribe({
      next: data => { this.rows.set(data); this.loading.set(false); },
      error: e   => { this.error.set(e?.error?.message ?? 'Gagal memuat data'); this.loading.set(false); }
    });
    // Juga ambil yang DITOLAK jika tab Telah Diproses
    if (this.activeTab() === 'DIPROSES') {
      this.svc.findByStatus('DITOLAK', divisiId, this.filterMulai() || undefined, this.filterAkhir() || undefined, this.filterCari() || undefined)
        .subscribe({ next: d => this.rows.update(prev => [...prev, ...d]) });
    }
  }

  cari(): void { this.dtPage.set(1); this.loadData(); }

  // ── Sort ──────────────────────────────────────────────
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

  // ── Pagination ────────────────────────────────────────
  buildPages(cur: number, total: number): number[] {
    const pages: number[] = [];
    const range = 2;
    for (let i = Math.max(1, cur - range); i <= Math.min(total, cur + range); i++) pages.push(i);
    return pages;
  }

  goPage(p: number): void {
    if (p < 1 || p > this.totalPages()) return;
    this.dtPage.set(p);
  }

  // ── Jenis label ───────────────────────────────────────
  jenisLabel(jenis: JenisRevisiKehadiran): string {
    return this.jenisOptions.find(o => o.value === jenis)?.label ?? jenis;
  }

  jenisColor(jenis: JenisRevisiKehadiran): string {
    const map: Record<string, string> = {
      MASUK: '#6c5ce7', KELUAR: '#00b894',
      ISTIRAHAT: '#fdcb6e', SELESAI_ISTIRAHAT: '#e17055',
      LEMBUR: '#0984e3', SELESAI_LEMBUR: '#00cec9'
    };
    return map[jenis] ?? '#6c5ce7';
  }

  statusBadge(s: StatusRevisi): { label: string; bg: string; color: string } {
    const map: Record<StatusRevisi, { label: string; bg: string; color: string }> = {
      PENGAJUAN:  { label: 'Menunggu',  bg: '#fff3cd', color: '#856404' },
      DISETUJUI:  { label: 'Disetujui', bg: '#d1e7dd', color: '#0f5132' },
      DITOLAK:    { label: 'Ditolak',   bg: '#f8d7da', color: '#842029' },
    };
    return map[s] ?? { label: s, bg: '#e9ecef', color: '#495057' };
  }

  formatJam(jam?: string): string {
    if (!jam) return '-';
    return jam.length > 5 ? jam.substring(0, 5) : jam;
  }

  formatTanggal(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  // ── Aksi ──────────────────────────────────────────────
  setujui(r: RevisiKehadiran): void {
    if (!confirm(`Setujui revisi ${this.jenisLabel(r.jenisKehadiran)} untuk ${r.namaKaryawan}?`)) return;
    this.savingId.set(r.id);
    this.svc.setujui(r.id).subscribe({
      next: () => { this.savingId.set(null); this.loadData(); },
      error: e  => { this.savingId.set(null); alert(e?.error?.message ?? 'Gagal menyetujui'); }
    });
  }

  openTolak(r: RevisiKehadiran): void {
    this.tolakId.set(r.id);
    this.tolakCatatan.set('');
    this.tolakError.set('');
    this.showTolakModal.set(true);
  }

  submitTolak(): void {
    if (!this.tolakCatatan().trim()) { this.tolakError.set('Catatan penolakan wajib diisi'); return; }
    this.tolakSaving.set(true);
    this.svc.tolak(this.tolakId()!, this.tolakCatatan()).subscribe({
      next: () => { this.tolakSaving.set(false); this.showTolakModal.set(false); this.loadData(); },
      error: e  => { this.tolakSaving.set(false); this.tolakError.set(e?.error?.message ?? 'Gagal menolak'); }
    });
  }

  hapus(r: RevisiKehadiran): void {
    if (!confirm(`Hapus permintaan revisi dari ${r.namaKaryawan}?`)) return;
    this.svc.hapus(r.id).subscribe({
      next: () => this.loadData(),
      error: e  => alert(e?.error?.message ?? 'Gagal menghapus')
    });
  }

  // ── Modal Buat ────────────────────────────────────────
  openBuat(): void {
    this.formKaryawanId.set('');
    this.formAbsensiId.set('');
    this.formTanggal.set('');
    this.formJenis.set('MASUK');
    this.formAlasan.set('');
    this.formJamAsli.set('');
    this.formJamBaru.set('');
    this.modalError.set('');
    this.showBuatModal.set(true);
  }

  submitBuat(): void {
    if (!this.formKaryawanId()) { this.modalError.set('Pilih karyawan'); return; }
    if (!this.formTanggal())    { this.modalError.set('Tanggal wajib diisi'); return; }
    if (!this.formJamBaru())    { this.modalError.set('Jam baru wajib diisi'); return; }
    if (!this.formAlasan())     { this.modalError.set('Alasan wajib diisi'); return; }

    const req: RevisiKehadiranRequest = {
      karyawanId:    +this.formKaryawanId(),
      absensiId:     this.formAbsensiId() ? +this.formAbsensiId() : undefined,
      tanggal:       this.formTanggal(),
      jenisKehadiran: this.formJenis(),
      alasan:        this.formAlasan(),
      jamAsli:       this.formJamAsli() || undefined,
      jamBaru:       this.formJamBaru(),
    };
    this.modalSaving.set(true);
    this.svc.buat(req).subscribe({
      next: () => { this.modalSaving.set(false); this.showBuatModal.set(false); this.loadData(); },
      error: e  => { this.modalSaving.set(false); this.modalError.set(e?.error?.message ?? 'Gagal menyimpan'); }
    });
  }
}
