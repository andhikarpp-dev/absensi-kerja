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

// src/app/core/services/persetujuan-presensi.service.ts
var PersetujuanPresensiService = class _PersetujuanPresensiService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/persetujuan-presensi`;
  }
  findAll(diizinkan, tanggal, jenisPresensi, cari) {
    const p = new URLSearchParams({ diizinkan: diizinkan.toString() });
    if (tanggal)
      p.set("tanggal", tanggal);
    if (jenisPresensi)
      p.set("jenisPresensi", jenisPresensi);
    if (cari)
      p.set("cari", cari);
    return this.http.get(`${this.url}?${p}`).pipe(map((d) => d.persetujuan ?? []));
  }
  buat(req) {
    return this.http.post(this.url, req).pipe(map((d) => d.persetujuan));
  }
  izinkan(id) {
    return this.http.patch(`${this.url}/${id}/izinkan`, {}).pipe(map((d) => d.persetujuan));
  }
  izinkanTerpilih(ids) {
    return this.http.post(`${this.url}/izinkan-terpilih`, { ids }).pipe(map((d) => d.jumlah));
  }
  izinkanSemua(tanggal, jenisPresensi, cari) {
    const p = new URLSearchParams();
    if (tanggal)
      p.set("tanggal", tanggal);
    if (jenisPresensi)
      p.set("jenisPresensi", jenisPresensi);
    if (cari)
      p.set("cari", cari);
    return this.http.post(`${this.url}/izinkan-semua?${p}`, {}).pipe(map((d) => d.jumlah));
  }
  hapus(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function PersetujuanPresensiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersetujuanPresensiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersetujuanPresensiService, factory: _PersetujuanPresensiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersetujuanPresensiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/kehadiran/persetujuan-presensi/persetujuan-presensi.component.ts
function PersetujuanPresensiComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("value", o_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.label);
  }
}
function PersetujuanPresensiComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
}
function PersetujuanPresensiComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
}
function PersetujuanPresensiComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function PersetujuanPresensiComponent_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
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
function PersetujuanPresensiComponent_div_59_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 57);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_59_input_5_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAll($event.target.checked));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r2.allChecked());
  }
}
function PersetujuanPresensiComponent_div_59_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.info());
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 57);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_59_tr_19_input_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const r_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleOne(r_r9.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r2.isSelected(r_r9.id));
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.dtPage() - 1) * ctx_r2.dtPageSize() + i_r10 + 1, " ");
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 73);
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r9.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r9.namaKaryawan.charAt(0), " ");
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2013 ", r_r9.jamJadwalKeluar);
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PersetujuanPresensiComponent_div_59_tr_19_div_17_span_2_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r9.jamJadwalMasuk, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.jamJadwalKeluar);
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r9.alasan, " ");
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 76);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const r_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.izinkan(r_r9));
    });
    \u0275\u0275template(2, PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_span_2_Template, 1, 0, "span", 26)(3, PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_i_3_Template, 1, 0, "i", 77);
    \u0275\u0275text(4, "Izinkan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.savingId() === r_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.savingId() === r_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.savingId() !== r_r9.id);
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 79);
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275text(3, "Sudah Diizinkan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PersetujuanPresensiComponent_div_59_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, PersetujuanPresensiComponent_div_59_tr_19_input_2_Template, 1, 1, "input", 53)(3, PersetujuanPresensiComponent_div_59_tr_19_span_3_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 33)(6, "div", 60);
    \u0275\u0275template(7, PersetujuanPresensiComponent_div_59_tr_19_img_7_Template, 1, 1, "img", 61)(8, PersetujuanPresensiComponent_div_59_tr_19_span_8_Template, 2, 1, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "div", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 65);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PersetujuanPresensiComponent_div_59_tr_19_div_17_Template, 3, 2, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 67);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 64);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, PersetujuanPresensiComponent_div_59_tr_19_div_23_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 69);
    \u0275\u0275template(26, PersetujuanPresensiComponent_div_59_tr_19_ng_container_26_Template, 5, 3, "ng-container", 55)(27, PersetujuanPresensiComponent_div_59_tr_19_ng_container_27_Template, 4, 0, "ng-container", 55);
    \u0275\u0275elementStart(28, "button", 70);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_59_tr_19_Template_button_click_28_listener() {
      const r_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hapus(r_r9));
    });
    \u0275\u0275element(29, "i", 71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.showDiizinkan());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showDiizinkan());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", r_r9.fotoProfil);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r9.fotoProfil);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.namaDivisi ?? "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.namaPolaKerja ?? "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.jamJadwalMasuk);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.jenisColor(r_r9.jenisPresensi))("color", "#fff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.jenisLabel(r_r9.jenisPresensi), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatTanggal(r_r9.tanggal), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.alasan);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !r_r9.diizinkan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.diizinkan);
  }
}
function PersetujuanPresensiComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "table", 50)(2, "thead", 51)(3, "tr")(4, "th", 52);
    \u0275\u0275template(5, PersetujuanPresensiComponent_div_59_input_5_Template, 1, 1, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 54);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_59_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("namaKaryawan"));
    });
    \u0275\u0275text(7, " Karyawan ");
    \u0275\u0275element(8, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 54);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_59_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("namaPolaKerja"));
    });
    \u0275\u0275text(10, " Jadwal Kerja ");
    \u0275\u0275element(11, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 54);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_59_Template_th_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("jenisPresensi"));
    });
    \u0275\u0275text(13, " Presensi ");
    \u0275\u0275element(14, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, PersetujuanPresensiComponent_div_59_tr_18_Template, 4, 1, "tr", 55)(19, PersetujuanPresensiComponent_div_59_tr_19_Template, 30, 17, "tr", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r2.showDiizinkan());
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("namaKaryawan")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("namaPolaKerja")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("jenisPresensi")));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.paged().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.paged());
  }
}
function PersetujuanPresensiComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "div", 81);
    \u0275\u0275elementStart(2, "div", 82);
    \u0275\u0275text(3, "Memuat data\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PersetujuanPresensiComponent_li_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 42)(1, "button", 43);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_li_73_Template_button_click_1_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goPage(p_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", p_r13 === ctx_r2.dtPage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13);
  }
}
function PersetujuanPresensiComponent_div_80_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.modalError());
  }
}
function PersetujuanPresensiComponent_div_80_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
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
function PersetujuanPresensiComponent_div_80_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
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
function PersetujuanPresensiComponent_div_80_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
  }
}
function PersetujuanPresensiComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "h5", 87);
    \u0275\u0275text(5, "Tambah Persetujuan Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_80_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBuatModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89);
    \u0275\u0275template(8, PersetujuanPresensiComponent_div_80_div_8_Template, 2, 1, "div", 90);
    \u0275\u0275elementStart(9, "div", 91)(10, "label", 92);
    \u0275\u0275text(11, "Karyawan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 93);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_80_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formKaryawanId.set($event.target.value));
    });
    \u0275\u0275elementStart(13, "option", 18);
    \u0275\u0275text(14, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PersetujuanPresensiComponent_div_80_option_15_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 91)(17, "label", 92);
    \u0275\u0275text(18, "Tanggal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 94);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_80_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formTanggal.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 91)(21, "label", 92);
    \u0275\u0275text(22, "Jenis Kehadiran *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 93);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_80_Template_select_change_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formJenis.set($event.target.value));
    });
    \u0275\u0275template(24, PersetujuanPresensiComponent_div_80_option_24_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 91)(26, "label", 92);
    \u0275\u0275text(27, "Nama Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 95);
    \u0275\u0275listener("input", function PersetujuanPresensiComponent_div_80_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formPolaKerja.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 96)(30, "div", 97)(31, "label", 92);
    \u0275\u0275text(32, "Jam Jadwal Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 98);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_80_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formJamMasuk.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 97)(35, "label", 92);
    \u0275\u0275text(36, "Jam Jadwal Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 98);
    \u0275\u0275listener("change", function PersetujuanPresensiComponent_div_80_Template_input_change_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formJamKeluar.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 91)(39, "label", 92);
    \u0275\u0275text(40, "Keterangan / Alasan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "textarea", 99);
    \u0275\u0275listener("input", function PersetujuanPresensiComponent_div_80_Template_textarea_input_41_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formAlasan.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 100)(43, "button", 101);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_80_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBuatModal.set(false));
    });
    \u0275\u0275text(44, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 102);
    \u0275\u0275listener("click", function PersetujuanPresensiComponent_div_80_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitBuat());
    });
    \u0275\u0275template(46, PersetujuanPresensiComponent_div_80_span_46_Template, 1, 0, "span", 26);
    \u0275\u0275text(47, " Simpan ");
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
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formPolaKerja());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.formJamMasuk());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formJamKeluar());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.formAlasan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.modalSaving());
  }
}
var JENIS_OPTIONS = [
  { value: "MASUK", label: "Presensi Masuk" },
  { value: "KELUAR", label: "Presensi Keluar" },
  { value: "ISTIRAHAT", label: "Mulai Istirahat" },
  { value: "SELESAI_ISTIRAHAT", label: "Selesai Istirahat" },
  { value: "LEMBUR", label: "Mulai Lembur" },
  { value: "SELESAI_LEMBUR", label: "Selesai Lembur" }
];
var PersetujuanPresensiComponent = class _PersetujuanPresensiComponent {
  constructor() {
    this.svc = inject(PersetujuanPresensiService);
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
    this.bulkSaving = signal(false, ...ngDevMode ? [{ debugName: "bulkSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterTanggal = signal("", ...ngDevMode ? [{ debugName: "filterTanggal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterJenis = signal("", ...ngDevMode ? [{ debugName: "filterJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showDiizinkan = signal(false, ...ngDevMode ? [{ debugName: "showDiizinkan" }] : (
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
    this.formTanggal = signal("", ...ngDevMode ? [{ debugName: "formTanggal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formJenis = signal("MASUK", ...ngDevMode ? [{ debugName: "formJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formPolaKerja = signal("", ...ngDevMode ? [{ debugName: "formPolaKerja" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formJamMasuk = signal("", ...ngDevMode ? [{ debugName: "formJamMasuk" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formJamKeluar = signal("", ...ngDevMode ? [{ debugName: "formJamKeluar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formAlasan = signal("", ...ngDevMode ? [{ debugName: "formAlasan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisOptions = JENIS_OPTIONS;
    this.filtered = computed(() => {
      const q = this.dtSearch().toLowerCase();
      return this.rows().filter((r) => !q || r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q) || (r.jenisPresensi ?? "").toLowerCase().includes(q));
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
        return "Menampilkan 0 dari 0 total data";
      const page = Math.min(this.dtPage(), this.totalPages());
      const start = (page - 1) * this.dtPageSize() + 1;
      const end = Math.min(page * this.dtPageSize(), total);
      return `Menampilkan ${start}\u2013${end} dari ${total} total data`;
    }, ...ngDevMode ? [{ debugName: "info" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allChecked = computed(() => this.paged().length > 0 && this.paged().every((r) => this.selectedIds().has(r.id)), ...ngDevMode ? [{ debugName: "allChecked" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit() {
    this.karyawanSvc.findAll().subscribe({ next: (d) => this.karyawanList.set(d) });
    this.loadData();
  }
  loadData() {
    this.loading.set(true);
    this.error.set("");
    this.selectedIds.set(/* @__PURE__ */ new Set());
    this.svc.findAll(this.showDiizinkan(), this.filterTanggal() || void 0, this.filterJenis() || void 0, this.filterCari() || void 0).subscribe({
      next: (data) => {
        this.rows.set(data);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
  }
  setTab(diizinkan) {
    this.showDiizinkan.set(diizinkan);
    this.dtPage.set(1);
    this.loadData();
  }
  cari() {
    this.dtPage.set(1);
    this.loadData();
  }
  prevDate() {
    const t = this.filterTanggal();
    if (!t)
      return;
    const d = /* @__PURE__ */ new Date(t + "T00:00:00");
    d.setDate(d.getDate() - 1);
    this.filterTanggal.set(d.toISOString().substring(0, 10));
    this.loadData();
  }
  nextDate() {
    const t = this.filterTanggal();
    if (!t) {
      this.filterTanggal.set((/* @__PURE__ */ new Date()).toISOString().substring(0, 10));
    } else {
      const d = /* @__PURE__ */ new Date(t + "T00:00:00");
      d.setDate(d.getDate() + 1);
      this.filterTanggal.set(d.toISOString().substring(0, 10));
    }
    this.loadData();
  }
  // ── Sort ─────────────────────────────────────────────────
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
  // ── Pagination ───────────────────────────────────────────
  buildPages(cur, total) {
    const pages = [];
    for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++)
      pages.push(i);
    return pages;
  }
  goPage(p) {
    if (p < 1 || p > this.totalPages())
      return;
    this.dtPage.set(p);
  }
  // ── Checkbox ─────────────────────────────────────────────
  toggleAll(checked) {
    const ids = new Set(this.selectedIds());
    this.paged().forEach((r) => checked ? ids.add(r.id) : ids.delete(r.id));
    this.selectedIds.set(ids);
  }
  toggleOne(id, checked) {
    const ids = new Set(this.selectedIds());
    checked ? ids.add(id) : ids.delete(id);
    this.selectedIds.set(ids);
  }
  isSelected(id) {
    return this.selectedIds().has(id);
  }
  // ── Aksi ─────────────────────────────────────────────────
  izinkan(r) {
    this.savingId.set(r.id);
    this.svc.izinkan(r.id).subscribe({
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
  izinkanTerpilih() {
    const ids = Array.from(this.selectedIds());
    if (!ids.length) {
      alert("Pilih setidaknya satu data");
      return;
    }
    this.bulkSaving.set(true);
    this.svc.izinkanTerpilih(ids).subscribe({
      next: (n) => {
        this.bulkSaving.set(false);
        alert(`${n} data berhasil diizinkan`);
        this.loadData();
      },
      error: (e) => {
        this.bulkSaving.set(false);
        alert(e?.error?.message ?? "Gagal");
      }
    });
  }
  izinkanSemua() {
    if (!confirm("Izinkan semua presensi yang tampil saat ini?"))
      return;
    this.bulkSaving.set(true);
    this.svc.izinkanSemua(this.filterTanggal() || void 0, this.filterJenis() || void 0, this.filterCari() || void 0).subscribe({
      next: (n) => {
        this.bulkSaving.set(false);
        alert(`${n} data berhasil diizinkan`);
        this.loadData();
      },
      error: (e) => {
        this.bulkSaving.set(false);
        alert(e?.error?.message ?? "Gagal");
      }
    });
  }
  hapus(r) {
    if (!confirm(`Hapus persetujuan presensi ${r.namaKaryawan}?`))
      return;
    this.svc.hapus(r.id).subscribe({
      next: () => this.loadData(),
      error: (e) => alert(e?.error?.message ?? "Gagal menghapus")
    });
  }
  // ── Modal Tambah ─────────────────────────────────────────
  openBuat() {
    this.formKaryawanId.set("");
    this.formTanggal.set(this.filterTanggal() || (/* @__PURE__ */ new Date()).toISOString().substring(0, 10));
    this.formJenis.set("MASUK");
    this.formPolaKerja.set("");
    this.formJamMasuk.set("");
    this.formJamKeluar.set("");
    this.formAlasan.set("");
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
    const req = {
      karyawanId: +this.formKaryawanId(),
      tanggal: this.formTanggal(),
      jenisPresensi: this.formJenis(),
      namaPolaKerja: this.formPolaKerja() || void 0,
      jamJadwalMasuk: this.formJamMasuk() || void 0,
      jamJadwalKeluar: this.formJamKeluar() || void 0,
      alasan: this.formAlasan() || void 0
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
  // ── Helpers ──────────────────────────────────────────────
  jenisLabel(jenis) {
    return JENIS_OPTIONS.find((o) => o.value === jenis)?.label ?? jenis;
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
  formatTanggal(iso) {
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  formatTanggalFilter(iso) {
    if (!iso)
      return "Tanggal";
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  static {
    this.\u0275fac = function PersetujuanPresensiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersetujuanPresensiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersetujuanPresensiComponent, selectors: [["app-persetujuan-presensi"]], decls: 81, vars: 33, consts: [["loadTpl", ""], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], [1, "d-flex", "align-items-center", "border", "rounded", 2, "overflow", "hidden"], [1, "btn", "btn-sm", "btn-light", "border-0", "px-2", 2, "border-radius", "0", 3, "click"], [1, "bx", "bx-chevron-left"], ["type", "date", 1, "form-control", "form-control-sm", "border-0", "text-center", 2, "width", "145px", "background", "transparent", 3, "change", "value"], [1, "bx", "bx-chevron-right"], [1, "form-select", "form-select-sm", 2, "max-width", "190px", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-1"], ["type", "text", "placeholder", "Cari karyawan...", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-search"], [1, "ms-auto", "d-flex", "gap-2"], [1, "btn", "btn-sm", "px-3", 2, "background", "#a29bfe", "color", "#fff", "border", "none", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click", "disabled"], [1, "d-flex", "gap-2", "mb-3"], [1, "btn", "btn-sm", "px-3", "rounded-pill", 3, "click"], [1, "rounded", "p-2", "mb-3", 2, "background", "#f8f9fa", "font-size", ".82rem", "color", "#6c757d", "font-family", "monospace"], ["class", "alert alert-danger py-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "text-muted", 2, "font-size", ".82rem"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.5)", 4, "ngIf"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "alert", "alert-danger", "py-2"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "background", "#f0f2f5"], [2, "width", "40px"], ["type", "checkbox", "class", "form-check-input", 3, "checked", "change", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], ["colspan", "5", 1, "text-center", "py-5"], ["class", "text-muted", "style", "font-size:.78rem", 4, "ngIf"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "36px", "height", "36px", "overflow", "hidden", "background", "#e0d7fa"], ["alt", "", "style", "width:36px;height:36px;object-fit:cover;border-radius:50%", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], ["class", "fw-bold", "style", "color:#6c5ce7;font-size:.82rem", 4, "ngIf"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "fw-semibold", 2, "font-size", ".83rem"], ["class", "text-muted", "style", "font-size:.75rem", 4, "ngIf"], [1, "badge", "px-2", "py-1", "mb-1", 2, "font-size", ".76rem"], ["class", "text-muted", "style", "font-size:.75rem;font-style:italic", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-danger", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click"], [1, "bx", "bx-trash"], [1, "text-muted", 2, "font-size", ".78rem"], ["alt", "", "onerror", "this.style.display='none'", 2, "width", "36px", "height", "36px", "object-fit", "cover", "border-radius", "50%", 3, "src"], [1, "fw-bold", 2, "color", "#6c5ce7", "font-size", ".82rem"], [1, "text-muted", 2, "font-size", ".75rem", "font-style", "italic"], [1, "btn", "btn-sm", "btn-success", "px-2", "py-1", 2, "font-size", ".78rem", 3, "click", "disabled"], ["class", "bx bx-check me-1", 4, "ngIf"], [1, "bx", "bx-check", "me-1"], [1, "badge", "bg-success", "px-2", "py-1", 2, "font-size", ".76rem"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", 2, "width", "2rem", "height", "2rem"], [1, "text-muted", "mt-2", 2, "font-size", ".83rem"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-md", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "form-select", "form-select-sm", 3, "change", "value"], ["type", "date", 1, "form-control", "form-control-sm", 3, "change", "value"], ["type", "text", "placeholder", "Contoh: Reguler, Shift A", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "row", "g-2", "mb-3"], [1, "col"], ["type", "time", 1, "form-control", "form-control-sm", 3, "change", "value"], ["rows", "2", "placeholder", "Alasan blokir presensi...", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "alert", "alert-danger", "py-2", "mb-3"]], template: function PersetujuanPresensiComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 1)(2, "div")(3, "h4", 2);
        \u0275\u0275text(4, "Persetujuan Presensi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "span", 7);
        \u0275\u0275text(12, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 8);
        \u0275\u0275text(14, "Persetujuan Presensi");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "button", 13);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_19_listener() {
          return ctx.prevDate();
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 15);
        \u0275\u0275listener("change", function PersetujuanPresensiComponent_Template_input_change_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.filterTanggal.set($event.target.value);
          return \u0275\u0275resetView(ctx.loadData());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 13);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_22_listener() {
          return ctx.nextDate();
        });
        \u0275\u0275element(23, "i", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "select", 17);
        \u0275\u0275listener("change", function PersetujuanPresensiComponent_Template_select_change_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.filterJenis.set($event.target.value);
          return \u0275\u0275resetView(ctx.loadData());
        });
        \u0275\u0275elementStart(25, "option", 18);
        \u0275\u0275text(26, "--Jenis Kehadiran--");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, PersetujuanPresensiComponent_option_27_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 20)(29, "input", 21);
        \u0275\u0275listener("input", function PersetujuanPresensiComponent_Template_input_input_29_listener($event) {
          return ctx.filterCari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 22);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_30_listener() {
          return ctx.cari();
        });
        \u0275\u0275element(31, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 24)(33, "button", 25);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_33_listener() {
          return ctx.izinkanTerpilih();
        });
        \u0275\u0275template(34, PersetujuanPresensiComponent_span_34_Template, 1, 0, "span", 26);
        \u0275\u0275text(35, " Izinkan Terpilih ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 27);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_36_listener() {
          return ctx.izinkanSemua();
        });
        \u0275\u0275template(37, PersetujuanPresensiComponent_span_37_Template, 1, 0, "span", 26);
        \u0275\u0275text(38, " Izinkan Semua ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 28)(40, "button", 29);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_40_listener() {
          return ctx.setTab(false);
        });
        \u0275\u0275text(41, "Belum Diizinkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 29);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_42_listener() {
          return ctx.setTab(true);
        });
        \u0275\u0275text(43, "Sudah Diizinkan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 30);
        \u0275\u0275text(45, " Daftar karyawan yang tidak dapat melakukan presensi karena pembatasan waktu. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, PersetujuanPresensiComponent_div_46_Template, 2, 1, "div", 31);
        \u0275\u0275elementStart(47, "div", 32)(48, "div", 33)(49, "label", 34);
        \u0275\u0275text(50, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "select", 35);
        \u0275\u0275listener("change", function PersetujuanPresensiComponent_Template_select_change_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtPageSize.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275template(52, PersetujuanPresensiComponent_option_52_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 36);
        \u0275\u0275text(54, "data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 33)(56, "label", 34);
        \u0275\u0275text(57, "Cari:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "input", 37);
        \u0275\u0275listener("input", function PersetujuanPresensiComponent_Template_input_input_58_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtSearch.set($event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(59, PersetujuanPresensiComponent_div_59_Template, 20, 12, "div", 38)(60, PersetujuanPresensiComponent_ng_template_60_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(62, "div", 39)(63, "div", 40);
        \u0275\u0275text(64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "nav")(66, "ul", 41)(67, "li", 42)(68, "button", 43);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_68_listener() {
          return ctx.goPage(1);
        });
        \u0275\u0275text(69, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "li", 42)(71, "button", 43);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_71_listener() {
          return ctx.goPage(ctx.dtPage() - 1);
        });
        \u0275\u0275text(72, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(73, PersetujuanPresensiComponent_li_73_Template, 3, 3, "li", 44);
        \u0275\u0275elementStart(74, "li", 42)(75, "button", 43);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_75_listener() {
          return ctx.goPage(ctx.dtPage() + 1);
        });
        \u0275\u0275text(76, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "li", 42)(78, "button", 43);
        \u0275\u0275listener("click", function PersetujuanPresensiComponent_Template_button_click_78_listener() {
          return ctx.goPage(ctx.totalPages());
        });
        \u0275\u0275text(79, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(80, PersetujuanPresensiComponent_div_80_Template, 48, 12, "div", 45);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadTpl_r17 = \u0275\u0275reference(61);
        \u0275\u0275advance(21);
        \u0275\u0275property("value", ctx.filterTanggal());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterJenis());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.jenisOptions);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.bulkSaving() || ctx.selectedIds().size === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.bulkSaving());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.bulkSaving());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.bulkSaving());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("btn-primary", !ctx.showDiizinkan())("btn-outline-secondary", ctx.showDiizinkan());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.showDiizinkan())("btn-outline-secondary", !ctx.showDiizinkan());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.dtPageSize());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pageSizeOptions);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.dtSearch());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading())("ngIfElse", loadTpl_r17);
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
        \u0275\u0275property("ngIf", ctx.showBuatModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersetujuanPresensiComponent, [{
    type: Component,
    args: [{ selector: "app-persetujuan-presensi", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <div>\r
      <h4 class="fw-bold mb-0">Persetujuan Presensi</h4>\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
          <li class="breadcrumb-item"><span class="text-primary">Kehadiran</span></li>\r
          <li class="breadcrumb-item active">Persetujuan Presensi</li>\r
        </ol>\r
      </nav>\r
    </div>\r
<!--    <button class="btn btn-primary btn-sm px-3" (click)="openBuat()">-->\r
<!--      <i class="bx bx-plus me-1"></i> Tambah-->\r
<!--    </button>-->\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Filter Bar -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <!-- Navigasi Tanggal -->\r
        <div class="d-flex align-items-center border rounded" style="overflow:hidden">\r
          <button class="btn btn-sm btn-light border-0 px-2" style="border-radius:0" (click)="prevDate()">\r
            <i class="bx bx-chevron-left"></i>\r
          </button>\r
          <input type="date" class="form-control form-control-sm border-0 text-center"\r
            style="width:145px;background:transparent"\r
            [value]="filterTanggal()"\r
            (change)="filterTanggal.set($any($event.target).value); loadData()">\r
          <button class="btn btn-sm btn-light border-0 px-2" style="border-radius:0" (click)="nextDate()">\r
            <i class="bx bx-chevron-right"></i>\r
          </button>\r
        </div>\r
\r
        <!-- Jenis Kehadiran -->\r
        <select class="form-select form-select-sm" style="max-width:190px"\r
          [value]="filterJenis()"\r
          (change)="filterJenis.set($any($event.target).value); loadData()">\r
          <option value="">--Jenis Kehadiran--</option>\r
          <option *ngFor="let o of jenisOptions" [value]="o.value">{{ o.label }}</option>\r
        </select>\r
\r
        <!-- Cari -->\r
        <div class="d-flex gap-1">\r
          <input type="text" class="form-control form-control-sm" style="width:180px"\r
            placeholder="Cari karyawan..."\r
            [value]="filterCari()"\r
            (input)="filterCari.set($any($event.target).value)">\r
          <button class="btn btn-sm btn-primary px-3" (click)="cari()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
\r
        <!-- Spacer -->\r
        <div class="ms-auto d-flex gap-2">\r
          <button class="btn btn-sm px-3"\r
            style="background:#a29bfe;color:#fff;border:none"\r
            [disabled]="bulkSaving() || selectedIds().size === 0"\r
            (click)="izinkanTerpilih()">\r
            <span *ngIf="bulkSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Izinkan Terpilih\r
          </button>\r
          <button class="btn btn-sm btn-primary px-3"\r
            [disabled]="bulkSaving()"\r
            (click)="izinkanSemua()">\r
            <span *ngIf="bulkSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Izinkan Semua\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Tab belum / sudah -->\r
      <div class="d-flex gap-2 mb-3">\r
        <button class="btn btn-sm px-3 rounded-pill"\r
          [class.btn-primary]="!showDiizinkan()"\r
          [class.btn-outline-secondary]="showDiizinkan()"\r
          (click)="setTab(false)">Belum Diizinkan</button>\r
        <button class="btn btn-sm px-3 rounded-pill"\r
          [class.btn-primary]="showDiizinkan()"\r
          [class.btn-outline-secondary]="!showDiizinkan()"\r
          (click)="setTab(true)">Sudah Diizinkan</button>\r
      </div>\r
\r
      <!-- Info -->\r
      <div class="rounded p-2 mb-3"\r
           style="background:#f8f9fa;font-size:.82rem;color:#6c757d;font-family:monospace">\r
        Daftar karyawan yang tidak dapat melakukan presensi karena pembatasan waktu.\r
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
              <th style="width:40px">\r
                <input type="checkbox" class="form-check-input"\r
                  *ngIf="!showDiizinkan()"\r
                  [checked]="allChecked()"\r
                  (change)="toggleAll($any($event.target).checked)">\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('namaKaryawan')">\r
                Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('namaPolaKerja')">\r
                Jadwal Kerja <i class="bx {{ sortIcon('namaPolaKerja') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('jenisPresensi')">\r
                Presensi <i class="bx {{ sortIcon('jenisPresensi') }}"></i>\r
              </th>\r
              <th>Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="paged().length === 0">\r
              <td colspan="5" class="text-center py-5">\r
                <b>{{ info() }}</b>\r
              </td>\r
            </tr>\r
            <tr *ngFor="let r of paged(); let i = index">\r
              <!-- Checkbox -->\r
              <td>\r
                <input *ngIf="!showDiizinkan()" type="checkbox" class="form-check-input"\r
                  [checked]="isSelected(r.id)"\r
                  (change)="toggleOne(r.id, $any($event.target).checked)">\r
                <span *ngIf="showDiizinkan()" class="text-muted" style="font-size:.78rem">\r
                  {{ (dtPage()-1)*dtPageSize() + i + 1 }}\r
                </span>\r
              </td>\r
              <!-- Karyawan -->\r
              <td>\r
                <div class="d-flex align-items-center gap-2">\r
                  <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                       style="width:36px;height:36px;overflow:hidden;background:#e0d7fa">\r
                    <img *ngIf="r.fotoProfil" [src]="r.fotoProfil" alt=""\r
                         style="width:36px;height:36px;object-fit:cover;border-radius:50%"\r
                         onerror="this.style.display='none'">\r
                    <span *ngIf="!r.fotoProfil" class="fw-bold" style="color:#6c5ce7;font-size:.82rem">\r
                      {{ r.namaKaryawan.charAt(0) }}\r
                    </span>\r
                  </div>\r
                  <div>\r
                    <div class="fw-semibold" style="font-size:.85rem">{{ r.namaKaryawan }}</div>\r
                    <div class="text-muted" style="font-size:.75rem">{{ r.namaDivisi ?? '-' }}</div>\r
                  </div>\r
                </div>\r
              </td>\r
              <!-- Jadwal Kerja -->\r
              <td>\r
                <div class="fw-semibold" style="font-size:.83rem">{{ r.namaPolaKerja ?? '-' }}</div>\r
                <div class="text-muted" style="font-size:.75rem" *ngIf="r.jamJadwalMasuk">\r
                  {{ r.jamJadwalMasuk }}\r
                  <span *ngIf="r.jamJadwalKeluar"> \u2013 {{ r.jamJadwalKeluar }}</span>\r
                </div>\r
              </td>\r
              <!-- Presensi -->\r
              <td>\r
                <span class="badge px-2 py-1 mb-1" style="font-size:.76rem"\r
                  [style.background]="jenisColor(r.jenisPresensi)"\r
                  [style.color]="'#fff'">\r
                  {{ jenisLabel(r.jenisPresensi) }}\r
                </span>\r
                <div class="text-muted" style="font-size:.75rem">\r
                  {{ formatTanggal(r.tanggal) }}\r
                </div>\r
                <div *ngIf="r.alasan" class="text-muted" style="font-size:.75rem;font-style:italic">\r
                  {{ r.alasan }}\r
                </div>\r
              </td>\r
              <!-- Aksi -->\r
              <td>\r
                <div class="d-flex gap-1 flex-wrap">\r
                  <ng-container *ngIf="!r.diizinkan">\r
                    <button class="btn btn-sm btn-success px-2 py-1"\r
                      style="font-size:.78rem"\r
                      [disabled]="savingId() === r.id"\r
                      (click)="izinkan(r)">\r
                      <span *ngIf="savingId()===r.id" class="spinner-border spinner-border-sm me-1"></span>\r
                      <i *ngIf="savingId()!==r.id" class="bx bx-check me-1"></i>Izinkan\r
                    </button>\r
                  </ng-container>\r
                  <ng-container *ngIf="r.diizinkan">\r
                    <span class="badge bg-success px-2 py-1" style="font-size:.76rem">\r
                      <i class="bx bx-check me-1"></i>Sudah Diizinkan\r
                    </span>\r
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
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tambah \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="showBuatModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
    <div class="modal-dialog modal-md modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Tambah Persetujuan Presensi</h5>\r
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
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Nama Pola Kerja</label>\r
            <input type="text" class="form-control form-control-sm"\r
              [value]="formPolaKerja()"\r
              (input)="formPolaKerja.set($any($event.target).value)"\r
              placeholder="Contoh: Reguler, Shift A">\r
          </div>\r
\r
          <div class="row g-2 mb-3">\r
            <div class="col">\r
              <label class="form-label fw-semibold">Jam Jadwal Masuk</label>\r
              <input type="time" class="form-control form-control-sm"\r
                [value]="formJamMasuk()"\r
                (change)="formJamMasuk.set($any($event.target).value)">\r
            </div>\r
            <div class="col">\r
              <label class="form-label fw-semibold">Jam Jadwal Keluar</label>\r
              <input type="time" class="form-control form-control-sm"\r
                [value]="formJamKeluar()"\r
                (change)="formJamKeluar.set($any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Keterangan / Alasan</label>\r
            <textarea class="form-control form-control-sm" rows="2"\r
              [value]="formAlasan()"\r
              (input)="formAlasan.set($any($event.target).value)"\r
              placeholder="Alasan blokir presensi..."></textarea>\r
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
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersetujuanPresensiComponent, { className: "PersetujuanPresensiComponent", filePath: "src/app/features/kehadiran/persetujuan-presensi/persetujuan-presensi.component.ts", lineNumber: 28 });
})();
export {
  PersetujuanPresensiComponent
};
//# sourceMappingURL=chunk-SFHYMLPC.js.map
