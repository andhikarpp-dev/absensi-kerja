import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KunjunganKlienService } from '../../../core/services/kunjungan-klien.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KunjunganKlien, KunjunganKlienRequest, Klien } from '../../../core/models/kunjungan-klien.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

declare const Swal: any;

@Component({
  selector: 'app-kunjungan',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './kunjungan.component.html',
  styleUrl: './kunjungan.component.scss'
})
export class KunjunganComponent implements OnInit {
  private svc      = inject(KunjunganKlienService);
  private divisiSvc = inject(DivisiService);

  readonly apiBase = environment.apiUrl.replace('/api', '');

  loading   = signal(false);
  error     = signal('');
  allData   = signal<KunjunganKlien[]>([]);
  klienList = signal<Klien[]>([]);
  divisiList = signal<Divisi[]>([]);

  // Filters
  filterFrom   = signal('');
  filterTo     = signal('');
  filterDivisi = signal<number | null>(null);
  filterKlien  = signal<number | null>(null);
  _cariInput   = signal('');
  filterCari   = signal('');

  // Pagination
  page     = signal(1);
  pageSize = 10;

  // Modal
  showModal   = signal(false);
  editId      = signal<number | null>(null);
  form = signal<KunjunganKlienRequest>({ karyawanId: 0, klienId: 0 });
  saving = signal(false);

  // ── Computed ──────────────────────────────────────────────────
  filteredData = computed(() => {
    let data = this.allData();
    const from  = this.filterFrom();
    const to    = this.filterTo();
    const div   = this.filterDivisi();
    const kl    = this.filterKlien();
    const cari  = this.filterCari().toLowerCase();
    if (from) data = data.filter(d => d.waktuMulai && d.waktuMulai >= from);
    if (to)   data = data.filter(d => d.waktuMulai && d.waktuMulai.substring(0, 10) <= to);
    if (div)  data = data.filter(d => true); // server-side
    if (kl)   data = data.filter(d => d.klienId === kl);
    if (cari) data = data.filter(d => (d.namaKaryawan ?? '').toLowerCase().includes(cari) || (d.namaKlien ?? '').toLowerCase().includes(cari));
    return data;
  });

  pagedData   = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredData().slice(start, start + this.pageSize);
  });
  totalPages  = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)));
  pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
  infoStart   = computed(() => this.filteredData().length === 0 ? 0 : (this.page() - 1) * this.pageSize + 1);
  infoEnd     = computed(() => Math.min(this.page() * this.pageSize, this.filteredData().length));

  ngOnInit() {
    this.loadData();
    this.svc.getAllKlien().subscribe({ next: d => this.klienList.set(d) });
    this.divisiSvc.findAll().subscribe({ next: (d: Divisi[]) => this.divisiList.set(d) });
  }

  loadData() {
    this.loading.set(true);
    this.svc.getAllKunjungan({
      divisiId: this.filterDivisi() ?? undefined,
      klienId:  this.filterKlien()  ?? undefined,
      from: this.filterFrom() || undefined,
      to:   this.filterTo()   || undefined,
      cari: this.filterCari() || undefined,
    }).subscribe({
      next: res => { this.allData.set(res); this.loading.set(false); },
      error: () => { this.error.set('Gagal memuat data.'); this.loading.set(false); }
    });
  }

  applyFilter() {
    this.filterCari.set(this._cariInput());
    this.page.set(1);
    this.loadData();
  }

  setPage(p: number) { this.page.set(p); }

  durasi(item: KunjunganKlien): string {
    if (!item.waktuMulai || !item.waktuSelesai) return '-';
    const ms = new Date(item.waktuSelesai).getTime() - new Date(item.waktuMulai).getTime();
    if (ms < 0) return '-';
    const totalSec = Math.floor(ms / 1000);
    const hours    = Math.floor(totalSec / 3600);
    const minutes  = Math.floor((totalSec % 3600) / 60);
    const secs     = totalSec % 60;
    if (hours > 0)   return `${hours}jm ${minutes}mn`;
    if (minutes > 0) return `${minutes}mn`;
    return `${secs}dt`;
  }

  formatDate(dt?: string): string {
    if (!dt) return '-';
    const d = new Date(dt);
    const day   = d.getDate();
    const month = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    const year  = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  formatTime(dt?: string): string {
    if (!dt) return '-';
    const d = new Date(dt);
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  fotoUrl(path?: string): string {
    if (!path) return 'assets/images/avatars/avatar-1.png';
    if (path.startsWith('http')) return path;
    return `${this.apiBase}/${path}`;
  }

  openCreate() {
    this.editId.set(null);
    this.form.set({ karyawanId: 0, klienId: 0 });
    this.showModal.set(true);
  }

  closeModal() { this.showModal.set(false); }

  delete(item: KunjunganKlien) {
    Swal.fire({
      title: 'Hapus kunjungan?',
      text: 'Data tidak dapat dikembalikan.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#d33'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.svc.deleteKunjungan(item.id).subscribe({
          next: () => {
            this.allData.update(d => d.filter(x => x.id !== item.id));
            Swal.fire('Terhapus!', '', 'success');
          },
          error: () => Swal.fire('Gagal!', 'Tidak dapat menghapus data.', 'error')
        });
      }
    });
  }

  exportExcel() {
    // placeholder
    Swal.fire('Info', 'Fitur ekspor Excel akan segera tersedia.', 'info');
  }

  notifikasi() {
    Swal.fire('Info', 'Fitur notifikasi Telegram akan segera tersedia.', 'info');
  }
}
