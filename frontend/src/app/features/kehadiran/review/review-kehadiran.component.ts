import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbsensiService } from '../../../core/services/absensi.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { Absensi } from '../../../core/models/absensi.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

type TabKey = 'perlu' | 'sudah';
type SortDir = 'asc' | 'desc' | '';

@Component({
  selector: 'app-review-kehadiran',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './review-kehadiran.component.html'
})
export class ReviewKehadiranComponent implements OnInit {
  private absensiSvc = inject(AbsensiService);
  private divisiSvc  = inject(DivisiService);

  // ── State ─────────────────────────────────────────────
  activeTab  = signal<TabKey>('perlu');
  divisiId   = '';
  cari       = '';
  divisiList = signal<Divisi[]>([]);
  rows       = signal<Absensi[]>([]);
  loading    = signal(false);
  error      = signal('');
  savingId   = signal<number | null>(null);
  jumlahPerlu = signal(0);

  // ── DataTable state ────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];
  readonly Math = Math;

  // ── Computed: filtered + sorted + paged ───────────────
  filtered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    let data = this.rows().filter(a =>
      !q ||
      a.namaKaryawan.toLowerCase().includes(q) ||
      (a.namaDivisi ?? '').toLowerCase().includes(q) ||
      (a.namaJabatan ?? '').toLowerCase().includes(q) ||
      (a.alasanReview ?? '').toLowerCase().includes(q)
    );

    const col = this.sortCol();
    const dir = this.sortDir();
    if (col && dir) {
      data = [...data].sort((a, b) => {
        let va: any = (a as any)[col] ?? '';
        let vb: any = (b as any)[col] ?? '';
        if (typeof va === 'string') va = va.toLowerCase();
        if (typeof vb === 'string') vb = vb.toLowerCase();
        return dir === 'asc' ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
      });
    }
    return data;
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.dtPageSize())));

  pagedRows = computed(() => {
    const p = this.dtPage();
    const s = this.dtPageSize();
    return this.filtered().slice((p - 1) * s, p * s);
  });

  pagesArr = computed(() => {
    const total = this.totalPages();
    const cur   = this.dtPage();
    const pages: number[] = [];
    for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++) pages.push(i);
    return pages;
  });

  sortBy(col: string): void {
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

  onDtSearch(): void { this.dtPage.set(1); }
  onPageSize(): void { this.dtPage.set(1); }

  // ── Computed ──────────────────────────────────────────
  // jumlahPerlu = signal(0);

  ngOnInit(): void {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);
    this.error.set('');
    const divId = this.divisiId ? +this.divisiId : undefined;
    const cari  = this.cari || undefined;

    const obs = this.activeTab() === 'perlu'
      ? this.absensiSvc.getReviewPerluDicek(divId, cari)
      : this.absensiSvc.getReviewSudahDicek(divId, cari);

    obs.subscribe({
      next: data => {
        this.rows.set(data);
        this.loading.set(false);
        if (this.activeTab() === 'perlu') this.jumlahPerlu.set(data.length);
      },
      error: e => {
        this.error.set(e?.error?.message ?? 'Gagal memuat data');
        this.loading.set(false);
      }
    });

    // Selalu update jumlah perlu dicek untuk badge
    if (this.activeTab() === 'sudah') {
      this.absensiSvc.getReviewPerluDicek(divId, undefined).subscribe({
        next: d => this.jumlahPerlu.set(d.length)
      });
    }
  }

  setTab(tab: TabKey): void {
    this.activeTab.set(tab);
    this.loadData();
  }

  tandaiDicek(absensi: Absensi): void {
    if (!absensi.id) return;
    this.savingId.set(absensi.id);
    this.absensiSvc.tandaiSudahDicek(absensi.id).subscribe({
      next: () => {
        this.savingId.set(null);
        this.loadData();
      },
      error: () => this.savingId.set(null)
    });
  }

  tandaiSemua(): void {
    if (!confirm('Tandai semua presensi sebagai sudah dicek?')) return;
    const divId = this.divisiId ? +this.divisiId : undefined;
    this.loading.set(true);
    this.absensiSvc.tandaiSemuaSudahDicek(divId).subscribe({
      next: r => {
        this.loading.set(false);
        this.loadData();
      },
      error: () => this.loading.set(false)
    });
  }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.apiUrl.replace('/api', '')}/${path}`;
  }

  formatWaktu(jam?: string): string {
    if (!jam) return '-';
    return jam.length > 5 ? jam.substring(0, 8) : jam;
  }

  formatTanggal(tgl?: string | any): string {
    if (!tgl) return '-';
    try {
      const d = tgl instanceof Object ? new Date(tgl.year, tgl.monthValue - 1, tgl.dayOfMonth) : new Date(tgl);
      return d.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    } catch { return String(tgl); }
  }

  tipePresensi(a: Absensi): string {
    if (a.jamMulaiIstirahat && !a.jamSelesaiIstirahat) return 'Istirahat';
    if (a.jamMulaiIstirahat && a.jamSelesaiIstirahat)  return 'Selesai Istirahat';
    if (a.jamMulaiLembur && !a.jamSelesaiLembur)        return 'Lembur';
    if (a.jamMulaiLembur && a.jamSelesaiLembur)         return 'Selesai Lembur';
    if (a.jamMasuk && !a.jamKeluar)                     return 'Masuk';
    if (a.jamKeluar)                                    return 'Keluar';
    return 'Masuk';
  }

  badgeColor(tipe: string): string {
    const map: Record<string, string> = {
      'Masuk': '#6c5ce7', 'Keluar': '#00b894',
      'Istirahat': '#fdcb6e', 'Selesai Istirahat': '#e17055',
      'Lembur': '#0984e3', 'Selesai Lembur': '#00cec9'
    };
    return map[tipe] ?? '#6c5ce7';
  }

  jamPresensi(a: Absensi): string {
    const tipe = this.tipePresensi(a);
    if (tipe === 'Istirahat')        return this.formatWaktu(a.jamMulaiIstirahat as any);
    if (tipe === 'Selesai Istirahat') return this.formatWaktu(a.jamSelesaiIstirahat as any);
    if (tipe === 'Lembur')            return this.formatWaktu(a.jamMulaiLembur as any);
    if (tipe === 'Selesai Lembur')    return this.formatWaktu(a.jamSelesaiLembur as any);
    if (tipe === 'Keluar')            return this.formatWaktu(a.jamKeluar as any);
    return this.formatWaktu(a.jamMasuk as any);
  }
}
