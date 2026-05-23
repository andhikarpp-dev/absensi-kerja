import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  Cuti, CutiRequest, CutiRiwayat, JenisCuti,
  SisaCuti, UpdateSisaCutiRequest, SisaCutiRiwayatItem,
  PengaturanCutiKhusus, PengaturanCutiKhususRequest,
  PengaturanCutiSetengahHari, PengaturanCutiSetengahHariRequest
} from '../models/cuti.model';
import { StatusIzin } from '../models/izin-hari.model';

@Injectable({ providedIn: 'root' })
export class CutiService {
  private http = inject(HttpClient);
  private url  = (karyawanId: number) =>
    `${environment.apiUrl}/karyawan/${karyawanId}/cuti`;
  private adminUrl = `${environment.apiUrl}/cuti`;

  getAll(karyawanId: number, opts?: {
    status?: StatusIzin; jenis?: JenisCuti; from?: string; to?: string; filter?: string;
  }): Observable<Cuti[]> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.jenis)  params = params.set('jenis',  opts.jenis);
    if (opts?.from)   params = params.set('from',   opts.from);
    if (opts?.to)     params = params.set('to',     opts.to);
    if (opts?.filter) params = params.set('filter', opts.filter);
    return this.http.get<any>(this.url(karyawanId), { params })
      .pipe(map(d => d?.cuti ?? []));
  }

  /** Admin: semua cuti lintas karyawan */
  getAllAdmin(opts?: {
    status?: StatusIzin; jenis?: JenisCuti; from?: string; to?: string;
    filter?: string; divisiId?: number; cari?: string;
  }): Observable<{ cuti: Cuti[]; totalMenunggu: number }> {
    let params = new HttpParams();
    if (opts?.status)   params = params.set('status',   opts.status);
    if (opts?.jenis)    params = params.set('jenis',    opts.jenis);
    if (opts?.from)     params = params.set('from',     opts.from);
    if (opts?.to)       params = params.set('to',       opts.to);
    if (opts?.filter)   params = params.set('filter',   opts.filter);
    if (opts?.divisiId) params = params.set('divisiId', String(opts.divisiId));
    if (opts?.cari)     params = params.set('cari',     opts.cari);
    return this.http.get<any>(this.adminUrl, { params })
      .pipe(map(d => ({ cuti: d?.cuti ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }

  updateStatusAdmin(id: number, status: StatusIzin, catatanPenolakan?: string): Observable<Cuti> {
    return this.http.patch<any>(`${this.adminUrl}/${id}/status`, { status, catatanPenolakan })
      .pipe(map(d => d.cuti));
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.adminUrl}/${id}`);
  }

  exportExcelAdmin(opts?: { status?: StatusIzin; jenis?: JenisCuti; from?: string; to?: string; }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.jenis)  params = params.set('jenis',  opts.jenis);
    if (opts?.from)   params = params.set('from',   opts.from);
    if (opts?.to)     params = params.set('to',     opts.to);
    return this.http.get(`${this.adminUrl}/ekspor-excel`, { params, responseType: 'blob' });
  }

  create(karyawanId: number, req: CutiRequest, lampiran?: File): Observable<Cuti> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (lampiran) fd.append('lampiran', lampiran);
    return this.http.post<any>(this.url(karyawanId), fd).pipe(map(d => d.cuti));
  }

  update(karyawanId: number, id: number, req: CutiRequest, lampiran?: File): Observable<Cuti> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (lampiran) fd.append('lampiran', lampiran);
    return this.http.put<any>(`${this.url(karyawanId)}/${id}`, fd).pipe(map(d => d.cuti));
  }

  updateStatus(karyawanId: number, id: number, status: StatusIzin, catatanPenolakan?: string): Observable<Cuti> {
    return this.http.patch<any>(`${this.url(karyawanId)}/${id}/status`,
      { status, catatanPenolakan }).pipe(map(d => d.cuti));
  }

  delete(karyawanId: number, id: number): Observable<void> {
    return this.http.delete<void>(`${this.url(karyawanId)}/${id}`);
  }

  getRiwayat(karyawanId: number, id: number): Observable<CutiRiwayat[]> {
    return this.http.get<any>(`${this.url(karyawanId)}/${id}/riwayat`)
      .pipe(map(d => d?.riwayat ?? []));
  }

  getSisa(karyawanId: number): Observable<SisaCuti> {
    return this.http.get<any>(`${this.url(karyawanId)}/sisa`)
      .pipe(map(d => d.sisaCuti));
  }

  updateSisa(karyawanId: number, req: UpdateSisaCutiRequest): Observable<SisaCuti> {
    return this.http.patch<any>(`${this.url(karyawanId)}/sisa`, req)
      .pipe(map(d => d.sisaCuti));
  }

  /** Jalankan scheduler pembaruan otomatis secara manual untuk testing/admin. */
  triggerPembaruan(karyawanId: number): Observable<{ applied: boolean; sisaCuti: SisaCuti }> {
    return this.http.post<any>(`${this.url(karyawanId)}/sisa/trigger-pembaruan`, {})
      .pipe(map(d => ({ applied: d.applied, sisaCuti: d.sisaCuti })));
  }

  exportExcel(karyawanId: number, opts?: {
    status?: StatusIzin; jenis?: JenisCuti; from?: string; to?: string;
  }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.status) params = params.set('status', opts.status);
    if (opts?.jenis)  params = params.set('jenis',  opts.jenis);
    if (opts?.from)   params = params.set('from',   opts.from);
    if (opts?.to)     params = params.set('to',     opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`,
      { params, responseType: 'blob' });
  }

  // ── Laporan Cuti ──────────────────────────────────────────
  private laporanUrl = `${environment.apiUrl}/cuti/laporan`;

  getLaporanKaryawan(opts?: { divisiId?: number; jabatanId?: number; cari?: string }): Observable<any[]> {
    let params = new HttpParams();
    if (opts?.divisiId)  params = params.set('divisiId',  String(opts.divisiId));
    if (opts?.jabatanId) params = params.set('jabatanId', String(opts.jabatanId));
    if (opts?.cari)      params = params.set('cari',      opts.cari);
    return this.http.get<any>(this.laporanUrl, { params })
      .pipe(map(d => d?.karyawan ?? []));
  }

  getLaporanSisa(karyawanId: number): Observable<SisaCuti> {
    return this.http.get<any>(`${this.laporanUrl}/${karyawanId}/sisa`)
      .pipe(map(d => d?.sisaCuti ?? d));
  }

  updateLaporanSisa(karyawanId: number, req: UpdateSisaCutiRequest): Observable<SisaCuti> {
    return this.http.patch<any>(`${this.laporanUrl}/${karyawanId}/sisa`, req)
      .pipe(map(d => d?.sisaCuti ?? d));
  }

  getRiwayatTransaksi(karyawanId: number): Observable<SisaCutiRiwayatItem[]> {
    return this.http.get<any>(`${this.laporanUrl}/${karyawanId}/riwayat-transaksi`)
      .pipe(map(d => d?.riwayat ?? []));
  }

  // ── Pengaturan Cuti Khusus ──────────────────────────────────
  private khususUrl = `${environment.apiUrl}/cuti/pengaturan-khusus`;

  getPengaturanCutiKhusus(): Observable<PengaturanCutiKhusus[]> {
    return this.http.get<any>(this.khususUrl)
      .pipe(map(d => d?.cutiKhusus ?? []));
  }

  createPengaturanCutiKhusus(req: PengaturanCutiKhususRequest): Observable<PengaturanCutiKhusus> {
    return this.http.post<any>(this.khususUrl, req)
      .pipe(map(d => d?.cutiKhusus));
  }

  updatePengaturanCutiKhusus(id: number, req: PengaturanCutiKhususRequest): Observable<PengaturanCutiKhusus> {
    return this.http.put<any>(`${this.khususUrl}/${id}`, req)
      .pipe(map(d => d?.cutiKhusus));
  }

  toggleAktifCutiKhusus(id: number): Observable<PengaturanCutiKhusus> {
    return this.http.patch<any>(`${this.khususUrl}/${id}/toggle-aktif`, {})
      .pipe(map(d => d?.cutiKhusus));
  }

  deletePengaturanCutiKhusus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.khususUrl}/${id}`);
  }

  // ── Pengaturan Cuti Setengah Hari ───────────────────────────
  private shUrl = `${environment.apiUrl}/cuti/pengaturan-setengah-hari`;

  getPengaturanSetengahHari(): Observable<PengaturanCutiSetengahHari> {
    return this.http.get<any>(this.shUrl)
      .pipe(map(d => d?.pengaturan));
  }

  savePengaturanSetengahHari(req: PengaturanCutiSetengahHariRequest): Observable<PengaturanCutiSetengahHari> {
    return this.http.put<any>(this.shUrl, req)
      .pipe(map(d => d?.pengaturan));
  }
}

