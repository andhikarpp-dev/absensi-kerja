import {
  HARI_LIST,
  defaultHariList
} from "./chunk-APKBODS7.js";
import {
  PolaKerjaService
} from "./chunk-H2DAYQGM.js";
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  debounceTime,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
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
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/divisi/divisi-form/divisi-form.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ({ key: "catatanMasuk", labelKey: "catatanMasukLabel", placeholderKey: "catatanMasukPlaceholder", label: "Catatan Saat Presensi Masuk" });
var _c2 = () => ({ key: "catatanKeluar", labelKey: "catatanKeluarLabel", placeholderKey: "catatanKeluarPlaceholder", label: "Catatan Saat Presensi Keluar" });
var _c3 = () => ({ key: "catatanMulaiLembur", labelKey: "catatanMulaiLemburLabel", placeholderKey: "catatanMulaiLemburPlaceholder", label: "Catatan Saat Presensi Mulai Lembur" });
var _c4 = () => ({ key: "catatanSelesaiLembur", labelKey: "catatanSelesaiLemburLabel", placeholderKey: "catatanSelesaiLemburPlaceholder", label: "Catatan Saat Presensi Selesai Lembur" });
var _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c6 = () => ({ key: "lokasiMasuk", label: "Masuk" });
var _c7 = () => ({ key: "lokasiIstirahat", label: "Istirahat" });
var _c8 = () => ({ key: "lokasiSelesaiIstirahat", label: "Selesai Istirahat" });
var _c9 = () => ({ key: "lokasiKeluar", label: "Keluar" });
var _c10 = () => ({ key: "lokasiLembur", label: "Lembur" });
var _c11 = () => ({ key: "lokasiSelesaiLembur", label: "Selesai Lembur" });
var _c12 = () => ({ key: "lokasiPertamaKali", label: "Presensi Pertama Kali" });
var _c13 = () => ({ key: "lokasiDiLuar", label: "Di Luar Lokasi Kehadiran" });
var _c14 = () => ({ key: "lokasiPerangkatBerbeda", label: "Menggunakan Perangkat Berbeda" });
var _c15 = () => ({ key: "lokasiFotoSelfieBermasalah", label: "Foto Selfie Bermasalah" });
var _c16 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9];
var _c17 = () => ({ key: "validasiPerangkat", label: "Validasi Perangkat" });
var _c18 = () => ({ key: "presensiKeluarOtomatis", label: "Presensi Keluar Otomatis" });
var _c19 = () => ({ key: "dendaTerlambatKeluar", label: "Denda Terlambat Presensi Keluar" });
var _c20 = () => ({ key: "kunjunganKlien", label: "Kunjungan Klien" });
var _c21 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.hari;
function DivisiFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_21_Template_button_click_3_listener() {
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
function DivisiFormComponent_Conditional_22_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function DivisiFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 22);
    \u0275\u0275repeaterCreate(2, DivisiFormComponent_Conditional_22_For_3_Template, 1, 0, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openAssignModal());
    });
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2, " Tambah dari Pola yang Ada ");
    \u0275\u0275elementEnd();
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275elementStart(2, "p", 108);
    \u0275\u0275text(3, "Belum ada pola kerja.");
    \u0275\u0275elementEnd()();
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_2_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 113);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_2_For_16_Template_button_click_11_listener() {
      const pk_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openEditModal(pk_r7));
    });
    \u0275\u0275element(12, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 115);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_2_For_16_Template_button_click_13_listener() {
      const pk_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deletePolaKerja(pk_r7.id));
    });
    \u0275\u0275element(14, "i", 116);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pk_r7 = ctx.$implicit;
    const \u0275$index_178_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_178_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pk_r7.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", pk_r7.jenisJadwal === "JAM_TETAP")("bg-info", pk_r7.jenisJadwal === "JAM_FLEKSIBEL");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pk_r7.jenisJadwal === "JAM_TETAP" ? "Jam Tetap" : "Jam Fleksibel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pk_r7.toleransiKeterlambatan, " menit");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "table", 109)(2, "thead", 59)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Jadwal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Toleransi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_2_For_16_Template, 15, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.polaKerjaList());
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275conditionalCreate(1, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_1_Template, 4, 0, "div", 105)(2, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Conditional_2_Template, 17, 0, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.polaKerjaList().length === 0 ? 1 : 2);
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275element(1, "span", 119);
    \u0275\u0275text(2, " Memuat daftar pola kerja... ");
    \u0275\u0275elementEnd();
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275elementStart(2, "p", 108);
    \u0275\u0275text(3, "Belum ada pola kerja. Klik ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Buat Pola Baru");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " untuk menambah.");
    \u0275\u0275elementEnd()();
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 125);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_0_For_16_Template_tr_click_0_listener() {
      const pk_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleSelectPola(pk_r10.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "input", 126);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_0_For_16_Template_input_click_2_listener($event) {
      const pk_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleSelectPola(pk_r10.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pk_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("table-primary", ctx_r1.isPolaSelected(pk_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isPolaSelected(pk_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pk_r10.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", pk_r10.jenisJadwal === "JAM_TETAP")("bg-info", pk_r10.jenisJadwal === "JAM_FLEKSIBEL");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pk_r10.jenisJadwal === "JAM_TETAP" ? "Jam Tetap" : "Jam Fleksibel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pk_r10.toleransiKeterlambatan, " menit");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, " Centang pola kerja yang ingin digunakan oleh divisi ini. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 122)(4, "table", 109)(5, "thead", 59)(6, "tr");
    \u0275\u0275element(7, "th", 123);
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nama Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Jadwal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Toleransi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_0_For_16_Template, 10, 10, "tr", 124, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.allPolaKerjaList());
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 130);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_1_For_20_Template_button_click_11_listener() {
      const \u0275$index_305_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openEditLocalModal(\u0275$index_305_r12));
    });
    \u0275\u0275element(12, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 131);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_1_For_20_Template_button_click_13_listener() {
      const \u0275$index_305_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.deleteLocalPolaKerja(\u0275$index_305_r12));
    });
    \u0275\u0275element(14, "i", 132);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pk_r13 = ctx.$implicit;
    const \u0275$index_305_r12 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_305_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pk_r13.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", pk_r13.jenisJadwal === "JAM_TETAP")("bg-info", pk_r13.jenisJadwal === "JAM_FLEKSIBEL");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pk_r13.jenisJadwal === "JAM_TETAP" ? "Jam Tetap" : "Jam Fleksibel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pk_r13.toleransiKeterlambatan, " menit");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "p", 127);
    \u0275\u0275element(2, "i", 128);
    \u0275\u0275text(3, " Pola Baru (akan dibuat saat Simpan) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 106)(5, "table", 129)(6, "thead", 59)(7, "tr")(8, "th");
    \u0275\u0275text(9, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Nama Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Jadwal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Toleransi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_1_For_20_Template, 15, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.localPolaKerjaList());
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_0_Template, 17, 0);
    \u0275\u0275conditionalCreate(1, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Conditional_1_Template, 21, 0, "div", 120);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.allPolaKerjaList().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.localPolaKerjaList().length > 0 ? 1 : -1);
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.selectedPolaIds().size, " pola dipilih");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.localPolaKerjaList().length, " pola baru");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275conditionalCreate(1, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Conditional_1_Template, 2, 1, "span", 133);
    \u0275\u0275conditionalCreate(2, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Conditional_2_Template, 1, 0);
    \u0275\u0275conditionalCreate(3, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Conditional_3_Template, 2, 1, "span", 134);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedPolaIds().size > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedPolaIds().size > 0 && ctx_r1.localPolaKerjaList().length > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.localPolaKerjaList().length > 0 ? 3 : -1);
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275conditionalCreate(1, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_1_Template, 3, 0, "div", 117)(2, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_2_Template, 7, 0, "div", 105)(3, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_3_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 118)(5, "small", 110);
    \u0275\u0275element(6, "i", 56);
    \u0275\u0275text(7, " Pola yang dicentang akan langsung terhubung ke divisi ini tanpa duplikat data. ");
    \u0275\u0275conditionalCreate(8, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Conditional_8_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allPolaLoading() ? 1 : ctx_r1.allPolaKerjaList().length === 0 && ctx_r1.localPolaKerjaList().length === 0 ? 2 : 3);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.selectedPolaIds().size > 0 || ctx_r1.localPolaKerjaList().length > 0 ? 8 : -1);
  }
}
function DivisiFormComponent_Conditional_23_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 96)(2, "span");
    \u0275\u0275element(3, "i", 97);
    \u0275\u0275text(4, "Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 98);
    \u0275\u0275conditionalCreate(6, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_6_Template, 3, 0, "button", 99);
    \u0275\u0275elementStart(7, "button", 100);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Conditional_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTambahModal());
    });
    \u0275\u0275element(8, "i", 101);
    \u0275\u0275text(9, " Buat Pola Baru ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_10_Template, 3, 1, "div", 102)(11, DivisiFormComponent_Conditional_23_Conditional_36_Conditional_11_Template, 9, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isEdit ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isEdit ? 10 : 11);
  }
}
function DivisiFormComponent_Conditional_23_For_44_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div")(2, "label", 140);
    \u0275\u0275text(3, "Label Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "label", 140);
    \u0275\u0275text(7, "Placeholder Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 142);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", item_r14.labelKey);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", item_r14.placeholderKey);
  }
}
function DivisiFormComponent_Conditional_23_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 135)(4, "option", 136);
    \u0275\u0275text(5, "Tidak Dibutuhkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 137);
    \u0275\u0275text(7, "Optional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 138);
    \u0275\u0275text(9, "Dibutuhkan");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, DivisiFormComponent_Conditional_23_For_44_Conditional_10_Template, 9, 2, "div", 139);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const item_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.label);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", item_r14.key);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_13_0 = ctx_r1.form.get(item_r14.key)) == null ? null : tmp_13_0.value) === "OPTIONAL" || ((tmp_13_0 = ctx_r1.form.get(item_r14.key)) == null ? null : tmp_13_0.value) === "DIBUTUHKAN" ? 10 : -1);
  }
}
function DivisiFormComponent_Conditional_23_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 37);
    \u0275\u0275element(2, "input", 143);
    \u0275\u0275elementStart(3, "label", 144);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", item_r15.key)("id", item_r15.key);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r15.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r15.label);
  }
}
function DivisiFormComponent_Conditional_23_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r16 = ctx.$implicit;
    \u0275\u0275property("ngValue", k_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", k_r16.namaLengkap, " (", k_r16.nip, ")");
  }
}
function DivisiFormComponent_Conditional_23_For_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 63)(1, "td", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "input", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "input", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "input", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 149)(10, "button", 150);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_For_91_Template_button_click_10_listener() {
      const $index_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSupervisi($index_r18));
    });
    \u0275\u0275text(11, " - Hapus ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const $index_r18 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", $index_r18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r18 + 1);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.supervisiArray.length === 1);
  }
}
function DivisiFormComponent_Conditional_23_For_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 151);
    \u0275\u0275element(2, "input", 143);
    \u0275\u0275elementStart(3, "label", 144);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", item_r19.key)("id", item_r19.key + "_sw");
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r19.key + "_sw");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r19.label);
  }
}
function DivisiFormComponent_Conditional_23_Conditional_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 152);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function DivisiFormComponent_Conditional_23_Conditional_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 153);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEdit ? "Perbarui" : "Simpan", " ");
  }
}
function DivisiFormComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 24);
    \u0275\u0275listener("ngSubmit", function DivisiFormComponent_Conditional_23_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26);
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275text(4, "Identitas Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "div", 29)(7, "div", 30)(8, "label", 31);
    \u0275\u0275text(9, "Nama Divisi ");
    \u0275\u0275elementStart(10, "span", 32);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "input", 33);
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275text(14, "Nama divisi wajib diisi.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "label", 31);
    \u0275\u0275text(17, "Denda Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 36)(19, "div", 37);
    \u0275\u0275element(20, "input", 38);
    \u0275\u0275elementStart(21, "label", 39);
    \u0275\u0275text(22, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 37);
    \u0275\u0275element(24, "input", 40);
    \u0275\u0275elementStart(25, "label", 41);
    \u0275\u0275text(26, "Tidak");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 35)(28, "label", 42);
    \u0275\u0275text(29, "Sistem Kerja Shift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 43)(31, "input", 44);
    \u0275\u0275listener("change", function DivisiFormComponent_Conditional_23_Template_input_change_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onShiftToggle($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 45);
    \u0275\u0275text(33, " Aktifkan agar karyawan divisi ini muncul di ");
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35, "Jadwal Shift");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275conditionalCreate(36, DivisiFormComponent_Conditional_23_Conditional_36_Template, 12, 2, "div", 25);
    \u0275\u0275elementStart(37, "div", 25)(38, "div", 26);
    \u0275\u0275element(39, "i", 46);
    \u0275\u0275text(40, "Catatan Saat Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 28)(42, "div", 29);
    \u0275\u0275repeaterCreate(43, DivisiFormComponent_Conditional_23_For_44_Template, 11, 3, "div", 30, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 25)(46, "div", 26);
    \u0275\u0275element(47, "i", 47);
    \u0275\u0275text(48, "Presensi Yang Harus Sesuai Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 28)(50, "div", 48);
    \u0275\u0275repeaterCreate(51, DivisiFormComponent_Conditional_23_For_52_Template, 5, 4, "div", 49, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 25)(54, "div", 26);
    \u0275\u0275element(55, "i", 50);
    \u0275\u0275text(56, "Supervisor & Supervisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 28)(58, "div", 51)(59, "div", 30)(60, "label", 31);
    \u0275\u0275text(61, "Supervisor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "select", 52)(63, "option", 53);
    \u0275\u0275text(64, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(65, DivisiFormComponent_Conditional_23_For_66_Template, 2, 3, "option", 53, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "label", 54);
    \u0275\u0275text(68, "Supervisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 55);
    \u0275\u0275element(70, "i", 56);
    \u0275\u0275text(71, " Supervisi ini dapat dipilih oleh karyawan sebagai tujuan kemana laporan catatannya akan dikirimkan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 57)(73, "table", 58)(74, "thead", 59)(75, "tr")(76, "th", 60);
    \u0275\u0275text(77, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "Email ");
    \u0275\u0275elementStart(82, "small", 61);
    \u0275\u0275text(83, "(pisah dengan koma)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "BCC Laporan Ke ");
    \u0275\u0275elementStart(86, "small", 61);
    \u0275\u0275text(87, "(pisah dengan koma)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(88, "th", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "tbody");
    \u0275\u0275repeaterCreate(90, DivisiFormComponent_Conditional_23_For_91_Template, 12, 3, "tr", 63, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "button", 64);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSupervisi());
    });
    \u0275\u0275element(93, "i", 65);
    \u0275\u0275text(94, " + Tambah ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 29)(96, "div", 66)(97, "label", 54);
    \u0275\u0275text(98, "BCC Laporan Ke");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 67);
    \u0275\u0275element(100, "i", 56);
    \u0275\u0275text(101, " BCC ini akan digunakan jika kolom bcc pada tabel di atas tidak terisi. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "input", 68);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(103, "div", 25)(104, "div", 26);
    \u0275\u0275element(105, "i", 69);
    \u0275\u0275text(106, "Pembatasan Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 28)(108, "p", 70);
    \u0275\u0275text(109, "# Presensi Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "hr", 71);
    \u0275\u0275elementStart(111, "div", 72)(112, "div", 73)(113, "div", 74);
    \u0275\u0275element(114, "input", 75);
    \u0275\u0275elementStart(115, "span", 76);
    \u0275\u0275text(116, "Menit Sebelum Jadwal Masuk");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(117, "div", 73)(118, "div", 74);
    \u0275\u0275element(119, "input", 77);
    \u0275\u0275elementStart(120, "span", 76);
    \u0275\u0275text(121, "Menit Setelah Jadwal Masuk");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 78)(123, "div", 37);
    \u0275\u0275element(124, "input", 79);
    \u0275\u0275elementStart(125, "label", 80);
    \u0275\u0275text(126, " Cegah presensi masuk pada kalender libur ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 37);
    \u0275\u0275element(128, "input", 81);
    \u0275\u0275elementStart(129, "label", 82);
    \u0275\u0275text(130, " Cegah presensi masuk pada jadwal libur ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "p", 70);
    \u0275\u0275text(132, "# Presensi Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "hr", 71);
    \u0275\u0275elementStart(134, "div", 51)(135, "div", 73)(136, "div", 74);
    \u0275\u0275element(137, "input", 83);
    \u0275\u0275elementStart(138, "span", 76);
    \u0275\u0275text(139, "Menit Setelah Jadwal Keluar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(140, "p", 70);
    \u0275\u0275text(141, "# Presensi Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(142, "hr", 71);
    \u0275\u0275elementStart(143, "div", 37);
    \u0275\u0275element(144, "input", 84);
    \u0275\u0275elementStart(145, "label", 85);
    \u0275\u0275text(146, " Cegah presensi lembur tanpa jadwal ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(147, "div", 25)(148, "div", 26);
    \u0275\u0275element(149, "i", 86);
    \u0275\u0275text(150, "Fitur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 28)(152, "div", 29);
    \u0275\u0275repeaterCreate(153, DivisiFormComponent_Conditional_23_For_154_Template, 5, 4, "div", 87, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(155, "div", 25)(156, "div", 26);
    \u0275\u0275element(157, "i", 88);
    \u0275\u0275text(158, "Pengaturan Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "div", 28)(160, "div", 29)(161, "div", 73)(162, "label", 31);
    \u0275\u0275text(163, "Minimal Hari Sebelum Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275element(164, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 73)(166, "label", 31);
    \u0275\u0275text(167, "Maks. Hari Per Request");
    \u0275\u0275elementEnd();
    \u0275\u0275element(168, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 73)(170, "label", 31);
    \u0275\u0275text(171, "Maks. Request Per Bulan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(172, "input", 91);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(173, "div", 92)(174, "button", 93);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_23_Template_button_click_174_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.batal());
    });
    \u0275\u0275element(175, "i", 94);
    \u0275\u0275text(176, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "button", 95);
    \u0275\u0275conditionalCreate(178, DivisiFormComponent_Conditional_23_Conditional_178_Template, 2, 0)(179, DivisiFormComponent_Conditional_23_Conditional_179_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["namaDivisi"].invalid && ctx_r1.f["namaDivisi"].touched);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("checked", ctx_r1.form.value.sistemKerja === "SHIFT");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isHariKerja ? 36 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction4(14, _c5, \u0275\u0275pureFunction0(10, _c1), \u0275\u0275pureFunction0(11, _c2), \u0275\u0275pureFunction0(12, _c3), \u0275\u0275pureFunction0(13, _c4)));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunctionV(29, _c16, [\u0275\u0275pureFunction0(19, _c6), \u0275\u0275pureFunction0(20, _c7), \u0275\u0275pureFunction0(21, _c8), \u0275\u0275pureFunction0(22, _c9), \u0275\u0275pureFunction0(23, _c10), \u0275\u0275pureFunction0(24, _c11), \u0275\u0275pureFunction0(25, _c12), \u0275\u0275pureFunction0(26, _c13), \u0275\u0275pureFunction0(27, _c14), \u0275\u0275pureFunction0(28, _c15)]));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.karyawanList());
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r1.supervisiArray.controls);
    \u0275\u0275advance(63);
    \u0275\u0275repeater(\u0275\u0275pureFunction4(44, _c5, \u0275\u0275pureFunction0(40, _c17), \u0275\u0275pureFunction0(41, _c18), \u0275\u0275pureFunction0(42, _c19), \u0275\u0275pureFunction0(43, _c20)));
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 178 : 179);
  }
}
function DivisiFormComponent_Conditional_24_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.modalError());
  }
}
function DivisiFormComponent_Conditional_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 31);
    \u0275\u0275text(2, "Toleransi Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.toleransiKeterlambatan, $event) || (ctx_r1.modalData.toleransiKeterlambatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 76);
    \u0275\u0275text(6, "Menit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.toleransiKeterlambatan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c21));
  }
}
function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 176);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template_select_ngModelChange_4_listener($event) {
      const hari_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r23.polaHari, $event) || (hari_r23.polaHari = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 177);
    \u0275\u0275text(6, "Hari Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 178);
    \u0275\u0275text(8, "Libur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template_input_ngModelChange_10_listener($event) {
      const hari_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r23.jamMasuk, $event) || (hari_r23.jamMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template_input_ngModelChange_12_listener($event) {
      const hari_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r23.jamKeluar, $event) || (hari_r23.jamKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template_input_ngModelChange_14_listener($event) {
      const hari_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r23.mulaiIstirahat, $event) || (hari_r23.mulaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template_input_ngModelChange_16_listener($event) {
      const hari_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r23.selesaiIstirahat, $event) || (hari_r23.selesaiIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "input", 180);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template_input_ngModelChange_18_listener($event) {
      const hari_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r23.maksMenitIstirahat, $event) || (hari_r23.maksMenitIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hari_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-secondary", hari_r23.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hariLabels[hari_r23.hari]);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", hari_r23.polaHari);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c21));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", hari_r23.jamMasuk);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c21))("disabled", hari_r23.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", hari_r23.jamKeluar);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(22, _c21))("disabled", hari_r23.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", hari_r23.mulaiIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c21))("disabled", hari_r23.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", hari_r23.selesaiIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c21))("disabled", hari_r23.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", hari_r23.maksMenitIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(25, _c21))("disabled", hari_r23.polaHari === "LIBUR");
  }
}
function DivisiFormComponent_Conditional_24_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "table", 171)(2, "thead", 59)(3, "tr")(4, "th", 172);
    \u0275\u0275text(5, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 173);
    \u0275\u0275text(7, "Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Jam Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Jam Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Mulai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Selesai Istirahat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 174);
    \u0275\u0275text(17, "Maks. Menit Istirahat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, DivisiFormComponent_Conditional_24_Conditional_31_For_20_Template, 19, 26, "tr", 175, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.modalData.hariList);
  }
}
function DivisiFormComponent_Conditional_24_Conditional_32_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 183)(5, "div", 37)(6, "input", 184);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_32_For_17_Template_input_ngModelChange_6_listener($event) {
      const hari_r25 = \u0275\u0275restoreView(_r24).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r25.polaHari, $event) || (hari_r25.polaHari = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 144);
    \u0275\u0275text(8, "Hari Kerja");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 37)(10, "input", 185);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_32_For_17_Template_input_ngModelChange_10_listener($event) {
      const hari_r25 = \u0275\u0275restoreView(_r24).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r25.polaHari, $event) || (hari_r25.polaHari = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 144);
    \u0275\u0275text(12, "Libur");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "div", 186)(15, "input", 187);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_32_For_17_Template_input_ngModelChange_15_listener($event) {
      const hari_r25 = \u0275\u0275restoreView(_r24).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r25.totalJamKerjaDibutuhkan, $event) || (hari_r25.totalJamKerjaDibutuhkan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 76);
    \u0275\u0275text(17, "jam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td")(19, "div", 186)(20, "input", 188);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Conditional_32_For_17_Template_input_ngModelChange_20_listener($event) {
      const hari_r25 = \u0275\u0275restoreView(_r24).$implicit;
      \u0275\u0275twoWayBindingSet(hari_r25.maksMenitIstirahat, $event) || (hari_r25.maksMenitIstirahat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 76);
    \u0275\u0275text(22, "menit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const hari_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-secondary", hari_r25.polaHari === "LIBUR");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hariLabels[hari_r25.hari]);
    \u0275\u0275advance(4);
    \u0275\u0275property("id", "hk_" + hari_r25.hari);
    \u0275\u0275twoWayProperty("ngModel", hari_r25.polaHari);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c21));
    \u0275\u0275advance();
    \u0275\u0275property("for", "hk_" + hari_r25.hari);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "lb_" + hari_r25.hari);
    \u0275\u0275twoWayProperty("ngModel", hari_r25.polaHari);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c21));
    \u0275\u0275advance();
    \u0275\u0275property("for", "lb_" + hari_r25.hari);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", hari_r25.totalJamKerjaDibutuhkan);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c21))("disabled", hari_r25.polaHari === "LIBUR");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", hari_r25.maksMenitIstirahat);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c21))("disabled", hari_r25.polaHari === "LIBUR");
  }
}
function DivisiFormComponent_Conditional_24_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, " Jadwal jam fleksibel tidak memiliki jam masuk/keluar tetap. Karyawan dapat masuk dan keluar kapan saja pada hari kerja yang ditentukan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 106)(4, "table", 171)(5, "thead", 59)(6, "tr")(7, "th", 173);
    \u0275\u0275text(8, "Hari");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 181);
    \u0275\u0275text(12, "Total Jam Kerja Dibutuhkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 182);
    \u0275\u0275text(14, "Maks. Menit Istirahat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, DivisiFormComponent_Conditional_24_Conditional_32_For_17_Template, 23, 21, "tr", 175, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.modalData.hariList);
  }
}
function DivisiFormComponent_Conditional_24_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 152);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function DivisiFormComponent_Conditional_24_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 153);
    \u0275\u0275text(1, " Simpan ");
  }
}
function DivisiFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 154)(2, "div", 155)(3, "div", 156)(4, "h5", 157);
    \u0275\u0275element(5, "i", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 159);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 160);
    \u0275\u0275conditionalCreate(9, DivisiFormComponent_Conditional_24_Conditional_9_Template, 2, 1, "div", 161);
    \u0275\u0275elementStart(10, "div", 51)(11, "div", 30)(12, "label", 31);
    \u0275\u0275text(13, "Nama Pola Kerja ");
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiFormComponent_Conditional_24_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalData.namaPolaKerja, $event) || (ctx_r1.modalData.namaPolaKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, DivisiFormComponent_Conditional_24_Conditional_17_Template, 7, 3, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 163)(19, "label", 54);
    \u0275\u0275text(20, "Jadwal Kerja ");
    \u0275\u0275elementStart(21, "span", 32);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "i", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 165)(25, "button", 166);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_24_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJadwalChange("JAM_TETAP"));
    });
    \u0275\u0275text(26, " Jadwal Jam Tetap ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 166);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_24_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJadwalChange("JAM_FLEKSIBEL"));
    });
    \u0275\u0275text(28, " Jadwal Jam Fleksibel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "small", 32);
    \u0275\u0275text(30, "*Hanya bisa pilih salah satu jadwal");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, DivisiFormComponent_Conditional_24_Conditional_31_Template, 21, 0, "div", 106);
    \u0275\u0275conditionalCreate(32, DivisiFormComponent_Conditional_24_Conditional_32_Template, 18, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 167)(34, "button", 168);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_24_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(35, "i", 94);
    \u0275\u0275text(36, " Tutup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 169);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_24_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePolaKerja());
    });
    \u0275\u0275conditionalCreate(38, DivisiFormComponent_Conditional_24_Conditional_38_Template, 2, 0)(39, DivisiFormComponent_Conditional_24_Conditional_39_Template, 2, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bx-plus", !ctx_r1.editPolaKerjaId())("bx-edit", ctx_r1.editPolaKerjaId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editPolaKerjaId() ? "Edit Pola Kerja" : "Tambah Pola Kerja", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modalError() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modalData.namaPolaKerja);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c21));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalData.jenisJadwal === "JAM_TETAP" ? 17 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("btn-primary", ctx_r1.modalData.jenisJadwal === "JAM_TETAP")("btn-outline-secondary", ctx_r1.modalData.jenisJadwal !== "JAM_TETAP");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.modalData.jenisJadwal === "JAM_FLEKSIBEL")("btn-outline-secondary", ctx_r1.modalData.jenisJadwal !== "JAM_FLEKSIBEL");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.modalData.jenisJadwal === "JAM_TETAP" ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalData.jenisJadwal === "JAM_FLEKSIBEL" ? 32 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalSaving() ? 38 : 39);
  }
}
function DivisiFormComponent_Conditional_25_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "span", 119);
    \u0275\u0275text(2, " Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function DivisiFormComponent_Conditional_25_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tidak ada pola yang cocok dengan pencarian. ");
  }
}
function DivisiFormComponent_Conditional_25_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Semua pola kerja yang tersedia sudah terhubung ke divisi ini. ");
  }
}
function DivisiFormComponent_Conditional_25_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 194);
    \u0275\u0275elementStart(2, "p", 108);
    \u0275\u0275conditionalCreate(3, DivisiFormComponent_Conditional_25_Conditional_14_Conditional_3_Template, 1, 0)(4, DivisiFormComponent_Conditional_25_Conditional_14_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.assignSearchQuery() ? 3 : 4);
  }
}
function DivisiFormComponent_Conditional_25_Conditional_15_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 112);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "button", 195);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_25_Conditional_15_For_19_Template_button_click_9_listener() {
      const pk_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignPolaKerja(pk_r28));
    });
    \u0275\u0275element(10, "i", 104);
    \u0275\u0275text(11, " Hubungkan ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pk_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pk_r28.namaPolaKerja);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-primary", pk_r28.jenisJadwal === "JAM_TETAP")("bg-info", pk_r28.jenisJadwal === "JAM_FLEKSIBEL");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pk_r28.jenisJadwal === "JAM_TETAP" ? "Jam Tetap" : "Jam Fleksibel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pk_r28.toleransiKeterlambatan, " menit");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.assignSaving());
  }
}
function DivisiFormComponent_Conditional_25_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, " Klik ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Hubungkan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " untuk menambahkan pola ke divisi ini. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 106)(7, "table", 109)(8, "thead", 59)(9, "tr")(10, "th");
    \u0275\u0275text(11, "Nama Pola Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Jenis Jadwal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Toleransi");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, DivisiFormComponent_Conditional_25_Conditional_15_For_19_Template, 12, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.polaKerjaBelumAssigned);
  }
}
function DivisiFormComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 189)(2, "div", 155)(3, "div", 156)(4, "h5", 157);
    \u0275\u0275element(5, "i", 190);
    \u0275\u0275text(6, "Tambah dari Pola yang Ada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 159);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAssignModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 160)(9, "div", 191)(10, "span", 76);
    \u0275\u0275element(11, "i", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 193);
    \u0275\u0275listener("ngModelChange", function DivisiFormComponent_Conditional_25_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignSearchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, DivisiFormComponent_Conditional_25_Conditional_13_Template, 3, 0, "div", 105)(14, DivisiFormComponent_Conditional_25_Conditional_14_Template, 5, 1, "div", 105)(15, DivisiFormComponent_Conditional_25_Conditional_15_Template, 20, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 167)(17, "button", 168);
    \u0275\u0275listener("click", function DivisiFormComponent_Conditional_25_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAssignModal());
    });
    \u0275\u0275element(18, "i", 94);
    \u0275\u0275text(19, " Tutup ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngModel", ctx_r1.assignSearchQuery())("ngModelOptions", \u0275\u0275pureFunction0(3, _c21));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allPolaLoading() ? 13 : ctx_r1.polaKerjaBelumAssigned.length === 0 ? 14 : 15);
  }
}
var SESSION_KEY_FORM = "divisi_draft_form";
var SESSION_KEY_POLA_IDS = "divisi_draft_pola_ids";
var SESSION_KEY_LOCAL_POLA = "divisi_draft_local_pola";
var SESSION_KEY_INDEX = "divisi_draft_pola_index";
var DivisiFormComponent = class _DivisiFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.svc = inject(DivisiService);
    this.karyawanSvc = inject(KaryawanService);
    this.polaKerjaSvc = inject(PolaKerjaService);
    this.editId = signal(null, ...ngDevMode ? [{ debugName: "editId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
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
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.polaKerjaList = signal([], ...ngDevMode ? [{ debugName: "polaKerjaList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allPolaKerjaList = signal([], ...ngDevMode ? [{ debugName: "allPolaKerjaList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allPolaLoading = signal(false, ...ngDevMode ? [{ debugName: "allPolaLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedPolaIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedPolaIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.localPolaKerjaList = signal([], ...ngDevMode ? [{ debugName: "localPolaKerjaList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedPolaKerjaIndex = signal(null, ...ngDevMode ? [{ debugName: "selectedPolaKerjaIndex" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.editPolaKerjaId = signal(null, ...ngDevMode ? [{ debugName: "editPolaKerjaId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editLocalIndex = signal(null, ...ngDevMode ? [{ debugName: "editLocalIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalData = this.emptyModal();
    this.showSalinModal = signal(false, ...ngDevMode ? [{ debugName: "showSalinModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.salinLoading = signal(false, ...ngDevMode ? [{ debugName: "salinLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.salinSearchQuery = signal("", ...ngDevMode ? [{ debugName: "salinSearchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showAssignModal = signal(false, ...ngDevMode ? [{ debugName: "showAssignModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.assignSaving = signal(false, ...ngDevMode ? [{ debugName: "assignSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.assignSearchQuery = signal("", ...ngDevMode ? [{ debugName: "assignSearchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hariLabels = {
      SENIN: "Senin",
      SELASA: "Selasa",
      RABU: "Rabu",
      KAMIS: "Kamis",
      JUMAT: "Jumat",
      SABTU: "Sabtu",
      MINGGU: "Minggu"
    };
    this.form = this.fb.group({
      namaDivisi: ["", [Validators.required, Validators.maxLength(100)]],
      dendaKeterlambatan: [false],
      sistemKerja: ["HARI_KERJA", Validators.required],
      catatanMasuk: ["TIDAK_DIBUTUHKAN", Validators.required],
      catatanMasukLabel: [""],
      catatanMasukPlaceholder: [""],
      catatanKeluar: ["TIDAK_DIBUTUHKAN", Validators.required],
      catatanKeluarLabel: [""],
      catatanKeluarPlaceholder: [""],
      catatanMulaiLembur: ["TIDAK_DIBUTUHKAN", Validators.required],
      catatanMulaiLemburLabel: [""],
      catatanMulaiLemburPlaceholder: [""],
      catatanSelesaiLembur: ["TIDAK_DIBUTUHKAN", Validators.required],
      catatanSelesaiLemburLabel: [""],
      catatanSelesaiLemburPlaceholder: [""],
      lokasiMasuk: [false],
      lokasiIstirahat: [false],
      lokasiSelesaiIstirahat: [false],
      lokasiKeluar: [false],
      lokasiLembur: [false],
      lokasiSelesaiLembur: [false],
      lokasiPertamaKali: [false],
      lokasiDiLuar: [false],
      lokasiPerangkatBerbeda: [false],
      lokasiFotoSelfieBermasalah: [false],
      supervisorId: [null],
      supervisiList: this.fb.array([]),
      bccGlobal: [""],
      menitSebelumMasuk: [0, [Validators.min(0)]],
      menitSetelahMasuk: [0, [Validators.min(0)]],
      cegahPresensiKalenderLibur: [false],
      cegahPresensiJadwalLibur: [false],
      menitSetelahJadwalKeluar: [0, [Validators.min(0)]],
      cegahPresensiLemburTanpaJadwal: [false],
      validasiPerangkat: [false],
      presensiKeluarOtomatis: [false],
      dendaTerlambatKeluar: [false],
      kunjunganKlien: [false],
      minimalHariSebelumCuti: [0, [Validators.min(0)]],
      maksHariPerRequest: [0, [Validators.min(0)]],
      maksRequestPerBulan: [0, [Validators.min(0)]]
    });
  }
  emptyModal() {
    return { namaPolaKerja: "", toleransiKeterlambatan: 0, jenisJadwal: "JAM_TETAP", hariList: defaultHariList() };
  }
  // ── Lifecycle ─────────────────────────────────────────────
  ngOnInit() {
    this.karyawanSvc.findAll().subscribe({
      next: (list) => this.karyawanList.set(list),
      error: (err) => console.error("Gagal load karyawan:", err)
    });
    this.addSupervisi();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId.set(+id);
      this.loading.set(true);
      this.svc.findById(+id).subscribe({
        next: (d) => {
          const _a = d, { supervisiList } = _a, rest = __objRest(_a, ["supervisiList"]);
          this.form.patchValue(__spreadProps(__spreadValues({}, rest), { supervisorId: d.supervisorId ?? null }));
          this.supervisiArray.clear();
          (supervisiList ?? []).forEach((s) => this.addSupervisi(s));
          if (this.supervisiArray.length === 0)
            this.addSupervisi();
          this.loading.set(false);
          this.loadPolaKerja(+id);
        },
        error: () => {
          this.error.set("Data tidak ditemukan.");
          this.loading.set(false);
        }
      });
    } else {
      this.allPolaLoading.set(true);
      this.polaKerjaSvc.findAll().subscribe({
        next: (list) => {
          this.allPolaKerjaList.set(list);
          this.allPolaLoading.set(false);
        },
        error: () => this.allPolaLoading.set(false)
      });
      this.restoreFromSession();
      this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => this.saveFormToSession());
    }
  }
  ngOnDestroy() {
  }
  // ── Session helpers ───────────────────────────────────────
  restoreFromSession() {
    try {
      const savedIds = sessionStorage.getItem(SESSION_KEY_POLA_IDS);
      if (savedIds)
        this.selectedPolaIds.set(new Set(JSON.parse(savedIds)));
      const savedLocal = sessionStorage.getItem(SESSION_KEY_LOCAL_POLA);
      if (savedLocal) {
        const list = JSON.parse(savedLocal);
        this.localPolaKerjaList.set(list);
        const savedIndex = sessionStorage.getItem(SESSION_KEY_INDEX);
        if (savedIndex !== null && list.length > 0) {
          const idx = +savedIndex;
          this.selectedPolaKerjaIndex.set(idx >= 0 && idx < list.length ? idx : 0);
        }
      }
      const savedForm = sessionStorage.getItem(SESSION_KEY_FORM);
      if (savedForm) {
        const formVal = JSON.parse(savedForm);
        const supervisiList = formVal.supervisiList ?? [];
        this.supervisiArray.clear();
        supervisiList.forEach((s) => this.addSupervisi(s));
        if (this.supervisiArray.length === 0)
          this.addSupervisi();
        const _a = formVal, { supervisiList: _ } = _a, rest = __objRest(_a, ["supervisiList"]);
        this.form.patchValue(rest);
      }
    } catch (_) {
      this.clearSession();
    }
  }
  saveFormToSession() {
    if (this.isEdit)
      return;
    try {
      sessionStorage.setItem(SESSION_KEY_FORM, JSON.stringify(this.form.value));
    } catch (_) {
    }
  }
  savePolaIdsToSession() {
    try {
      sessionStorage.setItem(SESSION_KEY_POLA_IDS, JSON.stringify([...this.selectedPolaIds()]));
    } catch (_) {
    }
  }
  saveLocalPolaToSession() {
    try {
      sessionStorage.setItem(SESSION_KEY_LOCAL_POLA, JSON.stringify(this.localPolaKerjaList()));
      const idx = this.selectedPolaKerjaIndex();
      if (idx !== null)
        sessionStorage.setItem(SESSION_KEY_INDEX, String(idx));
      else
        sessionStorage.removeItem(SESSION_KEY_INDEX);
    } catch (_) {
    }
  }
  clearSession() {
    [SESSION_KEY_FORM, SESSION_KEY_POLA_IDS, SESSION_KEY_LOCAL_POLA, SESSION_KEY_INDEX].forEach((k) => sessionStorage.removeItem(k));
  }
  // ── Pola Kerja — mode EDIT (API langsung) ────────────────
  loadPolaKerja(divisiId) {
    this.polaKerjaSvc.findByDivisi(divisiId).subscribe((list) => this.polaKerjaList.set(list));
  }
  // ── Toggle centang pola global (mode TAMBAH) ──────────────
  toggleSelectPola(id) {
    const s = new Set(this.selectedPolaIds());
    if (s.has(id))
      s.delete(id);
    else
      s.add(id);
    this.selectedPolaIds.set(s);
    this.savePolaIdsToSession();
  }
  isPolaSelected(id) {
    return this.selectedPolaIds().has(id);
  }
  // ── Pola Kerja — modal open ───────────────────────────────
  openTambahModal() {
    this.editPolaKerjaId.set(null);
    this.editLocalIndex.set(null);
    this.modalData = __spreadProps(__spreadValues({}, this.emptyModal()), { divisiIds: this.editId() ? [this.editId()] : [] });
    this.modalError.set("");
    this.showModal.set(true);
  }
  // Edit dari API list (mode edit divisi)
  openEditModal(pk) {
    this.editPolaKerjaId.set(pk.id);
    this.editLocalIndex.set(null);
    this.modalData = {
      divisiIds: [...pk.divisiIds],
      namaPolaKerja: pk.namaPolaKerja,
      toleransiKeterlambatan: pk.toleransiKeterlambatan,
      jenisJadwal: pk.jenisJadwal,
      hariList: HARI_LIST.map((hari) => {
        const ex = pk.hariList.find((h) => h.hari === hari);
        return ex ? __spreadValues({}, ex) : { hari, polaHari: "HARI_KERJA", jamMasuk: "", jamKeluar: "", mulaiIstirahat: "", selesaiIstirahat: "", maksMenitIstirahat: 60 };
      })
    };
    this.modalError.set("");
    this.showModal.set(true);
  }
  // Edit dari local list (mode tambah divisi)
  openEditLocalModal(index) {
    this.editPolaKerjaId.set(null);
    this.editLocalIndex.set(index);
    const pk = this.localPolaKerjaList()[index];
    this.modalData = JSON.parse(JSON.stringify(pk));
    this.modalError.set("");
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  // ── Salin dari pola yang sudah ada ───────────────────────
  openSalinModal() {
    this.salinSearchQuery.set("");
    if (this.allPolaKerjaList().length === 0) {
      this.salinLoading.set(true);
      this.polaKerjaSvc.findAll().subscribe({
        next: (list) => {
          this.allPolaKerjaList.set(list);
          this.salinLoading.set(false);
        },
        error: () => this.salinLoading.set(false)
      });
    }
    this.showSalinModal.set(true);
  }
  closeSalinModal() {
    this.showSalinModal.set(false);
  }
  get filteredAllPolaKerja() {
    const q = this.salinSearchQuery().toLowerCase().trim();
    if (!q)
      return this.allPolaKerjaList();
    return this.allPolaKerjaList().filter((pk) => pk.namaPolaKerja.toLowerCase().includes(q));
  }
  salinPolaKerja(pk) {
    const copy = {
      namaPolaKerja: pk.namaPolaKerja,
      toleransiKeterlambatan: pk.toleransiKeterlambatan,
      jenisJadwal: pk.jenisJadwal,
      hariList: HARI_LIST.map((hari) => {
        const ex = pk.hariList.find((h) => h.hari === hari);
        return ex ? {
          hari: ex.hari,
          polaHari: ex.polaHari,
          jamMasuk: ex.jamMasuk,
          jamKeluar: ex.jamKeluar,
          mulaiIstirahat: ex.mulaiIstirahat,
          selesaiIstirahat: ex.selesaiIstirahat,
          maksMenitIstirahat: ex.maksMenitIstirahat,
          totalJamKerjaDibutuhkan: ex.totalJamKerjaDibutuhkan
        } : {
          hari,
          polaHari: "HARI_KERJA",
          jamMasuk: "",
          jamKeluar: "",
          mulaiIstirahat: "",
          selesaiIstirahat: "",
          maksMenitIstirahat: 60
        };
      })
    };
    const current = [...this.localPolaKerjaList(), copy];
    this.localPolaKerjaList.set(current);
    this.selectedPolaKerjaIndex.set(current.length - 1);
    this.saveLocalPolaToSession();
    this.showSalinModal.set(false);
  }
  onJadwalChange(jenis) {
    this.modalData.jenisJadwal = jenis;
    if (jenis === "JAM_FLEKSIBEL") {
      this.modalData.hariList.forEach((h) => {
        h.jamMasuk = "";
        h.jamKeluar = "";
        h.mulaiIstirahat = "";
        h.selesaiIstirahat = "";
      });
    }
  }
  savePolaKerja() {
    if (!this.modalData.namaPolaKerja?.trim()) {
      this.modalError.set("Nama pola kerja wajib diisi.");
      return;
    }
    if (this.isEdit) {
      this.modalSaving.set(true);
      const id = this.editPolaKerjaId();
      const action$ = id ? this.polaKerjaSvc.update(id, this.modalData) : this.polaKerjaSvc.create(__spreadProps(__spreadValues({}, this.modalData), { divisiIds: [this.editId()] }));
      action$.subscribe({
        next: () => {
          this.modalSaving.set(false);
          this.showModal.set(false);
          this.loadPolaKerja(this.editId());
          if (!id)
            this.polaKerjaSvc.findAll().subscribe((l) => this.allPolaKerjaList.set(l));
        },
        error: (err) => {
          this.modalSaving.set(false);
          this.modalError.set(err?.data?.message ?? err?.message ?? "Terjadi kesalahan.");
        }
      });
      return;
    }
    const localIdx = this.editLocalIndex();
    const current = [...this.localPolaKerjaList()];
    const saved = JSON.parse(JSON.stringify(this.modalData));
    if (localIdx !== null) {
      current[localIdx] = saved;
    } else {
      current.push(saved);
      this.selectedPolaKerjaIndex.set(current.length - 1);
    }
    this.localPolaKerjaList.set(current);
    this.saveLocalPolaToSession();
    this.showModal.set(false);
  }
  deletePolaKerja(polaId) {
    if (!confirm("Lepas pola kerja ini dari divisi?"))
      return;
    const divisiId = this.editId();
    this.polaKerjaSvc.unassignDivisi(polaId, divisiId).subscribe({
      next: () => {
        this.loadPolaKerja(divisiId);
        this.polaKerjaSvc.findAll().subscribe((l) => this.allPolaKerjaList.set(l));
      }
    });
  }
  // ── Modal assign pola ke divisi (mode EDIT) ───────────────
  openAssignModal() {
    this.assignSearchQuery.set("");
    if (this.allPolaKerjaList().length === 0) {
      this.allPolaLoading.set(true);
      this.polaKerjaSvc.findAll().subscribe({
        next: (list) => {
          this.allPolaKerjaList.set(list);
          this.allPolaLoading.set(false);
        },
        error: () => this.allPolaLoading.set(false)
      });
    }
    this.showAssignModal.set(true);
  }
  closeAssignModal() {
    this.showAssignModal.set(false);
  }
  /** Pola yang belum ter-assign ke divisi ini, difilter search */
  get polaKerjaBelumAssigned() {
    const assignedIds = new Set(this.polaKerjaList().map((p) => p.id));
    const q = this.assignSearchQuery().toLowerCase().trim();
    return this.allPolaKerjaList().filter((p) => !assignedIds.has(p.id)).filter((p) => !q || p.namaPolaKerja.toLowerCase().includes(q));
  }
  assignPolaKerja(pk) {
    const divisiId = this.editId();
    this.assignSaving.set(true);
    const newIds = [...pk.divisiIds ?? [], divisiId];
    this.polaKerjaSvc.assignDivisi(pk.id, newIds).subscribe({
      next: () => {
        this.assignSaving.set(false);
        this.loadPolaKerja(divisiId);
        this.polaKerjaSvc.findAll().subscribe((l) => this.allPolaKerjaList.set(l));
      },
      error: () => this.assignSaving.set(false)
    });
  }
  deleteLocalPolaKerja(index) {
    const current = [...this.localPolaKerjaList()];
    current.splice(index, 1);
    this.localPolaKerjaList.set(current);
    this.saveLocalPolaToSession();
    const sel = this.selectedPolaKerjaIndex();
    if (sel !== null && sel >= index) {
      this.selectedPolaKerjaIndex.set(current.length > 0 ? Math.max(0, sel - 1) : null);
    }
  }
  // Getter untuk pola kerja yang sedang dipilih di dropdown
  get selectedPolaKerja() {
    const idx = this.selectedPolaKerjaIndex();
    if (idx === null)
      return null;
    return this.localPolaKerjaList()[idx] ?? null;
  }
  onSelectPolaKerja(value) {
    this.selectedPolaKerjaIndex.set(value);
    try {
      if (value !== null) {
        sessionStorage.setItem(SESSION_KEY_INDEX, String(value));
      } else {
        sessionStorage.removeItem(SESSION_KEY_INDEX);
      }
    } catch (_) {
    }
  }
  // ── Supervisi FormArray ───────────────────────────────────
  get supervisiArray() {
    return this.form.get("supervisiList");
  }
  supervisiGroup(i) {
    return this.supervisiArray.at(i);
  }
  addSupervisi(item) {
    this.supervisiArray.push(this.fb.group({
      nama: [item?.nama ?? ""],
      email: [item?.email ?? ""],
      bcc: [item?.bcc ?? ""]
    }));
  }
  removeSupervisi(i) {
    if (this.supervisiArray.length > 1)
      this.supervisiArray.removeAt(i);
  }
  // ── Submit ────────────────────────────────────────────────
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const req = this.form.value;
    if (this.isEdit) {
      this.svc.update(this.editId(), req).subscribe({
        next: () => this.router.navigate(["/divisi"]),
        error: (err) => {
          this.error.set(err?.data?.message ?? err?.message ?? "Terjadi kesalahan.");
          this.saving.set(false);
        }
      });
    } else {
      this.svc.create(req).pipe(switchMap((divisi) => {
        const ops = [];
        this.selectedPolaIds().forEach((polaId) => {
          const existing = this.allPolaKerjaList().find((p) => p.id === polaId);
          const newIds = [...existing?.divisiIds ?? [], divisi.id];
          ops.push(this.polaKerjaSvc.assignDivisi(polaId, newIds));
        });
        this.localPolaKerjaList().forEach((pk) => ops.push(this.polaKerjaSvc.create(__spreadProps(__spreadValues({}, pk), { divisiIds: [divisi.id] }))));
        return ops.length > 0 ? forkJoin(ops).pipe(switchMap(() => of(divisi))) : of(divisi);
      })).subscribe({
        next: () => {
          this.clearSession();
          this.router.navigate(["/divisi"]);
        },
        error: (err) => {
          this.error.set(err?.data?.message ?? err?.message ?? "Terjadi kesalahan.");
          this.saving.set(false);
        }
      });
    }
  }
  // ── Getters ───────────────────────────────────────────────
  get f() {
    return this.form.controls;
  }
  get isEdit() {
    return !!this.editId();
  }
  get isHariKerja() {
    return this.form.get("sistemKerja")?.value === "HARI_KERJA";
  }
  /** Toggle Sistem Kerja Shift dari checkbox di form. */
  onShiftToggle(checked) {
    this.form.patchValue({ sistemKerja: checked ? "SHIFT" : "HARI_KERJA" });
    this.form.get("sistemKerja")?.markAsDirty();
  }
  batal() {
    if (!this.isEdit && (this.selectedPolaIds().size > 0 || this.localPolaKerjaList().length > 0 || this.form.dirty)) {
      if (!confirm("Data draft yang belum disimpan akan dihapus. Yakin ingin keluar?"))
        return;
      this.clearSession();
    }
    this.router.navigate(["/divisi"]);
  }
  static {
    this.\u0275fac = function DivisiFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DivisiFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DivisiFormComponent, selectors: [["app-divisi-form"]], decls: 26, vars: 11, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/divisi"], [1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "bx", "bx-arrow-back"], [1, "mb-0"], [1, "bx", "me-1"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-flex", "align-items-center"], [1, "card"], ["novalidate", "", 3, "formGroup"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "btn-close", "ms-auto", 3, "click"], [1, "card-body", "placeholder-glow"], [1, "placeholder", "col-12", "rounded", "mb-3", 2, "height", "38px"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "card", "mb-3"], [1, "card-header", "fw-semibold"], [1, "bx", "bx-buildings", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "namaDivisi", "placeholder", "Nama divisi", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-3"], [1, "d-flex", "gap-3", "mt-1"], [1, "form-check"], ["type", "radio", "formControlName", "dendaKeterlambatan", "id", "dendaYa", 1, "form-check-input", 3, "value"], ["for", "dendaYa", 1, "form-check-label"], ["type", "radio", "formControlName", "dendaKeterlambatan", "id", "dendaTidak", 1, "form-check-input", 3, "value"], ["for", "dendaTidak", 1, "form-check-label"], [1, "form-label", "d-block"], [1, "form-check", "form-switch", "mt-2"], ["type", "checkbox", "role", "switch", "id", "sistemKerjaShift", 1, "form-check-input", 3, "change", "checked"], ["for", "sistemKerjaShift", 1, "form-check-label"], [1, "bx", "bx-note", "me-2"], [1, "bx", "bx-map-pin", "me-2"], [1, "row", "g-2"], [1, "col-md-4", "col-sm-6"], [1, "bx", "bx-user-check", "me-2"], [1, "row", "g-3", "mb-4"], ["formControlName", "supervisorId", 1, "form-select"], [3, "ngValue"], [1, "form-label", "fw-semibold"], [1, "alert", "py-2", "px-3", "mb-3", 2, "background", "#f3f0ff", "border", "1px solid #c4b5fd", "color", "#5b21b6", "font-size", ".85rem"], [1, "bx", "bx-info-circle", "me-1"], ["formArrayName", "supervisiList", 1, "table-responsive", "mb-2"], [1, "table", "table-bordered", "align-middle", "mb-0"], [1, "table-light"], [2, "width", "50px"], [1, "text-muted", "fw-normal"], [2, "width", "80px"], [3, "formGroupName"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "text-primary", "p-0", "mb-4", 3, "click"], [1, "bx", "bx-plus"], [1, "col-12"], [1, "alert", "py-2", "px-3", "mb-2", 2, "background", "#f9fafb", "border", "1px solid #e5e7eb", "color", "#374151", "font-size", ".85rem"], ["type", "text", "formControlName", "bccGlobal", "placeholder", "Pisahkan email dengan koma jika lebih dari satu", 1, "form-control"], [1, "bx", "bx-time", "me-2"], [1, "fw-semibold", "text-primary", "mb-2"], [1, "mt-0", "mb-3"], [1, "row", "g-3", "mb-3"], [1, "col-md-4"], [1, "input-group"], ["type", "number", "formControlName", "menitSebelumMasuk", "min", "0", 1, "form-control"], [1, "input-group-text"], ["type", "number", "formControlName", "menitSetelahMasuk", "min", "0", 1, "form-control"], [1, "d-flex", "flex-column", "gap-2", "mb-4"], ["type", "checkbox", "id", "cegahKalender", "formControlName", "cegahPresensiKalenderLibur", 1, "form-check-input"], ["for", "cegahKalender", 1, "form-check-label"], ["type", "checkbox", "id", "cegahJadwal", "formControlName", "cegahPresensiJadwalLibur", 1, "form-check-input"], ["for", "cegahJadwal", 1, "form-check-label"], ["type", "number", "formControlName", "menitSetelahJadwalKeluar", "min", "0", 1, "form-control"], ["type", "checkbox", "id", "cegahLembur", "formControlName", "cegahPresensiLemburTanpaJadwal", 1, "form-check-input"], ["for", "cegahLembur", 1, "form-check-label"], [1, "bx", "bx-toggle-left", "me-2"], [1, "col-md-3", "col-sm-6"], [1, "bx", "bx-calendar", "me-2"], ["type", "number", "formControlName", "minimalHariSebelumCuti", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "maksHariPerRequest", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "maksRequestPerBulan", "min", "0", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-2", "mb-4"], ["type", "button", 1, "btn", "btn-secondary", "px-4", 3, "click"], [1, "bx", "bx-x", "me-1"], ["type", "submit", 1, "btn", "btn-primary", "px-4", 3, "disabled"], [1, "card-header", "fw-semibold", "d-flex", "align-items-center", "justify-content-between"], [1, "bx", "bx-time-five", "me-2"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "card-body", "p-0"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bx", "bx-link-alt", "me-1"], [1, "text-center", "py-4", "text-muted"], [1, "table-responsive"], [1, "bx", "bx-calendar-x", 2, "font-size", "2rem"], [1, "mt-2", "mb-0", "small"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "text-muted"], [1, "fw-semibold"], [1, "badge"], ["type", "button", "title", "Edit pola kerja", 1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "click"], [1, "bx", "bx-edit"], ["type", "button", "title", "Lepas dari divisi ini (pola tidak dihapus)", 1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], [1, "bx", "bx-unlink"], [1, "text-center", "py-3", "text-muted"], [1, "card-footer", "bg-transparent"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "border", "rounded", "p-3", "bg-light", "mb-2"], [1, "text-muted", "small", "mb-2"], [1, "table-responsive", "mb-3"], [2, "width", "40px"], [2, "cursor", "pointer", 3, "table-primary"], [2, "cursor", "pointer", 3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "click", "checked"], [1, "small", "fw-semibold", "mb-2", "text-success"], [1, "bx", "bx-plus-circle", "me-1"], [1, "table", "table-sm", "table-hover", "align-middle", "mb-0"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bx", "bx-trash"], [1, "text-primary", "fw-semibold"], [1, "text-success", "fw-semibold"], [1, "form-select", 3, "formControlName"], ["value", "TIDAK_DIBUTUHKAN"], ["value", "OPTIONAL"], ["value", "DIBUTUHKAN"], [1, "mt-2", "d-flex", "flex-column", "gap-2"], [1, "form-label", "small", "text-muted", "mb-1"], ["type", "text", "placeholder", "cth. Keterangan kehadiran", 1, "form-control", "form-control-sm", 3, "formControlName"], ["type", "text", "placeholder", "cth. Masukkan keterangan...", 1, "form-control", "form-control-sm", 3, "formControlName"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "id"], [1, "form-check-label", 3, "for"], [1, "text-center", "text-muted"], ["type", "text", "formControlName", "nama", "placeholder", "Nama", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "email", "placeholder", "email1@domain.com, email2@domain.com", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "bcc", "placeholder", "bcc1@domain.com, bcc2@domain.com", 1, "form-control", "form-control-sm"], [1, "text-center"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "text-danger", "p-0", 3, "click", "disabled"], [1, "form-check", "form-switch"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bx", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], ["type", "text", "placeholder", "cth. Shift Pagi", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "mb-4"], ["title", "Pilih salah satu jenis jadwal", 1, "bx", "bx-help-circle", "ms-1", "text-muted"], [1, "d-flex", "gap-2", "mb-1"], ["type", "button", 1, "btn", "btn-sm", "px-4", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "px-4", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table", "table-bordered", "align-middle"], [2, "width", "100px"], [2, "width", "140px"], [2, "width", "130px"], [3, "table-secondary"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "HARI_KERJA"], ["value", "LIBUR"], ["type", "time", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", "text-center", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [2, "width", "200px"], [2, "width", "180px"], [1, "d-flex", "gap-3"], ["type", "radio", "value", "HARI_KERJA", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "ngModelOptions"], ["type", "radio", "value", "LIBUR", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "ngModelOptions"], [1, "input-group", "input-group-sm"], ["type", "number", "min", "0", "placeholder", "jam", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], ["type", "number", "min", "0", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "bx", "bx-link-alt", "me-2"], [1, "input-group", "input-group-sm", "mb-3"], [1, "bx", "bx-search"], ["type", "text", "placeholder", "Cari nama pola kerja...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "bx", "bx-check-circle", 2, "font-size", "2rem", "color", "#28a745"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"]], template: function DivisiFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Divisi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function DivisiFormComponent_Template_button_click_16_listener() {
          return ctx.batal();
        });
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h5", 13);
        \u0275\u0275element(19, "i", 14);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(21, DivisiFormComponent_Conditional_21_Template, 4, 1, "div", 15);
        \u0275\u0275conditionalCreate(22, DivisiFormComponent_Conditional_22_Template, 4, 1, "div", 16);
        \u0275\u0275conditionalCreate(23, DivisiFormComponent_Conditional_23_Template, 180, 49, "form", 17);
        \u0275\u0275conditionalCreate(24, DivisiFormComponent_Conditional_24_Template, 40, 22, "div", 18);
        \u0275\u0275conditionalCreate(25, DivisiFormComponent_Conditional_25_Template, 20, 4, "div", 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit" : "Tambah");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("bx-plus", !ctx.isEdit)("bx-edit", ctx.isEdit);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Edit Divisi" : "Tambah Divisi", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAssignModal() ? 25 : -1);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, FormsModule, NgModel, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DivisiFormComponent, [{
    type: Component,
    args: [{ selector: "app-divisi-form", standalone: true, imports: [ReactiveFormsModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/divisi">Divisi</a></li>\r
          <li class="breadcrumb-item active">{{ isEdit ? 'Edit' : 'Tambah' }}</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <div class="d-flex align-items-center gap-2 mb-3">\r
    <button type="button" class="btn btn-light btn-sm" (click)="batal()"><i class="bx bx-arrow-back"></i></button>\r
    <h5 class="mb-0"><i class="bx me-1" [class.bx-plus]="!isEdit" [class.bx-edit]="isEdit"></i>\r
      {{ isEdit ? 'Edit Divisi' : 'Tambah Divisi' }}\r
    </h5>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger alert-dismissible fade show d-flex align-items-center">\r
      <i class="bx bx-error-circle me-2 fs-5"></i> {{ error() }}\r
      <button class="btn-close ms-auto" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  @if (loading()) {\r
    <div class="card"><div class="card-body placeholder-glow">\r
      @for (i of [1,2,3,4]; track i) {\r
        <div class="placeholder col-12 rounded mb-3" style="height:38px"></div>\r
      }\r
    </div></div>\r
  }\r
\r
  @if (!loading()) {\r
  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\r
\r
    <!-- \u2460 Identitas -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-buildings me-2"></i>Identitas Divisi</div>\r
      <div class="card-body">\r
        <div class="row g-3">\r
          <div class="col-md-6">\r
            <label class="form-label">Nama Divisi <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" formControlName="namaDivisi"\r
                   [class.is-invalid]="f['namaDivisi'].invalid && f['namaDivisi'].touched"\r
                   placeholder="Nama divisi" />\r
            <div class="invalid-feedback">Nama divisi wajib diisi.</div>\r
          </div>\r
          <div class="col-md-3">\r
            <label class="form-label">Denda Keterlambatan</label>\r
            <div class="d-flex gap-3 mt-1">\r
              <div class="form-check">\r
                <input class="form-check-input" type="radio" formControlName="dendaKeterlambatan"\r
                       [value]="true" id="dendaYa" />\r
                <label class="form-check-label" for="dendaYa">Ya</label>\r
              </div>\r
              <div class="form-check">\r
                <input class="form-check-input" type="radio" formControlName="dendaKeterlambatan"\r
                       [value]="false" id="dendaTidak" />\r
                <label class="form-check-label" for="dendaTidak">Tidak</label>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-md-3">\r
            <label class="form-label d-block">Sistem Kerja Shift</label>\r
            <div class="form-check form-switch mt-2">\r
              <input class="form-check-input" type="checkbox" role="switch"\r
                     id="sistemKerjaShift"\r
                     [checked]="form.value.sistemKerja === 'SHIFT'"\r
                     (change)="onShiftToggle($any($event.target).checked)" />\r
              <label class="form-check-label" for="sistemKerjaShift">\r
                Aktifkan agar karyawan divisi ini muncul di <strong>Jadwal Shift</strong>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2460 Pola Kerja (muncul hanya jika Sistem Kerja = Hari Kerja) -->\r
    @if (isHariKerja) {\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold d-flex align-items-center justify-content-between">\r
        <span><i class="bx bx-time-five me-2"></i>Pola Kerja</span>\r
        <div class="d-flex gap-2">\r
          @if (isEdit) {\r
            <button type="button" class="btn btn-outline-secondary btn-sm" (click)="openAssignModal()">\r
              <i class="bx bx-link-alt me-1"></i> Tambah dari Pola yang Ada\r
            </button>\r
          }\r
          <button type="button" class="btn btn-primary btn-sm" (click)="openTambahModal()">\r
            <i class="bx bx-plus me-1"></i> Buat Pola Baru\r
          </button>\r
        </div>\r
      </div>\r
\r
      @if (isEdit) {\r
        <!-- Mode EDIT: tabel pola yang dipakai divisi ini -->\r
        <div class="card-body p-0">\r
          @if (polaKerjaList().length === 0) {\r
            <div class="text-center py-4 text-muted">\r
              <i class="bx bx-calendar-x" style="font-size:2rem"></i>\r
              <p class="mt-2 mb-0 small">Belum ada pola kerja.</p>\r
            </div>\r
          } @else {\r
            <div class="table-responsive">\r
              <table class="table table-hover align-middle mb-0">\r
                <thead class="table-light">\r
                  <tr><th>#</th><th>Nama Pola Kerja</th><th>Jadwal</th><th>Toleransi</th><th>Aksi</th></tr>\r
                </thead>\r
                <tbody>\r
                  @for (pk of polaKerjaList(); track pk.id; let i = $index) {\r
                    <tr>\r
                      <td class="text-muted">{{ i + 1 }}</td>\r
                      <td class="fw-semibold">{{ pk.namaPolaKerja }}</td>\r
                      <td>\r
                        <span class="badge" [class.bg-primary]="pk.jenisJadwal === 'JAM_TETAP'"\r
                              [class.bg-info]="pk.jenisJadwal === 'JAM_FLEKSIBEL'">\r
                          {{ pk.jenisJadwal === 'JAM_TETAP' ? 'Jam Tetap' : 'Jam Fleksibel' }}\r
                        </span>\r
                      </td>\r
                      <td>{{ pk.toleransiKeterlambatan }} menit</td>\r
                      <td>\r
                        <button type="button" class="btn btn-outline-primary btn-sm me-1"\r
                                title="Edit pola kerja" (click)="openEditModal(pk)">\r
                          <i class="bx bx-edit"></i>\r
                        </button>\r
                        <button type="button" class="btn btn-outline-warning btn-sm"\r
                                title="Lepas dari divisi ini (pola tidak dihapus)" (click)="deletePolaKerja(pk.id)">\r
                          <i class="bx bx-unlink"></i>\r
                        </button>\r
                      </td>\r
                    </tr>\r
                  }\r
                </tbody>\r
              </table>\r
            </div>\r
          }\r
        </div>\r
      } @else {\r
        <!-- Mode TAMBAH: pilih dari pola global yang sudah ada -->\r
        <div class="card-body">\r
\r
          @if (allPolaLoading()) {\r
            <div class="text-center py-3 text-muted">\r
              <span class="spinner-border spinner-border-sm me-2"></span> Memuat daftar pola kerja...\r
            </div>\r
          } @else if (allPolaKerjaList().length === 0 && localPolaKerjaList().length === 0) {\r
            <div class="text-center py-4 text-muted">\r
              <i class="bx bx-calendar-x" style="font-size:2rem"></i>\r
              <p class="mt-2 mb-0 small">Belum ada pola kerja. Klik <strong>Buat Pola Baru</strong> untuk menambah.</p>\r
            </div>\r
          } @else {\r
\r
            <!-- Daftar pola global \u2014 centang untuk memilih -->\r
            @if (allPolaKerjaList().length > 0) {\r
              <p class="text-muted small mb-2"><i class="bx bx-info-circle me-1"></i>\r
                Centang pola kerja yang ingin digunakan oleh divisi ini.\r
              </p>\r
              <div class="table-responsive mb-3">\r
                <table class="table table-hover align-middle mb-0">\r
                  <thead class="table-light">\r
                    <tr>\r
                      <th style="width:40px"></th>\r
                      <th>Nama Pola Kerja</th>\r
                      <th>Jadwal</th>\r
                      <th>Toleransi</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    @for (pk of allPolaKerjaList(); track pk.id) {\r
                      <tr [class.table-primary]="isPolaSelected(pk.id)" style="cursor:pointer"\r
                          (click)="toggleSelectPola(pk.id)">\r
                        <td>\r
                          <input type="checkbox" class="form-check-input"\r
                                 [checked]="isPolaSelected(pk.id)"\r
                                 (click)="$event.stopPropagation(); toggleSelectPola(pk.id)" />\r
                        </td>\r
                        <td class="fw-semibold">{{ pk.namaPolaKerja }}</td>\r
                        <td>\r
                          <span class="badge" [class.bg-primary]="pk.jenisJadwal === 'JAM_TETAP'"\r
                                [class.bg-info]="pk.jenisJadwal === 'JAM_FLEKSIBEL'">\r
                            {{ pk.jenisJadwal === 'JAM_TETAP' ? 'Jam Tetap' : 'Jam Fleksibel' }}\r
                          </span>\r
                        </td>\r
                        <td>{{ pk.toleransiKeterlambatan }} menit</td>\r
                      </tr>\r
                    }\r
                  </tbody>\r
                </table>\r
              </div>\r
            }\r
\r
            <!-- Pola baru lokal (belum tersimpan di DB) -->\r
            @if (localPolaKerjaList().length > 0) {\r
              <div class="border rounded p-3 bg-light mb-2">\r
                <p class="small fw-semibold mb-2 text-success">\r
                  <i class="bx bx-plus-circle me-1"></i> Pola Baru (akan dibuat saat Simpan)\r
                </p>\r
                <div class="table-responsive">\r
                  <table class="table table-sm table-hover align-middle mb-0">\r
                    <thead class="table-light">\r
                      <tr><th>#</th><th>Nama Pola Kerja</th><th>Jadwal</th><th>Toleransi</th><th>Aksi</th></tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (pk of localPolaKerjaList(); track $index; let i = $index) {\r
                        <tr>\r
                          <td class="text-muted">{{ i + 1 }}</td>\r
                          <td class="fw-semibold">{{ pk.namaPolaKerja }}</td>\r
                          <td>\r
                            <span class="badge" [class.bg-primary]="pk.jenisJadwal === 'JAM_TETAP'"\r
                                  [class.bg-info]="pk.jenisJadwal === 'JAM_FLEKSIBEL'">\r
                              {{ pk.jenisJadwal === 'JAM_TETAP' ? 'Jam Tetap' : 'Jam Fleksibel' }}\r
                            </span>\r
                          </td>\r
                          <td>{{ pk.toleransiKeterlambatan }} menit</td>\r
                          <td>\r
                            <button type="button" class="btn btn-outline-primary btn-sm me-1"\r
                                    (click)="openEditLocalModal(i)">\r
                              <i class="bx bx-edit"></i>\r
                            </button>\r
                            <button type="button" class="btn btn-outline-danger btn-sm"\r
                                    (click)="deleteLocalPolaKerja(i)">\r
                              <i class="bx bx-trash"></i>\r
                            </button>\r
                          </td>\r
                        </tr>\r
                      }\r
                    </tbody>\r
                  </table>\r
                </div>\r
              </div>\r
            }\r
          }\r
        </div>\r
\r
        <div class="card-footer bg-transparent">\r
          <small class="text-muted">\r
            <i class="bx bx-info-circle me-1"></i>\r
            Pola yang dicentang akan langsung terhubung ke divisi ini tanpa duplikat data.\r
            @if (selectedPolaIds().size > 0 || localPolaKerjaList().length > 0) {\r
              \xB7\r
              @if (selectedPolaIds().size > 0) {\r
                <span class="text-primary fw-semibold">{{ selectedPolaIds().size }} pola dipilih</span>\r
              }\r
              @if (selectedPolaIds().size > 0 && localPolaKerjaList().length > 0) { \xB7 }\r
              @if (localPolaKerjaList().length > 0) {\r
                <span class="text-success fw-semibold">{{ localPolaKerjaList().length }} pola baru</span>\r
              }\r
            }\r
          </small>\r
        </div>\r
      }\r
\r
    </div>\r
    }\r
\r
    <!-- \u2461 Catatan Presensi -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-note me-2"></i>Catatan Saat Presensi</div>\r
      <div class="card-body">\r
        <div class="row g-3">\r
          @for (item of [\r
            {key:'catatanMasuk',        labelKey:'catatanMasukLabel',              placeholderKey:'catatanMasukPlaceholder',              label:'Catatan Saat Presensi Masuk'},\r
            {key:'catatanKeluar',       labelKey:'catatanKeluarLabel',             placeholderKey:'catatanKeluarPlaceholder',             label:'Catatan Saat Presensi Keluar'},\r
            {key:'catatanMulaiLembur',  labelKey:'catatanMulaiLemburLabel',        placeholderKey:'catatanMulaiLemburPlaceholder',        label:'Catatan Saat Presensi Mulai Lembur'},\r
            {key:'catatanSelesaiLembur',labelKey:'catatanSelesaiLemburLabel',      placeholderKey:'catatanSelesaiLemburPlaceholder',      label:'Catatan Saat Presensi Selesai Lembur'}\r
          ]; track item.key) {\r
            <div class="col-md-6">\r
              <label class="form-label">{{ item.label }}</label>\r
              <select class="form-select" [formControlName]="item.key">\r
                <option value="TIDAK_DIBUTUHKAN">Tidak Dibutuhkan</option>\r
                <option value="OPTIONAL">Optional</option>\r
                <option value="DIBUTUHKAN">Dibutuhkan</option>\r
              </select>\r
              @if (form.get(item.key)?.value === 'OPTIONAL' || form.get(item.key)?.value === 'DIBUTUHKAN') {\r
                <div class="mt-2 d-flex flex-column gap-2">\r
                  <div>\r
                    <label class="form-label small text-muted mb-1">Label Catatan</label>\r
                    <input type="text" class="form-control form-control-sm"\r
                           [formControlName]="item.labelKey"\r
                           placeholder="cth. Keterangan kehadiran" />\r
                  </div>\r
                  <div>\r
                    <label class="form-label small text-muted mb-1">Placeholder Catatan</label>\r
                    <input type="text" class="form-control form-control-sm"\r
                           [formControlName]="item.placeholderKey"\r
                           placeholder="cth. Masukkan keterangan..." />\r
                  </div>\r
                </div>\r
              }\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2462 Presensi Sesuai Lokasi -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-map-pin me-2"></i>Presensi Yang Harus Sesuai Lokasi</div>\r
      <div class="card-body">\r
        <div class="row g-2">\r
          @for (item of [\r
            {key:'lokasiMasuk',              label:'Masuk'},\r
            {key:'lokasiIstirahat',          label:'Istirahat'},\r
            {key:'lokasiSelesaiIstirahat',   label:'Selesai Istirahat'},\r
            {key:'lokasiKeluar',             label:'Keluar'},\r
            {key:'lokasiLembur',             label:'Lembur'},\r
            {key:'lokasiSelesaiLembur',      label:'Selesai Lembur'},\r
            {key:'lokasiPertamaKali',        label:'Presensi Pertama Kali'},\r
            {key:'lokasiDiLuar',             label:'Di Luar Lokasi Kehadiran'},\r
            {key:'lokasiPerangkatBerbeda',   label:'Menggunakan Perangkat Berbeda'},\r
            {key:'lokasiFotoSelfieBermasalah',label:'Foto Selfie Bermasalah'}\r
          ]; track item.key) {\r
            <div class="col-md-4 col-sm-6">\r
              <div class="form-check">\r
                <input class="form-check-input" type="checkbox" [formControlName]="item.key" [id]="item.key" />\r
                <label class="form-check-label" [for]="item.key">{{ item.label }}</label>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2463 Supervisor & Supervisi -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-user-check me-2"></i>Supervisor & Supervisi</div>\r
      <div class="card-body">\r
\r
        <!-- Supervisor dropdown -->\r
        <div class="row g-3 mb-4">\r
          <div class="col-md-6">\r
            <label class="form-label">Supervisor</label>\r
            <select class="form-select" formControlName="supervisorId">\r
              <option [ngValue]="null">-- Pilih Karyawan --</option>\r
              @for (k of karyawanList(); track k.id) {\r
                <option [ngValue]="k.id">{{ k.namaLengkap }} ({{ k.nip }})</option>\r
              }\r
            </select>\r
          </div>\r
        </div>\r
\r
        <!-- Supervisi -->\r
        <label class="form-label fw-semibold">Supervisi</label>\r
        <div class="alert py-2 px-3 mb-3" style="background:#f3f0ff;border:1px solid #c4b5fd;color:#5b21b6;font-size:.85rem">\r
          <i class="bx bx-info-circle me-1"></i>\r
          Supervisi ini dapat dipilih oleh karyawan sebagai tujuan kemana laporan catatannya akan dikirimkan.\r
        </div>\r
\r
        <!-- Tabel supervisi dinamis -->\r
        <div class="table-responsive mb-2" formArrayName="supervisiList">\r
          <table class="table table-bordered align-middle mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th style="width:50px">No</th>\r
                <th>Nama</th>\r
                <th>Email <small class="text-muted fw-normal">(pisah dengan koma)</small></th>\r
                <th>BCC Laporan Ke <small class="text-muted fw-normal">(pisah dengan koma)</small></th>\r
                <th style="width:80px"></th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (item of supervisiArray.controls; track $index) {\r
                <tr [formGroupName]="$index">\r
                  <td class="text-center text-muted">{{ $index + 1 }}</td>\r
                  <td>\r
                    <input type="text" class="form-control form-control-sm"\r
                           formControlName="nama" placeholder="Nama" />\r
                  </td>\r
                  <td>\r
                    <input type="text" class="form-control form-control-sm"\r
                           formControlName="email" placeholder="email1@domain.com, email2@domain.com" />\r
                  </td>\r
                  <td>\r
                    <input type="text" class="form-control form-control-sm"\r
                           formControlName="bcc" placeholder="bcc1@domain.com, bcc2@domain.com" />\r
                  </td>\r
                  <td class="text-center">\r
                    <button type="button" class="btn btn-link btn-sm text-danger p-0"\r
                            (click)="removeSupervisi($index)"\r
                            [disabled]="supervisiArray.length === 1">\r
                      - Hapus\r
                    </button>\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
        <button type="button" class="btn btn-link btn-sm text-primary p-0 mb-4"\r
                (click)="addSupervisi()">\r
          <i class="bx bx-plus"></i> + Tambah\r
        </button>\r
\r
        <!-- BCC Global -->\r
        <div class="row g-3">\r
          <div class="col-12">\r
            <label class="form-label fw-semibold">BCC Laporan Ke</label>\r
            <div class="alert py-2 px-3 mb-2" style="background:#f9fafb;border:1px solid #e5e7eb;color:#374151;font-size:.85rem">\r
              <i class="bx bx-info-circle me-1"></i>\r
              BCC ini akan digunakan jika kolom bcc pada tabel di atas tidak terisi.\r
            </div>\r
            <input type="text" class="form-control" formControlName="bccGlobal"\r
                   placeholder="Pisahkan email dengan koma jika lebih dari satu" />\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- \u2464 Pembatasan Presensi -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-time me-2"></i>Pembatasan Presensi</div>\r
      <div class="card-body">\r
\r
        <!-- # Presensi Masuk -->\r
        <p class="fw-semibold text-primary mb-2"># Presensi Masuk</p>\r
        <hr class="mt-0 mb-3">\r
        <div class="row g-3 mb-3">\r
          <div class="col-md-4">\r
            <div class="input-group">\r
              <input type="number" class="form-control" formControlName="menitSebelumMasuk" min="0" />\r
              <span class="input-group-text">Menit Sebelum Jadwal Masuk</span>\r
            </div>\r
          </div>\r
          <div class="col-md-4">\r
            <div class="input-group">\r
              <input type="number" class="form-control" formControlName="menitSetelahMasuk" min="0" />\r
              <span class="input-group-text">Menit Setelah Jadwal Masuk</span>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="d-flex flex-column gap-2 mb-4">\r
          <div class="form-check">\r
            <input class="form-check-input" type="checkbox" id="cegahKalender"\r
                   formControlName="cegahPresensiKalenderLibur" />\r
            <label class="form-check-label" for="cegahKalender">\r
              Cegah presensi masuk pada kalender libur\r
            </label>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="checkbox" id="cegahJadwal"\r
                   formControlName="cegahPresensiJadwalLibur" />\r
            <label class="form-check-label" for="cegahJadwal">\r
              Cegah presensi masuk pada jadwal libur\r
            </label>\r
          </div>\r
        </div>\r
\r
        <!-- # Presensi Keluar -->\r
        <p class="fw-semibold text-primary mb-2"># Presensi Keluar</p>\r
        <hr class="mt-0 mb-3">\r
        <div class="row g-3 mb-4">\r
          <div class="col-md-4">\r
            <div class="input-group">\r
              <input type="number" class="form-control" formControlName="menitSetelahJadwalKeluar" min="0" />\r
              <span class="input-group-text">Menit Setelah Jadwal Keluar</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- # Presensi Lembur -->\r
        <p class="fw-semibold text-primary mb-2"># Presensi Lembur</p>\r
        <hr class="mt-0 mb-3">\r
        <div class="form-check">\r
          <input class="form-check-input" type="checkbox" id="cegahLembur"\r
                 formControlName="cegahPresensiLemburTanpaJadwal" />\r
          <label class="form-check-label" for="cegahLembur">\r
            Cegah presensi lembur tanpa jadwal\r
          </label>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- \u2465 Fitur On/Off -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-toggle-left me-2"></i>Fitur</div>\r
      <div class="card-body">\r
        <div class="row g-3">\r
          @for (item of [\r
            {key:'validasiPerangkat',      label:'Validasi Perangkat'},\r
            {key:'presensiKeluarOtomatis', label:'Presensi Keluar Otomatis'},\r
            {key:'dendaTerlambatKeluar',   label:'Denda Terlambat Presensi Keluar'},\r
            {key:'kunjunganKlien',         label:'Kunjungan Klien'}\r
          ]; track item.key) {\r
            <div class="col-md-3 col-sm-6">\r
              <div class="form-check form-switch">\r
                <input class="form-check-input" type="checkbox" [formControlName]="item.key" [id]="item.key+'_sw'" />\r
                <label class="form-check-label" [for]="item.key+'_sw'">{{ item.label }}</label>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2466 Cuti -->\r
    <div class="card mb-3">\r
      <div class="card-header fw-semibold"><i class="bx bx-calendar me-2"></i>Pengaturan Cuti</div>\r
      <div class="card-body">\r
        <div class="row g-3">\r
          <div class="col-md-4">\r
            <label class="form-label">Minimal Hari Sebelum Cuti</label>\r
            <input type="number" class="form-control" formControlName="minimalHariSebelumCuti" min="0" />\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label">Maks. Hari Per Request</label>\r
            <input type="number" class="form-control" formControlName="maksHariPerRequest" min="0" />\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label">Maks. Request Per Bulan</label>\r
            <input type="number" class="form-control" formControlName="maksRequestPerBulan" min="0" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Actions -->\r
    <div class="d-flex justify-content-end gap-2 mb-4">\r
      <button type="button" class="btn btn-secondary px-4" (click)="batal()">\r
        <i class="bx bx-x me-1"></i> Batal\r
      </button>\r
      <button type="submit" class="btn btn-primary px-4" [disabled]="saving()">\r
        @if (saving()) {\r
          <span class="spinner-border spinner-border-sm me-1"></span> Menyimpan...\r
        } @else {\r
          <i class="bx bx-save me-1"></i> {{ isEdit ? 'Perbarui' : 'Simpan' }}\r
        }\r
      </button>\r
    </div>\r
\r
  </form>\r
  }\r
\r
  <!-- \u2550\u2550 MODAL POLA KERJA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showModal()) {\r
  <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
    <div class="modal-dialog modal-xl modal-dialog-scrollable">\r
      <div class="modal-content">\r
\r
        <!-- Header -->\r
        <div class="modal-header">\r
          <h5 class="modal-title">\r
            <i class="bx me-2" [class.bx-plus]="!editPolaKerjaId()" [class.bx-edit]="editPolaKerjaId()"></i>\r
            {{ editPolaKerjaId() ? 'Edit Pola Kerja' : 'Tambah Pola Kerja' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeModal()"></button>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="modal-body">\r
          @if (modalError()) {\r
            <div class="alert alert-danger py-2">{{ modalError() }}</div>\r
          }\r
\r
          <div class="row g-3 mb-4">\r
            <!-- Nama Pola Kerja -->\r
            <div class="col-md-6">\r
              <label class="form-label">Nama Pola Kerja <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control" [(ngModel)]="modalData.namaPolaKerja"\r
                     [ngModelOptions]="{standalone: true}"\r
                     placeholder="cth. Shift Pagi" />\r
            </div>\r
            <!-- Toleransi \u2014 hanya untuk JAM_TETAP -->\r
            @if (modalData.jenisJadwal === 'JAM_TETAP') {\r
            <div class="col-md-3">\r
              <label class="form-label">Toleransi Keterlambatan</label>\r
              <div class="input-group">\r
                <input type="number" class="form-control" [(ngModel)]="modalData.toleransiKeterlambatan"\r
                       [ngModelOptions]="{standalone: true}" min="0" />\r
                <span class="input-group-text">Menit</span>\r
              </div>\r
            </div>\r
            }\r
          </div>\r
\r
          <!-- Jadwal Kerja toggle -->\r
          <div class="mb-4">\r
            <label class="form-label fw-semibold">Jadwal Kerja <span class="text-danger">*</span>\r
              <i class="bx bx-help-circle ms-1 text-muted" title="Pilih salah satu jenis jadwal"></i>\r
            </label>\r
            <div class="d-flex gap-2 mb-1">\r
              <button type="button"\r
                      class="btn btn-sm px-4"\r
                      [class.btn-primary]="modalData.jenisJadwal === 'JAM_TETAP'"\r
                      [class.btn-outline-secondary]="modalData.jenisJadwal !== 'JAM_TETAP'"\r
                      (click)="onJadwalChange('JAM_TETAP')">\r
                Jadwal Jam Tetap\r
              </button>\r
              <button type="button"\r
                      class="btn btn-sm px-4"\r
                      [class.btn-primary]="modalData.jenisJadwal === 'JAM_FLEKSIBEL'"\r
                      [class.btn-outline-secondary]="modalData.jenisJadwal !== 'JAM_FLEKSIBEL'"\r
                      (click)="onJadwalChange('JAM_FLEKSIBEL')">\r
                Jadwal Jam Fleksibel\r
              </button>\r
            </div>\r
            <small class="text-danger">*Hanya bisa pilih salah satu jadwal</small>\r
          </div>\r
\r
          <!-- Tabel 7 hari \u2014 JAM TETAP -->\r
          @if (modalData.jenisJadwal === 'JAM_TETAP') {\r
          <div class="table-responsive">\r
            <table class="table table-bordered align-middle">\r
              <thead class="table-light">\r
                <tr>\r
                  <th style="width:100px">Hari</th>\r
                  <th style="width:140px">Pola Kerja</th>\r
                  <th>Jam Masuk</th>\r
                  <th>Jam Keluar</th>\r
                  <th>Mulai Istirahat</th>\r
                  <th>Selesai Istirahat</th>\r
                  <th style="width:130px">Maks. Menit Istirahat</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (hari of modalData.hariList; track hari.hari) {\r
                  <tr [class.table-secondary]="hari.polaHari === 'LIBUR'">\r
                    <td class="fw-semibold">{{ hariLabels[hari.hari] }}</td>\r
                    <td>\r
                      <select class="form-select form-select-sm" [(ngModel)]="hari.polaHari"\r
                              [ngModelOptions]="{standalone: true}">\r
                        <option value="HARI_KERJA">Hari Kerja</option>\r
                        <option value="LIBUR">Libur</option>\r
                      </select>\r
                    </td>\r
                    <td>\r
                      <input type="time" class="form-control form-control-sm"\r
                             [(ngModel)]="hari.jamMasuk"\r
                             [ngModelOptions]="{standalone: true}"\r
                             [disabled]="hari.polaHari === 'LIBUR'" />\r
                    </td>\r
                    <td>\r
                      <input type="time" class="form-control form-control-sm"\r
                             [(ngModel)]="hari.jamKeluar"\r
                             [ngModelOptions]="{standalone: true}"\r
                             [disabled]="hari.polaHari === 'LIBUR'" />\r
                    </td>\r
                    <td>\r
                      <input type="time" class="form-control form-control-sm"\r
                             [(ngModel)]="hari.mulaiIstirahat"\r
                             [ngModelOptions]="{standalone: true}"\r
                             [disabled]="hari.polaHari === 'LIBUR'" />\r
                    </td>\r
                    <td>\r
                      <input type="time" class="form-control form-control-sm"\r
                             [(ngModel)]="hari.selesaiIstirahat"\r
                             [ngModelOptions]="{standalone: true}"\r
                             [disabled]="hari.polaHari === 'LIBUR'" />\r
                    </td>\r
                    <td>\r
                      <input type="number" class="form-control form-control-sm text-center"\r
                             [(ngModel)]="hari.maksMenitIstirahat"\r
                             [ngModelOptions]="{standalone: true}" min="0"\r
                             [disabled]="hari.polaHari === 'LIBUR'" />\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
          }\r
\r
          <!-- Tabel 7 hari \u2014 JAM FLEKSIBEL -->\r
          @if (modalData.jenisJadwal === 'JAM_FLEKSIBEL') {\r
          <div class="alert py-2 px-3 mb-3" style="background:#f3f0ff;border:1px solid #c4b5fd;color:#5b21b6;font-size:.85rem">\r
            <i class="bx bx-info-circle me-1"></i>\r
            Jadwal jam fleksibel tidak memiliki jam masuk/keluar tetap. Karyawan dapat masuk dan keluar kapan saja pada hari kerja yang ditentukan.\r
          </div>\r
          <div class="table-responsive">\r
            <table class="table table-bordered align-middle">\r
              <thead class="table-light">\r
                <tr>\r
                  <th style="width:140px">Hari</th>\r
                  <th>Pola Kerja</th>\r
                  <th style="width:200px">Total Jam Kerja Dibutuhkan</th>\r
                  <th style="width:180px">Maks. Menit Istirahat</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (hari of modalData.hariList; track hari.hari) {\r
                  <tr [class.table-secondary]="hari.polaHari === 'LIBUR'">\r
                    <td class="fw-semibold">{{ hariLabels[hari.hari] }}</td>\r
                    <td>\r
                      <div class="d-flex gap-3">\r
                        <div class="form-check">\r
                          <input class="form-check-input" type="radio"\r
                                 [id]="'hk_' + hari.hari"\r
                                 [(ngModel)]="hari.polaHari"\r
                                 [ngModelOptions]="{standalone: true}"\r
                                 value="HARI_KERJA" />\r
                          <label class="form-check-label" [for]="'hk_' + hari.hari">Hari Kerja</label>\r
                        </div>\r
                        <div class="form-check">\r
                          <input class="form-check-input" type="radio"\r
                                 [id]="'lb_' + hari.hari"\r
                                 [(ngModel)]="hari.polaHari"\r
                                 [ngModelOptions]="{standalone: true}"\r
                                 value="LIBUR" />\r
                          <label class="form-check-label" [for]="'lb_' + hari.hari">Libur</label>\r
                        </div>\r
                      </div>\r
                    </td>\r
                    <td>\r
                      <div class="input-group input-group-sm">\r
                        <input type="number" class="form-control text-center"\r
                               [(ngModel)]="hari.totalJamKerjaDibutuhkan"\r
                               [ngModelOptions]="{standalone: true}" min="0"\r
                               [disabled]="hari.polaHari === 'LIBUR'"\r
                               placeholder="jam" />\r
                        <span class="input-group-text">jam</span>\r
                      </div>\r
                    </td>\r
                    <td>\r
                      <div class="input-group input-group-sm">\r
                        <input type="number" class="form-control text-center"\r
                               [(ngModel)]="hari.maksMenitIstirahat"\r
                               [ngModelOptions]="{standalone: true}" min="0"\r
                               [disabled]="hari.polaHari === 'LIBUR'" />\r
                        <span class="input-group-text">menit</span>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
          }\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary btn-sm px-4" (click)="closeModal()">\r
            <i class="bx bx-x me-1"></i> Tutup\r
          </button>\r
          <button type="button" class="btn btn-primary btn-sm px-4"\r
                  (click)="savePolaKerja()" [disabled]="modalSaving()">\r
            @if (modalSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span> Menyimpan...\r
            } @else {\r
              <i class="bx bx-save me-1"></i> Simpan\r
            }\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
  }\r
\r
  <!-- \u2550\u2550 Modal: Tambah dari Pola yang Ada (mode EDIT) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showAssignModal()) {\r
  <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
    <div class="modal-dialog modal-lg modal-dialog-scrollable">\r
      <div class="modal-content">\r
\r
        <div class="modal-header">\r
          <h5 class="modal-title"><i class="bx bx-link-alt me-2"></i>Tambah dari Pola yang Ada</h5>\r
          <button type="button" class="btn-close" (click)="closeAssignModal()"></button>\r
        </div>\r
\r
        <div class="modal-body">\r
          <div class="input-group input-group-sm mb-3">\r
            <span class="input-group-text"><i class="bx bx-search"></i></span>\r
            <input type="text" class="form-control" placeholder="Cari nama pola kerja..."\r
                   [ngModel]="assignSearchQuery()"\r
                   [ngModelOptions]="{standalone: true}"\r
                   (ngModelChange)="assignSearchQuery.set($event)" />\r
          </div>\r
\r
          @if (allPolaLoading()) {\r
            <div class="text-center py-4 text-muted">\r
              <span class="spinner-border spinner-border-sm me-2"></span> Memuat data...\r
            </div>\r
          } @else if (polaKerjaBelumAssigned.length === 0) {\r
            <div class="text-center py-4 text-muted">\r
              <i class="bx bx-check-circle" style="font-size:2rem;color:#28a745"></i>\r
              <p class="mt-2 mb-0 small">\r
                @if (assignSearchQuery()) {\r
                  Tidak ada pola yang cocok dengan pencarian.\r
                } @else {\r
                  Semua pola kerja yang tersedia sudah terhubung ke divisi ini.\r
                }\r
              </p>\r
            </div>\r
          } @else {\r
            <p class="text-muted small mb-2">\r
              <i class="bx bx-info-circle me-1"></i>\r
              Klik <strong>Hubungkan</strong> untuk menambahkan pola ke divisi ini.\r
            </p>\r
            <div class="table-responsive">\r
              <table class="table table-hover align-middle mb-0">\r
                <thead class="table-light">\r
                  <tr>\r
                    <th>Nama Pola Kerja</th>\r
                    <th>Jenis Jadwal</th>\r
                    <th>Toleransi</th>\r
                    <th></th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @for (pk of polaKerjaBelumAssigned; track pk.id) {\r
                    <tr>\r
                      <td class="fw-semibold">{{ pk.namaPolaKerja }}</td>\r
                      <td>\r
                        <span class="badge"\r
                              [class.bg-primary]="pk.jenisJadwal === 'JAM_TETAP'"\r
                              [class.bg-info]="pk.jenisJadwal === 'JAM_FLEKSIBEL'">\r
                          {{ pk.jenisJadwal === 'JAM_TETAP' ? 'Jam Tetap' : 'Jam Fleksibel' }}\r
                        </span>\r
                      </td>\r
                      <td>{{ pk.toleransiKeterlambatan }} menit</td>\r
                      <td>\r
                        <button type="button" class="btn btn-primary btn-sm"\r
                                [disabled]="assignSaving()"\r
                                (click)="assignPolaKerja(pk)">\r
                          <i class="bx bx-link-alt me-1"></i> Hubungkan\r
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
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary btn-sm px-4" (click)="closeAssignModal()">\r
            <i class="bx bx-x me-1"></i> Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
  }\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DivisiFormComponent, { className: "DivisiFormComponent", filePath: "src/app/features/divisi/divisi-form/divisi-form.component.ts", lineNumber: 26 });
})();
export {
  DivisiFormComponent
};
//# sourceMappingURL=chunk-EZPGSU3Z.js.map
