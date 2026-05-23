import { Component, inject, signal, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import {
  LokasiKehadiranService, PengaturanLokasiKehadiran, LokasiKehadiranRiwayat,
} from '../../../core/services/lokasi-kehadiran.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { Divisi } from '../../../core/models/divisi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import {
  LokasiKehadiran, LokasiKehadiranRequest, TargetLokasi,
} from '../../../core/models/lokasi-kehadiran.model';

declare const $: any;

@Component({
  selector: 'app-lokasi-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, DatePipe],
  templateUrl: './lokasi-list.component.html',
})
export class LokasiListComponent implements OnInit, OnDestroy {
  private svc    = inject(LokasiKehadiranService);
  private divSvc = inject(DivisiService);
  private karSvc = inject(KaryawanService);
  private router = inject(Router);
  private cdr    = inject(ChangeDetectorRef);

  list    = signal<LokasiKehadiran[]>([]);
  loading = signal(true);
  error   = signal('');

  toastMsg  = signal('');
  toastType = signal<'success' | 'danger' | 'warning'>('success');

  confirmDeleteId = signal<number | null>(null);
  deleteBusy      = signal(false);

  /** Sisa kuota lokasi tambahan yang masih tersedia. */
  sisaKuota = signal<number>(0);

  // ── Pengaturan ──
  showPengaturan    = signal(false);
  pengaturanLoading = signal(false);
  pengaturanSaving  = signal(false);
  pengaturan        = signal<PengaturanLokasiKehadiran>({
    spvDapatMenambahLokasi:    false,
    spvDapatMemperbaruiLokasi: false,
  });

  // ── Pesan Kuota Lokasi Tambahan ──
  readonly paketKuota: { kuota: number; harga: number }[] = [
    { kuota: 2,  harga: 20000 },
    { kuota: 5,  harga: 45000 },
    { kuota: 10, harga: 85000 },
  ];
  showKuota     = signal(false);
  kuotaTerpilih = signal<number>(2);
  kuotaSaving   = signal(false);

  // ── Modal Karyawan Ditugaskan ──
  showPenugasan    = signal(false);
  penugasanLokasi  = signal<LokasiKehadiran | null>(null);
  penugasanSaving  = signal(false);
  divisiOptions    = signal<Divisi[]>([]);
  karyawanOptions  = signal<Karyawan[]>([]);
  selDivisiIds     = signal<Set<number>>(new Set());
  selKaryawanIds   = signal<Set<number>>(new Set());
  searchKaryawan   = signal<string>('');

  // ── Modal Riwayat Perubahan ──
  showRiwayat       = signal(false);
  riwayatLoading    = signal(false);
  riwayatList       = signal<LokasiKehadiranRiwayat[]>([]);
  riwayatLokasiNama = signal<string>('');

  // ── Aksi dropdown (custom — bebas dari overflow tabel) ──
  openAksiId  = signal<number | null>(null);
  aksiPos     = signal<{ top: number; left: number }>({ top: 0, left: 0 });

  toggleAksi(id: number, ev: MouseEvent): void {
    ev.stopPropagation();
    if (this.openAksiId() === id) {
      this.openAksiId.set(null);
      return;
    }
    const btn = ev.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const menuWidth = 220;
    // Posisikan di bawah tombol, rata-kanan
    const left = Math.max(8, rect.right - menuWidth);
    const top  = rect.bottom + 4;
    this.aksiPos.set({ top, left });
    this.openAksiId.set(id);
  }

  tutupAksi(): void { this.openAksiId.set(null); }

  @HostListener('document:click')
  onDocClick(): void { if (this.openAksiId() !== null) this.openAksiId.set(null); }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWinChange(): void { if (this.openAksiId() !== null) this.openAksiId.set(null); }

  totalHargaKuota(): number {
    return this.paketKuota.find(p => p.kuota === this.kuotaTerpilih())?.harga ?? 0;
  }

  bukaPesanKuota(): void {
    this.kuotaTerpilih.set(2);
    this.showKuota.set(true);
  }

  pilihKuota(k: number): void {
    this.kuotaTerpilih.set(k);
  }

  /**
   * Tombol gabungan: jika ada kuota → langsung ke form tambah lokasi.
   * Jika kuota 0 → buka modal pesan kuota.
   */
  klikTambahLokasi(): void {
    if (this.sisaKuota() > 0) {
      this.router.navigate(['/lokasi/baru']);
    } else {
      this.bukaPesanKuota();
    }
  }

  pesanKuota(): void {
    this.kuotaSaving.set(true);
    this.svc.pesanKuota(this.kuotaTerpilih()).subscribe({
      next: p => {
        this.kuotaSaving.set(false);
        this.showKuota.set(false);
        this.sisaKuota.set(p.kuotaLokasi ?? 0);
        this.showToast(
          `Berhasil menambah ${this.kuotaTerpilih()} kuota lokasi. ` +
          `Total kuota tersedia: ${p.kuotaLokasi ?? 0}.`,
          'success');
      },
      error: e => {
        this.kuotaSaving.set(false);
        this.showToast(
          e?.error?.message ?? 'Gagal memesan kuota lokasi.', 'danger');
      }
    });
  }

  ngOnInit(): void {
    this.load();
    this.loadKuota();
  }

  ngOnDestroy(): void { this.destroyDt(); }

  // ── DataTable ─────────────────────────────────────────────
  private dtInstance: any = null;

  private destroyDt(): void {
    if (this.dtInstance) { this.dtInstance.destroy(); this.dtInstance = null; }
  }

  private initDt(): void {
    setTimeout(() => {
      const table = $('#tabelLokasi');
      if (!table.length || typeof $ === 'undefined' || !$.fn?.dataTable) return;
      this.destroyDt();
      this.dtInstance = table.DataTable({
        language:   { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json' },
        pageLength: 10,
        order:      [[0, 'asc']],
        // Kolom Koordinat (2), Karyawan Ditugaskan (4), Mode (5), Aksi (7) tidak dapat di-sort
        columnDefs: [{ orderable: false, targets: [2, 4, 5, 7] }],
      });
    }, 100);
  }

  private loadKuota(): void {
    this.svc.getPengaturan().subscribe({
      next: p => this.sisaKuota.set(p.kuotaLokasi ?? 0),
      error: () => {},
    });
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.destroyDt();
    this.svc.findAll().subscribe({
      next: list => {
        this.list.set(list);
        this.loading.set(false);
        this.cdr.detectChanges();
        this.initDt();
      },
      error: e => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? 'Gagal memuat data lokasi.');
      }
    });
  }

  doDelete(): void {
    const id = this.confirmDeleteId(); if (id == null) return;
    this.deleteBusy.set(true);
    this.svc.delete(id).subscribe({
      next: () => {
        this.deleteBusy.set(false);
        this.confirmDeleteId.set(null);
        this.showToast('Lokasi berhasil dihapus.', 'success');
        this.load();
      },
      error: e => {
        this.deleteBusy.set(false);
        this.confirmDeleteId.set(null);
        this.showToast(e?.error?.message ?? 'Gagal menghapus lokasi.', 'danger');
      }
    });
  }

  bukaPengaturan(): void {
    this.showPengaturan.set(true);
    this.pengaturanLoading.set(true);
    this.svc.getPengaturan().subscribe({
      next: p => {
        this.pengaturan.set(p);
        this.sisaKuota.set(p.kuotaLokasi ?? 0);
        this.pengaturanLoading.set(false);
      },
      error: e => {
        this.pengaturanLoading.set(false);
        this.showToast(e?.error?.message ?? 'Gagal memuat pengaturan.', 'danger');
      }
    });
  }

  setSpvTambah(v: boolean): void {
    this.pengaturan.set({ ...this.pengaturan(), spvDapatMenambahLokasi: v });
  }
  setSpvUpdate(v: boolean): void {
    this.pengaturan.set({ ...this.pengaturan(), spvDapatMemperbaruiLokasi: v });
  }

  simpanPengaturan(): void {
    this.pengaturanSaving.set(true);
    this.svc.updatePengaturan(this.pengaturan()).subscribe({
      next: p => {
        this.pengaturan.set(p);
        this.pengaturanSaving.set(false);
        this.showPengaturan.set(false);
        this.showToast('Pengaturan tersimpan.', 'success');
      },
      error: e => {
        this.pengaturanSaving.set(false);
        this.showToast(e?.error?.message ?? 'Gagal menyimpan pengaturan.', 'danger');
      }
    });
  }

  private showToast(msg: string, type: 'success' | 'danger' | 'warning' = 'success'): void {
    this.toastType.set(type);
    this.toastMsg.set(msg);
    setTimeout(() => this.toastMsg.set(''), 4000);
  }

  /** Buka pratinjau Google Maps berdasarkan koordinat. */
  bukaPeta(k: LokasiKehadiran): void {
    if (k.latitude == null || k.longitude == null) return;
    window.open(
      `https://www.google.com/maps?q=${k.latitude},${k.longitude}`, '_blank');
  }

  // ─────────── Modal: Karyawan Ditugaskan ───────────

  bukaPenugasan(k: LokasiKehadiran): void {
    this.penugasanLokasi.set(k);
    this.selDivisiIds.set(new Set((k.divisiTugas ?? []).map(d => d.id)));
    this.selKaryawanIds.set(new Set((k.karyawanTugas ?? []).map(x => x.id)));
    this.searchKaryawan.set('');
    this.showPenugasan.set(true);

    // Lazy-load referensi divisi & karyawan
    if (this.divisiOptions().length === 0) {
      this.divSvc.findAll().subscribe({
        next: l => this.divisiOptions.set(l), error: () => {},
      });
    }
    if (this.karyawanOptions().length === 0) {
      this.karSvc.findAll().subscribe({
        next: l => this.karyawanOptions.set(l), error: () => {},
      });
    }
  }

  togglePenugasanDivisi(id: number, checked: boolean): void {
    const s = new Set(this.selDivisiIds());
    if (checked) s.add(id); else s.delete(id);
    this.selDivisiIds.set(s);
  }

  togglePenugasanKaryawan(id: number, checked: boolean): void {
    const s = new Set(this.selKaryawanIds());
    if (checked) s.add(id); else s.delete(id);
    this.selKaryawanIds.set(s);
  }

  isDivisiSelected(id: number): boolean { return this.selDivisiIds().has(id); }
  isKaryawanSelected(id: number): boolean { return this.selKaryawanIds().has(id); }

  selKaryawanIdsArray(): number[] {
    return Array.from(this.selKaryawanIds());
  }

  filteredKaryawanPenugasan(): Karyawan[] {
    const kw = this.searchKaryawan().trim().toLowerCase();
    let list = this.karyawanOptions();
    if (kw) list = list.filter(k =>
      (k.namaLengkap?.toLowerCase().includes(kw)) ||
      (k.nip?.toLowerCase().includes(kw))
    );
    return list.slice(0, 50);
  }

  hapusKaryawanPenugasan(id: number): void {
    this.togglePenugasanKaryawan(id, false);
  }
  namaKaryawanById(id: number): string {
    return this.karyawanOptions().find(k => k.id === id)?.namaLengkap ?? `#${id}`;
  }

  simpanPenugasan(): void {
    const k = this.penugasanLokasi();
    if (!k || k.id == null) return;

    const divisiIds   = Array.from(this.selDivisiIds());
    const karyawanIds = Array.from(this.selKaryawanIds());

    // Auto-pilih targetTipe: KARYAWAN > DIVISI > SEMUA
    let targetTipe: TargetLokasi = 'SEMUA';
    if (karyawanIds.length > 0)      targetTipe = 'KARYAWAN';
    else if (divisiIds.length > 0)   targetTipe = 'DIVISI';

    const req: LokasiKehadiranRequest = {
      namaLokasi:        k.namaLokasi,
      alamat:            k.alamat ?? '',
      latitude:          k.latitude  ?? null,
      longitude:         k.longitude ?? null,
      radiusMeter:       k.radiusMeter ?? 100,
      aktif:             k.aktif ?? true,
      targetTipe,
      divisiIds:         targetTipe === 'DIVISI'   ? divisiIds   : [],
      karyawanIds:       targetTipe === 'KARYAWAN' ? karyawanIds : [],
      hanyaFingerspot:   k.hanyaFingerspot ?? false,
      fingerspotSn:      k.fingerspotSn ?? '',
      fingerspotIp:      k.fingerspotIp ?? '',
      fingerspotPort:    k.fingerspotPort ?? null,
      fingerspotCatatan: k.fingerspotCatatan ?? '',
    };

    this.penugasanSaving.set(true);
    this.svc.update(k.id, req).subscribe({
      next: () => {
        this.penugasanSaving.set(false);
        this.showPenugasan.set(false);
        this.showToast('Penugasan karyawan berhasil disimpan.', 'success');
        this.load();
      },
      error: e => {
        this.penugasanSaving.set(false);
        this.showToast(e?.error?.message ?? 'Gagal menyimpan penugasan.', 'danger');
      }
    });
  }

  // ─────────── Modal: Riwayat Perubahan ───────────

  bukaRiwayat(k: LokasiKehadiran): void {
    if (k.id == null) return;
    this.riwayatLokasiNama.set(k.namaLokasi);
    this.riwayatList.set([]);
    this.showRiwayat.set(true);
    this.riwayatLoading.set(true);
    this.svc.findRiwayat(k.id).subscribe({
      next: list => {
        this.riwayatList.set(list);
        this.riwayatLoading.set(false);
      },
      error: e => {
        this.riwayatLoading.set(false);
        this.showToast(e?.error?.message ?? 'Gagal memuat riwayat.', 'danger');
      }
    });
  }

  riwayatBadgeClass(tipe: string): string {
    switch (tipe) {
      case 'DIBUAT':  return 'bg-success-subtle text-success border border-success-subtle';
      case 'DIUBAH':  return 'bg-primary-subtle text-primary border border-primary-subtle';
      case 'DIHAPUS': return 'bg-danger-subtle text-danger border border-danger-subtle';
      default:        return 'bg-secondary-subtle text-secondary';
    }
  }

  riwayatLabelTipe(tipe: string): string {
    switch (tipe) {
      case 'DIBUAT':  return 'Dibuat';
      case 'DIUBAH':  return 'Diubah';
      case 'DIHAPUS': return 'Dihapus';
      default:        return tipe;
    }
  }
}
