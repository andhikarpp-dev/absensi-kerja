import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { DivisiService } from '../../../core/services/divisi.service';
import { Divisi } from '../../../core/models/divisi.model';
import { OpenshiftService } from '../../../core/services/openshift.service';
import { OpenshiftDTO, OpenshiftRequest } from '../../../core/models/openshift.model';

export interface Openshift {
  id: number;
  tanggalMulai: string;
  jamMulai: string;
  tanggalSelesai: string;
  jamSelesai: string;
  catatan: string;
  upahJenis: 'SESUAI_LEMBUR' | 'NOMINAL';
  upahPerJam: number;
  maksKaryawan: number | null;
  divisiIds: number[];
  peminatIds: number[];
  dihadiriIds: number[];
}

@Component({
  selector: 'app-openshift-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './openshift-list.component.html'
})
export class OpenshiftListComponent implements OnInit {
  private divisiSvc = inject(DivisiService);
  private api       = inject(OpenshiftService);

  list       = signal<Openshift[]>([]);
  divisiList = signal<Divisi[]>([]);
  loading    = signal(true);
  error      = signal('');
  saving     = signal(false);
  successMsg = signal('');

  filterMulai    = signal('');
  filterSelesai  = signal('');
  filterDivisiId = signal<number | null>(null);
  query          = signal('');

  page     = signal(1);
  pageSize = signal(10);

  showFormModal    = signal(false);
  showRiwayatModal = signal(false);
  confirmDeleteId  = signal<number | null>(null);
  modalError       = signal('');
  editingId        = signal<number | null>(null);
  riwayatItem      = signal<Openshift | null>(null);

  showImportModal = signal(false);
  importBusy      = signal(false);
  importFile      = signal<File | null>(null);
  importResult    = signal<{ berhasil: number; gagal: number; errors: { baris: number; pesan: string }[] } | null>(null);

