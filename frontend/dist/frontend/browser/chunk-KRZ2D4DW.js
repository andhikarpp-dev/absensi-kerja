import {
  JabatanService
} from "./chunk-D5C53HHG.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  NgTemplateOutlet,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// src/app/features/jabatan/jabatan-list/jabatan-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/jabatan", a0, "edit"];
var _c2 = (a0) => ({ node: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.namaLokasi;
var _forTrack2 = ($index, $item) => $item.jabatan.id;
function JabatanListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(""));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function JabatanListComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "span", 30);
    \u0275\u0275elementEnd();
  }
}
function JabatanListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, JabatanListComponent_Conditional_29_For_2_Template, 2, 0, "div", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function JabatanListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3, "Belum ada data jabatan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 33);
    \u0275\u0275text(5, "Tambah Sekarang");
    \u0275\u0275elementEnd()();
  }
}
function JabatanListComponent_Conditional_31_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function JabatanListComponent_Conditional_31_For_16_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r4.namaLokasi, " ", t_r4.targetPersen, "% ");
  }
}
function JabatanListComponent_Conditional_31_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, JabatanListComponent_Conditional_31_For_16_Conditional_9_For_1_Template, 2, 2, "span", 46, _forTrack1);
  }
  if (rf & 2) {
    const j_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(j_r5.targetKehadiranList);
  }
}
function JabatanListComponent_Conditional_31_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275conditionalCreate(8, JabatanListComponent_Conditional_31_For_16_Conditional_8_Template, 2, 0, "span", 36)(9, JabatanListComponent_Conditional_31_For_16_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "a", 40);
    \u0275\u0275element(12, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 42);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_31_For_16_Template_button_click_13_listener() {
      const j_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(j_r5.id));
    });
    \u0275\u0275element(14, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 44);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_31_For_16_Template_button_click_15_listener() {
      const j_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRiwayat(j_r5.id));
    });
    \u0275\u0275element(16, "i", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const j_r5 = ctx.$implicit;
    const \u0275$index_104_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_104_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r5.namaJabatan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r5.indukNama || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!j_r5.targetKehadiranList.length ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, j_r5.id));
  }
}
function JabatanListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 34)(2, "thead", 35)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Induk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Target Kehadiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, JabatanListComponent_Conditional_31_For_16_Template, 17, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.list());
  }
}
function JabatanListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 47)(2, "div", 48)(3, "div", 49)(4, "h5", 50);
    \u0275\u0275element(5, "i", 51);
    \u0275\u0275text(6, "Hapus Jabatan? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 52);
    \u0275\u0275text(8, " Data yang dihapus tidak dapat dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53)(10, "button", 54);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_32_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 55);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_32_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
function JabatanListComponent_Conditional_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd();
  }
}
function JabatanListComponent_Conditional_33_Conditional_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const \u0275$index_214_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_214_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.keterangan || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.changedBy || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(r_r9.changedAt));
  }
}
function JabatanListComponent_Conditional_33_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 64)(2, "thead", 35)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Keterangan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Diubah oleh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Waktu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, JabatanListComponent_Conditional_33_Conditional_12_For_14_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.riwayatJabatan.riwayatList);
  }
}
function JabatanListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 56)(2, "div", 48)(3, "div", 57)(4, "h5", 58);
    \u0275\u0275element(5, "i", 59);
    \u0275\u0275text(6, " Riwayat Perubahan \u2014 ");
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_33_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 62);
    \u0275\u0275conditionalCreate(11, JabatanListComponent_Conditional_33_Conditional_11_Template, 2, 0, "p", 63)(12, JabatanListComponent_Conditional_33_Conditional_12_Template, 15, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 53)(14, "button", 54);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_33_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275text(15, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.riwayatJabatan.namaJabatan);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.riwayatJabatan.riwayatList.length ? 11 : 12);
  }
}
function JabatanListComponent_Conditional_34_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 68);
    \u0275\u0275text(1, "Belum ada data jabatan.");
    \u0275\u0275elementEnd();
  }
}
function JabatanListComponent_Conditional_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 68);
    \u0275\u0275text(1, "Belum ada data jabatan.");
    \u0275\u0275elementEnd();
  }
}
function JabatanListComponent_Conditional_34_Conditional_11_For_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function JabatanListComponent_Conditional_34_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, JabatanListComponent_Conditional_34_Conditional_11_For_3_ng_container_1_Template, 1, 0, "ng-container", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const root_r12 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const treeNodeTpl_r13 = \u0275\u0275reference(37);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", treeNodeTpl_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, root_r12));
  }
}
function JabatanListComponent_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "ul", 70);
    \u0275\u0275repeaterCreate(2, JabatanListComponent_Conditional_34_Conditional_11_For_3_Template, 2, 4, "li", null, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.treeRoots);
  }
}
function JabatanListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 65)(2, "div", 48)(3, "div", 57)(4, "h5", 58);
    \u0275\u0275element(5, "i", 66);
    \u0275\u0275text(6, "Hirarki Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVisualisasi());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 67);
    \u0275\u0275conditionalCreate(9, JabatanListComponent_Conditional_34_Conditional_9_Template, 2, 0, "p", 68)(10, JabatanListComponent_Conditional_34_Conditional_10_Template, 2, 0, "p", 68)(11, JabatanListComponent_Conditional_34_Conditional_11_Template, 4, 0, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 53)(13, "button", 54);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_34_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVisualisasi());
    });
    \u0275\u0275text(14, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.list().length === 0 ? 9 : ctx_r1.treeRoots.length === 0 ? 10 : 11);
  }
}
function JabatanListComponent_Conditional_35_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 79);
  }
}
function JabatanListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 56)(2, "div", 48)(3, "div", 57)(4, "h5", 58);
    \u0275\u0275text(5, "Tambahkan Jabatan Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 61);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDefaultModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "p", 72);
    \u0275\u0275text(9, "Jabatan yang akan ditambahkan memiliki struktur hirarki seperti berikut:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 73)(11, "ul", 74)(12, "li")(13, "div", 75)(14, "div", 76);
    \u0275\u0275text(15, "CEO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ul")(17, "li")(18, "div", 75)(19, "div", 77);
    \u0275\u0275text(20, "IT Manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ul")(22, "li")(23, "div", 75)(24, "div", 77);
    \u0275\u0275text(25, "IT Supervisor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ul")(27, "li")(28, "div", 75)(29, "div", 77);
    \u0275\u0275text(30, "IT Staff");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(31, "li")(32, "div", 75)(33, "div", 77);
    \u0275\u0275text(34, "Sales & Marketing Manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ul")(36, "li")(37, "div", 75)(38, "div", 77);
    \u0275\u0275text(39, "Sales & Marketing Supervisor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "ul")(41, "li")(42, "div", 75)(43, "div", 77);
    \u0275\u0275text(44, "Sales Staff");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "li")(46, "div", 75)(47, "div", 77);
    \u0275\u0275text(48, "Marketing Staff");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(49, "li")(50, "div", 75)(51, "div", 77);
    \u0275\u0275text(52, "HRGA Manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "ul")(54, "li")(55, "div", 75)(56, "div", 77);
    \u0275\u0275text(57, "HRGA Supervisor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "ul")(59, "li")(60, "div", 75)(61, "div", 77);
    \u0275\u0275text(62, "HRD Staff");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "li")(64, "div", 75)(65, "div", 77);
    \u0275\u0275text(66, "GA Staff");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(67, "li")(68, "div", 75)(69, "div", 77);
    \u0275\u0275text(70, "Finance Accounting Manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "ul")(72, "li")(73, "div", 75)(74, "div", 77);
    \u0275\u0275text(75, "Accounting Supervisor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "ul")(77, "li")(78, "div", 75)(79, "div", 77);
    \u0275\u0275text(80, "Accounting Staff");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "li")(82, "div", 75)(83, "div", 77);
    \u0275\u0275text(84, "Finance Supervisor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "ul")(86, "li")(87, "div", 75)(88, "div", 77);
    \u0275\u0275text(89, "Finance Staff");
    \u0275\u0275elementEnd()()()()()()()()()()()();
    \u0275\u0275elementStart(90, "div", 53)(91, "button", 78);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_35_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tambahJabatanDefault());
    });
    \u0275\u0275conditionalCreate(92, JabatanListComponent_Conditional_35_Conditional_92_Template, 1, 0, "span", 79);
    \u0275\u0275text(93, " Ok Tambahkan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 80);
    \u0275\u0275listener("click", function JabatanListComponent_Conditional_35_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDefaultModal());
    });
    \u0275\u0275text(95, "Batal");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(91);
    \u0275\u0275property("disabled", ctx_r1.savingDefault());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.savingDefault() ? 92 : -1);
  }
}
function JabatanListComponent_ng_template_36_Conditional_3_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function JabatanListComponent_ng_template_36_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, JabatanListComponent_ng_template_36_Conditional_3_For_2_ng_container_1_Template, 1, 0, "ng-container", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r15 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const treeNodeTpl_r13 = \u0275\u0275reference(37);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", treeNodeTpl_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, child_r15));
  }
}
function JabatanListComponent_ng_template_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, JabatanListComponent_ng_template_36_Conditional_3_For_2_Template, 2, 4, "li", null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r16 = \u0275\u0275nextContext().node;
    \u0275\u0275advance();
    \u0275\u0275repeater(node_r16.children);
  }
}
function JabatanListComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, JabatanListComponent_ng_template_36_Conditional_3_Template, 3, 0, "ul");
  }
  if (rf & 2) {
    const node_r16 = ctx.node;
    \u0275\u0275advance();
    \u0275\u0275classProp("org-node-active", node_r16.jabatan.indukId === null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r16.jabatan.namaJabatan, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r16.children.length > 0 ? 3 : -1);
  }
}
var DEFAULT_JABATAN = [
  { nama: "CEO", induk: null },
  { nama: "IT Manager", induk: "CEO" },
  { nama: "IT Supervisor", induk: "IT Manager" },
  { nama: "IT Staff", induk: "IT Supervisor" },
  { nama: "Sales & Marketing Manager", induk: "CEO" },
  { nama: "Sales & Marketing Supervisor", induk: "Sales & Marketing Manager" },
  { nama: "Sales Staff", induk: "Sales & Marketing Supervisor" },
  { nama: "Marketing Staff", induk: "Sales & Marketing Supervisor" },
  { nama: "HRGA Manager", induk: "CEO" },
  { nama: "HRGA Supervisor", induk: "HRGA Manager" },
  { nama: "HRD Staff", induk: "HRGA Supervisor" },
  { nama: "GA Staff", induk: "HRGA Supervisor" },
  { nama: "Finance Accounting Manager", induk: "CEO" },
  { nama: "Accounting Supervisor", induk: "Finance Accounting Manager" },
  { nama: "Finance Supervisor", induk: "Finance Accounting Manager" },
  { nama: "Accounting Staff", induk: "Accounting Supervisor" },
  { nama: "Finance Staff", induk: "Finance Supervisor" }
];
var JabatanListComponent = class _JabatanListComponent {
  constructor() {
    this.svc = inject(JabatanService);
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayatId = signal(null, ...ngDevMode ? [{ debugName: "showRiwayatId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showVisualisasi = signal(false, ...ngDevMode ? [{ debugName: "showVisualisasi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showDefaultModal = signal(false, ...ngDevMode ? [{ debugName: "showDefaultModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.savingDefault = signal(false, ...ngDevMode ? [{ debugName: "savingDefault" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.svc.findAll().subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message ?? "Gagal memuat data.");
        this.loading.set(false);
      }
    });
  }
  confirmDelete(id) {
    this.confirmDeleteId.set(id);
  }
  cancelDelete() {
    this.confirmDeleteId.set(null);
  }
  doDelete() {
    const id = this.confirmDeleteId();
    if (id == null)
      return;
    this.svc.delete(id).subscribe({
      next: () => {
        this.confirmDeleteId.set(null);
        this.load();
      },
      error: (err) => {
        this.error.set(err?.message ?? "Gagal menghapus.");
        this.confirmDeleteId.set(null);
      }
    });
  }
  openRiwayat(id) {
    this.showRiwayatId.set(id);
  }
  closeRiwayat() {
    this.showRiwayatId.set(null);
  }
  get riwayatJabatan() {
    return this.list().find((j) => j.id === this.showRiwayatId());
  }
  // ── Visualisasi pohon ────────────────────────────────────
  openVisualisasi() {
    this.showVisualisasi.set(true);
  }
  closeVisualisasi() {
    this.showVisualisasi.set(false);
  }
  /** Bangun tree dari flat list, kembalikan hanya root nodes */
  get treeRoots() {
    return this.buildTree(this.list());
  }
  buildTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((j) => map.set(j.id, { jabatan: j, children: [] }));
    const roots = [];
    list.forEach((j) => {
      const node = map.get(j.id);
      if (j.indukId && map.has(j.indukId)) {
        map.get(j.indukId).children.push(node);
      } else {
        roots.push(node);
      }
    });
    return roots;
  }
  // ── Tambah Jabatan Default ───────────────────────────────
  openDefaultModal() {
    this.showDefaultModal.set(true);
  }
  closeDefaultModal() {
    this.showDefaultModal.set(false);
  }
  tambahJabatanDefault() {
    return __async(this, null, function* () {
      this.savingDefault.set(true);
      try {
        const createdMap = /* @__PURE__ */ new Map();
        for (const item of DEFAULT_JABATAN) {
          const indukId = item.induk ? createdMap.get(item.induk) ?? null : null;
          const req = {
            namaJabatan: item.nama,
            indukId,
            targetKehadiranList: []
          };
          const result = yield this.svc.create(req).toPromise();
          if (result)
            createdMap.set(item.nama, result.id);
        }
        this.showDefaultModal.set(false);
        this.load();
      } catch (err) {
        this.error.set(err?.data?.message ?? err?.message ?? "Gagal menambah jabatan default.");
      } finally {
        this.savingDefault.set(false);
      }
    });
  }
  formatDate(iso) {
    if (!iso)
      return "-";
    return new Date(iso).toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function JabatanListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JabatanListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JabatanListComponent, selectors: [["app-jabatan-list"]], decls: 38, vars: 6, consts: [["treeNodeTpl", ""], [1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "flex-wrap", "gap-2"], [1, "mb-0"], [1, "bx", "bx-briefcase", "me-2"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bx", "bx-sitemap", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bx", "bx-add-to-queue", "me-1"], ["routerLink", "/jabatan/baru", 1, "btn", "btn-primary", "btn-sm", "px-3"], [1, "bx", "bx-plus", "me-1"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-flex", "align-items-center"], [1, "card"], [1, "card-body"], [1, "py-4"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], ["type", "button", 1, "btn-close", "ms-auto", 3, "click"], [1, "placeholder-glow", "mb-2"], [1, "placeholder", "col-12", "rounded", 2, "height", "38px"], [1, "bx", "bx-briefcase", 2, "font-size", "3rem"], [1, "mt-2", "mb-3"], ["routerLink", "/jabatan/baru", 1, "btn", "btn-primary", "btn-sm"], [1, "table", "table-striped", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "text-muted"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "small"], ["title", "Edit", 1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "routerLink"], [1, "bx", "bx-edit"], ["title", "Hapus", 1, "btn", "btn-outline-danger", "btn-sm", "me-1", 3, "click"], [1, "bx", "bx-trash"], ["title", "Riwayat Perubahan", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bx", "bx-history"], [1, "badge", "bg-info", "text-dark", "me-1"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted"], [1, "modal-footer", "border-0"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-header"], [1, "modal-title"], [1, "bx", "bx-history", "me-2"], [1, "text-primary"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-muted", "text-center", "py-3"], [1, "table", "table-sm", "table-striped", "align-middle", "mb-0"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "bx", "bx-sitemap", "me-2"], [1, "modal-body", 2, "overflow", "auto", "min-height", "300px"], [1, "text-muted", "text-center", "py-5"], [1, "org-tree-container"], [1, "org-tree"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-muted", "mb-3"], [2, "overflow-x", "auto", "text-align", "center"], [1, "org-tree", 2, "display", "inline-flex"], [1, "org-node-wrap"], [1, "org-node", "org-node-active"], [1, "org-node"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"]], template: function JabatanListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "nav", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
        \u0275\u0275element(9, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 9);
        \u0275\u0275text(11, "Jabatan");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 10)(13, "h5", 11);
        \u0275\u0275element(14, "i", 12);
        \u0275\u0275text(15, "Data Jabatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
        \u0275\u0275listener("click", function JabatanListComponent_Template_button_click_17_listener() {
          return ctx.openVisualisasi();
        });
        \u0275\u0275element(18, "i", 15);
        \u0275\u0275text(19, " Lihat Visualisasi ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 16);
        \u0275\u0275listener("click", function JabatanListComponent_Template_button_click_20_listener() {
          return ctx.openDefaultModal();
        });
        \u0275\u0275element(21, "i", 17);
        \u0275\u0275text(22, " Tambah Jabatan Default ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "a", 18);
        \u0275\u0275element(24, "i", 19);
        \u0275\u0275text(25, " Tambah Jabatan ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(26, JabatanListComponent_Conditional_26_Template, 4, 1, "div", 20);
        \u0275\u0275elementStart(27, "div", 21)(28, "div", 22);
        \u0275\u0275conditionalCreate(29, JabatanListComponent_Conditional_29_Template, 3, 1, "div", 23)(30, JabatanListComponent_Conditional_30_Template, 6, 0, "div", 24)(31, JabatanListComponent_Conditional_31_Template, 17, 0, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(32, JabatanListComponent_Conditional_32_Template, 14, 0, "div", 26);
        \u0275\u0275conditionalCreate(33, JabatanListComponent_Conditional_33_Template, 16, 2, "div", 26);
        \u0275\u0275conditionalCreate(34, JabatanListComponent_Conditional_34_Template, 15, 1, "div", 26);
        \u0275\u0275conditionalCreate(35, JabatanListComponent_Conditional_35_Template, 96, 2, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, JabatanListComponent_ng_template_36_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275conditional(ctx.error() ? 26 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 29 : ctx.list().length === 0 ? 30 : 31);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatId() !== null && ctx.riwayatJabatan ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showVisualisasi() ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showDefaultModal() ? 35 : -1);
      }
    }, dependencies: [RouterLink, NgTemplateOutlet, LayoutComponent], styles: ['\n.org-tree-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 20px;\n  text-align: center;\n}\n.org-tree[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.org-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  padding-top: 20px;\n  position: relative;\n}\n.org-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 16px;\n  position: relative;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 2px;\n  height: 20px;\n  background: #a89fe0;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child):not(:last-child)::after, \n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:not(:last-child)::after, \n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:not(:first-child)::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  height: 2px;\n  background: #a89fe0;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child)::after {\n  right: 50%;\n  left: 0;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {\n  left: 50%;\n  right: 0;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:last-child::before {\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:last-child::after {\n  display: none;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > .org-node-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > .org-node-wrap[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 2px;\n  height: 20px;\n  background: #a89fe0;\n}\n.org-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:has(ul))    > .org-node-wrap[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.org-node[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1.5px solid #6c5ce7;\n  border-radius: 6px;\n  padding: 6px 14px;\n  background: #fff;\n  font-size: 0.78rem;\n  white-space: nowrap;\n  min-width: 80px;\n  text-align: center;\n  box-shadow: 0 1px 4px rgba(108, 92, 231, .15);\n}\n.org-node-active[_ngcontent-%COMP%] {\n  background: #ede9fc;\n  font-weight: 700;\n  color: #4a3aaa;\n}\n/*# sourceMappingURL=jabatan-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JabatanListComponent, [{
    type: Component,
    args: [{ selector: "app-jabatan-list", standalone: true, imports: [RouterLink, NgTemplateOutlet, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Jabatan</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">\r
    <h5 class="mb-0"><i class="bx bx-briefcase me-2"></i>Data Jabatan</h5>\r
    <div class="d-flex gap-2 flex-wrap">\r
      <button class="btn btn-outline-primary btn-sm" (click)="openVisualisasi()">\r
        <i class="bx bx-sitemap me-1"></i> Lihat Visualisasi\r
      </button>\r
      <button class="btn btn-outline-secondary btn-sm" (click)="openDefaultModal()">\r
        <i class="bx bx-add-to-queue me-1"></i> Tambah Jabatan Default\r
      </button>\r
      <a routerLink="/jabatan/baru" class="btn btn-primary btn-sm px-3">\r
        <i class="bx bx-plus me-1"></i> Tambah Jabatan\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- Error alert -->\r
  @if (error()) {\r
    <div class="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert">\r
      <i class="bx bx-error-circle me-2 fs-5"></i>\r
      {{ error() }}\r
      <button type="button" class="btn-close ms-auto" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  <!-- Table card -->\r
  <div class="card">\r
    <div class="card-body">\r
      @if (loading()) {\r
        <div class="py-4">\r
          @for (i of [1,2,3,4,5]; track i) {\r
            <div class="placeholder-glow mb-2">\r
              <span class="placeholder col-12 rounded" style="height:38px"></span>\r
            </div>\r
          }\r
        </div>\r
      } @else if (list().length === 0) {\r
        <div class="text-center py-5 text-muted">\r
          <i class="bx bx-briefcase" style="font-size:3rem"></i>\r
          <p class="mt-2 mb-3">Belum ada data jabatan.</p>\r
          <a routerLink="/jabatan/baru" class="btn btn-primary btn-sm">Tambah Sekarang</a>\r
        </div>\r
      } @else {\r
        <div class="table-responsive">\r
          <table class="table table-striped table-hover align-middle mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>#</th>\r
                <th>Jabatan</th>\r
                <th>Induk</th>\r
                <th>Target Kehadiran</th>\r
                <th>Aksi</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (j of list(); track j.id; let i = $index) {\r
                <tr>\r
                  <td class="text-muted">{{ i + 1 }}</td>\r
                  <td class="fw-semibold">{{ j.namaJabatan }}</td>\r
                  <td class="text-muted small">{{ j.indukNama || '-' }}</td>\r
                  <td class="small">\r
                    @if (!j.targetKehadiranList.length) {\r
                      <span class="text-muted">-</span>\r
                    } @else {\r
                      @for (t of j.targetKehadiranList; track t.namaLokasi) {\r
                        <span class="badge bg-info text-dark me-1">\r
                          {{ t.namaLokasi }} {{ t.targetPersen }}%\r
                        </span>\r
                      }\r
                    }\r
                  </td>\r
                  <td>\r
                    <a [routerLink]="['/jabatan', j.id, 'edit']"\r
                       class="btn btn-outline-primary btn-sm me-1" title="Edit">\r
                      <i class="bx bx-edit"></i>\r
                    </a>\r
                    <button class="btn btn-outline-danger btn-sm me-1" title="Hapus"\r
                            (click)="confirmDelete(j.id)">\r
                      <i class="bx bx-trash"></i>\r
                    </button>\r
                    <button class="btn btn-outline-secondary btn-sm" title="Riwayat Perubahan"\r
                            (click)="openRiwayat(j.id)">\r
                      <i class="bx bx-history"></i>\r
                    </button>\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- Modal konfirmasi hapus -->\r
  @if (confirmDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger">\r
              <i class="bx bx-trash me-2"></i>Hapus Jabatan?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted">\r
            Data yang dihapus tidak dapat dikembalikan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-secondary btn-sm" (click)="cancelDelete()">Batal</button>\r
            <button class="btn btn-danger btn-sm" (click)="doDelete()">Ya, Hapus</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Modal riwayat perubahan -->\r
  @if (showRiwayatId() !== null && riwayatJabatan) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx bx-history me-2"></i>\r
              Riwayat Perubahan \u2014 <span class="text-primary">{{ riwayatJabatan.namaJabatan }}</span>\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeRiwayat()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (!riwayatJabatan.riwayatList.length) {\r
              <p class="text-muted text-center py-3">Belum ada riwayat perubahan.</p>\r
            } @else {\r
              <div class="table-responsive">\r
                <table class="table table-sm table-striped align-middle mb-0">\r
                  <thead class="table-light">\r
                    <tr>\r
                      <th>#</th>\r
                      <th>Keterangan</th>\r
                      <th>Diubah oleh</th>\r
                      <th>Waktu</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (r of riwayatJabatan.riwayatList; track r.id; let ri = $index) {\r
                      <tr>\r
                        <td class="text-muted">{{ ri + 1 }}</td>\r
                        <td>{{ r.keterangan || '-' }}</td>\r
                        <td class="text-muted small">{{ r.changedBy || '-' }}</td>\r
                        <td class="text-muted small">{{ formatDate(r.changedAt) }}</td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-secondary btn-sm" (click)="closeRiwayat()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       Modal Visualisasi Hirarki Jabatan\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showVisualisasi()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
      <div class="modal-dialog modal-dialog-centered modal-xl">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-sitemap me-2"></i>Hirarki Jabatan</h5>\r
            <button type="button" class="btn-close" (click)="closeVisualisasi()"></button>\r
          </div>\r
          <div class="modal-body" style="overflow:auto; min-height:300px">\r
            @if (list().length === 0) {\r
              <p class="text-muted text-center py-5">Belum ada data jabatan.</p>\r
            } @else if (treeRoots.length === 0) {\r
              <p class="text-muted text-center py-5">Belum ada data jabatan.</p>\r
            } @else {\r
              <div class="org-tree-container">\r
                <ul class="org-tree">\r
                  @for (root of treeRoots; track root.jabatan.id) {\r
                    <li>\r
                      <ng-container *ngTemplateOutlet="treeNodeTpl; context: { node: root }"></ng-container>\r
                    </li>\r
                  }\r
                </ul>\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-secondary btn-sm" (click)="closeVisualisasi()">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       Modal Tambah Jabatan Default\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showDefaultModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
          <div class="modal-header">\r
            <h5 class="modal-title">Tambahkan Jabatan Default</h5>\r
            <button type="button" class="btn-close" (click)="closeDefaultModal()"></button>\r
          </div>\r
          <div class="modal-body">\r
            <p class="text-muted mb-3">Jabatan yang akan ditambahkan memiliki struktur hirarki seperti berikut:</p>\r
            <!-- Preview org chart default -->\r
            <div style="overflow-x:auto; text-align:center">\r
              <ul class="org-tree" style="display:inline-flex">\r
                <li>\r
                  <div class="org-node-wrap"><div class="org-node org-node-active">CEO</div></div>\r
                  <ul>\r
                    <li>\r
                      <div class="org-node-wrap"><div class="org-node">IT Manager</div></div>\r
                      <ul>\r
                        <li>\r
                          <div class="org-node-wrap"><div class="org-node">IT Supervisor</div></div>\r
                          <ul>\r
                            <li><div class="org-node-wrap"><div class="org-node">IT Staff</div></div></li>\r
                          </ul>\r
                        </li>\r
                      </ul>\r
                    </li>\r
                    <li>\r
                      <div class="org-node-wrap"><div class="org-node">Sales &amp; Marketing Manager</div></div>\r
                      <ul>\r
                        <li>\r
                          <div class="org-node-wrap"><div class="org-node">Sales &amp; Marketing Supervisor</div></div>\r
                          <ul>\r
                            <li><div class="org-node-wrap"><div class="org-node">Sales Staff</div></div></li>\r
                            <li><div class="org-node-wrap"><div class="org-node">Marketing Staff</div></div></li>\r
                          </ul>\r
                        </li>\r
                      </ul>\r
                    </li>\r
                    <li>\r
                      <div class="org-node-wrap"><div class="org-node">HRGA Manager</div></div>\r
                      <ul>\r
                        <li>\r
                          <div class="org-node-wrap"><div class="org-node">HRGA Supervisor</div></div>\r
                          <ul>\r
                            <li><div class="org-node-wrap"><div class="org-node">HRD Staff</div></div></li>\r
                            <li><div class="org-node-wrap"><div class="org-node">GA Staff</div></div></li>\r
                          </ul>\r
                        </li>\r
                      </ul>\r
                    </li>\r
                    <li>\r
                      <div class="org-node-wrap"><div class="org-node">Finance Accounting Manager</div></div>\r
                      <ul>\r
                        <li>\r
                          <div class="org-node-wrap"><div class="org-node">Accounting Supervisor</div></div>\r
                          <ul>\r
                            <li><div class="org-node-wrap"><div class="org-node">Accounting Staff</div></div></li>\r
                          </ul>\r
                        </li>\r
                        <li>\r
                          <div class="org-node-wrap"><div class="org-node">Finance Supervisor</div></div>\r
                          <ul>\r
                            <li><div class="org-node-wrap"><div class="org-node">Finance Staff</div></div></li>\r
                          </ul>\r
                        </li>\r
                      </ul>\r
                    </li>\r
                  </ul>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-primary" [disabled]="savingDefault()" (click)="tambahJabatanDefault()">\r
              @if (savingDefault()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              }\r
              Ok Tambahkan\r
            </button>\r
            <button class="btn btn-outline-secondary" (click)="closeDefaultModal()">Batal</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
\r
<!-- \u2500\u2500 Template rekursif pohon jabatan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<ng-template #treeNodeTpl let-node="node">\r
  <div class="org-node-wrap">\r
    <div class="org-node" [class.org-node-active]="node.jabatan.indukId === null">\r
      {{ node.jabatan.namaJabatan }}\r
    </div>\r
  </div>\r
  @if (node.children.length > 0) {\r
    <ul>\r
      @for (child of node.children; track child.jabatan.id) {\r
        <li>\r
          <ng-container *ngTemplateOutlet="treeNodeTpl; context: { node: child }"></ng-container>\r
        </li>\r
      }\r
    </ul>\r
  }\r
</ng-template>\r
\r
<style>\r
/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
   Org Chart \u2014 top-down tree, horizontal branches\r
   Reference: https://codepen.io/philippkuehn/pen/QbrOaN\r
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r
\r
.org-tree-container {\r
  overflow: auto;\r
  padding: 20px;\r
  text-align: center;\r
}\r
\r
/* The root ul and all child ul share these rules */\r
.org-tree {\r
  display: inline-flex;         /* shrink-wrap width */\r
  flex-direction: column;\r
  align-items: center;\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
/* Children row \u2014 horizontal */\r
.org-tree ul {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: center;\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
  padding-top: 20px;            /* space for vertical drop from parent */\r
  position: relative;\r
}\r
\r
/* Horizontal bar connecting siblings */\r
.org-tree ul::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  /* width will be set below via first/last child */\r
}\r
\r
.org-tree li {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  padding: 0 16px;\r
  position: relative;\r
}\r
\r
/* Vertical drop from horizontal bar down to each node */\r
.org-tree li::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  width: 2px;\r
  height: 20px;\r
  background: #a89fe0;\r
}\r
\r
/* Horizontal bar \u2014 spans from first child midpoint to last child midpoint */\r
.org-tree li:not(:first-child):not(:last-child)::after,\r
.org-tree li:first-child:not(:last-child)::after,\r
.org-tree li:last-child:not(:first-child)::after {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  height: 2px;\r
  background: #a89fe0;\r
}\r
/* Left half of bar (on non-first children) */\r
.org-tree li:not(:first-child)::after {\r
  right: 50%;\r
  left: 0;\r
}\r
/* Right half of bar (on non-last children) */\r
.org-tree li:not(:last-child)::after {\r
  left: 50%;\r
  right: 0;\r
}\r
/* Only child: no bar, just vertical */\r
.org-tree li:first-child:last-child::before {\r
  /* keep vertical line only */\r
}\r
.org-tree li:first-child:last-child::after {\r
  display: none;\r
}\r
\r
/* \u2500\u2500 Vertical line DOWN from each node to its children ul \u2500\u2500 */\r
.org-tree li > .org-node-wrap {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
}\r
.org-tree li > .org-node-wrap::after {\r
  content: '';\r
  width: 2px;\r
  height: 20px;\r
  background: #a89fe0;\r
}\r
/* Hide the bottom line if no children */\r
.org-tree li:not(:has(ul)) > .org-node-wrap::after {\r
  display: none;\r
}\r
\r
/* \u2500\u2500 Node box \u2500\u2500 */\r
.org-node {\r
  display: inline-block;\r
  border: 1.5px solid #6c5ce7;\r
  border-radius: 6px;\r
  padding: 6px 14px;\r
  background: #fff;\r
  font-size: 0.78rem;\r
  white-space: nowrap;\r
  min-width: 80px;\r
  text-align: center;\r
  box-shadow: 0 1px 4px rgba(108,92,231,.15);\r
}\r
\r
.org-node-active {\r
  background: #ede9fc;\r
  font-weight: 700;\r
  color: #4a3aaa;\r
}\r
</style>\r
\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JabatanListComponent, { className: "JabatanListComponent", filePath: "src/app/features/jabatan/jabatan-list/jabatan-list.component.ts", lineNumber: 41 });
})();
export {
  JabatanListComponent
};
//# sourceMappingURL=chunk-KRZ2D4DW.js.map
