import {
  JenisPeringatanService,
  SuratPeringatanService
} from "./chunk-IQ7U3WDQ.js";
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
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  catchError,
  computed,
  forkJoin,
  inject,
  map,
  of,
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
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/surat-peringatan/surat-peringatan-list/surat-peringatan-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SuratPeringatanListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error(), " ");
  }
}
function SuratPeringatanListComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", k_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r2.namaLengkap);
  }
}
function SuratPeringatanListComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "Memuat data...");
    \u0275\u0275elementEnd()();
  }
}
function SuratPeringatanListComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "Belum ada data.");
    \u0275\u0275elementEnd()();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \xB7 ");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Cegah Presensi");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.nama);
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275repeaterCreate(1, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_21_For_2_Template, 2, 1, "span", 62, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sp_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(sp_r5.penyetuju);
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const sp_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setujui(sp_r5));
    });
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 65);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_27_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const sp_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bukaTolak(sp_r5));
    });
    \u0275\u0275element(3, "i", 66);
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const sp_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cabut(sp_r5));
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sp_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", sp_r5.dokumenUrl, \u0275\u0275sanitizeUrl);
  }
}
function SuratPeringatanListComponent_Conditional_83_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_6_Template, 2, 0, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 54);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275conditionalCreate(17, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_17_Template, 2, 0, "span", 55)(18, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_18_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_20_Template, 2, 0, "span", 22)(21, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_21_Template, 3, 0, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 54);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 40)(26, "div", 57);
    \u0275\u0275conditionalCreate(27, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_27_Template, 4, 0);
    \u0275\u0275conditionalCreate(28, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_28_Template, 2, 0, "button", 58);
    \u0275\u0275conditionalCreate(29, SuratPeringatanListComponent_Conditional_83_For_1_Conditional_29_Template, 2, 1, "a", 59);
    \u0275\u0275elementStart(30, "button", 60);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_83_For_1_Template_button_click_30_listener() {
      const sp_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapus(sp_r5));
    });
    \u0275\u0275element(31, "i", 61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const sp_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sp_r5.namaKaryawan ?? "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", sp_r5.namaJabatan ?? "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(sp_r5.namaJabatan && sp_r5.namaDivisi ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sp_r5.namaDivisi ?? "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sp_r5.jenisNama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.formatTanggal(sp_r5.tanggalMulai), " - ", ctx_r0.formatTanggal(sp_r5.tanggalSelesai));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.badgeStatus(sp_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sp_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(sp_r5.cegahPresensi ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(sp_r5.penyetuju.length === 0 ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.badgeStatusPersetujuan(sp_r5.statusPersetujuan));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sp_r5.statusPersetujuan, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(sp_r5.statusPersetujuan === "MENUNGGU" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sp_r5.statusPersetujuan === "DISETUJUI" && sp_r5.status === "AKTIF" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sp_r5.dokumenUrl ? 29 : -1);
  }
}
function SuratPeringatanListComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SuratPeringatanListComponent_Conditional_83_For_1_Template, 32, 18, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
function SuratPeringatanListComponent_For_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 44)(1, "button", 45);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_For_96_Template_button_click_1_listener() {
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
function SuratPeringatanListComponent_Conditional_103_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorForm());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedKaryawanLabel());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 100);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_103_Conditional_17_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.karyawanQuery.set($event);
      return \u0275\u0275resetView(ctx_r0.karyawanDropdownOpen.set(true));
    })("click", function SuratPeringatanListComponent_Conditional_103_Conditional_17_Template_input_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.karyawanQuery());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, "Tidak ada hasil.");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \xB7 ");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("text-white-50", ctx_r0.formKaryawanId() === k_r13.id)("text-muted", ctx_r0.formKaryawanId() !== k_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r13.namaJabatan ?? "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r13.namaJabatan && k_r13.namaDivisi ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r13.namaDivisi ?? "", " ");
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Template_div_click_0_listener() {
      const k_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.pickKaryawanForm(k_r13));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Conditional_3_Template, 4, 7, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-primary", ctx_r0.formKaryawanId() === k_r13.id)("text-white", ctx_r0.formKaryawanId() === k_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r13.namaLengkap);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r13.namaJabatan || k_r13.namaDivisi ? 3 : -1);
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_For_1_Template, 4, 6, "div", 102, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.filteredKaryawanForm());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275conditionalCreate(1, SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_1_Template, 2, 0, "div", 101)(2, SuratPeringatanListComponent_Conditional_103_Conditional_19_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filteredKaryawanForm().length === 0 ? 1 : 2);
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedJenisLabel());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 106);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_103_Conditional_28_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.jenisQuery.set($event);
      return \u0275\u0275resetView(ctx_r0.jenisDropdownOpen.set(true));
    })("click", function SuratPeringatanListComponent_Conditional_103_Conditional_28_Template_input_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.jenisQuery());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, "Tidak ada hasil.");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_2_For_1_Template_div_click_0_listener() {
      const j_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.pickJenis(j_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-primary", ctx_r0.form().jenisId === j_r16.id)("text-white", ctx_r0.form().jenisId === j_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", j_r16.nama, " ");
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_2_For_1_Template, 2, 5, "div", 102, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.filteredJenis());
  }
}
function SuratPeringatanListComponent_Conditional_103_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275conditionalCreate(1, SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_1_Template, 2, 0, "div", 101)(2, SuratPeringatanListComponent_Conditional_103_Conditional_30_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filteredJenis().length === 0 ? 1 : 2);
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r19.nama);
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Pilih karyawan...");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1, "Tidak ada hasil.");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \xB7 ");
    \u0275\u0275elementEnd();
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Conditional_3_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r22.namaJabatan ?? "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r22.namaJabatan && k_r22.namaDivisi ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r22.namaDivisi ?? "", " ");
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Template_div_click_0_listener() {
      const k_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const \u0275$index_436_r18 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pickPenyetujuKaryawan(\u0275$index_436_r18, k_r22));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Conditional_3_Template, 4, 3, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r22.namaLengkap);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r22.namaJabatan || k_r22.namaDivisi ? 3 : -1);
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_For_1_Template, 4, 2, "div", 113, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r0.filteredKaryawanPenyetuju());
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 111)(2, "input", 112);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.penyetujuQuery.set($event));
    })("click", function SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_3_Template, 2, 0, "div", 101)(4, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.penyetujuQuery());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filteredKaryawanPenyetuju().length === 0 ? 3 : 4);
  }
}
function SuratPeringatanListComponent_Conditional_103_For_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 107)(2, "div", 108);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_For_69_Template_div_click_2_listener() {
      const \u0275$index_436_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePenyetujuDropdown(\u0275$index_436_r18));
    });
    \u0275\u0275conditionalCreate(3, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_3_Template, 2, 1, "span")(4, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_4_Template, 2, 0, "span", 22);
    \u0275\u0275element(5, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SuratPeringatanListComponent_Conditional_103_For_69_Conditional_6_Template, 5, 2, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 110);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_For_69_Template_button_click_7_listener() {
      const \u0275$index_436_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hapusPenyetuju(\u0275$index_436_r18));
    });
    \u0275\u0275element(8, "i", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const \u0275$index_436_r18 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r19.nama ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.penyetujuOpenIdx() === \u0275$index_436_r18 ? 6 : -1);
  }
}
function SuratPeringatanListComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 70)(2, "div", 71)(3, "div", 72)(4, "h5", 73);
    \u0275\u0275text(5, "Tambah Surat Peringatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 75);
    \u0275\u0275conditionalCreate(8, SuratPeringatanListComponent_Conditional_103_Conditional_8_Template, 2, 1, "div", 76);
    \u0275\u0275elementStart(9, "div", 77)(10, "label", 78);
    \u0275\u0275text(11, " Karyawan ");
    \u0275\u0275elementStart(12, "span", 79);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 80)(15, "div", 81);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.karyawanDropdownOpen.set(!ctx_r0.karyawanDropdownOpen()));
    });
    \u0275\u0275conditionalCreate(16, SuratPeringatanListComponent_Conditional_103_Conditional_16_Template, 2, 1, "span")(17, SuratPeringatanListComponent_Conditional_103_Conditional_17_Template, 1, 1, "input", 82);
    \u0275\u0275element(18, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, SuratPeringatanListComponent_Conditional_103_Conditional_19_Template, 3, 1, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 77)(21, "label", 78);
    \u0275\u0275text(22, " Jenis ");
    \u0275\u0275elementStart(23, "span", 79);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 80)(26, "div", 81);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Template_div_click_26_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.jenisDropdownOpen.set(!ctx_r0.jenisDropdownOpen()));
    });
    \u0275\u0275conditionalCreate(27, SuratPeringatanListComponent_Conditional_103_Conditional_27_Template, 2, 1, "span")(28, SuratPeringatanListComponent_Conditional_103_Conditional_28_Template, 1, 1, "input", 85);
    \u0275\u0275element(29, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, SuratPeringatanListComponent_Conditional_103_Conditional_30_Template, 3, 1, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 77)(32, "label", 78);
    \u0275\u0275text(33, " Dokumen ");
    \u0275\u0275elementStart(34, "span", 79);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 87)(37, "input", 88);
    \u0275\u0275listener("change", function SuratPeringatanListComponent_Conditional_103_Template_input_change_37_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDokumenChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 77)(39, "label", 78);
    \u0275\u0275text(40, "Pelanggaran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 87)(42, "textarea", 89);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_103_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("pelanggaran", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 77)(44, "label", 78);
    \u0275\u0275text(45, " Masa Berlaku ");
    \u0275\u0275elementStart(46, "span", 79);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 87)(49, "div", 90)(50, "input", 91);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_103_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("tanggalMulai", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 22);
    \u0275\u0275text(52, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 91);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_103_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("tanggalSelesai", $event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 77)(55, "label", 78);
    \u0275\u0275text(56, "Sanksi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 87)(58, "div", 92)(59, "input", 93);
    \u0275\u0275listener("change", function SuratPeringatanListComponent_Conditional_103_Template_input_change_59_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("cegahPresensi", $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "label", 94);
    \u0275\u0275text(61, " Cegah Presensi ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 77)(63, "label", 78);
    \u0275\u0275text(64, " Penyetuju ");
    \u0275\u0275elementStart(65, "span", 79);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 87);
    \u0275\u0275repeaterCreate(68, SuratPeringatanListComponent_Conditional_103_For_69_Template, 9, 2, "div", 95, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(70, "button", 96);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tambahPenyetuju());
    });
    \u0275\u0275text(71, " Tambah ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 97)(73, "button", 98);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 99);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_103_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(76, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.errorForm() ? 8 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.selectedKaryawanLabel() ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.karyawanDropdownOpen() ? 19 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.selectedJenisLabel() ? 27 : 28);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.jenisDropdownOpen() ? 30 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r0.form().pelanggaran);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r0.form().tanggalMulai);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.form().tanggalSelesai);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r0.form().cegahPresensi);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.form().penyetuju);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving() ? "Menyimpan..." : "Simpan", " ");
  }
}
function SuratPeringatanListComponent_Conditional_104_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 122);
    \u0275\u0275text(2, "Belum ada data.");
    \u0275\u0275elementEnd()();
  }
}
function SuratPeringatanListComponent_Conditional_104_Conditional_24_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 119)(6, "button", 123);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_104_Conditional_24_For_1_Template_button_click_6_listener() {
      const j_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hapusJenis(j_r25.id));
    });
    \u0275\u0275element(7, "i", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const j_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r25.kode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r25.nama);
  }
}
function SuratPeringatanListComponent_Conditional_104_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SuratPeringatanListComponent_Conditional_104_Conditional_24_For_1_Template, 8, 2, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.jenisList());
  }
}
function SuratPeringatanListComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 114)(2, "div", 71)(3, "div", 72)(4, "h5", 73);
    \u0275\u0275text(5, "Jenis Peringatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_104_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showJenisModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 75)(8, "div", 115)(9, "input", 116);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_104_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.jenisForm.set(__spreadProps(__spreadValues({}, ctx_r0.jenisForm()), { kode: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 117);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_104_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.jenisForm.set(__spreadProps(__spreadValues({}, ctx_r0.jenisForm()), { nama: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_104_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanJenis());
    });
    \u0275\u0275text(12, "Tambah");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "table", 118)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Kode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 119);
    \u0275\u0275text(21, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275conditionalCreate(23, SuratPeringatanListComponent_Conditional_104_Conditional_23_Template, 3, 0, "tr")(24, SuratPeringatanListComponent_Conditional_104_Conditional_24_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 120)(26, "button", 121);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_104_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showJenisModal.set(false));
    });
    \u0275\u0275text(27, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r0.jenisForm().kode);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.jenisForm().nama);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r0.jenisList().length === 0 ? 23 : 24);
  }
}
function SuratPeringatanListComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 114)(2, "div", 71)(3, "div", 72)(4, "h5", 124);
    \u0275\u0275text(5, "Tolak Surat Peringatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_105_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 75)(8, "label", 125);
    \u0275\u0275text(9, "Catatan Penolakan (opsional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 89);
    \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Conditional_105_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tolakCatatan.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 120)(12, "button", 126);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_105_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showTolakModal.set(false));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 127);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_105_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r26);
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
function SuratPeringatanListComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 114)(2, "div", 71)(3, "div", 72)(4, "h5", 124);
    \u0275\u0275element(5, "i", 128);
    \u0275\u0275text(6, "Hapus Surat Peringatan?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 129);
    \u0275\u0275text(8, " Data akan dihapus permanen. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 120)(10, "button", 126);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_106_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.konfirmasiHapusId.set(null);
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapusKaryawanId.set(null));
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 127);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_106_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hapus());
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
function SuratPeringatanListComponent_Conditional_107_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275element(1, "i", 136);
    \u0275\u0275elementStart(2, "div", 137);
    \u0275\u0275text(3, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd()();
  }
}
function SuratPeringatanListComponent_Conditional_107_Conditional_9_For_10_Conditional_26_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    const $index_r30 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r30 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.badgeStatusPersetujuan(p_r29.status ?? "MENUNGGU"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusPersetujuanLabel(p_r29.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r29.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r29.catatan ?? "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r29.diprosesAt ? ctx_r0.formatTanggalJam(p_r29.diprosesAt) : "");
  }
}
function SuratPeringatanListComponent_Conditional_107_Conditional_9_For_10_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "table", 154)(2, "thead", 155)(3, "tr")(4, "th", 156);
    \u0275\u0275text(5, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Penyetuju");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Diupdate Pada");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, SuratPeringatanListComponent_Conditional_107_Conditional_9_For_10_Conditional_26_For_16_Template, 12, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(15);
    \u0275\u0275repeater(r_r31.penyetuju);
  }
}
function SuratPeringatanListComponent_Conditional_107_Conditional_9_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 140)(2, "div", 141)(3, "div", 142);
    \u0275\u0275element(4, "i", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 144);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 145);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 146);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 140)(13, "div", 147)(14, "span", 148);
    \u0275\u0275text(15, " Surat Peringatan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 149);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 150)(19, "strong");
    \u0275\u0275text(20, "Status Persetujuan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 151);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 150)(24, "strong");
    \u0275\u0275text(25, "Penyetuju:");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, SuratPeringatanListComponent_Conditional_107_Conditional_9_For_10_Conditional_26_Template, 17, 0, "div", 152);
    \u0275\u0275elementStart(27, "div", 153)(28, "div")(29, "strong");
    \u0275\u0275text(30, "Tgl. Mulai Berlaku:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 151);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "strong");
    \u0275\u0275text(35, "Tanggal Berakhir:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 151);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "strong");
    \u0275\u0275text(40, "Karyawan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a", 151);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "strong");
    \u0275\u0275text(45, "Jenis Peringatan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 151);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r31 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(r_r31.actor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r31.waktu);
    \u0275\u0275advance();
    \u0275\u0275classMap(r_r31.badgeClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r31.actionLabel);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ID: ", r_r31.spId, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r31.statusPersetujuanLabel);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(r_r31.penyetuju.length > 0 ? 26 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatTanggal(r_r31.tanggalMulai));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatTanggal(r_r31.tanggalSelesai));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r31.namaKaryawan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r31.jenisKode);
  }
}
function SuratPeringatanListComponent_Conditional_107_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "table", 138)(2, "thead", 40)(3, "tr")(4, "th", 139);
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Aktivitas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, SuratPeringatanListComponent_Conditional_107_Conditional_9_For_10_Template, 48, 12, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.riwayatPage());
  }
}
function SuratPeringatanListComponent_Conditional_107_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "button", 157);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_107_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.riwayatPageIdx.set(ctx_r0.riwayatPageIdx() - 1));
    });
    \u0275\u0275element(2, "i", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 157);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_107_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.riwayatPageIdx.set(ctx_r0.riwayatPageIdx() + 1));
    });
    \u0275\u0275element(4, "i", 159);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.riwayatPageIdx() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.riwayatPageIdx() === ctx_r0.riwayatTotalPages());
  }
}
function SuratPeringatanListComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 130)(2, "div", 131)(3, "div", 72)(4, "h6", 73);
    \u0275\u0275text(5, "Riwayat Perubahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_107_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showRiwayatModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 132);
    \u0275\u0275conditionalCreate(8, SuratPeringatanListComponent_Conditional_107_Conditional_8_Template, 4, 0, "div", 133)(9, SuratPeringatanListComponent_Conditional_107_Conditional_9_Template, 11, 0, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 134)(11, "button", 126);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_107_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showRiwayatModal.set(false));
    });
    \u0275\u0275text(12, "Tutup");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SuratPeringatanListComponent_Conditional_107_Conditional_13_Template, 5, 2, "div", 135);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.riwayatItems().length === 0 ? 8 : 9);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.riwayatTotalPages() > 1 ? 13 : -1);
  }
}
function SuratPeringatanListComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 160)(2, "div", 161)(3, "div", 162);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 163);
    \u0275\u0275listener("click", function SuratPeringatanListComponent_Conditional_108_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r33);
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
var SuratPeringatanListComponent = class _SuratPeringatanListComponent {
  constructor() {
    this.karyawanSvc = inject(KaryawanService);
    this.spSvc = inject(SuratPeringatanService);
    this.jenisSvc = inject(JenisPeringatanService);
    this.authSvc = inject(AuthService);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisList = signal([], ...ngDevMode ? [{ debugName: "jenisList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
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
    this.filterStatus = signal("", ...ngDevMode ? [{ debugName: "filterStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterStatusPersetujuan = signal("", ...ngDevMode ? [{ debugName: "filterStatusPersetujuan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCari = signal("", ...ngDevMode ? [{ debugName: "filterCari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterKaryawanId = signal("", ...ngDevMode ? [{ debugName: "filterKaryawanId" }] : (
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
    this.filtered = computed(() => {
      const q = this.filterCari().trim().toLowerCase();
      const s = this.filterStatus();
      const sp = this.filterStatusPersetujuan();
      const a = this.filterMulai();
      const b = this.filterSelesai();
      const k = this.filterKaryawanId();
      return this.list().filter((x) => {
        if (s && x.status !== s)
          return false;
        if (sp && x.statusPersetujuan !== sp)
          return false;
        if (a && x.tanggalSelesai < a)
          return false;
        if (b && x.tanggalMulai > b)
          return false;
        if (k !== "" && x.karyawanId !== k)
          return false;
        if (q) {
          const blob = `${x.namaKaryawan ?? ""} ${x.jenisNama} ${x.jenisKode} ${x.pelanggaran ?? ""}`.toLowerCase();
          if (!blob.includes(q))
            return false;
        }
        return true;
      });
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.total = computed(() => this.filtered().length, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = computed(() => {
      const start = (this.page() - 1) * this.pageSize();
      return this.filtered().slice(start, start + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageNumbers = computed(() => {
      const n = this.totalPages();
      return Array.from({ length: n }, (_, i) => i + 1);
    }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
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
    this.showFormModal = signal(false, ...ngDevMode ? [{ debugName: "showFormModal" }] : (
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
    this.jenisDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "jenisDropdownOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisQuery = signal("", ...ngDevMode ? [{ debugName: "jenisQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "karyawanDropdownOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanQuery = signal("", ...ngDevMode ? [{ debugName: "karyawanQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formKaryawanId = signal(null, ...ngDevMode ? [{ debugName: "formKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penyetujuOpenIdx = signal(-1, ...ngDevMode ? [{ debugName: "penyetujuOpenIdx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penyetujuQuery = signal("", ...ngDevMode ? [{ debugName: "penyetujuQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = signal(this.emptyForm(), ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showJenisModal = signal(false, ...ngDevMode ? [{ debugName: "showJenisModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisForm = signal({ kode: "", nama: "" }, ...ngDevMode ? [{ debugName: "jenisForm" }] : (
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
    this.tolakKaryawanId = signal(null, ...ngDevMode ? [{ debugName: "tolakKaryawanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tolakCatatan = signal("", ...ngDevMode ? [{ debugName: "tolakCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.konfirmasiHapusId = signal(null, ...ngDevMode ? [{ debugName: "konfirmasiHapusId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.konfirmasiHapusKaryawanId = signal(null, ...ngDevMode ? [{ debugName: "konfirmasiHapusKaryawanId" }] : (
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
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPageIdx = signal(1, ...ngDevMode ? [{ debugName: "riwayatPageIdx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPageSize = 5;
    this.deletedHistory = signal([], ...ngDevMode ? [{ debugName: "deletedHistory" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatItems = computed(() => {
      const items = [];
      const me = this.authSvc.currentUser()?.namaLengkap ?? "Pengguna";
      const buildBase = (sp) => ({
        spId: sp.id,
        jenisKode: sp.jenisKode,
        jenisNama: sp.jenisNama,
        tanggalMulai: sp.tanggalMulai,
        tanggalSelesai: sp.tanggalSelesai,
        namaKaryawan: sp.namaKaryawan ?? "",
        statusPersetujuanLabel: this.statusPersetujuanLabel(sp.statusPersetujuan),
        penyetuju: sp.penyetuju ?? []
      });
      for (const sp of this.list()) {
        if (sp.createdAt) {
          items.push(__spreadProps(__spreadValues({}, buildBase(sp)), {
            ts: new Date(sp.createdAt).getTime(),
            waktu: this.formatTanggalJam(sp.createdAt),
            actor: me,
            actionLabel: "Dibuat",
            badgeClass: "text-success border-success bg-white"
          }));
        }
        if (sp.updatedAt && sp.updatedAt !== sp.createdAt) {
          items.push(__spreadProps(__spreadValues({}, buildBase(sp)), {
            ts: new Date(sp.updatedAt).getTime(),
            waktu: this.formatTanggalJam(sp.updatedAt),
            actor: me,
            actionLabel: "Diubah",
            badgeClass: "text-info border-info bg-white"
          }));
        }
        if (sp.status === "DICABUT") {
          const t = sp.updatedAt ?? sp.createdAt ?? "";
          items.push(__spreadProps(__spreadValues({}, buildBase(sp)), {
            ts: t ? new Date(t).getTime() : 0,
            waktu: t ? this.formatTanggalJam(t) : "",
            actor: me,
            actionLabel: "Dicabut",
            badgeClass: "text-secondary border-secondary bg-white"
          }));
        }
      }
      for (const d of this.deletedHistory()) {
        items.push(__spreadProps(__spreadValues({}, buildBase(d.sp)), {
          ts: new Date(d.at).getTime(),
          waktu: this.formatTanggalJam(d.at),
          actor: d.actor,
          actionLabel: "Dihapus",
          badgeClass: "text-danger border-danger bg-white"
        }));
      }
      return items.sort((a, b) => b.ts - a.ts);
    }, ...ngDevMode ? [{ debugName: "riwayatItems" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatTotalPages = computed(() => Math.max(1, Math.ceil(this.riwayatItems().length / this.riwayatPageSize)), ...ngDevMode ? [{ debugName: "riwayatTotalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPage = computed(() => {
      const start = (this.riwayatPageIdx() - 1) * this.riwayatPageSize;
      return this.riwayatItems().slice(start, start + this.riwayatPageSize);
    }, ...ngDevMode ? [{ debugName: "riwayatPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredJenis = computed(() => {
      const q = this.jenisQuery().trim().toLowerCase();
      if (!q)
        return this.jenisList();
      return this.jenisList().filter((j) => `${j.kode} ${j.nama}`.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredJenis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedJenisLabel = computed(() => {
      const id = this.form().jenisId;
      if (id == null)
        return "";
      return this.jenisList().find((j) => j.id === id)?.nama ?? "";
    }, ...ngDevMode ? [{ debugName: "selectedJenisLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKaryawanLabel = computed(() => {
      const id = this.formKaryawanId();
      if (id == null)
        return "";
      const k = this.karyawanList().find((x) => x.id === id);
      return k ? k.namaLengkap : "";
    }, ...ngDevMode ? [{ debugName: "selectedKaryawanLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredKaryawanForm = computed(() => {
      const q = this.karyawanQuery().trim().toLowerCase();
      if (!q)
        return this.karyawanList();
      return this.karyawanList().filter((k) => (k.namaLengkap ?? "").toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredKaryawanForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedPenyetujuIds = computed(() => new Set(this.form().penyetuju.map((p) => p.karyawanId).filter((x) => x != null)), ...ngDevMode ? [{ debugName: "selectedPenyetujuIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredKaryawanPenyetuju = computed(() => {
      const q = this.penyetujuQuery().trim().toLowerCase();
      const taken = this.selectedPenyetujuIds();
      return this.karyawanList().filter((k) => {
        if (taken.has(k.id))
          return false;
        if (!q)
          return true;
        return (k.namaLengkap ?? "").toLowerCase().includes(q);
      });
    }, ...ngDevMode ? [{ debugName: "filteredKaryawanPenyetuju" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  bukaRiwayat() {
    this.muatSemua();
    this.riwayatPageIdx.set(1);
    this.showRiwayatModal.set(true);
  }
  statusPersetujuanLabel(s) {
    if (s === "DISETUJUI")
      return "Disetujui";
    if (s === "DITOLAK")
      return "Ditolak";
    return "Menunggu persetujuan";
  }
  formatTanggalJam(t) {
    if (!t)
      return "-";
    const d = new Date(t);
    const tgl = d.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    const jam = d.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    return `${tgl} @ ${jam}`;
  }
  ngOnInit() {
    this.muatJenis();
    this.muatSemua();
  }
  muatJenis() {
    this.jenisSvc.getAll().subscribe({
      next: (list) => this.jenisList.set(list),
      error: (e) => this.showToast(e?.error?.message ?? "Gagal memuat jenis.", "danger")
    });
  }
  /** Muat semua karyawan, lalu agregat semua surat peringatan-nya. */
  muatSemua() {
    this.loading.set(true);
    this.error.set("");
    this.karyawanSvc.findAll().subscribe({
      next: (karyawan) => {
        this.karyawanList.set(karyawan);
        if (karyawan.length === 0) {
          this.list.set([]);
          this.loading.set(false);
          return;
        }
        const calls = karyawan.map((k) => this.spSvc.getAll(k.id).pipe(map((items) => items.map((x) => __spreadProps(__spreadValues({}, x), {
          karyawanId: x.karyawanId ?? k.id,
          namaKaryawan: x.namaKaryawan ?? k.namaLengkap,
          namaDivisi: x.namaDivisi ?? k.namaDivisi,
          namaJabatan: x.namaJabatan ?? k.namaJabatan
        }))), catchError(() => of([]))));
        forkJoin(calls).subscribe({
          next: (res) => {
            const all = res.flat().sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
            this.list.set(all);
            this.loading.set(false);
          },
          error: (e) => {
            this.error.set(e?.message ?? "Gagal memuat data.");
            this.loading.set(false);
          }
        });
      },
      error: (e) => {
        this.error.set(e?.message ?? "Gagal memuat karyawan.");
        this.loading.set(false);
      }
    });
  }
  reload() {
    this.muatSemua();
  }
  // ── Form helpers ───────────────────────────────────────
  emptyForm() {
    return {
      jenisId: null,
      tanggalMulai: "",
      tanggalSelesai: "",
      pelanggaran: "",
      cegahPresensi: false,
      penyetuju: [],
      dokumen: null
    };
  }
  updateForm(key, value) {
    this.form.set(__spreadProps(__spreadValues({}, this.form()), { [key]: value }));
  }
  pickJenis(j) {
    this.updateForm("jenisId", j.id);
    this.jenisDropdownOpen.set(false);
    this.jenisQuery.set("");
  }
  pickKaryawanForm(k) {
    this.formKaryawanId.set(k.id);
    this.karyawanDropdownOpen.set(false);
    this.karyawanQuery.set("");
  }
  // ── Penyetuju picker ────────────────────────────────────
  tambahPenyetuju() {
    const arr = [...this.form().penyetuju];
    arr.push({ karyawanId: null, nama: "" });
    this.updateForm("penyetuju", arr);
    this.penyetujuOpenIdx.set(arr.length - 1);
    this.penyetujuQuery.set("");
  }
  hapusPenyetuju(i) {
    const arr = this.form().penyetuju.filter((_, idx) => idx !== i);
    this.updateForm("penyetuju", arr);
    if (this.penyetujuOpenIdx() === i)
      this.penyetujuOpenIdx.set(-1);
  }
  togglePenyetujuDropdown(i) {
    this.penyetujuOpenIdx.set(this.penyetujuOpenIdx() === i ? -1 : i);
    this.penyetujuQuery.set("");
  }
  pickPenyetujuKaryawan(i, k) {
    const arr = this.form().penyetuju.map((p, idx) => idx === i ? __spreadProps(__spreadValues({}, p), { karyawanId: k.id, nama: k.namaLengkap }) : p);
    this.updateForm("penyetuju", arr);
    this.penyetujuOpenIdx.set(-1);
    this.penyetujuQuery.set("");
  }
  // ── Dokumen ──────────────────────────────────────────────
  onDokumenChange(e) {
    const f = e.target.files?.[0] ?? null;
    this.updateForm("dokumen", f);
  }
  // ── Tambah ───────────────────────────────────────────────
  openTambah() {
    this.form.set(this.emptyForm());
    this.formKaryawanId.set(null);
    this.errorForm.set("");
    this.showFormModal.set(true);
  }
  closeForm() {
    this.showFormModal.set(false);
    this.jenisDropdownOpen.set(false);
    this.karyawanDropdownOpen.set(false);
  }
  simpan() {
    const f = this.form();
    const kId = this.formKaryawanId();
    if (!kId) {
      this.errorForm.set("Karyawan wajib dipilih.");
      return;
    }
    if (!f.jenisId) {
      this.errorForm.set("Jenis peringatan wajib dipilih.");
      return;
    }
    if (!f.tanggalMulai || !f.tanggalSelesai) {
      this.errorForm.set("Masa berlaku wajib diisi.");
      return;
    }
    if (!f.dokumen) {
      this.errorForm.set("Dokumen wajib diunggah.");
      return;
    }
    if (f.penyetuju.filter((p) => p.nama.trim()).length === 0) {
      this.errorForm.set("Minimal 1 penyetuju.");
      return;
    }
    const _a = f, { dokumen } = _a, rest = __objRest(_a, ["dokumen"]);
    const payload = __spreadProps(__spreadValues({}, rest), {
      penyetuju: f.penyetuju.filter((p) => p.nama.trim()).map((p) => ({ karyawanId: p.karyawanId ?? null, nama: p.nama.trim() }))
    });
    this.saving.set(true);
    this.spSvc.create(kId, payload, dokumen).subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast("Surat peringatan ditambahkan.", "success");
        this.muatSemua();
      },
      error: (e) => {
        this.saving.set(false);
        this.errorForm.set(e?.error?.message ?? "Gagal menyimpan.");
      }
    });
  }
  // ── Jenis Peringatan ─────────────────────────────────────
  openJenis() {
    this.jenisForm.set({ kode: "", nama: "" });
    this.showJenisModal.set(true);
  }
  simpanJenis() {
    const v = this.jenisForm();
    if (!v.kode.trim() || !v.nama.trim())
      return;
    this.jenisSvc.create({ kode: v.kode.trim(), nama: v.nama.trim() }).subscribe({
      next: () => {
        this.jenisForm.set({ kode: "", nama: "" });
        this.muatJenis();
        this.showToast("Jenis peringatan ditambahkan.", "success");
      },
      error: (e) => this.showToast(e?.error?.message ?? "Gagal menambah jenis.", "danger")
    });
  }
  hapusJenis(id) {
    this.jenisSvc.delete(id).subscribe({
      next: () => {
        this.muatJenis();
        this.showToast("Jenis peringatan dihapus.", "success");
      },
      error: (e) => this.showToast(e?.error?.message ?? "Gagal menghapus jenis.", "danger")
    });
  }
  // ── Aksi tabel ───────────────────────────────────────────
  konfirmasiHapus(sp) {
    this.konfirmasiHapusId.set(sp.id);
    this.konfirmasiHapusKaryawanId.set(sp.karyawanId);
  }
  hapus() {
    const id = this.konfirmasiHapusId();
    const kId = this.konfirmasiHapusKaryawanId();
    if (id == null || kId == null)
      return;
    const target = this.list().find((x) => x.id === id && x.karyawanId === kId);
    this.spSvc.delete(kId, id).subscribe({
      next: () => {
        if (target) {
          this.deletedHistory.set([
            ...this.deletedHistory(),
            {
              sp: target,
              actor: this.authSvc.currentUser()?.namaLengkap ?? "Pengguna",
              at: (/* @__PURE__ */ new Date()).toISOString()
            }
          ]);
        }
        this.konfirmasiHapusId.set(null);
        this.konfirmasiHapusKaryawanId.set(null);
        this.muatSemua();
        this.showToast("Surat peringatan dihapus.", "success");
      },
      error: (e) => this.showToast(e?.error?.message ?? "Gagal menghapus.", "danger")
    });
  }
  setujui(sp) {
    this.spSvc.updatePersetujuan(sp.karyawanId, sp.id, "DISETUJUI").subscribe({
      next: () => {
        this.muatSemua();
        this.showToast("Surat peringatan disetujui.", "success");
      },
      error: (e) => this.showToast(e?.error?.message ?? "Gagal menyetujui.", "danger")
    });
  }
  bukaTolak(sp) {
    this.tolakId.set(sp.id);
    this.tolakKaryawanId.set(sp.karyawanId);
    this.tolakCatatan.set("");
    this.showTolakModal.set(true);
  }
  konfirmasiTolak() {
    const id = this.tolakId();
    const kId = this.tolakKaryawanId();
    if (id == null || kId == null)
      return;
    this.spSvc.updatePersetujuan(kId, id, "DITOLAK", this.tolakCatatan()).subscribe({
      next: () => {
        this.showTolakModal.set(false);
        this.tolakId.set(null);
        this.tolakKaryawanId.set(null);
        this.muatSemua();
        this.showToast("Surat peringatan ditolak.", "success");
      },
      error: (e) => this.showToast(e?.error?.message ?? "Gagal menolak.", "danger")
    });
  }
  cabut(sp) {
    this.spSvc.cabut(sp.karyawanId, sp.id).subscribe({
      next: () => {
        this.muatSemua();
        this.showToast("Surat peringatan dicabut.", "success");
      },
      error: (e) => this.showToast(e?.error?.message ?? "Gagal mencabut.", "danger")
    });
  }
  // ── Helpers tampilan ────────────────────────────────────
  badgeStatusPersetujuan(s) {
    return s === "DISETUJUI" ? "bg-success" : s === "DITOLAK" ? "bg-danger" : "bg-warning text-dark";
  }
  badgeStatus(s) {
    return s === "AKTIF" ? "bg-success" : s === "DICABUT" ? "bg-secondary" : "bg-danger";
  }
  formatTanggal(t) {
    if (!t)
      return "-";
    const d = new Date(t);
    return d.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  showToast(msg, type) {
    this.toastType.set(type);
    this.toastMsg.set(msg);
    setTimeout(() => this.toastMsg.set(""), 2500);
  }
  static {
    this.\u0275fac = function SuratPeringatanListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuratPeringatanListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuratPeringatanListComponent, selectors: [["app-surat-peringatan-list"]], decls: 109, vars: 25, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "fw-bold", "mb-3"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "mb-3"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bx", "bx-plus-medical", "me-1"], [1, "bx", "bx-cog", "me-1"], ["title", "Riwayat Perubahan", 1, "btn", "btn-light", "border", "btn-sm", 3, "click"], [1, "bx", "bx-history", "me-1"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-3"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "form-select", "form-select-sm", 2, "max-width", "200px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "ngValue"], [1, "form-select", "form-select-sm", 2, "max-width", "150px", 3, "ngModelChange", "ngModel"], ["value", "AKTIF"], ["value", "KEDALUWARSA"], ["value", "DICABUT"], ["value", "MENUNGGU"], ["value", "DISETUJUI"], ["value", "DITOLAK"], [1, "input-group", "input-group-sm", 2, "max-width", "240px"], ["type", "text", "placeholder", "Cari nama / jenis...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-dark"], [1, "bx", "bx-search"], [1, "table-responsive"], [1, "table", "align-middle"], [1, "border-bottom"], [1, "text-center"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "small", "text-muted", "fw-semibold"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-item", 3, "active"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1056"], [1, "position-fixed", "bottom-0", "end-0", "m-3", 2, "z-index", "1080"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], ["colspan", "8", 1, "text-center", "text-muted", "py-4"], [1, "fw-semibold"], [1, "text-muted", 2, "font-size", ".72rem"], [1, "badge"], [1, "badge", "bg-danger-subtle", "text-danger"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "d-inline-flex", "gap-1"], ["title", "Cabut", 1, "btn", "btn-sm", "btn-light", "border", "text-secondary"], ["title", "Lihat Dokumen", "target", "_blank", 1, "btn", "btn-sm", "btn-light", "border", 3, "href"], ["title", "Hapus", 1, "btn", "btn-light", "border", "btn-sm", "text-danger", 3, "click"], [1, "bx", "bx-trash"], [1, "badge", "bg-light", "text-dark", "border"], ["title", "Setujui", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "bx", "bx-check"], ["title", "Tolak", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bx", "bx-x"], ["title", "Cabut", 1, "btn", "btn-sm", "btn-light", "border", "text-secondary", 3, "click"], [1, "bx", "bx-undo"], [1, "bx", "bx-file"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "small", "py-2"], [1, "row", "mb-3"], [1, "col-sm-3", "col-form-label", "small"], [1, "text-danger"], [1, "col-sm-9", "position-relative"], [1, "form-control", "form-control-sm", "d-flex", "justify-content-between", "align-items-center", 2, "cursor", "pointer", 3, "click"], ["placeholder", "Tulis nama karyawan...", 1, "border-0", "flex-grow-1", "bg-transparent", 2, "outline", "none", 3, "ngModel"], [1, "bx", "bx-chevron-down", "text-muted"], [1, "border", "rounded", "shadow-sm", "bg-white", "position-absolute", "w-100", "mt-1", 2, "z-index", "30", "max-height", "220px", "overflow-y", "auto"], ["placeholder", "Tulis kata kunci...", 1, "border-0", "flex-grow-1", "bg-transparent", 2, "outline", "none", 3, "ngModel"], [1, "border", "rounded", "shadow-sm", "bg-white", "position-absolute", "w-100", "mt-1", 2, "z-index", "20", "max-height", "200px", "overflow-y", "auto"], [1, "col-sm-9"], ["type", "file", "accept", ".pdf,image/*", 1, "form-control", "form-control-sm", 3, "change"], ["rows", "3", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-check"], ["type", "checkbox", "id", "cegahPresensiGlobal", 1, "form-check-input", 3, "change", "checked"], ["for", "cegahPresensiGlobal", 1, "form-check-label", "small"], [1, "d-flex", "align-items-start", "gap-2", "mb-2", "position-relative"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-footer", "justify-content-center"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click"], ["placeholder", "Tulis nama karyawan...", 1, "border-0", "flex-grow-1", "bg-transparent", 2, "outline", "none", 3, "ngModelChange", "click", "ngModel"], [1, "px-3", "py-2", "small", "text-muted"], [1, "px-3", "py-2", "small", "jenis-option", 2, "cursor", "pointer", 3, "bg-primary", "text-white"], [1, "px-3", "py-2", "small", "jenis-option", 2, "cursor", "pointer", 3, "click"], [2, "font-size", ".72rem", 3, "text-white-50", "text-muted"], [2, "font-size", ".72rem"], ["placeholder", "Tulis kata kunci...", 1, "border-0", "flex-grow-1", "bg-transparent", 2, "outline", "none", 3, "ngModelChange", "click", "ngModel"], [1, "flex-grow-1", "position-relative"], [1, "form-control", "form-control-sm", "d-flex", "justify-content-between", "align-items-center", 2, "cursor", "pointer", "min-height", "31px", 3, "click"], [1, "border", "rounded", "shadow-sm", "bg-white", "position-absolute", "w-100", "mt-1", 2, "z-index", "25", "max-height", "220px", "overflow-y", "auto"], ["type", "button", 1, "btn", "btn-sm", "btn-light", "border", "text-danger", 3, "click"], [1, "p-2", "border-bottom"], ["type", "text", "placeholder", "Cari karyawan...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "click", "ngModel"], [1, "px-3", "py-2", "small", "jenis-option", 2, "cursor", "pointer"], [1, "modal-dialog", "modal-dialog-centered"], [1, "d-flex", "gap-2", "mb-3"], ["type", "text", "placeholder", "Kode (mis. SP1)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nama", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "table", "table-sm"], [1, "text-end"], [1, "modal-footer"], [1, "btn", "btn-light", "border", "btn-sm", 3, "click"], ["colspan", "3", 1, "text-center", "text-muted"], [1, "btn", "btn-sm", "btn-light", "border", "text-danger", 3, "click"], [1, "modal-title", "text-danger"], [1, "form-label", "small"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "small", "text-muted"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "text-center", "text-muted", "py-5"], [1, "modal-footer", "justify-content-between"], [1, "btn-group"], [1, "bx", "bx-time-five", 2, "font-size", "2rem"], [1, "mt-2", "small"], [1, "table", "mb-0", "align-top", "riwayat-table"], [2, "width", "32%"], [1, "py-3"], [1, "d-flex", "gap-2"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "40px", "height", "40px", "background", "#e8f0fe", "color", "#3b7ddd"], [1, "bx", "bx-user", 2, "font-size", "1.25rem"], [1, "fw-semibold", "small"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "badge", "rounded-pill", "mt-1", "border"], [1, "mb-2"], [1, "badge", "text-white", "px-2", "py-1", 2, "background", "#e83e8c"], [1, "badge", "bg-light", "text-dark", "border", "ms-1"], [1, "small", "mb-1"], [1, "ms-1", "text-decoration-underline"], [1, "table-responsive", "mb-2"], [1, "small"], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "font-size", ".78rem"], [1, "table-light", "text-center"], [2, "width", "40px"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "bx", "bx-chevron-left"], [1, "bx", "bx-chevron-right"], [1, "toast", "show", "align-items-center", "text-white", "border-0"], [1, "d-flex"], [1, "toast-body"], [1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"]], template: function SuratPeringatanListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 8);
        \u0275\u0275text(11, "Surat Peringatan");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(12, SuratPeringatanListComponent_Conditional_12_Template, 3, 1, "div", 9);
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "h5", 12);
        \u0275\u0275text(16, "Surat Peringatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "button", 15);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_19_listener() {
          return ctx.openTambah();
        });
        \u0275\u0275element(20, "i", 16);
        \u0275\u0275text(21, " Tambah Surat Peringatan ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 15);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_22_listener() {
          return ctx.openJenis();
        });
        \u0275\u0275element(23, "i", 17);
        \u0275\u0275text(24, " Jenis Peringatan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 18);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_25_listener() {
          return ctx.bukaRiwayat();
        });
        \u0275\u0275element(26, "i", 19);
        \u0275\u0275text(27, " Riwayat Perubahan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 20)(29, "input", 21);
        \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Template_input_ngModelChange_29_listener($event) {
          ctx.filterMulai.set($event);
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 22);
        \u0275\u0275text(31, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 21);
        \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Template_input_ngModelChange_32_listener($event) {
          ctx.filterSelesai.set($event);
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "select", 23);
        \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Template_select_ngModelChange_33_listener($event) {
          ctx.filterKaryawanId.set($event === "" ? "" : +$event);
          return ctx.page.set(1);
        });
        \u0275\u0275elementStart(34, "option", 24);
        \u0275\u0275text(35, "--Semua Karyawan--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(36, SuratPeringatanListComponent_For_37_Template, 2, 2, "option", 25, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "select", 26);
        \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Template_select_ngModelChange_38_listener($event) {
          ctx.filterStatus.set($event);
          return ctx.page.set(1);
        });
        \u0275\u0275elementStart(39, "option", 24);
        \u0275\u0275text(40, "--Status--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 27);
        \u0275\u0275text(42, "Aktif");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "option", 28);
        \u0275\u0275text(44, "Kedaluwarsa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "option", 29);
        \u0275\u0275text(46, "Dicabut");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "select", 23);
        \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Template_select_ngModelChange_47_listener($event) {
          ctx.filterStatusPersetujuan.set($event);
          return ctx.page.set(1);
        });
        \u0275\u0275elementStart(48, "option", 24);
        \u0275\u0275text(49, "--Status Persetujuan--");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "option", 30);
        \u0275\u0275text(51, "Menunggu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "option", 31);
        \u0275\u0275text(53, "Disetujui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "option", 32);
        \u0275\u0275text(55, "Ditolak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 33)(57, "input", 34);
        \u0275\u0275listener("ngModelChange", function SuratPeringatanListComponent_Template_input_ngModelChange_57_listener($event) {
          ctx.filterCari.set($event);
          return ctx.page.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 35);
        \u0275\u0275element(59, "i", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 37)(61, "table", 38)(62, "thead")(63, "tr", 39)(64, "th");
        \u0275\u0275text(65, "Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th");
        \u0275\u0275text(67, "Jenis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "th");
        \u0275\u0275text(69, "Masa Berlaku");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "th");
        \u0275\u0275text(71, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "th");
        \u0275\u0275text(73, "Sanksi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "th");
        \u0275\u0275text(75, "Alur Persetujuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "th");
        \u0275\u0275text(77, "Status Persetujuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "th", 40);
        \u0275\u0275text(79, "Aksi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "tbody");
        \u0275\u0275conditionalCreate(81, SuratPeringatanListComponent_Conditional_81_Template, 3, 0, "tr")(82, SuratPeringatanListComponent_Conditional_82_Template, 3, 0, "tr")(83, SuratPeringatanListComponent_Conditional_83_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 41)(85, "div", 42);
        \u0275\u0275text(86);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "nav")(88, "ul", 43)(89, "li", 44)(90, "button", 45);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_90_listener() {
          return ctx.page.set(1);
        });
        \u0275\u0275text(91, "\xAB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "li", 44)(93, "button", 45);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_93_listener() {
          return ctx.page.set(ctx.page() - 1);
        });
        \u0275\u0275text(94, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(95, SuratPeringatanListComponent_For_96_Template, 3, 3, "li", 46, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(97, "li", 44)(98, "button", 45);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_98_listener() {
          return ctx.page.set(ctx.page() + 1);
        });
        \u0275\u0275text(99, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "li", 44)(101, "button", 45);
        \u0275\u0275listener("click", function SuratPeringatanListComponent_Template_button_click_101_listener() {
          return ctx.page.set(ctx.totalPages());
        });
        \u0275\u0275text(102, "\xBB");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275conditionalCreate(103, SuratPeringatanListComponent_Conditional_103_Template, 77, 11, "div", 47);
        \u0275\u0275conditionalCreate(104, SuratPeringatanListComponent_Conditional_104_Template, 28, 3, "div", 47);
        \u0275\u0275conditionalCreate(105, SuratPeringatanListComponent_Conditional_105_Template, 16, 1, "div", 47);
        \u0275\u0275conditionalCreate(106, SuratPeringatanListComponent_Conditional_106_Template, 14, 0, "div", 47);
        \u0275\u0275conditionalCreate(107, SuratPeringatanListComponent_Conditional_107_Template, 14, 2, "div", 48);
        \u0275\u0275conditionalCreate(108, SuratPeringatanListComponent_Conditional_108_Template, 6, 5, "div", 49);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.error() ? 12 : -1);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngModel", ctx.filterMulai());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filterSelesai());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.filterKaryawanId());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.karyawanList());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.filterStatus());
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", ctx.filterStatusPersetujuan());
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.filterCari());
        \u0275\u0275advance(24);
        \u0275\u0275conditional(ctx.loading() ? 81 : ctx.rows().length === 0 ? 82 : 83);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" Menampilkan ", ctx.infoStart(), "-", ctx.infoEnd(), " dari ", ctx.total(), " total data ");
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
        \u0275\u0275conditional(ctx.showFormModal() ? 103 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showJenisModal() ? 104 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showTolakModal() ? 105 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.konfirmasiHapusId() !== null ? 106 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() ? 107 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 108 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent], styles: ["\n.jenis-option[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.riwayat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #fafafa;\n  font-weight: 600;\n  border-bottom: 1px solid #dee2e6;\n}\n.riwayat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    + tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n}\n.riwayat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.riwayat-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b7ddd;\n  cursor: default;\n}\n/*# sourceMappingURL=surat-peringatan-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuratPeringatanListComponent, [{
    type: Component,
    args: [{ selector: "app-surat-peringatan-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item">\r
            <a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a>\r
          </li>\r
          <li class="breadcrumb-item active" aria-current="page">Surat Peringatan</li>\r
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
  <!-- Card utama -->\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body">\r
\r
      <h5 class="fw-bold mb-3">Surat Peringatan</h5>\r
\r
      <!-- Top action row -->\r
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">\r
        <div class="d-flex flex-wrap gap-2">\r
          <button class="btn btn-primary btn-sm" (click)="openTambah()">\r
            <i class="bx bx-plus-medical me-1"></i> Tambah Surat Peringatan\r
          </button>\r
          <button class="btn btn-primary btn-sm" (click)="openJenis()">\r
            <i class="bx bx-cog me-1"></i> Jenis Peringatan\r
          </button>\r
        </div>\r
        <button class="btn btn-light border btn-sm" title="Riwayat Perubahan"\r
                (click)="bukaRiwayat()">\r
          <i class="bx bx-history me-1"></i> Riwayat Perubahan\r
        </button>\r
      </div>\r
\r
      <!-- Filter row -->\r
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">\r
        <input type="date" class="form-control form-control-sm" style="max-width:160px"\r
               [ngModel]="filterMulai()" (ngModelChange)="filterMulai.set($event); page.set(1)">\r
        <span class="text-muted">-</span>\r
        <input type="date" class="form-control form-control-sm" style="max-width:160px"\r
               [ngModel]="filterSelesai()" (ngModelChange)="filterSelesai.set($event); page.set(1)">\r
\r
        <select class="form-select form-select-sm" style="max-width:200px"\r
                [ngModel]="filterKaryawanId()"\r
                (ngModelChange)="filterKaryawanId.set($event === '' ? '' : +$event); page.set(1)">\r
          <option value="">--Semua Karyawan--</option>\r
          @for (k of karyawanList(); track k.id) {\r
            <option [ngValue]="k.id">{{ k.namaLengkap }}</option>\r
          }\r
        </select>\r
\r
        <select class="form-select form-select-sm" style="max-width:150px"\r
                [ngModel]="filterStatus()" (ngModelChange)="filterStatus.set($event); page.set(1)">\r
          <option value="">--Status--</option>\r
          <option value="AKTIF">Aktif</option>\r
          <option value="KEDALUWARSA">Kedaluwarsa</option>\r
          <option value="DICABUT">Dicabut</option>\r
        </select>\r
\r
        <select class="form-select form-select-sm" style="max-width:200px"\r
                [ngModel]="filterStatusPersetujuan()"\r
                (ngModelChange)="filterStatusPersetujuan.set($event); page.set(1)">\r
          <option value="">--Status Persetujuan--</option>\r
          <option value="MENUNGGU">Menunggu</option>\r
          <option value="DISETUJUI">Disetujui</option>\r
          <option value="DITOLAK">Ditolak</option>\r
        </select>\r
\r
        <div class="input-group input-group-sm" style="max-width:240px">\r
          <input type="text" class="form-control" placeholder="Cari nama / jenis..."\r
                 [ngModel]="filterCari()" (ngModelChange)="filterCari.set($event); page.set(1)">\r
          <button class="btn btn-dark"><i class="bx bx-search"></i></button>\r
        </div>\r
      </div>\r
\r
      <!-- Table -->\r
      <div class="table-responsive">\r
        <table class="table align-middle">\r
          <thead>\r
            <tr class="border-bottom">\r
              <th>Karyawan</th>\r
              <th>Jenis</th>\r
              <th>Masa Berlaku</th>\r
              <th>Status</th>\r
              <th>Sanksi</th>\r
              <th>Alur Persetujuan</th>\r
              <th>Status Persetujuan</th>\r
              <th class="text-center">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (loading()) {\r
              <tr><td colspan="8" class="text-center text-muted py-4">Memuat data...</td></tr>\r
            } @else if (rows().length === 0) {\r
              <tr><td colspan="8" class="text-center text-muted py-4">Belum ada data.</td></tr>\r
            } @else {\r
              @for (sp of rows(); track sp.id) {\r
                <tr>\r
                  <td>\r
                    <div class="fw-semibold">{{ sp.namaKaryawan ?? '-' }}</div>\r
                    <div class="text-muted" style="font-size:.72rem">\r
                      {{ sp.namaJabatan ?? '' }}\r
                      @if (sp.namaJabatan && sp.namaDivisi) { <span> \xB7 </span> }\r
                      {{ sp.namaDivisi ?? '' }}\r
                    </div>\r
                  </td>\r
                  <td><span class="fw-semibold">{{ sp.jenisNama }}</span></td>\r
                  <td>{{ formatTanggal(sp.tanggalMulai) }} - {{ formatTanggal(sp.tanggalSelesai) }}</td>\r
                  <td><span class="badge" [class]="badgeStatus(sp.status)">{{ sp.status }}</span></td>\r
                  <td>\r
                    @if (sp.cegahPresensi) {\r
                      <span class="badge bg-danger-subtle text-danger">Cegah Presensi</span>\r
                    } @else {\r
                      <span class="text-muted">-</span>\r
                    }\r
                  </td>\r
                  <td>\r
                    @if (sp.penyetuju.length === 0) {\r
                      <span class="text-muted">-</span>\r
                    } @else {\r
                      <div class="d-flex flex-wrap gap-1">\r
                        @for (p of sp.penyetuju; track $index) {\r
                          <span class="badge bg-light text-dark border">{{ p.nama }}</span>\r
                        }\r
                      </div>\r
                    }\r
                  </td>\r
                  <td>\r
                    <span class="badge" [class]="badgeStatusPersetujuan(sp.statusPersetujuan)">\r
                      {{ sp.statusPersetujuan }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center">\r
                    <div class="d-inline-flex gap-1">\r
                      @if (sp.statusPersetujuan === 'MENUNGGU') {\r
                        <button class="btn btn-sm btn-success" title="Setujui"\r
                                (click)="setujui(sp)">\r
                          <i class="bx bx-check"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-danger" title="Tolak"\r
                                (click)="bukaTolak(sp)">\r
                          <i class="bx bx-x"></i>\r
                        </button>\r
                      }\r
                      @if (sp.statusPersetujuan === 'DISETUJUI' && sp.status === 'AKTIF') {\r
                        <button class="btn btn-sm btn-light border text-secondary" title="Cabut"\r
                                (click)="cabut(sp)">\r
                          <i class="bx bx-undo"></i>\r
                        </button>\r
                      }\r
                      @if (sp.dokumenUrl) {\r
                        <a class="btn btn-sm btn-light border" title="Lihat Dokumen"\r
                           [href]="sp.dokumenUrl" target="_blank">\r
                          <i class="bx bx-file"></i>\r
                        </a>\r
                      }\r
                      <button class="btn btn-light border btn-sm text-danger"\r
                              title="Hapus"\r
                              (click)="konfirmasiHapus(sp)">\r
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
          Menampilkan {{ infoStart() }}-{{ infoEnd() }} dari {{ total() }} total data\r
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
  <!-- \u2500\u2500 Modal Tambah Surat Peringatan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Tambah Surat Peringatan</h5>\r
            <button class="btn-close" (click)="closeForm()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (errorForm()) {\r
              <div class="alert alert-danger small py-2">{{ errorForm() }}</div>\r
            }\r
\r
            <!-- Karyawan (searchable picker) -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">\r
                Karyawan <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9 position-relative">\r
                <div class="form-control form-control-sm d-flex justify-content-between align-items-center"\r
                     style="cursor:pointer"\r
                     (click)="karyawanDropdownOpen.set(!karyawanDropdownOpen())">\r
                  @if (selectedKaryawanLabel()) {\r
                    <span>{{ selectedKaryawanLabel() }}</span>\r
                  } @else {\r
                    <input class="border-0 flex-grow-1 bg-transparent" style="outline:none"\r
                           placeholder="Tulis nama karyawan..."\r
                           [ngModel]="karyawanQuery()"\r
                           (ngModelChange)="karyawanQuery.set($event); karyawanDropdownOpen.set(true)"\r
                           (click)="$event.stopPropagation()">\r
                  }\r
                  <i class="bx bx-chevron-down text-muted"></i>\r
                </div>\r
                @if (karyawanDropdownOpen()) {\r
                  <div class="border rounded shadow-sm bg-white position-absolute w-100 mt-1"\r
                       style="z-index:30;max-height:220px;overflow-y:auto">\r
                    @if (filteredKaryawanForm().length === 0) {\r
                      <div class="px-3 py-2 small text-muted">Tidak ada hasil.</div>\r
                    } @else {\r
                      @for (k of filteredKaryawanForm(); track k.id) {\r
                        <div class="px-3 py-2 small jenis-option"\r
                             [class.bg-primary]="formKaryawanId() === k.id"\r
                             [class.text-white]="formKaryawanId() === k.id"\r
                             style="cursor:pointer"\r
                             (click)="pickKaryawanForm(k)">\r
                          <div class="fw-semibold">{{ k.namaLengkap }}</div>\r
                          @if (k.namaJabatan || k.namaDivisi) {\r
                            <div [class.text-white-50]="formKaryawanId() === k.id"\r
                                 [class.text-muted]="formKaryawanId() !== k.id"\r
                                 style="font-size:.72rem">\r
                              {{ k.namaJabatan ?? '' }}\r
                              @if (k.namaJabatan && k.namaDivisi) { <span> \xB7 </span> }\r
                              {{ k.namaDivisi ?? '' }}\r
                            </div>\r
                          }\r
                        </div>\r
                      }\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Jenis -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">\r
                Jenis <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9 position-relative">\r
                <div class="form-control form-control-sm d-flex justify-content-between align-items-center"\r
                     style="cursor:pointer"\r
                     (click)="jenisDropdownOpen.set(!jenisDropdownOpen())">\r
                  @if (selectedJenisLabel()) {\r
                    <span>{{ selectedJenisLabel() }}</span>\r
                  } @else {\r
                    <input class="border-0 flex-grow-1 bg-transparent" style="outline:none"\r
                           placeholder="Tulis kata kunci..."\r
                           [ngModel]="jenisQuery()"\r
                           (ngModelChange)="jenisQuery.set($event); jenisDropdownOpen.set(true)"\r
                           (click)="$event.stopPropagation()">\r
                  }\r
                  <i class="bx bx-chevron-down text-muted"></i>\r
                </div>\r
                @if (jenisDropdownOpen()) {\r
                  <div class="border rounded shadow-sm bg-white position-absolute w-100 mt-1"\r
                       style="z-index:20;max-height:200px;overflow-y:auto">\r
                    @if (filteredJenis().length === 0) {\r
                      <div class="px-3 py-2 small text-muted">Tidak ada hasil.</div>\r
                    } @else {\r
                      @for (j of filteredJenis(); track j.id) {\r
                        <div class="px-3 py-2 small jenis-option"\r
                             [class.bg-primary]="form().jenisId === j.id"\r
                             [class.text-white]="form().jenisId === j.id"\r
                             style="cursor:pointer"\r
                             (click)="pickJenis(j)">\r
                          {{ j.nama }}\r
                        </div>\r
                      }\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Dokumen -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">\r
                Dokumen <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9">\r
                <input type="file" class="form-control form-control-sm"\r
                       accept=".pdf,image/*" (change)="onDokumenChange($event)">\r
              </div>\r
            </div>\r
\r
            <!-- Pelanggaran -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">Pelanggaran</label>\r
              <div class="col-sm-9">\r
                <textarea class="form-control form-control-sm" rows="3"\r
                          [ngModel]="form().pelanggaran"\r
                          (ngModelChange)="updateForm('pelanggaran', $event)"></textarea>\r
              </div>\r
            </div>\r
\r
            <!-- Masa Berlaku -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">\r
                Masa Berlaku <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9">\r
                <div class="d-flex align-items-center gap-2">\r
                  <input type="date" class="form-control form-control-sm"\r
                         [ngModel]="form().tanggalMulai"\r
                         (ngModelChange)="updateForm('tanggalMulai', $event)">\r
                  <span class="text-muted">-</span>\r
                  <input type="date" class="form-control form-control-sm"\r
                         [ngModel]="form().tanggalSelesai"\r
                         (ngModelChange)="updateForm('tanggalSelesai', $event)">\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Sanksi -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">Sanksi</label>\r
              <div class="col-sm-9">\r
                <div class="form-check">\r
                  <input type="checkbox" class="form-check-input" id="cegahPresensiGlobal"\r
                         [checked]="form().cegahPresensi"\r
                         (change)="updateForm('cegahPresensi', $any($event.target).checked)">\r
                  <label class="form-check-label small" for="cegahPresensiGlobal">\r
                    Cegah Presensi\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Penyetuju -->\r
            <div class="row mb-3">\r
              <label class="col-sm-3 col-form-label small">\r
                Penyetuju <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-sm-9">\r
                @for (p of form().penyetuju; track $index; let rowIdx = $index) {\r
                  <div class="d-flex align-items-start gap-2 mb-2 position-relative">\r
                    <div class="flex-grow-1 position-relative">\r
                      <div class="form-control form-control-sm d-flex justify-content-between align-items-center"\r
                           style="cursor:pointer; min-height: 31px"\r
                           (click)="togglePenyetujuDropdown(rowIdx)">\r
                        @if (p.nama) {\r
                          <span>{{ p.nama }}</span>\r
                        } @else {\r
                          <span class="text-muted">Pilih karyawan...</span>\r
                        }\r
                        <i class="bx bx-chevron-down text-muted"></i>\r
                      </div>\r
                      @if (penyetujuOpenIdx() === rowIdx) {\r
                        <div class="border rounded shadow-sm bg-white position-absolute w-100 mt-1"\r
                             style="z-index:25;max-height:220px;overflow-y:auto">\r
                          <div class="p-2 border-bottom">\r
                            <input type="text" class="form-control form-control-sm"\r
                                   placeholder="Cari karyawan..."\r
                                   [ngModel]="penyetujuQuery()"\r
                                   (ngModelChange)="penyetujuQuery.set($event)"\r
                                   (click)="$event.stopPropagation()">\r
                          </div>\r
                          @if (filteredKaryawanPenyetuju().length === 0) {\r
                            <div class="px-3 py-2 small text-muted">Tidak ada hasil.</div>\r
                          } @else {\r
                            @for (k of filteredKaryawanPenyetuju(); track k.id) {\r
                              <div class="px-3 py-2 small jenis-option"\r
                                   style="cursor:pointer"\r
                                   (click)="pickPenyetujuKaryawan(rowIdx, k)">\r
                                <div class="fw-semibold">{{ k.namaLengkap }}</div>\r
                                @if (k.namaJabatan || k.namaDivisi) {\r
                                  <div class="text-muted" style="font-size:.72rem">\r
                                    {{ k.namaJabatan ?? '' }}\r
                                    @if (k.namaJabatan && k.namaDivisi) { <span> \xB7 </span> }\r
                                    {{ k.namaDivisi ?? '' }}\r
                                  </div>\r
                                }\r
                              </div>\r
                            }\r
                          }\r
                        </div>\r
                      }\r
                    </div>\r
                    <button class="btn btn-sm btn-light border text-danger"\r
                            (click)="hapusPenyetuju(rowIdx)" type="button">\r
                      <i class="bx bx-x"></i>\r
                    </button>\r
                  </div>\r
                }\r
                <button class="btn btn-primary btn-sm" (click)="tambahPenyetuju()" type="button">\r
                  Tambah\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer justify-content-center">\r
            <button class="btn btn-primary btn-sm px-4"\r
                    [disabled]="saving()" (click)="simpan()">\r
              {{ saving() ? 'Menyimpan...' : 'Simpan' }}\r
            </button>\r
            <button class="btn btn-light border btn-sm px-4" (click)="closeForm()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Jenis Peringatan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showJenisModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">Jenis Peringatan</h5>\r
            <button class="btn-close" (click)="showJenisModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            <div class="d-flex gap-2 mb-3">\r
              <input type="text" class="form-control form-control-sm" placeholder="Kode (mis. SP1)"\r
                     [ngModel]="jenisForm().kode"\r
                     (ngModelChange)="jenisForm.set({ ...jenisForm(), kode: $event })">\r
              <input type="text" class="form-control form-control-sm" placeholder="Nama"\r
                     [ngModel]="jenisForm().nama"\r
                     (ngModelChange)="jenisForm.set({ ...jenisForm(), nama: $event })">\r
              <button class="btn btn-primary btn-sm" (click)="simpanJenis()">Tambah</button>\r
            </div>\r
            <table class="table table-sm">\r
              <thead>\r
                <tr>\r
                  <th>Kode</th>\r
                  <th>Nama</th>\r
                  <th class="text-end">Aksi</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @if (jenisList().length === 0) {\r
                  <tr><td colspan="3" class="text-center text-muted">Belum ada data.</td></tr>\r
                } @else {\r
                  @for (j of jenisList(); track j.id) {\r
                    <tr>\r
                      <td>{{ j.kode }}</td>\r
                      <td>{{ j.nama }}</td>\r
                      <td class="text-end">\r
                        <button class="btn btn-sm btn-light border text-danger"\r
                                (click)="hapusJenis(j.id)">\r
                          <i class="bx bx-trash"></i>\r
                        </button>\r
                      </td>\r
                    </tr>\r
                  }\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-light border btn-sm" (click)="showJenisModal.set(false)">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Tolak \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showTolakModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title text-danger">Tolak Surat Peringatan</h5>\r
            <button class="btn-close" (click)="showTolakModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            <label class="form-label small">Catatan Penolakan (opsional)</label>\r
            <textarea class="form-control form-control-sm" rows="3"\r
                      [ngModel]="tolakCatatan()"\r
                      (ngModelChange)="tolakCatatan.set($event)"></textarea>\r
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
  <!-- \u2500\u2500 Modal Hapus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (konfirmasiHapusId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title text-danger"><i class="bx bx-trash me-2"></i>Hapus Surat Peringatan?</h5>\r
          </div>\r
          <div class="modal-body small text-muted">\r
            Data akan dihapus permanen.\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm"\r
                    (click)="konfirmasiHapusId.set(null); konfirmasiHapusKaryawanId.set(null)">Batal</button>\r
            <button class="btn btn-danger btn-sm" (click)="hapus()">Ya, Hapus</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Riwayat Perubahan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showRiwayatModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1056">\r
      <div class="modal-dialog modal-xl modal-dialog-scrollable">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h6 class="modal-title fw-bold">Riwayat Perubahan</h6>\r
            <button class="btn-close" (click)="showRiwayatModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body p-0">\r
            @if (riwayatItems().length === 0) {\r
              <div class="text-center text-muted py-5">\r
                <i class="bx bx-time-five" style="font-size:2rem"></i>\r
                <div class="mt-2 small">Belum ada riwayat perubahan.</div>\r
              </div>\r
            } @else {\r
              <div class="table-responsive">\r
                <table class="table mb-0 align-top riwayat-table">\r
                  <thead class="text-center">\r
                    <tr>\r
                      <th style="width:32%">User</th>\r
                      <th>Aktivitas</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (r of riwayatPage(); track $index) {\r
                      <tr>\r
                        <td class="py-3">\r
                          <div class="d-flex gap-2">\r
                            <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                                 style="width:40px;height:40px;background:#e8f0fe;color:#3b7ddd">\r
                              <i class="bx bx-user" style="font-size:1.25rem"></i>\r
                            </div>\r
                            <div>\r
                              <div class="fw-semibold small">{{ r.actor }}</div>\r
                              <div class="text-muted" style="font-size:.75rem">{{ r.waktu }}</div>\r
                              <span class="badge rounded-pill mt-1 border"\r
                                    [class]="r.badgeClass">{{ r.actionLabel }}</span>\r
                            </div>\r
                          </div>\r
                        </td>\r
                        <td class="py-3">\r
                          <div class="mb-2">\r
                            <span class="badge text-white px-2 py-1" style="background:#e83e8c">\r
                              Surat Peringatan\r
                            </span>\r
                            <span class="badge bg-light text-dark border ms-1">\r
                              ID: {{ r.spId }}\r
                            </span>\r
                          </div>\r
                          <div class="small mb-1">\r
                            <strong>Status Persetujuan:</strong>\r
                            <a class="ms-1 text-decoration-underline">{{ r.statusPersetujuanLabel }}</a>\r
                          </div>\r
                          <div class="small mb-1"><strong>Penyetuju:</strong></div>\r
                          @if (r.penyetuju.length > 0) {\r
                            <div class="table-responsive mb-2">\r
                              <table class="table table-sm table-bordered mb-0" style="font-size:.78rem">\r
                                <thead class="table-light text-center">\r
                                  <tr>\r
                                    <th style="width:40px">No.</th>\r
                                    <th>Status</th>\r
                                    <th>Penyetuju</th>\r
                                    <th>Catatan</th>\r
                                    <th>Diupdate Pada</th>\r
                                  </tr>\r
                                </thead>\r
                                <tbody>\r
                                  @for (p of r.penyetuju; track $index) {\r
                                    <tr>\r
                                      <td class="text-center">{{ $index + 1 }}</td>\r
                                      <td>\r
                                        <span class="badge"\r
                                              [class]="badgeStatusPersetujuan(p.status ?? 'MENUNGGU')">\r
                                          {{ statusPersetujuanLabel(p.status) }}\r
                                        </span>\r
                                      </td>\r
                                      <td>{{ p.nama }}</td>\r
                                      <td>{{ p.catatan ?? '' }}</td>\r
                                      <td>{{ p.diprosesAt ? formatTanggalJam(p.diprosesAt) : '' }}</td>\r
                                    </tr>\r
                                  }\r
                                </tbody>\r
                              </table>\r
                            </div>\r
                          }\r
                          <div class="small">\r
                            <div><strong>Tgl. Mulai Berlaku:</strong>\r
                              <a class="ms-1 text-decoration-underline">{{ formatTanggal(r.tanggalMulai) }}</a>\r
                            </div>\r
                            <div><strong>Tanggal Berakhir:</strong>\r
                              <a class="ms-1 text-decoration-underline">{{ formatTanggal(r.tanggalSelesai) }}</a>\r
                            </div>\r
                            <div><strong>Karyawan:</strong>\r
                              <a class="ms-1 text-decoration-underline">{{ r.namaKaryawan }}</a>\r
                            </div>\r
                            <div><strong>Jenis Peringatan:</strong>\r
                              <a class="ms-1 text-decoration-underline">{{ r.jenisKode }}</a>\r
                            </div>\r
                          </div>\r
                        </td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer justify-content-between">\r
            <button class="btn btn-outline-secondary btn-sm"\r
                    (click)="showRiwayatModal.set(false)">Tutup</button>\r
            @if (riwayatTotalPages() > 1) {\r
              <div class="btn-group">\r
                <button class="btn btn-primary btn-sm"\r
                        [disabled]="riwayatPageIdx() === 1"\r
                        (click)="riwayatPageIdx.set(riwayatPageIdx() - 1)">\r
                  <i class="bx bx-chevron-left"></i>\r
                </button>\r
                <button class="btn btn-primary btn-sm"\r
                        [disabled]="riwayatPageIdx() === riwayatTotalPages()"\r
                        (click)="riwayatPageIdx.set(riwayatPageIdx() + 1)">\r
                  <i class="bx bx-chevron-right"></i>\r
                </button>\r
              </div>\r
            }\r
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
`, styles: ["/* src/app/features/surat-peringatan/surat-peringatan-list/surat-peringatan-list.component.scss */\n.jenis-option:hover {\n  background: #f5f7fb;\n}\n.riwayat-table thead th {\n  background: #fafafa;\n  font-weight: 600;\n  border-bottom: 1px solid #dee2e6;\n}\n.riwayat-table tbody tr + tr td {\n  border-top: 1px solid #e9ecef;\n}\n.riwayat-table tbody td {\n  vertical-align: top;\n}\n.riwayat-table a {\n  color: #3b7ddd;\n  cursor: default;\n}\n/*# sourceMappingURL=surat-peringatan-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuratPeringatanListComponent, { className: "SuratPeringatanListComponent", filePath: "src/app/features/surat-peringatan/surat-peringatan-list/surat-peringatan-list.component.ts", lineNumber: 30 });
})();
export {
  SuratPeringatanListComponent
};
//# sourceMappingURL=chunk-W3P6FXHT.js.map
