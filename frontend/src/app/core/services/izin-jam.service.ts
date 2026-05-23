import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IzinJam, IzinJamRequest, IzinJamRiwayat, StatusIzin } from '../models/izin-jam.model';

@Injectable({ providedIn: 'root' })
export class IzinJamService {
  private http = inject(HttpClient);
  private url  = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/izin-jam`;

  getAll(karyawanId: number, opts?: { status?: StatusIzin; from?: string; to?: string }): Observable<IzinJam[]> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.from)   params = params.set('from', opts.from);
    if (opts?.to)     params = params.set('to', opts.to);
    return this.http.get<{ izinJam: IzinJam[] }>(this.url(karyawanId), { params })
      .pipe(map(d => d.izinJam ?? []));
  }

  create(karyawanId: number, req: IzinJamRequest): Observable<IzinJam> {
    return this.http.post<{ izinJam: IzinJam }>(this.url(karyawanId), req)
      .pipe(map(d => d.izinJam));
  }

  update(karyawanId: number, id: number, req: IzinJamRequest): Observable<IzinJam> {
    return this.http.put<{ izinJam: IzinJam }>(`${this.url(karyawanId)}/${id}`, req)
      .pipe(map(d => d.izinJam));
  }

  updateStatus(karyawanId: number, id: number, status: StatusIzin, catatanPenolakan?: string): Observable<IzinJam> {
    return this.http.patch<{ izinJam: IzinJam }>(
      `${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }
    ).pipe(map(d => d.izinJam));
  }

  delete(karyawanId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url(karyawanId)}/${id}`);
  }

  getRiwayat(karyawanId: number, izinJamId: number): Observable<IzinJamRiwayat[]> {
    return this.http.get<{ riwayat: IzinJamRiwayat[] }>(
      `${this.url(karyawanId)}/${izinJamId}/riwayat`
    ).pipe(map(d => d.riwayat ?? []));
  }

  exportExcel(karyawanId: number, opts?: { status?: StatusIzin; from?: string; to?: string }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.from)   params = params.set('from', opts.from);
    if (opts?.to)     params = params.set('to', opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`,
      { params, responseType: 'blob' }
    );
  }

  // ── Admin / Pemilik overview ────────────────────────────────
  getAllAdmin(opts?: {
    status?: StatusIzin; from?: string; to?: string;
    divisiId?: number; cari?: string;
    dapatMengganti?: boolean; kenaPotong?: boolean; kenaDenda?: boolean;
  }): Observable<{ izinJam: IzinJam[]; totalMenunggu: number }> {
    let params = new HttpParams();
    if (opts?.status)            params = params.set('status', opts.status);
    if (opts?.from)              params = params.set('from',   opts.from);
    if (opts?.to)                params = params.set('to',     opts.to);
    if (opts?.divisiId != null)  params = params.set('divisiId', String(opts.divisiId));
    if (opts?.cari)              params = params.set('cari',   opts.cari);
    if (opts?.dapatMengganti != null) params = params.set('dapatMengganti', String(opts.dapatMengganti));
    if (opts?.kenaPotong != null)     params = params.set('kenaPotong',     String(opts.kenaPotong));
    if (opts?.kenaDenda != null)      params = params.set('kenaDenda',      String(opts.kenaDenda));
    return this.http.get<any>(`${environment.apiUrl}/izin-jam`, { params })
      .pipe(map(d => ({ izinJam: d?.izinJam ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }

  updateStatusAdmin(id: number, status: StatusIzin, catatanPenolakan?: string): Observable<IzinJam> {
    return this.http.patch<any>(
      `${environment.apiUrl}/izin-jam/${id}/status`, { status, catatanPenolakan }
    ).pipe(map(d => d?.izinJam));
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/izin-jam/${id}`);
  }

  exportExcelAdmin(opts?: {
    status?: StatusIzin; from?: string; to?: string;
    divisiId?: number; cari?: string;
    dapatMengganti?: boolean; kenaPotong?: boolean; kenaDenda?: boolean;
  }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status)            params = params.set('status', opts.status);
    if (opts?.from)              params = params.set('from',   opts.from);
    if (opts?.to)                params = params.set('to',     opts.to);
    if (opts?.divisiId != null)  params = params.set('divisiId', String(opts.divisiId));
    if (opts?.cari)              params = params.set('cari',   opts.cari);
    if (opts?.dapatMengganti != null) params = params.set('dapatMengganti', String(opts.dapatMengganti));
    if (opts?.kenaPotong != null)     params = params.set('kenaPotong',     String(opts.kenaPotong));
    if (opts?.kenaDenda != null)      params = params.set('kenaDenda',      String(opts.kenaDenda));
    return this.http.get(`${environment.apiUrl}/izin-jam/ekspor-excel`,
      { params, responseType: 'blob' });
  }
}
