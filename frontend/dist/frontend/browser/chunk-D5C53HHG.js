import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  HttpClient
} from "./chunk-OEINA6XM.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QLIULQP5.js";

// src/app/core/services/jabatan.service.ts
var JabatanService = class _JabatanService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/jabatan`;
  }
  findAll() {
    return this.http.get(this.url).pipe(map((d) => (Array.isArray(d) ? d : d?.jabatan) ?? []));
  }
  findById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(map((d) => d?.jabatan ?? d));
  }
  create(req) {
    return this.http.post(this.url, req).pipe(map((d) => d?.jabatan ?? d));
  }
  update(id, req) {
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d?.jabatan ?? d));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function JabatanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JabatanService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JabatanService, factory: _JabatanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JabatanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  JabatanService
};
//# sourceMappingURL=chunk-D5C53HHG.js.map
