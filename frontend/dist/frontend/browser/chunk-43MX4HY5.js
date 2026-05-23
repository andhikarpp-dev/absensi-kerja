import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
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
  ActivatedRoute,
  CommonModule,
  HttpClient,
  HttpParams,
  NgClass,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  Injectable,
  computed,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/services/dokumen-karyawan.service.ts
var DokumenKaryawanService = class _DokumenKaryawanService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/dokumen`;
  }
  getAll(karyawanId, search) {
    let params = new HttpParams();
    if (search)
      params = params.set("search", search);
    return this.http.get(this.url(karyawanId), { params }).pipe(map((d) => d?.dokumen ?? []));
  }
  getKuota(karyawanId) {
    return this.http.get(`${this.url(karyawanId)}/kuota`).pipe(map((d) => d.kuota));
  }
  create(karyawanId, req, berkas) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    fd.append("berkas", berkas);
    return this.http.post(this.url(karyawanId), fd).pipe(map((d) => d.dokumen));
  }
  update(karyawanId, id, req, berkas) {
    const fd = new FormData();
    fd.append("data", new Blob([JSON.stringify(req)], { type: "application/json" }));
    if (berkas)
      fd.append("berkas", berkas);
    return this.http.put(`${this.url(karyawanId)}/${id}`, fd).pipe(map((d) => d.dokumen));
  }
  delete(karyawanId, id) {
    return this.http.delete(`${this.url(karyawanId)}/${id}`);
  }
  tambahKuotaBerbayar(karyawanId, jumlah) {
    return this.http.post(`${this.url(karyawanId)}/kuota-berbayar`, { jumlah });
  }
  static {
    this.\u0275fac = function DokumenKaryawanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DokumenKaryawanService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DokumenKaryawanService, factory: _DokumenKaryawanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DokumenKaryawanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/karyawan/karyawan-dokumen/karyawan-dokumen.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.jumlah;
function KaryawanDokumenComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 36);
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
function KaryawanDokumenComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_41_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.error.set(""));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanDokumenComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275text(2, " Memuat... ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDokumenComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "p", 40);
    \u0275\u0275text(3, "Belum ada dokumen.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_46_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTambah());
    });
    \u0275\u0275element(5, "i", 21);
    \u0275\u0275text(6, " Tambah Dokumen ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanDokumenComponent_Conditional_47_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDateTime(d_r5.tanggalUpload), " ");
  }
}
function KaryawanDokumenComponent_Conditional_47_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64);
    \u0275\u0275element(4, "i", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r5.hariReminder ?? 7, " Hari Sebelum ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(d_r5.tanggalBerakhir), " ");
  }
}
function KaryawanDokumenComponent_Conditional_47_For_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDokumenComponent_Conditional_47_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Gratis");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDokumenComponent_Conditional_47_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Berbayar");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDokumenComponent_Conditional_47_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46)(4, "a", 47)(5, "div", 48);
    \u0275\u0275element(6, "i", 49);
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(12, KaryawanDokumenComponent_Conditional_47_For_16_Conditional_12_Template, 3, 1, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 46);
    \u0275\u0275conditionalCreate(14, KaryawanDokumenComponent_Conditional_47_For_16_Conditional_14_Template, 6, 2)(15, KaryawanDokumenComponent_Conditional_47_For_16_Conditional_15_Template, 2, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 46);
    \u0275\u0275conditionalCreate(17, KaryawanDokumenComponent_Conditional_47_For_16_Conditional_17_Template, 2, 0, "span", 54)(18, KaryawanDokumenComponent_Conditional_47_For_16_Conditional_18_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 46)(20, "div", 56)(21, "button", 57);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_47_For_16_Template_button_click_21_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(d_r5));
    });
    \u0275\u0275element(22, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 59);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_47_For_16_Template_button_click_23_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.konfirmasiHapus(d_r5.id));
    });
    \u0275\u0275element(24, "i", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.namaDokumen);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", d_r5.fileUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.iconColor(d_r5.namaBerkas));
    \u0275\u0275property("ngClass", ctx_r0.iconForFile(d_r5.namaBerkas));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r5.namaBerkas, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", ctx_r0.formatBytes(d_r5.ukuranBerkas), ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r5.tanggalUpload ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r5.tanggalBerakhir ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(d_r5.statusKuota === "GRATIS" ? 17 : 18);
  }
}
function KaryawanDokumenComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "table", 42)(2, "thead", 43)(3, "tr")(4, "th", 44);
    \u0275\u0275text(5, "Nama Dokumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Berkas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Tanggal Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status Kuota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, KaryawanDokumenComponent_Conditional_47_For_16_Template, 25, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
function KaryawanDokumenComponent_Conditional_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorForm());
  }
}
function KaryawanDokumenComponent_Conditional_48_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function KaryawanDokumenComponent_Conditional_48_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.berkasNama());
  }
}
function KaryawanDokumenComponent_Conditional_48_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 87);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function KaryawanDokumenComponent_Conditional_48_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 88);
    \u0275\u0275text(1, " Simpan ");
  }
}
function KaryawanDokumenComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 66)(2, "div", 67)(3, "div", 68)(4, "h5", 69);
    \u0275\u0275element(5, "i", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_48_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 70);
    \u0275\u0275conditionalCreate(9, KaryawanDokumenComponent_Conditional_48_Conditional_9_Template, 2, 1, "div", 71);
    \u0275\u0275elementStart(10, "div", 12)(11, "label", 72);
    \u0275\u0275text(12, "Nama Dokumen ");
    \u0275\u0275elementStart(13, "span", 73);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 74);
    \u0275\u0275listener("ngModelChange", function KaryawanDokumenComponent_Conditional_48_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("namaDokumen", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "label", 72);
    \u0275\u0275text(18, " Berkas ");
    \u0275\u0275conditionalCreate(19, KaryawanDokumenComponent_Conditional_48_Conditional_19_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 75);
    \u0275\u0275listener("change", function KaryawanDokumenComponent_Conditional_48_Template_input_change_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onBerkasChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, KaryawanDokumenComponent_Conditional_48_Conditional_21_Template, 2, 1, "small", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 76)(23, "div", 77)(24, "label", 72);
    \u0275\u0275text(25, "Tanggal Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 78);
    \u0275\u0275listener("ngModelChange", function KaryawanDokumenComponent_Conditional_48_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("tanggalBerakhir", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 77)(28, "label", 72);
    \u0275\u0275text(29, "Reminder (hari sebelum)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 79);
    \u0275\u0275listener("ngModelChange", function KaryawanDokumenComponent_Conditional_48_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("hariReminder", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 80)(32, "label", 72);
    \u0275\u0275text(33, "Status Kuota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 81);
    \u0275\u0275listener("ngModelChange", function KaryawanDokumenComponent_Conditional_48_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateForm("statusKuota", $event));
    });
    \u0275\u0275elementStart(35, "option", 82);
    \u0275\u0275text(36, "Gratis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 83);
    \u0275\u0275text(38, "Berbayar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 84)(40, "button", 85);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_48_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeForm());
    });
    \u0275\u0275text(41, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 86);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_48_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(43, KaryawanDokumenComponent_Conditional_48_Conditional_43_Template, 2, 0)(44, KaryawanDokumenComponent_Conditional_48_Conditional_44_Template, 2, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editId() ? "Edit Dokumen" : "Tambah Dokumen", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.errorForm() ? 9 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.form().namaDokumen);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r0.editId() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.berkasNama() ? 21 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.form().tanggalBerakhir);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().hariReminder);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form().statusKuota);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 43 : 44);
  }
}
function KaryawanDokumenComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 89)(2, "div", 67)(3, "div", 90)(4, "h5", 91);
    \u0275\u0275element(5, "i", 92);
    \u0275\u0275text(6, "Hapus Dokumen? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 93);
    \u0275\u0275text(8, " Dokumen akan dihapus permanen dan tidak dapat dikembalikan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 94)(10, "button", 95);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_49_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.batalHapus());
    });
    \u0275\u0275text(11, "Batal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 96);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_49_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hapus());
    });
    \u0275\u0275element(13, "i", 97);
    \u0275\u0275text(14, " Ya, Hapus ");
    \u0275\u0275elementEnd()()()()();
  }
}
function KaryawanDokumenComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 98)(2, "div", 99)(3, "div", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r0.toastType() === "success")("bg-danger", ctx_r0.toastType() === "danger");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.toastMsg());
  }
}
function KaryawanDokumenComponent_Conditional_51_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_51_For_12_Template_button_click_0_listener() {
      const opt_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedKuotaOption.set(opt_r10));
    });
    \u0275\u0275elementStart(1, "div", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r0.selectedKuotaOption().jumlah === opt_r10.jumlah ? "#6366f1" : "#e5e7eb")("background", ctx_r0.selectedKuotaOption().jumlah === opt_r10.jumlah ? "#f0f0ff" : "#f9fafb")("color", ctx_r0.selectedKuotaOption().jumlah === opt_r10.jumlah ? "#4f46e5" : "#374151");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r10.jumlah);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Rp", ctx_r0.formatRupiah(opt_r10.harga));
  }
}
function KaryawanDokumenComponent_Conditional_51_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
    \u0275\u0275text(1, " Memproses... ");
  }
}
function KaryawanDokumenComponent_Conditional_51_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Pesan Kuota \u2192 ");
  }
}
function KaryawanDokumenComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 101)(2, "div", 67)(3, "div", 102)(4, "h5", 103);
    \u0275\u0275text(5, "Pesan Tambahan Kuota Dokumen Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_51_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPesanKuotaModal.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 104)(8, "label", 105);
    \u0275\u0275text(9, "Kuota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 106);
    \u0275\u0275repeaterCreate(11, KaryawanDokumenComponent_Conditional_51_For_12_Template, 5, 8, "button", 107, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 108)(14, "span", 109);
    \u0275\u0275text(15, "Total (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 110);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 111)(19, "button", 112);
    \u0275\u0275listener("click", function KaryawanDokumenComponent_Conditional_51_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pesanKuota());
    });
    \u0275\u0275conditionalCreate(20, KaryawanDokumenComponent_Conditional_51_Conditional_20_Template, 2, 0)(21, KaryawanDokumenComponent_Conditional_51_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 113);
    \u0275\u0275text(23, " Dengan melanjutkan, Anda menyetujui ");
    \u0275\u0275elementStart(24, "a", 114);
    \u0275\u0275text(25, "S&K Layanan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " dan ");
    \u0275\u0275elementStart(27, "a", 114);
    \u0275\u0275text(28, "Privasi");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " kami. ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.kuotaOptions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatRupiah(ctx_r0.selectedKuotaOption().harga), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pesanKuotaSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pesanKuotaSaving() ? 20 : 21);
  }
}
var KaryawanDokumenComponent = class _KaryawanDokumenComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.karyawanSvc = inject(KaryawanService);
    this.svc = inject(DokumenKaryawanService);
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kuota = signal({ totalGratis: 0, kuotaGratis: 2, totalBerbayar: 0, kuotaBerbayar: 0 }, ...ngDevMode ? [{ debugName: "kuota" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = computed(() => {
      const q = this.searchTerm().trim().toLowerCase();
      if (!q)
        return this.list();
      return this.list().filter((d) => d.namaDokumen?.toLowerCase().includes(q) || d.namaBerkas?.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showFormModal = signal(false, ...ngDevMode ? [{ debugName: "showFormModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editId = signal(null, ...ngDevMode ? [{ debugName: "editId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorForm = signal("", ...ngDevMode ? [{ debugName: "errorForm" }] : (
      /* istanbul ignore next */
      []
    ));
    this.berkasFile = null;
    this.berkasNama = signal("", ...ngDevMode ? [{ debugName: "berkasNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = signal({
      namaDokumen: "",
      tanggalBerakhir: "",
      hariReminder: 7,
      statusKuota: "GRATIS"
    }, ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPesanKuotaModal = signal(false, ...ngDevMode ? [{ debugName: "showPesanKuotaModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kuotaOptions = [
      { jumlah: 10, harga: 2e4 },
      { jumlah: 30, harga: 3e4 },
      { jumlah: 50, harga: 4e4 }
    ];
    this.selectedKuotaOption = signal(this.kuotaOptions[0], ...ngDevMode ? [{ debugName: "selectedKuotaOption" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pesanKuotaSaving = signal(false, ...ngDevMode ? [{ debugName: "pesanKuotaSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.konfirmasiHapusId = signal(null, ...ngDevMode ? [{ debugName: "konfirmasiHapusId" }] : (
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
  }
  openPesanKuota() {
    this.selectedKuotaOption.set(this.kuotaOptions[0]);
    this.showPesanKuotaModal.set(true);
  }
  pesanKuota() {
    const k = this.karyawan();
    if (!k)
      return;
    this.pesanKuotaSaving.set(true);
    const opt = this.selectedKuotaOption();
    this.svc.tambahKuotaBerbayar(k.id, opt.jumlah).subscribe({
      next: () => {
        this.pesanKuotaSaving.set(false);
        this.showPesanKuotaModal.set(false);
        this.showToast(`Kuota berbayar +${opt.jumlah} berhasil dipesan.`);
        this.loadKuota();
      },
      error: (err) => {
        this.pesanKuotaSaving.set(false);
        this.showToast(err?.error?.message ?? "Gagal memesan kuota.", "danger");
      }
    });
  }
  formatRupiah(value) {
    return value.toLocaleString("id-ID");
  }
  showToast(msg, type = "success") {
    if (this._toastTimer)
      clearTimeout(this._toastTimer);
    this.toastMsg.set(msg);
    this.toastType.set(type);
    this._toastTimer = setTimeout(() => this.toastMsg.set(""), 3e3);
  }
  // ── helpers ────────────────────────────────────────────
  formatTanggal(tgl) {
    if (!tgl)
      return "\u2014";
    const d = new Date(tgl.length <= 10 ? tgl + "T00:00:00" : tgl);
    if (isNaN(d.getTime()))
      return "\u2014";
    const hari = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][d.getDay()];
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${hari}, ${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()}`;
  }
  formatDateTime(dt) {
    if (!dt)
      return "";
    const d = new Date(dt);
    if (isNaN(d.getTime()))
      return "";
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${d.getDate().toString().padStart(2, "0")} ${bln} ${d.getFullYear()} @ ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  }
  formatBytes(bytes) {
    if (bytes == null)
      return "";
    if (bytes < 1024)
      return `${bytes} B`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }
  iconForFile(name) {
    if (!name)
      return "bxs-file";
    const ext = name.split(".").pop()?.toLowerCase() ?? "";
    if (ext === "pdf")
      return "bxs-file-pdf";
    if (["doc", "docx"].includes(ext))
      return "bxs-file-doc";
    if (["xls", "xlsx", "csv"].includes(ext))
      return "bxs-spreadsheet";
    if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext))
      return "bxs-image";
    return "bxs-file";
  }
  iconColor(name) {
    if (!name)
      return "#6b7280";
    const ext = name.split(".").pop()?.toLowerCase() ?? "";
    if (ext === "pdf")
      return "#dc2626";
    if (["doc", "docx"].includes(ext))
      return "#2563eb";
    if (["xls", "xlsx", "csv"].includes(ext))
      return "#059669";
    if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext))
      return "#7c3aed";
    return "#6b7280";
  }
  // ── data ───────────────────────────────────────────────
  load() {
    const k = this.karyawan();
    if (!k)
      return;
    this.loading.set(true);
    this.svc.getAll(k.id).subscribe({
      next: (d) => {
        this.list.set(d);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.showToast("Gagal memuat dokumen.", "danger");
      }
    });
  }
  loadKuota() {
    const k = this.karyawan();
    if (!k)
      return;
    this.svc.getKuota(k.id).subscribe({
      next: (q) => this.kuota.set(q),
      error: () => {
      }
    });
  }
  // ── form ───────────────────────────────────────────────
  openTambah() {
    this.editId.set(null);
    this.errorForm.set("");
    this.berkasFile = null;
    this.berkasNama.set("");
    this.form.set({
      namaDokumen: "",
      tanggalBerakhir: "",
      hariReminder: 7,
      statusKuota: "GRATIS"
    });
    this.showFormModal.set(true);
  }
  openEdit(d) {
    this.editId.set(d.id);
    this.errorForm.set("");
    this.berkasFile = null;
    this.berkasNama.set(d.namaBerkas ?? "");
    this.form.set({
      namaDokumen: d.namaDokumen,
      tanggalBerakhir: d.tanggalBerakhir ?? "",
      hariReminder: d.hariReminder ?? 7,
      statusKuota: d.statusKuota
    });
    this.showFormModal.set(true);
  }
  closeForm() {
    this.showFormModal.set(false);
  }
  updateForm(field, value) {
    this.form.update((f) => __spreadProps(__spreadValues({}, f), { [field]: value }));
  }
  onBerkasChange(evt) {
    const input = evt.target;
    if (input.files?.length) {
      this.berkasFile = input.files[0];
      this.berkasNama.set(input.files[0].name);
    }
  }
  simpan() {
    const k = this.karyawan();
    if (!k)
      return;
    const f = this.form();
    if (!f.namaDokumen?.trim()) {
      this.errorForm.set("Nama dokumen wajib diisi.");
      return;
    }
    if (!this.editId() && !this.berkasFile) {
      this.errorForm.set("Berkas wajib diunggah.");
      return;
    }
    const req = {
      namaDokumen: f.namaDokumen.trim(),
      tanggalBerakhir: f.tanggalBerakhir || null,
      hariReminder: f.hariReminder ?? 7,
      statusKuota: f.statusKuota
    };
    this.saving.set(true);
    this.errorForm.set("");
    const id = this.editId();
    const obs = id ? this.svc.update(k.id, id, req, this.berkasFile ?? void 0) : this.svc.create(k.id, req, this.berkasFile);
    obs.subscribe({
      next: () => {
        this.saving.set(false);
        this.showFormModal.set(false);
        this.showToast(id ? "Dokumen diperbarui." : "Dokumen berhasil ditambahkan.");
        this.load();
        this.loadKuota();
      },
      error: (err) => {
        this.saving.set(false);
        this.errorForm.set(err?.error?.message ?? "Gagal menyimpan dokumen.");
      }
    });
  }
  // ── hapus ──────────────────────────────────────────────
  konfirmasiHapus(id) {
    this.konfirmasiHapusId.set(id);
  }
  batalHapus() {
    this.konfirmasiHapusId.set(null);
  }
  hapus() {
    const k = this.karyawan();
    const id = this.konfirmasiHapusId();
    if (!k || id == null)
      return;
    this.svc.delete(k.id, id).subscribe({
      next: () => {
        this.konfirmasiHapusId.set(null);
        this.showToast("Dokumen berhasil dihapus.");
        this.load();
        this.loadKuota();
      },
      error: () => this.showToast("Gagal menghapus dokumen.", "danger")
    });
  }
  // ── lifecycle ──────────────────────────────────────────
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.karyawanSvc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        this.load();
        this.loadKuota();
      },
      error: () => this.error.set("Gagal memuat data karyawan.")
    });
  }
  static {
    this.\u0275fac = function KaryawanDokumenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanDokumenComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanDokumenComponent, selectors: [["app-karyawan-dokumen"]], decls: 52, vars: 10, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body"], [1, "mb-3"], [1, "bx", "bx-folder", "me-2"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "input-group", 2, "max-width", "320px"], ["type", "text", "placeholder", "Cari", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text", "bg-white"], [1, "bx", "bx-search"], [1, "ms-auto", "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "btn", "btn-tambah", "btn-sm", "px-3", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "kuota-badge", "kuota-gratis"], ["role", "button", "title", "Klik untuk tambah kuota berbayar", 1, "kuota-badge", "kuota-berbayar", 2, "cursor", "pointer", 3, "click"], [1, "bx", "bx-plus-circle", "ms-1"], ["title", "Riwayat", "type", "button", 1, "icon-btn"], [1, "bx", "bx-history"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "text-muted", "mb-2", 2, "font-size", ".78rem", "font-family", "monospace"], [1, "card", "border-0", "shadow-sm"], [1, "p-4", "text-center", "text-muted"], [1, "text-center", "py-5", "text-muted"], [1, "table-responsive"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [1, "position-fixed", "bottom-0", "end-0", "p-3", 2, "z-index", "2000"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1060"], [3, "routerLink"], ["type", "button", 1, "btn-close", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bx", "bx-folder-open", 2, "font-size", "3rem"], [1, "mt-2", "mb-3"], [1, "btn", "btn-tambah", "btn-sm", 3, "click"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "text-center", "text-muted", 2, "font-size", ".85rem"], [1, "text-start"], [2, "min-width", "160px"], [1, "text-center"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], [1, "berkas-card"], [1, "bx", 2, "font-size", "1.6rem", 3, "ngClass"], [1, "text-dark", 2, "font-size", ".85rem", "font-weight", "500"], [1, "text-muted", 2, "font-size", ".72rem"], [1, "text-muted", "mt-1", 2, "font-size", ".72rem"], [1, "text-muted"], [1, "badge", "rounded-pill", 2, "background", "#f3f4f6", "color", "#374151", "font-weight", "500"], [1, "badge", "rounded-pill", "bg-success"], [1, "d-inline-flex", "gap-2"], ["title", "Edit", 1, "icon-btn", 3, "click"], [1, "bx", "bx-edit"], ["title", "Hapus", 1, "icon-btn", "danger", 3, "click"], [1, "bx", "bx-trash"], [1, "bx", "bx-calendar"], [1, "badge", "bg-success", 2, "font-size", ".75rem"], [1, "bx", "bx-bell"], [1, "mt-1", 2, "font-size", ".78rem", "color", "#dc2626"], [1, "bx", "bx-calendar-event"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2", 2, "font-size", ".85rem"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "Contoh: Sertifikat K3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", 1, "form-control", 3, "change"], [1, "row"], [1, "col-md-6", "mb-3"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-2"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "GRATIS"], ["value", "BERBAYAR"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click", "disabled"], [1, "btn", "btn-tambah", "btn-sm", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-danger"], [1, "bx", "bx-trash", "me-2"], [1, "modal-body", "text-muted", 2, "font-size", ".9rem"], [1, "modal-footer", "border-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click"], [1, "btn", "btn-danger", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-trash", "me-1"], [1, "toast", "show", "align-items-center", "text-white", "border-0"], [1, "d-flex"], [1, "toast-body"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "480px"], [1, "modal-header", "border-bottom-0", "pb-1"], [1, "modal-title", "fw-semibold"], [1, "modal-body", "pt-2"], [1, "form-label", "text-muted", "mb-2", 2, "font-size", ".85rem"], [1, "d-flex", "gap-2", "mb-4"], [1, "btn", "flex-fill", "py-3", 2, "border", "2px solid", "border-radius", "10px", "font-size", ".85rem", "transition", "all .15s", 3, "border-color", "background", "color"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-3", "mb-3"], [1, "text-muted", 2, "font-size", ".85rem"], [2, "font-size", "1.5rem", "font-weight", "700", "color", "#6366f1"], [1, "d-grid", "mb-2"], [1, "btn", "btn-lg", "fw-semibold", "text-white", 2, "background", "#6366f1", "border-radius", "8px", 3, "click", "disabled"], [1, "text-muted", "text-center", 2, "font-size", ".75rem"], ["href", "#", 1, "text-decoration-none"], [1, "btn", "flex-fill", "py-3", 2, "border", "2px solid", "border-radius", "10px", "font-size", ".85rem", "transition", "all .15s", 3, "click"], [1, "fw-semibold"], [2, "font-size", ".75rem"]], template: function KaryawanDokumenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Karyawan");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, KaryawanDokumenComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Dokumen");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "h5", 12);
        \u0275\u0275element(19, "i", 13);
        \u0275\u0275text(20, "Dokumen Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "input", 16);
        \u0275\u0275listener("ngModelChange", function KaryawanDokumenComponent_Template_input_ngModelChange_23_listener($event) {
          return ctx.searchTerm.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 17);
        \u0275\u0275element(25, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 19)(27, "button", 20);
        \u0275\u0275listener("click", function KaryawanDokumenComponent_Template_button_click_27_listener() {
          return ctx.openTambah();
        });
        \u0275\u0275element(28, "i", 21);
        \u0275\u0275text(29, " Tambah Dokumen ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 22);
        \u0275\u0275text(31, " Kuota Gratis: ");
        \u0275\u0275elementStart(32, "strong");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "span", 23);
        \u0275\u0275listener("click", function KaryawanDokumenComponent_Template_span_click_34_listener() {
          return ctx.openPesanKuota();
        });
        \u0275\u0275text(35, " Kuota Berbayar: ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 25);
        \u0275\u0275element(40, "i", 26);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(41, KaryawanDokumenComponent_Conditional_41_Template, 3, 1, "div", 27);
        \u0275\u0275elementStart(42, "div", 28);
        \u0275\u0275text(43, " Kuota dokumen berbayar yang sudah digunakan tidak dapat dikembalikan. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 29);
        \u0275\u0275conditionalCreate(45, KaryawanDokumenComponent_Conditional_45_Template, 3, 0, "div", 30)(46, KaryawanDokumenComponent_Conditional_46_Template, 7, 0, "div", 31)(47, KaryawanDokumenComponent_Conditional_47_Template, 17, 0, "div", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(48, KaryawanDokumenComponent_Conditional_48_Template, 45, 11, "div", 33);
        \u0275\u0275conditionalCreate(49, KaryawanDokumenComponent_Conditional_49_Template, 15, 0, "div", 33);
        \u0275\u0275conditionalCreate(50, KaryawanDokumenComponent_Conditional_50_Template, 5, 5, "div", 34);
        \u0275\u0275conditionalCreate(51, KaryawanDokumenComponent_Conditional_51_Template, 30, 3, "div", 35);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.karyawan() ? 13 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.searchTerm());
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.kuota().kuotaGratis - ctx.kuota().totalGratis);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.kuota().kuotaBerbayar - ctx.kuota().totalBerbayar);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.error() ? 41 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 45 : ctx.rows().length === 0 ? 46 : 47);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFormModal() ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.konfirmasiHapusId() !== null ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toastMsg() ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPesanKuotaModal() ? 51 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, LayoutComponent], styles: ["\n.berkas-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 14px;\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 220px;\n}\n.berkas-card[_ngcontent-%COMP%]:hover {\n  border-color: #c7d2fe;\n}\n.kuota-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 0.82rem;\n  color: #4b5563;\n  font-weight: 500;\n}\n.kuota-badge.kuota-gratis[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.kuota-badge.kuota-berbayar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.btn-tambah[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n}\n.btn-tambah[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  color: #fff;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.icon-btn.danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  border-color: #ef4444;\n  color: #fff;\n}\n.icon-btn.danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n/*# sourceMappingURL=karyawan-dokumen.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanDokumenComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-dokumen", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Karyawan</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          @if (karyawan()) {\r
            <li class="breadcrumb-item">\r
              <a [routerLink]="['/karyawan', karyawan()!.id]">{{ karyawan()!.namaLengkap }}</a>\r
            </li>\r
          }\r
          <li class="breadcrumb-item active" aria-current="page">Dokumen</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header + Toolbar -->\r
  <div class="card border-0 shadow-sm mb-3">\r
    <div class="card-body">\r
      <h5 class="mb-3"><i class="bx bx-folder me-2"></i>Dokumen Karyawan</h5>\r
\r
      <div class="d-flex flex-wrap align-items-center gap-2">\r
        <!-- Search -->\r
        <div class="input-group" style="max-width: 320px">\r
          <input type="text" class="form-control" placeholder="Cari"\r
                 [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set($event)" />\r
          <span class="input-group-text bg-white"><i class="bx bx-search"></i></span>\r
        </div>\r
\r
        <div class="ms-auto d-flex flex-wrap align-items-center gap-2">\r
          <button class="btn btn-tambah btn-sm px-3" (click)="openTambah()">\r
            <i class="bx bx-plus me-1"></i> Tambah Dokumen\r
          </button>\r
          <span class="kuota-badge kuota-gratis">\r
            Kuota Gratis: <strong>{{ kuota().kuotaGratis - kuota().totalGratis }}</strong>\r
          </span>\r
          <span class="kuota-badge kuota-berbayar" role="button" style="cursor:pointer" (click)="openPesanKuota()" title="Klik untuk tambah kuota berbayar">\r
            Kuota Berbayar: <strong>{{ kuota().kuotaBerbayar - kuota().totalBerbayar }}</strong>\r
            <i class="bx bx-plus-circle ms-1"></i>\r
          </span>\r
          <button class="icon-btn" title="Riwayat" type="button">\r
            <i class="bx bx-history"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger alert-dismissible fade show" role="alert">\r
      {{ error() }}\r
      <button type="button" class="btn-close" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  <!-- Info -->\r
  <div class="text-muted mb-2" style="font-size:.78rem;font-family:monospace">\r
    Kuota dokumen berbayar yang sudah digunakan tidak dapat dikembalikan.\r
  </div>\r
\r
  <!-- Tabel -->\r
  <div class="card border-0 shadow-sm">\r
    @if (loading()) {\r
      <div class="p-4 text-center text-muted">\r
        <div class="spinner-border spinner-border-sm me-2"></div> Memuat...\r
      </div>\r
    } @else if (rows().length === 0) {\r
      <div class="text-center py-5 text-muted">\r
        <i class="bx bx-folder-open" style="font-size:3rem"></i>\r
        <p class="mt-2 mb-3">Belum ada dokumen.</p>\r
        <button class="btn btn-tambah btn-sm" (click)="openTambah()">\r
          <i class="bx bx-plus me-1"></i> Tambah Dokumen\r
        </button>\r
      </div>\r
    } @else {\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0">\r
          <thead class="text-center text-muted" style="font-size:.85rem">\r
            <tr>\r
              <th class="text-start">Nama Dokumen</th>\r
              <th>Berkas</th>\r
              <th>Tanggal Berakhir</th>\r
              <th>Status Kuota</th>\r
              <th>Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (d of rows(); track d.id) {\r
              <tr>\r
                <!-- Nama Dokumen -->\r
                <td style="min-width:160px">{{ d.namaDokumen }}</td>\r
\r
                <!-- Berkas -->\r
                <td class="text-center">\r
                  <a [href]="d.fileUrl" target="_blank" class="text-decoration-none">\r
                    <div class="berkas-card">\r
                      <i class="bx" [ngClass]="iconForFile(d.namaBerkas)"\r
                         [style.color]="iconColor(d.namaBerkas)"\r
                         style="font-size:1.6rem"></i>\r
                      <div class="text-start">\r
                        <div class="text-dark" style="font-size:.85rem;font-weight:500">\r
                          {{ d.namaBerkas }}\r
                        </div>\r
                        <div class="text-muted" style="font-size:.72rem">\r
                          ({{ formatBytes(d.ukuranBerkas) }})\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </a>\r
                  @if (d.tanggalUpload) {\r
                    <div class="text-muted mt-1" style="font-size:.72rem">\r
                      <i class="bx bx-calendar"></i> {{ formatDateTime(d.tanggalUpload) }}\r
                    </div>\r
                  }\r
                </td>\r
\r
                <!-- Tanggal Berakhir -->\r
                <td class="text-center">\r
                  @if (d.tanggalBerakhir) {\r
                    <span class="badge bg-success" style="font-size:.75rem">\r
                      <i class="bx bx-bell"></i> {{ d.hariReminder ?? 7 }} Hari Sebelum\r
                    </span>\r
                    <div class="mt-1" style="font-size:.78rem;color:#dc2626">\r
                      <i class="bx bx-calendar-event"></i> {{ formatTanggal(d.tanggalBerakhir) }}\r
                    </div>\r
                  } @else {\r
                    <span class="text-muted">\u2014</span>\r
                  }\r
                </td>\r
\r
                <!-- Status Kuota -->\r
                <td class="text-center">\r
                  @if (d.statusKuota === 'GRATIS') {\r
                    <span class="badge rounded-pill" style="background:#f3f4f6;color:#374151;font-weight:500">Gratis</span>\r
                  } @else {\r
                    <span class="badge rounded-pill bg-success">Berbayar</span>\r
                  }\r
                </td>\r
\r
                <!-- Aksi -->\r
                <td class="text-center">\r
                  <div class="d-inline-flex gap-2">\r
                    <button class="icon-btn" title="Edit" (click)="openEdit(d)">\r
                      <i class="bx bx-edit"></i>\r
                    </button>\r
                    <button class="icon-btn danger" title="Hapus" (click)="konfirmasiHapus(d.id)">\r
                      <i class="bx bx-trash"></i>\r
                    </button>\r
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
  <!-- Modal Form -->\r
  @if (showFormModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header">\r
            <h5 class="modal-title">\r
              <i class="bx bx-folder me-2"></i>\r
              {{ editId() ? 'Edit Dokumen' : 'Tambah Dokumen' }}\r
            </h5>\r
            <button type="button" class="btn-close" (click)="closeForm()"></button>\r
          </div>\r
          <div class="modal-body">\r
            @if (errorForm()) {\r
              <div class="alert alert-danger py-2" style="font-size:.85rem">{{ errorForm() }}</div>\r
            }\r
\r
            <div class="mb-3">\r
              <label class="form-label">Nama Dokumen <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control"\r
                     [ngModel]="form().namaDokumen"\r
                     (ngModelChange)="updateForm('namaDokumen', $event)"\r
                     placeholder="Contoh: Sertifikat K3" />\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">\r
                Berkas\r
                @if (!editId()) { <span class="text-danger">*</span> }\r
              </label>\r
              <input type="file" class="form-control" (change)="onBerkasChange($event)" />\r
              @if (berkasNama()) {\r
                <small class="text-muted">{{ berkasNama() }}</small>\r
              }\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Tanggal Berakhir</label>\r
                <input type="date" class="form-control"\r
                       [ngModel]="form().tanggalBerakhir"\r
                       (ngModelChange)="updateForm('tanggalBerakhir', $event)" />\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">Reminder (hari sebelum)</label>\r
                <input type="number" min="0" class="form-control"\r
                       [ngModel]="form().hariReminder"\r
                       (ngModelChange)="updateForm('hariReminder', $event)" />\r
              </div>\r
            </div>\r
\r
            <div class="mb-2">\r
              <label class="form-label">Status Kuota</label>\r
              <select class="form-select"\r
                      [ngModel]="form().statusKuota"\r
                      (ngModelChange)="updateForm('statusKuota', $event)">\r
                <option value="GRATIS">Gratis</option>\r
                <option value="BERBAYAR">Berbayar</option>\r
              </select>\r
            </div>\r
          </div>\r
          <div class="modal-footer">\r
            <button class="btn btn-outline-secondary btn-sm px-4"\r
                    (click)="closeForm()" [disabled]="saving()">Batal</button>\r
            <button class="btn btn-tambah btn-sm px-4"\r
                    (click)="simpan()" [disabled]="saving()">\r
              @if (saving()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span> Menyimpan...\r
              } @else {\r
                <i class="bx bx-save me-1"></i> Simpan\r
              }\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Modal Konfirmasi Hapus -->\r
  @if (konfirmasiHapusId() !== null) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-0 pb-0">\r
            <h5 class="modal-title text-danger">\r
              <i class="bx bx-trash me-2"></i>Hapus Dokumen?\r
            </h5>\r
          </div>\r
          <div class="modal-body text-muted" style="font-size:.9rem">\r
            Dokumen akan dihapus permanen dan tidak dapat dikembalikan.\r
          </div>\r
          <div class="modal-footer border-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="batalHapus()">Batal</button>\r
            <button class="btn btn-danger btn-sm px-4" (click)="hapus()">\r
              <i class="bx bx-trash me-1"></i> Ya, Hapus\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Toast -->\r
  @if (toastMsg()) {\r
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index:2000">\r
      <div class="toast show align-items-center text-white border-0"\r
           [class.bg-success]="toastType() === 'success'"\r
           [class.bg-danger]="toastType() === 'danger'">\r
        <div class="d-flex">\r
          <div class="toast-body">{{ toastMsg() }}</div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Modal Pesan Tambahan Kuota -->\r
  @if (showPesanKuotaModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1060">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:480px">\r
        <div class="modal-content border-0 shadow">\r
          <div class="modal-header border-bottom-0 pb-1">\r
            <h5 class="modal-title fw-semibold">Pesan Tambahan Kuota Dokumen Karyawan</h5>\r
            <button type="button" class="btn-close" (click)="showPesanKuotaModal.set(false)"></button>\r
          </div>\r
          <div class="modal-body pt-2">\r
            <label class="form-label text-muted mb-2" style="font-size:.85rem">Kuota</label>\r
            <div class="d-flex gap-2 mb-4">\r
              @for (opt of kuotaOptions; track opt.jumlah) {\r
                <button\r
                  class="btn flex-fill py-3"\r
                  style="border:2px solid; border-radius:10px; font-size:.85rem; transition:all .15s"\r
                  [style.border-color]="selectedKuotaOption().jumlah === opt.jumlah ? '#6366f1' : '#e5e7eb'"\r
                  [style.background]="selectedKuotaOption().jumlah === opt.jumlah ? '#f0f0ff' : '#f9fafb'"\r
                  [style.color]="selectedKuotaOption().jumlah === opt.jumlah ? '#4f46e5' : '#374151'"\r
                  (click)="selectedKuotaOption.set(opt)">\r
                  <div class="fw-semibold">{{ opt.jumlah }}</div>\r
                  <div style="font-size:.75rem">Rp{{ formatRupiah(opt.harga) }}</div>\r
                </button>\r
              }\r
            </div>\r
\r
            <div class="d-flex align-items-center justify-content-between border-top pt-3 mb-3">\r
              <span class="text-muted" style="font-size:.85rem">Total (Rp)</span>\r
              <span style="font-size:1.5rem;font-weight:700;color:#6366f1">\r
                {{ formatRupiah(selectedKuotaOption().harga) }}\r
              </span>\r
            </div>\r
\r
            <div class="d-grid mb-2">\r
              <button class="btn btn-lg fw-semibold text-white"\r
                      style="background:#6366f1;border-radius:8px"\r
                      (click)="pesanKuota()"\r
                      [disabled]="pesanKuotaSaving()">\r
                @if (pesanKuotaSaving()) {\r
                  <span class="spinner-border spinner-border-sm me-2"></span> Memproses...\r
                } @else {\r
                  Pesan Kuota &rarr;\r
                }\r
              </button>\r
            </div>\r
            <div class="text-muted text-center" style="font-size:.75rem">\r
              Dengan melanjutkan, Anda menyetujui\r
              <a href="#" class="text-decoration-none">S&amp;K Layanan</a> dan\r
              <a href="#" class="text-decoration-none">Privasi</a> kami.\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ["/* src/app/features/karyawan/karyawan-dokumen/karyawan-dokumen.component.scss */\n.berkas-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 14px;\n  background: #fff;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 220px;\n}\n.berkas-card:hover {\n  border-color: #c7d2fe;\n}\n.kuota-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 0.82rem;\n  color: #4b5563;\n  font-weight: 500;\n}\n.kuota-badge.kuota-gratis strong {\n  color: #111827;\n}\n.kuota-badge.kuota-berbayar strong {\n  color: #16a34a;\n}\n.btn-tambah {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n}\n.btn-tambah:hover {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  color: #fff;\n}\n.icon-btn {\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: #6b7280;\n  cursor: pointer;\n}\n.icon-btn:hover {\n  background: #f9fafb;\n}\n.icon-btn.danger {\n  background: #ef4444;\n  border-color: #ef4444;\n  color: #fff;\n}\n.icon-btn.danger:hover {\n  background: #dc2626;\n}\n/*# sourceMappingURL=karyawan-dokumen.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanDokumenComponent, { className: "KaryawanDokumenComponent", filePath: "src/app/features/karyawan/karyawan-dokumen/karyawan-dokumen.component.ts", lineNumber: 20 });
})();
export {
  KaryawanDokumenComponent
};
//# sourceMappingURL=chunk-43MX4HY5.js.map
