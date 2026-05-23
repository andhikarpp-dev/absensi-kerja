import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Karyawan, KaryawanRequest, FileIdentitas, FileIdentitasRequest, PengalamanKerja, PengalamanKerjaRequest, BackgroundPendidikan, BackgroundPendidikanRequest, Portofolio, PortofolioRequest, Penghargaan, PenghargaanRequest, Sertifikat, SertifikatRequest, PengalamanOrganisasi, PengalamanOrganisasiRequest, KontakDarurat, KontakDaruratRequest, PerangkatKaryawan, ImporKaryawanResult, TipeImporKaryawan } from '../models/karyawan.model';

@Injectable({ providedIn: 'root' })
export class KaryawanService {
  private http = inject(HttpClient);
  private url  = `${environment.apiUrl}/karyawan`;

  findAll(): Observable<Karyawan[]> {
    return this.http.get<{ karyawan: Karyawan[] }>(this.url).pipe(
      map(d => (Array.isArray(d) ? d : d?.karyawan) ?? []),
      catchError(err => {
        console.error('[KaryawanService] findAll error:', err);
        return of([]);
      })
    );
  }

  findById(id: number): Observable<Karyawan> {
    return this.http.get<{ karyawan: Karyawan }>(`${this.url}/${id}`).pipe(
      map(d => d?.karyawan ?? (d as unknown as Karyawan))
    );
  }

  /** Create dengan foto (multipart) */
  create(req: KaryawanRequest, foto?: File): Observable<Karyawan> {
    if (foto) {
      const fd = this.buildFormData(req, foto);
      return this.http.post<{ karyawan: Karyawan }>(this.url, fd).pipe(
        map(d => d?.karyawan ?? (d as unknown as Karyawan))
      );
    }
    return this.http.post<{ karyawan: Karyawan }>(this.url, req).pipe(
      map(d => d?.karyawan ?? (d as unknown as Karyawan))
    );
  }

