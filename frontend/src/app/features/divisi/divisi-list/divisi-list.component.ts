import { Component, inject, signal, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DivisiService, ImporSupervisorHasil } from '../../../core/services/divisi.service';
import { Divisi, DivisiRiwayat } from '../../../core/models/divisi.model';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { forkJoin } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-divisi-list',
  standalone: true,
  imports: [RouterLink, FormsModule, LayoutComponent],
  templateUrl: './divisi-list.component.html'
})
export class DivisiListComponent implements OnInit, OnDestroy {
  private svc         = inject(DivisiService);
  private karyawanSvc = inject(KaryawanService);
  private cdr         = inject(ChangeDetectorRef);

  list    = signal<Divisi[]>([]);
  loading = signal(true);
  error   = signal('');
  confirmDeleteId = signal<number | null>(null);

  karyawanList = signal<Karyawan[]>([]);

  // ── Impor Supervisor ──────────────────────────────────────
  showImporModal   = signal(false);
  imporFile        = signal<File | null>(null);
  imporLoading     = signal(false);
  imporError       = signal('');
  imporHasil       = signal<ImporSupervisorHasil | null>(null);

  // ── Riwayat Perubahan ─────────────────────────────────────
  showRiwayatModal  = signal(false);
  riwayatLoading    = signal(false);
  riwayatError      = signal('');
  riwayatList       = signal<DivisiRiwayat[]>([]);
  riwayatDivisiNama = signal('');
  riwayatPage       = signal(0);
  readonly PAGE_SIZE = 1;

  get riwayatCurrentItem(): DivisiRiwayat | null {
    return this.riwayatList()[this.riwayatPage()] ?? null;
  }
  get riwayatTotal(): number { return this.riwayatList().length; }
  riwayatPrev(): void { if (this.riwayatPage() > 0) this.riwayatPage.set(this.riwayatPage() - 1); }
  riwayatNext(): void { if (this.riwayatPage() < this.riwayatTotal - 1) this.riwayatPage.set(this.riwayatPage() + 1); }

  openRiwayat(divisi: Divisi): void {
    this.riwayatList.set([]);
    this.riwayatPage.set(0);
    this.riwayatError.set('');
    this.riwayatDivisiNama.set(divisi.namaDivisi);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.svc.findRiwayat(divisi.id).subscribe({
      next: list => { this.riwayatList.set(list); this.riwayatLoading.set(false); },
      error: () => { this.riwayatError.set('Gagal memuat riwayat.'); this.riwayatLoading.set(false); }
    });
  }
  closeRiwayat(): void { this.showRiwayatModal.set(false); }

  formatTanggal(dt: string): string {
    if (!dt) return '-';
    const d = new Date(dt);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      + ' @ ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  tipeClass(tipe: string): string {
    return tipe === 'DIBUAT' ? 'bg-success' : tipe === 'DIHAPUS' ? 'bg-danger' : 'bg-warning text-dark';
  }

  tipeLabel(tipe: string): string {
    return tipe === 'DIBUAT' ? 'Dibuat' : tipe === 'DIHAPUS' ? 'Dihapus' : 'Diubah';
  }

  // ── Aksi Massal ───────────────────────────────────────────
  showAksiMassalModal  = signal(false);
  aksiMassalSaving     = signal(false);
  aksiMassalError      = signal('');
  aksiSelectedDivisiIds = signal<Set<number>>(new Set());
  selectedAksi         = '';

