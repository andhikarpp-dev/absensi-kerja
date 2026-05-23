import {
  HARI_LIST,
  defaultHariList
} from "./chunk-APKBODS7.js";
import {
  PolaKerjaService
} from "./chunk-H2DAYQGM.js";
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
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/pola-kerja/hari-kerja/hari-kerja-list.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.hari;
function HariKerjaListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275elementStart(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_14_Template_button_click_4_listener() {
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
function HariKerjaListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 38)(2, "div", 39)(3, "div", 40);
    \u0275\u0275element(4, "i", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 42);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMsg.set(""));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.successMsg(), " ");
  }
}
function HariKerjaListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275element(2, "span", 44);
    \u0275\u0275text(3, " Memuat... ");
    \u0275\u0275elementEnd()();
  }
}
function HariKerjaListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4, "Belum ada data pola kerja.");
    \u0275\u0275elementEnd()()();
  }
}
function HariKerjaListComponent_Conditional_47_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 25)(8, "button", 48);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_47_For_1_Template_button_click_8_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(p_r5));
    });
    \u0275\u0275element(9, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_47_For_1_Template_button_click_10_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRiwayat(p_r5));
    });
    \u0275\u0275element(11, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_47_For_1_Template_button_click_12_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.askDelete(p_r5.id));
    });
    \u0275\u0275element(13, "i", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.polaKerjaLabel(p_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r5.toleransiKeterlambatan, " Menit");
  }
}
function HariKerjaListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HariKerjaListComponent_Conditional_47_For_1_Template, 14, 3, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.paged());
  }
}
function HariKerjaListComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 30)(1, "a", 31);
    \u0275\u0275listener("click", function HariKerjaListComponent_For_60_Template_a_click_1_listener() {
      const n_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(n_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.page() === n_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r7);
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalError());
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "label", 63);
    \u0275\u0275text(2, "Toleransi Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.toleransiKeterlambatan, $event) || (ctx_r1.modalData.toleransiKeterlambatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 76);
    \u0275\u0275text(6, "Menit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.toleransiKeterlambatan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 81);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template_select_ngModelChange_4_listener($event) {
      const h_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(h_r11.polaHari, $event) || (h_r11.polaHari = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 82);
    \u0275\u0275text(6, "Hari Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 83);
    \u0275\u0275text(8, "Libur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template_input_ngModelChange_10_listener($event) {
      const h_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(h_r11.jamMasuk, $event) || (h_r11.jamMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template_input_ngModelChange_12_listener($event) {
      const h_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(h_r11.jamKeluar, $event) || (h_r11.jamKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template_input_ngModelChange_14_listener($event) {
      const h_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(h_r11.mulaiIstirahat, $event) || (h_r11.mulaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template_input_ngModelChange_16_listener($event) {
      const h_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(h_r11.selesaiIstirahat, $event) || (h_r11.selesaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template_input_ngModelChange_18_listener($event) {
      const h_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(h_r11.maksMenitIstirahat, $event) || (h_r11.maksMenitIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-secondary", h_r11.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hariLabels[h_r11.hari]);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", h_r11.polaHari);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", h_r11.jamMasuk);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c0))("disabled", h_r11.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", h_r11.jamKeluar);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(22, _c0))("disabled", h_r11.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", h_r11.mulaiIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c0))("disabled", h_r11.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", h_r11.selesaiIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c0))("disabled", h_r11.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", h_r11.maksMenitIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(25, _c0))("disabled", h_r11.polaHari === "LIBUR");
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 77)(2, "thead", 78)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Pola");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Jam Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Maks. Istirahat (menit)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, HariKerjaListComponent_Conditional_67_Conditional_28_For_20_Template, 19, 26, "tr", 79, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.modalData.hariList);
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_29_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 81);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_29_For_17_Template_select_ngModelChange_4_listener($event) {
      const h_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(h_r13.polaHari, $event) || (h_r13.polaHari = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 82);
    \u0275\u0275text(6, "Hari Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 83);
    \u0275\u0275text(8, "Libur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "div", 88)(11, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_29_For_17_Template_input_ngModelChange_11_listener($event) {
      const h_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(h_r13.totalJamKerjaDibutuhkan, $event) || (h_r13.totalJamKerjaDibutuhkan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 76);
    \u0275\u0275text(13, "jam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 88)(16, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Conditional_29_For_17_Template_input_ngModelChange_16_listener($event) {
      const h_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(h_r13.maksMenitIstirahat, $event) || (h_r13.maksMenitIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 76);
    \u0275\u0275text(18, "menit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const h_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-secondary", h_r13.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hariLabels[h_r13.hari]);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", h_r13.polaHari);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", h_r13.totalJamKerjaDibutuhkan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0))("disabled", h_r13.polaHari === "LIBUR");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", h_r13.maksMenitIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0))("disabled", h_r13.polaHari === "LIBUR");
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2, " Jam fleksibel: karyawan dapat masuk dan keluar kapan saja pada hari kerja yang ditentukan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "table", 77)(5, "thead", 78)(6, "tr")(7, "th");
    \u0275\u0275text(8, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Pola");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Total Jam Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Maks. Istirahat (menit)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, HariKerjaListComponent_Conditional_67_Conditional_29_For_17_Template, 19, 14, "tr", 79, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.modalData.hariList);
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 90);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function HariKerjaListComponent_Conditional_67_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 91);
    \u0275\u0275text(1, " Simpan ");
  }
}
function HariKerjaListComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "h5", 57);
    \u0275\u0275element(5, "i", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_67_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59);
    \u0275\u0275conditionalCreate(9, HariKerjaListComponent_Conditional_67_Conditional_9_Template, 2, 1, "div", 60);
    \u0275\u0275elementStart(10, "div", 61)(11, "div", 62)(12, "label", 63);
    \u0275\u0275text(13, "Nama Pola Kerja ");
    \u0275\u0275elementStart(14, "span", 64);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function HariKerjaListComponent_Conditional_67_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.namaPolaKerja, $event) || (ctx_r1.modalData.namaPolaKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, HariKerjaListComponent_Conditional_67_Conditional_17_Template, 7, 3, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 0)(19, "label", 67);
    \u0275\u0275text(20, "Jadwal Kerja ");
    \u0275\u0275elementStart(21, "span", 64);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 68)(24, "button", 69);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_67_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJadwalChange("JAM_TETAP"));
    });
    \u0275\u0275text(25, "Jam Tetap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 69);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_67_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJadwalChange("JAM_FLEKSIBEL"));
    });
    \u0275\u0275text(27, "Jam Fleksibel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, HariKerjaListComponent_Conditional_67_Conditional_28_Template, 21, 0, "div", 22)(29, HariKerjaListComponent_Conditional_67_Conditional_29_Template, 18, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 70)(31, "button", 71);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_67_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275element(32, "i", 72);
    \u0275\u0275text(33, " Tutup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 73);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_67_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePolaKerja());
    });
    \u0275\u0275conditionalCreate(35, HariKerjaListComponent_Conditional_67_Conditional_35_Template, 2, 0)(36, HariKerjaListComponent_Conditional_67_Conditional_36_Template, 2, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bx-plus", !ctx_r1.editingId())("bx-edit", ctx_r1.editingId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId() ? "Edit Pola Kerja" : "Tambah Pola Kerja", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modalError() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.namaPolaKerja);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c0));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalData.jenisJadwal === "JAM_TETAP" ? 17 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("btn-primary", ctx_r1.modalData.jenisJadwal === "JAM_TETAP")("btn-outline-secondary", ctx_r1.modalData.jenisJadwal !== "JAM_TETAP");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.modalData.jenisJadwal === "JAM_FLEKSIBEL")("btn-outline-secondary", ctx_r1.modalData.jenisJadwal !== "JAM_FLEKSIBEL");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modalData.jenisJadwal === "JAM_TETAP" ? 28 : 29);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 35 : 36);
  }
}
function HariKerjaListComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 92)(2, "div", 55)(3, "div", 56)(4, "h5", 57);
    \u0275\u0275element(5, "i", 93);
    \u0275\u0275text(6, "Pengaturan Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_68_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePengaturan());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59)(9, "div", 94)(10, "label", 95);
    \u0275\u0275text(11, " SPV dapat menambah Pola Kerja - Hari Kerja ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 96)(13, "div", 97)(14, "input", 98);
    \u0275\u0275listener("change", function HariKerjaListComponent_Conditional_68_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMenambah.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 99);
    \u0275\u0275text(16, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 97)(18, "input", 100);
    \u0275\u0275listener("change", function HariKerjaListComponent_Conditional_68_Template_input_change_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMenambah.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 101);
    \u0275\u0275text(20, "TIDAK");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 102)(22, "label", 95);
    \u0275\u0275text(23, " SPV dapat memperbarui Pola Kerja - Hari Kerja ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 96)(25, "div", 97)(26, "input", 103);
    \u0275\u0275listener("change", function HariKerjaListComponent_Conditional_68_Template_input_change_26_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMemperbarui.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 104);
    \u0275\u0275text(28, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 97)(30, "input", 105);
    \u0275\u0275listener("change", function HariKerjaListComponent_Conditional_68_Template_input_change_30_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMemperbarui.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 106);
    \u0275\u0275text(32, "TIDAK");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 70)(34, "button", 107);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_68_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePengaturan());
    });
    \u0275\u0275text(35, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 108);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_68_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.simpanPengaturan());
    });
    \u0275\u0275text(37, "Simpan");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("checked", ctx_r1.spvDapatMenambah());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.spvDapatMenambah());
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r1.spvDapatMemperbarui());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.spvDapatMemperbarui());
  }
}
function HariKerjaListComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 109)(2, "div", 55)(3, "div", 56)(4, "h5", 57);
    \u0275\u0275element(5, "i", 110);
    \u0275\u0275text(6, " Riwayat - ");
    \u0275\u0275elementStart(7, "span", 111);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 37);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_69_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 59)(11, "p", 112);
    \u0275\u0275text(12, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 70)(14, "button", 107);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_69_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275text(15, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.riwayatItem()) == null ? null : tmp_1_0.namaPolaKerja);
  }
}
function HariKerjaListComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 92)(2, "div", 55)(3, "div", 113)(4, "h5", 114);
    \u0275\u0275element(5, "i", 115);
    \u0275\u0275text(6, "Hapus Pola Kerja? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 116);
    \u0275\u0275text(8, " Data yang dihapus tidak dapat dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 117)(10, "button", 107);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_70_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 118);
    \u0275\u0275listener("click", function HariKerjaListComponent_Conditional_70_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
var HariKerjaListComponent = class _HariKerjaListComponent {
  constructor() {
    this.svc = inject(PolaKerjaService);
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
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.successMsg = signal("", ...ngDevMode ? [{ debugName: "successMsg" }] : (
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
    this.showSettingsModal = signal(false, ...ngDevMode ? [{ debugName: "showSettingsModal" }] : (
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
    this.defaultToleransi = signal(20, ...ngDevMode ? [{ debugName: "defaultToleransi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.spvDapatMenambah = signal(true, ...ngDevMode ? [{ debugName: "spvDapatMenambah" }] : (
      /* istanbul ignore next */
      []
    ));
    this.spvDapatMemperbarui = signal(true, ...ngDevMode ? [{ debugName: "spvDapatMemperbarui" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariLabels = {
      SENIN: "Senin",
      SELASA: "Selasa",
      RABU: "Rabu",
      KAMIS: "Kamis",
      JUMAT: "Jumat",
      SABTU: "Sabtu",
      MINGGU: "Minggu"
    };
    this.modalData = this.empty();
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      const data = this.list();
      if (!q)
        return data;
      return data.filter((p) => (p.namaPolaKerja || "").toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paged = computed(() => {
      const start = (this.page() - 1) * this.pageSize();
      return this.filtered().slice(start, start + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "paged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toastTimer = null;
  }
  ngOnInit() {
    this.load();
    const t = localStorage.getItem("pola_kerja_default_toleransi");
    if (t)
      this.defaultToleransi.set(+t);
    const a = localStorage.getItem("pola_kerja_spv_tambah");
    if (a !== null)
      this.spvDapatMenambah.set(a === "true");
    const u = localStorage.getItem("pola_kerja_spv_update");
    if (u !== null)
      this.spvDapatMemperbarui.set(u === "true");
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.svc.findAll("HARI_KERJA").subscribe({
      next: (data) => {
        this.list.set(data || []);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message || "Gagal memuat data.");
        this.loading.set(false);
      }
    });
  }
  // ── helpers ──────────────────────────────────────────────────
  countHari(p) {
    let kerja = 0, libur = 0;
    (p.hariList || []).forEach((h) => {
      if (h.polaHari === "LIBUR")
        libur++;
      else
        kerja++;
    });
    return { kerja, libur };
  }
  polaKerjaLabel(p) {
    const c = this.countHari(p);
    return `${c.kerja} Hari Kerja, ${c.libur} Jadwal Libur`;
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
  // ── Modal Tambah / Edit ──────────────────────────────────────
  openTambah() {
    this.editingId.set(null);
    this.modalError.set("");
    this.modalData = this.empty();
    this.modalData.toleransiKeterlambatan = this.defaultToleransi();
    this.showFormModal.set(true);
  }
  openEdit(p) {
    this.editingId.set(p.id);
    this.modalError.set("");
    this.modalData = {
      namaPolaKerja: p.namaPolaKerja,
      toleransiKeterlambatan: p.toleransiKeterlambatan,
      jenisJadwal: p.jenisJadwal,
      divisiIds: [...p.divisiIds || []],
      hariList: HARI_LIST.map((h) => {
        const found = (p.hariList || []).find((x) => x.hari === h);
        return found ? __spreadValues({}, found) : {
          hari: h,
          polaHari: "HARI_KERJA",
          jamMasuk: "",
          jamKeluar: "",
          mulaiIstirahat: "",
          selesaiIstirahat: "",
          maksMenitIstirahat: 60
        };
      })
    };
    this.showFormModal.set(true);
  }
  closeFormModal() {
    this.showFormModal.set(false);
  }
  onJadwalChange(j) {
    this.modalData.jenisJadwal = j;
  }
  savePolaKerja() {
    if (!this.modalData.namaPolaKerja?.trim()) {
      this.modalError.set("Nama pola kerja wajib diisi.");
      return;
    }
    this.saving.set(true);
    const req = __spreadProps(__spreadValues({}, this.modalData), { kategori: "HARI_KERJA" });
    const id = this.editingId();
    const obs = id ? this.svc.update(id, req) : this.svc.create(req);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? "Pola kerja berhasil diperbarui." : "Pola kerja berhasil ditambahkan.");
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message || "Gagal menyimpan pola kerja.");
      }
    });
  }
  // ── Hapus ────────────────────────────────────────────────────
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
    this.svc.delete(id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.showToast("Pola kerja berhasil dihapus.");
        this.load();
      },
      error: (err) => {
        this.error.set(err?.error?.message || "Gagal menghapus pola kerja.");
        this.confirmDeleteId.set(null);
      }
    });
  }
  // ── Riwayat (placeholder) ────────────────────────────────────
  openRiwayat(p) {
    this.riwayatItem.set(p);
    this.showRiwayatModal.set(true);
  }
  closeRiwayat() {
    this.showRiwayatModal.set(false);
    this.riwayatItem.set(null);
  }
  // ── Pengaturan ───────────────────────────────────────────────
  openPengaturan() {
    this.showSettingsModal.set(true);
  }
  closePengaturan() {
    this.showSettingsModal.set(false);
  }
  simpanPengaturan() {
    localStorage.setItem("pola_kerja_default_toleransi", String(this.defaultToleransi()));
    localStorage.setItem("pola_kerja_spv_tambah", String(this.spvDapatMenambah()));
    localStorage.setItem("pola_kerja_spv_update", String(this.spvDapatMemperbarui()));
    this.showSettingsModal.set(false);
    this.showToast("Pengaturan berhasil disimpan.");
  }
  showToast(msg, durationMs = 3e3) {
    this.successMsg.set(msg);
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.successMsg.set(""), durationMs);
  }
  empty() {
    return {
      namaPolaKerja: "",
      toleransiKeterlambatan: this.defaultToleransi() ?? 20,
      jenisJadwal: "JAM_TETAP",
      hariList: defaultHariList()
    };
  }
  static {
    this.\u0275fac = function HariKerjaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HariKerjaListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HariKerjaListComponent, selectors: [["app-hari-kerja-list"]], decls: 71, vars: 18, consts: [[1, "mb-3"], [1, "mb-2", "fw-bold"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0", "small"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], ["href", "javascript:;", 1, "text-primary", "text-decoration-none"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-muted"], [1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1080"], [1, "card", "shadow-sm"], [1, "card-body"], [1, "fw-bold", "mb-3"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "mb-3", "gap-2"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "input-group", 2, "max-width", "260px"], ["type", "text", "placeholder", "Cari", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary"], [1, "bx", "bx-search"], [1, "btn", "btn-primary", 3, "click"], [1, "bx", "bx-plus-circle", "me-1"], [1, "bx", "bx-cog", "me-1"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "table-light"], [1, "text-center"], [2, "width", "160px"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mt-3"], [1, "fw-semibold", "small"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1060"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "flex-grow-1"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "show", "align-items-center", "text-white", "bg-success", "border-0", "shadow"], [1, "d-flex"], [1, "toast-body"], [1, "bx", "bx-check-circle", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"], ["colspan", "4", 1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["colspan", "4", 1, "text-center", "py-4", "text-muted"], [1, "bx", "bx-folder-open", 2, "font-size", "2.2rem"], [1, "mt-1"], ["title", "Edit", 1, "btn", "btn-sm", "btn-light", "border", "me-1", 3, "click"], [1, "bx", "bx-edit"], ["title", "Riwayat", 1, "btn", "btn-sm", "btn-light", "border", "me-1", 3, "click"], [1, "bx", "bx-history"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bx", "bx-trash"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bx", "me-2"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "cth. Jam Kerja Normal", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-md-3"], [1, "form-label", "fw-semibold"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "px-4", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-x", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "input-group"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-group-text"], [1, "table", "table-bordered", "align-middle"], [1, "table-light", "text-center"], [3, "table-secondary"], [1, "fw-semibold"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "HARI_KERJA"], ["value", "LIBUR"], ["type", "time", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", "text-center", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "alert", "py-2", "px-3", "mb-3", 2, "background", "#f3f0ff", "border", "1px solid #c4b5fd", "color", "#5b21b6", "font-size", ".85rem"], [1, "bx", "bx-info-circle", "me-1"], [1, "input-group", "input-group-sm"], ["type", "number", "min", "0", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"], [1, "modal-dialog", "modal-dialog-centered"], [1, "bx", "bx-cog", "me-2"], [1, "mb-4"], [1, "form-label", "fw-semibold", "mb-2"], [1, "d-flex", "gap-4"], [1, "form-check"], ["type", "radio", "id", "spvTambahYa", "name", "spvTambah", 1, "form-check-input", 3, "change", "checked"], ["for", "spvTambahYa", 1, "form-check-label"], ["type", "radio", "id", "spvTambahTidak", "name", "spvTambah", 1, "form-check-input", 3, "change", "checked"], ["for", "spvTambahTidak", 1, "form-check-label"], [1, "mb-2"], ["type", "radio", "id", "spvUpdateYa", "name", "spvUpdate", 1, "form-check-input", 3, "change", "checked"], ["for", "spvUpdateYa", 1, "form-check-label"], ["type", "radio", "id", "spvUpdateTidak", "name", "spvUpdate", 1, "form-check-input", 3, "change", "checked"], ["for", "spvUpdateTidak", 1, "form-check-label"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "bx", "bx-history", "me-2"], [1, "text-primary"], [1, "text-muted", "text-center", "py-3", "mb-0"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted"], [1, "modal-footer", "border-0"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function HariKerjaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "h4", 1);
        \u0275\u0275text(3, "Hari Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "ol", 3)(6, "li", 4)(7, "a", 5);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 4)(10, "a", 6);
        \u0275\u0275text(11, "Pola Kerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 7);
        \u0275\u0275text(13, "Hari Kerja");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(14, HariKerjaListComponent_Conditional_14_Template, 5, 1, "div", 8);
        \u0275\u0275conditionalCreate(15, HariKerjaListComponent_Conditional_15_Template, 7, 1, "div", 9);
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "h5", 12);
        \u0275\u0275text(19, "Pola Kerja - Hari Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "input", 16);
        \u0275\u0275listener("ngModelChange", function HariKerjaListComponent_Template_input_ngModelChange_23_listener($event) {
          ctx.query.set($event);
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275element(25, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 19);
        \u0275\u0275listener("click", function HariKerjaListComponent_Template_button_click_26_listener() {
          return ctx.openTambah();
        });
        \u0275\u0275element(27, "i", 20);
        \u0275\u0275text(28, " Tambah Pola Kerja ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 19);
        \u0275\u0275listener("click", function HariKerjaListComponent_Template_button_click_29_listener() {
          return ctx.openPengaturan();
        });
        \u0275\u0275element(30, "i", 21);
        \u0275\u0275text(31, " Pengaturan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 22)(33, "table", 23)(34, "thead", 24)(35, "tr", 25)(36, "th");
        \u0275\u0275text(37, "Nama Pola Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Pola Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Toleransi Keterlambatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th", 26);
        \u0275\u0275text(43, "Aksi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "tbody");
        \u0275\u0275conditionalCreate(45, HariKerjaListComponent_Conditional_45_Template, 4, 0, "tr")(46, HariKerjaListComponent_Conditional_46_Template, 5, 0, "tr")(47, HariKerjaListComponent_Conditional_47_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 27)(49, "div", 28);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "nav")(52, "ul", 29)(53, "li", 30)(54, "a", 31);
        \u0275\u0275listener("click", function HariKerjaListComponent_Template_a_click_54_listener() {
          return ctx.goToPage(1);
        });
        \u0275\u0275text(55, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "li", 30)(57, "a", 31);
        \u0275\u0275listener("click", function HariKerjaListComponent_Template_a_click_57_listener() {
          return ctx.goToPage(ctx.page() - 1);
        });
        \u0275\u0275text(58, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(59, HariKerjaListComponent_For_60_Template, 3, 3, "li", 32, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(61, "li", 30)(62, "a", 31);
        \u0275\u0275listener("click", function HariKerjaListComponent_Template_a_click_62_listener() {
          return ctx.goToPage(ctx.page() + 1);
        });
        \u0275\u0275text(63, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "li", 30)(65, "a", 31);
        \u0275\u0275listener("click", function HariKerjaListComponent_Template_a_click_65_listener() {
          return ctx.goToPage(ctx.totalPages());
        });
        \u0275\u0275text(66, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275conditionalCreate(67, HariKerjaListComponent_Conditional_67_Template, 37, 21, "div", 33);
        \u0275\u0275conditionalCreate(68, HariKerjaListComponent_Conditional_68_Template, 38, 4, "div", 33);
        \u0275\u0275conditionalCreate(69, HariKerjaListComponent_Conditional_69_Template, 16, 1, "div", 33);
        \u0275\u0275conditionalCreate(70, HariKerjaListComponent_Conditional_70_Template, 14, 0, "div", 34);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg() ? 15 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.query());
        \u0275\u0275advance(22);
        \u0275\u0275conditional(ctx.loading() ? 45 : ctx.paged().length === 0 ? 46 : 47);
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
        \u0275\u0275conditional(ctx.showFormModal() ? 67 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSettingsModal() ? 68 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() && ctx.riwayatItem() ? 69 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 70 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HariKerjaListComponent, [{
    type: Component,
    args: [{ selector: "app-hari-kerja-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Page header -->\r
  <div class="mb-3">\r
    <h4 class="mb-2 fw-bold">Hari Kerja</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0 p-0 small">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><a href="javascript:;" class="text-primary text-decoration-none">Pola Kerja</a></li>\r
        <li class="breadcrumb-item active text-muted" aria-current="page">Hari Kerja</li>\r
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
           role="alert" aria-live="assertive" aria-atomic="true">\r
        <div class="d-flex">\r
          <div class="toast-body">\r
            <i class="bx bx-check-circle me-2"></i>{{ successMsg() }}\r
          </div>\r
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
      <h5 class="fw-bold mb-3">Pola Kerja - Hari Kerja</h5>\r
\r
      <!-- Toolbar -->\r
      <div class="d-flex flex-wrap align-items-center justify-content-between mb-3 gap-2">\r
        <div class="d-flex flex-wrap align-items-center gap-2">\r
          <div class="input-group" style="max-width:260px">\r
            <input type="text" class="form-control" placeholder="Cari"\r
                   [ngModel]="query()" (ngModelChange)="query.set($event); onSearchChange()" />\r
            <button class="btn btn-primary" type="button"><i class="bx bx-search"></i></button>\r
          </div>\r
          <button class="btn btn-primary" (click)="openTambah()">\r
            <i class="bx bx-plus-circle me-1"></i> Tambah Pola Kerja\r
          </button>\r
        </div>\r
        <button class="btn btn-primary" (click)="openPengaturan()">\r
          <i class="bx bx-cog me-1"></i> Pengaturan\r
        </button>\r
      </div>\r
\r
      <!-- Table -->\r
      <div class="table-responsive">\r
        <table class="table align-middle mb-0">\r
          <thead class="table-light">\r
            <tr class="text-center">\r
              <th>Nama Pola Kerja</th>\r
              <th>Pola Kerja</th>\r
              <th>Toleransi Keterlambatan</th>\r
              <th style="width:160px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (loading()) {\r
              <tr><td colspan="4" class="text-center py-4">\r
                <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
              </td></tr>\r
            } @else if (paged().length === 0) {\r
              <tr><td colspan="4" class="text-center py-4 text-muted">\r
                <i class="bx bx-folder-open" style="font-size:2.2rem"></i>\r
                <div class="mt-1">Belum ada data pola kerja.</div>\r
              </td></tr>\r
            } @else {\r
              @for (p of paged(); track p.id) {\r
                <tr>\r
                  <td>{{ p.namaPolaKerja }}</td>\r
                  <td>{{ polaKerjaLabel(p) }}</td>\r
                  <td>{{ p.toleransiKeterlambatan }} Menit</td>\r
                  <td class="text-center">\r
                    <button class="btn btn-sm btn-light border me-1" title="Edit" (click)="openEdit(p)">\r
                      <i class="bx bx-edit"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-light border me-1" title="Riwayat" (click)="openRiwayat(p)">\r
                      <i class="bx bx-history"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-danger" title="Hapus" (click)="askDelete(p.id)">\r
                      <i class="bx bx-trash"></i>\r
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
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tambah/Edit Pola Kerja \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-xl modal-dialog-scrollable">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx me-2" [class.bx-plus]="!editingId()" [class.bx-edit]="editingId()"></i>\r
              {{ editingId() ? 'Edit Pola Kerja' : 'Tambah Pola Kerja' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeFormModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2">{{ modalError() }}</div>\r
            }\r
\r
            <div class="row g-3 mb-4">\r
              <div class="col-md-6">\r
                <label class="form-label">Nama Pola Kerja <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" [(ngModel)]="modalData.namaPolaKerja"\r
                       [ngModelOptions]="{standalone: true}" placeholder="cth. Jam Kerja Normal" />\r
              </div>\r
              @if (modalData.jenisJadwal === 'JAM_TETAP') {\r
                <div class="col-md-3">\r
                  <label class="form-label">Toleransi Keterlambatan</label>\r
                  <div class="input-group">\r
                    <input type="number" class="form-control" min="0"\r
                           [(ngModel)]="modalData.toleransiKeterlambatan"\r
                           [ngModelOptions]="{standalone: true}" />\r
                    <span class="input-group-text">Menit</span>\r
                  </div>\r
                </div>\r
              }\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Jadwal Kerja <span class="text-danger">*</span></label>\r
              <div class="d-flex gap-2">\r
                <button type="button" class="btn btn-sm px-4"\r
                        [class.btn-primary]="modalData.jenisJadwal === 'JAM_TETAP'"\r
                        [class.btn-outline-secondary]="modalData.jenisJadwal !== 'JAM_TETAP'"\r
                        (click)="onJadwalChange('JAM_TETAP')">Jam Tetap</button>\r
                <button type="button" class="btn btn-sm px-4"\r
                        [class.btn-primary]="modalData.jenisJadwal === 'JAM_FLEKSIBEL'"\r
                        [class.btn-outline-secondary]="modalData.jenisJadwal !== 'JAM_FLEKSIBEL'"\r
                        (click)="onJadwalChange('JAM_FLEKSIBEL')">Jam Fleksibel</button>\r
              </div>\r
            </div>\r
\r
            @if (modalData.jenisJadwal === 'JAM_TETAP') {\r
              <div class="table-responsive">\r
                <table class="table table-bordered align-middle">\r
                  <thead class="table-light text-center">\r
                    <tr>\r
                      <th>Hari</th>\r
                      <th>Pola</th>\r
                      <th>Jam Masuk</th>\r
                      <th>Jam Keluar</th>\r
                      <th>Mulai Istirahat</th>\r
                      <th>Selesai Istirahat</th>\r
                      <th>Maks. Istirahat (menit)</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (h of modalData.hariList; track h.hari) {\r
                      <tr [class.table-secondary]="h.polaHari === 'LIBUR'">\r
                        <td class="fw-semibold">{{ hariLabels[h.hari] }}</td>\r
                        <td>\r
                          <select class="form-select form-select-sm" [(ngModel)]="h.polaHari"\r
                                  [ngModelOptions]="{standalone:true}">\r
                            <option value="HARI_KERJA">Hari Kerja</option>\r
                            <option value="LIBUR">Libur</option>\r
                          </select>\r
                        </td>\r
                        <td><input type="time" class="form-control form-control-sm"\r
                                   [(ngModel)]="h.jamMasuk" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" /></td>\r
                        <td><input type="time" class="form-control form-control-sm"\r
                                   [(ngModel)]="h.jamKeluar" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" /></td>\r
                        <td><input type="time" class="form-control form-control-sm"\r
                                   [(ngModel)]="h.mulaiIstirahat" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" /></td>\r
                        <td><input type="time" class="form-control form-control-sm"\r
                                   [(ngModel)]="h.selesaiIstirahat" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" /></td>\r
                        <td><input type="number" min="0" class="form-control form-control-sm text-center"\r
                                   [(ngModel)]="h.maksMenitIstirahat" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" /></td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            } @else {\r
              <div class="alert py-2 px-3 mb-3"\r
                   style="background:#f3f0ff;border:1px solid #c4b5fd;color:#5b21b6;font-size:.85rem">\r
                <i class="bx bx-info-circle me-1"></i>\r
                Jam fleksibel: karyawan dapat masuk dan keluar kapan saja pada hari kerja yang ditentukan.\r
              </div>\r
              <div class="table-responsive">\r
                <table class="table table-bordered align-middle">\r
                  <thead class="table-light text-center">\r
                    <tr>\r
                      <th>Hari</th>\r
                      <th>Pola</th>\r
                      <th>Total Jam Kerja</th>\r
                      <th>Maks. Istirahat (menit)</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (h of modalData.hariList; track h.hari) {\r
                      <tr [class.table-secondary]="h.polaHari === 'LIBUR'">\r
                        <td class="fw-semibold">{{ hariLabels[h.hari] }}</td>\r
                        <td>\r
                          <select class="form-select form-select-sm" [(ngModel)]="h.polaHari"\r
                                  [ngModelOptions]="{standalone:true}">\r
                            <option value="HARI_KERJA">Hari Kerja</option>\r
                            <option value="LIBUR">Libur</option>\r
                          </select>\r
                        </td>\r
                        <td>\r
                          <div class="input-group input-group-sm">\r
                            <input type="number" min="0" class="form-control text-center"\r
                                   [(ngModel)]="h.totalJamKerjaDibutuhkan" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" />\r
                            <span class="input-group-text">jam</span>\r
                          </div>\r
                        </td>\r
                        <td>\r
                          <div class="input-group input-group-sm">\r
                            <input type="number" min="0" class="form-control text-center"\r
                                   [(ngModel)]="h.maksMenitIstirahat" [ngModelOptions]="{standalone:true}"\r
                                   [disabled]="h.polaHari === 'LIBUR'" />\r
                            <span class="input-group-text">menit</span>\r
                          </div>\r
                        </td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-secondary btn-sm px-4" (click)="closeFormModal()">\r
              <i class="bx bx-x me-1"></i> Tutup\r
            </button>\r
            <button type="button" class="btn btn-primary btn-sm px-4"\r
                    [disabled]="saving()" (click)="savePolaKerja()">\r
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
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Pengaturan \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showSettingsModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-cog me-2"></i>Pengaturan Pola Kerja</h5>\r
            <button type="button" class="btn-close" (click)="closePengaturan()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <!-- SPV dapat menambah -->\r
            <div class="mb-4">\r
              <label class="form-label fw-semibold mb-2">\r
                SPV dapat menambah Pola Kerja - Hari Kerja\r
              </label>\r
              <div class="d-flex gap-4">\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvTambahYa"\r
                         name="spvTambah"\r
                         [checked]="spvDapatMenambah()"\r
                         (change)="spvDapatMenambah.set(true)" />\r
                  <label class="form-check-label" for="spvTambahYa">YA</label>\r
                </div>\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvTambahTidak"\r
                         name="spvTambah"\r
                         [checked]="!spvDapatMenambah()"\r
                         (change)="spvDapatMenambah.set(false)" />\r
                  <label class="form-check-label" for="spvTambahTidak">TIDAK</label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- SPV dapat memperbarui -->\r
            <div class="mb-2">\r
              <label class="form-label fw-semibold mb-2">\r
                SPV dapat memperbarui Pola Kerja - Hari Kerja\r
              </label>\r
              <div class="d-flex gap-4">\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvUpdateYa"\r
                         name="spvUpdate"\r
                         [checked]="spvDapatMemperbarui()"\r
                         (change)="spvDapatMemperbarui.set(true)" />\r
                  <label class="form-check-label" for="spvUpdateYa">YA</label>\r
                </div>\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvUpdateTidak"\r
                         name="spvUpdate"\r
                         [checked]="!spvDapatMemperbarui()"\r
                         (change)="spvDapatMemperbarui.set(false)" />\r
                  <label class="form-check-label" for="spvUpdateTidak">TIDAK</label>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-secondary btn-sm" (click)="closePengaturan()">Batal</button>\r
            <button class="btn btn-primary btn-sm" (click)="simpanPengaturan()">Simpan</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Riwayat (placeholder) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showRiwayatModal() && riwayatItem()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx bx-history me-2"></i>\r
              Riwayat - <span class="text-primary">{{ riwayatItem()?.namaPolaKerja }}</span>\r
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
              <i class="bx bx-trash me-2"></i>Hapus Pola Kerja?\r
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
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HariKerjaListComponent, { className: "HariKerjaListComponent", filePath: "src/app/features/pola-kerja/hari-kerja/hari-kerja-list.component.ts", lineNumber: 22 });
})();
export {
  HariKerjaListComponent
};
//# sourceMappingURL=chunk-JMLTACNI.js.map
