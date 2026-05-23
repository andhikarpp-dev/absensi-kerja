import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
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
  HttpParams,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  catchError,
  computed,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/kehadiran/rekap-catatan-presensi/rekap-catatan-presensi.component.ts
var _c0 = (a0, a1, a2) => ({ presensi: a0, kolom: "masuk", libur: a1, hariIni: a2 });
var _c1 = (a0, a1, a2) => ({ presensi: a0, kolom: "keluar", libur: a1, hariIni: a2 });
function RekapCatatanPresensiComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275property("value", d_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.namaDivisi);
  }
}
function RekapCatatanPresensiComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bln_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275property("value", i_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bln_r3);
  }
}
function RekapCatatanPresensiComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thn_r5 = ctx.$implicit;
    \u0275\u0275property("value", thn_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(thn_r5);
  }
}
function RekapCatatanPresensiComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.error());
  }
}
function RekapCatatanPresensiComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementEnd();
  }
}
function RekapCatatanPresensiComponent_div_36_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r8 = ctx.$implicit;
    \u0275\u0275property("value", n_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r8);
  }
}
function RekapCatatanPresensiComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "label", 34);
    \u0275\u0275text(3, "Tampilkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 35);
    \u0275\u0275listener("change", function RekapCatatanPresensiComponent_div_36_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      ctx_r5.dtPageSize.set(+$event.target.value);
      return \u0275\u0275resetView(ctx_r5.dtPage.set(1));
    });
    \u0275\u0275template(5, RekapCatatanPresensiComponent_div_36_option_5_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 36);
    \u0275\u0275text(7, "data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "label", 34);
    \u0275\u0275text(10, "Cari:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 37);
    \u0275\u0275listener("input", function RekapCatatanPresensiComponent_div_36_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      ctx_r5.dtSearch.set($event.target.value);
      return \u0275\u0275resetView(ctx_r5.dtPage.set(1));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r5.dtPageSize());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.pageSizeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r5.dtSearch());
  }
}
function RekapCatatanPresensiComponent_div_37_ng_container_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, "(Hari ini)");
    \u0275\u0275elementEnd();
  }
}
function RekapCatatanPresensiComponent_div_37_ng_container_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hari_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", hari_r9.keteranganLibur, ") ");
  }
}
function RekapCatatanPresensiComponent_div_37_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 44);
    \u0275\u0275text(2);
    \u0275\u0275template(3, RekapCatatanPresensiComponent_div_37_ng_container_6_div_3_Template, 2, 0, "div", 45)(4, RekapCatatanPresensiComponent_div_37_ng_container_6_div_4_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const hari_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", hari_r9.hariIni ? "#d1fae5" : hari_r9.libur ? "#fee2e2" : "#f0f2f5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", hari_r9.namaHari, ", ", ctx_r5.formatTgl(hari_r9.tanggal), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", hari_r9.hariIni);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", hari_r9.libur && hari_r9.keteranganLibur);
  }
}
function RekapCatatanPresensiComponent_div_37_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 49);
    \u0275\u0275text(2, " Presensi Masuk ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 49);
    \u0275\u0275text(4, " Presensi Keluar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const hari_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", hari_r10.hariIni ? "#d1fae5" : hari_r10.libur ? "#fee2e2" : "#f0f2f5");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", hari_r10.hariIni ? "#d1fae5" : hari_r10.libur ? "#fee2e2" : "#f0f2f5");
  }
}
function RekapCatatanPresensiComponent_div_37_ng_container_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementContainer(1, 53)(2, 53);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const hari_r11 = ctx.$implicit;
    const row_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    const cellTpl_r13 = \u0275\u0275reference(40);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellTpl_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction3(4, _c0, ctx_r5.getPresensi(row_r12, hari_r11.tanggal), hari_r11.libur, hari_r11.hariIni));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellTpl_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction3(8, _c1, ctx_r5.getPresensi(row_r12, hari_r11.tanggal), hari_r11.libur, hari_r11.hariIni));
  }
}
function RekapCatatanPresensiComponent_div_37_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td", 50)(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, RekapCatatanPresensiComponent_div_37_ng_container_10_ng_container_7_Template, 3, 12, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r12.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.namaDivisi);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.data().hariList);
  }
}
function RekapCatatanPresensiComponent_div_37_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, " Tidak ada data ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 1 + ctx_r5.data().hariList.length * 2);
  }
}
function RekapCatatanPresensiComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead", 40)(3, "tr")(4, "th", 41);
    \u0275\u0275text(5, " Karyawan ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RekapCatatanPresensiComponent_div_37_ng_container_6_Template, 5, 6, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tr");
    \u0275\u0275template(8, RekapCatatanPresensiComponent_div_37_ng_container_8_Template, 5, 4, "ng-container", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, RekapCatatanPresensiComponent_div_37_ng_container_10_Template, 8, 3, "ng-container", 42)(11, RekapCatatanPresensiComponent_div_37_tr_11_Template, 3, 1, "tr", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r5.data().hariList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.data().hariList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.dtPaged());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.dtFiltered().length === 0);
  }
}
function RekapCatatanPresensiComponent_div_38_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 58)(1, "a", 59);
    \u0275\u0275listener("click", function RekapCatatanPresensiComponent_div_38_li_11_Template_a_click_1_listener() {
      const p_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.dtPage.set(p_r16));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r5.dtPage() === p_r16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16);
  }
}
function RekapCatatanPresensiComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "small", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 57)(5, "li", 58)(6, "a", 59);
    \u0275\u0275listener("click", function RekapCatatanPresensiComponent_div_38_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.dtPage.set(1));
    });
    \u0275\u0275text(7, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 58)(9, "a", 59);
    \u0275\u0275listener("click", function RekapCatatanPresensiComponent_div_38_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.dtPage.set(ctx_r5.dtPage() - 1));
    });
    \u0275\u0275text(10, "\u2039");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, RekapCatatanPresensiComponent_div_38_li_11_Template, 3, 3, "li", 60);
    \u0275\u0275elementStart(12, "li", 58)(13, "a", 59);
    \u0275\u0275listener("click", function RekapCatatanPresensiComponent_div_38_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.dtPage.set(ctx_r5.dtPage() + 1));
    });
    \u0275\u0275text(14, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 58)(16, "a", 59);
    \u0275\u0275listener("click", function RekapCatatanPresensiComponent_div_38_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.dtPage.set(ctx_r5.dtTotalPages()));
    });
    \u0275\u0275text(17, "\xBB");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r5.dtFiltered().length === 0 ? 0 : (ctx_r5.dtPage() - 1) * ctx_r5.dtPageSize() + 1, "\u2013", ctx_r5.Math.min(ctx_r5.dtPage() * ctx_r5.dtPageSize(), ctx_r5.dtFiltered().length), " dari ", ctx_r5.dtFiltered().length, " total data ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r5.dtPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r5.dtPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.pageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r5.dtPage() === ctx_r5.dtTotalPages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r5.dtPage() === ctx_r5.dtTotalPages());
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 52);
    \u0275\u0275text(2, "\u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 62);
    \u0275\u0275text(2, "Tidak/Belum Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const presensi_r17 = \u0275\u0275nextContext(2).presensi;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(presensi_r17.jamMasuk);
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const presensi_r17 = \u0275\u0275nextContext(2).presensi;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", presensi_r17.catatanMasuk, " ");
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RekapCatatanPresensiComponent_ng_template_39_ng_container_3_div_1_Template, 2, 1, "div", 63)(2, RekapCatatanPresensiComponent_ng_template_39_ng_container_3_div_2_Template, 2, 1, "div", 64)(3, RekapCatatanPresensiComponent_ng_template_39_ng_container_3_div_3_Template, 2, 0, "div", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const presensi_r17 = \u0275\u0275nextContext().presensi;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", presensi_r17.jamMasuk);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", presensi_r17.catatanMasuk);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !presensi_r17.jamMasuk && !presensi_r17.catatanMasuk);
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const presensi_r17 = \u0275\u0275nextContext(2).presensi;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(presensi_r17.jamKeluar);
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const presensi_r17 = \u0275\u0275nextContext(2).presensi;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022 ", presensi_r17.catatanKeluar, " ");
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RekapCatatanPresensiComponent_ng_template_39_ng_container_4_div_1_Template, 2, 1, "div", 63)(2, RekapCatatanPresensiComponent_ng_template_39_ng_container_4_div_2_Template, 2, 1, "div", 64)(3, RekapCatatanPresensiComponent_ng_template_39_ng_container_4_div_3_Template, 2, 0, "div", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const presensi_r17 = \u0275\u0275nextContext().presensi;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", presensi_r17.jamKeluar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", presensi_r17.catatanKeluar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !presensi_r17.jamKeluar && !presensi_r17.catatanKeluar);
  }
}
function RekapCatatanPresensiComponent_ng_template_39_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementContainerEnd();
  }
}
function RekapCatatanPresensiComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275template(1, RekapCatatanPresensiComponent_ng_template_39_ng_container_1_Template, 3, 0, "ng-container", 43)(2, RekapCatatanPresensiComponent_ng_template_39_ng_container_2_Template, 3, 0, "ng-container", 43)(3, RekapCatatanPresensiComponent_ng_template_39_ng_container_3_Template, 4, 3, "ng-container", 43)(4, RekapCatatanPresensiComponent_ng_template_39_ng_container_4_Template, 4, 3, "ng-container", 43)(5, RekapCatatanPresensiComponent_ng_template_39_ng_container_5_Template, 2, 0, "ng-container", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const presensi_r17 = ctx.presensi;
    const kolom_r18 = ctx.kolom;
    const libur_r19 = ctx.libur;
    const hariIni_r20 = ctx.hariIni;
    \u0275\u0275styleProp("background", hariIni_r20 ? "#f0fdf4" : libur_r19 ? "#fff5f5" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", libur_r19);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !libur_r19 && presensi_r17 && presensi_r17.tidakMasuk);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !libur_r19 && presensi_r17 && !presensi_r17.tidakMasuk && kolom_r18 === "masuk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !libur_r19 && presensi_r17 && !presensi_r17.tidakMasuk && kolom_r18 === "keluar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !libur_r19 && !presensi_r17);
  }
}
var BULAN_NAMES = [
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
var RekapCatatanPresensiComponent = class _RekapCatatanPresensiComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.divisiSvc = inject(DivisiService);
    this.Math = Math;
    this.today = /* @__PURE__ */ new Date();
    this.tanggalAktif = signal(this.toDateStr(this.today), ...ngDevMode ? [{ debugName: "tanggalAktif" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterDivisi = signal("", ...ngDevMode ? [{ debugName: "filterDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedBulan = signal(this.today.getMonth(), ...ngDevMode ? [{ debugName: "selectedBulan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedTahun = signal(this.today.getFullYear(), ...ngDevMode ? [{ debugName: "selectedTahun" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulanList = BULAN_NAMES;
    this.tahunList = Array.from({ length: 5 }, (_, i) => this.today.getFullYear() - 2 + i);
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
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
    this.pageSizeOptions = [10, 25, 50, 100];
    this.dtFiltered = computed(() => {
      const q = this.dtSearch().toLowerCase().trim();
      const rows = this.data()?.karyawanList ?? [];
      if (!q)
        return rows;
      return rows.filter((r) => r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "dtFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtTotalPages = computed(() => Math.max(1, Math.ceil(this.dtFiltered().length / this.dtPageSize())), ...ngDevMode ? [{ debugName: "dtTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPaged = computed(() => {
      const size = this.dtPageSize();
      const page = this.dtPage();
      return this.dtFiltered().slice((page - 1) * size, page * size);
    }, ...ngDevMode ? [{ debugName: "dtPaged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => Array.from({ length: this.dtTotalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    let params = new HttpParams().set("tanggal", this.tanggalAktif());
    if (this.filterDivisi())
      params = params.set("divisiId", this.filterDivisi());
    if (this.filterCari())
      params = params.set("cari", this.filterCari());
    this.http.get(`${environment.apiUrl}/absensi/admin/rekap-catatan-presensi`, { params }).pipe(map((r) => r?.data), catchError((err) => {
      this.error.set(err?.error?.message ?? "Gagal memuat data");
      return of(null);
    })).subscribe((d) => {
      this.data.set(d);
      this.dtPage.set(1);
      this.loading.set(false);
      if (d) {
        const senin = new Date(d.tanggalMulai);
        this.selectedBulan.set(senin.getMonth());
        this.selectedTahun.set(senin.getFullYear());
      }
    });
  }
  mingguSebelumnya() {
    const d = new Date(this.tanggalAktif());
    d.setDate(d.getDate() - 7);
    this.tanggalAktif.set(this.toDateStr(d));
    this.load();
  }
  mingguBerikutnya() {
    const d = new Date(this.tanggalAktif());
    d.setDate(d.getDate() + 7);
    this.tanggalAktif.set(this.toDateStr(d));
    this.load();
  }
  onBulanTahunChange() {
    const d = new Date(this.selectedTahun(), this.selectedBulan(), 1);
    this.tanggalAktif.set(this.toDateStr(d));
    this.load();
  }
  cari() {
    this.load();
  }
  // ── Helper ────────────────────────────────────────────
  getPresensi(row, tanggal) {
    return row.presensiPerHari?.[tanggal] ?? null;
  }
  formatTgl(iso) {
    if (!iso)
      return "";
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    const tgl = String(d.getDate()).padStart(2, "0");
    const bln = String(d.getMonth() + 1).padStart(2, "0");
    return `${tgl}/${bln}`;
  }
  toDateStr(d) {
    return d.toISOString().substring(0, 10);
  }
  static {
    this.\u0275fac = function RekapCatatanPresensiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RekapCatatanPresensiComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RekapCatatanPresensiComponent, selectors: [["app-rekap-catatan-presensi"]], decls: 41, vars: 12, consts: [["cellTpl", ""], [1, "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body", "p-3"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-3"], [1, "form-select", "form-select-sm", 2, "max-width", "180px", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-1"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 2, "max-width", "180px", 3, "input", "keyup.enter", "value"], [1, "btn", "btn-sm", "btn-success", "px-3", 3, "click"], [1, "bx", "bx-search"], [1, "d-flex", "justify-content-center", "align-items-center", "gap-2", "mb-3", "flex-wrap"], [1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "form-select", "form-select-sm", 2, "width", "130px", 3, "change", "value"], [1, "form-select", "form-select-sm", 2, "width", "90px", 3, "change", "value"], ["class", "alert alert-danger py-2", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mb-2", 4, "ngIf"], ["class", "table-responsive", "style", "overflow:auto", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger", "py-2"], [1, "text-center", "py-5"], [1, "spinner-border", "text-success"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], [1, "table-responsive", 2, "overflow", "auto"], [1, "table", "table-bordered", "align-middle", "mb-0", 2, "font-size", ".8rem", "min-width", "900px"], [2, "position", "sticky", "top", "0", "z-index", "10", "background", "#fff"], ["rowspan", "2", 1, "text-center", "align-middle", 2, "min-width", "180px", "background", "#f0f2f5", "position", "sticky", "left", "0", "z-index", "11"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colspan", "2", 1, "text-center"], ["style", "font-size:.72rem;color:#059669", 4, "ngIf"], ["style", "font-size:.7rem;color:#dc2626", 4, "ngIf"], [2, "font-size", ".72rem", "color", "#059669"], [2, "font-size", ".7rem", "color", "#dc2626"], [1, "text-center", 2, "min-width", "130px"], [2, "position", "sticky", "left", "0", "background", "#fff", "z-index", "5", "min-width", "180px"], [1, "fw-semibold"], [1, "text-muted", 2, "font-size", ".75rem"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-center", "py-4", "text-muted", "fw-semibold"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "text-muted"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "align-top", "text-center"], [1, "fw-semibold", "text-secondary", 2, "font-size", ".78rem"], ["class", "fw-semibold", 4, "ngIf"], ["class", "text-muted mt-1", "style", "font-size:.73rem;word-break:break-word", 4, "ngIf"], ["class", "text-muted", "style", "font-size:.75rem", 4, "ngIf"], [1, "text-muted", "mt-1", 2, "font-size", ".73rem", "word-break", "break-word"]], template: function RekapCatatanPresensiComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3, "Rekap Catatan Presensi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 5)(10, "span", 7);
        \u0275\u0275text(11, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 8);
        \u0275\u0275text(13, "Rekap Catatan Presensi");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "select", 12);
        \u0275\u0275listener("change", function RekapCatatanPresensiComponent_Template_select_change_17_listener($event) {
          return ctx.filterDivisi.set($event.target.value);
        });
        \u0275\u0275elementStart(18, "option", 13);
        \u0275\u0275text(19, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, RekapCatatanPresensiComponent_option_20_Template, 2, 2, "option", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 15)(22, "input", 16);
        \u0275\u0275listener("input", function RekapCatatanPresensiComponent_Template_input_input_22_listener($event) {
          return ctx.filterCari.set($event.target.value);
        })("keyup.enter", function RekapCatatanPresensiComponent_Template_input_keyup_enter_22_listener() {
          return ctx.cari();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 17);
        \u0275\u0275listener("click", function RekapCatatanPresensiComponent_Template_button_click_23_listener() {
          return ctx.cari();
        });
        \u0275\u0275element(24, "i", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 19)(26, "button", 20);
        \u0275\u0275listener("click", function RekapCatatanPresensiComponent_Template_button_click_26_listener() {
          return ctx.mingguSebelumnya();
        });
        \u0275\u0275text(27, " \u2190 Minggu sebelumnya ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 20);
        \u0275\u0275listener("click", function RekapCatatanPresensiComponent_Template_button_click_28_listener() {
          return ctx.mingguBerikutnya();
        });
        \u0275\u0275text(29, " Minggu berikutnya \u2192 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "select", 21);
        \u0275\u0275listener("change", function RekapCatatanPresensiComponent_Template_select_change_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.selectedBulan.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.onBulanTahunChange());
        });
        \u0275\u0275template(31, RekapCatatanPresensiComponent_option_31_Template, 2, 2, "option", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 22);
        \u0275\u0275listener("change", function RekapCatatanPresensiComponent_Template_select_change_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.selectedTahun.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.onBulanTahunChange());
        });
        \u0275\u0275template(33, RekapCatatanPresensiComponent_option_33_Template, 2, 2, "option", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(34, RekapCatatanPresensiComponent_div_34_Template, 2, 1, "div", 23)(35, RekapCatatanPresensiComponent_div_35_Template, 2, 0, "div", 24)(36, RekapCatatanPresensiComponent_div_36_Template, 12, 3, "div", 25)(37, RekapCatatanPresensiComponent_div_37_Template, 12, 4, "div", 26)(38, RekapCatatanPresensiComponent_div_38_Template, 18, 12, "div", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, RekapCatatanPresensiComponent_ng_template_39_Template, 6, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("value", ctx.filterDivisi());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.divisiList());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(8);
        \u0275\u0275property("value", ctx.selectedBulan());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.bulanList);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.selectedTahun());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.tahunList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && ctx.data());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RekapCatatanPresensiComponent, [{
    type: Component,
    args: [{ selector: "app-rekap-catatan-presensi", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="mb-3">\r
    <h4 class="fw-bold mb-0">Rekap Catatan Presensi</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><span class="text-primary">Kehadiran</span></li>\r
        <li class="breadcrumb-item active">Rekap Catatan Presensi</li>\r
      </ol>\r
    </nav>\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body p-3">\r
\r
      <!-- Filter Row -->\r
      <div class="d-flex flex-wrap gap-2 align-items-center mb-3">\r
        <!-- Divisi -->\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
          [value]="filterDivisi()"\r
          (change)="filterDivisi.set($any($event.target).value)">\r
          <option value="">--Divisi--</option>\r
          <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
        </select>\r
\r
        <!-- Cari -->\r
        <div class="d-flex gap-1">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari"\r
            style="max-width:180px"\r
            [value]="filterCari()"\r
            (input)="filterCari.set($any($event.target).value)"\r
            (keyup.enter)="cari()">\r
          <button class="btn btn-sm btn-success px-3" (click)="cari()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Navigasi minggu -->\r
      <div class="d-flex justify-content-center align-items-center gap-2 mb-3 flex-wrap">\r
        <button class="btn btn-success btn-sm px-3" (click)="mingguSebelumnya()">\r
          \u2190 Minggu sebelumnya\r
        </button>\r
        <button class="btn btn-success btn-sm px-3" (click)="mingguBerikutnya()">\r
          Minggu berikutnya \u2192\r
        </button>\r
\r
        <!-- Bulan & Tahun selector -->\r
        <select class="form-select form-select-sm" style="width:130px"\r
          [value]="selectedBulan()"\r
          (change)="selectedBulan.set(+$any($event.target).value); onBulanTahunChange()">\r
          <option *ngFor="let bln of bulanList; let i = index" [value]="i">{{ bln }}</option>\r
        </select>\r
        <select class="form-select form-select-sm" style="width:90px"\r
          [value]="selectedTahun()"\r
          (change)="selectedTahun.set(+$any($event.target).value); onBulanTahunChange()">\r
          <option *ngFor="let thn of tahunList" [value]="thn">{{ thn }}</option>\r
        </select>\r
      </div>\r
\r
      <!-- Error -->\r
      <div *ngIf="error()" class="alert alert-danger py-2">{{ error() }}</div>\r
\r
      <!-- Loading -->\r
      <div *ngIf="loading()" class="text-center py-5">\r
        <div class="spinner-border text-success"></div>\r
      </div>\r
\r
      <!-- DataTable controls -->\r
      <div *ngIf="!loading() && data()" class="d-flex justify-content-between align-items-center mb-2">\r
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
      <!-- Matrix Table -->\r
      <div *ngIf="!loading() && data()" class="table-responsive" style="overflow:auto">\r
        <table class="table table-bordered align-middle mb-0" style="font-size:.8rem;min-width:900px">\r
          <thead style="position:sticky;top:0;z-index:10;background:#fff">\r
            <!-- Baris 1: Karyawan + Hari -->\r
            <tr>\r
              <th rowspan="2" class="text-center align-middle"\r
                  style="min-width:180px;background:#f0f2f5;position:sticky;left:0;z-index:11">\r
                Karyawan\r
              </th>\r
              <ng-container *ngFor="let hari of data()!.hariList">\r
                <th colspan="2" class="text-center"\r
                    [style.background]="hari.hariIni ? '#d1fae5' : hari.libur ? '#fee2e2' : '#f0f2f5'">\r
                  {{ hari.namaHari }}, {{ formatTgl(hari.tanggal) }}\r
                  <div *ngIf="hari.hariIni" style="font-size:.72rem;color:#059669">(Hari ini)</div>\r
                  <div *ngIf="hari.libur && hari.keteranganLibur" style="font-size:.7rem;color:#dc2626">\r
                    ({{ hari.keteranganLibur }})\r
                  </div>\r
                </th>\r
              </ng-container>\r
            </tr>\r
            <!-- Baris 2: Presensi Masuk / Keluar per hari -->\r
            <tr>\r
              <ng-container *ngFor="let hari of data()!.hariList">\r
                <th class="text-center" style="min-width:130px"\r
                    [style.background]="hari.hariIni ? '#d1fae5' : hari.libur ? '#fee2e2' : '#f0f2f5'">\r
                  Presensi Masuk\r
                </th>\r
                <th class="text-center" style="min-width:130px"\r
                    [style.background]="hari.hariIni ? '#d1fae5' : hari.libur ? '#fee2e2' : '#f0f2f5'">\r
                  Presensi Keluar\r
                </th>\r
              </ng-container>\r
            </tr>\r
          </thead>\r
\r
          <tbody>\r
            <!-- Data rows (paged) -->\r
            <ng-container *ngFor="let row of dtPaged()">\r
              <tr>\r
                <!-- Kolom Karyawan -->\r
                <td style="position:sticky;left:0;background:#fff;z-index:5;min-width:180px">\r
                  <div class="fw-semibold">{{ row.namaKaryawan }}</div>\r
                  <div class="text-muted" style="font-size:.75rem">{{ row.namaDivisi }}</div>\r
                </td>\r
\r
                <!-- Kolom per hari -->\r
                <ng-container *ngFor="let hari of data()!.hariList">\r
                  <ng-container [ngTemplateOutlet]="cellTpl"\r
                    [ngTemplateOutletContext]="{ presensi: getPresensi(row, hari.tanggal), kolom: 'masuk', libur: hari.libur, hariIni: hari.hariIni }">\r
                  </ng-container>\r
                  <ng-container [ngTemplateOutlet]="cellTpl"\r
                    [ngTemplateOutletContext]="{ presensi: getPresensi(row, hari.tanggal), kolom: 'keluar', libur: hari.libur, hariIni: hari.hariIni }">\r
                  </ng-container>\r
                </ng-container>\r
              </tr>\r
            </ng-container>\r
\r
            <!-- Kosong -->\r
            <tr *ngIf="dtFiltered().length === 0">\r
              <td [attr.colspan]="1 + (data()!.hariList.length * 2)" class="text-center py-4 text-muted fw-semibold">\r
                Tidak ada data\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer: info + pagination -->\r
      <div *ngIf="!loading() && data()" class="d-flex justify-content-between align-items-center mt-3">\r
        <small class="text-muted">\r
          Menampilkan\r
          {{ dtFiltered().length === 0 ? 0 : (dtPage()-1)*dtPageSize()+1 }}\u2013{{ Math.min(dtPage()*dtPageSize(), dtFiltered().length) }}\r
          dari {{ dtFiltered().length }} total data\r
        </small>\r
        <nav>\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="dtPage()===1">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(1)">&laquo;</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===1">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(dtPage()-1)">&lsaquo;</a>\r
            </li>\r
            <li *ngFor="let p of pageNumbers()" class="page-item" [class.active]="dtPage()===p">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(p)">{{ p }}</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===dtTotalPages()">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(dtPage()+1)">&rsaquo;</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="dtPage()===dtTotalPages()">\r
              <a class="page-link" href="javascript:;" (click)="dtPage.set(dtTotalPages())">&raquo;</a>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
</app-layout>\r
\r
<!-- \u2500\u2500 Cell Template \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<ng-template #cellTpl let-presensi="presensi" let-kolom="kolom" let-libur="libur" let-hariIni="hariIni">\r
  <td class="align-top text-center"\r
      [style.background]="hariIni ? '#f0fdf4' : libur ? '#fff5f5' : ''">\r
\r
    <!-- Libur -->\r
    <ng-container *ngIf="libur">\r
      <span class="text-muted" style="font-size:.75rem">\u2013</span>\r
    </ng-container>\r
\r
    <!-- Tidak masuk -->\r
    <ng-container *ngIf="!libur && presensi && presensi.tidakMasuk">\r
      <span class="fw-semibold text-secondary" style="font-size:.78rem">Tidak/Belum Masuk</span>\r
    </ng-container>\r
\r
    <!-- Ada data masuk -->\r
    <ng-container *ngIf="!libur && presensi && !presensi.tidakMasuk && kolom === 'masuk'">\r
      <div *ngIf="presensi.jamMasuk" class="fw-semibold">{{ presensi.jamMasuk }}</div>\r
      <div *ngIf="presensi.catatanMasuk" class="text-muted mt-1" style="font-size:.73rem;word-break:break-word">\r
        \u2022 {{ presensi.catatanMasuk }}\r
      </div>\r
      <div *ngIf="!presensi.jamMasuk && !presensi.catatanMasuk" class="text-muted" style="font-size:.75rem">\u2013</div>\r
    </ng-container>\r
\r
    <!-- Ada data keluar -->\r
    <ng-container *ngIf="!libur && presensi && !presensi.tidakMasuk && kolom === 'keluar'">\r
      <div *ngIf="presensi.jamKeluar" class="fw-semibold">{{ presensi.jamKeluar }}</div>\r
      <div *ngIf="presensi.catatanKeluar" class="text-muted mt-1" style="font-size:.73rem;word-break:break-word">\r
        \u2022 {{ presensi.catatanKeluar }}\r
      </div>\r
      <div *ngIf="!presensi.jamKeluar && !presensi.catatanKeluar" class="text-muted" style="font-size:.75rem">\u2013</div>\r
    </ng-container>\r
\r
    <!-- Belum ada data sama sekali (hari depan) -->\r
    <ng-container *ngIf="!libur && !presensi">\r
      <span></span>\r
    </ng-container>\r
\r
  </td>\r
</ng-template>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RekapCatatanPresensiComponent, { className: "RekapCatatanPresensiComponent", filePath: "src/app/features/kehadiran/rekap-catatan-presensi/rekap-catatan-presensi.component.ts", lineNumber: 25 });
})();
export {
  RekapCatatanPresensiComponent
};
//# sourceMappingURL=chunk-CMCOJQ3U.js.map
