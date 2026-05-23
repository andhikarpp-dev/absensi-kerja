import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="ve-bg">
      <div class="ve-card" [class.ve-card--err]="!isSuccess()">
        <!-- Icon -->
        <div class="ve-icon" [class.ve-icon--err]="!isSuccess()">
          @if (isSuccess()) {
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          }
        </div>

        <!-- Title -->
        <h1 class="ve-title">
          {{ isSuccess() ? 'Verifikasi Berhasil! 🎉' : 'Verifikasi Gagal' }}
        </h1>

        <!-- Message -->
        <p class="ve-msg">
          @if (isSuccess()) {
            Email Anda telah berhasil diverifikasi.<br/>
            Akun Anda kini <strong>aktif</strong> dan siap digunakan untuk login.
          } @else {
            {{ errorMsg() }}<br/>
            Silakan hubungi administrator perusahaan Anda jika masalah berlanjut.
          }
        </p>

        <!-- Info box -->
        @if (isSuccess()) {
          <div class="ve-info">
            <div class="ve-info__label">Langkah selanjutnya</div>
            <ol class="ve-info__list">
              <li>Klik tombol <strong>"Masuk ke Akun"</strong> di bawah</li>
              <li>Gunakan <strong>email</strong> dan <strong>kata sandi</strong> Anda untuk login</li>
              <li>Mulai menggunakan AbsensiKerja</li>
            </ol>
          </div>
        }

        <!-- Actions -->
        <div class="ve-actions">
          <a class="ve-btn ve-btn--primary" routerLink="/auth/login">
            <span class="material-icons">login</span>
            Masuk ke Akun
          </a>
          <a class="ve-btn ve-btn--ghost" routerLink="/">
            Kembali ke Beranda
          </a>
        </div>

        <p class="ve-footer">© 2026 AbsensiKerja · Sistem Absensi Digital</p>
      </div>
    </div>
  `,
  styles: [`
    :host { display:block; }
    .ve-bg {
      min-height: 100vh;
      background: linear-gradient(135deg, #f0f9ff 0%, #ede9fe 50%, #f0fdf4 100%);
      display: flex; align-items: center; justify-content: center;
      padding: 32px 16px; font-family: 'Segoe UI', Arial, sans-serif;
    }
    .ve-card {
      background: #fff; border-radius: 20px; padding: 48px 40px;
      max-width: 520px; width: 100%;
      box-shadow: 0 20px 60px rgba(79, 70, 229, .15);
      border: 1px solid #e0e7ff; text-align: center;
      animation: ve-fade .5s ease-out;
    }
    .ve-card--err { border-color: #fecaca; box-shadow: 0 20px 60px rgba(239, 68, 68, .15); }
    @keyframes ve-fade {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .ve-icon {
      width: 96px; height: 96px; margin: 0 auto 24px; border-radius: 50%;
      background: linear-gradient(135deg, #22c55e, #10b981); color: #fff;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 24px rgba(34, 197, 94, .35);
      animation: ve-bounce .6s cubic-bezier(.34, 1.56, .64, 1);
    }
    .ve-icon--err {
      background: linear-gradient(135deg, #ef4444, #f97316);
      box-shadow: 0 8px 24px rgba(239, 68, 68, .35);
    }
    @keyframes ve-bounce {
      0%   { transform: scale(0); }
      60%  { transform: scale(1.15); }
      100% { transform: scale(1); }
    }
    .ve-title {
      font-size: 28px; font-weight: 700; color: #1e293b;
      margin: 0 0 12px; letter-spacing: -.5px;
    }
    .ve-msg {
      color: #475569; font-size: 15px; line-height: 1.7;
      margin: 0 0 28px;
    }
    .ve-info {
      background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px;
      padding: 20px 24px; margin-bottom: 28px; text-align: left;
    }
    .ve-info__label {
      font-size: 12px; font-weight: 700; color: #166534;
      text-transform: uppercase; letter-spacing: .8px; margin-bottom: 10px;
    }
    .ve-info__list {
      margin: 0; padding-left: 20px; color: #334155;
      font-size: 14px; line-height: 2;
    }
    .ve-info__list li::marker { color: #22c55e; font-weight: 700; }
    .ve-actions {
      display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;
    }
    .ve-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      padding: 14px 28px; border-radius: 10px; text-decoration: none;
      font-size: 15px; font-weight: 600; transition: all .2s;
    }
    .ve-btn .material-icons { font-size: 20px; }
    .ve-btn--primary {
      background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff;
      box-shadow: 0 4px 14px rgba(79, 70, 229, .35);
    }
    .ve-btn--primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(79, 70, 229, .45); }
    .ve-btn--ghost {
      background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;
    }
    .ve-btn--ghost:hover { background: #e2e8f0; }
    .ve-footer {
      font-size: 12px; color: #94a3b8; margin: 16px 0 0;
      padding-top: 16px; border-top: 1px solid #f1f5f9;
    }
  `]
})
export class VerifyEmailComponent {
  private route = inject(ActivatedRoute);

  isSuccess = signal(true);
  errorMsg  = signal('Token verifikasi tidak valid atau sudah digunakan.');

  constructor() {
    const qp = this.route.snapshot.queryParamMap;
    const status = qp.get('status');
    if (status === 'failed') {
      this.isSuccess.set(false);
      const msg = qp.get('message');
      if (msg) this.errorMsg.set(msg);
    } else {
      this.isSuccess.set(true);
    }
  }
}
