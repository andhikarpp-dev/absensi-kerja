import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { SuratPeringatanService } from '../../../core/services/surat-peringatan.service';
import { JenisPeringatanService } from '../../../core/services/jenis-peringatan.service';
import { AuthService } from '../../../core/services/auth.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import {
  JenisPeringatan,
  PenyetujuSP,
  StatusPersetujuanSP,
  StatusSuratPeringatan,
  SuratPeringatan,
  SuratPeringatanRequest,
} from '../../../core/models/surat-peringatan.model';

@Component({
  selector: 'app-karyawan-surat-peringatan',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './karyawan-surat-peringatan.component.html',
  styleUrl: './karyawan-surat-peringatan.component.scss',
})
export class KaryawanSuratPeringatanComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private karyawanSvc = inject(KaryawanService);
  private spSvc       = inject(SuratPeringatanService);
  private jenisSvc    = inject(JenisPeringatanService);
  private authSvc     = inject(AuthService);

  karyawan = signal<Karyawan | null>(null);
  loading  = signal(false);
  error    = signal('');

  // Master data dari backend
  jenisList = signal<JenisPeringatan[]>([]);

  // Daftar semua karyawan (untuk picker penyetuju)
  karyawanList = signal<Karyawan[]>([]);

  // Index baris penyetuju yang dropdown-nya sedang terbuka (-1 = tidak ada)
  penyetujuOpenIdx = signal<number>(-1);
  penyetujuQuery   = signal('');

  // Data list dari backend
  list = signal<SuratPeringatan[]>([]);

  // Filter
  filterMulai             = signal('');
  filterSelesai           = signal('');
  filterStatus            = signal<StatusSuratPeringatan | ''>('');
  filterStatusPersetujuan = signal<StatusPersetujuanSP | ''>('');
  filterCari              = signal('');

  page     = signal(1);
  pageSize = signal(10);

  filtered = computed(() => {
    const q  = this.filterCari().trim().toLowerCase();
    const s  = this.filterStatus();
    const sp = this.filterStatusPersetujuan();
    const a  = this.filterMulai();
    const b  = this.filterSelesai();
    return this.list().filter(x => {
      if (s && x.status !== s) return false;
      if (sp && x.statusPersetujuan !== sp) return false;
      if (a && x.tanggalSelesai < a) return false;
      if (b && x.tanggalMulai > b) return false;
      if (q) {
        const blob = `${x.jenisNama} ${x.jenisKode} ${x.pelanggaran ?? ''}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  });

  total      = computed(() => this.filtered().length);
  totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));
  rows = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });
  pageNumbers = computed(() => {
    const n = this.totalPages();
    return Array.from({ length: n }, (_, i) => i + 1);
  });

  // Modal Tambah
  showFormModal     = signal(false);
  saving            = signal(false);
  errorForm         = signal('');
  jenisDropdownOpen = signal(false);
  jenisQuery        = signal('');
  form              = signal<SuratPeringatanRequest>(this.emptyForm());

  // Modal Jenis Peringatan
  showJenisModal = signal(false);
  jenisForm      = signal({ kode: '', nama: '' });

  // Toast
  toastMsg  = signal('');
  toastType = signal<'success' | 'danger'>('success');

  konfirmasiHapusId = signal<number | null>(null);

  // ── Modal Tolak / catatan persetujuan ─────────────────
  showTolakModal = signal(false);
  tolakId        = signal<number | null>(null);
  tolakCatatan   = signal('');

  // ── Modal Riwayat Perubahan ───────────────────────────
  showRiwayatModal = signal(false);
  riwayatPageIdx   = signal(1);
  riwayatPageSize  = 5;

  /** Riwayat penghapusan (tidak ada di backend, jadi disimpan per sesi). */
  deletedHistory = signal<Array<{
    sp: SuratPeringatan;
    actor: string;
    at: string;
  }>>([]);

  bukaRiwayat(): void {
    this.muatList();
    this.riwayatPageIdx.set(1);
    this.showRiwayatModal.set(true);
  }

  /** Item riwayat untuk ditampilkan di modal (gaya tabel). */
  riwayatItems = computed(() => {
    type Item = {
      ts: number;
      waktu: string;
      actor: string;
      actionLabel: string;
      badgeClass: string;
      spId: number;
      jenisKode: string;
      jenisNama: string;
      tanggalMulai: string;
      tanggalSelesai: string;
      namaKaryawan: string;
      statusPersetujuanLabel: string;
      penyetuju: PenyetujuSP[];
    };

    const items: Item[] = [];
    const me = this.authSvc.currentUser()?.namaLengkap ?? 'Pengguna';
    const k  = this.karyawan();
    const namaK = k?.namaLengkap ?? '';

    const buildBase = (sp: SuratPeringatan): Omit<Item, 'ts' | 'waktu' | 'actor' | 'actionLabel' | 'badgeClass'> => ({
      spId: sp.id,
      jenisKode: sp.jenisKode,
      jenisNama: sp.jenisNama,
      tanggalMulai: sp.tanggalMulai,
      tanggalSelesai: sp.tanggalSelesai,
      namaKaryawan: sp.namaKaryawan ?? namaK,
      statusPersetujuanLabel: this.statusPersetujuanLabel(sp.statusPersetujuan),
      penyetuju: sp.penyetuju ?? [],
    });

    for (const sp of this.list()) {
      if (sp.createdAt) {
        items.push({
          ...buildBase(sp),
          ts: new Date(sp.createdAt).getTime(),
          waktu: this.formatTanggalJam(sp.createdAt),
          actor: me,
          actionLabel: 'Dibuat',
          badgeClass: 'text-success border-success bg-white',
        });
      }
      if (sp.updatedAt && sp.updatedAt !== sp.createdAt) {
        items.push({
          ...buildBase(sp),
          ts: new Date(sp.updatedAt).getTime(),
          waktu: this.formatTanggalJam(sp.updatedAt),
          actor: me,
          actionLabel: 'Diubah',
          badgeClass: 'text-info border-info bg-white',
        });
      }
      if (sp.status === 'DICABUT') {
        const t = sp.updatedAt ?? sp.createdAt ?? '';
        items.push({
          ...buildBase(sp),
          ts: t ? new Date(t).getTime() : 0,
          waktu: t ? this.formatTanggalJam(t) : '',
          actor: me,
          actionLabel: 'Dicabut',
          badgeClass: 'text-secondary border-secondary bg-white',
        });
      }
    }

    for (const d of this.deletedHistory()) {
      items.push({
        ...buildBase(d.sp),
        ts: new Date(d.at).getTime(),
        waktu: this.formatTanggalJam(d.at),
        actor: d.actor,
        actionLabel: 'Dihapus',
        badgeClass: 'text-danger border-danger bg-white',
      });
    }

    return items.sort((a, b) => b.ts - a.ts);
  });

  riwayatTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.riwayatItems().length / this.riwayatPageSize)));

  riwayatPage = computed(() => {
    const start = (this.riwayatPageIdx() - 1) * this.riwayatPageSize;
    return this.riwayatItems().slice(start, start + this.riwayatPageSize);
  });

  statusPersetujuanLabel(s?: StatusPersetujuanSP): string {
    if (s === 'DISETUJUI') return 'Disetujui';
    if (s === 'DITOLAK')   return 'Ditolak';
    return 'Menunggu persetujuan';
  }

  formatTanggalJam(t: string): string {
    if (!t) return '-';
    const d = new Date(t);
    const tgl = d.toLocaleDateString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
    const jam = d.toLocaleTimeString('id-ID', {
      hour: '2-digit', minute: '2-digit', hour12: false,
    });
    return `${tgl} @ ${jam}`;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error.set('ID karyawan tidak ditemukan.');
      return;
    }
    this.loading.set(true);
    this.karyawanSvc.findById(id).subscribe({
      next: k => {
        this.karyawan.set(k);
        this.loading.set(false);
        this.muatList();
      },
      error: e => {
        this.error.set(e?.message ?? 'Gagal memuat karyawan.');
        this.loading.set(false);
      },
    });
    this.muatJenis();
    this.muatKaryawan();
  }

  muatJenis(): void {
    this.jenisSvc.getAll().subscribe({
      next: list => this.jenisList.set(list),
      error: e => this.showToast(e?.error?.message ?? 'Gagal memuat jenis.', 'danger'),
    });
  }

  muatKaryawan(): void {
    this.karyawanSvc.findAll().subscribe({
      next: list => this.karyawanList.set(list),
      error: e => this.showToast(e?.error?.message ?? 'Gagal memuat karyawan.', 'danger'),
    });
  }

  muatList(): void {
    const k = this.karyawan();
    if (!k) return;
    this.spSvc.getAll(k.id).subscribe({
      next: list => this.list.set(list),
      error: e => this.showToast(e?.error?.message ?? 'Gagal memuat data.', 'danger'),
    });
  }

  emptyForm(): SuratPeringatanRequest {
    return {
      jenisId: null,
      tanggalMulai: '',
      tanggalSelesai: '',
      pelanggaran: '',
      cegahPresensi: false,
      penyetuju: [],
      dokumen: null,
    };
  }

  updateForm<K extends keyof SuratPeringatanRequest>(
    key: K, value: SuratPeringatanRequest[K],
  ): void {
    this.form.set({ ...this.form(), [key]: value });
  }

  filteredJenis = computed(() => {
    const q = this.jenisQuery().trim().toLowerCase();
    if (!q) return this.jenisList();
    return this.jenisList().filter(j =>
      `${j.kode} ${j.nama}`.toLowerCase().includes(q));
  });

  selectedJenisLabel = computed(() => {
    const id = this.form().jenisId;
    if (id == null) return '';
    return this.jenisList().find(j => j.id === id)?.nama ?? '';
  });

  pickJenis(j: JenisPeringatan): void {
    this.updateForm('jenisId', j.id);
    this.jenisDropdownOpen.set(false);
    this.jenisQuery.set('');
  }

  onDokumenChange(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.updateForm('dokumen', f);
  }

  tambahPenyetuju(): void {
    const arr = [...this.form().penyetuju];
    arr.push({ karyawanId: null, nama: '' });
    this.updateForm('penyetuju', arr);
    this.penyetujuOpenIdx.set(arr.length - 1);
    this.penyetujuQuery.set('');
  }

  hapusPenyetuju(i: number): void {
    const arr = this.form().penyetuju.filter((_, idx) => idx !== i);
    this.updateForm('penyetuju', arr);
    if (this.penyetujuOpenIdx() === i) this.penyetujuOpenIdx.set(-1);
  }

  togglePenyetujuDropdown(i: number): void {
    this.penyetujuOpenIdx.set(this.penyetujuOpenIdx() === i ? -1 : i);
    this.penyetujuQuery.set('');
  }

  pickPenyetujuKaryawan(i: number, k: Karyawan): void {
    // Selalu gunakan index baris yang dropdown-nya sedang terbuka sebagai
    // sumber kebenaran. Parameter `i` bisa salah karena `$index` di dalam
    // @for bersarang akan ter-shadow oleh loop dalam.
    const targetIdx = this.penyetujuOpenIdx();
    const idx = targetIdx >= 0 ? targetIdx : i;
    const arr = this.form().penyetuju.map((p, j) =>
      j === idx ? { ...p, karyawanId: k.id, nama: k.namaLengkap } : p);
    this.updateForm('penyetuju', arr);
    this.penyetujuOpenIdx.set(-1);
    this.penyetujuQuery.set('');
  }

  /** Karyawan yang sudah dipilih sebagai penyetuju (untuk filter dari daftar). */
  private selectedPenyetujuIds = computed(() =>
    new Set(this.form().penyetuju.map(p => p.karyawanId).filter((x): x is number => x != null)));

  filteredKaryawan = computed(() => {
    const q = this.penyetujuQuery().trim().toLowerCase();
    const taken = this.selectedPenyetujuIds();
    return this.karyawanList().filter(k => {
      if (taken.has(k.id)) return false;
      if (!q) return true;
      return (k.namaLengkap ?? '').toLowerCase().includes(q);
    });
  });

  // updatePenyetujuNama dipertahankan untuk kompatibilitas (tidak dipakai lagi di template)
  updatePenyetujuNama(i: number, nama: string): void {
    const arr = this.form().penyetuju.map((p, idx) =>
      idx === i ? { ...p, nama } : p);
    this.updateForm('penyetuju', arr);
  }

  openTambah(): void {
    this.form.set(this.emptyForm());
    this.errorForm.set('');
    this.showFormModal.set(true);
  }

  closeForm(): void {
    this.showFormModal.set(false);
    this.jenisDropdownOpen.set(false);
  }

  simpan(): void {
    const f = this.form();
    if (!f.jenisId) { this.errorForm.set('Jenis peringatan wajib dipilih.'); return; }
    if (!f.tanggalMulai || !f.tanggalSelesai) {
      this.errorForm.set('Masa berlaku wajib diisi.'); return;
    }
    if (!f.dokumen) { this.errorForm.set('Dokumen wajib diunggah.'); return; }
    if (f.penyetuju.filter(p => p.nama.trim()).length === 0) {
      this.errorForm.set('Minimal 1 penyetuju.'); return;
    }
    const k = this.karyawan(); if (!k) return;

    const { dokumen, ...rest } = f;
    const payload: SuratPeringatanRequest = {
      ...rest,
      penyetuju: f.penyetuju
        .filter(p => p.nama.trim())
        .map(p => ({ karyawanId: p.karyawanId ?? null, nama: p.nama.trim() })),
    };

    this.saving.set(true);
    this.spSvc.create(k.id, payload, dokumen).subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast('Surat peringatan ditambahkan.', 'success');
        this.muatList();
      },
      error: e => {
        this.saving.set(false);
        this.errorForm.set(e?.error?.message ?? 'Gagal menyimpan.');
      },
    });
  }

  openJenis(): void {
    this.jenisForm.set({ kode: '', nama: '' });
    this.showJenisModal.set(true);
  }

  simpanJenis(): void {
    const v = this.jenisForm();
    if (!v.kode.trim() || !v.nama.trim()) return;
    this.jenisSvc.create({ kode: v.kode.trim(), nama: v.nama.trim() }).subscribe({
      next: () => {
        this.jenisForm.set({ kode: '', nama: '' });
        this.muatJenis();
        this.showToast('Jenis peringatan ditambahkan.', 'success');
      },
      error: e => this.showToast(e?.error?.message ?? 'Gagal menambah jenis.', 'danger'),
    });
  }

  hapusJenis(id: number): void {
    this.jenisSvc.delete(id).subscribe({
      next: () => { this.muatJenis(); this.showToast('Jenis peringatan dihapus.', 'success'); },
      error: e => this.showToast(e?.error?.message ?? 'Gagal menghapus jenis.', 'danger'),
    });
  }

  hapus(id: number): void {
    const k = this.karyawan(); if (!k) return;
    const target = this.list().find(x => x.id === id);
    this.spSvc.delete(k.id, id).subscribe({
      next: () => {
        if (target) {
          this.deletedHistory.set([
            ...this.deletedHistory(),
            {
              sp: target,
              actor: this.authSvc.currentUser()?.namaLengkap ?? 'Pengguna',
              at: new Date().toISOString(),
            },
          ]);
        }
        this.konfirmasiHapusId.set(null);
        this.muatList();
        this.showToast('Surat peringatan dihapus.', 'success');
      },
      error: e => this.showToast(e?.error?.message ?? 'Gagal menghapus.', 'danger'),
    });
  }

  // ── Persetujuan ───────────────────────────────────────
  setujui(id: number): void {
    const k = this.karyawan(); if (!k) return;
    this.spSvc.updatePersetujuan(k.id, id, 'DISETUJUI').subscribe({
      next: () => { this.muatList(); this.showToast('Surat peringatan disetujui.', 'success'); },
      error: e => this.showToast(e?.error?.message ?? 'Gagal menyetujui.', 'danger'),
    });
  }

  bukaTolak(id: number): void {
    this.tolakId.set(id);
    this.tolakCatatan.set('');
    this.showTolakModal.set(true);
  }

  konfirmasiTolak(): void {
    const k = this.karyawan(); const id = this.tolakId();
    if (!k || id == null) return;
    this.spSvc.updatePersetujuan(k.id, id, 'DITOLAK', this.tolakCatatan()).subscribe({
      next: () => {
        this.showTolakModal.set(false);
        this.tolakId.set(null);
        this.muatList();
        this.showToast('Surat peringatan ditolak.', 'success');
      },
      error: e => this.showToast(e?.error?.message ?? 'Gagal menolak.', 'danger'),
    });
  }

  cabut(id: number): void {
    const k = this.karyawan(); if (!k) return;
    this.spSvc.cabut(k.id, id).subscribe({
      next: () => { this.muatList(); this.showToast('Surat peringatan dicabut.', 'success'); },
      error: e => this.showToast(e?.error?.message ?? 'Gagal mencabut.', 'danger'),
    });
  }

  reload(): void { this.muatList(); }

  ekspor(): void {
    const k = this.karyawan(); if (!k) return;
    this.spSvc.exportExcel(k.id, {
      status:            this.filterStatus()            || undefined,
      statusPersetujuan: this.filterStatusPersetujuan() || undefined,
      from:              this.filterMulai()             || undefined,
      to:                this.filterSelesai()           || undefined,
    }).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `surat-peringatan-${new Date().toISOString().slice(0, 10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: e => this.showToast(e?.error?.message ?? 'Gagal ekspor.', 'danger'),
    });
  }

  infoStart = computed(() =>
    this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1);
  infoEnd = computed(() =>
    Math.min(this.page() * this.pageSize(), this.total()));

  badgeStatusPersetujuan(s: StatusPersetujuanSP): string {
    return s === 'DISETUJUI' ? 'bg-success'
         : s === 'DITOLAK'   ? 'bg-danger'
                              : 'bg-warning text-dark';
  }

  badgeStatus(s: StatusSuratPeringatan): string {
    return s === 'AKTIF'   ? 'bg-success'
         : s === 'DICABUT' ? 'bg-secondary'
                            : 'bg-danger';
  }

  formatTanggal(t: string): string {
    if (!t) return '-';
    const d = new Date(t);
    return d.toLocaleDateString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  }

  showToast(msg: string, type: 'success' | 'danger'): void {
    this.toastType.set(type);
    this.toastMsg.set(msg);
    setTimeout(() => this.toastMsg.set(''), 2500);
  }
}
