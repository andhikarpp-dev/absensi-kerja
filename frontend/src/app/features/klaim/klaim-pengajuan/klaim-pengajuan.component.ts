import { Component, inject, signal, computed, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KlaimService } from '../../../core/services/klaim.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { Klaim, JenisKlaim, StatusKlaim } from '../../../core/models/klaim.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

declare const Swal: any;

type TabStatus = 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';

@Component({
  selector: 'app-klaim-pengajuan',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './klaim-pengajuan.component.html',
  styleUrl: './klaim-pengajuan.component.scss'
})
export class KlaimPengajuanComponent implements OnInit {
  private klaimSvc  = inject(KlaimService);
  private divisiSvc = inject(DivisiService);
  private zone      = inject(NgZone);

  readonly apiBase = environment.apiUrl.replace('/api', '');

  activeTab  = signal<TabStatus>('PENGAJUAN');
  loading    = signal(false);
  error      = signal('');

  allData   = signal<Klaim[]>([]);
  divisiList = signal<Divisi[]>([]);

  // Filters
  filterFrom   = signal('');
  filterTo     = signal('');
  filterDivisi = signal<number | null>(null);
  filterCari   = signal('');
  _cariInput   = signal('');

  // Pagination
  page     = signal(1);
  pageSize = 10;

  // Modal Tolak
  showTolakModal  = signal(false);
  tolakId         = signal<number | null>(null);
  tolakCatatan    = signal('');
  tolakSaving     = signal(false);

  // Custom fixed dropdown
  dropdownOpenId = signal<number | null>(null);
  dropdownX      = signal(0);
  dropdownY      = signal(0);

  // ── Computed ──────────────────────────────────────────────────
  filteredData = computed(() => {
    const statusMap: Record<TabStatus, StatusKlaim> = {
      PENGAJUAN: 'MENUNGGU', DISETUJUI: 'DISETUJUI', DITOLAK: 'DITOLAK'
    };
    let data = this.allData().filter(d => d.status === statusMap[this.activeTab()]);
    const from = this.filterFrom();
    const to   = this.filterTo();
    const div  = this.filterDivisi();
    const cari = this.filterCari().toLowerCase();
    if (from) data = data.filter(d => d.createdAt && d.createdAt >= from);
    if (to)   data = data.filter(d => d.createdAt && d.createdAt.substring(0, 10) <= to);
    if (div)  data = data.filter(d => (d as any).divisiId === div || d.namaDivisi !== undefined);
    if (cari) data = data.filter(d => (d.namaKaryawan ?? '').toLowerCase().includes(cari));
    return data;
  });

