import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IzinHariService } from '../../../core/services/izin-hari.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { IzinHari, IzinHariRequest, StatusIzin } from '../../../core/models/izin-hari.model';
import { Divisi } from '../../../core/models/divisi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

declare const Swal: any;

type TabStatus = 'MENUNGGU' | 'DISETUJUI' | 'DITOLAK';

@Component({
  selector: 'app-izin-hari',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './izin-hari.component.html',
  styleUrl: './izin-hari.component.scss'
})
export class IzinHariComponent implements OnInit {
  private svc        = inject(IzinHariService);
  private divisiSvc  = inject(DivisiService);
  private karyawanSvc = inject(KaryawanService);

  // ── State ──────────────────────────────────────────────────
  activeTab   = signal<TabStatus>('MENUNGGU');
  loading     = signal(false);
  error       = signal('');
  toastMsg    = signal('');
  toastType   = signal<'success'|'danger'>('success');

  allData     = signal<IzinHari[]>([]);
  totalMenunggu = signal(0);

  divisiList  = signal<Divisi[]>([]);
  karyawanList = signal<Karyawan[]>([]);

  // Filter
  filterFrom  = signal('');
  filterTo    = signal('');
  filterDivisi = signal<number|null>(null);
  filterCari  = signal('');
  quickFilter = signal('');

  // Pagination
  page       = signal(1);
  pageSize   = 10;

  // Modal Tambah Izin
  showModal   = signal(false);
  modalKaryawanId = signal<number|null>(null);
  modalForm   = signal<IzinHariRequest>({ tanggalList: [], keperluan: '', mengurangiGaji: false });
  modalLampiran = signal<File|null>(null);
  modalSaving = signal(false);
  modalError  = signal('');
  newTanggal  = signal('');

  // Modal Tolak
  showTolakModal = signal(false);
  tolakId        = signal<number|null>(null);
  tolakCatatan   = signal('');
  tolakSaving    = signal(false);

  // ── Computed ───────────────────────────────────────────────
  filteredData = computed(() => {
    return this.allData().filter(d => d.status === this.activeTab());
  });

