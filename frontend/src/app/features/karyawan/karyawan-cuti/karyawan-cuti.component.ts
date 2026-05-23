import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { CutiService } from '../../../core/services/cuti.service';
import { AuthService } from '../../../core/services/auth.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { User } from '../../../core/models/user.model';
import {
  Cuti, CutiRequest, CutiRiwayat, JenisCuti, SesiSetengahHari, SisaCuti
} from '../../../core/models/cuti.model';
import { StatusIzin } from '../../../core/models/izin-hari.model';

type StatusTab = 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';
type QuickFilter = '' | 'HARI_INI' | 'BESOK' | '7_HARI';

@Component({
  selector: 'app-karyawan-cuti',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './karyawan-cuti.component.html',
  styleUrl: './karyawan-cuti.component.scss'
})
export class KaryawanCutiComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private router      = inject(Router);
  private auth        = inject(AuthService);
  private karyawanSvc = inject(KaryawanService);
  private cutiSvc     = inject(CutiService);

  karyawan = signal<Karyawan | null>(null);
  loading  = signal(false);
  error    = signal('');

  readonly isKaryawan = computed(() =>
    (this.auth.currentUser() as User | null)?.role === 'KARYAWAN');

  // Sisa cuti
  sisa = signal<SisaCuti | null>(null);

  // Tabs / filter
  statusTab    = signal<StatusTab>('PENGAJUAN');
  quickFilter  = signal<QuickFilter>('');
  filterMulai  = signal('');
  filterSelesai= signal('');
  filterJenis  = signal<JenisCuti | ''>('');

  // Data
  list = signal<Cuti[]>([]);

  // Pagination
  page     = signal(1);
  pageSize = signal(10);
  total       = computed(() => this.list().length);
  totalPages  = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));
  rows        = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.list().slice(start, start + this.pageSize());
  });
  infoStart   = computed(() => this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1);
  infoEnd     = computed(() => Math.min(this.page() * this.pageSize(), this.total()));
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const cur   = this.page();
    const arr: number[] = [];
    for (let p = Math.max(1, cur - 2); p <= Math.min(total, cur + 2); p++) arr.push(p);
    return arr;
  });

  // Dropdown tambah
  showTambahMenu = signal(false);

  // Modal Tambah/Edit
  showFormModal = signal(false);
  editId        = signal<number | null>(null);
  saving        = signal(false);
  errorForm     = signal('');
  lampiranFile: File | null = null;
  lampiranNama  = signal('');

  form = signal<CutiRequest>({
    jenisCuti: 'TAHUNAN',
    tanggalMulai: '',
    tanggalSelesai: '',
    sesiSetengahHari: 'PAGI',
    keperluan: '',
    mengurangiSisaCuti: true
  });

  // Modal Ubah Sisa Cuti
  showSisaModal = signal(false);
  sisaForm = signal<{
    sisaCuti: number | null;
    tglCutiBerakhir: string;
    pembaruanCutiAktif: boolean;
    periodePembaruanBulan: number;
    jumlahCutiPembaruan: number;
    tambahkanSisaCutiSebelumnya: boolean;
    tglPembaruanBerikutnya: string;
  }>({
    sisaCuti: null,
    tglCutiBerakhir: '',
    pembaruanCutiAktif: false,
    periodePembaruanBulan: 12,
    jumlahCutiPembaruan: 12,
    tambahkanSisaCutiSebelumnya: false,
    tglPembaruanBerikutnya: '',
  });
  savingSisa = signal(false);

  // Modal Tolak
  showTolakModal = signal(false);
  tolakItem      = signal<Cuti | null>(null);
  tolakCatatan   = signal('');

  // Modal Riwayat per cuti
  showRiwayatModal = signal(false);
  riwayatLoading   = signal(false);
  riwayatList      = signal<CutiRiwayat[]>([]);

  // Konfirmasi hapus
  konfirmasiHapusId = signal<number | null>(null);

  // Toast
  toastMsg  = signal('');
  toastType = signal<'success' | 'danger'>('success');
  private _toastTimer: any;

  // ── helpers ─────────────────────────────────────────────
  showToast(msg: string, type: 'success' | 'danger' = 'success'): void {
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this.toastMsg.set(msg); this.toastType.set(type);
    this._toastTimer = setTimeout(() => this.toastMsg.set(''), 3000);
  }

  jenisLabel(j: JenisCuti): string {
    return j === 'TAHUNAN' ? 'Cuti Tahunan'
         : j === 'SETENGAH_HARI' ? 'Cuti Setengah Hari'
         : 'Cuti Khusus';
  }

  formatTanggal(tgl?: string): string {
    if (!tgl) return '—';
    const d = new Date(tgl + 'T00:00:00');
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()}`;
  }

  formatDateTime(dt?: string): string {
    if (!dt) return '';
    const d = new Date(dt);
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()} `
         + `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  }

  statusLabel(s: StatusIzin): string {
    return s === 'MENUNGGU'  ? 'Menunggu'
         : s === 'DISETUJUI' ? 'Disetujui'
         : s === 'DITOLAK'   ? 'Ditolak'
         : s;
  }

  statusBadgeClass(s: StatusIzin): string {
    return s === 'DISETUJUI' ? 'badge bg-success'
         : s === 'DITOLAK'   ? 'badge bg-danger'
         : 'badge bg-warning text-dark';
  }

  // ── tabs / filter ──────────────────────────────────────
  setStatusTab(t: StatusTab): void {
    this.statusTab.set(t);
    this.quickFilter.set('');
    this.page.set(1);
    this.load();
  }

  setQuickFilter(f: QuickFilter): void {
    const next: QuickFilter = this.quickFilter() === f ? '' : f;
    this.quickFilter.set(next);
    // Quick filter ditujukan untuk cuti yang sudah disetujui (sedang/akan berlangsung)
    if (next) this.statusTab.set('DISETUJUI');
    this.page.set(1);
    this.load();
  }

  applyFilter(): void { this.page.set(1); this.load(); }
  resetFilter(): void {
    this.filterMulai.set(''); this.filterSelesai.set(''); this.filterJenis.set('');
    this.page.set(1); this.load();
  }

  // ── data ───────────────────────────────────────────────
  load(): void {
    const k = this.karyawan(); if (!k) return;
    this.loading.set(true);
    const opts: any = {};
    const status = this.mapStatus();
    if (status) opts.status = status;
    if (this.filterJenis()) opts.jenis = this.filterJenis();
    if (this.filterMulai()) opts.from  = this.filterMulai();
    if (this.filterSelesai()) opts.to  = this.filterSelesai();
    if (this.quickFilter()) opts.filter = this.quickFilter();

    this.cutiSvc.getAll(k.id, opts).subscribe({
      next: data => { this.list.set(data); this.loading.set(false); },
      error: () => { this.loading.set(false); this.showToast('Gagal memuat data cuti.', 'danger'); }
    });
  }

  mapStatus(): StatusIzin | undefined {
    const t = this.statusTab();
    if (t === 'PENGAJUAN') return 'MENUNGGU';
    if (t === 'DISETUJUI') return 'DISETUJUI';
    if (t === 'DITOLAK')   return 'DITOLAK';
    return undefined;
  }

  loadSisa(): void {
    const k = this.karyawan(); if (!k) return;
    this.cutiSvc.getSisa(k.id).subscribe({
      next: s => this.sisa.set(s),
      error: () => {}
    });
  }

  // ── tambah ─────────────────────────────────────────────
  openTambah(jenis: JenisCuti): void {
    this.editId.set(null);
    this.errorForm.set('');
    this.lampiranFile = null;
    this.lampiranNama.set('');
    this.form.set({
      jenisCuti: jenis,
      tanggalMulai: '',
      tanggalSelesai: '',
      sesiSetengahHari: jenis === 'SETENGAH_HARI' ? 'PAGI' : undefined,
      keperluan: '',
      mengurangiSisaCuti: jenis !== 'KHUSUS'
    });
    this.showTambahMenu.set(false);
    this.showFormModal.set(true);
  }

  openEdit(c: Cuti): void {
    this.editId.set(c.id);
    this.errorForm.set('');
    this.lampiranFile = null;
    this.lampiranNama.set(c.lampiranUrl ? (c.lampiranUrl.split('/').pop() ?? '') : '');
    this.form.set({
      jenisCuti: c.jenisCuti,
      tanggalMulai: c.tanggalMulai,
      tanggalSelesai: c.tanggalSelesai,
      sesiSetengahHari: c.sesiSetengahHari ?? 'PAGI',
      keperluan: c.keperluan,
      mengurangiSisaCuti: c.mengurangiSisaCuti
    });
    this.showFormModal.set(true);
  }

  closeForm(): void { this.showFormModal.set(false); }

  updateForm<K extends keyof CutiRequest>(field: K, value: CutiRequest[K]): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  onLampiranChange(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    if (input.files?.length) {
      this.lampiranFile = input.files[0];
      this.lampiranNama.set(input.files[0].name);
    }
  }

  simpan(): void {
    const f = this.form();
    const k = this.karyawan(); if (!k) return;
    if (!f.tanggalMulai) { this.errorForm.set('Tanggal mulai wajib diisi.'); return; }
    if (f.jenisCuti !== 'SETENGAH_HARI' && !f.tanggalSelesai) {
      this.errorForm.set('Tanggal selesai wajib diisi.'); return;
    }
    if (!f.keperluan?.trim()) { this.errorForm.set('Keperluan wajib diisi.'); return; }

    const req: CutiRequest = { ...f };
    if (req.jenisCuti === 'SETENGAH_HARI') {
      req.tanggalSelesai = req.tanggalMulai;
    } else {
      req.sesiSetengahHari = undefined;
    }

    this.saving.set(true);
    this.errorForm.set('');
    const id = this.editId();
    const obs = id
      ? this.cutiSvc.update(k.id, id, req, this.lampiranFile ?? undefined)
      : this.cutiSvc.create(k.id, req, this.lampiranFile ?? undefined);

    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? 'Cuti berhasil diperbarui.' : 'Cuti berhasil diajukan.');
        this.load(); this.loadSisa();
      },
      error: err => {
        this.errorForm.set(err?.error?.message ?? 'Gagal menyimpan cuti.');
        this.saving.set(false);
      }
    });
  }

  // ── status / hapus ─────────────────────────────────────
  setujui(c: Cuti): void {
    const k = this.karyawan(); if (!k) return;
    this.cutiSvc.updateStatus(k.id, c.id, 'DISETUJUI').subscribe({
      next: () => { this.showToast('Cuti disetujui.'); this.load(); this.loadSisa(); },
      error: () => this.showToast('Gagal menyetujui.', 'danger')
    });
  }

  openTolak(c: Cuti): void {
    this.tolakItem.set(c); this.tolakCatatan.set(''); this.showTolakModal.set(true);
  }

  konfirmasiTolak(): void {
    const c = this.tolakItem(); const k = this.karyawan();
    if (!c || !k) return;
    this.cutiSvc.updateStatus(k.id, c.id, 'DITOLAK', this.tolakCatatan() || undefined).subscribe({
      next: () => {
        this.showTolakModal.set(false);
        this.showToast('Cuti ditolak.');
        this.load(); this.loadSisa();
      },
      error: () => this.showToast('Gagal menolak cuti.', 'danger')
    });
  }

  hapus(id: number): void {
    const k = this.karyawan(); if (!k) return;
    this.cutiSvc.delete(k.id, id).subscribe({
      next: () => {
        this.konfirmasiHapusId.set(null);
        this.showToast('Cuti berhasil dihapus.');
        this.load(); this.loadSisa();
      },
      error: () => this.showToast('Gagal menghapus cuti.', 'danger')
    });
  }

  // ── riwayat ────────────────────────────────────────────
  openRiwayat(c: Cuti): void {
    const k = this.karyawan(); if (!k) return;
    this.riwayatList.set([]);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.cutiSvc.getRiwayat(k.id, c.id).subscribe({
      next: list => { this.riwayatList.set(list); this.riwayatLoading.set(false); },
      error: () => { this.riwayatLoading.set(false); this.showToast('Gagal memuat riwayat.', 'danger'); }
    });
  }

  // ── ubah sisa cuti ────────────────────────────────────
  openSisaModal(): void {
    const s = this.sisa();
    this.sisaForm.set({
      sisaCuti: s?.sisaCuti ?? 0,
      tglCutiBerakhir: s?.tglCutiBerakhir ?? '',
      pembaruanCutiAktif:          s?.pembaruanCutiAktif ?? false,
      periodePembaruanBulan:       s?.periodePembaruanBulan ?? 12,
      jumlahCutiPembaruan:         s?.jumlahCutiPembaruan ?? 12,
      tambahkanSisaCutiSebelumnya: s?.tambahkanSisaCutiSebelumnya ?? false,
      tglPembaruanBerikutnya:      s?.tglPembaruanBerikutnya ?? '',
    });
    this.showSisaModal.set(true);
  }

  simpanSisa(): void {
    const k = this.karyawan(); if (!k) return;
    const f = this.sisaForm();
    this.savingSisa.set(true);
    this.cutiSvc.updateSisa(k.id, {
      sisaCuti:        f.sisaCuti ?? 0,
      tglCutiBerakhir: f.tglCutiBerakhir || undefined,
      pembaruanCutiAktif:          f.pembaruanCutiAktif,
      periodePembaruanBulan:       Number(f.periodePembaruanBulan) || 12,
      jumlahCutiPembaruan:         Number(f.jumlahCutiPembaruan)   || 0,
      tambahkanSisaCutiSebelumnya: f.tambahkanSisaCutiSebelumnya,
      tglPembaruanBerikutnya:      f.tglPembaruanBerikutnya || undefined,
    }).subscribe({
      next: s => {
        this.sisa.set(s);
        this.savingSisa.set(false);
        this.showSisaModal.set(false);
        this.showToast('Sisa cuti diperbarui.');
      },
      error: () => { this.savingSisa.set(false); this.showToast('Gagal memperbarui.', 'danger'); }
    });
  }

  /** Format tanggal ID untuk info text. */
  formatTglId(t?: string): string {
    if (!t) return '-';
    return new Date(t).toLocaleDateString('id-ID',
      { day: '2-digit', month: 'short', year: 'numeric' });
  }

  // ── ekspor ─────────────────────────────────────────────
  eksporting = signal(false);
  ekspor(): void {
    const k = this.karyawan(); if (!k) return;
    this.eksporting.set(true);
    const opts: any = {};
    const st = this.mapStatus(); if (st) opts.status = st;
    if (this.filterJenis())   opts.jenis = this.filterJenis();
    if (this.filterMulai())   opts.from  = this.filterMulai();
    if (this.filterSelesai()) opts.to    = this.filterSelesai();
    this.cutiSvc.exportExcel(k.id, opts).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cuti-${new Date().toISOString().slice(0,10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.eksporting.set(false);
        this.showToast('File Excel berhasil diunduh.');
      },
      error: () => { this.eksporting.set(false); this.showToast('Gagal mengekspor.', 'danger'); }
    });
  }

  // ── lifecycle ──────────────────────────────────────────
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const user = this.auth.currentUser() as User | null;
    if (user?.role === 'KARYAWAN' && user.karyawanId !== id) {
      this.router.navigate(['/karyawan', user.karyawanId, 'cuti']);
      return;
    }
    this.karyawanSvc.findById(id).subscribe({
      next: k  => { this.karyawan.set(k); this.load(); this.loadSisa(); },
      error: () => this.error.set('Gagal memuat data karyawan.')
    });
  }
}
