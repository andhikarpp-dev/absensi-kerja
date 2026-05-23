import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Karyawan } from '../models/karyawan.model';

export interface TidakHadirMingguanResponse {
  dari: string;
  sampai: string;
  days: number;
  total: number;
  karyawan: Karyawan[];
}

@Injectable({ providedIn: 'root' })
export class TidakHadirMingguanService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/laporan/tidak-hadir-mingguan`;

  /** Ambil daftar karyawan yang tidak hadir dalam X hari terakhir (default 7). */
  findTidakHadir(days: number = 7): Observable<TidakHadirMingguanResponse> {
    const params = new HttpParams().set('days', days.toString());
    return this.http
      .get<TidakHadirMingguanResponse>(this.url, { params })
      .pipe(map(d => d ?? { dari: '', sampai: '', days, total: 0, karyawan: [] }));
  }
}
