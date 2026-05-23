import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LokasiKehadiran, LokasiKehadiranRequest,
} from '../models/lokasi-kehadiran.model';

export interface PengaturanLokasiKehadiran {
  spvDapatMenambahLokasi:    boolean;
  spvDapatMemperbaruiLokasi: boolean;
  kuotaLokasi?:              number;
}

export interface LokasiKehadiranRiwayat {
  id:        number;
  tipe:      'DIBUAT' | 'DIUBAH' | 'DIHAPUS' | string;
  changedBy?: string;
  changedAt: string;
  aktivitas: { label: string; nilai: string }[];
}

@Injectable({ providedIn: 'root' })
export class LokasiKehadiranService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/lokasi-kehadiran`;

  findAll(): Observable<LokasiKehadiran[]> {
    return this.http.get<{ lokasiKehadiran: LokasiKehadiran[] }>(this.url).pipe(
      map(d => d?.lokasiKehadiran ?? (d as unknown as LokasiKehadiran[]) ?? [])
    );
  }

  findById(id: number): Observable<LokasiKehadiran> {
    return this.http.get<{ lokasiKehadiran: LokasiKehadiran }>(`${this.url}/${id}`).pipe(
      map(d => d?.lokasiKehadiran ?? (d as unknown as LokasiKehadiran))
    );
  }

  create(req: LokasiKehadiranRequest): Observable<LokasiKehadiran> {
    return this.http.post<{ lokasiKehadiran: LokasiKehadiran }>(this.url, req).pipe(
      map(d => d?.lokasiKehadiran ?? (d as unknown as LokasiKehadiran))
    );
  }

  update(id: number, req: LokasiKehadiranRequest): Observable<LokasiKehadiran> {
    return this.http.put<{ lokasiKehadiran: LokasiKehadiran }>(`${this.url}/${id}`, req).pipe(
      map(d => d?.lokasiKehadiran ?? (d as unknown as LokasiKehadiran))
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  // ── Pengaturan ──
  getPengaturan(): Observable<PengaturanLokasiKehadiran> {
    return this.http.get<{ pengaturan: PengaturanLokasiKehadiran }>(`${this.url}/pengaturan`).pipe(
      map(d => d?.pengaturan ?? (d as unknown as PengaturanLokasiKehadiran))
    );
  }

  updatePengaturan(req: PengaturanLokasiKehadiran): Observable<PengaturanLokasiKehadiran> {
    return this.http.put<{ pengaturan: PengaturanLokasiKehadiran }>(`${this.url}/pengaturan`, req).pipe(
      map(d => d?.pengaturan ?? (d as unknown as PengaturanLokasiKehadiran))
    );
  }

  pesanKuota(kuota: number): Observable<PengaturanLokasiKehadiran> {
    return this.http.post<{ pengaturan: PengaturanLokasiKehadiran }>(
      `${this.url}/pesan-kuota`, { kuota }
    ).pipe(map(d => d?.pengaturan ?? (d as unknown as PengaturanLokasiKehadiran)));
  }

  findRiwayat(id: number): Observable<LokasiKehadiranRiwayat[]> {
    return this.http.get<{ riwayat: LokasiKehadiranRiwayat[] }>(
      `${this.url}/${id}/riwayat`
    ).pipe(map(d => d?.riwayat ?? (d as unknown as LokasiKehadiranRiwayat[]) ?? []));
  }
}
