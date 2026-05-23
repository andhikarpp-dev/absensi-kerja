import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { Divisi } from '../../../core/models/divisi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import { JadwalLembur } from '../../../core/models/jadwal-lembur.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

type TabKey = 'PENGAJUAN' | 'DISETUJUI' | 'DITOLAK';
type SortDir = 'asc' | 'desc' | '';

@Component({
  selector: 'app-jadwal-lembur',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './jadwal-lembur.component.html'
})
export class JadwalLemburComponent implements OnInit {
  private http        = inject(HttpClient);
  private divisiSvc   = inject(DivisiService);
  private karyawanSvc = inject(KaryawanService);

  readonly Math = Math;
  readonly apiUrl = `${environment.apiUrl}/jadwal-lembur`;

  // ── Tabs ──────────────────────────────────────────────
  activeTab = signal<TabKey>('PENGAJUAN');

  // ── Filter ────────────────────────────────────────────
  filterDari   = signal('');
  filterSampai = signal('');
  filterDivisi = signal('');
  filterCari   = signal('');

  divisiList    = signal<Divisi[]>([]);
  karyawanList  = signal<Karyawan[]>([]);
  karyawanLoading = signal(false);
  rows          = signal<JadwalLembur[]>([]);
  loading      = signal(false);
  error        = signal('');

  // ── DataTable ─────────────────────────────────────────
  dtSearch   = signal('');
  dtPageSize = signal(10);
  dtPage     = signal(1);
  sortCol    = signal('');
  sortDir    = signal<SortDir>('');
  readonly pageSizeOptions = [10, 25, 50, 100];