  modalData: Openshift = this.empty();

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const fm = this.filterMulai();
    const fs = this.filterSelesai();
    const fd = this.filterDivisiId();
    return this.list().filter(o => {
      if (q && !(o.catatan || '').toLowerCase().includes(q)) return false;
      if (fm && o.tanggalMulai < fm) return false;
      if (fs && o.tanggalSelesai > fs) return false;
      if (fd && !o.divisiIds.includes(fd)) return false;
      return true;
    });
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize())));
  paged = computed(() => {
    const s = (this.page() - 1) * this.pageSize();
    return this.filtered().slice(s, s + this.pageSize());
  });

  ngOnInit(): void {
    this.load();
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d || []));
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.api.findAll({
      mulai:    this.filterMulai() || undefined,
      selesai:  this.filterSelesai() || undefined,
      divisiId: this.filterDivisiId() ?? null
    }).subscribe({
      next: (rows) => {
        this.list.set((rows || []).map(r => this.fromDTO(r)));
        this.loading.set(false);
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Gagal memuat data openshift dari server.';
        this.error.set(msg);
        this.loading.set(false);
      }
    });
  }

  private fromDTO(d: OpenshiftDTO): Openshift {
    const split = (iso: string): { tgl: string; jam: string } => {
      if (!iso) return { tgl: '', jam: '' };
      const m = iso.match(/^(\d{4}-\d{2}-\d{2})[T ](\d{2}:\d{2})/);
      return m ? { tgl: m[1], jam: m[2] } : { tgl: '', jam: '' };
    };
    const a = split(d.jamMasuk);
    const b = split(d.jamKeluar);
    return {
      id: d.id,
      tanggalMulai: a.tgl, jamMulai: a.jam,
      tanggalSelesai: b.tgl, jamSelesai: b.jam,
      catatan: d.catatan || '',
      upahJenis: d.jenisUpah,
      upahPerJam: d.upahPerJam || 0,
      maksKaryawan: d.maksKaryawan ?? null,
      divisiIds: d.divisiIds || [],
      peminatIds: [],
      dihadiriIds: []
    };
  }

  private toRequest(o: Openshift): OpenshiftRequest {
    return {
      jamMasuk:  `${o.tanggalMulai}T${o.jamMulai}:00`,
      jamKeluar: `${o.tanggalSelesai}T${o.jamSelesai}:00`,
      jenisUpah: o.upahJenis,
      upahPerJam: o.upahPerJam || 0,
      maksKaryawan: o.maksKaryawan && o.maksKaryawan > 0 ? o.maksKaryawan : null,
      catatan: o.catatan || '',
      divisiIds: o.divisiIds || []
    };
  }

  durasiJam(o: Openshift): number {
    if (!o.tanggalMulai || !o.jamMulai || !o.tanggalSelesai || !o.jamSelesai) return 0;
    const a = new Date(`${o.tanggalMulai}T${o.jamMulai}`);
    const b = new Date(`${o.tanggalSelesai}T${o.jamSelesai}`);
    const diff = (b.getTime() - a.getTime()) / 3600000;
    return Math.max(0, Math.round(diff));
  }

  formatTgl(iso: string): string {
    if (!iso) return '-';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  upahLabel(o: Openshift): string {
    return o.upahJenis === 'SESUAI_LEMBUR'
      ? 'Sesuai Upah Lembur Karyawan'
      : `Rp ${(o.upahPerJam || 0).toLocaleString('id-ID')} / jam`;
  }

  maksKaryawanLabel(o: Openshift): string {
    return o.maksKaryawan == null || o.maksKaryawan === 0 ? 'Tidak Terbatas' : `${o.maksKaryawan} Karyawan`;
  }

  divisiNamaList(o: Openshift): string[] {
    return (o.divisiIds || []).map(id => {
      const d = this.divisiList().find(x => x.id === id);
      return d?.namaDivisi || `#${id}`;
    });
  }

  totalUpah(o: Openshift): string {
    if (o.upahJenis !== 'NOMINAL') return '-';
    if (!o.dihadiriIds.length) return 'Rp 0';
    const total = o.dihadiriIds.length * (o.upahPerJam || 0) * this.durasiJam(o);
    return `Rp ${total.toLocaleString('id-ID')}`;
  }

  onSearchChange(): void { this.page.set(1); }
  goToPage(p: number): void { if (p < 1 || p > this.totalPages()) return; this.page.set(p); }
  pages(): number[] { return Array.from({ length: this.totalPages() }, (_, i) => i + 1); }

  openTambah(): void {
    this.editingId.set(null);
    this.modalError.set('');
    this.modalData = this.empty();
    this.showFormModal.set(true);
  }

  openEdit(o: Openshift): void {
    this.editingId.set(o.id);
    this.modalError.set('');
    this.modalData = JSON.parse(JSON.stringify(o));
    this.showFormModal.set(true);
  }

  closeFormModal(): void { this.showFormModal.set(false); }

  toggleDivisiTarget(id: number): void {
    const set = new Set(this.modalData.divisiIds);
    if (set.has(id)) set.delete(id); else set.add(id);
    this.modalData.divisiIds = [...set];
  }

  saveOpenshift(): void {
    if (!this.modalData.tanggalMulai || !this.modalData.jamMulai ||
        !this.modalData.tanggalSelesai || !this.modalData.jamSelesai) {
      this.modalError.set('Tanggal & jam mulai/selesai wajib diisi.');
      return;
    }
    if (!this.modalData.divisiIds.length) {
      this.modalError.set('Pilih minimal satu divisi target.');
      return;
    }
    this.saving.set(true);
    const id  = this.editingId();
    const req = this.toRequest(this.modalData);
    const obs$ = id ? this.api.update(id, req) : this.api.create(req);
    obs$.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? 'Openshift berhasil diperbarui.' : 'Openshift berhasil ditambahkan.');
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message || err?.message || 'Gagal menyimpan openshift.');
      }
    });
  }

  askDelete(id: number): void { this.confirmDeleteId.set(id); }
  cancelDelete(): void { this.confirmDeleteId.set(null); }
  doDelete(): void {
    const id = this.confirmDeleteId();
    if (id == null) return;
    this.api.delete(id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.showToast('Openshift berhasil dihapus.');
        this.load();
      },
      error: (err) => {
        this.confirmDeleteId.set(null);
        this.error.set(err?.error?.message || 'Gagal menghapus openshift.');
      }
    });
  }

  openRiwayat(o: Openshift): void { this.riwayatItem.set(o); this.showRiwayatModal.set(true); }
  closeRiwayat(): void { this.showRiwayatModal.set(false); this.riwayatItem.set(null); }

  openImportModal(): void {
    this.importResult.set(null);
    this.importFile.set(null);
    this.showImportModal.set(true);
  }
  closeImportModal(): void {
    this.showImportModal.set(false);
    this.importFile.set(null);
    this.importResult.set(null);
  }

  onImportFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;
    this.importFile.set(file);
    this.importResult.set(null);
  }

  clearImportFile(): void {
    this.importFile.set(null);
    this.importResult.set(null);
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  prosesImport(): void {
    const file = this.importFile();
    if (!file) return;
    this.importBusy.set(true);
    this.importResult.set(null);
    this.api.importCsv(file).subscribe({
      next: (res) => {
        this.importBusy.set(false);
        this.importResult.set(res);
        if (res.berhasil > 0) {
          this.showToast(`${res.berhasil} openshift berhasil diimpor.`);
          // Reset filter & halaman agar data yang baru masuk terlihat
          this.filterMulai.set('');
          this.filterSelesai.set('');
          this.filterDivisiId.set(null);
          this.query.set('');
          this.page.set(1);
          this.load();
        }
      },
      error: (err) => {
        this.importBusy.set(false);
        const msg = err?.error?.message || err?.message || 'Gagal mengirim file ke server.';
        this.importResult.set({ berhasil: 0, gagal: 1, errors: [{ baris: 0, pesan: msg }] });
      }
    });
  }

  downloadTemplate(): void {
    const header = [
      'Jam Masuk', 'Jam Keluar', 'Divisi', 'Maks. Karyawan',
      'Upah Per jam sesuai upah lembur', 'Upah Per jam', 'Catatan'
    ];
    const contohDivisi = this.divisiList()[0]?.namaDivisi || 'Nama Divisi';
    const example1 = ['2026-04-28 09:00','2026-04-28 17:00', contohDivisi, '',  'YA',    '',      'Contoh openshift'];
    const example2 = ['2026-04-28 18:00','2026-04-28 22:00', contohDivisi, '5', 'TIDAK', '20000', 'Contoh nominal upah'];
    const body = [header, example1, example2]
      .map(row => row.map(c => this.csvCell(c)).join(','))
      .join('\r\n') + '\r\n';
    this.downloadCsv('template_openshift.csv', body);
  }

  imporExcel(): void { this.openImportModal(); }

  eksporExcel(): void {
    const rows = this.list();
    if (!rows.length) { this.showToast('Tidak ada data untuk diekspor.'); return; }
    const header = [
      'Jam Masuk', 'Jam Keluar', 'Divisi', 'Maks. Karyawan',
      'Upah Per jam sesuai upah lembur', 'Upah Per jam', 'Catatan'
    ];
    const lines = [header.map(h => this.csvCell(h)).join(',')];
    for (const o of rows) {
      const jamMasuk  = `${o.tanggalMulai} ${o.jamMulai}`;
      const jamKeluar = `${o.tanggalSelesai} ${o.jamSelesai}`;
      const divisi    = this.divisiNamaList(o).join('; ');
      const maks      = o.maksKaryawan == null || o.maksKaryawan === 0 ? '' : String(o.maksKaryawan);
      const sesuai    = o.upahJenis === 'SESUAI_LEMBUR' ? 'YA' : 'TIDAK';
      const upah      = o.upahJenis === 'NOMINAL' ? String(o.upahPerJam || 0) : '';
      const row = [jamMasuk, jamKeluar, divisi, maks, sesuai, upah, o.catatan || ''];
      lines.push(row.map(c => this.csvCell(c)).join(','));
    }
    const csv = lines.join('\r\n') + '\r\n';
    this.downloadCsv('openshift.csv', csv);
    this.showToast('Data openshift berhasil diekspor.');
  }

  private csvCell(v: string | number): string {
    const s = String(v ?? '');
    if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  private downloadCsv(filename: string, body: string): void {
    const content = '\uFEFF' + 'sep=,\r\n' + body;
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  private toastTimer: any = null;
  showToast(msg: string, durationMs = 3000): void {
    this.successMsg.set(msg);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.successMsg.set(''), durationMs);
  }

  private empty(): Openshift {
    return {
      id: 0,
      tanggalMulai: '', jamMulai: '',
      tanggalSelesai: '', jamSelesai: '',
      catatan: '',
      upahJenis: 'SESUAI_LEMBUR',
      upahPerJam: 0,
      maksKaryawan: null,
      divisiIds: [],
      peminatIds: [],
      dihadiriIds: []
    };
  }
}
