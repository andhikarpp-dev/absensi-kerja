import {
  JabatanService
} from "./chunk-D5C53HHG.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/jabatan/jabatan-form/jabatan-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function JabatanFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function JabatanFormComponent_Conditional_22_Template_button_click_3_listener() {
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
function JabatanFormComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3, "Memuat...");
    \u0275\u0275elementEnd()()();
  }
}
function JabatanFormComponent_Conditional_24_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Nama jabatan wajib diisi.");
    \u0275\u0275elementEnd();
  }
}
function JabatanFormComponent_Conditional_24_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Maksimal 100 karakter.");
    \u0275\u0275elementEnd();
  }
}
function JabatanFormComponent_Conditional_24_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r4.namaJabatan);
  }
}
function JabatanFormComponent_Conditional_24_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2, ' Belum ada target kehadiran. Klik "Tambah Lokasi" untuk menambahkan. ');
    \u0275\u0275elementEnd();
  }
}
function JabatanFormComponent_Conditional_24_Conditional_35_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Nama lokasi wajib diisi.");
    \u0275\u0275elementEnd();
  }
}
function JabatanFormComponent_Conditional_24_Conditional_35_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, "Min 0%");
    \u0275\u0275elementEnd();
  }
}
function JabatanFormComponent_Conditional_24_Conditional_35_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, "Maks 100%");
    \u0275\u0275elementEnd();
  }
}
function JabatanFormComponent_Conditional_24_Conditional_35_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 17)(1, "td");
    \u0275\u0275element(2, "input", 52);
    \u0275\u0275conditionalCreate(3, JabatanFormComponent_Conditional_24_Conditional_35_For_11_Conditional_3_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 53);
    \u0275\u0275element(6, "input", 54);
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8, "%");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, JabatanFormComponent_Conditional_24_Conditional_35_For_11_Conditional_9_Template, 2, 0, "div", 56);
    \u0275\u0275conditionalCreate(10, JabatanFormComponent_Conditional_24_Conditional_35_For_11_Conditional_10_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 57)(12, "button", 58);
    \u0275\u0275listener("click", function JabatanFormComponent_Conditional_24_Conditional_35_For_11_Template_button_click_12_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTarget($index_r6));
    });
    \u0275\u0275element(13, "i", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_16_0;
    let tmp_17_0;
    const $index_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.targetGroup($index_r6));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.targetGroup($index_r6).get("namaLokasi").invalid && ctx_r1.targetGroup($index_r6).get("namaLokasi").touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_14_0 = ctx_r1.targetGroup($index_r6).get("namaLokasi").errors) == null ? null : tmp_14_0["required"]) && ctx_r1.targetGroup($index_r6).get("namaLokasi").touched ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.targetGroup($index_r6).get("targetPersen").invalid && ctx_r1.targetGroup($index_r6).get("targetPersen").touched);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_16_0 = ctx_r1.targetGroup($index_r6).get("targetPersen").errors) == null ? null : tmp_16_0["min"]) && ctx_r1.targetGroup($index_r6).get("targetPersen").touched ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = ctx_r1.targetGroup($index_r6).get("targetPersen").errors) == null ? null : tmp_17_0["max"]) && ctx_r1.targetGroup($index_r6).get("targetPersen").touched ? 10 : -1);
  }
}
function JabatanFormComponent_Conditional_24_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 47)(2, "thead", 48)(3, "tr")(4, "th", 49);
    \u0275\u0275text(5, "Nama Lokasi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 50);
    \u0275\u0275text(7, "Target (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, JabatanFormComponent_Conditional_24_Conditional_35_For_11_Template, 14, 8, "tr", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.targets.controls);
  }
}
function JabatanFormComponent_Conditional_24_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 60);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function JabatanFormComponent_Conditional_24_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 61);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEdit ? "Perbarui" : "Simpan", " ");
  }
}
function JabatanFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 22);
    \u0275\u0275listener("ngSubmit", function JabatanFormComponent_Conditional_24_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "i", 25);
    \u0275\u0275text(4, "Identitas Jabatan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "div", 27)(7, "div", 28)(8, "label", 29);
    \u0275\u0275text(9, " Nama Jabatan ");
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "input", 31);
    \u0275\u0275conditionalCreate(13, JabatanFormComponent_Conditional_24_Conditional_13_Template, 2, 0, "div", 32);
    \u0275\u0275conditionalCreate(14, JabatanFormComponent_Conditional_24_Conditional_14_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "label", 29);
    \u0275\u0275text(17, "Induk Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 33)(19, "option", 34);
    \u0275\u0275text(20, "\u2014 Tidak ada (jabatan root) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, JabatanFormComponent_Conditional_24_For_22_Template, 2, 2, "option", 34, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 35);
    \u0275\u0275text(24, "Kosongkan jika jabatan ini adalah yang paling atas.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 23)(26, "div", 36)(27, "span");
    \u0275\u0275element(28, "i", 37);
    \u0275\u0275text(29, "Target Kehadiran");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 38);
    \u0275\u0275listener("click", function JabatanFormComponent_Conditional_24_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTarget());
    });
    \u0275\u0275element(31, "i", 39);
    \u0275\u0275text(32, " Tambah Lokasi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 26);
    \u0275\u0275conditionalCreate(34, JabatanFormComponent_Conditional_24_Conditional_34_Template, 3, 0, "p", 40)(35, JabatanFormComponent_Conditional_24_Conditional_35_Template, 12, 0, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 42)(37, "button", 43);
    \u0275\u0275element(38, "i", 44);
    \u0275\u0275text(39, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 45);
    \u0275\u0275conditionalCreate(41, JabatanFormComponent_Conditional_24_Conditional_41_Template, 2, 0)(42, JabatanFormComponent_Conditional_24_Conditional_42_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["namaJabatan"].invalid && ctx_r1.f["namaJabatan"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.f["namaJabatan"].errors == null ? null : ctx_r1.f["namaJabatan"].errors["required"]) && ctx_r1.f["namaJabatan"].touched ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.f["namaJabatan"].errors == null ? null : ctx_r1.f["namaJabatan"].errors["maxlength"]) && ctx_r1.f["namaJabatan"].touched ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.indukOptions);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.targets.length === 0 ? 34 : 35);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 41 : 42);
  }
}
var JabatanFormComponent = class _JabatanFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.svc = inject(JabatanService);
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
    this.jabatanList = signal([], ...ngDevMode ? [{ debugName: "jabatanList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = this.fb.group({
      namaJabatan: ["", [Validators.required, Validators.maxLength(100)]],
      indukId: [null],
      targetKehadiranList: this.fb.array([])
    });
  }
  ngOnInit() {
    this.svc.findAll().subscribe({
      next: (list) => this.jabatanList.set(list),
      error: () => {
      }
    });
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId.set(+id);
      this.loading.set(true);
      this.svc.findById(+id).subscribe({
        next: (j) => {
          this.form.patchValue({
            namaJabatan: j.namaJabatan,
            indukId: j.indukId
          });
          j.targetKehadiranList?.forEach((t) => this.addTarget(t));
          this.loading.set(false);
        },
        error: () => {
          this.error.set("Data jabatan tidak ditemukan.");
          this.loading.set(false);
        }
      });
    }
  }
  // ── Target Kehadiran (FormArray) ─────────────────────────
  get targets() {
    return this.form.get("targetKehadiranList");
  }
  addTarget(data) {
    this.targets.push(this.fb.group({
      namaLokasi: [data?.namaLokasi ?? "", [Validators.required, Validators.maxLength(100)]],
      targetPersen: [data?.targetPersen ?? 0, [Validators.required, Validators.min(0), Validators.max(100)]]
    }));
  }
  removeTarget(i) {
    this.targets.removeAt(i);
  }
  targetGroup(i) {
    return this.targets.at(i);
  }
  // ── Submit ───────────────────────────────────────────────
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const v = this.form.value;
    const req = {
      namaJabatan: v.namaJabatan,
      indukId: v.indukId ?? null,
      targetKehadiranList: v.targetKehadiranList ?? []
    };
    const action$ = this.editId() ? this.svc.update(this.editId(), req) : this.svc.create(req);
    action$.subscribe({
      next: () => this.router.navigate(["/jabatan"]),
      error: (err) => {
        this.error.set(err?.data?.message ?? err?.message ?? "Terjadi kesalahan.");
        this.saving.set(false);
      }
    });
  }
  get f() {
    return this.form.controls;
  }
  get isEdit() {
    return !!this.editId();
  }
  /** Jabatan yang bisa dipilih sebagai induk (semua kecuali dirinya sendiri) */
  get indukOptions() {
    const id = this.editId();
    return this.jabatanList().filter((j) => j.id !== id);
  }
  static {
    this.\u0275fac = function JabatanFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JabatanFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JabatanFormComponent, selectors: [["app-jabatan-form"]], decls: 25, vars: 4, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/jabatan"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0"], [1, "bx", "bx-briefcase", "me-2"], ["routerLink", "/jabatan", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bx", "bx-arrow-back", "me-1"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-flex", "align-items-center"], [1, "text-center", "py-5"], [3, "formGroup"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], [1, "btn-close", "ms-auto", 3, "click"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [3, "ngSubmit", "formGroup"], [1, "card", "mb-3"], [1, "card-header", "fw-semibold"], [1, "bx", "bx-id-card", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["type", "text", "formControlName", "namaJabatan", "placeholder", "Contoh: Manager, Staff, Direktur", 1, "form-control"], [1, "invalid-feedback"], ["formControlName", "indukId", 1, "form-select"], [3, "ngValue"], [1, "form-text", "text-muted"], [1, "card-header", "fw-semibold", "d-flex", "align-items-center", "justify-content-between"], [1, "bx", "bx-target-lock", "me-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "text-muted", "text-center", "py-3", "mb-0"], [1, "table-responsive"], [1, "d-flex", "justify-content-end", "gap-2", "mb-4"], ["type", "button", "routerLink", "/jabatan", 1, "btn", "btn-secondary", "px-4"], [1, "bx", "bx-x", "me-1"], ["type", "submit", 1, "btn", "btn-primary", "px-4", 3, "disabled"], [1, "bx", "bx-info-circle", "me-1"], [1, "table", "table-sm", "align-middle", "mb-0"], [1, "table-light"], [2, "width", "60%"], [2, "width", "30%"], [2, "width", "10%"], ["type", "text", "formControlName", "namaLokasi", "placeholder", "Misal: WFO, WFH, Hybrid", 1, "form-control", "form-control-sm"], [1, "input-group", "input-group-sm"], ["type", "number", "formControlName", "targetPersen", "min", "0", "max", "100", 1, "form-control", "form-control-sm"], [1, "input-group-text"], [1, "text-danger", 2, "font-size", "0.75rem"], [1, "text-center"], ["type", "button", "title", "Hapus baris ini", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bx", "bx-trash"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"]], template: function JabatanFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
        \u0275\u0275text(12, "Jabatan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "h5", 11);
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 13);
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275text(21, " Kembali ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, JabatanFormComponent_Conditional_22_Template, 4, 1, "div", 15);
        \u0275\u0275conditionalCreate(23, JabatanFormComponent_Conditional_23_Template, 4, 0, "div", 16)(24, JabatanFormComponent_Conditional_24_Template, 43, 9, "form", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit" : "Tambah");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Edit Jabatan" : "Tambah Jabatan", " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.error() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 23 : 24);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JabatanFormComponent, [{
    type: Component,
    args: [{ selector: "app-jabatan-form", standalone: true, imports: [ReactiveFormsModule, FormsModule, RouterLink, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/jabatan">Jabatan</a></li>\r
          <li class="breadcrumb-item active" aria-current="page">{{ isEdit ? 'Edit' : 'Tambah' }}</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="d-flex align-items-center justify-content-between mb-3">\r
    <h5 class="mb-0">\r
      <i class="bx bx-briefcase me-2"></i>\r
      {{ isEdit ? 'Edit Jabatan' : 'Tambah Jabatan' }}\r
    </h5>\r
    <a routerLink="/jabatan" class="btn btn-outline-secondary btn-sm">\r
      <i class="bx bx-arrow-back me-1"></i> Kembali\r
    </a>\r
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
    <div class="text-center py-5">\r
      <div class="spinner-border text-primary" role="status">\r
        <span class="visually-hidden">Memuat...</span>\r
      </div>\r
    </div>\r
  } @else {\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
\r
      <!-- \u2460 Identitas -->\r
      <div class="card mb-3">\r
        <div class="card-header fw-semibold">\r
          <i class="bx bx-id-card me-2"></i>Identitas Jabatan\r
        </div>\r
        <div class="card-body">\r
          <div class="row g-3">\r
\r
            <!-- Nama Jabatan -->\r
            <div class="col-md-6">\r
              <label class="form-label fw-semibold">\r
                Nama Jabatan <span class="text-danger">*</span>\r
              </label>\r
              <input type="text" class="form-control"\r
                     [class.is-invalid]="f['namaJabatan'].invalid && f['namaJabatan'].touched"\r
                     formControlName="namaJabatan"\r
                     placeholder="Contoh: Manager, Staff, Direktur">\r
              @if (f['namaJabatan'].errors?.['required'] && f['namaJabatan'].touched) {\r
                <div class="invalid-feedback">Nama jabatan wajib diisi.</div>\r
              }\r
              @if (f['namaJabatan'].errors?.['maxlength'] && f['namaJabatan'].touched) {\r
                <div class="invalid-feedback">Maksimal 100 karakter.</div>\r
              }\r
            </div>\r
\r
            <!-- Induk Jabatan -->\r
            <div class="col-md-6">\r
              <label class="form-label fw-semibold">Induk Jabatan</label>\r
              <select class="form-select" formControlName="indukId">\r
                <option [ngValue]="null">\u2014 Tidak ada (jabatan root) \u2014</option>\r
                @for (j of indukOptions; track j.id) {\r
                  <option [ngValue]="j.id">{{ j.namaJabatan }}</option>\r
                }\r
              </select>\r
              <div class="form-text text-muted">Kosongkan jika jabatan ini adalah yang paling atas.</div>\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \u2461 Target Kehadiran -->\r
      <div class="card mb-3">\r
        <div class="card-header fw-semibold d-flex align-items-center justify-content-between">\r
          <span><i class="bx bx-target-lock me-2"></i>Target Kehadiran</span>\r
          <button type="button" class="btn btn-outline-primary btn-sm" (click)="addTarget()">\r
            <i class="bx bx-plus me-1"></i> Tambah Lokasi\r
          </button>\r
        </div>\r
        <div class="card-body">\r
          @if (targets.length === 0) {\r
            <p class="text-muted text-center py-3 mb-0">\r
              <i class="bx bx-info-circle me-1"></i>\r
              Belum ada target kehadiran. Klik "Tambah Lokasi" untuk menambahkan.\r
            </p>\r
          } @else {\r
            <div class="table-responsive">\r
              <table class="table table-sm align-middle mb-0">\r
                <thead class="table-light">\r
                  <tr>\r
                    <th style="width:60%">Nama Lokasi</th>\r
                    <th style="width:30%">Target (%)</th>\r
                    <th style="width:10%"></th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @for (tg of targets.controls; track $index) {\r
                    <tr [formGroup]="targetGroup($index)">\r
                      <td>\r
                        <input type="text" class="form-control form-control-sm"\r
                               [class.is-invalid]="targetGroup($index).get('namaLokasi')!.invalid && targetGroup($index).get('namaLokasi')!.touched"\r
                               formControlName="namaLokasi"\r
                               placeholder="Misal: WFO, WFH, Hybrid">\r
                        @if (targetGroup($index).get('namaLokasi')!.errors?.['required'] && targetGroup($index).get('namaLokasi')!.touched) {\r
                          <div class="invalid-feedback">Nama lokasi wajib diisi.</div>\r
                        }\r
                      </td>\r
                      <td>\r
                        <div class="input-group input-group-sm">\r
                          <input type="number" class="form-control form-control-sm"\r
                                 [class.is-invalid]="targetGroup($index).get('targetPersen')!.invalid && targetGroup($index).get('targetPersen')!.touched"\r
                                 formControlName="targetPersen"\r
                                 min="0" max="100">\r
                          <span class="input-group-text">%</span>\r
                        </div>\r
                        @if (targetGroup($index).get('targetPersen')!.errors?.['min'] && targetGroup($index).get('targetPersen')!.touched) {\r
                          <div class="text-danger" style="font-size:0.75rem">Min 0%</div>\r
                        }\r
                        @if (targetGroup($index).get('targetPersen')!.errors?.['max'] && targetGroup($index).get('targetPersen')!.touched) {\r
                          <div class="text-danger" style="font-size:0.75rem">Maks 100%</div>\r
                        }\r
                      </td>\r
                      <td class="text-center">\r
                        <button type="button" class="btn btn-outline-danger btn-sm"\r
                                title="Hapus baris ini"\r
                                (click)="removeTarget($index)">\r
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
      <!-- Tombol submit -->\r
      <div class="d-flex justify-content-end gap-2 mb-4">\r
        <button type="button" class="btn btn-secondary px-4" routerLink="/jabatan">\r
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
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JabatanFormComponent, { className: "JabatanFormComponent", filePath: "src/app/features/jabatan/jabatan-form/jabatan-form.component.ts", lineNumber: 14 });
})();
export {
  JabatanFormComponent
};
//# sourceMappingURL=chunk-XBVEEMDY.js.map
