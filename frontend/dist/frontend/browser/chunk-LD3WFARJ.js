import {
  LokasiKehadiranService
} from "./chunk-5X7IVESH.js";
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
  NgModel
} from "./chunk-DVNMOIF6.js";
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  DatePipe,
  Router,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/lokasi/lokasi-list/lokasi-list.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = (a0) => ["/lokasi", a0, "edit"];
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.kuota;
function LokasiListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.klikTambahLokasi());
    });
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Tambah Lokasi ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.klikTambahLokasi());
    });
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, " Tambah Lokasi (Pesan Kuota) ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function LokasiListComponent_Conditional_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "span", 34)(2, "span", 35);
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, LokasiListComponent_Conditional_37_For_2_Template, 3, 0, "div", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function LokasiListComponent_Conditional_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_38_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.klikTambahLokasi());
    });
    \u0275\u0275text(1, "Tambah Sekarang");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_38_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bukaPesanKuota());
    });
    \u0275\u0275text(1, "Pesan Kuota Lokasi");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3, "Belum ada lokasi kehadiran.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LokasiListComponent_Conditional_38_Conditional_4_Template, 2, 0, "button", 38)(5, LokasiListComponent_Conditional_38_Conditional_5_Template, 2, 0, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.sisaKuota() > 0 ? 4 : 5);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" SN: ", k_r7.fingerspotSn, " ");
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(":", k_r7.fingerspotPort);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_4_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", k_r7.fingerspotIp);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r7.fingerspotPort ? 1 : -1);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275conditionalCreate(2, LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_3_Template, 1, 0);
    \u0275\u0275conditionalCreate(4, LokasiListComponent_Conditional_39_For_22_Conditional_4_Conditional_4_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r7.fingerspotSn ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r7.fingerspotSn && k_r7.fingerspotIp ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r7.fingerspotIp ? 4 : -1);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_39_For_22_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const k_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bukaPeta(k_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", k_r7.latitude, ", ", k_r7.longitude, " ");
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Semua Karyawan");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r9.nama);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 68);
    \u0275\u0275text(1, "\u2014 belum ada \u2014");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Spesifik Divisi:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ol", 67);
    \u0275\u0275repeaterCreate(3, LokasiListComponent_Conditional_39_For_22_Conditional_15_For_4_Template, 2, 1, "li", null, _forTrack0);
    \u0275\u0275conditionalCreate(5, LokasiListComponent_Conditional_39_For_22_Conditional_15_Conditional_5_Template, 2, 0, "li", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(k_r7.divisiTugas ?? \u0275\u0275pureFunction0(1, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((k_r7.divisiTugas == null ? null : k_r7.divisiTugas.length) ?? 0) === 0 ? 5 : -1);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kk_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kk_r10.nama);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 68);
    \u0275\u0275text(1, "\u2014 belum ada \u2014");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Spesifik Karyawan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ol", 67);
    \u0275\u0275repeaterCreate(3, LokasiListComponent_Conditional_39_For_22_Conditional_16_For_4_Template, 2, 1, "li", null, _forTrack0);
    \u0275\u0275conditionalCreate(5, LokasiListComponent_Conditional_39_For_22_Conditional_16_Conditional_5_Template, 2, 0, "li", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(k_r7.karyawanTugas ?? \u0275\u0275pureFunction0(1, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((k_r7.karyawanTugas == null ? null : k_r7.karyawanTugas.length) ?? 0) === 0 ? 5 : -1);
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, " Fingerspot Saja ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, " Aplikasi & Fingerspot ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, " Aktif ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, " Nonaktif ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_39_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LokasiListComponent_Conditional_39_For_22_Conditional_4_Template, 5, 3, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 49);
    \u0275\u0275conditionalCreate(8, LokasiListComponent_Conditional_39_For_22_Conditional_8_Template, 3, 2, "button", 50)(9, LokasiListComponent_Conditional_39_For_22_Conditional_9_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 43)(11, "span", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 53);
    \u0275\u0275conditionalCreate(14, LokasiListComponent_Conditional_39_For_22_Conditional_14_Template, 2, 0, "span", 54)(15, LokasiListComponent_Conditional_39_For_22_Conditional_15_Template, 6, 2)(16, LokasiListComponent_Conditional_39_For_22_Conditional_16_Template, 6, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 43);
    \u0275\u0275conditionalCreate(18, LokasiListComponent_Conditional_39_For_22_Conditional_18_Template, 3, 0, "span", 55)(19, LokasiListComponent_Conditional_39_For_22_Conditional_19_Template, 3, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 43);
    \u0275\u0275conditionalCreate(21, LokasiListComponent_Conditional_39_For_22_Conditional_21_Template, 2, 0, "span", 57)(22, LokasiListComponent_Conditional_39_For_22_Conditional_22_Template, 2, 0, "span", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 43)(24, "a", 59);
    \u0275\u0275element(25, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 61);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_39_For_22_Template_button_click_26_listener($event) {
      const k_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAksi(k_r7.id, $event));
    });
    \u0275\u0275element(27, "i", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r7.namaLokasi);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r7.fingerspotSn || k_r7.fingerspotIp ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", k_r7.alamat || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r7.latitude != null && k_r7.longitude != null ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", k_r7.radiusMeter ?? 0, " m ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!k_r7.targetTipe || k_r7.targetTipe === "SEMUA" ? 14 : k_r7.targetTipe === "DIVISI" ? 15 : k_r7.targetTipe === "KARYAWAN" ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(k_r7.hanyaFingerspot ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(k_r7.aktif ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, k_r7.id));
  }
}
function LokasiListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 40)(2, "thead", 41)(3, "tr")(4, "th", 42);
    \u0275\u0275text(5, "Nama Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Alamat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 43);
    \u0275\u0275text(9, "Koordinat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, "Radius");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 44);
    \u0275\u0275text(13, "Karyawan Ditugaskan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 43);
    \u0275\u0275text(15, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 43);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 45);
    \u0275\u0275text(19, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, LokasiListComponent_Conditional_39_For_22_Template, 28, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.list());
  }
}
function LokasiListComponent_Conditional_40_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
function LokasiListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 71)(2, "div", 72)(3, "div", 73);
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275elementStart(5, "h5", 75);
    \u0275\u0275text(6, "Hapus lokasi?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 76);
    \u0275\u0275text(8, " Lokasi yang dihapus tidak dapat dikembalikan kecuali dipulihkan oleh administrator. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 77)(10, "button", 78);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_40_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteId.set(null));
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 79);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_40_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275conditionalCreate(13, LokasiListComponent_Conditional_40_Conditional_13_Template, 1, 0, "span", 80);
    \u0275\u0275text(14, " Hapus ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.deleteBusy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.deleteBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.deleteBusy() ? 13 : -1);
  }
}
function LokasiListComponent_Conditional_41_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "span", 80);
    \u0275\u0275text(2, " Memuat pengaturan\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_41_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "label", 91);
    \u0275\u0275text(2, " SPV dapat menambah lokasi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "div", 93)(5, "input", 94);
    \u0275\u0275listener("change", function LokasiListComponent_Conditional_41_Conditional_10_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSpvTambah(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 95);
    \u0275\u0275text(7, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 93)(9, "input", 96);
    \u0275\u0275listener("change", function LokasiListComponent_Conditional_41_Conditional_10_Template_input_change_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSpvTambah(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 97);
    \u0275\u0275text(11, "TIDAK");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 98)(13, "label", 91);
    \u0275\u0275text(14, " SPV dapat memperbarui lokasi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 92)(16, "div", 93)(17, "input", 99);
    \u0275\u0275listener("change", function LokasiListComponent_Conditional_41_Conditional_10_Template_input_change_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSpvUpdate(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 100);
    \u0275\u0275text(19, "YA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 93)(21, "input", 101);
    \u0275\u0275listener("change", function LokasiListComponent_Conditional_41_Conditional_10_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setSpvUpdate(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 102);
    \u0275\u0275text(23, "TIDAK");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 103);
    \u0275\u0275element(25, "i", 104);
    \u0275\u0275text(26, " Pengaturan ini berlaku untuk semua supervisor (SPV) di perusahaan Anda. Pemilik & Admin tetap dapat menambah/memperbarui lokasi. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.pengaturan().spvDapatMenambahLokasi);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.pengaturan().spvDapatMenambahLokasi);
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r1.pengaturan().spvDapatMemperbaruiLokasi);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", !ctx_r1.pengaturan().spvDapatMemperbaruiLokasi);
  }
}
function LokasiListComponent_Conditional_41_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
function LokasiListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 81)(2, "div", 72)(3, "div", 82)(4, "h5", 83);
    \u0275\u0275element(5, "i", 84);
    \u0275\u0275text(6, "Pengaturan Lokasi Kehadiran ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 85);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_41_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPengaturan.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 86);
    \u0275\u0275conditionalCreate(9, LokasiListComponent_Conditional_41_Conditional_9_Template, 3, 0, "div", 87)(10, LokasiListComponent_Conditional_41_Conditional_10_Template, 27, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 88)(12, "button", 78);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_41_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPengaturan.set(false));
    });
    \u0275\u0275text(13, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 89);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_41_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.simpanPengaturan());
    });
    \u0275\u0275conditionalCreate(15, LokasiListComponent_Conditional_41_Conditional_15_Template, 1, 0, "span", 80);
    \u0275\u0275text(16, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.pengaturanLoading() ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.pengaturanSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pengaturanLoading() || ctx_r1.pengaturanSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pengaturanSaving() ? 15 : -1);
  }
}
function LokasiListComponent_Conditional_42_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "button", 120);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_42_For_12_Template_button_click_1_listener() {
      const p_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pilihKuota(p_r16.kuota));
    });
    \u0275\u0275elementStart(2, "div", 121);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 122);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("opacity", ctx_r1.kuotaTerpilih() === p_r16.kuota ? 1 : 0.65);
    \u0275\u0275classProp("border-success", ctx_r1.kuotaTerpilih() === p_r16.kuota)("border-2", ctx_r1.kuotaTerpilih() === p_r16.kuota);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r16.kuota);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Rp", p_r16.harga.toLocaleString("id-ID"), " ");
  }
}
function LokasiListComponent_Conditional_42_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
function LokasiListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 105)(2, "div", 72)(3, "div", 106)(4, "h5", 83);
    \u0275\u0275text(5, "Pesan Kuota Lokasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 107);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_42_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showKuota.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 108)(8, "div", 109);
    \u0275\u0275text(9, "Kuota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 110);
    \u0275\u0275repeaterCreate(11, LokasiListComponent_Conditional_42_For_12_Template, 6, 8, "div", 111, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 112)(14, "div", 113);
    \u0275\u0275text(15, "Total (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 114);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "hr", 115);
    \u0275\u0275elementStart(19, "div", 43)(20, "button", 116);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_42_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pesanKuota());
    });
    \u0275\u0275conditionalCreate(21, LokasiListComponent_Conditional_42_Conditional_21_Template, 1, 0, "span", 80);
    \u0275\u0275text(22, " Pesan Kuota ");
    \u0275\u0275element(23, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 118);
    \u0275\u0275text(25, " Dengan melanjutkan, Anda menyetujui ");
    \u0275\u0275elementStart(26, "a", 119);
    \u0275\u0275text(27, " S&K Layanan ");
    \u0275\u0275element(28, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " dan ");
    \u0275\u0275elementStart(30, "a", 119);
    \u0275\u0275text(31, " Privasi ");
    \u0275\u0275element(32, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Kerjoo. ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.kuotaSaving());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.paketKuota);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalHargaKuota().toLocaleString("id-ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.kuotaSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.kuotaSaving() ? 21 : -1);
  }
}
function LokasiListComponent_Conditional_43_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 124);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_43_For_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const k_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.tutupAksi();
      return \u0275\u0275resetView(ctx_r1.bukaPenugasan(k_r18));
    });
    \u0275\u0275element(1, "i", 125);
    \u0275\u0275text(2, " Karyawan Ditugaskan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 124);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_43_For_2_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const k_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.tutupAksi();
      return \u0275\u0275resetView(ctx_r1.bukaRiwayat(k_r18));
    });
    \u0275\u0275element(4, "i", 126);
    \u0275\u0275text(5, " Riwayat Perubahan ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr", 127);
    \u0275\u0275elementStart(7, "button", 128);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_43_For_2_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const k_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.tutupAksi();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteId.set(k_r18.id));
    });
    \u0275\u0275element(8, "i", 129);
    \u0275\u0275text(9, " Hapus ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LokasiListComponent_Conditional_43_For_2_Conditional_0_Template, 10, 0);
  }
  if (rf & 2) {
    const k_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(k_r18.id === ctx_r1.openAksiId() ? 0 : -1);
  }
}
function LokasiListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_43_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275repeaterCreate(1, LokasiListComponent_Conditional_43_For_2_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("position", "fixed")("top", ctx_r1.aksiPos().top, "px")("left", ctx_r1.aksiPos().left, "px")("width", 220, "px")("z-index", 2e3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.list());
  }
}
function LokasiListComponent_Conditional_44_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.penugasanLokasi().namaLokasi, " ");
  }
}
function LokasiListComponent_Conditional_44_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 133);
    \u0275\u0275text(1, "Belum ada divisi.");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_44_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "div", 93)(2, "input", 144);
    \u0275\u0275listener("change", function LokasiListComponent_Conditional_44_Conditional_12_For_2_Template_input_change_2_listener($event) {
      const d_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePenugasanDivisi(d_r21.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 145);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "pen-div-" + d_r21.id)("checked", ctx_r1.isDivisiSelected(d_r21.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "pen-div-" + d_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r21.namaDivisi, " ");
  }
}
function LokasiListComponent_Conditional_44_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275repeaterCreate(1, LokasiListComponent_Conditional_44_Conditional_12_For_2_Template, 5, 4, "div", 143, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.divisiOptions());
  }
}
function LokasiListComponent_Conditional_44_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 147);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_44_Conditional_16_For_2_Template_button_click_2_listener() {
      const id_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hapusKaryawanPenugasan(id_r23));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.namaKaryawanById(id_r23), " ");
  }
}
function LokasiListComponent_Conditional_44_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275repeaterCreate(1, LokasiListComponent_Conditional_44_Conditional_16_For_2_Template, 3, 1, "span", 146, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.selKaryawanIdsArray());
  }
}
function LokasiListComponent_Conditional_44_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275text(1, " Tidak ada karyawan ditemukan. ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_44_Conditional_19_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r25.nip);
  }
}
function LokasiListComponent_Conditional_44_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "input", 144);
    \u0275\u0275listener("change", function LokasiListComponent_Conditional_44_Conditional_19_For_1_Template_input_change_1_listener($event) {
      const k_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePenugasanKaryawan(k_r25.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 145)(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LokasiListComponent_Conditional_44_Conditional_19_For_1_Conditional_5_Template, 2, 1, "small", 149);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("id", "pen-kar-" + k_r25.id)("checked", ctx_r1.isKaryawanSelected(k_r25.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "pen-kar-" + k_r25.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r25.namaLengkap);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r25.nip ? 5 : -1);
  }
}
function LokasiListComponent_Conditional_44_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LokasiListComponent_Conditional_44_Conditional_19_For_1_Template, 6, 5, "div", 148, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.filteredKaryawanPenugasan());
  }
}
function LokasiListComponent_Conditional_44_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
function LokasiListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 130)(2, "div", 72)(3, "div", 106)(4, "h5", 83);
    \u0275\u0275text(5, " Karyawan Ditugaskan ");
    \u0275\u0275conditionalCreate(6, LokasiListComponent_Conditional_44_Conditional_6_Template, 2, 1, "small", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 107);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPenugasan.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108)(9, "h6", 132);
    \u0275\u0275text(10, "# Spesifik Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, LokasiListComponent_Conditional_44_Conditional_11_Template, 2, 0, "p", 133)(12, LokasiListComponent_Conditional_44_Conditional_12_Template, 3, 0, "div", 134);
    \u0275\u0275elementStart(13, "h6", 135);
    \u0275\u0275text(14, "# Spesifik Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 136);
    \u0275\u0275listener("ngModelChange", function LokasiListComponent_Conditional_44_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchKaryawan.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LokasiListComponent_Conditional_44_Conditional_16_Template, 3, 0, "div", 137);
    \u0275\u0275elementStart(17, "div", 138);
    \u0275\u0275conditionalCreate(18, LokasiListComponent_Conditional_44_Conditional_18_Template, 2, 0, "div", 139)(19, LokasiListComponent_Conditional_44_Conditional_19_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 140)(21, "button", 141);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_44_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.simpanPenugasan());
    });
    \u0275\u0275conditionalCreate(22, LokasiListComponent_Conditional_44_Conditional_22_Template, 1, 0, "span", 80);
    \u0275\u0275text(23, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 142);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_44_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPenugasan.set(false));
    });
    \u0275\u0275text(25, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.penugasanLokasi() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.penugasanSaving());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.divisiOptions().length === 0 ? 11 : 12);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.searchKaryawan());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selKaryawanIds().size > 0 ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredKaryawanPenugasan().length === 0 ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.penugasanSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.penugasanSaving() ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.penugasanSaving());
  }
}
function LokasiListComponent_Conditional_45_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275element(1, "span", 153);
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_45_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 151);
    \u0275\u0275text(1, " Belum ada riwayat perubahan. ");
    \u0275\u0275elementEnd();
  }
}
function LokasiListComponent_Conditional_45_Conditional_12_For_10_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 163)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 164);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", a_r27.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r27.nilai);
  }
}
function LokasiListComponent_Conditional_45_Conditional_12_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 156)(3, "div", 157);
    \u0275\u0275element(4, "i", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 159);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 160);
    \u0275\u0275text(15, " Lokasi Kehadiran ");
    \u0275\u0275elementStart(16, "span", 161);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ul", 162);
    \u0275\u0275repeaterCreate(19, LokasiListComponent_Conditional_45_Conditional_12_For_10_For_20_Template, 5, 2, "li", 163, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(r_r28.changedBy || "Sistem");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 6, r_r28.changedAt, "dd MMM yyyy @ HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.riwayatBadgeClass(r_r28.tipe));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.riwayatLabelTipe(r_r28.tipe), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("ID: ", r_r28.id);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r28.aktivitas);
  }
}
function LokasiListComponent_Conditional_45_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 154)(2, "thead", 41)(3, "tr")(4, "th", 155);
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Aktivitas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, LokasiListComponent_Conditional_45_Conditional_12_For_10_Template, 21, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.riwayatList());
  }
}
function LokasiListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 130)(2, "div", 72)(3, "div", 106)(4, "h5", 83);
    \u0275\u0275text(5, " Riwayat Perubahan ");
    \u0275\u0275elementStart(6, "small", 131);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 85);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_45_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRiwayat.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 108);
    \u0275\u0275conditionalCreate(10, LokasiListComponent_Conditional_45_Conditional_10_Template, 2, 0, "div", 150)(11, LokasiListComponent_Conditional_45_Conditional_11_Template, 2, 0, "p", 151)(12, LokasiListComponent_Conditional_45_Conditional_12_Template, 11, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 140)(14, "button", 152);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_45_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRiwayat.set(false));
    });
    \u0275\u0275text(15, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.riwayatLokasiNama(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.riwayatLoading() ? 10 : ctx_r1.riwayatList().length === 0 ? 11 : 12);
  }
}
function LokasiListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 165)(2, "div", 166)(3, "div", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 168);
    \u0275\u0275listener("click", function LokasiListComponent_Conditional_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toastMsg.set(""));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r1.toastType() === "success")("bg-danger", ctx_r1.toastType() === "danger")("bg-warning", ctx_r1.toastType() === "warning");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.toastMsg());
  }
}
var LokasiListComponent = class _LokasiListComponent {
  constructor() {
    this.svc = inject(LokasiKehadiranService);
    this.divSvc = inject(DivisiService);
    this.karSvc = inject(KaryawanService);
    this.router = inject(Router);
    this.cdr = inject(ChangeDetectorRef);
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
    this.toastMsg = signal("", ...ngDevMode ? [{ debugName: "toastMsg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toastType = signal("success", ...ngDevMode ? [{ debugName: "toastType" }] : (
      /* istanbul ignore next */
      []
    ));
    this.confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.deleteBusy = signal(false, ...ngDevMode ? [{ debugName: "deleteBusy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sisaKuota = signal(0, ...ngDevMode ? [{ debugName: "sisaKuota" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPengaturan = signal(false, ...ngDevMode ? [{ debugName: "showPengaturan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanLoading = signal(false, ...ngDevMode ? [{ debugName: "pengaturanLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanSaving = signal(false, ...ngDevMode ? [{ debugName: "pengaturanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturan = signal({
      spvDapatMenambahLokasi: false,
      spvDapatMemperbaruiLokasi: false
    }, ...ngDevMode ? [{ debugName: "pengaturan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paketKuota = [
      { kuota: 2, harga: 2e4 },
      { kuota: 5, harga: 45e3 },
      { kuota: 10, harga: 85e3 }
    ];
    this.showKuota = signal(false, ...ngDevMode ? [{ debugName: "showKuota" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kuotaTerpilih = signal(2, ...ngDevMode ? [{ debugName: "kuotaTerpilih" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kuotaSaving = signal(false, ...ngDevMode ? [{ debugName: "kuotaSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPenugasan = signal(false, ...ngDevMode ? [{ debugName: "showPenugasan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penugasanLokasi = signal(null, ...ngDevMode ? [{ debugName: "penugasanLokasi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penugasanSaving = signal(false, ...ngDevMode ? [{ debugName: "penugasanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiOptions = signal([], ...ngDevMode ? [{ debugName: "divisiOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanOptions = signal([], ...ngDevMode ? [{ debugName: "karyawanOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selDivisiIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selDivisiIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selKaryawanIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selKaryawanIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchKaryawan = signal("", ...ngDevMode ? [{ debugName: "searchKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayat = signal(false, ...ngDevMode ? [{ debugName: "showRiwayat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatLoading = signal(false, ...ngDevMode ? [{ debugName: "riwayatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatList = signal([], ...ngDevMode ? [{ debugName: "riwayatList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatLokasiNama = signal("", ...ngDevMode ? [{ debugName: "riwayatLokasiNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openAksiId = signal(null, ...ngDevMode ? [{ debugName: "openAksiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiPos = signal({ top: 0, left: 0 }, ...ngDevMode ? [{ debugName: "aksiPos" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dtInstance = null;
  }
  toggleAksi(id, ev) {
    ev.stopPropagation();
    if (this.openAksiId() === id) {
      this.openAksiId.set(null);
      return;
    }
    const btn = ev.currentTarget;
    const rect = btn.getBoundingClientRect();
    const menuWidth = 220;
    const left = Math.max(8, rect.right - menuWidth);
    const top = rect.bottom + 4;
    this.aksiPos.set({ top, left });
    this.openAksiId.set(id);
  }
  tutupAksi() {
    this.openAksiId.set(null);
  }
  onDocClick() {
    if (this.openAksiId() !== null)
      this.openAksiId.set(null);
  }
  onWinChange() {
    if (this.openAksiId() !== null)
      this.openAksiId.set(null);
  }
  totalHargaKuota() {
    return this.paketKuota.find((p) => p.kuota === this.kuotaTerpilih())?.harga ?? 0;
  }
  bukaPesanKuota() {
    this.kuotaTerpilih.set(2);
    this.showKuota.set(true);
  }
  pilihKuota(k) {
    this.kuotaTerpilih.set(k);
  }
  /**
   * Tombol gabungan: jika ada kuota → langsung ke form tambah lokasi.
   * Jika kuota 0 → buka modal pesan kuota.
   */
  klikTambahLokasi() {
    if (this.sisaKuota() > 0) {
      this.router.navigate(["/lokasi/baru"]);
    } else {
      this.bukaPesanKuota();
    }
  }
  pesanKuota() {
    this.kuotaSaving.set(true);
    this.svc.pesanKuota(this.kuotaTerpilih()).subscribe({
      next: (p) => {
        this.kuotaSaving.set(false);
        this.showKuota.set(false);
        this.sisaKuota.set(p.kuotaLokasi ?? 0);
        this.showToast(`Berhasil menambah ${this.kuotaTerpilih()} kuota lokasi. Total kuota tersedia: ${p.kuotaLokasi ?? 0}.`, "success");
      },
      error: (e) => {
        this.kuotaSaving.set(false);
        this.showToast(e?.error?.message ?? "Gagal memesan kuota lokasi.", "danger");
      }
    });
  }
  ngOnInit() {
    this.load();
    this.loadKuota();
  }
  ngOnDestroy() {
    this.destroyDt();
  }
  destroyDt() {
    if (this.dtInstance) {
      this.dtInstance.destroy();
      this.dtInstance = null;
    }
  }
  initDt() {
    setTimeout(() => {
      const table = $("#tabelLokasi");
      if (!table.length || typeof $ === "undefined" || !$.fn?.dataTable)
        return;
      this.destroyDt();
      this.dtInstance = table.DataTable({
        language: { url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json" },
        pageLength: 10,
        order: [[0, "asc"]],
        // Kolom Koordinat (2), Karyawan Ditugaskan (4), Mode (5), Aksi (7) tidak dapat di-sort
        columnDefs: [{ orderable: false, targets: [2, 4, 5, 7] }]
      });
    }, 100);
  }
  loadKuota() {
    this.svc.getPengaturan().subscribe({
      next: (p) => this.sisaKuota.set(p.kuotaLokasi ?? 0),
      error: () => {
      }
    });
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.destroyDt();
    this.svc.findAll().subscribe({
      next: (list) => {
        this.list.set(list);
        this.loading.set(false);
        this.cdr.detectChanges();
        this.initDt();
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? "Gagal memuat data lokasi.");
      }
    });
  }
  doDelete() {
    const id = this.confirmDeleteId();
    if (id == null)
      return;
    this.deleteBusy.set(true);
    this.svc.delete(id).subscribe({
      next: () => {
        this.deleteBusy.set(false);
        this.confirmDeleteId.set(null);
        this.showToast("Lokasi berhasil dihapus.", "success");
        this.load();
      },
      error: (e) => {
        this.deleteBusy.set(false);
        this.confirmDeleteId.set(null);
        this.showToast(e?.error?.message ?? "Gagal menghapus lokasi.", "danger");
      }
    });
  }
  bukaPengaturan() {
    this.showPengaturan.set(true);
    this.pengaturanLoading.set(true);
    this.svc.getPengaturan().subscribe({
      next: (p) => {
        this.pengaturan.set(p);
        this.sisaKuota.set(p.kuotaLokasi ?? 0);
        this.pengaturanLoading.set(false);
      },
      error: (e) => {
        this.pengaturanLoading.set(false);
        this.showToast(e?.error?.message ?? "Gagal memuat pengaturan.", "danger");
      }
    });
  }
  setSpvTambah(v) {
    this.pengaturan.set(__spreadProps(__spreadValues({}, this.pengaturan()), { spvDapatMenambahLokasi: v }));
  }
  setSpvUpdate(v) {
    this.pengaturan.set(__spreadProps(__spreadValues({}, this.pengaturan()), { spvDapatMemperbaruiLokasi: v }));
  }
  simpanPengaturan() {
    this.pengaturanSaving.set(true);
    this.svc.updatePengaturan(this.pengaturan()).subscribe({
      next: (p) => {
        this.pengaturan.set(p);
        this.pengaturanSaving.set(false);
        this.showPengaturan.set(false);
        this.showToast("Pengaturan tersimpan.", "success");
      },
      error: (e) => {
        this.pengaturanSaving.set(false);
        this.showToast(e?.error?.message ?? "Gagal menyimpan pengaturan.", "danger");
      }
    });
  }
  showToast(msg, type = "success") {
    this.toastType.set(type);
    this.toastMsg.set(msg);
    setTimeout(() => this.toastMsg.set(""), 4e3);
  }
  /** Buka pratinjau Google Maps berdasarkan koordinat. */
  bukaPeta(k) {
    if (k.latitude == null || k.longitude == null)
      return;
    window.open(`https://www.google.com/maps?q=${k.latitude},${k.longitude}`, "_blank");
  }
  // ─────────── Modal: Karyawan Ditugaskan ───────────
  bukaPenugasan(k) {
    this.penugasanLokasi.set(k);
    this.selDivisiIds.set(new Set((k.divisiTugas ?? []).map((d) => d.id)));
    this.selKaryawanIds.set(new Set((k.karyawanTugas ?? []).map((x) => x.id)));
    this.searchKaryawan.set("");
    this.showPenugasan.set(true);
    if (this.divisiOptions().length === 0) {
      this.divSvc.findAll().subscribe({
        next: (l) => this.divisiOptions.set(l),
        error: () => {
        }
      });
    }
    if (this.karyawanOptions().length === 0) {
      this.karSvc.findAll().subscribe({
        next: (l) => this.karyawanOptions.set(l),
        error: () => {
        }
      });
    }
  }
  togglePenugasanDivisi(id, checked) {
    const s = new Set(this.selDivisiIds());
    if (checked)
      s.add(id);
    else
      s.delete(id);
    this.selDivisiIds.set(s);
  }
  togglePenugasanKaryawan(id, checked) {
    const s = new Set(this.selKaryawanIds());
    if (checked)
      s.add(id);
    else
      s.delete(id);
    this.selKaryawanIds.set(s);
  }
  isDivisiSelected(id) {
    return this.selDivisiIds().has(id);
  }
  isKaryawanSelected(id) {
    return this.selKaryawanIds().has(id);
  }
  selKaryawanIdsArray() {
    return Array.from(this.selKaryawanIds());
  }
  filteredKaryawanPenugasan() {
    const kw = this.searchKaryawan().trim().toLowerCase();
    let list = this.karyawanOptions();
    if (kw)
      list = list.filter((k) => k.namaLengkap?.toLowerCase().includes(kw) || k.nip?.toLowerCase().includes(kw));
    return list.slice(0, 50);
  }
  hapusKaryawanPenugasan(id) {
    this.togglePenugasanKaryawan(id, false);
  }
  namaKaryawanById(id) {
    return this.karyawanOptions().find((k) => k.id === id)?.namaLengkap ?? `#${id}`;
  }
  simpanPenugasan() {
    const k = this.penugasanLokasi();
    if (!k || k.id == null)
      return;
    const divisiIds = Array.from(this.selDivisiIds());
    const karyawanIds = Array.from(this.selKaryawanIds());
    let targetTipe = "SEMUA";
    if (karyawanIds.length > 0)
      targetTipe = "KARYAWAN";
    else if (divisiIds.length > 0)
      targetTipe = "DIVISI";
    const req = {
      namaLokasi: k.namaLokasi,
      alamat: k.alamat ?? "",
      latitude: k.latitude ?? null,
      longitude: k.longitude ?? null,
      radiusMeter: k.radiusMeter ?? 100,
      aktif: k.aktif ?? true,
      targetTipe,
      divisiIds: targetTipe === "DIVISI" ? divisiIds : [],
      karyawanIds: targetTipe === "KARYAWAN" ? karyawanIds : [],
      hanyaFingerspot: k.hanyaFingerspot ?? false,
      fingerspotSn: k.fingerspotSn ?? "",
      fingerspotIp: k.fingerspotIp ?? "",
      fingerspotPort: k.fingerspotPort ?? null,
      fingerspotCatatan: k.fingerspotCatatan ?? ""
    };
    this.penugasanSaving.set(true);
    this.svc.update(k.id, req).subscribe({
      next: () => {
        this.penugasanSaving.set(false);
        this.showPenugasan.set(false);
        this.showToast("Penugasan karyawan berhasil disimpan.", "success");
        this.load();
      },
      error: (e) => {
        this.penugasanSaving.set(false);
        this.showToast(e?.error?.message ?? "Gagal menyimpan penugasan.", "danger");
      }
    });
  }
  // ─────────── Modal: Riwayat Perubahan ───────────
  bukaRiwayat(k) {
    if (k.id == null)
      return;
    this.riwayatLokasiNama.set(k.namaLokasi);
    this.riwayatList.set([]);
    this.showRiwayat.set(true);
    this.riwayatLoading.set(true);
    this.svc.findRiwayat(k.id).subscribe({
      next: (list) => {
        this.riwayatList.set(list);
        this.riwayatLoading.set(false);
      },
      error: (e) => {
        this.riwayatLoading.set(false);
        this.showToast(e?.error?.message ?? "Gagal memuat riwayat.", "danger");
      }
    });
  }
  riwayatBadgeClass(tipe) {
    switch (tipe) {
      case "DIBUAT":
        return "bg-success-subtle text-success border border-success-subtle";
      case "DIUBAH":
        return "bg-primary-subtle text-primary border border-primary-subtle";
      case "DIHAPUS":
        return "bg-danger-subtle text-danger border border-danger-subtle";
      default:
        return "bg-secondary-subtle text-secondary";
    }
  }
  riwayatLabelTipe(tipe) {
    switch (tipe) {
      case "DIBUAT":
        return "Dibuat";
      case "DIUBAH":
        return "Diubah";
      case "DIHAPUS":
        return "Dihapus";
      default:
        return tipe;
    }
  }
  static {
    this.\u0275fac = function LokasiListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LokasiListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LokasiListComponent, selectors: [["app-lokasi-list"]], hostBindings: function LokasiListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function LokasiListComponent_click_HostBindingHandler() {
          return ctx.onDocClick();
        }, \u0275\u0275resolveDocument)("scroll", function LokasiListComponent_scroll_HostBindingHandler() {
          return ctx.onWinChange();
        }, \u0275\u0275resolveWindow)("resize", function LokasiListComponent_resize_HostBindingHandler() {
          return ctx.onWinChange();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 47, vars: 11, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0"], [1, "bx", "bx-map-pin", "me-2"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], ["title", "Sisa kuota lokasi", 1, "badge", "bg-light", "text-dark", "border"], [1, "bx", "bx-package", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-cog", "me-1"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "px-3"], ["type", "button", "title", "Kuota lokasi habis. Klik untuk memesan kuota tambahan.", 1, "btn", "btn-success", "btn-sm", "px-3"], [1, "alert", "alert-info", "py-2", "small", "d-flex", "align-items-start", "gap-2"], [1, "bx", "bx-info-circle", "fs-5", "mt-0", "lh-1"], [1, "alert", "alert-danger", "small"], [1, "card", "border-0", "shadow-sm"], [1, "p-4"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.55)", "z-index", "1080"], [1, "shadow", "rounded", "bg-white", "border", 3, "position", "top", "left", "width", "zIndex"], [1, "position-fixed", "bottom-0", "end-0", "p-3", 2, "z-index", "1090"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], ["type", "button", "title", "Kuota lokasi habis. Klik untuk memesan kuota tambahan.", 1, "btn", "btn-success", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-cart-add", "me-1"], [1, "placeholder-glow", "mb-3"], [1, "placeholder", "col-3", "rounded", "d-block", "mb-2", 2, "height", "12px"], [1, "placeholder", "col-7", "rounded", "d-block", 2, "height", "10px"], [1, "bx", "bx-map", 2, "font-size", "3rem"], [1, "mt-2", "mb-3"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["id", "tabelLokasi", 1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [2, "min-width", "200px"], [1, "text-center"], [2, "min-width", "220px"], [1, "text-center", 2, "width", "140px"], [1, "fw-semibold"], [1, "small", "text-muted"], [1, "small", "text-muted", 2, "max-width", "280px"], [1, "text-center", "small"], ["type", "button", "title", "Buka di Google Maps", 1, "btn", "btn-link", "btn-sm", "p-0"], [1, "text-muted"], [1, "badge", "bg-light", "text-dark", "border"], [1, "small"], [1, "badge", "text-dark", 2, "background", "#fcd34d"], ["title", "Presensi hanya dapat dilakukan melalui mesin Fingerspot", 1, "badge", "bg-warning-subtle", "text-warning", "border", "border-warning-subtle"], [1, "badge", "bg-info-subtle", "text-info", "border", "border-info-subtle"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle"], [1, "badge", "bg-secondary-subtle", "text-secondary", "border", "border-secondary-subtle"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "routerLink"], [1, "bx", "bx-edit-alt"], ["type", "button", "title", "Aksi lainnya", 1, "btn", "btn-sm", "btn-light", "border", 3, "click"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "bx", "bx-chip"], ["type", "button", "title", "Buka di Google Maps", 1, "btn", "btn-link", "btn-sm", "p-0", 3, "click"], [1, "bx", "bx-link-external"], [1, "fw-semibold", "text-dark", "mb-1"], [1, "ps-3", "mb-0", "small"], [1, "text-muted", "fst-italic"], [1, "bx", "bx-fingerprint"], [1, "bx", "bx-mobile-alt"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "420px"], [1, "modal-content", "border-0", "shadow"], [1, "modal-body", "p-4", "text-center"], [1, "bx", "bx-error-circle", "text-danger", 2, "font-size", "3rem"], [1, "mt-3"], [1, "text-muted", "small", "mb-4"], [1, "d-flex", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "560px"], [1, "modal-header"], [1, "modal-title", "fw-bold"], [1, "bx", "bx-cog", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-center", "py-4", "text-muted"], [1, "modal-footer", "d-flex", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "row", "align-items-center", "mb-3"], [1, "col-sm-7", "col-form-label", "small"], [1, "col-sm-5", "d-flex", "gap-3"], [1, "form-check"], ["type", "radio", "id", "spvAddYa", "name", "spvAdd", 1, "form-check-input", 3, "change", "checked"], ["for", "spvAddYa", 1, "form-check-label", "small"], ["type", "radio", "id", "spvAddTidak", "name", "spvAdd", 1, "form-check-input", 3, "change", "checked"], ["for", "spvAddTidak", 1, "form-check-label", "small"], [1, "row", "align-items-center", "mb-2"], ["type", "radio", "id", "spvUpdYa", "name", "spvUpd", 1, "form-check-input", 3, "change", "checked"], ["for", "spvUpdYa", 1, "form-check-label", "small"], ["type", "radio", "id", "spvUpdTidak", "name", "spvUpd", 1, "form-check-input", 3, "change", "checked"], ["for", "spvUpdTidak", 1, "form-check-label", "small"], [1, "alert", "alert-info", "py-2", "small", "mt-3", "mb-0"], [1, "bx", "bx-info-circle"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "640px"], [1, "modal-header", "border-0", "pb-0"], ["type", "button", 1, "btn-close", 3, "click", "disabled"], [1, "modal-body", "px-4", "pt-3", "pb-4"], [1, "mb-2", "fw-semibold"], [1, "row", "g-3", "mb-4"], [1, "col-4"], [1, "d-flex", "align-items-center", "mb-4"], [1, "fw-semibold", "me-4", 2, "min-width", "90px"], [1, "fs-3", "fw-bold", 2, "color", "#7367f0"], [1, "my-3", 2, "border-style", "dashed"], ["type", "button", 1, "btn", "btn-primary", "px-4", "py-2", "fw-semibold", 2, "background", "#7367f0", "border-color", "#7367f0", 3, "click", "disabled"], [1, "bx", "bx-right-arrow-alt", "ms-1"], [1, "small", "text-muted", "mt-3"], ["href", "#", 1, "text-decoration-none", 2, "color", "#7367f0"], ["type", "button", 1, "w-100", "border", "rounded-3", "py-3", "px-2", "bg-white", 3, "click"], [1, "fs-5", "fw-semibold", "text-dark"], [1, "small", "text-muted", "mt-1"], [1, "shadow", "rounded", "bg-white", "border", 3, "click"], ["type", "button", 1, "dropdown-item", "py-2", "px-3", 3, "click"], [1, "bx", "bx-user-pin", "me-2"], [1, "bx", "bx-history", "me-2"], [1, "my-1"], ["type", "button", 1, "dropdown-item", "py-2", "px-3", "text-danger", 3, "click"], [1, "bx", "bx-trash", "me-2"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "text-muted", "fw-normal", "ms-2"], [1, "fw-bold", "mb-3"], [1, "text-muted", "small"], [1, "row", "g-2", "mb-4"], [1, "fw-bold", "mb-2"], ["type", "text", "placeholder", "Tulis kata kunci...", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], [1, "d-flex", "flex-wrap", "gap-1", "mb-2"], [1, "border", "rounded", 2, "max-height", "240px", "overflow-y", "auto"], [1, "p-3", "text-muted", "small", "text-center"], [1, "modal-footer", "border-0", "pt-0"], ["type", "button", 1, "btn", "btn-primary", "px-4", 2, "background", "#7367f0", "border-color", "#7367f0", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-light", "border", 3, "click", "disabled"], [1, "col-md-4", "col-sm-6"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked"], [1, "form-check-label", 3, "for"], [1, "badge", "bg-primary-subtle", "text-primary", "border", "border-primary-subtle"], ["type", "button", 1, "btn-close", "btn-close-sm", "ms-1", 2, "font-size", ".6rem", 3, "click"], [1, "form-check", "px-3", "py-2", "border-bottom"], [1, "text-muted", "ms-2"], [1, "text-center", "py-4"], [1, "text-muted", "text-center", "py-4", "mb-0"], ["type", "button", 1, "btn", "btn-light", "border", 3, "click"], [1, "spinner-border", "text-primary"], [1, "table", "align-middle", "mb-0"], [2, "width", "34%"], [1, "d-flex", "align-items-start", "gap-2"], [1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", 2, "width", "38px", "height", "38px", "background", "#28c76f", "color", "#fff", "flex-shrink", "0"], [1, "bx", "bx-user"], [1, "badge", "mt-1"], [1, "badge", "mb-2", 2, "background", "#ff9f43", "color", "#fff"], [1, "badge", "bg-light", "text-dark", "ms-1"], [1, "list-unstyled", "small", "mb-0"], [1, "mb-1"], [1, "text-decoration-underline"], ["role", "alert", 1, "toast", "show", "text-white"], [1, "d-flex"], [1, "toast-body", "small"], ["type", "button", 1, "btn-close", "btn-close-white", "me-2", "m-auto", 3, "click"]], template: function LokasiListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 8);
        \u0275\u0275text(11, "Lokasi Kehadiran");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "h5", 10);
        \u0275\u0275element(14, "i", 11);
        \u0275\u0275text(15, "Lokasi Kehadiran ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "span", 13);
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 15);
        \u0275\u0275listener("click", function LokasiListComponent_Template_button_click_20_listener() {
          return ctx.bukaPengaturan();
        });
        \u0275\u0275element(21, "i", 16);
        \u0275\u0275text(22, " Pengaturan ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, LokasiListComponent_Conditional_23_Template, 3, 0, "button", 17)(24, LokasiListComponent_Conditional_24_Template, 3, 0, "button", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 19);
        \u0275\u0275element(26, "i", 20);
        \u0275\u0275elementStart(27, "div");
        \u0275\u0275text(28, " Atur titik lokasi tempat karyawan diizinkan melakukan presensi. Aktifkan ");
        \u0275\u0275elementStart(29, "strong");
        \u0275\u0275text(30, "Hanya Mesin Fingerspot");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " bila pada lokasi tertentu presensi ");
        \u0275\u0275elementStart(32, "em");
        \u0275\u0275text(33, "wajib");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " dilakukan melalui mesin Fingerspot terdaftar (bukan via aplikasi mobile/web). ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(35, LokasiListComponent_Conditional_35_Template, 2, 1, "div", 21);
        \u0275\u0275elementStart(36, "div", 22);
        \u0275\u0275conditionalCreate(37, LokasiListComponent_Conditional_37_Template, 3, 1, "div", 23)(38, LokasiListComponent_Conditional_38_Template, 6, 1, "div", 24)(39, LokasiListComponent_Conditional_39_Template, 23, 0, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(40, LokasiListComponent_Conditional_40_Template, 15, 3, "div", 26);
        \u0275\u0275conditionalCreate(41, LokasiListComponent_Conditional_41_Template, 17, 4, "div", 26);
        \u0275\u0275conditionalCreate(42, LokasiListComponent_Conditional_42_Template, 34, 4, "div", 26);
        \u0275\u0275conditionalCreate(43, LokasiListComponent_Conditional_43_Template, 3, 10, "div", 27);
        \u0275\u0275conditionalCreate(44, LokasiListComponent_Conditional_44_Template, 26, 9, "div", 26);
        \u0275\u0275conditionalCreate(45, LokasiListComponent_Conditional_45_Template, 16, 2, "div", 26);
        \u0275\u0275conditionalCreate(46, LokasiListComponent_Conditional_46_Template, 6, 7, "div", 28);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate1(" Sisa kuota: ", ctx.sisaKuota(), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.sisaKuota() > 0 ? 23 : 24);
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.error() ? 35 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 37 : ctx.list().length === 0 ? 38 : 39);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPengaturan() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showKuota() ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.openAksiId() !== null ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPenugasan() ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayat() ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 46 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LokasiListComponent, [{
    type: Component,
    args: [{ selector: "app-lokasi-list", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, DatePipe], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Lokasi Kehadiran</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <h5 class="mb-0">\r
      <i class="bx bx-map-pin me-2"></i>Lokasi Kehadiran\r
    </h5>\r
    <div class="d-flex gap-2 flex-wrap align-items-center">\r
      <span class="badge bg-light text-dark border" title="Sisa kuota lokasi">\r
        <i class="bx bx-package me-1"></i> Sisa kuota: {{ sisaKuota() }}\r
      </span>\r
      <button type="button" class="btn btn-primary btn-sm px-3"\r
              (click)="bukaPengaturan()">\r
        <i class="bx bx-cog me-1"></i> Pengaturan\r
      </button>\r
      @if (sisaKuota() > 0) {\r
        <button type="button" class="btn btn-success btn-sm px-3"\r
                (click)="klikTambahLokasi()">\r
          <i class="bx bx-plus me-1"></i> Tambah Lokasi\r
        </button>\r
      } @else {\r
        <button type="button" class="btn btn-success btn-sm px-3"\r
                title="Kuota lokasi habis. Klik untuk memesan kuota tambahan."\r
                (click)="klikTambahLokasi()">\r
          <i class="bx bx-cart-add me-1"></i> Tambah Lokasi (Pesan Kuota)\r
        </button>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- Info -->\r
  <div class="alert alert-info py-2 small d-flex align-items-start gap-2">\r
    <i class="bx bx-info-circle fs-5 mt-0 lh-1"></i>\r
    <div>\r
      Atur titik lokasi tempat karyawan diizinkan melakukan presensi.\r
      Aktifkan <strong>Hanya Mesin Fingerspot</strong> bila pada lokasi tertentu\r
      presensi <em>wajib</em> dilakukan melalui mesin Fingerspot terdaftar\r
      (bukan via aplikasi mobile/web).\r
    </div>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger small">{{ error() }}</div>\r
  }\r
\r
  <div class="card border-0 shadow-sm">\r
    @if (loading()) {\r
      <div class="p-4">\r
        @for (i of [1,2,3]; track i) {\r
          <div class="placeholder-glow mb-3">\r
            <span class="placeholder col-3 rounded d-block mb-2" style="height:12px"></span>\r
            <span class="placeholder col-7 rounded d-block" style="height:10px"></span>\r
          </div>\r
        }\r
      </div>\r
    } @else if (list().length === 0) {\r
      <div class="text-center py-5 text-muted">\r
        <i class="bx bx-map" style="font-size:3rem"></i>\r
        <p class="mt-2 mb-3">Belum ada lokasi kehadiran.</p>\r
        @if (sisaKuota() > 0) {\r
          <button type="button" class="btn btn-primary btn-sm"\r
                  (click)="klikTambahLokasi()">Tambah Sekarang</button>\r
        } @else {\r
          <button type="button" class="btn btn-primary btn-sm"\r
                  (click)="bukaPesanKuota()">Pesan Kuota Lokasi</button>\r
        }\r
      </div>\r
    } @else {\r
      <div class="table-responsive">\r
        <table id="tabelLokasi" class="table table-hover align-middle mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th style="min-width:200px">Nama Lokasi</th>\r
              <th>Alamat</th>\r
              <th class="text-center">Koordinat</th>\r
              <th class="text-center">Radius</th>\r
              <th style="min-width:220px">Karyawan Ditugaskan</th>\r
              <th class="text-center">Mode</th>\r
              <th class="text-center">Status</th>\r
              <th class="text-center" style="width:140px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (k of list(); track k.id) {\r
              <tr>\r
                <td>\r
                  <div class="fw-semibold">{{ k.namaLokasi }}</div>\r
                  @if (k.fingerspotSn || k.fingerspotIp) {\r
                    <div class="small text-muted">\r
                      <i class="bx bx-chip"></i>\r
                      @if (k.fingerspotSn) { SN: {{ k.fingerspotSn }} }\r
                      @if (k.fingerspotSn && k.fingerspotIp) { \xB7 }\r
                      @if (k.fingerspotIp) { {{ k.fingerspotIp }}@if (k.fingerspotPort) {:{{ k.fingerspotPort }}} }\r
                    </div>\r
                  }\r
                </td>\r
                <td class="small text-muted" style="max-width:280px">\r
                  {{ k.alamat || '\u2014' }}\r
                </td>\r
                <td class="text-center small">\r
                  @if (k.latitude != null && k.longitude != null) {\r
                    <button type="button" class="btn btn-link btn-sm p-0"\r
                            title="Buka di Google Maps"\r
                            (click)="bukaPeta(k)">\r
                      {{ k.latitude }}, {{ k.longitude }}\r
                      <i class="bx bx-link-external"></i>\r
                    </button>\r
                  } @else {\r
                    <span class="text-muted">\u2014</span>\r
                  }\r
                </td>\r
                <td class="text-center">\r
                  <span class="badge bg-light text-dark border">\r
                    {{ k.radiusMeter ?? 0 }} m\r
                  </span>\r
                </td>\r
                <td class="small">\r
                  @if (!k.targetTipe || k.targetTipe === 'SEMUA') {\r
                    <span class="badge text-dark"\r
                          style="background:#fcd34d">Semua Karyawan</span>\r
                  } @else if (k.targetTipe === 'DIVISI') {\r
                    <div class="fw-semibold text-dark mb-1">Spesifik Divisi:</div>\r
                    <ol class="ps-3 mb-0 small">\r
                      @for (d of k.divisiTugas ?? []; track d.id) {\r
                        <li>{{ d.nama }}</li>\r
                      }\r
                      @if ((k.divisiTugas?.length ?? 0) === 0) {\r
                        <li class="text-muted fst-italic">\u2014 belum ada \u2014</li>\r
                      }\r
                    </ol>\r
                  } @else if (k.targetTipe === 'KARYAWAN') {\r
                    <div class="fw-semibold text-dark mb-1">Spesifik Karyawan:</div>\r
                    <ol class="ps-3 mb-0 small">\r
                      @for (kk of k.karyawanTugas ?? []; track kk.id) {\r
                        <li>{{ kk.nama }}</li>\r
                      }\r
                      @if ((k.karyawanTugas?.length ?? 0) === 0) {\r
                        <li class="text-muted fst-italic">\u2014 belum ada \u2014</li>\r
                      }\r
                    </ol>\r
                  }\r
                </td>\r
                <td class="text-center">\r
                  @if (k.hanyaFingerspot) {\r
                    <span class="badge bg-warning-subtle text-warning border border-warning-subtle"\r
                          title="Presensi hanya dapat dilakukan melalui mesin Fingerspot">\r
                      <i class="bx bx-fingerprint"></i> Fingerspot Saja\r
                    </span>\r
                  } @else {\r
                    <span class="badge bg-info-subtle text-info border border-info-subtle">\r
                      <i class="bx bx-mobile-alt"></i> Aplikasi & Fingerspot\r
                    </span>\r
                  }\r
                </td>\r
                <td class="text-center">\r
                  @if (k.aktif) {\r
                    <span class="badge bg-success-subtle text-success border border-success-subtle">\r
                      Aktif\r
                    </span>\r
                  } @else {\r
                    <span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle">\r
                      Nonaktif\r
                    </span>\r
                  }\r
                </td>\r
                <td class="text-center">\r
                  <a [routerLink]="['/lokasi', k.id, 'edit']"\r
                     class="btn btn-sm btn-outline-primary me-1" title="Edit">\r
                    <i class="bx bx-edit-alt"></i>\r
                  </a>\r
                  <button type="button"\r
                          class="btn btn-sm btn-light border"\r
                          title="Aksi lainnya"\r
                          (click)="toggleAksi(k.id!, $event)">\r
                    <i class="bx bx-dots-horizontal-rounded"></i>\r
                  </button>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500\u2500\u2500 Modal Konfirmasi Hapus \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (confirmDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1080">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:420px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-body p-4 text-center">\r
            <i class="bx bx-error-circle text-danger" style="font-size:3rem"></i>\r
            <h5 class="mt-3">Hapus lokasi?</h5>\r
            <p class="text-muted small mb-4">\r
              Lokasi yang dihapus tidak dapat dikembalikan kecuali dipulihkan oleh administrator.\r
            </p>\r
            <div class="d-flex justify-content-center gap-2">\r
              <button type="button" class="btn btn-light border btn-sm px-4"\r
                      [disabled]="deleteBusy()"\r
                      (click)="confirmDeleteId.set(null)">Batal</button>\r
              <button type="button" class="btn btn-danger btn-sm px-4"\r
                      [disabled]="deleteBusy()" (click)="doDelete()">\r
                @if (deleteBusy()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
                Hapus\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500\u2500\u2500\u2500 Modal Pengaturan \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showPengaturan()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1080">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:560px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-cog me-2"></i>Pengaturan Lokasi Kehadiran\r
            </h5>\r
            <button type="button" class="btn-close"\r
                    (click)="showPengaturan.set(false)"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (pengaturanLoading()) {\r
              <div class="text-center py-4 text-muted">\r
                <span class="spinner-border spinner-border-sm me-2"></span>\r
                Memuat pengaturan\u2026\r
              </div>\r
            } @else {\r
              <!-- SPV dapat menambah lokasi -->\r
              <div class="row align-items-center mb-3">\r
                <label class="col-sm-7 col-form-label small">\r
                  SPV dapat menambah lokasi\r
                </label>\r
                <div class="col-sm-5 d-flex gap-3">\r
                  <div class="form-check">\r
                    <input type="radio" class="form-check-input" id="spvAddYa"\r
                           name="spvAdd"\r
                           [checked]="pengaturan().spvDapatMenambahLokasi"\r
                           (change)="setSpvTambah(true)">\r
                    <label class="form-check-label small" for="spvAddYa">YA</label>\r
                  </div>\r
                  <div class="form-check">\r
                    <input type="radio" class="form-check-input" id="spvAddTidak"\r
                           name="spvAdd"\r
                           [checked]="!pengaturan().spvDapatMenambahLokasi"\r
                           (change)="setSpvTambah(false)">\r
                    <label class="form-check-label small" for="spvAddTidak">TIDAK</label>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- SPV dapat memperbarui lokasi -->\r
              <div class="row align-items-center mb-2">\r
                <label class="col-sm-7 col-form-label small">\r
                  SPV dapat memperbarui lokasi\r
                </label>\r
                <div class="col-sm-5 d-flex gap-3">\r
                  <div class="form-check">\r
                    <input type="radio" class="form-check-input" id="spvUpdYa"\r
                           name="spvUpd"\r
                           [checked]="pengaturan().spvDapatMemperbaruiLokasi"\r
                           (change)="setSpvUpdate(true)">\r
                    <label class="form-check-label small" for="spvUpdYa">YA</label>\r
                  </div>\r
                  <div class="form-check">\r
                    <input type="radio" class="form-check-input" id="spvUpdTidak"\r
                           name="spvUpd"\r
                           [checked]="!pengaturan().spvDapatMemperbaruiLokasi"\r
                           (change)="setSpvUpdate(false)">\r
                    <label class="form-check-label small" for="spvUpdTidak">TIDAK</label>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="alert alert-info py-2 small mt-3 mb-0">\r
                <i class="bx bx-info-circle"></i>\r
                Pengaturan ini berlaku untuk semua supervisor (SPV) di\r
                perusahaan Anda. Pemilik &amp; Admin tetap dapat\r
                menambah/memperbarui lokasi.\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer d-flex justify-content-center gap-2">\r
            <button type="button" class="btn btn-light border btn-sm px-4"\r
                    [disabled]="pengaturanSaving()"\r
                    (click)="showPengaturan.set(false)">Batal</button>\r
            <button type="button" class="btn btn-primary btn-sm px-4"\r
                    [disabled]="pengaturanLoading() || pengaturanSaving()"\r
                    (click)="simpanPengaturan()">\r
              @if (pengaturanSaving()) {\r
                <span class="spinner-border spinner-border-sm me-2"></span>\r
              }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500\u2500\u2500\u2500 Modal Pesan Kuota Lokasi Tambahan \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showKuota()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1080">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:640px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">Pesan Kuota Lokasi Tambahan</h5>\r
            <button type="button" class="btn-close"\r
                    [disabled]="kuotaSaving()"\r
                    (click)="showKuota.set(false)"></button>\r
          </div>\r
          <div class="modal-body px-4 pt-3 pb-4">\r
            <div class="mb-2 fw-semibold">Kuota</div>\r
            <div class="row g-3 mb-4">\r
              @for (p of paketKuota; track p.kuota) {\r
                <div class="col-4">\r
                  <button type="button"\r
                          class="w-100 border rounded-3 py-3 px-2 bg-white"\r
                          [class.border-success]="kuotaTerpilih() === p.kuota"\r
                          [class.border-2]="kuotaTerpilih() === p.kuota"\r
                          [style.opacity]="kuotaTerpilih() === p.kuota ? 1 : 0.65"\r
                          (click)="pilihKuota(p.kuota)">\r
                    <div class="fs-5 fw-semibold text-dark">{{ p.kuota }}</div>\r
                    <div class="small text-muted mt-1">\r
                      Rp{{ p.harga.toLocaleString('id-ID') }}\r
                    </div>\r
                  </button>\r
                </div>\r
              }\r
            </div>\r
\r
            <div class="d-flex align-items-center mb-4">\r
              <div class="fw-semibold me-4" style="min-width:90px">Total (Rp)</div>\r
              <div class="fs-3 fw-bold" style="color:#7367f0">\r
                {{ totalHargaKuota().toLocaleString('id-ID') }}\r
              </div>\r
            </div>\r
\r
            <hr class="my-3" style="border-style:dashed">\r
\r
            <div class="text-center">\r
              <button type="button" class="btn btn-primary px-4 py-2 fw-semibold"\r
                      style="background:#7367f0;border-color:#7367f0"\r
                      [disabled]="kuotaSaving()"\r
                      (click)="pesanKuota()">\r
                @if (kuotaSaving()) {\r
                  <span class="spinner-border spinner-border-sm me-2"></span>\r
                }\r
                Pesan Kuota <i class="bx bx-right-arrow-alt ms-1"></i>\r
              </button>\r
              <div class="small text-muted mt-3">\r
                Dengan melanjutkan, Anda menyetujui\r
                <a href="#" class="text-decoration-none" style="color:#7367f0">\r
                  S&amp;K Layanan <i class="bx bx-link-external"></i></a>\r
                dan\r
                <a href="#" class="text-decoration-none" style="color:#7367f0">\r
                  Privasi <i class="bx bx-link-external"></i></a>\r
                Kerjoo.\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500\u2500\u2500\u2500 Floating Menu Aksi (fixed \u2014 bebas overflow tabel) \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (openAksiId() !== null) {\r
    <div class="shadow rounded bg-white border"\r
         (click)="$event.stopPropagation()"\r
         [style.position]="'fixed'"\r
         [style.top.px]="aksiPos().top"\r
         [style.left.px]="aksiPos().left"\r
         [style.width.px]="220"\r
         [style.zIndex]="2000">\r
      @for (k of list(); track k.id) {\r
        @if (k.id === openAksiId()) {\r
          <button type="button" class="dropdown-item py-2 px-3"\r
                  (click)="tutupAksi(); bukaPenugasan(k)">\r
            <i class="bx bx-user-pin me-2"></i> Karyawan Ditugaskan\r
          </button>\r
          <button type="button" class="dropdown-item py-2 px-3"\r
                  (click)="tutupAksi(); bukaRiwayat(k)">\r
            <i class="bx bx-history me-2"></i> Riwayat Perubahan\r
          </button>\r
          <hr class="my-1">\r
          <button type="button" class="dropdown-item py-2 px-3 text-danger"\r
                  (click)="tutupAksi(); confirmDeleteId.set(k.id)">\r
            <i class="bx bx-trash me-2"></i> Hapus\r
          </button>\r
        }\r
      }\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500\u2500\u2500\u2500 Modal Karyawan Ditugaskan \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showPenugasan()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1080">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              Karyawan Ditugaskan\r
              @if (penugasanLokasi()) {\r
                <small class="text-muted fw-normal ms-2">\r
                  \u2014 {{ penugasanLokasi()!.namaLokasi }}\r
                </small>\r
              }\r
            </h5>\r
            <button type="button" class="btn-close"\r
                    [disabled]="penugasanSaving()"\r
                    (click)="showPenugasan.set(false)"></button>\r
          </div>\r
          <div class="modal-body px-4 pt-3 pb-4">\r
\r
            <h6 class="fw-bold mb-3"># Spesifik Divisi</h6>\r
            @if (divisiOptions().length === 0) {\r
              <p class="text-muted small">Belum ada divisi.</p>\r
            } @else {\r
              <div class="row g-2 mb-4">\r
                @for (d of divisiOptions(); track d.id) {\r
                  <div class="col-md-4 col-sm-6">\r
                    <div class="form-check">\r
                      <input class="form-check-input" type="checkbox"\r
                             [id]="'pen-div-' + d.id"\r
                             [checked]="isDivisiSelected(d.id!)"\r
                             (change)="togglePenugasanDivisi(d.id!, $any($event.target).checked)">\r
                      <label class="form-check-label" [for]="'pen-div-' + d.id">\r
                        {{ d.namaDivisi }}\r
                      </label>\r
                    </div>\r
                  </div>\r
                }\r
              </div>\r
            }\r
\r
            <h6 class="fw-bold mb-2"># Spesifik Karyawan</h6>\r
            <input type="text" class="form-control mb-2"\r
                   placeholder="Tulis kata kunci..."\r
                   [ngModel]="searchKaryawan()"\r
                   (ngModelChange)="searchKaryawan.set($event)">\r
\r
            @if (selKaryawanIds().size > 0) {\r
              <div class="d-flex flex-wrap gap-1 mb-2">\r
                @for (id of selKaryawanIdsArray(); track id) {\r
                  <span class="badge bg-primary-subtle text-primary border border-primary-subtle">\r
                    {{ namaKaryawanById(id) }}\r
                    <button type="button"\r
                            class="btn-close btn-close-sm ms-1"\r
                            style="font-size:.6rem"\r
                            (click)="hapusKaryawanPenugasan(id)"></button>\r
                  </span>\r
                }\r
              </div>\r
            }\r
\r
            <div class="border rounded"\r
                 style="max-height:240px;overflow-y:auto">\r
              @if (filteredKaryawanPenugasan().length === 0) {\r
                <div class="p-3 text-muted small text-center">\r
                  Tidak ada karyawan ditemukan.\r
                </div>\r
              } @else {\r
                @for (k of filteredKaryawanPenugasan(); track k.id) {\r
                  <div class="form-check px-3 py-2 border-bottom">\r
                    <input class="form-check-input" type="checkbox"\r
                           [id]="'pen-kar-' + k.id"\r
                           [checked]="isKaryawanSelected(k.id!)"\r
                           (change)="togglePenugasanKaryawan(k.id!, $any($event.target).checked)">\r
                    <label class="form-check-label" [for]="'pen-kar-' + k.id">\r
                      <span class="fw-semibold">{{ k.namaLengkap }}</span>\r
                      @if (k.nip) { <small class="text-muted ms-2">{{ k.nip }}</small> }\r
                    </label>\r
                  </div>\r
                }\r
              }\r
            </div>\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button type="button" class="btn btn-primary px-4"\r
                    style="background:#7367f0;border-color:#7367f0"\r
                    [disabled]="penugasanSaving()"\r
                    (click)="simpanPenugasan()">\r
              @if (penugasanSaving()) {\r
                <span class="spinner-border spinner-border-sm me-2"></span>\r
              }\r
              Simpan\r
            </button>\r
            <button type="button" class="btn btn-light border"\r
                    [disabled]="penugasanSaving()"\r
                    (click)="showPenugasan.set(false)">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500\u2500\u2500\u2500 Modal Riwayat Perubahan \u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showRiwayat()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.55);z-index:1080">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              Riwayat Perubahan\r
              <small class="text-muted fw-normal ms-2">\r
                \u2014 {{ riwayatLokasiNama() }}\r
              </small>\r
            </h5>\r
            <button type="button" class="btn-close"\r
                    (click)="showRiwayat.set(false)"></button>\r
          </div>\r
          <div class="modal-body px-4 pt-3 pb-4">\r
            @if (riwayatLoading()) {\r
              <div class="text-center py-4">\r
                <span class="spinner-border text-primary"></span>\r
              </div>\r
            } @else if (riwayatList().length === 0) {\r
              <p class="text-muted text-center py-4 mb-0">\r
                Belum ada riwayat perubahan.\r
              </p>\r
            } @else {\r
              <div class="table-responsive">\r
                <table class="table align-middle mb-0">\r
                  <thead class="table-light">\r
                    <tr>\r
                      <th style="width:34%">User</th>\r
                      <th>Aktivitas</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (r of riwayatList(); track r.id) {\r
                      <tr>\r
                        <td>\r
                          <div class="d-flex align-items-start gap-2">\r
                            <div class="rounded-circle d-inline-flex align-items-center justify-content-center"\r
                                 style="width:38px;height:38px;background:#28c76f;color:#fff;flex-shrink:0">\r
                              <i class="bx bx-user"></i>\r
                            </div>\r
                            <div>\r
                              <div class="fw-semibold">{{ r.changedBy || 'Sistem' }}</div>\r
                              <div class="small text-muted">\r
                                {{ r.changedAt | date:'dd MMM yyyy @ HH:mm' }}\r
                              </div>\r
                              <span class="badge mt-1" [class]="riwayatBadgeClass(r.tipe)">\r
                                {{ riwayatLabelTipe(r.tipe) }}\r
                              </span>\r
                            </div>\r
                          </div>\r
                        </td>\r
                        <td>\r
                          <span class="badge mb-2"\r
                                style="background:#ff9f43;color:#fff">\r
                            Lokasi Kehadiran\r
                            <span class="badge bg-light text-dark ms-1">ID: {{ r.id }}</span>\r
                          </span>\r
                          <ul class="list-unstyled small mb-0">\r
                            @for (a of r.aktivitas; track $index) {\r
                              <li class="mb-1">\r
                                <strong>{{ a.label }}:</strong>\r
                                <span class="text-decoration-underline">{{ a.nilai }}</span>\r
                              </li>\r
                            }\r
                          </ul>\r
                        </td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            }\r
          </div>\r
          <div class="modal-footer border-0 pt-0">\r
            <button type="button" class="btn btn-light border"\r
                    (click)="showRiwayat.set(false)">Tutup</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Toast -->\r
  @if (toastMsg()) {\r
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index:1090">\r
      <div class="toast show text-white"\r
           [class.bg-success]="toastType() === 'success'"\r
           [class.bg-danger]="toastType() === 'danger'"\r
           [class.bg-warning]="toastType() === 'warning'"\r
           role="alert">\r
        <div class="d-flex">\r
          <div class="toast-body small">{{ toastMsg() }}</div>\r
          <button type="button" class="btn-close btn-close-white me-2 m-auto"\r
                  (click)="toastMsg.set('')"></button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
` }]
  }], null, { onDocClick: [{
    type: HostListener,
    args: ["document:click"]
  }], onWinChange: [{
    type: HostListener,
    args: ["window:scroll"]
  }, {
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LokasiListComponent, { className: "LokasiListComponent", filePath: "src/app/features/lokasi/lokasi-list/lokasi-list.component.ts", lineNumber: 25 });
})();
export {
  LokasiListComponent
};
//# sourceMappingURL=chunk-LD3WFARJ.js.map
