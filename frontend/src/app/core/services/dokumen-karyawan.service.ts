import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  DokumenKaryawan, DokumenKaryawanRequest, KuotaDokumen
} from '../models/dokumen-karyawan.model';

@Injectable({ providedIn: 'root' })
export class DokumenKaryawanService {
  private http = inject(HttpClient);
  private url  = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/dokumen`;

  getAll(karyawanId: number, search?: string): Observable<DokumenKaryawan[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    return this.http.get<any>(this.url(karyawanId), { params })
      .pipe(map(d => d?.dokumen ?? []));
  }

  getKuota(karyawanId: number): Observable<KuotaDokumen> {
    return this.http.get<any>(`${this.url(karyawanId)}/kuota`)
      .pipe(map(d => d.kuota));
  }

  create(karyawanId: number, req: DokumenKaryawanRequest, berkas: File): Observable<DokumenKaryawan> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    fd.append('berkas', berkas);
    return this.http.post<any>(this.url(karyawanId), fd).pipe(map(d => d.dokumen));
  }

  update(karyawanId: number, id: number, req: DokumenKaryawanRequest, berkas?: File): Observable<DokumenKaryawan> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (berkas) fd.append('berkas', berkas);
    return this.http.put<any>(`${this.url(karyawanId)}/${id}`, fd).pipe(map(d => d.dokumen));
  }

  delete(karyawanId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url(karyawanId)}/${id}`);
  }

  tambahKuotaBerbayar(karyawanId: number, jumlah: number): Observable<any> {
    return this.http.post<any>(`${this.url(karyawanId)}/kuota-berbayar`, { jumlah });
  }
}