  /** Update dengan foto (multipart) */
  update(id: number, req: KaryawanRequest, foto?: File): Observable<Karyawan> {
    if (foto) {
      const fd = this.buildFormData(req, foto);
      return this.http.put<{ karyawan: Karyawan }>(`${this.url}/${id}`, fd).pipe(
        map(d => d?.karyawan ?? (d as unknown as Karyawan))
      );
    }
    return this.http.put<{ karyawan: Karyawan }>(`${this.url}/${id}`, req).pipe(
      map(d => d?.karyawan ?? (d as unknown as Karyawan))
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  /** List karyawan yang sudah di-soft-delete (trash). */
  getTrash(): Observable<Karyawan[]> {
    return this.http.get<{ karyawan: Karyawan[] }>(`${this.url}/trash`).pipe(
      map(d => d?.karyawan ?? [])
    );
  }

  /** Pulihkan karyawan dari trash. */
  restore(id: number): Observable<Karyawan> {
    return this.http.post<{ karyawan: Karyawan }>(`${this.url}/${id}/restore`, {}).pipe(
      map(d => d.karyawan)
    );
  }

  /** Hapus permanen (hard delete). */
  hardDelete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}/permanent`);
  }

  /**
   * Eksekusi aksi massal pada beberapa karyawan sekaligus.
   * @param req payload aksi massal
   */
  aksiMassal(req: {
    ids: number[];
    aksi: 'HAPUS' | 'UBAH_STATUS' | 'PINDAH_DIVISI' | 'PINDAH_JABATAN';
    statusKerja?: string;
    divisiId?: number | null;
    jabatanId?: number | null;
  }): Observable<{
    aksi: string; diminta: number; berhasil: number; gagal: number; errors: string[];
  }> {
    return this.http.post<any>(`${this.url}/aksi-massal`, req).pipe(
      map(d => d?.hasil ?? d?.data?.hasil ?? d)
    );
  }

  /** Download Excel data karyawan dengan filter. */
  eksporExcel(opts?: { divisiId?: number; limit?: number }): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.divisiId != null) params = params.set('divisiId', String(opts.divisiId));
    if (opts?.limit    != null) params = params.set('limit',    String(opts.limit));
    return this.http.get(`${this.url}/ekspor-excel`, { params, responseType: 'blob' });
  }

  /** Kirim hasil ekspor Excel ke email tertentu. */
  eksporExcelKeEmail(req: { divisiId?: number | null; limit?: number | null; email: string }):
      Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.url}/ekspor-excel/email`, req
    );
  }

  // ── Impor Excel ───────────────────────────────────────────
  /** Download template Excel untuk tipe impor tertentu. */
  downloadTemplateImpor(
      tipe: TipeImporKaryawan,
      opts?: { divisiId?: number | null; karyawanIds?: number[] | null }
  ): Observable<Blob> {
    let params = new HttpParams();
    if (opts?.divisiId != null) {
      params = params.set('divisiId', String(opts.divisiId));
    }
    if (opts?.karyawanIds && opts.karyawanIds.length > 0) {
      for (const id of opts.karyawanIds) {
        params = params.append('karyawanIds', String(id));
      }
    }
    return this.http.get(`${this.url}/impor/template/${tipe}`,
      { params, responseType: 'blob' });
  }

  /** Proses impor Excel sesuai tipe. Mengembalikan ringkasan hasil. */
  prosesImpor(tipe: TipeImporKaryawan, file: File, opts?: { divisiId?: number | null }):
      Observable<ImporKaryawanResult> {
    const fd = new FormData();
    fd.append('file', file);
    if (tipe === 'tambah' && opts?.divisiId != null) {
      fd.append('divisiId', String(opts.divisiId));
    }
    return this.http.post<any>(`${this.url}/impor/${tipe}`, fd).pipe(
      map(d => d?.hasil ?? d?.data?.hasil ?? d)
    );
  }

  // ── File Identitas Tambahan ───────────────────────────────
  getFileIdentitas(karyawanId: number): Observable<FileIdentitas[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/file-identitas`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.fileIdentitas ?? [])),
      catchError(() => of([]))
    );
  }

  addFileIdentitas(karyawanId: number, req: FileIdentitasRequest, file?: File): Observable<FileIdentitas> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (file) fd.append('file', file);
    return this.http.post<any>(`${this.url}/${karyawanId}/file-identitas`, fd).pipe(
      map(d => d?.fileIdentitas ?? d?.data ?? d)
    );
  }

  deleteFileIdentitas(karyawanId: number, fileId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/file-identitas/${fileId}`);
  }

  // ── Pengalaman Kerja ──────────────────────────────────────
  getPengalamanKerja(karyawanId: number): Observable<PengalamanKerja[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/pengalaman-kerja`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.pengalamanKerja ?? [])),
      catchError(() => of([]))
    );
  }

  addPengalamanKerja(karyawanId: number, req: PengalamanKerjaRequest): Observable<PengalamanKerja> {
    return this.http.post<any>(`${this.url}/${karyawanId}/pengalaman-kerja`, req).pipe(
      map(d => d?.pengalamanKerja ?? d?.data ?? d)
    );
  }

  updatePengalamanKerja(karyawanId: number, pengalamanId: number, req: PengalamanKerjaRequest): Observable<PengalamanKerja> {
    return this.http.put<any>(`${this.url}/${karyawanId}/pengalaman-kerja/${pengalamanId}`, req).pipe(
      map(d => d?.pengalamanKerja ?? d?.data ?? d)
    );
  }

  deletePengalamanKerja(karyawanId: number, pengalamanId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/pengalaman-kerja/${pengalamanId}`);
  }

  // ── Background Pendidikan ─────────────────────────────────
  getBackgroundPendidikan(karyawanId: number): Observable<BackgroundPendidikan[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/background-pendidikan`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.backgroundPendidikan ?? [])),
      catchError(() => of([]))
    );
  }

  addBackgroundPendidikan(karyawanId: number, req: BackgroundPendidikanRequest): Observable<BackgroundPendidikan> {
    return this.http.post<any>(`${this.url}/${karyawanId}/background-pendidikan`, req).pipe(
      map(d => d?.backgroundPendidikan ?? d?.data ?? d)
    );
  }

  updateBackgroundPendidikan(karyawanId: number, pendidikanId: number, req: BackgroundPendidikanRequest): Observable<BackgroundPendidikan> {
    return this.http.put<any>(`${this.url}/${karyawanId}/background-pendidikan/${pendidikanId}`, req).pipe(
      map(d => d?.backgroundPendidikan ?? d?.data ?? d)
    );
  }

  deleteBackgroundPendidikan(karyawanId: number, pendidikanId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/background-pendidikan/${pendidikanId}`);
  }

  // ── Portofolio ────────────────────────────────────────────
  getPortofolio(karyawanId: number): Observable<Portofolio[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/portofolio`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.portofolio ?? [])),
      catchError(() => of([]))
    );
  }

  addPortofolio(karyawanId: number, req: PortofolioRequest): Observable<Portofolio> {
    return this.http.post<any>(`${this.url}/${karyawanId}/portofolio`, req).pipe(
      map(d => d?.portofolio ?? d?.data ?? d)
    );
  }

  updatePortofolio(karyawanId: number, portofolioId: number, req: PortofolioRequest): Observable<Portofolio> {
    return this.http.put<any>(`${this.url}/${karyawanId}/portofolio/${portofolioId}`, req).pipe(
      map(d => d?.portofolio ?? d?.data ?? d)
    );
  }

  deletePortofolio(karyawanId: number, portofolioId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/portofolio/${portofolioId}`);
  }

  // ── Penghargaan ───────────────────────────────────────────
  getPenghargaan(karyawanId: number): Observable<Penghargaan[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/penghargaan`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.penghargaan ?? [])),
      catchError(() => of([]))
    );
  }

  addPenghargaan(karyawanId: number, req: PenghargaanRequest): Observable<Penghargaan> {
    return this.http.post<any>(`${this.url}/${karyawanId}/penghargaan`, req).pipe(
      map(d => d?.penghargaan ?? d?.data ?? d)
    );
  }

  updatePenghargaan(karyawanId: number, penghargaanId: number, req: PenghargaanRequest): Observable<Penghargaan> {
    return this.http.put<any>(`${this.url}/${karyawanId}/penghargaan/${penghargaanId}`, req).pipe(
      map(d => d?.penghargaan ?? d?.data ?? d)
    );
  }

  deletePenghargaan(karyawanId: number, penghargaanId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/penghargaan/${penghargaanId}`);
  }

  // ── Sertifikat ────────────────────────────────────────────
  getSertifikat(karyawanId: number): Observable<Sertifikat[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/sertifikat`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.sertifikat ?? [])),
      catchError(() => of([]))
    );
  }

  addSertifikat(karyawanId: number, req: SertifikatRequest, file?: File): Observable<Sertifikat> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (file) fd.append('file', file);
    return this.http.post<any>(`${this.url}/${karyawanId}/sertifikat`, fd).pipe(
      map(d => d?.sertifikat ?? d?.data ?? d)
    );
  }

  updateSertifikat(karyawanId: number, sertifikatId: number, req: SertifikatRequest, file?: File): Observable<Sertifikat> {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    if (file) fd.append('file', file);
    return this.http.put<any>(`${this.url}/${karyawanId}/sertifikat/${sertifikatId}`, fd).pipe(
      map(d => d?.sertifikat ?? d?.data ?? d)
    );
  }

  deleteSertifikat(karyawanId: number, sertifikatId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/sertifikat/${sertifikatId}`);
  }

  // ── Pengalaman Organisasi ─────────────────────────────────
  getPengalamanOrganisasi(karyawanId: number): Observable<PengalamanOrganisasi[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/pengalaman-organisasi`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.pengalamanOrganisasi ?? [])),
      catchError(() => of([]))
    );
  }

  addPengalamanOrganisasi(karyawanId: number, req: PengalamanOrganisasiRequest): Observable<PengalamanOrganisasi> {
    return this.http.post<any>(`${this.url}/${karyawanId}/pengalaman-organisasi`, req).pipe(
      map(d => d?.pengalamanOrganisasi ?? d?.data ?? d)
    );
  }

  updatePengalamanOrganisasi(karyawanId: number, organisasiId: number, req: PengalamanOrganisasiRequest): Observable<PengalamanOrganisasi> {
    return this.http.put<any>(`${this.url}/${karyawanId}/pengalaman-organisasi/${organisasiId}`, req).pipe(
      map(d => d?.pengalamanOrganisasi ?? d?.data ?? d)
    );
  }

  deletePengalamanOrganisasi(karyawanId: number, organisasiId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/pengalaman-organisasi/${organisasiId}`);
  }

  // ── Kontak Darurat ────────────────────────────────────────
  getKontakDarurat(karyawanId: number): Observable<KontakDarurat[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/kontak-darurat`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.kontakDarurat ?? [])),
      catchError(() => of([]))
    );
  }

  addKontakDarurat(karyawanId: number, req: KontakDaruratRequest): Observable<KontakDarurat> {
    return this.http.post<any>(`${this.url}/${karyawanId}/kontak-darurat`, req).pipe(
      map(d => d?.kontakDarurat ?? d?.data ?? d)
    );
  }

  updateKontakDarurat(karyawanId: number, kontakId: number, req: KontakDaruratRequest): Observable<KontakDarurat> {
    return this.http.put<any>(`${this.url}/${karyawanId}/kontak-darurat/${kontakId}`, req).pipe(
      map(d => d?.kontakDarurat ?? d?.data ?? d)
    );
  }

  deleteKontakDarurat(karyawanId: number, kontakId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/kontak-darurat/${kontakId}`);
  }

  // ── Pola Kerja Karyawan ───────────────────────────────────
  updatePolaKerja(karyawanId: number, polaKerjaId: number): Observable<void> {
    return this.http.put<void>(`${this.url}/${karyawanId}/pola-kerja?polaKerjaId=${polaKerjaId}`, {});
  }

  // ── Perangkat Karyawan ────────────────────────────────────
  getPerangkat(karyawanId: number): Observable<PerangkatKaryawan[]> {
    return this.http.get<any>(`${this.url}/${karyawanId}/perangkat`).pipe(
      map(d => (Array.isArray(d) ? d : d?.data ?? d?.perangkat ?? [])),
      catchError(() => of([]))
    );
  }

  deletePerangkat(karyawanId: number, perangkatId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${karyawanId}/perangkat/${perangkatId}`);
  }

  // ── helper ────────────────────────────────────────────────
  private buildFormData(req: KaryawanRequest, foto: File): FormData {
    const fd = new FormData();
    fd.append('data', new Blob([JSON.stringify(req)], { type: 'application/json' }));
    fd.append('foto', foto);
    return fd;
  }
}
