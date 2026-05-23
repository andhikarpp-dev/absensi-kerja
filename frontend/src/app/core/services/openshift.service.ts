import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { OpenshiftDTO, OpenshiftRequest, ImporOpenshiftResult } from '../models/openshift.model';

@Injectable({ providedIn: 'root' })
export class OpenshiftService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/openshift`;

  findAll(filter?: { mulai?: string; selesai?: string; divisiId?: number | null }): Observable<OpenshiftDTO[]> {
    let params = new HttpParams();
    if (filter?.mulai)    params = params.set('mulai', filter.mulai);
    if (filter?.selesai)  params = params.set('selesai', filter.selesai);
    if (filter?.divisiId) params = params.set('divisiId', String(filter.divisiId));
    return this.http.get<{ openshift: OpenshiftDTO[] }>(this.url, { params }).pipe(
      map(d => (Array.isArray(d) ? d : d?.openshift) ?? [])
    );
  }

  findById(id: number): Observable<OpenshiftDTO | null> {
    return this.http.get<{ openshift: OpenshiftDTO }>(`${this.url}/${id}`).pipe(
      map(d => d?.openshift ?? null),
      catchError(() => of(null))
    );
  }

  create(req: OpenshiftRequest): Observable<OpenshiftDTO> {
    return this.http.post<{ openshift: OpenshiftDTO }>(this.url, req).pipe(
      map(d => d?.openshift ?? (d as unknown as OpenshiftDTO))
    );
  }

  update(id: number, req: OpenshiftRequest): Observable<OpenshiftDTO> {
    return this.http.put<{ openshift: OpenshiftDTO }>(`${this.url}/${id}`, req).pipe(
      map(d => d?.openshift ?? (d as unknown as OpenshiftDTO))
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  importCsv(file: File): Observable<ImporOpenshiftResult> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<{ hasil: ImporOpenshiftResult }>(`${this.url}/import`, fd).pipe(
      map(d => d?.hasil ?? { berhasil: 0, gagal: 0, errors: [] })
    );
  }
}
