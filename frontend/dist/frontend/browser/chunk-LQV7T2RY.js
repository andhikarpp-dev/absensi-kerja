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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/lembur/review-lembur/review-lembur.component.ts
function ReviewLemburComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
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
function ReviewLemburComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function ReviewLemburComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275property("value", n_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4);
  }
}
function ReviewLemburComponent_div_49_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52)(2, "strong");
    \u0275\u0275text(3, "Menampilkan 0 dari 0 total data");
    \u0275\u0275elementEnd()()();
  }
}
function ReviewLemburComponent_div_49_tr_19_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r7.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function ReviewLemburComponent_div_49_tr_19_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", r_r7.jamKerjaMulai, " \u2013 ", r_r7.jamKerjaSelesai, ")");
  }
}
function ReviewLemburComponent_div_49_tr_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReviewLemburComponent_div_49_tr_19_div_16_span_2_Template, 2, 2, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Shift: ", r_r7.namaPolaKerja, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.jamKerjaMulai);
  }
}
function ReviewLemburComponent_div_49_tr_19_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.totalLembur, " ");
  }
}
function ReviewLemburComponent_div_49_tr_19_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ReviewLemburComponent_div_49_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 29);
    \u0275\u0275template(5, ReviewLemburComponent_div_49_tr_19_img_5_Template, 1, 1, "img", 54);
    \u0275\u0275elementStart(6, "div")(7, "div", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ReviewLemburComponent_div_49_tr_19_div_16_Template, 3, 2, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, ReviewLemburComponent_div_49_tr_19_span_18_Template, 2, 1, "span", 58)(19, ReviewLemburComponent_div_49_tr_19_span_19_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 49)(21, "div", 60)(22, "button", 61);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_49_tr_19_Template_button_click_22_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(r_r7));
    });
    \u0275\u0275element(23, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 63);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_49_tr_19_Template_button_click_24_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openHapus(r_r7));
    });
    \u0275\u0275element(25, "i", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.dtPage() - 1) * ctx_r2.dtPageSize() + i_r8 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r7.fotoProfil);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.namaDivisi);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r7.namaHari, ", ", ctx_r2.formatTanggal(r_r7.tanggal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", r_r7.jamMulaiLembur ?? "-", " \u2013 ", r_r7.jamSelesaiLembur ?? "-", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r7.totalLembur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r7.totalLembur);
  }
}
function ReviewLemburComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "table", 45)(2, "thead", 46)(3, "tr")(4, "th", 47);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 48);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_49_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("namaKaryawan"));
    });
    \u0275\u0275text(7, " Karyawan ");
    \u0275\u0275element(8, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 48);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_49_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("tanggal"));
    });
    \u0275\u0275text(10, " Waktu Lembur ");
    \u0275\u0275element(11, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 48);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_49_Template_th_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("totalLembur"));
    });
    \u0275\u0275text(13, " Total Lembur ");
    \u0275\u0275element(14, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 49);
    \u0275\u0275text(16, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, ReviewLemburComponent_div_49_tr_18_Template, 4, 0, "tr", 50)(19, ReviewLemburComponent_div_49_tr_19_Template, 26, 11, "tr", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("namaKaryawan")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("tanggal")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("totalLembur")));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.dtFiltered().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.dtPaged());
  }
}
function ReviewLemburComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "div", 68);
    \u0275\u0275text(2, " Memuat\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReviewLemburComponent_li_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 37)(1, "a", 38);
    \u0275\u0275listener("click", function ReviewLemburComponent_li_63_Template_a_click_1_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dtPage.set(p_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.dtPage() === p_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10);
  }
}
function ReviewLemburComponent_div_70_div_7_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Jam Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r12.jamKerjaMulai, " \u2013 ", r_r12.jamKerjaSelesai);
  }
}
function ReviewLemburComponent_div_70_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "table", 79)(2, "tr")(3, "th", 80);
    \u0275\u0275text(4, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tr")(8, "th");
    \u0275\u0275text(9, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr")(13, "th");
    \u0275\u0275text(14, "Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tr")(18, "th");
    \u0275\u0275text(19, "Mulai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tr")(23, "th");
    \u0275\u0275text(24, "Selesai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "th");
    \u0275\u0275text(29, "Total Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td")(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tr")(34, "th");
    \u0275\u0275text(35, "Shift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, ReviewLemburComponent_div_70_div_7_tr_38_Template, 5, 2, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r12.namaKaryawan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r12.namaDivisi ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", r_r12.namaHari, ", ", ctx_r2.formatTanggal(r_r12.tanggal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r12.jamMulaiLembur ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r12.jamSelesaiLembur ?? "-");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r12.totalLembur ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r12.namaPolaKerja ?? "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r12.jamKerjaMulai);
  }
}
function ReviewLemburComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "div", 72)(4, "h5", 73);
    \u0275\u0275text(5, "Detail Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_70_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ReviewLemburComponent_div_70_div_7_Template, 39, 9, "div", 75);
    \u0275\u0275elementStart(8, "div", 76)(9, "button", 77);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_70_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(10, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.detailTarget());
  }
}
function ReviewLemburComponent_div_71_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.hapusError());
  }
}
function ReviewLemburComponent_div_71_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function ReviewLemburComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 81)(2, "div", 71)(3, "div", 82)(4, "h5", 83);
    \u0275\u0275text(5, "Hapus Data Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_71_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHapus());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 78)(8, "p", 84);
    \u0275\u0275text(9, "Apakah Anda yakin ingin menghapus data lembur milik:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 85);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 86);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ReviewLemburComponent_div_71_div_14_Template, 2, 1, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 88)(16, "button", 77);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_71_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHapus());
    });
    \u0275\u0275text(17, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 89);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_71_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.konfirmasiHapus());
    });
    \u0275\u0275template(19, ReviewLemburComponent_div_71_span_19_Template, 1, 0, "span", 90);
    \u0275\u0275text(20, " Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.hapusTarget()) == null ? null : tmp_2_0.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (tmp_3_0 = ctx_r2.hapusTarget()) == null ? null : tmp_3_0.namaHari, ", ", ctx_r2.formatTanggal(((tmp_3_0 = ctx_r2.hapusTarget()) == null ? null : tmp_3_0.tanggal) ?? ""), " \u2014 Total: ", ((tmp_3_0 = ctx_r2.hapusTarget()) == null ? null : tmp_3_0.totalLembur) ?? "-", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hapusError());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.hapusSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hapusSaving());
  }
}
function ReviewLemburComponent_div_72_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "div", 98);
    \u0275\u0275text(2, " Memuat\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function ReviewLemburComponent_div_72_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.riwayatError());
  }
}
function ReviewLemburComponent_div_72_ng_container_11_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = ctx.$implicit;
    \u0275\u0275property("value", n_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r16);
  }
}
function ReviewLemburComponent_div_72_ng_container_11_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 101);
    \u0275\u0275text(2, " Belum ada riwayat penolakan ");
    \u0275\u0275elementEnd()();
  }
}
function ReviewLemburComponent_div_72_ng_container_11_tr_33_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 105);
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r17.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function ReviewLemburComponent_div_72_ng_container_11_tr_33_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r17.totalLembur, " ");
  }
}
function ReviewLemburComponent_div_72_ng_container_11_tr_33_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ReviewLemburComponent_div_72_ng_container_11_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 29);
    \u0275\u0275template(5, ReviewLemburComponent_div_72_ng_container_11_tr_33_img_5_Template, 1, 1, "img", 102);
    \u0275\u0275elementStart(6, "div")(7, "div", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 103);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 53);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275template(20, ReviewLemburComponent_div_72_ng_container_11_tr_33_span_20_Template, 2, 1, "span", 104)(21, ReviewLemburComponent_div_72_ng_container_11_tr_33_span_21_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 53);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.riwayatPage() - 1) * ctx_r2.riwayatPageSize() + i_r18 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r17.fotoProfil);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r17.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r17.namaDivisi);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r17.namaHari);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTanggal(r_r17.tanggalAbsensi));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r17.jamMulaiLembur ?? "-", " \u2013 ", r_r17.jamSelesaiLembur ?? "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r17.totalLembur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r17.totalLembur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r17.dihapusOleh ?? "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(r_r17.dihapusAt));
  }
}
function ReviewLemburComponent_div_72_ng_container_11_li_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 37)(1, "a", 38);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_ng_container_11_li_45_Template_a_click_1_listener() {
      const p_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(p_r20));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.riwayatPage() === p_r20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r20);
  }
}
function ReviewLemburComponent_div_72_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29)(3, "label", 30);
    \u0275\u0275text(4, "Tampilkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 31);
    \u0275\u0275listener("change", function ReviewLemburComponent_div_72_ng_container_11_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.riwayatPageSize.set(+$event.target.value);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(1));
    });
    \u0275\u0275template(6, ReviewLemburComponent_div_72_ng_container_11_option_6_Template, 2, 2, "option", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8, "data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 29)(10, "label", 30);
    \u0275\u0275text(11, "Cari:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 99);
    \u0275\u0275listener("input", function ReviewLemburComponent_div_72_ng_container_11_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.riwayatSearch.set($event.target.value);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(1));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 44)(14, "table", 100)(15, "thead", 46)(16, "tr")(17, "th", 47);
    \u0275\u0275text(18, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Tanggal Absensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Waktu Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Total Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Dihapus Oleh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Waktu Penolakan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, ReviewLemburComponent_div_72_ng_container_11_tr_32_Template, 3, 0, "tr", 50)(33, ReviewLemburComponent_div_72_ng_container_11_tr_33_Template, 28, 12, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 35)(35, "small", 13);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "nav")(38, "ul", 36)(39, "li", 37)(40, "a", 38);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_ng_container_11_Template_a_click_40_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(1));
    });
    \u0275\u0275text(41, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li", 37)(43, "a", 38);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_ng_container_11_Template_a_click_43_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(ctx_r2.riwayatPage() - 1));
    });
    \u0275\u0275text(44, "\u2039");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, ReviewLemburComponent_div_72_ng_container_11_li_45_Template, 3, 3, "li", 39);
    \u0275\u0275elementStart(46, "li", 37)(47, "a", 38);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_ng_container_11_Template_a_click_47_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(ctx_r2.riwayatPage() + 1));
    });
    \u0275\u0275text(48, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "li", 37)(50, "a", 38);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_ng_container_11_Template_a_click_50_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.riwayatPage.set(ctx_r2.riwayatTotalPages()));
    });
    \u0275\u0275text(51, "\xBB");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.riwayatPageSize());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pageSizeOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.riwayatSearch());
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r2.riwayatFiltered().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.riwayatPaged());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r2.riwayatFiltered().length === 0 ? 0 : (ctx_r2.riwayatPage() - 1) * ctx_r2.riwayatPageSize() + 1, "\u2013", ctx_r2.Math.min(ctx_r2.riwayatPage() * ctx_r2.riwayatPageSize(), ctx_r2.riwayatFiltered().length), " dari ", ctx_r2.riwayatFiltered().length, " total data ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.riwayatPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.riwayatPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.riwayatPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.riwayatPage() === ctx_r2.riwayatTotalPages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.riwayatPage() === ctx_r2.riwayatTotalPages());
  }
}
function ReviewLemburComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "div", 71)(3, "div", 72)(4, "h5", 73);
    \u0275\u0275element(5, "i", 95);
    \u0275\u0275text(6, "Riwayat Penolakan Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 74);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275template(9, ReviewLemburComponent_div_72_div_9_Template, 3, 0, "div", 96)(10, ReviewLemburComponent_div_72_div_10_Template, 2, 1, "div", 27)(11, ReviewLemburComponent_div_72_ng_container_11_Template, 52, 17, "ng-container", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 76)(13, "button", 77);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_72_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeRiwayat());
    });
    \u0275\u0275text(14, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.riwayatLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.riwayatError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.riwayatLoading());
  }
}
function ReviewLemburComponent_div_73_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r22 = ctx.$implicit;
    \u0275\u0275property("value", d_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r22.namaDivisi);
  }
}
function ReviewLemburComponent_div_73_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.eksporError());
  }
}
function ReviewLemburComponent_div_73_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275text(2, " Email sedang diproses dan akan dikirim ke ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " dalam beberapa menit. Modal akan tertutup otomatis\u2026 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.eksporEmail());
  }
}
function ReviewLemburComponent_div_73_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function ReviewLemburComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 107)(2, "div", 71)(3, "div", 108)(4, "h5", 73);
    \u0275\u0275text(5, "Ekspor Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_73_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEkspor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 78)(8, "div", 109)(9, "label", 110);
    \u0275\u0275text(10, " Tanggal ");
    \u0275\u0275elementStart(11, "span", 111);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 112)(14, "div", 29)(15, "input", 113);
    \u0275\u0275listener("change", function ReviewLemburComponent_div_73_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporDari.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 113);
    \u0275\u0275listener("change", function ReviewLemburComponent_div_73_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporSampai.set($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 109)(20, "label", 110);
    \u0275\u0275text(21, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 112)(23, "select", 114);
    \u0275\u0275listener("change", function ReviewLemburComponent_div_73_Template_select_change_23_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporDivisi.set($event.target.value));
    });
    \u0275\u0275elementStart(24, "option", 15);
    \u0275\u0275text(25, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ReviewLemburComponent_div_73_option_26_Template, 2, 2, "option", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 109)(28, "label", 110);
    \u0275\u0275text(29, "Kata kunci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 112)(31, "input", 115);
    \u0275\u0275listener("input", function ReviewLemburComponent_div_73_Template_input_input_31_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporCari.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 116)(33, "label", 110);
    \u0275\u0275text(34, " Kirimkan File ke Email ");
    \u0275\u0275elementStart(35, "span", 111);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 112)(38, "input", 115);
    \u0275\u0275listener("input", function ReviewLemburComponent_div_73_Template_input_input_38_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporEmail.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 117);
    \u0275\u0275text(40, "Pisah email dengan koma jika lebih dari satu.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 118)(42, "div", 119)(43, "div", 120);
    \u0275\u0275text(44, " Waktu yang dibutuhkan untuk menerima email hasil ekspor excel maksimal 20 menit, tergantung banyaknya data yang dikumpulkan. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, ReviewLemburComponent_div_73_div_45_Template, 2, 1, "div", 87)(46, ReviewLemburComponent_div_73_div_46_Template, 6, 1, "div", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 76)(48, "button", 122);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_73_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prosesEkspor());
    });
    \u0275\u0275template(49, ReviewLemburComponent_div_73_span_49_Template, 1, 0, "span", 90);
    \u0275\u0275text(50, " Proses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 77);
    \u0275\u0275listener("click", function ReviewLemburComponent_div_73_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEkspor());
    });
    \u0275\u0275text(52, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("value", ctx_r2.eksporDari());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.eksporSampai());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.eksporDivisi());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.divisiList());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.eksporCari());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.eksporEmail());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.eksporError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.eksporSukses());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.eksporProses());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.eksporProses());
  }
}
var ReviewLemburComponent = class _ReviewLemburComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.divisiSvc = inject(DivisiService);
    this.Math = Math;
    this.today = /* @__PURE__ */ new Date();
    this.sebulanLalu = new Date(this.today.getFullYear(), this.today.getMonth() - 1, this.today.getDate());
    this.filterDari = signal(this.toDateStr(this.sebulanLalu), ...ngDevMode ? [{ debugName: "filterDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterSampai = signal(this.toDateStr(this.today), ...ngDevMode ? [{ debugName: "filterSampai" }] : (
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
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
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
    this.showDetailModal = signal(false, ...ngDevMode ? [{ debugName: "showDetailModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailTarget = signal(null, ...ngDevMode ? [{ debugName: "detailTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showHapusModal = signal(false, ...ngDevMode ? [{ debugName: "showHapusModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hapusTarget = signal(null, ...ngDevMode ? [{ debugName: "hapusTarget" }] : (
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
    this.showEksporModal = signal(false, ...ngDevMode ? [{ debugName: "showEksporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporDari = signal(this.toDateStr(this.sebulanLalu), ...ngDevMode ? [{ debugName: "eksporDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporSampai = signal(this.toDateStr(this.today), ...ngDevMode ? [{ debugName: "eksporSampai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporDivisi = signal("", ...ngDevMode ? [{ debugName: "eksporDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporCari = signal("", ...ngDevMode ? [{ debugName: "eksporCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporEmail = signal("", ...ngDevMode ? [{ debugName: "eksporEmail" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporError = signal("", ...ngDevMode ? [{ debugName: "eksporError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporProses = signal(false, ...ngDevMode ? [{ debugName: "eksporProses" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporSukses = signal(false, ...ngDevMode ? [{ debugName: "eksporSukses" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatRows = signal([], ...ngDevMode ? [{ debugName: "riwayatRows" }] : (
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
    this.riwayatSearch = signal("", ...ngDevMode ? [{ debugName: "riwayatSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPage = signal(1, ...ngDevMode ? [{ debugName: "riwayatPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPageSize = signal(10, ...ngDevMode ? [{ debugName: "riwayatPageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatFiltered = computed(() => {
      const q = this.riwayatSearch().toLowerCase();
      const rows = this.riwayatRows();
      if (!q)
        return rows;
      return rows.filter((r) => r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q) || (r.totalLembur ?? "").toLowerCase().includes(q) || (r.dihapusOleh ?? "").toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "riwayatFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatTotalPages = computed(() => Math.max(1, Math.ceil(this.riwayatFiltered().length / this.riwayatPageSize())), ...ngDevMode ? [{ debugName: "riwayatTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPaged = computed(() => {
      const s = this.riwayatPageSize(), p = this.riwayatPage();
      return this.riwayatFiltered().slice((p - 1) * s, p * s);
    }, ...ngDevMode ? [{ debugName: "riwayatPaged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPageNumbers = computed(() => Array.from({ length: this.riwayatTotalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "riwayatPageNumbers" }] : (
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
    this.sortCol = signal("", ...ngDevMode ? [{ debugName: "sortCol" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortDir = signal("", ...ngDevMode ? [{ debugName: "sortDir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSizeOptions = [10, 25, 50, 100];
    this.dtFiltered = computed(() => {
      const q = this.dtSearch().toLowerCase();
      let data = this.rows();
      if (q)
        data = data.filter((r) => r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q) || (r.totalLembur ?? "").toLowerCase().includes(q));
      const col = this.sortCol();
      const dir = this.sortDir();
      if (col && dir) {
        data = [...data].sort((a, b) => {
          const av = String(a[col] ?? "");
          const bv = String(b[col] ?? "");
          return dir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
        });
      }
      return data;
    }, ...ngDevMode ? [{ debugName: "dtFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtTotalPages = computed(() => Math.max(1, Math.ceil(this.dtFiltered().length / this.dtPageSize())), ...ngDevMode ? [{ debugName: "dtTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtPaged = computed(() => {
      const s = this.dtPageSize(), p = this.dtPage();
      return this.dtFiltered().slice((p - 1) * s, p * s);
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
    let params = new HttpParams();
    if (this.filterDari())
      params = params.set("dari", this.filterDari());
    if (this.filterSampai())
      params = params.set("sampai", this.filterSampai());
    if (this.filterDivisi())
      params = params.set("divisiId", this.filterDivisi());
    if (this.filterCari())
      params = params.set("cari", this.filterCari());
    this.http.get(`${environment.apiUrl}/absensi/admin/lembur`, { params }).pipe(map((r) => r?.data ?? []), catchError((err) => {
      this.error.set(err?.error?.message ?? "Gagal memuat data");
      return of([]);
    })).subscribe((d) => {
      this.rows.set(d);
      this.dtPage.set(1);
      this.loading.set(false);
    });
  }
  openRiwayat() {
    this.showRiwayatModal.set(true);
    this.riwayatSearch.set("");
    this.riwayatPage.set(1);
    this.riwayatLoading.set(true);
    this.riwayatError.set("");
    let params = new HttpParams();
    if (this.filterDivisi())
      params = params.set("divisiId", this.filterDivisi());
    this.http.get(`${environment.apiUrl}/absensi/admin/lembur/riwayat`, { params }).pipe(map((r) => r?.data ?? []), catchError((err) => {
      this.riwayatError.set(err?.error?.message ?? "Gagal memuat riwayat");
      return of([]);
    })).subscribe((d) => {
      this.riwayatRows.set(d);
      this.riwayatLoading.set(false);
    });
  }
  closeRiwayat() {
    this.showRiwayatModal.set(false);
  }
  sort(col) {
    if (this.sortCol() === col) {
      const next = this.sortDir() === "asc" ? "desc" : this.sortDir() === "desc" ? "" : "asc";
      this.sortDir.set(next);
      if (!next)
        this.sortCol.set("");
    } else {
      this.sortCol.set(col);
      this.sortDir.set("asc");
    }
  }
  sortIcon(col) {
    if (this.sortCol() !== col)
      return "bx-sort";
    return this.sortDir() === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  openDetail(r) {
    this.detailTarget.set(r);
    this.showDetailModal.set(true);
  }
  closeDetail() {
    this.showDetailModal.set(false);
  }
  openHapus(r) {
    this.hapusTarget.set(r);
    this.hapusError.set("");
    this.showHapusModal.set(true);
  }
  closeHapus() {
    this.showHapusModal.set(false);
  }
  konfirmasiHapus() {
    const t = this.hapusTarget();
    if (!t)
      return;
    this.hapusSaving.set(true);
    this.http.delete(`${environment.apiUrl}/absensi/admin/lembur/${t.id}`).subscribe({
      next: () => {
        this.rows.update((rows) => rows.filter((r) => r.id !== t.id));
        this.hapusSaving.set(false);
        this.showHapusModal.set(false);
      },
      error: (err) => {
        this.hapusError.set(err?.error?.message ?? "Gagal menghapus");
        this.hapusSaving.set(false);
      }
    });
  }
  openEkspor() {
    this.eksporDari.set(this.filterDari());
    this.eksporSampai.set(this.filterSampai());
    this.eksporDivisi.set(this.filterDivisi());
    this.eksporCari.set(this.filterCari());
    this.eksporEmail.set("");
    this.eksporError.set("");
    this.eksporSukses.set(false);
    this.showEksporModal.set(true);
  }
  closeEkspor() {
    this.showEksporModal.set(false);
    this.eksporSukses.set(false);
  }
  prosesEkspor() {
    this.eksporError.set("");
    this.eksporSukses.set(false);
    if (!this.eksporDari() || !this.eksporSampai()) {
      this.eksporError.set("Tanggal wajib diisi.");
      return;
    }
    if (!this.eksporEmail().trim()) {
      this.eksporError.set("Email wajib diisi.");
      return;
    }
    this.eksporProses.set(true);
    let params = new HttpParams().set("dari", this.eksporDari()).set("sampai", this.eksporSampai()).set("email", this.eksporEmail().trim());
    if (this.eksporDivisi())
      params = params.set("divisiId", this.eksporDivisi());
    if (this.eksporCari())
      params = params.set("cari", this.eksporCari());
    this.http.post(`${environment.apiUrl}/absensi/admin/lembur/ekspor-email`, null, { params }).pipe(catchError((err) => {
      this.eksporError.set(err?.error?.message ?? "Gagal memproses ekspor");
      return of(null);
    })).subscribe((res) => {
      this.eksporProses.set(false);
      if (res !== null) {
        this.eksporSukses.set(true);
        setTimeout(() => this.closeEkspor(), 3e3);
      }
    });
  }
  formatTanggal(iso) {
    if (!iso)
      return "-";
    const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  formatDateTime(iso) {
    if (!iso)
      return "-";
    const d = new Date(iso);
    return d.toLocaleString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  toDateStr(d) {
    return d.toISOString().substring(0, 10);
  }
  static {
    this.\u0275fac = function ReviewLemburComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewLemburComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewLemburComponent, selectors: [["app-review-lembur"]], decls: 74, vars: 27, consts: [["loadTpl", ""], [1, "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-3"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "145px", 3, "change", "value"], [1, "text-muted"], [1, "form-select", "form-select-sm", 2, "max-width", "180px", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-1"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 2, "max-width", "170px", 3, "input", "keyup.enter", "value"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-search"], [1, "ms-auto", "d-flex", "gap-2"], ["title", "Riwayat Penolakan", 1, "btn", "btn-danger", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-history"], ["title", "Ekspor Excel", 1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-spreadsheet"], [1, "rounded", "p-2", "mb-3", 2, "background", "#f8f9fa", "font-size", ".82rem", "color", "#6c757d", "font-family", "monospace"], ["class", "alert alert-danger py-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.4)", 4, "ngIf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.45)", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger", "py-2"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "background", "#f0f2f5"], [2, "width", "36px"], [2, "cursor", "pointer", 3, "click"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "5", 1, "text-center", "py-4"], [1, "text-muted", 2, "font-size", ".78rem"], ["class", "rounded-circle", "style", "width:36px;height:36px;object-fit:cover", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], [1, "fw-semibold"], [1, "text-muted", 2, "font-size", ".75rem"], ["class", "text-muted", "style", "font-size:.75rem", 4, "ngIf"], ["class", "badge bg-warning-subtle text-warning fw-semibold px-2", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "justify-content-center", "gap-1"], ["title", "Detail", 1, "btn", "btn-sm", "btn-outline-secondary", "px-2", 3, "click"], [1, "bx", "bx-info-circle"], ["title", "Hapus lembur", 1, "btn", "btn-sm", "btn-outline-danger", "px-2", 3, "click"], [1, "bx", "bx-trash"], ["onerror", "this.style.display='none'", 1, "rounded-circle", 2, "width", "36px", "height", "36px", "object-fit", "cover", 3, "src"], [1, "badge", "bg-warning-subtle", "text-warning", "fw-semibold", "px-2"], [1, "text-center", "py-5"], [1, "spinner-border", "spinner-border-sm", "text-primary"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.4)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], [1, "modal-body"], [1, "table", "table-borderless", "mb-0", 2, "font-size", ".88rem"], [2, "width", "40%"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "420px"], [1, "modal-header", "border-0"], [1, "modal-title", "fw-bold", "text-danger"], [1, "mb-1"], [1, "fw-semibold", "mb-0"], [1, "text-muted", 2, "font-size", ".83rem"], ["class", "alert alert-danger py-2 mt-2", 4, "ngIf"], [1, "modal-footer", "border-0"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "mt-2"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.45)"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "bx", "bx-history", "me-1", "text-danger"], ["class", "text-center py-4", 4, "ngIf"], [1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "text-danger"], ["type", "text", "placeholder", "Nama karyawan\u2026", 1, "form-control", "form-control-sm", 2, "width", "200px", 3, "input", "value"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".84rem"], ["colspan", "7", 1, "text-center", "py-4", "text-muted", "fw-semibold"], ["class", "rounded-circle", "style", "width:32px;height:32px;object-fit:cover", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], [1, "text-muted", 2, "font-size", ".74rem"], ["class", "badge bg-danger-subtle text-danger fw-semibold", 4, "ngIf"], ["onerror", "this.style.display='none'", 1, "rounded-circle", 2, "width", "32px", "height", "32px", "object-fit", "cover", 3, "src"], [1, "badge", "bg-danger-subtle", "text-danger", "fw-semibold"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "520px"], [1, "modal-header", "border-bottom"], [1, "mb-3", "row", "align-items-center"], [1, "col-sm-4", "col-form-label", 2, "font-size", ".88rem"], [1, "text-danger"], [1, "col-sm-8"], ["type", "date", 1, "form-control", "form-control-sm", 3, "change", "value"], [1, "form-select", "form-select-sm", 3, "change", "value"], ["type", "text", "placeholder", "", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "mb-2", "row", "align-items-center"], [1, "text-muted", "mt-1", 2, "font-size", ".78rem"], [1, "row"], [1, "col-sm-8", "offset-sm-4"], [1, "rounded", "p-3", "mt-1", 2, "background", "#6c63ff", "color", "#fff", "font-size", ".82rem"], ["class", "alert alert-success py-2 mt-2", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "alert", "alert-success", "py-2", "mt-2"], [1, "bx", "bx-check-circle", "me-1"]], template: function ReviewLemburComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3, "Review Lembur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 5)(10, "span", 7);
        \u0275\u0275text(11, "Lembur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 8);
        \u0275\u0275text(13, "Review Lembur");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "input", 12);
        \u0275\u0275listener("change", function ReviewLemburComponent_Template_input_change_17_listener($event) {
          return ctx.filterDari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 12);
        \u0275\u0275listener("change", function ReviewLemburComponent_Template_input_change_20_listener($event) {
          return ctx.filterSampai.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "select", 14);
        \u0275\u0275listener("change", function ReviewLemburComponent_Template_select_change_21_listener($event) {
          return ctx.filterDivisi.set($event.target.value);
        });
        \u0275\u0275elementStart(22, "option", 15);
        \u0275\u0275text(23, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, ReviewLemburComponent_option_24_Template, 2, 2, "option", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 17)(26, "input", 18);
        \u0275\u0275listener("input", function ReviewLemburComponent_Template_input_input_26_listener($event) {
          return ctx.filterCari.set($event.target.value);
        })("keyup.enter", function ReviewLemburComponent_Template_input_keyup_enter_26_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 19);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_button_click_27_listener() {
          return ctx.load();
        });
        \u0275\u0275element(28, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 21)(30, "button", 22);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_button_click_30_listener() {
          return ctx.openRiwayat();
        });
        \u0275\u0275element(31, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 24);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_button_click_32_listener() {
          return ctx.openEkspor();
        });
        \u0275\u0275element(33, "i", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 26);
        \u0275\u0275text(35, " Daftar jam lembur karyawan yang memerlukan validasi ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, ReviewLemburComponent_div_36_Template, 2, 1, "div", 27);
        \u0275\u0275elementStart(37, "div", 28)(38, "div", 29)(39, "label", 30);
        \u0275\u0275text(40, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "select", 31);
        \u0275\u0275listener("change", function ReviewLemburComponent_Template_select_change_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtPageSize.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275template(42, ReviewLemburComponent_option_42_Template, 2, 2, "option", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 32);
        \u0275\u0275text(44, "data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 29)(46, "label", 30);
        \u0275\u0275text(47, "Cari:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 33);
        \u0275\u0275listener("input", function ReviewLemburComponent_Template_input_input_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtSearch.set($event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(49, ReviewLemburComponent_div_49_Template, 20, 11, "div", 34)(50, ReviewLemburComponent_ng_template_50_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(52, "div", 35)(53, "small", 13);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "nav")(56, "ul", 36)(57, "li", 37)(58, "a", 38);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_a_click_58_listener() {
          return ctx.dtPage.set(1);
        });
        \u0275\u0275text(59, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "li", 37)(61, "a", 38);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_a_click_61_listener() {
          return ctx.dtPage.set(ctx.dtPage() - 1);
        });
        \u0275\u0275text(62, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(63, ReviewLemburComponent_li_63_Template, 3, 3, "li", 39);
        \u0275\u0275elementStart(64, "li", 37)(65, "a", 38);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_a_click_65_listener() {
          return ctx.dtPage.set(ctx.dtPage() + 1);
        });
        \u0275\u0275text(66, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "li", 37)(68, "a", 38);
        \u0275\u0275listener("click", function ReviewLemburComponent_Template_a_click_68_listener() {
          return ctx.dtPage.set(ctx.dtTotalPages());
        });
        \u0275\u0275text(69, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(70, ReviewLemburComponent_div_70_Template, 11, 1, "div", 40)(71, ReviewLemburComponent_div_71_Template, 21, 7, "div", 40)(72, ReviewLemburComponent_div_72_Template, 15, 3, "div", 41)(73, ReviewLemburComponent_div_73_Template, 53, 10, "div", 41);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadTpl_r23 = \u0275\u0275reference(51);
        \u0275\u0275advance(17);
        \u0275\u0275property("value", ctx.filterDari());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterSampai());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterDivisi());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.divisiList());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.dtPageSize());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pageSizeOptions);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.dtSearch());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading())("ngIfElse", loadTpl_r23);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" Menampilkan ", ctx.dtFiltered().length === 0 ? 0 : (ctx.dtPage() - 1) * ctx.dtPageSize() + 1, "\u2013", ctx.Math.min(ctx.dtPage() * ctx.dtPageSize(), ctx.dtFiltered().length), " dari ", ctx.dtFiltered().length, " total data ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.dtPage() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.dtPage() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.pageNumbers());
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.dtPage() === ctx.dtTotalPages());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("disabled", ctx.dtPage() === ctx.dtTotalPages());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showDetailModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHapusModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRiwayatModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEksporModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewLemburComponent, [{
    type: Component,
    args: [{ selector: "app-review-lembur", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="mb-3">\r
    <h4 class="fw-bold mb-0">Review Lembur</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><span class="text-primary">Lembur</span></li>\r
        <li class="breadcrumb-item active">Review Lembur</li>\r
      </ol>\r
    </nav>\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Filter -->\r
      <div class="d-flex flex-wrap gap-2 align-items-center mb-3">\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
          [value]="filterDari()" (change)="filterDari.set($any($event.target).value)">\r
        <span class="text-muted">-</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
          [value]="filterSampai()" (change)="filterSampai.set($any($event.target).value)">\r
\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
          [value]="filterDivisi()" (change)="filterDivisi.set($any($event.target).value)">\r
          <option value="">--Divisi--</option>\r
          <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
        </select>\r
\r
        <div class="d-flex gap-1">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari" style="max-width:170px"\r
            [value]="filterCari()" (input)="filterCari.set($any($event.target).value)" (keyup.enter)="load()">\r
          <button class="btn btn-sm btn-primary px-3" (click)="load()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
\r
        <!-- Tombol riwayat (merah) dan hapus massal (biru) sesuai gambar -->\r
        <div class="ms-auto d-flex gap-2">\r
          <button class="btn btn-danger btn-sm px-3" title="Riwayat Penolakan" (click)="openRiwayat()">\r
            <i class="bx bx-history"></i>\r
          </button>\r
          <button class="btn btn-primary btn-sm px-3" title="Ekspor Excel" (click)="openEkspor()">\r
            <i class="bx bx-spreadsheet"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Info -->\r
      <div class="rounded p-2 mb-3" style="background:#f8f9fa;font-size:.82rem;color:#6c757d;font-family:monospace">\r
        Daftar jam lembur karyawan yang memerlukan validasi\r
      </div>\r
\r
      <!-- Error -->\r
      <div *ngIf="error()" class="alert alert-danger py-2">{{ error() }}</div>\r
\r
      <!-- DataTable controls -->\r
      <div class="d-flex justify-content-between align-items-center mb-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <label class="form-label mb-0" style="font-size:.83rem">Tampilkan</label>\r
          <select class="form-select form-select-sm" style="width:70px"\r
            [value]="dtPageSize()" (change)="dtPageSize.set(+$any($event.target).value); dtPage.set(1)">\r
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
      <!-- Table -->\r
      <div class="table-responsive" *ngIf="!loading(); else loadTpl">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead style="background:#f0f2f5">\r
            <tr>\r
              <th style="width:36px">#</th>\r
              <th style="cursor:pointer" (click)="sort('namaKaryawan')">\r
                Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('tanggal')">\r
                Waktu Lembur <i class="bx {{ sortIcon('tanggal') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('totalLembur')">\r
                Total Lembur <i class="bx {{ sortIcon('totalLembur') }}"></i>\r
              </th>\r
              <th class="text-center">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="dtFiltered().length === 0">\r
              <td colspan="5" class="text-center py-4">\r
                <strong>Menampilkan 0 dari 0 total data</strong>\r
              </td>\r
            </tr>\r
            <tr *ngFor="let r of dtPaged(); let i = index">\r
              <td class="text-muted" style="font-size:.78rem">{{ (dtPage()-1)*dtPageSize() + i + 1 }}</td>\r
              <td>\r
                <div class="d-flex align-items-center gap-2">\r
                  <img *ngIf="r.fotoProfil" [src]="r.fotoProfil"\r
                    class="rounded-circle" style="width:36px;height:36px;object-fit:cover"\r
                    onerror="this.style.display='none'">\r
                  <div>\r
                    <div class="fw-semibold">{{ r.namaKaryawan }}</div>\r
                    <div class="text-muted" style="font-size:.75rem">{{ r.namaDivisi }}</div>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <div class="fw-semibold">{{ r.namaHari }}, {{ formatTanggal(r.tanggal) }}</div>\r
                <div class="text-muted" style="font-size:.78rem">\r
                  {{ r.jamMulaiLembur ?? '-' }} \u2013 {{ r.jamSelesaiLembur ?? '-' }}\r
                </div>\r
                <div *ngIf="r.namaPolaKerja" class="text-muted" style="font-size:.75rem">\r
                  Shift: {{ r.namaPolaKerja }}\r
                  <span *ngIf="r.jamKerjaMulai">({{ r.jamKerjaMulai }} \u2013 {{ r.jamKerjaSelesai }})</span>\r
                </div>\r
              </td>\r
              <td>\r
                <span *ngIf="r.totalLembur" class="badge bg-warning-subtle text-warning fw-semibold px-2">\r
                  {{ r.totalLembur }}\r
                </span>\r
                <span *ngIf="!r.totalLembur" class="text-muted">-</span>\r
              </td>\r
              <td class="text-center">\r
                <div class="d-flex justify-content-center gap-1">\r
                  <button class="btn btn-sm btn-outline-secondary px-2" title="Detail" (click)="openDetail(r)">\r
                    <i class="bx bx-info-circle"></i>\r
                  </button>\r
                  <button class="btn btn-sm btn-outline-danger px-2" title="Hapus lembur" (click)="openHapus(r)">\r
                    <i class="bx bx-trash"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <ng-template #loadTpl>\r
        <div class="text-center py-5"><div class="spinner-border spinner-border-sm text-primary"></div> Memuat\u2026</div>\r
      </ng-template>\r
\r
      <!-- Footer -->\r
      <div class="d-flex justify-content-between align-items-center mt-3">\r
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
  <!-- \u2500\u2500 Modal Detail \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showDetailModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.4)">\r
    <div class="modal-dialog modal-dialog-centered">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Detail Lembur</h5>\r
          <button class="btn-close" (click)="closeDetail()"></button>\r
        </div>\r
        <div class="modal-body" *ngIf="detailTarget() as r">\r
          <table class="table table-borderless mb-0" style="font-size:.88rem">\r
            <tr><th style="width:40%">Karyawan</th><td>{{ r.namaKaryawan }}</td></tr>\r
            <tr><th>Divisi</th><td>{{ r.namaDivisi ?? '-' }}</td></tr>\r
            <tr><th>Tanggal</th><td>{{ r.namaHari }}, {{ formatTanggal(r.tanggal) }}</td></tr>\r
            <tr><th>Mulai Lembur</th><td>{{ r.jamMulaiLembur ?? '-' }}</td></tr>\r
            <tr><th>Selesai Lembur</th><td>{{ r.jamSelesaiLembur ?? '-' }}</td></tr>\r
            <tr><th>Total Lembur</th><td><strong>{{ r.totalLembur ?? '-' }}</strong></td></tr>\r
            <tr><th>Shift</th><td>{{ r.namaPolaKerja ?? '-' }}</td></tr>\r
            <tr *ngIf="r.jamKerjaMulai"><th>Jam Kerja</th><td>{{ r.jamKerjaMulai }} \u2013 {{ r.jamKerjaSelesai }}</td></tr>\r
          </table>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeDetail()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Konfirmasi Hapus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showHapusModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.4)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:420px">\r
      <div class="modal-content">\r
        <div class="modal-header border-0">\r
          <h5 class="modal-title fw-bold text-danger">Hapus Data Lembur</h5>\r
          <button class="btn-close" (click)="closeHapus()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <p class="mb-1">Apakah Anda yakin ingin menghapus data lembur milik:</p>\r
          <p class="fw-semibold mb-0">{{ hapusTarget()?.namaKaryawan }}</p>\r
          <p class="text-muted" style="font-size:.83rem">\r
            {{ hapusTarget()?.namaHari }}, {{ formatTanggal(hapusTarget()?.tanggal ?? '') }}\r
            \u2014 Total: {{ hapusTarget()?.totalLembur ?? '-' }}\r
          </p>\r
          <div *ngIf="hapusError()" class="alert alert-danger py-2 mt-2">{{ hapusError() }}</div>\r
        </div>\r
        <div class="modal-footer border-0">\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeHapus()">Batal</button>\r
          <button class="btn btn-danger btn-sm px-4" (click)="konfirmasiHapus()" [disabled]="hapusSaving()">\r
            <span *ngIf="hapusSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Hapus\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Riwayat Penolakan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showRiwayatModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered modal-xl">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold"><i class="bx bx-history me-1 text-danger"></i>Riwayat Penolakan Lembur</h5>\r
          <button class="btn-close" (click)="closeRiwayat()"></button>\r
        </div>\r
        <div class="modal-body">\r
\r
          <!-- Loading -->\r
          <div *ngIf="riwayatLoading()" class="text-center py-4">\r
            <div class="spinner-border spinner-border-sm text-danger"></div> Memuat\u2026\r
          </div>\r
\r
          <!-- Error -->\r
          <div *ngIf="riwayatError()" class="alert alert-danger py-2">{{ riwayatError() }}</div>\r
\r
          <ng-container *ngIf="!riwayatLoading()">\r
            <!-- Controls -->\r
            <div class="d-flex justify-content-between align-items-center mb-2">\r
              <div class="d-flex align-items-center gap-2">\r
                <label class="form-label mb-0" style="font-size:.83rem">Tampilkan</label>\r
                <select class="form-select form-select-sm" style="width:70px"\r
                  [value]="riwayatPageSize()"\r
                  (change)="riwayatPageSize.set(+$any($event.target).value); riwayatPage.set(1)">\r
                  <option *ngFor="let n of pageSizeOptions" [value]="n">{{ n }}</option>\r
                </select>\r
                <span style="font-size:.83rem">data</span>\r
              </div>\r
              <div class="d-flex align-items-center gap-2">\r
                <label class="form-label mb-0" style="font-size:.83rem">Cari:</label>\r
                <input type="text" class="form-control form-control-sm" style="width:200px"\r
                  placeholder="Nama karyawan\u2026"\r
                  [value]="riwayatSearch()"\r
                  (input)="riwayatSearch.set($any($event.target).value); riwayatPage.set(1)">\r
              </div>\r
            </div>\r
\r
            <!-- Tabel -->\r
            <div class="table-responsive">\r
              <table class="table table-hover align-middle mb-0" style="font-size:.84rem">\r
                <thead style="background:#f0f2f5">\r
                  <tr>\r
                    <th style="width:36px">#</th>\r
                    <th>Karyawan</th>\r
                    <th>Tanggal Absensi</th>\r
                    <th>Waktu Lembur</th>\r
                    <th>Total Lembur</th>\r
                    <th>Dihapus Oleh</th>\r
                    <th>Waktu Penolakan</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngIf="riwayatFiltered().length === 0">\r
                    <td colspan="7" class="text-center py-4 text-muted fw-semibold">\r
                      Belum ada riwayat penolakan\r
                    </td>\r
                  </tr>\r
                  <tr *ngFor="let r of riwayatPaged(); let i = index">\r
                    <td class="text-muted" style="font-size:.78rem">{{ (riwayatPage()-1)*riwayatPageSize()+i+1 }}</td>\r
                    <td>\r
                      <div class="d-flex align-items-center gap-2">\r
                        <img *ngIf="r.fotoProfil" [src]="r.fotoProfil"\r
                          class="rounded-circle" style="width:32px;height:32px;object-fit:cover"\r
                          onerror="this.style.display='none'">\r
                        <div>\r
                          <div class="fw-semibold">{{ r.namaKaryawan }}</div>\r
                          <div class="text-muted" style="font-size:.74rem">{{ r.namaDivisi }}</div>\r
                        </div>\r
                      </div>\r
                    </td>\r
                    <td>\r
                      <div class="fw-semibold">{{ r.namaHari }}</div>\r
                      <div class="text-muted" style="font-size:.78rem">{{ formatTanggal(r.tanggalAbsensi) }}</div>\r
                    </td>\r
                    <td>\r
                      <span class="text-muted">{{ r.jamMulaiLembur ?? '-' }} \u2013 {{ r.jamSelesaiLembur ?? '-' }}</span>\r
                    </td>\r
                    <td>\r
                      <span *ngIf="r.totalLembur" class="badge bg-danger-subtle text-danger fw-semibold">\r
                        {{ r.totalLembur }}\r
                      </span>\r
                      <span *ngIf="!r.totalLembur" class="text-muted">-</span>\r
                    </td>\r
                    <td>\r
                      <span class="text-muted">{{ r.dihapusOleh ?? '-' }}</span>\r
                    </td>\r
                    <td>\r
                      <span class="text-muted" style="font-size:.78rem">{{ formatDateTime(r.dihapusAt) }}</span>\r
                    </td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
\r
            <!-- Pagination riwayat -->\r
            <div class="d-flex justify-content-between align-items-center mt-3">\r
              <small class="text-muted">\r
                Menampilkan\r
                {{ riwayatFiltered().length === 0 ? 0 : (riwayatPage()-1)*riwayatPageSize()+1 }}\u2013{{ Math.min(riwayatPage()*riwayatPageSize(), riwayatFiltered().length) }}\r
                dari {{ riwayatFiltered().length }} total data\r
              </small>\r
              <nav>\r
                <ul class="pagination pagination-sm mb-0">\r
                  <li class="page-item" [class.disabled]="riwayatPage()===1">\r
                    <a class="page-link" href="javascript:;" (click)="riwayatPage.set(1)">&laquo;</a>\r
                  </li>\r
                  <li class="page-item" [class.disabled]="riwayatPage()===1">\r
                    <a class="page-link" href="javascript:;" (click)="riwayatPage.set(riwayatPage()-1)">&lsaquo;</a>\r
                  </li>\r
                  <li *ngFor="let p of riwayatPageNumbers()" class="page-item" [class.active]="riwayatPage()===p">\r
                    <a class="page-link" href="javascript:;" (click)="riwayatPage.set(p)">{{ p }}</a>\r
                  </li>\r
                  <li class="page-item" [class.disabled]="riwayatPage()===riwayatTotalPages()">\r
                    <a class="page-link" href="javascript:;" (click)="riwayatPage.set(riwayatPage()+1)">&rsaquo;</a>\r
                  </li>\r
                  <li class="page-item" [class.disabled]="riwayatPage()===riwayatTotalPages()">\r
                    <a class="page-link" href="javascript:;" (click)="riwayatPage.set(riwayatTotalPages())">&raquo;</a>\r
                  </li>\r
                </ul>\r
              </nav>\r
            </div>\r
          </ng-container>\r
\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeRiwayat()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Ekspor Excel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showEksporModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:520px">\r
      <div class="modal-content">\r
        <div class="modal-header border-bottom">\r
          <h5 class="modal-title fw-bold">Ekspor Excel</h5>\r
          <button class="btn-close" (click)="closeEkspor()"></button>\r
        </div>\r
        <div class="modal-body">\r
\r
          <!-- Tanggal -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">\r
              Tanggal <span class="text-danger">*</span>\r
            </label>\r
            <div class="col-sm-8">\r
              <div class="d-flex align-items-center gap-2">\r
                <input type="date" class="form-control form-control-sm"\r
                  [value]="eksporDari()"\r
                  (change)="eksporDari.set($any($event.target).value)">\r
                <span>-</span>\r
                <input type="date" class="form-control form-control-sm"\r
                  [value]="eksporSampai()"\r
                  (change)="eksporSampai.set($any($event.target).value)">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Divisi -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Divisi</label>\r
            <div class="col-sm-8">\r
              <select class="form-select form-select-sm"\r
                [value]="eksporDivisi()"\r
                (change)="eksporDivisi.set($any($event.target).value)">\r
                <option value="">--Divisi--</option>\r
                <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Kata kunci -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Kata kunci</label>\r
            <div class="col-sm-8">\r
              <input type="text" class="form-control form-control-sm"\r
                placeholder=""\r
                [value]="eksporCari()"\r
                (input)="eksporCari.set($any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <!-- Email -->\r
          <div class="mb-2 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">\r
              Kirimkan File ke Email <span class="text-danger">*</span>\r
            </label>\r
            <div class="col-sm-8">\r
              <input type="text" class="form-control form-control-sm"\r
                placeholder=""\r
                [value]="eksporEmail()"\r
                (input)="eksporEmail.set($any($event.target).value)">\r
              <div class="text-muted mt-1" style="font-size:.78rem">Pisah email dengan koma jika lebih dari satu.</div>\r
            </div>\r
          </div>\r
\r
          <!-- Info box -->\r
          <div class="row">\r
            <div class="col-sm-8 offset-sm-4">\r
              <div class="rounded p-3 mt-1" style="background:#6c63ff;color:#fff;font-size:.82rem">\r
                Waktu yang dibutuhkan untuk menerima email hasil ekspor excel maksimal 20 menit, tergantung banyaknya data yang dikumpulkan.\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Error -->\r
          <div *ngIf="eksporError()" class="alert alert-danger py-2 mt-2">{{ eksporError() }}</div>\r
\r
          <!-- Sukses -->\r
          <div *ngIf="eksporSukses()" class="alert alert-success py-2 mt-2">\r
            <i class="bx bx-check-circle me-1"></i>\r
            Email sedang diproses dan akan dikirim ke <strong>{{ eksporEmail() }}</strong> dalam beberapa menit. Modal akan tertutup otomatis\u2026\r
          </div>\r
\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-primary btn-sm px-4" (click)="prosesEkspor()" [disabled]="eksporProses()">\r
            <span *ngIf="eksporProses()" class="spinner-border spinner-border-sm me-1"></span>\r
            Proses\r
          </button>\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeEkspor()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewLemburComponent, { className: "ReviewLemburComponent", filePath: "src/app/features/lembur/review-lembur/review-lembur.component.ts", lineNumber: 38 });
})();
export {
  ReviewLemburComponent
};
//# sourceMappingURL=chunk-LQV7T2RY.js.map