  pagedData = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredData().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)));
  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  countByStatus(status: TabStatus) {
    return this.allData().filter(d => d.status === status).length;
  }

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
    this.loadDivisi();
    this.load();
  }

  loadDivisi() {
    this.divisiSvc.findAll().subscribe(list => this.divisiList.set(list));
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.svc.getAllAdmin({
      status: undefined,
      from:  this.filterFrom() || undefined,
      to:    this.filterTo()   || undefined,
      filter: this.quickFilter() || undefined,
      divisiId: this.filterDivisi() ?? undefined,
      cari: this.filterCari() || undefined
    }).subscribe({
      next: res => {
        this.allData.set(res.izinHari);
        this.totalMenunggu.set(res.totalMenunggu);
        this.loading.set(false);
        this.page.set(1);
      },
      error: () => {
        this.error.set('Gagal memuat data izin hari.');
        this.loading.set(false);
      }
    });
  }

  setTab(tab: TabStatus) {
    this.activeTab.set(tab);
    this.page.set(1);
  }

  setQuickFilter(f: string) {
    if (this.quickFilter() === f) { this.quickFilter.set(''); }
    else { this.quickFilter.set(f); }
    this.filterFrom.set('');
    this.filterTo.set('');
    this.load();
  }

  onCari() { this.load(); }

  // ── Approve ────────────────────────────────────────────────
  approve(item: IzinHari) {
    Swal.fire({
      title: 'Setujui Izin?',
      text: `Izin ${item.namaKaryawan} akan disetujui.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya, Setujui',
      cancelButtonText: 'Batal'
    }).then((result: any) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.updateStatusAdmin(item.id, 'DISETUJUI').subscribe({
          next: () => {
            // Update item di allData secara langsung agar UI langsung berubah
            this.allData.update(list =>
              list.map(x => x.id === item.id ? { ...x, status: 'DISETUJUI' as StatusIzin } : x)
            );
            this.showToast('Izin berhasil disetujui.');
            // Tetap di tab saat ini – item hilang dari MENUNGGU adalah perilaku yang benar
            this.load();
          },
          error: (err) => {
            const msg = err?.message ?? err?.data?.message ?? 'Gagal menyetujui izin.';
            this.showToast(msg, 'danger');
          }
        });
      }
    });
  }

  // ── Reject ─────────────────────────────────────────────────
  openTolak(item: IzinHari) {
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
        const catatan = this.tolakCatatan();
        // Update item di allData secara langsung
        this.allData.update(list =>
          list.map(x => x.id === id ? { ...x, status: 'DITOLAK' as StatusIzin, catatanPenolakan: catatan } : x)
        );
        this.showTolakModal.set(false);
        this.tolakSaving.set(false);
        this.tolakId.set(null);
        this.showToast('Izin berhasil ditolak.');
        this.load();
      },
      error: (err) => {
        this.tolakSaving.set(false);
        const msg = err?.message ?? err?.data?.message ?? 'Gagal menolak izin.';
        this.showToast(msg, 'danger');
      }
    });
  }

  // ── Delete ─────────────────────────────────────────────────
  delete(item: IzinHari) {
    Swal.fire({
      title: 'Hapus Izin?',
      text: `Data izin ${item.namaKaryawan} akan dihapus permanen.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#dc3545'
    }).then((result: any) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.deleteAdmin(item.id).subscribe({
          next: () => {
            this.allData.update(list => list.filter(x => x.id !== item.id));
            this.showToast('Izin berhasil dihapus.');
            this.load();
          },
          error: (err) => {
            const msg = err?.message ?? err?.data?.message ?? 'Gagal menghapus izin.';
            this.showToast(msg, 'danger');
          }
        });
      }
    });
  }

  // ── Ekspor Excel ───────────────────────────────────────────
  eksporExcel() {
    this.svc.exportExcelAdmin({
      from: this.filterFrom() || undefined,
      to:   this.filterTo()   || undefined
    }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'izin-hari.xlsx'; a.click();
      URL.revokeObjectURL(url);
    });
  }

  // ── Modal Tambah Izin ──────────────────────────────────────
  openModal() {
    this.karyawanSvc.findAll().subscribe(r => {
      const list = Array.isArray(r) ? r : (r as any)?.karyawan ?? [];
      this.karyawanList.set(list);
    });
    this.modalKaryawanId.set(null);
    this.modalForm.set({ tanggalList: [], keperluan: '', mengurangiGaji: false });
    this.modalLampiran.set(null);
    this.modalError.set('');
    this.newTanggal.set('');
    this.showModal.set(true);
  }

  addTanggal() {
    const t = this.newTanggal();
    if (!t) return;
    const form = this.modalForm();
    if (!form.tanggalList.includes(t)) {
      this.modalForm.set({ ...form, tanggalList: [...form.tanggalList, t].sort() });
    }
    this.newTanggal.set('');
  }

  removeTanggal(t: string) {
    const form = this.modalForm();
    this.modalForm.set({ ...form, tanggalList: form.tanggalList.filter(x => x !== t) });
  }

  onLampiranChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.modalLampiran.set(file);
  }

  submitModal() {
    const karyawanId = this.modalKaryawanId();
    if (!karyawanId) { this.modalError.set('Pilih karyawan terlebih dahulu.'); return; }
    const form = this.modalForm();
    if (form.tanggalList.length === 0) { this.modalError.set('Minimal satu tanggal harus dipilih.'); return; }
    if (!form.keperluan.trim()) { this.modalError.set('Keperluan harus diisi.'); return; }
    this.modalSaving.set(true);
    this.modalError.set('');
    this.svc.create(karyawanId, form, this.modalLampiran() ?? undefined).subscribe({
      next: () => {
        this.showModal.set(false);
        this.modalSaving.set(false);
        this.showToast('Izin hari berhasil ditambahkan.');
        this.load();
      },
      error: () => { this.modalSaving.set(false); this.modalError.set('Gagal menyimpan. Coba lagi.'); }
    });
  }

  // ── Helpers ────────────────────────────────────────────────
  fotoUrl(path?: string) {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  formatTanggal(t: string) {
    if (!t) return '';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatDateTime(t?: string) {
    if (!t) return '';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })
      + ' @ ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  zonaLabel(z?: string) {
    if (!z) return '';
    const map: Record<string, string> = { WIB: 'WIB (UTC+7)', WITA: 'WITA (UTC+8)', WIT: 'WIT (UTC+9)' };
    return map[z] ?? z;
  }

  showToast(msg: string, type: 'success'|'danger' = 'success') {
    this.toastMsg.set(msg);
    this.toastType.set(type);
    setTimeout(() => this.toastMsg.set(''), 3000);
  }

  goPage(p: number) {
    if (p >= 1 && p <= this.totalPages()) this.page.set(p);
  }
}
