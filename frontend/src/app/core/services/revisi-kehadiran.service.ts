import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RevisiKehadiran, RevisiKehadiranRequest, StatusRevisi } from '../models/revisi-kehadiran.model';

@Injectable({ providedIn: 'root' })
export class RevisiKehadiranService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/revisi-kehadiran`;

  findByStatus(
    status: StatusRevisi,
    divisiId?: number,
    dari?: string,
    sampai?: string,
    cari?: string
  ): Observable<RevisiKehadiran[]> {
    const p = new URLSearchParams({ status });
    if (divisiId) p.set('divisiId', divisiId.toString());
    if (dari)     p.set('dari', dari);
    if (sampai)   p.set('sampai', sampai);
    if (cari)     p.set('cari', cari);
    return this.http.get<{ revisi: RevisiKehadiran[] }>(`${this.url}?${p}`).pipe(
      map(d => d.revisi ?? [])
    );
  }

  buat(req: RevisiKehadiranRequest): Observable<RevisiKehadiran> {
    return this.http.post<{ revisi: RevisiKehadiran }>(this.url, req).pipe(
      map(d => d.revisi)
    );
  }

  setujui(id: number): Observable<RevisiKehadiran> {
    return this.http.patch<{ revisi: RevisiKehadiran }>(`${this.url}/${id}/setujui`, {}).pipe(
      map(d => d.revisi)
    );
  }

  tolak(id: number, catatanPenolakan?: string): Observable<RevisiKehadiran> {
    return this.http.patch<{ revisi: RevisiKehadiran }>(`${this.url}/${id}/tolak`, { catatanPenolakan }).pipe(
      map(d => d.revisi)
    );
  }

  hapus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