  readonly dtFiltered = computed(() => {
    const q = this.dtSearch().toLowerCase();
    let data = this.rows();
    if (q) data = data.filter(r =>
      r.namaKaryawan.toLowerCase().includes(q) ||
      (r.namaDivisi ?? '').toLowerCase().includes(q) ||
      (r.durasiLembur ?? '').toLowerCase().includes(q)
    );
    const col = this.sortCol(); const dir = this.sortDir();
    if (col && dir) {
      data = [...data].sort((a, b) => {
        const av = String((a as any)[col] ?? '');
        const bv = String((b as any)[col] ?? '');
        return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return data;
  });
  readonly dtTotalPages = computed(() => Math.max(1, Math.ceil(this.dtFiltered().length / this.dtPageSize())));
  readonly dtPaged      = computed(() => {
    const s = this.dtPageSize(), p = this.dtPage();
    return this.dtFiltered().slice((p - 1) * s, p * s);
  });
  readonly pageNumbers  = computed(() => Array.from({ length: this.dtTotalPages() }, (_, i) => i + 1));

  // ── Modal Tambah/Edit ─────────────────────────────────
  showFormModal  = signal(false);
  editTarget     = signal<JadwalLembur | null>(null);
  formSaving     = signal(false);
  formError      = signal('');

  formKaryawanId       = signal('');
  formWaktuMulai       = signal('');
  formWaktuSelesai     = signal('');
  formMenitSebelum     = signal('');
  formCatatan          = signal('');

  // Searchable karyawan dropdown
  karyawanSearch  = signal('');
  showKaryawanDd  = signal(false);
  readonly karyawanFiltered = computed(() => {
    const q = this.karyawanSearch().toLowerCase().trim();
    const list = this.karyawanList();
    if (!q) return list.slice(0, 50);
    return list.filter(k =>
      k.namaLengkap.toLowerCase().includes(q) ||
      (k.namaDivisi ?? '').toLowerCase().includes(q)
    ).slice(0, 50);
  });
  selectedKaryawan = signal<Karyawan | null>(null);

  // ── Modal Tolak ───────────────────────────────────────
  showTolakModal   = signal(false);
  tolakTarget      = signal<JadwalLembur | null>(null);
  tolakCatatan     = signal('');
  tolakSaving      = signal(false);
  tolakError       = signal('');

  // ── Modal Hapus ───────────────────────────────────────
  showHapusModal   = signal(false);
  hapusTarget      = signal<JadwalLembur | null>(null);
  hapusSaving      = signal(false);
  hapusError       = signal('');

  // ── Modal Detail ──────────────────────────────────────
  showDetailModal  = signal(false);
  detailTarget     = signal<JadwalLembur | null>(null);

  // ── Modal Ekspor ──────────────────────────────────────
  showEksporModal  = signal(false);
  eksporStatus     = signal('');
  eksporDari       = signal('');
  eksporSampai     = signal('');
  eksporDivisi     = signal('');
  eksporCari       = signal('');
  eksporLoading    = signal(false);

  // ── Modal Impor ───────────────────────────────────────
  showImporModal   = signal(false);
  imporFile        = signal<File | null>(null);
  imporFileName    = signal('');
  imporLoading     = signal(false);
  imporError       = signal('');
  imporResult      = signal<{berhasil:number; gagal:number; errors:string[]} | null>(null);

  ngOnInit() {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
    this.loadKaryawan();
    this.load();
  }

  loadKaryawan() {
    this.karyawanLoading.set(true);
    this.karyawanSvc.findAll().pipe(
      tap(list => console.log('[JadwalLembur] karyawan count:', list?.length, 'sample:', list?.[0]?.namaLengkap)),
      catchError(err => { console.error('[JadwalLembur] error load karyawan:', err); return of([] as Karyawan[]); })
    ).subscribe(list => {
      this.karyawanList.set(list ?? []);
      this.karyawanLoading.set(false);
    });
  }

  setTab(tab: TabKey) { this.activeTab.set(tab); this.load(); }

  load() {
    this.loading.set(true); this.error.set('');
    let params = new HttpParams().set('status', this.activeTab());
    if (this.filterDari())   params = params.set('dari',     this.filterDari());
    if (this.filterSampai()) params = params.set('sampai',   this.filterSampai());
    if (this.filterDivisi()) params = params.set('divisiId', this.filterDivisi());
    if (this.filterCari())   params = params.set('cari',     this.filterCari());

    this.http.get<any>(this.apiUrl, { params }).pipe(
      map(r => (r?.data ?? []) as JadwalLembur[]),
      catchError(err => { this.error.set(err?.error?.message ?? 'Gagal memuat data'); return of([]); })
    ).subscribe(d => { this.rows.set(d); this.dtPage.set(1); this.loading.set(false); });
  }

  // ── Form Modal ────────────────────────────────────────
  openTambah() {
    this.editTarget.set(null);
    this.resetForm();
    if (this.karyawanList().length === 0) this.loadKaryawan();
    this.showFormModal.set(true);
  }

  openEdit(r: JadwalLembur) {
    this.editTarget.set(r);
    this.formKaryawanId.set(String(r.karyawanId));
    this.formWaktuMulai.set(r.waktuMulai?.substring(0, 16) ?? '');
    this.formWaktuSelesai.set(r.waktuSelesai?.substring(0, 16) ?? '');
    this.formMenitSebelum.set(r.menitSebelumJadwal != null ? String(r.menitSebelumJadwal) : '');
    this.formCatatan.set(r.catatan ?? '');
    const k = this.karyawanList().find(x => x.id === r.karyawanId) ?? null;
    this.selectedKaryawan.set(k);
    this.karyawanSearch.set(k?.namaLengkap ?? '');
    this.formError.set('');
    this.showFormModal.set(true);
  }

  closeForm() { this.showFormModal.set(false); }

  simpan() {
    if (!this.formKaryawanId()) { this.formError.set('Karyawan wajib dipilih'); return; }
    if (!this.formWaktuMulai()) { this.formError.set('Waktu mulai wajib diisi'); return; }
    if (!this.formWaktuSelesai()) { this.formError.set('Waktu selesai wajib diisi'); return; }
    this.formError.set('');
    this.formSaving.set(true);

    const body = {
      karyawanId: Number(this.formKaryawanId()),
      waktuMulai: this.formWaktuMulai(),
      waktuSelesai: this.formWaktuSelesai(),
      menitSebelumJadwal: this.formMenitSebelum() ? Number(this.formMenitSebelum()) : null,
      catatan: this.formCatatan() || null
    };

    const req = this.editTarget()
      ? this.http.put<any>(`${this.apiUrl}/${this.editTarget()!.id}`, body)
      : this.http.post<any>(this.apiUrl, body);

    req.pipe(catchError(err => {
      this.formError.set(err?.error?.message ?? 'Gagal menyimpan');
      return of(null);
    })).subscribe(res => {
      this.formSaving.set(false);
      if (res) { this.showFormModal.set(false); this.load(); }
    });
  }

  // ── Setujui ───────────────────────────────────────────
  setujui(r: JadwalLembur) {
    this.http.patch<any>(`${this.apiUrl}/${r.id}/setujui`, null).subscribe(() => this.load());
  }

  // ── Tolak ─────────────────────────────────────────────
  openTolak(r: JadwalLembur) { this.tolakTarget.set(r); this.tolakCatatan.set(''); this.tolakError.set(''); this.showTolakModal.set(true); }
  closeTolak() { this.showTolakModal.set(false); }
  konfirmasiTolak() {
    const t = this.tolakTarget(); if (!t) return;
    this.tolakSaving.set(true);
    let params = new HttpParams();
    if (this.tolakCatatan()) params = params.set('catatan', this.tolakCatatan());
    this.http.patch<any>(`${this.apiUrl}/${t.id}/tolak`, null, { params }).pipe(
      catchError(err => { this.tolakError.set(err?.error?.message ?? 'Gagal'); return of(null); })
    ).subscribe(res => {
      this.tolakSaving.set(false);
      if (res) { this.showTolakModal.set(false); this.load(); }
    });
  }

  // ── Hapus ─────────────────────────────────────────────
  openHapus(r: JadwalLembur) { this.hapusTarget.set(r); this.hapusError.set(''); this.showHapusModal.set(true); }
  closeHapus() { this.showHapusModal.set(false); }
  konfirmasiHapus() {
    const t = this.hapusTarget(); if (!t) return;
    this.hapusSaving.set(true);
    this.http.delete<any>(`${this.apiUrl}/${t.id}`).pipe(
      catchError(err => { this.hapusError.set(err?.error?.message ?? 'Gagal'); return of(null); })
    ).subscribe(res => {
      this.hapusSaving.set(false);
      if (res !== null) { this.showHapusModal.set(false); this.load(); }
    });
  }

  // ── Ekspor ────────────────────────────────────────────
  openEkspor() {
    this.eksporStatus.set(this.activeTab());
    this.eksporDari.set(this.filterDari());
    this.eksporSampai.set(this.filterSampai());
    this.eksporDivisi.set(this.filterDivisi());
    this.eksporCari.set(this.filterCari());
    this.showEksporModal.set(true);
  }
  closeEkspor() { this.showEksporModal.set(false); }

  prosesEkspor() {
    this.eksporLoading.set(true);
    let params = new HttpParams();
    if (this.eksporStatus())  params = params.set('status',   this.eksporStatus());
    if (this.eksporDari())    params = params.set('dari',     this.eksporDari());
    if (this.eksporSampai())  params = params.set('sampai',   this.eksporSampai());
    if (this.eksporDivisi())  params = params.set('divisiId', this.eksporDivisi());
    if (this.eksporCari())    params = params.set('cari',     this.eksporCari());

    this.http.get(`${this.apiUrl}/ekspor`, { params, responseType: 'blob' }).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `jadwal-lembur-${new Date().toISOString().substring(0,10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.eksporLoading.set(false);
        this.closeEkspor();
      },
      error: () => { this.eksporLoading.set(false); }
    });
  }

  // ── Impor ─────────────────────────────────────────────
  openImpor() {
    this.imporFile.set(null);
    this.imporFileName.set('');
    this.imporError.set('');
    this.imporResult.set(null);
    this.showImporModal.set(true);
  }
  closeImpor() {
    this.showImporModal.set(false);
    if (this.imporResult()?.berhasil) this.load();
  }

  downloadTemplate() {
    this.http.get(`${this.apiUrl}/impor/template`, { responseType: 'blob' }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url;
      a.download = 'template-jadwal-lembur.xlsx'; a.click();
      URL.revokeObjectURL(url);
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0] ?? null;
    this.imporError.set('');
    this.imporResult.set(null);
    if (!file) { this.imporFile.set(null); this.imporFileName.set(''); return; }
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      this.imporError.set('Hanya file .xlsx / .xls yang diperbolehkan.'); return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imporError.set('Ukuran file melebihi batas maksimal 5 MB.'); return;
    }
    this.imporFile.set(file);
    this.imporFileName.set(file.name);
  }

  prosesImpor() {
    const file = this.imporFile();
    if (!file) { this.imporError.set('Pilih file terlebih dahulu.'); return; }
    this.imporLoading.set(true);
    this.imporError.set('');
    this.imporResult.set(null);

    const fd = new FormData();
    fd.append('file', file);
    this.http.post<any>(`${this.apiUrl}/impor`, fd).pipe(
      catchError(err => { this.imporError.set(err?.error?.message ?? 'Gagal memproses impor'); return of(null); })
    ).subscribe(res => {
      this.imporLoading.set(false);
      if (res) this.imporResult.set({ berhasil: res.berhasil ?? 0, gagal: res.gagal ?? 0, errors: res.errors ?? [] });
    });
  }

  // ── Detail ────────────────────────────────────────────
  openDetail(r: JadwalLembur) { this.detailTarget.set(r); this.showDetailModal.set(true); }
  closeDetail() { this.showDetailModal.set(false); }

  // ── Karyawan Dropdown ─────────────────────────────────
  selectKaryawan(k: Karyawan) {
    this.selectedKaryawan.set(k);
    this.formKaryawanId.set(String(k.id));
    this.karyawanSearch.set(k.namaLengkap);
    this.showKaryawanDd.set(false);
  }

  onKaryawanBlur() {
    setTimeout(() => this.showKaryawanDd.set(false), 300);
  }

  // ── Sort ──────────────────────────────────────────────
  sort(col: string) {
    if (this.sortCol() === col) {
      const next: SortDir = this.sortDir() === 'asc' ? 'desc' : this.sortDir() === 'desc' ? '' : 'asc';
      this.sortDir.set(next); if (!next) this.sortCol.set('');
    } else { this.sortCol.set(col); this.sortDir.set('asc'); }
  }
  sortIcon(col: string) {
    if (this.sortCol() !== col) return 'bx-sort';
    return this.sortDir() === 'asc' ? 'bx-sort-up' : 'bx-sort-down';
  }

  // ── Format ────────────────────────────────────────────
  formatDt(iso: string): string {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })
      + ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }
  statusBadge(s: string): string {
    return s === 'DISETUJUI' ? 'bg-success-subtle text-success'
         : s === 'DITOLAK'   ? 'bg-danger-subtle text-danger'
         :                     'bg-warning-subtle text-warning';
  }
  statusLabel(s: string): string {
    return s === 'DISETUJUI' ? 'Disetujui' : s === 'DITOLAK' ? 'Ditolak' : 'Pengajuan';
  }

  private resetForm() {
    this.formKaryawanId.set(''); this.formWaktuMulai.set(''); this.formWaktuSelesai.set('');
    this.formMenitSebelum.set(''); this.formCatatan.set('');
    this.selectedKaryawan.set(null); this.karyawanSearch.set('');
    this.showKaryawanDd.set(false); this.formError.set('');
  }
}
