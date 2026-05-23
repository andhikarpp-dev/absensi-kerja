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

// src/app/core/services/surat-peringatan.service.ts
var SuratPeringatanService = class _SuratPeringatanService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/surat-peringatan`;
  }
  getAll(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.statusPersetujuan)
      params = params.set("statusPersetujuan", opts.statusPersetujuan);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    if (opts?.filter)
      params = params.set("filter", opts.filter);
    return this.http.get(this.url(karyawanId), { params }).pipe(map((d) => d?.suratPeringatan ?? []));
  }
  create(karyawanId, req, dokumen) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (dokumen)
      fd.append("dokumen", dokumen);
    return this.http.post(this.url(karyawanId), fd).pipe(map((d) => d.suratPeringatan));
  }
  update(karyawanId, id, req, dokumen) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (dokumen)
      fd.append("dokumen", dokumen);
    return this.http.put(`${this.url(karyawanId)}/${id}`, fd).pipe(map((d) => d.suratPeringatan));
  }
  updatePersetujuan(karyawanId, id, status, catatan) {
    return this.http.patch(`${this.url(karyawanId)}/${id}/persetujuan`, { status, catatan }).pipe(map((d) => d.suratPeringatan));
  }
  cabut(karyawanId, id) {
    return this.http.patch(`${this.url(karyawanId)}/${id}/cabut`, {}).pipe(map((d) => d.suratPeringatan));
  }
  delete(karyawanId, id) {
    return this.http.delete(`${this.url(karyawanId)}/${id}`);
  }
  exportExcel(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.statusPersetujuan)
      params = params.set("statusPersetujuan", opts.statusPersetujuan);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`, { params, responseType: "blob" });
  }
  static {
    this.\u0275fac = function SuratPeringatanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuratPeringatanService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuratPeringatanService, factory: _SuratPeringatanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuratPeringatanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/jenis-peringatan.service.ts
var JenisPeringatanService = class _JenisPeringatanService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/jenis-peringatan`;
  }
  getAll(aktifSaja = false) {
    let params = new HttpParams();
    if (aktifSaja)
      params = params.set("aktifSaja", "true");
    return this.http.get(this.url, { params }).pipe(map((d) => d?.jenisPeringatan ?? []));
  }
  create(req) {
    return this.http.post(this.url, req).pipe(map((d) => d.jenisPeringatan));
  }
  update(id, req) {
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d.jenisPeringatan));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function JenisPeringatanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JenisPeringatanService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JenisPeringatanService, factory: _JenisPeringatanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JenisPeringatanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SuratPeringatanService,
  JenisPeringatanService
};
//# sourceMappingURL=chunk-IQ7U3WDQ.js.map
