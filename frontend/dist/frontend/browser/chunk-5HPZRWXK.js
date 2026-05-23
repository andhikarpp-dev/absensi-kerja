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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/persetujuan-foto-profil.service.ts
var PersetujuanFotoProfilService = class _PersetujuanFotoProfilService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/persetujuan-foto-profil`;
  }
  findAll(status = "MENUNGGU", cari) {
    const p = new URLSearchParams({ status });
    if (cari)
      p.set("cari", cari);
    return this.http.get(`${this.url}?${p}`).pipe(map((d) => d.persetujuan ?? []));
  }
  ajukan(karyawanId, foto) {
    const fd = new FormData();
    fd.append("karyawanId", karyawanId.toString());
    fd.append("foto", foto);
    return this.http.post(`${this.url}/ajukan`, fd).pipe(map((d) => d.persetujuan));
  }
  setujui(id) {
    return this.http.patch(`${this.url}/${id}/setujui`, {}).pipe(map((d) => d.persetujuan));
  }
  tolak(id, catatanPenolakan) {
    return this.http.patch(`${this.url}/${id}/tolak`, { catatanPenolakan }).pipe(map((d) => d.persetujuan));
  }
  hapus(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function PersetujuanFotoProfilService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersetujuanFotoProfilService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersetujuanFotoProfilService, factory: _PersetujuanFotoProfilService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersetujuanFotoProfilService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/kehadiran/persetujuan-foto-profil/persetujuan-foto-profil.component.ts
function PersetujuanFotoProfilComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function PersetujuanFotoProfilComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function PersetujuanFotoProfilComponent_div_42_th_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_th_16_Template_th_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sort("status"));
    });
    \u0275\u0275text(1, " Status ");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("status")));
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.activeTab() === "DIPROSES" ? 7 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.info());
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r7.fotoLama, \u0275\u0275sanitizeUrl);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.namaKaryawan.charAt(0), " ");
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", r_r7.namaJabatan);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_tr_21_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(r_r7.fotoLama));
    });
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementStart(2, "div", 68);
    \u0275\u0275text(3, " Foto Lama ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", r_r7.fotoLama, \u0275\u0275sanitizeUrl);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, " Belum ada ");
    \u0275\u0275elementEnd();
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Diproses: ", ctx_r1.formatTanggal(r_r7.diprosesAt), " ");
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_td_27_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r7.catatanPenolakan, " ");
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PersetujuanFotoProfilComponent_div_42_tr_21_td_27_div_3_Template, 3, 1, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge ", ctx_r1.statusBadge(r_r7.status).cls, " px-2 py-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusBadge(r_r7.status).label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.catatanPenolakan);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 80);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 74);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setujui(r_r7));
    });
    \u0275\u0275template(2, PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_span_2_Template, 1, 0, "span", 75)(3, PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_i_3_Template, 1, 0, "i", 76);
    \u0275\u0275text(4, "Setujui ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTolak(r_r7));
    });
    \u0275\u0275element(6, "i", 78);
    \u0275\u0275text(7, "Tolak ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingId() === r_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingId() === r_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingId() !== r_r7.id);
  }
}
function PersetujuanFotoProfilComponent_div_42_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 21)(5, "div", 50);
    \u0275\u0275template(6, PersetujuanFotoProfilComponent_div_42_tr_21_img_6_Template, 1, 1, "img", 51)(7, PersetujuanFotoProfilComponent_div_42_tr_21_span_7_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54);
    \u0275\u0275text(12);
    \u0275\u0275template(13, PersetujuanFotoProfilComponent_div_42_tr_21_span_13_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, PersetujuanFotoProfilComponent_div_42_tr_21_div_15_Template, 4, 1, "div", 55)(16, PersetujuanFotoProfilComponent_div_42_tr_21_ng_template_16_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "div", 56);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_tr_21_Template_div_click_19_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(r_r7.fotoBaru));
    });
    \u0275\u0275element(20, "img", 57);
    \u0275\u0275elementStart(21, "div", 58);
    \u0275\u0275text(22, " Foto Baru ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 59)(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, PersetujuanFotoProfilComponent_div_42_tr_21_div_26_Template, 2, 1, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, PersetujuanFotoProfilComponent_div_42_tr_21_td_27_Template, 4, 5, "td", 46);
    \u0275\u0275elementStart(28, "td")(29, "div", 61);
    \u0275\u0275template(30, PersetujuanFotoProfilComponent_div_42_tr_21_ng_container_30_Template, 8, 3, "ng-container", 46);
    \u0275\u0275elementStart(31, "button", 62);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_tr_21_Template_button_click_31_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hapus(r_r7));
    });
    \u0275\u0275element(32, "i", 63);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const i_r10 = ctx.index;
    const noFotoLama_r11 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dtPage() - 1) * ctx_r1.dtPageSize() + i_r10 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", r_r7.fotoLama);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r7.fotoLama);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r7.namaDivisi ?? "-", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.namaJabatan);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r7.fotoLama)("ngIfElse", noFotoLama_r11);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", r_r7.fotoBaru, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatTanggal(r_r7.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.diprosesAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "DIPROSES");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "MENUNGGU");
  }
}
function PersetujuanFotoProfilComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead", 40)(3, "tr")(4, "th", 41);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 42);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort("namaKaryawan"));
    });
    \u0275\u0275text(7, " Karyawan ");
    \u0275\u0275element(8, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 43);
    \u0275\u0275text(10, "Foto Lama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 43);
    \u0275\u0275text(12, "Foto Baru");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 44);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_42_Template_th_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort("createdAt"));
    });
    \u0275\u0275text(14, " Diajukan ");
    \u0275\u0275element(15, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PersetujuanFotoProfilComponent_div_42_th_16_Template, 3, 3, "th", 45);
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, PersetujuanFotoProfilComponent_div_42_tr_20_Template, 4, 2, "tr", 46)(21, PersetujuanFotoProfilComponent_div_42_tr_21_Template, 33, 13, "tr", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("namaKaryawan")));
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("createdAt")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "DIPROSES");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.paged().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paged());
  }
}
function PersetujuanFotoProfilComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 81);
    \u0275\u0275elementStart(2, "div", 82);
    \u0275\u0275text(3, "Memuat data\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PersetujuanFotoProfilComponent_li_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 31)(1, "button", 32);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_li_56_Template_button_click_1_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goPage(p_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", p_r13 === ctx_r1.dtPage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13);
  }
}
function PersetujuanFotoProfilComponent_div_63_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tolakError());
  }
}
function PersetujuanFotoProfilComponent_div_63_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function PersetujuanFotoProfilComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "h5", 87);
    \u0275\u0275text(5, "Tolak Foto Profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_63_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89);
    \u0275\u0275template(8, PersetujuanFotoProfilComponent_div_63_div_8_Template, 2, 1, "div", 90);
    \u0275\u0275elementStart(9, "label", 91);
    \u0275\u0275text(10, "Catatan Penolakan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 92);
    \u0275\u0275listener("input", function PersetujuanFotoProfilComponent_div_63_Template_textarea_input_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tolakCatatan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 93)(13, "button", 94);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_63_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTolakModal.set(false));
    });
    \u0275\u0275text(14, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 95);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_63_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitTolak());
    });
    \u0275\u0275template(16, PersetujuanFotoProfilComponent_div_63_span_16_Template, 1, 0, "span", 75);
    \u0275\u0275text(17, " Tolak ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.tolakError());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.tolakCatatan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.tolakSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tolakSaving());
  }
}
function PersetujuanFotoProfilComponent_div_64_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ajukanError());
  }
}
function PersetujuanFotoProfilComponent_div_64_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r16 = ctx.$implicit;
    \u0275\u0275property("value", k_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r16.namaLengkap);
  }
}
function PersetujuanFotoProfilComponent_div_64_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "img", 106);
    \u0275\u0275elementStart(2, "div", 107);
    \u0275\u0275text(3, "Preview foto baru");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.ajukanPreview(), \u0275\u0275sanitizeUrl);
  }
}
function PersetujuanFotoProfilComponent_div_64_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function PersetujuanFotoProfilComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 97)(2, "div", 85)(3, "div", 86)(4, "h5", 98);
    \u0275\u0275text(5, "Ajukan Foto Profil Baru");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_64_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAjukanModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89);
    \u0275\u0275template(8, PersetujuanFotoProfilComponent_div_64_div_8_Template, 2, 1, "div", 90);
    \u0275\u0275elementStart(9, "div", 99)(10, "label", 91);
    \u0275\u0275text(11, "Karyawan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 100);
    \u0275\u0275listener("change", function PersetujuanFotoProfilComponent_div_64_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ajukanKaryawanId.set($event.target.value));
    });
    \u0275\u0275elementStart(13, "option", 101);
    \u0275\u0275text(14, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PersetujuanFotoProfilComponent_div_64_option_15_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 99)(17, "label", 91);
    \u0275\u0275text(18, "Foto Baru *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 102);
    \u0275\u0275listener("change", function PersetujuanFotoProfilComponent_div_64_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFotoChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, PersetujuanFotoProfilComponent_div_64_div_20_Template, 4, 1, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 93)(22, "button", 94);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_64_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAjukanModal.set(false));
    });
    \u0275\u0275text(23, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 104);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_64_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAjukan());
    });
    \u0275\u0275template(25, PersetujuanFotoProfilComponent_div_64_span_25_Template, 1, 0, "span", 75);
    \u0275\u0275text(26, " Ajukan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.ajukanError());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.ajukanKaryawanId());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.karyawanList());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.ajukanPreview());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.ajukanSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ajukanSaving());
  }
}
function PersetujuanFotoProfilComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_65_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275elementStart(1, "div", 109);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_65_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 110);
    \u0275\u0275element(3, "img", 111);
    \u0275\u0275elementStart(4, "div", 112)(5, "button", 113);
    \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_div_65_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275element(6, "i", 78);
    \u0275\u0275text(7, "Tutup ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.previewUrl(), \u0275\u0275sanitizeUrl);
  }
}
var PersetujuanFotoProfilComponent = class _PersetujuanFotoProfilComponent {
  constructor() {
    this.svc = inject(PersetujuanFotoProfilService);
    this.karyawanSvc = inject(KaryawanService);
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
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
    this.activeTab = signal("MENUNGGU", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
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
    this.previewUrl = signal(null, ...ngDevMode ? [{ debugName: "previewUrl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showAjukanModal = signal(false, ...ngDevMode ? [{ debugName: "showAjukanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ajukanKaryawanId = signal("", ...ngDevMode ? [{ debugName: "ajukanKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ajukanFoto = signal(null, ...ngDevMode ? [{ debugName: "ajukanFoto" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ajukanPreview = signal(null, ...ngDevMode ? [{ debugName: "ajukanPreview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ajukanSaving = signal(false, ...ngDevMode ? [{ debugName: "ajukanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ajukanError = signal("", ...ngDevMode ? [{ debugName: "ajukanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered = computed(() => {
      const q = this.dtSearch().toLowerCase();
      return this.rows().filter((r) => !q || r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q));
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
    this.pagesArr = computed(() => {
      const cur = this.dtPage(), total = this.totalPages();
      const pages = [];
      for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++)
        pages.push(i);
      return pages;
    }, ...ngDevMode ? [{ debugName: "pagesArr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.info = computed(() => {
      const total = this.sorted().length;
      if (total === 0)
        return "Menampilkan 0 dari 0 total data";
      const page = Math.min(this.dtPage(), this.totalPages());
      const start = (page - 1) * this.dtPageSize() + 1;
      const end = Math.min(page * this.dtPageSize(), total);
      return `Menampilkan ${start}\u2013${end} dari ${total} total data`;
    }, ...ngDevMode ? [{ debugName: "info" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
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
    const status = this.activeTab() === "MENUNGGU" ? "MENUNGGU" : "SEMUA";
    this.svc.findAll(status, this.filterCari() || void 0).subscribe({
      next: (data) => {
        const filtered = this.activeTab() === "DIPROSES" ? data.filter((r) => r.status === "DISETUJUI" || r.status === "DITOLAK") : data;
        this.rows.set(filtered);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
  }
  cari() {
    this.dtPage.set(1);
    this.loadData();
  }
  // ── Sort ───────────────────────────────────────────────────
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
  goPage(p) {
    if (p < 1 || p > this.totalPages())
      return;
    this.dtPage.set(p);
  }
  // ── Aksi ───────────────────────────────────────────────────
  setujui(r) {
    if (!confirm(`Setujui foto profil baru untuk ${r.namaKaryawan}?
