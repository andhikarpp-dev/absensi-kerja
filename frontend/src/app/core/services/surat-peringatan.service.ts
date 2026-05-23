import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  StatusPersetujuanSP,
  StatusSuratPeringatan,
  SuratPeringatan,
  SuratPeringatanRequest,
} from '../models/surat-peringatan.model';

@Injectable({ providedIn: 'root' })
export class SuratPeringatanService {
  private http = inject(HttpClient);
  private url = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/surat-peringatan`;

  getAll(karyawanId: number, opts?: {
    status?: StatusSuratPeringatan;
    statusPersetujuan?: StatusPersetujuanSP;
    from?: string;
    to?: string;
    filter?: string;
  }): Observable<SuratPeringatan[]> {
    let params = new HttpParams();
    if (opts?.status)            params = params.set('status', opts.status);
    if (opts?.statusPersetujuan) params = params.set('statusPersetujuan', opts.statusPersetujuan);
    if (opts?.from)              params = params.set('from', opts.from);
    if (opts?.to)                params = params.set('to', opts.to);
    if (opts?.filter)            params = params.set('filter', opts.filter);
    return this.http.get<any>(this.url(karyawanId), { params })
      .pipe(map(d => d?.suratPeringatan ?? []));
  }

  create(karyawanId: number, req: SuratPeringatanRequest, dokumen?: File | null)
    : Observable<SuratPeringatan> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (dokumen) fd.append('dokumen', dokumen);
    return this.http.post<any>(this.url(karyawanId), fd)
      .pipe(map(d => d.suratPeringatan));
  }

  update(karyawanId: number, id: number, req: SuratPeringatanRequest, dokumen?: File | null)
    : Observable<SuratPeringatan> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (dokumen) fd.append('dokumen', dokumen);
    return this.http.put<any>(`${this.url(karyawanId)}/${id}`, fd)
      .pipe(map(d => d.suratPeringatan));
  }

  updatePersetujuan(karyawanId: number, id: number,
                    status: StatusPersetujuanSP, catatan?: string)
    : Observable<SuratPeringatan> {
    return this.http.patch<any>(
      `${this.url(karyawanId)}/${id}/persetujuan`,
      { status, catatan },
    ).pipe(map(d => d.suratPeringatan));
  }

  cabut(karyawanId: number, id: number): Observable<SuratPeringatan> {
    return this.http.patch<any>(`${this.url(karyawanId)}/${id}/cabut`, {})
      .pipe(map(d => d.suratPeringatan));
  }

  delete(karyawanId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url(karyawanId)}/${id}`);
  }

  exportExcel(karyawanId: number, opts?: {
    status?: StatusSuratPeringatan;
    statusPersetujuan?: StatusPersetujuanSP;
    from?: string; to?: string;
  }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status)            params = params.set('status', opts.status);
    if (opts?.statusPersetujuan) params = params.set('statusPersetujuan', opts.statusPersetujuan);
    if (opts?.from)              params = params.set('from', opts.from);
    if (opts?.to)                params = params.set('to', opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`,
      { params, responseType: 'blob' });
  }
}
