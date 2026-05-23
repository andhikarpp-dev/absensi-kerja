import { Injectable } from '@angular/core';

const TOKEN_KEY  = 'absensi_token';
const USER_KEY   = 'absensi_user';

@Injectable({ providedIn: 'root' })
export class StorageService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  setUser(user: object): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser<T>(): T | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as T) : null;
  }

  removeUser(): void {
    localStorage.removeItem(USER_KEY);
  }

  clear(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}

