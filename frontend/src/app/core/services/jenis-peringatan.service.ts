import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { JenisPeringatan } from '../models/surat-peringatan.model';

export interface JenisPeringatanRequest {
  kode: string;
  nama: string;
  deskripsi?: string;
  aktif?: boolean;
}

@Injectable({ providedIn: 'root' })
export class JenisPeringatanService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/jenis-peringatan`;

  getAll(aktifSaja = false): Observable<JenisPeringatan[]> {
    let params = new HttpParams();
    if (aktifSaja) params = params.set('aktifSaja', 'true');
    return this.http.get<any>(this.url, { params })
      .pipe(map(d => d?.jenisPeringatan ?? []));
  }

  create(req: JenisPeringatanRequest): Observable<JenisPeringatan> {
    return this.http.post<any>(this.url, req).pipe(map(d => d.jenisPeringatan));
  }

  update(id: number, req: JenisPeringatanRequest): Observable<JenisPeringatan> {
    return this.http.put<any>(`${this.url}/${id}`, req).pipe(map(d => d.jenisPeringatan));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
