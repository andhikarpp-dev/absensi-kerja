import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CutiService } from '../../../core/services/cuti.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { JabatanService } from '../../../core/services/jabatan.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { Divisi } from '../../../core/models/divisi.model';
import { Jabatan } from '../../../core/models/jabatan.model';
import { SisaCuti, UpdateSisaCutiRequest, SisaCutiRiwayatItem, PengaturanCutiKhusus, PengaturanCutiKhususRequest, PengaturanCutiSetengahHari, PengaturanCutiSetengahHariRequest } from '../../../core/models/cuti.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

type TabType = 'kuota' | 'divisi' | 'khusus' | 'setengahHari';
type SortCol = 'namaLengkap' | 'divisiJabatan' | 'tglMulaiBekerja' | 'tglMulaiDapatCuti' | 'sisaCuti' | 'tglCutiBeakhir';
type SortDir = 'asc' | 'desc';

@Component({
  selector: 'app-cuti-pengaturan',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './cuti-pengaturan.component.html',
  styleUrl: './cuti-pengaturan.component.scss'
})
export class CutiPengaturanComponent implements OnInit {
  private cutiSvc    = inject(CutiService);
  private divisiSvc  = inject(DivisiService);
  private jabatanSvc = inject(JabatanService);

  // ── Tab ────────────────────────────────────────────────────
  activeTab = signal<TabType>('kuota');

  // ── State ──────────────────────────────────────────────────
  loading   = signal(false);
  error     = signal('');
  toastMsg  = signal('');
  toastType = signal<'success' | 'danger'>('success');

  karyawanList = signal<Karyawan[]>([]);
  divisiList   = signal<Divisi[]>([]);
  jabatanList  = signal<Jabatan[]>([]);

  // Filter
  filterDivisi  = signal<number | null>(null);
  filterJabatan = signal<number | null>(null);
  filterCari    = signal('');
  searchInput   = signal('');

  // DataTable
  page         = signal(1);
  pageSize     = signal(10);
  pageSizeOptions = [10, 25, 50, 100];
  sortCol      = signal<SortCol>('namaLengkap');
  sortDir      = signal<SortDir>('asc');

  // Modal Riwayat Transaksi
  showRiwayatModal = signal(false);
  riwayatKaryawan  = signal<Karyawan | null>(null);
  riwayatList      = signal<SisaCutiRiwayatItem[]>([]);
  riwayatLoading   = signal(false);

  // Modal Pengaturan Pembaruan Otomatis
  showPembaruanModal = signal(false);
  pembaruanKaryawan  = signal<Karyawan | null>(null);
  pembaruanSisa      = signal<SisaCuti | null>(null);
  pembaruanLoading   = signal(false);
  pembaruanSaving    = signal(false);
  pembaruanError     = signal('');
  fPeriode           = signal(12);
  fJumlah            = signal(12);
  fSisaSebelumnya    = signal<'tambahkan' | 'hapus'>('tambahkan');
  fAktif             = signal(true);

  // ── Computed ───────────────────────────────────────────────
  filtered = computed(() => {
    const cari = this.filterCari().toLowerCase();
    let list = this.karyawanList().filter(k => {
      if (this.filterDivisi() && k.divisiId !== this.filterDivisi()) return false;
      if (this.filterJabatan() && k.jabatanId !== this.filterJabatan()) return false;
      if (cari) {
        const label = this.divisiJabatanLabel(k).toLowerCase();
        if (!k.namaLengkap.toLowerCase().includes(cari) && !label.includes(cari)) return false;
      }
      return true;
    });

    const col = this.sortCol();
    const dir = this.sortDir() === 'asc' ? 1 : -1;
    list = [...list].sort((a, b) => {
      let va: any, vb: any;
      switch (col) {
        case 'namaLengkap':       va = a.namaLengkap ?? '';        vb = b.namaLengkap ?? '';        break;
        case 'divisiJabatan':     va = this.divisiJabatanLabel(a); vb = this.divisiJabatanLabel(b); break;
        case 'tglMulaiBekerja':   va = a.tglMulaiBekerja ?? '';    vb = b.tglMulaiBekerja ?? '';    break;
        case 'tglMulaiDapatCuti': va = a.tglMulaiDapatCuti ?? '';  vb = b.tglMulaiDapatCuti ?? '';  break;
        case 'sisaCuti':          va = a.sisaCuti ?? -1;           vb = b.sisaCuti ?? -1;           break;
        case 'tglCutiBeakhir':    va = a.tglCutiBeakhir ?? '';     vb = b.tglCutiBeakhir ?? '';     break;
        default: va = ''; vb = '';
      }
      if (va < vb) return -1 * dir;
      if (va > vb) return  1 * dir;
      return 0;
    });
    return list;
  });

