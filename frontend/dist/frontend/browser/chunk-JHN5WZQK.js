import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-perangkat/karyawan-perangkat.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function KaryawanPerangkatComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.karyawanId()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.namaKaryawan());
  }
}
function KaryawanPerangkatComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanPerangkatComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementEnd();
  }
}
function KaryawanPerangkatComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanPerangkatComponent_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275element(3, "span", 31)(4, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 33);
    \u0275\u0275elementEnd();
  }
}
function KaryawanPerangkatComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, KaryawanPerangkatComponent_Conditional_35_For_2_Template, 6, 0, "div", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function KaryawanPerangkatComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "Belum ada perangkat terdaftar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5, "Perangkat akan muncul setelah karyawan melakukan presensi pertama kali.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanPerangkatComponent_Conditional_37_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("badge-aktif-recent", ctx_r0.isAktifBaru(p_r2.terakhirAktif));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTerakhirAktif(p_r2.terakhirAktif), " ");
  }
}
function KaryawanPerangkatComponent_Conditional_37_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanPerangkatComponent_Conditional_37_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 42)(5, "div", 43);
    \u0275\u0275element(6, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275conditionalCreate(17, KaryawanPerangkatComponent_Conditional_37_For_16_Conditional_17_Template, 2, 3, "span", 48)(18, KaryawanPerangkatComponent_Conditional_37_For_16_Conditional_18_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const \u0275$index_128_r3 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_128_r3 + 1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r2.namaPerangkat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ID: ", p_r2.deviceId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.modelPerangkat || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.manufaktur || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r2.terakhirAktif ? 17 : 18);
  }
}
function KaryawanPerangkatComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "table", 38)(2, "thead")(3, "tr")(4, "th", 39);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Model Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Manufaktur Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Terakhir Aktif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, KaryawanPerangkatComponent_Conditional_37_For_16_Template, 19, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 40);
    \u0275\u0275element(18, "i", 41);
    \u0275\u0275text(19, " Mencabut perangkat akan memaksa karyawan login ulang di perangkat tersebut. Perangkat akan terdaftar kembali saat presensi berikutnya. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.list());
  }
}
var KaryawanPerangkatComponent = class _KaryawanPerangkatComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.svc = inject(KaryawanService);
    this.karyawanId = signal(0, ...ngDevMode ? [{ debugName: "karyawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.namaKaryawan = signal("", ...ngDevMode ? [{ debugName: "namaKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fotoProfil = signal(void 0, ...ngDevMode ? [{ debugName: "fotoProfil" }] : (
      /* istanbul ignore next */
      []
    ));
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmRevokeId = signal(null, ...ngDevMode ? [{ debugName: "confirmRevokeId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.revoking = signal(false, ...ngDevMode ? [{ debugName: "revoking" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.karyawanId.set(id);
    this.svc.findById(id).subscribe({
      next: (k) => {
        this.namaKaryawan.set(k.namaLengkap);
        this.fotoProfil.set(k.fotoProfil);
      }
    });
    this.loadPerangkat(id);
  }
  loadPerangkat(id) {
    this.loading.set(true);
    this.error.set("");
    this.svc.getPerangkat(id).subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Gagal memuat data perangkat.");
        this.loading.set(false);
      }
    });
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  confirmRevoke(id) {
    this.confirmRevokeId.set(id);
  }
  cancelRevoke() {
    this.confirmRevokeId.set(null);
  }
  doRevoke() {
    const devId = this.confirmRevokeId();
    if (devId == null)
      return;
    this.revoking.set(true);
    this.svc.deletePerangkat(this.karyawanId(), devId).subscribe({
      next: () => {
        this.list.update((l) => l.filter((d) => d.id !== devId));
        this.confirmRevokeId.set(null);
        this.revoking.set(false);
      },
      error: () => {
        this.error.set("Gagal mencabut perangkat.");
        this.confirmRevokeId.set(null);
        this.revoking.set(false);
      }
    });
  }
  formatTerakhirAktif(dt) {
    if (!dt)
      return "\u2014";
    const d = new Date(dt);
    const hari = d.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "short", year: "numeric" });
    const jam = d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    return `${hari} @ ${jam}`;
  }
  isAktifBaru(dt) {
    if (!dt)
      return false;
    const sevenDays = 7 * 24 * 60 * 60 * 1e3;
    return Date.now() - new Date(dt).getTime() < sevenDays;
  }
  static {
    this.\u0275fac = function KaryawanPerangkatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanPerangkatComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanPerangkatComponent, selectors: [["app-karyawan-perangkat"]], decls: 38, vars: 11, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "info-bar", "card", "border-0", "shadow-sm", "mb-4", "px-4", "py-3", "d-flex", "flex-row", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "44px", "height", "44px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.2rem", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-semibold", 2, "font-size", ".95rem"], [1, "text-muted", "small"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "routerLink"], [1, "bx", "bx-arrow-back", "me-1"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "card", "border-0", "shadow-sm", "overflow-hidden"], [1, "card-header-custom", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-semibold", 2, "font-size", ".92rem"], [1, "bx", "bx-devices", "me-2", "text-primary"], [1, "badge", "rounded-pill", "px-3", 2, "background", "#ede9fe", "color", "#7c3aed", "font-size", ".8rem"], [1, "p-4"], [1, "text-center", "py-5", "text-muted"], [3, "routerLink"], [1, "bx", "bx-user"], [1, "bx", "bx-error-circle", "fs-5"], [1, "placeholder-glow", "mb-4", "d-flex", "align-items-center", "gap-3"], [1, "placeholder", "rounded-circle", "flex-shrink-0", 2, "width", "44px", "height", "44px"], [1, "placeholder", "col-3", "rounded", "d-block", "mb-2", 2, "height", "13px"], [1, "placeholder", "col-5", "rounded", "d-block", 2, "height", "11px"], [1, "placeholder", "col-2", "rounded", 2, "height", "32px"], [1, "bx", "bx-devices", 2, "font-size", "3.5rem", "opacity", ".25"], [1, "mt-3", "mb-0", "fw-semibold"], [1, "small", "mt-1"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [2, "width", "44px"], [1, "px-4", "py-3", "border-top", 2, "background", "#fafafa", "font-size", ".8rem", "color", "#6b7280"], [1, "bx", "bx-info-circle", "me-1", "text-primary"], [1, "d-flex", "align-items-center", "gap-2"], [1, "device-icon-wrap"], [1, "bx", "bx-mobile-alt"], [1, "fw-semibold", 2, "font-size", ".88rem"], [1, "text-muted", 2, "font-size", ".74rem", "font-family", "monospace"], [2, "font-size", ".87rem"], [1, "badge-aktif-custom", 3, "badge-aktif-recent"], [1, "badge-aktif-custom"]], template: function KaryawanPerangkatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Karyawan");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, KaryawanPerangkatComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Perangkat Terdaftar");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275conditionalCreate(17, KaryawanPerangkatComponent_Conditional_17_Template, 1, 1, "img", 11)(18, KaryawanPerangkatComponent_Conditional_18_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23, "Perangkat yang digunakan untuk presensi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "a", 16);
        \u0275\u0275element(25, "i", 17);
        \u0275\u0275text(26, " Kembali ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(27, KaryawanPerangkatComponent_Conditional_27_Template, 3, 1, "div", 18);
        \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "span", 21);
        \u0275\u0275element(31, "i", 22);
        \u0275\u0275text(32, "Perangkat Terdaftar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 23);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(35, KaryawanPerangkatComponent_Conditional_35_Template, 3, 1, "div", 24);
        \u0275\u0275conditionalCreate(36, KaryawanPerangkatComponent_Conditional_36_Template, 6, 0, "div", 25);
        \u0275\u0275conditionalCreate(37, KaryawanPerangkatComponent_Conditional_37_Template, 20, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.namaKaryawan() ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_1_0 = ctx.fotoUrl(ctx.fotoProfil())) ? 17 : 18, tmp_1_0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.namaKaryawan() || "\u2014");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, ctx.karyawanId()));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 27 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.list().length, " perangkat ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && ctx.list().length === 0 ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() && ctx.list().length > 0 ? 37 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, LayoutComponent], styles: ['@charset "UTF-8";\n\n\n.info-bar[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.card-header-custom[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f3f5;\n  background: #fff;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  padding: 12px 16px;\n  background: #fafafa;\n  border-bottom: 1px solid #f1f3f5;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 0.87rem;\n  vertical-align: middle;\n  border-bottom: 1px solid #f9fafb;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.device-icon-wrap[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #ede9fe;\n  color: #7c3aed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  flex-shrink: 0;\n}\n.badge-aktif-custom[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 9999px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #374151;\n  white-space: nowrap;\n}\n.badge-aktif-recent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n/*# sourceMappingURL=karyawan-perangkat.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanPerangkatComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-perangkat", standalone: true, imports: [RouterLink, CommonModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          @if (namaKaryawan()) {\r
            <li class="breadcrumb-item">\r
              <a [routerLink]="['/karyawan', karyawanId()]">{{ namaKaryawan() }}</a>\r
            </li>\r
          }\r
          <li class="breadcrumb-item active">Perangkat Terdaftar</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Info Bar -->\r
  <div class="info-bar card border-0 shadow-sm mb-4 px-4 py-3 d-flex flex-row align-items-center gap-3">\r
    @if (fotoUrl(fotoProfil()); as url) {\r
      <img [src]="url" alt="Foto" class="rounded-circle" style="width:44px;height:44px;object-fit:cover;border:2px solid #e9ecef" />\r
    } @else {\r
      <div class="rounded-circle d-flex align-items-center justify-content-center"\r
           style="width:44px;height:44px;background:#f3f4f6;color:#9ca3af;font-size:1.2rem;flex-shrink:0">\r
        <i class="bx bx-user"></i>\r
      </div>\r
    }\r
    <div class="flex-grow-1">\r
      <div class="fw-semibold" style="font-size:.95rem">{{ namaKaryawan() || '\u2014' }}</div>\r
      <div class="text-muted small">Perangkat yang digunakan untuk presensi</div>\r
    </div>\r
    <a [routerLink]="['/karyawan', karyawanId()]" class="btn btn-outline-secondary btn-sm px-3">\r
      <i class="bx bx-arrow-back me-1"></i> Kembali\r
    </a>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2 mb-3">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
    </div>\r
  }\r
