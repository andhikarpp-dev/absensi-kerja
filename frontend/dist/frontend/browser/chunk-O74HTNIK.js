import {
  HARI_LIST
} from "./chunk-APKBODS7.js";
import {
  PolaKerjaService
} from "./chunk-H2DAYQGM.js";
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
  effect,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/services/jadwal-shift.service.ts
var JadwalShiftService = class _JadwalShiftService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/jadwal-shift`;
  }
  /** bulan format YYYY-MM */
  getMatrix(bulan, divisiId, search) {
    let params = new HttpParams();
    if (bulan)
      params = params.set("bulan", bulan);
    if (divisiId)
      params = params.set("divisiId", String(divisiId));
    if (search)
      params = params.set("search", search);
    return this.http.get(this.url, { params }).pipe(map((d) => d?.matrix ?? d ?? null), catchError((err) => {
      console.error("[JadwalShift] getMatrix:", err);
      return of(null);
    }));
  }
  getKaryawan(divisiId, search) {
    let params = new HttpParams();
    if (divisiId)
      params = params.set("divisiId", String(divisiId));
    if (search)
      params = params.set("search", search);
    return this.http.get(`${this.url}/karyawan`, { params }).pipe(map((d) => d?.karyawan ?? []), catchError(() => of([])));
  }
  getShiftOptions() {
    return this.http.get(`${this.url}/shift-options`).pipe(map((d) => d?.shiftOptions ?? []), catchError(() => of([])));
  }
  upsert(req) {
    return this.http.post(this.url, req).pipe(map((d) => d?.jadwalShift ?? d));
  }
  batch(req) {
    return this.http.post(`${this.url}/batch`, req).pipe(map((d) => d?.jadwalShift ?? []));
  }
  copyWeek(req) {
    return this.http.post(`${this.url}/copy-week`, req).pipe(map((d) => d?.jumlah ?? 0));
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  /** Download file Excel template untuk impor jadwal shift. */
  downloadTemplate(bulan) {
    let params = new HttpParams();
    if (bulan)
      params = params.set("bulan", bulan);
    this.http.get(`${this.url}/template`, { params, responseType: "blob" }).subscribe((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `format-impor-jadwal-shift${bulan ? "-" + bulan : ""}.xlsx`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
  /** Ekspor seluruh jadwal shift pada bulan tertentu sebagai file Excel. */
  eksporExcel(bulan, divisiId, search) {
    let params = new HttpParams();
    if (bulan)
      params = params.set("bulan", bulan);
    if (divisiId)
      params = params.set("divisiId", String(divisiId));
    if (search)
      params = params.set("search", search);
    return this.http.get(`${this.url}/ekspor`, { params, responseType: "blob" }).pipe(map((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `jadwal-shift${bulan ? "-" + bulan : ""}.xlsx`;
      a.click();
      URL.revokeObjectURL(a.href);
      return blob;
    }));
  }
  /** Upload file Excel impor jadwal shift. */
  impor(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.url}/impor`, form).pipe(map((d) => d?.hasil ?? d));
  }
  static {
    this.\u0275fac = function JadwalShiftService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JadwalShiftService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JadwalShiftService, factory: _JadwalShiftService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JadwalShiftService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/jadwal-shift/jadwal-shift-list/jadwal-shift-list.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function JadwalShiftListComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.namaDivisi);
  }
}
function JadwalShiftListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function JadwalShiftListComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function JadwalShiftListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Belum ada karyawan dengan divisi ber-Sistem Kerja Shift. ");
    \u0275\u0275elementEnd();
  }
}
function JadwalShiftListComponent_Conditional_52_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-warning-subtle", ctx_r1.isWeekend(d_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatHariTanggal(ctx_r1.parseDate(d_r3)), " ");
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementEnd();
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 54);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const assign_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", assign_r8.jamMasuk, " - ", assign_r8.jamKeluar);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_1_Conditional_2_Template, 2, 2, "div", 62);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const assign_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(assign_r8.polaKerjaNama || "Shift");
    \u0275\u0275advance();
    \u0275\u0275conditional(assign_r8.jamMasuk || assign_r8.jamKeluar ? 2 : -1);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, "LIBUR");
    \u0275\u0275elementEnd();
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, "OFF");
    \u0275\u0275elementEnd();
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275conditionalCreate(1, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_1_Template, 3, 2)(2, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_2_Template, 2, 0, "div", 61)(3, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Conditional_3_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const assign_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275styleProp("background", assign_r8.warna || "#0d6efd");
    \u0275\u0275property("title", assign_r8.keterangan || "");
    \u0275\u0275advance();
    \u0275\u0275conditional(assign_r8.status === "AKTIF" ? 1 : assign_r8.status === "LIBUR" ? 2 : 3);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275property("value", p_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10.namaPolaKerja);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "select", 63);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_Template_select_click_1_listener($event) {
      return $event.stopPropagation();
    })("change", function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const d_r7 = \u0275\u0275nextContext().$implicit;
      const k_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.quickAssignShift(k_r5.id, d_r7, +$event.target.value || null);
      return \u0275\u0275resetView($event.target.value = "");
    });
    \u0275\u0275elementStart(2, "option", 64);
    \u0275\u0275text(3, "Pilih Jadwal");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_For_5_Template, 2, 2, "option", 65, \u0275\u0275componentInstance().trackByPola, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 66);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const d_r7 = \u0275\u0275nextContext().$implicit;
      const k_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openEditor(k_r5.id, d_r7));
    });
    \u0275\u0275element(7, "i", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_23_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(((tmp_23_0 = ctx_r1.matrix()) == null ? null : tmp_23_0.shiftOptions) || \u0275\u0275pureFunction0(0, _c0));
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "td", 57);
    \u0275\u0275listener("dblclick", function JadwalShiftListComponent_Conditional_52_For_10_For_16_Template_td_dblclick_1_listener() {
      const d_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const k_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditor(k_r5.id, d_r7));
    });
    \u0275\u0275conditionalCreate(2, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_2_Template, 4, 4, "div", 58)(3, JadwalShiftListComponent_Conditional_52_For_10_For_16_Conditional_3_Template, 8, 1, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const k_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const assign_r11 = \u0275\u0275storeLet(ctx_r1.assignmentMap()[ctx_r1.cellKey(k_r5.id, d_r7)]);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-warning-subtle", ctx_r1.isWeekend(d_r7));
    \u0275\u0275advance();
    \u0275\u0275conditional(assign_r11 ? 2 : 3);
  }
}
function JadwalShiftListComponent_Conditional_52_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "div", 45);
    \u0275\u0275conditionalCreate(3, JadwalShiftListComponent_Conditional_52_For_10_Conditional_3_Template, 1, 1, "img", 46)(4, JadwalShiftListComponent_Conditional_52_For_10_Conditional_4_Template, 2, 0, "div", 47);
    \u0275\u0275elementStart(5, "div", 48)(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51)(11, "input", 52);
    \u0275\u0275listener("change", function JadwalShiftListComponent_Conditional_52_For_10_Template_input_change_11_listener($event) {
      const k_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRepeatWeekly(k_r5.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 53);
    \u0275\u0275text(13, " Ulang jadwal ini tiap minggu ");
    \u0275\u0275conditionalCreate(14, JadwalShiftListComponent_Conditional_52_For_10_Conditional_14_Template, 1, 0, "span", 54);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275repeaterCreate(15, JadwalShiftListComponent_Conditional_52_For_10_For_16_Template, 4, 4, "td", 55, \u0275\u0275componentInstance().trackByDate, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const k_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.fotoUrl(k_r5.fotoProfil)) ? 3 : 4, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(k_r5.namaLengkap);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r5.divisiNama);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "rpt_" + k_r5.id)("checked", ctx_r1.isRepeating(k_r5.id))("disabled", ctx_r1.isProcessing(k_r5.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "rpt_" + k_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isProcessing(k_r5.id) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.weekDates());
  }
}
function JadwalShiftListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "table", 38)(2, "thead", 39)(3, "tr")(4, "th", 40);
    \u0275\u0275text(5, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, JadwalShiftListComponent_Conditional_52_For_7_Template, 2, 3, "th", 41, \u0275\u0275componentInstance().trackByDate, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, JadwalShiftListComponent_Conditional_52_For_10_Template, 17, 8, "tr", null, \u0275\u0275componentInstance().trackByKaryawan, true);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.weekDates());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.matrix().karyawan);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Klik dua kali pada sel untuk edit. Menampilkan ", ctx_r1.matrix().karyawan.length, " karyawan. ");
  }
}
function JadwalShiftListComponent_Conditional_53_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Edit Pola Kerja ");
  }
}
function JadwalShiftListComponent_Conditional_53_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Tambah Pola Kerja Massal (", ctx_r1.editorCells().length, " sel) ");
  }
}
function JadwalShiftListComponent_Conditional_53_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tambah Pola Kerja ");
  }
}
function JadwalShiftListComponent_Conditional_53_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r13.label);
  }
}
function JadwalShiftListComponent_Conditional_53_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "label", 76);
    \u0275\u0275text(2, " Nama Pola Kerja ");
    \u0275\u0275elementStart(3, "span", 83);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 77)(6, "input", 84);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("namaPolaKerja", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 75)(8, "label", 76);
    \u0275\u0275text(9, "Toleransi Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 85)(12, "input", 86);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("toleransi", +$event || 0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 87);
    \u0275\u0275text(14, "Menit");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 75)(16, "label", 76);
    \u0275\u0275text(17, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 77)(19, "input", 84);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("catatan", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 75)(21, "label", 76);
    \u0275\u0275text(22, "Warna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 77)(24, "input", 88);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("warna", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 89)(26, "label", 76);
    \u0275\u0275text(27, " Jadwal Kerja ");
    \u0275\u0275elementStart(28, "span", 83);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 77)(31, "div", 90)(32, "table", 91)(33, "thead", 39)(34, "tr")(35, "th");
    \u0275\u0275text(36, "Jam Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Maks. Menit Istirahat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody")(46, "tr")(47, "td")(48, "input", 92);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("jamMasuk", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "td")(50, "input", 92);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("jamKeluar", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td")(52, "input", 92);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("mulaiIstirahat", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "td")(54, "input", 92);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("selesaiIstirahat", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td")(56, "input", 93);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Conditional_17_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateForm("maksMenitIstirahat", +$event || 0));
    });
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().namaPolaKerja);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().toleransi);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().catatan);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().warna);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().jamMasuk);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().jamKeluar);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().mulaiIstirahat);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().selesaiIstirahat);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().maksMenitIstirahat);
  }
}
function JadwalShiftListComponent_Conditional_53_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_53_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hapusJadwal());
    });
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2, " Hapus ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.editorSaving());
  }
}
function JadwalShiftListComponent_Conditional_53_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 81);
  }
}
function JadwalShiftListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditor());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_53_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71)(4, "h5", 72);
    \u0275\u0275conditionalCreate(5, JadwalShiftListComponent_Conditional_53_Conditional_5_Template, 1, 0)(6, JadwalShiftListComponent_Conditional_53_Conditional_6_Template, 1, 1)(7, JadwalShiftListComponent_Conditional_53_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 73);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_53_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74)(10, "div", 75)(11, "label", 76);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 77)(14, "select", 13);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_53_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateForm("status", $event));
    });
    \u0275\u0275repeaterCreate(15, JadwalShiftListComponent_Conditional_53_For_16_Template, 2, 2, "option", 14, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(17, JadwalShiftListComponent_Conditional_53_Conditional_17_Template, 57, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 78);
    \u0275\u0275conditionalCreate(19, JadwalShiftListComponent_Conditional_53_Conditional_19_Template, 3, 1, "button", 79);
    \u0275\u0275elementStart(20, "button", 80);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_53_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEditor());
    });
    \u0275\u0275conditionalCreate(21, JadwalShiftListComponent_Conditional_53_Conditional_21_Template, 1, 0, "span", 81);
    \u0275\u0275text(22, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 82);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_53_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditor());
    });
    \u0275\u0275text(24, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.editorIsEdit() ? 5 : ctx_r1.editorCells().length > 1 ? 6 : 7);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.editorForm().status);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editorForm().status === "AKTIF" ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editorIsEdit() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.editorSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editorSaving() ? 21 : -1);
  }
}
function JadwalShiftListComponent_Conditional_54_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r17.namaDivisi);
  }
}
function JadwalShiftListComponent_Conditional_54_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 81);
  }
}
function JadwalShiftListComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBulkModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71)(4, "h5", 72);
    \u0275\u0275text(5, "Ulang Jadwal Massal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBulkModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 74)(8, "div", 75)(9, "label", 76);
    \u0275\u0275text(10, "Filter Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 77)(12, "select", 13);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_54_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkDivisiId.set($event ? +$event : null));
    });
    \u0275\u0275elementStart(13, "option", 14);
    \u0275\u0275text(14, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, JadwalShiftListComponent_Conditional_54_For_16_Template, 2, 2, "option", 14, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 75)(18, "label", 76);
    \u0275\u0275text(19, "Jumlah Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 77)(21, "span", 61);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 75)(24, "label", 76);
    \u0275\u0275text(25, "Jadwal Shift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 77)(27, "div", 45)(28, "button", 96);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevBulkWeek());
    });
    \u0275\u0275text(29, "\u2190");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 97);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 96);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextBulkWeek());
    });
    \u0275\u0275text(33, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 98)(35, "input", 99);
    \u0275\u0275listener("change", function JadwalShiftListComponent_Conditional_54_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkRepeatWeekly.set($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 100);
    \u0275\u0275text(37, " Ulang jadwal yang ada pada rentang tanggal ini di setiap minggu berikutnya ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 78)(39, "button", 80);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveBulk());
    });
    \u0275\u0275conditionalCreate(40, JadwalShiftListComponent_Conditional_54_Conditional_40_Template, 1, 0, "span", 81);
    \u0275\u0275text(41, " Proses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 82);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_54_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBulkModal());
    });
    \u0275\u0275text(43, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r1.bulkDivisiId());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.shiftDivisi());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.bulkTargetCount(), " Karyawan");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bulkWeekLabel(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.bulkRepeatWeekly());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.bulkSaving() || ctx_r1.bulkTargetCount() === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bulkSaving() ? 40 : -1);
  }
}
function JadwalShiftListComponent_Conditional_55_Conditional_25_Conditional_6_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 121);
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
    \u0275\u0275elementStart(9, "td", 83);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r19.baris);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r19.nip || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r19.nama || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r19.tanggal || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r19.pesan);
  }
}
function JadwalShiftListComponent_Conditional_55_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "table", 119)(2, "thead", 39)(3, "tr")(4, "th", 120);
    \u0275\u0275text(5, "Baris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "NIP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Pesan Error");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, JadwalShiftListComponent_Conditional_55_Conditional_25_Conditional_6_For_16_Template, 11, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r20 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(r_r20.errors);
  }
}
function JadwalShiftListComponent_Conditional_55_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 114);
    \u0275\u0275elementStart(1, "div", 115)(2, "span", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, JadwalShiftListComponent_Conditional_55_Conditional_25_Conditional_6_Template, 17, 0, "div", 118);
  }
  if (rf & 2) {
    const r_r20 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Berhasil: ", r_r20.berhasil);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Gagal: ", r_r20.gagal);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r20.errors && r_r20.errors.length > 0 ? 6 : -1);
  }
}
function JadwalShiftListComponent_Conditional_55_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_55_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uploadImpor());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.imporFile() || ctx_r1.imporUploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.imporUploading() ? "Memproses..." : "Proses", " ");
  }
}
function JadwalShiftListComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 101)(2, "div", 102)(3, "div", 71)(4, "h5", 72);
    \u0275\u0275text(5, "Impor Jadwal Shift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_55_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImporModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 74)(8, "div", 103)(9, "div", 104);
    \u0275\u0275text(10, "PENTING!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 105)(12, "li");
    \u0275\u0275text(13, " Untuk melakukan impor jadwal shift, pastikan file yang diupload sudah sesuai format yang ditentukan. ");
    \u0275\u0275elementStart(14, "a", 106);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_55_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(15, " Download format impor excel di sini. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 75)(17, "label", 107);
    \u0275\u0275text(18, " Pilih Berkas ");
    \u0275\u0275elementStart(19, "span", 83);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 108)(22, "input", 109);
    \u0275\u0275listener("change", function JadwalShiftListComponent_Conditional_55_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 110);
    \u0275\u0275text(24, "Maksimal 5 MB. Format .xlsx / .xls.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, JadwalShiftListComponent_Conditional_55_Conditional_25_Template, 7, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 111);
    \u0275\u0275conditionalCreate(27, JadwalShiftListComponent_Conditional_55_Conditional_27_Template, 2, 2, "button", 112);
    \u0275\u0275elementStart(28, "button", 113);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_55_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImporModal());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.imporResult()) ? 25 : -1, tmp_1_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.imporResult() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.imporUploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.imporResult() ? "Tutup" : "Batal", " ");
  }
}
function JadwalShiftListComponent_Conditional_56_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r23 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r23.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r23.namaDivisi);
  }
}
function JadwalShiftListComponent_Conditional_56_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r24 = ctx.$implicit;
    \u0275\u0275property("ngValue", b_r24.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r24.label);
  }
}
function JadwalShiftListComponent_Conditional_56_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r25 = ctx.$implicit;
    \u0275\u0275property("ngValue", y_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r25);
  }
}
function JadwalShiftListComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 123)(2, "div", 70)(3, "div", 71)(4, "h5", 72);
    \u0275\u0275text(5, "Ekspor Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_56_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEksporModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 74)(8, "div", 75)(9, "label", 124);
    \u0275\u0275text(10, "Filter Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 108)(12, "select", 13);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_56_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eksporDivisiId.set($event === "" || $event === null ? null : +$event));
    });
    \u0275\u0275elementStart(13, "option", 14);
    \u0275\u0275text(14, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, JadwalShiftListComponent_Conditional_56_For_16_Template, 2, 2, "option", 14, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 75)(18, "label", 124);
    \u0275\u0275text(19, "Jumlah Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 125);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 75)(23, "label", 124);
    \u0275\u0275text(24, "Bulan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 126)(26, "select", 13);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_56_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eksporBulan.set(+$event));
    });
    \u0275\u0275repeaterCreate(27, JadwalShiftListComponent_Conditional_56_For_28_Template, 2, 2, "option", 14, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 13);
    \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Conditional_56_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eksporTahun.set(+$event));
    });
    \u0275\u0275repeaterCreate(30, JadwalShiftListComponent_Conditional_56_For_31_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 111)(33, "button", 80);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_56_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEkspor());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 127);
    \u0275\u0275listener("click", function JadwalShiftListComponent_Conditional_56_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEksporModal());
    });
    \u0275\u0275text(36, " Tutup ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r1.eksporDivisiId());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.shiftDivisi());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.eksporTargetCount(), " Karyawan ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.eksporBulan());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.bulanNamaList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.eksporTahun());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.eksporTahunList());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.exporting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.exporting() ? "Memproses..." : "Proses", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.exporting());
  }
}
var JadwalShiftListComponent = class _JadwalShiftListComponent {
  emptyForm() {
    return {
      namaPolaKerja: "",
      toleransi: 0,
      catatan: "",
      warna: "#000000",
      jamMasuk: "",
      jamKeluar: "",
      mulaiIstirahat: "",
      selesaiIstirahat: "",
      maksMenitIstirahat: 60,
      status: "AKTIF"
    };
  }
  constructor() {
    this.svc = inject(JadwalShiftService);
    this.divisiSvc = inject(DivisiService);
    this.polaKerjaSvc = inject(PolaKerjaService);
    this.bulan = signal(this.toMonthString(/* @__PURE__ */ new Date()), ...ngDevMode ? [{ debugName: "bulan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiFilter = signal(null, ...ngDevMode ? [{ debugName: "divisiFilter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.weekStart = signal(this.toDateString(this.startOfWeek(/* @__PURE__ */ new Date())), ...ngDevMode ? [{ debugName: "weekStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.weekDates = computed(() => {
      const ws = this.weekStart();
      if (!ws)
        return [];
      const out = [];
      const start = this.parseDate(ws);
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        out.push(this.toDateString(d));
      }
      return out;
    }, ...ngDevMode ? [{ debugName: "weekDates" }] : (
      /* istanbul ignore next */
      []
    ));
    this.weekRangeLabel = computed(() => {
      const dates = this.weekDates();
      if (dates.length === 0)
        return "";
      return `${this.formatHariTanggal(this.parseDate(dates[0]))} - ${this.formatHariTanggal(this.parseDate(dates[6]))}`;
    }, ...ngDevMode ? [{ debugName: "weekRangeLabel" }] : (
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
    this.matrix = signal(null, ...ngDevMode ? [{ debugName: "matrix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.assignmentMap = computed(() => {
      const m = {};
      const mx = this.matrix();
      if (mx)
        for (const a of mx.assignments)
          m[`${a.karyawanId}|${a.tanggal}`] = a;
      return m;
    }, ...ngDevMode ? [{ debugName: "assignmentMap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shiftDivisi = computed(() => this.divisiList().filter((d) => d.sistemKerja === "SHIFT"), ...ngDevMode ? [{ debugName: "shiftDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.repeatingKaryawan = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "repeatingKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.processingKaryawan = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "processingKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showImporModal = signal(false, ...ngDevMode ? [{ debugName: "showImporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporFile = signal(null, ...ngDevMode ? [{ debugName: "imporFile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporUploading = signal(false, ...ngDevMode ? [{ debugName: "imporUploading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporResult = signal(null, ...ngDevMode ? [{ debugName: "imporResult" }] : (
      /* istanbul ignore next */
      []
    ));
    this.exporting = signal(false, ...ngDevMode ? [{ debugName: "exporting" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showEksporModal = signal(false, ...ngDevMode ? [{ debugName: "showEksporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporDivisiId = signal(null, ...ngDevMode ? [{ debugName: "eksporDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporBulan = signal((/* @__PURE__ */ new Date()).getMonth() + 1, ...ngDevMode ? [{ debugName: "eksporBulan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporTahun = signal((/* @__PURE__ */ new Date()).getFullYear(), ...ngDevMode ? [{ debugName: "eksporTahun" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporTahunList = computed(() => {
      const y = (/* @__PURE__ */ new Date()).getFullYear();
      const list = [];
      for (let i = y - 5; i <= y + 5; i++)
        list.push(i);
      return list;
    }, ...ngDevMode ? [{ debugName: "eksporTahunList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulanNamaList = [
      { value: 1, label: "Januari" },
      { value: 2, label: "Februari" },
      { value: 3, label: "Maret" },
      { value: 4, label: "April" },
      { value: 5, label: "Mei" },
      { value: 6, label: "Juni" },
      { value: 7, label: "Juli" },
      { value: 8, label: "Agustus" },
      { value: 9, label: "September" },
      { value: 10, label: "Oktober" },
      { value: 11, label: "November" },
      { value: 12, label: "Desember" }
    ];
    this.eksporTargetCount = computed(() => {
      const mx = this.matrix();
      if (!mx)
        return 0;
      const did = this.eksporDivisiId();
      if (did == null)
        return mx.karyawan.length;
      return mx.karyawan.filter((k) => k.divisiId === did).length;
    }, ...ngDevMode ? [{ debugName: "eksporTargetCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showEditor = signal(false, ...ngDevMode ? [{ debugName: "showEditor" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editorCells = signal([], ...ngDevMode ? [{ debugName: "editorCells" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editorForm = signal(this.emptyForm(), ...ngDevMode ? [{ debugName: "editorForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editorSaving = signal(false, ...ngDevMode ? [{ debugName: "editorSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editorIsEdit = signal(false, ...ngDevMode ? [{ debugName: "editorIsEdit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBulkModal = signal(false, ...ngDevMode ? [{ debugName: "showBulkModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkDivisiId = signal(null, ...ngDevMode ? [{ debugName: "bulkDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkWeekStart = signal("", ...ngDevMode ? [{ debugName: "bulkWeekStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkRepeatWeekly = signal(true, ...ngDevMode ? [{ debugName: "bulkRepeatWeekly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkSaving = signal(false, ...ngDevMode ? [{ debugName: "bulkSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkTargetCount = computed(() => {
      const list = this.matrix()?.karyawan || [];
      const did = this.bulkDivisiId();
      if (did == null)
        return list.length;
      return list.filter((k) => k.divisiId === did).length;
    }, ...ngDevMode ? [{ debugName: "bulkTargetCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkWeekLabel = computed(() => {
      const ws = this.bulkWeekStart();
      if (!ws)
        return "";
      const start = this.parseDate(ws);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return `${this.formatHariTanggal(start)} - ${this.formatHariTanggal(end)}`;
    }, ...ngDevMode ? [{ debugName: "bulkWeekLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusOptions = [
      { value: "AKTIF", label: "Aktif (Shift)" },
      { value: "LIBUR", label: "Libur" },
      { value: "OFF", label: "Off" }
    ];
    this.trackByKaryawan = (_, k) => k.id;
    this.trackByDate = (_, d) => d;
    this.trackByPola = (_, p) => p.id;
    effect(() => {
      this.bulan();
      this.divisiFilter();
      this.search();
      this.loadMatrix();
    });
  }
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((list) => this.divisiList.set(list || []));
  }
  // ── Loading ─────────────────────────────────────────────
  loadMatrix() {
    this.loading.set(true);
    this.error.set("");
    this.svc.getMatrix(this.bulan(), this.divisiFilter(), this.search() || null).subscribe({
      next: (m) => {
        this.matrix.set(m);
        this.loading.set(false);
      },
      error: (e) => {
        console.error(e);
        this.error.set(e?.message || "Gagal memuat jadwal shift");
        this.loading.set(false);
      }
    });
  }
  // ── Navigation: prev / next month ───────────────────────
  prevMonth() {
    this.shiftMonth(-1);
  }
  nextMonth() {
    this.shiftMonth(1);
  }
  shiftMonth(delta) {
    const [y, m] = this.bulan().split("-").map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    this.bulan.set(this.toMonthString(d));
    this.weekStart.set(this.toDateString(this.startOfWeek(d)));
  }
  // ── Navigation: prev / next week ────────────────────────
  prevWeek() {
    this.shiftWeek(-7);
  }
  nextWeek() {
    this.shiftWeek(7);
  }
  shiftWeek(deltaDays) {
    const ws = this.weekStart();
    if (!ws)
      return;
    const d = this.parseDate(ws);
    d.setDate(d.getDate() + deltaDays);
    this.weekStart.set(this.toDateString(d));
    const newMonth = this.toMonthString(d);
    if (newMonth !== this.bulan())
      this.bulan.set(newMonth);
  }
  // ── Cell key (untuk lookup assignmentMap) ───────────────
  cellKey(karyawanId, tanggal) {
    return `${karyawanId}|${tanggal}`;
  }
  // ── Repeat weekly per karyawan ──────────────────────────
  isRepeating(karyawanId) {
    return this.repeatingKaryawan().has(karyawanId);
  }
  isProcessing(karyawanId) {
    return this.processingKaryawan().has(karyawanId);
  }
  toggleRepeatWeekly(karyawanId, checked) {
    const next = new Set(this.repeatingKaryawan());
    if (checked)
      next.add(karyawanId);
    else
      next.delete(karyawanId);
    this.repeatingKaryawan.set(next);
    if (checked)
      this.applyRepeatWeekly(karyawanId);
  }
  /** Salin jadwal minggu yang sedang dilihat ke semua minggu berikutnya pada bulan yang sama. */
  applyRepeatWeekly(karyawanId) {
    const ws = this.weekStart();
    if (!ws)
      return;
    const sourceStart = this.parseDate(ws);
    const lastDay = new Date(sourceStart.getFullYear(), sourceStart.getMonth() + 1, 0);
    const targetWeeks = [];
    let cursor = new Date(sourceStart);
    cursor.setDate(cursor.getDate() + 7);
    while (cursor <= lastDay) {
      targetWeeks.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 7);
    }
    if (targetWeeks.length === 0)
      return;
    const proc = new Set(this.processingKaryawan());
    proc.add(karyawanId);
    this.processingKaryawan.set(proc);
    let pending = targetWeeks.length;
    const finish = () => {
      const p = new Set(this.processingKaryawan());
      p.delete(karyawanId);
      this.processingKaryawan.set(p);
      this.loadMatrix();
    };
    for (const w of targetWeeks) {
      this.svc.copyWeek({
        sourceWeekStart: ws,
        targetWeekStart: this.toDateString(w),
        karyawanIds: [karyawanId],
        overwrite: true
      }).subscribe({
        next: () => {
          if (--pending === 0)
            finish();
        },
        error: (e) => {
          console.error(e);
          if (--pending === 0)
            finish();
        }
      });
    }
  }
  // ── Quick assign via dropdown sel ────────────────────────
  quickAssignShift(karyawanId, tanggal, polaKerjaId) {
    if (!polaKerjaId)
      return;
    const opts = this.matrix()?.shiftOptions || [];
    const pola = opts.find((p) => p.id === polaKerjaId) || null;
    const hari = pola?.hariList?.[0];
    const proc = new Set(this.processingKaryawan());
    proc.add(karyawanId);
    this.processingKaryawan.set(proc);
    this.svc.upsert({
      karyawanId,
      tanggal,
      polaKerjaId,
      jamMasuk: hari?.jamMasuk ?? null,
      jamKeluar: hari?.jamKeluar ?? null,
      status: "AKTIF",
      keterangan: null,
      warna: null
    }).subscribe({
      next: () => {
        const p = new Set(this.processingKaryawan());
        p.delete(karyawanId);
        this.processingKaryawan.set(p);
        this.loadMatrix();
        if (this.isRepeating(karyawanId)) {
          setTimeout(() => this.applyRepeatWeekly(karyawanId), 300);
        }
      },
      error: (e) => {
        console.error(e);
        const p = new Set(this.processingKaryawan());
        p.delete(karyawanId);
        this.processingKaryawan.set(p);
        alert(e?.message || "Gagal menyimpan jadwal");
      }
    });
  }
  // ── Editor (single / bulk) ──────────────────────────────
  openEditor(karyawanId, tanggal) {
    const a = this.assignmentMap()[this.cellKey(karyawanId, tanggal)];
    this.editorCells.set([{ karyawanId, tanggal }]);
    this.editorIsEdit.set(!!a);
    if (a) {
      const opts = this.matrix()?.shiftOptions || [];
      const pola = opts.find((p) => p.id === a.polaKerjaId) || null;
      const hari = pola?.hariList?.[0];
      this.editorForm.set({
        namaPolaKerja: pola?.namaPolaKerja ?? a.polaKerjaNama ?? "",
        toleransi: pola?.toleransiKeterlambatan ?? 0,
        catatan: a.keterangan ?? "",
        warna: a.warna ?? "#000000",
        jamMasuk: a.jamMasuk ?? hari?.jamMasuk ?? "",
        jamKeluar: a.jamKeluar ?? hari?.jamKeluar ?? "",
        mulaiIstirahat: hari?.mulaiIstirahat ?? "",
        selesaiIstirahat: hari?.selesaiIstirahat ?? "",
        maksMenitIstirahat: hari?.maksMenitIstirahat ?? 60,
        status: a.status ?? "AKTIF"
      });
    } else {
      this.editorForm.set(this.emptyForm());
    }
    this.showEditor.set(true);
  }
  closeEditor() {
    this.showEditor.set(false);
    this.editorSaving.set(false);
  }
  updateForm(key, val) {
    this.editorForm.set(__spreadProps(__spreadValues({}, this.editorForm()), { [key]: val }));
  }
  saveEditor() {
    const cells = this.editorCells();
    if (cells.length === 0)
      return;
    const f = this.editorForm();
    if (f.status === "AKTIF") {
      if (!f.namaPolaKerja.trim()) {
        alert("Nama Pola Kerja wajib diisi.");
        return;
      }
      if (!f.jamMasuk || !f.jamKeluar) {
        alert("Jam Masuk dan Jam Keluar wajib diisi.");
        return;
      }
    }
    this.editorSaving.set(true);
    const done = () => {
      this.editorSaving.set(false);
      this.closeEditor();
      this.loadMatrix();
    };
    const fail = (e) => {
      console.error(e);
      this.editorSaving.set(false);
      alert(e?.message || "Gagal menyimpan jadwal");
    };
    if (f.status !== "AKTIF") {
      this.assignToCells(cells, null, f, done, fail);
      return;
    }
    const karyawanList = this.matrix()?.karyawan || [];
    const divisiIdsSet = /* @__PURE__ */ new Set();
    for (const c of cells) {
      const k = karyawanList.find((x) => x.id === c.karyawanId);
      if (k?.divisiId != null)
        divisiIdsSet.add(k.divisiId);
    }
    const divisiIds = Array.from(divisiIdsSet);
    const polaReq = {
      divisiIds,
      namaPolaKerja: f.namaPolaKerja.trim(),
      toleransiKeterlambatan: f.toleransi || 0,
      jenisJadwal: "JAM_TETAP",
      hariList: HARI_LIST.map((hari) => ({
        hari,
        polaHari: "HARI_KERJA",
        jamMasuk: f.jamMasuk,
        jamKeluar: f.jamKeluar,
        mulaiIstirahat: f.mulaiIstirahat,
        selesaiIstirahat: f.selesaiIstirahat,
        maksMenitIstirahat: f.maksMenitIstirahat || 60
      }))
    };
    this.polaKerjaSvc.create(polaReq).subscribe({
      next: (pola) => this.assignToCells(cells, pola.id, f, done, fail),
      error: fail
    });
  }
  /** Helper: assign jadwal ke semua sel terpilih (single atau batch). */
  assignToCells(cells, polaKerjaId, f, done, fail) {
    if (cells.length === 1) {
      const c = cells[0];
      this.svc.upsert({
        karyawanId: c.karyawanId,
        tanggal: c.tanggal,
        polaKerjaId,
        jamMasuk: f.jamMasuk || null,
        jamKeluar: f.jamKeluar || null,
        status: f.status,
        keterangan: f.catatan || null,
        warna: f.warna || null
      }).subscribe({ next: done, error: fail });
    } else {
      const karyawanIds = Array.from(new Set(cells.map((c) => c.karyawanId)));
      const tanggalList = Array.from(new Set(cells.map((c) => c.tanggal)));
      const req = {
        karyawanIds,
        tanggalList,
        polaKerjaId,
        jamMasuk: f.jamMasuk || null,
        jamKeluar: f.jamKeluar || null,
        status: f.status,
        keterangan: f.catatan || null,
        warna: f.warna || null,
        overwrite: true
      };
      this.svc.batch(req).subscribe({ next: done, error: fail });
    }
  }
  hapusJadwal() {
    const cells = this.editorCells();
    if (cells.length !== 1)
      return;
    const a = this.assignmentMap()[this.cellKey(cells[0].karyawanId, cells[0].tanggal)];
    if (!a?.id) {
      this.closeEditor();
      return;
    }
    if (!confirm("Hapus jadwal pada sel ini?"))
      return;
    this.editorSaving.set(true);
    this.svc.delete(a.id).subscribe({
      next: () => {
        this.editorSaving.set(false);
        this.closeEditor();
        this.loadMatrix();
      },
      error: (e) => {
        this.editorSaving.set(false);
        alert(e?.message || "Gagal menghapus");
      }
    });
  }
  // ── Ulang Jadwal Massal ────────────────────────────────
  openBulkModal() {
    this.bulkDivisiId.set(this.divisiFilter());
    const today = /* @__PURE__ */ new Date();
    let monday = this.startOfWeek(today);
    const mx = this.matrix();
    if (mx && (this.toDateString(monday) < mx.startDate || this.toDateString(monday) > mx.endDate)) {
      monday = this.startOfWeek(this.parseDate(mx.startDate));
    }
    this.bulkWeekStart.set(this.toDateString(monday));
    this.bulkRepeatWeekly.set(true);
    this.showBulkModal.set(true);
  }
  closeBulkModal() {
    this.showBulkModal.set(false);
    this.bulkSaving.set(false);
  }
  prevBulkWeek() {
    this.shiftBulkWeek(-7);
  }
  nextBulkWeek() {
    this.shiftBulkWeek(7);
  }
  shiftBulkWeek(deltaDays) {
    const ws = this.bulkWeekStart();
    if (!ws)
      return;
    const d = this.parseDate(ws);
    d.setDate(d.getDate() + deltaDays);
    this.bulkWeekStart.set(this.toDateString(d));
  }
  saveBulk() {
    const ws = this.bulkWeekStart();
    if (!ws) {
      alert("Tentukan minggu sumber terlebih dahulu.");
      return;
    }
    const list = this.matrix()?.karyawan || [];
    const did = this.bulkDivisiId();
    const targetKaryawan = did == null ? list : list.filter((k) => k.divisiId === did);
    if (targetKaryawan.length === 0) {
      alert("Tidak ada karyawan untuk di-ulang.");
      return;
    }
    const karyawanIds = targetKaryawan.map((k) => k.id);
    const sourceStart = this.parseDate(ws);
    const targetWeeks = [];
    let cursor = new Date(sourceStart);
    cursor.setDate(cursor.getDate() + 7);
    if (this.bulkRepeatWeekly()) {
      const lastDay = new Date(sourceStart.getFullYear(), sourceStart.getMonth() + 1, 0);
      while (cursor <= lastDay) {
        targetWeeks.push(new Date(cursor));
        cursor.setDate(cursor.getDate() + 7);
      }
      if (targetWeeks.length === 0)
        targetWeeks.push(new Date(cursor));
    } else {
      targetWeeks.push(new Date(cursor));
    }
    const ok = confirm(`Akan mengulang jadwal minggu sumber ke ${targetWeeks.length} minggu berikutnya untuk ${targetKaryawan.length} karyawan. Jadwal yang sudah ada akan ditimpa. Lanjutkan?`);
    if (!ok)
      return;
    this.bulkSaving.set(true);
    let pending = targetWeeks.length;
    let totalSalin = 0;
    let gagal = false;
    for (const w of targetWeeks) {
      this.svc.copyWeek({
        sourceWeekStart: ws,
        targetWeekStart: this.toDateString(w),
        karyawanIds,
        overwrite: true
      }).subscribe({
        next: (n) => {
          totalSalin += n || 0;
          if (--pending === 0)
            this.finishBulk(gagal, totalSalin);
        },
        error: (e) => {
          gagal = true;
          console.error(e);
          if (--pending === 0)
            this.finishBulk(gagal, totalSalin);
        }
      });
    }
  }
  finishBulk(gagal, total) {
    this.bulkSaving.set(false);
    this.closeBulkModal();
    this.loadMatrix();
    if (gagal)
      alert(`Sebagian proses gagal. Total ${total} jadwal berhasil di-ulang.`);
    else
      alert(`Berhasil mengulang ${total} jadwal.`);
  }
  // ── Impor Jadwal Massal ────────────────────────────────
  openImporModal() {
    this.imporFile.set(null);
    this.imporResult.set(null);
    this.showImporModal.set(true);
  }
  closeImporModal() {
    this.showImporModal.set(false);
    this.imporUploading.set(false);
    if (this.imporResult()) {
      this.loadMatrix();
    }
  }
  downloadTemplate() {
    this.svc.downloadTemplate(this.bulan());
  }
  /** Buka modal Ekspor Excel (pre-fill dari filter aktif). */
  eksporExcel() {
    this.eksporDivisiId.set(this.divisiFilter());
    const cur = this.bulan();
    if (cur && /^\d{4}-\d{2}$/.test(cur)) {
      const [y, m] = cur.split("-").map((n) => parseInt(n, 10));
      this.eksporTahun.set(y);
      this.eksporBulan.set(m);
    }
    this.showEksporModal.set(true);
  }
  closeEksporModal() {
    if (this.exporting())
      return;
    this.showEksporModal.set(false);
  }
  /** Proses ekspor — dipanggil dari tombol "Proses" pada modal. */
  submitEkspor() {
    if (this.exporting())
      return;
    const y = this.eksporTahun();
    const m = String(this.eksporBulan()).padStart(2, "0");
    const bulanStr = `${y}-${m}`;
    this.exporting.set(true);
    this.svc.eksporExcel(bulanStr, this.eksporDivisiId(), this.search()).subscribe({
      next: () => {
        this.exporting.set(false);
        this.showEksporModal.set(false);
      },
      error: (e) => {
        this.exporting.set(false);
        alert(e?.error?.message || e?.message || "Gagal mengekspor jadwal shift.");
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.imporFile.set(input.files[0]);
    } else {
      this.imporFile.set(null);
    }
  }
  uploadImpor() {
    const file = this.imporFile();
    if (!file)
      return;
    this.imporUploading.set(true);
    this.imporResult.set(null);
    this.svc.impor(file).subscribe({
      next: (res) => {
        this.imporResult.set(res);
        this.imporUploading.set(false);
      },
      error: (e) => {
        console.error(e);
        this.imporUploading.set(false);
        alert(e?.message || "Terjadi kesalahan saat mengimpor jadwal.");
      }
    });
  }
  // ── Helpers ─────────────────────────────────────────────
  toMonthString(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    return `${y}-${m}`;
  }
  toDateString(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  startOfWeek(d) {
    const result = new Date(d);
    const day = result.getDay() || 7;
    result.setDate(result.getDate() - (day - 1));
    return result;
  }
  parseDate(s) {
    return /* @__PURE__ */ new Date(s + "T00:00:00");
  }
  isWeekend(s) {
    const dow = this.parseDate(s).getDay();
    return dow === 0 || dow === 6;
  }
  dayLabel(s) {
    const labels = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    return labels[this.parseDate(s).getDay()];
  }
  dayNum(s) {
    return this.parseDate(s).getDate();
  }
  /** "Senin, 27 Apr 2026" */
  formatHariTanggal(d) {
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][d.getDay()];
    const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${hari}, ${String(d.getDate()).padStart(2, "0")} ${bulan} ${d.getFullYear()}`;
  }
  fotoUrl(foto) {
    if (!foto)
      return null;
    if (foto.startsWith("http"))
      return foto;
    return `${environment.baseUrl}/${foto}`;
  }
  static {
    this.\u0275fac = function JadwalShiftListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JadwalShiftListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JadwalShiftListComponent, selectors: [["app-jadwal-shift-list"]], decls: 57, vars: 13, consts: [[1, "container-fluid", "p-3"], [1, "mb-3"], [1, "fw-bold", "mb-1"], ["aria-label", "breadcrumb", 1, "small"], [1, "breadcrumb", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-2", "align-items-center"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "input-group"], ["type", "text", "placeholder", "Cari karyawan...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bx", "bx-search"], [1, "col-md-6", "d-flex", "justify-content-end", "gap-2"], [1, "btn", "btn-outline-success", 3, "click"], [1, "bx", "bx-import", "me-1"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "bx", "bx-export", "me-1"], [1, "btn", "text-white", 2, "background", "#6f42c1", 3, "click"], [1, "bx", "bx-refresh", "me-1"], [1, "d-flex", "justify-content-center", "align-items-center", "gap-2", "mt-3", "flex-wrap"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "fw-semibold", "ms-2"], ["type", "month", 1, "form-control", "form-control-sm", "ms-2", 2, "max-width", "180px", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger"], [1, "card"], [1, "card-body", "p-0"], [1, "p-4", "text-center", "text-muted"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "table-responsive", "jadwal-shift-wrapper"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light"], [1, "sticky-col", 2, "min-width", "230px"], [1, "text-center", 2, "min-width", "140px", 3, "bg-warning-subtle"], [1, "px-3", "py-2", "small", "text-muted", "border-top"], [1, "text-center", 2, "min-width", "140px"], [1, "sticky-col"], [1, "d-flex", "align-items-center", "gap-2"], ["alt", "foto", 1, "rounded-circle", 2, "width", "36px", "height", "36px", "object-fit", "cover", 3, "src"], [1, "rounded-circle", "bg-secondary-subtle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "36px", "height", "36px"], [1, "flex-grow-1"], [1, "fw-semibold", "small"], [1, "text-muted", "small"], [1, "form-check", "form-check-sm", "mt-1", "repeat-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked", "disabled"], [1, "form-check-label", "small", 3, "for"], [1, "spinner-border", "spinner-border-sm", "ms-1", 2, "width", ".8rem", "height", ".8rem"], [1, "text-center", "cell-shift", 3, "bg-warning-subtle"], [1, "bx", "bx-user"], [1, "text-center", "cell-shift", 3, "dblclick"], [1, "shift-chip", 3, "background", "title"], [1, "d-flex", "flex-column", "align-items-stretch", "gap-1"], [1, "shift-chip", 3, "title"], [1, "fw-semibold"], [1, "small"], [1, "form-select", "form-select-sm", 3, "click", "change"], ["value", ""], [3, "value"], ["type", "button", "title", "Tambah jadwal baru", 1, "btn", "btn-sm", "btn-outline-secondary", "py-0", 3, "click"], [1, "bx", "bx-plus"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", 3, "click"], [1, "modal-dialog", "modal-lg", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "mb-3", "align-items-center"], [1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], [1, "modal-footer", "justify-content-center"], ["type", "button", 1, "btn", "btn-outline-danger", "me-auto", 3, "disabled"], ["type", "button", 1, "btn", "text-white", "px-4", 2, "background", "#6f42c1", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["type", "button", 1, "btn", "btn-light", "px-4", "border", 3, "click"], [1, "text-danger"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group", 2, "max-width", "200px"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], ["type", "color", 1, "form-control", "form-control-color", 3, "ngModelChange", "ngModel"], [1, "row", "mb-2"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "mb-0", "text-center"], ["type", "time", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", "text-center", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-outline-danger", "me-auto", 3, "click", "disabled"], [1, "bx", "bx-trash", "me-1"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "form-control", "text-center", 2, "min-width", "280px"], [1, "form-check", "mt-3"], ["type", "checkbox", "id", "repeatWeekly", 1, "form-check-input", 3, "change", "checked"], ["for", "repeatWeekly", 1, "form-check-label"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "640px"], [1, "modal-content", "border-0", "shadow"], [1, "alert", "alert-light", "border", "small", "mb-3"], [1, "fw-bold", "mb-2"], [1, "mb-0", "ps-3"], ["href", "javascript:void(0)", 1, "text-primary", "fw-semibold", 3, "click"], [1, "col-sm-4", "col-form-label", "small"], [1, "col-sm-8"], ["type", "file", "accept", ".xlsx, .xls", 1, "form-control", "form-control-sm", 3, "change"], [1, "form-text", "small", "text-muted"], [1, "modal-footer", "d-flex", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "disabled"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click", "disabled"], [1, "my-3"], [1, "d-flex", "gap-3", "mb-2", "small"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "table-responsive", 2, "max-height", "240px", "overflow", "auto"], [1, "table", "table-sm", "table-bordered", "small", "mb-0"], [1, "text-center", 2, "width", "60px"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "modal-dialog", "modal-dialog-centered"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-8", "fw-semibold"], [1, "col-sm-8", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-light", "border", "px-4", 3, "click", "disabled"]], template: function JadwalShiftListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
        \u0275\u0275text(4, "Jadwal Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 7);
        \u0275\u0275text(12, "Kelola Karyawan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 8);
        \u0275\u0275text(14, "Jadwal Shift");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "select", 13);
        \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Template_select_ngModelChange_19_listener($event) {
          return ctx.divisiFilter.set($event ? +$event : null);
        });
        \u0275\u0275elementStart(20, "option", 14);
        \u0275\u0275text(21, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, JadwalShiftListComponent_For_23_Template, 2, 2, "option", 14, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 12)(25, "div", 15)(26, "input", 16);
        \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function JadwalShiftListComponent_Template_button_click_27_listener() {
          return ctx.loadMatrix();
        });
        \u0275\u0275element(28, "i", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 19)(30, "button", 20);
        \u0275\u0275listener("click", function JadwalShiftListComponent_Template_button_click_30_listener() {
          return ctx.openImporModal();
        });
        \u0275\u0275element(31, "i", 21);
        \u0275\u0275text(32, " Impor Jadwal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 22);
        \u0275\u0275listener("click", function JadwalShiftListComponent_Template_button_click_33_listener() {
          return ctx.eksporExcel();
        });
        \u0275\u0275element(34, "i", 23);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 24);
        \u0275\u0275listener("click", function JadwalShiftListComponent_Template_button_click_36_listener() {
          return ctx.openBulkModal();
        });
        \u0275\u0275element(37, "i", 25);
        \u0275\u0275text(38, " Ulang Jadwal Massal ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 26)(40, "button", 27);
        \u0275\u0275listener("click", function JadwalShiftListComponent_Template_button_click_40_listener() {
          return ctx.prevWeek();
        });
        \u0275\u0275text(41, "\u2190 Minggu sebelumnya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 27);
        \u0275\u0275listener("click", function JadwalShiftListComponent_Template_button_click_42_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275text(43, "Minggu berikutnya \u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 28);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "input", 29);
        \u0275\u0275listener("ngModelChange", function JadwalShiftListComponent_Template_input_ngModelChange_46_listener($event) {
          return ctx.bulan.set($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(47, JadwalShiftListComponent_Conditional_47_Template, 2, 1, "div", 30);
        \u0275\u0275elementStart(48, "div", 31)(49, "div", 32);
        \u0275\u0275conditionalCreate(50, JadwalShiftListComponent_Conditional_50_Template, 3, 0, "div", 33)(51, JadwalShiftListComponent_Conditional_51_Template, 2, 0, "div", 33)(52, JadwalShiftListComponent_Conditional_52_Template, 13, 1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(53, JadwalShiftListComponent_Conditional_53_Template, 25, 6, "div", 34);
        \u0275\u0275conditionalCreate(54, JadwalShiftListComponent_Conditional_54_Template, 44, 7, "div", 34);
        \u0275\u0275conditionalCreate(55, JadwalShiftListComponent_Conditional_55_Template, 30, 4, "div", 35);
        \u0275\u0275conditionalCreate(56, JadwalShiftListComponent_Conditional_56_Template, 37, 8, "div", 34);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275property("ngModel", ctx.divisiFilter());
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shiftDivisi());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.search());
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.exporting() ? "Mengekspor\u2026" : "Ekspor Excel", " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.weekRangeLabel());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.bulan());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 47 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 50 : !ctx.matrix() || ctx.matrix().karyawan.length === 0 ? 51 : 52);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showEditor() ? 53 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBulkModal() ? 54 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImporModal() ? 55 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showEksporModal() ? 56 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], styles: ["\n.jadwal-shift-wrapper[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 320px);\n  overflow: auto;\n}\n.jadwal-shift-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.jadwal-shift-wrapper[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  background: #f8f9fa;\n}\n.sticky-col[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  background: #fff;\n  z-index: 2;\n  border-right: 2px solid #dee2e6;\n}\n.jadwal-shift-wrapper[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.sticky-col[_ngcontent-%COMP%] {\n  z-index: 4;\n}\n.cell-shift[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.15s;\n}\n.cell-shift[_ngcontent-%COMP%]:hover {\n  background-color: rgba(13, 110, 253, 0.08);\n}\n.shift-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 80px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.repeat-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 6px;\n  border: 1px solid #198754;\n  border-radius: 4px;\n  background: #f0fdf4;\n}\n.repeat-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.repeat-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #166534;\n  cursor: pointer;\n}\n/*# sourceMappingURL=jadwal-shift-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JadwalShiftListComponent, [{
    type: Component,
    args: [{ selector: "app-jadwal-shift-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <div class="container-fluid p-3">\r
\r
    <!-- Breadcrumb / Title -->\r
    <div class="mb-3">\r
      <h4 class="fw-bold mb-1">Jadwal Shift</h4>\r
      <nav aria-label="breadcrumb" class="small">\r
        <ol class="breadcrumb mb-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard">Dasbor</a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Kelola Karyawan</a></li>\r
          <li class="breadcrumb-item active">Jadwal Shift</li>\r
        </ol>\r
      </nav>\r
    </div>\r
\r
    <!-- Filter bar -->\r
    <div class="card mb-3">\r
      <div class="card-body">\r
        <div class="row g-2 align-items-center">\r
          <div class="col-md-3">\r
            <select class="form-select" [ngModel]="divisiFilter()" (ngModelChange)="divisiFilter.set($event ? +$event : null)">\r
              <option [ngValue]="null">--Divisi--</option>\r
              @for (d of shiftDivisi(); track d.id) {\r
                <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="col-md-3">\r
            <div class="input-group">\r
              <input type="text" class="form-control" placeholder="Cari karyawan..."\r
                     [ngModel]="search()" (ngModelChange)="search.set($event)" />\r
              <button class="btn btn-outline-secondary" type="button" (click)="loadMatrix()">\r
                <i class="bx bx-search"></i>\r
              </button>\r
            </div>\r
          </div>\r
          <div class="col-md-6 d-flex justify-content-end gap-2">\r
            <button class="btn btn-outline-success" (click)="openImporModal()">\r
              <i class="bx bx-import me-1"></i> Impor Jadwal\r
            </button>\r
            <button class="btn btn-success" (click)="eksporExcel()" [disabled]="exporting()">\r
              <i class="bx bx-export me-1"></i>\r
              {{ exporting() ? 'Mengekspor\u2026' : 'Ekspor Excel' }}\r
            </button>\r
            <button class="btn text-white" style="background:#6f42c1;" (click)="openBulkModal()">\r
              <i class="bx bx-refresh me-1"></i> Ulang Jadwal Massal\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="d-flex justify-content-center align-items-center gap-2 mt-3 flex-wrap">\r
          <button class="btn btn-success btn-sm" (click)="prevWeek()">\u2190 Minggu sebelumnya</button>\r
          <button class="btn btn-success btn-sm" (click)="nextWeek()">Minggu berikutnya \u2192</button>\r
          <span class="fw-semibold ms-2">{{ weekRangeLabel() }}</span>\r
          <input type="month" class="form-control form-control-sm ms-2" style="max-width: 180px;"\r
                 [ngModel]="bulan()" (ngModelChange)="bulan.set($event)" />\r
        </div>\r
      </div>\r
    </div>\r
\r
    @if (error()) {\r
      <div class="alert alert-danger">{{ error() }}</div>\r
    }\r
\r
    <!-- Matrix table -->\r
    <div class="card">\r
      <div class="card-body p-0">\r
        @if (loading()) {\r
          <div class="p-4 text-center text-muted">\r
            <div class="spinner-border spinner-border-sm me-2"></div> Memuat...\r
          </div>\r
        } @else if (!matrix() || matrix()!.karyawan.length === 0) {\r
          <div class="p-4 text-center text-muted">\r
            Belum ada karyawan dengan divisi ber-Sistem Kerja Shift.\r
          </div>\r
        } @else {\r
          <div class="table-responsive jadwal-shift-wrapper">\r
            <table class="table table-bordered table-sm align-middle mb-0">\r
              <thead class="table-light">\r
                <tr>\r
                  <th class="sticky-col" style="min-width: 230px;">Nama</th>\r
                  @for (d of weekDates(); track trackByDate($index, d)) {\r
                    <th class="text-center" [class.bg-warning-subtle]="isWeekend(d)" style="min-width: 140px;">\r
                      {{ formatHariTanggal(parseDate(d)) }}\r
                    </th>\r
                  }\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (k of matrix()!.karyawan; track trackByKaryawan($index, k)) {\r
                  <tr>\r
                    <td class="sticky-col">\r
                      <div class="d-flex align-items-center gap-2">\r
                        @if (fotoUrl(k.fotoProfil); as url) {\r
                          <img [src]="url" alt="foto" class="rounded-circle"\r
                               style="width:36px; height:36px; object-fit:cover;" />\r
                        } @else {\r
                          <div class="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center"\r
                               style="width:36px; height:36px;">\r
                            <i class="bx bx-user"></i>\r
                          </div>\r
                        }\r
                        <div class="flex-grow-1">\r
                          <div class="fw-semibold small">{{ k.namaLengkap }}</div>\r
                          <div class="text-muted small">{{ k.divisiNama }}</div>\r
                          <div class="form-check form-check-sm mt-1 repeat-check">\r
                            <input class="form-check-input" type="checkbox"\r
                                   [id]="'rpt_'+k.id"\r
                                   [checked]="isRepeating(k.id)"\r
                                   [disabled]="isProcessing(k.id)"\r
                                   (change)="toggleRepeatWeekly(k.id, $any($event.target).checked)" />\r
                            <label class="form-check-label small" [for]="'rpt_'+k.id">\r
                              Ulang jadwal ini tiap minggu\r
                              @if (isProcessing(k.id)) {\r
                                <span class="spinner-border spinner-border-sm ms-1" style="width: .8rem; height: .8rem;"></span>\r
                              }\r
                            </label>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </td>\r
                    @for (d of weekDates(); track trackByDate($index, d)) {\r
                      @let assign = assignmentMap()[cellKey(k.id, d)];\r
                      <td class="text-center cell-shift"\r
                          [class.bg-warning-subtle]="isWeekend(d)"\r
                          (dblclick)="openEditor(k.id, d)">\r
                        @if (assign) {\r
                          <div class="shift-chip"\r
                               [style.background]="assign.warna || '#0d6efd'"\r
                               [title]="assign.keterangan || ''">\r
                            @if (assign.status === 'AKTIF') {\r
                              <div class="fw-semibold">{{ assign.polaKerjaNama || 'Shift' }}</div>\r
                              @if (assign.jamMasuk || assign.jamKeluar) {\r
                                <div class="small">{{ assign.jamMasuk }} - {{ assign.jamKeluar }}</div>\r
                              }\r
                            } @else if (assign.status === 'LIBUR') {\r
                              <div class="fw-semibold">LIBUR</div>\r
                            } @else {\r
                              <div class="fw-semibold">OFF</div>\r
                            }\r
                          </div>\r
                        } @else {\r
                          <div class="d-flex flex-column align-items-stretch gap-1">\r
                            <select class="form-select form-select-sm"\r
                                    (click)="$event.stopPropagation()"\r
                                    (change)="quickAssignShift(k.id, d, +$any($event.target).value || null);\r
                                              $any($event.target).value = ''">\r
                              <option value="">Pilih Jadwal</option>\r
                              @for (p of matrix()?.shiftOptions || []; track trackByPola($index, p)) {\r
                                <option [value]="p.id">{{ p.namaPolaKerja }}</option>\r
                              }\r
                            </select>\r
                            <button type="button" class="btn btn-sm btn-outline-secondary py-0"\r
                                    (click)="$event.stopPropagation(); openEditor(k.id, d)"\r
                                    title="Tambah jadwal baru">\r
                              <i class="bx bx-plus"></i>\r
                            </button>\r
                          </div>\r
                        }\r
                      </td>\r
                    }\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
          <div class="px-3 py-2 small text-muted border-top">\r
            Klik dua kali pada sel untuk edit. Menampilkan {{ matrix()!.karyawan.length }} karyawan.\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500 Editor Modal (Tambah / Edit Pola Kerja) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showEditor()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,.5);" (click)="closeEditor()">\r
      <div class="modal-dialog modal-lg" (click)="$event.stopPropagation()">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">\r
              @if (editorIsEdit()) { Edit Pola Kerja }\r
              @else if (editorCells().length > 1) { Tambah Pola Kerja Massal ({{ editorCells().length }} sel) }\r
              @else { Tambah Pola Kerja }\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeEditor()"></button>\r
          </div>\r
          <div class="modal-body">\r
\r
            <!-- Status (LIBUR/OFF/AKTIF) -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label">Status</label>\r
              <div class="col-sm-9">\r
                <select class="form-select"\r
                        [ngModel]="editorForm().status"\r
                        (ngModelChange)="updateForm('status', $event)">\r
                  @for (s of statusOptions; track s.value) {\r
                    <option [ngValue]="s.value">{{ s.label }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            @if (editorForm().status === 'AKTIF') {\r
\r
              <!-- Nama Pola Kerja -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label">\r
                  Nama Pola Kerja <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="text" class="form-control"\r
                         [ngModel]="editorForm().namaPolaKerja"\r
                         (ngModelChange)="updateForm('namaPolaKerja', $event)" />\r
                </div>\r
              </div>\r
\r
              <!-- Toleransi Keterlambatan -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label">Toleransi Keterlambatan</label>\r
                <div class="col-sm-9">\r
                  <div class="input-group" style="max-width: 200px;">\r
                    <input type="number" class="form-control" min="0"\r
                           [ngModel]="editorForm().toleransi"\r
                           (ngModelChange)="updateForm('toleransi', +$event || 0)" />\r
                    <span class="input-group-text">Menit</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Catatan -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label">Catatan</label>\r
                <div class="col-sm-9">\r
                  <input type="text" class="form-control"\r
                         [ngModel]="editorForm().catatan"\r
                         (ngModelChange)="updateForm('catatan', $event)" />\r
                </div>\r
              </div>\r
\r
              <!-- Warna -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label">Warna</label>\r
                <div class="col-sm-9">\r
                  <input type="color" class="form-control form-control-color"\r
                         [ngModel]="editorForm().warna"\r
                         (ngModelChange)="updateForm('warna', $event)" />\r
                </div>\r
              </div>\r
\r
              <!-- Jadwal Kerja Table -->\r
              <div class="row mb-2">\r
                <label class="col-sm-3 col-form-label">\r
                  Jadwal Kerja <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <div class="table-responsive">\r
                    <table class="table table-bordered align-middle mb-0 text-center">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th>Jam Masuk</th>\r
                          <th>Jam Keluar</th>\r
                          <th>Mulai Istirahat</th>\r
                          <th>Selesai Istirahat</th>\r
                          <th>Maks. Menit Istirahat</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        <tr>\r
                          <td>\r
                            <input type="time" class="form-control form-control-sm"\r
                                   [ngModel]="editorForm().jamMasuk"\r
                                   (ngModelChange)="updateForm('jamMasuk', $event)" />\r
                          </td>\r
                          <td>\r
                            <input type="time" class="form-control form-control-sm"\r
                                   [ngModel]="editorForm().jamKeluar"\r
                                   (ngModelChange)="updateForm('jamKeluar', $event)" />\r
                          </td>\r
                          <td>\r
                            <input type="time" class="form-control form-control-sm"\r
                                   [ngModel]="editorForm().mulaiIstirahat"\r
                                   (ngModelChange)="updateForm('mulaiIstirahat', $event)" />\r
                          </td>\r
                          <td>\r
                            <input type="time" class="form-control form-control-sm"\r
                                   [ngModel]="editorForm().selesaiIstirahat"\r
                                   (ngModelChange)="updateForm('selesaiIstirahat', $event)" />\r
                          </td>\r
                          <td>\r
                            <input type="number" class="form-control form-control-sm text-center" min="0"\r
                                   [ngModel]="editorForm().maksMenitIstirahat"\r
                                   (ngModelChange)="updateForm('maksMenitIstirahat', +$event || 0)" />\r
                          </td>\r
                        </tr>\r
                      </tbody>\r
                    </table>\r
                  </div>\r
                </div>\r
              </div>\r
\r
            }\r
          </div>\r
\r
          <div class="modal-footer justify-content-center">\r
            @if (editorIsEdit()) {\r
              <button type="button" class="btn btn-outline-danger me-auto"\r
                      [disabled]="editorSaving()" (click)="hapusJadwal()">\r
                <i class="bx bx-trash me-1"></i> Hapus\r
              </button>\r
            }\r
            <button type="button" class="btn text-white px-4" style="background:#6f42c1;"\r
                    [disabled]="editorSaving()" (click)="saveEditor()">\r
              @if (editorSaving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Simpan\r
            </button>\r
            <button type="button" class="btn btn-light px-4 border" (click)="closeEditor()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Ulang Jadwal Massal Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showBulkModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,.5);" (click)="closeBulkModal()">\r
      <div class="modal-dialog modal-lg" (click)="$event.stopPropagation()">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Ulang Jadwal Massal</h5>\r
            <button type="button" class="btn-close" (click)="closeBulkModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label">Filter Divisi</label>\r
              <div class="col-sm-9">\r
                <select class="form-select"\r
                        [ngModel]="bulkDivisiId()"\r
                        (ngModelChange)="bulkDivisiId.set($event ? +$event : null)">\r
                  <option [ngValue]="null">--Divisi--</option>\r
                  @for (d of shiftDivisi(); track d.id) {\r
                    <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label">Jumlah Target</label>\r
              <div class="col-sm-9">\r
                <span class="fw-semibold">{{ bulkTargetCount() }} Karyawan</span>\r
              </div>\r
            </div>\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label">Jadwal Shift</label>\r
              <div class="col-sm-9">\r
                <div class="d-flex align-items-center gap-2">\r
                  <button type="button" class="btn btn-success" (click)="prevBulkWeek()">\u2190</button>\r
                  <div class="form-control text-center" style="min-width: 280px;">\r
                    {{ bulkWeekLabel() }}\r
                  </div>\r
                  <button type="button" class="btn btn-success" (click)="nextBulkWeek()">\u2192</button>\r
                </div>\r
                <div class="form-check mt-3">\r
                  <input class="form-check-input" type="checkbox" id="repeatWeekly"\r
                         [checked]="bulkRepeatWeekly()"\r
                         (change)="bulkRepeatWeekly.set($any($event.target).checked)" />\r
                  <label class="form-check-label" for="repeatWeekly">\r
                    Ulang jadwal yang ada pada rentang tanggal ini di setiap minggu berikutnya\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
\r
          </div>\r
          <div class="modal-footer justify-content-center">\r
            <button type="button" class="btn text-white px-4" style="background:#6f42c1;"\r
                    [disabled]="bulkSaving() || bulkTargetCount() === 0"\r
                    (click)="saveBulk()">\r
              @if (bulkSaving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Proses\r
            </button>\r
            <button type="button" class="btn btn-light px-4 border" (click)="closeBulkModal()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Impor Jadwal Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showImporModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:640px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Impor Jadwal Shift</h5>\r
            <button type="button" class="btn-close" (click)="closeImporModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
\r
            <div class="alert alert-light border small mb-3">\r
              <div class="fw-bold mb-2">PENTING!</div>\r
              <ul class="mb-0 ps-3">\r
                <li>\r
                  Untuk melakukan impor jadwal shift, pastikan file yang diupload sudah sesuai format yang ditentukan.\r
                  <a href="javascript:void(0)" class="text-primary fw-semibold" (click)="downloadTemplate()">\r
                    Download format impor excel di sini.\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-4 col-form-label small">\r
                Pilih Berkas <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-8">\r
                <input type="file" accept=".xlsx, .xls" class="form-control form-control-sm"\r
                       (change)="onFileSelected($event)">\r
                <div class="form-text small text-muted">Maksimal 5 MB. Format .xlsx / .xls.</div>\r
              </div>\r
            </div>\r
\r
            @if (imporResult(); as r) {\r
              <hr class="my-3">\r
              <div class="d-flex gap-3 mb-2 small">\r
                <span class="badge bg-success">Berhasil: {{ r.berhasil }}</span>\r
                <span class="badge bg-danger">Gagal: {{ r.gagal }}</span>\r
              </div>\r
              @if (r.errors && r.errors.length > 0) {\r
                <div class="table-responsive" style="max-height:240px;overflow:auto">\r
                  <table class="table table-sm table-bordered small mb-0">\r
                    <thead class="table-light">\r
                      <tr>\r
                        <th style="width:60px" class="text-center">Baris</th>\r
                        <th>NIP</th>\r
                        <th>Nama</th>\r
                        <th>Tanggal</th>\r
                        <th>Pesan Error</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (e of r.errors; track $index) {\r
                        <tr>\r
                          <td class="text-center">{{ e.baris }}</td>\r
                          <td>{{ e.nip || '-' }}</td>\r
                          <td>{{ e.nama || '-' }}</td>\r
                          <td>{{ e.tanggal || '-' }}</td>\r
                          <td class="text-danger">{{ e.pesan }}</td>\r
                        </tr>\r
                      }\r
                    </tbody>\r
                  </table>\r
                </div>\r
              }\r
            }\r
\r
          </div>\r
          <div class="modal-footer d-flex justify-content-center gap-2">\r
            @if (!imporResult()) {\r
              <button type="button" class="btn btn-primary btn-sm px-4"\r
                      [disabled]="!imporFile() || imporUploading()"\r
                      (click)="uploadImpor()">\r
                {{ imporUploading() ? 'Memproses...' : 'Proses' }}\r
              </button>\r
            }\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    [disabled]="imporUploading()"\r
                    (click)="closeImporModal()">\r
              {{ imporResult() ? 'Tutup' : 'Batal' }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Ekspor Excel Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showEksporModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,.5);">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Ekspor Excel</h5>\r
            <button type="button" class="btn-close" (click)="closeEksporModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-4 col-form-label">Filter Divisi</label>\r
              <div class="col-sm-8">\r
                <select class="form-select"\r
                        [ngModel]="eksporDivisiId()"\r
                        (ngModelChange)="eksporDivisiId.set($event === '' || $event === null ? null : +$event)">\r
                  <option [ngValue]="null">--Divisi--</option>\r
                  @for (d of shiftDivisi(); track d.id) {\r
                    <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-4 col-form-label">Jumlah Target</label>\r
              <div class="col-sm-8 fw-semibold">\r
                {{ eksporTargetCount() }} Karyawan\r
              </div>\r
            </div>\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-4 col-form-label">Bulan</label>\r
              <div class="col-sm-8 d-flex gap-2">\r
                <select class="form-select"\r
                        [ngModel]="eksporBulan()"\r
                        (ngModelChange)="eksporBulan.set(+$event)">\r
                  @for (b of bulanNamaList; track b.value) {\r
                    <option [ngValue]="b.value">{{ b.label }}</option>\r
                  }\r
                </select>\r
                <select class="form-select"\r
                        [ngModel]="eksporTahun()"\r
                        (ngModelChange)="eksporTahun.set(+$event)">\r
                  @for (y of eksporTahunList(); track y) {\r
                    <option [ngValue]="y">{{ y }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="modal-footer d-flex justify-content-center gap-2">\r
            <button type="button" class="btn text-white px-4"\r
                    style="background:#6f42c1;"\r
                    [disabled]="exporting()"\r
                    (click)="submitEkspor()">\r
              {{ exporting() ? 'Memproses...' : 'Proses' }}\r
            </button>\r
            <button type="button" class="btn btn-light border px-4"\r
                    [disabled]="exporting()"\r
                    (click)="closeEksporModal()">\r
              Tutup\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</app-layout>\r
`, styles: ["/* src/app/features/jadwal-shift/jadwal-shift-list/jadwal-shift-list.component.scss */\n.jadwal-shift-wrapper {\n  max-height: calc(100vh - 320px);\n  overflow: auto;\n}\n.jadwal-shift-wrapper table {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.jadwal-shift-wrapper thead th {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  background: #f8f9fa;\n}\n.sticky-col {\n  position: sticky;\n  left: 0;\n  background: #fff;\n  z-index: 2;\n  border-right: 2px solid #dee2e6;\n}\n.jadwal-shift-wrapper thead th.sticky-col {\n  z-index: 4;\n}\n.cell-shift {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.15s;\n}\n.cell-shift:hover {\n  background-color: rgba(13, 110, 253, 0.08);\n}\n.shift-chip {\n  display: inline-block;\n  min-width: 80px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.repeat-check {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 6px;\n  border: 1px solid #198754;\n  border-radius: 4px;\n  background: #f0fdf4;\n}\n.repeat-check .form-check-input {\n  margin-top: 0;\n}\n.repeat-check .form-check-label {\n  color: #166534;\n  cursor: pointer;\n}\n/*# sourceMappingURL=jadwal-shift-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JadwalShiftListComponent, { className: "JadwalShiftListComponent", filePath: "src/app/features/jadwal-shift/jadwal-shift-list/jadwal-shift-list.component.ts", lineNumber: 43 });
})();
export {
  JadwalShiftListComponent
};
//# sourceMappingURL=chunk-O74HTNIK.js.map