  pagedData   = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredData().slice(start, start + this.pageSize);
  });

  totalPages  = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)));
  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
  infoStart   = computed(() => this.filteredData().length === 0 ? 0 : (this.page() - 1) * this.pageSize + 1);
  infoEnd     = computed(() => Math.min(this.page() * this.pageSize, this.filteredData().length));

  ngOnInit() {
    this.loadData();
    this.divisiSvc.findAll().subscribe({ next: (d: Divisi[]) => this.divisiList.set(d) });
  }

  loadData() {
    this.loading.set(true);
    this.klaimSvc.getAllAdmin().subscribe({
      next: res => { this.allData.set(res.klaim); this.loading.set(false); },
      error: () => { this.error.set('Gagal memuat data.'); this.loading.set(false); }
    });
  }

  applyFilter() {
    this.filterCari.set(this._cariInput());
    this.page.set(1);
  }

  setTab(tab: TabStatus) {
    this.activeTab.set(tab);
    this.page.set(1);
  }

  // ── Dropdown ─────────────────────────────────────────────────
  toggleDropdown(id: number, event: MouseEvent) {
    event.stopPropagation();
    if (this.dropdownOpenId() === id) {
      this.dropdownOpenId.set(null);
      return;
    }
    const btn = event.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    this.dropdownX.set(rect.right);
    this.dropdownY.set(rect.bottom + 4);
    this.dropdownOpenId.set(id);
  }

  closeDropdown() { this.dropdownOpenId.set(null); }

  // ── Approve ──────────────────────────────────────────────────
  approve(k: Klaim) {
    const id = k.id;
    const label = `${this.labelJenis(k.jenisKlaim)} — ${k.namaKaryawan}`;
    this.zone.runOutsideAngular(() => {
      Swal.fire({
        title: 'Setujui Klaim?',
        text: label,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Setujui',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#5c6bc0'
      }).then((res: any) => {
        if (!res.isConfirmed) return;
        this.zone.run(() => {
          this.klaimSvc.updateStatusAdmin(id, 'DISETUJUI').subscribe({
            next: () => {
              this.activeTab.set('DISETUJUI');
              this.page.set(1);
              this.loadData();
              Swal.fire({ title: 'Berhasil!', text: 'Klaim telah disetujui.', icon: 'success', timer: 1500, showConfirmButton: false });
            },
            error: (err: any) => {
              const msg = err?.message ?? err?.data?.message ?? 'Terjadi kesalahan saat menyetujui klaim.';
              Swal.fire('Gagal Menyetujui', msg, 'error');
            }
          });
        });
      });
    });
  }

  // ── Tolak ────────────────────────────────────────────────────
  openTolak(k: Klaim) {
    this.tolakId.set(k.id);
    this.tolakCatatan.set('');
    this.showTolakModal.set(true);
  }

  closeTolak() { this.showTolakModal.set(false); }

  submitTolak() {
    if (!this.tolakId()) return;
    this.tolakSaving.set(true);
    this.klaimSvc.updateStatusAdmin(this.tolakId()!, 'DITOLAK', this.tolakCatatan()).subscribe({
      next: () => {
        this.tolakSaving.set(false);
        this.closeTolak();
        this.activeTab.set('DITOLAK');
        this.page.set(1);
        this.loadData();
      },
      error: () => { this.tolakSaving.set(false); Swal.fire('Gagal', 'Terjadi kesalahan.', 'error'); }
    });
  }

  // ── Delete ───────────────────────────────────────────────────
  hapus(k: Klaim) {
    const id = k.id;
    this.zone.runOutsideAngular(() => {
      Swal.fire({
        title: 'Hapus Klaim?',
        text: 'Data tidak dapat dipulihkan.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Hapus',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#d33'
      }).then((res: any) => {
        if (!res.isConfirmed) return;
        this.zone.run(() => {
          this.klaimSvc.deleteAdmin(id).subscribe({ next: () => this.loadData() });
        });
      });
    });
  }

  // ── Helpers ──────────────────────────────────────────────────
  readonly jenisOptions: { value: JenisKlaim; label: string }[] = [
    { value: 'OPERASIONAL',     label: 'Operasional' },
    { value: 'INVOICE_TAGIHAN', label: 'Invoice / Tagihan' },
    { value: 'CASHBACK',        label: 'Cashback' },
    { value: 'REIMBURSEMENT',   label: 'Reimbursement' }
  ];

  labelJenis(j: JenisKlaim): string {
    return this.jenisOptions.find(o => o.value === j)?.label ?? j;
  }

  formatRp(n: number): string {
    if (!n) return '0';
    return new Intl.NumberFormat('id-ID').format(n);
  }

  formatDate(d?: string): string {
    if (!d) return '-';
    const dt = new Date(d);
    return dt.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      + '\n@ ' + dt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  formatDateLine1(d?: string): string {
    if (!d) return '-';
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatDateLine2(d?: string): string {
    if (!d) return '';
    return '@ ' + new Date(d).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  fotoUrl(path?: string): string {
    if (!path) return 'assets/images/avatars/avatar-1.png';
    return path.startsWith('http') ? path : `${this.apiBase}/${path}`;
  }

  lampiranUrl(path?: string): string {
    if (!path) return '#';
    return path.startsWith('http') ? path : `${this.apiBase}/${path}`;
  }
}
