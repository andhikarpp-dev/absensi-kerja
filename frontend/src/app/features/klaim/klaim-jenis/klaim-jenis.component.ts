import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { JenisKlaimService } from '../../../core/services/jenis-klaim.service';
import { JenisKlaimKonfigurasi, JenisKlaimKonfigurasiRequest } from '../../../core/models/klaim.model';

declare const Swal: any;

@Component({
  selector: 'app-klaim-jenis',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
  templateUrl: './klaim-jenis.component.html',
  styleUrl: './klaim-jenis.component.scss'
})
export class KlaimJenisComponent implements OnInit {
  private svc = inject(JenisKlaimService);

  loading = signal(false);
  error   = signal('');

  list = signal<JenisKlaimKonfigurasi[]>([]);

  // Search
  cariInput = signal('');
  cari      = signal('');

  get cariInputValue() { return this.cariInput(); }
  set cariInputValue(v: string) { this.cariInput.set(v); }

  // Pagination
  page     = signal(1);
  pageSize = 10;

  filtered = computed(() => {
    const q = this.cari().toLowerCase();
    return q
      ? this.list().filter(j => j.nama.toLowerCase().includes(q))
      : this.list();
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));

  paged = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  pages = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  // Modal
  showModal   = signal(false);
  editId      = signal<number | null>(null);
  saving      = signal(false);
  modalError  = signal('');

  form = signal<JenisKlaimKonfigurasiRequest>({
    nama: '',
    deskripsi: '',
    tglMulaiBerlaku: null,
    kadaluwarsa: null,
    kuota: 0,
    tampilkanKuotaKeKaryawan: false,
    terapkanKeKaryawanBaru: false,
    minJumlahPengajuan: null,
    maxJumlahPengajuan: null,
    minKlaimSelanjutnya: null
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next: data => { this.list.set(data); this.loading.set(false); },
      error: ()   => { this.error.set('Gagal memuat data.'); this.loading.set(false); }
    });
  }

  search() { this.cari.set(this.cariInput()); this.page.set(1); }
  onCariKey(e: KeyboardEvent) { if (e.key === 'Enter') this.search(); }

  goPage(p: number) {
    if (p >= 1 && p <= this.totalPages()) this.page.set(p);
  }

  openCreate() {
    this.editId.set(null);
    this.form.set({
      nama: '', deskripsi: '', tglMulaiBerlaku: null, kadaluwarsa: null,
      kuota: 0, tampilkanKuotaKeKaryawan: false, terapkanKeKaryawanBaru: false,
      minJumlahPengajuan: null, maxJumlahPengajuan: null, minKlaimSelanjutnya: null
    });
    this.modalError.set('');
    this.showModal.set(true);
  }

  openEdit(item: JenisKlaimKonfigurasi) {
    this.editId.set(item.id);
    this.form.set({
      nama: item.nama,
      deskripsi: item.deskripsi ?? '',
      tglMulaiBerlaku: item.tglMulaiBerlaku ?? null,
      kadaluwarsa: item.kadaluwarsa ?? null,
      kuota: item.kuota,
      tampilkanKuotaKeKaryawan: item.tampilkanKuotaKeKaryawan,
      terapkanKeKaryawanBaru: item.terapkanKeKaryawanBaru,
      minJumlahPengajuan: item.minJumlahPengajuan ?? null,
      maxJumlahPengajuan: item.maxJumlahPengajuan ?? null,
      minKlaimSelanjutnya: item.minKlaimSelanjutnya ?? null
    });
    this.modalError.set('');
    this.showModal.set(true);
  }

  closeModal() { this.showModal.set(false); }

  patchForm(patch: Partial<JenisKlaimKonfigurasiRequest>) {
    this.form.set({ ...this.form(), ...patch });
  }

  save() {
    if (!this.form().nama.trim()) { this.modalError.set('Nama wajib diisi.'); return; }
    if (!this.form().kuota && this.form().kuota !== 0) { this.modalError.set('Kuota wajib diisi.'); return; }
    this.saving.set(true);
    this.modalError.set('');
    const id = this.editId();
    const req = this.form();
    const obs = id ? this.svc.update(id, req) : this.svc.create(req);
    obs.subscribe({
      next: () => { this.saving.set(false); this.showModal.set(false); this.load(); },
      error: (err) => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message ?? 'Gagal menyimpan data.');
      }
    });
  }

  confirmDelete(item: JenisKlaimKonfigurasi) {
    Swal.fire({
      title: 'Hapus Jenis Klaim?',
      text: `"${item.nama}" akan dihapus permanen.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#ef4444'
    }).then((r: any) => {
      if (r.isConfirmed) this.deleteItem(item.id);
    });
  }

  private deleteItem(id: number) {
    this.svc.delete(id).subscribe({
      next: () => this.load(),
      error: () => Swal.fire('Error', 'Gagal menghapus jenis klaim.', 'error')
    });
  }

  formatRp(val?: number | null): string {
    if (val == null) return '-';
    return new Intl.NumberFormat('id-ID').format(val);
  }

  formatKadaluwarsa(val?: number | null): string {
    return val == null ? 'Unlimited' : `${val} Bulan`;
  }

  formatDate(d?: string | null): string {
    if (!d) return '-';
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
