import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Divisi, DivisiRequest, DivisiRiwayat } from '../models/divisi.model';

export interface ImporSupervisorHasil {
  berhasil: number;
  gagal: number;
  errors: { baris: number; namaDivisi: string; namaKaryawan: string; pesan: string }[];
}

@Injectable({ providedIn: 'root' })
export class DivisiService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/divisi`;

  findAll(): Observable<Divisi[]> {
    return this.http.get<{ divisi: Divisi[] }>(this.url).pipe(
      map(d => (Array.isArray(d) ? d : d?.divisi) ?? []),
      catchError(err => { console.error('[DivisiService] findAll:', err); return of([]); })
    );
  }

  findById(id: number): Observable<Divisi> {
    return this.http.get<{ divisi: Divisi }>(`${this.url}/${id}`).pipe(
      map(d => d?.divisi ?? d as unknown as Divisi)
    );
  }

  create(req: DivisiRequest): Observable<Divisi> {
    return this.http.post<{ divisi: Divisi }>(this.url, req).pipe(
      map(d => d?.divisi ?? d as unknown as Divisi)
    );
  }

  update(id: number, req: DivisiRequest): Observable<Divisi> {
    return this.http.put<{ divisi: Divisi }>(`${this.url}/${id}`, req).pipe(
      map(d => d?.divisi ?? d as unknown as Divisi)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  findRiwayat(id: number): Observable<DivisiRiwayat[]> {
    return this.http.get<{ riwayat: DivisiRiwayat[] }>(`${this.url}/${id}/riwayat`).pipe(
      map(d => d?.riwayat ?? [])
    );
  }

  imporSupervisor(file: File): Observable<ImporSupervisorHasil> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ hasil: ImporSupervisorHasil }>(`${this.url}/impor-supervisor`, form).pipe(
      map(d => (d as any)?.hasil ?? d as unknown as ImporSupervisorHasil)
    );
  }

  downloadTemplateSupervisor(): void {
    // Bypass jsend interceptor — butuh blob langsung
    this.http.get(`${this.url}/template-supervisor`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'format-impor-supervisor-divisi.xlsx';
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }

  eksporDivisi(): void {
    this.http.get(`${this.url}/ekspor`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'data-divisi.xlsx';
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
}
