import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CutiService } from '../../../core/services/cuti.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { Cuti, JenisCuti, JENIS_CUTI_KHUSUS_LIST } from '../../../core/models/cuti.model';
import { StatusIzin } from '../../../core/models/izin-hari.model';
import { Divisi } from '../../../core/models/divisi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

declare const Swal: any;

type TabStatus = 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';
type ModalJenis = 'TAHUNAN' | 'SETENGAH_HARI' | 'KHUSUS' | null;

@Component({
  selector: 'app-cuti-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './cuti-admin.component.html',
  styleUrl: './cuti-admin.component.scss'
})
export class CutiAdminComponent implements OnInit {
  private cutiSvc     = inject(CutiService);
  private divisiSvc   = inject(DivisiService);
  private karyawanSvc = inject(KaryawanService);

  // ── State ──────────────────────────────────────────────────
  activeTab   = signal<TabStatus>('PENGAJUAN');
  loading     = signal(false);
  error       = signal('');
  toastMsg    = signal('');
  toastType   = signal<'success'|'danger'>('success');

  allData       = signal<Cuti[]>([]);
  totalMenunggu = signal(0);

  divisiList   = signal<Divisi[]>([]);
  karyawanList = signal<Karyawan[]>([]);

  // Filter
  filterFrom   = signal('');
  filterTo     = signal('');
  filterJenis  = signal<JenisCuti | ''>('');
  filterDivisi = signal<number|null>(null);
  filterCari   = signal('');
  quickFilter  = signal('');

  // Pagination
  page     = signal(1);
  pageSize = 10;

  // Dropdown tambah
  showTambahMenu = signal(false);

  // Modal
  modalJenis      = signal<ModalJenis>(null);
  showModal       = signal(false);
  modalKaryawanId = signal<number|null>(null);
  modalKaryawanQ  = signal('');
  showKaryawanDrop = signal(false);
  modalTanggal    = signal('');
  modalKeperluan  = signal('');
  modalKhususJenis = signal('');
  modalKhususQ    = signal('');
  showKhususDrop  = signal(false);
  modalLampiran   = signal<File|null>(null);
  modalLampiranNama = signal('');
  modalSaving     = signal(false);
  modalError      = signal('');

  // Modal kalender setengah hari
  calendarVisible = signal(false);
  calYear  = signal(new Date().getFullYear());
  calMonth = signal(new Date().getMonth()); // 0-based

  // Modal Tolak
  showTolakModal = signal(false);
  tolakId        = signal<number|null>(null);
  tolakCatatan   = signal('');
  tolakSaving    = signal(false);

  // ── Computed ───────────────────────────────────────────────
  filteredData = computed(() => {
    const statusMap: Record<TabStatus, StatusIzin> = {
      PENGAJUAN: 'MENUNGGU', DISETUJUI: 'DISETUJUI', DITOLAK: 'DITOLAK'
    };
    return this.allData().filter(d => d.status === statusMap[this.activeTab()]);
  });

