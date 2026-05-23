import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Jabatan, JabatanRequest } from '../models/jabatan.model';

@Injectable({ providedIn: 'root' })
export class JabatanService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/jabatan`;

  findAll(): Observable<Jabatan[]> {
    return this.http.get<{ jabatan: Jabatan[] }>(this.url).pipe(
      map(d => (Array.isArray(d) ? d : d?.jabatan) ?? [])
    );
  }

  findById(id: number): Observable<Jabatan> {
    return this.http.get<{ jabatan: Jabatan }>(`${this.url}/${id}`).pipe(
      map(d => d?.jabatan ?? d as unknown as Jabatan)
    );
  }

  create(req: JabatanRequest): Observable<Jabatan> {
    return this.http.post<{ jabatan: Jabatan }>(this.url, req).pipe(
      map(d => d?.jabatan ?? d as unknown as Jabatan)
    );
  }

  update(id: number, req: JabatanRequest): Observable<Jabatan> {
    return this.http.put<{ jabatan: Jabatan }>(`${this.url}/${id}`, req).pipe(
      map(d => d?.jabatan ?? d as unknown as Jabatan)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
