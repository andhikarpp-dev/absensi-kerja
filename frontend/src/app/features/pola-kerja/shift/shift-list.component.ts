import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { PolaKerjaService } from '../../../core/services/pola-kerja.service';
import {
  PolaKerja, PolaKerjaRequest, PolaKerjaHariItem, HARI_LIST
} from '../../../core/models/pola-kerja.model';

const SETTINGS_KEY = 'pola_kerja_shift_settings';

interface ShiftView {
  id: number;
  namaPolaKerja: string;
  jamMasuk: string;
  jamKeluar: string;
  mulaiIstirahat: string;
  selesaiIstirahat: string;
  warna: string;
  toleransi: number;
  catatan: string;
}

@Component({
  selector: 'app-shift-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './shift-list.component.html'
})
export class ShiftListComponent implements OnInit {
  private svc = inject(PolaKerjaService);

  list      = signal<ShiftView[]>([]);
  loading   = signal(true);
  error     = signal('');
  saving    = signal(false);
  successMsg = signal('');

  query     = signal('');
  page      = signal(1);
  pageSize  = signal(10);

  showFormModal     = signal(false);
  showSettingsModal = signal(false);
  showRiwayatModal  = signal(false);
  confirmDeleteId   = signal<number | null>(null);
  modalError        = signal('');
  editingId         = signal<number | null>(null);
  riwayatItem       = signal<ShiftView | null>(null);

  spvDapatMenambah    = signal<boolean>(true);
  spvDapatMemperbarui = signal<boolean>(true);

