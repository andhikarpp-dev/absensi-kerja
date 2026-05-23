import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { LoginResponse, RegisterOwnerRequest } from '../../../core/models/user.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-company-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './company-register.component.html',
  styleUrl: './company-register.component.scss'
})
export class CompanyRegisterComponent {
  private fb     = inject(FormBuilder);
  private http   = inject(HttpClient);
  private auth   = inject(AuthService);
  private router = inject(Router);

  loading      = signal(false);
  errorMessage = signal('');
  showPassword = signal(false);

  form = this.fb.group({
    namaLengkap    : ['', [Validators.required, Validators.maxLength(100)]],
    namaPerusahaan : ['', [Validators.required, Validators.maxLength(150)]],
    jabatan        : ['Owner', [Validators.required]],
    jabatanLainnya : [''],
    email          : ['', [Validators.required, Validators.email]],
    whatsapp       : ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{8,20}$/)]],
    zonaWaktu      : ['WIB', [Validators.required]],
    fiturKebutuhan : [''],
    password       : ['', [Validators.required, Validators.minLength(6)]]
  });

  get f() { return this.form.controls; }

  constructor() {
    this.f['jabatan'].valueChanges.subscribe(val => {
      const ctrl: AbstractControl = this.f['jabatanLainnya'];
      if (val === 'Lainnya') {
        ctrl.setValidators([Validators.required]);
      } else {
        ctrl.clearValidators();
        ctrl.setValue('');
      }
      ctrl.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.loading.set(true);
    this.errorMessage.set('');

    // namaDivisi otomatis diisi sama dengan namaPerusahaan
    const jabatanFinal = this.form.value.jabatan === 'Lainnya'
      ? (this.form.value.jabatanLainnya ?? '')
      : (this.form.value.jabatan ?? '');

    const body: RegisterOwnerRequest = {
      ...(this.form.value as Omit<RegisterOwnerRequest, 'namaDivisi' | 'jabatan'>),
      jabatan: jabatanFinal,
      namaDivisi: this.form.value.namaPerusahaan!
    };

    this.http.post<{ user: LoginResponse }>(
      `${environment.baseUrl}/auth/register/owner`, body
    ).subscribe({
      next: (res) => {
        this.auth.saveSession(res.user);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        const msg = err?.data?.message
          ?? err?.message
          ?? 'Registrasi gagal. Silakan coba lagi.';
        this.errorMessage.set(msg);
        this.loading.set(false);
      }
    });
  }
}
