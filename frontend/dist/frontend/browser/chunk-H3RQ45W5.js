import {
  AbsensiService
} from "./chunk-ZRLBCAEX.js";
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
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-QLIULQP5.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// src/app/features/absensi/check-in-out/check-in-out.component.ts
var _c0 = ["videoEl"];
var _c1 = ["canvasEl"];
var _forTrack0 = ($index, $item) => $item.val;
var _forTrack1 = ($index, $item) => $item.id;
var arrowFn0 = (ctx, view) => (a) => a.menitTerlambat > 0;
var arrowFn1 = (ctx, view) => (a) => a.status === "ALPHA";
function CheckInOutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg(), " ");
  }
}
function CheckInOutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.error.set(""));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function CheckInOutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3, "Memuat data absensi...");
    \u0275\u0275elementEnd()();
  }
}
function CheckInOutComponent_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.hariLabel(ctx_r0.hariIni().namaHari), ", ", ctx_r0.formatTanggal(ctx_r0.hariIni().tanggal), " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.hariIni().fotoProfil, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariIni().namaKaryawan.charAt(0), " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.hariIni().namaJabatan, " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
    \u0275\u0275elementStart(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hariIni().namaPolaKerja);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275conditionalCreate(1, CheckInOutComponent_Conditional_15_Conditional_8_Conditional_1_Template, 1, 1, "img", 57)(2, CheckInOutComponent_Conditional_15_Conditional_8_Conditional_2_Template, 2, 1, "div", 58);
    \u0275\u0275elementStart(3, "div")(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, CheckInOutComponent_Conditional_15_Conditional_8_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 61)(10, "div", 62);
    \u0275\u0275element(11, "i", 63);
    \u0275\u0275text(12, " Jadwal Kerja Hari Ini ");
    \u0275\u0275conditionalCreate(13, CheckInOutComponent_Conditional_15_Conditional_8_Conditional_13_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 64)(15, "div", 65)(16, "div", 66);
    \u0275\u0275text(17, "Mulai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 67);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "i", 68);
    \u0275\u0275elementStart(21, "div", 65)(22, "div", 66);
    \u0275\u0275text(23, "Selesai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 67);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariIni().fotoProfil ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.hariIni().namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariIni().namaDivisi ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariIni().namaJabatan ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.hariIni().namaPolaKerja ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariIni().jamKerjaMulai ?? "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariIni().jamKerjaSelesai ?? "\u2014", " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("bg-" + ctx_r0.statusClass(ctx_r0.hariIni().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariIni().status, " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Terlambat ", ctx_r0.terlambatLabel(ctx_r0.hariIni().menitTerlambat), " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.kameraError);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_15_Conditional_0_Template, 4, 1, "div", 87);
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.bukaKamera());
    });
    \u0275\u0275element(2, "div", 89)(3, "div", 90);
    \u0275\u0275elementStart(4, "div", 91)(5, "div", 92);
    \u0275\u0275element(6, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 94)(8, "div", 95);
    \u0275\u0275text(9, " Tap untuk Buka Kamera ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 96);
    \u0275\u0275text(11, " Ambil foto selfie langsung ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 97);
    \u0275\u0275element(13, "div", 98);
    \u0275\u0275elementStart(14, "span", 99);
    \u0275\u0275text(15, "atau");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "input", 100);
    \u0275\u0275listener("change", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_15_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFotoChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.kameraError ? 0 : -1);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "video", 103, 1)(3, "div", 104);
    \u0275\u0275elementStart(4, "div", 105);
    \u0275\u0275element(5, "span", 106);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 107);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.flipKamera());
    });
    \u0275\u0275element(8, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 109);
    \u0275\u0275elementStart(10, "div", 110)(11, "button", 111);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_16_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.ulangiKamera());
    });
    \u0275\u0275element(12, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 113);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_16_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.ambilFoto());
    });
    \u0275\u0275element(14, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 111);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_16_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.flipKamera());
    });
    \u0275\u0275element(16, "i", 115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 116);
    \u0275\u0275element(18, "i", 117);
    \u0275\u0275text(19, " Posisikan wajah di lingkaran, lalu tekan tombol hijau ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.jamSekarang(), " ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.fotoFile.size / 1024).toFixed(0), " KB ");
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "span", 85);
    \u0275\u0275text(2, " Mengambil lokasi GPS... ");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 18);
    \u0275\u0275element(2, "i", 134);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Lokasi berhasil direkam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 135);
    \u0275\u0275element(6, "i", 136);
    \u0275\u0275text(7, "Lihat Maps ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.lokasiMapsUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 18);
    \u0275\u0275element(2, "i", 137);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 138);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dapatkanLokasi());
    });
    \u0275\u0275text(6, " Coba Lagi ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lokasiError);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "img", 119);
    \u0275\u0275elementStart(2, "div", 120)(3, "div", 121)(4, "div", 122);
    \u0275\u0275element(5, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 124);
    \u0275\u0275text(7, "Foto siap");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_8_Template, 2, 1, "span", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 126);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFoto());
    });
    \u0275\u0275element(10, "i", 127);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 128);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.ulangiKamera());
    });
    \u0275\u0275element(12, "i", 129);
    \u0275\u0275text(13, " Ambil Ulang Foto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 130);
    \u0275\u0275conditionalCreate(15, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_15_Template, 3, 0, "div", 131);
    \u0275\u0275conditionalCreate(16, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_16_Template, 8, 1, "div", 132);
    \u0275\u0275conditionalCreate(17, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Conditional_17_Template, 7, 1, "div", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.fotoFile ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "loading" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "ok" && ctx_r0.lokasiMapsUrl ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "error" ? 17 : -1);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 139);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Ambil foto selfie terlebih dahulu untuk melanjutkan check-in.");
    \u0275\u0275elementEnd()();
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 85);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 86);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 71);
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275text(3, " Form Check-In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "div", 74)(6, "label", 75);
    \u0275\u0275element(7, "i", 76);
    \u0275\u0275text(8, " Foto Selfie ");
    \u0275\u0275elementStart(9, "span", 77);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 78);
    \u0275\u0275text(12, " wajib ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "canvas", 79, 0);
    \u0275\u0275conditionalCreate(15, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_15_Template, 18, 1);
    \u0275\u0275conditionalCreate(16, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_16_Template, 20, 1);
    \u0275\u0275conditionalCreate(17, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_17_Template, 18, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 80);
    \u0275\u0275elementStart(19, "div", 73)(20, "label", 81);
    \u0275\u0275text(21, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "textarea", 82);
    \u0275\u0275twoWayListener("ngModelChange", function CheckInOutComponent_Conditional_15_Conditional_33_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.catatanCheckIn, $event) || (ctx_r0.catatanCheckIn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_23_Template, 4, 0, "div", 83);
    \u0275\u0275elementStart(24, "button", 84);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_33_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.doCheckIn());
    });
    \u0275\u0275conditionalCreate(25, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_25_Template, 1, 0, "span", 85)(26, CheckInOutComponent_Conditional_15_Conditional_33_Conditional_26_Template, 1, 0, "i", 86);
    \u0275\u0275text(27, " Check-In Sekarang ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r0.fotoMode === "idle" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fotoMode === "camera" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fotoMode === "preview" && ctx_r0.fotoPreview ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.catatanCheckIn);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.fotoFile ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.saving() || !ctx_r0.fotoFile);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 25 : 26);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 147);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dapatkanLokasi());
    });
    \u0275\u0275element(1, "i", 148);
    \u0275\u0275text(2, "Rekam Lokasi Saat Ini ");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "span", 85);
    \u0275\u0275text(2, " Mengambil lokasi GPS... ");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 18);
    \u0275\u0275element(2, "i", 134);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Lokasi berhasil direkam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 135);
    \u0275\u0275element(6, "i", 136);
    \u0275\u0275text(7, "Lihat Maps ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.lokasiMapsUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 18);
    \u0275\u0275element(2, "i", 137);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 138);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dapatkanLokasi());
    });
    \u0275\u0275text(6, " Coba Lagi ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lokasiError);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 85);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 146);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 71);
    \u0275\u0275element(2, "i", 140);
    \u0275\u0275text(3, " Form Check-Out ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "label", 81);
    \u0275\u0275text(6, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "textarea", 141);
    \u0275\u0275twoWayListener("ngModelChange", function CheckInOutComponent_Conditional_15_Conditional_34_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.catatanCheckOut, $event) || (ctx_r0.catatanCheckOut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "label", 142);
    \u0275\u0275element(10, "i", 143);
    \u0275\u0275text(11, " Lokasi ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CheckInOutComponent_Conditional_15_Conditional_34_Conditional_12_Template, 3, 0, "button", 144);
    \u0275\u0275conditionalCreate(13, CheckInOutComponent_Conditional_15_Conditional_34_Conditional_13_Template, 3, 0, "div", 131);
    \u0275\u0275conditionalCreate(14, CheckInOutComponent_Conditional_15_Conditional_34_Conditional_14_Template, 8, 1, "div", 132);
    \u0275\u0275conditionalCreate(15, CheckInOutComponent_Conditional_15_Conditional_34_Conditional_15_Template, 7, 1, "div", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 145);
    \u0275\u0275listener("click", function CheckInOutComponent_Conditional_15_Conditional_34_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.doCheckOut());
    });
    \u0275\u0275conditionalCreate(17, CheckInOutComponent_Conditional_15_Conditional_34_Conditional_17_Template, 1, 0, "span", 85)(18, CheckInOutComponent_Conditional_15_Conditional_34_Conditional_18_Template, 1, 0, "i", 146);
    \u0275\u0275text(19, " Check-Out Sekarang ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.catatanCheckOut);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "idle" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "loading" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "ok" && ctx_r0.lokasiMapsUrl ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lokasiStatus === "error" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 17 : 18);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_35_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "img", 154);
    \u0275\u0275elementStart(2, "div", 155);
    \u0275\u0275text(3, "Foto Absen Masuk");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.hariIni().fotoMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_35_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "a", 156);
    \u0275\u0275element(2, "i", 157);
    \u0275\u0275text(3, "Lokasi Masuk ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.hariIni().lokasiMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_35_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "a", 158);
    \u0275\u0275element(2, "i", 157);
    \u0275\u0275text(3, "Lokasi Keluar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.hariIni().lokasiKeluarUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_15_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 149);
    \u0275\u0275element(2, "i", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 151);
    \u0275\u0275text(4, "Presensi hari ini selesai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 152);
    \u0275\u0275text(6, " Masuk: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \xB7 Keluar: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, CheckInOutComponent_Conditional_15_Conditional_35_Conditional_12_Template, 4, 1, "div", 130);
    \u0275\u0275conditionalCreate(13, CheckInOutComponent_Conditional_15_Conditional_35_Conditional_13_Template, 4, 1, "div", 130);
    \u0275\u0275conditionalCreate(14, CheckInOutComponent_Conditional_15_Conditional_35_Conditional_14_Template, 4, 1, "div", 153);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatTime((tmp_2_0 = ctx_r0.hariIni()) == null ? null : tmp_2_0.jamMasuk));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatTime((tmp_3_0 = ctx_r0.hariIni()) == null ? null : tmp_3_0.jamKeluar));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r0.hariIni()) == null ? null : tmp_4_0.fotoMasukUrl) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.hariIni()) == null ? null : tmp_5_0.lokasiMasukUrl) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r0.hariIni()) == null ? null : tmp_6_0.lokasiKeluarUrl) ? 14 : -1);
  }
}
function CheckInOutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CheckInOutComponent_Conditional_15_Conditional_7_Template, 2, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CheckInOutComponent_Conditional_15_Conditional_8_Template, 26, 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 40)(10, "div", 41)(11, "div", 42);
    \u0275\u0275element(12, "i", 43);
    \u0275\u0275elementStart(13, "h6", 20);
    \u0275\u0275text(14, "Presensi Hari Ini");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, CheckInOutComponent_Conditional_15_Conditional_15_Template, 2, 3, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 45)(17, "div", 14)(18, "div", 46)(19, "div", 47);
    \u0275\u0275element(20, "i", 48);
    \u0275\u0275elementStart(21, "div", 49);
    \u0275\u0275text(22, " Check-In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 50);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, CheckInOutComponent_Conditional_15_Conditional_25_Template, 2, 1, "div", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 46)(27, "div", 47);
    \u0275\u0275element(28, "i", 52);
    \u0275\u0275elementStart(29, "div", 49);
    \u0275\u0275text(30, " Check-Out ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 50);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(33, CheckInOutComponent_Conditional_15_Conditional_33_Template, 28, 7, "div", 53);
    \u0275\u0275conditionalCreate(34, CheckInOutComponent_Conditional_15_Conditional_34_Template, 20, 7, "div", 54);
    \u0275\u0275conditionalCreate(35, CheckInOutComponent_Conditional_15_Conditional_35_Template, 15, 5, "div", 55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.jamSekarang(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariIni() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hariIni() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r0.hariIni()) == null ? null : tmp_4_0.status) ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r0.sudahCheckIn() ? "#dcfce7" : "#f3f4f6");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.sudahCheckIn() ? "#16a34a" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.sudahCheckIn() ? "#166534" : "#6b7280");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.sudahCheckIn() ? "#15803d" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx_r0.hariIni()) == null ? null : tmp_9_0.jamMasuk) ? ctx_r0.formatTime(ctx_r0.hariIni().jamMasuk) : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r0.hariIni()) == null ? null : tmp_10_0.menitTerlambat) && ctx_r0.hariIni().menitTerlambat > 0 ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.sudahCheckOut() ? "#dbeafe" : "#f3f4f6");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.sudahCheckOut() ? "#1d4ed8" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.sudahCheckOut() ? "#1e40af" : "#6b7280");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.sudahCheckOut() ? "#1d4ed8" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = ctx_r0.hariIni()) == null ? null : tmp_15_0.jamKeluar) ? ctx_r0.formatTime(ctx_r0.hariIni().jamKeluar) : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.sudahCheckIn() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.sudahCheckIn() && !ctx_r0.sudahCheckOut() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.sudahCheckIn() && ctx_r0.sudahCheckOut() ? 35 : -1);
  }
}
function CheckInOutComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r11 = ctx.$implicit;
    \u0275\u0275property("value", b_r11.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r11.label);
  }
}
function CheckInOutComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r12 = ctx.$implicit;
    \u0275\u0275property("value", y_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r12);
  }
}
function CheckInOutComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "div", 159);
    \u0275\u0275elementStart(2, "span", 160);
    \u0275\u0275text(3, "Memuat riwayat...");
    \u0275\u0275elementEnd()();
  }
}
function CheckInOutComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 161);
    \u0275\u0275elementStart(2, "div", 162);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Tidak ada data absensi untuk ", ctx_r0.namaBulanDari(ctx_r0.filterBulan), " ", ctx_r0.filterTahun, " ");
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r13.namaPolaKerja);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "span", 173);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 182);
    \u0275\u0275elementStart(4, "span", 173);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, CheckInOutComponent_Conditional_36_For_26_Conditional_12_Conditional_6_Template, 2, 1, "div", 183);
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r13.jamKerjaMulai, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r13.jamKerjaSelesai ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.namaPolaKerja ? 6 : -1);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r0.terlambatLabel(a_r13.menitTerlambat), " ");
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CheckInOutComponent_Conditional_36_For_26_Conditional_15_Conditional_2_Template, 2, 1, "div", 185);
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(a_r13.jamMasuk), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.menitTerlambat > 0 ? 2 : -1);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(a_r13.jamKeluar), " ");
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 175);
    \u0275\u0275text(1, "Belum keluar");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "Masuk:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r13.catatanMasuk, " ");
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "br");
    \u0275\u0275elementStart(1, "span", 168);
    \u0275\u0275text(2, "Keluar:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r13.catatanKeluar, " ");
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275conditionalCreate(1, CheckInOutComponent_Conditional_36_For_26_Conditional_24_Conditional_1_Template, 3, 1);
    \u0275\u0275conditionalCreate(2, CheckInOutComponent_Conditional_36_For_26_Conditional_24_Conditional_2_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate(a_r13.catatanMasuk));
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.catatanMasuk ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.catatanKeluar ? 2 : -1);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 179);
    \u0275\u0275element(1, "img", 186);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r13.fotoMasukUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", a_r13.fotoMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 187);
    \u0275\u0275element(1, "i", 189);
    \u0275\u0275text(2, " Masuk ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", a_r13.lokasiMasukUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 188);
    \u0275\u0275element(1, "i", 189);
    \u0275\u0275text(2, " Keluar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", a_r13.lokasiKeluarUrl, \u0275\u0275sanitizeUrl);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180);
    \u0275\u0275conditionalCreate(1, CheckInOutComponent_Conditional_36_For_26_Conditional_30_Conditional_1_Template, 3, 1, "a", 187);
    \u0275\u0275conditionalCreate(2, CheckInOutComponent_Conditional_36_For_26_Conditional_30_Conditional_2_Template, 3, 1, "a", 188);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.lokasiMasukUrl ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.lokasiKeluarUrl ? 2 : -1);
  }
}
function CheckInOutComponent_Conditional_36_For_26_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 172);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CheckInOutComponent_Conditional_36_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 168);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 171);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 172);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 173);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, CheckInOutComponent_Conditional_36_For_26_Conditional_12_Template, 7, 3)(13, CheckInOutComponent_Conditional_36_For_26_Conditional_13_Template, 2, 0, "span", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 94);
    \u0275\u0275conditionalCreate(15, CheckInOutComponent_Conditional_36_For_26_Conditional_15_Template, 3, 2)(16, CheckInOutComponent_Conditional_36_For_26_Conditional_16_Template, 2, 0, "span", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 94);
    \u0275\u0275conditionalCreate(18, CheckInOutComponent_Conditional_36_For_26_Conditional_18_Template, 2, 1, "div", 174)(19, CheckInOutComponent_Conditional_36_For_26_Conditional_19_Template, 2, 0, "span", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 94)(21, "span", 176);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 177);
    \u0275\u0275conditionalCreate(24, CheckInOutComponent_Conditional_36_For_26_Conditional_24_Template, 3, 4, "div", 178)(25, CheckInOutComponent_Conditional_36_For_26_Conditional_25_Template, 2, 0, "span", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 94);
    \u0275\u0275conditionalCreate(27, CheckInOutComponent_Conditional_36_For_26_Conditional_27_Template, 2, 2, "a", 179)(28, CheckInOutComponent_Conditional_36_For_26_Conditional_28_Template, 2, 0, "span", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 94);
    \u0275\u0275conditionalCreate(30, CheckInOutComponent_Conditional_36_For_26_Conditional_30_Template, 3, 2, "div", 180)(31, CheckInOutComponent_Conditional_36_For_26_Conditional_31_Template, 2, 0, "span", 172);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r13 = ctx.$implicit;
    const \u0275$index_561_r14 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_561_r14 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hariLabel(a_r13.namaHari), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(a_r13.tanggal), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.namaBulanDari(a_r13.bulan), " ", a_r13.tahun, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r13.jamKerjaMulai ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r13.jamMasuk ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r13.jamKeluar ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("bg-" + ctx_r0.statusClass(a_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r13.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r13.catatanMasuk || a_r13.catatanKeluar ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r13.fotoMasukUrl ? 27 : 28);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r13.lokasiMasukUrl || a_r13.lokasiKeluarUrl ? 30 : 31);
  }
}
function CheckInOutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163)(1, "table", 164)(2, "thead", 165)(3, "tr")(4, "th", 166);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Hari & Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Bulan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Jam Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 94);
    \u0275\u0275text(13, "Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 94);
    \u0275\u0275text(15, "Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 94);
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 94);
    \u0275\u0275text(21, "Foto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 94);
    \u0275\u0275text(23, "Lokasi GPS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, CheckInOutComponent_Conditional_36_For_26_Template, 32, 14, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 167)(28, "span", 168);
    \u0275\u0275text(29, " Total: ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " hari ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 169);
    \u0275\u0275text(34, " Terlambat: ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "span", 170);
    \u0275\u0275text(38, " Alpha/Tanpa Keterangan: ");
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r0.riwayat());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.riwayat().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.riwayat().filter(\u0275\u0275arrowFunction(3, arrowFn0, ctx)).length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.riwayat().filter(\u0275\u0275arrowFunction(4, arrowFn1, ctx)).length);
  }
}
var CheckInOutComponent = class _CheckInOutComponent {
  constructor() {
    this.svc = inject(AbsensiService);
    this.auth = inject(AuthService);
    this.hariIni = signal(null, ...ngDevMode ? [{ debugName: "hariIni" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayat = signal([], ...ngDevMode ? [{ debugName: "riwayat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loadingRiwayat = signal(false, ...ngDevMode ? [{ debugName: "loadingRiwayat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.successMsg = signal("", ...ngDevMode ? [{ debugName: "successMsg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.catatanCheckIn = "";
    this.catatanCheckOut = "";
    this.fotoFile = null;
    this.fotoPreview = null;
    this.lokasiLat = null;
    this.lokasiLng = null;
    this.lokasiStatus = "idle";
    this.lokasiError = "";
    this.fotoMode = "idle";
    this.stream = null;
    this.kameraError = "";
    this.facingMode = "user";
    this.filterBulan = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.filterTahun = (/* @__PURE__ */ new Date()).getFullYear();
    this.listBulan = [
      { val: 1, label: "Januari" },
      { val: 2, label: "Februari" },
      { val: 3, label: "Maret" },
      { val: 4, label: "April" },
      { val: 5, label: "Mei" },
      { val: 6, label: "Juni" },
      { val: 7, label: "Juli" },
      { val: 8, label: "Agustus" },
      { val: 9, label: "September" },
      { val: 10, label: "Oktober" },
      { val: 11, label: "November" },
      { val: 12, label: "Desember" }
    ];
    this.listTahun = Array.from({ length: 5 }, (_, i) => (/* @__PURE__ */ new Date()).getFullYear() - i);
    this.jamSekarang = signal(this.formatJam(/* @__PURE__ */ new Date()), ...ngDevMode ? [{ debugName: "jamSekarang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sudahCheckIn = computed(() => this.hariIni()?.sudahCheckIn ?? false, ...ngDevMode ? [{ debugName: "sudahCheckIn" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sudahCheckOut = computed(() => this.hariIni()?.sudahCheckOut ?? false, ...ngDevMode ? [{ debugName: "sudahCheckOut" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // ══════════════════════════════════════════════════════════
  ngOnInit() {
    this.loadHariIni();
    this.loadRiwayat();
    this.clockInterval = setInterval(() => this.jamSekarang.set(this.formatJam(/* @__PURE__ */ new Date())), 1e3);
    this.dapatkanLokasi();
  }
  ngOnDestroy() {
    clearInterval(this.clockInterval);
    this.stopStream();
  }
  // ── Kamera ────────────────────────────────────────────────
  bukaKamera() {
    return __async(this, null, function* () {
      this.kameraError = "";
      this.fotoMode = "camera";
      try {
        this.stream = yield navigator.mediaDevices.getUserMedia({
          video: { facingMode: this.facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
        setTimeout(() => {
          if (this.videoEl?.nativeElement) {
            this.videoEl.nativeElement.srcObject = this.stream;
            this.videoEl.nativeElement.play();
          }
        }, 100);
      } catch (err) {
        this.kameraError = err?.name === "NotAllowedError" ? "Izin kamera ditolak. Silakan izinkan akses kamera di browser." : "Kamera tidak tersedia di perangkat ini.";
        this.fotoMode = "idle";
      }
    });
  }
  flipKamera() {
    return __async(this, null, function* () {
      this.stopStream();
      this.facingMode = this.facingMode === "user" ? "environment" : "user";
      yield this.bukaKamera();
    });
  }
  ambilFoto() {
    const video = this.videoEl?.nativeElement;
    const canvas = this.canvasEl?.nativeElement;
    if (!video || !canvas)
      return;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    if (this.facingMode === "user") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.fotoPreview = canvas.toDataURL("image/jpeg", 0.85);
    this.stopStream();
    this.fotoMode = "preview";
    canvas.toBlob((blob) => {
      if (blob) {
        this.fotoFile = new File([blob], `selfie-${Date.now()}.jpg`, { type: "image/jpeg" });
      }
    }, "image/jpeg", 0.85);
    this.dapatkanLokasi();
  }
  ulangiKamera() {
    this.stopStream();
    this.fotoFile = null;
    this.fotoPreview = null;
    this.fotoMode = "idle";
    this.lokasiLat = null;
    this.lokasiLng = null;
    this.lokasiStatus = "idle";
    this.lokasiError = "";
  }
  // ── Lokasi GPS ────────────────────────────────────────────
  dapatkanLokasi() {
    if (!navigator.geolocation) {
      this.lokasiStatus = "error";
      this.lokasiError = "Browser tidak mendukung GPS.";
      return;
    }
    this.lokasiStatus = "loading";
    this.lokasiError = "";
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lokasiLat = pos.coords.latitude;
      this.lokasiLng = pos.coords.longitude;
      this.lokasiStatus = "ok";
    }, (err) => {
      this.lokasiStatus = "error";
      this.lokasiError = err.code === 1 ? "Izin lokasi ditolak. Aktifkan GPS di browser." : "Gagal mendapatkan lokasi.";
    }, { timeout: 1e4, enableHighAccuracy: true });
  }
  get lokasiMapsUrl() {
    if (this.lokasiLat == null || this.lokasiLng == null)
      return null;
    return `https://www.google.com/maps?q=${this.lokasiLat},${this.lokasiLng}`;
  }
  stopStream() {
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
  }
  // ── Galeri ────────────────────────────────────────────────
  bukaGaleri() {
    document.getElementById("inputFotoMasuk")?.click();
  }
  onFotoChange(event) {
    const input = event.target;
    if (input.files?.length) {
      this.fotoFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fotoPreview = e.target?.result;
        this.fotoMode = "preview";
      };
      reader.readAsDataURL(this.fotoFile);
      this.dapatkanLokasi();
    }
  }
  removeFoto() {
    this.fotoFile = null;
    this.fotoPreview = null;
    this.fotoMode = "idle";
    this.lokasiLat = null;
    this.lokasiLng = null;
    this.lokasiStatus = "idle";
    this.lokasiError = "";
  }
  // ── Format helpers ────────────────────────────────────────
  formatJam(d) {
    return d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }
  formatTime(t) {
    if (!t)
      return "\u2014";
    return t.substring(0, 5);
  }
  formatTanggal(t) {
    if (!t)
      return "\u2014";
    return new Date(t).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
  }
  namaBulanDari(val) {
    return this.listBulan.find((b) => b.val === val)?.label ?? "";
  }
  hariLabel(h) {
    const map = {
      SENIN: "Senin",
      SELASA: "Selasa",
      RABU: "Rabu",
      KAMIS: "Kamis",
      JUMAT: "Jumat",
      SABTU: "Sabtu",
      MINGGU: "Minggu"
    };
    return map[h] ?? h;
  }
  statusClass(s) {
    return s === "HADIR" ? "success" : s === "IZIN" ? "info" : s === "SAKIT" ? "warning" : "danger";
  }
  terlambatLabel(menit) {
    if (!menit || menit <= 0)
      return "";
    if (menit < 60)
      return `${menit} menit`;
    const j = Math.floor(menit / 60), m = menit % 60;
    return m > 0 ? `${j} jam ${m} mnt` : `${j} jam`;
  }
  // ── Load data ─────────────────────────────────────────────
  loadHariIni() {
    this.loading.set(true);
    this.svc.getHariIni().subscribe({
      next: (d) => {
        this.hariIni.set(d);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadRiwayat() {
    this.loadingRiwayat.set(true);
    this.svc.getRiwayat(this.filterBulan, this.filterTahun).subscribe({
      next: (d) => {
        this.riwayat.set(d);
        this.loadingRiwayat.set(false);
      },
      error: () => {
        this.loadingRiwayat.set(false);
      }
    });
  }
  onFilterRiwayat() {
    this.loadRiwayat();
  }
  // ── Check In ──────────────────────────────────────────────
  doCheckIn() {
    if (!this.fotoFile) {
      this.error.set("Foto selfie wajib diambil sebelum check-in.");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    this.successMsg.set("");
    this.svc.checkIn(this.catatanCheckIn || void 0, this.fotoFile, this.lokasiLat ?? void 0, this.lokasiLng ?? void 0).subscribe({
      next: (d) => {
        this.hariIni.set(d);
        this.saving.set(false);
        this.successMsg.set("\u2705 Check-in berhasil!");
        this.catatanCheckIn = "";
        this.fotoFile = null;
        this.fotoPreview = null;
        this.fotoMode = "idle";
        this.lokasiLat = null;
        this.lokasiLng = null;
        this.lokasiStatus = "idle";
        this.loadRiwayat();
        this.dapatkanLokasi();
        setTimeout(() => this.successMsg.set(""), 3e3);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? "Gagal check-in. Coba lagi.");
        this.saving.set(false);
      }
    });
  }
  // ── Check Out ─────────────────────────────────────────────
  doCheckOut() {
    this.saving.set(true);
    this.error.set("");
    this.successMsg.set("");
    this.svc.checkOut(this.catatanCheckOut || void 0, this.lokasiLat ?? void 0, this.lokasiLng ?? void 0).subscribe({
      next: (d) => {
        this.hariIni.set(d);
        this.saving.set(false);
        this.successMsg.set("\u2705 Check-out berhasil!");
        this.catatanCheckOut = "";
        this.lokasiLat = null;
        this.lokasiLng = null;
        this.lokasiStatus = "idle";
        this.loadRiwayat();
        setTimeout(() => this.successMsg.set(""), 3e3);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? "Gagal check-out. Coba lagi.");
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function CheckInOutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckInOutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckInOutComponent, selectors: [["app-check-in-out"]], viewQuery: function CheckInOutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasEl = _t.first);
      }
    }, decls: 37, vars: 7, consts: [["canvasEl", ""], ["videoEl", ""], [1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], [1, "breadcrumb-item", "active"], [1, "alert", "alert-success", "d-flex", "align-items-center", "gap-2", "py-2", "mb-3"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "py-2", "mb-3"], [1, "text-center", "py-5"], [1, "row", "g-3", "mb-4"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-transparent", "border-0", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-history", "text-primary", "fs-5"], [1, "mb-0", "fw-semibold"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], [1, "form-select", "form-select-sm", 2, "max-width", "130px", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "form-select", "form-select-sm", 2, "max-width", "90px", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click", "disabled"], [1, "bx", "bx-filter-alt", "me-1"], [1, "card-body", "pt-2"], [1, "text-center", "py-4"], [1, "bx", "bx-check-circle", "fs-5"], [1, "bx", "bx-error-circle", "fs-5"], [1, "btn-close", "ms-auto", 3, "click"], [1, "spinner-border", "text-primary"], [1, "text-muted", "mt-2"], [1, "col-12", "col-lg-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "background", "linear-gradient(135deg,#4f46e5,#7c3aed)", "color", "#fff"], [1, "card-body", "d-flex", "flex-column", "justify-content-between"], [1, "text-center", "mb-3"], [2, "font-size", "2.8rem", "font-weight", "700", "letter-spacing", ".05em", "font-variant-numeric", "tabular-nums"], [2, "font-size", "1rem", "opacity", ".85"], [1, "col-12", "col-lg-8"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-header", "bg-transparent", "border-0", "pb-0", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-fingerprint", "text-primary", "fs-5"], [1, "badge", "ms-auto", 3, "class"], [1, "card-body"], [1, "col-6"], [1, "rounded-3", "p-3", "text-center"], [1, "bx", "bx-log-in", "fs-3"], [1, "fw-semibold", "mt-1", 2, "font-size", ".82rem"], [1, "fw-bold", 2, "font-size", "1.4rem"], [1, "badge", "bg-danger", "mt-1", 2, "font-size", ".68rem"], [1, "bx", "bx-log-out", "fs-3"], [1, "border", "rounded-3", "p-3", "mb-3", 2, "background", "#fafafa"], [1, "border", "rounded-3", "p-3", 2, "background", "#fafafa"], [1, "text-center", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "rounded-3", "p-2", "mb-3", 2, "background", "rgba(255,255,255,.15)"], ["onerror", "this.style.display='none'", 1, "rounded-circle", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid rgba(255,255,255,.5)", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "44px", "height", "44px", "background", "rgba(255,255,255,.25)", "font-weight", "700", "font-size", "1.1rem"], [1, "fw-semibold", 2, "font-size", ".9rem"], [2, "font-size", ".78rem", "opacity", ".8"], [1, "rounded-3", "p-2", 2, "background", "rgba(255,255,255,.12)"], [2, "font-size", ".72rem", "opacity", ".75", "margin-bottom", "4px"], [1, "bx", "bx-calendar-check", "me-1"], [1, "d-flex", "align-items-center", "gap-3"], [1, "text-center", "flex-grow-1"], [2, "font-size", ".68rem", "opacity", ".7"], [2, "font-size", "1.1rem", "font-weight", "700"], [1, "bx", "bx-right-arrow-alt", 2, "opacity", ".6", "font-size", "1.3rem"], [2, "font-weight", "600"], [1, "badge", "ms-auto"], [1, "fw-semibold", "mb-3", "d-flex", "align-items-center", "gap-2", 2, "font-size", ".88rem", "color", "#374151"], [1, "bx", "bx-log-in", "text-success"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "form-label", "mb-0", "fw-semibold", 2, "font-size", ".82rem"], [1, "bx", "bx-camera", "text-primary", "me-1"], [1, "text-danger", "ms-1"], [1, "badge", "bg-danger", "text-white", 2, "font-size", ".68rem", "font-weight", "500"], [2, "display", "none"], [2, "border-top", "1px dashed #e5e7eb", "margin", ".5rem 0 1rem"], [1, "form-label", "fw-semibold", 2, "font-size", ".82rem"], ["rows", "2", "placeholder", "Tambahkan catatan (opsional)...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "gap-2", "rounded-3", "px-3", "py-2", "mb-2", 2, "background", "#fff7ed", "border", "1px solid #fed7aa", "font-size", ".78rem", "color", "#9a3412"], [1, "btn", "btn-success", "w-100", "d-flex", "align-items-center", "justify-content-center", "gap-2", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm"], [1, "bx", "bx-log-in"], [1, "d-flex", "align-items-start", "gap-2", "rounded-3", "p-2", "mb-2", 2, "background", "#fff7ed", "border", "1px solid #fed7aa", "font-size", ".78rem", "color", "#9a3412"], [1, "rounded-4", "overflow-hidden", "position-relative", 2, "background", "linear-gradient(135deg,#ede9fe,#dbeafe)", "border", "2px dashed #a5b4fc", "cursor", "pointer", "min-height", "130px", 3, "click"], [2, "position", "absolute", "width", "80px", "height", "80px", "border-radius", "50%", "background", "rgba(99,102,241,.15)", "top", "-20px", "right", "-20px"], [2, "position", "absolute", "width", "50px", "height", "50px", "border-radius", "50%", "background", "rgba(59,130,246,.12)", "bottom", "-10px", "left", "10px"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "gap-2", "py-4", "px-3", "position-relative"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "52px", "height", "52px", "background", "linear-gradient(135deg,#6366f1,#3b82f6)", "box-shadow", "0 4px 15px rgba(99,102,241,.4)"], [1, "bx", "bx-camera", "text-white", 2, "font-size", "1.4rem"], [1, "text-center"], [1, "fw-semibold", 2, "font-size", ".85rem", "color", "#4338ca"], [2, "font-size", ".72rem", "color", "#6366f1", "opacity", ".8"], [1, "d-flex", "align-items-center", "gap-2", "w-100", "mt-1"], [2, "flex", "1", "height", "1px", "background", "rgba(99,102,241,.2)"], [2, "font-size", ".68rem", "color", "#818cf8"], ["id", "inputFotoMasuk", "type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "bx", "bx-error-circle", "mt-1", "flex-shrink-0"], [1, "rounded-4", "overflow-hidden", "position-relative", 2, "background", "#0f0f1a", "box-shadow", "0 8px 32px rgba(0,0,0,.35)"], ["autoplay", "", "playsinline", "", "muted", "", 2, "width", "100%", "max-height", "300px", "object-fit", "cover", "display", "block", "transform", "scaleX(-1)"], [1, "position-absolute", "bottom-0", "start-0", "end-0", 2, "height", "80px", "background", "linear-gradient(to top,rgba(0,0,0,.7),transparent)"], [1, "position-absolute", "top-0", "start-0", "m-2", "d-flex", "align-items-center", "gap-1", "px-2", "py-1", "rounded-pill", 2, "background", "rgba(0,0,0,.45)", "backdrop-filter", "blur(6px)", "color", "#fff", "font-size", ".72rem", "font-variant-numeric", "tabular-nums"], [1, "flex-shrink-0", 2, "width", "6px", "height", "6px", "border-radius", "50%", "background", "#22c55e", "animation", "pulse 1.5s infinite"], ["type", "button", "title", "Flip kamera", 1, "position-absolute", "top-0", "end-0", "m-2", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "border-0", 2, "width", "38px", "height", "38px", "background", "rgba(255,255,255,.15)", "backdrop-filter", "blur(6px)", "color", "#fff", 3, "click"], [1, "bx", "bx-revision", 2, "font-size", "1rem"], [1, "position-absolute", "top-50", "start-50", "translate-middle", 2, "width", "150px", "height", "150px", "border-radius", "50%", "border", "2px dashed rgba(255,255,255,.4)", "pointer-events", "none"], [1, "position-absolute", "bottom-0", "start-0", "end-0", "d-flex", "align-items-center", "justify-content-center", "gap-4", "pb-3"], ["type", "button", 1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "border-0", 2, "width", "40px", "height", "40px", "background", "rgba(255,255,255,.15)", "backdrop-filter", "blur(6px)", "color", "#fff", 3, "click"], [1, "bx", "bx-x", 2, "font-size", "1.2rem"], ["type", "button", 1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "border-0", 2, "width", "64px", "height", "64px", "background", "linear-gradient(135deg,#22c55e,#16a34a)", "box-shadow", "0 0 0 4px rgba(34,197,94,.3),\n                                                  0 4px 20px rgba(22,163,74,.5)", 3, "click"], [1, "bx", "bx-aperture", "text-white", 2, "font-size", "1.6rem"], [1, "bx", "bx-camera", 2, "font-size", "1.1rem"], [1, "text-center", "mt-2", 2, "font-size", ".72rem", "color", "#6b7280"], [1, "bx", "bx-info-circle", "me-1"], [1, "rounded-4", "overflow-hidden", "position-relative", 2, "box-shadow", "0 8px 24px rgba(0,0,0,.15)"], ["alt", "Foto absen", 2, "width", "100%", "max-height", "260px", "object-fit", "cover", "display", "block", 3, "src"], [1, "position-absolute", "bottom-0", "start-0", "end-0", "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2", 2, "background", "linear-gradient(to top,rgba(0,0,0,.75),transparent)"], [1, "d-flex", "align-items-center", "gap-2", 2, "color", "#fff"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "22px", "height", "22px", "background", "#22c55e", "flex-shrink", "0"], [1, "bx", "bx-check", 2, "font-size", ".75rem"], [2, "font-size", ".75rem", "font-weight", "500"], [1, "badge", "rounded-pill", 2, "background", "rgba(255,255,255,.2)", "font-size", ".65rem", "font-weight", "400"], ["type", "button", 1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "border-0", 2, "width", "34px", "height", "34px", "background", "rgba(239,68,68,.8)", "color", "#fff", 3, "click"], [1, "bx", "bx-trash", 2, "font-size", ".9rem"], ["type", "button", 1, "btn", "w-100", "mt-2", "d-flex", "align-items-center", "justify-content-center", "gap-2", 2, "background", "#f1f5f9", "color", "#475569", "font-size", ".8rem", "border", "none", "border-radius", "12px", "padding", ".5rem", 3, "click"], [1, "bx", "bx-refresh"], [1, "mt-2"], [1, "d-flex", "align-items-center", "gap-2", "rounded-3", "px-3", "py-2", 2, "background", "#eff6ff", "font-size", ".78rem", "color", "#2563eb"], [1, "d-flex", "align-items-center", "justify-content-between", "rounded-3", "px-3", "py-2", 2, "background", "#f0fdf4", "font-size", ".78rem", "color", "#15803d"], [1, "d-flex", "align-items-center", "justify-content-between", "rounded-3", "px-3", "py-2", 2, "background", "#fff7ed", "font-size", ".78rem", "color", "#c2410c"], [1, "bx", "bx-map-pin", 2, "font-size", "1rem"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", 2, "background", "#22c55e", "color", "#fff", "font-size", ".72rem", "border-radius", "8px", "padding", ".2rem .6rem", 3, "href"], [1, "bx", "bx-map", "me-1"], [1, "bx", "bx-error-circle", 2, "font-size", "1rem"], ["type", "button", 1, "btn", "btn-sm", 2, "background", "#f97316", "color", "#fff", "font-size", ".72rem", "border-radius", "8px", "padding", ".2rem .6rem", 3, "click"], [1, "bx", "bx-camera", "flex-shrink-0"], [1, "bx", "bx-log-out", "text-primary"], ["rows", "2", "placeholder", "Catatan saat pulang (opsional)...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-flex", "align-items-center", "gap-2", 2, "font-size", ".82rem"], [1, "bx", "bx-map-pin", "text-primary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "w-100", 2, "border-radius", "10px", "font-size", ".8rem"], [1, "btn", "btn-primary", "w-100", "d-flex", "align-items-center", "justify-content-center", "gap-2", 3, "click", "disabled"], [1, "bx", "bx-log-out"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "w-100", 2, "border-radius", "10px", "font-size", ".8rem", 3, "click"], [1, "bx", "bx-current-location", "me-1"], [1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "56px", "height", "56px", "background", "#dcfce7"], [1, "bx", "bx-check-double", "text-success", 2, "font-size", "1.8rem"], [1, "fw-semibold", "text-success"], [1, "text-muted", 2, "font-size", ".82rem"], [1, "mt-1"], [1, "rounded-3", "border", 2, "max-height", "120px", "object-fit", "cover", 3, "src"], [1, "text-muted", "mt-1", 2, "font-size", ".72rem"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", 2, "background", "#dcfce7", "color", "#15803d", "font-size", ".75rem", "border-radius", "10px", 3, "href"], [1, "bx", "bx-map-pin", "me-1"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", 2, "background", "#dbeafe", "color", "#1d4ed8", "font-size", ".75rem", "border-radius", "10px", 3, "href"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "ms-2", "text-muted", 2, "font-size", ".83rem"], [1, "bx", "bx-calendar-x", "text-muted", 2, "font-size", "2.5rem"], [1, "text-muted", "mt-2", 2, "font-size", ".88rem"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".83rem"], [1, "table-light"], [2, "width", "36px"], [1, "d-flex", "gap-3", "mt-3", "flex-wrap", 2, "font-size", ".78rem"], [1, "text-muted"], [1, "text-warning"], [1, "text-danger"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "badge", "bg-light", "text-dark", "border", 2, "font-size", ".72rem"], [1, "fw-semibold", "text-primary", 2, "font-size", ".88rem"], [1, "text-muted", 2, "font-size", ".78rem"], [1, "badge", 2, "font-size", ".72rem"], [2, "max-width", "180px"], [1, "text-truncate", 2, "font-size", ".78rem", 3, "title"], ["target", "_blank", "title", "Lihat foto absen masuk", 3, "href"], [1, "d-flex", "flex-column", "gap-1", "align-items-center"], [1, "d-flex", "align-items-center", "gap-1"], [1, "bx", "bx-right-arrow-alt", "text-muted", 2, "font-size", ".85rem"], [1, "text-muted", 2, "font-size", ".7rem"], [1, "fw-semibold", "text-success", 2, "font-size", ".88rem"], [1, "badge", "bg-danger", 2, "font-size", ".65rem"], ["onerror", "this.style.display='none'", 1, "rounded-2", "border", 2, "width", "40px", "height", "40px", "object-fit", "cover", 3, "src"], ["target", "_blank", "rel", "noopener", "title", "Buka lokasi check-in di Google Maps", 1, "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 2, "background", "#dcfce7", "color", "#15803d", "font-size", ".68rem", "border-radius", "8px", "padding", ".2rem .55rem", "white-space", "nowrap", 3, "href"], ["target", "_blank", "rel", "noopener", "title", "Buka lokasi check-out di Google Maps", 1, "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 2, "background", "#dbeafe", "color", "#1d4ed8", "font-size", ".68rem", "border-radius", "8px", "padding", ".2rem .55rem", "white-space", "nowrap", 3, "href"], [1, "bx", "bx-map-pin", 2, "font-size", ".8rem"]], template: function CheckInOutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3, "Absensi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "nav", 5)(6, "ol", 6)(7, "li", 7)(8, "a", 8);
        \u0275\u0275element(9, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 10);
        \u0275\u0275text(11, "Absensi");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(12, CheckInOutComponent_Conditional_12_Template, 3, 1, "div", 11);
        \u0275\u0275conditionalCreate(13, CheckInOutComponent_Conditional_13_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(14, CheckInOutComponent_Conditional_14_Template, 4, 0, "div", 13)(15, CheckInOutComponent_Conditional_15_Template, 36, 26, "div", 14);
        \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18);
        \u0275\u0275element(20, "i", 19);
        \u0275\u0275elementStart(21, "h6", 20);
        \u0275\u0275text(22, "Riwayat Absensi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 21)(24, "select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function CheckInOutComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterBulan, $event) || (ctx.filterBulan = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(25, CheckInOutComponent_For_26_Template, 2, 2, "option", 23, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "select", 24);
        \u0275\u0275twoWayListener("ngModelChange", function CheckInOutComponent_Template_select_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterTahun, $event) || (ctx.filterTahun = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(28, CheckInOutComponent_For_29_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 25);
        \u0275\u0275listener("click", function CheckInOutComponent_Template_button_click_30_listener() {
          return ctx.onFilterRiwayat();
        });
        \u0275\u0275element(31, "i", 26);
        \u0275\u0275text(32, "Tampilkan ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 27);
        \u0275\u0275conditionalCreate(34, CheckInOutComponent_Conditional_34_Template, 4, 0, "div", 28)(35, CheckInOutComponent_Conditional_35_Template, 4, 2, "div", 13)(36, CheckInOutComponent_Conditional_36_Template, 41, 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.successMsg() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 14 : 15);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterBulan);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.listBulan);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterTahun);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.listTahun);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loadingRiwayat());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loadingRiwayat() ? 34 : ctx.riwayat().length === 0 ? 35 : 36);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent], styles: ["\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: .5;\n    transform: scale(.8);\n  }\n}\n/*# sourceMappingURL=check-in-out.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckInOutComponent, [{
    type: Component,
    args: [{ selector: "app-check-in-out", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
<style>\r
  @keyframes pulse {\r
    0%, 100% { opacity: 1; transform: scale(1); }\r
    50%       { opacity: .5; transform: scale(.8); }\r
  }\r
</style>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Absensi</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active">Absensi</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Alert sukses / error -->\r
  @if (successMsg()) {\r
    <div class="alert alert-success d-flex align-items-center gap-2 py-2 mb-3">\r
      <i class="bx bx-check-circle fs-5"></i> {{ successMsg() }}\r
    </div>\r
  }\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2 py-2 mb-3">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
      <button class="btn-close ms-auto" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 1 : Card Status Hari Ini\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (loading()) {\r
    <div class="text-center py-5">\r
      <div class="spinner-border text-primary"></div>\r
      <div class="text-muted mt-2">Memuat data absensi...</div>\r
    </div>\r
  } @else {\r
\r
    <div class="row g-3 mb-4">\r
\r
      <!-- Kartu Jam & Info Hari Ini -->\r
      <div class="col-12 col-lg-4">\r
        <div class="card border-0 shadow-sm h-100"\r
             style="background: linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff">\r
          <div class="card-body d-flex flex-column justify-content-between">\r
\r
            <!-- Jam live -->\r
            <div class="text-center mb-3">\r
              <div style="font-size:2.8rem;font-weight:700;letter-spacing:.05em;font-variant-numeric:tabular-nums">\r
                {{ jamSekarang() }}\r
              </div>\r
              @if (hariIni()) {\r
                <div style="font-size:1rem;opacity:.85">\r
                  {{ hariLabel(hariIni()!.namaHari) }},\r
                  {{ formatTanggal(hariIni()!.tanggal) }}\r
                </div>\r
              }\r
            </div>\r
\r
            <!-- Info karyawan -->\r
            @if (hariIni()) {\r
              <div class="d-flex align-items-center gap-3 rounded-3 p-2 mb-3"\r
                   style="background:rgba(255,255,255,.15)">\r
                @if (hariIni()!.fotoProfil) {\r
                  <img [src]="hariIni()!.fotoProfil" class="rounded-circle"\r
                       style="width:44px;height:44px;object-fit:cover;border:2px solid rgba(255,255,255,.5)"\r
                       onerror="this.style.display='none'">\r
                } @else {\r
                  <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                       style="width:44px;height:44px;background:rgba(255,255,255,.25);font-weight:700;font-size:1.1rem">\r
                    {{ hariIni()!.namaKaryawan.charAt(0) }}\r
                  </div>\r
                }\r
                <div>\r
                  <div class="fw-semibold" style="font-size:.9rem">{{ hariIni()!.namaKaryawan }}</div>\r
                  <div style="font-size:.78rem;opacity:.8">\r
                    {{ hariIni()!.namaDivisi ?? '\u2014' }}\r
                    @if (hariIni()!.namaJabatan) {\r
                      \xB7 {{ hariIni()!.namaJabatan }}\r
                    }\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Jadwal pola kerja hari ini -->\r
              <div class="rounded-3 p-2" style="background:rgba(255,255,255,.12)">\r
                <div style="font-size:.72rem;opacity:.75;margin-bottom:4px">\r
                  <i class="bx bx-calendar-check me-1"></i>\r
                  Jadwal Kerja Hari Ini\r
                  @if (hariIni()!.namaPolaKerja) {\r
                    \u2014 <span style="font-weight:600">{{ hariIni()!.namaPolaKerja }}</span>\r
                  }\r
                </div>\r
                <div class="d-flex align-items-center gap-3">\r
                  <div class="text-center flex-grow-1">\r
                    <div style="font-size:.68rem;opacity:.7">Mulai</div>\r
                    <div style="font-size:1.1rem;font-weight:700">\r
                      {{ hariIni()!.jamKerjaMulai ?? '\u2014' }}\r
                    </div>\r
                  </div>\r
                  <i class="bx bx-right-arrow-alt" style="opacity:.6;font-size:1.3rem"></i>\r
                  <div class="text-center flex-grow-1">\r
                    <div style="font-size:.68rem;opacity:.7">Selesai</div>\r
                    <div style="font-size:1.1rem;font-weight:700">\r
                      {{ hariIni()!.jamKerjaSelesai ?? '\u2014' }}\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            }\r
\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Kartu Status Check-In / Check-Out -->\r
      <div class="col-12 col-lg-8">\r
        <div class="card border-0 shadow-sm h-100">\r
          <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
            <i class="bx bx-fingerprint text-primary fs-5"></i>\r
            <h6 class="mb-0 fw-semibold">Presensi Hari Ini</h6>\r
            @if (hariIni()?.status) {\r
              <span class="badge ms-auto" [class]="'bg-' + statusClass(hariIni()!.status)">\r
                {{ hariIni()!.status }}\r
              </span>\r
            }\r
          </div>\r
          <div class="card-body">\r
\r
            <!-- Summary check-in/out -->\r
            <div class="row g-3 mb-4">\r
              <div class="col-6">\r
                <div class="rounded-3 p-3 text-center"\r
                     [style.background]="sudahCheckIn() ? '#dcfce7' : '#f3f4f6'">\r
                  <i class="bx bx-log-in fs-3"\r
                     [style.color]="sudahCheckIn() ? '#16a34a' : '#9ca3af'"></i>\r
                  <div class="fw-semibold mt-1" style="font-size:.82rem"\r
                       [style.color]="sudahCheckIn() ? '#166534' : '#6b7280'">\r
                    Check-In\r
                  </div>\r
                  <div class="fw-bold" style="font-size:1.4rem"\r
                       [style.color]="sudahCheckIn() ? '#15803d' : '#9ca3af'">\r
                    {{ hariIni()?.jamMasuk ? formatTime(hariIni()!.jamMasuk) : '\u2014' }}\r
                  </div>\r
                  @if (hariIni()?.menitTerlambat && hariIni()!.menitTerlambat > 0) {\r
                    <div class="badge bg-danger mt-1" style="font-size:.68rem">\r
                      Terlambat {{ terlambatLabel(hariIni()!.menitTerlambat) }}\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
              <div class="col-6">\r
                <div class="rounded-3 p-3 text-center"\r
                     [style.background]="sudahCheckOut() ? '#dbeafe' : '#f3f4f6'">\r
                  <i class="bx bx-log-out fs-3"\r
                     [style.color]="sudahCheckOut() ? '#1d4ed8' : '#9ca3af'"></i>\r
                  <div class="fw-semibold mt-1" style="font-size:.82rem"\r
                       [style.color]="sudahCheckOut() ? '#1e40af' : '#6b7280'">\r
                    Check-Out\r
                  </div>\r
                  <div class="fw-bold" style="font-size:1.4rem"\r
                       [style.color]="sudahCheckOut() ? '#1d4ed8' : '#9ca3af'">\r
                    {{ hariIni()?.jamKeluar ? formatTime(hariIni()!.jamKeluar) : '\u2014' }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Form check-in -->\r
            @if (!sudahCheckIn()) {\r
              <div class="border rounded-3 p-3 mb-3" style="background:#fafafa">\r
                <div class="fw-semibold mb-3 d-flex align-items-center gap-2"\r
                     style="font-size:.88rem;color:#374151">\r
                  <i class="bx bx-log-in text-success"></i> Form Check-In\r
                </div>\r
\r
                <!-- \u2550\u2550\u2550 Foto Absen Masuk \u2550\u2550\u2550 -->\r
                <div class="mb-3">\r
                  <div class="d-flex align-items-center justify-content-between mb-2">\r
                    <label class="form-label mb-0 fw-semibold" style="font-size:.82rem">\r
                      <i class="bx bx-camera text-primary me-1"></i> Foto Selfie\r
                      <span class="text-danger ms-1">*</span>\r
                    </label>\r
                    <span class="badge bg-danger text-white" style="font-size:.68rem;font-weight:500">\r
                      wajib\r
                    </span>\r
                  </div>\r
\r
                  <!-- Canvas tersembunyi untuk capture -->\r
                  <canvas #canvasEl style="display:none"></canvas>\r
\r
                  <!-- \u2500\u2500 Mode IDLE \u2500\u2500 -->\r
                  @if (fotoMode === 'idle') {\r
\r
                    @if (kameraError) {\r
                      <div class="d-flex align-items-start gap-2 rounded-3 p-2 mb-2"\r
                           style="background:#fff7ed;border:1px solid #fed7aa;font-size:.78rem;color:#9a3412">\r
                        <i class="bx bx-error-circle mt-1 flex-shrink-0"></i>\r
                        <span>{{ kameraError }}</span>\r
                      </div>\r
                    }\r
\r
                    <!-- Zona klik \u2014 desain card yang mengundang -->\r
                    <div class="rounded-4 overflow-hidden position-relative"\r
                         style="background:linear-gradient(135deg,#ede9fe,#dbeafe);\r
                                border:2px dashed #a5b4fc;cursor:pointer;min-height:130px"\r
                         (click)="bukaKamera()">\r
\r
                      <!-- Dekorasi lingkaran blur -->\r
                      <div style="position:absolute;width:80px;height:80px;border-radius:50%;\r
                                  background:rgba(99,102,241,.15);top:-20px;right:-20px"></div>\r
                      <div style="position:absolute;width:50px;height:50px;border-radius:50%;\r
                                  background:rgba(59,130,246,.12);bottom:-10px;left:10px"></div>\r
\r
                      <div class="d-flex flex-column align-items-center justify-content-center\r
                                  gap-2 py-4 px-3 position-relative">\r
                        <!-- Ikon kamera dengan animasi pulse -->\r
                        <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                             style="width:52px;height:52px;\r
                                    background:linear-gradient(135deg,#6366f1,#3b82f6);\r
                                    box-shadow:0 4px 15px rgba(99,102,241,.4)">\r
                          <i class="bx bx-camera text-white" style="font-size:1.4rem"></i>\r
                        </div>\r
                        <div class="text-center">\r
                          <div class="fw-semibold" style="font-size:.85rem;color:#4338ca">\r
                            Tap untuk Buka Kamera\r
                          </div>\r
                          <div style="font-size:.72rem;color:#6366f1;opacity:.8">\r
                            Ambil foto selfie langsung\r
                          </div>\r
                        </div>\r
\r
                        <!-- Atau pilih galeri -->\r
                        <div class="d-flex align-items-center gap-2 w-100 mt-1">\r
                          <div style="flex:1;height:1px;background:rgba(99,102,241,.2)"></div>\r
                          <span style="font-size:.68rem;color:#818cf8">atau</span>\r
                          <div style="flex:1;height:1px;background:rgba(99,102,241,.2)"></div>\r
                        </div>\r
\r
\r
                      </div>\r
                    </div>\r
\r
                    <!-- Input file tersembunyi -->\r
                    <input id="inputFotoMasuk" type="file" accept="image/*" class="d-none"\r
                           (change)="onFotoChange($event)">\r
                  }\r
\r
                  <!-- \u2500\u2500 Mode CAMERA \u2500\u2500 -->\r
                  @if (fotoMode === 'camera') {\r
                    <div class="rounded-4 overflow-hidden position-relative"\r
                         style="background:#0f0f1a;box-shadow:0 8px 32px rgba(0,0,0,.35)">\r
\r
                      <!-- Video feed -->\r
                      <video #videoEl autoplay playsinline muted\r
                             style="width:100%;max-height:300px;object-fit:cover;\r
                                    display:block;transform:scaleX(-1)"></video>\r
\r
                      <!-- Overlay gradien bawah -->\r
                      <div class="position-absolute bottom-0 start-0 end-0"\r
                           style="height:80px;background:linear-gradient(to top,rgba(0,0,0,.7),transparent)">\r
                      </div>\r
\r
                      <!-- Jam live \u2014 kiri atas -->\r
                      <div class="position-absolute top-0 start-0 m-2 d-flex align-items-center gap-1\r
                                  px-2 py-1 rounded-pill"\r
                           style="background:rgba(0,0,0,.45);backdrop-filter:blur(6px);\r
                                  color:#fff;font-size:.72rem;font-variant-numeric:tabular-nums">\r
                        <span style="width:6px;height:6px;border-radius:50%;background:#22c55e;\r
                                     animation:pulse 1.5s infinite" class="flex-shrink-0"></span>\r
                        {{ jamSekarang() }}\r
                      </div>\r
\r
                      <!-- Tombol flip \u2014 kanan atas -->\r
                      <button type="button"\r
                              class="position-absolute top-0 end-0 m-2 rounded-circle\r
                                     d-flex align-items-center justify-content-center border-0"\r
                              style="width:38px;height:38px;background:rgba(255,255,255,.15);\r
                                     backdrop-filter:blur(6px);color:#fff"\r
                              (click)="flipKamera()" title="Flip kamera">\r
                        <i class="bx bx-revision" style="font-size:1rem"></i>\r
                      </button>\r
\r
                      <!-- Panduan frame wajah -->\r
                      <div class="position-absolute top-50 start-50 translate-middle"\r
                           style="width:150px;height:150px;border-radius:50%;\r
                                  border:2px dashed rgba(255,255,255,.4);pointer-events:none">\r
                      </div>\r
\r
                      <!-- Tombol aksi \u2014 bawah tengah -->\r
                      <div class="position-absolute bottom-0 start-0 end-0 d-flex\r
                                  align-items-center justify-content-center gap-4 pb-3">\r
                        <!-- Batal -->\r
                        <button type="button"\r
                                class="rounded-circle d-flex align-items-center justify-content-center\r
                                       border-0"\r
                                style="width:40px;height:40px;background:rgba(255,255,255,.15);\r
                                       backdrop-filter:blur(6px);color:#fff"\r
                                (click)="ulangiKamera()">\r
                          <i class="bx bx-x" style="font-size:1.2rem"></i>\r
                        </button>\r
\r
                        <!-- Tombol capture utama -->\r
                        <button type="button"\r
                                class="rounded-circle d-flex align-items-center justify-content-center\r
                                       border-0"\r
                                style="width:64px;height:64px;\r
                                       background:linear-gradient(135deg,#22c55e,#16a34a);\r
                                       box-shadow:0 0 0 4px rgba(34,197,94,.3),\r
                                                  0 4px 20px rgba(22,163,74,.5)"\r
                                (click)="ambilFoto()">\r
                          <i class="bx bx-aperture text-white" style="font-size:1.6rem"></i>\r
                        </button>\r
\r
                        <!-- Flip (duplikat untuk layout simetris) -->\r
                        <button type="button"\r
                                class="rounded-circle d-flex align-items-center justify-content-center\r
                                       border-0"\r
                                style="width:40px;height:40px;background:rgba(255,255,255,.15);\r
                                       backdrop-filter:blur(6px);color:#fff"\r
                                (click)="flipKamera()">\r
                          <i class="bx bx-camera" style="font-size:1.1rem"></i>\r
                        </button>\r
                      </div>\r
                    </div>\r
\r
                    <div class="text-center mt-2" style="font-size:.72rem;color:#6b7280">\r
                      <i class="bx bx-info-circle me-1"></i>\r
                      Posisikan wajah di lingkaran, lalu tekan tombol hijau\r
                    </div>\r
                  }\r
\r
                  <!-- \u2500\u2500 Mode PREVIEW \u2500\u2500 -->\r
                  @if (fotoMode === 'preview' && fotoPreview) {\r
                    <div class="rounded-4 overflow-hidden position-relative"\r
                         style="box-shadow:0 8px 24px rgba(0,0,0,.15)">\r
\r
                      <img [src]="fotoPreview" alt="Foto absen"\r
                           style="width:100%;max-height:260px;object-fit:cover;display:block">\r
\r
                      <!-- Overlay gradien bawah -->\r
                      <div class="position-absolute bottom-0 start-0 end-0 d-flex\r
                                  align-items-center justify-content-between px-3 py-2"\r
                           style="background:linear-gradient(to top,rgba(0,0,0,.75),transparent)">\r
\r
                        <div class="d-flex align-items-center gap-2" style="color:#fff">\r
                          <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                               style="width:22px;height:22px;background:#22c55e;flex-shrink:0">\r
                            <i class="bx bx-check" style="font-size:.75rem"></i>\r
                          </div>\r
                          <span style="font-size:.75rem;font-weight:500">Foto siap</span>\r
                          @if (fotoFile) {\r
                            <span class="badge rounded-pill"\r
                                  style="background:rgba(255,255,255,.2);font-size:.65rem;\r
                                         font-weight:400">\r
                              {{ (fotoFile.size / 1024).toFixed(0) }} KB\r
                            </span>\r
                          }\r
                        </div>\r
\r
                        <!-- Tombol hapus -->\r
                        <button type="button"\r
                                class="rounded-circle d-flex align-items-center justify-content-center\r
                                       border-0"\r
                                style="width:34px;height:34px;background:rgba(239,68,68,.8);color:#fff"\r
                                (click)="removeFoto()">\r
                          <i class="bx bx-trash" style="font-size:.9rem"></i>\r
                        </button>\r
                      </div>\r
                    </div>\r
\r
                    <!-- Ulangi foto -->\r
                    <button type="button"\r
                            class="btn w-100 mt-2 d-flex align-items-center\r
                                   justify-content-center gap-2"\r
                            style="background:#f1f5f9;color:#475569;font-size:.8rem;\r
                                   border:none;border-radius:12px;padding:.5rem"\r
                            (click)="ulangiKamera()">\r
                      <i class="bx bx-refresh"></i> Ambil Ulang Foto\r
                    </button>\r
\r
                    <!-- Status Lokasi GPS -->\r
                    <div class="mt-2">\r
                      @if (lokasiStatus === 'loading') {\r
                        <div class="d-flex align-items-center gap-2 rounded-3 px-3 py-2"\r
                             style="background:#eff6ff;font-size:.78rem;color:#2563eb">\r
                          <span class="spinner-border spinner-border-sm"></span>\r
                          Mengambil lokasi GPS...\r
                        </div>\r
                      }\r
                      @if (lokasiStatus === 'ok' && lokasiMapsUrl) {\r
                        <div class="d-flex align-items-center justify-content-between\r
                                    rounded-3 px-3 py-2"\r
                             style="background:#f0fdf4;font-size:.78rem;color:#15803d">\r
                          <div class="d-flex align-items-center gap-2">\r
                            <i class="bx bx-map-pin" style="font-size:1rem"></i>\r
                            <span>Lokasi berhasil direkam</span>\r
                          </div>\r
                          <a [href]="lokasiMapsUrl" target="_blank" rel="noopener"\r
                             class="btn btn-sm"\r
                             style="background:#22c55e;color:#fff;font-size:.72rem;\r
                                    border-radius:8px;padding:.2rem .6rem">\r
                            <i class="bx bx-map me-1"></i>Lihat Maps\r
                          </a>\r
                        </div>\r
                      }\r
                      @if (lokasiStatus === 'error') {\r
                        <div class="d-flex align-items-center justify-content-between\r
                                    rounded-3 px-3 py-2"\r
                             style="background:#fff7ed;font-size:.78rem;color:#c2410c">\r
                          <div class="d-flex align-items-center gap-2">\r
                            <i class="bx bx-error-circle" style="font-size:1rem"></i>\r
                            <span>{{ lokasiError }}</span>\r
                          </div>\r
                          <button type="button" class="btn btn-sm"\r
                                  style="background:#f97316;color:#fff;font-size:.72rem;\r
                                         border-radius:8px;padding:.2rem .6rem"\r
                                  (click)="dapatkanLokasi()">\r
                            Coba Lagi\r
                          </button>\r
                        </div>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
\r
                <!-- Garis pemisah tipis -->\r
                <div style="border-top:1px dashed #e5e7eb;margin:.5rem 0 1rem"></div>\r
\r
                <!-- Catatan -->\r
                <div class="mb-3">\r
                  <label class="form-label fw-semibold" style="font-size:.82rem">Catatan</label>\r
                  <textarea class="form-control form-control-sm" rows="2"\r
                            placeholder="Tambahkan catatan (opsional)..."\r
                            [(ngModel)]="catatanCheckIn"></textarea>\r
                </div>\r
\r
                @if (!fotoFile) {\r
                  <div class="d-flex align-items-center gap-2 rounded-3 px-3 py-2 mb-2"\r
                       style="background:#fff7ed;border:1px solid #fed7aa;font-size:.78rem;color:#9a3412">\r
                    <i class="bx bx-camera flex-shrink-0"></i>\r
                    <span>Ambil foto selfie terlebih dahulu untuk melanjutkan check-in.</span>\r
                  </div>\r
                }\r
\r
                <button class="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"\r
                        (click)="doCheckIn()" [disabled]="saving() || !fotoFile">\r
                  @if (saving()) {\r
                    <span class="spinner-border spinner-border-sm"></span>\r
                  } @else {\r
                    <i class="bx bx-log-in"></i>\r
                  }\r
                  Check-In Sekarang\r
                </button>\r
              </div>\r
            }\r
\r
            <!-- Form check-out -->\r
            @if (sudahCheckIn() && !sudahCheckOut()) {\r
              <div class="border rounded-3 p-3" style="background:#fafafa">\r
                <div class="fw-semibold mb-3 d-flex align-items-center gap-2"\r
                     style="font-size:.88rem;color:#374151">\r
                  <i class="bx bx-log-out text-primary"></i> Form Check-Out\r
                </div>\r
                <div class="mb-3">\r
                  <label class="form-label fw-semibold" style="font-size:.82rem">Catatan</label>\r
                  <textarea class="form-control form-control-sm" rows="2"\r
                            placeholder="Catatan saat pulang (opsional)..."\r
                            [(ngModel)]="catatanCheckOut"></textarea>\r
                </div>\r
\r
                <!-- Lokasi GPS untuk check-out -->\r
                <div class="mb-3">\r
                  <label class="form-label fw-semibold d-flex align-items-center gap-2"\r
                         style="font-size:.82rem">\r
                    <i class="bx bx-map-pin text-primary"></i> Lokasi\r
                  </label>\r
                  @if (lokasiStatus === 'idle') {\r
                    <button type="button" class="btn btn-sm btn-outline-primary w-100"\r
                            style="border-radius:10px;font-size:.8rem"\r
                            (click)="dapatkanLokasi()">\r
                      <i class="bx bx-current-location me-1"></i>Rekam Lokasi Saat Ini\r
                    </button>\r
                  }\r
                  @if (lokasiStatus === 'loading') {\r
                    <div class="d-flex align-items-center gap-2 rounded-3 px-3 py-2"\r
                         style="background:#eff6ff;font-size:.78rem;color:#2563eb">\r
                      <span class="spinner-border spinner-border-sm"></span>\r
                      Mengambil lokasi GPS...\r
                    </div>\r
                  }\r
                  @if (lokasiStatus === 'ok' && lokasiMapsUrl) {\r
                    <div class="d-flex align-items-center justify-content-between\r
                                rounded-3 px-3 py-2"\r
                         style="background:#f0fdf4;font-size:.78rem;color:#15803d">\r
                      <div class="d-flex align-items-center gap-2">\r
                        <i class="bx bx-map-pin" style="font-size:1rem"></i>\r
                        <span>Lokasi berhasil direkam</span>\r
                      </div>\r
                      <a [href]="lokasiMapsUrl" target="_blank" rel="noopener"\r
                         class="btn btn-sm"\r
                         style="background:#22c55e;color:#fff;font-size:.72rem;\r
                                border-radius:8px;padding:.2rem .6rem">\r
                        <i class="bx bx-map me-1"></i>Lihat Maps\r
                      </a>\r
                    </div>\r
                  }\r
                  @if (lokasiStatus === 'error') {\r
                    <div class="d-flex align-items-center justify-content-between\r
                                rounded-3 px-3 py-2"\r
                         style="background:#fff7ed;font-size:.78rem;color:#c2410c">\r
                      <div class="d-flex align-items-center gap-2">\r
                        <i class="bx bx-error-circle" style="font-size:1rem"></i>\r
                        <span>{{ lokasiError }}</span>\r
                      </div>\r
                      <button type="button" class="btn btn-sm"\r
                              style="background:#f97316;color:#fff;font-size:.72rem;\r
                                     border-radius:8px;padding:.2rem .6rem"\r
                              (click)="dapatkanLokasi()">\r
                        Coba Lagi\r
                      </button>\r
                    </div>\r
                  }\r
                </div>\r
                <button class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"\r
                        (click)="doCheckOut()" [disabled]="saving()">\r
                  @if (saving()) {\r
                    <span class="spinner-border spinner-border-sm"></span>\r
                  } @else {\r
                    <i class="bx bx-log-out"></i>\r
                  }\r
                  Check-Out Sekarang\r
                </button>\r
              </div>\r
            }\r
\r
            <!-- Sudah check-in & check-out -->\r
            @if (sudahCheckIn() && sudahCheckOut()) {\r
              <div class="text-center py-3">\r
                <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-2"\r
                     style="width:56px;height:56px;background:#dcfce7">\r
                  <i class="bx bx-check-double text-success" style="font-size:1.8rem"></i>\r
                </div>\r
                <div class="fw-semibold text-success">Presensi hari ini selesai</div>\r
                <div class="text-muted" style="font-size:.82rem">\r
                  Masuk: <strong>{{ formatTime(hariIni()?.jamMasuk) }}</strong> \xB7\r
                  Keluar: <strong>{{ formatTime(hariIni()?.jamKeluar) }}</strong>\r
                </div>\r
                <!-- Foto masuk jika ada -->\r
                @if (hariIni()?.fotoMasukUrl) {\r
                  <div class="mt-2">\r
                    <img [src]="hariIni()!.fotoMasukUrl" class="rounded-3 border"\r
                         style="max-height:120px;object-fit:cover">\r
                    <div class="text-muted mt-1" style="font-size:.72rem">Foto Absen Masuk</div>\r
                  </div>\r
                }\r
                <!-- Lokasi masuk -->\r
                @if (hariIni()?.lokasiMasukUrl) {\r
                  <div class="mt-2">\r
                    <a [href]="hariIni()!.lokasiMasukUrl" target="_blank" rel="noopener"\r
                       class="btn btn-sm"\r
                       style="background:#dcfce7;color:#15803d;font-size:.75rem;border-radius:10px">\r
                      <i class="bx bx-map-pin me-1"></i>Lokasi Masuk\r
                    </a>\r
                  </div>\r
                }\r
                <!-- Lokasi keluar -->\r
                @if (hariIni()?.lokasiKeluarUrl) {\r
                  <div class="mt-1">\r
                    <a [href]="hariIni()!.lokasiKeluarUrl" target="_blank" rel="noopener"\r
                       class="btn btn-sm"\r
                       style="background:#dbeafe;color:#1d4ed8;font-size:.75rem;border-radius:10px">\r
                      <i class="bx bx-map-pin me-1"></i>Lokasi Keluar\r
                    </a>\r
                  </div>\r
                }\r
              </div>\r
            }\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  } <!-- end !loading -->\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 2 : Riwayat Absensi\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-header bg-transparent border-0 pb-0">\r
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <i class="bx bx-history text-primary fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Riwayat Absensi</h6>\r
        </div>\r
        <!-- Filter bulan & tahun -->\r
        <div class="d-flex gap-2 flex-wrap align-items-center">\r
          <select class="form-select form-select-sm" style="max-width:130px" [(ngModel)]="filterBulan">\r
            @for (b of listBulan; track b.val) {\r
              <option [value]="b.val">{{ b.label }}</option>\r
            }\r
          </select>\r
          <select class="form-select form-select-sm" style="max-width:90px" [(ngModel)]="filterTahun">\r
            @for (y of listTahun; track y) {\r
              <option [value]="y">{{ y }}</option>\r
            }\r
          </select>\r
          <button class="btn btn-primary btn-sm px-3" (click)="onFilterRiwayat()" [disabled]="loadingRiwayat()">\r
            <i class="bx bx-filter-alt me-1"></i>Tampilkan\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="card-body pt-2">\r
\r
      @if (loadingRiwayat()) {\r
        <div class="text-center py-4">\r
          <div class="spinner-border spinner-border-sm text-primary"></div>\r
          <span class="ms-2 text-muted" style="font-size:.83rem">Memuat riwayat...</span>\r
        </div>\r
      } @else if (riwayat().length === 0) {\r
        <div class="text-center py-5">\r
          <i class="bx bx-calendar-x text-muted" style="font-size:2.5rem"></i>\r
          <div class="text-muted mt-2" style="font-size:.88rem">\r
            Tidak ada data absensi untuk\r
            {{ namaBulanDari(filterBulan) }} {{ filterTahun }}\r
          </div>\r
        </div>\r
      } @else {\r
\r
        <!-- Tabel riwayat -->\r
        <div class="table-responsive">\r
          <table class="table table-hover align-middle mb-0" style="font-size:.83rem">\r
            <thead class="table-light">\r
              <tr>\r
                <th style="width:36px">#</th>\r
                <th>Hari &amp; Tanggal</th>\r
                <th>Bulan</th>\r
                <th>Jam Kerja</th>\r
                <th class="text-center">Masuk</th>\r
                <th class="text-center">Keluar</th>\r
                <th class="text-center">Status</th>\r
                <th>Catatan</th>\r
                <th class="text-center">Foto</th>\r
                <th class="text-center">Lokasi GPS</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (a of riwayat(); track a.id; let i = $index) {\r
                <tr>\r
                  <!-- Nomor -->\r
                  <td class="text-muted">{{ i + 1 }}</td>\r
\r
                  <!-- Hari & Tanggal -->\r
                  <td>\r
                    <div class="fw-semibold" style="font-size:.85rem">\r
                      {{ hariLabel(a.namaHari) }}\r
                    </div>\r
                    <div class="text-muted" style="font-size:.75rem">\r
                      {{ formatTanggal(a.tanggal) }}\r
                    </div>\r
                  </td>\r
\r
                  <!-- Bulan -->\r
                  <td>\r
                    <span class="badge bg-light text-dark border" style="font-size:.72rem">\r
                      {{ namaBulanDari(a.bulan) }} {{ a.tahun }}\r
                    </span>\r
                  </td>\r
\r
                  <!-- Jam Kerja (dari pola) -->\r
                  <td>\r
                    @if (a.jamKerjaMulai) {\r
                      <div class="d-flex align-items-center gap-1">\r
                        <span class="badge bg-light text-dark border" style="font-size:.72rem">\r
                          {{ a.jamKerjaMulai }}\r
                        </span>\r
                        <i class="bx bx-right-arrow-alt text-muted" style="font-size:.85rem"></i>\r
                        <span class="badge bg-light text-dark border" style="font-size:.72rem">\r
                          {{ a.jamKerjaSelesai ?? '\u2014' }}\r
                        </span>\r
                      </div>\r
                      @if (a.namaPolaKerja) {\r
                        <div class="text-muted" style="font-size:.7rem">{{ a.namaPolaKerja }}</div>\r
                      }\r
                    } @else {\r
                      <span class="text-muted">\u2014</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Jam Masuk -->\r
                  <td class="text-center">\r
                    @if (a.jamMasuk) {\r
                      <div class="fw-semibold text-success" style="font-size:.88rem">\r
                        {{ formatTime(a.jamMasuk) }}\r
                      </div>\r
                      @if (a.menitTerlambat > 0) {\r
                        <div class="badge bg-danger" style="font-size:.65rem">\r
                          +{{ terlambatLabel(a.menitTerlambat) }}\r
                        </div>\r
                      }\r
                    } @else {\r
                      <span class="text-muted">\u2014</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Jam Keluar -->\r
                  <td class="text-center">\r
                    @if (a.jamKeluar) {\r
                      <div class="fw-semibold text-primary" style="font-size:.88rem">\r
                        {{ formatTime(a.jamKeluar) }}\r
                      </div>\r
                    } @else {\r
                      <span class="text-muted" style="font-size:.78rem">Belum keluar</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Status -->\r
                  <td class="text-center">\r
                    <span class="badge" [class]="'bg-' + statusClass(a.status)"\r
                          style="font-size:.72rem">\r
                      {{ a.status }}\r
                    </span>\r
                  </td>\r
\r
                  <!-- Catatan -->\r
                  <td style="max-width:180px">\r
                    @if (a.catatanMasuk || a.catatanKeluar) {\r
                      <div class="text-truncate" style="font-size:.78rem" title="{{ a.catatanMasuk }}">\r
                        @if (a.catatanMasuk) {\r
                          <span class="text-muted">Masuk:</span> {{ a.catatanMasuk }}\r
                        }\r
                        @if (a.catatanKeluar) {\r
                          <br><span class="text-muted">Keluar:</span> {{ a.catatanKeluar }}\r
                        }\r
                      </div>\r
                    } @else {\r
                      <span class="text-muted">\u2014</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Foto lampiran -->\r
                  <td class="text-center">\r
                    @if (a.fotoMasukUrl) {\r
                      <a [href]="a.fotoMasukUrl" target="_blank" title="Lihat foto absen masuk">\r
                        <img [src]="a.fotoMasukUrl" class="rounded-2 border"\r
                             style="width:40px;height:40px;object-fit:cover"\r
                             onerror="this.style.display='none'">\r
                      </a>\r
                    } @else {\r
                      <span class="text-muted">\u2014</span>\r
                    }\r
                  </td>\r
\r
                  <!-- Lokasi GPS -->\r
                  <td class="text-center">\r
                    @if (a.lokasiMasukUrl || a.lokasiKeluarUrl) {\r
                      <div class="d-flex flex-column gap-1 align-items-center">\r
                        @if (a.lokasiMasukUrl) {\r
                          <a [href]="a.lokasiMasukUrl" target="_blank" rel="noopener"\r
                             class="btn btn-sm d-flex align-items-center gap-1"\r
                             style="background:#dcfce7;color:#15803d;font-size:.68rem;\r
                                    border-radius:8px;padding:.2rem .55rem;white-space:nowrap"\r
                             title="Buka lokasi check-in di Google Maps">\r
                            <i class="bx bx-map-pin" style="font-size:.8rem"></i> Masuk\r
                          </a>\r
                        }\r
                        @if (a.lokasiKeluarUrl) {\r
                          <a [href]="a.lokasiKeluarUrl" target="_blank" rel="noopener"\r
                             class="btn btn-sm d-flex align-items-center gap-1"\r
                             style="background:#dbeafe;color:#1d4ed8;font-size:.68rem;\r
                                    border-radius:8px;padding:.2rem .55rem;white-space:nowrap"\r
                             title="Buka lokasi check-out di Google Maps">\r
                            <i class="bx bx-map-pin" style="font-size:.8rem"></i> Keluar\r
                          </a>\r
                        }\r
                      </div>\r
                    } @else {\r
                      <span class="text-muted" style="font-size:.75rem">\u2014</span>\r
                    }\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- Summary footer -->\r
        <div class="d-flex gap-3 mt-3 flex-wrap" style="font-size:.78rem">\r
          <span class="text-muted">\r
            Total: <strong>{{ riwayat().length }}</strong> hari\r
          </span>\r
          <span class="text-warning">\r
            Terlambat: <strong>{{ riwayat().filter(a => a.menitTerlambat > 0).length }}</strong>\r
          </span>\r
          <span class="text-danger">\r
            Alpha/Tanpa Keterangan: <strong>{{ riwayat().filter(a => a.status === 'ALPHA').length }}</strong>\r
          </span>\r
        </div>\r
\r
      }\r
    </div>\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, { videoEl: [{
    type: ViewChild,
    args: ["videoEl"]
  }], canvasEl: [{
    type: ViewChild,
    args: ["canvasEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckInOutComponent, { className: "CheckInOutComponent", filePath: "src/app/features/absensi/check-in-out/check-in-out.component.ts", lineNumber: 16 });
})();
export {
  CheckInOutComponent
};
//# sourceMappingURL=chunk-H3RQ45W5.js.map
