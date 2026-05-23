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

// src/app/core/services/absensi.service.ts
var AbsensiService = class _AbsensiService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/absensi`;
  }
  /** Status absensi hari ini */
  getHariIni() {
    return this.http.get(`${this.url}/hari-ini`).pipe(map((d) => d.absensi));
  }
  /** Riwayat absensi per bulan */
  getRiwayat(bulan, tahun) {
    return this.http.get(`${this.url}/riwayat?bulan=${bulan}&tahun=${tahun}`).pipe(map((d) => d.absensi ?? []));
  }
  /** Check-in dengan foto (multipart) + info perangkat browser + lokasi */
  checkIn(catatan, foto, lat, lng) {
    const fd = new FormData();
    if (catatan)
      fd.append("catatan", catatan);
    if (foto)
      fd.append("foto", foto, foto.name);
    if (lat != null)
      fd.append("lat", lat.toString());
    if (lng != null)
      fd.append("lng", lng.toString());
    const deviceInfo = this.getDeviceInfo();
    fd.append("deviceId", deviceInfo.deviceId);
    fd.append("namaPerangkat", deviceInfo.namaPerangkat);
    fd.append("modelPerangkat", deviceInfo.modelPerangkat);
    fd.append("manufaktur", deviceInfo.manufaktur);
    fd.append("platform", deviceInfo.platform);
    return this.http.post(`${this.url}/check-in`, fd).pipe(map((d) => d.absensi));
  }
  /** Ringkasan kehadiran karyawan tertentu (admin) */
  getRingkasanByKaryawan(karyawanId, bulan, tahun) {
    return this.http.get(`${this.url}/admin/karyawan/${karyawanId}/ringkasan?bulan=${bulan}&tahun=${tahun}`).pipe(map((d) => d.ringkasan));
  }
  /** Ambil info perangkat dari User-Agent browser */
  getDeviceInfo() {
    const ua = navigator.userAgent;
    let manufaktur = "Unknown";
    let modelPerangkat = "Unknown";
    let namaPerangkat = "Browser";
    let osPlatform = "Web";
    if (/Android/i.test(ua)) {
      const androidVer = (ua.match(/Android ([0-9.]+)/) || [])[1] || "";
      const modelMatch = ua.match(/Android [0-9.]+;\s*([^)]+)/);
      const model = modelMatch ? modelMatch[1].trim() : "Android Device";
      const cleanModel = model.replace(/\s*Build\/.*$/, "").trim();
      namaPerangkat = cleanModel;
      modelPerangkat = cleanModel;
      manufaktur = cleanModel.split(" ")[0].toUpperCase();
      osPlatform = `Android ${androidVer}`.trim();
    } else if (/iPhone/i.test(ua)) {
      const iosVer = (ua.match(/OS ([0-9_]+) like/) || [])[1]?.replace(/_/g, ".") || "";
      namaPerangkat = "iPhone";
      modelPerangkat = "iPhone";
      manufaktur = "APPLE";
      osPlatform = `iOS ${iosVer}`.trim();
    } else if (/iPad/i.test(ua)) {
      const iosVer = (ua.match(/OS ([0-9_]+) like/) || [])[1]?.replace(/_/g, ".") || "";
      namaPerangkat = "iPad";
      modelPerangkat = "iPad";
      manufaktur = "APPLE";
      osPlatform = `iPadOS ${iosVer}`.trim();
    } else if (/Windows/i.test(ua)) {
      const ntVer = (ua.match(/Windows NT ([0-9.]+)/) || [])[1] || "";
      const winVersion = {
        "10.0": "10/11",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "7",
        "6.0": "Vista"
      };
      const winLabel = winVersion[ntVer] ? `Windows ${winVersion[ntVer]}` : "Windows";
      const browser = this.detectBrowser(ua);
      namaPerangkat = `${winLabel} \u2014 ${browser}`;
      modelPerangkat = winLabel;
      manufaktur = "WINDOWS";
      osPlatform = winLabel;
    } else if (/Macintosh|MacIntel/i.test(ua)) {
      const macVer = (ua.match(/Mac OS X ([0-9_]+)/) || [])[1]?.replace(/_/g, ".") || "";
      const browser = this.detectBrowser(ua);
      namaPerangkat = `macOS ${macVer} \u2014 ${browser}`.trim();
      modelPerangkat = `macOS ${macVer}`.trim();
      manufaktur = "APPLE";
      osPlatform = `macOS ${macVer}`.trim();
    } else if (/Linux/i.test(ua)) {
      const browser = this.detectBrowser(ua);
      namaPerangkat = `Linux \u2014 ${browser}`;
      modelPerangkat = "Linux";
      manufaktur = "LINUX";
      osPlatform = "Linux";
    }
    let deviceId = localStorage.getItem("_absensi_device_id");
    if (!deviceId) {
      deviceId = "web-" + Math.random().toString(36).substring(2, 10) + "-" + Date.now().toString(36);
      localStorage.setItem("_absensi_device_id", deviceId);
    }
    return { deviceId, namaPerangkat, modelPerangkat, manufaktur, platform: osPlatform };
  }
  /** Deteksi nama browser dari User-Agent */
  detectBrowser(ua) {
    if (/Edg\//i.test(ua))
      return "Microsoft Edge";
    if (/OPR\//i.test(ua))
      return "Opera";
    if (/Brave\//i.test(ua))
      return "Brave";
    if (/Chrome\//i.test(ua))
      return "Chrome";
    if (/Firefox\//i.test(ua))
      return "Firefox";
    if (/Safari\//i.test(ua))
      return "Safari";
    return "Browser";
  }
  /** Check-out */
  checkOut(catatan, lat, lng) {
    const req = { catatan, lat, lng };
    return this.http.post(`${this.url}/check-out`, req).pipe(map((d) => d.absensi));
  }
  // ── Admin endpoints ──────────────────────────────────────
  /** Kehadiran semua karyawan pada tanggal tertentu (admin) */
  getKehadiranHarian(tanggal) {
    return this.http.get(`${this.url}/admin/harian?tanggal=${tanggal}`).pipe(map((d) => d.absensi ?? []));
  }
  /** Riwayat absensi karyawan tertentu (admin) */
  getRiwayatByKaryawan(karyawanId, bulan, tahun) {
    return this.http.get(`${this.url}/admin/karyawan/${karyawanId}?bulan=${bulan}&tahun=${tahun}`).pipe(map((d) => d.absensi ?? []));
  }
  /** Tambah presensi manual (admin) */
  tambahManual(karyawanId, params) {
    const p = new URLSearchParams();
    p.set("tanggal", params.tanggal);
    p.set("tipePresensi", params.tipePresensi);
    if (params.waktuMulai)
      p.set("waktuMulai", params.waktuMulai);
    if (params.waktuSelesai)
      p.set("waktuSelesai", params.waktuSelesai);
    if (params.catatan)
      p.set("catatan", params.catatan);
    return this.http.post(`${this.url}/admin/karyawan/${karyawanId}/tambah?${p.toString()}`, {}).pipe(map((d) => d.absensi));
  }
  /** Batalkan presensi — admin (DELETE) */
  batalkanPresensi(absensiId) {
    return this.http.delete(`${this.url}/admin/${absensiId}`);
  }
  /** Ubah waktu presensi — admin (PUT) */
  ubahWaktuPresensi(absensiId, jamMasuk, jamKeluar) {
    const p = new URLSearchParams();
    if (jamMasuk != null)
      p.set("jamMasuk", jamMasuk);
    if (jamKeluar != null)
      p.set("jamKeluar", jamKeluar);
    return this.http.put(`${this.url}/admin/${absensiId}/waktu?${p.toString()}`, {}).pipe(map((d) => d.absensi));
  }
  /** Ringkasan kehadiran semua karyawan (admin) */
  getRingkasanSemua(params) {
    const p = new URLSearchParams();
    if (params.dari)
      p.set("dari", params.dari);
    if (params.sampai)
      p.set("sampai", params.sampai);
    if (params.divisiId)
      p.set("divisiId", params.divisiId.toString());
    if (params.cari)
      p.set("cari", params.cari);
    return this.http.get(`${this.url}/admin/ringkasan?${p.toString()}`).pipe(map((d) => d.ringkasan ?? []));
  }
  // ── Review Kehadiran ──────────────────────────────────────
  /** Daftar presensi perlu dicek */
  getReviewPerluDicek(divisiId, cari) {
    const p = new URLSearchParams();
    if (divisiId)
      p.set("divisiId", divisiId.toString());
    if (cari)
      p.set("cari", cari);
    return this.http.get(`${this.url}/admin/review/perlu-dicek?${p.toString()}`).pipe(map((d) => d.absensi ?? []));
  }
  /** Daftar presensi sudah dicek */
  getReviewSudahDicek(divisiId, cari) {
    const p = new URLSearchParams();
    if (divisiId)
      p.set("divisiId", divisiId.toString());
    if (cari)
      p.set("cari", cari);
    return this.http.get(`${this.url}/admin/review/sudah-dicek?${p.toString()}`).pipe(map((d) => d.absensi ?? []));
  }
  /** Tandai satu presensi sudah dicek */
  tandaiSudahDicek(absensiId) {
    return this.http.patch(`${this.url}/admin/review/${absensiId}/tandai-dicek`, {}).pipe(map((d) => d.absensi));
  }
  /** Tandai semua presensi perlu dicek sebagai sudah dicek */
  tandaiSemuaSudahDicek(divisiId) {
    const p = new URLSearchParams();
    if (divisiId)
      p.set("divisiId", divisiId.toString());
    return this.http.patch(`${this.url}/admin/review/tandai-semua-dicek?${p.toString()}`, {});
  }
  /** Ekspor Excel tanggal tertentu — download file langsung */
  eksporHarian(params) {
    const p = new URLSearchParams();
    p.set("tanggal", params.tanggal);
    if (params.divisiId)
      p.set("divisiId", params.divisiId);
    if (params.lokasiId)
      p.set("lokasiId", params.lokasiId);
    if (params.karyawanId)
      p.set("karyawanId", params.karyawanId.toString());
    if (params.format)
      p.set("format", params.format);
    if (params.kolom?.length)
      params.kolom.forEach((k) => p.append("kolom", k));
    return this.http.get(`${this.url}/admin/ekspor/harian?${p.toString()}`, {
      responseType: "blob"
    });
  }
  /** Ekspor Excel rentang waktu — download file langsung */
  eksporRentang(params) {
    const p = new URLSearchParams();
    p.set("dari", params.dari);
    p.set("sampai", params.sampai);
    if (params.divisiId)
      p.set("divisiId", params.divisiId);
    if (params.karyawanId)
      p.set("karyawanId", params.karyawanId.toString());
    if (params.format)
      p.set("format", params.format);
    if (params.kolom?.length)
      params.kolom.forEach((k) => p.append("kolom", k));
    return this.http.get(`${this.url}/admin/ekspor/rentang?${p.toString()}`, {
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function AbsensiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbsensiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AbsensiService, factory: _AbsensiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbsensiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AbsensiService
};
//# sourceMappingURL=chunk-ZRLBCAEX.js.map
