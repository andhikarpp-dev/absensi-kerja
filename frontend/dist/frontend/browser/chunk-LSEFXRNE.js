import {
  AbsensiService
} from "./chunk-ZRLBCAEX.js";
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
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-kehadiran/karyawan-kehadiran.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.tanggal;
var _forTrack2 = ($index, $item) => $item.value;
function KaryawanKehadiranComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.karyawan().id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.karyawan().namaLengkap);
  }
}
function KaryawanKehadiranComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanKehadiranComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.karyawan().namaJabatan, " ");
  }
}
function KaryawanKehadiranComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_45_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.BULAN_LABEL[i_r3]);
  }
}
function KaryawanKehadiranComponent_Conditional_45_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    \u0275\u0275property("value", y_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r4);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "span", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Memuat data kehadiran...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "p", 48);
    \u0275\u0275text(3, "Belum ada data kehadiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 49);
    \u0275\u0275text(5, "Belum ada presensi pada bulan ini.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_45_Conditional_39_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(7, "i", 35);
    \u0275\u0275text(8, " Tambah Presensi ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", a_r6.menitTerlambat, " mnt");
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.namaPolaKerja);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Jadwal: ", a_r6.jamKerjaMulai);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_10_Conditional_2_Template, 2, 1, "div", 62);
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r6.jamMasuk));
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.jamKerjaMulai ? 2 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r6.jamMulaiIstirahat));
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r6.jamSelesaiIstirahat));
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Jadwal: ", a_r6.jamKerjaSelesai);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_19_Conditional_2_Template, 2, 1, "div", 62);
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r6.jamKeluar));
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.jamKerjaSelesai ? 2 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r6.jamMulaiLembur));
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r6.jamSelesaiLembur));
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_7_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_8_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 53);
    \u0275\u0275conditionalCreate(10, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_10_Template, 3, 2)(11, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_11_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 53);
    \u0275\u0275conditionalCreate(13, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_13_Template, 2, 1, "div", 61)(14, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_14_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 53);
    \u0275\u0275conditionalCreate(16, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_16_Template, 2, 1, "div", 61)(17, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_17_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 53);
    \u0275\u0275conditionalCreate(19, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_19_Template, 3, 2)(20, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_20_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 53);
    \u0275\u0275conditionalCreate(22, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_22_Template, 2, 1, "div", 61)(23, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_23_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 53);
    \u0275\u0275conditionalCreate(25, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_25_Template, 2, 1, "div", 61)(26, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Conditional_26_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatTanggal(a_r6.tanggal));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(a_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.menitTerlambat > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.namaPolaKerja ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r6.jamMasuk ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.jamMulaiIstirahat ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.jamSelesaiIstirahat ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.jamKeluar ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.jamMulaiLembur ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r6.jamSelesaiLembur ? 25 : 26);
  }
}
function KaryawanKehadiranComponent_Conditional_45_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "table", 52)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 53);
    \u0275\u0275text(7, "Presensi Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 53);
    \u0275\u0275text(9, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 53);
    \u0275\u0275text(11, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 53);
    \u0275\u0275text(13, "Presensi Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 53);
    \u0275\u0275text(15, "Mulai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 53);
    \u0275\u0275text(17, "Selesai Lembur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, KaryawanKehadiranComponent_Conditional_45_Conditional_40_For_20_Template, 27, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 54);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.list());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Menampilkan ", ctx_r0.list().length, " data presensi bulan ", ctx_r0.BULAN_LABEL[ctx_r0.bulan()], " ", ctx_r0.tahun(), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 29)(2, "div", 30)(3, "select", 31);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_45_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBulanChange($event));
    });
    \u0275\u0275repeaterCreate(4, KaryawanKehadiranComponent_Conditional_45_For_5_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 33);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_45_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTahunChange($event));
    });
    \u0275\u0275repeaterCreate(7, KaryawanKehadiranComponent_Conditional_45_For_8_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 34);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_45_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(10, "i", 35);
    \u0275\u0275text(11, " Tambah Presensi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 36)(13, "div", 37)(14, "div", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 39);
    \u0275\u0275text(17, "Hadir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 40)(19, "div", 38);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 39);
    \u0275\u0275text(22, "Terlambat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 41)(24, "div", 38);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 39);
    \u0275\u0275text(27, "Izin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 42)(29, "div", 38);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 39);
    \u0275\u0275text(32, "Sakit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 43)(34, "div", 38);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 39);
    \u0275\u0275text(37, "Alpha");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(38, KaryawanKehadiranComponent_Conditional_45_Conditional_38_Template, 4, 0, "div", 44);
    \u0275\u0275conditionalCreate(39, KaryawanKehadiranComponent_Conditional_45_Conditional_39_Template, 9, 0, "div", 44);
    \u0275\u0275conditionalCreate(40, KaryawanKehadiranComponent_Conditional_45_Conditional_40_Template, 23, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.bulan());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.tahun());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.TAHUN_LIST);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.totalHadir());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalTerlambat());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalIzin());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalSakit());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalAlpha());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.loading() ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loading() && ctx_r0.list().length === 0 ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loading() && ctx_r0.list().length > 0 ? 40 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_46_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.BULAN_LABEL[i_r8]);
  }
}
function KaryawanKehadiranComponent_Conditional_46_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r9 = ctx.$implicit;
    \u0275\u0275property("value", y_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r9);
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "span", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Memuat data ringkasan...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", rks_r10.targetKehadiranJabatan, "% ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDurasi(rks_r10.totalMenitLembur), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDurasi(rks_r10.totalMenitTerlambat), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDurasi(rks_r10.totalMenitToleransi), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDurasi(rks_r10.totalMenitIzinJam), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDurasi(rks_r10.totalMenitIzinJamBelumDiganti), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const rks_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDurasi(rks_r10.menitJamKerjaTidakTerpenuhi), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 0 ");
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 64)(2, "div", 65)(3, "div", 66)(4, "div", 67)(5, "span", 68);
    \u0275\u0275text(6, "Total Hari Jadwal Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 67)(10, "span", 68);
    \u0275\u0275text(11, " Total Hari Kehadiran ");
    \u0275\u0275element(12, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 69);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 67)(16, "span", 68);
    \u0275\u0275text(17, " Total Hari Tidak Masuk ");
    \u0275\u0275element(18, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 69);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 67)(22, "span", 68);
    \u0275\u0275text(23, " Total Hari Cuti ");
    \u0275\u0275element(24, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 69);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 67)(28, "span", 68);
    \u0275\u0275text(29, " Total Hari Izin ");
    \u0275\u0275element(30, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 69);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 67)(34, "span", 68);
    \u0275\u0275text(35, " Persentase Kehadiran ");
    \u0275\u0275element(36, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 75);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 67)(40, "span", 68);
    \u0275\u0275text(41, "Target Kehadiran Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 75);
    \u0275\u0275conditionalCreate(43, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_43_Template, 1, 1)(44, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_44_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 67)(46, "span", 68);
    \u0275\u0275text(47, "Total Jam Jadwal Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 75);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 67)(51, "span", 68);
    \u0275\u0275text(52, " Total Jam Kerja ");
    \u0275\u0275element(53, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 75);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 67)(57, "span", 68);
    \u0275\u0275text(58, " Persentase Capaian Jam Kerja ");
    \u0275\u0275element(59, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 75);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 67)(63, "span", 68);
    \u0275\u0275text(64, " Total Jam Istirahat ");
    \u0275\u0275element(65, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 75);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 67)(69, "span", 68);
    \u0275\u0275text(70, " Total Jam Lembur ");
    \u0275\u0275element(71, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 75);
    \u0275\u0275conditionalCreate(73, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_73_Template, 1, 1)(74, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_74_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 67)(76, "span", 68);
    \u0275\u0275text(77, "Total Jam Openshift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 80);
    \u0275\u0275text(79, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 81)(81, "span", 68);
    \u0275\u0275text(82, "Total Hari Openshift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 69);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 82)(86, "div", 67)(87, "span", 68);
    \u0275\u0275text(88, " Total Jam Terlambat ");
    \u0275\u0275element(89, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 75);
    \u0275\u0275conditionalCreate(91, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_91_Template, 1, 1)(92, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_92_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 67)(94, "span", 68);
    \u0275\u0275text(95, " Total Hari Terlambat ");
    \u0275\u0275element(96, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 69);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 67)(100, "span", 68);
    \u0275\u0275text(101, "Total Denda Keterlambatan(Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 69);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 67)(105, "span", 68);
    \u0275\u0275text(106, "Total Hari Terlambat Presensi Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 69);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 67)(110, "span", 68);
    \u0275\u0275text(111, "Total Denda Terlambat Presensi Keluar(Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 69);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 67)(115, "span", 68);
    \u0275\u0275text(116, " Total Jam Toleransi ");
    \u0275\u0275element(117, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 75);
    \u0275\u0275conditionalCreate(119, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_119_Template, 1, 1)(120, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_120_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 67)(122, "span", 68);
    \u0275\u0275text(123, " Total Hari Toleransi ");
    \u0275\u0275element(124, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span", 69);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 67)(128, "span", 68);
    \u0275\u0275text(129, "Total Jam Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "span", 75);
    \u0275\u0275conditionalCreate(131, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_131_Template, 1, 1)(132, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_132_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 67)(134, "span", 68);
    \u0275\u0275text(135, "Total Jam Izin Jam Belum Diganti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span", 75);
    \u0275\u0275conditionalCreate(137, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_137_Template, 1, 1)(138, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_138_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 67)(140, "span", 68);
    \u0275\u0275text(141, "Total Hari Presensi Keluar Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "span", 69);
    \u0275\u0275text(143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "div", 81)(145, "span", 68);
    \u0275\u0275text(146, " Jam Kerja Tidak Terpenuhi ");
    \u0275\u0275element(147, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "span", 69);
    \u0275\u0275conditionalCreate(149, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_149_Template, 1, 1)(150, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Conditional_150_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const rks_r10 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(rks_r10.totalHariJadwalKerja);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.totalHariKehadiran);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.totalHariTidakMasuk);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.totalHariCuti);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.totalHariIzin);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.persentaseKehadiran);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(rks_r10.targetKehadiranJabatan != null ? 43 : 44);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDurasi(rks_r10.totalMenitJadwalKerja));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDurasi(rks_r10.totalMenitKerja));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.persentaseCapaianJamKerja);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDurasi(rks_r10.totalMenitIstirahat));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(rks_r10.totalMenitLembur > 0 ? 73 : 74);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(rks_r10.totalHariOpenshift);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(rks_r10.totalMenitTerlambat > 0 ? 91 : 92);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(rks_r10.totalHariTerlambat);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(rks_r10.totalDendaKeterlambatan);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(rks_r10.totalHariTerlambatPresensiKeluar);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(rks_r10.totalDendaTerlambatPresensiKeluar);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(rks_r10.totalMenitToleransi > 0 ? 119 : 120);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(rks_r10.totalHariToleransi);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(rks_r10.totalMenitIzinJam > 0 ? 131 : 132);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(rks_r10.totalMenitIzinJamBelumDiganti > 0 ? 137 : 138);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rks_r10.totalHariPresensiKeluarOtomatis);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(rks_r10.menitJamKerjaTidakTerpenuhi > 0 ? 149 : 150);
  }
}
function KaryawanKehadiranComponent_Conditional_46_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 44);
    \u0275\u0275element(2, "i", 88);
    \u0275\u0275elementStart(3, "p", 89);
    \u0275\u0275text(4, "Belum ada data ringkasan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 90);
    \u0275\u0275text(6, "Klik tab ini kembali atau pilih periode lain.");
    \u0275\u0275elementEnd()()();
  }
}
function KaryawanKehadiranComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 63)(2, "select", 31);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_46_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBulanChange($event));
    });
    \u0275\u0275repeaterCreate(3, KaryawanKehadiranComponent_Conditional_46_For_4_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 33);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_46_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTahunChange($event));
    });
    \u0275\u0275repeaterCreate(6, KaryawanKehadiranComponent_Conditional_46_For_7_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, KaryawanKehadiranComponent_Conditional_46_Conditional_10_Template, 4, 0, "div", 44);
    \u0275\u0275conditionalCreate(11, KaryawanKehadiranComponent_Conditional_46_Conditional_11_Template, 151, 24, "div", 23);
    \u0275\u0275conditionalCreate(12, KaryawanKehadiranComponent_Conditional_46_Conditional_12_Template, 7, 0, "div", 23);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.bulan());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.tahun());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.TAHUN_LIST);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u2014 Ringkasan ", ctx_r0.BULAN_LABEL[ctx_r0.bulan()], " ", ctx_r0.tahun());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingRingkasan() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = !ctx_r0.loadingRingkasan() && ctx_r0.ringkasan()) ? 11 : -1, tmp_7_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loadingRingkasan() && !ctx_r0.ringkasan() ? 12 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_47_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.BULAN_LABEL[i_r12]);
  }
}
function KaryawanKehadiranComponent_Conditional_47_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r13 = ctx.$implicit;
    \u0275\u0275property("value", y_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r13);
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "span", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Memuat data...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1, "(Hari ini)");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102)(1, "div", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_5_Conditional_3_Template, 2, 0, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-col-today", ctx_r0.isHariIni(tgl_r14))("catatan-col-normal", !ctx_r0.isHariIni(tgl_r14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.labelHari(tgl_r14));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isHariIni(tgl_r14) ? 3 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, " Presensi Masuk ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th");
    \u0275\u0275text(3, " Presensi Keluar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-sub-today", ctx_r0.isHariIni(tgl_r15))("catatan-sub-normal", !ctx_r0.isHariIni(tgl_r15));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("catatan-sub-today", ctx_r0.isHariIni(tgl_r15))("catatan-sub-normal", !ctx_r0.isHariIni(tgl_r15));
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const absensi_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(absensi_r16.jamMasuk);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", absensi_r16.catatanMasuk || "Tidak Ada Catatan", " ");
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const absensi_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(absensi_r16.jamKeluar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", absensi_r16.catatanKeluar || "Tidak Ada Catatan", " ");
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_1_Template, 4, 2)(2, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_2_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_4_Template, 4, 2)(5, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Conditional_5_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r17 = \u0275\u0275nextContext().$implicit;
    const absensi_r16 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-cell-today", ctx_r0.isHariIni(tgl_r17))("catatan-cell-normal", !ctx_r0.isHariIni(tgl_r17));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r16.jamMasuk ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("catatan-cell-today", ctx_r0.isHariIni(tgl_r17))("catatan-cell-normal", !ctx_r0.isHariIni(tgl_r17));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r16.jamKeluar ? 4 : 5);
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 102)(1, "span", 109);
    \u0275\u0275text(2, "Tidak/Belum Masuk");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tgl_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-cell-today", ctx_r0.isHariIni(tgl_r17))("catatan-cell-kosong", !ctx_r0.isHariIni(tgl_r17));
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_1_Template, 6, 10)(2, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Conditional_2_Template, 3, 4, "td", 105);
  }
  if (rf & 2) {
    const tgl_r17 = ctx.$implicit;
    const absensi_r18 = \u0275\u0275storeLet(\u0275\u0275nextContext(3).getAbsensi(tgl_r17));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r18 ? 1 : 2);
  }
}
function KaryawanKehadiranComponent_Conditional_47_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "table", 97)(2, "thead")(3, "tr", 98);
    \u0275\u0275repeaterCreate(4, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_5_Template, 4, 6, "th", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "tr", 100);
    \u0275\u0275repeaterCreate(7, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_8_Template, 4, 8, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody")(10, "tr", 101);
    \u0275\u0275repeaterCreate(11, KaryawanKehadiranComponent_Conditional_47_Conditional_15_For_12_Template, 3, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.hariMingguIni());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.hariMingguIni());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.hariMingguIni());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.labelMinggu(), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 91)(2, "div", 63)(3, "button", 92);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_47_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mingguSebelumnya());
    });
    \u0275\u0275text(4, " \u2190 Minggu sebelumnya ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 93);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mingguBerikutnya());
    });
    \u0275\u0275text(6, " Minggu berikutnya \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "select", 94);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_47_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBulanChange($event));
    });
    \u0275\u0275repeaterCreate(9, KaryawanKehadiranComponent_Conditional_47_For_10_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 95);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_47_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTahunChange($event));
    });
    \u0275\u0275repeaterCreate(12, KaryawanKehadiranComponent_Conditional_47_For_13_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, KaryawanKehadiranComponent_Conditional_47_Conditional_14_Template, 4, 0, "div", 44);
    \u0275\u0275conditionalCreate(15, KaryawanKehadiranComponent_Conditional_47_Conditional_15_Template, 15, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r0.bulan());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.tahun());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.TAHUN_LIST);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loading() ? 15 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_48_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.BULAN_LABEL[i_r20]);
  }
}
function KaryawanKehadiranComponent_Conditional_48_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r21 = ctx.$implicit;
    \u0275\u0275property("value", y_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r21);
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "span", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Memuat data selfie...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1, "(Hari ini)");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 102)(1, "div", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_5_Conditional_3_Template, 2, 0, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r22 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-col-today", ctx_r0.isHariIni(tgl_r22))("catatan-col-normal", !ctx_r0.isHariIni(tgl_r22));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.labelHari(tgl_r22));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isHariIni(tgl_r22) ? 3 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, " Selfie Masuk ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th");
    \u0275\u0275text(3, " Selfie Keluar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r23 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-sub-today", ctx_r0.isHariIni(tgl_r23))("catatan-sub-normal", !ctx_r0.isHariIni(tgl_r23));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("catatan-sub-today", ctx_r0.isHariIni(tgl_r23))("catatan-sub-normal", !ctx_r0.isHariIni(tgl_r23));
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const absensi_r26 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", absensi_r26.menitTerlambat, " mnt");
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "img", 117);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_1_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r24);
      const tgl_r25 = \u0275\u0275nextContext(2).$implicit;
      const absensi_r26 = \u0275\u0275readContextLet(0);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.bukaFotoModal(absensi_r26.fotoMasukUrl, "Selfie Masuk \u2014 " + ctx_r0.labelHari(tgl_r25)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_1_Conditional_4_Template, 2, 1, "span", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const absensi_r26 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", absensi_r26.fotoMasukUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(absensi_r26.jamMasuk));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r26.menitTerlambat > 0 ? 4 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "i", 120);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Tidak Ada");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "img", 121);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_4_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r27);
      const tgl_r25 = \u0275\u0275nextContext(2).$implicit;
      const absensi_r26 = \u0275\u0275readContextLet(0);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.bukaFotoModal(absensi_r26.fotoKeluarUrl, "Selfie Keluar \u2014 " + ctx_r0.labelHari(tgl_r25)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const absensi_r26 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", absensi_r26.fotoKeluarUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(absensi_r26.jamKeluar));
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "i", 120);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Tidak Ada");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 114);
    \u0275\u0275conditionalCreate(1, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_1_Template, 5, 3, "div", 115)(2, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_2_Template, 4, 0, "div", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 114);
    \u0275\u0275conditionalCreate(4, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_4_Template, 4, 2, "div", 115)(5, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Conditional_5_Template, 4, 0, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tgl_r25 = \u0275\u0275nextContext().$implicit;
    const absensi_r26 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-cell-today", ctx_r0.isHariIni(tgl_r25))("catatan-cell-normal", !ctx_r0.isHariIni(tgl_r25));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r26.fotoMasukUrl ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("catatan-cell-today", ctx_r0.isHariIni(tgl_r25))("catatan-cell-normal", !ctx_r0.isHariIni(tgl_r25));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r26.fotoKeluarUrl ? 4 : 5);
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 122)(1, "span", 109);
    \u0275\u0275text(2, "Tidak/Belum Masuk");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tgl_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("catatan-cell-today", ctx_r0.isHariIni(tgl_r25))("catatan-cell-kosong", !ctx_r0.isHariIni(tgl_r25));
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_1_Template, 6, 10)(2, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Conditional_2_Template, 3, 4, "td", 113);
  }
  if (rf & 2) {
    const tgl_r25 = ctx.$implicit;
    const absensi_r28 = \u0275\u0275storeLet(\u0275\u0275nextContext(3).getAbsensi(tgl_r25));
    \u0275\u0275advance();
    \u0275\u0275conditional(absensi_r28 ? 1 : 2);
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "table", 112)(2, "thead")(3, "tr", 98);
    \u0275\u0275repeaterCreate(4, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_5_Template, 4, 6, "th", 99, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "tr", 100);
    \u0275\u0275repeaterCreate(7, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_8_Template, 4, 8, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody")(10, "tr", 101);
    \u0275\u0275repeaterCreate(11, KaryawanKehadiranComponent_Conditional_48_Conditional_15_For_12_Template, 3, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.hariMingguIni());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.hariMingguIni());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.hariMingguIni());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.labelMinggu(), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_48_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tutupFotoModal());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Conditional_16_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 125)(3, "span", 126);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 127);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tutupFotoModal());
    });
    \u0275\u0275element(6, "i", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "img", 129);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.fotoModalJudul());
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.fotoModalUrl(), \u0275\u0275sanitizeUrl);
  }
}
function KaryawanKehadiranComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 91)(2, "div", 63)(3, "button", 110);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mingguSebelumnya());
    });
    \u0275\u0275text(4, "\u2190 Minggu sebelumnya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 110);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mingguBerikutnya());
    });
    \u0275\u0275text(6, "Minggu berikutnya \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "select", 94);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_48_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBulanChange($event));
    });
    \u0275\u0275repeaterCreate(9, KaryawanKehadiranComponent_Conditional_48_For_10_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 95);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_48_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTahunChange($event));
    });
    \u0275\u0275repeaterCreate(12, KaryawanKehadiranComponent_Conditional_48_For_13_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, KaryawanKehadiranComponent_Conditional_48_Conditional_14_Template, 4, 0, "div", 44);
    \u0275\u0275conditionalCreate(15, KaryawanKehadiranComponent_Conditional_48_Conditional_15_Template, 15, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, KaryawanKehadiranComponent_Conditional_48_Conditional_16_Template, 8, 2, "div", 111);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r0.bulan());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.tahun());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.TAHUN_LIST);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loading() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fotoModalUrl() ? 16 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_49_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r31 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", i_r31);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.BULAN_LABEL[i_r31]);
  }
}
function KaryawanKehadiranComponent_Conditional_49_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r32 = ctx.$implicit;
    \u0275\u0275property("value", y_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r32);
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "span", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Memuat data lokasi...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 136);
    \u0275\u0275element(2, "i", 137);
    \u0275\u0275text(3, " Tidak ada data lokasi GPS untuk periode ini. ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1, "Hari ini");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r33 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.formatJam(a_r33.jamMasuk), ")");
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 143);
    \u0275\u0275element(1, "i", 145);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Lokasi Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_7_Conditional_4_Template, 2, 1, "span", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r33.lokasiMasukUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(a_r33.jamMasuk ? 4 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r33 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.formatJam(a_r33.jamKeluar), ")");
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 144);
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Lokasi Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_8_Conditional_4_Template, 2, 1, "span", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r33.lokasiKeluarUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(a_r33.jamKeluar ? 4 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 138)(2, "div", 139);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_4_Template, 2, 0, "span", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 141)(6, "div", 142);
    \u0275\u0275conditionalCreate(7, KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_7_Template, 5, 2, "a", 143);
    \u0275\u0275conditionalCreate(8, KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Conditional_8_Template, 5, 2, "a", 144);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r33 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatTanggal(a_r33.tanggal));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isHariIni(a_r33.tanggal) ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r33.lokasiMasukUrl ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r33.lokasiKeluarUrl ? 8 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_49_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "table", 132)(2, "thead", 133)(3, "tr")(4, "th", 134);
    \u0275\u0275text(5, "Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 135);
    \u0275\u0275text(7, "Lokasi Kehadiran (GPS)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275conditionalCreate(9, KaryawanKehadiranComponent_Conditional_49_Conditional_13_Conditional_9_Template, 4, 0, "tr");
    \u0275\u0275repeaterCreate(10, KaryawanKehadiranComponent_Conditional_49_Conditional_13_For_11_Template, 9, 4, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.listDenganLokasi().length === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.listDenganLokasi());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r0.listDenganLokasi().length, " data dengan lokasi GPS \xB7 ", ctx_r0.BULAN_LABEL[ctx_r0.bulan()], " ", ctx_r0.tahun(), " ");
  }
}
function KaryawanKehadiranComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 91)(2, "div", 130);
    \u0275\u0275element(3, "i", 131);
    \u0275\u0275text(4, "Lokasi Kehadiran GPS ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "select", 94);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_49_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBulanChange($event));
    });
    \u0275\u0275repeaterCreate(7, KaryawanKehadiranComponent_Conditional_49_For_8_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 95);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_49_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTahunChange($event));
    });
    \u0275\u0275repeaterCreate(10, KaryawanKehadiranComponent_Conditional_49_For_11_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, KaryawanKehadiranComponent_Conditional_49_Conditional_12_Template, 4, 0, "div", 44);
    \u0275\u0275conditionalCreate(13, KaryawanKehadiranComponent_Conditional_49_Conditional_13_Template, 14, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.bulan());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.tahun());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.TAHUN_LIST);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loading() ? 13 : -1);
  }
}
function KaryawanKehadiranComponent_Conditional_50_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275element(1, "i", 172);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Pengaturan pembatasan berhasil disimpan.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanKehadiranComponent_Conditional_50_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275text(1, "Aktif");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_50_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 167);
    \u0275\u0275text(1, "Nonaktif");
    \u0275\u0275elementEnd();
  }
}
function KaryawanKehadiranComponent_Conditional_50_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 170);
  }
}
function KaryawanKehadiranComponent_Conditional_50_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 171);
  }
}
function KaryawanKehadiranComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, KaryawanKehadiranComponent_Conditional_50_Conditional_0_Template, 4, 0, "div", 148);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 149);
    \u0275\u0275element(3, "i", 150);
    \u0275\u0275elementStart(4, "div")(5, "div", 151);
    \u0275\u0275text(6, "Pengaturan Fingerspot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8, "Pembatasan presensi melalui mesin Fingerspot");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 152)(10, "div", 153);
    \u0275\u0275element(11, "i", 154);
    \u0275\u0275elementStart(12, "div", 155);
    \u0275\u0275text(13, " Aktifkan opsi ini untuk ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "membatasi presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " karyawan ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " agar hanya dapat dilakukan melalui mesin ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Fingerspot");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, ". Presensi via aplikasi mobile atau web tidak akan diproses selama opsi ini aktif. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 156);
    \u0275\u0275text(24, " Batasi presensi hanya dapat dilakukan melalui mesin Fingerspot. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 157)(26, "label", 158)(27, "input", 159);
    \u0275\u0275listener("change", function KaryawanKehadiranComponent_Conditional_50_Template_input_change_27_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFingerspot(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 160)(29, "div", 161);
    \u0275\u0275element(30, "i", 162);
    \u0275\u0275elementStart(31, "span", 163);
    \u0275\u0275text(32, "Aktifkan");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, KaryawanKehadiranComponent_Conditional_50_Conditional_33_Template, 2, 0, "span", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 165);
    \u0275\u0275text(35, " Presensi hanya dapat dilakukan melalui mesin Fingerspot. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "label", 158)(37, "input", 159);
    \u0275\u0275listener("change", function KaryawanKehadiranComponent_Conditional_50_Template_input_change_37_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFingerspot(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 160)(39, "div", 161);
    \u0275\u0275element(40, "i", 166);
    \u0275\u0275elementStart(41, "span", 163);
    \u0275\u0275text(42, "Nonaktifkan");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, KaryawanKehadiranComponent_Conditional_50_Conditional_43_Template, 2, 0, "span", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 165);
    \u0275\u0275text(45, " Karyawan dapat melakukan presensi melalui semua metode yang tersedia. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 168)(47, "button", 169);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_50_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpanFingerspot());
    });
    \u0275\u0275conditionalCreate(48, KaryawanKehadiranComponent_Conditional_50_Conditional_48_Template, 1, 0, "span", 170)(49, KaryawanKehadiranComponent_Conditional_50_Conditional_49_Template, 1, 0, "i", 171);
    \u0275\u0275text(50, " Simpan Pengaturan ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.fingerspotToast() ? 0 : -1);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.karyawan()) == null ? null : tmp_2_0.namaLengkap);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("fingerspot-option--active", ctx_r0.fingerspotAktif() === true);
    \u0275\u0275advance();
    \u0275\u0275property("value", true)("checked", ctx_r0.fingerspotAktif() === true);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r0.fingerspotAktif() === true ? "#15803d" : "#6b7280");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.fingerspotAktif() === true ? 33 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fingerspot-option--active", ctx_r0.fingerspotAktif() === false);
    \u0275\u0275advance();
    \u0275\u0275property("value", false)("checked", ctx_r0.fingerspotAktif() === false);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r0.fingerspotAktif() === false ? "#b91c1c" : "#6b7280");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.fingerspotAktif() === false ? 43 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.fingerspotSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fingerspotSaving() ? 48 : 49);
  }
}
function KaryawanKehadiranComponent_Conditional_51_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError());
  }
}
function KaryawanKehadiranComponent_Conditional_51_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r36 = ctx.$implicit;
    \u0275\u0275property("value", t_r36.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r36.label);
  }
}
function KaryawanKehadiranComponent_Conditional_51_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 191)(1, "label", 183);
    \u0275\u0275text(2, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 194);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_51_Conditional_39_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateForm("catatan", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.form().catatan);
  }
}
function KaryawanKehadiranComponent_Conditional_51_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 170);
  }
}
function KaryawanKehadiranComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 174);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_51_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 175)(3, "div", 176)(4, "h5", 177);
    \u0275\u0275element(5, "i", 178);
    \u0275\u0275text(6, "Tambah Presensi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 179);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_51_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 180);
    \u0275\u0275conditionalCreate(9, KaryawanKehadiranComponent_Conditional_51_Conditional_9_Template, 2, 1, "div", 181);
    \u0275\u0275elementStart(10, "div", 182)(11, "label", 183);
    \u0275\u0275text(12, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 182)(15, "label", 183);
    \u0275\u0275text(16, "Tanggal ");
    \u0275\u0275elementStart(17, "span", 185);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 186);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_51_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("tanggal", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 182)(21, "label", 183);
    \u0275\u0275text(22, "Tipe Presensi ");
    \u0275\u0275elementStart(23, "span", 185);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 187);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_51_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("tipePresensi", $event));
    });
    \u0275\u0275repeaterCreate(26, KaryawanKehadiranComponent_Conditional_51_For_27_Template, 2, 2, "option", 32, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 188)(29, "div", 189)(30, "label", 183);
    \u0275\u0275text(31, " Waktu Presensi Mulai ");
    \u0275\u0275elementStart(32, "span", 185);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 190);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_51_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("waktuMulai", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 189)(36, "label", 183);
    \u0275\u0275text(37, "Waktu Presensi Selesai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 190);
    \u0275\u0275listener("ngModelChange", function KaryawanKehadiranComponent_Conditional_51_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("waktuSelesai", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(39, KaryawanKehadiranComponent_Conditional_51_Conditional_39_Template, 4, 1, "div", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 192)(41, "button", 193);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_51_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(42, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 169);
    \u0275\u0275listener("click", function KaryawanKehadiranComponent_Conditional_51_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(44, KaryawanKehadiranComponent_Conditional_51_Conditional_44_Template, 1, 0, "span", 170);
    \u0275\u0275element(45, "i", 171);
    \u0275\u0275text(46, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.modalError() ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ((tmp_2_0 = ctx_r0.karyawan()) == null ? null : tmp_2_0.namaLengkap) || "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.form().tanggal);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.form().tipePresensi);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.TIPE_LIST);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r0.form().waktuMulai);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().waktuSelesai);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().tipePresensi === "MASUK_KELUAR" ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalSaving() ? 44 : -1);
  }
}
var KaryawanKehadiranComponent = class _KaryawanKehadiranComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.karyawanSvc = inject(KaryawanService);
    this.absensiSvc = inject(AbsensiService);
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.ringkasan = signal(null, ...ngDevMode ? [{ debugName: "ringkasan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loadingRingkasan = signal(false, ...ngDevMode ? [{ debugName: "loadingRingkasan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.today = /* @__PURE__ */ new Date();
    this.bulan = signal(this.today.getMonth() + 1, ...ngDevMode ? [{ debugName: "bulan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tahun = signal(this.today.getFullYear(), ...ngDevMode ? [{ debugName: "tahun" }] : (
      /* istanbul ignore next */
      []
    ));
    this.BULAN_LABEL = [
      "",
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
    this.TAHUN_LIST = Array.from({ length: 5 }, (_, i) => this.today.getFullYear() - i);
    this.activeTab = signal("harian", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mingguAktif = signal("", ...ngDevMode ? [{ debugName: "mingguAktif" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariMingguIni = computed(() => {
      const val = this.mingguAktif();
      if (!val)
        return [];
      const senin = new Date(val);
      return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(senin);
        d.setDate(senin.getDate() + i);
        return this.formatDate(d);
      });
    }, ...ngDevMode ? [{ debugName: "hariMingguIni" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelMinggu = computed(() => {
      const days = this.hariMingguIni();
      if (days.length < 7)
        return "";
      const fmt = (s) => {
        const d = new Date(s);
        return `${d.getDate()} ${this.BULAN_LABEL[d.getMonth() + 1].substring(0, 3)} ${d.getFullYear()}`;
      };
      return `${fmt(days[0])} \u2013 ${fmt(days[6])}`;
    }, ...ngDevMode ? [{ debugName: "labelMinggu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.absensiMap = computed(() => {
      const m = /* @__PURE__ */ new Map();
      for (const a of this.list())
        m.set(a.tanggal, a);
      return m;
    }, ...ngDevMode ? [{ debugName: "absensiMap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listDenganCatatan = computed(() => this.list().filter((a) => a.catatanMasuk || a.catatanKeluar), ...ngDevMode ? [{ debugName: "listDenganCatatan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listDenganLokasi = computed(() => this.list().filter((a) => a.lokasiMasukUrl || a.lokasiKeluarUrl), ...ngDevMode ? [{ debugName: "listDenganLokasi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalHadir = computed(() => this.list().filter((a) => a.status === "HADIR").length, ...ngDevMode ? [{ debugName: "totalHadir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalIzin = computed(() => this.list().filter((a) => a.status === "IZIN").length, ...ngDevMode ? [{ debugName: "totalIzin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalSakit = computed(() => this.list().filter((a) => a.status === "SAKIT").length, ...ngDevMode ? [{ debugName: "totalSakit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalAlpha = computed(() => this.list().filter((a) => a.status === "ALPHA").length, ...ngDevMode ? [{ debugName: "totalAlpha" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalTerlambat = computed(() => this.list().filter((a) => a.menitTerlambat > 0).length, ...ngDevMode ? [{ debugName: "totalTerlambat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalHariData = computed(() => this.list().length, ...ngDevMode ? [{ debugName: "totalHariData" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fotoModalUrl = signal(null, ...ngDevMode ? [{ debugName: "fotoModalUrl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fotoModalJudul = signal("", ...ngDevMode ? [{ debugName: "fotoModalJudul" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fingerspotAktif = signal(false, ...ngDevMode ? [{ debugName: "fingerspotAktif" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fingerspotSaving = signal(false, ...ngDevMode ? [{ debugName: "fingerspotSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fingerspotToast = signal(false, ...ngDevMode ? [{ debugName: "fingerspotToast" }] : (
      /* istanbul ignore next */
      []
    ));
    this._fingerspotTimer = null;
    this.showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
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
    this.form = signal({
      tanggal: "",
      // diisi di ngOnInit
      tipePresensi: "MASUK_KELUAR",
      waktuMulai: "08:00",
      waktuSelesai: "",
      catatan: ""
    }, ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
    this.TIPE_LIST = [
      { value: "MASUK_KELUAR", label: "Masuk - Keluar" },
      { value: "ISTIRAHAT", label: "Mulai Istirahat - Selesai Istirahat" },
      { value: "LEMBUR", label: "Mulai Lembur - Selesai Lembur" }
    ];
    this.tipeLabel = computed(() => this.TIPE_LIST.find((t) => t.value === this.form().tipePresensi)?.label ?? "", ...ngDevMode ? [{ debugName: "tipeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.waktuMulaiLabel = computed(() => {
      switch (this.form().tipePresensi) {
        case "ISTIRAHAT":
          return "Mulai Istirahat";
        case "LEMBUR":
          return "Mulai Lembur";
        default:
          return "Waktu Masuk";
      }
    }, ...ngDevMode ? [{ debugName: "waktuMulaiLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.waktuSelesaiLabel = computed(() => {
      switch (this.form().tipePresensi) {
        case "ISTIRAHAT":
          return "Selesai Istirahat";
        case "LEMBUR":
          return "Selesai Lembur";
        default:
          return "Waktu Keluar";
      }
    }, ...ngDevMode ? [{ debugName: "waktuSelesaiLabel" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // ══════════════════════════════════════════════════════════
  //  METHODS
  // ══════════════════════════════════════════════════════════
  // ── Tab ────────────────────────────────────────────────────
  setTab(tab) {
    this.activeTab.set(tab);
    if (tab === "ringkasan")
      this.loadRingkasan();
    if (tab === "catatan" || tab === "selfie")
      this.syncMingguKeHariIni();
  }
  // ── Fingerspot ────────────────────────────────────────────
  setFingerspot(val) {
    this.fingerspotAktif.set(val);
  }
  simpanFingerspot() {
    this.fingerspotSaving.set(true);
    setTimeout(() => {
      this.fingerspotSaving.set(false);
      this.showFingerspotToast();
    }, 600);
  }
  showFingerspotToast() {
    if (this._fingerspotTimer)
      clearTimeout(this._fingerspotTimer);
    this.fingerspotToast.set(true);
    this._fingerspotTimer = setTimeout(() => this.fingerspotToast.set(false), 3e3);
  }
  // ── Helper: format & tanggal ───────────────────────────────
  formatDate(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  getMondayOf(d) {
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const mon = new Date(d);
    mon.setDate(d.getDate() + diff);
    return this.formatDate(mon);
  }
  formatJam(jam) {
    if (!jam)
      return "\u2014";
    return jam.substring(0, 8);
  }
  formatTanggal(tgl) {
    const d = new Date(tgl);
    const hari = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][d.getDay()];
    return `${hari}, ${d.getDate()} ${this.BULAN_LABEL[d.getMonth() + 1].substring(0, 3)} ${d.getFullYear()}`;
  }
  formatDurasi(totalMenit) {
    if (!totalMenit || totalMenit <= 0)
      return "\u2014";
    const jam = Math.floor(totalMenit / 60);
    const mnt = totalMenit % 60;
    const parts = [];
    if (jam > 0)
      parts.push(`${jam}jm`);
    if (mnt > 0)
      parts.push(`${mnt}mn`);
    return parts.join(" ") || "0";
  }
  statusClass(s) {
    const map = {
      HADIR: "badge-hadir",
      IZIN: "badge-izin",
      SAKIT: "badge-sakit",
      ALPHA: "badge-alpha"
    };
    return map[s] ?? "";
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  barWidth(value, max) {
    if (max === 0)
      return 0;
    return Math.min(100, Math.round(value / max * 100));
  }
  // ── Navigasi Minggu ────────────────────────────────────────
  getAbsensi(tgl) {
    return this.absensiMap().get(tgl) ?? null;
  }
  isHariIni(tgl) {
    return tgl === this.formatDate(this.today);
  }
  labelHari(tgl) {
    const d = new Date(tgl);
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][d.getDay()];
    const bln = this.BULAN_LABEL[d.getMonth() + 1].substring(0, 3);
    return `${hari}, ${d.getDate()} ${bln}`;
  }
  mingguSebelumnya() {
    const d = new Date(this.mingguAktif());
    d.setDate(d.getDate() - 7);
    this.mingguAktif.set(this.formatDate(d));
    const b = d.getMonth() + 1, y = d.getFullYear();
    if (b !== this.bulan() || y !== this.tahun()) {
      this.bulan.set(b);
      this.tahun.set(y);
      this.loadData();
    }
  }
  mingguBerikutnya() {
    const d = new Date(this.mingguAktif());
    d.setDate(d.getDate() + 7);
    this.mingguAktif.set(this.formatDate(d));
    const b = d.getMonth() + 1, y = d.getFullYear();
    if (b !== this.bulan() || y !== this.tahun()) {
      this.bulan.set(b);
      this.tahun.set(y);
      this.loadData();
    }
  }
  syncMingguKeHariIni() {
    this.mingguAktif.set(this.getMondayOf(this.today));
    this.bulan.set(this.today.getMonth() + 1);
    this.tahun.set(this.today.getFullYear());
  }
  syncMingguKeBulan() {
    const d = new Date(this.tahun(), this.bulan() - 1, 1);
    this.mingguAktif.set(this.getMondayOf(d));
  }
  // ── Modal Foto ─────────────────────────────────────────────
  bukaFotoModal(url, judul) {
    this.fotoModalUrl.set(url);
    this.fotoModalJudul.set(judul);
  }
  tutupFotoModal() {
    this.fotoModalUrl.set(null);
  }
  // ── Modal ──────────────────────────────────────────────────
  openModal() {
    this.form.set({ tanggal: this.formatDate(this.today), tipePresensi: "MASUK_KELUAR", waktuMulai: "08:00", waktuSelesai: "", catatan: "" });
    this.modalError.set("");
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  updateForm(field, value) {
    this.form.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  simpan() {
    const f = this.form();
    const k = this.karyawan();
    if (!k)
      return;
    if (!f.tanggal) {
      this.modalError.set("Tanggal wajib diisi.");
      return;
    }
    if (!f.waktuMulai) {
      this.modalError.set("Waktu mulai wajib diisi.");
      return;
    }
    this.modalSaving.set(true);
    this.modalError.set("");
    this.absensiSvc.tambahManual(k.id, {
      tanggal: f.tanggal,
      tipePresensi: f.tipePresensi,
      waktuMulai: f.waktuMulai || void 0,
      waktuSelesai: f.waktuSelesai || void 0,
      catatan: f.catatan || void 0
    }).subscribe({
      next: (absensi) => {
        this.list.update((l) => {
          const idx = l.findIndex((a) => a.tanggal === absensi.tanggal);
          if (idx >= 0) {
            const n = [...l];
            n[idx] = absensi;
            return n;
          }
          return [absensi, ...l];
        });
        this.modalSaving.set(false);
        this.showModal.set(false);
      },
      error: (err) => {
        this.modalError.set(err?.error?.message ?? "Gagal menyimpan presensi.");
        this.modalSaving.set(false);
      }
    });
  }
  // ── Data Loading ───────────────────────────────────────────
  loadData() {
    const k = this.karyawan();
    if (!k)
      return;
    this.loading.set(true);
    this.absensiSvc.getRiwayatByKaryawan(k.id, this.bulan(), this.tahun()).subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Gagal memuat data kehadiran.");
        this.loading.set(false);
      }
    });
  }
  loadRingkasan() {
    const k = this.karyawan();
    if (!k)
      return;
    this.loadingRingkasan.set(true);
    this.absensiSvc.getRingkasanByKaryawan(k.id, this.bulan(), this.tahun()).subscribe({
      next: (data) => {
        this.ringkasan.set(data);
        this.loadingRingkasan.set(false);
      },
      error: () => {
        this.loadingRingkasan.set(false);
      }
    });
  }
  onBulanChange(v) {
    this.bulan.set(+v);
    this.loadData();
    if (this.activeTab() === "ringkasan")
      this.loadRingkasan();
    if (this.activeTab() === "catatan" || this.activeTab() === "selfie")
      this.syncMingguKeBulan();
  }
  onTahunChange(v) {
    this.tahun.set(+v);
    this.loadData();
    if (this.activeTab() === "ringkasan")
      this.loadRingkasan();
    if (this.activeTab() === "catatan" || this.activeTab() === "selfie")
      this.syncMingguKeBulan();
  }
  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit() {
    this.mingguAktif.set(this.getMondayOf(this.today));
    this.form.update((f) => __spreadProps(__spreadValues({}, f), { tanggal: this.formatDate(this.today) }));
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.karyawanSvc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        this.loadData();
      },
      error: () => {
        this.error.set("Gagal memuat data karyawan.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function KaryawanKehadiranComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanKehadiranComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanKehadiranComponent, selectors: [["app-karyawan-kehadiran"]], decls: 52, vars: 28, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "info-bar", "card", "border-0", "shadow-sm", "mb-3", "px-4", "py-3", "d-flex", "flex-row", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid #e9ecef", "flex-shrink", "0", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "44px", "height", "44px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.2rem", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-bold", 2, "font-size", "1rem"], [1, "text-muted", "small"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "routerLink"], [1, "bx", "bx-arrow-back", "me-1"], [1, "card", "border-0", "shadow-sm", "mb-3", "px-4", "py-3"], [1, "fw-bold", "mb-2", 2, "font-size", "1.1rem"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "tab-btn", 3, "click"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "card", "border-0", "shadow-sm"], [1, "card", "border-0", "shadow-sm", "mb-0"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [3, "routerLink"], [1, "bx", "bx-user"], [1, "bx", "bx-error-circle", "fs-5"], [1, "px-4", "py-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "border-bottom"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-select", "form-select-sm", 2, "width", "140px", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "form-select", "form-select-sm", 2, "width", "100px", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-tambah", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "stat-row", "px-4", "py-3", "border-bottom", "d-flex", "gap-3", "flex-wrap"], [1, "stat-item", "stat-hadir"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-item", "stat-terlambat"], [1, "stat-item", "stat-izin"], [1, "stat-item", "stat-sakit"], [1, "stat-item", "stat-alpha"], [1, "text-center", "py-5", "text-muted"], [1, "spinner-border", "text-primary", "mb-3"], [1, "mb-0", "small"], [1, "bx", "bx-calendar-x", 2, "font-size", "3.5rem", "opacity", ".2"], [1, "mt-3", "fw-semibold", "mb-1"], [1, "small", "mb-3"], [1, "btn", "btn-tambah", "btn-sm", "px-4", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", "kehadiran-table"], [1, "text-center"], [1, "px-4", "py-2", "border-top", 2, "background", "#fafafa", "font-size", ".78rem", "color", "#9ca3af"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "d-flex", "align-items-center", "gap-2", "mt-1"], [1, "badge-status", 3, "ngClass"], [1, "badge-terlambat"], [1, "text-muted", 2, "font-size", ".72rem", "margin-top", "2px"], [1, "text-muted"], [1, "jam-besar"], [1, "text-muted", 2, "font-size", ".72rem"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "card-body", "p-0"], [1, "row", "g-0"], [1, "col-12", "col-md-6", "rks-col", "rks-col-left"], [1, "rks-row"], [1, "rks-label"], [1, "rks-val-blue"], ["title", "Jumlah hari hadir", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Jumlah hari alpha (tidak hadir tanpa keterangan)", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Jumlah hari cuti", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Jumlah hari izin", 1, "bx", "bx-question-mark", "rks-help"], ["title", "(Hari Hadir / Total Hari Jadwal) \xD7 100", 1, "bx", "bx-question-mark", "rks-help"], [1, "rks-val-dark"], ["title", "Total jam masuk hingga keluar dikurangi istirahat", 1, "bx", "bx-question-mark", "rks-help"], ["title", "(Total Jam Kerja / Total Jam Jadwal) \xD7 100", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Total durasi istirahat", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Total durasi lembur", 1, "bx", "bx-question-mark", "rks-help"], [1, "rks-val-dark", "text-muted"], [1, "rks-row", "rks-row-last"], [1, "col-12", "col-md-6", "rks-col", "rks-col-right"], ["title", "Total durasi keterlambatan masuk", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Jumlah hari dengan keterlambatan masuk", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Total durasi toleransi keterlambatan", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Jumlah hari dengan penggunaan toleransi", 1, "bx", "bx-question-mark", "rks-help"], ["title", "Selisih jam jadwal yang tidak terpenuhi", 1, "bx", "bx-question-mark", "rks-help"], [1, "bx", "bx-bar-chart-alt", 2, "font-size", "3rem", "opacity", ".2"], [1, "mt-3", "mb-0", "small", "fw-semibold"], [1, "small", "mt-1"], [1, "catatan-toolbar", "px-3", "py-3", "border-bottom", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "btn-minggu", "btn-minggu-prev", 3, "click"], [1, "btn-minggu", "btn-minggu-next", 3, "click"], [1, "form-select", "form-select-sm", 2, "width", "130px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "width", "90px", 3, "ngModelChange", "ngModel"], [1, "table-responsive", "catatan-scroll"], [1, "catatan-table"], [1, "catatan-row-hari"], ["colspan", "2", 3, "catatan-col-today", "catatan-col-normal"], [1, "catatan-row-sub"], [1, "catatan-row-data"], ["colspan", "2"], [1, "catatan-hari-lbl"], [1, "catatan-hari-today"], ["colspan", "2", 3, "catatan-cell-today", "catatan-cell-kosong"], [1, "text-muted", "catatan-empty"], [1, "catatan-jam"], [1, "catatan-note"], [1, "catatan-belum"], [1, "btn-minggu", 3, "click"], [1, "foto-modal-backdrop"], [1, "selfie-table"], ["colspan", "2", 1, "selfie-cell", 3, "catatan-cell-today", "catatan-cell-kosong"], [1, "selfie-cell"], [1, "selfie-wrap"], [1, "selfie-kosong"], ["alt", "Selfie Masuk", 1, "selfie-img", 3, "click", "src"], [1, "selfie-jam"], [1, "selfie-late"], [1, "bx", "bx-camera-off"], ["alt", "Selfie Keluar", 1, "selfie-img", 3, "click", "src"], ["colspan", "2", 1, "selfie-cell"], [1, "foto-modal-backdrop", 3, "click"], [1, "foto-modal-box", 3, "click"], [1, "foto-modal-header"], [1, "foto-modal-title"], [1, "foto-modal-close", 3, "click"], [1, "bx", "bx-x"], ["alt", "Foto Selfie", 1, "foto-modal-img", 3, "src"], [1, "fw-semibold", 2, "font-size", ".9rem"], [1, "bx", "bx-map-pin", "me-1", "text-primary"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [1, "table-light"], [1, "px-4", 2, "width", "220px"], [1, "px-3"], ["colspan", "2", 1, "text-center", "py-5", "text-muted"], [1, "bx", "bx-map-alt", "fs-3", "d-block", "mb-2"], [1, "px-4", "py-3"], [1, "fw-semibold"], [1, "badge", "bg-primary-subtle", "text-primary", 2, "font-size", ".7rem"], [1, "px-3", "py-3"], [1, "d-flex", "flex-wrap", "gap-2"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", "d-inline-flex", "align-items-center", "gap-1", 2, "background", "#dcfce7", "color", "#15803d", "border-radius", "8px", "font-size", ".78rem", "padding", ".25rem .65rem", "border", "none", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", "d-inline-flex", "align-items-center", "gap-1", 2, "background", "#dbeafe", "color", "#1d4ed8", "border-radius", "8px", "font-size", ".78rem", "padding", ".25rem .65rem", "border", "none", 3, "href"], [1, "bx", "bx-log-in-circle"], [1, "ms-1", "text-muted", 2, "font-size", ".72rem"], [1, "bx", "bx-log-out-circle"], [1, "fingerspot-toast", "d-flex", "align-items-center", "gap-2"], [1, "px-4", "py-3", "border-bottom", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-fingerprint", "fs-4", "text-primary"], [1, "fw-bold", 2, "font-size", ".95rem"], [1, "px-4", "py-4"], [1, "alert", "alert-light", "border", "d-flex", "align-items-start", "gap-3", "mb-4", 2, "border-radius", "10px"], [1, "bx", "bx-info-circle", "fs-5", "mt-1", "text-primary", "flex-shrink-0"], [2, "font-size", ".85rem", "line-height", "1.6"], [1, "fw-semibold", "mb-3", 2, "font-size", ".88rem", "color", "#374151"], [1, "d-flex", "flex-column", "gap-3"], [1, "fingerspot-option"], ["type", "radio", "name", "fingerspotMode", 1, "fingerspot-radio", 3, "change", "value", "checked"], [1, "fingerspot-option-body"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "bx", "bx-check-shield"], [1, "fw-semibold", 2, "font-size", ".88rem"], [1, "badge", "ms-1", 2, "background", "#dcfce7", "color", "#15803d", "font-size", ".7rem"], [1, "text-muted", 2, "font-size", ".8rem"], [1, "bx", "bx-x-circle"], [1, "badge", "ms-1", 2, "background", "#fee2e2", "color", "#b91c1c", "font-size", ".7rem"], [1, "mt-4"], [1, "btn", "btn-tambah", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"], [1, "bx", "bx-check-circle", "fs-5"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-content", "border-0", "shadow-lg", "rounded-4"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "fw-bold"], [1, "bx", "bx-plus-circle", "me-2", "text-primary"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "pt-3"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "mb-3"], [1, "form-label", "fw-semibold", "small"], ["type", "text", "readonly", "", 1, "form-control", "form-control-sm", 3, "value"], [1, "text-danger"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-3"], [1, "col"], ["type", "time", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "modal-footer", "border-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click", "disabled"], ["rows", "2", "placeholder", "Catatan presensi (opsional)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"]], template: function KaryawanKehadiranComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Karyawan");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, KaryawanKehadiranComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Kehadiran");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275conditionalCreate(17, KaryawanKehadiranComponent_Conditional_17_Template, 1, 1, "img", 11)(18, KaryawanKehadiranComponent_Conditional_18_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23);
        \u0275\u0275conditionalCreate(24, KaryawanKehadiranComponent_Conditional_24_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 16);
        \u0275\u0275element(26, "i", 17);
        \u0275\u0275text(27, " Kembali ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 18)(29, "div", 19);
        \u0275\u0275text(30, "Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 20)(32, "button", 21);
        \u0275\u0275listener("click", function KaryawanKehadiranComponent_Template_button_click_32_listener() {
          return ctx.setTab("harian");
        });
        \u0275\u0275text(33, "Kehadiran Harian");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 21);
        \u0275\u0275listener("click", function KaryawanKehadiranComponent_Template_button_click_34_listener() {
          return ctx.setTab("ringkasan");
        });
        \u0275\u0275text(35, "Ringkasan Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 21);
        \u0275\u0275listener("click", function KaryawanKehadiranComponent_Template_button_click_36_listener() {
          return ctx.setTab("catatan");
        });
        \u0275\u0275text(37, "Rekap Catatan Presensi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 21);
        \u0275\u0275listener("click", function KaryawanKehadiranComponent_Template_button_click_38_listener() {
          return ctx.setTab("selfie");
        });
        \u0275\u0275text(39, "Rekap Selfie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 21);
        \u0275\u0275listener("click", function KaryawanKehadiranComponent_Template_button_click_40_listener() {
          return ctx.setTab("lokasi");
        });
        \u0275\u0275text(41, "Rekap Lokasi Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 21);
        \u0275\u0275listener("click", function KaryawanKehadiranComponent_Template_button_click_42_listener() {
          return ctx.setTab("fingerspot");
        });
        \u0275\u0275text(43, "Fingerspot");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(44, KaryawanKehadiranComponent_Conditional_44_Template, 3, 1, "div", 22);
        \u0275\u0275conditionalCreate(45, KaryawanKehadiranComponent_Conditional_45_Template, 41, 11, "div", 23);
        \u0275\u0275conditionalCreate(46, KaryawanKehadiranComponent_Conditional_46_Template, 13, 8);
        \u0275\u0275conditionalCreate(47, KaryawanKehadiranComponent_Conditional_47_Template, 16, 5, "div", 24);
        \u0275\u0275conditionalCreate(48, KaryawanKehadiranComponent_Conditional_48_Template, 17, 6);
        \u0275\u0275conditionalCreate(49, KaryawanKehadiranComponent_Conditional_49_Template, 14, 5, "div", 24);
        \u0275\u0275conditionalCreate(50, KaryawanKehadiranComponent_Conditional_50_Template, 51, 18);
        \u0275\u0275conditionalCreate(51, KaryawanKehadiranComponent_Conditional_51_Template, 47, 10, "div", 25);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(13);
        \u0275\u0275conditional(((tmp_0_0 = ctx.karyawan()) == null ? null : tmp_0_0.namaLengkap) ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_1_0 = ctx.fotoUrl((tmp_1_0 = ctx.karyawan()) == null ? null : tmp_1_0.fotoProfil)) ? 17 : 18, tmp_1_0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.karyawan()) == null ? null : tmp_2_0.namaLengkap) || "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx.karyawan()) == null ? null : tmp_3_0.namaDivisi) || "Belum ada divisi", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_4_0 = ctx.karyawan()) == null ? null : tmp_4_0.namaJabatan) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c0, (tmp_5_0 = ctx.karyawan()) == null ? null : tmp_5_0.id));
        \u0275\u0275advance(7);
        \u0275\u0275classProp("tab-btn--active", ctx.activeTab() === "harian");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-btn--active", ctx.activeTab() === "ringkasan");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-btn--active", ctx.activeTab() === "catatan");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-btn--active", ctx.activeTab() === "selfie");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-btn--active", ctx.activeTab() === "lokasi");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-btn--active", ctx.activeTab() === "fingerspot");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "harian" ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "ringkasan" ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "catatan" ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "selfie" ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "lokasi" ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "fingerspot" ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal() ? 51 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LayoutComponent], styles: ['@charset "UTF-8";\n\n\n.info-bar[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 9999px;\n  border: none;\n  background: transparent;\n  font-size: 0.82rem;\n  color: #6366f1;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: #ede9fe;\n}\n.tab-btn--active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n.tab-btn--active[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n}\n.stat-row[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 20px;\n  border-radius: 10px;\n  min-width: 80px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.stat-hadir[_ngcontent-%COMP%] {\n  background: #dcfce7;\n}\n.stat-hadir[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.stat-hadir[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.stat-terlambat[_ngcontent-%COMP%] {\n  background: #fef9c3;\n}\n.stat-terlambat[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  color: #a16207;\n}\n.stat-terlambat[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: #a16207;\n}\n.stat-izin[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.stat-izin[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n.stat-izin[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n.stat-sakit[_ngcontent-%COMP%] {\n  background: #fce7f3;\n}\n.stat-sakit[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  color: #be185d;\n}\n.stat-sakit[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: #be185d;\n}\n.stat-alpha[_ngcontent-%COMP%] {\n  background: #fee2e2;\n}\n.stat-alpha[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.stat-alpha[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.btn-tambah[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: background 0.15s;\n}\n.btn-tambah[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  color: #fff;\n}\n.btn-tambah[_ngcontent-%COMP%]:disabled {\n  background: #a5b4fc;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 700;\n  padding: 11px 16px;\n  background: #f9fafb;\n  border-bottom: 1px solid #f1f3f5;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.jam-besar[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.2;\n  letter-spacing: 0.02em;\n}\n.badge-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 9999px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.badge-hadir[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge-izin[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-sakit[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.badge-alpha[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge-terlambat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 9999px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  background: #fef9c3;\n  color: #a16207;\n}\n.catatan-toolbar[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.btn-minggu[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  background: #22c55e;\n  color: #fff;\n}\n.btn-minggu[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n}\n.catatan-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.catatan-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.catatan-row-hari[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 8px 6px;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  font-size: 0.84rem;\n}\n.catatan-col-today[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #14532d;\n}\n.catatan-col-normal[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.catatan-hari-lbl[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.86rem;\n}\n.catatan-hari-today[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 500;\n  color: #166534;\n  margin-top: 2px;\n}\n.catatan-row-sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 6px;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  font-size: 0.78rem;\n}\n.catatan-sub-today[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #14532d;\n}\n.catatan-sub-normal[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.catatan-row-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 12px 10px;\n  border: 1px solid #e5e7eb;\n  font-size: 0.82rem;\n  min-width: 110px;\n}\n.catatan-cell-today[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.catatan-cell-normal[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.catatan-cell-kosong[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  text-align: center;\n  vertical-align: middle !important;\n}\n.catatan-jam[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #111827;\n  background: #f3f4f6;\n  border-radius: 6px;\n  padding: 2px 8px;\n  display: inline-block;\n  margin-bottom: 4px;\n  letter-spacing: 0.02em;\n}\n.catatan-note[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #6b7280;\n  font-style: italic;\n  line-height: 1.4;\n  word-break: break-word;\n}\n.catatan-belum[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #6b7280;\n}\n.catatan-empty[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #d1d5db;\n}\n.rks-col[_ngcontent-%COMP%] {\n  border-top: 1px solid #f1f3f5;\n}\n.rks-col[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n@media (min-width: 768px) {\n  .rks-col[_ngcontent-%COMP%] {\n    border-top: none;\n  }\n  .rks-col.rks-col-right[_ngcontent-%COMP%] {\n    border-left: 1px solid #f1f3f5;\n  }\n}\n.rks-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 20px;\n  border-bottom: 1px solid #f3f4f6;\n  gap: 12px;\n  min-height: 44px;\n}\n.rks-row.rks-row-last[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.rks-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: #374151;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex: 1;\n}\n.rks-help[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  color: #6b7280;\n  font-size: 0.62rem;\n  font-weight: 700;\n  cursor: help;\n  flex-shrink: 0;\n}\n.rks-val-blue[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #6366f1;\n  text-align: right;\n  min-width: 60px;\n  flex-shrink: 0;\n}\n.rks-val-dark[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #111827;\n  text-align: right;\n  min-width: 60px;\n  flex-shrink: 0;\n}\n.selfie-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.selfie-cell[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 10px 8px;\n  border: 1px solid #e5e7eb;\n  min-width: 120px;\n  text-align: center;\n}\n.selfie-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  cursor: zoom-in;\n}\n.selfie-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 110px;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 2px solid #e5e7eb;\n  transition: transform 0.15s, border-color 0.15s;\n}\n.selfie-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n  border-color: #6366f1;\n}\n.selfie-jam[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #374151;\n  background: #f3f4f6;\n  border-radius: 6px;\n  padding: 1px 8px;\n  letter-spacing: 0.02em;\n}\n.selfie-late[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: #fef9c3;\n  color: #a16207;\n  border-radius: 9999px;\n  padding: 1px 8px;\n}\n.selfie-kosong[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 16px 8px;\n  color: #d1d5db;\n}\n.selfie-kosong[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.selfie-kosong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.foto-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.72);\n  z-index: 1090;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.foto-modal-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  max-width: 480px;\n  width: 100%;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_slideUp 0.18s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.foto-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px 10px;\n  border-bottom: 1px solid #f1f3f5;\n}\n.foto-modal-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #111827;\n}\n.foto-modal-close[_ngcontent-%COMP%] {\n  border: none;\n  background: #f3f4f6;\n  border-radius: 8px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #6b7280;\n  transition: background 0.12s;\n}\n.foto-modal-close[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #111;\n}\n.foto-modal-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 70vh;\n  object-fit: contain;\n  display: block;\n}\n.fingerspot-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  background: #fff;\n}\n.fingerspot-option[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n  background: #f5f3ff;\n}\n.fingerspot-option--active[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  background: #f5f3ff;\n}\n.fingerspot-radio[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  accent-color: #6366f1;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fingerspot-option-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.fingerspot-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 2000;\n  background: #166534;\n  color: #fff;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_toastIn 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=karyawan-kehadiran.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanKehadiranComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-kehadiran", standalone: true, imports: [RouterLink, CommonModule, FormsModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          @if (karyawan()?.namaLengkap) {\r
            <li class="breadcrumb-item">\r
              <a [routerLink]="['/karyawan', karyawan()!.id]">{{ karyawan()!.namaLengkap }}</a>\r
            </li>\r
          }\r
          <li class="breadcrumb-item active">Kehadiran</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Info Bar -->\r
  <div class="info-bar card border-0 shadow-sm mb-3 px-4 py-3 d-flex flex-row align-items-center gap-3">\r
    @if (fotoUrl(karyawan()?.fotoProfil); as url) {\r
      <img [src]="url" alt="Foto" class="rounded-circle"\r
           style="width:44px;height:44px;object-fit:cover;border:2px solid #e9ecef;flex-shrink:0" />\r
    } @else {\r
      <div class="rounded-circle d-flex align-items-center justify-content-center"\r
           style="width:44px;height:44px;background:#f3f4f6;color:#9ca3af;font-size:1.2rem;flex-shrink:0">\r
        <i class="bx bx-user"></i>\r
      </div>\r
    }\r
    <div class="flex-grow-1">\r
      <div class="fw-bold" style="font-size:1rem">{{ karyawan()?.namaLengkap || '\u2014' }}</div>\r
      <div class="text-muted small">\r
        {{ karyawan()?.namaDivisi || 'Belum ada divisi' }}\r
        @if (karyawan()?.namaJabatan) { \xB7 {{ karyawan()!.namaJabatan }} }\r
      </div>\r
    </div>\r
    <a [routerLink]="['/karyawan', karyawan()?.id]" class="btn btn-outline-secondary btn-sm px-3">\r
      <i class="bx bx-arrow-back me-1"></i> Kembali\r
    </a>\r
  </div>\r
\r
  <!-- Judul + Tab -->\r
  <div class="card border-0 shadow-sm mb-3 px-4 py-3">\r
    <div class="fw-bold mb-2" style="font-size:1.1rem">Kehadiran</div>\r
    <div class="d-flex gap-2 flex-wrap">\r
      <button class="tab-btn" [class.tab-btn--active]="activeTab() === 'harian'" (click)="setTab('harian')">Kehadiran Harian</button>\r
      <button class="tab-btn" [class.tab-btn--active]="activeTab() === 'ringkasan'" (click)="setTab('ringkasan')">Ringkasan Kehadiran</button>\r
      <button class="tab-btn" [class.tab-btn--active]="activeTab() === 'catatan'" (click)="setTab('catatan')">Rekap Catatan Presensi</button>\r
      <button class="tab-btn" [class.tab-btn--active]="activeTab() === 'selfie'" (click)="setTab('selfie')">Rekap Selfie</button>\r
      <button class="tab-btn" [class.tab-btn--active]="activeTab() === 'lokasi'" (click)="setTab('lokasi')">Rekap Lokasi Kehadiran</button>\r
      <button class="tab-btn" [class.tab-btn--active]="activeTab() === 'fingerspot'" (click)="setTab('fingerspot')">Fingerspot</button>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2 mb-3">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 TAB: Kehadiran Harian \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'harian') {\r
\r
  <!-- Card Utama -->\r
  <div class="card border-0 shadow-sm">\r
\r
    <!-- Filter + Tombol Aksi -->\r
    <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom">\r
      <div class="d-flex align-items-center gap-2">\r
        <select class="form-select form-select-sm" style="width:140px"\r
                [ngModel]="bulan()"\r
                (ngModelChange)="onBulanChange($event)">\r
          @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {\r
            <option [value]="i">{{ BULAN_LABEL[i] }}</option>\r
          }\r
        </select>\r
        <select class="form-select form-select-sm" style="width:100px"\r
                [ngModel]="tahun()"\r
                (ngModelChange)="onTahunChange($event)">\r
          @for (y of TAHUN_LIST; track y) {\r
            <option [value]="y">{{ y }}</option>\r
          }\r
        </select>\r
      </div>\r
      <button class="btn btn-tambah btn-sm px-3" (click)="openModal()">\r
        <i class="bx bx-plus me-1"></i> Tambah Presensi\r
      </button>\r
    </div>\r
\r
    <!-- Statistik -->\r
    <div class="stat-row px-4 py-3 border-bottom d-flex gap-3 flex-wrap">\r
      <div class="stat-item stat-hadir">\r
        <div class="stat-val">{{ totalHadir() }}</div>\r
        <div class="stat-lbl">Hadir</div>\r
      </div>\r
      <div class="stat-item stat-terlambat">\r
        <div class="stat-val">{{ totalTerlambat() }}</div>\r
        <div class="stat-lbl">Terlambat</div>\r
      </div>\r
      <div class="stat-item stat-izin">\r
        <div class="stat-val">{{ totalIzin() }}</div>\r
        <div class="stat-lbl">Izin</div>\r
      </div>\r
      <div class="stat-item stat-sakit">\r
        <div class="stat-val">{{ totalSakit() }}</div>\r
        <div class="stat-lbl">Sakit</div>\r
      </div>\r
      <div class="stat-item stat-alpha">\r
        <div class="stat-val">{{ totalAlpha() }}</div>\r
        <div class="stat-lbl">Alpha</div>\r
      </div>\r
    </div>\r
\r
    <!-- Loading -->\r
    @if (loading()) {\r
      <div class="text-center py-5 text-muted">\r
        <span class="spinner-border text-primary mb-3"></span>\r
        <p class="mb-0 small">Memuat data kehadiran...</p>\r
      </div>\r
    }\r
\r
    <!-- Kosong -->\r
    @if (!loading() && list().length === 0) {\r
      <div class="text-center py-5 text-muted">\r
        <i class="bx bx-calendar-x" style="font-size:3.5rem;opacity:.2"></i>\r
        <p class="mt-3 fw-semibold mb-1">Belum ada data kehadiran</p>\r
        <p class="small mb-3">Belum ada presensi pada bulan ini.</p>\r
        <button class="btn btn-tambah btn-sm px-4" (click)="openModal()">\r
          <i class="bx bx-plus me-1"></i> Tambah Presensi\r
        </button>\r
      </div>\r
    }\r
\r
    <!-- Tabel -->\r
    @if (!loading() && list().length > 0) {\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0 kehadiran-table">\r
          <thead>\r
            <tr>\r
              <th>Tanggal</th>\r
              <th class="text-center">Presensi Masuk</th>\r
              <th class="text-center">Mulai Istirahat</th>\r
              <th class="text-center">Selesai Istirahat</th>\r
              <th class="text-center">Presensi Keluar</th>\r
              <th class="text-center">Mulai Lembur</th>\r
              <th class="text-center">Selesai Lembur</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (a of list(); track a.id) {\r
              <tr>\r
                <!-- Tanggal + Status -->\r
                <td>\r
                  <div class="fw-semibold" style="font-size:.85rem">{{ formatTanggal(a.tanggal) }}</div>\r
                  <div class="d-flex align-items-center gap-2 mt-1">\r
                    <span class="badge-status" [ngClass]="statusClass(a.status)">{{ a.status }}</span>\r
                    @if (a.menitTerlambat > 0) {\r
                      <span class="badge-terlambat">+{{ a.menitTerlambat }} mnt</span>\r
                    }\r
                  </div>\r
                  @if (a.namaPolaKerja) {\r
                    <div class="text-muted" style="font-size:.72rem;margin-top:2px">{{ a.namaPolaKerja }}</div>\r
                  }\r
                </td>\r
                <!-- Presensi Masuk -->\r
                <td class="text-center">\r
                  @if (a.jamMasuk) {\r
                    <div class="jam-besar">{{ formatJam(a.jamMasuk) }}</div>\r
                    @if (a.jamKerjaMulai) {\r
                      <div class="text-muted" style="font-size:.72rem">Jadwal: {{ a.jamKerjaMulai }}</div>\r
                    }\r
                  } @else { <span class="text-muted">\u2014</span> }\r
                </td>\r
                <!-- Mulai Istirahat -->\r
                <td class="text-center">\r
                  @if (a.jamMulaiIstirahat) {\r
                    <div class="jam-besar">{{ formatJam(a.jamMulaiIstirahat) }}</div>\r
                  } @else { <span class="text-muted">\u2014</span> }\r
                </td>\r
                <!-- Selesai Istirahat -->\r
                <td class="text-center">\r
                  @if (a.jamSelesaiIstirahat) {\r
                    <div class="jam-besar">{{ formatJam(a.jamSelesaiIstirahat) }}</div>\r
                  } @else { <span class="text-muted">\u2014</span> }\r
                </td>\r
                <!-- Presensi Keluar -->\r
                <td class="text-center">\r
                  @if (a.jamKeluar) {\r
                    <div class="jam-besar">{{ formatJam(a.jamKeluar) }}</div>\r
                    @if (a.jamKerjaSelesai) {\r
                      <div class="text-muted" style="font-size:.72rem">Jadwal: {{ a.jamKerjaSelesai }}</div>\r
                    }\r
                  } @else { <span class="text-muted">\u2014</span> }\r
                </td>\r
                <!-- Mulai Lembur -->\r
                <td class="text-center">\r
                  @if (a.jamMulaiLembur) {\r
                    <div class="jam-besar">{{ formatJam(a.jamMulaiLembur) }}</div>\r
                  } @else { <span class="text-muted">\u2014</span> }\r
                </td>\r
                <!-- Selesai Lembur -->\r
                <td class="text-center">\r
                  @if (a.jamSelesaiLembur) {\r
                    <div class="jam-besar">{{ formatJam(a.jamSelesaiLembur) }}</div>\r
                  } @else { <span class="text-muted">\u2014</span> }\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer info -->\r
      <div class="px-4 py-2 border-top" style="background:#fafafa;font-size:.78rem;color:#9ca3af">\r
        Menampilkan {{ list().length }} data presensi bulan\r
        {{ BULAN_LABEL[bulan()] }} {{ tahun() }}\r
      </div>\r
    }\r
\r
  </div>\r
\r
  } <!-- end tab harian -->\r
\r
  <!-- \u2550\u2550\u2550 TAB: Ringkasan Kehadiran \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'ringkasan') {\r
\r
  <!-- Filter Bulan & Tahun -->\r
  <div class="card border-0 shadow-sm mb-3 px-4 py-3">\r
    <div class="d-flex align-items-center gap-2 flex-wrap">\r
      <select class="form-select form-select-sm" style="width:140px"\r
              [ngModel]="bulan()"\r
              (ngModelChange)="onBulanChange($event)">\r
        @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {\r
          <option [value]="i">{{ BULAN_LABEL[i] }}</option>\r
        }\r
      </select>\r
      <select class="form-select form-select-sm" style="width:100px"\r
              [ngModel]="tahun()"\r
              (ngModelChange)="onTahunChange($event)">\r
        @for (y of TAHUN_LIST; track y) {\r
          <option [value]="y">{{ y }}</option>\r
        }\r
      </select>\r
      <span class="text-muted small">\u2014 Ringkasan {{ BULAN_LABEL[bulan()] }} {{ tahun() }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  @if (loadingRingkasan()) {\r
    <div class="text-center py-5 text-muted">\r
      <span class="spinner-border text-primary mb-3"></span>\r
      <p class="mb-0 small">Memuat data ringkasan...</p>\r
    </div>\r
  }\r
\r
  <!-- Data tersedia -->\r
  @if (!loadingRingkasan() && ringkasan(); as rks) {\r
    <div class="card border-0 shadow-sm">\r
      <div class="card-body p-0">\r
        <div class="row g-0">\r
\r
          <!-- \u2550\u2550 Kolom Kiri \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
          <div class="col-12 col-md-6 rks-col rks-col-left">\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Hari Jadwal Kerja</span>\r
              <span class="rks-val-blue">{{ rks.totalHariJadwalKerja }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Hari Kehadiran\r
                <i class="bx bx-question-mark rks-help" title="Jumlah hari hadir"></i>\r
              </span>\r
              <span class="rks-val-blue">{{ rks.totalHariKehadiran }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Hari Tidak Masuk\r
                <i class="bx bx-question-mark rks-help" title="Jumlah hari alpha (tidak hadir tanpa keterangan)"></i>\r
              </span>\r
              <span class="rks-val-blue">{{ rks.totalHariTidakMasuk }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Hari Cuti\r
                <i class="bx bx-question-mark rks-help" title="Jumlah hari cuti"></i>\r
              </span>\r
              <span class="rks-val-blue">{{ rks.totalHariCuti }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Hari Izin\r
                <i class="bx bx-question-mark rks-help" title="Jumlah hari izin"></i>\r
              </span>\r
              <span class="rks-val-blue">{{ rks.totalHariIzin }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Persentase Kehadiran\r
                <i class="bx bx-question-mark rks-help" title="(Hari Hadir / Total Hari Jadwal) \xD7 100"></i>\r
              </span>\r
              <span class="rks-val-dark">{{ rks.persentaseKehadiran }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Target Kehadiran Jabatan</span>\r
              <span class="rks-val-dark">\r
                @if (rks.targetKehadiranJabatan != null) { {{ rks.targetKehadiranJabatan }}% }\r
                @else { <span class="text-muted">\u2014</span> }\r
              </span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Jam Jadwal Kerja</span>\r
              <span class="rks-val-dark">{{ formatDurasi(rks.totalMenitJadwalKerja) }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Jam Kerja\r
                <i class="bx bx-question-mark rks-help" title="Total jam masuk hingga keluar dikurangi istirahat"></i>\r
              </span>\r
              <span class="rks-val-dark">{{ formatDurasi(rks.totalMenitKerja) }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Persentase Capaian Jam Kerja\r
                <i class="bx bx-question-mark rks-help" title="(Total Jam Kerja / Total Jam Jadwal) \xD7 100"></i>\r
              </span>\r
              <span class="rks-val-dark">{{ rks.persentaseCapaianJamKerja }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Jam Istirahat\r
                <i class="bx bx-question-mark rks-help" title="Total durasi istirahat"></i>\r
              </span>\r
              <span class="rks-val-dark">{{ formatDurasi(rks.totalMenitIstirahat) }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Jam Lembur\r
                <i class="bx bx-question-mark rks-help" title="Total durasi lembur"></i>\r
              </span>\r
              <span class="rks-val-dark">\r
                @if (rks.totalMenitLembur > 0) { {{ formatDurasi(rks.totalMenitLembur) }} }\r
                @else { <span class="text-muted">\u2014</span> }\r
              </span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Jam Openshift</span>\r
              <span class="rks-val-dark text-muted">\u2014</span>\r
            </div>\r
\r
            <div class="rks-row rks-row-last">\r
              <span class="rks-label">Total Hari Openshift</span>\r
              <span class="rks-val-blue">{{ rks.totalHariOpenshift }}</span>\r
            </div>\r
\r
          </div><!-- /col kiri -->\r
\r
          <!-- \u2550\u2550 Kolom Kanan \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
          <div class="col-12 col-md-6 rks-col rks-col-right">\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Jam Terlambat\r
                <i class="bx bx-question-mark rks-help" title="Total durasi keterlambatan masuk"></i>\r
              </span>\r
              <span class="rks-val-dark">\r
                @if (rks.totalMenitTerlambat > 0) { {{ formatDurasi(rks.totalMenitTerlambat) }} }\r
                @else { <span class="text-muted">\u2014</span> }\r
              </span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Hari Terlambat\r
                <i class="bx bx-question-mark rks-help" title="Jumlah hari dengan keterlambatan masuk"></i>\r
              </span>\r
              <span class="rks-val-blue">{{ rks.totalHariTerlambat }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Denda Keterlambatan(Rp)</span>\r
              <span class="rks-val-blue">{{ rks.totalDendaKeterlambatan }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Hari Terlambat Presensi Keluar</span>\r
              <span class="rks-val-blue">{{ rks.totalHariTerlambatPresensiKeluar }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Denda Terlambat Presensi Keluar(Rp)</span>\r
              <span class="rks-val-blue">{{ rks.totalDendaTerlambatPresensiKeluar }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Jam Toleransi\r
                <i class="bx bx-question-mark rks-help" title="Total durasi toleransi keterlambatan"></i>\r
              </span>\r
              <span class="rks-val-dark">\r
                @if (rks.totalMenitToleransi > 0) { {{ formatDurasi(rks.totalMenitToleransi) }} }\r
                @else { <span class="text-muted">\u2014</span> }\r
              </span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">\r
                Total Hari Toleransi\r
                <i class="bx bx-question-mark rks-help" title="Jumlah hari dengan penggunaan toleransi"></i>\r
              </span>\r
              <span class="rks-val-blue">{{ rks.totalHariToleransi }}</span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Jam Izin Jam</span>\r
              <span class="rks-val-dark">\r
                @if (rks.totalMenitIzinJam > 0) { {{ formatDurasi(rks.totalMenitIzinJam) }} }\r
                @else { <span class="text-muted">\u2014</span> }\r
              </span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Jam Izin Jam Belum Diganti</span>\r
              <span class="rks-val-dark">\r
                @if (rks.totalMenitIzinJamBelumDiganti > 0) { {{ formatDurasi(rks.totalMenitIzinJamBelumDiganti) }} }\r
                @else { <span class="text-muted">\u2014</span> }\r
              </span>\r
            </div>\r
\r
            <div class="rks-row">\r
              <span class="rks-label">Total Hari Presensi Keluar Otomatis</span>\r
              <span class="rks-val-blue">{{ rks.totalHariPresensiKeluarOtomatis }}</span>\r
            </div>\r
\r
            <div class="rks-row rks-row-last">\r
              <span class="rks-label">\r
                Jam Kerja Tidak Terpenuhi\r
                <i class="bx bx-question-mark rks-help" title="Selisih jam jadwal yang tidak terpenuhi"></i>\r
              </span>\r
              <span class="rks-val-blue">\r
                @if (rks.menitJamKerjaTidakTerpenuhi > 0) { {{ formatDurasi(rks.menitJamKerjaTidakTerpenuhi) }} }\r
                @else { 0 }\r
              </span>\r
            </div>\r
\r
          </div><!-- /col kanan -->\r
\r
        </div><!-- /row -->\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Belum ada data -->\r
  @if (!loadingRingkasan() && !ringkasan()) {\r
    <div class="card border-0 shadow-sm">\r
      <div class="text-center py-5 text-muted">\r
        <i class="bx bx-bar-chart-alt" style="font-size:3rem;opacity:.2"></i>\r
        <p class="mt-3 mb-0 small fw-semibold">Belum ada data ringkasan</p>\r
        <p class="small mt-1">Klik tab ini kembali atau pilih periode lain.</p>\r
      </div>\r
    </div>\r
  }\r
\r
  } <!-- end tab ringkasan -->\r
\r
  <!-- \u2550\u2550\u2550 TAB: Rekap Catatan Presensi \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'catatan') {\r
\r
  <div class="card border-0 shadow-sm mb-0">\r
\r
    <!-- \u2500\u2500 Toolbar navigasi minggu \u2500\u2500 -->\r
    <div class="catatan-toolbar px-3 py-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2">\r
\r
      <!-- Tombol navigasi + label minggu -->\r
      <div class="d-flex align-items-center gap-2 flex-wrap">\r
        <button class="btn-minggu btn-minggu-prev" (click)="mingguSebelumnya()">\r
          \u2190 Minggu sebelumnya\r
        </button>\r
        <button class="btn-minggu btn-minggu-next" (click)="mingguBerikutnya()">\r
          Minggu berikutnya \u2192\r
        </button>\r
      </div>\r
\r
      <!-- Filter Bulan & Tahun -->\r
      <div class="d-flex align-items-center gap-2">\r
        <select class="form-select form-select-sm" style="width:130px"\r
                [ngModel]="bulan()"\r
                (ngModelChange)="onBulanChange($event)">\r
          @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {\r
            <option [value]="i">{{ BULAN_LABEL[i] }}</option>\r
          }\r
        </select>\r
        <select class="form-select form-select-sm" style="width:90px"\r
                [ngModel]="tahun()"\r
                (ngModelChange)="onTahunChange($event)">\r
          @for (y of TAHUN_LIST; track y) {\r
            <option [value]="y">{{ y }}</option>\r
          }\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Loading \u2500\u2500 -->\r
    @if (loading()) {\r
      <div class="text-center py-5 text-muted">\r
        <span class="spinner-border text-primary mb-3"></span>\r
        <p class="mb-0 small">Memuat data...</p>\r
      </div>\r
    }\r
\r
    <!-- \u2500\u2500 Tabel mingguan \u2500\u2500 -->\r
    @if (!loading()) {\r
      <div class="table-responsive catatan-scroll">\r
        <table class="catatan-table">\r
\r
          <!-- \u2500\u2500 Baris 1: Nama hari \u2500\u2500 -->\r
          <thead>\r
            <tr class="catatan-row-hari">\r
              @for (tgl of hariMingguIni(); track tgl) {\r
                <th colspan="2"\r
                    [class.catatan-col-today]="isHariIni(tgl)"\r
                    [class.catatan-col-normal]="!isHariIni(tgl)">\r
                  <div class="catatan-hari-lbl">{{ labelHari(tgl) }}</div>\r
                  @if (isHariIni(tgl)) {\r
                    <div class="catatan-hari-today">(Hari ini)</div>\r
                  }\r
                </th>\r
              }\r
            </tr>\r
\r
            <!-- \u2500\u2500 Baris 2: Sub-header Presensi Masuk / Keluar \u2500\u2500 -->\r
            <tr class="catatan-row-sub">\r
              @for (tgl of hariMingguIni(); track tgl) {\r
                <th [class.catatan-sub-today]="isHariIni(tgl)"\r
                    [class.catatan-sub-normal]="!isHariIni(tgl)">\r
                  Presensi Masuk\r
                </th>\r
                <th [class.catatan-sub-today]="isHariIni(tgl)"\r
                    [class.catatan-sub-normal]="!isHariIni(tgl)">\r
                  Presensi Keluar\r
                </th>\r
              }\r
            </tr>\r
          </thead>\r
\r
          <!-- \u2500\u2500 Baris data \u2500\u2500 -->\r
          <tbody>\r
            <tr class="catatan-row-data">\r
              @for (tgl of hariMingguIni(); track tgl) {\r
                @let absensi = getAbsensi(tgl);\r
\r
                @if (absensi) {\r
                  <!-- Presensi Masuk -->\r
                  <td [class.catatan-cell-today]="isHariIni(tgl)"\r
                      [class.catatan-cell-normal]="!isHariIni(tgl)">\r
                    @if (absensi.jamMasuk) {\r
                      <div class="catatan-jam">{{ absensi.jamMasuk }}</div>\r
                      <div class="catatan-note">\r
                        {{ absensi.catatanMasuk || 'Tidak Ada Catatan' }}\r
                      </div>\r
                    } @else {\r
                      <span class="text-muted catatan-empty">\u2014</span>\r
                    }\r
                  </td>\r
                  <!-- Presensi Keluar -->\r
                  <td [class.catatan-cell-today]="isHariIni(tgl)"\r
                      [class.catatan-cell-normal]="!isHariIni(tgl)">\r
                    @if (absensi.jamKeluar) {\r
                      <div class="catatan-jam">{{ absensi.jamKeluar }}</div>\r
                      <div class="catatan-note">\r
                        {{ absensi.catatanKeluar || 'Tidak Ada Catatan' }}\r
                      </div>\r
                    } @else {\r
                      <span class="text-muted catatan-empty">\u2014</span>\r
                    }\r
                  </td>\r
                } @else {\r
                  <!-- Tidak / Belum Masuk (span 2 kolom) -->\r
                  <td colspan="2"\r
                      [class.catatan-cell-today]="isHariIni(tgl)"\r
                      [class.catatan-cell-kosong]="!isHariIni(tgl)">\r
                    <span class="catatan-belum">Tidak/Belum Masuk</span>\r
                  </td>\r
                }\r
              }\r
            </tr>\r
          </tbody>\r
\r
        </table>\r
      </div>\r
\r
      <!-- Footer range minggu -->\r
      <div class="px-4 py-2 border-top"\r
           style="background:#fafafa;font-size:.78rem;color:#9ca3af">\r
        {{ labelMinggu() }}\r
      </div>\r
    }\r
\r
  </div>\r
\r
  } <!-- end tab catatan -->\r
\r
  <!-- \u2550\u2550\u2550 TAB: Rekap Selfie \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'selfie') {\r
\r
  <div class="card border-0 shadow-sm mb-0">\r
\r
    <!-- \u2500\u2500 Toolbar navigasi minggu \u2500\u2500 -->\r
    <div class="catatan-toolbar px-3 py-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2">\r
      <div class="d-flex align-items-center gap-2 flex-wrap">\r
        <button class="btn-minggu" (click)="mingguSebelumnya()">\u2190 Minggu sebelumnya</button>\r
        <button class="btn-minggu" (click)="mingguBerikutnya()">Minggu berikutnya \u2192</button>\r
      </div>\r
      <div class="d-flex align-items-center gap-2">\r
        <select class="form-select form-select-sm" style="width:130px"\r
                [ngModel]="bulan()" (ngModelChange)="onBulanChange($event)">\r
          @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {\r
            <option [value]="i">{{ BULAN_LABEL[i] }}</option>\r
          }\r
        </select>\r
        <select class="form-select form-select-sm" style="width:90px"\r
                [ngModel]="tahun()" (ngModelChange)="onTahunChange($event)">\r
          @for (y of TAHUN_LIST; track y) {\r
            <option [value]="y">{{ y }}</option>\r
          }\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Loading \u2500\u2500 -->\r
    @if (loading()) {\r
      <div class="text-center py-5 text-muted">\r
        <span class="spinner-border text-primary mb-3"></span>\r
        <p class="mb-0 small">Memuat data selfie...</p>\r
      </div>\r
    }\r
\r
    <!-- \u2500\u2500 Tabel mingguan selfie \u2500\u2500 -->\r
    @if (!loading()) {\r
      <div class="table-responsive catatan-scroll">\r
        <table class="selfie-table">\r
\r
          <!-- \u2500\u2500 Baris 1: Nama hari \u2500\u2500 -->\r
          <thead>\r
            <tr class="catatan-row-hari">\r
              @for (tgl of hariMingguIni(); track tgl) {\r
                <th colspan="2"\r
                    [class.catatan-col-today]="isHariIni(tgl)"\r
                    [class.catatan-col-normal]="!isHariIni(tgl)">\r
                  <div class="catatan-hari-lbl">{{ labelHari(tgl) }}</div>\r
                  @if (isHariIni(tgl)) {\r
                    <div class="catatan-hari-today">(Hari ini)</div>\r
                  }\r
                </th>\r
              }\r
            </tr>\r
\r
            <!-- \u2500\u2500 Baris 2: Sub-header \u2500\u2500 -->\r
            <tr class="catatan-row-sub">\r
              @for (tgl of hariMingguIni(); track tgl) {\r
                <th [class.catatan-sub-today]="isHariIni(tgl)"\r
                    [class.catatan-sub-normal]="!isHariIni(tgl)">\r
                  Selfie Masuk\r
                </th>\r
                <th [class.catatan-sub-today]="isHariIni(tgl)"\r
                    [class.catatan-sub-normal]="!isHariIni(tgl)">\r
                  Selfie Keluar\r
                </th>\r
              }\r
            </tr>\r
          </thead>\r
\r
          <!-- \u2500\u2500 Baris data \u2500\u2500 -->\r
          <tbody>\r
            <tr class="catatan-row-data">\r
              @for (tgl of hariMingguIni(); track tgl) {\r
                @let absensi = getAbsensi(tgl);\r
\r
                @if (absensi) {\r
                  <!-- Selfie Masuk -->\r
                  <td [class.catatan-cell-today]="isHariIni(tgl)"\r
                      [class.catatan-cell-normal]="!isHariIni(tgl)"\r
                      class="selfie-cell">\r
                    @if (absensi.fotoMasukUrl) {\r
                      <div class="selfie-wrap">\r
                        <img [src]="absensi.fotoMasukUrl"\r
                             alt="Selfie Masuk"\r
                             class="selfie-img"\r
                             (click)="bukaFotoModal(absensi.fotoMasukUrl, 'Selfie Masuk \u2014 ' + labelHari(tgl))" />\r
                        <div class="selfie-jam">{{ formatJam(absensi.jamMasuk) }}</div>\r
                        @if (absensi.menitTerlambat > 0) {\r
                          <span class="selfie-late">+{{ absensi.menitTerlambat }} mnt</span>\r
                        }\r
                      </div>\r
                    } @else {\r
                      <div class="selfie-kosong">\r
                        <i class="bx bx-camera-off"></i>\r
                        <span>Tidak Ada</span>\r
                      </div>\r
                    }\r
                  </td>\r
\r
                  <!-- Selfie Keluar -->\r
                  <td [class.catatan-cell-today]="isHariIni(tgl)"\r
                      [class.catatan-cell-normal]="!isHariIni(tgl)"\r
                      class="selfie-cell">\r
                    @if (absensi.fotoKeluarUrl) {\r
                      <div class="selfie-wrap">\r
                        <img [src]="absensi.fotoKeluarUrl"\r
                             alt="Selfie Keluar"\r
                             class="selfie-img"\r
                             (click)="bukaFotoModal(absensi.fotoKeluarUrl, 'Selfie Keluar \u2014 ' + labelHari(tgl))" />\r
                        <div class="selfie-jam">{{ formatJam(absensi.jamKeluar) }}</div>\r
                      </div>\r
                    } @else {\r
                      <div class="selfie-kosong">\r
                        <i class="bx bx-camera-off"></i>\r
                        <span>Tidak Ada</span>\r
                      </div>\r
                    }\r
                  </td>\r
\r
                } @else {\r
                  <!-- Tidak / Belum Masuk -->\r
                  <td colspan="2"\r
                      [class.catatan-cell-today]="isHariIni(tgl)"\r
                      [class.catatan-cell-kosong]="!isHariIni(tgl)"\r
                      class="selfie-cell">\r
                    <span class="catatan-belum">Tidak/Belum Masuk</span>\r
                  </td>\r
                }\r
              }\r
            </tr>\r
          </tbody>\r
\r
        </table>\r
      </div>\r
\r
      <!-- Footer range minggu -->\r
      <div class="px-4 py-2 border-top"\r
           style="background:#fafafa;font-size:.78rem;color:#9ca3af">\r
        {{ labelMinggu() }}\r
      </div>\r
    }\r
\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Foto Selfie \u2500\u2500 -->\r
  @if (fotoModalUrl()) {\r
    <div class="foto-modal-backdrop" (click)="tutupFotoModal()">\r
      <div class="foto-modal-box" (click)="$event.stopPropagation()">\r
        <div class="foto-modal-header">\r
          <span class="foto-modal-title">{{ fotoModalJudul() }}</span>\r
          <button class="foto-modal-close" (click)="tutupFotoModal()">\r
            <i class="bx bx-x"></i>\r
          </button>\r
        </div>\r
        <img [src]="fotoModalUrl()!" alt="Foto Selfie" class="foto-modal-img" />\r
      </div>\r
    </div>\r
  }\r
\r
  } <!-- end tab selfie -->\r
\r
  <!-- \u2550\u2550\u2550 TAB: Rekap Lokasi Kehadiran \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'lokasi') {\r
\r
  <div class="card border-0 shadow-sm mb-0">\r
\r
    <!-- Toolbar filter bulan/tahun -->\r
    <div class="catatan-toolbar px-3 py-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2">\r
      <div class="fw-semibold" style="font-size:.9rem">\r
        <i class="bx bx-map-pin me-1 text-primary"></i>Lokasi Kehadiran GPS\r
      </div>\r
      <div class="d-flex align-items-center gap-2">\r
        <select class="form-select form-select-sm" style="width:130px"\r
                [ngModel]="bulan()" (ngModelChange)="onBulanChange($event)">\r
          @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {\r
            <option [value]="i">{{ BULAN_LABEL[i] }}</option>\r
          }\r
        </select>\r
        <select class="form-select form-select-sm" style="width:90px"\r
                [ngModel]="tahun()" (ngModelChange)="onTahunChange($event)">\r
          @for (y of TAHUN_LIST; track y) {\r
            <option [value]="y">{{ y }}</option>\r
          }\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Loading -->\r
    @if (loading()) {\r
      <div class="text-center py-5 text-muted">\r
        <span class="spinner-border text-primary mb-3"></span>\r
        <p class="mb-0 small">Memuat data lokasi...</p>\r
      </div>\r
    }\r
\r
    @if (!loading()) {\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead class="table-light">\r
            <tr>\r
              <th class="px-4" style="width:220px">Tanggal</th>\r
              <th class="px-3">Lokasi Kehadiran (GPS)</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (listDenganLokasi().length === 0) {\r
              <tr>\r
                <td colspan="2" class="text-center py-5 text-muted">\r
                  <i class="bx bx-map-alt fs-3 d-block mb-2"></i>\r
                  Tidak ada data lokasi GPS untuk periode ini.\r
                </td>\r
              </tr>\r
            }\r
            @for (a of listDenganLokasi(); track a.tanggal) {\r
              <tr>\r
                <!-- Tanggal -->\r
                <td class="px-4 py-3">\r
                  <div class="fw-semibold">{{ formatTanggal(a.tanggal) }}</div>\r
                  @if (isHariIni(a.tanggal)) {\r
                    <span class="badge bg-primary-subtle text-primary" style="font-size:.7rem">Hari ini</span>\r
                  }\r
                </td>\r
                <!-- Lokasi GPS -->\r
                <td class="px-3 py-3">\r
                  <div class="d-flex flex-wrap gap-2">\r
                    @if (a.lokasiMasukUrl) {\r
                      <a [href]="a.lokasiMasukUrl" target="_blank" rel="noopener"\r
                         class="btn btn-sm d-inline-flex align-items-center gap-1"\r
                         style="background:#dcfce7;color:#15803d;border-radius:8px;font-size:.78rem;padding:.25rem .65rem;border:none">\r
                        <i class="bx bx-log-in-circle"></i>\r
                        <span>Lokasi Masuk</span>\r
                        @if (a.jamMasuk) {\r
                          <span class="ms-1 text-muted" style="font-size:.72rem">({{ formatJam(a.jamMasuk) }})</span>\r
                        }\r
                      </a>\r
                    }\r
                    @if (a.lokasiKeluarUrl) {\r
                      <a [href]="a.lokasiKeluarUrl" target="_blank" rel="noopener"\r
                         class="btn btn-sm d-inline-flex align-items-center gap-1"\r
                         style="background:#dbeafe;color:#1d4ed8;border-radius:8px;font-size:.78rem;padding:.25rem .65rem;border:none">\r
                        <i class="bx bx-log-out-circle"></i>\r
                        <span>Lokasi Keluar</span>\r
                        @if (a.jamKeluar) {\r
                          <span class="ms-1 text-muted" style="font-size:.72rem">({{ formatJam(a.jamKeluar) }})</span>\r
                        }\r
                      </a>\r
                    }\r
                  </div>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer info -->\r
      <div class="px-4 py-2 border-top"\r
           style="background:#fafafa;font-size:.78rem;color:#9ca3af">\r
        {{ listDenganLokasi().length }} data dengan lokasi GPS \xB7 {{ BULAN_LABEL[bulan()] }} {{ tahun() }}\r
      </div>\r
    }\r
\r
  </div>\r
\r
  } <!-- end tab lokasi -->\r
\r
  <!-- \u2550\u2550\u2550 TAB: Fingerspot \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'fingerspot') {\r
\r
  <!-- Toast notifikasi -->\r
  @if (fingerspotToast()) {\r
    <div class="fingerspot-toast d-flex align-items-center gap-2">\r
      <i class="bx bx-check-circle fs-5"></i>\r
      <span>Pengaturan pembatasan berhasil disimpan.</span>\r
    </div>\r
  }\r
\r
  <div class="card border-0 shadow-sm mb-0">\r
\r
    <!-- Header -->\r
    <div class="px-4 py-3 border-bottom d-flex align-items-center gap-2">\r
      <i class="bx bx-fingerprint fs-4 text-primary"></i>\r
      <div>\r
        <div class="fw-bold" style="font-size:.95rem">Pengaturan Fingerspot</div>\r
        <div class="text-muted small">Pembatasan presensi melalui mesin Fingerspot</div>\r
      </div>\r
    </div>\r
\r
    <!-- Konten -->\r
    <div class="px-4 py-4">\r
\r
      <!-- Deskripsi -->\r
      <div class="alert alert-light border d-flex align-items-start gap-3 mb-4"\r
           style="border-radius:10px">\r
        <i class="bx bx-info-circle fs-5 mt-1 text-primary flex-shrink-0"></i>\r
        <div style="font-size:.85rem;line-height:1.6">\r
          Aktifkan opsi ini untuk <strong>membatasi presensi</strong> karyawan\r
          <strong>{{ karyawan()?.namaLengkap }}</strong> agar hanya dapat dilakukan\r
          melalui mesin <strong>Fingerspot</strong>. Presensi via aplikasi mobile atau\r
          web tidak akan diproses selama opsi ini aktif.\r
        </div>\r
      </div>\r
\r
      <!-- Radio Button -->\r
      <div class="fw-semibold mb-3" style="font-size:.88rem;color:#374151">\r
        Batasi presensi hanya dapat dilakukan melalui mesin Fingerspot.\r
      </div>\r
\r
      <div class="d-flex flex-column gap-3">\r
\r
        <!-- Aktifkan -->\r
        <label class="fingerspot-option"\r
               [class.fingerspot-option--active]="fingerspotAktif() === true">\r
          <input type="radio" name="fingerspotMode"\r
                 [value]="true"\r
                 [checked]="fingerspotAktif() === true"\r
                 (change)="setFingerspot(true)"\r
                 class="fingerspot-radio" />\r
          <div class="fingerspot-option-body">\r
            <div class="d-flex align-items-center gap-2 mb-1">\r
              <i class="bx bx-check-shield"\r
                 [style.color]="fingerspotAktif() === true ? '#15803d' : '#6b7280'"></i>\r
              <span class="fw-semibold" style="font-size:.88rem">Aktifkan</span>\r
              @if (fingerspotAktif() === true) {\r
                <span class="badge ms-1"\r
                      style="background:#dcfce7;color:#15803d;font-size:.7rem">Aktif</span>\r
              }\r
            </div>\r
            <div class="text-muted" style="font-size:.8rem">\r
              Presensi hanya dapat dilakukan melalui mesin Fingerspot.\r
            </div>\r
          </div>\r
        </label>\r
\r
        <!-- Nonaktifkan -->\r
        <label class="fingerspot-option"\r
               [class.fingerspot-option--active]="fingerspotAktif() === false">\r
          <input type="radio" name="fingerspotMode"\r
                 [value]="false"\r
                 [checked]="fingerspotAktif() === false"\r
                 (change)="setFingerspot(false)"\r
                 class="fingerspot-radio" />\r
          <div class="fingerspot-option-body">\r
            <div class="d-flex align-items-center gap-2 mb-1">\r
              <i class="bx bx-x-circle"\r
                 [style.color]="fingerspotAktif() === false ? '#b91c1c' : '#6b7280'"></i>\r
              <span class="fw-semibold" style="font-size:.88rem">Nonaktifkan</span>\r
              @if (fingerspotAktif() === false) {\r
                <span class="badge ms-1"\r
                      style="background:#fee2e2;color:#b91c1c;font-size:.7rem">Nonaktif</span>\r
              }\r
            </div>\r
            <div class="text-muted" style="font-size:.8rem">\r
              Karyawan dapat melakukan presensi melalui semua metode yang tersedia.\r
            </div>\r
          </div>\r
        </label>\r
\r
      </div>\r
\r
      <!-- Tombol Simpan -->\r
      <div class="mt-4">\r
        <button class="btn btn-tambah btn-sm px-4"\r
                (click)="simpanFingerspot()"\r
                [disabled]="fingerspotSaving()">\r
          @if (fingerspotSaving()) {\r
            <span class="spinner-border spinner-border-sm me-1"></span>\r
          } @else {\r
            <i class="bx bx-save me-1"></i>\r
          }\r
          Simpan Pengaturan\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  } <!-- end tab fingerspot -->\r
\r
  @if (showModal()) {\r
    <div class="modal fade show d-block" tabindex="-1"\r
         style="background:rgba(0,0,0,.45);z-index:1055"\r
         (click)="closeModal()">\r
      <div class="modal-dialog modal-dialog-centered"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-plus-circle me-2 text-primary"></i>Tambah Presensi\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeModal()"></button>\r
          </div>\r
\r
          <div class="modal-body pt-3">\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2 small mb-3">{{ modalError() }}</div>\r
            }\r
\r
            <!-- Karyawan -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small">Karyawan</label>\r
              <input type="text" class="form-control form-control-sm"\r
                     [value]="karyawan()?.namaLengkap || ''" readonly />\r
            </div>\r
\r
            <!-- Tanggal -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small">Tanggal <span class="text-danger">*</span></label>\r
              <input type="date" class="form-control form-control-sm"\r
                     [ngModel]="form().tanggal"\r
                     (ngModelChange)="updateForm('tanggal', $event)" />\r
            </div>\r
\r
            <!-- Tipe Presensi -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small">Tipe Presensi <span class="text-danger">*</span></label>\r
              <select class="form-select form-select-sm"\r
                      [ngModel]="form().tipePresensi"\r
                      (ngModelChange)="updateForm('tipePresensi', $event)">\r
                @for (t of TIPE_LIST; track t.value) {\r
                  <option [value]="t.value">{{ t.label }}</option>\r
                }\r
              </select>\r
            </div>\r
\r
            <!-- Waktu Mulai & Selesai -->\r
            <div class="row g-2 mb-3">\r
              <div class="col">\r
                <label class="form-label fw-semibold small">\r
                  Waktu Presensi Mulai <span class="text-danger">*</span>\r
                </label>\r
                <input type="time" class="form-control form-control-sm"\r
                       [ngModel]="form().waktuMulai"\r
                       (ngModelChange)="updateForm('waktuMulai', $event)" />\r
              </div>\r
              <div class="col">\r
                <label class="form-label fw-semibold small">Waktu Presensi Selesai</label>\r
                <input type="time" class="form-control form-control-sm"\r
                       [ngModel]="form().waktuSelesai"\r
                       (ngModelChange)="updateForm('waktuSelesai', $event)" />\r
              </div>\r
            </div>\r
\r
            <!-- Catatan (hanya untuk Masuk-Keluar) -->\r
            @if (form().tipePresensi === 'MASUK_KELUAR') {\r
              <div class="mb-1">\r
                <label class="form-label fw-semibold small">Catatan</label>\r
                <textarea class="form-control form-control-sm" rows="2"\r
                          [ngModel]="form().catatan"\r
                          (ngModelChange)="updateForm('catatan', $event)"\r
                          placeholder="Catatan presensi (opsional)"></textarea>\r
              </div>\r
            }\r
          </div>\r
\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="closeModal()" [disabled]="modalSaving()">\r
              Batal\r
            </button>\r
            <button class="btn btn-tambah btn-sm px-4"\r
                    (click)="simpan()" [disabled]="modalSaving()">\r
              @if (modalSaving()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              }\r
              <i class="bx bx-save me-1"></i> Simpan\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/karyawan/karyawan-kehadiran/karyawan-kehadiran.component.scss */\n.info-bar {\n  border-radius: 12px !important;\n}\n.tab-btn {\n  padding: 6px 16px;\n  border-radius: 9999px;\n  border: none;\n  background: transparent;\n  font-size: 0.82rem;\n  color: #6366f1;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.tab-btn:hover {\n  background: #ede9fe;\n}\n.tab-btn--active {\n  background: #6366f1;\n  color: #fff;\n}\n.tab-btn--active:hover {\n  background: #4f46e5;\n}\n.stat-row {\n  background: #fafafa;\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 20px;\n  border-radius: 10px;\n  min-width: 80px;\n}\n.stat-val {\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.stat-lbl {\n  font-size: 0.72rem;\n  font-weight: 500;\n  margin-top: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.stat-hadir {\n  background: #dcfce7;\n}\n.stat-hadir .stat-val {\n  color: #15803d;\n}\n.stat-hadir .stat-lbl {\n  color: #15803d;\n}\n.stat-terlambat {\n  background: #fef9c3;\n}\n.stat-terlambat .stat-val {\n  color: #a16207;\n}\n.stat-terlambat .stat-lbl {\n  color: #a16207;\n}\n.stat-izin {\n  background: #dbeafe;\n}\n.stat-izin .stat-val {\n  color: #1d4ed8;\n}\n.stat-izin .stat-lbl {\n  color: #1d4ed8;\n}\n.stat-sakit {\n  background: #fce7f3;\n}\n.stat-sakit .stat-val {\n  color: #be185d;\n}\n.stat-sakit .stat-lbl {\n  color: #be185d;\n}\n.stat-alpha {\n  background: #fee2e2;\n}\n.stat-alpha .stat-val {\n  color: #b91c1c;\n}\n.stat-alpha .stat-lbl {\n  color: #b91c1c;\n}\n.btn-tambah {\n  background: #6366f1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: background 0.15s;\n}\n.btn-tambah:hover {\n  background: #4f46e5;\n  color: #fff;\n}\n.btn-tambah:disabled {\n  background: #a5b4fc;\n}\n.table thead th {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 700;\n  padding: 11px 16px;\n  background: #f9fafb;\n  border-bottom: 1px solid #f1f3f5;\n  white-space: nowrap;\n}\n.table tbody td {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.table tbody tr:last-child td {\n  border-bottom: none;\n}\n.jam-besar {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.2;\n  letter-spacing: 0.02em;\n}\n.badge-status {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 9999px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.badge-hadir {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge-izin {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-sakit {\n  background: #fce7f3;\n  color: #be185d;\n}\n.badge-alpha {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge-terlambat {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 9999px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  background: #fef9c3;\n  color: #a16207;\n}\n.catatan-toolbar {\n  background: #fff;\n}\n.btn-minggu {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  background: #22c55e;\n  color: #fff;\n}\n.btn-minggu:hover {\n  background: #16a34a;\n}\n.catatan-scroll {\n  overflow-x: auto;\n}\n.catatan-table {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.catatan-row-hari th {\n  text-align: center;\n  padding: 10px 8px 6px;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  font-size: 0.84rem;\n}\n.catatan-col-today {\n  background: #bbf7d0;\n  color: #14532d;\n}\n.catatan-col-normal {\n  background: #f3f4f6;\n  color: #374151;\n}\n.catatan-hari-lbl {\n  font-weight: 700;\n  font-size: 0.86rem;\n}\n.catatan-hari-today {\n  font-size: 0.74rem;\n  font-weight: 500;\n  color: #166534;\n  margin-top: 2px;\n}\n.catatan-row-sub th {\n  text-align: center;\n  padding: 8px 6px;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  font-size: 0.78rem;\n}\n.catatan-sub-today {\n  background: #dcfce7;\n  color: #14532d;\n}\n.catatan-sub-normal {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.catatan-row-data td {\n  vertical-align: top;\n  padding: 12px 10px;\n  border: 1px solid #e5e7eb;\n  font-size: 0.82rem;\n  min-width: 110px;\n}\n.catatan-cell-today {\n  background: #f0fdf4;\n}\n.catatan-cell-normal {\n  background: #fff;\n}\n.catatan-cell-kosong {\n  background: #f9fafb;\n  text-align: center;\n  vertical-align: middle !important;\n}\n.catatan-jam {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #111827;\n  background: #f3f4f6;\n  border-radius: 6px;\n  padding: 2px 8px;\n  display: inline-block;\n  margin-bottom: 4px;\n  letter-spacing: 0.02em;\n}\n.catatan-note {\n  font-size: 0.76rem;\n  color: #6b7280;\n  font-style: italic;\n  line-height: 1.4;\n  word-break: break-word;\n}\n.catatan-belum {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #6b7280;\n}\n.catatan-empty {\n  font-size: 0.82rem;\n  color: #d1d5db;\n}\n.rks-col {\n  border-top: 1px solid #f1f3f5;\n}\n.rks-col:first-child {\n  border-top: none;\n}\n@media (min-width: 768px) {\n  .rks-col {\n    border-top: none;\n  }\n  .rks-col.rks-col-right {\n    border-left: 1px solid #f1f3f5;\n  }\n}\n.rks-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 20px;\n  border-bottom: 1px solid #f3f4f6;\n  gap: 12px;\n  min-height: 44px;\n}\n.rks-row.rks-row-last {\n  border-bottom: none;\n}\n.rks-label {\n  font-size: 0.84rem;\n  color: #374151;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex: 1;\n}\n.rks-help {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  color: #6b7280;\n  font-size: 0.62rem;\n  font-weight: 700;\n  cursor: help;\n  flex-shrink: 0;\n}\n.rks-val-blue {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #6366f1;\n  text-align: right;\n  min-width: 60px;\n  flex-shrink: 0;\n}\n.rks-val-dark {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #111827;\n  text-align: right;\n  min-width: 60px;\n  flex-shrink: 0;\n}\n.selfie-table {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.selfie-cell {\n  vertical-align: top;\n  padding: 10px 8px;\n  border: 1px solid #e5e7eb;\n  min-width: 120px;\n  text-align: center;\n}\n.selfie-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  cursor: zoom-in;\n}\n.selfie-img {\n  width: 100%;\n  max-width: 110px;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 2px solid #e5e7eb;\n  transition: transform 0.15s, border-color 0.15s;\n}\n.selfie-img:hover {\n  transform: scale(1.04);\n  border-color: #6366f1;\n}\n.selfie-jam {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #374151;\n  background: #f3f4f6;\n  border-radius: 6px;\n  padding: 1px 8px;\n  letter-spacing: 0.02em;\n}\n.selfie-late {\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: #fef9c3;\n  color: #a16207;\n  border-radius: 9999px;\n  padding: 1px 8px;\n}\n.selfie-kosong {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 16px 8px;\n  color: #d1d5db;\n}\n.selfie-kosong i {\n  font-size: 1.8rem;\n}\n.selfie-kosong span {\n  font-size: 0.72rem;\n}\n.foto-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.72);\n  z-index: 1090;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: fadeIn 0.15s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.foto-modal-box {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  max-width: 480px;\n  width: 100%;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  animation: slideUp 0.18s ease;\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.foto-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px 10px;\n  border-bottom: 1px solid #f1f3f5;\n}\n.foto-modal-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #111827;\n}\n.foto-modal-close {\n  border: none;\n  background: #f3f4f6;\n  border-radius: 8px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #6b7280;\n  transition: background 0.12s;\n}\n.foto-modal-close:hover {\n  background: #e5e7eb;\n  color: #111;\n}\n.foto-modal-img {\n  width: 100%;\n  max-height: 70vh;\n  object-fit: contain;\n  display: block;\n}\n.fingerspot-option {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  background: #fff;\n}\n.fingerspot-option:hover {\n  border-color: #a5b4fc;\n  background: #f5f3ff;\n}\n.fingerspot-option--active {\n  border-color: #6366f1;\n  background: #f5f3ff;\n}\n.fingerspot-radio {\n  margin-top: 3px;\n  accent-color: #6366f1;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fingerspot-option-body {\n  flex: 1;\n}\n.fingerspot-toast {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 2000;\n  background: #166534;\n  color: #fff;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);\n  animation: toastIn 0.25s ease;\n}\n@keyframes toastIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=karyawan-kehadiran.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanKehadiranComponent, { className: "KaryawanKehadiranComponent", filePath: "src/app/features/karyawan/karyawan-kehadiran/karyawan-kehadiran.component.ts", lineNumber: 19 });
})();
export {
  KaryawanKehadiranComponent
};
//# sourceMappingURL=chunk-LSEFXRNE.js.map
