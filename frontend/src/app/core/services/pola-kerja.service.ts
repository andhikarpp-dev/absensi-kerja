import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PolaKerja, PolaKerjaRequest, KategoriPolaKerja } from '../models/pola-kerja.model';

@Injectable({ providedIn: 'root' })
export class PolaKerjaService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/pola-kerja`;

  findAll(kategori?: KategoriPolaKerja): Observable<PolaKerja[]> {
    const qs = kategori ? `?kategori=${kategori}` : '';
    return this.http.get<{ polaKerja: PolaKerja[] }>(`${this.url}/all${qs}`).pipe(
      map(d => (Array.isArray(d) ? d : d?.polaKerja) ?? []),
      catchError(() => of([]))
    );
  }

  findByDivisi(divisiId: number): Observable<PolaKerja[]> {
    return this.http.get<{ polaKerja: PolaKerja[] }>(`${this.url}?divisiId=${divisiId}`).pipe(
      map(d => (Array.isArray(d) ? d : d?.polaKerja) ?? []),
      catchError(() => of([]))
    );
  }

  create(req: PolaKerjaRequest): Observable<PolaKerja> {
    return this.http.post<{ polaKerja: PolaKerja }>(this.url, req).pipe(
      map(d => d?.polaKerja ?? d as unknown as PolaKerja)
    );
  }

  update(id: number, req: PolaKerjaRequest): Observable<PolaKerja> {
    return this.http.put<{ polaKerja: PolaKerja }>(`${this.url}/${id}`, req).pipe(
      map(d => d?.polaKerja ?? d as unknown as PolaKerja)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  assignDivisi(id: number, divisiIds: number[]): Observable<PolaKerja> {
    return this.http.post<{ polaKerja: PolaKerja }>(`${this.url}/${id}/assign-divisi`, divisiIds).pipe(
      map(d => d?.polaKerja ?? d as unknown as PolaKerja)
    );
  }

  unassignDivisi(polaId: number, divisiId: number): Observable<PolaKerja> {
    return this.http.delete<{ polaKerja: PolaKerja }>(`${this.url}/${polaId}/unassign-divisi/${divisiId}`).pipe(
      map(d => d?.polaKerja ?? d as unknown as PolaKerja)
    );
  }

  /** Update satu hari jadwal (PUT /api/pola-kerja/hari/{hariId}) */
  updateHari(hariId: number, req: {
    jamMasuk?: string;
    jamKeluar?: string;
    mulaiIstirahat?: string;
    selesaiIstirahat?: string;
    maksMenitIstirahat?: number;
    toleransiKeterlambatan?: number;
  }): Observable<any> {
    return this.http.put<any>(`${this.url}/hari/${hariId}`, req);
  }

  /** Hapus/reset jadwal satu hari (DELETE /api/pola-kerja/hari/{hariId}) */
  hapusHari(hariId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/hari/${hariId}`);
  }
}
