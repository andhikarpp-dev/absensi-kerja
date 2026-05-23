import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PersetujuanPresensi, PersetujuanPresensiRequest } from '../models/persetujuan-presensi.model';

@Injectable({ providedIn: 'root' })
export class PersetujuanPresensiService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/persetujuan-presensi`;

  findAll(diizinkan: boolean, tanggal?: string, jenisPresensi?: string, cari?: string): Observable<PersetujuanPresensi[]> {
    const p = new URLSearchParams({ diizinkan: diizinkan.toString() });
    if (tanggal)       p.set('tanggal', tanggal);
    if (jenisPresensi) p.set('jenisPresensi', jenisPresensi);
    if (cari)          p.set('cari', cari);
    return this.http.get<{ persetujuan: PersetujuanPresensi[] }>(`${this.url}?${p}`).pipe(
      map(d => d.persetujuan ?? [])
    );
  }

  buat(req: PersetujuanPresensiRequest): Observable<PersetujuanPresensi> {
    return this.http.post<{ persetujuan: PersetujuanPresensi }>(this.url, req).pipe(
      map(d => d.persetujuan)
    );
  }

  izinkan(id: number): Observable<PersetujuanPresensi> {
    return this.http.patch<{ persetujuan: PersetujuanPresensi }>(`${this.url}/${id}/izinkan`, {}).pipe(
      map(d => d.persetujuan)
    );
  }

  izinkanTerpilih(ids: number[]): Observable<number> {
    return this.http.post<{ jumlah: number }>(`${this.url}/izinkan-terpilih`, { ids }).pipe(
      map(d => d.jumlah)
    );
  }

  izinkanSemua(tanggal?: string, jenisPresensi?: string, cari?: string): Observable<number> {
    const p = new URLSearchParams();
    if (tanggal)       p.set('tanggal', tanggal);
    if (jenisPresensi) p.set('jenisPresensi', jenisPresensi);
    if (cari)          p.set('cari', cari);
    return this.http.post<{ jumlah: number }>(`${this.url}/izinkan-semua?${p}`, {}).pipe(
      map(d => d.jumlah)
    );
  }

  hapus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
