import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { LoginResponse, RegisterOwnerRequest } from '../../core/models/user.model';
import { environment } from '../../../environments/environment';

interface PaketOption {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  subNote: string;
  popular?: boolean;
}

@Component({
  selector: 'app-daftar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './daftar.component.html',
  styleUrl: './daftar.component.scss'
})
export class DaftarComponent {
  private fb     = inject(FormBuilder);
  private http   = inject(HttpClient);
  private auth   = inject(AuthService);
  private router = inject(Router);

  loading        = signal(false);
  errorMessage   = signal('');
  selectedPaket  = signal<string>('pro');

  readonly paketOptions: PaketOption[] = [
    {
      id: 'master',
      name: 'Master',
      price: 'Rp 19.175',
      priceNote: '/karyawan',
      subNote: 'Coba Gratis 14 Hari'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'Rp 15.275',
      priceNote: '/karyawan',
      subNote: 'Coba Gratis 14 Hari',
      popular: true
    },
    {
      id: 'basic',
      name: 'Basic',
      price: 'Rp 7.800',
      priceNote: '/karyawan',
      subNote: 'Coba Gratis 14 Hari'
    },
    {
      id: 'gratis',
      name: 'Gratis',
      price: 'Rp 0',
      priceNote: '',
      subNote: 'Maks. 2 karyawan • Selamanya'
    }
  ];

  readonly jabatanOptions = ['Pemilik', 'Owner', 'CEO', 'Direktur', 'Manajer HR', 'Supervisor', 'Lainnya'];
  readonly jumlahOptions  = ['2-5', '6-10', '11-20', '21-50', '51-100', '> 100'];

  form = this.fb.group({
    namaLengkap    : ['', [Validators.required, Validators.maxLength(100)]],
    namaPerusahaan : ['', [Validators.required, Validators.maxLength(150)]],
    jabatan        : ['Pemilik', [Validators.required]],
    jumlahKaryawan : ['2-5', [Validators.required]],
    whatsapp       : ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{8,20}$/)]],
    email          : ['', [Validators.required, Validators.email]],
    fiturKebutuhan : [''],
    password       : ['', [Validators.required, Validators.minLength(6)]]
  });

  get f() { return this.form.controls; }

  selectPaket(id: string): void {
    this.selectedPaket.set(id);
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.loading.set(true);
    this.errorMessage.set('');

    const body: RegisterOwnerRequest = {
      namaLengkap    : this.form.value.namaLengkap!,
      namaPerusahaan : this.form.value.namaPerusahaan!,
      jabatan        : this.form.value.jabatan!,
      email          : this.form.value.email!,
      whatsapp       : this.form.value.whatsapp!,
      zonaWaktu      : 'WIB',
      fiturKebutuhan : this.form.value.fiturKebutuhan ?? '',
      password       : this.form.value.password!,
      namaDivisi     : this.form.value.namaPerusahaan!
    };

    this.http.post<{ user: LoginResponse }>(
      `${environment.baseUrl}/auth/register/owner`, body
    ).subscribe({
      next: (res) => {
        this.auth.saveSession(res.user);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        const msg = err?.error?.message
          ?? err?.message
          ?? 'Registrasi gagal. Silakan coba lagi.';
        this.errorMessage.set(msg);
        this.loading.set(false);
      }
    });
  }
}
