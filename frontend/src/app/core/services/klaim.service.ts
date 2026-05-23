import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Klaim, KlaimRequest, StatusKlaim, KlaimRiwayat } from '../models/klaim.model';

@Injectable({ providedIn: 'root' })
export class KlaimService {
  private http = inject(HttpClient);
  private url  = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/klaim`;
  private adminUrl = `${environment.apiUrl}/klaim`;

  getAll(karyawanId: number, status?: StatusKlaim): Observable<Klaim[]> {
    let params = new HttpParams();
    if (status) params = params.set('status', status);
    return this.http.get<any>(this.url(karyawanId), { params })
      .pipe(map(d => d?.klaim ?? []));
  }

  getById(karyawanId: number, id: number): Observable<Klaim> {
    return this.http.get<any>(`${this.url(karyawanId)}/${id}`)
      .pipe(map(d => d.klaim));
  }

  create(karyawanId: number, req: KlaimRequest, lampiran?: File): Observable<Klaim> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (lampiran) fd.append('lampiran', lampiran);
    return this.http.post<any>(this.url(karyawanId), fd)
      .pipe(map(d => d.klaim));
  }

  update(karyawanId: number, id: number, req: KlaimRequest, lampiran?: File): Observable<Klaim> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (lampiran) fd.append('lampiran', lampiran);
    return this.http.put<any>(`${this.url(karyawanId)}/${id}`, fd)
      .pipe(map(d => d.klaim));
  }

  updateStatus(karyawanId: number, id: number, status: StatusKlaim, catatanPenolakan?: string): Observable<Klaim> {
    return this.http.patch<any>(
      `${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }
    ).pipe(map(d => d.klaim));
  }

  delete(karyawanId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url(karyawanId)}/${id}`);
  }

  getRiwayat(karyawanId: number, id: number): Observable<KlaimRiwayat[]> {
    return this.http.get<any>(`${this.url(karyawanId)}/${id}/riwayat`)
      .pipe(map(d => d?.riwayat ?? []));
  }

  /** Admin: semua klaim lintas karyawan */
  getAllAdmin(opts?: {
    status?: StatusKlaim; divisiId?: number; from?: string; to?: string; cari?: string;
  }): Observable<{ klaim: Klaim[]; totalMenunggu: number }> {
    let params = new HttpParams();
    if (opts?.status)   params = params.set('status',   opts.status);
    if (opts?.divisiId) params = params.set('divisiId', String(opts.divisiId));
    if (opts?.from)     params = params.set('from',     opts.from);
    if (opts?.to)       params = params.set('to',       opts.to);
    if (opts?.cari)     params = params.set('cari',     opts.cari);
    return this.http.get<any>(this.adminUrl, { params })
      .pipe(map(d => ({ klaim: d?.klaim ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }

  updateStatusAdmin(id: number, status: StatusKlaim, catatanPenolakan?: string): Observable<Klaim> {
    return this.http.patch<any>(`${this.adminUrl}/${id}/status`, { status, catatanPenolakan })
      .pipe(map(d => d.klaim));
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.adminUrl}/${id}`);
  }
}
