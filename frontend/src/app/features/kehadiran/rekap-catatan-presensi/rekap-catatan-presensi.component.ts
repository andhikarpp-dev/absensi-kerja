import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DivisiService } from '../../../core/services/divisi.service';
import { Divisi } from '../../../core/models/divisi.model';
import { RekapCatatanPresensi, KaryawanRow, PresensiHari } from '../../../core/models/rekap-catatan-presensi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const BULAN_NAMES = [
  'Januari','Februari','Maret','April','Mei','Juni',
  'Juli','Agustus','September','Oktober','November','Desember'
];

@Component({
  selector: 'app-rekap-catatan-presensi',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './rekap-catatan-presensi.component.html'
})
export class RekapCatatanPresensiComponent implements OnInit {
  private http      = inject(HttpClient);
  private divisiSvc = inject(DivisiService);

  readonly Math = Math;

  // ── Filter ────────────────────────────────────────────
  private today = new Date();
  tanggalAktif = signal(this.toDateStr(this.today));
  filterDivisi = signal('');
  filterCari   = signal('');

  // ── Bulan/Tahun selector ──────────────────────────────
  selectedBulan = signal(this.today.getMonth());
  selectedTahun = signal(this.today.getFullYear());
  readonly bulanList = BULAN_NAMES;
  readonly tahunList = Array.from({ length: 5 }, (_, i) => this.today.getFullYear() - 2 + i);

  // ── Data ──────────────────────────────────────────────
  data       = signal<RekapCatatanPresensi | null>(null);
  divisiList = signal<Divisi[]>([]);
  loading    = signal(false);
  error      = signal('');

  // ── DataTable ─────────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  readonly pageSizeOptions = [10, 25, 50, 100];

  readonly dtFiltered = computed(() => {
    const q = this.dtSearch().toLowerCase().trim();
    const rows = this.data()?.karyawanList ?? [];
    if (!q) return rows;
    return rows.filter(r =>
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q)
    );
  });

  readonly dtTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.dtFiltered().length / this.dtPageSize()))
  );

  readonly dtPaged = computed(() => {
    const size = this.dtPageSize();
    const page = this.dtPage();
    return this.dtFiltered().slice((page - 1) * size, page * size);
  });

  readonly pageNumbers = computed(() =>
    Array.from({ length: this.dtTotalPages() }, (_, i) => i + 1)
  );

  ngOnInit() {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');

    let params = new HttpParams().set('tanggal', this.tanggalAktif());
    if (this.filterDivisi()) params = params.set('divisiId', this.filterDivisi());
    if (this.filterCari())   params = params.set('cari', this.filterCari());

    this.http.get<any>(`${environment.apiUrl}/absensi/admin/rekap-catatan-presensi`, { params }).pipe(
      map(r => r?.data as RekapCatatanPresensi),
      catchError(err => { this.error.set(err?.error?.message ?? 'Gagal memuat data'); return of(null); })
    ).subscribe(d => {
      this.data.set(d);
      this.dtPage.set(1);
      this.loading.set(false);
      if (d) {
        const senin = new Date(d.tanggalMulai);
        this.selectedBulan.set(senin.getMonth());
        this.selectedTahun.set(senin.getFullYear());
      }
    });
  }

  mingguSebelumnya() {
    const d = new Date(this.tanggalAktif());
    d.setDate(d.getDate() - 7);
    this.tanggalAktif.set(this.toDateStr(d));
    this.load();
  }

  mingguBerikutnya() {
    const d = new Date(this.tanggalAktif());
    d.setDate(d.getDate() + 7);
    this.tanggalAktif.set(this.toDateStr(d));
    this.load();
  }

  onBulanTahunChange() {
    const d = new Date(this.selectedTahun(), this.selectedBulan(), 1);
    this.tanggalAktif.set(this.toDateStr(d));
    this.load();
  }

  cari() { this.load(); }

  // ── Helper ────────────────────────────────────────────
  getPresensi(row: KaryawanRow, tanggal: string): PresensiHari | null {
    return row.presensiPerHari?.[tanggal] ?? null;
  }

  formatTgl(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    const tgl = String(d.getDate()).padStart(2, '0');
    const bln = String(d.getMonth() + 1).padStart(2, '0');
    return `${tgl}/${bln}`;
  }

  private toDateStr(d: Date): string {
    return d.toISOString().substring(0, 10);
  }
}
