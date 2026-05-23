import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { JabatanService } from '../../../core/services/jabatan.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { WilayahService, Provinsi, KabupatenKota } from '../../../core/services/wilayah.service';
import { KaryawanRequest } from '../../../core/models/karyawan.model';
import { Jabatan } from '../../../core/models/jabatan.model';
import { Divisi } from '../../../core/models/divisi.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { SearchableSelectComponent } from '../../../shared/searchable-select/searchable-select.component';
import { environment } from '../../../../environments/environment';

/** Custom validator: konfirmasi password harus sama dengan password */
function passwordMatchValidator(ctrl: AbstractControl): ValidationErrors | null {
  const pw  = ctrl.get('password')?.value;
  const cpw = ctrl.get('konfirmasiPassword')?.value;
  if (!pw && !cpw) return null;                 // keduanya kosong → ok (update tanpa ganti sandi)
  return pw === cpw ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-karyawan-form',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterLink, LayoutComponent, SearchableSelectComponent],
  templateUrl: './karyawan-form.component.html'
})
export class KaryawanFormComponent implements OnInit {
  private fb    = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private svc   = inject(KaryawanService);
  private jabatanSvc  = inject(JabatanService);
  private divisiSvc   = inject(DivisiService);
  private wilayahSvc  = inject(WilayahService);

  editId   = signal<number | null>(null);
  loading  = signal(false);
  saving   = signal(false);
  error    = signal('');

  jabatanList      = signal<Jabatan[]>([]);
  divisiList       = signal<Divisi[]>([]);
  provinsiList     = signal<Provinsi[]>([]);
  kabupatenKotaList = signal<KabupatenKota[]>([]);

  /** Computed options untuk SearchableSelectComponent */
  provinsiOptions = computed(() =>
    this.provinsiList().map(p => ({ value: p.id, label: p.namaProvinsi }))
  );
  kabupatenKotaOptions = computed(() =>
    this.kabupatenKotaList().map(k => ({ value: k.id, label: k.namaKabupatenKota }))
  );

  /** Tab aktif: 'pribadi' | 'alamat' | 'pendidikan' | 'kepegawaian' | 'akun' */
  activeTab = signal<string>('pribadi');

  /** File foto yang dipilih user */
  fotoFile = signal<File | null>(null);
  /** URL preview foto */
  fotoPreview = signal<string | null>(null);

  readonly jenisKelaminOptions = [
    { value: 'LAKI_LAKI', label: 'Laki-laki' },
    { value: 'PEREMPUAN', label: 'Perempuan' }
  ];
  readonly golonganDarahOptions = ['A','B','AB','O','A_PLUS','A_MINUS','B_PLUS','B_MINUS','AB_PLUS','AB_MINUS','O_PLUS','O_MINUS'];
  readonly golonganDarahLabels: Record<string,string> = {
    A:'A', B:'B', AB:'AB', O:'O',
    A_PLUS:'A+', A_MINUS:'A-', B_PLUS:'B+', B_MINUS:'B-',
    AB_PLUS:'AB+', AB_MINUS:'AB-', O_PLUS:'O+', O_MINUS:'O-'
  };
  readonly statusPerkawinanOptions = [
    { value: 'BELUM_MENIKAH', label: 'Belum Menikah' },
    { value: 'MENIKAH',       label: 'Menikah' },
    { value: 'CERAI_HIDUP',   label: 'Cerai Hidup' },
    { value: 'CERAI_MATI',    label: 'Cerai Mati' }
  ];
  readonly agamaOptions = [
    { value: 'ISLAM',    label: 'Islam' },
    { value: 'KRISTEN',  label: 'Kristen' },
    { value: 'KATOLIK',  label: 'Katolik' },
    { value: 'HINDU',    label: 'Hindu' },
    { value: 'BUDHA',    label: 'Budha' },
    { value: 'KONGHUCU', label: 'Konghucu' },
    { value: 'LAINNYA',  label: 'Lainnya' }
  ];
  readonly jenisIdentitasOptions = [
    { value: 'KTP',    label: 'KTP' },
    { value: 'SIM',    label: 'SIM' },
    { value: 'PASPOR', label: 'Paspor' },
    { value: 'KITAS',  label: 'KITAS' }
  ];
  readonly zonaWaktuOptions = ['WIB','WITA','WIT'];
  readonly jenjangOptions = [
    { value: 'SD',      label: 'SD' },
    { value: 'SMP',     label: 'SMP' },
    { value: 'SMA_SMK', label: 'SMA/SMK' },
    { value: 'D1', label: 'D1' }, { value: 'D2', label: 'D2' },
    { value: 'D3', label: 'D3' }, { value: 'D4', label: 'D4' },
    { value: 'S1', label: 'S1' }, { value: 'S2', label: 'S2' },
    { value: 'S3', label: 'S3' }
  ];
  readonly statusKerjaOptions = [
    { value: 'AKTIF',    label: 'Aktif' },
    { value: 'NONAKTIF', label: 'Nonaktif' },
    { value: 'CUTI',     label: 'Cuti' },
    { value: 'KONTRAK',  label: 'Kontrak' },
    { value: 'PROBASI',  label: 'Probasi' },
    { value: 'PENSIUN',  label: 'Pensiun' },
    { value: 'RESIGN',   label: 'Resign' }
  ];

