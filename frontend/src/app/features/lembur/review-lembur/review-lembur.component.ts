import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DivisiService } from '../../../core/services/divisi.service';
import { Divisi } from '../../../core/models/divisi.model';
import { ReviewLembur } from '../../../core/models/review-lembur.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

type SortDir = 'asc' | 'desc' | '';

export interface RiwayatHapusLembur {
  id: number;
  karyawanId: number;
  namaKaryawan: string;
  namaDivisi?: string;
  fotoProfil?: string;
  tanggalAbsensi: string;
  namaHari: string;
  jamMulaiLembur?: string;
  jamSelesaiLembur?: string;
  totalLembur?: string;
  dihapusOleh?: string;
  catatan?: string;
  dihapusAt: string;
}

@Component({
  selector: 'app-review-lembur',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './review-lembur.component.html'
})
export class ReviewLemburComponent implements OnInit {
  private http      = inject(HttpClient);
  private divisiSvc = inject(DivisiService);

  readonly Math = Math;

  // ── Filter ────────────────────────────────────────────
  private today       = new Date();
  private sebulanLalu = new Date(this.today.getFullYear(), this.today.getMonth() - 1, this.today.getDate());
  filterDari   = signal(this.toDateStr(this.sebulanLalu));
  filterSampai = signal(this.toDateStr(this.today));
  filterDivisi = signal('');
  filterCari   = signal('');

  divisiList = signal<Divisi[]>([]);
  rows       = signal<ReviewLembur[]>([]);
  loading    = signal(false);
  error      = signal('');

  // ── Modal Detail ──────────────────────────────────────
  showDetailModal = signal(false);
  detailTarget    = signal<ReviewLembur | null>(null);

  // ── Modal Hapus ───────────────────────────────────────
  showHapusModal = signal(false);
  hapusTarget    = signal<ReviewLembur | null>(null);
  hapusSaving    = signal(false);
  hapusError     = signal('');

  // ── Modal Ekspor Excel ────────────────────────────────
  showEksporModal = signal(false);
  eksporDari      = signal(this.toDateStr(this.sebulanLalu));
  eksporSampai    = signal(this.toDateStr(this.today));
  eksporDivisi    = signal('');
  eksporCari      = signal('');
  eksporEmail     = signal('');
  eksporError     = signal('');
  eksporProses    = signal(false);
  eksporSukses    = signal(false);

  // ── Modal Riwayat Penolakan ───────────────────────────
  showRiwayatModal = signal(false);
  riwayatRows      = signal<RiwayatHapusLembur[]>([]);
  riwayatLoading   = signal(false);
  riwayatError     = signal('');
  riwayatSearch    = signal('');
  riwayatPage      = signal(1);
  riwayatPageSize  = signal(10);