Foto profil akan langsung diperbarui.`))
      return;
    this.savingId.set(r.id);
    this.svc.setujui(r.id).subscribe({
      next: () => {
        this.savingId.set(null);
        this.loadData();
      },
      error: (e) => {
        this.savingId.set(null);
        alert(e?.error?.message ?? "Gagal");
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
    if (!confirm(`Hapus pengajuan foto profil ${r.namaKaryawan}?`))
      return;
    this.svc.hapus(r.id).subscribe({
      next: () => this.loadData(),
      error: (e) => alert(e?.error?.message ?? "Gagal menghapus")
    });
  }
  // ── Preview foto ───────────────────────────────────────────
  openPreview(url) {
    this.previewUrl.set(url);
  }
  closePreview() {
    this.previewUrl.set(null);
  }
  // ── Modal Ajukan ───────────────────────────────────────────
  openAjukan() {
    this.ajukanKaryawanId.set("");
    this.ajukanFoto.set(null);
    this.ajukanPreview.set(null);
    this.ajukanError.set("");
    this.showAjukanModal.set(true);
  }
  onFotoChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.ajukanFoto.set(file);
    const reader = new FileReader();
    reader.onload = (e) => this.ajukanPreview.set(e.target?.result);
    reader.readAsDataURL(file);
  }
  submitAjukan() {
    if (!this.ajukanKaryawanId()) {
      this.ajukanError.set("Pilih karyawan");
      return;
    }
    if (!this.ajukanFoto()) {
      this.ajukanError.set("Pilih foto");
      return;
    }
    this.ajukanSaving.set(true);
    this.svc.ajukan(+this.ajukanKaryawanId(), this.ajukanFoto()).subscribe({
      next: () => {
        this.ajukanSaving.set(false);
        this.showAjukanModal.set(false);
        this.loadData();
      },
      error: (e) => {
        this.ajukanSaving.set(false);
        this.ajukanError.set(e?.error?.message ?? "Gagal mengajukan");
      }
    });
  }
  // ── Helpers ────────────────────────────────────────────────
  statusBadge(s) {
    if (s === "DISETUJUI")
      return { label: "Disetujui", cls: "bg-success" };
    if (s === "DITOLAK")
      return { label: "Ditolak", cls: "bg-danger" };
    return { label: "Menunggu", cls: "bg-warning text-dark" };
  }
  formatTanggal(iso) {
    if (!iso)
      return "-";
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  static {
    this.\u0275fac = function PersetujuanFotoProfilComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersetujuanFotoProfilComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersetujuanFotoProfilComponent, selectors: [["app-persetujuan-foto-profil"]], decls: 66, vars: 28, consts: [["loadTpl", ""], ["noFotoLama", ""], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "gap-2", "mb-3"], [1, "btn", "btn-sm", "px-4", "rounded-pill", 3, "click"], ["type", "text", "placeholder", "Cari karyawan...", 1, "form-control", "form-control-sm", 2, "max-width", "240px", 3, "input", "value"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-search"], ["class", "alert alert-danger py-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "text-muted", 2, "font-size", ".82rem"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.5)", 4, "ngIf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.8);cursor:pointer", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger", "py-2"], [3, "value"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "background", "#f0f2f5"], [2, "width", "36px"], [2, "cursor", "pointer", "min-width", "220px", 3, "click"], [2, "min-width", "140px"], [2, "cursor", "pointer", 3, "click"], ["style", "cursor:pointer", 3, "click", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center", "py-5"], [1, "text-muted", 2, "font-size", ".78rem"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "36px", "height", "36px", "overflow", "hidden", "background", "#e0d7fa"], ["alt", "", "style", "width:36px;height:36px;object-fit:cover;border-radius:50%", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], ["class", "fw-bold", "style", "color:#6c5ce7;font-size:.82rem", 4, "ngIf"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "text-muted", 2, "font-size", ".75rem"], ["class", "rounded overflow-hidden position-relative", "style", "width:80px;height:80px;cursor:pointer;border:2px solid #dee2e6", 3, "click", 4, "ngIf", "ngIfElse"], [1, "rounded", "overflow-hidden", "position-relative", 2, "width", "80px", "height", "80px", "cursor", "pointer", "border", "2px solid #6c5ce7", 3, "click"], ["alt", "Foto Baru", "onerror", "this.parentElement.querySelector('span').style.display='block'", 2, "width", "80px", "height", "80px", "object-fit", "cover", 3, "src"], [1, "position-absolute", "bottom-0", "start-0", "end-0", "text-center", "text-white", 2, "background", "rgba(108,92,231,.7)", "font-size", ".65rem", "padding", "2px"], [2, "font-size", ".82rem"], ["class", "text-muted", "style", "font-size:.75rem", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-danger", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click"], [1, "bx", "bx-trash"], ["alt", "", "onerror", "this.style.display='none'", 2, "width", "36px", "height", "36px", "object-fit", "cover", "border-radius", "50%", 3, "src"], [1, "fw-bold", 2, "color", "#6c5ce7", "font-size", ".82rem"], [1, "rounded", "overflow-hidden", "position-relative", 2, "width", "80px", "height", "80px", "cursor", "pointer", "border", "2px solid #dee2e6", 3, "click"], ["alt", "Foto Lama", "onerror", "this.parentElement.style.display='none'", 2, "width", "80px", "height", "80px", "object-fit", "cover", 3, "src"], [1, "position-absolute", "bottom-0", "start-0", "end-0", "text-center", "text-white", 2, "background", "rgba(0,0,0,.4)", "font-size", ".65rem", "padding", "2px"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded", 2, "width", "80px", "height", "80px", "background", "#f8f9fa", "border", "2px dashed #dee2e6", "font-size", ".72rem", "color", "#adb5bd"], [2, "font-size", ".76rem"], ["class", "text-danger mt-1", "style", "font-size:.75rem;max-width:160px", 4, "ngIf"], [1, "text-danger", "mt-1", 2, "font-size", ".75rem", "max-width", "160px"], [1, "bx", "bx-info-circle", "me-1"], [1, "btn", "btn-sm", "btn-success", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bx bx-check me-1", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click"], [1, "bx", "bx-x", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-check", "me-1"], [1, "spinner-border", "text-primary", 2, "width", "2rem", "height", "2rem"], [1, "text-muted", "mt-2", 2, "font-size", ".83rem"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-sm", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "fw-bold", "text-danger"], [1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "form-label", "fw-semibold"], ["rows", "3", "placeholder", "Jelaskan alasan penolakan...", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "modal-dialog", "modal-md", "modal-dialog-centered"], [1, "modal-title", "fw-bold"], [1, "mb-3"], [1, "form-select", "form-select-sm", 3, "change", "value"], ["value", ""], ["type", "file", "accept", "image/*", 1, "form-control", "form-control-sm", 3, "change"], ["class", "text-center mb-3", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "text-center", "mb-3"], ["alt", "Preview", 1, "rounded", 2, "width", "120px", "height", "120px", "object-fit", "cover", "border", "3px solid #6c5ce7", 3, "src"], [1, "text-muted", "mt-1", 2, "font-size", ".78rem"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.8)", "cursor", "pointer", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "480px", 3, "click"], [1, "modal-content", "border-0", "bg-transparent"], ["alt", "Foto", 1, "rounded", 2, "width", "100%", "max-height", "80vh", "object-fit", "contain", 3, "src"], [1, "text-center", "mt-2"], [1, "btn", "btn-light", "btn-sm", 3, "click"]], template: function PersetujuanFotoProfilComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 2)(2, "div")(3, "h4", 3);
        \u0275\u0275text(4, "Persetujuan Foto Profil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 6)(11, "span", 8);
        \u0275\u0275text(12, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14, "Persetujuan Foto Profil");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "button", 10);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_15_listener() {
          return ctx.openAjukan();
        });
        \u0275\u0275element(16, "i", 11);
        \u0275\u0275text(17, " Ajukan Foto ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "button", 15);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_21_listener() {
          return ctx.setTab("MENUNGGU");
        });
        \u0275\u0275text(22, " Pengajuan ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_23_listener() {
          return ctx.setTab("DIPROSES");
        });
        \u0275\u0275text(24, " Telah Diproses ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "input", 16);
        \u0275\u0275listener("input", function PersetujuanFotoProfilComponent_Template_input_input_26_listener($event) {
          return ctx.filterCari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_27_listener() {
          return ctx.cari();
        });
        \u0275\u0275element(28, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, PersetujuanFotoProfilComponent_div_29_Template, 2, 1, "div", 19);
        \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "label", 22);
        \u0275\u0275text(33, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 23);
        \u0275\u0275listener("change", function PersetujuanFotoProfilComponent_Template_select_change_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtPageSize.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275template(35, PersetujuanFotoProfilComponent_option_35_Template, 2, 2, "option", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 25);
        \u0275\u0275text(37, "data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 21)(39, "label", 22);
        \u0275\u0275text(40, "Cari:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "input", 26);
        \u0275\u0275listener("input", function PersetujuanFotoProfilComponent_Template_input_input_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtSearch.set($event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, PersetujuanFotoProfilComponent_div_42_Template, 22, 9, "div", 27)(43, PersetujuanFotoProfilComponent_ng_template_43_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(45, "div", 28)(46, "div", 29);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "nav")(49, "ul", 30)(50, "li", 31)(51, "button", 32);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_51_listener() {
          return ctx.goPage(1);
        });
        \u0275\u0275text(52, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "li", 31)(54, "button", 32);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_54_listener() {
          return ctx.goPage(ctx.dtPage() - 1);
        });
        \u0275\u0275text(55, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, PersetujuanFotoProfilComponent_li_56_Template, 3, 3, "li", 33);
        \u0275\u0275elementStart(57, "li", 31)(58, "button", 32);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_58_listener() {
          return ctx.goPage(ctx.dtPage() + 1);
        });
        \u0275\u0275text(59, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "li", 31)(61, "button", 32);
        \u0275\u0275listener("click", function PersetujuanFotoProfilComponent_Template_button_click_61_listener() {
          return ctx.goPage(ctx.totalPages());
        });
        \u0275\u0275text(62, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(63, PersetujuanFotoProfilComponent_div_63_Template, 18, 4, "div", 34)(64, PersetujuanFotoProfilComponent_div_64_Template, 27, 6, "div", 34)(65, PersetujuanFotoProfilComponent_div_65_Template, 8, 1, "div", 35);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadTpl_r18 = \u0275\u0275reference(44);
        \u0275\u0275advance(21);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "MENUNGGU")("btn-outline-secondary", ctx.activeTab() !== "MENUNGGU");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DIPROSES")("btn-outline-secondary", ctx.activeTab() !== "DIPROSES");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(3);
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
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.dtPage() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.dtPage() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.pagesArr());
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.dtPage() === ctx.totalPages());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.dtPage() === ctx.totalPages());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showTolakModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAjukanModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.previewUrl());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersetujuanFotoProfilComponent, [{
    type: Component,
    args: [{ selector: "app-persetujuan-foto-profil", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <div>\r
      <h4 class="fw-bold mb-0">Persetujuan Foto Profil</h4>\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
          <li class="breadcrumb-item"><span class="text-primary">Kehadiran</span></li>\r
          <li class="breadcrumb-item active">Persetujuan Foto Profil</li>\r
        </ol>\r
      </nav>\r
    </div>\r
    <button class="btn btn-primary btn-sm px-3" (click)="openAjukan()">\r
      <i class="bx bx-plus me-1"></i> Ajukan Foto\r
    </button>\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Tab -->\r
      <div class="d-flex gap-2 mb-3">\r
        <button class="btn btn-sm px-4 rounded-pill"\r
          [class.btn-primary]="activeTab()==='MENUNGGU'"\r
          [class.btn-outline-secondary]="activeTab()!=='MENUNGGU'"\r
          (click)="setTab('MENUNGGU')">\r
          Pengajuan\r
        </button>\r
        <button class="btn btn-sm px-4 rounded-pill"\r
          [class.btn-primary]="activeTab()==='DIPROSES'"\r
          [class.btn-outline-secondary]="activeTab()!=='DIPROSES'"\r
          (click)="setTab('DIPROSES')">\r
          Telah Diproses\r
        </button>\r
      </div>\r
\r
      <!-- Search -->\r
      <div class="d-flex gap-2 mb-3">\r
        <input type="text" class="form-control form-control-sm" style="max-width:240px"\r
          placeholder="Cari karyawan..."\r
          [value]="filterCari()"\r
          (input)="filterCari.set($any($event.target).value)">\r
        <button class="btn btn-sm btn-primary px-3" (click)="cari()">\r
          <i class="bx bx-search"></i>\r
        </button>\r
      </div>\r
\r
      <!-- Error -->\r
      <div *ngIf="error()" class="alert alert-danger py-2">{{ error() }}</div>\r
\r
      <!-- DataTable Controls -->\r
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
              <th style="cursor:pointer;min-width:220px" (click)="sort('namaKaryawan')">\r
                Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
              </th>\r
              <th style="min-width:140px">Foto Lama</th>\r
              <th style="min-width:140px">Foto Baru</th>\r
              <th style="cursor:pointer" (click)="sort('createdAt')">\r
                Diajukan <i class="bx {{ sortIcon('createdAt') }}"></i>\r
              </th>\r
              <th *ngIf="activeTab()==='DIPROSES'" style="cursor:pointer" (click)="sort('status')">\r
                Status <i class="bx {{ sortIcon('status') }}"></i>\r
              </th>\r
              <th>Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="paged().length === 0">\r
              <td [attr.colspan]="activeTab()==='DIPROSES' ? 7 : 6" class="text-center py-5">\r
                <b>{{ info() }}</b>\r
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
                       style="width:36px;height:36px;overflow:hidden;background:#e0d7fa">\r
                    <img *ngIf="r.fotoLama" [src]="r.fotoLama" alt=""\r
                         style="width:36px;height:36px;object-fit:cover;border-radius:50%"\r
                         onerror="this.style.display='none'">\r
                    <span *ngIf="!r.fotoLama" class="fw-bold" style="color:#6c5ce7;font-size:.82rem">\r
                      {{ r.namaKaryawan.charAt(0) }}\r
                    </span>\r
                  </div>\r
                  <div>\r
                    <div class="fw-semibold" style="font-size:.85rem">{{ r.namaKaryawan }}</div>\r
                    <div class="text-muted" style="font-size:.75rem">\r
                      {{ r.namaDivisi ?? '-' }}\r
                      <span *ngIf="r.namaJabatan"> \xB7 {{ r.namaJabatan }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </td>\r
              <!-- Foto Lama -->\r
              <td>\r
                <div *ngIf="r.fotoLama; else noFotoLama"\r
                     class="rounded overflow-hidden position-relative"\r
                     style="width:80px;height:80px;cursor:pointer;border:2px solid #dee2e6"\r
                     (click)="openPreview(r.fotoLama!)">\r
                  <img [src]="r.fotoLama" alt="Foto Lama"\r
                       style="width:80px;height:80px;object-fit:cover"\r
                       onerror="this.parentElement.style.display='none'">\r
                  <div class="position-absolute bottom-0 start-0 end-0 text-center text-white"\r
                       style="background:rgba(0,0,0,.4);font-size:.65rem;padding:2px">\r
                    Foto Lama\r
                  </div>\r
                </div>\r
                <ng-template #noFotoLama>\r
                  <div class="d-flex align-items-center justify-content-center rounded"\r
                       style="width:80px;height:80px;background:#f8f9fa;border:2px dashed #dee2e6;font-size:.72rem;color:#adb5bd">\r
                    Belum ada\r
                  </div>\r
                </ng-template>\r
              </td>\r
              <!-- Foto Baru -->\r
              <td>\r
                <div class="rounded overflow-hidden position-relative"\r
                     style="width:80px;height:80px;cursor:pointer;border:2px solid #6c5ce7"\r
                     (click)="openPreview(r.fotoBaru)">\r
                  <img [src]="r.fotoBaru" alt="Foto Baru"\r
                       style="width:80px;height:80px;object-fit:cover"\r
                       onerror="this.parentElement.querySelector('span').style.display='block'">\r
                  <div class="position-absolute bottom-0 start-0 end-0 text-center text-white"\r
                       style="background:rgba(108,92,231,.7);font-size:.65rem;padding:2px">\r
                    Foto Baru\r
                  </div>\r
                </div>\r
              </td>\r
              <!-- Diajukan -->\r
              <td style="font-size:.82rem">\r
                <div>{{ formatTanggal(r.createdAt) }}</div>\r
                <div *ngIf="r.diprosesAt" class="text-muted" style="font-size:.75rem">\r
                  Diproses: {{ formatTanggal(r.diprosesAt) }}\r
                </div>\r
              </td>\r
              <!-- Status (hanya tab Diproses) -->\r
              <td *ngIf="activeTab()==='DIPROSES'">\r
                <span class="badge {{ statusBadge(r.status).cls }} px-2 py-1" style="font-size:.76rem">\r
                  {{ statusBadge(r.status).label }}\r
                </span>\r
                <div *ngIf="r.catatanPenolakan" class="text-danger mt-1" style="font-size:.75rem;max-width:160px">\r
                  <i class="bx bx-info-circle me-1"></i>{{ r.catatanPenolakan }}\r
                </div>\r
              </td>\r
              <!-- Aksi -->\r
              <td>\r
                <div class="d-flex gap-1 flex-wrap">\r
                  <ng-container *ngIf="activeTab()==='MENUNGGU'">\r
                    <button class="btn btn-sm btn-success px-2 py-1"\r
                      style="font-size:.78rem"\r
                      [disabled]="savingId() === r.id"\r
                      (click)="setujui(r)">\r
                      <span *ngIf="savingId()===r.id" class="spinner-border spinner-border-sm me-1"></span>\r
                      <i *ngIf="savingId()!==r.id" class="bx bx-check me-1"></i>Setujui\r
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
          <div class="text-muted mt-2" style="font-size:.83rem">Memuat data\u2026</div>\r
        </div>\r
      </ng-template>\r
\r
      <!-- Pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-3">\r
        <div class="text-muted" style="font-size:.82rem">{{ info() }}</div>\r
        <nav>\r
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
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tolak \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="showTolakModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
    <div class="modal-dialog modal-sm modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold text-danger">Tolak Foto Profil</h5>\r
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
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Ajukan Foto \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="showAjukanModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
    <div class="modal-dialog modal-md modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Ajukan Foto Profil Baru</h5>\r
          <button class="btn-close" (click)="showAjukanModal.set(false)"></button>\r
        </div>\r
        <div class="modal-body">\r
          <div *ngIf="ajukanError()" class="alert alert-danger py-2 mb-3">{{ ajukanError() }}</div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Karyawan *</label>\r
            <select class="form-select form-select-sm"\r
              [value]="ajukanKaryawanId()"\r
              (change)="ajukanKaryawanId.set($any($event.target).value)">\r
              <option value="">-- Pilih Karyawan --</option>\r
              <option *ngFor="let k of karyawanList()" [value]="k.id">{{ k.namaLengkap }}</option>\r
            </select>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Foto Baru *</label>\r
            <input type="file" class="form-control form-control-sm" accept="image/*"\r
              (change)="onFotoChange($event)">\r
          </div>\r
\r
          <!-- Preview -->\r
          <div *ngIf="ajukanPreview()" class="text-center mb-3">\r
            <img [src]="ajukanPreview()!" alt="Preview"\r
                 class="rounded"\r
                 style="width:120px;height:120px;object-fit:cover;border:3px solid #6c5ce7">\r
            <div class="text-muted mt-1" style="font-size:.78rem">Preview foto baru</div>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm" (click)="showAjukanModal.set(false)">Batal</button>\r
          <button class="btn btn-primary btn-sm" [disabled]="ajukanSaving()" (click)="submitAjukan()">\r
            <span *ngIf="ajukanSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Ajukan\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Preview Foto \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="previewUrl()" class="modal d-block" tabindex="-1"\r
       style="background:rgba(0,0,0,.8);cursor:pointer"\r
       (click)="closePreview()">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:480px" (click)="$event.stopPropagation()">\r
      <div class="modal-content border-0 bg-transparent">\r
        <img [src]="previewUrl()!" alt="Foto"\r
             class="rounded"\r
             style="width:100%;max-height:80vh;object-fit:contain">\r
        <div class="text-center mt-2">\r
          <button class="btn btn-light btn-sm" (click)="closePreview()">\r
            <i class="bx bx-x me-1"></i>Tutup\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersetujuanFotoProfilComponent, { className: "PersetujuanFotoProfilComponent", filePath: "src/app/features/kehadiran/persetujuan-foto-profil/persetujuan-foto-profil.component.ts", lineNumber: 20 });
})();
export {
  PersetujuanFotoProfilComponent
};
//# sourceMappingURL=chunk-5HPZRWXK.js.map
