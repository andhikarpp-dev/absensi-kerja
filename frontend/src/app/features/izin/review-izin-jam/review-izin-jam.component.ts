import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IzinJamService } from '../../../core/services/izin-jam.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { IzinJam, StatusIzin } from '../../../core/models/izin-jam.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

declare const Swal: any;

type TabStatus = 'DISETUJUI' | 'DITOLAK' | 'TERPENUHI' | 'TIDAK_TERPENUHI';

@Component({
  selector: 'app-review-izin-jam',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './review-izin-jam.component.html',
  styleUrl: './review-izin-jam.component.scss'
})
export class ReviewIzinJamComponent implements OnInit {
  private svc       = inject(IzinJamService);
  private divisiSvc = inject(DivisiService);

  // ── State ─────────────────────────────────────────────────
  activeTab = signal<TabStatus>('DISETUJUI');
  loading   = signal(false);
  error     = signal('');
  toastMsg  = signal('');
  toastType = signal<'success'|'danger'>('success');

  allData     = signal<IzinJam[]>([]);
  divisiList  = signal<Divisi[]>([]);

  // Filters
  filterFrom    = signal('');
  filterTo      = signal('');
  filterDapatMengganti = signal<string>('');   // '', 'true', 'false'
  filterKenaPotong     = signal<string>('');
  filterKenaDenda      = signal<string>('');
  filterCari           = signal('');

  // Pagination
  page     = signal(1);
  pageSize = 10;

  // Modal Tolak
  showTolakModal = signal(false);
  tolakId        = signal<number|null>(null);
  tolakCatatan   = signal('');
  tolakSaving    = signal(false);

  // ── Computed ──────────────────────────────────────────────
  filteredData = computed(() => this.allData().filter(d => d.status === this.activeTab()));
  totalPages   = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)));
  pageNumbers  = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
  pagedData    = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredData().slice(start, start + this.pageSize);
  });

  countByStatus(s: TabStatus) { return this.allData().filter(d => d.status === s).length; }

  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit() {
    this.divisiSvc.findAll().subscribe(list => this.divisiList.set(list));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    const toBool = (v: string): boolean | undefined =>
      v === 'true' ? true : v === 'false' ? false : undefined;
    this.svc.getAllAdmin({
      from: this.filterFrom() || undefined,
      to:   this.filterTo()   || undefined,
      cari: this.filterCari() || undefined,
      dapatMengganti: toBool(this.filterDapatMengganti()),
      kenaPotong:     toBool(this.filterKenaPotong()),
      kenaDenda:      toBool(this.filterKenaDenda())
    }).subscribe({
      next: res => { this.allData.set(res.izinJam); this.loading.set(false); this.page.set(1); },
      error: () => { this.error.set('Gagal memuat data izin jam.'); this.loading.set(false); }
    });
  }

  setTab(t: TabStatus) { this.activeTab.set(t); this.page.set(1); }

  onCari() { this.load(); }

  // ── Actions ───────────────────────────────────────────────
  approve(item: IzinJam) {
    Swal.fire({
      title: 'Setujui Izin?',
      text: `Izin ${item.namaKaryawan} akan disetujui.`,
      icon: 'question', showCancelButton: true,
      confirmButtonText: 'Ya, Setujui', cancelButtonText: 'Batal'
    }).then((result: any) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.updateStatusAdmin(item.id, 'DISETUJUI').subscribe({
          next: () => { this.showToast('Izin berhasil disetujui.'); this.load(); },
          error: (err) => this.showToast(err?.message ?? 'Gagal menyetujui izin.', 'danger')
        });
      }
    });
  }

  setTerpenuhi(item: IzinJam, terpenuhi: boolean) {
    const status: StatusIzin = terpenuhi ? 'TERPENUHI' : 'TIDAK_TERPENUHI';
    Swal.fire({
      title: terpenuhi ? 'Tandai Terpenuhi?' : 'Tandai Tidak Terpenuhi?',
      text: `Status izin ${item.namaKaryawan} akan diubah.`,
      icon: 'question', showCancelButton: true,
      confirmButtonText: 'Ya', cancelButtonText: 'Batal'
    }).then((result: any) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.updateStatusAdmin(item.id, status).subscribe({
          next: () => { this.showToast('Status berhasil diubah.'); this.load(); },
          error: (err) => this.showToast(err?.message ?? 'Gagal mengubah status.', 'danger')
        });
      }
    });
  }

  openTolak(item: IzinJam) {
    this.tolakId.set(item.id);
    this.tolakCatatan.set('');
    this.showTolakModal.set(true);
  }

  submitTolak() {
    const id = this.tolakId();
    if (!id) return;
    this.tolakSaving.set(true);
    this.svc.updateStatusAdmin(id, 'DITOLAK', this.tolakCatatan()).subscribe({
      next: () => {
        this.tolakSaving.set(false);
        this.showTolakModal.set(false);
        this.tolakId.set(null);
        this.showToast('Izin berhasil ditolak.');
        this.load();
      },
      error: (err) => {
        this.tolakSaving.set(false);
        this.showToast(err?.message ?? 'Gagal menolak izin.', 'danger');
      }
    });
  }

  delete(item: IzinJam) {
    Swal.fire({
      title: 'Hapus Izin?',
      text: `Data izin ${item.namaKaryawan} akan dihapus permanen.`,
      icon: 'warning', showCancelButton: true,
      confirmButtonText: 'Ya, Hapus', cancelButtonText: 'Batal',
      confirmButtonColor: '#dc3545'
    }).then((result: any) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.deleteAdmin(item.id).subscribe({
          next: () => {
            this.allData.update(list => list.filter(x => x.id !== item.id));
            this.showToast('Izin berhasil dihapus.');
          },
          error: (err) => this.showToast(err?.message ?? 'Gagal menghapus izin.', 'danger')
        });
      }
    });
  }

  eksporExcel() {
    const toBool = (v: string): boolean | undefined =>
      v === 'true' ? true : v === 'false' ? false : undefined;
    this.svc.exportExcelAdmin({
      status: this.activeTab(),
      from: this.filterFrom() || undefined,
      to:   this.filterTo()   || undefined,
      cari: this.filterCari() || undefined,
      dapatMengganti: toBool(this.filterDapatMengganti()),
      kenaPotong:     toBool(this.filterKenaPotong()),
      kenaDenda:      toBool(this.filterKenaDenda())
    }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'izin-jam.xlsx'; a.click();
      URL.revokeObjectURL(url);
    });
  }

  // ── Helpers ───────────────────────────────────────────────
  formatDateOnly(t?: string) {
    if (!t) return '';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatJam(t?: string) {
    if (!t) return '';
    return t.substring(0, 5);   // HH:mm
  }

  formatDateTime(t?: string) {
    if (!t) return '';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      + ' @ ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  durasiLabel(menit?: number) {
    if (!menit || menit <= 0) return '';
    const j = Math.floor(menit / 60);
    const m = menit % 60;
    if (j > 0 && m > 0) return `${j}jm ${m}mn`;
    if (j > 0) return `${j}jm`;
    return `${m}mn`;
  }

  showToast(msg: string, type: 'success'|'danger' = 'success') {
    this.toastMsg.set(msg);
    this.toastType.set(type);
    setTimeout(() => this.toastMsg.set(''), 3000);
  }

  goPage(p: number) { if (p >= 1 && p <= this.totalPages()) this.page.set(p); }
}