  readonly riwayatFiltered = computed(() => {
    const q = this.riwayatSearch().toLowerCase();
    const rows = this.riwayatRows();
    if (!q) return rows;
    return rows.filter(r =>
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q) ||
      (r.totalLembur ?? '').toLowerCase().includes(q) ||
      (r.dihapusOleh ?? '').toLowerCase().includes(q)
    );
  });
  readonly riwayatTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.riwayatFiltered().length / this.riwayatPageSize()))
  );
  readonly riwayatPaged = computed(() => {
    const s = this.riwayatPageSize(), p = this.riwayatPage();
    return this.riwayatFiltered().slice((p - 1) * s, p * s);
  });
  readonly riwayatPageNumbers = computed(() =>
    Array.from({ length: this.riwayatTotalPages() }, (_, i) => i + 1)
  );

  // ── DataTable ─────────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];

  readonly dtFiltered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    let data = this.rows();
    if (q) data = data.filter(r =>
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q) ||
      (r.totalLembur ?? '').toLowerCase().includes(q)
    );
    const col = this.sortCol(); const dir = this.sortDir();
    if (col && dir) {
      data = [...data].sort((a, b) => {
        const av = String((a as any)[col] ?? '');
        const bv = String((b as any)[col] ?? '');
        return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return data;
  });
  readonly dtTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.dtFiltered().length / this.dtPageSize()))
  );
  readonly dtPaged = computed(() => {
    const s = this.dtPageSize(), p = this.dtPage();
    return this.dtFiltered().slice((p - 1) * s, p * s);
  });
  readonly pageNumbers = computed(() =>
    Array.from({ length: this.dtTotalPages() }, (_, i) => i + 1)
  );

  ngOnInit() {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.load();
  }

  load() {
    this.loading.set(true); this.error.set('');
    let params = new HttpParams();
    if (this.filterDari())   params = params.set('dari',     this.filterDari());
    if (this.filterSampai()) params = params.set('sampai',   this.filterSampai());
    if (this.filterDivisi()) params = params.set('divisiId', this.filterDivisi());
    if (this.filterCari())   params = params.set('cari',     this.filterCari());

    this.http.get<any>(`${environment.apiUrl}/absensi/admin/lembur`, { params }).pipe(
      map(r => (r?.data ?? []) as ReviewLembur[]),
      catchError(err => { this.error.set(err?.error?.message ?? 'Gagal memuat data'); return of([]); })
    ).subscribe(d => { this.rows.set(d); this.dtPage.set(1); this.loading.set(false); });
  }

  openRiwayat() {
    this.showRiwayatModal.set(true);
    this.riwayatSearch.set('');
    this.riwayatPage.set(1);
    this.riwayatLoading.set(true);
    this.riwayatError.set('');

    let params = new HttpParams();
    if (this.filterDivisi()) params = params.set('divisiId', this.filterDivisi());

    this.http.get<any>(`${environment.apiUrl}/absensi/admin/lembur/riwayat`, { params }).pipe(
      map(r => (r?.data ?? []) as RiwayatHapusLembur[]),
      catchError(err => { this.riwayatError.set(err?.error?.message ?? 'Gagal memuat riwayat'); return of([]); })
    ).subscribe(d => { this.riwayatRows.set(d); this.riwayatLoading.set(false); });
  }
  closeRiwayat() { this.showRiwayatModal.set(false); }

  sort(col: string) {
    if (this.sortCol() === col) {
      const next: SortDir = this.sortDir() === 'asc' ? 'desc' : this.sortDir() === 'desc' ? '' : 'asc';
      this.sortDir.set(next);
      if (!next) this.sortCol.set('');
    } else { this.sortCol.set(col); this.sortDir.set('asc'); }
  }
  sortIcon(col: string): string {
    if (this.sortCol() !== col) return 'bx-sort';
    return this.sortDir() === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  openDetail(r: ReviewLembur) { this.detailTarget.set(r); this.showDetailModal.set(true); }
  closeDetail() { this.showDetailModal.set(false); }

  openHapus(r: ReviewLembur) { this.hapusTarget.set(r); this.hapusError.set(''); this.showHapusModal.set(true); }
  closeHapus() { this.showHapusModal.set(false); }

  konfirmasiHapus() {
    const t = this.hapusTarget();
    if (!t) return;
    this.hapusSaving.set(true);
    this.http.delete<any>(`${environment.apiUrl}/absensi/admin/lembur/${t.id}`).subscribe({
      next: () => {
        this.rows.update(rows => rows.filter(r => r.id !== t.id));
        this.hapusSaving.set(false);
        this.showHapusModal.set(false);
      },
      error: err => { this.hapusError.set(err?.error?.message ?? 'Gagal menghapus'); this.hapusSaving.set(false); }
    });
  }

  openEkspor() {
    this.eksporDari.set(this.filterDari());
    this.eksporSampai.set(this.filterSampai());
    this.eksporDivisi.set(this.filterDivisi());
    this.eksporCari.set(this.filterCari());
    this.eksporEmail.set('');
    this.eksporError.set('');
    this.eksporSukses.set(false);
    this.showEksporModal.set(true);
  }
  closeEkspor() { this.showEksporModal.set(false); this.eksporSukses.set(false); }

  prosesEkspor() {
    this.eksporError.set('');
    this.eksporSukses.set(false);
    if (!this.eksporDari() || !this.eksporSampai()) {
      this.eksporError.set('Tanggal wajib diisi.'); return;
    }
    if (!this.eksporEmail().trim()) {
      this.eksporError.set('Email wajib diisi.'); return;
    }
    this.eksporProses.set(true);

    let params = new HttpParams()
      .set('dari',   this.eksporDari())
      .set('sampai', this.eksporSampai())
      .set('email',  this.eksporEmail().trim());
    if (this.eksporDivisi()) params = params.set('divisiId', this.eksporDivisi());
    if (this.eksporCari())   params = params.set('cari',    this.eksporCari());

    this.http.post<any>(`${environment.apiUrl}/absensi/admin/lembur/ekspor-email`, null, { params }).pipe(
      catchError(err => {
        this.eksporError.set(err?.error?.message ?? 'Gagal memproses ekspor');
        return of(null);
      })
    ).subscribe(res => {
      this.eksporProses.set(false);
      if (res !== null) {
        this.eksporSukses.set(true);
        setTimeout(() => this.closeEkspor(), 3000);
      }
    });
  }

  formatTanggal(iso: string): string {
    if (!iso) return '-';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatDateTime(iso: string): string {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  private toDateStr(d: Date): string { return d.toISOString().substring(0, 10); }
}
