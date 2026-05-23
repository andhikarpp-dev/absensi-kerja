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
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/cuti/cuti-laporan/cuti-laporan.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _forTrack0 = ($index, $item) => $item.id;
function CutiLaporanComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("alert alert-", ctx_r0.toastType(), " alert-dismissible fade show py-2 mb-3"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.toastMsg(), " ");
  }
}
function CutiLaporanComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.namaDivisi);
  }
}
function CutiLaporanComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r3.namaJabatan);
  }
}
function CutiLaporanComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementEnd();
  }
}
function CutiLaporanComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CutiLaporanComponent_Conditional_38_For_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r5.sisaCuti);
  }
}
function CutiLaporanComponent_Conditional_38_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 39);
    \u0275\u0275conditionalCreate(11, CutiLaporanComponent_Conditional_38_For_22_Conditional_11_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 41)(15, "button", 42);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_38_For_22_Template_button_click_15_listener() {
      const k_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRiwayat(k_r5));
    });
    \u0275\u0275element(16, "i", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 41)(18, "button", 44);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_38_For_22_Template_button_click_18_listener() {
      const k_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPembaruan(k_r5));
    });
    \u0275\u0275element(19, "i", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, k_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r5.namaLengkap, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.divisiJabatanLabel(k_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDateDash(k_r5.tglMulaiBekerja));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDateDash(k_r5.tglMulaiDapatCuti));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r5.sisaCuti != null && k_r5.sisaCuti > 0 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDateDash(k_r5.tglCutiBeakhir));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("btn-success", k_r5.pembaruanCutiAktif)("btn-outline-secondary", !k_r5.pembaruanCutiAktif);
  }
}
function CutiLaporanComponent_Conditional_38_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, "Tidak ada data.");
    \u0275\u0275elementEnd()();
  }
}
function CutiLaporanComponent_Conditional_38_Conditional_24_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48)(1, "button", 49);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_38_Conditional_24_For_7_Template_button_click_1_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goPage(p_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r0.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8);
  }
}
function CutiLaporanComponent_Conditional_38_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "nav")(2, "ul", 47)(3, "li", 48)(4, "button", 49);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_38_Conditional_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.page() - 1));
    });
    \u0275\u0275text(5, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, CutiLaporanComponent_Conditional_38_Conditional_24_For_7_Template, 3, 3, "li", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "li", 48)(9, "button", 49);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_38_Conditional_24_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.page() + 1));
    });
    \u0275\u0275text(10, "\xBB");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.page() === ctx_r0.totalPages());
  }
}
function CutiLaporanComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead", 28)(3, "tr")(4, "th", 29);
    \u0275\u0275text(5, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Divisi & Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 30);
    \u0275\u0275text(9, "Tgl. Mulai Bekerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 31);
    \u0275\u0275text(11, "Tgl. Mulai Dapat Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 32);
    \u0275\u0275text(13, "Sisa Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 30);
    \u0275\u0275text(15, "Tgl. Cuti Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 33);
    \u0275\u0275text(17, "Riwayat Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 34);
    \u0275\u0275text(19, "Pembaruan Otomatis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, CutiLaporanComponent_Conditional_38_For_22_Template, 20, 13, "tr", null, _forTrack0, false, CutiLaporanComponent_Conditional_38_ForEmpty_23_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(24, CutiLaporanComponent_Conditional_38_Conditional_24_Template, 11, 4, "div", 35);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.pagedData());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.totalPages() > 1 ? 24 : -1);
  }
}
function CutiLaporanComponent_Conditional_39_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementEnd();
  }
}
function CutiLaporanComponent_Conditional_39_Conditional_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDate(r_r10.tanggal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.deskripsi);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", r_r10.jumlah > 0)("text-danger", r_r10.jumlah < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", r_r10.jumlah > 0 ? "+" : "", "", r_r10.jumlah, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.saldo);
  }
}
function CutiLaporanComponent_Conditional_39_Conditional_10_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2, "Belum ada riwayat.");
    \u0275\u0275elementEnd()();
  }
}
function CutiLaporanComponent_Conditional_39_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 60)(1, "thead", 28)(2, "tr")(3, "th");
    \u0275\u0275text(4, "Tanggal Pengajuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Deskripsi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 63);
    \u0275\u0275text(8, "Jumlah");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 63);
    \u0275\u0275text(10, "Saldo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, CutiLaporanComponent_Conditional_39_Conditional_10_For_13_Template, 9, 9, "tr", null, _forTrack0, false, CutiLaporanComponent_Conditional_39_Conditional_10_ForEmpty_14_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.riwayatList());
  }
}
function CutiLaporanComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 51);
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53)(3, "div", 54)(4, "div", 55)(5, "h5", 56);
    \u0275\u0275text(6, "Riwayat Transaksi Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 57);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275conditionalCreate(9, CutiLaporanComponent_Conditional_39_Conditional_9_Template, 2, 0, "div", 59)(10, CutiLaporanComponent_Conditional_39_Conditional_10_Template, 15, 1, "table", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61)(12, "button", 62);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_39_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRiwayat());
    });
    \u0275\u0275text(13, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.riwayatLoading() ? 9 : 10);
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementEnd();
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.mulaiBekerjaInfo(), " ");
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pembaruanError());
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r13, " Bulan");
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "strong");
    \u0275\u0275text(2, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "br");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.pembaruanInfo(), " ");
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, CutiLaporanComponent_Conditional_40_Conditional_10_Conditional_0_Template, 5, 1, "div", 71);
    \u0275\u0275conditionalCreate(1, CutiLaporanComponent_Conditional_40_Conditional_10_Conditional_1_Template, 2, 1, "div", 72);
    \u0275\u0275elementStart(2, "div", 73)(3, "label", 74);
    \u0275\u0275text(4, "Periode Pembaruan Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 75)(6, "select", 14);
    \u0275\u0275listener("ngModelChange", function CutiLaporanComponent_Conditional_40_Conditional_10_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fPeriode.set(+$event));
    });
    \u0275\u0275repeaterCreate(7, CutiLaporanComponent_Conditional_40_Conditional_10_For_8_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CutiLaporanComponent_Conditional_40_Conditional_10_Conditional_9_Template, 5, 1, "div", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77)(11, "label", 74);
    \u0275\u0275text(12, "Sisa Cuti Sebelumnya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 75)(14, "select", 14);
    \u0275\u0275listener("ngModelChange", function CutiLaporanComponent_Conditional_40_Conditional_10_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fSisaSebelumnya.set($event));
    });
    \u0275\u0275elementStart(15, "option", 78);
    \u0275\u0275text(16, "Tambahkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 79);
    \u0275\u0275text(18, "Hapus");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 77)(20, "label", 74);
    \u0275\u0275text(21, "Aktifkan Pengaturan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 80)(23, "div", 81)(24, "input", 82);
    \u0275\u0275listener("change", function CutiLaporanComponent_Conditional_40_Conditional_10_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fAktif.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 83);
    \u0275\u0275text(26, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 81)(28, "input", 84);
    \u0275\u0275listener("change", function CutiLaporanComponent_Conditional_40_Conditional_10_Template_input_change_28_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fAktif.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 85);
    \u0275\u0275text(30, "Tidak");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.mulaiBekerjaInfo() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pembaruanError() ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.fPeriode());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.periodeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.pembaruanInfo() ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.fSisaSebelumnya());
    \u0275\u0275advance(10);
    \u0275\u0275property("checked", ctx_r0.fAktif());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r0.fAktif());
  }
}
function CutiLaporanComponent_Conditional_40_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function CutiLaporanComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 51);
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 67)(3, "div", 54)(4, "div", 55)(5, "h5", 56);
    \u0275\u0275text(6, "Pengaturan Pembaruan Cuti Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 57);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePembaruan());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 68);
    \u0275\u0275conditionalCreate(9, CutiLaporanComponent_Conditional_40_Conditional_9_Template, 2, 0, "div", 59)(10, CutiLaporanComponent_Conditional_40_Conditional_10_Template, 31, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61)(12, "button", 69);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_40_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePembaruan());
    });
    \u0275\u0275conditionalCreate(13, CutiLaporanComponent_Conditional_40_Conditional_13_Template, 1, 0, "span", 70);
    \u0275\u0275text(14, " Proses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 62);
    \u0275\u0275listener("click", function CutiLaporanComponent_Conditional_40_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePembaruan());
    });
    \u0275\u0275text(16, "Batal");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.pembaruanLoading() ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.pembaruanSaving() || ctx_r0.pembaruanLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pembaruanSaving() ? 13 : -1);
  }
}
var CutiLaporanComponent = class _CutiLaporanComponent {
  constructor() {
    this.cutiSvc = inject(CutiService);
    this.divisiSvc = inject(DivisiService);
    this.jabatanSvc = inject(JabatanService);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
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
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jabatanList = signal([], ...ngDevMode ? [{ debugName: "jabatanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterDivisi = signal(null, ...ngDevMode ? [{ debugName: "filterDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterJabatan = signal(null, ...ngDevMode ? [{ debugName: "filterJabatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchInput = signal("", ...ngDevMode ? [{ debugName: "searchInput" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = 15;
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatKaryawan = signal(null, ...ngDevMode ? [{ debugName: "riwayatKaryawan" }] : (
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
    this.showPembaruanModal = signal(false, ...ngDevMode ? [{ debugName: "showPembaruanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pembaruanKaryawan = signal(null, ...ngDevMode ? [{ debugName: "pembaruanKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pembaruanSisa = signal(null, ...ngDevMode ? [{ debugName: "pembaruanSisa" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pembaruanLoading = signal(false, ...ngDevMode ? [{ debugName: "pembaruanLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pembaruanSaving = signal(false, ...ngDevMode ? [{ debugName: "pembaruanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pembaruanError = signal("", ...ngDevMode ? [{ debugName: "pembaruanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fPeriode = signal(12, ...ngDevMode ? [{ debugName: "fPeriode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fSisaSebelumnya = signal("tambahkan", ...ngDevMode ? [{ debugName: "fSisaSebelumnya" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fAktif = signal(true, ...ngDevMode ? [{ debugName: "fAktif" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered = computed(() => {
      const cari = this.filterCari().toLowerCase();
      return this.karyawanList().filter((k) => {
        if (this.filterDivisi() && k.divisiId !== this.filterDivisi())
          return false;
        if (this.filterJabatan() && k.jabatanId !== this.filterJabatan())
          return false;
        if (cari && !k.namaLengkap.toLowerCase().includes(cari))
          return false;
        return true;
      });
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagedData = computed(() => {
      const start = (this.page() - 1) * this.pageSize;
      return this.filtered().slice(start, start + this.pageSize);
    }, ...ngDevMode ? [{ debugName: "pagedData" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pembaruanInfo = computed(() => {
      const sisa = this.pembaruanSisa();
      if (!sisa)
        return "";
      const next = sisa.tglPembaruanBerikutnya;
      const jumlah = sisa.jumlahCutiPembaruan ?? 12;
      if (!next)
        return "";
      return `Sisa cuti akan otomatis ditambahkan sebanyak ${jumlah} pada ${this.fmtDate(next)}.`;
    }, ...ngDevMode ? [{ debugName: "pembaruanInfo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mulaiBekerjaInfo = computed(() => {
      const k = this.pembaruanKaryawan();
      if (!k?.tglMulaiBekerja)
        return "";
      const mulai = this.fmtDate(k.tglMulaiBekerja);
      const dapatCuti = k.tglMulaiDapatCuti ? this.fmtDate(k.tglMulaiDapatCuti) : this.addYear(k.tglMulaiBekerja, 1);
      return `Karyawan mulai bekerja pada ${mulai}, pertama kali mendapatkan cuti pada tanggal ${dapatCuti}.`;
    }, ...ngDevMode ? [{ debugName: "mulaiBekerjaInfo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.periodeOptions = [6, 12, 18, 24];
  }
  // ── Init ───────────────────────────────────────────────────
  ngOnInit() {
    this.loadAll();
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.jabatanSvc.findAll().subscribe((j) => this.jabatanList.set(j));
  }
  loadAll() {
    this.loading.set(true);
    this.error.set("");
    this.cutiSvc.getLaporanKaryawan().subscribe({
      next: (list) => {
        this.karyawanList.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Gagal memuat data.");
        this.loading.set(false);
      }
    });
  }
  applyFilter() {
    this.filterCari.set(this.searchInput());
    this.page.set(1);
  }
  resetFilter() {
    this.filterDivisi.set(null);
    this.filterJabatan.set(null);
    this.filterCari.set("");
    this.searchInput.set("");
    this.page.set(1);
  }
  goPage(p) {
    if (p >= 1 && p <= this.totalPages())
      this.page.set(p);
  }
  onDivisiChange() {
    this.page.set(1);
  }
  onJabatanChange() {
    this.page.set(1);
  }
  // ── Modal Riwayat Transaksi ────────────────────────────────
  openRiwayat(k) {
    this.riwayatKaryawan.set(k);
    this.riwayatList.set([]);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.cutiSvc.getRiwayatTransaksi(k.id).subscribe({
      next: (list) => {
        this.riwayatList.set(list);
        this.riwayatLoading.set(false);
      },
      error: () => {
        this.riwayatLoading.set(false);
      }
    });
  }
  closeRiwayat() {
    this.showRiwayatModal.set(false);
  }
  // ── Modal Pembaruan Otomatis ───────────────────────────────
  openPembaruan(k) {
    this.pembaruanKaryawan.set(k);
    this.pembaruanSisa.set(null);
    this.pembaruanError.set("");
    this.pembaruanLoading.set(true);
    this.showPembaruanModal.set(true);
    this.cutiSvc.getLaporanSisa(k.id).subscribe({
      next: (sisa) => {
        this.pembaruanSisa.set(sisa);
        this.fPeriode.set(sisa.periodePembaruanBulan ?? 12);
        this.fSisaSebelumnya.set(sisa.tambahkanSisaCutiSebelumnya ? "tambahkan" : "hapus");
        this.fAktif.set(sisa.pembaruanCutiAktif ?? false);
        this.pembaruanLoading.set(false);
      },
      error: () => {
        this.pembaruanLoading.set(false);
      }
    });
  }
  closePembaruan() {
    this.showPembaruanModal.set(false);
  }
  savePembaruan() {
    const k = this.pembaruanKaryawan();
    if (!k)
      return;
    this.pembaruanSaving.set(true);
    this.pembaruanError.set("");
    const req = {
      pembaruanCutiAktif: this.fAktif(),
      periodePembaruanBulan: this.fPeriode(),
      tambahkanSisaCutiSebelumnya: this.fSisaSebelumnya() === "tambahkan",
      jumlahCutiPembaruan: this.pembaruanSisa()?.jumlahCutiPembaruan ?? 12
    };
    this.cutiSvc.updateLaporanSisa(k.id, req).subscribe({
      next: (sisa) => {
        this.pembaruanSisa.set(sisa);
        this.pembaruanSaving.set(false);
        this.karyawanList.update((list) => list.map((item) => item.id === k.id ? __spreadProps(__spreadValues({}, item), {
          pembaruanCutiAktif: sisa.pembaruanCutiAktif,
          tglPembaruanBerikutnya: sisa.tglPembaruanBerikutnya
        }) : item));
        this.closePembaruan();
        this.showToast("Pengaturan pembaruan otomatis disimpan.");
      },
      error: () => {
        this.pembaruanError.set("Gagal menyimpan pengaturan.");
        this.pembaruanSaving.set(false);
      }
    });
  }
  // ── Helpers ────────────────────────────────────────────────
  fmtDate(d) {
    if (!d)
      return "-";
    const dateStr = d.substring(0, 10);
    const parts = dateStr.split("-");
    if (parts.length < 3)
      return d;
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
    const base = `${parseInt(parts[2])} ${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
    if (d.length > 10 && d.includes("T")) {
      const timePart = d.substring(11, 16);
      return `${base} @ ${timePart}`;
    }
    return base;
  }
  fmtDateDash(d) {
    if (!d)
      return "-";
    return d.substring(0, 10).split("-").reverse().join("-");
  }
  addYear(d, years) {
    const date = /* @__PURE__ */ new Date(d + "T00:00");
    date.setFullYear(date.getFullYear() + years);
    const m = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
    return `${date.getDate()} ${m[date.getMonth()]} ${date.getFullYear()}`;
  }
  divisiJabatanLabel(k) {
    const parts = [k.namaDivisi, k.namaJabatan].filter(Boolean);
    return parts.join(" - ") || "-";
  }
  showToast(msg, type = "success") {
    this.toastMsg.set(msg);
    this.toastType.set(type);
    setTimeout(() => this.toastMsg.set(""), 3e3);
  }
  static {
    this.\u0275fac = function CutiLaporanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CutiLaporanComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CutiLaporanComponent, selectors: [["app-cuti-laporan"]], decls: 41, vars: 9, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/cuti"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "mb-3", "fw-bold", "fs-5"], ["role", "alert", 3, "class"], [1, "card", "mb-3"], [1, "card-body", "py-3"], [1, "row", "g-2", "align-items-center"], [1, "col-auto"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "col-auto", "d-flex", "gap-1"], ["placeholder", "Search", 1, "form-control", "form-control-sm", 2, "min-width", "200px", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bx", "bx-search"], [1, "card"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "alert", "alert-danger", "m-3"], ["role", "alert"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "mb-0"], [1, "table-light"], [2, "width", "160px"], [2, "width", "130px"], [2, "width", "150px"], [2, "width", "90px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "130px"], [1, "d-flex", "justify-content-center", "py-3"], [1, "text-primary", "fw-semibold", "text-decoration-none", 3, "routerLink"], [1, "text-muted", "small"], [1, "small"], [1, "text-end", "pe-3"], [1, "fw-semibold"], [1, "text-center"], ["title", "Riwayat Transaksi Cuti", 1, "btn", "btn-sm", "btn-outline-secondary", "border-0", 3, "click"], [1, "bx", "bx-history", "fs-5"], ["title", "Pengaturan Pembaruan Otomatis", 1, "btn", "btn-sm", "border-0", 3, "click"], [1, "bx", "bx-cog", "fs-5"], ["colspan", "8", 1, "text-center", "text-muted", "py-4"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"], [1, "modal-backdrop", "fade", "show"], ["tabindex", "-1", 1, "modal", "d-block"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-0"], [1, "text-center", "py-4"], [1, "table", "table-bordered", "mb-0"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "text-end"], [1, "small", "text-nowrap"], [1, "text-end", "fw-semibold"], ["colspan", "4", 1, "text-center", "text-muted", "py-4"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "520px"], [1, "modal-body"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "alert", "alert-light", "border", "small", "mb-3"], [1, "alert", "alert-danger", "small", "py-2"], [1, "mb-3", "row", "align-items-start"], [1, "col-sm-5", "col-form-label", "small", "fw-semibold"], [1, "col-sm-7"], [1, "alert", "alert-light", "border", "small", "mt-2", "mb-0", "py-2"], [1, "mb-3", "row", "align-items-center"], ["value", "tambahkan"], ["value", "hapus"], [1, "col-sm-7", "d-flex", "gap-3"], [1, "form-check"], ["type", "checkbox", "id", "aktifYa", 1, "form-check-input", 3, "change", "checked"], ["for", "aktifYa", 1, "form-check-label", "small"], ["type", "checkbox", "id", "aktifTidak", 1, "form-check-input", 3, "change", "checked"], ["for", "aktifTidak", 1, "form-check-label", "small"]], template: function CutiLaporanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Dasbor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Cuti");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 7);
        \u0275\u0275text(11, "Laporan Cuti");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "h6", 8);
        \u0275\u0275text(13, "Laporan Cuti");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, CutiLaporanComponent_Conditional_14_Template, 2, 4, "div", 9);
        \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "select", 14);
        \u0275\u0275listener("ngModelChange", function CutiLaporanComponent_Template_select_ngModelChange_19_listener($event) {
          ctx.filterDivisi.set($event);
          return ctx.onDivisiChange();
        });
        \u0275\u0275elementStart(20, "option", 15);
        \u0275\u0275text(21, "--Filter Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, CutiLaporanComponent_For_23_Template, 2, 2, "option", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 13)(25, "select", 14);
        \u0275\u0275listener("ngModelChange", function CutiLaporanComponent_Template_select_ngModelChange_25_listener($event) {
          ctx.filterJabatan.set($event);
          return ctx.onJabatanChange();
        });
        \u0275\u0275elementStart(26, "option", 15);
        \u0275\u0275text(27, "--Filter Jabatan--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, CutiLaporanComponent_For_29_Template, 2, 2, "option", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 16)(31, "input", 17);
        \u0275\u0275listener("ngModelChange", function CutiLaporanComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.searchInput.set($event);
        })("keyup.enter", function CutiLaporanComponent_Template_input_keyup_enter_31_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 18);
        \u0275\u0275listener("click", function CutiLaporanComponent_Template_button_click_32_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275element(33, "i", 19);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(34, "div", 20)(35, "div", 21);
        \u0275\u0275conditionalCreate(36, CutiLaporanComponent_Conditional_36_Template, 2, 0, "div", 22)(37, CutiLaporanComponent_Conditional_37_Template, 2, 1, "div", 23)(38, CutiLaporanComponent_Conditional_38_Template, 25, 2);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(39, CutiLaporanComponent_Conditional_39_Template, 14, 1);
        \u0275\u0275conditionalCreate(40, CutiLaporanComponent_Conditional_40_Template, 17, 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.toastMsg() ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.filterDivisi());
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterJabatan());
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.jabatanList());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.searchInput());
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.loading() ? 36 : ctx.error() ? 37 : 38);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showRiwayatModal() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPembaruanModal() ? 40 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent], styles: ["\n/*# sourceMappingURL=cuti-laporan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CutiLaporanComponent, [{
    type: Component,
    args: [{ selector: "app-cuti-laporan", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Dasbor</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/cuti">Cuti</a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Laporan Cuti</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <h6 class="mb-3 fw-bold fs-5">Laporan Cuti</h6>\r
\r
  <!-- Toast -->\r
  @if (toastMsg()) {\r
    <div class="alert alert-{{ toastType() }} alert-dismissible fade show py-2 mb-3" role="alert">\r
      {{ toastMsg() }}\r
    </div>\r
  }\r
\r
  <!-- Filter -->\r
  <div class="card mb-3">\r
    <div class="card-body py-3">\r
      <div class="row g-2 align-items-center">\r
        <!-- Filter Divisi -->\r
        <div class="col-auto">\r
          <select class="form-select form-select-sm"\r
                  [ngModel]="filterDivisi()"\r
                  (ngModelChange)="filterDivisi.set($event); onDivisiChange()">\r
            <option [ngValue]="null">--Filter Divisi--</option>\r
            @for (d of divisiList(); track d.id) {\r
              <option [ngValue]="d.id">{{ d.namaDivisi }}</option>\r
            }\r
          </select>\r
        </div>\r
        <!-- Filter Jabatan -->\r
        <div class="col-auto">\r
          <select class="form-select form-select-sm"\r
                  [ngModel]="filterJabatan()"\r
                  (ngModelChange)="filterJabatan.set($event); onJabatanChange()">\r
            <option [ngValue]="null">--Filter Jabatan--</option>\r
            @for (j of jabatanList(); track j.id) {\r
              <option [ngValue]="j.id">{{ j.namaJabatan }}</option>\r
            }\r
          </select>\r
        </div>\r
        <!-- Search -->\r
        <div class="col-auto d-flex gap-1">\r
          <input class="form-control form-control-sm" placeholder="Search"\r
                 [ngModel]="searchInput()" (ngModelChange)="searchInput.set($event)"\r
                 (keyup.enter)="applyFilter()" style="min-width:200px">\r
          <button class="btn btn-sm btn-outline-secondary" (click)="applyFilter()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table -->\r
  <div class="card">\r
    <div class="card-body p-0">\r
      @if (loading()) {\r
        <div class="text-center py-5"><div class="spinner-border spinner-border-sm text-primary"></div></div>\r
      } @else if (error()) {\r
        <div class="alert alert-danger m-3">{{ error() }}</div>\r
      } @else {\r
        <div class="table-responsive">\r
          <table class="table table-bordered table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th style="width:160px">Nama</th>\r
                <th>Divisi &amp; Jabatan</th>\r
                <th style="width:130px">Tgl. Mulai Bekerja</th>\r
                <th style="width:150px">Tgl. Mulai Dapat Cuti</th>\r
                <th style="width:90px">Sisa Cuti</th>\r
                <th style="width:130px">Tgl. Cuti Berakhir</th>\r
                <th style="width:90px" class="text-center">Riwayat Cuti</th>\r
                <th style="width:130px" class="text-center">Pembaruan Otomatis</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (k of pagedData(); track k.id) {\r
                <tr>\r
                  <td>\r
                    <a [routerLink]="['/karyawan', k.id]" class="text-primary fw-semibold text-decoration-none">\r
                      {{ k.namaLengkap }}\r
                    </a>\r
                  </td>\r
                  <td class="text-muted small">{{ divisiJabatanLabel(k) }}</td>\r
                  <td class="small">{{ fmtDateDash(k.tglMulaiBekerja) }}</td>\r
                  <td class="small">{{ fmtDateDash(k.tglMulaiDapatCuti) }}</td>\r
                  <td class="text-end pe-3">\r
                    @if (k.sisaCuti != null && k.sisaCuti > 0) {\r
                      <span class="fw-semibold">{{ k.sisaCuti }}</span>\r
                    }\r
                  </td>\r
                  <td class="small">{{ fmtDateDash(k.tglCutiBeakhir) }}</td>\r
                  <td class="text-center">\r
                    <button class="btn btn-sm btn-outline-secondary border-0"\r
                            title="Riwayat Transaksi Cuti"\r
                            (click)="openRiwayat(k)">\r
                      <i class="bx bx-history fs-5"></i>\r
                    </button>\r
                  </td>\r
                  <td class="text-center">\r
                    <button class="btn btn-sm border-0"\r
                            [class.btn-success]="k.pembaruanCutiAktif"\r
                            [class.btn-outline-secondary]="!k.pembaruanCutiAktif"\r
                            title="Pengaturan Pembaruan Otomatis"\r
                            (click)="openPembaruan(k)">\r
                      <i class="bx bx-cog fs-5"></i>\r
                    </button>\r
                  </td>\r
                </tr>\r
              }\r
              @empty {\r
                <tr><td colspan="8" class="text-center text-muted py-4">Tidak ada data.</td></tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- Pagination -->\r
        @if (totalPages() > 1) {\r
          <div class="d-flex justify-content-center py-3">\r
            <nav>\r
              <ul class="pagination pagination-sm mb-0">\r
                <li class="page-item" [class.disabled]="page()===1">\r
                  <button class="page-link" (click)="goPage(page()-1)">&laquo;</button>\r
                </li>\r
                @for (p of pageNumbers(); track p) {\r
                  <li class="page-item" [class.active]="p===page()">\r
                    <button class="page-link" (click)="goPage(p)">{{ p }}</button>\r
                  </li>\r
                }\r
                <li class="page-item" [class.disabled]="page()===totalPages()">\r
                  <button class="page-link" (click)="goPage(page()+1)">&raquo;</button>\r
                </li>\r
              </ul>\r
            </nav>\r
          </div>\r
        }\r
      }\r
    </div>\r
  </div>\r
</app-layout>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- Modal Riwayat Transaksi Cuti                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
@if (showRiwayatModal()) {\r
  <div class="modal-backdrop fade show"></div>\r
  <div class="modal d-block" tabindex="-1">\r
    <div class="modal-dialog modal-lg modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">Riwayat Transaksi Cuti</h5>\r
          <button type="button" class="btn-close" (click)="closeRiwayat()"></button>\r
        </div>\r
        <div class="modal-body p-0">\r
          @if (riwayatLoading()) {\r
            <div class="text-center py-4"><div class="spinner-border spinner-border-sm text-primary"></div></div>\r
          } @else {\r
            <table class="table table-bordered mb-0">\r
              <thead class="table-light">\r
                <tr>\r
                  <th>Tanggal Pengajuan</th>\r
                  <th>Deskripsi</th>\r
                  <th class="text-end">Jumlah</th>\r
                  <th class="text-end">Saldo</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (r of riwayatList(); track r.id) {\r
                  <tr>\r
                    <td class="small text-nowrap">{{ fmtDate(r.tanggal) }}</td>\r
                    <td class="small">{{ r.deskripsi }}</td>\r
                    <td class="text-end fw-semibold"\r
                        [class.text-success]="r.jumlah > 0"\r
                        [class.text-danger]="r.jumlah < 0">\r
                      {{ r.jumlah > 0 ? '+' : '' }}{{ r.jumlah }}\r
                    </td>\r
                    <td class="text-end">{{ r.saldo }}</td>\r
                  </tr>\r
                }\r
                @empty {\r
                  <tr><td colspan="4" class="text-center text-muted py-4">Belum ada riwayat.</td></tr>\r
                }\r
              </tbody>\r
            </table>\r
          }\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm" (click)="closeRiwayat()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- Modal Pengaturan Pembaruan Cuti Otomatis                    -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
@if (showPembaruanModal()) {\r
  <div class="modal-backdrop fade show"></div>\r
  <div class="modal d-block" tabindex="-1">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:520px">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">Pengaturan Pembaruan Cuti Otomatis</h5>\r
          <button type="button" class="btn-close" (click)="closePembaruan()"></button>\r
        </div>\r
        <div class="modal-body">\r
          @if (pembaruanLoading()) {\r
            <div class="text-center py-4"><div class="spinner-border spinner-border-sm text-primary"></div></div>\r
          } @else {\r
            <!-- Info mulai bekerja -->\r
            @if (mulaiBekerjaInfo()) {\r
              <div class="alert alert-light border small mb-3">\r
                <strong>Info</strong><br>{{ mulaiBekerjaInfo() }}\r
              </div>\r
            }\r
\r
            @if (pembaruanError()) {\r
              <div class="alert alert-danger small py-2">{{ pembaruanError() }}</div>\r
            }\r
\r
            <div class="mb-3 row align-items-start">\r
              <label class="col-sm-5 col-form-label small fw-semibold">Periode Pembaruan Otomatis</label>\r
              <div class="col-sm-7">\r
                <select class="form-select form-select-sm"\r
                        [ngModel]="fPeriode()" (ngModelChange)="fPeriode.set(+$event)">\r
                  @for (p of periodeOptions; track p) {\r
                    <option [ngValue]="p">{{ p }} Bulan</option>\r
                  }\r
                </select>\r
                <!-- Info next renewal -->\r
                @if (pembaruanInfo()) {\r
                  <div class="alert alert-light border small mt-2 mb-0 py-2">\r
                    <strong>Info</strong><br>{{ pembaruanInfo() }}\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
\r
            <div class="mb-3 row align-items-center">\r
              <label class="col-sm-5 col-form-label small fw-semibold">Sisa Cuti Sebelumnya</label>\r
              <div class="col-sm-7">\r
                <select class="form-select form-select-sm"\r
                        [ngModel]="fSisaSebelumnya()" (ngModelChange)="fSisaSebelumnya.set($event)">\r
                  <option value="tambahkan">Tambahkan</option>\r
                  <option value="hapus">Hapus</option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <div class="mb-3 row align-items-center">\r
              <label class="col-sm-5 col-form-label small fw-semibold">Aktifkan Pengaturan</label>\r
              <div class="col-sm-7 d-flex gap-3">\r
                <div class="form-check">\r
                  <input class="form-check-input" type="checkbox" id="aktifYa"\r
                         [checked]="fAktif()" (change)="fAktif.set(true)">\r
                  <label class="form-check-label small" for="aktifYa">Ya</label>\r
                </div>\r
                <div class="form-check">\r
                  <input class="form-check-input" type="checkbox" id="aktifTidak"\r
                         [checked]="!fAktif()" (change)="fAktif.set(false)">\r
                  <label class="form-check-label small" for="aktifTidak">Tidak</label>\r
                </div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-primary btn-sm px-4"\r
                  [disabled]="pembaruanSaving() || pembaruanLoading()"\r
                  (click)="savePembaruan()">\r
            @if (pembaruanSaving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
            Proses\r
          </button>\r
          <button class="btn btn-secondary btn-sm" (click)="closePembaruan()">Batal</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/features/cuti/cuti-laporan/cuti-laporan.component.scss */\n/*# sourceMappingURL=cuti-laporan.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CutiLaporanComponent, { className: "CutiLaporanComponent", filePath: "src/app/features/cuti/cuti-laporan/cuti-laporan.component.ts", lineNumber: 21 });
})();
export {
  CutiLaporanComponent
};
//# sourceMappingURL=chunk-QU23JNGO.js.map
