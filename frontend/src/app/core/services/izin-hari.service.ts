import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IzinHari, IzinHariRequest, IzinHariRiwayat, StatusIzin } from '../models/izin-hari.model';

@Injectable({ providedIn: 'root' })
export class IzinHariService {
  private http = inject(HttpClient);
  private url  = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/izin-hari`;

  getAll(karyawanId: number, opts?: {
    status?: StatusIzin; from?: string; to?: string; filter?: string;
  }): Observable<IzinHari[]> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.from)   params = params.set('from',   opts.from);
    if (opts?.to)     params = params.set('to',     opts.to);
    if (opts?.filter) params = params.set('filter', opts.filter);
    return this.http.get<any>(this.url(karyawanId), { params })
      .pipe(map(d => d?.izinHari ?? []));
  }

  create(karyawanId: number, req: IzinHariRequest, lampiran?: File): Observable<IzinHari> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (lampiran) fd.append('lampiran', lampiran);
    return this.http.post<any>(this.url(karyawanId), fd)
      .pipe(map(d => d.izinHari));
  }

  update(karyawanId: number, id: number, req: IzinHariRequest, lampiran?: File): Observable<IzinHari> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (lampiran) fd.append('lampiran', lampiran);
    return this.http.put<any>(`${this.url(karyawanId)}/${id}`, fd)
      .pipe(map(d => d.izinHari));
  }

  updateStatus(karyawanId: number, id: number, status: StatusIzin, catatanPenolakan?: string): Observable<IzinHari> {
    return this.http.patch<any>(
      `${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }
    ).pipe(map(d => d.izinHari));
  }

  delete(karyawanId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url(karyawanId)}/${id}`);
  }

  getRiwayat(karyawanId: number, izinHariId: number): Observable<IzinHariRiwayat[]> {
    return this.http.get<any>(
      `${this.url(karyawanId)}/${izinHariId}/riwayat`
    ).pipe(map(d => d?.riwayat ?? []));
  }

  exportExcel(karyawanId: number, opts?: { status?: StatusIzin; from?: string; to?: string }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.from)   params = params.set('from',   opts.from);
    if (opts?.to)     params = params.set('to',     opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`,
      { params, responseType: 'blob' });
  }

  // ── Admin / Pemilik overview ────────────────────────────────
  getAllAdmin(opts?: {
    status?: StatusIzin; from?: string; to?: string;
    filter?: string; divisiId?: number; cari?: string;
  }): Observable<{ izinHari: IzinHari[]; totalMenunggu: number }> {
    let params = new HttpParams();
    if (opts?.status)   params = params.set('status',   opts.status);
    if (opts?.from)     params = params.set('from',     opts.from);
    if (opts?.to)       params = params.set('to',       opts.to);
    if (opts?.filter)   params = params.set('filter',   opts.filter);
    if (opts?.divisiId) params = params.set('divisiId', String(opts.divisiId));
    if (opts?.cari)     params = params.set('cari',     opts.cari);
    return this.http.get<any>(`${environment.apiUrl}/izin-hari`, { params })
      .pipe(map(d => ({ izinHari: d?.izinHari ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }

  updateStatusAdmin(id: number, status: StatusIzin, catatanPenolakan?: string): Observable<IzinHari> {
    return this.http.patch<any>(
      `${environment.apiUrl}/izin-hari/${id}/status`, { status, catatanPenolakan }
    ).pipe(map(d => d?.izinHari));
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/izin-hari/${id}`);
  }

  exportExcelAdmin(opts?: { status?: StatusIzin; from?: string; to?: string }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.from)   params = params.set('from',   opts.from);
    if (opts?.to)     params = params.set('to',     opts.to);
    return this.http.get(`${environment.apiUrl}/izin-hari/ekspor-excel`,
      { params, responseType: 'blob' });
  }
}
