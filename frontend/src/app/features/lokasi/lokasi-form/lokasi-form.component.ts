import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../shared/layout/layout.component';
import { LokasiKehadiranService } from '../../../core/services/lokasi-kehadiran.service';
import { DivisiService } from '../../../core/services/divisi.service';
import { KaryawanService } from '../../../core/services/karyawan.service';
import { Divisi } from '../../../core/models/divisi.model';
import { Karyawan } from '../../../core/models/karyawan.model';
import {
  LokasiKehadiran, LokasiKehadiranRequest, TargetLokasi,
} from '../../../core/models/lokasi-kehadiran.model';

@Component({
  selector: 'app-lokasi-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LayoutComponent],
  templateUrl: './lokasi-form.component.html',
})
export class LokasiFormComponent implements OnInit {
  private svc      = inject(LokasiKehadiranService);
  private divSvc   = inject(DivisiService);
  private karSvc   = inject(KaryawanService);
  private route    = inject(ActivatedRoute);
  private router   = inject(Router);

  id      = signal<number | null>(null);
  isEdit  = computed(() => this.id() !== null);
  loading = signal(false);
  saving  = signal(false);
  error   = signal('');

  // Master data untuk dropdown penugasan
  divisiList   = signal<Divisi[]>([]);
  karyawanList = signal<Karyawan[]>([]);

  // Pencarian karyawan saat target = KARYAWAN
  karyawanKeyword = signal<string>('');

  form = signal<LokasiKehadiranRequest>({
    namaLokasi: '',
    alamat: '',
    latitude: null,
    longitude: null,
    radiusMeter: 100,
    aktif: true,
    targetTipe: 'SEMUA',
    divisiIds: [],
    karyawanIds: [],
    hanyaFingerspot: false,
    fingerspotSn: '',
    fingerspotIp: '',
    fingerspotPort: 80,
    fingerspotCatatan: '',
  });

  ngOnInit(): void {
    // Pre-load divisi & karyawan untuk dropdown
    this.divSvc.findAll().subscribe({
      next: l => this.divisiList.set(l), error: () => {},
    });
    this.karSvc.findAll().subscribe({
      next: l => this.karyawanList.set(l), error: () => {},
    });
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id.set(+idParam);
      this.loadDetail(+idParam);
    }
  }

  private loadDetail(id: number): void {
    this.loading.set(true);
    this.svc.findById(id).subscribe({
      next: k => {
        this.loading.set(false);
        this.form.set({
          namaLokasi:        k.namaLokasi ?? '',
          alamat:            k.alamat ?? '',
          latitude:          k.latitude  ?? null,
          longitude:         k.longitude ?? null,
          radiusMeter:       k.radiusMeter ?? 100,
          aktif:             k.aktif ?? true,
          targetTipe:        (k.targetTipe ?? 'SEMUA') as TargetLokasi,
          divisiIds:         (k.divisiTugas   ?? []).map(d => d.id),
          karyawanIds:       (k.karyawanTugas ?? []).map(x => x.id),
          hanyaFingerspot:   k.hanyaFingerspot ?? false,
          fingerspotSn:      k.fingerspotSn ?? '',
          fingerspotIp:      k.fingerspotIp ?? '',
          fingerspotPort:    k.fingerspotPort ?? 80,
          fingerspotCatatan: k.fingerspotCatatan ?? '',
        });
      },
      error: e => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? 'Gagal memuat detail lokasi.');
      }
    });
  }

  upd<K extends keyof LokasiKehadiranRequest>(field: K, value: LokasiKehadiranRequest[K]): void {
    this.form.set({ ...this.form(), [field]: value });
  }

  // ── Target / Penugasan ───────────────────────────────────
  setTarget(t: TargetLokasi): void {
    this.form.set({
      ...this.form(),
      targetTipe: t,
      divisiIds:   t === 'DIVISI'   ? (this.form().divisiIds   ?? []) : [],
      karyawanIds: t === 'KARYAWAN' ? (this.form().karyawanIds ?? []) : [],
    });
  }

  toggleDivisi(id: number, checked: boolean): void {
    const cur = this.form().divisiIds ?? [];
    const next = checked ? Array.from(new Set([...cur, id]))
                         : cur.filter(x => x !== id);
    this.upd('divisiIds', next);
  }

  toggleKaryawan(id: number, checked: boolean): void {
    const cur = this.form().karyawanIds ?? [];
    const next = checked ? Array.from(new Set([...cur, id]))
                         : cur.filter(x => x !== id);
    this.upd('karyawanIds', next);
  }

  isDivisiChecked(id: number): boolean {
    return (this.form().divisiIds ?? []).includes(id);
  }
  isKaryawanChecked(id: number): boolean {
    return (this.form().karyawanIds ?? []).includes(id);
  }

  /** Filter karyawan berdasar keyword pencarian. */
  filteredKaryawan(): Karyawan[] {
    const kw = this.karyawanKeyword().trim().toLowerCase();
    let list = this.karyawanList();
    if (kw) list = list.filter(k =>
      (k.namaLengkap?.toLowerCase().includes(kw)) ||
      (k.nip?.toLowerCase().includes(kw))
    );
    return list.slice(0, 100);
  }

  hapusKaryawanTerpilih(id: number): void {
    this.toggleKaryawan(id, false);
  }
  namaKaryawanById(id: number): string {
    return this.karyawanList().find(k => k.id === id)?.namaLengkap ?? `#${id}`;
  }
  namaDivisiById(id: number): string {
    return this.divisiList().find(d => d.id === id)?.namaDivisi ?? `#${id}`;
  }

  // ── Geolocation ──
  ambilLokasiSaya(): void {
    if (!('geolocation' in navigator)) {
      this.error.set('Browser tidak mendukung geolocation.'); return;
    }
    this.error.set('');
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.upd('latitude',  +pos.coords.latitude.toFixed(7));
        this.upd('longitude', +pos.coords.longitude.toFixed(7));
      },
      err => this.error.set('Gagal mengambil lokasi: ' + (err.message ?? 'unknown')),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  bukaPeta(): void {
    const f = this.form();
    if (f.latitude == null || f.longitude == null) return;
    window.open(`https://www.google.com/maps?q=${f.latitude},${f.longitude}`, '_blank');
  }

  simpan(): void {
    const f = this.form();
    if (!f.namaLokasi?.trim()) {
      this.error.set('Nama lokasi wajib diisi.'); return;
    }
    if (f.targetTipe === 'DIVISI' && (f.divisiIds?.length ?? 0) === 0) {
      this.error.set('Pilih minimal satu divisi.'); return;
    }
    if (f.targetTipe === 'KARYAWAN' && (f.karyawanIds?.length ?? 0) === 0) {
      this.error.set('Pilih minimal satu karyawan.'); return;
    }
    if (f.hanyaFingerspot && !(f.fingerspotSn?.trim() || f.fingerspotIp?.trim())) {
      this.error.set('Mode "Hanya Fingerspot" aktif. Isi minimal SN atau IP mesin Fingerspot.');
      return;
    }
    this.error.set('');
    this.saving.set(true);
    const obs = this.isEdit()
      ? this.svc.update(this.id()!, f)
      : this.svc.create(f);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate(['/lokasi']);
      },
      error: e => {
        this.saving.set(false);
        this.error.set(e?.error?.message ?? 'Gagal menyimpan lokasi.');
      }
    });
  }
}
