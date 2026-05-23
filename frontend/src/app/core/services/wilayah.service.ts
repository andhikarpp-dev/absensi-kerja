import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface Provinsi {
  id: number;
  namaProvinsi: string;
}

export interface KabupatenKota {
  id: number;
  namaKabupatenKota: string;
  provinsiId: number;
  namaProvinsi: string;
}

@Injectable({ providedIn: 'root' })
export class WilayahService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/wilayah`;

  findAllProvinsi(): Observable<Provinsi[]> {
    return this.http.get<{ provinsi: Provinsi[] }>(`${this.url}/provinsi`).pipe(
      map(res => res?.provinsi ?? []),
      catchError(err => {
        console.error('[WilayahService] findAllProvinsi error:', err);
        return of([]);
      })
    );
  }

  findKabupatenKota(provinsiId: number): Observable<KabupatenKota[]> {
    return this.http.get<{ kabupatenKota: KabupatenKota[] }>(
      `${this.url}/kabupaten-kota`, { params: { provinsiId: provinsiId.toString() } }
    ).pipe(
      map(res => res?.kabupatenKota ?? []),
      catchError(err => {
        console.error('[WilayahService] findKabupatenKota error:', err);
        return of([]);
      })
    );
  }
}
