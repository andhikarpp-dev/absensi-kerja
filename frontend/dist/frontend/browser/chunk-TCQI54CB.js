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

// src/app/core/services/izin-hari.service.ts
var IzinHariService = class _IzinHariService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/izin-hari`;
  }
  getAll(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    if (opts?.filter)
      params = params.set("filter", opts.filter);
    return this.http.get(this.url(karyawanId), { params }).pipe(map((d) => d?.izinHari ?? []));
  }
  create(karyawanId, req, lampiran) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (lampiran)
      fd.append("lampiran", lampiran);
    return this.http.post(this.url(karyawanId), fd).pipe(map((d) => d.izinHari));
  }
  update(karyawanId, id, req, lampiran) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (lampiran)
      fd.append("lampiran", lampiran);
    return this.http.put(`${this.url(karyawanId)}/${id}`, fd).pipe(map((d) => d.izinHari));
  }
  updateStatus(karyawanId, id, status, catatanPenolakan) {
    return this.http.patch(`${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d.izinHari));
  }
  delete(karyawanId, id) {
    return this.http.delete(`${this.url(karyawanId)}/${id}`);
  }
  getRiwayat(karyawanId, izinHariId) {
    return this.http.get(`${this.url(karyawanId)}/${izinHariId}/riwayat`).pipe(map((d) => d?.riwayat ?? []));
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
    if (opts?.filter)
      params = params.set("filter", opts.filter);
    if (opts?.divisiId)
      params = params.set("divisiId", String(opts.divisiId));
    if (opts?.cari)
      params = params.set("cari", opts.cari);
    return this.http.get(`${environment.apiUrl}/izin-hari`, { params }).pipe(map((d) => ({ izinHari: d?.izinHari ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }
  updateStatusAdmin(id, status, catatanPenolakan) {
    return this.http.patch(`${environment.apiUrl}/izin-hari/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d?.izinHari));
  }
  deleteAdmin(id) {
    return this.http.delete(`${environment.apiUrl}/izin-hari/${id}`);
  }
  exportExcelAdmin(opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    return this.http.get(`${environment.apiUrl}/izin-hari/ekspor-excel`, { params, responseType: "blob" });
  }
  static {
    this.\u0275fac = function IzinHariService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IzinHariService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IzinHariService, factory: _IzinHariService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IzinHariService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  IzinHariService
};
//# sourceMappingURL=chunk-TCQI54CB.js.map
