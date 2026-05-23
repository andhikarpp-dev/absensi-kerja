import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient
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
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/services/payroll.service.ts
var PayrollService = class _PayrollService {
  constructor() {
    this.http = inject(HttpClient);
    this.baseUrl = (karyawanId) => `${environment.apiUrl}/karyawan/${karyawanId}/payroll`;
  }
  // ── Gaji Dasar ────────────────────────────────────────────────────
  getGajiDasar(karyawanId) {
    return this.http.get(`${this.baseUrl(karyawanId)}/gaji-dasar`).pipe(map((d) => {
      const data = d?.gajiDasar;
      return data && Object.keys(data).length > 0 ? data : null;
    }));
  }
  saveGajiDasar(karyawanId, req) {
    return this.http.post(`${this.baseUrl(karyawanId)}/gaji-dasar`, req).pipe(map((d) => d.gajiDasar));
  }
  // ── BPJS ──────────────────────────────────────────────────────────
  getBpjs(karyawanId) {
    return this.http.get(`${this.baseUrl(karyawanId)}/bpjs`).pipe(map((d) => {
      const data = d?.bpjs;
      return data && Object.keys(data).length > 0 ? data : null;
    }));
  }
  saveBpjs(karyawanId, req) {
    return this.http.post(`${this.baseUrl(karyawanId)}/bpjs`, req).pipe(map((d) => d.bpjs));
  }
  // ── Rekening Bank ─────────────────────────────────────────────────
  getRekeningBank(karyawanId) {
    return this.http.get(`${this.baseUrl(karyawanId)}/rekening-bank`).pipe(map((d) => {
      const data = d?.rekeningBank;
      return data && Object.keys(data).length > 0 ? data : null;
    }));
  }
  saveRekeningBank(karyawanId, req) {
    return this.http.post(`${this.baseUrl(karyawanId)}/rekening-bank`, req).pipe(map((d) => d.rekeningBank));
  }
  deleteRekeningBank(karyawanId) {
    return this.http.delete(`${this.baseUrl(karyawanId)}/rekening-bank`);
  }
  // ── PPH 21 ────────────────────────────────────────────────────────
  getPph21(karyawanId) {
    return this.http.get(`${this.baseUrl(karyawanId)}/pph21`).pipe(map((d) => {
      const data = d?.pph21;
      return data && Object.keys(data).length > 0 ? data : null;
    }));
  }
  savePph21(karyawanId, req) {
    return this.http.post(`${this.baseUrl(karyawanId)}/pph21`, req).pipe(map((d) => d.pph21));
  }
  listRiwayatPph21(karyawanId) {
    return this.http.get(`${this.baseUrl(karyawanId)}/pph21/riwayat`).pipe(map((d) => d?.riwayat ?? []));
  }
  saveRiwayatPph21(karyawanId, req) {
    return this.http.post(`${this.baseUrl(karyawanId)}/pph21/riwayat`, req).pipe(map((d) => d.riwayat));
  }
  updateRiwayatPph21(karyawanId, riwayatId, req) {
    return this.http.put(`${this.baseUrl(karyawanId)}/pph21/riwayat/${riwayatId}`, req).pipe(map((d) => d.riwayat));
  }
  deleteRiwayatPph21(karyawanId, riwayatId) {
    return this.http.delete(`${this.baseUrl(karyawanId)}/pph21/riwayat/${riwayatId}`);
  }
  static {
    this.\u0275fac = function PayrollService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayrollService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PayrollService, factory: _PayrollService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayrollService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/karyawan/karyawan-payroll/karyawan-payroll.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.id;
function KaryawanPayrollComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.karyawan().namaLengkap);
  }
}
function KaryawanPayrollComponent_For_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r3.label, " ");
  }
}
function KaryawanPayrollComponent_For_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r3.label);
  }
}
function KaryawanPayrollComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_For_22_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab(tab_r3.key));
    });
    \u0275\u0275conditionalCreate(1, KaryawanPayrollComponent_For_22_Conditional_1_Template, 2, 1, "span", 22)(2, KaryawanPayrollComponent_For_22_Conditional_2_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-bottom-color", ctx_r0.activeTab() === tab_r3.key ? "#6366f1" : "transparent !important");
    \u0275\u0275classProp("border-primary", ctx_r0.activeTab() === tab_r3.key)("text-primary", ctx_r0.activeTab() === tab_r3.key)("fw-semibold", ctx_r0.activeTab() === tab_r3.key)("text-muted", ctx_r0.activeTab() !== tab_r3.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === tab_r3.key ? 1 : 2);
  }
}
function KaryawanPayrollComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2, " Data berhasil disimpan. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanPayrollComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function KaryawanPayrollComponent_Conditional_25_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275property("value", opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r5.label);
  }
}
function KaryawanPayrollComponent_Conditional_25_For_25_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275property("value", p_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function KaryawanPayrollComponent_Conditional_25_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "input", 65);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_For_25_Template_input_input_1_listener($event) {
      const \u0275$index_106_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateRincian(\u0275$index_106_r7, "nama", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 66)(3, "span", 47);
    \u0275\u0275text(4, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_For_25_Template_input_input_5_listener($event) {
      const \u0275$index_106_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateRincian(\u0275$index_106_r7, "jumlah", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "select", 44);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_25_For_25_Template_select_change_6_listener($event) {
      const \u0275$index_106_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateRincian(\u0275$index_106_r7, "periode", $event.target.value));
    });
    \u0275\u0275repeaterCreate(7, KaryawanPayrollComponent_Conditional_25_For_25_For_8_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 67);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_25_For_25_Template_button_click_9_listener() {
      const \u0275$index_106_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeRincian(\u0275$index_106_r7));
    });
    \u0275\u0275text(10, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r9.nama);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", item_r9.jumlah);
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r9.periode);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.periodeOptions);
  }
}
function KaryawanPayrollComponent_Conditional_25_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
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
function KaryawanPayrollComponent_Conditional_25_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function KaryawanPayrollComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 25);
    \u0275\u0275element(2, "div", 26);
    \u0275\u0275elementStart(3, "div", 27)(4, "button", 28);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSamakan());
    });
    \u0275\u0275text(5, " Samakan dengan Karyawan Lain ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 29)(7, "div", 26)(8, "label", 30);
    \u0275\u0275text(9, "Tipe Gaji ");
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 27)(13, "select", 32);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_25_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tipeGaji.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(14, KaryawanPayrollComponent_Conditional_25_For_15_Template, 2, 2, "option", 33, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "hr", 34);
    \u0275\u0275elementStart(17, "div", 35)(18, "div", 26)(19, "label", 30);
    \u0275\u0275text(20, "Rincian Gaji ");
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 27);
    \u0275\u0275repeaterCreate(24, KaryawanPayrollComponent_Conditional_25_For_25_Template, 11, 3, "div", 36, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(26, "div", 37)(27, "span", 38);
    \u0275\u0275text(28, "Total Gaji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 39);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 40);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_25_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRincian());
    });
    \u0275\u0275element(32, "i", 41);
    \u0275\u0275text(33, " Tambah ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(34, "hr", 34);
    \u0275\u0275elementStart(35, "div", 29)(36, "div", 26)(37, "label", 30);
    \u0275\u0275text(38, "Upah Lembur ");
    \u0275\u0275elementStart(39, "span", 31);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 27)(42, "div", 42)(43, "input", 43);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_43_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tipeUpahLembur.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 44);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_25_Template_select_change_44_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.satuanLembur.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(45, KaryawanPayrollComponent_Conditional_25_For_46_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 36);
    \u0275\u0275element(48, "input", 45);
    \u0275\u0275elementStart(49, "div", 46)(50, "span", 47);
    \u0275\u0275text(51, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lemburHariKerja.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 47);
    \u0275\u0275text(54, "Per Jam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 36);
    \u0275\u0275element(56, "input", 49);
    \u0275\u0275elementStart(57, "div", 46)(58, "span", 47);
    \u0275\u0275text(59, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_60_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lemburSabtu.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 47);
    \u0275\u0275text(62, "Per Jam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 36);
    \u0275\u0275element(64, "input", 50);
    \u0275\u0275elementStart(65, "div", 46)(66, "span", 47);
    \u0275\u0275text(67, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_68_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lemburMinggu.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 47);
    \u0275\u0275text(70, "Per Jam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 36);
    \u0275\u0275element(72, "input", 51);
    \u0275\u0275elementStart(73, "div", 46)(74, "span", 47);
    \u0275\u0275text(75, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_76_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.lemburKalenderLibur.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 47);
    \u0275\u0275text(78, "Per Jam");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(79, "hr", 34);
    \u0275\u0275elementStart(80, "div", 52)(81, "div", 26)(82, "label", 30);
    \u0275\u0275text(83, "Potongan Izin Jam ");
    \u0275\u0275elementStart(84, "span", 31);
    \u0275\u0275text(85, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 27)(87, "div", 46)(88, "span", 47);
    \u0275\u0275text(89, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_90_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.potonganIzinJam.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 47);
    \u0275\u0275text(92, "Per Jam");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(93, "div", 35)(94, "div", 26)(95, "label", 30);
    \u0275\u0275text(96, "Potongan Jam Kerja Tidak Terpenuhi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 27)(98, "div", 53)(99, "span", 47);
    \u0275\u0275text(100, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_25_Template_input_input_101_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.potonganJamKerjaTidakTerpenuhi.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 47);
    \u0275\u0275text(103, "Per Jam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 54);
    \u0275\u0275text(105, " Jika sudah terdenda karena terlambat maka potongan ini tidak diterapkan. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(106, "hr", 34);
    \u0275\u0275elementStart(107, "div", 55)(108, "div", 26)(109, "label", 30);
    \u0275\u0275text(110, "Potongan Absen Per Hari");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 27)(112, "div", 56)(113, "div", 57)(114, "input", 58);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_25_Template_input_change_114_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.potonganAbsenOtomatis.set($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "label", 59);
    \u0275\u0275text(116, "Otomatis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 57)(118, "input", 60);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_25_Template_input_change_118_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.potonganAbsenManual.set($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "label", 61);
    \u0275\u0275text(120, "Manual");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(121, "div", 62);
    \u0275\u0275element(122, "div", 26);
    \u0275\u0275elementStart(123, "div", 27)(124, "button", 63);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_25_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(125, KaryawanPayrollComponent_Conditional_25_Conditional_125_Template, 1, 0, "span", 64);
    \u0275\u0275text(126, " Simpan ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r0.tipeGaji());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.tipeGajiOptions);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r0.rincianGaji());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(ctx_r0.totalGaji()));
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r0.tipeUpahLembur());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.satuanLembur());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.satuanLemburOptions);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.lemburHariKerja());
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.lemburSabtu());
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.lemburMinggu());
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.lemburKalenderLibur());
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r0.potonganIzinJam());
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r0.potonganJamKerjaTidakTerpenuhi());
    \u0275\u0275advance(13);
    \u0275\u0275property("checked", ctx_r0.potonganAbsenOtomatis());
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r0.potonganAbsenManual());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 125 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 68);
    \u0275\u0275element(2, "i", 69);
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "Fitur Pembayaran Gaji akan segera tersedia.");
    \u0275\u0275elementEnd()()();
  }
}
function KaryawanPayrollComponent_Conditional_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 82);
  }
}
function KaryawanPayrollComponent_Conditional_27_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 82);
  }
}
function KaryawanPayrollComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 71)(2, "div", 72)(3, "div", 73)(4, "h6", 74);
    \u0275\u0275text(5, "BPJS Ketenagakerjaan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 76)(8, "label", 77);
    \u0275\u0275text(9, "Tanggal Kepesertaan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 78);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_27_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tkTanggalKepesertaan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 76)(12, "label", 77);
    \u0275\u0275text(13, "Nomor BPJS Ketenagakerjaan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 79);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_27_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tkNomor.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 80)(16, "label", 77);
    \u0275\u0275text(17, "Upah Didaftarkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 46)(19, "span", 47);
    \u0275\u0275text(20, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_27_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tkUpahDidaftarkan.set(+$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "button", 81);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_27_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(24, KaryawanPayrollComponent_Conditional_27_Conditional_24_Template, 1, 0, "span", 82);
    \u0275\u0275text(25, " Simpan ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 71)(27, "div", 72)(28, "div", 73)(29, "h6", 74);
    \u0275\u0275text(30, "BPJS Kesehatan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 76)(33, "label", 77);
    \u0275\u0275text(34, "Tanggal Kepesertaan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 78);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_27_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.kesTanggalKepesertaan.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 76)(37, "label", 77);
    \u0275\u0275text(38, "Nomor BPJS Kesehatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 79);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_27_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.kesNomor.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 76)(41, "label", 77);
    \u0275\u0275text(42, "Upah Didaftarkan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 46)(44, "span", 47);
    \u0275\u0275text(45, "Rp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_27_Template_input_input_46_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.kesUpahDidaftarkan.set(+$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 76)(48, "label", 83);
    \u0275\u0275text(49, " Anggota Keluarga Inti (Termasuk Karyawan) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 84)(51, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_27_Template_input_input_51_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.kesAnggotaKeluargaInti.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 47);
    \u0275\u0275text(53, "Orang");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 80)(55, "label", 83);
    \u0275\u0275text(56, " Anggota Keluarga Tambahan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 84)(58, "input", 48);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_27_Template_input_input_58_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.kesAnggotaKeluargaTambahan.set(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 47);
    \u0275\u0275text(60, "Orang");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div")(62, "button", 81);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_27_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(63, KaryawanPayrollComponent_Conditional_27_Conditional_63_Template, 1, 0, "span", 82);
    \u0275\u0275text(64, " Simpan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r0.tkTanggalKepesertaan());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.tkNomor());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.tkUpahDidaftarkan());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 24 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r0.kesTanggalKepesertaan());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.kesNomor());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.kesUpahDidaftarkan());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.kesAnggotaKeluargaInti());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.kesAnggotaKeluargaTambahan());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 63 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r14.label);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_6_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    \u0275\u0275property("value", opt_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r15);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_6_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1, " Pengaturan PPH 21 berhasil disimpan. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_6_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_6_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 92)(2, "label", 93);
    \u0275\u0275text(3, "Status Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 94)(5, "select", 95);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_28_Conditional_6_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.statusPkp.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(6, KaryawanPayrollComponent_Conditional_28_Conditional_6_For_7_Template, 2, 2, "option", 33, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 96)(9, "label", 93);
    \u0275\u0275text(10, " Status PTKP ");
    \u0275\u0275elementStart(11, "span", 31);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94)(14, "select", 97);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_28_Conditional_6_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.statusPtkp.set($event.target.value));
    });
    \u0275\u0275elementStart(15, "option", 98);
    \u0275\u0275text(16, "--Pilih--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, KaryawanPayrollComponent_Conditional_28_Conditional_6_For_18_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 99)(20, "div")(21, "strong");
    \u0275\u0275text(22, "TK/0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " = Tidak Kawin, tanpa tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "strong");
    \u0275\u0275text(26, "TK/1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " = Tidak Kawin, dengan 1 tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "strong");
    \u0275\u0275text(30, "TK/2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " = Tidak Kawin, dengan 2 tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "strong");
    \u0275\u0275text(34, "TK/3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " = Tidak Kawin, dengan 3 tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "strong");
    \u0275\u0275text(38, "K/0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " = Kawin, tanpa tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "strong");
    \u0275\u0275text(42, "K/1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " = Kawin, dengan 1 tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div")(45, "strong");
    \u0275\u0275text(46, "K/2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " = Kawin, dengan 2 tanggungan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div")(49, "strong");
    \u0275\u0275text(50, "K/3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " = Kawin, dengan 3 tanggungan");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(52, KaryawanPayrollComponent_Conditional_28_Conditional_6_Conditional_52_Template, 2, 0, "div", 100);
    \u0275\u0275conditionalCreate(53, KaryawanPayrollComponent_Conditional_28_Conditional_6_Conditional_53_Template, 2, 1, "div", 101);
    \u0275\u0275elementStart(54, "div", 102)(55, "button", 103);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_6_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(56, KaryawanPayrollComponent_Conditional_28_Conditional_6_Conditional_56_Template, 1, 0, "span", 64);
    \u0275\u0275text(57, " Simpan ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.statusPkp());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.statusPkpOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.statusPtkp());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.statusPtkpOptions);
    \u0275\u0275advance(35);
    \u0275\u0275conditional(ctx_r0.pengaturanPph21Saved() ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error() ? 53 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 56 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r17 = ctx.$implicit;
    \u0275\u0275property("value", y_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r17);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_12_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 118);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 118);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 118);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 118);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 118);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 102)(22, "button", 120);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_12_For_59_Template_button_click_22_listener() {
      const r_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.bukaPph21Modal(r_r19));
    });
    \u0275\u0275element(23, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 122);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_12_For_59_Template_button_click_24_listener() {
      const r_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hapusRiwayatPph21(r_r19));
    });
    \u0275\u0275element(25, "i", 123);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatBulanPeriode(r_r19.periode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.npwp() || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusPtkp() || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(+(r_r19.pendapatanBruto ?? 0)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(+(r_r19.pph21Terutang ?? 0)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatRp(ctx_r0.hitungThp(r_r19.pendapatanBruto, r_r19.pph21Terutang)), " ");
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_12_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 124)(2, "strong");
    \u0275\u0275text(3, "Menampilkan 0 dari 0 total data");
    \u0275\u0275elementEnd()()();
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_12_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Menampilkan ", ctx_r0.riwayatPph21Filtered().length, " dari ", ctx_r0.riwayatPph21Filtered().length, " total data ");
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 104)(2, "select", 105);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_28_Conditional_12_Template_select_change_2_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.riwayatPph21Year.set(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(3, KaryawanPayrollComponent_Conditional_28_Conditional_12_For_4_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 106);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bukaPph21Modal());
    });
    \u0275\u0275element(6, "i", 41);
    \u0275\u0275text(7, " Input/Update Manual ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 107);
    \u0275\u0275element(9, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 109);
    \u0275\u0275element(11, "i", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 111)(13, "div", 26)(14, "div", 112)(15, "span", 113);
    \u0275\u0275text(16, "Total DPP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 114);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 26)(20, "div", 112)(21, "span", 113);
    \u0275\u0275text(22, "Total PPH 21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 114);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "div", 112)(27, "span", 113);
    \u0275\u0275text(28, "Total THP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 114);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 115)(32, "table", 116)(33, "thead", 117)(34, "tr")(35, "th");
    \u0275\u0275text(36, "Bulan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "NPWP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Status PTKP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 118);
    \u0275\u0275text(42, "Gaji (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 118);
    \u0275\u0275text(44, "Tunjangan (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 118);
    \u0275\u0275text(46, "Potongan (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 118);
    \u0275\u0275text(48, "Dasar Pengenaan Pajak (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Tarif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 118);
    \u0275\u0275text(52, "Nilai PPH (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 118);
    \u0275\u0275text(54, "THP (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 102);
    \u0275\u0275text(56, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tbody");
    \u0275\u0275repeaterCreate(58, KaryawanPayrollComponent_Conditional_28_Conditional_12_For_59_Template, 26, 9, "tr", null, _forTrack2);
    \u0275\u0275conditionalCreate(60, KaryawanPayrollComponent_Conditional_28_Conditional_12_Conditional_60_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(61, KaryawanPayrollComponent_Conditional_28_Conditional_12_Conditional_61_Template, 2, 2, "div", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.riwayatPph21Year());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.riwayatPph21YearOptions());
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(ctx_r0.totalDpp()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(ctx_r0.totalPph21()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatRp(ctx_r0.totalThp()));
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r0.riwayatPph21Filtered());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.riwayatPph21Filtered().length === 0 ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.riwayatPph21Filtered().length > 0 ? 61 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    \u0275\u0275property("value", opt_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r21);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    \u0275\u0275property("value", opt_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r22);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    \u0275\u0275property("value", opt_r23);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r23);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "input", 144);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_88_Template_input_input_1_listener($event) {
      const $index_r25 = \u0275\u0275restoreView(_r24).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updatePph21Tunjangan($index_r25, "nama", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 145);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_88_Template_input_input_2_listener($event) {
      const $index_r25 = \u0275\u0275restoreView(_r24).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updatePph21Tunjangan($index_r25, "jumlah", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 146);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_88_Template_button_click_3_listener() {
      const $index_r25 = \u0275\u0275restoreView(_r24).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hapusPph21Tunjangan($index_r25));
    });
    \u0275\u0275element(4, "i", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r26.nama);
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r26.jumlah);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "input", 147);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_96_Template_input_input_1_listener($event) {
      const $index_r28 = \u0275\u0275restoreView(_r27).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updatePph21Potongan($index_r28, "nama", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 145);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_96_Template_input_input_2_listener($event) {
      const $index_r28 = \u0275\u0275restoreView(_r27).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updatePph21Potongan($index_r28, "jumlah", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 146);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_For_96_Template_button_click_3_listener() {
      const $index_r28 = \u0275\u0275restoreView(_r27).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.hapusPph21Potongan($index_r28));
    });
    \u0275\u0275element(4, "i", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", p_r29.nama);
    \u0275\u0275advance();
    \u0275\u0275property("value", p_r29.jumlah);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pph21ModalError(), " ");
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 125)(2, "div", 126)(3, "div", 127)(4, "h5", 128);
    \u0275\u0275text(5, "Input/Update Manual PPH 21");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 129);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tutupPph21Modal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 130)(8, "div", 92)(9, "label", 131);
    \u0275\u0275text(10, " Karyawan ");
    \u0275\u0275elementStart(11, "span", 31);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 132);
    \u0275\u0275element(14, "input", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 92)(16, "label", 131);
    \u0275\u0275text(17, " Bulan / Tahun ");
    \u0275\u0275elementStart(18, "span", 31);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 132)(21, "input", 134);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21Periode.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 92)(23, "label", 131);
    \u0275\u0275text(24, " Status PTKP ");
    \u0275\u0275elementStart(25, "span", 31);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 132)(28, "select", 135);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_select_change_28_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21StatusPtkp.set($event.target.value));
    });
    \u0275\u0275elementStart(29, "option", 98);
    \u0275\u0275text(30, "--Pilih--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, KaryawanPayrollComponent_Conditional_28_Conditional_13_For_32_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 92)(34, "label", 131);
    \u0275\u0275text(35, " Status Karyawan ");
    \u0275\u0275elementStart(36, "span", 31);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 132)(39, "select", 95);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_select_change_39_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21StatusKaryawan.set($event.target.value));
    });
    \u0275\u0275elementStart(40, "option", 98);
    \u0275\u0275text(41, "--Pilih--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(42, KaryawanPayrollComponent_Conditional_28_Conditional_13_For_43_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 92)(45, "label", 131);
    \u0275\u0275text(46, " Gaji Dasar ");
    \u0275\u0275elementStart(47, "span", 31);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 132)(50, "input", 136);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_input_input_50_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21GajiDasar.set(+$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 92)(52, "label", 131);
    \u0275\u0275text(53, " DPP ");
    \u0275\u0275elementStart(54, "span", 31);
    \u0275\u0275text(55, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 132)(57, "input", 136);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_input_input_57_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21Dpp.set(+$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 92)(59, "label", 131);
    \u0275\u0275text(60, " TER ");
    \u0275\u0275elementStart(61, "span", 31);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 132)(64, "select", 137);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_select_change_64_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21Ter.set($event.target.value));
    });
    \u0275\u0275elementStart(65, "option", 98);
    \u0275\u0275text(66, "--Pilih--");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(67, KaryawanPayrollComponent_Conditional_28_Conditional_13_For_68_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 92)(70, "label", 131);
    \u0275\u0275text(71, " PPH 21 ");
    \u0275\u0275elementStart(72, "span", 31);
    \u0275\u0275text(73, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 132)(75, "input", 136);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_input_input_75_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21Nilai.set(+$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 92)(77, "label", 131);
    \u0275\u0275text(78, " THP ");
    \u0275\u0275elementStart(79, "span", 31);
    \u0275\u0275text(80, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 132)(82, "input", 136);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_input_input_82_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pph21Thp.set(+$event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 96)(84, "label", 131);
    \u0275\u0275text(85, "Tunjangan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 132);
    \u0275\u0275repeaterCreate(87, KaryawanPayrollComponent_Conditional_28_Conditional_13_For_88_Template, 5, 2, "div", 138, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(89, "button", 139);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tambahPph21Tunjangan());
    });
    \u0275\u0275text(90, " Tambah ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 96)(92, "label", 131);
    \u0275\u0275text(93, "Potongan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 132);
    \u0275\u0275repeaterCreate(95, KaryawanPayrollComponent_Conditional_28_Conditional_13_For_96_Template, 5, 2, "div", 138, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(97, "button", 139);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tambahPph21Potongan());
    });
    \u0275\u0275text(98, " Tambah ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(99, KaryawanPayrollComponent_Conditional_28_Conditional_13_Conditional_99_Template, 2, 1, "div", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 141)(101, "button", 142);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.simpanPph21Modal());
    });
    \u0275\u0275conditionalCreate(102, KaryawanPayrollComponent_Conditional_28_Conditional_13_Conditional_102_Template, 1, 0, "span", 64);
    \u0275\u0275text(103, " Simpan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 143);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Conditional_13_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tutupPph21Modal());
    });
    \u0275\u0275text(105, "Tutup");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ((tmp_2_0 = ctx_r0.karyawan()) == null ? null : tmp_2_0.namaLengkap) ?? "-");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.pph21Periode());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.pph21StatusPtkp());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.statusPtkpOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.pph21StatusKaryawan());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.statusKaryawanModalOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.pph21GajiDasar());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.pph21Dpp());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.pph21Ter());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.terOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.pph21Nilai());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.pph21Thp());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.pph21Tunjangan());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.pph21Potongan());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.pph21ModalError() ? 99 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pph21ModalSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pph21ModalSaving() ? 102 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "div", 87);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pengaturanPph21Open.set(!ctx_r0.pengaturanPph21Open()));
    });
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4, "Pengaturan PPH 21");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, KaryawanPayrollComponent_Conditional_28_Conditional_6_Template, 58, 6, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 90)(8, "div", 87);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_28_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.riwayatPph21Open.set(!ctx_r0.riwayatPph21Open()));
    });
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10, "Riwayat Pembayaran PPH 21");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, KaryawanPayrollComponent_Conditional_28_Conditional_12_Template, 62, 6, "div", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, KaryawanPayrollComponent_Conditional_28_Conditional_13_Template, 106, 12, "div", 91);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bx-chevron-down", ctx_r0.pengaturanPph21Open())("bx-chevron-up", !ctx_r0.pengaturanPph21Open());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pengaturanPph21Open() ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bx-chevron-down", ctx_r0.riwayatPph21Open())("bx-chevron-up", !ctx_r0.riwayatPph21Open());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.riwayatPph21Open() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showPph21Modal() ? 13 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_29_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function KaryawanPayrollComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 52)(2, "div", 26)(3, "label", 30);
    \u0275\u0275text(4, "Nama Bank");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27)(6, "input", 148);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_29_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.namaBank.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 52)(8, "div", 26)(9, "label", 30);
    \u0275\u0275text(10, "Nomor Rekening");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 27)(12, "input", 149);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_29_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nomorRekening.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 55)(14, "div", 26)(15, "label", 30);
    \u0275\u0275text(16, "Atas Nama");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "input", 150);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_29_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.atasNama.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 62);
    \u0275\u0275element(20, "div", 26);
    \u0275\u0275elementStart(21, "div", 27)(22, "button", 63);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_29_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.simpan());
    });
    \u0275\u0275conditionalCreate(23, KaryawanPayrollComponent_Conditional_29_Conditional_23_Template, 1, 0, "span", 64);
    \u0275\u0275text(24, " Simpan ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.namaBank());
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.nomorRekening());
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.atasNama());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 23 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_30_For_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r32 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", k_r32.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r32.namaLengkap);
  }
}
function KaryawanPayrollComponent_Conditional_30_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, KaryawanPayrollComponent_Conditional_30_For_22_Conditional_0_Template, 2, 2, "option", 33);
  }
  if (rf & 2) {
    const k_r32 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(k_r32.id !== ctx_r0.karyawanId ? 0 : -1);
  }
}
function KaryawanPayrollComponent_Conditional_30_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.samakanError());
  }
}
function KaryawanPayrollComponent_Conditional_30_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275element(1, "i", 164);
    \u0275\u0275text(2, "Data gaji berhasil disalin. ");
    \u0275\u0275elementEnd();
  }
}
function KaryawanPayrollComponent_Conditional_30_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 82);
  }
}
function KaryawanPayrollComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 151)(2, "div", 152)(3, "div", 153)(4, "div")(5, "h5", 154);
    \u0275\u0275text(6, "Pilih Karyawan Acuan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 155);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSamakan());
    });
    \u0275\u0275text(8, " \xD7Close ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 156)(10, "p", 157);
    \u0275\u0275text(11, " Samakan pengaturan gaji dasar ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " dengan: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 77);
    \u0275\u0275text(16, "Pilih Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 158);
    \u0275\u0275listener("input", function KaryawanPayrollComponent_Conditional_30_Template_input_input_17_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.samakanSearch.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 159);
    \u0275\u0275listener("change", function KaryawanPayrollComponent_Conditional_30_Template_select_change_18_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.samakanTargetId.set(+$event.target.value));
    });
    \u0275\u0275elementStart(19, "option", 98);
    \u0275\u0275text(20, "-- Pilih Karyawan --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, KaryawanPayrollComponent_Conditional_30_For_22_Template, 1, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, KaryawanPayrollComponent_Conditional_30_Conditional_23_Template, 2, 1, "div", 160);
    \u0275\u0275conditionalCreate(24, KaryawanPayrollComponent_Conditional_30_Conditional_24_Template, 3, 0, "div", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 162)(26, "button", 163);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_30_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSamakan());
    });
    \u0275\u0275text(27, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 81);
    \u0275\u0275listener("click", function KaryawanPayrollComponent_Conditional_30_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitSamakan());
    });
    \u0275\u0275conditionalCreate(29, KaryawanPayrollComponent_Conditional_30_Conditional_29_Template, 1, 0, "span", 82);
    \u0275\u0275text(30, " Samakan ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r0.karyawan()) == null ? null : tmp_1_0.namaLengkap) ?? "karyawan ini");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.samakanSearch());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.samakanTargetId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredKaryawanList());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.samakanError() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.samakanSuccess() ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.samakanTargetId() || ctx_r0.samakanLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.samakanLoading() ? 29 : -1);
  }
}
var KaryawanPayrollComponent = class _KaryawanPayrollComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.karyawanSvc = inject(KaryawanService);
    this.payrollSvc = inject(PayrollService);
    this.karyawanId = 0;
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
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
    this.saved = signal(false, ...ngDevMode ? [{ debugName: "saved" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeTab = signal("GAJI_DASAR", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tabs = [
      { key: "GAJI_DASAR", label: "Pengaturan Gaji Dasar" },
      { key: "PEMBAYARAN_GAJI", label: "Pembayaran Gaji" },
      { key: "BPJS", label: "Pengaturan Kepesertaan BPJS" },
      { key: "PPH21", label: "PPH 21" },
      { key: "REKENING_BANK", label: "Rekening Bank" }
    ];
    this.tipeGaji = signal("PER_BULAN", ...ngDevMode ? [{ debugName: "tipeGaji" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tipeGajiOptions = [
      { value: "PER_BULAN", label: "Per Bulan" },
      { value: "PER_HARI", label: "Per Hari" },
      { value: "PER_JAM", label: "Per Jam" },
      { value: "PER_MINGGU", label: "Per Minggu" }
    ];
    this.periodeOptions = ["Perbulan", "Per Hari", "Per Jam", "Per Minggu"];
    this.rincianGaji = signal([
      { nama: "Gaji Pokok", jumlah: 0, periode: "Perbulan" }
    ], ...ngDevMode ? [{ debugName: "rincianGaji" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalGaji = computed(() => this.rincianGaji().reduce((s, r) => s + (+r.jumlah || 0), 0), ...ngDevMode ? [{ debugName: "totalGaji" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tipeUpahLembur = signal("", ...ngDevMode ? [{ debugName: "tipeUpahLembur" }] : (
      /* istanbul ignore next */
      []
    ));
    this.satuanLembur = signal("Per Jam", ...ngDevMode ? [{ debugName: "satuanLembur" }] : (
      /* istanbul ignore next */
      []
    ));
    this.satuanLemburOptions = ["Per Jam", "Per Hari", "Per Menit"];
    this.lemburHariKerja = signal(0, ...ngDevMode ? [{ debugName: "lemburHariKerja" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lemburSabtu = signal(0, ...ngDevMode ? [{ debugName: "lemburSabtu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lemburMinggu = signal(0, ...ngDevMode ? [{ debugName: "lemburMinggu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lemburKalenderLibur = signal(0, ...ngDevMode ? [{ debugName: "lemburKalenderLibur" }] : (
      /* istanbul ignore next */
      []
    ));
    this.potonganIzinJam = signal(0, ...ngDevMode ? [{ debugName: "potonganIzinJam" }] : (
      /* istanbul ignore next */
      []
    ));
    this.potonganJamKerjaTidakTerpenuhi = signal(0, ...ngDevMode ? [{ debugName: "potonganJamKerjaTidakTerpenuhi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.potonganAbsenOtomatis = signal(true, ...ngDevMode ? [{ debugName: "potonganAbsenOtomatis" }] : (
      /* istanbul ignore next */
      []
    ));
    this.potonganAbsenManual = signal(false, ...ngDevMode ? [{ debugName: "potonganAbsenManual" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tkTanggalKepesertaan = signal("", ...ngDevMode ? [{ debugName: "tkTanggalKepesertaan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tkNomor = signal("", ...ngDevMode ? [{ debugName: "tkNomor" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tkUpahDidaftarkan = signal(0, ...ngDevMode ? [{ debugName: "tkUpahDidaftarkan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kesTanggalKepesertaan = signal("", ...ngDevMode ? [{ debugName: "kesTanggalKepesertaan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kesNomor = signal("", ...ngDevMode ? [{ debugName: "kesNomor" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kesUpahDidaftarkan = signal(0, ...ngDevMode ? [{ debugName: "kesUpahDidaftarkan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kesAnggotaKeluargaInti = signal(0, ...ngDevMode ? [{ debugName: "kesAnggotaKeluargaInti" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kesAnggotaKeluargaTambahan = signal(0, ...ngDevMode ? [{ debugName: "kesAnggotaKeluargaTambahan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusPkp = signal("NON_PKP", ...ngDevMode ? [{ debugName: "statusPkp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.npwp = signal("", ...ngDevMode ? [{ debugName: "npwp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusPtkp = signal("", ...ngDevMode ? [{ debugName: "statusPtkp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tanggungan = signal(0, ...ngDevMode ? [{ debugName: "tanggungan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.metodePph = signal("GROSS", ...ngDevMode ? [{ debugName: "metodePph" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Options = ["GROSS", "GROSS_UP", "NET"];
    this.statusPkpOptions = [
      { value: "NON_PKP", label: "Pegawai Tetap" },
      { value: "PKP", label: "Bukan Pegawai Tetap" }
    ];
    this.statusPtkpOptions = [
      "TK/0",
      "TK/1",
      "TK/2",
      "TK/3",
      "K/0",
      "K/1",
      "K/2",
      "K/3"
    ];
    this.pengaturanPph21Open = signal(true, ...ngDevMode ? [{ debugName: "pengaturanPph21Open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pengaturanPph21Saved = signal(false, ...ngDevMode ? [{ debugName: "pengaturanPph21Saved" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPph21Open = signal(true, ...ngDevMode ? [{ debugName: "riwayatPph21Open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPph21List = signal([], ...ngDevMode ? [{ debugName: "riwayatPph21List" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPph21Year = signal((/* @__PURE__ */ new Date()).getFullYear(), ...ngDevMode ? [{ debugName: "riwayatPph21Year" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPph21YearOptions = computed(() => {
      const cy = (/* @__PURE__ */ new Date()).getFullYear();
      return [cy, cy - 1, cy - 2, cy - 3, cy - 4];
    }, ...ngDevMode ? [{ debugName: "riwayatPph21YearOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.riwayatPph21Filtered = computed(() => this.riwayatPph21List().filter((r) => {
      const y = (r.periode || "").slice(0, 4);
      return y === String(this.riwayatPph21Year());
    }), ...ngDevMode ? [{ debugName: "riwayatPph21Filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalDpp = computed(() => this.riwayatPph21Filtered().reduce((s, r) => s + (+(r.pendapatanBruto ?? 0) || 0), 0), ...ngDevMode ? [{ debugName: "totalDpp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPph21 = computed(() => this.riwayatPph21Filtered().reduce((s, r) => s + (+(r.pph21Terutang ?? 0) || 0), 0), ...ngDevMode ? [{ debugName: "totalPph21" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalThp = computed(() => this.riwayatPph21Filtered().reduce((s, r) => {
      const bruto = +(r.pendapatanBruto ?? 0) || 0;
      const pph = +(r.pph21Terutang ?? 0) || 0;
      return s + Math.max(0, bruto - pph);
    }, 0), ...ngDevMode ? [{ debugName: "totalThp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPph21Modal = signal(false, ...ngDevMode ? [{ debugName: "showPph21Modal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21EditingId = signal(null, ...ngDevMode ? [{ debugName: "pph21EditingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Periode = signal("", ...ngDevMode ? [{ debugName: "pph21Periode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21StatusPtkp = signal("", ...ngDevMode ? [{ debugName: "pph21StatusPtkp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21StatusKaryawan = signal("", ...ngDevMode ? [{ debugName: "pph21StatusKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21GajiDasar = signal(0, ...ngDevMode ? [{ debugName: "pph21GajiDasar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Dpp = signal(0, ...ngDevMode ? [{ debugName: "pph21Dpp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Ter = signal("", ...ngDevMode ? [{ debugName: "pph21Ter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Nilai = signal(0, ...ngDevMode ? [{ debugName: "pph21Nilai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Thp = signal(0, ...ngDevMode ? [{ debugName: "pph21Thp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Tunjangan = signal([], ...ngDevMode ? [{ debugName: "pph21Tunjangan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21Potongan = signal([], ...ngDevMode ? [{ debugName: "pph21Potongan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21ModalSaving = signal(false, ...ngDevMode ? [{ debugName: "pph21ModalSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pph21ModalError = signal("", ...ngDevMode ? [{ debugName: "pph21ModalError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.terOptions = ["A", "B", "C"];
    this.statusKaryawanModalOptions = [
      "Pegawai Tetap",
      "Pegawai Tidak Tetap",
      "Bukan Pegawai"
    ];
    this.namaBank = signal("", ...ngDevMode ? [{ debugName: "namaBank" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nomorRekening = signal("", ...ngDevMode ? [{ debugName: "nomorRekening" }] : (
      /* istanbul ignore next */
      []
    ));
    this.atasNama = signal("", ...ngDevMode ? [{ debugName: "atasNama" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSamakanModal = signal(false, ...ngDevMode ? [{ debugName: "showSamakanModal" }] : (
      /* istanbul ignore next */
      []
    ));
    this.samakanSearch = signal("", ...ngDevMode ? [{ debugName: "samakanSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.samakanTargetId = signal("", ...ngDevMode ? [{ debugName: "samakanTargetId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.samakanLoading = signal(false, ...ngDevMode ? [{ debugName: "samakanLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.samakanError = signal("", ...ngDevMode ? [{ debugName: "samakanError" }] : (
      /* istanbul ignore next */
      []
    ));
    this.samakanSuccess = signal(false, ...ngDevMode ? [{ debugName: "samakanSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allKaryawanList = signal([], ...ngDevMode ? [{ debugName: "allKaryawanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredKaryawanList = computed(() => {
      const q = this.samakanSearch().toLowerCase();
      return this.allKaryawanList().filter((k) => !q || k.namaLengkap?.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredKaryawanList" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  addRincian() {
    this.rincianGaji.set([...this.rincianGaji(), { nama: "", jumlah: 0, periode: "Perbulan" }]);
  }
  removeRincian(i) {
    this.rincianGaji.set(this.rincianGaji().filter((_, idx) => idx !== i));
  }
  updateRincian(i, field, value) {
    const arr = [...this.rincianGaji()];
    arr[i] = __spreadProps(__spreadValues({}, arr[i]), { [field]: field === "jumlah" ? +value : value });
    this.rincianGaji.set(arr);
  }
  // ─────────────────────────────────────────────────────────────────
  ngOnInit() {
    this.karyawanId = +this.route.snapshot.paramMap.get("id");
    this.karyawanSvc.findById(this.karyawanId).subscribe({
      next: (k) => this.karyawan.set(k),
      error: () => {
      }
    });
    this.loadGajiDasar();
    this.loadBpjs();
    this.loadRekeningBank();
    this.loadPph21();
    this.loadRiwayatPph21();
  }
  loadPph21() {
    this.payrollSvc.getPph21(this.karyawanId).subscribe({
      next: (data) => {
        if (!data)
          return;
        this.statusPkp.set(data.statusPkp ?? "NON_PKP");
        this.npwp.set(data.npwp ?? "");
        this.statusPtkp.set(data.statusPtkp ?? "");
        this.tanggungan.set(data.jumlahTanggungan ?? 0);
        this.metodePph.set(data.metodePph ?? "GROSS");
      },
      error: () => {
      }
    });
  }
  loadRiwayatPph21() {
    this.payrollSvc.listRiwayatPph21(this.karyawanId).subscribe({
      next: (list) => this.riwayatPph21List.set(list ?? []),
      error: () => this.riwayatPph21List.set([])
    });
  }
  // ── Modal Input/Update Manual PPH 21 ─────────────────────────────
  bukaPph21Modal(r) {
    this.pph21ModalError.set("");
    if (r) {
      this.pph21EditingId.set(r.id ?? null);
      this.pph21Periode.set((r.periode ?? "").slice(0, 7));
      this.pph21Dpp.set(+(r.pendapatanBruto ?? 0));
      this.pph21Nilai.set(+(r.pph21Terutang ?? 0));
      this.pph21Thp.set(this.hitungThp(r.pendapatanBruto, r.pph21Terutang));
      this.pph21StatusPtkp.set(this.statusPtkp());
      this.pph21StatusKaryawan.set("");
      this.pph21GajiDasar.set(0);
      this.pph21Ter.set("");
      this.pph21Tunjangan.set([]);
      this.pph21Potongan.set([]);
    } else {
      this.pph21EditingId.set(null);
      const now = /* @__PURE__ */ new Date();
      const m = String(now.getMonth() + 1).padStart(2, "0");
      this.pph21Periode.set(`${now.getFullYear()}-${m}`);
      this.pph21StatusPtkp.set(this.statusPtkp());
      this.pph21StatusKaryawan.set("");
      this.pph21GajiDasar.set(0);
      this.pph21Dpp.set(0);
      this.pph21Ter.set("");
      this.pph21Nilai.set(0);
      this.pph21Thp.set(0);
      this.pph21Tunjangan.set([]);
      this.pph21Potongan.set([]);
    }
    this.showPph21Modal.set(true);
  }
  tutupPph21Modal() {
    this.showPph21Modal.set(false);
  }
  tambahPph21Tunjangan() {
    this.pph21Tunjangan.set([...this.pph21Tunjangan(), { nama: "", jumlah: 0 }]);
  }
  hapusPph21Tunjangan(i) {
    this.pph21Tunjangan.set(this.pph21Tunjangan().filter((_, idx) => idx !== i));
  }
  updatePph21Tunjangan(i, field, value) {
    const arr = [...this.pph21Tunjangan()];
    arr[i] = __spreadProps(__spreadValues({}, arr[i]), { [field]: field === "jumlah" ? +value : value });
    this.pph21Tunjangan.set(arr);
  }
  tambahPph21Potongan() {
    this.pph21Potongan.set([...this.pph21Potongan(), { nama: "", jumlah: 0 }]);
  }
  hapusPph21Potongan(i) {
    this.pph21Potongan.set(this.pph21Potongan().filter((_, idx) => idx !== i));
  }
  updatePph21Potongan(i, field, value) {
    const arr = [...this.pph21Potongan()];
    arr[i] = __spreadProps(__spreadValues({}, arr[i]), { [field]: field === "jumlah" ? +value : value });
    this.pph21Potongan.set(arr);
  }
  simpanPph21Modal() {
    const periode = this.pph21Periode();
    if (!periode) {
      this.pph21ModalError.set("Periode wajib diisi.");
      return;
    }
    if (!this.pph21StatusPtkp()) {
      this.pph21ModalError.set("Status PTKP wajib dipilih.");
      return;
    }
    if (!this.pph21StatusKaryawan()) {
      this.pph21ModalError.set("Status Karyawan wajib dipilih.");
      return;
    }
    const totalTunjangan = this.pph21Tunjangan().reduce((s, r) => s + (+r.jumlah || 0), 0);
    const totalPotongan = this.pph21Potongan().reduce((s, r) => s + (+r.jumlah || 0), 0);
    const bruto = (+this.pph21GajiDasar() || 0) + totalTunjangan - totalPotongan;
    const pph = +this.pph21Nilai() || 0;
    const catatan = JSON.stringify({
      statusPtkp: this.pph21StatusPtkp(),
      statusKaryawan: this.pph21StatusKaryawan(),
      gajiDasar: this.pph21GajiDasar(),
      dpp: this.pph21Dpp(),
      ter: this.pph21Ter(),
      tunjangan: this.pph21Tunjangan(),
      potongan: this.pph21Potongan()
    });
    const req = {
      periode: `${periode}-01`,
      pendapatanBruto: bruto,
      pph21Terutang: pph,
      dibayarkan: pph,
      tanggalBayar: `${periode}-01`,
      statusPembayaran: "LUNAS",
      catatan
    };
    this.pph21ModalSaving.set(true);
    const obs = this.pph21EditingId() ? this.payrollSvc.updateRiwayatPph21(this.karyawanId, this.pph21EditingId(), req) : this.payrollSvc.saveRiwayatPph21(this.karyawanId, req);
    obs.subscribe({
      next: () => {
        this.pph21ModalSaving.set(false);
        this.tutupPph21Modal();
        this.loadRiwayatPph21();
      },
      error: (e) => {
        this.pph21ModalSaving.set(false);
        this.pph21ModalError.set(e?.error?.message ?? "Gagal menyimpan data PPH 21.");
      }
    });
  }
  hapusRiwayatPph21(r) {
    if (!r.id)
      return;
    if (!confirm("Hapus riwayat PPH 21 periode " + (r.periode ?? "") + "?"))
      return;
    this.payrollSvc.deleteRiwayatPph21(this.karyawanId, r.id).subscribe({
      next: () => this.loadRiwayatPph21(),
      error: () => alert("Gagal menghapus riwayat.")
    });
  }
  formatBulanPeriode(periode) {
    if (!periode)
      return "-";
    const d = new Date(periode);
    if (isNaN(d.getTime()))
      return periode;
    const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    return `${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }
  /** THP per baris riwayat = bruto - pph21 (tidak negatif). */
  hitungThp(bruto, pph) {
    return Math.max(0, (+(bruto ?? 0) || 0) - (+(pph ?? 0) || 0));
  }
  loadRekeningBank() {
    this.payrollSvc.getRekeningBank(this.karyawanId).subscribe({
      next: (data) => {
        if (!data)
          return;
        this.namaBank.set(data.namaBank ?? "");
        this.nomorRekening.set(data.nomorRekening ?? "");
        this.atasNama.set(data.atasNama ?? "");
      },
      error: () => {
      }
    });
  }
  loadBpjs() {
    this.payrollSvc.getBpjs(this.karyawanId).subscribe({
      next: (data) => {
        if (!data)
          return;
        this.tkTanggalKepesertaan.set(data.tkTanggalKepesertaan ?? "");
        this.tkNomor.set(data.tkNomor ?? "");
        this.tkUpahDidaftarkan.set(data.tkUpahDidaftarkan ?? 0);
        this.kesTanggalKepesertaan.set(data.kesTanggalKepesertaan ?? "");
        this.kesNomor.set(data.kesNomor ?? "");
        this.kesUpahDidaftarkan.set(data.kesUpahDidaftarkan ?? 0);
        this.kesAnggotaKeluargaInti.set(data.kesAnggotaKeluargaInti ?? 0);
        this.kesAnggotaKeluargaTambahan.set(data.kesAnggotaKeluargaTambahan ?? 0);
      },
      error: () => {
      }
    });
  }
  loadGajiDasar() {
    this.loading.set(true);
    this.payrollSvc.getGajiDasar(this.karyawanId).subscribe({
      next: (data) => {
        this.loading.set(false);
        if (!data)
          return;
        this.tipeGaji.set(data.tipeGaji ?? "PER_BULAN");
        if (data.rincianGaji?.length) {
          this.rincianGaji.set(data.rincianGaji.map((r) => ({
            id: r.id,
            nama: r.nama,
            jumlah: +r.jumlah,
            periode: r.periode
          })));
        }
        this.tipeUpahLembur.set(data.tipeUpahLembur ?? "");
        this.satuanLembur.set(data.satuanLembur ?? "Per Jam");
        this.lemburHariKerja.set(data.lemburHariKerja ?? 0);
        this.lemburSabtu.set(data.lemburSabtu ?? 0);
        this.lemburMinggu.set(data.lemburMinggu ?? 0);
        this.lemburKalenderLibur.set(data.lemburKalenderLibur ?? 0);
        this.potonganIzinJam.set(data.potonganIzinJam ?? 0);
        this.potonganJamKerjaTidakTerpenuhi.set(data.potonganJamKerjaTidakTerpenuhi ?? 0);
        this.potonganAbsenOtomatis.set(data.potonganAbsenOtomatis ?? true);
        this.potonganAbsenManual.set(data.potonganAbsenManual ?? false);
      },
      error: () => this.loading.set(false)
    });
  }
  openSamakan() {
    this.samakanError.set("");
    this.samakanSuccess.set(false);
    this.samakanTargetId.set("");
    this.samakanSearch.set("");
    this.showSamakanModal.set(true);
    if (this.allKaryawanList().length === 0) {
      this.karyawanSvc.findAll().subscribe({
        next: (list) => this.allKaryawanList.set(list),
        error: () => {
        }
      });
    }
  }
  closeSamakan() {
    this.showSamakanModal.set(false);
  }
  submitSamakan() {
    const targetId = this.samakanTargetId();
    if (!targetId)
      return;
    this.samakanLoading.set(true);
    this.samakanError.set("");
    this.payrollSvc.getGajiDasar(+targetId).subscribe({
      next: (data) => {
        this.samakanLoading.set(false);
        if (!data) {
          this.samakanError.set("Karyawan yang dipilih belum memiliki pengaturan gaji dasar.");
          return;
        }
        this.tipeGaji.set(data.tipeGaji ?? "PER_BULAN");
        if (data.rincianGaji?.length) {
          this.rincianGaji.set(data.rincianGaji.map((r) => ({
            nama: r.nama,
            jumlah: +r.jumlah,
            periode: r.periode
          })));
        }
        this.tipeUpahLembur.set(data.tipeUpahLembur ?? "");
        this.satuanLembur.set(data.satuanLembur ?? "Per Jam");
        this.lemburHariKerja.set(data.lemburHariKerja ?? 0);
        this.lemburSabtu.set(data.lemburSabtu ?? 0);
        this.lemburMinggu.set(data.lemburMinggu ?? 0);
        this.lemburKalenderLibur.set(data.lemburKalenderLibur ?? 0);
        this.potonganIzinJam.set(data.potonganIzinJam ?? 0);
        this.potonganJamKerjaTidakTerpenuhi.set(data.potonganJamKerjaTidakTerpenuhi ?? 0);
        this.potonganAbsenOtomatis.set(data.potonganAbsenOtomatis ?? true);
        this.potonganAbsenManual.set(data.potonganAbsenManual ?? false);
        this.samakanSuccess.set(true);
        setTimeout(() => {
          this.closeSamakan();
          this.samakanSuccess.set(false);
        }, 1500);
      },
      error: () => {
        this.samakanLoading.set(false);
        this.samakanError.set("Gagal mengambil data gaji karyawan acuan.");
      }
    });
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  simpan() {
    this.saving.set(true);
    this.error.set("");
    if (this.activeTab() === "GAJI_DASAR") {
      this.payrollSvc.saveGajiDasar(this.karyawanId, {
        tipeGaji: this.tipeGaji(),
        rincianGaji: this.rincianGaji().map((r) => ({
          nama: r.nama,
          jumlah: r.jumlah,
          periode: r.periode
        })),
        tipeUpahLembur: this.tipeUpahLembur(),
        satuanLembur: this.satuanLembur(),
        lemburHariKerja: this.lemburHariKerja(),
        lemburSabtu: this.lemburSabtu(),
        lemburMinggu: this.lemburMinggu(),
        lemburKalenderLibur: this.lemburKalenderLibur(),
        potonganIzinJam: this.potonganIzinJam(),
        potonganJamKerjaTidakTerpenuhi: this.potonganJamKerjaTidakTerpenuhi(),
        potonganAbsenOtomatis: this.potonganAbsenOtomatis(),
        potonganAbsenManual: this.potonganAbsenManual()
      }).subscribe({
        next: (data) => {
          this.saving.set(false);
          this.saved.set(true);
          if (data.rincianGaji) {
            this.rincianGaji.set(data.rincianGaji.map((r) => ({
              id: r.id,
              nama: r.nama,
              jumlah: +r.jumlah,
              periode: r.periode
            })));
          }
          setTimeout(() => this.saved.set(false), 3e3);
        },
        error: (err) => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? "Gagal menyimpan data.");
        }
      });
    } else if (this.activeTab() === "BPJS") {
      this.payrollSvc.saveBpjs(this.karyawanId, {
        tkTanggalKepesertaan: this.tkTanggalKepesertaan() || void 0,
        tkNomor: this.tkNomor() || void 0,
        tkUpahDidaftarkan: this.tkUpahDidaftarkan(),
        kesTanggalKepesertaan: this.kesTanggalKepesertaan() || void 0,
        kesNomor: this.kesNomor() || void 0,
        kesUpahDidaftarkan: this.kesUpahDidaftarkan(),
        kesAnggotaKeluargaInti: this.kesAnggotaKeluargaInti(),
        kesAnggotaKeluargaTambahan: this.kesAnggotaKeluargaTambahan()
      }).subscribe({
        next: () => {
          this.saving.set(false);
          this.saved.set(true);
          setTimeout(() => this.saved.set(false), 3e3);
        },
        error: (err) => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? "Gagal menyimpan BPJS.");
        }
      });
    } else if (this.activeTab() === "REKENING_BANK") {
      this.payrollSvc.saveRekeningBank(this.karyawanId, {
        namaBank: this.namaBank() || void 0,
        nomorRekening: this.nomorRekening() || void 0,
        atasNama: this.atasNama() || void 0
      }).subscribe({
        next: () => {
          this.saving.set(false);
          this.saved.set(true);
          setTimeout(() => this.saved.set(false), 3e3);
        },
        error: (err) => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? "Gagal menyimpan rekening bank.");
        }
      });
    } else if (this.activeTab() === "PPH21") {
      this.payrollSvc.savePph21(this.karyawanId, {
        statusPkp: this.statusPkp(),
        npwp: this.npwp() || void 0,
        statusPtkp: this.statusPtkp() || void 0,
        jumlahTanggungan: this.tanggungan(),
        metodePph: this.metodePph()
      }).subscribe({
        next: () => {
          this.saving.set(false);
          this.saved.set(true);
          this.pengaturanPph21Saved.set(true);
          setTimeout(() => {
            this.saved.set(false);
            this.pengaturanPph21Saved.set(false);
          }, 3e3);
        },
        error: (err) => {
          this.saving.set(false);
          this.error.set(err?.error?.message ?? "Gagal menyimpan pengaturan PPH 21.");
        }
      });
    } else {
      setTimeout(() => {
        this.saving.set(false);
        this.saved.set(true);
        setTimeout(() => this.saved.set(false), 3e3);
      }, 500);
    }
  }
  formatRp(n) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(n);
  }
  static {
    this.\u0275fac = function KaryawanPayrollComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanPayrollComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanPayrollComponent, selectors: [["app-karyawan-payroll"]], decls: 31, vars: 9, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "/dashboard"], [1, "bx", "bx-home-alt"], ["href", "/ak/karyawan"], [1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0", "fw-semibold"], [1, "text-muted"], [1, "border-bottom", "mb-4"], [1, "d-flex", "gap-1", "flex-wrap"], [1, "btn", "btn-sm", "px-3", "py-2", "rounded-0", "border-0", "border-bottom", "border-3", 3, "border-primary", "text-primary", "fw-semibold", "text-muted", "border-bottom-color"], [1, "alert", "alert-success", "py-2", "small", "d-flex", "align-items-center", "gap-2"], [1, "alert", "alert-danger", "py-2", "small"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-4", 2, "max-width", "900px"], [1, "row", "g-4"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.45)", "z-index", "1055"], [1, "btn", "btn-sm", "px-3", "py-2", "rounded-0", "border-0", "border-bottom", "border-3", 3, "click"], [1, "d-inline-block", "px-3", "py-1", "rounded-2", "text-white", 2, "background", "#6366f1", "font-size", ".82rem"], [2, "font-size", ".82rem"], [1, "bx", "bx-check-circle"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "col-md-8"], [1, "btn", "btn-primary", "btn-sm", "px-4", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click"], [1, "row", "align-items-start", "mb-4"], [1, "form-label", "fw-semibold", "small", "mb-0"], [1, "text-danger"], [1, "form-select", "form-select-sm", 2, "max-width", "280px", 3, "change", "value"], [3, "value"], [1, "my-3"], [1, "row", "align-items-start", "mb-3"], [1, "d-flex", "gap-2", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2", "mb-2", "px-1"], [1, "fw-semibold", "small"], [1, "fw-semibold"], [1, "btn", "btn-sm", "btn-outline-secondary", "w-100", "py-2", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "d-flex", "gap-2", "mb-3"], ["type", "text", "placeholder", "Tipe Upah Lembur", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "form-select", "form-select-sm", 2, "max-width", "130px", 3, "change", "value"], ["type", "text", "value", "Hari Kerja", "readonly", "", 1, "form-control", "form-control-sm", 2, "background", "#f9fafb"], [1, "input-group", "input-group-sm", 2, "max-width", "220px"], [1, "input-group-text"], ["type", "number", "min", "0", 1, "form-control", 3, "input", "value"], ["type", "text", "value", "Sabtu", "readonly", "", 1, "form-control", "form-control-sm", 2, "background", "#f9fafb"], ["type", "text", "value", "Minggu", "readonly", "", 1, "form-control", "form-control-sm", 2, "background", "#f9fafb"], ["type", "text", "value", "Kalender Libur", "readonly", "", 1, "form-control", "form-control-sm", 2, "background", "#f9fafb"], [1, "row", "align-items-center", "mb-3"], [1, "input-group", "input-group-sm", "mb-2", 2, "max-width", "220px"], [1, "rounded-2", "px-3", "py-2", "small", "text-white", 2, "background", "#a855f7", "max-width", "420px"], [1, "row", "align-items-center", "mb-4"], [1, "d-flex", "gap-4"], [1, "form-check"], ["type", "checkbox", "id", "absenOtomatis", 1, "form-check-input", 3, "change", "checked"], ["for", "absenOtomatis", 1, "form-check-label", "small"], ["type", "checkbox", "id", "absenManual", 1, "form-check-input", 3, "change", "checked"], ["for", "absenManual", 1, "form-check-label", "small"], [1, "row"], [1, "btn", "btn-primary", "px-4", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["type", "text", "placeholder", "Nama komponen", 1, "form-control", "form-control-sm", 2, "min-width", "150px", 3, "input", "value"], [1, "input-group", "input-group-sm", 2, "max-width", "180px"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-link", "text-danger", "p-0", 3, "click"], [1, "text-center", "text-muted", "py-5"], [1, "bx", "bx-money", 2, "font-size", "3rem"], [1, "mt-2"], [1, "col-12", "col-xl-6"], [1, "card", "border", "shadow-sm", "rounded-3", "p-4", "h-100"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "bx", "bx-chevron-down", "text-muted"], [1, "mb-3"], [1, "form-label", "small", "fw-semibold"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "200px", 3, "change", "value"], ["type", "text", "placeholder", "", 1, "form-control", "form-control-sm", 2, "max-width", "280px", 3, "input", "value"], [1, "mb-4"], [1, "btn", "btn-primary", "btn-sm", "px-4", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "form-label", "small", "fw-semibold", 2, "color", "#f59e0b"], [1, "input-group", "input-group-sm", 2, "max-width", "160px"], [2, "max-width", "1200px"], [1, "card", "border-0", "shadow-sm", "rounded-3", "mb-3"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center", 2, "cursor", "pointer", 3, "click"], [1, "bx"], [1, "card-body", "p-4"], [1, "card", "border-0", "shadow-sm", "rounded-3"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.55)", "z-index", "1060"], [1, "row", "mb-3", "align-items-center"], [1, "col-md-3", "col-form-label", "small", "text-muted"], [1, "col-md-9"], [1, "form-select", "form-select-sm", 3, "change", "value"], [1, "row", "mb-3", "align-items-start"], [1, "form-select", "form-select-sm", "mb-2", 2, "max-width", "240px", 3, "change", "value"], ["value", ""], [1, "bg-light", "border", "rounded", "p-3", "small"], [1, "alert", "alert-success", "py-2", "small", "mb-3"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "text-center"], [1, "btn", "btn-sm", "px-4", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click", "disabled"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "mb-3"], [1, "form-select", "form-select-sm", 2, "width", "auto", 3, "change", "value"], [1, "btn", "btn-sm", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click"], ["title", "Ekspor Excel", "disabled", "", 1, "btn", "btn-sm", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1"], [1, "bx", "bxs-file"], ["title", "Impor Excel", "disabled", "", 1, "btn", "btn-sm", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1"], [1, "bx", "bxs-file-plus"], [1, "row", "g-2", "mb-3"], [1, "rounded", "p-3", "text-white", "d-flex", "justify-content-between", "align-items-center", 2, "background", "#3a3f4d"], [1, "small"], [1, "fw-bold"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "table-light"], [1, "text-end"], [1, "small", "text-muted", "mt-2"], ["title", "Edit", 1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "bx", "bx-edit-alt"], ["title", "Hapus", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bx", "bx-trash"], ["colspan", "11", 1, "text-center", "text-muted", "py-3"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "720px"], [1, "modal-content", "border-0", "shadow"], [1, "modal-header"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-sm-3", "col-form-label", "small"], [1, "col-sm-9"], ["type", "text", "readonly", "", 1, "form-control", "form-control-sm", "bg-light", 3, "value"], ["type", "month", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "form-select", "form-select-sm", 2, "max-width", "200px", 3, "change", "value"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 3, "input", "value"], [1, "form-select", "form-select-sm", 2, "max-width", "160px", 3, "change", "value"], [1, "d-flex", "gap-2", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click"], [1, "alert", "alert-danger", "py-2", "small", "mb-0"], [1, "modal-footer", "d-flex", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "px-4", "text-white", 2, "background", "#6366f1", "border-color", "#6366f1", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-light", "border", "btn-sm", "px-4", 3, "click"], ["type", "text", "placeholder", "Nama tunjangan", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "number", "placeholder", "Jumlah", "min", "0", 1, "form-control", "form-control-sm", 2, "max-width", "160px", 3, "input", "value"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["type", "text", "placeholder", "Nama potongan", 1, "form-control", "form-control-sm", 3, "input", "value"], ["type", "text", "placeholder", "Contoh: BCA, BRI, Mandiri", 1, "form-control", "form-control-sm", 2, "max-width", "320px", 3, "input", "value"], ["type", "text", "placeholder", "Nomor rekening", 1, "form-control", "form-control-sm", 2, "max-width", "320px", 3, "input", "value"], ["type", "text", "placeholder", "Nama pemilik rekening", 1, "form-control", "form-control-sm", 2, "max-width", "320px", 3, "input", "value"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "480px"], [1, "modal-content", "border-0", "shadow", "rounded-3"], [1, "modal-header", "border-0", "pb-0", "align-items-start"], [1, "modal-title", "fw-semibold"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "ms-auto", "px-3", 3, "click"], [1, "modal-body", "pt-2"], [1, "text-muted", "small", "mb-3"], ["type", "text", "placeholder", "Cari nama karyawan...", 1, "form-control", "form-control-sm", "mb-2", 3, "input", "value"], ["size", "6", 1, "form-select", "form-select-sm", 2, "min-height", "160px", 3, "change", "value"], [1, "alert", "alert-danger", "py-2", "mt-2", "small"], [1, "alert", "alert-success", "py-2", "mt-2", "small"], [1, "modal-footer", "border-0", "pt-0"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-4", 3, "click"], [1, "bx", "bx-check-circle", "me-1"]], template: function KaryawanPayrollComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14, "Payroll");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "h5", 11);
        \u0275\u0275text(17, "Payroll");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, KaryawanPayrollComponent_Conditional_18_Template, 2, 1, "small", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275repeaterCreate(21, KaryawanPayrollComponent_For_22_Template, 3, 11, "button", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, KaryawanPayrollComponent_Conditional_23_Template, 3, 0, "div", 16);
        \u0275\u0275conditionalCreate(24, KaryawanPayrollComponent_Conditional_24_Template, 2, 1, "div", 17);
        \u0275\u0275conditionalCreate(25, KaryawanPayrollComponent_Conditional_25_Template, 127, 14, "div", 18);
        \u0275\u0275conditionalCreate(26, KaryawanPayrollComponent_Conditional_26_Template, 5, 0, "div", 18);
        \u0275\u0275conditionalCreate(27, KaryawanPayrollComponent_Conditional_27_Template, 65, 12, "div", 19);
        \u0275\u0275conditionalCreate(28, KaryawanPayrollComponent_Conditional_28_Template, 14, 11);
        \u0275\u0275conditionalCreate(29, KaryawanPayrollComponent_Conditional_29_Template, 25, 5, "div", 18);
        \u0275\u0275conditionalCreate(30, KaryawanPayrollComponent_Conditional_30_Template, 31, 7, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275conditional(ctx.karyawan() ? 18 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.saved() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "GAJI_DASAR" ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "PEMBAYARAN_GAJI" ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "BPJS" ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "PPH21" ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "REKENING_BANK" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSamakanModal() ? 30 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, LayoutComponent], styles: ["\n.border-bottom.border-3[_ngcontent-%COMP%] {\n  border-bottom-width: 3px !important;\n}\n/*# sourceMappingURL=karyawan-payroll.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanPayrollComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-payroll", standalone: true, imports: [CommonModule, FormsModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Karyawan</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a href="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a href="/ak/karyawan">Karyawan</a></li>\r
          <li class="breadcrumb-item active">Payroll</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <h5 class="mb-0 fw-semibold">Payroll</h5>\r
    @if (karyawan()) {\r
      <small class="text-muted">{{ karyawan()!.namaLengkap }}</small>\r
    }\r
  </div>\r
\r
  <!-- Tabs -->\r
  <div class="border-bottom mb-4">\r
    <div class="d-flex gap-1 flex-wrap">\r
      @for (tab of tabs; track tab.key) {\r
        <button class="btn btn-sm px-3 py-2 rounded-0 border-0 border-bottom border-3"\r
                [class.border-primary]="activeTab() === tab.key"\r
                [class.text-primary]="activeTab() === tab.key"\r
                [class.fw-semibold]="activeTab() === tab.key"\r
                [class.text-muted]="activeTab() !== tab.key"\r
                [style.border-bottom-color]="activeTab() === tab.key ? '#6366f1' : 'transparent !important'"\r
                (click)="setTab(tab.key)">\r
          @if (activeTab() === tab.key) {\r
            <span class="d-inline-block px-3 py-1 rounded-2 text-white" style="background:#6366f1;font-size:.82rem">\r
              {{ tab.label }}\r
            </span>\r
          } @else {\r
            <span style="font-size:.82rem">{{ tab.label }}</span>\r
          }\r
        </button>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- Alert sukses -->\r
  @if (saved()) {\r
    <div class="alert alert-success py-2 small d-flex align-items-center gap-2">\r
      <i class="bx bx-check-circle"></i> Data berhasil disimpan.\r
    </div>\r
  }\r
  @if (error()) {\r
    <div class="alert alert-danger py-2 small">{{ error() }}</div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: GAJI DASAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'GAJI_DASAR') {\r
    <div class="card border-0 shadow-sm rounded-3 p-4" style="max-width:900px">\r
\r
      <!-- Samakan dengan Karyawan Lain -->\r
      <div class="row mb-4">\r
        <div class="col-md-4"></div>\r
        <div class="col-md-8">\r
          <button class="btn btn-primary btn-sm px-4" style="background:#6366f1;border-color:#6366f1"\r
                  (click)="openSamakan()">\r
            Samakan dengan Karyawan Lain\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Tipe Gaji -->\r
      <div class="row align-items-start mb-4">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Tipe Gaji <span class="text-danger">*</span></label>\r
        </div>\r
        <div class="col-md-8">\r
          <select class="form-select form-select-sm" style="max-width:280px"\r
                  [value]="tipeGaji()"\r
                  (change)="tipeGaji.set($any($event.target).value)">\r
            @for (opt of tipeGajiOptions; track opt.value) {\r
              <option [value]="opt.value">{{ opt.label }}</option>\r
            }\r
          </select>\r
        </div>\r
      </div>\r
\r
      <hr class="my-3">\r
\r
      <!-- Rincian Gaji -->\r
      <div class="row align-items-start mb-3">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Rincian Gaji <span class="text-danger">*</span></label>\r
        </div>\r
        <div class="col-md-8">\r
          @for (item of rincianGaji(); track $index; let i = $index) {\r
            <div class="d-flex gap-2 align-items-center mb-2">\r
              <input type="text" class="form-control form-control-sm" style="min-width:150px"\r
                     placeholder="Nama komponen"\r
                     [value]="item.nama"\r
                     (input)="updateRincian(i, 'nama', $any($event.target).value)">\r
              <div class="input-group input-group-sm" style="max-width:180px">\r
                <span class="input-group-text">Rp</span>\r
                <input type="number" class="form-control" min="0"\r
                       [value]="item.jumlah"\r
                       (input)="updateRincian(i, 'jumlah', $any($event.target).value)">\r
              </div>\r
              <select class="form-select form-select-sm" style="max-width:130px"\r
                      [value]="item.periode"\r
                      (change)="updateRincian(i, 'periode', $any($event.target).value)">\r
                @for (p of periodeOptions; track p) {\r
                  <option [value]="p">{{ p }}</option>\r
                }\r
              </select>\r
              <button class="btn btn-sm btn-link text-danger p-0" (click)="removeRincian(i)" title="Hapus">\r
                \xD7\r
              </button>\r
            </div>\r
          }\r
\r
          <!-- Total Gaji -->\r
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 px-1">\r
            <span class="fw-semibold small">Total Gaji</span>\r
            <span class="fw-semibold">{{ formatRp(totalGaji()) }}</span>\r
          </div>\r
\r
          <!-- Tombol Tambah -->\r
          <button class="btn btn-sm btn-outline-secondary w-100 py-2" (click)="addRincian()">\r
            <i class="bx bx-plus me-1"></i> Tambah\r
          </button>\r
        </div>\r
      </div>\r
\r
      <hr class="my-3">\r
\r
      <!-- Upah Lembur -->\r
      <div class="row align-items-start mb-4">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Upah Lembur <span class="text-danger">*</span></label>\r
        </div>\r
        <div class="col-md-8">\r
          <!-- Tipe + Satuan -->\r
          <div class="d-flex gap-2 mb-3">\r
            <input type="text" class="form-control form-control-sm"\r
                   placeholder="Tipe Upah Lembur"\r
                   [value]="tipeUpahLembur()"\r
                   (input)="tipeUpahLembur.set($any($event.target).value)">\r
            <select class="form-select form-select-sm" style="max-width:130px"\r
                    [value]="satuanLembur()"\r
                    (change)="satuanLembur.set($any($event.target).value)">\r
              @for (opt of satuanLemburOptions; track opt) {\r
                <option [value]="opt">{{ opt }}</option>\r
              }\r
            </select>\r
          </div>\r
          <!-- Baris per hari -->\r
          <div class="d-flex gap-2 align-items-center mb-2">\r
            <input type="text" class="form-control form-control-sm" value="Hari Kerja" readonly style="background:#f9fafb">\r
            <div class="input-group input-group-sm" style="max-width:220px">\r
              <span class="input-group-text">Rp</span>\r
              <input type="number" class="form-control" min="0"\r
                     [value]="lemburHariKerja()"\r
                     (input)="lemburHariKerja.set(+$any($event.target).value)">\r
              <span class="input-group-text">Per Jam</span>\r
            </div>\r
          </div>\r
          <div class="d-flex gap-2 align-items-center mb-2">\r
            <input type="text" class="form-control form-control-sm" value="Sabtu" readonly style="background:#f9fafb">\r
            <div class="input-group input-group-sm" style="max-width:220px">\r
              <span class="input-group-text">Rp</span>\r
              <input type="number" class="form-control" min="0"\r
                     [value]="lemburSabtu()"\r
                     (input)="lemburSabtu.set(+$any($event.target).value)">\r
              <span class="input-group-text">Per Jam</span>\r
            </div>\r
          </div>\r
          <div class="d-flex gap-2 align-items-center mb-2">\r
            <input type="text" class="form-control form-control-sm" value="Minggu" readonly style="background:#f9fafb">\r
            <div class="input-group input-group-sm" style="max-width:220px">\r
              <span class="input-group-text">Rp</span>\r
              <input type="number" class="form-control" min="0"\r
                     [value]="lemburMinggu()"\r
                     (input)="lemburMinggu.set(+$any($event.target).value)">\r
              <span class="input-group-text">Per Jam</span>\r
            </div>\r
          </div>\r
          <div class="d-flex gap-2 align-items-center mb-2">\r
            <input type="text" class="form-control form-control-sm" value="Kalender Libur" readonly style="background:#f9fafb">\r
            <div class="input-group input-group-sm" style="max-width:220px">\r
              <span class="input-group-text">Rp</span>\r
              <input type="number" class="form-control" min="0"\r
                     [value]="lemburKalenderLibur()"\r
                     (input)="lemburKalenderLibur.set(+$any($event.target).value)">\r
              <span class="input-group-text">Per Jam</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <hr class="my-3">\r
\r
      <!-- Potongan Izin Jam -->\r
      <div class="row align-items-center mb-3">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Potongan Izin Jam <span class="text-danger">*</span></label>\r
        </div>\r
        <div class="col-md-8">\r
          <div class="input-group input-group-sm" style="max-width:220px">\r
            <span class="input-group-text">Rp</span>\r
            <input type="number" class="form-control" min="0"\r
                   [value]="potonganIzinJam()"\r
                   (input)="potonganIzinJam.set(+$any($event.target).value)">\r
            <span class="input-group-text">Per Jam</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Potongan Jam Kerja Tidak Terpenuhi -->\r
      <div class="row align-items-start mb-3">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Potongan Jam Kerja Tidak Terpenuhi</label>\r
        </div>\r
        <div class="col-md-8">\r
          <div class="input-group input-group-sm mb-2" style="max-width:220px">\r
            <span class="input-group-text">Rp</span>\r
            <input type="number" class="form-control" min="0"\r
                   [value]="potonganJamKerjaTidakTerpenuhi()"\r
                   (input)="potonganJamKerjaTidakTerpenuhi.set(+$any($event.target).value)">\r
            <span class="input-group-text">Per Jam</span>\r
          </div>\r
          <div class="rounded-2 px-3 py-2 small text-white" style="background:#a855f7;max-width:420px">\r
            Jika sudah terdenda karena terlambat maka potongan ini tidak diterapkan.\r
          </div>\r
        </div>\r
      </div>\r
\r
      <hr class="my-3">\r
\r
      <!-- Potongan Absen Per Hari -->\r
      <div class="row align-items-center mb-4">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Potongan Absen Per Hari</label>\r
        </div>\r
        <div class="col-md-8">\r
          <div class="d-flex gap-4">\r
            <div class="form-check">\r
              <input class="form-check-input" type="checkbox" id="absenOtomatis"\r
                     [checked]="potonganAbsenOtomatis()"\r
                     (change)="potonganAbsenOtomatis.set($any($event.target).checked)">\r
              <label class="form-check-label small" for="absenOtomatis">Otomatis</label>\r
            </div>\r
            <div class="form-check">\r
              <input class="form-check-input" type="checkbox" id="absenManual"\r
                     [checked]="potonganAbsenManual()"\r
                     (change)="potonganAbsenManual.set($any($event.target).checked)">\r
              <label class="form-check-label small" for="absenManual">Manual</label>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Tombol Simpan -->\r
      <div class="row">\r
        <div class="col-md-4"></div>\r
        <div class="col-md-8">\r
          <button class="btn btn-primary px-4" style="background:#6366f1;border-color:#6366f1"\r
                  [disabled]="saving()" (click)="simpan()">\r
            @if (saving()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
            Simpan\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: PEMBAYARAN GAJI \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'PEMBAYARAN_GAJI') {\r
    <div class="card border-0 shadow-sm rounded-3 p-4" style="max-width:900px">\r
      <div class="text-center text-muted py-5">\r
        <i class="bx bx-money" style="font-size:3rem"></i>\r
        <p class="mt-2">Fitur Pembayaran Gaji akan segera tersedia.</p>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: BPJS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'BPJS') {\r
    <div class="row g-4">\r
\r
      <!-- \u2500\u2500 KARTU KIRI: BPJS Ketenagakerjaan \u2500\u2500 -->\r
      <div class="col-12 col-xl-6">\r
        <div class="card border shadow-sm rounded-3 p-4 h-100">\r
          <div class="d-flex align-items-center justify-content-between mb-4">\r
            <h6 class="fw-bold mb-0">BPJS Ketenagakerjaan</h6>\r
            <i class="bx bx-chevron-down text-muted"></i>\r
          </div>\r
\r
          <!-- Tanggal Kepesertaan -->\r
          <div class="mb-3">\r
            <label class="form-label small fw-semibold">Tanggal Kepesertaan</label>\r
            <input type="date" class="form-control form-control-sm" style="max-width:200px"\r
                   [value]="tkTanggalKepesertaan()"\r
                   (change)="tkTanggalKepesertaan.set($any($event.target).value)">\r
          </div>\r
\r
          <!-- Nomor BPJS TK -->\r
          <div class="mb-3">\r
            <label class="form-label small fw-semibold">Nomor BPJS Ketenagakerjaan</label>\r
            <input type="text" class="form-control form-control-sm" style="max-width:280px"\r
                   placeholder=""\r
                   [value]="tkNomor()"\r
                   (input)="tkNomor.set($any($event.target).value)">\r
          </div>\r
\r
          <!-- Upah Didaftarkan -->\r
          <div class="mb-4">\r
            <label class="form-label small fw-semibold">Upah Didaftarkan</label>\r
            <div class="input-group input-group-sm" style="max-width:220px">\r
              <span class="input-group-text">Rp</span>\r
              <input type="number" class="form-control" min="0"\r
                     [value]="tkUpahDidaftarkan()"\r
                     (input)="tkUpahDidaftarkan.set(+$any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <!-- Simpan -->\r
          <div>\r
            <button class="btn btn-primary btn-sm px-4" style="background:#6366f1;border-color:#6366f1"\r
                    [disabled]="saving()" (click)="simpan()">\r
              @if (saving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 KARTU KANAN: BPJS Kesehatan \u2500\u2500 -->\r
      <div class="col-12 col-xl-6">\r
        <div class="card border shadow-sm rounded-3 p-4 h-100">\r
          <div class="d-flex align-items-center justify-content-between mb-4">\r
            <h6 class="fw-bold mb-0">BPJS Kesehatan</h6>\r
            <i class="bx bx-chevron-down text-muted"></i>\r
          </div>\r
\r
          <!-- Tanggal Kepesertaan -->\r
          <div class="mb-3">\r
            <label class="form-label small fw-semibold">Tanggal Kepesertaan</label>\r
            <input type="date" class="form-control form-control-sm" style="max-width:200px"\r
                   [value]="kesTanggalKepesertaan()"\r
                   (change)="kesTanggalKepesertaan.set($any($event.target).value)">\r
          </div>\r
\r
          <!-- Nomor BPJS Kesehatan -->\r
          <div class="mb-3">\r
            <label class="form-label small fw-semibold">Nomor BPJS Kesehatan</label>\r
            <input type="text" class="form-control form-control-sm" style="max-width:280px"\r
                   placeholder=""\r
                   [value]="kesNomor()"\r
                   (input)="kesNomor.set($any($event.target).value)">\r
          </div>\r
\r
          <!-- Upah Didaftarkan -->\r
          <div class="mb-3">\r
            <label class="form-label small fw-semibold">Upah Didaftarkan</label>\r
            <div class="input-group input-group-sm" style="max-width:220px">\r
              <span class="input-group-text">Rp</span>\r
              <input type="number" class="form-control" min="0"\r
                     [value]="kesUpahDidaftarkan()"\r
                     (input)="kesUpahDidaftarkan.set(+$any($event.target).value)">\r
            </div>\r
          </div>\r
\r
          <!-- Anggota Keluarga Inti -->\r
          <div class="mb-3">\r
            <label class="form-label small fw-semibold" style="color:#f59e0b">\r
              Anggota Keluarga Inti (Termasuk Karyawan)\r
            </label>\r
            <div class="input-group input-group-sm" style="max-width:160px">\r
              <input type="number" class="form-control" min="0"\r
                     [value]="kesAnggotaKeluargaInti()"\r
                     (input)="kesAnggotaKeluargaInti.set(+$any($event.target).value)">\r
              <span class="input-group-text">Orang</span>\r
            </div>\r
          </div>\r
\r
          <!-- Anggota Keluarga Tambahan -->\r
          <div class="mb-4">\r
            <label class="form-label small fw-semibold" style="color:#f59e0b">\r
              Anggota Keluarga Tambahan\r
            </label>\r
            <div class="input-group input-group-sm" style="max-width:160px">\r
              <input type="number" class="form-control" min="0"\r
                     [value]="kesAnggotaKeluargaTambahan()"\r
                     (input)="kesAnggotaKeluargaTambahan.set(+$any($event.target).value)">\r
              <span class="input-group-text">Orang</span>\r
            </div>\r
          </div>\r
\r
          <!-- Simpan -->\r
          <div>\r
            <button class="btn btn-primary btn-sm px-4" style="background:#6366f1;border-color:#6366f1"\r
                    [disabled]="saving()" (click)="simpan()">\r
              @if (saving()) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
              Simpan\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: PPH 21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'PPH21') {\r
    <div style="max-width:1200px">\r
\r
      <!-- \u2500\u2500 Card 1: Pengaturan PPH 21 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="card border-0 shadow-sm rounded-3 mb-3">\r
        <div class="card-header bg-light d-flex justify-content-between align-items-center"\r
             style="cursor:pointer"\r
             (click)="pengaturanPph21Open.set(!pengaturanPph21Open())">\r
          <span class="fw-semibold small">Pengaturan PPH 21</span>\r
          <i class="bx" [class.bx-chevron-down]="pengaturanPph21Open()"\r
                       [class.bx-chevron-up]="!pengaturanPph21Open()"></i>\r
        </div>\r
        @if (pengaturanPph21Open()) {\r
          <div class="card-body p-4">\r
\r
            <!-- Status Karyawan -->\r
            <div class="row mb-3 align-items-center">\r
              <label class="col-md-3 col-form-label small text-muted">Status Karyawan</label>\r
              <div class="col-md-9">\r
                <select class="form-select form-select-sm"\r
                        [value]="statusPkp()"\r
                        (change)="statusPkp.set($any($event.target).value)">\r
                  @for (opt of statusPkpOptions; track opt.value) {\r
                    <option [value]="opt.value">{{ opt.label }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Status PTKP -->\r
            <div class="row mb-3 align-items-start">\r
              <label class="col-md-3 col-form-label small text-muted">\r
                Status PTKP <span class="text-danger">*</span>\r
              </label>\r
              <div class="col-md-9">\r
                <select class="form-select form-select-sm mb-2" style="max-width:240px"\r
                        [value]="statusPtkp()"\r
                        (change)="statusPtkp.set($any($event.target).value)">\r
                  <option value="">--Pilih--</option>\r
                  @for (opt of statusPtkpOptions; track opt) {\r
                    <option [value]="opt">{{ opt }}</option>\r
                  }\r
                </select>\r
                <div class="bg-light border rounded p-3 small">\r
                  <div><strong>TK/0</strong> = Tidak Kawin, tanpa tanggungan</div>\r
                  <div><strong>TK/1</strong> = Tidak Kawin, dengan 1 tanggungan</div>\r
                  <div><strong>TK/2</strong> = Tidak Kawin, dengan 2 tanggungan</div>\r
                  <div><strong>TK/3</strong> = Tidak Kawin, dengan 3 tanggungan</div>\r
                  <div><strong>K/0</strong> = Kawin, tanpa tanggungan</div>\r
                  <div><strong>K/1</strong> = Kawin, dengan 1 tanggungan</div>\r
                  <div><strong>K/2</strong> = Kawin, dengan 2 tanggungan</div>\r
                  <div><strong>K/3</strong> = Kawin, dengan 3 tanggungan</div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            @if (pengaturanPph21Saved()) {\r
              <div class="alert alert-success py-2 small mb-3">\r
                Pengaturan PPH 21 berhasil disimpan.\r
              </div>\r
            }\r
            @if (error()) {\r
              <div class="alert alert-danger py-2 small mb-3">{{ error() }}</div>\r
            }\r
\r
            <div class="text-center">\r
              <button class="btn btn-sm px-4 text-white"\r
                      style="background:#6366f1;border-color:#6366f1"\r
                      [disabled]="saving()" (click)="simpan()">\r
                @if (saving()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
                Simpan\r
              </button>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- \u2500\u2500 Card 2: Riwayat Pembayaran PPH 21 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="card border-0 shadow-sm rounded-3">\r
        <div class="card-header bg-light d-flex justify-content-between align-items-center"\r
             style="cursor:pointer"\r
             (click)="riwayatPph21Open.set(!riwayatPph21Open())">\r
          <span class="fw-semibold small">Riwayat Pembayaran PPH 21</span>\r
          <i class="bx" [class.bx-chevron-down]="riwayatPph21Open()"\r
                       [class.bx-chevron-up]="!riwayatPph21Open()"></i>\r
        </div>\r
        @if (riwayatPph21Open()) {\r
          <div class="card-body p-4">\r
\r
            <!-- Toolbar: tahun + tombol -->\r
            <div class="d-flex flex-wrap gap-2 align-items-center mb-3">\r
              <select class="form-select form-select-sm" style="width:auto"\r
                      [value]="riwayatPph21Year()"\r
                      (change)="riwayatPph21Year.set(+$any($event.target).value)">\r
                @for (y of riwayatPph21YearOptions(); track y) {\r
                  <option [value]="y">{{ y }}</option>\r
                }\r
              </select>\r
\r
              <button class="btn btn-sm text-white"\r
                      style="background:#6366f1;border-color:#6366f1"\r
                      (click)="bukaPph21Modal()">\r
                <i class="bx bx-plus me-1"></i> Input/Update Manual\r
              </button>\r
\r
              <button class="btn btn-sm text-white"\r
                      style="background:#6366f1;border-color:#6366f1"\r
                      title="Ekspor Excel" disabled>\r
                <i class="bx bxs-file"></i>\r
              </button>\r
              <button class="btn btn-sm text-white"\r
                      style="background:#6366f1;border-color:#6366f1"\r
                      title="Impor Excel" disabled>\r
                <i class="bx bxs-file-plus"></i>\r
              </button>\r
            </div>\r
\r
            <!-- Card total -->\r
            <div class="row g-2 mb-3">\r
              <div class="col-md-4">\r
                <div class="rounded p-3 text-white d-flex justify-content-between align-items-center"\r
                     style="background:#3a3f4d">\r
                  <span class="small">Total DPP</span>\r
                  <span class="fw-bold">{{ formatRp(totalDpp()) }}</span>\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="rounded p-3 text-white d-flex justify-content-between align-items-center"\r
                     style="background:#3a3f4d">\r
                  <span class="small">Total PPH 21</span>\r
                  <span class="fw-bold">{{ formatRp(totalPph21()) }}</span>\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="rounded p-3 text-white d-flex justify-content-between align-items-center"\r
                     style="background:#3a3f4d">\r
                  <span class="small">Total THP</span>\r
                  <span class="fw-bold">{{ formatRp(totalThp()) }}</span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Tabel Riwayat -->\r
            <div class="table-responsive">\r
              <table class="table table-sm align-middle mb-0">\r
                <thead class="table-light">\r
                  <tr>\r
                    <th>Bulan</th>\r
                    <th>NPWP</th>\r
                    <th>Status PTKP</th>\r
                    <th class="text-end">Gaji (Rp)</th>\r
                    <th class="text-end">Tunjangan (Rp)</th>\r
                    <th class="text-end">Potongan (Rp)</th>\r
                    <th class="text-end">Dasar Pengenaan Pajak (Rp)</th>\r
                    <th>Tarif</th>\r
                    <th class="text-end">Nilai PPH (Rp)</th>\r
                    <th class="text-end">THP (Rp)</th>\r
                    <th class="text-center">Aksi</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @for (r of riwayatPph21Filtered(); track r.id) {\r
                    <tr>\r
                      <td>{{ formatBulanPeriode(r.periode) }}</td>\r
                      <td>{{ npwp() || '-' }}</td>\r
                      <td>{{ statusPtkp() || '-' }}</td>\r
                      <td class="text-end">{{ formatRp(0) }}</td>\r
                      <td class="text-end">{{ formatRp(0) }}</td>\r
                      <td class="text-end">{{ formatRp(0) }}</td>\r
                      <td class="text-end">{{ formatRp(+(r.pendapatanBruto ?? 0)) }}</td>\r
                      <td>-</td>\r
                      <td class="text-end">{{ formatRp(+(r.pph21Terutang ?? 0)) }}</td>\r
                      <td class="text-end">\r
                        {{ formatRp(hitungThp(r.pendapatanBruto, r.pph21Terutang)) }}\r
                      </td>\r
                      <td class="text-center">\r
                        <button class="btn btn-sm btn-outline-primary me-1"\r
                                title="Edit" (click)="bukaPph21Modal(r)">\r
                          <i class="bx bx-edit-alt"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-outline-danger"\r
                                title="Hapus" (click)="hapusRiwayatPph21(r)">\r
                          <i class="bx bx-trash"></i>\r
                        </button>\r
                      </td>\r
                    </tr>\r
                  }\r
                  @if (riwayatPph21Filtered().length === 0) {\r
                    <tr>\r
                      <td colspan="11" class="text-center text-muted py-3">\r
                        <strong>Menampilkan 0 dari 0 total data</strong>\r
                      </td>\r
                    </tr>\r
                  }\r
                </tbody>\r
              </table>\r
              @if (riwayatPph21Filtered().length > 0) {\r
                <div class="small text-muted mt-2">\r
                  Menampilkan {{ riwayatPph21Filtered().length }} dari\r
                  {{ riwayatPph21Filtered().length }} total data\r
                </div>\r
              }\r
            </div>\r
\r
          </div>\r
        }\r
      </div>\r
\r
    </div>\r
\r
    <!-- \u2500\u2500 Modal: Input/Update Manual PPH 21 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    @if (showPph21Modal()) {\r
      <div class="modal fade show d-block" tabindex="-1"\r
           style="background:rgba(0,0,0,.55);z-index:1060">\r
        <div class="modal-dialog modal-dialog-centered" style="max-width:720px">\r
          <div class="modal-content border-0 shadow">\r
            <div class="modal-header">\r
              <h5 class="modal-title fw-bold">Input/Update Manual PPH 21</h5>\r
              <button type="button" class="btn-close" (click)="tutupPph21Modal()"></button>\r
            </div>\r
            <div class="modal-body">\r
\r
              <!-- Karyawan (read-only) -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Karyawan <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="text" class="form-control form-control-sm bg-light"\r
                         readonly [value]="karyawan()?.namaLengkap ?? '-'">\r
                </div>\r
              </div>\r
\r
              <!-- Bulan / Tahun -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Bulan / Tahun <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="month" class="form-control form-control-sm"\r
                         [value]="pph21Periode()"\r
                         (input)="pph21Periode.set($any($event.target).value)">\r
                </div>\r
              </div>\r
\r
              <!-- Status PTKP -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Status PTKP <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm" style="max-width:200px"\r
                          [value]="pph21StatusPtkp()"\r
                          (change)="pph21StatusPtkp.set($any($event.target).value)">\r
                    <option value="">--Pilih--</option>\r
                    @for (opt of statusPtkpOptions; track opt) {\r
                      <option [value]="opt">{{ opt }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <!-- Status Karyawan -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Status Karyawan <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm"\r
                          [value]="pph21StatusKaryawan()"\r
                          (change)="pph21StatusKaryawan.set($any($event.target).value)">\r
                    <option value="">--Pilih--</option>\r
                    @for (opt of statusKaryawanModalOptions; track opt) {\r
                      <option [value]="opt">{{ opt }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <!-- Gaji Dasar -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  Gaji Dasar <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="pph21GajiDasar()"\r
                         (input)="pph21GajiDasar.set(+$any($event.target).value)">\r
                </div>\r
              </div>\r
\r
              <!-- DPP -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  DPP <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="pph21Dpp()"\r
                         (input)="pph21Dpp.set(+$any($event.target).value)">\r
                </div>\r
              </div>\r
\r
              <!-- TER -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  TER <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <select class="form-select form-select-sm" style="max-width:160px"\r
                          [value]="pph21Ter()"\r
                          (change)="pph21Ter.set($any($event.target).value)">\r
                    <option value="">--Pilih--</option>\r
                    @for (opt of terOptions; track opt) {\r
                      <option [value]="opt">{{ opt }}</option>\r
                    }\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <!-- PPH 21 -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  PPH 21 <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="pph21Nilai()"\r
                         (input)="pph21Nilai.set(+$any($event.target).value)">\r
                </div>\r
              </div>\r
\r
              <!-- THP -->\r
              <div class="row mb-3 align-items-center">\r
                <label class="col-sm-3 col-form-label small">\r
                  THP <span class="text-danger">*</span>\r
                </label>\r
                <div class="col-sm-9">\r
                  <input type="number" class="form-control form-control-sm" min="0"\r
                         [value]="pph21Thp()"\r
                         (input)="pph21Thp.set(+$any($event.target).value)">\r
                </div>\r
              </div>\r
\r
              <!-- Tunjangan -->\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-3 col-form-label small">Tunjangan</label>\r
                <div class="col-sm-9">\r
                  @for (t of pph21Tunjangan(); track $index) {\r
                    <div class="d-flex gap-2 mb-2">\r
                      <input type="text" class="form-control form-control-sm"\r
                             placeholder="Nama tunjangan"\r
                             [value]="t.nama"\r
                             (input)="updatePph21Tunjangan($index, 'nama', $any($event.target).value)">\r
                      <input type="number" class="form-control form-control-sm"\r
                             placeholder="Jumlah" min="0" style="max-width:160px"\r
                             [value]="t.jumlah"\r
                             (input)="updatePph21Tunjangan($index, 'jumlah', $any($event.target).value)">\r
                      <button class="btn btn-sm btn-outline-danger" type="button"\r
                              (click)="hapusPph21Tunjangan($index)">\r
                        <i class="bx bx-trash"></i>\r
                      </button>\r
                    </div>\r
                  }\r
                  <button class="btn btn-sm text-white"\r
                          style="background:#6366f1;border-color:#6366f1"\r
                          type="button" (click)="tambahPph21Tunjangan()">\r
                    Tambah\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- Potongan -->\r
              <div class="row mb-3 align-items-start">\r
                <label class="col-sm-3 col-form-label small">Potongan</label>\r
                <div class="col-sm-9">\r
                  @for (p of pph21Potongan(); track $index) {\r
                    <div class="d-flex gap-2 mb-2">\r
                      <input type="text" class="form-control form-control-sm"\r
                             placeholder="Nama potongan"\r
                             [value]="p.nama"\r
                             (input)="updatePph21Potongan($index, 'nama', $any($event.target).value)">\r
                      <input type="number" class="form-control form-control-sm"\r
                             placeholder="Jumlah" min="0" style="max-width:160px"\r
                             [value]="p.jumlah"\r
                             (input)="updatePph21Potongan($index, 'jumlah', $any($event.target).value)">\r
                      <button class="btn btn-sm btn-outline-danger" type="button"\r
                              (click)="hapusPph21Potongan($index)">\r
                        <i class="bx bx-trash"></i>\r
                      </button>\r
                    </div>\r
                  }\r
                  <button class="btn btn-sm text-white"\r
                          style="background:#6366f1;border-color:#6366f1"\r
                          type="button" (click)="tambahPph21Potongan()">\r
                    Tambah\r
                  </button>\r
                </div>\r
              </div>\r
\r
              @if (pph21ModalError()) {\r
                <div class="alert alert-danger py-2 small mb-0">\r
                  {{ pph21ModalError() }}\r
                </div>\r
              }\r
            </div>\r
\r
            <div class="modal-footer d-flex justify-content-center gap-2">\r
              <button type="button" class="btn btn-sm px-4 text-white"\r
                      style="background:#6366f1;border-color:#6366f1"\r
                      [disabled]="pph21ModalSaving()" (click)="simpanPph21Modal()">\r
                @if (pph21ModalSaving()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
                Simpan\r
              </button>\r
              <button type="button" class="btn btn-light border btn-sm px-4"\r
                      (click)="tutupPph21Modal()">Tutup</button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    }\r
  }\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: REKENING BANK \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (activeTab() === 'REKENING_BANK') {\r
    <div class="card border-0 shadow-sm rounded-3 p-4" style="max-width:900px">\r
\r
      <!-- Nama Bank -->\r
      <div class="row align-items-center mb-3">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Nama Bank</label>\r
        </div>\r
        <div class="col-md-8">\r
          <input type="text" class="form-control form-control-sm" style="max-width:320px"\r
                 placeholder="Contoh: BCA, BRI, Mandiri"\r
                 [value]="namaBank()"\r
                 (input)="namaBank.set($any($event.target).value)">\r
        </div>\r
      </div>\r
\r
      <!-- Nomor Rekening -->\r
      <div class="row align-items-center mb-3">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Nomor Rekening</label>\r
        </div>\r
        <div class="col-md-8">\r
          <input type="text" class="form-control form-control-sm" style="max-width:320px"\r
                 placeholder="Nomor rekening"\r
                 [value]="nomorRekening()"\r
                 (input)="nomorRekening.set($any($event.target).value)">\r
        </div>\r
      </div>\r
\r
      <!-- Atas Nama -->\r
      <div class="row align-items-center mb-4">\r
        <div class="col-md-4">\r
          <label class="form-label fw-semibold small mb-0">Atas Nama</label>\r
        </div>\r
        <div class="col-md-8">\r
          <input type="text" class="form-control form-control-sm" style="max-width:320px"\r
                 placeholder="Nama pemilik rekening"\r
                 [value]="atasNama()"\r
                 (input)="atasNama.set($any($event.target).value)">\r
        </div>\r
      </div>\r
\r
      <!-- Tombol Simpan -->\r
      <div class="row">\r
        <div class="col-md-4"></div>\r
        <div class="col-md-8">\r
          <button class="btn btn-primary px-4" style="background:#6366f1;border-color:#6366f1"\r
                  [disabled]="saving()" (click)="simpan()">\r
            @if (saving()) { <span class="spinner-border spinner-border-sm me-2"></span> }\r
            Simpan\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  }\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modal Samakan dengan Karyawan Lain \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (showSamakanModal()) {\r
    <div class="modal fade show d-block" tabindex="-1" style="background:rgba(0,0,0,.45);z-index:1055">\r
      <div class="modal-dialog modal-dialog-centered" style="max-width:480px">\r
        <div class="modal-content border-0 shadow rounded-3">\r
\r
          <!-- Header -->\r
          <div class="modal-header border-0 pb-0 align-items-start">\r
            <div>\r
              <h5 class="modal-title fw-semibold">Pilih Karyawan Acuan</h5>\r
            </div>\r
            <button type="button" class="btn btn-sm btn-outline-secondary ms-auto px-3"\r
                    (click)="closeSamakan()">\r
              \xD7Close\r
            </button>\r
          </div>\r
\r
          <!-- Body -->\r
          <div class="modal-body pt-2">\r
            <p class="text-muted small mb-3">\r
              Samakan pengaturan gaji dasar\r
              <strong>{{ karyawan()?.namaLengkap ?? 'karyawan ini' }}</strong> dengan:\r
            </p>\r
\r
            <!-- Search + Select -->\r
            <label class="form-label small fw-semibold">Pilih Karyawan</label>\r
            <input type="text" class="form-control form-control-sm mb-2"\r
                   placeholder="Cari nama karyawan..."\r
                   [value]="samakanSearch()"\r
                   (input)="samakanSearch.set($any($event.target).value)">\r
\r
            <select class="form-select form-select-sm" size="6" style="min-height:160px"\r
                    [value]="samakanTargetId()"\r
                    (change)="samakanTargetId.set(+$any($event.target).value)">\r
              <option value="">-- Pilih Karyawan --</option>\r
              @for (k of filteredKaryawanList(); track k.id) {\r
                @if (k.id !== karyawanId) {\r
                  <option [value]="k.id">{{ k.namaLengkap }}</option>\r
                }\r
              }\r
            </select>\r
\r
            @if (samakanError()) {\r
              <div class="alert alert-danger py-2 mt-2 small">{{ samakanError() }}</div>\r
            }\r
            @if (samakanSuccess()) {\r
              <div class="alert alert-success py-2 mt-2 small">\r
                <i class="bx bx-check-circle me-1"></i>Data gaji berhasil disalin.\r
              </div>\r
            }\r
          </div>\r
\r
          <!-- Footer -->\r
          <div class="modal-footer border-0 pt-0">\r
            <button class="btn btn-outline-secondary btn-sm px-4" (click)="closeSamakan()">\r
              Batal\r
            </button>\r
            <button class="btn btn-primary btn-sm px-4"\r
                    style="background:#6366f1;border-color:#6366f1"\r
                    [disabled]="!samakanTargetId() || samakanLoading()"\r
                    (click)="submitSamakan()">\r
              @if (samakanLoading()) {\r
                <span class="spinner-border spinner-border-sm me-1"></span>\r
              }\r
              Samakan\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
</app-layout>\r
`, styles: ["/* src/app/features/karyawan/karyawan-payroll/karyawan-payroll.component.scss */\n.border-bottom.border-3 {\n  border-bottom-width: 3px !important;\n}\n/*# sourceMappingURL=karyawan-payroll.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanPayrollComponent, { className: "KaryawanPayrollComponent", filePath: "src/app/features/karyawan/karyawan-payroll/karyawan-payroll.component.ts", lineNumber: 20 });
})();
export {
  KaryawanPayrollComponent
};
//# sourceMappingURL=chunk-NG24RHTZ.js.map
