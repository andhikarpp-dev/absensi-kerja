import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  FormsModule
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  HttpParams,
  NgClass
} from "./chunk-OEINA6XM.js";
import {
  Component,
  Injectable,
  computed,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/services/klaim.service.ts
var KlaimService = class _KlaimService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/klaim`;
  }
  getAll(karyawanId, status) {
    let params = new HttpParams();
    if (status)
      params = params.set("status", status);
    return this.http.get(this.url(karyawanId), { params }).pipe(map((d) => d?.klaim ?? []));
  }
  getById(karyawanId, id) {
    return this.http.get(`${this.url(karyawanId)}/${id}`).pipe(map((d) => d.klaim));
  }
  create(karyawanId, req, lampiran) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (lampiran)
      fd.append("lampiran", lampiran);
    return this.http.post(this.url(karyawanId), fd).pipe(map((d) => d.klaim));
  }
  update(karyawanId, id, req, lampiran) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (lampiran)
      fd.append("lampiran", lampiran);
    return this.http.put(`${this.url(karyawanId)}/${id}`, fd).pipe(map((d) => d.klaim));
  }
  updateStatus(karyawanId, id, status, catatanPenolakan) {
    return this.http.patch(`${this.url(karyawanId)}/${id}/status`, { status, catatanPenolakan }).pipe(map((d) => d.klaim));
  }
  delete(karyawanId, id) {
    return this.http.delete(`${this.url(karyawanId)}/${id}`);
  }
  getRiwayat(karyawanId, id) {
    return this.http.get(`${this.url(karyawanId)}/${id}/riwayat`).pipe(map((d) => d?.riwayat ?? []));
  }
  static {
    this.\u0275fac = function KlaimService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KlaimService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KlaimService, factory: _KlaimService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KlaimService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/karyawan/karyawan-klaim/karyawan-klaim.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
var arrowFn0 = (ctx, view) => (s, i) => s + i.jumlah;
function KaryawanKlaimComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.karyawan().namaLengkap);
  }
}
function KaryawanKlaimComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTambah());
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2, " Tambah Klaim ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function KaryawanKlaimComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Memuat data\u2026");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Aksi");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const k_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetail(k_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r5.itemPengeluaran.length, " item \u2014 lihat detail ");
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, "Lihat ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.lampiranHref(k_r5.lampiranUrl), \u0275\u0275sanitizeUrl);
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(k_r5));
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTolak(k_r5));
    });
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(k_r5));
    });
    \u0275\u0275element(5, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 42);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete(k_r5.id));
    });
    \u0275\u0275element(7, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRiwayat(k_r5));
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2, "Riwayat ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openBatalkan(k_r5));
    });
    \u0275\u0275element(4, "i", 47);
    \u0275\u0275text(5, "Batalkan ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(k_r5));
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 42);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const k_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete(k_r5.id));
    });
    \u0275\u0275element(3, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "div", 35);
    \u0275\u0275conditionalCreate(2, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_2_Template, 8, 0);
    \u0275\u0275conditionalCreate(3, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_3_Template, 6, 0);
    \u0275\u0275conditionalCreate(4, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Conditional_4_Template, 4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r5.status === "MENUNGGU" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r5.status === "DISETUJUI" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r5.status === "DITOLAK" ? 4 : -1);
  }
}
function KaryawanKlaimComponent_Conditional_24_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_8_Template, 2, 1, "button", 28)(9, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_9_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 29)(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_14_Template, 3, 1, "a", 31)(15, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_15_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, KaryawanKlaimComponent_Conditional_24_For_19_Conditional_16_Template, 5, 3, "td", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.labelJenis(k_r5.jenisKlaim), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(k_r5.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(k_r5.nominal));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r5.itemPengeluaran.length ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275interpolate(k_r5.keterangan));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r5.keterangan || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r5.lampiranUrl ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isKaryawan() ? 16 : -1);
  }
}
function KaryawanKlaimComponent_Conditional_24_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, " Tidak ada data klaim. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("colSpan", ctx_r0.isKaryawan() ? 6 : 7);
  }
}
function KaryawanKlaimComponent_Conditional_24_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "button", 49);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_For_30_Template_button_click_1_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.page.set(p_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.page() === p_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10);
  }
}
function KaryawanKlaimComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 17)(2, "thead", 18)(3, "tr", 19)(4, "th", 20);
    \u0275\u0275text(5, "Jenis Klaim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 20);
    \u0275\u0275text(7, "Tgl. Pengajuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 20);
    \u0275\u0275text(9, "Jumlah Pengajuan (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 20);
    \u0275\u0275text(11, "Detail Pengeluaran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 20);
    \u0275\u0275text(13, "Deskripsi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 20);
    \u0275\u0275text(15, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, KaryawanKlaimComponent_Conditional_24_Conditional_16_Template, 2, 0, "th", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, KaryawanKlaimComponent_Conditional_24_For_19_Template, 17, 9, "tr", null, _forTrack0, false, KaryawanKlaimComponent_Conditional_24_ForEmpty_20_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 22)(22, "span", 2);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nav")(25, "ul", 23)(26, "li", 24)(27, "button", 25);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.page.set(1));
    });
    \u0275\u0275text(28, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(29, KaryawanKlaimComponent_Conditional_24_For_30_Template, 3, 3, "li", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(31, "li", 24)(32, "button", 25);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_24_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.page.set(ctx_r0.totalPages()));
    });
    \u0275\u0275text(33, "\xBB");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275conditional(!ctx_r0.isKaryawan() ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.rows());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Menampilkan ", ctx_r0.infoStart(), " dari ", ctx_r0.total(), " total data ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.page() === ctx_r0.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page() === ctx_r0.totalPages());
  }
}
function KaryawanKlaimComponent_Conditional_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorForm());
  }
}
function KaryawanKlaimComponent_Conditional_25_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_25_For_17_Template_button_click_0_listener() {
      const opt_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.set(__spreadProps(__spreadValues({}, ctx_r0.form()), { jenisKlaim: opt_r13.value })));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-primary", ctx_r0.form().jenisKlaim === opt_r13.value)("btn-outline-secondary", ctx_r0.form().jenisKlaim !== opt_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r13.label, " ");
  }
}
function KaryawanKlaimComponent_Conditional_25_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "input", 81);
    \u0275\u0275listener("input", function KaryawanKlaimComponent_Conditional_25_For_36_Template_input_input_1_listener($event) {
      const $index_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateItem($index_r15, "keterangan", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 82)(3, "span", 64);
    \u0275\u0275text(4, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 83);
    \u0275\u0275listener("input", function KaryawanKlaimComponent_Conditional_25_For_36_Template_input_input_5_listener($event) {
      const $index_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateItem($index_r15, "jumlah", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 84);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_25_For_36_Template_button_click_6_listener() {
      const $index_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeItem($index_r15));
    });
    \u0275\u0275element(7, "i", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r16.keterangan);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", item_r16.jumlah);
  }
}
function KaryawanKlaimComponent_Conditional_25_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.lampiranNama());
  }
}
function KaryawanKlaimComponent_Conditional_25_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function KaryawanKlaimComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 50)(2, "div", 51)(3, "div", 52)(4, "h5", 53);
    \u0275\u0275element(5, "i", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56);
    \u0275\u0275conditionalCreate(9, KaryawanKlaimComponent_Conditional_25_Conditional_9_Template, 2, 1, "div", 57);
    \u0275\u0275elementStart(10, "div", 58)(11, "label", 59);
    \u0275\u0275text(12, "Pilih Jenis Klaim ");
    \u0275\u0275elementStart(13, "span", 60);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61);
    \u0275\u0275repeaterCreate(16, KaryawanKlaimComponent_Conditional_25_For_17_Template, 2, 5, "button", 62, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 58)(19, "label", 59);
    \u0275\u0275text(20, "Jumlah Nominal Klaim (Rp) ");
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 63)(24, "span", 64);
    \u0275\u0275text(25, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 65);
    \u0275\u0275listener("input", function KaryawanKlaimComponent_Conditional_25_Template_input_input_26_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.set(__spreadProps(__spreadValues({}, ctx_r0.form()), { nominal: +$event.target.value })));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 58)(28, "div", 66)(29, "label", 67);
    \u0275\u0275text(30, "Detail Pengeluaran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 68);
    \u0275\u0275text(32, " Total: ");
    \u0275\u0275elementStart(33, "strong", 69);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(35, KaryawanKlaimComponent_Conditional_25_For_36_Template, 8, 2, "div", 70, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(37, "button", 71);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_25_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addItem());
    });
    \u0275\u0275element(38, "i", 15);
    \u0275\u0275text(39, " Tambah Pengeluaran ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 58)(41, "label", 59);
    \u0275\u0275text(42, "Keterangan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 72);
    \u0275\u0275listener("input", function KaryawanKlaimComponent_Conditional_25_Template_textarea_input_43_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.set(__spreadProps(__spreadValues({}, ctx_r0.form()), { keterangan: $event.target.value })));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 73)(45, "label", 59);
    \u0275\u0275text(46, "Upload File Lampiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 74);
    \u0275\u0275listener("change", function KaryawanKlaimComponent_Conditional_25_Template_input_change_47_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLampiranChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, KaryawanKlaimComponent_Conditional_25_Conditional_48_Template, 3, 1, "div", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 76)(50, "button", 77);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_25_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(51, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 78);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_25_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveForm());
    });
    \u0275\u0275conditionalCreate(53, KaryawanKlaimComponent_Conditional_25_Conditional_53_Template, 1, 0, "span", 79);
    \u0275\u0275text(54, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editId() ? "Edit Klaim" : "Tambah Klaim", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.errorForm() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.jenisKlaimOptions);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r0.form().nominal);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(ctx_r0.totalPengeluaran()));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.items);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.form().keterangan);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.lampiranNama() ? 48 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 53 : -1);
  }
}
function KaryawanKlaimComponent_Conditional_26_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 92)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const \u0275$index_350_r19 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_350_r19 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r18.keterangan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(item_r18.jumlah));
  }
}
function KaryawanKlaimComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 86)(2, "div", 51)(3, "div", 52)(4, "h5", 53);
    \u0275\u0275element(5, "i", 87);
    \u0275\u0275text(6, " Detail Pengeluaran ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 88)(9, "table", 89)(10, "thead")(11, "tr", 90)(12, "th");
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Keterangan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 91);
    \u0275\u0275text(17, "Jumlah");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, KaryawanKlaimComponent_Conditional_26_For_20_Template, 7, 3, "tr", 92, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr", 27)(23, "td", 93);
    \u0275\u0275text(24, "Total Pengeluaran:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 91);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 76)(28, "button", 77);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_26_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275text(29, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.detailItem().itemPengeluaran);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatRp(ctx_r0.detailItem().itemPengeluaran.reduce(\u0275\u0275arrowFunction(1, arrowFn0, ctx), 0)), " ");
  }
}
function KaryawanKlaimComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 86)(2, "div", 51)(3, "div", 52)(4, "h5", 94);
    \u0275\u0275element(5, "i", 95);
    \u0275\u0275text(6, "Tolak Klaim ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTolak());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 88)(9, "label", 96);
    \u0275\u0275text(10, "Catatan Penolakan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 97);
    \u0275\u0275listener("input", function KaryawanKlaimComponent_Conditional_27_Template_textarea_input_11_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.catatanTolak.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 98)(13, "button", 77);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_27_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTolak());
    });
    \u0275\u0275text(14, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 99);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_27_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitTolak());
    });
    \u0275\u0275text(16, "Tolak");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r0.catatanTolak());
  }
}
function KaryawanKlaimComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 86)(2, "div", 51)(3, "div", 52)(4, "h5", 94);
    \u0275\u0275element(5, "i", 100);
    \u0275\u0275text(6, "Hapus Klaim?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 101);
    \u0275\u0275text(8, " Data klaim ini akan dihapus permanen. Tindakan ini tidak dapat dibatalkan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 98)(10, "button", 77);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_28_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 99);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_28_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.doDelete());
    });
    \u0275\u0275element(13, "i", 102);
    \u0275\u0275text(14, " Ya, Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "span", 108);
    \u0275\u0275text(2, "Memuat riwayat\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 112);
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 113);
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 114);
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 115);
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r23.keterangan);
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "div", 111);
    \u0275\u0275conditionalCreate(3, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_3_Template, 1, 0, "i", 112)(4, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_4_Template, 1, 0, "i", 41)(5, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_5_Template, 1, 0, "i", 113)(6, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_6_Template, 1, 0, "i", 114)(7, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_7_Template, 1, 0, "i", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 116)(9, "div", 117)(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 2);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Conditional_14_Template, 2, 1, "div", 118);
    \u0275\u0275elementStart(15, "small", 2);
    \u0275\u0275element(16, "i", 119);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r23 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.badgeClass(r_r23.tipe));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r23.tipe === "DIBUAT" ? 3 : r_r23.tipe === "DIUBAH" ? 4 : r_r23.tipe === "STATUS_DISETUJUI" ? 5 : r_r23.tipe === "STATUS_DITOLAK" ? 6 : 7);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.labelTipe(r_r23.tipe));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(r_r23.changedAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r23.keterangan ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r23.changedBy || "sistem", " ");
  }
}
function KaryawanKlaimComponent_Conditional_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275repeaterCreate(1, KaryawanKlaimComponent_Conditional_29_Conditional_11_For_2_Template, 18, 6, "div", 109, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.riwayatList());
  }
}
function KaryawanKlaimComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 103)(2, "div", 51)(3, "div", 52)(4, "h5", 53);
    \u0275\u0275element(5, "i", 104);
    \u0275\u0275text(6, "Riwayat Perubahan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56);
    \u0275\u0275conditionalCreate(9, KaryawanKlaimComponent_Conditional_29_Conditional_9_Template, 3, 0, "div", 105)(10, KaryawanKlaimComponent_Conditional_29_Conditional_10_Template, 2, 0, "div", 106)(11, KaryawanKlaimComponent_Conditional_29_Conditional_11_Template, 3, 0, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 76)(13, "button", 77);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_29_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRiwayat());
    });
    \u0275\u0275text(14, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.riwayatLoading() ? 9 : ctx_r0.riwayatList().length === 0 ? 10 : 11);
  }
}
function KaryawanKlaimComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 86)(2, "div", 51)(3, "div", 52)(4, "h5", 120);
    \u0275\u0275element(5, "i", 121);
    \u0275\u0275text(6, "Batalkan Persetujuan Klaim ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBatalkan());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 88)(9, "div", 122);
    \u0275\u0275element(10, "i", 123);
    \u0275\u0275text(11, " Status klaim akan dikembalikan menjadi ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Menunggu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " dan alasan pembatalan akan dicatat di riwayat perubahan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 96);
    \u0275\u0275text(16, " Alasan Pembatalan ");
    \u0275\u0275elementStart(17, "span", 60);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "textarea", 124);
    \u0275\u0275listener("input", function KaryawanKlaimComponent_Conditional_30_Template_textarea_input_19_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.catatanBatalkan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 98)(21, "button", 77);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_30_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBatalkan());
    });
    \u0275\u0275text(22, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 125);
    \u0275\u0275listener("click", function KaryawanKlaimComponent_Conditional_30_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitBatalkan());
    });
    \u0275\u0275element(24, "i", 47);
    \u0275\u0275text(25, "Batalkan Persetujuan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("value", ctx_r0.catatanBatalkan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.catatanBatalkan().trim());
  }
}
var KaryawanKlaimComponent = class _KaryawanKlaimComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.auth = inject(AuthService);
    this.karyawanSvc = inject(KaryawanService);
    this.klaimSvc = inject(KlaimService);
    this.karyawanId = 0;
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isKaryawan = computed(() => this.auth.currentUser()?.role === "KARYAWAN", ...ngDevMode ? [{ debugName: "isKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusTab = signal("PENGAJUAN", ...ngDevMode ? [{ debugName: "statusTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterMulai = signal("", ...ngDevMode ? [{ debugName: "filterMulai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterSelesai = signal("", ...ngDevMode ? [{ debugName: "filterSelesai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.total = computed(() => this.filteredList().length, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = computed(() => {
      const start = (this.page() - 1) * this.pageSize();
      return this.filteredList().slice(start, start + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.infoStart = computed(() => this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "infoStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.infoEnd = computed(() => Math.min(this.page() * this.pageSize(), this.total()), ...ngDevMode ? [{ debugName: "infoEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => {
      const total = this.totalPages();
      const cur = this.page();
      const arr = [];
      for (let p = Math.max(1, cur - 2); p <= Math.min(total, cur + 2); p++)
        arr.push(p);
      return arr;
    }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredList = computed(() => {
      let data = this.list();
      const tab = this.statusTab();
      if (tab === "PENGAJUAN")
        data = data.filter((k) => k.status === "MENUNGGU");
      else if (tab === "DISETUJUI")
        data = data.filter((k) => k.status === "DISETUJUI");
      else if (tab === "DITOLAK")
        data = data.filter((k) => k.status === "DITOLAK");
      const from = this.filterMulai();
      const to = this.filterSelesai();
      if (from)
        data = data.filter((k) => k.createdAt && k.createdAt >= from);
      if (to)
        data = data.filter((k) => k.createdAt && k.createdAt.substring(0, 10) <= to);
      return data;
    }, ...ngDevMode ? [{ debugName: "filteredList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showFormModal = signal(false, ...ngDevMode ? [{ debugName: "showFormModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editId = signal(null, ...ngDevMode ? [{ debugName: "editId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorForm = signal("", ...ngDevMode ? [{ debugName: "errorForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lampiranFile = null;
    this.lampiranNama = signal("", ...ngDevMode ? [{ debugName: "lampiranNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = signal({
      jenisKlaim: "OPERASIONAL",
      nominal: 0,
      keterangan: "",
      itemPengeluaran: []
    }, ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisKlaimOptions = [
      { value: "OPERASIONAL", label: "Operasional" },
      { value: "INVOICE_TAGIHAN", label: "Invoice / Billing / Tagihan" },
      { value: "CASHBACK", label: "Cashback" },
      { value: "REIMBURSEMENT", label: "Reimbursement" }
    ];
    this.showDetailModal = signal(false, ...ngDevMode ? [{ debugName: "showDetailModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailItem = signal(null, ...ngDevMode ? [{ debugName: "detailItem" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTolakModal = signal(false, ...ngDevMode ? [{ debugName: "showTolakModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakId = signal(null, ...ngDevMode ? [{ debugName: "tolakId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.catatanTolak = signal("", ...ngDevMode ? [{ debugName: "catatanTolak" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatList = signal([], ...ngDevMode ? [{ debugName: "riwayatList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatLoading = signal(false, ...ngDevMode ? [{ debugName: "riwayatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatTarget = signal(null, ...ngDevMode ? [{ debugName: "riwayatTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBatalkanModal = signal(false, ...ngDevMode ? [{ debugName: "showBatalkanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.batalkanTarget = signal(null, ...ngDevMode ? [{ debugName: "batalkanTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.catatanBatalkan = signal("", ...ngDevMode ? [{ debugName: "catatanBatalkan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.apiBase = environment.apiUrl.replace("/api", "");
    this.totalPengeluaran = computed(() => this.form().itemPengeluaran.reduce((s, it) => s + (+it.jumlah || 0), 0), ...ngDevMode ? [{ debugName: "totalPengeluaran" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // ─────────────────────────────────────────────────────────────────
  ngOnInit() {
    this.karyawanId = +this.route.snapshot.paramMap.get("id");
    this.karyawanSvc.findById(this.karyawanId).subscribe({
      next: (k) => this.karyawan.set(k),
      error: () => {
      }
    });
    this.loadList();
  }
  loadList() {
    this.loading.set(true);
    this.klaimSvc.getAll(this.karyawanId).subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Gagal memuat data klaim.");
        this.loading.set(false);
      }
    });
  }
  setTab(tab) {
    this.statusTab.set(tab);
    this.page.set(1);
  }
  // ── Item Pengeluaran ─────────────────────────────────────────────
  get items() {
    return this.form().itemPengeluaran;
  }
  addItem() {
    const f = __spreadValues({}, this.form());
    f.itemPengeluaran = [...f.itemPengeluaran, { keterangan: "", jumlah: 0 }];
    this.recalcNominal(f);
    this.form.set(f);
  }
  removeItem(i) {
    const f = __spreadValues({}, this.form());
    f.itemPengeluaran = f.itemPengeluaran.filter((_, idx) => idx !== i);
    this.recalcNominal(f);
    this.form.set(f);
  }
  updateItem(i, field, value) {
    const f = __spreadValues({}, this.form());
    const items = [...f.itemPengeluaran];
    items[i] = __spreadProps(__spreadValues({}, items[i]), { [field]: field === "jumlah" ? +value : value });
    f.itemPengeluaran = items;
    this.recalcNominal(f);
    this.form.set(f);
  }
  recalcNominal(f) {
    if (f.itemPengeluaran.length > 0) {
      f.nominal = f.itemPengeluaran.reduce((s, it) => s + (+it.jumlah || 0), 0);
    }
  }
  // ── Form Modal ──────────────────────────────────────────────────
  openTambah() {
    this.editId.set(null);
    this.form.set({ jenisKlaim: "OPERASIONAL", nominal: 0, keterangan: "", itemPengeluaran: [] });
    this.lampiranFile = null;
    this.lampiranNama.set("");
    this.errorForm.set("");
    this.showFormModal.set(true);
  }
  openEdit(klaim) {
    this.editId.set(klaim.id);
    this.form.set({
      jenisKlaim: klaim.jenisKlaim,
      nominal: klaim.nominal,
      keterangan: klaim.keterangan ?? "",
      itemPengeluaran: klaim.itemPengeluaran.map((i) => ({ keterangan: i.keterangan, jumlah: i.jumlah }))
    });
    this.lampiranFile = null;
    this.lampiranNama.set("");
    this.errorForm.set("");
    this.showFormModal.set(true);
  }
  closeForm() {
    this.showFormModal.set(false);
  }
  onLampiranChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      this.lampiranFile = file;
      this.lampiranNama.set(file.name);
    }
  }
  saveForm() {
    const f = this.form();
    if (!f.jenisKlaim) {
      this.errorForm.set("Pilih jenis klaim.");
      return;
    }
    if (f.nominal <= 0) {
      this.errorForm.set("Nominal harus lebih dari 0.");
      return;
    }
    this.saving.set(true);
    this.errorForm.set("");
    const obs = this.editId() ? this.klaimSvc.update(this.karyawanId, this.editId(), f, this.lampiranFile ?? void 0) : this.klaimSvc.create(this.karyawanId, f, this.lampiranFile ?? void 0);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.closeForm();
        this.loadList();
      },
      error: (err) => {
        this.saving.set(false);
        this.errorForm.set(err?.error?.message ?? "Gagal menyimpan.");
      }
    });
  }
  // ── Detail Modal ─────────────────────────────────────────────────
  openDetail(k) {
    this.detailItem.set(k);
    this.showDetailModal.set(true);
  }
  closeDetail() {
    this.showDetailModal.set(false);
  }
  // ── Status ───────────────────────────────────────────────────────
  approve(klaim) {
    this.klaimSvc.updateStatus(this.karyawanId, klaim.id, "DISETUJUI").subscribe({
      next: () => this.loadList()
    });
  }
  openTolak(klaim) {
    this.tolakId.set(klaim.id);
    this.catatanTolak.set("");
    this.showTolakModal.set(true);
  }
  closeTolak() {
    this.showTolakModal.set(false);
  }
  submitTolak() {
    if (!this.tolakId())
      return;
    this.klaimSvc.updateStatus(this.karyawanId, this.tolakId(), "DITOLAK", this.catatanTolak()).subscribe({
      next: () => {
        this.closeTolak();
        this.loadList();
      }
    });
  }
  // ── Riwayat Perubahan ────────────────────────────────────────────
  openRiwayat(k) {
    this.riwayatTarget.set(k);
    this.riwayatList.set([]);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.klaimSvc.getRiwayat(this.karyawanId, k.id).subscribe({
      next: (data) => {
        this.riwayatList.set(data);
        this.riwayatLoading.set(false);
      },
      error: () => {
        this.riwayatLoading.set(false);
      }
    });
  }
  closeRiwayat() {
    this.showRiwayatModal.set(false);
  }
  labelTipe(tipe) {
    const map2 = {
      "DIBUAT": "Dibuat",
      "DIUBAH": "Diubah",
      "STATUS_DISETUJUI": "Disetujui",
      "STATUS_DITOLAK": "Ditolak",
      "STATUS_DIUBAH": "Status Diubah"
    };
    return map2[tipe] ?? tipe;
  }
  badgeClass(tipe) {
    const map2 = {
      "DIBUAT": "bg-primary bg-opacity-10 text-primary",
      "DIUBAH": "bg-info bg-opacity-10 text-info",
      "STATUS_DISETUJUI": "bg-success bg-opacity-10 text-success",
      "STATUS_DITOLAK": "bg-danger bg-opacity-10 text-danger",
      "STATUS_DIUBAH": "bg-warning bg-opacity-10 text-warning"
    };
    return map2[tipe] ?? "bg-secondary bg-opacity-10 text-secondary";
  }
  // ── Batalkan Persetujuan ─────────────────────────────────────────
  openBatalkan(k) {
    this.batalkanTarget.set(k);
    this.catatanBatalkan.set("");
    this.showBatalkanModal.set(true);
  }
  closeBatalkan() {
    this.showBatalkanModal.set(false);
    this.batalkanTarget.set(null);
  }
  submitBatalkan() {
    const k = this.batalkanTarget();
    if (!k || !this.catatanBatalkan().trim())
      return;
    this.klaimSvc.updateStatus(this.karyawanId, k.id, "MENUNGGU", this.catatanBatalkan()).subscribe({
      next: () => {
        this.closeBatalkan();
        this.loadList();
      },
      error: () => this.error.set("Gagal membatalkan persetujuan.")
    });
  }
  // ── Delete ───────────────────────────────────────────────────────
  confirmDelete(id) {
    this.confirmDeleteId.set(id);
  }
  cancelDelete() {
    this.confirmDeleteId.set(null);
  }
  doDelete() {
    const id = this.confirmDeleteId();
    if (!id)
      return;
    this.klaimSvc.delete(this.karyawanId, id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.loadList();
      }
    });
  }
  // ── Helpers ─────────────────────────────────────────────────────
  labelJenis(j) {
    return this.jenisKlaimOptions.find((o) => o.value === j)?.label ?? j;
  }
  formatRp(n) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
  }
  formatDate(d) {
    if (!d)
      return "-";
    return new Date(d).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  lampiranHref(url) {
    if (!url)
      return "#";
    return url.startsWith("http") ? url : `${this.apiBase}/${url}`;
  }
  static {
    this.\u0275fac = function KaryawanKlaimComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanKlaimComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanKlaimComponent, selectors: [["app-karyawan-klaim"]], decls: 31, vars: 25, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mb-3"], [1, "mb-0", "fw-semibold"], [1, "text-muted"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-primary", "btn-sm", "px-3"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-3"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "px-3", "rounded-pill", 3, "click"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "date", "placeholder", "Tanggal Mulai", 1, "form-control", "form-control-sm", 2, "max-width", "145px", 3, "change", "value"], ["type", "date", "placeholder", "Tanggal Selesai", 1, "form-control", "form-control-sm", 2, "max-width", "145px", 3, "change", "value"], [1, "alert", "alert-danger", "py-2"], [1, "text-center", "py-4", "text-muted"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [1, "border-bottom"], [1, "text-muted", 2, "font-size", ".78rem", "font-weight", "600", "letter-spacing", ".04em"], [1, "py-2"], [1, "py-2", "text-center"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3", "flex-wrap", "gap-2", 2, "font-size", ".82rem"], [1, "pagination", "pagination-sm", "mb-0", "gap-1"], [1, "page-item"], [1, "page-link", "rounded-2", 3, "click", "disabled"], [1, "page-item", 3, "active"], [1, "fw-semibold"], [1, "btn", "btn-link", "p-0", "text-primary", 2, "font-size", ".8rem"], [2, "max-width", "180px"], [1, "text-truncate", "d-block", 3, "title"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", "px-2", 3, "href"], [1, "text-center"], [1, "btn", "btn-link", "p-0", "text-primary", 2, "font-size", ".8rem", 3, "click"], [1, "bx", "bx-file", "me-1"], [1, "d-flex", "gap-1", "justify-content-center"], ["title", "Setujui", 1, "btn", "btn-sm", "btn-success", "py-0", "px-2", 3, "click"], [1, "bx", "bx-check"], ["title", "Tolak", 1, "btn", "btn-sm", "btn-danger", "py-0", "px-2", 3, "click"], [1, "bx", "bx-x"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-primary", "py-0", "px-2", 3, "click"], [1, "bx", "bx-edit"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-outline-danger", "py-0", "px-2", 3, "click"], [1, "bx", "bx-trash"], ["title", "Riwayat Perubahan", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", "px-2", 3, "click"], [1, "bx", "bx-history", "me-1"], ["title", "Batalkan Persetujuan", 1, "btn", "btn-sm", "btn-warning", "py-0", "px-2", 3, "click"], [1, "bx", "bx-undo", "me-1"], [1, "text-center", "text-muted", "py-4", 3, "colSpan"], [1, "page-link", "rounded-2", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "fw-semibold"], [1, "bx", "bx-receipt", "me-2", "text-primary"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "pt-2"], [1, "alert", "alert-danger", "py-2", "small"], [1, "mb-3"], [1, "form-label", "fw-semibold", "small"], [1, "text-danger"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "px-3", "rounded-pill", 3, "btn-primary", "btn-outline-secondary"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-control", 3, "input", "value"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "form-label", "fw-semibold", "small", "mb-0"], [1, "text-muted", "small"], [1, "text-dark"], [1, "d-flex", "gap-2", "align-items-start", "mb-2"], [1, "btn", "btn-sm", "btn-outline-primary", "mt-1", 3, "click"], ["rows", "3", "placeholder", "Tuliskan keterangan klaim...", 1, "form-control", 3, "input", "value"], [1, "mb-1"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", "form-control-sm", 3, "change"], [1, "mt-1", "small", "text-success"], [1, "modal-footer", "border-0", "pt-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["type", "button", 1, "btn", "btn-sm", "px-3", "rounded-pill", 3, "click"], ["type", "text", "placeholder", "Keterangan", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "input-group", "input-group-sm", 2, "max-width", "180px"], ["type", "number", "placeholder", "0", "min", "0", 1, "form-control", 3, "input", "value"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bx", "bx-check", "me-1"], [1, "modal-dialog", "modal-dialog-centered"], [1, "bx", "bx-list-ul", "me-2", "text-primary"], [1, "modal-body"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "text-muted", 2, "font-size", ".8rem"], [1, "text-end"], [2, "font-size", ".85rem"], ["colspan", "2", 1, "text-end", "small"], [1, "modal-title", "text-danger"], [1, "bx", "bx-x-circle", "me-2"], [1, "form-label", "small", "fw-semibold"], ["rows", "3", "placeholder", "Tuliskan alasan penolakan...", 1, "form-control", 3, "input", "value"], [1, "modal-footer", "border-0"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted", 2, "font-size", ".9rem"], [1, "bx", "bx-trash", "me-1"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "bx", "bx-history", "me-2", "text-primary"], [1, "text-center", "py-3", "text-muted"], [1, "text-center", "text-muted", "py-3"], [1, "timeline"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "d-flex", "gap-3", "mb-3"], [1, "flex-shrink-0", "d-flex", "flex-column", "align-items-center"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "32px", "height", "32px", "font-size", ".75rem", 3, "ngClass"], [1, "bx", "bx-plus-circle"], [1, "bx", "bx-check-circle"], [1, "bx", "bx-x-circle"], [1, "bx", "bx-refresh"], [1, "flex-grow-1", 2, "font-size", ".85rem"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2"], [1, "text-muted", "mt-1"], [1, "bx", "bx-user", "me-1"], [1, "modal-title", "text-warning", "fw-semibold"], [1, "bx", "bx-undo", "me-2"], [1, "alert", "alert-warning", "py-2", "small", "mb-3"], [1, "bx", "bx-error", "me-1"], ["rows", "3", "placeholder", "Tuliskan alasan pembatalan persetujuan...", 1, "form-control", 3, "input", "value"], [1, "btn", "btn-warning", "btn-sm", "px-4", 3, "click", "disabled"]], template: function KaryawanKlaimComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div")(3, "h5", 1);
        \u0275\u0275text(4, "Klaim");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, KaryawanKlaimComponent_Conditional_5_Template, 2, 1, "small", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275conditionalCreate(7, KaryawanKlaimComponent_Conditional_7_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function KaryawanKlaimComponent_Template_button_click_11_listener() {
          return ctx.setTab("PENGAJUAN");
        });
        \u0275\u0275text(12, "Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function KaryawanKlaimComponent_Template_button_click_13_listener() {
          return ctx.setTab("DISETUJUI");
        });
        \u0275\u0275text(14, "Disetujui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function KaryawanKlaimComponent_Template_button_click_15_listener() {
          return ctx.setTab("DITOLAK");
        });
        \u0275\u0275text(16, "Ditolak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "input", 9);
        \u0275\u0275listener("change", function KaryawanKlaimComponent_Template_input_change_18_listener($event) {
          ctx.filterMulai.set($event.target.value);
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 2);
        \u0275\u0275text(20, "\u2013");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 10);
        \u0275\u0275listener("change", function KaryawanKlaimComponent_Template_input_change_21_listener($event) {
          ctx.filterSelesai.set($event.target.value);
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(22, KaryawanKlaimComponent_Conditional_22_Template, 2, 1, "div", 11);
        \u0275\u0275conditionalCreate(23, KaryawanKlaimComponent_Conditional_23_Template, 2, 0, "div", 12);
        \u0275\u0275conditionalCreate(24, KaryawanKlaimComponent_Conditional_24_Template, 34, 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, KaryawanKlaimComponent_Conditional_25_Template, 55, 8, "div", 13);
        \u0275\u0275conditionalCreate(26, KaryawanKlaimComponent_Conditional_26_Template, 30, 2, "div", 13);
        \u0275\u0275conditionalCreate(27, KaryawanKlaimComponent_Conditional_27_Template, 17, 1, "div", 13);
        \u0275\u0275conditionalCreate(28, KaryawanKlaimComponent_Conditional_28_Template, 15, 0, "div", 13);
        \u0275\u0275conditionalCreate(29, KaryawanKlaimComponent_Conditional_29_Template, 15, 1, "div", 13);
        \u0275\u0275conditionalCreate(30, KaryawanKlaimComponent_Conditional_30_Template, 26, 2, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.karyawan() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isKaryawan() ? 7 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("btn-primary", ctx.statusTab() === "PENGAJUAN")("btn-outline-secondary", ctx.statusTab() !== "PENGAJUAN");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.statusTab() === "DISETUJUI")("btn-outline-secondary", ctx.statusTab() !== "DISETUJUI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.statusTab() === "DITOLAK")("btn-outline-secondary", ctx.statusTab() !== "DITOLAK");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterMulai());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterSelesai());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFormModal() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showDetailModal() && ctx.detailItem() ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBatalkanModal() ? 30 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, LayoutComponent], styles: ["\n/*# sourceMappingURL=karyawan-klaim.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanKlaimComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-klaim", standalone: true, imports: [CommonModule, FormsModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Header -->\r
  <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">\r
    <div>\r
      <h5 class="mb-0 fw-semibold">Klaim</h5>\r
      @if (karyawan()) {\r
        <small class="text-muted">{{ karyawan()!.namaLengkap }}</small>\r
      }\r
    </div>\r
    <div class="d-flex gap-2 flex-wrap">\r
      @if (isKaryawan()) {\r
        <button class="btn btn-primary btn-sm px-3" (click)="openTambah()">\r
          <i class="bx bx-plus me-1"></i> Tambah Klaim\r
        </button>\r
      }\r
    </div>\r
  </div>\r
\r
  <div class="card border-0 shadow-sm rounded-3 p-3">\r
\r
    <!-- Tabs -->\r
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-sm px-3 rounded-pill"\r
                [class.btn-primary]="statusTab()==='PENGAJUAN'"\r
                [class.btn-outline-secondary]="statusTab()!=='PENGAJUAN'"\r
                (click)="setTab('PENGAJUAN')">Pengajuan</button>\r
        <button class="btn btn-sm px-3 rounded-pill"\r
                [class.btn-primary]="statusTab()==='DISETUJUI'"\r
                [class.btn-outline-secondary]="statusTab()!=='DISETUJUI'"\r
                (click)="setTab('DISETUJUI')">Disetujui</button>\r
        <button class="btn btn-sm px-3 rounded-pill"\r
                [class.btn-primary]="statusTab()==='DITOLAK'"\r
                [class.btn-outline-secondary]="statusTab()!=='DITOLAK'"\r
                (click)="setTab('DITOLAK')">Ditolak</button>\r
      </div>\r
      <!-- Date range filter -->\r
      <div class="d-flex align-items-center gap-2">\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
               [value]="filterMulai()" (change)="filterMulai.set($any($event.target).value); page.set(1)"\r
               placeholder="Tanggal Mulai">\r
        <span class="text-muted">\u2013</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
               [value]="filterSelesai()" (change)="filterSelesai.set($any($event.target).value); page.set(1)"\r
               placeholder="Tanggal Selesai">\r
      </div>\r
    </div>\r
\r
    <!-- Error -->\r
    @if (error()) {\r
      <div class="alert alert-danger py-2">{{ error() }}</div>\r
    }\r
\r
    <!-- Loading -->\r
    @if (loading()) {\r
      <div class="text-center py-4 text-muted">Memuat data\u2026</div>\r
    }\r
\r
    <!-- Table -->\r
    @if (!loading()) {\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead class="border-bottom">\r
            <tr class="text-muted" style="font-size:.78rem;font-weight:600;letter-spacing:.04em">\r
              <th class="py-2">Jenis Klaim</th>\r
              <th class="py-2">Tgl. Pengajuan</th>\r
              <th class="py-2">Jumlah Pengajuan (Rp)</th>\r
              <th class="py-2">Detail Pengeluaran</th>\r
              <th class="py-2">Deskripsi</th>\r
              <th class="py-2">File</th>\r
              @if (!isKaryawan()) {\r
                <th class="py-2 text-center">Aksi</th>\r
              }\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (k of rows(); track k.id) {\r
              <tr>\r
                <td>\r
                  {{ labelJenis(k.jenisKlaim) }}\r
                </td>\r
                <td>{{ formatDate(k.createdAt) }}</td>\r
                <td class="fw-semibold">{{ formatRp(k.nominal) }}</td>\r
                <td>\r
                  @if (k.itemPengeluaran.length) {\r
                    <button class="btn btn-link p-0 text-primary" style="font-size:.8rem" (click)="openDetail(k)">\r
                      {{ k.itemPengeluaran.length }} item \u2014 lihat detail\r
                    </button>\r
                  } @else {\r
                    <span class="text-muted">\u2013</span>\r
                  }\r
                </td>\r
                <td style="max-width:180px">\r
                  <span class="text-truncate d-block" title="{{ k.keterangan }}">{{ k.keterangan || '\u2013' }}</span>\r
                </td>\r
                <td>\r
                  @if (k.lampiranUrl) {\r
                    <a [href]="lampiranHref(k.lampiranUrl)" target="_blank" class="btn btn-sm btn-outline-secondary py-0 px-2">\r
                      <i class="bx bx-file me-1"></i>Lihat\r
                    </a>\r
                  } @else {\r
                    <span class="text-muted">\u2013</span>\r
                  }\r
                </td>\r
                @if (!isKaryawan()) {\r
                  <td class="text-center">\r
                    <div class="d-flex gap-1 justify-content-center">\r
                      @if (k.status === 'MENUNGGU') {\r
                        <button class="btn btn-sm btn-success py-0 px-2" (click)="approve(k)" title="Setujui">\r
                          <i class="bx bx-check"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-danger py-0 px-2" (click)="openTolak(k)" title="Tolak">\r
                          <i class="bx bx-x"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-outline-primary py-0 px-2" (click)="openEdit(k)" title="Edit">\r
                          <i class="bx bx-edit"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-outline-danger py-0 px-2" (click)="confirmDelete(k.id)" title="Hapus">\r
                          <i class="bx bx-trash"></i>\r
                        </button>\r
                      }\r
                      @if (k.status === 'DISETUJUI') {\r
                        <button class="btn btn-sm btn-outline-secondary py-0 px-2" (click)="openRiwayat(k)" title="Riwayat Perubahan">\r
                          <i class="bx bx-history me-1"></i>Riwayat\r
                        </button>\r
                        <button class="btn btn-sm btn-warning py-0 px-2" (click)="openBatalkan(k)" title="Batalkan Persetujuan">\r
                          <i class="bx bx-undo me-1"></i>Batalkan\r
                        </button>\r
                      }\r
                      @if (k.status === 'DITOLAK') {\r
                        <button class="btn btn-sm btn-outline-primary py-0 px-2" (click)="openEdit(k)" title="Edit">\r
                          <i class="bx bx-edit"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-outline-danger py-0 px-2" (click)="confirmDelete(k.id)" title="Hapus">\r
                          <i class="bx bx-trash"></i>\r
                        </button>\r
                      }\r
                    </div>\r
                  </td>\r
                }\r
              </tr>\r
            } @empty {\r
              <tr>\r
                <td [colSpan]="isKaryawan() ? 6 : 7" class="text-center text-muted py-4">\r
                  Tidak ada data klaim.\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <div class="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2" style="font-size:.82rem">\r
        <span class="text-muted">\r
          Menampilkan {{ infoStart() }} dari {{ total() }} total data\r
        </span>\r
        <nav>\r
          <ul class="pagination pagination-sm mb-0 gap-1">\r
            <li class="page-item" [class.disabled]="page()===1">\r
              <button class="page-link rounded-2" (click)="page.set(1)" [disabled]="page()===1">\xAB</button>\r
            </li>\r
            @for (p of pageNumbers(); track p) {\r
              <li class="page-item" [class.active]="page()===p">\r
                <button class="page-link rounded-2" (click)="page.set(p)">{{ p }}</button>\r
              </li>\r
            }\r
            <li class="page-item" [class.disabled]="page()===totalPages()">\r
              <button class="page-link rounded-2" (click)="page.set(totalPages())" [disabled]="page()===totalPages()">\xBB</button>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Form Tambah/Edit \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-semibold">\r
              <i class="bx bx-receipt me-2 text-primary"></i>\r
              {{ editId() ? 'Edit Klaim' : 'Tambah Klaim' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeForm()"></button>\r
          </div>\r
          <div class="modal-body pt-2">\r
\r
            @if (errorForm()) {\r
              <div class="alert alert-danger py-2 small">{{ errorForm() }}</div>\r
            }\r
\r
            <!-- Jenis Klaim -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small">Pilih Jenis Klaim <span class="text-danger">*</span></label>\r
              <div class="d-flex flex-wrap gap-2">\r
                @for (opt of jenisKlaimOptions; track opt.value) {\r
                  <button type="button"\r
                          class="btn btn-sm px-3 rounded-pill"\r
                          [class.btn-primary]="form().jenisKlaim === opt.value"\r
                          [class.btn-outline-secondary]="form().jenisKlaim !== opt.value"\r
                          (click)="form.set({...form(), jenisKlaim: opt.value})">\r
                    {{ opt.label }}\r
                  </button>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Nominal -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small">Jumlah Nominal Klaim (Rp) <span class="text-danger">*</span></label>\r
              <div class="input-group">\r
                <span class="input-group-text">Rp</span>\r
                <input type="number" class="form-control" min="0"\r
                       [value]="form().nominal"\r
                       (input)="form.set({...form(), nominal: +$any($event.target).value})"\r
                       placeholder="0">\r
              </div>\r
            </div>\r
\r
            <!-- Detail Pengeluaran -->\r
            <div class="mb-3">\r
              <div class="d-flex align-items-center justify-content-between mb-2">\r
                <label class="form-label fw-semibold small mb-0">Detail Pengeluaran</label>\r
                <div class="text-muted small">\r
                  Total: <strong class="text-dark">{{ formatRp(totalPengeluaran()) }}</strong>\r
                </div>\r
              </div>\r
\r
              @for (item of items; track $index) {\r
                <div class="d-flex gap-2 align-items-start mb-2">\r
                  <input type="text" class="form-control form-control-sm"\r
                         placeholder="Keterangan"\r
                         [value]="item.keterangan"\r
                         (input)="updateItem($index, 'keterangan', $any($event.target).value)">\r
                  <div class="input-group input-group-sm" style="max-width:180px">\r
                    <span class="input-group-text">Rp</span>\r
                    <input type="number" class="form-control" placeholder="0" min="0"\r
                           [value]="item.jumlah"\r
                           (input)="updateItem($index, 'jumlah', $any($event.target).value)">\r
                  </div>\r
                  <button class="btn btn-sm btn-outline-danger" (click)="removeItem($index)">\r
                    <i class="bx bx-trash"></i>\r
                  </button>\r
                </div>\r
              }\r
\r
              <button class="btn btn-sm btn-outline-primary mt-1" (click)="addItem()">\r
                <i class="bx bx-plus me-1"></i> Tambah Pengeluaran\r
              </button>\r
            </div>\r
\r
            <!-- Keterangan -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small">Keterangan</label>\r
              <textarea class="form-control" rows="3" placeholder="Tuliskan keterangan klaim..."\r
                        [value]="form().keterangan"\r
                        (input)="form.set({...form(), keterangan: $any($event.target).value})"></textarea>\r
            </div>\r
\r
            <!-- Lampiran -->\r
            <div class="mb-1">\r
              <label class="form-label fw-semibold small">Upload File Lampiran</label>\r
              <input type="file" class="form-control form-control-sm" accept=".pdf,.jpg,.jpeg,.png"\r
                     (change)="onLampiranChange($event)">\r
              @if (lampiranNama()) {\r
                <div class="mt-1 small text-success"><i class="bx bx-check me-1"></i>{{ lampiranNama() }}</div>\r
              }\r
            </div>\r
\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeForm()">Batal</button>\r
            <button class="btn btn-primary btn-sm px-4" [disabled]="saving()" (click)="saveForm()">\r
              @if (saving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Detail Pengeluaran \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showDetailModal() && detailItem()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-semibold">\r
              <i class="bx bx-list-ul me-2 text-primary"></i> Detail Pengeluaran\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeDetail()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <table class="table table-sm align-middle mb-0">\r
              <thead>\r
                <tr class="text-muted" style="font-size:.8rem">\r
                  <th>#</th>\r
                  <th>Keterangan</th>\r
                  <th class="text-end">Jumlah</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (item of detailItem()!.itemPengeluaran; track item.id; let i = $index) {\r
                  <tr style="font-size:.85rem">\r
                    <td>{{ i + 1 }}</td>\r
                    <td>{{ item.keterangan }}</td>\r
                    <td class="text-end">{{ formatRp(item.jumlah) }}</td>\r
                  </tr>\r
                }\r
              </tbody>\r
              <tfoot>\r
                <tr class="fw-semibold">\r
                  <td colspan="2" class="text-end small">Total Pengeluaran:</td>\r
                  <td class="text-end">\r
                    {{ formatRp(detailItem()!.itemPengeluaran.reduce((s,i)=>s+i.jumlah,0)) }}\r
                  </td>\r
                </tr>\r
              </tfoot>\r
            </table>\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeDetail()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tolak \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showTolakModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger">\r
              <i class="bx bx-x-circle me-2"></i>Tolak Klaim\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeTolak()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <label class="form-label small fw-semibold">Catatan Penolakan</label>\r
            <textarea class="form-control" rows="3" placeholder="Tuliskan alasan penolakan..."\r
                      [value]="catatanTolak()"\r
                      (input)="catatanTolak.set($any($event.target).value)"></textarea>\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeTolak()">Batal</button>\r
            <button class="btn btn-danger btn-sm px-4" (click)="submitTolak()">Tolak</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Konfirmasi Hapus \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (confirmDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger"><i class="bx bx-trash me-2"></i>Hapus Klaim?</h5>\r
          </div>\r
          <div class="modal-body text-muted" style="font-size:.9rem">\r
            Data klaim ini akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="cancelDelete()">Batal</button>\r
            <button class="btn btn-danger btn-sm px-4" (click)="doDelete()">\r
              <i class="bx bx-trash me-1"></i> Ya, Hapus\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Riwayat Perubahan \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showRiwayatModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-semibold">\r
              <i class="bx bx-history me-2 text-primary"></i>Riwayat Perubahan\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeRiwayat()"></button>\r
          </div>\r
          <div class="modal-body pt-2">\r
            @if (riwayatLoading()) {\r
              <div class="text-center py-3 text-muted">\r
                <span class="spinner-border spinner-border-sm me-2"></span>Memuat riwayat\u2026\r
              </div>\r
            } @else if (riwayatList().length === 0) {\r
              <div class="text-center text-muted py-3">Belum ada riwayat perubahan.</div>\r
            } @else {\r
              <div class="timeline">\r
                @for (r of riwayatList(); track r.id) {\r
                  <div class="d-flex gap-3 mb-3">\r
                    <!-- Icon tipe -->\r
                    <div class="flex-shrink-0 d-flex flex-column align-items-center">\r
                      <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                           style="width:32px;height:32px;font-size:.75rem"\r
                           [ngClass]="badgeClass(r.tipe)">\r
                        @if (r.tipe === 'DIBUAT') { <i class="bx bx-plus-circle"></i> }\r
                        @else if (r.tipe === 'DIUBAH') { <i class="bx bx-edit"></i> }\r
                        @else if (r.tipe === 'STATUS_DISETUJUI') { <i class="bx bx-check-circle"></i> }\r
                        @else if (r.tipe === 'STATUS_DITOLAK') { <i class="bx bx-x-circle"></i> }\r
                        @else { <i class="bx bx-refresh"></i> }\r
                      </div>\r
                    </div>\r
                    <!-- Konten -->\r
                    <div class="flex-grow-1" style="font-size:.85rem">\r
                      <div class="d-flex align-items-center justify-content-between gap-2">\r
                        <span class="fw-semibold">{{ labelTipe(r.tipe) }}</span>\r
                        <small class="text-muted">{{ formatDate(r.changedAt) }}</small>\r
                      </div>\r
                      @if (r.keterangan) {\r
                        <div class="text-muted mt-1">{{ r.keterangan }}</div>\r
                      }\r
                      <small class="text-muted">\r
                        <i class="bx bx-user me-1"></i>{{ r.changedBy || 'sistem' }}\r
                      </small>\r
                    </div>\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeRiwayat()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Batalkan Persetujuan \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showBatalkanModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-warning fw-semibold">\r
              <i class="bx bx-undo me-2"></i>Batalkan Persetujuan Klaim\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeBatalkan()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="alert alert-warning py-2 small mb-3">\r
              <i class="bx bx-error me-1"></i>\r
              Status klaim akan dikembalikan menjadi <strong>Menunggu</strong> dan alasan pembatalan akan dicatat di riwayat perubahan.\r
            </div>\r
            <label class="form-label small fw-semibold">\r
              Alasan Pembatalan <span class="text-danger">*</span>\r
            </label>\r
            <textarea class="form-control" rows="3"\r
                      placeholder="Tuliskan alasan pembatalan persetujuan..."\r
                      [value]="catatanBatalkan()"\r
                      (input)="catatanBatalkan.set($any($event.target).value)"></textarea>\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeBatalkan()">Batal</button>\r
            <button class="btn btn-warning btn-sm px-4"\r
                    [disabled]="!catatanBatalkan().trim()"\r
                    (click)="submitBatalkan()">\r
              <i class="bx bx-undo me-1"></i>Batalkan Persetujuan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ["/* src/app/features/karyawan/karyawan-klaim/karyawan-klaim.component.scss */\n/*# sourceMappingURL=karyawan-klaim.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanKlaimComponent, { className: "KaryawanKlaimComponent", filePath: "src/app/features/karyawan/karyawan-klaim/karyawan-klaim.component.ts", lineNumber: 23 });
})();
export {
  KaryawanKlaimComponent
};
//# sourceMappingURL=chunk-7FUH253M.js.map