  /** Object tempat nilai form aksi massal dikumpulkan */
  aksiForm: {
    sistemKerja?: string;
    dendaKeterlambatan?: boolean;
    catatanMasuk?: string;
    catatanKeluar?: string;
    catatanMulaiLembur?: string;
    catatanSelesaiLembur?: string;
    lokasiMasuk?: boolean;
    lokasiIstirahat?: boolean;
    lokasiSelesaiIstirahat?: boolean;
    lokasiKeluar?: boolean;
    lokasiLembur?: boolean;
    lokasiSelesaiLembur?: boolean;
    lokasiPertamaKali?: boolean;
    lokasiDiLuar?: boolean;
    lokasiPerangkatBerbeda?: boolean;
    lokasiFotoSelfieBermasalah?: boolean;
    bccGlobal?: string;
    supervisorId?: number | null;
    menitSebelumMasuk?: number;
    menitSetelahMasuk?: number;
    menitSetelahJadwalKeluar?: number;
    cegahPresensiKalenderLibur?: boolean;
    cegahPresensiJadwalLibur?: boolean;
    cegahPresensiLemburTanpaJadwal?: boolean;
    validasiPerangkat?: boolean;
    presensiKeluarOtomatis?: boolean;
    dendaTerlambatKeluar?: boolean;
    kunjunganKlien?: boolean;
    minimalHariSebelumCuti?: number;
    maksHariPerRequest?: number;
    maksRequestPerBulan?: number;
    [key: string]: any;
  } = {};

  openAksiMassalModal(): void {
    this.selectedAksi = '';
    this.aksiForm = {};
    this.aksiMassalError.set('');
    this.aksiSelectedDivisiIds.set(new Set());
    this.showAksiMassalModal.set(true);
    // Muat daftar karyawan jika belum
    if (this.karyawanList().length === 0) {
      this.karyawanSvc.findAll().subscribe({ next: k => this.karyawanList.set(k) });
    }
  }
  closeAksiMassalModal(): void { this.showAksiMassalModal.set(false); }

  onAksiChange(): void {
    // Reset form & pilihan divisi saat aksi berubah
    this.aksiSelectedDivisiIds.set(new Set());
    this.aksiMassalError.set('');
    this.aksiForm = this.defaultAksiForm(this.selectedAksi);
  }

  private defaultAksiForm(aksi: string): Record<string, any> {
    switch (aksi) {
      case 'sistem_kerja_denda':  return { sistemKerja: 'HARI_KERJA', dendaKeterlambatan: false, dendaTerlambatKeluar: false };
      case 'catatan_presensi':    return { catatanMasuk: 'TIDAK_DIBUTUHKAN', catatanKeluar: 'TIDAK_DIBUTUHKAN', catatanMulaiLembur: 'TIDAK_DIBUTUHKAN', catatanSelesaiLembur: 'TIDAK_DIBUTUHKAN' };
      case 'presensi_lokasi':     return { lokasiMasuk: false, lokasiIstirahat: false, lokasiSelesaiIstirahat: false, lokasiKeluar: false, lokasiLembur: false, lokasiSelesaiLembur: false, lokasiPertamaKali: false, lokasiDiLuar: false, lokasiPerangkatBerbeda: false, lokasiFotoSelfieBermasalah: false };
      case 'email_notif':         return { bccGlobal: '' };
      case 'supervisor':          return { supervisorId: null };
      case 'pembatasan':          return { menitSebelumMasuk: 0, menitSetelahMasuk: 0, menitSetelahJadwalKeluar: 0, cegahPresensiKalenderLibur: false, cegahPresensiJadwalLibur: false, cegahPresensiLemburTanpaJadwal: false };
      case 'validasi_perangkat':  return { validasiPerangkat: false, presensiKeluarOtomatis: false, dendaTerlambatKeluar: false };
      case 'kunjungan_klien':     return { kunjunganKlien: false };
      case 'cuti':                return { minimalHariSebelumCuti: 0, maksHariPerRequest: 0, maksRequestPerBulan: 0 };
      default:                    return {};
    }
  }

  isAksiDivisiSelected(id: number): boolean { return this.aksiSelectedDivisiIds().has(id); }

  toggleAksiDivisi(id: number): void {
    const s = new Set(this.aksiSelectedDivisiIds());
    if (s.has(id)) s.delete(id); else s.add(id);
    this.aksiSelectedDivisiIds.set(s);
  }

  pilihSemuaDivisi(): void  { this.aksiSelectedDivisiIds.set(new Set(this.list().map(d => d.id))); }
  batalSemuaDivisi(): void  { this.aksiSelectedDivisiIds.set(new Set()); }