  pagedData   = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });
  totalPages  = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize())));
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const cur   = this.page();
    const pages: number[] = [];
    for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++) pages.push(i);
    return pages;
  });
  showingInfo = computed(() => {
    const total = this.filtered().length;
    if (total === 0) return 'Tidak ada data';
    const from = (this.page() - 1) * this.pageSize() + 1;
    const to   = Math.min(this.page() * this.pageSize(), total);
    return `Menampilkan ${from}–${to} dari ${total} data`;
  });

  pembaruanInfo = computed(() => {
    const sisa = this.pembaruanSisa();
    if (!sisa) return '';
    const next   = sisa.tglPembaruanBerikutnya;
    const jumlah = sisa.jumlahCutiPembaruan ?? 12;
    if (!next) return '';
    return `Sisa cuti akan otomatis ditambahkan sebanyak ${jumlah} pada ${this.fmtDate(next)}.`;
  });

  mulaiBekerjaInfo = computed(() => {
    const k = this.pembaruanKaryawan();
    if (!k?.tglMulaiBekerja) return '';
    const mulai     = this.fmtDate(k.tglMulaiBekerja);
    const dapatCuti = k.tglMulaiDapatCuti ? this.fmtDate(k.tglMulaiDapatCuti)
                                           : this.addYear(k.tglMulaiBekerja, 1);
    return `Karyawan mulai bekerja pada ${mulai}, pertama kali mendapatkan cuti pada tanggal ${dapatCuti}.`;
  });

  // ── Init ───────────────────────────────────────────────────
  ngOnInit() {
    this.loadAll();
    this.loadCutiKhusus();
    this.loadSetengahHari();
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.jabatanSvc.findAll().subscribe(j => this.jabatanList.set(j));
  }

  loadAll() {
    this.loading.set(true);
    this.error.set('');
    this.cutiSvc.getLaporanKaryawan().subscribe({
      next: list => { this.karyawanList.set(list); this.loading.set(false); },
      error: () => { this.error.set('Gagal memuat data.'); this.loading.set(false); }
    });
  }

  applyFilter() {
    this.filterCari.set(this.searchInput());
    this.page.set(1);
  }

  onDivisiChange()   { this.page.set(1); }
  onJabatanChange()  { this.page.set(1); }
  onPageSizeChange() { this.page.set(1); }

  goPage(p: number) {
    if (p >= 1 && p <= this.totalPages()) this.page.set(p);
  }

  setSort(col: SortCol) {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCol.set(col);
      this.sortDir.set('asc');
    }
    this.page.set(1);
  }

  sortIcon(col: SortCol): string {
    if (this.sortCol() !== col) return 'bx-sort';
    return this.sortDir() === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  // ── Modal Riwayat Transaksi ────────────────────────────────
  openRiwayat(k: Karyawan) {
    this.riwayatKaryawan.set(k);
    this.riwayatList.set([]);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.cutiSvc.getRiwayatTransaksi(k.id).subscribe({
      next: list => { this.riwayatList.set(list); this.riwayatLoading.set(false); },
      error: () => { this.riwayatLoading.set(false); }
    });
  }

  closeRiwayat() { this.showRiwayatModal.set(false); }

  // ── Modal Pembaruan Otomatis ───────────────────────────────
  openPembaruan(k: Karyawan) {
    this.pembaruanKaryawan.set(k);
    this.pembaruanSisa.set(null);
    this.pembaruanError.set('');
    this.pembaruanLoading.set(true);
    this.showPembaruanModal.set(true);
    this.cutiSvc.getLaporanSisa(k.id).subscribe({
      next: sisa => {
        this.pembaruanSisa.set(sisa);
        this.fPeriode.set(sisa.periodePembaruanBulan ?? 12);
        this.fJumlah.set(sisa.jumlahCutiPembaruan ?? 12);
        this.fSisaSebelumnya.set(sisa.tambahkanSisaCutiSebelumnya ? 'tambahkan' : 'hapus');
        this.fAktif.set(sisa.pembaruanCutiAktif ?? false);
        this.pembaruanLoading.set(false);
      },
      error: () => { this.pembaruanLoading.set(false); }
    });
  }

  closePembaruan() { this.showPembaruanModal.set(false); }

  savePembaruan() {
    const k = this.pembaruanKaryawan();
    if (!k) return;
    this.pembaruanSaving.set(true);
    this.pembaruanError.set('');

    const req: UpdateSisaCutiRequest = {
      pembaruanCutiAktif:          this.fAktif(),
      periodePembaruanBulan:       this.fPeriode(),
      jumlahCutiPembaruan:         this.fJumlah(),
      tambahkanSisaCutiSebelumnya: this.fSisaSebelumnya() === 'tambahkan',
    };

    this.cutiSvc.updateLaporanSisa(k.id, req).subscribe({
      next: sisa => {
        this.pembaruanSisa.set(sisa);
        this.pembaruanSaving.set(false);
        this.karyawanList.update(list => list.map(item =>
          item.id === k.id ? { ...item,
            pembaruanCutiAktif: sisa.pembaruanCutiAktif,
            tglPembaruanBerikutnya: sisa.tglPembaruanBerikutnya
          } : item
        ));
        this.closePembaruan();
        this.showToast('Pengaturan pembaruan otomatis disimpan.');
      },
      error: () => {
        this.pembaruanError.set('Gagal menyimpan pengaturan.');
        this.pembaruanSaving.set(false);
      }
    });
  }

  // ── Edit Sisa Cuti Inline ──────────────────────────────────
  editKaryawanId   = signal<number | null>(null);
  editSisaCuti     = signal<number>(0);
  editTglMulai     = signal('');
  editTglBerakhir  = signal('');
  editSaving       = signal(false);

  startEdit(k: Karyawan) {
    this.editKaryawanId.set(k.id);
    this.editSisaCuti.set(k.sisaCuti ?? 0);
    this.editTglMulai.set(k.tglMulaiDapatCuti ?? '');
    this.editTglBerakhir.set(k.tglCutiBeakhir ?? '');
  }

  cancelEdit() { this.editKaryawanId.set(null); }

  saveEdit(k: Karyawan) {
    this.editSaving.set(true);
    const req: UpdateSisaCutiRequest = {
      sisaCuti:        this.editSisaCuti(),
      tglCutiBerakhir: this.editTglBerakhir() || undefined,
    };
    this.cutiSvc.updateLaporanSisa(k.id, req).subscribe({
      next: sisa => {
        this.editSaving.set(false);
        this.editKaryawanId.set(null);
        this.karyawanList.update(list => list.map(item =>
          item.id === k.id ? {
            ...item,
            sisaCuti:         sisa.sisaCuti,
            tglCutiBeakhir:   sisa.tglCutiBerakhir,
          } : item
        ));
        this.showToast('Data cuti berhasil disimpan.');
      },
      error: () => {
        this.editSaving.set(false);
        this.showToast('Gagal menyimpan data cuti.', 'danger');
      }
    });
  }

  // ── Helpers ────────────────────────────────────────────────
  fmtDate(d: string | undefined | null): string {
    if (!d) return '-';
    const dateStr = d.substring(0, 10);
    const parts   = dateStr.split('-');
    if (parts.length < 3) return d;
    const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des'];
    const base = `${parseInt(parts[2])} ${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
    if (d.length > 10 && d.includes('T')) {
      const timePart = d.substring(11, 16);
      return `${base} @ ${timePart}`;
    }
    return base;
  }

  fmtDateDash(d: string | undefined | null): string {
    if (!d) return '';
    return d.substring(0, 10).split('-').reverse().join('/');
  }

  addYear(d: string, years: number): string {
    const date = new Date(d + 'T00:00');
    date.setFullYear(date.getFullYear() + years);
    const m = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des'];
    return `${date.getDate()} ${m[date.getMonth()]} ${date.getFullYear()}`;
  }

  divisiJabatanLabel(k: Karyawan): string {
    const parts = [k.namaDivisi, k.namaJabatan].filter(Boolean);
    return parts.join(' - ') || '-';
  }

  periodeOptions = [6, 12, 18, 24];

  // ── Cuti Khusus ───────────────────────────────────────────
  cutiKhususList    = signal<PengaturanCutiKhusus[]>([]);
  cutiKhususLoading = signal(false);

  private loadCutiKhusus() {
    this.cutiKhususLoading.set(true);
    this.cutiSvc.getPengaturanCutiKhusus().subscribe({
      next: list => { this.cutiKhususList.set(list); this.cutiKhususLoading.set(false); },
      error: () => { this.cutiKhususLoading.set(false); this.showToast('Gagal memuat cuti khusus.', 'danger'); }
    });
  }

  showCutiKhususModal = signal(false);
  cutiKhususEditId    = signal<number | null>(null);
  cutiKhususSaving    = signal(false);
  cutiKhususForm      = signal<PengaturanCutiKhususRequest>({
    nama: '', maksHariPerRequest: null, maksRequestPerTahun: null, maksHariPerTahun: null, aktif: true
  });

  openTambahCutiKhusus() {
    this.cutiKhususEditId.set(null);
    this.cutiKhususForm.set({ nama: '', maksHariPerRequest: null, maksRequestPerTahun: null, maksHariPerTahun: null, aktif: true });
    this.showCutiKhususModal.set(true);
  }

  openEditCutiKhusus(item: PengaturanCutiKhusus) {
    this.cutiKhususEditId.set(item.id);
    this.cutiKhususForm.set({
      nama: item.nama,
      maksHariPerRequest: item.maksHariPerRequest,
      maksRequestPerTahun: item.maksRequestPerTahun,
      maksHariPerTahun: item.maksHariPerTahun,
      aktif: item.aktif,
    });
    this.showCutiKhususModal.set(true);
  }

  simpanCutiKhusus() {
    const f = this.cutiKhususForm();
    if (!f.nama.trim()) return;
    this.cutiKhususSaving.set(true);
    const editId = this.cutiKhususEditId();
    const obs = editId !== null
      ? this.cutiSvc.updatePengaturanCutiKhusus(editId, f)
      : this.cutiSvc.createPengaturanCutiKhusus(f);
    obs.subscribe({
      next: saved => {
        this.cutiKhususSaving.set(false);
        this.showCutiKhususModal.set(false);
        if (editId !== null) {
          this.cutiKhususList.update(list => list.map(i => i.id === editId ? saved : i));
        } else {
          this.cutiKhususList.update(list => [...list, saved]);
        }
        this.showToast(editId !== null ? 'Cuti khusus diperbarui.' : 'Cuti khusus ditambahkan.');
      },
      error: () => { this.cutiKhususSaving.set(false); this.showToast('Gagal menyimpan.', 'danger'); }
    });
  }

  hapusCutiKhusus(id: number) {
    if (!confirm('Hapus cuti khusus ini?')) return;
    this.cutiSvc.deletePengaturanCutiKhusus(id).subscribe({
      next: () => {
        this.cutiKhususList.update(list => list.filter(i => i.id !== id));
        this.showToast('Cuti khusus dihapus.');
      },
      error: () => this.showToast('Gagal menghapus.', 'danger')
    });
  }

  toggleAktifCutiKhusus(id: number) {
    this.cutiSvc.toggleAktifCutiKhusus(id).subscribe({
      next: updated => {
        this.cutiKhususList.update(list => list.map(i => i.id === id ? updated : i));
      },
      error: () => this.showToast('Gagal mengubah status.', 'danger')
    });
  }

  // ── Cuti Setengah Hari ─────────────────────────────────────
  shLoading            = signal(false);
  shAktif              = signal(false);
  shPresensiMasukMode  = signal<'jadwal' | 'manual'>('jadwal');
  shPresensiMasukJam   = signal('');
  shPresensiKeluarMode = signal<'jadwal' | 'manual'>('jadwal');
  shPresensiKeluarJam  = signal('');
  shSaving             = signal(false);

  private loadSetengahHari() {
    this.shLoading.set(true);
    this.cutiSvc.getPengaturanSetengahHari().subscribe({
      next: d => {
        if (d) {
          this.shAktif.set(d.aktif);
          this.shPresensiMasukMode.set(d.presensiMasukMode ?? 'jadwal');
          this.shPresensiMasukJam.set(d.presensiMasukJam ?? '');
          this.shPresensiKeluarMode.set(d.presensiKeluarMode ?? 'jadwal');
          this.shPresensiKeluarJam.set(d.presensiKeluarJam ?? '');
        }
        this.shLoading.set(false);
      },
      error: () => this.shLoading.set(false)
    });
  }

  simpanSetengahHari() {
    this.shSaving.set(true);
    const req: PengaturanCutiSetengahHariRequest = {
      aktif:               this.shAktif(),
      presensiMasukMode:   this.shPresensiMasukMode(),
      presensiMasukJam:    this.shPresensiMasukMode() === 'manual' ? this.shPresensiMasukJam() : null,
      presensiKeluarMode:  this.shPresensiKeluarMode(),
      presensiKeluarJam:   this.shPresensiKeluarMode() === 'manual' ? this.shPresensiKeluarJam() : null,
    };
    this.cutiSvc.savePengaturanSetengahHari(req).subscribe({
      next: d => {
        this.shSaving.set(false);
        if (d) {
          this.shAktif.set(d.aktif);
          this.shPresensiMasukMode.set(d.presensiMasukMode ?? 'jadwal');
          this.shPresensiMasukJam.set(d.presensiMasukJam ?? '');
          this.shPresensiKeluarMode.set(d.presensiKeluarMode ?? 'jadwal');
          this.shPresensiKeluarJam.set(d.presensiKeluarJam ?? '');
        }
        this.showToast('Pengaturan cuti setengah hari disimpan.');
      },
      error: () => {
        this.shSaving.set(false);
        this.showToast('Gagal menyimpan pengaturan.', 'danger');
      }
    });
  }

  showToast(msg: string, type: 'success' | 'danger' = 'success') {
    this.toastMsg.set(msg);
    this.toastType.set(type);
    setTimeout(() => this.toastMsg.set(''), 3000);
  }
}
