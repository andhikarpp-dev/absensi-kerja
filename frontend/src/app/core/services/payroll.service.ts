import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PayrollGajiDasar, PayrollGajiDasarRequest, PayrollBpjs, PayrollBpjsRequest, PayrollRekeningBank, PayrollRekeningBankRequest, PayrollPph21, PayrollPph21Request, PayrollPph21Riwayat, PayrollPph21RiwayatRequest } from '../models/payroll.model';

@Injectable({ providedIn: 'root' })
export class PayrollService {
  private http = inject(HttpClient);
  private baseUrl = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/payroll`;

  // ── Gaji Dasar ────────────────────────────────────────────────────
  getGajiDasar(karyawanId: number): Observable<PayrollGajiDasar | null> {
    return this.http.get<any>(`${this.baseUrl(karyawanId)}/gaji-dasar`)
      .pipe(map(d => {
        const data = d?.gajiDasar;
        return (data && Object.keys(data).length > 0) ? data : null;
      }));
  }

  saveGajiDasar(karyawanId: number, req: PayrollGajiDasarRequest): Observable<PayrollGajiDasar> {
    return this.http.post<any>(`${this.baseUrl(karyawanId)}/gaji-dasar`, req)
      .pipe(map(d => d.gajiDasar));
  }

  // ── BPJS ──────────────────────────────────────────────────────────
  getBpjs(karyawanId: number): Observable<PayrollBpjs | null> {
    return this.http.get<any>(`${this.baseUrl(karyawanId)}/bpjs`)
      .pipe(map(d => {
        const data = d?.bpjs;
        return (data && Object.keys(data).length > 0) ? data : null;
      }));
  }

  saveBpjs(karyawanId: number, req: PayrollBpjsRequest): Observable<PayrollBpjs> {
    return this.http.post<any>(`${this.baseUrl(karyawanId)}/bpjs`, req)
      .pipe(map(d => d.bpjs));
  }

  // ── Rekening Bank ─────────────────────────────────────────────────
  getRekeningBank(karyawanId: number): Observable<PayrollRekeningBank | null> {
    return this.http.get<any>(`${this.baseUrl(karyawanId)}/rekening-bank`)
      .pipe(map(d => {
        const data = d?.rekeningBank;
        return (data && Object.keys(data).length > 0) ? data : null;
      }));
  }

  saveRekeningBank(karyawanId: number, req: PayrollRekeningBankRequest): Observable<PayrollRekeningBank> {
    return this.http.post<any>(`${this.baseUrl(karyawanId)}/rekening-bank`, req)
      .pipe(map(d => d.rekeningBank));
  }

  deleteRekeningBank(karyawanId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl(karyawanId)}/rekening-bank`);
  }

  // ── PPH 21 ────────────────────────────────────────────────────────
  getPph21(karyawanId: number): Observable<PayrollPph21 | null> {
    return this.http.get<any>(`${this.baseUrl(karyawanId)}/pph21`)
      .pipe(map(d => {
        const data = d?.pph21;
        return (data && Object.keys(data).length > 0) ? data : null;
      }));
  }

  savePph21(karyawanId: number, req: PayrollPph21Request): Observable<PayrollPph21> {
    return this.http.post<any>(`${this.baseUrl(karyawanId)}/pph21`, req)
      .pipe(map(d => d.pph21));
  }

  listRiwayatPph21(karyawanId: number): Observable<PayrollPph21Riwayat[]> {
    return this.http.get<any>(`${this.baseUrl(karyawanId)}/pph21/riwayat`)
      .pipe(map(d => d?.riwayat ?? []));
  }

  saveRiwayatPph21(karyawanId: number, req: PayrollPph21RiwayatRequest): Observable<PayrollPph21Riwayat> {
    return this.http.post<any>(`${this.baseUrl(karyawanId)}/pph21/riwayat`, req)
      .pipe(map(d => d.riwayat));
  }

  updateRiwayatPph21(karyawanId: number, riwayatId: number, req: PayrollPph21RiwayatRequest): Observable<PayrollPph21Riwayat> {
    return this.http.put<any>(`${this.baseUrl(karyawanId)}/pph21/riwayat/${riwayatId}`, req)
      .pipe(map(d => d.riwayat));
  }

  deleteRiwayatPph21(karyawanId: number, riwayatId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl(karyawanId)}/pph21/riwayat/${riwayatId}`);
  }
}
