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
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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

// src/app/features/lembur/jadwal-lembur/jadwal-lembur.component.ts
function JadwalLemburComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
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
function JadwalLemburComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function JadwalLemburComponent_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
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
function JadwalLemburComponent_div_57_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55)(2, "strong");
    \u0275\u0275text(3, "Menampilkan 0 dari 0 total data");
    \u0275\u0275elementEnd()()();
  }
}
function JadwalLemburComponent_div_57_tr_22_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 75);
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r7.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function JadwalLemburComponent_div_57_tr_22_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.durasiLembur);
  }
}
function JadwalLemburComponent_div_57_tr_22_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.menitSebelumJadwal, " Menit Sebelum Jadwal ");
  }
}
function JadwalLemburComponent_div_57_tr_22_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_57_tr_22_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.catatan);
  }
}
function JadwalLemburComponent_div_57_tr_22_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_57_tr_22_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.catatanPenolakan, " ");
  }
}
function JadwalLemburComponent_div_57_tr_22_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_tr_22_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setujui(r_r7));
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_57_tr_22_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_tr_22_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(r_r7));
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_57_tr_22_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_tr_22_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTolak(r_r7));
    });
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_57_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 33);
    \u0275\u0275template(5, JadwalLemburComponent_div_57_tr_22_img_5_Template, 1, 1, "img", 57);
    \u0275\u0275elementStart(6, "div")(7, "div", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 56);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, JadwalLemburComponent_div_57_tr_22_span_16_Template, 2, 1, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, JadwalLemburComponent_div_57_tr_22_span_18_Template, 2, 1, "span", 62)(19, JadwalLemburComponent_div_57_tr_22_span_19_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, JadwalLemburComponent_div_57_tr_22_span_21_Template, 2, 1, "span", 64)(22, JadwalLemburComponent_div_57_tr_22_span_22_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 65);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, JadwalLemburComponent_div_57_tr_22_div_26_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 52)(28, "div", 67)(29, "button", 68);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_tr_22_Template_button_click_29_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(r_r7));
    });
    \u0275\u0275element(30, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, JadwalLemburComponent_div_57_tr_22_button_31_Template, 2, 0, "button", 70)(32, JadwalLemburComponent_div_57_tr_22_button_32_Template, 2, 0, "button", 71)(33, JadwalLemburComponent_div_57_tr_22_button_33_Template, 2, 0, "button", 72);
    \u0275\u0275elementStart(34, "button", 73);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_tr_22_Template_button_click_34_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openHapus(r_r7));
    });
    \u0275\u0275element(35, "i", 74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.dtPage() - 1) * ctx_r2.dtPageSize() + i_r11 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r7.fotoProfil);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.namaDivisi);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDt(r_r7.waktuMulai));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("s/d ", ctx_r2.formatDt(r_r7.waktuSelesai));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.durasiLembur);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r7.menitSebelumJadwal != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.menitSebelumJadwal == null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r7.catatan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r7.catatan);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusBadge(r_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(r_r7.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.catatanPenolakan);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", r_r7.status === "PENGAJUAN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.status === "PENGAJUAN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.status === "PENGAJUAN");
  }
}
function JadwalLemburComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "table", 48)(2, "thead", 49)(3, "tr")(4, "th", 50);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 51);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("namaKaryawan"));
    });
    \u0275\u0275text(7, " Karyawan ");
    \u0275\u0275element(8, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 51);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_57_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sort("waktuMulai"));
    });
    \u0275\u0275text(10, " Jadwal ");
    \u0275\u0275element(11, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Pembatasan Mulai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status Persetujuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 52);
    \u0275\u0275text(19, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, JadwalLemburComponent_div_57_tr_21_Template, 4, 0, "tr", 53)(22, JadwalLemburComponent_div_57_tr_22_Template, 36, 18, "tr", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("namaKaryawan")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r2.sortIcon("waktuMulai")));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.dtFiltered().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.dtPaged());
  }
}
function JadwalLemburComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "div", 87);
    \u0275\u0275text(2, " Memuat\u2026");
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_li_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 41)(1, "a", 42);
    \u0275\u0275listener("click", function JadwalLemburComponent_li_71_Template_a_click_1_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dtPage.set(p_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.dtPage() === p_r13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13);
  }
}
function JadwalLemburComponent_div_78_ul_19_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 119);
    \u0275\u0275element(1, "span", 120);
    \u0275\u0275text(2, " Memuat data\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_78_ul_19_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 119);
    \u0275\u0275text(1, " Tidak ada data karyawan ");
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_78_ul_19_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 121);
    \u0275\u0275listener("mousedown", function JadwalLemburComponent_div_78_ul_19_li_3_Template_li_mousedown_0_listener($event) {
      const k_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.selectKaryawan(k_r16));
    })("mouseover", function JadwalLemburComponent_div_78_ul_19_li_3_Template_li_mouseover_0_listener($event) {
      return $event.currentTarget.style.background = "#eef2ff";
    })("mouseout", function JadwalLemburComponent_div_78_ul_19_li_3_Template_li_mouseout_0_listener($event) {
      return $event.currentTarget.style.background = "";
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r16.namaLengkap);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r16.namaDivisi ?? "-");
  }
}
function JadwalLemburComponent_div_78_ul_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 116);
    \u0275\u0275template(1, JadwalLemburComponent_div_78_ul_19_li_1_Template, 3, 0, "li", 117)(2, JadwalLemburComponent_div_78_ul_19_li_2_Template, 2, 0, "li", 117)(3, JadwalLemburComponent_div_78_ul_19_li_3_Template, 5, 2, "li", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.karyawanLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.karyawanLoading() && ctx_r2.karyawanFiltered().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.karyawanFiltered());
  }
}
function JadwalLemburComponent_div_78_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError());
  }
}
function JadwalLemburComponent_div_78_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function JadwalLemburComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "div", 90)(3, "div", 91)(4, "h5", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_78_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 94)(8, "div", 95)(9, "label", 96);
    \u0275\u0275text(10, " Karyawan ");
    \u0275\u0275elementStart(11, "span", 97);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 98)(14, "div", 99)(15, "div", 100)(16, "input", 101);
    \u0275\u0275listener("input", function JadwalLemburComponent_div_78_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.karyawanSearch.set($event.target.value);
      return \u0275\u0275resetView(ctx_r2.showKaryawanDd.set(true));
    })("focus", function JadwalLemburComponent_div_78_Template_input_focus_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showKaryawanDd.set(true));
    })("blur", function JadwalLemburComponent_div_78_Template_input_blur_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKaryawanBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 102);
    \u0275\u0275listener("mousedown", function JadwalLemburComponent_div_78_Template_span_mousedown_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.showKaryawanDd.set(!ctx_r2.showKaryawanDd()));
    });
    \u0275\u0275element(18, "i", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, JadwalLemburComponent_div_78_ul_19_Template, 4, 3, "ul", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 105)(21, "label", 96);
    \u0275\u0275text(22, " Waktu Mulai ");
    \u0275\u0275elementStart(23, "span", 97);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 98)(26, "input", 106);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_78_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formWaktuMulai.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 105)(28, "label", 96);
    \u0275\u0275text(29, " Waktu Selesai ");
    \u0275\u0275elementStart(30, "span", 97);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 98)(33, "input", 106);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_78_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formWaktuSelesai.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 105)(35, "label", 96);
    \u0275\u0275text(36, "Pembatasan Mulai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 98)(38, "div", 100)(39, "input", 107);
    \u0275\u0275listener("input", function JadwalLemburComponent_div_78_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formMenitSebelum.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 108);
    \u0275\u0275text(41, " Menit Sebelum Jadwal ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 109)(43, "label", 96);
    \u0275\u0275text(44, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 98)(46, "textarea", 110);
    \u0275\u0275listener("input", function JadwalLemburComponent_div_78_Template_textarea_input_46_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formCatatan.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, JadwalLemburComponent_div_78_div_47_Template, 2, 1, "div", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 112)(49, "button", 113);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_78_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.simpan());
    });
    \u0275\u0275template(50, JadwalLemburComponent_div_78_span_50_Template, 1, 0, "span", 114);
    \u0275\u0275text(51, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 115);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_78_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(53, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.editTarget() ? "Edit" : "Tambah", " Jadwal Lembur");
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r2.karyawanSearch());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showKaryawanDd());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.formWaktuMulai());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.formWaktuSelesai());
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.formMenitSebelum());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.formCatatan());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formError());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.formSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formSaving());
  }
}
function JadwalLemburComponent_div_79_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.tolakError());
  }
}
function JadwalLemburComponent_div_79_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function JadwalLemburComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 124)(2, "div", 125)(3, "div", 126)(4, "h5", 127);
    \u0275\u0275text(5, "Tolak Jadwal Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_79_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTolak());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 128)(8, "p", 129);
    \u0275\u0275text(9, "Tolak jadwal lembur milik ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 130)(14, "label", 131);
    \u0275\u0275text(15, "Catatan Penolakan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 132);
    \u0275\u0275listener("input", function JadwalLemburComponent_div_79_Template_textarea_input_16_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tolakCatatan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, JadwalLemburComponent_div_79_div_17_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 133)(19, "button", 115);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_79_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeTolak());
    });
    \u0275\u0275text(20, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 134);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_79_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.konfirmasiTolak());
    });
    \u0275\u0275template(22, JadwalLemburComponent_div_79_span_22_Template, 1, 0, "span", 114);
    \u0275\u0275text(23, " Tolak ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.tolakTarget()) == null ? null : tmp_2_0.namaKaryawan);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.tolakCatatan());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tolakError());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.tolakSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tolakSaving());
  }
}
function JadwalLemburComponent_div_80_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.hapusError());
  }
}
function JadwalLemburComponent_div_80_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function JadwalLemburComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 135)(2, "div", 125)(3, "div", 126)(4, "h5", 127);
    \u0275\u0275text(5, "Hapus Jadwal Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_80_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHapus());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 128)(8, "p");
    \u0275\u0275text(9, "Hapus jadwal lembur milik ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 136);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, JadwalLemburComponent_div_80_div_15_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 133)(17, "button", 115);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_80_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHapus());
    });
    \u0275\u0275text(18, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 134);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_80_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.konfirmasiHapus());
    });
    \u0275\u0275template(20, JadwalLemburComponent_div_80_span_20_Template, 1, 0, "span", 114);
    \u0275\u0275text(21, " Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.hapusTarget()) == null ? null : tmp_2_0.namaKaryawan);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.formatDt(((tmp_3_0 = ctx_r2.hapusTarget()) == null ? null : tmp_3_0.waktuMulai) ?? ""), " \u2013 ", ctx_r2.formatDt(((tmp_3_0 = ctx_r2.hapusTarget()) == null ? null : tmp_3_0.waktuSelesai) ?? ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hapusError());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.hapusSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hapusSaving());
  }
}
function JadwalLemburComponent_div_81_div_7_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Catatan Penolakan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r20 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r20.catatanPenolakan);
  }
}
function JadwalLemburComponent_div_81_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "table", 139)(2, "tr")(3, "th", 140);
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
    \u0275\u0275text(14, "Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tr")(18, "th");
    \u0275\u0275text(19, "Waktu Mulai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tr")(23, "th");
    \u0275\u0275text(24, "Waktu Selesai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "th");
    \u0275\u0275text(29, "Durasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td")(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tr")(34, "th");
    \u0275\u0275text(35, "Pembatasan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "tr")(39, "th");
    \u0275\u0275text(40, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "tr")(44, "th");
    \u0275\u0275text(45, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td")(47, "span", 141);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, JadwalLemburComponent_div_81_div_7_tr_49_Template, 5, 1, "tr", 53);
    \u0275\u0275elementStart(50, "tr")(51, "th");
    \u0275\u0275text(52, "Dibuat Oleh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r20 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r20.namaKaryawan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r20.namaDivisi ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r20.namaJabatan ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDt(r_r20.waktuMulai));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDt(r_r20.waktuSelesai));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r20.durasiLembur ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r20.menitSebelumJadwal != null ? r_r20.menitSebelumJadwal + " Menit Sebelum Jadwal" : "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r20.catatan ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.statusBadge(r_r20.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(r_r20.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r20.catatanPenolakan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r20.dibuatOleh ?? "-");
  }
}
function JadwalLemburComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 137)(2, "div", 125)(3, "div", 91)(4, "h5", 92);
    \u0275\u0275text(5, "Detail Jadwal Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_81_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, JadwalLemburComponent_div_81_div_7_Template, 55, 13, "div", 138);
    \u0275\u0275elementStart(8, "div", 112)(9, "button", 115);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_81_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
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
function JadwalLemburComponent_div_82_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
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
function JadwalLemburComponent_div_82_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function JadwalLemburComponent_div_82_i_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 150);
  }
}
function JadwalLemburComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 137)(2, "div", 125)(3, "div", 91)(4, "h5", 92);
    \u0275\u0275text(5, "Ekspor Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_82_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEkspor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 128)(8, "div", 105)(9, "label", 96);
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 98)(12, "select", 142);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_82_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporStatus.set($event.target.value));
    });
    \u0275\u0275elementStart(13, "option", 18);
    \u0275\u0275text(14, "--Semua Status--");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 143);
    \u0275\u0275text(16, "Pengajuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 144);
    \u0275\u0275text(18, "Disetujui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 145);
    \u0275\u0275text(20, "Ditolak");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 105)(22, "label", 96);
    \u0275\u0275text(23, "Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 98)(25, "div", 33)(26, "input", 146);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_82_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporDari.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 146);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_82_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporSampai.set($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 105)(31, "label", 96);
    \u0275\u0275text(32, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 98)(34, "select", 142);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_82_Template_select_change_34_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporDivisi.set($event.target.value));
    });
    \u0275\u0275elementStart(35, "option", 18);
    \u0275\u0275text(36, "--Divisi--");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, JadwalLemburComponent_div_82_option_37_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 147)(39, "label", 96);
    \u0275\u0275text(40, "Kata kunci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 98)(42, "input", 148);
    \u0275\u0275listener("input", function JadwalLemburComponent_div_82_Template_input_input_42_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.eksporCari.set($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 112)(44, "button", 113);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_82_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prosesEkspor());
    });
    \u0275\u0275template(45, JadwalLemburComponent_div_82_span_45_Template, 1, 0, "span", 114)(46, JadwalLemburComponent_div_82_i_46_Template, 1, 0, "i", 149);
    \u0275\u0275text(47, " Unduh Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 115);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_82_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEkspor());
    });
    \u0275\u0275text(49, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("value", ctx_r2.eksporStatus());
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r2.eksporDari());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.eksporSampai());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.eksporDivisi());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.divisiList());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.eksporCari());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.eksporLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.eksporLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.eksporLoading());
  }
}
function JadwalLemburComponent_div_83_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.imporError(), " ");
  }
}
function JadwalLemburComponent_div_83_div_33_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275element(1, "i", 172);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r24, " ");
  }
}
function JadwalLemburComponent_div_83_div_33_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275template(1, JadwalLemburComponent_div_83_div_33_div_7_div_1_Template, 3, 1, "div", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r25 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", r_r25.errors);
  }
}
function JadwalLemburComponent_div_83_div_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275element(1, "i", 174);
    \u0275\u0275text(2, "Semua data berhasil diimpor! ");
    \u0275\u0275elementEnd();
  }
}
function JadwalLemburComponent_div_83_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "hr", 163);
    \u0275\u0275elementStart(2, "div", 164)(3, "span", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 166);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, JadwalLemburComponent_div_83_div_33_div_7_Template, 2, 1, "div", 167)(8, JadwalLemburComponent_div_83_div_33_div_8_Template, 3, 0, "div", 168);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r25 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2713 Berhasil: ", r_r25.berhasil);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2717 Gagal: ", r_r25.gagal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r25.errors.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r25.berhasil > 0 && r_r25.gagal === 0);
  }
}
function JadwalLemburComponent_div_83_button_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function JadwalLemburComponent_div_83_button_35_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 176);
  }
}
function JadwalLemburComponent_div_83_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_83_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prosesImpor());
    });
    \u0275\u0275template(1, JadwalLemburComponent_div_83_button_35_span_1_Template, 1, 0, "span", 114)(2, JadwalLemburComponent_div_83_button_35_i_2_Template, 1, 0, "i", 175);
    \u0275\u0275text(3, " Proses ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.imporFile() || ctx_r2.imporLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imporLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.imporLoading());
  }
}
function JadwalLemburComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 151)(2, "div", 125)(3, "div", 91)(4, "h5", 92);
    \u0275\u0275text(5, "Impor Jadwal Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 93);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_83_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImpor());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 128)(8, "div", 152)(9, "div")(10, "div", 153);
    \u0275\u0275text(11, "Template Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56);
    \u0275\u0275text(13, "Download template, isi data, lalu upload kembali.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 154);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_83_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275element(15, "i", 150);
    \u0275\u0275text(16, "Download Template ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 155)(18, "strong");
    \u0275\u0275text(19, "Kolom wajib:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " NIP, Waktu Mulai (yyyy-MM-dd HH:mm), Waktu Selesai (yyyy-MM-dd HH:mm)");
    \u0275\u0275element(21, "br");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "Kolom opsional:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Menit Sebelum Jadwal, Catatan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 105)(26, "label", 156);
    \u0275\u0275text(27, "File Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 157)(29, "input", 158);
    \u0275\u0275listener("change", function JadwalLemburComponent_div_83_Template_input_change_29_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 159);
    \u0275\u0275text(31, "Maksimal 5 MB. Format .xlsx / .xls");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, JadwalLemburComponent_div_83_div_32_Template, 2, 1, "div", 160)(33, JadwalLemburComponent_div_83_div_33_Template, 9, 4, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 112);
    \u0275\u0275template(35, JadwalLemburComponent_div_83_button_35_Template, 4, 3, "button", 161);
    \u0275\u0275elementStart(36, "button", 115);
    \u0275\u0275listener("click", function JadwalLemburComponent_div_83_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImpor());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(29);
    \u0275\u0275property("disabled", ctx_r2.imporLoading());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.imporError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imporResult());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.imporResult());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.imporResult() ? "Tutup" : "Batal", " ");
  }
}
var JadwalLemburComponent = class _JadwalLemburComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.divisiSvc = inject(DivisiService);
    this.karyawanSvc = inject(KaryawanService);
    this.Math = Math;
    this.apiUrl = `${environment.apiUrl}/jadwal-lembur`;
    this.activeTab = signal("PENGAJUAN", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterDari = signal("", ...ngDevMode ? [{ debugName: "filterDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterSampai = signal("", ...ngDevMode ? [{ debugName: "filterSampai" }] : (
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
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanLoading = signal(false, ...ngDevMode ? [{ debugName: "karyawanLoading" }] : (
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
        data = data.filter((r) => r.namaKaryawan.toLowerCase().includes(q) || (r.namaDivisi ?? "").toLowerCase().includes(q) || (r.durasiLembur ?? "").toLowerCase().includes(q));
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
    this.showFormModal = signal(false, ...ngDevMode ? [{ debugName: "showFormModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editTarget = signal(null, ...ngDevMode ? [{ debugName: "editTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formSaving = signal(false, ...ngDevMode ? [{ debugName: "formSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formError = signal("", ...ngDevMode ? [{ debugName: "formError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formKaryawanId = signal("", ...ngDevMode ? [{ debugName: "formKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formWaktuMulai = signal("", ...ngDevMode ? [{ debugName: "formWaktuMulai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formWaktuSelesai = signal("", ...ngDevMode ? [{ debugName: "formWaktuSelesai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formMenitSebelum = signal("", ...ngDevMode ? [{ debugName: "formMenitSebelum" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formCatatan = signal("", ...ngDevMode ? [{ debugName: "formCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanSearch = signal("", ...ngDevMode ? [{ debugName: "karyawanSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showKaryawanDd = signal(false, ...ngDevMode ? [{ debugName: "showKaryawanDd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanFiltered = computed(() => {
      const q = this.karyawanSearch().toLowerCase().trim();
      const list = this.karyawanList();
      if (!q)
        return list.slice(0, 50);
      return list.filter((k) => k.namaLengkap.toLowerCase().includes(q) || (k.namaDivisi ?? "").toLowerCase().includes(q)).slice(0, 50);
    }, ...ngDevMode ? [{ debugName: "karyawanFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKaryawan = signal(null, ...ngDevMode ? [{ debugName: "selectedKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTolakModal = signal(false, ...ngDevMode ? [{ debugName: "showTolakModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakTarget = signal(null, ...ngDevMode ? [{ debugName: "tolakTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakCatatan = signal("", ...ngDevMode ? [{ debugName: "tolakCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakSaving = signal(false, ...ngDevMode ? [{ debugName: "tolakSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakError = signal("", ...ngDevMode ? [{ debugName: "tolakError" }] : (
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
    this.showDetailModal = signal(false, ...ngDevMode ? [{ debugName: "showDetailModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailTarget = signal(null, ...ngDevMode ? [{ debugName: "detailTarget" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showEksporModal = signal(false, ...ngDevMode ? [{ debugName: "showEksporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporStatus = signal("", ...ngDevMode ? [{ debugName: "eksporStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporDari = signal("", ...ngDevMode ? [{ debugName: "eksporDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eksporSampai = signal("", ...ngDevMode ? [{ debugName: "eksporSampai" }] : (
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
    this.eksporLoading = signal(false, ...ngDevMode ? [{ debugName: "eksporLoading" }] : (
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
    this.imporFileName = signal("", ...ngDevMode ? [{ debugName: "imporFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporLoading = signal(false, ...ngDevMode ? [{ debugName: "imporLoading" }] : (
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
  }
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.loadKaryawan();
    this.load();
  }
  loadKaryawan() {
    this.karyawanLoading.set(true);
    this.karyawanSvc.findAll().pipe(tap((list) => console.log("[JadwalLembur] karyawan count:", list?.length, "sample:", list?.[0]?.namaLengkap)), catchError((err) => {
      console.error("[JadwalLembur] error load karyawan:", err);
      return of([]);
    })).subscribe((list) => {
      this.karyawanList.set(list ?? []);
      this.karyawanLoading.set(false);
    });
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    let params = new HttpParams().set("status", this.activeTab());
    if (this.filterDari())
      params = params.set("dari", this.filterDari());
    if (this.filterSampai())
      params = params.set("sampai", this.filterSampai());
    if (this.filterDivisi())
      params = params.set("divisiId", this.filterDivisi());
    if (this.filterCari())
      params = params.set("cari", this.filterCari());
    this.http.get(this.apiUrl, { params }).pipe(map((r) => r?.data ?? []), catchError((err) => {
      this.error.set(err?.error?.message ?? "Gagal memuat data");
      return of([]);
    })).subscribe((d) => {
      this.rows.set(d);
      this.dtPage.set(1);
      this.loading.set(false);
    });
  }
  // ── Form Modal ────────────────────────────────────────
  openTambah() {
    this.editTarget.set(null);
    this.resetForm();
    if (this.karyawanList().length === 0)
      this.loadKaryawan();
    this.showFormModal.set(true);
  }
  openEdit(r) {
    this.editTarget.set(r);
    this.formKaryawanId.set(String(r.karyawanId));
    this.formWaktuMulai.set(r.waktuMulai?.substring(0, 16) ?? "");
    this.formWaktuSelesai.set(r.waktuSelesai?.substring(0, 16) ?? "");
    this.formMenitSebelum.set(r.menitSebelumJadwal != null ? String(r.menitSebelumJadwal) : "");
    this.formCatatan.set(r.catatan ?? "");
    const k = this.karyawanList().find((x) => x.id === r.karyawanId) ?? null;
    this.selectedKaryawan.set(k);
    this.karyawanSearch.set(k?.namaLengkap ?? "");
    this.formError.set("");
    this.showFormModal.set(true);
  }
  closeForm() {
    this.showFormModal.set(false);
  }
  simpan() {
    if (!this.formKaryawanId()) {
      this.formError.set("Karyawan wajib dipilih");
      return;
    }
    if (!this.formWaktuMulai()) {
      this.formError.set("Waktu mulai wajib diisi");
      return;
    }
    if (!this.formWaktuSelesai()) {
      this.formError.set("Waktu selesai wajib diisi");
      return;
    }
    this.formError.set("");
    this.formSaving.set(true);
    const body = {
      karyawanId: Number(this.formKaryawanId()),
      waktuMulai: this.formWaktuMulai(),
      waktuSelesai: this.formWaktuSelesai(),
      menitSebelumJadwal: this.formMenitSebelum() ? Number(this.formMenitSebelum()) : null,
      catatan: this.formCatatan() || null
    };
    const req = this.editTarget() ? this.http.put(`${this.apiUrl}/${this.editTarget().id}`, body) : this.http.post(this.apiUrl, body);
    req.pipe(catchError((err) => {
      this.formError.set(err?.error?.message ?? "Gagal menyimpan");
      return of(null);
    })).subscribe((res) => {
      this.formSaving.set(false);
      if (res) {
        this.showFormModal.set(false);
        this.load();
      }
    });
  }
  // ── Setujui ───────────────────────────────────────────
  setujui(r) {
    this.http.patch(`${this.apiUrl}/${r.id}/setujui`, null).subscribe(() => this.load());
  }
  // ── Tolak ─────────────────────────────────────────────
  openTolak(r) {
    this.tolakTarget.set(r);
    this.tolakCatatan.set("");
    this.tolakError.set("");
    this.showTolakModal.set(true);
  }
  closeTolak() {
    this.showTolakModal.set(false);
  }
  konfirmasiTolak() {
    const t = this.tolakTarget();
    if (!t)
      return;
    this.tolakSaving.set(true);
    let params = new HttpParams();
    if (this.tolakCatatan())
      params = params.set("catatan", this.tolakCatatan());
    this.http.patch(`${this.apiUrl}/${t.id}/tolak`, null, { params }).pipe(catchError((err) => {
      this.tolakError.set(err?.error?.message ?? "Gagal");
      return of(null);
    })).subscribe((res) => {
      this.tolakSaving.set(false);
      if (res) {
        this.showTolakModal.set(false);
        this.load();
      }
    });
  }
  // ── Hapus ─────────────────────────────────────────────
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
    this.http.delete(`${this.apiUrl}/${t.id}`).pipe(catchError((err) => {
      this.hapusError.set(err?.error?.message ?? "Gagal");
      return of(null);
    })).subscribe((res) => {
      this.hapusSaving.set(false);
      if (res !== null) {
        this.showHapusModal.set(false);
        this.load();
      }
    });
  }
  // ── Ekspor ────────────────────────────────────────────
  openEkspor() {
    this.eksporStatus.set(this.activeTab());
    this.eksporDari.set(this.filterDari());
    this.eksporSampai.set(this.filterSampai());
    this.eksporDivisi.set(this.filterDivisi());
    this.eksporCari.set(this.filterCari());
    this.showEksporModal.set(true);
  }
  closeEkspor() {
    this.showEksporModal.set(false);
  }
  prosesEkspor() {
    this.eksporLoading.set(true);
    let params = new HttpParams();
    if (this.eksporStatus())
      params = params.set("status", this.eksporStatus());
    if (this.eksporDari())
      params = params.set("dari", this.eksporDari());
    if (this.eksporSampai())
      params = params.set("sampai", this.eksporSampai());
    if (this.eksporDivisi())
      params = params.set("divisiId", this.eksporDivisi());
    if (this.eksporCari())
      params = params.set("cari", this.eksporCari());
    this.http.get(`${this.apiUrl}/ekspor`, { params, responseType: "blob" }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `jadwal-lembur-${(/* @__PURE__ */ new Date()).toISOString().substring(0, 10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.eksporLoading.set(false);
        this.closeEkspor();
      },
      error: () => {
        this.eksporLoading.set(false);
      }
    });
  }
  // ── Impor ─────────────────────────────────────────────
  openImpor() {
    this.imporFile.set(null);
    this.imporFileName.set("");
    this.imporError.set("");
    this.imporResult.set(null);
    this.showImporModal.set(true);
  }
  closeImpor() {
    this.showImporModal.set(false);
    if (this.imporResult()?.berhasil)
      this.load();
  }
  downloadTemplate() {
    this.http.get(`${this.apiUrl}/impor/template`, { responseType: "blob" }).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "template-jadwal-lembur.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  onFileChange(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    this.imporError.set("");
    this.imporResult.set(null);
    if (!file) {
      this.imporFile.set(null);
      this.imporFileName.set("");
      return;
    }
    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
      this.imporError.set("Hanya file .xlsx / .xls yang diperbolehkan.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imporError.set("Ukuran file melebihi batas maksimal 5 MB.");
      return;
    }
    this.imporFile.set(file);
    this.imporFileName.set(file.name);
  }
  prosesImpor() {
    const file = this.imporFile();
    if (!file) {
      this.imporError.set("Pilih file terlebih dahulu.");
      return;
    }
    this.imporLoading.set(true);
    this.imporError.set("");
    this.imporResult.set(null);
    const fd = new FormData();
    fd.append("file", file);
    this.http.post(`${this.apiUrl}/impor`, fd).pipe(catchError((err) => {
      this.imporError.set(err?.error?.message ?? "Gagal memproses impor");
      return of(null);
    })).subscribe((res) => {
      this.imporLoading.set(false);
      if (res)
        this.imporResult.set({ berhasil: res.berhasil ?? 0, gagal: res.gagal ?? 0, errors: res.errors ?? [] });
    });
  }
  // ── Detail ────────────────────────────────────────────
  openDetail(r) {
    this.detailTarget.set(r);
    this.showDetailModal.set(true);
  }
  closeDetail() {
    this.showDetailModal.set(false);
  }
  // ── Karyawan Dropdown ─────────────────────────────────
  selectKaryawan(k) {
    this.selectedKaryawan.set(k);
    this.formKaryawanId.set(String(k.id));
    this.karyawanSearch.set(k.namaLengkap);
    this.showKaryawanDd.set(false);
  }
  onKaryawanBlur() {
    setTimeout(() => this.showKaryawanDd.set(false), 300);
  }
  // ── Sort ──────────────────────────────────────────────
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
  // ── Format ────────────────────────────────────────────
  formatDt(iso) {
    if (!iso)
      return "-";
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" }) + " " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  }
  statusBadge(s) {
    return s === "DISETUJUI" ? "bg-success-subtle text-success" : s === "DITOLAK" ? "bg-danger-subtle text-danger" : "bg-warning-subtle text-warning";
  }
  statusLabel(s) {
    return s === "DISETUJUI" ? "Disetujui" : s === "DITOLAK" ? "Ditolak" : "Pengajuan";
  }
  resetForm() {
    this.formKaryawanId.set("");
    this.formWaktuMulai.set("");
    this.formWaktuSelesai.set("");
    this.formMenitSebelum.set("");
    this.formCatatan.set("");
    this.selectedKaryawan.set(null);
    this.karyawanSearch.set("");
    this.showKaryawanDd.set(false);
    this.formError.set("");
  }
  static {
    this.\u0275fac = function JadwalLemburComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JadwalLemburComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JadwalLemburComponent, selectors: [["app-jadwal-lembur"]], decls: 84, vars: 41, consts: [["loadTpl", ""], [1, "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "gap-2", "mb-3"], [1, "btn", "btn-sm", "px-4", "fw-semibold", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-3"], ["type", "date", "placeholder", "Tanggal Mulai", 1, "form-control", "form-control-sm", 2, "max-width", "145px", 3, "change", "value"], [1, "text-muted"], ["type", "date", "placeholder", "Tanggal Selesai", 1, "form-control", "form-control-sm", 2, "max-width", "145px", 3, "change", "value"], [1, "form-select", "form-select-sm", 2, "max-width", "180px", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-1"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 2, "max-width", "160px", 3, "input", "keyup.enter", "value"], [1, "btn", "btn-sm", "btn-primary", "px-3", 3, "click"], [1, "bx", "bx-search"], [1, "ms-auto", "d-flex", "gap-2"], [1, "btn", "btn-primary", "btn-sm", "px-3", "fw-semibold", 3, "click"], [1, "bx", "bx-plus", "me-1"], ["title", "Impor Excel", 1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-import"], ["title", "Ekspor Excel", 1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-spreadsheet"], ["class", "alert alert-danger py-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", 2, "font-size", ".83rem"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "change", "value"], [2, "font-size", ".83rem"], ["type", "text", "placeholder", "Ketik untuk mencari\u2026", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "input", "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:;", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["class", "modal d-block", "tabindex", "-1", "style", "background:rgba(0,0,0,.45)", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger", "py-2"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "background", "#f0f2f5"], [2, "width", "36px"], [2, "cursor", "pointer", 3, "click"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "py-4"], [1, "text-muted", 2, "font-size", ".78rem"], ["class", "rounded-circle", "style", "width:34px;height:34px;object-fit:cover", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], [1, "fw-semibold"], [1, "text-muted", 2, "font-size", ".74rem"], [1, "fw-semibold", 2, "font-size", ".82rem"], ["class", "badge bg-info-subtle text-info mt-1", 4, "ngIf"], ["class", "badge bg-secondary-subtle text-secondary", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["style", "font-size:.8rem", 4, "ngIf"], [1, "badge", "fw-semibold", "px-2", "py-1"], ["class", "text-danger mt-1", "style", "font-size:.74rem", 4, "ngIf"], [1, "d-flex", "justify-content-center", "gap-1"], ["title", "Detail", 1, "btn", "btn-sm", "btn-outline-secondary", "px-2", 3, "click"], [1, "bx", "bx-info-circle"], ["class", "btn btn-sm btn-outline-success px-2", "title", "Setujui", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-warning px-2", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger px-2", "title", "Tolak", 3, "click", 4, "ngIf"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-outline-danger", "px-2", 3, "click"], [1, "bx", "bx-trash"], ["onerror", "this.style.display='none'", 1, "rounded-circle", 2, "width", "34px", "height", "34px", "object-fit", "cover", 3, "src"], [1, "badge", "bg-info-subtle", "text-info", "mt-1"], [1, "badge", "bg-secondary-subtle", "text-secondary"], [2, "font-size", ".8rem"], [1, "text-danger", "mt-1", 2, "font-size", ".74rem"], ["title", "Setujui", 1, "btn", "btn-sm", "btn-outline-success", "px-2", 3, "click"], [1, "bx", "bx-check"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-warning", "px-2", 3, "click"], [1, "bx", "bx-edit"], ["title", "Tolak", 1, "btn", "btn-sm", "btn-outline-danger", "px-2", 3, "click"], [1, "bx", "bx-x"], [1, "text-center", "py-5"], [1, "spinner-border", "spinner-border-sm", "text-primary"], ["tabindex", "-1", 1, "modal", "d-block", 2, "background", "rgba(0,0,0,.45)"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "540px"], [1, "modal-content", 2, "overflow", "visible"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body", 2, "overflow", "visible"], [1, "mb-3", "row", "align-items-start"], [1, "col-sm-4", "col-form-label", 2, "font-size", ".88rem"], [1, "text-danger"], [1, "col-sm-8"], [1, "position-relative"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Tulis kata kunci...", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value"], [1, "input-group-text", 2, "cursor", "pointer", 3, "mousedown"], [1, "bx", "bx-chevron-down"], ["class", "list-unstyled position-absolute w-100 bg-white border rounded shadow mb-0", "style", "z-index:9999;max-height:230px;overflow-y:auto;top:calc(100% + 2px);left:0", 4, "ngIf"], [1, "mb-3", "row", "align-items-center"], ["type", "datetime-local", 1, "form-control", "form-control-sm", 3, "change", "value"], ["type", "number", "placeholder", "", "min", "0", 1, "form-control", 3, "input", "value"], [1, "input-group-text", "text-success", "fw-semibold", 2, "font-size", ".78rem"], [1, "mb-2", "row", "align-items-start"], ["rows", "3", 1, "form-control", "form-control-sm", 3, "input", "value"], ["class", "alert alert-danger py-2 mt-2", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], [1, "list-unstyled", "position-absolute", "w-100", "bg-white", "border", "rounded", "shadow", "mb-0", 2, "z-index", "9999", "max-height", "230px", "overflow-y", "auto", "top", "calc(100% + 2px)", "left", "0"], ["class", "px-3 py-2 text-muted", "style", "font-size:.83rem", 4, "ngIf"], ["class", "px-3 py-2", "style", "font-size:.85rem;cursor:pointer;border-bottom:1px solid #f0f0f0", 3, "mousedown", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "text-muted", 2, "font-size", ".83rem"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "px-3", "py-2", 2, "font-size", ".85rem", "cursor", "pointer", "border-bottom", "1px solid #f0f0f0", 3, "mousedown", "mouseover", "mouseout"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "alert", "alert-danger", "py-2", "mt-2"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "420px"], [1, "modal-content"], [1, "modal-header", "border-0"], [1, "modal-title", "fw-bold", "text-danger"], [1, "modal-body"], [1, "mb-1"], [1, "mb-2"], [1, "form-label", 2, "font-size", ".85rem"], ["rows", "3", "placeholder", "Opsional\u2026", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "modal-footer", "border-0"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click", "disabled"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "400px"], [1, "text-muted", 2, "font-size", ".83rem"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "480px"], ["class", "modal-body", 4, "ngIf"], [1, "table", "table-borderless", "mb-0", 2, "font-size", ".87rem"], [2, "width", "45%"], [1, "badge", "fw-semibold"], [1, "form-select", "form-select-sm", 3, "change", "value"], ["value", "PENGAJUAN"], ["value", "DISETUJUI"], ["value", "DITOLAK"], ["type", "date", 1, "form-control", "form-control-sm", 3, "change", "value"], [1, "mb-2", "row", "align-items-center"], ["type", "text", "placeholder", "Cari karyawan\u2026", 1, "form-control", "form-control-sm", 3, "input", "value"], ["class", "bx bx-download me-1", 4, "ngIf"], [1, "bx", "bx-download", "me-1"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "560px"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "p-3", "rounded", 2, "background", "#f8fafc", "border", "1px solid #e2e8f0"], [1, "fw-semibold", 2, "font-size", ".88rem"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "mb-3", "p-3", "rounded", 2, "background", "#fffbeb", "border", "1px solid #fde68a", "font-size", ".82rem"], [1, "col-sm-3", "col-form-label", "fw-semibold", 2, "font-size", ".88rem"], [1, "col-sm-9"], ["type", "file", "accept", ".xlsx,.xls", 1, "form-control", "form-control-sm", 3, "change", "disabled"], [1, "text-muted", "mt-1", 2, "font-size", ".76rem"], ["class", "alert alert-danger py-2 mb-2", "style", "font-size:.84rem", 4, "ngIf"], ["class", "btn btn-primary btn-sm px-4", 3, "disabled", "click", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "mb-2", 2, "font-size", ".84rem"], [1, "my-3"], [1, "d-flex", "gap-3", "mb-2"], [1, "badge", "bg-success", "px-3", "py-2"], [1, "badge", "bg-danger", "px-3", "py-2"], ["class", "rounded border p-2", "style", "max-height:180px;overflow-y:auto;font-size:.8rem", 4, "ngIf"], ["class", "alert alert-success py-2 mb-0 mt-2", 4, "ngIf"], [1, "rounded", "border", "p-2", 2, "max-height", "180px", "overflow-y", "auto", "font-size", ".8rem"], ["class", "text-danger py-1 border-bottom", 4, "ngFor", "ngForOf"], [1, "text-danger", "py-1", "border-bottom"], [1, "bx", "bx-x-circle", "me-1"], [1, "alert", "alert-success", "py-2", "mb-0", "mt-2"], [1, "bx", "bx-check-circle", "me-1"], ["class", "bx bx-upload me-1", 4, "ngIf"], [1, "bx", "bx-upload", "me-1"]], template: function JadwalLemburComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3, "Jadwal Lembur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 5)(10, "span", 7);
        \u0275\u0275text(11, "Lembur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 8);
        \u0275\u0275text(13, "Jadwal Lembur");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "button", 12);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_17_listener() {
          return ctx.setTab("PENGAJUAN");
        });
        \u0275\u0275text(18, "Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_19_listener() {
          return ctx.setTab("DISETUJUI");
        });
        \u0275\u0275text(20, "Disetujui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_21_listener() {
          return ctx.setTab("DITOLAK");
        });
        \u0275\u0275text(22, "Ditolak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "input", 14);
        \u0275\u0275listener("change", function JadwalLemburComponent_Template_input_change_24_listener($event) {
          return ctx.filterDari.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 15);
        \u0275\u0275text(26, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 16);
        \u0275\u0275listener("change", function JadwalLemburComponent_Template_input_change_27_listener($event) {
          return ctx.filterSampai.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "select", 17);
        \u0275\u0275listener("change", function JadwalLemburComponent_Template_select_change_28_listener($event) {
          return ctx.filterDivisi.set($event.target.value);
        });
        \u0275\u0275elementStart(29, "option", 18);
        \u0275\u0275text(30, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, JadwalLemburComponent_option_31_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 20)(33, "input", 21);
        \u0275\u0275listener("input", function JadwalLemburComponent_Template_input_input_33_listener($event) {
          return ctx.filterCari.set($event.target.value);
        })("keyup.enter", function JadwalLemburComponent_Template_input_keyup_enter_33_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 22);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_34_listener() {
          return ctx.load();
        });
        \u0275\u0275element(35, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 24)(37, "button", 25);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_37_listener() {
          return ctx.openTambah();
        });
        \u0275\u0275element(38, "i", 26);
        \u0275\u0275text(39, "Tambah Jadwal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 27);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_40_listener() {
          return ctx.openImpor();
        });
        \u0275\u0275element(41, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 29);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_button_click_42_listener() {
          return ctx.openEkspor();
        });
        \u0275\u0275element(43, "i", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(44, JadwalLemburComponent_div_44_Template, 2, 1, "div", 31);
        \u0275\u0275elementStart(45, "div", 32)(46, "div", 33)(47, "label", 34);
        \u0275\u0275text(48, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "select", 35);
        \u0275\u0275listener("change", function JadwalLemburComponent_Template_select_change_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtPageSize.set(+$event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275template(50, JadwalLemburComponent_option_50_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 36);
        \u0275\u0275text(52, "data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 33)(54, "label", 34);
        \u0275\u0275text(55, "Cari:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "input", 37);
        \u0275\u0275listener("input", function JadwalLemburComponent_Template_input_input_56_listener($event) {
          \u0275\u0275restoreView(_r1);
          ctx.dtSearch.set($event.target.value);
          return \u0275\u0275resetView(ctx.dtPage.set(1));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(57, JadwalLemburComponent_div_57_Template, 23, 8, "div", 38)(58, JadwalLemburComponent_ng_template_58_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(60, "div", 39)(61, "small", 15);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "nav")(64, "ul", 40)(65, "li", 41)(66, "a", 42);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_a_click_66_listener() {
          return ctx.dtPage.set(1);
        });
        \u0275\u0275text(67, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "li", 41)(69, "a", 42);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_a_click_69_listener() {
          return ctx.dtPage.set(ctx.dtPage() - 1);
        });
        \u0275\u0275text(70, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(71, JadwalLemburComponent_li_71_Template, 3, 3, "li", 43);
        \u0275\u0275elementStart(72, "li", 41)(73, "a", 42);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_a_click_73_listener() {
          return ctx.dtPage.set(ctx.dtPage() + 1);
        });
        \u0275\u0275text(74, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "li", 41)(76, "a", 42);
        \u0275\u0275listener("click", function JadwalLemburComponent_Template_a_click_76_listener() {
          return ctx.dtPage.set(ctx.dtTotalPages());
        });
        \u0275\u0275text(77, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(78, JadwalLemburComponent_div_78_Template, 54, 10, "div", 44)(79, JadwalLemburComponent_div_79_Template, 24, 5, "div", 44)(80, JadwalLemburComponent_div_80_Template, 22, 6, "div", 44)(81, JadwalLemburComponent_div_81_Template, 11, 1, "div", 44)(82, JadwalLemburComponent_div_82_Template, 50, 9, "div", 44)(83, JadwalLemburComponent_div_83_Template, 38, 5, "div", 44);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const loadTpl_r27 = \u0275\u0275reference(59);
        \u0275\u0275advance(17);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "PENGAJUAN")("btn-outline-secondary", ctx.activeTab() !== "PENGAJUAN");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DISETUJUI")("btn-outline-secondary", ctx.activeTab() !== "DISETUJUI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DITOLAK")("btn-outline-secondary", ctx.activeTab() !== "DITOLAK");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterDari());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterSampai());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterDivisi());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.divisiList());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.dtPageSize());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pageSizeOptions);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.dtSearch());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading())("ngIfElse", loadTpl_r27);
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
        \u0275\u0275property("ngIf", ctx.showFormModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showTolakModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHapusModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetailModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEksporModal());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImporModal());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JadwalLemburComponent, [{
    type: Component,
    args: [{ selector: "app-jadwal-lembur", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <div class="mb-3">\r
    <h4 class="fw-bold mb-0">Jadwal Lembur</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><span class="text-primary">Lembur</span></li>\r
        <li class="breadcrumb-item active">Jadwal Lembur</li>\r
      </ol>\r
    </nav>\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Tabs -->\r
      <div class="d-flex gap-2 mb-3">\r
        <button class="btn btn-sm px-4 fw-semibold"\r
          [class.btn-primary]="activeTab()==='PENGAJUAN'" [class.btn-outline-secondary]="activeTab()!=='PENGAJUAN'"\r
          (click)="setTab('PENGAJUAN')">Pengajuan</button>\r
        <button class="btn btn-sm px-4 fw-semibold"\r
          [class.btn-primary]="activeTab()==='DISETUJUI'" [class.btn-outline-secondary]="activeTab()!=='DISETUJUI'"\r
          (click)="setTab('DISETUJUI')">Disetujui</button>\r
        <button class="btn btn-sm px-4 fw-semibold"\r
          [class.btn-primary]="activeTab()==='DITOLAK'" [class.btn-outline-secondary]="activeTab()!=='DITOLAK'"\r
          (click)="setTab('DITOLAK')">Ditolak</button>\r
      </div>\r
\r
      <!-- Filter -->\r
      <div class="d-flex flex-wrap gap-2 align-items-center mb-3">\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
          placeholder="Tanggal Mulai"\r
          [value]="filterDari()" (change)="filterDari.set($any($event.target).value)">\r
        <span class="text-muted">-</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:145px"\r
          placeholder="Tanggal Selesai"\r
          [value]="filterSampai()" (change)="filterSampai.set($any($event.target).value)">\r
\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
          [value]="filterDivisi()" (change)="filterDivisi.set($any($event.target).value)">\r
          <option value="">--Divisi--</option>\r
          <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
        </select>\r
\r
        <div class="d-flex gap-1">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari" style="max-width:160px"\r
            [value]="filterCari()" (input)="filterCari.set($any($event.target).value)" (keyup.enter)="load()">\r
          <button class="btn btn-sm btn-primary px-3" (click)="load()"><i class="bx bx-search"></i></button>\r
        </div>\r
\r
        <div class="ms-auto d-flex gap-2">\r
          <button class="btn btn-primary btn-sm px-3 fw-semibold" (click)="openTambah()">\r
            <i class="bx bx-plus me-1"></i>Tambah Jadwal\r
          </button>\r
\r
          <button class="btn btn-success btn-sm px-3" title="Impor Excel" (click)="openImpor()">\r
            <i class="bx bx-import"></i>\r
          </button>\r
          <button class="btn btn-primary btn-sm px-3" title="Ekspor Excel" (click)="openEkspor()">\r
            <i class="bx bx-spreadsheet"></i>\r
          </button>\r
        </div>\r
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
      <div *ngIf="!loading(); else loadTpl" class="table-responsive">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead style="background:#f0f2f5">\r
            <tr>\r
              <th style="width:36px">#</th>\r
              <th style="cursor:pointer" (click)="sort('namaKaryawan')">\r
                Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
              </th>\r
              <th style="cursor:pointer" (click)="sort('waktuMulai')">\r
                Jadwal <i class="bx {{ sortIcon('waktuMulai') }}"></i>\r
              </th>\r
              <th>Pembatasan Mulai Lembur</th>\r
              <th>Catatan</th>\r
              <th>Status Persetujuan</th>\r
              <th class="text-center">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="dtFiltered().length === 0">\r
              <td colspan="7" class="text-center py-4">\r
                <strong>Menampilkan 0 dari 0 total data</strong>\r
              </td>\r
            </tr>\r
            <tr *ngFor="let r of dtPaged(); let i = index">\r
              <td class="text-muted" style="font-size:.78rem">{{ (dtPage()-1)*dtPageSize()+i+1 }}</td>\r
              <td>\r
                <div class="d-flex align-items-center gap-2">\r
                  <img *ngIf="r.fotoProfil" [src]="r.fotoProfil"\r
                    class="rounded-circle" style="width:34px;height:34px;object-fit:cover"\r
                    onerror="this.style.display='none'">\r
                  <div>\r
                    <div class="fw-semibold">{{ r.namaKaryawan }}</div>\r
                    <div class="text-muted" style="font-size:.74rem">{{ r.namaDivisi }}</div>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <div class="fw-semibold" style="font-size:.82rem">{{ formatDt(r.waktuMulai) }}</div>\r
                <div class="text-muted" style="font-size:.78rem">s/d {{ formatDt(r.waktuSelesai) }}</div>\r
                <span *ngIf="r.durasiLembur" class="badge bg-info-subtle text-info mt-1">{{ r.durasiLembur }}</span>\r
              </td>\r
              <td>\r
                <span *ngIf="r.menitSebelumJadwal != null" class="badge bg-secondary-subtle text-secondary">\r
                  {{ r.menitSebelumJadwal }} Menit Sebelum Jadwal\r
                </span>\r
                <span *ngIf="r.menitSebelumJadwal == null" class="text-muted">-</span>\r
              </td>\r
              <td>\r
                <span *ngIf="r.catatan" style="font-size:.8rem">{{ r.catatan }}</span>\r
                <span *ngIf="!r.catatan" class="text-muted">-</span>\r
              </td>\r
              <td>\r
                <span class="badge fw-semibold px-2 py-1" [class]="statusBadge(r.status)">\r
                  {{ statusLabel(r.status) }}\r
                </span>\r
                <div *ngIf="r.catatanPenolakan" class="text-danger mt-1" style="font-size:.74rem">\r
                  {{ r.catatanPenolakan }}\r
                </div>\r
              </td>\r
              <td class="text-center">\r
                <div class="d-flex justify-content-center gap-1">\r
                  <button class="btn btn-sm btn-outline-secondary px-2" title="Detail" (click)="openDetail(r)">\r
                    <i class="bx bx-info-circle"></i>\r
                  </button>\r
                  <button *ngIf="r.status==='PENGAJUAN'" class="btn btn-sm btn-outline-success px-2" title="Setujui" (click)="setujui(r)">\r
                    <i class="bx bx-check"></i>\r
                  </button>\r
                  <button *ngIf="r.status==='PENGAJUAN'" class="btn btn-sm btn-outline-warning px-2" title="Edit" (click)="openEdit(r)">\r
                    <i class="bx bx-edit"></i>\r
                  </button>\r
                  <button *ngIf="r.status==='PENGAJUAN'" class="btn btn-sm btn-outline-danger px-2" title="Tolak" (click)="openTolak(r)">\r
                    <i class="bx bx-x"></i>\r
                  </button>\r
                  <button class="btn btn-sm btn-outline-danger px-2" title="Hapus" (click)="openHapus(r)">\r
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
      <!-- Footer pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-3">\r
        <small class="text-muted">\r
          Menampilkan\r
          {{ dtFiltered().length===0 ? 0 : (dtPage()-1)*dtPageSize()+1 }}\u2013{{ Math.min(dtPage()*dtPageSize(), dtFiltered().length) }}\r
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
  <!-- \u2500\u2500 Modal Tambah/Edit \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showFormModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:540px">\r
      <div class="modal-content" style="overflow:visible">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">{{ editTarget() ? 'Edit' : 'Tambah' }} Jadwal Lembur</h5>\r
          <button class="btn-close" (click)="closeForm()"></button>\r
        </div>\r
        <div class="modal-body" style="overflow:visible">\r
\r
          <!-- Karyawan searchable dropdown -->\r
          <div class="mb-3 row align-items-start">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">\r
              Karyawan <span class="text-danger">*</span>\r
            </label>\r
            <div class="col-sm-8">\r
              <div class="position-relative">\r
                <div class="input-group input-group-sm">\r
                  <input type="text" class="form-control"\r
                    placeholder="Tulis kata kunci..."\r
                    autocomplete="off"\r
                    [value]="karyawanSearch()"\r
                    (input)="karyawanSearch.set($any($event.target).value); showKaryawanDd.set(true)"\r
                    (focus)="showKaryawanDd.set(true)"\r
                    (blur)="onKaryawanBlur()">\r
                  <span class="input-group-text" style="cursor:pointer"\r
                    (mousedown)="$event.preventDefault(); $event.stopPropagation(); showKaryawanDd.set(!showKaryawanDd())">\r
                    <i class="bx bx-chevron-down"></i>\r
                  </span>\r
                </div>\r
                <ul *ngIf="showKaryawanDd()"\r
                  class="list-unstyled position-absolute w-100 bg-white border rounded shadow mb-0"\r
                  style="z-index:9999;max-height:230px;overflow-y:auto;top:calc(100% + 2px);left:0">\r
                  <li *ngIf="karyawanLoading()" class="px-3 py-2 text-muted" style="font-size:.83rem">\r
                    <span class="spinner-border spinner-border-sm me-1"></span> Memuat data\u2026\r
                  </li>\r
                  <li *ngIf="!karyawanLoading() && karyawanFiltered().length === 0"\r
                    class="px-3 py-2 text-muted" style="font-size:.83rem">\r
                    Tidak ada data karyawan\r
                  </li>\r
                  <li *ngFor="let k of karyawanFiltered()"\r
                    class="px-3 py-2"\r
                    style="font-size:.85rem;cursor:pointer;border-bottom:1px solid #f0f0f0"\r
                    (mousedown)="$event.preventDefault(); $event.stopPropagation(); selectKaryawan(k)"\r
                    (mouseover)="$any($event.currentTarget).style.background='#eef2ff'"\r
                    (mouseout)="$any($event.currentTarget).style.background=''">\r
                    <div class="fw-semibold">{{ k.namaLengkap }}</div>\r
                    <div class="text-muted" style="font-size:.75rem">{{ k.namaDivisi ?? '-' }}</div>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Waktu Mulai -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">\r
              Waktu Mulai <span class="text-danger">*</span>\r
            </label>\r
            <div class="col-sm-8">\r
              <input type="datetime-local" class="form-control form-control-sm"\r
                [value]="formWaktuMulai()"\r
                (change)="formWaktuMulai.set($any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <!-- Waktu Selesai -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">\r
              Waktu Selesai <span class="text-danger">*</span>\r
            </label>\r
            <div class="col-sm-8">\r
              <input type="datetime-local" class="form-control form-control-sm"\r
                [value]="formWaktuSelesai()"\r
                (change)="formWaktuSelesai.set($any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <!-- Pembatasan -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Pembatasan Mulai Lembur</label>\r
            <div class="col-sm-8">\r
              <div class="input-group input-group-sm">\r
                <input type="number" class="form-control" placeholder="" min="0"\r
                  [value]="formMenitSebelum()"\r
                  (input)="formMenitSebelum.set($any($event.target).value)">\r
                <span class="input-group-text text-success fw-semibold" style="font-size:.78rem">\r
                  Menit Sebelum Jadwal\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Catatan -->\r
          <div class="mb-2 row align-items-start">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Catatan</label>\r
            <div class="col-sm-8">\r
              <textarea class="form-control form-control-sm" rows="3"\r
                [value]="formCatatan()"\r
                (input)="formCatatan.set($any($event.target).value)"></textarea>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="formError()" class="alert alert-danger py-2 mt-2">{{ formError() }}</div>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-primary btn-sm px-4" (click)="simpan()" [disabled]="formSaving()">\r
            <span *ngIf="formSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Simpan\r
          </button>\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeForm()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Tolak \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showTolakModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:420px">\r
      <div class="modal-content">\r
        <div class="modal-header border-0">\r
          <h5 class="modal-title fw-bold text-danger">Tolak Jadwal Lembur</h5>\r
          <button class="btn-close" (click)="closeTolak()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <p class="mb-1">Tolak jadwal lembur milik <strong>{{ tolakTarget()?.namaKaryawan }}</strong>?</p>\r
          <div class="mb-2">\r
            <label class="form-label" style="font-size:.85rem">Catatan Penolakan</label>\r
            <textarea class="form-control form-control-sm" rows="3"\r
              [value]="tolakCatatan()"\r
              (input)="tolakCatatan.set($any($event.target).value)"\r
              placeholder="Opsional\u2026"></textarea>\r
          </div>\r
          <div *ngIf="tolakError()" class="alert alert-danger py-2">{{ tolakError() }}</div>\r
        </div>\r
        <div class="modal-footer border-0">\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeTolak()">Batal</button>\r
          <button class="btn btn-danger btn-sm px-4" (click)="konfirmasiTolak()" [disabled]="tolakSaving()">\r
            <span *ngIf="tolakSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
            Tolak\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Hapus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showHapusModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:400px">\r
      <div class="modal-content">\r
        <div class="modal-header border-0">\r
          <h5 class="modal-title fw-bold text-danger">Hapus Jadwal Lembur</h5>\r
          <button class="btn-close" (click)="closeHapus()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <p>Hapus jadwal lembur milik <strong>{{ hapusTarget()?.namaKaryawan }}</strong>?</p>\r
          <p class="text-muted" style="font-size:.83rem">{{ formatDt(hapusTarget()?.waktuMulai ?? '') }} \u2013 {{ formatDt(hapusTarget()?.waktuSelesai ?? '') }}</p>\r
          <div *ngIf="hapusError()" class="alert alert-danger py-2">{{ hapusError() }}</div>\r
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
  <!-- \u2500\u2500 Modal Detail \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showDetailModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:480px">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Detail Jadwal Lembur</h5>\r
          <button class="btn-close" (click)="closeDetail()"></button>\r
        </div>\r
        <div class="modal-body" *ngIf="detailTarget() as r">\r
          <table class="table table-borderless mb-0" style="font-size:.87rem">\r
            <tr><th style="width:45%">Karyawan</th><td>{{ r.namaKaryawan }}</td></tr>\r
            <tr><th>Divisi</th><td>{{ r.namaDivisi ?? '-' }}</td></tr>\r
            <tr><th>Jabatan</th><td>{{ r.namaJabatan ?? '-' }}</td></tr>\r
            <tr><th>Waktu Mulai</th><td>{{ formatDt(r.waktuMulai) }}</td></tr>\r
            <tr><th>Waktu Selesai</th><td>{{ formatDt(r.waktuSelesai) }}</td></tr>\r
            <tr><th>Durasi</th><td><strong>{{ r.durasiLembur ?? '-' }}</strong></td></tr>\r
            <tr><th>Pembatasan</th>\r
              <td>{{ r.menitSebelumJadwal != null ? r.menitSebelumJadwal + ' Menit Sebelum Jadwal' : '-' }}</td></tr>\r
            <tr><th>Catatan</th><td>{{ r.catatan ?? '-' }}</td></tr>\r
            <tr><th>Status</th>\r
              <td><span class="badge fw-semibold" [class]="statusBadge(r.status)">{{ statusLabel(r.status) }}</span></td></tr>\r
            <tr *ngIf="r.catatanPenolakan"><th>Catatan Penolakan</th><td class="text-danger">{{ r.catatanPenolakan }}</td></tr>\r
            <tr><th>Dibuat Oleh</th><td>{{ r.dibuatOleh ?? '-' }}</td></tr>\r
          </table>\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeDetail()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Ekspor Excel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showEksporModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:480px">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Ekspor Excel</h5>\r
          <button class="btn-close" (click)="closeEkspor()"></button>\r
        </div>\r
        <div class="modal-body">\r
\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Status</label>\r
            <div class="col-sm-8">\r
              <select class="form-select form-select-sm"\r
                [value]="eksporStatus()" (change)="eksporStatus.set($any($event.target).value)">\r
                <option value="">--Semua Status--</option>\r
                <option value="PENGAJUAN">Pengajuan</option>\r
                <option value="DISETUJUI">Disetujui</option>\r
                <option value="DITOLAK">Ditolak</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Tanggal</label>\r
            <div class="col-sm-8">\r
              <div class="d-flex align-items-center gap-2">\r
                <input type="date" class="form-control form-control-sm"\r
                  [value]="eksporDari()" (change)="eksporDari.set($any($event.target).value)">\r
                <span>-</span>\r
                <input type="date" class="form-control form-control-sm"\r
                  [value]="eksporSampai()" (change)="eksporSampai.set($any($event.target).value)">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Divisi</label>\r
            <div class="col-sm-8">\r
              <select class="form-select form-select-sm"\r
                [value]="eksporDivisi()" (change)="eksporDivisi.set($any($event.target).value)">\r
                <option value="">--Divisi--</option>\r
                <option *ngFor="let d of divisiList()" [value]="d.id">{{ d.namaDivisi }}</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="mb-2 row align-items-center">\r
            <label class="col-sm-4 col-form-label" style="font-size:.88rem">Kata kunci</label>\r
            <div class="col-sm-8">\r
              <input type="text" class="form-control form-control-sm"\r
                [value]="eksporCari()" (input)="eksporCari.set($any($event.target).value)" placeholder="Cari karyawan\u2026">\r
            </div>\r
          </div>\r
\r
        </div>\r
        <div class="modal-footer">\r
          <button class="btn btn-primary btn-sm px-4" (click)="prosesEkspor()" [disabled]="eksporLoading()">\r
            <span *ngIf="eksporLoading()" class="spinner-border spinner-border-sm me-1"></span>\r
            <i *ngIf="!eksporLoading()" class="bx bx-download me-1"></i>\r
            Unduh Excel\r
          </button>\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeEkspor()">Tutup</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Impor Excel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="showImporModal()" class="modal d-block" tabindex="-1" style="background:rgba(0,0,0,.45)">\r
    <div class="modal-dialog modal-dialog-centered" style="max-width:560px">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title fw-bold">Impor Jadwal Lembur</h5>\r
          <button class="btn-close" (click)="closeImpor()"></button>\r
        </div>\r
        <div class="modal-body">\r
\r
          <!-- Download template -->\r
          <div class="d-flex align-items-center justify-content-between mb-3 p-3 rounded"\r
            style="background:#f8fafc;border:1px solid #e2e8f0">\r
            <div>\r
              <div class="fw-semibold" style="font-size:.88rem">Template Excel</div>\r
              <div class="text-muted" style="font-size:.78rem">Download template, isi data, lalu upload kembali.</div>\r
            </div>\r
            <button class="btn btn-outline-primary btn-sm" (click)="downloadTemplate()">\r
              <i class="bx bx-download me-1"></i>Download Template\r
            </button>\r
          </div>\r
\r
          <!-- Petunjuk -->\r
          <div class="mb-3 p-3 rounded" style="background:#fffbeb;border:1px solid #fde68a;font-size:.82rem">\r
            <strong>Kolom wajib:</strong> NIP, Waktu Mulai (yyyy-MM-dd HH:mm), Waktu Selesai (yyyy-MM-dd HH:mm)<br>\r
            <strong>Kolom opsional:</strong> Menit Sebelum Jadwal, Catatan\r
          </div>\r
\r
          <!-- File upload -->\r
          <div class="mb-3 row align-items-center">\r
            <label class="col-sm-3 col-form-label fw-semibold" style="font-size:.88rem">File Excel</label>\r
            <div class="col-sm-9">\r
              <input type="file" accept=".xlsx,.xls" class="form-control form-control-sm"\r
                (change)="onFileChange($event)" [disabled]="imporLoading()">\r
              <div class="text-muted mt-1" style="font-size:.76rem">Maksimal 5 MB. Format .xlsx / .xls</div>\r
            </div>\r
          </div>\r
\r
          <!-- Error -->\r
          <div *ngIf="imporError()" class="alert alert-danger py-2 mb-2" style="font-size:.84rem">\r
            {{ imporError() }}\r
          </div>\r
\r
          <!-- Hasil -->\r
          <div *ngIf="imporResult() as r">\r
            <hr class="my-3">\r
            <div class="d-flex gap-3 mb-2">\r
              <span class="badge bg-success px-3 py-2">\u2713 Berhasil: {{ r.berhasil }}</span>\r
              <span class="badge bg-danger px-3 py-2">\u2717 Gagal: {{ r.gagal }}</span>\r
            </div>\r
            <div *ngIf="r.errors.length > 0"\r
              class="rounded border p-2" style="max-height:180px;overflow-y:auto;font-size:.8rem">\r
              <div *ngFor="let e of r.errors" class="text-danger py-1 border-bottom">\r
                <i class="bx bx-x-circle me-1"></i>{{ e }}\r
              </div>\r
            </div>\r
            <div *ngIf="r.berhasil > 0 && r.gagal === 0" class="alert alert-success py-2 mb-0 mt-2">\r
              <i class="bx bx-check-circle me-1"></i>Semua data berhasil diimpor!\r
            </div>\r
          </div>\r
\r
        </div>\r
        <div class="modal-footer">\r
          <button *ngIf="!imporResult()" class="btn btn-primary btn-sm px-4"\r
            (click)="prosesImpor()" [disabled]="!imporFile() || imporLoading()">\r
            <span *ngIf="imporLoading()" class="spinner-border spinner-border-sm me-1"></span>\r
            <i *ngIf="!imporLoading()" class="bx bx-upload me-1"></i>\r
            Proses\r
          </button>\r
          <button class="btn btn-secondary btn-sm px-4" (click)="closeImpor()">\r
            {{ imporResult() ? 'Tutup' : 'Batal' }}\r
          </button>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JadwalLemburComponent, { className: "JadwalLemburComponent", filePath: "src/app/features/lembur/jadwal-lembur/jadwal-lembur.component.ts", lineNumber: 25 });
})();
export {
  JadwalLemburComponent
};
//# sourceMappingURL=chunk-XEVJQFUM.js.map
