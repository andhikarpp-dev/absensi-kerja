import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Klien, KlienRequest, KunjunganKlien, KunjunganKlienRequest } from '../models/kunjungan-klien.model';

@Injectable({ providedIn: 'root' })
export class KunjunganKlienService {
  private http = inject(HttpClient);
  private klienUrl      = `${environment.apiUrl}/klien`;
  private kunjunganUrl  = `${environment.apiUrl}/kunjungan-klien`;

  // ── Klien ──────────────────────────────────────────────────────
  getAllKlien(): Observable<Klien[]> {
    return this.http.get<any>(this.klienUrl).pipe(map(d => d?.klien ?? []));
  }

  createKlien(req: KlienRequest): Observable<Klien> {
    return this.http.post<any>(this.klienUrl, req).pipe(map(d => d.klien));
  }

  updateKlien(id: number, req: KlienRequest): Observable<Klien> {
    return this.http.put<any>(`${this.klienUrl}/${id}`, req).pipe(map(d => d.klien));
  }

  deleteKlien(id: number): Observable<void> {
    return this.http.delete<any>(`${this.klienUrl}/${id}`);
  }

  // ── Kunjungan ──────────────────────────────────────────────────
  getAllKunjungan(params?: {
    divisiId?: number | null;
    klienId?: number | null;
    from?: string;
    to?: string;
    cari?: string;
  }): Observable<KunjunganKlien[]> {
    let p = new HttpParams();
    if (params?.divisiId) p = p.set('divisiId', params.divisiId);
    if (params?.klienId)  p = p.set('klienId',  params.klienId);
    if (params?.from)     p = p.set('from', params.from);
    if (params?.to)       p = p.set('to',   params.to);
    if (params?.cari)     p = p.set('cari', params.cari);
    return this.http.get<any>(this.kunjunganUrl, { params: p }).pipe(map(d => d?.kunjungan ?? []));
  }

  createKunjungan(req: KunjunganKlienRequest): Observable<KunjunganKlien> {
    return this.http.post<any>(this.kunjunganUrl, req).pipe(map(d => d.kunjungan));
  }

  updateKunjungan(id: number, req: KunjunganKlienRequest): Observable<KunjunganKlien> {
    return this.http.put<any>(`${this.kunjunganUrl}/${id}`, req).pipe(map(d => d.kunjungan));
  }

  deleteKunjungan(id: number): Observable<void> {
    return this.http.delete<any>(`${this.kunjunganUrl}/${id}`);
  }
}
