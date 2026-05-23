import {
  CutiService
} from "./chunk-YPNFP5NB.js";
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
import "./chunk-QWPH3JTV.js";
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/features/karyawan/karyawan-cuti/karyawan-cuti.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
function KaryawanCutiComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 60);
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
function KaryawanCutiComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error(), " ");
  }
}
function KaryawanCutiComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 62);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_77_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTambah("TAHUNAN"));
    });
    \u0275\u0275text(2, "Cuti Tahunan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 62);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_77_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTambah("SETENGAH_HARI"));
    });
    \u0275\u0275text(4, "Cuti Setengah Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTambah("KHUSUS"));
    });
    \u0275\u0275text(6, "Cuti Khusus");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanCutiComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "Memuat data...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanCutiComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "Belum ada data cuti.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.formatTanggal(c_r4.tanggalSelesai), " ");
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", c_r4.sesiSetengahHari === "PAGI" ? "Sesi Pagi" : "Sesi Siang", ")");
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "tidak potong cuti");
    \u0275\u0275elementEnd();
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2, " Lampiran ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", c_r4.lampiranUrl, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.catatanPenolakan);
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_97_For_1_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setujui(c_r4));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 80);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_97_For_1_Conditional_29_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTolak(c_r4));
    });
    \u0275\u0275element(3, "i", 81);
    \u0275\u0275elementEnd();
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_97_For_1_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(c_r4));
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementEnd();
  }
}
function KaryawanCutiComponent_Conditional_97_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, KaryawanCutiComponent_Conditional_97_For_1_Conditional_8_Template, 1, 1);
    \u0275\u0275conditionalCreate(9, KaryawanCutiComponent_Conditional_97_For_1_Conditional_9_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 53);
    \u0275\u0275text(11, " Jumlah: ");
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " hari ");
    \u0275\u0275conditionalCreate(15, KaryawanCutiComponent_Conditional_97_For_1_Conditional_15_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 67);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275conditionalCreate(21, KaryawanCutiComponent_Conditional_97_For_1_Conditional_21_Template, 3, 1, "a", 68)(22, KaryawanCutiComponent_Conditional_97_For_1_Conditional_22_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, KaryawanCutiComponent_Conditional_97_For_1_Conditional_26_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 71)(28, "div", 72);
    \u0275\u0275conditionalCreate(29, KaryawanCutiComponent_Conditional_97_For_1_Conditional_29_Template, 4, 0);
    \u0275\u0275elementStart(30, "button", 73);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_97_For_1_Template_button_click_30_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRiwayat(c_r4));
    });
    \u0275\u0275element(31, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, KaryawanCutiComponent_Conditional_97_For_1_Conditional_32_Template, 2, 0, "button", 74);
    \u0275\u0275elementStart(33, "button", 75);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_97_For_1_Template_button_click_33_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapusId.set(c_r4.id));
    });
    \u0275\u0275element(34, "i", 76);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const \u0275$index_195_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.infoStart() + \u0275$index_195_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.jenisLabel(c_r4.jenisCuti));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(c_r4.tanggalMulai), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r4.tanggalMulai !== c_r4.tanggalSelesai ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r4.sesiSetengahHari ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.jumlahHari);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!c_r4.mengurangiSisaCuti ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Diajukan: ", ctx_r0.formatDateTime(c_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.keperluan);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r4.lampiranUrl ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.statusBadgeClass(c_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(c_r4.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r4.status === "DITOLAK" && c_r4.catatanPenolakan ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isKaryawan() && c_r4.status === "MENUNGGU" ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r4.status === "MENUNGGU" ? 32 : -1);
  }
}
function KaryawanCutiComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, KaryawanCutiComponent_Conditional_97_For_1_Template, 35, 16, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
function KaryawanCutiComponent_For_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55)(1, "button", 56);
    \u0275\u0275listener("click", function KaryawanCutiComponent_For_110_Template_button_click_1_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.page.set(p_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", p_r9 === ctx_r0.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9);
  }
}
function KaryawanCutiComponent_Conditional_117_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorForm());
  }
}
function KaryawanCutiComponent_Conditional_117_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "label", 92);
    \u0275\u0275text(2, "Tanggal Selesai *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 96);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_117_Conditional_24_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateForm("tanggalSelesai", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.form().tanggalSelesai);
  }
}
function KaryawanCutiComponent_Conditional_117_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "label", 92);
    \u0275\u0275text(2, "Sesi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 93);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_117_Conditional_25_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateForm("sesiSetengahHari", $event));
    });
    \u0275\u0275elementStart(4, "option", 103);
    \u0275\u0275text(5, "Pagi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 104);
    \u0275\u0275text(7, "Siang");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.form().sesiSetengahHari);
  }
}
function KaryawanCutiComponent_Conditional_117_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.lampiranNama());
  }
}
function KaryawanCutiComponent_Conditional_117_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "input", 105);
    \u0275\u0275listener("change", function KaryawanCutiComponent_Conditional_117_Conditional_35_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateForm("mengurangiSisaCuti", $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 106);
    \u0275\u0275text(3, " Mengurangi sisa cuti ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.form().mengurangiSisaCuti);
  }
}
function KaryawanCutiComponent_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "h5", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_117_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89);
    \u0275\u0275conditionalCreate(8, KaryawanCutiComponent_Conditional_117_Conditional_8_Template, 2, 1, "div", 90);
    \u0275\u0275elementStart(9, "div", 91)(10, "label", 92);
    \u0275\u0275text(11, "Jenis Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 93);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_117_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("jenisCuti", $event));
    });
    \u0275\u0275elementStart(13, "option", 37);
    \u0275\u0275text(14, "Cuti Tahunan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 38);
    \u0275\u0275text(16, "Cuti Setengah Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 39);
    \u0275\u0275text(18, "Cuti Khusus");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 94)(20, "div", 95)(21, "label", 92);
    \u0275\u0275text(22, "Tanggal Mulai *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 96);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_117_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("tanggalMulai", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, KaryawanCutiComponent_Conditional_117_Conditional_24_Template, 4, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, KaryawanCutiComponent_Conditional_117_Conditional_25_Template, 8, 1, "div", 91);
    \u0275\u0275elementStart(26, "div", 91)(27, "label", 92);
    \u0275\u0275text(28, "Keperluan *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 97);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_117_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("keperluan", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 91)(31, "label", 92);
    \u0275\u0275text(32, "Lampiran (PDF/Gambar)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 98);
    \u0275\u0275listener("change", function KaryawanCutiComponent_Conditional_117_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLampiranChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, KaryawanCutiComponent_Conditional_117_Conditional_34_Template, 2, 1, "div", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, KaryawanCutiComponent_Conditional_117_Conditional_35_Template, 4, 1, "div", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 101)(37, "button", 102);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_117_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(38, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 40);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_117_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.editId() ? "Edit" : "Tambah", " ", ctx_r0.jenisLabel(ctx_r0.form().jenisCuti), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.errorForm() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().jenisCuti);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ctx_r0.form().tanggalMulai);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().jenisCuti !== "SETENGAH_HARI" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().jenisCuti === "SETENGAH_HARI" ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().keperluan);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.lampiranNama() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().jenisCuti === "KHUSUS" ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving() ? "Menyimpan..." : "Simpan", " ");
  }
}
function KaryawanCutiComponent_Conditional_118_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, " Sisa cuti akan otomatis ditambahkan sebanyak ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " pada ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.sisaForm().jumlahCutiPembaruan);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatTglId(ctx_r0.sisaForm().tglPembaruanBerikutnya));
  }
}
function KaryawanCutiComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "h5", 87);
    \u0275\u0275element(5, "i", 107);
    \u0275\u0275text(6, "Ubah Sisa Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 88);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_118_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showSisaModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 89)(9, "div", 91)(10, "label", 92);
    \u0275\u0275text(11, "Sisa Cuti (hari)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 108);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_118_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { sisaCuti: $event })));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 91)(14, "label", 92);
    \u0275\u0275text(15, "Tgl. Cuti Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 96);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_118_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { tglCutiBerakhir: $event })));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "hr", 109);
    \u0275\u0275elementStart(18, "h6", 110);
    \u0275\u0275text(19, "Pengaturan Pembaruan Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 111)(21, "label", 112);
    \u0275\u0275text(22, "Periode Pembaruan Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 113)(24, "div", 114)(25, "input", 115);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_118_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { periodePembaruanBulan: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 116);
    \u0275\u0275text(27, "Bulan");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 117)(29, "label", 112);
    \u0275\u0275text(30, "Jumlah Cuti per Pembaruan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 113)(32, "input", 108);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_118_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { jumlahCutiPembaruan: $event })));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, KaryawanCutiComponent_Conditional_118_Conditional_33_Template, 10, 2, "div", 118);
    \u0275\u0275elementStart(34, "div", 111)(35, "label", 112);
    \u0275\u0275text(36, "Sisa Cuti Sebelumnya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 113)(38, "div", 119)(39, "input", 120);
    \u0275\u0275listener("change", function KaryawanCutiComponent_Conditional_118_Template_input_change_39_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { tambahkanSisaCutiSebelumnya: $event.target.checked })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 121);
    \u0275\u0275text(41, " Tambahkan ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 117)(43, "label", 112);
    \u0275\u0275text(44, "Aktifkan Pengaturan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 113)(46, "div", 122)(47, "div", 119)(48, "input", 123);
    \u0275\u0275listener("change", function KaryawanCutiComponent_Conditional_118_Template_input_change_48_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { pembaruanCutiAktif: true })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "label", 124);
    \u0275\u0275text(50, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 119)(52, "input", 125);
    \u0275\u0275listener("change", function KaryawanCutiComponent_Conditional_118_Template_input_change_52_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sisaForm.set(__spreadProps(__spreadValues({}, ctx_r0.sisaForm()), { pembaruanCutiAktif: false })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "label", 126);
    \u0275\u0275text(54, "Tidak");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(55, "div", 101)(56, "button", 102);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_118_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showSisaModal.set(false));
    });
    \u0275\u0275text(57, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 40);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_118_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanSisa());
    });
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r0.sisaForm().sisaCuti);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.sisaForm().tglCutiBerakhir);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r0.sisaForm().periodePembaruanBulan);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.sisaForm().jumlahCutiPembaruan);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.sisaForm().pembaruanCutiAktif && ctx_r0.sisaForm().tglPembaruanBerikutnya ? 33 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r0.sisaForm().tambahkanSisaCutiSebelumnya);
    \u0275\u0275advance(9);
    \u0275\u0275property("checked", ctx_r0.sisaForm().pembaruanCutiAktif);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r0.sisaForm().pembaruanCutiAktif);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.savingSisa());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingSisa() ? "Menyimpan..." : "Simpan", " ");
  }
}
function KaryawanCutiComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "h5", 128);
    \u0275\u0275text(5, "Tolak Pengajuan Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_119_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89)(8, "label", 92);
    \u0275\u0275text(9, "Catatan Penolakan (opsional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 97);
    \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Conditional_119_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tolakCatatan.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 101)(12, "button", 102);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_119_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 129);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_119_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.konfirmasiTolak());
    });
    \u0275\u0275text(15, "Tolak");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r0.tolakCatatan());
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1, "Memuat...");
    \u0275\u0275elementEnd();
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1, "Belum ada riwayat.");
    \u0275\u0275elementEnd();
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u2192 ");
  }
  if (rf & 2) {
    const a_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r17.lama);
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ": ");
    \u0275\u0275conditionalCreate(4, KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Conditional_6_For_2_Conditional_4_Template, 3, 1);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r17.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r17.lama ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r17.baru);
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 137);
    \u0275\u0275repeaterCreate(1, KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Conditional_6_For_2_Template, 7, 3, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r18.aktivitas);
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 136);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Conditional_6_Template, 3, 0, "ul", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r18.tipe);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.formatDateTime(r_r18.changedAt), " \u2022 ", r_r18.changedBy);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r18.aktivitas.length ? 6 : -1);
  }
}
function KaryawanCutiComponent_Conditional_120_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, KaryawanCutiComponent_Conditional_120_Conditional_11_For_1_Template, 7, 4, "div", 134, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.riwayatList());
  }
}
function KaryawanCutiComponent_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 130)(2, "div", 85)(3, "div", 86)(4, "h5", 87);
    \u0275\u0275element(5, "i", 131);
    \u0275\u0275text(6, "Riwayat Perubahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 88);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_120_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showRiwayatModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 132);
    \u0275\u0275conditionalCreate(9, KaryawanCutiComponent_Conditional_120_Conditional_9_Template, 2, 0, "div", 133)(10, KaryawanCutiComponent_Conditional_120_Conditional_10_Template, 2, 0, "div", 133)(11, KaryawanCutiComponent_Conditional_120_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.riwayatLoading() ? 9 : ctx_r0.riwayatList().length === 0 ? 10 : 11);
  }
}
function KaryawanCutiComponent_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "h5", 128);
    \u0275\u0275element(5, "i", 138);
    \u0275\u0275text(6, "Hapus Cuti?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 139);
    \u0275\u0275text(8, " Data cuti akan dihapus permanen. Jika cuti telah disetujui, sisa cuti akan dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 101)(10, "button", 102);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_121_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapusId.set(null));
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 129);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_121_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hapus(ctx_r0.konfirmasiHapusId()));
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
function KaryawanCutiComponent_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 140)(2, "div", 141)(3, "div", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 143);
    \u0275\u0275listener("click", function KaryawanCutiComponent_Conditional_122_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toastMsg.set(""));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r0.toastType() === "success")("bg-danger", ctx_r0.toastType() === "danger");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.toastMsg());
  }
}
var KaryawanCutiComponent = class _KaryawanCutiComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.karyawanSvc = inject(KaryawanService);
    this.cutiSvc = inject(CutiService);
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
    this.sisa = signal(null, ...ngDevMode ? [{ debugName: "sisa" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusTab = signal("PENGAJUAN", ...ngDevMode ? [{ debugName: "statusTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.quickFilter = signal("", ...ngDevMode ? [{ debugName: "quickFilter" }] : (
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
    this.filterJenis = signal("", ...ngDevMode ? [{ debugName: "filterJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
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
    this.total = computed(() => this.list().length, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = computed(() => {
      const start = (this.page() - 1) * this.pageSize();
      return this.list().slice(start, start + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.infoStart = computed(() => this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "infoStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.infoEnd = computed(() => Math.min(this.page() * this.pageSize(), this.total()), ...ngDevMode ? [{ debugName: "infoEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => {
      const total = this.totalPages();
      const cur = this.page();
      const arr = [];
      for (let p = Math.max(1, cur - 2); p <= Math.min(total, cur + 2); p++)
        arr.push(p);
      return arr;
    }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTambahMenu = signal(false, ...ngDevMode ? [{ debugName: "showTambahMenu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showFormModal = signal(false, ...ngDevMode ? [{ debugName: "showFormModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editId = signal(null, ...ngDevMode ? [{ debugName: "editId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorForm = signal("", ...ngDevMode ? [{ debugName: "errorForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lampiranFile = null;
    this.lampiranNama = signal("", ...ngDevMode ? [{ debugName: "lampiranNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = signal({
      jenisCuti: "TAHUNAN",
      tanggalMulai: "",
      tanggalSelesai: "",
      sesiSetengahHari: "PAGI",
      keperluan: "",
      mengurangiSisaCuti: true
    }, ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSisaModal = signal(false, ...ngDevMode ? [{ debugName: "showSisaModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sisaForm = signal({
      sisaCuti: null,
      tglCutiBerakhir: "",
      pembaruanCutiAktif: false,
      periodePembaruanBulan: 12,
      jumlahCutiPembaruan: 12,
      tambahkanSisaCutiSebelumnya: false,
      tglPembaruanBerikutnya: ""
    }, ...ngDevMode ? [{ debugName: "sisaForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.savingSisa = signal(false, ...ngDevMode ? [{ debugName: "savingSisa" }] : (
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
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatLoading = signal(false, ...ngDevMode ? [{ debugName: "riwayatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatList = signal([], ...ngDevMode ? [{ debugName: "riwayatList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.konfirmasiHapusId = signal(null, ...ngDevMode ? [{ debugName: "konfirmasiHapusId" }] : (
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
    this.eksporting = signal(false, ...ngDevMode ? [{ debugName: "eksporting" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // ── helpers ─────────────────────────────────────────────
  showToast(msg, type = "success") {
    if (this._toastTimer)
      clearTimeout(this._toastTimer);
    this.toastMsg.set(msg);
    this.toastType.set(type);
    this._toastTimer = setTimeout(() => this.toastMsg.set(""), 3e3);
  }
  jenisLabel(j) {
    return j === "TAHUNAN" ? "Cuti Tahunan" : j === "SETENGAH_HARI" ? "Cuti Setengah Hari" : "Cuti Khusus";
  }
  formatTanggal(tgl) {
    if (!tgl)
      return "\u2014";
    const d = /* @__PURE__ */ new Date(tgl + "T00:00:00");
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()}`;
  }
  formatDateTime(dt) {
    if (!dt)
      return "";
    const d = new Date(dt);
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  }
  statusLabel(s) {
    return s === "MENUNGGU" ? "Menunggu" : s === "DISETUJUI" ? "Disetujui" : s === "DITOLAK" ? "Ditolak" : s;
  }
  statusBadgeClass(s) {
    return s === "DISETUJUI" ? "badge bg-success" : s === "DITOLAK" ? "badge bg-danger" : "badge bg-warning text-dark";
  }
  // ── tabs / filter ──────────────────────────────────────
  setStatusTab(t) {
    this.statusTab.set(t);
    this.quickFilter.set("");
    this.page.set(1);
    this.load();
  }
  setQuickFilter(f) {
    const next = this.quickFilter() === f ? "" : f;
    this.quickFilter.set(next);
    if (next)
      this.statusTab.set("DISETUJUI");
    this.page.set(1);
    this.load();
  }
  applyFilter() {
    this.page.set(1);
    this.load();
  }
  resetFilter() {
    this.filterMulai.set("");
    this.filterSelesai.set("");
    this.filterJenis.set("");
    this.page.set(1);
    this.load();
  }
  // ── data ───────────────────────────────────────────────
  load() {
    const k = this.karyawan();
    if (!k)
      return;
    this.loading.set(true);
    const opts = {};
    const status = this.mapStatus();
    if (status)
      opts.status = status;
    if (this.filterJenis())
      opts.jenis = this.filterJenis();
    if (this.filterMulai())
      opts.from = this.filterMulai();
    if (this.filterSelesai())
      opts.to = this.filterSelesai();
    if (this.quickFilter())
      opts.filter = this.quickFilter();
    this.cutiSvc.getAll(k.id, opts).subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.showToast("Gagal memuat data cuti.", "danger");
      }
    });
  }
  mapStatus() {
    const t = this.statusTab();
    if (t === "PENGAJUAN")
      return "MENUNGGU";
    if (t === "DISETUJUI")
      return "DISETUJUI";
    if (t === "DITOLAK")
      return "DITOLAK";
    return void 0;
  }
  loadSisa() {
    const k = this.karyawan();
    if (!k)
      return;
    this.cutiSvc.getSisa(k.id).subscribe({
      next: (s) => this.sisa.set(s),
      error: () => {
      }
    });
  }
  // ── tambah ─────────────────────────────────────────────
  openTambah(jenis) {
    this.editId.set(null);
    this.errorForm.set("");
    this.lampiranFile = null;
    this.lampiranNama.set("");
    this.form.set({
      jenisCuti: jenis,
      tanggalMulai: "",
      tanggalSelesai: "",
      sesiSetengahHari: jenis === "SETENGAH_HARI" ? "PAGI" : void 0,
      keperluan: "",
      mengurangiSisaCuti: jenis !== "KHUSUS"
    });
    this.showTambahMenu.set(false);
    this.showFormModal.set(true);
  }
  openEdit(c) {
    this.editId.set(c.id);
    this.errorForm.set("");
    this.lampiranFile = null;
    this.lampiranNama.set(c.lampiranUrl ? c.lampiranUrl.split("/").pop() ?? "" : "");
    this.form.set({
      jenisCuti: c.jenisCuti,
      tanggalMulai: c.tanggalMulai,
      tanggalSelesai: c.tanggalSelesai,
      sesiSetengahHari: c.sesiSetengahHari ?? "PAGI",
      keperluan: c.keperluan,
      mengurangiSisaCuti: c.mengurangiSisaCuti
    });
    this.showFormModal.set(true);
  }
  closeForm() {
    this.showFormModal.set(false);
  }
  updateForm(field, value) {
    this.form.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  onLampiranChange(evt) {
    const input = evt.target;
    if (input.files?.length) {
      this.lampiranFile = input.files[0];
      this.lampiranNama.set(input.files[0].name);
    }
  }
  simpan() {
    const f = this.form();
    const k = this.karyawan();
    if (!k)
      return;
    if (!f.tanggalMulai) {
      this.errorForm.set("Tanggal mulai wajib diisi.");
      return;
    }
    if (f.jenisCuti !== "SETENGAH_HARI" && !f.tanggalSelesai) {
      this.errorForm.set("Tanggal selesai wajib diisi.");
      return;
    }
    if (!f.keperluan?.trim()) {
      this.errorForm.set("Keperluan wajib diisi.");
      return;
    }
    const req = __spreadValues({}, f);
    if (req.jenisCuti === "SETENGAH_HARI") {
      req.tanggalSelesai = req.tanggalMulai;
    } else {
      req.sesiSetengahHari = void 0;
    }
    this.saving.set(true);
    this.errorForm.set("");
    const id = this.editId();
    const obs = id ? this.cutiSvc.update(k.id, id, req, this.lampiranFile ?? void 0) : this.cutiSvc.create(k.id, req, this.lampiranFile ?? void 0);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? "Cuti berhasil diperbarui." : "Cuti berhasil diajukan.");
        this.load();
        this.loadSisa();
      },
      error: (err) => {
        this.errorForm.set(err?.error?.message ?? "Gagal menyimpan cuti.");
        this.saving.set(false);
      }
    });
  }
  // ── status / hapus ─────────────────────────────────────
  setujui(c) {
    const k = this.karyawan();
    if (!k)
      return;
    this.cutiSvc.updateStatus(k.id, c.id, "DISETUJUI").subscribe({
      next: () => {
        this.showToast("Cuti disetujui.");
        this.load();
        this.loadSisa();
      },
      error: () => this.showToast("Gagal menyetujui.", "danger")
    });
  }
  openTolak(c) {
    this.tolakItem.set(c);
    this.tolakCatatan.set("");
    this.showTolakModal.set(true);
  }
  konfirmasiTolak() {
    const c = this.tolakItem();
    const k = this.karyawan();
    if (!c || !k)
      return;
    this.cutiSvc.updateStatus(k.id, c.id, "DITOLAK", this.tolakCatatan() || void 0).subscribe({
      next: () => {
        this.showTolakModal.set(false);
        this.showToast("Cuti ditolak.");
        this.load();
        this.loadSisa();
      },
      error: () => this.showToast("Gagal menolak cuti.", "danger")
    });
  }
  hapus(id) {
    const k = this.karyawan();
    if (!k)
      return;
    this.cutiSvc.delete(k.id, id).subscribe({
      next: () => {
        this.konfirmasiHapusId.set(null);
        this.showToast("Cuti berhasil dihapus.");
        this.load();
        this.loadSisa();
      },
      error: () => this.showToast("Gagal menghapus cuti.", "danger")
    });
  }
  // ── riwayat ────────────────────────────────────────────
  openRiwayat(c) {
    const k = this.karyawan();
    if (!k)
      return;
    this.riwayatList.set([]);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.cutiSvc.getRiwayat(k.id, c.id).subscribe({
      next: (list) => {
        this.riwayatList.set(list);
        this.riwayatLoading.set(false);
      },
      error: () => {
        this.riwayatLoading.set(false);
        this.showToast("Gagal memuat riwayat.", "danger");
      }
    });
  }
  // ── ubah sisa cuti ────────────────────────────────────
  openSisaModal() {
    const s = this.sisa();
    this.sisaForm.set({
      sisaCuti: s?.sisaCuti ?? 0,
      tglCutiBerakhir: s?.tglCutiBerakhir ?? "",
      pembaruanCutiAktif: s?.pembaruanCutiAktif ?? false,
      periodePembaruanBulan: s?.periodePembaruanBulan ?? 12,
      jumlahCutiPembaruan: s?.jumlahCutiPembaruan ?? 12,
      tambahkanSisaCutiSebelumnya: s?.tambahkanSisaCutiSebelumnya ?? false,
      tglPembaruanBerikutnya: s?.tglPembaruanBerikutnya ?? ""
    });
    this.showSisaModal.set(true);
  }
  simpanSisa() {
    const k = this.karyawan();
    if (!k)
      return;
    const f = this.sisaForm();
    this.savingSisa.set(true);
    this.cutiSvc.updateSisa(k.id, {
      sisaCuti: f.sisaCuti ?? 0,
      tglCutiBerakhir: f.tglCutiBerakhir || void 0,
      pembaruanCutiAktif: f.pembaruanCutiAktif,
      periodePembaruanBulan: Number(f.periodePembaruanBulan) || 12,
      jumlahCutiPembaruan: Number(f.jumlahCutiPembaruan) || 0,
      tambahkanSisaCutiSebelumnya: f.tambahkanSisaCutiSebelumnya,
      tglPembaruanBerikutnya: f.tglPembaruanBerikutnya || void 0
    }).subscribe({
      next: (s) => {
        this.sisa.set(s);
        this.savingSisa.set(false);
        this.showSisaModal.set(false);
        this.showToast("Sisa cuti diperbarui.");
      },
      error: () => {
        this.savingSisa.set(false);
        this.showToast("Gagal memperbarui.", "danger");
      }
    });
  }
  /** Format tanggal ID untuk info text. */
  formatTglId(t) {
    if (!t)
      return "-";
    return new Date(t).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  ekspor() {
    const k = this.karyawan();
    if (!k)
      return;
    this.eksporting.set(true);
    const opts = {};
    const st = this.mapStatus();
    if (st)
      opts.status = st;
    if (this.filterJenis())
      opts.jenis = this.filterJenis();
    if (this.filterMulai())
      opts.from = this.filterMulai();
    if (this.filterSelesai())
      opts.to = this.filterSelesai();
    this.cutiSvc.exportExcel(k.id, opts).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `cuti-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.eksporting.set(false);
        this.showToast("File Excel berhasil diunduh.");
      },
      error: () => {
        this.eksporting.set(false);
        this.showToast("Gagal mengekspor.", "danger");
      }
    });
  }
  // ── lifecycle ──────────────────────────────────────────
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const user = this.auth.currentUser();
    if (user?.role === "KARYAWAN" && user.karyawanId !== id) {
      this.router.navigate(["/karyawan", user.karyawanId, "cuti"]);
      return;
    }
    this.karyawanSvc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        this.load();
        this.loadSisa();
      },
      error: () => this.error.set("Gagal memuat data karyawan.")
    });
  }
  static {
    this.\u0275fac = function KaryawanCutiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanCutiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanCutiComponent, selectors: [["app-karyawan-cuti"]], decls: 123, vars: 45, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body", "py-3"], [1, "row", "align-items-center", "text-center", "text-md-start"], [1, "col-md-3"], [1, "text-muted", "small"], [1, "fs-5", "fw-bold"], [1, "col-md-5"], [1, "col-md-4", "d-flex", "justify-content-center", "justify-content-md-end", "gap-2", "mt-3", "mt-md-0"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-edit", "me-1"], ["title", "Pengaturan", 1, "btn", "btn-light", "btn-sm", "border"], [1, "bx", "bx-cog"], ["title", "Riwayat", 1, "btn", "btn-light", "btn-sm", "border"], [1, "bx", "bx-history"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "d-flex", "flex-wrap", "justify-content-between", "gap-2", "mb-3"], ["role", "group", 1, "btn-group", "flex-grow-1", 2, "max-width", "560px"], ["type", "button", 1, "btn", 3, "click"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-light", "border", 3, "click"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", "placeholder", "Mulai Cuti", 1, "form-control", "form-control-sm", 2, "max-width", "170px", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Selesai Cuti", 1, "form-control", "form-control-sm", 2, "max-width", "170px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "max-width", "200px", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "TAHUNAN"], ["value", "SETENGAH_HARI"], ["value", "KHUSUS"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "bx", "bx-export", "me-1"], [1, "position-relative"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bx", "bx-plus-circle", "me-1"], [1, "bx", "bx-caret-down"], [1, "border", "rounded", "shadow-sm", "bg-white", "py-1", 2, "position", "absolute", "right", "0", "top", "calc(100% + 4px)", "min-width", "200px", "z-index", "300"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light"], [2, "width", "50px"], [1, "text-center", 2, "width", "140px"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "small", "text-muted"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [1, "position-fixed", "bottom-0", "end-0", "m-3", 2, "z-index", "1080"], [3, "routerLink"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "dropdown-item", "w-100", "text-start", "px-3", "py-2", "border-0", "bg-transparent", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"], [1, "fw-semibold"], [1, "ms-1"], [1, "badge", "bg-light", "text-dark", "ms-1"], [2, "max-width", "280px"], ["target", "_blank", 1, "text-primary", 3, "href"], [1, "text-muted"], [1, "small", "text-danger", "mt-1"], [1, "text-center"], [1, "btn-group", "btn-group-sm"], ["title", "Riwayat", 1, "btn", "btn-light", "border", 3, "click"], ["title", "Edit", 1, "btn", "btn-light", "border"], ["title", "Hapus", 1, "btn", "btn-light", "border", "text-danger", 3, "click"], [1, "bx", "bx-trash"], [1, "bx", "bx-paperclip"], ["title", "Setujui", 1, "btn", "btn-success", 3, "click"], [1, "bx", "bx-check"], ["title", "Tolak", 1, "btn", "btn-danger", 3, "click"], [1, "bx", "bx-x"], ["title", "Edit", 1, "btn", "btn-light", "border", 3, "click"], [1, "bx", "bx-edit"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header"], [1, "modal-title"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "small", "py-2"], [1, "mb-3"], [1, "form-label", "small"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-3"], [1, "col"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf,image/*", 1, "form-control", "form-control-sm", 3, "change"], [1, "small", "text-muted", "mt-1"], [1, "form-check", "mb-3"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["value", "PAGI"], ["value", "SIANG"], ["type", "checkbox", "id", "mengurangiSisa", 1, "form-check-input", 3, "change", "checked"], ["for", "mengurangiSisa", 1, "form-check-label", "small"], [1, "bx", "bx-edit", "me-2"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "my-3"], [1, "fw-bold", "mb-3"], [1, "row", "mb-3", "align-items-center"], [1, "col-sm-5", "col-form-label", "small"], [1, "col-sm-7"], [1, "input-group", "input-group-sm"], ["type", "number", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], [1, "row", "mb-2", "align-items-center"], [1, "alert", "alert-info", "py-2", "small", "d-flex", "align-items-start", "gap-2", "mb-3"], [1, "form-check"], ["type", "checkbox", "id", "sisaSebelumnya", 1, "form-check-input", 3, "change", "checked"], ["for", "sisaSebelumnya", 1, "form-check-label", "small"], [1, "d-flex", "gap-3"], ["type", "radio", "id", "aktifYa", "name", "pembaruanCutiAktif", 1, "form-check-input", 3, "change", "checked"], ["for", "aktifYa", 1, "form-check-label", "small"], ["type", "radio", "id", "aktifTidak", "name", "pembaruanCutiAktif", 1, "form-check-input", 3, "change", "checked"], ["for", "aktifTidak", 1, "form-check-label", "small"], [1, "bx", "bx-info-circle", "fs-6", "mt-1"], [1, "modal-title", "text-danger"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "bx", "bx-history", "me-2"], [1, "modal-body", 2, "max-height", "60vh", "overflow-y", "auto"], [1, "text-center", "text-muted", "py-3"], [1, "border", "rounded", "p-2", "mb-2"], [1, "d-flex", "justify-content-between"], [1, "badge", "bg-info"], [1, "small", "mb-0", "mt-2", "ps-3"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "small", "text-muted"], [1, "toast", "show", "align-items-center", "text-white", "border-0"], [1, "d-flex"], [1, "toast-body"], [1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"]], template: function KaryawanCutiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Karyawan");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, KaryawanCutiComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Cuti");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(16, KaryawanCutiComponent_Conditional_16_Template, 3, 1, "div", 10);
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15);
        \u0275\u0275text(22, "Sisa Cuti");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 16);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 17)(26, "div", 15);
        \u0275\u0275text(27, "Tgl. Cuti Berakhir");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_31_listener() {
          return ctx.openSisaModal();
        });
        \u0275\u0275element(32, "i", 20);
        \u0275\u0275text(33, " Ubah Sisa Cuti ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 21);
        \u0275\u0275element(35, "i", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 23);
        \u0275\u0275element(37, "i", 24);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "div", 25)(39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "button", 29);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_42_listener() {
          return ctx.setStatusTab("PENGAJUAN");
        });
        \u0275\u0275text(43, "Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 29);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_44_listener() {
          return ctx.setStatusTab("DISETUJUI");
        });
        \u0275\u0275text(45, "Disetujui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 29);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_46_listener() {
          return ctx.setStatusTab("DITOLAK");
        });
        \u0275\u0275text(47, "Ditolak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 30)(49, "button", 31);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_49_listener() {
          return ctx.setQuickFilter("HARI_INI");
        });
        \u0275\u0275text(50, "Cuti Hari Ini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 31);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_51_listener() {
          return ctx.setQuickFilter("BESOK");
        });
        \u0275\u0275text(52, "Cuti Besok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 31);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_53_listener() {
          return ctx.setQuickFilter("7_HARI");
        });
        \u0275\u0275text(54, "Cuti 7 Hari Kedepan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 32)(56, "input", 33);
        \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Template_input_ngModelChange_56_listener($event) {
          ctx.filterMulai.set($event);
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span");
        \u0275\u0275text(58, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "input", 34);
        \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Template_input_ngModelChange_59_listener($event) {
          ctx.filterSelesai.set($event);
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "select", 35);
        \u0275\u0275listener("ngModelChange", function KaryawanCutiComponent_Template_select_ngModelChange_60_listener($event) {
          ctx.filterJenis.set($event);
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(61, "option", 36);
        \u0275\u0275text(62, "--Jenis Cuti--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "option", 37);
        \u0275\u0275text(64, "Cuti Tahunan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "option", 38);
        \u0275\u0275text(66, "Cuti Setengah Hari");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "option", 39);
        \u0275\u0275text(68, "Cuti Khusus");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "button", 40);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_69_listener() {
          return ctx.ekspor();
        });
        \u0275\u0275element(70, "i", 41);
        \u0275\u0275text(71, " Ekspor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 42)(73, "button", 43);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_73_listener() {
          return ctx.showTambahMenu.set(!ctx.showTambahMenu());
        });
        \u0275\u0275element(74, "i", 44);
        \u0275\u0275text(75, " Tambah Cuti ");
        \u0275\u0275element(76, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(77, KaryawanCutiComponent_Conditional_77_Template, 7, 0, "div", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 47)(79, "table", 48)(80, "thead", 49)(81, "tr")(82, "th", 50);
        \u0275\u0275text(83, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "th");
        \u0275\u0275text(85, "Detail Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "th");
        \u0275\u0275text(87, "Keperluan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "th");
        \u0275\u0275text(89, "Lampiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "th");
        \u0275\u0275text(91, "Status Persetujuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "th", 51);
        \u0275\u0275text(93, "Aksi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "tbody");
        \u0275\u0275conditionalCreate(95, KaryawanCutiComponent_Conditional_95_Template, 3, 0, "tr")(96, KaryawanCutiComponent_Conditional_96_Template, 3, 0, "tr")(97, KaryawanCutiComponent_Conditional_97_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 52)(99, "div", 53);
        \u0275\u0275text(100);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "nav")(102, "ul", 54)(103, "li", 55)(104, "button", 56);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_104_listener() {
          return ctx.page.set(1);
        });
        \u0275\u0275text(105, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "li", 55)(107, "button", 56);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_107_listener() {
          return ctx.page.set(ctx.page() - 1);
        });
        \u0275\u0275text(108, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(109, KaryawanCutiComponent_For_110_Template, 3, 3, "li", 57, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(111, "li", 55)(112, "button", 56);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_112_listener() {
          return ctx.page.set(ctx.page() + 1);
        });
        \u0275\u0275text(113, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "li", 55)(115, "button", 56);
        \u0275\u0275listener("click", function KaryawanCutiComponent_Template_button_click_115_listener() {
          return ctx.page.set(ctx.totalPages());
        });
        \u0275\u0275text(116, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275conditionalCreate(117, KaryawanCutiComponent_Conditional_117_Template, 41, 12, "div", 58);
        \u0275\u0275conditionalCreate(118, KaryawanCutiComponent_Conditional_118_Template, 60, 10, "div", 58);
        \u0275\u0275conditionalCreate(119, KaryawanCutiComponent_Conditional_119_Template, 16, 1, "div", 58);
        \u0275\u0275conditionalCreate(120, KaryawanCutiComponent_Conditional_120_Template, 12, 1, "div", 58);
        \u0275\u0275conditionalCreate(121, KaryawanCutiComponent_Conditional_121_Template, 14, 0, "div", 58);
        \u0275\u0275conditionalCreate(122, KaryawanCutiComponent_Conditional_122_Template, 6, 5, "div", 59);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.karyawan() ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 16 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.sisa()) == null ? null : tmp_2_0.sisaCuti) ?? "-");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.sisa()) == null ? null : tmp_3_0.tglCutiBerakhir) ? ctx.formatTanggal(ctx.sisa().tglCutiBerakhir) : "-");
        \u0275\u0275advance(13);
        \u0275\u0275classProp("btn-primary", ctx.statusTab() === "PENGAJUAN")("btn-light", ctx.statusTab() !== "PENGAJUAN");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.statusTab() === "DISETUJUI")("btn-light", ctx.statusTab() !== "DISETUJUI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.statusTab() === "DITOLAK")("btn-light", ctx.statusTab() !== "DITOLAK");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.quickFilter() === "HARI_INI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.quickFilter() === "BESOK");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.quickFilter() === "7_HARI");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterMulai());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterSelesai());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.filterJenis());
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.eksporting());
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.showTambahMenu() ? 77 : -1);
        \u0275\u0275advance(18);
        \u0275\u0275conditional(ctx.loading() ? 95 : ctx.rows().length === 0 ? 96 : 97);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" Menampilkan ", ctx.infoStart(), " - ", ctx.infoEnd(), " dari ", ctx.total(), " total data ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.page() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.page() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.pageNumbers());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("disabled", ctx.page() === ctx.totalPages());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.page() === ctx.totalPages());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFormModal() ? 117 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSisaModal() ? 118 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 119 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() ? 120 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.konfirmasiHapusId() !== null ? 121 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 122 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], styles: ["\n.btn-group[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #ede9fe;\n  border-color: #c4b5fd;\n  color: #5b21b6;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n/*# sourceMappingURL=karyawan-cuti.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanCutiComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-cuti", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Karyawan</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          @if (karyawan()) {\r
            <li class="breadcrumb-item">\r
              <a [routerLink]="['/karyawan', karyawan()!.id]">{{ karyawan()!.namaLengkap }}</a>\r
            </li>\r
          }\r
          <li class="breadcrumb-item active" aria-current="page">Cuti</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center" role="alert">\r
      <i class="bx bx-error-circle me-2 fs-5"></i>{{ error() }}\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Card Sisa Cuti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="card border-0 shadow-sm mb-3">\r
    <div class="card-body py-3">\r
      <div class="row align-items-center text-center text-md-start">\r
        <div class="col-md-3">\r
          <div class="text-muted small">Sisa Cuti</div>\r
          <div class="fs-5 fw-bold">{{ sisa()?.sisaCuti ?? '-' }}</div>\r
        </div>\r
        <div class="col-md-5">\r
          <div class="text-muted small">Tgl. Cuti Berakhir</div>\r
          <div class="fs-5 fw-bold">{{ sisa()?.tglCutiBerakhir ? formatTanggal(sisa()!.tglCutiBerakhir!) : '-' }}</div>\r
        </div>\r
        <div class="col-md-4 d-flex justify-content-center justify-content-md-end gap-2 mt-3 mt-md-0">\r
          <button class="btn btn-primary btn-sm px-3" (click)="openSisaModal()">\r
            <i class="bx bx-edit me-1"></i> Ubah Sisa Cuti\r
          </button>\r
          <button class="btn btn-light btn-sm border" title="Pengaturan">\r
            <i class="bx bx-cog"></i>\r
          </button>\r
          <button class="btn btn-light btn-sm border" title="Riwayat">\r
            <i class="bx bx-history"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Card Daftar Cuti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body">\r
\r
      <!-- Tabs status + quick filter -->\r
      <div class="d-flex flex-wrap justify-content-between gap-2 mb-3">\r
        <div class="btn-group flex-grow-1" role="group" style="max-width:560px">\r
          <button type="button"\r
                  class="btn"\r
                  [class.btn-primary]="statusTab() === 'PENGAJUAN'"\r
                  [class.btn-light]="statusTab() !== 'PENGAJUAN'"\r
                  (click)="setStatusTab('PENGAJUAN')">Pengajuan</button>\r
          <button type="button"\r
                  class="btn"\r
                  [class.btn-primary]="statusTab() === 'DISETUJUI'"\r
                  [class.btn-light]="statusTab() !== 'DISETUJUI'"\r
                  (click)="setStatusTab('DISETUJUI')">Disetujui</button>\r
          <button type="button"\r
                  class="btn"\r
                  [class.btn-primary]="statusTab() === 'DITOLAK'"\r
                  [class.btn-light]="statusTab() !== 'DITOLAK'"\r
                  (click)="setStatusTab('DITOLAK')">Ditolak</button>\r
        </div>\r
\r
        <div class="btn-group" role="group">\r
          <button type="button" class="btn btn-light border"\r
                  [class.active]="quickFilter()==='HARI_INI'"\r
                  (click)="setQuickFilter('HARI_INI')">Cuti Hari Ini</button>\r
          <button type="button" class="btn btn-light border"\r
                  [class.active]="quickFilter()==='BESOK'"\r
                  (click)="setQuickFilter('BESOK')">Cuti Besok</button>\r
          <button type="button" class="btn btn-light border"\r
                  [class.active]="quickFilter()==='7_HARI'"\r
                  (click)="setQuickFilter('7_HARI')">Cuti 7 Hari Kedepan</button>\r
        </div>\r
      </div>\r
\r
      <!-- Filter form -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <input type="date" class="form-control form-control-sm" style="max-width:170px"\r
               placeholder="Mulai Cuti"\r
               [ngModel]="filterMulai()" (ngModelChange)="filterMulai.set($event); applyFilter()">\r
        <span>-</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:170px"\r
               placeholder="Selesai Cuti"\r
               [ngModel]="filterSelesai()" (ngModelChange)="filterSelesai.set($event); applyFilter()">\r
        <select class="form-select form-select-sm" style="max-width:200px"\r
                [ngModel]="filterJenis()" (ngModelChange)="filterJenis.set($event); applyFilter()">\r
          <option value="">--Jenis Cuti--</option>\r
          <option value="TAHUNAN">Cuti Tahunan</option>\r
          <option value="SETENGAH_HARI">Cuti Setengah Hari</option>\r
          <option value="KHUSUS">Cuti Khusus</option>\r
        </select>\r
\r
        <button class="btn btn-primary btn-sm" (click)="ekspor()" [disabled]="eksporting()">\r
          <i class="bx bx-export me-1"></i> Ekspor Excel\r
        </button>\r
\r
        <div class="position-relative">\r
          <button class="btn btn-primary btn-sm" (click)="showTambahMenu.set(!showTambahMenu())">\r
            <i class="bx bx-plus-circle me-1"></i> Tambah Cuti <i class="bx bx-caret-down"></i>\r
          </button>\r
          @if (showTambahMenu()) {\r
            <div class="border rounded shadow-sm bg-white py-1"\r
                 style="position:absolute;right:0;top:calc(100% + 4px);min-width:200px;z-index:300">\r
              <button class="dropdown-item w-100 text-start px-3 py-2 border-0 bg-transparent"\r
                      (click)="openTambah('TAHUNAN')">Cuti Tahunan</button>\r
              <button class="dropdown-item w-100 text-start px-3 py-2 border-0 bg-transparent"\r
                      (click)="openTambah('SETENGAH_HARI')">Cuti Setengah Hari</button>\r
              <button class="dropdown-item w-100 text-start px-3 py-2 border-0 bg-transparent"\r
                      (click)="openTambah('KHUSUS')">Cuti Khusus</button>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- Table -->\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle">\r
          <thead class="table-light">\r
            <tr>\r
              <th style="width:50px">#</th>\r
              <th>Detail Pengajuan</th>\r
              <th>Keperluan</th>\r
              <th>Lampiran</th>\r
              <th>Status Persetujuan</th>\r
              <th class="text-center" style="width:140px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (loading()) {\r
              <tr><td colspan="6" class="text-center text-muted py-4">Memuat data...</td></tr>\r
            } @else if (rows().length === 0) {\r
              <tr><td colspan="6" class="text-center text-muted py-4">Belum ada data cuti.</td></tr>\r
            } @else {\r
              @for (c of rows(); track c.id; let i = $index) {\r
                <tr>\r
                  <td>{{ infoStart() + i }}</td>\r
                  <td>\r
                    <div class="fw-semibold">{{ jenisLabel(c.jenisCuti) }}</div>\r
                    <div class="small text-muted">\r
                      {{ formatTanggal(c.tanggalMulai) }}\r
                      @if (c.tanggalMulai !== c.tanggalSelesai) {\r
                        \u2014 {{ formatTanggal(c.tanggalSelesai) }}\r
                      }\r
                      @if (c.sesiSetengahHari) {\r
                        <span class="ms-1">({{ c.sesiSetengahHari === 'PAGI' ? 'Sesi Pagi' : 'Sesi Siang' }})</span>\r
                      }\r
                    </div>\r
                    <div class="small text-muted">\r
                      Jumlah: <b>{{ c.jumlahHari }}</b> hari\r
                      @if (!c.mengurangiSisaCuti) {\r
                        <span class="badge bg-light text-dark ms-1">tidak potong cuti</span>\r
                      }\r
                    </div>\r
                    <div class="small text-muted">Diajukan: {{ formatDateTime(c.createdAt) }}</div>\r
                  </td>\r
                  <td style="max-width:280px">{{ c.keperluan }}</td>\r
                  <td>\r
                    @if (c.lampiranUrl) {\r
                      <a [href]="c.lampiranUrl" target="_blank" class="text-primary">\r
                        <i class="bx bx-paperclip"></i> Lampiran\r
                      </a>\r
                    } @else { <span class="text-muted">\u2014</span> }\r
                  </td>\r
                  <td>\r
                    <span [class]="statusBadgeClass(c.status)">{{ statusLabel(c.status) }}</span>\r
                    @if (c.status === 'DITOLAK' && c.catatanPenolakan) {\r
                      <div class="small text-danger mt-1">{{ c.catatanPenolakan }}</div>\r
                    }\r
                  </td>\r
                  <td class="text-center">\r
                    <div class="btn-group btn-group-sm">\r
                      @if (!isKaryawan() && c.status === 'MENUNGGU') {\r
                        <button class="btn btn-success" title="Setujui" (click)="setujui(c)">\r
                          <i class="bx bx-check"></i>\r
                        </button>\r
                        <button class="btn btn-danger" title="Tolak" (click)="openTolak(c)">\r
                          <i class="bx bx-x"></i>\r
                        </button>\r
                      }\r
                      <button class="btn btn-light border" title="Riwayat" (click)="openRiwayat(c)">\r
                        <i class="bx bx-history"></i>\r
                      </button>\r
                      @if (c.status === 'MENUNGGU') {\r
                        <button class="btn btn-light border" title="Edit" (click)="openEdit(c)">\r
                          <i class="bx bx-edit"></i>\r
                        </button>\r
                      }\r
                      <button class="btn btn-light border text-danger" title="Hapus"\r
                              (click)="konfirmasiHapusId.set(c.id)">\r
                        <i class="bx bx-trash"></i>\r
                      </button>\r
                    </div>\r
                  </td>\r
                </tr>\r
              }\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-2">\r
        <div class="small text-muted">\r
          Menampilkan {{ infoStart() }} - {{ infoEnd() }} dari {{ total() }} total data\r
        </div>\r
        <nav>\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="page()===1">\r
              <button class="page-link" (click)="page.set(1)">\xAB</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="page()===1">\r
              <button class="page-link" (click)="page.set(page()-1)">\u2039</button>\r
            </li>\r
            @for (p of pageNumbers(); track p) {\r
              <li class="page-item" [class.active]="p===page()">\r
                <button class="page-link" (click)="page.set(p)">{{ p }}</button>\r
              </li>\r
            }\r
            <li class="page-item" [class.disabled]="page()===totalPages()">\r
              <button class="page-link" (click)="page.set(page()+1)">\u203A</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="page()===totalPages()">\r
              <button class="page-link" (click)="page.set(totalPages())">\xBB</button>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Tambah/Edit Cuti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              {{ editId() ? 'Edit' : 'Tambah' }} {{ jenisLabel(form().jenisCuti) }}\r
            </h5>\r
            <button class="btn-close" (click)="closeForm()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (errorForm()) {\r
              <div class="alert alert-danger small py-2">{{ errorForm() }}</div>\r
            }\r
\r
            <div class="mb-3">\r
              <label class="form-label small">Jenis Cuti</label>\r
              <select class="form-select form-select-sm"\r
                      [ngModel]="form().jenisCuti"\r
                      (ngModelChange)="updateForm('jenisCuti', $event)">\r
                <option value="TAHUNAN">Cuti Tahunan</option>\r
                <option value="SETENGAH_HARI">Cuti Setengah Hari</option>\r
                <option value="KHUSUS">Cuti Khusus</option>\r
              </select>\r
            </div>\r
\r
            <div class="row g-2 mb-3">\r
              <div class="col">\r
                <label class="form-label small">Tanggal Mulai *</label>\r
                <input type="date" class="form-control form-control-sm"\r
                       [ngModel]="form().tanggalMulai"\r
                       (ngModelChange)="updateForm('tanggalMulai', $event)">\r
              </div>\r
              @if (form().jenisCuti !== 'SETENGAH_HARI') {\r
                <div class="col">\r
                  <label class="form-label small">Tanggal Selesai *</label>\r
                  <input type="date" class="form-control form-control-sm"\r
                         [ngModel]="form().tanggalSelesai"\r
                         (ngModelChange)="updateForm('tanggalSelesai', $event)">\r
                </div>\r
              }\r
            </div>\r
\r
            @if (form().jenisCuti === 'SETENGAH_HARI') {\r
              <div class="mb-3">\r
                <label class="form-label small">Sesi</label>\r
                <select class="form-select form-select-sm"\r
                        [ngModel]="form().sesiSetengahHari"\r
                        (ngModelChange)="updateForm('sesiSetengahHari', $event)">\r
                  <option value="PAGI">Pagi</option>\r
                  <option value="SIANG">Siang</option>\r
                </select>\r
              </div>\r
            }\r
\r
            <div class="mb-3">\r
              <label class="form-label small">Keperluan *</label>\r
              <textarea class="form-control form-control-sm" rows="3"\r
                        [ngModel]="form().keperluan"\r
                        (ngModelChange)="updateForm('keperluan', $event)"></textarea>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label small">Lampiran (PDF/Gambar)</label>\r
              <input type="file" class="form-control form-control-sm"\r
                     accept=".pdf,image/*" (change)="onLampiranChange($event)">\r
              @if (lampiranNama()) {\r
                <div class="small text-muted mt-1">{{ lampiranNama() }}</div>\r
              }\r
            </div>\r
\r
            @if (form().jenisCuti === 'KHUSUS') {\r
              <div class="form-check mb-3">\r
                <input type="checkbox" class="form-check-input" id="mengurangiSisa"\r
                       [checked]="form().mengurangiSisaCuti"\r
                       (change)="updateForm('mengurangiSisaCuti', $any($event.target).checked)">\r
                <label class="form-check-label small" for="mengurangiSisa">\r
                  Mengurangi sisa cuti\r
                </label>\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm" (click)="closeForm()">Batal</button>\r
            <button class="btn btn-primary btn-sm" [disabled]="saving()" (click)="simpan()">\r
              {{ saving() ? 'Menyimpan...' : 'Simpan' }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Ubah Sisa Cuti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showSisaModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-edit me-2"></i>Ubah Sisa Cuti</h5>\r
            <button class="btn-close" (click)="showSisaModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label small">Sisa Cuti (hari)</label>\r
              <input type="number" min="0" class="form-control form-control-sm"\r
                     [ngModel]="sisaForm().sisaCuti"\r
                     (ngModelChange)="sisaForm.set({ ...sisaForm(), sisaCuti: $event })">\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label small">Tgl. Cuti Berakhir</label>\r
              <input type="date" class="form-control form-control-sm"\r
                     [ngModel]="sisaForm().tglCutiBerakhir"\r
                     (ngModelChange)="sisaForm.set({ ...sisaForm(), tglCutiBerakhir: $event })">\r
            </div>\r
\r
            <hr class="my-3">\r
            <h6 class="fw-bold mb-3">Pengaturan Pembaruan Otomatis</h6>\r
\r
            <!-- Periode -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-5 col-form-label small">Periode Pembaruan Otomatis</label>\r
              <div class="col-sm-7">\r
                <div class="input-group input-group-sm">\r
                  <input type="number" min="1" class="form-control"\r
                         [ngModel]="sisaForm().periodePembaruanBulan"\r
                         (ngModelChange)="sisaForm.set({ ...sisaForm(), periodePembaruanBulan: $event })">\r
                  <span class="input-group-text">Bulan</span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Jumlah cuti per pembaruan -->\r
            <div class="row mb-2 align-items-center">\r
              <label class="col-sm-5 col-form-label small">Jumlah Cuti per Pembaruan</label>\r
              <div class="col-sm-7">\r
                <input type="number" min="0" class="form-control form-control-sm"\r
                       [ngModel]="sisaForm().jumlahCutiPembaruan"\r
                       (ngModelChange)="sisaForm.set({ ...sisaForm(), jumlahCutiPembaruan: $event })">\r
              </div>\r
            </div>\r
\r
            <!-- Info text -->\r
            @if (sisaForm().pembaruanCutiAktif && sisaForm().tglPembaruanBerikutnya) {\r
              <div class="alert alert-info py-2 small d-flex align-items-start gap-2 mb-3">\r
                <i class="bx bx-info-circle fs-6 mt-1"></i>\r
                <div>\r
                  Sisa cuti akan otomatis ditambahkan sebanyak\r
                  <strong>{{ sisaForm().jumlahCutiPembaruan }}</strong>\r
                  pada <strong>{{ formatTglId(sisaForm().tglPembaruanBerikutnya) }}</strong>.\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- Sisa Cuti Sebelumnya -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-sm-5 col-form-label small">Sisa Cuti Sebelumnya</label>\r
              <div class="col-sm-7">\r
                <div class="form-check">\r
                  <input type="checkbox" class="form-check-input" id="sisaSebelumnya"\r
                         [checked]="sisaForm().tambahkanSisaCutiSebelumnya"\r
                         (change)="sisaForm.set({ ...sisaForm(), tambahkanSisaCutiSebelumnya: $any($event.target).checked })">\r
                  <label class="form-check-label small" for="sisaSebelumnya">\r
                    Tambahkan\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Aktifkan Pengaturan -->\r
            <div class="row mb-2 align-items-center">\r
              <label class="col-sm-5 col-form-label small">Aktifkan Pengaturan</label>\r
              <div class="col-sm-7">\r
                <div class="d-flex gap-3">\r
                  <div class="form-check">\r
                    <input type="radio" class="form-check-input" id="aktifYa" name="pembaruanCutiAktif"\r
                           [checked]="sisaForm().pembaruanCutiAktif"\r
                           (change)="sisaForm.set({ ...sisaForm(), pembaruanCutiAktif: true })">\r
                    <label class="form-check-label small" for="aktifYa">Ya</label>\r
                  </div>\r
                  <div class="form-check">\r
                    <input type="radio" class="form-check-input" id="aktifTidak" name="pembaruanCutiAktif"\r
                           [checked]="!sisaForm().pembaruanCutiAktif"\r
                           (change)="sisaForm.set({ ...sisaForm(), pembaruanCutiAktif: false })">\r
                    <label class="form-check-label small" for="aktifTidak">Tidak</label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm" (click)="showSisaModal.set(false)">Batal</button>\r
            <button class="btn btn-primary btn-sm" [disabled]="savingSisa()" (click)="simpanSisa()">\r
              {{ savingSisa() ? 'Menyimpan...' : 'Simpan' }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Tolak \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showTolakModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title text-danger">Tolak Pengajuan Cuti</h5>\r
            <button class="btn-close" (click)="showTolakModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            <label class="form-label small">Catatan Penolakan (opsional)</label>\r
            <textarea class="form-control form-control-sm" rows="3"\r
                      [ngModel]="tolakCatatan()" (ngModelChange)="tolakCatatan.set($event)"></textarea>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm" (click)="showTolakModal.set(false)">Batal</button>\r
            <button class="btn btn-danger btn-sm" (click)="konfirmasiTolak()">Tolak</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Riwayat \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showRiwayatModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-history me-2"></i>Riwayat Perubahan</h5>\r
            <button class="btn-close" (click)="showRiwayatModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body" style="max-height:60vh;overflow-y:auto">\r
            @if (riwayatLoading()) {\r
              <div class="text-center text-muted py-3">Memuat...</div>\r
            } @else if (riwayatList().length === 0) {\r
              <div class="text-center text-muted py-3">Belum ada riwayat.</div>\r
            } @else {\r
              @for (r of riwayatList(); track r.id) {\r
                <div class="border rounded p-2 mb-2">\r
                  <div class="d-flex justify-content-between">\r
                    <span class="badge bg-info">{{ r.tipe }}</span>\r
                    <span class="small text-muted">{{ formatDateTime(r.changedAt) }} \u2022 {{ r.changedBy }}</span>\r
                  </div>\r
                  @if (r.aktivitas.length) {\r
                    <ul class="small mb-0 mt-2 ps-3">\r
                      @for (a of r.aktivitas; track a.label) {\r
                        <li>\r
                          <b>{{ a.label }}</b>:\r
                          @if (a.lama) { <span class="text-muted">{{ a.lama }}</span> \u2192 }\r
                          <span>{{ a.baru }}</span>\r
                        </li>\r
                      }\r
                    </ul>\r
                  }\r
                </div>\r
              }\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Hapus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (konfirmasiHapusId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title text-danger"><i class="bx bx-trash me-2"></i>Hapus Cuti?</h5>\r
          </div>\r
          <div class="modal-body small text-muted">\r
            Data cuti akan dihapus permanen. Jika cuti telah disetujui, sisa cuti akan dikembalikan.\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm" (click)="konfirmasiHapusId.set(null)">Batal</button>\r
            <button class="btn btn-danger btn-sm" (click)="hapus(konfirmasiHapusId()!)">Ya, Hapus</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Toast -->\r
  @if (toastMsg()) {\r
    <div class="position-fixed bottom-0 end-0 m-3" style="z-index:1080">\r
      <div class="toast show align-items-center text-white border-0"\r
           [class.bg-success]="toastType()==='success'"\r
           [class.bg-danger]="toastType()==='danger'">\r
        <div class="d-flex">\r
          <div class="toast-body">{{ toastMsg() }}</div>\r
          <button class="btn-close btn-close-white me-2 m-auto" (click)="toastMsg.set('')"></button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ["/* src/app/features/karyawan/karyawan-cuti/karyawan-cuti.component.scss */\n.btn-group .btn.active {\n  background-color: #ede9fe;\n  border-color: #c4b5fd;\n  color: #5b21b6;\n}\n.dropdown-item:hover {\n  background-color: #f3f4f6;\n}\n/*# sourceMappingURL=karyawan-cuti.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanCutiComponent, { className: "KaryawanCutiComponent", filePath: "src/app/features/karyawan/karyawan-cuti/karyawan-cuti.component.ts", lineNumber: 26 });
})();
export {
  KaryawanCutiComponent
};
//# sourceMappingURL=chunk-ZHV3LGFP.js.map
