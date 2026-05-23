import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { Karyawan, FileIdentitas, FileIdentitasRequest, JenisIdentitasTambahan, PengalamanKerja, PengalamanKerjaRequest, BackgroundPendidikan, BackgroundPendidikanRequest, TingkatPendidikan, Portofolio, PortofolioRequest, Penghargaan, PenghargaanRequest, Sertifikat, SertifikatRequest, PengalamanOrganisasi, PengalamanOrganisasiRequest, KontakDarurat, KontakDaruratRequest } from '../../../core/models/karyawan.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { environment } from '../../../../environments/environment';

export interface KariTimelineItem {
  id: string;
  periode: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeClass?: string;
  icon: string;
  dotClass: string;
  description?: string;
}

@Component({
  selector: 'app-karyawan-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, LayoutComponent, DatePipe, FormsModule],
  templateUrl: './karyawan-detail.component.html',
  styleUrl: './karyawan-detail.component.scss'
})
export class KaryawanDetailComponent implements OnInit {
  private route   = inject(ActivatedRoute);
  private svc     = inject(KaryawanService);

  karyawan = signal<Karyawan | null>(null);
  loading  = signal(true);
  error    = signal('');

  activeTab = signal<'pribadi' | 'kepegawaian' | 'pendidikan' | 'akun'>('pribadi');
  pribadiSubTab = signal<'informasi' | 'identitas' | 'pengalaman' | 'pendidikan' | 'portofolio' | 'penghargaan' | 'sertifikat' | 'organisasi'>('informasi');

  // ...existing code...

  // ── Sertifikat ────────────────────────────────────────────
  sertifikatList    = signal<Sertifikat[]>([]);
  sertifikatLoading = signal(false);
  showSertifikatModal = signal(false);
  sertifikatSaving  = signal(false);
  sertifikatError   = signal('');
  editingSertifikatId = signal<number | null>(null);
  selectedSertifikatFile: File | null = null;

  sertifikatForm: SertifikatRequest = {
    namaSertifikat: '', penerbit: '', nomorSertifikat: '',
    tanggalTerbit: null, tanggalKadaluarsa: null, keterangan: ''
  };

  // ── Pengalaman Organisasi ─────────────────────────────────
  organisasiList    = signal<PengalamanOrganisasi[]>([]);
  organisasiLoading = signal(false);
  showOrganisasiModal = signal(false);
  organisasiSaving  = signal(false);
  organisasiError   = signal('');
  editingOrganisasiId = signal<number | null>(null);

  organisasiForm: PengalamanOrganisasiRequest = {
    namaOrganisasi: '', jabatan: '',
    tanggalMulai: null, tanggalSelesai: null,
    masihAktif: false, deskripsi: ''
  };

  // ── Kontak Darurat ────────────────────────────────────────
  kontakDaruratList    = signal<KontakDarurat[]>([]);
  kontakDaruratLoading = signal(false);
  showKontakDaruratModal = signal(false);
  kontakDaruratSaving  = signal(false);
  kontakDaruratError   = signal('');
  editingKontakDaruratId = signal<number | null>(null);

  kontakDaruratForm: KontakDaruratRequest = {
    nama: '', noTelepon: ''
  };

  // ...existing code...

  // ── Penghargaan ───────────────────────────────────────────
  penghargaanList    = signal<Penghargaan[]>([]);
  penghargaanLoading = signal(false);
  showPenghargaanModal = signal(false);
  penghargaanSaving  = signal(false);
  penghargaanError   = signal('');
  editingPenghargaanId = signal<number | null>(null);

  penghargaanForm: PenghargaanRequest = {
    namaPenghargaan: '', penerbit: '', tahun: null, deskripsi: ''
  };

  // ── File Identitas Tambahan ──────────────────────────────
  fileIdentitasList = signal<FileIdentitas[]>([]);
  fileIdentitasLoading = signal(false);
  showFileIdentitasModal = signal(false);
  fileIdentitasSaving = signal(false);
  fileIdentitasError = signal('');

  fileForm: FileIdentitasRequest = { jenisIdentitas: 'KTP', nomor: '' };
  selectedFile: File | null = null;

  readonly jenisIdentitasOptions: { value: JenisIdentitasTambahan; label: string }[] = [
    { value: 'KTP',                  label: 'KTP' },
    { value: 'SIM_A',                label: 'SIM A' },
    { value: 'SIM_B',                label: 'SIM B' },
    { value: 'SIM_C',                label: 'SIM C' },
    { value: 'PASPOR',               label: 'Paspor' },
    { value: 'KITAS',                label: 'KITAS' },
    { value: 'NPWP',                 label: 'NPWP' },
    { value: 'BPJS_KESEHATAN',       label: 'BPJS Kesehatan' },
    { value: 'BPJS_KETENAGAKERJAAN', label: 'BPJS Ketenagakerjaan' },
    { value: 'LAINNYA',              label: 'Lainnya' },
  ];

