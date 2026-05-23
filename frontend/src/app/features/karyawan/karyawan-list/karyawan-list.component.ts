import { Component, inject, signal, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { CutiService } from '../../../core/services/cuti.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { JabatanService } from '../../../core/services/jabatan.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { ImporKaryawanResult, TipeImporKaryawan } from '../../../core/models/karyawan.model';
import { Cuti, SisaCuti } from '../../../core/models/cuti.model';
import { Divisi } from '../../../core/models/divisi.model';
import { Jabatan } from '../../../core/models/jabatan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

declare const $: any;

@Component({
  selector: 'app-karyawan-list',
  standalone: true,
  imports: [RouterLink, LayoutComponent, CommonModule, FormsModule],
  templateUrl: './karyawan-list.component.html',
  styleUrl: './karyawan-list.component.scss'
})
export class KaryawanListComponent implements OnInit, OnDestroy {
  private svc     = inject(KaryawanService);
  private cutiSvc = inject(CutiService);
  private divSvc  = inject(DivisiService);
  private jabSvc  = inject(JabatanService);
  private cdr     = inject(ChangeDetectorRef);

  list    = signal<Karyawan[]>([]);
  loading = signal(true);
  error   = signal('');

  /** id yang sedang menunggu konfirmasi hapus */
  confirmDeleteId = signal<number | null>(null);

  /** id dropdown aksi yang sedang terbuka */
  openDropdownId = signal<number | null>(null);

  // ── Modal Pengaturan Pembaruan Cuti Otomatis ────────────
  showPengaturanCutiModal = signal(false);
  pengaturanKaryawan      = signal<Karyawan | null>(null);
  pengaturanSisa          = signal<SisaCuti | null>(null);
  pengaturanLoading       = signal(false);
  /** false = tahap awal (belum ada pengaturan), true = tahap form */
  pengaturanFormMode      = signal(false);
  pengaturanSaving        = signal(false);
  pengaturanError         = signal('');

  pengaturanForm = signal<{
    periodePembaruanBulan: number;
    jumlahCutiPembaruan: number;
    tambahkanSisaCutiSebelumnya: boolean;
    pembaruanCutiAktif: boolean;
  }>({
    periodePembaruanBulan: 12,
    jumlahCutiPembaruan: 12,
    tambahkanSisaCutiSebelumnya: false,
    pembaruanCutiAktif: true,
  });

  // Toast notifikasi
  toastMsg  = signal('');
  toastType = signal<'success' | 'danger' | 'warning'>('success');
  showToast(msg: string, type: 'success' | 'danger' | 'warning' = 'success'): void {
    this.toastType.set(type);
    this.toastMsg.set(msg);
    setTimeout(() => this.toastMsg.set(''), 4000);
  }

  // ── Trash Karyawan (soft-delete) ────────────────────────
  showTrashModal       = signal(false);
  trashList            = signal<Karyawan[]>([]);
  trashLoading         = signal(false);
  trashError           = signal('');
  confirmRestoreId     = signal<number | null>(null);
  confirmHardDeleteId  = signal<number | null>(null);
  trashActionBusy      = signal(false);

  bukaTrash(): void {
    this.showTrashModal.set(true);
    this.loadTrash();
  }

  loadTrash(): void {
    this.trashLoading.set(true);
    this.trashError.set('');
    this.svc.getTrash().subscribe({
      next: list => { this.trashList.set(list); this.trashLoading.set(false); },
      error: err  => {
        this.trashError.set(err?.message ?? 'Gagal memuat data.');
        this.trashLoading.set(false);
      }
    });
  }

  doRestore(): void {
    const id = this.confirmRestoreId(); if (id == null) return;
    this.trashActionBusy.set(true);
    this.svc.restore(id).subscribe({
      next: () => {
        this.trashActionBusy.set(false);
        this.confirmRestoreId.set(null);
        this.showToast('Karyawan berhasil dipulihkan.', 'success');
        this.loadTrash();
        this.load(); // refresh list utama
      },
      error: e => {
        this.trashActionBusy.set(false);
        this.confirmRestoreId.set(null);
        this.showToast(e?.error?.message ?? 'Gagal memulihkan karyawan.', 'danger');
      }
    });
  }

  doHardDelete(): void {
    const id = this.confirmHardDeleteId(); if (id == null) return;
    this.trashActionBusy.set(true);
    this.svc.hardDelete(id).subscribe({
      next: () => {
        this.trashActionBusy.set(false);
        this.confirmHardDeleteId.set(null);
        this.showToast('Karyawan dihapus permanen.', 'success');
        this.loadTrash();
      },
      error: e => {
        this.trashActionBusy.set(false);
        this.confirmHardDeleteId.set(null);
        this.showToast(e?.error?.message ?? 'Gagal menghapus permanen.', 'danger');
      }
    });
  }

  formatTglWaktuId(t?: string): string {
    if (!t) return '-';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID',
      { day: '2-digit', month: 'short', year: 'numeric' })
      + ' · ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  // ── Ekspor Excel ─────────────────────────────────────────
  showEksporModal   = signal(false);
  divisiList        = signal<Divisi[]>([]);
  eksporBusy        = signal(false);
  eksporError       = signal('');
  eksporForm = signal<{ divisiId: number | null; limit: number | null; email: string }>({
    divisiId: null, limit: null, email: '',
  });

  bukaEkspor(): void {
    this.eksporError.set('');
    this.eksporForm.set({ divisiId: null, limit: null, email: '' });
    this.showEksporModal.set(true);
    if (this.divisiList().length === 0) {
      this.divSvc.findAll().subscribe({
        next: list => this.divisiList.set(list),
        error: ()  => {/* abaikan */},
      });
    }
  }

  /** Hitung total karyawan setelah filter divisi (untuk help text). */
  totalKaryawanFiltered(): number {
    const div = this.eksporForm().divisiId;
    if (div == null) return this.list().length;
    return this.list().filter(k => k.divisiId === div).length;
  }

  /** Download langsung ke browser. */
  unduhEkspor(): void {
    const f = this.eksporForm();
    this.eksporBusy.set(true);
    this.eksporError.set('');
    this.svc.eksporExcel({
      divisiId: f.divisiId ?? undefined,
      limit:    f.limit && f.limit > 0 ? f.limit : undefined,
    }).subscribe({
      next: blob => {
        this.eksporBusy.set(false);
        const ts = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `Data_Karyawan_${ts}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.showEksporModal.set(false);
        this.showToast('Berhasil mengunduh data karyawan.', 'success');
      },
      error: e => {
        this.eksporBusy.set(false);
        this.eksporError.set(e?.error?.message ?? 'Gagal mengunduh file ekspor.');
      }
    });
  }

  /** Kirim ke email. */
  kirimEksporKeEmail(): void {
    const f = this.eksporForm();
    if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
      this.eksporError.set('Format email tidak valid.'); return;
    }
    this.eksporBusy.set(true);
    this.eksporError.set('');
    this.svc.eksporExcelKeEmail({
      divisiId: f.divisiId,
      limit:    f.limit && f.limit > 0 ? f.limit : null,
      email:    f.email.trim(),
    }).subscribe({
      next: r => {
        this.eksporBusy.set(false);
        this.showEksporModal.set(false);
        this.showToast(r.message ?? `File ekspor dikirim ke ${f.email}.`, 'success');
      },
      error: e => {
        this.eksporBusy.set(false);
        const msg = e?.error?.data?.email
                  ?? e?.error?.message
                  ?? 'Gagal mengirim email.';
        this.eksporError.set(msg);
      }
    });
  }

  // ── Impor Excel ──────────────────────────────────────────
  /** Tahap modal: 'pilih' = grid 4 tipe, 'form' = upload, null = tertutup. */
  imporTahap        = signal<'pilih' | 'form' | null>(null);
  imporTipe         = signal<TipeImporKaryawan | null>(null);
  imporFile         = signal<File | null>(null);
  imporFileName     = signal<string>('');
  imporDivisiId     = signal<number | null>(null);
  imporBusy         = signal(false);
  imporError        = signal('');
  imporResult       = signal<ImporKaryawanResult | null>(null);
  imporTplBusy      = signal(false);

  bukaImporPilih(): void {
    this.imporTahap.set('pilih');
    this.imporTipe.set(null);
    this.imporFile.set(null);
    this.imporFileName.set('');
    this.imporDivisiId.set(null);
    this.imporError.set('');
    this.imporResult.set(null);
    if (this.divisiList().length === 0) {
      this.divSvc.findAll().subscribe({
        next: list => this.divisiList.set(list),
        error: ()  => {/* abaikan */},
      });
    }
  }

  pilihTipeImpor(tipe: TipeImporKaryawan): void {
    this.imporTipe.set(tipe);
    this.imporTahap.set('form');
    this.imporError.set('');
    this.imporResult.set(null);
    this.imporFile.set(null);
    this.imporFileName.set('');
  }

  tutupImpor(): void {
    this.imporTahap.set(null);
    this.imporTipe.set(null);
    this.imporFile.set(null);
    this.imporFileName.set('');
    this.imporResult.set(null);
    this.imporError.set('');
  }

  kembaliPilihTipeImpor(): void {
    this.imporTahap.set('pilih');
    this.imporTipe.set(null);
    this.imporFile.set(null);
    this.imporFileName.set('');
    this.imporResult.set(null);
    this.imporError.set('');
  }

  onImporFileChange(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const file  = input?.files?.[0] ?? null;
    if (!file) { this.imporFile.set(null); this.imporFileName.set(''); return; }
    if (!file.name.toLowerCase().endsWith('.xlsx')) {
      this.imporError.set('Format file harus .xlsx');
      this.imporFile.set(null); this.imporFileName.set('');
      input.value = '';
      return;
    }
    if (file.size > 500 * 1024) {
      this.imporError.set('Ukuran file melebihi 500 KB.');
      this.imporFile.set(null); this.imporFileName.set('');
      input.value = '';
      return;
    }
    this.imporError.set('');
    this.imporFile.set(file);
    this.imporFileName.set(file.name);
  }

  labelTipeImpor(t: TipeImporKaryawan | null): string {
    switch (t) {
      case 'tambah':   return 'Tambah Karyawan';
      case 'perbarui': return 'Perbarui Karyawan';
      case 'bpjs':     return 'BPJS Karyawan';
      case 'pph21':    return 'PPH 21 Karyawan';
      default:         return '';
    }
  }

  unduhTemplateImpor(): void {
    const tipe = this.imporTipe(); if (!tipe) return;
    // Untuk 'perbarui', 'bpjs', dan 'pph21' → buka sub-modal pemilihan divisi & karyawan
    if (tipe === 'perbarui' || tipe === 'bpjs' || tipe === 'pph21') {
      this.bukaSubModalPerbarui(tipe);
      return;
    }
    this.lakukanUnduhTemplate(tipe);
  }

  private lakukanUnduhTemplate(
      tipe: TipeImporKaryawan,
      opts?: { divisiId?: number | null; karyawanIds?: number[] | null }
  ): void {
    this.imporTplBusy.set(true);
    this.svc.downloadTemplateImpor(tipe, opts).subscribe({
      next: blob => {
        this.imporTplBusy.set(false);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `template-impor-${tipe}-karyawan.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.imporTplBusy.set(false);
        this.showToast('Gagal mengunduh template.', 'danger');
      }
    });
  }

  // ── Sub-modal Download Format Perbarui Karyawan ─────────
  showSubPerbarui          = signal(false);
  /** Tipe template yang sedang diunduh dari sub-modal: 'perbarui' atau 'bpjs'. */
  subPerbaruiTipe          = signal<TipeImporKaryawan>('perbarui');
  subPerbaruiDivisiId      = signal<number | null>(null);
  subPerbaruiKaryawanIds   = signal<number[]>([]);
  subPerbaruiKeyword       = signal<string>('');
  subPerbaruiSearchOpen    = signal<boolean>(false);

  bukaSubModalPerbarui(tipe: TipeImporKaryawan = 'perbarui'): void {
    this.subPerbaruiTipe.set(tipe);
    this.subPerbaruiDivisiId.set(null);
    this.subPerbaruiKaryawanIds.set([]);
    this.subPerbaruiKeyword.set('');
    this.subPerbaruiSearchOpen.set(false);
    this.showSubPerbarui.set(true);
    // Pastikan list karyawan sudah ada (komponen biasanya sudah load di ngOnInit)
  }

  tutupSubPerbarui(): void {
    this.showSubPerbarui.set(false);
  }

  /** Daftar karyawan yang lulus filter pencarian (untuk dropdown spesifik). */
  filteredKaryawanForSub(): Karyawan[] {
    const kw = this.subPerbaruiKeyword().trim().toLowerCase();
    const divId = this.subPerbaruiDivisiId();
    let list = this.list();
    if (divId != null) list = list.filter(k => k.divisiId === divId);
    if (kw) list = list.filter(k =>
      (k.namaLengkap?.toLowerCase().includes(kw)) ||
      (k.nip?.toLowerCase().includes(kw))
    );
    return list.slice(0, 50);
  }

  /** Opsi karyawan untuk dropdown <select> "Spesifik Karyawan",
   *  difilter berdasarkan divisi yang dipilih. */
  karyawanOptionsForSub(): Karyawan[] {
    const divId = this.subPerbaruiDivisiId();
    let list = this.list();
    if (divId != null) list = list.filter(k => k.divisiId === divId);
    return [...list].sort((a, b) =>
      (a.namaLengkap ?? '').localeCompare(b.namaLengkap ?? '')
    );
  }

  /** Handler ketika user memilih satu karyawan dari dropdown <select>. */
  onPilihKaryawanSub(id: number | null): void {
    if (id == null) return;
    const cur = this.subPerbaruiKaryawanIds();
    if (!cur.includes(id)) {
      this.subPerbaruiKaryawanIds.set([...cur, id]);
    }
  }

  toggleKaryawanSub(id: number): void {
    const cur = this.subPerbaruiKaryawanIds();
    this.subPerbaruiKaryawanIds.set(
      cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id]
    );
  }

  hapusKaryawanSub(id: number): void {
    this.subPerbaruiKaryawanIds.set(
      this.subPerbaruiKaryawanIds().filter(x => x !== id)
    );
  }

  namaKaryawanById(id: number): string {
    return this.list().find(k => k.id === id)?.namaLengkap ?? `#${id}`;
  }

  prosesUnduhPerbarui(): void {
    const ids   = this.subPerbaruiKaryawanIds();
    const div   = this.subPerbaruiDivisiId();
    const tipe  = this.subPerbaruiTipe();
    this.lakukanUnduhTemplate(tipe, {
      divisiId:    ids.length > 0 ? null : div,  // jika ada pilihan spesifik, abaikan filter divisi
      karyawanIds: ids.length > 0 ? ids : null,
    });
    this.tutupSubPerbarui();
  }

  prosesImporExcel(): void {
    const tipe = this.imporTipe(); const file = this.imporFile();
    if (!tipe) return;
    if (!file) { this.imporError.set('Pilih berkas terlebih dahulu.'); return; }

    this.imporBusy.set(true);
    this.imporError.set('');
    this.imporResult.set(null);

    const opts = tipe === 'tambah' ? { divisiId: this.imporDivisiId() } : undefined;
    this.svc.prosesImpor(tipe, file, opts).subscribe({
      next: hasil => {
        this.imporBusy.set(false);
        this.imporResult.set(hasil);
        if (hasil.gagal === 0) {
          this.showToast(`Impor selesai. ${hasil.berhasil} baris berhasil.`, 'success');
        } else {
          this.showToast(
            `Impor selesai. Berhasil ${hasil.berhasil}, gagal ${hasil.gagal}.`,
            'warning');
        }
        // Refresh list utama agar perubahan terlihat
        this.load();
      },
      error: e => {
        this.imporBusy.set(false);
        this.imporError.set(e?.error?.message ?? e?.error?.data?.message
                            ?? 'Gagal memproses file impor.');
      }
    });
  }

  /** Konversi path relatif foto ke URL lengkap */
  fotoUrl(path?: string): string | null {
    if (!path) return null;
    // Jika sudah berupa URL lengkap (http/https), kembalikan langsung
    if (path.startsWith('http')) return path;
    // Gabungkan dengan baseUrl backend
    return `${environment.baseUrl}/${path}`;
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
      const table = $('#tabelKaryawan');
      if (!table.length || typeof $ === 'undefined' || !$.fn?.dataTable) return;
      this.destroyDt();
      this.dtInstance = table.DataTable({
        language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json' },
        pageLength: 10,
        order: [[1, 'asc']],
        columnDefs: [{ orderable: false, targets: [0, 2, 3, 4] }]
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

  confirmDelete(id: number): void {
    this.confirmDeleteId.set(id);
  }

  cancelDelete(): void {
    this.confirmDeleteId.set(null);
  }

  doDelete(): void {
    const id = this.confirmDeleteId();
    if (id == null) return;
    this.svc.delete(id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.load();
      },
      error: err => {
        this.error.set(err?.message ?? 'Gagal menghapus data.');
        this.confirmDeleteId.set(null);
      }
    });
  }

  toggleDropdown(id: number): void {
    this.openDropdownId.set(this.openDropdownId() === id ? null : id);
  }

  closeDropdown(): void {
    this.openDropdownId.set(null);
  }

  zonaWaktuLabel(z?: string): string {
    if (!z) return '';
    const map: Record<string, string> = { WIB: 'WIB (UTC+7)', WITA: 'WITA (UTC+8)', WIT: 'WIT (UTC+9)' };
    return map[z] ?? z;
  }

  generasiLabel(tglLahir?: string): string {
    if (!tglLahir) return '';
    const tahun = new Date(tglLahir).getFullYear();
    if (tahun >= 1997) return 'Gen Z';
    if (tahun >= 1981) return 'Milenial';
    if (tahun >= 1965) return 'Gen X';
    return 'Baby Boomer';
  }

  // ── Pengaturan Pembaruan Cuti Otomatis ────────────────
  bukaPengaturanCuti(k: Karyawan): void {
    this.pengaturanKaryawan.set(k);
    this.pengaturanSisa.set(null);
    this.pengaturanFormMode.set(false);
    this.pengaturanError.set('');
    this.showPengaturanCutiModal.set(true);
    this.pengaturanLoading.set(true);
    this.cutiSvc.getSisa(k.id).subscribe({
      next: s => {
        this.pengaturanSisa.set(s);
        this.pengaturanLoading.set(false);
        // Jika sudah ada pengaturan aktif, langsung tampilkan form ter-isi
        if (s.pembaruanCutiAktif) {
          this.pengaturanForm.set({
            periodePembaruanBulan:       s.periodePembaruanBulan ?? 12,
            jumlahCutiPembaruan:         s.jumlahCutiPembaruan ?? 12,
            tambahkanSisaCutiSebelumnya: s.tambahkanSisaCutiSebelumnya ?? false,
            pembaruanCutiAktif:          true,
          });
          this.pengaturanFormMode.set(true);
        }
      },
      error: () => {
        this.pengaturanLoading.set(false);
        this.pengaturanError.set('Gagal memuat data sisa cuti.');
      }
    });
  }

  mulaiPengaturanCuti(): void {
    // Reset ke default lalu masuk mode form
    this.pengaturanForm.set({
      periodePembaruanBulan: 12,
      jumlahCutiPembaruan: 12,
      tambahkanSisaCutiSebelumnya: false,
      pembaruanCutiAktif: true,
    });
    this.pengaturanFormMode.set(true);
  }

  prosesPengaturanCuti(): void {
    const k = this.pengaturanKaryawan(); if (!k) return;
    const f = this.pengaturanForm();
    if (!f.periodePembaruanBulan || f.periodePembaruanBulan < 1) {
      this.pengaturanError.set('Periode pembaruan minimal 1 bulan.'); return;
    }
    this.pengaturanError.set('');
    this.pengaturanSaving.set(true);
    this.cutiSvc.updateSisa(k.id, {
      pembaruanCutiAktif:          f.pembaruanCutiAktif,
      periodePembaruanBulan:       Number(f.periodePembaruanBulan),
      jumlahCutiPembaruan:         Number(f.jumlahCutiPembaruan),
      tambahkanSisaCutiSebelumnya: f.tambahkanSisaCutiSebelumnya,
    }).subscribe({
      next: s => {
        this.pengaturanSaving.set(false);
        this.pengaturanSisa.set(s);
        this.showPengaturanCutiModal.set(false);
        const tgl = s.tglPembaruanBerikutnya
          ? new Date(s.tglPembaruanBerikutnya).toLocaleDateString('id-ID',
              { day: '2-digit', month: 'short', year: 'numeric' })
          : '-';
        this.showToast(
          f.pembaruanCutiAktif
            ? `Pengaturan disimpan. Pembaruan berikutnya: ${tgl}.`
            : 'Pengaturan disimpan (pembaruan otomatis dinonaktifkan).',
          'success'
        );
      },
      error: e => {
        this.pengaturanSaving.set(false);
        this.pengaturanError.set(e?.error?.message ?? 'Gagal menyimpan pengaturan.');
      }
    });
  }

  /** Jalankan scheduler pembaruan otomatis sekarang juga untuk testing. */
  triggerPembaruanSekarang(): void {
    const k = this.pengaturanKaryawan(); if (!k) return;
    if (!confirm(`Jalankan pembaruan cuti otomatis untuk ${k.namaLengkap} sekarang?`)) return;
    this.pengaturanSaving.set(true);
    this.cutiSvc.triggerPembaruan(k.id).subscribe({
      next: r => {
        this.pengaturanSaving.set(false);
        this.pengaturanSisa.set(r.sisaCuti);
        if (r.applied) {
          const tgl = r.sisaCuti.tglPembaruanBerikutnya
            ? new Date(r.sisaCuti.tglPembaruanBerikutnya).toLocaleDateString('id-ID',
                { day: '2-digit', month: 'short', year: 'numeric' })
            : '-';
          this.showToast(
            `Pembaruan dijalankan. Sisa cuti sekarang: ${r.sisaCuti.sisaCuti}. ` +
            `Berikutnya: ${tgl}.`, 'success');
        } else {
          this.showToast('Pengaturan tidak aktif, pembaruan dilewati.', 'warning');
        }
      },
      error: e => {
        this.pengaturanSaving.set(false);
        this.pengaturanError.set(e?.error?.message ?? 'Gagal menjalankan pembaruan.');
      }
    });
  }

  /** Info teks: "Karyawan mulai bekerja pada X, pertama kali mendapatkan cuti pada Y." */
  infoMulaiBekerja(): string {
    const k = this.pengaturanKaryawan();
    if (!k?.tglMulaiBekerja) return '';
    const fmt = (t: string) => new Date(t).toLocaleDateString('id-ID',
      { day: '2-digit', month: 'short', year: 'numeric' });
    const mulai = fmt(k.tglMulaiBekerja);
    const dapatCuti = k.tglMulaiDapatCuti ? fmt(k.tglMulaiDapatCuti)
      : fmt(new Date(new Date(k.tglMulaiBekerja).setFullYear(
          new Date(k.tglMulaiBekerja).getFullYear() + 1)).toISOString());
    return `Karyawan mulai bekerja pada ${mulai}, pertama kali mendapatkan cuti pada ${dapatCuti}.`;
  }

  /** Hitung tanggal pembaruan berikutnya untuk tampilan info di form. */
  tglPembaruanBerikutnya(): string {
    const k = this.pengaturanKaryawan();
    const f = this.pengaturanForm();
    if (!k) return '';
    const basis = k.tglMulaiDapatCuti
      ? new Date(k.tglMulaiDapatCuti)
      : (k.tglMulaiBekerja ? new Date(k.tglMulaiBekerja) : new Date());
    basis.setMonth(basis.getMonth() + (Number(f.periodePembaruanBulan) || 12));
    // Jika sudah ada nilai dari backend, gunakan itu
    const fromBackend = this.pengaturanSisa()?.tglPembaruanBerikutnya;
    const target = fromBackend ? new Date(fromBackend) : basis;
    return target.toLocaleDateString('id-ID',
      { day: '2-digit', month: 'short', year: 'numeric' });
  }

  // ── Riwayat Transaksi Cuti ───────────────────────────
  showRiwayatCutiModal = signal(false);
  riwayatKaryawan      = signal<Karyawan | null>(null);
  riwayatCutiList      = signal<Cuti[]>([]);
  riwayatSisa          = signal<SisaCuti | null>(null);
  riwayatLoading       = signal(false);
  riwayatError         = signal('');

  bukaRiwayatCuti(k: Karyawan): void {
    this.riwayatKaryawan.set(k);
    this.riwayatCutiList.set([]);
    this.riwayatSisa.set(null);
    this.riwayatError.set('');
    this.showRiwayatCutiModal.set(true);
    this.riwayatLoading.set(true);

    // Ambil sisa cuti & semua transaksi cuti secara paralel
    let pending = 2;
    const done = () => { if (--pending === 0) this.riwayatLoading.set(false); };

    this.cutiSvc.getSisa(k.id).subscribe({
      next: s  => { this.riwayatSisa.set(s); done(); },
      error: () => done(),
    });
    this.cutiSvc.getAll(k.id).subscribe({
      next: list => {
        // Urutkan terbaru di atas berdasarkan createdAt (fallback tanggalMulai)
        const sorted = [...list].sort((a, b) => {
          const ta = a.createdAt ?? a.tanggalMulai;
          const tb = b.createdAt ?? b.tanggalMulai;
          return (tb ?? '').localeCompare(ta ?? '');
        });
        this.riwayatCutiList.set(sorted);
        done();
      },
      error: () => { this.riwayatError.set('Gagal memuat riwayat cuti.'); done(); },
    });
  }

  formatTglRiwayat(t?: string): string {
    if (!t) return '-';
    return new Date(t).toLocaleDateString('id-ID',
      { day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatTglWaktu(t?: string): string {
    if (!t) return '-';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID',
      { day: '2-digit', month: 'short', year: 'numeric' })
      + ' · ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  jenisCutiLabel(j?: string): string {
    if (!j) return '-';
    const map: Record<string, string> = {
      TAHUNAN: 'Tahunan', SETENGAH_HARI: 'Setengah Hari', KHUSUS: 'Khusus',
    };
    return map[j] ?? j;
  }

  badgeStatusCuti(s?: string): string {
    return s === 'DISETUJUI' ? 'bg-success'
         : s === 'DITOLAK'   ? 'bg-danger'
         : s === 'MENUNGGU'  ? 'bg-warning text-dark'
         :                     'bg-secondary';
  }

  // ════════════════════════════════════════════════════════════════
  //  Aksi Massal
  // ════════════════════════════════════════════════════════════════

  /** Set id karyawan yang dicentang di tabel. */
  selectedIds = signal<Set<number>>(new Set<number>());

  isSelected(id?: number): boolean {
    return id != null && this.selectedIds().has(id);
  }

  toggleSelected(id?: number): void {
    if (id == null) return;
    const set = new Set(this.selectedIds());
    if (set.has(id)) set.delete(id); else set.add(id);
    this.selectedIds.set(set);
  }

  toggleSelectAll(checked: boolean): void {
    if (!checked) { this.selectedIds.set(new Set()); return; }
    this.selectedIds.set(new Set(this.list().map(k => k.id!).filter(v => v != null)));
  }

  isAllSelected(): boolean {
    const total = this.list().length;
    return total > 0 && this.selectedIds().size >= total;
  }

  // Modal state
  showAksiMassalModal = signal(false);
  aksiMassalTarget    = signal<'' | 'SEMUA' | 'DIVISI' | 'KARYAWAN'>('');
  aksiMassalAksi      = signal<
    '' | 'SAMAKAN_SISA_CUTI' | 'TAMBAH_SISA_CUTI' | 'KURANGI_SISA_CUTI'
       | 'ATUR_IZIN_JAM'     | 'PINDAH_DIVISI'    | 'KIRIM_EMAIL_VERIFIKASI'>('');
  aksiMassalDivisiId       = signal<number | null>(null);          // target = DIVISI
  aksiMassalKaryawanIds    = signal<number[]>([]);                  // penerima spesifik
  aksiMassalKaryawanExcl   = signal<number[]>([]);                  // penerima terkecuali
  aksiMassalKeyword        = signal<string>('');
  aksiMassalKeywordExcl    = signal<string>('');
  // Aksi-spesifik fields
  amSamakanSisa            = signal<number | null>(null);
  amSamakanTglBerakhir     = signal<string>('');
  amTambahNilai            = signal<number | null>(null);
  amTambahBulanMasaAktif   = signal<number | null>(null);
  amKurangiNilai           = signal<number | null>(null);
  amKurangiBulanMasaAktif  = signal<number | null>(null);
  amIzinDapatGanti         = signal<boolean>(true);
  amIzinPotonganRincian    = signal<boolean>(true);
  amIzinDendaTelat         = signal<boolean>(false);
  amPindahDivisiId         = signal<number | null>(null);
  // Status
  aksiMassalBusy           = signal(false);
  aksiMassalError          = signal('');

  jabatanList = signal<Jabatan[]>([]);

  bukaAksiMassal(): void {
    this.aksiMassalTarget.set('');
    this.aksiMassalAksi.set('');
    this.aksiMassalDivisiId.set(null);
    this.aksiMassalKaryawanIds.set([]);
    this.aksiMassalKaryawanExcl.set([]);
    this.aksiMassalKeyword.set('');
    this.aksiMassalKeywordExcl.set('');
    this.amSamakanSisa.set(null);
    this.amSamakanTglBerakhir.set('');
    this.amTambahNilai.set(null);
    this.amTambahBulanMasaAktif.set(null);
    this.amKurangiNilai.set(null);
    this.amKurangiBulanMasaAktif.set(null);
    this.amIzinDapatGanti.set(true);
    this.amIzinPotonganRincian.set(true);
    this.amIzinDendaTelat.set(false);
    this.amPindahDivisiId.set(null);
    this.aksiMassalError.set('');
    this.aksiMassalBusy.set(false);
    // Pre-load divisi & jabatan jika perlu
    if (this.divisiList().length === 0) {
      this.divSvc.findAll().subscribe({ next: l => this.divisiList.set(l), error: () => {} });
    }
    if (this.jabatanList().length === 0) {
      this.jabSvc.findAll().subscribe({ next: (l: Jabatan[]) => this.jabatanList.set(l), error: () => {} });
    }
    this.showAksiMassalModal.set(true);
  }

  tutupAksiMassal(): void { this.showAksiMassalModal.set(false); }

  /** Daftar karyawan untuk dropdown Penerima spesifik (difilter target & keyword). */
  amPenerimaOptions(keyword: string, exclude: number[] = []): Karyawan[] {
    const kw = keyword.trim().toLowerCase();
    let list = this.list();
    if (this.aksiMassalTarget() === 'DIVISI' && this.aksiMassalDivisiId() != null) {
      list = list.filter(k => k.divisiId === this.aksiMassalDivisiId());
    }
    if (kw) {
      list = list.filter(k =>
        (k.namaLengkap?.toLowerCase().includes(kw)) ||
        (k.nip?.toLowerCase().includes(kw))
      );
    }
    if (exclude.length) list = list.filter(k => !exclude.includes(k.id!));
    return list.slice(0, 50);
  }

  /** Pilih karyawan untuk Penerima spesifik. */
  pilihPenerimaSpesifik(id: number | null): void {
    if (id == null) return;
    const cur = this.aksiMassalKaryawanIds();
    if (!cur.includes(id)) this.aksiMassalKaryawanIds.set([...cur, id]);
  }
  hapusPenerimaSpesifik(id: number): void {
    this.aksiMassalKaryawanIds.set(this.aksiMassalKaryawanIds().filter(x => x !== id));
  }
  /** Pilih karyawan untuk Penerima terkecuali. */
  pilihPenerimaExcl(id: number | null): void {
    if (id == null) return;
    const cur = this.aksiMassalKaryawanExcl();
    if (!cur.includes(id)) this.aksiMassalKaryawanExcl.set([...cur, id]);
  }
  hapusPenerimaExcl(id: number): void {
    this.aksiMassalKaryawanExcl.set(this.aksiMassalKaryawanExcl().filter(x => x !== id));
  }

  /** Hitung daftar id target final berdasarkan pilihan target & spesifik/excl. */
  private resolveAksiMassalTargetIds(): number[] {
    const t = this.aksiMassalTarget();
    let ids: number[] = [];
    if (t === 'SEMUA') {
      ids = this.list().map(k => k.id!).filter(v => v != null);
    } else if (t === 'DIVISI') {
      const divId = this.aksiMassalDivisiId();
      if (divId == null) return [];
      ids = this.list().filter(k => k.divisiId === divId).map(k => k.id!).filter(v => v != null);
      // Jika user pilih spesifik di dalam divisi → batasi hanya itu
      const spesifik = this.aksiMassalKaryawanIds();
      if (spesifik.length > 0) ids = spesifik.slice();
      // Lalu kurangi yang dikecualikan
      const excl = this.aksiMassalKaryawanExcl();
      if (excl.length > 0) ids = ids.filter(id => !excl.includes(id));
    } else if (t === 'KARYAWAN') {
      ids = this.aksiMassalKaryawanIds().slice();
    }
    return ids;
  }

  /** Eksekusi aksi sesuai pilihan. */
  prosesAksiMassal(): void {
    this.aksiMassalError.set('');
    if (!this.aksiMassalTarget()) {
      this.aksiMassalError.set('Target wajib dipilih.'); return;
    }
    if (!this.aksiMassalAksi()) {
      this.aksiMassalError.set('Aksi wajib dipilih.'); return;
    }
    const ids = this.resolveAksiMassalTargetIds();
    if (ids.length === 0) {
      this.aksiMassalError.set('Tidak ada karyawan yang menjadi target. Pilih divisi/karyawan terlebih dahulu.');
      return;
    }

    const aksi = this.aksiMassalAksi();

    // Aksi yang dipetakan ke endpoint backend
    if (aksi === 'PINDAH_DIVISI') {
      if (this.amPindahDivisiId() == null) {
        this.aksiMassalError.set('Pilih divisi tujuan.'); return;
      }
      this.aksiMassalBusy.set(true);
      this.svc.aksiMassal({
        ids, aksi: 'PINDAH_DIVISI', divisiId: this.amPindahDivisiId(),
      }).subscribe({
        next: r => {
          this.aksiMassalBusy.set(false);
          this.tutupAksiMassal();
          this.showToast(`Pindah divisi: ${r.berhasil} berhasil, ${r.gagal} gagal.`,
            r.gagal === 0 ? 'success' : 'warning');
          this.load();
        },
        error: e => {
          this.aksiMassalBusy.set(false);
          this.aksiMassalError.set(e?.error?.message ?? 'Gagal memproses aksi massal.');
        }
      });
      return;
    }

    // Aksi terkait sisa cuti — gunakan endpoint sisa cuti per karyawan (loop)
    if (aksi === 'SAMAKAN_SISA_CUTI' || aksi === 'TAMBAH_SISA_CUTI' || aksi === 'KURANGI_SISA_CUTI') {
      const isSamakan = aksi === 'SAMAKAN_SISA_CUTI';
      const isTambah  = aksi === 'TAMBAH_SISA_CUTI';
      const nilai = isSamakan ? this.amSamakanSisa()
                  : isTambah  ? this.amTambahNilai()
                              : this.amKurangiNilai();
      if (nilai == null || isNaN(+nilai)) {
        this.aksiMassalError.set('Nilai wajib diisi.'); return;
      }
      this.aksiMassalBusy.set(true);
      let berhasil = 0, gagal = 0; let pending = ids.length;
      ids.forEach(id => {
        const k = this.list().find(x => x.id === id);
        const sisaSekarang = +(k?.sisaCuti ?? 0) || 0;
        const baru = isSamakan ? +nilai!
                   : isTambah  ? sisaSekarang + (+nilai!)
                               : Math.max(0, sisaSekarang - (+nilai!));
        this.cutiSvc.updateSisa(id, { sisaCuti: baru }).subscribe({
          next: () => { berhasil++; if (--pending === 0) this.finishMassalSisa(berhasil, gagal); },
          error: () => { gagal++;    if (--pending === 0) this.finishMassalSisa(berhasil, gagal); },
        });
      });
      return;
    }

    if (aksi === 'KIRIM_EMAIL_VERIFIKASI' || aksi === 'ATUR_IZIN_JAM') {
      // Endpoint dedicated belum tersedia → tampilkan info bahwa fitur ini akan diproses.
      this.aksiMassalError.set('Aksi "' +
        (aksi === 'KIRIM_EMAIL_VERIFIKASI' ? 'Kirim Email Verifikasi' : 'Atur Izin Jam Karyawan') +
        '" belum didukung backend. Silakan hubungi administrator.');
      return;
    }
  }

  private finishMassalSisa(berhasil: number, gagal: number): void {
    this.aksiMassalBusy.set(false);
    this.tutupAksiMassal();
    this.showToast(`Sisa cuti diperbarui: ${berhasil} berhasil, ${gagal} gagal.`,
      gagal === 0 ? 'success' : 'warning');
    this.load();
  }
}
