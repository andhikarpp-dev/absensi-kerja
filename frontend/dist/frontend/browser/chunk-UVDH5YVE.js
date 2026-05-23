import {
  LokasiKehadiranService
} from "./chunk-5X7IVESH.js";
import {
  PolaKerjaService
} from "./chunk-H2DAYQGM.js";
import {
  AbsensiService
} from "./chunk-ZRLBCAEX.js";
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
  CheckboxControlValueAccessor,
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
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/kehadiran/harian/ekspor-excel-modal.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.key;
function EksporExcelModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function EksporExcelModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function EksporExcelModalComponent_Conditional_16_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275property("value", d_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.namaDivisi);
  }
}
function EksporExcelModalComponent_Conditional_16_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    \u0275\u0275property("value", l_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r4.namaLokasi);
  }
}
function EksporExcelModalComponent_Conditional_16_Conditional_26_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", k_r6.nip, ")");
  }
}
function EksporExcelModalComponent_Conditional_16_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function EksporExcelModalComponent_Conditional_16_Conditional_26_For_2_Template_div_click_0_listener() {
      const k_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.pilihKaryawan(k_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, EksporExcelModalComponent_Conditional_16_Conditional_26_For_2_Conditional_2_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r6.namaLengkap, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r6.nip ? 2 : -1);
  }
}
function EksporExcelModalComponent_Conditional_16_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, EksporExcelModalComponent_Conditional_16_Conditional_26_For_2_Template, 3, 2, "div", 27, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.karyawanFiltered());
  }
}
function EksporExcelModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2, "Tanggal ");
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tanggal, $event) || (ctx_r0.tanggal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "label", 13);
    \u0275\u0275text(8, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_16_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.divisiId, $event) || (ctx_r0.divisiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 24);
    \u0275\u0275text(11, "-- Divisi --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, EksporExcelModalComponent_Conditional_16_For_13_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12)(15, "label", 13);
    \u0275\u0275text(16, "Lokasi Kehadiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_16_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.lokasiId, $event) || (ctx_r0.lokasiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 24);
    \u0275\u0275text(19, "Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, EksporExcelModalComponent_Conditional_16_For_21_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "label", 13);
    \u0275\u0275text(24, "Spesifik Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 25);
    \u0275\u0275listener("ngModelChange", function EksporExcelModalComponent_Conditional_16_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKunciChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, EksporExcelModalComponent_Conditional_16_Conditional_26_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tanggal);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.divisiId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.divisiList());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lokasiId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.lokasiList());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.karyawanKunci);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.karyawanKunci && ctx_r0.karyawanFiltered().length > 0 ? 26 : -1);
  }
}
function EksporExcelModalComponent_Conditional_17_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    \u0275\u0275property("value", d_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r8.namaDivisi);
  }
}
function EksporExcelModalComponent_Conditional_17_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    \u0275\u0275property("value", l_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r9.namaLokasi);
  }
}
function EksporExcelModalComponent_Conditional_17_Conditional_30_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", k_r11.nip, ")");
  }
}
function EksporExcelModalComponent_Conditional_17_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function EksporExcelModalComponent_Conditional_17_Conditional_30_For_2_Template_div_click_0_listener() {
      const k_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.pilihKaryawan(k_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, EksporExcelModalComponent_Conditional_17_Conditional_30_For_2_Conditional_2_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r11.namaLengkap, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r11.nip ? 2 : -1);
  }
}
function EksporExcelModalComponent_Conditional_17_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, EksporExcelModalComponent_Conditional_17_Conditional_30_For_2_Template, 3, 2, "div", 27, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.karyawanFiltered());
  }
}
function EksporExcelModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2, "Tanggal ");
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 30)(6, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tanggalDari, $event) || (ctx_r0.tanggalDari = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_17_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.tanggalSampai, $event) || (ctx_r0.tanggalSampai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "label", 13);
    \u0275\u0275text(12, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_17_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.divisiId, $event) || (ctx_r0.divisiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 24);
    \u0275\u0275text(15, "-- Divisi --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, EksporExcelModalComponent_Conditional_17_For_17_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "label", 13);
    \u0275\u0275text(20, "Lokasi Kehadiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_17_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.lokasiId, $event) || (ctx_r0.lokasiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 24);
    \u0275\u0275text(23, "Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, EksporExcelModalComponent_Conditional_17_For_25_Template, 2, 2, "option", 15, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "label", 13);
    \u0275\u0275text(28, "Spesifik Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 25);
    \u0275\u0275listener("ngModelChange", function EksporExcelModalComponent_Conditional_17_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKunciChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, EksporExcelModalComponent_Conditional_17_Conditional_30_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 12)(32, "label", 13);
    \u0275\u0275text(33, "Kirimkan File ke Email ");
    \u0275\u0275elementStart(34, "span", 22);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_17_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.emailTujuan, $event) || (ctx_r0.emailTujuan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 33);
    \u0275\u0275text(38, "Pisah email dengan koma jika lebih dari satu.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tanggalDari);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tanggalSampai);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.divisiId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.divisiList());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lokasiId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.lokasiList());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.karyawanKunci);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.karyawanKunci && ctx_r0.karyawanFiltered().length > 0 ? 30 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailTujuan);
  }
}
function EksporExcelModalComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275property("value", f_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r12.label);
  }
}
function EksporExcelModalComponent_Conditional_24_For_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Conditional_24_For_4_For_9_Template_input_ngModelChange_1_listener($event) {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(item_r16.checked, $event) || (item_r16.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", "col-" + item_r16.key);
    \u0275\u0275twoWayProperty("ngModel", item_r16.checked);
    \u0275\u0275advance();
    \u0275\u0275property("for", "col-" + item_r16.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r16.label);
  }
}
function EksporExcelModalComponent_Conditional_24_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("change", function EksporExcelModalComponent_Conditional_24_For_4_Template_input_change_2_listener($event) {
      const g_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleGroup(g_r14, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6, "Semua");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275repeaterCreate(8, EksporExcelModalComponent_Conditional_24_For_4_For_9_Template, 4, 4, "div", 40, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "grp-" + g_r14.key)("checked", ctx_r0.isGroupAllChecked(g_r14))("indeterminate", ctx_r0.isGroupIndeterminate(g_r14));
    \u0275\u0275advance();
    \u0275\u0275property("for", "grp-" + g_r14.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r14.label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(g_r14.items);
  }
}
function EksporExcelModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 13);
    \u0275\u0275text(2, "Pilih Kolom");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, EksporExcelModalComponent_Conditional_24_For_4_Template, 10, 5, "div", 34, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.kolomGroups);
  }
}
function EksporExcelModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 43);
    \u0275\u0275text(1, "Memproses... ");
  }
}
function EksporExcelModalComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 44);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeTab() === "rentang-waktu" ? "Kirim ke Email" : "Ekspor Excel", " ");
  }
}
var EksporExcelModalComponent = class _EksporExcelModalComponent {
  constructor() {
    this.tanggalAwal = "";
    this.closed = output();
    this.divisiSvc = inject(DivisiService);
    this.lokasiSvc = inject(LokasiKehadiranService);
    this.karyawanSvc = inject(KaryawanService);
    this.absensiSvc = inject(AbsensiService);
    this.activeTab = signal("tanggal-tertentu", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tanggal = "";
    this.tanggalDari = "";
    this.tanggalSampai = "";
    this.divisiId = "";
    this.lokasiId = "";
    this.karyawanKunci = "";
    this.emailTujuan = "";
    this.formatList = [
      { value: "LENGKAP", label: "Lengkap" },
      { value: "HANYA_MASUK_KELUAR", label: "Hanya Presensi masuk dan keluar" },
      { value: "MASUK_TERLAMBAT_KELUAR", label: "Hanya presensi masuk, terlambat dan keluar" },
      { value: "MASUK_TERLAMBAT_KELUAR_LEMBUR", label: "Hanya presensi masuk, terlambat, keluar dan lembur" },
      { value: "HANYA_CATATAN", label: "Hanya catatan" },
      { value: "REKAP_PRESENSI", label: "Rekap Presensi" },
      { value: "REKAP_KEHADIRAN", label: "Rekap kehadiran" },
      { value: "PILIH_KOLOM", label: "Pilih Kolom" }
    ];
    this.selectedFormat = "LENGKAP";
    this.kolomGroups = this.buildKolomGroups();
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lokasiList = signal([], ...ngDevMode ? [{ debugName: "lokasiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanFiltered = signal([], ...ngDevMode ? [{ debugName: "karyawanFiltered" }] : (
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
    this.success = signal("", ...ngDevMode ? [{ debugName: "success" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKaryawanId = void 0;
  }
  setTab(t) {
    this.activeTab.set(t);
  }
  get isPilihKolom() {
    return this.selectedFormat === "PILIH_KOLOM";
  }
  ngOnInit() {
    const today = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.tanggal = this.tanggalAwal || today;
    this.tanggalSampai = today;
    const sebulanLalu = /* @__PURE__ */ new Date();
    sebulanLalu.setMonth(sebulanLalu.getMonth() - 1);
    this.tanggalDari = sebulanLalu.toISOString().substring(0, 10);
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.lokasiSvc.findAll().subscribe((l) => this.lokasiList.set(l));
    this.karyawanSvc.findAll().subscribe((k) => {
      this.karyawanList.set(k);
      this.karyawanFiltered.set(k);
    });
  }
  onKunciChange(val) {
    this.karyawanKunci = val;
    this.selectedKaryawanId = void 0;
    if (!val.trim()) {
      this.karyawanFiltered.set(this.karyawanList());
      return;
    }
    const kw = val.toLowerCase();
    this.karyawanFiltered.set(this.karyawanList().filter((k) => k.namaLengkap.toLowerCase().includes(kw) || k.nip?.toLowerCase().includes(kw)));
  }
  pilihKaryawan(k) {
    this.karyawanKunci = k.namaLengkap;
    this.selectedKaryawanId = k.id;
    this.karyawanFiltered.set([]);
  }
  // ── Kolom: toggle semua dalam group ───────────────────
  toggleGroup(g, checked) {
    g.items.forEach((i) => i.checked = checked);
  }
  isGroupAllChecked(g) {
    return g.items.every((i) => i.checked);
  }
  isGroupIndeterminate(g) {
    const c = g.items.filter((i) => i.checked).length;
    return c > 0 && c < g.items.length;
  }
  // ── Ekspor ─────────────────────────────────────────────
  ekspor() {
    this.error.set("");
    this.success.set("");
    if (this.activeTab() === "tanggal-tertentu" && !this.tanggal) {
      this.error.set("Tanggal wajib diisi.");
      return;
    }
    if (this.activeTab() === "rentang-waktu") {
      if (!this.tanggalDari || !this.tanggalSampai) {
        this.error.set("Tanggal dari dan sampai wajib diisi.");
        return;
      }
      if (!this.emailTujuan.trim()) {
        this.error.set("Email tujuan wajib diisi untuk ekspor rentang waktu.");
        return;
      }
    }
    const selectedKolom = this.isPilihKolom ? this.kolomGroups.flatMap((g) => g.items.filter((i) => i.checked).map((i) => i.key)) : [];
    if (this.isPilihKolom && selectedKolom.length === 0) {
      this.error.set("Pilih minimal satu kolom untuk diekspor.");
      return;
    }
    this.loading.set(true);
    const formatParam = this.isPilihKolom ? "LENGKAP" : this.selectedFormat;
    const obs$ = this.activeTab() === "tanggal-tertentu" ? this.absensiSvc.eksporHarian({
      tanggal: this.tanggal,
      divisiId: this.divisiId || void 0,
      lokasiId: this.lokasiId || void 0,
      karyawanId: this.selectedKaryawanId,
      format: formatParam,
      kolom: selectedKolom.length ? selectedKolom : void 0
    }) : this.absensiSvc.eksporRentang({
      dari: this.tanggalDari,
      sampai: this.tanggalSampai,
      divisiId: this.divisiId || void 0,
      karyawanId: this.selectedKaryawanId,
      format: formatParam,
      kolom: selectedKolom.length ? selectedKolom : void 0
    });
    obs$.subscribe({
      next: (blob) => {
        this.loading.set(false);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        const nama = this.activeTab() === "tanggal-tertentu" ? `kehadiran-${this.tanggal}.xlsx` : `kehadiran-${this.tanggalDari}-sd-${this.tanggalSampai}.xlsx`;
        a.href = url;
        a.download = nama;
        a.click();
        window.URL.revokeObjectURL(url);
        this.success.set(`File ${nama} berhasil diunduh.`);
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? "Gagal mengekspor data. Silakan coba lagi.");
      }
    });
  }
  tutup() {
    this.closed.emit();
  }
  // ── Builder kolom ──────────────────────────────────────
  buildKolomGroups() {
    const mk = (label, key) => ({ label, key, checked: false });
    const groups = [
      {
        label: "Karyawan",
        key: "karyawan",
        items: [
          mk("Nama Karyawan", "namaKaryawan"),
          mk("Nomor Induk Karyawan", "nip"),
          mk("Jenis Identitas Karyawan", "jenisIdentitas"),
          mk("Nomor Identitas Karyawan", "nomorIdentitas"),
          mk("Divisi", "divisi"),
          mk("Jabatan", "jabatan"),
          mk("Hari Presensi", "hariPresensi"),
          mk("Tanggal Presensi", "tanggalPresensi"),
          mk("Jadwal", "jadwal"),
          mk("Rekap", "rekap")
        ]
      },
      {
        label: "Presensi Masuk",
        key: "masuk",
        items: [
          mk("Masuk Selfie", "masukSelfie"),
          mk("Masuk Jam", "masukJam"),
          mk("Terlambat Menit", "terlambatMenit"),
          mk("Denda", "denda"),
          mk("Masuk Nama Spot", "masukNamaSpot"),
          mk("Masuk Latitude", "masukLat"),
          mk("Masuk Longitude", "masukLng"),
          mk("Masuk Catatan", "masukCatatan"),
          mk("Masuk Supervisi", "masukSupervisi")
        ]
      },
      {
        label: "Presensi Keluar",
        key: "keluar",
        items: [
          mk("Keluar Selfie", "keluarSelfie"),
          mk("Keluar Jam", "keluarJam"),
          mk("Keluar Nama Spot", "keluarNamaSpot"),
          mk("Keluar Latitude", "keluarLat"),
          mk("Keluar Longitude", "keluarLng"),
          mk("Keluar Catatan", "keluarCatatan"),
          mk("Keluar Supervisi", "keluarSupervisi")
        ]
      },
      {
        label: "Istirahat",
        key: "istirahat",
        items: [
          mk("Istirahat Jam", "istirahatJam"),
          mk("Istirahat Nama Spot", "istirahatNamaSpot"),
          mk("Istirahat Latitude", "istirahatLat"),
          mk("Istirahat Longitude", "istirahatLng")
        ]
      },
      {
        label: "Selesai Istirahat",
        key: "selesaiIstirahat",
        items: [
          mk("Selesai Istirahat Jam", "selesaiIstirahatJam"),
          mk("Selesai Istirahat Nama Spot", "selesaiIstirahatNamaSpot"),
          mk("Selesai Istirahat Latitude", "selesaiIstirahatLat"),
          mk("Selesai Istirahat Longitude", "selesaiIstirahatLng")
        ]
      },
      {
        label: "Lembur",
        key: "lembur",
        items: [
          mk("Lembur Selfie", "lemburSelfie"),
          mk("Lembur Jam", "lemburJam"),
          mk("Lembur Nama Spot", "lemburNamaSpot"),
          mk("Lembur Latitude", "lemburLat"),
          mk("Lembur Longitude", "lemburLng"),
          mk("Lembur Catatan", "lemburCatatan"),
          mk("Lembur Supervisi", "lemburSupervisi")
        ]
      },
      {
        label: "Selesai Lembur",
        key: "selesaiLembur",
        items: [
          mk("Selesai Lembur Selfie", "selesaiLemburSelfie"),
          mk("Selesai Lembur Jam", "selesaiLemburJam"),
          mk("Selesai Lembur Nama Spot", "selesaiLemburNamaSpot"),
          mk("Selesai Lembur Latitude", "selesaiLemburLat"),
          mk("Selesai Lembur Longitude", "selesaiLemburLng"),
          mk("Selesai Lembur Catatan", "selesaiLemburCatatan"),
          mk("Selesai Lembur Supervisi", "selesaiLemburSupervisi")
        ]
      },
      {
        label: "Ringkasan",
        key: "ringkasan",
        items: [
          mk("Total Jam Kerja", "totalJamKerja"),
          mk("Total Jam Istirahat", "totalJamIstirahat"),
          mk("Total Jam Lembur", "totalJamLembur")
        ]
      }
    ];
    return groups.map((g) => __spreadProps(__spreadValues({}, g), {
      get allChecked() {
        return g.items.every((i) => i.checked);
      }
    }));
  }
  static {
    this.\u0275fac = function EksporExcelModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EksporExcelModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EksporExcelModalComponent, selectors: [["app-ekspor-excel-modal"]], inputs: { tanggalAwal: "tanggalAwal" }, outputs: { closed: "closed" }, decls: 31, vars: 21, consts: [["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055", 3, "click"], [1, "modal-dialog", "modal-dialog-scrollable", "modal-lg", "modal-dialog-centered", 3, "click"], [1, "modal-content", "border-0", "shadow-lg"], [1, "modal-header", "border-bottom", "px-4", "py-3"], [1, "modal-title", "fw-bold", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-file-export", "text-success", "fs-5"], ["type", "button", 1, "btn-close", 3, "click"], [1, "px-4", "pt-3", "border-bottom", "d-flex", "gap-0"], [1, "btn", "btn-sm", "px-4", "pb-2", "border-0", "border-bottom", "rounded-0", "fw-semibold", 2, "border-bottom-width", "2px!important", 3, "click"], [1, "modal-body", "px-4", "py-4", 2, "max-height", "70vh", "overflow-y", "auto"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "alert", "alert-success", "py-2", "mb-3"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "mb-2"], [1, "modal-footer", "border-top", "px-4", "py-3", "gap-2"], [1, "btn", "btn-secondary", "px-4", 3, "click", "disabled"], [1, "btn", "btn-success", "px-5", 3, "click", "disabled"], [1, "bx", "bx-error-circle", "me-1"], [1, "bx", "bx-check-circle", "me-1"], [1, "text-danger"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "text", "placeholder", "Tulis kata kunci...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "border", "rounded", "mt-1", 2, "max-height", "140px", "overflow-y", "auto", "background", "#fff"], [1, "px-3", "py-2", 2, "cursor", "pointer", "font-size", ".85rem", "border-bottom", "1px solid #f3f4f6"], [1, "px-3", "py-2", 2, "cursor", "pointer", "font-size", ".85rem", "border-bottom", "1px solid #f3f4f6", 3, "click"], [1, "text-muted", "ms-1"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted"], ["type", "email", "placeholder", "contoh@email.com", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text"], [1, "border", "rounded", "mb-2", 2, "overflow", "hidden"], [1, "d-flex", "align-items-center", "px-3", "py-2", 2, "background", "#f8f9fa", "border-bottom", "1px solid #e9ecef"], ["type", "checkbox", 1, "form-check-input", "me-2", 3, "change", "id", "checked", "indeterminate"], [1, "form-check-label", "fw-semibold", "mb-0", 2, "font-size", ".87rem", "cursor", "pointer", 3, "for"], [1, "ms-2", "badge", "bg-secondary", 2, "font-size", ".7rem"], [1, "px-3", "py-2", "d-flex", "flex-wrap", "gap-2"], [1, "form-check", "form-check-inline", "mb-0", 2, "min-width", "180px"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel"], [1, "form-check-label", 2, "font-size", ".82rem", 3, "for"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bx", "bx-download", "me-2"]], template: function EksporExcelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_div_click_0_listener() {
          return ctx.tutup();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h6", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Ekspor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_button_click_7_listener() {
          return ctx.tutup();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_button_click_9_listener() {
          return ctx.setTab("tanggal-tertentu");
        });
        \u0275\u0275text(10, " Tanggal Tertentu ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_button_click_11_listener() {
          return ctx.setTab("rentang-waktu");
        });
        \u0275\u0275text(12, " Rentang Waktu ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275conditionalCreate(14, EksporExcelModalComponent_Conditional_14_Template, 3, 1, "div", 10);
        \u0275\u0275conditionalCreate(15, EksporExcelModalComponent_Conditional_15_Template, 3, 1, "div", 11);
        \u0275\u0275conditionalCreate(16, EksporExcelModalComponent_Conditional_16_Template, 27, 5);
        \u0275\u0275conditionalCreate(17, EksporExcelModalComponent_Conditional_17_Template, 39, 7);
        \u0275\u0275elementStart(18, "div", 12)(19, "label", 13);
        \u0275\u0275text(20, "Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function EksporExcelModalComponent_Template_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedFormat, $event) || (ctx.selectedFormat = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(22, EksporExcelModalComponent_For_23_Template, 2, 2, "option", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(24, EksporExcelModalComponent_Conditional_24_Template, 5, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 17)(26, "button", 18);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_button_click_26_listener() {
          return ctx.tutup();
        });
        \u0275\u0275text(27, " Batal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 19);
        \u0275\u0275listener("click", function EksporExcelModalComponent_Template_button_click_28_listener() {
          return ctx.ekspor();
        });
        \u0275\u0275conditionalCreate(29, EksporExcelModalComponent_Conditional_29_Template, 2, 0)(30, EksporExcelModalComponent_Conditional_30_Template, 2, 1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275classProp("text-primary", ctx.activeTab() === "tanggal-tertentu")("border-primary", ctx.activeTab() === "tanggal-tertentu")("text-secondary", ctx.activeTab() !== "tanggal-tertentu");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-primary", ctx.activeTab() === "rentang-waktu")("border-primary", ctx.activeTab() === "rentang-waktu")("text-secondary", ctx.activeTab() !== "rentang-waktu");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.success() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "tanggal-tertentu" ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "rentang-waktu" ? 17 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedFormat);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.formatList);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isPilihKolom ? 24 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 29 : 30);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EksporExcelModalComponent, [{
    type: Component,
    args: [{ selector: "app-ekspor-excel-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055" (click)="tutup()">\r
  <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered" (click)="$event.stopPropagation()">\r
    <div class="modal-content border-0 shadow-lg">\r
\r
      <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="modal-header border-bottom px-4 py-3">\r
        <h6 class="modal-title fw-bold d-flex align-items-center gap-2">\r
          <i class="bx bx-file-export text-success fs-5"></i> Ekspor Excel\r
        </h6>\r
        <button type="button" class="btn-close" (click)="tutup()"></button>\r
      </div>\r
\r
      <!-- \u2500\u2500 Tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="px-4 pt-3 border-bottom d-flex gap-0">\r
        <button class="btn btn-sm px-4 pb-2 border-0 border-bottom rounded-0 fw-semibold"\r
                style="border-bottom-width:2px!important"\r
                [class.text-primary]="activeTab() === 'tanggal-tertentu'"\r
                [class.border-primary]="activeTab() === 'tanggal-tertentu'"\r
                [class.text-secondary]="activeTab() !== 'tanggal-tertentu'"\r
                (click)="setTab('tanggal-tertentu')">\r
          Tanggal Tertentu\r
        </button>\r
        <button class="btn btn-sm px-4 pb-2 border-0 border-bottom rounded-0 fw-semibold"\r
                style="border-bottom-width:2px!important"\r
                [class.text-primary]="activeTab() === 'rentang-waktu'"\r
                [class.border-primary]="activeTab() === 'rentang-waktu'"\r
                [class.text-secondary]="activeTab() !== 'rentang-waktu'"\r
                (click)="setTab('rentang-waktu')">\r
          Rentang Waktu\r
        </button>\r
      </div>\r
\r
      <!-- \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="modal-body px-4 py-4" style="max-height:70vh;overflow-y:auto">\r
\r
        <!-- Alert error / sukses -->\r
        @if (error()) {\r
          <div class="alert alert-danger py-2 mb-3"><i class="bx bx-error-circle me-1"></i>{{ error() }}</div>\r
        }\r
        @if (success()) {\r
          <div class="alert alert-success py-2 mb-3"><i class="bx bx-check-circle me-1"></i>{{ success() }}</div>\r
        }\r
\r
        <!-- \u2550\u2550\u2550\u2550 TAB: Tanggal Tertentu \u2550\u2550\u2550\u2550 -->\r
        @if (activeTab() === 'tanggal-tertentu') {\r
\r
          <!-- Tanggal -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Tanggal <span class="text-danger">*</span></label>\r
            <input type="date" class="form-control" [(ngModel)]="tanggal" />\r
          </div>\r
\r
          <!-- Divisi -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Divisi</label>\r
            <select class="form-select" [(ngModel)]="divisiId">\r
              <option value="">-- Divisi --</option>\r
              @for (d of divisiList(); track d.id) {\r
                <option [value]="d.id">{{ d.namaDivisi }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Lokasi Kehadiran -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Lokasi Kehadiran</label>\r
            <select class="form-select" [(ngModel)]="lokasiId">\r
              <option value="">Lokasi</option>\r
              @for (l of lokasiList(); track l.id) {\r
                <option [value]="l.id">{{ l.namaLokasi }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Spesifik Karyawan -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Spesifik Karyawan</label>\r
            <input type="text" class="form-control" placeholder="Tulis kata kunci..."\r
                   [ngModel]="karyawanKunci"\r
                   (ngModelChange)="onKunciChange($event)" />\r
            @if (karyawanKunci && karyawanFiltered().length > 0) {\r
              <div class="border rounded mt-1" style="max-height:140px;overflow-y:auto;background:#fff">\r
                @for (k of karyawanFiltered(); track k.id) {\r
                  <div class="px-3 py-2" style="cursor:pointer;font-size:.85rem;border-bottom:1px solid #f3f4f6"\r
                       (click)="pilihKaryawan(k)">\r
                    {{ k.namaLengkap }}\r
                    @if (k.nip) { <span class="text-muted ms-1">({{ k.nip }})</span> }\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
        }\r
\r
        <!-- \u2550\u2550\u2550\u2550 TAB: Rentang Waktu \u2550\u2550\u2550\u2550 -->\r
        @if (activeTab() === 'rentang-waktu') {\r
\r
          <!-- Rentang Tanggal -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Tanggal <span class="text-danger">*</span></label>\r
            <div class="d-flex align-items-center gap-2">\r
              <input type="date" class="form-control" [(ngModel)]="tanggalDari" />\r
              <span class="text-muted">-</span>\r
              <input type="date" class="form-control" [(ngModel)]="tanggalSampai" />\r
            </div>\r
          </div>\r
\r
          <!-- Divisi -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Divisi</label>\r
            <select class="form-select" [(ngModel)]="divisiId">\r
              <option value="">-- Divisi --</option>\r
              @for (d of divisiList(); track d.id) {\r
                <option [value]="d.id">{{ d.namaDivisi }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Lokasi Kehadiran -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Lokasi Kehadiran</label>\r
            <select class="form-select" [(ngModel)]="lokasiId">\r
              <option value="">Lokasi</option>\r
              @for (l of lokasiList(); track l.id) {\r
                <option [value]="l.id">{{ l.namaLokasi }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Spesifik Karyawan -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Spesifik Karyawan</label>\r
            <input type="text" class="form-control" placeholder="Tulis kata kunci..."\r
                   [ngModel]="karyawanKunci"\r
                   (ngModelChange)="onKunciChange($event)" />\r
            @if (karyawanKunci && karyawanFiltered().length > 0) {\r
              <div class="border rounded mt-1" style="max-height:140px;overflow-y:auto;background:#fff">\r
                @for (k of karyawanFiltered(); track k.id) {\r
                  <div class="px-3 py-2" style="cursor:pointer;font-size:.85rem;border-bottom:1px solid #f3f4f6"\r
                       (click)="pilihKaryawan(k)">\r
                    {{ k.namaLengkap }}\r
                    @if (k.nip) { <span class="text-muted ms-1">({{ k.nip }})</span> }\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
\r
          <!-- Email tujuan -->\r
          <div class="mb-3">\r
            <label class="form-label fw-semibold">Kirimkan File ke Email <span class="text-danger">*</span></label>\r
            <input type="email" class="form-control" [(ngModel)]="emailTujuan"\r
                   placeholder="contoh@email.com" />\r
            <div class="form-text">Pisah email dengan koma jika lebih dari satu.</div>\r
          </div>\r
        }\r
\r
        <!-- \u2550\u2550\u2550\u2550 FORMAT (shared) \u2550\u2550\u2550\u2550 -->\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">Format</label>\r
          <select class="form-select" [(ngModel)]="selectedFormat">\r
            @for (f of formatList; track f.value) {\r
              <option [value]="f.value">{{ f.label }}</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550 PILIH KOLOM \u2014 hanya tampil saat format "Pilih Kolom" \u2550\u2550\u2550\u2550 -->\r
        @if (isPilihKolom) {\r
          <div class="mb-2">\r
            <label class="form-label fw-semibold">Pilih Kolom</label>\r
            @for (g of kolomGroups; track g.key) {\r
              <div class="border rounded mb-2" style="overflow:hidden">\r
                <!-- Header group -->\r
                <div class="d-flex align-items-center px-3 py-2"\r
                     style="background:#f8f9fa;border-bottom:1px solid #e9ecef">\r
                  <input class="form-check-input me-2" type="checkbox"\r
                         [id]="'grp-' + g.key"\r
                         [checked]="isGroupAllChecked(g)"\r
                         [indeterminate]="isGroupIndeterminate(g)"\r
                         (change)="toggleGroup(g, $any($event.target).checked)" />\r
                  <label class="form-check-label fw-semibold mb-0" [for]="'grp-' + g.key"\r
                         style="font-size:.87rem;cursor:pointer">\r
                    {{ g.label }}\r
                  </label>\r
                  <span class="ms-2 badge bg-secondary" style="font-size:.7rem">Semua</span>\r
                </div>\r
                <!-- Item-item kolom -->\r
                <div class="px-3 py-2 d-flex flex-wrap gap-2">\r
                  @for (item of g.items; track item.key) {\r
                    <div class="form-check form-check-inline mb-0" style="min-width:180px">\r
                      <input class="form-check-input" type="checkbox"\r
                             [id]="'col-' + item.key"\r
                             [(ngModel)]="item.checked" />\r
                      <label class="form-check-label" [for]="'col-' + item.key"\r
                             style="font-size:.82rem">{{ item.label }}</label>\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        }\r
\r
      </div><!-- end modal-body -->\r
\r
      <!-- \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="modal-footer border-top px-4 py-3 gap-2">\r
        <button class="btn btn-secondary px-4" (click)="tutup()" [disabled]="loading()">\r
          Batal\r
        </button>\r
        <button class="btn btn-success px-5" (click)="ekspor()" [disabled]="loading()">\r
          @if (loading()) {\r
            <span class="spinner-border spinner-border-sm me-2"></span>Memproses...\r
          } @else {\r
            <i class="bx bx-download me-2"></i>\r
            {{ activeTab() === 'rentang-waktu' ? 'Kirim ke Email' : 'Ekspor Excel' }}\r
          }\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { tanggalAwal: [{
    type: Input
  }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EksporExcelModalComponent, { className: "EksporExcelModalComponent", filePath: "src/app/features/kehadiran/harian/ekspor-excel-modal.component.ts", lineNumber: 37 });
})();

// src/app/features/kehadiran/harian/kehadiran-harian.component.ts
var _forTrack02 = ($index, $item) => $item.key;
var _forTrack12 = ($index, $item) => $item.id;
function KehadiranHarianComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KehadiranHarianComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function KehadiranHarianComponent_For_33_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab(tab_r3.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-primary", ctx_r0.activeTab() === tab_r3.key)("border-primary", ctx_r0.activeTab() === tab_r3.key)("text-secondary", ctx_r0.activeTab() !== tab_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-warning", tab_r3.key === "tidak-masuk")("text-dark", tab_r3.key === "tidak-masuk")("bg-primary", tab_r3.key !== "tidak-masuk");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r3.count(), " ");
  }
}
function KehadiranHarianComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275text(2, " Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275property("value", n_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 51);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r7.namaJabatan);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("| ", a_r7.namaDivisi);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r7.lokasiMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 59);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r7.fotoMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 61);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Terlambat ", a_r7.menitTerlambat, " mnt ");
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", a_r7.lokasiKeluarUrl, \u0275\u0275sanitizeUrl);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 59);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", a_r7.fotoKeluarUrl, \u0275\u0275sanitizeUrl);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 61);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275conditionalCreate(1, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_1_Template, 2, 1, "a", 58)(2, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_2_Template, 1, 0, "i", 59);
    \u0275\u0275conditionalCreate(3, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_3_Template, 2, 1, "a", 58)(4, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Conditional_4_Template, 1, 0, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r7.lokasiKeluarUrl ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r7.fotoKeluarUrl ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatJam(a_r7.jamKeluar), " ");
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 11);
    \u0275\u0275conditionalCreate(3, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_3_Template, 1, 1, "img", 51)(4, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_4_Template, 2, 0, "div", 52);
    \u0275\u0275elementStart(5, "div")(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275conditionalCreate(9, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(10, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_10_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 45)(12, "div", 56)(13, "i", 57);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Template_i_click_13_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPerangkatPopup(a_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_14_Template, 2, 1, "a", 58)(15, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_15_Template, 1, 0, "i", 59);
    \u0275\u0275elementStart(16, "i", 60);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Template_i_click_16_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openJadwalPopup(a_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_17_Template, 2, 1, "a", 58)(18, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_18_Template, 1, 0, "i", 61);
    \u0275\u0275elementStart(19, "i", 62);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Template_i_click_19_listener() {
      const a_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openUbahPresensi(a_r7));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_22_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 65);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 65);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 45);
    \u0275\u0275conditionalCreate(28, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_28_Template, 7, 3)(29, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Conditional_29_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 65);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 65);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const a_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = ctx_r0.fotoUrl(a_r7.fotoProfil)) ? 3 : 4, tmp_12_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r7.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r7.namaJabatan ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r7.namaDivisi ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(a_r7.lokasiMasukUrl ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r7.fotoMasukUrl ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-danger", a_r7.menitTerlambat > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatJam(a_r7.jamMasuk), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r7.menitTerlambat > 0 ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r7.jamMulaiIstirahat));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r7.jamSelesaiIstirahat));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r7.jamKeluar ? 28 : 29);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r7.jamMulaiLembur));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r7.jamSelesaiLembur));
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.dtMasukSearch ? "Tidak ada data yang cocok dengan pencarian." : "Tidak ada karyawan yang presensi masuk pada tanggal ini.", " ");
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71)(1, "span", 73);
    \u0275\u0275text(2, "\u2026");
    \u0275\u0275elementEnd()();
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "button", 74);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dtMasukPage.set(+p_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.dtMasukPage() === p_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Conditional_0_Template, 3, 0, "li", 71)(1, KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Conditional_1_Template, 3, 3, "li", 72);
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275conditional(p_r9 === "..." ? 0 : 1);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 11)(2, "label", 36);
    \u0275\u0275text(3, "Tampilkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.dtMasukPageSize, $event) || (ctx_r0.dtMasukPageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMasukPageSize());
    });
    \u0275\u0275repeaterCreate(5, KehadiranHarianComponent_Conditional_35_Conditional_0_For_6_Template, 2, 2, "option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 36);
    \u0275\u0275text(8, "entri");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "label", 36);
    \u0275\u0275text(11, "Cari:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.dtMasukSearch, $event) || (ctx_r0.dtMasukSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMasukSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 40)(14, "table", 41)(15, "thead", 42)(16, "tr")(17, "th", 43);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_th_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sortMasuk("namaKaryawan"));
    });
    \u0275\u0275text(18, " Karyawan ");
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 44);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_th_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sortMasuk("jamMasuk"));
    });
    \u0275\u0275text(21, " Presensi Masuk ");
    \u0275\u0275element(22, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 45);
    \u0275\u0275text(24, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 45);
    \u0275\u0275text(26, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 44);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_th_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sortMasuk("jamKeluar"));
    });
    \u0275\u0275text(28, " Presensi Keluar ");
    \u0275\u0275element(29, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 45);
    \u0275\u0275text(31, "Mulai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 45);
    \u0275\u0275text(33, "Selesai Lembur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "tbody");
    \u0275\u0275repeaterCreate(35, KehadiranHarianComponent_Conditional_35_Conditional_0_For_36_Template, 34, 15, "tr", null, _forTrack12);
    \u0275\u0275conditionalCreate(37, KehadiranHarianComponent_Conditional_35_Conditional_0_Conditional_37_Template, 4, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 46)(39, "div", 47);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nav")(42, "ul", 48)(43, "li", 49)(44, "button", 50);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtMasukPage.set(ctx_r0.dtMasukPage() - 1));
    });
    \u0275\u0275element(45, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(46, KehadiranHarianComponent_Conditional_35_Conditional_0_For_47_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(48, "li", 49)(49, "button", 50);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_0_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtMasukPage.set(ctx_r0.dtMasukPage() + 1));
    });
    \u0275\u0275element(50, "i", 15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dtMasukPageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pageSizeOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dtMasukSearch);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon(ctx_r0.dtMasukSort(), "namaKaryawan"), " ms-1"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon(ctx_r0.dtMasukSort(), "jamMasuk"), " ms-1"));
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon(ctx_r0.dtMasukSort(), "jamKeluar"), " ms-1"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.masukPagedList());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.masukPagedList().length === 0 ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.masukInfo());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.dtMasukPage() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dtMasukPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.masukPagesArr());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.dtMasukPage() === ctx_r0.masukTotalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dtMasukPage() === ctx_r0.masukTotalPages());
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r11 = ctx.$implicit;
    \u0275\u0275property("value", n_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r11);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 51);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r12.namaJabatan);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 11);
    \u0275\u0275conditionalCreate(3, KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Conditional_3_Template, 1, 1, "img", 51)(4, KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Conditional_4_Template, 2, 0, "div", 52);
    \u0275\u0275elementStart(5, "div")(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275conditionalCreate(9, KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 45)(13, "span", 79);
    \u0275\u0275text(14, "Tidak/Belum Masuk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 80);
    \u0275\u0275text(16, "\u2014");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const k_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = ctx_r0.fotoUrl(k_r12.fotoProfil)) ? 3 : 4, tmp_12_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(k_r12.namaLengkap);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r12.namaJabatan ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r12.namaDivisi || "\u2014");
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 82);
    \u0275\u0275text(1, " Tidak ada data yang cocok dengan pencarian. ");
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 83);
    \u0275\u0275text(1, " Semua karyawan sudah hadir! ");
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 81);
    \u0275\u0275conditionalCreate(2, KehadiranHarianComponent_Conditional_35_Conditional_1_Conditional_30_Conditional_2_Template, 2, 0)(3, KehadiranHarianComponent_Conditional_35_Conditional_1_Conditional_30_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.dtTidakSearch ? 2 : 3);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71)(1, "span", 73);
    \u0275\u0275text(2, "\u2026");
    \u0275\u0275elementEnd()();
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "button", 74);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const p_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dtTidakPage.set(+p_r14));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.dtTidakPage() === p_r14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Conditional_0_Template, 3, 0, "li", 71)(1, KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Conditional_1_Template, 3, 3, "li", 72);
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275conditional(p_r14 === "..." ? 0 : 1);
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 11)(2, "label", 36);
    \u0275\u0275text(3, "Tampilkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.dtTidakPageSize, $event) || (ctx_r0.dtTidakPageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTidakPageSize());
    });
    \u0275\u0275repeaterCreate(5, KehadiranHarianComponent_Conditional_35_Conditional_1_For_6_Template, 2, 2, "option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 36);
    \u0275\u0275text(8, "entri");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "label", 36);
    \u0275\u0275text(11, "Cari:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.dtTidakSearch, $event) || (ctx_r0.dtTidakSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTidakSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 40)(14, "table", 75)(15, "thead", 42)(16, "tr")(17, "th", 76);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_th_click_17_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sortTidak("namaLengkap"));
    });
    \u0275\u0275text(18, " Karyawan ");
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 77);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_th_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sortTidak("namaDivisi"));
    });
    \u0275\u0275text(21, " Divisi ");
    \u0275\u0275element(22, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 45);
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 45);
    \u0275\u0275text(26, "Jadwal Masuk");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, KehadiranHarianComponent_Conditional_35_Conditional_1_For_29_Template, 17, 4, "tr", null, _forTrack12);
    \u0275\u0275conditionalCreate(30, KehadiranHarianComponent_Conditional_35_Conditional_1_Conditional_30_Template, 4, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 46)(32, "div", 47);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "nav")(35, "ul", 48)(36, "li", 49)(37, "button", 50);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtTidakPage.set(ctx_r0.dtTidakPage() - 1));
    });
    \u0275\u0275element(38, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(39, KehadiranHarianComponent_Conditional_35_Conditional_1_For_40_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(41, "li", 49)(42, "button", 50);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_35_Conditional_1_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtTidakPage.set(ctx_r0.dtTidakPage() + 1));
    });
    \u0275\u0275element(43, "i", 15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dtTidakPageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pageSizeOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dtTidakSearch);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon(ctx_r0.dtTidakSort(), "namaLengkap"), " ms-1"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon(ctx_r0.dtTidakSort(), "namaDivisi"), " ms-1"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.tidakPagedList());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.tidakPagedList().length === 0 ? 30 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tidakInfo());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.dtTidakPage() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dtTidakPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.tidakPagesArr());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.dtTidakPage() === ctx_r0.tidakTotalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dtTidakPage() === ctx_r0.tidakTotalPages());
  }
}
function KehadiranHarianComponent_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Data ", ctx_r0.activeTab() === "cuti" ? "Cuti" : ctx_r0.activeTab() === "izin" ? "Izin" : "Libur", " untuk tanggal ini belum tersedia. ");
  }
}
function KehadiranHarianComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KehadiranHarianComponent_Conditional_35_Conditional_0_Template, 51, 19);
    \u0275\u0275conditionalCreate(1, KehadiranHarianComponent_Conditional_35_Conditional_1_Template, 44, 16);
    \u0275\u0275conditionalCreate(2, KehadiranHarianComponent_Conditional_35_Conditional_2_Template, 3, 1, "div", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.activeTab() === "masuk" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "tidak-masuk" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "cuti" || ctx_r0.activeTab() === "izin" || ctx_r0.activeTab() === "libur" ? 2 : -1);
  }
}
function KehadiranHarianComponent_Conditional_36_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError());
  }
}
function KehadiranHarianComponent_Conditional_36_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
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
function KehadiranHarianComponent_Conditional_36_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
}
function KehadiranHarianComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "h6", 88);
    \u0275\u0275text(5, "Tambah Presensi Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 90);
    \u0275\u0275conditionalCreate(8, KehadiranHarianComponent_Conditional_36_Conditional_8_Template, 2, 1, "div", 91);
    \u0275\u0275elementStart(9, "div", 92)(10, "label", 93);
    \u0275\u0275text(11, "Karyawan ");
    \u0275\u0275elementStart(12, "span", 94);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_36_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.modalKaryawanId, $event) || (ctx_r0.modalKaryawanId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 96);
    \u0275\u0275text(16, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, KehadiranHarianComponent_Conditional_36_For_18_Template, 2, 2, "option", 38, _forTrack12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 92)(20, "label", 93);
    \u0275\u0275text(21, "Tanggal ");
    \u0275\u0275elementStart(22, "span", 94);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_36_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.modalTanggal, $event) || (ctx_r0.modalTanggal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 98)(26, "div", 99)(27, "label", 93);
    \u0275\u0275text(28, "Waktu Masuk ");
    \u0275\u0275elementStart(29, "span", 94);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_36_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.modalWaktuMulai, $event) || (ctx_r0.modalWaktuMulai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 99)(33, "label", 93);
    \u0275\u0275text(34, "Waktu Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_36_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.modalWaktuSelesai, $event) || (ctx_r0.modalWaktuSelesai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 92)(37, "label", 93);
    \u0275\u0275text(38, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "textarea", 101);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_36_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.modalCatatan, $event) || (ctx_r0.modalCatatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 102)(41, "button", 103);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_36_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(42, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 104);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_36_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitModal());
    });
    \u0275\u0275conditionalCreate(44, KehadiranHarianComponent_Conditional_36_Conditional_44_Template, 1, 0, "span", 33);
    \u0275\u0275text(45, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.modalError() ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.modalKaryawanId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.karyawanList());
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.modalTanggal);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.modalWaktuMulai);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.modalWaktuSelesai);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.modalCatatan);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalSaving() ? 44 : -1);
  }
}
function KehadiranHarianComponent_Conditional_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275text(2, " Data perangkat tidak tersedia ");
    \u0275\u0275elementEnd();
  }
}
function KehadiranHarianComponent_Conditional_37_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 113)(1, "tbody")(2, "tr")(3, "td", 115);
    \u0275\u0275text(4, "Nama Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 116);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tr")(8, "td", 117);
    \u0275\u0275text(9, "Manufaktur Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 116);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr")(13, "td", 117);
    \u0275\u0275text(14, "Id Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 118);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tr")(18, "td", 117);
    \u0275\u0275text(19, "Model Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 116);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tr")(23, "td", 117);
    \u0275\u0275text(24, "Platform / OS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 116);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r18 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r18.namaPerangkat || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r18.manufaktur || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r18.deviceId || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r18.modelPerangkat || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r18.platform || "\u2014");
  }
}
function KehadiranHarianComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePerangkatPopup());
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_37_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "div", 107)(4, "div", 11);
    \u0275\u0275element(5, "i", 108);
    \u0275\u0275elementStart(6, "span", 109);
    \u0275\u0275text(7, "Info Perangkat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 110);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_37_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePerangkatPopup());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 111);
    \u0275\u0275conditionalCreate(10, KehadiranHarianComponent_Conditional_37_Conditional_10_Template, 3, 0, "div", 112)(11, KehadiranHarianComponent_Conditional_37_Conditional_11_Template, 27, 5, "table", 113);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r18 = ctx;
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!p_r18.namaPerangkat && !p_r18.deviceId ? 10 : 11);
  }
}
function KehadiranHarianComponent_Conditional_38_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, "Menghapus... ");
  }
}
function KehadiranHarianComponent_Conditional_38_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hapus Jadwal Kerja ");
  }
}
function KehadiranHarianComponent_Conditional_38_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.hapusError(), " ");
  }
}
function KehadiranHarianComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeJadwalPopup());
    });
    \u0275\u0275elementStart(1, "div", 119);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_38_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "div", 87)(4, "h6", 88);
    \u0275\u0275text(5, "Jadwal Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeJadwalPopup());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 120)(8, "table", 121)(9, "tbody")(10, "tr")(11, "td", 122);
    \u0275\u0275text(12, "Jam Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tr")(16, "td", 123);
    \u0275\u0275text(17, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "td", 123);
    \u0275\u0275text(22, "Toleransi Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "tr")(26, "td", 123);
    \u0275\u0275text(27, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "tr")(31, "td", 123);
    \u0275\u0275text(32, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "td", 123);
    \u0275\u0275text(37, "Maks. Menit Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tr")(41, "td", 123);
    \u0275\u0275text(42, "Zona Waktu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 124)(46, "button", 125);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_38_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openUbahJadwal());
    });
    \u0275\u0275text(47, " Ubah Jadwal Kerja ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 125);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_38_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hapusJadwal());
    });
    \u0275\u0275conditionalCreate(49, KehadiranHarianComponent_Conditional_38_Conditional_49_Template, 2, 0)(50, KehadiranHarianComponent_Conditional_38_Conditional_50_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(51, KehadiranHarianComponent_Conditional_38_Conditional_51_Template, 3, 1, "div", 126);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const j_r20 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(j_r20.jamKerjaMulai || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(j_r20.jamKerjaSelesai || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(j_r20.toleransiKeterlambatan != null ? j_r20.toleransiKeterlambatan + " Menit" : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(j_r20.jamIstirahatMulai || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(j_r20.jamIstirahatSelesai || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(j_r20.maksMenitIstirahat != null ? j_r20.maksMenitIstirahat + " Menit" : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(j_r20.zonaWaktu || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hapusSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hapusSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hapusSaving() ? 49 : 50);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hapusError() ? 51 : -1);
  }
}
function KehadiranHarianComponent_Conditional_39_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.ubahError(), " ");
  }
}
function KehadiranHarianComponent_Conditional_39_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, "Menyimpan... ");
  }
}
function KehadiranHarianComponent_Conditional_39_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Simpan ");
  }
}
function KehadiranHarianComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahJadwal());
    });
    \u0275\u0275elementStart(1, "div", 129);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_39_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "div", 87)(4, "h6", 88);
    \u0275\u0275text(5, "Jadwal Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_39_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahJadwal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 130)(8, "div", 131);
    \u0275\u0275text(9, "Ubah Jadwal Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 132);
    \u0275\u0275element(11, "i", 114);
    \u0275\u0275text(12, "Hanya bisa pilih salah satu jadwal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 92)(14, "label", 93);
    \u0275\u0275text(15, " Jam Masuk ");
    \u0275\u0275elementStart(16, "span", 94);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_39_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahJamMasuk, $event) || (ctx_r0.ubahJamMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 92)(20, "label", 93);
    \u0275\u0275text(21, " Jam Keluar ");
    \u0275\u0275elementStart(22, "span", 94);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_39_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahJamKeluar, $event) || (ctx_r0.ubahJamKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 92)(26, "label", 93);
    \u0275\u0275text(27, "Toleransi Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 133)(29, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_39_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahToleransi, $event) || (ctx_r0.ubahToleransi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 135);
    \u0275\u0275text(31, "Menit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 92)(33, "label", 93);
    \u0275\u0275text(34, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_39_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahMulaiIstirahat, $event) || (ctx_r0.ubahMulaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 92)(37, "label", 93);
    \u0275\u0275text(38, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_39_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahSelesaiIstirahat, $event) || (ctx_r0.ubahSelesaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 136)(41, "label", 93);
    \u0275\u0275text(42, "Maks. Menit Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 133)(44, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_39_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahMaksMenit, $event) || (ctx_r0.ubahMaksMenit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 135);
    \u0275\u0275text(46, "Menit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(47, KehadiranHarianComponent_Conditional_39_Conditional_47_Template, 3, 1, "div", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 138)(49, "button", 139);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_39_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahJadwal());
    });
    \u0275\u0275text(50, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 140);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_39_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanUbahJadwal());
    });
    \u0275\u0275conditionalCreate(52, KehadiranHarianComponent_Conditional_39_Conditional_52_Template, 2, 0)(53, KehadiranHarianComponent_Conditional_39_Conditional_53_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahJamMasuk);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahJamKeluar);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahToleransi);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahMulaiIstirahat);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahSelesaiIstirahat);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahMaksMenit);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.ubahError() ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.ubahSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.ubahSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ubahSaving() ? 52 : 53);
  }
}
function KehadiranHarianComponent_Conditional_40_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, "Membatalkan... ");
  }
}
function KehadiranHarianComponent_Conditional_40_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 150);
    \u0275\u0275text(1, "Batalkan Presensi ");
  }
}
function KehadiranHarianComponent_Conditional_40_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.batalkanError(), " ");
  }
}
function KehadiranHarianComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahPresensi());
    });
    \u0275\u0275elementStart(1, "div", 142);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_40_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "div", 87)(4, "h6", 88);
    \u0275\u0275text(5, "Ubah Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_40_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahPresensi());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 130)(8, "div", 143);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 144);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 145);
    \u0275\u0275text(13, " Silakan pilih aksi yang akan dilakukan: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 124)(15, "button", 146);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_40_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.batalkanPresensi());
    });
    \u0275\u0275conditionalCreate(16, KehadiranHarianComponent_Conditional_40_Conditional_16_Template, 2, 0)(17, KehadiranHarianComponent_Conditional_40_Conditional_17_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 147);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_40_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openUbahWaktu());
    });
    \u0275\u0275element(19, "i", 148);
    \u0275\u0275text(20, "Waktu Presensi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, KehadiranHarianComponent_Conditional_40_Conditional_21_Template, 3, 1, "div", 149);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r23 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" Masuk (", a_r23.namaKaryawan, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatTanggalLengkap(a_r23.tanggal), " @ ", ctx_r0.formatJam(a_r23.jamMasuk), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.batalkanSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.batalkanSaving() ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.batalkanSaving());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.batalkanError() ? 21 : -1);
  }
}
function KehadiranHarianComponent_Conditional_41_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.ubahWaktuError(), " ");
  }
}
function KehadiranHarianComponent_Conditional_41_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, "Menyimpan... ");
  }
}
function KehadiranHarianComponent_Conditional_41_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Simpan ");
  }
}
function KehadiranHarianComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahWaktu());
    });
    \u0275\u0275elementStart(1, "div", 142);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_41_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "div", 87)(4, "h6", 88);
    \u0275\u0275text(5, "Ubah Waktu Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_41_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahWaktu());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 130)(8, "div", 92)(9, "label", 93);
    \u0275\u0275text(10, " Jam Masuk ");
    \u0275\u0275elementStart(11, "span", 94);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_41_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahWaktuJamMasuk, $event) || (ctx_r0.ubahWaktuJamMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 92)(15, "label", 93);
    \u0275\u0275text(16, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function KehadiranHarianComponent_Conditional_41_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.ubahWaktuJamKeluar, $event) || (ctx_r0.ubahWaktuJamKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 151);
    \u0275\u0275text(19, "Kosongkan jika karyawan belum keluar.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, KehadiranHarianComponent_Conditional_41_Conditional_20_Template, 3, 1, "div", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 138)(22, "button", 139);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_41_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeUbahWaktu());
    });
    \u0275\u0275text(23, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 140);
    \u0275\u0275listener("click", function KehadiranHarianComponent_Conditional_41_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanUbahWaktu());
    });
    \u0275\u0275conditionalCreate(25, KehadiranHarianComponent_Conditional_41_Conditional_25_Template, 2, 0)(26, KehadiranHarianComponent_Conditional_41_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahWaktuJamMasuk);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ubahWaktuJamKeluar);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.ubahWaktuError() ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.ubahWaktuSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.ubahWaktuSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ubahWaktuSaving() ? 25 : 26);
  }
}
function KehadiranHarianComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ekspor-excel-modal", 152);
    \u0275\u0275listener("closed", function KehadiranHarianComponent_Conditional_42_Template_app_ekspor_excel_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tutupEkspor());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tanggalAwal", ctx_r0.tanggalFilter());
  }
}
var KehadiranHarianComponent = class _KehadiranHarianComponent {
  constructor() {
    this.absensiSvc = inject(AbsensiService);
    this.karyawanSvc = inject(KaryawanService);
    this.polaKerjaSvc = inject(PolaKerjaService);
    this.tanggalFilter = signal((/* @__PURE__ */ new Date()).toISOString().substring(0, 10), ...ngDevMode ? [{ debugName: "tanggalFilter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.absensiList = signal([], ...ngDevMode ? [{ debugName: "absensiList" }] : (
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
    this.activeTab = signal("masuk", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtMasukSearch = "";
    this.dtMasukPageSize = 10;
    this.dtMasukPage = signal(1, ...ngDevMode ? [{ debugName: "dtMasukPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtMasukSort = signal({ col: "namaKaryawan", dir: "asc" }, ...ngDevMode ? [{ debugName: "dtMasukSort" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtTidakSearch = "";
    this.dtTidakPageSize = 10;
    this.dtTidakPage = signal(1, ...ngDevMode ? [{ debugName: "dtTidakPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtTidakSort = signal({ col: "namaLengkap", dir: "asc" }, ...ngDevMode ? [{ debugName: "dtTidakSort" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSizeOptions = [10, 25, 50, 100];
    this.masukFiltered = computed(() => {
      const q = this.dtMasukSearch.toLowerCase();
      let rows = this.absensiList().filter((a) => a.jamMasuk);
      if (q)
        rows = rows.filter((a) => a.namaKaryawan?.toLowerCase().includes(q) || a.namaDivisi?.toLowerCase().includes(q) || a.namaJabatan?.toLowerCase().includes(q));
      const { col, dir } = this.dtMasukSort();
      rows = [...rows].sort((a, b) => {
        const va = this.sortValMasuk(a, col);
        const vb = this.sortValMasuk(b, col);
        return dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      });
      return rows;
    }, ...ngDevMode ? [{ debugName: "masukFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masukTotalPages = computed(() => Math.max(1, Math.ceil(this.masukFiltered().length / this.dtMasukPageSize)), ...ngDevMode ? [{ debugName: "masukTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masukPagedList = computed(() => {
      const page = Math.min(this.dtMasukPage(), this.masukTotalPages());
      const start = (page - 1) * this.dtMasukPageSize;
      return this.masukFiltered().slice(start, start + this.dtMasukPageSize);
    }, ...ngDevMode ? [{ debugName: "masukPagedList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masukPagesArr = computed(() => this.buildPagesArr(this.dtMasukPage(), this.masukTotalPages()), ...ngDevMode ? [{ debugName: "masukPagesArr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masukInfo = computed(() => {
      const total = this.masukFiltered().length;
      if (total === 0)
        return "Tidak ada data";
      const page = Math.min(this.dtMasukPage(), this.masukTotalPages());
      const start = (page - 1) * this.dtMasukPageSize + 1;
      const end = Math.min(page * this.dtMasukPageSize, total);
      const all = this.masukList().length;
      return total < all ? `Menampilkan ${start}\u2013${end} dari ${total} entri (difilter dari ${all} total entri)` : `Menampilkan ${start}\u2013${end} dari ${total} entri`;
    }, ...ngDevMode ? [{ debugName: "masukInfo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tidakFiltered = computed(() => {
      const hadirIds = new Set(this.absensiList().map((a) => a.karyawanId));
      const q = this.dtTidakSearch.toLowerCase();
      let rows = this.karyawanList().filter((k) => !hadirIds.has(k.id));
      if (q)
        rows = rows.filter((k) => k.namaLengkap.toLowerCase().includes(q) || k.namaDivisi?.toLowerCase().includes(q) || k.namaJabatan?.toLowerCase().includes(q));
      const { col, dir } = this.dtTidakSort();
      rows = [...rows].sort((a, b) => {
        const va = (col === "namaLengkap" ? a.namaLengkap : a.namaDivisi ?? "") ?? "";
        const vb = (col === "namaLengkap" ? b.namaLengkap : b.namaDivisi ?? "") ?? "";
        return dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      });
      return rows;
    }, ...ngDevMode ? [{ debugName: "tidakFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tidakTotalPages = computed(() => Math.max(1, Math.ceil(this.tidakFiltered().length / this.dtTidakPageSize)), ...ngDevMode ? [{ debugName: "tidakTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tidakPagedList = computed(() => {
      const page = Math.min(this.dtTidakPage(), this.tidakTotalPages());
      const start = (page - 1) * this.dtTidakPageSize;
      return this.tidakFiltered().slice(start, start + this.dtTidakPageSize);
    }, ...ngDevMode ? [{ debugName: "tidakPagedList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tidakPagesArr = computed(() => this.buildPagesArr(this.dtTidakPage(), this.tidakTotalPages()), ...ngDevMode ? [{ debugName: "tidakPagesArr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tidakInfo = computed(() => {
      const total = this.tidakFiltered().length;
      if (total === 0)
        return "Tidak ada data";
      const page = Math.min(this.dtTidakPage(), this.tidakTotalPages());
      const start = (page - 1) * this.dtTidakPageSize + 1;
      const end = Math.min(page * this.dtTidakPageSize, total);
      const all = this.tidakMasukList().length;
      return total < all ? `Menampilkan ${start}\u2013${end} dari ${total} entri (difilter dari ${all} total entri)` : `Menampilkan ${start}\u2013${end} dari ${total} entri`;
    }, ...ngDevMode ? [{ debugName: "tidakInfo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.popupPerangkat = signal(null, ...ngDevMode ? [{ debugName: "popupPerangkat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.popupJadwal = signal(null, ...ngDevMode ? [{ debugName: "popupJadwal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.popupUbahPresensi = signal(null, ...ngDevMode ? [{ debugName: "popupUbahPresensi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showUbahWaktu = signal(false, ...ngDevMode ? [{ debugName: "showUbahWaktu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ubahWaktuJamMasuk = "";
    this.ubahWaktuJamKeluar = "";
    this.ubahWaktuSaving = signal(false, ...ngDevMode ? [{ debugName: "ubahWaktuSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ubahWaktuError = signal("", ...ngDevMode ? [{ debugName: "ubahWaktuError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.batalkanSaving = signal(false, ...ngDevMode ? [{ debugName: "batalkanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.batalkanError = signal("", ...ngDevMode ? [{ debugName: "batalkanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hapusSaving = signal(false, ...ngDevMode ? [{ debugName: "hapusSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hapusError = signal("", ...ngDevMode ? [{ debugName: "hapusError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showUbahJadwal = signal(false, ...ngDevMode ? [{ debugName: "showUbahJadwal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ubahSaving = signal(false, ...ngDevMode ? [{ debugName: "ubahSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ubahError = signal("", ...ngDevMode ? [{ debugName: "ubahError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ubahJamMasuk = "";
    this.ubahJamKeluar = "";
    this.ubahToleransi = 0;
    this.ubahMulaiIstirahat = "";
    this.ubahSelesaiIstirahat = "";
    this.ubahMaksMenit = 0;
    this.modalKaryawanId = "";
    this.modalTanggal = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.modalWaktuMulai = "";
    this.modalWaktuSelesai = "";
    this.modalCatatan = "";
    this.modalSaving = signal(false, ...ngDevMode ? [{ debugName: "modalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalError = signal("", ...ngDevMode ? [{ debugName: "modalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masukList = computed(() => this.absensiList().filter((a) => a.jamMasuk), ...ngDevMode ? [{ debugName: "masukList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tidakMasukList = computed(() => {
      const hadirIds = new Set(this.absensiList().map((a) => a.karyawanId));
      return this.karyawanList().filter((k) => !hadirIds.has(k.id));
    }, ...ngDevMode ? [{ debugName: "tidakMasukList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cutiList = computed(() => this.absensiList().filter((a) => a.status === "IZIN"), ...ngDevMode ? [{ debugName: "cutiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.izinList = computed(() => this.absensiList().filter((a) => a.status === "SAKIT"), ...ngDevMode ? [{ debugName: "izinList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.liburList = computed(() => this.absensiList().filter((a) => a.status === "ALPHA"), ...ngDevMode ? [{ debugName: "liburList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tabList = [
      { key: "masuk", label: "Presensi Masuk", count: () => this.masukList().length },
      { key: "tidak-masuk", label: "Tidak/Belum Masuk", count: () => this.tidakMasukList().length },
      { key: "cuti", label: "Cuti", count: () => this.cutiList().length },
      { key: "izin", label: "Izin", count: () => this.izinList().length },
      { key: "libur", label: "Libur", count: () => this.liburList().length }
    ];
    this.showEkspor = signal(false, ...ngDevMode ? [{ debugName: "showEkspor" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  openPerangkatPopup(a) {
    this.popupPerangkat.set(a);
  }
  closePerangkatPopup() {
    this.popupPerangkat.set(null);
  }
  openJadwalPopup(a) {
    this.popupJadwal.set(a);
  }
  closeJadwalPopup() {
    this.popupJadwal.set(null);
    this.showUbahJadwal.set(false);
  }
  openUbahPresensi(a) {
    this.popupUbahPresensi.set(a);
  }
  closeUbahPresensi() {
    this.popupUbahPresensi.set(null);
    this.showUbahWaktu.set(false);
  }
  formatTanggalLengkap(iso) {
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
  }
  openUbahWaktu() {
    const a = this.popupUbahPresensi();
    if (!a)
      return;
    this.ubahWaktuJamMasuk = a.jamMasuk ? a.jamMasuk.substring(0, 5) : "";
    this.ubahWaktuJamKeluar = a.jamKeluar ? a.jamKeluar.substring(0, 5) : "";
    this.ubahWaktuError.set("");
    this.showUbahWaktu.set(true);
  }
  closeUbahWaktu() {
    this.showUbahWaktu.set(false);
  }
  simpanUbahWaktu() {
    const a = this.popupUbahPresensi();
    if (!a?.id)
      return;
    if (!this.ubahWaktuJamMasuk) {
      this.ubahWaktuError.set("Jam masuk wajib diisi");
      return;
    }
    this.ubahWaktuSaving.set(true);
    this.ubahWaktuError.set("");
    this.absensiSvc.ubahWaktuPresensi(a.id, this.ubahWaktuJamMasuk, this.ubahWaktuJamKeluar || void 0).subscribe({
      next: () => {
        this.ubahWaktuSaving.set(false);
        this.showUbahWaktu.set(false);
        this.popupUbahPresensi.set(null);
        this.loadData();
      },
      error: (e) => {
        this.ubahWaktuSaving.set(false);
        this.ubahWaktuError.set(e?.error?.message ?? "Gagal menyimpan waktu presensi.");
      }
    });
  }
  batalkanPresensi() {
    const a = this.popupUbahPresensi();
    if (!a?.id)
      return;
    if (!confirm(`Yakin ingin membatalkan presensi ${a.namaKaryawan} pada tanggal ini?
Data presensi akan dihapus permanen.`))
      return;
    this.batalkanSaving.set(true);
    this.batalkanError.set("");
    this.absensiSvc.batalkanPresensi(a.id).subscribe({
      next: () => {
        this.batalkanSaving.set(false);
        this.popupUbahPresensi.set(null);
        this.loadData();
      },
      error: (e) => {
        this.batalkanSaving.set(false);
        this.batalkanError.set(e?.error?.message ?? "Gagal membatalkan presensi.");
      }
    });
  }
  hapusJadwal() {
    const j = this.popupJadwal();
    if (!j?.polaKerjaHariId) {
      this.hapusError.set("Data jadwal hari tidak ditemukan.");
      return;
    }
    const namaHari = j.namaHari || "hari ini";
    if (!confirm(`Yakin ingin menghapus jadwal kerja untuk ${namaHari}?
Jadwal akan direset menjadi Libur.`))
      return;
    this.hapusSaving.set(true);
    this.hapusError.set("");
    this.polaKerjaSvc.hapusHari(j.polaKerjaHariId).subscribe({
      next: () => {
        this.hapusSaving.set(false);
        this.popupJadwal.set(null);
        this.loadData();
      },
      error: (e) => {
        this.hapusSaving.set(false);
        this.hapusError.set(e?.error?.message ?? "Gagal menghapus jadwal.");
      }
    });
  }
  openUbahJadwal() {
    const j = this.popupJadwal();
    if (!j)
      return;
    this.ubahJamMasuk = j.jamKerjaMulai || "";
    this.ubahJamKeluar = j.jamKerjaSelesai || "";
    this.ubahToleransi = j.toleransiKeterlambatan ?? 0;
    this.ubahMulaiIstirahat = j.jamIstirahatMulai || "";
    this.ubahSelesaiIstirahat = j.jamIstirahatSelesai || "";
    this.ubahMaksMenit = j.maksMenitIstirahat ?? 0;
    this.ubahError.set("");
    this.showUbahJadwal.set(true);
  }
  closeUbahJadwal() {
    this.showUbahJadwal.set(false);
  }
  simpanUbahJadwal() {
    const j = this.popupJadwal();
    if (!j?.polaKerjaHariId) {
      this.ubahError.set("Data jadwal hari tidak ditemukan. Karyawan mungkin belum memiliki pola kerja.");
      return;
    }
    if (!this.ubahJamMasuk || !this.ubahJamKeluar) {
      this.ubahError.set("Jam Masuk dan Jam Keluar wajib diisi.");
      return;
    }
    this.ubahSaving.set(true);
    this.ubahError.set("");
    this.polaKerjaSvc.updateHari(j.polaKerjaHariId, {
      jamMasuk: this.ubahJamMasuk,
      jamKeluar: this.ubahJamKeluar,
      mulaiIstirahat: this.ubahMulaiIstirahat || void 0,
      selesaiIstirahat: this.ubahSelesaiIstirahat || void 0,
      maksMenitIstirahat: this.ubahMaksMenit > 0 ? this.ubahMaksMenit : void 0,
      toleransiKeterlambatan: this.ubahToleransi
    }).subscribe({
      next: () => {
        this.ubahSaving.set(false);
        this.showUbahJadwal.set(false);
        this.popupJadwal.set(null);
        this.loadData();
      },
      error: (e) => {
        this.ubahSaving.set(false);
        this.ubahError.set(e?.error?.message ?? "Gagal menyimpan jadwal.");
      }
    });
  }
  ngOnInit() {
    this.loadData();
    this.karyawanSvc.findAll().subscribe({ next: (list) => this.karyawanList.set(list) });
  }
  loadData() {
    this.loading.set(true);
    this.error.set("");
    this.absensiSvc.getKehadiranHarian(this.tanggalFilter()).subscribe({
      next: (list) => {
        this.absensiList.set(list);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
  }
  prevDay() {
    const d = new Date(this.tanggalFilter());
    d.setDate(d.getDate() - 1);
    this.tanggalFilter.set(d.toISOString().substring(0, 10));
    this.loadData();
  }
  nextDay() {
    const d = new Date(this.tanggalFilter());
    d.setDate(d.getDate() + 1);
    this.tanggalFilter.set(d.toISOString().substring(0, 10));
    this.loadData();
  }
  onTanggalChange(val) {
    this.tanggalFilter.set(val);
    this.loadData();
  }
  setTab(t) {
    this.activeTab.set(t);
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.apiUrl.replace("/api", "")}/${path}`;
  }
  formatJam(jam) {
    if (!jam)
      return "\u2014";
    return jam.substring(0, 8);
  }
  openModal() {
    this.modalKaryawanId = "";
    this.modalTanggal = this.tanggalFilter();
    this.modalWaktuMulai = "";
    this.modalWaktuSelesai = "";
    this.modalCatatan = "";
    this.modalError.set("");
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  submitModal() {
    if (!this.modalKaryawanId) {
      this.modalError.set("Pilih karyawan terlebih dahulu");
      return;
    }
    if (!this.modalWaktuMulai) {
      this.modalError.set("Waktu mulai wajib diisi");
      return;
    }
    this.modalSaving.set(true);
    this.modalError.set("");
    this.absensiSvc.tambahManual(+this.modalKaryawanId, {
      tanggal: this.modalTanggal,
      tipePresensi: "MASUK_KELUAR",
      waktuMulai: this.modalWaktuMulai,
      waktuSelesai: this.modalWaktuSelesai || void 0,
      catatan: this.modalCatatan || void 0
    }).subscribe({
      next: () => {
        this.modalSaving.set(false);
        this.showModal.set(false);
        this.loadData();
      },
      error: (e) => {
        this.modalSaving.set(false);
        this.modalError.set(e?.error?.message ?? "Gagal menyimpan");
      }
    });
  }
  exportExcel() {
    this.showEkspor.set(true);
  }
  tutupEkspor() {
    this.showEkspor.set(false);
  }
  formatTanggalDisplay(iso) {
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  // ── DataTable helpers ─────────────────────────────────
  sortValMasuk(a, col) {
    switch (col) {
      case "namaKaryawan":
        return a.namaKaryawan ?? "";
      case "namaDivisi":
        return a.namaDivisi ?? "";
      case "jamMasuk":
        return a.jamMasuk ?? "";
      case "jamKeluar":
        return a.jamKeluar ?? "";
      case "terlambat":
        return String(a.menitTerlambat ?? 0).padStart(6, "0");
      default:
        return "";
    }
  }
  sortMasuk(col) {
    const cur = this.dtMasukSort();
    this.dtMasukSort.set({ col, dir: cur.col === col && cur.dir === "asc" ? "desc" : "asc" });
    this.dtMasukPage.set(1);
  }
  sortTidak(col) {
    const cur = this.dtTidakSort();
    this.dtTidakSort.set({ col, dir: cur.col === col && cur.dir === "asc" ? "desc" : "asc" });
    this.dtTidakPage.set(1);
  }
  sortIcon(sort, col) {
    if (sort.col !== col)
      return "bx-sort";
    return sort.dir === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  onMasukSearch() {
    this.dtMasukPage.set(1);
  }
  onTidakSearch() {
    this.dtTidakPage.set(1);
  }
  onMasukPageSize() {
    this.dtMasukPage.set(1);
  }
  onTidakPageSize() {
    this.dtTidakPage.set(1);
  }
  buildPagesArr(current, total) {
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [1];
    if (current > 3)
      pages.push("...");
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++)
      pages.push(i);
    if (current < total - 2)
      pages.push("...");
    pages.push(total);
    return pages;
  }
  static {
    this.\u0275fac = function KehadiranHarianComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KehadiranHarianComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KehadiranHarianComponent, selectors: [["app-kehadiran-harian"]], decls: 43, vars: 10, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "breadcrumb-item", "active"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "card", "border-0", "shadow-sm"], [1, "px-4", "py-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "border-bottom"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-2", 3, "click"], [1, "bx", "bx-chevron-left"], ["type", "date", 1, "form-control", "form-control-sm", 2, "width", "160px", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-chevron-right"], [1, "btn", "btn-sm", "btn-outline-secondary"], [1, "bx", "bx-filter-alt", "me-1"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "btn", "btn-sm", "btn-success", "px-3", 3, "click"], [1, "bx", "bx-export", "me-1"], [1, "px-4", "pt-3", "d-flex", "gap-1", "flex-wrap", "border-bottom", "pb-0"], [1, "btn", "btn-sm", "px-4", "pb-2", "border-0", "border-bottom", "rounded-0", "fw-semibold", 2, "border-bottom-width", "2px!important", 3, "text-primary", "border-primary", "text-secondary"], [1, "text-center", "py-5", "text-muted"], ["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.4)"], ["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1060"], ["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.4)", "z-index", "1050"], [3, "tanggalAwal"], [1, "bx", "bx-error-circle", "fs-5"], [1, "btn", "btn-sm", "px-4", "pb-2", "border-0", "border-bottom", "rounded-0", "fw-semibold", 2, "border-bottom-width", "2px!important", 3, "click"], [1, "badge", "ms-1"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "text-muted", "py-5"], [1, "px-4", "py-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "border-bottom"], [1, "text-muted", "small", "mb-0"], [1, "form-select", "form-select-sm", 2, "width", "75px", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "text", "placeholder", "Nama, divisi, jabatan...", 1, "form-control", "form-control-sm", 2, "width", "220px", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "min-width", "1000px"], [1, "table-light"], [2, "width", "240px", "cursor", "pointer", 3, "click"], [1, "text-center;cursor:pointer", 2, "cursor", "pointer", 3, "click"], [1, "text-center"], [1, "px-4", "py-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "border-top"], [1, "text-muted", "small"], [1, "pagination", "pagination-sm", "mb-0", "gap-1"], [1, "page-item"], [1, "page-link", "rounded", 3, "click", "disabled"], [1, "rounded-circle", 2, "width", "42px", "height", "42px", "object-fit", "cover", "border", "2px solid #e9ecef", "flex-shrink", "0", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "42px", "height", "42px", "background", "#f3f4f6", "color", "#9ca3af", "flex-shrink", "0"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "ms-1"], [1, "d-flex", "justify-content-center", "gap-1", "mb-1"], ["title", "Info Perangkat", 1, "bx", "bx-mobile-alt", "text-secondary", 2, "cursor", "pointer", 3, "click"], ["target", "_blank", 3, "href"], [1, "bx", "bx-map-pin", "text-secondary"], ["title", "Jadwal Kerja", 1, "bx", "bx-calendar", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "bx", "bx-camera", "text-secondary"], ["title", "Ubah Presensi", 1, "bx", "bx-edit", "text-secondary", 2, "cursor", "pointer", 3, "click"], [1, "fw-bold", 2, "font-size", "1.25rem", "letter-spacing", ".05em"], [1, "badge", "bg-danger-subtle", "text-danger", 2, "font-size", ".7rem"], [1, "text-center", "text-muted", 2, "font-size", ".9rem"], [1, "text-muted"], [1, "bx", "bx-user"], [1, "bx", "bx-map-pin", "text-danger"], ["colspan", "7", 1, "text-center", "text-muted", "py-5"], [1, "bx", "bx-calendar-x", "fs-2", "d-block", "mb-2"], [1, "page-item", "disabled"], [1, "page-item", 3, "active"], [1, "page-link"], [1, "page-link", "rounded", 3, "click"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "min-width", "600px"], [2, "cursor", "pointer", 3, "click"], [1, "text-center", 2, "cursor", "pointer", 3, "click"], [1, "text-center", "text-muted", 2, "font-size", ".85rem"], [1, "badge", "bg-danger-subtle", "text-danger", "fw-semibold"], [1, "text-center", "text-muted"], ["colspan", "4", 1, "text-center", "text-muted", "py-5"], [1, "bx", "bx-search", "fs-2", "d-block", "mb-2"], [1, "bx", "bx-check-circle", "fs-2", "d-block", "mb-2", "text-success"], [1, "bx", "bx-info-circle", "fs-2", "d-block", "mb-2"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header", "border-bottom"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mb-3"], [1, "col"], ["type", "time", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Opsional\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "border-top"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], ["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.4)", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm", 3, "click"], [1, "modal-header", "py-2", "border-bottom", 2, "background", "#f8f9fa"], [1, "bx", "bx-mobile-alt", "fs-5", "text-primary"], [1, "fw-bold", 2, "font-size", ".95rem"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "modal-body", "px-4", "py-3", 2, "font-size", ".85rem"], [1, "text-muted", "text-center", "py-2"], [1, "table", "table-sm", "table-borderless", "mb-0"], [1, "bx", "bx-info-circle", "me-1"], [1, "text-muted", "fw-semibold", "pe-3", 2, "white-space", "nowrap", "width", "45%"], [1, "fw-medium"], [1, "text-muted", "fw-semibold", "pe-3"], [1, "fw-medium", "text-break"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "420px", 3, "click"], [1, "modal-body", "px-4", "py-3"], [1, "table", "table-sm", "table-borderless", "mb-3", 2, "font-size", ".88rem"], [1, "fw-semibold", "text-dark", "pe-4", 2, "width", "55%"], [1, "fw-semibold", "text-dark", "pe-4"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "alert", "alert-danger", "py-2", "mb-0", 2, "font-size", ".82rem"], [1, "bx", "bx-error-circle", "me-1"], ["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1060", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "440px", 3, "click"], [1, "modal-body", "px-4", "py-4"], [1, "fw-bold", "mb-1", 2, "font-size", ".95rem"], [1, "text-muted", "mb-4", 2, "font-size", ".8rem"], [1, "input-group"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], [1, "mb-4"], [1, "alert", "alert-danger", "py-2", 2, "font-size", ".85rem"], [1, "modal-footer", "border-top", "gap-2"], [1, "btn", "btn-secondary", "flex-fill", 3, "click", "disabled"], [1, "btn", "btn-primary", "flex-fill", 3, "click", "disabled"], ["tabindex", "-1", 1, "modal", "show", "d-block", 2, "background", "rgba(0,0,0,.4)", "z-index", "1050", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "400px", 3, "click"], [1, "mb-1", "fw-semibold", 2, "font-size", ".9rem"], [1, "text-muted", "mb-4", 2, "font-size", ".85rem"], [1, "text-muted", "mb-3", 2, "font-size", ".85rem"], [1, "btn", "btn-outline-danger", "text-start", "px-3", 3, "click", "disabled"], [1, "btn", "btn-outline-primary", "text-start", "px-3", 3, "click", "disabled"], [1, "bx", "bx-time", "me-2"], [1, "alert", "alert-danger", "py-2", "mt-3", "mb-0", 2, "font-size", ".82rem"], [1, "bx", "bx-x-circle", "me-2"], [1, "form-text"], [3, "closed", "tanggalAwal"]], template: function KehadiranHarianComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Kehadiran Harian");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 7);
        \u0275\u0275text(11, "Kehadiran Harian");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(12, KehadiranHarianComponent_Conditional_12_Template, 3, 1, "div", 8);
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "button", 12);
        \u0275\u0275listener("click", function KehadiranHarianComponent_Template_button_click_16_listener() {
          return ctx.prevDay();
        });
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 14);
        \u0275\u0275listener("ngModelChange", function KehadiranHarianComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.onTanggalChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function KehadiranHarianComponent_Template_button_click_19_listener() {
          return ctx.nextDay();
        });
        \u0275\u0275element(20, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 16);
        \u0275\u0275element(22, "i", 17);
        \u0275\u0275text(23, " Filter Lanjutan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 18)(25, "button", 19);
        \u0275\u0275listener("click", function KehadiranHarianComponent_Template_button_click_25_listener() {
          return ctx.openModal();
        });
        \u0275\u0275element(26, "i", 20);
        \u0275\u0275text(27, " Tambah Presensi Karyawan ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 21);
        \u0275\u0275listener("click", function KehadiranHarianComponent_Template_button_click_28_listener() {
          return ctx.exportExcel();
        });
        \u0275\u0275element(29, "i", 22);
        \u0275\u0275text(30, " Ekspor Excel ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 23);
        \u0275\u0275repeaterCreate(32, KehadiranHarianComponent_For_33_Template, 4, 14, "button", 24, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, KehadiranHarianComponent_Conditional_34_Template, 3, 0, "div", 25)(35, KehadiranHarianComponent_Conditional_35_Template, 3, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(36, KehadiranHarianComponent_Conditional_36_Template, 46, 8, "div", 26);
        \u0275\u0275conditionalCreate(37, KehadiranHarianComponent_Conditional_37_Template, 12, 1, "div", 26);
        \u0275\u0275conditionalCreate(38, KehadiranHarianComponent_Conditional_38_Template, 52, 11, "div", 26);
        \u0275\u0275conditionalCreate(39, KehadiranHarianComponent_Conditional_39_Template, 54, 10, "div", 27);
        \u0275\u0275conditionalCreate(40, KehadiranHarianComponent_Conditional_40_Template, 22, 7, "div", 28);
        \u0275\u0275conditionalCreate(41, KehadiranHarianComponent_Conditional_41_Template, 27, 6, "div", 27);
        \u0275\u0275conditionalCreate(42, KehadiranHarianComponent_Conditional_42_Template, 1, 1, "app-ekspor-excel-modal", 29);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        let tmp_8_0;
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.error() ? 12 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.tanggalFilter());
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.tabList);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 34 : 35);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showModal() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_5_0 = ctx.popupPerangkat()) ? 37 : -1, tmp_5_0);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_6_0 = ctx.popupJadwal()) ? 38 : -1, tmp_6_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showUbahJadwal() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_8_0 = ctx.popupUbahPresensi()) ? 40 : -1, tmp_8_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showUbahWaktu() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showEkspor() ? 42 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent, EksporExcelModalComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KehadiranHarianComponent, [{
    type: Component,
    args: [{ selector: "app-kehadiran-harian", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, EksporExcelModalComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Kehadiran Harian</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard">Dasbor</a></li>\r
          <li class="breadcrumb-item active">Kehadiran Harian</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2 mb-3">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
    </div>\r
  }\r
\r
  <div class="card border-0 shadow-sm">\r
\r
    <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-3 border-bottom">\r
      <!-- Navigasi tanggal -->\r
      <div class="d-flex align-items-center gap-2">\r
        <button class="btn btn-sm btn-outline-secondary px-2" (click)="prevDay()">\r
          <i class="bx bx-chevron-left"></i>\r
        </button>\r
        <input type="date" class="form-control form-control-sm" style="width:160px"\r
               [ngModel]="tanggalFilter()"\r
               (ngModelChange)="onTanggalChange($event)" />\r
        <button class="btn btn-sm btn-outline-secondary px-2" (click)="nextDay()">\r
          <i class="bx bx-chevron-right"></i>\r
        </button>\r
        <button class="btn btn-sm btn-outline-secondary">\r
          <i class="bx bx-filter-alt me-1"></i> Filter Lanjutan\r
        </button>\r
      </div>\r
      <!-- Tombol aksi -->\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-sm btn-primary px-3" (click)="openModal()">\r
          <i class="bx bx-plus me-1"></i> Tambah Presensi Karyawan\r
        </button>\r
        <button class="btn btn-sm btn-success px-3" (click)="exportExcel()">\r
          <i class="bx bx-export me-1"></i> Ekspor Excel\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="px-4 pt-3 d-flex gap-1 flex-wrap border-bottom pb-0">\r
      @for (tab of tabList; track tab.key) {\r
        <button class="btn btn-sm px-4 pb-2 border-0 border-bottom rounded-0 fw-semibold"\r
                [class.text-primary]="activeTab() === tab.key"\r
                [class.border-primary]="activeTab() === tab.key"\r
                [class.text-secondary]="activeTab() !== tab.key"\r
                style="border-bottom-width:2px!important;"\r
                (click)="setTab(tab.key)">\r
          {{ tab.label }}\r
          <span class="badge ms-1"\r
                [class.bg-warning]="tab.key === 'tidak-masuk'"\r
                [class.text-dark]="tab.key === 'tidak-masuk'"\r
                [class.bg-primary]="tab.key !== 'tidak-masuk'">\r
            {{ tab.count() }}\r
          </span>\r
        </button>\r
      }\r
    </div>\r
\r
    <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    @if (loading()) {\r
      <div class="text-center py-5 text-muted">\r
        <div class="spinner-border spinner-border-sm me-2"></div> Memuat data...\r
      </div>\r
    } @else {\r
\r
      <!-- \u2500\u2500 TAB: Presensi Masuk \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (activeTab() === 'masuk') {\r
        <!-- DataTable Controls -->\r
        <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">\r
          <div class="d-flex align-items-center gap-2">\r
            <label class="text-muted small mb-0">Tampilkan</label>\r
            <select class="form-select form-select-sm" style="width:75px"\r
                    [(ngModel)]="dtMasukPageSize" (ngModelChange)="onMasukPageSize()">\r
              @for (n of pageSizeOptions; track n) {\r
                <option [value]="n">{{ n }}</option>\r
              }\r
            </select>\r
            <label class="text-muted small mb-0">entri</label>\r
          </div>\r
          <div class="d-flex align-items-center gap-2">\r
            <label class="text-muted small mb-0">Cari:</label>\r
            <input type="text" class="form-control form-control-sm" style="width:220px"\r
                   placeholder="Nama, divisi, jabatan..."\r
                   [(ngModel)]="dtMasukSearch" (ngModelChange)="onMasukSearch()" />\r
          </div>\r
        </div>\r
\r
        <div class="table-responsive">\r
          <table class="table table-hover align-middle mb-0" style="min-width:1000px">\r
            <thead class="table-light">\r
              <tr>\r
                <th style="width:240px;cursor:pointer" (click)="sortMasuk('namaKaryawan')">\r
                  Karyawan <i class="bx {{ sortIcon(dtMasukSort(), 'namaKaryawan') }} ms-1"></i>\r
                </th>\r
                <th class="text-center;cursor:pointer" style="cursor:pointer" (click)="sortMasuk('jamMasuk')">\r
                  Presensi Masuk <i class="bx {{ sortIcon(dtMasukSort(), 'jamMasuk') }} ms-1"></i>\r
                </th>\r
                <th class="text-center">Mulai Istirahat</th>\r
                <th class="text-center">Selesai Istirahat</th>\r
                <th class="text-center;cursor:pointer" style="cursor:pointer" (click)="sortMasuk('jamKeluar')">\r
                  Presensi Keluar <i class="bx {{ sortIcon(dtMasukSort(), 'jamKeluar') }} ms-1"></i>\r
                </th>\r
                <th class="text-center">Mulai Lembur</th>\r
                <th class="text-center">Selesai Lembur</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (a of masukPagedList(); track a.id) {\r
                <tr>\r
                  <!-- Kolom Karyawan -->\r
                  <td>\r
                    <div class="d-flex align-items-center gap-2">\r
                      @if (fotoUrl(a.fotoProfil); as url) {\r
                        <img [src]="url" class="rounded-circle"\r
                             style="width:42px;height:42px;object-fit:cover;border:2px solid #e9ecef;flex-shrink:0" />\r
                      } @else {\r
                        <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                             style="width:42px;height:42px;background:#f3f4f6;color:#9ca3af;flex-shrink:0">\r
                          <i class="bx bx-user"></i>\r
                        </div>\r
                      }\r
                      <div>\r
                        <div class="fw-semibold" style="font-size:.85rem">{{ a.namaKaryawan }}</div>\r
                        <div class="text-muted" style="font-size:.75rem">\r
                          @if (a.namaJabatan) { <span>{{ a.namaJabatan }}</span> }\r
                          @if (a.namaDivisi) { <span class="ms-1">| {{ a.namaDivisi }}</span> }\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </td>\r
                  <!-- Presensi Masuk -->\r
                  <td class="text-center">\r
                    <div class="d-flex justify-content-center gap-1 mb-1">\r
                      <i class="bx bx-mobile-alt text-secondary" title="Info Perangkat"\r
                         style="cursor:pointer" (click)="openPerangkatPopup(a)"></i>\r
                      @if (a.lokasiMasukUrl) {\r
                        <a [href]="a.lokasiMasukUrl" target="_blank">\r
                          <i class="bx bx-map-pin text-danger"></i>\r
                        </a>\r
                      } @else {\r
                        <i class="bx bx-map-pin text-secondary"></i>\r
                      }\r
                      <i class="bx bx-calendar text-danger" title="Jadwal Kerja"\r
                         style="cursor:pointer" (click)="openJadwalPopup(a)"></i>\r
                      @if (a.fotoMasukUrl) {\r
                        <a [href]="a.fotoMasukUrl" target="_blank">\r
                          <i class="bx bx-camera text-secondary"></i>\r
                        </a>\r
                      } @else {\r
                        <i class="bx bx-camera text-secondary"></i>\r
                      }\r
                      <i class="bx bx-edit text-secondary" title="Ubah Presensi"\r
                         style="cursor:pointer" (click)="openUbahPresensi(a)"></i>\r
                    </div>\r
                    <div class="fw-bold" style="font-size:1.25rem;letter-spacing:.05em"\r
                         [class.text-danger]="a.menitTerlambat > 0">\r
                      {{ formatJam(a.jamMasuk) }}\r
                    </div>\r
                    @if (a.menitTerlambat > 0) {\r
                      <div class="badge bg-danger-subtle text-danger" style="font-size:.7rem">\r
                        Terlambat {{ a.menitTerlambat }} mnt\r
                      </div>\r
                    }\r
                  </td>\r
                  <td class="text-center text-muted" style="font-size:.9rem">{{ formatJam(a.jamMulaiIstirahat) }}</td>\r
                  <td class="text-center text-muted" style="font-size:.9rem">{{ formatJam(a.jamSelesaiIstirahat) }}</td>\r
                  <!-- Presensi Keluar -->\r
                  <td class="text-center">\r
                    @if (a.jamKeluar) {\r
                      <div class="d-flex justify-content-center gap-1 mb-1">\r
                        @if (a.lokasiKeluarUrl) {\r
                          <a [href]="a.lokasiKeluarUrl" target="_blank">\r
                            <i class="bx bx-map-pin text-danger"></i>\r
                          </a>\r
                        } @else {\r
                          <i class="bx bx-map-pin text-secondary"></i>\r
                        }\r
                        @if (a.fotoKeluarUrl) {\r
                          <a [href]="a.fotoKeluarUrl" target="_blank">\r
                            <i class="bx bx-camera text-secondary"></i>\r
                          </a>\r
                        } @else {\r
                          <i class="bx bx-camera text-secondary"></i>\r
                        }\r
                      </div>\r
                      <div class="fw-bold" style="font-size:1.25rem;letter-spacing:.05em">\r
                        {{ formatJam(a.jamKeluar) }}\r
                      </div>\r
                    } @else {\r
                      <span class="text-muted">\u2014</span>\r
                    }\r
                  </td>\r
                  <td class="text-center text-muted" style="font-size:.9rem">{{ formatJam(a.jamMulaiLembur) }}</td>\r
                  <td class="text-center text-muted" style="font-size:.9rem">{{ formatJam(a.jamSelesaiLembur) }}</td>\r
                </tr>\r
              }\r
              @if (masukPagedList().length === 0) {\r
                <tr>\r
                  <td colspan="7" class="text-center text-muted py-5">\r
                    <i class="bx bx-calendar-x fs-2 d-block mb-2"></i>\r
                    {{ dtMasukSearch ? 'Tidak ada data yang cocok dengan pencarian.' : 'Tidak ada karyawan yang presensi masuk pada tanggal ini.' }}\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- DataTable Footer -->\r
        <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-2 border-top">\r
          <div class="text-muted small">{{ masukInfo() }}</div>\r
          <nav>\r
            <ul class="pagination pagination-sm mb-0 gap-1">\r
              <li class="page-item" [class.disabled]="dtMasukPage() === 1">\r
                <button class="page-link rounded" (click)="dtMasukPage.set(dtMasukPage() - 1)"\r
                        [disabled]="dtMasukPage() === 1">\r
                  <i class="bx bx-chevron-left"></i>\r
                </button>\r
              </li>\r
              @for (p of masukPagesArr(); track $index) {\r
                @if (p === '...') {\r
                  <li class="page-item disabled"><span class="page-link">\u2026</span></li>\r
                } @else {\r
                  <li class="page-item" [class.active]="dtMasukPage() === p">\r
                    <button class="page-link rounded" (click)="dtMasukPage.set(+p)">{{ p }}</button>\r
                  </li>\r
                }\r
              }\r
              <li class="page-item" [class.disabled]="dtMasukPage() === masukTotalPages()">\r
                <button class="page-link rounded" (click)="dtMasukPage.set(dtMasukPage() + 1)"\r
                        [disabled]="dtMasukPage() === masukTotalPages()">\r
                  <i class="bx bx-chevron-right"></i>\r
                </button>\r
              </li>\r
            </ul>\r
          </nav>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 TAB: Tidak/Belum Masuk \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (activeTab() === 'tidak-masuk') {\r
        <!-- DataTable Controls -->\r
        <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">\r
          <div class="d-flex align-items-center gap-2">\r
            <label class="text-muted small mb-0">Tampilkan</label>\r
            <select class="form-select form-select-sm" style="width:75px"\r
                    [(ngModel)]="dtTidakPageSize" (ngModelChange)="onTidakPageSize()">\r
              @for (n of pageSizeOptions; track n) {\r
                <option [value]="n">{{ n }}</option>\r
              }\r
            </select>\r
            <label class="text-muted small mb-0">entri</label>\r
          </div>\r
          <div class="d-flex align-items-center gap-2">\r
            <label class="text-muted small mb-0">Cari:</label>\r
            <input type="text" class="form-control form-control-sm" style="width:220px"\r
                   placeholder="Nama, divisi, jabatan..."\r
                   [(ngModel)]="dtTidakSearch" (ngModelChange)="onTidakSearch()" />\r
          </div>\r
        </div>\r
\r
        <div class="table-responsive">\r
          <table class="table table-hover align-middle mb-0" style="min-width:600px">\r
            <thead class="table-light">\r
              <tr>\r
                <th style="cursor:pointer" (click)="sortTidak('namaLengkap')">\r
                  Karyawan <i class="bx {{ sortIcon(dtTidakSort(), 'namaLengkap') }} ms-1"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortTidak('namaDivisi')">\r
                  Divisi <i class="bx {{ sortIcon(dtTidakSort(), 'namaDivisi') }} ms-1"></i>\r
                </th>\r
                <th class="text-center">Status</th>\r
                <th class="text-center">Jadwal Masuk</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (k of tidakPagedList(); track k.id) {\r
                <tr>\r
                  <td>\r
                    <div class="d-flex align-items-center gap-2">\r
                      @if (fotoUrl(k.fotoProfil); as url) {\r
                        <img [src]="url" class="rounded-circle"\r
                             style="width:42px;height:42px;object-fit:cover;border:2px solid #e9ecef;flex-shrink:0" />\r
                      } @else {\r
                        <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                             style="width:42px;height:42px;background:#f3f4f6;color:#9ca3af;flex-shrink:0">\r
                          <i class="bx bx-user"></i>\r
                        </div>\r
                      }\r
                      <div>\r
                        <div class="fw-semibold" style="font-size:.85rem">{{ k.namaLengkap }}</div>\r
                        <div class="text-muted" style="font-size:.75rem">\r
                          @if (k.namaJabatan) { <span>{{ k.namaJabatan }}</span> }\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </td>\r
                  <td class="text-center text-muted" style="font-size:.85rem">{{ k.namaDivisi || '\u2014' }}</td>\r
                  <td class="text-center">\r
                    <span class="badge bg-danger-subtle text-danger fw-semibold">Tidak/Belum Masuk</span>\r
                  </td>\r
                  <td class="text-center text-muted">\u2014</td>\r
                </tr>\r
              }\r
              @if (tidakPagedList().length === 0) {\r
                <tr>\r
                  <td colspan="4" class="text-center text-muted py-5">\r
                    @if (dtTidakSearch) {\r
                      <i class="bx bx-search fs-2 d-block mb-2"></i>\r
                      Tidak ada data yang cocok dengan pencarian.\r
                    } @else {\r
                      <i class="bx bx-check-circle fs-2 d-block mb-2 text-success"></i>\r
                      Semua karyawan sudah hadir!\r
                    }\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- DataTable Footer -->\r
        <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-2 border-top">\r
          <div class="text-muted small">{{ tidakInfo() }}</div>\r
          <nav>\r
            <ul class="pagination pagination-sm mb-0 gap-1">\r
              <li class="page-item" [class.disabled]="dtTidakPage() === 1">\r
                <button class="page-link rounded" (click)="dtTidakPage.set(dtTidakPage() - 1)"\r
                        [disabled]="dtTidakPage() === 1">\r
                  <i class="bx bx-chevron-left"></i>\r
                </button>\r
              </li>\r
              @for (p of tidakPagesArr(); track $index) {\r
                @if (p === '...') {\r
                  <li class="page-item disabled"><span class="page-link">\u2026</span></li>\r
                } @else {\r
                  <li class="page-item" [class.active]="dtTidakPage() === p">\r
                    <button class="page-link rounded" (click)="dtTidakPage.set(+p)">{{ p }}</button>\r
                  </li>\r
                }\r
              }\r
              <li class="page-item" [class.disabled]="dtTidakPage() === tidakTotalPages()">\r
                <button class="page-link rounded" (click)="dtTidakPage.set(dtTidakPage() + 1)"\r
                        [disabled]="dtTidakPage() === tidakTotalPages()">\r
                  <i class="bx bx-chevron-right"></i>\r
                </button>\r
              </li>\r
            </ul>\r
          </nav>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 TAB: Cuti / Izin / Libur (placeholder) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (activeTab() === 'cuti' || activeTab() === 'izin' || activeTab() === 'libur') {\r
        <div class="text-center text-muted py-5">\r
          <i class="bx bx-info-circle fs-2 d-block mb-2"></i>\r
          Data {{ activeTab() === 'cuti' ? 'Cuti' : activeTab() === 'izin' ? 'Izin' : 'Libur' }} untuk tanggal ini belum tersedia.\r
        </div>\r
      }\r
\r
    } <!-- end @else loading -->\r
\r
  </div><!-- card -->\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tambah Presensi \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showModal()) {\r
    <div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.4)">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-bottom">\r
            <h6 class="modal-title fw-bold">Tambah Presensi Karyawan</h6>\r
            <button type="button" class="btn-close" (click)="closeModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2">{{ modalError() }}</div>\r
            }\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Karyawan <span class="text-danger">*</span></label>\r
              <select class="form-select" [(ngModel)]="modalKaryawanId">\r
                <option value="">-- Pilih Karyawan --</option>\r
                @for (k of karyawanList(); track k.id) {\r
                  <option [value]="k.id">{{ k.namaLengkap }}</option>\r
                }\r
              </select>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Tanggal <span class="text-danger">*</span></label>\r
              <input type="date" class="form-control" [(ngModel)]="modalTanggal" />\r
            </div>\r
            <div class="row mb-3">\r
              <div class="col">\r
                <label class="form-label fw-semibold">Waktu Masuk <span class="text-danger">*</span></label>\r
                <input type="time" class="form-control" [(ngModel)]="modalWaktuMulai" />\r
              </div>\r
              <div class="col">\r
                <label class="form-label fw-semibold">Waktu Keluar</label>\r
                <input type="time" class="form-control" [(ngModel)]="modalWaktuSelesai" />\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Catatan</label>\r
              <textarea class="form-control" rows="2" [(ngModel)]="modalCatatan"\r
                        placeholder="Opsional\u2026"></textarea>\r
            </div>\r
          </div>\r
          <div class="modal-footer border-top">\r
            <button class="btn btn-secondary" (click)="closeModal()">Batal</button>\r
            <button class="btn btn-primary px-4" (click)="submitModal()" [disabled]="modalSaving()">\r
              @if (modalSaving()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Popup Info Perangkat \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (popupPerangkat(); as p) {\r
    <div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.4)" (click)="closePerangkatPopup()">\r
      <div class="modal-dialog modal-dialog-centered modal-sm" (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header py-2 border-bottom" style="background:#f8f9fa">\r
            <div class="d-flex align-items-center gap-2">\r
              <i class="bx bx-mobile-alt fs-5 text-primary"></i>\r
              <span class="fw-bold" style="font-size:.95rem">Info Perangkat</span>\r
            </div>\r
            <button type="button" class="btn-close btn-close-sm" (click)="closePerangkatPopup()"></button>\r
          </div>\r
          <div class="modal-body px-4 py-3" style="font-size:.85rem">\r
            @if (!p.namaPerangkat && !p.deviceId) {\r
              <div class="text-muted text-center py-2">\r
                <i class="bx bx-info-circle me-1"></i> Data perangkat tidak tersedia\r
              </div>\r
            } @else {\r
              <table class="table table-sm table-borderless mb-0">\r
                <tbody>\r
                  <tr>\r
                    <td class="text-muted fw-semibold pe-3" style="white-space:nowrap;width:45%">Nama Perangkat</td>\r
                    <td class="fw-medium">{{ p.namaPerangkat || '\u2014' }}</td>\r
                  </tr>\r
                  <tr>\r
                    <td class="text-muted fw-semibold pe-3">Manufaktur Perangkat</td>\r
                    <td class="fw-medium">{{ p.manufaktur || '\u2014' }}</td>\r
                  </tr>\r
                  <tr>\r
                    <td class="text-muted fw-semibold pe-3">Id Perangkat</td>\r
                    <td class="fw-medium text-break">{{ p.deviceId || '\u2014' }}</td>\r
                  </tr>\r
                  <tr>\r
                    <td class="text-muted fw-semibold pe-3">Model Perangkat</td>\r
                    <td class="fw-medium">{{ p.modelPerangkat || '\u2014' }}</td>\r
                  </tr>\r
                  <tr>\r
                    <td class="text-muted fw-semibold pe-3">Platform / OS</td>\r
                    <td class="fw-medium">{{ p.platform || '\u2014' }}</td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Popup Jadwal Kerja \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (popupJadwal(); as j) {\r
    <div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.4)" (click)="closeJadwalPopup()">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:420px" (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-bottom">\r
            <h6 class="modal-title fw-bold">Jadwal Kerja</h6>\r
            <button type="button" class="btn-close" (click)="closeJadwalPopup()"></button>\r
          </div>\r
          <div class="modal-body px-4 py-3">\r
            <table class="table table-sm table-borderless mb-3" style="font-size:.88rem">\r
              <tbody>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4" style="width:55%">Jam Masuk</td>\r
                  <td>{{ j.jamKerjaMulai || '\u2014' }}</td>\r
                </tr>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4">Jam Keluar</td>\r
                  <td>{{ j.jamKerjaSelesai || '\u2014' }}</td>\r
                </tr>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4">Toleransi Keterlambatan</td>\r
                  <td>{{ j.toleransiKeterlambatan != null ? j.toleransiKeterlambatan + ' Menit' : '\u2014' }}</td>\r
                </tr>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4">Mulai Istirahat</td>\r
                  <td>{{ j.jamIstirahatMulai || '\u2014' }}</td>\r
                </tr>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4">Selesai Istirahat</td>\r
                  <td>{{ j.jamIstirahatSelesai || '\u2014' }}</td>\r
                </tr>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4">Maks. Menit Istirahat</td>\r
                  <td>{{ j.maksMenitIstirahat != null ? j.maksMenitIstirahat + ' Menit' : '\u2014' }}</td>\r
                </tr>\r
                <tr>\r
                  <td class="fw-semibold text-dark pe-4">Zona Waktu</td>\r
                  <td>{{ j.zonaWaktu || '\u2014' }}</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
            <div class="d-grid gap-2">\r
              <button class="btn btn-primary" (click)="openUbahJadwal()"\r
                      [disabled]="hapusSaving()">\r
                Ubah Jadwal Kerja\r
              </button>\r
              <button class="btn btn-primary" (click)="hapusJadwal()"\r
                      [disabled]="hapusSaving()">\r
                @if (hapusSaving()) {\r
                  <span class="spinner-border spinner-border-sm me-2"></span>Menghapus...\r
                } @else {\r
                  Hapus Jadwal Kerja\r
                }\r
              </button>\r
              @if (hapusError()) {\r
                <div class="alert alert-danger py-2 mb-0" style="font-size:.82rem">\r
                  <i class="bx bx-error-circle me-1"></i>{{ hapusError() }}\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Popup Ubah Jadwal Kerja \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showUbahJadwal()) {\r
    <div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1060"\r
         (click)="closeUbahJadwal()">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:440px"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-bottom">\r
            <h6 class="modal-title fw-bold">Jadwal Kerja</h6>\r
            <button type="button" class="btn-close" (click)="closeUbahJadwal()"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body px-4 py-4">\r
\r
            <!-- Sub-judul -->\r
            <div class="fw-bold mb-1" style="font-size:.95rem">Ubah Jadwal Kerja</div>\r
            <div class="text-muted mb-4" style="font-size:.8rem">\r
              <i class="bx bx-info-circle me-1"></i>Hanya bisa pilih salah satu jadwal\r
            </div>\r
\r
            <!-- Jam Masuk -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">\r
                Jam Masuk <span class="text-danger">*</span>\r
              </label>\r
              <input type="time" class="form-control" [(ngModel)]="ubahJamMasuk" />\r
            </div>\r
\r
            <!-- Jam Keluar -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">\r
                Jam Keluar <span class="text-danger">*</span>\r
              </label>\r
              <input type="time" class="form-control" [(ngModel)]="ubahJamKeluar" />\r
            </div>\r
\r
            <!-- Toleransi Keterlambatan -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Toleransi Keterlambatan</label>\r
              <div class="input-group">\r
                <input type="number" class="form-control" [(ngModel)]="ubahToleransi"\r
                       min="0" placeholder="0" />\r
                <span class="input-group-text">Menit</span>\r
              </div>\r
            </div>\r
\r
            <!-- Mulai Istirahat -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Mulai Istirahat</label>\r
              <input type="time" class="form-control" [(ngModel)]="ubahMulaiIstirahat" />\r
            </div>\r
\r
            <!-- Selesai Istirahat -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Selesai Istirahat</label>\r
              <input type="time" class="form-control" [(ngModel)]="ubahSelesaiIstirahat" />\r
            </div>\r
\r
            <!-- Maks. Menit Istirahat -->\r
            <div class="mb-4">\r
              <label class="form-label fw-semibold">Maks. Menit Istirahat</label>\r
              <div class="input-group">\r
                <input type="number" class="form-control" [(ngModel)]="ubahMaksMenit"\r
                       min="0" placeholder="0" />\r
                <span class="input-group-text">Menit</span>\r
              </div>\r
            </div>\r
\r
            @if (ubahError()) {\r
              <div class="alert alert-danger py-2" style="font-size:.85rem">\r
                <i class="bx bx-error-circle me-1"></i>{{ ubahError() }}\r
              </div>\r
            }\r
\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-top gap-2">\r
            <button class="btn btn-secondary flex-fill" (click)="closeUbahJadwal()"\r
                    [disabled]="ubahSaving()">Batal</button>\r
            <button class="btn btn-primary flex-fill" (click)="simpanUbahJadwal()"\r
                    [disabled]="ubahSaving()">\r
              @if (ubahSaving()) {\r
                <span class="spinner-border spinner-border-sm me-2"></span>Menyimpan...\r
              } @else {\r
                Simpan\r
              }\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Popup Ubah Presensi \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (popupUbahPresensi(); as a) {\r
    <div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.4);z-index:1050"\r
         (click)="closeUbahPresensi()">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:400px"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow">\r
\r
          <div class="modal-header border-bottom">\r
            <h6 class="modal-title fw-bold">Ubah Presensi</h6>\r
            <button type="button" class="btn-close" (click)="closeUbahPresensi()"></button>\r
          </div>\r
\r
          <div class="modal-body px-4 py-4">\r
            <!-- Info karyawan + waktu -->\r
            <div class="mb-1 fw-semibold" style="font-size:.9rem">\r
              Masuk ({{ a.namaKaryawan }})\r
            </div>\r
            <div class="text-muted mb-4" style="font-size:.85rem">\r
              {{ formatTanggalLengkap(a.tanggal) }} &#64; {{ formatJam(a.jamMasuk) }}\r
            </div>\r
\r
            <div class="text-muted mb-3" style="font-size:.85rem">\r
              Silakan pilih aksi yang akan dilakukan:\r
            </div>\r
\r
            <!-- Tombol aksi -->\r
            <div class="d-grid gap-2">\r
              <button class="btn btn-outline-danger text-start px-3"\r
                      [disabled]="batalkanSaving()"\r
                      (click)="batalkanPresensi()">\r
                @if (batalkanSaving()) {\r
                  <span class="spinner-border spinner-border-sm me-2"></span>Membatalkan...\r
                } @else {\r
                  <i class="bx bx-x-circle me-2"></i>Batalkan Presensi\r
                }\r
              </button>\r
              <button class="btn btn-outline-primary text-start px-3"\r
                      [disabled]="batalkanSaving()"\r
                      (click)="openUbahWaktu()">\r
                <i class="bx bx-time me-2"></i>Waktu Presensi\r
              </button>\r
            </div>\r
\r
            @if (batalkanError()) {\r
              <div class="alert alert-danger py-2 mt-3 mb-0" style="font-size:.82rem">\r
                <i class="bx bx-error-circle me-1"></i>{{ batalkanError() }}\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Sub-popup Ubah Waktu Presensi \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showUbahWaktu()) {\r
    <div class="modal show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1060"\r
         (click)="closeUbahWaktu()">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:400px"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow">\r
\r
          <div class="modal-header border-bottom">\r
            <h6 class="modal-title fw-bold">Ubah Waktu Presensi</h6>\r
            <button type="button" class="btn-close" (click)="closeUbahWaktu()"></button>\r
          </div>\r
\r
          <div class="modal-body px-4 py-4">\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">\r
                Jam Masuk <span class="text-danger">*</span>\r
              </label>\r
              <input type="time" class="form-control" [(ngModel)]="ubahWaktuJamMasuk" />\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Jam Keluar</label>\r
              <input type="time" class="form-control" [(ngModel)]="ubahWaktuJamKeluar" />\r
              <div class="form-text">Kosongkan jika karyawan belum keluar.</div>\r
            </div>\r
\r
            @if (ubahWaktuError()) {\r
              <div class="alert alert-danger py-2 mb-0" style="font-size:.82rem">\r
                <i class="bx bx-error-circle me-1"></i>{{ ubahWaktuError() }}\r
              </div>\r
            }\r
          </div>\r
\r
          <div class="modal-footer border-top gap-2">\r
            <button class="btn btn-secondary flex-fill" (click)="closeUbahWaktu()"\r
                    [disabled]="ubahWaktuSaving()">Batal</button>\r
            <button class="btn btn-primary flex-fill" (click)="simpanUbahWaktu()"\r
                    [disabled]="ubahWaktuSaving()">\r
              @if (ubahWaktuSaving()) {\r
                <span class="spinner-border spinner-border-sm me-2"></span>Menyimpan...\r
              } @else {\r
                Simpan\r
              }\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Ekspor Excel \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showEkspor()) {\r
    <app-ekspor-excel-modal\r
      [tanggalAwal]="tanggalFilter()"\r
      (closed)="tutupEkspor()">\r
    </app-ekspor-excel-modal>\r
  }\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KehadiranHarianComponent, { className: "KehadiranHarianComponent", filePath: "src/app/features/kehadiran/harian/kehadiran-harian.component.ts", lineNumber: 25 });
})();
export {
  KehadiranHarianComponent
};
//# sourceMappingURL=chunk-UVDH5YVE.js.map
