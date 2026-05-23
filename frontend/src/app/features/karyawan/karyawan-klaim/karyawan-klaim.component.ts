import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { KlaimService } from '../../../core/services/klaim.service';
import { AuthService } from '../../../core/services/auth.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { User } from '../../../core/models/user.model';
import { Klaim, KlaimRequest, KlaimItemPengeluaran, KlaimRiwayat, JenisKlaim, StatusKlaim } from '../../../core/models/klaim.model';
import { environment } from '../../../../environments/environment';

type StatusTab = 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';

@Component({
  selector: 'app-karyawan-klaim',
  standalone: true,
  imports: [CommonModule, FormsModule, LayoutComponent],
  templateUrl: './karyawan-klaim.component.html',
  styleUrl: './karyawan-klaim.component.scss'
})
export class KaryawanKlaimComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private auth        = inject(AuthService);
  private karyawanSvc = inject(KaryawanService);
  private klaimSvc    = inject(KlaimService);

  karyawanId = 0;
  karyawan   = signal<Karyawan | null>(null);
  loading    = signal(false);
  error      = signal('');

  readonly isKaryawan = computed(() =>
    (this.auth.currentUser() as User | null)?.role === 'KARYAWAN');

  // Tabs
  statusTab  = signal<StatusTab>('PENGAJUAN');
  filterMulai   = signal('');
  filterSelesai = signal('');

  // Data
  list = signal<Klaim[]>([]);

  // Pagination
  page      = signal(1);
  pageSize  = signal(10);
  total       = computed(() => this.filteredList().length);
  totalPages  = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));
  rows        = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.filteredList().slice(start, start + this.pageSize());
  });
  infoStart   = computed(() => this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1);
  infoEnd     = computed(() => Math.min(this.page() * this.pageSize(), this.total()));
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const cur   = this.page();
    const arr: number[] = [];
    for (let p = Math.max(1, cur - 2); p <= Math.min(total, cur + 2); p++) arr.push(p);
    return arr;
  });

  filteredList = computed(() => {
    let data = this.list();
    const tab = this.statusTab();
    if (tab === 'PENGAJUAN') data = data.filter(k => k.status === 'MENUNGGU');
    else if (tab === 'DISETUJUI') data = data.filter(k => k.status === 'DISETUJUI');
    else if (tab === 'DITOLAK')   data = data.filter(k => k.status === 'DITOLAK');

    const from = this.filterMulai();
    const to   = this.filterSelesai();
    if (from) data = data.filter(k => k.createdAt && k.createdAt >= from);
    if (to)   data = data.filter(k => k.createdAt && k.createdAt.substring(0,10) <= to);
    return data;
  });

  // Modal Form
  showFormModal = signal(false);
  editId        = signal<number | null>(null);
  saving        = signal(false);
  errorForm     = signal('');
  lampiranFile: File | null = null;
  lampiranNama  = signal('');

  form = signal<KlaimRequest>({
    jenisKlaim: 'OPERASIONAL',
    nominal: 0,
    keterangan: '',
    itemPengeluaran: []
  });

  jenisKlaimOptions: { value: JenisKlaim; label: string }[] = [
    { value: 'OPERASIONAL',    label: 'Operasional' },
    { value: 'INVOICE_TAGIHAN', label: 'Invoice / Billing / Tagihan' },
    { value: 'CASHBACK',       label: 'Cashback' },
    { value: 'REIMBURSEMENT',  label: 'Reimbursement' }
  ];

  // Modal Detail
  showDetailModal = signal(false);
  detailItem      = signal<Klaim | null>(null);

  // Modal Hapus
  confirmDeleteId = signal<number | null>(null);

  // Modal Tolak
  showTolakModal = signal(false);
  tolakId        = signal<number | null>(null);
  catatanTolak   = signal('');

  // Modal Riwayat Perubahan
  showRiwayatModal  = signal(false);
  riwayatList       = signal<KlaimRiwayat[]>([]);
  riwayatLoading    = signal(false);
  riwayatTarget     = signal<Klaim | null>(null);

  // Modal Batalkan
  showBatalkanModal = signal(false);
  batalkanTarget    = signal<Klaim | null>(null);
  catatanBatalkan   = signal('');

  readonly apiBase = environment.apiUrl.replace('/api', '');

  // ─────────────────────────────────────────────────────────────────

  ngOnInit(): void {
    this.karyawanId = +this.route.snapshot.paramMap.get('id')!;
    this.karyawanSvc.findById(this.karyawanId).subscribe({
      next: k => this.karyawan.set(k),
      error: () => {}
    });
    this.loadList();
  }

  loadList() {
    this.loading.set(true);
    this.klaimSvc.getAll(this.karyawanId).subscribe({
      next: data => { this.list.set(data); this.loading.set(false); },
      error: () => { this.error.set('Gagal memuat data klaim.'); this.loading.set(false); }
    });
  }

  setTab(tab: StatusTab) {
    this.statusTab.set(tab);
    this.page.set(1);
  }

  // ── Item Pengeluaran ─────────────────────────────────────────────

  get items(): KlaimItemPengeluaran[] {
    return this.form().itemPengeluaran;
  }

  addItem() {
    const f = { ...this.form() };
    f.itemPengeluaran = [...f.itemPengeluaran, { keterangan: '', jumlah: 0 }];
    this.recalcNominal(f);
    this.form.set(f);
  }

  removeItem(i: number) {
    const f = { ...this.form() };
    f.itemPengeluaran = f.itemPengeluaran.filter((_, idx) => idx !== i);
    this.recalcNominal(f);
    this.form.set(f);
  }

  updateItem(i: number, field: 'keterangan' | 'jumlah', value: any) {
    const f = { ...this.form() };
    const items = [...f.itemPengeluaran];
    items[i] = { ...items[i], [field]: field === 'jumlah' ? +value : value };
    f.itemPengeluaran = items;
    this.recalcNominal(f);
    this.form.set(f);
  }

  private recalcNominal(f: KlaimRequest) {
    if (f.itemPengeluaran.length > 0) {
      f.nominal = f.itemPengeluaran.reduce((s, it) => s + (+it.jumlah || 0), 0);
    }
  }

  totalPengeluaran = computed(() =>
    this.form().itemPengeluaran.reduce((s, it) => s + (+it.jumlah || 0), 0)
  );

  // ── Form Modal ──────────────────────────────────────────────────

  openTambah() {
    this.editId.set(null);
    this.form.set({ jenisKlaim: 'OPERASIONAL', nominal: 0, keterangan: '', itemPengeluaran: [] });
    this.lampiranFile = null;
    this.lampiranNama.set('');
    this.errorForm.set('');
    this.showFormModal.set(true);
  }

  openEdit(klaim: Klaim) {
    this.editId.set(klaim.id);
    this.form.set({
      jenisKlaim:      klaim.jenisKlaim,
      nominal:         klaim.nominal,
      keterangan:      klaim.keterangan ?? '',
      itemPengeluaran: klaim.itemPengeluaran.map(i => ({ keterangan: i.keterangan, jumlah: i.jumlah }))
    });
    this.lampiranFile = null;
    this.lampiranNama.set('');
    this.errorForm.set('');
    this.showFormModal.set(true);
  }

  closeForm() { this.showFormModal.set(false); }

  onLampiranChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) { this.lampiranFile = file; this.lampiranNama.set(file.name); }
  }

  saveForm() {
    const f = this.form();
    if (!f.jenisKlaim) { this.errorForm.set('Pilih jenis klaim.'); return; }
    if (f.nominal <= 0) { this.errorForm.set('Nominal harus lebih dari 0.'); return; }
    this.saving.set(true);
    this.errorForm.set('');

    const obs = this.editId()
      ? this.klaimSvc.update(this.karyawanId, this.editId()!, f, this.lampiranFile ?? undefined)
      : this.klaimSvc.create(this.karyawanId, f, this.lampiranFile ?? undefined);

    obs.subscribe({
      next: () => { this.saving.set(false); this.closeForm(); this.loadList(); },
      error: err => { this.saving.set(false); this.errorForm.set(err?.error?.message ?? 'Gagal menyimpan.'); }
    });
  }

  // ── Detail Modal ─────────────────────────────────────────────────

  openDetail(k: Klaim) { this.detailItem.set(k); this.showDetailModal.set(true); }
  closeDetail()        { this.showDetailModal.set(false); }

  // ── Status ───────────────────────────────────────────────────────

  approve(klaim: Klaim) {
    this.klaimSvc.updateStatus(this.karyawanId, klaim.id, 'DISETUJUI').subscribe({
      next: () => this.loadList()
    });
  }

  openTolak(klaim: Klaim) {
    this.tolakId.set(klaim.id);
    this.catatanTolak.set('');
    this.showTolakModal.set(true);
  }

  closeTolak()   { this.showTolakModal.set(false); }

  submitTolak() {
    if (!this.tolakId()) return;
    this.klaimSvc.updateStatus(this.karyawanId, this.tolakId()!, 'DITOLAK', this.catatanTolak()).subscribe({
      next: () => { this.closeTolak(); this.loadList(); }
    });
  }

  // ── Riwayat Perubahan ────────────────────────────────────────────

  openRiwayat(k: Klaim) {
    this.riwayatTarget.set(k);
    this.riwayatList.set([]);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.klaimSvc.getRiwayat(this.karyawanId, k.id).subscribe({
      next: data => { this.riwayatList.set(data); this.riwayatLoading.set(false); },
      error: () => { this.riwayatLoading.set(false); }
    });
  }

  closeRiwayat() { this.showRiwayatModal.set(false); }

  labelTipe(tipe: string): string {
    const map: Record<string, string> = {
      'DIBUAT':           'Dibuat',
      'DIUBAH':           'Diubah',
      'STATUS_DISETUJUI': 'Disetujui',
      'STATUS_DITOLAK':   'Ditolak',
      'STATUS_DIUBAH':    'Status Diubah',
    };
    return map[tipe] ?? tipe;
  }

  badgeClass(tipe: string): string {
    const map: Record<string, string> = {
      'DIBUAT':           'bg-primary bg-opacity-10 text-primary',
      'DIUBAH':           'bg-info bg-opacity-10 text-info',
      'STATUS_DISETUJUI': 'bg-success bg-opacity-10 text-success',
      'STATUS_DITOLAK':   'bg-danger bg-opacity-10 text-danger',
      'STATUS_DIUBAH':    'bg-warning bg-opacity-10 text-warning',
    };
    return map[tipe] ?? 'bg-secondary bg-opacity-10 text-secondary';
  }

  // ── Batalkan Persetujuan ─────────────────────────────────────────

  openBatalkan(k: Klaim) {
    this.batalkanTarget.set(k);
    this.catatanBatalkan.set('');
    this.showBatalkanModal.set(true);
  }

  closeBatalkan() { this.showBatalkanModal.set(false); this.batalkanTarget.set(null); }

  submitBatalkan() {
    const k = this.batalkanTarget();
    if (!k || !this.catatanBatalkan().trim()) return;
    this.klaimSvc.updateStatus(this.karyawanId, k.id, 'MENUNGGU', this.catatanBatalkan()).subscribe({
      next: () => { this.closeBatalkan(); this.loadList(); },
      error: () => this.error.set('Gagal membatalkan persetujuan.')
    });
  }

  // ── Delete ───────────────────────────────────────────────────────

  confirmDelete(id: number) { this.confirmDeleteId.set(id); }
  cancelDelete()            { this.confirmDeleteId.set(null); }
  doDelete() {
    const id = this.confirmDeleteId();
    if (!id) return;
    this.klaimSvc.delete(this.karyawanId, id).subscribe({
      next: () => { this.confirmDeleteId.set(null); this.loadList(); }
    });
  }

  // ── Helpers ─────────────────────────────────────────────────────

  labelJenis(j: JenisKlaim): string {
    return this.jenisKlaimOptions.find(o => o.value === j)?.label ?? j;
  }

  formatRp(n: number): string {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
  }

  formatDate(d?: string): string {
    if (!d) return '-';
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  lampiranHref(url?: string): string {
    if (!url) return '#';
    return url.startsWith('http') ? url : `${this.apiBase}/${url}`;
  }
}
