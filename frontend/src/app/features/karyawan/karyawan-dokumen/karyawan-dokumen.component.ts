import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { DokumenKaryawanService } from '../../../core/services/dokumen-karyawan.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import {
  DokumenKaryawan, DokumenKaryawanRequest, KuotaDokumen, StatusKuotaDokumen
} from '../../../core/models/dokumen-karyawan.model';

@Component({
  selector: 'app-karyawan-dokumen',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './karyawan-dokumen.component.html',
  styleUrl: './karyawan-dokumen.component.scss'
})
export class KaryawanDokumenComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private karyawanSvc = inject(KaryawanService);
  private svc         = inject(DokumenKaryawanService);

  karyawan = signal<Karyawan | null>(null);
  loading  = signal(false);
  error    = signal('');

  list  = signal<DokumenKaryawan[]>([]);
  kuota = signal<KuotaDokumen>({ totalGratis: 0, kuotaGratis: 2, totalBerbayar: 0, kuotaBerbayar: 0 });

  searchTerm = signal('');

  rows = computed(() => {
    const q = this.searchTerm().trim().toLowerCase();
    if (!q) return this.list();
    return this.list().filter(d =>
      d.namaDokumen?.toLowerCase().includes(q) ||
      d.namaBerkas?.toLowerCase().includes(q));
  });

  // Modal form
  showFormModal = signal(false);
  editId        = signal<number | null>(null);
  saving        = signal(false);
  errorForm     = signal('');
  berkasFile: File | null = null;
  berkasNama   = signal('');

  form = signal<DokumenKaryawanRequest>({
    namaDokumen: '',
    tanggalBerakhir: '',
    hariReminder: 7,
    statusKuota: 'GRATIS'
  });

  // Modal Pesan Kuota
  showPesanKuotaModal = signal(false);
  kuotaOptions = [
    { jumlah: 10, harga: 20000 },
    { jumlah: 30, harga: 30000 },
    { jumlah: 50, harga: 40000 },
  ];
  selectedKuotaOption = signal(this.kuotaOptions[0]);
  pesanKuotaSaving = signal(false);

  openPesanKuota(): void {
    this.selectedKuotaOption.set(this.kuotaOptions[0]);
    this.showPesanKuotaModal.set(true);
  }

  pesanKuota(): void {
    const k = this.karyawan(); if (!k) return;
    this.pesanKuotaSaving.set(true);
    const opt = this.selectedKuotaOption();
    this.svc.tambahKuotaBerbayar(k.id, opt.jumlah).subscribe({
      next: () => {
        this.pesanKuotaSaving.set(false);
        this.showPesanKuotaModal.set(false);
        this.showToast(`Kuota berbayar +${opt.jumlah} berhasil dipesan.`);
        this.loadKuota();
      },
      error: err => {
        this.pesanKuotaSaving.set(false);
        this.showToast(err?.error?.message ?? 'Gagal memesan kuota.', 'danger');
      }
    });
  }

  formatRupiah(value: number): string {
    return value.toLocaleString('id-ID');
  }

  // Konfirmasi hapus
  konfirmasiHapusId = signal<number | null>(null);

  // Toast
  toastMsg  = signal('');
  toastType = signal<'success' | 'danger'>('success');
  private _toastTimer: any;

  showToast(msg: string, type: 'success' | 'danger' = 'success'): void {
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this.toastMsg.set(msg); this.toastType.set(type);
    this._toastTimer = setTimeout(() => this.toastMsg.set(''), 3000);
  }

  // ── helpers ────────────────────────────────────────────
  formatTanggal(tgl?: string): string {
    if (!tgl) return '—';
    const d = new Date(tgl.length <= 10 ? tgl + 'T00:00:00' : tgl);
    if (isNaN(d.getTime())) return '—';
    const hari = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'][d.getDay()];
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${hari}, ${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()}`;
  }

  formatDateTime(dt?: string): string {
    if (!dt) return '';
    const d = new Date(dt);
    if (isNaN(d.getTime())) return '';
    const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()];
    return `${d.getDate().toString().padStart(2,'0')} ${bln} ${d.getFullYear()} @ ` +
           `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  }

  formatBytes(bytes?: number): string {
    if (bytes == null) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  iconForFile(name?: string): string {
    if (!name) return 'bxs-file';
    const ext = name.split('.').pop()?.toLowerCase() ?? '';
    if (ext === 'pdf') return 'bxs-file-pdf';
    if (['doc','docx'].includes(ext)) return 'bxs-file-doc';
    if (['xls','xlsx','csv'].includes(ext)) return 'bxs-spreadsheet';
    if (['png','jpg','jpeg','gif','webp'].includes(ext)) return 'bxs-image';
    return 'bxs-file';
  }

  iconColor(name?: string): string {
    if (!name) return '#6b7280';
    const ext = name.split('.').pop()?.toLowerCase() ?? '';
    if (ext === 'pdf') return '#dc2626';
    if (['doc','docx'].includes(ext)) return '#2563eb';
    if (['xls','xlsx','csv'].includes(ext)) return '#059669';
    if (['png','jpg','jpeg','gif','webp'].includes(ext)) return '#7c3aed';
    return '#6b7280';
  }

  // ── data ───────────────────────────────────────────────
  load(): void {
    const k = this.karyawan(); if (!k) return;
    this.loading.set(true);
    this.svc.getAll(k.id).subscribe({
      next: d => { this.list.set(d); this.loading.set(false); },
      error: () => { this.loading.set(false); this.showToast('Gagal memuat dokumen.', 'danger'); }
    });
  }

  loadKuota(): void {
    const k = this.karyawan(); if (!k) return;
    this.svc.getKuota(k.id).subscribe({
      next: q => this.kuota.set(q),
      error: () => {}
    });
  }

  // ── form ───────────────────────────────────────────────
  openTambah(): void {
    this.editId.set(null);
    this.errorForm.set('');
    this.berkasFile = null;
    this.berkasNama.set('');
    this.form.set({
      namaDokumen: '',
      tanggalBerakhir: '',
      hariReminder: 7,
      statusKuota: 'GRATIS'
    });
    this.showFormModal.set(true);
  }

  openEdit(d: DokumenKaryawan): void {
    this.editId.set(d.id);
    this.errorForm.set('');
    this.berkasFile = null;
    this.berkasNama.set(d.namaBerkas ?? '');
    this.form.set({
      namaDokumen: d.namaDokumen,
      tanggalBerakhir: d.tanggalBerakhir ?? '',
      hariReminder: d.hariReminder ?? 7,
      statusKuota: d.statusKuota
    });
    this.showFormModal.set(true);
  }

  closeForm(): void { this.showFormModal.set(false); }

  updateForm<K extends keyof DokumenKaryawanRequest>(field: K, value: DokumenKaryawanRequest[K]): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  onBerkasChange(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    if (input.files?.length) {
      this.berkasFile = input.files[0];
      this.berkasNama.set(input.files[0].name);
    }
  }

  simpan(): void {
    const k = this.karyawan(); if (!k) return;
    const f = this.form();
    if (!f.namaDokumen?.trim()) { this.errorForm.set('Nama dokumen wajib diisi.'); return; }
    if (!this.editId() && !this.berkasFile) { this.errorForm.set('Berkas wajib diunggah.'); return; }

    const req: DokumenKaryawanRequest = {
      namaDokumen: f.namaDokumen.trim(),
      tanggalBerakhir: f.tanggalBerakhir || null,
      hariReminder: f.hariReminder ?? 7,
      statusKuota: f.statusKuota
    };

    this.saving.set(true);
    this.errorForm.set('');
    const id = this.editId();
    const obs = id
      ? this.svc.update(k.id, id, req, this.berkasFile ?? undefined)
      : this.svc.create(k.id, req, this.berkasFile!);

    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? 'Dokumen diperbarui.' : 'Dokumen berhasil ditambahkan.');
        this.load(); this.loadKuota();
      },
      error: err => {
        this.saving.set(false);
        this.errorForm.set(err?.error?.message ?? 'Gagal menyimpan dokumen.');
      }
    });
  }

  // ── hapus ──────────────────────────────────────────────
  konfirmasiHapus(id: number): void { this.konfirmasiHapusId.set(id); }
  batalHapus(): void { this.konfirmasiHapusId.set(null); }

  hapus(): void {
    const k = this.karyawan(); const id = this.konfirmasiHapusId();
    if (!k || id == null) return;
    this.svc.delete(k.id, id).subscribe({
      next: () => {
        this.konfirmasiHapusId.set(null);
        this.showToast('Dokumen berhasil dihapus.');
        this.load(); this.loadKuota();
      },
      error: () => this.showToast('Gagal menghapus dokumen.', 'danger')
    });
  }

  // ── lifecycle ──────────────────────────────────────────
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.karyawanSvc.findById(id).subscribe({
      next: k  => { this.karyawan.set(k); this.load(); this.loadKuota(); },
      error: () => this.error.set('Gagal memuat data karyawan.')
    });
  }
}
