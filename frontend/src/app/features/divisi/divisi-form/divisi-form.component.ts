import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { PolaKerjaService } from '../../../core/services/pola-kerja.service';
import { Karyawan } from '../../../core/models/karyawan.model';
import { DivisiRequest, SupervisiItem } from '../../../core/models/divisi.model';
import { PolaKerja, PolaKerjaRequest, HARI_LIST, defaultHariList } from '../../../core/models/pola-kerja.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { forkJoin, of } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

// Kunci sessionStorage
const SESSION_KEY_FORM        = 'divisi_draft_form';
const SESSION_KEY_POLA_IDS    = 'divisi_draft_pola_ids';    // ID pola yang dipilih (mode tambah)
const SESSION_KEY_LOCAL_POLA  = 'divisi_draft_local_pola';  // pola baru yang belum tersimpan
const SESSION_KEY_INDEX       = 'divisi_draft_pola_index';

@Component({
  selector: 'app-divisi-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './divisi-form.component.html'
})
export class DivisiFormComponent implements OnInit, OnDestroy {
  private fb           = inject(FormBuilder);
  private route        = inject(ActivatedRoute);
  private router       = inject(Router);
  private svc          = inject(DivisiService);
  private karyawanSvc  = inject(KaryawanService);
  private polaKerjaSvc = inject(PolaKerjaService);

  editId       = signal<number | null>(null);
  loading      = signal(false);
  saving       = signal(false);
  error        = signal('');
  karyawanList = signal<Karyawan[]>([]);

  // ── Pola Kerja — mode EDIT (dari API, terikat divisi ini) ─
  polaKerjaList = signal<PolaKerja[]>([]);

  // ── Pola Kerja — mode TAMBAH ──────────────────────────────
  // Semua pola global yang tersedia untuk dipilih
  allPolaKerjaList   = signal<PolaKerja[]>([]);
  allPolaLoading     = signal(false);
  // ID pola yang sudah dipilih user untuk divisi baru ini
  selectedPolaIds    = signal<Set<number>>(new Set());
  // Pola baru yang dibuat lokal (belum ada di DB)
  localPolaKerjaList = signal<PolaKerjaRequest[]>([]);
  // Index pola lokal yang sedang dipreview
  selectedPolaKerjaIndex = signal<number | null>(null);

  // ── Modal tambah/edit pola baru ───────────────────────────
  showModal        = signal(false);
  modalSaving      = signal(false);
  modalError       = signal('');
  editPolaKerjaId  = signal<number | null>(null);
  editLocalIndex   = signal<number | null>(null);
  modalData: PolaKerjaRequest = this.emptyModal();

  // ── Modal salin dari pola yang ada ───────────────────────
  showSalinModal   = signal(false);
  salinLoading     = signal(false);
  salinSearchQuery = signal('');

  // ── Modal assign pola ke divisi (mode EDIT) ───────────────
  showAssignModal   = signal(false);
  assignSaving      = signal(false);
  assignSearchQuery = signal('');

  hariLabels: Record<string, string> = {
    SENIN:'Senin', SELASA:'Selasa', RABU:'Rabu', KAMIS:'Kamis',
    JUMAT:'Jumat', SABTU:'Sabtu', MINGGU:'Minggu'
  };

