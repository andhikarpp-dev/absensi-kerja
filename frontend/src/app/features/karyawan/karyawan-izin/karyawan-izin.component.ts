import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { IzinJamService } from '../../../core/services/izin-jam.service';
import { IzinHariService } from '../../../core/services/izin-hari.service';
import { AuthService } from '../../../core/services/auth.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { User } from '../../../core/models/user.model';
import { IzinJam, IzinJamRequest, IzinJamRiwayat, StatusIzin } from '../../../core/models/izin-jam.model';
import { IzinHari, IzinHariRequest, IzinHariRiwayat } from '../../../core/models/izin-hari.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

declare const Swal: any;

export type TabIzin = 'jam' | 'hari';

@Component({
  selector: 'app-karyawan-izin',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, LayoutComponent],
  templateUrl: './karyawan-izin.component.html',
  styleUrl: './karyawan-izin.component.scss'
})
export class KaryawanIzinComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private router      = inject(Router);
  private auth        = inject(AuthService);
  private karyawanSvc = inject(KaryawanService);
  private izinJamSvc  = inject(IzinJamService);
  private izinHariSvc = inject(IzinHariService);

  karyawan = signal<Karyawan | null>(null);
  loading  = signal(false);
  error    = signal('');

  readonly isKaryawan = computed(() => (this.auth.currentUser() as User | null)?.role === 'KARYAWAN');

  // ── Tabs ───────────────────────────────────────────────────
  activeTab    = signal<TabIzin>('jam');
  activeStatus = signal<StatusIzin>('DISETUJUI');

  // ── Filter ─────────────────────────────────────────────────
  filterMulai          = signal('');
  filterSelesai        = signal('');
  filterDapatMengganti = signal('');
  filterKenaPotong     = signal('');
  filterKenaDenda      = signal('');

  // ── Data ───────────────────────────────────────────────────
  listIzinJam = signal<IzinJam[]>([]);

  // ── Computed filter ───────────────────────────────────────
  listJamFiltered = computed(() => {
    return this.listIzinJam().filter(d => {
      const statusOk  = d.status === this.activeStatus();
      const mulaiOk   = !this.filterMulai()   || d.tanggalMulai >= this.filterMulai();
      const selesaiOk = !this.filterSelesai() || d.tanggalSelesai <= this.filterSelesai();
      const mggOk     = !this.filterDapatMengganti() ||
                        (this.filterDapatMengganti() === 'YA'    &&  d.dapatMengganti) ||
                        (this.filterDapatMengganti() === 'TIDAK' && !d.dapatMengganti);
      const potongOk  = !this.filterKenaPotong() ||
                        (this.filterKenaPotong() === 'YA'    &&  d.kenaPotong) ||
                        (this.filterKenaPotong() === 'TIDAK' && !d.kenaPotong);
      const dendaOk   = !this.filterKenaDenda() ||
                        (this.filterKenaDenda() === 'YA'    &&  d.kenaDenda) ||
                        (this.filterKenaDenda() === 'TIDAK' && !d.kenaDenda);
      return statusOk && mulaiOk && selesaiOk && mggOk && potongOk && dendaOk;
    });
  });

  // ── DataTable state ───────────────────────────────────────
  dtSearch   = signal('');
  dtPage     = signal(1);
  dtPageSize = signal(10);
  dtSortCol  = signal<string>('tanggalMulai');
  dtSortDir  = signal<'asc' | 'desc'>('desc');

  // DataTable computed: search + sort + paginate
  dtFiltered = computed(() => {
    const kata = this.dtSearch().toLowerCase().trim();
    let rows = this.listJamFiltered();

    // search
    if (kata) {
      rows = rows.filter(d =>
        d.tanggalMulai.includes(kata) ||
        d.tanggalSelesai.includes(kata) ||
        (d.keperluan ?? '').toLowerCase().includes(kata) ||
        this.formatJam(d.jamMulai).includes(kata) ||
        this.formatJam(d.jamSelesai).includes(kata)
      );
    }

    // sort
    const col = this.dtSortCol();
    const dir = this.dtSortDir() === 'asc' ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      const av = (a as any)[col] ?? '';
      const bv = (b as any)[col] ?? '';
      if (av < bv) return -1 * dir;
      if (av > bv) return  1 * dir;
      return 0;
    });

    return rows;
  });

  dtTotal      = computed(() => this.dtFiltered().length);
  dtTotalPages = computed(() => Math.max(1, Math.ceil(this.dtTotal() / this.dtPageSize())));
  dtInfoStart  = computed(() => this.dtTotal() === 0 ? 0 : (this.dtPage() - 1) * this.dtPageSize() + 1);
  dtInfoEnd    = computed(() => Math.min(this.dtPage() * this.dtPageSize(), this.dtTotal()));

  dtRows = computed(() => {
    const start = (this.dtPage() - 1) * this.dtPageSize();
    return this.dtFiltered().slice(start, start + this.dtPageSize());
  });

  dtPageNumbers = computed(() => {
    const total = this.dtTotalPages();
    const cur   = this.dtPage();
    const pages: number[] = [];
    const delta = 2;
    for (let i = Math.max(1, cur - delta); i <= Math.min(total, cur + delta); i++) {
      pages.push(i);
    }
    return pages;
  });

  dtSort(col: string): void {
    if (this.dtSortCol() === col) {
      this.dtSortDir.set(this.dtSortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.dtSortCol.set(col);
      this.dtSortDir.set('asc');
    }
    this.dtPage.set(1);
  }

  dtSortIcon(col: string): string {
    if (this.dtSortCol() !== col) return 'bx-sort';
    return this.dtSortDir() === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  dtSetPageSize(size: number): void {
    this.dtPageSize.set(size);
    this.dtPage.set(1);
  }

  // ── Modal Tambah / Edit ────────────────────────────────────
  showTambahModal = signal(false);
  editId          = signal<number | null>(null);   // null = tambah baru
  savingTambah    = signal(false);
  errorTambah     = signal('');

  formTambah = signal<IzinJamRequest>({
    tanggalMulai: '', jamMulai: '',
    tanggalSelesai: '', jamSelesai: '',
    jamPengganti: '',
    dapatMengganti: false,
    kenaPotong: false,
    kenaDenda: false,
    keperluan: ''
  });

  // ── Modal Pengaturan ───────────────────────────────────────
  showPengaturanModal = signal(false);

  // ── Konfirmasi Hapus ───────────────────────────────────────
  konfirmasiHapusId = signal<number | null>(null);
  deletingId        = signal<number | null>(null);

  // ── Modal Tolak ────────────────────────────────────────────
  showTolakModal = signal(false);
  tolakItem      = signal<IzinJam | null>(null);
  tolakCatatan   = signal('');
  savingTolak    = signal(false);

  openTolak(item: IzinJam): void {
    this.tolakItem.set(item);
    this.tolakCatatan.set('');
    this.showTolakModal.set(true);
  }

  konfirmasiTolak(): void {
    const item = this.tolakItem();
    const k    = this.karyawan();
    if (!item || !k) return;
    this.savingTolak.set(true);
    this.izinJamSvc.updateStatus(k.id, item.id, 'DITOLAK', this.tolakCatatan() || undefined).subscribe({
      next: saved => {
        this.listIzinJam.update(list => {
          const idx = list.findIndex(x => x.id === saved.id);
          if (idx >= 0) { const n = [...list]; n[idx] = saved; return n; }
          return list;
        });
        this.savingTolak.set(false);
        this.showTolakModal.set(false);
        this.tolakItem.set(null);
        this.showToast('Izin jam berhasil ditolak.');
      },
      error: () => {
        this.savingTolak.set(false);
        this.showToast('Gagal menolak izin jam.', 'danger');
      }
    });
  }

  // ── Modal Riwayat ─────────────────────────────────────────
  showRiwayatModal   = signal(false);
  riwayatList        = signal<IzinJamRiwayat[]>([]);
  riwayatLoading     = signal(false);
  riwayatError       = signal('');
  riwayatIzinJamId   = signal<number | null>(null);
  riwayatPage        = signal(1);
  readonly RIWAYAT_PAGE_SIZE = 5;

  riwayatTotal     = computed(() => this.riwayatList().length);
  riwayatTotalPage = computed(() => Math.max(1, Math.ceil(this.riwayatTotal() / this.RIWAYAT_PAGE_SIZE)));
  riwayatRows      = computed(() => {
    const start = (this.riwayatPage() - 1) * this.RIWAYAT_PAGE_SIZE;
    return this.riwayatList().slice(start, start + this.RIWAYAT_PAGE_SIZE);
  });

  // ── Toast ─────────────────────────────────────────────────
  toastMsg  = signal('');
  toastType = signal<'success' | 'danger'>('success');
  private _toastTimer: any = null;

  // ── Methods ────────────────────────────────────────────────
  setTab(tab: TabIzin): void         { this.activeTab.set(tab); }
  setStatus(s: StatusIzin): void     { this.activeStatus.set(s); this.loadIzinJam(); }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  formatTanggal(tgl: string): string {
    if (!tgl) return '—';
    const d   = new Date(tgl + 'T00:00:00');
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate().toString().padStart(2,'0')} ${bln}\n${d.getFullYear()}`;
  }

  formatTanggalCreated(dt?: string): string {
    if (!dt) return '';
    const d   = new Date(dt);
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    const tgl = `${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()}`;
    const jam = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
    return `${tgl} @ ${jam}`;
  }

  formatJam(jam?: string): string {
    if (!jam) return '—';
    return jam.substring(0, 5);
  }

  formatDurasi(menit?: number): string {
    if (!menit || menit <= 0) return '—';
    const j = Math.floor(menit / 60);
    const m = menit % 60;
    const parts: string[] = [];
    if (j > 0) parts.push(`${j}jm`);
    if (m > 0) parts.push(`${m}mn`);
    return parts.join(' ');
  }

  updateForm(field: keyof IzinJamRequest, value: any): void {
    this.formTambah.update(f => ({ ...f, [field]: value }));
  }

  // ── Tambah ────────────────────────────────────────────────
  openTambah(): void {
    this.editId.set(null);
    this.errorTambah.set('');
    this.formTambah.set({
      tanggalMulai: '', jamMulai: '',
      tanggalSelesai: '', jamSelesai: '',
      jamPengganti: '',
      dapatMengganti: false, kenaPotong: false, kenaDenda: false,
      keperluan: ''
    });
    this.showTambahModal.set(true);
  }

  // ── Edit ──────────────────────────────────────────────────
  openEdit(item: IzinJam): void {
    this.editId.set(item.id);
    this.errorTambah.set('');
    this.formTambah.set({
      tanggalMulai:   item.tanggalMulai,
      jamMulai:       this.formatJam(item.jamMulai),
      tanggalSelesai: item.tanggalSelesai,
      jamSelesai:     this.formatJam(item.jamSelesai),
      jamPengganti:   item.jamPengganti ? this.formatJam(item.jamPengganti) : '',
      dapatMengganti: item.dapatMengganti,
      kenaPotong:     item.kenaPotong,
      kenaDenda:      item.kenaDenda,
      keperluan:      item.keperluan ?? ''
    });
    this.showTambahModal.set(true);
  }

  closeTambah(): void {
    this.showTambahModal.set(false);
  }

  simpanTambah(): void {
    const f = this.formTambah();
    const k = this.karyawan();
    if (!k) return;

    const id = this.editId();

    // Validasi mode Tambah
    if (!id) {
      if (!f.tanggalMulai || !f.jamMulai)     { this.errorTambah.set('Waktu mulai wajib diisi.');   return; }
      if (!f.tanggalSelesai || !f.jamSelesai) { this.errorTambah.set('Waktu selesai wajib diisi.'); return; }
      if (!f.keperluan?.trim())               { this.errorTambah.set('Keperluan wajib diisi.');      return; }
    }

    this.savingTambah.set(true);
    this.errorTambah.set('');

    const req: IzinJamRequest = {
      ...f,
      jamPengganti: f.jamPengganti || undefined
    };

    const obs = id
      ? this.izinJamSvc.update(k.id, id, req)
      : this.izinJamSvc.create(k.id, req);

    obs.subscribe({
      next: saved => {
        this.listIzinJam.update(list => {
          const idx = list.findIndex(x => x.id === saved.id);
          if (idx >= 0) { const n = [...list]; n[idx] = saved; return n; }
          return [saved, ...list];
        });
        this.savingTambah.set(false);
        this.showTambahModal.set(false);
        this.showToast(id ? 'Izin jam berhasil diperbarui.' : 'Izin jam berhasil ditambahkan.');
      },
      error: err => {
        this.errorTambah.set(err?.error?.message ?? 'Gagal menyimpan izin jam.');
        this.savingTambah.set(false);
      }
    });
  }

  // ── Hapus ─────────────────────────────────────────────────
  hapus(id: number): void {
    const k = this.karyawan();
    if (!k) return;
    this.deletingId.set(id);
    this.izinJamSvc.delete(k.id, id).subscribe({
      next: () => {
        this.listIzinJam.update(l => l.filter(x => x.id !== id));
        this.konfirmasiHapusId.set(null);
        this.deletingId.set(null);
        this.showToast('Izin jam berhasil dihapus.');
      },
      error: () => {
        this.deletingId.set(null);
        this.showToast('Gagal menghapus izin jam.', 'danger');
      }
    });
  }

  // ── Ubah status ───────────────────────────────────────────
  ubahStatus(item: IzinJam, status: StatusIzin): void {
    const k = this.karyawan();
    if (!k) return;
    this.izinJamSvc.updateStatus(k.id, item.id, status).subscribe({
      next: saved => {
        this.listIzinJam.update(list => {
          const idx = list.findIndex(x => x.id === saved.id);
          if (idx >= 0) { const n = [...list]; n[idx] = saved; return n; }
          return list;
        });
        this.showToast('Status izin jam berhasil diubah.');
      },
      error: () => this.showToast('Gagal mengubah status.', 'danger')
    });
  }

  // ── Riwayat ───────────────────────────────────────────────
  openRiwayat(item: IzinJam): void {
    const k = this.karyawan();
    if (!k) return;
    this.riwayatIzinJamId.set(item.id);
    this.riwayatList.set([]);
    this.riwayatPage.set(1);
    this.riwayatError.set('');
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.izinJamSvc.getRiwayat(k.id, item.id).subscribe({
      next: list => { this.riwayatList.set(list); this.riwayatLoading.set(false); },
      error: ()   => { this.riwayatError.set('Gagal memuat riwayat.'); this.riwayatLoading.set(false); }
    });
  }

  tipeLabel(tipe: string): string {
    if (tipe === 'DIBUAT') return 'Dibuat';
    if (tipe === 'DIUBAH') return 'Diubah';
    if (tipe === 'DIHAPUS') return 'Dihapus';
    return tipe;
  }

  tipeClass(tipe: string): string {
    if (tipe === 'DIBUAT')  return 'rw-badge rw-badge--dibuat';
    if (tipe === 'DIUBAH')  return 'rw-badge rw-badge--diubah';
    if (tipe === 'DIHAPUS') return 'rw-badge rw-badge--dihapus';
    return 'rw-badge';
  }

  formatRiwayatAt(dt?: string): string {
    if (!dt) return '';
    const d   = new Date(dt);
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate()} ${bln} ${d.getFullYear()} @ ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  }

  // ── Ekspor Excel ──────────────────────────────────────────
  eksporting = signal(false);

  eksporExcel(): void {
    const k = this.karyawan();
    if (!k) return;
    this.eksporting.set(true);
    const opts: { status?: any; from?: string; to?: string } = {};
    opts.status = this.activeStatus();
    if (this.filterMulai())   opts.from = this.filterMulai();
    if (this.filterSelesai()) opts.to   = this.filterSelesai();

    this.izinJamSvc.exportExcel(k.id, opts).subscribe({
      next: blob => {
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        const tgl  = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        a.href     = url;
        a.download = `izin-jam-${tgl}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.eksporting.set(false);
        this.showToast('File Excel berhasil diunduh.');
      },
      error: () => {
        this.eksporting.set(false);
        this.showToast('Gagal mengekspor Excel.', 'danger');
      }
    });
  }

  // ── Load data ─────────────────────────────────────────────
  loadIzinJam(): void {
    const k = this.karyawan();
    if (!k) return;
    this.loading.set(true);
    this.izinJamSvc.getAll(k.id).subscribe({
      next: data => { this.listIzinJam.set(data); this.loading.set(false); },
      error: ()   => { this.error.set('Gagal memuat data izin jam.'); this.loading.set(false); }
    });
  }

  // ── Filter ────────────────────────────────────────────────
  resetFilter(): void {
    this.filterMulai.set('');
    this.filterSelesai.set('');
    this.filterDapatMengganti.set('');
    this.filterKenaPotong.set('');
    this.filterKenaDenda.set('');
  }

  // ── Toast ─────────────────────────────────────────────────
  showToast(msg: string, type: 'success' | 'danger' = 'success'): void {
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this.toastMsg.set(msg);
    this.toastType.set(type);
    this._toastTimer = setTimeout(() => this.toastMsg.set(''), 3000);
  }

  // ══════════════════════════════════════════════════════════
  // ── IZIN HARI ─────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════

  // quick filter: PENGAJUAN | DISETUJUI | DITOLAK | HARI_INI | BESOK | 7_HARI
  hariFilter     = signal<string>('PENGAJUAN');
  hariFilterMulai = signal('');
  hariFilterSelesai = signal('');

  listIzinHari   = signal<IzinHari[]>([]);
  hariLoading    = signal(false);

  // pagination
  hariPage     = signal(1);
  hariPageSize = signal(10);

  // Client-side filter setelah data dari backend masuk
  hariFiltredList = computed(() => {
    const f    = this.hariFilter();
    const list = this.listIzinHari();

    const toMs = (s: string) => new Date(s + 'T00:00:00').getTime();

    const today = new Date(); today.setHours(0,0,0,0);
    const addDay = (d: Date, n: number) => {
      const x = new Date(d); x.setDate(x.getDate() + n); return x.getTime();
    };

    if (f === 'HARI_INI') {
      const t = today.getTime();
      return list.filter(i => i.tanggalList.some(tgl => toMs(tgl) === t));
    }
    if (f === 'BESOK') {
      const t = addDay(today, 1);
      return list.filter(i => i.tanggalList.some(tgl => toMs(tgl) === t));
    }
    if (f === '7_HARI') {
      // Lusa (today+2) s/d today+7, tidak termasuk besok
      const start = addDay(today, 2);
      const end   = addDay(today, 7);
      return list.filter(i => i.tanggalList.some(tgl => {
        const t = toMs(tgl); return t >= start && t <= end;
      }));
    }
    return list;
  });

  hariTotal    = computed(() => this.hariFiltredList().length);
  hariTotalPages = computed(() => Math.max(1, Math.ceil(this.hariTotal() / this.hariPageSize())));
  hariRows     = computed(() => {
    const start = (this.hariPage() - 1) * this.hariPageSize();
    return this.hariFiltredList().slice(start, start + this.hariPageSize());
  });
  hariInfoStart = computed(() => this.hariTotal() === 0 ? 0 : (this.hariPage() - 1) * this.hariPageSize() + 1);
  hariInfoEnd   = computed(() => Math.min(this.hariPage() * this.hariPageSize(), this.hariTotal()));
  hariPageNumbers = computed(() => {
    const total = this.hariTotalPages();
    const cur   = this.hariPage();
    const pages: number[] = [];
    for (let p = Math.max(1, cur - 2); p <= Math.min(total, cur + 2); p++) pages.push(p);
    return pages;
  });

  // ── Modal Tambah/Edit Izin Hari ──────────────────────────
  showHariModal   = signal(false);
  hariEditId      = signal<number | null>(null);
  hariSaving      = signal(false);
  hariError       = signal('');
  hariLampiranFile: File | null = null;
  hariLampiranNama = signal('');

  hariForm = signal<IzinHariRequest>({
    tanggalList: [],
    keperluan: '',
    mengurangiGaji: false
  });
  hariTanggalInput = signal('');  // input sementara untuk tambah tanggal

  openHariTambah(): void {
    this.hariEditId.set(null);
    this.hariError.set('');
    this.hariLampiranFile = null;
    this.hariLampiranNama.set('');
    this.hariForm.set({ tanggalList: [], keperluan: '', mengurangiGaji: false });
    this.hariTanggalInput.set('');
    this.showHariModal.set(true);
  }

  openHariEdit(item: IzinHari): void {
    this.hariEditId.set(item.id);
    this.hariError.set('');
    this.hariLampiranFile = null;
    this.hariLampiranNama.set(item.lampiranUrl ? item.lampiranUrl.split('/').pop() ?? '' : '');
    this.hariForm.set({
      tanggalList: [...item.tanggalList],
      keperluan: item.keperluan,
      mengurangiGaji: item.mengurangiGaji
    });
    this.hariTanggalInput.set('');
    this.showHariModal.set(true);
  }

  closeHariModal(): void { this.showHariModal.set(false); }

  tambahTanggal(): void {
    const val = this.hariTanggalInput();
    if (!val) return;
    const list = this.hariForm().tanggalList;
    if (!list.includes(val)) {
      this.hariForm.update(f => ({ ...f, tanggalList: [...f.tanggalList, val].sort() }));
    }
    this.hariTanggalInput.set('');
  }

  hapusTanggal(tgl: string): void {
    this.hariForm.update(f => ({ ...f, tanggalList: f.tanggalList.filter(t => t !== tgl) }));
  }

  onHariLampiranChange(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    if (input.files?.length) {
      this.hariLampiranFile = input.files[0];
      this.hariLampiranNama.set(input.files[0].name);
    }
  }

  simpanHari(): void {
    const f = this.hariForm();
    const k = this.karyawan();
    if (!k) return;
    if (!f.tanggalList.length) { this.hariError.set('Minimal satu tanggal izin wajib dipilih.'); return; }
    if (!f.keperluan.trim())   { this.hariError.set('Keperluan wajib diisi.'); return; }

    this.hariSaving.set(true);
    this.hariError.set('');
    const editId = this.hariEditId();
    const obs = editId
      ? this.izinHariSvc.update(k.id, editId, f, this.hariLampiranFile ?? undefined)
      : this.izinHariSvc.create(k.id, f, this.hariLampiranFile ?? undefined);

    obs.subscribe({
      next: saved => {
        if (editId) {
          this.listIzinHari.update(list => {
            const idx = list.findIndex(x => x.id === saved.id);
            if (idx >= 0) { const n = [...list]; n[idx] = saved; return n; }
            return list;
          });
        } else {
          this.listIzinHari.update(list => [saved, ...list]);
        }
        this.hariSaving.set(false);
        this.showHariModal.set(false);
        this.showToast(editId ? 'Izin hari berhasil diperbarui.' : 'Izin hari berhasil diajukan.');
      },
      error: err => {
        this.hariError.set(err?.error?.message ?? 'Gagal menyimpan izin hari.');
        this.hariSaving.set(false);
      }
    });
  }

  // ── Hapus Hari ────────────────────────────────────────────
  hariKonfirmasiHapusId = signal<number | null>(null);
  hariDeletingId        = signal<number | null>(null);

  hapusHari(id: number): void {
    const k = this.karyawan();
    if (!k) return;
    this.hariDeletingId.set(id);
    this.izinHariSvc.delete(k.id, id).subscribe({
      next: () => {
        this.listIzinHari.update(l => l.filter(x => x.id !== id));
        this.hariKonfirmasiHapusId.set(null);
        this.hariDeletingId.set(null);
        this.showToast('Izin hari berhasil dihapus.');
      },
      error: () => {
        this.hariDeletingId.set(null);
        this.showToast('Gagal menghapus izin hari.', 'danger');
      }
    });
  }

  // ── Ubah Status Hari ──────────────────────────────────────
  hariShowTolakModal  = signal(false);
  hariTolakItem       = signal<IzinHari | null>(null);
  hariTolakCatatan    = signal('');
  hariSavingTolak     = signal(false);

  terimaHari(item: IzinHari): void {
    const k = this.karyawan();
    if (!k) return;
    this.izinHariSvc.updateStatus(k.id, item.id, 'DISETUJUI').subscribe({
      next: () => {
        this.showToast('Izin hari disetujui.');
        this.loadIzinHari(); // reload agar item hilang dari tab PENGAJUAN
      },
      error: () => this.showToast('Gagal menyetujui izin hari.', 'danger')
    });
  }

  openTolakHari(item: IzinHari): void {
    this.hariTolakItem.set(item);
    this.hariTolakCatatan.set('');
    this.hariShowTolakModal.set(true);
  }

  konfirmasiTolakHari(): void {
    const item = this.hariTolakItem();
    const k    = this.karyawan();
    if (!item || !k) return;
    this.hariSavingTolak.set(true);
    this.izinHariSvc.updateStatus(k.id, item.id, 'DITOLAK', this.hariTolakCatatan() || undefined).subscribe({
      next: () => {
        this.hariSavingTolak.set(false);
        this.hariShowTolakModal.set(false);
        this.showToast('Izin hari berhasil ditolak.');
        this.loadIzinHari(); // reload agar item hilang dari tab PENGAJUAN
      },
      error: () => { this.hariSavingTolak.set(false); this.showToast('Gagal menolak.', 'danger'); }
    });
  }

  // ── Batal Permohonan ──────────────────────────────────────
  hariBatalKonfirmasiId = signal<number | null>(null);
  hariBatalSaving       = signal(false);
  showBatalModal        = signal(false);
  batalItem             = signal<IzinHari | null>(null);
  batalSelectedDates    = signal<string[]>([]);

  openBatalPermohonan(item: IzinHari): void {
    this.batalItem.set(item);
    this.batalSelectedDates.set([]);
    this.showBatalModal.set(true);
  }

  toggleBatalDate(tgl: string): void {
    const curr = this.batalSelectedDates();
    if (curr.includes(tgl)) {
      this.batalSelectedDates.set(curr.filter(t => t !== tgl));
    } else {
      this.batalSelectedDates.set([...curr, tgl]);
    }
  }

  isBatalDateSelected(tgl: string): boolean {
    return this.batalSelectedDates().includes(tgl);
  }

  batalPermohonanHari(): void {
    const item = this.batalItem();
    const k    = this.karyawan();
    if (!item || !k || this.batalSelectedDates().length === 0) return;

    this.hariBatalSaving.set(true);
    this.izinHariSvc.delete(k.id, item.id).subscribe({
      next: () => {
        this.listIzinHari.update(list => list.filter(x => x.id !== item.id));
        this.hariBatalSaving.set(false);
        this.showBatalModal.set(false);
        this.showToast('Permohonan izin berhasil dibatalkan.');
      },
      error: () => {
        this.hariBatalSaving.set(false);
        this.showToast('Gagal membatalkan permohonan.', 'danger');
      }
    });
  }

  // ── Riwayat Perubahan Hari ────────────────────────────────
  hariShowRiwayatModal = signal(false);
  hariRiwayatList      = signal<IzinHariRiwayat[]>([]);
  hariRiwayatLoading   = signal(false);
  hariRiwayatError     = signal('');
  hariRiwayatItem      = signal<IzinHari | null>(null);
  hariRiwayatPage      = signal(1);
  readonly HARI_RIWAYAT_PAGE_SIZE = 5;

  hariRiwayatTotal     = computed(() => this.hariRiwayatList().length);
  hariRiwayatTotalPage = computed(() =>
    Math.max(1, Math.ceil(this.hariRiwayatTotal() / this.HARI_RIWAYAT_PAGE_SIZE)));
  hariRiwayatRows      = computed(() => {
    const start = (this.hariRiwayatPage() - 1) * this.HARI_RIWAYAT_PAGE_SIZE;
    return this.hariRiwayatList().slice(start, start + this.HARI_RIWAYAT_PAGE_SIZE);
  });

  openRiwayatHari(item: IzinHari): void {
    const k = this.karyawan();
    if (!k) return;
    this.hariRiwayatItem.set(item);
    this.hariRiwayatList.set([]);
    this.hariRiwayatPage.set(1);
    this.hariRiwayatError.set('');
    this.hariRiwayatLoading.set(true);
    this.hariShowRiwayatModal.set(true);
    this.izinHariSvc.getRiwayat(k.id, item.id).subscribe({
      next: list => { this.hariRiwayatList.set(list); this.hariRiwayatLoading.set(false); },
      error: ()   => {
        this.hariRiwayatError.set('Gagal memuat riwayat.');
        this.hariRiwayatLoading.set(false);
      }
    });
  }

  hariTipeLabel(tipe: string): string {
    if (tipe === 'DIBUAT')  return 'Dibuat';
    if (tipe === 'DIUBAH')  return 'Diubah';
    if (tipe === 'STATUS')  return 'Ubah Status';
    if (tipe === 'DIHAPUS') return 'Dihapus';
    return tipe;
  }

  hariTipeClass(tipe: string): string {
    if (tipe === 'DIBUAT')  return 'rw-badge rw-badge--dibuat';
    if (tipe === 'DIUBAH')  return 'rw-badge rw-badge--diubah';
    if (tipe === 'STATUS')  return 'rw-badge rw-badge--diubah';
    return 'rw-badge rw-badge--dihapus';
  }

  formatRiwayatHariAt(dt?: string): string {
    if (!dt) return '';
    const d   = new Date(dt);
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()} `
         + `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  }

  // ── Cetak Permohonan ──────────────────────────────────────
  cetakPermohonan(item: IzinHari): void {
    const k = this.karyawan();
    if (!k) return;

    const today   = new Date();
    const bulan   = ['Januari','Februari','Maret','April','Mei','Juni',
                     'Juli','Agustus','September','Oktober','November','Desember'];
    const tanggalSurat = `${today.getDate()} ${bulan[today.getMonth()]} ${today.getFullYear()}`;

    const nomorSurat  = `${String(item.id).padStart(3,'0')}/IZIN/${today.getFullYear()}`;
    const divisi      = k.namaDivisi  ?? '—';
    const jabatan     = k.namaJabatan ?? '—';
    const nip         = k.nip         ?? '—';

    const tglRows = item.tanggalList.map((t, i) => {
      const d   = new Date(t + 'T00:00:00');
      const hr  = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'][d.getDay()];
      const tgl = `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
      return `<tr>
        <td style="padding:3px 0 3px 0;color:#374151">${i === 0 ? '' : ''}</td>
        <td style="padding:3px 8px;color:#1e1b4b;font-weight:600">${i + 1}.</td>
        <td style="padding:3px 0;color:#1e1b4b">${hr}, ${tgl}</td>
      </tr>`;
    }).join('');

    const statusColor = item.status === 'DISETUJUI' ? '#15803d'
                      : item.status === 'DITOLAK'   ? '#b91c1c'
                      : '#92400e';
    const statusBg    = item.status === 'DISETUJUI' ? '#dcfce7'
                      : item.status === 'DITOLAK'   ? '#fee2e2'
                      : '#fef9c3';
    const statusLabel = item.status === 'DISETUJUI' ? 'DISETUJUI'
                      : item.status === 'DITOLAK'   ? 'DITOLAK'
                      : 'MENUNGGU PERSETUJUAN';

    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) return;

    win.document.write(`<!DOCTYPE html>
<html lang="id"><head>
<meta charset="UTF-8">
<title>Surat Permohonan Izin — ${k.namaLengkap}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f0f2f5;
    color: #1f2937;
    font-size: 13px;
  }
  .page {
    width: 210mm;
    min-height: 297mm;
    margin: 20px auto;
    background: #fff;
    box-shadow: 0 4px 32px rgba(0,0,0,.15);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  /* ── Header strip ── */
  .header-strip {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    padding: 28px 40px 22px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .header-logo {
    width: 56px; height: 56px;
    background: rgba(255,255,255,.2);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; font-weight: 900; color: #fff;
    flex-shrink: 0;
    border: 2px solid rgba(255,255,255,.35);
  }
  .header-text h1 {
    font-size: 18px; font-weight: 800; letter-spacing: .04em;
    text-transform: uppercase; margin-bottom: 3px;
  }
  .header-text p {
    font-size: 12px; opacity: .8;
  }
  .header-nomor {
    margin-left: auto; text-align: right;
  }
  .header-nomor .label { font-size: 10px; opacity: .75; letter-spacing: .08em; text-transform: uppercase; }
  .header-nomor .nomor { font-size: 13px; font-weight: 700; letter-spacing: .04em; }

  /* ── Content ── */
  .content { padding: 32px 40px 40px; }

  /* ── Section title ── */
  .section-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 700;
    color: #6366f1;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid #e0e7ff;
  }

  /* ── Info karyawan ── */
  .karyawan-card {
    background: #f8f7ff;
    border: 1px solid #e0e7ff;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .karyawan-avatar {
    width: 48px; height: 48px;
    background: linear-gradient(135deg, #6366f1, #7c3aed);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 20px; font-weight: 800;
    flex-shrink: 0;
  }
  .karyawan-info h2 { font-size: 15px; font-weight: 700; color: #1e1b4b; margin-bottom: 2px; }
  .karyawan-info p  { font-size: 12px; color: #6b7280; }
  .karyawan-meta {
    margin-left: auto; text-align: right;
  }
  .karyawan-meta .meta-row { font-size: 11.5px; color: #374151; line-height: 1.8; }
  .karyawan-meta .meta-label { color: #9ca3af; margin-right: 6px; }

  /* ── Detail tabel ── */
  .detail-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
  }
  .detail-table tr td {
    padding: 9px 12px;
    border-bottom: 1px solid #f3f4f6;
    vertical-align: top;
    font-size: 12.5px;
  }
  .detail-table tr:last-child td { border-bottom: none; }
  .detail-table .label-col {
    width: 160px;
    color: #6b7280;
    font-weight: 600;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: .04em;
    white-space: nowrap;
  }
  .detail-table .sep-col { width: 16px; color: #d1d5db; }
  .detail-table .value-col { color: #111827; }

  /* ── Status badge ── */
  .status-badge {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .04em;
    background: ${statusBg};
    color: ${statusColor};
    border: 1.5px solid ${statusColor}33;
  }

  /* ── Keperluan box ── */
  .keperluan-box {
    background: #f9fafb;
    border-left: 4px solid #6366f1;
    border-radius: 0 8px 8px 0;
    padding: 10px 14px;
    color: #374151;
    font-size: 13px;
    line-height: 1.6;
  }

  /* ── Tanda tangan ── */
  .ttd-section {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    gap: 20px;
  }
  .ttd-block {
    text-align: center;
    flex: 1;
  }
  .ttd-block .ttd-kota {
    font-size: 12px; color: #6b7280; margin-bottom: 4px;
  }
  .ttd-block .ttd-jabatan {
    font-size: 11.5px; color: #374151; font-weight: 600; margin-bottom: 56px;
  }
  .ttd-block .ttd-garis {
    border-top: 1px solid #374151;
    margin: 0 auto 4px;
    width: 140px;
  }
  .ttd-block .ttd-nama {
    font-size: 12.5px; font-weight: 700; color: #1e1b4b;
  }
  .ttd-block .ttd-nip {
    font-size: 11px; color: #6b7280;
  }

  /* ── Watermark status ── */
  .watermark {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%) rotate(-35deg);
    font-size: 72px;
    font-weight: 900;
    opacity: .04;
    color: ${statusColor};
    pointer-events: none;
    white-space: nowrap;
    z-index: 0;
    text-transform: uppercase;
  }

  /* ── Footer strip ── */
  .footer-strip {
    background: #f8f7ff;
    border-top: 1px solid #e0e7ff;
    padding: 10px 40px;
    font-size: 10px;
    color: #9ca3af;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ── Print tombol ── */
  .print-bar {
    position: fixed;
    top: 12px; right: 12px;
    display: flex; gap: 8px; z-index: 9999;
  }
  .btn-print {
    padding: 8px 20px;
    background: #6366f1; color: #fff;
    border: none; border-radius: 8px;
    font-size: 13px; font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(99,102,241,.4);
  }
  .btn-print:hover { background: #4f46e5; }
  .btn-close-win {
    padding: 8px 16px;
    background: #fff; color: #374151;
    border: 1px solid #e5e7eb; border-radius: 8px;
    font-size: 13px; font-weight: 600;
    cursor: pointer;
  }

  @media print {
    body { background: #fff; }
    .page { margin: 0; box-shadow: none; border-radius: 0; width: 100%; }
    .print-bar { display: none; }
    .watermark { position: fixed; }
  }
</style>
</head><body>

<!-- Print bar -->
<div class="print-bar">
  <button class="btn-close-win" onclick="window.close()">✕ Tutup</button>
  <button class="btn-print" onclick="window.print()">🖨 Cetak / Simpan PDF</button>
</div>

<div class="page">

  <!-- Watermark -->
  <div class="watermark">${statusLabel}</div>

  <!-- Header -->
  <div class="header-strip">
    <div class="header-logo">IZ</div>
    <div class="header-text">
      <h1>Surat Permohonan Izin</h1>
      <p>Dokumen Resmi Pengajuan Izin Karyawan</p>
    </div>
    <div class="header-nomor">
      <div class="label">Nomor Surat</div>
      <div class="nomor">${nomorSurat}</div>
    </div>
  </div>

  <!-- Content -->
  <div class="content">

    <!-- Info Karyawan -->
    <div class="section-title">Data Pemohon</div>
    <div class="karyawan-card">
      <div class="karyawan-avatar">${k.namaLengkap.charAt(0).toUpperCase()}</div>
      <div class="karyawan-info">
        <h2>${k.namaLengkap}</h2>
        <p>${divisi}${jabatan !== '—' ? ' &bull; ' + jabatan : ''}</p>
      </div>
      <div class="karyawan-meta">
        <div class="meta-row"><span class="meta-label">NIP</span>${nip}</div>
        <div class="meta-row"><span class="meta-label">Tgl. Pengajuan</span>${this.formatTanggalCreated(item.createdAt)}</div>
      </div>
    </div>

    <!-- Detail Izin -->
    <div class="section-title">Detail Permohonan Izin</div>
    <table class="detail-table">
      <tr>
        <td class="label-col">Tanggal Izin</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          <table style="border-collapse:collapse">
            ${tglRows}
          </table>
        </td>
      </tr>
      <tr>
        <td class="label-col">Keperluan</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          <div class="keperluan-box">${item.keperluan}</div>
        </td>
      </tr>
      <tr>
        <td class="label-col">Mengurangi Gaji</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          ${item.mengurangiGaji
            ? '<span style="color:#b91c1c;font-weight:600">Ya, izin ini mengurangi gaji</span>'
            : '<span style="color:#15803d;font-weight:600">Tidak mengurangi gaji</span>'}
        </td>
      </tr>
      <tr>
        <td class="label-col">Status</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          <span class="status-badge">${statusLabel}</span>
        </td>
      </tr>
      ${item.catatanPenolakan ? `
      <tr>
        <td class="label-col">Catatan Penolakan</td>
        <td class="sep-col">:</td>
        <td class="value-col" style="color:#b91c1c">${item.catatanPenolakan}</td>
      </tr>` : ''}
    </table>

    <!-- Tanda Tangan -->
    <div class="ttd-section">
      <div class="ttd-block">
        <div class="ttd-kota">_____________, ${tanggalSurat}</div>
        <div class="ttd-jabatan">Mengetahui / Menyetujui</div>
        <div class="ttd-garis"></div>
        <div class="ttd-nama">( ________________________ )</div>
        <div class="ttd-nip">Atasan Langsung / HRD</div>
      </div>
      <div class="ttd-block">
        <div class="ttd-kota">_____________, ${tanggalSurat}</div>
        <div class="ttd-jabatan">Pemohon</div>
        <div class="ttd-garis"></div>
        <div class="ttd-nama">( ${k.namaLengkap} )</div>
        <div class="ttd-nip">${nip !== '—' ? 'NIP: ' + nip : jabatan}</div>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div class="footer-strip">
    <span>Dicetak pada: ${tanggalSurat} &bull; Dokumen ini dibuat secara otomatis oleh sistem</span>
    <span>No. ${nomorSurat}</span>
  </div>

</div>
</body></html>`);
    win.document.close();
  }

  // ── Ekspor Excel Hari ─────────────────────────────────────
  hariEksporting = signal(false);

  eksporExcelHari(): void {
    const k = this.karyawan();
    if (!k) return;
    this.hariEksporting.set(true);
    const opts: any = {};
    const f = this.hariFilter();
    if (['DISETUJUI','DITOLAK'].includes(f)) opts.status = f;
    if (this.hariFilterMulai()) opts.from = this.hariFilterMulai();
    if (this.hariFilterSelesai()) opts.to = this.hariFilterSelesai();
    this.izinHariSvc.exportExcel(k.id, opts).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a   = document.createElement('a');
        a.href = url; a.download = `izin-hari-${new Date().toISOString().slice(0,10)}.xlsx`;
        a.click(); URL.revokeObjectURL(url);
        this.hariEksporting.set(false);
      },
      error: () => { this.hariEksporting.set(false); this.showToast('Gagal ekspor Excel.', 'danger'); }
    });
  }

  // ── Set filter Hari ───────────────────────────────────────
  setHariFilter(filter: string): void {
    this.hariFilter.set(filter);
    this.hariPage.set(1);
    this.loadIzinHari();
  }

  // ── Load Izin Hari ────────────────────────────────────────
  loadIzinHari(): void {
    const k = this.karyawan();
    if (!k) return;
    this.hariLoading.set(true);
    const f = this.hariFilter();
    const opts: any = {};
    if (f === 'PENGAJUAN')         opts.status = 'MENUNGGU';
    else if (f === 'DISETUJUI')    opts.status = 'DISETUJUI';
    else if (f === 'DITOLAK')      opts.status = 'DITOLAK';
    else if (f === 'HARI_INI')     opts.filter = 'HARI_INI';
    else if (f === 'BESOK')        opts.filter = 'BESOK';
    else if (f === '7_HARI')       opts.filter = '7_HARI';
    if (this.hariFilterMulai())    opts.from = this.hariFilterMulai();
    if (this.hariFilterSelesai())  opts.to   = this.hariFilterSelesai();

    this.izinHariSvc.getAll(k.id, opts).subscribe({
      next: data => { this.listIzinHari.set(data); this.hariLoading.set(false); },
      error: ()   => { this.hariLoading.set(false); this.showToast('Gagal memuat izin hari.', 'danger'); }
    });
  }

  // ── Format tanggal untuk Izin Hari ───────────────────────
  formatTanggalHari(tgl: string): string {
    if (!tgl) return '—';
    const d   = new Date(tgl + 'T00:00:00');
    const hari = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'][d.getDay()];
    const bln  = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${hari}, ${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()}`;
  }

  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Keamanan: KARYAWAN hanya boleh akses izin miliknya sendiri
    const user = this.auth.currentUser() as User | null;
    if (user?.role === 'KARYAWAN' && user.karyawanId !== id) {
      this.router.navigate(['/karyawan', user.karyawanId, 'izin']);
      return;
    }

    this.karyawanSvc.findById(id).subscribe({
      next: k  => { this.karyawan.set(k); this.loadIzinJam(); this.loadIzinHari(); },
      error: () => this.error.set('Gagal memuat data karyawan.')
    });
  }
}
