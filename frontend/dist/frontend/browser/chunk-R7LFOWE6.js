import {
  IzinHariService
} from "./chunk-TCQI54CB.js";
import {
  IzinJamService
} from "./chunk-HA63FDPT.js";
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
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
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
  ɵɵclassMap,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-izin/karyawan-izin.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function KaryawanIzinComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.karyawan().id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.karyawan().namaLengkap);
  }
}
function KaryawanIzinComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanIzinComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.karyawan().namaJabatan, " ");
  }
}
function KaryawanIzinComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanIzinComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("izin-toast--danger", ctx_r0.toastType() === "danger");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.toastType() === "success" ? "bx bx-check-circle fs-5" : "bx bx-x-circle fs-5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.toastMsg());
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 63);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Conditional_20_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.filterDapatMengganti.set($event));
    });
    \u0275\u0275elementStart(1, "option", 64);
    \u0275\u0275text(2, "Dapat Mengganti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 65);
    \u0275\u0275text(4, "Ya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 66);
    \u0275\u0275text(6, "Tidak");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 63);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Conditional_20_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.filterKenaPotong.set($event));
    });
    \u0275\u0275elementStart(8, "option", 64);
    \u0275\u0275text(9, "Kenakan Potongan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 65);
    \u0275\u0275text(11, "Ya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 66);
    \u0275\u0275text(13, "Tidak");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 63);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Conditional_20_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.filterKenaDenda.set($event));
    });
    \u0275\u0275elementStart(15, "option", 64);
    \u0275\u0275text(16, "Kenakan Denda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 65);
    \u0275\u0275text(18, "Ya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 66);
    \u0275\u0275text(20, "Tidak");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.filterDapatMengganti());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.filterKenaPotong());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.filterKenaDenda());
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 50);
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTambah());
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, " Tambah ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "span", 68);
    \u0275\u0275elementStart(2, "p", 69);
    \u0275\u0275text(3, "Memuat data izin jam...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 81);
    \u0275\u0275element(2, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 83);
    \u0275\u0275text(4, "Tidak ada data izin jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6, "Belum ada pengajuan izin jam untuk filter ini.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.status === "DISETUJUI" ? "Disetujui" : "Terpenuhi", " ");
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2, " Ditolak ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2, " Tdk Terpenuhi ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275text(2, " Menunggu ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 111);
    \u0275\u0275element(2, "i", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Jam Pengganti: ", ctx_r0.formatJam(item_r7.jamPengganti), " ");
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "span");
    \u0275\u0275element(2, "i", 113);
    \u0275\u0275text(3, " Dapat Mengganti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275element(5, "i", 113);
    \u0275\u0275text(6, " Potong Gaji ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275element(8, "i", 113);
    \u0275\u0275text(9, " Denda ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("jam-tag " + (item_r7.dapatMengganti ? "jam-tag--yes" : "jam-tag--no"));
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r7.dapatMengganti ? "bx-check" : "bx-minus");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("jam-tag " + (item_r7.kenaPotong ? "jam-tag--warn" : "jam-tag--no"));
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r7.kenaPotong ? "bx-minus-circle" : "bx-minus");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("jam-tag " + (item_r7.kenaDenda ? "jam-tag--warn" : "jam-tag--no"));
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r7.kenaDenda ? "bx-error" : "bx-minus");
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r7.keperluan, " ");
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", ctx_r0.formatTanggalCreated(item_r7.updatedAt));
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_29_Conditional_3_Template, 2, 1, "span", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r7.catatanPenolakan, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.updatedAt ? 3 : -1);
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openTolak(item_r7));
    });
    \u0275\u0275element(1, "i", 123);
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "span", 124);
    \u0275\u0275text(2, "Hapus?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 125);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hapus(item_r7.id));
    });
    \u0275\u0275text(4, "Ya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 126);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapusId.set(null));
    });
    \u0275\u0275text(6, "Batal");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.deletingId() === item_r7.id);
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapusId.set(item_r7.id));
    });
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEdit(item_r7));
    });
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_2_Template, 2, 0, "button", 119);
    \u0275\u0275conditionalCreate(3, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_3_Template, 7, 1, "div", 120)(4, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Conditional_4_Template, 2, 0, "button", 121);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.status !== "DITOLAK" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.konfirmasiHapusId() === item_r7.id ? 3 : 4);
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 84)(2, "span", 85);
    \u0275\u0275element(3, "i", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_5_Template, 3, 1, "span", 87)(6, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_6_Template, 3, 0, "span", 88)(7, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_7_Template, 3, 0, "span", 89)(8, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_8_Template, 3, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 91)(10, "div", 92)(11, "div", 93)(12, "div", 94);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 95);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 96)(17, "div", 97);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "div", 98)(20, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 93)(22, "div", 94);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 95);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(26, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_26_Template, 4, 1, "div", 100);
    \u0275\u0275conditionalCreate(27, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_27_Template, 10, 12, "div", 101);
    \u0275\u0275conditionalCreate(28, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_28_Template, 3, 1, "div", 102);
    \u0275\u0275conditionalCreate(29, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_29_Template, 4, 2, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 104)(31, "button", 105);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Template_button_click_31_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRiwayat(item_r7));
    });
    \u0275\u0275element(32, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Conditional_33_Template, 5, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggalCreated(item_r7.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.status === "DISETUJUI" || item_r7.status === "TERPENUHI" ? 5 : item_r7.status === "DITOLAK" ? 6 : item_r7.status === "TIDAK_TERPENUHI" ? 7 : 8);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(item_r7.tanggalMulai).replace("\n", " "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(item_r7.jamMulai));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDurasi(item_r7.durasiMenit));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(item_r7.tanggalSelesai).replace("\n", " "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(item_r7.jamSelesai));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.jamPengganti ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeStatus() !== "DITOLAK" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.keperluan ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.status === "DITOLAK" && item_r7.catatanPenolakan ? 29 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r0.isKaryawan() ? 33 : -1);
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_For_13_Template_button_click_0_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(p_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("dt-pg-btn--active", p_r13 === ctx_r0.dtPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r13, " ");
  }
}
function KaryawanIzinComponent_Conditional_39_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, KaryawanIzinComponent_Conditional_39_Conditional_48_Conditional_0_Template, 7, 0, "div", 70);
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275repeaterCreate(2, KaryawanIzinComponent_Conditional_39_Conditional_48_For_3_Template, 34, 12, "div", 72, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 74)(8, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(1));
    });
    \u0275\u0275element(9, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(ctx_r0.dtPage() - 1));
    });
    \u0275\u0275element(11, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, KaryawanIzinComponent_Conditional_39_Conditional_48_For_13_Template, 2, 3, "button", 78, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(14, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(ctx_r0.dtPage() + 1));
    });
    \u0275\u0275element(15, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Conditional_48_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(ctx_r0.dtTotalPages()));
    });
    \u0275\u0275element(17, "i", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.dtRows().length === 0 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.dtRows());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r0.dtInfoStart(), "\u2013", ctx_r0.dtInfoEnd(), " dari ", ctx_r0.dtTotal(), " entri ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.dtPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.dtPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.dtPageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.dtPage() >= ctx_r0.dtTotalPages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.dtPage() >= ctx_r0.dtTotalPages());
  }
}
function KaryawanIzinComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 37)(2, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setStatus("DISETUJUI"));
    });
    \u0275\u0275element(3, "i", 39);
    \u0275\u0275text(4, "Disetujui ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setStatus("DITOLAK"));
    });
    \u0275\u0275element(6, "i", 40);
    \u0275\u0275text(7, "Ditolak ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setStatus("TERPENUHI"));
    });
    \u0275\u0275element(9, "i", 41);
    \u0275\u0275text(10, "Terpenuhi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setStatus("TIDAK_TERPENUHI"));
    });
    \u0275\u0275element(12, "i", 42);
    \u0275\u0275text(13, "Tidak Terpenuhi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 43);
    \u0275\u0275element(15, "i", 44);
    \u0275\u0275elementStart(16, "input", 45);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterMulai.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 46);
    \u0275\u0275text(18, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 45);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterSelesai.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, KaryawanIzinComponent_Conditional_39_Conditional_20_Template, 21, 3);
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 48);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.eksporExcel());
    });
    \u0275\u0275conditionalCreate(23, KaryawanIzinComponent_Conditional_39_Conditional_23_Template, 1, 0, "span", 49)(24, KaryawanIzinComponent_Conditional_39_Conditional_24_Template, 1, 0, "i", 50);
    \u0275\u0275text(25, " Ekspor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 51);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_39_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPengaturanModal.set(true));
    });
    \u0275\u0275element(27, "i", 52);
    \u0275\u0275text(28, " Pengaturan ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, KaryawanIzinComponent_Conditional_39_Conditional_29_Template, 3, 0, "button", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 54)(31, "div", 55)(32, "span", 15);
    \u0275\u0275text(33, "Tampilkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 56);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dtSetPageSize(+$event));
    });
    \u0275\u0275elementStart(35, "option", 57);
    \u0275\u0275text(36, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 57);
    \u0275\u0275text(38, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 57);
    \u0275\u0275text(40, "25");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 15);
    \u0275\u0275text(42, "entri");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 58)(44, "span", 59);
    \u0275\u0275element(45, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 61);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_39_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.dtSearch.set($event);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(1));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(47, KaryawanIzinComponent_Conditional_39_Conditional_47_Template, 4, 0, "div", 62);
    \u0275\u0275conditionalCreate(48, KaryawanIzinComponent_Conditional_39_Conditional_48_Template, 18, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-btn--active", ctx_r0.activeStatus() === "DISETUJUI");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("status-btn--active", ctx_r0.activeStatus() === "DITOLAK");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("status-btn--active", ctx_r0.activeStatus() === "TERPENUHI");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("status-btn--active", ctx_r0.activeStatus() === "TIDAK_TERPENUHI");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.filterMulai());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.filterSelesai());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeStatus() === "DISETUJUI" || ctx_r0.activeStatus() === "TERPENUHI" || ctx_r0.activeStatus() === "TIDAK_TERPENUHI" ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.eksporting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.eksporting() ? 23 : 24);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.activeStatus() !== "DITOLAK" ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.dtPageSize());
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.dtSearch());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loading() ? 48 : -1);
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 136);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.hariFilterMulai.set("");
      ctx_r0.hariFilterSelesai.set("");
      ctx_r0.hariPage.set(1);
      return \u0275\u0275resetView(ctx_r0.loadIzinHari());
    });
    \u0275\u0275element(1, "i", 123);
    \u0275\u0275text(2, " Reset ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 50);
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "span", 68);
    \u0275\u0275elementStart(2, "div", 137);
    \u0275\u0275text(3, "Memuat data izin hari...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 81);
    \u0275\u0275element(2, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 83);
    \u0275\u0275text(4, "Belum ada data izin hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6, "Belum ada pengajuan izin hari untuk filter ini.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275element(1, "i", 164);
    \u0275\u0275text(2, "Memotong Gaji ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1, " Tidak Potong Gaji ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r17 = ctx.$implicit;
    const \u0275$index_525_r18 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275$index_525_r18 + 1, ". ", ctx_r0.formatTanggalHari(tgl_r17), " ");
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 154);
    \u0275\u0275element(1, "i", 166);
    \u0275\u0275text(2, "Lihat File ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", item_r19.lampiranUrl, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r19.catatanPenolakan, " ");
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, " Disetujui ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 158);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2, " Ditolak ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 159);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275text(2, " Menunggu ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_45_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openHariEdit(item_r19));
    });
    \u0275\u0275elementStart(2, "span", 168);
    \u0275\u0275element(3, "i", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li")(6, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_45_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cetakPermohonan(item_r19));
    });
    \u0275\u0275elementStart(7, "span", 170);
    \u0275\u0275element(8, "i", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Cetak Permohonan ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "hr", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "button", 173);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_45_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r20);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openBatalPermohonan(item_r19));
    });
    \u0275\u0275elementStart(14, "span", 174);
    \u0275\u0275element(15, "i", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Batal Permohonan ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275element(18, "hr", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_45_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r20);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRiwayatHari(item_r19));
    });
    \u0275\u0275elementStart(21, "span", 170);
    \u0275\u0275element(22, "i", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Riwayat Perubahan ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const item_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.terimaHari(item_r19));
    });
    \u0275\u0275elementStart(2, "span", 180);
    \u0275\u0275element(3, "i", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Terima ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li")(6, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const item_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openTolakHari(item_r19));
    });
    \u0275\u0275elementStart(7, "span", 178);
    \u0275\u0275element(8, "i", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Tolak ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "hr", 172);
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Conditional_0_Template, 12, 0);
    \u0275\u0275elementStart(1, "li")(2, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r21);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openHariEdit(item_r19));
    });
    \u0275\u0275elementStart(3, "span", 168);
    \u0275\u0275element(4, "i", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li")(7, "button", 167);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r21);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cetakPermohonan(item_r19));
    });
    \u0275\u0275elementStart(8, "span", 170);
    \u0275\u0275element(9, "i", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cetak Permohonan ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275element(12, "hr", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li")(14, "button", 177);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r21);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hariKonfirmasiHapusId.set(item_r19.id));
    });
    \u0275\u0275elementStart(15, "span", 178);
    \u0275\u0275element(16, "i", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Hapus ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(!ctx_r0.isKaryawan() ? 0 : -1);
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 140)(2, "div", 141)(3, "div", 142)(4, "span", 143);
    \u0275\u0275element(5, "i", 144);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_7_Template, 3, 0, "span", 145)(8, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_8_Template, 2, 0, "span", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 147)(10, "div", 148);
    \u0275\u0275text(11, "Tgl. Izin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 149);
    \u0275\u0275text(13, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 150)(15, "div", 151);
    \u0275\u0275repeaterCreate(16, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_For_17_Template, 3, 2, "span", 152, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 147)(19, "div", 148);
    \u0275\u0275text(20, "Keperluan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 149);
    \u0275\u0275text(22, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 150)(24, "div", 153);
    \u0275\u0275element(25, "i", 114);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 147)(28, "div", 148);
    \u0275\u0275text(29, "File Kelengkapan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 149);
    \u0275\u0275text(31, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 150);
    \u0275\u0275conditionalCreate(33, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_33_Template, 3, 1, "a", 154)(34, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_34_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_35_Template, 3, 1, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 156);
    \u0275\u0275conditionalCreate(37, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_37_Template, 3, 0, "span", 157)(38, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_38_Template, 3, 0, "span", 158)(39, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_39_Template, 3, 0, "span", 159);
    \u0275\u0275elementStart(40, "div", 160)(41, "button", 161);
    \u0275\u0275element(42, "i", 162);
    \u0275\u0275text(43, "Aksi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ul", 163);
    \u0275\u0275conditionalCreate(45, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_45_Template, 24, 0)(46, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Conditional_46_Template, 18, 1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Diajukan: ", ctx_r0.formatTanggalCreated(item_r19.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.mengurangiGaji ? 7 : 8);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(item_r19.tanggalList);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", item_r19.keperluan, " ");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(item_r19.lampiranUrl ? 33 : 34);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r19.catatanPenolakan ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r19.status === "DISETUJUI" ? 37 : item_r19.status === "DITOLAK" ? 38 : 39);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(item_r19.status === "DISETUJUI" ? 45 : 46);
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_For_11_Template_button_click_0_listener() {
      const p_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hariPage.set(p_r24));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("dt-pg-btn--active", p_r24 === ctx_r0.hariPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r24, " ");
  }
}
function KaryawanIzinComponent_Conditional_40_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, KaryawanIzinComponent_Conditional_40_Conditional_38_For_1_Template, 47, 7, "div", 138, _forTrack0);
    \u0275\u0275elementStart(2, "div", 73)(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 139)(6, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hariPage.set(1));
    });
    \u0275\u0275element(7, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hariPage.set(ctx_r0.hariPage() - 1));
    });
    \u0275\u0275element(9, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, KaryawanIzinComponent_Conditional_40_Conditional_38_For_11_Template, 2, 3, "button", 78, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(12, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hariPage.set(ctx_r0.hariPage() + 1));
    });
    \u0275\u0275element(13, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Conditional_38_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hariPage.set(ctx_r0.hariTotalPages()));
    });
    \u0275\u0275element(15, "i", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.hariRows());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r0.hariInfoStart(), "\u2013", ctx_r0.hariInfoEnd(), " dari ", ctx_r0.hariTotal(), " total data ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariPage() <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariPage() <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.hariPageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariPage() >= ctx_r0.hariTotalPages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariPage() >= ctx_r0.hariTotalPages());
  }
}
function KaryawanIzinComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 130)(2, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHariFilter("PENGAJUAN"));
    });
    \u0275\u0275element(3, "i", 131);
    \u0275\u0275text(4, "Pengajuan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHariFilter("DISETUJUI"));
    });
    \u0275\u0275element(6, "i", 39);
    \u0275\u0275text(7, "Disetujui ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHariFilter("DITOLAK"));
    });
    \u0275\u0275element(9, "i", 40);
    \u0275\u0275text(10, "Ditolak ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 47)(12, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHariFilter("HARI_INI"));
    });
    \u0275\u0275text(13, "Hari Ini");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHariFilter("BESOK"));
    });
    \u0275\u0275text(15, "Besok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHariFilter("7_HARI"));
    });
    \u0275\u0275text(17, "7 Hari Kedepan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 132);
    \u0275\u0275element(19, "i", 44);
    \u0275\u0275elementStart(20, "input", 45);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_40_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariFilterMulai.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 46);
    \u0275\u0275text(22, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 45);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_40_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariFilterSelesai.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 133);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.hariPage.set(1);
      return \u0275\u0275resetView(ctx_r0.loadIzinHari());
    });
    \u0275\u0275element(25, "i", 134);
    \u0275\u0275text(26, " Cari ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, KaryawanIzinComponent_Conditional_40_Conditional_27_Template, 3, 0, "button", 135);
    \u0275\u0275elementStart(28, "div", 47)(29, "button", 48);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.eksporExcelHari());
    });
    \u0275\u0275conditionalCreate(30, KaryawanIzinComponent_Conditional_40_Conditional_30_Template, 1, 0, "span", 49)(31, KaryawanIzinComponent_Conditional_40_Conditional_31_Template, 1, 0, "i", 50);
    \u0275\u0275text(32, " Ekspor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 51);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_40_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openHariTambah());
    });
    \u0275\u0275element(34, "i", 67);
    \u0275\u0275text(35, " Tambah Izin Hari ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(36, KaryawanIzinComponent_Conditional_40_Conditional_36_Template, 4, 0, "div", 70)(37, KaryawanIzinComponent_Conditional_40_Conditional_37_Template, 7, 0, "div", 70)(38, KaryawanIzinComponent_Conditional_40_Conditional_38_Template, 16, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-btn--active", ctx_r0.hariFilter() === "PENGAJUAN");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("status-btn--active", ctx_r0.hariFilter() === "DISETUJUI");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("status-btn--active", ctx_r0.hariFilter() === "DITOLAK");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("status-btn--active", ctx_r0.hariFilter() === "HARI_INI");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-btn--active", ctx_r0.hariFilter() === "BESOK");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-btn--active", ctx_r0.hariFilter() === "7_HARI");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.hariFilterMulai());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.hariFilterSelesai());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.hariFilterMulai() || ctx_r0.hariFilterSelesai() ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariEksporting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariEksporting() ? 30 : 31);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.hariLoading() ? 36 : ctx_r0.listIzinHari().length === 0 ? 37 : 38);
  }
}
function KaryawanIzinComponent_Conditional_41_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hariError());
  }
}
function KaryawanIzinComponent_Conditional_41_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 206);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariLampiranNama(), " ");
  }
}
function KaryawanIzinComponent_Conditional_41_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 207);
    \u0275\u0275text(1, "PDF / JPG / PNG");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_41_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeHariModal());
    });
    \u0275\u0275elementStart(1, "div", 184);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_41_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 185)(3, "div", 186)(4, "h5", 187);
    \u0275\u0275element(5, "i", 188);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_41_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeHariModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 190);
    \u0275\u0275conditionalCreate(9, KaryawanIzinComponent_Conditional_41_Conditional_9_Template, 2, 1, "div", 191);
    \u0275\u0275elementStart(10, "div", 192)(11, "div", 193)(12, "label", 194);
    \u0275\u0275text(13, " Tgl. Izin ");
    \u0275\u0275elementStart(14, "span", 195);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 196);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_41_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariForm.update((f) => __spreadProps(__spreadValues({}, f), { tanggalList: $event ? [$event] : [] })));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 193)(18, "label", 194);
    \u0275\u0275text(19, " Keperluan ");
    \u0275\u0275elementStart(20, "span", 195);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "textarea", 197);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_41_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariForm.update((f) => __spreadProps(__spreadValues({}, f), { keperluan: $event })));
    });
    \u0275\u0275text(23, "                ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 193)(25, "div", 198)(26, "div")(27, "div", 199);
    \u0275\u0275text(28, "Izin ini akan mengurangi gaji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 200);
    \u0275\u0275text(30, " Aktifkan jika izin ini diperhitungkan dalam pemotongan gaji ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 201)(32, "input", 202);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_41_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariForm.update((f) => __spreadProps(__spreadValues({}, f), { mengurangiGaji: $event })));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 193)(34, "label", 194);
    \u0275\u0275text(35, "Lampiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 55)(37, "label", 203);
    \u0275\u0275element(38, "i", 204);
    \u0275\u0275text(39, "Pilih File ");
    \u0275\u0275elementStart(40, "input", 205);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_41_Template_input_change_40_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onHariLampiranChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, KaryawanIzinComponent_Conditional_41_Conditional_41_Template, 2, 1, "span", 206)(42, KaryawanIzinComponent_Conditional_41_Conditional_42_Template, 2, 0, "span", 207);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 208)(44, "button", 209);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_41_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeHariModal());
    });
    \u0275\u0275text(45, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 210);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_41_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanHari());
    });
    \u0275\u0275conditionalCreate(47, KaryawanIzinComponent_Conditional_41_Conditional_47_Template, 1, 0, "span", 211);
    \u0275\u0275text(48, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariEditId() ? "Edit Izin Hari" : "Tambah Izin Hari", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.hariError() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.hariForm().tanggalList.length > 0 ? ctx_r0.hariForm().tanggalList[0] : "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.hariForm().keperluan);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r0.hariForm().mengurangiGaji);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.hariLampiranNama() ? 41 : 42);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.hariSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariSaving() ? 47 : -1);
  }
}
function KaryawanIzinComponent_Conditional_42_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 212);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariShowTolakModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 213);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_42_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 185)(3, "div", 186)(4, "h5", 214);
    \u0275\u0275element(5, "i", 215);
    \u0275\u0275text(6, "Tolak Izin Hari ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_42_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariShowTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 190)(9, "label", 194);
    \u0275\u0275text(10, "Catatan Penolakan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 216);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_42_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariTolakCatatan.set($event));
    });
    \u0275\u0275text(12, "            ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 208)(14, "button", 209);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_42_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariShowTolakModal.set(false));
    });
    \u0275\u0275text(15, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 217);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_42_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.konfirmasiTolakHari());
    });
    \u0275\u0275conditionalCreate(17, KaryawanIzinComponent_Conditional_42_Conditional_17_Template, 1, 0, "span", 211);
    \u0275\u0275text(18, " Tolak Izin ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ctx_r0.hariTolakCatatan());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.hariSavingTolak());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariSavingTolak() ? 17 : -1);
  }
}
function KaryawanIzinComponent_Conditional_43_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorTambah());
  }
}
function KaryawanIzinComponent_Conditional_43_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 192)(1, "div", 193)(2, "label", 194);
    \u0275\u0275text(3, " Waktu Mulai ");
    \u0275\u0275elementStart(4, "span", 195);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 224)(7, "input", 196);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_43_Conditional_10_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { tanggalMulai: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 225);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_43_Conditional_10_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { jamMulai: $event })));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 193)(10, "label", 194);
    \u0275\u0275text(11, " Waktu Selesai ");
    \u0275\u0275elementStart(12, "span", 195);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 224)(15, "input", 196);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_43_Conditional_10_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { tanggalSelesai: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 225);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_43_Conditional_10_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { jamSelesai: $event })));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 193)(18, "label", 194);
    \u0275\u0275text(19, " Keperluan ");
    \u0275\u0275elementStart(20, "span", 195);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "textarea", 226);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_43_Conditional_10_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { keperluan: $event })));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.formTambah().tanggalMulai);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.formTambah().jamMulai);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.formTambah().tanggalSelesai);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.formTambah().jamSelesai);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.formTambah().keperluan);
  }
}
function KaryawanIzinComponent_Conditional_43_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 219)(1, "div", 227)(2, "div", 228);
    \u0275\u0275text(3, " Karyawan dapat mengganti izin jam? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 229)(5, "label", 230)(6, "input", 231);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_43_Conditional_11_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { dapatMengganti: true })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 230)(10, "input", 231);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_43_Conditional_11_Template_input_change_10_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { dapatMengganti: false })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Tidak");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 227)(14, "div", 228);
    \u0275\u0275text(15, " Kenakan potongan izin jam pada rincian gaji ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 229)(17, "label", 230)(18, "input", 232);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_43_Conditional_11_Template_input_change_18_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { kenaPotong: true })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 230)(22, "input", 232);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_43_Conditional_11_Template_input_change_22_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { kenaPotong: false })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Tidak");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 227)(26, "div", 228);
    \u0275\u0275text(27, " Kenakan Denda Keterlambatan jika presensi masuk lebih dari selesai izin jam ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 229)(29, "label", 230)(30, "input", 233);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_43_Conditional_11_Template_input_change_30_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { kenaDenda: true })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "label", 230)(34, "input", 233);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_43_Conditional_11_Template_input_change_34_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { kenaDenda: false })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Tidak");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("radio-opt--active", ctx_r0.formTambah().dapatMengganti === true);
    \u0275\u0275advance();
    \u0275\u0275property("value", true)("checked", ctx_r0.formTambah().dapatMengganti === true);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("radio-opt--active", ctx_r0.formTambah().dapatMengganti === false);
    \u0275\u0275advance();
    \u0275\u0275property("value", false)("checked", ctx_r0.formTambah().dapatMengganti === false);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("radio-opt--active", ctx_r0.formTambah().kenaPotong === true);
    \u0275\u0275advance();
    \u0275\u0275property("value", true)("checked", ctx_r0.formTambah().kenaPotong === true);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("radio-opt--active", ctx_r0.formTambah().kenaPotong === false);
    \u0275\u0275advance();
    \u0275\u0275property("value", false)("checked", ctx_r0.formTambah().kenaPotong === false);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("radio-opt--active", ctx_r0.formTambah().kenaDenda === true);
    \u0275\u0275advance();
    \u0275\u0275property("value", true)("checked", ctx_r0.formTambah().kenaDenda === true);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("radio-opt--active", ctx_r0.formTambah().kenaDenda === false);
    \u0275\u0275advance();
    \u0275\u0275property("value", false)("checked", ctx_r0.formTambah().kenaDenda === false);
  }
}
function KaryawanIzinComponent_Conditional_43_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_43_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 223);
  }
}
function KaryawanIzinComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTambah());
    });
    \u0275\u0275elementStart(1, "div", 213);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_43_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 185)(3, "div", 186)(4, "h5", 187);
    \u0275\u0275element(5, "i", 218);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_43_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTambah());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 190);
    \u0275\u0275conditionalCreate(9, KaryawanIzinComponent_Conditional_43_Conditional_9_Template, 2, 1, "div", 191);
    \u0275\u0275conditionalCreate(10, KaryawanIzinComponent_Conditional_43_Conditional_10_Template, 23, 5, "div", 192);
    \u0275\u0275conditionalCreate(11, KaryawanIzinComponent_Conditional_43_Conditional_11_Template, 37, 24, "div", 219);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 220)(13, "button", 221);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_43_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeTambah());
    });
    \u0275\u0275text(14, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 222);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_43_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanTambah());
    });
    \u0275\u0275conditionalCreate(16, KaryawanIzinComponent_Conditional_43_Conditional_16_Template, 1, 0, "span", 211)(17, KaryawanIzinComponent_Conditional_43_Conditional_17_Template, 1, 0, "i", 223);
    \u0275\u0275text(18, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editId() ? "Edit Izin Jam" : "Tambah Izin Jam", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.errorTambah() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.editId() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.editId() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.savingTambah());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.savingTambah());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.savingTambah() ? 16 : 17);
  }
}
function KaryawanIzinComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPengaturanModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 213);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_44_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 185)(3, "div", 186)(4, "h5", 187);
    \u0275\u0275element(5, "i", 234);
    \u0275\u0275text(6, "Pengaturan Izin Jam ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPengaturanModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 190)(9, "p", 15);
    \u0275\u0275text(10, "Pengaturan izin jam untuk karyawan ini belum tersedia. Hubungi administrator.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 220)(12, "button", 235);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_44_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPengaturanModal.set(false));
    });
    \u0275\u0275text(13, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
}
function KaryawanIzinComponent_Conditional_45_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_45_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 241);
  }
}
function KaryawanIzinComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 236)(2, "div", 185)(3, "div", 186)(4, "h5", 237);
    \u0275\u0275element(5, "i", 238);
    \u0275\u0275text(6, "Hapus Izin? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 239);
    \u0275\u0275text(8, " Data izin ini akan dihapus permanen dan tidak dapat dibatalkan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 220)(10, "button", 221);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_45_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapusId.set(null));
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 240);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_45_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hapus(ctx_r0.konfirmasiHapusId()));
    });
    \u0275\u0275conditionalCreate(13, KaryawanIzinComponent_Conditional_45_Conditional_13_Template, 1, 0, "span", 211)(14, KaryawanIzinComponent_Conditional_45_Conditional_14_Template, 1, 0, "i", 241);
    \u0275\u0275text(15, " Ya, Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r0.deletingId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.deletingId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.deletingId() !== null ? 13 : 14);
  }
}
function KaryawanIzinComponent_Conditional_46_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_46_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 241);
  }
}
function KaryawanIzinComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 242);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariKonfirmasiHapusId.set(null));
    });
    \u0275\u0275elementStart(1, "div", 213);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_46_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 185)(3, "div", 186)(4, "h5", 237);
    \u0275\u0275element(5, "i", 238);
    \u0275\u0275text(6, "Hapus Izin Hari? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 239);
    \u0275\u0275text(8, " Data izin hari ini akan dihapus permanen dan tidak dapat dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 220)(10, "button", 221);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_46_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariKonfirmasiHapusId.set(null));
    });
    \u0275\u0275text(11, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 240);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_46_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hapusHari(ctx_r0.hariKonfirmasiHapusId()));
    });
    \u0275\u0275conditionalCreate(13, KaryawanIzinComponent_Conditional_46_Conditional_13_Template, 1, 0, "span", 211)(14, KaryawanIzinComponent_Conditional_46_Conditional_14_Template, 1, 0, "i", 241);
    \u0275\u0275text(15, " Ya, Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r0.hariDeletingId() !== null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariDeletingId() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariDeletingId() !== null ? 13 : 14);
  }
}
function KaryawanIzinComponent_Conditional_47_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r0.formatTanggal(ctx_r0.tolakItem().tanggalMulai).replace("\n", " "), " ", ctx_r0.formatJam(ctx_r0.tolakItem().jamMulai), " \u2014 ", ctx_r0.formatJam(ctx_r0.tolakItem().jamSelesai), " ");
  }
}
function KaryawanIzinComponent_Conditional_47_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_47_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function KaryawanIzinComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 242);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r0.savingTolak() && ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 213);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_47_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 185)(3, "div", 243)(4, "div", 244)(5, "div", 245);
    \u0275\u0275element(6, "i", 246);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h5", 247);
    \u0275\u0275text(9, "Tolak Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, KaryawanIzinComponent_Conditional_47_Conditional_10_Template, 2, 3, "div", 248);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 249);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_47_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 250)(13, "p", 251);
    \u0275\u0275text(14, " Apakah Anda yakin ingin menolak izin jam ini? Status akan berubah menjadi ");
    \u0275\u0275elementStart(15, "strong", 195);
    \u0275\u0275text(16, "Ditolak");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 194);
    \u0275\u0275text(19, " Catatan Penolakan ");
    \u0275\u0275elementStart(20, "span", 252);
    \u0275\u0275text(21, "(opsional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "textarea", 253);
    \u0275\u0275listener("ngModelChange", function KaryawanIzinComponent_Conditional_47_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tolakCatatan.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 254)(24, "button", 221);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_47_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275text(25, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 240);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_47_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.konfirmasiTolak());
    });
    \u0275\u0275conditionalCreate(27, KaryawanIzinComponent_Conditional_47_Conditional_27_Template, 1, 0, "span", 211)(28, KaryawanIzinComponent_Conditional_47_Conditional_28_Template, 1, 0, "i", 40);
    \u0275\u0275text(29, " Ya, Tolak ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.tolakItem() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingTolak());
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ctx_r0.tolakCatatan())("disabled", ctx_r0.savingTolak());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.savingTolak());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.savingTolak());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.savingTolak() ? 27 : 28);
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "span", 264);
    \u0275\u0275elementStart(2, "p", 265);
    \u0275\u0275text(3, "Memuat riwayat...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.riwayatError());
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 270);
    \u0275\u0275element(2, "i", 271);
    \u0275\u0275text(3, " Belum ada riwayat perubahan. ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 281);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 282);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const akt_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", akt_r35.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(akt_r35.baru || "\u2014");
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_For_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Perubahan ");
    \u0275\u0275elementStart(2, "span", 283);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 284);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "i", 285);
    \u0275\u0275elementStart(7, "span", 286);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const akt_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", akt_r35.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(akt_r35.lama || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(akt_r35.baru || "\u2014");
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275conditionalCreate(1, KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_For_19_Conditional_1_Template, 4, 2)(2, KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_For_19_Conditional_2_Template, 9, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r36.tipe === "DIBUAT" ? 1 : 2);
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 269)(1, "td", 272)(2, "div", 273)(3, "div", 274);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 275);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 248);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 276);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 277)(13, "div", 100)(14, "span", 278);
    \u0275\u0275text(15, " Permohonan Izin Jam ");
    \u0275\u0275elementStart(16, "span", 279);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(18, KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_For_19_Template, 3, 1, "div", 280, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r36 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (r_r36.changedBy || "?").charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r36.changedBy || "Sistem", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatRiwayatAt(r_r36.changedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.tipeClass(r_r36.tipe));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.tipeLabel(r_r36.tipe), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("ID: ", r_r36.izinJamId);
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r36.aktivitas);
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 262)(1, "thead")(2, "tr", 266)(3, "th", 267);
    \u0275\u0275text(4, " User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 268);
    \u0275\u0275text(6, " Aktivitas ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275conditionalCreate(8, KaryawanIzinComponent_Conditional_48_Conditional_11_Conditional_8_Template, 4, 0, "tr");
    \u0275\u0275repeaterCreate(9, KaryawanIzinComponent_Conditional_48_Conditional_11_For_10_Template, 20, 7, "tr", 269, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.riwayatRows().length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.riwayatRows());
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_48_Conditional_12_For_7_Template_button_click_0_listener() {
      const $index_r39 = \u0275\u0275restoreView(_r38).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.riwayatPage.set($index_r39 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r39 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("dt-pg-btn--active", ctx_r0.riwayatPage() === $index_r39 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r39 + 1, " ");
  }
}
function KaryawanIzinComponent_Conditional_48_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 263)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_48_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.riwayatPage.set(ctx_r0.riwayatPage() - 1));
    });
    \u0275\u0275element(5, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, KaryawanIzinComponent_Conditional_48_Conditional_12_For_7_Template, 2, 3, "button", 78, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(8, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_48_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.riwayatPage.set(ctx_r0.riwayatPage() + 1));
    });
    \u0275\u0275element(9, "i", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.riwayatTotal(), " entri ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.riwayatPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c1).constructor(ctx_r0.riwayatTotalPage()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.riwayatPage() >= ctx_r0.riwayatTotalPage());
  }
}
function KaryawanIzinComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 255);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showRiwayatModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 184);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_48_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 256)(3, "div", 257)(4, "h5", 258);
    \u0275\u0275element(5, "i", 259);
    \u0275\u0275text(6, "Riwayat Perubahan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_48_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showRiwayatModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 260);
    \u0275\u0275conditionalCreate(9, KaryawanIzinComponent_Conditional_48_Conditional_9_Template, 4, 0, "div", 62);
    \u0275\u0275conditionalCreate(10, KaryawanIzinComponent_Conditional_48_Conditional_10_Template, 2, 1, "div", 261);
    \u0275\u0275conditionalCreate(11, KaryawanIzinComponent_Conditional_48_Conditional_11_Template, 11, 1, "table", 262);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, KaryawanIzinComponent_Conditional_48_Conditional_12_Template, 10, 4, "div", 263);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.riwayatLoading() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.riwayatLoading() && ctx_r0.riwayatError() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.riwayatLoading() && !ctx_r0.riwayatError() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.riwayatLoading() && ctx_r0.riwayatTotal() > 0 ? 12 : -1);
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "span", 264);
    \u0275\u0275elementStart(2, "p", 265);
    \u0275\u0275text(3, "Memuat riwayat...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hariRiwayatError());
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 270);
    \u0275\u0275element(2, "i", 271);
    \u0275\u0275text(3, " Belum ada riwayat perubahan. ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_For_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 293);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 294);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const akt_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", akt_r41.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(akt_r41.baru || "\u2014");
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Perubahan ");
    \u0275\u0275elementStart(2, "span", 293);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 295);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "i", 285);
    \u0275\u0275elementStart(7, "span", 296);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const akt_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", akt_r41.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(akt_r41.lama || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(akt_r41.baru || "\u2014");
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 292);
    \u0275\u0275conditionalCreate(1, KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_For_20_Conditional_1_Template, 4, 2)(2, KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_For_20_Conditional_2_Template, 9, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r42.tipe === "DIBUAT" ? 1 : 2);
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 269)(1, "td", 272)(2, "div", 273)(3, "div", 288);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 289);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 248);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 276);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 277)(13, "div", 100)(14, "span", 290);
    \u0275\u0275element(15, "i", 86);
    \u0275\u0275text(16, " Izin ");
    \u0275\u0275elementStart(17, "span", 291);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(19, KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_For_20_Template, 3, 1, "div", 292, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r42 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (r_r42.changedBy || "?").charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r42.changedBy || "Sistem", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatRiwayatHariAt(r_r42.changedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.hariTipeClass(r_r42.tipe));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariTipeLabel(r_r42.tipe), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ID: ", r_r42.izinHariId, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r42.aktivitas);
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 262)(1, "thead")(2, "tr", 266)(3, "th", 267);
    \u0275\u0275text(4, " User ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 268);
    \u0275\u0275text(6, " Aktivitas ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275conditionalCreate(8, KaryawanIzinComponent_Conditional_49_Conditional_11_Conditional_8_Template, 4, 0, "tr");
    \u0275\u0275repeaterCreate(9, KaryawanIzinComponent_Conditional_49_Conditional_11_For_10_Template, 21, 7, "tr", 269, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.hariRiwayatRows().length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.hariRiwayatRows());
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_49_Conditional_12_For_7_Template_button_click_0_listener() {
      const $index_r45 = \u0275\u0275restoreView(_r44).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hariRiwayatPage.set($index_r45 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r45 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("dt-pg-btn--active", ctx_r0.hariRiwayatPage() === $index_r45 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r45 + 1, " ");
  }
}
function KaryawanIzinComponent_Conditional_49_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 263)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_49_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hariRiwayatPage.set(ctx_r0.hariRiwayatPage() - 1));
    });
    \u0275\u0275element(5, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, KaryawanIzinComponent_Conditional_49_Conditional_12_For_7_Template, 2, 3, "button", 78, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(8, "button", 75);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_49_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hariRiwayatPage.set(ctx_r0.hariRiwayatPage() + 1));
    });
    \u0275\u0275element(9, "i", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.hariRiwayatTotal(), " entri");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariRiwayatPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c1).constructor(ctx_r0.hariRiwayatTotalPage()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariRiwayatPage() >= ctx_r0.hariRiwayatTotalPage());
  }
}
function KaryawanIzinComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 287);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariShowRiwayatModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 184);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_49_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 256)(3, "div", 257)(4, "h5", 258);
    \u0275\u0275element(5, "i", 259);
    \u0275\u0275text(6, "Riwayat Perubahan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_49_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hariShowRiwayatModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 260);
    \u0275\u0275conditionalCreate(9, KaryawanIzinComponent_Conditional_49_Conditional_9_Template, 4, 0, "div", 62);
    \u0275\u0275conditionalCreate(10, KaryawanIzinComponent_Conditional_49_Conditional_10_Template, 2, 1, "div", 261);
    \u0275\u0275conditionalCreate(11, KaryawanIzinComponent_Conditional_49_Conditional_11_Template, 11, 1, "table", 262);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, KaryawanIzinComponent_Conditional_49_Conditional_12_Template, 10, 4, "div", 263);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.hariRiwayatLoading() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hariRiwayatLoading() && ctx_r0.hariRiwayatError() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hariRiwayatLoading() && !ctx_r0.hariRiwayatError() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hariRiwayatLoading() && ctx_r0.hariRiwayatTotal() > 0 ? 12 : -1);
  }
}
function KaryawanIzinComponent_Conditional_50_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 306)(1, "input", 307);
    \u0275\u0275listener("change", function KaryawanIzinComponent_Conditional_50_Conditional_10_For_1_Template_input_change_1_listener() {
      const tgl_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleBatalDate(tgl_r48));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r48 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isBatalDateSelected(tgl_r48));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggalHari(tgl_r48), " ");
  }
}
function KaryawanIzinComponent_Conditional_50_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, KaryawanIzinComponent_Conditional_50_Conditional_10_For_1_Template, 3, 2, "label", 306, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.batalItem().tanggalList);
  }
}
function KaryawanIzinComponent_Conditional_50_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 302);
    \u0275\u0275text(1, " Pilih minimal satu tanggal. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanIzinComponent_Conditional_50_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 211);
  }
}
function KaryawanIzinComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 297);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showBatalModal.set(false));
    });
    \u0275\u0275elementStart(1, "div", 298);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_50_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 256)(3, "div", 257)(4, "h5", 299);
    \u0275\u0275text(5, " Batalkan Izin ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 189);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_50_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showBatalModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 300)(8, "div", 301);
    \u0275\u0275text(9, " Centang tanggal izin yang akan dibatalkan: ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, KaryawanIzinComponent_Conditional_50_Conditional_10_Template, 2, 0);
    \u0275\u0275conditionalCreate(11, KaryawanIzinComponent_Conditional_50_Conditional_11_Template, 2, 0, "div", 302);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 303)(13, "button", 304);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_50_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.batalPermohonanHari());
    });
    \u0275\u0275conditionalCreate(14, KaryawanIzinComponent_Conditional_50_Conditional_14_Template, 1, 0, "span", 211);
    \u0275\u0275text(15, " Proses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 305);
    \u0275\u0275listener("click", function KaryawanIzinComponent_Conditional_50_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showBatalModal.set(false));
    });
    \u0275\u0275text(17, " Nanti dulu ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.batalItem() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.batalSelectedDates().length === 0 && ctx_r0.hariBatalSaving() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.hariBatalSaving() || ctx_r0.batalSelectedDates().length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariBatalSaving() ? 14 : -1);
  }
}
var KaryawanIzinComponent = class _KaryawanIzinComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.karyawanSvc = inject(KaryawanService);
    this.izinJamSvc = inject(IzinJamService);
    this.izinHariSvc = inject(IzinHariService);
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
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
    this.isKaryawan = computed(() => this.auth.currentUser()?.role === "KARYAWAN", ...ngDevMode ? [{ debugName: "isKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeTab = signal("jam", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeStatus = signal("DISETUJUI", ...ngDevMode ? [{ debugName: "activeStatus" }] : (
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
    this.filterDapatMengganti = signal("", ...ngDevMode ? [{ debugName: "filterDapatMengganti" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterKenaPotong = signal("", ...ngDevMode ? [{ debugName: "filterKenaPotong" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterKenaDenda = signal("", ...ngDevMode ? [{ debugName: "filterKenaDenda" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listIzinJam = signal([], ...ngDevMode ? [{ debugName: "listIzinJam" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listJamFiltered = computed(() => {
      return this.listIzinJam().filter((d) => {
        const statusOk = d.status === this.activeStatus();
        const mulaiOk = !this.filterMulai() || d.tanggalMulai >= this.filterMulai();
        const selesaiOk = !this.filterSelesai() || d.tanggalSelesai <= this.filterSelesai();
        const mggOk = !this.filterDapatMengganti() || this.filterDapatMengganti() === "YA" && d.dapatMengganti || this.filterDapatMengganti() === "TIDAK" && !d.dapatMengganti;
        const potongOk = !this.filterKenaPotong() || this.filterKenaPotong() === "YA" && d.kenaPotong || this.filterKenaPotong() === "TIDAK" && !d.kenaPotong;
        const dendaOk = !this.filterKenaDenda() || this.filterKenaDenda() === "YA" && d.kenaDenda || this.filterKenaDenda() === "TIDAK" && !d.kenaDenda;
        return statusOk && mulaiOk && selesaiOk && mggOk && potongOk && dendaOk;
      });
    }, ...ngDevMode ? [{ debugName: "listJamFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtSearch = signal("", ...ngDevMode ? [{ debugName: "dtSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPage = signal(1, ...ngDevMode ? [{ debugName: "dtPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPageSize = signal(10, ...ngDevMode ? [{ debugName: "dtPageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtSortCol = signal("tanggalMulai", ...ngDevMode ? [{ debugName: "dtSortCol" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtSortDir = signal("desc", ...ngDevMode ? [{ debugName: "dtSortDir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtFiltered = computed(() => {
      const kata = this.dtSearch().toLowerCase().trim();
      let rows = this.listJamFiltered();
      if (kata) {
        rows = rows.filter((d) => d.tanggalMulai.includes(kata) || d.tanggalSelesai.includes(kata) || (d.keperluan ?? "").toLowerCase().includes(kata) || this.formatJam(d.jamMulai).includes(kata) || this.formatJam(d.jamSelesai).includes(kata));
      }
      const col = this.dtSortCol();
      const dir = this.dtSortDir() === "asc" ? 1 : -1;
      rows = [...rows].sort((a, b) => {
        const av = a[col] ?? "";
        const bv = b[col] ?? "";
        if (av < bv)
          return -1 * dir;
        if (av > bv)
          return 1 * dir;
        return 0;
      });
      return rows;
    }, ...ngDevMode ? [{ debugName: "dtFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtTotal = computed(() => this.dtFiltered().length, ...ngDevMode ? [{ debugName: "dtTotal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtTotalPages = computed(() => Math.max(1, Math.ceil(this.dtTotal() / this.dtPageSize())), ...ngDevMode ? [{ debugName: "dtTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtInfoStart = computed(() => this.dtTotal() === 0 ? 0 : (this.dtPage() - 1) * this.dtPageSize() + 1, ...ngDevMode ? [{ debugName: "dtInfoStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtInfoEnd = computed(() => Math.min(this.dtPage() * this.dtPageSize(), this.dtTotal()), ...ngDevMode ? [{ debugName: "dtInfoEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtRows = computed(() => {
      const start = (this.dtPage() - 1) * this.dtPageSize();
      return this.dtFiltered().slice(start, start + this.dtPageSize());
    }, ...ngDevMode ? [{ debugName: "dtRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPageNumbers = computed(() => {
      const total = this.dtTotalPages();
      const cur = this.dtPage();
      const pages = [];
      const delta = 2;
      for (let i = Math.max(1, cur - delta); i <= Math.min(total, cur + delta); i++) {
        pages.push(i);
      }
      return pages;
    }, ...ngDevMode ? [{ debugName: "dtPageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTambahModal = signal(false, ...ngDevMode ? [{ debugName: "showTambahModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editId = signal(null, ...ngDevMode ? [{ debugName: "editId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.savingTambah = signal(false, ...ngDevMode ? [{ debugName: "savingTambah" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorTambah = signal("", ...ngDevMode ? [{ debugName: "errorTambah" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formTambah = signal({
      tanggalMulai: "",
      jamMulai: "",
      tanggalSelesai: "",
      jamSelesai: "",
      jamPengganti: "",
      dapatMengganti: false,
      kenaPotong: false,
      kenaDenda: false,
      keperluan: ""
    }, ...ngDevMode ? [{ debugName: "formTambah" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPengaturanModal = signal(false, ...ngDevMode ? [{ debugName: "showPengaturanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.konfirmasiHapusId = signal(null, ...ngDevMode ? [{ debugName: "konfirmasiHapusId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.deletingId = signal(null, ...ngDevMode ? [{ debugName: "deletingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTolakModal = signal(false, ...ngDevMode ? [{ debugName: "showTolakModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakItem = signal(null, ...ngDevMode ? [{ debugName: "tolakItem" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakCatatan = signal("", ...ngDevMode ? [{ debugName: "tolakCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.savingTolak = signal(false, ...ngDevMode ? [{ debugName: "savingTolak" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatList = signal([], ...ngDevMode ? [{ debugName: "riwayatList" }] : (
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
    this.riwayatIzinJamId = signal(null, ...ngDevMode ? [{ debugName: "riwayatIzinJamId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPage = signal(1, ...ngDevMode ? [{ debugName: "riwayatPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.RIWAYAT_PAGE_SIZE = 5;
    this.riwayatTotal = computed(() => this.riwayatList().length, ...ngDevMode ? [{ debugName: "riwayatTotal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatTotalPage = computed(() => Math.max(1, Math.ceil(this.riwayatTotal() / this.RIWAYAT_PAGE_SIZE)), ...ngDevMode ? [{ debugName: "riwayatTotalPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatRows = computed(() => {
      const start = (this.riwayatPage() - 1) * this.RIWAYAT_PAGE_SIZE;
      return this.riwayatList().slice(start, start + this.RIWAYAT_PAGE_SIZE);
    }, ...ngDevMode ? [{ debugName: "riwayatRows" }] : (
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
    this._toastTimer = null;
    this.eksporting = signal(false, ...ngDevMode ? [{ debugName: "eksporting" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariFilter = signal("PENGAJUAN", ...ngDevMode ? [{ debugName: "hariFilter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariFilterMulai = signal("", ...ngDevMode ? [{ debugName: "hariFilterMulai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariFilterSelesai = signal("", ...ngDevMode ? [{ debugName: "hariFilterSelesai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listIzinHari = signal([], ...ngDevMode ? [{ debugName: "listIzinHari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariLoading = signal(false, ...ngDevMode ? [{ debugName: "hariLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariPage = signal(1, ...ngDevMode ? [{ debugName: "hariPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariPageSize = signal(10, ...ngDevMode ? [{ debugName: "hariPageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariFiltredList = computed(() => {
      const f = this.hariFilter();
      const list = this.listIzinHari();
      const toMs = (s) => (/* @__PURE__ */ new Date(s + "T00:00:00")).getTime();
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const addDay = (d, n) => {
        const x = new Date(d);
        x.setDate(x.getDate() + n);
        return x.getTime();
      };
      if (f === "HARI_INI") {
        const t = today.getTime();
        return list.filter((i) => i.tanggalList.some((tgl) => toMs(tgl) === t));
      }
      if (f === "BESOK") {
        const t = addDay(today, 1);
        return list.filter((i) => i.tanggalList.some((tgl) => toMs(tgl) === t));
      }
      if (f === "7_HARI") {
        const start = addDay(today, 2);
        const end = addDay(today, 7);
        return list.filter((i) => i.tanggalList.some((tgl) => {
          const t = toMs(tgl);
          return t >= start && t <= end;
        }));
      }
      return list;
    }, ...ngDevMode ? [{ debugName: "hariFiltredList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariTotal = computed(() => this.hariFiltredList().length, ...ngDevMode ? [{ debugName: "hariTotal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariTotalPages = computed(() => Math.max(1, Math.ceil(this.hariTotal() / this.hariPageSize())), ...ngDevMode ? [{ debugName: "hariTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRows = computed(() => {
      const start = (this.hariPage() - 1) * this.hariPageSize();
      return this.hariFiltredList().slice(start, start + this.hariPageSize());
    }, ...ngDevMode ? [{ debugName: "hariRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariInfoStart = computed(() => this.hariTotal() === 0 ? 0 : (this.hariPage() - 1) * this.hariPageSize() + 1, ...ngDevMode ? [{ debugName: "hariInfoStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariInfoEnd = computed(() => Math.min(this.hariPage() * this.hariPageSize(), this.hariTotal()), ...ngDevMode ? [{ debugName: "hariInfoEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariPageNumbers = computed(() => {
      const total = this.hariTotalPages();
      const cur = this.hariPage();
      const pages = [];
      for (let p = Math.max(1, cur - 2); p <= Math.min(total, cur + 2); p++)
        pages.push(p);
      return pages;
    }, ...ngDevMode ? [{ debugName: "hariPageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showHariModal = signal(false, ...ngDevMode ? [{ debugName: "showHariModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariEditId = signal(null, ...ngDevMode ? [{ debugName: "hariEditId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariSaving = signal(false, ...ngDevMode ? [{ debugName: "hariSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariError = signal("", ...ngDevMode ? [{ debugName: "hariError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariLampiranFile = null;
    this.hariLampiranNama = signal("", ...ngDevMode ? [{ debugName: "hariLampiranNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariForm = signal({
      tanggalList: [],
      keperluan: "",
      mengurangiGaji: false
    }, ...ngDevMode ? [{ debugName: "hariForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariTanggalInput = signal("", ...ngDevMode ? [{ debugName: "hariTanggalInput" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariKonfirmasiHapusId = signal(null, ...ngDevMode ? [{ debugName: "hariKonfirmasiHapusId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariDeletingId = signal(null, ...ngDevMode ? [{ debugName: "hariDeletingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariShowTolakModal = signal(false, ...ngDevMode ? [{ debugName: "hariShowTolakModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariTolakItem = signal(null, ...ngDevMode ? [{ debugName: "hariTolakItem" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariTolakCatatan = signal("", ...ngDevMode ? [{ debugName: "hariTolakCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariSavingTolak = signal(false, ...ngDevMode ? [{ debugName: "hariSavingTolak" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariBatalKonfirmasiId = signal(null, ...ngDevMode ? [{ debugName: "hariBatalKonfirmasiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariBatalSaving = signal(false, ...ngDevMode ? [{ debugName: "hariBatalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBatalModal = signal(false, ...ngDevMode ? [{ debugName: "showBatalModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.batalItem = signal(null, ...ngDevMode ? [{ debugName: "batalItem" }] : (
      /* istanbul ignore next */
      []
    ));
    this.batalSelectedDates = signal([], ...ngDevMode ? [{ debugName: "batalSelectedDates" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariShowRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "hariShowRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatList = signal([], ...ngDevMode ? [{ debugName: "hariRiwayatList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatLoading = signal(false, ...ngDevMode ? [{ debugName: "hariRiwayatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatError = signal("", ...ngDevMode ? [{ debugName: "hariRiwayatError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatItem = signal(null, ...ngDevMode ? [{ debugName: "hariRiwayatItem" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatPage = signal(1, ...ngDevMode ? [{ debugName: "hariRiwayatPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.HARI_RIWAYAT_PAGE_SIZE = 5;
    this.hariRiwayatTotal = computed(() => this.hariRiwayatList().length, ...ngDevMode ? [{ debugName: "hariRiwayatTotal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatTotalPage = computed(() => Math.max(1, Math.ceil(this.hariRiwayatTotal() / this.HARI_RIWAYAT_PAGE_SIZE)), ...ngDevMode ? [{ debugName: "hariRiwayatTotalPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariRiwayatRows = computed(() => {
      const start = (this.hariRiwayatPage() - 1) * this.HARI_RIWAYAT_PAGE_SIZE;
      return this.hariRiwayatList().slice(start, start + this.HARI_RIWAYAT_PAGE_SIZE);
    }, ...ngDevMode ? [{ debugName: "hariRiwayatRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariEksporting = signal(false, ...ngDevMode ? [{ debugName: "hariEksporting" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  dtSort(col) {
    if (this.dtSortCol() === col) {
      this.dtSortDir.set(this.dtSortDir() === "asc" ? "desc" : "asc");
    } else {
      this.dtSortCol.set(col);
      this.dtSortDir.set("asc");
    }
    this.dtPage.set(1);
  }
  dtSortIcon(col) {
    if (this.dtSortCol() !== col)
      return "bx-sort";
    return this.dtSortDir() === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  dtSetPageSize(size) {
    this.dtPageSize.set(size);
    this.dtPage.set(1);
  }
  openTolak(item) {
    this.tolakItem.set(item);
    this.tolakCatatan.set("");
    this.showTolakModal.set(true);
  }
  konfirmasiTolak() {
    const item = this.tolakItem();
    const k = this.karyawan();
    if (!item || !k)
      return;
    this.savingTolak.set(true);
    this.izinJamSvc.updateStatus(k.id, item.id, "DITOLAK", this.tolakCatatan() || void 0).subscribe({
      next: (saved) => {
        this.listIzinJam.update((list) => {
          const idx = list.findIndex((x) => x.id === saved.id);
          if (idx >= 0) {
            const n = [...list];
            n[idx] = saved;
            return n;
          }
          return list;
        });
        this.savingTolak.set(false);
        this.showTolakModal.set(false);
        this.tolakItem.set(null);
        this.showToast("Izin jam berhasil ditolak.");
      },
      error: () => {
        this.savingTolak.set(false);
        this.showToast("Gagal menolak izin jam.", "danger");
      }
    });
  }
  // ── Methods ────────────────────────────────────────────────
  setTab(tab) {
    this.activeTab.set(tab);
  }
  setStatus(s) {
    this.activeStatus.set(s);
    this.loadIzinJam();
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  formatTanggal(tgl) {
    if (!tgl)
      return "\u2014";
    const d = /* @__PURE__ */ new Date(tgl + "T00:00:00");
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate().toString().padStart(2, "0")} ${bln}
${d.getFullYear()}`;
  }
  formatTanggalCreated(dt) {
    if (!dt)
      return "";
    const d = new Date(dt);
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    const tgl = `${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()}`;
    const jam = `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    return `${tgl} @ ${jam}`;
  }
  formatJam(jam) {
    if (!jam)
      return "\u2014";
    return jam.substring(0, 5);
  }
  formatDurasi(menit) {
    if (!menit || menit <= 0)
      return "\u2014";
    const j = Math.floor(menit / 60);
    const m = menit % 60;
    const parts = [];
    if (j > 0)
      parts.push(`${j}jm`);
    if (m > 0)
      parts.push(`${m}mn`);
    return parts.join(" ");
  }
  updateForm(field, value) {
    this.formTambah.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  // ── Tambah ────────────────────────────────────────────────
  openTambah() {
    this.editId.set(null);
    this.errorTambah.set("");
    this.formTambah.set({
      tanggalMulai: "",
      jamMulai: "",
      tanggalSelesai: "",
      jamSelesai: "",
      jamPengganti: "",
      dapatMengganti: false,
      kenaPotong: false,
      kenaDenda: false,
      keperluan: ""
    });
    this.showTambahModal.set(true);
  }
  // ── Edit ──────────────────────────────────────────────────
  openEdit(item) {
    this.editId.set(item.id);
    this.errorTambah.set("");
    this.formTambah.set({
      tanggalMulai: item.tanggalMulai,
      jamMulai: this.formatJam(item.jamMulai),
      tanggalSelesai: item.tanggalSelesai,
      jamSelesai: this.formatJam(item.jamSelesai),
      jamPengganti: item.jamPengganti ? this.formatJam(item.jamPengganti) : "",
      dapatMengganti: item.dapatMengganti,
      kenaPotong: item.kenaPotong,
      kenaDenda: item.kenaDenda,
      keperluan: item.keperluan ?? ""
    });
    this.showTambahModal.set(true);
  }
  closeTambah() {
    this.showTambahModal.set(false);
  }
  simpanTambah() {
    const f = this.formTambah();
    const k = this.karyawan();
    if (!k)
      return;
    const id = this.editId();
    if (!id) {
      if (!f.tanggalMulai || !f.jamMulai) {
        this.errorTambah.set("Waktu mulai wajib diisi.");
        return;
      }
      if (!f.tanggalSelesai || !f.jamSelesai) {
        this.errorTambah.set("Waktu selesai wajib diisi.");
        return;
      }
      if (!f.keperluan?.trim()) {
        this.errorTambah.set("Keperluan wajib diisi.");
        return;
      }
    }
    this.savingTambah.set(true);
    this.errorTambah.set("");
    const req = __spreadProps(__spreadValues({}, f), {
      jamPengganti: f.jamPengganti || void 0
    });
    const obs = id ? this.izinJamSvc.update(k.id, id, req) : this.izinJamSvc.create(k.id, req);
    obs.subscribe({
      next: (saved) => {
        this.listIzinJam.update((list) => {
          const idx = list.findIndex((x) => x.id === saved.id);
          if (idx >= 0) {
            const n = [...list];
            n[idx] = saved;
            return n;
          }
          return [saved, ...list];
        });
        this.savingTambah.set(false);
        this.showTambahModal.set(false);
        this.showToast(id ? "Izin jam berhasil diperbarui." : "Izin jam berhasil ditambahkan.");
      },
      error: (err) => {
        this.errorTambah.set(err?.error?.message ?? "Gagal menyimpan izin jam.");
        this.savingTambah.set(false);
      }
    });
  }
  // ── Hapus ─────────────────────────────────────────────────
  hapus(id) {
    const k = this.karyawan();
    if (!k)
      return;
    this.deletingId.set(id);
    this.izinJamSvc.delete(k.id, id).subscribe({
      next: () => {
        this.listIzinJam.update((l) => l.filter((x) => x.id !== id));
        this.konfirmasiHapusId.set(null);
        this.deletingId.set(null);
        this.showToast("Izin jam berhasil dihapus.");
      },
      error: () => {
        this.deletingId.set(null);
        this.showToast("Gagal menghapus izin jam.", "danger");
      }
    });
  }
  // ── Ubah status ───────────────────────────────────────────
  ubahStatus(item, status) {
    const k = this.karyawan();
    if (!k)
      return;
    this.izinJamSvc.updateStatus(k.id, item.id, status).subscribe({
      next: (saved) => {
        this.listIzinJam.update((list) => {
          const idx = list.findIndex((x) => x.id === saved.id);
          if (idx >= 0) {
            const n = [...list];
            n[idx] = saved;
            return n;
          }
          return list;
        });
        this.showToast("Status izin jam berhasil diubah.");
      },
      error: () => this.showToast("Gagal mengubah status.", "danger")
    });
  }
  // ── Riwayat ───────────────────────────────────────────────
  openRiwayat(item) {
    const k = this.karyawan();
    if (!k)
      return;
    this.riwayatIzinJamId.set(item.id);
    this.riwayatList.set([]);
    this.riwayatPage.set(1);
    this.riwayatError.set("");
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.izinJamSvc.getRiwayat(k.id, item.id).subscribe({
      next: (list) => {
        this.riwayatList.set(list);
        this.riwayatLoading.set(false);
      },
      error: () => {
        this.riwayatError.set("Gagal memuat riwayat.");
        this.riwayatLoading.set(false);
      }
    });
  }
  tipeLabel(tipe) {
    if (tipe === "DIBUAT")
      return "Dibuat";
    if (tipe === "DIUBAH")
      return "Diubah";
    if (tipe === "DIHAPUS")
      return "Dihapus";
    return tipe;
  }
  tipeClass(tipe) {
    if (tipe === "DIBUAT")
      return "rw-badge rw-badge--dibuat";
    if (tipe === "DIUBAH")
      return "rw-badge rw-badge--diubah";
    if (tipe === "DIHAPUS")
      return "rw-badge rw-badge--dihapus";
    return "rw-badge";
  }
  formatRiwayatAt(dt) {
    if (!dt)
      return "";
    const d = new Date(dt);
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate()} ${bln} ${d.getFullYear()} @ ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  }
  eksporExcel() {
    const k = this.karyawan();
    if (!k)
      return;
    this.eksporting.set(true);
    const opts = {};
    opts.status = this.activeStatus();
    if (this.filterMulai())
      opts.from = this.filterMulai();
    if (this.filterSelesai())
      opts.to = this.filterSelesai();
    this.izinJamSvc.exportExcel(k.id, opts).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const tgl = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
        a.href = url;
        a.download = `izin-jam-${tgl}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.eksporting.set(false);
        this.showToast("File Excel berhasil diunduh.");
      },
      error: () => {
        this.eksporting.set(false);
        this.showToast("Gagal mengekspor Excel.", "danger");
      }
    });
  }
  // ── Load data ─────────────────────────────────────────────
  loadIzinJam() {
    const k = this.karyawan();
    if (!k)
      return;
    this.loading.set(true);
    this.izinJamSvc.getAll(k.id).subscribe({
      next: (data) => {
        this.listIzinJam.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Gagal memuat data izin jam.");
        this.loading.set(false);
      }
    });
  }
  // ── Filter ────────────────────────────────────────────────
  resetFilter() {
    this.filterMulai.set("");
    this.filterSelesai.set("");
    this.filterDapatMengganti.set("");
    this.filterKenaPotong.set("");
    this.filterKenaDenda.set("");
  }
  // ── Toast ─────────────────────────────────────────────────
  showToast(msg, type = "success") {
    if (this._toastTimer)
      clearTimeout(this._toastTimer);
    this.toastMsg.set(msg);
    this.toastType.set(type);
    this._toastTimer = setTimeout(() => this.toastMsg.set(""), 3e3);
  }
  openHariTambah() {
    this.hariEditId.set(null);
    this.hariError.set("");
    this.hariLampiranFile = null;
    this.hariLampiranNama.set("");
    this.hariForm.set({ tanggalList: [], keperluan: "", mengurangiGaji: false });
    this.hariTanggalInput.set("");
    this.showHariModal.set(true);
  }
  openHariEdit(item) {
    this.hariEditId.set(item.id);
    this.hariError.set("");
    this.hariLampiranFile = null;
    this.hariLampiranNama.set(item.lampiranUrl ? item.lampiranUrl.split("/").pop() ?? "" : "");
    this.hariForm.set({
      tanggalList: [...item.tanggalList],
      keperluan: item.keperluan,
      mengurangiGaji: item.mengurangiGaji
    });
    this.hariTanggalInput.set("");
    this.showHariModal.set(true);
  }
  closeHariModal() {
    this.showHariModal.set(false);
  }
  tambahTanggal() {
    const val = this.hariTanggalInput();
    if (!val)
      return;
    const list = this.hariForm().tanggalList;
    if (!list.includes(val)) {
      this.hariForm.update((f) => __spreadProps(__spreadValues({}, f), { tanggalList: [...f.tanggalList, val].sort() }));
    }
    this.hariTanggalInput.set("");
  }
  hapusTanggal(tgl) {
    this.hariForm.update((f) => __spreadProps(__spreadValues({}, f), { tanggalList: f.tanggalList.filter((t) => t !== tgl) }));
  }
  onHariLampiranChange(evt) {
    const input = evt.target;
    if (input.files?.length) {
      this.hariLampiranFile = input.files[0];
      this.hariLampiranNama.set(input.files[0].name);
    }
  }
  simpanHari() {
    const f = this.hariForm();
    const k = this.karyawan();
    if (!k)
      return;
    if (!f.tanggalList.length) {
      this.hariError.set("Minimal satu tanggal izin wajib dipilih.");
      return;
    }
    if (!f.keperluan.trim()) {
      this.hariError.set("Keperluan wajib diisi.");
      return;
    }
    this.hariSaving.set(true);
    this.hariError.set("");
    const editId = this.hariEditId();
    const obs = editId ? this.izinHariSvc.update(k.id, editId, f, this.hariLampiranFile ?? void 0) : this.izinHariSvc.create(k.id, f, this.hariLampiranFile ?? void 0);
    obs.subscribe({
      next: (saved) => {
        if (editId) {
          this.listIzinHari.update((list) => {
            const idx = list.findIndex((x) => x.id === saved.id);
            if (idx >= 0) {
              const n = [...list];
              n[idx] = saved;
              return n;
            }
            return list;
          });
        } else {
          this.listIzinHari.update((list) => [saved, ...list]);
        }
        this.hariSaving.set(false);
        this.showHariModal.set(false);
        this.showToast(editId ? "Izin hari berhasil diperbarui." : "Izin hari berhasil diajukan.");
      },
      error: (err) => {
        this.hariError.set(err?.error?.message ?? "Gagal menyimpan izin hari.");
        this.hariSaving.set(false);
      }
    });
  }
  hapusHari(id) {
    const k = this.karyawan();
    if (!k)
      return;
    this.hariDeletingId.set(id);
    this.izinHariSvc.delete(k.id, id).subscribe({
      next: () => {
        this.listIzinHari.update((l) => l.filter((x) => x.id !== id));
        this.hariKonfirmasiHapusId.set(null);
        this.hariDeletingId.set(null);
        this.showToast("Izin hari berhasil dihapus.");
      },
      error: () => {
        this.hariDeletingId.set(null);
        this.showToast("Gagal menghapus izin hari.", "danger");
      }
    });
  }
  terimaHari(item) {
    const k = this.karyawan();
    if (!k)
      return;
    this.izinHariSvc.updateStatus(k.id, item.id, "DISETUJUI").subscribe({
      next: () => {
        this.showToast("Izin hari disetujui.");
        this.loadIzinHari();
      },
      error: () => this.showToast("Gagal menyetujui izin hari.", "danger")
    });
  }
  openTolakHari(item) {
    this.hariTolakItem.set(item);
    this.hariTolakCatatan.set("");
    this.hariShowTolakModal.set(true);
  }
  konfirmasiTolakHari() {
    const item = this.hariTolakItem();
    const k = this.karyawan();
    if (!item || !k)
      return;
    this.hariSavingTolak.set(true);
    this.izinHariSvc.updateStatus(k.id, item.id, "DITOLAK", this.hariTolakCatatan() || void 0).subscribe({
      next: () => {
        this.hariSavingTolak.set(false);
        this.hariShowTolakModal.set(false);
        this.showToast("Izin hari berhasil ditolak.");
        this.loadIzinHari();
      },
      error: () => {
        this.hariSavingTolak.set(false);
        this.showToast("Gagal menolak.", "danger");
      }
    });
  }
  openBatalPermohonan(item) {
    this.batalItem.set(item);
    this.batalSelectedDates.set([]);
    this.showBatalModal.set(true);
  }
  toggleBatalDate(tgl) {
    const curr = this.batalSelectedDates();
    if (curr.includes(tgl)) {
      this.batalSelectedDates.set(curr.filter((t) => t !== tgl));
    } else {
      this.batalSelectedDates.set([...curr, tgl]);
    }
  }
  isBatalDateSelected(tgl) {
    return this.batalSelectedDates().includes(tgl);
  }
  batalPermohonanHari() {
    const item = this.batalItem();
    const k = this.karyawan();
    if (!item || !k || this.batalSelectedDates().length === 0)
      return;
    this.hariBatalSaving.set(true);
    this.izinHariSvc.delete(k.id, item.id).subscribe({
      next: () => {
        this.listIzinHari.update((list) => list.filter((x) => x.id !== item.id));
        this.hariBatalSaving.set(false);
        this.showBatalModal.set(false);
        this.showToast("Permohonan izin berhasil dibatalkan.");
      },
      error: () => {
        this.hariBatalSaving.set(false);
        this.showToast("Gagal membatalkan permohonan.", "danger");
      }
    });
  }
  openRiwayatHari(item) {
    const k = this.karyawan();
    if (!k)
      return;
    this.hariRiwayatItem.set(item);
    this.hariRiwayatList.set([]);
    this.hariRiwayatPage.set(1);
    this.hariRiwayatError.set("");
    this.hariRiwayatLoading.set(true);
    this.hariShowRiwayatModal.set(true);
    this.izinHariSvc.getRiwayat(k.id, item.id).subscribe({
      next: (list) => {
        this.hariRiwayatList.set(list);
        this.hariRiwayatLoading.set(false);
      },
      error: () => {
        this.hariRiwayatError.set("Gagal memuat riwayat.");
        this.hariRiwayatLoading.set(false);
      }
    });
  }
  hariTipeLabel(tipe) {
    if (tipe === "DIBUAT")
      return "Dibuat";
    if (tipe === "DIUBAH")
      return "Diubah";
    if (tipe === "STATUS")
      return "Ubah Status";
    if (tipe === "DIHAPUS")
      return "Dihapus";
    return tipe;
  }
  hariTipeClass(tipe) {
    if (tipe === "DIBUAT")
      return "rw-badge rw-badge--dibuat";
    if (tipe === "DIUBAH")
      return "rw-badge rw-badge--diubah";
    if (tipe === "STATUS")
      return "rw-badge rw-badge--diubah";
    return "rw-badge rw-badge--dihapus";
  }
  formatRiwayatHariAt(dt) {
    if (!dt)
      return "";
    const d = new Date(dt);
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  }
  // ── Cetak Permohonan ──────────────────────────────────────
  cetakPermohonan(item) {
    const k = this.karyawan();
    if (!k)
      return;
    const today = /* @__PURE__ */ new Date();
    const bulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
    const tanggalSurat = `${today.getDate()} ${bulan[today.getMonth()]} ${today.getFullYear()}`;
    const nomorSurat = `${String(item.id).padStart(3, "0")}/IZIN/${today.getFullYear()}`;
    const divisi = k.namaDivisi ?? "\u2014";
    const jabatan = k.namaJabatan ?? "\u2014";
    const nip = k.nip ?? "\u2014";
    const tglRows = item.tanggalList.map((t, i) => {
      const d = /* @__PURE__ */ new Date(t + "T00:00:00");
      const hr = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][d.getDay()];
      const tgl = `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
      return `<tr>
        <td style="padding:3px 0 3px 0;color:#374151">${i === 0 ? "" : ""}</td>
        <td style="padding:3px 8px;color:#1e1b4b;font-weight:600">${i + 1}.</td>
        <td style="padding:3px 0;color:#1e1b4b">${hr}, ${tgl}</td>
      </tr>`;
    }).join("");
    const statusColor = item.status === "DISETUJUI" ? "#15803d" : item.status === "DITOLAK" ? "#b91c1c" : "#92400e";
    const statusBg = item.status === "DISETUJUI" ? "#dcfce7" : item.status === "DITOLAK" ? "#fee2e2" : "#fef9c3";
    const statusLabel = item.status === "DISETUJUI" ? "DISETUJUI" : item.status === "DITOLAK" ? "DITOLAK" : "MENUNGGU PERSETUJUAN";
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win)
      return;
    win.document.write(`<!DOCTYPE html>
<html lang="id"><head>
<meta charset="UTF-8">
<title>Surat Permohonan Izin \u2014 ${k.namaLengkap}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f0f2f5;
    color: #1f2937;
    font-size: 13px;
  }
  .page {
    width: 210mm;
    min-height: 297mm;
    margin: 20px auto;
    background: #fff;
    box-shadow: 0 4px 32px rgba(0,0,0,.15);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  /* \u2500\u2500 Header strip \u2500\u2500 */
  .header-strip {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    padding: 28px 40px 22px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .header-logo {
    width: 56px; height: 56px;
    background: rgba(255,255,255,.2);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; font-weight: 900; color: #fff;
    flex-shrink: 0;
    border: 2px solid rgba(255,255,255,.35);
  }
  .header-text h1 {
    font-size: 18px; font-weight: 800; letter-spacing: .04em;
    text-transform: uppercase; margin-bottom: 3px;
  }
  .header-text p {
    font-size: 12px; opacity: .8;
  }
  .header-nomor {
    margin-left: auto; text-align: right;
  }
  .header-nomor .label { font-size: 10px; opacity: .75; letter-spacing: .08em; text-transform: uppercase; }
  .header-nomor .nomor { font-size: 13px; font-weight: 700; letter-spacing: .04em; }

  /* \u2500\u2500 Content \u2500\u2500 */
  .content { padding: 32px 40px 40px; }

  /* \u2500\u2500 Section title \u2500\u2500 */
  .section-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 700;
    color: #6366f1;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 2px solid #e0e7ff;
  }

  /* \u2500\u2500 Info karyawan \u2500\u2500 */
  .karyawan-card {
    background: #f8f7ff;
    border: 1px solid #e0e7ff;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .karyawan-avatar {
    width: 48px; height: 48px;
    background: linear-gradient(135deg, #6366f1, #7c3aed);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 20px; font-weight: 800;
    flex-shrink: 0;
  }
  .karyawan-info h2 { font-size: 15px; font-weight: 700; color: #1e1b4b; margin-bottom: 2px; }
  .karyawan-info p  { font-size: 12px; color: #6b7280; }
  .karyawan-meta {
    margin-left: auto; text-align: right;
  }
  .karyawan-meta .meta-row { font-size: 11.5px; color: #374151; line-height: 1.8; }
  .karyawan-meta .meta-label { color: #9ca3af; margin-right: 6px; }

  /* \u2500\u2500 Detail tabel \u2500\u2500 */
  .detail-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
  }
  .detail-table tr td {
    padding: 9px 12px;
    border-bottom: 1px solid #f3f4f6;
    vertical-align: top;
    font-size: 12.5px;
  }
  .detail-table tr:last-child td { border-bottom: none; }
  .detail-table .label-col {
    width: 160px;
    color: #6b7280;
    font-weight: 600;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: .04em;
    white-space: nowrap;
  }
  .detail-table .sep-col { width: 16px; color: #d1d5db; }
  .detail-table .value-col { color: #111827; }

  /* \u2500\u2500 Status badge \u2500\u2500 */
  .status-badge {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .04em;
    background: ${statusBg};
    color: ${statusColor};
    border: 1.5px solid ${statusColor}33;
  }

  /* \u2500\u2500 Keperluan box \u2500\u2500 */
  .keperluan-box {
    background: #f9fafb;
    border-left: 4px solid #6366f1;
    border-radius: 0 8px 8px 0;
    padding: 10px 14px;
    color: #374151;
    font-size: 13px;
    line-height: 1.6;
  }

  /* \u2500\u2500 Tanda tangan \u2500\u2500 */
  .ttd-section {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    gap: 20px;
  }
  .ttd-block {
    text-align: center;
    flex: 1;
  }
  .ttd-block .ttd-kota {
    font-size: 12px; color: #6b7280; margin-bottom: 4px;
  }
  .ttd-block .ttd-jabatan {
    font-size: 11.5px; color: #374151; font-weight: 600; margin-bottom: 56px;
  }
  .ttd-block .ttd-garis {
    border-top: 1px solid #374151;
    margin: 0 auto 4px;
    width: 140px;
  }
  .ttd-block .ttd-nama {
    font-size: 12.5px; font-weight: 700; color: #1e1b4b;
  }
  .ttd-block .ttd-nip {
    font-size: 11px; color: #6b7280;
  }

  /* \u2500\u2500 Watermark status \u2500\u2500 */
  .watermark {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%) rotate(-35deg);
    font-size: 72px;
    font-weight: 900;
    opacity: .04;
    color: ${statusColor};
    pointer-events: none;
    white-space: nowrap;
    z-index: 0;
    text-transform: uppercase;
  }

  /* \u2500\u2500 Footer strip \u2500\u2500 */
  .footer-strip {
    background: #f8f7ff;
    border-top: 1px solid #e0e7ff;
    padding: 10px 40px;
    font-size: 10px;
    color: #9ca3af;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* \u2500\u2500 Print tombol \u2500\u2500 */
  .print-bar {
    position: fixed;
    top: 12px; right: 12px;
    display: flex; gap: 8px; z-index: 9999;
  }
  .btn-print {
    padding: 8px 20px;
    background: #6366f1; color: #fff;
    border: none; border-radius: 8px;
    font-size: 13px; font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(99,102,241,.4);
  }
  .btn-print:hover { background: #4f46e5; }
  .btn-close-win {
    padding: 8px 16px;
    background: #fff; color: #374151;
    border: 1px solid #e5e7eb; border-radius: 8px;
    font-size: 13px; font-weight: 600;
    cursor: pointer;
  }

  @media print {
    body { background: #fff; }
    .page { margin: 0; box-shadow: none; border-radius: 0; width: 100%; }
    .print-bar { display: none; }
    .watermark { position: fixed; }
  }
</style>
</head><body>

<!-- Print bar -->
<div class="print-bar">
  <button class="btn-close-win" onclick="window.close()">\u2715 Tutup</button>
  <button class="btn-print" onclick="window.print()">\u{1F5A8} Cetak / Simpan PDF</button>
</div>

<div class="page">

  <!-- Watermark -->
  <div class="watermark">${statusLabel}</div>

  <!-- Header -->
  <div class="header-strip">
    <div class="header-logo">IZ</div>
    <div class="header-text">
      <h1>Surat Permohonan Izin</h1>
      <p>Dokumen Resmi Pengajuan Izin Karyawan</p>
    </div>
    <div class="header-nomor">
      <div class="label">Nomor Surat</div>
      <div class="nomor">${nomorSurat}</div>
    </div>
  </div>

  <!-- Content -->
  <div class="content">

    <!-- Info Karyawan -->
    <div class="section-title">Data Pemohon</div>
    <div class="karyawan-card">
      <div class="karyawan-avatar">${k.namaLengkap.charAt(0).toUpperCase()}</div>
      <div class="karyawan-info">
        <h2>${k.namaLengkap}</h2>
        <p>${divisi}${jabatan !== "\u2014" ? " &bull; " + jabatan : ""}</p>
      </div>
      <div class="karyawan-meta">
        <div class="meta-row"><span class="meta-label">NIP</span>${nip}</div>
        <div class="meta-row"><span class="meta-label">Tgl. Pengajuan</span>${this.formatTanggalCreated(item.createdAt)}</div>
      </div>
    </div>

    <!-- Detail Izin -->
    <div class="section-title">Detail Permohonan Izin</div>
    <table class="detail-table">
      <tr>
        <td class="label-col">Tanggal Izin</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          <table style="border-collapse:collapse">
            ${tglRows}
          </table>
        </td>
      </tr>
      <tr>
        <td class="label-col">Keperluan</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          <div class="keperluan-box">${item.keperluan}</div>
        </td>
      </tr>
      <tr>
        <td class="label-col">Mengurangi Gaji</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          ${item.mengurangiGaji ? '<span style="color:#b91c1c;font-weight:600">Ya, izin ini mengurangi gaji</span>' : '<span style="color:#15803d;font-weight:600">Tidak mengurangi gaji</span>'}
        </td>
      </tr>
      <tr>
        <td class="label-col">Status</td>
        <td class="sep-col">:</td>
        <td class="value-col">
          <span class="status-badge">${statusLabel}</span>
        </td>
      </tr>
      ${item.catatanPenolakan ? `
      <tr>
        <td class="label-col">Catatan Penolakan</td>
        <td class="sep-col">:</td>
        <td class="value-col" style="color:#b91c1c">${item.catatanPenolakan}</td>
      </tr>` : ""}
    </table>

    <!-- Tanda Tangan -->
    <div class="ttd-section">
      <div class="ttd-block">
        <div class="ttd-kota">_____________, ${tanggalSurat}</div>
        <div class="ttd-jabatan">Mengetahui / Menyetujui</div>
        <div class="ttd-garis"></div>
        <div class="ttd-nama">( ________________________ )</div>
        <div class="ttd-nip">Atasan Langsung / HRD</div>
      </div>
      <div class="ttd-block">
        <div class="ttd-kota">_____________, ${tanggalSurat}</div>
        <div class="ttd-jabatan">Pemohon</div>
        <div class="ttd-garis"></div>
        <div class="ttd-nama">( ${k.namaLengkap} )</div>
        <div class="ttd-nip">${nip !== "\u2014" ? "NIP: " + nip : jabatan}</div>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div class="footer-strip">
    <span>Dicetak pada: ${tanggalSurat} &bull; Dokumen ini dibuat secara otomatis oleh sistem</span>
    <span>No. ${nomorSurat}</span>
  </div>

</div>
</body></html>`);
    win.document.close();
  }
  eksporExcelHari() {
    const k = this.karyawan();
    if (!k)
      return;
    this.hariEksporting.set(true);
    const opts = {};
    const f = this.hariFilter();
    if (["DISETUJUI", "DITOLAK"].includes(f))
      opts.status = f;
    if (this.hariFilterMulai())
      opts.from = this.hariFilterMulai();
    if (this.hariFilterSelesai())
      opts.to = this.hariFilterSelesai();
    this.izinHariSvc.exportExcel(k.id, opts).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `izin-hari-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.hariEksporting.set(false);
      },
      error: () => {
        this.hariEksporting.set(false);
        this.showToast("Gagal ekspor Excel.", "danger");
      }
    });
  }
  // ── Set filter Hari ───────────────────────────────────────
  setHariFilter(filter) {
    this.hariFilter.set(filter);
    this.hariPage.set(1);
    this.loadIzinHari();
  }
  // ── Load Izin Hari ────────────────────────────────────────
  loadIzinHari() {
    const k = this.karyawan();
    if (!k)
      return;
    this.hariLoading.set(true);
    const f = this.hariFilter();
    const opts = {};
    if (f === "PENGAJUAN")
      opts.status = "MENUNGGU";
    else if (f === "DISETUJUI")
      opts.status = "DISETUJUI";
    else if (f === "DITOLAK")
      opts.status = "DITOLAK";
    else if (f === "HARI_INI")
      opts.filter = "HARI_INI";
    else if (f === "BESOK")
      opts.filter = "BESOK";
    else if (f === "7_HARI")
      opts.filter = "7_HARI";
    if (this.hariFilterMulai())
      opts.from = this.hariFilterMulai();
    if (this.hariFilterSelesai())
      opts.to = this.hariFilterSelesai();
    this.izinHariSvc.getAll(k.id, opts).subscribe({
      next: (data) => {
        this.listIzinHari.set(data);
        this.hariLoading.set(false);
      },
      error: () => {
        this.hariLoading.set(false);
        this.showToast("Gagal memuat izin hari.", "danger");
      }
    });
  }
  // ── Format tanggal untuk Izin Hari ───────────────────────
  formatTanggalHari(tgl) {
    if (!tgl)
      return "\u2014";
    const d = /* @__PURE__ */ new Date(tgl + "T00:00:00");
    const hari = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][d.getDay()];
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${hari}, ${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()}`;
  }
  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const user = this.auth.currentUser();
    if (user?.role === "KARYAWAN" && user.karyawanId !== id) {
      this.router.navigate(["/karyawan", user.karyawanId, "izin"]);
      return;
    }
    this.karyawanSvc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        this.loadIzinJam();
        this.loadIzinHari();
      },
      error: () => this.error.set("Gagal memuat data karyawan.")
    });
  }
  static {
    this.\u0275fac = function KaryawanIzinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanIzinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanIzinComponent, selectors: [["app-karyawan-izin"]], decls: 51, vars: 26, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "info-bar", "card", "border-0", "shadow-sm", "mb-3", "px-4", "py-3", "d-flex", "flex-row", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid #e9ecef", "flex-shrink", "0", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "44px", "height", "44px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.2rem", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-bold", 2, "font-size", "1rem"], [1, "text-muted", "small"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "routerLink"], [1, "bx", "bx-arrow-back", "me-1"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "izin-toast", "d-flex", "align-items-center", "gap-2", 3, "izin-toast--danger"], [1, "card", "border-0", "shadow-sm"], [1, "px-4", "pt-4", "pb-0"], [1, "fw-bold", "mb-3", 2, "font-size", "1.2rem"], [1, "d-flex", "gap-2", "mb-4"], [1, "izin-tab-btn", 3, "click"], [1, "px-4", "pb-4"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1056"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1060"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1065"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.52)", "z-index", "1070"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.52)", "z-index", "1080"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1090"], [3, "routerLink"], [1, "bx", "bx-user"], [1, "bx", "bx-error-circle", "fs-5"], [1, "izin-toast", "d-flex", "align-items-center", "gap-2"], [1, "d-flex", "gap-2", "mb-4", "flex-wrap"], [1, "status-btn", 3, "click"], [1, "bx", "bx-check-circle", "me-1"], [1, "bx", "bx-x-circle", "me-1"], [1, "bx", "bx-badge-check", "me-1"], [1, "bx", "bx-block", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2", "mb-3", "p-3", "rounded-3", 2, "background", "#f8f9fb", "border", "1px solid #eef0f4"], [1, "bx", "bx-filter", "text-muted"], ["type", "date", 1, "form-control", "form-control-sm", 2, "width", "148px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "ms-auto", "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-sm", "btn-ekspor", "px-3", "d-flex", "align-items-center", "gap-1", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm"], [1, "bx", "bx-spreadsheet"], [1, "btn", "btn-sm", "btn-izin-action", "px-3", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bx", "bx-cog"], [1, "btn", "btn-sm", "btn-izin-action", "px-3", "d-flex", "align-items-center", "gap-1"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "mb-3", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-select", "form-select-sm", 2, "width", "68px", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "input-group", "input-group-sm", 2, "width", "220px"], [1, "input-group-text", "bg-white"], [1, "bx", "bx-search", "text-muted"], ["type", "text", "placeholder", "Cari keperluan...", 1, "form-control", "border-start-0", 3, "ngModelChange", "ngModel"], [1, "text-center", "py-5", "text-muted"], [1, "form-select", "form-select-sm", 2, "width", "200px", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "YA"], ["value", "TIDAK"], [1, "bx", "bx-plus"], [1, "spinner-border", "text-primary", "mb-3", 2, "width", "2.5rem", "height", "2.5rem"], [1, "mb-0", "small", "fw-semibold"], [1, "text-center", "py-5"], [1, "izin-grid", "mb-3"], [1, "jam-card"], [1, "dt-footer", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "px-1", "pt-3", "pb-1"], [1, "d-flex", "align-items-center", "gap-1"], [1, "dt-pg-btn", 3, "click", "disabled"], [1, "bx", "bx-chevrons-left"], [1, "bx", "bx-chevron-left"], [1, "dt-pg-btn", 3, "dt-pg-btn--active"], [1, "bx", "bx-chevron-right"], [1, "bx", "bx-chevrons-right"], [1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "mb-3", 2, "width", "64px", "height", "64px", "background", "#f3f4f6"], [1, "bx", "bx-calendar-x", "text-muted", 2, "font-size", "1.8rem"], [1, "fw-semibold", "text-muted", "mb-1"], [1, "jam-card__header"], [1, "jam-card__created"], [1, "bx", "bx-calendar"], [1, "status-pill", "status-pill--disetujui"], [1, "status-pill", "status-pill--ditolak"], [1, "status-pill", "status-pill--tdk-terp"], [1, "status-pill", "status-pill--menunggu"], [1, "jam-card__body"], [1, "jam-range"], [1, "jam-range__block"], [1, "jam-range__date"], [1, "jam-range__time"], [1, "jam-range__arrow"], [1, "jam-range__duration"], [1, "jam-range__line"], [1, "bx", "bx-right-arrow-alt", "text-primary", 2, "font-size", "1.1rem"], [1, "mb-2"], [1, "d-flex", "flex-wrap", "gap-1", "mb-1"], [1, "jam-keperluan"], [1, "rounded-3", "px-3", "py-2", "mt-2", 2, "background", "#fff5f5", "border", "1px solid #fecaca", "font-size", ".78rem", "color", "#b91c1c"], [1, "jam-card__footer"], ["title", "Riwayat", 1, "aksi-btn", "aksi-riwayat", 3, "click"], [1, "bx", "bx-history"], [1, "bx", "bx-check-circle"], [1, "bx", "bx-x-circle"], [1, "bx", "bx-block"], [1, "bx", "bx-time"], [1, "jam-pengganti"], [1, "bx", "bx-refresh"], [1, "bx"], [1, "bx", "bx-note", "text-muted", "me-1"], [1, "bx", "bx-info-circle", "me-1"], [1, "ms-2", "text-muted"], ["title", "Edit", 1, "aksi-btn", "aksi-edit", 3, "click"], [1, "bx", "bx-edit"], ["title", "Tolak", 1, "aksi-btn", "aksi-tolak"], [1, "d-flex", "align-items-center", "gap-1", "ms-1"], ["title", "Hapus", 1, "aksi-btn", "aksi-hapus"], ["title", "Tolak", 1, "aksi-btn", "aksi-tolak", 3, "click"], [1, "bx", "bx-x"], [2, "font-size", ".72rem", "color", "#b91c1c"], [1, "btn", "btn-danger", "btn-sm", "py-0", "px-2", 3, "click", "disabled"], [1, "btn", "btn-secondary", "btn-sm", "py-0", "px-2", 3, "click"], ["title", "Hapus", 1, "aksi-btn", "aksi-hapus", 3, "click"], [1, "bx", "bx-trash"], [1, "dt-pg-btn", 3, "click"], [1, "d-flex", "gap-2", "mb-4", "flex-wrap", "align-items-center"], [1, "bx", "bx-send", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2", "mb-4", "p-3", "rounded-3", 2, "background", "#f8f9fb", "border", "1px solid #eef0f4"], [1, "btn", "btn-sm", "btn-primary", "px-3", "d-flex", "align-items-center", "gap-1", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-3"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-3", 3, "click"], [1, "text-muted", "small", "fw-semibold"], [1, "hari-card", "mb-3"], [1, "d-flex", "gap-1"], [1, "row", "g-0"], [1, "col-12", "col-md-7", "hari-card__left"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "created-at"], [1, "bx", "bx-calendar", "me-1"], [1, "hari-gaji-badge", "hari-gaji-badge--ya"], [1, "hari-gaji-badge", "hari-gaji-badge--tidak"], [1, "hari-detail-row"], [1, "hari-detail-label"], [1, "hari-detail-sep"], [1, "hari-detail-value"], [1, "d-flex", "flex-column", "gap-1"], [1, "hari-tgl-chip"], [1, "jam-keperluan", 2, "margin-top", "0"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", "btn-outline-primary", "py-0", "px-2", 2, "font-size", ".75rem", 3, "href"], [1, "rounded-3", "px-3", "py-2", "mt-1", 2, "background", "#fff5f5", "border", "1px solid #fecaca", "font-size", ".78rem", "color", "#b91c1c"], [1, "col-12", "col-md-5", "hari-card__right"], [1, "status-pill", "status-pill--disetujui", 2, "font-size", ".82rem", "padding", "8px 18px"], [1, "status-pill", "status-pill--ditolak", 2, "font-size", ".82rem", "padding", "8px 18px"], [1, "status-pill", "status-pill--menunggu", 2, "font-size", ".82rem", "padding", "8px 18px"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-izin-action", "dropdown-toggle", "px-4"], [1, "bx", "bx-dots-horizontal-rounded", "me-1"], [1, "dropdown-menu", "dropdown-menu-end", "shadow-sm", "border-0", 2, "border-radius", "12px", "min-width", "190px"], [1, "bx", "bx-minus-circle", "me-1"], [1, "bx", "bx-calendar-event"], [1, "bx", "bx-file", "me-1"], [1, "dropdown-item", "d-flex", "align-items-center", "gap-2", "py-2", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-2", 2, "width", "24px", "height", "24px", "background", "#e0f2fe"], [1, "bx", "bx-edit", 2, "color", "#0369a1"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-2", 2, "width", "24px", "height", "24px", "background", "#f3f4f6"], [1, "bx", "bx-printer", 2, "color", "#374151"], [1, "dropdown-divider", "my-1"], [1, "dropdown-item", "d-flex", "align-items-center", "gap-2", "py-2", 2, "color", "#b45309", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-2", 2, "width", "24px", "height", "24px", "background", "#fef3c7"], [1, "bx", "bx-undo", 2, "color", "#b45309"], [1, "bx", "bx-history", 2, "color", "#6b7280"], [1, "dropdown-item", "d-flex", "align-items-center", "gap-2", "py-2", "text-danger", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-2", 2, "width", "24px", "height", "24px", "background", "#fee2e2"], [1, "bx", "bx-trash", 2, "color", "#b91c1c"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-2", 2, "width", "24px", "height", "24px", "background", "#dcfce7"], [1, "bx", "bx-check", 2, "color", "#166534"], [1, "bx", "bx-x", 2, "color", "#b91c1c"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg", 3, "click"], [1, "modal-content", "border-0", "shadow-lg", "rounded-4"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "fw-bold"], [1, "bx", "bx-calendar-plus", "me-2", "text-primary"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "pt-3"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label", "fw-semibold", "small"], [1, "text-danger"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Tulis keperluan izin...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-between", "rounded-3", "px-3", "py-2", "border"], [1, "fw-semibold", "small"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "role", "switch", 1, "form-check-input", 2, "width", "2.5em", "height", "1.3em", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-outline-secondary", "mb-0", 2, "cursor", "pointer"], [1, "bx", "bx-upload", "me-1"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "d-none", 3, "change"], [1, "small", "text-muted", "text-truncate", 2, "max-width", "200px"], [1, "small", "text-muted"], [1, "modal-footer", "border-0", "pt-0"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1056", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-title", "fw-bold", "text-danger"], [1, "bx", "bx-x-circle", "me-2"], ["rows", "3", "placeholder", "Tuliskan alasan penolakan (opsional)...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-danger", "px-4", 3, "click", "disabled"], [1, "bx", "bx-plus-circle", "me-2", "text-primary"], [1, "d-flex", "flex-column", "gap-4"], [1, "modal-footer", "border-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn", "btn-izin-action", "btn-sm", "px-4", 3, "click", "disabled"], [1, "bx", "bx-save", "me-1"], [1, "d-flex", "gap-2"], ["type", "time", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Tuliskan keperluan izin...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "radio-group"], [1, "radio-group-label"], [1, "d-flex", "gap-2", "mt-2"], [1, "radio-opt"], ["type", "radio", "name", "dapatMengganti", 3, "change", "value", "checked"], ["type", "radio", "name", "kenaPotong", 3, "change", "value", "checked"], ["type", "radio", "name", "kenaDenda", 3, "change", "value", "checked"], [1, "bx", "bx-cog", "me-2", "text-primary"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-title", "text-danger", "fw-bold"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted", 2, "font-size", ".9rem"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click", "disabled"], [1, "bx", "bx-trash", "me-1"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1065", 3, "click"], [1, "modal-header", "border-0", "pb-0", "pt-4", "px-4"], [1, "d-flex", "align-items-center", "gap-3"], [2, "width", "42px", "height", "42px", "border-radius", "50%", "background", "#fee2e2", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "bx", "bx-x-circle", 2, "font-size", "1.3rem", "color", "#b91c1c"], [1, "modal-title", "fw-bold", "mb-0", 2, "font-size", "1rem"], [1, "text-muted", "small", "mt-1"], ["type", "button", 1, "btn-close", "ms-auto", 3, "click", "disabled"], [1, "modal-body", "px-4", "pt-3", "pb-2"], [1, "text-muted", "small", "mb-3"], [1, "text-muted", "fw-normal"], ["rows", "3", "placeholder", "Tuliskan alasan penolakan...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "disabled"], [1, "modal-footer", "border-0", "px-4", "pb-4", "pt-2", "gap-2", "justify-content-end"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.52)", "z-index", "1070", 3, "click"], [1, "modal-content", "border-0", "shadow-lg", 2, "border-radius", "14px", "overflow", "hidden"], [1, "modal-header", "border-bottom", "px-4", "py-3"], [1, "modal-title", "fw-bold", "mb-0"], [1, "bx", "bx-history", "me-2", "text-primary"], [1, "modal-body", "p-0", 2, "max-height", "65vh", "overflow-y", "auto"], [1, "alert", "alert-danger", "m-3"], [1, "table", "mb-0", 2, "font-size", ".84rem", "table-layout", "fixed"], [1, "modal-footer", "border-top", "d-flex", "align-items-center", "justify-content-between", "px-4", "py-2"], [1, "spinner-border", "text-primary", "mb-3"], [1, "mb-0", "small"], [2, "background", "#f9fafb"], [2, "width", "260px", "padding", "12px 20px", "font-size", ".72rem", "text-transform", "uppercase", "letter-spacing", ".05em", "color", "#6b7280", "font-weight", "700", "border-bottom", "1px solid #e5e7eb"], [2, "padding", "12px 20px", "font-size", ".72rem", "text-transform", "uppercase", "letter-spacing", ".05em", "color", "#6b7280", "font-weight", "700", "border-bottom", "1px solid #e5e7eb"], [2, "border-bottom", "1px solid #f1f3f5", "vertical-align", "top"], ["colspan", "2", 1, "text-center", "py-5", "text-muted"], [1, "bx", "bx-history", "fs-3", "d-block", "mb-2"], [2, "padding", "16px 20px", "width", "260px"], [1, "d-flex", "align-items-start", "gap-3"], [1, "rw-avatar", "flex-shrink-0"], [1, "fw-semibold", 2, "font-size", ".88rem"], [1, "mt-2", "d-inline-block"], [2, "padding", "16px 20px"], [1, "rw-judul-badge"], [1, "rw-id-badge"], [1, "rw-item"], [1, "rw-label", "fw-semibold"], [1, "rw-val", "ms-1"], [1, "fw-semibold"], [1, "rw-val-lama", "ms-1"], [1, "bx", "bx-right-arrow-alt", "mx-1", "text-muted", 2, "font-size", ".9rem", "vertical-align", "middle"], [1, "rw-val-baru"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.52)", "z-index", "1080", 3, "click"], [2, "width", "42px", "height", "42px", "border-radius", "50%", "background", "#22c55e", "color", "#fff", "font-weight", "700", "font-size", "1rem", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "fw-bold", 2, "font-size", ".88rem", "color", "#111827"], [2, "display", "inline-flex", "align-items", "center", "gap", "6px", "background", "#f97316", "color", "#fff", "font-size", ".78rem", "font-weight", "700", "padding", "4px 12px", "border-radius", "9999px"], [2, "background", "rgba(255,255,255,.25)", "border-radius", "9999px", "padding", "1px 8px", "font-size", ".72rem", "font-weight", "700"], [2, "font-size", ".83rem", "color", "#374151", "line-height", "1.8"], [1, "fw-semibold", 2, "color", "#111827"], [2, "text-decoration", "underline", "margin-left", "4px"], [2, "color", "#6b7280", "text-decoration", "underline", "margin-left", "4px"], [2, "text-decoration", "underline", "font-weight", "500"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1090", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "380px", 3, "click"], [1, "modal-title", "fw-bold", "mb-0", 2, "color", "#1e1b4b"], [1, "modal-body", "px-4", "py-3"], [1, "rounded-3", "px-3", "py-2", "mb-3", 2, "background", "#ede9fe", "color", "#4338ca", "font-size", ".88rem", "font-weight", "600", "line-height", "1.5"], [1, "text-danger", "small", "mt-2"], [1, "modal-footer", "border-0", "px-4", "pb-4", "pt-2", "justify-content-start", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "px-4", "fw-semibold", 2, "background", "#6366f1", "border-color", "#6366f1", "border-radius", "10px", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", "fw-semibold", "px-4", 2, "border-radius", "10px", 3, "click"], [1, "d-flex", "align-items-center", "gap-3", "py-2", 2, "border-bottom", "1px solid #f3f4f6", "cursor", "pointer", "font-size", ".9rem", "color", "#374151"], ["type", "checkbox", 2, "width", "16px", "height", "16px", "accent-color", "#6366f1", "cursor", "pointer", "flex-shrink", "0", 3, "change", "checked"]], template: function KaryawanIzinComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, KaryawanIzinComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Izin");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275conditionalCreate(17, KaryawanIzinComponent_Conditional_17_Template, 1, 1, "img", 11)(18, KaryawanIzinComponent_Conditional_18_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23);
        \u0275\u0275conditionalCreate(24, KaryawanIzinComponent_Conditional_24_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 16);
        \u0275\u0275element(26, "i", 17);
        \u0275\u0275text(27, " Kembali ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(28, KaryawanIzinComponent_Conditional_28_Template, 3, 1, "div", 18);
        \u0275\u0275conditionalCreate(29, KaryawanIzinComponent_Conditional_29_Template, 4, 5, "div", 19);
        \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "div", 22);
        \u0275\u0275text(33, "Izin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 23)(35, "button", 24);
        \u0275\u0275listener("click", function KaryawanIzinComponent_Template_button_click_35_listener() {
          return ctx.setTab("jam");
        });
        \u0275\u0275text(36, "Izin Jam");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 24);
        \u0275\u0275listener("click", function KaryawanIzinComponent_Template_button_click_37_listener() {
          return ctx.setTab("hari");
        });
        \u0275\u0275text(38, "Izin Hari");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(39, KaryawanIzinComponent_Conditional_39_Template, 49, 21, "div", 25);
        \u0275\u0275conditionalCreate(40, KaryawanIzinComponent_Conditional_40_Template, 39, 18, "div", 25);
        \u0275\u0275conditionalCreate(41, KaryawanIzinComponent_Conditional_41_Template, 49, 8, "div", 26);
        \u0275\u0275conditionalCreate(42, KaryawanIzinComponent_Conditional_42_Template, 19, 3, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(43, KaryawanIzinComponent_Conditional_43_Template, 19, 7, "div", 26);
        \u0275\u0275conditionalCreate(44, KaryawanIzinComponent_Conditional_44_Template, 14, 0, "div", 26);
        \u0275\u0275conditionalCreate(45, KaryawanIzinComponent_Conditional_45_Template, 16, 3, "div", 28);
        \u0275\u0275conditionalCreate(46, KaryawanIzinComponent_Conditional_46_Template, 16, 3, "div", 29);
        \u0275\u0275conditionalCreate(47, KaryawanIzinComponent_Conditional_47_Template, 30, 7, "div", 29);
        \u0275\u0275conditionalCreate(48, KaryawanIzinComponent_Conditional_48_Template, 13, 4, "div", 30);
        \u0275\u0275conditionalCreate(49, KaryawanIzinComponent_Conditional_49_Template, 13, 4, "div", 31);
        \u0275\u0275conditionalCreate(50, KaryawanIzinComponent_Conditional_50_Template, 18, 4, "div", 32);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(13);
        \u0275\u0275conditional(((tmp_0_0 = ctx.karyawan()) == null ? null : tmp_0_0.namaLengkap) ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_1_0 = ctx.fotoUrl((tmp_1_0 = ctx.karyawan()) == null ? null : tmp_1_0.fotoProfil)) ? 17 : 18, tmp_1_0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.karyawan()) == null ? null : tmp_2_0.namaLengkap) || "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx.karyawan()) == null ? null : tmp_3_0.namaDivisi) || "Belum ada divisi", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_4_0 = ctx.karyawan()) == null ? null : tmp_4_0.namaJabatan) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, (tmp_5_0 = ctx.karyawan()) == null ? null : tmp_5_0.id));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 29 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("izin-tab-btn--active", ctx.activeTab() === "jam");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("izin-tab-btn--active", ctx.activeTab() === "hari");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.activeTab() === "jam" ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "hari" ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showHariModal() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hariShowTolakModal() ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTambahModal() ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPengaturanModal() ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.konfirmasiHapusId() !== null ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hariKonfirmasiHapusId() !== null ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hariShowRiwayatModal() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBatalModal() ? 50 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LayoutComponent], styles: ['@charset "UTF-8";\n\n\n.info-bar[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f7ff 0%,\n      #eef2ff 100%) !important;\n  border: 1px solid #e0e7ff !important;\n}\n.izin-tab-btn[_ngcontent-%COMP%] {\n  padding: 8px 28px;\n  border-radius: 999px;\n  border: 2px solid transparent;\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6366f1;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.izin-tab-btn[_ngcontent-%COMP%]:hover {\n  background: #ede9fe;\n}\n.izin-tab-btn--active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.izin-tab-btn--active[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n.status-btn[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n  border-radius: 999px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.status-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff;\n  border-color: #a5b4fc;\n  color: #6366f1;\n}\n.status-btn--active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);\n}\n.status-btn--active[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  border-color: #4f46e5;\n}\n.btn-izin-action[_ngcontent-%COMP%], \n.btn-ekspor[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: all 0.15s;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);\n}\n.btn-izin-action[_ngcontent-%COMP%]:hover, \n.btn-ekspor[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);\n}\n.btn-izin-action[_ngcontent-%COMP%]:disabled, \n.btn-ekspor[_ngcontent-%COMP%]:disabled {\n  background: #c7d2fe;\n  box-shadow: none;\n}\n.jam-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n  transition: box-shadow 0.18s, transform 0.18s;\n  overflow: hidden;\n}\n.jam-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.jam-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px 8px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.jam-card__created[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.jam-card__body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n}\n.jam-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.jam-range__block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8f7ff;\n  border: 1px solid #e0e7ff;\n  border-radius: 10px;\n  padding: 8px 14px;\n  min-width: 80px;\n}\n.jam-range__date[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #6b7280;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-align: center;\n  line-height: 1.3;\n}\n.jam-range__time[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #4338ca;\n  letter-spacing: 0.02em;\n  line-height: 1.2;\n}\n.jam-range__arrow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n  min-width: 60px;\n}\n.jam-range__duration[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #6366f1;\n  background: #ede9fe;\n  border-radius: 999px;\n  padding: 2px 10px;\n  white-space: nowrap;\n}\n.jam-range__line[_ngcontent-%COMP%] {\n  height: 1.5px;\n  background:\n    linear-gradient(\n      90deg,\n      #c7d2fe,\n      #6366f1,\n      #c7d2fe);\n  width: 100%;\n  border-radius: 2px;\n}\n.jam-pengganti[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #0369a1;\n  background: #e0f2fe;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n.jam-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 3px 9px;\n}\n.jam-tag--yes[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.jam-tag--no[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #9ca3af;\n  border: 1px solid #e5e7eb;\n}\n.jam-tag--warn[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.jam-keperluan[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #374151;\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 6px 10px;\n  margin-top: 8px;\n  border-left: 3px solid #a5b4fc;\n  line-height: 1.5;\n}\n.jam-card__footer[_ngcontent-%COMP%] {\n  padding: 8px 16px 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 4px 12px;\n  letter-spacing: 0.02em;\n}\n.status-pill--menunggu[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill--disetujui[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.status-pill--ditolak[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.status-pill--terpenuhi[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n.status-pill--tdk-terp[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.aksi-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.13s;\n}\n.aksi-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  opacity: 0.85;\n}\n.aksi-edit[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.aksi-tolak[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  font-size: 1.1rem;\n}\n.aksi-hapus[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.aksi-riwayat[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.tolak-date-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.73rem;\n  font-weight: 500;\n  color: #b91c1c;\n  background: #fff0f0;\n  border: 1.5px solid #fca5a5;\n  border-radius: 8px;\n  padding: 4px 10px;\n  white-space: nowrap;\n}\n.hari-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n  overflow: visible;\n  transition: box-shadow 0.18s, transform 0.18s;\n}\n.hari-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n}\n.hari-card__left[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-right: 1px solid #f1f3f5;\n  border-radius: 14px 0 0 14px;\n}\n.hari-card__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  gap: 14px;\n  background: #fafbff;\n  border-radius: 0 14px 14px 0;\n  position: relative;\n  overflow: visible;\n  z-index: auto;\n}\n.hari-card[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hari-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 1055;\n  position: absolute !important;\n}\n.hari-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 0.83rem;\n}\n.hari-detail-label[_ngcontent-%COMP%] {\n  min-width: 130px;\n  font-weight: 600;\n  color: #4b5563;\n  text-align: right;\n  padding-top: 1px;\n  flex-shrink: 0;\n}\n.hari-detail-sep[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  padding-top: 1px;\n  flex-shrink: 0;\n}\n.hari-detail-value[_ngcontent-%COMP%] {\n  color: #111827;\n  flex: 1;\n}\n.hari-tgl-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f0f4ff;\n  border: 1px solid #c7d2fe;\n  border-radius: 8px;\n  padding: 4px 10px;\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #3730a3;\n  margin: 2px 0;\n}\n.hari-gaji-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.hari-gaji-badge--ya[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.hari-gaji-badge--tidak[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.dt-toolbar[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.dt-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f3f5;\n  margin-top: 4px;\n}\n.dt-pg-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  height: 34px;\n  padding: 0 6px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.dt-pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5f3ff;\n  border-color: #a5b4fc;\n  color: #4338ca;\n}\n.dt-pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.dt-pg-btn--active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);\n}\n.dt-pg-btn--active[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n.radio-group-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #374151;\n  line-height: 1.5;\n}\n.radio-opt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 18px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: #374151;\n  transition: border-color 0.13s, background 0.13s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.radio-opt[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #6366f1;\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.radio-opt[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n  background: #f5f3ff;\n}\n.radio-opt--active[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  background: #f5f3ff;\n  color: #4338ca;\n  font-weight: 600;\n}\n.rw-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rw-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 9999px;\n}\n.rw-badge--dibuat[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.rw-badge--diubah[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.rw-badge--dihapus[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.rw-judul-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7c3aed;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 9999px;\n}\n.rw-id-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 9999px;\n  padding: 1px 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.rw-item[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #374151;\n  line-height: 1.7;\n}\n.rw-label[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.rw-val[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.rw-val-lama[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-decoration: underline;\n  cursor: default;\n}\n.rw-val-baru[_ngcontent-%COMP%] {\n  color: #374151;\n  text-decoration: underline;\n  cursor: default;\n  font-weight: 500;\n}\n.izin-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 2000;\n  background: #166534;\n  color: #fff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_toastIn 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.izin-toast--danger[_ngcontent-%COMP%] {\n  background: #b91c1c;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.izin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 14px;\n}\n@media (max-width: 575px) {\n  .izin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hari-card[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.hari-card[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1050;\n}\n.created-at[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.dt-keperluan[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 0.83rem;\n  color: #374151;\n}\n/*# sourceMappingURL=karyawan-izin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanIzinComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-izin", standalone: true, imports: [RouterLink, CommonModule, FormsModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          @if (karyawan()?.namaLengkap) {\r
            <li class="breadcrumb-item">\r
              <a [routerLink]="['/karyawan', karyawan()!.id]">{{ karyawan()!.namaLengkap }}</a>\r
            </li>\r
          }\r
          <li class="breadcrumb-item active">Izin</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Info Bar karyawan -->\r
  <div class="info-bar card border-0 shadow-sm mb-3 px-4 py-3 d-flex flex-row align-items-center gap-3">\r
    @if (fotoUrl(karyawan()?.fotoProfil); as url) {\r
      <img [src]="url" alt="Foto" class="rounded-circle"\r
           style="width:44px;height:44px;object-fit:cover;border:2px solid #e9ecef;flex-shrink:0" />\r
    } @else {\r
      <div class="rounded-circle d-flex align-items-center justify-content-center"\r
           style="width:44px;height:44px;background:#f3f4f6;color:#9ca3af;font-size:1.2rem;flex-shrink:0">\r
        <i class="bx bx-user"></i>\r
      </div>\r
    }\r
    <div class="flex-grow-1">\r
      <div class="fw-bold" style="font-size:1rem">{{ karyawan()?.namaLengkap || '\u2014' }}</div>\r
      <div class="text-muted small">\r
        {{ karyawan()?.namaDivisi || 'Belum ada divisi' }}\r
        @if (karyawan()?.namaJabatan) { \xB7 {{ karyawan()!.namaJabatan }} }\r
      </div>\r
    </div>\r
    <a [routerLink]="['/karyawan', karyawan()?.id]" class="btn btn-outline-secondary btn-sm px-3">\r
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
  <!-- Toast -->\r
  @if (toastMsg()) {\r
    <div class="izin-toast d-flex align-items-center gap-2"\r
         [class.izin-toast--danger]="toastType() === 'danger'">\r
      <i [class]="toastType() === 'success' ? 'bx bx-check-circle fs-5' : 'bx bx-x-circle fs-5'"></i>\r
      <span>{{ toastMsg() }}</span>\r
    </div>\r
  }\r
\r
  <!-- Card Utama -->\r
  <div class="card border-0 shadow-sm">\r
    <div class="px-4 pt-4 pb-0">\r
\r
      <!-- Judul -->\r
      <div class="fw-bold mb-3" style="font-size:1.2rem">Izin</div>\r
\r
      <!-- Tab Izin Jam / Izin Hari -->\r
      <div class="d-flex gap-2 mb-4">\r
        <button class="izin-tab-btn" [class.izin-tab-btn--active]="activeTab() === 'jam'"\r
                (click)="setTab('jam')">Izin Jam</button>\r
        <button class="izin-tab-btn" [class.izin-tab-btn--active]="activeTab() === 'hari'"\r
                (click)="setTab('hari')">Izin Hari</button>\r
      </div>\r
\r
    </div>\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
         TAB: IZIN JAM\r
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    @if (activeTab() === 'jam') {\r
\r
    <div class="px-4 pb-4">\r
\r
      <!-- Status tabs pill group -->\r
      <div class="d-flex gap-2 mb-4 flex-wrap">\r
        <button class="status-btn" [class.status-btn--active]="activeStatus() === 'DISETUJUI'"\r
                (click)="setStatus('DISETUJUI')">\r
          <i class="bx bx-check-circle me-1"></i>Disetujui\r
        </button>\r
        <button class="status-btn" [class.status-btn--active]="activeStatus() === 'DITOLAK'"\r
                (click)="setStatus('DITOLAK')">\r
          <i class="bx bx-x-circle me-1"></i>Ditolak\r
        </button>\r
        <button class="status-btn" [class.status-btn--active]="activeStatus() === 'TERPENUHI'"\r
                (click)="setStatus('TERPENUHI')">\r
          <i class="bx bx-badge-check me-1"></i>Terpenuhi\r
        </button>\r
        <button class="status-btn" [class.status-btn--active]="activeStatus() === 'TIDAK_TERPENUHI'"\r
                (click)="setStatus('TIDAK_TERPENUHI')">\r
          <i class="bx bx-block me-1"></i>Tidak Terpenuhi\r
        </button>\r
      </div>\r
\r
      <!-- Toolbar: filter + aksi -->\r
      <div class="d-flex align-items-center flex-wrap gap-2 mb-3 p-3 rounded-3"\r
           style="background:#f8f9fb;border:1px solid #eef0f4">\r
        <i class="bx bx-filter text-muted"></i>\r
        <input type="date" class="form-control form-control-sm" style="width:148px"\r
               [ngModel]="filterMulai()" (ngModelChange)="filterMulai.set($event)" />\r
        <span class="text-muted">\u2014</span>\r
        <input type="date" class="form-control form-control-sm" style="width:148px"\r
               [ngModel]="filterSelesai()" (ngModelChange)="filterSelesai.set($event)" />\r
\r
        @if (activeStatus() === 'DISETUJUI' || activeStatus() === 'TERPENUHI' || activeStatus() === 'TIDAK_TERPENUHI') {\r
          <select class="form-select form-select-sm" style="width:200px"\r
                  [ngModel]="filterDapatMengganti()" (ngModelChange)="filterDapatMengganti.set($event)">\r
            <option value="">Dapat Mengganti</option>\r
            <option value="YA">Ya</option>\r
            <option value="TIDAK">Tidak</option>\r
          </select>\r
          <select class="form-select form-select-sm" style="width:200px"\r
                  [ngModel]="filterKenaPotong()" (ngModelChange)="filterKenaPotong.set($event)">\r
            <option value="">Kenakan Potongan</option>\r
            <option value="YA">Ya</option>\r
            <option value="TIDAK">Tidak</option>\r
          </select>\r
          <select class="form-select form-select-sm" style="width:200px"\r
                  [ngModel]="filterKenaDenda()" (ngModelChange)="filterKenaDenda.set($event)">\r
            <option value="">Kenakan Denda</option>\r
            <option value="YA">Ya</option>\r
            <option value="TIDAK">Tidak</option>\r
          </select>\r
        }\r
\r
        <div class="ms-auto d-flex gap-2 flex-wrap">\r
          <button class="btn btn-sm btn-ekspor px-3 d-flex align-items-center gap-1"\r
                  (click)="eksporExcel()" [disabled]="eksporting()">\r
            @if (eksporting()) { <span class="spinner-border spinner-border-sm"></span> }\r
            @else { <i class="bx bx-spreadsheet"></i> }\r
            Ekspor\r
          </button>\r
          <button class="btn btn-sm btn-izin-action px-3 d-flex align-items-center gap-1"\r
                  (click)="showPengaturanModal.set(true)">\r
            <i class="bx bx-cog"></i> Pengaturan\r
          </button>\r
          @if (activeStatus() !== 'DITOLAK') {\r
            <button class="btn btn-sm btn-izin-action px-3 d-flex align-items-center gap-1"\r
                    (click)="openTambah()">\r
              <i class="bx bx-plus"></i> Tambah\r
            </button>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- Search toolbar -->\r
      <div class="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">\r
        <div class="d-flex align-items-center gap-2">\r
          <span class="text-muted small">Tampilkan</span>\r
          <select class="form-select form-select-sm" style="width:68px"\r
                  [ngModel]="dtPageSize()" (ngModelChange)="dtSetPageSize(+$event)">\r
            <option [value]="5">5</option>\r
            <option [value]="10">10</option>\r
            <option [value]="25">25</option>\r
          </select>\r
          <span class="text-muted small">entri</span>\r
        </div>\r
        <div class="input-group input-group-sm" style="width:220px">\r
          <span class="input-group-text bg-white"><i class="bx bx-search text-muted"></i></span>\r
          <input type="text" class="form-control border-start-0" placeholder="Cari keperluan..."\r
                 [ngModel]="dtSearch()" (ngModelChange)="dtSearch.set($event); dtPage.set(1)" />\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 Loading \u2500\u2500 -->\r
      @if (loading()) {\r
        <div class="text-center py-5 text-muted">\r
          <span class="spinner-border text-primary mb-3" style="width:2.5rem;height:2.5rem"></span>\r
          <p class="mb-0 small fw-semibold">Memuat data izin jam...</p>\r
        </div>\r
      }\r
\r
      @if (!loading()) {\r
\r
        <!-- Empty state -->\r
        @if (dtRows().length === 0) {\r
          <div class="text-center py-5">\r
            <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"\r
                 style="width:64px;height:64px;background:#f3f4f6">\r
              <i class="bx bx-calendar-x text-muted" style="font-size:1.8rem"></i>\r
            </div>\r
            <div class="fw-semibold text-muted mb-1">Tidak ada data izin jam</div>\r
            <div class="text-muted small">Belum ada pengajuan izin jam untuk filter ini.</div>\r
          </div>\r
        }\r
\r
        <!-- Card Grid -->\r
        <div class="izin-grid mb-3">\r
          @for (item of dtRows(); track item.id) {\r
            <div class="jam-card">\r
\r
              <!-- Header card -->\r
              <div class="jam-card__header">\r
                <span class="jam-card__created">\r
                  <i class="bx bx-calendar"></i>\r
                  {{ formatTanggalCreated(item.createdAt) }}\r
                </span>\r
                <!-- Status pill -->\r
                @if (item.status === 'DISETUJUI' || item.status === 'TERPENUHI') {\r
                  <span class="status-pill status-pill--disetujui">\r
                    <i class="bx bx-check-circle"></i>\r
                    {{ item.status === 'DISETUJUI' ? 'Disetujui' : 'Terpenuhi' }}\r
                  </span>\r
                } @else if (item.status === 'DITOLAK') {\r
                  <span class="status-pill status-pill--ditolak">\r
                    <i class="bx bx-x-circle"></i> Ditolak\r
                  </span>\r
                } @else if (item.status === 'TIDAK_TERPENUHI') {\r
                  <span class="status-pill status-pill--tdk-terp">\r
                    <i class="bx bx-block"></i> Tdk Terpenuhi\r
                  </span>\r
                } @else {\r
                  <span class="status-pill status-pill--menunggu">\r
                    <i class="bx bx-time"></i> Menunggu\r
                  </span>\r
                }\r
              </div>\r
\r
              <!-- Body: waktu range -->\r
              <div class="jam-card__body">\r
                <div class="jam-range">\r
                  <div class="jam-range__block">\r
                    <div class="jam-range__date">\r
                      {{ formatTanggal(item.tanggalMulai).replace('\\n', ' ') }}\r
                    </div>\r
                    <div class="jam-range__time">{{ formatJam(item.jamMulai) }}</div>\r
                  </div>\r
\r
                  <div class="jam-range__arrow">\r
                    <div class="jam-range__duration">{{ formatDurasi(item.durasiMenit) }}</div>\r
                    <div class="jam-range__line"></div>\r
                    <i class="bx bx-right-arrow-alt text-primary" style="font-size:1.1rem"></i>\r
                  </div>\r
\r
                  <div class="jam-range__block">\r
                    <div class="jam-range__date">\r
                      {{ formatTanggal(item.tanggalSelesai).replace('\\n', ' ') }}\r
                    </div>\r
                    <div class="jam-range__time">{{ formatJam(item.jamSelesai) }}</div>\r
                  </div>\r
                </div>\r
\r
                <!-- Jam pengganti -->\r
                @if (item.jamPengganti) {\r
                  <div class="mb-2">\r
                    <span class="jam-pengganti">\r
                      <i class="bx bx-refresh"></i>\r
                      Jam Pengganti: {{ formatJam(item.jamPengganti) }}\r
                    </span>\r
                  </div>\r
                }\r
\r
                <!-- Tags -->\r
                @if (activeStatus() !== 'DITOLAK') {\r
                  <div class="d-flex flex-wrap gap-1 mb-1">\r
                    <span [class]="'jam-tag ' + (item.dapatMengganti ? 'jam-tag--yes' : 'jam-tag--no')">\r
                      <i class="bx" [class]="item.dapatMengganti ? 'bx-check' : 'bx-minus'"></i>\r
                      Dapat Mengganti\r
                    </span>\r
                    <span [class]="'jam-tag ' + (item.kenaPotong ? 'jam-tag--warn' : 'jam-tag--no')">\r
                      <i class="bx" [class]="item.kenaPotong ? 'bx-minus-circle' : 'bx-minus'"></i>\r
                      Potong Gaji\r
                    </span>\r
                    <span [class]="'jam-tag ' + (item.kenaDenda ? 'jam-tag--warn' : 'jam-tag--no')">\r
                      <i class="bx" [class]="item.kenaDenda ? 'bx-error' : 'bx-minus'"></i>\r
                      Denda\r
                    </span>\r
                  </div>\r
                }\r
\r
                <!-- Keperluan -->\r
                @if (item.keperluan) {\r
                  <div class="jam-keperluan">\r
                    <i class="bx bx-note text-muted me-1"></i>{{ item.keperluan }}\r
                  </div>\r
                }\r
\r
                <!-- Catatan tolak -->\r
                @if (item.status === 'DITOLAK' && item.catatanPenolakan) {\r
                  <div class="rounded-3 px-3 py-2 mt-2"\r
                       style="background:#fff5f5;border:1px solid #fecaca;font-size:.78rem;color:#b91c1c">\r
                    <i class="bx bx-info-circle me-1"></i>{{ item.catatanPenolakan }}\r
                    @if (item.updatedAt) {\r
                      <span class="ms-2 text-muted">\u2014 {{ formatTanggalCreated(item.updatedAt) }}</span>\r
                    }\r
                  </div>\r
                }\r
              </div>\r
\r
              <!-- Footer: aksi -->\r
              <div class="jam-card__footer">\r
                <button class="aksi-btn aksi-riwayat" title="Riwayat" (click)="openRiwayat(item)">\r
                  <i class="bx bx-history"></i>\r
                </button>\r
                @if (!isKaryawan()) {\r
                  <button class="aksi-btn aksi-edit" title="Edit" (click)="openEdit(item)">\r
                    <i class="bx bx-edit"></i>\r
                  </button>\r
                  @if (item.status !== 'DITOLAK') {\r
                    <button class="aksi-btn aksi-tolak" title="Tolak" (click)="openTolak(item)">\r
                      <i class="bx bx-x"></i>\r
                    </button>\r
                  }\r
                  @if (konfirmasiHapusId() === item.id) {\r
                    <div class="d-flex align-items-center gap-1 ms-1">\r
                      <span style="font-size:.72rem;color:#b91c1c">Hapus?</span>\r
                      <button class="btn btn-danger btn-sm py-0 px-2"\r
                              [disabled]="deletingId() === item.id"\r
                              (click)="hapus(item.id)">Ya</button>\r
                      <button class="btn btn-secondary btn-sm py-0 px-2"\r
                              (click)="konfirmasiHapusId.set(null)">Batal</button>\r
                    </div>\r
                  } @else {\r
                    <button class="aksi-btn aksi-hapus" title="Hapus"\r
                            (click)="konfirmasiHapusId.set(item.id)">\r
                      <i class="bx bx-trash"></i>\r
                    </button>\r
                  }\r
                }\r
              </div>\r
\r
            </div>\r
          }\r
        </div>\r
\r
        <!-- Footer pagination -->\r
        <div class="dt-footer d-flex align-items-center justify-content-between flex-wrap gap-2 px-1 pt-3 pb-1">\r
          <div class="text-muted small">\r
            Menampilkan {{ dtInfoStart() }}\u2013{{ dtInfoEnd() }} dari {{ dtTotal() }} entri\r
          </div>\r
          <div class="d-flex align-items-center gap-1">\r
            <button class="dt-pg-btn" [disabled]="dtPage() === 1" (click)="dtPage.set(1)">\r
              <i class="bx bx-chevrons-left"></i>\r
            </button>\r
            <button class="dt-pg-btn" [disabled]="dtPage() === 1" (click)="dtPage.set(dtPage() - 1)">\r
              <i class="bx bx-chevron-left"></i>\r
            </button>\r
            @for (p of dtPageNumbers(); track p) {\r
              <button class="dt-pg-btn" [class.dt-pg-btn--active]="p === dtPage()" (click)="dtPage.set(p)">\r
                {{ p }}\r
              </button>\r
            }\r
            <button class="dt-pg-btn" [disabled]="dtPage() >= dtTotalPages()" (click)="dtPage.set(dtPage() + 1)">\r
              <i class="bx bx-chevron-right"></i>\r
            </button>\r
            <button class="dt-pg-btn" [disabled]="dtPage() >= dtTotalPages()" (click)="dtPage.set(dtTotalPages())">\r
              <i class="bx bx-chevrons-right"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
      } <!-- end !loading -->\r
    </div>\r
\r
    } <!-- end tab jam -->\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
         TAB: IZIN HARI\r
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    @if (activeTab() === 'hari') {\r
\r
    <div class="px-4 pb-4">\r
\r
      <!-- Status / Quick-filter tabs -->\r
      <div class="d-flex gap-2 mb-4 flex-wrap align-items-center">\r
        <button class="status-btn" [class.status-btn--active]="hariFilter() === 'PENGAJUAN'"\r
                (click)="setHariFilter('PENGAJUAN')">\r
          <i class="bx bx-send me-1"></i>Pengajuan\r
        </button>\r
        <button class="status-btn" [class.status-btn--active]="hariFilter() === 'DISETUJUI'"\r
                (click)="setHariFilter('DISETUJUI')">\r
          <i class="bx bx-check-circle me-1"></i>Disetujui\r
        </button>\r
        <button class="status-btn" [class.status-btn--active]="hariFilter() === 'DITOLAK'"\r
                (click)="setHariFilter('DITOLAK')">\r
          <i class="bx bx-x-circle me-1"></i>Ditolak\r
        </button>\r
        <div class="ms-auto d-flex gap-2 flex-wrap">\r
          <button class="status-btn" [class.status-btn--active]="hariFilter() === 'HARI_INI'"\r
                  (click)="setHariFilter('HARI_INI')">Hari Ini</button>\r
          <button class="status-btn" [class.status-btn--active]="hariFilter() === 'BESOK'"\r
                  (click)="setHariFilter('BESOK')">Besok</button>\r
          <button class="status-btn" [class.status-btn--active]="hariFilter() === '7_HARI'"\r
                  (click)="setHariFilter('7_HARI')">7 Hari Kedepan</button>\r
        </div>\r
      </div>\r
\r
      <!-- Filter toolbar -->\r
      <div class="d-flex align-items-center flex-wrap gap-2 mb-4 p-3 rounded-3"\r
           style="background:#f8f9fb;border:1px solid #eef0f4">\r
        <i class="bx bx-filter text-muted"></i>\r
        <input type="date" class="form-control form-control-sm" style="width:148px"\r
               [ngModel]="hariFilterMulai()"\r
               (ngModelChange)="hariFilterMulai.set($event)" />\r
        <span class="text-muted">\u2014</span>\r
        <input type="date" class="form-control form-control-sm" style="width:148px"\r
               [ngModel]="hariFilterSelesai()"\r
               (ngModelChange)="hariFilterSelesai.set($event)" />\r
        <button class="btn btn-sm btn-primary px-3 d-flex align-items-center gap-1"\r
                (click)="hariPage.set(1); loadIzinHari()">\r
          <i class="bx bx-search"></i> Cari\r
        </button>\r
        @if (hariFilterMulai() || hariFilterSelesai()) {\r
          <button class="btn btn-sm btn-outline-secondary px-3"\r
                  (click)="hariFilterMulai.set(''); hariFilterSelesai.set(''); hariPage.set(1); loadIzinHari()">\r
            <i class="bx bx-x"></i> Reset\r
          </button>\r
        }\r
        <div class="ms-auto d-flex gap-2 flex-wrap">\r
          <button class="btn btn-sm btn-ekspor px-3 d-flex align-items-center gap-1"\r
                  (click)="eksporExcelHari()" [disabled]="hariEksporting()">\r
            @if (hariEksporting()) { <span class="spinner-border spinner-border-sm"></span> }\r
            @else { <i class="bx bx-spreadsheet"></i> }\r
            Ekspor\r
          </button>\r
          <button class="btn btn-sm btn-izin-action px-3 d-flex align-items-center gap-1"\r
                  (click)="openHariTambah()">\r
            <i class="bx bx-plus"></i> Tambah Izin Hari\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Loading -->\r
      @if (hariLoading()) {\r
        <div class="text-center py-5">\r
          <span class="spinner-border text-primary mb-3" style="width:2.5rem;height:2.5rem"></span>\r
          <div class="text-muted small fw-semibold">Memuat data izin hari...</div>\r
        </div>\r
      } @else if (listIzinHari().length === 0) {\r
        <div class="text-center py-5">\r
          <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"\r
               style="width:64px;height:64px;background:#f3f4f6">\r
            <i class="bx bx-calendar-x text-muted" style="font-size:1.8rem"></i>\r
          </div>\r
          <div class="fw-semibold text-muted mb-1">Belum ada data izin hari</div>\r
          <div class="text-muted small">Belum ada pengajuan izin hari untuk filter ini.</div>\r
        </div>\r
      } @else {\r
\r
        <!-- Cards -->\r
        @for (item of hariRows(); track item.id) {\r
          <div class="hari-card mb-3">\r
            <div class="row g-0">\r
\r
              <!-- Kolom kiri: Detail -->\r
              <div class="col-12 col-md-7 hari-card__left">\r
\r
                <!-- Header mini -->\r
                <div class="d-flex align-items-center justify-content-between mb-3">\r
                  <span class="created-at">\r
                    <i class="bx bx-calendar me-1"></i>\r
                    Diajukan: {{ formatTanggalCreated(item.createdAt) }}\r
                  </span>\r
                  @if (item.mengurangiGaji) {\r
                    <span class="hari-gaji-badge hari-gaji-badge--ya">\r
                      <i class="bx bx-minus-circle me-1"></i>Memotong Gaji\r
                    </span>\r
                  } @else {\r
                    <span class="hari-gaji-badge hari-gaji-badge--tidak">\r
                      Tidak Potong Gaji\r
                    </span>\r
                  }\r
                </div>\r
\r
                <!-- Tanggal izin sebagai chip -->\r
                <div class="hari-detail-row">\r
                  <div class="hari-detail-label">Tgl. Izin</div>\r
                  <div class="hari-detail-sep">:</div>\r
                  <div class="hari-detail-value">\r
                    <div class="d-flex flex-column gap-1">\r
                      @for (tgl of item.tanggalList; track tgl; let i = $index) {\r
                        <span class="hari-tgl-chip">\r
                          <i class="bx bx-calendar-event"></i>\r
                          {{ i + 1 }}. {{ formatTanggalHari(tgl) }}\r
                        </span>\r
                      }\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Keperluan -->\r
                <div class="hari-detail-row">\r
                  <div class="hari-detail-label">Keperluan</div>\r
                  <div class="hari-detail-sep">:</div>\r
                  <div class="hari-detail-value">\r
                    <div class="jam-keperluan" style="margin-top:0">\r
                      <i class="bx bx-note text-muted me-1"></i>{{ item.keperluan }}\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Lampiran -->\r
                <div class="hari-detail-row">\r
                  <div class="hari-detail-label">File Kelengkapan</div>\r
                  <div class="hari-detail-sep">:</div>\r
                  <div class="hari-detail-value">\r
                    @if (item.lampiranUrl) {\r
                      <a [href]="item.lampiranUrl" target="_blank" rel="noopener"\r
                         class="btn btn-sm btn-outline-primary py-0 px-2" style="font-size:.75rem">\r
                        <i class="bx bx-file me-1"></i>Lihat File\r
                      </a>\r
                    } @else {\r
                      <span class="text-muted small">\u2014</span>\r
                    }\r
                  </div>\r
                </div>\r
\r
                <!-- Catatan penolakan -->\r
                @if (item.catatanPenolakan) {\r
                  <div class="rounded-3 px-3 py-2 mt-1"\r
                       style="background:#fff5f5;border:1px solid #fecaca;font-size:.78rem;color:#b91c1c">\r
                    <i class="bx bx-info-circle me-1"></i>{{ item.catatanPenolakan }}\r
                  </div>\r
                }\r
\r
              </div>\r
\r
              <!-- Kolom kanan: Status + Aksi -->\r
              <div class="col-12 col-md-5 hari-card__right">\r
\r
                <!-- Status pill -->\r
                @if (item.status === 'DISETUJUI') {\r
                  <span class="status-pill status-pill--disetujui" style="font-size:.82rem;padding:8px 18px">\r
                    <i class="bx bx-check-circle"></i> Disetujui\r
                  </span>\r
                } @else if (item.status === 'DITOLAK') {\r
                  <span class="status-pill status-pill--ditolak" style="font-size:.82rem;padding:8px 18px">\r
                    <i class="bx bx-x-circle"></i> Ditolak\r
                  </span>\r
                } @else {\r
                  <span class="status-pill status-pill--menunggu" style="font-size:.82rem;padding:8px 18px">\r
                    <i class="bx bx-time"></i> Menunggu\r
                  </span>\r
                }\r
\r
                <!-- Dropdown Aksi -->\r
                <div class="dropdown">\r
                  <button class="btn btn-sm btn-izin-action dropdown-toggle px-4"\r
                          type="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                    <i class="bx bx-dots-horizontal-rounded me-1"></i>Aksi\r
                  </button>\r
                  <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0"\r
                      style="border-radius:12px;min-width:190px">\r
\r
                    @if (item.status === 'DISETUJUI') {\r
                      <!-- Status DISETUJUI: Edit, Cetak, Batal Permohonan, Riwayat -->\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                (click)="openHariEdit(item)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#e0f2fe">\r
                            <i class="bx bx-edit" style="color:#0369a1"></i>\r
                          </span>\r
                          Edit\r
                        </button>\r
                      </li>\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                (click)="cetakPermohonan(item)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#f3f4f6">\r
                            <i class="bx bx-printer" style="color:#374151"></i>\r
                          </span>\r
                          Cetak Permohonan\r
                        </button>\r
                      </li>\r
                      <li><hr class="dropdown-divider my-1"></li>\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                style="color:#b45309"\r
                                (click)="openBatalPermohonan(item)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#fef3c7">\r
                            <i class="bx bx-undo" style="color:#b45309"></i>\r
                          </span>\r
                          Batal Permohonan\r
                        </button>\r
                      </li>\r
                      <li><hr class="dropdown-divider my-1"></li>\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                (click)="openRiwayatHari(item)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#f3f4f6">\r
                            <i class="bx bx-history" style="color:#6b7280"></i>\r
                          </span>\r
                          Riwayat Perubahan\r
                        </button>\r
                      </li>\r
\r
                    } @else {\r
                      <!-- Status selain DISETUJUI: aksi penuh -->\r
                      @if (!isKaryawan()) {\r
                        <li>\r
                          <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                  (click)="terimaHari(item)">\r
                            <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                  style="width:24px;height:24px;background:#dcfce7">\r
                              <i class="bx bx-check" style="color:#166534"></i>\r
                            </span>\r
                            Terima\r
                          </button>\r
                        </li>\r
                        <li>\r
                          <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                  (click)="openTolakHari(item)">\r
                            <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                  style="width:24px;height:24px;background:#fee2e2">\r
                              <i class="bx bx-x" style="color:#b91c1c"></i>\r
                            </span>\r
                            Tolak\r
                          </button>\r
                        </li>\r
                        <li><hr class="dropdown-divider my-1"></li>\r
                      }\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                (click)="openHariEdit(item)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#e0f2fe">\r
                            <i class="bx bx-edit" style="color:#0369a1"></i>\r
                          </span>\r
                          Edit\r
                        </button>\r
                      </li>\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2"\r
                                (click)="cetakPermohonan(item)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#f3f4f6">\r
                            <i class="bx bx-printer" style="color:#374151"></i>\r
                          </span>\r
                          Cetak Permohonan\r
                        </button>\r
                      </li>\r
                      <li><hr class="dropdown-divider my-1"></li>\r
                      <li>\r
                        <button class="dropdown-item d-flex align-items-center gap-2 py-2 text-danger"\r
                                (click)="hariKonfirmasiHapusId.set(item.id)">\r
                          <span class="d-flex align-items-center justify-content-center rounded-2"\r
                                style="width:24px;height:24px;background:#fee2e2">\r
                            <i class="bx bx-trash" style="color:#b91c1c"></i>\r
                          </span>\r
                          Hapus\r
                        </button>\r
                      </li>\r
                    }\r
\r
                  </ul>\r
                </div>\r
\r
              </div>\r
            </div>\r
          </div>\r
        }\r
\r
        <!-- Footer pagination -->\r
        <div class="dt-footer d-flex align-items-center justify-content-between flex-wrap gap-2 px-1 pt-3 pb-1">\r
          <div class="text-muted small">\r
            Menampilkan {{ hariInfoStart() }}\u2013{{ hariInfoEnd() }} dari {{ hariTotal() }} total data\r
          </div>\r
          <div class="d-flex gap-1">\r
            <button class="dt-pg-btn" [disabled]="hariPage() <= 1" (click)="hariPage.set(1)">\r
              <i class="bx bx-chevrons-left"></i>\r
            </button>\r
            <button class="dt-pg-btn" [disabled]="hariPage() <= 1" (click)="hariPage.set(hariPage() - 1)">\r
              <i class="bx bx-chevron-left"></i>\r
            </button>\r
            @for (p of hariPageNumbers(); track p) {\r
              <button class="dt-pg-btn" [class.dt-pg-btn--active]="p === hariPage()" (click)="hariPage.set(p)">\r
                {{ p }}\r
              </button>\r
            }\r
            <button class="dt-pg-btn" [disabled]="hariPage() >= hariTotalPages()" (click)="hariPage.set(hariPage() + 1)">\r
              <i class="bx bx-chevron-right"></i>\r
            </button>\r
            <button class="dt-pg-btn" [disabled]="hariPage() >= hariTotalPages()" (click)="hariPage.set(hariTotalPages())">\r
              <i class="bx bx-chevrons-right"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
      } <!-- end !loading -->\r
    </div>\r
\r
    } <!-- end tab hari -->\r
\r
  <!-- \u2550\u2550\u2550 Modal Tambah/Edit Izin Hari \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showHariModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055"\r
         (click)="closeHariModal()">\r
      <div class="modal-dialog modal-dialog-centered modal-lg"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-calendar-plus me-2 text-primary"></i>\r
              {{ hariEditId() ? 'Edit Izin Hari' : 'Tambah Izin Hari' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeHariModal()"></button>\r
          </div>\r
          <div class="modal-body pt-3">\r
            @if (hariError()) {\r
              <div class="alert alert-danger py-2 small mb-3">{{ hariError() }}</div>\r
            }\r
            <div class="row g-3">\r
\r
              <!-- Tgl. Izin -->\r
              <div class="col-12">\r
                <label class="form-label fw-semibold small">\r
                  Tgl. Izin <span class="text-danger">*</span>\r
                </label>\r
                <input type="date" class="form-control form-control-sm"\r
                       [ngModel]="hariForm().tanggalList.length > 0 ? hariForm().tanggalList[0] : ''"\r
                       (ngModelChange)="hariForm.update(f => ({...f, tanggalList: $event ? [$event] : []}))" />\r
              </div>\r
\r
              <!-- Keperluan -->\r
              <div class="col-12">\r
                <label class="form-label fw-semibold small">\r
                  Keperluan <span class="text-danger">*</span>\r
                </label>\r
                <textarea class="form-control form-control-sm" rows="3"\r
                          placeholder="Tulis keperluan izin..."\r
                          [ngModel]="hariForm().keperluan"\r
                          (ngModelChange)="hariForm.update(f => ({...f, keperluan: $event}))">\r
                </textarea>\r
              </div>\r
\r
              <!-- Mengurangi Gaji -->\r
              <div class="col-12">\r
                <div class="d-flex align-items-center justify-content-between\r
                            rounded-3 px-3 py-2 border">\r
                  <div>\r
                    <div class="fw-semibold small">Izin ini akan mengurangi gaji</div>\r
                    <div class="text-muted" style="font-size:.75rem">\r
                      Aktifkan jika izin ini diperhitungkan dalam pemotongan gaji\r
                    </div>\r
                  </div>\r
                  <div class="form-check form-switch mb-0">\r
                    <input class="form-check-input" type="checkbox" role="switch"\r
                           style="width:2.5em;height:1.3em"\r
                           [ngModel]="hariForm().mengurangiGaji"\r
                           (ngModelChange)="hariForm.update(f => ({...f, mengurangiGaji: $event}))" />\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Lampiran -->\r
              <div class="col-12">\r
                <label class="form-label fw-semibold small">Lampiran</label>\r
                <div class="d-flex align-items-center gap-2">\r
                  <label class="btn btn-sm btn-outline-secondary mb-0" style="cursor:pointer">\r
                    <i class="bx bx-upload me-1"></i>Pilih File\r
                    <input type="file" class="d-none" accept=".pdf,.jpg,.jpeg,.png"\r
                           (change)="onHariLampiranChange($event)" />\r
                  </label>\r
                  @if (hariLampiranNama()) {\r
                    <span class="small text-muted text-truncate" style="max-width:200px">\r
                      {{ hariLampiranNama() }}\r
                    </span>\r
                  } @else {\r
                    <span class="small text-muted">PDF / JPG / PNG</span>\r
                  }\r
                </div>\r
              </div>\r
\r
            </div>\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button type="button" class="btn btn-secondary" (click)="closeHariModal()">Batal</button>\r
            <button type="button" class="btn btn-primary px-4"\r
                    (click)="simpanHari()" [disabled]="hariSaving()">\r
              @if (hariSaving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Tolak Izin Hari \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (hariShowTolakModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1056"\r
         (click)="hariShowTolakModal.set(false)">\r
      <div class="modal-dialog modal-dialog-centered"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold text-danger">\r
              <i class="bx bx-x-circle me-2"></i>Tolak Izin Hari\r
            </h5>\r
            <button type="button" class="btn-close" (click)="hariShowTolakModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body pt-3">\r
            <label class="form-label fw-semibold small">Catatan Penolakan</label>\r
            <textarea class="form-control form-control-sm" rows="3"\r
                      placeholder="Tuliskan alasan penolakan (opsional)..."\r
                      [ngModel]="hariTolakCatatan()"\r
                      (ngModelChange)="hariTolakCatatan.set($event)">\r
            </textarea>\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button type="button" class="btn btn-secondary"\r
                    (click)="hariShowTolakModal.set(false)">Batal</button>\r
            <button type="button" class="btn btn-danger px-4"\r
                    (click)="konfirmasiTolakHari()" [disabled]="hariSavingTolak()">\r
              @if (hariSavingTolak()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Tolak Izin\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550 Modal Tambah Izin Jam \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showTambahModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055"\r
         (click)="closeTambah()">\r
      <div class="modal-dialog modal-dialog-centered"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-plus-circle me-2 text-primary"></i>\r
              {{ editId() ? 'Edit Izin Jam' : 'Tambah Izin Jam' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeTambah()"></button>\r
          </div>\r
          <div class="modal-body pt-3">\r
            @if (errorTambah()) {\r
              <div class="alert alert-danger py-2 small mb-3">{{ errorTambah() }}</div>\r
            }\r
\r
            <!-- \u2500\u2500 Form TAMBAH \u2500\u2500 -->\r
            @if (!editId()) {\r
              <div class="row g-3">\r
                <!-- Waktu Mulai -->\r
                <div class="col-12">\r
                  <label class="form-label fw-semibold small">\r
                    Waktu Mulai <span class="text-danger">*</span>\r
                  </label>\r
                  <div class="d-flex gap-2">\r
                    <input type="date" class="form-control form-control-sm"\r
                           [ngModel]="formTambah().tanggalMulai"\r
                           (ngModelChange)="formTambah.update(f => ({...f, tanggalMulai: $event}))" />\r
                    <input type="time" class="form-control form-control-sm"\r
                           [ngModel]="formTambah().jamMulai"\r
                           (ngModelChange)="formTambah.update(f => ({...f, jamMulai: $event}))" />\r
                  </div>\r
                </div>\r
                <!-- Waktu Selesai -->\r
                <div class="col-12">\r
                  <label class="form-label fw-semibold small">\r
                    Waktu Selesai <span class="text-danger">*</span>\r
                  </label>\r
                  <div class="d-flex gap-2">\r
                    <input type="date" class="form-control form-control-sm"\r
                           [ngModel]="formTambah().tanggalSelesai"\r
                           (ngModelChange)="formTambah.update(f => ({...f, tanggalSelesai: $event}))" />\r
                    <input type="time" class="form-control form-control-sm"\r
                           [ngModel]="formTambah().jamSelesai"\r
                           (ngModelChange)="formTambah.update(f => ({...f, jamSelesai: $event}))" />\r
                  </div>\r
                </div>\r
                <!-- Keperluan -->\r
                <div class="col-12">\r
                  <label class="form-label fw-semibold small">\r
                    Keperluan <span class="text-danger">*</span>\r
                  </label>\r
                  <textarea class="form-control form-control-sm" rows="3"\r
                            [ngModel]="formTambah().keperluan"\r
                            (ngModelChange)="formTambah.update(f => ({...f, keperluan: $event}))"\r
                            placeholder="Tuliskan keperluan izin..."></textarea>\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- \u2500\u2500 Form EDIT \u2500\u2500 -->\r
            @if (editId()) {\r
              <div class="d-flex flex-column gap-4">\r
\r
                <!-- Dapat Mengganti -->\r
                <div class="radio-group">\r
                  <div class="radio-group-label">\r
                    Karyawan dapat mengganti izin jam?\r
                  </div>\r
                  <div class="d-flex gap-2 mt-2">\r
                    <label class="radio-opt" [class.radio-opt--active]="formTambah().dapatMengganti === true">\r
                      <input type="radio" name="dapatMengganti" [value]="true"\r
                             [checked]="formTambah().dapatMengganti === true"\r
                             (change)="formTambah.update(f => ({...f, dapatMengganti: true}))" />\r
                      <span>Ya</span>\r
                    </label>\r
                    <label class="radio-opt" [class.radio-opt--active]="formTambah().dapatMengganti === false">\r
                      <input type="radio" name="dapatMengganti" [value]="false"\r
                             [checked]="formTambah().dapatMengganti === false"\r
                             (change)="formTambah.update(f => ({...f, dapatMengganti: false}))" />\r
                      <span>Tidak</span>\r
                    </label>\r
                  </div>\r
                </div>\r
\r
                <!-- Kenakan Potongan -->\r
                <div class="radio-group">\r
                  <div class="radio-group-label">\r
                    Kenakan potongan izin jam pada rincian gaji\r
                  </div>\r
                  <div class="d-flex gap-2 mt-2">\r
                    <label class="radio-opt" [class.radio-opt--active]="formTambah().kenaPotong === true">\r
                      <input type="radio" name="kenaPotong" [value]="true"\r
                             [checked]="formTambah().kenaPotong === true"\r
                             (change)="formTambah.update(f => ({...f, kenaPotong: true}))" />\r
                      <span>Ya</span>\r
                    </label>\r
                    <label class="radio-opt" [class.radio-opt--active]="formTambah().kenaPotong === false">\r
                      <input type="radio" name="kenaPotong" [value]="false"\r
                             [checked]="formTambah().kenaPotong === false"\r
                             (change)="formTambah.update(f => ({...f, kenaPotong: false}))" />\r
                      <span>Tidak</span>\r
                    </label>\r
                  </div>\r
                </div>\r
\r
                <!-- Kenakan Denda -->\r
                <div class="radio-group">\r
                  <div class="radio-group-label">\r
                    Kenakan Denda Keterlambatan jika presensi masuk lebih dari selesai izin jam\r
                  </div>\r
                  <div class="d-flex gap-2 mt-2">\r
                    <label class="radio-opt" [class.radio-opt--active]="formTambah().kenaDenda === true">\r
                      <input type="radio" name="kenaDenda" [value]="true"\r
                             [checked]="formTambah().kenaDenda === true"\r
                             (change)="formTambah.update(f => ({...f, kenaDenda: true}))" />\r
                      <span>Ya</span>\r
                    </label>\r
                    <label class="radio-opt" [class.radio-opt--active]="formTambah().kenaDenda === false">\r
                      <input type="radio" name="kenaDenda" [value]="false"\r
                             [checked]="formTambah().kenaDenda === false"\r
                             (change)="formTambah.update(f => ({...f, kenaDenda: false}))" />\r
                      <span>Tidak</span>\r
                    </label>\r
                  </div>\r
                </div>\r
\r
              </div>\r
            }\r
\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="closeTambah()" [disabled]="savingTambah()">Batal</button>\r
            <button class="btn btn-izin-action btn-sm px-4"\r
                    (click)="simpanTambah()" [disabled]="savingTambah()">\r
              @if (savingTambah()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              } @else {\r
                <i class="bx bx-save me-1"></i>\r
              }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Pengaturan Izin Jam \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showPengaturanModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055"\r
         (click)="showPengaturanModal.set(false)">\r
      <div class="modal-dialog modal-dialog-centered"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-cog me-2 text-primary"></i>Pengaturan Izin Jam\r
            </h5>\r
            <button type="button" class="btn-close" (click)="showPengaturanModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body pt-3">\r
            <p class="text-muted small">Pengaturan izin jam untuk karyawan ini belum tersedia. Hubungi administrator.</p>\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="showPengaturanModal.set(false)">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Konfirmasi Hapus \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (konfirmasiHapusId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1060">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger fw-bold">\r
              <i class="bx bx-trash me-2"></i>Hapus Izin?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted" style="font-size:.9rem">\r
            Data izin ini akan dihapus permanen dan tidak dapat dibatalkan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="konfirmasiHapusId.set(null)"\r
                    [disabled]="deletingId() !== null">Batal</button>\r
            <button class="btn btn-danger btn-sm px-4"\r
                    (click)="hapus(konfirmasiHapusId()!)"\r
                    [disabled]="deletingId() !== null">\r
              @if (deletingId() !== null) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              } @else {\r
                <i class="bx bx-trash me-1"></i>\r
              }\r
              Ya, Hapus\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Konfirmasi Hapus Izin Hari \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (hariKonfirmasiHapusId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1065"\r
         (click)="hariKonfirmasiHapusId.set(null)">\r
      <div class="modal-dialog modal-dialog-centered"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger fw-bold">\r
              <i class="bx bx-trash me-2"></i>Hapus Izin Hari?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted" style="font-size:.9rem">\r
            Data izin hari ini akan dihapus permanen dan tidak dapat dikembalikan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="hariKonfirmasiHapusId.set(null)"\r
                    [disabled]="hariDeletingId() !== null">\r
              Batal\r
            </button>\r
            <button class="btn btn-danger btn-sm px-4"\r
                    (click)="hapusHari(hariKonfirmasiHapusId()!)"\r
                    [disabled]="hariDeletingId() !== null">\r
              @if (hariDeletingId() !== null) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              } @else {\r
                <i class="bx bx-trash me-1"></i>\r
              }\r
              Ya, Hapus\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Konfirmasi Tolak \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showTolakModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1065"\r
         (click)="!savingTolak() && showTolakModal.set(false)">\r
      <div class="modal-dialog modal-dialog-centered"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-0 pb-0 pt-4 px-4">\r
            <div class="d-flex align-items-center gap-3">\r
              <div style="width:42px;height:42px;border-radius:50%;background:#fee2e2;\r
                          display:flex;align-items:center;justify-content:center;flex-shrink:0">\r
                <i class="bx bx-x-circle" style="font-size:1.3rem;color:#b91c1c"></i>\r
              </div>\r
              <div>\r
                <h5 class="modal-title fw-bold mb-0" style="font-size:1rem">Tolak Izin Jam</h5>\r
                @if (tolakItem()) {\r
                  <div class="text-muted small mt-1">\r
                    {{ formatTanggal(tolakItem()!.tanggalMulai).replace('\\n',' ') }}\r
                    {{ formatJam(tolakItem()!.jamMulai) }} \u2014 {{ formatJam(tolakItem()!.jamSelesai) }}\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
            <button type="button" class="btn-close ms-auto"\r
                    (click)="showTolakModal.set(false)"\r
                    [disabled]="savingTolak()"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body px-4 pt-3 pb-2">\r
            <p class="text-muted small mb-3">\r
              Apakah Anda yakin ingin menolak izin jam ini?\r
              Status akan berubah menjadi <strong class="text-danger">Ditolak</strong>.\r
            </p>\r
            <label class="form-label fw-semibold small">\r
              Catatan Penolakan\r
              <span class="text-muted fw-normal">(opsional)</span>\r
            </label>\r
            <textarea class="form-control form-control-sm" rows="3"\r
                      placeholder="Tuliskan alasan penolakan..."\r
                      [ngModel]="tolakCatatan()"\r
                      (ngModelChange)="tolakCatatan.set($event)"\r
                      [disabled]="savingTolak()"></textarea>\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-0 px-4 pb-4 pt-2 gap-2 justify-content-end">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="showTolakModal.set(false)"\r
                    [disabled]="savingTolak()">\r
              Batal\r
            </button>\r
            <button class="btn btn-danger btn-sm px-4"\r
                    (click)="konfirmasiTolak()"\r
                    [disabled]="savingTolak()">\r
              @if (savingTolak()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              } @else {\r
                <i class="bx bx-x-circle me-1"></i>\r
              }\r
              Ya, Tolak\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Riwayat Perubahan \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showRiwayatModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.52);z-index:1070"\r
         (click)="showRiwayatModal.set(false)">\r
      <div class="modal-dialog modal-dialog-centered modal-lg"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg" style="border-radius:14px;overflow:hidden">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-bottom px-4 py-3">\r
            <h5 class="modal-title fw-bold mb-0">\r
              <i class="bx bx-history me-2 text-primary"></i>Riwayat Perubahan\r
            </h5>\r
            <button type="button" class="btn-close" (click)="showRiwayatModal.set(false)"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body p-0" style="max-height:65vh;overflow-y:auto">\r
\r
            @if (riwayatLoading()) {\r
              <div class="text-center py-5 text-muted">\r
                <span class="spinner-border text-primary mb-3"></span>\r
                <p class="mb-0 small">Memuat riwayat...</p>\r
              </div>\r
            }\r
\r
            @if (!riwayatLoading() && riwayatError()) {\r
              <div class="alert alert-danger m-3">{{ riwayatError() }}</div>\r
            }\r
\r
            @if (!riwayatLoading() && !riwayatError()) {\r
\r
              <!-- Tabel header -->\r
              <table class="table mb-0" style="font-size:.84rem;table-layout:fixed">\r
                <thead>\r
                  <tr style="background:#f9fafb">\r
                    <th style="width:260px;padding:12px 20px;font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;font-weight:700;border-bottom:1px solid #e5e7eb">\r
                      User\r
                    </th>\r
                    <th style="padding:12px 20px;font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;font-weight:700;border-bottom:1px solid #e5e7eb">\r
                      Aktivitas\r
                    </th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @if (riwayatRows().length === 0) {\r
                    <tr>\r
                      <td colspan="2" class="text-center py-5 text-muted">\r
                        <i class="bx bx-history fs-3 d-block mb-2"></i>\r
                        Belum ada riwayat perubahan.\r
                      </td>\r
                    </tr>\r
                  }\r
                  @for (r of riwayatRows(); track r.id) {\r
                    <tr style="border-bottom:1px solid #f1f3f5;vertical-align:top">\r
\r
                      <!-- Kolom User -->\r
                      <td style="padding:16px 20px;width:260px">\r
                        <div class="d-flex align-items-start gap-3">\r
                          <div class="rw-avatar flex-shrink-0">\r
                            {{ (r.changedBy || '?').charAt(0).toUpperCase() }}\r
                          </div>\r
                          <div>\r
                            <div class="fw-semibold" style="font-size:.88rem">\r
                              {{ r.changedBy || 'Sistem' }}\r
                            </div>\r
                            <div class="text-muted small mt-1">\r
                              {{ formatRiwayatAt(r.changedAt) }}\r
                            </div>\r
                            <span [class]="tipeClass(r.tipe)" class="mt-2 d-inline-block">\r
                              {{ tipeLabel(r.tipe) }}\r
                            </span>\r
                          </div>\r
                        </div>\r
                      </td>\r
\r
                      <!-- Kolom Aktivitas -->\r
                      <td style="padding:16px 20px">\r
                        <!-- Badge judul -->\r
                        <div class="mb-2">\r
                          <span class="rw-judul-badge">\r
                            Permohonan Izin Jam\r
                            <span class="rw-id-badge">ID: {{ r.izinJamId }}</span>\r
                          </span>\r
                        </div>\r
\r
                        <!-- List perubahan -->\r
                        @for (akt of r.aktivitas; track $index) {\r
                          <div class="rw-item">\r
                            @if (r.tipe === 'DIBUAT') {\r
                              <span class="rw-label fw-semibold">{{ akt.label }}:</span>\r
                              <span class="rw-val ms-1">{{ akt.baru || '\u2014' }}</span>\r
                            } @else {\r
                              <span>Perubahan <span class="fw-semibold">{{ akt.label }}:</span></span>\r
                              <span class="rw-val-lama ms-1">{{ akt.lama || '\u2014' }}</span>\r
                              <i class="bx bx-right-arrow-alt mx-1 text-muted" style="font-size:.9rem;vertical-align:middle"></i>\r
                              <span class="rw-val-baru">{{ akt.baru || '\u2014' }}</span>\r
                            }\r
                          </div>\r
                        }\r
                      </td>\r
\r
                    </tr>\r
                  }\r
                </tbody>\r
              </table>\r
            }\r
          </div>\r
\r
          <!-- Footer: pagination -->\r
          @if (!riwayatLoading() && riwayatTotal() > 0) {\r
            <div class="modal-footer border-top d-flex align-items-center justify-content-between px-4 py-2">\r
              <div class="text-muted small">\r
                {{ riwayatTotal() }} entri\r
              </div>\r
              <div class="d-flex align-items-center gap-1">\r
                <button class="dt-pg-btn" [disabled]="riwayatPage() === 1"\r
                        (click)="riwayatPage.set(riwayatPage() - 1)">\r
                  <i class="bx bx-chevron-left"></i>\r
                </button>\r
                @for (p of [].constructor(riwayatTotalPage()); track $index) {\r
                  <button class="dt-pg-btn"\r
                          [class.dt-pg-btn--active]="riwayatPage() === $index + 1"\r
                          (click)="riwayatPage.set($index + 1)">\r
                    {{ $index + 1 }}\r
                  </button>\r
                }\r
                <button class="dt-pg-btn" [disabled]="riwayatPage() >= riwayatTotalPage()"\r
                        (click)="riwayatPage.set(riwayatPage() + 1)">\r
                  <i class="bx bx-chevron-right"></i>\r
                </button>\r
              </div>\r
            </div>\r
          }\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Riwayat Perubahan Izin Hari \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (hariShowRiwayatModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.52);z-index:1080"\r
         (click)="hariShowRiwayatModal.set(false)">\r
      <div class="modal-dialog modal-dialog-centered modal-lg"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg" style="border-radius:14px;overflow:hidden">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-bottom px-4 py-3">\r
            <h5 class="modal-title fw-bold mb-0">\r
              <i class="bx bx-history me-2 text-primary"></i>Riwayat Perubahan\r
            </h5>\r
            <button type="button" class="btn-close" (click)="hariShowRiwayatModal.set(false)"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body p-0" style="max-height:65vh;overflow-y:auto">\r
\r
            @if (hariRiwayatLoading()) {\r
              <div class="text-center py-5 text-muted">\r
                <span class="spinner-border text-primary mb-3"></span>\r
                <p class="mb-0 small">Memuat riwayat...</p>\r
              </div>\r
            }\r
\r
            @if (!hariRiwayatLoading() && hariRiwayatError()) {\r
              <div class="alert alert-danger m-3">{{ hariRiwayatError() }}</div>\r
            }\r
\r
            @if (!hariRiwayatLoading() && !hariRiwayatError()) {\r
\r
              <!-- Tabel header -->\r
              <table class="table mb-0" style="font-size:.84rem;table-layout:fixed">\r
                <thead>\r
                  <tr style="background:#f9fafb">\r
                    <th style="width:260px;padding:12px 20px;font-size:.72rem;text-transform:uppercase;\r
                               letter-spacing:.05em;color:#6b7280;font-weight:700;\r
                               border-bottom:1px solid #e5e7eb">\r
                      User\r
                    </th>\r
                    <th style="padding:12px 20px;font-size:.72rem;text-transform:uppercase;\r
                               letter-spacing:.05em;color:#6b7280;font-weight:700;\r
                               border-bottom:1px solid #e5e7eb">\r
                      Aktivitas\r
                    </th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @if (hariRiwayatRows().length === 0) {\r
                    <tr>\r
                      <td colspan="2" class="text-center py-5 text-muted">\r
                        <i class="bx bx-history fs-3 d-block mb-2"></i>\r
                        Belum ada riwayat perubahan.\r
                      </td>\r
                    </tr>\r
                  }\r
                  @for (r of hariRiwayatRows(); track r.id) {\r
                    <tr style="border-bottom:1px solid #f1f3f5;vertical-align:top">\r
\r
                      <!-- Kolom User -->\r
                      <td style="padding:16px 20px;width:260px">\r
                        <div class="d-flex align-items-start gap-3">\r
                          <!-- Avatar hijau bergaya seperti gambar -->\r
                          <div style="width:42px;height:42px;border-radius:50%;\r
                                      background:#22c55e;color:#fff;font-weight:700;\r
                                      font-size:1rem;display:flex;align-items:center;\r
                                      justify-content:center;flex-shrink:0">\r
                            {{ (r.changedBy || '?').charAt(0).toUpperCase() }}\r
                          </div>\r
                          <div>\r
                            <div class="fw-bold" style="font-size:.88rem;color:#111827">\r
                              {{ r.changedBy || 'Sistem' }}\r
                            </div>\r
                            <div class="text-muted small mt-1">\r
                              {{ formatRiwayatHariAt(r.changedAt) }}\r
                            </div>\r
                            <!-- Badge tipe -->\r
                            <span class="mt-2 d-inline-block"\r
                                  [class]="hariTipeClass(r.tipe)">\r
                              {{ hariTipeLabel(r.tipe) }}\r
                            </span>\r
                          </div>\r
                        </div>\r
                      </td>\r
\r
                      <!-- Kolom Aktivitas -->\r
                      <td style="padding:16px 20px">\r
                        <!-- Badge judul oranye bergaya seperti gambar -->\r
                        <div class="mb-2">\r
                          <span style="display:inline-flex;align-items:center;gap:6px;\r
                                       background:#f97316;color:#fff;font-size:.78rem;\r
                                       font-weight:700;padding:4px 12px;border-radius:9999px">\r
                            <i class="bx bx-calendar"></i>\r
                            Izin\r
                            <span style="background:rgba(255,255,255,.25);border-radius:9999px;\r
                                         padding:1px 8px;font-size:.72rem;font-weight:700">\r
                              ID: {{ r.izinHariId }}\r
                            </span>\r
                          </span>\r
                        </div>\r
\r
                        <!-- List perubahan -->\r
                        @for (akt of r.aktivitas; track $index) {\r
                          <div style="font-size:.83rem;color:#374151;line-height:1.8">\r
                            @if (r.tipe === 'DIBUAT') {\r
                              <span class="fw-semibold" style="color:#111827">{{ akt.label }}:</span>\r
                              <span style="text-decoration:underline;margin-left:4px">{{ akt.baru || '\u2014' }}</span>\r
                            } @else {\r
                              <span>Perubahan <span class="fw-semibold" style="color:#111827">{{ akt.label }}:</span></span>\r
                              <span style="color:#6b7280;text-decoration:underline;margin-left:4px">{{ akt.lama || '\u2014' }}</span>\r
                              <i class="bx bx-right-arrow-alt mx-1 text-muted"\r
                                 style="font-size:.9rem;vertical-align:middle"></i>\r
                              <span style="text-decoration:underline;font-weight:500">{{ akt.baru || '\u2014' }}</span>\r
                            }\r
                          </div>\r
                        }\r
                      </td>\r
\r
                    </tr>\r
                  }\r
                </tbody>\r
              </table>\r
            }\r
          </div>\r
\r
          <!-- Footer pagination \u2014 tombol panah ungu seperti gambar -->\r
          @if (!hariRiwayatLoading() && hariRiwayatTotal() > 0) {\r
            <div class="modal-footer border-top d-flex align-items-center justify-content-between px-4 py-2">\r
              <div class="text-muted small">{{ hariRiwayatTotal() }} entri</div>\r
              <div class="d-flex align-items-center gap-1">\r
                <button class="dt-pg-btn" [disabled]="hariRiwayatPage() === 1"\r
                        (click)="hariRiwayatPage.set(hariRiwayatPage() - 1)">\r
                  <i class="bx bx-chevron-left"></i>\r
                </button>\r
                @for (p of [].constructor(hariRiwayatTotalPage()); track $index) {\r
                  <button class="dt-pg-btn"\r
                          [class.dt-pg-btn--active]="hariRiwayatPage() === $index + 1"\r
                          (click)="hariRiwayatPage.set($index + 1)">\r
                    {{ $index + 1 }}\r
                  </button>\r
                }\r
                <button class="dt-pg-btn" [disabled]="hariRiwayatPage() >= hariRiwayatTotalPage()"\r
                        (click)="hariRiwayatPage.set(hariRiwayatPage() + 1)">\r
                  <i class="bx bx-chevron-right"></i>\r
                </button>\r
              </div>\r
            </div>\r
          }\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Batal Permohonan Izin Hari \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showBatalModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1090"\r
         (click)="showBatalModal.set(false)">\r
      <div class="modal-dialog modal-dialog-centered"\r
           style="max-width:380px"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg" style="border-radius:14px;overflow:hidden">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-bottom px-4 py-3">\r
            <h5 class="modal-title fw-bold mb-0" style="color:#1e1b4b">\r
              Batalkan Izin\r
            </h5>\r
            <button type="button" class="btn-close"\r
                    (click)="showBatalModal.set(false)"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body px-4 py-3">\r
\r
            <!-- Info box ungu -->\r
            <div class="rounded-3 px-3 py-2 mb-3"\r
                 style="background:#ede9fe;color:#4338ca;font-size:.88rem;font-weight:600;line-height:1.5">\r
              Centang tanggal izin yang akan dibatalkan:\r
            </div>\r
\r
            <!-- Checkbox list tanggal -->\r
            @if (batalItem()) {\r
              @for (tgl of batalItem()!.tanggalList; track tgl) {\r
                <label class="d-flex align-items-center gap-3 py-2"\r
                       style="border-bottom:1px solid #f3f4f6;cursor:pointer;\r
                              font-size:.9rem;color:#374151">\r
                  <input type="checkbox"\r
                         style="width:16px;height:16px;accent-color:#6366f1;\r
                                cursor:pointer;flex-shrink:0"\r
                         [checked]="isBatalDateSelected(tgl)"\r
                         (change)="toggleBatalDate(tgl)" />\r
                  {{ formatTanggalHari(tgl) }}\r
                </label>\r
              }\r
            }\r
\r
            @if (batalSelectedDates().length === 0 && hariBatalSaving()) {\r
              <div class="text-danger small mt-2">\r
                Pilih minimal satu tanggal.\r
              </div>\r
            }\r
\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-0 px-4 pb-4 pt-2 justify-content-start gap-2">\r
            <button type="button" class="btn btn-primary px-4 fw-semibold"\r
                    style="background:#6366f1;border-color:#6366f1;border-radius:10px"\r
                    [disabled]="hariBatalSaving() || batalSelectedDates().length === 0"\r
                    (click)="batalPermohonanHari()">\r
              @if (hariBatalSaving()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              }\r
              Proses\r
            </button>\r
            <button type="button" class="btn btn-outline-secondary fw-semibold px-4"\r
                    style="border-radius:10px"\r
                    (click)="showBatalModal.set(false)">\r
              Nanti dulu\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/karyawan/karyawan-izin/karyawan-izin.component.scss */\n.info-bar {\n  border-radius: 16px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f7ff 0%,\n      #eef2ff 100%) !important;\n  border: 1px solid #e0e7ff !important;\n}\n.izin-tab-btn {\n  padding: 8px 28px;\n  border-radius: 999px;\n  border: 2px solid transparent;\n  background: transparent;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6366f1;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.izin-tab-btn:hover {\n  background: #ede9fe;\n}\n.izin-tab-btn--active {\n  background: #6366f1;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.izin-tab-btn--active:hover {\n  background: #4f46e5;\n}\n.status-btn {\n  padding: 6px 18px;\n  border-radius: 999px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.status-btn:hover {\n  background: #f5f3ff;\n  border-color: #a5b4fc;\n  color: #6366f1;\n}\n.status-btn--active {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);\n}\n.status-btn--active:hover {\n  background: #4f46e5;\n  border-color: #4f46e5;\n}\n.btn-izin-action,\n.btn-ekspor {\n  background: #6366f1;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: all 0.15s;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);\n}\n.btn-izin-action:hover,\n.btn-ekspor:hover {\n  background: #4f46e5;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);\n}\n.btn-izin-action:disabled,\n.btn-ekspor:disabled {\n  background: #c7d2fe;\n  box-shadow: none;\n}\n.jam-card {\n  border-radius: 14px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n  transition: box-shadow 0.18s, transform 0.18s;\n  overflow: hidden;\n}\n.jam-card:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.jam-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px 8px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.jam-card__created {\n  font-size: 0.72rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.jam-card__body {\n  padding: 14px 16px;\n}\n.jam-range {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.jam-range__block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8f7ff;\n  border: 1px solid #e0e7ff;\n  border-radius: 10px;\n  padding: 8px 14px;\n  min-width: 80px;\n}\n.jam-range__date {\n  font-size: 0.68rem;\n  color: #6b7280;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  text-align: center;\n  line-height: 1.3;\n}\n.jam-range__time {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #4338ca;\n  letter-spacing: 0.02em;\n  line-height: 1.2;\n}\n.jam-range__arrow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  flex: 1;\n  min-width: 60px;\n}\n.jam-range__duration {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #6366f1;\n  background: #ede9fe;\n  border-radius: 999px;\n  padding: 2px 10px;\n  white-space: nowrap;\n}\n.jam-range__line {\n  height: 1.5px;\n  background:\n    linear-gradient(\n      90deg,\n      #c7d2fe,\n      #6366f1,\n      #c7d2fe);\n  width: 100%;\n  border-radius: 2px;\n}\n.jam-pengganti {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #0369a1;\n  background: #e0f2fe;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n.jam-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 3px 9px;\n}\n.jam-tag--yes {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.jam-tag--no {\n  background: #f9fafb;\n  color: #9ca3af;\n  border: 1px solid #e5e7eb;\n}\n.jam-tag--warn {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.jam-keperluan {\n  font-size: 0.8rem;\n  color: #374151;\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 6px 10px;\n  margin-top: 8px;\n  border-left: 3px solid #a5b4fc;\n  line-height: 1.5;\n}\n.jam-card__footer {\n  padding: 8px 16px 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 4px 12px;\n  letter-spacing: 0.02em;\n}\n.status-pill--menunggu {\n  background: #fef9c3;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.status-pill--disetujui {\n  background: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.status-pill--ditolak {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.status-pill--terpenuhi {\n  background: #dbeafe;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n.status-pill--tdk-terp {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.aksi-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.13s;\n}\n.aksi-btn:hover {\n  transform: scale(1.1);\n  opacity: 0.85;\n}\n.aksi-edit {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.aksi-tolak {\n  background: #fee2e2;\n  color: #b91c1c;\n  font-size: 1.1rem;\n}\n.aksi-hapus {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.aksi-riwayat {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.tolak-date-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.73rem;\n  font-weight: 500;\n  color: #b91c1c;\n  background: #fff0f0;\n  border: 1.5px solid #fca5a5;\n  border-radius: 8px;\n  padding: 4px 10px;\n  white-space: nowrap;\n}\n.hari-card {\n  border-radius: 14px;\n  border: 1px solid #e9ecef;\n  background: #fff;\n  overflow: visible;\n  transition: box-shadow 0.18s, transform 0.18s;\n}\n.hari-card:hover {\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n}\n.hari-card__left {\n  padding: 18px 20px;\n  border-right: 1px solid #f1f3f5;\n  border-radius: 14px 0 0 14px;\n}\n.hari-card__right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  gap: 14px;\n  background: #fafbff;\n  border-radius: 0 14px 14px 0;\n  position: relative;\n  overflow: visible;\n  z-index: auto;\n}\n.hari-card .dropdown {\n  position: relative;\n}\n.hari-card .dropdown-menu {\n  z-index: 1055;\n  position: absolute !important;\n}\n.hari-detail-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 0.83rem;\n}\n.hari-detail-label {\n  min-width: 130px;\n  font-weight: 600;\n  color: #4b5563;\n  text-align: right;\n  padding-top: 1px;\n  flex-shrink: 0;\n}\n.hari-detail-sep {\n  color: #9ca3af;\n  padding-top: 1px;\n  flex-shrink: 0;\n}\n.hari-detail-value {\n  color: #111827;\n  flex: 1;\n}\n.hari-tgl-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f0f4ff;\n  border: 1px solid #c7d2fe;\n  border-radius: 8px;\n  padding: 4px 10px;\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #3730a3;\n  margin: 2px 0;\n}\n.hari-gaji-badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.hari-gaji-badge--ya {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.hari-gaji-badge--tidak {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.dt-toolbar {\n  padding: 4px 0;\n}\n.dt-footer {\n  border-top: 1px solid #f1f3f5;\n  margin-top: 4px;\n}\n.dt-pg-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  height: 34px;\n  padding: 0 6px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.dt-pg-btn:hover:not(:disabled) {\n  background: #f5f3ff;\n  border-color: #a5b4fc;\n  color: #4338ca;\n}\n.dt-pg-btn:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.dt-pg-btn--active {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);\n}\n.dt-pg-btn--active:hover {\n  background: #4f46e5;\n}\n.radio-group-label {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #374151;\n  line-height: 1.5;\n}\n.radio-opt {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 18px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: #374151;\n  transition: border-color 0.13s, background 0.13s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.radio-opt input[type=radio] {\n  accent-color: #6366f1;\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.radio-opt:hover {\n  border-color: #a5b4fc;\n  background: #f5f3ff;\n}\n.radio-opt--active {\n  border-color: #6366f1;\n  background: #f5f3ff;\n  color: #4338ca;\n  font-weight: 600;\n}\n.rw-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rw-badge {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 9999px;\n}\n.rw-badge--dibuat {\n  background: #dcfce7;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.rw-badge--diubah {\n  background: #dbeafe;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.rw-badge--dihapus {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n}\n.rw-judul-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7c3aed;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 9999px;\n}\n.rw-id-badge {\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 9999px;\n  padding: 1px 8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.rw-item {\n  font-size: 0.82rem;\n  color: #374151;\n  line-height: 1.7;\n}\n.rw-label {\n  color: #111827;\n}\n.rw-val {\n  color: #374151;\n}\n.rw-val-lama {\n  color: #6b7280;\n  text-decoration: underline;\n  cursor: default;\n}\n.rw-val-baru {\n  color: #374151;\n  text-decoration: underline;\n  cursor: default;\n  font-weight: 500;\n}\n.izin-toast {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 2000;\n  background: #166534;\n  color: #fff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);\n  animation: toastIn 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.izin-toast--danger {\n  background: #b91c1c;\n}\n@keyframes toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.izin-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 14px;\n}\n@media (max-width: 575px) {\n  .izin-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.hari-card .dropdown-menu {\n  z-index: 1050;\n}\n.hari-card .dropdown {\n  position: relative;\n  z-index: 1050;\n}\n.created-at {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.dt-keperluan {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 0.83rem;\n  color: #374151;\n}\n/*# sourceMappingURL=karyawan-izin.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanIzinComponent, { className: "KaryawanIzinComponent", filePath: "src/app/features/karyawan/karyawan-izin/karyawan-izin.component.ts", lineNumber: 27 });
})();
export {
  KaryawanIzinComponent
};
//# sourceMappingURL=chunk-R7LFOWE6.js.map