  form = this.fb.group({
    // ── Data Pribadi ──────────────────────────────────────
    namaLengkap:      ['', [Validators.required, Validators.maxLength(100)]],
    tempatLahir:      ['', Validators.maxLength(100)],
    tanggalLahir:     [''],
    jenisKelamin:     ['LAKI_LAKI', Validators.required],
    golonganDarah:    [''],
    statusPerkawinan: [''],
    agama:            [''],
    // ── Identitas ─────────────────────────────────────────
    jenisIdentitas:   [''],
    nomorIdentitas:   ['', Validators.maxLength(50)],
    // ── Alamat ────────────────────────────────────────────
    alamatKtp:        [''],
    provinsiId:       [null as number | null],
    kabupatenKotaId:  [null as number | null],
    alamatDomisili:   [''],
    // ── Kontak ────────────────────────────────────────────
    noTelepon:        ['', Validators.maxLength(20)],
    zonaWaktu:        ['WIB', Validators.required],
    catatan:          [''],
    // ── Pendidikan ────────────────────────────────────────
    jenjangPendidikan: [''],
    jurusan:           ['', Validators.maxLength(100)],
    namaInstitusi:     ['', Validators.maxLength(150)],
    tahunLulus:        [null as number | null],
    // ── Kepegawaian ───────────────────────────────────────
    nip:               ['', [Validators.required, Validators.maxLength(20)]],
    jabatanId:         [null as number | null],
    divisiId:          [null as number | null],
    statusKerja:       ['AKTIF', Validators.required],
    tglMulaiBekerja:   [''],
    tglMulaiDapatCuti: [''],
    sisaCuti:          [0],
    tglCutiBeakhir:    [''],
    // ── Akun ──────────────────────────────────────────────
    email:               ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    password:            ['', Validators.minLength(6)],
    konfirmasiPassword:  ['', Validators.minLength(6)]
  }, { validators: passwordMatchValidator });