\r
  <!-- Card Tabel -->\r
  <div class="card border-0 shadow-sm overflow-hidden">\r
\r
    <div class="card-header-custom d-flex align-items-center justify-content-between">\r
      <span class="fw-semibold" style="font-size:.92rem">\r
        <i class="bx bx-devices me-2 text-primary"></i>Perangkat Terdaftar\r
      </span>\r
      <span class="badge rounded-pill px-3" style="background:#ede9fe;color:#7c3aed;font-size:.8rem">\r
        {{ list().length }} perangkat\r
      </span>\r
    </div>\r
\r
    <!-- Loading skeleton -->\r
    @if (loading()) {\r
      <div class="p-4">\r
        @for (i of [1,2,3]; track i) {\r
          <div class="placeholder-glow mb-4 d-flex align-items-center gap-3">\r
            <span class="placeholder rounded-circle flex-shrink-0" style="width:44px;height:44px"></span>\r
            <div class="flex-grow-1">\r
              <span class="placeholder col-3 rounded d-block mb-2" style="height:13px"></span>\r
              <span class="placeholder col-5 rounded d-block" style="height:11px"></span>\r
            </div>\r
            <span class="placeholder col-2 rounded" style="height:32px"></span>\r
          </div>\r
        }\r
      </div>\r
    }\r
