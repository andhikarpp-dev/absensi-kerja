import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { PolaKerjaService } from '../../../core/services/pola-kerja.service';
import {
  PolaKerja,
  PolaKerjaRequest,
  defaultHariList,
  HARI_LIST,
  JenisJadwal,
  PolaHariKerja
} from '../../../core/models/pola-kerja.model';

@Component({
  selector: 'app-hari-kerja-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './hari-kerja-list.component.html'
})
export class HariKerjaListComponent implements OnInit {
  private svc = inject(PolaKerjaService);

  // Data
  list      = signal<PolaKerja[]>([]);
  loading   = signal(true);
  error     = signal('');
  saving    = signal(false);
  successMsg = signal('');

  // Search & paging
  query     = signal('');
  page      = signal(1);
  pageSize  = signal(10);

  // Modal state
  showFormModal       = signal(false);
  showSettingsModal   = signal(false);
  showRiwayatModal    = signal(false);
  confirmDeleteId     = signal<number | null>(null);
  modalError          = signal('');
  editingId           = signal<number | null>(null);
  riwayatItem         = signal<PolaKerja | null>(null);

  // Pengaturan (toleransi global default)
  defaultToleransi = signal<number>(20);

  // Pengaturan hak akses SPV
  spvDapatMenambah     = signal<boolean>(true);
  spvDapatMemperbarui  = signal<boolean>(true);

  hariLabels: Record<string, string> = {
    SENIN: 'Senin', SELASA: 'Selasa', RABU: 'Rabu', KAMIS: 'Kamis',
    JUMAT: 'Jumat', SABTU: 'Sabtu', MINGGU: 'Minggu'
  };

  modalData: PolaKerjaRequest = this.empty();

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
    const t = localStorage.getItem('pola_kerja_default_toleransi');
    if (t) this.defaultToleransi.set(+t);
    const a = localStorage.getItem('pola_kerja_spv_tambah');
    if (a !== null) this.spvDapatMenambah.set(a === 'true');
    const u = localStorage.getItem('pola_kerja_spv_update');
    if (u !== null) this.spvDapatMemperbarui.set(u === 'true');
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.svc.findAll('HARI_KERJA').subscribe({
      next: data => { this.list.set(data || []); this.loading.set(false); },
      error: err => { this.error.set(err?.error?.message || 'Gagal memuat data.'); this.loading.set(false); }
    });
  }

  // ── helpers ──────────────────────────────────────────────────
  countHari(p: PolaKerja): { kerja: number; libur: number } {
    let kerja = 0, libur = 0;
    (p.hariList || []).forEach(h => {
      if (h.polaHari === 'LIBUR') libur++; else kerja++;
    });
    return { kerja, libur };
  }

  polaKerjaLabel(p: PolaKerja): string {
    const c = this.countHari(p);
    return `${c.kerja} Hari Kerja, ${c.libur} Jadwal Libur`;
  }

  onSearchChange(): void { this.page.set(1); }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages()) return;
    this.page.set(p);
  }

  pages(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  // ── Modal Tambah / Edit ──────────────────────────────────────
  openTambah(): void {
    this.editingId.set(null);
    this.modalError.set('');
    this.modalData = this.empty();
    this.modalData.toleransiKeterlambatan = this.defaultToleransi();
    this.showFormModal.set(true);
  }

  openEdit(p: PolaKerja): void {
    this.editingId.set(p.id);
    this.modalError.set('');
    // deep clone agar perubahan modal tidak langsung berdampak
    this.modalData = {
      namaPolaKerja: p.namaPolaKerja,
      toleransiKeterlambatan: p.toleransiKeterlambatan,
      jenisJadwal: p.jenisJadwal,
      divisiIds: [...(p.divisiIds || [])],
      hariList: HARI_LIST.map(h => {
        const found = (p.hariList || []).find(x => x.hari === h);
        return found
          ? { ...found }
          : {
              hari: h,
              polaHari: 'HARI_KERJA' as PolaHariKerja,
              jamMasuk: '',
              jamKeluar: '',
              mulaiIstirahat: '',
              selesaiIstirahat: '',
              maksMenitIstirahat: 60
            };
      })
    };
    this.showFormModal.set(true);
  }

  closeFormModal(): void { this.showFormModal.set(false); }

  onJadwalChange(j: JenisJadwal): void {
    this.modalData.jenisJadwal = j;
  }

  savePolaKerja(): void {
    if (!this.modalData.namaPolaKerja?.trim()) {
      this.modalError.set('Nama pola kerja wajib diisi.');
      return;
    }
    this.saving.set(true);
    const req: PolaKerjaRequest = { ...this.modalData, kategori: 'HARI_KERJA' };
    const id = this.editingId();
    const obs = id ? this.svc.update(id, req) : this.svc.create(req);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? 'Pola kerja berhasil diperbarui.' : 'Pola kerja berhasil ditambahkan.');
        this.load();
      },
      error: err => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message || 'Gagal menyimpan pola kerja.');
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
        this.showToast('Pola kerja berhasil dihapus.');
        this.load();
      },
      error: err => {
        this.error.set(err?.error?.message || 'Gagal menghapus pola kerja.');
        this.confirmDeleteId.set(null);
      }
    });
  }

  // ── Riwayat (placeholder) ────────────────────────────────────
  openRiwayat(p: PolaKerja): void {
    this.riwayatItem.set(p);
    this.showRiwayatModal.set(true);
  }
  closeRiwayat(): void { this.showRiwayatModal.set(false); this.riwayatItem.set(null); }

  // ── Pengaturan ───────────────────────────────────────────────
  openPengaturan(): void { this.showSettingsModal.set(true); }
  closePengaturan(): void { this.showSettingsModal.set(false); }
  simpanPengaturan(): void {
    localStorage.setItem('pola_kerja_default_toleransi', String(this.defaultToleransi()));
    localStorage.setItem('pola_kerja_spv_tambah', String(this.spvDapatMenambah()));
    localStorage.setItem('pola_kerja_spv_update', String(this.spvDapatMemperbarui()));
    this.showSettingsModal.set(false);
    this.showToast('Pengaturan berhasil disimpan.');
  }

  private toastTimer: any = null;
  showToast(msg: string, durationMs = 3000): void {
    this.successMsg.set(msg);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.successMsg.set(''), durationMs);
  }

  private empty(): PolaKerjaRequest {
    return {
      namaPolaKerja: '',
      toleransiKeterlambatan: this.defaultToleransi() ?? 20,
      jenisJadwal: 'JAM_TETAP',
      hariList: defaultHariList()
    };
  }
}
