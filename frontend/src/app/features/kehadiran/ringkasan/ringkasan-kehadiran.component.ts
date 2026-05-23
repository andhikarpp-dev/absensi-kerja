import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AbsensiService } from '../../../core/services/absensi.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { Divisi } from '../../../core/models/divisi.model';
import { RingkasanKehadiran, RingkasanKehadiranRow } from '../../../core/models/absensi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { EksporRingkasanModalComponent } from './ekspor-ringkasan-modal.component';
import { environment } from '../../../../environments/environment';

type SortDir = 'asc' | 'desc';
interface SortState { col: string; dir: SortDir; }

@Component({
  selector: 'app-ringkasan-kehadiran',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, EksporRingkasanModalComponent],
  templateUrl: './ringkasan-kehadiran.component.html'
})
export class RingkasanKehadiranComponent implements OnInit {
  private absensiSvc = inject(AbsensiService);
  private divisiSvc  = inject(DivisiService);

  // ── Filter ────────────────────────────────────────────
  today      = new Date().toISOString().substring(0, 10);
  firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                   .toISOString().substring(0, 10);

  dari    = this.firstOfMonth;
  sampai  = this.today;
  divisiId = '';
  cari     = '';

  divisiList = signal<Divisi[]>([]);

  // ── Data ─────────────────────────────────────────────
  rows    = signal<RingkasanKehadiranRow[]>([]);
  loading = signal(false);
  error   = signal('');

  // ── Ekspor ────────────────────────────────────────────
  showEkspor = signal(false);

  // ── DataTable state ───────────────────────────────────
  pageSize = 16;
  page     = signal(1);
  sort     = signal<SortState>({ col: 'namaKaryawan', dir: 'asc' });
  readonly pageSizeOptions = [10, 16, 25, 50, 100];

  readonly filtered = computed(() => {
    const q = this.cari.toLowerCase();
    let data = this.rows();
    if (q) data = data.filter(r =>
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi?.toLowerCase().includes(q))
    );
    const { col, dir } = this.sort();
    data = [...data].sort((a, b) => {
      const va = this.sortVal(a, col);
      const vb = this.sortVal(b, col);
      const cmp = typeof va === 'number'
        ? (va as number) - (vb as number)
        : String(va).localeCompare(String(vb));
      return dir === 'asc' ? cmp : -cmp;
    });
    return data;
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filtered().length / this.pageSize))
  );

  readonly paged = computed(() => {
    const p     = Math.min(this.page(), this.totalPages());
    const start = (p - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  readonly pagesArr = computed(() => this.buildPages(this.page(), this.totalPages()));

  readonly info = computed(() => {
    const total = this.filtered().length;
    if (total === 0) return 'Tidak ada data';
    const p     = Math.min(this.page(), this.totalPages());
    const start = (p - 1) * this.pageSize + 1;
    const end   = Math.min(p * this.pageSize, total);
    const all   = this.rows().length;
    return total < all
      ? `Menampilkan ${start}–${end} dari ${total} entri (difilter dari ${all} total entri)`
      : `Menampilkan ${start}–${end} dari ${total} total data`;
  });

  ngOnInit(): void {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);
    this.error.set('');
    this.absensiSvc.getRingkasanSemua({
      dari:     this.dari,
      sampai:   this.sampai,
      divisiId: this.divisiId ? +this.divisiId : undefined,
    }).subscribe({
      next:  rows => { this.rows.set(rows); this.page.set(1); this.loading.set(false); },
      error: e    => { this.error.set(e?.error?.message ?? 'Gagal memuat data'); this.loading.set(false); }
    });
  }

  onCariChange(): void { this.page.set(1); }
  onPageSize():   void { this.page.set(1); }

  sortBy(col: string): void {
    const cur = this.sort();
    this.sort.set({ col, dir: cur.col === col && cur.dir === 'asc' ? 'desc' : 'asc' });
    this.page.set(1);
  }

  sortIcon(col: string): string {
    const s = this.sort();
    if (s.col !== col) return 'bx-sort';
    return s.dir === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  private sortVal(r: RingkasanKehadiranRow, col: string): number | string {
    const s = r.ringkasan;
    switch (col) {
      case 'namaKaryawan':                   return r.namaKaryawan;
      case 'namaDivisi':                     return r.namaDivisi ?? '';
      case 'namaPolaKerja':                  return r.namaPolaKerja ?? '';
      case 'totalHariJadwalKerja':           return s.totalHariJadwalKerja;
      case 'totalHariKehadiran':             return s.totalHariKehadiran;
      case 'totalHariTidakMasuk':            return s.totalHariTidakMasuk;
      case 'totalHariCuti':                  return s.totalHariCuti;
      case 'totalHariIzin':                  return s.totalHariIzin;
      case 'persentaseKehadiran':            return s.persentaseKehadiran;
      case 'totalMenitJadwalKerja':          return s.totalMenitJadwalKerja;
      case 'totalMenitKerja':                return s.totalMenitKerja;
      case 'persentaseCapaianJamKerja':      return s.persentaseCapaianJamKerja;
      case 'totalMenitIstirahat':            return s.totalMenitIstirahat;
      case 'totalMenitLembur':               return s.totalMenitLembur;
      case 'totalHariTerlambat':             return s.totalHariTerlambat;
      case 'totalMenitTerlambat':            return s.totalMenitTerlambat;
      default:                               return '';
    }
  }

  private buildPages(current: number, total: number): (number | '...')[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
    if (current < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.apiUrl.replace('/api', '')}/${path}`;
  }

  menitKeJam(menit: number): string {
    if (!menit || menit === 0) return '0';
    const j = Math.floor(menit / 60);
    const m = menit % 60;
    const s = Math.floor((menit * 60) % 60);
    if (j > 0 && m > 0 && s > 0) return `${j}jm ${m}mn ${s}dt`;
    if (j > 0 && m > 0)           return `${j}jm ${m}mn`;
    if (j > 0)                     return `${j}jm`;
    if (m > 0 && s > 0)            return `${m}mn ${s}dt`;
    return `${m}mn`;
  }

  formatRp(val: number): string {
    if (!val) return 'Rp 0';
    return 'Rp ' + val.toLocaleString('id-ID');
  }
}