\r
    <!-- Kosong -->\r
    @if (!loading() && list().length === 0) {\r
      <div class="text-center py-5 text-muted">\r
        <i class="bx bx-devices" style="font-size:3.5rem;opacity:.25"></i>\r
        <p class="mt-3 mb-0 fw-semibold">Belum ada perangkat terdaftar</p>\r
        <p class="small mt-1">Perangkat akan muncul setelah karyawan melakukan presensi pertama kali.</p>\r
      </div>\r
    }\r
\r
    <!-- Tabel perangkat -->\r
    @if (!loading() && list().length > 0) {\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0">\r
          <thead>\r
            <tr>\r
              <th style="width:44px">#</th>\r
              <th>Nama Perangkat</th>\r
              <th>Model Perangkat</th>\r
              <th>Manufaktur Perangkat</th>\r
              <th>Terakhir Aktif</th>\r
              <!-- <th class="text-center">Aksi</th> -->\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (p of list(); track p.id; let i = $index) {\r
              <tr>\r
                <td class="text-muted small">{{ i + 1 }}</td>\r
\r
                <!-- Nama Perangkat -->\r
                <td>\r
                  <div class="d-flex align-items-center gap-2">\r
                    <div class="device-icon-wrap">\r
                      <i class="bx bx-mobile-alt"></i>\r
                    </div>\r
                    <div>\r
                      <div class="fw-semibold" style="font-size:.88rem">{{ p.namaPerangkat }}</div>\r
                      <div class="text-muted" style="font-size:.74rem;font-family:monospace">\r
                        ID: {{ p.deviceId }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                </td>\r
\r
                <!-- Model -->\r
                <td style="font-size:.87rem">{{ p.modelPerangkat || '\u2014' }}</td>\r
\r
                <!-- Manufaktur -->\r
                <td style="font-size:.87rem">{{ p.manufaktur || '\u2014' }}</td>\r
\r
                <!-- Terakhir Aktif -->\r
                <td>\r
                  @if (p.terakhirAktif) {\r
                    <span class="badge-aktif-custom" [class.badge-aktif-recent]="isAktifBaru(p.terakhirAktif)">\r
                      {{ formatTerakhirAktif(p.terakhirAktif) }}\r
                    </span>\r
                  } @else {\r
                    <span class="text-muted small">\u2014</span>\r
                  }\r
                </td>\r
\r
                <!-- Aksi -->\r
                <!--\r
                <td class="text-center">\r
                  <button class="btn btn-outline-danger btn-sm px-3"\r
                          (click)="confirmRevoke(p.id)"\r
                          title="Cabut akses perangkat ini">\r
                    <i class="bx bx-block me-1"></i> Cabut\r
                  </button>\r
                </td>\r
                -->\r
\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer info -->\r
      <div class="px-4 py-3 border-top" style="background:#fafafa;font-size:.8rem;color:#6b7280">\r
        <i class="bx bx-info-circle me-1 text-primary"></i>\r
        Mencabut perangkat akan memaksa karyawan login ulang di perangkat tersebut.\r
        Perangkat akan terdaftar kembali saat presensi berikutnya.\r
      </div>\r
    }\r
\r
  </div>\r
\r
  <!-- Modal konfirmasi cabut (belum dibutuhkan)\r
  @if (confirmRevokeId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger">\r
              <i class="bx bx-block me-2"></i>Cabut Perangkat?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted" style="font-size:.9rem">\r
            Akses perangkat ini akan dicabut. Karyawan harus login ulang di perangkat tersebut.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="cancelRevoke()"\r
                    [disabled]="revoking()">\r
              Batal\r
            </button>\r
            <button class="btn btn-danger btn-sm px-4"\r
                    (click)="doRevoke()"\r
                    [disabled]="revoking()">\r
              @if (revoking()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              }\r
              <i class="bx bx-block me-1"></i> Ya, Cabut\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  -->\r
\r
</app-layout>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/karyawan/karyawan-perangkat/karyawan-perangkat.component.scss */\n.info-bar {\n  border-radius: 12px !important;\n}\n.card-header-custom {\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f3f5;\n  background: #fff;\n}\n.table thead th {\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  padding: 12px 16px;\n  background: #fafafa;\n  border-bottom: 1px solid #f1f3f5;\n}\n.table tbody td {\n  padding: 12px 16px;\n  font-size: 0.87rem;\n  vertical-align: middle;\n  border-bottom: 1px solid #f9fafb;\n}\n.table tbody tr:last-child td {\n  border-bottom: none;\n}\n.device-icon-wrap {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: #ede9fe;\n  color: #7c3aed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  flex-shrink: 0;\n}\n.badge-aktif-custom {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 9999px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #374151;\n  white-space: nowrap;\n}\n.badge-aktif-recent {\n  background: #dcfce7;\n  color: #15803d;\n}\n/*# sourceMappingURL=karyawan-perangkat.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanPerangkatComponent, { className: "KaryawanPerangkatComponent", filePath: "src/app/features/karyawan/karyawan-perangkat/karyawan-perangkat.component.ts", lineNumber: 16 });
})();
export {
  KaryawanPerangkatComponent
};
//# sourceMappingURL=chunk-JHN5WZQK.js.map
