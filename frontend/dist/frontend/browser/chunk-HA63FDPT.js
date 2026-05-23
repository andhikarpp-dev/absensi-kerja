import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-OEINA6XM.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QLIULQP5.js";

// src/app/core/services/izin-jam.service.ts
var IzinJamService = class _IzinJamService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/izin-jam`;
  }
  getAll(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    return this.http.get(this.url(karyawanId), { params }).pipe(map((d) => d.izinJam ?? []));
  }
  create(karyawanId, req) {
    return this.http.post(this.url(karyawanId), req).pipe(map((d) => d.izinJam));
  }
  update(karyawanId, id, req) {
    return this.http.put(`${this.url(karyawanId)}/${id}`, req).pipe(map((d) => d.izinJam));
  }
  updateStatus(karyawanId, id, status, catatanPenolakan) {
    return this.http.patch(`${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d.izinJam));
  }
  delete(karyawanId, id) {
    return this.http.delete(`${this.url(karyawanId)}/${id}`);
  }
  getRiwayat(karyawanId, izinJamId) {
    return this.http.get(`${this.url(karyawanId)}/${izinJamId}/riwayat`).pipe(map((d) => d.riwayat ?? []));
  }
  exportExcel(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`, { params, responseType: "blob" });
  }
  // ── Admin / Pemilik overview ────────────────────────────────
  getAllAdmin(opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    if (opts?.divisiId != null)
      params = params.set("divisiId", String(opts.divisiId));
    if (opts?.cari)
      params = params.set("cari", opts.cari);
    if (opts?.dapatMengganti != null)
      params = params.set("dapatMengganti", String(opts.dapatMengganti));
    if (opts?.kenaPotong != null)
      params = params.set("kenaPotong", String(opts.kenaPotong));
    if (opts?.kenaDenda != null)
      params = params.set("kenaDenda", String(opts.kenaDenda));
    return this.http.get(`${environment.apiUrl}/izin-jam`, { params }).pipe(map((d) => ({ izinJam: d?.izinJam ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }
  updateStatusAdmin(id, status, catatanPenolakan) {
    return this.http.patch(`${environment.apiUrl}/izin-jam/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d?.izinJam));
  }
  deleteAdmin(id) {
    return this.http.delete(`${environment.apiUrl}/izin-jam/${id}`);
  }
  exportExcelAdmin(opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    if (opts?.divisiId != null)
      params = params.set("divisiId", String(opts.divisiId));
    if (opts?.cari)
      params = params.set("cari", opts.cari);
    if (opts?.dapatMengganti != null)
      params = params.set("dapatMengganti", String(opts.dapatMengganti));
    if (opts?.kenaPotong != null)
      params = params.set("kenaPotong", String(opts.kenaPotong));
    if (opts?.kenaDenda != null)
      params = params.set("kenaDenda", String(opts.kenaDenda));
    return this.http.get(`${environment.apiUrl}/izin-jam/ekspor-excel`, { params, responseType: "blob" });
  }
  static {
    this.\u0275fac = function IzinJamService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IzinJamService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IzinJamService, factory: _IzinJamService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IzinJamService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  IzinJamService
};
//# sourceMappingURL=chunk-HA63FDPT.js.map
