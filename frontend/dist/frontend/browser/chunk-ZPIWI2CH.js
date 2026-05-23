import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  HttpClient
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

// src/app/core/services/divisi.service.ts
var DivisiService = class _DivisiService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/divisi`;
  }
  findAll() {
    return this.http.get(this.url).pipe(map((d) => (Array.isArray(d) ? d : d?.divisi) ?? []), catchError((err) => {
      console.error("[DivisiService] findAll:", err);
      return of([]);
    }));
  }
  findById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(map((d) => d?.divisi ?? d));
  }
  create(req) {
    return this.http.post(this.url, req).pipe(map((d) => d?.divisi ?? d));
  }
  update(id, req) {
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d?.divisi ?? d));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  findRiwayat(id) {
    return this.http.get(`${this.url}/${id}/riwayat`).pipe(map((d) => d?.riwayat ?? []));
  }
  imporSupervisor(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.url}/impor-supervisor`, form).pipe(map((d) => d?.hasil ?? d));
  }
  downloadTemplateSupervisor() {
    this.http.get(`${this.url}/template-supervisor`, { responseType: "blob" }).subscribe((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "format-impor-supervisor-divisi.xlsx";
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
  eksporDivisi() {
    this.http.get(`${this.url}/ekspor`, { responseType: "blob" }).subscribe((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "data-divisi.xlsx";
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
  static {
    this.\u0275fac = function DivisiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DivisiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DivisiService, factory: _DivisiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DivisiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DivisiService
};
//# sourceMappingURL=chunk-ZPIWI2CH.js.map
