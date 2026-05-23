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

// src/app/core/services/cuti.service.ts
var CutiService = class _CutiService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/cuti`;
    this.adminUrl = `${environment.apiUrl}/cuti`;
    this.laporanUrl = `${environment.apiUrl}/cuti/laporan`;
  }
  getAll(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.jenis)
      params = params.set("jenis", opts.jenis);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    if (opts?.filter)
      params = params.set("filter", opts.filter);
    return this.http.get(this.url(karyawanId), { params }).pipe(map((d) => d?.cuti ?? []));
  }
  /** Admin: semua cuti lintas karyawan */
  getAllAdmin(opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.jenis)
      params = params.set("jenis", opts.jenis);
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
    return this.http.get(this.adminUrl, { params }).pipe(map((d) => ({ cuti: d?.cuti ?? [], totalMenunggu: d?.totalMenunggu ?? 0 })));
  }
  updateStatusAdmin(id, status, catatanPenolakan) {
    return this.http.patch(`${this.adminUrl}/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d.cuti));
  }
  deleteAdmin(id) {
    return this.http.delete(`${this.adminUrl}/${id}`);
  }
  exportExcelAdmin(opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.jenis)
      params = params.set("jenis", opts.jenis);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    return this.http.get(`${this.adminUrl}/ekspor-excel`, { params, responseType: "blob" });
  }
  create(karyawanId, req, lampiran) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (lampiran)
      fd.append("lampiran", lampiran);
    return this.http.post(this.url(karyawanId), fd).pipe(map((d) => d.cuti));
  }
  update(karyawanId, id, req, lampiran) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (lampiran)
      fd.append("lampiran", lampiran);
    return this.http.put(`${this.url(karyawanId)}/${id}`, fd).pipe(map((d) => d.cuti));
  }
  updateStatus(karyawanId, id, status, catatanPenolakan) {
    return this.http.patch(`${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d.cuti));
  }
  delete(karyawanId, id) {
    return this.http.delete(`${this.url(karyawanId)}/${id}`);
  }
  getRiwayat(karyawanId, id) {
    return this.http.get(`${this.url(karyawanId)}/${id}/riwayat`).pipe(map((d) => d?.riwayat ?? []));
  }
  getSisa(karyawanId) {
    return this.http.get(`${this.url(karyawanId)}/sisa`).pipe(map((d) => d.sisaCuti));
  }
  updateSisa(karyawanId, req) {
    return this.http.patch(`${this.url(karyawanId)}/sisa`, req).pipe(map((d) => d.sisaCuti));
  }
  /** Jalankan scheduler pembaruan otomatis secara manual untuk testing/admin. */
  triggerPembaruan(karyawanId) {
    return this.http.post(`${this.url(karyawanId)}/sisa/trigger-pembaruan`, {}).pipe(map((d) => ({ applied: d.applied, sisaCuti: d.sisaCuti })));
  }
  exportExcel(karyawanId, opts) {
    let params = new HttpParams();
    if (opts?.status)
      params = params.set("status", opts.status);
    if (opts?.jenis)
      params = params.set("jenis", opts.jenis);
    if (opts?.from)
      params = params.set("from", opts.from);
    if (opts?.to)
      params = params.set("to", opts.to);
    return this.http.get(`${this.url(karyawanId)}/ekspor-excel`, { params, responseType: "blob" });
  }
  getLaporanKaryawan(opts) {
    let params = new HttpParams();
    if (opts?.divisiId)
      params = params.set("divisiId", String(opts.divisiId));
    if (opts?.jabatanId)
      params = params.set("jabatanId", String(opts.jabatanId));
    if (opts?.cari)
      params = params.set("cari", opts.cari);
    return this.http.get(this.laporanUrl, { params }).pipe(map((d) => d?.karyawan ?? []));
  }
  getLaporanSisa(karyawanId) {
    return this.http.get(`${this.laporanUrl}/${karyawanId}/sisa`).pipe(map((d) => d?.sisaCuti ?? d));
  }
  updateLaporanSisa(karyawanId, req) {
    return this.http.patch(`${this.laporanUrl}/${karyawanId}/sisa`, req).pipe(map((d) => d?.sisaCuti ?? d));
  }
  getRiwayatTransaksi(karyawanId) {
    return this.http.get(`${this.laporanUrl}/${karyawanId}/riwayat-transaksi`).pipe(map((d) => d?.riwayat ?? []));
  }
  static {
    this.\u0275fac = function CutiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CutiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CutiService, factory: _CutiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CutiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CutiService
};
//# sourceMappingURL=chunk-YPNFP5NB.js.map
