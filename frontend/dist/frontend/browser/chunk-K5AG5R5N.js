import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
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
  HttpParams,
  NgForOf,
  NgIf,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  Injectable,
  catchError,
  computed,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/tukar-jadwal-shift.service.ts
var TukarJadwalShiftService = class _TukarJadwalShiftService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/tukar-jadwal-shift`;
  }
  getAll(params = {}) {
    let p = new HttpParams();
    if (params.dari)
      p = p.set("dari", params.dari);
    if (params.sampai)
      p = p.set("sampai", params.sampai);
    if (params.divisiId)
      p = p.set("divisiId", params.divisiId);
    if (params.status)
      p = p.set("status", params.status);
    if (params.search)
      p = p.set("search", params.search);
    return this.http.get(this.url, { params: p }).pipe(map((r) => r?.data ?? []), catchError(() => of([])));
  }
  setuju(id) {
    return this.http.put(`${this.url}/${id}/setuju`, {});
  }
  tolak(id, catatan) {
    return this.http.put(`${this.url}/${id}/tolak`, { catatan });
  }
  eksporExcel(params = {}) {
    const p = new URLSearchParams();
    if (params.dari)
      p.set("dari", params.dari);
    if (params.sampai)
      p.set("sampai", params.sampai);
    if (params.divisiId)
      p.set("divisiId", params.divisiId);
    if (params.status)
      p.set("status", params.status);
    if (params.search)
      p.set("search", params.search);
    return `${this.url}/ekspor-excel?${p.toString()}`;
  }
  static {
    this.\u0275fac = function TukarJadwalShiftService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TukarJadwalShiftService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TukarJadwalShiftService, factory: _TukarJadwalShiftService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TukarJadwalShiftService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/kehadiran/rekap-tukar-jadwal-shift/rekap-tukar-jadwal-shift.component.ts
function RekapTukarJadwalShiftComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.namaDivisi);
  }
}
function RekapTukarJadwalShiftComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function RekapTukarJadwalShiftComponent_div_37_Template(rf, ctx) {
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
function RekapTukarJadwalShiftComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
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
function RekapTukarJadwalShiftComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275element(2, "div", 40);
    \u0275\u0275text(3, "Memuat\u2026 ");
    \u0275\u0275elementEnd()();
  }
}
function RekapTukarJadwalShiftComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39)(2, "strong");
    \u0275\u0275text(3, "Menampilkan 0 dari 0 total data");
    \u0275\u0275elementEnd()()();
  }
}
function RekapTukarJadwalShiftComponent_ng_container_75_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.namaKaryawanPemohon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.jadwalPemohon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.namaKaryawanTarget);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.jadwalTarget);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTanggal(r_r5.tanggalDibuat));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.badgeClass(r_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.badgeLabel(r_r5.status));
  }
}
function RekapTukarJadwalShiftComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RekapTukarJadwalShiftComponent_ng_container_75_tr_1_Template, 14, 8, "tr", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.paged());
  }
}
function RekapTukarJadwalShiftComponent_div_76_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 45)(1, "a", 46);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_76_li_11_Template_a_click_1_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dtPage.set(p_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.dtPage() === p_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8);
  }
}
function RekapTukarJadwalShiftComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "small", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 44)(5, "li", 45)(6, "a", 46);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_76_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dtPage.set(1));
    });
    \u0275\u0275text(7, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 45)(9, "a", 46);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_76_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dtPage.set(ctx_r2.dtPage() - 1));
    });
    \u0275\u0275text(10, "\u2039");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, RekapTukarJadwalShiftComponent_div_76_li_11_Template, 3, 3, "li", 47);
    \u0275\u0275elementStart(12, "li", 45)(13, "a", 46);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_76_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dtPage.set(ctx_r2.dtPage() + 1));
    });
    \u0275\u0275text(14, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 45)(16, "a", 46);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_76_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dtPage.set(ctx_r2.totalPages()));
    });
    \u0275\u0275text(17, "\xBB");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r2.filtered().length === 0 ? 0 : (ctx_r2.dtPage() - 1) * ctx_r2.dtPageSize() + 1, "\u2013", ctx_r2.Math.min(ctx_r2.dtPage() * ctx_r2.dtPageSize(), ctx_r2.filtered().length), " dari ", ctx_r2.filtered().length, " total data ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === ctx_r2.totalPages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.dtPage() === ctx_r2.totalPages());
  }
}
function RekapTukarJadwalShiftComponent_div_77_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.eksporRangeError(), " ");
  }
}
function RekapTukarJadwalShiftComponent_div_77_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1, " Rentang waktu maksimal 60 hari. ");
    \u0275\u0275elementEnd();
  }
}
function RekapTukarJadwalShiftComponent_div_77_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    \u0275\u0275property("value", d_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r10.namaDivisi);
  }
}
function RekapTukarJadwalShiftComponent_div_77_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275property("value", s_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r11.label);
  }
}
function RekapTukarJadwalShiftComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "div", 51)(4, "h5", 52);
    \u0275\u0275text(5, "Ekspor Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 53);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_77_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEksporModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "div", 55)(9, "label", 56);
    \u0275\u0275text(10, "Kata kunci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 57)(12, "div", 58)(13, "input", 59);
    \u0275\u0275listener("input", function RekapTukarJadwalShiftComponent_div_77_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporCari.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 60);
    \u0275\u0275element(15, "i", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 61)(17, "label", 56);
    \u0275\u0275text(18, " Tanggal ");
    \u0275\u0275elementStart(19, "span", 62);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 57)(22, "div", 25)(23, "input", 63);
    \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_div_77_Template_input_change_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.eksporDari.set($event.target.value);
      return \u0275\u0275resetView(ctx_r2.eksporRangeError.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 63);
    \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_div_77_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.eksporSampai.set($event.target.value);
      return \u0275\u0275resetView(ctx_r2.eksporRangeError.set(""));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 64)(28, "div", 65);
    \u0275\u0275template(29, RekapTukarJadwalShiftComponent_div_77_div_29_Template, 2, 1, "div", 66)(30, RekapTukarJadwalShiftComponent_div_77_div_30_Template, 2, 0, "div", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 55)(32, "label", 56);
    \u0275\u0275text(33, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 57)(35, "select", 68);
    \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_div_77_Template_select_change_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporDivisi.set($event.target.value));
    });
    \u0275\u0275elementStart(36, "option", 14);
    \u0275\u0275text(37, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, RekapTukarJadwalShiftComponent_div_77_option_38_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 55)(40, "label", 56);
    \u0275\u0275text(41, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 57)(43, "select", 68);
    \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_div_77_Template_select_change_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporStatus.set($event.target.value));
    });
    \u0275\u0275elementStart(44, "option", 14);
    \u0275\u0275text(45, "--Status--");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, RekapTukarJadwalShiftComponent_div_77_option_46_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 69)(48, "button", 70);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_77_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEksporModal());
    });
    \u0275\u0275text(49, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 71);
    \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_div_77_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporExcel());
    });
    \u0275\u0275element(51, "i", 72);
    \u0275\u0275text(52, " Unduh Excel ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r2.eksporCari());
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.eksporDari());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.eksporSampai());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.eksporRangeError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.eksporRangeError());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.eksporDivisi());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.divisiList());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.eksporStatus());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.statusOptions);
  }
}
var RekapTukarJadwalShiftComponent = class _RekapTukarJadwalShiftComponent {
  constructor() {
    this.svc = inject(TukarJadwalShiftService);
    this.divisiSvc = inject(DivisiService);
    this.Math = Math;
    this.today = /* @__PURE__ */ new Date();
    this.firstOfMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    this.filterDari = signal(this.toDateStr(this.firstOfMonth), ...ngDevMode ? [{ debugName: "filterDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterSampai = signal(this.toDateStr(this.today), ...ngDevMode ? [{ debugName: "filterSampai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterDivisi = signal("", ...ngDevMode ? [{ debugName: "filterDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterStatus = signal("", ...ngDevMode ? [{ debugName: "filterStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
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
    this.statusOptions = [
      { value: "MENUNGGU", label: "Menunggu persetujuan" },
      { value: "DISETUJUI", label: "Disetujui" },
      { value: "DITOLAK", label: "Ditolak" }
    ];
    this.showEksporModal = signal(false, ...ngDevMode ? [{ debugName: "showEksporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporDari = signal(this.toDateStr(this.firstOfMonth), ...ngDevMode ? [{ debugName: "eksporDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporSampai = signal(this.toDateStr(this.today), ...ngDevMode ? [{ debugName: "eksporSampai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporDivisi = signal("", ...ngDevMode ? [{ debugName: "eksporDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporStatus = signal("", ...ngDevMode ? [{ debugName: "eksporStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporCari = signal("", ...ngDevMode ? [{ debugName: "eksporCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporRangeError = signal("", ...ngDevMode ? [{ debugName: "eksporRangeError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered = computed(() => {
      const q = this.dtSearch().toLowerCase();
      let data = this.rows();
      if (q)
        data = data.filter((r) => r.namaKaryawanPemohon.toLowerCase().includes(q) || r.namaKaryawanTarget.toLowerCase().includes(q) || (r.jadwalPemohon ?? "").toLowerCase().includes(q) || (r.jadwalTarget ?? "").toLowerCase().includes(q));
      const col = this.sortCol();
      const dir = this.sortDir();
      if (col && dir) {
        data = [...data].sort((a, b) => {
          const av = a[col] ?? "";
          const bv = b[col] ?? "";
          return dir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
        });
      }
      return data;
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paged = computed(() => {
      const size = this.dtPageSize();
      const page = this.dtPage();
      return this.filtered().slice((page - 1) * size, page * size);
    }, ...ngDevMode ? [{ debugName: "paged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.ceil(this.filtered().length / this.dtPageSize()) || 1, ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  openEksporModal() {
    this.eksporDari.set(this.filterDari());
    this.eksporSampai.set(this.filterSampai());
    this.eksporDivisi.set(this.filterDivisi());
    this.eksporStatus.set(this.filterStatus());
    this.eksporCari.set(this.filterCari());
    this.eksporRangeError.set("");
    this.showEksporModal.set(true);
  }
  closeEksporModal() {
    this.showEksporModal.set(false);
  }
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.svc.getAll({
      dari: this.filterDari(),
      sampai: this.filterSampai(),
      divisiId: this.filterDivisi(),
      status: this.filterStatus(),
      search: this.filterCari()
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows);
        this.dtPage.set(1);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
  }
  sort(col) {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === "asc" ? "desc" : this.sortDir() === "desc" ? "" : "asc");
      if (this.sortDir() === "")
        this.sortCol.set("");
    } else {
      this.sortCol.set(col);
      this.sortDir.set("asc");
    }
  }
  sortIcon(col) {
    if (this.sortCol() !== col)
      return "bx-sort";
    return this.sortDir() === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  badgeClass(status) {
    switch (status) {
      case "DISETUJUI":
        return "badge bg-success-subtle text-success";
      case "DITOLAK":
        return "badge bg-danger-subtle text-danger";
      default:
        return "badge bg-warning-subtle text-warning";
    }
  }
  badgeLabel(status) {
    switch (status) {
      case "DISETUJUI":
        return "Disetujui";
      case "DITOLAK":
        return "Ditolak";
      default:
        return "Menunggu";
    }
  }
  eksporExcel() {
    this.eksporRangeError.set("");
    const dari = this.eksporDari();
    const sampai = this.eksporSampai();
    if (!dari || !sampai) {
      this.eksporRangeError.set("Tanggal wajib diisi.");
      return;
    }
    const diffMs = new Date(sampai).getTime() - new Date(dari).getTime();
    const diffDays = diffMs / (1e3 * 60 * 60 * 24);
    if (diffDays < 0) {
      this.eksporRangeError.set("Tanggal akhir tidak boleh sebelum tanggal awal.");
      return;
    }
    if (diffDays > 60) {
      this.eksporRangeError.set("Rentang waktu maksimal 60 hari.");
      return;
    }
    const url = this.svc.eksporExcel({
      dari,
      sampai,
      divisiId: this.eksporDivisi(),
      status: this.eksporStatus(),
      search: this.eksporCari()
    });
    window.open(url, "_blank");
    this.closeEksporModal();
  }
  toDateStr(d) {
    return d.toISOString().substring(0, 10);
  }
  formatTanggal(iso) {
    if (!iso)
      return "-";
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  static {
    this.\u0275fac = function RekapTukarJadwalShiftComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RekapTukarJadwalShiftComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RekapTukarJadwalShiftComponent, selectors: [["app-rekap-tukar-jadwal-shift"]], decls: 78, vars: 34, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "145px", 3, "change", "value"], [1, "align-self-center", "text-muted"], [1, "form-select", "form-select-sm", 2, "max-width", "180px", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-select", "form-select-sm", 2, "max-width", "160px", 3, "change", "value"], [1, "d-flex", "gap-1"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 2, "max-width", "170px", 3, "input", "value"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-primary", "btn-sm", "px-3", "ms-auto", 3, "click"], [1, "bx", "bx-spreadsheet", "me-1"], ["class", "alert alert-danger py-2 mb-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "background", "#f0f2f5"], [2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.45)", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger", "py-2", "mb-2"], ["colspan", "6", 1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "text-primary", "me-2"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "text-muted"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.45)"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "520px"], [1, "modal-content", "shadow"], [1, "modal-header"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3", "row", "align-items-center"], [1, "col-sm-4", "col-form-label", 2, "font-size", ".88rem"], [1, "col-sm-8"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Cari", 1, "form-control", 3, "input", "value"], [1, "input-group-text"], [1, "mb-1", "row", "align-items-center"], [1, "text-danger"], ["type", "date", 1, "form-control", "form-control-sm", 3, "change", "value"], [1, "row", "mb-3"], [1, "col-sm-8", "offset-sm-4"], ["class", "text-danger", "style", "font-size:.8rem", 4, "ngIf"], ["class", "rounded p-2 mt-1", "style", "background:#f8f9fa;font-size:.8rem;color:#6c757d", 4, "ngIf"], [1, "form-select", "form-select-sm", 3, "change", "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-download", "me-1"], [1, "text-danger", 2, "font-size", ".8rem"], [1, "rounded", "p-2", "mt-1", 2, "background", "#f8f9fa", "font-size", ".8rem", "color", "#6c757d"]], template: function RekapTukarJadwalShiftComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div")(3, "h4", 1);
        \u0275\u0275text(4, "Rekap Tukar Jadwal Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 2)(6, "ol", 3)(7, "li", 4)(8, "a", 5);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 4)(11, "span", 6);
        \u0275\u0275text(12, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 7);
        \u0275\u0275text(14, "Rekap Tukar Jadwal Shift");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "input", 11);
        \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_Template_input_change_18_listener($event) {
          return ctx.filterDari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 11);
        \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_Template_input_change_21_listener($event) {
          return ctx.filterSampai.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "select", 13);
        \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_Template_select_change_22_listener($event) {
          return ctx.filterDivisi.set($event.target.value);
        });
        \u0275\u0275elementStart(23, "option", 14);
        \u0275\u0275text(24, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, RekapTukarJadwalShiftComponent_option_25_Template, 2, 2, "option", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select", 16);
        \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_Template_select_change_26_listener($event) {
          return ctx.filterStatus.set($event.target.value);
        });
        \u0275\u0275elementStart(27, "option", 14);
        \u0275\u0275text(28, "--Status--");
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, RekapTukarJadwalShiftComponent_option_29_Template, 2, 2, "option", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 17)(31, "input", 18);
        \u0275\u0275listener("input", function RekapTukarJadwalShiftComponent_Template_input_input_31_listener($event) {
          return ctx.filterCari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 19);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_button_click_32_listener() {
          return ctx.load();
        });
        \u0275\u0275element(33, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 21);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_button_click_34_listener() {
          return ctx.openEksporModal();
        });
        \u0275\u0275element(35, "i", 22);
        \u0275\u0275text(36, " Ekspor Excel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, RekapTukarJadwalShiftComponent_div_37_Template, 2, 1, "div", 23);
        \u0275\u0275elementStart(38, "div", 24)(39, "div", 25)(40, "label", 26);
        \u0275\u0275text(41, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "select", 27);
        \u0275\u0275listener("change", function RekapTukarJadwalShiftComponent_Template_select_change_42_listener($event) {
          ctx.dtPageSize.set(+$event.target.value);
          return ctx.dtPage.set(1);
        });
        \u0275\u0275template(43, RekapTukarJadwalShiftComponent_option_43_Template, 2, 2, "option", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 28);
        \u0275\u0275text(45, "data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 25)(47, "label", 26);
        \u0275\u0275text(48, "Cari:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "input", 29);
        \u0275\u0275listener("input", function RekapTukarJadwalShiftComponent_Template_input_input_49_listener($event) {
          ctx.dtSearch.set($event.target.value);
          return ctx.dtPage.set(1);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 30)(51, "table", 31)(52, "thead", 32)(53, "tr")(54, "th", 33);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_th_click_54_listener() {
          return ctx.sort("namaKaryawanPemohon");
        });
        \u0275\u0275text(55, " Karyawan Pemohon ");
        \u0275\u0275element(56, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th", 33);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_th_click_57_listener() {
          return ctx.sort("jadwalPemohon");
        });
        \u0275\u0275text(58, " Jadwal Pemohon ");
        \u0275\u0275element(59, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th", 33);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_th_click_60_listener() {
          return ctx.sort("namaKaryawanTarget");
        });
        \u0275\u0275text(61, " Karyawan Target ");
        \u0275\u0275element(62, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th", 33);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_th_click_63_listener() {
          return ctx.sort("jadwalTarget");
        });
        \u0275\u0275text(64, " Jadwal Target ");
        \u0275\u0275element(65, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 33);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_th_click_66_listener() {
          return ctx.sort("tanggalDibuat");
        });
        \u0275\u0275text(67, " Tanggal Dibuat ");
        \u0275\u0275element(68, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th", 33);
        \u0275\u0275listener("click", function RekapTukarJadwalShiftComponent_Template_th_click_69_listener() {
          return ctx.sort("status");
        });
        \u0275\u0275text(70, " Status ");
        \u0275\u0275element(71, "i");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "tbody");
        \u0275\u0275template(73, RekapTukarJadwalShiftComponent_tr_73_Template, 4, 0, "tr", 34)(74, RekapTukarJadwalShiftComponent_tr_74_Template, 4, 0, "tr", 34)(75, RekapTukarJadwalShiftComponent_ng_container_75_Template, 2, 1, "ng-container", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(76, RekapTukarJadwalShiftComponent_div_76_Template, 18, 12, "div", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(77, RekapTukarJadwalShiftComponent_div_77_Template, 53, 9, "div", 36);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("value", ctx.filterDari());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterSampai());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterDivisi());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.divisiList());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterStatus());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.statusOptions);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.dtPageSize());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pageSizeOptions);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.dtSearch());
        \u0275\u0275advance(7);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.sortIcon("namaKaryawanPemohon")));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.sortIcon("jadwalPemohon")));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.sortIcon("namaKaryawanTarget")));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.sortIcon("jadwalTarget")));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.sortIcon("tanggalDibuat")));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx.sortIcon("status")));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && ctx.filtered().length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEksporModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RekapTukarJadwalShiftComponent, [{
    type: Component,
    args: [{ selector: "app-rekap-tukar-jadwal-shift", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <div>\r
      <h4 class="fw-bold mb-0">Rekap Tukar Jadwal Shift</h4>\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
          <li class="breadcrumb-item"><span class="text-primary">Kehadiran</span></li>\r
          <li class="breadcrumb-item active">Rekap Tukar Jadwal Shift</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Filter Row -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <!-- Tanggal Dari -->\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
          [value]="filterDari()"\r
          (change)="filterDari.set($any($event.target).value)">\r
        <span class="align-self-center text-muted">-</span>\r
        <!-- Tanggal Sampai -->\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
          [value]="filterSampai()"\r
          (change)="filterSampai.set($any($event.target).value)">\r
\r
        <!-- Divisi -->\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
          [value]="filterDivisi()"\r
          (change)="filterDivisi.set($any($event.target).value)">\r
          <option value="">--Divisi--</option>\r
          <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
        </select>\r
\r
        <!-- Status -->\r
        <select class="form-select form-select-sm" style="max-width:160px"\r
          [value]="filterStatus()"\r
          (change)="filterStatus.set($any($event.target).value)">\r
          <option value="">--Status--</option>\r
          <option *ngFor="let s of statusOptions" [value]="s.value">{{ s.label }}</option>\r
        </select>\r
\r
        <!-- Cari -->\r
        <div class="d-flex gap-1">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari"\r
            style="max-width:170px"\r
            [value]="filterCari()"\r
            (input)="filterCari.set($any($event.target).value)">\r
          <button class="btn btn-sm btn-primary px-3" (click)="load()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
\r
        <!-- Ekspor Excel -->\r
        <button class="btn btn-primary btn-sm px-3 ms-auto" (click)="openEksporModal()">\r
          <i class="bx bx-spreadsheet me-1"></i> Ekspor Excel\r
        </button>\r
      </div>\r
\r
      <!-- Error -->\r
      <div *ngIf="error()" class="alert alert-danger py-2 mb-2">{{ error() }}</div>\r
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
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead style="background:#f0f2f5">\r
            <tr>\r
              <th style="cursor:pointer" (click)="sort('namaKaryawanPemohon')">\r
                Karyawan Pemohon <i class="bx {{ sortIcon('namaKaryawanPemohon') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('jadwalPemohon')">\r
                Jadwal Pemohon <i class="bx {{ sortIcon('jadwalPemohon') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('namaKaryawanTarget')">\r
                Karyawan Target <i class="bx {{ sortIcon('namaKaryawanTarget') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('jadwalTarget')">\r
                Jadwal Target <i class="bx {{ sortIcon('jadwalTarget') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('tanggalDibuat')">\r
                Tanggal Dibuat <i class="bx {{ sortIcon('tanggalDibuat') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('status')">\r
                Status <i class="bx {{ sortIcon('status') }}"></i>\r
              </th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <!-- Loading -->\r
            <tr *ngIf="loading()">\r
              <td colspan="6" class="text-center py-4">\r
                <div class="spinner-border spinner-border-sm text-primary me-2"></div>Memuat\u2026\r
              </td>\r
            </tr>\r
\r
            <!-- Empty -->\r
            <tr *ngIf="!loading() && filtered().length === 0">\r
              <td colspan="6" class="text-center py-4">\r
                <strong>Menampilkan 0 dari 0 total data</strong>\r
              </td>\r
            </tr>\r
\r
            <!-- Data rows -->\r
            <ng-container *ngIf="!loading()">\r
              <tr *ngFor="let r of paged()">\r
                <td>{{ r.namaKaryawanPemohon }}</td>\r
                <td>{{ r.jadwalPemohon }}</td>\r
                <td>{{ r.namaKaryawanTarget }}</td>\r
                <td>{{ r.jadwalTarget }}</td>\r
                <td>{{ formatTanggal(r.tanggalDibuat) }}</td>\r
                <td>\r
                  <span [class]="badgeClass(r.status)">{{ badgeLabel(r.status) }}</span>\r
                </td>\r
              </tr>\r
            </ng-container>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer: info + pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-3" *ngIf="!loading()">\r
        <small class="text-muted">\r
          Menampilkan {{ filtered().length === 0 ? 0 : (dtPage()-1)*dtPageSize()+1 }}\u2013{{ Math.min(dtPage()*dtPageSize(), filtered().length) }}\r
          dari {{ filtered().length }} total data\r
        </small>\r
        <nav>\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="dtPage()===1">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(1)">&laquo;</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===1">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(dtPage()-1)">&lsaquo;</a>\r
            </li>\r
            <li *ngFor="let p of pageNumbers()" class="page-item" [class.active]="dtPage()===p">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(p)">{{ p }}</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===totalPages()">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(dtPage()+1)">&rsaquo;</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===totalPages()">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(totalPages())">&raquo;</a>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Ekspor Excel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showEksporModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:520px">\r
      <div class="modal-content shadow">\r
\r
        <!-- Header -->\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Ekspor Excel</h5>\r
          <button type="button" class="btn-close" (click)="closeEksporModal()"></button>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="modal-body">\r
\r
          <!-- Kata kunci -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Kata kunci</label>\r
            <div class="col-sm-8">\r
              <div class="input-group input-group-sm">\r
                <input type="text" class="form-control" placeholder="Cari"\r
                  [value]="eksporCari()"\r
                  (input)="eksporCari.set($any($event.target).value)">\r
                <span class="input-group-text"><i class="bx bx-search"></i></span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Tanggal -->\r
          <div class="mb-1 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">\r
              Tanggal <span class="text-danger">*</span>\r
            </label>\r
            <div class="col-sm-8">\r
              <div class="d-flex align-items-center gap-2">\r
                <input type="date" class="form-control form-control-sm"\r
                  [value]="eksporDari()"\r
                  (change)="eksporDari.set($any($event.target).value); eksporRangeError.set('')">\r
                <span>-</span>\r
                <input type="date" class="form-control form-control-sm"\r
                  [value]="eksporSampai()"\r
                  (change)="eksporSampai.set($any($event.target).value); eksporRangeError.set('')">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Range info/error -->\r
          <div class="row mb-3">\r
            <div class="col-sm-8 offset-sm-4">\r
              <div *ngIf="eksporRangeError()" class="text-danger" style="font-size:.8rem">\r
                {{ eksporRangeError() }}\r
              </div>\r
              <div *ngIf="!eksporRangeError()" class="rounded p-2 mt-1" style="background:#f8f9fa;font-size:.8rem;color:#6c757d">\r
                Rentang waktu maksimal 60 hari.\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Divisi -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Divisi</label>\r
            <div class="col-sm-8">\r
              <select class="form-select form-select-sm"\r
                [value]="eksporDivisi()"\r
                (change)="eksporDivisi.set($any($event.target).value)">\r
                <option value="">--Divisi--</option>\r
                <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Status -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Status</label>\r
            <div class="col-sm-8">\r
              <select class="form-select form-select-sm"\r
                [value]="eksporStatus()"\r
                (change)="eksporStatus.set($any($event.target).value)">\r
                <option value="">--Status--</option>\r
                <option *ngFor="let s of statusOptions" [value]="s.value">{{ s.label }}</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeEksporModal()">Batal</button>\r
          <button class="btn btn-primary btn-sm px-4" (click)="eksporExcel()">\r
            <i class="bx bx-download me-1"></i> Unduh Excel\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RekapTukarJadwalShiftComponent, { className: "RekapTukarJadwalShiftComponent", filePath: "src/app/features/kehadiran/rekap-tukar-jadwal-shift/rekap-tukar-jadwal-shift.component.ts", lineNumber: 19 });
})();
export {
  RekapTukarJadwalShiftComponent
};
//# sourceMappingURL=chunk-K5AG5R5N.js.map
