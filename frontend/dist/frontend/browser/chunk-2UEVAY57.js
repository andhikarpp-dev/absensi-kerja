import {
  AbsensiService
} from "./chunk-ZRLBCAEX.js";
import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
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
  CommonModule,
  DecimalPipe,
  HttpClient,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  output,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
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
import "./chunk-WDMUDEB6.js";

// src/app/features/kehadiran/ringkasan/ekspor-ringkasan-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function EksporRingkasanModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error(), " ");
  }
}
function EksporRingkasanModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.sukses(), " ");
  }
}
function EksporRingkasanModalComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275property("value", d_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.namaDivisi);
  }
}
function EksporRingkasanModalComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275property("value", f_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.label);
  }
}
function EksporRingkasanModalComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
    \u0275\u0275text(1, "Memproses... ");
  }
}
function EksporRingkasanModalComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Proses ");
  }
}
var EksporRingkasanModalComponent = class _EksporRingkasanModalComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.divisiSvc = inject(DivisiService);
    this.defaultDari = input("", ...ngDevMode ? [{ debugName: "defaultDari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.defaultSampai = input("", ...ngDevMode ? [{ debugName: "defaultSampai" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tutup = output();
    this.dari = new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1).toISOString().substring(0, 10);
    this.sampai = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.divisiId = "";
    this.email = "";
    this.format = "LENGKAP_DETAIL_TANGGAL";
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sukses = signal("", ...ngDevMode ? [{ debugName: "sukses" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formatList = [
      { value: "LENGKAP_DETAIL_TANGGAL", label: "Lengkap dengan detail tanggal" },
      { value: "LENGKAP_TANPA_DETAIL_TANGGAL", label: "Lengkap tanpa detail tanggal" },
      { value: "HANYA_DETAIL_TANGGAL", label: "Hanya detail tanggal" }
    ];
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
  }
  ngOnInit() {
    if (this.defaultDari())
      this.dari = this.defaultDari();
    if (this.defaultSampai())
      this.sampai = this.defaultSampai();
  }
  proses() {
    this.error.set("");
    this.sukses.set("");
    if (!this.dari || !this.sampai) {
      this.error.set("Tanggal dari dan sampai wajib diisi.");
      return;
    }
    if (!this.email.trim()) {
      this.error.set("Email tujuan wajib diisi.");
      return;
    }
    const diffMs = new Date(this.sampai).getTime() - new Date(this.dari).getTime();
    const diffDays = diffMs / (1e3 * 60 * 60 * 24);
    if (diffDays > 730) {
      this.error.set("Rentang waktu maksimal 2 tahun.");
      return;
    }
    this.loading.set(true);
    const params = new URLSearchParams({
      dari: this.dari,
      sampai: this.sampai,
      email: this.email.trim(),
      format: this.format
    });
    if (this.divisiId)
      params.set("divisiId", this.divisiId);
    this.http.post(`${environment.apiUrl}/absensi/admin/ekspor/ringkasan?${params.toString()}`, {}).subscribe({
      next: () => {
        this.loading.set(false);
        this.sukses.set("Permintaan ekspor berhasil dikirim. File akan dikirim ke email Anda dalam beberapa menit.");
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e?.error?.message ?? "Gagal memproses ekspor. Silakan coba lagi.");
      }
    });
  }
  static {
    this.\u0275fac = function EksporRingkasanModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EksporRingkasanModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EksporRingkasanModalComponent, selectors: [["app-ekspor-ringkasan-modal"]], inputs: { defaultDari: [1, "defaultDari"], defaultSampai: [1, "defaultSampai"] }, outputs: { tutup: "tutup" }, decls: 58, vars: 9, consts: [[1, "modal-backdrop", "fade", "show", 2, "z-index", "1040", 3, "click"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "z-index", "1050"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "520px"], [1, "modal-content", "border-0", "shadow-lg"], [1, "modal-header", "border-bottom", "py-3", "px-4"], [1, "modal-title", "fw-bold", "mb-0"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4", "py-4"], [1, "alert", "alert-danger", "py-2", "small", "mb-3"], [1, "alert", "alert-success", "py-2", "small", "mb-3"], [1, "mb-3", "row", "align-items-center"], [1, "col-sm-4", "col-form-label", "col-form-label-sm", "fw-semibold"], [1, "text-danger"], [1, "col-sm-8"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "date", 1, "form-control", "form-control-sm", 2, "flex", "1", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "form-text", "text-muted", "mt-1"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "mb-3", "row", "align-items-start"], ["type", "email", "placeholder", "contoh@email.com", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-text", "text-muted"], [1, "rounded", "p-3", "mt-2", 2, "background", "linear-gradient(135deg,#6c63ff,#8b85ff)", "color", "#fff", "font-size", ".82rem"], [1, "bx", "bx-info-circle", "me-1"], [1, "modal-footer", "border-top", "px-4", "py-3", "d-flex", "gap-2"], [1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], [1, "btn", "btn-outline-secondary", "px-4", 3, "click"], [1, "bx", "bx-error-circle", "me-1"], [1, "bx", "bx-check-circle", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function EksporRingkasanModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function EksporRingkasanModalComponent_Template_div_click_0_listener() {
          return ctx.tutup.emit();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
        \u0275\u0275text(6, "Ekspor Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function EksporRingkasanModalComponent_Template_button_click_7_listener() {
          return ctx.tutup.emit();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275conditionalCreate(9, EksporRingkasanModalComponent_Conditional_9_Template, 3, 1, "div", 8);
        \u0275\u0275conditionalCreate(10, EksporRingkasanModalComponent_Conditional_10_Template, 3, 1, "div", 9);
        \u0275\u0275elementStart(11, "div", 10)(12, "label", 11);
        \u0275\u0275text(13, " Tanggal ");
        \u0275\u0275elementStart(14, "span", 12);
        \u0275\u0275text(15, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EksporRingkasanModalComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dari, $event) || (ctx.dari = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 16);
        \u0275\u0275text(20, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function EksporRingkasanModalComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sampai, $event) || (ctx.sampai = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 17);
        \u0275\u0275text(23, "Rentang waktu maksimal 2 tahun.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 10)(25, "label", 11);
        \u0275\u0275text(26, "Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 13)(28, "select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EksporRingkasanModalComponent_Template_select_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.divisiId, $event) || (ctx.divisiId = $event);
          return $event;
        });
        \u0275\u0275elementStart(29, "option", 19);
        \u0275\u0275text(30, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(31, EksporRingkasanModalComponent_For_32_Template, 2, 2, "option", 20, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 21)(34, "label", 11);
        \u0275\u0275text(35, " Kirimkan File ke Email ");
        \u0275\u0275elementStart(36, "span", 12);
        \u0275\u0275text(37, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 13)(39, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function EksporRingkasanModalComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 23);
        \u0275\u0275text(41, "Pisah email dengan koma jika lebih dari satu.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 10)(43, "label", 11);
        \u0275\u0275text(44, "Format");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 13)(46, "select", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EksporRingkasanModalComponent_Template_select_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.format, $event) || (ctx.format = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(47, EksporRingkasanModalComponent_For_48_Template, 2, 2, "option", 20, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 24);
        \u0275\u0275element(50, "i", 25);
        \u0275\u0275text(51, " Waktu yang dibutuhkan untuk menerima email hasil ekspor excel maksimal 20 menit, tergantung banyaknya data yang dikumpulkan. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 26)(53, "button", 27);
        \u0275\u0275listener("click", function EksporRingkasanModalComponent_Template_button_click_53_listener() {
          return ctx.proses();
        });
        \u0275\u0275conditionalCreate(54, EksporRingkasanModalComponent_Conditional_54_Template, 2, 0)(55, EksporRingkasanModalComponent_Conditional_55_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 28);
        \u0275\u0275listener("click", function EksporRingkasanModalComponent_Template_button_click_56_listener() {
          return ctx.tutup.emit();
        });
        \u0275\u0275text(57, "Tutup");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.error() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sukses() ? 10 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.dari);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.sampai);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.divisiId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.format);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.formatList);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 54 : 55);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EksporRingkasanModalComponent, [{
    type: Component,
    args: [{
      selector: "app-ekspor-ringkasan-modal",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <!-- Backdrop -->
    <div class="modal-backdrop fade show" style="z-index:1040" (click)="tutup.emit()"></div>

    <!-- Modal -->
    <div class="modal fade show d-block" style="z-index:1050" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered" style="max-width:520px">
        <div class="modal-content border-0 shadow-lg">

          <!-- Header -->
          <div class="modal-header border-bottom py-3 px-4">
            <h6 class="modal-title fw-bold mb-0">Ekspor Excel</h6>
            <button type="button" class="btn-close" (click)="tutup.emit()"></button>
          </div>

          <!-- Body -->
          <div class="modal-body px-4 py-4">

            <!-- Error -->
            @if (error()) {
              <div class="alert alert-danger py-2 small mb-3">
                <i class="bx bx-error-circle me-1"></i>{{ error() }}
              </div>
            }

            <!-- Sukses -->
            @if (sukses()) {
              <div class="alert alert-success py-2 small mb-3">
                <i class="bx bx-check-circle me-1"></i>{{ sukses() }}
              </div>
            }

            <!-- Tanggal -->
            <div class="mb-3 row align-items-center">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">
                Tanggal <span class="text-danger">*</span>
              </label>
              <div class="col-sm-8">
                <div class="d-flex align-items-center gap-2">
                  <input type="date" class="form-control form-control-sm"
                         [(ngModel)]="dari" style="flex:1" />
                  <span class="text-muted">-</span>
                  <input type="date" class="form-control form-control-sm"
                         [(ngModel)]="sampai" style="flex:1" />
                </div>
                <div class="form-text text-muted mt-1">Rentang waktu maksimal 2 tahun.</div>
              </div>
            </div>

            <!-- Divisi -->
            <div class="mb-3 row align-items-center">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">Divisi</label>
              <div class="col-sm-8">
                <select class="form-select form-select-sm" [(ngModel)]="divisiId">
                  <option value="">--Divisi--</option>
                  @for (d of divisiList(); track d.id) {
                    <option [value]="d.id">{{ d.namaDivisi }}</option>
                  }
                </select>
              </div>
            </div>

            <!-- Email -->
            <div class="mb-3 row align-items-start">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">
                Kirimkan File ke Email <span class="text-danger">*</span>
              </label>
              <div class="col-sm-8">
                <input type="email" class="form-control form-control-sm"
                       [(ngModel)]="email"
                       placeholder="contoh@email.com" />
                <div class="form-text text-muted">Pisah email dengan koma jika lebih dari satu.</div>
              </div>
            </div>

            <!-- Format -->
            <div class="mb-3 row align-items-center">
              <label class="col-sm-4 col-form-label col-form-label-sm fw-semibold">Format</label>
              <div class="col-sm-8">
                <select class="form-select form-select-sm" [(ngModel)]="format">
                  @for (f of formatList; track f.value) {
                    <option [value]="f.value">{{ f.label }}</option>
                  }
                </select>
              </div>
            </div>

            <!-- Info -->
            <div class="rounded p-3 mt-2"
                 style="background:linear-gradient(135deg,#6c63ff,#8b85ff);color:#fff;font-size:.82rem">
              <i class="bx bx-info-circle me-1"></i>
              Waktu yang dibutuhkan untuk menerima email hasil ekspor excel maksimal 20 menit,
              tergantung banyaknya data yang dikumpulkan.
            </div>

          </div>

          <!-- Footer -->
          <div class="modal-footer border-top px-4 py-3 d-flex gap-2">
            <button class="btn btn-primary px-4" (click)="proses()" [disabled]="loading()">
              @if (loading()) {
                <span class="spinner-border spinner-border-sm me-1"></span>Memproses...
              } @else {
                Proses
              }
            </button>
            <button class="btn btn-outline-secondary px-4" (click)="tutup.emit()">Tutup</button>
          </div>

        </div>
      </div>
    </div>
  `
    }]
  }], () => [], { defaultDari: [{ type: Input, args: [{ isSignal: true, alias: "defaultDari", required: false }] }], defaultSampai: [{ type: Input, args: [{ isSignal: true, alias: "defaultSampai", required: false }] }], tutup: [{ type: Output, args: ["tutup"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EksporRingkasanModalComponent, { className: "EksporRingkasanModalComponent", filePath: "src/app/features/kehadiran/ringkasan/ekspor-ringkasan-modal.component.ts", lineNumber: 132 });
})();

// src/app/features/kehadiran/ringkasan/ringkasan-kehadiran.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.karyawanId;
function RingkasanKehadiranComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.namaDivisi);
  }
}
function RingkasanKehadiranComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function RingkasanKehadiranComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
}
function RingkasanKehadiranComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RingkasanKehadiranComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function RingkasanKehadiranComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "span", 38);
    \u0275\u0275text(2, "Memuat data... ");
    \u0275\u0275elementEnd();
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", r_r5.namaJabatan, " ");
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" | ", r_r5.namaDivisi, " ");
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53)(2, "div", 14);
    \u0275\u0275conditionalCreate(3, RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_3_Template, 1, 1, "img", 54)(4, RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_4_Template, 2, 0, "div", 55);
    \u0275\u0275elementStart(5, "div")(6, "div", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 57);
    \u0275\u0275conditionalCreate(9, RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, RingkasanKehadiranComponent_Conditional_53_For_75_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 45)(16, "span", 58);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 45)(19, "span", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 45)(22, "span", 58);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 45)(25, "span", 58);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 45)(28, "span", 59);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td", 60);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 45);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td", 45);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 45)(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td", 45);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 45);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 60);
    \u0275\u0275text(46, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td", 60);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 45);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td", 45);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td", 60);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td", 45);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td", 60);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 45);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td", 45);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td", 45);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td", 45);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td", 45);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 45);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.fotoUrl(r_r5.fotoProfil)) ? 3 : 4, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r5.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.namaJabatan ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.namaDivisi ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.namaPolaKerja || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.ringkasan.totalHariJadwalKerja);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r5.ringkasan.totalHariKehadiran, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r5.ringkasan.totalHariTidakMasuk, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r5.ringkasan.totalHariCuti, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r5.ringkasan.totalHariIzin, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", r_r5.ringkasan.persentaseKehadiran < 80)("text-success", r_r5.ringkasan.persentaseKehadiran >= 100);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 37, r_r5.ringkasan.persentaseKehadiran, "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r5.ringkasan.targetKehadiranJabatan != null ? r_r5.ringkasan.targetKehadiranJabatan : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitJadwalKerja));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitKerja));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", r_r5.ringkasan.persentaseCapaianJamKerja < 80)("text-success", r_r5.ringkasan.persentaseCapaianJamKerja >= 100);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 40, r_r5.ringkasan.persentaseCapaianJamKerja, "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitIstirahat));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitLembur));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r5.ringkasan.totalHariOpenshift);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitTerlambat));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.ringkasan.totalHariTerlambat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatRp(r_r5.ringkasan.totalDendaKeterlambatan));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.ringkasan.totalHariTerlambatPresensiKeluar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatRp(r_r5.ringkasan.totalDendaTerlambatPresensiKeluar));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitToleransi));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.ringkasan.totalHariToleransi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitIzinJam));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.totalMenitIzinJamBelumDiganti));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.ringkasan.totalHariPresensiKeluarOtomatis);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.menitKeJam(r_r5.ringkasan.menitJamKerjaTidakTerpenuhi));
  }
}
function RingkasanKehadiranComponent_Conditional_53_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275element(2, "i", 63);
    \u0275\u0275text(3, " Tidak ada data pada rentang tanggal ini. ");
    \u0275\u0275elementEnd()();
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_86_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 64)(1, "span", 66);
    \u0275\u0275text(2, "\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_86_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "button", 67);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_For_86_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.page.set(+p_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.page() === p_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7);
  }
}
function RingkasanKehadiranComponent_Conditional_53_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RingkasanKehadiranComponent_Conditional_53_For_86_Conditional_0_Template, 3, 0, "li", 64)(1, RingkasanKehadiranComponent_Conditional_53_For_86_Conditional_1_Template, 3, 3, "li", 65);
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275conditional(p_r7 === "..." ? 0 : 1);
  }
}
function RingkasanKehadiranComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 40)(2, "thead", 41)(3, "tr")(4, "th", 42);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("namaKaryawan"));
    });
    \u0275\u0275text(5, " Karyawan ");
    \u0275\u0275element(6, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 43);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("namaPolaKerja"));
    });
    \u0275\u0275text(8, " Pola Kerja ");
    \u0275\u0275element(9, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalHariJadwalKerja"));
    });
    \u0275\u0275text(11, " Total Hari Jadwal Kerja ");
    \u0275\u0275element(12, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalHariKehadiran"));
    });
    \u0275\u0275text(14, " Total Hari Kehadiran ");
    \u0275\u0275element(15, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalHariTidakMasuk"));
    });
    \u0275\u0275text(17, " Total Hari Tidak Masuk ");
    \u0275\u0275element(18, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalHariCuti"));
    });
    \u0275\u0275text(20, " Total Hari Cuti ");
    \u0275\u0275element(21, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalHariIzin"));
    });
    \u0275\u0275text(23, " Total Hari Izin ");
    \u0275\u0275element(24, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("persentaseKehadiran"));
    });
    \u0275\u0275text(26, " Persentase Kehadiran ");
    \u0275\u0275element(27, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 45);
    \u0275\u0275text(29, "Target Kehadiran Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalMenitJadwalKerja"));
    });
    \u0275\u0275text(31, " Total Jam Jadwal Kerja ");
    \u0275\u0275element(32, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalMenitKerja"));
    });
    \u0275\u0275text(34, " Total Jam Kerja ");
    \u0275\u0275element(35, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("persentaseCapaianJamKerja"));
    });
    \u0275\u0275text(37, " Persentase Capaian Jam Kerja ");
    \u0275\u0275element(38, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalMenitIstirahat"));
    });
    \u0275\u0275text(40, " Total Jam Istirahat ");
    \u0275\u0275element(41, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalMenitLembur"));
    });
    \u0275\u0275text(43, " Total Jam Lembur ");
    \u0275\u0275element(44, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 45);
    \u0275\u0275text(46, "Total Jam Openshift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 45);
    \u0275\u0275text(48, "Total Hari Openshift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalMenitTerlambat"));
    });
    \u0275\u0275text(50, " Total Jam Terlambat ");
    \u0275\u0275element(51, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 44);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_th_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("totalHariTerlambat"));
    });
    \u0275\u0275text(53, " Total Hari Terlambat ");
    \u0275\u0275element(54, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 45);
    \u0275\u0275text(56, "Total Denda Keterlambatan (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 45);
    \u0275\u0275text(58, "Total Hari Terlambat Presensi Keluar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 45);
    \u0275\u0275text(60, "Total Denda Terlambat Presensi Keluar (Rp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th", 45);
    \u0275\u0275text(62, "Total Jam Toleransi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th", 45);
    \u0275\u0275text(64, "Total Hari Toleransi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th", 45);
    \u0275\u0275text(66, "Total Jam Izin Jam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 45);
    \u0275\u0275text(68, "Total Jam Izin Jam Belum Diganti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th", 45);
    \u0275\u0275text(70, "Total Hari Presensi Keluar Otomatis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th", 45);
    \u0275\u0275text(72, "Jam Kerja Tidak Terpenuhi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "tbody");
    \u0275\u0275repeaterCreate(74, RingkasanKehadiranComponent_Conditional_53_For_75_Template, 71, 43, "tr", null, _forTrack12);
    \u0275\u0275conditionalCreate(76, RingkasanKehadiranComponent_Conditional_53_Conditional_76_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 46)(78, "div", 47);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "nav")(81, "ul", 48)(82, "li", 49)(83, "button", 50);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.page() - 1));
    });
    \u0275\u0275element(84, "i", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(85, RingkasanKehadiranComponent_Conditional_53_For_86_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(87, "li", 49)(88, "button", 50);
    \u0275\u0275listener("click", function RingkasanKehadiranComponent_Conditional_53_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.page() + 1));
    });
    \u0275\u0275element(89, "i", 52);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("namaKaryawan")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("namaPolaKerja")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalHariJadwalKerja")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalHariKehadiran")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalHariTidakMasuk")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalHariCuti")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalHariIzin")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("persentaseKehadiran")));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalMenitJadwalKerja")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalMenitKerja")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("persentaseCapaianJamKerja")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalMenitIstirahat")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalMenitLembur")));
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalMenitTerlambat")));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bx ", ctx_r1.sortIcon("totalHariTerlambat")));
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.paged());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.paged().length === 0 && !ctx_r1.loading() ? 76 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.info());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.page() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pagesArr());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.page() === ctx_r1.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.totalPages());
  }
}
function RingkasanKehadiranComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ekspor-ringkasan-modal", 68);
    \u0275\u0275listener("tutup", function RingkasanKehadiranComponent_Conditional_54_Template_app_ekspor_ringkasan_modal_tutup_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEkspor.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("defaultDari", ctx_r1.dari)("defaultSampai", ctx_r1.sampai);
  }
}
var RingkasanKehadiranComponent = class _RingkasanKehadiranComponent {
  constructor() {
    this.absensiSvc = inject(AbsensiService);
    this.divisiSvc = inject(DivisiService);
    this.today = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.firstOfMonth = new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1).toISOString().substring(0, 10);
    this.dari = this.firstOfMonth;
    this.sampai = this.today;
    this.divisiId = "";
    this.cari = "";
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
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
    this.showEkspor = signal(false, ...ngDevMode ? [{ debugName: "showEkspor" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = 16;
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sort = signal({ col: "namaKaryawan", dir: "asc" }, ...ngDevMode ? [{ debugName: "sort" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSizeOptions = [10, 16, 25, 50, 100];
    this.filtered = computed(() => {
      const q = this.cari.toLowerCase();
      let data = this.rows();
      if (q)
        data = data.filter((r) => r.namaKaryawan.toLowerCase().includes(q) || r.namaDivisi?.toLowerCase().includes(q));
      const { col, dir } = this.sort();
      data = [...data].sort((a, b) => {
        const va = this.sortVal(a, col);
        const vb = this.sortVal(b, col);
        const cmp = typeof va === "number" ? va - vb : String(va).localeCompare(String(vb));
        return dir === "asc" ? cmp : -cmp;
      });
      return data;
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paged = computed(() => {
      const p = Math.min(this.page(), this.totalPages());
      const start = (p - 1) * this.pageSize;
      return this.filtered().slice(start, start + this.pageSize);
    }, ...ngDevMode ? [{ debugName: "paged" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagesArr = computed(() => this.buildPages(this.page(), this.totalPages()), ...ngDevMode ? [{ debugName: "pagesArr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.info = computed(() => {
      const total = this.filtered().length;
      if (total === 0)
        return "Tidak ada data";
      const p = Math.min(this.page(), this.totalPages());
      const start = (p - 1) * this.pageSize + 1;
      const end = Math.min(p * this.pageSize, total);
      const all = this.rows().length;
      return total < all ? `Menampilkan ${start}\u2013${end} dari ${total} entri (difilter dari ${all} total entri)` : `Menampilkan ${start}\u2013${end} dari ${total} total data`;
    }, ...ngDevMode ? [{ debugName: "info" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.divisiSvc.findAll().subscribe((d) => this.divisiList.set(d));
    this.loadData();
  }
  loadData() {
    this.loading.set(true);
    this.error.set("");
    this.absensiSvc.getRingkasanSemua({
      dari: this.dari,
      sampai: this.sampai,
      divisiId: this.divisiId ? +this.divisiId : void 0
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows);
        this.page.set(1);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.error?.message ?? "Gagal memuat data");
        this.loading.set(false);
      }
    });
  }
  onCariChange() {
    this.page.set(1);
  }
  onPageSize() {
    this.page.set(1);
  }
  sortBy(col) {
    const cur = this.sort();
    this.sort.set({ col, dir: cur.col === col && cur.dir === "asc" ? "desc" : "asc" });
    this.page.set(1);
  }
  sortIcon(col) {
    const s = this.sort();
    if (s.col !== col)
      return "bx-sort";
    return s.dir === "asc" ? "bx-sort-up" : "bx-sort-down";
  }
  sortVal(r, col) {
    const s = r.ringkasan;
    switch (col) {
      case "namaKaryawan":
        return r.namaKaryawan;
      case "namaDivisi":
        return r.namaDivisi ?? "";
      case "namaPolaKerja":
        return r.namaPolaKerja ?? "";
      case "totalHariJadwalKerja":
        return s.totalHariJadwalKerja;
      case "totalHariKehadiran":
        return s.totalHariKehadiran;
      case "totalHariTidakMasuk":
        return s.totalHariTidakMasuk;
      case "totalHariCuti":
        return s.totalHariCuti;
      case "totalHariIzin":
        return s.totalHariIzin;
      case "persentaseKehadiran":
        return s.persentaseKehadiran;
      case "totalMenitJadwalKerja":
        return s.totalMenitJadwalKerja;
      case "totalMenitKerja":
        return s.totalMenitKerja;
      case "persentaseCapaianJamKerja":
        return s.persentaseCapaianJamKerja;
      case "totalMenitIstirahat":
        return s.totalMenitIstirahat;
      case "totalMenitLembur":
        return s.totalMenitLembur;
      case "totalHariTerlambat":
        return s.totalHariTerlambat;
      case "totalMenitTerlambat":
        return s.totalMenitTerlambat;
      default:
        return "";
    }
  }
  buildPages(current, total) {
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [1];
    if (current > 3)
      pages.push("...");
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++)
      pages.push(i);
    if (current < total - 2)
      pages.push("...");
    pages.push(total);
    return pages;
  }
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.apiUrl.replace("/api", "")}/${path}`;
  }
  menitKeJam(menit) {
    if (!menit || menit === 0)
      return "0";
    const j = Math.floor(menit / 60);
    const m = menit % 60;
    const s = Math.floor(menit * 60 % 60);
    if (j > 0 && m > 0 && s > 0)
      return `${j}jm ${m}mn ${s}dt`;
    if (j > 0 && m > 0)
      return `${j}jm ${m}mn`;
    if (j > 0)
      return `${j}jm`;
    if (m > 0 && s > 0)
      return `${m}mn ${s}dt`;
    return `${m}mn`;
  }
  formatRp(val) {
    if (!val)
      return "Rp 0";
    return "Rp " + val.toLocaleString("id-ID");
  }
  static {
    this.\u0275fac = function RingkasanKehadiranComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RingkasanKehadiranComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RingkasanKehadiranComponent, selectors: [["app-ringkasan-kehadiran"]], decls: 55, vars: 10, consts: [[1, "page-breadcrumb", "d-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/kehadiran/harian"], [1, "breadcrumb-item", "active"], [1, "fw-bold", "mb-4"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-0"], [1, "px-4", "py-3", "border-bottom", "d-flex", "flex-wrap", "align-items-center", "gap-3"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "date", 1, "form-control", "form-control-sm", 2, "width", "150px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "form-select", "form-select-sm", 2, "width", "180px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "input-group", "input-group-sm", 2, "width", "220px"], ["type", "text", "placeholder", "Cari...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bx", "bx-search"], [1, "btn", "btn-primary", "btn-sm", "ms-auto", "px-4", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-filter-alt", "me-1"], ["title", "Ekspor Excel", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bx", "bx-file"], ["title", "Filter lanjutan", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bx", "bx-slider-alt"], [1, "alert", "alert-danger", "mx-4", "mt-3", "py-2"], [1, "px-4", "py-2", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "border-bottom", "bg-light"], [1, "text-muted", "small", "mb-0"], [1, "form-select", "form-select-sm", 2, "width", "70px", 3, "ngModelChange", "ngModel"], [1, "text-center", "py-5", "text-muted"], [3, "defaultDari", "defaultSampai"], [1, "bx", "bx-error-circle", "me-1"], [1, "spinner-border", "text-primary", "me-2"], [1, "table-responsive"], [1, "table", "table-hover", "table-bordered", "align-middle", "mb-0", 2, "min-width", "2800px", "font-size", ".8rem"], [1, "table-light", 2, "position", "sticky", "top", "0", "z-index", "2"], [2, "min-width", "220px", "cursor", "pointer", "position", "sticky", "left", "0", "background", "#f8f9fa", "z-index", "3", 3, "click"], [2, "min-width", "160px", "cursor", "pointer", 3, "click"], [1, "text-center", 2, "cursor", "pointer", 3, "click"], [1, "text-center"], [1, "px-4", "py-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "border-top"], [1, "text-muted", "small"], [1, "pagination", "pagination-sm", "mb-0", "gap-1"], [1, "page-item"], [1, "page-link", "rounded", 3, "click", "disabled"], [1, "bx", "bx-chevron-left"], [1, "bx", "bx-chevron-right"], [2, "position", "sticky", "left", "0", "background", "#fff", "z-index", "1"], [1, "rounded-circle", "flex-shrink-0", 2, "width", "38px", "height", "38px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "38px", "height", "38px", "background", "#f3f4f6", "color", "#9ca3af"], [1, "fw-semibold", 2, "font-size", ".82rem"], [1, "text-muted", 2, "font-size", ".72rem"], [1, "text-primary", "fw-semibold", 2, "cursor", "pointer"], [1, "fw-semibold"], [1, "text-center", "text-muted"], [1, "bx", "bx-user"], ["colspan", "27", 1, "text-center", "text-muted", "py-5"], [1, "bx", "bx-calendar-x", "fs-2", "d-block", "mb-2"], [1, "page-item", "disabled"], [1, "page-item", 3, "active"], [1, "page-link"], [1, "page-link", "rounded", 3, "click"], [3, "tutup", "defaultDari", "defaultSampai"]], template: function RingkasanKehadiranComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14, "Ringkasan Kehadiran");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "h6", 10);
        \u0275\u0275text(16, "Ringkasan Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function RingkasanKehadiranComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dari, $event) || (ctx.dari = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 16);
        \u0275\u0275text(23, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function RingkasanKehadiranComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sampai, $event) || (ctx.sampai = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function RingkasanKehadiranComponent_Template_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.divisiId, $event) || (ctx.divisiId = $event);
          return $event;
        });
        \u0275\u0275elementStart(26, "option", 18);
        \u0275\u0275text(27, "--Divisi--");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, RingkasanKehadiranComponent_For_29_Template, 2, 2, "option", 19, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 20)(31, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function RingkasanKehadiranComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.cari, $event) || (ctx.cari = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RingkasanKehadiranComponent_Template_input_ngModelChange_31_listener() {
          return ctx.onCariChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 22);
        \u0275\u0275listener("click", function RingkasanKehadiranComponent_Template_button_click_32_listener() {
          return ctx.loadData();
        });
        \u0275\u0275element(33, "i", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 24);
        \u0275\u0275listener("click", function RingkasanKehadiranComponent_Template_button_click_34_listener() {
          return ctx.loadData();
        });
        \u0275\u0275conditionalCreate(35, RingkasanKehadiranComponent_Conditional_35_Template, 1, 0, "span", 25)(36, RingkasanKehadiranComponent_Conditional_36_Template, 1, 0, "i", 26);
        \u0275\u0275text(37, " Terapkan ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 27);
        \u0275\u0275listener("click", function RingkasanKehadiranComponent_Template_button_click_38_listener() {
          return ctx.showEkspor.set(true);
        });
        \u0275\u0275element(39, "i", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 29);
        \u0275\u0275element(41, "i", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(42, RingkasanKehadiranComponent_Conditional_42_Template, 3, 1, "div", 31);
        \u0275\u0275elementStart(43, "div", 32)(44, "div", 14)(45, "label", 33);
        \u0275\u0275text(46, "Tampilkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "select", 34);
        \u0275\u0275twoWayListener("ngModelChange", function RingkasanKehadiranComponent_Template_select_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function RingkasanKehadiranComponent_Template_select_ngModelChange_47_listener() {
          return ctx.onPageSize();
        });
        \u0275\u0275repeaterCreate(48, RingkasanKehadiranComponent_For_49_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "label", 33);
        \u0275\u0275text(51, "entri");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(52, RingkasanKehadiranComponent_Conditional_52_Template, 3, 0, "div", 35)(53, RingkasanKehadiranComponent_Conditional_53_Template, 90, 53);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(54, RingkasanKehadiranComponent_Conditional_54_Template, 1, 2, "app-ekspor-ringkasan-modal", 36);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275twoWayProperty("ngModel", ctx.dari);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.sampai);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.divisiId);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.divisiList());
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.cari);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 35 : 36);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.error() ? 42 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.pageSizeOptions);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 52 : 53);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showEkspor() ? 54 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, LayoutComponent, EksporRingkasanModalComponent, DecimalPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RingkasanKehadiranComponent, [{
    type: Component,
    args: [{ selector: "app-ringkasan-kehadiran", standalone: true, imports: [CommonModule, FormsModule, RouterLink, LayoutComponent, EksporRingkasanModalComponent], template: `<app-layout>\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Kehadiran</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/kehadiran/harian">Kehadiran</a></li>\r
          <li class="breadcrumb-item active">Ringkasan Kehadiran</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <h6 class="fw-bold mb-4">Ringkasan Kehadiran</h6>\r
\r
  <div class="card border-0 shadow-sm">\r
    <div class="card-body p-0">\r
\r
      <!-- \u2500\u2500 Filter Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="px-4 py-3 border-bottom d-flex flex-wrap align-items-center gap-3">\r
        <!-- Rentang Tanggal -->\r
        <div class="d-flex align-items-center gap-2">\r
          <input type="date" class="form-control form-control-sm" style="width:150px"\r
                 [(ngModel)]="dari" />\r
          <span class="text-muted">-</span>\r
          <input type="date" class="form-control form-control-sm" style="width:150px"\r
                 [(ngModel)]="sampai" />\r
        </div>\r
        <!-- Divisi -->\r
        <select class="form-select form-select-sm" style="width:180px" [(ngModel)]="divisiId">\r
          <option value="">--Divisi--</option>\r
          @for (d of divisiList(); track d.id) {\r
            <option [value]="d.id">{{ d.namaDivisi }}</option>\r
          }\r
        </select>\r
        <!-- Cari -->\r
        <div class="input-group input-group-sm" style="width:220px">\r
          <input type="text" class="form-control" placeholder="Cari..."\r
                 [(ngModel)]="cari" (ngModelChange)="onCariChange()" />\r
          <button class="btn btn-outline-secondary" (click)="loadData()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
        <!-- Apply -->\r
        <button class="btn btn-primary btn-sm ms-auto px-4" (click)="loadData()"\r
                [disabled]="loading()">\r
          @if (loading()) {\r
            <span class="spinner-border spinner-border-sm me-1"></span>\r
          } @else {\r
            <i class="bx bx-filter-alt me-1"></i>\r
          }\r
          Terapkan\r
        </button>\r
        <!-- Ikon ekspor -->\r
        <button class="btn btn-outline-secondary btn-sm" title="Ekspor Excel"\r
                (click)="showEkspor.set(true)">\r
          <i class="bx bx-file"></i>\r
        </button>\r
        <button class="btn btn-outline-secondary btn-sm" title="Filter lanjutan">\r
          <i class="bx bx-slider-alt"></i>\r
        </button>\r
      </div>\r
\r
      <!-- Error -->\r
      @if (error()) {\r
        <div class="alert alert-danger mx-4 mt-3 py-2"><i class="bx bx-error-circle me-1"></i>{{ error() }}</div>\r
      }\r
\r
      <!-- \u2500\u2500 DataTable Controls \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <div class="px-4 py-2 d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom bg-light">\r
        <div class="d-flex align-items-center gap-2">\r
          <label class="text-muted small mb-0">Tampilkan</label>\r
          <select class="form-select form-select-sm" style="width:70px"\r
                  [(ngModel)]="pageSize" (ngModelChange)="onPageSize()">\r
            @for (n of pageSizeOptions; track n) {\r
              <option [value]="n">{{ n }}</option>\r
            }\r
          </select>\r
          <label class="text-muted small mb-0">entri</label>\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 Tabel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      @if (loading()) {\r
        <div class="text-center py-5 text-muted">\r
          <span class="spinner-border text-primary me-2"></span>Memuat data...\r
        </div>\r
      } @else {\r
        <div class="table-responsive">\r
          <table class="table table-hover table-bordered align-middle mb-0"\r
                 style="min-width:2800px;font-size:.8rem">\r
            <thead class="table-light" style="position:sticky;top:0;z-index:2">\r
              <tr>\r
                <th style="min-width:220px;cursor:pointer;position:sticky;left:0;background:#f8f9fa;z-index:3"\r
                    (click)="sortBy('namaKaryawan')">\r
                  Karyawan <i class="bx {{ sortIcon('namaKaryawan') }}"></i>\r
                </th>\r
                <th style="min-width:160px;cursor:pointer" (click)="sortBy('namaPolaKerja')">\r
                  Pola Kerja <i class="bx {{ sortIcon('namaPolaKerja') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalHariJadwalKerja')">\r
                  Total Hari Jadwal Kerja <i class="bx {{ sortIcon('totalHariJadwalKerja') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalHariKehadiran')">\r
                  Total Hari Kehadiran <i class="bx {{ sortIcon('totalHariKehadiran') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalHariTidakMasuk')">\r
                  Total Hari Tidak Masuk <i class="bx {{ sortIcon('totalHariTidakMasuk') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalHariCuti')">\r
                  Total Hari Cuti <i class="bx {{ sortIcon('totalHariCuti') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalHariIzin')">\r
                  Total Hari Izin <i class="bx {{ sortIcon('totalHariIzin') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('persentaseKehadiran')">\r
                  Persentase Kehadiran <i class="bx {{ sortIcon('persentaseKehadiran') }}"></i>\r
                </th>\r
                <th class="text-center">Target Kehadiran Jabatan</th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalMenitJadwalKerja')">\r
                  Total Jam Jadwal Kerja <i class="bx {{ sortIcon('totalMenitJadwalKerja') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalMenitKerja')">\r
                  Total Jam Kerja <i class="bx {{ sortIcon('totalMenitKerja') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('persentaseCapaianJamKerja')">\r
                  Persentase Capaian Jam Kerja <i class="bx {{ sortIcon('persentaseCapaianJamKerja') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalMenitIstirahat')">\r
                  Total Jam Istirahat <i class="bx {{ sortIcon('totalMenitIstirahat') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalMenitLembur')">\r
                  Total Jam Lembur <i class="bx {{ sortIcon('totalMenitLembur') }}"></i>\r
                </th>\r
                <th class="text-center">Total Jam Openshift</th>\r
                <th class="text-center">Total Hari Openshift</th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalMenitTerlambat')">\r
                  Total Jam Terlambat <i class="bx {{ sortIcon('totalMenitTerlambat') }}"></i>\r
                </th>\r
                <th class="text-center" style="cursor:pointer" (click)="sortBy('totalHariTerlambat')">\r
                  Total Hari Terlambat <i class="bx {{ sortIcon('totalHariTerlambat') }}"></i>\r
                </th>\r
                <th class="text-center">Total Denda Keterlambatan (Rp)</th>\r
                <th class="text-center">Total Hari Terlambat Presensi Keluar</th>\r
                <th class="text-center">Total Denda Terlambat Presensi Keluar (Rp)</th>\r
                <th class="text-center">Total Jam Toleransi</th>\r
                <th class="text-center">Total Hari Toleransi</th>\r
                <th class="text-center">Total Jam Izin Jam</th>\r
                <th class="text-center">Total Jam Izin Jam Belum Diganti</th>\r
                <th class="text-center">Total Hari Presensi Keluar Otomatis</th>\r
                <th class="text-center">Jam Kerja Tidak Terpenuhi</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (r of paged(); track r.karyawanId) {\r
                <tr>\r
                  <!-- Karyawan (sticky) -->\r
                  <td style="position:sticky;left:0;background:#fff;z-index:1">\r
                    <div class="d-flex align-items-center gap-2">\r
                      @if (fotoUrl(r.fotoProfil); as url) {\r
                        <img [src]="url" class="rounded-circle flex-shrink-0"\r
                             style="width:38px;height:38px;object-fit:cover;border:2px solid #e9ecef" />\r
                      } @else {\r
                        <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                             style="width:38px;height:38px;background:#f3f4f6;color:#9ca3af">\r
                          <i class="bx bx-user"></i>\r
                        </div>\r
                      }\r
                      <div>\r
                        <div class="fw-semibold" style="font-size:.82rem">{{ r.namaKaryawan }}</div>\r
                        <div class="text-muted" style="font-size:.72rem">\r
                          @if (r.namaJabatan) { {{ r.namaJabatan }} }\r
                          @if (r.namaDivisi)  { | {{ r.namaDivisi }} }\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </td>\r
                  <!-- Pola Kerja -->\r
                  <td class="text-muted">{{ r.namaPolaKerja || '-' }}</td>\r
                  <!-- Numerik -->\r
                  <td class="text-center">{{ r.ringkasan.totalHariJadwalKerja }}</td>\r
                  <td class="text-center">\r
                    <span class="text-primary fw-semibold" style="cursor:pointer">\r
                      {{ r.ringkasan.totalHariKehadiran }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center">\r
                    <span class="text-primary fw-semibold" style="cursor:pointer">\r
                      {{ r.ringkasan.totalHariTidakMasuk }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center">\r
                    <span class="text-primary fw-semibold" style="cursor:pointer">\r
                      {{ r.ringkasan.totalHariCuti }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center">\r
                    <span class="text-primary fw-semibold" style="cursor:pointer">\r
                      {{ r.ringkasan.totalHariIzin }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center">\r
                    <span [class.text-danger]="r.ringkasan.persentaseKehadiran < 80"\r
                          [class.text-success]="r.ringkasan.persentaseKehadiran >= 100"\r
                          class="fw-semibold">\r
                      {{ r.ringkasan.persentaseKehadiran | number:'1.0-2' }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center text-muted">\r
                    {{ r.ringkasan.targetKehadiranJabatan != null ? r.ringkasan.targetKehadiranJabatan : '' }}\r
                  </td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitJadwalKerja) }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitKerja) }}</td>\r
                  <td class="text-center">\r
                    <span [class.text-danger]="r.ringkasan.persentaseCapaianJamKerja < 80"\r
                          [class.text-success]="r.ringkasan.persentaseCapaianJamKerja >= 100">\r
                      {{ r.ringkasan.persentaseCapaianJamKerja | number:'1.0-2' }}\r
                    </span>\r
                  </td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitIstirahat) }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitLembur) }}</td>\r
                  <td class="text-center text-muted">0</td>\r
                  <td class="text-center text-muted">{{ r.ringkasan.totalHariOpenshift }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitTerlambat) }}</td>\r
                  <td class="text-center">{{ r.ringkasan.totalHariTerlambat }}</td>\r
                  <td class="text-center text-muted">{{ formatRp(r.ringkasan.totalDendaKeterlambatan) }}</td>\r
                  <td class="text-center">{{ r.ringkasan.totalHariTerlambatPresensiKeluar }}</td>\r
                  <td class="text-center text-muted">{{ formatRp(r.ringkasan.totalDendaTerlambatPresensiKeluar) }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitToleransi) }}</td>\r
                  <td class="text-center">{{ r.ringkasan.totalHariToleransi }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitIzinJam) }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.totalMenitIzinJamBelumDiganti) }}</td>\r
                  <td class="text-center">{{ r.ringkasan.totalHariPresensiKeluarOtomatis }}</td>\r
                  <td class="text-center">{{ menitKeJam(r.ringkasan.menitJamKerjaTidakTerpenuhi) }}</td>\r
                </tr>\r
              }\r
              @if (paged().length === 0 && !loading()) {\r
                <tr>\r
                  <td colspan="27" class="text-center text-muted py-5">\r
                    <i class="bx bx-calendar-x fs-2 d-block mb-2"></i>\r
                    Tidak ada data pada rentang tanggal ini.\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <!-- \u2500\u2500 Footer Pagination \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="px-4 py-3 d-flex align-items-center justify-content-between flex-wrap gap-2 border-top">\r
          <div class="text-muted small">{{ info() }}</div>\r
          <nav>\r
            <ul class="pagination pagination-sm mb-0 gap-1">\r
              <li class="page-item" [class.disabled]="page() === 1">\r
                <button class="page-link rounded" (click)="page.set(page() - 1)"\r
                        [disabled]="page() === 1">\r
                  <i class="bx bx-chevron-left"></i>\r
                </button>\r
              </li>\r
              @for (p of pagesArr(); track $index) {\r
                @if (p === '...') {\r
                  <li class="page-item disabled"><span class="page-link">\u2026</span></li>\r
                } @else {\r
                  <li class="page-item" [class.active]="page() === p">\r
                    <button class="page-link rounded" (click)="page.set(+p)">{{ p }}</button>\r
                  </li>\r
                }\r
              }\r
              <li class="page-item" [class.disabled]="page() === totalPages()">\r
                <button class="page-link rounded" (click)="page.set(page() + 1)"\r
                        [disabled]="page() === totalPages()">\r
                  <i class="bx bx-chevron-right"></i>\r
                </button>\r
              </li>\r
            </ul>\r
          </nav>\r
        </div>\r
      }\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Modal Ekspor Excel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (showEkspor()) {\r
    <app-ekspor-ringkasan-modal\r
      [defaultDari]="dari"\r
      [defaultSampai]="sampai"\r
      (tutup)="showEkspor.set(false)" />\r
  }\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RingkasanKehadiranComponent, { className: "RingkasanKehadiranComponent", filePath: "src/app/features/kehadiran/ringkasan/ringkasan-kehadiran.component.ts", lineNumber: 22 });
})();
export {
  RingkasanKehadiranComponent
};
//# sourceMappingURL=chunk-2UEVAY57.js.map
