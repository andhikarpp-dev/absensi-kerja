import {
  IzinJamService
} from "./chunk-HA63FDPT.js";
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
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  NgIf,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/izin/review-izin-jam/review-izin-jam.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReviewIzinJamComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("alert-success", ctx_r0.toastType() === "success")("alert-danger", ctx_r0.toastType() === "danger");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.toastType() === "success" ? "bx bx-check-circle fs-5" : "bx bx-x-circle fs-5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.toastMsg());
  }
}
function ReviewIzinJamComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("DISETUJUI"));
  }
}
function ReviewIzinJamComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275text(2, "Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function ReviewIzinJamComponent_Conditional_65_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275text(3, "Tidak ada data izin. ");
    \u0275\u0275elementEnd()();
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r4.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.namaJabatan);
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 75);
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDateTime(item_r4.createdAt), " ");
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(item_r4.jamPengganti));
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.catatanPenolakan);
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTerpenuhi(item_r4, true));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 80);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_44_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTolak(item_r4));
    });
    \u0275\u0275element(3, "i", 81);
    \u0275\u0275elementEnd();
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(item_r4));
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementEnd();
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_For_23_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTerpenuhi(item_r4, ctx_r0.activeTab() !== "TERPENUHI"));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r0.activeTab() === "TERPENUHI" ? "Tandai Tidak Terpenuhi" : "Tandai Terpenuhi");
  }
}
function ReviewIzinJamComponent_Conditional_65_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42)(1, "td", 51)(2, "div", 52);
    \u0275\u0275conditionalCreate(3, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_3_Template, 1, 1, "img", 53)(4, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_4_Template, 2, 0, "div", 54);
    \u0275\u0275elementStart(5, "div")(6, "div", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_10_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 51)(12, "div", 56)(13, "div")(14, "div", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 57);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 58)(19, "div", 59);
    \u0275\u0275text(20, "\u25CF\u25CF\u25CF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "div", 44);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 57);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_28_Template, 4, 1, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 62);
    \u0275\u0275conditionalCreate(30, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_30_Template, 2, 1, "span", 63)(31, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_31_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 62);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 62);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 62);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 51)(39, "div", 65);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_41_Template, 3, 1, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 51)(43, "div", 67);
    \u0275\u0275conditionalCreate(44, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_44_Template, 4, 0);
    \u0275\u0275conditionalCreate(45, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_45_Template, 2, 0, "button", 68);
    \u0275\u0275conditionalCreate(46, ReviewIzinJamComponent_Conditional_65_For_23_Conditional_46_Template, 2, 1, "button", 69);
    \u0275\u0275elementStart(47, "button", 70);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_For_23_Template_button_click_47_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(item_r4));
    });
    \u0275\u0275element(48, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 72);
    \u0275\u0275element(50, "i", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r4.fotoProfil ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.namaDivisi || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.namaJabatan ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDateOnly(item_r4.tanggalMulai));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(item_r4.jamMulai));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.durasiLabel(item_r4.durasiMenit));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDateOnly(item_r4.tanggalSelesai));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(item_r4.jamSelesai));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.createdAt ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.jamPengganti ? 30 : 31);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.dapatMengganti ? "Ya" : "Tidak");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.kenaPotong ? "Ya" : "Tidak");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.kenaDenda ? "Ya" : "Tidak");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.keperluan || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.catatanPenolakan ? 41 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.activeTab() === "DISETUJUI" ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "DITOLAK" ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "TERPENUHI" || ctx_r0.activeTab() === "TIDAK_TERPENUHI" ? 46 : -1);
  }
}
function ReviewIzinJamComponent_Conditional_65_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 46)(1, "button", 47);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_For_36_Template_button_click_1_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(p_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r9 === ctx_r0.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9);
  }
}
function ReviewIzinJamComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "table", 35)(2, "thead")(3, "tr", 36)(4, "th", 37);
    \u0275\u0275text(5, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 38);
    \u0275\u0275text(7, "Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 39);
    \u0275\u0275text(9, "Jam Pengganti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "Dapat Mengganti Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 40);
    \u0275\u0275text(13, "Kenakan Potongan Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 40);
    \u0275\u0275text(15, "Kenakan Denda Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 41);
    \u0275\u0275text(17, "Keperluan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 40);
    \u0275\u0275text(19, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275conditionalCreate(21, ReviewIzinJamComponent_Conditional_65_Conditional_21_Template, 4, 0, "tr");
    \u0275\u0275repeaterCreate(22, ReviewIzinJamComponent_Conditional_65_For_23_Template, 51, 19, "tr", 42, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 43)(25, "div", 44);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "nav")(28, "ul", 45)(29, "li", 46)(30, "button", 47);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(1));
    });
    \u0275\u0275text(31, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li", 46)(33, "button", 47);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.page() - 1));
    });
    \u0275\u0275text(34, "\u2039");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(35, ReviewIzinJamComponent_Conditional_65_For_36_Template, 3, 3, "li", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(37, "li", 46)(38, "button", 47);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.page() + 1));
    });
    \u0275\u0275text(39, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li", 46)(41, "button", 47);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_65_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.totalPages()));
    });
    \u0275\u0275text(42, "\xBB");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275conditional(ctx_r0.pagedData().length === 0 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pagedData());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Menampilkan ", ctx_r0.filteredData().length === 0 ? 0 : (ctx_r0.page() - 1) * ctx_r0.pageSize + 1, " dari ", ctx_r0.filteredData().length, " total data ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r0.page() === ctx_r0.totalPages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.page() === ctx_r0.totalPages());
  }
}
function ReviewIzinJamComponent_Conditional_66_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 97);
  }
}
function ReviewIzinJamComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "h5", 88);
    \u0275\u0275text(5, "Tolak Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_66_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 90)(8, "label", 91);
    \u0275\u0275text(9, "Catatan Penolakan (opsional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 92);
    \u0275\u0275listener("input", function ReviewIzinJamComponent_Conditional_66_Template_textarea_input_10_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tolakCatatan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 93)(12, "button", 94);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_66_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 95);
    \u0275\u0275listener("click", function ReviewIzinJamComponent_Conditional_66_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitTolak());
    });
    \u0275\u0275template(15, ReviewIzinJamComponent_Conditional_66_span_15_Template, 1, 0, "span", 96);
    \u0275\u0275text(16, " Tolak ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r0.tolakCatatan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.tolakSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tolakSaving());
  }
}
var ReviewIzinJamComponent = class _ReviewIzinJamComponent {
  constructor() {
    this.svc = inject(IzinJamService);
    this.divisiSvc = inject(DivisiService);
    this.activeTab = signal("DISETUJUI", ...ngDevMode ? [{ debugName: "activeTab" }] : (
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
    this.toastMsg = signal("", ...ngDevMode ? [{ debugName: "toastMsg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toastType = signal("success", ...ngDevMode ? [{ debugName: "toastType" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allData = signal([], ...ngDevMode ? [{ debugName: "allData" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterFrom = signal("", ...ngDevMode ? [{ debugName: "filterFrom" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterTo = signal("", ...ngDevMode ? [{ debugName: "filterTo" }] : (
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
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = 10;
    this.showTolakModal = signal(false, ...ngDevMode ? [{ debugName: "showTolakModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakId = signal(null, ...ngDevMode ? [{ debugName: "tolakId" }] : (
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
    this.filteredData = computed(() => this.allData().filter((d) => d.status === this.activeTab()), ...ngDevMode ? [{ debugName: "filteredData" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagedData = computed(() => {
      const start = (this.page() - 1) * this.pageSize;
      return this.filteredData().slice(start, start + this.pageSize);
    }, ...ngDevMode ? [{ debugName: "pagedData" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  countByStatus(s) {
    return this.allData().filter((d) => d.status === s).length;
  }
  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((list) => this.divisiList.set(list));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    const toBool = (v) => v === "true" ? true : v === "false" ? false : void 0;
    this.svc.getAllAdmin({
      from: this.filterFrom() || void 0,
      to: this.filterTo() || void 0,
      cari: this.filterCari() || void 0,
      dapatMengganti: toBool(this.filterDapatMengganti()),
      kenaPotong: toBool(this.filterKenaPotong()),
      kenaDenda: toBool(this.filterKenaDenda())
    }).subscribe({
      next: (res) => {
        this.allData.set(res.izinJam);
        this.loading.set(false);
        this.page.set(1);
      },
      error: () => {
        this.error.set("Gagal memuat data izin jam.");
        this.loading.set(false);
      }
    });
  }
  setTab(t) {
    this.activeTab.set(t);
    this.page.set(1);
  }
  onCari() {
    this.load();
  }
  // ── Actions ───────────────────────────────────────────────
  approve(item) {
    Swal.fire({
      title: "Setujui Izin?",
      text: `Izin ${item.namaKaryawan} akan disetujui.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Setujui",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.updateStatusAdmin(item.id, "DISETUJUI").subscribe({
          next: () => {
            this.showToast("Izin berhasil disetujui.");
            this.load();
          },
          error: (err) => this.showToast(err?.message ?? "Gagal menyetujui izin.", "danger")
        });
      }
    });
  }
  setTerpenuhi(item, terpenuhi) {
    const status = terpenuhi ? "TERPENUHI" : "TIDAK_TERPENUHI";
    Swal.fire({
      title: terpenuhi ? "Tandai Terpenuhi?" : "Tandai Tidak Terpenuhi?",
      text: `Status izin ${item.namaKaryawan} akan diubah.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.updateStatusAdmin(item.id, status).subscribe({
          next: () => {
            this.showToast("Status berhasil diubah.");
            this.load();
          },
          error: (err) => this.showToast(err?.message ?? "Gagal mengubah status.", "danger")
        });
      }
    });
  }
  openTolak(item) {
    this.tolakId.set(item.id);
    this.tolakCatatan.set("");
    this.showTolakModal.set(true);
  }
  submitTolak() {
    const id = this.tolakId();
    if (!id)
      return;
    this.tolakSaving.set(true);
    this.svc.updateStatusAdmin(id, "DITOLAK", this.tolakCatatan()).subscribe({
      next: () => {
        this.tolakSaving.set(false);
        this.showTolakModal.set(false);
        this.tolakId.set(null);
        this.showToast("Izin berhasil ditolak.");
        this.load();
      },
      error: (err) => {
        this.tolakSaving.set(false);
        this.showToast(err?.message ?? "Gagal menolak izin.", "danger");
      }
    });
  }
  delete(item) {
    Swal.fire({
      title: "Hapus Izin?",
      text: `Data izin ${item.namaKaryawan} akan dihapus permanen.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#dc3545"
    }).then((result) => {
      if (result && (result.isConfirmed || result.value === true)) {
        this.svc.deleteAdmin(item.id).subscribe({
          next: () => {
            this.allData.update((list) => list.filter((x) => x.id !== item.id));
            this.showToast("Izin berhasil dihapus.");
          },
          error: (err) => this.showToast(err?.message ?? "Gagal menghapus izin.", "danger")
        });
      }
    });
  }
  eksporExcel() {
    const toBool = (v) => v === "true" ? true : v === "false" ? false : void 0;
    this.svc.exportExcelAdmin({
      status: this.activeTab(),
      from: this.filterFrom() || void 0,
      to: this.filterTo() || void 0,
      cari: this.filterCari() || void 0,
      dapatMengganti: toBool(this.filterDapatMengganti()),
      kenaPotong: toBool(this.filterKenaPotong()),
      kenaDenda: toBool(this.filterKenaDenda())
    }).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "izin-jam.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  // ── Helpers ───────────────────────────────────────────────
  formatDateOnly(t) {
    if (!t)
      return "";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  }
  formatJam(t) {
    if (!t)
      return "";
    return t.substring(0, 5);
  }
  formatDateTime(t) {
    if (!t)
      return "";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) + " @ " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  }
  durasiLabel(menit) {
    if (!menit || menit <= 0)
      return "";
    const j = Math.floor(menit / 60);
    const m = menit % 60;
    if (j > 0 && m > 0)
      return `${j}jm ${m}mn`;
    if (j > 0)
      return `${j}jm`;
    return `${m}mn`;
  }
  showToast(msg, type = "success") {
    this.toastMsg.set(msg);
    this.toastType.set(type);
    setTimeout(() => this.toastMsg.set(""), 3e3);
  }
  goPage(p) {
    if (p >= 1 && p <= this.totalPages())
      this.page.set(p);
  }
  static {
    this.\u0275fac = function ReviewIzinJamComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewIzinJamComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewIzinJamComponent, selectors: [["app-review-izin-jam"]], decls: 67, vars: 27, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "breadcrumb-item", "active"], [1, "fw-bold", "mb-3"], [1, "alert", "py-2", "px-3", "mb-3", "d-flex", "align-items-center", "gap-2", 2, "position", "fixed", "top", "70px", "right", "20px", "z-index", "9999", "min-width", "260px", "box-shadow", "0 4px 12px rgba(0,0,0,.15)", 3, "alert-success", "alert-danger"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-4"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], [1, "btn", "btn-sm", "px-4", 3, "click"], [1, "badge", "rounded-pill", "ms-1", "bg-light", "text-dark"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", "placeholder", "Mulai Izin", 1, "form-control", "form-control-sm", 2, "width", "160px", 3, "change", "value"], ["type", "date", "placeholder", "Selesai Izin", 1, "form-control", "form-control-sm", 2, "width", "160px", 3, "change", "value"], [1, "form-select", "form-select-sm", 2, "width", "230px", 3, "change", "value"], ["value", ""], ["value", "true"], ["value", "false"], [1, "form-select", "form-select-sm", 2, "width", "250px", 3, "change", "value"], [1, "input-group", 2, "width", "200px"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 3, "input", "keyup.enter", "value"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-export", "me-1"], [1, "bg-light", "px-3", "py-2", "mb-2", "small", "text-muted", 2, "font-family", "monospace"], [1, "text-center", "py-5", "text-muted"], [1, "modal", "d-block", 2, "background", "rgba(0,0,0,.4)"], [1, "alert", "py-2", "px-3", "mb-3", "d-flex", "align-items-center", "gap-2", 2, "position", "fixed", "top", "70px", "right", "20px", "z-index", "9999", "min-width", "260px", "box-shadow", "0 4px 12px rgba(0,0,0,.15)"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "table-responsive"], [1, "table", "table-borderless", "align-middle", 2, "min-width", "1200px", "font-size", ".88rem"], [1, "border-bottom", "text-center"], [1, "text-start", 2, "width", "200px"], [2, "width", "200px"], [2, "width", "120px"], [2, "width", "130px"], [2, "width", "180px"], [1, "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], [1, "text-muted", "small"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["colspan", "8", 1, "text-center", "py-5", "text-muted"], [1, "bx", "bx-calendar-x", "fs-2", "d-block", "mb-2"], [1, "py-3"], [1, "d-flex", "align-items-start", "gap-2"], ["alt", "Foto", 1, "rounded-circle", "flex-shrink-0", 2, "width", "42px", "height", "42px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "42px", "height", "42px", "background", "#f3f4f6", "color", "#9ca3af"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fw-bold", 2, "font-size", "1.05rem"], [1, "text-center", "text-muted"], [2, "font-size", ".85rem"], [1, "small"], [1, "mt-2"], [1, "py-3", "text-center"], [1, "fw-semibold"], [1, "text-muted"], [2, "max-width", "200px", "white-space", "normal"], [1, "text-danger", "small", "mt-1"], [1, "d-flex", "gap-1", "justify-content-center"], ["title", "Setujui Kembali", 1, "btn", "btn-sm", "btn-light", "border"], [1, "btn", "btn-sm", "btn-light", "border", 3, "title"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bx", "bx-trash"], ["title", "Riwayat", "disabled", "", 1, "btn", "btn-sm", "btn-light", "border"], [1, "bx", "bx-history"], [1, "bx", "bx-user"], [1, "badge", "bg-light", "text-dark", "border", 2, "font-weight", "400"], [1, "bx", "bx-calendar"], [1, "bx", "bx-info-circle"], ["title", "Tandai Terpenuhi", 1, "btn", "btn-sm", "btn-light", "border", 3, "click"], [1, "bx", "bx-edit", "text-secondary"], ["title", "Tolak", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bx", "bx-x"], ["title", "Setujui Kembali", 1, "btn", "btn-sm", "btn-light", "border", 3, "click"], [1, "bx", "bx-check", "text-success"], [1, "btn", "btn-sm", "btn-light", "border", 3, "click", "title"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header"], [1, "modal-title"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-label"], ["rows", "3", 1, "form-control", 3, "input", "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function ReviewIzinJamComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Izin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275text(9, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5);
        \u0275\u0275text(11, "Izin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "li", 7);
        \u0275\u0275text(13, "Review Izin Jam");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "h4", 8);
        \u0275\u0275text(15, "Review Izin Jam");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, ReviewIzinJamComponent_Conditional_16_Template, 4, 7, "div", 9);
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "button", 13);
        \u0275\u0275listener("click", function ReviewIzinJamComponent_Template_button_click_20_listener() {
          return ctx.setTab("DISETUJUI");
        });
        \u0275\u0275text(21, "Disetujui ");
        \u0275\u0275conditionalCreate(22, ReviewIzinJamComponent_Conditional_22_Template, 2, 1, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275listener("click", function ReviewIzinJamComponent_Template_button_click_23_listener() {
          return ctx.setTab("DITOLAK");
        });
        \u0275\u0275text(24, "Ditolak");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 13);
        \u0275\u0275listener("click", function ReviewIzinJamComponent_Template_button_click_25_listener() {
          return ctx.setTab("TERPENUHI");
        });
        \u0275\u0275text(26, "Terpenuhi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 13);
        \u0275\u0275listener("click", function ReviewIzinJamComponent_Template_button_click_27_listener() {
          return ctx.setTab("TIDAK_TERPENUHI");
        });
        \u0275\u0275text(28, "Tidak Terpenuhi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "input", 16);
        \u0275\u0275listener("change", function ReviewIzinJamComponent_Template_input_change_30_listener($event) {
          ctx.filterFrom.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 17);
        \u0275\u0275listener("change", function ReviewIzinJamComponent_Template_input_change_33_listener($event) {
          ctx.filterTo.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 18);
        \u0275\u0275listener("change", function ReviewIzinJamComponent_Template_select_change_34_listener($event) {
          ctx.filterDapatMengganti.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(35, "option", 19);
        \u0275\u0275text(36, "--Dapat Mengganti Izin Jam--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option", 20);
        \u0275\u0275text(38, "Ya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 21);
        \u0275\u0275text(40, "Tidak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "select", 18);
        \u0275\u0275listener("change", function ReviewIzinJamComponent_Template_select_change_41_listener($event) {
          ctx.filterKenaPotong.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(42, "option", 19);
        \u0275\u0275text(43, "--Kenakan Potongan Izin Jam--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "option", 20);
        \u0275\u0275text(45, "Ya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option", 21);
        \u0275\u0275text(47, "Tidak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "select", 22);
        \u0275\u0275listener("change", function ReviewIzinJamComponent_Template_select_change_48_listener($event) {
          ctx.filterKenaDenda.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(49, "option", 19);
        \u0275\u0275text(50, "--Kenakan Denda Keterlambatan--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "option", 20);
        \u0275\u0275text(52, "Ya");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "option", 21);
        \u0275\u0275text(54, "Tidak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 23)(56, "input", 24);
        \u0275\u0275listener("input", function ReviewIzinJamComponent_Template_input_input_56_listener($event) {
          return ctx.filterCari.set($event.target.value);
        })("keyup.enter", function ReviewIzinJamComponent_Template_input_keyup_enter_56_listener() {
          return ctx.onCari();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 25);
        \u0275\u0275listener("click", function ReviewIzinJamComponent_Template_button_click_57_listener() {
          return ctx.onCari();
        });
        \u0275\u0275element(58, "i", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "button", 27);
        \u0275\u0275listener("click", function ReviewIzinJamComponent_Template_button_click_59_listener() {
          return ctx.eksporExcel();
        });
        \u0275\u0275element(60, "i", 28);
        \u0275\u0275text(61, "Ekspor Excel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 29);
        \u0275\u0275text(63, " Daftar izin dalam jam karyawan yang memerlukan validasi ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(64, ReviewIzinJamComponent_Conditional_64_Template, 3, 0, "div", 30);
        \u0275\u0275conditionalCreate(65, ReviewIzinJamComponent_Conditional_65_Template, 43, 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(66, ReviewIzinJamComponent_Conditional_66_Template, 17, 3, "div", 31);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.toastMsg() ? 16 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DISETUJUI")("btn-outline-secondary", ctx.activeTab() !== "DISETUJUI");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.countByStatus("DISETUJUI") > 0 ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DITOLAK")("btn-outline-secondary", ctx.activeTab() !== "DITOLAK");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "TERPENUHI")("btn-outline-secondary", ctx.activeTab() !== "TERPENUHI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "TIDAK_TERPENUHI")("btn-outline-secondary", ctx.activeTab() !== "TIDAK_TERPENUHI");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterFrom());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterTo());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterDapatMengganti());
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.filterKenaPotong());
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.filterKenaDenda());
        \u0275\u0275advance(8);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 64 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 65 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 66 : -1);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], styles: ["\n.review-izin-jam[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.6em;\n}\n/*# sourceMappingURL=review-izin-jam.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewIzinJamComponent, [{
    type: Component,
    args: [{ selector: "app-review-izin-jam", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Izin</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard">Dasbor</a></li>\r
          <li class="breadcrumb-item">Izin</li>\r
          <li class="breadcrumb-item active">Review Izin Jam</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <h4 class="fw-bold mb-3">Review Izin Jam</h4>\r
\r
  <!-- Toast -->\r
  @if (toastMsg()) {\r
    <div class="alert py-2 px-3 mb-3 d-flex align-items-center gap-2"\r
         [class.alert-success]="toastType()==='success'"\r
         [class.alert-danger]="toastType()==='danger'"\r
         style="position:fixed;top:70px;right:20px;z-index:9999;min-width:260px;box-shadow:0 4px 12px rgba(0,0,0,.15)">\r
      <i [class]="toastType()==='success' ? 'bx bx-check-circle fs-5' : 'bx bx-x-circle fs-5'"></i>\r
      <span>{{ toastMsg() }}</span>\r
    </div>\r
  }\r
\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body p-4">\r
\r
      <!-- Tabs -->\r
      <div class="d-flex flex-wrap gap-2 mb-3">\r
        <button class="btn btn-sm px-4"\r
                [class.btn-primary]="activeTab()==='DISETUJUI'"\r
                [class.btn-outline-secondary]="activeTab()!=='DISETUJUI'"\r
                (click)="setTab('DISETUJUI')">Disetujui\r
          @if (countByStatus('DISETUJUI') > 0) {\r
            <span class="badge rounded-pill ms-1 bg-light text-dark">{{ countByStatus('DISETUJUI') }}</span>\r
          }\r
        </button>\r
        <button class="btn btn-sm px-4"\r
                [class.btn-primary]="activeTab()==='DITOLAK'"\r
                [class.btn-outline-secondary]="activeTab()!=='DITOLAK'"\r
                (click)="setTab('DITOLAK')">Ditolak</button>\r
        <button class="btn btn-sm px-4"\r
                [class.btn-primary]="activeTab()==='TERPENUHI'"\r
                [class.btn-outline-secondary]="activeTab()!=='TERPENUHI'"\r
                (click)="setTab('TERPENUHI')">Terpenuhi</button>\r
        <button class="btn btn-sm px-4"\r
                [class.btn-primary]="activeTab()==='TIDAK_TERPENUHI'"\r
                [class.btn-outline-secondary]="activeTab()!=='TIDAK_TERPENUHI'"\r
                (click)="setTab('TIDAK_TERPENUHI')">Tidak Terpenuhi</button>\r
      </div>\r
\r
      <!-- Filter Bar -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <input type="date" class="form-control form-control-sm" style="width:160px" placeholder="Mulai Izin"\r
               [value]="filterFrom()" (change)="filterFrom.set($any($event.target).value); load()">\r
        <span>-</span>\r
        <input type="date" class="form-control form-control-sm" style="width:160px" placeholder="Selesai Izin"\r
               [value]="filterTo()" (change)="filterTo.set($any($event.target).value); load()">\r
        <select class="form-select form-select-sm" style="width:230px"\r
                [value]="filterDapatMengganti()"\r
                (change)="filterDapatMengganti.set($any($event.target).value); load()">\r
          <option value="">--Dapat Mengganti Izin Jam--</option>\r
          <option value="true">Ya</option>\r
          <option value="false">Tidak</option>\r
        </select>\r
        <select class="form-select form-select-sm" style="width:230px"\r
                [value]="filterKenaPotong()"\r
                (change)="filterKenaPotong.set($any($event.target).value); load()">\r
          <option value="">--Kenakan Potongan Izin Jam--</option>\r
          <option value="true">Ya</option>\r
          <option value="false">Tidak</option>\r
        </select>\r
        <select class="form-select form-select-sm" style="width:250px"\r
                [value]="filterKenaDenda()"\r
                (change)="filterKenaDenda.set($any($event.target).value); load()">\r
          <option value="">--Kenakan Denda Keterlambatan--</option>\r
          <option value="true">Ya</option>\r
          <option value="false">Tidak</option>\r
        </select>\r
        <div class="input-group" style="width:200px">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari"\r
                 [value]="filterCari()" (input)="filterCari.set($any($event.target).value)"\r
                 (keyup.enter)="onCari()">\r
          <button class="btn btn-outline-secondary btn-sm" (click)="onCari()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
        <button class="btn btn-primary btn-sm px-3" (click)="eksporExcel()">\r
          <i class="bx bx-export me-1"></i>Ekspor Excel\r
        </button>\r
      </div>\r
\r
      <!-- Info -->\r
      <div class="bg-light px-3 py-2 mb-2 small text-muted" style="font-family:monospace">\r
        Daftar izin dalam jam karyawan yang memerlukan validasi\r
      </div>\r
\r
      <!-- Loading -->\r
      @if (loading()) {\r
        <div class="text-center py-5 text-muted">\r
          <div class="spinner-border spinner-border-sm me-2"></div>Memuat data...\r
        </div>\r
      }\r
\r
      @if (!loading()) {\r
        <div class="table-responsive">\r
          <table class="table table-borderless align-middle" style="min-width:1200px;font-size:.88rem">\r
            <thead>\r
              <tr class="border-bottom text-center">\r
                <th class="text-start" style="width:200px">Karyawan</th>\r
                <th style="width:200px">Izin Jam</th>\r
                <th style="width:120px">Jam Pengganti</th>\r
                <th style="width:130px">Dapat Mengganti Izin Jam</th>\r
                <th style="width:130px">Kenakan Potongan Izin Jam</th>\r
                <th style="width:130px">Kenakan Denda Keterlambatan</th>\r
                <th style="width:180px">Keperluan</th>\r
                <th style="width:130px">Aksi</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @if (pagedData().length === 0) {\r
                <tr>\r
                  <td colspan="8" class="text-center py-5 text-muted">\r
                    <i class="bx bx-calendar-x fs-2 d-block mb-2"></i>Tidak ada data izin.\r
                  </td>\r
                </tr>\r
              }\r
              @for (item of pagedData(); track item.id) {\r
                <tr class="border-bottom">\r
                  <!-- Karyawan -->\r
                  <td class="py-3">\r
                    <div class="d-flex align-items-start gap-2">\r
                      @if (item.fotoProfil) {\r
                        <img [src]="item.fotoProfil" alt="Foto"\r
                             class="rounded-circle flex-shrink-0"\r
                             style="width:42px;height:42px;object-fit:cover;border:2px solid #e9ecef">\r
                      } @else {\r
                        <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                             style="width:42px;height:42px;background:#f3f4f6;color:#9ca3af">\r
                          <i class="bx bx-user"></i>\r
                        </div>\r
                      }\r
                      <div>\r
                        <div class="fw-bold">{{ item.namaKaryawan }}</div>\r
                        <div class="text-muted small">{{ item.namaDivisi || '-' }}</div>\r
                        @if (item.namaJabatan) {\r
                          <div class="text-muted small">{{ item.namaJabatan }}</div>\r
                        }\r
                      </div>\r
                    </div>\r
                  </td>\r
\r
                  <!-- Izin Jam -->\r
                  <td class="py-3">\r
                    <div class="d-flex align-items-center gap-2">\r
                      <div>\r
                        <div class="text-muted small">{{ formatDateOnly(item.tanggalMulai) }}</div>\r
                        <div class="fw-bold" style="font-size:1.05rem">{{ formatJam(item.jamMulai) }}</div>\r
                      </div>\r
                      <div class="text-center text-muted">\r
                        <div style="font-size:.85rem">\u25CF\u25CF\u25CF</div>\r
                        <div class="small">{{ durasiLabel(item.durasiMenit) }}</div>\r
                      </div>\r
                      <div>\r
                        <div class="text-muted small">{{ formatDateOnly(item.tanggalSelesai) }}</div>\r
                        <div class="fw-bold" style="font-size:1.05rem">{{ formatJam(item.jamSelesai) }}</div>\r
                      </div>\r
                    </div>\r
                    @if (item.createdAt) {\r
                      <div class="mt-2">\r
                        <span class="badge bg-light text-dark border" style="font-weight:400">\r
                          <i class="bx bx-calendar"></i> {{ formatDateTime(item.createdAt) }}\r
                        </span>\r
                      </div>\r
                    }\r
                  </td>\r
\r
                  <!-- Jam Pengganti -->\r
                  <td class="py-3 text-center">\r
                    @if (item.jamPengganti) {\r
                      <span class="fw-semibold">{{ formatJam(item.jamPengganti) }}</span>\r
                    } @else {\r
                      <span class="text-muted">-</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Dapat Mengganti -->\r
                  <td class="py-3 text-center">{{ item.dapatMengganti ? 'Ya' : 'Tidak' }}</td>\r
\r
                  <!-- Kena Potong -->\r
                  <td class="py-3 text-center">{{ item.kenaPotong ? 'Ya' : 'Tidak' }}</td>\r
\r
                  <!-- Kena Denda -->\r
                  <td class="py-3 text-center">{{ item.kenaDenda ? 'Ya' : 'Tidak' }}</td>\r
\r
                  <!-- Keperluan -->\r
                  <td class="py-3">\r
                    <div style="max-width:200px;white-space:normal">{{ item.keperluan || '-' }}</div>\r
                    @if (item.catatanPenolakan) {\r
                      <div class="text-danger small mt-1"><i class="bx bx-info-circle"></i> {{ item.catatanPenolakan }}</div>\r
                    }\r
                  </td>\r
\r
                  <!-- Aksi -->\r
                  <td class="py-3">\r
                    <div class="d-flex gap-1 justify-content-center">\r
                      @if (activeTab() === 'DISETUJUI') {\r
                        <button class="btn btn-sm btn-light border" title="Tandai Terpenuhi"\r
                                (click)="setTerpenuhi(item, true)">\r
                          <i class="bx bx-edit text-secondary"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-danger" title="Tolak"\r
                                (click)="openTolak(item)">\r
                          <i class="bx bx-x"></i>\r
                        </button>\r
                      }\r
                      @if (activeTab() === 'DITOLAK') {\r
                        <button class="btn btn-sm btn-light border" title="Setujui Kembali"\r
                                (click)="approve(item)">\r
                          <i class="bx bx-check text-success"></i>\r
                        </button>\r
                      }\r
                      @if (activeTab() === 'TERPENUHI' || activeTab() === 'TIDAK_TERPENUHI') {\r
                        <button class="btn btn-sm btn-light border"\r
                                [title]="activeTab() === 'TERPENUHI' ? 'Tandai Tidak Terpenuhi' : 'Tandai Terpenuhi'"\r
                                (click)="setTerpenuhi(item, activeTab() !== 'TERPENUHI')">\r
                          <i class="bx bx-edit text-secondary"></i>\r
                        </button>\r
                      }\r
                      <button class="btn btn-sm btn-danger" title="Hapus" (click)="delete(item)">\r
                        <i class="bx bx-trash"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-light border" title="Riwayat" disabled>\r
                        <i class="bx bx-history"></i>\r
                      </button>\r
                    </div>\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- Pagination -->\r
        <div class="d-flex align-items-center justify-content-between mt-3">\r
          <div class="text-muted small">\r
            Menampilkan {{ filteredData().length === 0 ? 0 : (page()-1)*pageSize+1 }}\r
            dari {{ filteredData().length }} total data\r
          </div>\r
          <nav>\r
            <ul class="pagination pagination-sm mb-0">\r
              <li class="page-item" [class.disabled]="page()===1">\r
                <button class="page-link" (click)="goPage(1)">&laquo;</button>\r
              </li>\r
              <li class="page-item" [class.disabled]="page()===1">\r
                <button class="page-link" (click)="goPage(page()-1)">&lsaquo;</button>\r
              </li>\r
              @for (p of pageNumbers(); track p) {\r
                <li class="page-item" [class.active]="p===page()">\r
                  <button class="page-link" (click)="goPage(p)">{{ p }}</button>\r
                </li>\r
              }\r
              <li class="page-item" [class.disabled]="page()===totalPages()">\r
                <button class="page-link" (click)="goPage(page()+1)">&rsaquo;</button>\r
              </li>\r
              <li class="page-item" [class.disabled]="page()===totalPages()">\r
                <button class="page-link" (click)="goPage(totalPages())">&raquo;</button>\r
              </li>\r
            </ul>\r
          </nav>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Tolak \u2500\u2500 -->\r
  @if (showTolakModal()) {\r
    <div class="modal d-block" style="background:rgba(0,0,0,.4)">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title">Tolak Izin Jam</h5>\r
            <button class="btn-close" (click)="showTolakModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            <label class="form-label">Catatan Penolakan (opsional)</label>\r
            <textarea class="form-control" rows="3"\r
                      [value]="tolakCatatan()"\r
                      (input)="tolakCatatan.set($any($event.target).value)"></textarea>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-secondary btn-sm" (click)="showTolakModal.set(false)">Batal</button>\r
            <button class="btn btn-danger btn-sm px-4" (click)="submitTolak()" [disabled]="tolakSaving()">\r
              <span *ngIf="tolakSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
              Tolak\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ["/* src/app/features/izin/review-izin-jam/review-izin-jam.component.scss */\n.review-izin-jam .badge-status {\n  font-size: 0.75rem;\n  padding: 0.35em 0.6em;\n}\n/*# sourceMappingURL=review-izin-jam.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewIzinJamComponent, { className: "ReviewIzinJamComponent", filePath: "src/app/features/izin/review-izin-jam/review-izin-jam.component.ts", lineNumber: 22 });
})();
export {
  ReviewIzinJamComponent
};
//# sourceMappingURL=chunk-DZ35RVTM.js.map
