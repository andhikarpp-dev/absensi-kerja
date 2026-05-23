import {
  CutiService
} from "./chunk-YPNFP5NB.js";
import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
import {
  JabatanService
} from "./chunk-D5C53HHG.js";
import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
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
  DatePipe,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  ChangeDetectorRef,
  Component,
  inject,
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
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-list/karyawan-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/karyawan", a0];
var _c2 = (a0) => ["/karyawan", a0, "edit"];
var _c3 = (a0) => ["/karyawan", a0, "perangkat"];
var _c4 = (a0) => ["/karyawan", a0, "jadwal-kerja"];
var _c5 = (a0) => ["/karyawan", a0, "kehadiran"];
var _c6 = (a0) => ["/karyawan", a0, "lembur"];
var _c7 = (a0) => ["/karyawan", a0, "izin"];
var _c8 = (a0) => ["/karyawan", a0, "cuti"];
var _c9 = (a0) => ["/karyawan", a0, "dokumen"];
var _c10 = (a0) => ["/karyawan", a0, "klaim"];
var _c11 = (a0) => ["/karyawan", a0, "payroll"];
var _c12 = (a0) => ["/karyawan", a0, "surat-peringatan"];
var _c13 = () => [1, 3, 6, 12, 24];
var _forTrack0 = ($index, $item) => $item.id;
function KaryawanListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 34);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(""));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function KaryawanListComponent_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "span", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "span", 38)(4, "span", 39);
    \u0275\u0275elementEnd()();
  }
}
function KaryawanListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, KaryawanListComponent_Conditional_34_For_2_Template, 5, 0, "div", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function KaryawanListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275text(3, "Belum ada data karyawan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 42);
    \u0275\u0275text(5, "Tambah Sekarang");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 51);
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 52);
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate(k_r4.statusKerja));
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r4.namaJabatan);
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "|");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r4.namaDivisi);
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.generasiLabel(k_r4.tanggalLahir), " ");
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r4.jenisIdentitas, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r4.nomorIdentitas);
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275text(3, " AUTO ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", k_r4.tglPembaruanBerikutnya ? "Pembaruan otomatis berikutnya: " + \u0275\u0275pipeBind2(1, 1, k_r4.tglPembaruanBerikutnya, "dd MMM yyyy") : "Pembaruan otomatis aktif");
  }
}
function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275text(3, " Profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(5, "i", 81);
    \u0275\u0275text(6, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(8, "i", 82);
    \u0275\u0275text(9, " Perangkat ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(11, "i", 83);
    \u0275\u0275text(12, " Jadwal Kerja ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(14, "i", 84);
    \u0275\u0275text(15, " Kehadiran ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(17, "i", 85);
    \u0275\u0275text(18, " Lembur ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275text(21, " Izin ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(23, "i", 87);
    \u0275\u0275text(24, " Cuti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(26, "i", 88);
    \u0275\u0275text(27, " Dokumen ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_28_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(29, "i", 89);
    \u0275\u0275text(30, " Klaim ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(32, "i", 90);
    \u0275\u0275text(33, " Payroll ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 79);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_a_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(35, "i", 91);
    \u0275\u0275text(36, " Surat Peringatan ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "div", 92);
    \u0275\u0275elementStart(38, "button", 93);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template_button_click_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      const k_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      ctx_r1.closeDropdown();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(k_r4.id));
    });
    \u0275\u0275element(39, "i", 94);
    \u0275\u0275text(40, " Hapus ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c2, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c3, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c4, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c5, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c6, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c7, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c8, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(28, _c9, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(30, _c10, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(32, _c11, k_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(34, _c12, k_r4.id));
  }
}
function KaryawanListComponent_Conditional_36_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 45)(2, "div", 46);
    \u0275\u0275conditionalCreate(3, KaryawanListComponent_Conditional_36_For_16_Conditional_3_Template, 1, 1, "img", 47)(4, KaryawanListComponent_Conditional_36_For_16_Conditional_4_Template, 2, 0, "div", 48);
    \u0275\u0275elementStart(5, "div")(6, "div", 49)(7, "a", 50);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Template_a_click_7_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, KaryawanListComponent_Conditional_36_For_16_Conditional_9_Template, 1, 0, "i", 51)(10, KaryawanListComponent_Conditional_36_For_16_Conditional_10_Template, 1, 2, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 53);
    \u0275\u0275conditionalCreate(12, KaryawanListComponent_Conditional_36_For_16_Conditional_12_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(13, KaryawanListComponent_Conditional_36_For_16_Conditional_13_Template, 2, 0, "span", 54);
    \u0275\u0275conditionalCreate(14, KaryawanListComponent_Conditional_36_For_16_Conditional_14_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 55);
    \u0275\u0275text(16);
    \u0275\u0275conditionalCreate(17, KaryawanListComponent_Conditional_36_For_16_Conditional_17_Template, 3, 1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "td", 56);
    \u0275\u0275conditionalCreate(19, KaryawanListComponent_Conditional_36_For_16_Conditional_19_Template, 4, 2)(20, KaryawanListComponent_Conditional_36_For_16_Conditional_20_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 58)(22, "div", 59)(23, "div", 60);
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "span", 61);
    \u0275\u0275text(26, "hari");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, KaryawanListComponent_Conditional_36_For_16_Conditional_27_Template, 4, 4, "span", 62);
    \u0275\u0275elementStart(28, "div", 63)(29, "button", 64);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Template_button_click_29_listener($event) {
      const k_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.bukaPengaturanCuti(k_r4));
    });
    \u0275\u0275element(30, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 66);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Template_button_click_31_listener($event) {
      const k_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.bukaRiwayatCuti(k_r4));
    });
    \u0275\u0275element(32, "i", 67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "td", 44)(34, "button", 68);
    \u0275\u0275element(35, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td", 70)(37, "div", 71)(38, "button", 72);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_36_For_16_Template_button_click_38_listener($event) {
      const k_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleDropdown(k_r4.id));
    });
    \u0275\u0275text(39, " \u2022\u2022\u2022 ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, KaryawanListComponent_Conditional_36_For_16_Conditional_40_Template, 41, 36, "div", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const k_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.fotoUrl(k_r4.fotoProfil)) ? 3 : 4, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, k_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r4.namaLengkap, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r4.statusKerja === "AKTIF" ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(k_r4.namaJabatan ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r4.namaJabatan && k_r4.namaDivisi ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r4.namaDivisi ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.zonaWaktuLabel(k_r4.zonaWaktu), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.generasiLabel(k_r4.tanggalLahir) ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r4.jenisIdentitas && k_r4.nomorIdentitas ? 19 : 20);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", k_r4.sisaCuti, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(k_r4.pembaruanCutiAktif ? 27 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.openDropdownId() === k_r4.id ? 40 : -1);
  }
}
function KaryawanListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 43)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 44);
    \u0275\u0275text(9, "Sisa Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275text(11, "Dokumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 44);
    \u0275\u0275text(13, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, KaryawanListComponent_Conditional_36_For_16_Template, 41, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.list());
  }
}
function KaryawanListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 95)(2, "div", 96)(3, "div", 97)(4, "h5", 98);
    \u0275\u0275element(5, "i", 99);
    \u0275\u0275text(6, "Hapus Karyawan? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 100);
    \u0275\u0275text(8, " Data karyawan dan akun pengguna terkait akan dihapus permanen. Tindakan ini tidak dapat dibatalkan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 101)(10, "button", 102);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 103);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_37_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275element(13, "i", 18);
    \u0275\u0275text(14, " Ya, Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
}
function KaryawanListComponent_Conditional_38_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pengaturanError());
  }
}
function KaryawanListComponent_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "div", 113);
    \u0275\u0275text(2, "Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_38_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1, " Belum terdapat pengaturan sebelumnya, ");
    \u0275\u0275elementStart(2, "a", 114);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_38_Conditional_10_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mulaiPengaturanCuti());
    });
    \u0275\u0275text(3, "Mulai pengaturan");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanListComponent_Conditional_38_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 122);
    \u0275\u0275text(2, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.infoMulaiBekerja(), " ");
  }
}
function KaryawanListComponent_Conditional_38_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    \u0275\u0275property("value", m_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", m_r10, " Bulan");
  }
}
function KaryawanListComponent_Conditional_38_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, KaryawanListComponent_Conditional_38_Conditional_11_Conditional_0_Template, 4, 1, "div", 115);
    \u0275\u0275elementStart(1, "div", 116)(2, "label", 117);
    \u0275\u0275text(3, "Periode Pembaruan Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 118)(5, "select", 119);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_38_Conditional_11_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pengaturanForm.set(__spreadProps(__spreadValues({}, ctx_r1.pengaturanForm()), { periodePembaruanBulan: +$event })));
    });
    \u0275\u0275repeaterCreate(6, KaryawanListComponent_Conditional_38_Conditional_11_For_7_Template, 2, 2, "option", 120, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 121)(9, "div", 122);
    \u0275\u0275text(10, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Sisa cuti akan otomatis ditambahkan sebanyak ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " pada ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 116)(19, "label", 117);
    \u0275\u0275text(20, "Sisa Cuti Sebelumnya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 118)(22, "select", 119);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_38_Conditional_11_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pengaturanForm.set(__spreadProps(__spreadValues({}, ctx_r1.pengaturanForm()), { tambahkanSisaCutiSebelumnya: $event === "YA" })));
    });
    \u0275\u0275elementStart(23, "option", 123);
    \u0275\u0275text(24, "Tambahkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 124);
    \u0275\u0275text(26, "Tidak Ditambahkan");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 125)(28, "label", 117);
    \u0275\u0275text(29, "Aktifkan Pengaturan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 118)(31, "div", 126)(32, "div", 127)(33, "input", 128);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_38_Conditional_11_Template_input_change_33_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pengaturanForm.set(__spreadProps(__spreadValues({}, ctx_r1.pengaturanForm()), { pembaruanCutiAktif: true })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 129);
    \u0275\u0275text(35, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 127)(37, "input", 130);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_38_Conditional_11_Template_input_change_37_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pengaturanForm.set(__spreadProps(__spreadValues({}, ctx_r1.pengaturanForm()), { pembaruanCutiAktif: false })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label", 131);
    \u0275\u0275text(39, "Tidak");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.infoMulaiBekerja() ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.pengaturanForm().periodePembaruanBulan);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(7, _c13));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.pengaturanForm().jumlahCutiPembaruan);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tglPembaruanBerikutnya());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.pengaturanForm().tambahkanSisaCutiSebelumnya ? "YA" : "TIDAK");
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r1.pengaturanForm().pembaruanCutiAktif);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.pengaturanForm().pembaruanCutiAktif);
  }
}
function KaryawanListComponent_Conditional_38_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "button", 132);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_38_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prosesPengaturanCuti());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 133);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_38_Conditional_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPengaturanCutiModal.set(false));
    });
    \u0275\u0275text(4, "Batal");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.pengaturanSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pengaturanSaving() ? "Memproses..." : "Proses", " ");
  }
}
function KaryawanListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 104)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275text(5, "Pengaturan Pembaruan Cuti Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 107);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPengaturanCutiModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108);
    \u0275\u0275conditionalCreate(8, KaryawanListComponent_Conditional_38_Conditional_8_Template, 2, 1, "div", 109);
    \u0275\u0275conditionalCreate(9, KaryawanListComponent_Conditional_38_Conditional_9_Template, 3, 0, "div", 110)(10, KaryawanListComponent_Conditional_38_Conditional_10_Template, 4, 0, "div", 111)(11, KaryawanListComponent_Conditional_38_Conditional_11_Template, 40, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, KaryawanListComponent_Conditional_38_Conditional_12_Template, 5, 2, "div", 112);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.pengaturanError() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pengaturanLoading() ? 9 : !ctx_r1.pengaturanFormMode() ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.pengaturanFormMode() && !ctx_r1.pengaturanLoading() ? 12 : -1);
  }
}
function KaryawanListComponent_Conditional_39_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.namaLengkap);
  }
}
function KaryawanListComponent_Conditional_39_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 141)(2, "div", 142)(3, "div", 61);
    \u0275\u0275text(4, "Sisa Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 141)(8, "div", 142)(9, "div", 61);
    \u0275\u0275text(10, "Terpakai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 144);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 141)(14, "div", 142)(15, "div", 61);
    \u0275\u0275text(16, "Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 145);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r13 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", s_r13.sisaCuti, " hari");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", s_r13.terpakai, " hari");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatTglRiwayat(s_r13.tglCutiBerakhir));
  }
}
function KaryawanListComponent_Conditional_39_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.riwayatError());
  }
}
function KaryawanListComponent_Conditional_39_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "div", 113);
    \u0275\u0275text(2, "Memuat riwayat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_39_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "i", 146);
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275text(3, "Belum ada transaksi cuti.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Sesi ", c_r14.sesiSetengahHari, " ");
  }
}
function KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275element(1, "i", 160);
    \u0275\u0275text(2, " Tidak mengurangi cuti ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, " \u2013 ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTglRiwayat(c_r14.tanggalSelesai), " ");
  }
}
function KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275element(1, "i", 162);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", c_r14.catatanPenolakan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r14.catatanPenolakan, " ");
  }
}
function KaryawanListComponent_Conditional_39_Conditional_15_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 151);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 151)(4, "span", 152);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_6_Template, 2, 1, "div", 153);
    \u0275\u0275conditionalCreate(7, KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_7_Template, 3, 0, "div", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 151);
    \u0275\u0275text(9);
    \u0275\u0275conditionalCreate(10, KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_10_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 155);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 156)(14, "div", 157);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, KaryawanListComponent_Conditional_39_Conditional_15_For_18_Conditional_16_Template, 3, 2, "div", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 44)(18, "span", 159);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTglWaktu(c_r14.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.jenisCutiLabel(c_r14.jenisCuti));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r14.sesiSetengahHari ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!c_r14.mengurangiSisaCuti ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTglRiwayat(c_r14.tanggalMulai), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r14.tanggalSelesai && c_r14.tanggalSelesai !== c_r14.tanggalMulai ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r14.jumlahHari);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", c_r14.keperluan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.keperluan);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r14.catatanPenolakan ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge ", ctx_r1.badgeStatusCuti(c_r14.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r14.status, " ");
  }
}
function KaryawanListComponent_Conditional_39_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 148)(2, "thead", 149)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Tgl. Pengajuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Jenis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Periode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275text(11, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Keperluan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 44);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, KaryawanListComponent_Conditional_39_Conditional_15_For_18_Template, 20, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 150);
    \u0275\u0275text(20, " Menampilkan ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " transaksi cuti. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.riwayatCutiList());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.riwayatCutiList().length);
  }
}
function KaryawanListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 134)(2, "div", 96)(3, "div", 105)(4, "div")(5, "h5", 135);
    \u0275\u0275element(6, "i", 136);
    \u0275\u0275text(7, "Riwayat Transaksi Cuti ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, KaryawanListComponent_Conditional_39_Conditional_8_Template, 2, 1, "div", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_39_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRiwayatCutiModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 108);
    \u0275\u0275conditionalCreate(11, KaryawanListComponent_Conditional_39_Conditional_11_Template, 19, 3, "div", 139);
    \u0275\u0275conditionalCreate(12, KaryawanListComponent_Conditional_39_Conditional_12_Template, 2, 1, "div", 109);
    \u0275\u0275conditionalCreate(13, KaryawanListComponent_Conditional_39_Conditional_13_Template, 3, 0, "div", 110)(14, KaryawanListComponent_Conditional_39_Conditional_14_Template, 4, 0, "div", 110)(15, KaryawanListComponent_Conditional_39_Conditional_15_Template, 24, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 112)(17, "button", 140);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_39_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRiwayatCutiModal.set(false));
    });
    \u0275\u0275text(18, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.riwayatKaryawan()) ? 8 : -1, tmp_1_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.riwayatSisa()) ? 11 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.riwayatError() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.riwayatLoading() ? 13 : ctx_r1.riwayatCutiList().length === 0 ? 14 : 15);
  }
}
function KaryawanListComponent_Conditional_40_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.trashError());
  }
}
function KaryawanListComponent_Conditional_40_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "div", 113);
    \u0275\u0275text(2, "Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_40_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 164);
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275text(3, "Tidak ada karyawan yang dihapus.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 165);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const k_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", k_r17.namaJabatan, " ");
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "|");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const k_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", k_r17.namaDivisi, " ");
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 63);
    \u0275\u0275conditionalCreate(3, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_3_Template, 1, 1, "img", 165)(4, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_4_Template, 2, 0, "div", 166);
    \u0275\u0275elementStart(5, "div")(6, "div", 167);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 153);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 168);
    \u0275\u0275conditionalCreate(11, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_11_Template, 1, 1);
    \u0275\u0275conditionalCreate(12, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_12_Template, 2, 0, "span", 54);
    \u0275\u0275conditionalCreate(13, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_13_Template, 1, 1);
    \u0275\u0275conditionalCreate(14, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 168);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 44)(18, "button", 169);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Template_button_click_18_listener() {
      const k_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmRestoreId.set(k_r17.id));
    });
    \u0275\u0275element(19, "i", 170);
    \u0275\u0275text(20, " Pulihkan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 171);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_40_Conditional_12_For_14_Template_button_click_21_listener() {
      const k_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmHardDeleteId.set(k_r17.id));
    });
    \u0275\u0275element(22, "i", 172);
    \u0275\u0275text(23, " Permanen ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const k_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.fotoUrl(k_r17.fotoProfil)) ? 3 : 4, tmp_12_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(k_r17.namaLengkap);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("NIP: ", k_r17.nip);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r17.namaJabatan ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r17.namaJabatan && k_r17.namaDivisi ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r17.namaDivisi ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!k_r17.namaJabatan && !k_r17.namaDivisi ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTglWaktuId(k_r17.deletedAt));
  }
}
function KaryawanListComponent_Conditional_40_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 148)(2, "thead", 149)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Jabatan / Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Dihapus pada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275text(11, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, KaryawanListComponent_Conditional_40_Conditional_12_For_14_Template, 24, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 150);
    \u0275\u0275text(16, " Menampilkan ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " karyawan dihapus. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.trashList());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.trashList().length);
  }
}
function KaryawanListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 134)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275element(5, "i", 163);
    \u0275\u0275text(6, "Karyawan Dihapus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTrashModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275conditionalCreate(9, KaryawanListComponent_Conditional_40_Conditional_9_Template, 2, 1, "div", 109);
    \u0275\u0275conditionalCreate(10, KaryawanListComponent_Conditional_40_Conditional_10_Template, 3, 0, "div", 110)(11, KaryawanListComponent_Conditional_40_Conditional_11_Template, 4, 0, "div", 26)(12, KaryawanListComponent_Conditional_40_Conditional_12_Template, 20, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 112)(14, "button", 140);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_40_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTrashModal.set(false));
    });
    \u0275\u0275text(15, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.trashError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.trashLoading() ? 10 : ctx_r1.trashList().length === 0 ? 11 : 12);
  }
}
function KaryawanListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 173)(2, "div", 96)(3, "div", 97)(4, "h6", 174);
    \u0275\u0275element(5, "i", 175);
    \u0275\u0275text(6, "Pulihkan Karyawan? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 176);
    \u0275\u0275text(8, " Karyawan akan dikembalikan ke daftar aktif. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 101)(10, "button", 177);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_41_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRestoreId.set(null));
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 178);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_41_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doRestore());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.trashActionBusy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.trashActionBusy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.trashActionBusy() ? "Memproses..." : "Pulihkan", " ");
  }
}
function KaryawanListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 173)(2, "div", 96)(3, "div", 97)(4, "h6", 98);
    \u0275\u0275element(5, "i", 99);
    \u0275\u0275text(6, "Hapus Permanen? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 176);
    \u0275\u0275text(8, " Karyawan akan dihapus permanen dari sistem. ");
    \u0275\u0275elementStart(9, "strong", 179);
    \u0275\u0275text(10, "Tindakan ini tidak dapat dibatalkan.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 101)(12, "button", 177);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_42_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmHardDeleteId.set(null));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 180);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_42_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doHardDelete());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.trashActionBusy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.trashActionBusy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.trashActionBusy() ? "Menghapus..." : "Ya, Hapus", " ");
  }
}
function KaryawanListComponent_Conditional_43_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.eksporError());
  }
}
function KaryawanListComponent_Conditional_43_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r21 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r21.namaDivisi);
  }
}
function KaryawanListComponent_Conditional_43_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 197);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_43_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.kirimEksporKeEmail());
    });
    \u0275\u0275element(1, "i", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.eksporBusy());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.eksporBusy() ? "Mengirim..." : "Kirim ke Email", " ");
  }
}
function KaryawanListComponent_Conditional_43_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 199);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_43_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unduhEkspor());
    });
    \u0275\u0275element(1, "i", 200);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.eksporBusy());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.eksporBusy() ? "Memproses..." : "Unduh Excel", " ");
  }
}
function KaryawanListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 181)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275element(5, "i", 182);
    \u0275\u0275text(6, "Ekspor Data Karyawan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_43_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEksporModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275conditionalCreate(9, KaryawanListComponent_Conditional_43_Conditional_9_Template, 2, 1, "div", 109);
    \u0275\u0275elementStart(10, "div", 183)(11, "label", 184);
    \u0275\u0275text(12, "Filter Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 119);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_43_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eksporForm.set(__spreadProps(__spreadValues({}, ctx_r1.eksporForm()), { divisiId: $event !== null && $event !== "" ? +$event : null })));
    });
    \u0275\u0275elementStart(14, "option", 185);
    \u0275\u0275text(15, "\u2014 Semua Divisi \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, KaryawanListComponent_Conditional_43_For_17_Template, 2, 2, "option", 185, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 186);
    \u0275\u0275text(19, " Estimasi: ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " karyawan akan diekspor. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 183)(24, "label", 184);
    \u0275\u0275text(25, "Jumlah Target Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 187);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_43_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eksporForm.set(__spreadProps(__spreadValues({}, ctx_r1.eksporForm()), { limit: $event ? +$event : null })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 188);
    \u0275\u0275text(28, " Maksimum karyawan yang diekspor (kosongkan = tanpa batas). ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "hr", 189);
    \u0275\u0275elementStart(30, "div", 190)(31, "label", 184);
    \u0275\u0275element(32, "i", 191);
    \u0275\u0275text(33, "Kirim ke Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 192);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_43_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eksporForm.set(__spreadProps(__spreadValues({}, ctx_r1.eksporForm()), { email: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 188);
    \u0275\u0275text(36, " Isi email jika ingin file dikirim sebagai lampiran (kosongkan jika hanya ingin unduh). ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 193)(38, "button", 194);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_43_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEksporModal.set(false));
    });
    \u0275\u0275text(39, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 12);
    \u0275\u0275conditionalCreate(41, KaryawanListComponent_Conditional_43_Conditional_41_Template, 3, 2, "button", 195)(42, KaryawanListComponent_Conditional_43_Conditional_42_Template, 3, 2, "button", 196);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.eksporError() ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.eksporForm().divisiId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.divisiList());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalKaryawanFiltered());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.eksporForm().limit);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.eksporForm().email);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.eksporBusy());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.eksporForm().email && ctx_r1.eksporForm().email.trim().length > 0 ? 41 : 42);
  }
}
function KaryawanListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 201)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275text(5, "Impor Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_44_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tutupImpor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108)(8, "div", 202)(9, "div", 203)(10, "button", 204);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_44_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pilihTipeImpor("tambah"));
    });
    \u0275\u0275element(11, "i", 205);
    \u0275\u0275elementStart(12, "div", 206);
    \u0275\u0275text(13, "Tambah Karyawan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 203)(15, "button", 204);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_44_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pilihTipeImpor("perbarui"));
    });
    \u0275\u0275element(16, "i", 207);
    \u0275\u0275elementStart(17, "div", 206);
    \u0275\u0275text(18, "Perbarui Karyawan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 203)(20, "button", 204);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_44_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pilihTipeImpor("bpjs"));
    });
    \u0275\u0275element(21, "i", 208);
    \u0275\u0275elementStart(22, "div", 206);
    \u0275\u0275text(23, "BPJS Karyawan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 203)(25, "button", 204);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_44_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pilihTipeImpor("pph21"));
    });
    \u0275\u0275element(26, "i", 209);
    \u0275\u0275elementStart(27, "div", 206);
    \u0275\u0275text(28, "PPH 21 Karyawan");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function KaryawanListComponent_Conditional_45_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Untuk melakukan impor karyawan, pastikan file yang diupload sudah sesuai format yang ditentukan. ");
  }
}
function KaryawanListComponent_Conditional_45_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Untuk melakukan impor data perbarui karyawan, pastikan file yang diupload sudah sesuai format yang ditentukan. ");
  }
}
function KaryawanListComponent_Conditional_45_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Untuk melakukan impor data BPJS karyawan, pastikan file yang diupload sudah sesuai format yang ditentukan. ");
  }
}
function KaryawanListComponent_Conditional_45_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Untuk melakukan impor data PPH 21 karyawan, pastikan file yang diupload sudah sesuai format yang ditentukan. ");
  }
}
function KaryawanListComponent_Conditional_45_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Untuk melakukan impor, pastikan file yang diupload sudah sesuai format yang ditentukan. ");
  }
}
function KaryawanListComponent_Conditional_45_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " Upload dilakukan per divisi, silakan pisahkan data karyawan sesuai divisi masing-masing. Bila karyawan tidak memiliki divisi maka saat impor data tidak perlu memilih divisi. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_45_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1, " Aksi impor hanya akan dijalankan jika semua data sudah benar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li");
    \u0275\u0275text(3, " Jika ada data yang perlu diperbaiki, sistem akan segera menampilkan informasinya setelah klik tombol proses. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_45_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 179);
    \u0275\u0275text(1, " Catatan: fitur impor PPH 21 masih dalam pengembangan. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_45_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imporError());
  }
}
function KaryawanListComponent_Conditional_45_Conditional_24_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r27 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r27.namaDivisi);
  }
}
function KaryawanListComponent_Conditional_45_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 215);
    \u0275\u0275text(2, "Divisi (Opsional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 216)(4, "select", 119);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_45_Conditional_24_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.imporDivisiId.set($event !== null && $event !== "" ? +$event : null));
    });
    \u0275\u0275elementStart(5, "option", 185);
    \u0275\u0275text(6, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, KaryawanListComponent_Conditional_45_Conditional_24_For_8_Template, 2, 2, "option", 185, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.imporDivisiId());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.divisiList());
  }
}
function KaryawanListComponent_Conditional_45_Conditional_34_Conditional_6_For_14_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td", 179);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r28 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r28.baris);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r28.nip || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r28.nama || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r28.pesan);
  }
}
function KaryawanListComponent_Conditional_45_Conditional_34_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "table", 225)(2, "thead", 149)(3, "tr")(4, "th", 226);
    \u0275\u0275text(5, "Baris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "NIP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Pesan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, KaryawanListComponent_Conditional_45_Conditional_34_Conditional_6_For_14_Template, 9, 4, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r29 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(r_r29.errors);
  }
}
function KaryawanListComponent_Conditional_45_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 189);
    \u0275\u0275elementStart(1, "div", 221)(2, "span", 222);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 223);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, KaryawanListComponent_Conditional_45_Conditional_34_Conditional_6_Template, 15, 0, "div", 224);
  }
  if (rf & 2) {
    const r_r29 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Berhasil: ", r_r29.berhasil);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Gagal: ", r_r29.gagal);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r29.errors.length ? 6 : -1);
  }
}
function KaryawanListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 210)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_45_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tutupImpor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108)(8, "div", 211)(9, "div", 212);
    \u0275\u0275text(10, "PENTING!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 213)(12, "li");
    \u0275\u0275conditionalCreate(13, KaryawanListComponent_Conditional_45_Case_13_Template, 1, 0)(14, KaryawanListComponent_Conditional_45_Case_14_Template, 1, 0)(15, KaryawanListComponent_Conditional_45_Case_15_Template, 1, 0)(16, KaryawanListComponent_Conditional_45_Case_16_Template, 1, 0)(17, KaryawanListComponent_Conditional_45_Case_17_Template, 1, 0);
    \u0275\u0275elementStart(18, "a", 214);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_45_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.unduhTemplateImpor());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, KaryawanListComponent_Conditional_45_Conditional_20_Template, 2, 0, "li");
    \u0275\u0275conditionalCreate(21, KaryawanListComponent_Conditional_45_Conditional_21_Template, 4, 0);
    \u0275\u0275conditionalCreate(22, KaryawanListComponent_Conditional_45_Conditional_22_Template, 2, 0, "li", 179);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, KaryawanListComponent_Conditional_45_Conditional_23_Template, 2, 1, "div", 109);
    \u0275\u0275conditionalCreate(24, KaryawanListComponent_Conditional_45_Conditional_24_Template, 9, 2, "div", 116);
    \u0275\u0275elementStart(25, "div", 116)(26, "label", 215);
    \u0275\u0275text(27, " Pilih Berkas ");
    \u0275\u0275elementStart(28, "span", 179);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 216)(31, "input", 217);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_45_Template_input_change_31_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImporFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 188);
    \u0275\u0275text(33, "Ukuran Maksimal: 500 KB");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, KaryawanListComponent_Conditional_45_Conditional_34_Template, 7, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 218)(36, "button", 219);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_45_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prosesImporExcel());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 220);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_45_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.kembaliPilihTipeImpor());
    });
    \u0275\u0275text(39, "Batal");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Impor Excel ", ctx_r1.labelTipeImpor(ctx_r1.imporTipe()));
    \u0275\u0275advance(8);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.imporTipe()) === "tambah" ? 13 : tmp_2_0 === "perbarui" ? 14 : tmp_2_0 === "bpjs" ? 15 : tmp_2_0 === "pph21" ? 16 : 17);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.imporTplBusy() ? "Mengunduh..." : "Download format impor excel di sini.", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imporTipe() === "tambah" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imporTipe() === "perbarui" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imporTipe() === "pph21" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imporError() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imporTipe() === "tambah" ? 24 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.imporResult()) ? 34 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.imporBusy() || !ctx_r1.imporFile());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.imporBusy() ? "Memproses..." : "Proses", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.imporBusy());
  }
}
function KaryawanListComponent_Conditional_46_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r31 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r31.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r31.namaDivisi);
  }
}
function KaryawanListComponent_Conditional_46_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 232);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngValue", k_r32.id)("disabled", ctx_r1.subPerbaruiKaryawanIds().includes(k_r32.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", k_r32.namaLengkap, "", k_r32.nip ? " - " + k_r32.nip : "", " ");
  }
}
function KaryawanListComponent_Conditional_46_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Tidak ada karyawan tersedia", ctx_r1.subPerbaruiDivisiId() != null ? " pada divisi ini" : "", ". ");
  }
}
function KaryawanListComponent_Conditional_46_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 235);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 236);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_46_Conditional_29_For_2_Template_button_click_2_listener() {
      const id_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hapusKaryawanSub(id_r34));
    });
    \u0275\u0275element(3, "i", 237);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.namaKaryawanById(id_r34), " ");
  }
}
function KaryawanListComponent_Conditional_46_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 233);
    \u0275\u0275repeaterCreate(1, KaryawanListComponent_Conditional_46_Conditional_29_For_2_Template, 4, 1, "span", 235, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.subPerbaruiKaryawanIds());
  }
}
function KaryawanListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 227)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_46_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tutupSubPerbarui());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108)(8, "div", 211);
    \u0275\u0275text(9, " Untuk mempermudah impor, silakan tentukan karyawan berdasarkan divisi atau Anda bisa memilih karyawan secara spesifik. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 116)(11, "label", 228);
    \u0275\u0275text(12, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 229)(14, "select", 119);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_46_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.subPerbaruiDivisiId.set($event !== null && $event !== "" ? +$event : null));
    });
    \u0275\u0275elementStart(15, "option", 185);
    \u0275\u0275text(16, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, KaryawanListComponent_Conditional_46_For_18_Template, 2, 2, "option", 185, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 230)(20, "label", 228);
    \u0275\u0275text(21, "Spesifik Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 231)(23, "select", 119);
    \u0275\u0275listener("ngModelChange", function KaryawanListComponent_Conditional_46_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPilihKaryawanSub($event));
    });
    \u0275\u0275elementStart(24, "option", 185);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, KaryawanListComponent_Conditional_46_For_27_Template, 2, 4, "option", 232, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, KaryawanListComponent_Conditional_46_Conditional_28_Template, 2, 1, "div", 188);
    \u0275\u0275conditionalCreate(29, KaryawanListComponent_Conditional_46_Conditional_29_Template, 3, 0, "div", 233);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 234);
    \u0275\u0275text(31, " Jika tidak memilih divisi maupun karyawan, template akan diisi ");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33, "seluruh karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 218)(36, "button", 219);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_46_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prosesUnduhPerbarui());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 140);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_46_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tutupSubPerbarui());
    });
    \u0275\u0275text(39, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Download Format Impor ", ctx_r1.labelTipeImpor(ctx_r1.subPerbaruiTipe()));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.subPerbaruiDivisiId());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.divisiList());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", null);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.subPerbaruiDivisiId() == null ? "--Pilih Karyawan (semua divisi)--" : "--Pilih Karyawan--", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.karyawanOptionsForSub());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.karyawanOptionsForSub().length === 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subPerbaruiKaryawanIds().length > 0 ? 29 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.imporTplBusy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.imporTplBusy() ? "Mengunduh..." : "Proses", " ");
  }
}
function KaryawanListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 238)(2, "div", 239)(3, "div", 240);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 241);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toastMsg.set(""));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r1.toastType() === "success")("bg-danger", ctx_r1.toastType() === "danger")("bg-warning", ctx_r1.toastType() === "warning");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.toastMsg());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r38 = ctx.$implicit;
    \u0275\u0275property("value", d_r38.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r38.namaDivisi);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r39 = ctx.$implicit;
    \u0275\u0275property("value", k_r39.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r39.namaLengkap);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 259);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 260);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_48_Conditional_23_Conditional_22_For_2_Template_i_click_2_listener() {
      const id_r41 = \u0275\u0275restoreView(_r40).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hapusPenerimaSpesifik(id_r41));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r41 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.namaKaryawanById(id_r41), " ");
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258);
    \u0275\u0275repeaterCreate(1, KaryawanListComponent_Conditional_48_Conditional_23_Conditional_22_For_2_Template, 3, 1, "span", 259, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.aksiMassalKaryawanIds());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r42 = ctx.$implicit;
    \u0275\u0275property("value", k_r42.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r42.namaLengkap);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 261);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 260);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_48_Conditional_23_Conditional_32_For_2_Template_i_click_2_listener() {
      const id_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hapusPenerimaExcl(id_r44));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r44 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.namaKaryawanById(id_r44), " ");
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258);
    \u0275\u0275repeaterCreate(1, KaryawanListComponent_Conditional_48_Conditional_23_Conditional_32_For_2_Template, 3, 1, "span", 261, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.aksiMassalKaryawanExcl());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 228);
    \u0275\u0275text(2, " Divisi ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 229)(6, "select", 242);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_23_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.aksiMassalDivisiId.set($event.target.value ? +$event.target.value : null);
      ctx_r1.aksiMassalKaryawanIds.set([]);
      return \u0275\u0275resetView(ctx_r1.aksiMassalKaryawanExcl.set([]));
    });
    \u0275\u0275elementStart(7, "option", 243);
    \u0275\u0275text(8, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, KaryawanListComponent_Conditional_48_Conditional_23_For_10_Template, 2, 2, "option", 120, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 247)(12, "label", 228);
    \u0275\u0275text(13, " Penerima spesifik ");
    \u0275\u0275elementStart(14, "span", 179);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 229)(17, "select", 257);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_23_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.pilihPenerimaSpesifik($event.target.value ? +$event.target.value : null);
      return \u0275\u0275resetView($event.target.value = "");
    });
    \u0275\u0275elementStart(18, "option", 243);
    \u0275\u0275text(19, "Tulis kata kunci\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, KaryawanListComponent_Conditional_48_Conditional_23_For_21_Template, 2, 2, "option", 120, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, KaryawanListComponent_Conditional_48_Conditional_23_Conditional_22_Template, 3, 0, "div", 258);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 247)(24, "label", 228);
    \u0275\u0275text(25, "Penerima terkecuali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 229)(27, "select", 257);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_23_Template_select_change_27_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.pilihPenerimaExcl($event.target.value ? +$event.target.value : null);
      return \u0275\u0275resetView($event.target.value = "");
    });
    \u0275\u0275elementStart(28, "option", 243);
    \u0275\u0275text(29, "Tulis kata kunci\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, KaryawanListComponent_Conditional_48_Conditional_23_For_31_Template, 2, 2, "option", 120, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, KaryawanListComponent_Conditional_48_Conditional_23_Conditional_32_Template, 3, 0, "div", 258);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.aksiMassalDivisiId() ?? "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.divisiList());
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.amPenerimaOptions("", ctx_r1.aksiMassalKaryawanIds()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aksiMassalKaryawanIds().length > 0 ? 22 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.amPenerimaOptions("", ctx_r1.aksiMassalKaryawanExcl()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aksiMassalKaryawanExcl().length > 0 ? 32 : -1);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_24_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r46 = ctx.$implicit;
    \u0275\u0275property("value", k_r46.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r46.namaLengkap);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_24_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 259);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 260);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_48_Conditional_24_Conditional_11_For_2_Template_i_click_2_listener() {
      const id_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hapusPenerimaSpesifik(id_r48));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r48 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.namaKaryawanById(id_r48), " ");
  }
}
function KaryawanListComponent_Conditional_48_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258);
    \u0275\u0275repeaterCreate(1, KaryawanListComponent_Conditional_48_Conditional_24_Conditional_11_For_2_Template, 3, 1, "span", 259, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.aksiMassalKaryawanIds());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 247)(1, "label", 228);
    \u0275\u0275text(2, " Penerima spesifik ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 229)(6, "select", 257);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_24_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.pilihPenerimaSpesifik($event.target.value ? +$event.target.value : null);
      return \u0275\u0275resetView($event.target.value = "");
    });
    \u0275\u0275elementStart(7, "option", 243);
    \u0275\u0275text(8, "Tulis kata kunci\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, KaryawanListComponent_Conditional_48_Conditional_24_For_10_Template, 2, 2, "option", 120, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, KaryawanListComponent_Conditional_48_Conditional_24_Conditional_11_Template, 3, 0, "div", 258);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.amPenerimaOptions("", ctx_r1.aksiMassalKaryawanIds()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aksiMassalKaryawanIds().length > 0 ? 11 : -1);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 254);
    \u0275\u0275text(1, " Mohon hati-hati, aksi yang sudah dikirimkan tidak dapat dibatalkan. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanListComponent_Conditional_48_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 228);
    \u0275\u0275text(2, " Sisa Cuti ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 262)(6, "input", 263);
    \u0275\u0275listener("input", function KaryawanListComponent_Conditional_48_Conditional_47_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amSamakanSisa.set($event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 116)(8, "label", 228);
    \u0275\u0275text(9, "Tgl. Cuti Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 264)(11, "input", 265);
    \u0275\u0275listener("input", function KaryawanListComponent_Conditional_48_Conditional_47_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amSamakanTglBerakhir.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.amSamakanSisa() ?? "");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.amSamakanTglBerakhir());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 228);
    \u0275\u0275text(2, " Nilai Penambahan ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 262)(6, "input", 263);
    \u0275\u0275listener("input", function KaryawanListComponent_Conditional_48_Conditional_48_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amTambahNilai.set($event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 116)(8, "label", 228);
    \u0275\u0275text(9, "Tambah Bulan Masa Aktif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 262)(11, "input", 263);
    \u0275\u0275listener("input", function KaryawanListComponent_Conditional_48_Conditional_48_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amTambahBulanMasaAktif.set($event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 266);
    \u0275\u0275text(13, "Bulan");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.amTambahNilai() ?? "");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.amTambahBulanMasaAktif() ?? "");
  }
}
function KaryawanListComponent_Conditional_48_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 228);
    \u0275\u0275text(2, " Nilai Pengurangan ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 262)(6, "input", 263);
    \u0275\u0275listener("input", function KaryawanListComponent_Conditional_48_Conditional_49_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amKurangiNilai.set($event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 116)(8, "label", 228);
    \u0275\u0275text(9, "Kurangi Bulan Masa Aktif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 262)(11, "input", 263);
    \u0275\u0275listener("input", function KaryawanListComponent_Conditional_48_Conditional_49_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amKurangiBulanMasaAktif.set($event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 266);
    \u0275\u0275text(13, "Bulan");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.amKurangiNilai() ?? "");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.amKurangiBulanMasaAktif() ?? "");
  }
}
function KaryawanListComponent_Conditional_48_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 247)(1, "label", 117);
    \u0275\u0275text(2, "Karyawan dapat mengganti izin jam?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 267)(4, "div", 127)(5, "input", 268);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_50_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amIzinDapatGanti.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 269);
    \u0275\u0275text(7, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 127)(9, "input", 270);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_50_Template_input_change_9_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amIzinDapatGanti.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 271);
    \u0275\u0275text(11, "TIDAK");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 247)(13, "label", 117);
    \u0275\u0275text(14, "Kenakan potongan izin jam pada rincian gaji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 267)(16, "div", 127)(17, "input", 272);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_50_Template_input_change_17_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amIzinPotonganRincian.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 273);
    \u0275\u0275text(19, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 127)(21, "input", 274);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_50_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amIzinPotonganRincian.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 275);
    \u0275\u0275text(23, "TIDAK");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 247)(25, "label", 117);
    \u0275\u0275text(26, " Kenakan Denda Keterlambatan jika presensi masuk lebih dari selesai izin jam ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 267)(28, "div", 127)(29, "input", 276);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_50_Template_input_change_29_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amIzinDendaTelat.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 277);
    \u0275\u0275text(31, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 127)(33, "input", 278);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_50_Template_input_change_33_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amIzinDendaTelat.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 279);
    \u0275\u0275text(35, "TIDAK");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.amIzinDapatGanti());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.amIzinDapatGanti());
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r1.amIzinPotonganRincian());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.amIzinPotonganRincian());
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r1.amIzinDendaTelat());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.amIzinDendaTelat());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_51_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r54 = ctx.$implicit;
    \u0275\u0275property("value", d_r54.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r54.namaDivisi);
  }
}
function KaryawanListComponent_Conditional_48_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 228);
    \u0275\u0275text(2, " Divisi ");
    \u0275\u0275elementStart(3, "span", 179);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 229)(6, "select", 242);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Conditional_51_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amPindahDivisiId.set($event.target.value ? +$event.target.value : null));
    });
    \u0275\u0275elementStart(7, "option", 243);
    \u0275\u0275text(8, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, KaryawanListComponent_Conditional_48_Conditional_51_For_10_Template, 2, 2, "option", 120, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.amPindahDivisiId() ?? "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.divisiList());
  }
}
function KaryawanListComponent_Conditional_48_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 255);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aksiMassalError(), " ");
  }
}
function KaryawanListComponent_Conditional_48_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 113);
  }
}
function KaryawanListComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 227)(2, "div", 96)(3, "div", 105)(4, "h5", 106);
    \u0275\u0275text(5, "Aksi Massal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 138);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_48_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tutupAksiMassal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108)(8, "div", 116)(9, "label", 228);
    \u0275\u0275text(10, " Target ");
    \u0275\u0275elementStart(11, "span", 179);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 229)(14, "select", 242);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aksiMassalTarget.set($event.target.value));
    });
    \u0275\u0275elementStart(15, "option", 243);
    \u0275\u0275text(16, "-- Penerima --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 244);
    \u0275\u0275text(18, "Semua");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 245);
    \u0275\u0275text(20, "Divisi tertentu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 246);
    \u0275\u0275text(22, "Karyawan tertentu");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(23, KaryawanListComponent_Conditional_48_Conditional_23_Template, 33, 3);
    \u0275\u0275conditionalCreate(24, KaryawanListComponent_Conditional_48_Conditional_24_Template, 12, 1, "div", 247);
    \u0275\u0275elementStart(25, "div", 116)(26, "label", 228);
    \u0275\u0275text(27, " Aksi ");
    \u0275\u0275elementStart(28, "span", 179);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 229)(31, "select", 242);
    \u0275\u0275listener("change", function KaryawanListComponent_Conditional_48_Template_select_change_31_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.aksiMassalAksi.set($event.target.value));
    });
    \u0275\u0275elementStart(32, "option", 243);
    \u0275\u0275text(33, "--Aksi--");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 248);
    \u0275\u0275text(35, "Samakan sisa cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 249);
    \u0275\u0275text(37, "Tambah sisa cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 250);
    \u0275\u0275text(39, "Kurangi sisa cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 251);
    \u0275\u0275text(41, "Atur Izin Jam Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 252);
    \u0275\u0275text(43, "Pindah Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 253);
    \u0275\u0275text(45, "Kirim Email Verifikasi");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(46, KaryawanListComponent_Conditional_48_Conditional_46_Template, 2, 0, "div", 254);
    \u0275\u0275conditionalCreate(47, KaryawanListComponent_Conditional_48_Conditional_47_Template, 12, 2);
    \u0275\u0275conditionalCreate(48, KaryawanListComponent_Conditional_48_Conditional_48_Template, 14, 2);
    \u0275\u0275conditionalCreate(49, KaryawanListComponent_Conditional_48_Conditional_49_Template, 14, 2);
    \u0275\u0275conditionalCreate(50, KaryawanListComponent_Conditional_48_Conditional_50_Template, 36, 6);
    \u0275\u0275conditionalCreate(51, KaryawanListComponent_Conditional_48_Conditional_51_Template, 11, 1, "div", 116);
    \u0275\u0275conditionalCreate(52, KaryawanListComponent_Conditional_48_Conditional_52_Template, 2, 1, "div", 255);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 218)(54, "button", 256);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_48_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prosesAksiMassal());
    });
    \u0275\u0275conditionalCreate(55, KaryawanListComponent_Conditional_48_Conditional_55_Template, 1, 0, "span", 113);
    \u0275\u0275text(56, " Proses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 140);
    \u0275\u0275listener("click", function KaryawanListComponent_Conditional_48_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tutupAksiMassal());
    });
    \u0275\u0275text(58, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r1.aksiMassalTarget());
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.aksiMassalTarget() === "DIVISI" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalTarget() === "KARYAWAN" ? 24 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.aksiMassalAksi());
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r1.aksiMassalAksi() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalAksi() === "SAMAKAN_SISA_CUTI" ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalAksi() === "TAMBAH_SISA_CUTI" ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalAksi() === "KURANGI_SISA_CUTI" ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalAksi() === "ATUR_IZIN_JAM" ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalAksi() === "PINDAH_DIVISI" ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalError() ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.aksiMassalBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalBusy() ? 55 : -1);
  }
}
var KaryawanListComponent = class _KaryawanListComponent {
  constructor() {
    this.svc = inject(KaryawanService);
    this.cutiSvc = inject(CutiService);
    this.divSvc = inject(DivisiService);
    this.jabSvc = inject(JabatanService);
    this.cdr = inject(ChangeDetectorRef);
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
    this.confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openDropdownId = signal(null, ...ngDevMode ? [{ debugName: "openDropdownId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPengaturanCutiModal = signal(false, ...ngDevMode ? [{ debugName: "showPengaturanCutiModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanKaryawan = signal(null, ...ngDevMode ? [{ debugName: "pengaturanKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanSisa = signal(null, ...ngDevMode ? [{ debugName: "pengaturanSisa" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanLoading = signal(false, ...ngDevMode ? [{ debugName: "pengaturanLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanFormMode = signal(false, ...ngDevMode ? [{ debugName: "pengaturanFormMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanSaving = signal(false, ...ngDevMode ? [{ debugName: "pengaturanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanError = signal("", ...ngDevMode ? [{ debugName: "pengaturanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanForm = signal({
      periodePembaruanBulan: 12,
      jumlahCutiPembaruan: 12,
      tambahkanSisaCutiSebelumnya: false,
      pembaruanCutiAktif: true
    }, ...ngDevMode ? [{ debugName: "pengaturanForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toastMsg = signal("", ...ngDevMode ? [{ debugName: "toastMsg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toastType = signal("success", ...ngDevMode ? [{ debugName: "toastType" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTrashModal = signal(false, ...ngDevMode ? [{ debugName: "showTrashModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trashList = signal([], ...ngDevMode ? [{ debugName: "trashList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trashLoading = signal(false, ...ngDevMode ? [{ debugName: "trashLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trashError = signal("", ...ngDevMode ? [{ debugName: "trashError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmRestoreId = signal(null, ...ngDevMode ? [{ debugName: "confirmRestoreId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmHardDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmHardDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trashActionBusy = signal(false, ...ngDevMode ? [{ debugName: "trashActionBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showEksporModal = signal(false, ...ngDevMode ? [{ debugName: "showEksporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporBusy = signal(false, ...ngDevMode ? [{ debugName: "eksporBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporError = signal("", ...ngDevMode ? [{ debugName: "eksporError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporForm = signal({
      divisiId: null,
      limit: null,
      email: ""
    }, ...ngDevMode ? [{ debugName: "eksporForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporTahap = signal(null, ...ngDevMode ? [{ debugName: "imporTahap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporTipe = signal(null, ...ngDevMode ? [{ debugName: "imporTipe" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporFile = signal(null, ...ngDevMode ? [{ debugName: "imporFile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporFileName = signal("", ...ngDevMode ? [{ debugName: "imporFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporDivisiId = signal(null, ...ngDevMode ? [{ debugName: "imporDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporBusy = signal(false, ...ngDevMode ? [{ debugName: "imporBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporError = signal("", ...ngDevMode ? [{ debugName: "imporError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporResult = signal(null, ...ngDevMode ? [{ debugName: "imporResult" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporTplBusy = signal(false, ...ngDevMode ? [{ debugName: "imporTplBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSubPerbarui = signal(false, ...ngDevMode ? [{ debugName: "showSubPerbarui" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subPerbaruiTipe = signal("perbarui", ...ngDevMode ? [{ debugName: "subPerbaruiTipe" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subPerbaruiDivisiId = signal(null, ...ngDevMode ? [{ debugName: "subPerbaruiDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subPerbaruiKaryawanIds = signal([], ...ngDevMode ? [{ debugName: "subPerbaruiKaryawanIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subPerbaruiKeyword = signal("", ...ngDevMode ? [{ debugName: "subPerbaruiKeyword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subPerbaruiSearchOpen = signal(false, ...ngDevMode ? [{ debugName: "subPerbaruiSearchOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtInstance = null;
    this.showRiwayatCutiModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatCutiModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatKaryawan = signal(null, ...ngDevMode ? [{ debugName: "riwayatKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatCutiList = signal([], ...ngDevMode ? [{ debugName: "riwayatCutiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatSisa = signal(null, ...ngDevMode ? [{ debugName: "riwayatSisa" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatLoading = signal(false, ...ngDevMode ? [{ debugName: "riwayatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatError = signal("", ...ngDevMode ? [{ debugName: "riwayatError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showAksiMassalModal = signal(false, ...ngDevMode ? [{ debugName: "showAksiMassalModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalTarget = signal("", ...ngDevMode ? [{ debugName: "aksiMassalTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalAksi = signal("", ...ngDevMode ? [{ debugName: "aksiMassalAksi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalDivisiId = signal(null, ...ngDevMode ? [{ debugName: "aksiMassalDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalKaryawanIds = signal([], ...ngDevMode ? [{ debugName: "aksiMassalKaryawanIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalKaryawanExcl = signal([], ...ngDevMode ? [{ debugName: "aksiMassalKaryawanExcl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalKeyword = signal("", ...ngDevMode ? [{ debugName: "aksiMassalKeyword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalKeywordExcl = signal("", ...ngDevMode ? [{ debugName: "aksiMassalKeywordExcl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amSamakanSisa = signal(null, ...ngDevMode ? [{ debugName: "amSamakanSisa" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amSamakanTglBerakhir = signal("", ...ngDevMode ? [{ debugName: "amSamakanTglBerakhir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amTambahNilai = signal(null, ...ngDevMode ? [{ debugName: "amTambahNilai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amTambahBulanMasaAktif = signal(null, ...ngDevMode ? [{ debugName: "amTambahBulanMasaAktif" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amKurangiNilai = signal(null, ...ngDevMode ? [{ debugName: "amKurangiNilai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amKurangiBulanMasaAktif = signal(null, ...ngDevMode ? [{ debugName: "amKurangiBulanMasaAktif" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amIzinDapatGanti = signal(true, ...ngDevMode ? [{ debugName: "amIzinDapatGanti" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amIzinPotonganRincian = signal(true, ...ngDevMode ? [{ debugName: "amIzinPotonganRincian" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amIzinDendaTelat = signal(false, ...ngDevMode ? [{ debugName: "amIzinDendaTelat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.amPindahDivisiId = signal(null, ...ngDevMode ? [{ debugName: "amPindahDivisiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalBusy = signal(false, ...ngDevMode ? [{ debugName: "aksiMassalBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalError = signal("", ...ngDevMode ? [{ debugName: "aksiMassalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jabatanList = signal([], ...ngDevMode ? [{ debugName: "jabatanList" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  showToast(msg, type = "success") {
    this.toastType.set(type);
    this.toastMsg.set(msg);
    setTimeout(() => this.toastMsg.set(""), 4e3);
  }
  bukaTrash() {
    this.showTrashModal.set(true);
    this.loadTrash();
  }
  loadTrash() {
    this.trashLoading.set(true);
    this.trashError.set("");
    this.svc.getTrash().subscribe({
      next: (list) => {
        this.trashList.set(list);
        this.trashLoading.set(false);
      },
      error: (err) => {
        this.trashError.set(err?.message ?? "Gagal memuat data.");
        this.trashLoading.set(false);
      }
    });
  }
  doRestore() {
    const id = this.confirmRestoreId();
    if (id == null)
      return;
    this.trashActionBusy.set(true);
    this.svc.restore(id).subscribe({
      next: () => {
        this.trashActionBusy.set(false);
        this.confirmRestoreId.set(null);
        this.showToast("Karyawan berhasil dipulihkan.", "success");
        this.loadTrash();
        this.load();
      },
      error: (e) => {
        this.trashActionBusy.set(false);
        this.confirmRestoreId.set(null);
        this.showToast(e?.error?.message ?? "Gagal memulihkan karyawan.", "danger");
      }
    });
  }
  doHardDelete() {
    const id = this.confirmHardDeleteId();
    if (id == null)
      return;
    this.trashActionBusy.set(true);
    this.svc.hardDelete(id).subscribe({
      next: () => {
        this.trashActionBusy.set(false);
        this.confirmHardDeleteId.set(null);
        this.showToast("Karyawan dihapus permanen.", "success");
        this.loadTrash();
      },
      error: (e) => {
        this.trashActionBusy.set(false);
        this.confirmHardDeleteId.set(null);
        this.showToast(e?.error?.message ?? "Gagal menghapus permanen.", "danger");
      }
    });
  }
  formatTglWaktuId(t) {
    if (!t)
      return "-";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) + " \xB7 " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  }
  bukaEkspor() {
    this.eksporError.set("");
    this.eksporForm.set({ divisiId: null, limit: null, email: "" });
    this.showEksporModal.set(true);
    if (this.divisiList().length === 0) {
      this.divSvc.findAll().subscribe({
        next: (list) => this.divisiList.set(list),
        error: () => {
        }
      });
    }
  }
  /** Hitung total karyawan setelah filter divisi (untuk help text). */
  totalKaryawanFiltered() {
    const div = this.eksporForm().divisiId;
    if (div == null)
      return this.list().length;
    return this.list().filter((k) => k.divisiId === div).length;
  }
  /** Download langsung ke browser. */
  unduhEkspor() {
    const f = this.eksporForm();
    this.eksporBusy.set(true);
    this.eksporError.set("");
    this.svc.eksporExcel({
      divisiId: f.divisiId ?? void 0,
      limit: f.limit && f.limit > 0 ? f.limit : void 0
    }).subscribe({
      next: (blob) => {
        this.eksporBusy.set(false);
        const ts = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Data_Karyawan_${ts}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.showEksporModal.set(false);
        this.showToast("Berhasil mengunduh data karyawan.", "success");
      },
      error: (e) => {
        this.eksporBusy.set(false);
        this.eksporError.set(e?.error?.message ?? "Gagal mengunduh file ekspor.");
      }
    });
  }
  /** Kirim ke email. */
  kirimEksporKeEmail() {
    const f = this.eksporForm();
    if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
      this.eksporError.set("Format email tidak valid.");
      return;
    }
    this.eksporBusy.set(true);
    this.eksporError.set("");
    this.svc.eksporExcelKeEmail({
      divisiId: f.divisiId,
      limit: f.limit && f.limit > 0 ? f.limit : null,
      email: f.email.trim()
    }).subscribe({
      next: (r) => {
        this.eksporBusy.set(false);
        this.showEksporModal.set(false);
        this.showToast(r.message ?? `File ekspor dikirim ke ${f.email}.`, "success");
      },
      error: (e) => {
        this.eksporBusy.set(false);
        const msg = e?.error?.data?.email ?? e?.error?.message ?? "Gagal mengirim email.";
        this.eksporError.set(msg);
      }
    });
  }
  bukaImporPilih() {
    this.imporTahap.set("pilih");
    this.imporTipe.set(null);
    this.imporFile.set(null);
    this.imporFileName.set("");
    this.imporDivisiId.set(null);
    this.imporError.set("");
    this.imporResult.set(null);
    if (this.divisiList().length === 0) {
      this.divSvc.findAll().subscribe({
        next: (list) => this.divisiList.set(list),
        error: () => {
        }
      });
    }
  }
  pilihTipeImpor(tipe) {
    this.imporTipe.set(tipe);
    this.imporTahap.set("form");
    this.imporError.set("");
    this.imporResult.set(null);
    this.imporFile.set(null);
    this.imporFileName.set("");
  }
  tutupImpor() {
    this.imporTahap.set(null);
    this.imporTipe.set(null);
    this.imporFile.set(null);
    this.imporFileName.set("");
    this.imporResult.set(null);
    this.imporError.set("");
  }
  kembaliPilihTipeImpor() {
    this.imporTahap.set("pilih");
    this.imporTipe.set(null);
    this.imporFile.set(null);
    this.imporFileName.set("");
    this.imporResult.set(null);
    this.imporError.set("");
  }
  onImporFileChange(ev) {
    const input = ev.target;
    const file = input?.files?.[0] ?? null;
    if (!file) {
      this.imporFile.set(null);
      this.imporFileName.set("");
      return;
    }
    if (!file.name.toLowerCase().endsWith(".xlsx")) {
      this.imporError.set("Format file harus .xlsx");
      this.imporFile.set(null);
      this.imporFileName.set("");
      input.value = "";
      return;
    }
    if (file.size > 500 * 1024) {
      this.imporError.set("Ukuran file melebihi 500 KB.");
      this.imporFile.set(null);
      this.imporFileName.set("");
      input.value = "";
      return;
    }
    this.imporError.set("");
    this.imporFile.set(file);
    this.imporFileName.set(file.name);
  }
  labelTipeImpor(t) {
    switch (t) {
      case "tambah":
        return "Tambah Karyawan";
      case "perbarui":
        return "Perbarui Karyawan";
      case "bpjs":
        return "BPJS Karyawan";
      case "pph21":
        return "PPH 21 Karyawan";
      default:
        return "";
    }
  }
  unduhTemplateImpor() {
    const tipe = this.imporTipe();
    if (!tipe)
      return;
    if (tipe === "perbarui" || tipe === "bpjs" || tipe === "pph21") {
      this.bukaSubModalPerbarui(tipe);
      return;
    }
    this.lakukanUnduhTemplate(tipe);
  }
  lakukanUnduhTemplate(tipe, opts) {
    this.imporTplBusy.set(true);
    this.svc.downloadTemplateImpor(tipe, opts).subscribe({
      next: (blob) => {
        this.imporTplBusy.set(false);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `template-impor-${tipe}-karyawan.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.imporTplBusy.set(false);
        this.showToast("Gagal mengunduh template.", "danger");
      }
    });
  }
  bukaSubModalPerbarui(tipe = "perbarui") {
    this.subPerbaruiTipe.set(tipe);
    this.subPerbaruiDivisiId.set(null);
    this.subPerbaruiKaryawanIds.set([]);
    this.subPerbaruiKeyword.set("");
    this.subPerbaruiSearchOpen.set(false);
    this.showSubPerbarui.set(true);
  }
  tutupSubPerbarui() {
    this.showSubPerbarui.set(false);
  }
  /** Daftar karyawan yang lulus filter pencarian (untuk dropdown spesifik). */
  filteredKaryawanForSub() {
    const kw = this.subPerbaruiKeyword().trim().toLowerCase();
    const divId = this.subPerbaruiDivisiId();
    let list = this.list();
    if (divId != null)
      list = list.filter((k) => k.divisiId === divId);
    if (kw)
      list = list.filter((k) => k.namaLengkap?.toLowerCase().includes(kw) || k.nip?.toLowerCase().includes(kw));
    return list.slice(0, 50);
  }
  /** Opsi karyawan untuk dropdown <select> "Spesifik Karyawan",
   *  difilter berdasarkan divisi yang dipilih. */
  karyawanOptionsForSub() {
    const divId = this.subPerbaruiDivisiId();
    let list = this.list();
    if (divId != null)
      list = list.filter((k) => k.divisiId === divId);
    return [...list].sort((a, b) => (a.namaLengkap ?? "").localeCompare(b.namaLengkap ?? ""));
  }
  /** Handler ketika user memilih satu karyawan dari dropdown <select>. */
  onPilihKaryawanSub(id) {
    if (id == null)
      return;
    const cur = this.subPerbaruiKaryawanIds();
    if (!cur.includes(id)) {
      this.subPerbaruiKaryawanIds.set([...cur, id]);
    }
  }
  toggleKaryawanSub(id) {
    const cur = this.subPerbaruiKaryawanIds();
    this.subPerbaruiKaryawanIds.set(cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
  }
  hapusKaryawanSub(id) {
    this.subPerbaruiKaryawanIds.set(this.subPerbaruiKaryawanIds().filter((x) => x !== id));
  }
  namaKaryawanById(id) {
    return this.list().find((k) => k.id === id)?.namaLengkap ?? `#${id}`;
  }
  prosesUnduhPerbarui() {
    const ids = this.subPerbaruiKaryawanIds();
    const div = this.subPerbaruiDivisiId();
    const tipe = this.subPerbaruiTipe();
    this.lakukanUnduhTemplate(tipe, {
      divisiId: ids.length > 0 ? null : div,
      // jika ada pilihan spesifik, abaikan filter divisi
      karyawanIds: ids.length > 0 ? ids : null
    });
    this.tutupSubPerbarui();
  }
  prosesImporExcel() {
    const tipe = this.imporTipe();
    const file = this.imporFile();
    if (!tipe)
      return;
    if (!file) {
      this.imporError.set("Pilih berkas terlebih dahulu.");
      return;
    }
    this.imporBusy.set(true);
    this.imporError.set("");
    this.imporResult.set(null);
    const opts = tipe === "tambah" ? { divisiId: this.imporDivisiId() } : void 0;
    this.svc.prosesImpor(tipe, file, opts).subscribe({
      next: (hasil) => {
        this.imporBusy.set(false);
        this.imporResult.set(hasil);
        if (hasil.gagal === 0) {
          this.showToast(`Impor selesai. ${hasil.berhasil} baris berhasil.`, "success");
        } else {
          this.showToast(`Impor selesai. Berhasil ${hasil.berhasil}, gagal ${hasil.gagal}.`, "warning");
        }
        this.load();
      },
      error: (e) => {
        this.imporBusy.set(false);
        this.imporError.set(e?.error?.message ?? e?.error?.data?.message ?? "Gagal memproses file impor.");
      }
    });
  }
  /** Konversi path relatif foto ke URL lengkap */
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {
    this.destroyDt();
  }
  destroyDt() {
    if (this.dtInstance) {
      this.dtInstance.destroy();
      this.dtInstance = null;
    }
  }
  initDt() {
    setTimeout(() => {
      const table = $("#tabelKaryawan");
      if (!table.length || typeof $ === "undefined" || !$.fn?.dataTable)
        return;
      this.destroyDt();
      this.dtInstance = table.DataTable({
        language: { url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json" },
        pageLength: 10,
        order: [[1, "asc"]],
        columnDefs: [{ orderable: false, targets: [0, 2, 3, 4] }]
      });
    }, 100);
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.destroyDt();
    this.svc.findAll().subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
        this.cdr.detectChanges();
        this.initDt();
      },
      error: (err) => {
        this.error.set(err?.message ?? "Gagal memuat data.");
        this.loading.set(false);
      }
    });
  }
  confirmDelete(id) {
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
        this.load();
      },
      error: (err) => {
        this.error.set(err?.message ?? "Gagal menghapus data.");
        this.confirmDeleteId.set(null);
      }
    });
  }
  toggleDropdown(id) {
    this.openDropdownId.set(this.openDropdownId() === id ? null : id);
  }
  closeDropdown() {
    this.openDropdownId.set(null);
  }
  zonaWaktuLabel(z) {
    if (!z)
      return "";
    const map = { WIB: "WIB (UTC+7)", WITA: "WITA (UTC+8)", WIT: "WIT (UTC+9)" };
    return map[z] ?? z;
  }
  generasiLabel(tglLahir) {
    if (!tglLahir)
      return "";
    const tahun = new Date(tglLahir).getFullYear();
    if (tahun >= 1997)
      return "Gen Z";
    if (tahun >= 1981)
      return "Milenial";
    if (tahun >= 1965)
      return "Gen X";
    return "Baby Boomer";
  }
  // ── Pengaturan Pembaruan Cuti Otomatis ────────────────
  bukaPengaturanCuti(k) {
    this.pengaturanKaryawan.set(k);
    this.pengaturanSisa.set(null);
    this.pengaturanFormMode.set(false);
    this.pengaturanError.set("");
    this.showPengaturanCutiModal.set(true);
    this.pengaturanLoading.set(true);
    this.cutiSvc.getSisa(k.id).subscribe({
      next: (s) => {
        this.pengaturanSisa.set(s);
        this.pengaturanLoading.set(false);
        if (s.pembaruanCutiAktif) {
          this.pengaturanForm.set({
            periodePembaruanBulan: s.periodePembaruanBulan ?? 12,
            jumlahCutiPembaruan: s.jumlahCutiPembaruan ?? 12,
            tambahkanSisaCutiSebelumnya: s.tambahkanSisaCutiSebelumnya ?? false,
            pembaruanCutiAktif: true
          });
          this.pengaturanFormMode.set(true);
        }
      },
      error: () => {
        this.pengaturanLoading.set(false);
        this.pengaturanError.set("Gagal memuat data sisa cuti.");
      }
    });
  }
  mulaiPengaturanCuti() {
    this.pengaturanForm.set({
      periodePembaruanBulan: 12,
      jumlahCutiPembaruan: 12,
      tambahkanSisaCutiSebelumnya: false,
      pembaruanCutiAktif: true
    });
    this.pengaturanFormMode.set(true);
  }
  prosesPengaturanCuti() {
    const k = this.pengaturanKaryawan();
    if (!k)
      return;
    const f = this.pengaturanForm();
    if (!f.periodePembaruanBulan || f.periodePembaruanBulan < 1) {
      this.pengaturanError.set("Periode pembaruan minimal 1 bulan.");
      return;
    }
    this.pengaturanError.set("");
    this.pengaturanSaving.set(true);
    this.cutiSvc.updateSisa(k.id, {
      pembaruanCutiAktif: f.pembaruanCutiAktif,
      periodePembaruanBulan: Number(f.periodePembaruanBulan),
      jumlahCutiPembaruan: Number(f.jumlahCutiPembaruan),
      tambahkanSisaCutiSebelumnya: f.tambahkanSisaCutiSebelumnya
    }).subscribe({
      next: (s) => {
        this.pengaturanSaving.set(false);
        this.pengaturanSisa.set(s);
        this.showPengaturanCutiModal.set(false);
        const tgl = s.tglPembaruanBerikutnya ? new Date(s.tglPembaruanBerikutnya).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) : "-";
        this.showToast(f.pembaruanCutiAktif ? `Pengaturan disimpan. Pembaruan berikutnya: ${tgl}.` : "Pengaturan disimpan (pembaruan otomatis dinonaktifkan).", "success");
      },
      error: (e) => {
        this.pengaturanSaving.set(false);
        this.pengaturanError.set(e?.error?.message ?? "Gagal menyimpan pengaturan.");
      }
    });
  }
  /** Jalankan scheduler pembaruan otomatis sekarang juga untuk testing. */
  triggerPembaruanSekarang() {
    const k = this.pengaturanKaryawan();
    if (!k)
      return;
    if (!confirm(`Jalankan pembaruan cuti otomatis untuk ${k.namaLengkap} sekarang?`))
      return;
    this.pengaturanSaving.set(true);
    this.cutiSvc.triggerPembaruan(k.id).subscribe({
      next: (r) => {
        this.pengaturanSaving.set(false);
        this.pengaturanSisa.set(r.sisaCuti);
        if (r.applied) {
          const tgl = r.sisaCuti.tglPembaruanBerikutnya ? new Date(r.sisaCuti.tglPembaruanBerikutnya).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) : "-";
          this.showToast(`Pembaruan dijalankan. Sisa cuti sekarang: ${r.sisaCuti.sisaCuti}. Berikutnya: ${tgl}.`, "success");
        } else {
          this.showToast("Pengaturan tidak aktif, pembaruan dilewati.", "warning");
        }
      },
      error: (e) => {
        this.pengaturanSaving.set(false);
        this.pengaturanError.set(e?.error?.message ?? "Gagal menjalankan pembaruan.");
      }
    });
  }
  /** Info teks: "Karyawan mulai bekerja pada X, pertama kali mendapatkan cuti pada Y." */
  infoMulaiBekerja() {
    const k = this.pengaturanKaryawan();
    if (!k?.tglMulaiBekerja)
      return "";
    const fmt = (t) => new Date(t).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
    const mulai = fmt(k.tglMulaiBekerja);
    const dapatCuti = k.tglMulaiDapatCuti ? fmt(k.tglMulaiDapatCuti) : fmt(new Date(new Date(k.tglMulaiBekerja).setFullYear(new Date(k.tglMulaiBekerja).getFullYear() + 1)).toISOString());
    return `Karyawan mulai bekerja pada ${mulai}, pertama kali mendapatkan cuti pada ${dapatCuti}.`;
  }
  /** Hitung tanggal pembaruan berikutnya untuk tampilan info di form. */
  tglPembaruanBerikutnya() {
    const k = this.pengaturanKaryawan();
    const f = this.pengaturanForm();
    if (!k)
      return "";
    const basis = k.tglMulaiDapatCuti ? new Date(k.tglMulaiDapatCuti) : k.tglMulaiBekerja ? new Date(k.tglMulaiBekerja) : /* @__PURE__ */ new Date();
    basis.setMonth(basis.getMonth() + (Number(f.periodePembaruanBulan) || 12));
    const fromBackend = this.pengaturanSisa()?.tglPembaruanBerikutnya;
    const target = fromBackend ? new Date(fromBackend) : basis;
    return target.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  bukaRiwayatCuti(k) {
    this.riwayatKaryawan.set(k);
    this.riwayatCutiList.set([]);
    this.riwayatSisa.set(null);
    this.riwayatError.set("");
    this.showRiwayatCutiModal.set(true);
    this.riwayatLoading.set(true);
    let pending = 2;
    const done = () => {
      if (--pending === 0)
        this.riwayatLoading.set(false);
    };
    this.cutiSvc.getSisa(k.id).subscribe({
      next: (s) => {
        this.riwayatSisa.set(s);
        done();
      },
      error: () => done()
    });
    this.cutiSvc.getAll(k.id).subscribe({
      next: (list) => {
        const sorted = [...list].sort((a, b) => {
          const ta = a.createdAt ?? a.tanggalMulai;
          const tb = b.createdAt ?? b.tanggalMulai;
          return (tb ?? "").localeCompare(ta ?? "");
        });
        this.riwayatCutiList.set(sorted);
        done();
      },
      error: () => {
        this.riwayatError.set("Gagal memuat riwayat cuti.");
        done();
      }
    });
  }
  formatTglRiwayat(t) {
    if (!t)
      return "-";
    return new Date(t).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  formatTglWaktu(t) {
    if (!t)
      return "-";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) + " \xB7 " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  }
  jenisCutiLabel(j) {
    if (!j)
      return "-";
    const map = {
      TAHUNAN: "Tahunan",
      SETENGAH_HARI: "Setengah Hari",
      KHUSUS: "Khusus"
    };
    return map[j] ?? j;
  }
  badgeStatusCuti(s) {
    return s === "DISETUJUI" ? "bg-success" : s === "DITOLAK" ? "bg-danger" : s === "MENUNGGU" ? "bg-warning text-dark" : "bg-secondary";
  }
  isSelected(id) {
    return id != null && this.selectedIds().has(id);
  }
  toggleSelected(id) {
    if (id == null)
      return;
    const set = new Set(this.selectedIds());
    if (set.has(id))
      set.delete(id);
    else
      set.add(id);
    this.selectedIds.set(set);
  }
  toggleSelectAll(checked) {
    if (!checked) {
      this.selectedIds.set(/* @__PURE__ */ new Set());
      return;
    }
    this.selectedIds.set(new Set(this.list().map((k) => k.id).filter((v) => v != null)));
  }
  isAllSelected() {
    const total = this.list().length;
    return total > 0 && this.selectedIds().size >= total;
  }
  bukaAksiMassal() {
    this.aksiMassalTarget.set("");
    this.aksiMassalAksi.set("");
    this.aksiMassalDivisiId.set(null);
    this.aksiMassalKaryawanIds.set([]);
    this.aksiMassalKaryawanExcl.set([]);
    this.aksiMassalKeyword.set("");
    this.aksiMassalKeywordExcl.set("");
    this.amSamakanSisa.set(null);
    this.amSamakanTglBerakhir.set("");
    this.amTambahNilai.set(null);
    this.amTambahBulanMasaAktif.set(null);
    this.amKurangiNilai.set(null);
    this.amKurangiBulanMasaAktif.set(null);
    this.amIzinDapatGanti.set(true);
    this.amIzinPotonganRincian.set(true);
    this.amIzinDendaTelat.set(false);
    this.amPindahDivisiId.set(null);
    this.aksiMassalError.set("");
    this.aksiMassalBusy.set(false);
    if (this.divisiList().length === 0) {
      this.divSvc.findAll().subscribe({ next: (l) => this.divisiList.set(l), error: () => {
      } });
    }
    if (this.jabatanList().length === 0) {
      this.jabSvc.findAll().subscribe({ next: (l) => this.jabatanList.set(l), error: () => {
      } });
    }
    this.showAksiMassalModal.set(true);
  }
  tutupAksiMassal() {
    this.showAksiMassalModal.set(false);
  }
  /** Daftar karyawan untuk dropdown Penerima spesifik (difilter target & keyword). */
  amPenerimaOptions(keyword, exclude = []) {
    const kw = keyword.trim().toLowerCase();
    let list = this.list();
    if (this.aksiMassalTarget() === "DIVISI" && this.aksiMassalDivisiId() != null) {
      list = list.filter((k) => k.divisiId === this.aksiMassalDivisiId());
    }
    if (kw) {
      list = list.filter((k) => k.namaLengkap?.toLowerCase().includes(kw) || k.nip?.toLowerCase().includes(kw));
    }
    if (exclude.length)
      list = list.filter((k) => !exclude.includes(k.id));
    return list.slice(0, 50);
  }
  /** Pilih karyawan untuk Penerima spesifik. */
  pilihPenerimaSpesifik(id) {
    if (id == null)
      return;
    const cur = this.aksiMassalKaryawanIds();
    if (!cur.includes(id))
      this.aksiMassalKaryawanIds.set([...cur, id]);
  }
  hapusPenerimaSpesifik(id) {
    this.aksiMassalKaryawanIds.set(this.aksiMassalKaryawanIds().filter((x) => x !== id));
  }
  /** Pilih karyawan untuk Penerima terkecuali. */
  pilihPenerimaExcl(id) {
    if (id == null)
      return;
    const cur = this.aksiMassalKaryawanExcl();
    if (!cur.includes(id))
      this.aksiMassalKaryawanExcl.set([...cur, id]);
  }
  hapusPenerimaExcl(id) {
    this.aksiMassalKaryawanExcl.set(this.aksiMassalKaryawanExcl().filter((x) => x !== id));
  }
  /** Hitung daftar id target final berdasarkan pilihan target & spesifik/excl. */
  resolveAksiMassalTargetIds() {
    const t = this.aksiMassalTarget();
    let ids = [];
    if (t === "SEMUA") {
      ids = this.list().map((k) => k.id).filter((v) => v != null);
    } else if (t === "DIVISI") {
      const divId = this.aksiMassalDivisiId();
      if (divId == null)
        return [];
      ids = this.list().filter((k) => k.divisiId === divId).map((k) => k.id).filter((v) => v != null);
      const spesifik = this.aksiMassalKaryawanIds();
      if (spesifik.length > 0)
        ids = spesifik.slice();
      const excl = this.aksiMassalKaryawanExcl();
      if (excl.length > 0)
        ids = ids.filter((id) => !excl.includes(id));
    } else if (t === "KARYAWAN") {
      ids = this.aksiMassalKaryawanIds().slice();
    }
    return ids;
  }
  /** Eksekusi aksi sesuai pilihan. */
  prosesAksiMassal() {
    this.aksiMassalError.set("");
    if (!this.aksiMassalTarget()) {
      this.aksiMassalError.set("Target wajib dipilih.");
      return;
    }
    if (!this.aksiMassalAksi()) {
      this.aksiMassalError.set("Aksi wajib dipilih.");
      return;
    }
    const ids = this.resolveAksiMassalTargetIds();
    if (ids.length === 0) {
      this.aksiMassalError.set("Tidak ada karyawan yang menjadi target. Pilih divisi/karyawan terlebih dahulu.");
      return;
    }
    const aksi = this.aksiMassalAksi();
    if (aksi === "PINDAH_DIVISI") {
      if (this.amPindahDivisiId() == null) {
        this.aksiMassalError.set("Pilih divisi tujuan.");
        return;
      }
      this.aksiMassalBusy.set(true);
      this.svc.aksiMassal({
        ids,
        aksi: "PINDAH_DIVISI",
        divisiId: this.amPindahDivisiId()
      }).subscribe({
        next: (r) => {
          this.aksiMassalBusy.set(false);
          this.tutupAksiMassal();
          this.showToast(`Pindah divisi: ${r.berhasil} berhasil, ${r.gagal} gagal.`, r.gagal === 0 ? "success" : "warning");
          this.load();
        },
        error: (e) => {
          this.aksiMassalBusy.set(false);
          this.aksiMassalError.set(e?.error?.message ?? "Gagal memproses aksi massal.");
        }
      });
      return;
    }
    if (aksi === "SAMAKAN_SISA_CUTI" || aksi === "TAMBAH_SISA_CUTI" || aksi === "KURANGI_SISA_CUTI") {
      const isSamakan = aksi === "SAMAKAN_SISA_CUTI";
      const isTambah = aksi === "TAMBAH_SISA_CUTI";
      const nilai = isSamakan ? this.amSamakanSisa() : isTambah ? this.amTambahNilai() : this.amKurangiNilai();
      if (nilai == null || isNaN(+nilai)) {
        this.aksiMassalError.set("Nilai wajib diisi.");
        return;
      }
      this.aksiMassalBusy.set(true);
      let berhasil = 0, gagal = 0;
      let pending = ids.length;
      ids.forEach((id) => {
        const k = this.list().find((x) => x.id === id);
        const sisaSekarang = +(k?.sisaCuti ?? 0) || 0;
        const baru = isSamakan ? +nilai : isTambah ? sisaSekarang + +nilai : Math.max(0, sisaSekarang - +nilai);
        this.cutiSvc.updateSisa(id, { sisaCuti: baru }).subscribe({
          next: () => {
            berhasil++;
            if (--pending === 0)
              this.finishMassalSisa(berhasil, gagal);
          },
          error: () => {
            gagal++;
            if (--pending === 0)
              this.finishMassalSisa(berhasil, gagal);
          }
        });
      });
      return;
    }
    if (aksi === "KIRIM_EMAIL_VERIFIKASI" || aksi === "ATUR_IZIN_JAM") {
      this.aksiMassalError.set('Aksi "' + (aksi === "KIRIM_EMAIL_VERIFIKASI" ? "Kirim Email Verifikasi" : "Atur Izin Jam Karyawan") + '" belum didukung backend. Silakan hubungi administrator.');
      return;
    }
  }
  finishMassalSisa(berhasil, gagal) {
    this.aksiMassalBusy.set(false);
    this.tutupAksiMassal();
    this.showToast(`Sisa cuti diperbarui: ${berhasil} berhasil, ${gagal} gagal.`, gagal === 0 ? "success" : "warning");
    this.load();
  }
  static {
    this.\u0275fac = function KaryawanListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanListComponent, selectors: [["app-karyawan-list"]], decls: 49, vars: 14, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0"], [1, "bx", "bx-badge", "me-2"], [1, "d-flex", "gap-2"], ["type", "button", "title", "Ekspor data karyawan ke Excel", 1, "btn", "btn-outline-success", "btn-sm", "px-3", 3, "click"], [1, "bx", "bxs-file-export", "me-1"], ["type", "button", "title", "Impor data karyawan dari Excel", 1, "btn", "btn-outline-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bxs-file-import", "me-1"], ["type", "button", "title", "Lihat karyawan yang sudah dihapus", 1, "btn", "btn-outline-danger", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-trash", "me-1"], ["type", "button", "title", "Aksi massal pada beberapa karyawan", 1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-list-check", "me-1"], ["routerLink", "/karyawan/baru", 1, "btn", "btn-primary", "btn-sm", "px-3"], [1, "bx", "bx-plus", "me-1"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-flex", "align-items-center"], [1, "card", "border-0", "shadow-sm"], [1, "p-4"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.55)", "z-index", "1060"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.55)", "z-index", "1065"], [1, "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1100"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.55)", "z-index", "1080"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], ["type", "button", 1, "btn-close", "ms-auto", 3, "click"], [1, "placeholder-glow", "mb-3", "d-flex", "align-items-center", "gap-3"], [1, "placeholder", "rounded-circle", "flex-shrink-0", 2, "width", "44px", "height", "44px"], [1, "flex-grow-1"], [1, "placeholder", "col-4", "rounded", "d-block", "mb-2", 2, "height", "13px"], [1, "placeholder", "col-6", "rounded", "d-block", 2, "height", "11px"], [1, "bx", "bx-user-x", 2, "font-size", "3rem"], [1, "mt-2", "mb-3"], ["routerLink", "/karyawan/baru", 1, "btn", "btn-primary", "btn-sm"], ["id", "tabelKaryawan", 1, "table", "table-hover", "align-middle", "mb-0", "w-100"], [1, "text-center"], [2, "min-width", "280px"], [1, "d-flex", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", "flex-shrink-0", 2, "width", "42px", "height", "42px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "42px", "height", "42px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.1rem"], [1, "d-flex", "align-items-center", "gap-1"], [1, "fw-semibold", "text-dark", "text-decoration-none", 2, "font-size", ".9rem", 3, "click", "routerLink"], ["title", "Aktif", 1, "bx", "bxs-circle", "text-success", 2, "font-size", ".5rem"], [1, "bx", "bxs-circle", "text-secondary", 2, "font-size", ".5rem", 3, "title"], [1, "text-muted", 2, "font-size", ".77rem", "margin-top", "2px"], [1, "mx-1", 2, "opacity", ".4"], [2, "font-size", ".73rem", "color", "#c4c9d4", "margin-top", "2px"], [2, "min-width", "150px"], [1, "text-muted", 2, "font-size", ".82rem"], [1, "text-center", 2, "min-width", "120px"], [1, "d-flex", "flex-column", "align-items-center", "gap-1"], [1, "fw-semibold", 2, "font-size", ".95rem"], [1, "text-muted", "small"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle", 2, "font-size", ".62rem", 3, "title"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "button", "title", "Pengaturan Pembaruan Cuti Otomatis", 1, "btn", "p-0", "border-0", "bg-transparent", "text-muted", "lh-1", 2, "font-size", "1rem", 3, "click"], [1, "bx", "bx-cog"], ["type", "button", "title", "Riwayat Cuti", 1, "btn", "p-0", "border-0", "bg-transparent", "text-muted", "lh-1", 2, "font-size", "1rem", 3, "click"], [1, "bx", "bx-history"], ["title", "Dokumen", 1, "btn", "p-0", "border-0", "bg-transparent", "text-muted", "lh-1", 2, "font-size", "1rem"], [1, "bx", "bx-file"], [1, "text-center", 2, "position", "relative"], [1, "d-inline-block", 2, "position", "relative"], [1, "btn", "border-0", "rounded-2", "px-2", "lh-1", "text-muted", 2, "background", "#f3f4f6", "font-size", ".95rem", "letter-spacing", ".12em", "padding-top", "5px", "padding-bottom", "5px", 3, "click"], [1, "aksi-dropdown", "border", "rounded-3", "shadow-sm", "py-1", 2, "position", "absolute", "right", "0", "top", "calc(100% + 4px)", "min-width", "160px", "background", "#fff", "z-index", "300"], [1, "bx", "bx-user"], [1, "mx-1", 2, "opacity", ".5"], [1, "text-muted", "fw-semibold", 2, "font-size", ".73rem", "letter-spacing", ".04em"], [2, "font-size", ".83rem", "color", "#374151"], [1, "bx", "bx-refresh"], [1, "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "text-decoration-none", "text-dark", 2, "font-size", ".83rem", 3, "click", "routerLink"], [1, "bx", "bx-show", "text-info", 2, "font-size", ".95rem"], [1, "bx", "bx-edit", "text-primary", 2, "font-size", ".95rem"], [1, "bx", "bx-devices", "text-purple", 2, "font-size", ".95rem", "color", "#7c3aed"], [1, "bx", "bx-calendar-check", 2, "font-size", ".95rem", "color", "#0891b2"], [1, "bx", "bx-time-five", 2, "font-size", ".95rem", "color", "#059669"], [1, "bx", "bx-moon", 2, "font-size", ".95rem", "color", "#d97706"], [1, "bx", "bx-calendar-minus", 2, "font-size", ".95rem", "color", "#7c3aed"], [1, "bx", "bx-calendar-event", 2, "font-size", ".95rem", "color", "#ec4899"], [1, "bx", "bx-folder", 2, "font-size", ".95rem", "color", "#0ea5e9"], [1, "bx", "bx-receipt", 2, "font-size", ".95rem", "color", "#7c3aed"], [1, "bx", "bx-dollar-circle", 2, "font-size", ".95rem", "color", "#059669"], [1, "bx", "bx-file-blank", 2, "font-size", ".95rem", "color", "#dc2626"], [1, "dropdown-divider", "my-1"], [1, "d-flex", "align-items-center", "gap-2", "px-3", "py-2", "w-100", "border-0", "bg-transparent", "text-danger", 2, "font-size", ".83rem", "cursor", "pointer", 3, "click"], [1, "bx", "bx-trash", 2, "font-size", ".95rem"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted", 2, "font-size", ".9rem"], [1, "modal-footer", "border-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "560px"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2", "small"], [1, "text-center", "py-4", "text-muted", "small"], [1, "bg-light", "rounded", "p-3", "small"], [1, "modal-footer"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["href", "javascript:void(0)", 1, "text-primary", "fw-semibold", "text-decoration-none", 3, "click"], [1, "bg-light", "rounded", "p-3", "mb-3", "small"], [1, "row", "mb-3", "align-items-center"], [1, "col-sm-5", "col-form-label", "small"], [1, "col-sm-7"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "bg-light", "rounded", "p-3", "mb-3", "small", "ms-sm-auto", 2, "margin-left", "0"], [1, "fw-bold", "mb-1"], ["value", "YA"], ["value", "TIDAK"], [1, "row", "align-items-center"], [1, "d-flex", "gap-3"], [1, "form-check"], ["type", "checkbox", "id", "aktifkanYa", 1, "form-check-input", 3, "change", "checked"], ["for", "aktifkanYa", 1, "form-check-label", "small"], ["type", "checkbox", "id", "aktifkanTidak", 1, "form-check-input", 3, "change", "checked"], ["for", "aktifkanTidak", 1, "form-check-label", "small"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-title", "fw-bold", "mb-0"], [1, "bx", "bx-history", "me-2"], [1, "text-muted", "small", "mt-1"], ["type", "button", 1, "btn-close", 3, "click"], [1, "row", "g-2", "mb-3"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click"], [1, "col-4"], [1, "bg-light", "rounded", "p-3", "text-center"], [1, "fw-bold", "fs-5", "text-primary"], [1, "fw-bold", "fs-5", "text-warning"], [1, "fw-bold", "fs-6"], [1, "bx", "bx-calendar-x", 2, "font-size", "2.5rem"], [1, "mt-2"], [1, "table", "table-sm", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "text-muted", "small", "mt-2"], [1, "small"], [1, "fw-semibold"], [1, "text-muted", 2, "font-size", ".7rem"], [1, "text-info", 2, "font-size", ".7rem"], [1, "text-center", "small", "fw-semibold"], [1, "small", "text-muted", 2, "max-width", "200px"], [1, "text-truncate", 3, "title"], [1, "text-danger", "text-truncate", 2, "font-size", ".7rem", 3, "title"], [2, "font-size", ".65rem"], [1, "bx", "bx-info-circle"], [1, "text-muted"], [1, "bx", "bx-x-circle"], [1, "bx", "bx-trash", "me-2", "text-danger"], [1, "bx", "bx-trash", 2, "font-size", "3rem"], ["alt", "", 1, "rounded-circle", 2, "width", "34px", "height", "34px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "34px", "height", "34px", "background", "#f3f4f6", "color", "#9ca3af"], [1, "fw-semibold", "small"], [1, "small", "text-muted"], ["type", "button", "title", "Pulihkan", 1, "btn", "btn-sm", "btn-outline-success", "me-1", 3, "click"], [1, "bx", "bx-undo"], ["type", "button", "title", "Hapus permanen", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bx", "bx-trash"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-title", "text-success"], [1, "bx", "bx-undo", "me-2"], [1, "modal-body", "small", "text-muted"], [1, "btn", "btn-light", "border", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "text-danger"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "520px"], [1, "bx", "bxs-file-export", "me-2", "text-success"], [1, "mb-3"], [1, "form-label", "small", "fw-semibold"], [3, "ngValue"], [1, "form-text", "small"], ["type", "number", "min", "1", "placeholder", "Kosongkan untuk semua", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-text", "small", "text-muted"], [1, "my-3"], [1, "mb-2"], [1, "bx", "bx-envelope", "me-1"], ["type", "email", "placeholder", "contoh@email.com", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "px-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "px-3", 3, "click", "disabled"], [1, "bx", "bx-mail-send", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click", "disabled"], [1, "bx", "bx-download", "me-1"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "820px"], [1, "row", "g-3"], [1, "col-6", "col-md-3"], ["type", "button", 1, "w-100", "h-100", "border", "rounded-3", "p-3", "d-flex", "flex-column", "align-items-center", "justify-content-center", "bg-light", 2, "cursor", "pointer", "min-height", "140px", 3, "click"], [1, "bx", "bx-user-plus", 2, "font-size", "42px"], [1, "mt-2", "small", "fw-semibold", "text-center"], [1, "bx", "bx-edit", 2, "font-size", "42px"], [1, "bx", "bx-credit-card", 2, "font-size", "42px"], [1, "bx", "bx-money", 2, "font-size", "42px"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "640px"], [1, "alert", "alert-light", "border", "small", "mb-3"], [1, "fw-bold", "mb-2"], [1, "mb-0", "ps-3"], ["href", "javascript:void(0)", 1, "text-primary", "fw-semibold", 3, "click"], [1, "col-sm-4", "col-form-label", "small"], [1, "col-sm-8"], ["type", "file", "accept", ".xlsx", 1, "form-control", "form-control-sm", 3, "change"], [1, "modal-footer", "d-flex", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click", "disabled"], [1, "d-flex", "gap-3", "mb-2", "small"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "table-responsive", 2, "max-height", "240px", "overflow", "auto"], [1, "table", "table-sm", "table-bordered", "small", "mb-0"], [2, "width", "60px"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "720px"], [1, "col-sm-3", "col-form-label", "small"], [1, "col-sm-9"], [1, "row", "mb-2", "align-items-start"], [1, "col-sm-9", "position-relative"], [3, "ngValue", "disabled"], [1, "d-flex", "flex-wrap", "gap-2", "mt-2"], [1, "form-text", "small", "text-muted", "ms-sm-auto", 2, "margin-left", "0"], [1, "badge", "bg-primary-subtle", "text-primary", "border", "border-primary-subtle", "d-flex", "align-items-center", "gap-1", 2, "font-size", ".75rem"], ["type", "button", 1, "btn", "btn-sm", "p-0", "border-0", "bg-transparent", "text-primary", 2, "line-height", "1", 3, "click"], [1, "bx", "bx-x"], ["role", "alert", 1, "toast", "show", "align-items-center", "text-white", "border-0"], [1, "d-flex"], [1, "toast-body", "small"], ["type", "button", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"], [1, "form-select", "form-select-sm", 3, "change", "value"], ["value", ""], ["value", "SEMUA"], ["value", "DIVISI"], ["value", "KARYAWAN"], [1, "row", "mb-3", "align-items-start"], ["value", "SAMAKAN_SISA_CUTI"], ["value", "TAMBAH_SISA_CUTI"], ["value", "KURANGI_SISA_CUTI"], ["value", "ATUR_IZIN_JAM"], ["value", "PINDAH_DIVISI"], ["value", "KIRIM_EMAIL_VERIFIKASI"], [1, "alert", "alert-warning", "py-2", "small", "mb-3"], [1, "alert", "alert-danger", "py-2", "small", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "px-4", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click", "disabled"], [1, "form-select", "form-select-sm", 3, "change"], [1, "d-flex", "flex-wrap", "gap-1", "mt-2"], [1, "badge", "bg-primary-subtle", "text-primary", "border", "border-primary-subtle"], [1, "bx", "bx-x", "ms-1", 2, "cursor", "pointer", 3, "click"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border", "border-secondary-subtle"], [1, "col-sm-3"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "col-sm-4"], ["type", "date", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "col-sm-2", "small", "text-muted"], [1, "col-sm-7", "d-flex", "gap-3", "align-items-center"], ["type", "checkbox", "id", "izinGantiYa", 1, "form-check-input", 3, "change", "checked"], ["for", "izinGantiYa", 1, "form-check-label", "small"], ["type", "checkbox", "id", "izinGantiTidak", 1, "form-check-input", 3, "change", "checked"], ["for", "izinGantiTidak", 1, "form-check-label", "small"], ["type", "checkbox", "id", "izinPotYa", 1, "form-check-input", 3, "change", "checked"], ["for", "izinPotYa", 1, "form-check-label", "small"], ["type", "checkbox", "id", "izinPotTidak", 1, "form-check-input", 3, "change", "checked"], ["for", "izinPotTidak", 1, "form-check-label", "small"], ["type", "checkbox", "id", "izinDendaYa", 1, "form-check-input", 3, "change", "checked"], ["for", "izinDendaYa", 1, "form-check-label", "small"], ["type", "checkbox", "id", "izinDendaTidak", 1, "form-check-input", 3, "change", "checked"], ["for", "izinDendaTidak", 1, "form-check-label", "small"]], template: function KaryawanListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 8);
        \u0275\u0275text(11, "Karyawan");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "h5", 10);
        \u0275\u0275element(14, "i", 11);
        \u0275\u0275text(15, "Data Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
        \u0275\u0275listener("click", function KaryawanListComponent_Template_button_click_17_listener() {
          return ctx.bukaEkspor();
        });
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275text(19, " Ekspor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 15);
        \u0275\u0275listener("click", function KaryawanListComponent_Template_button_click_20_listener() {
          return ctx.bukaImporPilih();
        });
        \u0275\u0275element(21, "i", 16);
        \u0275\u0275text(22, " Impor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 17);
        \u0275\u0275listener("click", function KaryawanListComponent_Template_button_click_23_listener() {
          return ctx.bukaTrash();
        });
        \u0275\u0275element(24, "i", 18);
        \u0275\u0275text(25, " Karyawan Dihapus ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 19);
        \u0275\u0275listener("click", function KaryawanListComponent_Template_button_click_26_listener() {
          return ctx.bukaAksiMassal();
        });
        \u0275\u0275element(27, "i", 20);
        \u0275\u0275text(28, " Aksi Massal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "a", 21);
        \u0275\u0275element(30, "i", 22);
        \u0275\u0275text(31, " Tambah Karyawan ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(32, KaryawanListComponent_Conditional_32_Template, 4, 1, "div", 23);
        \u0275\u0275elementStart(33, "div", 24);
        \u0275\u0275conditionalCreate(34, KaryawanListComponent_Conditional_34_Template, 3, 1, "div", 25)(35, KaryawanListComponent_Conditional_35_Template, 6, 0, "div", 26)(36, KaryawanListComponent_Conditional_36_Template, 17, 0, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(37, KaryawanListComponent_Conditional_37_Template, 15, 0, "div", 28);
        \u0275\u0275conditionalCreate(38, KaryawanListComponent_Conditional_38_Template, 13, 3, "div", 28);
        \u0275\u0275conditionalCreate(39, KaryawanListComponent_Conditional_39_Template, 19, 4, "div", 28);
        \u0275\u0275conditionalCreate(40, KaryawanListComponent_Conditional_40_Template, 16, 2, "div", 28);
        \u0275\u0275conditionalCreate(41, KaryawanListComponent_Conditional_41_Template, 14, 3, "div", 29);
        \u0275\u0275conditionalCreate(42, KaryawanListComponent_Conditional_42_Template, 16, 3, "div", 29);
        \u0275\u0275conditionalCreate(43, KaryawanListComponent_Conditional_43_Template, 43, 8, "div", 28);
        \u0275\u0275conditionalCreate(44, KaryawanListComponent_Conditional_44_Template, 29, 0, "div", 28);
        \u0275\u0275conditionalCreate(45, KaryawanListComponent_Conditional_45_Template, 40, 12, "div", 28);
        \u0275\u0275conditionalCreate(46, KaryawanListComponent_Conditional_46_Template, 40, 10, "div", 30);
        \u0275\u0275conditionalCreate(47, KaryawanListComponent_Conditional_47_Template, 6, 7, "div", 31);
        \u0275\u0275conditionalCreate(48, KaryawanListComponent_Conditional_48_Template, 59, 13, "div", 32);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275conditional(ctx.error() ? 32 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 34 : ctx.list().length === 0 ? 35 : 36);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPengaturanCutiModal() ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatCutiModal() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTrashModal() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmRestoreId() !== null ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmHardDeleteId() !== null ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showEksporModal() ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.imporTahap() === "pilih" ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.imporTahap() === "form" ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSubPerbarui() ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAksiMassalModal() ? 48 : -1);
      }
    }, dependencies: [RouterLink, LayoutComponent, CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DatePipe], styles: [`@charset "UTF-8";


[_nghost-%COMP%] {
  display: block;
}
[_nghost-%COMP%]     {
}
[_nghost-%COMP%]     .dataTables_wrapper {
  padding: 0;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_length, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_filter {
  padding: 16px 20px 12px;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_length label, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_filter label {
  font-size: 0.82rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_filter {
  text-align: right;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_length select, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_filter input {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.83rem;
  color: #374151;
  background: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_length select:focus, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_filter input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_filter input {
  min-width: 200px;
  padding-left: 32px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='M21 21l-4.35-4.35'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
}
[_nghost-%COMP%]     .dataTables_wrapper {
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_info {
  font-size: 0.78rem;
  color: #9ca3af;
  padding: 12px 20px 16px;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate {
  padding: 8px 20px 16px;
  text-align: right;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate span {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px !important;
  border-radius: 7px !important;
  border: 1px solid transparent !important;
  font-size: 0.82rem;
  color: #374151 !important;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: transparent !important;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button:hover:not(.disabled):not(.current) {
  background: #f3f4f6 !important;
  color: #6366f1 !important;
  border-color: #e5e7eb !important;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button.current, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
  background: #6366f1 !important;
  color: #fff !important;
  border-color: #6366f1 !important;
  font-weight: 600;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover {
  color: #d1d5db !important;
  cursor: default;
  background: transparent !important;
}
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button.previous, 
[_nghost-%COMP%]     .dataTables_wrapper .dataTables_paginate .paginate_button.next {
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}
[_nghost-%COMP%]     {
}
[_nghost-%COMP%]     #tabelKaryawan thead tr th {
  background: #f9fafb !important;
  border-top: none !important;
  border-bottom: 2px solid #f1f3f5 !important;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #9ca3af;
  text-transform: uppercase;
  padding: 13px 16px;
  white-space: nowrap;
}
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting {
  cursor: pointer;
}
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting::before, 
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting::after, 
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting_asc::before, 
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting_desc::before {
  display: none;
}
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting_asc::after {
  color: #6366f1;
  opacity: 1;
}
[_nghost-%COMP%]     #tabelKaryawan thead tr th.sorting_desc::after {
  color: #6366f1;
  opacity: 1;
}
[_nghost-%COMP%]     #tabelKaryawan {
}
[_nghost-%COMP%]     #tabelKaryawan tbody tr {
  border-bottom: 1px solid #f3f4f6 !important;
  transition: background 0.1s;
}
[_nghost-%COMP%]     #tabelKaryawan tbody tr td {
  padding: 10px 16px;
  vertical-align: middle;
  border-top: none !important;
  background: transparent;
}
[_nghost-%COMP%]     #tabelKaryawan tbody tr:hover td {
  background: #fafafe !important;
}
[_nghost-%COMP%]     #tabelKaryawan tbody tr:last-child td {
  border-bottom: none !important;
}
[_nghost-%COMP%]     #tabelKaryawan {
}
[_nghost-%COMP%]     #tabelKaryawan.table-striped > tbody > tr:nth-of-type(odd) > * {
  background-color: transparent;
}
[_nghost-%COMP%]     {
}
[_nghost-%COMP%]     .aksi-dropdown a, 
[_nghost-%COMP%]     .aksi-dropdown button {
  transition: background 0.12s;
}
[_nghost-%COMP%]     .aksi-dropdown a:hover, 
[_nghost-%COMP%]     .aksi-dropdown button:hover {
  background: #f5f3ff !important;
}
[_nghost-%COMP%]     {
}
[_nghost-%COMP%]     .table-responsive {
  overflow: visible !important;
}
[_nghost-%COMP%]     .dataTables_wrapper {
  overflow: visible !important;
}
/*# sourceMappingURL=karyawan-list.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanListComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-list", standalone: true, imports: [RouterLink, LayoutComponent, CommonModule, FormsModule], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Karyawan</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header row -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <h5 class="mb-0"><i class="bx bx-badge me-2"></i>Data Karyawan</h5>\r
    <div class="d-flex gap-2">\r
      <button type="button" class="btn btn-outline-success btn-sm px-3"\r
              title="Ekspor data karyawan ke Excel"\r
              (click)="bukaEkspor()">\r
        <i class="bx bxs-file-export me-1"></i> Ekspor Excel\r
      </button>\r
      <button type="button" class="btn btn-outline-primary btn-sm px-3"\r
              title="Impor data karyawan dari Excel"\r
              (click)="bukaImporPilih()">\r
        <i class="bx bxs-file-import me-1"></i> Impor Excel\r
      </button>\r
      <button type="button" class="btn btn-outline-danger btn-sm px-3"\r
              title="Lihat karyawan yang sudah dihapus"\r
              (click)="bukaTrash()">\r
        <i class="bx bx-trash me-1"></i> Karyawan Dihapus\r
      </button>\r
      <button type="button" class="btn btn-outline-secondary btn-sm px-3"\r
              title="Aksi massal pada beberapa karyawan"\r
              (click)="bukaAksiMassal()">\r
        <i class="bx bx-list-check me-1"></i> Aksi Massal\r
      </button>\r
      <a routerLink="/karyawan/baru" class="btn btn-primary btn-sm px-3">\r
        <i class="bx bx-plus me-1"></i> Tambah Karyawan\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- Alert error -->\r
  @if (error()) {\r
    <div class="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert">\r
      <i class="bx bx-error-circle me-2 fs-5"></i> {{ error() }}\r
      <button type="button" class="btn-close ms-auto" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  <!-- Card table -->\r
  <div class="card border-0 shadow-sm">\r
\r
    @if (loading()) {\r
      <div class="p-4">\r
        @for (i of [1,2,3,4,5]; track i) {\r
          <div class="placeholder-glow mb-3 d-flex align-items-center gap-3">\r
            <span class="placeholder rounded-circle flex-shrink-0" style="width:44px;height:44px"></span>\r
            <div class="flex-grow-1">\r
              <span class="placeholder col-4 rounded d-block mb-2" style="height:13px"></span>\r
              <span class="placeholder col-6 rounded d-block" style="height:11px"></span>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    } @else if (list().length === 0) {\r
      <div class="text-center py-5 text-muted">\r
        <i class="bx bx-user-x" style="font-size:3rem"></i>\r
        <p class="mt-2 mb-3">Belum ada data karyawan.</p>\r
        <a routerLink="/karyawan/baru" class="btn btn-primary btn-sm">Tambah Sekarang</a>\r
      </div>\r
    } @else {\r
      <div class="table-responsive">\r
        <table id="tabelKaryawan" class="table table-hover align-middle mb-0 w-100">\r
          <thead>\r
            <tr>\r
              <th>Nama</th>\r
              <th>Identitas</th>\r
              <th class="text-center">Sisa Cuti</th>\r
              <th class="text-center">Dokumen</th>\r
              <th class="text-center">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (k of list(); track k.id) {\r
              <tr>\r
\r
                <!-- Kolom Nama -->\r
                <td style="min-width:280px">\r
                  <div class="d-flex align-items-center gap-3">\r
\r
                    <!-- Avatar -->\r
                    @if (fotoUrl(k.fotoProfil); as url) {\r
                      <img [src]="url" alt="Foto"\r
                           class="rounded-circle flex-shrink-0"\r
                           style="width:42px;height:42px;object-fit:cover;border:2px solid #e9ecef" />\r
                    } @else {\r
                      <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"\r
                           style="width:42px;height:42px;background:#f3f4f6;color:#9ca3af;font-size:1.1rem">\r
                        <i class="bx bx-user"></i>\r
                      </div>\r
                    }\r
\r
                    <!-- Info teks -->\r
                    <div>\r
                      <!-- Nama + status -->\r
                      <div class="d-flex align-items-center gap-1">\r
                        <a [routerLink]="['/karyawan', k.id]"\r
                           class="fw-semibold text-dark text-decoration-none"\r
                           style="font-size:.9rem"\r
                           (click)="$event.stopPropagation()">\r
                          {{ k.namaLengkap }}\r
                        </a>\r
                        @if (k.statusKerja === 'AKTIF') {\r
                          <i class="bx bxs-circle text-success" style="font-size:.5rem" title="Aktif"></i>\r
                        } @else {\r
                          <i class="bx bxs-circle text-secondary" style="font-size:.5rem" title="{{ k.statusKerja }}"></i>\r
                        }\r
                      </div>\r
                      <!-- Jabatan | Divisi -->\r
                      <div class="text-muted" style="font-size:.77rem;margin-top:2px">\r
                        @if (k.namaJabatan) { <span>{{ k.namaJabatan }}</span> }\r
                        @if (k.namaJabatan && k.namaDivisi) { <span class="mx-1" style="opacity:.4">|</span> }\r
                        @if (k.namaDivisi) { <span>{{ k.namaDivisi }}</span> }\r
                      </div>\r
                      <!-- Zona waktu + generasi -->\r
                      <div style="font-size:.73rem;color:#c4c9d4;margin-top:2px">\r
                        {{ zonaWaktuLabel(k.zonaWaktu) }}\r
                        @if (generasiLabel(k.tanggalLahir)) {\r
                          <span class="mx-1" style="opacity:.5">|</span>\r
                          {{ generasiLabel(k.tanggalLahir) }}\r
                        }\r
                      </div>\r
                    </div>\r
                  </div>\r
                </td>\r
\r
                <!-- Kolom Identitas -->\r
                <td style="min-width:150px">\r
                  @if (k.jenisIdentitas && k.nomorIdentitas) {\r
                    <div class="text-muted fw-semibold" style="font-size:.73rem;letter-spacing:.04em">\r
                      {{ k.jenisIdentitas }}\r
                    </div>\r
                    <div style="font-size:.83rem;color:#374151">{{ k.nomorIdentitas }}</div>\r
                  } @else {\r
                    <span class="text-muted" style="font-size:.82rem">\u2014</span>\r
                  }\r
                </td>\r
\r
                <!-- Kolom Sisa Cuti -->\r
                <td class="text-center" style="min-width:120px">\r
                  <div class="d-flex flex-column align-items-center gap-1">\r
                    <div class="fw-semibold" style="font-size:.95rem">\r
                      {{ k.sisaCuti }} <span class="text-muted small">hari</span>\r
                    </div>\r
                    @if (k.pembaruanCutiAktif) {\r
                      <span class="badge bg-success-subtle text-success border border-success-subtle"\r
                            style="font-size:.62rem"\r
                            [title]="k.tglPembaruanBerikutnya\r
                              ? ('Pembaruan otomatis berikutnya: ' + (k.tglPembaruanBerikutnya | date:'dd MMM yyyy'))\r
                              : 'Pembaruan otomatis aktif'">\r
                        <i class="bx bx-refresh"></i> AUTO\r
                      </span>\r
                    }\r
                    <div class="d-flex align-items-center gap-2">\r
                      <button type="button"\r
                              class="btn p-0 border-0 bg-transparent text-muted lh-1"\r
                              title="Pengaturan Pembaruan Cuti Otomatis" style="font-size:1rem"\r
                              (click)="$event.preventDefault(); $event.stopPropagation(); bukaPengaturanCuti(k)">\r
                        <i class="bx bx-cog"></i>\r
                      </button>\r
                      <button type="button"\r
                              class="btn p-0 border-0 bg-transparent text-muted lh-1"\r
                              title="Riwayat Cuti" style="font-size:1rem"\r
                              (click)="$event.preventDefault(); $event.stopPropagation(); bukaRiwayatCuti(k)">\r
                        <i class="bx bx-history"></i>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </td>\r
\r
                <!-- Kolom Dokumen -->\r
                <td class="text-center">\r
                  <button class="btn p-0 border-0 bg-transparent text-muted lh-1"\r
                          title="Dokumen" style="font-size:1rem">\r
                    <i class="bx bx-file"></i>\r
                  </button>\r
                </td>\r
\r
                <!-- Kolom Aksi -->\r
                <td class="text-center" style="position:relative">\r
                  <div class="d-inline-block" style="position:relative">\r
                    <button class="btn border-0 rounded-2 px-2 lh-1 text-muted"\r
                            style="background:#f3f4f6;font-size:.95rem;letter-spacing:.12em;padding-top:5px;padding-bottom:5px"\r
                            (click)="$event.stopPropagation(); toggleDropdown(k.id)">\r
                      \u2022\u2022\u2022\r
                    </button>\r
\r
                    @if (openDropdownId() === k.id) {\r
                      <div class="aksi-dropdown border rounded-3 shadow-sm py-1"\r
                           style="position:absolute;right:0;top:calc(100% + 4px);min-width:160px;background:#fff;z-index:300">\r
                        <a [routerLink]="['/karyawan', k.id]"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-show text-info" style="font-size:.95rem"></i>\r
                          Profil\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'edit']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-edit text-primary" style="font-size:.95rem"></i>\r
                          Edit\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'perangkat']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-devices text-purple" style="font-size:.95rem;color:#7c3aed"></i>\r
                          Perangkat\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'jadwal-kerja']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-calendar-check" style="font-size:.95rem;color:#0891b2"></i>\r
                          Jadwal Kerja\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'kehadiran']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-time-five" style="font-size:.95rem;color:#059669"></i>\r
                          Kehadiran\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'lembur']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-moon" style="font-size:.95rem;color:#d97706"></i>\r
                          Lembur\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'izin']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-calendar-minus" style="font-size:.95rem;color:#7c3aed"></i>\r
                          Izin\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'cuti']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-calendar-event" style="font-size:.95rem;color:#ec4899"></i>\r
                          Cuti\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'dokumen']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-folder" style="font-size:.95rem;color:#0ea5e9"></i>\r
                          Dokumen\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'klaim']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-receipt" style="font-size:.95rem;color:#7c3aed"></i>\r
                          Klaim\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'payroll']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-dollar-circle" style="font-size:.95rem;color:#059669"></i>\r
                          Payroll\r
                        </a>\r
                        <a [routerLink]="['/karyawan', k.id, 'surat-peringatan']"\r
                           class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark"\r
                           style="font-size:.83rem"\r
                           (click)="closeDropdown()">\r
                          <i class="bx bx-file-blank" style="font-size:.95rem;color:#dc2626"></i>\r
                          Surat Peringatan\r
                        </a>\r
                        <div class="dropdown-divider my-1"></div>\r
                        <button class="d-flex align-items-center gap-2 px-3 py-2 w-100 border-0 bg-transparent text-danger"\r
                                style="font-size:.83rem;cursor:pointer"\r
                                (click)="$event.stopPropagation(); closeDropdown(); confirmDelete(k.id)">\r
                          <i class="bx bx-trash" style="font-size:.95rem"></i>\r
                          Hapus\r
                        </button>\r
                      </div>\r
                    }\r
                  </div>\r
                </td>\r
\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    }\r
\r
  </div>\r
\r
  <!-- Modal konfirmasi hapus -->\r
  @if (confirmDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger">\r
              <i class="bx bx-trash me-2"></i>Hapus Karyawan?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted" style="font-size:.9rem">\r
            Data karyawan dan akun pengguna terkait akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="cancelDelete()">Batal</button>\r
            <button class="btn btn-danger btn-sm px-4" (click)="doDelete()">\r
              <i class="bx bx-trash me-1"></i> Ya, Hapus\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Pengaturan Pembaruan Cuti Otomatis \u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showPengaturanCutiModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:560px">\r
        <div class="modal-content border-0 shadow">\r
\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Pengaturan Pembaruan Cuti Otomatis</h5>\r
            <button class="btn-close" (click)="showPengaturanCutiModal.set(false)"></button>\r
          </div>\r
\r
          <div class="modal-body">\r
\r
            @if (pengaturanError()) {\r
              <div class="alert alert-danger py-2 small">{{ pengaturanError() }}</div>\r
            }\r
\r
            @if (pengaturanLoading()) {\r
              <div class="text-center py-4 text-muted small">\r
                <div class="spinner-border spinner-border-sm me-2"></div>Memuat data...\r
              </div>\r
            } @else if (!pengaturanFormMode()) {\r
\r
              <!-- \u2500\u2500 Tahap awal: belum ada pengaturan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
              <div class="bg-light rounded p-3 small">\r
                Belum terdapat pengaturan sebelumnya,\r
                <a href="javascript:void(0)" class="text-primary fw-semibold text-decoration-none"\r
                   (click)="mulaiPengaturanCuti()">Mulai pengaturan</a>\r
              </div>\r
\r
            } @else {\r
\r
              <!-- \u2500\u2500 Tahap form pengaturan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
              @if (infoMulaiBekerja()) {\r
                <div class="bg-light rounded p-3 mb-3 small">\r
                  <div class="fw-bold mb-1">Info</div>\r
                  {{ infoMulaiBekerja() }}\r
                </div>\r
              }\r
\r
              <!-- Periode Pembaruan -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-5 col-form-label small">Periode Pembaruan Otomatis</label>\r
                <div class="col-sm-7">\r
                  <select class="form-select form-select-sm"\r
                          [ngModel]="pengaturanForm().periodePembaruanBulan"\r
                          (ngModelChange)="pengaturanForm.set({ ...pengaturanForm(), periodePembaruanBulan: +$event })">\r
                    @for (m of [1, 3, 6, 12, 24]; track m) {\r
                      <option [value]="m">{{ m }} Bulan</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <!-- Info text -->\r
              <div class="bg-light rounded p-3 mb-3 small ms-sm-auto"\r
                   style="margin-left:0">\r
                <div class="fw-bold mb-1">Info</div>\r
                Sisa cuti akan otomatis ditambahkan sebanyak\r
                <strong>{{ pengaturanForm().jumlahCutiPembaruan }}</strong>\r
                pada <strong>{{ tglPembaruanBerikutnya() }}</strong>.\r
              </div>\r
\r
              <!-- Sisa Cuti Sebelumnya -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-5 col-form-label small">Sisa Cuti Sebelumnya</label>\r
                <div class="col-sm-7">\r
                  <select class="form-select form-select-sm"\r
                          [ngModel]="pengaturanForm().tambahkanSisaCutiSebelumnya ? 'YA' : 'TIDAK'"\r
                          (ngModelChange)="pengaturanForm.set({ ...pengaturanForm(), tambahkanSisaCutiSebelumnya: $event === 'YA' })">\r
                    <option value="YA">Tambahkan</option>\r
                    <option value="TIDAK">Tidak Ditambahkan</option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <!-- Aktifkan Pengaturan -->\r
              <div class="row align-items-center">\r
                <label class="col-sm-5 col-form-label small">Aktifkan Pengaturan</label>\r
                <div class="col-sm-7">\r
                  <div class="d-flex gap-3">\r
                    <div class="form-check">\r
                      <input type="checkbox" class="form-check-input" id="aktifkanYa"\r
                             [checked]="pengaturanForm().pembaruanCutiAktif"\r
                             (change)="pengaturanForm.set({ ...pengaturanForm(), pembaruanCutiAktif: true })">\r
                      <label class="form-check-label small" for="aktifkanYa">Ya</label>\r
                    </div>\r
                    <div class="form-check">\r
                      <input type="checkbox" class="form-check-input" id="aktifkanTidak"\r
                             [checked]="!pengaturanForm().pembaruanCutiAktif"\r
                             (change)="pengaturanForm.set({ ...pengaturanForm(), pembaruanCutiAktif: false })">\r
                      <label class="form-check-label small" for="aktifkanTidak">Tidak</label>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
            }\r
          </div>\r
\r
          @if (pengaturanFormMode() && !pengaturanLoading()) {\r
            <div class="modal-footer">\r
              <button class="btn btn-primary btn-sm px-4"\r
                      [disabled]="pengaturanSaving()"\r
                      (click)="prosesPengaturanCuti()">\r
                {{ pengaturanSaving() ? 'Memproses...' : 'Proses' }}\r
              </button>\r
              <button class="btn btn-light border btn-sm px-4"\r
                      (click)="showPengaturanCutiModal.set(false)">Batal</button>\r
            </div>\r
          }\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Riwayat Transaksi Cuti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showRiwayatCutiModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
\r
          <div class="modal-header">\r
            <div>\r
              <h5 class="modal-title fw-bold mb-0">\r
                <i class="bx bx-history me-2"></i>Riwayat Transaksi Cuti\r
              </h5>\r
              @if (riwayatKaryawan(); as k) {\r
                <div class="text-muted small mt-1">{{ k.namaLengkap }}</div>\r
              }\r
            </div>\r
            <button type="button" class="btn-close"\r
                    (click)="showRiwayatCutiModal.set(false)"></button>\r
          </div>\r
\r
          <div class="modal-body">\r
\r
            <!-- Ringkasan sisa cuti -->\r
            @if (riwayatSisa(); as s) {\r
              <div class="row g-2 mb-3">\r
                <div class="col-4">\r
                  <div class="bg-light rounded p-3 text-center">\r
                    <div class="text-muted small">Sisa Cuti</div>\r
                    <div class="fw-bold fs-5 text-primary">{{ s.sisaCuti }} hari</div>\r
                  </div>\r
                </div>\r
                <div class="col-4">\r
                  <div class="bg-light rounded p-3 text-center">\r
                    <div class="text-muted small">Terpakai</div>\r
                    <div class="fw-bold fs-5 text-warning">{{ s.terpakai }} hari</div>\r
                  </div>\r
                </div>\r
                <div class="col-4">\r
                  <div class="bg-light rounded p-3 text-center">\r
                    <div class="text-muted small">Berakhir</div>\r
                    <div class="fw-bold fs-6">{{ formatTglRiwayat(s.tglCutiBerakhir) }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
            }\r
\r
            @if (riwayatError()) {\r
              <div class="alert alert-danger py-2 small">{{ riwayatError() }}</div>\r
            }\r
\r
            @if (riwayatLoading()) {\r
              <div class="text-center py-4 text-muted small">\r
                <div class="spinner-border spinner-border-sm me-2"></div>Memuat riwayat...\r
              </div>\r
            } @else if (riwayatCutiList().length === 0) {\r
              <div class="text-center py-4 text-muted small">\r
                <i class="bx bx-calendar-x" style="font-size:2.5rem"></i>\r
                <div class="mt-2">Belum ada transaksi cuti.</div>\r
              </div>\r
            } @else {\r
              <div class="table-responsive">\r
                <table class="table table-sm table-hover align-middle mb-0">\r
                  <thead class="table-light">\r
                    <tr>\r
                      <th>Tgl. Pengajuan</th>\r
                      <th>Jenis</th>\r
                      <th>Periode</th>\r
                      <th class="text-center">Hari</th>\r
                      <th>Keperluan</th>\r
                      <th class="text-center">Status</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (c of riwayatCutiList(); track c.id) {\r
                      <tr>\r
                        <td class="small">{{ formatTglWaktu(c.createdAt) }}</td>\r
                        <td class="small">\r
                          <span class="fw-semibold">{{ jenisCutiLabel(c.jenisCuti) }}</span>\r
                          @if (c.sesiSetengahHari) {\r
                            <div class="text-muted" style="font-size:.7rem">\r
                              Sesi {{ c.sesiSetengahHari }}\r
                            </div>\r
                          }\r
                          @if (!c.mengurangiSisaCuti) {\r
                            <div class="text-info" style="font-size:.7rem">\r
                              <i class="bx bx-info-circle"></i> Tidak mengurangi cuti\r
                            </div>\r
                          }\r
                        </td>\r
                        <td class="small">\r
                          {{ formatTglRiwayat(c.tanggalMulai) }}\r
                          @if (c.tanggalSelesai && c.tanggalSelesai !== c.tanggalMulai) {\r
                            <span class="text-muted"> \u2013 </span>\r
                            {{ formatTglRiwayat(c.tanggalSelesai) }}\r
                          }\r
                        </td>\r
                        <td class="text-center small fw-semibold">{{ c.jumlahHari }}</td>\r
                        <td class="small text-muted" style="max-width:200px">\r
                          <div class="text-truncate" [title]="c.keperluan">{{ c.keperluan }}</div>\r
                          @if (c.catatanPenolakan) {\r
                            <div class="text-danger text-truncate" style="font-size:.7rem"\r
                                 [title]="c.catatanPenolakan">\r
                              <i class="bx bx-x-circle"></i> {{ c.catatanPenolakan }}\r
                            </div>\r
                          }\r
                        </td>\r
                        <td class="text-center">\r
                          <span class="badge {{ badgeStatusCuti(c.status) }}"\r
                                style="font-size:.65rem">\r
                            {{ c.status }}\r
                          </span>\r
                        </td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
              <div class="text-muted small mt-2">\r
                Menampilkan <strong>{{ riwayatCutiList().length }}</strong> transaksi cuti.\r
              </div>\r
            }\r
\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    (click)="showRiwayatCutiModal.set(false)">Tutup</button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Karyawan Dihapus (Trash) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showTrashModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-trash me-2 text-danger"></i>Karyawan Dihapus\r
            </h5>\r
            <button type="button" class="btn-close"\r
                    (click)="showTrashModal.set(false)"></button>\r
          </div>\r
\r
          <div class="modal-body">\r
            @if (trashError()) {\r
              <div class="alert alert-danger py-2 small">{{ trashError() }}</div>\r
            }\r
\r
            @if (trashLoading()) {\r
              <div class="text-center py-4 text-muted small">\r
                <div class="spinner-border spinner-border-sm me-2"></div>Memuat...\r
              </div>\r
            } @else if (trashList().length === 0) {\r
              <div class="text-center py-5 text-muted">\r
                <i class="bx bx-trash" style="font-size:3rem"></i>\r
                <div class="mt-2">Tidak ada karyawan yang dihapus.</div>\r
              </div>\r
            } @else {\r
              <div class="table-responsive">\r
                <table class="table table-sm table-hover align-middle mb-0">\r
                  <thead class="table-light">\r
                    <tr>\r
                      <th>Nama</th>\r
                      <th>Jabatan / Divisi</th>\r
                      <th>Dihapus pada</th>\r
                      <th class="text-center">Aksi</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (k of trashList(); track k.id) {\r
                      <tr>\r
                        <td>\r
                          <div class="d-flex align-items-center gap-2">\r
                            @if (fotoUrl(k.fotoProfil); as url) {\r
                              <img [src]="url" alt="" class="rounded-circle"\r
                                   style="width:34px;height:34px;object-fit:cover;border:2px solid #e9ecef">\r
                            } @else {\r
                              <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                                   style="width:34px;height:34px;background:#f3f4f6;color:#9ca3af">\r
                                <i class="bx bx-user"></i>\r
                              </div>\r
                            }\r
                            <div>\r
                              <div class="fw-semibold small">{{ k.namaLengkap }}</div>\r
                              <div class="text-muted" style="font-size:.7rem">NIP: {{ k.nip }}</div>\r
                            </div>\r
                          </div>\r
                        </td>\r
                        <td class="small text-muted">\r
                          @if (k.namaJabatan) { {{ k.namaJabatan }} }\r
                          @if (k.namaJabatan && k.namaDivisi) { <span class="mx-1" style="opacity:.4">|</span> }\r
                          @if (k.namaDivisi) { {{ k.namaDivisi }} }\r
                          @if (!k.namaJabatan && !k.namaDivisi) { \u2014 }\r
                        </td>\r
                        <td class="small text-muted">{{ formatTglWaktuId(k.deletedAt) }}</td>\r
                        <td class="text-center">\r
                          <button type="button" class="btn btn-sm btn-outline-success me-1"\r
                                  title="Pulihkan"\r
                                  (click)="confirmRestoreId.set(k.id)">\r
                            <i class="bx bx-undo"></i> Pulihkan\r
                          </button>\r
                          <button type="button" class="btn btn-sm btn-outline-danger"\r
                                  title="Hapus permanen"\r
                                  (click)="confirmHardDeleteId.set(k.id)">\r
                            <i class="bx bx-trash"></i> Permanen\r
                          </button>\r
                        </td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
              <div class="text-muted small mt-2">\r
                Menampilkan <strong>{{ trashList().length }}</strong> karyawan dihapus.\r
              </div>\r
            }\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    (click)="showTrashModal.set(false)">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Konfirmasi Pulihkan -->\r
  @if (confirmRestoreId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1060">\r
      <div class="modal-dialog modal-dialog-centered modal-sm">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h6 class="modal-title text-success">\r
              <i class="bx bx-undo me-2"></i>Pulihkan Karyawan?\r
            </h6>\r
          </div>\r
          <div class="modal-body small text-muted">\r
            Karyawan akan dikembalikan ke daftar aktif.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-light border btn-sm" [disabled]="trashActionBusy()"\r
                    (click)="confirmRestoreId.set(null)">Batal</button>\r
            <button class="btn btn-success btn-sm" [disabled]="trashActionBusy()"\r
                    (click)="doRestore()">\r
              {{ trashActionBusy() ? 'Memproses...' : 'Pulihkan' }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Konfirmasi Hapus Permanen -->\r
  @if (confirmHardDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1060">\r
      <div class="modal-dialog modal-dialog-centered modal-sm">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h6 class="modal-title text-danger">\r
              <i class="bx bx-trash me-2"></i>Hapus Permanen?\r
            </h6>\r
          </div>\r
          <div class="modal-body small text-muted">\r
            Karyawan akan dihapus permanen dari sistem.\r
            <strong class="text-danger">Tindakan ini tidak dapat dibatalkan.</strong>\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-light border btn-sm" [disabled]="trashActionBusy()"\r
                    (click)="confirmHardDeleteId.set(null)">Batal</button>\r
            <button class="btn btn-danger btn-sm" [disabled]="trashActionBusy()"\r
                    (click)="doHardDelete()">\r
              {{ trashActionBusy() ? 'Menghapus...' : 'Ya, Hapus' }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Ekspor Excel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showEksporModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:520px">\r
        <div class="modal-content border-0 shadow">\r
\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bxs-file-export me-2 text-success"></i>Ekspor Data Karyawan\r
            </h5>\r
            <button type="button" class="btn-close"\r
                    (click)="showEksporModal.set(false)"></button>\r
          </div>\r
\r
          <div class="modal-body">\r
\r
            @if (eksporError()) {\r
              <div class="alert alert-danger py-2 small">{{ eksporError() }}</div>\r
            }\r
\r
            <!-- Filter Divisi -->\r
            <div class="mb-3">\r
              <label class="form-label small fw-semibold">Filter Divisi</label>\r
              <select class="form-select form-select-sm"\r
                      [ngModel]="eksporForm().divisiId"\r
                      (ngModelChange)="eksporForm.set({ ...eksporForm(), divisiId: $event !== null && $event !== '' ? +$event : null })">\r
                <option [ngValue]="null">\u2014 Semua Divisi \u2014</option>\r
                @for (d of divisiList(); track d.id) {\r
                  <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
                }\r
              </select>\r
              <div class="form-text small">\r
                Estimasi: <strong>{{ totalKaryawanFiltered() }}</strong> karyawan akan diekspor.\r
              </div>\r
            </div>\r
\r
            <!-- Jumlah Target Karyawan -->\r
            <div class="mb-3">\r
              <label class="form-label small fw-semibold">Jumlah Target Karyawan</label>\r
              <input type="number" min="1" class="form-control form-control-sm"\r
                     placeholder="Kosongkan untuk semua"\r
                     [ngModel]="eksporForm().limit"\r
                     (ngModelChange)="eksporForm.set({ ...eksporForm(), limit: $event ? +$event : null })">\r
              <div class="form-text small text-muted">\r
                Maksimum karyawan yang diekspor (kosongkan = tanpa batas).\r
              </div>\r
            </div>\r
\r
            <hr class="my-3">\r
\r
            <!-- Email -->\r
            <div class="mb-2">\r
              <label class="form-label small fw-semibold">\r
                <i class="bx bx-envelope me-1"></i>Kirim ke Email\r
              </label>\r
              <input type="email" class="form-control form-control-sm"\r
                     placeholder="contoh@email.com"\r
                     [ngModel]="eksporForm().email"\r
                     (ngModelChange)="eksporForm.set({ ...eksporForm(), email: $event })">\r
              <div class="form-text small text-muted">\r
                Isi email jika ingin file dikirim sebagai lampiran (kosongkan jika hanya ingin unduh).\r
              </div>\r
            </div>\r
\r
          </div>\r
\r
          <div class="modal-footer d-flex justify-content-between">\r
            <button type="button" class="btn btn-light border btn-sm"\r
                    [disabled]="eksporBusy()"\r
                    (click)="showEksporModal.set(false)">Batal</button>\r
\r
            <div class="d-flex gap-2">\r
              @if (eksporForm().email && eksporForm().email.trim().length > 0) {\r
                <button type="button" class="btn btn-success btn-sm px-3"\r
                        [disabled]="eksporBusy()"\r
                        (click)="kirimEksporKeEmail()">\r
                  <i class="bx bx-mail-send me-1"></i>\r
                  {{ eksporBusy() ? 'Mengirim...' : 'Kirim ke Email' }}\r
                </button>\r
              } @else {\r
                <button type="button" class="btn btn-primary btn-sm px-3"\r
                        [disabled]="eksporBusy()"\r
                        (click)="unduhEkspor()">\r
                  <i class="bx bx-download me-1"></i>\r
                  {{ eksporBusy() ? 'Memproses...' : 'Unduh Excel' }}\r
                </button>\r
              }\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Impor Excel \u2014 Tahap 1: Pilih Tipe \u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (imporTahap() === 'pilih') {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:820px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Impor Excel</h5>\r
            <button type="button" class="btn-close" (click)="tutupImpor()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="row g-3">\r
              <div class="col-6 col-md-3">\r
                <button type="button"\r
                        class="w-100 h-100 border rounded-3 p-3 d-flex flex-column align-items-center justify-content-center bg-light"\r
                        style="cursor:pointer;min-height:140px"\r
                        (click)="pilihTipeImpor('tambah')">\r
                  <i class="bx bx-user-plus" style="font-size:42px"></i>\r
                  <div class="mt-2 small fw-semibold text-center">Tambah Karyawan</div>\r
                </button>\r
              </div>\r
              <div class="col-6 col-md-3">\r
                <button type="button"\r
                        class="w-100 h-100 border rounded-3 p-3 d-flex flex-column align-items-center justify-content-center bg-light"\r
                        style="cursor:pointer;min-height:140px"\r
                        (click)="pilihTipeImpor('perbarui')">\r
                  <i class="bx bx-edit" style="font-size:42px"></i>\r
                  <div class="mt-2 small fw-semibold text-center">Perbarui Karyawan</div>\r
                </button>\r
              </div>\r
              <div class="col-6 col-md-3">\r
                <button type="button"\r
                        class="w-100 h-100 border rounded-3 p-3 d-flex flex-column align-items-center justify-content-center bg-light"\r
                        style="cursor:pointer;min-height:140px"\r
                        (click)="pilihTipeImpor('bpjs')">\r
                  <i class="bx bx-credit-card" style="font-size:42px"></i>\r
                  <div class="mt-2 small fw-semibold text-center">BPJS Karyawan</div>\r
                </button>\r
              </div>\r
              <div class="col-6 col-md-3">\r
                <button type="button"\r
                        class="w-100 h-100 border rounded-3 p-3 d-flex flex-column align-items-center justify-content-center bg-light"\r
                        style="cursor:pointer;min-height:140px"\r
                        (click)="pilihTipeImpor('pph21')">\r
                  <i class="bx bx-money" style="font-size:42px"></i>\r
                  <div class="mt-2 small fw-semibold text-center">PPH 21 Karyawan</div>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Impor Excel \u2014 Tahap 2: Form Upload \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (imporTahap() === 'form') {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:640px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Impor Excel {{ labelTipeImpor(imporTipe()) }}</h5>\r
            <button type="button" class="btn-close" (click)="tutupImpor()"></button>\r
          </div>\r
          <div class="modal-body">\r
\r
            <div class="alert alert-light border small mb-3">\r
              <div class="fw-bold mb-2">PENTING!</div>\r
              <ul class="mb-0 ps-3">\r
                <li>\r
                  @switch (imporTipe()) {\r
                    @case ('tambah') {\r
                      Untuk melakukan impor karyawan, pastikan file yang diupload sudah sesuai\r
                      format yang ditentukan.\r
                    }\r
                    @case ('perbarui') {\r
                      Untuk melakukan impor data perbarui karyawan, pastikan file yang diupload\r
                      sudah sesuai format yang ditentukan.\r
                    }\r
                    @case ('bpjs') {\r
                      Untuk melakukan impor data BPJS karyawan, pastikan file yang diupload\r
                      sudah sesuai format yang ditentukan.\r
                    }\r
                    @case ('pph21') {\r
                      Untuk melakukan impor data PPH 21 karyawan, pastikan file yang diupload\r
                      sudah sesuai format yang ditentukan.\r
                    }\r
                    @default {\r
                      Untuk melakukan impor, pastikan file yang diupload sudah sesuai format yang ditentukan.\r
                    }\r
                  }\r
                  <a href="javascript:void(0)" class="text-primary fw-semibold"\r
                     (click)="unduhTemplateImpor()">\r
                    {{ imporTplBusy() ? 'Mengunduh...' : 'Download format impor excel di sini.' }}\r
                  </a>\r
                </li>\r
                @if (imporTipe() === 'tambah') {\r
                  <li>\r
                    Upload dilakukan per divisi, silakan pisahkan data karyawan sesuai divisi\r
                    masing-masing. Bila karyawan tidak memiliki divisi maka saat impor data\r
                    tidak perlu memilih divisi.\r
                  </li>\r
                }\r
                @if (imporTipe() === 'perbarui') {\r
                  <li>\r
                    Aksi impor hanya akan dijalankan jika semua data sudah benar.\r
                  </li>\r
                  <li>\r
                    Jika ada data yang perlu diperbaiki, sistem akan segera menampilkan\r
                    informasinya setelah klik tombol proses.\r
                  </li>\r
                }\r
                @if (imporTipe() === 'pph21') {\r
                  <li class="text-danger">\r
                    Catatan: fitur impor PPH 21 masih dalam pengembangan.\r
                  </li>\r
                }\r
              </ul>\r
            </div>\r
\r
            @if (imporError()) {\r
              <div class="alert alert-danger py-2 small">{{ imporError() }}</div>\r
            }\r
\r
            <!-- Form -->\r
            @if (imporTipe() === 'tambah') {\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-4 col-form-label small">Divisi (Opsional)</label>\r
                <div class="col-sm-8">\r
                  <select class="form-select form-select-sm"\r
                          [ngModel]="imporDivisiId()"\r
                          (ngModelChange)="imporDivisiId.set($event !== null && $event !== '' ? +$event : null)">\r
                    <option [ngValue]="null">--Divisi--</option>\r
                    @for (d of divisiList(); track d.id) {\r
                      <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
            }\r
\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-4 col-form-label small">\r
                Pilih Berkas <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-8">\r
                <input type="file" accept=".xlsx" class="form-control form-control-sm"\r
                       (change)="onImporFileChange($event)">\r
                <div class="form-text small text-muted">Ukuran Maksimal: 500 KB</div>\r
              </div>\r
            </div>\r
\r
            <!-- Hasil impor -->\r
            @if (imporResult(); as r) {\r
              <hr class="my-3">\r
              <div class="d-flex gap-3 mb-2 small">\r
                <span class="badge bg-success">Berhasil: {{ r.berhasil }}</span>\r
                <span class="badge bg-danger">Gagal: {{ r.gagal }}</span>\r
              </div>\r
              @if (r.errors.length) {\r
                <div class="table-responsive" style="max-height:240px;overflow:auto">\r
                  <table class="table table-sm table-bordered small mb-0">\r
                    <thead class="table-light">\r
                      <tr>\r
                        <th style="width:60px">Baris</th>\r
                        <th>NIP</th>\r
                        <th>Nama</th>\r
                        <th>Pesan</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (e of r.errors; track $index) {\r
                        <tr>\r
                          <td>{{ e.baris }}</td>\r
                          <td>{{ e.nip || '-' }}</td>\r
                          <td>{{ e.nama || '-' }}</td>\r
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
            <button type="button" class="btn btn-primary btn-sm px-4"\r
                    [disabled]="imporBusy() || !imporFile()"\r
                    (click)="prosesImporExcel()">\r
              {{ imporBusy() ? 'Memproses...' : 'Proses' }}\r
            </button>\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    [disabled]="imporBusy()"\r
                    (click)="kembaliPilihTipeImpor()">Batal</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Sub-modal: Download Format Impor Perbarui Karyawan \u2500 -->\r
  @if (showSubPerbarui()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1065">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:720px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Download Format Impor {{ labelTipeImpor(subPerbaruiTipe()) }}</h5>\r
            <button type="button" class="btn-close" (click)="tutupSubPerbarui()"></button>\r
          </div>\r
          <div class="modal-body">\r
\r
            <div class="alert alert-light border small mb-3">\r
              Untuk mempermudah impor, silakan tentukan karyawan berdasarkan divisi\r
              atau Anda bisa memilih karyawan secara spesifik.\r
            </div>\r
\r
            <!-- Divisi -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label small">Divisi</label>\r
              <div class="col-sm-9">\r
                <select class="form-select form-select-sm"\r
                        [ngModel]="subPerbaruiDivisiId()"\r
                        (ngModelChange)="subPerbaruiDivisiId.set($event !== null && $event !== '' ? +$event : null)">\r
                  <option [ngValue]="null">--Divisi--</option>\r
                  @for (d of divisiList(); track d.id) {\r
                    <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Spesifik Karyawan -->\r
            <div class="row mb-2 align-items-start">\r
              <label class="col-sm-3 col-form-label small">Spesifik Karyawan</label>\r
              <div class="col-sm-9 position-relative">\r
                <select class="form-select form-select-sm"\r
                        [ngModel]="null"\r
                        (ngModelChange)="onPilihKaryawanSub($event)">\r
                  <option [ngValue]="null">\r
                    {{ subPerbaruiDivisiId() == null\r
                        ? '--Pilih Karyawan (semua divisi)--'\r
                        : '--Pilih Karyawan--' }}\r
                  </option>\r
                  @for (k of karyawanOptionsForSub(); track k.id) {\r
                    <option [ngValue]="k.id"\r
                            [disabled]="subPerbaruiKaryawanIds().includes(k.id)">\r
                      {{ k.namaLengkap }}{{ k.nip ? ' - ' + k.nip : '' }}\r
                    </option>\r
                  }\r
                </select>\r
                @if (karyawanOptionsForSub().length === 0) {\r
                  <div class="form-text small text-muted">\r
                    Tidak ada karyawan tersedia{{ subPerbaruiDivisiId() != null ? ' pada divisi ini' : '' }}.\r
                  </div>\r
                }\r
\r
                <!-- Chip karyawan terpilih -->\r
                @if (subPerbaruiKaryawanIds().length > 0) {\r
                  <div class="d-flex flex-wrap gap-2 mt-2">\r
                    @for (id of subPerbaruiKaryawanIds(); track id) {\r
                      <span class="badge bg-primary-subtle text-primary border border-primary-subtle d-flex align-items-center gap-1"\r
                            style="font-size:.75rem">\r
                        {{ namaKaryawanById(id) }}\r
                        <button type="button" class="btn btn-sm p-0 border-0 bg-transparent text-primary"\r
                                style="line-height:1" (click)="hapusKaryawanSub(id)">\r
                          <i class="bx bx-x"></i>\r
                        </button>\r
                      </span>\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
\r
            <div class="form-text small text-muted ms-sm-auto"\r
                 style="margin-left:0">\r
              Jika tidak memilih divisi maupun karyawan, template akan diisi <strong>seluruh karyawan</strong>.\r
            </div>\r
\r
          </div>\r
          <div class="modal-footer d-flex justify-content-center gap-2">\r
            <button type="button" class="btn btn-primary btn-sm px-4"\r
                    [disabled]="imporTplBusy()"\r
                    (click)="prosesUnduhPerbarui()">\r
              {{ imporTplBusy() ? 'Mengunduh...' : 'Proses' }}\r
            </button>\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    (click)="tutupSubPerbarui()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Toast notifikasi \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (toastMsg()) {\r
    <div class="position-fixed top-0 end-0 p-3" style="z-index:1100">\r
      <div class="toast show align-items-center text-white border-0"\r
           [class.bg-success]="toastType() === 'success'"\r
           [class.bg-danger]="toastType() === 'danger'"\r
           [class.bg-warning]="toastType() === 'warning'"\r
           role="alert">\r
        <div class="d-flex">\r
          <div class="toast-body small">{{ toastMsg() }}</div>\r
          <button type="button" class="btn-close btn-close-white me-2 m-auto"\r
                  (click)="toastMsg.set('')"></button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal: Aksi Massal \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showAksiMassalModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1080">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:720px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Aksi Massal</h5>\r
            <button type="button" class="btn-close" (click)="tutupAksiMassal()"></button>\r
          </div>\r
          <div class="modal-body">\r
\r
            <!-- Target -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label small">\r
                Target <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9">\r
                <select class="form-select form-select-sm"\r
                        [value]="aksiMassalTarget()"\r
                        (change)="aksiMassalTarget.set($any($event.target).value)">\r
                  <option value="">-- Penerima --</option>\r
                  <option value="SEMUA">Semua</option>\r
                  <option value="DIVISI">Divisi tertentu</option>\r
                  <option value="KARYAWAN">Karyawan tertentu</option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Target = Divisi tertentu \u2192 pilih divisi + spesifik + terkecuali -->\r
            @if (aksiMassalTarget() === 'DIVISI') {\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Divisi <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm"\r
                          [value]="aksiMassalDivisiId() ?? ''"\r
                          (change)="aksiMassalDivisiId.set($any($event.target).value ? +$any($event.target).value : null);\r
                                    aksiMassalKaryawanIds.set([]); aksiMassalKaryawanExcl.set([])">\r
                    <option value="">--Divisi--</option>\r
                    @for (d of divisiList(); track d.id) {\r
                      <option [value]="d.id">{{ d.namaDivisi }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-3 col-form-label small">\r
                  Penerima spesifik <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm"\r
                          (change)="pilihPenerimaSpesifik($any($event.target).value ? +$any($event.target).value : null);\r
                                    $any($event.target).value = ''">\r
                    <option value="">Tulis kata kunci\u2026</option>\r
                    @for (k of amPenerimaOptions('', aksiMassalKaryawanIds()); track k.id) {\r
                      <option [value]="k.id">{{ k.namaLengkap }}</option>\r
                    }\r
                  </select>\r
                  @if (aksiMassalKaryawanIds().length > 0) {\r
                    <div class="d-flex flex-wrap gap-1 mt-2">\r
                      @for (id of aksiMassalKaryawanIds(); track id) {\r
                        <span class="badge bg-primary-subtle text-primary border border-primary-subtle">\r
                          {{ namaKaryawanById(id) }}\r
                          <i class="bx bx-x ms-1" style="cursor:pointer"\r
                             (click)="hapusPenerimaSpesifik(id)"></i>\r
                        </span>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-3 col-form-label small">Penerima terkecuali</label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm"\r
                          (change)="pilihPenerimaExcl($any($event.target).value ? +$any($event.target).value : null);\r
                                    $any($event.target).value = ''">\r
                    <option value="">Tulis kata kunci\u2026</option>\r
                    @for (k of amPenerimaOptions('', aksiMassalKaryawanExcl()); track k.id) {\r
                      <option [value]="k.id">{{ k.namaLengkap }}</option>\r
                    }\r
                  </select>\r
                  @if (aksiMassalKaryawanExcl().length > 0) {\r
                    <div class="d-flex flex-wrap gap-1 mt-2">\r
                      @for (id of aksiMassalKaryawanExcl(); track id) {\r
                        <span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle">\r
                          {{ namaKaryawanById(id) }}\r
                          <i class="bx bx-x ms-1" style="cursor:pointer"\r
                             (click)="hapusPenerimaExcl(id)"></i>\r
                        </span>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- Target = Karyawan tertentu \u2192 pilih karyawan -->\r
            @if (aksiMassalTarget() === 'KARYAWAN') {\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-3 col-form-label small">\r
                  Penerima spesifik <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm"\r
                          (change)="pilihPenerimaSpesifik($any($event.target).value ? +$any($event.target).value : null);\r
                                    $any($event.target).value = ''">\r
                    <option value="">Tulis kata kunci\u2026</option>\r
                    @for (k of amPenerimaOptions('', aksiMassalKaryawanIds()); track k.id) {\r
                      <option [value]="k.id">{{ k.namaLengkap }}</option>\r
                    }\r
                  </select>\r
                  @if (aksiMassalKaryawanIds().length > 0) {\r
                    <div class="d-flex flex-wrap gap-1 mt-2">\r
                      @for (id of aksiMassalKaryawanIds(); track id) {\r
                        <span class="badge bg-primary-subtle text-primary border border-primary-subtle">\r
                          {{ namaKaryawanById(id) }}\r
                          <i class="bx bx-x ms-1" style="cursor:pointer"\r
                             (click)="hapusPenerimaSpesifik(id)"></i>\r
                        </span>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- Aksi -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-3 col-form-label small">\r
                Aksi <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9">\r
                <select class="form-select form-select-sm"\r
                        [value]="aksiMassalAksi()"\r
                        (change)="aksiMassalAksi.set($any($event.target).value)">\r
                  <option value="">--Aksi--</option>\r
                  <option value="SAMAKAN_SISA_CUTI">Samakan sisa cuti</option>\r
                  <option value="TAMBAH_SISA_CUTI">Tambah sisa cuti</option>\r
                  <option value="KURANGI_SISA_CUTI">Kurangi sisa cuti</option>\r
                  <option value="ATUR_IZIN_JAM">Atur Izin Jam Karyawan</option>\r
                  <option value="PINDAH_DIVISI">Pindah Divisi</option>\r
                  <option value="KIRIM_EMAIL_VERIFIKASI">Kirim Email Verifikasi</option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            @if (aksiMassalAksi()) {\r
              <div class="alert alert-warning py-2 small mb-3">\r
                Mohon hati-hati, aksi yang sudah dikirimkan tidak dapat dibatalkan.\r
              </div>\r
            }\r
\r
            <!-- Aksi: Samakan sisa cuti -->\r
            @if (aksiMassalAksi() === 'SAMAKAN_SISA_CUTI') {\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Sisa Cuti <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-3">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="amSamakanSisa() ?? ''"\r
                         (input)="amSamakanSisa.set($any($event.target).value === '' ? null : +$any($event.target).value)">\r
                </div>\r
              </div>\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">Tgl. Cuti Berakhir</label>\r
                <div class="col-sm-4">\r
                  <input type="date" class="form-control form-control-sm"\r
                         [value]="amSamakanTglBerakhir()"\r
                         (input)="amSamakanTglBerakhir.set($any($event.target).value)">\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- Aksi: Tambah sisa cuti -->\r
            @if (aksiMassalAksi() === 'TAMBAH_SISA_CUTI') {\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Nilai Penambahan <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-3">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="amTambahNilai() ?? ''"\r
                         (input)="amTambahNilai.set($any($event.target).value === '' ? null : +$any($event.target).value)">\r
                </div>\r
              </div>\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">Tambah Bulan Masa Aktif</label>\r
                <div class="col-sm-3">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="amTambahBulanMasaAktif() ?? ''"\r
                         (input)="amTambahBulanMasaAktif.set($any($event.target).value === '' ? null : +$any($event.target).value)">\r
                </div>\r
                <div class="col-sm-2 small text-muted">Bulan</div>\r
              </div>\r
            }\r
\r
            <!-- Aksi: Kurangi sisa cuti -->\r
            @if (aksiMassalAksi() === 'KURANGI_SISA_CUTI') {\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Nilai Pengurangan <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-3">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="amKurangiNilai() ?? ''"\r
                         (input)="amKurangiNilai.set($any($event.target).value === '' ? null : +$any($event.target).value)">\r
                </div>\r
              </div>\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">Kurangi Bulan Masa Aktif</label>\r
                <div class="col-sm-3">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="amKurangiBulanMasaAktif() ?? ''"\r
                         (input)="amKurangiBulanMasaAktif.set($any($event.target).value === '' ? null : +$any($event.target).value)">\r
                </div>\r
                <div class="col-sm-2 small text-muted">Bulan</div>\r
              </div>\r
            }\r
\r
            <!-- Aksi: Atur Izin Jam Karyawan -->\r
            @if (aksiMassalAksi() === 'ATUR_IZIN_JAM') {\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-5 col-form-label small">Karyawan dapat mengganti izin jam?</label>\r
                <div class="col-sm-7 d-flex gap-3 align-items-center">\r
                  <div class="form-check">\r
                    <input type="checkbox" class="form-check-input" id="izinGantiYa"\r
                           [checked]="amIzinDapatGanti()"\r
                           (change)="amIzinDapatGanti.set(true)">\r
                    <label class="form-check-label small" for="izinGantiYa">YA</label>\r
                  </div>\r
                  <div class="form-check">\r
                    <input type="checkbox" class="form-check-input" id="izinGantiTidak"\r
                           [checked]="!amIzinDapatGanti()"\r
                           (change)="amIzinDapatGanti.set(false)">\r
                    <label class="form-check-label small" for="izinGantiTidak">TIDAK</label>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-5 col-form-label small">Kenakan potongan izin jam pada rincian gaji</label>\r
                <div class="col-sm-7 d-flex gap-3 align-items-center">\r
                  <div class="form-check">\r
                    <input type="checkbox" class="form-check-input" id="izinPotYa"\r
                           [checked]="amIzinPotonganRincian()"\r
                           (change)="amIzinPotonganRincian.set(true)">\r
                    <label class="form-check-label small" for="izinPotYa">YA</label>\r
                  </div>\r
                  <div class="form-check">\r
                    <input type="checkbox" class="form-check-input" id="izinPotTidak"\r
                           [checked]="!amIzinPotonganRincian()"\r
                           (change)="amIzinPotonganRincian.set(false)">\r
                    <label class="form-check-label small" for="izinPotTidak">TIDAK</label>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-5 col-form-label small">\r
                  Kenakan Denda Keterlambatan jika presensi masuk lebih dari selesai izin jam\r
                </label>\r
                <div class="col-sm-7 d-flex gap-3 align-items-center">\r
                  <div class="form-check">\r
                    <input type="checkbox" class="form-check-input" id="izinDendaYa"\r
                           [checked]="amIzinDendaTelat()"\r
                           (change)="amIzinDendaTelat.set(true)">\r
                    <label class="form-check-label small" for="izinDendaYa">YA</label>\r
                  </div>\r
                  <div class="form-check">\r
                    <input type="checkbox" class="form-check-input" id="izinDendaTidak"\r
                           [checked]="!amIzinDendaTelat()"\r
                           (change)="amIzinDendaTelat.set(false)">\r
                    <label class="form-check-label small" for="izinDendaTidak">TIDAK</label>\r
                  </div>\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- Aksi: Pindah Divisi -->\r
            @if (aksiMassalAksi() === 'PINDAH_DIVISI') {\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Divisi <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm"\r
                          [value]="amPindahDivisiId() ?? ''"\r
                          (change)="amPindahDivisiId.set($any($event.target).value ? +$any($event.target).value : null)">\r
                    <option value="">--Divisi--</option>\r
                    @for (d of divisiList(); track d.id) {\r
                      <option [value]="d.id">{{ d.namaDivisi }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
            }\r
\r
            @if (aksiMassalError()) {\r
              <div class="alert alert-danger py-2 small mb-0">\r
                {{ aksiMassalError() }}\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer d-flex justify-content-center gap-2">\r
            <button type="button" class="btn btn-sm px-4 text-white"\r
                    style="background:#6366f1;border-color:#6366f1"\r
                    [disabled]="aksiMassalBusy()"\r
                    (click)="prosesAksiMassal()">\r
              @if (aksiMassalBusy()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
              Proses\r
            </button>\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    (click)="tutupAksiMassal()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
\r
`, styles: [`@charset "UTF-8";

/* src/app/features/karyawan/karyawan-list/karyawan-list.component.scss */
:host {
  display: block;
}
:host ::ng-deep {
}
:host ::ng-deep .dataTables_wrapper {
  padding: 0;
}
:host ::ng-deep .dataTables_wrapper .dataTables_length,
:host ::ng-deep .dataTables_wrapper .dataTables_filter {
  padding: 16px 20px 12px;
}
:host ::ng-deep .dataTables_wrapper .dataTables_length label,
:host ::ng-deep .dataTables_wrapper .dataTables_filter label {
  font-size: 0.82rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}
:host ::ng-deep .dataTables_wrapper .dataTables_filter {
  text-align: right;
}
:host ::ng-deep .dataTables_wrapper .dataTables_length select,
:host ::ng-deep .dataTables_wrapper .dataTables_filter input {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.83rem;
  color: #374151;
  background: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
:host ::ng-deep .dataTables_wrapper .dataTables_length select:focus,
:host ::ng-deep .dataTables_wrapper .dataTables_filter input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}
:host ::ng-deep .dataTables_wrapper .dataTables_filter input {
  min-width: 200px;
  padding-left: 32px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='M21 21l-4.35-4.35'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
}
:host ::ng-deep .dataTables_wrapper {
}
:host ::ng-deep .dataTables_wrapper .dataTables_info {
  font-size: 0.78rem;
  color: #9ca3af;
  padding: 12px 20px 16px;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate {
  padding: 8px 20px 16px;
  text-align: right;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate span {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px !important;
  border-radius: 7px !important;
  border: 1px solid transparent !important;
  font-size: 0.82rem;
  color: #374151 !important;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: transparent !important;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button:hover:not(.disabled):not(.current) {
  background: #f3f4f6 !important;
  color: #6366f1 !important;
  border-color: #e5e7eb !important;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button.current,
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
  background: #6366f1 !important;
  color: #fff !important;
  border-color: #6366f1 !important;
  font-weight: 600;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover {
  color: #d1d5db !important;
  cursor: default;
  background: transparent !important;
}
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button.previous,
:host ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button.next {
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}
:host ::ng-deep {
}
:host ::ng-deep #tabelKaryawan thead tr th {
  background: #f9fafb !important;
  border-top: none !important;
  border-bottom: 2px solid #f1f3f5 !important;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #9ca3af;
  text-transform: uppercase;
  padding: 13px 16px;
  white-space: nowrap;
}
:host ::ng-deep #tabelKaryawan thead tr th.sorting {
  cursor: pointer;
}
:host ::ng-deep #tabelKaryawan thead tr th.sorting::before,
:host ::ng-deep #tabelKaryawan thead tr th.sorting::after,
:host ::ng-deep #tabelKaryawan thead tr th.sorting_asc::before,
:host ::ng-deep #tabelKaryawan thead tr th.sorting_desc::before {
  display: none;
}
:host ::ng-deep #tabelKaryawan thead tr th.sorting_asc::after {
  color: #6366f1;
  opacity: 1;
}
:host ::ng-deep #tabelKaryawan thead tr th.sorting_desc::after {
  color: #6366f1;
  opacity: 1;
}
:host ::ng-deep #tabelKaryawan {
}
:host ::ng-deep #tabelKaryawan tbody tr {
  border-bottom: 1px solid #f3f4f6 !important;
  transition: background 0.1s;
}
:host ::ng-deep #tabelKaryawan tbody tr td {
  padding: 10px 16px;
  vertical-align: middle;
  border-top: none !important;
  background: transparent;
}
:host ::ng-deep #tabelKaryawan tbody tr:hover td {
  background: #fafafe !important;
}
:host ::ng-deep #tabelKaryawan tbody tr:last-child td {
  border-bottom: none !important;
}
:host ::ng-deep #tabelKaryawan {
}
:host ::ng-deep #tabelKaryawan.table-striped > tbody > tr:nth-of-type(odd) > * {
  background-color: transparent;
}
:host ::ng-deep {
}
:host ::ng-deep .aksi-dropdown a,
:host ::ng-deep .aksi-dropdown button {
  transition: background 0.12s;
}
:host ::ng-deep .aksi-dropdown a:hover,
:host ::ng-deep .aksi-dropdown button:hover {
  background: #f5f3ff !important;
}
:host ::ng-deep {
}
:host ::ng-deep .table-responsive {
  overflow: visible !important;
}
:host ::ng-deep .dataTables_wrapper {
  overflow: visible !important;
}
/*# sourceMappingURL=karyawan-list.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanListComponent, { className: "KaryawanListComponent", filePath: "src/app/features/karyawan/karyawan-list/karyawan-list.component.ts", lineNumber: 26 });
})();
export {
  KaryawanListComponent
};
//# sourceMappingURL=chunk-I4ZACYMC.js.map
