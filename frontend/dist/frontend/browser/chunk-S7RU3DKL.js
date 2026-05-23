import {
  PolaKerjaService
} from "./chunk-H2DAYQGM.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-jadwal-kerja/karyawan-jadwal-kerja.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _forTrack0 = ($index, $item) => $item.hari;
var _forTrack1 = ($index, $item) => $item.tanggal.getTime();
var _forTrack2 = ($index, $item) => $item.id;
function KaryawanJadwalKerjaComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 21);
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
function KaryawanJadwalKerjaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementEnd();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.karyawan().namaJabatan, " ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "span", 24);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3, "Memuat data jadwal kerja...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "p", 27);
    \u0275\u0275text(3, "Belum ada pola kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5, "Karyawan ini belum masuk divisi atau divisinya belum memiliki pola kerja.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "Hari Kerja");
    \u0275\u0275elementEnd();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "Libur");
    \u0275\u0275elementEnd();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "Fleksibel");
    \u0275\u0275elementEnd();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", h_r3.mulaiIstirahat, " \u2013 ", h_r3.selesaiIstirahat, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", h_r3.maksMenitIstirahat, " menit)");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_4_Template, 2, 0, "span", 58)(5, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_5_Template, 2, 0, "span", 59)(6, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_6_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 62);
    \u0275\u0275conditionalCreate(12, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_12_Template, 3, 3)(13, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r3.hari);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(h_r3.polaHari === "HARI_KERJA" ? 4 : h_r3.polaHari === "LIBUR" ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(h_r3.jamMasuk || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r3.jamKeluar || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(h_r3.mulaiIstirahat && h_r3.selesaiIstirahat ? 12 : 13);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span");
    \u0275\u0275text(2, "Jadwal Kerja: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Jadwal Libur: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 63);
    \u0275\u0275text(12, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Total Hari: ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.totalHariKerja());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.totalJadwalLibur());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.totalHari());
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "p", 65);
    \u0275\u0275text(3, "Pilih rentang tanggal untuk melihat jadwal.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.keterangan);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.keterangan);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", item_r4.keterangan, " ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275conditionalCreate(4, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Conditional_4_Template, 2, 1, "span", 69)(5, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Conditional_5_Template, 2, 1, "span", 70)(6, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275classProp("jadwal-row--libur", item_r4.tipe === "JADWAL_LIBUR")("jadwal-row--kalender", item_r4.tipe === "KALENDER_LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.labelTanggal);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.tipe === "JADWAL_LIBUR" ? 4 : item_r4.tipe === "KALENDER_LIBUR" ? 5 : 6);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div")(3, "div", 31);
    \u0275\u0275text(4, "Sistem Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 34)(10, "div", 35);
    \u0275\u0275element(11, "i", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 35);
    \u0275\u0275element(14, "i", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275listener("click", function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(17, "i", 39);
    \u0275\u0275text(18, " Ubah Waktu Kerja ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 29)(20, "div", 40);
    \u0275\u0275element(21, "i", 41);
    \u0275\u0275elementStart(22, "span", 42);
    \u0275\u0275text(23, "Jadwal Per Hari");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 43)(25, "table", 44)(26, "thead")(27, "tr")(28, "th");
    \u0275\u0275text(29, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Jam Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Istirahat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275repeaterCreate(39, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_40_Template, 14, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 45)(42, "div", 40);
    \u0275\u0275element(43, "i", 46);
    \u0275\u0275elementStart(44, "span", 42);
    \u0275\u0275text(45, "Jadwal Kerja Harian");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 47)(47, "div", 48)(48, "input", 49);
    \u0275\u0275listener("ngModelChange", function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tglMulai.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 50);
    \u0275\u0275text(50, "\u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 49);
    \u0275\u0275listener("ngModelChange", function KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tglSelesai.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 51);
    \u0275\u0275element(53, "i", 52);
    \u0275\u0275text(54, " Jadwal kerja harian karyawan sesuai pola kerja divisi yang ditetapkan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Conditional_55_Template, 17, 3, "div", 53);
    \u0275\u0275elementStart(56, "div", 54);
    \u0275\u0275conditionalCreate(57, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Conditional_57_Template, 4, 0, "div", 55);
    \u0275\u0275repeaterCreate(58, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_For_59_Template, 7, 6, "div", 56, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.polaKerja().namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.jenisJadwalLabel(ctx_r0.polaKerja().jenisJadwal));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Toleransi ", ctx_r0.polaKerja().toleransiKeterlambatan, " menit ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.totalHariKerja(), " hari kerja / periode ");
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r0.polaKerja().hariList);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r0.tglMulai());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.tglSelesai());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.jadwalHarian().length > 0 ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.jadwalHarian().length === 0 ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.jadwalHarian());
  }
}
function KaryawanJadwalKerjaComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_0_Template, 6, 0, "div", 19);
    \u0275\u0275conditionalCreate(1, KaryawanJadwalKerjaComponent_Conditional_30_Conditional_1_Template, 60, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.polaKerja() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.polaKerja() ? 1 : -1);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError());
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275property("value", p_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.namaPolaKerja);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hari Kerja ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Jadwal Libur ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Fleksibel ");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Conditional_4_Template, 1, 0)(5, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Conditional_5_Template, 1, 0)(6, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r7 = ctx.$implicit;
    \u0275\u0275classProp("table-warning", h_r7.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.hari);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(h_r7.polaHari === "HARI_KERJA" ? 4 : h_r7.polaHari === "LIBUR" ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(h_r7.jamMasuk || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.jamKeluar || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.mulaiIstirahat || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.selesaiIstirahat || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.maksMenitIstirahat || "\u2014");
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "table", 94)(5, "thead", 95)(6, "tr")(7, "th");
    \u0275\u0275text(8, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Jam Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Maks. Menit Istirahat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_For_23_Template, 17, 9, "tr", 96, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prev_r8 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Toleransi Keterlambatan: ", prev_r8.toleransiKeterlambatan, " Menit ");
    \u0275\u0275advance(20);
    \u0275\u0275repeater(prev_r8.hariList);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function KaryawanJadwalKerjaComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function KaryawanJadwalKerjaComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 72);
    \u0275\u0275listener("click", function KaryawanJadwalKerjaComponent_Conditional_31_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 73)(3, "div", 74)(4, "h5", 75);
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Ubah Waktu Kerja ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 77);
    \u0275\u0275listener("click", function KaryawanJadwalKerjaComponent_Conditional_31_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 78);
    \u0275\u0275conditionalCreate(9, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_9_Template, 2, 1, "div", 79);
    \u0275\u0275elementStart(10, "div", 80)(11, "label", 81);
    \u0275\u0275text(12, "Nama ");
    \u0275\u0275elementStart(13, "span", 82);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 80)(17, "label", 81);
    \u0275\u0275text(18, "Pola Kerja ");
    \u0275\u0275elementStart(19, "span", 82);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 84)(22, "select", 85);
    \u0275\u0275listener("ngModelChange", function KaryawanJadwalKerjaComponent_Conditional_31_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectedPolaId.set(+$event || null));
    });
    \u0275\u0275elementStart(23, "option", 86);
    \u0275\u0275text(24, "\u2014 Pilih Pola Kerja \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, KaryawanJadwalKerjaComponent_Conditional_31_For_26_Template, 2, 2, "option", 87, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_27_Template, 24, 1, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 89)(29, "button", 90);
    \u0275\u0275listener("click", function KaryawanJadwalKerjaComponent_Conditional_31_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(30, " Tutup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 91);
    \u0275\u0275listener("click", function KaryawanJadwalKerjaComponent_Conditional_31_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePolaKerja());
    });
    \u0275\u0275conditionalCreate(32, KaryawanJadwalKerjaComponent_Conditional_31_Conditional_32_Template, 1, 0, "span", 92);
    \u0275\u0275text(33, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.modalError() ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ((tmp_2_0 = ctx_r0.karyawan()) == null ? null : tmp_2_0.namaLengkap) || "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.selectedPolaId());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.allPolaKerja());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r0.selectedPolaPreview()) ? 27 : -1, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.modalSaving() || !ctx_r0.selectedPolaId());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalSaving() ? 32 : -1);
  }
}
var KaryawanJadwalKerjaComponent = class _KaryawanJadwalKerjaComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.karyawanSvc = inject(KaryawanService);
    this.polaKerjaSvc = inject(PolaKerjaService);
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.polaKerja = signal(null, ...ngDevMode ? [{ debugName: "polaKerja" }] : (
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
    this.showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allPolaKerja = signal([], ...ngDevMode ? [{ debugName: "allPolaKerja" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedPolaId = signal(null, ...ngDevMode ? [{ debugName: "selectedPolaId" }] : (
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
    this.selectedPolaPreview = computed(() => this.allPolaKerja().find((p) => p.id === this.selectedPolaId()) ?? null, ...ngDevMode ? [{ debugName: "selectedPolaPreview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.today = /* @__PURE__ */ new Date();
    this.tglMulai = signal(this.firstDayOfMonth(), ...ngDevMode ? [{ debugName: "tglMulai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tglSelesai = signal(this.formatDate(this.today), ...ngDevMode ? [{ debugName: "tglSelesai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.HARI_ID = {
      1: "SENIN",
      2: "SELASA",
      3: "RABU",
      4: "KAMIS",
      5: "JUMAT",
      6: "SABTU",
      0: "MINGGU"
    };
    this.HARI_LABEL = {
      0: "Minggu",
      1: "Senin",
      2: "Selasa",
      3: "Rabu",
      4: "Kamis",
      5: "Jumat",
      6: "Sabtu"
    };
    this.BULAN_LABEL = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des"
    ];
    this.jadwalHarian = computed(() => {
      const pola = this.polaKerja();
      const dari = new Date(this.tglMulai());
      const ke = new Date(this.tglSelesai());
      if (!pola || isNaN(dari.getTime()) || isNaN(ke.getTime()))
        return [];
      const hasil = [];
      const cursor = new Date(dari);
      while (cursor <= ke) {
        const dow = cursor.getDay();
        const hariKerja = this.HARI_ID[dow];
        const hariItem = pola.hariList.find((h) => h.hari === hariKerja);
        const tglLabel = `${this.HARI_LABEL[dow]}, ${cursor.getDate()} ${this.BULAN_LABEL[cursor.getMonth()]} ${cursor.getFullYear()}`;
        let tipe;
        let keterangan;
        if (!hariItem || hariItem.polaHari === "LIBUR") {
          tipe = "JADWAL_LIBUR";
          keterangan = `${pola.namaPolaKerja} \u2014 Jadwal Libur`;
        } else {
          tipe = "HARI_KERJA";
          const jam = hariItem.jamMasuk && hariItem.jamKeluar ? `(${hariItem.jamMasuk} - ${hariItem.jamKeluar})` : "";
          const toleransi = pola.toleransiKeterlambatan ? `\u2014 Toleransi Keterlambatan ${pola.toleransiKeterlambatan} Menit` : "";
          keterangan = `${pola.namaPolaKerja} (${this.jenisJadwalLabel(pola.jenisJadwal)}) - ${jam} ${toleransi}`.trim();
        }
        hasil.push({ tanggal: new Date(cursor), namaHari: this.HARI_LABEL[dow], labelTanggal: tglLabel, tipe, keterangan });
        cursor.setDate(cursor.getDate() + 1);
      }
      return hasil;
    }, ...ngDevMode ? [{ debugName: "jadwalHarian" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalHariKerja = computed(() => this.jadwalHarian().filter((j) => j.tipe === "HARI_KERJA").length, ...ngDevMode ? [{ debugName: "totalHariKerja" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalJadwalLibur = computed(() => this.jadwalHarian().filter((j) => j.tipe === "JADWAL_LIBUR").length, ...ngDevMode ? [{ debugName: "totalJadwalLibur" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalKalenderLibur = computed(() => this.jadwalHarian().filter((j) => j.tipe === "KALENDER_LIBUR").length, ...ngDevMode ? [{ debugName: "totalKalenderLibur" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalHari = computed(() => this.jadwalHarian().length, ...ngDevMode ? [{ debugName: "totalHari" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  openModal() {
    this.selectedPolaId.set(this.polaKerja()?.id ?? null);
    this.modalError.set("");
    this.showModal.set(true);
    if (this.allPolaKerja().length === 0) {
      this.polaKerjaSvc.findAll().subscribe({
        next: (list) => this.allPolaKerja.set(list),
        error: () => this.modalError.set("Gagal memuat daftar pola kerja.")
      });
    }
  }
  closeModal() {
    this.showModal.set(false);
  }
  savePolaKerja() {
    const k = this.karyawan();
    const pid = this.selectedPolaId();
    if (!k || !pid) {
      this.modalError.set("Pilih pola kerja terlebih dahulu.");
      return;
    }
    this.modalSaving.set(true);
    this.modalError.set("");
    this.karyawanSvc.updatePolaKerja(k.id, pid).subscribe({
      next: () => {
        if (k.divisiId) {
          this.polaKerjaSvc.findByDivisi(k.divisiId).subscribe({
            next: (list) => {
              this.polaKerja.set(list.find((p) => p.id === pid) ?? list[0] ?? null);
              this.modalSaving.set(false);
              this.showModal.set(false);
            },
            error: () => {
              this.modalSaving.set(false);
              this.showModal.set(false);
            }
          });
        } else {
          this.modalSaving.set(false);
          this.showModal.set(false);
        }
      },
      error: (err) => {
        this.modalError.set(err?.error?.message ?? "Gagal menyimpan pola kerja.");
        this.modalSaving.set(false);
      }
    });
  }
  firstDayOfMonth() {
    const d = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    return this.formatDate(d);
  }
  formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  jenisJadwalLabel(j) {
    return j === "JAM_TETAP" ? "Hari Kerja" : j === "JAM_FLEKSIBEL" ? "Fleksibel" : j ?? "";
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.karyawanSvc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        if (k.divisiId) {
          this.polaKerjaSvc.findByDivisi(k.divisiId).subscribe({
            next: (list) => {
              this.polaKerja.set(list[0] ?? null);
              this.loading.set(false);
            },
            error: () => {
              this.error.set("Gagal memuat pola kerja.");
              this.loading.set(false);
            }
          });
        } else {
          this.loading.set(false);
        }
      },
      error: () => {
        this.error.set("Gagal memuat data karyawan.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function KaryawanJadwalKerjaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanJadwalKerjaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanJadwalKerjaComponent, selectors: [["app-karyawan-jadwal-kerja"]], decls: 32, vars: 12, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "info-bar", "card", "border-0", "shadow-sm", "mb-4", "px-4", "py-3", "d-flex", "flex-row", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid #e9ecef", "flex-shrink", "0", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "44px", "height", "44px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.2rem", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-semibold", 2, "font-size", ".95rem"], [1, "text-muted", "small"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "routerLink"], [1, "bx", "bx-arrow-back", "me-1"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "card", "border-0", "shadow-sm", "p-5", "text-center", "text-muted"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [3, "routerLink"], [1, "bx", "bx-user"], [1, "bx", "bx-error-circle", "fs-5"], [1, "spinner-border", "text-primary", "mb-3"], [1, "mb-0"], [1, "bx", "bx-calendar-x", 2, "font-size", "3.5rem", "opacity", ".25"], [1, "mt-3", "fw-semibold", "mb-1"], [1, "small", "mb-0"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "text-muted", "small", "mb-1"], [1, "fw-bold", 2, "font-size", "1.05rem"], [1, "badge-sistem", "mt-1"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], [1, "stat-chip"], [1, "bx", "bx-time-five", "me-1", "text-primary"], [1, "bx", "bx-calendar", "me-1", "text-success"], [1, "btn", "btn-ubah", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-pencil", "me-1"], [1, "jadwal-card-header"], [1, "bx", "bx-grid-alt", "me-2", "text-primary"], [1, "fw-semibold"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "card", "border-0", "shadow-sm"], [1, "bx", "bx-calendar-week", "me-2", "text-primary"], [1, "px-4", "py-3", "border-bottom"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "px-4", "py-2", "border-bottom", 2, "background", "#f9fafb", "font-size", ".8rem", "color", "#6b7280"], [1, "bx", "bx-info-circle", "me-1", "text-primary"], [1, "px-4", "py-2", "border-bottom", "stat-row-inline"], [1, "jadwal-list-wrap"], [1, "text-center", "text-muted", "py-5"], [1, "jadwal-row", 3, "jadwal-row--libur", "jadwal-row--kalender"], [1, "fw-semibold", 2, "font-size", ".87rem"], [1, "chip-status", "chip-kerja"], [1, "chip-status", "chip-libur"], [1, "chip-status", "chip-fleksibel"], [2, "font-size", ".87rem"], [2, "font-size", ".82rem", "color", "#6b7280"], [1, "mx-2", "text-muted"], [1, "bx", "bx-calendar", 2, "font-size", "3rem", "opacity", ".2"], [1, "mt-2", "mb-0", "small"], [1, "jadwal-row"], [1, "jadwal-tgl"], [1, "jadwal-ket"], [1, "text-libur"], [1, "text-kalender"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable", 3, "click"], [1, "modal-content", "border-0", "shadow-lg", "rounded-4"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "fw-bold"], [1, "bx", "bx-pencil", "me-2", "text-primary"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "pt-3"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "mb-3"], [1, "form-label", "fw-semibold", "small", "text-muted"], [1, "text-danger"], ["type", "text", "readonly", "", 1, "form-control", "form-control-sm", 3, "value"], [1, "d-flex", "gap-2"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "value"], [1, "modal-preview-box"], [1, "modal-footer", "border-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "mb-2", "small", "text-muted", "fw-semibold"], [1, "table", "table-sm", "table-bordered", "mb-0", 2, "font-size", ".82rem"], [1, "table-light"], [3, "table-warning"]], template: function KaryawanJadwalKerjaComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, KaryawanJadwalKerjaComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Jadwal Kerja");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275conditionalCreate(17, KaryawanJadwalKerjaComponent_Conditional_17_Template, 1, 1, "img", 11)(18, KaryawanJadwalKerjaComponent_Conditional_18_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23);
        \u0275\u0275conditionalCreate(24, KaryawanJadwalKerjaComponent_Conditional_24_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 16);
        \u0275\u0275element(26, "i", 17);
        \u0275\u0275text(27, " Kembali ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(28, KaryawanJadwalKerjaComponent_Conditional_28_Template, 3, 1, "div", 18);
        \u0275\u0275conditionalCreate(29, KaryawanJadwalKerjaComponent_Conditional_29_Template, 4, 0, "div", 19);
        \u0275\u0275conditionalCreate(30, KaryawanJadwalKerjaComponent_Conditional_30_Template, 2, 2);
        \u0275\u0275conditionalCreate(31, KaryawanJadwalKerjaComponent_Conditional_31_Template, 34, 8, "div", 20);
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
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, (tmp_5_0 = ctx.karyawan()) == null ? null : tmp_5_0.id));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal() ? 31 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LayoutComponent], styles: ['@charset "UTF-8";\n\n\n.info-bar[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.jadwal-card-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f3f5;\n  display: flex;\n  align-items: center;\n  font-size: 0.88rem;\n  color: #374151;\n}\n.badge-sistem[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 9999px;\n  font-size: 0.76rem;\n  font-weight: 600;\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  background: #f3f4f6;\n  color: #374151;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  padding: 11px 16px;\n  background: #fafafa;\n  border-bottom: 1px solid #f1f3f5;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f9fafb;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.chip-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.chip-kerja[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.chip-libur[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.chip-fleksibel[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.stat-row-inline[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #374151;\n}\n.stat-row-inline[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.jadwal-list-wrap[_ngcontent-%COMP%] {\n  max-height: 520px;\n  overflow-y: auto;\n}\n.jadwal-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 24px;\n  padding: 11px 20px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.87rem;\n  transition: background 0.1s;\n}\n.jadwal-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.jadwal-row[_ngcontent-%COMP%]:hover {\n  background: #fafafe;\n}\n.jadwal-row--libur[_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.jadwal-row--kalender[_ngcontent-%COMP%] {\n  background: #fef2f2;\n}\n.jadwal-tgl[_ngcontent-%COMP%] {\n  min-width: 175px;\n  flex-shrink: 0;\n  color: #6b7280;\n  font-size: 0.82rem;\n  text-align: right;\n}\n.jadwal-ket[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #111827;\n}\n.text-libur[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.text-kalender[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-style: italic;\n}\n.btn-ubah[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 6px 16px;\n  transition: background 0.15s;\n}\n.btn-ubah[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n  color: #fff;\n}\n.btn-ubah[_ngcontent-%COMP%]:disabled {\n  background: #c4b5fd;\n}\n.modal-preview-box[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=karyawan-jadwal-kerja.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanJadwalKerjaComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-jadwal-kerja", standalone: true, imports: [RouterLink, CommonModule, FormsModule, LayoutComponent], template: `<app-layout>\r
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
          <li class="breadcrumb-item active">Jadwal Kerja</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Info Bar -->\r
  <div class="info-bar card border-0 shadow-sm mb-4 px-4 py-3 d-flex flex-row align-items-center gap-3">\r
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
      <div class="fw-semibold" style="font-size:.95rem">{{ karyawan()?.namaLengkap || '\u2014' }}</div>\r
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
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2 mb-3">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
    </div>\r
  }\r
\r
  <!-- Loading -->\r
  @if (loading()) {\r
    <div class="card border-0 shadow-sm p-5 text-center text-muted">\r
      <span class="spinner-border text-primary mb-3"></span>\r
      <p class="mb-0">Memuat data jadwal kerja...</p>\r
    </div>\r
  }\r
\r
  @if (!loading()) {\r
\r
    <!-- Tidak ada pola kerja -->\r
    @if (!polaKerja()) {\r
      <div class="card border-0 shadow-sm p-5 text-center text-muted">\r
        <i class="bx bx-calendar-x" style="font-size:3.5rem;opacity:.25"></i>\r
        <p class="mt-3 fw-semibold mb-1">Belum ada pola kerja</p>\r
        <p class="small mb-0">Karyawan ini belum masuk divisi atau divisinya belum memiliki pola kerja.</p>\r
      </div>\r
    }\r
\r
    @if (polaKerja()) {\r
\r
      <!-- Card: Sistem Kerja -->\r
      <div class="card border-0 shadow-sm mb-3">\r
        <div class="card-body d-flex align-items-center justify-content-between flex-wrap gap-3">\r
          <div>\r
            <div class="text-muted small mb-1">Sistem Kerja</div>\r
            <div class="fw-bold" style="font-size:1.05rem">{{ polaKerja()!.namaPolaKerja }}</div>\r
            <span class="badge-sistem mt-1">{{ jenisJadwalLabel(polaKerja()!.jenisJadwal) }}</span>\r
          </div>\r
          <div class="d-flex gap-2 flex-wrap align-items-center">\r
            <div class="stat-chip">\r
              <i class="bx bx-time-five me-1 text-primary"></i>\r
              Toleransi {{ polaKerja()!.toleransiKeterlambatan }} menit\r
            </div>\r
            <div class="stat-chip">\r
              <i class="bx bx-calendar me-1 text-success"></i>\r
              {{ totalHariKerja() }} hari kerja / periode\r
            </div>\r
            <button class="btn btn-ubah btn-sm px-3" (click)="openModal()">\r
              <i class="bx bx-pencil me-1"></i> Ubah Waktu Kerja\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Card: Jadwal Hari per Minggu -->\r
      <div class="card border-0 shadow-sm mb-3">\r
        <div class="jadwal-card-header">\r
          <i class="bx bx-grid-alt me-2 text-primary"></i>\r
          <span class="fw-semibold">Jadwal Per Hari</span>\r
        </div>\r
        <div class="table-responsive">\r
          <table class="table table-hover align-middle mb-0">\r
            <thead>\r
              <tr>\r
                <th>Hari</th>\r
                <th>Status</th>\r
                <th>Jam Masuk</th>\r
                <th>Jam Keluar</th>\r
                <th>Istirahat</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (h of polaKerja()!.hariList; track h.hari) {\r
                <tr>\r
                  <td class="fw-semibold" style="font-size:.87rem">{{ h.hari }}</td>\r
                  <td>\r
                    @if (h.polaHari === 'HARI_KERJA') {\r
                      <span class="chip-status chip-kerja">Hari Kerja</span>\r
                    } @else if (h.polaHari === 'LIBUR') {\r
                      <span class="chip-status chip-libur">Libur</span>\r
                    } @else {\r
                      <span class="chip-status chip-fleksibel">Fleksibel</span>\r
                    }\r
                  </td>\r
                  <td style="font-size:.87rem">{{ h.jamMasuk || '\u2014' }}</td>\r
                  <td style="font-size:.87rem">{{ h.jamKeluar || '\u2014' }}</td>\r
                  <td style="font-size:.82rem;color:#6b7280">\r
                    @if (h.mulaiIstirahat && h.selesaiIstirahat) {\r
                      {{ h.mulaiIstirahat }} \u2013 {{ h.selesaiIstirahat }}\r
                      <span class="text-muted">({{ h.maksMenitIstirahat }} menit)</span>\r
                    } @else {\r
                      \u2014\r
                    }\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <!-- Card: Jadwal Kerja Harian -->\r
      <div class="card border-0 shadow-sm">\r
        <div class="jadwal-card-header">\r
          <i class="bx bx-calendar-week me-2 text-primary"></i>\r
          <span class="fw-semibold">Jadwal Kerja Harian</span>\r
        </div>\r
\r
        <!-- Filter Tanggal -->\r
        <div class="px-4 py-3 border-bottom">\r
          <div class="d-flex align-items-center gap-2 flex-wrap">\r
            <input type="date" class="form-control form-control-sm" style="max-width:160px"\r
                   [ngModel]="tglMulai()"\r
                   (ngModelChange)="tglMulai.set($event)" />\r
            <span class="text-muted">\u2013</span>\r
            <input type="date" class="form-control form-control-sm" style="max-width:160px"\r
                   [ngModel]="tglSelesai()"\r
                   (ngModelChange)="tglSelesai.set($event)" />\r
          </div>\r
        </div>\r
\r
        <!-- Info note -->\r
        <div class="px-4 py-2 border-bottom" style="background:#f9fafb;font-size:.8rem;color:#6b7280">\r
          <i class="bx bx-info-circle me-1 text-primary"></i>\r
          Jadwal kerja harian karyawan sesuai pola kerja divisi yang ditetapkan.\r
        </div>\r
\r
        <!-- Statistik -->\r
        @if (jadwalHarian().length > 0) {\r
          <div class="px-4 py-2 border-bottom stat-row-inline">\r
            <span>Jadwal Kerja: <strong>{{ totalHariKerja() }}</strong></span>\r
            <span class="mx-2 text-muted">|</span>\r
            <span>Jadwal Libur: <strong>{{ totalJadwalLibur() }}</strong></span>\r
            <span class="mx-2 text-muted">|</span>\r
            <span>Total Hari: <strong>{{ totalHari() }}</strong></span>\r
          </div>\r
        }\r
\r
        <!-- List Harian -->\r
        <div class="jadwal-list-wrap">\r
          @if (jadwalHarian().length === 0) {\r
            <div class="text-center text-muted py-5">\r
              <i class="bx bx-calendar" style="font-size:3rem;opacity:.2"></i>\r
              <p class="mt-2 mb-0 small">Pilih rentang tanggal untuk melihat jadwal.</p>\r
            </div>\r
          }\r
\r
          @for (item of jadwalHarian(); track item.tanggal.getTime()) {\r
            <div class="jadwal-row" [class.jadwal-row--libur]="item.tipe === 'JADWAL_LIBUR'"\r
                 [class.jadwal-row--kalender]="item.tipe === 'KALENDER_LIBUR'">\r
              <div class="jadwal-tgl">{{ item.labelTanggal }}</div>\r
              <div class="jadwal-ket">\r
                @if (item.tipe === 'JADWAL_LIBUR') {\r
                  <span class="text-libur">{{ item.keterangan }}</span>\r
                } @else if (item.tipe === 'KALENDER_LIBUR') {\r
                  <span class="text-kalender">{{ item.keterangan }}</span>\r
                } @else {\r
                  {{ item.keterangan }}\r
                }\r
              </div>\r
            </div>\r
          }\r
        </div>\r
\r
      </div>\r
\r
    }\r
  }\r
\r
  <!-- \u2550\u2550\u2550 Modal Ubah Waktu Kerja \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055"\r
         (click)="closeModal()">\r
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"\r
           (click)="$event.stopPropagation()">\r
        <div class="modal-content border-0 shadow-lg rounded-4">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title fw-bold">\r
              <i class="bx bx-pencil me-2 text-primary"></i>Ubah Waktu Kerja\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeModal()"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body pt-3">\r
\r
            <!-- Error -->\r
            @if (modalError()) {\r
              <div class="alert alert-danger py-2 small mb-3">{{ modalError() }}</div>\r
            }\r
\r
            <!-- Nama Karyawan -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small text-muted">Nama <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control form-control-sm"\r
                     [value]="karyawan()?.namaLengkap || ''" readonly />\r
            </div>\r
\r
            <!-- Pilih Pola Kerja -->\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold small text-muted">Pola Kerja <span class="text-danger">*</span></label>\r
              <div class="d-flex gap-2">\r
                <select class="form-select form-select-sm"\r
                        [ngModel]="selectedPolaId()"\r
                        (ngModelChange)="selectedPolaId.set(+$event || null)">\r
                  <option [ngValue]="null" disabled>\u2014 Pilih Pola Kerja \u2014</option>\r
                  @for (p of allPolaKerja(); track p.id) {\r
                    <option [value]="p.id">{{ p.namaPolaKerja }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Preview Pola Terpilih -->\r
            @if (selectedPolaPreview(); as prev) {\r
              <div class="modal-preview-box">\r
                <div class="mb-2 small text-muted fw-semibold">\r
                  Toleransi Keterlambatan: {{ prev.toleransiKeterlambatan }} Menit\r
                </div>\r
                <div class="table-responsive">\r
                  <table class="table table-sm table-bordered mb-0" style="font-size:.82rem">\r
                    <thead class="table-light">\r
                      <tr>\r
                        <th>Hari</th>\r
                        <th>Pola Kerja</th>\r
                        <th>Jam Masuk</th>\r
                        <th>Jam Keluar</th>\r
                        <th>Mulai Istirahat</th>\r
                        <th>Selesai Istirahat</th>\r
                        <th>Maks. Menit Istirahat</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (h of prev.hariList; track h.hari) {\r
                        <tr [class.table-warning]="h.polaHari === 'LIBUR'">\r
                          <td class="fw-semibold">{{ h.hari }}</td>\r
                          <td>\r
                            @if (h.polaHari === 'HARI_KERJA') { Hari Kerja }\r
                            @else if (h.polaHari === 'LIBUR') { Jadwal Libur }\r
                            @else { Fleksibel }\r
                          </td>\r
                          <td>{{ h.jamMasuk || '\u2014' }}</td>\r
                          <td>{{ h.jamKeluar || '\u2014' }}</td>\r
                          <td>{{ h.mulaiIstirahat || '\u2014' }}</td>\r
                          <td>{{ h.selesaiIstirahat || '\u2014' }}</td>\r
                          <td>{{ h.maksMenitIstirahat || '\u2014' }}</td>\r
                        </tr>\r
                      }\r
                    </tbody>\r
                  </table>\r
                </div>\r
              </div>\r
            }\r
\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="closeModal()"\r
                    [disabled]="modalSaving()">\r
              Tutup\r
            </button>\r
            <button class="btn btn-primary btn-sm px-4"\r
                    (click)="savePolaKerja()"\r
                    [disabled]="modalSaving() || !selectedPolaId()">\r
              @if (modalSaving()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              }\r
              Simpan\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/karyawan/karyawan-jadwal-kerja/karyawan-jadwal-kerja.component.scss */\n.info-bar {\n  border-radius: 12px !important;\n}\n.jadwal-card-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid #f1f3f5;\n  display: flex;\n  align-items: center;\n  font-size: 0.88rem;\n  color: #374151;\n}\n.badge-sistem {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 9999px;\n  font-size: 0.76rem;\n  font-weight: 600;\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.stat-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  background: #f3f4f6;\n  color: #374151;\n  font-weight: 500;\n}\n.table thead th {\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  padding: 11px 16px;\n  background: #fafafa;\n  border-bottom: 1px solid #f1f3f5;\n}\n.table tbody td {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f9fafb;\n  vertical-align: middle;\n}\n.table tbody tr:last-child td {\n  border-bottom: none;\n}\n.chip-status {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.chip-kerja {\n  background: #dcfce7;\n  color: #15803d;\n}\n.chip-libur {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.chip-fleksibel {\n  background: #fef9c3;\n  color: #a16207;\n}\n.stat-row-inline {\n  font-size: 0.82rem;\n  color: #374151;\n}\n.stat-row-inline strong {\n  color: #111827;\n}\n.jadwal-list-wrap {\n  max-height: 520px;\n  overflow-y: auto;\n}\n.jadwal-row {\n  display: flex;\n  align-items: baseline;\n  gap: 24px;\n  padding: 11px 20px;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.87rem;\n  transition: background 0.1s;\n}\n.jadwal-row:last-child {\n  border-bottom: none;\n}\n.jadwal-row:hover {\n  background: #fafafe;\n}\n.jadwal-row--libur {\n  background: #fffbeb;\n}\n.jadwal-row--kalender {\n  background: #fef2f2;\n}\n.jadwal-tgl {\n  min-width: 175px;\n  flex-shrink: 0;\n  color: #6b7280;\n  font-size: 0.82rem;\n  text-align: right;\n}\n.jadwal-ket {\n  flex: 1;\n  color: #111827;\n}\n.text-libur {\n  color: #b45309;\n}\n.text-kalender {\n  color: #b91c1c;\n  font-style: italic;\n}\n.btn-ubah {\n  background: #7c3aed;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 6px 16px;\n  transition: background 0.15s;\n}\n.btn-ubah:hover {\n  background: #6d28d9;\n  color: #fff;\n}\n.btn-ubah:disabled {\n  background: #c4b5fd;\n}\n.modal-preview-box {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=karyawan-jadwal-kerja.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanJadwalKerjaComponent, { className: "KaryawanJadwalKerjaComponent", filePath: "src/app/features/karyawan/karyawan-jadwal-kerja/karyawan-jadwal-kerja.component.ts", lineNumber: 27 });
})();
export {
  KaryawanJadwalKerjaComponent
};
//# sourceMappingURL=chunk-S7RU3DKL.js.map
