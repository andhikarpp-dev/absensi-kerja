import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { LoginResponse } from '../../../core/models/user.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb     = inject(FormBuilder);
  private http   = inject(HttpClient);
  private auth   = inject(AuthService);
  private router = inject(Router);
  private route  = inject(ActivatedRoute);

  loading       = signal(false);
  errorMessage  = signal('');
  showPassword  = signal(false);
  verifiedInfo  = signal<{ ok: boolean; msg: string } | null>(null);

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor() {
    const qp = this.route.snapshot.queryParamMap;
    const verified = qp.get('verified');
    if (verified === 'success') {
      this.verifiedInfo.set({ ok: true, msg: 'Email Anda berhasil diverifikasi. Silakan login.' });
    } else if (verified === 'failed') {
      this.verifiedInfo.set({ ok: false, msg: qp.get('message') ?? 'Verifikasi email gagal.' });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.loading.set(true);
    this.errorMessage.set('');

    this.http.post<{ user: LoginResponse }>(
        `${environment.baseUrl}/auth/login`, this.form.value)
      .subscribe({
        next: (res) => {
          this.auth.saveSession(res.user);
          const role = res.user?.role;
          const target = role === 'KARYAWAN' ? '/absensi' : '/dashboard';
          this.router.navigate([target]);
        },
        error: (err) => {
          // jsendInterceptor membungkus error sebagai { type, data } atau { type, message }
          const msg = err?.data?.message
            ?? err?.message
            ?? 'Login gagal, periksa kembali kredensial Anda.';
          this.errorMessage.set(msg);
          this.loading.set(false);
        }
      });
  }

  get f() { return this.form.controls; }
}