  terapkanAksiMassal(): void {
    const ids = [...this.aksiSelectedDivisiIds()];
    if (!ids.length || !this.selectedAksi) return;
    this.aksiMassalSaving.set(true);
    this.aksiMassalError.set('');

    // Ambil data tiap divisi yang dipilih, patch field yang berkaitan, lalu update
    const updates$ = ids.map(id => {
      return new Promise<void>((resolve, reject) => {
        this.svc.findById(id).subscribe({
          next: divisi => {
            // Merge aksiForm ke dalam data divisi yang ada
            const req: any = { ...divisi, ...this.aksiForm, supervisorId: divisi.supervisorId ?? null };
            this.svc.update(id, req).subscribe({ next: () => resolve(), error: reject });
          },
          error: reject
        });
      });
    });

    Promise.all(updates$)
      .then(() => {
        this.aksiMassalSaving.set(false);
        this.showAksiMassalModal.set(false);
        this.load();
      })
      .catch(err => {
        this.aksiMassalError.set(err?.data?.message ?? err?.message ?? 'Sebagian data gagal diperbarui.');
        this.aksiMassalSaving.set(false);
      });
  }

  // ── DataTable ─────────────────────────────────────────────
  private dtInstance: any = null;

  ngOnInit(): void { this.load(); }
  ngOnDestroy(): void { this.destroyDt(); }

  private destroyDt(): void {
    if (this.dtInstance) { this.dtInstance.destroy(); this.dtInstance = null; }
  }

  private initDt(): void {
    setTimeout(() => {
      const table = $('#tabelDivisi');
      if (!table.length || typeof $ === 'undefined' || !$.fn?.dataTable) return;
      this.destroyDt();
      this.dtInstance = table.DataTable({
        language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json' },
        pageLength: 10,
        order: [[1, 'asc']],
        columnDefs: [{ orderable: false, targets: [0, 5] }]
      });
    }, 100);
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.destroyDt();
    this.svc.findAll().subscribe({
      next: data => {
        this.list.set(data);
        this.loading.set(false);
        this.cdr.detectChanges();
        this.initDt();
      },
      error: err => { this.error.set(err?.message ?? 'Gagal memuat data.'); this.loading.set(false); }
    });
  }

  confirmDelete(id: number): void { this.confirmDeleteId.set(id); }
  cancelDelete():  void { this.confirmDeleteId.set(null); }

  doDelete(): void {
    const id = this.confirmDeleteId();
    if (id == null) return;
    this.svc.delete(id).subscribe({
      next: () => { this.confirmDeleteId.set(null); this.load(); },
      error: err => { this.error.set(err?.message ?? 'Gagal menghapus.'); this.confirmDeleteId.set(null); }
    });
  }

  sistemKerjaLabel(v: string) { return v === 'HARI_KERJA' ? 'Hari Kerja' : 'Shift'; }

  // ── Impor Supervisor ──────────────────────────────────────
  openImporModal(): void {
    this.imporFile.set(null);
    this.imporError.set('');
    this.imporHasil.set(null);
    this.showImporModal.set(true);
  }
  closeImporModal(): void { this.showImporModal.set(false); }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0] ?? null;
    this.imporError.set('');
    this.imporHasil.set(null);
    if (file && !file.name.endsWith('.xlsx')) {
      this.imporError.set('Hanya file .xlsx yang diperbolehkan.');
      this.imporFile.set(null); return;
    }
    if (file && file.size > 500 * 1024) {
      this.imporError.set('Ukuran file melebihi batas maksimal 500 KB.');
      this.imporFile.set(null); return;
    }
    this.imporFile.set(file);
  }

  prosesImpor(): void {
    const file = this.imporFile();
    if (!file) { this.imporError.set('Pilih file terlebih dahulu.'); return; }
    this.imporLoading.set(true);
    this.imporError.set('');
    this.imporHasil.set(null);
    this.svc.imporSupervisor(file).subscribe({
      next: hasil => {
        this.imporHasil.set(hasil);
        this.imporLoading.set(false);
        if (hasil.berhasil > 0) this.load();
      },
      error: err => {
        this.imporError.set(err?.data?.message ?? err?.message ?? 'Gagal memproses file.');
        this.imporLoading.set(false);
      }
    });
  }

  downloadTemplate(): void { this.svc.downloadTemplateSupervisor(); }
  eksporDivisi(): void { this.svc.eksporDivisi(); }
}
