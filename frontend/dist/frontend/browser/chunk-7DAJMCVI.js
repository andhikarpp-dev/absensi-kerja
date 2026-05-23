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
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  ChangeDetectorRef,
  Component,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunctionV,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/divisi/divisi-list/divisi-list.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = (a0) => ["/divisi", a0, "edit"];
var _c2 = () => ({ key: "catatanMasuk", label: "Catatan Saat Presensi Masuk" });
var _c3 = () => ({ key: "catatanKeluar", label: "Catatan Saat Presensi Keluar" });
var _c4 = () => ({ key: "catatanMulaiLembur", label: "Catatan Saat Mulai Lembur" });
var _c5 = () => ({ key: "catatanSelesaiLembur", label: "Catatan Saat Selesai Lembur" });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c7 = () => ({ key: "lokasiMasuk", label: "Masuk" });
var _c8 = () => ({ key: "lokasiIstirahat", label: "Istirahat" });
var _c9 = () => ({ key: "lokasiSelesaiIstirahat", label: "Selesai Istirahat" });
var _c10 = () => ({ key: "lokasiKeluar", label: "Keluar" });
var _c11 = () => ({ key: "lokasiLembur", label: "Lembur" });
var _c12 = () => ({ key: "lokasiSelesaiLembur", label: "Selesai Lembur" });
var _c13 = () => ({ key: "lokasiPertamaKali", label: "Presensi Pertama Kali" });
var _c14 = () => ({ key: "lokasiDiLuar", label: "Di Luar Lokasi" });
var _c15 = () => ({ key: "lokasiPerangkatBerbeda", label: "Perangkat Berbeda" });
var _c16 = () => ({ key: "lokasiFotoSelfieBermasalah", label: "Foto Selfie Bermasalah" });
var _c17 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9];
var _c18 = () => ({ key: "cegahPresensiKalenderLibur", id: "massalCegahKalender", label: "Cegah saat Kalender Libur" });
var _c19 = () => ({ key: "cegahPresensiJadwalLibur", id: "massalCegahJadwal", label: "Cegah saat Jadwal Libur" });
var _c20 = () => ({ key: "cegahPresensiLemburTanpaJadwal", id: "massalCegahLembur", label: "Cegah Lembur Tanpa Jadwal" });
var _c21 = (a0, a1, a2) => [a0, a1, a2];
var _c22 = () => ({ key: "validasiPerangkat", id: "massalValidasi", label: "Validasi Perangkat" });
var _c23 = () => ({ key: "presensiKeluarOtomatis", id: "massalKeluarOtomatis", label: "Presensi Keluar Otomatis" });
var _c24 = () => ({ key: "dendaTerlambatKeluar", id: "massalDendaTelat", label: "Denda Terlambat Keluar" });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.baris;
var _forTrack2 = ($index, $item) => $item.key;
function DivisiListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_29_Template_button_click_3_listener() {
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
function DivisiListComponent_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275elementEnd();
  }
}
function DivisiListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, DivisiListComponent_Conditional_32_For_2_Template, 2, 0, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DivisiListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementStart(2, "p", 34);
    \u0275\u0275text(3, "Belum ada data divisi.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 35);
    \u0275\u0275text(5, "Tambah Sekarang");
    \u0275\u0275elementEnd()();
  }
}
function DivisiListComponent_Conditional_34_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "a", 43);
    \u0275\u0275element(15, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 45);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_34_For_18_Template_button_click_16_listener() {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRiwayat(d_r4));
    });
    \u0275\u0275element(17, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 47);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_34_For_18_Template_button_click_18_listener() {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(d_r4.id));
    });
    \u0275\u0275element(19, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const \u0275$index_112_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_112_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.namaDivisi);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.sistemKerjaLabel(d_r4.sistemKerja));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-danger", d_r4.dendaKeterlambatan)("bg-secondary", !d_r4.dendaKeterlambatan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r4.dendaKeterlambatan ? "Ya" : "Tidak", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.supervisorNama || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, d_r4.id));
  }
}
function DivisiListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 36)(2, "thead", 37)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Sistem Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Denda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Supervisor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, DivisiListComponent_Conditional_34_For_18_Template, 20, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.list());
  }
}
function DivisiListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 49)(2, "div", 50)(3, "div", 51)(4, "h5", 52);
    \u0275\u0275element(5, "i", 53);
    \u0275\u0275text(6, "Hapus Divisi?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8, "Data yang dihapus tidak dapat dikembalikan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55)(10, "button", 56);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_35_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 57);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_35_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275text(13, "Ya, Hapus");
    \u0275\u0275elementEnd()()()()();
  }
}
function DivisiListComponent_Conditional_36_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.imporError(), " ");
  }
}
function DivisiListComponent_Conditional_36_Conditional_28_Conditional_6_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 81);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.baris);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.namaDivisi || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.namaKaryawan || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.pesan);
  }
}
function DivisiListComponent_Conditional_36_Conditional_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 80)(2, "thead", 37)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Baris");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Pesan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, DivisiListComponent_Conditional_36_Conditional_28_Conditional_6_For_14_Template, 9, 4, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hasil_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(hasil_r9.errors);
  }
}
function DivisiListComponent_Conditional_36_Conditional_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2, " Semua data berhasil diimpor! ");
    \u0275\u0275elementEnd();
  }
}
function DivisiListComponent_Conditional_36_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 76)(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, DivisiListComponent_Conditional_36_Conditional_28_Conditional_6_Template, 15, 0, "div", 25)(7, DivisiListComponent_Conditional_36_Conditional_28_Conditional_7_Template, 3, 0, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hasil_r9 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Berhasil: ", hasil_r9.berhasil);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Gagal: ", hasil_r9.gagal);
    \u0275\u0275advance();
    \u0275\u0275conditional(hasil_r9.errors.length > 0 ? 6 : 7);
  }
}
function DivisiListComponent_Conditional_36_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 72);
  }
}
function DivisiListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 58)(2, "div", 50)(3, "div", 59)(4, "h5", 60);
    \u0275\u0275element(5, "i", 61);
    \u0275\u0275text(6, "Impor Supervisor Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImporModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 63)(9, "p", 64);
    \u0275\u0275text(10, " Upload file ");
    \u0275\u0275elementStart(11, "code");
    \u0275\u0275text(12, ".xlsx");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " dengan kolom ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "Nama Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " dan ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "Nama Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, ". ");
    \u0275\u0275elementStart(20, "a", 65);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_36_Template_a_click_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(21, "i", 66);
    \u0275\u0275text(22, "Download template ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 67)(24, "label", 68);
    \u0275\u0275text(25, "File Excel (.xlsx)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 69);
    \u0275\u0275listener("change", function DivisiListComponent_Conditional_36_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, DivisiListComponent_Conditional_36_Conditional_27_Template, 3, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, DivisiListComponent_Conditional_36_Conditional_28_Template, 8, 3, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 55);
    \u0275\u0275conditionalCreate(30, DivisiListComponent_Conditional_36_Conditional_30_Template, 1, 0, "span", 72);
    \u0275\u0275elementStart(31, "button", 73);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_36_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prosesImpor());
    });
    \u0275\u0275text(32, " Proses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 74);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_36_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImporModal());
    });
    \u0275\u0275text(34, " Tutup ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.imporLoading());
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx_r1.imporLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imporError() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.imporHasil()) ? 28 : -1, tmp_4_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.imporLoading() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.imporLoading() || !ctx_r1.imporFile());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.imporLoading());
  }
}
function DivisiListComponent_Conditional_37_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.aksiMassalError());
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_For_16_Template_div_click_0_listener() {
      const d_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAksiDivisi(d_r13.id));
    });
    \u0275\u0275elementStart(1, "input", 131);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_For_16_Template_input_click_1_listener($event) {
      const d_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleAksiDivisi(d_r13.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.isAksiDivisiSelected(d_r13.id) ? "#f5f3ff" : "transparent");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isAksiDivisiSelected(d_r13.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r13.namaDivisi);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", d_r13.sistemKerja === "SHIFT" ? "#dbeafe" : "#dcfce7")("color", d_r13.sistemKerja === "SHIFT" ? "#1d4ed8" : "#15803d");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.sistemKerjaLabel(d_r13.sistemKerja), " ");
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 134)(2, "label", 135);
    \u0275\u0275text(3, "Sistem Kerja ");
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "select", 136);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.sistemKerja, $event) || (ctx_r1.aksiForm.sistemKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 137);
    \u0275\u0275text(8, "Hari Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 138);
    \u0275\u0275text(10, "Shift");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 134)(12, "label", 135);
    \u0275\u0275text(13, "Denda Keterlambatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 139)(15, "div", 140);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aksiForm.dendaKeterlambatan = true);
    });
    \u0275\u0275elementStart(16, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.dendaKeterlambatan, $event) || (ctx_r1.aksiForm.dendaKeterlambatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 142);
    \u0275\u0275text(18, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 140);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aksiForm.dendaKeterlambatan = false);
    });
    \u0275\u0275elementStart(20, "input", 143);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.dendaKeterlambatan, $event) || (ctx_r1.aksiForm.dendaKeterlambatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 144);
    \u0275\u0275text(22, "Tidak");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 134)(24, "label", 135);
    \u0275\u0275text(25, "Denda Terlambat Presensi Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 139)(27, "div", 140);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_div_click_27_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aksiForm.dendaTerlambatKeluar = true);
    });
    \u0275\u0275elementStart(28, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.dendaTerlambatKeluar, $event) || (ctx_r1.aksiForm.dendaTerlambatKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 146);
    \u0275\u0275text(30, "Ya");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 140);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aksiForm.dendaTerlambatKeluar = false);
    });
    \u0275\u0275elementStart(32, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.dendaTerlambatKeluar, $event) || (ctx_r1.aksiForm.dendaTerlambatKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 148);
    \u0275\u0275text(34, "Tidak");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.sistemKerja);
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("background", ctx_r1.aksiForm.dendaKeterlambatan === true ? "#fef2f2" : "#f9fafb")("border-color", ctx_r1.aksiForm.dendaKeterlambatan === true ? "#fca5a5 !important" : "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.dendaKeterlambatan);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.aksiForm.dendaKeterlambatan === false ? "#f0fdf4" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.dendaKeterlambatan);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("background", ctx_r1.aksiForm.dendaTerlambatKeluar === true ? "#fef2f2" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.dendaTerlambatKeluar);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.aksiForm.dendaTerlambatKeluar === false ? "#f0fdf4" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.dendaTerlambatKeluar);
    \u0275\u0275property("value", false);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "label", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 136);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_24_For_2_Template_select_ngModelChange_3_listener($event) {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm[item_r16.key], $event) || (ctx_r1.aksiForm[item_r16.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 149);
    \u0275\u0275text(5, "Tidak Dibutuhkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 150);
    \u0275\u0275text(7, "Optional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 151);
    \u0275\u0275text(9, "Dibutuhkan");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r16.label);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm[item_r16.key]);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275repeaterCreate(1, DivisiListComponent_Conditional_37_Conditional_50_Conditional_24_For_2_Template, 10, 2, "div", 134, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction4(4, _c6, \u0275\u0275pureFunction0(0, _c2), \u0275\u0275pureFunction0(1, _c3), \u0275\u0275pureFunction0(2, _c4), \u0275\u0275pureFunction0(3, _c5)));
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_For_2_Template_div_click_1_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.aksiForm[item_r18.key] = !ctx_r1.aksiForm[item_r18.key]);
    });
    \u0275\u0275elementStart(2, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_For_2_Template_input_ngModelChange_2_listener($event) {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm[item_r18.key], $event) || (ctx_r1.aksiForm[item_r18.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_For_2_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.aksiForm[item_r18.key] ? "#f5f3ff" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275property("id", "m_" + item_r18.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm[item_r18.key]);
    \u0275\u0275advance();
    \u0275\u0275property("for", "m_" + item_r18.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.label);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275repeaterCreate(1, DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_For_2_Template, 5, 6, "div", 152, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunctionV(10, _c17, [\u0275\u0275pureFunction0(0, _c7), \u0275\u0275pureFunction0(1, _c8), \u0275\u0275pureFunction0(2, _c9), \u0275\u0275pureFunction0(3, _c10), \u0275\u0275pureFunction0(4, _c11), \u0275\u0275pureFunction0(5, _c12), \u0275\u0275pureFunction0(6, _c13), \u0275\u0275pureFunction0(7, _c14), \u0275\u0275pureFunction0(8, _c15), \u0275\u0275pureFunction0(9, _c16)]));
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 156)(2, "label", 135);
    \u0275\u0275text(3, "BCC Laporan Ke");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_26_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.bccGlobal, $event) || (ctx_r1.aksiForm.bccGlobal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 38);
    \u0275\u0275text(6, "Pisahkan beberapa email dengan koma (,)");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.bccGlobal);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_27_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 159);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r21 = ctx.$implicit;
    \u0275\u0275property("ngValue", k_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", k_r21.namaLengkap, " (", k_r21.nip, ")");
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 158)(2, "label", 135);
    \u0275\u0275text(3, "Supervisor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 136);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_27_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.supervisorId, $event) || (ctx_r1.aksiForm.supervisorId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 159);
    \u0275\u0275text(6, "-- Hapus Supervisor --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, DivisiListComponent_Conditional_37_Conditional_50_Conditional_27_For_8_Template, 2, 3, "option", 159, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.supervisorId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.karyawanList());
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 162);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_For_16_Template_div_click_1_listener() {
      const item_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.aksiForm[item_r24.key] = !ctx_r1.aksiForm[item_r24.key]);
    });
    \u0275\u0275elementStart(2, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_For_16_Template_input_ngModelChange_2_listener($event) {
      const item_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm[item_r24.key], $event) || (ctx_r1.aksiForm[item_r24.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_For_16_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.aksiForm[item_r24.key] ? "#f5f3ff" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275property("id", item_r24.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm[item_r24.key]);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r24.label);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 160)(2, "label", 135);
    \u0275\u0275text(3, "Menit Sebelum Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.menitSebelumMasuk, $event) || (ctx_r1.aksiForm.menitSebelumMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 160)(6, "label", 135);
    \u0275\u0275text(7, "Menit Setelah Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.menitSetelahMasuk, $event) || (ctx_r1.aksiForm.menitSetelahMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 160)(10, "label", 135);
    \u0275\u0275text(11, "Menit Setelah Jadwal Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.menitSetelahJadwalKeluar, $event) || (ctx_r1.aksiForm.menitSetelahJadwalKeluar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 156)(14, "div", 128);
    \u0275\u0275repeaterCreate(15, DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_For_16_Template, 5, 6, "div", 160, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.menitSebelumMasuk);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.menitSetelahMasuk);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.menitSetelahJadwalKeluar);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction3(6, _c21, \u0275\u0275pureFunction0(3, _c18), \u0275\u0275pureFunction0(4, _c19), \u0275\u0275pureFunction0(5, _c20)));
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 162);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_For_2_Template_div_click_1_listener() {
      const item_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.aksiForm[item_r26.key] = !ctx_r1.aksiForm[item_r26.key]);
    });
    \u0275\u0275elementStart(2, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_For_2_Template_input_ngModelChange_2_listener($event) {
      const item_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm[item_r26.key], $event) || (ctx_r1.aksiForm[item_r26.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_For_2_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.aksiForm[item_r26.key] ? "#f5f3ff" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275property("id", item_r26.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm[item_r26.key]);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r26.label);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275repeaterCreate(1, DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_For_2_Template, 5, 6, "div", 160, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction3(3, _c21, \u0275\u0275pureFunction0(0, _c22), \u0275\u0275pureFunction0(1, _c23), \u0275\u0275pureFunction0(2, _c24)));
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 160)(2, "div", 162);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_30_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aksiForm.kunjunganKlien = !ctx_r1.aksiForm.kunjunganKlien);
    });
    \u0275\u0275elementStart(3, "input", 163);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_30_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.kunjunganKlien, $event) || (ctx_r1.aksiForm.kunjunganKlien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_30_Template_input_click_3_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 164);
    \u0275\u0275text(5, "Aktifkan Kunjungan Klien");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.aksiForm.kunjunganKlien ? "#f5f3ff" : "#f9fafb");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.kunjunganKlien);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 160)(2, "label", 135);
    \u0275\u0275text(3, "Min. Hari Sebelum Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_31_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.minimalHariSebelumCuti, $event) || (ctx_r1.aksiForm.minimalHariSebelumCuti = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 160)(6, "label", 135);
    \u0275\u0275text(7, "Maks. Hari per Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_31_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.maksHariPerRequest, $event) || (ctx_r1.aksiForm.maksHariPerRequest = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 160)(10, "label", 135);
    \u0275\u0275text(11, "Maks. Request per Bulan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Conditional_50_Conditional_31_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.aksiForm.maksRequestPerBulan, $event) || (ctx_r1.aksiForm.maksRequestPerBulan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.minimalHariSebelumCuti);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.maksHariPerRequest);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aksiForm.maksRequestPerBulan);
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Pengaturan supervisi harus diatur per divisi melalui halaman edit masing-masing divisi.");
    \u0275\u0275elementEnd()();
  }
}
function DivisiListComponent_Conditional_37_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119)(2, "div", 120)(3, "span", 96);
    \u0275\u0275text(4, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 97);
    \u0275\u0275text(6, "Target Divisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 120)(8, "span", 121);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 122);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pilihSemuaDivisi());
    });
    \u0275\u0275text(11, " Pilih Semua ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 123);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_50_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.batalSemuaDivisi());
    });
    \u0275\u0275text(13, " Reset ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 124);
    \u0275\u0275repeaterCreate(15, DivisiListComponent_Conditional_37_Conditional_50_For_16_Template, 6, 9, "div", 125, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 126)(18, "div", 95)(19, "span", 96);
    \u0275\u0275text(20, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h6", 97);
    \u0275\u0275text(22, "Pengaturan");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, DivisiListComponent_Conditional_37_Conditional_50_Conditional_23_Template, 35, 19, "div", 127);
    \u0275\u0275conditionalCreate(24, DivisiListComponent_Conditional_37_Conditional_50_Conditional_24_Template, 3, 9, "div", 127);
    \u0275\u0275conditionalCreate(25, DivisiListComponent_Conditional_37_Conditional_50_Conditional_25_Template, 3, 21, "div", 128);
    \u0275\u0275conditionalCreate(26, DivisiListComponent_Conditional_37_Conditional_50_Conditional_26_Template, 7, 1, "div", 127);
    \u0275\u0275conditionalCreate(27, DivisiListComponent_Conditional_37_Conditional_50_Conditional_27_Template, 9, 2, "div", 127);
    \u0275\u0275conditionalCreate(28, DivisiListComponent_Conditional_37_Conditional_50_Conditional_28_Template, 17, 10, "div", 127);
    \u0275\u0275conditionalCreate(29, DivisiListComponent_Conditional_37_Conditional_50_Conditional_29_Template, 3, 7, "div", 128);
    \u0275\u0275conditionalCreate(30, DivisiListComponent_Conditional_37_Conditional_50_Conditional_30_Template, 6, 3, "div", 128);
    \u0275\u0275conditionalCreate(31, DivisiListComponent_Conditional_37_Conditional_50_Conditional_31_Template, 13, 3, "div", 127);
    \u0275\u0275conditionalCreate(32, DivisiListComponent_Conditional_37_Conditional_50_Conditional_32_Template, 4, 0, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", ctx_r1.aksiSelectedDivisiIds().size, "/", ctx_r1.list().length, " dipilih ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.list());
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.selectedAksi === "sistem_kerja_denda" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "catatan_presensi" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "presensi_lokasi" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "email_notif" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "supervisor" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "pembatasan" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "validasi_perangkat" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "kunjungan_klien" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "cuti" ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedAksi === "supervisi" ? 32 : -1);
  }
}
function DivisiListComponent_Conditional_37_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 166);
    \u0275\u0275text(1, " Siap diterapkan ke ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " divisi ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.aksiSelectedDivisiIds().size);
  }
}
function DivisiListComponent_Conditional_37_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 167);
    \u0275\u0275text(1, "Pilih aksi dan target divisi ");
  }
}
function DivisiListComponent_Conditional_37_Conditional_58_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 169);
    \u0275\u0275text(1, "Menyimpan... ");
  }
}
function DivisiListComponent_Conditional_37_Conditional_58_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 170);
    \u0275\u0275text(1, "Simpan ");
  }
}
function DivisiListComponent_Conditional_37_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 168);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Conditional_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.terapkanAksiMassal());
    });
    \u0275\u0275conditionalCreate(1, DivisiListComponent_Conditional_37_Conditional_58_Conditional_1_Template, 2, 0)(2, DivisiListComponent_Conditional_37_Conditional_58_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.aksiMassalSaving() || ctx_r1.aksiSelectedDivisiIds().size === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aksiMassalSaving() ? 1 : 2);
  }
}
function DivisiListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 83)(2, "div", 84)(3, "div", 85)(4, "div", 86)(5, "div", 87);
    \u0275\u0275element(6, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h5", 89);
    \u0275\u0275text(9, "Aksi Massal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 90);
    \u0275\u0275text(11, "Terapkan perubahan ke banyak divisi sekaligus");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 91);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAksiMassalModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 92);
    \u0275\u0275conditionalCreate(14, DivisiListComponent_Conditional_37_Conditional_14_Template, 4, 1, "div", 93);
    \u0275\u0275elementStart(15, "div", 94)(16, "div", 95)(17, "span", 96);
    \u0275\u0275text(18, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h6", 97);
    \u0275\u0275text(20, "Pilih Aksi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 98)(22, "div", 99)(23, "label", 100);
    \u0275\u0275text(24, "Jenis aksi yang akan diterapkan ");
    \u0275\u0275elementStart(25, "span", 101);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 102);
    \u0275\u0275twoWayListener("ngModelChange", function DivisiListComponent_Conditional_37_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAksi, $event) || (ctx_r1.selectedAksi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DivisiListComponent_Conditional_37_Template_select_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAksiChange());
    });
    \u0275\u0275elementStart(28, "option", 103);
    \u0275\u0275text(29, "-- Pilih Aksi --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 104);
    \u0275\u0275text(31, "\u2699\uFE0F Sistem Kerja & Denda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 105);
    \u0275\u0275text(33, "\u{1F4DD} Catatan Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 106);
    \u0275\u0275text(35, "\u{1F4CD} Presensi Yang Harus Sesuai Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 107);
    \u0275\u0275text(37, "\u{1F4E7} Email Notif Review Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 108);
    \u0275\u0275text(39, "\u{1F464} Supervisor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 109);
    \u0275\u0275text(41, "\u{1F465} Supervisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 110);
    \u0275\u0275text(43, "\u{1F512} Pembatasan Presensi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 111);
    \u0275\u0275text(45, "\u{1F4F1} Validasi Perangkat & Keluar Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 112);
    \u0275\u0275text(47, "\u{1F91D} Pengaturan Kunjungan Klien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 113);
    \u0275\u0275text(49, "\u{1F3D6}\uFE0F Pengaturan Cuti");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(50, DivisiListComponent_Conditional_37_Conditional_50_Template, 33, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 114)(52, "span", 42);
    \u0275\u0275conditionalCreate(53, DivisiListComponent_Conditional_37_Conditional_53_Template, 5, 1)(54, DivisiListComponent_Conditional_37_Conditional_54_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 12)(56, "button", 115);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_37_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAksiMassalModal());
    });
    \u0275\u0275text(57, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(58, DivisiListComponent_Conditional_37_Conditional_58_Template, 3, 2, "button", 116);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.aksiMassalError() ? 14 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAksi);
    \u0275\u0275advance(23);
    \u0275\u0275conditional(ctx_r1.selectedAksi ? 50 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.aksiSelectedDivisiIds().size > 0 && ctx_r1.selectedAksi ? 53 : 54);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.aksiMassalSaving());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedAksi && ctx_r1.selectedAksi !== "supervisi" ? 58 : -1);
  }
}
function DivisiListComponent_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275element(1, "span", 181);
    \u0275\u0275elementStart(2, "p", 182);
    \u0275\u0275text(3, "Memuat riwayat...");
    \u0275\u0275elementEnd()();
  }
}
function DivisiListComponent_Conditional_38_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.riwayatError());
  }
}
function DivisiListComponent_Conditional_38_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 183);
    \u0275\u0275elementStart(2, "p", 184);
    \u0275\u0275text(3, "Belum ada riwayat perubahan.");
    \u0275\u0275elementEnd()();
  }
}
function DivisiListComponent_Conditional_38_Conditional_12_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1, "Tidak ada detail perubahan.");
    \u0275\u0275elementEnd();
  }
}
function DivisiListComponent_Conditional_38_Conditional_12_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 197);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", a_r31.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r31.nilai);
  }
}
function DivisiListComponent_Conditional_38_Conditional_12_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275repeaterCreate(1, DivisiListComponent_Conditional_38_Conditional_12_Conditional_22_For_2_Template, 5, 2, "div", 196, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.riwayatCurrentItem.aktivitas);
  }
}
function DivisiListComponent_Conditional_38_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 185)(2, "p", 186);
    \u0275\u0275text(3, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 187)(5, "div", 188);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 189);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 190);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 191);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 192)(15, "p", 186);
    \u0275\u0275text(16, "Aktivitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 193);
    \u0275\u0275text(18, " Divisi \xA0 ");
    \u0275\u0275elementStart(19, "span", 194);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, DivisiListComponent_Conditional_38_Conditional_12_Conditional_21_Template, 2, 0, "p", 42)(22, DivisiListComponent_Conditional_38_Conditional_12_Conditional_22_Template, 3, 0, "div", 195);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.riwayatCurrentItem.changedBy || "?").charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.riwayatCurrentItem.changedBy || "Sistem", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTanggal(ctx_r1.riwayatCurrentItem.changedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.tipeClass(ctx_r1.riwayatCurrentItem.tipe));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tipeLabel(ctx_r1.riwayatCurrentItem.tipe), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ID: ", ctx_r1.riwayatCurrentItem.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.riwayatCurrentItem.aktivitas.length ? 21 : 22);
  }
}
function DivisiListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 171)(2, "div", 50)(3, "div", 59)(4, "h5", 60);
    \u0275\u0275element(5, "i", 172);
    \u0275\u0275text(6, "Riwayat Perubahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 173);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRiwayat());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 92);
    \u0275\u0275conditionalCreate(9, DivisiListComponent_Conditional_38_Conditional_9_Template, 4, 0, "div", 174)(10, DivisiListComponent_Conditional_38_Conditional_10_Template, 2, 1, "div", 175)(11, DivisiListComponent_Conditional_38_Conditional_11_Template, 4, 0, "div", 24)(12, DivisiListComponent_Conditional_38_Conditional_12_Template, 23, 8, "div", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 177)(14, "span", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "button", 178);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_38_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.riwayatPrev());
    });
    \u0275\u0275element(18, "i", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 178);
    \u0275\u0275listener("click", function DivisiListComponent_Conditional_38_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.riwayatNext());
    });
    \u0275\u0275element(20, "i", 180);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.riwayatLoading() ? 9 : ctx_r1.riwayatError() ? 10 : ctx_r1.riwayatTotal === 0 ? 11 : ctx_r1.riwayatCurrentItem ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.riwayatTotal > 0 ? ctx_r1.riwayatPage() + 1 + " / " + ctx_r1.riwayatTotal + " riwayat" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.riwayatPage() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.riwayatPage() >= ctx_r1.riwayatTotal - 1);
  }
}
var DivisiListComponent = class _DivisiListComponent {
  constructor() {
    this.svc = inject(DivisiService);
    this.karyawanSvc = inject(KaryawanService);
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
    this.confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showImporModal = signal(false, ...ngDevMode ? [{ debugName: "showImporModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporFile = signal(null, ...ngDevMode ? [{ debugName: "imporFile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporLoading = signal(false, ...ngDevMode ? [{ debugName: "imporLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporError = signal("", ...ngDevMode ? [{ debugName: "imporError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imporHasil = signal(null, ...ngDevMode ? [{ debugName: "imporHasil" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showRiwayatModal = signal(false, ...ngDevMode ? [{ debugName: "showRiwayatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatLoading = signal(false, ...ngDevMode ? [{ debugName: "riwayatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatError = signal("", ...ngDevMode ? [{ debugName: "riwayatError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatList = signal([], ...ngDevMode ? [{ debugName: "riwayatList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatDivisiNama = signal("", ...ngDevMode ? [{ debugName: "riwayatDivisiNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPage = signal(0, ...ngDevMode ? [{ debugName: "riwayatPage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.PAGE_SIZE = 1;
    this.showAksiMassalModal = signal(false, ...ngDevMode ? [{ debugName: "showAksiMassalModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalSaving = signal(false, ...ngDevMode ? [{ debugName: "aksiMassalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiMassalError = signal("", ...ngDevMode ? [{ debugName: "aksiMassalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aksiSelectedDivisiIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "aksiSelectedDivisiIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedAksi = "";
    this.aksiForm = {};
    this.dtInstance = null;
  }
  get riwayatCurrentItem() {
    return this.riwayatList()[this.riwayatPage()] ?? null;
  }
  get riwayatTotal() {
    return this.riwayatList().length;
  }
  riwayatPrev() {
    if (this.riwayatPage() > 0)
      this.riwayatPage.set(this.riwayatPage() - 1);
  }
  riwayatNext() {
    if (this.riwayatPage() < this.riwayatTotal - 1)
      this.riwayatPage.set(this.riwayatPage() + 1);
  }
  openRiwayat(divisi) {
    this.riwayatList.set([]);
    this.riwayatPage.set(0);
    this.riwayatError.set("");
    this.riwayatDivisiNama.set(divisi.namaDivisi);
    this.riwayatLoading.set(true);
    this.showRiwayatModal.set(true);
    this.svc.findRiwayat(divisi.id).subscribe({
      next: (list) => {
        this.riwayatList.set(list);
        this.riwayatLoading.set(false);
      },
      error: () => {
        this.riwayatError.set("Gagal memuat riwayat.");
        this.riwayatLoading.set(false);
      }
    });
  }
  closeRiwayat() {
    this.showRiwayatModal.set(false);
  }
  formatTanggal(dt) {
    if (!dt)
      return "-";
    const d = new Date(dt);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) + " @ " + d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  }
  tipeClass(tipe) {
    return tipe === "DIBUAT" ? "bg-success" : tipe === "DIHAPUS" ? "bg-danger" : "bg-warning text-dark";
  }
  tipeLabel(tipe) {
    return tipe === "DIBUAT" ? "Dibuat" : tipe === "DIHAPUS" ? "Dihapus" : "Diubah";
  }
  openAksiMassalModal() {
    this.selectedAksi = "";
    this.aksiForm = {};
    this.aksiMassalError.set("");
    this.aksiSelectedDivisiIds.set(/* @__PURE__ */ new Set());
    this.showAksiMassalModal.set(true);
    if (this.karyawanList().length === 0) {
      this.karyawanSvc.findAll().subscribe({ next: (k) => this.karyawanList.set(k) });
    }
  }
  closeAksiMassalModal() {
    this.showAksiMassalModal.set(false);
  }
  onAksiChange() {
    this.aksiSelectedDivisiIds.set(/* @__PURE__ */ new Set());
    this.aksiMassalError.set("");
    this.aksiForm = this.defaultAksiForm(this.selectedAksi);
  }
  defaultAksiForm(aksi) {
    switch (aksi) {
      case "sistem_kerja_denda":
        return { sistemKerja: "HARI_KERJA", dendaKeterlambatan: false, dendaTerlambatKeluar: false };
      case "catatan_presensi":
        return { catatanMasuk: "TIDAK_DIBUTUHKAN", catatanKeluar: "TIDAK_DIBUTUHKAN", catatanMulaiLembur: "TIDAK_DIBUTUHKAN", catatanSelesaiLembur: "TIDAK_DIBUTUHKAN" };
      case "presensi_lokasi":
        return { lokasiMasuk: false, lokasiIstirahat: false, lokasiSelesaiIstirahat: false, lokasiKeluar: false, lokasiLembur: false, lokasiSelesaiLembur: false, lokasiPertamaKali: false, lokasiDiLuar: false, lokasiPerangkatBerbeda: false, lokasiFotoSelfieBermasalah: false };
      case "email_notif":
        return { bccGlobal: "" };
      case "supervisor":
        return { supervisorId: null };
      case "pembatasan":
        return { menitSebelumMasuk: 0, menitSetelahMasuk: 0, menitSetelahJadwalKeluar: 0, cegahPresensiKalenderLibur: false, cegahPresensiJadwalLibur: false, cegahPresensiLemburTanpaJadwal: false };
      case "validasi_perangkat":
        return { validasiPerangkat: false, presensiKeluarOtomatis: false, dendaTerlambatKeluar: false };
      case "kunjungan_klien":
        return { kunjunganKlien: false };
      case "cuti":
        return { minimalHariSebelumCuti: 0, maksHariPerRequest: 0, maksRequestPerBulan: 0 };
      default:
        return {};
    }
  }
  isAksiDivisiSelected(id) {
    return this.aksiSelectedDivisiIds().has(id);
  }
  toggleAksiDivisi(id) {
    const s = new Set(this.aksiSelectedDivisiIds());
    if (s.has(id))
      s.delete(id);
    else
      s.add(id);
    this.aksiSelectedDivisiIds.set(s);
  }
  pilihSemuaDivisi() {
    this.aksiSelectedDivisiIds.set(new Set(this.list().map((d) => d.id)));
  }
  batalSemuaDivisi() {
    this.aksiSelectedDivisiIds.set(/* @__PURE__ */ new Set());
  }
  terapkanAksiMassal() {
    const ids = [...this.aksiSelectedDivisiIds()];
    if (!ids.length || !this.selectedAksi)
      return;
    this.aksiMassalSaving.set(true);
    this.aksiMassalError.set("");
    const updates$ = ids.map((id) => {
      return new Promise((resolve, reject) => {
        this.svc.findById(id).subscribe({
          next: (divisi) => {
            const req = __spreadProps(__spreadValues(__spreadValues({}, divisi), this.aksiForm), { supervisorId: divisi.supervisorId ?? null });
            this.svc.update(id, req).subscribe({ next: () => resolve(), error: reject });
          },
          error: reject
        });
      });
    });
    Promise.all(updates$).then(() => {
      this.aksiMassalSaving.set(false);
      this.showAksiMassalModal.set(false);
      this.load();
    }).catch((err) => {
      this.aksiMassalError.set(err?.data?.message ?? err?.message ?? "Sebagian data gagal diperbarui.");
      this.aksiMassalSaving.set(false);
    });
  }
  ngOnInit() {
    this.load();
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
      const table = $("#tabelDivisi");
      if (!table.length || typeof $ === "undefined" || !$.fn?.dataTable)
        return;
      this.destroyDt();
      this.dtInstance = table.DataTable({
        language: { url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/id.json" },
        pageLength: 10,
        order: [[1, "asc"]],
        columnDefs: [{ orderable: false, targets: [0, 5] }]
      });
    }, 100);
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.destroyDt();
    this.svc.findAll().subscribe({
      next: (data) => {
        this.list.set(data);
        this.loading.set(false);
        this.cdr.detectChanges();
        this.initDt();
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
  sistemKerjaLabel(v) {
    return v === "HARI_KERJA" ? "Hari Kerja" : "Shift";
  }
  // ── Impor Supervisor ──────────────────────────────────────
  openImporModal() {
    this.imporFile.set(null);
    this.imporError.set("");
    this.imporHasil.set(null);
    this.showImporModal.set(true);
  }
  closeImporModal() {
    this.showImporModal.set(false);
  }
  onFileChange(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    this.imporError.set("");
    this.imporHasil.set(null);
    if (file && !file.name.endsWith(".xlsx")) {
      this.imporError.set("Hanya file .xlsx yang diperbolehkan.");
      this.imporFile.set(null);
      return;
    }
    if (file && file.size > 500 * 1024) {
      this.imporError.set("Ukuran file melebihi batas maksimal 500 KB.");
      this.imporFile.set(null);
      return;
    }
    this.imporFile.set(file);
  }
  prosesImpor() {
    const file = this.imporFile();
    if (!file) {
      this.imporError.set("Pilih file terlebih dahulu.");
      return;
    }
    this.imporLoading.set(true);
    this.imporError.set("");
    this.imporHasil.set(null);
    this.svc.imporSupervisor(file).subscribe({
      next: (hasil) => {
        this.imporHasil.set(hasil);
        this.imporLoading.set(false);
        if (hasil.berhasil > 0)
          this.load();
      },
      error: (err) => {
        this.imporError.set(err?.data?.message ?? err?.message ?? "Gagal memproses file.");
        this.imporLoading.set(false);
      }
    });
  }
  downloadTemplate() {
    this.svc.downloadTemplateSupervisor();
  }
  eksporDivisi() {
    this.svc.eksporDivisi();
  }
  static {
    this.\u0275fac = function DivisiListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DivisiListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DivisiListComponent, selectors: [["app-divisi-list"]], decls: 39, vars: 6, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], [1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0"], [1, "bx", "bx-buildings", "me-2"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-success", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-export", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-import", "me-1"], [1, "bx", "bx-list-check", "me-1"], ["routerLink", "/divisi/baru", 1, "btn", "btn-primary", "btn-sm", "px-3"], [1, "bx", "bx-plus", "me-1"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-flex", "align-items-center"], [1, "card"], [1, "card-body"], [1, "py-3"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)", "z-index", "1055"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "btn-close", "ms-auto", 3, "click"], [1, "placeholder-glow", "mb-2"], [1, "placeholder", "col-12", "rounded", 2, "height", "38px"], [1, "bx", "bx-buildings", 2, "font-size", "3rem"], [1, "mt-2", "mb-3"], ["routerLink", "/divisi/baru", 1, "btn", "btn-primary", "btn-sm"], ["id", "tabelDivisi", 1, "table", "table-striped", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "text-muted"], [1, "fw-semibold"], [1, "badge", "bg-info", "text-dark"], [1, "badge", "rounded-pill"], [1, "text-muted", "small"], ["title", "Edit", 1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "routerLink"], [1, "bx", "bx-edit"], ["title", "Riwayat Perubahan", 1, "btn", "btn-outline-info", "btn-sm", "me-1", 3, "click"], [1, "bx", "bx-history"], ["title", "Hapus", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bx", "bx-trash"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted"], [1, "modal-footer", "border-0"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-header"], [1, "modal-title"], [1, "bx", "bx-import", "me-2"], ["type", "button", 1, "btn-close", 3, "click", "disabled"], [1, "modal-body"], [1, "text-muted", "small", "mb-3"], ["href", "#", 1, "fw-semibold", 3, "click"], [1, "bx", "bx-download", "me-1"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "file", "accept", ".xlsx", 1, "form-control", 3, "change", "disabled"], [1, "alert", "alert-danger", "py-2", "mt-2"], [1, "mt-3"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bx", "bx-error-circle", "me-2"], [1, "d-flex", "gap-3", "mb-2"], [1, "badge", "bg-success", "px-3", "py-2"], [1, "badge", "bg-danger", "px-3", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "table", "table-sm", "table-bordered", "mb-0"], [1, "text-danger", "small"], [1, "bx", "bx-check-circle", "me-1"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content", "border-0", "shadow-lg"], [1, "modal-header", "border-bottom", "px-4", "py-3", 2, "background", "linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)"], [1, "d-flex", "align-items-center", "gap-2", "text-white"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "34px", "height", "34px", "background", "rgba(255,255,255,.2)"], [1, "bx", "bx-list-check", "fs-5"], [1, "modal-title", "mb-0", "text-white", "fw-bold"], [2, "opacity", ".8", "font-size", ".75rem"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "p-0"], [1, "alert", "alert-danger", "rounded-0", "mb-0", "py-2", "px-4", "d-flex", "align-items-center", "gap-2"], [1, "px-4", "pt-4", "pb-3", "border-bottom"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "rounded-circle", "text-white", "d-flex", "align-items-center", "justify-content-center", "fw-bold", 2, "width", "26px", "height", "26px", "background", "#6366f1", "font-size", ".8rem", "flex-shrink", "0"], [1, "mb-0", "fw-semibold"], [1, "row", "g-0"], [1, "col-md-7"], [1, "form-label", "text-muted", "small", "mb-1"], [1, "text-danger"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "sistem_kerja_denda"], ["value", "catatan_presensi"], ["value", "presensi_lokasi"], ["value", "email_notif"], ["value", "supervisor"], ["value", "supervisi"], ["value", "pembatasan"], ["value", "validasi_perangkat"], ["value", "kunjungan_klien"], ["value", "cuti"], [1, "modal-footer", "border-top", "px-4", "py-3", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn", "btn-sm", "px-4", "text-white", "fw-medium", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", 3, "disabled"], [1, "bx", "bx-error-circle", "fs-5"], [1, "px-4", "pt-3", "pb-3", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "rounded-pill", 2, "background", "#ede9fe", "color", "#6366f1"], ["type", "button", 1, "btn", "btn-sm", 2, "font-size", ".78rem", "color", "#6366f1", "background", "#ede9fe", "border", "none", "padding", "2px 10px", "border-radius", "6px", 3, "click"], ["type", "button", 1, "btn", "btn-sm", 2, "font-size", ".78rem", "color", "#6b7280", "background", "#f3f4f6", "border", "none", "padding", "2px 10px", "border-radius", "6px", 3, "click"], [1, "border", "rounded-3", "overflow-hidden", 2, "max-height", "180px", "overflow-y", "auto"], [1, "d-flex", "align-items-center", "gap-3", "px-3", "py-2", "border-bottom", 2, "cursor", "pointer", "transition", "background .15s", 3, "background"], [1, "px-4", "pt-3", "pb-4"], [1, "row", "g-3"], [1, "row", "g-2"], [1, "alert", "alert-info", "py-2", "mb-0", "d-flex", "align-items-center", "gap-2"], [1, "d-flex", "align-items-center", "gap-3", "px-3", "py-2", "border-bottom", 2, "cursor", "pointer", "transition", "background .15s", 3, "click"], ["type", "checkbox", 1, "form-check-input", "m-0", "flex-shrink-0", 2, "accent-color", "#6366f1", "width", "16px", "height", "16px", 3, "click", "checked"], [1, "fw-medium", 2, "font-size", ".9rem"], [1, "badge", "ms-auto", 2, "font-size", ".72rem", "font-weight", "500"], [1, "col-md-6"], [1, "form-label", "fw-medium", "small"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "HARI_KERJA"], ["value", "SHIFT"], [1, "d-flex", "gap-2", "mt-1"], [1, "form-check", "border", "rounded-2", "px-3", "py-2", "flex-fill", "text-center", 2, "cursor", "pointer", 3, "click"], ["type", "radio", "id", "massalDendaYa", 1, "form-check-input", 2, "accent-color", "#ef4444", 3, "ngModelChange", "ngModel", "value"], ["for", "massalDendaYa", 1, "form-check-label", "ms-1", "small", "fw-medium", 2, "cursor", "pointer", "color", "#dc2626"], ["type", "radio", "id", "massalDendaTidak", 1, "form-check-input", 2, "accent-color", "#22c55e", 3, "ngModelChange", "ngModel", "value"], ["for", "massalDendaTidak", 1, "form-check-label", "ms-1", "small", "fw-medium", 2, "cursor", "pointer", "color", "#16a34a"], ["type", "radio", "id", "massalDendaKeluarYa", 1, "form-check-input", 2, "accent-color", "#ef4444", 3, "ngModelChange", "ngModel", "value"], ["for", "massalDendaKeluarYa", 1, "form-check-label", "ms-1", "small", "fw-medium", 2, "cursor", "pointer", "color", "#dc2626"], ["type", "radio", "id", "massalDendaKeluarTidak", 1, "form-check-input", 2, "accent-color", "#22c55e", 3, "ngModelChange", "ngModel", "value"], ["for", "massalDendaKeluarTidak", 1, "form-check-label", "ms-1", "small", "fw-medium", 2, "cursor", "pointer", "color", "#16a34a"], ["value", "TIDAK_DIBUTUHKAN"], ["value", "OPTIONAL"], ["value", "DIBUTUHKAN"], [1, "col-md-4", "col-sm-6"], [1, "form-check", "border", "rounded-2", "px-3", "py-2", "h-100", 2, "cursor", "pointer", 3, "click"], ["type", "checkbox", 1, "form-check-input", 2, "accent-color", "#6366f1", 3, "ngModelChange", "click", "id", "ngModel"], [1, "form-check-label", "small", "fw-medium", "ms-1", 2, "cursor", "pointer", 3, "for"], [1, "col-12"], ["type", "text", "placeholder", "email1@domain.com, email2@domain.com", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-md-8"], [3, "ngValue"], [1, "col-md-4"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-check", "border", "rounded-2", "px-3", "py-2", 2, "cursor", "pointer", 3, "click"], ["type", "checkbox", "id", "massalKunjungan", 1, "form-check-input", 2, "accent-color", "#6366f1", 3, "ngModelChange", "click", "ngModel"], ["for", "massalKunjungan", 1, "form-check-label", "small", "fw-medium", "ms-1", 2, "cursor", "pointer"], [1, "bx", "bx-info-circle", "fs-5"], [1, "bx", "bx-check-circle", "text-success", "me-1"], [1, "bx", "bx-info-circle", "me-1"], [1, "btn", "btn-sm", "px-4", "text-white", "fw-medium", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-check", "me-1"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl", "modal-dialog-scrollable"], [1, "bx", "bx-history", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "text-center", "py-5"], [1, "alert", "alert-danger", "m-3"], [1, "d-flex", "border-bottom", 2, "min-height", "420px"], [1, "modal-footer", "justify-content-between"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "click", "disabled"], [1, "bx", "bx-chevron-left"], [1, "bx", "bx-chevron-right"], [1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "bx", "bx-history", 2, "font-size", "3rem"], [1, "mt-2"], [1, "border-end", "p-4", 2, "width", "240px", "min-width", "240px", "background", "#fafafa"], [1, "text-muted", "fw-semibold", "small", "text-uppercase", "mb-3"], [1, "d-flex", "align-items-start", "gap-3"], [1, "rounded-circle", "bg-secondary", "d-flex", "align-items-center", "justify-content-center", "text-white", "fw-bold", "flex-shrink-0", 2, "width", "44px", "height", "44px", "font-size", "1.1rem"], [1, "fw-semibold", 2, "font-size", ".9rem"], [1, "text-muted", "small", "mt-1"], [1, "badge", "mt-2"], [1, "p-4", "flex-grow-1", "overflow-auto"], [1, "badge", "mb-3", "px-2", "py-1", 2, "background", "#1a7f64", "font-size", ".8rem", "letter-spacing", ".02em"], [2, "background", "rgba(255,255,255,.25)", "padding", "1px 6px", "border-radius", "4px"], [1, "d-flex", "flex-column", "gap-1"], [2, "font-size", ".88rem"], [1, "ms-1", "text-decoration-underline"]], template: function DivisiListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 8);
        \u0275\u0275text(11, "Divisi");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "h5", 10);
        \u0275\u0275element(14, "i", 11);
        \u0275\u0275text(15, "Data Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
        \u0275\u0275listener("click", function DivisiListComponent_Template_button_click_17_listener() {
          return ctx.eksporDivisi();
        });
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275text(19, " Ekspor Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 15);
        \u0275\u0275listener("click", function DivisiListComponent_Template_button_click_20_listener() {
          return ctx.openImporModal();
        });
        \u0275\u0275element(21, "i", 16);
        \u0275\u0275text(22, " Impor Supervisor ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275listener("click", function DivisiListComponent_Template_button_click_23_listener() {
          return ctx.openAksiMassalModal();
        });
        \u0275\u0275element(24, "i", 17);
        \u0275\u0275text(25, " Aksi Massal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 18);
        \u0275\u0275element(27, "i", 19);
        \u0275\u0275text(28, " Tambah Divisi ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(29, DivisiListComponent_Conditional_29_Template, 4, 1, "div", 20);
        \u0275\u0275elementStart(30, "div", 21)(31, "div", 22);
        \u0275\u0275conditionalCreate(32, DivisiListComponent_Conditional_32_Template, 3, 1, "div", 23)(33, DivisiListComponent_Conditional_33_Template, 6, 0, "div", 24)(34, DivisiListComponent_Conditional_34_Template, 19, 0, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(35, DivisiListComponent_Conditional_35_Template, 14, 0, "div", 26);
        \u0275\u0275conditionalCreate(36, DivisiListComponent_Conditional_36_Template, 35, 7, "div", 26);
        \u0275\u0275conditionalCreate(37, DivisiListComponent_Conditional_37_Template, 59, 6, "div", 27);
        \u0275\u0275conditionalCreate(38, DivisiListComponent_Conditional_38_Template, 21, 4, "div", 28);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275conditional(ctx.error() ? 29 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 32 : ctx.list().length === 0 ? 33 : 34);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.confirmDeleteId() !== null ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImporModal() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showAksiMassalModal() ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRiwayatModal() ? 38 : -1);
      }
    }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, NgModel, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DivisiListComponent, [{
    type: Component,
    args: [{ selector: "app-divisi-list", standalone: true, imports: [RouterLink, FormsModule, LayoutComponent], template: `<app-layout>\r
\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active">Divisi</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <h5 class="mb-0"><i class="bx bx-buildings me-2"></i>Data Divisi</h5>\r
    <div class="d-flex gap-2">\r
      <button class="btn btn-outline-success btn-sm px-3" (click)="eksporDivisi()">\r
        <i class="bx bx-export me-1"></i> Ekspor Excel\r
      </button>\r
      <button class="btn btn-outline-secondary btn-sm px-3" (click)="openImporModal()">\r
        <i class="bx bx-import me-1"></i> Impor Supervisor\r
      </button>\r
      <button class="btn btn-outline-secondary btn-sm px-3" (click)="openAksiMassalModal()">\r
        <i class="bx bx-list-check me-1"></i> Aksi Massal\r
      </button>\r
      <a routerLink="/divisi/baru" class="btn btn-primary btn-sm px-3">\r
        <i class="bx bx-plus me-1"></i> Tambah Divisi\r
      </a>\r
    </div>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger alert-dismissible fade show d-flex align-items-center">\r
      <i class="bx bx-error-circle me-2 fs-5"></i> {{ error() }}\r
      <button class="btn-close ms-auto" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  <div class="card">\r
    <div class="card-body">\r
      @if (loading()) {\r
        <div class="py-3">\r
          @for (i of [1,2,3,4]; track i) {\r
            <div class="placeholder-glow mb-2">\r
              <span class="placeholder col-12 rounded" style="height:38px"></span>\r
            </div>\r
          }\r
        </div>\r
      } @else if (list().length === 0) {\r
        <div class="text-center py-5 text-muted">\r
          <i class="bx bx-buildings" style="font-size:3rem"></i>\r
          <p class="mt-2 mb-3">Belum ada data divisi.</p>\r
          <a routerLink="/divisi/baru" class="btn btn-primary btn-sm">Tambah Sekarang</a>\r
        </div>\r
      } @else {\r
        <div class="table-responsive">\r
          <table id="tabelDivisi" class="table table-striped table-hover align-middle mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>#</th>\r
                <th>Nama Divisi</th>\r
                <th>Sistem Kerja</th>\r
                <th>Denda</th>\r
                <th>Supervisor</th>\r
                <th>Aksi</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (d of list(); track d.id; let i = $index) {\r
                <tr>\r
                  <td class="text-muted">{{ i + 1 }}</td>\r
                  <td class="fw-semibold">{{ d.namaDivisi }}</td>\r
                  <td>\r
                    <span class="badge bg-info text-dark">{{ sistemKerjaLabel(d.sistemKerja) }}</span>\r
                  </td>\r
                  <td>\r
                    <span class="badge rounded-pill" [class.bg-danger]="d.dendaKeterlambatan" [class.bg-secondary]="!d.dendaKeterlambatan">\r
                      {{ d.dendaKeterlambatan ? 'Ya' : 'Tidak' }}\r
                    </span>\r
                  </td>\r
                  <td class="text-muted small">{{ d.supervisorNama || '-' }}</td>\r
                  <td>\r
                    <a [routerLink]="['/divisi', d.id, 'edit']" class="btn btn-outline-primary btn-sm me-1" title="Edit">\r
                      <i class="bx bx-edit"></i>\r
                    </a>\r
                    <button class="btn btn-outline-info btn-sm me-1" title="Riwayat Perubahan" (click)="openRiwayat(d)">\r
                      <i class="bx bx-history"></i>\r
                    </button>\r
                    <button class="btn btn-outline-danger btn-sm" title="Hapus" (click)="confirmDelete(d.id)">\r
                      <i class="bx bx-trash"></i>\r
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
  <!-- \u2500\u2500 Modal Hapus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (confirmDeleteId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger"><i class="bx bx-trash me-2"></i>Hapus Divisi?</h5>\r
          </div>\r
          <div class="modal-body text-muted">Data yang dihapus tidak dapat dikembalikan.</div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-secondary btn-sm" (click)="cancelDelete()">Batal</button>\r
            <button class="btn btn-danger btn-sm" (click)="doDelete()">Ya, Hapus</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Impor Supervisor \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showImporModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5)">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
\r
          <!-- Header -->\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-import me-2"></i>Impor Supervisor Divisi</h5>\r
            <button type="button" class="btn-close" (click)="closeImporModal()" [disabled]="imporLoading()"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body">\r
            <p class="text-muted small mb-3">\r
              Upload file <code>.xlsx</code> dengan kolom <strong>Nama Divisi</strong> dan <strong>Nama Karyawan</strong>.\r
              <a href="#" class="fw-semibold" (click)="$event.preventDefault(); downloadTemplate()">\r
                <i class="bx bx-download me-1"></i>Download template\r
              </a>\r
            </p>\r
            <div class="mb-3">\r
              <label class="form-label fw-semibold">File Excel (.xlsx)</label>\r
              <input type="file" class="form-control" accept=".xlsx"\r
                     (change)="onFileChange($event)"\r
                     [disabled]="imporLoading()">\r
              @if (imporError()) {\r
                <div class="alert alert-danger py-2 mt-2">\r
                  <i class="bx bx-error-circle me-2"></i> {{ imporError() }}\r
                </div>\r
              }\r
            </div>\r
\r
            @if (imporHasil(); as hasil) {\r
              <div class="mt-3">\r
                <div class="d-flex gap-3 mb-2">\r
                  <span class="badge bg-success px-3 py-2">Berhasil: {{ hasil.berhasil }}</span>\r
                  <span class="badge bg-danger  px-3 py-2">Gagal: {{ hasil.gagal }}</span>\r
                </div>\r
                @if (hasil.errors.length > 0) {\r
                  <div class="table-responsive">\r
                    <table class="table table-sm table-bordered mb-0">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th>Baris</th><th>Divisi</th><th>Karyawan</th><th>Pesan</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (e of hasil.errors; track e.baris) {\r
                          <tr>\r
                            <td>{{ e.baris }}</td>\r
                            <td>{{ e.namaDivisi || '-' }}</td>\r
                            <td>{{ e.namaKaryawan || '-' }}</td>\r
                            <td class="text-danger small">{{ e.pesan }}</td>\r
                          </tr>\r
                        }\r
                      </tbody>\r
                    </table>\r
                  </div>\r
                } @else {\r
                  <div class="alert alert-success py-2">\r
                    <i class="bx bx-check-circle me-1"></i> Semua data berhasil diimpor!\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-0">\r
            @if (imporLoading()) {\r
              <span class="spinner-border spinner-border-sm me-2"></span>\r
            }\r
            <button class="btn btn-primary" (click)="prosesImpor()" [disabled]="imporLoading() || !imporFile()">\r
              Proses\r
            </button>\r
            <button class="btn btn-outline-secondary" (click)="closeImporModal()" [disabled]="imporLoading()">\r
              Tutup\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Aksi Massal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showAksiMassalModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">\r
        <div class="modal-content border-0 shadow-lg">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-bottom px-4 py-3" style="background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)">\r
            <div class="d-flex align-items-center gap-2 text-white">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center"\r
                   style="width:34px;height:34px;background:rgba(255,255,255,.2)">\r
                <i class="bx bx-list-check fs-5"></i>\r
              </div>\r
              <div>\r
                <h5 class="modal-title mb-0 text-white fw-bold">Aksi Massal</h5>\r
                <small style="opacity:.8;font-size:.75rem">Terapkan perubahan ke banyak divisi sekaligus</small>\r
              </div>\r
            </div>\r
            <button type="button" class="btn-close btn-close-white" (click)="closeAksiMassalModal()"></button>\r
          </div>\r
\r
          <div class="modal-body p-0">\r
\r
            @if (aksiMassalError()) {\r
              <div class="alert alert-danger rounded-0 mb-0 py-2 px-4 d-flex align-items-center gap-2">\r
                <i class="bx bx-error-circle fs-5"></i>\r
                <span>{{ aksiMassalError() }}</span>\r
              </div>\r
            }\r
\r
            <!-- \u2460 Pilih Aksi -->\r
            <div class="px-4 pt-4 pb-3 border-bottom">\r
              <div class="d-flex align-items-center gap-2 mb-3">\r
                <span class="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"\r
                      style="width:26px;height:26px;background:#6366f1;font-size:.8rem;flex-shrink:0">1</span>\r
                <h6 class="mb-0 fw-semibold">Pilih Aksi</h6>\r
              </div>\r
              <div class="row g-0">\r
                <div class="col-md-7">\r
                  <label class="form-label text-muted small mb-1">Jenis aksi yang akan diterapkan <span class="text-danger">*</span></label>\r
                  <select class="form-select" [(ngModel)]="selectedAksi" (ngModelChange)="onAksiChange()">\r
                    <option value="">-- Pilih Aksi --</option>\r
                    <option value="sistem_kerja_denda">\u2699\uFE0F Sistem Kerja &amp; Denda</option>\r
                    <option value="catatan_presensi">\u{1F4DD} Catatan Presensi</option>\r
                    <option value="presensi_lokasi">\u{1F4CD} Presensi Yang Harus Sesuai Lokasi</option>\r
                    <option value="email_notif">\u{1F4E7} Email Notif Review Presensi</option>\r
                    <option value="supervisor">\u{1F464} Supervisor</option>\r
                    <option value="supervisi">\u{1F465} Supervisi</option>\r
                    <option value="pembatasan">\u{1F512} Pembatasan Presensi</option>\r
                    <option value="validasi_perangkat">\u{1F4F1} Validasi Perangkat &amp; Keluar Otomatis</option>\r
                    <option value="kunjungan_klien">\u{1F91D} Pengaturan Kunjungan Klien</option>\r
                    <option value="cuti">\u{1F3D6}\uFE0F Pengaturan Cuti</option>\r
                  </select>\r
                </div>\r
              </div>\r
            </div>\r
\r
            @if (selectedAksi) {\r
\r
              <!-- \u2461 Target Divisi -->\r
              <div class="px-4 pt-3 pb-3 border-bottom">\r
                <div class="d-flex align-items-center justify-content-between mb-2">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <span class="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"\r
                          style="width:26px;height:26px;background:#6366f1;font-size:.8rem;flex-shrink:0">2</span>\r
                    <h6 class="mb-0 fw-semibold">Target Divisi</h6>\r
                  </div>\r
                  <div class="d-flex align-items-center gap-2">\r
                    <span class="badge rounded-pill"\r
                          style="background:#ede9fe;color:#6366f1">\r
                      {{ aksiSelectedDivisiIds().size }}/{{ list().length }} dipilih\r
                    </span>\r
                    <button type="button" class="btn btn-sm" (click)="pilihSemuaDivisi()"\r
                            style="font-size:.78rem;color:#6366f1;background:#ede9fe;border:none;padding:2px 10px;border-radius:6px">\r
                      Pilih Semua\r
                    </button>\r
                    <button type="button" class="btn btn-sm" (click)="batalSemuaDivisi()"\r
                            style="font-size:.78rem;color:#6b7280;background:#f3f4f6;border:none;padding:2px 10px;border-radius:6px">\r
                      Reset\r
                    </button>\r
                  </div>\r
                </div>\r
\r
                <div class="border rounded-3 overflow-hidden" style="max-height:180px;overflow-y:auto">\r
                  @for (d of list(); track d.id) {\r
                    <div class="d-flex align-items-center gap-3 px-3 py-2 border-bottom"\r
                         [style.background]="isAksiDivisiSelected(d.id) ? '#f5f3ff' : 'transparent'"\r
                         style="cursor:pointer;transition:background .15s"\r
                         (click)="toggleAksiDivisi(d.id)">\r
                      <input type="checkbox" class="form-check-input m-0 flex-shrink-0"\r
                             style="accent-color:#6366f1;width:16px;height:16px"\r
                             [checked]="isAksiDivisiSelected(d.id)"\r
                             (click)="$event.stopPropagation(); toggleAksiDivisi(d.id)" />\r
                      <span class="fw-medium" style="font-size:.9rem">{{ d.namaDivisi }}</span>\r
                      <span class="badge ms-auto"\r
                            [style.background]="d.sistemKerja === 'SHIFT' ? '#dbeafe' : '#dcfce7'"\r
                            [style.color]="d.sistemKerja === 'SHIFT' ? '#1d4ed8' : '#15803d'"\r
                            style="font-size:.72rem;font-weight:500">\r
                        {{ sistemKerjaLabel(d.sistemKerja) }}\r
                      </span>\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
\r
              <!-- \u2462 Pengaturan -->\r
              <div class="px-4 pt-3 pb-4">\r
                <div class="d-flex align-items-center gap-2 mb-3">\r
                  <span class="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"\r
                        style="width:26px;height:26px;background:#6366f1;font-size:.8rem;flex-shrink:0">3</span>\r
                  <h6 class="mb-0 fw-semibold">Pengaturan</h6>\r
                </div>\r
\r
                <!-- Sistem Kerja & Denda -->\r
                @if (selectedAksi === 'sistem_kerja_denda') {\r
                  <div class="row g-3">\r
                    <div class="col-md-6">\r
                      <label class="form-label fw-medium small">Sistem Kerja <span class="text-danger">*</span></label>\r
                      <select class="form-select form-select-sm" [(ngModel)]="aksiForm.sistemKerja">\r
                        <option value="HARI_KERJA">Hari Kerja</option>\r
                        <option value="SHIFT">Shift</option>\r
                      </select>\r
                    </div>\r
                    <div class="col-md-6">\r
                      <label class="form-label fw-medium small">Denda Keterlambatan</label>\r
                      <div class="d-flex gap-2 mt-1">\r
                        <div class="form-check border rounded-2 px-3 py-2 flex-fill text-center"\r
                             [style.background]="aksiForm.dendaKeterlambatan === true ? '#fef2f2' : '#f9fafb'"\r
                             [style.borderColor]="aksiForm.dendaKeterlambatan === true ? '#fca5a5 !important' : ''"\r
                             style="cursor:pointer" (click)="aksiForm.dendaKeterlambatan = true">\r
                          <input class="form-check-input" type="radio" [(ngModel)]="aksiForm.dendaKeterlambatan"\r
                                 [value]="true" id="massalDendaYa" style="accent-color:#ef4444" />\r
                          <label class="form-check-label ms-1 small fw-medium" for="massalDendaYa" style="cursor:pointer;color:#dc2626">Ya</label>\r
                        </div>\r
                        <div class="form-check border rounded-2 px-3 py-2 flex-fill text-center"\r
                             [style.background]="aksiForm.dendaKeterlambatan === false ? '#f0fdf4' : '#f9fafb'"\r
                             style="cursor:pointer" (click)="aksiForm.dendaKeterlambatan = false">\r
                          <input class="form-check-input" type="radio" [(ngModel)]="aksiForm.dendaKeterlambatan"\r
                                 [value]="false" id="massalDendaTidak" style="accent-color:#22c55e" />\r
                          <label class="form-check-label ms-1 small fw-medium" for="massalDendaTidak" style="cursor:pointer;color:#16a34a">Tidak</label>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                      <label class="form-label fw-medium small">Denda Terlambat Presensi Keluar</label>\r
                      <div class="d-flex gap-2 mt-1">\r
                        <div class="form-check border rounded-2 px-3 py-2 flex-fill text-center"\r
                             [style.background]="aksiForm.dendaTerlambatKeluar === true ? '#fef2f2' : '#f9fafb'"\r
                             style="cursor:pointer" (click)="aksiForm.dendaTerlambatKeluar = true">\r
                          <input class="form-check-input" type="radio" [(ngModel)]="aksiForm.dendaTerlambatKeluar"\r
                                 [value]="true" id="massalDendaKeluarYa" style="accent-color:#ef4444" />\r
                          <label class="form-check-label ms-1 small fw-medium" for="massalDendaKeluarYa" style="cursor:pointer;color:#dc2626">Ya</label>\r
                        </div>\r
                        <div class="form-check border rounded-2 px-3 py-2 flex-fill text-center"\r
                             [style.background]="aksiForm.dendaTerlambatKeluar === false ? '#f0fdf4' : '#f9fafb'"\r
                             style="cursor:pointer" (click)="aksiForm.dendaTerlambatKeluar = false">\r
                          <input class="form-check-input" type="radio" [(ngModel)]="aksiForm.dendaTerlambatKeluar"\r
                                 [value]="false" id="massalDendaKeluarTidak" style="accent-color:#22c55e" />\r
                          <label class="form-check-label ms-1 small fw-medium" for="massalDendaKeluarTidak" style="cursor:pointer;color:#16a34a">Tidak</label>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                }\r
\r
                <!-- Catatan Presensi -->\r
                @if (selectedAksi === 'catatan_presensi') {\r
                  <div class="row g-3">\r
                    @for (item of [\r
                      {key:'catatanMasuk',         label:'Catatan Saat Presensi Masuk'},\r
                      {key:'catatanKeluar',        label:'Catatan Saat Presensi Keluar'},\r
                      {key:'catatanMulaiLembur',   label:'Catatan Saat Mulai Lembur'},\r
                      {key:'catatanSelesaiLembur', label:'Catatan Saat Selesai Lembur'}\r
                    ]; track item.key) {\r
                      <div class="col-md-6">\r
                        <label class="form-label fw-medium small">{{ item.label }}</label>\r
                        <select class="form-select form-select-sm" [(ngModel)]="aksiForm[item.key]">\r
                          <option value="TIDAK_DIBUTUHKAN">Tidak Dibutuhkan</option>\r
                          <option value="OPTIONAL">Optional</option>\r
                          <option value="DIBUTUHKAN">Dibutuhkan</option>\r
                        </select>\r
                      </div>\r
                    }\r
                  </div>\r
                }\r
\r
                <!-- Presensi Sesuai Lokasi -->\r
                @if (selectedAksi === 'presensi_lokasi') {\r
                  <div class="row g-2">\r
                    @for (item of [\r
                      {key:'lokasiMasuk',               label:'Masuk'},\r
                      {key:'lokasiIstirahat',           label:'Istirahat'},\r
                      {key:'lokasiSelesaiIstirahat',    label:'Selesai Istirahat'},\r
                      {key:'lokasiKeluar',              label:'Keluar'},\r
                      {key:'lokasiLembur',              label:'Lembur'},\r
                      {key:'lokasiSelesaiLembur',       label:'Selesai Lembur'},\r
                      {key:'lokasiPertamaKali',         label:'Presensi Pertama Kali'},\r
                      {key:'lokasiDiLuar',              label:'Di Luar Lokasi'},\r
                      {key:'lokasiPerangkatBerbeda',    label:'Perangkat Berbeda'},\r
                      {key:'lokasiFotoSelfieBermasalah',label:'Foto Selfie Bermasalah'}\r
                    ]; track item.key) {\r
                      <div class="col-md-4 col-sm-6">\r
                        <div class="form-check border rounded-2 px-3 py-2 h-100"\r
                             [style.background]="aksiForm[item.key] ? '#f5f3ff' : '#f9fafb'"\r
                             style="cursor:pointer" (click)="aksiForm[item.key] = !aksiForm[item.key]">\r
                          <input class="form-check-input" type="checkbox"\r
                                 [id]="'m_'+item.key" style="accent-color:#6366f1"\r
                                 [(ngModel)]="aksiForm[item.key]"\r
                                 (click)="$event.stopPropagation()" />\r
                          <label class="form-check-label small fw-medium ms-1" [for]="'m_'+item.key" style="cursor:pointer">{{ item.label }}</label>\r
                        </div>\r
                      </div>\r
                    }\r
                  </div>\r
                }\r
\r
                <!-- Email Notif -->\r
                @if (selectedAksi === 'email_notif') {\r
                  <div class="row g-3">\r
                    <div class="col-12">\r
                      <label class="form-label fw-medium small">BCC Laporan Ke</label>\r
                      <input type="text" class="form-control form-control-sm" [(ngModel)]="aksiForm.bccGlobal"\r
                             placeholder="email1@domain.com, email2@domain.com" />\r
                      <small class="text-muted">Pisahkan beberapa email dengan koma (,)</small>\r
                    </div>\r
                  </div>\r
                }\r
\r
                <!-- Supervisor -->\r
                @if (selectedAksi === 'supervisor') {\r
                  <div class="row g-3">\r
                    <div class="col-md-8">\r
                      <label class="form-label fw-medium small">Supervisor</label>\r
                      <select class="form-select form-select-sm" [(ngModel)]="aksiForm.supervisorId">\r
                        <option [ngValue]="null">-- Hapus Supervisor --</option>\r
                        @for (k of karyawanList(); track k.id) {\r
                          <option [ngValue]="k.id">{{ k.namaLengkap }} ({{ k.nip }})</option>\r
                        }\r
                      </select>\r
                    </div>\r
                  </div>\r
                }\r
\r
                <!-- Pembatasan Presensi -->\r
                @if (selectedAksi === 'pembatasan') {\r
                  <div class="row g-3">\r
                    <div class="col-md-4">\r
                      <label class="form-label fw-medium small">Menit Sebelum Masuk</label>\r
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="aksiForm.menitSebelumMasuk" min="0" />\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label fw-medium small">Menit Setelah Masuk</label>\r
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="aksiForm.menitSetelahMasuk" min="0" />\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label fw-medium small">Menit Setelah Jadwal Keluar</label>\r
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="aksiForm.menitSetelahJadwalKeluar" min="0" />\r
                    </div>\r
                    <div class="col-12">\r
                      <div class="row g-2">\r
                        @for (item of [\r
                          {key:'cegahPresensiKalenderLibur', id:'massalCegahKalender', label:'Cegah saat Kalender Libur'},\r
                          {key:'cegahPresensiJadwalLibur',   id:'massalCegahJadwal',   label:'Cegah saat Jadwal Libur'},\r
                          {key:'cegahPresensiLemburTanpaJadwal', id:'massalCegahLembur', label:'Cegah Lembur Tanpa Jadwal'}\r
                        ]; track item.key) {\r
                          <div class="col-md-4">\r
                            <div class="form-check border rounded-2 px-3 py-2"\r
                                 [style.background]="aksiForm[item.key] ? '#f5f3ff' : '#f9fafb'"\r
                                 style="cursor:pointer" (click)="aksiForm[item.key] = !aksiForm[item.key]">\r
                              <input class="form-check-input" type="checkbox" [id]="item.id"\r
                                     style="accent-color:#6366f1"\r
                                     [(ngModel)]="aksiForm[item.key]"\r
                                     (click)="$event.stopPropagation()" />\r
                              <label class="form-check-label small fw-medium ms-1" [for]="item.id" style="cursor:pointer">{{ item.label }}</label>\r
                            </div>\r
                          </div>\r
                        }\r
                      </div>\r
                    </div>\r
                  </div>\r
                }\r
\r
                <!-- Validasi Perangkat & Keluar Otomatis -->\r
                @if (selectedAksi === 'validasi_perangkat') {\r
                  <div class="row g-2">\r
                    @for (item of [\r
                      {key:'validasiPerangkat',      id:'massalValidasi',       label:'Validasi Perangkat'},\r
                      {key:'presensiKeluarOtomatis', id:'massalKeluarOtomatis', label:'Presensi Keluar Otomatis'},\r
                      {key:'dendaTerlambatKeluar',   id:'massalDendaTelat',     label:'Denda Terlambat Keluar'}\r
                    ]; track item.key) {\r
                      <div class="col-md-4">\r
                        <div class="form-check border rounded-2 px-3 py-2"\r
                             [style.background]="aksiForm[item.key] ? '#f5f3ff' : '#f9fafb'"\r
                             style="cursor:pointer" (click)="aksiForm[item.key] = !aksiForm[item.key]">\r
                          <input class="form-check-input" type="checkbox" [id]="item.id"\r
                                 style="accent-color:#6366f1"\r
                                 [(ngModel)]="aksiForm[item.key]"\r
                                 (click)="$event.stopPropagation()" />\r
                          <label class="form-check-label small fw-medium ms-1" [for]="item.id" style="cursor:pointer">{{ item.label }}</label>\r
                        </div>\r
                      </div>\r
                    }\r
                  </div>\r
                }\r
\r
                <!-- Kunjungan Klien -->\r
                @if (selectedAksi === 'kunjungan_klien') {\r
                  <div class="row g-2">\r
                    <div class="col-md-4">\r
                      <div class="form-check border rounded-2 px-3 py-2"\r
                           [style.background]="aksiForm.kunjunganKlien ? '#f5f3ff' : '#f9fafb'"\r
                           style="cursor:pointer" (click)="aksiForm.kunjunganKlien = !aksiForm.kunjunganKlien">\r
                        <input class="form-check-input" type="checkbox" id="massalKunjungan"\r
                               style="accent-color:#6366f1"\r
                               [(ngModel)]="aksiForm.kunjunganKlien"\r
                               (click)="$event.stopPropagation()" />\r
                        <label class="form-check-label small fw-medium ms-1" for="massalKunjungan" style="cursor:pointer">Aktifkan Kunjungan Klien</label>\r
                      </div>\r
                    </div>\r
                  </div>\r
                }\r
\r
                <!-- Pengaturan Cuti -->\r
                @if (selectedAksi === 'cuti') {\r
                  <div class="row g-3">\r
                    <div class="col-md-4">\r
                      <label class="form-label fw-medium small">Min. Hari Sebelum Cuti</label>\r
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="aksiForm.minimalHariSebelumCuti" min="0" />\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label fw-medium small">Maks. Hari per Request</label>\r
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="aksiForm.maksHariPerRequest" min="0" />\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label fw-medium small">Maks. Request per Bulan</label>\r
                      <input type="number" class="form-control form-control-sm" [(ngModel)]="aksiForm.maksRequestPerBulan" min="0" />\r
                    </div>\r
                  </div>\r
                }\r
\r
                <!-- Supervisi \u2014 info saja -->\r
                @if (selectedAksi === 'supervisi') {\r
                  <div class="alert alert-info py-2 mb-0 d-flex align-items-center gap-2">\r
                    <i class="bx bx-info-circle fs-5"></i>\r
                    <span>Pengaturan supervisi harus diatur per divisi melalui halaman edit masing-masing divisi.</span>\r
                  </div>\r
                }\r
              </div>\r
            }\r
\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-top px-4 py-3 d-flex justify-content-between align-items-center">\r
            <span class="text-muted small">\r
              @if (aksiSelectedDivisiIds().size > 0 && selectedAksi) {\r
                <i class="bx bx-check-circle text-success me-1"></i>\r
                Siap diterapkan ke <strong>{{ aksiSelectedDivisiIds().size }}</strong> divisi\r
              } @else {\r
                <i class="bx bx-info-circle me-1"></i>Pilih aksi dan target divisi\r
              }\r
            </span>\r
            <div class="d-flex gap-2">\r
              <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeAksiMassalModal()" [disabled]="aksiMassalSaving()">\r
                Batal\r
              </button>\r
              @if (selectedAksi && selectedAksi !== 'supervisi') {\r
                <button class="btn btn-sm px-4 text-white fw-medium"\r
                        style="background:linear-gradient(135deg,#6366f1,#8b5cf6)"\r
                        (click)="terapkanAksiMassal()"\r
                        [disabled]="aksiMassalSaving() || aksiSelectedDivisiIds().size === 0">\r
                  @if (aksiMassalSaving()) {\r
                    <span class="spinner-border spinner-border-sm me-1"></span>Menyimpan...\r
                  } @else {\r
                    <i class="bx bx-check me-1"></i>Simpan\r
                  }\r
                </button>\r
              }\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal Riwayat Perubahan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showRiwayatModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.5);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">\r
        <div class="modal-content">\r
\r
          <!-- Header -->\r
          <div class="modal-header">\r
            <h5 class="modal-title"><i class="bx bx-history me-2"></i>Riwayat Perubahan</h5>\r
            <button type="button" class="btn-close" (click)="closeRiwayat()"></button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body p-0">\r
\r
            @if (riwayatLoading()) {\r
              <div class="text-center py-5">\r
                <span class="spinner-border text-primary"></span>\r
                <p class="mt-2 text-muted">Memuat riwayat...</p>\r
              </div>\r
            } @else if (riwayatError()) {\r
              <div class="alert alert-danger m-3">{{ riwayatError() }}</div>\r
            } @else if (riwayatTotal === 0) {\r
              <div class="text-center py-5 text-muted">\r
                <i class="bx bx-history" style="font-size:3rem"></i>\r
                <p class="mt-2">Belum ada riwayat perubahan.</p>\r
              </div>\r
            } @else if (riwayatCurrentItem) {\r
              <!-- 2-column layout: User | Aktivitas -->\r
              <div class="d-flex border-bottom" style="min-height:420px">\r
\r
                <!-- Kolom Kiri: User -->\r
                <div class="border-end p-4" style="width:240px;min-width:240px;background:#fafafa">\r
                  <p class="text-muted fw-semibold small text-uppercase mb-3">User</p>\r
                  <div class="d-flex align-items-start gap-3">\r
                    <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"\r
                         style="width:44px;height:44px;font-size:1.1rem">\r
                      {{ (riwayatCurrentItem.changedBy || '?').charAt(0).toUpperCase() }}\r
                    </div>\r
                    <div>\r
                      <div class="fw-semibold" style="font-size:.9rem">\r
                        {{ riwayatCurrentItem.changedBy || 'Sistem' }}\r
                      </div>\r
                      <div class="text-muted small mt-1">\r
                        {{ formatTanggal(riwayatCurrentItem.changedAt) }}\r
                      </div>\r
                      <span class="badge mt-2" [class]="tipeClass(riwayatCurrentItem.tipe)">\r
                        {{ tipeLabel(riwayatCurrentItem.tipe) }}\r
                      </span>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Kolom Kanan: Aktivitas -->\r
                <div class="p-4 flex-grow-1 overflow-auto">\r
                  <p class="text-muted fw-semibold small text-uppercase mb-3">Aktivitas</p>\r
\r
                  <span class="badge mb-3 px-2 py-1"\r
                        style="background:#1a7f64;font-size:.8rem;letter-spacing:.02em">\r
                    Divisi &nbsp;\r
                    <span style="background:rgba(255,255,255,.25);padding:1px 6px;border-radius:4px">\r
                      ID: {{ riwayatCurrentItem.id }}\r
                    </span>\r
                  </span>\r
\r
                  @if (!riwayatCurrentItem.aktivitas.length) {\r
                    <p class="text-muted small">Tidak ada detail perubahan.</p>\r
                  } @else {\r
                    <div class="d-flex flex-column gap-1">\r
                      @for (a of riwayatCurrentItem.aktivitas; track $index) {\r
                        <div style="font-size:.88rem">\r
                          <span class="fw-semibold">{{ a.label }}:</span>\r
                          <span class="ms-1 text-decoration-underline">{{ a.nilai }}</span>\r
                        </div>\r
                      }\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            }\r
          </div>\r
\r
          <!-- Footer: pagination -->\r
          <div class="modal-footer justify-content-between">\r
            <span class="text-muted small">\r
              {{ riwayatTotal > 0 ? (riwayatPage() + 1) + ' / ' + riwayatTotal + ' riwayat' : '' }}\r
            </span>\r
            <div class="d-flex gap-2">\r
              <button class="btn btn-outline-secondary btn-sm px-3"\r
                      (click)="riwayatPrev()" [disabled]="riwayatPage() === 0">\r
                <i class="bx bx-chevron-left"></i>\r
              </button>\r
              <button class="btn btn-outline-secondary btn-sm px-3"\r
                      (click)="riwayatNext()" [disabled]="riwayatPage() >= riwayatTotal - 1">\r
                <i class="bx bx-chevron-right"></i>\r
              </button>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DivisiListComponent, { className: "DivisiListComponent", filePath: "src/app/features/divisi/divisi-list/divisi-list.component.ts", lineNumber: 19 });
})();
export {
  DivisiListComponent
};
//# sourceMappingURL=chunk-7DAJMCVI.js.map
