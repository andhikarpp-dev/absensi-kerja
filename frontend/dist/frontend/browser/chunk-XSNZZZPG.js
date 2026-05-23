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
  FormsModule
} from "./chunk-DVNMOIF6.js";
import "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/lokasi/lokasi-form/lokasi-form.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function LokasiFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LokasiFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275text(2, "Memuat data\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function LokasiFormComponent_Conditional_22_Conditional_58_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, "Tidak ada divisi tersedia.");
    \u0275\u0275elementEnd();
  }
}
function LokasiFormComponent_Conditional_22_Conditional_58_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 41)(2, "input", 66);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Conditional_58_Conditional_2_For_2_Template_input_change_2_listener($event) {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleDivisi(d_r4.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "div-" + d_r4.id)("checked", ctx_r0.isDivisiChecked(d_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "div-" + d_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r4.namaDivisi, " ");
  }
}
function LokasiFormComponent_Conditional_22_Conditional_58_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275repeaterCreate(1, LokasiFormComponent_Conditional_22_Conditional_58_Conditional_2_For_2_Template, 5, 4, "div", 65, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.divisiList());
  }
}
function LokasiFormComponent_Conditional_22_Conditional_58_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, " Terpilih: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " divisi ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.form().divisiIds) == null ? null : tmp_3_0.length);
  }
}
function LokasiFormComponent_Conditional_22_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275conditionalCreate(1, LokasiFormComponent_Conditional_22_Conditional_58_Conditional_1_Template, 2, 0, "div", 62)(2, LokasiFormComponent_Conditional_22_Conditional_58_Conditional_2_Template, 3, 0, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LokasiFormComponent_Conditional_22_Conditional_58_Conditional_3_Template, 5, 1, "div", 64);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.divisiList().length === 0 ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((((tmp_3_0 = ctx_r0.form().divisiIds) == null ? null : tmp_3_0.length) ?? 0) > 0 ? 3 : -1);
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, "Tidak ada karyawan cocok.");
    \u0275\u0275elementEnd();
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", k_r7.nip);
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 41)(2, "input", 66);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_For_2_Template_input_change_2_listener($event) {
      const k_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleKaryawan(k_r7.id, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 67);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_For_2_Conditional_5_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "kar-" + k_r7.id)("checked", ctx_r0.isKaryawanChecked(k_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "kar-" + k_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r7.namaLengkap, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r7.nip ? 5 : -1);
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275repeaterCreate(1, LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_For_2_Template, 6, 5, "div", 65, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredKaryawan());
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "i", 74);
    \u0275\u0275listener("click", function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_4_For_8_Template_i_click_2_listener() {
      const id_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.hapusKaryawanTerpilih(id_r9));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.namaKaryawanById(id_r9), " ");
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 71);
    \u0275\u0275text(2, " Terpilih: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " karyawan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72);
    \u0275\u0275repeaterCreate(7, LokasiFormComponent_Conditional_22_Conditional_59_Conditional_4_For_8_Template, 3, 1, "span", 73, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.form().karyawanIds) == null ? null : tmp_3_0.length);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.form().karyawanIds ?? \u0275\u0275pureFunction0(1, _c0));
  }
}
function LokasiFormComponent_Conditional_22_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 68);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Conditional_59_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.karyawanKeyword.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275conditionalCreate(2, LokasiFormComponent_Conditional_22_Conditional_59_Conditional_2_Template, 2, 0, "div", 62)(3, LokasiFormComponent_Conditional_22_Conditional_59_Conditional_3_Template, 3, 0, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LokasiFormComponent_Conditional_22_Conditional_59_Conditional_4_Template, 9, 2, "div", 10);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.karyawanKeyword());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filteredKaryawan().length === 0 ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((((tmp_4_0 = ctx_r0.form().karyawanIds) == null ? null : tmp_4_0.length) ?? 0) > 0 ? 4 : -1);
  }
}
function LokasiFormComponent_Conditional_22_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2, " Pastikan mesin Fingerspot sudah terhubung ke jaringan dan ter-sinkron dengan server (pull data presensi). ");
    \u0275\u0275elementEnd();
  }
}
function LokasiFormComponent_Conditional_22_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function LokasiFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h6", 17);
    \u0275\u0275text(1, "Informasi Umum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 19)(4, "label", 20);
    \u0275\u0275text(5, "Nama Lokasi ");
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 22);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("namaLokasi", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23)(10, "label", 24);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25)(13, "input", 26);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("aktif", $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 28)(17, "label", 20);
    \u0275\u0275text(18, "Alamat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 29);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_textarea_input_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("alamat", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "h6", 17);
    \u0275\u0275text(21, " Geofence (Presensi via Aplikasi) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 30)(23, "div", 23)(24, "label", 20);
    \u0275\u0275text(25, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 31);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("latitude", $event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 23)(28, "label", 20);
    \u0275\u0275text(29, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 32);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("longitude", $event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23)(32, "label", 20);
    \u0275\u0275text(33, "Radius (meter)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 33);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("radiusMeter", $event.target.value === "" ? 0 : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 34)(36, "button", 35);
    \u0275\u0275listener("click", function LokasiFormComponent_Conditional_22_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ambilLokasiSaya());
    });
    \u0275\u0275element(37, "i", 36);
    \u0275\u0275text(38, " Gunakan Lokasi Saya ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 37);
    \u0275\u0275listener("click", function LokasiFormComponent_Conditional_22_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bukaPeta());
    });
    \u0275\u0275element(40, "i", 38);
    \u0275\u0275text(41, " Lihat di Google Maps ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(42, "hr", 39);
    \u0275\u0275elementStart(43, "h6", 17);
    \u0275\u0275text(44, " Karyawan Ditugaskan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 40)(46, "div", 41)(47, "input", 42);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Template_input_change_47_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTarget("SEMUA"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "label", 43);
    \u0275\u0275text(49, "Semua Karyawan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 41)(51, "input", 44);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Template_input_change_51_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTarget("DIVISI"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "label", 45);
    \u0275\u0275text(53, "Spesifik Divisi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 41)(55, "input", 46);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Template_input_change_55_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTarget("KARYAWAN"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "label", 47);
    \u0275\u0275text(57, "Spesifik Karyawan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(58, LokasiFormComponent_Conditional_22_Conditional_58_Template, 4, 2);
    \u0275\u0275conditionalCreate(59, LokasiFormComponent_Conditional_22_Conditional_59_Template, 5, 3);
    \u0275\u0275element(60, "hr", 39);
    \u0275\u0275elementStart(61, "h6", 17);
    \u0275\u0275text(62, " Pengaturan Mesin Fingerspot ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 48)(64, "input", 49);
    \u0275\u0275listener("change", function LokasiFormComponent_Conditional_22_Template_input_change_64_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("hanyaFingerspot", $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "label", 50);
    \u0275\u0275text(66, " Presensi hanya dapat dilakukan melalui mesin Fingerspot ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 51);
    \u0275\u0275text(68, " Jika diaktifkan, karyawan ");
    \u0275\u0275elementStart(69, "strong");
    \u0275\u0275text(70, "tidak dapat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " melakukan presensi via aplikasi mobile/web pada lokasi ini \u2014 wajib menggunakan mesin Fingerspot terdaftar di bawah. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(72, LokasiFormComponent_Conditional_22_Conditional_72_Template, 3, 0, "div", 52);
    \u0275\u0275elementStart(73, "div", 53)(74, "div", 23)(75, "label", 20);
    \u0275\u0275text(76, "Serial Number (SN)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "input", 54);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_77_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("fingerspotSn", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 23)(79, "label", 20);
    \u0275\u0275text(80, "IP / Hostname");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 55);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_81_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("fingerspotIp", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 23)(83, "label", 20);
    \u0275\u0275text(84, "Port");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 56);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_85_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("fingerspotPort", $event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 28)(87, "label", 20);
    \u0275\u0275text(88, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "input", 57);
    \u0275\u0275listener("input", function LokasiFormComponent_Conditional_22_Template_input_input_89_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.upd("fingerspotCatatan", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(90, "hr", 39);
    \u0275\u0275elementStart(91, "div", 58)(92, "a", 59);
    \u0275\u0275text(93, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 60);
    \u0275\u0275listener("click", function LokasiFormComponent_Conditional_22_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(95, LokasiFormComponent_Conditional_22_Conditional_95_Template, 1, 0, "span", 16);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.form().namaLokasi);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.form().aktif);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.form().aktif ? "Aktif" : "Nonaktif", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.form().alamat ?? "");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.form().latitude ?? "");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.form().longitude ?? "");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.form().radiusMeter ?? 100);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.form().latitude == null || ctx_r0.form().longitude == null);
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx_r0.form().targetTipe === "SEMUA");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r0.form().targetTipe === "DIVISI");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r0.form().targetTipe === "KARYAWAN");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.form().targetTipe === "DIVISI" ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().targetTipe === "KARYAWAN" ? 59 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.form().hanyaFingerspot);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.form().hanyaFingerspot ? 72 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.form().fingerspotSn ?? "");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.form().fingerspotIp ?? "");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.form().fingerspotPort ?? "");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.form().fingerspotCatatan ?? "");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 95 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEdit() ? "Simpan Perubahan" : "Simpan", " ");
  }
}
var LokasiFormComponent = class _LokasiFormComponent {
  constructor() {
    this.svc = inject(LokasiKehadiranService);
    this.divSvc = inject(DivisiService);
    this.karSvc = inject(KaryawanService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.id = signal(null, ...ngDevMode ? [{ debugName: "id" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isEdit = computed(() => this.id() !== null, ...ngDevMode ? [{ debugName: "isEdit" }] : (
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
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanList = signal([], ...ngDevMode ? [{ debugName: "karyawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.karyawanKeyword = signal("", ...ngDevMode ? [{ debugName: "karyawanKeyword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = signal({
      namaLokasi: "",
      alamat: "",
      latitude: null,
      longitude: null,
      radiusMeter: 100,
      aktif: true,
      targetTipe: "SEMUA",
      divisiIds: [],
      karyawanIds: [],
      hanyaFingerspot: false,
      fingerspotSn: "",
      fingerspotIp: "",
      fingerspotPort: 80,
      fingerspotCatatan: ""
    }, ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.divSvc.findAll().subscribe({
      next: (l) => this.divisiList.set(l),
      error: () => {
      }
    });
    this.karSvc.findAll().subscribe({
      next: (l) => this.karyawanList.set(l),
      error: () => {
      }
    });
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.id.set(+idParam);
      this.loadDetail(+idParam);
    }
  }
  loadDetail(id) {
    this.loading.set(true);
    this.svc.findById(id).subscribe({
      next: (k) => {
        this.loading.set(false);
        this.form.set({
          namaLokasi: k.namaLokasi ?? "",
          alamat: k.alamat ?? "",
          latitude: k.latitude ?? null,
          longitude: k.longitude ?? null,
          radiusMeter: k.radiusMeter ?? 100,
          aktif: k.aktif ?? true,
          targetTipe: k.targetTipe ?? "SEMUA",
          divisiIds: (k.divisiTugas ?? []).map((d) => d.id),
          karyawanIds: (k.karyawanTugas ?? []).map((x) => x.id),
          hanyaFingerspot: k.hanyaFingerspot ?? false,
          fingerspotSn: k.fingerspotSn ?? "",
          fingerspotIp: k.fingerspotIp ?? "",
          fingerspotPort: k.fingerspotPort ?? 80,
          fingerspotCatatan: k.fingerspotCatatan ?? ""
        });
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? "Gagal memuat detail lokasi.");
      }
    });
  }
  upd(field, value) {
    this.form.set(__spreadProps(__spreadValues({}, this.form()), { [field]: value }));
  }
  // ── Target / Penugasan ───────────────────────────────────
  setTarget(t) {
    this.form.set(__spreadProps(__spreadValues({}, this.form()), {
      targetTipe: t,
      divisiIds: t === "DIVISI" ? this.form().divisiIds ?? [] : [],
      karyawanIds: t === "KARYAWAN" ? this.form().karyawanIds ?? [] : []
    }));
  }
  toggleDivisi(id, checked) {
    const cur = this.form().divisiIds ?? [];
    const next = checked ? Array.from(/* @__PURE__ */ new Set([...cur, id])) : cur.filter((x) => x !== id);
    this.upd("divisiIds", next);
  }
  toggleKaryawan(id, checked) {
    const cur = this.form().karyawanIds ?? [];
    const next = checked ? Array.from(/* @__PURE__ */ new Set([...cur, id])) : cur.filter((x) => x !== id);
    this.upd("karyawanIds", next);
  }
  isDivisiChecked(id) {
    return (this.form().divisiIds ?? []).includes(id);
  }
  isKaryawanChecked(id) {
    return (this.form().karyawanIds ?? []).includes(id);
  }
  /** Filter karyawan berdasar keyword pencarian. */
  filteredKaryawan() {
    const kw = this.karyawanKeyword().trim().toLowerCase();
    let list = this.karyawanList();
    if (kw)
      list = list.filter((k) => k.namaLengkap?.toLowerCase().includes(kw) || k.nip?.toLowerCase().includes(kw));
    return list.slice(0, 100);
  }
  hapusKaryawanTerpilih(id) {
    this.toggleKaryawan(id, false);
  }
  namaKaryawanById(id) {
    return this.karyawanList().find((k) => k.id === id)?.namaLengkap ?? `#${id}`;
  }
  namaDivisiById(id) {
    return this.divisiList().find((d) => d.id === id)?.namaDivisi ?? `#${id}`;
  }
  // ── Geolocation ──
  ambilLokasiSaya() {
    if (!("geolocation" in navigator)) {
      this.error.set("Browser tidak mendukung geolocation.");
      return;
    }
    this.error.set("");
    navigator.geolocation.getCurrentPosition((pos) => {
      this.upd("latitude", +pos.coords.latitude.toFixed(7));
      this.upd("longitude", +pos.coords.longitude.toFixed(7));
    }, (err) => this.error.set("Gagal mengambil lokasi: " + (err.message ?? "unknown")), { enableHighAccuracy: true, timeout: 1e4 });
  }
  bukaPeta() {
    const f = this.form();
    if (f.latitude == null || f.longitude == null)
      return;
    window.open(`https://www.google.com/maps?q=${f.latitude},${f.longitude}`, "_blank");
  }
  simpan() {
    const f = this.form();
    if (!f.namaLokasi?.trim()) {
      this.error.set("Nama lokasi wajib diisi.");
      return;
    }
    if (f.targetTipe === "DIVISI" && (f.divisiIds?.length ?? 0) === 0) {
      this.error.set("Pilih minimal satu divisi.");
      return;
    }
    if (f.targetTipe === "KARYAWAN" && (f.karyawanIds?.length ?? 0) === 0) {
      this.error.set("Pilih minimal satu karyawan.");
      return;
    }
    if (f.hanyaFingerspot && !(f.fingerspotSn?.trim() || f.fingerspotIp?.trim())) {
      this.error.set('Mode "Hanya Fingerspot" aktif. Isi minimal SN atau IP mesin Fingerspot.');
      return;
    }
    this.error.set("");
    this.saving.set(true);
    const obs = this.isEdit() ? this.svc.update(this.id(), f) : this.svc.create(f);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate(["/lokasi"]);
      },
      error: (e) => {
        this.saving.set(false);
        this.error.set(e?.error?.message ?? "Gagal menyimpan lokasi.");
      }
    });
  }
  static {
    this.\u0275fac = function LokasiFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LokasiFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LokasiFormComponent, selectors: [["app-lokasi-form"]], decls: 23, vars: 4, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/lokasi"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "mb-3"], [1, "bx", "bx-map-pin", "me-2"], [1, "alert", "alert-danger", "small"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-4"], [1, "text-center", "py-5", "text-muted"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-uppercase", "small", "fw-bold", "text-muted", "mb-3"], [1, "row", "g-3", "mb-4"], [1, "col-md-8"], [1, "form-label", "small"], [1, "text-danger"], ["type", "text", "placeholder", "Contoh: Kantor Pusat Jakarta", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "col-md-4"], [1, "form-label", "small", "d-block"], [1, "form-check", "form-switch", "mt-1"], ["type", "checkbox", "id", "aktif", 1, "form-check-input", 3, "change", "checked"], ["for", "aktif", 1, "form-check-label", "small"], [1, "col-12"], ["rows", "2", "placeholder", "Alamat lengkap lokasi", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "row", "g-3", "mb-2"], ["type", "number", "step", "0.0000001", "placeholder", "-6.2000000", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "number", "step", "0.0000001", "placeholder", "106.8166700", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "col-12", "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bx", "bx-current-location"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "disabled"], [1, "bx", "bx-map"], [1, "my-4"], [1, "mb-3", "d-flex", "flex-wrap", "gap-3"], [1, "form-check"], ["type", "radio", "id", "tgtSemua", "name", "targetTipe", 1, "form-check-input", 3, "change", "checked"], ["for", "tgtSemua", 1, "form-check-label", "small"], ["type", "radio", "id", "tgtDivisi", "name", "targetTipe", 1, "form-check-input", 3, "change", "checked"], ["for", "tgtDivisi", 1, "form-check-label", "small"], ["type", "radio", "id", "tgtKaryawan", "name", "targetTipe", 1, "form-check-input", 3, "change", "checked"], ["for", "tgtKaryawan", 1, "form-check-label", "small"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "hanyaFingerspot", 1, "form-check-input", 3, "change", "checked"], ["for", "hanyaFingerspot", 1, "form-check-label", "small", "fw-semibold"], [1, "form-text", "small"], [1, "alert", "alert-warning", "py-2", "small", "mb-3"], [1, "row", "g-3"], ["type", "text", "placeholder", "Contoh: FS-12345678", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "text", "placeholder", "192.168.1.100", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "number", "min", "1", "max", "65535", "placeholder", "80", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "text", "placeholder", "Catatan tambahan untuk mesin (opsional)", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "d-flex", "justify-content-end", "gap-2"], ["routerLink", "/lokasi", 1, "btn", "btn-light", "border", "btn-sm", "px-4"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "border", "rounded", "p-3", "mb-3", 2, "max-height", "240px", "overflow", "auto"], [1, "text-muted", "small"], [1, "row", "g-2"], [1, "small", "text-muted", "mb-3"], [1, "col-md-6", "col-lg-4"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked"], [1, "form-check-label", "small", 3, "for"], ["type", "text", "placeholder", "Cari nama atau NIP karyawan\u2026", 1, "form-control", "form-control-sm", "mb-2", 3, "input", "value"], [1, "border", "rounded", "p-3", "mb-2", 2, "max-height", "280px", "overflow", "auto"], [1, "text-muted"], [1, "small", "text-muted", "mb-1"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "badge", "bg-primary-subtle", "text-primary", "border", "border-primary-subtle"], [1, "bx", "bx-x", "ms-1", 2, "cursor", "pointer", 3, "click"], [1, "bx", "bx-info-circle"]], template: function LokasiFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Lokasi Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "h5", 10);
        \u0275\u0275element(16, "i", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, LokasiFormComponent_Conditional_18_Template, 2, 1, "div", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275conditionalCreate(21, LokasiFormComponent_Conditional_21_Template, 3, 0, "div", 15)(22, LokasiFormComponent_Conditional_22_Template, 97, 22);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.isEdit() ? "Edit" : "Tambah", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.isEdit() ? "Edit Lokasi" : "Tambah Lokasi", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 18 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 21 : 22);
      }
    }, dependencies: [CommonModule, FormsModule, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LokasiFormComponent, [{
    type: Component,
    args: [{ selector: "app-lokasi-form", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/lokasi">Lokasi Kehadiran</a></li>\r
          <li class="breadcrumb-item active" aria-current="page">\r
            {{ isEdit() ? 'Edit' : 'Tambah' }}\r
          </li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <h5 class="mb-3">\r
    <i class="bx bx-map-pin me-2"></i>{{ isEdit() ? 'Edit Lokasi' : 'Tambah Lokasi' }}\r
  </h5>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger small">{{ error() }}</div>\r
  }\r
\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body p-4">\r
      @if (loading()) {\r
        <div class="text-center py-5 text-muted">\r
          <div class="spinner-border spinner-border-sm me-2"></div>Memuat data\u2026\r
        </div>\r
      } @else {\r
        <!-- \u2500\u2500 Informasi Umum \u2500\u2500 -->\r
        <h6 class="text-uppercase small fw-bold text-muted mb-3">Informasi Umum</h6>\r
\r
        <div class="row g-3 mb-4">\r
          <div class="col-md-8">\r
            <label class="form-label small">Nama Lokasi <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control form-control-sm"\r
                   placeholder="Contoh: Kantor Pusat Jakarta"\r
                   [value]="form().namaLokasi"\r
                   (input)="upd('namaLokasi', $any($event.target).value)">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small d-block">Status</label>\r
            <div class="form-check form-switch mt-1">\r
              <input type="checkbox" class="form-check-input" id="aktif"\r
                     [checked]="form().aktif"\r
                     (change)="upd('aktif', $any($event.target).checked)">\r
              <label class="form-check-label small" for="aktif">\r
                {{ form().aktif ? 'Aktif' : 'Nonaktif' }}\r
              </label>\r
            </div>\r
          </div>\r
          <div class="col-12">\r
            <label class="form-label small">Alamat</label>\r
            <textarea class="form-control form-control-sm" rows="2"\r
                      placeholder="Alamat lengkap lokasi"\r
                      [value]="form().alamat ?? ''"\r
                      (input)="upd('alamat', $any($event.target).value)"></textarea>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Geofence \u2500\u2500 -->\r
        <h6 class="text-uppercase small fw-bold text-muted mb-3">\r
          Geofence (Presensi via Aplikasi)\r
        </h6>\r
\r
        <div class="row g-3 mb-2">\r
          <div class="col-md-4">\r
            <label class="form-label small">Latitude</label>\r
            <input type="number" step="0.0000001" class="form-control form-control-sm"\r
                   placeholder="-6.2000000"\r
                   [value]="form().latitude ?? ''"\r
                   (input)="upd('latitude', $any($event.target).value === '' ? null : +$any($event.target).value)">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small">Longitude</label>\r
            <input type="number" step="0.0000001" class="form-control form-control-sm"\r
                   placeholder="106.8166700"\r
                   [value]="form().longitude ?? ''"\r
                   (input)="upd('longitude', $any($event.target).value === '' ? null : +$any($event.target).value)">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small">Radius (meter)</label>\r
            <input type="number" min="0" class="form-control form-control-sm"\r
                   [value]="form().radiusMeter ?? 100"\r
                   (input)="upd('radiusMeter', $any($event.target).value === '' ? 0 : +$any($event.target).value)">\r
          </div>\r
          <div class="col-12 d-flex flex-wrap gap-2">\r
            <button type="button" class="btn btn-outline-primary btn-sm"\r
                    (click)="ambilLokasiSaya()">\r
              <i class="bx bx-current-location"></i> Gunakan Lokasi Saya\r
            </button>\r
            <button type="button" class="btn btn-outline-secondary btn-sm"\r
                    [disabled]="form().latitude == null || form().longitude == null"\r
                    (click)="bukaPeta()">\r
              <i class="bx bx-map"></i> Lihat di Google Maps\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Mode Fingerspot \u2500\u2500 -->\r
        <hr class="my-4">\r
        <h6 class="text-uppercase small fw-bold text-muted mb-3">\r
          Karyawan Ditugaskan\r
        </h6>\r
\r
        <div class="mb-3 d-flex flex-wrap gap-3">\r
          <div class="form-check">\r
            <input type="radio" class="form-check-input" id="tgtSemua" name="targetTipe"\r
                   [checked]="form().targetTipe === 'SEMUA'"\r
                   (change)="setTarget('SEMUA')">\r
            <label class="form-check-label small" for="tgtSemua">Semua Karyawan</label>\r
          </div>\r
          <div class="form-check">\r
            <input type="radio" class="form-check-input" id="tgtDivisi" name="targetTipe"\r
                   [checked]="form().targetTipe === 'DIVISI'"\r
                   (change)="setTarget('DIVISI')">\r
            <label class="form-check-label small" for="tgtDivisi">Spesifik Divisi</label>\r
          </div>\r
          <div class="form-check">\r
            <input type="radio" class="form-check-input" id="tgtKaryawan" name="targetTipe"\r
                   [checked]="form().targetTipe === 'KARYAWAN'"\r
                   (change)="setTarget('KARYAWAN')">\r
            <label class="form-check-label small" for="tgtKaryawan">Spesifik Karyawan</label>\r
          </div>\r
        </div>\r
\r
        @if (form().targetTipe === 'DIVISI') {\r
          <div class="border rounded p-3 mb-3" style="max-height:240px; overflow:auto">\r
            @if (divisiList().length === 0) {\r
              <div class="text-muted small">Tidak ada divisi tersedia.</div>\r
            } @else {\r
              <div class="row g-2">\r
                @for (d of divisiList(); track d.id) {\r
                  <div class="col-md-6 col-lg-4">\r
                    <div class="form-check">\r
                      <input type="checkbox" class="form-check-input"\r
                             [id]="'div-' + d.id"\r
                             [checked]="isDivisiChecked(d.id!)"\r
                             (change)="toggleDivisi(d.id!, $any($event.target).checked)">\r
                      <label class="form-check-label small" [for]="'div-' + d.id">\r
                        {{ d.namaDivisi }}\r
                      </label>\r
                    </div>\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
          @if ((form().divisiIds?.length ?? 0) > 0) {\r
            <div class="small text-muted mb-3">\r
              Terpilih: <strong>{{ form().divisiIds?.length }}</strong> divisi\r
            </div>\r
          }\r
        }\r
\r
        @if (form().targetTipe === 'KARYAWAN') {\r
          <input type="text" class="form-control form-control-sm mb-2"\r
                 placeholder="Cari nama atau NIP karyawan\u2026"\r
                 [value]="karyawanKeyword()"\r
                 (input)="karyawanKeyword.set($any($event.target).value)">\r
          <div class="border rounded p-3 mb-2" style="max-height:280px; overflow:auto">\r
            @if (filteredKaryawan().length === 0) {\r
              <div class="text-muted small">Tidak ada karyawan cocok.</div>\r
            } @else {\r
              <div class="row g-2">\r
                @for (k of filteredKaryawan(); track k.id) {\r
                  <div class="col-md-6 col-lg-4">\r
                    <div class="form-check">\r
                      <input type="checkbox" class="form-check-input"\r
                             [id]="'kar-' + k.id"\r
                             [checked]="isKaryawanChecked(k.id!)"\r
                             (change)="toggleKaryawan(k.id!, $any($event.target).checked)">\r
                      <label class="form-check-label small" [for]="'kar-' + k.id">\r
                        {{ k.namaLengkap }}\r
                        @if (k.nip) { <span class="text-muted">\xB7 {{ k.nip }}</span> }\r
                      </label>\r
                    </div>\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
          @if ((form().karyawanIds?.length ?? 0) > 0) {\r
            <div class="mb-3">\r
              <div class="small text-muted mb-1">\r
                Terpilih: <strong>{{ form().karyawanIds?.length }}</strong> karyawan\r
              </div>\r
              <div class="d-flex flex-wrap gap-1">\r
                @for (id of form().karyawanIds ?? []; track id) {\r
                  <span class="badge bg-primary-subtle text-primary border border-primary-subtle">\r
                    {{ namaKaryawanById(id) }}\r
                    <i class="bx bx-x ms-1" style="cursor:pointer"\r
                       (click)="hapusKaryawanTerpilih(id)"></i>\r
                  </span>\r
                }\r
              </div>\r
            </div>\r
          }\r
        }\r
\r
        <!-- \u2500\u2500 Mode Fingerspot \u2500\u2500 -->\r
        <hr class="my-4">\r
        <h6 class="text-uppercase small fw-bold text-muted mb-3">\r
          Pengaturan Mesin Fingerspot\r
        </h6>\r
\r
        <div class="form-check form-switch mb-3">\r
          <input type="checkbox" class="form-check-input" id="hanyaFingerspot"\r
                 [checked]="form().hanyaFingerspot"\r
                 (change)="upd('hanyaFingerspot', $any($event.target).checked)">\r
          <label class="form-check-label small fw-semibold" for="hanyaFingerspot">\r
            Presensi hanya dapat dilakukan melalui mesin Fingerspot\r
          </label>\r
          <div class="form-text small">\r
            Jika diaktifkan, karyawan <strong>tidak dapat</strong> melakukan presensi\r
            via aplikasi mobile/web pada lokasi ini \u2014 wajib menggunakan mesin\r
            Fingerspot terdaftar di bawah.\r
          </div>\r
        </div>\r
\r
        @if (form().hanyaFingerspot) {\r
          <div class="alert alert-warning py-2 small mb-3">\r
            <i class="bx bx-info-circle"></i>\r
            Pastikan mesin Fingerspot sudah terhubung ke jaringan dan\r
            ter-sinkron dengan server (pull data presensi).\r
          </div>\r
        }\r
\r
        <div class="row g-3">\r
          <div class="col-md-4">\r
            <label class="form-label small">Serial Number (SN)</label>\r
            <input type="text" class="form-control form-control-sm"\r
                   placeholder="Contoh: FS-12345678"\r
                   [value]="form().fingerspotSn ?? ''"\r
                   (input)="upd('fingerspotSn', $any($event.target).value)">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small">IP / Hostname</label>\r
            <input type="text" class="form-control form-control-sm"\r
                   placeholder="192.168.1.100"\r
                   [value]="form().fingerspotIp ?? ''"\r
                   (input)="upd('fingerspotIp', $any($event.target).value)">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label small">Port</label>\r
            <input type="number" min="1" max="65535" class="form-control form-control-sm"\r
                   placeholder="80"\r
                   [value]="form().fingerspotPort ?? ''"\r
                   (input)="upd('fingerspotPort', $any($event.target).value === '' ? null : +$any($event.target).value)">\r
          </div>\r
          <div class="col-12">\r
            <label class="form-label small">Catatan</label>\r
            <input type="text" class="form-control form-control-sm"\r
                   placeholder="Catatan tambahan untuk mesin (opsional)"\r
                   [value]="form().fingerspotCatatan ?? ''"\r
                   (input)="upd('fingerspotCatatan', $any($event.target).value)">\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Footer \u2500\u2500 -->\r
        <hr class="my-4">\r
        <div class="d-flex justify-content-end gap-2">\r
          <a routerLink="/lokasi" class="btn btn-light border btn-sm px-4">Batal</a>\r
          <button type="button" class="btn btn-primary btn-sm px-4"\r
                  [disabled]="saving()" (click)="simpan()">\r
            @if (saving()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
            {{ isEdit() ? 'Simpan Perubahan' : 'Simpan' }}\r
          </button>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LokasiFormComponent, { className: "LokasiFormComponent", filePath: "src/app/features/lokasi/lokasi-form/lokasi-form.component.ts", lineNumber: 21 });
})();
export {
  LokasiFormComponent
};
//# sourceMappingURL=chunk-XSNZZZPG.js.map
