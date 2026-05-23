import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KunjunganKlienService } from '../../../core/services/kunjungan-klien.service';
import { Klien, KlienRequest } from '../../../core/models/kunjungan-klien.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

declare const Swal: any;

@Component({
  selector: 'app-klien',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './klien.component.html',
  styleUrl: './klien.component.scss'
})
export class KlienComponent implements OnInit {
  private svc = inject(KunjunganKlienService);

  loading    = signal(false);
  error      = signal('');
  allData    = signal<Klien[]>([]);
  _cariInput = signal('');
  filterCari = signal('');

  page     = signal(1);
  pageSize = 10;

  showModal = signal(false);
  editId    = signal<number | null>(null);
  saving    = signal(false);
  form      = signal<KlienRequest>({ namaKlien: '' });

  filteredData = computed(() => {
    const c = this.filterCari().toLowerCase();
    if (!c) return this.allData();
    return this.allData().filter(k =>
      k.namaKlien.toLowerCase().includes(c) ||
      (k.alamat ?? '').toLowerCase().includes(c)
    );
  });

  pagedData   = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredData().slice(start, start + this.pageSize);
  });
  totalPages  = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)));
  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
  infoStart   = computed(() => this.filteredData().length === 0 ? 0 : (this.page() - 1) * this.pageSize + 1);
  infoEnd     = computed(() => Math.min(this.page() * this.pageSize, this.filteredData().length));

  ngOnInit() { this.loadData(); }

  loadData() {
    this.loading.set(true);
    this.svc.getAllKlien().subscribe({
      next: d => { this.allData.set(d); this.loading.set(false); },
      error: () => { this.error.set('Gagal memuat data.'); this.loading.set(false); }
    });
  }

  applyFilter() { this.filterCari.set(this._cariInput()); this.page.set(1); }
  setPage(p: number) { this.page.set(p); }

  openCreate() {
    this.editId.set(null);
    this.form.set({ namaKlien: '' });
    this.showModal.set(true);
  }

  openEdit(item: Klien) {
    this.editId.set(item.id);
    this.form.set({
      namaKlien: item.namaKlien,
      alamat: item.alamat,
      telepon: item.telepon,
      email: item.email,
      keterangan: item.keterangan
    });
    this.showModal.set(true);
  }

  closeModal() { this.showModal.set(false); }

  save() {
    if (!this.form().namaKlien?.trim()) {
      Swal.fire('Error', 'Nama klien wajib diisi.', 'error'); return;
    }
    this.saving.set(true);
    const id = this.editId();
    const obs = id
      ? this.svc.updateKlien(id, this.form())
      : this.svc.createKlien(this.form());
    obs.subscribe({
      next: (saved) => {
        this.saving.set(false);
        this.showModal.set(false);
        if (id) {
          this.allData.update(d => d.map(x => x.id === id ? saved : x));
        } else {
          this.allData.update(d => [saved, ...d]);
        }
        Swal.fire('Berhasil!', `Klien berhasil ${id ? 'diperbarui' : 'ditambahkan'}.`, 'success');
      },
      error: () => { this.saving.set(false); Swal.fire('Gagal!', 'Terjadi kesalahan.', 'error'); }
    });
  }

  delete(item: Klien) {
    Swal.fire({
      title: `Hapus klien "${item.namaKlien}"?`,
      text: 'Data tidak dapat dikembalikan.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#d33'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.svc.deleteKlien(item.id).subscribe({
          next: () => {
            this.allData.update(d => d.filter(x => x.id !== item.id));
            Swal.fire('Terhapus!', '', 'success');
          },
          error: () => Swal.fire('Gagal!', 'Tidak dapat menghapus klien.', 'error')
        });
      }
    });
  }
}