  private emptyModal(): PolaKerjaRequest {
    return { namaPolaKerja: '', toleransiKeterlambatan: 0, jenisJadwal: 'JAM_TETAP', hariList: defaultHariList() };
  }
  form = this.fb.group({
    namaDivisi:                ['', [Validators.required, Validators.maxLength(100)]],
    dendaKeterlambatan:        [false],
    sistemKerja:               ['HARI_KERJA', Validators.required],
    catatanMasuk:              ['TIDAK_DIBUTUHKAN', Validators.required],
    catatanMasukLabel:         [''],
    catatanMasukPlaceholder:   [''],
    catatanKeluar:             ['TIDAK_DIBUTUHKAN', Validators.required],
    catatanKeluarLabel:        [''],
    catatanKeluarPlaceholder:  [''],
    catatanMulaiLembur:        ['TIDAK_DIBUTUHKAN', Validators.required],
    catatanMulaiLemburLabel:         [''],
    catatanMulaiLemburPlaceholder:   [''],
    catatanSelesaiLembur:      ['TIDAK_DIBUTUHKAN', Validators.required],
    catatanSelesaiLemburLabel:       [''],
    catatanSelesaiLemburPlaceholder: [''],
    lokasiMasuk:               [false],
    lokasiIstirahat:           [false],
    lokasiSelesaiIstirahat:    [false],
    lokasiKeluar:              [false],
    lokasiLembur:              [false],
    lokasiSelesaiLembur:       [false],
    lokasiPertamaKali:         [false],
    lokasiDiLuar:              [false],
    lokasiPerangkatBerbeda:    [false],
    lokasiFotoSelfieBermasalah:[false],
    supervisorId:              [null as number | null],
    supervisiList:             this.fb.array([]),
    bccGlobal:                 [''],
    menitSebelumMasuk:         [0, [Validators.min(0)]],
    menitSetelahMasuk:         [0, [Validators.min(0)]],
    cegahPresensiKalenderLibur:[false],
    cegahPresensiJadwalLibur:  [false],
    menitSetelahJadwalKeluar:  [0, [Validators.min(0)]],
    cegahPresensiLemburTanpaJadwal:[false],
    validasiPerangkat:         [false],
    presensiKeluarOtomatis:    [false],
    dendaTerlambatKeluar:      [false],
    kunjunganKlien:            [false],
    minimalHariSebelumCuti:    [0, [Validators.min(0)]],
    maksHariPerRequest:        [0, [Validators.min(0)]],
    maksRequestPerBulan:       [0, [Validators.min(0)]]
  });

  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit(): void {
    this.karyawanSvc.findAll().subscribe({
      next:  list => this.karyawanList.set(list),
      error: err  => console.error('Gagal load karyawan:', err)
    });
    this.addSupervisi();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId.set(+id);
      this.loading.set(true);
      this.svc.findById(+id).subscribe({
        next: d => {
          const { supervisiList, ...rest } = d as any;
          this.form.patchValue({ ...rest, supervisorId: d.supervisorId ?? null });
          this.supervisiArray.clear();
          (supervisiList as SupervisiItem[] ?? []).forEach(s => this.addSupervisi(s));
          if (this.supervisiArray.length === 0) this.addSupervisi();
          this.loading.set(false);
          this.loadPolaKerja(+id);
        },
        error: () => { this.error.set('Data tidak ditemukan.'); this.loading.set(false); }
      });
    } else {
      // Mode TAMBAH: muat semua pola global, restore session
      this.allPolaLoading.set(true);
      this.polaKerjaSvc.findAll().subscribe({
        next:  list => { this.allPolaKerjaList.set(list); this.allPolaLoading.set(false); },
        error: ()   => this.allPolaLoading.set(false)
      });
      this.restoreFromSession();
      this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => this.saveFormToSession());
    }
  }

  ngOnDestroy(): void {}

  // ── Session helpers ───────────────────────────────────────
  private restoreFromSession(): void {
    try {
      const savedIds = sessionStorage.getItem(SESSION_KEY_POLA_IDS);
      if (savedIds) this.selectedPolaIds.set(new Set(JSON.parse(savedIds)));

      const savedLocal = sessionStorage.getItem(SESSION_KEY_LOCAL_POLA);
      if (savedLocal) {
        const list: PolaKerjaRequest[] = JSON.parse(savedLocal);
        this.localPolaKerjaList.set(list);
        const savedIndex = sessionStorage.getItem(SESSION_KEY_INDEX);
        if (savedIndex !== null && list.length > 0) {
          const idx = +savedIndex;
          this.selectedPolaKerjaIndex.set(idx >= 0 && idx < list.length ? idx : 0);
        }
      }

      const savedForm = sessionStorage.getItem(SESSION_KEY_FORM);
      if (savedForm) {
        const formVal = JSON.parse(savedForm);
        const supervisiList = formVal.supervisiList ?? [];
        this.supervisiArray.clear();
        supervisiList.forEach((s: SupervisiItem) => this.addSupervisi(s));
        if (this.supervisiArray.length === 0) this.addSupervisi();
        const { supervisiList: _, ...rest } = formVal;
        this.form.patchValue(rest);
      }
    } catch (_) {
      this.clearSession();
    }
  }

  private saveFormToSession(): void {
    if (this.isEdit) return;
    try {
      sessionStorage.setItem(SESSION_KEY_FORM, JSON.stringify(this.form.value));
    } catch (_) {}
  }

  private savePolaIdsToSession(): void {
    try { sessionStorage.setItem(SESSION_KEY_POLA_IDS, JSON.stringify([...this.selectedPolaIds()])); } catch (_) {}
  }

  private saveLocalPolaToSession(): void {
    try {
      sessionStorage.setItem(SESSION_KEY_LOCAL_POLA, JSON.stringify(this.localPolaKerjaList()));
      const idx = this.selectedPolaKerjaIndex();
      if (idx !== null) sessionStorage.setItem(SESSION_KEY_INDEX, String(idx));
      else sessionStorage.removeItem(SESSION_KEY_INDEX);
    } catch (_) {}
  }

  private clearSession(): void {
    [SESSION_KEY_FORM, SESSION_KEY_POLA_IDS, SESSION_KEY_LOCAL_POLA, SESSION_KEY_INDEX]
      .forEach(k => sessionStorage.removeItem(k));
  }

  // ── Pola Kerja — mode EDIT (API langsung) ────────────────
  loadPolaKerja(divisiId: number): void {
    this.polaKerjaSvc.findByDivisi(divisiId).subscribe(list => this.polaKerjaList.set(list));
  }

  // ── Toggle centang pola global (mode TAMBAH) ──────────────
  toggleSelectPola(id: number): void {
    const s = new Set(this.selectedPolaIds());
    if (s.has(id)) s.delete(id); else s.add(id);
    this.selectedPolaIds.set(s);
    this.savePolaIdsToSession();
  }

  isPolaSelected(id: number): boolean {
    return this.selectedPolaIds().has(id);
  }

  // ── Pola Kerja — modal open ───────────────────────────────
  openTambahModal(): void {
    this.editPolaKerjaId.set(null);
    this.editLocalIndex.set(null);
    this.modalData = { ...this.emptyModal(), divisiIds: this.editId() ? [this.editId()!] : [] };
    this.modalError.set('');
    this.showModal.set(true);
  }

  // Edit dari API list (mode edit divisi)
  openEditModal(pk: PolaKerja): void {
    this.editPolaKerjaId.set(pk.id);
    this.editLocalIndex.set(null);
    this.modalData = {
      divisiIds: [...pk.divisiIds],
      namaPolaKerja: pk.namaPolaKerja,
      toleransiKeterlambatan: pk.toleransiKeterlambatan,
      jenisJadwal: pk.jenisJadwal,
      hariList: HARI_LIST.map(hari => {
        const ex = pk.hariList.find(h => h.hari === hari);
        return ex ? { ...ex } : { hari, polaHari: 'HARI_KERJA' as const, jamMasuk:'', jamKeluar:'', mulaiIstirahat:'', selesaiIstirahat:'', maksMenitIstirahat: 60 };
      })
    };
    this.modalError.set('');
    this.showModal.set(true);
  }

  // Edit dari local list (mode tambah divisi)
  openEditLocalModal(index: number): void {
    this.editPolaKerjaId.set(null);
    this.editLocalIndex.set(index);
    const pk = this.localPolaKerjaList()[index];
    this.modalData = JSON.parse(JSON.stringify(pk)); // deep copy
    this.modalError.set('');
    this.showModal.set(true);
  }

  closeModal(): void { this.showModal.set(false); }

  // ── Salin dari pola yang sudah ada ───────────────────────
  openSalinModal(): void {
    this.salinSearchQuery.set('');
    if (this.allPolaKerjaList().length === 0) {
      this.salinLoading.set(true);
      this.polaKerjaSvc.findAll().subscribe({
        next:  list => { this.allPolaKerjaList.set(list); this.salinLoading.set(false); },
        error: ()   => this.salinLoading.set(false)
      });
    }
    this.showSalinModal.set(true);
  }

  closeSalinModal(): void { this.showSalinModal.set(false); }

  get filteredAllPolaKerja(): PolaKerja[] {
    const q = this.salinSearchQuery().toLowerCase().trim();
    if (!q) return this.allPolaKerjaList();
    return this.allPolaKerjaList().filter(pk =>
      pk.namaPolaKerja.toLowerCase().includes(q)
    );
  }

  salinPolaKerja(pk: PolaKerja): void {
    const copy: PolaKerjaRequest = {
      namaPolaKerja: pk.namaPolaKerja,
      toleransiKeterlambatan: pk.toleransiKeterlambatan,
      jenisJadwal: pk.jenisJadwal,
      hariList: HARI_LIST.map(hari => {
        const ex = pk.hariList.find(h => h.hari === hari);
        return ex
          ? { hari: ex.hari, polaHari: ex.polaHari, jamMasuk: ex.jamMasuk, jamKeluar: ex.jamKeluar,
              mulaiIstirahat: ex.mulaiIstirahat, selesaiIstirahat: ex.selesaiIstirahat,
              maksMenitIstirahat: ex.maksMenitIstirahat, totalJamKerjaDibutuhkan: ex.totalJamKerjaDibutuhkan }
          : { hari, polaHari: 'HARI_KERJA' as const, jamMasuk: '', jamKeluar: '',
              mulaiIstirahat: '', selesaiIstirahat: '', maksMenitIstirahat: 60 };
      })
    };
    const current = [...this.localPolaKerjaList(), copy];
    this.localPolaKerjaList.set(current);
    this.selectedPolaKerjaIndex.set(current.length - 1);
    this.saveLocalPolaToSession();
    this.showSalinModal.set(false);
  }

  onJadwalChange(jenis: 'JAM_TETAP' | 'JAM_FLEKSIBEL'): void {
    this.modalData.jenisJadwal = jenis;
    if (jenis === 'JAM_FLEKSIBEL') {
      // Clear semua field jam saat beralih ke fleksibel
      this.modalData.hariList.forEach(h => {
        h.jamMasuk       = '';
        h.jamKeluar      = '';
        h.mulaiIstirahat = '';
        h.selesaiIstirahat = '';
      });
    }
  }

  savePolaKerja(): void {
    if (!this.modalData.namaPolaKerja?.trim()) {
      this.modalError.set('Nama pola kerja wajib diisi.');
      return;
    }

    // Mode EDIT divisi → langsung ke API
    if (this.isEdit) {
      this.modalSaving.set(true);
      const id = this.editPolaKerjaId();
      const action$ = id
        ? this.polaKerjaSvc.update(id, this.modalData)
        : this.polaKerjaSvc.create({ ...this.modalData, divisiIds: [this.editId()!] });
      action$.subscribe({
        next: () => {
          this.modalSaving.set(false);
          this.showModal.set(false);
          this.loadPolaKerja(this.editId()!);
          if (!id) this.polaKerjaSvc.findAll().subscribe(l => this.allPolaKerjaList.set(l));
        },
        error: err => {
          this.modalSaving.set(false);
          this.modalError.set(err?.data?.message ?? err?.message ?? 'Terjadi kesalahan.');
        }
      });
      return;
    }

    // Mode TAMBAH divisi → simpan ke local list
    const localIdx = this.editLocalIndex();
    const current  = [...this.localPolaKerjaList()];
    const saved: PolaKerjaRequest = JSON.parse(JSON.stringify(this.modalData));
    if (localIdx !== null) {
      current[localIdx] = saved;
    } else {
      current.push(saved);
      this.selectedPolaKerjaIndex.set(current.length - 1);
    }
    this.localPolaKerjaList.set(current);
    this.saveLocalPolaToSession();
    this.showModal.set(false);
  }

  deletePolaKerja(polaId: number): void {
    if (!confirm('Lepas pola kerja ini dari divisi?')) return;
    const divisiId = this.editId()!;
    // Hanya lepas relasi divisi_pola_kerja, TIDAK menghapus pola kerja itu sendiri
    this.polaKerjaSvc.unassignDivisi(polaId, divisiId).subscribe({
      next: () => {
        this.loadPolaKerja(divisiId);
        // Refresh daftar global agar divisiIds terupdate
        this.polaKerjaSvc.findAll().subscribe(l => this.allPolaKerjaList.set(l));
      }
    });
  }

  // ── Modal assign pola ke divisi (mode EDIT) ───────────────
  openAssignModal(): void {
    this.assignSearchQuery.set('');
    // Muat semua pola global jika belum
    if (this.allPolaKerjaList().length === 0) {
      this.allPolaLoading.set(true);
      this.polaKerjaSvc.findAll().subscribe({
        next:  list => { this.allPolaKerjaList.set(list); this.allPolaLoading.set(false); },
        error: ()   => this.allPolaLoading.set(false)
      });
    }
    this.showAssignModal.set(true);
  }

  closeAssignModal(): void { this.showAssignModal.set(false); }

  /** Pola yang belum ter-assign ke divisi ini, difilter search */
  get polaKerjaBelumAssigned(): PolaKerja[] {
    const assignedIds = new Set(this.polaKerjaList().map(p => p.id));
    const q = this.assignSearchQuery().toLowerCase().trim();
    return this.allPolaKerjaList()
      .filter(p => !assignedIds.has(p.id))
      .filter(p => !q || p.namaPolaKerja.toLowerCase().includes(q));
  }

  assignPolaKerja(pk: PolaKerja): void {
    const divisiId = this.editId()!;
    this.assignSaving.set(true);
    const newIds = [...(pk.divisiIds ?? []), divisiId];
    this.polaKerjaSvc.assignDivisi(pk.id, newIds).subscribe({
      next: () => {
        this.assignSaving.set(false);
        // Refresh tabel pola aktif & daftar global
        this.loadPolaKerja(divisiId);
        this.polaKerjaSvc.findAll().subscribe(l => this.allPolaKerjaList.set(l));
      },
      error: () => this.assignSaving.set(false)
    });
  }

  deleteLocalPolaKerja(index: number): void {
    const current = [...this.localPolaKerjaList()];
    current.splice(index, 1);
    this.localPolaKerjaList.set(current);
    this.saveLocalPolaToSession();
    const sel = this.selectedPolaKerjaIndex();
    if (sel !== null && sel >= index) {
      this.selectedPolaKerjaIndex.set(current.length > 0 ? Math.max(0, sel - 1) : null);
    }
  }

  // Getter untuk pola kerja yang sedang dipilih di dropdown
  get selectedPolaKerja(): PolaKerjaRequest | null {
    const idx = this.selectedPolaKerjaIndex();
    if (idx === null) return null;
    return this.localPolaKerjaList()[idx] ?? null;
  }

  onSelectPolaKerja(value: number | null): void {
    this.selectedPolaKerjaIndex.set(value);
    try {
      if (value !== null) {
        sessionStorage.setItem(SESSION_KEY_INDEX, String(value));
      } else {
        sessionStorage.removeItem(SESSION_KEY_INDEX);
      }
    } catch (_) {}
  }

  // ── Supervisi FormArray ───────────────────────────────────
  get supervisiArray(): FormArray {
    return this.form.get('supervisiList') as FormArray;
  }

  supervisiGroup(i: number): FormGroup {
    return this.supervisiArray.at(i) as FormGroup;
  }

  addSupervisi(item?: SupervisiItem): void {
    this.supervisiArray.push(this.fb.group({
      nama:  [item?.nama  ?? ''],
      email: [item?.email ?? ''],
      bcc:   [item?.bcc   ?? '']
    }));
  }

  removeSupervisi(i: number): void {
    if (this.supervisiArray.length > 1) this.supervisiArray.removeAt(i);
  }

  // ── Submit ────────────────────────────────────────────────
  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.error.set('');
    const req = this.form.value as unknown as DivisiRequest;

    if (this.isEdit) {
      this.svc.update(this.editId()!, req).subscribe({
        next:  () => this.router.navigate(['/divisi']),
        error: err => { this.error.set(err?.data?.message ?? err?.message ?? 'Terjadi kesalahan.'); this.saving.set(false); }
      });
    } else {
      // 1. Buat divisi
      // 2. Assign pola global yang dicentang ke divisi baru
      // 3. Buat pola baru lokal dan assign ke divisi baru
      this.svc.create(req).pipe(
        switchMap(divisi => {
          const ops: any[] = [];

          this.selectedPolaIds().forEach(polaId => {
            const existing = this.allPolaKerjaList().find(p => p.id === polaId);
            const newIds = [...(existing?.divisiIds ?? []), divisi.id];
            ops.push(this.polaKerjaSvc.assignDivisi(polaId, newIds));
          });

          this.localPolaKerjaList().forEach(pk =>
            ops.push(this.polaKerjaSvc.create({ ...pk, divisiIds: [divisi.id] }))
          );

          return ops.length > 0 ? forkJoin(ops).pipe(switchMap(() => of(divisi))) : of(divisi);
        })
      ).subscribe({
        next: () => { this.clearSession(); this.router.navigate(['/divisi']); },
        error: err => { this.error.set(err?.data?.message ?? err?.message ?? 'Terjadi kesalahan.'); this.saving.set(false); }
      });
    }
  }

  // ── Getters ───────────────────────────────────────────────
  get f()           { return this.form.controls; }
  get isEdit()      { return !!this.editId(); }
  get isHariKerja() { return this.form.get('sistemKerja')?.value === 'HARI_KERJA'; }

  /** Toggle Sistem Kerja Shift dari checkbox di form. */
  onShiftToggle(checked: boolean): void {
    this.form.patchValue({ sistemKerja: checked ? 'SHIFT' : 'HARI_KERJA' });
    this.form.get('sistemKerja')?.markAsDirty();
  }

  batal(): void {
    if (!this.isEdit && (this.selectedPolaIds().size > 0 || this.localPolaKerjaList().length > 0 || this.form.dirty)) {
      if (!confirm('Data draft yang belum disimpan akan dihapus. Yakin ingin keluar?')) return;
      this.clearSession();
    }
    this.router.navigate(['/divisi']);
  }
}
