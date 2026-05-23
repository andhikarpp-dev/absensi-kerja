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

// src/app/core/services/pola-kerja.service.ts
var PolaKerjaService = class _PolaKerjaService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/pola-kerja`;
  }
  findAll(kategori) {
    const qs = kategori ? `?kategori=${kategori}` : "";
    return this.http.get(`${this.url}/all${qs}`).pipe(map((d) => (Array.isArray(d) ? d : d?.polaKerja) ?? []), catchError(() => of([])));
  }
  findByDivisi(divisiId) {
    return this.http.get(`${this.url}?divisiId=${divisiId}`).pipe(map((d) => (Array.isArray(d) ? d : d?.polaKerja) ?? []), catchError(() => of([])));
  }
  create(req) {
    return this.http.post(this.url, req).pipe(map((d) => d?.polaKerja ?? d));
  }
  update(id, req) {
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d?.polaKerja ?? d));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  assignDivisi(id, divisiIds) {
    return this.http.post(`${this.url}/${id}/assign-divisi`, divisiIds).pipe(map((d) => d?.polaKerja ?? d));
  }
  unassignDivisi(polaId, divisiId) {
    return this.http.delete(`${this.url}/${polaId}/unassign-divisi/${divisiId}`).pipe(map((d) => d?.polaKerja ?? d));
  }
  /** Update satu hari jadwal (PUT /api/pola-kerja/hari/{hariId}) */
  updateHari(hariId, req) {
    return this.http.put(`${this.url}/hari/${hariId}`, req);
  }
  /** Hapus/reset jadwal satu hari (DELETE /api/pola-kerja/hari/{hariId}) */
  hapusHari(hariId) {
    return this.http.delete(`${this.url}/hari/${hariId}`);
  }
  static {
    this.\u0275fac = function PolaKerjaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolaKerjaService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PolaKerjaService, factory: _PolaKerjaService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolaKerjaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PolaKerjaService
};
//# sourceMappingURL=chunk-H2DAYQGM.js.map
