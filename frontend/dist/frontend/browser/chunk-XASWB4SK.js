import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-OEINA6XM.js";
import {
  Injectable,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QLIULQP5.js";

// src/app/core/services/karyawan.service.ts
var KaryawanService = class _KaryawanService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/karyawan`;
  }
  findAll() {
    return this.http.get(this.url).pipe(map((d) => (Array.isArray(d) ? d : d?.karyawan) ?? []), catchError((err) => {
      console.error("[KaryawanService] findAll error:", err);
      return of([]);
    }));
  }
  findById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(map((d) => d?.karyawan ?? d));
  }
  /** Create dengan foto (multipart) */
  create(req, foto) {
    if (foto) {
      const fd = this.buildFormData(req, foto);
      return this.http.post(this.url, fd).pipe(map((d) => d?.karyawan ?? d));
    }
    return this.http.post(this.url, req).pipe(map((d) => d?.karyawan ?? d));
  }
  /** Update dengan foto (multipart) */
  update(id, req, foto) {
    if (foto) {
      const fd = this.buildFormData(req, foto);
      return this.http.put(`${this.url}/${id}`, fd).pipe(map((d) => d?.karyawan ?? d));
    }
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d?.karyawan ?? d));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  /** List karyawan yang sudah di-soft-delete (trash). */
  getTrash() {
    return this.http.get(`${this.url}/trash`).pipe(map((d) => d?.karyawan ?? []));
  }
  /** Pulihkan karyawan dari trash. */
  restore(id) {
    return this.http.post(`${this.url}/${id}/restore`, {}).pipe(map((d) => d.karyawan));
  }
  /** Hapus permanen (hard delete). */
  hardDelete(id) {
    return this.http.delete(`${this.url}/${id}/permanent`);
  }
  /**
   * Eksekusi aksi massal pada beberapa karyawan sekaligus.
   * @param req payload aksi massal
   */
  aksiMassal(req) {
    return this.http.post(`${this.url}/aksi-massal`, req).pipe(map((d) => d?.hasil ?? d?.data?.hasil ?? d));
  }
  /** Download Excel data karyawan dengan filter. */
  eksporExcel(opts) {
    let params = new HttpParams();
    if (opts?.divisiId != null)
      params = params.set("divisiId", String(opts.divisiId));
    if (opts?.limit != null)
      params = params.set("limit", String(opts.limit));
    return this.http.get(`${this.url}/ekspor-excel`, { params, responseType: "blob" });
  }
  /** Kirim hasil ekspor Excel ke email tertentu. */
  eksporExcelKeEmail(req) {
    return this.http.post(`${this.url}/ekspor-excel/email`, req);
  }
  // ── Impor Excel ───────────────────────────────────────────
  /** Download template Excel untuk tipe impor tertentu. */
  downloadTemplateImpor(tipe, opts) {
    let params = new HttpParams();
    if (opts?.divisiId != null) {
      params = params.set("divisiId", String(opts.divisiId));
    }
    if (opts?.karyawanIds && opts.karyawanIds.length > 0) {
      for (const id of opts.karyawanIds) {
        params = params.append("karyawanIds", String(id));
      }
    }
    return this.http.get(`${this.url}/impor/template/${tipe}`, { params, responseType: "blob" });
  }
  /** Proses impor Excel sesuai tipe. Mengembalikan ringkasan hasil. */
  prosesImpor(tipe, file, opts) {
    const fd = new FormData();
    fd.append("file", file);
    if (tipe === "tambah" && opts?.divisiId != null) {
      fd.append("divisiId", String(opts.divisiId));
    }
    return this.http.post(`${this.url}/impor/${tipe}`, fd).pipe(map((d) => d?.hasil ?? d?.data?.hasil ?? d));
  }
  // ── File Identitas Tambahan ───────────────────────────────
  getFileIdentitas(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/file-identitas`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.fileIdentitas ?? []), catchError(() => of([])));
  }
  addFileIdentitas(karyawanId, req, file) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (file)
      fd.append("file", file);
    return this.http.post(`${this.url}/${karyawanId}/file-identitas`, fd).pipe(map((d) => d?.fileIdentitas ?? d?.data ?? d));
  }
  deleteFileIdentitas(karyawanId, fileId) {
    return this.http.delete(`${this.url}/${karyawanId}/file-identitas/${fileId}`);
  }
  // ── Pengalaman Kerja ──────────────────────────────────────
  getPengalamanKerja(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/pengalaman-kerja`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.pengalamanKerja ?? []), catchError(() => of([])));
  }
  addPengalamanKerja(karyawanId, req) {
    return this.http.post(`${this.url}/${karyawanId}/pengalaman-kerja`, req).pipe(map((d) => d?.pengalamanKerja ?? d?.data ?? d));
  }
  updatePengalamanKerja(karyawanId, pengalamanId, req) {
    return this.http.put(`${this.url}/${karyawanId}/pengalaman-kerja/${pengalamanId}`, req).pipe(map((d) => d?.pengalamanKerja ?? d?.data ?? d));
  }
  deletePengalamanKerja(karyawanId, pengalamanId) {
    return this.http.delete(`${this.url}/${karyawanId}/pengalaman-kerja/${pengalamanId}`);
  }
  // ── Background Pendidikan ─────────────────────────────────
  getBackgroundPendidikan(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/background-pendidikan`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.backgroundPendidikan ?? []), catchError(() => of([])));
  }
  addBackgroundPendidikan(karyawanId, req) {
    return this.http.post(`${this.url}/${karyawanId}/background-pendidikan`, req).pipe(map((d) => d?.backgroundPendidikan ?? d?.data ?? d));
  }
  updateBackgroundPendidikan(karyawanId, pendidikanId, req) {
    return this.http.put(`${this.url}/${karyawanId}/background-pendidikan/${pendidikanId}`, req).pipe(map((d) => d?.backgroundPendidikan ?? d?.data ?? d));
  }
  deleteBackgroundPendidikan(karyawanId, pendidikanId) {
    return this.http.delete(`${this.url}/${karyawanId}/background-pendidikan/${pendidikanId}`);
  }
  // ── Portofolio ────────────────────────────────────────────
  getPortofolio(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/portofolio`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.portofolio ?? []), catchError(() => of([])));
  }
  addPortofolio(karyawanId, req) {
    return this.http.post(`${this.url}/${karyawanId}/portofolio`, req).pipe(map((d) => d?.portofolio ?? d?.data ?? d));
  }
  updatePortofolio(karyawanId, portofolioId, req) {
    return this.http.put(`${this.url}/${karyawanId}/portofolio/${portofolioId}`, req).pipe(map((d) => d?.portofolio ?? d?.data ?? d));
  }
  deletePortofolio(karyawanId, portofolioId) {
    return this.http.delete(`${this.url}/${karyawanId}/portofolio/${portofolioId}`);
  }
  // ── Penghargaan ───────────────────────────────────────────
  getPenghargaan(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/penghargaan`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.penghargaan ?? []), catchError(() => of([])));
  }
  addPenghargaan(karyawanId, req) {
    return this.http.post(`${this.url}/${karyawanId}/penghargaan`, req).pipe(map((d) => d?.penghargaan ?? d?.data ?? d));
  }
  updatePenghargaan(karyawanId, penghargaanId, req) {
    return this.http.put(`${this.url}/${karyawanId}/penghargaan/${penghargaanId}`, req).pipe(map((d) => d?.penghargaan ?? d?.data ?? d));
  }
  deletePenghargaan(karyawanId, penghargaanId) {
    return this.http.delete(`${this.url}/${karyawanId}/penghargaan/${penghargaanId}`);
  }
  // ── Sertifikat ────────────────────────────────────────────
  getSertifikat(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/sertifikat`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.sertifikat ?? []), catchError(() => of([])));
  }
  addSertifikat(karyawanId, req, file) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (file)
      fd.append("file", file);
    return this.http.post(`${this.url}/${karyawanId}/sertifikat`, fd).pipe(map((d) => d?.sertifikat ?? d?.data ?? d));
  }
  updateSertifikat(karyawanId, sertifikatId, req, file) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (file)
      fd.append("file", file);
    return this.http.put(`${this.url}/${karyawanId}/sertifikat/${sertifikatId}`, fd).pipe(map((d) => d?.sertifikat ?? d?.data ?? d));
  }
  deleteSertifikat(karyawanId, sertifikatId) {
    return this.http.delete(`${this.url}/${karyawanId}/sertifikat/${sertifikatId}`);
  }
  // ── Pengalaman Organisasi ─────────────────────────────────
  getPengalamanOrganisasi(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/pengalaman-organisasi`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.pengalamanOrganisasi ?? []), catchError(() => of([])));
  }
  addPengalamanOrganisasi(karyawanId, req) {
    return this.http.post(`${this.url}/${karyawanId}/pengalaman-organisasi`, req).pipe(map((d) => d?.pengalamanOrganisasi ?? d?.data ?? d));
  }
  updatePengalamanOrganisasi(karyawanId, organisasiId, req) {
    return this.http.put(`${this.url}/${karyawanId}/pengalaman-organisasi/${organisasiId}`, req).pipe(map((d) => d?.pengalamanOrganisasi ?? d?.data ?? d));
  }
  deletePengalamanOrganisasi(karyawanId, organisasiId) {
    return this.http.delete(`${this.url}/${karyawanId}/pengalaman-organisasi/${organisasiId}`);
  }
  // ── Kontak Darurat ────────────────────────────────────────
  getKontakDarurat(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/kontak-darurat`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.kontakDarurat ?? []), catchError(() => of([])));
  }
  addKontakDarurat(karyawanId, req) {
    return this.http.post(`${this.url}/${karyawanId}/kontak-darurat`, req).pipe(map((d) => d?.kontakDarurat ?? d?.data ?? d));
  }
  updateKontakDarurat(karyawanId, kontakId, req) {
    return this.http.put(`${this.url}/${karyawanId}/kontak-darurat/${kontakId}`, req).pipe(map((d) => d?.kontakDarurat ?? d?.data ?? d));
  }
  deleteKontakDarurat(karyawanId, kontakId) {
    return this.http.delete(`${this.url}/${karyawanId}/kontak-darurat/${kontakId}`);
  }
  // ── Pola Kerja Karyawan ───────────────────────────────────
  updatePolaKerja(karyawanId, polaKerjaId) {
    return this.http.put(`${this.url}/${karyawanId}/pola-kerja?polaKerjaId=${polaKerjaId}`, {});
  }
  // ── Perangkat Karyawan ────────────────────────────────────
  getPerangkat(karyawanId) {
    return this.http.get(`${this.url}/${karyawanId}/perangkat`).pipe(map((d) => Array.isArray(d) ? d : d?.data ?? d?.perangkat ?? []), catchError(() => of([])));
  }
  deletePerangkat(karyawanId, perangkatId) {
    return this.http.delete(`${this.url}/${karyawanId}/perangkat/${perangkatId}`);
  }
  // ── helper ────────────────────────────────────────────────
  buildFormData(req, foto) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    fd.append("foto", foto);
    return fd;
  }
  static {
    this.\u0275fac = function KaryawanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KaryawanService, factory: _KaryawanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  KaryawanService
};
//# sourceMappingURL=chunk-XASWB4SK.js.map
