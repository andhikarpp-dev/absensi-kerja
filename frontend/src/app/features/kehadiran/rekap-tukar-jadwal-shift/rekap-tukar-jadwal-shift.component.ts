import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TukarJadwalShiftService } from '../../../core/services/tukar-jadwal-shift.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { TukarJadwalShift, StatusTukarJadwal } from '../../../core/models/tukar-jadwal-shift.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

type SortDir = 'asc' | 'desc' | '';

@Component({
  selector: 'app-rekap-tukar-jadwal-shift',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './rekap-tukar-jadwal-shift.component.html'
})
export class RekapTukarJadwalShiftComponent implements OnInit {
  private svc       = inject(TukarJadwalShiftService);
  private divisiSvc = inject(DivisiService);

  readonly Math = Math;

  // ── Filter ────────────────────────────────────────────
  private today = new Date();
  private firstOfMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1);

  filterDari   = signal(this.toDateStr(this.firstOfMonth));
  filterSampai = signal(this.toDateStr(this.today));
  filterDivisi = signal('');
  filterStatus = signal('');
  filterCari   = signal('');

  divisiList = signal<Divisi[]>([]);
  rows       = signal<TukarJadwalShift[]>([]);
  loading    = signal(false);
  error      = signal('');

  // ── DataTable ─────────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];

  readonly statusOptions: { value: string; label: string }[] = [
    { value: 'MENUNGGU',  label: 'Menunggu persetujuan' },
    { value: 'DISETUJUI', label: 'Disetujui' },
    { value: 'DITOLAK',   label: 'Ditolak' },
  ];

  // ── Modal Ekspor ──────────────────────────────────────
  showEksporModal  = signal(false);
  eksporDari       = signal(this.toDateStr(this.firstOfMonth));
  eksporSampai     = signal(this.toDateStr(this.today));
  eksporDivisi     = signal('');
  eksporStatus     = signal('');
  eksporCari       = signal('');
  eksporRangeError = signal('');

  openEksporModal() {
    // Salin nilai filter aktif ke modal
    this.eksporDari.set(this.filterDari());
    this.eksporSampai.set(this.filterSampai());
    this.eksporDivisi.set(this.filterDivisi());
    this.eksporStatus.set(this.filterStatus());
    this.eksporCari.set(this.filterCari());
    this.eksporRangeError.set('');
    this.showEksporModal.set(true);
  }

  closeEksporModal() { this.showEksporModal.set(false); }

  readonly filtered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    let data = this.rows();
    if (q) data = data.filter(r =>
      r.namaKaryawanPemohon.toLowerCase().includes(q) ||
      r.namaKaryawanTarget.toLowerCase().includes(q) ||
      (r.jadwalPemohon ?? '').toLowerCase().includes(q) ||
      (r.jadwalTarget ?? '').toLowerCase().includes(q)
    );
    const col = this.sortCol();
    const dir = this.sortDir();
    if (col && dir) {
      data = [...data].sort((a, b) => {
        const av = (a as any)[col] ?? '';
        const bv = (b as any)[col] ?? '';
        return dir === 'asc'
          ? String(av).localeCompare(String(bv))
          : String(bv).localeCompare(String(av));
      });
    }
    return data;
  });

  readonly paged = computed(() => {
    const size = this.dtPageSize();
    const page = this.dtPage();
    return this.filtered().slice((page - 1) * size, page * size);
  });

  readonly totalPages = computed(() => Math.ceil(this.filtered().length / this.dtPageSize()) || 1);
  readonly pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  ngOnInit() {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.svc.getAll({
      dari:     this.filterDari(),
      sampai:   this.filterSampai(),
      divisiId: this.filterDivisi(),
      status:   this.filterStatus(),
      search:   this.filterCari(),
    }).subscribe({
      next: rows => { this.rows.set(rows); this.dtPage.set(1); this.loading.set(false); },
      error: err => { this.error.set(err?.error?.message ?? 'Gagal memuat data'); this.loading.set(false); }
    });
  }

  sort(col: string) {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : this.sortDir() === 'desc' ? '' : 'asc');
      if (this.sortDir() === '') this.sortCol.set('');
    } else {
      this.sortCol.set(col);
      this.sortDir.set('asc');
    }
  }

  sortIcon(col: string): string {
    if (this.sortCol() !== col) return 'bx-sort';
    return this.sortDir() === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  badgeClass(status: StatusTukarJadwal): string {
    switch (status) {
      case 'DISETUJUI': return 'badge bg-success-subtle text-success';
      case 'DITOLAK':   return 'badge bg-danger-subtle text-danger';
      default:          return 'badge bg-warning-subtle text-warning';
    }
  }

  badgeLabel(status: StatusTukarJadwal): string {
    switch (status) {
      case 'DISETUJUI': return 'Disetujui';
      case 'DITOLAK':   return 'Ditolak';
      default:          return 'Menunggu';
    }
  }

  eksporExcel() {
    this.eksporRangeError.set('');
    const dari   = this.eksporDari();
    const sampai = this.eksporSampai();

    if (!dari || !sampai) {
      this.eksporRangeError.set('Tanggal wajib diisi.');
      return;
    }
    const diffMs   = new Date(sampai).getTime() - new Date(dari).getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    if (diffDays < 0) {
      this.eksporRangeError.set('Tanggal akhir tidak boleh sebelum tanggal awal.');
      return;
    }
    if (diffDays > 60) {
      this.eksporRangeError.set('Rentang waktu maksimal 60 hari.');
      return;
    }

    const url = this.svc.eksporExcel({
      dari,
      sampai,
      divisiId: this.eksporDivisi(),
      status:   this.eksporStatus(),
      search:   this.eksporCari(),
    });
    window.open(url, '_blank');
    this.closeEksporModal();
  }

  private toDateStr(d: Date): string {
    return d.toISOString().substring(0, 10);
  }

  formatTanggal(iso: string): string {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
}
