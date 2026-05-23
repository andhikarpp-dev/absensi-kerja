import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PersetujuanFotoProfilService } from '../../../core/services/persetujuan-foto-profil.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PersetujuanFotoProfil } from '../../../core/models/persetujuan-foto-profil.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

type TabKey = 'MENUNGGU' | 'DIPROSES';
type SortDir = 'asc' | 'desc' | '';

@Component({
  selector: 'app-persetujuan-foto-profil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './persetujuan-foto-profil.component.html'
})
export class PersetujuanFotoProfilComponent implements OnInit {
  private svc         = inject(PersetujuanFotoProfilService);
  private karyawanSvc = inject(KaryawanService);

  // ── State ──────────────────────────────────────────────────
  rows         = signal<PersetujuanFotoProfil[]>([]);
  karyawanList = signal<Karyawan[]>([]);
  loading      = signal(false);
  error        = signal('');
  savingId     = signal<number | null>(null);
  activeTab    = signal<TabKey>('MENUNGGU');

  // ── Filter ─────────────────────────────────────────────────
  filterCari = signal('');

  // ── DataTable ──────────────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];
  readonly Math = Math;

  // ── Modal Tolak ────────────────────────────────────────────
  showTolakModal   = signal(false);
  tolakId          = signal<number | null>(null);
  tolakCatatan     = signal('');
  tolakSaving      = signal(false);
  tolakError       = signal('');

  // ── Modal Foto Preview ─────────────────────────────────────
  previewUrl = signal<string | null>(null);

  // ── Modal Ajukan ───────────────────────────────────────────
  showAjukanModal  = signal(false);
  ajukanKaryawanId = signal('');
  ajukanFoto       = signal<File | null>(null);
  ajukanPreview    = signal<string | null>(null);
  ajukanSaving     = signal(false);
  ajukanError      = signal('');

  // ── Computed ───────────────────────────────────────────────
  filtered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    return this.rows().filter(r =>
      !q ||
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q)
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

  pagesArr = computed(() => {
    const cur = this.dtPage(), total = this.totalPages();
    const pages: number[] = [];
    for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++) pages.push(i);
    return pages;
  });

  info = computed(() => {
    const total = this.sorted().length;
    if (total === 0) return 'Menampilkan 0 dari 0 total data';
    const page  = Math.min(this.dtPage(), this.totalPages());
    const start = (page - 1) * this.dtPageSize() + 1;
    const end   = Math.min(page * this.dtPageSize(), total);
    return `Menampilkan ${start}–${end} dari ${total} total data`;
  });

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit(): void {
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
    const status = this.activeTab() === 'MENUNGGU' ? 'MENUNGGU' : 'SEMUA';
    this.svc.findAll(status, this.filterCari() || undefined).subscribe({
      next: data => {
        // Untuk tab DIPROSES: tampilkan DISETUJUI dan DITOLAK saja
        const filtered = this.activeTab() === 'DIPROSES'
          ? data.filter(r => r.status === 'DISETUJUI' || r.status === 'DITOLAK')
          : data;
        this.rows.set(filtered);
        this.loading.set(false);
      },
      error: e => { this.error.set(e?.error?.message ?? 'Gagal memuat data'); this.loading.set(false); }
    });
  }

  cari(): void { this.dtPage.set(1); this.loadData(); }

  // ── Sort ───────────────────────────────────────────────────
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

  goPage(p: number): void {
    if (p < 1 || p > this.totalPages()) return;
    this.dtPage.set(p);
  }

  // ── Aksi ───────────────────────────────────────────────────
  setujui(r: PersetujuanFotoProfil): void {
    if (!confirm(`Setujui foto profil baru untuk ${r.namaKaryawan}?\nFoto profil akan langsung diperbarui.`)) return;
    this.savingId.set(r.id);
    this.svc.setujui(r.id).subscribe({
      next: () => { this.savingId.set(null); this.loadData(); },
      error: e  => { this.savingId.set(null); alert(e?.error?.message ?? 'Gagal'); }
    });
  }

  openTolak(r: PersetujuanFotoProfil): void {
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

  hapus(r: PersetujuanFotoProfil): void {
    if (!confirm(`Hapus pengajuan foto profil ${r.namaKaryawan}?`)) return;
    this.svc.hapus(r.id).subscribe({
      next: () => this.loadData(),
      error: e  => alert(e?.error?.message ?? 'Gagal menghapus')
    });
  }

  // ── Preview foto ───────────────────────────────────────────
  openPreview(url: string): void { this.previewUrl.set(url); }
  closePreview(): void           { this.previewUrl.set(null); }

  // ── Modal Ajukan ───────────────────────────────────────────
  openAjukan(): void {
    this.ajukanKaryawanId.set('');
    this.ajukanFoto.set(null);
    this.ajukanPreview.set(null);
    this.ajukanError.set('');
    this.showAjukanModal.set(true);
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.ajukanFoto.set(file);
    const reader = new FileReader();
    reader.onload = e => this.ajukanPreview.set(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  submitAjukan(): void {
    if (!this.ajukanKaryawanId()) { this.ajukanError.set('Pilih karyawan'); return; }
    if (!this.ajukanFoto())       { this.ajukanError.set('Pilih foto'); return; }
    this.ajukanSaving.set(true);
    this.svc.ajukan(+this.ajukanKaryawanId(), this.ajukanFoto()!).subscribe({
      next: () => { this.ajukanSaving.set(false); this.showAjukanModal.set(false); this.loadData(); },
      error: e  => { this.ajukanSaving.set(false); this.ajukanError.set(e?.error?.message ?? 'Gagal mengajukan'); }
    });
  }

  // ── Helpers ────────────────────────────────────────────────
  statusBadge(s: string): { label: string; cls: string } {
    if (s === 'DISETUJUI') return { label: 'Disetujui', cls: 'bg-success' };
    if (s === 'DITOLAK')   return { label: 'Ditolak',   cls: 'bg-danger' };
    return                        { label: 'Menunggu',  cls: 'bg-warning text-dark' };
  }

  formatTanggal(iso?: string): string {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
}
