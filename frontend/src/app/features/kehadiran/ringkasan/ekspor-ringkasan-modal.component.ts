import { Component, inject, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DivisiService } from '../../../core/services/divisi.service';
import { Divisi } from '../../../core/models/divisi.model';
import { environment } from '../../../../environments/environment';

export type FormatRingkasan =
  | 'LENGKAP_DETAIL_TANGGAL'
  | 'LENGKAP_TANPA_DETAIL_TANGGAL'
  | 'HANYA_DETAIL_TANGGAL';

@Component({
  selector: 'app-ekspor-ringkasan-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Backdrop -->
    <div class="modal-backdrop fade show" style="z-index:1040" (click)="tutup.emit()"></div>

    <!-- Modal -->
    <div class="modal fade show d-block" style="z-index:1050" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered" style="max-width:520px">
        <div class="modal-content border-0 shadow-lg">

          <!-- Header -->
          <div class="modal-header border-bottom py-3 px-4">
            <h6 class="modal-title fw-bold mb-0">Ekspor Excel</h6>
            <button type="button" class="btn-close" (click)="tutup.emit()"></button>
          </div>

          <!-- Body -->
          <div class="modal-body px-4 py-4">

            <!-- Error -->
            @if (error()) {
              <div class="alert alert-danger py-2 small mb-3">
                <i class="bx bx-error-circle me-1"></i>{{ error() }}
              </div>
            }

            <!-- Sukses -->
            @if (sukses()) {
              <div class="alert alert-success py-2 small mb-3">
                <i class="bx bx-check-circle me-1"></i>{{ sukses() }}
              </div>
            }

            <!-- Tanggal -->
            <div class="mb-3 row align-items-center">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">
                Tanggal <span class="text-danger">*</span>
              </label>
              <div class="col-sm-8">
                <div class="d-flex align-items-center gap-2">
                  <input type="date" class="form-control form-control-sm"
                         [(ngModel)]="dari" style="flex:1" />
                  <span class="text-muted">-</span>
                  <input type="date" class="form-control form-control-sm"
                         [(ngModel)]="sampai" style="flex:1" />
                </div>
                <div class="form-text text-muted mt-1">Rentang waktu maksimal 2 tahun.</div>
              </div>
            </div>

            <!-- Divisi -->
            <div class="mb-3 row align-items-center">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">Divisi</label>
              <div class="col-sm-8">
                <select class="form-select form-select-sm" [(ngModel)]="divisiId">
                  <option value="">--Divisi--</option>
                  @for (d of divisiList(); track d.id) {
                    <option [value]="d.id">{{ d.namaDivisi }}</option>
                  }
                </select>
              </div>
            </div>

            <!-- Email -->
            <div class="mb-3 row align-items-start">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">
                Kirimkan File ke Email <span class="text-danger">*</span>
              </label>
              <div class="col-sm-8">
                <input type="email" class="form-control form-control-sm"
                       [(ngModel)]="email"
                       placeholder="contoh@email.com" />
                <div class="form-text text-muted">Pisah email dengan koma jika lebih dari satu.</div>
              </div>
            </div>

            <!-- Format -->
            <div class="mb-3 row align-items-center">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">Format</label>
              <div class="col-sm-8">
                <select class="form-select form-select-sm" [(ngModel)]="format">
                  @for (f of formatList; track f.value) {
                    <option [value]="f.value">{{ f.label }}</option>
                  }
                </select>
              </div>
            </div>

            <!-- Info -->
            <div class="rounded p-3 mt-2"
                 style="background:linear-gradient(135deg,#6c63ff,#8b85ff);color:#fff;font-size:.82rem">
              <i class="bx bx-info-circle me-1"></i>
              Waktu yang dibutuhkan untuk menerima email hasil ekspor excel maksimal 20 menit,
              tergantung banyaknya data yang dikumpulkan.
            </div>

          </div>

          <!-- Footer -->
          <div class="modal-footer border-top px-4 py-3 d-flex gap-2">
            <button class="btn btn-primary px-4" (click)="proses()" [disabled]="loading()">
              @if (loading()) {
                <span class="spinner-border spinner-border-sm me-1"></span>Memproses...
              } @else {
                Proses
              }
            </button>
            <button class="btn btn-outline-secondary px-4" (click)="tutup.emit()">Tutup</button>
          </div>

        </div>
      </div>
    </div>
  `
})
export class EksporRingkasanModalComponent {
  private http       = inject(HttpClient);
  private divisiSvc  = inject(DivisiService);

  // ── Input/Output ──────────────────────────────────────
  defaultDari    = input<string>('');
  defaultSampai  = input<string>('');
  tutup          = output<void>();

  // ── State ─────────────────────────────────────────────
  dari    = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().substring(0, 10);
  sampai  = new Date().toISOString().substring(0, 10);
  divisiId = '';
  email    = '';
  format: FormatRingkasan = 'LENGKAP_DETAIL_TANGGAL';

  loading = signal(false);
  error   = signal('');
  sukses  = signal('');

  divisiList = signal<Divisi[]>([]);

  readonly formatList: { value: FormatRingkasan; label: string }[] = [
    { value: 'LENGKAP_DETAIL_TANGGAL',       label: 'Lengkap dengan detail tanggal' },
    { value: 'LENGKAP_TANPA_DETAIL_TANGGAL', label: 'Lengkap tanpa detail tanggal' },
    { value: 'HANYA_DETAIL_TANGGAL',         label: 'Hanya detail tanggal' },
  ];

  constructor() {
    this.divisiSvc.findAll().subscribe(d => this.divisiList.set(d));
  }

  ngOnInit(): void {
    if (this.defaultDari())   this.dari   = this.defaultDari();
    if (this.defaultSampai()) this.sampai = this.defaultSampai();
  }

  proses(): void {
    this.error.set('');
    this.sukses.set('');

    if (!this.dari || !this.sampai) {
      this.error.set('Tanggal dari dan sampai wajib diisi.'); return;
    }
    if (!this.email.trim()) {
      this.error.set('Email tujuan wajib diisi.'); return;
    }

    // Validasi rentang max 2 tahun
    const diffMs   = new Date(this.sampai).getTime() - new Date(this.dari).getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    if (diffDays > 730) {
      this.error.set('Rentang waktu maksimal 2 tahun.'); return;
    }

    this.loading.set(true);

    const params = new URLSearchParams({
      dari:    this.dari,
      sampai:  this.sampai,
      email:   this.email.trim(),
      format:  this.format,
    });
    if (this.divisiId) params.set('divisiId', this.divisiId);

    this.http.post(
      `${environment.apiUrl}/absensi/admin/ekspor/ringkasan?${params.toString()}`, {}
    ).subscribe({
      next: () => {
        this.loading.set(false);
        this.sukses.set('Permintaan ekspor berhasil dikirim. File akan dikirim ke email Anda dalam beberapa menit.');
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? 'Gagal memproses ekspor. Silakan coba lagi.');
      }
    });
  }
}
