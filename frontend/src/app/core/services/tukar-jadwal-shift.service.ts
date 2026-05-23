import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TukarJadwalShift, TukarJadwalShiftParams } from '../models/tukar-jadwal-shift.model';

@Injectable({ providedIn: 'root' })
export class TukarJadwalShiftService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/tukar-jadwal-shift`;

  getAll(params: TukarJadwalShiftParams = {}): Observable<TukarJadwalShift[]> {
    let p = new HttpParams();
    if (params.dari)     p = p.set('dari', params.dari);
    if (params.sampai)   p = p.set('sampai', params.sampai);
    if (params.divisiId) p = p.set('divisiId', params.divisiId);
    if (params.status)   p = p.set('status', params.status);
    if (params.search)   p = p.set('search', params.search);

    return this.http.get<{ data: TukarJadwalShift[] }>(this.url, { params: p }).pipe(
      map(r => (r as any)?.data ?? []),
      catchError(() => of([]))
    );
  }

  setuju(id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}/setuju`, {});
  }

  tolak(id: number, catatan?: string): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}/tolak`, { catatan });
  }

  eksporExcel(params: TukarJadwalShiftParams = {}): string {
    const p = new URLSearchParams();
    if (params.dari)     p.set('dari', params.dari);
    if (params.sampai)   p.set('sampai', params.sampai);
    if (params.divisiId) p.set('divisiId', params.divisiId);
    if (params.status)   p.set('status', params.status);
    if (params.search)   p.set('search', params.search);
    return `${this.url}/ekspor-excel?${p.toString()}`;
  }
}
