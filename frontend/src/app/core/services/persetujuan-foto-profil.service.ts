import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PersetujuanFotoProfil, StatusFotoProfil } from '../models/persetujuan-foto-profil.model';

@Injectable({ providedIn: 'root' })
export class PersetujuanFotoProfilService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/persetujuan-foto-profil`;

  findAll(status: string = 'MENUNGGU', cari?: string): Observable<PersetujuanFotoProfil[]> {
    const p = new URLSearchParams({ status });
    if (cari) p.set('cari', cari);
    return this.http.get<{ persetujuan: PersetujuanFotoProfil[] }>(`${this.url}?${p}`).pipe(
      map(d => d.persetujuan ?? [])
    );
  }

  ajukan(karyawanId: number, foto: File): Observable<PersetujuanFotoProfil> {
    const fd = new FormData();
    fd.append('karyawanId', karyawanId.toString());
    fd.append('foto', foto);
    return this.http.post<{ persetujuan: PersetujuanFotoProfil }>(`${this.url}/ajukan`, fd).pipe(
      map(d => d.persetujuan)
    );
  }

  setujui(id: number): Observable<PersetujuanFotoProfil> {
    return this.http.patch<{ persetujuan: PersetujuanFotoProfil }>(`${this.url}/${id}/setujui`, {}).pipe(
      map(d => d.persetujuan)
    );
  }

  tolak(id: number, catatanPenolakan?: string): Observable<PersetujuanFotoProfil> {
    return this.http.patch<{ persetujuan: PersetujuanFotoProfil }>(`${this.url}/${id}/tolak`, { catatanPenolakan }).pipe(
      map(d => d.persetujuan)
    );
  }

  hapus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