  modalData: ShiftView = this.empty();

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const data = this.list();
    if (!q) return data;
    return data.filter(p => (p.namaPolaKerja || '').toLowerCase().includes(q));
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize())));

  paged = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });

  ngOnInit(): void {
    this.load();
    const s = localStorage.getItem(SETTINGS_KEY);
    if (s) {
      try {
        const obj = JSON.parse(s);
        if (typeof obj.spvDapatMenambah === 'boolean') this.spvDapatMenambah.set(obj.spvDapatMenambah);
        if (typeof obj.spvDapatMemperbarui === 'boolean') this.spvDapatMemperbarui.set(obj.spvDapatMemperbarui);
      } catch {}
    }
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.svc.findAll('SHIFT').subscribe({
      next: data => {
        this.list.set((data || []).map(p => this.fromPola(p)));
        this.loading.set(false);
      },
      error: err => {
        this.error.set(err?.error?.message || 'Gagal memuat data.');
        this.loading.set(false);
      }
    });
  }

  // ── helpers ──────────────────────────────────────────────────
  jamKerjaLabel(p: ShiftView): string {
    if (!p.jamMasuk && !p.jamKeluar) return '-';
    return `${p.jamMasuk || '--:--'} - ${p.jamKeluar || '--:--'}`;
  }

  jamIstirahatLabel(p: ShiftView): string {
    if (!p.mulaiIstirahat && !p.selesaiIstirahat) return '';
    return `${p.mulaiIstirahat || '--:--'} - ${p.selesaiIstirahat || '--:--'}`;
  }

  onSearchChange(): void { this.page.set(1); }
  goToPage(p: number): void { if (p < 1 || p > this.totalPages()) return; this.page.set(p); }
  pages(): number[] { return Array.from({ length: this.totalPages() }, (_, i) => i + 1); }

  // ── Modal Tambah / Edit ──────────────────────────────────────
  openTambah(): void {
    this.editingId.set(null);
    this.modalError.set('');
    this.modalData = this.empty();
    this.showFormModal.set(true);
  }

  openEdit(p: ShiftView): void {
    this.editingId.set(p.id);
    this.modalError.set('');
    this.modalData = { ...p };
    this.showFormModal.set(true);
  }

  closeFormModal(): void { this.showFormModal.set(false); }

  saveShift(): void {
    if (!this.modalData.namaPolaKerja?.trim()) {
      this.modalError.set('Nama pola kerja wajib diisi.');
      return;
    }
    if (!this.modalData.jamMasuk || !this.modalData.jamKeluar) {
      this.modalError.set('Jam masuk dan jam keluar wajib diisi.');
      return;
    }
    this.saving.set(true);
    const req: PolaKerjaRequest = this.toRequest(this.modalData);

    const id = this.editingId();
    const obs = id ? this.svc.update(id, req) : this.svc.create(req);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? 'Pola kerja shift berhasil diperbarui.' : 'Pola kerja shift berhasil ditambahkan.');
        this.load();
      },
      error: err => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message || 'Gagal menyimpan pola kerja shift.');
      }
    });
  }

  // ── Hapus ────────────────────────────────────────────────────
  askDelete(id: number): void { this.confirmDeleteId.set(id); }
  cancelDelete(): void { this.confirmDeleteId.set(null); }
  doDelete(): void {
    const id = this.confirmDeleteId();
    if (id == null) return;
    this.svc.delete(id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.showToast('Pola kerja shift berhasil dihapus.');
        this.load();
      },
      error: err => {
        this.error.set(err?.error?.message || 'Gagal menghapus pola kerja shift.');
        this.confirmDeleteId.set(null);
      }
    });
  }

  // ── Riwayat ──────────────────────────────────────────────────
  openRiwayat(p: ShiftView): void { this.riwayatItem.set(p); this.showRiwayatModal.set(true); }
  closeRiwayat(): void { this.showRiwayatModal.set(false); this.riwayatItem.set(null); }

  // ── Pengaturan ───────────────────────────────────────────────
  openPengaturan(): void { this.showSettingsModal.set(true); }
  closePengaturan(): void { this.showSettingsModal.set(false); }
  simpanPengaturan(): void {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      spvDapatMenambah: this.spvDapatMenambah(),
      spvDapatMemperbarui: this.spvDapatMemperbarui()
    }));
    this.showSettingsModal.set(false);
    this.showToast('Pengaturan berhasil disimpan.');
  }

  // ── Toast ────────────────────────────────────────────────────
  private toastTimer: any = null;
  showToast(msg: string, durationMs = 3000): void {
    this.successMsg.set(msg);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.successMsg.set(''), durationMs);
  }

  // ── Mapper PolaKerja <-> ShiftView ───────────────────────────
  private fromPola(p: PolaKerja): ShiftView {
    const first: PolaKerjaHariItem | undefined = (p.hariList || [])[0];
    return {
      id: p.id,
      namaPolaKerja: p.namaPolaKerja,
      jamMasuk: first?.jamMasuk || '',
      jamKeluar: first?.jamKeluar || '',
      mulaiIstirahat: first?.mulaiIstirahat || '',
      selesaiIstirahat: first?.selesaiIstirahat || '',
      warna: p.warna || '#000000',
      toleransi: p.toleransiKeterlambatan ?? 0,
      catatan: p.catatan || ''
    };
  }

  private toRequest(s: ShiftView): PolaKerjaRequest {
    // Untuk shift, isi semua 7 hari dengan jadwal yang sama agar konsisten dengan struktur entity.
    const hariList: PolaKerjaHariItem[] = HARI_LIST.map(h => ({
      hari: h,
      polaHari: 'HARI_KERJA',
      jamMasuk: s.jamMasuk,
      jamKeluar: s.jamKeluar,
      mulaiIstirahat: s.mulaiIstirahat,
      selesaiIstirahat: s.selesaiIstirahat,
      maksMenitIstirahat: 60
    }));
    return {
      namaPolaKerja: s.namaPolaKerja,
      toleransiKeterlambatan: s.toleransi ?? 0,
      jenisJadwal: 'JAM_TETAP',
      kategori: 'SHIFT',
      warna: s.warna,
      catatan: s.catatan,
      hariList
    };
  }

  private empty(): ShiftView {
    return {
      id: 0,
      namaPolaKerja: '',
      jamMasuk: '',
      jamKeluar: '',
      mulaiIstirahat: '',
      selesaiIstirahat: '',
      warna: '#000000',
      toleransi: 20,
      catatan: ''
    };
  }
}
