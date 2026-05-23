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
  MaxValidator,
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
  ActivatedRoute,
  CommonModule,
  DatePipe,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵpureFunction8,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-detail/karyawan-detail.component.ts
var _c0 = (a0) => ["/karyawan", a0, "edit"];
var _c1 = () => ({ key: "pribadi", label: "Data Pribadi", icon: "bx-user" });
var _c2 = () => ({ key: "kepegawaian", label: "Kepegawaian", icon: "bx-briefcase" });
var _c3 = () => ({ key: "pendidikan", label: "Pendidikan", icon: "bx-graduation" });
var _c4 = () => ({ key: "akun", label: "Akun & Kontak", icon: "bx-shield-alt-2" });
var _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c6 = () => ({ key: "informasi", label: "Informasi Pribadi", icon: "bx-user-circle" });
var _c7 = () => ({ key: "identitas", label: "File Identitas", icon: "bx-folder-open" });
var _c8 = () => ({ key: "pengalaman", label: "Pengalaman Kerja", icon: "bx-briefcase-alt-2" });
var _c9 = () => ({ key: "pendidikan", label: "Background Pendidikan", icon: "bx-book-open" });
var _c10 = () => ({ key: "portofolio", label: "Portofolio", icon: "bx-image" });
var _c11 = () => ({ key: "penghargaan", label: "Penghargaan", icon: "bx-medal" });
var _c12 = () => ({ key: "sertifikat", label: "Sertifikat", icon: "bx-certification" });
var _c13 = () => ({ key: "organisasi", label: "Pengalaman Organisasi", icon: "bx-group" });
var _c14 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.value;
function KaryawanDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r2.namaJabatan);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r2.namaDivisi);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.email);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275text(3, "Telepon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.noTelepon);
  }
}
function KaryawanDetailComponent_Conditional_17_For_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_For_57_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activeTab.set(tab_r4.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === tab_r4.key);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", tab_r4.icon, " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", tab_r4.label, " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_For_3_Template_button_click_0_listener() {
      const sub_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.pribadiSubTab.set(sub_r6.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.pribadiSubTab() === sub_r6.key);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", sub_r6.icon, " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", sub_r6.label, " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_4_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.umur(k_r2.tanggalLahir), ")");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_4_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 68)(2, "div", 57);
    \u0275\u0275element(3, "i", 71);
    \u0275\u0275text(4, "Catatan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 59)(6, "p", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(k_r2.catatan);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 55)(2, "div", 56)(3, "div", 57);
    \u0275\u0275element(4, "i", 58);
    \u0275\u0275text(5, "Identitas Diri ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59)(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9, "Nama Lengkap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "span", 61);
    \u0275\u0275text(14, "Jenis Kelamin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "span", 61);
    \u0275\u0275text(19, "Tempat Lahir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "span", 61);
    \u0275\u0275text(24, "Tanggal Lahir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 63);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275conditionalCreate(28, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_4_Conditional_28_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 60)(30, "span", 61);
    \u0275\u0275text(31, "Golongan Darah");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 63);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 60)(35, "span", 61);
    \u0275\u0275text(36, "Status Perkawinan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 63);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 60)(40, "span", 61);
    \u0275\u0275text(41, "Agama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 63);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 55)(45, "div", 65)(46, "div", 57);
    \u0275\u0275element(47, "i", 66);
    \u0275\u0275text(48, "Kartu Identitas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 59)(50, "div", 60)(51, "span", 61);
    \u0275\u0275text(52, "Jenis Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 63);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 60)(56, "span", 61);
    \u0275\u0275text(57, "Nomor Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 67);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 68)(61, "div", 57);
    \u0275\u0275element(62, "i", 69);
    \u0275\u0275text(63, "Alamat ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 59)(65, "div", 60)(66, "span", 61);
    \u0275\u0275text(67, "Alamat KTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 63);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 60)(71, "span", 61);
    \u0275\u0275text(72, "Kabupaten/Kota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 63);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 60)(76, "span", 61);
    \u0275\u0275text(77, "Provinsi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 63);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 60)(81, "span", 61);
    \u0275\u0275text(82, "Alamat Domisili");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 63);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(85, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_4_Conditional_85_Template, 8, 1, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(k_r2.namaLengkap);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.jenisKelaminLabel(k_r2.jenisKelamin));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.tempatLahir || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", k_r2.tanggalLahir ? \u0275\u0275pipeBind2(27, 15, k_r2.tanggalLahir, "dd MMMM yyyy") : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r2.tanggalLahir ? 28 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.golonganDarahLabel(k_r2.golonganDarah));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.statusPerkawinanLabel(k_r2.statusPerkawinan));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.agamaLabel(k_r2.agama));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(k_r2.jenisIdentitas || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.nomorIdentitas || "\u2014");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(k_r2.alamatKtp || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.namaKabupatenKota || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.namaProvinsi || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.alamatDomisili || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r2.catatan ? 85 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada file identitas tambahan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openFileIdentitasModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah File Identitas ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 89);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, "Lihat ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Conditional_9_Template, 3, 1, "a", 89)(10, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Conditional_10_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 90)(12, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Template_button_click_12_listener() {
      const fi_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteFileIdentitas(fi_r10.id));
    });
    \u0275\u0275element(13, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const fi_r10 = ctx.$implicit;
    const \u0275$index_406_r11 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_406_r11 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.jenisIdentitasTambahanLabel(fi_r10.jenisIdentitas));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fi_r10.nomor);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = ctx_r0.fileIdentitasUrl(fi_r10.fileUrl)) ? 9 : 10, tmp_19_0);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Jenis Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nomor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 87);
    \u0275\u0275text(13, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_For_16_Template, 14, 4, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.fileIdentitasList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 74);
    \u0275\u0275text(6, "File Identitas Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openFileIdentitasModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Conditional_13_Template, 17, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.fileIdentitasLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.fileIdentitasLoading() && ctx_r0.fileIdentitasList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.fileIdentitasLoading() && ctx_r0.fileIdentitasList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada riwayat pengalaman kerja.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openPengalamanModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Pengalaman Kerja ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pk_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pk_r15.bidangIndustri);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Aktif");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Conditional_7_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 98);
    \u0275\u0275text(9);
    \u0275\u0275conditionalCreate(10, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Conditional_10_Template, 2, 0, "span", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 100);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 90)(14, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Template_button_click_14_listener() {
      const pk_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditPengalamanModal(pk_r15));
    });
    \u0275\u0275element(15, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Template_button_click_16_listener() {
      const pk_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deletePengalamanKerja(pk_r15.id));
    });
    \u0275\u0275element(17, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pk_r15 = ctx.$implicit;
    const \u0275$index_507_r16 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_507_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pk_r15.jabatan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pk_r15.namaPerusahaan, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(pk_r15.bidangIndustri ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pengalamanPeriode(pk_r15), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(pk_r15.masihBekerja ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pk_r15.deskripsi || "\u2014", " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Jabatan / Posisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nama Perusahaan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Periode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 96);
    \u0275\u0275text(15, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_For_18_Template, 18, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.pengalamanKerjaList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 94);
    \u0275\u0275text(6, "Riwayat Pengalaman Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPengalamanModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Conditional_13_Template, 19, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.pengalamanKerjaLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.pengalamanKerjaLoading() && ctx_r0.pengalamanKerjaList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.pengalamanKerjaLoading() && ctx_r0.pengalamanKerjaList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada riwayat pendidikan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openBgPendidikanModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Background Pendidikan ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_13_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 90)(17, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_13_For_22_Template_button_click_17_listener() {
      const bp_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditBgPendidikanModal(bp_r20));
    });
    \u0275\u0275element(18, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_13_For_22_Template_button_click_19_listener() {
      const bp_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteBgPendidikan(bp_r20.id));
    });
    \u0275\u0275element(20, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bp_r20 = ctx.$implicit;
    const \u0275$index_618_r21 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_618_r21 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tingkatPendidikanLabel(bp_r20.tingkatPendidikan));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r20.namaInstitusi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r20.jurusan || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r20.tahunMasuk || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r20.tahunLulus || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r20.nilai || "\u2014");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tingkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nama Institusi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Jurusan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Tahun Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Tahun Lulus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Nilai / IPK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 96);
    \u0275\u0275text(19, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_13_For_22_Template, 21, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.bgPendidikanList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 103);
    \u0275\u0275text(6, "Background Pendidikan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openBgPendidikanModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Conditional_13_Template, 23, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.bgPendidikanLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.bgPendidikanLoading() && ctx_r0.bgPendidikanList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.bgPendidikanLoading() && ctx_r0.bgPendidikanList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada portofolio.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openPortofolioModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Portofolio ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 107);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pf_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", pf_r25.urlLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pf_r25.urlLink, " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275conditionalCreate(6, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Conditional_6_Template, 3, 2, "a", 107)(7, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Conditional_7_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 90)(11, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Template_button_click_11_listener() {
      const pf_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditPortofolioModal(pf_r25));
    });
    \u0275\u0275element(12, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Template_button_click_13_listener() {
      const pf_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deletePortofolio(pf_r25.id));
    });
    \u0275\u0275element(14, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pf_r25 = ctx.$implicit;
    const \u0275$index_720_r26 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_720_r26 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pf_r25.judul);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(pf_r25.urlLink ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", pf_r25.deskripsi || "\u2014", " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Judul");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Situs Portofolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 96);
    \u0275\u0275text(13, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_For_16_Template, 15, 4, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.portofolioList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 105);
    \u0275\u0275text(6, "Daftar Portofolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPortofolioModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Conditional_13_Template, 17, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.portofolioLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.portofolioLoading() && ctx_r0.portofolioList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.portofolioLoading() && ctx_r0.portofolioList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada data penghargaan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openPenghargaanModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Penghargaan ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_13_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 110);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 100);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 90)(12, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_13_For_18_Template_button_click_12_listener() {
      const ph_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditPenghargaanModal(ph_r30));
    });
    \u0275\u0275element(13, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_13_For_18_Template_button_click_14_listener() {
      const ph_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deletePenghargaan(ph_r30.id));
    });
    \u0275\u0275element(15, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ph_r30 = ctx.$implicit;
    const \u0275$index_823_r31 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_823_r31 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ph_r30.namaPenghargaan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ph_r30.penerbit || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ph_r30.tahun || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ph_r30.deskripsi || "\u2014", " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama Penghargaan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Judul Prestasi / Kontribusi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Tahun");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 96);
    \u0275\u0275text(15, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_13_For_18_Template, 16, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.penghargaanList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 108);
    \u0275\u0275text(6, "Daftar Penghargaan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPenghargaanModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Conditional_13_Template, 19, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.penghargaanLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.penghargaanLoading() && ctx_r0.penghargaanList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.penghargaanLoading() && ctx_r0.penghargaanList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada data sertifikat.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openSertifikatModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Sertifikat ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sr_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, sr_r35.tanggalKadaluarsa, "dd MMM yyyy"));
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 89);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, "Lihat ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 110);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 110);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_13_Template, 3, 4, "span")(14, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_14_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275conditionalCreate(16, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_16_Template, 3, 1, "a", 89)(17, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Conditional_17_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 90)(19, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Template_button_click_19_listener() {
      const sr_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditSertifikatModal(sr_r35));
    });
    \u0275\u0275element(20, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Template_button_click_21_listener() {
      const sr_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteSertifikat(sr_r35.id));
    });
    \u0275\u0275element(22, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_22_0;
    const sr_r35 = ctx.$implicit;
    const \u0275$index_926_r36 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_926_r36 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sr_r35.namaSertifikat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sr_r35.penerbit || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sr_r35.nomorSertifikat || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", sr_r35.tanggalTerbit ? \u0275\u0275pipeBind2(11, 7, sr_r35.tanggalTerbit, "dd MMM yyyy") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(sr_r35.tanggalKadaluarsa ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_22_0 = ctx_r0.sertifikatFileUrl(sr_r35.fileUrl)) ? 16 : 17, tmp_22_0);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama Sertifikat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Penerbit / Lembaga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "No. Sertifikat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Tgl Terbit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Tgl Kadaluarsa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 96);
    \u0275\u0275text(19, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_For_22_Template, 23, 10, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.sertifikatList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 111);
    \u0275\u0275text(6, "Daftar Sertifikat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSertifikatModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Conditional_13_Template, 23, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.sertifikatLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.sertifikatLoading() && ctx_r0.sertifikatList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.sertifikatLoading() && ctx_r0.sertifikatList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada pengalaman organisasi.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openOrganisasiModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Pengalaman Organisasi ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Aktif");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 98);
    \u0275\u0275text(8);
    \u0275\u0275conditionalCreate(9, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_For_18_Conditional_9_Template, 2, 0, "span", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 100);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 90)(13, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_For_18_Template_button_click_13_listener() {
      const og_r40 = \u0275\u0275restoreView(_r39).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditOrganisasiModal(og_r40));
    });
    \u0275\u0275element(14, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_For_18_Template_button_click_15_listener() {
      const og_r40 = \u0275\u0275restoreView(_r39).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteOrganisasi(og_r40.id));
    });
    \u0275\u0275element(16, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const og_r40 = ctx.$implicit;
    const \u0275$index_1047_r41 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_1047_r41 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(og_r40.namaOrganisasi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(og_r40.jabatan || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisasiPeriode(og_r40), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(og_r40.masihAktif ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", og_r40.deskripsi || "\u2014", " ");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama Organisasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Jabatan / Posisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Periode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 96);
    \u0275\u0275text(15, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_For_18_Template, 17, 6, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.organisasiList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 70)(2, "div", 68)(3, "div", 73)(4, "span");
    \u0275\u0275element(5, "i", 114);
    \u0275\u0275text(6, "Pengalaman Organisasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openOrganisasiModal());
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275text(9, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 77);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_11_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_12_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Conditional_13_Template, 19, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.organisasiLoading() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.organisasiLoading() && ctx_r0.organisasiList().length === 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.organisasiLoading() && ctx_r0.organisasiList().length > 0 ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275repeaterCreate(2, KaryawanDetailComponent_Conditional_17_Conditional_58_For_3_Template, 3, 6, "button", 53, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_4_Template, 86, 18, "div", 46);
    \u0275\u0275conditionalCreate(5, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_5_Template, 14, 3, "div", 46);
    \u0275\u0275conditionalCreate(6, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_6_Template, 14, 3, "div", 46);
    \u0275\u0275conditionalCreate(7, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_7_Template, 14, 3, "div", 46);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_8_Template, 14, 3, "div", 46);
    \u0275\u0275conditionalCreate(9, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_9_Template, 14, 3, "div", 46);
    \u0275\u0275conditionalCreate(10, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_10_Template, 14, 3, "div", 46);
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_58_Conditional_11_Template, 14, 3, "div", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction8(16, _c14, \u0275\u0275pureFunction0(8, _c6), \u0275\u0275pureFunction0(9, _c7), \u0275\u0275pureFunction0(10, _c8), \u0275\u0275pureFunction0(11, _c9), \u0275\u0275pureFunction0(12, _c10), \u0275\u0275pureFunction0(13, _c11), \u0275\u0275pureFunction0(14, _c12), \u0275\u0275pureFunction0(15, _c13)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "informasi" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "identitas" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "pengalaman" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "pendidikan" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "portofolio" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "penghargaan" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "sertifikat" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pribadiSubTab() === "organisasi" ? 11 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada data untuk ditampilkan di timeline karir.");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 130);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r42.subtitle);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r42.badgeClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r42.badge);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r42.description);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127)(2, "div", 128);
    \u0275\u0275element(3, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_4_Template, 1, 0, "div", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 131)(6, "div", 132);
    \u0275\u0275element(7, "i", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 133);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_11_Template, 2, 1, "div", 134);
    \u0275\u0275conditionalCreate(12, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_12_Template, 2, 3, "span", 135);
    \u0275\u0275conditionalCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Conditional_13_Template, 2, 1, "div", 136);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    const \u0275$index_1213_r43 = ctx.$index;
    const \u0275$count_1213_r44 = ctx.$count;
    \u0275\u0275classProp("last", \u0275$index_1213_r43 === \u0275$count_1213_r44 - 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r42.dotClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r42.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_1213_r43 === \u0275$count_1213_r44 - 1) ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", item_r42.periode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r42.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r42.subtitle ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r42.badge ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r42.description ? 13 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275repeaterCreate(1, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_For_2_Template, 14, 10, "div", 125, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.kariTimelineItems());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 55)(2, "div", 56)(3, "div", 57);
    \u0275\u0275element(4, "i", 116);
    \u0275\u0275text(5, "Data Kepegawaian ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59)(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9, "NIP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 117);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "span", 61);
    \u0275\u0275text(14, "Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "span", 61);
    \u0275\u0275text(19, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "span", 61);
    \u0275\u0275text(24, "Status Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 63)(26, "span", 29);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 60)(29, "span", 61);
    \u0275\u0275text(30, "Tanggal Mulai Bekerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 63);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 60)(35, "span", 61);
    \u0275\u0275text(36, "Masa Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 118);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(39, "div", 55)(40, "div", 56)(41, "div", 57);
    \u0275\u0275element(42, "i", 119);
    \u0275\u0275text(43, "Informasi Cuti ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 59)(45, "div", 60)(46, "span", 61);
    \u0275\u0275text(47, "Sisa Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 63)(49, "span", 120);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 60)(52, "span", 61);
    \u0275\u0275text(53, "Mulai Dapat Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 63);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 60)(58, "span", 61);
    \u0275\u0275text(59, "Cuti Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 63);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 60)(64, "span", 61);
    \u0275\u0275text(65, "Zona Waktu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 63);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "div", 70)(69, "div", 68)(70, "div", 57);
    \u0275\u0275element(71, "i", 121);
    \u0275\u0275text(72, "Timeline Karir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 122);
    \u0275\u0275conditionalCreate(74, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_74_Template, 4, 0, "div", 79);
    \u0275\u0275conditionalCreate(75, KaryawanDetailComponent_Conditional_17_Conditional_59_Conditional_75_Template, 3, 0, "div", 123);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(k_r2.nip);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.namaJabatan || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.namaDivisi || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.statusKerjaBadgeClass(k_r2.statusKerja));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusKerjaLabel(k_r2.statusKerja), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", k_r2.tglMulaiBekerja ? \u0275\u0275pipeBind2(33, 14, k_r2.tglMulaiBekerja, "dd MMMM yyyy") : "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.masaKerja(k_r2.tglMulaiBekerja));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", k_r2.sisaCuti, " hari ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", k_r2.tglMulaiDapatCuti ? \u0275\u0275pipeBind2(56, 17, k_r2.tglMulaiDapatCuti, "dd MMMM yyyy") : "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", k_r2.tglCutiBeakhir ? \u0275\u0275pipeBind2(62, 20, k_r2.tglCutiBeakhir, "dd MMMM yyyy") : "\u2014", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.zonaWaktuLabel(k_r2.zonaWaktu));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.kariTimelineItems().length === 0 ? 74 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.kariTimelineItems().length > 0 ? 75 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementStart(2, "p", 139);
    \u0275\u0275text(3, "Belum ada riwayat pendidikan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_38_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openBgPendidikanModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Background Pendidikan ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_39_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 90)(17, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_39_For_22_Template_button_click_17_listener() {
      const bp_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openEditBgPendidikanModal(bp_r48));
    });
    \u0275\u0275element(18, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_39_For_22_Template_button_click_19_listener() {
      const bp_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteBgPendidikan(bp_r48.id));
    });
    \u0275\u0275element(20, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bp_r48 = ctx.$implicit;
    const \u0275$index_1365_r49 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_1365_r49 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tingkatPendidikanLabel(bp_r48.tingkatPendidikan));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r48.namaInstitusi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r48.jurusan || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r48.tahunMasuk || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r48.tahunLulus || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bp_r48.nilai || "\u2014");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tingkat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nama Institusi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Jurusan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Tahun Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Tahun Lulus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Nilai / IPK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 96);
    \u0275\u0275text(19, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_39_For_22_Template, 21, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.bgPendidikanList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 55)(2, "div", 68)(3, "div", 57);
    \u0275\u0275element(4, "i", 138);
    \u0275\u0275text(5, "Pendidikan Terakhir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59)(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9, "Jenjang Pendidikan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "span", 61);
    \u0275\u0275text(14, "Jurusan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "span", 61);
    \u0275\u0275text(19, "Nama Institusi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 63);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "span", 61);
    \u0275\u0275text(24, "Tahun Lulus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 63);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 70)(28, "div", 68)(29, "div", 73)(30, "span");
    \u0275\u0275element(31, "i", 103);
    \u0275\u0275text(32, "Background Pendidikan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_60_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openBgPendidikanModal());
    });
    \u0275\u0275element(34, "i", 76);
    \u0275\u0275text(35, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 77);
    \u0275\u0275conditionalCreate(37, KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_37_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(38, KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_38_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(39, KaryawanDetailComponent_Conditional_17_Conditional_60_Conditional_39_Template, 23, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.jenjangPendidikanLabel(k_r2.jenjangPendidikan));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.jurusan || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.namaInstitusi || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.tahunLulus || "\u2014");
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.bgPendidikanLoading() ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.bgPendidikanLoading() && ctx_r0.bgPendidikanList().length === 0 ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.bgPendidikanLoading() && ctx_r0.bgPendidikanList().length > 0 ? 39 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 143);
    \u0275\u0275elementStart(2, "p", 82);
    \u0275\u0275text(3, "Belum ada kontak darurat.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 83);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_49_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openKontakDaruratModal());
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275text(6, "Tambah Kontak Darurat ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_50_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 90)(8, "button", 101);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_50_For_14_Template_button_click_8_listener() {
      const kd_r53 = \u0275\u0275restoreView(_r52).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openEditKontakDaruratModal(kd_r53));
    });
    \u0275\u0275element(9, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 91);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_50_For_14_Template_button_click_10_listener() {
      const kd_r53 = \u0275\u0275restoreView(_r52).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteKontakDarurat(kd_r53.id));
    });
    \u0275\u0275element(11, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const kd_r53 = ctx.$implicit;
    const \u0275$index_1526_r54 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_1526_r54 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kd_r53.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kd_r53.noTelepon || "\u2014");
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "table", 84)(2, "thead", 85)(3, "tr")(4, "th", 86);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "No. Telepon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 96);
    \u0275\u0275text(11, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_50_For_14_Template, 12, 3, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r0.kontakDaruratList());
  }
}
function KaryawanDetailComponent_Conditional_17_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 55)(2, "div", 68)(3, "div", 57);
    \u0275\u0275element(4, "i", 58);
    \u0275\u0275text(5, "Informasi Akun ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59)(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "span", 61);
    \u0275\u0275text(14, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "span", 61);
    \u0275\u0275text(19, "ID Akun");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 140);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 55)(23, "div", 68)(24, "div", 57);
    \u0275\u0275element(25, "i", 141);
    \u0275\u0275text(26, "Kontak ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 59)(28, "div", 60)(29, "span", 61);
    \u0275\u0275text(30, "No. Telepon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 67);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 60)(34, "span", 61);
    \u0275\u0275text(35, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 63);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 70)(39, "div", 68)(40, "div", 73)(41, "span");
    \u0275\u0275element(42, "i", 142);
    \u0275\u0275text(43, "Kontak Darurat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 75);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_17_Conditional_61_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openKontakDaruratModal());
    });
    \u0275\u0275element(45, "i", 76);
    \u0275\u0275text(46, "Tambah ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 77);
    \u0275\u0275conditionalCreate(48, KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_48_Template, 3, 0, "div", 78);
    \u0275\u0275conditionalCreate(49, KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_49_Template, 7, 0, "div", 79);
    \u0275\u0275conditionalCreate(50, KaryawanDetailComponent_Conditional_17_Conditional_61_Conditional_50_Template, 15, 0, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const k_r2 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(k_r2.username || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.userId || "\u2014");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(k_r2.noTelepon || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r2.email || "\u2014");
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.kontakDaruratLoading() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.kontakDaruratLoading() && ctx_r0.kontakDaruratList().length === 0 ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.kontakDaruratLoading() && ctx_r0.kontakDaruratList().length > 0 ? 50 : -1);
  }
}
function KaryawanDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17)(4, "div", 18);
    \u0275\u0275conditionalCreate(5, KaryawanDetailComponent_Conditional_17_Conditional_5_Template, 1, 1, "img", 19)(6, KaryawanDetailComponent_Conditional_17_Conditional_6_Template, 2, 0, "div", 20);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22)(9, "h4", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 24)(12, "span", 25);
    \u0275\u0275element(13, "i", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, KaryawanDetailComponent_Conditional_17_Conditional_15_Template, 2, 1, "span", 27);
    \u0275\u0275conditionalCreate(16, KaryawanDetailComponent_Conditional_17_Conditional_16_Template, 2, 1, "span", 28);
    \u0275\u0275elementStart(17, "span", 29);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 30)(20, "a", 31);
    \u0275\u0275element(21, "i", 32);
    \u0275\u0275text(22, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 33);
    \u0275\u0275element(24, "i", 34);
    \u0275\u0275text(25, " Kembali ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 35)(27, "div", 36)(28, "div", 37);
    \u0275\u0275element(29, "i", 38);
    \u0275\u0275text(30, "Zona Waktu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 39);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 36)(34, "div", 37);
    \u0275\u0275element(35, "i", 40);
    \u0275\u0275text(36, "Mulai Bekerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 39);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 36)(41, "div", 37);
    \u0275\u0275element(42, "i", 41);
    \u0275\u0275text(43, "Masa Kerja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 39);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 36)(47, "div", 37);
    \u0275\u0275element(48, "i", 42);
    \u0275\u0275text(49, "Sisa Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 39);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(52, KaryawanDetailComponent_Conditional_17_Conditional_52_Template, 6, 1, "div", 36);
    \u0275\u0275conditionalCreate(53, KaryawanDetailComponent_Conditional_17_Conditional_53_Template, 6, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 43)(55, "div", 44);
    \u0275\u0275repeaterCreate(56, KaryawanDetailComponent_Conditional_17_For_57_Template, 3, 6, "button", 45, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(58, KaryawanDetailComponent_Conditional_17_Conditional_58_Template, 12, 25);
    \u0275\u0275conditionalCreate(59, KaryawanDetailComponent_Conditional_17_Conditional_59_Template, 76, 23, "div", 46);
    \u0275\u0275conditionalCreate(60, KaryawanDetailComponent_Conditional_17_Conditional_60_Template, 40, 7, "div", 46);
    \u0275\u0275conditionalCreate(61, KaryawanDetailComponent_Conditional_17_Conditional_61_Template, 51, 8, "div", 46);
  }
  if (rf & 2) {
    let tmp_2_0;
    const k_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.fotoUrl(k_r2.fotoProfil)) ? 5 : 6, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("dot-aktif", k_r2.statusKerja === "AKTIF")("dot-nonaktif", k_r2.statusKerja !== "AKTIF");
    \u0275\u0275property("title", ctx_r0.statusKerjaLabel(k_r2.statusKerja));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r2.namaLengkap);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", k_r2.nip, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r2.namaJabatan ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r2.namaDivisi ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.statusKerjaBadgeClass(k_r2.statusKerja));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusKerjaLabel(k_r2.statusKerja), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c0, k_r2.id));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.zonaWaktuLabel(k_r2.zonaWaktu));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(k_r2.tglMulaiBekerja ? \u0275\u0275pipeBind2(39, 24, k_r2.tglMulaiBekerja, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.masaKerja(k_r2.tglMulaiBekerja));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", k_r2.sisaCuti, " hari");
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r2.email ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r2.noTelepon ? 53 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction4(33, _c5, \u0275\u0275pureFunction0(29, _c1), \u0275\u0275pureFunction0(30, _c2), \u0275\u0275pureFunction0(31, _c3), \u0275\u0275pureFunction0(32, _c4)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeTab() === "pribadi" ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "kepegawaian" ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "pendidikan" ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "akun" ? 61 : -1);
  }
}
function KaryawanDetailComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fileIdentitasError());
  }
}
function KaryawanDetailComponent_Conditional_18_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r56 = ctx.$implicit;
    \u0275\u0275property("value", opt_r56.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r56.label);
  }
}
function KaryawanDetailComponent_Conditional_18_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFileIdentitasModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5, "Tambah File Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFileIdentitasModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_18_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Jenis Identitas ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "select", 156);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_18_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.fileForm.jenisIdentitas, $event) || (ctx_r0.fileForm.jenisIdentitas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 157);
    \u0275\u0275text(17, "Pilih");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, KaryawanDetailComponent_Conditional_18_For_19_Template, 2, 2, "option", 158, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 152)(21, "label", 153);
    \u0275\u0275text(22, "Nomor ");
    \u0275\u0275elementStart(23, "span", 154);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 155)(26, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_18_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.fileForm.nomor, $event) || (ctx_r0.fileForm.nomor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 152)(28, "label", 153);
    \u0275\u0275text(29, "File ");
    \u0275\u0275elementStart(30, "span", 154);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 155)(33, "input", 160);
    \u0275\u0275listener("change", function KaryawanDetailComponent_Conditional_18_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 161);
    \u0275\u0275text(35, "Ukuran Maksimal 900kb");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 162)(37, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_18_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveFileIdentitas());
    });
    \u0275\u0275conditionalCreate(38, KaryawanDetailComponent_Conditional_18_Conditional_38_Template, 1, 0, "span", 164);
    \u0275\u0275text(39, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_18_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFileIdentitasModal());
    });
    \u0275\u0275text(41, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.fileIdentitasError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fileForm.jenisIdentitas);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.jenisIdentitasOptions);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fileForm.nomor);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r0.fileIdentitasSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fileIdentitasSaving() ? 38 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.fileIdentitasSaving());
  }
}
function KaryawanDetailComponent_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pengalamanError());
  }
}
function KaryawanDetailComponent_Conditional_19_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 168);
    \u0275\u0275listener("ngModelChange", function KaryawanDetailComponent_Conditional_19_Conditional_34_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pengalamanForm.tanggalSelesai = $event ? $event + "-01" : null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.pengalamanForm.tanggalSelesai ? ctx_r0.pengalamanForm.tanggalSelesai.substring(0, 7) : "");
  }
}
function KaryawanDetailComponent_Conditional_19_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePengalamanModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePengalamanModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_19_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Posisi ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_19_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pengalamanForm.jabatan, $event) || (ctx_r0.pengalamanForm.jabatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 152)(17, "label", 153);
    \u0275\u0275text(18, "Nama Perusahaan ");
    \u0275\u0275elementStart(19, "span", 154);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 155)(22, "input", 167);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_19_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pengalamanForm.namaPerusahaan, $event) || (ctx_r0.pengalamanForm.namaPerusahaan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 152)(24, "label", 153);
    \u0275\u0275text(25, "Bulan Mulai ");
    \u0275\u0275elementStart(26, "span", 154);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 155)(29, "input", 168);
    \u0275\u0275listener("ngModelChange", function KaryawanDetailComponent_Conditional_19_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pengalamanForm.tanggalMulai = $event ? $event + "-01" : null);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 152)(31, "label", 153);
    \u0275\u0275text(32, "Bulan Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 155);
    \u0275\u0275conditionalCreate(34, KaryawanDetailComponent_Conditional_19_Conditional_34_Template, 1, 1, "input", 169);
    \u0275\u0275elementStart(35, "div", 170)(36, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_19_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pengalamanForm.masihBekerja, $event) || (ctx_r0.pengalamanForm.masihBekerja = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 172);
    \u0275\u0275text(38, "Masih bekerja di sini");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 152)(40, "label", 153);
    \u0275\u0275text(41, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 155)(43, "textarea", 173);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_19_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pengalamanForm.deskripsi, $event) || (ctx_r0.pengalamanForm.deskripsi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 162)(45, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_19_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePengalamanKerja());
    });
    \u0275\u0275conditionalCreate(46, KaryawanDetailComponent_Conditional_19_Conditional_46_Template, 1, 0, "span", 164);
    \u0275\u0275text(47, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_19_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePengalamanModal());
    });
    \u0275\u0275text(49, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingPengalamanId() ? "Edit Pengalaman Kerja" : "Tambah Pengalaman Kerja", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.pengalamanError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pengalamanForm.jabatan);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pengalamanForm.namaPerusahaan);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.pengalamanForm.tanggalMulai ? ctx_r0.pengalamanForm.tanggalMulai.substring(0, 7) : "");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.pengalamanForm.masihBekerja ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pengalamanForm.masihBekerja);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pengalamanForm.deskripsi);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pengalamanSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pengalamanSaving() ? 46 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pengalamanSaving());
  }
}
function KaryawanDetailComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.bgPendidikanError());
  }
}
function KaryawanDetailComponent_Conditional_20_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 158);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r60 = ctx.$implicit;
    \u0275\u0275property("value", opt_r60.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r60.label);
  }
}
function KaryawanDetailComponent_Conditional_20_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBgPendidikanModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBgPendidikanModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_20_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Tingkat Pendidikan ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "select", 156);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.tingkatPendidikan, $event) || (ctx_r0.bgPendidikanForm.tingkatPendidikan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, KaryawanDetailComponent_Conditional_20_For_17_Template, 2, 2, "option", 158, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 152)(19, "label", 153);
    \u0275\u0275text(20, "Nama Institusi ");
    \u0275\u0275elementStart(21, "span", 154);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 155)(24, "input", 174);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.namaInstitusi, $event) || (ctx_r0.bgPendidikanForm.namaInstitusi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 152)(26, "label", 153);
    \u0275\u0275text(27, "Jurusan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 155)(29, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.jurusan, $event) || (ctx_r0.bgPendidikanForm.jurusan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 152)(31, "label", 153);
    \u0275\u0275text(32, "Tahun Masuk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 155)(34, "input", 176);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.tahunMasuk, $event) || (ctx_r0.bgPendidikanForm.tahunMasuk = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 152)(36, "label", 153);
    \u0275\u0275text(37, "Tahun Lulus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 155)(39, "input", 176);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.tahunLulus, $event) || (ctx_r0.bgPendidikanForm.tahunLulus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 152)(41, "label", 153);
    \u0275\u0275text(42, "Nilai / IPK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 155)(44, "input", 177);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.nilai, $event) || (ctx_r0.bgPendidikanForm.nilai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 152)(46, "label", 153);
    \u0275\u0275text(47, "Keterangan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 155)(49, "textarea", 178);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_20_Template_textarea_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bgPendidikanForm.keterangan, $event) || (ctx_r0.bgPendidikanForm.keterangan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 162)(51, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_20_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveBgPendidikan());
    });
    \u0275\u0275conditionalCreate(52, KaryawanDetailComponent_Conditional_20_Conditional_52_Template, 1, 0, "span", 164);
    \u0275\u0275text(53, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_20_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBgPendidikanModal());
    });
    \u0275\u0275text(55, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingBgPendidikanId() ? "Edit Background Pendidikan" : "Tambah Background Pendidikan", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.bgPendidikanError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.tingkatPendidikan);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tingkatPendidikanOptions);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.namaInstitusi);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.jurusan);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.tahunMasuk);
    \u0275\u0275property("max", 2100);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.tahunLulus);
    \u0275\u0275property("max", 2100);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.nilai);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bgPendidikanForm.keterangan);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.bgPendidikanSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bgPendidikanSaving() ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.bgPendidikanSaving());
  }
}
function KaryawanDetailComponent_Conditional_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.portofolioError());
  }
}
function KaryawanDetailComponent_Conditional_21_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePortofolioModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePortofolioModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_21_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Judul ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "input", 179);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_21_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.portofolioForm.judul, $event) || (ctx_r0.portofolioForm.judul = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 152)(17, "label", 153);
    \u0275\u0275text(18, "Situs Portofolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 155)(20, "input", 180);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_21_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.portofolioForm.urlLink, $event) || (ctx_r0.portofolioForm.urlLink = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 152)(22, "label", 153);
    \u0275\u0275text(23, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 155)(25, "textarea", 181);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_21_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.portofolioForm.deskripsi, $event) || (ctx_r0.portofolioForm.deskripsi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 162)(27, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_21_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePortofolio());
    });
    \u0275\u0275conditionalCreate(28, KaryawanDetailComponent_Conditional_21_Conditional_28_Template, 1, 0, "span", 164);
    \u0275\u0275text(29, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_21_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePortofolioModal());
    });
    \u0275\u0275text(31, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingPortofolioId() ? "Edit Portofolio" : "Tambah Portofolio", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.portofolioError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.portofolioForm.judul);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.portofolioForm.urlLink);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.portofolioForm.deskripsi);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.portofolioSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.portofolioSaving() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.portofolioSaving());
  }
}
function KaryawanDetailComponent_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.penghargaanError());
  }
}
function KaryawanDetailComponent_Conditional_22_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePenghargaanModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePenghargaanModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_22_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Judul Penghargaan ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_22_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.penghargaanForm.namaPenghargaan, $event) || (ctx_r0.penghargaanForm.namaPenghargaan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 152)(17, "label", 153);
    \u0275\u0275text(18, "Judul Prestasi atau Kontribusi ");
    \u0275\u0275elementStart(19, "span", 154);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 155)(22, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_22_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.penghargaanForm.penerbit, $event) || (ctx_r0.penghargaanForm.penerbit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 152)(24, "label", 153);
    \u0275\u0275text(25, "Tahun ");
    \u0275\u0275elementStart(26, "span", 154);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 184)(29, "input", 185);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_22_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.penghargaanForm.tahun, $event) || (ctx_r0.penghargaanForm.tahun = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 152)(31, "label", 153);
    \u0275\u0275text(32, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 155)(34, "textarea", 186);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_22_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.penghargaanForm.deskripsi, $event) || (ctx_r0.penghargaanForm.deskripsi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 162)(36, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_22_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePenghargaan());
    });
    \u0275\u0275conditionalCreate(37, KaryawanDetailComponent_Conditional_22_Conditional_37_Template, 1, 0, "span", 164);
    \u0275\u0275text(38, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_22_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePenghargaanModal());
    });
    \u0275\u0275text(40, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingPenghargaanId() ? "Edit Penghargaan" : "Tambah Penghargaan", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.penghargaanError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.penghargaanForm.namaPenghargaan);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.penghargaanForm.penerbit);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.penghargaanForm.tahun);
    \u0275\u0275property("max", 2100);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.penghargaanForm.deskripsi);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.penghargaanSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.penghargaanSaving() ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.penghargaanSaving());
  }
}
function KaryawanDetailComponent_Conditional_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sertifikatError());
  }
}
function KaryawanDetailComponent_Conditional_23_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSertifikatModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSertifikatModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_23_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Nama Sertifikat ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "input", 187);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_23_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sertifikatForm.namaSertifikat, $event) || (ctx_r0.sertifikatForm.namaSertifikat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 152)(17, "label", 153);
    \u0275\u0275text(18, "Penerbit / Lembaga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 155)(20, "input", 188);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_23_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sertifikatForm.penerbit, $event) || (ctx_r0.sertifikatForm.penerbit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 152)(22, "label", 153);
    \u0275\u0275text(23, "Nomor Sertifikat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 155)(25, "input", 189);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_23_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sertifikatForm.nomorSertifikat, $event) || (ctx_r0.sertifikatForm.nomorSertifikat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 152)(27, "label", 153);
    \u0275\u0275text(28, "Tanggal Terbit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 155)(30, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_23_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sertifikatForm.tanggalTerbit, $event) || (ctx_r0.sertifikatForm.tanggalTerbit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 152)(32, "label", 153);
    \u0275\u0275text(33, "Tanggal Kadaluarsa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 155)(35, "input", 190);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_23_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sertifikatForm.tanggalKadaluarsa, $event) || (ctx_r0.sertifikatForm.tanggalKadaluarsa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 152)(37, "label", 153);
    \u0275\u0275text(38, "File Sertifikat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 155)(40, "input", 191);
    \u0275\u0275listener("change", function KaryawanDetailComponent_Conditional_23_Template_input_change_40_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSertifikatFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 192);
    \u0275\u0275text(42, "Format: PDF, JPG, PNG. Maks 5MB.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 152)(44, "label", 153);
    \u0275\u0275text(45, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 155)(47, "textarea", 193);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_23_Template_textarea_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.sertifikatForm.keterangan, $event) || (ctx_r0.sertifikatForm.keterangan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 162)(49, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_23_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveSertifikat());
    });
    \u0275\u0275conditionalCreate(50, KaryawanDetailComponent_Conditional_23_Conditional_50_Template, 1, 0, "span", 164);
    \u0275\u0275text(51, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_23_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSertifikatModal());
    });
    \u0275\u0275text(53, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingSertifikatId() ? "Edit Sertifikat" : "Tambah Sertifikat", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.sertifikatError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sertifikatForm.namaSertifikat);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sertifikatForm.penerbit);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sertifikatForm.nomorSertifikat);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sertifikatForm.tanggalTerbit);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sertifikatForm.tanggalKadaluarsa);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sertifikatForm.keterangan);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sertifikatSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.sertifikatSaving() ? 50 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.sertifikatSaving());
  }
}
function KaryawanDetailComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.organisasiError());
  }
}
function KaryawanDetailComponent_Conditional_24_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 196);
    \u0275\u0275listener("ngModelChange", function KaryawanDetailComponent_Conditional_24_Conditional_34_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r65);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.organisasiForm.tanggalSelesai = $event ? $event + "-01" : null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.organisasiForm.tanggalSelesai ? ctx_r0.organisasiForm.tanggalSelesai.substring(0, 7) : "");
  }
}
function KaryawanDetailComponent_Conditional_24_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeOrganisasiModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeOrganisasiModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_24_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Nama Organisasi ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "input", 194);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_24_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.organisasiForm.namaOrganisasi, $event) || (ctx_r0.organisasiForm.namaOrganisasi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 152)(17, "label", 153);
    \u0275\u0275text(18, "Posisi ");
    \u0275\u0275elementStart(19, "span", 154);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 155)(22, "input", 195);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_24_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.organisasiForm.jabatan, $event) || (ctx_r0.organisasiForm.jabatan = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 152)(24, "label", 153);
    \u0275\u0275text(25, "Bulan Mulai ");
    \u0275\u0275elementStart(26, "span", 154);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 155)(29, "input", 196);
    \u0275\u0275listener("ngModelChange", function KaryawanDetailComponent_Conditional_24_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.organisasiForm.tanggalMulai = $event ? $event + "-01" : null);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 152)(31, "label", 153);
    \u0275\u0275text(32, "Bulan Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 155);
    \u0275\u0275conditionalCreate(34, KaryawanDetailComponent_Conditional_24_Conditional_34_Template, 1, 1, "input", 197);
    \u0275\u0275elementStart(35, "div", 170)(36, "input", 198);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_24_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.organisasiForm.masihAktif, $event) || (ctx_r0.organisasiForm.masihAktif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 199);
    \u0275\u0275text(38, "Masih aktif di organisasi ini");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 152)(40, "label", 153);
    \u0275\u0275text(41, "Informasi Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 155)(43, "textarea", 200);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_24_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.organisasiForm.deskripsi, $event) || (ctx_r0.organisasiForm.deskripsi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 162)(45, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_24_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveOrganisasi());
    });
    \u0275\u0275conditionalCreate(46, KaryawanDetailComponent_Conditional_24_Conditional_46_Template, 1, 0, "span", 164);
    \u0275\u0275text(47, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_24_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r64);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeOrganisasiModal());
    });
    \u0275\u0275text(49, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingOrganisasiId() ? "Edit Pengalaman Organisasi" : "Tambah Pengalaman Organisasi", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.organisasiError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.organisasiForm.namaOrganisasi);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.organisasiForm.jabatan);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.organisasiForm.tanggalMulai ? ctx_r0.organisasiForm.tanggalMulai.substring(0, 7) : "");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.organisasiForm.masihAktif ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.organisasiForm.masihAktif);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.organisasiForm.deskripsi);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.organisasiSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.organisasiSaving() ? 46 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.organisasiSaving());
  }
}
function KaryawanDetailComponent_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.kontakDaruratError());
  }
}
function KaryawanDetailComponent_Conditional_25_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function KaryawanDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeKontakDaruratModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "h5", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 149);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeKontakDaruratModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 150);
    \u0275\u0275conditionalCreate(8, KaryawanDetailComponent_Conditional_25_Conditional_8_Template, 2, 1, "div", 151);
    \u0275\u0275elementStart(9, "div", 152)(10, "label", 153);
    \u0275\u0275text(11, "Nama ");
    \u0275\u0275elementStart(12, "span", 154);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 155)(15, "input", 201);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_25_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.kontakDaruratForm.nama, $event) || (ctx_r0.kontakDaruratForm.nama = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 152)(17, "label", 153);
    \u0275\u0275text(18, "Nomor Telepon ");
    \u0275\u0275elementStart(19, "span", 154);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 155)(22, "input", 202);
    \u0275\u0275twoWayListener("ngModelChange", function KaryawanDetailComponent_Conditional_25_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.kontakDaruratForm.noTelepon, $event) || (ctx_r0.kontakDaruratForm.noTelepon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 162)(24, "button", 163);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_25_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveKontakDarurat());
    });
    \u0275\u0275conditionalCreate(25, KaryawanDetailComponent_Conditional_25_Conditional_25_Template, 1, 0, "span", 164);
    \u0275\u0275text(26, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 165);
    \u0275\u0275listener("click", function KaryawanDetailComponent_Conditional_25_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeKontakDaruratModal());
    });
    \u0275\u0275text(28, " Tutup ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingKontakDaruratId() ? "Edit Kontak Darurat" : "Tambah Kontak Darurat", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.kontakDaruratError() ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.kontakDaruratForm.nama);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.kontakDaruratForm.noTelepon);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.kontakDaruratSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.kontakDaruratSaving() ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.kontakDaruratSaving());
  }
}
var KaryawanDetailComponent = class _KaryawanDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.svc = inject(KaryawanService);
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
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
    this.activeTab = signal("pribadi", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pribadiSubTab = signal("informasi", ...ngDevMode ? [{ debugName: "pribadiSubTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sertifikatList = signal([], ...ngDevMode ? [{ debugName: "sertifikatList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sertifikatLoading = signal(false, ...ngDevMode ? [{ debugName: "sertifikatLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSertifikatModal = signal(false, ...ngDevMode ? [{ debugName: "showSertifikatModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sertifikatSaving = signal(false, ...ngDevMode ? [{ debugName: "sertifikatSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sertifikatError = signal("", ...ngDevMode ? [{ debugName: "sertifikatError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingSertifikatId = signal(null, ...ngDevMode ? [{ debugName: "editingSertifikatId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedSertifikatFile = null;
    this.sertifikatForm = {
      namaSertifikat: "",
      penerbit: "",
      nomorSertifikat: "",
      tanggalTerbit: null,
      tanggalKadaluarsa: null,
      keterangan: ""
    };
    this.organisasiList = signal([], ...ngDevMode ? [{ debugName: "organisasiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.organisasiLoading = signal(false, ...ngDevMode ? [{ debugName: "organisasiLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showOrganisasiModal = signal(false, ...ngDevMode ? [{ debugName: "showOrganisasiModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.organisasiSaving = signal(false, ...ngDevMode ? [{ debugName: "organisasiSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.organisasiError = signal("", ...ngDevMode ? [{ debugName: "organisasiError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingOrganisasiId = signal(null, ...ngDevMode ? [{ debugName: "editingOrganisasiId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.organisasiForm = {
      namaOrganisasi: "",
      jabatan: "",
      tanggalMulai: null,
      tanggalSelesai: null,
      masihAktif: false,
      deskripsi: ""
    };
    this.kontakDaruratList = signal([], ...ngDevMode ? [{ debugName: "kontakDaruratList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kontakDaruratLoading = signal(false, ...ngDevMode ? [{ debugName: "kontakDaruratLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showKontakDaruratModal = signal(false, ...ngDevMode ? [{ debugName: "showKontakDaruratModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kontakDaruratSaving = signal(false, ...ngDevMode ? [{ debugName: "kontakDaruratSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kontakDaruratError = signal("", ...ngDevMode ? [{ debugName: "kontakDaruratError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingKontakDaruratId = signal(null, ...ngDevMode ? [{ debugName: "editingKontakDaruratId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kontakDaruratForm = {
      nama: "",
      noTelepon: ""
    };
    this.penghargaanList = signal([], ...ngDevMode ? [{ debugName: "penghargaanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penghargaanLoading = signal(false, ...ngDevMode ? [{ debugName: "penghargaanLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPenghargaanModal = signal(false, ...ngDevMode ? [{ debugName: "showPenghargaanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penghargaanSaving = signal(false, ...ngDevMode ? [{ debugName: "penghargaanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penghargaanError = signal("", ...ngDevMode ? [{ debugName: "penghargaanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingPenghargaanId = signal(null, ...ngDevMode ? [{ debugName: "editingPenghargaanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.penghargaanForm = {
      namaPenghargaan: "",
      penerbit: "",
      tahun: null,
      deskripsi: ""
    };
    this.fileIdentitasList = signal([], ...ngDevMode ? [{ debugName: "fileIdentitasList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileIdentitasLoading = signal(false, ...ngDevMode ? [{ debugName: "fileIdentitasLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showFileIdentitasModal = signal(false, ...ngDevMode ? [{ debugName: "showFileIdentitasModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileIdentitasSaving = signal(false, ...ngDevMode ? [{ debugName: "fileIdentitasSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileIdentitasError = signal("", ...ngDevMode ? [{ debugName: "fileIdentitasError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileForm = { jenisIdentitas: "KTP", nomor: "" };
    this.selectedFile = null;
    this.jenisIdentitasOptions = [
      { value: "KTP", label: "KTP" },
      { value: "SIM_A", label: "SIM A" },
      { value: "SIM_B", label: "SIM B" },
      { value: "SIM_C", label: "SIM C" },
      { value: "PASPOR", label: "Paspor" },
      { value: "KITAS", label: "KITAS" },
      { value: "NPWP", label: "NPWP" },
      { value: "BPJS_KESEHATAN", label: "BPJS Kesehatan" },
      { value: "BPJS_KETENAGAKERJAAN", label: "BPJS Ketenagakerjaan" },
      { value: "LAINNYA", label: "Lainnya" }
    ];
    this.pengalamanKerjaList = signal([], ...ngDevMode ? [{ debugName: "pengalamanKerjaList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengalamanKerjaLoading = signal(false, ...ngDevMode ? [{ debugName: "pengalamanKerjaLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPengalamanModal = signal(false, ...ngDevMode ? [{ debugName: "showPengalamanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengalamanSaving = signal(false, ...ngDevMode ? [{ debugName: "pengalamanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengalamanError = signal("", ...ngDevMode ? [{ debugName: "pengalamanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingPengalamanId = signal(null, ...ngDevMode ? [{ debugName: "editingPengalamanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengalamanForm = {
      namaPerusahaan: "",
      jabatan: "",
      bidangIndustri: "",
      tanggalMulai: null,
      tanggalSelesai: null,
      masihBekerja: false,
      deskripsi: ""
    };
    this.bgPendidikanList = signal([], ...ngDevMode ? [{ debugName: "bgPendidikanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bgPendidikanLoading = signal(false, ...ngDevMode ? [{ debugName: "bgPendidikanLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBgPendidikanModal = signal(false, ...ngDevMode ? [{ debugName: "showBgPendidikanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bgPendidikanSaving = signal(false, ...ngDevMode ? [{ debugName: "bgPendidikanSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bgPendidikanError = signal("", ...ngDevMode ? [{ debugName: "bgPendidikanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingBgPendidikanId = signal(null, ...ngDevMode ? [{ debugName: "editingBgPendidikanId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bgPendidikanForm = {
      tingkatPendidikan: "S1",
      namaInstitusi: "",
      jurusan: "",
      tahunMasuk: null,
      tahunLulus: null,
      nilai: "",
      keterangan: ""
    };
    this.tingkatPendidikanOptions = [
      { value: "SD", label: "SD" },
      { value: "SMP", label: "SMP" },
      { value: "SMA_SMK", label: "SMA / SMK" },
      { value: "D1", label: "D1" },
      { value: "D2", label: "D2" },
      { value: "D3", label: "D3" },
      { value: "D4", label: "D4" },
      { value: "S1", label: "S1 (Sarjana)" },
      { value: "S2", label: "S2 (Magister)" },
      { value: "S3", label: "S3 (Doktor)" }
    ];
    this.portofolioList = signal([], ...ngDevMode ? [{ debugName: "portofolioList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.portofolioLoading = signal(false, ...ngDevMode ? [{ debugName: "portofolioLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPortofolioModal = signal(false, ...ngDevMode ? [{ debugName: "showPortofolioModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.portofolioSaving = signal(false, ...ngDevMode ? [{ debugName: "portofolioSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.portofolioError = signal("", ...ngDevMode ? [{ debugName: "portofolioError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingPortofolioId = signal(null, ...ngDevMode ? [{ debugName: "editingPortofolioId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.portofolioForm = {
      judul: "",
      urlLink: "",
      deskripsi: ""
    };
    this.kariTimelineItems = computed(() => {
      const k = this.karyawan();
      const items = [];
      if (!k)
        return items;
      if (k.tglMulaiBekerja) {
        const tgl = new Date(k.tglMulaiBekerja);
        items.push({
          id: "join",
          periode: tgl.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          title: "Bergabung sebagai Karyawan",
          subtitle: k.namaJabatan ? `${k.namaJabatan}${k.namaDivisi ? " \u2014 " + k.namaDivisi : ""}` : k.namaDivisi || void 0,
          badge: "Mulai Bekerja",
          badgeClass: "badge-aktif",
          icon: "bx-user-check",
          dotClass: "dot-green",
          description: void 0
        });
      }
      if (k.namaJabatan || k.namaDivisi) {
        items.push({
          id: "jabatan",
          periode: "Posisi Saat Ini",
          title: k.namaJabatan || "Belum ada jabatan",
          subtitle: k.namaDivisi ? `Divisi: ${k.namaDivisi}` : void 0,
          badge: this.statusKerjaLabel(k.statusKerja),
          badgeClass: this.statusKerjaBadgeClass(k.statusKerja),
          icon: "bx-briefcase",
          dotClass: "dot-blue",
          description: k.tglMulaiBekerja ? `Masa kerja: ${this.masaKerja(k.tglMulaiBekerja)}` : void 0
        });
      }
      if (k.statusKerja === "CUTI" && k.tglMulaiDapatCuti) {
        const tgl = new Date(k.tglMulaiDapatCuti);
        items.push({
          id: "cuti",
          periode: tgl.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          title: "Sedang Cuti",
          subtitle: k.tglCutiBeakhir ? `Berakhir: ${new Date(k.tglCutiBeakhir).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}` : void 0,
          badge: "Cuti",
          badgeClass: "badge-cuti",
          icon: "bx-calendar-check",
          dotClass: "dot-yellow",
          description: `Sisa cuti: ${k.sisaCuti} hari`
        });
      }
      if (["NONAKTIF", "RESIGN", "PENSIUN"].includes(k.statusKerja)) {
        items.push({
          id: "offboard",
          periode: "Status Terkini",
          title: this.statusKerjaLabel(k.statusKerja),
          subtitle: k.namaJabatan ? `Terakhir menjabat: ${k.namaJabatan}` : void 0,
          badge: this.statusKerjaLabel(k.statusKerja),
          badgeClass: this.statusKerjaBadgeClass(k.statusKerja),
          icon: k.statusKerja === "PENSIUN" ? "bx-trophy" : "bx-log-out",
          dotClass: "dot-gray",
          description: void 0
        });
      }
      return items;
    }, ...ngDevMode ? [{ debugName: "kariTimelineItems" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.svc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        this.loading.set(false);
        this.loadFileIdentitas(k.id);
        this.loadPengalamanKerja(k.id);
        this.loadBgPendidikan(k.id);
        this.loadPortofolio(k.id);
        this.loadPenghargaan(k.id);
        this.loadSertifikat(k.id);
        this.loadOrganisasi(k.id);
        this.loadKontakDarurat(k.id);
      },
      error: () => {
        this.error.set("Gagal memuat data karyawan.");
        this.loading.set(false);
      }
    });
  }
  loadFileIdentitas(karyawanId) {
    this.fileIdentitasLoading.set(true);
    this.svc.getFileIdentitas(karyawanId).subscribe({
      next: (list) => {
        this.fileIdentitasList.set(list);
        this.fileIdentitasLoading.set(false);
      },
      error: () => {
        this.fileIdentitasLoading.set(false);
      }
    });
  }
  openFileIdentitasModal() {
    this.fileForm = { jenisIdentitas: "KTP", nomor: "" };
    this.selectedFile = null;
    this.fileIdentitasError.set("");
    this.showFileIdentitasModal.set(true);
  }
  closeFileIdentitasModal() {
    this.showFileIdentitasModal.set(false);
  }
  onFileChange(event) {
    const input = event.target;
    this.selectedFile = input.files?.[0] ?? null;
  }
  saveFileIdentitas() {
    if (!this.fileForm.nomor.trim()) {
      this.fileIdentitasError.set("Nomor wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.fileIdentitasSaving.set(true);
    this.fileIdentitasError.set("");
    this.svc.addFileIdentitas(k.id, this.fileForm, this.selectedFile ?? void 0).subscribe({
      next: (item) => {
        this.fileIdentitasList.update((list) => [...list, item]);
        this.fileIdentitasSaving.set(false);
        this.closeFileIdentitasModal();
      },
      error: () => {
        this.fileIdentitasError.set("Gagal menyimpan file identitas.");
        this.fileIdentitasSaving.set(false);
      }
    });
  }
  deleteFileIdentitas(fileId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus file identitas ini?"))
      return;
    this.svc.deleteFileIdentitas(k.id, fileId).subscribe({
      next: () => this.fileIdentitasList.update((list) => list.filter((f) => f.id !== fileId)),
      error: () => alert("Gagal menghapus file identitas.")
    });
  }
  jenisIdentitasTambahanLabel(v) {
    return this.jenisIdentitasOptions.find((o) => o.value === v)?.label ?? v;
  }
  // ── Pengalaman Kerja methods ──────────────────────────────
  loadPengalamanKerja(karyawanId) {
    this.pengalamanKerjaLoading.set(true);
    this.svc.getPengalamanKerja(karyawanId).subscribe({
      next: (list) => {
        this.pengalamanKerjaList.set(list);
        this.pengalamanKerjaLoading.set(false);
      },
      error: () => {
        this.pengalamanKerjaLoading.set(false);
      }
    });
  }
  resetPengalamanForm() {
    this.pengalamanForm = {
      namaPerusahaan: "",
      jabatan: "",
      bidangIndustri: "",
      tanggalMulai: null,
      tanggalSelesai: null,
      masihBekerja: false,
      deskripsi: ""
    };
  }
  openPengalamanModal() {
    this.editingPengalamanId.set(null);
    this.resetPengalamanForm();
    this.pengalamanError.set("");
    this.showPengalamanModal.set(true);
  }
  openEditPengalamanModal(item) {
    this.editingPengalamanId.set(item.id);
    this.pengalamanForm = {
      namaPerusahaan: item.namaPerusahaan,
      jabatan: item.jabatan,
      bidangIndustri: item.bidangIndustri ?? "",
      tanggalMulai: item.tanggalMulai ?? null,
      tanggalSelesai: item.tanggalSelesai ?? null,
      masihBekerja: item.masihBekerja ?? false,
      deskripsi: item.deskripsi ?? ""
    };
    this.pengalamanError.set("");
    this.showPengalamanModal.set(true);
  }
  closePengalamanModal() {
    this.showPengalamanModal.set(false);
    this.editingPengalamanId.set(null);
  }
  savePengalamanKerja() {
    if (!this.pengalamanForm.namaPerusahaan?.trim()) {
      this.pengalamanError.set("Nama perusahaan wajib diisi.");
      return;
    }
    if (!this.pengalamanForm.jabatan?.trim()) {
      this.pengalamanError.set("Jabatan wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.pengalamanSaving.set(true);
    this.pengalamanError.set("");
    const editId = this.editingPengalamanId();
    const req = __spreadProps(__spreadValues({}, this.pengalamanForm), {
      tanggalSelesai: this.pengalamanForm.masihBekerja ? null : this.pengalamanForm.tanggalSelesai
    });
    const obs$ = editId ? this.svc.updatePengalamanKerja(k.id, editId, req) : this.svc.addPengalamanKerja(k.id, req);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.pengalamanKerjaList.update((list) => list.map((p) => p.id === editId ? item : p));
        } else {
          this.pengalamanKerjaList.update((list) => [...list, item]);
        }
        this.pengalamanSaving.set(false);
        this.closePengalamanModal();
      },
      error: () => {
        this.pengalamanError.set("Gagal menyimpan pengalaman kerja.");
        this.pengalamanSaving.set(false);
      }
    });
  }
  deletePengalamanKerja(pengalamanId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus pengalaman kerja ini?"))
      return;
    this.svc.deletePengalamanKerja(k.id, pengalamanId).subscribe({
      next: () => this.pengalamanKerjaList.update((list) => list.filter((p) => p.id !== pengalamanId)),
      error: () => alert("Gagal menghapus pengalaman kerja.")
    });
  }
  pengalamanPeriode(item) {
    const mulai = item.tanggalMulai ? new Date(item.tanggalMulai).toLocaleDateString("id-ID", { month: "long", year: "numeric" }) : "\u2014";
    const selesai = item.masihBekerja ? "Sekarang" : item.tanggalSelesai ? new Date(item.tanggalSelesai).toLocaleDateString("id-ID", { month: "long", year: "numeric" }) : "\u2014";
    return `${mulai} \u2013 ${selesai}`;
  }
  // ── Background Pendidikan methods ─────────────────────────
  loadBgPendidikan(karyawanId) {
    this.bgPendidikanLoading.set(true);
    this.svc.getBackgroundPendidikan(karyawanId).subscribe({
      next: (list) => {
        this.bgPendidikanList.set(list);
        this.bgPendidikanLoading.set(false);
      },
      error: () => {
        this.bgPendidikanLoading.set(false);
      }
    });
  }
  resetBgPendidikanForm() {
    this.bgPendidikanForm = {
      tingkatPendidikan: "S1",
      namaInstitusi: "",
      jurusan: "",
      tahunMasuk: null,
      tahunLulus: null,
      nilai: "",
      keterangan: ""
    };
  }
  openBgPendidikanModal() {
    this.editingBgPendidikanId.set(null);
    this.resetBgPendidikanForm();
    this.bgPendidikanError.set("");
    this.showBgPendidikanModal.set(true);
  }
  openEditBgPendidikanModal(item) {
    this.editingBgPendidikanId.set(item.id);
    this.bgPendidikanForm = {
      tingkatPendidikan: item.tingkatPendidikan,
      namaInstitusi: item.namaInstitusi,
      jurusan: item.jurusan ?? "",
      tahunMasuk: item.tahunMasuk ?? null,
      tahunLulus: item.tahunLulus ?? null,
      nilai: item.nilai ?? "",
      keterangan: item.keterangan ?? ""
    };
    this.bgPendidikanError.set("");
    this.showBgPendidikanModal.set(true);
  }
  closeBgPendidikanModal() {
    this.showBgPendidikanModal.set(false);
    this.editingBgPendidikanId.set(null);
  }
  saveBgPendidikan() {
    if (!this.bgPendidikanForm.namaInstitusi?.trim()) {
      this.bgPendidikanError.set("Nama institusi wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.bgPendidikanSaving.set(true);
    this.bgPendidikanError.set("");
    const editId = this.editingBgPendidikanId();
    const obs$ = editId ? this.svc.updateBackgroundPendidikan(k.id, editId, this.bgPendidikanForm) : this.svc.addBackgroundPendidikan(k.id, this.bgPendidikanForm);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.bgPendidikanList.update((list) => list.map((p) => p.id === editId ? item : p));
        } else {
          this.bgPendidikanList.update((list) => [...list, item]);
        }
        this.bgPendidikanSaving.set(false);
        this.closeBgPendidikanModal();
      },
      error: () => {
        this.bgPendidikanError.set("Gagal menyimpan background pendidikan.");
        this.bgPendidikanSaving.set(false);
      }
    });
  }
  deleteBgPendidikan(pendidikanId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus data pendidikan ini?"))
      return;
    this.svc.deleteBackgroundPendidikan(k.id, pendidikanId).subscribe({
      next: () => this.bgPendidikanList.update((list) => list.filter((p) => p.id !== pendidikanId)),
      error: () => alert("Gagal menghapus data pendidikan.")
    });
  }
  tingkatPendidikanLabel(v) {
    return this.tingkatPendidikanOptions.find((o) => o.value === v)?.label ?? (v || "\u2014");
  }
  // ── Portofolio methods ────────────────────────────────────
  loadPortofolio(karyawanId) {
    this.portofolioLoading.set(true);
    this.svc.getPortofolio(karyawanId).subscribe({
      next: (list) => {
        this.portofolioList.set(list);
        this.portofolioLoading.set(false);
      },
      error: () => {
        this.portofolioLoading.set(false);
      }
    });
  }
  resetPortofolioForm() {
    this.portofolioForm = { judul: "", urlLink: "", deskripsi: "" };
  }
  openPortofolioModal() {
    this.editingPortofolioId.set(null);
    this.resetPortofolioForm();
    this.portofolioError.set("");
    this.showPortofolioModal.set(true);
  }
  openEditPortofolioModal(item) {
    this.editingPortofolioId.set(item.id);
    this.portofolioForm = {
      judul: item.judul,
      urlLink: item.urlLink ?? "",
      deskripsi: item.deskripsi ?? ""
    };
    this.portofolioError.set("");
    this.showPortofolioModal.set(true);
  }
  closePortofolioModal() {
    this.showPortofolioModal.set(false);
    this.editingPortofolioId.set(null);
  }
  savePortofolio() {
    if (!this.portofolioForm.judul?.trim()) {
      this.portofolioError.set("Judul portofolio wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.portofolioSaving.set(true);
    this.portofolioError.set("");
    const editId = this.editingPortofolioId();
    const obs$ = editId ? this.svc.updatePortofolio(k.id, editId, this.portofolioForm) : this.svc.addPortofolio(k.id, this.portofolioForm);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.portofolioList.update((list) => list.map((p) => p.id === editId ? item : p));
        } else {
          this.portofolioList.update((list) => [...list, item]);
        }
        this.portofolioSaving.set(false);
        this.closePortofolioModal();
      },
      error: () => {
        this.portofolioError.set("Gagal menyimpan portofolio.");
        this.portofolioSaving.set(false);
      }
    });
  }
  deletePortofolio(portofolioId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus portofolio ini?"))
      return;
    this.svc.deletePortofolio(k.id, portofolioId).subscribe({
      next: () => this.portofolioList.update((list) => list.filter((p) => p.id !== portofolioId)),
      error: () => alert("Gagal menghapus portofolio.")
    });
  }
  fileIdentitasUrl(url) {
    if (!url)
      return null;
    if (url.startsWith("http"))
      return url;
    return `${environment.baseUrl}/${url}`;
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  jenisKelaminLabel(v) {
    return v === "LAKI_LAKI" ? "Laki-laki" : v === "PEREMPUAN" ? "Perempuan" : "\u2014";
  }
  statusPerkawinanLabel(v) {
    const map = {
      BELUM_MENIKAH: "Belum Menikah",
      MENIKAH: "Menikah",
      CERAI_HIDUP: "Cerai Hidup",
      CERAI_MATI: "Cerai Mati"
    };
    return v ? map[v] ?? v : "\u2014";
  }
  agamaLabel(v) {
    const map = {
      ISLAM: "Islam",
      KRISTEN: "Kristen Protestan",
      KATOLIK: "Kristen Katolik",
      HINDU: "Hindu",
      BUDHA: "Buddha",
      KONGHUCU: "Konghucu",
      LAINNYA: "Lainnya"
    };
    return v ? map[v] ?? v : "\u2014";
  }
  golonganDarahLabel(v) {
    if (!v)
      return "\u2014";
    return v.replace("_PLUS", "+").replace("_MINUS", "-");
  }
  zonaWaktuLabel(v) {
    const map = { WIB: "WIB (UTC+7)", WITA: "WITA (UTC+8)", WIT: "WIT (UTC+9)" };
    return v ? map[v] ?? v : "\u2014";
  }
  statusKerjaLabel(v) {
    const map = {
      AKTIF: "Aktif",
      NONAKTIF: "Non Aktif",
      CUTI: "Cuti",
      KONTRAK: "Kontrak",
      PROBASI: "Probasi",
      PENSIUN: "Pensiun",
      RESIGN: "Resign"
    };
    return v ? map[v] ?? v : "\u2014";
  }
  statusKerjaBadgeClass(v) {
    const map = {
      AKTIF: "badge-aktif",
      NONAKTIF: "badge-nonaktif",
      CUTI: "badge-cuti",
      KONTRAK: "badge-kontrak",
      PROBASI: "badge-probasi",
      PENSIUN: "badge-pensiun",
      RESIGN: "badge-resign"
    };
    return v ? map[v] ?? "" : "";
  }
  jenjangPendidikanLabel(v) {
    const map = {
      SD: "SD",
      SMP: "SMP",
      SMA_SMK: "SMA/SMK",
      D1: "D1",
      D2: "D2",
      D3: "D3",
      D4: "D4",
      S1: "S1 (Sarjana)",
      S2: "S2 (Magister)",
      S3: "S3 (Doktor)"
    };
    return v ? map[v] ?? v : "\u2014";
  }
  umur(tgl) {
    if (!tgl)
      return "\u2014";
    const lahir = new Date(tgl);
    const now = /* @__PURE__ */ new Date();
    let tahun = now.getFullYear() - lahir.getFullYear();
    const m = now.getMonth() - lahir.getMonth();
    if (m < 0 || m === 0 && now.getDate() < lahir.getDate())
      tahun--;
    return `${tahun} tahun`;
  }
  masaKerja(tgl) {
    if (!tgl)
      return "\u2014";
    const mulai = new Date(tgl);
    const now = /* @__PURE__ */ new Date();
    let tahun = now.getFullYear() - mulai.getFullYear();
    let bulan = now.getMonth() - mulai.getMonth();
    if (bulan < 0) {
      tahun--;
      bulan += 12;
    }
    if (tahun === 0)
      return `${bulan} bulan`;
    return bulan > 0 ? `${tahun} tahun ${bulan} bulan` : `${tahun} tahun`;
  }
  // ── Penghargaan methods ───────────────────────────────────
  loadPenghargaan(karyawanId) {
    this.penghargaanLoading.set(true);
    this.svc.getPenghargaan(karyawanId).subscribe({
      next: (list) => {
        this.penghargaanList.set(list);
        this.penghargaanLoading.set(false);
      },
      error: () => {
        this.penghargaanLoading.set(false);
      }
    });
  }
  resetPenghargaanForm() {
    this.penghargaanForm = { namaPenghargaan: "", penerbit: "", tahun: null, deskripsi: "" };
  }
  openPenghargaanModal() {
    this.editingPenghargaanId.set(null);
    this.resetPenghargaanForm();
    this.penghargaanError.set("");
    this.showPenghargaanModal.set(true);
  }
  openEditPenghargaanModal(item) {
    this.editingPenghargaanId.set(item.id);
    this.penghargaanForm = {
      namaPenghargaan: item.namaPenghargaan,
      penerbit: item.penerbit ?? "",
      tahun: item.tahun ?? null,
      deskripsi: item.deskripsi ?? ""
    };
    this.penghargaanError.set("");
    this.showPenghargaanModal.set(true);
  }
  closePenghargaanModal() {
    this.showPenghargaanModal.set(false);
    this.editingPenghargaanId.set(null);
  }
  savePenghargaan() {
    if (!this.penghargaanForm.namaPenghargaan?.trim()) {
      this.penghargaanError.set("Nama penghargaan wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.penghargaanSaving.set(true);
    this.penghargaanError.set("");
    const editId = this.editingPenghargaanId();
    const obs$ = editId ? this.svc.updatePenghargaan(k.id, editId, this.penghargaanForm) : this.svc.addPenghargaan(k.id, this.penghargaanForm);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.penghargaanList.update((list) => list.map((p) => p.id === editId ? item : p));
        } else {
          this.penghargaanList.update((list) => [...list, item]);
        }
        this.penghargaanSaving.set(false);
        this.closePenghargaanModal();
      },
      error: () => {
        this.penghargaanError.set("Gagal menyimpan penghargaan.");
        this.penghargaanSaving.set(false);
      }
    });
  }
  deletePenghargaan(penghargaanId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus penghargaan ini?"))
      return;
    this.svc.deletePenghargaan(k.id, penghargaanId).subscribe({
      next: () => this.penghargaanList.update((list) => list.filter((p) => p.id !== penghargaanId)),
      error: () => alert("Gagal menghapus penghargaan.")
    });
  }
  // ── Sertifikat methods ────────────────────────────────────
  loadSertifikat(karyawanId) {
    this.sertifikatLoading.set(true);
    this.svc.getSertifikat(karyawanId).subscribe({
      next: (list) => {
        this.sertifikatList.set(list);
        this.sertifikatLoading.set(false);
      },
      error: () => {
        this.sertifikatLoading.set(false);
      }
    });
  }
  resetSertifikatForm() {
    this.sertifikatForm = {
      namaSertifikat: "",
      penerbit: "",
      nomorSertifikat: "",
      tanggalTerbit: null,
      tanggalKadaluarsa: null,
      keterangan: ""
    };
    this.selectedSertifikatFile = null;
  }
  openSertifikatModal() {
    this.editingSertifikatId.set(null);
    this.resetSertifikatForm();
    this.sertifikatError.set("");
    this.showSertifikatModal.set(true);
  }
  openEditSertifikatModal(item) {
    this.editingSertifikatId.set(item.id);
    this.sertifikatForm = {
      namaSertifikat: item.namaSertifikat,
      penerbit: item.penerbit ?? "",
      nomorSertifikat: item.nomorSertifikat ?? "",
      tanggalTerbit: item.tanggalTerbit ?? null,
      tanggalKadaluarsa: item.tanggalKadaluarsa ?? null,
      keterangan: item.keterangan ?? ""
    };
    this.selectedSertifikatFile = null;
    this.sertifikatError.set("");
    this.showSertifikatModal.set(true);
  }
  closeSertifikatModal() {
    this.showSertifikatModal.set(false);
    this.editingSertifikatId.set(null);
  }
  onSertifikatFileChange(event) {
    const input = event.target;
    this.selectedSertifikatFile = input.files?.[0] ?? null;
  }
  saveSertifikat() {
    if (!this.sertifikatForm.namaSertifikat?.trim()) {
      this.sertifikatError.set("Nama sertifikat wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.sertifikatSaving.set(true);
    this.sertifikatError.set("");
    const editId = this.editingSertifikatId();
    const file = this.selectedSertifikatFile ?? void 0;
    const obs$ = editId ? this.svc.updateSertifikat(k.id, editId, this.sertifikatForm, file) : this.svc.addSertifikat(k.id, this.sertifikatForm, file);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.sertifikatList.update((list) => list.map((s) => s.id === editId ? item : s));
        } else {
          this.sertifikatList.update((list) => [...list, item]);
        }
        this.sertifikatSaving.set(false);
        this.closeSertifikatModal();
      },
      error: () => {
        this.sertifikatError.set("Gagal menyimpan sertifikat.");
        this.sertifikatSaving.set(false);
      }
    });
  }
  deleteSertifikat(sertifikatId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus sertifikat ini?"))
      return;
    this.svc.deleteSertifikat(k.id, sertifikatId).subscribe({
      next: () => this.sertifikatList.update((list) => list.filter((s) => s.id !== sertifikatId)),
      error: () => alert("Gagal menghapus sertifikat.")
    });
  }
  sertifikatFileUrl(url) {
    if (!url)
      return null;
    if (url.startsWith("http"))
      return url;
    return `${environment.baseUrl}/${url}`;
  }
  // ── Pengalaman Organisasi methods ─────────────────────────
  loadOrganisasi(karyawanId) {
    this.organisasiLoading.set(true);
    this.svc.getPengalamanOrganisasi(karyawanId).subscribe({
      next: (list) => {
        this.organisasiList.set(list);
        this.organisasiLoading.set(false);
      },
      error: () => {
        this.organisasiLoading.set(false);
      }
    });
  }
  resetOrganisasiForm() {
    this.organisasiForm = {
      namaOrganisasi: "",
      jabatan: "",
      tanggalMulai: null,
      tanggalSelesai: null,
      masihAktif: false,
      deskripsi: ""
    };
  }
  openOrganisasiModal() {
    this.editingOrganisasiId.set(null);
    this.resetOrganisasiForm();
    this.organisasiError.set("");
    this.showOrganisasiModal.set(true);
  }
  openEditOrganisasiModal(item) {
    this.editingOrganisasiId.set(item.id);
    this.organisasiForm = {
      namaOrganisasi: item.namaOrganisasi,
      jabatan: item.jabatan ?? "",
      tanggalMulai: item.tanggalMulai ?? null,
      tanggalSelesai: item.tanggalSelesai ?? null,
      masihAktif: item.masihAktif ?? false,
      deskripsi: item.deskripsi ?? ""
    };
    this.organisasiError.set("");
    this.showOrganisasiModal.set(true);
  }
  closeOrganisasiModal() {
    this.showOrganisasiModal.set(false);
    this.editingOrganisasiId.set(null);
  }
  saveOrganisasi() {
    if (!this.organisasiForm.namaOrganisasi?.trim()) {
      this.organisasiError.set("Nama organisasi wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.organisasiSaving.set(true);
    this.organisasiError.set("");
    const editId = this.editingOrganisasiId();
    const req = __spreadProps(__spreadValues({}, this.organisasiForm), {
      tanggalSelesai: this.organisasiForm.masihAktif ? null : this.organisasiForm.tanggalSelesai
    });
    const obs$ = editId ? this.svc.updatePengalamanOrganisasi(k.id, editId, req) : this.svc.addPengalamanOrganisasi(k.id, req);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.organisasiList.update((list) => list.map((o) => o.id === editId ? item : o));
        } else {
          this.organisasiList.update((list) => [...list, item]);
        }
        this.organisasiSaving.set(false);
        this.closeOrganisasiModal();
      },
      error: () => {
        this.organisasiError.set("Gagal menyimpan pengalaman organisasi.");
        this.organisasiSaving.set(false);
      }
    });
  }
  deleteOrganisasi(organisasiId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus pengalaman organisasi ini?"))
      return;
    this.svc.deletePengalamanOrganisasi(k.id, organisasiId).subscribe({
      next: () => this.organisasiList.update((list) => list.filter((o) => o.id !== organisasiId)),
      error: () => alert("Gagal menghapus pengalaman organisasi.")
    });
  }
  organisasiPeriode(item) {
    const fmt = (d) => {
      const dt = new Date(d);
      return dt.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
    };
    const mulai = item.tanggalMulai ? fmt(item.tanggalMulai) : "\u2014";
    const selesai = item.masihAktif ? "Sekarang" : item.tanggalSelesai ? fmt(item.tanggalSelesai) : "\u2014";
    return `${mulai} \u2013 ${selesai}`;
  }
  // ── Kontak Darurat methods ────────────────────────────────
  loadKontakDarurat(karyawanId) {
    this.kontakDaruratLoading.set(true);
    this.svc.getKontakDarurat(karyawanId).subscribe({
      next: (list) => {
        this.kontakDaruratList.set(list);
        this.kontakDaruratLoading.set(false);
      },
      error: () => {
        this.kontakDaruratLoading.set(false);
      }
    });
  }
  resetKontakDaruratForm() {
    this.kontakDaruratForm = { nama: "", noTelepon: "" };
  }
  openKontakDaruratModal() {
    this.editingKontakDaruratId.set(null);
    this.resetKontakDaruratForm();
    this.kontakDaruratError.set("");
    this.showKontakDaruratModal.set(true);
  }
  openEditKontakDaruratModal(item) {
    this.editingKontakDaruratId.set(item.id);
    this.kontakDaruratForm = {
      nama: item.nama,
      noTelepon: item.noTelepon ?? ""
    };
    this.kontakDaruratError.set("");
    this.showKontakDaruratModal.set(true);
  }
  closeKontakDaruratModal() {
    this.showKontakDaruratModal.set(false);
    this.editingKontakDaruratId.set(null);
  }
  saveKontakDarurat() {
    if (!this.kontakDaruratForm.nama?.trim()) {
      this.kontakDaruratError.set("Nama wajib diisi.");
      return;
    }
    const k = this.karyawan();
    if (!k)
      return;
    this.kontakDaruratSaving.set(true);
    this.kontakDaruratError.set("");
    const editId = this.editingKontakDaruratId();
    const obs$ = editId ? this.svc.updateKontakDarurat(k.id, editId, this.kontakDaruratForm) : this.svc.addKontakDarurat(k.id, this.kontakDaruratForm);
    obs$.subscribe({
      next: (item) => {
        if (editId) {
          this.kontakDaruratList.update((list) => list.map((c) => c.id === editId ? item : c));
        } else {
          this.kontakDaruratList.update((list) => [...list, item]);
        }
        this.kontakDaruratSaving.set(false);
        this.closeKontakDaruratModal();
      },
      error: () => {
        this.kontakDaruratError.set("Gagal menyimpan kontak darurat.");
        this.kontakDaruratSaving.set(false);
      }
    });
  }
  deleteKontakDarurat(kontakId) {
    const k = this.karyawan();
    if (!k)
      return;
    if (!confirm("Hapus kontak darurat ini?"))
      return;
    this.svc.deleteKontakDarurat(k.id, kontakId).subscribe({
      next: () => this.kontakDaruratList.update((list) => list.filter((c) => c.id !== kontakId)),
      error: () => alert("Gagal menghapus kontak darurat.")
    });
  }
  static {
    this.\u0275fac = function KaryawanDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanDetailComponent, selectors: [["app-karyawan-detail"]], decls: 26, vars: 11, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "card", "border-0", "shadow-sm", "p-5", "text-center", "text-muted"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bx", "bx-error-circle", "fs-5"], [1, "hero-card", "card", "border-0", "shadow-sm", "mb-4", "overflow-hidden"], [1, "hero-banner"], [1, "card-body", "pt-0", "px-4", "pb-4"], [1, "d-flex", "flex-column", "flex-sm-row", "align-items-start", "align-items-sm-end", "gap-3"], [1, "avatar-wrap", "flex-shrink-0"], ["alt", "Foto", 1, "avatar-img", 3, "src"], [1, "avatar-placeholder"], [1, "status-dot", 3, "title"], [1, "flex-grow-1", "pb-1"], [1, "mb-1", "fw-bold"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center"], [1, "text-muted", "small"], [1, "bx", "bx-id-card", "me-1"], [1, "chip", "chip-blue"], [1, "chip", "chip-purple"], [1, "chip"], [1, "d-flex", "gap-2", "flex-shrink-0"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "routerLink"], [1, "bx", "bx-edit", "me-1"], ["routerLink", "/karyawan", 1, "btn", "btn-outline-secondary", "btn-sm", "px-3"], [1, "bx", "bx-arrow-back", "me-1"], [1, "stats-row", "mt-4"], [1, "stat-item"], [1, "stat-label"], [1, "bx", "bx-time-five", "me-1"], [1, "stat-value"], [1, "bx", "bx-calendar", "me-1"], [1, "bx", "bx-briefcase", "me-1"], [1, "bx", "bx-leaf", "me-1"], [1, "tab-bar", "card", "border-0", "shadow-sm", "mb-4"], [1, "tab-list"], [1, "tab-btn", 3, "active"], [1, "row", "g-4"], [1, "bx", "bx-user"], [1, "bx", "bx-envelope", "me-1"], [1, "bx", "bx-phone", "me-1"], [1, "tab-btn", 3, "click"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "tab-list", "px-2", 2, "border-bottom", "1px solid #e9ecef"], [1, "tab-btn", 2, "font-size", ".82rem", "padding", ".5rem .9rem", 3, "active"], [1, "tab-btn", 2, "font-size", ".82rem", "padding", ".5rem .9rem", 3, "click"], [1, "col-lg-6"], [1, "info-card", "card", "border-0", "shadow-sm", "h-100"], [1, "info-card-header"], [1, "bx", "bx-user-circle", "me-2", "text-primary"], [1, "info-card-body"], [1, "info-row"], [1, "info-label"], [1, "info-value", "fw-semibold"], [1, "info-value"], [1, "text-muted", "ms-1", "small"], [1, "info-card", "card", "border-0", "shadow-sm", "mb-4"], [1, "bx", "bx-id-card", "me-2", "text-warning"], [1, "info-value", "fw-mono"], [1, "info-card", "card", "border-0", "shadow-sm"], [1, "bx", "bx-map", "me-2", "text-success"], [1, "col-12"], [1, "bx", "bx-note", "me-2", "text-info"], [1, "mb-0", "text-muted", 2, "font-size", ".9rem", "white-space", "pre-line"], [1, "info-card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "bx", "bx-folder-open", "me-2", "text-primary"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "info-card-body", "px-3", "py-2"], [1, "text-center", "text-muted", "py-3"], [1, "text-center", "text-muted", "py-5"], [1, "file-identitas-table-wrap"], [1, "bx", "bx-folder-open", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "mb-0"], [1, "btn", "btn-outline-primary", "btn-sm", "mt-3", 3, "click"], [1, "table", "table-sm", "table-hover", "mb-0", "align-middle"], [1, "table-light"], [2, "width", "40px"], [1, "text-end", 2, "width", "80px"], [1, "fw-mono"], ["target", "_blank", 1, "btn", "btn-outline-primary", "btn-xs", 3, "href"], [1, "text-end"], ["title", "Hapus", 1, "btn", "btn-outline-danger", "btn-xs", 3, "click"], [1, "bx", "bx-trash"], [1, "bx", "bx-link-external", "me-1"], [1, "bx", "bx-briefcase-alt-2", "me-2", "text-success"], [1, "bx", "bx-briefcase", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "text-end", 2, "width", "90px"], [1, "fw-semibold"], [1, "small", "text-muted", 2, "white-space", "nowrap"], [1, "badge", "bg-success", "ms-1", 2, "font-size", ".7rem"], [1, "small", "text-muted", 2, "max-width", "200px", "white-space", "pre-wrap"], ["title", "Edit", 1, "btn", "btn-outline-primary", "btn-xs", "me-1", 3, "click"], [1, "bx", "bx-edit"], [1, "bx", "bx-book-open", "me-2", "text-primary"], [1, "bx", "bx-graduation", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "bx", "bx-image", "me-2", "text-warning"], [1, "bx", "bx-image", "fs-1", "d-block", "mb-2", "opacity-25"], ["target", "_blank", 1, "text-primary", "small", 3, "href"], [1, "bx", "bx-medal", "me-2", "text-warning"], [1, "bx", "bx-medal", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "small", "text-muted"], [1, "bx", "bx-certification", "me-2", "text-success"], [1, "bx", "bx-certification", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "fw-mono", "small"], [1, "bx", "bx-group", "me-2", "text-info"], [1, "bx", "bx-group", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "bx", "bx-briefcase", "me-2", "text-primary"], [1, "info-value", "fw-mono", "fw-semibold"], [1, "info-value", "fw-semibold", "text-primary"], [1, "bx", "bx-leaf", "me-2", "text-success"], [1, "badge", "rounded-pill", "px-3", "py-1", 2, "background", "#dcfce7", "color", "#16a34a", "font-size", ".85rem"], [1, "bx", "bx-time-five", "me-2", "text-primary"], [1, "info-card-body", "px-4", "py-3"], [1, "karir-timeline"], [1, "bx", "bx-history", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "karir-timeline-item", 3, "last"], [1, "karir-timeline-item"], [1, "karir-timeline-left"], [1, "karir-dot", 3, "ngClass"], [1, "bx", 3, "ngClass"], [1, "karir-line"], [1, "karir-timeline-content"], [1, "karir-date", "text-muted", "small", "mb-1"], [1, "karir-title", "fw-semibold"], [1, "karir-subtitle", "text-muted", "small"], [1, "chip", "mt-1", 3, "class"], [1, "karir-description", "text-muted", "small", "mt-1", 2, "white-space", "pre-line"], [1, "chip", "mt-1"], [1, "bx", "bx-graduation", "me-2", "text-primary"], [1, "mb-0", "text-muted"], [1, "info-value", "text-muted", "fw-mono", "small"], [1, "bx", "bx-phone", "me-2", "text-success"], [1, "bx", "bx-phone-call", "me-2", "text-danger"], [1, "bx", "bx-phone-call", "fs-1", "d-block", "mb-2", "opacity-25"], [1, "modal-backdrop-custom", 3, "click"], [1, "modal-dialog-custom"], [1, "modal-content-custom"], [1, "modal-header-custom"], [1, "modal-title-custom"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body-custom"], [1, "alert", "alert-danger", "py-2", "small"], [1, "fi-form-row"], [1, "fi-form-label"], [1, "text-danger"], [1, "fi-form-control"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value"], ["type", "text", "placeholder", "Masukkan nomor identitas", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".jpg,.jpeg,.png,.pdf", 1, "form-control", 3, "change"], [1, "form-text", "text-muted", 2, "font-size", ".75rem"], [1, "modal-footer-custom"], [1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-outline-secondary", "px-4", 3, "click", "disabled"], ["type", "text", "placeholder", "Contoh: Frontend Developer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: PT. Maju Bersama", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "month", "placeholder", "Tahun", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "month", "placeholder", "Tahun", 1, "form-control", 3, "ngModel"], [1, "form-check", "mt-2"], ["type", "checkbox", "id", "masihBekerja", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "masihBekerja", 1, "form-check-label", "small"], ["rows", "4", "placeholder", "Deskripsi pekerjaan, tanggung jawab, dll.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Universitas Indonesia", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Teknik Informatika", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Tahun", "min", "1950", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], ["type", "text", "placeholder", "Contoh: 3.85 atau A", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Informasi tambahan, prestasi, dll.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Aplikasi E-Commerce", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://......", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Deskripsi singkat portofolio...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Karyawan Terbaik", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Meningkatkan penjualan 200%", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fi-form-control", 2, "max-width", "160px"], ["type", "number", "placeholder", "Tahun", "min", "1900", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], ["rows", "4", "placeholder", "Keterangan tambahan...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: AWS Certified Developer", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Amazon Web Services", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: AWS-12345678", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "text-muted", "small", "mt-1"], ["rows", "3", "placeholder", "Keterangan tambahan...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Himpunan Mahasiswa Teknik", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Contoh: Ketua Umum", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "month", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "month", 1, "form-control", 3, "ngModel"], ["type", "checkbox", "id", "masihAktif", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "masihAktif", 1, "form-check-label", "small"], ["rows", "4", "placeholder", "Deskripsi peran, program kerja, dll.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nama lengkap kontak darurat", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "Contoh: 08123456789", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function KaryawanDetailComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14, "Detail");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(15, KaryawanDetailComponent_Conditional_15_Template, 3, 0, "div", 10);
        \u0275\u0275conditionalCreate(16, KaryawanDetailComponent_Conditional_16_Template, 3, 1, "div", 11);
        \u0275\u0275conditionalCreate(17, KaryawanDetailComponent_Conditional_17_Template, 62, 38);
        \u0275\u0275conditionalCreate(18, KaryawanDetailComponent_Conditional_18_Template, 42, 6);
        \u0275\u0275conditionalCreate(19, KaryawanDetailComponent_Conditional_19_Template, 50, 11);
        \u0275\u0275conditionalCreate(20, KaryawanDetailComponent_Conditional_20_Template, 56, 14);
        \u0275\u0275conditionalCreate(21, KaryawanDetailComponent_Conditional_21_Template, 32, 8);
        \u0275\u0275conditionalCreate(22, KaryawanDetailComponent_Conditional_22_Template, 41, 10);
        \u0275\u0275conditionalCreate(23, KaryawanDetailComponent_Conditional_23_Template, 54, 11);
        \u0275\u0275conditionalCreate(24, KaryawanDetailComponent_Conditional_24_Template, 50, 11);
        \u0275\u0275conditionalCreate(25, KaryawanDetailComponent_Conditional_25_Template, 29, 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.loading() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = !ctx.loading() && ctx.karyawan()) ? 17 : -1, tmp_2_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFileIdentitasModal() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPengalamanModal() ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBgPendidikanModal() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPortofolioModal() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPenghargaanModal() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSertifikatModal() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showOrganisasiModal() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showKontakDaruratModal() ? 25 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, NgClass, LayoutComponent, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DatePipe], styles: ['@charset "UTF-8";\n\n\n.hero-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n}\n.hero-banner[_ngcontent-%COMP%] {\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 60%,\n      #a78bfa 100%);\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: -44px;\n}\n.avatar-wrap[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%], \n.avatar-wrap[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);\n  object-fit: cover;\n}\n.avatar-wrap[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.2rem;\n  color: #9ca3af;\n}\n.avatar-wrap[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n}\n.avatar-wrap[_ngcontent-%COMP%]   .status-dot.dot-aktif[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.avatar-wrap[_ngcontent-%COMP%]   .status-dot.dot-nonaktif[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0;\n  border: 1px solid #f1f3f5;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.stat-item[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 130px;\n  padding: 12px 18px;\n  border-right: 1px solid #f1f3f5;\n}\n.stat-item[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 4px;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.chip.chip-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.chip.chip-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.chip.badge-aktif[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.chip.badge-nonaktif[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.chip.badge-cuti[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.chip.badge-kontrak[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.chip.badge-probasi[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #9d174d;\n}\n.chip.badge-pensiun[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #374151;\n}\n.chip.badge-resign[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  padding: 4px 8px;\n}\n.tab-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.83rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff;\n  color: #6366f1;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  font-weight: 600;\n}\n.info-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.info-card-header[_ngcontent-%COMP%] {\n  padding: 14px 20px 12px;\n  font-weight: 600;\n  font-size: 0.88rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #374151;\n  display: flex;\n  align-items: center;\n}\n.info-card-body[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 10px 20px;\n  border-bottom: 1px solid #f9fafb;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-label[_ngcontent-%COMP%] {\n  min-width: 160px;\n  flex-shrink: 0;\n  font-size: 0.78rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #1f2937;\n  word-break: break-word;\n}\n.fw-mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    monospace;\n  letter-spacing: 0.03em;\n}\n.btn-xs[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-size: 0.76rem;\n  border-radius: 6px;\n  line-height: 1.5;\n}\n.file-identitas-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid #f1f3f5;\n}\n.file-identitas-table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n.file-identitas-table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  padding: 10px 14px;\n}\n.file-identitas-table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.modal-dialog-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal-content-custom[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  width: 100%;\n  max-width: 540px;\n  overflow: hidden;\n}\n.modal-header-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px 16px;\n  border-bottom: 1px solid #f1f3f5;\n}\n.modal-header-custom[_ngcontent-%COMP%]   .modal-title-custom[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-body-custom[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.modal-footer-custom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f1f3f5;\n}\n.fi-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.fi-form-label[_ngcontent-%COMP%] {\n  min-width: 130px;\n  padding-top: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: #374151;\n  flex-shrink: 0;\n}\n.fi-form-control[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.karir-timeline[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.karir-timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  min-height: 60px;\n}\n.karir-timeline-item.last[_ngcontent-%COMP%]   .karir-timeline-left[_ngcontent-%COMP%]   .karir-line[_ngcontent-%COMP%] {\n  display: none;\n}\n.karir-timeline-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  width: 36px;\n}\n.karir-dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.karir-dot.dot-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  border: 2px solid #86efac;\n}\n.karir-dot.dot-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n  border: 2px solid #93c5fd;\n}\n.karir-dot.dot-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n  border: 2px solid #fde047;\n}\n.karir-dot.dot-gray[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 2px solid #d1d5db;\n}\n.karir-dot.dot-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n  border: 2px solid #c4b5fd;\n}\n.karir-line[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 2px;\n  background: #e5e7eb;\n  margin: 4px 0;\n  min-height: 24px;\n}\n.karir-timeline-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 24px;\n}\n.karir-date[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #9ca3af;\n  letter-spacing: 0.02em;\n}\n.karir-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  color: #111827;\n  line-height: 1.4;\n}\n.karir-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.karir-description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=karyawan-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanDetailComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-detail", standalone: true, imports: [RouterLink, CommonModule, LayoutComponent, DatePipe, FormsModule], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          <li class="breadcrumb-item active">Detail</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  @if (loading()) {\r
    <div class="card border-0 shadow-sm p-5 text-center text-muted">\r
      <span class="spinner-border spinner-border-sm me-2"></span> Memuat data...\r
    </div>\r
  }\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
    </div>\r
  }\r
\r
  @if (!loading() && karyawan(); as k) {\r
\r
    <!-- \u2500\u2500 Profile Hero Card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="hero-card card border-0 shadow-sm mb-4 overflow-hidden">\r
\r
      <!-- Top gradient strip -->\r
      <div class="hero-banner"></div>\r
\r
      <div class="card-body pt-0 px-4 pb-4">\r
        <div class="d-flex flex-column flex-sm-row align-items-start align-items-sm-end gap-3">\r
\r
          <!-- Avatar -->\r
          <div class="avatar-wrap flex-shrink-0">\r
            @if (fotoUrl(k.fotoProfil); as url) {\r
              <img [src]="url" alt="Foto" class="avatar-img" />\r
            } @else {\r
              <div class="avatar-placeholder">\r
                <i class="bx bx-user"></i>\r
              </div>\r
            }\r
            <!-- Status dot -->\r
            <span class="status-dot"\r
                  [class.dot-aktif]="k.statusKerja === 'AKTIF'"\r
                  [class.dot-nonaktif]="k.statusKerja !== 'AKTIF'"\r
                  [title]="statusKerjaLabel(k.statusKerja)">\r
            </span>\r
          </div>\r
\r
          <!-- Nama & info ringkas -->\r
          <div class="flex-grow-1 pb-1">\r
            <h4 class="mb-1 fw-bold">{{ k.namaLengkap }}</h4>\r
            <div class="d-flex flex-wrap gap-2 align-items-center">\r
              <span class="text-muted small">\r
                <i class="bx bx-id-card me-1"></i>{{ k.nip }}\r
              </span>\r
              @if (k.namaJabatan) {\r
                <span class="chip chip-blue">{{ k.namaJabatan }}</span>\r
              }\r
              @if (k.namaDivisi) {\r
                <span class="chip chip-purple">{{ k.namaDivisi }}</span>\r
              }\r
              <span class="chip" [class]="statusKerjaBadgeClass(k.statusKerja)">\r
                {{ statusKerjaLabel(k.statusKerja) }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Action buttons -->\r
          <div class="d-flex gap-2 flex-shrink-0">\r
            <a [routerLink]="['/karyawan', k.id, 'edit']"\r
               class="btn btn-primary btn-sm px-3">\r
              <i class="bx bx-edit me-1"></i> Edit\r
            </a>\r
            <a routerLink="/karyawan" class="btn btn-outline-secondary btn-sm px-3">\r
              <i class="bx bx-arrow-back me-1"></i> Kembali\r
            </a>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Stats row -->\r
        <div class="stats-row mt-4">\r
          <div class="stat-item">\r
            <div class="stat-label"><i class="bx bx-time-five me-1"></i>Zona Waktu</div>\r
            <div class="stat-value">{{ zonaWaktuLabel(k.zonaWaktu) }}</div>\r
          </div>\r
          <div class="stat-item">\r
            <div class="stat-label"><i class="bx bx-calendar me-1"></i>Mulai Bekerja</div>\r
            <div class="stat-value">{{ k.tglMulaiBekerja ? (k.tglMulaiBekerja | date:'dd MMM yyyy') : '\u2014' }}</div>\r
          </div>\r
          <div class="stat-item">\r
            <div class="stat-label"><i class="bx bx-briefcase me-1"></i>Masa Kerja</div>\r
            <div class="stat-value">{{ masaKerja(k.tglMulaiBekerja) }}</div>\r
          </div>\r
          <div class="stat-item">\r
            <div class="stat-label"><i class="bx bx-leaf me-1"></i>Sisa Cuti</div>\r
            <div class="stat-value">{{ k.sisaCuti }} hari</div>\r
          </div>\r
          @if (k.email) {\r
            <div class="stat-item">\r
              <div class="stat-label"><i class="bx bx-envelope me-1"></i>Email</div>\r
              <div class="stat-value">{{ k.email }}</div>\r
            </div>\r
          }\r
          @if (k.noTelepon) {\r
            <div class="stat-item">\r
              <div class="stat-label"><i class="bx bx-phone me-1"></i>Telepon</div>\r
              <div class="stat-value">{{ k.noTelepon }}</div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="tab-bar card border-0 shadow-sm mb-4">\r
      <div class="tab-list">\r
        @for (tab of [\r
          {key:'pribadi',     label:'Data Pribadi',  icon:'bx-user'},\r
          {key:'kepegawaian', label:'Kepegawaian',   icon:'bx-briefcase'},\r
          {key:'pendidikan',  label:'Pendidikan',    icon:'bx-graduation'},\r
          {key:'akun',        label:'Akun & Kontak', icon:'bx-shield-alt-2'}\r
        ]; track tab.key) {\r
          <button class="tab-btn" [class.active]="activeTab() === tab.key"\r
                  (click)="activeTab.set($any(tab.key))">\r
            <i class="bx {{ tab.icon }} me-1"></i>{{ tab.label }}\r
          </button>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 Tab: Data Pribadi \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    @if (activeTab() === 'pribadi') {\r
\r
      <!-- Sub-tab bar -->\r
      <div class="card border-0 shadow-sm mb-4">\r
        <div class="tab-list px-2" style="border-bottom:1px solid #e9ecef;">\r
          @for (sub of [\r
            {key:'informasi',   label:'Informasi Pribadi',    icon:'bx-user-circle'},\r
            {key:'identitas',   label:'File Identitas',       icon:'bx-folder-open'},\r
            {key:'pengalaman',  label:'Pengalaman Kerja',     icon:'bx-briefcase-alt-2'},\r
            {key:'pendidikan',  label:'Background Pendidikan',icon:'bx-book-open'},\r
            {key:'portofolio',  label:'Portofolio',           icon:'bx-image'},\r
            {key:'penghargaan', label:'Penghargaan',          icon:'bx-medal'},\r
            {key:'sertifikat',  label:'Sertifikat',           icon:'bx-certification'},\r
            {key:'organisasi',  label:'Pengalaman Organisasi',icon:'bx-group'}\r
          ]; track sub.key) {\r
            <button class="tab-btn" style="font-size:.82rem;padding:.5rem .9rem"\r
                    [class.active]="pribadiSubTab() === sub.key"\r
                    (click)="pribadiSubTab.set($any(sub.key))">\r
              <i class="bx {{ sub.icon }} me-1"></i>{{ sub.label }}\r
            </button>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 Sub-tab: Informasi Pribadi \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'informasi') {\r
        <div class="row g-4">\r
          <div class="col-lg-6">\r
            <div class="info-card card border-0 shadow-sm h-100">\r
              <div class="info-card-header">\r
                <i class="bx bx-user-circle me-2 text-primary"></i>Identitas Diri\r
              </div>\r
              <div class="info-card-body">\r
                <div class="info-row">\r
                  <span class="info-label">Nama Lengkap</span>\r
                  <span class="info-value fw-semibold">{{ k.namaLengkap }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Jenis Kelamin</span>\r
                  <span class="info-value">{{ jenisKelaminLabel(k.jenisKelamin) }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Tempat Lahir</span>\r
                  <span class="info-value">{{ k.tempatLahir || '\u2014' }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Tanggal Lahir</span>\r
                  <span class="info-value">\r
                    {{ k.tanggalLahir ? (k.tanggalLahir | date:'dd MMMM yyyy') : '\u2014' }}\r
                    @if (k.tanggalLahir) {\r
                      <span class="text-muted ms-1 small">({{ umur(k.tanggalLahir) }})</span>\r
                    }\r
                  </span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Golongan Darah</span>\r
                  <span class="info-value">{{ golonganDarahLabel(k.golonganDarah) }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Status Perkawinan</span>\r
                  <span class="info-value">{{ statusPerkawinanLabel(k.statusPerkawinan) }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Agama</span>\r
                  <span class="info-value">{{ agamaLabel(k.agama) }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="col-lg-6">\r
            <div class="info-card card border-0 shadow-sm mb-4">\r
              <div class="info-card-header">\r
                <i class="bx bx-id-card me-2 text-warning"></i>Kartu Identitas\r
              </div>\r
              <div class="info-card-body">\r
                <div class="info-row">\r
                  <span class="info-label">Jenis Identitas</span>\r
                  <span class="info-value">{{ k.jenisIdentitas || '\u2014' }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Nomor Identitas</span>\r
                  <span class="info-value fw-mono">{{ k.nomorIdentitas || '\u2014' }}</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header">\r
                <i class="bx bx-map me-2 text-success"></i>Alamat\r
              </div>\r
              <div class="info-card-body">\r
                <div class="info-row">\r
                  <span class="info-label">Alamat KTP</span>\r
                  <span class="info-value">{{ k.alamatKtp || '\u2014' }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Kabupaten/Kota</span>\r
                  <span class="info-value">{{ k.namaKabupatenKota || '\u2014' }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Provinsi</span>\r
                  <span class="info-value">{{ k.namaProvinsi || '\u2014' }}</span>\r
                </div>\r
                <div class="info-row">\r
                  <span class="info-label">Alamat Domisili</span>\r
                  <span class="info-value">{{ k.alamatDomisili || '\u2014' }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          @if (k.catatan) {\r
            <div class="col-12">\r
              <div class="info-card card border-0 shadow-sm">\r
                <div class="info-card-header">\r
                  <i class="bx bx-note me-2 text-info"></i>Catatan\r
                </div>\r
                <div class="info-card-body">\r
                  <p class="mb-0 text-muted" style="font-size:.9rem;white-space:pre-line">{{ k.catatan }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: File Identitas \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'identitas') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-folder-open me-2 text-primary"></i>File Identitas Tambahan</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openFileIdentitasModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (fileIdentitasLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!fileIdentitasLoading() && fileIdentitasList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-folder-open fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada file identitas tambahan.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openFileIdentitasModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah File Identitas\r
                    </button>\r
                  </div>\r
                }\r
                @if (!fileIdentitasLoading() && fileIdentitasList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Jenis Identitas</th>\r
                          <th>Nomor</th>\r
                          <th>File</th>\r
                          <th class="text-end" style="width:80px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (fi of fileIdentitasList(); track fi.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td><span class="chip chip-blue">{{ jenisIdentitasTambahanLabel(fi.jenisIdentitas) }}</span></td>\r
                            <td class="fw-mono">{{ fi.nomor }}</td>\r
                            <td>\r
                              @if (fileIdentitasUrl(fi.fileUrl); as url) {\r
                                <a [href]="url" target="_blank" class="btn btn-outline-primary btn-xs">\r
                                  <i class="bx bx-link-external me-1"></i>Lihat\r
                                </a>\r
                              } @else {\r
                                <span class="text-muted small">\u2014</span>\r
                              }\r
                            </td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deleteFileIdentitas(fi.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: Pengalaman Kerja \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'pengalaman') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-briefcase-alt-2 me-2 text-success"></i>Riwayat Pengalaman Kerja</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openPengalamanModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (pengalamanKerjaLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!pengalamanKerjaLoading() && pengalamanKerjaList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-briefcase fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada riwayat pengalaman kerja.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openPengalamanModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah Pengalaman Kerja\r
                    </button>\r
                  </div>\r
                }\r
                @if (!pengalamanKerjaLoading() && pengalamanKerjaList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Jabatan / Posisi</th>\r
                          <th>Nama Perusahaan</th>\r
                          <th>Periode</th>\r
                          <th>Informasi Tambahan</th>\r
                          <th class="text-end" style="width:90px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (pk of pengalamanKerjaList(); track pk.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td class="fw-semibold">{{ pk.jabatan }}</td>\r
                            <td>\r
                              {{ pk.namaPerusahaan }}\r
                              @if (pk.bidangIndustri) {\r
                                <div class="text-muted small">{{ pk.bidangIndustri }}</div>\r
                              }\r
                            </td>\r
                            <td class="small text-muted" style="white-space:nowrap">\r
                              {{ pengalamanPeriode(pk) }}\r
                              @if (pk.masihBekerja) {\r
                                <span class="badge bg-success ms-1" style="font-size:.7rem">Aktif</span>\r
                              }\r
                            </td>\r
                            <td class="small text-muted" style="max-width:200px;white-space:pre-wrap">\r
                              {{ pk.deskripsi || '\u2014' }}\r
                            </td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-primary btn-xs me-1"\r
                                      (click)="openEditPengalamanModal(pk)" title="Edit">\r
                                <i class="bx bx-edit"></i>\r
                              </button>\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deletePengalamanKerja(pk.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: Background Pendidikan \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'pendidikan') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-book-open me-2 text-primary"></i>Background Pendidikan</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openBgPendidikanModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (bgPendidikanLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!bgPendidikanLoading() && bgPendidikanList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-graduation fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada riwayat pendidikan.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openBgPendidikanModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah Background Pendidikan\r
                    </button>\r
                  </div>\r
                }\r
                @if (!bgPendidikanLoading() && bgPendidikanList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Tingkat</th>\r
                          <th>Nama Institusi</th>\r
                          <th>Jurusan</th>\r
                          <th>Tahun Masuk</th>\r
                          <th>Tahun Lulus</th>\r
                          <th>Nilai / IPK</th>\r
                          <th class="text-end" style="width:90px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (bp of bgPendidikanList(); track bp.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td><span class="chip chip-blue">{{ tingkatPendidikanLabel(bp.tingkatPendidikan) }}</span></td>\r
                            <td class="fw-semibold">{{ bp.namaInstitusi }}</td>\r
                            <td>{{ bp.jurusan || '\u2014' }}</td>\r
                            <td>{{ bp.tahunMasuk || '\u2014' }}</td>\r
                            <td>{{ bp.tahunLulus || '\u2014' }}</td>\r
                            <td>{{ bp.nilai || '\u2014' }}</td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-primary btn-xs me-1"\r
                                      (click)="openEditBgPendidikanModal(bp)" title="Edit">\r
                                <i class="bx bx-edit"></i>\r
                              </button>\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deleteBgPendidikan(bp.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: Portofolio \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'portofolio') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-image me-2 text-warning"></i>Daftar Portofolio</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openPortofolioModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (portofolioLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!portofolioLoading() && portofolioList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-image fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada portofolio.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openPortofolioModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah Portofolio\r
                    </button>\r
                  </div>\r
                }\r
                @if (!portofolioLoading() && portofolioList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Judul</th>\r
                          <th>Situs Portofolio</th>\r
                          <th>Informasi Tambahan</th>\r
                          <th class="text-end" style="width:90px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (pf of portofolioList(); track pf.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td class="fw-semibold">{{ pf.judul }}</td>\r
                            <td>\r
                              @if (pf.urlLink) {\r
                                <a [href]="pf.urlLink" target="_blank" class="text-primary small">\r
                                  <i class="bx bx-link-external me-1"></i>{{ pf.urlLink }}\r
                                </a>\r
                              } @else {\r
                                <span class="text-muted small">\u2014</span>\r
                              }\r
                            </td>\r
                            <td class="small text-muted" style="max-width:200px;white-space:pre-wrap">\r
                              {{ pf.deskripsi || '\u2014' }}\r
                            </td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-primary btn-xs me-1"\r
                                      (click)="openEditPortofolioModal(pf)" title="Edit">\r
                                <i class="bx bx-edit"></i>\r
                              </button>\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deletePortofolio(pf.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: Penghargaan \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'penghargaan') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-medal me-2 text-warning"></i>Daftar Penghargaan</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openPenghargaanModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (penghargaanLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!penghargaanLoading() && penghargaanList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-medal fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada data penghargaan.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openPenghargaanModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah Penghargaan\r
                    </button>\r
                  </div>\r
                }\r
                @if (!penghargaanLoading() && penghargaanList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Nama Penghargaan</th>\r
                          <th>Judul Prestasi / Kontribusi</th>\r
                          <th>Tahun</th>\r
                          <th>Informasi Tambahan</th>\r
                          <th class="text-end" style="width:90px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (ph of penghargaanList(); track ph.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td class="fw-semibold">{{ ph.namaPenghargaan }}</td>\r
                            <td>{{ ph.penerbit || '\u2014' }}</td>\r
                            <td class="small text-muted">{{ ph.tahun || '\u2014' }}</td>\r
                            <td class="small text-muted" style="max-width:200px;white-space:pre-wrap">\r
                              {{ ph.deskripsi || '\u2014' }}\r
                            </td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-primary btn-xs me-1"\r
                                      (click)="openEditPenghargaanModal(ph)" title="Edit">\r
                                <i class="bx bx-edit"></i>\r
                              </button>\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deletePenghargaan(ph.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: Sertifikat \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'sertifikat') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-certification me-2 text-success"></i>Daftar Sertifikat</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openSertifikatModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (sertifikatLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!sertifikatLoading() && sertifikatList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-certification fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada data sertifikat.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openSertifikatModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah Sertifikat\r
                    </button>\r
                  </div>\r
                }\r
                @if (!sertifikatLoading() && sertifikatList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Nama Sertifikat</th>\r
                          <th>Penerbit / Lembaga</th>\r
                          <th>No. Sertifikat</th>\r
                          <th>Tgl Terbit</th>\r
                          <th>Tgl Kadaluarsa</th>\r
                          <th>File</th>\r
                          <th class="text-end" style="width:90px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (sr of sertifikatList(); track sr.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td class="fw-semibold">{{ sr.namaSertifikat }}</td>\r
                            <td>{{ sr.penerbit || '\u2014' }}</td>\r
                            <td class="fw-mono small">{{ sr.nomorSertifikat || '\u2014' }}</td>\r
                            <td class="small text-muted">\r
                              {{ sr.tanggalTerbit ? (sr.tanggalTerbit | date:'dd MMM yyyy') : '\u2014' }}\r
                            </td>\r
                            <td class="small text-muted">\r
                              @if (sr.tanggalKadaluarsa) {\r
                                <span>{{ sr.tanggalKadaluarsa | date:'dd MMM yyyy' }}</span>\r
                              } @else {\r
                                <span>\u2014</span>\r
                              }\r
                            </td>\r
                            <td>\r
                              @if (sertifikatFileUrl(sr.fileUrl); as url) {\r
                                <a [href]="url" target="_blank" class="btn btn-outline-primary btn-xs">\r
                                  <i class="bx bx-link-external me-1"></i>Lihat\r
                                </a>\r
                              } @else {\r
                                <span class="text-muted small">\u2014</span>\r
                              }\r
                            </td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-primary btn-xs me-1"\r
                                      (click)="openEditSertifikatModal(sr)" title="Edit">\r
                                <i class="bx bx-edit"></i>\r
                              </button>\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deleteSertifikat(sr.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
      <!-- \u2500\u2500 Sub-tab: Pengalaman Organisasi \u2500\u2500 -->\r
      @if (pribadiSubTab() === 'organisasi') {\r
        <div class="row g-4">\r
          <div class="col-12">\r
            <div class="info-card card border-0 shadow-sm">\r
              <div class="info-card-header d-flex align-items-center justify-content-between">\r
                <span><i class="bx bx-group me-2 text-info"></i>Pengalaman Organisasi</span>\r
                <button class="btn btn-primary btn-sm px-3" (click)="openOrganisasiModal()">\r
                  <i class="bx bx-plus me-1"></i>Tambah\r
                </button>\r
              </div>\r
              <div class="info-card-body px-3 py-2">\r
                @if (organisasiLoading()) {\r
                  <div class="text-center text-muted py-3">\r
                    <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                  </div>\r
                }\r
                @if (!organisasiLoading() && organisasiList().length === 0) {\r
                  <div class="text-center text-muted py-5">\r
                    <i class="bx bx-group fs-1 d-block mb-2 opacity-25"></i>\r
                    <p class="mb-0">Belum ada pengalaman organisasi.</p>\r
                    <button class="btn btn-outline-primary btn-sm mt-3" (click)="openOrganisasiModal()">\r
                      <i class="bx bx-plus me-1"></i>Tambah Pengalaman Organisasi\r
                    </button>\r
                  </div>\r
                }\r
                @if (!organisasiLoading() && organisasiList().length > 0) {\r
                  <div class="file-identitas-table-wrap">\r
                    <table class="table table-sm table-hover mb-0 align-middle">\r
                      <thead class="table-light">\r
                        <tr>\r
                          <th style="width:40px">#</th>\r
                          <th>Nama Organisasi</th>\r
                          <th>Jabatan / Posisi</th>\r
                          <th>Periode</th>\r
                          <th>Informasi Tambahan</th>\r
                          <th class="text-end" style="width:90px">Aksi</th>\r
                        </tr>\r
                      </thead>\r
                      <tbody>\r
                        @for (og of organisasiList(); track og.id; let i = $index) {\r
                          <tr>\r
                            <td class="text-muted small">{{ i + 1 }}</td>\r
                            <td class="fw-semibold">{{ og.namaOrganisasi }}</td>\r
                            <td>{{ og.jabatan || '\u2014' }}</td>\r
                            <td class="small text-muted" style="white-space:nowrap">\r
                              {{ organisasiPeriode(og) }}\r
                              @if (og.masihAktif) {\r
                                <span class="badge bg-success ms-1" style="font-size:.7rem">Aktif</span>\r
                              }\r
                            </td>\r
                            <td class="small text-muted" style="max-width:200px;white-space:pre-wrap">\r
                              {{ og.deskripsi || '\u2014' }}\r
                            </td>\r
                            <td class="text-end">\r
                              <button class="btn btn-outline-primary btn-xs me-1"\r
                                      (click)="openEditOrganisasiModal(og)" title="Edit">\r
                                <i class="bx bx-edit"></i>\r
                              </button>\r
                              <button class="btn btn-outline-danger btn-xs"\r
                                      (click)="deleteOrganisasi(og.id)" title="Hapus">\r
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
          </div>\r
        </div>\r
      }\r
\r
    }\r
\r
    <!-- \u2500\u2500 Tab: Kepegawaian \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    @if (activeTab() === 'kepegawaian') {\r
      <div class="row g-4">\r
        <div class="col-lg-6">\r
          <div class="info-card card border-0 shadow-sm h-100">\r
            <div class="info-card-header">\r
              <i class="bx bx-briefcase me-2 text-primary"></i>Data Kepegawaian\r
            </div>\r
            <div class="info-card-body">\r
              <div class="info-row">\r
                <span class="info-label">NIP</span>\r
                <span class="info-value fw-mono fw-semibold">{{ k.nip }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Jabatan</span>\r
                <span class="info-value">{{ k.namaJabatan || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Divisi</span>\r
                <span class="info-value">{{ k.namaDivisi || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Status Kerja</span>\r
                <span class="info-value">\r
                  <span class="chip" [class]="statusKerjaBadgeClass(k.statusKerja)">\r
                    {{ statusKerjaLabel(k.statusKerja) }}\r
                  </span>\r
                </span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Tanggal Mulai Bekerja</span>\r
                <span class="info-value">\r
                  {{ k.tglMulaiBekerja ? (k.tglMulaiBekerja | date:'dd MMMM yyyy') : '\u2014' }}\r
                </span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Masa Kerja</span>\r
                <span class="info-value fw-semibold text-primary">{{ masaKerja(k.tglMulaiBekerja) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="col-lg-6">\r
          <div class="info-card card border-0 shadow-sm h-100">\r
            <div class="info-card-header">\r
              <i class="bx bx-leaf me-2 text-success"></i>Informasi Cuti\r
            </div>\r
            <div class="info-card-body">\r
              <div class="info-row">\r
                <span class="info-label">Sisa Cuti</span>\r
                <span class="info-value">\r
                  <span class="badge rounded-pill px-3 py-1"\r
                        style="background:#dcfce7;color:#16a34a;font-size:.85rem">\r
                    {{ k.sisaCuti }} hari\r
                  </span>\r
                </span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Mulai Dapat Cuti</span>\r
                <span class="info-value">\r
                  {{ k.tglMulaiDapatCuti ? (k.tglMulaiDapatCuti | date:'dd MMMM yyyy') : '\u2014' }}\r
                </span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Cuti Berakhir</span>\r
                <span class="info-value">\r
                  {{ k.tglCutiBeakhir ? (k.tglCutiBeakhir | date:'dd MMMM yyyy') : '\u2014' }}\r
                </span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Zona Waktu</span>\r
                <span class="info-value">{{ zonaWaktuLabel(k.zonaWaktu) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 Timeline Karir \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="col-12">\r
          <div class="info-card card border-0 shadow-sm">\r
            <div class="info-card-header">\r
              <i class="bx bx-time-five me-2 text-primary"></i>Timeline Karir\r
            </div>\r
            <div class="info-card-body px-4 py-3">\r
\r
              @if (kariTimelineItems().length === 0) {\r
                <div class="text-center text-muted py-5">\r
                  <i class="bx bx-history fs-1 d-block mb-2 opacity-25"></i>\r
                  <p class="mb-0">Belum ada data untuk ditampilkan di timeline karir.</p>\r
                </div>\r
              }\r
\r
              @if (kariTimelineItems().length > 0) {\r
                <div class="karir-timeline">\r
                  @for (item of kariTimelineItems(); track item.id; let last = $last) {\r
                    <div class="karir-timeline-item" [class.last]="last">\r
                      <!-- Dot & line -->\r
                      <div class="karir-timeline-left">\r
                        <div class="karir-dot" [ngClass]="item.dotClass">\r
                          <i class="bx" [ngClass]="item.icon"></i>\r
                        </div>\r
                        @if (!last) {\r
                          <div class="karir-line"></div>\r
                        }\r
                      </div>\r
\r
                      <!-- Content -->\r
                      <div class="karir-timeline-content">\r
                        <div class="karir-date text-muted small mb-1">\r
                          <i class="bx bx-calendar me-1"></i>{{ item.periode }}\r
                        </div>\r
                        <div class="karir-title fw-semibold">{{ item.title }}</div>\r
                        @if (item.subtitle) {\r
                          <div class="karir-subtitle text-muted small">{{ item.subtitle }}</div>\r
                        }\r
                        @if (item.badge) {\r
                          <span class="chip mt-1" [class]="item.badgeClass">{{ item.badge }}</span>\r
                        }\r
                        @if (item.description) {\r
                          <div class="karir-description text-muted small mt-1"\r
                               style="white-space:pre-line">{{ item.description }}</div>\r
                        }\r
                      </div>\r
                    </div>\r
                  }\r
                </div>\r
              }\r
\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    }\r
\r
    <!-- \u2500\u2500 Tab: Pendidikan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    @if (activeTab() === 'pendidikan') {\r
      <div class="row g-4">\r
\r
        <!-- Ringkasan Pendidikan Terakhir (dari data karyawan) -->\r
        <div class="col-lg-6">\r
          <div class="info-card card border-0 shadow-sm">\r
            <div class="info-card-header">\r
              <i class="bx bx-graduation me-2 text-primary"></i>Pendidikan Terakhir\r
            </div>\r
            <div class="info-card-body">\r
              <div class="info-row">\r
                <span class="info-label">Jenjang Pendidikan</span>\r
                <span class="info-value">{{ jenjangPendidikanLabel(k.jenjangPendidikan) }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Jurusan</span>\r
                <span class="info-value">{{ k.jurusan || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Nama Institusi</span>\r
                <span class="info-value">{{ k.namaInstitusi || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Tahun Lulus</span>\r
                <span class="info-value">{{ k.tahunLulus || '\u2014' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Background Pendidikan CRUD -->\r
        <div class="col-12">\r
          <div class="info-card card border-0 shadow-sm">\r
            <div class="info-card-header d-flex align-items-center justify-content-between">\r
              <span><i class="bx bx-book-open me-2 text-primary"></i>Background Pendidikan</span>\r
              <button class="btn btn-primary btn-sm px-3" (click)="openBgPendidikanModal()">\r
                <i class="bx bx-plus me-1"></i>Tambah\r
              </button>\r
            </div>\r
            <div class="info-card-body px-3 py-2">\r
\r
              @if (bgPendidikanLoading()) {\r
                <div class="text-center text-muted py-3">\r
                  <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                </div>\r
              }\r
\r
              @if (!bgPendidikanLoading() && bgPendidikanList().length === 0) {\r
                <div class="text-center text-muted py-5">\r
                  <i class="bx bx-graduation fs-1 d-block mb-2 opacity-25"></i>\r
                  <p class="mb-0 text-muted">Belum ada riwayat pendidikan.</p>\r
                  <button class="btn btn-outline-primary btn-sm mt-3" (click)="openBgPendidikanModal()">\r
                    <i class="bx bx-plus me-1"></i>Tambah Background Pendidikan\r
                  </button>\r
                </div>\r
              }\r
\r
              @if (!bgPendidikanLoading() && bgPendidikanList().length > 0) {\r
                <div class="file-identitas-table-wrap">\r
                  <table class="table table-sm table-hover mb-0 align-middle">\r
                    <thead class="table-light">\r
                      <tr>\r
                        <th style="width:40px">#</th>\r
                        <th>Tingkat</th>\r
                        <th>Nama Institusi</th>\r
                        <th>Jurusan</th>\r
                        <th>Tahun Masuk</th>\r
                        <th>Tahun Lulus</th>\r
                        <th>Nilai / IPK</th>\r
                        <th class="text-end" style="width:90px">Aksi</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (bp of bgPendidikanList(); track bp.id; let i = $index) {\r
                        <tr>\r
                          <td class="text-muted small">{{ i + 1 }}</td>\r
                          <td><span class="chip chip-blue">{{ tingkatPendidikanLabel(bp.tingkatPendidikan) }}</span></td>\r
                          <td class="fw-semibold">{{ bp.namaInstitusi }}</td>\r
                          <td>{{ bp.jurusan || '\u2014' }}</td>\r
                          <td>{{ bp.tahunMasuk || '\u2014' }}</td>\r
                          <td>{{ bp.tahunLulus || '\u2014' }}</td>\r
                          <td>{{ bp.nilai || '\u2014' }}</td>\r
                          <td class="text-end">\r
                            <button class="btn btn-outline-primary btn-xs me-1"\r
                                    (click)="openEditBgPendidikanModal(bp)" title="Edit">\r
                              <i class="bx bx-edit"></i>\r
                            </button>\r
                            <button class="btn btn-outline-danger btn-xs"\r
                                    (click)="deleteBgPendidikan(bp.id)" title="Hapus">\r
                              <i class="bx bx-trash"></i>\r
                            </button>\r
                          </td>\r
                        </tr>\r
                      }\r
                    </tbody>\r
                  </table>\r
                </div>\r
              }\r
\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    }\r
\r
\r
    <!-- \u2500\u2500 Tab: Akun & Kontak \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    @if (activeTab() === 'akun') {\r
      <div class="row g-4">\r
        <div class="col-lg-6">\r
          <div class="info-card card border-0 shadow-sm">\r
            <div class="info-card-header">\r
              <i class="bx bx-user-circle me-2 text-primary"></i>Informasi Akun\r
            </div>\r
            <div class="info-card-body">\r
              <div class="info-row">\r
                <span class="info-label">Username</span>\r
                <span class="info-value fw-mono">{{ k.username || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Email</span>\r
                <span class="info-value">{{ k.email || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">ID Akun</span>\r
                <span class="info-value text-muted fw-mono small">{{ k.userId || '\u2014' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="col-lg-6">\r
          <div class="info-card card border-0 shadow-sm">\r
            <div class="info-card-header">\r
              <i class="bx bx-phone me-2 text-success"></i>Kontak\r
            </div>\r
            <div class="info-card-body">\r
              <div class="info-row">\r
                <span class="info-label">No. Telepon</span>\r
                <span class="info-value fw-mono">{{ k.noTelepon || '\u2014' }}</span>\r
              </div>\r
              <div class="info-row">\r
                <span class="info-label">Email</span>\r
                <span class="info-value">{{ k.email || '\u2014' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Kontak Darurat -->\r
        <div class="col-12">\r
          <div class="info-card card border-0 shadow-sm">\r
            <div class="info-card-header d-flex align-items-center justify-content-between">\r
              <span><i class="bx bx-phone-call me-2 text-danger"></i>Kontak Darurat</span>\r
              <button class="btn btn-primary btn-sm px-3" (click)="openKontakDaruratModal()">\r
                <i class="bx bx-plus me-1"></i>Tambah\r
              </button>\r
            </div>\r
            <div class="info-card-body px-3 py-2">\r
              @if (kontakDaruratLoading()) {\r
                <div class="text-center text-muted py-3">\r
                  <span class="spinner-border spinner-border-sm me-2"></span> Memuat...\r
                </div>\r
              }\r
              @if (!kontakDaruratLoading() && kontakDaruratList().length === 0) {\r
                <div class="text-center text-muted py-5">\r
                  <i class="bx bx-phone-call fs-1 d-block mb-2 opacity-25"></i>\r
                  <p class="mb-0">Belum ada kontak darurat.</p>\r
                  <button class="btn btn-outline-primary btn-sm mt-3" (click)="openKontakDaruratModal()">\r
                    <i class="bx bx-plus me-1"></i>Tambah Kontak Darurat\r
                  </button>\r
                </div>\r
              }\r
              @if (!kontakDaruratLoading() && kontakDaruratList().length > 0) {\r
                <div class="file-identitas-table-wrap">\r
                  <table class="table table-sm table-hover mb-0 align-middle">\r
                    <thead class="table-light">\r
                      <tr>\r
                        <th style="width:40px">#</th>\r
                        <th>Nama</th>\r
                        <th>No. Telepon</th>\r
                        <th class="text-end" style="width:90px">Aksi</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (kd of kontakDaruratList(); track kd.id; let i = $index) {\r
                        <tr>\r
                          <td class="text-muted small">{{ i + 1 }}</td>\r
                          <td class="fw-semibold">{{ kd.nama }}</td>\r
                          <td class="fw-mono">{{ kd.noTelepon || '\u2014' }}</td>\r
                          <td class="text-end">\r
                            <button class="btn btn-outline-primary btn-xs me-1"\r
                                    (click)="openEditKontakDaruratModal(kd)" title="Edit">\r
                              <i class="bx bx-edit"></i>\r
                            </button>\r
                            <button class="btn btn-outline-danger btn-xs"\r
                                    (click)="deleteKontakDarurat(kd.id)" title="Hapus">\r
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
        </div>\r
\r
      </div>\r
    }\r
\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah File Identitas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showFileIdentitasModal()) {\r
    <div class="modal-backdrop-custom" (click)="closeFileIdentitasModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <!-- Header -->\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">Tambah File Identitas</h5>\r
          <button type="button" class="btn-close" (click)="closeFileIdentitasModal()"></button>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="modal-body-custom">\r
\r
          @if (fileIdentitasError()) {\r
            <div class="alert alert-danger py-2 small">{{ fileIdentitasError() }}</div>\r
          }\r
\r
          <!-- Jenis Identitas -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Jenis Identitas <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <select class="form-select" [(ngModel)]="fileForm.jenisIdentitas">\r
                <option value="" disabled>Pilih</option>\r
                @for (opt of jenisIdentitasOptions; track opt.value) {\r
                  <option [value]="opt.value">{{ opt.label }}</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Nomor -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nomor <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control" [(ngModel)]="fileForm.nomor"\r
                     placeholder="Masukkan nomor identitas" />\r
            </div>\r
          </div>\r
\r
          <!-- File -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">File <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="file" class="form-control" (change)="onFileChange($event)"\r
                     accept=".jpg,.jpeg,.png,.pdf" />\r
              <div class="form-text text-muted" style="font-size:.75rem">Ukuran Maksimal 900kb</div>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="saveFileIdentitas()"\r
                  [disabled]="fileIdentitasSaving()">\r
            @if (fileIdentitasSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closeFileIdentitasModal()"\r
                  [disabled]="fileIdentitasSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Pengalaman Kerja \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showPengalamanModal()) {\r
    <div class="modal-backdrop-custom" (click)="closePengalamanModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <!-- Header -->\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingPengalamanId() ? 'Edit Pengalaman Kerja' : 'Tambah Pengalaman Kerja' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closePengalamanModal()"></button>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="modal-body-custom">\r
\r
          @if (pengalamanError()) {\r
            <div class="alert alert-danger py-2 small">{{ pengalamanError() }}</div>\r
          }\r
\r
          <!-- Posisi / Jabatan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Posisi <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="pengalamanForm.jabatan"\r
                     placeholder="Contoh: Frontend Developer" />\r
            </div>\r
          </div>\r
\r
          <!-- Nama Perusahaan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nama Perusahaan <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="pengalamanForm.namaPerusahaan"\r
                     placeholder="Contoh: PT. Maju Bersama" />\r
            </div>\r
          </div>\r
\r
          <!-- Bulan & Tahun Mulai -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Bulan Mulai <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="month" class="form-control"\r
                     [ngModel]="pengalamanForm.tanggalMulai ? pengalamanForm.tanggalMulai.substring(0,7) : ''"\r
                     (ngModelChange)="pengalamanForm.tanggalMulai = $event ? $event + '-01' : null"\r
                     placeholder="Tahun" />\r
            </div>\r
          </div>\r
\r
          <!-- Masih Bekerja -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Bulan Berakhir</label>\r
            <div class="fi-form-control">\r
              @if (!pengalamanForm.masihBekerja) {\r
                <input type="month" class="form-control"\r
                       [ngModel]="pengalamanForm.tanggalSelesai ? pengalamanForm.tanggalSelesai.substring(0,7) : ''"\r
                       (ngModelChange)="pengalamanForm.tanggalSelesai = $event ? $event + '-01' : null"\r
                       placeholder="Tahun" />\r
              }\r
              <div class="form-check mt-2">\r
                <input class="form-check-input" type="checkbox" id="masihBekerja"\r
                       [(ngModel)]="pengalamanForm.masihBekerja" />\r
                <label class="form-check-label small" for="masihBekerja">Masih bekerja di sini</label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Informasi Tambahan / Deskripsi -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Informasi Tambahan</label>\r
            <div class="fi-form-control">\r
              <textarea class="form-control" rows="4"\r
                        [(ngModel)]="pengalamanForm.deskripsi"\r
                        placeholder="Deskripsi pekerjaan, tanggung jawab, dll."></textarea>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="savePengalamanKerja()"\r
                  [disabled]="pengalamanSaving()">\r
            @if (pengalamanSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closePengalamanModal()"\r
                  [disabled]="pengalamanSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Background Pendidikan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showBgPendidikanModal()) {\r
    <div class="modal-backdrop-custom" (click)="closeBgPendidikanModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <!-- Header -->\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingBgPendidikanId() ? 'Edit Background Pendidikan' : 'Tambah Background Pendidikan' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeBgPendidikanModal()"></button>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="modal-body-custom">\r
\r
          @if (bgPendidikanError()) {\r
            <div class="alert alert-danger py-2 small">{{ bgPendidikanError() }}</div>\r
          }\r
\r
          <!-- Tingkat Pendidikan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Tingkat Pendidikan <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <select class="form-select" [(ngModel)]="bgPendidikanForm.tingkatPendidikan">\r
                @for (opt of tingkatPendidikanOptions; track opt.value) {\r
                  <option [value]="opt.value">{{ opt.label }}</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Nama Institusi / Sekolah -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nama Institusi <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="bgPendidikanForm.namaInstitusi"\r
                     placeholder="Contoh: Universitas Indonesia" />\r
            </div>\r
          </div>\r
\r
          <!-- Jurusan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Jurusan</label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="bgPendidikanForm.jurusan"\r
                     placeholder="Contoh: Teknik Informatika" />\r
            </div>\r
          </div>\r
\r
          <!-- Tahun Masuk & Tahun Lulus -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Tahun Masuk</label>\r
            <div class="fi-form-control">\r
              <input type="number" class="form-control"\r
                     [(ngModel)]="bgPendidikanForm.tahunMasuk"\r
                     placeholder="Tahun" min="1950" [max]="2100" />\r
            </div>\r
          </div>\r
\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Tahun Lulus</label>\r
            <div class="fi-form-control">\r
              <input type="number" class="form-control"\r
                     [(ngModel)]="bgPendidikanForm.tahunLulus"\r
                     placeholder="Tahun" min="1950" [max]="2100" />\r
            </div>\r
          </div>\r
\r
          <!-- Nilai / IPK -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nilai / IPK</label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="bgPendidikanForm.nilai"\r
                     placeholder="Contoh: 3.85 atau A" />\r
            </div>\r
          </div>\r
\r
          <!-- Keterangan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Keterangan</label>\r
            <div class="fi-form-control">\r
              <textarea class="form-control" rows="3"\r
                        [(ngModel)]="bgPendidikanForm.keterangan"\r
                        placeholder="Informasi tambahan, prestasi, dll."></textarea>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="saveBgPendidikan()"\r
                  [disabled]="bgPendidikanSaving()">\r
            @if (bgPendidikanSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closeBgPendidikanModal()"\r
                  [disabled]="bgPendidikanSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Portofolio \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showPortofolioModal()) {\r
    <div class="modal-backdrop-custom" (click)="closePortofolioModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <!-- Header -->\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingPortofolioId() ? 'Edit Portofolio' : 'Tambah Portofolio' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closePortofolioModal()"></button>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="modal-body-custom">\r
\r
          @if (portofolioError()) {\r
            <div class="alert alert-danger py-2 small">{{ portofolioError() }}</div>\r
          }\r
\r
          <!-- Judul -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Judul <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="portofolioForm.judul"\r
                     placeholder="Contoh: Aplikasi E-Commerce" />\r
            </div>\r
          </div>\r
\r
          <!-- Situs Portofolio / URL -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Situs Portofolio</label>\r
            <div class="fi-form-control">\r
              <input type="url" class="form-control"\r
                     [(ngModel)]="portofolioForm.urlLink"\r
                     placeholder="https://......" />\r
            </div>\r
          </div>\r
\r
          <!-- Informasi Tambahan / Deskripsi -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Informasi Tambahan</label>\r
            <div class="fi-form-control">\r
              <textarea class="form-control" rows="4"\r
                        [(ngModel)]="portofolioForm.deskripsi"\r
                        placeholder="Deskripsi singkat portofolio..."></textarea>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="savePortofolio()"\r
                  [disabled]="portofolioSaving()">\r
            @if (portofolioSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closePortofolioModal()"\r
                  [disabled]="portofolioSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Penghargaan \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showPenghargaanModal()) {\r
    <div class="modal-backdrop-custom" (click)="closePenghargaanModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingPenghargaanId() ? 'Edit Penghargaan' : 'Tambah Penghargaan' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closePenghargaanModal()"></button>\r
        </div>\r
\r
        <div class="modal-body-custom">\r
          @if (penghargaanError()) {\r
            <div class="alert alert-danger py-2 small">{{ penghargaanError() }}</div>\r
          }\r
\r
          <!-- Judul Penghargaan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Judul Penghargaan <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="penghargaanForm.namaPenghargaan"\r
                     placeholder="Contoh: Karyawan Terbaik" />\r
            </div>\r
          </div>\r
\r
          <!-- Judul Prestasi atau Kontribusi -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Judul Prestasi atau Kontribusi <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="penghargaanForm.penerbit"\r
                     placeholder="Contoh: Meningkatkan penjualan 200%" />\r
            </div>\r
          </div>\r
\r
          <!-- Tahun -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Tahun <span class="text-danger">*</span></label>\r
            <div class="fi-form-control" style="max-width:160px">\r
              <input type="number" class="form-control"\r
                     [(ngModel)]="penghargaanForm.tahun"\r
                     placeholder="Tahun" min="1900" [max]="2100" />\r
            </div>\r
          </div>\r
\r
          <!-- Informasi Tambahan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Informasi Tambahan</label>\r
            <div class="fi-form-control">\r
              <textarea class="form-control" rows="4"\r
                        [(ngModel)]="penghargaanForm.deskripsi"\r
                        placeholder="Keterangan tambahan..."></textarea>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="savePenghargaan()"\r
                  [disabled]="penghargaanSaving()">\r
            @if (penghargaanSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closePenghargaanModal()"\r
                  [disabled]="penghargaanSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Sertifikat \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showSertifikatModal()) {\r
    <div class="modal-backdrop-custom" (click)="closeSertifikatModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingSertifikatId() ? 'Edit Sertifikat' : 'Tambah Sertifikat' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeSertifikatModal()"></button>\r
        </div>\r
\r
        <div class="modal-body-custom">\r
          @if (sertifikatError()) {\r
            <div class="alert alert-danger py-2 small">{{ sertifikatError() }}</div>\r
          }\r
\r
          <!-- Nama Sertifikat -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nama Sertifikat <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="sertifikatForm.namaSertifikat"\r
                     placeholder="Contoh: AWS Certified Developer" />\r
            </div>\r
          </div>\r
\r
          <!-- Penerbit / Lembaga -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Penerbit / Lembaga</label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="sertifikatForm.penerbit"\r
                     placeholder="Contoh: Amazon Web Services" />\r
            </div>\r
          </div>\r
\r
          <!-- Nomor Sertifikat -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nomor Sertifikat</label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="sertifikatForm.nomorSertifikat"\r
                     placeholder="Contoh: AWS-12345678" />\r
            </div>\r
          </div>\r
\r
          <!-- Tanggal Terbit -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Tanggal Terbit</label>\r
            <div class="fi-form-control">\r
              <input type="date" class="form-control"\r
                     [(ngModel)]="sertifikatForm.tanggalTerbit" />\r
            </div>\r
          </div>\r
\r
          <!-- Tanggal Kadaluarsa -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Tanggal Kadaluarsa</label>\r
            <div class="fi-form-control">\r
              <input type="date" class="form-control"\r
                     [(ngModel)]="sertifikatForm.tanggalKadaluarsa" />\r
            </div>\r
          </div>\r
\r
          <!-- File Sertifikat -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">File Sertifikat</label>\r
            <div class="fi-form-control">\r
              <input type="file" class="form-control"\r
                     accept=".pdf,.jpg,.jpeg,.png"\r
                     (change)="onSertifikatFileChange($event)" />\r
              <div class="text-muted small mt-1">Format: PDF, JPG, PNG. Maks 5MB.</div>\r
            </div>\r
          </div>\r
\r
          <!-- Informasi Tambahan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Informasi Tambahan</label>\r
            <div class="fi-form-control">\r
              <textarea class="form-control" rows="3"\r
                        [(ngModel)]="sertifikatForm.keterangan"\r
                        placeholder="Keterangan tambahan..."></textarea>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="saveSertifikat()"\r
                  [disabled]="sertifikatSaving()">\r
            @if (sertifikatSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closeSertifikatModal()"\r
                  [disabled]="sertifikatSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Pengalaman Organisasi \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showOrganisasiModal()) {\r
    <div class="modal-backdrop-custom" (click)="closeOrganisasiModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingOrganisasiId() ? 'Edit Pengalaman Organisasi' : 'Tambah Pengalaman Organisasi' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeOrganisasiModal()"></button>\r
        </div>\r
\r
        <div class="modal-body-custom">\r
          @if (organisasiError()) {\r
            <div class="alert alert-danger py-2 small">{{ organisasiError() }}</div>\r
          }\r
\r
          <!-- Nama Organisasi -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nama Organisasi <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="organisasiForm.namaOrganisasi"\r
                     placeholder="Contoh: Himpunan Mahasiswa Teknik" />\r
            </div>\r
          </div>\r
\r
          <!-- Jabatan / Posisi -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Posisi <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="organisasiForm.jabatan"\r
                     placeholder="Contoh: Ketua Umum" />\r
            </div>\r
          </div>\r
\r
          <!-- Bulan Mulai -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Bulan Mulai <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="month" class="form-control"\r
                     [ngModel]="organisasiForm.tanggalMulai ? organisasiForm.tanggalMulai.substring(0,7) : ''"\r
                     (ngModelChange)="organisasiForm.tanggalMulai = $event ? $event + '-01' : null" />\r
            </div>\r
          </div>\r
\r
          <!-- Bulan Berakhir -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Bulan Berakhir</label>\r
            <div class="fi-form-control">\r
              @if (!organisasiForm.masihAktif) {\r
                <input type="month" class="form-control"\r
                       [ngModel]="organisasiForm.tanggalSelesai ? organisasiForm.tanggalSelesai.substring(0,7) : ''"\r
                       (ngModelChange)="organisasiForm.tanggalSelesai = $event ? $event + '-01' : null" />\r
              }\r
              <div class="form-check mt-2">\r
                <input class="form-check-input" type="checkbox" id="masihAktif"\r
                       [(ngModel)]="organisasiForm.masihAktif" />\r
                <label class="form-check-label small" for="masihAktif">Masih aktif di organisasi ini</label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Informasi Tambahan -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Informasi Tambahan</label>\r
            <div class="fi-form-control">\r
              <textarea class="form-control" rows="4"\r
                        [(ngModel)]="organisasiForm.deskripsi"\r
                        placeholder="Deskripsi peran, program kerja, dll."></textarea>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="saveOrganisasi()"\r
                  [disabled]="organisasiSaving()">\r
            @if (organisasiSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closeOrganisasiModal()"\r
                  [disabled]="organisasiSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 Modal: Tambah / Edit Kontak Darurat \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showKontakDaruratModal()) {\r
    <div class="modal-backdrop-custom" (click)="closeKontakDaruratModal()"></div>\r
    <div class="modal-dialog-custom">\r
      <div class="modal-content-custom">\r
\r
        <div class="modal-header-custom">\r
          <h5 class="modal-title-custom">\r
            {{ editingKontakDaruratId() ? 'Edit Kontak Darurat' : 'Tambah Kontak Darurat' }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="closeKontakDaruratModal()"></button>\r
        </div>\r
\r
        <div class="modal-body-custom">\r
          @if (kontakDaruratError()) {\r
            <div class="alert alert-danger py-2 small">{{ kontakDaruratError() }}</div>\r
          }\r
\r
          <!-- Nama -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nama <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="text" class="form-control"\r
                     [(ngModel)]="kontakDaruratForm.nama"\r
                     placeholder="Nama lengkap kontak darurat" />\r
            </div>\r
          </div>\r
\r
          <!-- No. Telepon -->\r
          <div class="fi-form-row">\r
            <label class="fi-form-label">Nomor Telepon <span class="text-danger">*</span></label>\r
            <div class="fi-form-control">\r
              <input type="tel" class="form-control"\r
                     [(ngModel)]="kontakDaruratForm.noTelepon"\r
                     placeholder="Contoh: 08123456789" />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer-custom">\r
          <button class="btn btn-primary px-4"\r
                  (click)="saveKontakDarurat()"\r
                  [disabled]="kontakDaruratSaving()">\r
            @if (kontakDaruratSaving()) {\r
              <span class="spinner-border spinner-border-sm me-1"></span>\r
            }\r
            Simpan\r
          </button>\r
          <button class="btn btn-outline-secondary px-4"\r
                  (click)="closeKontakDaruratModal()"\r
                  [disabled]="kontakDaruratSaving()">\r
            Tutup\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/karyawan/karyawan-detail/karyawan-detail.component.scss */\n.hero-card {\n  border-radius: 14px !important;\n}\n.hero-banner {\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 60%,\n      #a78bfa 100%);\n}\n.avatar-wrap {\n  position: relative;\n  margin-top: -44px;\n}\n.avatar-wrap .avatar-img,\n.avatar-wrap .avatar-placeholder {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);\n  object-fit: cover;\n}\n.avatar-wrap .avatar-placeholder {\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.2rem;\n  color: #9ca3af;\n}\n.avatar-wrap .status-dot {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n}\n.avatar-wrap .status-dot.dot-aktif {\n  background: #22c55e;\n}\n.avatar-wrap .status-dot.dot-nonaktif {\n  background: #9ca3af;\n}\n.stats-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0;\n  border: 1px solid #f1f3f5;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.stat-item {\n  flex: 1;\n  min-width: 130px;\n  padding: 12px 18px;\n  border-right: 1px solid #f1f3f5;\n}\n.stat-item:last-child {\n  border-right: none;\n}\n.stat-item .stat-label {\n  font-size: 0.72rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 4px;\n}\n.stat-item .stat-value {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.chip.chip-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.chip.chip-purple {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.chip.badge-aktif {\n  background: #dcfce7;\n  color: #15803d;\n}\n.chip.badge-nonaktif {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.chip.badge-cuti {\n  background: #fef9c3;\n  color: #a16207;\n}\n.chip.badge-kontrak {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.chip.badge-probasi {\n  background: #fce7f3;\n  color: #9d174d;\n}\n.chip.badge-pensiun {\n  background: #e5e7eb;\n  color: #374151;\n}\n.chip.badge-resign {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.tab-bar {\n  border-radius: 12px !important;\n  padding: 4px 8px;\n}\n.tab-list {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.tab-btn {\n  border: none;\n  background: transparent;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.83rem;\n  color: #6b7280;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.tab-btn:hover {\n  background: #f5f3ff;\n  color: #6366f1;\n}\n.tab-btn.active {\n  background: #6366f1;\n  color: #fff;\n  font-weight: 600;\n}\n.info-card {\n  border-radius: 12px !important;\n}\n.info-card-header {\n  padding: 14px 20px 12px;\n  font-weight: 600;\n  font-size: 0.88rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #374151;\n  display: flex;\n  align-items: center;\n}\n.info-card-body {\n  padding: 4px 0;\n}\n.info-row {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 10px 20px;\n  border-bottom: 1px solid #f9fafb;\n}\n.info-row:last-child {\n  border-bottom: none;\n}\n.info-label {\n  min-width: 160px;\n  flex-shrink: 0;\n  font-size: 0.78rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.info-value {\n  font-size: 0.88rem;\n  color: #1f2937;\n  word-break: break-word;\n}\n.fw-mono {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    monospace;\n  letter-spacing: 0.03em;\n}\n.btn-xs {\n  padding: 2px 8px;\n  font-size: 0.76rem;\n  border-radius: 6px;\n  line-height: 1.5;\n}\n.file-identitas-table-wrap {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid #f1f3f5;\n}\n.file-identitas-table-wrap table {\n  min-width: 480px;\n}\n.file-identitas-table-wrap table thead th {\n  font-size: 0.73rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  padding: 10px 14px;\n}\n.file-identitas-table-wrap table tbody td {\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.modal-backdrop-custom {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1040;\n}\n.modal-dialog-custom {\n  position: fixed;\n  inset: 0;\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal-content-custom {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  width: 100%;\n  max-width: 540px;\n  overflow: hidden;\n}\n.modal-header-custom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px 16px;\n  border-bottom: 1px solid #f1f3f5;\n}\n.modal-header-custom .modal-title-custom {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-body-custom {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.modal-footer-custom {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f1f3f5;\n}\n.fi-form-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.fi-form-label {\n  min-width: 130px;\n  padding-top: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: #374151;\n  flex-shrink: 0;\n}\n.fi-form-control {\n  flex: 1;\n}\n.karir-timeline {\n  padding: 8px 0;\n}\n.karir-timeline-item {\n  display: flex;\n  gap: 16px;\n  min-height: 60px;\n}\n.karir-timeline-item.last .karir-timeline-left .karir-line {\n  display: none;\n}\n.karir-timeline-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  width: 36px;\n}\n.karir-dot {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n  z-index: 1;\n}\n.karir-dot.dot-green {\n  background: #dcfce7;\n  color: #16a34a;\n  border: 2px solid #86efac;\n}\n.karir-dot.dot-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n  border: 2px solid #93c5fd;\n}\n.karir-dot.dot-yellow {\n  background: #fef9c3;\n  color: #a16207;\n  border: 2px solid #fde047;\n}\n.karir-dot.dot-gray {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 2px solid #d1d5db;\n}\n.karir-dot.dot-purple {\n  background: #ede9fe;\n  color: #7c3aed;\n  border: 2px solid #c4b5fd;\n}\n.karir-line {\n  flex: 1;\n  width: 2px;\n  background: #e5e7eb;\n  margin: 4px 0;\n  min-height: 24px;\n}\n.karir-timeline-content {\n  flex: 1;\n  padding-bottom: 24px;\n}\n.karir-date {\n  font-size: 0.76rem;\n  color: #9ca3af;\n  letter-spacing: 0.02em;\n}\n.karir-title {\n  font-size: 0.92rem;\n  color: #111827;\n  line-height: 1.4;\n}\n.karir-subtitle {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.karir-description {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=karyawan-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanDetailComponent, { className: "KaryawanDetailComponent", filePath: "src/app/features/karyawan/karyawan-detail/karyawan-detail.component.ts", lineNumber: 29 });
})();
export {
  KaryawanDetailComponent
};
//# sourceMappingURL=chunk-2JLFWCWU.js.map
