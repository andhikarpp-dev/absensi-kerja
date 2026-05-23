import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  CopyJadwalShiftRequest,
  JadwalShift,
  JadwalShiftBatchRequest,
  JadwalShiftMatrix,
  JadwalShiftRequest,
  KaryawanShift,
} from '../models/jadwal-shift.model';
import { PolaKerja } from '../models/pola-kerja.model';

@Injectable({ providedIn: 'root' })
export class JadwalShiftService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/jadwal-shift`;

  /** bulan format YYYY-MM */
  getMatrix(bulan: string, divisiId?: number | null, search?: string | null): Observable<JadwalShiftMatrix | null> {
    let params = new HttpParams();
    if (bulan)    params = params.set('bulan', bulan);
    if (divisiId) params = params.set('divisiId', String(divisiId));
    if (search)   params = params.set('search', search);
    return this.http.get<{ matrix: JadwalShiftMatrix }>(this.url, { params }).pipe(
      map(d => (d as any)?.matrix ?? (d as unknown as JadwalShiftMatrix) ?? null),
      catchError(err => { console.error('[JadwalShift] getMatrix:', err); return of(null); })
    );
  }

  getKaryawan(divisiId?: number | null, search?: string | null): Observable<KaryawanShift[]> {
    let params = new HttpParams();
    if (divisiId) params = params.set('divisiId', String(divisiId));
    if (search)   params = params.set('search', search);
    return this.http.get<{ karyawan: KaryawanShift[] }>(`${this.url}/karyawan`, { params }).pipe(
      map(d => (d as any)?.karyawan ?? []),
      catchError(() => of([]))
    );
  }

  getShiftOptions(): Observable<PolaKerja[]> {
    return this.http.get<{ shiftOptions: PolaKerja[] }>(`${this.url}/shift-options`).pipe(
      map(d => (d as any)?.shiftOptions ?? []),
      catchError(() => of([]))
    );
  }

  upsert(req: JadwalShiftRequest): Observable<JadwalShift> {
    return this.http.post<{ jadwalShift: JadwalShift }>(this.url, req).pipe(
      map(d => (d as any)?.jadwalShift ?? d as unknown as JadwalShift)
    );
  }

  batch(req: JadwalShiftBatchRequest): Observable<JadwalShift[]> {
    return this.http.post<{ jadwalShift: JadwalShift[] }>(`${this.url}/batch`, req).pipe(
      map(d => (d as any)?.jadwalShift ?? [])
    );
  }

  copyWeek(req: CopyJadwalShiftRequest): Observable<number> {
    return this.http.post<{ jumlah: number }>(`${this.url}/copy-week`, req).pipe(
      map(d => (d as any)?.jumlah ?? 0)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  /** Download file Excel template untuk impor jadwal shift. */
  downloadTemplate(bulan?: string | null): void {
    let params = new HttpParams();
    if (bulan) params = params.set('bulan', bulan);
    this.http.get(`${this.url}/template`, { params, responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `format-impor-jadwal-shift${bulan ? '-' + bulan : ''}.xlsx`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }

  /** Ekspor seluruh jadwal shift pada bulan tertentu sebagai file Excel. */
  eksporExcel(bulan?: string | null, divisiId?: number | null, search?: string | null): Observable<Blob> {
    let params = new HttpParams();
    if (bulan)    params = params.set('bulan', bulan);
    if (divisiId) params = params.set('divisiId', String(divisiId));
    if (search)   params = params.set('search', search);
    return this.http.get(`${this.url}/ekspor`, { params, responseType: 'blob' }).pipe(
      map(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `jadwal-shift${bulan ? '-' + bulan : ''}.xlsx`;
        a.click();
        URL.revokeObjectURL(a.href);
        return blob;
      })
    );
  }

  /** Upload file Excel impor jadwal shift. */
  impor(file: File): Observable<ImporJadwalShiftResult> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ hasil: ImporJadwalShiftResult }>(`${this.url}/impor`, form).pipe(
      map(d => (d as any)?.hasil ?? d as unknown as ImporJadwalShiftResult)
    );
  }
}

export interface ImporJadwalShiftResult {
  berhasil: number;
  gagal: number;
  errors: { baris: number; nip: string; nama: string; tanggal: string; pesan: string }[];
}
