import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  RouterLink
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/revisi-kehadiran.service.ts
var RevisiKehadiranService = class _RevisiKehadiranService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/revisi-kehadiran`;
  }
  findByStatus(status, divisiId, dari, sampai, cari) {
    const p = new URLSearchParams({ status });
    if (divisiId)
      p.set("divisiId", divisiId.toString());
    if (dari)
      p.set("dari", dari);
    if (sampai)
      p.set("sampai", sampai);
    if (cari)
      p.set("cari", cari);
    return this.http.get(`${this.url}?${p}`).pipe(map((d) => d.revisi ?? []));
  }
  buat(req) {
    return this.http.post(this.url, req).pipe(map((d) => d.revisi));
  }
  setujui(id) {
    return this.http.patch(`${this.url}/${id}/setujui`, {}).pipe(map((d) => d.revisi));
  }
  tolak(id, catatanPenolakan) {
    return this.http.patch(`${this.url}/${id}/tolak`, { catatanPenolakan }).pipe(map((d) => d.revisi));
  }
  hapus(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function RevisiKehadiranService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RevisiKehadiranService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RevisiKehadiranService, factory: _RevisiKehadiranService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevisiKehadiranService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/kehadiran/revisi/revisi-kehadiran.component.ts
function RevisiKehadiranComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275property("value", d_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.namaDivisi);
  }
}
function RevisiKehadiranComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Permintaan revisi kehadiran karyawan yang memerlukan validasi ");
    \u0275\u0275elementEnd();
  }
}
function RevisiKehadiranComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function RevisiKehadiranComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275property("value", n_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4);
  }
}
function RevisiKehadiranComponent_div_49_th_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_49_th_16_Template_th_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sort("status"));
    });
    \u0275\u0275text(1, " Status ");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("status")));
  }
}
function RevisiKehadiranComponent_div_49_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "b");
    \u0275\u0275text(3, "Menampilkan 0 dari 0 total data");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.activeTab() === "DIPROSES" ? 7 : 6);
  }
}
function RevisiKehadiranComponent_div_49_tr_21_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r8.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function RevisiKehadiranComponent_div_49_tr_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r8.namaKaryawan.charAt(0), " ");
  }
}
function RevisiKehadiranComponent_div_49_tr_21_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatJam(r_r8.jamAsli), " ");
  }
}
function RevisiKehadiranComponent_div_49_tr_21_i_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
}
function RevisiKehadiranComponent_div_49_tr_21_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r8.catatanPenolakan, " ");
  }
}
function RevisiKehadiranComponent_div_49_tr_21_td_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.statusBadge(r_r8.status).bg)("color", ctx_r2.statusBadge(r_r8.status).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusBadge(r_r8.status).label, " ");
  }
}
function RevisiKehadiranComponent_div_49_tr_21_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 68);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_49_tr_21_ng_container_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const r_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setujui(r_r8));
    });
    \u0275\u0275element(2, "i", 69);
    \u0275\u0275text(3, "Setujui ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 70);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_49_tr_21_ng_container_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const r_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTolak(r_r8));
    });
    \u0275\u0275element(5, "i", 71);
    \u0275\u0275text(6, "Tolak ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.savingId() === r_r8.id);
  }
}
function RevisiKehadiranComponent_div_49_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 26)(5, "div", 48);
    \u0275\u0275template(6, RevisiKehadiranComponent_div_49_tr_21_img_6_Template, 1, 1, "img", 49)(7, RevisiKehadiranComponent_div_49_tr_21_span_7_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 52);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 54);
    \u0275\u0275template(20, RevisiKehadiranComponent_div_49_tr_21_span_20_Template, 2, 1, "span", 55)(21, RevisiKehadiranComponent_div_49_tr_21_i_21_Template, 1, 0, "i", 56);
    \u0275\u0275elementStart(22, "span", 57);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td")(25, "span", 54);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, RevisiKehadiranComponent_div_49_tr_21_div_27_Template, 3, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, RevisiKehadiranComponent_div_49_tr_21_td_28_Template, 3, 5, "td", 34);
    \u0275\u0275elementStart(29, "td")(30, "div", 59);
    \u0275\u0275template(31, RevisiKehadiranComponent_div_49_tr_21_ng_container_31_Template, 7, 1, "ng-container", 34);
    \u0275\u0275elementStart(32, "button", 60);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_49_tr_21_Template_button_click_32_listener() {
      const r_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hapus(r_r8));
    });
    \u0275\u0275element(33, "i", 61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.dtPage() - 1) * ctx_r2.dtPageSize() + i_r10 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", r_r8.fotoProfil);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r8.fotoProfil);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r8.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.namaDivisi ?? "-");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.jenisColor(r_r8.jenisKehadiran))("color", "#fff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.jenisLabel(r_r8.jenisKehadiran), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTanggal(r_r8.tanggal));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r8.jamAsli);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r8.jamAsli);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatJam(r_r8.jamBaru));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r8.alasan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r8.catatanPenolakan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "DIPROSES");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "PENGAJUAN");
  }
}
function RevisiKehadiranComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 40)(2, "thead", 41)(3, "tr")(4, "th", 42);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 43);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_49_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("namaKaryawan"));
    });
    \u0275\u0275text(7, " Karyawan ");
    \u0275\u0275element(8, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 43);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_49_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("jenisKehadiran"));
    });
    \u0275\u0275text(10, " Jenis Kehadiran ");
    \u0275\u0275element(11, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Revisi Kehadiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Alasan");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RevisiKehadiranComponent_div_49_th_16_Template, 3, 3, "th", 44);
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, RevisiKehadiranComponent_div_49_tr_20_Template, 4, 1, "tr", 34)(21, RevisiKehadiranComponent_div_49_tr_21_Template, 34, 18, "tr", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("namaKaryawan")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("jenisKehadiran")));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "DIPROSES");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.paged().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.paged());
  }
}
function RevisiKehadiranComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "div", 73);
    \u0275\u0275elementEnd();
  }
}
function RevisiKehadiranComponent_nav_55_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 75)(1, "button", 76);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_nav_55_li_8_Template_button_click_1_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(p_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r13 === ctx_r2.dtPage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13);
  }
}
function RevisiKehadiranComponent_nav_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav")(1, "ul", 74)(2, "li", 75)(3, "button", 76);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_nav_55_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goPage(1));
    });
    \u0275\u0275text(4, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li", 75)(6, "button", 76);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_nav_55_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.dtPage() - 1));
    });
    \u0275\u0275text(7, "\u2039");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, RevisiKehadiranComponent_nav_55_li_8_Template, 3, 3, "li", 77);
    \u0275\u0275elementStart(9, "li", 75)(10, "button", 76);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_nav_55_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.dtPage() + 1));
    });
    \u0275\u0275text(11, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 75)(13, "button", 76);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_nav_55_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.totalPages()));
    });
    \u0275\u0275text(14, "\xBB");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pagesArr());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === ctx_r2.totalPages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === ctx_r2.totalPages());
  }
}
function RevisiKehadiranComponent_div_56_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.modalError());
  }
}
function RevisiKehadiranComponent_div_56_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r15 = ctx.$implicit;
    \u0275\u0275property("value", k_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r15.namaLengkap);
  }
}
function RevisiKehadiranComponent_div_56_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r16 = ctx.$implicit;
    \u0275\u0275property("value", o_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r16.label);
  }
}
function RevisiKehadiranComponent_div_56_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
}
function RevisiKehadiranComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "div", 81)(4, "h5", 82);
    \u0275\u0275text(5, "Tambah Permintaan Revisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 83);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_56_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBuatModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 84);
    \u0275\u0275template(8, RevisiKehadiranComponent_div_56_div_8_Template, 2, 1, "div", 85);
    \u0275\u0275elementStart(9, "div", 86)(10, "label", 87);
    \u0275\u0275text(11, "Karyawan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 88);
    \u0275\u0275listener("change", function RevisiKehadiranComponent_div_56_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formKaryawanId.set($event.target.value));
    });
    \u0275\u0275elementStart(13, "option", 17);
    \u0275\u0275text(14, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RevisiKehadiranComponent_div_56_option_15_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 86)(17, "label", 87);
    \u0275\u0275text(18, "Tanggal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 89);
    \u0275\u0275listener("change", function RevisiKehadiranComponent_div_56_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formTanggal.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 86)(21, "label", 87);
    \u0275\u0275text(22, "Jenis Kehadiran *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 88);
    \u0275\u0275listener("change", function RevisiKehadiranComponent_div_56_Template_select_change_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formJenis.set($event.target.value));
    });
    \u0275\u0275template(24, RevisiKehadiranComponent_div_56_option_24_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 90)(26, "div", 91)(27, "label", 87);
    \u0275\u0275text(28, "Jam Asli");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 92);
    \u0275\u0275listener("change", function RevisiKehadiranComponent_div_56_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formJamAsli.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 91)(31, "label", 87);
    \u0275\u0275text(32, "Jam Baru *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 92);
    \u0275\u0275listener("change", function RevisiKehadiranComponent_div_56_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formJamBaru.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 86)(35, "label", 87);
    \u0275\u0275text(36, "Alasan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 93);
    \u0275\u0275listener("input", function RevisiKehadiranComponent_div_56_Template_textarea_input_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formAlasan.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 94)(39, "button", 95);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_56_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBuatModal.set(false));
    });
    \u0275\u0275text(40, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 96);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_56_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitBuat());
    });
    \u0275\u0275template(42, RevisiKehadiranComponent_div_56_span_42_Template, 1, 0, "span", 97);
    \u0275\u0275text(43, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.modalError());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formKaryawanId());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.karyawanList());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formTanggal());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formJenis());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.jenisOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.formJamAsli());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formJamBaru());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formAlasan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.modalSaving());
  }
}
function RevisiKehadiranComponent_div_57_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.tolakError());
  }
}
function RevisiKehadiranComponent_div_57_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
}
function RevisiKehadiranComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 100)(2, "div", 80)(3, "div", 81)(4, "h5", 101);
    \u0275\u0275text(5, "Tolak Revisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 83);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_57_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 84);
    \u0275\u0275template(8, RevisiKehadiranComponent_div_57_div_8_Template, 2, 1, "div", 85);
    \u0275\u0275elementStart(9, "label", 87);
    \u0275\u0275text(10, "Catatan Penolakan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 102);
    \u0275\u0275listener("input", function RevisiKehadiranComponent_div_57_Template_textarea_input_11_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tolakCatatan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 94)(13, "button", 95);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_57_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showTolakModal.set(false));
    });
    \u0275\u0275text(14, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 103);
    \u0275\u0275listener("click", function RevisiKehadiranComponent_div_57_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitTolak());
    });
    \u0275\u0275template(16, RevisiKehadiranComponent_div_57_span_16_Template, 1, 0, "span", 97);
    \u0275\u0275text(17, " Tolak ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.tolakError());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.tolakCatatan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.tolakSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tolakSaving());
  }
}
var RevisiKehadiranComponent = class _RevisiKehadiranComponent {
  constructor() {
    this.svc = inject(RevisiKehadiranService);
    this.divisiSvc = inject(DivisiService);
    this.karyawanSvc = inject(KaryawanService);
    this.activeTab = signal("PENGAJUAN", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterMulai = signal("", ...ngDevMode ? [{ debugName: "filterMulai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterAkhir = signal("", ...ngDevMode ? [{ debugName: "filterAkhir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterDivisi = signal("", ...ngDevMode ? [{ debugName: "filterDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
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
    this.savingId = signal(null, ...ngDevMode ? [{ debugName: "savingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtSearch = signal("", ...ngDevMode ? [{ debugName: "dtSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPageSize = signal(10, ...ngDevMode ? [{ debugName: "dtPageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPage = signal(1, ...ngDevMode ? [{ debugName: "dtPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortCol = signal("", ...ngDevMode ? [{ debugName: "sortCol" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortDir = signal("", ...ngDevMode ? [{ debugName: "sortDir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSizeOptions = [10, 25, 50, 100];
    this.Math = Math;
    this.showBuatModal = signal(false, ...ngDevMode ? [{ debugName: "showBuatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalSaving = signal(false, ...ngDevMode ? [{ debugName: "modalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalError = signal("", ...ngDevMode ? [{ debugName: "modalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formKaryawanId = signal("", ...ngDevMode ? [{ debugName: "formKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formAbsensiId = signal("", ...ngDevMode ? [{ debugName: "formAbsensiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formTanggal = signal("", ...ngDevMode ? [{ debugName: "formTanggal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formJenis = signal("MASUK", ...ngDevMode ? [{ debugName: "formJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formAlasan = signal("", ...ngDevMode ? [{ debugName: "formAlasan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formJamAsli = signal("", ...ngDevMode ? [{ debugName: "formJamAsli" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formJamBaru = signal("", ...ngDevMode ? [{ debugName: "formJamBaru" }] : (
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
    this.tolakCatatan = signal("", ...ngDevMode ? [{ debugName: "tolakCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakSaving = signal(false, ...ngDevMode ? [{ debugName: "tolakSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakError = signal("", ...ngDevMode ? [{ debugName: "tolakError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered = computed(() => {
      const q = this.dtSearch().toLowerCase();
      return this.rows().filter((r) => !q || r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q) || (r.alasan ?? "").toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sorted = computed(() => {
      const col = this.sortCol();
      const dir = this.sortDir();
      if (!col || !dir)
        return this.filtered();
      return [...this.filtered()].sort((a, b) => {
        const va = (a[col] ?? "").toString().toLowerCase();
        const vb = (b[col] ?? "").toString().toLowerCase();
        return dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      });
    }, ...ngDevMode ? [{ debugName: "sorted" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.sorted().length / this.dtPageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paged = computed(() => {
      const page = Math.min(this.dtPage(), this.totalPages());
      const start = (page - 1) * this.dtPageSize();
      return this.sorted().slice(start, start + this.dtPageSize());
    }, ...ngDevMode ? [{ debugName: "paged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagesArr = computed(() => this.buildPages(this.dtPage(), this.totalPages()), ...ngDevMode ? [{ debugName: "pagesArr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.info = computed(() => {
      const total = this.sorted().length;
      if (total === 0)
        return "Tidak ada data";
      const page = Math.min(this.dtPage(), this.totalPages());
      const start = (page - 1) * this.dtPageSize() + 1;
      const end = Math.min(page * this.dtPageSize(), total);
      return `Menampilkan ${start}\u2013${end} dari ${total} data`;
    }, ...ngDevMode ? [{ debugName: "info" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisOptions = [
      { value: "MASUK", label: "Presensi Masuk" },
      { value: "KELUAR", label: "Presensi Keluar" },
      { value: "ISTIRAHAT", label: "Mulai Istirahat" },
      { value: "SELESAI_ISTIRAHAT", label: "Selesai Istirahat" },
      { value: "LEMBUR", label: "Mulai Lembur" },
      { value: "SELESAI_LEMBUR", label: "Selesai Lembur" }
    ];
  }
  // ── Lifecycle ─────────────────────────────────────────
  ngOnInit() {
    this.divisiSvc.findAll().subscribe({ next: (d) => this.divisiList.set(d) });
    this.karyawanSvc.findAll().subscribe({ next: (d) => this.karyawanList.set(d) });
    this.loadData();
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.dtPage.set(1);
    this.loadData();
  }
  loadData() {
    this.loading.set(true);
    this.error.set("");
    const status = this.activeTab() === "PENGAJUAN" ? "PENGAJUAN" : "DISETUJUI";
    const divisiId = this.filterDivisi() ? +this.filterDivisi() : void 0;
    this.svc.findByStatus(status, divisiId, this.filterMulai() || void 0, this.filterAkhir() || void 0, this.filterCari() || void 0).subscribe({
      next: (data) => {
        this.rows.set(data);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
    if (this.activeTab() === "DIPROSES") {
      this.svc.findByStatus("DITOLAK", divisiId, this.filterMulai() || void 0, this.filterAkhir() || void 0, this.filterCari() || void 0).subscribe({ next: (d) => this.rows.update((prev) => [...prev, ...d]) });
    }
  }
  cari() {
    this.dtPage.set(1);
    this.loadData();
  }
  // ── Sort ──────────────────────────────────────────────
  sort(col) {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === "asc" ? "desc" : this.sortDir() === "desc" ? "" : "asc");
      if (this.sortDir() === "")
        this.sortCol.set("");
    } else {
      this.sortCol.set(col);
      this.sortDir.set("asc");
    }
    this.dtPage.set(1);
  }
  sortIcon(col) {
    if (this.sortCol() !== col)
      return "bx-sort";
    return this.sortDir() === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  // ── Pagination ────────────────────────────────────────
  buildPages(cur, total) {
    const pages = [];
    const range = 2;
    for (let i = Math.max(1, cur - range); i <= Math.min(total, cur + range); i++)
      pages.push(i);
    return pages;
  }
  goPage(p) {
    if (p < 1 || p > this.totalPages())
      return;
    this.dtPage.set(p);
  }
  // ── Jenis label ───────────────────────────────────────
  jenisLabel(jenis) {
    return this.jenisOptions.find((o) => o.value === jenis)?.label ?? jenis;
  }
  jenisColor(jenis) {
    const map2 = {
      MASUK: "#6c5ce7",
      KELUAR: "#00b894",
      ISTIRAHAT: "#fdcb6e",
      SELESAI_ISTIRAHAT: "#e17055",
      LEMBUR: "#0984e3",
      SELESAI_LEMBUR: "#00cec9"
    };
    return map2[jenis] ?? "#6c5ce7";
  }
  statusBadge(s) {
    const map2 = {
      PENGAJUAN: { label: "Menunggu", bg: "#fff3cd", color: "#856404" },
      DISETUJUI: { label: "Disetujui", bg: "#d1e7dd", color: "#0f5132" },
      DITOLAK: { label: "Ditolak", bg: "#f8d7da", color: "#842029" }
    };
    return map2[s] ?? { label: s, bg: "#e9ecef", color: "#495057" };
  }
  formatJam(jam) {
    if (!jam)
      return "-";
    return jam.length > 5 ? jam.substring(0, 5) : jam;
  }
  formatTanggal(iso) {
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  // ── Aksi ──────────────────────────────────────────────
  setujui(r) {
    if (!confirm(`Setujui revisi ${this.jenisLabel(r.jenisKehadiran)} untuk ${r.namaKaryawan}?`))
      return;
    this.savingId.set(r.id);
    this.svc.setujui(r.id).subscribe({
      next: () => {
        this.savingId.set(null);
        this.loadData();
      },
      error: (e) => {
        this.savingId.set(null);
        alert(e?.error?.message ?? "Gagal menyetujui");
      }
    });
  }
  openTolak(r) {
    this.tolakId.set(r.id);
    this.tolakCatatan.set("");
    this.tolakError.set("");
    this.showTolakModal.set(true);
  }
  submitTolak() {
    if (!this.tolakCatatan().trim()) {
      this.tolakError.set("Catatan penolakan wajib diisi");
      return;
    }
    this.tolakSaving.set(true);
    this.svc.tolak(this.tolakId(), this.tolakCatatan()).subscribe({
      next: () => {
        this.tolakSaving.set(false);
        this.showTolakModal.set(false);
        this.loadData();
      },
      error: (e) => {
        this.tolakSaving.set(false);
        this.tolakError.set(e?.error?.message ?? "Gagal menolak");
      }
    });
  }
  hapus(r) {
    if (!confirm(`Hapus permintaan revisi dari ${r.namaKaryawan}?`))
      return;
    this.svc.hapus(r.id).subscribe({
      next: () => this.loadData(),
      error: (e) => alert(e?.error?.message ?? "Gagal menghapus")
    });
  }
  // ── Modal Buat ────────────────────────────────────────
  openBuat() {
    this.formKaryawanId.set("");
    this.formAbsensiId.set("");
    this.formTanggal.set("");
    this.formJenis.set("MASUK");
    this.formAlasan.set("");
    this.formJamAsli.set("");
    this.formJamBaru.set("");
    this.modalError.set("");
    this.showBuatModal.set(true);
  }
  submitBuat() {
    if (!this.formKaryawanId()) {
      this.modalError.set("Pilih karyawan");
      return;
    }
    if (!this.formTanggal()) {
      this.modalError.set("Tanggal wajib diisi");
      return;
    }
    if (!this.formJamBaru()) {
      this.modalError.set("Jam baru wajib diisi");
      return;
    }
    if (!this.formAlasan()) {
      this.modalError.set("Alasan wajib diisi");
      return;
    }
    const req = {
      karyawanId: +this.formKaryawanId(),
      absensiId: this.formAbsensiId() ? +this.formAbsensiId() : void 0,
      tanggal: this.formTanggal(),
      jenisKehadiran: this.formJenis(),
      alasan: this.formAlasan(),
      jamAsli: this.formJamAsli() || void 0,
      jamBaru: this.formJamBaru()
    };
    this.modalSaving.set(true);
    this.svc.buat(req).subscribe({
      next: () => {
        this.modalSaving.set(false);
        this.showBuatModal.set(false);
        this.loadData();
      },
      error: (e) => {
        this.modalSaving.set(false);
        this.modalError.set(e?.error?.message ?? "Gagal menyimpan");
      }
    });
  }
  static {
    this.\u0275fac = function RevisiKehadiranComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RevisiKehadiranComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevisiKehadiranComponent, selectors: [["app-revisi-kehadiran"]], decls: 58, vars: 24, consts: [["loadTpl", ""], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "gap-2", "mb-3"], [1, "btn", "btn-sm", "px-4", "rounded-pill", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "150px", 3, "change", "value"], [1, "align-self-center"], [1, "form-select", "form-select-sm", 2, "max-width", "180px", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-1"], ["type", "text", "placeholder", "Cari karyawan...", 1, "form-control", "form-control-sm", 2, "max-width", "180px", 3, "input", "value"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-search"], ["class", "rounded p-2 mb-3", "style", "background:#f8f9fa;font-size:.82rem;color:#6c757d;font-family:monospace", 4, "ngIf"], ["class", "alert alert-danger py-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "text-muted", 2, "font-size", ".82rem"], [4, "ngIf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.5)", 4, "ngIf"], [3, "value"], [1, "rounded", "p-2", "mb-3", 2, "background", "#f8f9fa", "font-size", ".82rem", "color", "#6c757d", "font-family", "monospace"], [1, "alert", "alert-danger", "py-2"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "background", "#f0f2f5"], [2, "width", "36px"], [2, "cursor", "pointer", 3, "click"], ["style", "cursor:pointer", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "py-4"], [1, "text-muted", 2, "font-size", ".78rem"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "34px", "height", "34px", "overflow", "hidden", "background", "#e0d7fa"], ["alt", "", "style", "width:34px;height:34px;object-fit:cover;border-radius:50%", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], ["class", "fw-bold", "style", "color:#6c5ce7;font-size:.8rem", 4, "ngIf"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "badge", "px-2", "py-1", 2, "font-size", ".76rem"], [2, "font-size", ".82rem"], ["class", "text-muted text-decoration-line-through me-1", 4, "ngIf"], ["class", "bx bx-right-arrow-alt text-muted", 4, "ngIf"], [1, "fw-semibold", "text-success", "ms-1"], ["class", "text-danger", "style", "font-size:.75rem", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-danger", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click"], [1, "bx", "bx-trash"], ["alt", "", "onerror", "this.style.display='none'", 2, "width", "34px", "height", "34px", "object-fit", "cover", "border-radius", "50%", 3, "src"], [1, "fw-bold", 2, "color", "#6c5ce7", "font-size", ".8rem"], [1, "text-muted", "text-decoration-line-through", "me-1"], [1, "bx", "bx-right-arrow-alt", "text-muted"], [1, "text-danger", 2, "font-size", ".75rem"], [1, "bx", "bx-info-circle", "me-1"], [1, "btn", "btn-sm", "btn-success", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click", "disabled"], [1, "bx", "bx-check", "me-1"], [1, "btn", "btn-sm", "btn-danger", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click"], [1, "bx", "bx-x", "me-1"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", 2, "width", "2rem", "height", "2rem"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-md", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "form-select", "form-select-sm", 3, "change", "value"], ["type", "date", 1, "form-control", "form-control-sm", 3, "change", "value"], [1, "row", "g-2", "mb-3"], [1, "col"], ["type", "time", 1, "form-control", "form-control-sm", 3, "change", "value"], ["rows", "3", "placeholder", "Jelaskan alasan revisi...", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-title", "fw-bold", "text-danger"], ["rows", "3", "placeholder", "Jelaskan alasan penolakan...", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"]], template: function RevisiKehadiranComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 1)(2, "div")(3, "h4", 2);
        \u0275\u0275text(4, "Revisi Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "span", 7);
        \u0275\u0275text(12, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 8);
        \u0275\u0275text(14, "Revisi Kehadiran");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "button", 12);
        \u0275\u0275listener("click", function RevisiKehadiranComponent_Template_button_click_18_listener() {
          return ctx.setTab("PENGAJUAN");
        });
        \u0275\u0275text(19, "Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 12);
        \u0275\u0275listener("click", function RevisiKehadiranComponent_Template_button_click_20_listener() {
          return ctx.setTab("DIPROSES");
        });
        \u0275\u0275text(21, "Telah Diproses");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 13)(23, "input", 14);
        \u0275\u0275listener("change", function RevisiKehadiranComponent_Template_input_change_23_listener($event) {
          return ctx.filterMulai.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 15);
        \u0275\u0275text(25, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 14);
        \u0275\u0275listener("change", function RevisiKehadiranComponent_Template_input_change_26_listener($event) {
          return ctx.filterAkhir.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "select", 16);
        \u0275\u0275listener("change", function RevisiKehadiranComponent_Template_select_change_27_listener($event) {
          return ctx.filterDivisi.set($event.target.value);
        });
        \u0275\u0275elementStart(28, "option", 17);
        \u0275\u0275text(29, "Pilih Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, RevisiKehadiranComponent_option_30_Template, 2, 2, "option", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 19)(32, "input", 20);
        \u0275\u0275listener("input", function RevisiKehadiranComponent_Template_input_input_32_listener($event) {
          return ctx.filterCari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 21);
        \u0275\u0275listener("click", function RevisiKehadiranComponent_Template_button_click_33_listener() {
          return ctx.cari();
        });
        \u0275\u0275element(34, "i", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(35, RevisiKehadiranComponent_div_35_Template, 2, 0, "div", 23)(36, RevisiKehadiranComponent_div_36_Template, 2, 1, "div", 24);
        \u0275\u0275elementStart(37, "div", 25)(38, "div", 26)(39, "label", 27);
        \u0275\u0275text(40, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "select", 28);
        \u0275\u0275listener("change", function RevisiKehadiranComponent_Template_select_change_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtPageSize.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275template(42, RevisiKehadiranComponent_option_42_Template, 2, 2, "option", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 29);
        \u0275\u0275text(44, "data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 26)(46, "label", 27);
        \u0275\u0275text(47, "Cari:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 30);
        \u0275\u0275listener("input", function RevisiKehadiranComponent_Template_input_input_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtSearch.set($event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(49, RevisiKehadiranComponent_div_49_Template, 22, 9, "div", 31)(50, RevisiKehadiranComponent_ng_template_50_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(52, "div", 32)(53, "div", 33);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275template(55, RevisiKehadiranComponent_nav_55_Template, 15, 9, "nav", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(56, RevisiKehadiranComponent_div_56_Template, 44, 11, "div", 35)(57, RevisiKehadiranComponent_div_57_Template, 18, 4, "div", 35);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadTpl_r18 = \u0275\u0275reference(51);
        \u0275\u0275advance(18);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "PENGAJUAN")("btn-outline-secondary", ctx.activeTab() !== "PENGAJUAN");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DIPROSES")("btn-outline-secondary", ctx.activeTab() !== "DIPROSES");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterMulai());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterAkhir());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterDivisi());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.divisiList());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab() === "PENGAJUAN");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.dtPageSize());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pageSizeOptions);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.dtSearch());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading())("ngIfElse", loadTpl_r18);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.info());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPages() > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBuatModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showTolakModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevisiKehadiranComponent, [{
    type: Component,
    args: [{ selector: "app-revisi-kehadiran", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <div>\r
      <h4 class="fw-bold mb-0">Revisi Kehadiran</h4>\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
          <li class="breadcrumb-item"><span class="text-primary">Kehadiran</span></li>\r
          <li class="breadcrumb-item active">Revisi Kehadiran</li>\r
        </ol>\r
      </nav>\r
    </div>\r
<!--    <button class="btn btn-primary btn-sm px-3" (click)="openBuat()">-->\r
<!--      <i class="bx bx-plus me-1"></i> Tambah Revisi-->\r
<!--    </button>-->\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Tab -->\r
      <div class="d-flex gap-2 mb-3">\r
        <button class="btn btn-sm px-4 rounded-pill"\r
          [class.btn-primary]="activeTab()==='PENGAJUAN'"\r
          [class.btn-outline-secondary]="activeTab()!=='PENGAJUAN'"\r
          (click)="setTab('PENGAJUAN')">Pengajuan</button>\r
        <button class="btn btn-sm px-4 rounded-pill"\r
          [class.btn-primary]="activeTab()==='DIPROSES'"\r
          [class.btn-outline-secondary]="activeTab()!=='DIPROSES'"\r
          (click)="setTab('DIPROSES')">Telah Diproses</button>\r
      </div>\r
\r
      <!-- Filter -->\r
      <div class="d-flex flex-wrap gap-2 mb-3">\r
        <input type="date" class="form-control form-control-sm" style="max-width:150px"\r
          [value]="filterMulai()" (change)="filterMulai.set($any($event.target).value)">\r
        <span class="align-self-center">-</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:150px"\r
          [value]="filterAkhir()" (change)="filterAkhir.set($any($event.target).value)">\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
          [value]="filterDivisi()" (change)="filterDivisi.set($any($event.target).value)">\r
          <option value="">Pilih Divisi</option>\r
          <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
        </select>\r
        <div class="d-flex gap-1">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari karyawan..."\r
            style="max-width:180px"\r
            [value]="filterCari()" (input)="filterCari.set($any($event.target).value)">\r
          <button class="btn btn-sm btn-primary px-3" (click)="cari()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Info Pengajuan -->\r
      <div *ngIf="activeTab()==='PENGAJUAN'"\r
           class="rounded p-2 mb-3"\r
           style="background:#f8f9fa;font-size:.82rem;color:#6c757d;font-family:monospace">\r
        Permintaan revisi kehadiran karyawan yang memerlukan validasi\r
      </div>\r
\r
      <!-- Error -->\r
      <div *ngIf="error()" class="alert alert-danger py-2">{{ error() }}</div>\r
\r
      <!-- DataTable controls -->\r
      <div class="d-flex justify-content-between align-items-center mb-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <label class="form-label mb-0" style="font-size:.83rem">Tampilkan</label>\r
          <select class="form-select form-select-sm" style="width:70px"\r
            [value]="dtPageSize()"\r
            (change)="dtPageSize.set(+$any($event.target).value); dtPage.set(1)">\r
            <option *ngFor="let n of pageSizeOptions" [value]="n">{{ n }}</option>\r
          </select>\r
          <span style="font-size:.83rem">data</span>\r
        </div>\r
        <div class="d-flex align-items-center gap-2">\r
          <label class="form-label mb-0" style="font-size:.83rem">Cari:</label>\r
          <input type="text" class="form-control form-control-sm" style="width:180px"\r
            [value]="dtSearch()"\r
            (input)="dtSearch.set($any($event.target).value); dtPage.set(1)"\r
            placeholder="Ketik untuk mencari\u2026">\r
        </div>\r
      </div>\r
\r
      <!-- Table -->\r
      <div class="table-responsive" *ngIf="!loading(); else loadTpl">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead style="background:#f0f2f5">\r
            <tr>\r
              <th style="width:36px">#</th>\r
              <th style="cursor:pointer" (click)="sort('namaKaryawan')">\r
                Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('jenisKehadiran')">\r
                Jenis Kehadiran <i class="bx {{ sortIcon('jenisKehadiran') }}"></i>\r
              </th>\r
              <th>Revisi Kehadiran</th>\r
              <th>Alasan</th>\r
              <th *ngIf="activeTab()==='DIPROSES'" style="cursor:pointer" (click)="sort('status')">\r
                Status <i class="bx {{ sortIcon('status') }}"></i>\r
              </th>\r
              <th>Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="paged().length === 0">\r
              <td [attr.colspan]="activeTab()==='DIPROSES' ? 7 : 6" class="text-center text-muted py-4">\r
                <b>Menampilkan 0 dari 0 total data</b>\r
              </td>\r
            </tr>\r
            <tr *ngFor="let r of paged(); let i = index">\r
              <td class="text-muted" style="font-size:.78rem">\r
                {{ (dtPage()-1)*dtPageSize() + i + 1 }}\r
              </td>\r
              <!-- Karyawan -->\r
              <td>\r
                <div class="d-flex align-items-center gap-2">\r
                  <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                       style="width:34px;height:34px;overflow:hidden;background:#e0d7fa">\r
                    <img *ngIf="r.fotoProfil" [src]="r.fotoProfil" alt=""\r
                         style="width:34px;height:34px;object-fit:cover;border-radius:50%"\r
                         onerror="this.style.display='none'">\r
                    <span *ngIf="!r.fotoProfil" class="fw-bold" style="color:#6c5ce7;font-size:.8rem">\r
                      {{ r.namaKaryawan.charAt(0) }}\r
                    </span>\r
                  </div>\r
                  <div>\r
                    <div class="fw-semibold" style="font-size:.85rem">{{ r.namaKaryawan }}</div>\r
                    <div class="text-muted" style="font-size:.75rem">{{ r.namaDivisi ?? '-' }}</div>\r
                  </div>\r
                </div>\r
              </td>\r
              <!-- Jenis -->\r
              <td>\r
                <span class="badge px-2 py-1" style="font-size:.76rem"\r
                  [style.background]="jenisColor(r.jenisKehadiran)"\r
                  [style.color]="'#fff'">\r
                  {{ jenisLabel(r.jenisKehadiran) }}\r
                </span>\r
                <div class="text-muted" style="font-size:.75rem">{{ formatTanggal(r.tanggal) }}</div>\r
              </td>\r
              <!-- Revisi Kehadiran -->\r
              <td>\r
                <div style="font-size:.82rem">\r
                  <span *ngIf="r.jamAsli" class="text-muted text-decoration-line-through me-1">\r
                    {{ formatJam(r.jamAsli) }}\r
                  </span>\r
                  <i class="bx bx-right-arrow-alt text-muted" *ngIf="r.jamAsli"></i>\r
                  <span class="fw-semibold text-success ms-1">{{ formatJam(r.jamBaru) }}</span>\r
                </div>\r
              </td>\r
              <!-- Alasan -->\r
              <td>\r
                <span style="font-size:.82rem">{{ r.alasan }}</span>\r
                <div *ngIf="r.catatanPenolakan" class="text-danger" style="font-size:.75rem">\r
                  <i class="bx bx-info-circle me-1"></i>{{ r.catatanPenolakan }}\r
                </div>\r
              </td>\r
              <!-- Status (hanya tab Diproses) -->\r
              <td *ngIf="activeTab()==='DIPROSES'">\r
                <span class="badge px-2 py-1" style="font-size:.76rem"\r
                  [style.background]="statusBadge(r.status).bg"\r
                  [style.color]="statusBadge(r.status).color">\r
                  {{ statusBadge(r.status).label }}\r
                </span>\r
              </td>\r
              <!-- Aksi -->\r
              <td>\r
                <div class="d-flex gap-1 flex-wrap">\r
                  <ng-container *ngIf="activeTab()==='PENGAJUAN'">\r
                    <button class="btn btn-sm btn-success px-2 py-1"\r
                      style="font-size:.78rem"\r
                      [disabled]="savingId() === r.id"\r
                      (click)="setujui(r)">\r
                      <i class="bx bx-check me-1"></i>Setujui\r
                    </button>\r
                    <button class="btn btn-sm btn-danger px-2 py-1"\r
                      style="font-size:.78rem"\r
                      (click)="openTolak(r)">\r
                      <i class="bx bx-x me-1"></i>Tolak\r
                    </button>\r
                  </ng-container>\r
                  <button class="btn btn-sm btn-outline-danger px-2 py-1"\r
                    style="font-size:.78rem"\r
                    (click)="hapus(r)">\r
                    <i class="bx bx-trash"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <ng-template #loadTpl>\r
        <div class="text-center py-5">\r
          <div class="spinner-border text-primary" style="width:2rem;height:2rem"></div>\r
        </div>\r
      </ng-template>\r
\r
      <!-- Pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-3">\r
        <div class="text-muted" style="font-size:.82rem">{{ info() }}</div>\r
        <nav *ngIf="totalPages() > 1">\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="dtPage()===1">\r
              <button class="page-link" (click)="goPage(1)">\xAB</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===1">\r
              <button class="page-link" (click)="goPage(dtPage()-1)">\u2039</button>\r
            </li>\r
            <li class="page-item" *ngFor="let p of pagesArr()" [class.active]="p===dtPage()">\r
              <button class="page-link" (click)="goPage(p)">{{ p }}</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===totalPages()">\r
              <button class="page-link" (click)="goPage(dtPage()+1)">\u203A</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===totalPages()">\r
              <button class="page-link" (click)="goPage(totalPages())">\xBB</button>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tambah Revisi \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="showBuatModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
    <div class="modal-dialog modal-md modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Tambah Permintaan Revisi</h5>\r
          <button class="btn-close" (click)="showBuatModal.set(false)"></button>\r
        </div>\r
        <div class="modal-body">\r
          <div *ngIf="modalError()" class="alert alert-danger py-2 mb-3">{{ modalError() }}</div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Karyawan *</label>\r
            <select class="form-select form-select-sm"\r
              [value]="formKaryawanId()"\r
              (change)="formKaryawanId.set($any($event.target).value)">\r
              <option value="">-- Pilih Karyawan --</option>\r
              <option *ngFor="let k of karyawanList()" [value]="k.id">{{ k.namaLengkap }}</option>\r
            </select>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Tanggal *</label>\r
            <input type="date" class="form-control form-control-sm"\r
              [value]="formTanggal()"\r
              (change)="formTanggal.set($any($event.target).value)">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Jenis Kehadiran *</label>\r
            <select class="form-select form-select-sm"\r
              [value]="formJenis()"\r
              (change)="formJenis.set($any($event.target).value)">\r
              <option *ngFor="let o of jenisOptions" [value]="o.value">{{ o.label }}</option>\r
            </select>\r
          </div>\r
\r
          <div class="row g-2 mb-3">\r
            <div class="col">\r
              <label class="form-label fw-semibold">Jam Asli</label>\r
              <input type="time" class="form-control form-control-sm"\r
                [value]="formJamAsli()"\r
                (change)="formJamAsli.set($any($event.target).value)">\r
            </div>\r
            <div class="col">\r
              <label class="form-label fw-semibold">Jam Baru *</label>\r
              <input type="time" class="form-control form-control-sm"\r
                [value]="formJamBaru()"\r
                (change)="formJamBaru.set($any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Alasan *</label>\r
            <textarea class="form-control form-control-sm" rows="3"\r
              [value]="formAlasan()"\r
              (input)="formAlasan.set($any($event.target).value)"\r
              placeholder="Jelaskan alasan revisi..."></textarea>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm" (click)="showBuatModal.set(false)">Batal</button>\r
          <button class="btn btn-primary btn-sm" [disabled]="modalSaving()" (click)="submitBuat()">\r
            <span *ngIf="modalSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Simpan\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tolak \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="showTolakModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
    <div class="modal-dialog modal-sm modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold text-danger">Tolak Revisi</h5>\r
          <button class="btn-close" (click)="showTolakModal.set(false)"></button>\r
        </div>\r
        <div class="modal-body">\r
          <div *ngIf="tolakError()" class="alert alert-danger py-2 mb-3">{{ tolakError() }}</div>\r
          <label class="form-label fw-semibold">Catatan Penolakan *</label>\r
          <textarea class="form-control form-control-sm" rows="3"\r
            [value]="tolakCatatan()"\r
            (input)="tolakCatatan.set($any($event.target).value)"\r
            placeholder="Jelaskan alasan penolakan..."></textarea>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm" (click)="showTolakModal.set(false)">Batal</button>\r
          <button class="btn btn-danger btn-sm" [disabled]="tolakSaving()" (click)="submitTolak()">\r
            <span *ngIf="tolakSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Tolak\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevisiKehadiranComponent, { className: "RevisiKehadiranComponent", filePath: "src/app/features/kehadiran/revisi/revisi-kehadiran.component.ts", lineNumber: 23 });
})();
export {
  RevisiKehadiranComponent
};
//# sourceMappingURL=chunk-7VVBKTNT.js.map
