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

// src/app/core/services/lokasi-kehadiran.service.ts
var LokasiKehadiranService = class _LokasiKehadiranService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/lokasi-kehadiran`;
  }
  findAll() {
    return this.http.get(this.url).pipe(map((d) => d?.lokasiKehadiran ?? d ?? []));
  }
  findById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(map((d) => d?.lokasiKehadiran ?? d));
  }
  create(req) {
    return this.http.post(this.url, req).pipe(map((d) => d?.lokasiKehadiran ?? d));
  }
  update(id, req) {
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d?.lokasiKehadiran ?? d));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  // ── Pengaturan ──
  getPengaturan() {
    return this.http.get(`${this.url}/pengaturan`).pipe(map((d) => d?.pengaturan ?? d));
  }
  updatePengaturan(req) {
    return this.http.put(`${this.url}/pengaturan`, req).pipe(map((d) => d?.pengaturan ?? d));
  }
  pesanKuota(kuota) {
    return this.http.post(`${this.url}/pesan-kuota`, { kuota }).pipe(map((d) => d?.pengaturan ?? d));
  }
  findRiwayat(id) {
    return this.http.get(`${this.url}/${id}/riwayat`).pipe(map((d) => d?.riwayat ?? d ?? []));
  }
  static {
    this.\u0275fac = function LokasiKehadiranService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LokasiKehadiranService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LokasiKehadiranService, factory: _LokasiKehadiranService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LokasiKehadiranService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LokasiKehadiranService
};
//# sourceMappingURL=chunk-5X7IVESH.js.map
