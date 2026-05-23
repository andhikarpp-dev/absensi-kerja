import {
  CutiService
} from "./chunk-YPNFP5NB.js";
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
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/models/cuti.model.ts
var JENIS_CUTI_KHUSUS_LIST = [
  "Cuti Menikah",
  "Cuti Menikahkan Anak",
  "Cuti Mengkhitankan Anak",
  "Cuti Membaptiskan Anak",
  "Cuti Melahirkan",
  "Cuti Istri Melahirkan",
  "Cuti Istri Keguguran Kandungan",
  "Cuti Duka (Suami/Istri, Orangtua/Mertua, Anak/Menantu)",
  "Cuti Duka (Anggota Keluarga dalam Satu Rumah)"
];

// src/app/features/cuti/cuti-admin/cuti-admin.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.full;
function CutiAdminComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CutiAdminComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
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
function CutiAdminComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 53);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_61_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal("TAHUNAN"));
    });
    \u0275\u0275text(2, "Cuti Tahunan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 53);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_61_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal("SETENGAH_HARI"));
    });
    \u0275\u0275text(4, "Cuti Setengah Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal("KHUSUS"));
    });
    \u0275\u0275text(6, "Cuti Khusus");
    \u0275\u0275elementEnd()();
  }
}
function CutiAdminComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " Daftar karyawan yang melakukan cuti dan membutuhkan aksi jawaban ");
    \u0275\u0275elementEnd();
  }
}
function CutiAdminComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, "Memuat data...");
    \u0275\u0275elementEnd()();
  }
}
function CutiAdminComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, "Belum ada data cuti.");
    \u0275\u0275elementEnd()();
  }
}
function CutiAdminComponent_Conditional_78_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.namaDivisi);
  }
}
function CutiAdminComponent_Conditional_78_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.formatTanggal(c_r5.tanggalSelesai), " ");
  }
}
function CutiAdminComponent_Conditional_78_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Lampiran ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", c_r5.lampiranUrl, \u0275\u0275sanitizeUrl);
  }
}
function CutiAdminComponent_Conditional_78_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.catatanPenolakan);
  }
}
function CutiAdminComponent_Conditional_78_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_78_For_1_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(c_r5));
    });
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_78_For_1_Conditional_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTolak(c_r5));
    });
    \u0275\u0275element(3, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function CutiAdminComponent_Conditional_78_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CutiAdminComponent_Conditional_78_For_1_Conditional_4_Template, 2, 1, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 56);
    \u0275\u0275text(9);
    \u0275\u0275conditionalCreate(10, CutiAdminComponent_Conditional_78_For_1_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, CutiAdminComponent_Conditional_78_For_1_Conditional_13_Template, 3, 1, "a", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, CutiAdminComponent_Conditional_78_For_1_Conditional_17_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 59)(19, "div", 60);
    \u0275\u0275conditionalCreate(20, CutiAdminComponent_Conditional_78_For_1_Conditional_20_Template, 4, 0);
    \u0275\u0275elementStart(21, "button", 61);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_78_For_1_Template_button_click_21_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(c_r5));
    });
    \u0275\u0275element(22, "i", 62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.namaKaryawan);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.namaDivisi ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.jenisLabel(c_r5.jenisCuti));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(c_r5.tanggalMulai), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.tanggalMulai !== c_r5.tanggalSelesai ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Keperluan: ", c_r5.keperluan, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.lampiranUrl ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.statusBadgeClass(c_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(c_r5.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.catatanPenolakan ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r5.status === "MENUNGGU" ? 20 : -1);
  }
}
function CutiAdminComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CutiAdminComponent_Conditional_78_For_1_Template, 23, 12, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.pagedData());
  }
}
function CutiAdminComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48)(1, "button", 49);
    \u0275\u0275listener("click", function CutiAdminComponent_For_91_Template_button_click_1_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(p_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", p_r8 === ctx_r0.page());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r8);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError());
  }
}
function CutiAdminComponent_Conditional_98_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_19_For_2_Template_button_click_0_listener() {
      const k_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectKaryawan(k_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r11.namaLengkap);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275repeaterCreate(1, CutiAdminComponent_Conditional_98_Conditional_19_For_2_Template, 2, 1, "button", 97, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredKaryawan());
  }
}
function CutiAdminComponent_Conditional_98_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_20_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.modalKhususJenis.set("");
      return \u0275\u0275resetView(ctx_r0.modalKhususQ.set(""));
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function CutiAdminComponent_Conditional_98_Conditional_20_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_20_Conditional_11_For_2_Template_button_click_0_listener() {
      const j_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectKhusus(j_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r15);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275repeaterCreate(1, CutiAdminComponent_Conditional_98_Conditional_20_Conditional_11_For_2_Template, 2, 1, "button", 97, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredKhususList());
  }
}
function CutiAdminComponent_Conditional_98_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "label", 77);
    \u0275\u0275text(2, "Jenis Cuti Khusus ");
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 79)(6, "div", 80)(7, "input", 99);
    \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Conditional_98_Conditional_20_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.modalKhususQ.set($event);
      return \u0275\u0275resetView(ctx_r0.showKhususDrop.set(true));
    })("focus", function CutiAdminComponent_Conditional_98_Conditional_20_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showKhususDrop.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CutiAdminComponent_Conditional_98_Conditional_20_Conditional_8_Template, 2, 0, "button", 100);
    \u0275\u0275elementStart(9, "button", 82);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_20_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showKhususDrop.set(!ctx_r0.showKhususDrop()));
    });
    \u0275\u0275element(10, "i", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, CutiAdminComponent_Conditional_98_Conditional_20_Conditional_11_Template, 3, 0, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.modalKhususQ());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalKhususJenis() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.showKhususDrop() ? 11 : -1);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r18 = ctx.$implicit;
    \u0275\u0275styleProp("color", d_r18 === "Min" ? "#e53935" : d_r18 === "Sab" ? "#1e88e5" : "#333");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r18, " ");
  }
}
function CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_For_12_Template_button_click_0_listener() {
      const cell_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectDate(cell_r20.full));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("color", ctx_r0.cellColor(cell_r20, ctx_r0.weekDays))("background", cell_r20.full === ctx_r0.modalTanggal() ? "#5c6bc0" : "transparent")("color", cell_r20.full === ctx_r0.modalTanggal() ? "#fff" : void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r20.date, " ");
  }
}
function CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "button", 104);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.prevMonth());
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 104);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.nextMonth());
    });
    \u0275\u0275text(7, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 105);
    \u0275\u0275repeaterCreate(9, CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_For_10_Template, 2, 3, "div", 106, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(11, CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_For_12_Template, 2, 7, "button", 107, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.calMonthName());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.weekDays);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.calDays());
  }
}
function CutiAdminComponent_Conditional_98_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 101);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Conditional_27_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.calendarVisible.set(!ctx_r0.calendarVisible()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, CutiAdminComponent_Conditional_98_Conditional_27_Conditional_1_Template, 13, 1, "div", 102);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.modalTanggal() ? ctx_r0.formatTanggalDisplay(ctx_r0.modalTanggal()) : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.calendarVisible() ? 1 : -1);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 110);
    \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Conditional_98_Conditional_28_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.modalTanggal.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.modalTanggal());
  }
}
function CutiAdminComponent_Conditional_98_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 89);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 90);
  }
}
function CutiAdminComponent_Conditional_98_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalLampiranNama());
  }
}
function CutiAdminComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.showKaryawanDrop.set(false);
      return \u0275\u0275resetView(ctx_r0.showKhususDrop.set(false));
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71)(4, "h5", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 74);
    \u0275\u0275conditionalCreate(8, CutiAdminComponent_Conditional_98_Conditional_8_Template, 2, 1, "div", 75);
    \u0275\u0275elementStart(9, "div", 76)(10, "label", 77);
    \u0275\u0275text(11, "Karyawan ");
    \u0275\u0275elementStart(12, "span", 78);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 79)(15, "div", 80)(16, "input", 81);
    \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Conditional_98_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.modalKaryawanQ.set($event);
      return \u0275\u0275resetView(ctx_r0.showKaryawanDrop.set(true));
    })("focus", function CutiAdminComponent_Conditional_98_Template_input_focus_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showKaryawanDrop.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 82);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showKaryawanDrop.set(!ctx_r0.showKaryawanDrop()));
    });
    \u0275\u0275element(18, "i", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, CutiAdminComponent_Conditional_98_Conditional_19_Template, 3, 0, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, CutiAdminComponent_Conditional_98_Conditional_20_Template, 12, 3, "div", 76);
    \u0275\u0275elementStart(21, "div", 76)(22, "label", 77);
    \u0275\u0275text(23, "Tgl. Cuti ");
    \u0275\u0275elementStart(24, "span", 78);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 79);
    \u0275\u0275conditionalCreate(27, CutiAdminComponent_Conditional_98_Conditional_27_Template, 2, 2)(28, CutiAdminComponent_Conditional_98_Conditional_28_Template, 1, 1, "input", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 76)(30, "label", 77);
    \u0275\u0275text(31);
    \u0275\u0275elementStart(32, "span", 78);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 86)(35, "textarea", 87);
    \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Conditional_98_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modalKeperluan.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 76)(37, "label", 77);
    \u0275\u0275text(38, "Lampiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 86)(40, "label", 88);
    \u0275\u0275conditionalCreate(41, CutiAdminComponent_Conditional_98_Conditional_41_Template, 1, 0, "i", 89)(42, CutiAdminComponent_Conditional_98_Conditional_42_Template, 1, 0, "i", 90);
    \u0275\u0275elementStart(43, "input", 91);
    \u0275\u0275listener("change", function CutiAdminComponent_Conditional_98_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLampiranChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(44, CutiAdminComponent_Conditional_98_Conditional_44_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 93);
    \u0275\u0275text(46, " Pengajuan ini akan langsung disetujui dan akan masuk ke tab Disetujui. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 94)(48, "button", 95);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitModal());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 96);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_98_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal.set(false));
    });
    \u0275\u0275text(51, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Tambah ", ctx_r0.modalJenisLabel());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.modalError() ? 8 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r0.modalKaryawanQ());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.showKaryawanDrop() && ctx_r0.filteredKaryawan().length > 0 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalJenis() === "KHUSUS" ? 20 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.modalJenis() === "SETENGAH_HARI" ? 27 : 28);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalJenis() === "KHUSUS" ? "Keterangan" : "Keperluan", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.modalKeperluan());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r0.modalLampiranNama() ? 41 : 42);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.modalLampiranNama() ? 44 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalSaving() ? "Menyimpan..." : "Simpan", " ");
  }
}
function CutiAdminComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 111)(2, "div", 70)(3, "div", 112)(4, "h5", 113);
    \u0275\u0275text(5, "Tolak Pengajuan Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_99_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 74)(8, "label", 114);
    \u0275\u0275text(9, "Catatan Penolakan (opsional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 115);
    \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Conditional_99_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tolakCatatan.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 116)(12, "button", 117);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_99_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 118);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_99_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitTolak());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r0.tolakCatatan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.tolakSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.tolakSaving() ? "Menyimpan..." : "Tolak", " ");
  }
}
function CutiAdminComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 119)(2, "div", 120)(3, "div", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 122);
    \u0275\u0275listener("click", function CutiAdminComponent_Conditional_100_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
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
var CutiAdminComponent = class _CutiAdminComponent {
  constructor() {
    this.cutiSvc = inject(CutiService);
    this.divisiSvc = inject(DivisiService);
    this.karyawanSvc = inject(KaryawanService);
    this.activeTab = signal("PENGAJUAN", ...ngDevMode ? [{ debugName: "activeTab" }] : (
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
    this.filterJenis = signal("", ...ngDevMode ? [{ debugName: "filterJenis" }] : (
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
    this.showTambahMenu = signal(false, ...ngDevMode ? [{ debugName: "showTambahMenu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalJenis = signal(null, ...ngDevMode ? [{ debugName: "modalJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalKaryawanId = signal(null, ...ngDevMode ? [{ debugName: "modalKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalKaryawanQ = signal("", ...ngDevMode ? [{ debugName: "modalKaryawanQ" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showKaryawanDrop = signal(false, ...ngDevMode ? [{ debugName: "showKaryawanDrop" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalTanggal = signal("", ...ngDevMode ? [{ debugName: "modalTanggal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalKeperluan = signal("", ...ngDevMode ? [{ debugName: "modalKeperluan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalKhususJenis = signal("", ...ngDevMode ? [{ debugName: "modalKhususJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalKhususQ = signal("", ...ngDevMode ? [{ debugName: "modalKhususQ" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showKhususDrop = signal(false, ...ngDevMode ? [{ debugName: "showKhususDrop" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalLampiran = signal(null, ...ngDevMode ? [{ debugName: "modalLampiran" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalLampiranNama = signal("", ...ngDevMode ? [{ debugName: "modalLampiranNama" }] : (
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
    this.calendarVisible = signal(false, ...ngDevMode ? [{ debugName: "calendarVisible" }] : (
      /* istanbul ignore next */
      []
    ));
    this.calYear = signal((/* @__PURE__ */ new Date()).getFullYear(), ...ngDevMode ? [{ debugName: "calYear" }] : (
      /* istanbul ignore next */
      []
    ));
    this.calMonth = signal((/* @__PURE__ */ new Date()).getMonth(), ...ngDevMode ? [{ debugName: "calMonth" }] : (
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
      const statusMap = {
        PENGAJUAN: "MENUNGGU",
        DISETUJUI: "DISETUJUI",
        DITOLAK: "DITOLAK"
      };
      return this.allData().filter((d) => d.status === statusMap[this.activeTab()]);
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
    this.filteredKaryawan = computed(() => {
      const q = this.modalKaryawanQ().toLowerCase();
      if (!q)
        return this.karyawanList();
      return this.karyawanList().filter((k) => k.namaLengkap.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredKhususList = computed(() => {
      const q = this.modalKhususQ().toLowerCase();
      if (!q)
        return JENIS_CUTI_KHUSUS_LIST;
      return JENIS_CUTI_KHUSUS_LIST.filter((j) => j.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredKhususList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.calDays = computed(() => {
      const year = this.calYear();
      const month = this.calMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const offset = (firstDay + 6) % 7;
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrev = new Date(year, month, 0).getDate();
      const cells = [];
      for (let i = offset - 1; i >= 0; i--) {
        const d = daysInPrev - i;
        cells.push({ date: d, month: "prev", full: this.toIso(year, month - 1, d) });
      }
      for (let d = 1; d <= daysInMonth; d++) {
        cells.push({ date: d, month: "cur", full: this.toIso(year, month, d) });
      }
      const remaining = 42 - cells.length;
      for (let d = 1; d <= remaining; d++) {
        cells.push({ date: d, month: "next", full: this.toIso(year, month + 1, d) });
      }
      return cells;
    }, ...ngDevMode ? [{ debugName: "calDays" }] : (
      /* istanbul ignore next */
      []
    ));
    this.calMonthName = computed(() => {
      return new Date(this.calYear(), this.calMonth(), 1).toLocaleDateString("id-ID", { month: "long", year: "numeric" });
    }, ...ngDevMode ? [{ debugName: "calMonthName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.weekDays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  }
  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((list) => this.divisiList.set(list));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    const opts = {};
    if (this.filterFrom())
      opts.from = this.filterFrom();
    if (this.filterTo())
      opts.to = this.filterTo();
    if (this.filterJenis())
      opts.jenis = this.filterJenis();
    if (this.filterDivisi())
      opts.divisiId = this.filterDivisi();
    if (this.filterCari())
      opts.cari = this.filterCari();
    if (this.quickFilter())
      opts.filter = this.quickFilter();
    this.cutiSvc.getAllAdmin(opts).subscribe({
      next: (res) => {
        this.allData.set(res.cuti);
        this.totalMenunggu.set(res.totalMenunggu);
        this.loading.set(false);
        this.page.set(1);
      },
      error: () => {
        this.error.set("Gagal memuat data cuti.");
        this.loading.set(false);
      }
    });
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.page.set(1);
  }
  setQuickFilter(f) {
    this.quickFilter.set(this.quickFilter() === f ? "" : f);
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
      title: "Setujui Cuti?",
      text: `Cuti ${item.namaKaryawan} akan disetujui.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Setujui",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result?.isConfirmed || result?.value === true) {
        this.cutiSvc.updateStatusAdmin(item.id, "DISETUJUI").subscribe({
          next: () => {
            this.showToast("Cuti berhasil disetujui.");
            this.load();
          },
          error: () => this.showToast("Gagal menyetujui.", "danger")
        });
      }
    });
  }
  // ── Tolak ──────────────────────────────────────────────────
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
    this.cutiSvc.updateStatusAdmin(id, "DITOLAK", this.tolakCatatan()).subscribe({
      next: () => {
        this.showTolakModal.set(false);
        this.tolakSaving.set(false);
        this.showToast("Cuti berhasil ditolak.");
        this.load();
      },
      error: () => {
        this.tolakSaving.set(false);
        this.showToast("Gagal menolak.", "danger");
      }
    });
  }
  // ── Delete ─────────────────────────────────────────────────
  delete(item) {
    Swal.fire({
      title: "Hapus Cuti?",
      text: `Data cuti ${item.namaKaryawan} akan dihapus permanen.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#dc3545"
    }).then((result) => {
      if (result?.isConfirmed || result?.value === true) {
        this.cutiSvc.deleteAdmin(item.id).subscribe({
          next: () => {
            this.showToast("Cuti berhasil dihapus.");
            this.load();
          },
          error: () => this.showToast("Gagal menghapus.", "danger")
        });
      }
    });
  }
  // ── Ekspor Excel ───────────────────────────────────────────
  eksporExcel() {
    this.cutiSvc.exportExcelAdmin({
      from: this.filterFrom() || void 0,
      to: this.filterTo() || void 0,
      jenis: this.filterJenis() || void 0
    }).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cuti.xlsx";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  // ── Modal Tambah ───────────────────────────────────────────
  openModal(jenis) {
    this.karyawanSvc.findAll().subscribe((r) => {
      this.karyawanList.set(Array.isArray(r) ? r : r?.karyawan ?? []);
    });
    this.modalJenis.set(jenis);
    this.modalKaryawanId.set(null);
    this.modalKaryawanQ.set("");
    this.modalTanggal.set("");
    this.modalKeperluan.set("");
    this.modalKhususJenis.set("");
    this.modalKhususQ.set("");
    this.modalLampiran.set(null);
    this.modalLampiranNama.set("");
    this.modalError.set("");
    this.calendarVisible.set(false);
    this.showTambahMenu.set(false);
    this.showModal.set(true);
  }
  selectKaryawan(k) {
    this.modalKaryawanId.set(k.id);
    this.modalKaryawanQ.set(k.namaLengkap);
    this.showKaryawanDrop.set(false);
  }
  selectKhusus(j) {
    this.modalKhususJenis.set(j);
    this.modalKhususQ.set(j);
    this.showKhususDrop.set(false);
  }
  cellColor(cell, weekDays) {
    if (cell.month !== "cur")
      return "#bbb";
    const day = (/* @__PURE__ */ new Date(cell.full + "T00:00")).getDay();
    if (weekDays.indexOf("Min") >= 0 && day === 0)
      return "#e53935";
    if (day === 6)
      return "#1e88e5";
    return "#333";
  }
  selectDate(full) {
    this.modalTanggal.set(full);
    this.calendarVisible.set(false);
  }
  prevMonth() {
    if (this.calMonth() === 0) {
      this.calMonth.set(11);
      this.calYear.update((y) => y - 1);
    } else {
      this.calMonth.update((m) => m - 1);
    }
  }
  nextMonth() {
    if (this.calMonth() === 11) {
      this.calMonth.set(0);
      this.calYear.update((y) => y + 1);
    } else {
      this.calMonth.update((m) => m + 1);
    }
  }
  onLampiranChange(e) {
    const file = e.target.files?.[0] ?? null;
    this.modalLampiran.set(file);
    this.modalLampiranNama.set(file?.name ?? "");
  }
  submitModal() {
    const karyawanId = this.modalKaryawanId();
    if (!karyawanId) {
      this.modalError.set("Pilih karyawan terlebih dahulu.");
      return;
    }
    if (!this.modalTanggal()) {
      this.modalError.set("Tanggal cuti harus diisi.");
      return;
    }
    if (!this.modalKeperluan().trim()) {
      this.modalError.set("Keperluan harus diisi.");
      return;
    }
    const jenis = this.modalJenis();
    if (jenis === "KHUSUS" && !this.modalKhususJenis()) {
      this.modalError.set("Jenis cuti khusus harus dipilih.");
      return;
    }
    const req = {
      jenisCuti: jenis,
      tanggalMulai: this.modalTanggal(),
      tanggalSelesai: this.modalTanggal(),
      keperluan: jenis === "KHUSUS" ? this.modalKhususJenis() : this.modalKeperluan(),
      mengurangiSisaCuti: jenis !== "KHUSUS"
    };
    if (jenis === "KHUSUS") {
      req.keperluan = `${this.modalKhususJenis()} \u2014 ${this.modalKeperluan()}`.trim();
    }
    this.modalSaving.set(true);
    this.modalError.set("");
    this.cutiSvc.create(karyawanId, req, this.modalLampiran() ?? void 0).subscribe({
      next: () => {
        this.showModal.set(false);
        this.modalSaving.set(false);
        this.showToast("Cuti berhasil ditambahkan.");
        this.load();
      },
      error: (err) => {
        this.modalSaving.set(false);
        this.modalError.set(err?.error?.message ?? "Gagal menyimpan. Coba lagi.");
      }
    });
  }
  // ── Helpers ────────────────────────────────────────────────
  toIso(year, month, day) {
    const d = new Date(year, month, day);
    return d.toISOString().slice(0, 10);
  }
  formatTanggal(t) {
    if (!t)
      return "";
    const d = /* @__PURE__ */ new Date(t + "T00:00:00");
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()}`;
  }
  formatTanggalDisplay(t) {
    if (!t)
      return "";
    const d = /* @__PURE__ */ new Date(t + "T00:00:00");
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
  }
  jenisLabel(j) {
    return j === "TAHUNAN" ? "Cuti Tahunan" : j === "SETENGAH_HARI" ? "Cuti Setengah Hari" : "Cuti Khusus";
  }
  modalJenisLabel() {
    const j = this.modalJenis();
    if (!j)
      return "";
    return j === "TAHUNAN" ? "Cuti Tahunan" : j === "SETENGAH_HARI" ? "Cuti Setengah Hari" : "Cuti Khusus";
  }
  statusBadgeClass(s) {
    return s === "DISETUJUI" ? "badge bg-success" : s === "DITOLAK" ? "badge bg-danger" : "badge bg-warning text-dark";
  }
  statusLabel(s) {
    return s === "DISETUJUI" ? "Disetujui" : s === "DITOLAK" ? "Ditolak" : "Menunggu";
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
    this.\u0275fac = function CutiAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CutiAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CutiAdminComponent, selectors: [["app-cuti-admin"]], decls: 101, vars: 41, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "alert", "alert-danger"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "d-flex", "flex-wrap", "justify-content-between", "gap-2", "mb-3"], [1, "d-flex", 2, "border-radius", "8px", "overflow", "hidden", "border", "1px solid #dee2e6"], ["type", "button", 1, "btn", "px-4", 3, "click"], ["type", "button", 1, "btn", "px-4", 2, "border-left", "1px solid #dee2e6", "border-right", "1px solid #dee2e6", 3, "click"], [1, "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", 3, "click"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", "placeholder", "Mulai Cuti", 1, "form-control", "form-control-sm", 2, "max-width", "155px", 3, "ngModelChange", "ngModel"], ["type", "date", "placeholder", "Selesai Cuti", 1, "form-control", "form-control-sm", 2, "max-width", "155px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "max-width", "180px", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "TAHUNAN"], ["value", "SETENGAH_HARI"], ["value", "KHUSUS"], [3, "ngValue"], [3, "value"], [1, "input-group", "input-group-sm", 2, "max-width", "200px"], ["type", "text", "placeholder", "Cari", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-light", "border", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-sm", 2, "background", "#5c6bc0", "color", "#fff", 3, "click"], [1, "bx", "bx-export", "me-1"], [1, "position-relative"], [1, "bx", "bx-plus-circle", "me-1"], [1, "bx", "bx-caret-down"], [1, "border", "rounded", "shadow-sm", "bg-white", "py-1", 2, "position", "absolute", "right", "0", "top", "calc(100% + 4px)", "min-width", "190px", "z-index", "400"], [1, "text-muted", "small", "mb-2", 2, "font-family", "monospace"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light"], [2, "width", "220px"], [2, "width", "200px"], [1, "text-center", 2, "width", "120px"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "small", "text-muted", "fw-semibold"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [1, "position-fixed", "bottom-0", "end-0", "m-3", 2, "z-index", "1080"], [1, "dropdown-item", "px-3", "py-2", 3, "click"], ["colspan", "4", 1, "text-center", "text-muted", "py-4"], [1, "fw-semibold"], [1, "small", "text-muted"], ["target", "_blank", 1, "small", "text-primary", 3, "href"], [1, "small", "text-danger", "mt-1"], [1, "text-center"], [1, "btn-group", "btn-group-sm"], ["title", "Hapus", 1, "btn", "btn-light", "border", "text-danger", 3, "click"], [1, "bx", "bx-trash"], [1, "bx", "bx-paperclip"], ["title", "Setujui", 1, "btn", "btn-success", 3, "click"], [1, "bx", "bx-check"], ["title", "Tolak", 1, "btn", "btn-danger", 3, "click"], [1, "bx", "bx-x"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "small", "py-2"], [1, "row", "mb-3"], [1, "col-sm-4", "col-form-label"], [1, "text-danger"], [1, "col-sm-8", "position-relative"], [1, "input-group"], ["type", "text", "placeholder", "Tulis kata kunci...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "focus", "ngModel"], ["type", "button", 1, "btn", "btn-light", "border", 3, "click"], [1, "bx", "bx-chevron-down"], [1, "border", "rounded", "bg-white", "shadow-sm", 2, "position", "absolute", "top", "100%", "left", "0", "right", "0", "max-height", "200px", "overflow-y", "auto", "z-index", "500"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModel"], [1, "col-sm-8"], ["rows", "4", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "justify-content-center", "border", "rounded", 2, "width", "80px", "height", "80px", "cursor", "pointer", "border-style", "dashed!important"], [1, "bx", "bx-plus", "fs-4", "text-primary"], [1, "bx", "bx-file-blank", "fs-4", "text-success"], ["type", "file", "accept", ".pdf,image/*", 1, "d-none", 3, "change"], [1, "small", "text-muted", "mt-1"], [1, "rounded", "p-3", "mb-1", 2, "background", "linear-gradient(135deg,#7b1fa2,#ab47bc)", "color", "#fff", "font-size", "0.85rem"], [1, "modal-footer", "border-0", "pt-0"], [1, "btn", "px-4", 2, "background", "#5c6bc0", "color", "#fff", 3, "click", "disabled"], [1, "btn", "btn-light", "border", "px-4", 3, "click"], ["type", "button", 1, "dropdown-item", "px-3", "py-2"], ["type", "button", 1, "dropdown-item", "px-3", "py-2", 3, "click"], ["type", "text", "placeholder", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "focus", "ngModel"], ["type", "button", 1, "btn", "btn-light", "border"], ["type", "text", "placeholder", "Pilih tanggal", "readonly", "", 1, "form-control", "form-control-sm", 3, "click", "value"], [1, "border", "rounded", "bg-white", "shadow", 2, "position", "absolute", "top", "100%", "left", "0", "z-index", "600", "min-width", "300px", "padding", "12px"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "btn", "btn-sm", "btn-light", "border", 3, "click"], [1, "d-grid", 2, "grid-template-columns", "repeat(7,1fr)", "gap", "2px"], [1, "text-center", "small", "fw-bold", "py-1", 3, "color"], ["type", "button", 1, "btn", "btn-sm", 3, "color", "background"], [1, "text-center", "small", "fw-bold", "py-1"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title", "text-danger"], [1, "form-label", "small"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], [1, "toast", "show", "align-items-center", "text-white", "border-0"], [1, "d-flex"], [1, "toast-body"], [1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"]], template: function CutiAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Cuti");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 8);
        \u0275\u0275text(11, "Cuti");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(12, CutiAdminComponent_Conditional_12_Template, 2, 1, "div", 9);
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "button", 14);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_17_listener() {
          return ctx.setTab("PENGAJUAN");
        });
        \u0275\u0275text(18, "Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 15);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_19_listener() {
          return ctx.setTab("DISETUJUI");
        });
        \u0275\u0275text(20, "Disetujui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_21_listener() {
          return ctx.setTab("DITOLAK");
        });
        \u0275\u0275text(22, "Ditolak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 16)(24, "button", 17);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_24_listener() {
          return ctx.setQuickFilter("HARI_INI");
        });
        \u0275\u0275text(25, "Cuti Hari Ini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 17);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_26_listener() {
          return ctx.setQuickFilter("BESOK");
        });
        \u0275\u0275text(27, "Cuti Besok");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_28_listener() {
          return ctx.setQuickFilter("7_HARI");
        });
        \u0275\u0275text(29, "Cuti 7 Hari Kedepan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 18)(31, "input", 19);
        \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.filterFrom.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "input", 20);
        \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.filterTo.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "select", 21);
        \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Template_select_ngModelChange_35_listener($event) {
          return ctx.filterJenis.set($event);
        });
        \u0275\u0275elementStart(36, "option", 22);
        \u0275\u0275text(37, "--Jenis Cuti--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 23);
        \u0275\u0275text(39, "Cuti Tahunan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 24);
        \u0275\u0275text(41, "Cuti Setengah Hari");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "option", 25);
        \u0275\u0275text(43, "Cuti Khusus");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "select", 21);
        \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Template_select_ngModelChange_44_listener($event) {
          return ctx.filterDivisi.set($event ? +$event : null);
        });
        \u0275\u0275elementStart(45, "option", 26);
        \u0275\u0275text(46, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(47, CutiAdminComponent_For_48_Template, 2, 2, "option", 27, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 28)(50, "input", 29);
        \u0275\u0275listener("ngModelChange", function CutiAdminComponent_Template_input_ngModelChange_50_listener($event) {
          return ctx.filterCari.set($event);
        })("keyup.enter", function CutiAdminComponent_Template_input_keyup_enter_50_listener() {
          return ctx.onCari();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 30);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_51_listener() {
          return ctx.onCari();
        });
        \u0275\u0275element(52, "i", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "button", 32);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_53_listener() {
          return ctx.eksporExcel();
        });
        \u0275\u0275element(54, "i", 33);
        \u0275\u0275text(55, "Ekspor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 34)(57, "button", 32);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_57_listener() {
          return ctx.showTambahMenu.set(!ctx.showTambahMenu());
        });
        \u0275\u0275element(58, "i", 35);
        \u0275\u0275text(59, "Tambah Cuti ");
        \u0275\u0275element(60, "i", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(61, CutiAdminComponent_Conditional_61_Template, 7, 0, "div", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(62, CutiAdminComponent_Conditional_62_Template, 2, 0, "div", 38);
        \u0275\u0275elementStart(63, "div", 39)(64, "table", 40)(65, "thead", 41)(66, "tr")(67, "th", 42);
        \u0275\u0275text(68, "Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "th");
        \u0275\u0275text(70, "Detail Pengajuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "th", 43);
        \u0275\u0275text(72, "Status Persetujuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "th", 44);
        \u0275\u0275text(74, "Aksi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "tbody");
        \u0275\u0275conditionalCreate(76, CutiAdminComponent_Conditional_76_Template, 3, 0, "tr")(77, CutiAdminComponent_Conditional_77_Template, 3, 0, "tr")(78, CutiAdminComponent_Conditional_78_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 45)(80, "div", 46);
        \u0275\u0275text(81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "nav")(83, "ul", 47)(84, "li", 48)(85, "button", 49);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_85_listener() {
          return ctx.goPage(1);
        });
        \u0275\u0275text(86, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "li", 48)(88, "button", 49);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_88_listener() {
          return ctx.goPage(ctx.page() - 1);
        });
        \u0275\u0275text(89, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(90, CutiAdminComponent_For_91_Template, 3, 3, "li", 50, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(92, "li", 48)(93, "button", 49);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_93_listener() {
          return ctx.goPage(ctx.page() + 1);
        });
        \u0275\u0275text(94, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "li", 48)(96, "button", 49);
        \u0275\u0275listener("click", function CutiAdminComponent_Template_button_click_96_listener() {
          return ctx.goPage(ctx.totalPages());
        });
        \u0275\u0275text(97, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275conditionalCreate(98, CutiAdminComponent_Conditional_98_Template, 52, 12, "div", 51);
        \u0275\u0275conditionalCreate(99, CutiAdminComponent_Conditional_99_Template, 16, 3, "div", 51);
        \u0275\u0275conditionalCreate(100, CutiAdminComponent_Conditional_100_Template, 6, 5, "div", 52);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.error() ? 12 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("background", ctx.activeTab() === "PENGAJUAN" ? "#5c6bc0" : "#fff")("color", ctx.activeTab() === "PENGAJUAN" ? "#fff" : "#333");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", ctx.activeTab() === "DISETUJUI" ? "#5c6bc0" : "#fff")("color", ctx.activeTab() === "DISETUJUI" ? "#fff" : "#333");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", ctx.activeTab() === "DITOLAK" ? "#5c6bc0" : "#fff")("color", ctx.activeTab() === "DITOLAK" ? "#fff" : "#333");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.quickFilter() === "HARI_INI");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.quickFilter() === "BESOK");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.quickFilter() === "7_HARI");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterFrom());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterTo());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.filterJenis());
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", ctx.filterDivisi());
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterCari());
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.showTambahMenu() ? 61 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "PENGAJUAN" ? 62 : -1);
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.loading() ? 76 : ctx.pagedData().length === 0 ? 77 : 78);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" Menampilkan ", ctx.filteredData().length === 0 ? 0 : (ctx.page() - 1) * ctx.pageSize + 1, " dari ", ctx.filteredData().length, " total data ");
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
        \u0275\u0275conditional(ctx.showModal() ? 98 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 99 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 100 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent], styles: ["\n/*# sourceMappingURL=cuti-admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CutiAdminComponent, [{
    type: Component,
    args: [{ selector: "app-cuti-admin", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Cuti</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Cuti</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger">{{ error() }}</div>\r
  }\r
\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body">\r
\r
      <!-- Tabs + Quick filter -->\r
      <div class="d-flex flex-wrap justify-content-between gap-2 mb-3">\r
        <div class="d-flex" style="border-radius:8px;overflow:hidden;border:1px solid #dee2e6">\r
          <button type="button" class="btn px-4"\r
                  [style.background]="activeTab()==='PENGAJUAN' ? '#5c6bc0' : '#fff'"\r
                  [style.color]="activeTab()==='PENGAJUAN' ? '#fff' : '#333'"\r
                  (click)="setTab('PENGAJUAN')">Pengajuan</button>\r
          <button type="button" class="btn px-4" style="border-left:1px solid #dee2e6;border-right:1px solid #dee2e6"\r
                  [style.background]="activeTab()==='DISETUJUI' ? '#5c6bc0' : '#fff'"\r
                  [style.color]="activeTab()==='DISETUJUI' ? '#fff' : '#333'"\r
                  (click)="setTab('DISETUJUI')">Disetujui</button>\r
          <button type="button" class="btn px-4"\r
                  [style.background]="activeTab()==='DITOLAK' ? '#5c6bc0' : '#fff'"\r
                  [style.color]="activeTab()==='DITOLAK' ? '#fff' : '#333'"\r
                  (click)="setTab('DITOLAK')">Ditolak</button>\r
        </div>\r
\r
        <div class="d-flex gap-1">\r
          <button type="button" class="btn btn-light border btn-sm"\r
                  [class.active]="quickFilter()==='HARI_INI'"\r
                  (click)="setQuickFilter('HARI_INI')">Cuti Hari Ini</button>\r
          <button type="button" class="btn btn-light border btn-sm"\r
                  [class.active]="quickFilter()==='BESOK'"\r
                  (click)="setQuickFilter('BESOK')">Cuti Besok</button>\r
          <button type="button" class="btn btn-light border btn-sm"\r
                  [class.active]="quickFilter()==='7_HARI'"\r
                  (click)="setQuickFilter('7_HARI')">Cuti 7 Hari Kedepan</button>\r
        </div>\r
      </div>\r
\r
      <!-- Filter bar -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <input type="date" class="form-control form-control-sm" style="max-width:155px"\r
               placeholder="Mulai Cuti"\r
               [ngModel]="filterFrom()" (ngModelChange)="filterFrom.set($event)">\r
        <span>-</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:155px"\r
               placeholder="Selesai Cuti"\r
               [ngModel]="filterTo()" (ngModelChange)="filterTo.set($event)">\r
\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
                [ngModel]="filterJenis()" (ngModelChange)="filterJenis.set($event)">\r
          <option value="">--Jenis Cuti--</option>\r
          <option value="TAHUNAN">Cuti Tahunan</option>\r
          <option value="SETENGAH_HARI">Cuti Setengah Hari</option>\r
          <option value="KHUSUS">Cuti Khusus</option>\r
        </select>\r
\r
        <select class="form-select form-select-sm" style="max-width:180px"\r
                [ngModel]="filterDivisi()" (ngModelChange)="filterDivisi.set($event ? +$event : null)">\r
          <option [ngValue]="null">--Divisi--</option>\r
          @for (d of divisiList(); track d.id) {\r
            <option [value]="d.id">{{ d.namaDivisi }}</option>\r
          }\r
        </select>\r
\r
        <div class="input-group input-group-sm" style="max-width:200px">\r
          <input type="text" class="form-control" placeholder="Cari"\r
                 [ngModel]="filterCari()" (ngModelChange)="filterCari.set($event)"\r
                 (keyup.enter)="onCari()">\r
          <button class="btn btn-light border" (click)="onCari()"><i class="bx bx-search"></i></button>\r
        </div>\r
\r
        <button class="btn btn-sm" style="background:#5c6bc0;color:#fff" (click)="eksporExcel()">\r
          <i class="bx bx-export me-1"></i>Ekspor Excel\r
        </button>\r
\r
        <!-- Tambah Cuti dropdown -->\r
        <div class="position-relative">\r
          <button class="btn btn-sm" style="background:#5c6bc0;color:#fff"\r
                  (click)="showTambahMenu.set(!showTambahMenu())">\r
            <i class="bx bx-plus-circle me-1"></i>Tambah Cuti <i class="bx bx-caret-down"></i>\r
          </button>\r
          @if (showTambahMenu()) {\r
            <div class="border rounded shadow-sm bg-white py-1"\r
                 style="position:absolute;right:0;top:calc(100% + 4px);min-width:190px;z-index:400">\r
              <button class="dropdown-item px-3 py-2" (click)="openModal('TAHUNAN')">Cuti Tahunan</button>\r
              <button class="dropdown-item px-3 py-2" (click)="openModal('SETENGAH_HARI')">Cuti Setengah Hari</button>\r
              <button class="dropdown-item px-3 py-2" (click)="openModal('KHUSUS')">Cuti Khusus</button>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- Info text for pengajuan tab -->\r
      @if (activeTab() === 'PENGAJUAN') {\r
        <div class="text-muted small mb-2" style="font-family:monospace">\r
          Daftar karyawan yang melakukan cuti dan membutuhkan aksi jawaban\r
        </div>\r
      }\r
\r
      <!-- Table -->\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle">\r
          <thead class="table-light">\r
            <tr>\r
              <th style="width:220px">Karyawan</th>\r
              <th>Detail Pengajuan</th>\r
              <th style="width:200px">Status Persetujuan</th>\r
              <th class="text-center" style="width:120px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (loading()) {\r
              <tr><td colspan="4" class="text-center text-muted py-4">Memuat data...</td></tr>\r
            } @else if (pagedData().length === 0) {\r
              <tr><td colspan="4" class="text-center text-muted py-4">Belum ada data cuti.</td></tr>\r
            } @else {\r
              @for (c of pagedData(); track c.id) {\r
                <tr>\r
                  <td>\r
                    <div class="fw-semibold">{{ c.namaKaryawan }}</div>\r
                    @if (c.namaDivisi) {\r
                      <div class="small text-muted">{{ c.namaDivisi }}</div>\r
                    }\r
                  </td>\r
                  <td>\r
                    <div class="fw-semibold">{{ jenisLabel(c.jenisCuti) }}</div>\r
                    <div class="small text-muted">\r
                      {{ formatTanggal(c.tanggalMulai) }}\r
                      @if (c.tanggalMulai !== c.tanggalSelesai) {\r
                        \u2014 {{ formatTanggal(c.tanggalSelesai) }}\r
                      }\r
                    </div>\r
                    <div class="small text-muted">\r
                      Keperluan: {{ c.keperluan }}\r
                    </div>\r
                    @if (c.lampiranUrl) {\r
                      <a [href]="c.lampiranUrl" target="_blank" class="small text-primary">\r
                        <i class="bx bx-paperclip"></i> Lampiran\r
                      </a>\r
                    }\r
                  </td>\r
                  <td>\r
                    <span [class]="statusBadgeClass(c.status)">{{ statusLabel(c.status) }}</span>\r
                    @if (c.catatanPenolakan) {\r
                      <div class="small text-danger mt-1">{{ c.catatanPenolakan }}</div>\r
                    }\r
                  </td>\r
                  <td class="text-center">\r
                    <div class="btn-group btn-group-sm">\r
                      @if (c.status === 'MENUNGGU') {\r
                        <button class="btn btn-success" title="Setujui" (click)="approve(c)">\r
                          <i class="bx bx-check"></i>\r
                        </button>\r
                        <button class="btn btn-danger" title="Tolak" (click)="openTolak(c)">\r
                          <i class="bx bx-x"></i>\r
                        </button>\r
                      }\r
                      <button class="btn btn-light border text-danger" title="Hapus" (click)="delete(c)">\r
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
        <div class="small text-muted fw-semibold">\r
          Menampilkan {{ filteredData().length === 0 ? 0 : (page()-1)*pageSize+1 }} dari {{ filteredData().length }} total data\r
        </div>\r
        <nav>\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="page()===1">\r
              <button class="page-link" (click)="goPage(1)">\xAB</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="page()===1">\r
              <button class="page-link" (click)="goPage(page()-1)">\u2039</button>\r
            </li>\r
            @for (p of pageNumbers(); track p) {\r
              <li class="page-item" [class.active]="p===page()">\r
                <button class="page-link" (click)="goPage(p)">{{ p }}</button>\r
              </li>\r
            }\r
            <li class="page-item" [class.disabled]="page()===totalPages()">\r
              <button class="page-link" (click)="goPage(page()+1)">\u203A</button>\r
            </li>\r
            <li class="page-item" [class.disabled]="page()===totalPages()">\r
              <button class="page-link" (click)="goPage(totalPages())">\xBB</button>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Tambah Cuti \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055"\r
         (click)="showKaryawanDrop.set(false); showKhususDrop.set(false)">\r
      <div class="modal-dialog modal-dialog-centered" (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">Tambah {{ modalJenisLabel() }}</h5>\r
            <button class="btn-close" (click)="showModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (modalError()) {\r
              <div class="alert alert-danger small py-2">{{ modalError() }}</div>\r
            }\r
\r
            <!-- Karyawan -->\r
            <div class="row mb-3">\r
              <label class="col-sm-4 col-form-label">Karyawan <span class="text-danger">*</span></label>\r
              <div class="col-sm-8 position-relative">\r
                <div class="input-group">\r
                  <input type="text" class="form-control form-control-sm"\r
                         placeholder="Tulis kata kunci..."\r
                         [ngModel]="modalKaryawanQ()"\r
                         (ngModelChange)="modalKaryawanQ.set($event); showKaryawanDrop.set(true)"\r
                         (focus)="showKaryawanDrop.set(true)">\r
                  <button class="btn btn-light border" type="button"\r
                          (click)="showKaryawanDrop.set(!showKaryawanDrop())">\r
                    <i class="bx bx-chevron-down"></i>\r
                  </button>\r
                </div>\r
                @if (showKaryawanDrop() && filteredKaryawan().length > 0) {\r
                  <div class="border rounded bg-white shadow-sm"\r
                       style="position:absolute;top:100%;left:0;right:0;max-height:200px;overflow-y:auto;z-index:500">\r
                    @for (k of filteredKaryawan(); track k.id) {\r
                      <button type="button" class="dropdown-item px-3 py-2"\r
                              (click)="selectKaryawan(k)">{{ k.namaLengkap }}</button>\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Jenis Cuti Khusus -->\r
            @if (modalJenis() === 'KHUSUS') {\r
              <div class="row mb-3">\r
                <label class="col-sm-4 col-form-label">Jenis Cuti Khusus <span class="text-danger">*</span></label>\r
                <div class="col-sm-8 position-relative">\r
                  <div class="input-group">\r
                    <input type="text" class="form-control form-control-sm"\r
                           placeholder=""\r
                           [ngModel]="modalKhususQ()"\r
                           (ngModelChange)="modalKhususQ.set($event); showKhususDrop.set(true)"\r
                           (focus)="showKhususDrop.set(true)">\r
                    @if (modalKhususJenis()) {\r
                      <button class="btn btn-light border" type="button"\r
                              (click)="modalKhususJenis.set(''); modalKhususQ.set('')">\r
                        <i class="bx bx-x"></i>\r
                      </button>\r
                    }\r
                    <button class="btn btn-light border" type="button"\r
                            (click)="showKhususDrop.set(!showKhususDrop())">\r
                      <i class="bx bx-chevron-down"></i>\r
                    </button>\r
                  </div>\r
                  @if (showKhususDrop()) {\r
                    <div class="border rounded bg-white shadow-sm"\r
                         style="position:absolute;top:100%;left:0;right:0;max-height:200px;overflow-y:auto;z-index:500">\r
                      @for (j of filteredKhususList(); track j) {\r
                        <button type="button" class="dropdown-item px-3 py-2"\r
                                (click)="selectKhusus(j)">{{ j }}</button>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
\r
            <!-- Tanggal Cuti -->\r
            <div class="row mb-3">\r
              <label class="col-sm-4 col-form-label">Tgl. Cuti <span class="text-danger">*</span></label>\r
              <div class="col-sm-8 position-relative">\r
                @if (modalJenis() === 'SETENGAH_HARI') {\r
                  <!-- Calendar picker untuk setengah hari -->\r
                  <input type="text" class="form-control form-control-sm"\r
                         [value]="modalTanggal() ? formatTanggalDisplay(modalTanggal()) : ''"\r
                         placeholder="Pilih tanggal"\r
                         readonly\r
                         (click)="calendarVisible.set(!calendarVisible())">\r
                  @if (calendarVisible()) {\r
                    <div class="border rounded bg-white shadow"\r
                         style="position:absolute;top:100%;left:0;z-index:600;min-width:300px;padding:12px">\r
                      <div class="d-flex align-items-center justify-content-between mb-2">\r
                        <button class="btn btn-sm btn-light border" (click)="prevMonth()">\u2039</button>\r
                        <span class="fw-semibold">{{ calMonthName() }}</span>\r
                        <button class="btn btn-sm btn-light border" (click)="nextMonth()">\u203A</button>\r
                      </div>\r
                      <div class="d-grid" style="grid-template-columns:repeat(7,1fr);gap:2px">\r
                        @for (d of weekDays; track d) {\r
                          <div class="text-center small fw-bold py-1"\r
                               [style.color]="d==='Min' ? '#e53935' : d==='Sab' ? '#1e88e5' : '#333'">\r
                            {{ d }}\r
                          </div>\r
                        }\r
                        @for (cell of calDays(); track cell.full) {\r
                          <button type="button"\r
                                  class="btn btn-sm"\r
                                  [style.color]="cellColor(cell, weekDays)"\r
                                  [style.background]="cell.full===modalTanggal() ? '#5c6bc0' : 'transparent'"\r
                                  [style.color]="cell.full===modalTanggal() ? '#fff' : undefined"\r
                                  (click)="selectDate(cell.full)">\r
                            {{ cell.date }}\r
                          </button>\r
                        }\r
                      </div>\r
                    </div>\r
                  }\r
                } @else {\r
                  <input type="date" class="form-control form-control-sm"\r
                         [ngModel]="modalTanggal()" (ngModelChange)="modalTanggal.set($event)">\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Keperluan / Keterangan -->\r
            <div class="row mb-3">\r
              <label class="col-sm-4 col-form-label">\r
                {{ modalJenis() === 'KHUSUS' ? 'Keterangan' : 'Keperluan' }}\r
                <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-8">\r
                <textarea class="form-control form-control-sm" rows="4"\r
                          [ngModel]="modalKeperluan()"\r
                          (ngModelChange)="modalKeperluan.set($event)"></textarea>\r
              </div>\r
            </div>\r
\r
            <!-- Lampiran -->\r
            <div class="row mb-3">\r
              <label class="col-sm-4 col-form-label">Lampiran</label>\r
              <div class="col-sm-8">\r
                <label class="d-flex align-items-center justify-content-center border rounded"\r
                       style="width:80px;height:80px;cursor:pointer;border-style:dashed!important">\r
                  @if (!modalLampiranNama()) {\r
                    <i class="bx bx-plus fs-4 text-primary"></i>\r
                  } @else {\r
                    <i class="bx bx-file-blank fs-4 text-success"></i>\r
                  }\r
                  <input type="file" class="d-none" accept=".pdf,image/*" (change)="onLampiranChange($event)">\r
                </label>\r
                @if (modalLampiranNama()) {\r
                  <div class="small text-muted mt-1">{{ modalLampiranNama() }}</div>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Info box -->\r
            <div class="rounded p-3 mb-1"\r
                 style="background:linear-gradient(135deg,#7b1fa2,#ab47bc);color:#fff;font-size:0.85rem">\r
              Pengajuan ini akan langsung disetujui dan akan masuk ke tab Disetujui.\r
            </div>\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button class="btn px-4" style="background:#5c6bc0;color:#fff"\r
                    [disabled]="modalSaving()" (click)="submitModal()">\r
              {{ modalSaving() ? 'Menyimpan...' : 'Simpan' }}\r
            </button>\r
            <button class="btn btn-light border px-4" (click)="showModal.set(false)">Tutup</button>\r
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
            <textarea class="form-control" rows="3"\r
                      [ngModel]="tolakCatatan()" (ngModelChange)="tolakCatatan.set($event)"></textarea>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm" (click)="showTolakModal.set(false)">Batal</button>\r
            <button class="btn btn-danger btn-sm" [disabled]="tolakSaving()" (click)="submitTolak()">\r
              {{ tolakSaving() ? 'Menyimpan...' : 'Tolak' }}\r
            </button>\r
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
`, styles: ["/* src/app/features/cuti/cuti-admin/cuti-admin.component.scss */\n/*# sourceMappingURL=cuti-admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CutiAdminComponent, { className: "CutiAdminComponent", filePath: "src/app/features/cuti/cuti-admin/cuti-admin.component.ts", lineNumber: 26 });
})();
export {
  CutiAdminComponent
};
//# sourceMappingURL=chunk-QUEFLNER.js.map