  // ── Pengalaman Kerja ─────────────────────────────────────
  pengalamanKerjaList    = signal<PengalamanKerja[]>([]);
  pengalamanKerjaLoading = signal(false);
  showPengalamanModal    = signal(false);
  pengalamanSaving       = signal(false);
  pengalamanError        = signal('');
  editingPengalamanId    = signal<number | null>(null);

  pengalamanForm: PengalamanKerjaRequest = {
    namaPerusahaan: '', jabatan: '', bidangIndustri: '',
    tanggalMulai: null, tanggalSelesai: null,
    masihBekerja: false, deskripsi: ''
  };

  // ── Background Pendidikan ─────────────────────────────────
  bgPendidikanList    = signal<BackgroundPendidikan[]>([]);
  bgPendidikanLoading = signal(false);
  showBgPendidikanModal = signal(false);
  bgPendidikanSaving  = signal(false);
  bgPendidikanError   = signal('');
  editingBgPendidikanId = signal<number | null>(null);

  bgPendidikanForm: BackgroundPendidikanRequest = {
    tingkatPendidikan: 'S1', namaInstitusi: '', jurusan: '',
    tahunMasuk: null, tahunLulus: null, nilai: '', keterangan: ''
  };

  readonly tingkatPendidikanOptions: { value: TingkatPendidikan; label: string }[] = [
    { value: 'SD',     label: 'SD' },
    { value: 'SMP',    label: 'SMP' },
    { value: 'SMA_SMK',label: 'SMA / SMK' },
    { value: 'D1',     label: 'D1' },
    { value: 'D2',     label: 'D2' },
    { value: 'D3',     label: 'D3' },
    { value: 'D4',     label: 'D4' },
    { value: 'S1',     label: 'S1 (Sarjana)' },
    { value: 'S2',     label: 'S2 (Magister)' },
    { value: 'S3',     label: 'S3 (Doktor)' },
  ];

  // ── Portofolio ────────────────────────────────────────────
  portofolioList    = signal<Portofolio[]>([]);
  portofolioLoading = signal(false);
  showPortofolioModal = signal(false);
  portofolioSaving  = signal(false);
  portofolioError   = signal('');
  editingPortofolioId = signal<number | null>(null);

  portofolioForm: PortofolioRequest = {
    judul: '', urlLink: '', deskripsi: ''
  };