  ngOnInit(): void {
    this.jabatanSvc.findAll().subscribe(list => this.jabatanList.set(list));
    this.divisiSvc.findAll().subscribe(list => this.divisiList.set(list));
    this.wilayahSvc.findAllProvinsi().subscribe(list => this.provinsiList.set(list));

    // Cascade: saat provinsiId berubah, reload kabupaten/kota
    this.form.get('provinsiId')!.valueChanges.subscribe(provinsiId => {
      this.kabupatenKotaList.set([]);
      this.form.patchValue({ kabupatenKotaId: null }, { emitEvent: false });
      if (provinsiId) {
        this.wilayahSvc.findKabupatenKota(+provinsiId).subscribe(list =>
          this.kabupatenKotaList.set(list)
        );
      }
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId.set(+id);
      this.loading.set(true);
      this.svc.findById(+id).subscribe({
        next: k => {
          // Jika ada provinsiId, load kabupaten/kota terlebih dahulu sebelum patch
          if (k.provinsiId) {
            this.wilayahSvc.findKabupatenKota(k.provinsiId).subscribe(list => {
              this.kabupatenKotaList.set(list);
              // Patch setelah list tersedia agar selected value terbaca
              this.form.patchValue({ kabupatenKotaId: k.kabupatenKotaId ?? null }, { emitEvent: false });
            });
          }
          this.form.patchValue({
            namaLengkap: k.namaLengkap,
            tempatLahir: k.tempatLahir ?? '',
            tanggalLahir: k.tanggalLahir ?? '',
            jenisKelamin: k.jenisKelamin,
            golonganDarah: k.golonganDarah ?? '',
            statusPerkawinan: k.statusPerkawinan ?? '',
            agama: k.agama ?? '',
            jenisIdentitas: k.jenisIdentitas ?? '',
            nomorIdentitas: k.nomorIdentitas ?? '',
            alamatKtp: k.alamatKtp ?? '',
            provinsiId: k.provinsiId ?? null,
            kabupatenKotaId: k.kabupatenKotaId ?? null,
            alamatDomisili: k.alamatDomisili ?? '',
            noTelepon: k.noTelepon ?? '',
            zonaWaktu: k.zonaWaktu,
            catatan: k.catatan ?? '',
            jenjangPendidikan: k.jenjangPendidikan ?? '',
            jurusan: k.jurusan ?? '',
            namaInstitusi: k.namaInstitusi ?? '',
            tahunLulus: k.tahunLulus ?? null,
            nip: k.nip,
            jabatanId: k.jabatanId ?? null,
            divisiId: k.divisiId ?? null,
            statusKerja: k.statusKerja,
            tglMulaiBekerja: k.tglMulaiBekerja ?? '',
            tglMulaiDapatCuti: k.tglMulaiDapatCuti ?? '',
            sisaCuti: k.sisaCuti ?? 0,
            tglCutiBeakhir: k.tglCutiBeakhir ?? '',
            email: k.email ?? ''
          }, { emitEvent: false });
          if (k.fotoProfil) {
            const url = k.fotoProfil.startsWith('http')
              ? k.fotoProfil
              : `${environment.baseUrl}/${k.fotoProfil}`;
            this.fotoPreview.set(url);
          }
          this.loading.set(false);
        },
        error: () => { this.error.set('Data karyawan tidak ditemukan.'); this.loading.set(false); }
      });
    }
  }

  /** Masih tersedia jika dipanggil manual, tapi sekarang cascade diurus via valueChanges */
  onProvinsiChange(provinsiId: number | string | null): void {
    // Ditangani valueChanges di ngOnInit
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.fotoFile.set(file);
    const reader = new FileReader();
    reader.onload = e => this.fotoPreview.set(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  removeFoto(): void {
    this.fotoFile.set(null);
    this.fotoPreview.set(null);
    this.form.patchValue({ });
  }

  setTab(tab: string): void { this.activeTab.set(tab); }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.saving.set(true);
    this.error.set('');

    const v = this.form.value;
    const req: KaryawanRequest = {
      namaLengkap:      v.namaLengkap!,
      tempatLahir:      v.tempatLahir || undefined,
      tanggalLahir:     v.tanggalLahir || undefined,
      jenisKelamin:     v.jenisKelamin as any,
      golonganDarah:    v.golonganDarah as any || undefined,
      statusPerkawinan: v.statusPerkawinan as any || undefined,
      agama:            v.agama as any || undefined,
      jenisIdentitas:   v.jenisIdentitas as any || undefined,
      nomorIdentitas:   v.nomorIdentitas || undefined,
      alamatKtp:        v.alamatKtp || undefined,
      provinsiId:       v.provinsiId ?? undefined,
      kabupatenKotaId:  v.kabupatenKotaId ?? undefined,
      alamatDomisili:   v.alamatDomisili || undefined,
      noTelepon:        v.noTelepon || undefined,
      zonaWaktu:        (v.zonaWaktu as any) ?? 'WIB',
      catatan:          v.catatan || undefined,
      jenjangPendidikan: v.jenjangPendidikan as any || undefined,
      jurusan:          v.jurusan || undefined,
      namaInstitusi:    v.namaInstitusi || undefined,
      tahunLulus:       v.tahunLulus ?? undefined,
      nip:              v.nip!,
      jabatanId:        v.jabatanId ?? undefined,
      divisiId:         v.divisiId ?? undefined,
      statusKerja:      (v.statusKerja as any) ?? 'AKTIF',
      tglMulaiBekerja:  v.tglMulaiBekerja || undefined,
      tglMulaiDapatCuti: v.tglMulaiDapatCuti || undefined,
      sisaCuti:         v.sisaCuti ?? 0,
      tglCutiBeakhir:   v.tglCutiBeakhir || undefined,
      email:            v.email!,
      password:         v.password || undefined,
      konfirmasiPassword: v.konfirmasiPassword || undefined
    };

    const foto = this.fotoFile() ?? undefined;
    const action$ = this.editId()
      ? this.svc.update(this.editId()!, req, foto)
      : this.svc.create(req, foto);

    action$.subscribe({
      next: () => this.router.navigate(['/karyawan']),
      error: err => {
        this.error.set(err?.data?.message ?? err?.message ?? 'Terjadi kesalahan.');
        this.saving.set(false);
      }
    });
  }

  get f() { return this.form.controls; }
  get isEdit() { return !!this.editId(); }
  get passwordMismatch() {
    return this.form.hasError('passwordMismatch') &&
      (this.f['konfirmasiPassword'].dirty || this.f['konfirmasiPassword'].touched);
  }
}
