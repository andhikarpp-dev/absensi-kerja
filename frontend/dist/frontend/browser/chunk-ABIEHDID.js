import {
  HARI_LIST
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
  NumberValueAccessor
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/pola-kerja/shift/shift-list.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function ShiftListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_14_Template_button_click_4_listener() {
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
function ShiftListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 39)(2, "div", 40)(3, "div", 41);
    \u0275\u0275element(4, "i", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 43);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_15_Template_button_click_6_listener() {
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
function ShiftListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275element(2, "span", 45);
    \u0275\u0275text(3, " Memuat... ");
    \u0275\u0275elementEnd()();
  }
}
function ShiftListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275text(4, "Belum ada data pola kerja shift.");
    \u0275\u0275elementEnd()()();
  }
}
function ShiftListComponent_Conditional_53_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 25);
    \u0275\u0275element(8, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 25)(14, "button", 50);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_53_For_1_Template_button_click_14_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(p_r5));
    });
    \u0275\u0275element(15, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 52);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_53_For_1_Template_button_click_16_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRiwayat(p_r5));
    });
    \u0275\u0275element(17, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 54);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_53_For_1_Template_button_click_18_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.askDelete(p_r5.id));
    });
    \u0275\u0275element(19, "i", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.jamKerjaLabel(p_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.jamIstirahatLabel(p_r5));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", p_r5.warna || "#000");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r5.toleransi, " Menit");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.catatan);
  }
}
function ShiftListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ShiftListComponent_Conditional_53_For_1_Template, 20, 7, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.paged());
  }
}
function ShiftListComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 31)(1, "a", 32);
    \u0275\u0275listener("click", function ShiftListComponent_For_66_Template_a_click_1_listener() {
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
function ShiftListComponent_Conditional_73_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalError());
  }
}
function ShiftListComponent_Conditional_73_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 81);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function ShiftListComponent_Conditional_73_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 82);
    \u0275\u0275text(1, " Simpan ");
  }
}
function ShiftListComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 56)(2, "div", 57)(3, "div", 58)(4, "h5", 59);
    \u0275\u0275element(5, "i", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_73_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 61);
    \u0275\u0275conditionalCreate(9, ShiftListComponent_Conditional_73_Conditional_9_Template, 2, 1, "div", 62);
    \u0275\u0275elementStart(10, "div", 63)(11, "div", 64)(12, "label", 65);
    \u0275\u0275text(13, "Nama Pola Kerja ");
    \u0275\u0275elementStart(14, "span", 66);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.namaPolaKerja, $event) || (ctx_r1.modalData.namaPolaKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 68)(18, "label", 65);
    \u0275\u0275text(19, "Warna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.warna, $event) || (ctx_r1.modalData.warna = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 70)(22, "label", 65);
    \u0275\u0275text(23, "Jam Masuk ");
    \u0275\u0275elementStart(24, "span", 66);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.jamMasuk, $event) || (ctx_r1.modalData.jamMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 70)(28, "label", 65);
    \u0275\u0275text(29, "Jam Keluar ");
    \u0275\u0275elementStart(30, "span", 66);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.jamKeluar, $event) || (ctx_r1.modalData.jamKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 70)(34, "label", 65);
    \u0275\u0275text(35, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.mulaiIstirahat, $event) || (ctx_r1.modalData.mulaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 70)(38, "label", 65);
    \u0275\u0275text(39, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.selesaiIstirahat, $event) || (ctx_r1.modalData.selesaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 70)(42, "label", 65);
    \u0275\u0275text(43, "Toleransi Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 72)(45, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.toleransi, $event) || (ctx_r1.modalData.toleransi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 74);
    \u0275\u0275text(47, "Menit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 75)(49, "label", 65);
    \u0275\u0275text(50, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "textarea", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ShiftListComponent_Conditional_73_Template_textarea_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.catatan, $event) || (ctx_r1.modalData.catatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 77)(53, "button", 78);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_73_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFormModal());
    });
    \u0275\u0275element(54, "i", 79);
    \u0275\u0275text(55, " Tutup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 80);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_73_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveShift());
    });
    \u0275\u0275conditionalCreate(57, ShiftListComponent_Conditional_73_Conditional_57_Template, 2, 0)(58, ShiftListComponent_Conditional_73_Conditional_58_Template, 2, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bx-plus", !ctx_r1.editingId())("bx-edit", ctx_r1.editingId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId() ? "Edit Pola Kerja Shift" : "Tambah Pola Kerja Shift", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modalError() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.namaPolaKerja);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.warna);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(25, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.jamMasuk);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.jamKeluar);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(27, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.mulaiIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.selesaiIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(29, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.toleransi);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.catatan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 57 : 58);
  }
}
function ShiftListComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 83)(2, "div", 57)(3, "div", 58)(4, "h5", 59);
    \u0275\u0275element(5, "i", 84);
    \u0275\u0275text(6, "Pengaturan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 38);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_74_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePengaturan());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 61)(9, "div", 85)(10, "label", 86);
    \u0275\u0275text(11, " SPV dapat menambah Pola Kerja - Shift ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 87)(13, "div", 88)(14, "input", 89);
    \u0275\u0275listener("change", function ShiftListComponent_Conditional_74_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMenambah.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 90);
    \u0275\u0275text(16, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 88)(18, "input", 91);
    \u0275\u0275listener("change", function ShiftListComponent_Conditional_74_Template_input_change_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMenambah.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 92);
    \u0275\u0275text(20, "TIDAK");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 93)(22, "label", 86);
    \u0275\u0275text(23, " SPV dapat memperbarui Pola Kerja - Shift ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 87)(25, "div", 88)(26, "input", 94);
    \u0275\u0275listener("change", function ShiftListComponent_Conditional_74_Template_input_change_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMemperbarui.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 95);
    \u0275\u0275text(28, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 88)(30, "input", 96);
    \u0275\u0275listener("change", function ShiftListComponent_Conditional_74_Template_input_change_30_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.spvDapatMemperbarui.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 97);
    \u0275\u0275text(32, "TIDAK");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "div", 77)(34, "button", 98);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_74_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePengaturan());
    });
    \u0275\u0275text(35, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 99);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_74_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r9);
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
function ShiftListComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 100)(2, "div", 57)(3, "div", 58)(4, "h5", 59);
    \u0275\u0275element(5, "i", 101);
    \u0275\u0275text(6, " Riwayat - ");
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 38);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_75_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 61)(11, "p", 103);
    \u0275\u0275text(12, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 77)(14, "button", 98);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_75_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
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
function ShiftListComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 83)(2, "div", 57)(3, "div", 104)(4, "h5", 105);
    \u0275\u0275element(5, "i", 106);
    \u0275\u0275text(6, "Hapus Pola Kerja Shift? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 107);
    \u0275\u0275text(8, " Data yang dihapus tidak dapat dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 108)(10, "button", 98);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_76_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 109);
    \u0275\u0275listener("click", function ShiftListComponent_Conditional_76_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
var SETTINGS_KEY = "pola_kerja_shift_settings";
var ShiftListComponent = class _ShiftListComponent {
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
    this.spvDapatMenambah = signal(true, ...ngDevMode ? [{ debugName: "spvDapatMenambah" }] : (
      /* istanbul ignore next */
      []
    ));
    this.spvDapatMemperbarui = signal(true, ...ngDevMode ? [{ debugName: "spvDapatMemperbarui" }] : (
      /* istanbul ignore next */
      []
    ));
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
    const s = localStorage.getItem(SETTINGS_KEY);
    if (s) {
      try {
        const obj = JSON.parse(s);
        if (typeof obj.spvDapatMenambah === "boolean")
          this.spvDapatMenambah.set(obj.spvDapatMenambah);
        if (typeof obj.spvDapatMemperbarui === "boolean")
          this.spvDapatMemperbarui.set(obj.spvDapatMemperbarui);
      } catch (e) {
      }
    }
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.svc.findAll("SHIFT").subscribe({
      next: (data) => {
        this.list.set((data || []).map((p) => this.fromPola(p)));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message || "Gagal memuat data.");
        this.loading.set(false);
      }
    });
  }
  // ── helpers ──────────────────────────────────────────────────
  jamKerjaLabel(p) {
    if (!p.jamMasuk && !p.jamKeluar)
      return "-";
    return `${p.jamMasuk || "--:--"} - ${p.jamKeluar || "--:--"}`;
  }
  jamIstirahatLabel(p) {
    if (!p.mulaiIstirahat && !p.selesaiIstirahat)
      return "";
    return `${p.mulaiIstirahat || "--:--"} - ${p.selesaiIstirahat || "--:--"}`;
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
    this.showFormModal.set(true);
  }
  openEdit(p) {
    this.editingId.set(p.id);
    this.modalError.set("");
    this.modalData = __spreadValues({}, p);
    this.showFormModal.set(true);
  }
  closeFormModal() {
    this.showFormModal.set(false);
  }
  saveShift() {
    if (!this.modalData.namaPolaKerja?.trim()) {
      this.modalError.set("Nama pola kerja wajib diisi.");
      return;
    }
    if (!this.modalData.jamMasuk || !this.modalData.jamKeluar) {
      this.modalError.set("Jam masuk dan jam keluar wajib diisi.");
      return;
    }
    this.saving.set(true);
    const req = this.toRequest(this.modalData);
    const id = this.editingId();
    const obs = id ? this.svc.update(id, req) : this.svc.create(req);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? "Pola kerja shift berhasil diperbarui." : "Pola kerja shift berhasil ditambahkan.");
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.modalError.set(err?.error?.message || "Gagal menyimpan pola kerja shift.");
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
        this.showToast("Pola kerja shift berhasil dihapus.");
        this.load();
      },
      error: (err) => {
        this.error.set(err?.error?.message || "Gagal menghapus pola kerja shift.");
        this.confirmDeleteId.set(null);
      }
    });
  }
  // ── Riwayat ──────────────────────────────────────────────────
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
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      spvDapatMenambah: this.spvDapatMenambah(),
      spvDapatMemperbarui: this.spvDapatMemperbarui()
    }));
    this.showSettingsModal.set(false);
    this.showToast("Pengaturan berhasil disimpan.");
  }
  showToast(msg, durationMs = 3e3) {
    this.successMsg.set(msg);
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.successMsg.set(""), durationMs);
  }
  // ── Mapper PolaKerja <-> ShiftView ───────────────────────────
  fromPola(p) {
    const first = (p.hariList || [])[0];
    return {
      id: p.id,
      namaPolaKerja: p.namaPolaKerja,
      jamMasuk: first?.jamMasuk || "",
      jamKeluar: first?.jamKeluar || "",
      mulaiIstirahat: first?.mulaiIstirahat || "",
      selesaiIstirahat: first?.selesaiIstirahat || "",
      warna: p.warna || "#000000",
      toleransi: p.toleransiKeterlambatan ?? 0,
      catatan: p.catatan || ""
    };
  }
  toRequest(s) {
    const hariList = HARI_LIST.map((h) => ({
      hari: h,
      polaHari: "HARI_KERJA",
      jamMasuk: s.jamMasuk,
      jamKeluar: s.jamKeluar,
      mulaiIstirahat: s.mulaiIstirahat,
      selesaiIstirahat: s.selesaiIstirahat,
      maksMenitIstirahat: 60
    }));
    return {
      namaPolaKerja: s.namaPolaKerja,
      toleransiKeterlambatan: s.toleransi ?? 0,
      jenisJadwal: "JAM_TETAP",
      kategori: "SHIFT",
      warna: s.warna,
      catatan: s.catatan,
      hariList
    };
  }
  empty() {
    return {
      id: 0,
      namaPolaKerja: "",
      jamMasuk: "",
      jamKeluar: "",
      mulaiIstirahat: "",
      selesaiIstirahat: "",
      warna: "#000000",
      toleransi: 20,
      catatan: ""
    };
  }
  static {
    this.\u0275fac = function ShiftListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShiftListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShiftListComponent, selectors: [["app-shift-list"]], decls: 77, vars: 18, consts: [[1, "mb-3"], [1, "mb-2", "fw-bold"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0", "small"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], ["href", "javascript:;", 1, "text-primary", "text-decoration-none"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-muted"], [1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1080"], [1, "card", "shadow-sm"], [1, "card-body"], [1, "fw-bold", "mb-3"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "mb-3", "gap-2"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "input-group", 2, "max-width", "260px"], ["type", "text", "placeholder", "Cari", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary"], [1, "bx", "bx-search"], [1, "btn", "btn-primary", 3, "click"], [1, "bx", "bx-plus-circle", "me-1"], [1, "bx", "bx-cog", "me-1"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "table-light"], [1, "text-center"], [2, "width", "90px"], [2, "width", "160px"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mt-3"], [1, "fw-semibold", "small"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1060"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "flex-grow-1"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "show", "align-items-center", "text-white", "bg-success", "border-0", "shadow"], [1, "d-flex"], [1, "toast-body"], [1, "bx", "bx-check-circle", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"], ["colspan", "7", 1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["colspan", "7", 1, "text-center", "py-4", "text-muted"], [1, "bx", "bx-folder-open", 2, "font-size", "2.2rem"], [1, "mt-1"], [1, "d-inline-block", "rounded", 2, "width", "60px", "height", "18px", "border", "1px solid rgba(0,0,0,.1)"], ["title", "Edit", 1, "btn", "btn-sm", "btn-light", "border", "me-1", 3, "click"], [1, "bx", "bx-edit"], ["title", "Riwayat", 1, "btn", "btn-sm", "btn-light", "border", "me-1", 3, "click"], [1, "bx", "bx-history"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bx", "bx-trash"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bx", "me-2"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "row", "g-3"], [1, "col-md-8"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "cth. Shift 1 Jmart", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-md-4"], ["type", "color", 1, "form-control", "form-control-color", "w-100", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-md-6"], ["type", "time", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-group"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-group-text"], [1, "col-12"], ["rows", "2", "placeholder", "Catatan tambahan (opsional)", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-x", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"], [1, "modal-dialog", "modal-dialog-centered"], [1, "bx", "bx-cog", "me-2"], [1, "mb-4"], [1, "form-label", "fw-semibold", "mb-2"], [1, "d-flex", "gap-4"], [1, "form-check"], ["type", "radio", "id", "spvShiftTambahYa", "name", "spvShiftTambah", 1, "form-check-input", 3, "change", "checked"], ["for", "spvShiftTambahYa", 1, "form-check-label"], ["type", "radio", "id", "spvShiftTambahTidak", "name", "spvShiftTambah", 1, "form-check-input", 3, "change", "checked"], ["for", "spvShiftTambahTidak", 1, "form-check-label"], [1, "mb-2"], ["type", "radio", "id", "spvShiftUpdateYa", "name", "spvShiftUpdate", 1, "form-check-input", 3, "change", "checked"], ["for", "spvShiftUpdateYa", 1, "form-check-label"], ["type", "radio", "id", "spvShiftUpdateTidak", "name", "spvShiftUpdate", 1, "form-check-input", 3, "change", "checked"], ["for", "spvShiftUpdateTidak", 1, "form-check-label"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "bx", "bx-history", "me-2"], [1, "text-primary"], [1, "text-muted", "text-center", "py-3", "mb-0"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted"], [1, "modal-footer", "border-0"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function ShiftListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "h4", 1);
        \u0275\u0275text(3, "Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "ol", 3)(6, "li", 4)(7, "a", 5);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 4)(10, "a", 6);
        \u0275\u0275text(11, "Pola Kerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 7);
        \u0275\u0275text(13, "Shift");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(14, ShiftListComponent_Conditional_14_Template, 5, 1, "div", 8);
        \u0275\u0275conditionalCreate(15, ShiftListComponent_Conditional_15_Template, 7, 1, "div", 9);
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "h5", 12);
        \u0275\u0275text(19, "Pola Kerja - Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "input", 16);
        \u0275\u0275listener("ngModelChange", function ShiftListComponent_Template_input_ngModelChange_23_listener($event) {
          ctx.query.set($event);
          return ctx.onSearchChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275element(25, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 19);
        \u0275\u0275listener("click", function ShiftListComponent_Template_button_click_26_listener() {
          return ctx.openTambah();
        });
        \u0275\u0275element(27, "i", 20);
        \u0275\u0275text(28, " Tambah Pola Kerja ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 19);
        \u0275\u0275listener("click", function ShiftListComponent_Template_button_click_29_listener() {
          return ctx.openPengaturan();
        });
        \u0275\u0275element(30, "i", 21);
        \u0275\u0275text(31, " Pengaturan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 22)(33, "table", 23)(34, "thead", 24)(35, "tr", 25)(36, "th");
        \u0275\u0275text(37, "Nama Pola Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Jam Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Jam Istirahat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th", 26);
        \u0275\u0275text(43, "Warna");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Toleransi Keterlambatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Catatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th", 27);
        \u0275\u0275text(49, "Aksi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275conditionalCreate(51, ShiftListComponent_Conditional_51_Template, 4, 0, "tr")(52, ShiftListComponent_Conditional_52_Template, 5, 0, "tr")(53, ShiftListComponent_Conditional_53_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 28)(55, "div", 29);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "nav")(58, "ul", 30)(59, "li", 31)(60, "a", 32);
        \u0275\u0275listener("click", function ShiftListComponent_Template_a_click_60_listener() {
          return ctx.goToPage(1);
        });
        \u0275\u0275text(61, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "li", 31)(63, "a", 32);
        \u0275\u0275listener("click", function ShiftListComponent_Template_a_click_63_listener() {
          return ctx.goToPage(ctx.page() - 1);
        });
        \u0275\u0275text(64, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(65, ShiftListComponent_For_66_Template, 3, 3, "li", 33, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(67, "li", 31)(68, "a", 32);
        \u0275\u0275listener("click", function ShiftListComponent_Template_a_click_68_listener() {
          return ctx.goToPage(ctx.page() + 1);
        });
        \u0275\u0275text(69, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "li", 31)(71, "a", 32);
        \u0275\u0275listener("click", function ShiftListComponent_Template_a_click_71_listener() {
          return ctx.goToPage(ctx.totalPages());
        });
        \u0275\u0275text(72, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275conditionalCreate(73, ShiftListComponent_Conditional_73_Template, 59, 32, "div", 34);
        \u0275\u0275conditionalCreate(74, ShiftListComponent_Conditional_74_Template, 38, 4, "div", 34);
        \u0275\u0275conditionalCreate(75, ShiftListComponent_Conditional_75_Template, 16, 1, "div", 34);
        \u0275\u0275conditionalCreate(76, ShiftListComponent_Conditional_76_Template, 14, 0, "div", 35);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg() ? 15 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.query());
        \u0275\u0275advance(28);
        \u0275\u0275conditional(ctx.loading() ? 51 : ctx.paged().length === 0 ? 52 : 53);
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
        \u0275\u0275conditional(ctx.showFormModal() ? 73 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSettingsModal() ? 74 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() && ctx.riwayatItem() ? 75 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 76 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShiftListComponent, [{
    type: Component,
    args: [{ selector: "app-shift-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Page header -->\r
  <div class="mb-3">\r
    <h4 class="mb-2 fw-bold">Shift</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0 p-0 small">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><a href="javascript:;" class="text-primary text-decoration-none">Pola Kerja</a></li>\r
        <li class="breadcrumb-item active text-muted" aria-current="page">Shift</li>\r
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
      <h5 class="fw-bold mb-3">Pola Kerja - Shift</h5>\r
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
              <th>Jam Kerja</th>\r
              <th>Jam Istirahat</th>\r
              <th style="width:90px">Warna</th>\r
              <th>Toleransi Keterlambatan</th>\r
              <th>Catatan</th>\r
              <th style="width:160px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (loading()) {\r
              <tr><td colspan="7" class="text-center py-4">\r
                <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
              </td></tr>\r
            } @else if (paged().length === 0) {\r
              <tr><td colspan="7" class="text-center py-4 text-muted">\r
                <i class="bx bx-folder-open" style="font-size:2.2rem"></i>\r
                <div class="mt-1">Belum ada data pola kerja shift.</div>\r
              </td></tr>\r
            } @else {\r
              @for (p of paged(); track p.id) {\r
                <tr>\r
                  <td>{{ p.namaPolaKerja }}</td>\r
                  <td class="text-center">{{ jamKerjaLabel(p) }}</td>\r
                  <td class="text-center">{{ jamIstirahatLabel(p) }}</td>\r
                  <td class="text-center">\r
                    <span class="d-inline-block rounded"\r
                          [style.background]="p.warna || '#000'"\r
                          style="width:60px;height:18px;border:1px solid rgba(0,0,0,.1)"></span>\r
                  </td>\r
                  <td>{{ p.toleransi }} Menit</td>\r
                  <td>{{ p.catatan }}</td>\r
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
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Tambah/Edit Shift \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-lg modal-dialog-scrollable">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx me-2" [class.bx-plus]="!editingId()" [class.bx-edit]="editingId()"></i>\r
              {{ editingId() ? 'Edit Pola Kerja Shift' : 'Tambah Pola Kerja Shift' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeFormModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2">{{ modalError() }}</div>\r
            }\r
\r
            <div class="row g-3">\r
              <div class="col-md-8">\r
                <label class="form-label">Nama Pola Kerja <span class="text-danger">*</span></label>\r
                <input type="text" class="form-control" [(ngModel)]="modalData.namaPolaKerja"\r
                       [ngModelOptions]="{standalone: true}" placeholder="cth. Shift 1 Jmart" />\r
              </div>\r
              <div class="col-md-4">\r
                <label class="form-label">Warna</label>\r
                <input type="color" class="form-control form-control-color w-100"\r
                       [(ngModel)]="modalData.warna" [ngModelOptions]="{standalone: true}" />\r
              </div>\r
\r
              <div class="col-md-6">\r
                <label class="form-label">Jam Masuk <span class="text-danger">*</span></label>\r
                <input type="time" class="form-control" [(ngModel)]="modalData.jamMasuk"\r
                       [ngModelOptions]="{standalone: true}" />\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label">Jam Keluar <span class="text-danger">*</span></label>\r
                <input type="time" class="form-control" [(ngModel)]="modalData.jamKeluar"\r
                       [ngModelOptions]="{standalone: true}" />\r
              </div>\r
\r
              <div class="col-md-6">\r
                <label class="form-label">Mulai Istirahat</label>\r
                <input type="time" class="form-control" [(ngModel)]="modalData.mulaiIstirahat"\r
                       [ngModelOptions]="{standalone: true}" />\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label">Selesai Istirahat</label>\r
                <input type="time" class="form-control" [(ngModel)]="modalData.selesaiIstirahat"\r
                       [ngModelOptions]="{standalone: true}" />\r
              </div>\r
\r
              <div class="col-md-6">\r
                <label class="form-label">Toleransi Keterlambatan</label>\r
                <div class="input-group">\r
                  <input type="number" min="0" class="form-control"\r
                         [(ngModel)]="modalData.toleransi" [ngModelOptions]="{standalone: true}" />\r
                  <span class="input-group-text">Menit</span>\r
                </div>\r
              </div>\r
\r
              <div class="col-12">\r
                <label class="form-label">Catatan</label>\r
                <textarea rows="2" class="form-control" [(ngModel)]="modalData.catatan"\r
                          [ngModelOptions]="{standalone: true}"\r
                          placeholder="Catatan tambahan (opsional)"></textarea>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-secondary btn-sm px-4" (click)="closeFormModal()">\r
              <i class="bx bx-x me-1"></i> Tutup\r
            </button>\r
            <button type="button" class="btn btn-primary btn-sm px-4"\r
                    [disabled]="saving()" (click)="saveShift()">\r
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
            <h5 class="modal-title"><i class="bx bx-cog me-2"></i>Pengaturan</h5>\r
            <button type="button" class="btn-close" (click)="closePengaturan()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="mb-4">\r
              <label class="form-label fw-semibold mb-2">\r
                SPV dapat menambah Pola Kerja - Shift\r
              </label>\r
              <div class="d-flex gap-4">\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvShiftTambahYa"\r
                         name="spvShiftTambah"\r
                         [checked]="spvDapatMenambah()"\r
                         (change)="spvDapatMenambah.set(true)" />\r
                  <label class="form-check-label" for="spvShiftTambahYa">YA</label>\r
                </div>\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvShiftTambahTidak"\r
                         name="spvShiftTambah"\r
                         [checked]="!spvDapatMenambah()"\r
                         (change)="spvDapatMenambah.set(false)" />\r
                  <label class="form-check-label" for="spvShiftTambahTidak">TIDAK</label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="mb-2">\r
              <label class="form-label fw-semibold mb-2">\r
                SPV dapat memperbarui Pola Kerja - Shift\r
              </label>\r
              <div class="d-flex gap-4">\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvShiftUpdateYa"\r
                         name="spvShiftUpdate"\r
                         [checked]="spvDapatMemperbarui()"\r
                         (change)="spvDapatMemperbarui.set(true)" />\r
                  <label class="form-check-label" for="spvShiftUpdateYa">YA</label>\r
                </div>\r
                <div class="form-check">\r
                  <input class="form-check-input" type="radio" id="spvShiftUpdateTidak"\r
                         name="spvShiftUpdate"\r
                         [checked]="!spvDapatMemperbarui()"\r
                         (change)="spvDapatMemperbarui.set(false)" />\r
                  <label class="form-check-label" for="spvShiftUpdateTidak">TIDAK</label>\r
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
              <i class="bx bx-trash me-2"></i>Hapus Pola Kerja Shift?\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShiftListComponent, { className: "ShiftListComponent", filePath: "src/app/features/pola-kerja/shift/shift-list.component.ts", lineNumber: 31 });
})();
export {
  ShiftListComponent
};
//# sourceMappingURL=chunk-ABIEHDID.js.map