  // ── Timeline Karir ────────────────────────────────────────
  kariTimelineItems = computed<KariTimelineItem[]>(() => {
    const k = this.karyawan();
    const items: KariTimelineItem[] = [];

    if (!k) return items;

    // 1. Mulai Bergabung
    if (k.tglMulaiBekerja) {
      const tgl = new Date(k.tglMulaiBekerja);
      items.push({
        id: 'join',
        periode: tgl.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        title: 'Bergabung sebagai Karyawan',
        subtitle: k.namaJabatan
          ? `${k.namaJabatan}${k.namaDivisi ? ' — ' + k.namaDivisi : ''}`
          : (k.namaDivisi || undefined),
        badge: 'Mulai Bekerja',
        badgeClass: 'badge-aktif',
        icon: 'bx-user-check',
        dotClass: 'dot-green',
        description: undefined
      });
    }

    // 2. Jabatan & Divisi saat ini
    if (k.namaJabatan || k.namaDivisi) {
      items.push({
        id: 'jabatan',
        periode: 'Posisi Saat Ini',
        title: k.namaJabatan || 'Belum ada jabatan',
        subtitle: k.namaDivisi ? `Divisi: ${k.namaDivisi}` : undefined,
        badge: this.statusKerjaLabel(k.statusKerja),
        badgeClass: this.statusKerjaBadgeClass(k.statusKerja),
        icon: 'bx-briefcase',
        dotClass: 'dot-blue',
        description: k.tglMulaiBekerja
          ? `Masa kerja: ${this.masaKerja(k.tglMulaiBekerja)}`
          : undefined
      });
    }

    // 3. Cuti (jika status CUTI)
    if (k.statusKerja === 'CUTI' && k.tglMulaiDapatCuti) {
      const tgl = new Date(k.tglMulaiDapatCuti);
      items.push({
        id: 'cuti',
        periode: tgl.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        title: 'Sedang Cuti',
        subtitle: k.tglCutiBeakhir
          ? `Berakhir: ${new Date(k.tglCutiBeakhir).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`
          : undefined,
        badge: 'Cuti',
        badgeClass: 'badge-cuti',
        icon: 'bx-calendar-check',
        dotClass: 'dot-yellow',
        description: `Sisa cuti: ${k.sisaCuti} hari`
      });
    }

    // 4. Non-aktif / Resign / Pensiun
    if (['NONAKTIF', 'RESIGN', 'PENSIUN'].includes(k.statusKerja)) {
      items.push({
        id: 'offboard',
        periode: 'Status Terkini',
        title: this.statusKerjaLabel(k.statusKerja),
        subtitle: k.namaJabatan
          ? `Terakhir menjabat: ${k.namaJabatan}`
          : undefined,
        badge: this.statusKerjaLabel(k.statusKerja),
        badgeClass: this.statusKerjaBadgeClass(k.statusKerja),
        icon: k.statusKerja === 'PENSIUN' ? 'bx-trophy' : 'bx-log-out',
        dotClass: 'dot-gray',
        description: undefined
      });
    }

    return items;
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.findById(id).subscribe({
      next: k  => {
        this.karyawan.set(k);
        this.loading.set(false);
        this.loadFileIdentitas(k.id);
        this.loadPengalamanKerja(k.id);
        this.loadBgPendidikan(k.id);
        this.loadPortofolio(k.id);
        this.loadPenghargaan(k.id);
        this.loadSertifikat(k.id);
        this.loadOrganisasi(k.id);
        this.loadKontakDarurat(k.id);
      },
      error: () => { this.error.set('Gagal memuat data karyawan.'); this.loading.set(false); }
    });
  }

  loadFileIdentitas(karyawanId: number): void {
    this.fileIdentitasLoading.set(true);
    this.svc.getFileIdentitas(karyawanId).subscribe({
      next: list => { this.fileIdentitasList.set(list); this.fileIdentitasLoading.set(false); },
      error: ()  => { this.fileIdentitasLoading.set(false); }
    });
  }

  openFileIdentitasModal(): void {
    this.fileForm = { jenisIdentitas: 'KTP', nomor: '' };
    this.selectedFile = null;
    this.fileIdentitasError.set('');
    this.showFileIdentitasModal.set(true);
  }

  closeFileIdentitasModal(): void {
    this.showFileIdentitasModal.set(false);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  saveFileIdentitas(): void {
    if (!this.fileForm.nomor.trim()) {
      this.fileIdentitasError.set('Nomor wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;

    this.fileIdentitasSaving.set(true);
    this.fileIdentitasError.set('');
    this.svc.addFileIdentitas(k.id, this.fileForm, this.selectedFile ?? undefined).subscribe({
      next: item => {
        this.fileIdentitasList.update(list => [...list, item]);
        this.fileIdentitasSaving.set(false);
        this.closeFileIdentitasModal();
      },
      error: () => {
        this.fileIdentitasError.set('Gagal menyimpan file identitas.');
        this.fileIdentitasSaving.set(false);
      }
    });
  }

  deleteFileIdentitas(fileId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus file identitas ini?')) return;
    this.svc.deleteFileIdentitas(k.id, fileId).subscribe({
      next: () => this.fileIdentitasList.update(list => list.filter(f => f.id !== fileId)),
      error: () => alert('Gagal menghapus file identitas.')
    });
  }

  jenisIdentitasTambahanLabel(v: string): string {
    return this.jenisIdentitasOptions.find(o => o.value === v)?.label ?? v;
  }

  // ── Pengalaman Kerja methods ──────────────────────────────
  loadPengalamanKerja(karyawanId: number): void {
    this.pengalamanKerjaLoading.set(true);
    this.svc.getPengalamanKerja(karyawanId).subscribe({
      next: list => { this.pengalamanKerjaList.set(list); this.pengalamanKerjaLoading.set(false); },
      error: ()  => { this.pengalamanKerjaLoading.set(false); }
    });
  }

  private resetPengalamanForm(): void {
    this.pengalamanForm = {
      namaPerusahaan: '', jabatan: '', bidangIndustri: '',
      tanggalMulai: null, tanggalSelesai: null,
      masihBekerja: false, deskripsi: ''
    };
  }

  openPengalamanModal(): void {
    this.editingPengalamanId.set(null);
    this.resetPengalamanForm();
    this.pengalamanError.set('');
    this.showPengalamanModal.set(true);
  }

  openEditPengalamanModal(item: PengalamanKerja): void {
    this.editingPengalamanId.set(item.id);
    this.pengalamanForm = {
      namaPerusahaan : item.namaPerusahaan,
      jabatan        : item.jabatan,
      bidangIndustri : item.bidangIndustri ?? '',
      tanggalMulai   : item.tanggalMulai ?? null,
      tanggalSelesai : item.tanggalSelesai ?? null,
      masihBekerja   : item.masihBekerja ?? false,
      deskripsi      : item.deskripsi ?? ''
    };
    this.pengalamanError.set('');
    this.showPengalamanModal.set(true);
  }

  closePengalamanModal(): void {
    this.showPengalamanModal.set(false);
    this.editingPengalamanId.set(null);
  }

  savePengalamanKerja(): void {
    if (!this.pengalamanForm.namaPerusahaan?.trim()) {
      this.pengalamanError.set('Nama perusahaan wajib diisi.');
      return;
    }
    if (!this.pengalamanForm.jabatan?.trim()) {
      this.pengalamanError.set('Jabatan wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;

    this.pengalamanSaving.set(true);
    this.pengalamanError.set('');

    const editId = this.editingPengalamanId();
    const req: PengalamanKerjaRequest = {
      ...this.pengalamanForm,
      tanggalSelesai: this.pengalamanForm.masihBekerja ? null : this.pengalamanForm.tanggalSelesai
    };

    const obs$ = editId
      ? this.svc.updatePengalamanKerja(k.id, editId, req)
      : this.svc.addPengalamanKerja(k.id, req);

    obs$.subscribe({
      next: item => {
        if (editId) {
          this.pengalamanKerjaList.update(list => list.map(p => p.id === editId ? item : p));
        } else {
          this.pengalamanKerjaList.update(list => [...list, item]);
        }
        this.pengalamanSaving.set(false);
        this.closePengalamanModal();
      },
      error: () => {
        this.pengalamanError.set('Gagal menyimpan pengalaman kerja.');
        this.pengalamanSaving.set(false);
      }
    });
  }

  deletePengalamanKerja(pengalamanId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus pengalaman kerja ini?')) return;
    this.svc.deletePengalamanKerja(k.id, pengalamanId).subscribe({
      next: () => this.pengalamanKerjaList.update(list => list.filter(p => p.id !== pengalamanId)),
      error: () => alert('Gagal menghapus pengalaman kerja.')
    });
  }

  pengalamanPeriode(item: PengalamanKerja): string {
    const mulai = item.tanggalMulai ? new Date(item.tanggalMulai).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : '—';
    const selesai = item.masihBekerja ? 'Sekarang' : (item.tanggalSelesai ? new Date(item.tanggalSelesai).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : '—');
    return `${mulai} – ${selesai}`;
  }

  // ── Background Pendidikan methods ─────────────────────────
  loadBgPendidikan(karyawanId: number): void {
    this.bgPendidikanLoading.set(true);
    this.svc.getBackgroundPendidikan(karyawanId).subscribe({
      next: list => { this.bgPendidikanList.set(list); this.bgPendidikanLoading.set(false); },
      error: ()  => { this.bgPendidikanLoading.set(false); }
    });
  }

  private resetBgPendidikanForm(): void {
    this.bgPendidikanForm = {
      tingkatPendidikan: 'S1', namaInstitusi: '', jurusan: '',
      tahunMasuk: null, tahunLulus: null, nilai: '', keterangan: ''
    };
  }

  openBgPendidikanModal(): void {
    this.editingBgPendidikanId.set(null);
    this.resetBgPendidikanForm();
    this.bgPendidikanError.set('');
    this.showBgPendidikanModal.set(true);
  }

  openEditBgPendidikanModal(item: BackgroundPendidikan): void {
    this.editingBgPendidikanId.set(item.id);
    this.bgPendidikanForm = {
      tingkatPendidikan: item.tingkatPendidikan,
      namaInstitusi    : item.namaInstitusi,
      jurusan          : item.jurusan ?? '',
      tahunMasuk       : item.tahunMasuk ?? null,
      tahunLulus       : item.tahunLulus ?? null,
      nilai            : item.nilai ?? '',
      keterangan       : item.keterangan ?? ''
    };
    this.bgPendidikanError.set('');
    this.showBgPendidikanModal.set(true);
  }

  closeBgPendidikanModal(): void {
    this.showBgPendidikanModal.set(false);
    this.editingBgPendidikanId.set(null);
  }

  saveBgPendidikan(): void {
    if (!this.bgPendidikanForm.namaInstitusi?.trim()) {
      this.bgPendidikanError.set('Nama institusi wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;

    this.bgPendidikanSaving.set(true);
    this.bgPendidikanError.set('');

    const editId = this.editingBgPendidikanId();
    const obs$ = editId
      ? this.svc.updateBackgroundPendidikan(k.id, editId, this.bgPendidikanForm)
      : this.svc.addBackgroundPendidikan(k.id, this.bgPendidikanForm);

    obs$.subscribe({
      next: item => {
        if (editId) {
          this.bgPendidikanList.update(list => list.map(p => p.id === editId ? item : p));
        } else {
          this.bgPendidikanList.update(list => [...list, item]);
        }
        this.bgPendidikanSaving.set(false);
        this.closeBgPendidikanModal();
      },
      error: () => {
        this.bgPendidikanError.set('Gagal menyimpan background pendidikan.');
        this.bgPendidikanSaving.set(false);
      }
    });
  }

  deleteBgPendidikan(pendidikanId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus data pendidikan ini?')) return;
    this.svc.deleteBackgroundPendidikan(k.id, pendidikanId).subscribe({
      next: () => this.bgPendidikanList.update(list => list.filter(p => p.id !== pendidikanId)),
      error: () => alert('Gagal menghapus data pendidikan.')
    });
  }

  tingkatPendidikanLabel(v?: string): string {
    return this.tingkatPendidikanOptions.find(o => o.value === v)?.label ?? (v || '—');
  }

  // ── Portofolio methods ────────────────────────────────────
  loadPortofolio(karyawanId: number): void {
    this.portofolioLoading.set(true);
    this.svc.getPortofolio(karyawanId).subscribe({
      next: list => { this.portofolioList.set(list); this.portofolioLoading.set(false); },
      error: ()  => { this.portofolioLoading.set(false); }
    });
  }

  private resetPortofolioForm(): void {
    this.portofolioForm = { judul: '', urlLink: '', deskripsi: '' };
  }

  openPortofolioModal(): void {
    this.editingPortofolioId.set(null);
    this.resetPortofolioForm();
    this.portofolioError.set('');
    this.showPortofolioModal.set(true);
  }

  openEditPortofolioModal(item: Portofolio): void {
    this.editingPortofolioId.set(item.id);
    this.portofolioForm = {
      judul    : item.judul,
      urlLink  : item.urlLink ?? '',
      deskripsi: item.deskripsi ?? ''
    };
    this.portofolioError.set('');
    this.showPortofolioModal.set(true);
  }

  closePortofolioModal(): void {
    this.showPortofolioModal.set(false);
    this.editingPortofolioId.set(null);
  }

  savePortofolio(): void {
    if (!this.portofolioForm.judul?.trim()) {
      this.portofolioError.set('Judul portofolio wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;

    this.portofolioSaving.set(true);
    this.portofolioError.set('');

    const editId = this.editingPortofolioId();
    const obs$ = editId
      ? this.svc.updatePortofolio(k.id, editId, this.portofolioForm)
      : this.svc.addPortofolio(k.id, this.portofolioForm);

    obs$.subscribe({
      next: item => {
        if (editId) {
          this.portofolioList.update(list => list.map(p => p.id === editId ? item : p));
        } else {
          this.portofolioList.update(list => [...list, item]);
        }
        this.portofolioSaving.set(false);
        this.closePortofolioModal();
      },
      error: () => {
        this.portofolioError.set('Gagal menyimpan portofolio.');
        this.portofolioSaving.set(false);
      }
    });
  }

  deletePortofolio(portofolioId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus portofolio ini?')) return;
    this.svc.deletePortofolio(k.id, portofolioId).subscribe({
      next: () => this.portofolioList.update(list => list.filter(p => p.id !== portofolioId)),
      error: () => alert('Gagal menghapus portofolio.')
    });
  }

  fileIdentitasUrl(url?: string): string | null {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${environment.baseUrl}/${url}`;
  }

  fotoUrl(path?: string): string | null {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${environment.baseUrl}/${path}`;
  }

  jenisKelaminLabel(v?: string): string {
    return v === 'LAKI_LAKI' ? 'Laki-laki' : v === 'PEREMPUAN' ? 'Perempuan' : '—';
  }

  statusPerkawinanLabel(v?: string): string {
    const map: Record<string, string> = {
      BELUM_MENIKAH: 'Belum Menikah', MENIKAH: 'Menikah',
      CERAI_HIDUP: 'Cerai Hidup', CERAI_MATI: 'Cerai Mati'
    };
    return v ? (map[v] ?? v) : '—';
  }

  agamaLabel(v?: string): string {
    const map: Record<string, string> = {
      ISLAM: 'Islam', KRISTEN: 'Kristen Protestan', KATOLIK: 'Kristen Katolik',
      HINDU: 'Hindu', BUDHA: 'Buddha', KONGHUCU: 'Konghucu', LAINNYA: 'Lainnya'
    };
    return v ? (map[v] ?? v) : '—';
  }

  golonganDarahLabel(v?: string): string {
    if (!v) return '—';
    return v.replace('_PLUS', '+').replace('_MINUS', '-');
  }

  zonaWaktuLabel(v?: string): string {
    const map: Record<string, string> = { WIB: 'WIB (UTC+7)', WITA: 'WITA (UTC+8)', WIT: 'WIT (UTC+9)' };
    return v ? (map[v] ?? v) : '—';
  }

  statusKerjaLabel(v?: string): string {
    const map: Record<string, string> = {
      AKTIF: 'Aktif', NONAKTIF: 'Non Aktif', CUTI: 'Cuti',
      KONTRAK: 'Kontrak', PROBASI: 'Probasi', PENSIUN: 'Pensiun', RESIGN: 'Resign'
    };
    return v ? (map[v] ?? v) : '—';
  }

  statusKerjaBadgeClass(v?: string): string {
    const map: Record<string, string> = {
      AKTIF: 'badge-aktif', NONAKTIF: 'badge-nonaktif', CUTI: 'badge-cuti',
      KONTRAK: 'badge-kontrak', PROBASI: 'badge-probasi',
      PENSIUN: 'badge-pensiun', RESIGN: 'badge-resign'
    };
    return v ? (map[v] ?? '') : '';
  }

  jenjangPendidikanLabel(v?: string): string {
    const map: Record<string, string> = {
      SD: 'SD', SMP: 'SMP', SMA_SMK: 'SMA/SMK',
      D1: 'D1', D2: 'D2', D3: 'D3', D4: 'D4',
      S1: 'S1 (Sarjana)', S2: 'S2 (Magister)', S3: 'S3 (Doktor)'
    };
    return v ? (map[v] ?? v) : '—';
  }

  umur(tgl?: string): string {
    if (!tgl) return '—';
    const lahir = new Date(tgl);
    const now   = new Date();
    let tahun   = now.getFullYear() - lahir.getFullYear();
    const m     = now.getMonth() - lahir.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < lahir.getDate())) tahun--;
    return `${tahun} tahun`;
  }

  masaKerja(tgl?: string): string {
    if (!tgl) return '—';
    const mulai = new Date(tgl);
    const now   = new Date();
    let tahun   = now.getFullYear() - mulai.getFullYear();
    let bulan   = now.getMonth() - mulai.getMonth();
    if (bulan < 0) { tahun--; bulan += 12; }
    if (tahun === 0) return `${bulan} bulan`;
    return bulan > 0 ? `${tahun} tahun ${bulan} bulan` : `${tahun} tahun`;
  }

  // ── Penghargaan methods ───────────────────────────────────
  loadPenghargaan(karyawanId: number): void {
    this.penghargaanLoading.set(true);
    this.svc.getPenghargaan(karyawanId).subscribe({
      next: list => { this.penghargaanList.set(list); this.penghargaanLoading.set(false); },
      error: ()  => { this.penghargaanLoading.set(false); }
    });
  }

  private resetPenghargaanForm(): void {
    this.penghargaanForm = { namaPenghargaan: '', penerbit: '', tahun: null, deskripsi: '' };
  }

  openPenghargaanModal(): void {
    this.editingPenghargaanId.set(null);
    this.resetPenghargaanForm();
    this.penghargaanError.set('');
    this.showPenghargaanModal.set(true);
  }

  openEditPenghargaanModal(item: Penghargaan): void {
    this.editingPenghargaanId.set(item.id);
    this.penghargaanForm = {
      namaPenghargaan: item.namaPenghargaan,
      penerbit        : item.penerbit ?? '',
      tahun           : item.tahun ?? null,
      deskripsi       : item.deskripsi ?? ''
    };
    this.penghargaanError.set('');
    this.showPenghargaanModal.set(true);
  }

  closePenghargaanModal(): void {
    this.showPenghargaanModal.set(false);
    this.editingPenghargaanId.set(null);
  }

  savePenghargaan(): void {
    if (!this.penghargaanForm.namaPenghargaan?.trim()) {
      this.penghargaanError.set('Nama penghargaan wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;
    this.penghargaanSaving.set(true);
    this.penghargaanError.set('');
    const editId = this.editingPenghargaanId();
    const obs$ = editId
      ? this.svc.updatePenghargaan(k.id, editId, this.penghargaanForm)
      : this.svc.addPenghargaan(k.id, this.penghargaanForm);
    obs$.subscribe({
      next: item => {
        if (editId) {
          this.penghargaanList.update(list => list.map(p => p.id === editId ? item : p));
        } else {
          this.penghargaanList.update(list => [...list, item]);
        }
        this.penghargaanSaving.set(false);
        this.closePenghargaanModal();
      },
      error: () => {
        this.penghargaanError.set('Gagal menyimpan penghargaan.');
        this.penghargaanSaving.set(false);
      }
    });
  }

  deletePenghargaan(penghargaanId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus penghargaan ini?')) return;
    this.svc.deletePenghargaan(k.id, penghargaanId).subscribe({
      next: () => this.penghargaanList.update(list => list.filter(p => p.id !== penghargaanId)),
      error: () => alert('Gagal menghapus penghargaan.')
    });
  }

  // ── Sertifikat methods ────────────────────────────────────
  loadSertifikat(karyawanId: number): void {
    this.sertifikatLoading.set(true);
    this.svc.getSertifikat(karyawanId).subscribe({
      next: list => { this.sertifikatList.set(list); this.sertifikatLoading.set(false); },
      error: ()  => { this.sertifikatLoading.set(false); }
    });
  }

  private resetSertifikatForm(): void {
    this.sertifikatForm = {
      namaSertifikat: '', penerbit: '', nomorSertifikat: '',
      tanggalTerbit: null, tanggalKadaluarsa: null, keterangan: ''
    };
    this.selectedSertifikatFile = null;
  }

  openSertifikatModal(): void {
    this.editingSertifikatId.set(null);
    this.resetSertifikatForm();
    this.sertifikatError.set('');
    this.showSertifikatModal.set(true);
  }

  openEditSertifikatModal(item: Sertifikat): void {
    this.editingSertifikatId.set(item.id);
    this.sertifikatForm = {
      namaSertifikat    : item.namaSertifikat,
      penerbit          : item.penerbit ?? '',
      nomorSertifikat   : item.nomorSertifikat ?? '',
      tanggalTerbit     : item.tanggalTerbit ?? null,
      tanggalKadaluarsa : item.tanggalKadaluarsa ?? null,
      keterangan        : item.keterangan ?? ''
    };
    this.selectedSertifikatFile = null;
    this.sertifikatError.set('');
    this.showSertifikatModal.set(true);
  }

  closeSertifikatModal(): void {
    this.showSertifikatModal.set(false);
    this.editingSertifikatId.set(null);
  }

  onSertifikatFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedSertifikatFile = input.files?.[0] ?? null;
  }

  saveSertifikat(): void {
    if (!this.sertifikatForm.namaSertifikat?.trim()) {
      this.sertifikatError.set('Nama sertifikat wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;
    this.sertifikatSaving.set(true);
    this.sertifikatError.set('');
    const editId = this.editingSertifikatId();
    const file = this.selectedSertifikatFile ?? undefined;
    const obs$ = editId
      ? this.svc.updateSertifikat(k.id, editId, this.sertifikatForm, file)
      : this.svc.addSertifikat(k.id, this.sertifikatForm, file);
    obs$.subscribe({
      next: item => {
        if (editId) {
          this.sertifikatList.update(list => list.map(s => s.id === editId ? item : s));
        } else {
          this.sertifikatList.update(list => [...list, item]);
        }
        this.sertifikatSaving.set(false);
        this.closeSertifikatModal();
      },
      error: () => {
        this.sertifikatError.set('Gagal menyimpan sertifikat.');
        this.sertifikatSaving.set(false);
      }
    });
  }

  deleteSertifikat(sertifikatId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus sertifikat ini?')) return;
    this.svc.deleteSertifikat(k.id, sertifikatId).subscribe({
      next: () => this.sertifikatList.update(list => list.filter(s => s.id !== sertifikatId)),
      error: () => alert('Gagal menghapus sertifikat.')
    });
  }

  sertifikatFileUrl(url?: string): string | null {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${environment.baseUrl}/${url}`;
  }

  // ── Pengalaman Organisasi methods ─────────────────────────
  loadOrganisasi(karyawanId: number): void {
    this.organisasiLoading.set(true);
    this.svc.getPengalamanOrganisasi(karyawanId).subscribe({
      next: list => { this.organisasiList.set(list); this.organisasiLoading.set(false); },
      error: ()  => { this.organisasiLoading.set(false); }
    });
  }

  private resetOrganisasiForm(): void {
    this.organisasiForm = {
      namaOrganisasi: '', jabatan: '',
      tanggalMulai: null, tanggalSelesai: null,
      masihAktif: false, deskripsi: ''
    };
  }

  openOrganisasiModal(): void {
    this.editingOrganisasiId.set(null);
    this.resetOrganisasiForm();
    this.organisasiError.set('');
    this.showOrganisasiModal.set(true);
  }

  openEditOrganisasiModal(item: PengalamanOrganisasi): void {
    this.editingOrganisasiId.set(item.id);
    this.organisasiForm = {
      namaOrganisasi: item.namaOrganisasi,
      jabatan        : item.jabatan ?? '',
      tanggalMulai   : item.tanggalMulai ?? null,
      tanggalSelesai : item.tanggalSelesai ?? null,
      masihAktif     : item.masihAktif ?? false,
      deskripsi      : item.deskripsi ?? ''
    };
    this.organisasiError.set('');
    this.showOrganisasiModal.set(true);
  }

  closeOrganisasiModal(): void {
    this.showOrganisasiModal.set(false);
    this.editingOrganisasiId.set(null);
  }

  saveOrganisasi(): void {
    if (!this.organisasiForm.namaOrganisasi?.trim()) {
      this.organisasiError.set('Nama organisasi wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;
    this.organisasiSaving.set(true);
    this.organisasiError.set('');
    const editId = this.editingOrganisasiId();
    const req: PengalamanOrganisasiRequest = {
      ...this.organisasiForm,
      tanggalSelesai: this.organisasiForm.masihAktif ? null : this.organisasiForm.tanggalSelesai
    };
    const obs$ = editId
      ? this.svc.updatePengalamanOrganisasi(k.id, editId, req)
      : this.svc.addPengalamanOrganisasi(k.id, req);
    obs$.subscribe({
      next: item => {
        if (editId) {
          this.organisasiList.update(list => list.map(o => o.id === editId ? item : o));
        } else {
          this.organisasiList.update(list => [...list, item]);
        }
        this.organisasiSaving.set(false);
        this.closeOrganisasiModal();
      },
      error: () => {
        this.organisasiError.set('Gagal menyimpan pengalaman organisasi.');
        this.organisasiSaving.set(false);
      }
    });
  }

  deleteOrganisasi(organisasiId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus pengalaman organisasi ini?')) return;
    this.svc.deletePengalamanOrganisasi(k.id, organisasiId).subscribe({
      next: () => this.organisasiList.update(list => list.filter(o => o.id !== organisasiId)),
      error: () => alert('Gagal menghapus pengalaman organisasi.')
    });
  }

  organisasiPeriode(item: PengalamanOrganisasi): string {
    const fmt = (d: string) => {
      const dt = new Date(d);
      return dt.toLocaleDateString('id-ID', { month: 'short', year: 'numeric' });
    };
    const mulai   = item.tanggalMulai  ? fmt(item.tanggalMulai)  : '—';
    const selesai = item.masihAktif    ? 'Sekarang'
                  : item.tanggalSelesai ? fmt(item.tanggalSelesai) : '—';
    return `${mulai} – ${selesai}`;
  }

  // ── Kontak Darurat methods ────────────────────────────────
  loadKontakDarurat(karyawanId: number): void {
    this.kontakDaruratLoading.set(true);
    this.svc.getKontakDarurat(karyawanId).subscribe({
      next: list => { this.kontakDaruratList.set(list); this.kontakDaruratLoading.set(false); },
      error: ()  => { this.kontakDaruratLoading.set(false); }
    });
  }

  private resetKontakDaruratForm(): void {
    this.kontakDaruratForm = { nama: '', noTelepon: '' };
  }

  openKontakDaruratModal(): void {
    this.editingKontakDaruratId.set(null);
    this.resetKontakDaruratForm();
    this.kontakDaruratError.set('');
    this.showKontakDaruratModal.set(true);
  }

  openEditKontakDaruratModal(item: KontakDarurat): void {
    this.editingKontakDaruratId.set(item.id);
    this.kontakDaruratForm = {
      nama      : item.nama,
      noTelepon : item.noTelepon ?? ''
    };
    this.kontakDaruratError.set('');
    this.showKontakDaruratModal.set(true);
  }

  closeKontakDaruratModal(): void {
    this.showKontakDaruratModal.set(false);
    this.editingKontakDaruratId.set(null);
  }

  saveKontakDarurat(): void {
    if (!this.kontakDaruratForm.nama?.trim()) {
      this.kontakDaruratError.set('Nama wajib diisi.');
      return;
    }
    const k = this.karyawan();
    if (!k) return;
    this.kontakDaruratSaving.set(true);
    this.kontakDaruratError.set('');
    const editId = this.editingKontakDaruratId();
    const obs$ = editId
      ? this.svc.updateKontakDarurat(k.id, editId, this.kontakDaruratForm)
      : this.svc.addKontakDarurat(k.id, this.kontakDaruratForm);
    obs$.subscribe({
      next: item => {
        if (editId) {
          this.kontakDaruratList.update(list => list.map(c => c.id === editId ? item : c));
        } else {
          this.kontakDaruratList.update(list => [...list, item]);
        }
        this.kontakDaruratSaving.set(false);
        this.closeKontakDaruratModal();
      },
      error: () => {
        this.kontakDaruratError.set('Gagal menyimpan kontak darurat.');
        this.kontakDaruratSaving.set(false);
      }
    });
  }

  deleteKontakDarurat(kontakId: number): void {
    const k = this.karyawan();
    if (!k) return;
    if (!confirm('Hapus kontak darurat ini?')) return;
    this.svc.deleteKontakDarurat(k.id, kontakId).subscribe({
      next: () => this.kontakDaruratList.update(list => list.filter(c => c.id !== kontakId)),
      error: () => alert('Gagal menghapus kontak darurat.')
    });
  }
}



