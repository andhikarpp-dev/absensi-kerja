import {
  AbsensiService
} from "./chunk-ZRLBCAEX.js";
import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/kehadiran/review/review-kehadiran.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReviewKehadiranComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.jumlahPerlu());
  }
}
function ReviewKehadiranComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
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
function ReviewKehadiranComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error(), " ");
  }
}
function ReviewKehadiranComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275text(3, "Memuat data...");
    \u0275\u0275elementEnd()();
  }
}
function ReviewKehadiranComponent_Conditional_50_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
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
function ReviewKehadiranComponent_Conditional_50_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, " Tandai Sudah Dicek");
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "button", 54);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Conditional_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tandaiSemua());
    });
    \u0275\u0275text(4, " [ Tandai Semua ] ");
    \u0275\u0275elementEnd()();
  }
}
function ReviewKehadiranComponent_Conditional_50_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275text(4, "Tidak ada data");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.activeTab() === "perlu" ? 7 : 6);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r6.namaKaryawan.charAt(0), " ");
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.namaJabatan);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "|");
    \u0275\u0275elementEnd();
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.namaDivisi);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.zonaWaktu);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.alasanReview);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Presensi di Luar Area");
    \u0275\u0275elementEnd();
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Presensi Menggunakan Device Berbeda");
    \u0275\u0275elementEnd();
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 71);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r6.lokasiMasukUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", a_r6.diLuarLokasi ? "#e74c3c" : "#27ae60");
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 72);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 73);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r6.fotoMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", a_r6.namaPerangkat);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 75);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 80);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 70)(1, "button", 25);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const a_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tandaiDicek(a_r6));
    });
    \u0275\u0275conditionalCreate(2, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Conditional_2_Template, 1, 0, "span", 79)(3, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Conditional_3_Template, 1, 0, "i", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingId() === a_r6.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.savingId() === a_r6.id ? 2 : 3);
  }
}
function ReviewKehadiranComponent_Conditional_50_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 36);
    \u0275\u0275conditionalCreate(3, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_3_Template, 1, 1, "img", 58)(4, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_4_Template, 2, 1, "div", 59);
    \u0275\u0275elementStart(5, "div")(6, "div", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 61);
    \u0275\u0275conditionalCreate(9, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(10, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_10_Template, 2, 0, "span", 62);
    \u0275\u0275conditionalCreate(11, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_11_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_12_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td")(14, "div", 65)(15, "span", 66);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 61);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 67);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275conditionalCreate(22, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_22_Template, 2, 1, "span", 68)(23, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_23_Template, 2, 0, "span", 68)(24, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_24_Template, 2, 0, "span", 68)(25, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_25_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 70);
    \u0275\u0275conditionalCreate(27, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_27_Template, 2, 3, "a", 71)(28, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_28_Template, 1, 0, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 70);
    \u0275\u0275conditionalCreate(30, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_30_Template, 2, 1, "a", 73)(31, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_31_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 70);
    \u0275\u0275conditionalCreate(33, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_33_Template, 2, 1, "span", 74)(34, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_34_Template, 1, 0, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, ReviewKehadiranComponent_Conditional_50_For_36_Conditional_35_Template, 4, 2, "td", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const a_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = ctx_r0.fotoUrl(a_r6.fotoProfil)) ? 3 : 4, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r6.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r6.namaJabatan ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.namaJabatan && a_r6.namaDivisi ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.namaDivisi ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.zonaWaktu ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.badgeColor(ctx_r0.tipePresensi(a_r6)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.tipePresensi(a_r6), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatTanggal(a_r6.tanggal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.jamPresensi(a_r6));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r6.alasanReview ? 22 : a_r6.diLuarLokasi ? 23 : a_r6.perangkatBerbeda ? 24 : 25);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(a_r6.lokasiMasukUrl ? 27 : 28);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.fotoMasukUrl ? 30 : 31);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.namaPerangkat ? 33 : 34);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeTab() === "perlu" ? 35 : -1);
  }
}
function ReviewKehadiranComponent_Conditional_50_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(difilter dari ", ctx_r0.rows().length, " total)");
  }
}
function ReviewKehadiranComponent_Conditional_50_Conditional_41_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "button", 85);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Conditional_41_For_6_Template_button_click_1_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(p_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.dtPage() === p_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10);
  }
}
function ReviewKehadiranComponent_Conditional_50_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav")(1, "ul", 81)(2, "li", 82)(3, "button", 83);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Conditional_41_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(ctx_r0.dtPage() - 1));
    });
    \u0275\u0275text(4, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, ReviewKehadiranComponent_Conditional_50_Conditional_41_For_6_Template, 3, 3, "li", 84, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(7, "li", 82)(8, "button", 83);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Conditional_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dtPage.set(ctx_r0.dtPage() + 1));
    });
    \u0275\u0275text(9, "\xBB");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.dtPage() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dtPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.pagesArr());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.dtPage() === ctx_r0.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.dtPage() === ctx_r0.totalPages());
  }
}
function ReviewKehadiranComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "label", 37);
    \u0275\u0275text(3, "Tampilkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewKehadiranComponent_Conditional_50_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dtPageSize, $event) || (ctx_r0.dtPageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReviewKehadiranComponent_Conditional_50_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageSize());
    });
    \u0275\u0275repeaterCreate(5, ReviewKehadiranComponent_Conditional_50_For_6_Template, 2, 2, "option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8, "data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "span", 41);
    \u0275\u0275element(11, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ReviewKehadiranComponent_Conditional_50_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dtSearch, $event) || (ctx_r0.dtSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReviewKehadiranComponent_Conditional_50_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDtSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 43)(14, "table", 44)(15, "thead", 45)(16, "tr")(17, "th", 46);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Template_th_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sortBy("namaKaryawan"));
    });
    \u0275\u0275text(18, " Karyawan ");
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 47);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Template_th_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sortBy("tanggal"));
    });
    \u0275\u0275text(21, " Presensi ");
    \u0275\u0275element(22, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 48);
    \u0275\u0275listener("click", function ReviewKehadiranComponent_Conditional_50_Template_th_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sortBy("alasanReview"));
    });
    \u0275\u0275text(24, " Alasan ");
    \u0275\u0275element(25, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 49);
    \u0275\u0275text(27, "Status GPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 50);
    \u0275\u0275text(29, "Swafoto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 51);
    \u0275\u0275text(31, "Perangkat");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, ReviewKehadiranComponent_Conditional_50_Conditional_32_Template, 5, 0, "th", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275conditionalCreate(34, ReviewKehadiranComponent_Conditional_50_Conditional_34_Template, 5, 1, "tr");
    \u0275\u0275repeaterCreate(35, ReviewKehadiranComponent_Conditional_50_For_36_Template, 36, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 53)(38, "div", 39);
    \u0275\u0275text(39);
    \u0275\u0275conditionalCreate(40, ReviewKehadiranComponent_Conditional_50_Conditional_40_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, ReviewKehadiranComponent_Conditional_50_Conditional_41_Template, 10, 6, "nav");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dtPageSize);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pageSizeOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dtSearch);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon("namaKaryawan")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon("tanggal")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r0.sortIcon("alasanReview")));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.activeTab() === "perlu" ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.pagedRows().length === 0 ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pagedRows());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r0.filtered().length === 0 ? 0 : (ctx_r0.dtPage() - 1) * ctx_r0.dtPageSize() + 1, "\u2013", ctx_r0.Math.min(ctx_r0.dtPage() * ctx_r0.dtPageSize(), ctx_r0.filtered().length), " dari ", ctx_r0.filtered().length, " data ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.rows().length !== ctx_r0.filtered().length ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.totalPages() > 1 ? 41 : -1);
  }
}
var ReviewKehadiranComponent = class _ReviewKehadiranComponent {
  constructor() {
    this.absensiSvc = inject(AbsensiService);
    this.divisiSvc = inject(DivisiService);
    this.activeTab = signal("perlu", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiId = "";
    this.cari = "";
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
    this.savingId = signal(null, ...ngDevMode ? [{ debugName: "savingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jumlahPerlu = signal(0, ...ngDevMode ? [{ debugName: "jumlahPerlu" }] : (
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
    this.Math = Math;
    this.filtered = computed(() => {
      const q = this.dtSearch().toLowerCase();
      let data = this.rows().filter((a) => !q || a.namaKaryawan.toLowerCase().includes(q) || (a.namaDivisi ?? "").toLowerCase().includes(q) || (a.namaJabatan ?? "").toLowerCase().includes(q) || (a.alasanReview ?? "").toLowerCase().includes(q));
      const col = this.sortCol();
      const dir = this.sortDir();
      if (col && dir) {
        data = [...data].sort((a, b) => {
          let va = a[col] ?? "";
          let vb = b[col] ?? "";
          if (typeof va === "string")
            va = va.toLowerCase();
          if (typeof vb === "string")
            vb = vb.toLowerCase();
          return dir === "asc" ? va > vb ? 1 : -1 : va < vb ? 1 : -1;
        });
      }
      return data;
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.dtPageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagedRows = computed(() => {
      const p = this.dtPage();
      const s = this.dtPageSize();
      return this.filtered().slice((p - 1) * s, p * s);
    }, ...ngDevMode ? [{ debugName: "pagedRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagesArr = computed(() => {
      const total = this.totalPages();
      const cur = this.dtPage();
      const pages = [];
      for (let i = Math.max(1, cur - 2); i <= Math.min(total, cur + 2); i++)
        pages.push(i);
      return pages;
    }, ...ngDevMode ? [{ debugName: "pagesArr" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  sortBy(col) {
    if (this.sortCol() === col) {
      this.sortDir.set(this.sortDir() === "asc" ? "desc" : this.sortDir() === "desc" ? "" : "asc");
      if (this.sortDir() === "")
        this.sortCol.set("");
    } else {
      this.sortCol.set(col);
      this.sortDir.set("asc");
    }
    this.dtPage.set(1);
  }
  sortIcon(col) {
    if (this.sortCol() !== col)
      return "bx-sort";
    return this.sortDir() === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  onDtSearch() {
    this.dtPage.set(1);
  }
  onPageSize() {
    this.dtPage.set(1);
  }
  // ── Computed ──────────────────────────────────────────
  // jumlahPerlu = signal(0);
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.loadData();
  }
  loadData() {
    this.loading.set(true);
    this.error.set("");
    const divId = this.divisiId ? +this.divisiId : void 0;
    const cari = this.cari || void 0;
    const obs = this.activeTab() === "perlu" ? this.absensiSvc.getReviewPerluDicek(divId, cari) : this.absensiSvc.getReviewSudahDicek(divId, cari);
    obs.subscribe({
      next: (data) => {
        this.rows.set(data);
        this.loading.set(false);
        if (this.activeTab() === "perlu")
          this.jumlahPerlu.set(data.length);
      },
      error: (e) => {
        this.error.set(e?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
    if (this.activeTab() === "sudah") {
      this.absensiSvc.getReviewPerluDicek(divId, void 0).subscribe({
        next: (d) => this.jumlahPerlu.set(d.length)
      });
    }
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.loadData();
  }
  tandaiDicek(absensi) {
    if (!absensi.id)
      return;
    this.savingId.set(absensi.id);
    this.absensiSvc.tandaiSudahDicek(absensi.id).subscribe({
      next: () => {
        this.savingId.set(null);
        this.loadData();
      },
      error: () => this.savingId.set(null)
    });
  }
  tandaiSemua() {
    if (!confirm("Tandai semua presensi sebagai sudah dicek?"))
      return;
    const divId = this.divisiId ? +this.divisiId : void 0;
    this.loading.set(true);
    this.absensiSvc.tandaiSemuaSudahDicek(divId).subscribe({
      next: (r) => {
        this.loading.set(false);
        this.loadData();
      },
      error: () => this.loading.set(false)
    });
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.apiUrl.replace("/api", "")}/${path}`;
  }
  formatWaktu(jam) {
    if (!jam)
      return "-";
    return jam.length > 5 ? jam.substring(0, 8) : jam;
  }
  formatTanggal(tgl) {
    if (!tgl)
      return "-";
    try {
      const d = tgl instanceof Object ? new Date(tgl.year, tgl.monthValue - 1, tgl.dayOfMonth) : new Date(tgl);
      return d.toLocaleDateString("id-ID", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
    } catch (e) {
      return String(tgl);
    }
  }
  tipePresensi(a) {
    if (a.jamMulaiIstirahat && !a.jamSelesaiIstirahat)
      return "Istirahat";
    if (a.jamMulaiIstirahat && a.jamSelesaiIstirahat)
      return "Selesai Istirahat";
    if (a.jamMulaiLembur && !a.jamSelesaiLembur)
      return "Lembur";
    if (a.jamMulaiLembur && a.jamSelesaiLembur)
      return "Selesai Lembur";
    if (a.jamMasuk && !a.jamKeluar)
      return "Masuk";
    if (a.jamKeluar)
      return "Keluar";
    return "Masuk";
  }
  badgeColor(tipe) {
    const map = {
      "Masuk": "#6c5ce7",
      "Keluar": "#00b894",
      "Istirahat": "#fdcb6e",
      "Selesai Istirahat": "#e17055",
      "Lembur": "#0984e3",
      "Selesai Lembur": "#00cec9"
    };
    return map[tipe] ?? "#6c5ce7";
  }
  jamPresensi(a) {
    const tipe = this.tipePresensi(a);
    if (tipe === "Istirahat")
      return this.formatWaktu(a.jamMulaiIstirahat);
    if (tipe === "Selesai Istirahat")
      return this.formatWaktu(a.jamSelesaiIstirahat);
    if (tipe === "Lembur")
      return this.formatWaktu(a.jamMulaiLembur);
    if (tipe === "Selesai Lembur")
      return this.formatWaktu(a.jamSelesaiLembur);
    if (tipe === "Keluar")
      return this.formatWaktu(a.jamKeluar);
    return this.formatWaktu(a.jamMasuk);
  }
  static {
    this.\u0275fac = function ReviewKehadiranComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewKehadiranComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewKehadiranComponent, selectors: [["app-review-kehadiran"]], decls: 51, vars: 15, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/kehadiran/harian"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "fw-bold", "mb-3"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-center", "gap-2", "p-3", "border-bottom", "flex-wrap"], [1, "d-flex", "gap-0"], [1, "btn", "btn-sm", "px-4", "fw-semibold", 2, "border-radius", "6px 0 0 6px", 3, "click"], [1, "badge", "bg-warning", "text-dark", "ms-1"], [1, "btn", "btn-sm", "px-4", "fw-semibold", 2, "border-radius", "0 6px 6px 0", 3, "click"], [1, "form-select", "form-select-sm", "ms-auto", 2, "width", "200px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "input-group", "input-group-sm", 2, "width", "200px"], ["type", "text", "placeholder", "Cari...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-success", "btn-sm", "px-3", 3, "click", "disabled"], [1, "bx", "bx-refresh", "me-1"], [1, "px-3", "pt-3", "pb-1"], [1, "rounded", "p-3", 2, "background", "#f8f9fa", "font-size", ".82rem", "color", "#555"], [1, "mb-0", "mt-1", "ps-3"], [1, "alert", "alert-danger", "mx-3", "mt-2", "py-2", "small"], [1, "text-center", "py-5"], [1, "bx", "bx-error-circle", "me-1"], [1, "spinner-border", "text-primary"], [1, "text-muted", "small", "mt-2"], [1, "d-flex", "align-items-center", "justify-content-between", "px-3", "pt-3", "pb-2", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "text-muted", "small", "mb-0"], [1, "form-select", "form-select-sm", 2, "width", "75px", 3, "ngModelChange", "ngModel"], [1, "text-muted", "small"], [1, "input-group", "input-group-sm", 2, "width", "220px"], [1, "input-group-text"], ["type", "text", "placeholder", "Cari dalam tabel...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [1, "table-light"], [2, "min-width", "240px", "cursor", "pointer", 3, "click"], [2, "min-width", "180px", "cursor", "pointer", 3, "click"], [2, "min-width", "220px", "cursor", "pointer", 3, "click"], [1, "text-center", 2, "min-width", "110px"], [1, "text-center", 2, "min-width", "90px"], [1, "text-center", 2, "min-width", "100px"], [1, "text-center", 2, "min-width", "160px"], [1, "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2", "border-top", "flex-wrap", "gap-2"], [1, "btn", "btn-link", "btn-sm", "p-0", "text-primary", "fw-semibold", 2, "font-size", ".78rem", 3, "click"], [1, "text-center", "py-5", "text-muted"], [1, "bx", "bx-check-circle", 2, "font-size", "2rem", "color", "#ccc"], [1, "mt-1"], ["alt", "", 1, "rounded-circle", "flex-shrink-0", 2, "width", "40px", "height", "40px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px", "background", "#e9ecef", "font-size", "14px", "font-weight", "600", "color", "#6c757d"], [1, "fw-semibold"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "mx-1"], [1, "text-primary"], [1, "text-muted", 2, "font-size", ".72rem"], [1, "d-flex", "flex-column"], [1, "badge", "mb-1", "px-2", "py-1", "text-white", 2, "font-size", ".75rem", "border-radius", "4px", "width", "fit-content"], [1, "fw-bold", 2, "font-size", "1.05rem", "letter-spacing", ".03em"], [1, "text-primary", 2, "font-size", ".83rem"], [1, "text-muted", 2, "font-size", ".83rem"], [1, "text-center"], ["target", "_blank", "title", "Lihat di Maps", 3, "href"], [1, "bx", "bxs-map-pin", 2, "font-size", "1.3rem", "color", "#ccc"], ["target", "_blank", "title", "Lihat foto", 3, "href"], [3, "title"], [1, "bx", "bx-mobile-alt", 2, "font-size", "1.3rem", "color", "#ccc"], [1, "bx", "bxs-map-pin", 2, "font-size", "1.3rem"], [1, "bx", "bx-camera", 2, "font-size", "1.3rem", "color", "#495057"], [1, "bx", "bx-mobile-alt", 2, "font-size", "1.3rem", "color", "#495057"], [1, "spinner-border", "spinner-border-sm"], [1, "bx", "bx-check"], [1, "pagination", "pagination-sm", "mb-0", "gap-1"], [1, "page-item"], [1, "page-link", "rounded", 3, "click", "disabled"], [1, "page-item", 3, "active"], [1, "page-link", "rounded", 3, "click"]], template: function ReviewKehadiranComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14, "Review Kehadiran");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "h5", 10);
        \u0275\u0275text(16, "Review Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "button", 15);
        \u0275\u0275listener("click", function ReviewKehadiranComponent_Template_button_click_21_listener() {
          return ctx.setTab("perlu");
        });
        \u0275\u0275text(22, " Perlu Dicek ");
        \u0275\u0275conditionalCreate(23, ReviewKehadiranComponent_Conditional_23_Template, 2, 1, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275listener("click", function ReviewKehadiranComponent_Template_button_click_24_listener() {
          return ctx.setTab("sudah");
        });
        \u0275\u0275text(25, " Sudah Dicek ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function ReviewKehadiranComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.divisiId, $event) || (ctx.divisiId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ReviewKehadiranComponent_Template_select_ngModelChange_26_listener() {
          return ctx.loadData();
        });
        \u0275\u0275elementStart(27, "option", 19);
        \u0275\u0275text(28, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(29, ReviewKehadiranComponent_For_30_Template, 2, 2, "option", 20, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 21)(32, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function ReviewKehadiranComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.cari, $event) || (ctx.cari = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ReviewKehadiranComponent_Template_input_keyup_enter_32_listener() {
          return ctx.loadData();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 23);
        \u0275\u0275listener("click", function ReviewKehadiranComponent_Template_button_click_33_listener() {
          return ctx.loadData();
        });
        \u0275\u0275element(34, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "button", 25);
        \u0275\u0275listener("click", function ReviewKehadiranComponent_Template_button_click_35_listener() {
          return ctx.loadData();
        });
        \u0275\u0275element(36, "i", 26);
        \u0275\u0275text(37, "Refresh ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 27)(39, "div", 28);
        \u0275\u0275text(40, " Data yang ditampilkan adalah saat: ");
        \u0275\u0275elementStart(41, "ul", 29)(42, "li");
        \u0275\u0275text(43, "Presensi pertama kali");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "li");
        \u0275\u0275text(45, "Berada di luar lokasi kehadiran yang sudah diatur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "li");
        \u0275\u0275text(47, "Menggunakan device yang berbeda dengan sebelumnya");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(48, ReviewKehadiranComponent_Conditional_48_Template, 3, 1, "div", 30);
        \u0275\u0275conditionalCreate(49, ReviewKehadiranComponent_Conditional_49_Template, 4, 0, "div", 31);
        \u0275\u0275conditionalCreate(50, ReviewKehadiranComponent_Conditional_50_Template, 42, 18);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "perlu")("btn-outline-secondary", ctx.activeTab() !== "perlu");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.jumlahPerlu() > 0 ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "sudah")("btn-outline-secondary", ctx.activeTab() !== "sudah");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.divisiId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.cari);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.error() ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 50 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewKehadiranComponent, [{
    type: Component,
    args: [{ selector: "app-review-kehadiran", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Kehadiran</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/kehadiran/harian">Kehadiran</a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Review Kehadiran</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <h5 class="fw-bold mb-3">Review Kehadiran</h5>\r
\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body p-0">\r
\r
      <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="d-flex align-items-center gap-2 p-3 border-bottom flex-wrap">\r
\r
        <!-- Tab Perlu Dicek / Sudah Dicek -->\r
        <div class="d-flex gap-0">\r
          <button class="btn btn-sm px-4 fw-semibold"\r
                  [class.btn-primary]="activeTab() === 'perlu'"\r
                  [class.btn-outline-secondary]="activeTab() !== 'perlu'"\r
                  style="border-radius:6px 0 0 6px"\r
                  (click)="setTab('perlu')">\r
            Perlu Dicek\r
            @if (jumlahPerlu() > 0) {\r
              <span class="badge bg-warning text-dark ms-1">{{ jumlahPerlu() }}</span>\r
            }\r
          </button>\r
          <button class="btn btn-sm px-4 fw-semibold"\r
                  [class.btn-primary]="activeTab() === 'sudah'"\r
                  [class.btn-outline-secondary]="activeTab() !== 'sudah'"\r
                  style="border-radius:0 6px 6px 0"\r
                  (click)="setTab('sudah')">\r
            Sudah Dicek\r
          </button>\r
        </div>\r
\r
        <!-- Filter Divisi -->\r
        <select class="form-select form-select-sm ms-auto" style="width:200px" [(ngModel)]="divisiId" (ngModelChange)="loadData()">\r
          <option value="">--Divisi--</option>\r
          @for (d of divisiList(); track d.id) {\r
            <option [value]="d.id">{{ d.namaDivisi }}</option>\r
          }\r
        </select>\r
\r
        <!-- Cari -->\r
        <div class="input-group input-group-sm" style="width:200px">\r
          <input type="text" class="form-control" placeholder="Cari..." [(ngModel)]="cari" (keyup.enter)="loadData()" />\r
          <button class="btn btn-outline-secondary" (click)="loadData()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
\r
        <!-- Refresh -->\r
        <button class="btn btn-success btn-sm px-3" (click)="loadData()" [disabled]="loading()">\r
          <i class="bx bx-refresh me-1"></i>Refresh\r
        </button>\r
      </div>\r
\r
      <!-- \u2500\u2500 Info Banner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="px-3 pt-3 pb-1">\r
        <div class="rounded p-3" style="background:#f8f9fa;font-size:.82rem;color:#555">\r
          Data yang ditampilkan adalah saat:\r
          <ul class="mb-0 mt-1 ps-3">\r
            <li>Presensi pertama kali</li>\r
            <li>Berada di luar lokasi kehadiran yang sudah diatur</li>\r
            <li>Menggunakan device yang berbeda dengan sebelumnya</li>\r
          </ul>\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (error()) {\r
        <div class="alert alert-danger mx-3 mt-2 py-2 small">\r
          <i class="bx bx-error-circle me-1"></i>{{ error() }}\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (loading()) {\r
        <div class="text-center py-5">\r
          <div class="spinner-border text-primary"></div>\r
          <div class="text-muted small mt-2">Memuat data...</div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Tabel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (!loading()) {\r
\r
        <!-- DataTable controls -->\r
        <div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 flex-wrap gap-2">\r
          <div class="d-flex align-items-center gap-2">\r
            <label class="text-muted small mb-0">Tampilkan</label>\r
            <select class="form-select form-select-sm" style="width:75px"\r
                    [(ngModel)]="dtPageSize" (ngModelChange)="onPageSize()">\r
              @for (n of pageSizeOptions; track n) {\r
                <option [value]="n">{{ n }}</option>\r
              }\r
            </select>\r
            <span class="text-muted small">data</span>\r
          </div>\r
          <div class="input-group input-group-sm" style="width:220px">\r
            <span class="input-group-text"><i class="bx bx-search"></i></span>\r
            <input type="text" class="form-control" placeholder="Cari dalam tabel..."\r
                   [(ngModel)]="dtSearch" (ngModelChange)="onDtSearch()" />\r
          </div>\r
        </div>\r
\r
        <div class="table-responsive">\r
          <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
            <thead class="table-light">\r
              <tr>\r
                <th style="min-width:240px;cursor:pointer" (click)="sortBy('namaKaryawan')">\r
                  Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
                </th>\r
                <th style="min-width:180px;cursor:pointer" (click)="sortBy('tanggal')">\r
                  Presensi <i class="bx {{ sortIcon('tanggal') }}"></i>\r
                </th>\r
                <th style="min-width:220px;cursor:pointer" (click)="sortBy('alasanReview')">\r
                  Alasan <i class="bx {{ sortIcon('alasanReview') }}"></i>\r
                </th>\r
                <th class="text-center" style="min-width:110px">Status GPS</th>\r
                <th class="text-center" style="min-width:90px">Swafoto</th>\r
                <th class="text-center" style="min-width:100px">Perangkat</th>\r
                @if (activeTab() === 'perlu') {\r
                  <th class="text-center" style="min-width:160px">\r
                    Tandai Sudah Dicek<br>\r
                    <button class="btn btn-link btn-sm p-0 text-primary fw-semibold" style="font-size:.78rem"\r
                            (click)="tandaiSemua()">\r
                      [ Tandai Semua ]\r
                    </button>\r
                  </th>\r
                }\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @if (pagedRows().length === 0) {\r
                <tr>\r
                  <td [attr.colspan]="activeTab() === 'perlu' ? 7 : 6" class="text-center py-5 text-muted">\r
                    <i class="bx bx-check-circle" style="font-size:2rem;color:#ccc"></i>\r
                    <div class="mt-1">Tidak ada data</div>\r
                  </td>\r
                </tr>\r
              }\r
              @for (a of pagedRows(); track a.id) {\r
                <tr>\r
                  <!-- Karyawan -->\r
                  <td>\r
                    <div class="d-flex align-items-center gap-2">\r
                      @if (fotoUrl(a.fotoProfil); as url) {\r
                        <img [src]="url" alt="" class="rounded-circle flex-shrink-0"\r
                             style="width:40px;height:40px;object-fit:cover;border:2px solid #e9ecef" />\r
                      } @else {\r
                        <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"\r
                             style="width:40px;height:40px;background:#e9ecef;font-size:14px;font-weight:600;color:#6c757d">\r
                          {{ a.namaKaryawan.charAt(0) }}\r
                        </div>\r
                      }\r
                      <div>\r
                        <div class="fw-semibold">{{ a.namaKaryawan }}</div>\r
                        <div class="text-muted" style="font-size:.75rem">\r
                          @if (a.namaJabatan) { <span>{{ a.namaJabatan }}</span> }\r
                          @if (a.namaJabatan && a.namaDivisi) { <span class="mx-1">|</span> }\r
                          @if (a.namaDivisi) { <span class="text-primary">{{ a.namaDivisi }}</span> }\r
                        </div>\r
                        @if (a.zonaWaktu) {\r
                          <div class="text-muted" style="font-size:.72rem">{{ a.zonaWaktu }}</div>\r
                        }\r
                      </div>\r
                    </div>\r
                  </td>\r
\r
                  <!-- Presensi -->\r
                  <td>\r
                    <div class="d-flex flex-column">\r
                      <span class="badge mb-1 px-2 py-1 text-white"\r
                            [style.background]="badgeColor(tipePresensi(a))"\r
                            style="font-size:.75rem;border-radius:4px;width:fit-content">\r
                        {{ tipePresensi(a) }}\r
                      </span>\r
                      <div class="text-muted" style="font-size:.75rem">{{ formatTanggal(a.tanggal) }}</div>\r
                      <div class="fw-bold" style="font-size:1.05rem;letter-spacing:.03em">{{ jamPresensi(a) }}</div>\r
                    </div>\r
                  </td>\r
\r
                  <!-- Alasan -->\r
                  <td>\r
                    @if (a.alasanReview) {\r
                      <span class="text-primary" style="font-size:.83rem">{{ a.alasanReview }}</span>\r
                    } @else if (a.diLuarLokasi) {\r
                      <span class="text-primary" style="font-size:.83rem">Presensi di Luar Area</span>\r
                    } @else if (a.perangkatBerbeda) {\r
                      <span class="text-primary" style="font-size:.83rem">Presensi Menggunakan Device Berbeda</span>\r
                    } @else {\r
                      <span class="text-muted" style="font-size:.83rem">-</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Status GPS -->\r
                  <td class="text-center">\r
                    @if (a.lokasiMasukUrl) {\r
                      <a [href]="a.lokasiMasukUrl" target="_blank" title="Lihat di Maps">\r
                        <i class="bx bxs-map-pin" [style.color]="a.diLuarLokasi ? '#e74c3c' : '#27ae60'" style="font-size:1.3rem"></i>\r
                      </a>\r
                    } @else {\r
                      <i class="bx bxs-map-pin" style="font-size:1.3rem;color:#ccc"></i>\r
                    }\r
                  </td>\r
\r
                  <!-- Swafoto -->\r
                  <td class="text-center">\r
                    @if (a.fotoMasukUrl) {\r
                      <a [href]="a.fotoMasukUrl" target="_blank" title="Lihat foto">\r
                        <i class="bx bx-camera" style="font-size:1.3rem;color:#495057"></i>\r
                      </a>\r
                    } @else {\r
                      <span class="text-muted small">-</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Perangkat -->\r
                  <td class="text-center">\r
                    @if (a.namaPerangkat) {\r
                      <span [title]="a.namaPerangkat">\r
                        <i class="bx bx-mobile-alt" style="font-size:1.3rem;color:#495057"></i>\r
                      </span>\r
                    } @else {\r
                      <i class="bx bx-mobile-alt" style="font-size:1.3rem;color:#ccc"></i>\r
                    }\r
                  </td>\r
\r
                  <!-- Tandai Sudah Dicek (hanya tab Perlu) -->\r
                  @if (activeTab() === 'perlu') {\r
                    <td class="text-center">\r
                      <button class="btn btn-success btn-sm px-3"\r
                              (click)="tandaiDicek(a)"\r
                              [disabled]="savingId() === a.id">\r
                        @if (savingId() === a.id) {\r
                          <span class="spinner-border spinner-border-sm"></span>\r
                        } @else {\r
                          <i class="bx bx-check"></i>\r
                        }\r
                      </button>\r
                    </td>\r
                  }\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- \u2500\u2500 Footer DataTable \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="d-flex align-items-center justify-content-between px-3 py-2 border-top flex-wrap gap-2">\r
          <div class="text-muted small">\r
            Menampilkan\r
            {{ filtered().length === 0 ? 0 : (dtPage() - 1) * dtPageSize() + 1 }}\u2013{{ Math.min(dtPage() * dtPageSize(), filtered().length) }}\r
            dari {{ filtered().length }} data\r
            @if (rows().length !== filtered().length) {\r
              <span>(difilter dari {{ rows().length }} total)</span>\r
            }\r
          </div>\r
          @if (totalPages() > 1) {\r
            <nav>\r
              <ul class="pagination pagination-sm mb-0 gap-1">\r
                <li class="page-item" [class.disabled]="dtPage() === 1">\r
                  <button class="page-link rounded" (click)="dtPage.set(dtPage() - 1)"\r
                          [disabled]="dtPage() === 1">\xAB</button>\r
                </li>\r
                @for (p of pagesArr(); track p) {\r
                  <li class="page-item" [class.active]="dtPage() === p">\r
                    <button class="page-link rounded" (click)="dtPage.set(p)">{{ p }}</button>\r
                  </li>\r
                }\r
                <li class="page-item" [class.disabled]="dtPage() === totalPages()">\r
                  <button class="page-link rounded" (click)="dtPage.set(dtPage() + 1)"\r
                          [disabled]="dtPage() === totalPages()">\xBB</button>\r
                </li>\r
              </ul>\r
            </nav>\r
          }\r
        </div>\r
      }\r
\r
    </div>\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewKehadiranComponent, { className: "ReviewKehadiranComponent", filePath: "src/app/features/kehadiran/review/review-kehadiran.component.ts", lineNumber: 21 });
})();
export {
  ReviewKehadiranComponent
};
//# sourceMappingURL=chunk-BKNJ64Y2.js.map
