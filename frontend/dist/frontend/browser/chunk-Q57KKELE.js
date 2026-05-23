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
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/lembur/pengaturan-lembur/pengaturan-lembur.component.ts
function PengaturanLemburComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.jadwalError());
  }
}
function PengaturanLemburComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.jadwalSuccess());
  }
}
function PengaturanLemburComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275text(2, "Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function PengaturanLemburComponent_div_23_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "input", 35);
    \u0275\u0275listener("change", function PengaturanLemburComponent_div_23_div_4_div_11_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.menitSebelumJadwal.set(+$event.target.value || null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "Menit Sebelum Jadwal");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.menitSebelumJadwal());
  }
}
function PengaturanLemburComponent_div_23_div_4_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function PengaturanLemburComponent_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "input", 24);
    \u0275\u0275listener("change", function PengaturanLemburComponent_div_23_div_4_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cegahPresensiTanpaJadwal.set($event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "label", 25);
    \u0275\u0275text(5, " Karyawan yang ada jadwal lembur hanya bisa presensi lembur sesuai jadwal ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "div", 23)(8, "input", 27);
    \u0275\u0275listener("change", function PengaturanLemburComponent_div_23_div_4_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.kirimNotifikasiJadwal.set($event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 28);
    \u0275\u0275text(10, " Pengiriman notifikasi jadwal lembur ke semua karyawan yang mempunyai jadwal ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, PengaturanLemburComponent_div_23_div_4_div_11_Template, 5, 1, "div", 29);
    \u0275\u0275elementStart(12, "div", 30)(13, "button", 31);
    \u0275\u0275listener("click", function PengaturanLemburComponent_div_23_div_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveJadwal());
    });
    \u0275\u0275template(14, PengaturanLemburComponent_div_23_div_4_span_14_Template, 1, 0, "span", 32);
    \u0275\u0275text(15, " Simpan ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.cegahPresensiTanpaJadwal());
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.kirimNotifikasiJadwal());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.kirimNotifikasiJadwal());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.jadwalSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.jadwalSaving());
  }
}
function PengaturanLemburComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PengaturanLemburComponent_div_23_div_1_Template, 2, 1, "div", 13)(2, PengaturanLemburComponent_div_23_div_2_Template, 2, 1, "div", 14)(3, PengaturanLemburComponent_div_23_div_3_Template, 3, 0, "div", 15)(4, PengaturanLemburComponent_div_23_div_4_Template, 16, 5, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.jadwalError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.jadwalSuccess());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.jadwalLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.jadwalLoading());
  }
}
function PengaturanLemburComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tarifError());
  }
}
function PengaturanLemburComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tarifSuccess());
  }
}
function PengaturanLemburComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275text(2, "Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function PengaturanLemburComponent_div_24_div_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "div", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 48)(6, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_24_div_4_div_18_Template_input_ngModelChange_6_listener($event) {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(t_r6.hariKerja, $event) || (t_r6.hariKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 50);
    \u0275\u0275text(8, "x");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 43)(10, "div", 48)(11, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_24_div_4_div_18_Template_input_ngModelChange_11_listener($event) {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(t_r6.hariLibur5HariKerja, $event) || (t_r6.hariLibur5HariKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 50);
    \u0275\u0275text(13, "x");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 43)(15, "div", 48)(16, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_24_div_4_div_18_Template_input_ngModelChange_16_listener($event) {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(t_r6.hariLibur6HariKerja, $event) || (t_r6.hariLibur6HariKerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 50);
    \u0275\u0275text(18, "x");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r6.jamLembur, " jam");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", t_r6.hariKerja);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", t_r6.hariLibur5HariKerja);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", t_r6.hariLibur6HariKerja);
  }
}
function PengaturanLemburComponent_div_24_div_4_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function PengaturanLemburComponent_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "div", 41);
    \u0275\u0275text(5, "Tarif Upah");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42);
    \u0275\u0275text(7, "Jam Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43);
    \u0275\u0275text(9, "Hari Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43);
    \u0275\u0275text(11, "(hari libur)");
    \u0275\u0275element(12, "br");
    \u0275\u0275text(13, "5 Hari Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 43);
    \u0275\u0275text(15, "(hari libur)");
    \u0275\u0275element(16, "br");
    \u0275\u0275text(17, "6 Hari Kerja");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, PengaturanLemburComponent_div_24_div_4_div_18_Template, 19, 4, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 45)(20, "button", 31);
    \u0275\u0275listener("click", function PengaturanLemburComponent_div_24_div_4_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveTarif());
    });
    \u0275\u0275template(21, PengaturanLemburComponent_div_24_div_4_span_21_Template, 1, 0, "span", 32);
    \u0275\u0275text(22, " Simpan Perubahan ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.tarifList());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.tarifSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tarifSaving());
  }
}
function PengaturanLemburComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PengaturanLemburComponent_div_24_div_1_Template, 2, 1, "div", 13)(2, PengaturanLemburComponent_div_24_div_2_Template, 2, 1, "div", 14)(3, PengaturanLemburComponent_div_24_div_3_Template, 3, 0, "div", 15)(4, PengaturanLemburComponent_div_24_div_4_Template, 23, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tarifError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tarifSuccess());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tarifLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.tarifLoading());
  }
}
function PengaturanLemburComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.divisiError());
  }
}
function PengaturanLemburComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.divisiSuccess());
  }
}
function PengaturanLemburComponent_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275text(2, "Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function PengaturanLemburComponent_div_25_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275elementStart(2, "p", 59);
    \u0275\u0275text(3, "Tidak ada data divisi.");
    \u0275\u0275elementEnd()();
  }
}
function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r9.polaMinggu);
  }
}
function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10);
  }
}
function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r11);
  }
}
function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PengaturanLemburComponent_div_25_div_9_div_2_tr_15_span_4_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 63)(6, "div", 67)(7, "div", 68)(8, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template_input_ngModelChange_8_listener($event) {
      const d_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(d_r9.presensiLokasiMulai, $event) || (d_r9.presensiLokasiMulai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 70);
    \u0275\u0275text(10, "Mulai Lembur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 68)(12, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template_input_ngModelChange_12_listener($event) {
      const d_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(d_r9.presensiLokasiSelesai, $event) || (d_r9.presensiLokasiSelesai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 70);
    \u0275\u0275text(14, "Selesai Lembur");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td", 63)(16, "select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template_select_ngModelChange_16_listener($event) {
      const d_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(d_r9.catatanMulaiLembur, $event) || (d_r9.catatanMulaiLembur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, PengaturanLemburComponent_div_25_div_9_div_2_tr_15_option_17_Template, 2, 2, "option", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 63)(19, "select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template_select_ngModelChange_19_listener($event) {
      const d_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(d_r9.catatanSelesaiLembur, $event) || (d_r9.catatanSelesaiLembur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, PengaturanLemburComponent_div_25_div_9_div_2_tr_15_option_20_Template, 2, 2, "option", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 63)(22, "div", 73)(23, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template_input_ngModelChange_23_listener($event) {
      const d_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(d_r9.cegahTanpaJadwal, $event) || (d_r9.cegahTanpaJadwal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 74);
    \u0275\u0275text(25, " Cegah presensi lembur tanpa jadwal ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r9.nama);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r9.polaMinggu);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", d_r9.presensiLokasiMulai);
    \u0275\u0275property("id", "ml-" + d_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", "ml-" + d_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", d_r9.presensiLokasiSelesai);
    \u0275\u0275property("id", "sl-" + d_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", "sl-" + d_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", d_r9.catatanMulaiLembur);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.catatanOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", d_r9.catatanSelesaiLembur);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.catatanOptions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", d_r9.cegahTanpaJadwal);
    \u0275\u0275property("id", "cj-" + d_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", "cj-" + d_r9.id);
  }
}
function PengaturanLemburComponent_div_25_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "table", 61)(2, "thead", 62)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 63);
    \u0275\u0275text(7, "Presensi Sesuai Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 63);
    \u0275\u0275text(9, "Catatan Mulai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 63);
    \u0275\u0275text(11, "Catatan Selesai Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 63);
    \u0275\u0275text(13, "Jadwal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, PengaturanLemburComponent_div_25_div_9_div_2_tr_15_Template, 26, 15, "tr", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.filteredDivisi);
  }
}
function PengaturanLemburComponent_div_25_div_9_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function PengaturanLemburComponent_div_25_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function PengaturanLemburComponent_div_25_div_9_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveDivisi());
    });
    \u0275\u0275template(2, PengaturanLemburComponent_div_25_div_9_div_3_span_2_Template, 1, 0, "span", 32);
    \u0275\u0275text(3, " Simpan Perubahan ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.divisiSaving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.divisiSaving());
  }
}
function PengaturanLemburComponent_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PengaturanLemburComponent_div_25_div_9_div_1_Template, 4, 0, "div", 15)(2, PengaturanLemburComponent_div_25_div_9_div_2_Template, 16, 1, "div", 56)(3, PengaturanLemburComponent_div_25_div_9_div_3_Template, 4, 2, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredDivisi.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredDivisi.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredDivisi.length > 0);
  }
}
function PengaturanLemburComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PengaturanLemburComponent_div_25_div_1_Template, 2, 1, "div", 13)(2, PengaturanLemburComponent_div_25_div_2_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52)(5, "input", 53);
    \u0275\u0275listener("input", function PengaturanLemburComponent_div_25_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.divisiSearch.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275element(7, "i", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, PengaturanLemburComponent_div_25_div_8_Template, 3, 0, "div", 15)(9, PengaturanLemburComponent_div_25_div_9_Template, 4, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.divisiError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.divisiSuccess());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.divisiSearch());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.divisiLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.divisiLoading());
  }
}
var PengaturanLemburComponent = class _PengaturanLemburComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.activeTab = signal("JADWAL", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tarifList = signal([], ...ngDevMode ? [{ debugName: "tarifList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tarifLoading = signal(false, ...ngDevMode ? [{ debugName: "tarifLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tarifSaving = signal(false, ...ngDevMode ? [{ debugName: "tarifSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tarifError = signal("", ...ngDevMode ? [{ debugName: "tarifError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tarifSuccess = signal("", ...ngDevMode ? [{ debugName: "tarifSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiLoading = signal(false, ...ngDevMode ? [{ debugName: "divisiLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiSaving = signal(false, ...ngDevMode ? [{ debugName: "divisiSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiError = signal("", ...ngDevMode ? [{ debugName: "divisiError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiSuccess = signal("", ...ngDevMode ? [{ debugName: "divisiSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiSearch = signal("", ...ngDevMode ? [{ debugName: "divisiSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jadwalLoading = signal(false, ...ngDevMode ? [{ debugName: "jadwalLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jadwalSaving = signal(false, ...ngDevMode ? [{ debugName: "jadwalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jadwalError = signal("", ...ngDevMode ? [{ debugName: "jadwalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jadwalSuccess = signal("", ...ngDevMode ? [{ debugName: "jadwalSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cegahPresensiTanpaJadwal = signal(false, ...ngDevMode ? [{ debugName: "cegahPresensiTanpaJadwal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kirimNotifikasiJadwal = signal(true, ...ngDevMode ? [{ debugName: "kirimNotifikasiJadwal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.menitSebelumJadwal = signal(null, ...ngDevMode ? [{ debugName: "menitSebelumJadwal" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  get catatanOptions() {
    return ["Tidak Dibutuhkan", "Opsional", "Dibutuhkan"];
  }
  get filteredDivisi() {
    const q = this.divisiSearch().toLowerCase();
    if (!q)
      return this.divisiList();
    return this.divisiList().filter((d) => d.nama.toLowerCase().includes(q));
  }
  ngOnInit() {
    this.loadTarif();
    this.loadDivisi();
    this.loadJadwal();
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  // ── Tarif Upah ────────────────────────────────────────
  loadTarif() {
    this.tarifLoading.set(true);
    this.http.get(`${environment.apiUrl}/lembur/tarif-upah`).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.tarifList.set(data);
        } else {
          this.tarifList.set(this.defaultTarif());
        }
        this.tarifLoading.set(false);
      },
      error: () => {
        this.tarifList.set(this.defaultTarif());
        this.tarifLoading.set(false);
      }
    });
  }
  defaultTarif() {
    return Array.from({ length: 14 }, (_, i) => ({
      jamLembur: i + 1,
      hariKerja: i === 0 ? 1.5 : 2,
      hariLibur5HariKerja: 2,
      hariLibur6HariKerja: i === 7 ? 3 : 2
    }));
  }
  saveTarif() {
    this.tarifSaving.set(true);
    this.tarifError.set("");
    this.tarifSuccess.set("");
    this.http.post(`${environment.apiUrl}/lembur/tarif-upah`, this.tarifList()).subscribe({
      next: () => {
        this.tarifSuccess.set("Aturan upah lembur berhasil disimpan.");
        this.tarifSaving.set(false);
        setTimeout(() => this.tarifSuccess.set(""), 3e3);
      },
      error: () => {
        this.tarifError.set("Gagal menyimpan. Silakan coba lagi.");
        this.tarifSaving.set(false);
      }
    });
  }
  // ── Divisi ────────────────────────────────────────────
  loadDivisi() {
    this.divisiLoading.set(true);
    this.http.get(`${environment.apiUrl}/lembur/divisi-pengaturan`).subscribe({
      next: (data) => {
        this.divisiList.set(data);
        this.divisiLoading.set(false);
      },
      error: () => {
        this.divisiLoading.set(false);
      }
    });
  }
  saveDivisi() {
    this.divisiSaving.set(true);
    this.divisiError.set("");
    this.divisiSuccess.set("");
    this.http.put(`${environment.apiUrl}/lembur/divisi-pengaturan`, this.divisiList()).subscribe({
      next: () => {
        this.divisiSuccess.set("Pengaturan divisi berhasil disimpan.");
        this.divisiSaving.set(false);
        setTimeout(() => this.divisiSuccess.set(""), 3e3);
      },
      error: () => {
        this.divisiError.set("Gagal menyimpan. Silakan coba lagi.");
        this.divisiSaving.set(false);
      }
    });
  }
  // ── Jadwal ────────────────────────────────────────────
  loadJadwal() {
    this.jadwalLoading.set(true);
    this.http.get(`${environment.apiUrl}/lembur/jadwal-setting`).subscribe({
      next: (data) => {
        if (data) {
          this.cegahPresensiTanpaJadwal.set(data.cegahPresensiTanpaJadwal ?? false);
          this.kirimNotifikasiJadwal.set(data.kirimNotifikasiJadwal ?? true);
          this.menitSebelumJadwal.set(data.menitSebelumJadwal ?? null);
        }
        this.jadwalLoading.set(false);
      },
      error: () => {
        this.jadwalLoading.set(false);
      }
    });
  }
  saveJadwal() {
    this.jadwalSaving.set(true);
    this.jadwalError.set("");
    this.jadwalSuccess.set("");
    const payload = {
      cegahPresensiTanpaJadwal: this.cegahPresensiTanpaJadwal(),
      kirimNotifikasiJadwal: this.kirimNotifikasiJadwal(),
      menitSebelumJadwal: this.menitSebelumJadwal()
    };
    this.http.post(`${environment.apiUrl}/lembur/jadwal-setting`, payload).subscribe({
      next: () => {
        this.jadwalSuccess.set("Pengaturan jadwal berhasil disimpan.");
        this.jadwalSaving.set(false);
        setTimeout(() => this.jadwalSuccess.set(""), 3e3);
      },
      error: () => {
        this.jadwalError.set("Gagal menyimpan. Silakan coba lagi.");
        this.jadwalSaving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function PengaturanLemburComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PengaturanLemburComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PengaturanLemburComponent, selectors: [["app-pengaturan-lembur"]], decls: 26, vars: 15, consts: [[1, "mb-3"], [1, "fw-bold", "mb-0"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", 2, "font-size", ".82rem"], [1, "breadcrumb-item"], ["routerLink", "/dashboard", 1, "text-primary", "text-decoration-none"], [1, "text-primary"], [1, "breadcrumb-item", "active"], [1, "card", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "gap-2", "mb-4"], [1, "btn", "btn-sm", "px-4", "fw-semibold", 3, "click"], [4, "ngIf"], ["class", "alert alert-danger py-2", 4, "ngIf"], ["class", "alert alert-success py-2", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "py-3", 4, "ngIf"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "text-center", "py-5", "text-muted"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "py-3"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "role", "switch", "id", "cegahPresensi", 1, "form-check-input", 2, "width", "2.5em", "height", "1.3em", "cursor", "pointer", 3, "change", "checked"], ["for", "cegahPresensi", 1, "mb-0", 2, "font-size", ".9rem", "cursor", "pointer"], [1, "d-flex", "align-items-center", "gap-3", "mb-2"], ["type", "checkbox", "role", "switch", "id", "kirimNotif", 1, "form-check-input", 2, "width", "2.5em", "height", "1.3em", "cursor", "pointer", 3, "change", "checked"], ["for", "kirimNotif", 1, "mb-0", 2, "font-size", ".9rem", "cursor", "pointer"], ["class", "ms-5 mb-4", 4, "ngIf"], [1, "mt-3"], [1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "ms-5", "mb-4"], [1, "input-group", 2, "max-width", "240px"], ["type", "number", "min", "1", "placeholder", "", 1, "form-control", "form-control-sm", 3, "change", "value"], [1, "input-group-text", 2, "font-size", ".82rem"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "row"], [1, "col-md-9", "col-lg-8"], [1, "row", "fw-semibold", "text-center", "mb-2", "border-bottom", "pb-2", 2, "font-size", ".82rem"], [1, "col-3", "text-start", 2, "color", "#6366f1"], [1, "col-3"], [1, "col-2"], ["class", "row align-items-center py-2 border-bottom", "style", "font-size:.85rem", 4, "ngFor", "ngForOf"], [1, "mt-4"], [1, "row", "align-items-center", "py-2", "border-bottom", 2, "font-size", ".85rem"], [1, "col-3", "text-muted"], [1, "input-group", "input-group-sm", 2, "max-width", "90px"], ["type", "number", "min", "0", "step", "0.5", 1, "form-control", "form-control-sm", "text-center", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], [1, "d-flex", "gap-2", "mb-3"], [1, "input-group", 2, "max-width", "260px"], ["type", "text", "placeholder", "Cari", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bx", "bx-search"], ["class", "table-responsive", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "bx", "bx-group", 2, "font-size", "2.5rem"], [1, "mt-2", "mb-0"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", 2, "font-size", ".85rem"], [1, "table-light"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fw-semibold"], ["class", "badge ms-1", "style", "background:#fef9c3;color:#92400e;font-size:.7rem", 4, "ngIf"], [1, "d-flex", "justify-content-center", "gap-3"], [1, "form-check", "form-check-inline", "mb-0"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel", "id"], [1, "form-check-label", "small", 3, "for"], [1, "form-select", "form-select-sm", 2, "min-width", "150px", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check", "mb-0", "d-flex", "justify-content-center"], [1, "form-check-label", "small", "ms-1", 3, "for"], [1, "badge", "ms-1", 2, "background", "#fef9c3", "color", "#92400e", "font-size", ".7rem"], [3, "value"]], template: function PengaturanLemburComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "h4", 1);
        \u0275\u0275text(3, "Pengaturan Lembur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "ol", 3)(6, "li", 4)(7, "a", 5);
        \u0275\u0275text(8, "Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 4)(10, "span", 6);
        \u0275\u0275text(11, "Lembur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 7);
        \u0275\u0275text(13, "Pengaturan Lembur");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "button", 11);
        \u0275\u0275listener("click", function PengaturanLemburComponent_Template_button_click_17_listener() {
          return ctx.setTab("JADWAL");
        });
        \u0275\u0275text(18, "Jadwal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function PengaturanLemburComponent_Template_button_click_19_listener() {
          return ctx.setTab("ATURAN_UPAH");
        });
        \u0275\u0275text(20, "Aturan Upah Lembur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275listener("click", function PengaturanLemburComponent_Template_button_click_21_listener() {
          return ctx.setTab("DIVISI");
        });
        \u0275\u0275text(22, "Divisi");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, PengaturanLemburComponent_div_23_Template, 5, 4, "div", 12)(24, PengaturanLemburComponent_div_24_Template, 5, 4, "div", 12)(25, PengaturanLemburComponent_div_25_Template, 10, 5, "div", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "JADWAL")("btn-outline-secondary", ctx.activeTab() !== "JADWAL");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "ATURAN_UPAH")("btn-outline-secondary", ctx.activeTab() !== "ATURAN_UPAH");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.activeTab() === "DIVISI")("btn-outline-secondary", ctx.activeTab() !== "DIVISI");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab() === "JADWAL");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "ATURAN_UPAH");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab() === "DIVISI");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PengaturanLemburComponent, [{
    type: Component,
    args: [{ selector: "app-pengaturan-lembur", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
  <div class="mb-3">\r
    <h4 class="fw-bold mb-0">Pengaturan Lembur</h4>\r
    <nav aria-label="breadcrumb">\r
      <ol class="breadcrumb mb-0" style="font-size:.82rem">\r
        <li class="breadcrumb-item"><a routerLink="/dashboard" class="text-primary text-decoration-none">Dasbor</a></li>\r
        <li class="breadcrumb-item"><span class="text-primary">Lembur</span></li>\r
        <li class="breadcrumb-item active">Pengaturan Lembur</li>\r
      </ol>\r
    </nav>\r
  </div>\r
\r
  <div class="card shadow-sm border-0">\r
    <div class="card-body">\r
\r
      <!-- Tabs -->\r
      <div class="d-flex gap-2 mb-4">\r
        <button class="btn btn-sm px-4 fw-semibold"\r
          [class.btn-primary]="activeTab()==='JADWAL'" [class.btn-outline-secondary]="activeTab()!=='JADWAL'"\r
          (click)="setTab('JADWAL')">Jadwal</button>\r
        <button class="btn btn-sm px-4 fw-semibold"\r
          [class.btn-primary]="activeTab()==='ATURAN_UPAH'" [class.btn-outline-secondary]="activeTab()!=='ATURAN_UPAH'"\r
          (click)="setTab('ATURAN_UPAH')">Aturan Upah Lembur</button>\r
        <button class="btn btn-sm px-4 fw-semibold"\r
          [class.btn-primary]="activeTab()==='DIVISI'" [class.btn-outline-secondary]="activeTab()!=='DIVISI'"\r
          (click)="setTab('DIVISI')">Divisi</button>\r
      </div>\r
\r
      <!-- ==================== TAB: JADWAL ==================== -->\r
      <div *ngIf="activeTab()==='JADWAL'">\r
        <div *ngIf="jadwalError()" class="alert alert-danger py-2">{{ jadwalError() }}</div>\r
        <div *ngIf="jadwalSuccess()" class="alert alert-success py-2">{{ jadwalSuccess() }}</div>\r
\r
        <div *ngIf="jadwalLoading()" class="text-center py-5 text-muted">\r
          <div class="spinner-border spinner-border-sm me-2"></div>Memuat...\r
        </div>\r
\r
        <div *ngIf="!jadwalLoading()" class="py-3">\r
          <!-- Toggle 1 -->\r
          <div class="d-flex align-items-center gap-3 mb-3">\r
            <div class="form-check form-switch mb-0">\r
              <input class="form-check-input" type="checkbox" role="switch" id="cegahPresensi"\r
                [checked]="cegahPresensiTanpaJadwal()"\r
                (change)="cegahPresensiTanpaJadwal.set($any($event.target).checked)"\r
                style="width:2.5em;height:1.3em;cursor:pointer">\r
            </div>\r
            <label for="cegahPresensi" class="mb-0" style="font-size:.9rem;cursor:pointer">\r
              Karyawan yang ada jadwal lembur hanya bisa presensi lembur sesuai jadwal\r
            </label>\r
          </div>\r
\r
          <!-- Toggle 2 -->\r
          <div class="d-flex align-items-center gap-3 mb-2">\r
            <div class="form-check form-switch mb-0">\r
              <input class="form-check-input" type="checkbox" role="switch" id="kirimNotif"\r
                [checked]="kirimNotifikasiJadwal()"\r
                (change)="kirimNotifikasiJadwal.set($any($event.target).checked)"\r
                style="width:2.5em;height:1.3em;cursor:pointer">\r
            </div>\r
            <label for="kirimNotif" class="mb-0" style="font-size:.9rem;cursor:pointer">\r
              Pengiriman notifikasi jadwal lembur ke semua karyawan yang mempunyai jadwal\r
            </label>\r
          </div>\r
\r
          <!-- Menit Sebelum Jadwal (visible when notif is on) -->\r
          <div *ngIf="kirimNotifikasiJadwal()" class="ms-5 mb-4">\r
            <div class="input-group" style="max-width:240px">\r
              <input type="number" class="form-control form-control-sm" min="1"\r
                placeholder=""\r
                [value]="menitSebelumJadwal()"\r
                (change)="menitSebelumJadwal.set(+$any($event.target).value || null)">\r
              <span class="input-group-text" style="font-size:.82rem">Menit Sebelum Jadwal</span>\r
            </div>\r
          </div>\r
\r
          <div class="mt-3">\r
            <button class="btn btn-primary px-4" (click)="saveJadwal()" [disabled]="jadwalSaving()">\r
              <span *ngIf="jadwalSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ==================== TAB: ATURAN UPAH LEMBUR ==================== -->\r
      <div *ngIf="activeTab()==='ATURAN_UPAH'">\r
        <div *ngIf="tarifError()" class="alert alert-danger py-2">{{ tarifError() }}</div>\r
        <div *ngIf="tarifSuccess()" class="alert alert-success py-2">{{ tarifSuccess() }}</div>\r
\r
        <div *ngIf="tarifLoading()" class="text-center py-5 text-muted">\r
          <div class="spinner-border spinner-border-sm me-2"></div>Memuat...\r
        </div>\r
\r
        <div *ngIf="!tarifLoading()">\r
          <div class="row">\r
            <div class="col-md-9 col-lg-8">\r
              <!-- Label header -->\r
              <div class="row fw-semibold text-center mb-2 border-bottom pb-2" style="font-size:.82rem">\r
                <div class="col-3 text-start" style="color:#6366f1">Tarif Upah</div>\r
                <div class="col-3">Jam Lembur</div>\r
                <div class="col-2">Hari Kerja</div>\r
                <div class="col-2">(hari libur)<br>5 Hari Kerja</div>\r
                <div class="col-2">(hari libur)<br>6 Hari Kerja</div>\r
              </div>\r
\r
              <!-- Rows -->\r
              <div class="row align-items-center py-2 border-bottom"\r
                   *ngFor="let t of tarifList()"\r
                   style="font-size:.85rem">\r
                <div class="col-3"></div>\r
                <div class="col-3 text-muted">{{ t.jamLembur }} jam</div>\r
                <div class="col-2">\r
                  <div class="input-group input-group-sm" style="max-width:90px">\r
                    <input type="number" class="form-control form-control-sm text-center"\r
                      [(ngModel)]="t.hariKerja" min="0" step="0.5">\r
                    <span class="input-group-text">x</span>\r
                  </div>\r
                </div>\r
                <div class="col-2">\r
                  <div class="input-group input-group-sm" style="max-width:90px">\r
                    <input type="number" class="form-control form-control-sm text-center"\r
                      [(ngModel)]="t.hariLibur5HariKerja" min="0" step="0.5">\r
                    <span class="input-group-text">x</span>\r
                  </div>\r
                </div>\r
                <div class="col-2">\r
                  <div class="input-group input-group-sm" style="max-width:90px">\r
                    <input type="number" class="form-control form-control-sm text-center"\r
                      [(ngModel)]="t.hariLibur6HariKerja" min="0" step="0.5">\r
                    <span class="input-group-text">x</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="mt-4">\r
            <button class="btn btn-primary px-4" (click)="saveTarif()" [disabled]="tarifSaving()">\r
              <span *ngIf="tarifSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
              Simpan Perubahan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ==================== TAB: DIVISI ==================== -->\r
      <div *ngIf="activeTab()==='DIVISI'">\r
        <div *ngIf="divisiError()" class="alert alert-danger py-2">{{ divisiError() }}</div>\r
        <div *ngIf="divisiSuccess()" class="alert alert-success py-2">{{ divisiSuccess() }}</div>\r
\r
        <!-- Search -->\r
        <div class="d-flex gap-2 mb-3">\r
          <div class="input-group" style="max-width:260px">\r
            <input type="text" class="form-control form-control-sm" placeholder="Cari"\r
              [value]="divisiSearch()" (input)="divisiSearch.set($any($event.target).value)">\r
            <button class="btn btn-outline-secondary btn-sm"><i class="bx bx-search"></i></button>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="divisiLoading()" class="text-center py-5 text-muted">\r
          <div class="spinner-border spinner-border-sm me-2"></div>Memuat...\r
        </div>\r
\r
        <div *ngIf="!divisiLoading()">\r
          <div *ngIf="filteredDivisi.length === 0" class="text-center py-5 text-muted">\r
            <i class="bx bx-group" style="font-size:2.5rem"></i>\r
            <p class="mt-2 mb-0">Tidak ada data divisi.</p>\r
          </div>\r
\r
          <div class="table-responsive" *ngIf="filteredDivisi.length > 0">\r
            <table class="table table-hover align-middle" style="font-size:.85rem">\r
              <thead class="table-light">\r
                <tr>\r
                  <th>Nama</th>\r
                  <th class="text-center">Presensi Sesuai Lokasi</th>\r
                  <th class="text-center">Catatan Mulai Lembur</th>\r
                  <th class="text-center">Catatan Selesai Lembur</th>\r
                  <th class="text-center">Jadwal</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let d of filteredDivisi">\r
                  <td>\r
                    <span class="fw-semibold">{{ d.nama }}</span>\r
                    <span *ngIf="d.polaMinggu" class="badge ms-1"\r
                      style="background:#fef9c3;color:#92400e;font-size:.7rem">{{ d.polaMinggu }}</span>\r
                  </td>\r
                  <td class="text-center">\r
                    <div class="d-flex justify-content-center gap-3">\r
                      <div class="form-check form-check-inline mb-0">\r
                        <input class="form-check-input" type="checkbox"\r
                          [(ngModel)]="d.presensiLokasiMulai" [id]="'ml-'+d.id">\r
                        <label class="form-check-label small" [for]="'ml-'+d.id">Mulai Lembur</label>\r
                      </div>\r
                      <div class="form-check form-check-inline mb-0">\r
                        <input class="form-check-input" type="checkbox"\r
                          [(ngModel)]="d.presensiLokasiSelesai" [id]="'sl-'+d.id">\r
                        <label class="form-check-label small" [for]="'sl-'+d.id">Selesai Lembur</label>\r
                      </div>\r
                    </div>\r
                  </td>\r
                  <td class="text-center">\r
                    <select class="form-select form-select-sm" style="min-width:150px"\r
                      [(ngModel)]="d.catatanMulaiLembur">\r
                      <option *ngFor="let opt of catatanOptions" [value]="opt">{{ opt }}</option>\r
                    </select>\r
                  </td>\r
                  <td class="text-center">\r
                    <select class="form-select form-select-sm" style="min-width:150px"\r
                      [(ngModel)]="d.catatanSelesaiLembur">\r
                      <option *ngFor="let opt of catatanOptions" [value]="opt">{{ opt }}</option>\r
                    </select>\r
                  </td>\r
                  <td class="text-center">\r
                    <div class="form-check mb-0 d-flex justify-content-center">\r
                      <input class="form-check-input" type="checkbox"\r
                        [(ngModel)]="d.cegahTanpaJadwal" [id]="'cj-'+d.id">\r
                      <label class="form-check-label small ms-1" [for]="'cj-'+d.id">\r
                        Cegah presensi lembur tanpa jadwal\r
                      </label>\r
                    </div>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
\r
          <div class="mt-3" *ngIf="filteredDivisi.length > 0">\r
            <button class="btn btn-primary px-4" (click)="saveDivisi()" [disabled]="divisiSaving()">\r
              <span *ngIf="divisiSaving()" class="spinner-border spinner-border-sm me-1"></span>\r
              Simpan Perubahan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PengaturanLemburComponent, { className: "PengaturanLemburComponent", filePath: "src/app/features/lembur/pengaturan-lembur/pengaturan-lembur.component.ts", lineNumber: 36 });
})();
export {
  PengaturanLemburComponent
};
//# sourceMappingURL=chunk-Q57KKELE.js.map