  pagedData = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredData().slice(start, start + this.pageSize);
  });

  totalPages  = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)));
  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  // Karyawan search filter
  filteredKaryawan = computed(() => {
    const q = this.modalKaryawanQ().toLowerCase();
    if (!q) return this.karyawanList();
    return this.karyawanList().filter(k => k.namaLengkap.toLowerCase().includes(q));
  });

  filteredKhususList = computed(() => {
    const q = this.modalKhususQ().toLowerCase();
    if (!q) return JENIS_CUTI_KHUSUS_LIST;
    return JENIS_CUTI_KHUSUS_LIST.filter(j => j.toLowerCase().includes(q));
  });

  // Calendar
  calDays = computed(() => {
    const year = this.calYear();
    const month = this.calMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    // convert: Mon=0 ... Sun=6
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();
    const cells: { date: number; month: 'prev'|'cur'|'next'; full: string }[] = [];
    for (let i = offset - 1; i >= 0; i--) {
      const d = daysInPrev - i;
      cells.push({ date: d, month: 'prev', full: this.toIso(year, month - 1, d) });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ date: d, month: 'cur', full: this.toIso(year, month, d) });
    }
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++) {
      cells.push({ date: d, month: 'next', full: this.toIso(year, month + 1, d) });
    }
    return cells;
  });

  calMonthName = computed(() => {
    return new Date(this.calYear(), this.calMonth(), 1)
      .toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  });

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
    this.divisiSvc.findAll().subscribe(list => this.divisiList.set(list));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    const opts: any = {};
    if (this.filterFrom())  opts.from  = this.filterFrom();
    if (this.filterTo())    opts.to    = this.filterTo();
    if (this.filterJenis()) opts.jenis = this.filterJenis();
    if (this.filterDivisi()) opts.divisiId = this.filterDivisi();
    if (this.filterCari())  opts.cari  = this.filterCari();
    if (this.quickFilter()) opts.filter = this.quickFilter();

    this.cutiSvc.getAllAdmin(opts).subscribe({
      next: res => {
        this.allData.set(res.cuti);
        this.totalMenunggu.set(res.totalMenunggu);
        this.loading.set(false);
        this.page.set(1);
      },
      error: () => {
        this.error.set('Gagal memuat data cuti.');
        this.loading.set(false);
      }
    });
  }

  setTab(tab: TabStatus) { this.activeTab.set(tab); this.page.set(1); }

  setQuickFilter(f: string) {
    this.quickFilter.set(this.quickFilter() === f ? '' : f);
    this.filterFrom.set(''); this.filterTo.set('');
    this.load();
  }

  onCari() { this.load(); }

  // ── Approve ────────────────────────────────────────────────
  approve(item: Cuti) {
    Swal.fire({
      title: 'Setujui Cuti?',
      text: `Cuti ${item.namaKaryawan} akan disetujui.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya, Setujui',
      cancelButtonText: 'Batal'
    }).then((result: any) => {
      if (result?.isConfirmed || result?.value === true) {
        this.cutiSvc.updateStatusAdmin(item.id, 'DISETUJUI').subscribe({
          next: () => { this.showToast('Cuti berhasil disetujui.'); this.load(); },
          error: () => this.showToast('Gagal menyetujui.', 'danger')
        });
      }
    });
  }

  // ── Tolak ──────────────────────────────────────────────────
  openTolak(item: Cuti) {
    this.tolakId.set(item.id);
    this.tolakCatatan.set('');
    this.showTolakModal.set(true);
  }

  submitTolak() {
    const id = this.tolakId(); if (!id) return;
    this.tolakSaving.set(true);
    this.cutiSvc.updateStatusAdmin(id, 'DITOLAK', this.tolakCatatan()).subscribe({
      next: () => {
        this.showTolakModal.set(false);
        this.tolakSaving.set(false);
        this.showToast('Cuti berhasil ditolak.');
        this.load();
      },
      error: () => { this.tolakSaving.set(false); this.showToast('Gagal menolak.', 'danger'); }
    });
  }

  // ── Delete ─────────────────────────────────────────────────
  delete(item: Cuti) {
    Swal.fire({
      title: 'Hapus Cuti?',
      text: `Data cuti ${item.namaKaryawan} akan dihapus permanen.`,
      icon: 'warning', showCancelButton: true,
      confirmButtonText: 'Ya, Hapus', cancelButtonText: 'Batal',
      confirmButtonColor: '#dc3545'
    }).then((result: any) => {
      if (result?.isConfirmed || result?.value === true) {
        this.cutiSvc.deleteAdmin(item.id).subscribe({
          next: () => { this.showToast('Cuti berhasil dihapus.'); this.load(); },
          error: () => this.showToast('Gagal menghapus.', 'danger')
        });
      }
    });
  }

  // ── Ekspor Excel ───────────────────────────────────────────
  eksporExcel() {
    this.cutiSvc.exportExcelAdmin({
      from: this.filterFrom() || undefined,
      to:   this.filterTo()   || undefined,
      jenis: (this.filterJenis() as JenisCuti) || undefined
    }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'cuti.xlsx'; a.click();
      URL.revokeObjectURL(url);
    });
  }

  // ── Modal Tambah ───────────────────────────────────────────
  openModal(jenis: ModalJenis) {
    this.karyawanSvc.findAll().subscribe(r => {
      this.karyawanList.set(Array.isArray(r) ? r : (r as any)?.karyawan ?? []);
    });
    this.modalJenis.set(jenis);
    this.modalKaryawanId.set(null);
    this.modalKaryawanQ.set('');
    this.modalTanggal.set('');
    this.modalKeperluan.set('');
    this.modalKhususJenis.set('');
    this.modalKhususQ.set('');
    this.modalLampiran.set(null);
    this.modalLampiranNama.set('');
    this.modalError.set('');
    this.calendarVisible.set(false);
    this.showTambahMenu.set(false);
    this.showModal.set(true);
  }

  selectKaryawan(k: Karyawan) {
    this.modalKaryawanId.set(k.id);
    this.modalKaryawanQ.set(k.namaLengkap);
    this.showKaryawanDrop.set(false);
  }

  selectKhusus(j: string) {
    this.modalKhususJenis.set(j);
    this.modalKhususQ.set(j);
    this.showKhususDrop.set(false);
  }

  cellColor(cell: { month: string; full: string }, weekDays: string[]): string {
    if (cell.month !== 'cur') return '#bbb';
    const day = new Date(cell.full + 'T00:00').getDay();
    if (weekDays.indexOf('Min') >= 0 && day === 0) return '#e53935';
    if (day === 6) return '#1e88e5';
    return '#333';
  }

  selectDate(full: string) {
    this.modalTanggal.set(full);
    this.calendarVisible.set(false);
  }

  prevMonth() {
    if (this.calMonth() === 0) { this.calMonth.set(11); this.calYear.update(y => y - 1); }
    else { this.calMonth.update(m => m - 1); }
  }
  nextMonth() {
    if (this.calMonth() === 11) { this.calMonth.set(0); this.calYear.update(y => y + 1); }
    else { this.calMonth.update(m => m + 1); }
  }

  onLampiranChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.modalLampiran.set(file);
    this.modalLampiranNama.set(file?.name ?? '');
  }

  submitModal() {
    const karyawanId = this.modalKaryawanId();
    if (!karyawanId) { this.modalError.set('Pilih karyawan terlebih dahulu.'); return; }
    if (!this.modalTanggal()) { this.modalError.set('Tanggal cuti harus diisi.'); return; }
    if (!this.modalKeperluan().trim()) { this.modalError.set('Keperluan harus diisi.'); return; }
    const jenis = this.modalJenis()!;
    if (jenis === 'KHUSUS' && !this.modalKhususJenis()) {
      this.modalError.set('Jenis cuti khusus harus dipilih.'); return;
    }

    const req: any = {
      jenisCuti: jenis,
      tanggalMulai: this.modalTanggal(),
      tanggalSelesai: this.modalTanggal(),
      keperluan: jenis === 'KHUSUS' ? this.modalKhususJenis() : this.modalKeperluan(),
      mengurangiSisaCuti: jenis !== 'KHUSUS'
    };
    if (jenis === 'KHUSUS') {
      req.keperluan = `${this.modalKhususJenis()} — ${this.modalKeperluan()}`.trim();
    }

    this.modalSaving.set(true);
    this.modalError.set('');
    this.cutiSvc.create(karyawanId, req, this.modalLampiran() ?? undefined).subscribe({
      next: () => {
        this.showModal.set(false);
        this.modalSaving.set(false);
        this.showToast('Cuti berhasil ditambahkan.');
        this.load();
      },
      error: (err) => {
        this.modalSaving.set(false);
        this.modalError.set(err?.error?.message ?? 'Gagal menyimpan. Coba lagi.');
      }
    });
  }

  // ── Helpers ────────────────────────────────────────────────
  toIso(year: number, month: number, day: number): string {
    const d = new Date(year, month, day);
    return d.toISOString().slice(0, 10);
  }

  formatTanggal(t: string) {
    if (!t) return '';
    const d = new Date(t + 'T00:00:00');
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()}`;
  }

  formatTanggalDisplay(t: string) {
    if (!t) return '';
    // Format to dd/mm/yyyy
    const d = new Date(t + 'T00:00:00');
    return `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`;
  }

  jenisLabel(j: JenisCuti): string {
    return j === 'TAHUNAN' ? 'Cuti Tahunan'
         : j === 'SETENGAH_HARI' ? 'Cuti Setengah Hari'
         : 'Cuti Khusus';
  }

  modalJenisLabel(): string {
    const j = this.modalJenis();
    if (!j) return '';
    return j === 'TAHUNAN' ? 'Cuti Tahunan'
         : j === 'SETENGAH_HARI' ? 'Cuti Setengah Hari'
         : 'Cuti Khusus';
  }

  statusBadgeClass(s: StatusIzin): string {
    return s === 'DISETUJUI' ? 'badge bg-success'
         : s === 'DITOLAK'   ? 'badge bg-danger'
         : 'badge bg-warning text-dark';
  }

  statusLabel(s: StatusIzin): string {
    return s === 'DISETUJUI' ? 'Disetujui' : s === 'DITOLAK' ? 'Ditolak' : 'Menunggu';
  }

  showToast(msg: string, type: 'success'|'danger' = 'success') {
    this.toastMsg.set(msg);
    this.toastType.set(type);
    setTimeout(() => this.toastMsg.set(''), 3000);
  }

  goPage(p: number) {
    if (p >= 1 && p <= this.totalPages()) this.page.set(p);
  }

  weekDays = ['Sen','Sel','Rab','Kam','Jum','Sab','Min'];
}
