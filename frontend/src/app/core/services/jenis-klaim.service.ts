import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { JenisKlaimKonfigurasi, JenisKlaimKonfigurasiRequest } from '../models/klaim.model';

@Injectable({ providedIn: 'root' })
export class JenisKlaimService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/jenis-klaim`;

  getAll(): Observable<JenisKlaimKonfigurasi[]> {
    return this.http.get<any>(this.url).pipe(map(d => d?.jenisKlaim ?? []));
  }

  getById(id: number): Observable<JenisKlaimKonfigurasi> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(map(d => d.jenisKlaim));
  }

  create(req: JenisKlaimKonfigurasiRequest): Observable<JenisKlaimKonfigurasi> {
    return this.http.post<any>(this.url, req).pipe(map(d => d.jenisKlaim));
  }

  update(id: number, req: JenisKlaimKonfigurasiRequest): Observable<JenisKlaimKonfigurasi> {
    return this.http.put<any>(`${this.url}/${id}`, req).pipe(map(d => d.jenisKlaim));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
