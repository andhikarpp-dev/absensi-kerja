import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { JabatanService } from '../../../core/services/jabatan.service';
import { Jabatan, JabatanRequest } from '../../../core/models/jabatan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

// Node untuk tampilan pohon hirarki
export interface TreeNode {
  jabatan: Jabatan;
  children: TreeNode[];
}

// Struktur jabatan default
const DEFAULT_JABATAN = [
  { nama: 'CEO',                        induk: null },
  { nama: 'IT Manager',                 induk: 'CEO' },
  { nama: 'IT Supervisor',              induk: 'IT Manager' },
  { nama: 'IT Staff',                   induk: 'IT Supervisor' },
  { nama: 'Sales & Marketing Manager',  induk: 'CEO' },
  { nama: 'Sales & Marketing Supervisor', induk: 'Sales & Marketing Manager' },
  { nama: 'Sales Staff',                induk: 'Sales & Marketing Supervisor' },
  { nama: 'Marketing Staff',            induk: 'Sales & Marketing Supervisor' },
  { nama: 'HRGA Manager',               induk: 'CEO' },
  { nama: 'HRGA Supervisor',            induk: 'HRGA Manager' },
  { nama: 'HRD Staff',                  induk: 'HRGA Supervisor' },
  { nama: 'GA Staff',                   induk: 'HRGA Supervisor' },
  { nama: 'Finance Accounting Manager', induk: 'CEO' },
  { nama: 'Accounting Supervisor',      induk: 'Finance Accounting Manager' },
  { nama: 'Finance Supervisor',         induk: 'Finance Accounting Manager' },
  { nama: 'Accounting Staff',           induk: 'Accounting Supervisor' },
  { nama: 'Finance Staff',              induk: 'Finance Supervisor' },
];

@Component({
  selector: 'app-jabatan-list',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, LayoutComponent],
  templateUrl: './jabatan-list.component.html'
})
export class JabatanListComponent implements OnInit {
  private svc = inject(JabatanService);

  list              = signal<Jabatan[]>([]);
  loading           = signal(true);
  error             = signal('');
  confirmDeleteId   = signal<number | null>(null);

  // Riwayat modal
  showRiwayatId     = signal<number | null>(null);

  // Visualisasi modal
  showVisualisasi   = signal(false);

  // Tambah Default modal
  showDefaultModal  = signal(false);
  savingDefault     = signal(false);

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.svc.findAll().subscribe({
      next: data => { this.list.set(data); this.loading.set(false); },
      error: err  => { this.error.set(err?.message ?? 'Gagal memuat data.'); this.loading.set(false); }
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

  openRiwayat(id: number): void { this.showRiwayatId.set(id); }
  closeRiwayat(): void { this.showRiwayatId.set(null); }

  get riwayatJabatan(): Jabatan | undefined {
    return this.list().find(j => j.id === this.showRiwayatId());
  }

  // ── Visualisasi pohon ────────────────────────────────────
  openVisualisasi(): void  { this.showVisualisasi.set(true); }
  closeVisualisasi(): void { this.showVisualisasi.set(false); }

  /** Bangun tree dari flat list, kembalikan hanya root nodes */
  get treeRoots(): TreeNode[] {
    return this.buildTree(this.list());
  }

  private buildTree(list: Jabatan[]): TreeNode[] {
    const map = new Map<number, TreeNode>();
    list.forEach(j => map.set(j.id, { jabatan: j, children: [] }));
    const roots: TreeNode[] = [];
    list.forEach(j => {
      const node = map.get(j.id)!;
      if (j.indukId && map.has(j.indukId)) {
        map.get(j.indukId)!.children.push(node);
      } else {
        roots.push(node);
      }
    });
    return roots;
  }

  // ── Tambah Jabatan Default ───────────────────────────────
  openDefaultModal(): void  { this.showDefaultModal.set(true); }
  closeDefaultModal(): void { this.showDefaultModal.set(false); }

  async tambahJabatanDefault(): Promise<void> {
    this.savingDefault.set(true);
    try {
      // Simpan id yang sudah dibuat: nama → id
      const createdMap = new Map<string, number>();

      for (const item of DEFAULT_JABATAN) {
        const indukId = item.induk ? (createdMap.get(item.induk) ?? null) : null;
        const req: JabatanRequest = {
          namaJabatan: item.nama,
          indukId,
          targetKehadiranList: []
        };
        const result = await this.svc.create(req).toPromise();
        if (result) createdMap.set(item.nama, result.id);
      }

      this.showDefaultModal.set(false);
      this.load();
    } catch (err: any) {
      this.error.set(err?.data?.message ?? err?.message ?? 'Gagal menambah jabatan default.');
    } finally {
      this.savingDefault.set(false);
    }
  }

  formatDate(iso: string): string {
    if (!iso) return '-';
    return new Date(iso).toLocaleString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  }
}
