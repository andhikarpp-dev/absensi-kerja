import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { User, LoginResponse } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _currentUser = signal<User | null>(
    this.storage.getUser<User>()
  );

  readonly currentUser  = this._currentUser.asReadonly();
  readonly isLoggedIn   = computed(() => !!this._currentUser());
  readonly isAdmin      = computed(() => this._currentUser()?.role === 'ADMIN');
  readonly isPemilik    = computed(() => this._currentUser()?.role === 'PEMILIK');

  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  /** Simpan token + user ke localStorage dan update signal. */
  saveSession(loginResponse: LoginResponse): void {
    this.storage.setToken(loginResponse.token);
    const user: User = {
      id: 0,
      username: loginResponse.username,
      namaLengkap: loginResponse.namaLengkap,
      email: loginResponse.email,
      role: loginResponse.role as User['role'],
      perusahaanId: loginResponse.perusahaanId ?? null,
      perusahaanNama: loginResponse.perusahaanNama ?? null,
      divisiId: loginResponse.divisiId ?? null,
      divisiNama: loginResponse.divisiNama ?? null,
      karyawanId: loginResponse.karyawanId ?? null,
    };
    this.storage.setUser(user);
    this._currentUser.set(user);
  }

  logout(): void {
    this.storage.clear();
    this._currentUser.set(null);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return this.storage.getToken();
  }
}
