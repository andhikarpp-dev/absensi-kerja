import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/openshift.service.ts
var OpenshiftService = class _OpenshiftService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/openshift`;
  }
  findAll(filter) {
    let params = new HttpParams();
    if (filter?.mulai)
      params = params.set("mulai", filter.mulai);
    if (filter?.selesai)
      params = params.set("selesai", filter.selesai);
    if (filter?.divisiId)
      params = params.set("divisiId", String(filter.divisiId));
    return this.http.get(this.url, { params }).pipe(map((d) => (Array.isArray(d) ? d : d?.openshift) ?? []));
  }
  findById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(map((d) => d?.openshift ?? null), catchError(() => of(null)));
  }
  create(req) {
    return this.http.post(this.url, req).pipe(map((d) => d?.openshift ?? d));
  }
  update(id, req) {
    return this.http.put(`${this.url}/${id}`, req).pipe(map((d) => d?.openshift ?? d));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  importCsv(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.url}/import`, fd).pipe(map((d) => d?.hasil ?? { berhasil: 0, gagal: 0, errors: [] }));
  }
  static {
    this.\u0275fac = function OpenshiftService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpenshiftService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OpenshiftService, factory: _OpenshiftService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenshiftService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/pola-kerja/openshift/openshift-list.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function OpenshiftListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(""));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function OpenshiftListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 46)(2, "div", 47)(3, "div", 48);
    \u0275\u0275element(4, "i", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMsg.set(""));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successMsg());
  }
}
function OpenshiftListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.namaDivisi);
  }
}
function OpenshiftListComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275element(2, "span", 52);
    \u0275\u0275text(3, " Memuat... ");
    \u0275\u0275elementEnd()();
  }
}
function OpenshiftListComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275elementStart(3, "div", 55);
    \u0275\u0275text(4, "Belum ada data openshift.");
    \u0275\u0275elementEnd()()();
  }
}
function OpenshiftListComponent_Conditional_62_For_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function OpenshiftListComponent_Conditional_62_For_1_Conditional_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r6);
  }
}
function OpenshiftListComponent_Conditional_62_For_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 64);
    \u0275\u0275repeaterCreate(1, OpenshiftListComponent_Conditional_62_For_1_Conditional_37_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.divisiNamaList(o_r7));
  }
}
function OpenshiftListComponent_Conditional_62_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 56)(3, "div")(4, "div", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9, "\u2022\u2022\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "div", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 59);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "table", 61)(21, "tbody")(22, "tr")(23, "th", 62);
    \u0275\u0275text(24, "Upah Per Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "th", 63);
    \u0275\u0275text(29, "Maks. Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "tr")(33, "th", 63);
    \u0275\u0275text(34, "Target Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275conditionalCreate(36, OpenshiftListComponent_Conditional_62_For_1_Conditional_36_Template, 2, 0, "span", 15)(37, OpenshiftListComponent_Conditional_62_For_1_Conditional_37_Template, 3, 0, "ul", 64);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "td", 30)(39, "a", 6);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td", 30);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 30);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 30)(46, "button", 65);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_62_For_1_Template_button_click_46_listener() {
      const o_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(o_r7));
    });
    \u0275\u0275element(47, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 67);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_62_For_1_Template_button_click_48_listener() {
      const o_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.askDelete(o_r7.id));
    });
    \u0275\u0275element(49, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 69);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_62_For_1_Template_button_click_50_listener() {
      const o_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRiwayat(o_r7));
    });
    \u0275\u0275element(51, "i", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatTgl(o_r7.tanggalMulai));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.jamMulai);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatTgl(o_r7.tanggalSelesai));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.jamSelesai);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Durasi: ", ctx_r1.durasiJam(o_r7), " jam");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Catatan: ", o_r7.catatan || "-");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.upahLabel(o_r7));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.maksKaryawanLabel(o_r7));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.divisiNamaList(o_r7).length === 0 ? 36 : 37);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", o_r7.peminatIds.length, " Karyawan ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", o_r7.dihadiriIds.length, " Karyawan");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalUpah(o_r7));
  }
}
function OpenshiftListComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OpenshiftListComponent_Conditional_62_For_1_Template, 52, 12, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.paged());
  }
}
function OpenshiftListComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 38)(1, "a", 39);
    \u0275\u0275listener("click", function OpenshiftListComponent_For_75_Template_a_click_1_listener() {
      const n_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(n_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.page() === n_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r9);
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalError());
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "label", 80);
    \u0275\u0275text(2, "Upah Per Jam (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Conditional_43_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.upahPerJam, $event) || (ctx_r1.modalData.upahPerJam = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.upahPerJam);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "Belum ada divisi.");
    \u0275\u0275elementEnd();
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_55_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "input", 97);
    \u0275\u0275listener("change", function OpenshiftListComponent_Conditional_82_Conditional_55_For_1_Template_input_change_1_listener() {
      const d_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDivisiTarget(d_r13.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 98);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("id", "div_" + d_r13.id)("checked", ctx_r1.modalData.divisiIds.includes(d_r13.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "div_" + d_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r13.namaDivisi);
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OpenshiftListComponent_Conditional_82_Conditional_55_For_1_Template, 4, 4, "div", 96, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.divisiList());
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function OpenshiftListComponent_Conditional_82_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 100);
    \u0275\u0275text(1, " Simpan ");
  }
}
function OpenshiftListComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 71)(2, "div", 72)(3, "div", 73)(4, "h5", 74);
    \u0275\u0275element(5, "i", 75);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 45);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_82_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 76);
    \u0275\u0275conditionalCreate(9, OpenshiftListComponent_Conditional_82_Conditional_9_Template, 2, 1, "div", 77);
    \u0275\u0275elementStart(10, "div", 78)(11, "div", 79)(12, "label", 80);
    \u0275\u0275text(13, "Tanggal Mulai ");
    \u0275\u0275elementStart(14, "span", 81);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.tanggalMulai, $event) || (ctx_r1.modalData.tanggalMulai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 79)(18, "label", 80);
    \u0275\u0275text(19, "Jam Mulai ");
    \u0275\u0275elementStart(20, "span", 81);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.jamMulai, $event) || (ctx_r1.modalData.jamMulai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 79)(24, "label", 80);
    \u0275\u0275text(25, "Tanggal Selesai ");
    \u0275\u0275elementStart(26, "span", 81);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.tanggalSelesai, $event) || (ctx_r1.modalData.tanggalSelesai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 79)(30, "label", 80);
    \u0275\u0275text(31, "Jam Selesai ");
    \u0275\u0275elementStart(32, "span", 81);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.jamSelesai, $event) || (ctx_r1.modalData.jamSelesai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 79)(36, "label", 80);
    \u0275\u0275text(37, "Jenis Upah");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.upahJenis, $event) || (ctx_r1.modalData.upahJenis = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 85);
    \u0275\u0275text(40, "Sesuai Upah Lembur Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 86);
    \u0275\u0275text(42, "Nominal Per Jam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(43, OpenshiftListComponent_Conditional_82_Conditional_43_Template, 4, 3, "div", 79);
    \u0275\u0275elementStart(44, "div", 79)(45, "label", 80);
    \u0275\u0275text(46, "Maks. Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.maksKaryawan, $event) || (ctx_r1.modalData.maksKaryawan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 88)(49, "label", 80);
    \u0275\u0275text(50, "Target Divisi ");
    \u0275\u0275elementStart(51, "span", 81);
    \u0275\u0275text(52, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 89);
    \u0275\u0275conditionalCreate(54, OpenshiftListComponent_Conditional_82_Conditional_54_Template, 2, 0, "div", 57)(55, OpenshiftListComponent_Conditional_82_Conditional_55_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 88)(57, "label", 80);
    \u0275\u0275text(58, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function OpenshiftListComponent_Conditional_82_Template_textarea_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.catatan, $event) || (ctx_r1.modalData.catatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 91)(61, "button", 92);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_82_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275element(62, "i", 93);
    \u0275\u0275text(63, " Tutup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 94);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_82_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveOpenshift());
    });
    \u0275\u0275conditionalCreate(65, OpenshiftListComponent_Conditional_82_Conditional_65_Template, 2, 0)(66, OpenshiftListComponent_Conditional_82_Conditional_66_Template, 2, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bx-plus", !ctx_r1.editingId())("bx-edit", ctx_r1.editingId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId() ? "Edit Openshift" : "Tambah Openshift", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modalError() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.tanggalMulai);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.jamMulai);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(25, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.tanggalSelesai);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.jamSelesai);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(27, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.upahJenis);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.modalData.upahJenis === "NOMINAL" ? 43 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.maksKaryawan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(29, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.divisiList().length === 0 ? 54 : 55);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.catatan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 65 : 66);
  }
}
function OpenshiftListComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 101)(2, "div", 72)(3, "div", 73)(4, "h5", 74);
    \u0275\u0275element(5, "i", 102);
    \u0275\u0275text(6, " Riwayat Openshift - ");
    \u0275\u0275elementStart(7, "span", 103);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_83_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 76)(11, "p", 104);
    \u0275\u0275text(12, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 91)(14, "button", 105);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_83_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275text(15, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r1.formatTgl(ctx_r1.riwayatItem().tanggalMulai), " ", ctx_r1.riwayatItem().jamMulai);
  }
}
function OpenshiftListComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 106)(2, "div", 72)(3, "div", 107)(4, "h5", 108);
    \u0275\u0275element(5, "i", 109);
    \u0275\u0275text(6, "Hapus Openshift? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 110);
    \u0275\u0275text(8, " Data yang dihapus tidak dapat dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 111)(10, "button", 105);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_84_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 112);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_84_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 125);
    \u0275\u0275element(2, "i", 126);
    \u0275\u0275elementStart(3, "div", 127)(4, "div", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 129);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_85_Conditional_25_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearImportFile());
    });
    \u0275\u0275element(9, "i", 130);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.importFile().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(ctx_r1.importFile().size));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.importBusy());
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "span", 52);
    \u0275\u0275text(2, " Memproses file... ");
    \u0275\u0275elementEnd();
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " data openshift berhasil diimpor. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.importResult().berhasil);
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_27_Conditional_2_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 137);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const err_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(err_r18.baris);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(err_r18.pesan);
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275element(1, "i", 134);
    \u0275\u0275text(2, " Impor ");
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4, "dibatalkan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u2014 ditemukan ");
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " baris bermasalah. Tidak ada data yang disimpan. Perbaiki file lalu unggah ulang. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 135)(10, "table", 61)(11, "thead", 29)(12, "tr")(13, "th", 136);
    \u0275\u0275text(14, "Baris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Pesan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, OpenshiftListComponent_Conditional_85_Conditional_27_Conditional_2_For_19_Template, 5, 2, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.importResult().gagal);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.importResult().errors);
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275conditionalCreate(1, OpenshiftListComponent_Conditional_85_Conditional_27_Conditional_1_Template, 5, 1, "div", 131)(2, OpenshiftListComponent_Conditional_85_Conditional_27_Conditional_2_Template, 20, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.importResult().gagal === 0 && ctx_r1.importResult().berhasil > 0 ? 1 : ctx_r1.importResult().gagal > 0 ? 2 : -1);
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
    \u0275\u0275text(1, " Memproses... ");
  }
}
function OpenshiftListComponent_Conditional_85_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 138);
    \u0275\u0275text(1, " Proses ");
  }
}
function OpenshiftListComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 101)(2, "div", 72)(3, "div", 73)(4, "h5", 74);
    \u0275\u0275element(5, "i", 113);
    \u0275\u0275text(6, "Impor Openshift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 45);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_85_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 76)(9, "div", 114)(10, "div", 115);
    \u0275\u0275element(11, "i", 116);
    \u0275\u0275text(12, "PENTING!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 117)(14, "li");
    \u0275\u0275text(15, " Untuk melakukan impor data openshift, pastikan file yang diupload sudah sesuai dengan format yang ditentukan. ");
    \u0275\u0275elementStart(16, "a", 118);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_85_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(17, "Download format impor excel di sini.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "Aksi impor hanya akan dijalankan jika semua data sudah benar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Jika ada data yang perlu diperbaiki, sistem akan segera menampilkan informasinya setelah klik tombol proses.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "label", 119);
    \u0275\u0275text(23, "Pilih File CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 120);
    \u0275\u0275listener("change", function OpenshiftListComponent_Conditional_85_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImportFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, OpenshiftListComponent_Conditional_85_Conditional_25_Template, 10, 3, "div", 121);
    \u0275\u0275conditionalCreate(26, OpenshiftListComponent_Conditional_85_Conditional_26_Template, 3, 0, "div", 122);
    \u0275\u0275conditionalCreate(27, OpenshiftListComponent_Conditional_85_Conditional_27_Template, 3, 1, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 91)(29, "button", 105);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_85_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(30, "Tutup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 124);
    \u0275\u0275listener("click", function OpenshiftListComponent_Conditional_85_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prosesImport());
    });
    \u0275\u0275conditionalCreate(32, OpenshiftListComponent_Conditional_85_Conditional_32_Template, 2, 0)(33, OpenshiftListComponent_Conditional_85_Conditional_33_Template, 2, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r1.importBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.importFile() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.importBusy() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.importResult() ? 27 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.importFile() || ctx_r1.importBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.importBusy() ? 32 : 33);
  }
}
var OpenshiftListComponent = class _OpenshiftListComponent {
  constructor() {
    this.divisiSvc = inject(DivisiService);
    this.api = inject(OpenshiftService);
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
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
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.successMsg = signal("", ...ngDevMode ? [{ debugName: "successMsg" }] : (
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
    this.filterDivisiId = signal(null, ...ngDevMode ? [{ debugName: "filterDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : (
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
    this.showFormModal = signal(false, ...ngDevMode ? [{ debugName: "showFormModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalError = signal("", ...ngDevMode ? [{ debugName: "modalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatItem = signal(null, ...ngDevMode ? [{ debugName: "riwayatItem" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showImportModal = signal(false, ...ngDevMode ? [{ debugName: "showImportModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importBusy = signal(false, ...ngDevMode ? [{ debugName: "importBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importFile = signal(null, ...ngDevMode ? [{ debugName: "importFile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importResult = signal(null, ...ngDevMode ? [{ debugName: "importResult" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalData = this.empty();
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      const fm = this.filterMulai();
      const fs = this.filterSelesai();
      const fd = this.filterDivisiId();
      return this.list().filter((o) => {
        if (q && !(o.catatan || "").toLowerCase().includes(q))
          return false;
        if (fm && o.tanggalMulai < fm)
          return false;
        if (fs && o.tanggalSelesai > fs)
          return false;
        if (fd && !o.divisiIds.includes(fd))
          return false;
        return true;
      });
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paged = computed(() => {
      const s = (this.page() - 1) * this.pageSize();
      return this.filtered().slice(s, s + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "paged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toastTimer = null;
  }
  ngOnInit() {
    this.load();
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d || []));
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.api.findAll({
      mulai: this.filterMulai() || void 0,
      selesai: this.filterSelesai() || void 0,
      divisiId: this.filterDivisiId() ?? null
    }).subscribe({
      next: (rows) => {
        this.list.set((rows || []).map((r) => this.fromDTO(r)));
        this.loading.set(false);
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || "Gagal memuat data openshift dari server.";
        this.error.set(msg);
        this.loading.set(false);
      }
    });
  }
  fromDTO(d) {
    const split = (iso) => {
      if (!iso)
        return { tgl: "", jam: "" };
      const m = iso.match(/^(\d{4}-\d{2}-\d{2})[T ](\d{2}:\d{2})/);
      return m ? { tgl: m[1], jam: m[2] } : { tgl: "", jam: "" };
    };
    const a = split(d.jamMasuk);
    const b = split(d.jamKeluar);
    return {
      id: d.id,
      tanggalMulai: a.tgl,
      jamMulai: a.jam,
      tanggalSelesai: b.tgl,
      jamSelesai: b.jam,
      catatan: d.catatan || "",
      upahJenis: d.jenisUpah,
      upahPerJam: d.upahPerJam || 0,
      maksKaryawan: d.maksKaryawan ?? null,
      divisiIds: d.divisiIds || [],
      peminatIds: [],
      dihadiriIds: []
    };
  }
  toRequest(o) {
    return {
      jamMasuk: `${o.tanggalMulai}T${o.jamMulai}:00`,
      jamKeluar: `${o.tanggalSelesai}T${o.jamSelesai}:00`,
      jenisUpah: o.upahJenis,
      upahPerJam: o.upahPerJam || 0,
      maksKaryawan: o.maksKaryawan && o.maksKaryawan > 0 ? o.maksKaryawan : null,
      catatan: o.catatan || "",
      divisiIds: o.divisiIds || []
    };
  }
  durasiJam(o) {
    if (!o.tanggalMulai || !o.jamMulai || !o.tanggalSelesai || !o.jamSelesai)
      return 0;
    const a = /* @__PURE__ */ new Date(`${o.tanggalMulai}T${o.jamMulai}`);
    const b = /* @__PURE__ */ new Date(`${o.tanggalSelesai}T${o.jamSelesai}`);
    const diff = (b.getTime() - a.getTime()) / 36e5;
    return Math.max(0, Math.round(diff));
  }
  formatTgl(iso) {
    if (!iso)
      return "-";
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  upahLabel(o) {
    return o.upahJenis === "SESUAI_LEMBUR" ? "Sesuai Upah Lembur Karyawan" : `Rp ${(o.upahPerJam || 0).toLocaleString("id-ID")} / jam`;
  }
  maksKaryawanLabel(o) {
    return o.maksKaryawan == null || o.maksKaryawan === 0 ? "Tidak Terbatas" : `${o.maksKaryawan} Karyawan`;
  }
  divisiNamaList(o) {
    return (o.divisiIds || []).map((id) => {
      const d = this.divisiList().find((x) => x.id === id);
      return d?.namaDivisi || `#${id}`;
    });
  }
  totalUpah(o) {
    if (o.upahJenis !== "NOMINAL")
      return "-";
    if (!o.dihadiriIds.length)
      return "Rp 0";
    const total = o.dihadiriIds.length * (o.upahPerJam || 0) * this.durasiJam(o);
    return `Rp ${total.toLocaleString("id-ID")}`;
  }
  onSearchChange() {
    this.page.set(1);
  }
  goToPage(p) {
    if (p < 1 || p > this.totalPages())
      return;
    this.page.set(p);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
  openTambah() {
    this.editingId.set(null);
    this.modalError.set("");
    this.modalData = this.empty();
    this.showFormModal.set(true);
  }
  openEdit(o) {
    this.editingId.set(o.id);
    this.modalError.set("");
    this.modalData = JSON.parse(JSON.stringify(o));
    this.showFormModal.set(true);
  }
  closeFormModal() {
    this.showFormModal.set(false);
  }
  toggleDivisiTarget(id) {
    const set = new Set(this.modalData.divisiIds);
    if (set.has(id))
      set.delete(id);
    else
      set.add(id);
    this.modalData.divisiIds = [...set];
  }
  saveOpenshift() {
    if (!this.modalData.tanggalMulai || !this.modalData.jamMulai || !this.modalData.tanggalSelesai || !this.modalData.jamSelesai) {
      this.modalError.set("Tanggal & jam mulai/selesai wajib diisi.");
      return;
    }
    if (!this.modalData.divisiIds.length) {
      this.modalError.set("Pilih minimal satu divisi target.");
      return;
    }
    this.saving.set(true);
    const id = this.editingId();
    const req = this.toRequest(this.modalData);
    const obs$ = id ? this.api.update(id, req) : this.api.create(req);
    obs$.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? "Openshift berhasil diperbarui." : "Openshift berhasil ditambahkan.");
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message || err?.message || "Gagal menyimpan openshift.");
      }
    });
  }
  askDelete(id) {
    this.confirmDeleteId.set(id);
  }
  cancelDelete() {
    this.confirmDeleteId.set(null);
  }
  doDelete() {
    const id = this.confirmDeleteId();
    if (id == null)
      return;
    this.api.delete(id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.showToast("Openshift berhasil dihapus.");
        this.load();
      },
      error: (err) => {
        this.confirmDeleteId.set(null);
        this.error.set(err?.error?.message || "Gagal menghapus openshift.");
      }
    });
  }
  openRiwayat(o) {
    this.riwayatItem.set(o);
    this.showRiwayatModal.set(true);
  }
  closeRiwayat() {
    this.showRiwayatModal.set(false);
    this.riwayatItem.set(null);
  }
  openImportModal() {
    this.importResult.set(null);
    this.importFile.set(null);
    this.showImportModal.set(true);
  }
  closeImportModal() {
    this.showImportModal.set(false);
    this.importFile.set(null);
    this.importResult.set(null);
  }
  onImportFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0] || null;
    this.importFile.set(file);
    this.importResult.set(null);
  }
  clearImportFile() {
    this.importFile.set(null);
    this.importResult.set(null);
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return `${bytes} B`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }
  prosesImport() {
    const file = this.importFile();
    if (!file)
      return;
    this.importBusy.set(true);
    this.importResult.set(null);
    this.api.importCsv(file).subscribe({
      next: (res) => {
        this.importBusy.set(false);
        this.importResult.set(res);
        if (res.berhasil > 0) {
          this.showToast(`${res.berhasil} openshift berhasil diimpor.`);
          this.filterMulai.set("");
          this.filterSelesai.set("");
          this.filterDivisiId.set(null);
          this.query.set("");
          this.page.set(1);
          this.load();
        }
      },
      error: (err) => {
        this.importBusy.set(false);
        const msg = err?.error?.message || err?.message || "Gagal mengirim file ke server.";
        this.importResult.set({ berhasil: 0, gagal: 1, errors: [{ baris: 0, pesan: msg }] });
      }
    });
  }
  downloadTemplate() {
    const header = [
      "Jam Masuk",
      "Jam Keluar",
      "Divisi",
      "Maks. Karyawan",
      "Upah Per jam sesuai upah lembur",
      "Upah Per jam",
      "Catatan"
    ];
    const contohDivisi = this.divisiList()[0]?.namaDivisi || "Nama Divisi";
    const example1 = ["2026-04-28 09:00", "2026-04-28 17:00", contohDivisi, "", "YA", "", "Contoh openshift"];
    const example2 = ["2026-04-28 18:00", "2026-04-28 22:00", contohDivisi, "5", "TIDAK", "20000", "Contoh nominal upah"];
    const body = [header, example1, example2].map((row) => row.map((c) => this.csvCell(c)).join(",")).join("\r\n") + "\r\n";
    this.downloadCsv("template_openshift.csv", body);
  }
  imporExcel() {
    this.openImportModal();
  }
  eksporExcel() {
    const rows = this.list();
    if (!rows.length) {
      this.showToast("Tidak ada data untuk diekspor.");
      return;
    }
    const header = [
      "Jam Masuk",
      "Jam Keluar",
      "Divisi",
      "Maks. Karyawan",
      "Upah Per jam sesuai upah lembur",
      "Upah Per jam",
      "Catatan"
    ];
    const lines = [header.map((h) => this.csvCell(h)).join(",")];
    for (const o of rows) {
      const jamMasuk = `${o.tanggalMulai} ${o.jamMulai}`;
      const jamKeluar = `${o.tanggalSelesai} ${o.jamSelesai}`;
      const divisi = this.divisiNamaList(o).join("; ");
      const maks = o.maksKaryawan == null || o.maksKaryawan === 0 ? "" : String(o.maksKaryawan);
      const sesuai = o.upahJenis === "SESUAI_LEMBUR" ? "YA" : "TIDAK";
      const upah = o.upahJenis === "NOMINAL" ? String(o.upahPerJam || 0) : "";
      const row = [jamMasuk, jamKeluar, divisi, maks, sesuai, upah, o.catatan || ""];
      lines.push(row.map((c) => this.csvCell(c)).join(","));
    }
    const csv = lines.join("\r\n") + "\r\n";
    this.downloadCsv("openshift.csv", csv);
    this.showToast("Data openshift berhasil diekspor.");
  }
  csvCell(v) {
    const s = String(v ?? "");
    if (/[",\n]/.test(s))
      return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }
  downloadCsv(filename, body) {
    const content = "\uFEFFsep=,\r\n" + body;
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  showToast(msg, durationMs = 3e3) {
    this.successMsg.set(msg);
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.successMsg.set(""), durationMs);
  }
  empty() {
    return {
      id: 0,
      tanggalMulai: "",
      jamMulai: "",
      tanggalSelesai: "",
      jamSelesai: "",
      catatan: "",
      upahJenis: "SESUAI_LEMBUR",
      upahPerJam: 0,
      maksKaryawan: null,
      divisiIds: [],
      peminatIds: [],
      dihadiriIds: []
    };
  }
  static {
    this.\u0275fac = function OpenshiftListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpenshiftListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpenshiftListComponent, selectors: [["app-openshift-list"]], decls: 86, vars: 22, consts: [[1, "mb-3"], [1, "mb-2", "fw-bold"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0", "small"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], ["href", "javascript:;", 1, "text-primary", "text-decoration-none"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-muted"], [1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1080"], [1, "card", "shadow-sm"], [1, "card-body"], [1, "fw-bold", "mb-3"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", "placeholder", "Tanggal Mulai", 1, "form-control", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["type", "date", "placeholder", "Tanggal Selesai", 1, "form-control", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "form-select", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "input-group", 2, "max-width", "240px"], ["type", "text", "placeholder", "Cari", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "bx", "bx-search"], [1, "btn", "btn-primary", 3, "click"], [1, "bx", "bx-plus-circle", "me-1"], [1, "bx", "bx-import", "me-1"], [1, "bx", "bx-export", "me-1"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "table-light"], [1, "text-center"], [2, "width", "240px"], [2, "width", "110px"], [2, "width", "140px"], [2, "width", "160px"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mt-3"], [1, "fw-semibold", "small"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1060"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "flex-grow-1"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "toast", "show", "align-items-center", "text-white", "bg-success", "border-0", "shadow"], [1, "d-flex"], [1, "toast-body"], [1, "bx", "bx-check-circle", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"], ["colspan", "6", 1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["colspan", "6", 1, "text-center", "py-4", "text-muted"], [1, "bx", "bx-folder-open", 2, "font-size", "2.2rem"], [1, "mt-1"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small"], [1, "fw-bold", "fs-5"], [1, "small", "text-muted", "mt-1"], [1, "small", "text-muted"], [1, "table", "table-sm", "table-bordered", "mb-0"], [1, "bg-light", 2, "width", "130px"], [1, "bg-light"], [1, "mb-0", "ps-3"], ["title", "Edit", 1, "btn", "btn-sm", "btn-light", "border", "me-1", 3, "click"], [1, "bx", "bx-edit"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-danger", "me-1", 3, "click"], [1, "bx", "bx-trash"], ["title", "Riwayat", 1, "btn", "btn-sm", "btn-light", "border", 3, "click"], [1, "bx", "bx-history"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bx", "me-2"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "time", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "SESUAI_LEMBUR"], ["value", "NOMINAL"], ["type", "number", "min", "0", "placeholder", "Kosongkan = tidak terbatas", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-12"], [1, "border", "rounded", "p-2", 2, "max-height", "160px", "overflow", "auto"], ["rows", "2", "placeholder", "Catatan tambahan (opsional)", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-x", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked"], [1, "form-check-label", 3, "for"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "bx", "bx-history", "me-2"], [1, "text-primary"], [1, "text-muted", "text-center", "py-3", "mb-0"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted"], [1, "modal-footer", "border-0"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bx", "bx-import", "me-2"], [1, "alert", "alert-warning", "py-2", "mb-3"], [1, "fw-bold", "mb-1"], [1, "bx", "bx-error", "me-1"], [1, "mb-0", "ps-3", "small"], ["href", "javascript:;", 1, "fw-semibold", "text-decoration-underline", 3, "click"], [1, "form-label", "fw-semibold"], ["type", "file", "accept", ".csv,text/csv", 1, "form-control", 3, "change", "disabled"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "rounded", "p-2", "mt-2", "bg-light"], [1, "text-center", "text-muted", "mt-3"], [1, "mt-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "d-flex", "align-items-center", "gap-2", "text-truncate"], [1, "bx", "bxs-file-blank", "text-success", "fs-4"], [1, "text-truncate"], [1, "fw-semibold", "text-truncate"], ["type", "button", "title", "Hapus file", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], [1, "bx", "bx-x"], [1, "alert", "alert-success", "py-2", "mb-2"], [1, "bx", "bx-check-circle", "me-1"], [1, "alert", "alert-danger", "py-2", "mb-2"], [1, "bx", "bx-x-circle", "me-1"], [1, "table-responsive", 2, "max-height", "240px"], [2, "width", "80px"], [1, "text-danger", "small"], [1, "bx", "bx-check", "me-1"]], template: function OpenshiftListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "h4", 1);
        \u0275\u0275text(3, "Openshift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "ol", 3)(6, "li", 4)(7, "a", 5);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 4)(10, "a", 6);
        \u0275\u0275text(11, "Pola Kerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 7);
        \u0275\u0275text(13, "Openshift");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(14, OpenshiftListComponent_Conditional_14_Template, 5, 1, "div", 8);
        \u0275\u0275conditionalCreate(15, OpenshiftListComponent_Conditional_15_Template, 7, 1, "div", 9);
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "h5", 12);
        \u0275\u0275text(19, "Pola Kerja - Openshift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "input", 14);
        \u0275\u0275listener("ngModelChange", function OpenshiftListComponent_Template_input_ngModelChange_21_listener($event) {
          ctx.filterMulai.set($event);
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 15);
        \u0275\u0275text(23, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 16);
        \u0275\u0275listener("ngModelChange", function OpenshiftListComponent_Template_input_ngModelChange_24_listener($event) {
          ctx.filterSelesai.set($event);
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 17);
        \u0275\u0275listener("ngModelChange", function OpenshiftListComponent_Template_select_ngModelChange_25_listener($event) {
          ctx.filterDivisiId.set($event ? +$event : null);
          return ctx.onSearchChange();
        });
        \u0275\u0275elementStart(26, "option", 18);
        \u0275\u0275text(27, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, OpenshiftListComponent_For_29_Template, 2, 2, "option", 18, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 19)(31, "input", 20);
        \u0275\u0275listener("ngModelChange", function OpenshiftListComponent_Template_input_ngModelChange_31_listener($event) {
          ctx.query.set($event);
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 21);
        \u0275\u0275element(33, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 23);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_button_click_34_listener() {
          return ctx.openTambah();
        });
        \u0275\u0275element(35, "i", 24);
        \u0275\u0275text(36, " Tambah Openshift ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 23);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_button_click_37_listener() {
          return ctx.imporExcel();
        });
        \u0275\u0275element(38, "i", 25);
        \u0275\u0275text(39, " Impor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 23);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_button_click_40_listener() {
          return ctx.eksporExcel();
        });
        \u0275\u0275element(41, "i", 26);
        \u0275\u0275text(42, " Ekspor Excel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 27)(44, "table", 28)(45, "thead", 29)(46, "tr", 30)(47, "th", 31);
        \u0275\u0275text(48, "Jadwal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Upah");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th", 32);
        \u0275\u0275text(52, "Peminat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th", 33);
        \u0275\u0275text(54, "Dihadiri Oleh");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th", 34);
        \u0275\u0275text(56, "Total Upah (Rp)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th", 34);
        \u0275\u0275text(58, "Aksi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "tbody");
        \u0275\u0275conditionalCreate(60, OpenshiftListComponent_Conditional_60_Template, 4, 0, "tr")(61, OpenshiftListComponent_Conditional_61_Template, 5, 0, "tr")(62, OpenshiftListComponent_Conditional_62_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 35)(64, "div", 36);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "nav")(67, "ul", 37)(68, "li", 38)(69, "a", 39);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_a_click_69_listener() {
          return ctx.goToPage(1);
        });
        \u0275\u0275text(70, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "li", 38)(72, "a", 39);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_a_click_72_listener() {
          return ctx.goToPage(ctx.page() - 1);
        });
        \u0275\u0275text(73, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(74, OpenshiftListComponent_For_75_Template, 3, 3, "li", 40, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(76, "li", 38)(77, "a", 39);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_a_click_77_listener() {
          return ctx.goToPage(ctx.page() + 1);
        });
        \u0275\u0275text(78, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "li", 38)(80, "a", 39);
        \u0275\u0275listener("click", function OpenshiftListComponent_Template_a_click_80_listener() {
          return ctx.goToPage(ctx.totalPages());
        });
        \u0275\u0275text(81, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275conditionalCreate(82, OpenshiftListComponent_Conditional_82_Template, 67, 31, "div", 41);
        \u0275\u0275conditionalCreate(83, OpenshiftListComponent_Conditional_83_Template, 16, 2, "div", 41);
        \u0275\u0275conditionalCreate(84, OpenshiftListComponent_Conditional_84_Template, 14, 0, "div", 42);
        \u0275\u0275conditionalCreate(85, OpenshiftListComponent_Conditional_85_Template, 34, 6, "div", 41);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg() ? 15 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.filterMulai());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterSelesai());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.filterDivisiId());
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.query());
        \u0275\u0275advance(29);
        \u0275\u0275conditional(ctx.loading() ? 60 : ctx.paged().length === 0 ? 61 : 62);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" Menampilkan ", ctx.paged().length, " dari ", ctx.filtered().length, " total data ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.page() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.page() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.pages());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("disabled", ctx.page() === ctx.totalPages());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.page() === ctx.totalPages());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFormModal() ? 82 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() && ctx.riwayatItem() ? 83 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 84 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImportModal() ? 85 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenshiftListComponent, [{
    type: Component,
    args: [{ selector: "app-openshift-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Page header -->\r
  <div class="mb-3">\r
    <h4 class="mb-2 fw-bold">Openshift</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0 p-0 small">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><a href="javascript:;" class="text-primary text-decoration-none">Pola Kerja</a></li>\r
        <li class="breadcrumb-item active text-muted" aria-current="page">Openshift</li>\r
      </ol>\r
    </nav>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center">\r
      <i class="bx bx-error-circle me-2 fs-5"></i>\r
      <span class="flex-grow-1">{{ error() }}</span>\r
      <button type="button" class="btn-close" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  <!-- Toast Sukses -->\r
  @if (successMsg()) {\r
    <div class="position-fixed top-0 end-0 p-3" style="z-index:1080">\r
      <div class="toast show align-items-center text-white bg-success border-0 shadow"\r
           role="alert">\r
        <div class="d-flex">\r
          <div class="toast-body"><i class="bx bx-check-circle me-2"></i>{{ successMsg() }}</div>\r
          <button type="button" class="btn-close btn-close-white me-2 m-auto"\r
                  (click)="successMsg.set('')"></button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Card -->\r
  <div class="card shadow-sm">\r
    <div class="card-body">\r
      <h5 class="fw-bold mb-3">Pola Kerja - Openshift</h5>\r
\r
      <!-- Toolbar -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <input type="date" class="form-control" style="max-width:160px" placeholder="Tanggal Mulai"\r
               [ngModel]="filterMulai()" (ngModelChange)="filterMulai.set($event); onSearchChange()" />\r
        <span class="text-muted">-</span>\r
        <input type="date" class="form-control" style="max-width:160px" placeholder="Tanggal Selesai"\r
               [ngModel]="filterSelesai()" (ngModelChange)="filterSelesai.set($event); onSearchChange()" />\r
\r
        <select class="form-select" style="max-width:160px"\r
                [ngModel]="filterDivisiId()"\r
                (ngModelChange)="filterDivisiId.set($event ? +$event : null); onSearchChange()">\r
          <option [ngValue]="null">--Divisi--</option>\r
          @for (d of divisiList(); track d.id) {\r
            <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
          }\r
        </select>\r
\r
        <div class="input-group" style="max-width:240px">\r
          <input type="text" class="form-control" placeholder="Cari"\r
                 [ngModel]="query()" (ngModelChange)="query.set($event); onSearchChange()" />\r
          <button class="btn btn-outline-secondary" type="button"><i class="bx bx-search"></i></button>\r
        </div>\r
\r
        <button class="btn btn-primary" (click)="openTambah()">\r
          <i class="bx bx-plus-circle me-1"></i> Tambah Openshift\r
        </button>\r
        <button class="btn btn-primary" (click)="imporExcel()">\r
          <i class="bx bx-import me-1"></i> Impor Excel\r
        </button>\r
        <button class="btn btn-primary" (click)="eksporExcel()">\r
          <i class="bx bx-export me-1"></i> Ekspor Excel\r
        </button>\r
      </div>\r
\r
      <!-- Table -->\r
      <div class="table-responsive">\r
        <table class="table align-middle mb-0">\r
          <thead class="table-light">\r
            <tr class="text-center">\r
              <th style="width:240px">Jadwal</th>\r
              <th>Upah</th>\r
              <th style="width:110px">Peminat</th>\r
              <th style="width:140px">Dihadiri Oleh</th>\r
              <th style="width:160px">Total Upah (Rp)</th>\r
              <th style="width:160px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (loading()) {\r
              <tr><td colspan="6" class="text-center py-4">\r
                <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
              </td></tr>\r
            } @else if (paged().length === 0) {\r
              <tr><td colspan="6" class="text-center py-4 text-muted">\r
                <i class="bx bx-folder-open" style="font-size:2.2rem"></i>\r
                <div class="mt-1">Belum ada data openshift.</div>\r
              </td></tr>\r
            } @else {\r
              @for (o of paged(); track o.id) {\r
                <tr>\r
                  <!-- Jadwal -->\r
                  <td>\r
                    <div class="d-flex align-items-center gap-2">\r
                      <div>\r
                        <div class="text-muted small">{{ formatTgl(o.tanggalMulai) }}</div>\r
                        <div class="fw-bold fs-5">{{ o.jamMulai }}</div>\r
                      </div>\r
                      <div class="text-muted">\u2022\u2022\u2022</div>\r
                      <div>\r
                        <div class="text-muted small">{{ formatTgl(o.tanggalSelesai) }}</div>\r
                        <div class="fw-bold fs-5">{{ o.jamSelesai }}</div>\r
                      </div>\r
                    </div>\r
                    <div class="small text-muted mt-1">Durasi: {{ durasiJam(o) }} jam</div>\r
                    <div class="small text-muted">Catatan: {{ o.catatan || '-' }}</div>\r
                  </td>\r
\r
                  <!-- Upah -->\r
                  <td>\r
                    <table class="table table-sm table-bordered mb-0">\r
                      <tbody>\r
                        <tr>\r
                          <th class="bg-light" style="width:130px">Upah Per Jam</th>\r
                          <td>{{ upahLabel(o) }}</td>\r
                        </tr>\r
                        <tr>\r
                          <th class="bg-light">Maks. Karyawan</th>\r
                          <td>{{ maksKaryawanLabel(o) }}</td>\r
                        </tr>\r
                        <tr>\r
                          <th class="bg-light">Target Divisi</th>\r
                          <td>\r
                            @if (divisiNamaList(o).length === 0) {\r
                              <span class="text-muted">-</span>\r
                            } @else {\r
                              <ul class="mb-0 ps-3">\r
                                @for (n of divisiNamaList(o); track n) {\r
                                  <li>{{ n }}</li>\r
                                }\r
                              </ul>\r
                            }\r
                          </td>\r
                        </tr>\r
                      </tbody>\r
                    </table>\r
                  </td>\r
\r
                  <!-- Peminat -->\r
                  <td class="text-center">\r
                    <a href="javascript:;" class="text-primary text-decoration-none">\r
                      {{ o.peminatIds.length }} Karyawan\r
                    </a>\r
                  </td>\r
\r
                  <!-- Dihadiri -->\r
                  <td class="text-center">{{ o.dihadiriIds.length }} Karyawan</td>\r
\r
                  <!-- Total Upah -->\r
                  <td class="text-center">{{ totalUpah(o) }}</td>\r
\r
                  <!-- Aksi -->\r
                  <td class="text-center">\r
                    <button class="btn btn-sm btn-light border me-1" title="Edit" (click)="openEdit(o)">\r
                      <i class="bx bx-edit"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-danger me-1" title="Hapus" (click)="askDelete(o.id)">\r
                      <i class="bx bx-trash"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-light border" title="Riwayat" (click)="openRiwayat(o)">\r
                      <i class="bx bx-history"></i>\r
                    </button>\r
                  </td>\r
                </tr>\r
              }\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer / pagination -->\r
      <div class="d-flex flex-wrap justify-content-between align-items-center mt-3">\r
        <div class="fw-semibold small">\r
          Menampilkan {{ paged().length }} dari {{ filtered().length }} total data\r
        </div>\r
        <nav>\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="page() === 1">\r
              <a class="page-link" href="javascript:;" (click)="goToPage(1)">\xAB</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="page() === 1">\r
              <a class="page-link" href="javascript:;" (click)="goToPage(page() - 1)">\u2039</a>\r
            </li>\r
            @for (n of pages(); track n) {\r
              <li class="page-item" [class.active]="page() === n">\r
                <a class="page-link" href="javascript:;" (click)="goToPage(n)">{{ n }}</a>\r
              </li>\r
            }\r
            <li class="page-item" [class.disabled]="page() === totalPages()">\r
              <a class="page-link" href="javascript:;" (click)="goToPage(page() + 1)">\u203A</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="page() === totalPages()">\r
              <a class="page-link" href="javascript:;" (click)="goToPage(totalPages())">\xBB</a>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tambah/Edit \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-lg modal-dialog-scrollable">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx me-2" [class.bx-plus]="!editingId()" [class.bx-edit]="editingId()"></i>\r
              {{ editingId() ? 'Edit Openshift' : 'Tambah Openshift' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeFormModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2">{{ modalError() }}</div>\r
            }\r
\r
            <div class="row g-3">\r
              <div class="col-md-6">\r
                <label class="form-label">Tanggal Mulai <span class="text-danger">*</span></label>\r
                <input type="date" class="form-control"\r
                       [(ngModel)]="modalData.tanggalMulai" [ngModelOptions]="{standalone:true}" />\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label">Jam Mulai <span class="text-danger">*</span></label>\r
                <input type="time" class="form-control"\r
                       [(ngModel)]="modalData.jamMulai" [ngModelOptions]="{standalone:true}" />\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label">Tanggal Selesai <span class="text-danger">*</span></label>\r
                <input type="date" class="form-control"\r
                       [(ngModel)]="modalData.tanggalSelesai" [ngModelOptions]="{standalone:true}" />\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label">Jam Selesai <span class="text-danger">*</span></label>\r
                <input type="time" class="form-control"\r
                       [(ngModel)]="modalData.jamSelesai" [ngModelOptions]="{standalone:true}" />\r
              </div>\r
\r
              <div class="col-md-6">\r
                <label class="form-label">Jenis Upah</label>\r
                <select class="form-select" [(ngModel)]="modalData.upahJenis"\r
                        [ngModelOptions]="{standalone:true}">\r
                  <option value="SESUAI_LEMBUR">Sesuai Upah Lembur Karyawan</option>\r
                  <option value="NOMINAL">Nominal Per Jam</option>\r
                </select>\r
              </div>\r
              @if (modalData.upahJenis === 'NOMINAL') {\r
                <div class="col-md-6">\r
                  <label class="form-label">Upah Per Jam (Rp)</label>\r
                  <input type="number" min="0" class="form-control"\r
                         [(ngModel)]="modalData.upahPerJam" [ngModelOptions]="{standalone:true}" />\r
                </div>\r
              }\r
\r
              <div class="col-md-6">\r
                <label class="form-label">Maks. Karyawan</label>\r
                <input type="number" min="0" class="form-control" placeholder="Kosongkan = tidak terbatas"\r
                       [(ngModel)]="modalData.maksKaryawan" [ngModelOptions]="{standalone:true}" />\r
              </div>\r
\r
              <div class="col-12">\r
                <label class="form-label">Target Divisi <span class="text-danger">*</span></label>\r
                <div class="border rounded p-2" style="max-height:160px;overflow:auto">\r
                  @if (divisiList().length === 0) {\r
                    <div class="text-muted small">Belum ada divisi.</div>\r
                  } @else {\r
                    @for (d of divisiList(); track d.id) {\r
                      <div class="form-check">\r
                        <input class="form-check-input" type="checkbox"\r
                               [id]="'div_' + d.id"\r
                               [checked]="modalData.divisiIds.includes(d.id)"\r
                               (change)="toggleDivisiTarget(d.id)" />\r
                        <label class="form-check-label" [for]="'div_' + d.id">{{ d.namaDivisi }}</label>\r
                      </div>\r
                    }\r
                  }\r
                </div>\r
              </div>\r
\r
              <div class="col-12">\r
                <label class="form-label">Catatan</label>\r
                <textarea rows="2" class="form-control"\r
                          [(ngModel)]="modalData.catatan" [ngModelOptions]="{standalone:true}"\r
                          placeholder="Catatan tambahan (opsional)"></textarea>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-secondary btn-sm px-4" (click)="closeFormModal()">\r
              <i class="bx bx-x me-1"></i> Tutup\r
            </button>\r
            <button type="button" class="btn btn-primary btn-sm px-4"\r
                    [disabled]="saving()" (click)="saveOpenshift()">\r
              @if (saving()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span> Menyimpan...\r
              } @else {\r
                <i class="bx bx-save me-1"></i> Simpan\r
              }\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Riwayat \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showRiwayatModal() && riwayatItem()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx bx-history me-2"></i>\r
              Riwayat Openshift - <span class="text-primary">{{ formatTgl(riwayatItem()!.tanggalMulai) }} {{ riwayatItem()!.jamMulai }}</span>\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeRiwayat()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <p class="text-muted text-center py-3 mb-0">Belum ada riwayat perubahan.</p>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-secondary btn-sm" (click)="closeRiwayat()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Konfirmasi Hapus \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (confirmDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1060">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger">\r
              <i class="bx bx-trash me-2"></i>Hapus Openshift?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted">\r
            Data yang dihapus tidak dapat dikembalikan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-secondary btn-sm" (click)="cancelDelete()">Batal</button>\r
            <button class="btn btn-danger btn-sm" (click)="doDelete()">Ya, Hapus</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Impor Excel/CSV \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showImportModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-import me-2"></i>Impor Openshift</h5>\r
            <button type="button" class="btn-close" (click)="closeImportModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="alert alert-warning py-2 mb-3">\r
              <div class="fw-bold mb-1"><i class="bx bx-error me-1"></i>PENTING!</div>\r
              <ul class="mb-0 ps-3 small">\r
                <li>\r
                  Untuk melakukan impor data openshift, pastikan file yang diupload sudah sesuai\r
                  dengan format yang ditentukan.\r
                  <a href="javascript:;" class="fw-semibold text-decoration-underline"\r
                     (click)="downloadTemplate()">Download format impor excel di sini.</a>\r
                </li>\r
                <li>Aksi impor hanya akan dijalankan jika semua data sudah benar.</li>\r
                <li>Jika ada data yang perlu diperbaiki, sistem akan segera menampilkan informasinya\r
                    setelah klik tombol proses.</li>\r
              </ul>\r
            </div>\r
\r
            <label class="form-label fw-semibold">Pilih File CSV</label>\r
            <input type="file" class="form-control" accept=".csv,text/csv"\r
                   [disabled]="importBusy()"\r
                   (change)="onImportFileSelected($event)" />\r
\r
            @if (importFile()) {\r
              <div class="d-flex align-items-center justify-content-between border rounded p-2 mt-2 bg-light">\r
                <div class="d-flex align-items-center gap-2 text-truncate">\r
                  <i class="bx bxs-file-blank text-success fs-4"></i>\r
                  <div class="text-truncate">\r
                    <div class="fw-semibold text-truncate">{{ importFile()!.name }}</div>\r
                    <div class="small text-muted">{{ formatFileSize(importFile()!.size) }}</div>\r
                  </div>\r
                </div>\r
                <button type="button" class="btn btn-sm btn-outline-danger"\r
                        [disabled]="importBusy()" (click)="clearImportFile()" title="Hapus file">\r
                  <i class="bx bx-x"></i>\r
                </button>\r
              </div>\r
            }\r
\r
            @if (importBusy()) {\r
              <div class="text-center text-muted mt-3">\r
                <span class="spinner-border spinner-border-sm me-2"></span> Memproses file...\r
              </div>\r
            }\r
\r
            @if (importResult()) {\r
              <div class="mt-3">\r
                @if (importResult()!.gagal === 0 && importResult()!.berhasil > 0) {\r
                  <div class="alert alert-success py-2 mb-2">\r
                    <i class="bx bx-check-circle me-1"></i>\r
                    <b>{{ importResult()!.berhasil }}</b> data openshift berhasil diimpor.\r
                  </div>\r
                } @else if (importResult()!.gagal > 0) {\r
                  <div class="alert alert-danger py-2 mb-2">\r
                    <i class="bx bx-x-circle me-1"></i>\r
                    Impor <b>dibatalkan</b> \u2014 ditemukan <b>{{ importResult()!.gagal }}</b> baris bermasalah.\r
                    Tidak ada data yang disimpan. Perbaiki file lalu unggah ulang.\r
                  </div>\r
                  <div class="table-responsive" style="max-height:240px">\r
                    <table class="table table-sm table-bordered mb-0">\r
                      <thead class="table-light">\r
                        <tr><th style="width:80px">Baris</th><th>Pesan</th></tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (err of importResult()!.errors; track $index) {\r
                          <tr>\r
                            <td class="text-center">{{ err.baris }}</td>\r
                            <td class="text-danger small">{{ err.pesan }}</td>\r
                          </tr>\r
                        }\r
                      </tbody>\r
                    </table>\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-secondary btn-sm" (click)="closeImportModal()">Tutup</button>\r
            <button class="btn btn-primary btn-sm"\r
                    [disabled]="!importFile() || importBusy()"\r
                    (click)="prosesImport()">\r
              @if (importBusy()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span> Memproses...\r
              } @else {\r
                <i class="bx bx-check me-1"></i> Proses\r
              }\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenshiftListComponent, { className: "OpenshiftListComponent", filePath: "src/app/features/pola-kerja/openshift/openshift-list.component.ts", lineNumber: 32 });
})();
export {
  OpenshiftListComponent
};
//# sourceMappingURL=chunk-WIRTTOAQ.js.map
