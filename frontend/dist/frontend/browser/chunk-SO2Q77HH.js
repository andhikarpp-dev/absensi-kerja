import {
  IzinHariService
} from "./chunk-TCQI54CB.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/izin/izin-hari/izin-hari.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function IzinHariComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
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
function IzinHariComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.countByStatus("MENUNGGU"));
  }
}
function IzinHariComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
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
function IzinHariComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Daftar karyawan yang melakukan izin dan membutuhkan aksi jawaban");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275text(2, "Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275text(3, "Tidak ada data izin. ");
    \u0275\u0275elementEnd()();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r5.fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.zonaLabel(item_r5.zonaWaktu));
  }
}
function IzinHariComponent_Conditional_57_For_13_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const \u0275$index_194_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275$index_194_r7 + 1, ". ", ctx_r0.formatTanggal(t_r6));
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, "Lihat File ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", item_r5.lampiranUrl, \u0275\u0275sanitizeUrl);
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2, "Catatan Penolakan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 56);
    \u0275\u0275text(4, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r5.catatanPenolakan);
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "Menunggu");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "Disetujui");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Ditolak");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_For_13_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(item_r5));
    });
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, "Setujui ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 73);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_For_13_Conditional_49_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTolak(item_r5));
    });
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275text(5, "Tolak ");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_For_13_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTolak(item_r5));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2, "Batalkan Persetujuan ");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_For_13_Conditional_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(item_r5));
    });
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, "Setujui ");
    \u0275\u0275elementEnd();
  }
}
function IzinHariComponent_Conditional_57_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39)(1, "td", 48)(2, "div", 49);
    \u0275\u0275conditionalCreate(3, IzinHariComponent_Conditional_57_For_13_Conditional_3_Template, 1, 1, "img", 50)(4, IzinHariComponent_Conditional_57_For_13_Conditional_4_Template, 2, 0, "div", 51);
    \u0275\u0275elementStart(5, "div")(6, "div", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, IzinHariComponent_Conditional_57_For_13_Conditional_10_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 53)(12, "table", 54)(13, "tr")(14, "td", 55);
    \u0275\u0275text(15, "Tgl. Pengajuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 56);
    \u0275\u0275text(17, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "td", 57);
    \u0275\u0275text(22, "Tgl. Izin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 56);
    \u0275\u0275text(24, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275repeaterCreate(26, IzinHariComponent_Conditional_57_For_13_For_27_Template, 2, 2, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "tr")(29, "td", 57);
    \u0275\u0275text(30, "Keperluan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 56);
    \u0275\u0275text(32, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "td", 57);
    \u0275\u0275text(37, "File Kelengkapan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 56);
    \u0275\u0275text(39, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275conditionalCreate(41, IzinHariComponent_Conditional_57_For_13_Conditional_41_Template, 3, 1, "a", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, IzinHariComponent_Conditional_57_For_13_Conditional_42_Template, 7, 1, "tr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "td", 53);
    \u0275\u0275conditionalCreate(44, IzinHariComponent_Conditional_57_For_13_Conditional_44_Template, 2, 0, "span", 59)(45, IzinHariComponent_Conditional_57_For_13_Conditional_45_Template, 2, 0, "span", 60)(46, IzinHariComponent_Conditional_57_For_13_Conditional_46_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td", 62)(48, "div", 63);
    \u0275\u0275conditionalCreate(49, IzinHariComponent_Conditional_57_For_13_Conditional_49_Template, 6, 0);
    \u0275\u0275conditionalCreate(50, IzinHariComponent_Conditional_57_For_13_Conditional_50_Template, 3, 0, "button", 64);
    \u0275\u0275conditionalCreate(51, IzinHariComponent_Conditional_57_For_13_Conditional_51_Template, 3, 0, "button", 65);
    \u0275\u0275elementStart(52, "button", 66);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_For_13_Template_button_click_52_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(item_r5));
    });
    \u0275\u0275element(53, "i", 67);
    \u0275\u0275text(54, "Hapus ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r5.fotoProfil ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.namaDivisi);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.zonaWaktu ? 10 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(item_r5.createdAt));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(item_r5.tanggalList);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(item_r5.keperluan);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(item_r5.lampiranUrl ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.catatanPenolakan ? 42 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.status === "MENUNGGU" ? 44 : item_r5.status === "DISETUJUI" ? 45 : item_r5.status === "DITOLAK" ? 46 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r5.status === "MENUNGGU" ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.status === "DISETUJUI" ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.status === "DITOLAK" ? 51 : -1);
  }
}
function IzinHariComponent_Conditional_57_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 43)(1, "button", 44);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_For_26_Template_button_click_1_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(p_r12));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r12 === ctx_r0.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12);
  }
}
function IzinHariComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 35)(1, "thead")(2, "tr", 36)(3, "th", 37);
    \u0275\u0275text(4, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 38);
    \u0275\u0275text(6, "Detail Pengajuan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status Persetujuan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275conditionalCreate(11, IzinHariComponent_Conditional_57_Conditional_11_Template, 4, 0, "tr");
    \u0275\u0275repeaterCreate(12, IzinHariComponent_Conditional_57_For_13_Template, 55, 12, "tr", 39, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 40)(15, "div", 41);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nav")(18, "ul", 42)(19, "li", 43)(20, "button", 44);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(1));
    });
    \u0275\u0275text(21, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li", 43)(23, "button", 44);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.page() - 1));
    });
    \u0275\u0275text(24, "\u2039");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(25, IzinHariComponent_Conditional_57_For_26_Template, 3, 3, "li", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(27, "li", 43)(28, "button", 44);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.page() + 1));
    });
    \u0275\u0275text(29, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li", 43)(31, "button", 44);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_57_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.totalPages()));
    });
    \u0275\u0275text(32, "\xBB");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.pagedData().length === 0 ? 11 : -1);
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
function IzinHariComponent_Conditional_58_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 89);
  }
}
function IzinHariComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 77)(2, "div", 78)(3, "div", 79)(4, "h5", 80);
    \u0275\u0275text(5, "Tolak Izin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 81);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_58_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 82)(8, "label", 83);
    \u0275\u0275text(9, "Catatan Penolakan (opsional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 84);
    \u0275\u0275listener("input", function IzinHariComponent_Conditional_58_Template_textarea_input_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tolakCatatan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 85)(12, "button", 86);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_58_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 87);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_58_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitTolak());
    });
    \u0275\u0275template(15, IzinHariComponent_Conditional_58_span_15_Template, 1, 0, "span", 88);
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
function IzinHariComponent_Conditional_59_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError());
  }
}
function IzinHariComponent_Conditional_59_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const k_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", k_r15.namaDivisi, ") ");
  }
}
function IzinHariComponent_Conditional_59_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, IzinHariComponent_Conditional_59_For_18_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r15 = ctx.$implicit;
    \u0275\u0275property("value", k_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", k_r15.namaLengkap, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r15.namaDivisi ? 2 : -1);
  }
}
function IzinHariComponent_Conditional_59_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 105);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_59_For_31_Template_button_click_2_listener() {
      const t_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeTanggal(t_r17));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(t_r17), " ");
  }
}
function IzinHariComponent_Conditional_59_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 89);
  }
}
function IzinHariComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 90)(2, "div", 78)(3, "div", 79)(4, "h5", 80);
    \u0275\u0275text(5, "Tambah Izin Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 81);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_59_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 82);
    \u0275\u0275conditionalCreate(8, IzinHariComponent_Conditional_59_Conditional_8_Template, 2, 1, "div", 91);
    \u0275\u0275elementStart(9, "div", 92)(10, "label", 93);
    \u0275\u0275text(11, "Karyawan ");
    \u0275\u0275elementStart(12, "span", 70);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 94);
    \u0275\u0275listener("change", function IzinHariComponent_Conditional_59_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalKaryawanId.set(+$event.target.value || null));
    });
    \u0275\u0275elementStart(15, "option", 20);
    \u0275\u0275text(16, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, IzinHariComponent_Conditional_59_For_18_Template, 3, 3, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 92)(20, "label", 93);
    \u0275\u0275text(21, "Tanggal Izin ");
    \u0275\u0275elementStart(22, "span", 70);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 95)(25, "input", 96);
    \u0275\u0275listener("change", function IzinHariComponent_Conditional_59_Template_input_change_25_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newTanggal.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 97);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_59_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addTanggal());
    });
    \u0275\u0275element(27, "i", 29);
    \u0275\u0275text(28, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 98);
    \u0275\u0275repeaterCreate(30, IzinHariComponent_Conditional_59_For_31_Template, 3, 1, "span", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 92)(33, "label", 93);
    \u0275\u0275text(34, "Keperluan ");
    \u0275\u0275elementStart(35, "span", 70);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "textarea", 84);
    \u0275\u0275listener("input", function IzinHariComponent_Conditional_59_Template_textarea_input_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalForm.set(__spreadProps(__spreadValues({}, ctx_r0.modalForm()), { keperluan: $event.target.value })));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 92)(39, "label", 93);
    \u0275\u0275text(40, "File Kelengkapan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 100);
    \u0275\u0275listener("change", function IzinHariComponent_Conditional_59_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLampiranChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 101)(43, "input", 102);
    \u0275\u0275listener("change", function IzinHariComponent_Conditional_59_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalForm.set(__spreadProps(__spreadValues({}, ctx_r0.modalForm()), { mengurangiGaji: $event.target.checked })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "label", 103);
    \u0275\u0275text(45, "Mengurangi Gaji");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 85)(47, "button", 86);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_59_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal.set(false));
    });
    \u0275\u0275text(48, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 104);
    \u0275\u0275listener("click", function IzinHariComponent_Conditional_59_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitModal());
    });
    \u0275\u0275conditionalCreate(50, IzinHariComponent_Conditional_59_Conditional_50_Template, 1, 0, "span", 89);
    \u0275\u0275text(51, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.modalError() ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.modalKaryawanId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.karyawanList());
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.newTanggal());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.modalForm().tanggalList);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.modalForm().keperluan);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r0.modalForm().mengurangiGaji);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalSaving() ? 50 : -1);
  }
}
var IzinHariComponent = class _IzinHariComponent {
  constructor() {
    this.svc = inject(IzinHariService);
    this.divisiSvc = inject(DivisiService);
    this.karyawanSvc = inject(KaryawanService);
    this.activeTab = signal("MENUNGGU", ...ngDevMode ? [{ debugName: "activeTab" }] : (
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
    this.totalMenunggu = signal(0, ...ngDevMode ? [{ debugName: "totalMenunggu" }] : (
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
    this.filterFrom = signal("", ...ngDevMode ? [{ debugName: "filterFrom" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterTo = signal("", ...ngDevMode ? [{ debugName: "filterTo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterDivisi = signal(null, ...ngDevMode ? [{ debugName: "filterDivisi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.quickFilter = signal("", ...ngDevMode ? [{ debugName: "quickFilter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = 10;
    this.showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalKaryawanId = signal(null, ...ngDevMode ? [{ debugName: "modalKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalForm = signal({ tanggalList: [], keperluan: "", mengurangiGaji: false }, ...ngDevMode ? [{ debugName: "modalForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalLampiran = signal(null, ...ngDevMode ? [{ debugName: "modalLampiran" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalSaving = signal(false, ...ngDevMode ? [{ debugName: "modalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalError = signal("", ...ngDevMode ? [{ debugName: "modalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newTanggal = signal("", ...ngDevMode ? [{ debugName: "newTanggal" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.filteredData = computed(() => {
      return this.allData().filter((d) => d.status === this.activeTab());
    }, ...ngDevMode ? [{ debugName: "filteredData" }] : (
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
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filteredData().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  countByStatus(status) {
    return this.allData().filter((d) => d.status === status).length;
  }
  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
    this.loadDivisi();
    this.load();
  }
  loadDivisi() {
    this.divisiSvc.findAll().subscribe((list) => this.divisiList.set(list));
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.svc.getAllAdmin({
      status: void 0,
      from: this.filterFrom() || void 0,
      to: this.filterTo() || void 0,
      filter: this.quickFilter() || void 0,
      divisiId: this.filterDivisi() ?? void 0,
      cari: this.filterCari() || void 0
    }).subscribe({
      next: (res) => {
        this.allData.set(res.izinHari);
        this.totalMenunggu.set(res.totalMenunggu);
        this.loading.set(false);
        this.page.set(1);
      },
      error: () => {
        this.error.set("Gagal memuat data izin hari.");
        this.loading.set(false);
      }
    });
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.page.set(1);
  }
  setQuickFilter(f) {
    if (this.quickFilter() === f) {
      this.quickFilter.set("");
    } else {
      this.quickFilter.set(f);
    }
    this.filterFrom.set("");
    this.filterTo.set("");
    this.load();
  }
  onCari() {
    this.load();
  }
  // ── Approve ────────────────────────────────────────────────
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
            this.allData.update((list) => list.map((x) => x.id === item.id ? __spreadProps(__spreadValues({}, x), { status: "DISETUJUI" }) : x));
            this.showToast("Izin berhasil disetujui.");
            this.load();
          },
          error: (err) => {
            const msg = err?.message ?? err?.data?.message ?? "Gagal menyetujui izin.";
            this.showToast(msg, "danger");
          }
        });
      }
    });
  }
  // ── Reject ─────────────────────────────────────────────────
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
        const catatan = this.tolakCatatan();
        this.allData.update((list) => list.map((x) => x.id === id ? __spreadProps(__spreadValues({}, x), { status: "DITOLAK", catatanPenolakan: catatan }) : x));
        this.showTolakModal.set(false);
        this.tolakSaving.set(false);
        this.tolakId.set(null);
        this.showToast("Izin berhasil ditolak.");
        this.load();
      },
      error: (err) => {
        this.tolakSaving.set(false);
        const msg = err?.message ?? err?.data?.message ?? "Gagal menolak izin.";
        this.showToast(msg, "danger");
      }
    });
  }
  // ── Delete ─────────────────────────────────────────────────
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
            this.load();
          },
          error: (err) => {
            const msg = err?.message ?? err?.data?.message ?? "Gagal menghapus izin.";
            this.showToast(msg, "danger");
          }
        });
      }
    });
  }
  // ── Ekspor Excel ───────────────────────────────────────────
  eksporExcel() {
    this.svc.exportExcelAdmin({
      from: this.filterFrom() || void 0,
      to: this.filterTo() || void 0
    }).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "izin-hari.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  // ── Modal Tambah Izin ──────────────────────────────────────
  openModal() {
    this.karyawanSvc.findAll().subscribe((r) => {
      const list = Array.isArray(r) ? r : r?.karyawan ?? [];
      this.karyawanList.set(list);
    });
    this.modalKaryawanId.set(null);
    this.modalForm.set({ tanggalList: [], keperluan: "", mengurangiGaji: false });
    this.modalLampiran.set(null);
    this.modalError.set("");
    this.newTanggal.set("");
    this.showModal.set(true);
  }
  addTanggal() {
    const t = this.newTanggal();
    if (!t)
      return;
    const form = this.modalForm();
    if (!form.tanggalList.includes(t)) {
      this.modalForm.set(__spreadProps(__spreadValues({}, form), { tanggalList: [...form.tanggalList, t].sort() }));
    }
    this.newTanggal.set("");
  }
  removeTanggal(t) {
    const form = this.modalForm();
    this.modalForm.set(__spreadProps(__spreadValues({}, form), { tanggalList: form.tanggalList.filter((x) => x !== t) }));
  }
  onLampiranChange(e) {
    const file = e.target.files?.[0] ?? null;
    this.modalLampiran.set(file);
  }
  submitModal() {
    const karyawanId = this.modalKaryawanId();
    if (!karyawanId) {
      this.modalError.set("Pilih karyawan terlebih dahulu.");
      return;
    }
    const form = this.modalForm();
    if (form.tanggalList.length === 0) {
      this.modalError.set("Minimal satu tanggal harus dipilih.");
      return;
    }
    if (!form.keperluan.trim()) {
      this.modalError.set("Keperluan harus diisi.");
      return;
    }
    this.modalSaving.set(true);
    this.modalError.set("");
    this.svc.create(karyawanId, form, this.modalLampiran() ?? void 0).subscribe({
      next: () => {
        this.showModal.set(false);
        this.modalSaving.set(false);
        this.showToast("Izin hari berhasil ditambahkan.");
        this.load();
      },
      error: () => {
        this.modalSaving.set(false);
        this.modalError.set("Gagal menyimpan. Coba lagi.");
      }
    });
  }
  // ── Helpers ────────────────────────────────────────────────
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  formatTanggal(t) {
    if (!t)
      return "";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
  }
  formatDateTime(t) {
    if (!t)
      return "";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }) + " @ " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  }
  zonaLabel(z) {
    if (!z)
      return "";
    const map = { WIB: "WIB (UTC+7)", WITA: "WITA (UTC+8)", WIT: "WIT (UTC+9)" };
    return map[z] ?? z;
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
    this.\u0275fac = function IzinHariComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IzinHariComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IzinHariComponent, selectors: [["app-izin-hari"]], decls: 60, vars: 35, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "breadcrumb-item", "active"], [1, "fw-bold", "mb-3"], [1, "alert", "py-2", "px-3", "mb-3", "d-flex", "align-items-center", "gap-2", 2, "position", "fixed", "top", "70px", "right", "20px", "z-index", "9999", "min-width", "260px", "box-shadow", "0 4px 12px rgba(0,0,0,.15)", 3, "alert-success", "alert-danger"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "px-3", 3, "click"], [1, "badge", "rounded-pill", "ms-1", 2, "background", "#f5a623", "color", "#fff"], [1, "btn", "btn-sm", 3, "click"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", 1, "form-control", "form-control-sm", 2, "width", "160px", 3, "change", "value"], [1, "form-select", "form-select-sm", 2, "width", "160px", 3, "change", "value"], ["value", ""], [3, "value"], [1, "input-group", 2, "width", "220px"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 3, "input", "keyup.enter", "value"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-export", "me-1"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "text-muted", "small", "mb-3"], [1, "text-center", "py-5", "text-muted"], [1, "modal", "d-block", 2, "background", "rgba(0,0,0,.4)"], [1, "alert", "py-2", "px-3", "mb-3", "d-flex", "align-items-center", "gap-2", 2, "position", "fixed", "top", "70px", "right", "20px", "z-index", "9999", "min-width", "260px", "box-shadow", "0 4px 12px rgba(0,0,0,.15)"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "table", "table-borderless", 2, "min-width", "900px"], [1, "border-bottom"], [2, "width", "22%"], [2, "width", "44%"], [1, "border-bottom", "align-top"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], [1, "text-muted", "small"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["colspan", "4", 1, "text-center", "py-5", "text-muted"], [1, "bx", "bx-calendar-x", "fs-2", "d-block", "mb-2"], [1, "py-3", "pe-3"], [1, "d-flex", "align-items-start", "gap-2"], ["alt", "Foto", 1, "rounded-circle", "flex-shrink-0", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "44px", "height", "44px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.2rem"], [1, "fw-bold", 2, "font-size", ".9rem"], [1, "py-3"], [1, "table", "table-borderless", "table-sm", "mb-0", 2, "font-size", ".88rem"], [1, "fw-semibold", "text-end", "pe-2", 2, "width", "140px"], [1, "text-muted", "pe-2"], [1, "fw-semibold", "text-end", "pe-2"], ["target", "_blank", 1, "text-primary", "small", 3, "href"], [1, "badge", "bg-warning", "text-dark"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "py-3", "text-end"], [1, "d-flex", "flex-column", "align-items-end", "gap-2"], [1, "btn", "btn-outline-danger", "btn-sm", "px-3", "w-100"], [1, "btn", "btn-outline-success", "btn-sm", "px-3", "w-100"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", "w-100", 3, "click"], [1, "bx", "bx-trash", "me-1"], [1, "bx", "bx-user"], [1, "bx", "bx-file", "me-1"], [1, "text-danger"], [1, "btn", "btn-success", "btn-sm", "px-3", "w-100", 3, "click"], [1, "bx", "bx-check", "me-1"], [1, "btn", "btn-danger", "btn-sm", "px-3", "w-100", 3, "click"], [1, "bx", "bx-x", "me-1"], [1, "btn", "btn-outline-danger", "btn-sm", "px-3", "w-100", 3, "click"], [1, "btn", "btn-outline-success", "btn-sm", "px-3", "w-100", 3, "click"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header"], [1, "modal-title"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-label"], ["rows", "3", 1, "form-control", 3, "input", "value"], [1, "modal-footer"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "alert", "alert-danger", "py-2"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "form-select", 3, "change", "value"], [1, "d-flex", "gap-2", "mb-2"], ["type", "date", 1, "form-control", 2, "max-width", "200px", 3, "change", "value"], [1, "btn", "btn-outline-primary", "btn-sm", "px-3", 3, "click"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "badge", "bg-primary", "d-flex", "align-items-center", "gap-1", 2, "font-size", ".85rem"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "form-check"], ["type", "checkbox", "id", "mengurangiGaji", 1, "form-check-input", 3, "change", "checked"], ["for", "mengurangiGaji", 1, "form-check-label"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn-close", "btn-close-white", "ms-1", 2, "font-size", ".6rem", 3, "click"]], template: function IzinHariComponent_Template(rf, ctx) {
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
        \u0275\u0275text(13, "Izin Hari");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "h4", 8);
        \u0275\u0275text(15, "Izin Hari");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, IzinHariComponent_Conditional_16_Template, 4, 7, "div", 9);
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "button", 14);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_21_listener() {
          return ctx.setTab("MENUNGGU");
        });
        \u0275\u0275text(22, " Pengajuan ");
        \u0275\u0275conditionalCreate(23, IzinHariComponent_Conditional_23_Template, 2, 1, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_24_listener() {
          return ctx.setTab("DISETUJUI");
        });
        \u0275\u0275text(25, "Disetujui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 14);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_26_listener() {
          return ctx.setTab("DITOLAK");
        });
        \u0275\u0275text(27, "Ditolak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13)(29, "button", 16);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_29_listener() {
          return ctx.setQuickFilter("HARI_INI");
        });
        \u0275\u0275text(30, "Izin Hari Ini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 16);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_31_listener() {
          return ctx.setQuickFilter("BESOK");
        });
        \u0275\u0275text(32, "Izin Besok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 16);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_33_listener() {
          return ctx.setQuickFilter("7_HARI");
        });
        \u0275\u0275text(34, "Izin 7 Hari Kedepan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 17)(36, "input", 18);
        \u0275\u0275listener("change", function IzinHariComponent_Template_input_change_36_listener($event) {
          return ctx.filterFrom.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "input", 18);
        \u0275\u0275listener("change", function IzinHariComponent_Template_input_change_39_listener($event) {
          return ctx.filterTo.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "select", 19);
        \u0275\u0275listener("change", function IzinHariComponent_Template_select_change_40_listener($event) {
          return ctx.filterDivisi.set(+$event.target.value || null);
        });
        \u0275\u0275elementStart(41, "option", 20);
        \u0275\u0275text(42, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(43, IzinHariComponent_For_44_Template, 2, 2, "option", 21, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 22)(46, "input", 23);
        \u0275\u0275listener("input", function IzinHariComponent_Template_input_input_46_listener($event) {
          return ctx.filterCari.set($event.target.value);
        })("keyup.enter", function IzinHariComponent_Template_input_keyup_enter_46_listener() {
          return ctx.onCari();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 24);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_47_listener() {
          return ctx.onCari();
        });
        \u0275\u0275element(48, "i", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "button", 26);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_49_listener() {
          return ctx.eksporExcel();
        });
        \u0275\u0275element(50, "i", 27);
        \u0275\u0275text(51, "Ekspor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 28);
        \u0275\u0275listener("click", function IzinHariComponent_Template_button_click_52_listener() {
          return ctx.openModal();
        });
        \u0275\u0275element(53, "i", 29);
        \u0275\u0275text(54, "Tambah Izin Hari ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(55, IzinHariComponent_Conditional_55_Template, 2, 0, "p", 30);
        \u0275\u0275conditionalCreate(56, IzinHariComponent_Conditional_56_Template, 3, 0, "div", 31);
        \u0275\u0275conditionalCreate(57, IzinHariComponent_Conditional_57_Template, 33, 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(58, IzinHariComponent_Conditional_58_Template, 17, 3, "div", 32);
        \u0275\u0275conditionalCreate(59, IzinHariComponent_Conditional_59_Template, 52, 7, "div", 32);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.toastMsg() ? 16 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "MENUNGGU")("btn-outline-secondary", ctx.activeTab() !== "MENUNGGU");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.countByStatus("MENUNGGU") > 0 ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DISETUJUI")("btn-outline-secondary", ctx.activeTab() !== "DISETUJUI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DITOLAK")("btn-outline-secondary", ctx.activeTab() !== "DITOLAK");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("btn-outline-primary", ctx.quickFilter() !== "HARI_INI")("btn-primary", ctx.quickFilter() === "HARI_INI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-outline-primary", ctx.quickFilter() !== "BESOK")("btn-primary", ctx.quickFilter() === "BESOK");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-outline-primary", ctx.quickFilter() !== "7_HARI")("btn-primary", ctx.quickFilter() === "7_HARI");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterFrom());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterTo());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.filterDivisi());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.filterCari());
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.activeTab() === "MENUNGGU" ? 55 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal() ? 59 : -1);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink, LayoutComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.btn-tab[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n}\n.table[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(caption)    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.5rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9ff;\n}\n.detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px 4px;\n  vertical-align: top;\n  font-size: 0.875rem;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e9ecef;\n  flex-shrink: 0;\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #9ca3af;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.quick-filter-btn[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n}\n.badge-menunggu[_ngcontent-%COMP%] {\n  background: #f5a623;\n  color: #fff;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 160px;\n  border: none;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.page-link[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.3rem 0.6rem;\n  color: #6366f1;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n}\n.toast-float[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 70px;\n  right: 20px;\n  z-index: 9999;\n  min-width: 260px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=izin-hari.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IzinHariComponent, [{
    type: Component,
    args: [{ selector: "app-izin-hari", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Izin</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard">Dasbor</a></li>\r
          <li class="breadcrumb-item">Izin</li>\r
          <li class="breadcrumb-item active">Izin Hari</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <h4 class="fw-bold mb-3">Izin Hari</h4>\r
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
      <!-- Tabs + Quick Filter -->\r
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">\r
        <div class="d-flex gap-2">\r
          <button class="btn btn-sm px-3"\r
                  [class.btn-primary]="activeTab()==='MENUNGGU'"\r
                  [class.btn-outline-secondary]="activeTab()!=='MENUNGGU'"\r
                  (click)="setTab('MENUNGGU')">\r
            Pengajuan\r
            @if (countByStatus('MENUNGGU') > 0) {\r
              <span class="badge rounded-pill ms-1" style="background:#f5a623;color:#fff">{{ countByStatus('MENUNGGU') }}</span>\r
            }\r
          </button>\r
          <button class="btn btn-sm px-3"\r
                  [class.btn-primary]="activeTab()==='DISETUJUI'"\r
                  [class.btn-outline-secondary]="activeTab()!=='DISETUJUI'"\r
                  (click)="setTab('DISETUJUI')">Disetujui</button>\r
          <button class="btn btn-sm px-3"\r
                  [class.btn-primary]="activeTab()==='DITOLAK'"\r
                  [class.btn-outline-secondary]="activeTab()!=='DITOLAK'"\r
                  (click)="setTab('DITOLAK')">Ditolak</button>\r
        </div>\r
        <div class="d-flex gap-2">\r
          <button class="btn btn-sm"\r
                  [class.btn-outline-primary]="quickFilter()!=='HARI_INI'"\r
                  [class.btn-primary]="quickFilter()==='HARI_INI'"\r
                  (click)="setQuickFilter('HARI_INI')">Izin Hari Ini</button>\r
          <button class="btn btn-sm"\r
                  [class.btn-outline-primary]="quickFilter()!=='BESOK'"\r
                  [class.btn-primary]="quickFilter()==='BESOK'"\r
                  (click)="setQuickFilter('BESOK')">Izin Besok</button>\r
          <button class="btn btn-sm"\r
                  [class.btn-outline-primary]="quickFilter()!=='7_HARI'"\r
                  [class.btn-primary]="quickFilter()==='7_HARI'"\r
                  (click)="setQuickFilter('7_HARI')">Izin 7 Hari Kedepan</button>\r
        </div>\r
      </div>\r
\r
      <!-- Filter Bar -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <input type="date" class="form-control form-control-sm" style="width:160px"\r
               [value]="filterFrom()" (change)="filterFrom.set($any($event.target).value)">\r
        <span>-</span>\r
        <input type="date" class="form-control form-control-sm" style="width:160px"\r
               [value]="filterTo()" (change)="filterTo.set($any($event.target).value)">\r
        <select class="form-select form-select-sm" style="width:160px"\r
                [value]="filterDivisi()"\r
                (change)="filterDivisi.set(+$any($event.target).value || null)">\r
          <option value="">--Divisi--</option>\r
          @for (d of divisiList(); track d.id) {\r
            <option [value]="d.id">{{ d.namaDivisi }}</option>\r
          }\r
        </select>\r
        <div class="input-group" style="width:220px">\r
          <input type="text" class="form-control form-control-sm" placeholder="Cari"\r
                 [value]="filterCari()" (input)="filterCari.set($any($event.target).value)"\r
                 (keyup.enter)="onCari()">\r
          <button class="btn btn-outline-secondary btn-sm" (click)="onCari()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
        <button class="btn btn-success btn-sm px-3" (click)="eksporExcel()">\r
          <i class="bx bx-export me-1"></i>Ekspor Excel\r
        </button>\r
        <button class="btn btn-primary btn-sm px-3" (click)="openModal()">\r
          <i class="bx bx-plus me-1"></i>Tambah Izin Hari\r
        </button>\r
      </div>\r
\r
      <!-- Info -->\r
      @if (activeTab()==='MENUNGGU') {\r
        <p class="text-muted small mb-3">Daftar karyawan yang melakukan izin dan membutuhkan aksi jawaban</p>\r
      }\r
\r
      <!-- Loading -->\r
      @if (loading()) {\r
        <div class="text-center py-5 text-muted">\r
          <div class="spinner-border spinner-border-sm me-2"></div>Memuat data...\r
        </div>\r
      }\r
\r
      @if (!loading()) {\r
        <!-- Table Header -->\r
        <table class="table table-borderless" style="min-width:900px">\r
          <thead>\r
            <tr class="border-bottom">\r
              <th style="width:22%">Karyawan</th>\r
              <th style="width:44%">Detail Pengajuan</th>\r
              <th>Status Persetujuan</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (pagedData().length === 0) {\r
              <tr>\r
                <td colspan="4" class="text-center py-5 text-muted">\r
                  <i class="bx bx-calendar-x fs-2 d-block mb-2"></i>Tidak ada data izin.\r
                </td>\r
              </tr>\r
            }\r
            @for (item of pagedData(); track item.id) {\r
              <tr class="border-bottom align-top">\r
                <!-- Karyawan -->\r
                <td class="py-3 pe-3">\r
                  <div class="d-flex align-items-start gap-2">\r
                    @if (item.fotoProfil) {\r
                      <img [src]="item.fotoProfil" alt="Foto"\r
                           class="rounded-circle flex-shrink-0"\r
                           style="width:44px;height:44px;object-fit:cover;border:2px solid #e9ecef">\r
                    } @else {\r
                      <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                           style="width:44px;height:44px;background:#f3f4f6;color:#9ca3af;font-size:1.2rem">\r
                        <i class="bx bx-user"></i>\r
                      </div>\r
                    }\r
                    <div>\r
                      <div class="fw-bold" style="font-size:.9rem">{{ item.namaKaryawan }}</div>\r
                      <div class="text-muted small">{{ item.namaDivisi }}</div>\r
                      @if (item.zonaWaktu) {\r
                        <div class="text-muted small">{{ zonaLabel(item.zonaWaktu) }}</div>\r
                      }\r
                    </div>\r
                  </div>\r
                </td>\r
\r
                <!-- Detail -->\r
                <td class="py-3">\r
                  <table class="table table-borderless table-sm mb-0" style="font-size:.88rem">\r
                    <tr>\r
                      <td class="fw-semibold text-end pe-2" style="width:140px">Tgl. Pengajuan</td>\r
                      <td class="text-muted pe-2">:</td>\r
                      <td>{{ formatDateTime(item.createdAt) }}</td>\r
                    </tr>\r
                    <tr>\r
                      <td class="fw-semibold text-end pe-2">Tgl. Izin</td>\r
                      <td class="text-muted pe-2">:</td>\r
                      <td>\r
                        @for (t of item.tanggalList; track t; let i = $index) {\r
                          <div>{{ i + 1 }}. {{ formatTanggal(t) }}</div>\r
                        }\r
                      </td>\r
                    </tr>\r
                    <tr>\r
                      <td class="fw-semibold text-end pe-2">Keperluan</td>\r
                      <td class="text-muted pe-2">:</td>\r
                      <td>{{ item.keperluan }}</td>\r
                    </tr>\r
                    <tr>\r
                      <td class="fw-semibold text-end pe-2">File Kelengkapan</td>\r
                      <td class="text-muted pe-2">:</td>\r
                      <td>\r
                        @if (item.lampiranUrl) {\r
                          <a [href]="item.lampiranUrl" target="_blank" class="text-primary small">\r
                            <i class="bx bx-file me-1"></i>Lihat File\r
                          </a>\r
                        }\r
                      </td>\r
                    </tr>\r
                    @if (item.catatanPenolakan) {\r
                      <tr>\r
                        <td class="fw-semibold text-end pe-2">Catatan Penolakan</td>\r
                        <td class="text-muted pe-2">:</td>\r
                        <td class="text-danger">{{ item.catatanPenolakan }}</td>\r
                      </tr>\r
                    }\r
                  </table>\r
                </td>\r
\r
                <!-- Status -->\r
                <td class="py-3">\r
                  @if (item.status === 'MENUNGGU') {\r
                    <span class="badge bg-warning text-dark">Menunggu</span>\r
                  } @else if (item.status === 'DISETUJUI') {\r
                    <span class="badge bg-success">Disetujui</span>\r
                  } @else if (item.status === 'DITOLAK') {\r
                    <span class="badge bg-danger">Ditolak</span>\r
                  }\r
                </td>\r
\r
                <!-- Aksi -->\r
                <td class="py-3 text-end">\r
                  <div class="d-flex flex-column align-items-end gap-2">\r
                    @if (item.status === 'MENUNGGU') {\r
                      <button class="btn btn-success btn-sm px-3 w-100" (click)="approve(item)">\r
                        <i class="bx bx-check me-1"></i>Setujui\r
                      </button>\r
                      <button class="btn btn-danger btn-sm px-3 w-100" (click)="openTolak(item)">\r
                        <i class="bx bx-x me-1"></i>Tolak\r
                      </button>\r
                    }\r
                    @if (item.status === 'DISETUJUI') {\r
                      <button class="btn btn-outline-danger btn-sm px-3 w-100" (click)="openTolak(item)">\r
                        <i class="bx bx-x me-1"></i>Batalkan Persetujuan\r
                      </button>\r
                    }\r
                    @if (item.status === 'DITOLAK') {\r
                      <button class="btn btn-outline-success btn-sm px-3 w-100" (click)="approve(item)">\r
                        <i class="bx bx-check me-1"></i>Setujui\r
                      </button>\r
                    }\r
                    <button class="btn btn-outline-secondary btn-sm px-3 w-100" (click)="delete(item)">\r
                      <i class="bx bx-trash me-1"></i>Hapus\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
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
\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Tolak \u2500\u2500 -->\r
  @if (showTolakModal()) {\r
    <div class="modal d-block" style="background:rgba(0,0,0,.4)">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title">Tolak Izin</h5>\r
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
  <!-- \u2500\u2500 Modal Tambah Izin Hari \u2500\u2500 -->\r
  @if (showModal()) {\r
    <div class="modal d-block" style="background:rgba(0,0,0,.4)">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title">Tambah Izin Hari</h5>\r
            <button class="btn-close" (click)="showModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2">{{ modalError() }}</div>\r
            }\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Karyawan <span class="text-danger">*</span></label>\r
              <select class="form-select"\r
                      [value]="modalKaryawanId()"\r
                      (change)="modalKaryawanId.set(+$any($event.target).value || null)">\r
                <option value="">-- Pilih Karyawan --</option>\r
                @for (k of karyawanList(); track k.id) {\r
                  <option [value]="k.id">{{ k.namaLengkap }}\r
                    @if (k.namaDivisi) { ({{ k.namaDivisi }}) }\r
                  </option>\r
                }\r
              </select>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Tanggal Izin <span class="text-danger">*</span></label>\r
              <div class="d-flex gap-2 mb-2">\r
                <input type="date" class="form-control" style="max-width:200px"\r
                       [value]="newTanggal()" (change)="newTanggal.set($any($event.target).value)">\r
                <button class="btn btn-outline-primary btn-sm px-3" (click)="addTanggal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="d-flex flex-wrap gap-2">\r
                @for (t of modalForm().tanggalList; track t) {\r
                  <span class="badge bg-primary d-flex align-items-center gap-1" style="font-size:.85rem">\r
                    {{ formatTanggal(t) }}\r
                    <button class="btn-close btn-close-white ms-1" style="font-size:.6rem"\r
                            (click)="removeTanggal(t)"></button>\r
                  </span>\r
                }\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">Keperluan <span class="text-danger">*</span></label>\r
              <textarea class="form-control" rows="3"\r
                        [value]="modalForm().keperluan"\r
                        (input)="modalForm.set({...modalForm(), keperluan: $any($event.target).value})"></textarea>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">File Kelengkapan</label>\r
              <input type="file" class="form-control" accept=".pdf,.jpg,.jpeg,.png"\r
                     (change)="onLampiranChange($event)">\r
            </div>\r
            <div class="form-check">\r
              <input class="form-check-input" type="checkbox" id="mengurangiGaji"\r
                     [checked]="modalForm().mengurangiGaji"\r
                     (change)="modalForm.set({...modalForm(), mengurangiGaji: $any($event.target).checked})">\r
              <label class="form-check-label" for="mengurangiGaji">Mengurangi Gaji</label>\r
            </div>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-secondary btn-sm" (click)="showModal.set(false)">Batal</button>\r
            <button class="btn btn-primary btn-sm px-4" (click)="submitModal()" [disabled]="modalSaving()">\r
              @if (modalSaving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ["/* src/app/features/izin/izin-hari/izin-hari.component.scss */\n:host {\n  display: block;\n}\n.btn-tab {\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: background 0.15s, color 0.15s;\n}\n.table > :not(caption) > * > * {\n  padding: 0.75rem 0.5rem;\n}\n.table tbody tr {\n  transition: background 0.1s;\n}\n.table tbody tr:hover {\n  background: #f8f9ff;\n}\n.detail-table td {\n  padding: 2px 4px;\n  vertical-align: top;\n  font-size: 0.875rem;\n}\n.avatar-circle {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e9ecef;\n  flex-shrink: 0;\n}\n.avatar-placeholder {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #9ca3af;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.quick-filter-btn {\n  font-size: 0.8rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n}\n.badge-menunggu {\n  background: #f5a623;\n  color: #fff;\n}\n.dropdown-menu {\n  min-width: 160px;\n  border: none;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n}\n.dropdown-item {\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n}\n.dropdown-item:hover {\n  background: #f3f4f6;\n}\n.modal {\n  z-index: 1050;\n}\n.modal-content {\n  border-radius: 12px;\n}\n.page-link {\n  font-size: 0.8rem;\n  padding: 0.3rem 0.6rem;\n  color: #6366f1;\n}\n.page-item.active .page-link {\n  background-color: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n}\n.toast-float {\n  position: fixed;\n  top: 70px;\n  right: 20px;\n  z-index: 9999;\n  min-width: 260px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=izin-hari.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IzinHariComponent, { className: "IzinHariComponent", filePath: "src/app/features/izin/izin-hari/izin-hari.component.ts", lineNumber: 25 });
})();
export {
  IzinHariComponent
};
//# sourceMappingURL=chunk-SO2Q77HH.js.map
