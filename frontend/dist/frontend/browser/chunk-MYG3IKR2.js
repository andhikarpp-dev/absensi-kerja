import {
  DivisiService
} from "./chunk-ZPIWI2CH.js";
import {
  JabatanService
} from "./chunk-D5C53HHG.js";
import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
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
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  HttpClient,
  NgClass,
  Router,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  HostListener,
  Injectable,
  Input,
  ViewChild,
  catchError,
  computed,
  forwardRef,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/wilayah.service.ts
var WilayahService = class _WilayahService {
  constructor() {
    this.http = inject(HttpClient);
    this.url = `${environment.apiUrl}/wilayah`;
  }
  findAllProvinsi() {
    return this.http.get(`${this.url}/provinsi`).pipe(map((res) => res?.provinsi ?? []), catchError((err) => {
      console.error("[WilayahService] findAllProvinsi error:", err);
      return of([]);
    }));
  }
  findKabupatenKota(provinsiId) {
    return this.http.get(`${this.url}/kabupaten-kota`, { params: { provinsiId: provinsiId.toString() } }).pipe(map((res) => res?.kabupatenKota ?? []), catchError((err) => {
      console.error("[WilayahService] findKabupatenKota error:", err);
      return of([]);
    }));
  }
  static {
    this.\u0275fac = function WilayahService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WilayahService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WilayahService, factory: _WilayahService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WilayahService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/searchable-select/searchable-select.component.ts
var _c0 = ["searchInput"];
var _forTrack0 = ($index, $item) => $item.value;
function SearchableSelectComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275listener("click", function SearchableSelectComponent_Conditional_5_Conditional_8_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(null));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-active", ctx_r1.value === null || ctx_r1.value === void 0 || ctx_r1.value === "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.placeholder, " ");
  }
}
function SearchableSelectComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2, "Tidak ada hasil ");
    \u0275\u0275elementEnd();
  }
}
function SearchableSelectComponent_Conditional_5_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("click", function SearchableSelectComponent_Conditional_5_For_11_Template_li_click_0_listener() {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(opt_r5.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-active", opt_r5.value === ctx_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5.label, " ");
  }
}
function SearchableSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    \u0275\u0275element(4, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 10, 0);
    \u0275\u0275listener("ngModelChange", function SearchableSelectComponent_Conditional_5_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set($event));
    })("click", function SearchableSelectComponent_Conditional_5_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ul", 11);
    \u0275\u0275conditionalCreate(8, SearchableSelectComponent_Conditional_5_Conditional_8_Template, 3, 3, "li", 12);
    \u0275\u0275conditionalCreate(9, SearchableSelectComponent_Conditional_5_Conditional_9_Template, 3, 0, "li", 13);
    \u0275\u0275repeaterCreate(10, SearchableSelectComponent_Conditional_5_For_11_Template, 2, 3, "li", 14, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", ctx_r1.searchPlaceholder)("ngModel", ctx_r1.searchQuery());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showClear ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filteredOptions().length === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredOptions());
  }
}
var SearchableSelectComponent = class _SearchableSelectComponent {
  constructor() {
    this.options = [];
    this.placeholder = "-- Pilih --";
    this.searchPlaceholder = "Cari...";
    this.showClear = true;
    this.disabled = false;
    this.value = null;
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this._options = signal([], ...ngDevMode ? [{ debugName: "_options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredOptions = computed(() => {
      const q = this.searchQuery().toLowerCase().trim();
      const opts = this._options();
      if (!q)
        return opts;
      return opts.filter((o) => o.label.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredOptions" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnChanges(changes) {
    if (changes["options"]) {
      this._options.set(this.options ?? []);
    }
  }
  selectedLabel() {
    if (this.value === null || this.value === void 0 || this.value === "") {
      return this.placeholder;
    }
    return this._options().find((o) => o.value === this.value)?.label ?? this.placeholder;
  }
  toggle() {
    if (this.disabled)
      return;
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.searchQuery.set("");
      setTimeout(() => this.searchInputRef?.nativeElement.focus(), 50);
    }
  }
  select(val) {
    this.value = val;
    this.onChange(val);
    this.onTouched();
    this.isOpen.set(false);
    this.searchQuery.set("");
  }
  /** Tutup dropdown jika klik di luar */
  onDocumentClick(event) {
    const el = event.target;
    if (!el.closest(".ss-wrapper")) {
      this.isOpen.set(false);
    }
  }
  // ── ControlValueAccessor ────────────────────────────────
  writeValue(val) {
    this.value = val ?? null;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static {
    this.\u0275fac = function SearchableSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchableSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchableSelectComponent, selectors: [["app-searchable-select"]], viewQuery: function SearchableSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInputRef = _t.first);
      }
    }, hostBindings: function SearchableSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SearchableSelectComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { options: "options", placeholder: "placeholder", searchPlaceholder: "searchPlaceholder", showClear: "showClear", disabled: "disabled" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _SearchableSelectComponent),
        multi: true
      }
    ]), \u0275\u0275NgOnChangesFeature], decls: 6, vars: 12, consts: [["searchInput", ""], [1, "ss-wrapper"], [1, "ss-trigger", "form-select", "d-flex", "align-items-center", "justify-content-between", 3, "click"], [1, "ss-selected-label", "text-truncate"], [1, "bx", "ms-1", "flex-shrink-0"], [1, "ss-dropdown", "shadow-sm"], [1, "ss-search-wrap", "px-2", "pt-2", "pb-1"], [1, "input-group", "input-group-sm"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "bx", "bx-search", "text-muted"], ["type", "text", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "click", "placeholder", "ngModel"], [1, "ss-options", "list-unstyled", "mb-0"], [1, "ss-option", "ss-option-clear", 3, "ss-active"], [1, "ss-option", "ss-no-result", "text-muted"], [1, "ss-option", 3, "ss-active"], [1, "ss-option", "ss-option-clear", 3, "click"], [1, "bx", "bx-x", "me-1"], [1, "bx", "bx-search-alt", "me-1"], [1, "ss-option", 3, "click"]], template: function SearchableSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275listener("click", function SearchableSelectComponent_Template_div_click_1_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(2, "span", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, SearchableSelectComponent_Conditional_5_Template, 12, 4, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("ss-open", ctx.isOpen())("ss-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275classProp("ss-placeholder", ctx.selectedLabel() === ctx.placeholder);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedLabel());
        \u0275\u0275advance();
        \u0275\u0275classProp("bx-chevron-down", !ctx.isOpen())("bx-chevron-up", ctx.isOpen());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isOpen() ? 5 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.ss-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ss-trigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  min-height: 38px;\n}\n.ss-wrapper.ss-disabled[_ngcontent-%COMP%]   .ss-trigger[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  pointer-events: none;\n  opacity: 0.65;\n}\n.ss-placeholder[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.ss-selected-label[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ss-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  z-index: 1055;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  overflow: hidden;\n}\n.ss-options[_ngcontent-%COMP%] {\n  max-height: 220px;\n  overflow-y: auto;\n}\n.ss-option[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: background 0.1s;\n}\n.ss-option[_ngcontent-%COMP%]:hover {\n  background-color: #f0f4ff;\n}\n.ss-option.ss-active[_ngcontent-%COMP%] {\n  background-color: #e7efff;\n  color: #0d6efd;\n  font-weight: 500;\n}\n.ss-option-clear[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-bottom: 1px solid #f0f0f0;\n  font-style: italic;\n}\n.ss-no-result[_ngcontent-%COMP%] {\n  pointer-events: none;\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.ss-search-wrap[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #dee2e6;\n}\n/*# sourceMappingURL=searchable-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchableSelectComponent, [{
    type: Component,
    args: [{ selector: "app-searchable-select", standalone: true, imports: [FormsModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SearchableSelectComponent),
        multi: true
      }
    ], template: `
    <div class="ss-wrapper" [class.ss-open]="isOpen()" [class.ss-disabled]="disabled">

      <!-- Trigger -->
      <div class="ss-trigger form-select d-flex align-items-center justify-content-between"
           [class.ss-placeholder]="selectedLabel() === placeholder"
           (click)="toggle()">
        <span class="ss-selected-label text-truncate">{{ selectedLabel() }}</span>
        <i class="bx ms-1 flex-shrink-0"
           [class.bx-chevron-down]="!isOpen()"
           [class.bx-chevron-up]="isOpen()"></i>
      </div>

      <!-- Dropdown -->
      @if (isOpen()) {
        <div class="ss-dropdown shadow-sm">

          <!-- Search input -->
          <div class="ss-search-wrap px-2 pt-2 pb-1">
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-white border-end-0">
                <i class="bx bx-search text-muted"></i>
              </span>
              <input #searchInput
                     type="text"
                     class="form-control border-start-0 ps-0"
                     [placeholder]="searchPlaceholder"
                     [ngModel]="searchQuery()"
                     (ngModelChange)="searchQuery.set($event)"
                     (click)="$event.stopPropagation()" />
            </div>
          </div>

          <!-- Options list -->
          <ul class="ss-options list-unstyled mb-0">
            @if (showClear) {
              <li class="ss-option ss-option-clear"
                  [class.ss-active]="value === null || value === undefined || value === ''"
                  (click)="select(null)">
                <i class="bx bx-x me-1"></i>{{ placeholder }}
              </li>
            }
            @if (filteredOptions().length === 0) {
              <li class="ss-option ss-no-result text-muted">
                <i class="bx bx-search-alt me-1"></i>Tidak ada hasil
              </li>
            }
            @for (opt of filteredOptions(); track opt.value) {
              <li class="ss-option"
                  [class.ss-active]="opt.value === value"
                  (click)="select(opt.value)">
                {{ opt.label }}
              </li>
            }
          </ul>

        </div>
      }

    </div>
  `, styles: ["/* angular:styles/component:css;4fbbb506945937781fc1c2a105c160611396ac84dcde7aaf5281d5094b68752f;C:/Users/Muhriz/Music/absensikerja/frontend/src/app/shared/searchable-select/searchable-select.component.ts */\n.ss-wrapper {\n  position: relative;\n}\n.ss-trigger {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  min-height: 38px;\n}\n.ss-wrapper.ss-disabled .ss-trigger {\n  background-color: #e9ecef;\n  pointer-events: none;\n  opacity: 0.65;\n}\n.ss-placeholder {\n  color: #6c757d;\n}\n.ss-selected-label {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ss-dropdown {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  z-index: 1055;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  overflow: hidden;\n}\n.ss-options {\n  max-height: 220px;\n  overflow-y: auto;\n}\n.ss-option {\n  padding: 7px 14px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: background 0.1s;\n}\n.ss-option:hover {\n  background-color: #f0f4ff;\n}\n.ss-option.ss-active {\n  background-color: #e7efff;\n  color: #0d6efd;\n  font-weight: 500;\n}\n.ss-option-clear {\n  color: #6c757d;\n  border-bottom: 1px solid #f0f0f0;\n  font-style: italic;\n}\n.ss-no-result {\n  pointer-events: none;\n  font-style: italic;\n  font-size: 0.8rem;\n}\n.ss-search-wrap .form-control:focus {\n  box-shadow: none;\n  border-color: #dee2e6;\n}\n/*# sourceMappingURL=searchable-select.component.css.map */\n"] }]
  }], null, { options: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], searchPlaceholder: [{
    type: Input
  }], showClear: [{
    type: Input
  }], disabled: [{
    type: Input
  }], searchInputRef: [{
    type: ViewChild,
    args: ["searchInput"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchableSelectComponent, { className: "SearchableSelectComponent", filePath: "src/app/shared/searchable-select/searchable-select.component.ts", lineNumber: 152 });
})();

// src/app/features/karyawan/karyawan-form/karyawan-form.component.ts
var _c02 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => ({ id: "pribadi", icon: "bx-user", label: "Data Pribadi" });
var _c2 = () => ({ id: "alamat", icon: "bx-map", label: "Alamat" });
var _c3 = () => ({ id: "pendidikan", icon: "bx-book", label: "Pendidikan" });
var _c4 = () => ({ id: "kepegawaian", icon: "bx-briefcase", label: "Kepegawaian" });
var _c5 = () => ({ id: "akun", icon: "bx-lock", label: "Akun" });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function KaryawanFormComponent_Conditional_21_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "span", 20)(2, "span", 21);
    \u0275\u0275elementEnd();
  }
}
function KaryawanFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 18);
    \u0275\u0275repeaterCreate(2, KaryawanFormComponent_Conditional_21_For_3_Template, 3, 0, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02));
  }
}
function KaryawanFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function KaryawanFormComponent_Conditional_22_Template_button_click_3_listener() {
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
function KaryawanFormComponent_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.fotoPreview(), \u0275\u0275sanitizeUrl);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 31);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function KaryawanFormComponent_Conditional_23_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFoto());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function KaryawanFormComponent_Conditional_23_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 40)(1, "button", 48);
    \u0275\u0275listener("click", function KaryawanFormComponent_Conditional_23_For_21_Template_button_click_1_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(tab_r6.id));
    });
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab() === tab_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tab_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", tab_r6.label, " ");
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    \u0275\u0275property("value", opt_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r7.label);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", g_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.golonganDarahLabels[g_r8]);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r9.label);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10.label);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r11.label);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const z_r12 = ctx.$implicit;
    \u0275\u0275property("value", z_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(z_r12);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 50)(2, "label", 51);
    \u0275\u0275text(3, "Nama Lengkap ");
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 53);
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8, "Nama lengkap wajib diisi.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "label", 55);
    \u0275\u0275text(11, "Tempat Lahir");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 50)(14, "label", 57);
    \u0275\u0275text(15, "Tanggal Lahir");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 50)(18, "label", 59);
    \u0275\u0275text(19, "Jenis Kelamin ");
    \u0275\u0275elementStart(20, "span", 52);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 60);
    \u0275\u0275repeaterCreate(23, KaryawanFormComponent_Conditional_23_Conditional_23_For_24_Template, 2, 2, "option", 61, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 62)(26, "label", 59);
    \u0275\u0275text(27, "Golongan Darah");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 63)(29, "option", 64);
    \u0275\u0275text(30, "-- Pilih --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, KaryawanFormComponent_Conditional_23_Conditional_23_For_32_Template, 2, 2, "option", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 62)(34, "label", 59);
    \u0275\u0275text(35, "Status Perkawinan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 65)(37, "option", 64);
    \u0275\u0275text(38, "-- Pilih --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, KaryawanFormComponent_Conditional_23_Conditional_23_For_40_Template, 2, 2, "option", 61, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 62)(42, "label", 59);
    \u0275\u0275text(43, "Agama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 66)(45, "option", 64);
    \u0275\u0275text(46, "-- Pilih --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(47, KaryawanFormComponent_Conditional_23_Conditional_23_For_48_Template, 2, 2, "option", 61, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 62)(50, "label", 59);
    \u0275\u0275text(51, "Jenis Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "select", 67)(53, "option", 64);
    \u0275\u0275text(54, "-- Pilih --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(55, KaryawanFormComponent_Conditional_23_Conditional_23_For_56_Template, 2, 2, "option", 61, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 68)(58, "label", 69);
    \u0275\u0275text(59, "Nomor Identitas");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 50)(62, "label", 71);
    \u0275\u0275text(63, "Nomor Telepon");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 50)(66, "label", 59);
    \u0275\u0275text(67, "Zona Waktu ");
    \u0275\u0275elementStart(68, "span", 52);
    \u0275\u0275text(69, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "select", 73);
    \u0275\u0275repeaterCreate(71, KaryawanFormComponent_Conditional_23_Conditional_23_For_72_Template, 2, 2, "option", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 74)(74, "label", 75);
    \u0275\u0275text(75, "Catatan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "textarea", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["namaLengkap"].invalid && ctx_r1.f["namaLengkap"].touched);
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["jenisKelamin"].invalid && ctx_r1.f["jenisKelamin"].touched);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.jenisKelaminOptions);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.golonganDarahOptions);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.statusPerkawinanOptions);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.agamaOptions);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.jenisIdentitasOptions);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["zonaWaktu"].invalid && ctx_r1.f["zonaWaktu"].touched);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.zonaWaktuOptions);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 74)(2, "label", 77);
    \u0275\u0275text(3, "Alamat KTP");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 50)(6, "label", 59);
    \u0275\u0275text(7, "Provinsi");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-searchable-select", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 50)(10, "label", 59);
    \u0275\u0275text(11, "Kabupaten / Kota");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "app-searchable-select", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 74)(14, "label", 81);
    \u0275\u0275text(15, "Alamat Domisili");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "textarea", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("options", ctx_r1.provinsiOptions());
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.kabupatenKotaOptions())("disabled", ctx_r1.kabupatenKotaList().length === 0);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_25_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    \u0275\u0275property("value", opt_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r13.label);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 62)(2, "label", 59);
    \u0275\u0275text(3, "Jenjang Pendidikan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 83)(5, "option", 64);
    \u0275\u0275text(6, "-- Pilih --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, KaryawanFormComponent_Conditional_23_Conditional_25_For_8_Template, 2, 2, "option", 61, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 68)(10, "label", 84);
    \u0275\u0275text(11, "Jurusan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 68)(14, "label", 86);
    \u0275\u0275text(15, "Nama Institusi Pendidikan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 62)(18, "label", 88);
    \u0275\u0275text(19, "Tahun Lulus");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.jenjangOptions);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_26_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
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
function KaryawanFormComponent_Conditional_23_Conditional_26_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r15 = ctx.$implicit;
    \u0275\u0275property("value", j_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r15.namaJabatan);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_26_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r16 = ctx.$implicit;
    \u0275\u0275property("value", d_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r16.namaDivisi);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 50)(2, "label", 90);
    \u0275\u0275text(3, "Nomor Induk Karyawan (NIP) ");
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 91);
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8, "NIP wajib diisi, maksimal 20 karakter.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "label", 59);
    \u0275\u0275text(11, "Status Kerja ");
    \u0275\u0275elementStart(12, "span", 52);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 92);
    \u0275\u0275repeaterCreate(15, KaryawanFormComponent_Conditional_23_Conditional_26_For_16_Template, 2, 2, "option", 61, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 50)(18, "label", 59);
    \u0275\u0275text(19, "Jabatan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 93)(21, "option", 61);
    \u0275\u0275text(22, "-- Pilih Jabatan --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, KaryawanFormComponent_Conditional_23_Conditional_26_For_24_Template, 2, 2, "option", 61, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 50)(26, "label", 59);
    \u0275\u0275text(27, "Divisi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 94)(29, "option", 61);
    \u0275\u0275text(30, "-- Pilih Divisi --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, KaryawanFormComponent_Conditional_23_Conditional_26_For_32_Template, 2, 2, "option", 61, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 50)(34, "label", 95);
    \u0275\u0275text(35, "Tgl. Mulai Bekerja");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 50)(38, "label", 97);
    \u0275\u0275text(39, "Tgl. Mulai Dapat Cuti");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 62)(42, "label", 99);
    \u0275\u0275text(43, "Sisa Cuti (hari)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 68)(46, "label", 101);
    \u0275\u0275text(47, "Tgl. Cuti Berakhir");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["nip"].invalid && ctx_r1.f["nip"].touched);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["statusKerja"].invalid && ctx_r1.f["statusKerja"].touched);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusKerjaOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.jabatanList());
    \u0275\u0275advance(6);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.divisiList());
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1, "(kosongkan jika tidak ingin mengubah)");
    \u0275\u0275elementEnd();
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275text(2, "Kata sandi tidak cocok.");
    \u0275\u0275elementEnd();
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 74)(2, "label", 103);
    \u0275\u0275text(3, "Email ");
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 104);
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8, "Email wajib diisi dengan format yang valid.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 105);
    \u0275\u0275text(10, "Email ini digunakan sebagai username login.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 50)(12, "label", 106);
    \u0275\u0275text(13, " Kata Sandi ");
    \u0275\u0275conditionalCreate(14, KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_14_Template, 2, 0, "span", 52);
    \u0275\u0275conditionalCreate(15, KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_15_Template, 2, 0, "small", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 107);
    \u0275\u0275elementStart(17, "div", 54);
    \u0275\u0275text(18, "Minimal 6 karakter.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 50)(20, "label", 108);
    \u0275\u0275text(21, " Ulangi Kata Sandi ");
    \u0275\u0275conditionalCreate(22, KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_22_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 109);
    \u0275\u0275conditionalCreate(24, KaryawanFormComponent_Conditional_23_Conditional_27_Conditional_24_Template, 3, 0, "div", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r1.isEdit ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEdit ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r1.f["password"].invalid && ctx_r1.f["password"].touched);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r1.isEdit ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r1.f["konfirmasiPassword"].invalid && ctx_r1.f["konfirmasiPassword"].touched || ctx_r1.passwordMismatch);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.passwordMismatch ? 24 : -1);
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 112);
    \u0275\u0275text(1, " Menyimpan... ");
  }
}
function KaryawanFormComponent_Conditional_23_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 113);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEdit ? "Perbarui" : "Simpan", " ");
  }
}
function KaryawanFormComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 24);
    \u0275\u0275listener("ngSubmit", function KaryawanFormComponent_Conditional_23_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "div", 29);
    \u0275\u0275conditionalCreate(6, KaryawanFormComponent_Conditional_23_Conditional_6_Template, 1, 1, "img", 30)(7, KaryawanFormComponent_Conditional_23_Conditional_7_Template, 1, 0, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 32);
    \u0275\u0275element(10, "i", 33);
    \u0275\u0275text(11, " Pilih Foto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 34);
    \u0275\u0275listener("change", function KaryawanFormComponent_Conditional_23_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFotoChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, KaryawanFormComponent_Conditional_23_Conditional_13_Template, 2, 0, "button", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 36);
    \u0275\u0275text(15, "JPG/PNG, maks 2MB");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 37)(17, "div", 15)(18, "div", 38)(19, "ul", 39);
    \u0275\u0275repeaterCreate(20, KaryawanFormComponent_Conditional_23_For_21_Template, 4, 4, "li", 40, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 41);
    \u0275\u0275conditionalCreate(23, KaryawanFormComponent_Conditional_23_Conditional_23_Template, 77, 6, "div", 25);
    \u0275\u0275conditionalCreate(24, KaryawanFormComponent_Conditional_23_Conditional_24_Template, 17, 3, "div", 25);
    \u0275\u0275conditionalCreate(25, KaryawanFormComponent_Conditional_23_Conditional_25_Template, 21, 0, "div", 25);
    \u0275\u0275conditionalCreate(26, KaryawanFormComponent_Conditional_23_Conditional_26_Template, 49, 6, "div", 25);
    \u0275\u0275conditionalCreate(27, KaryawanFormComponent_Conditional_23_Conditional_27_Template, 25, 10, "div", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 42)(29, "a", 43);
    \u0275\u0275element(30, "i", 44);
    \u0275\u0275text(31, " Batal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 45);
    \u0275\u0275conditionalCreate(33, KaryawanFormComponent_Conditional_23_Conditional_33_Template, 2, 0)(34, KaryawanFormComponent_Conditional_23_Conditional_34_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.fotoPreview() ? 6 : 7);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.fotoPreview() ? 13 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction5(15, _c6, \u0275\u0275pureFunction0(10, _c1), \u0275\u0275pureFunction0(11, _c2), \u0275\u0275pureFunction0(12, _c3), \u0275\u0275pureFunction0(13, _c4), \u0275\u0275pureFunction0(14, _c5)));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.activeTab() === "pribadi" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "alamat" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "pendidikan" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "kepegawaian" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "akun" ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 33 : 34);
  }
}
function passwordMatchValidator(ctrl) {
  const pw = ctrl.get("password")?.value;
  const cpw = ctrl.get("konfirmasiPassword")?.value;
  if (!pw && !cpw)
    return null;
  return pw === cpw ? null : { passwordMismatch: true };
}
var KaryawanFormComponent = class _KaryawanFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.svc = inject(KaryawanService);
    this.jabatanSvc = inject(JabatanService);
    this.divisiSvc = inject(DivisiService);
    this.wilayahSvc = inject(WilayahService);
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
    this.divisiList = signal([], ...ngDevMode ? [{ debugName: "divisiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.provinsiList = signal([], ...ngDevMode ? [{ debugName: "provinsiList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kabupatenKotaList = signal([], ...ngDevMode ? [{ debugName: "kabupatenKotaList" }] : (
      /* istanbul ignore next */
      []
    ));
    this.provinsiOptions = computed(() => this.provinsiList().map((p) => ({ value: p.id, label: p.namaProvinsi })), ...ngDevMode ? [{ debugName: "provinsiOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kabupatenKotaOptions = computed(() => this.kabupatenKotaList().map((k) => ({ value: k.id, label: k.namaKabupatenKota })), ...ngDevMode ? [{ debugName: "kabupatenKotaOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeTab = signal("pribadi", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fotoFile = signal(null, ...ngDevMode ? [{ debugName: "fotoFile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fotoPreview = signal(null, ...ngDevMode ? [{ debugName: "fotoPreview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.jenisKelaminOptions = [
      { value: "LAKI_LAKI", label: "Laki-laki" },
      { value: "PEREMPUAN", label: "Perempuan" }
    ];
    this.golonganDarahOptions = ["A", "B", "AB", "O", "A_PLUS", "A_MINUS", "B_PLUS", "B_MINUS", "AB_PLUS", "AB_MINUS", "O_PLUS", "O_MINUS"];
    this.golonganDarahLabels = {
      A: "A",
      B: "B",
      AB: "AB",
      O: "O",
      A_PLUS: "A+",
      A_MINUS: "A-",
      B_PLUS: "B+",
      B_MINUS: "B-",
      AB_PLUS: "AB+",
      AB_MINUS: "AB-",
      O_PLUS: "O+",
      O_MINUS: "O-"
    };
    this.statusPerkawinanOptions = [
      { value: "BELUM_MENIKAH", label: "Belum Menikah" },
      { value: "MENIKAH", label: "Menikah" },
      { value: "CERAI_HIDUP", label: "Cerai Hidup" },
      { value: "CERAI_MATI", label: "Cerai Mati" }
    ];
    this.agamaOptions = [
      { value: "ISLAM", label: "Islam" },
      { value: "KRISTEN", label: "Kristen" },
      { value: "KATOLIK", label: "Katolik" },
      { value: "HINDU", label: "Hindu" },
      { value: "BUDHA", label: "Budha" },
      { value: "KONGHUCU", label: "Konghucu" },
      { value: "LAINNYA", label: "Lainnya" }
    ];
    this.jenisIdentitasOptions = [
      { value: "KTP", label: "KTP" },
      { value: "SIM", label: "SIM" },
      { value: "PASPOR", label: "Paspor" },
      { value: "KITAS", label: "KITAS" }
    ];
    this.zonaWaktuOptions = ["WIB", "WITA", "WIT"];
    this.jenjangOptions = [
      { value: "SD", label: "SD" },
      { value: "SMP", label: "SMP" },
      { value: "SMA_SMK", label: "SMA/SMK" },
      { value: "D1", label: "D1" },
      { value: "D2", label: "D2" },
      { value: "D3", label: "D3" },
      { value: "D4", label: "D4" },
      { value: "S1", label: "S1" },
      { value: "S2", label: "S2" },
      { value: "S3", label: "S3" }
    ];
    this.statusKerjaOptions = [
      { value: "AKTIF", label: "Aktif" },
      { value: "NONAKTIF", label: "Nonaktif" },
      { value: "CUTI", label: "Cuti" },
      { value: "KONTRAK", label: "Kontrak" },
      { value: "PROBASI", label: "Probasi" },
      { value: "PENSIUN", label: "Pensiun" },
      { value: "RESIGN", label: "Resign" }
    ];
    this.form = this.fb.group({
      // ── Data Pribadi ──────────────────────────────────────
      namaLengkap: ["", [Validators.required, Validators.maxLength(100)]],
      tempatLahir: ["", Validators.maxLength(100)],
      tanggalLahir: [""],
      jenisKelamin: ["LAKI_LAKI", Validators.required],
      golonganDarah: [""],
      statusPerkawinan: [""],
      agama: [""],
      // ── Identitas ─────────────────────────────────────────
      jenisIdentitas: [""],
      nomorIdentitas: ["", Validators.maxLength(50)],
      // ── Alamat ────────────────────────────────────────────
      alamatKtp: [""],
      provinsiId: [null],
      kabupatenKotaId: [null],
      alamatDomisili: [""],
      // ── Kontak ────────────────────────────────────────────
      noTelepon: ["", Validators.maxLength(20)],
      zonaWaktu: ["WIB", Validators.required],
      catatan: [""],
      // ── Pendidikan ────────────────────────────────────────
      jenjangPendidikan: [""],
      jurusan: ["", Validators.maxLength(100)],
      namaInstitusi: ["", Validators.maxLength(150)],
      tahunLulus: [null],
      // ── Kepegawaian ───────────────────────────────────────
      nip: ["", [Validators.required, Validators.maxLength(20)]],
      jabatanId: [null],
      divisiId: [null],
      statusKerja: ["AKTIF", Validators.required],
      tglMulaiBekerja: [""],
      tglMulaiDapatCuti: [""],
      sisaCuti: [0],
      tglCutiBeakhir: [""],
      // ── Akun ──────────────────────────────────────────────
      email: ["", [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: ["", Validators.minLength(6)],
      konfirmasiPassword: ["", Validators.minLength(6)]
    }, { validators: passwordMatchValidator });
  }
  ngOnInit() {
    this.jabatanSvc.findAll().subscribe((list) => this.jabatanList.set(list));
    this.divisiSvc.findAll().subscribe((list) => this.divisiList.set(list));
    this.wilayahSvc.findAllProvinsi().subscribe((list) => this.provinsiList.set(list));
    this.form.get("provinsiId").valueChanges.subscribe((provinsiId) => {
      this.kabupatenKotaList.set([]);
      this.form.patchValue({ kabupatenKotaId: null }, { emitEvent: false });
      if (provinsiId) {
        this.wilayahSvc.findKabupatenKota(+provinsiId).subscribe((list) => this.kabupatenKotaList.set(list));
      }
    });
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId.set(+id);
      this.loading.set(true);
      this.svc.findById(+id).subscribe({
        next: (k) => {
          if (k.provinsiId) {
            this.wilayahSvc.findKabupatenKota(k.provinsiId).subscribe((list) => {
              this.kabupatenKotaList.set(list);
              this.form.patchValue({ kabupatenKotaId: k.kabupatenKotaId ?? null }, { emitEvent: false });
            });
          }
          this.form.patchValue({
            namaLengkap: k.namaLengkap,
            tempatLahir: k.tempatLahir ?? "",
            tanggalLahir: k.tanggalLahir ?? "",
            jenisKelamin: k.jenisKelamin,
            golonganDarah: k.golonganDarah ?? "",
            statusPerkawinan: k.statusPerkawinan ?? "",
            agama: k.agama ?? "",
            jenisIdentitas: k.jenisIdentitas ?? "",
            nomorIdentitas: k.nomorIdentitas ?? "",
            alamatKtp: k.alamatKtp ?? "",
            provinsiId: k.provinsiId ?? null,
            kabupatenKotaId: k.kabupatenKotaId ?? null,
            alamatDomisili: k.alamatDomisili ?? "",
            noTelepon: k.noTelepon ?? "",
            zonaWaktu: k.zonaWaktu,
            catatan: k.catatan ?? "",
            jenjangPendidikan: k.jenjangPendidikan ?? "",
            jurusan: k.jurusan ?? "",
            namaInstitusi: k.namaInstitusi ?? "",
            tahunLulus: k.tahunLulus ?? null,
            nip: k.nip,
            jabatanId: k.jabatanId ?? null,
            divisiId: k.divisiId ?? null,
            statusKerja: k.statusKerja,
            tglMulaiBekerja: k.tglMulaiBekerja ?? "",
            tglMulaiDapatCuti: k.tglMulaiDapatCuti ?? "",
            sisaCuti: k.sisaCuti ?? 0,
            tglCutiBeakhir: k.tglCutiBeakhir ?? "",
            email: k.email ?? ""
          }, { emitEvent: false });
          if (k.fotoProfil) {
            const url = k.fotoProfil.startsWith("http") ? k.fotoProfil : `${environment.baseUrl}/${k.fotoProfil}`;
            this.fotoPreview.set(url);
          }
          this.loading.set(false);
        },
        error: () => {
          this.error.set("Data karyawan tidak ditemukan.");
          this.loading.set(false);
        }
      });
    }
  }
  /** Masih tersedia jika dipanggil manual, tapi sekarang cascade diurus via valueChanges */
  onProvinsiChange(provinsiId) {
  }
  onFotoChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.fotoFile.set(file);
    const reader = new FileReader();
    reader.onload = (e) => this.fotoPreview.set(e.target?.result);
    reader.readAsDataURL(file);
  }
  removeFoto() {
    this.fotoFile.set(null);
    this.fotoPreview.set(null);
    this.form.patchValue({});
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const v = this.form.value;
    const req = {
      namaLengkap: v.namaLengkap,
      tempatLahir: v.tempatLahir || void 0,
      tanggalLahir: v.tanggalLahir || void 0,
      jenisKelamin: v.jenisKelamin,
      golonganDarah: v.golonganDarah || void 0,
      statusPerkawinan: v.statusPerkawinan || void 0,
      agama: v.agama || void 0,
      jenisIdentitas: v.jenisIdentitas || void 0,
      nomorIdentitas: v.nomorIdentitas || void 0,
      alamatKtp: v.alamatKtp || void 0,
      provinsiId: v.provinsiId ?? void 0,
      kabupatenKotaId: v.kabupatenKotaId ?? void 0,
      alamatDomisili: v.alamatDomisili || void 0,
      noTelepon: v.noTelepon || void 0,
      zonaWaktu: v.zonaWaktu ?? "WIB",
      catatan: v.catatan || void 0,
      jenjangPendidikan: v.jenjangPendidikan || void 0,
      jurusan: v.jurusan || void 0,
      namaInstitusi: v.namaInstitusi || void 0,
      tahunLulus: v.tahunLulus ?? void 0,
      nip: v.nip,
      jabatanId: v.jabatanId ?? void 0,
      divisiId: v.divisiId ?? void 0,
      statusKerja: v.statusKerja ?? "AKTIF",
      tglMulaiBekerja: v.tglMulaiBekerja || void 0,
      tglMulaiDapatCuti: v.tglMulaiDapatCuti || void 0,
      sisaCuti: v.sisaCuti ?? 0,
      tglCutiBeakhir: v.tglCutiBeakhir || void 0,
      email: v.email,
      password: v.password || void 0,
      konfirmasiPassword: v.konfirmasiPassword || void 0
    };
    const foto = this.fotoFile() ?? void 0;
    const action$ = this.editId() ? this.svc.update(this.editId(), req, foto) : this.svc.create(req, foto);
    action$.subscribe({
      next: () => this.router.navigate(["/karyawan"]),
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
  get passwordMismatch() {
    return this.form.hasError("passwordMismatch") && (this.f["konfirmasiPassword"].dirty || this.f["konfirmasiPassword"].touched);
  }
  static {
    this.\u0275fac = function KaryawanFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanFormComponent, selectors: [["app-karyawan-form"]], decls: 24, vars: 9, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], ["routerLink", "/karyawan", 1, "btn", "btn-light", "btn-sm"], [1, "bx", "bx-arrow-back"], [1, "mb-0"], [1, "bx", "me-1"], [1, "card"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "d-flex", "align-items-center"], ["novalidate", "", 3, "formGroup"], [1, "card-body", "placeholder-glow"], [1, "col-md-6", "mb-3"], [1, "placeholder", "col-4", "mb-1"], [1, "placeholder", "col-12", "rounded", 2, "height", "38px", "display", "block"], [1, "bx", "bx-error-circle", "me-2", "fs-5"], ["type", "button", 1, "btn-close", "ms-auto", 3, "click"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-lg-3"], [1, "card", "h-100"], [1, "card-body", "text-center", "d-flex", "flex-column", "align-items-center", "justify-content-center", "gap-3"], [2, "width", "120px", "height", "120px", "border-radius", "50%", "overflow", "hidden", "background", "#f0f0f0", "display", "flex", "align-items", "center", "justify-content", "center", "border", "2px dashed #ccc"], ["alt", "Foto Profil", 2, "width", "100%", "height", "100%", "object-fit", "cover", 3, "src"], [1, "bx", "bx-user", 2, "font-size", "3rem", "color", "#aaa"], ["for", "fotoInput", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "bx", "bx-upload", "me-1"], ["id", "fotoInput", "type", "file", "accept", "image/*", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", "ms-1"], [1, "text-muted"], [1, "col-lg-9"], [1, "card-header", "p-0", "border-bottom"], ["role", "tablist", 1, "nav", "nav-tabs", "card-header-tabs", "ms-0"], [1, "nav-item"], [1, "card-body"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["routerLink", "/karyawan", 1, "btn", "btn-secondary", "btn-sm", "px-4"], [1, "bx", "bx-x", "me-1"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "px-4", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", "ms-1", 3, "click"], [1, "bx", "bx-trash"], ["type", "button", 1, "nav-link", "px-3", "py-2", 3, "click"], [1, "bx", "me-1", 3, "ngClass"], [1, "col-md-6"], ["for", "namaLengkap", 1, "form-label"], [1, "text-danger"], ["id", "namaLengkap", "type", "text", "formControlName", "namaLengkap", "placeholder", "Nama lengkap karyawan", 1, "form-control"], [1, "invalid-feedback"], ["for", "tempatLahir", 1, "form-label"], ["id", "tempatLahir", "type", "text", "formControlName", "tempatLahir", "placeholder", "Kota kelahiran", 1, "form-control"], ["for", "tanggalLahir", 1, "form-label"], ["id", "tanggalLahir", "type", "date", "formControlName", "tanggalLahir", 1, "form-control"], [1, "form-label"], ["formControlName", "jenisKelamin", 1, "form-select"], [3, "value"], [1, "col-md-4"], ["formControlName", "golonganDarah", 1, "form-select"], ["value", ""], ["formControlName", "statusPerkawinan", 1, "form-select"], ["formControlName", "agama", 1, "form-select"], ["formControlName", "jenisIdentitas", 1, "form-select"], [1, "col-md-8"], ["for", "nomorIdentitas", 1, "form-label"], ["id", "nomorIdentitas", "type", "text", "formControlName", "nomorIdentitas", "placeholder", "Nomor KTP / SIM / Paspor", 1, "form-control"], ["for", "noTelepon", 1, "form-label"], ["id", "noTelepon", "type", "text", "formControlName", "noTelepon", "placeholder", "08xxxxxxxxxx", 1, "form-control"], ["formControlName", "zonaWaktu", 1, "form-select"], [1, "col-12"], ["for", "catatan", 1, "form-label"], ["id", "catatan", "rows", "3", "formControlName", "catatan", "placeholder", "Catatan tambahan...", 1, "form-control"], ["for", "alamatKtp", 1, "form-label"], ["id", "alamatKtp", "rows", "3", "formControlName", "alamatKtp", "placeholder", "Sesuai KTP...", 1, "form-control"], ["formControlName", "provinsiId", "placeholder", "-- Pilih Provinsi --", "searchPlaceholder", "Cari provinsi...", 3, "options"], ["formControlName", "kabupatenKotaId", "placeholder", "-- Pilih Kabupaten/Kota --", "searchPlaceholder", "Cari kabupaten/kota...", 3, "options", "disabled"], ["for", "alamatDomisili", 1, "form-label"], ["id", "alamatDomisili", "rows", "3", "formControlName", "alamatDomisili", "placeholder", "Alamat tempat tinggal saat ini...", 1, "form-control"], ["formControlName", "jenjangPendidikan", 1, "form-select"], ["for", "jurusan", 1, "form-label"], ["id", "jurusan", "type", "text", "formControlName", "jurusan", "placeholder", "Jurusan / Program studi", 1, "form-control"], ["for", "namaInstitusi", 1, "form-label"], ["id", "namaInstitusi", "type", "text", "formControlName", "namaInstitusi", "placeholder", "Universitas / Sekolah", 1, "form-control"], ["for", "tahunLulus", 1, "form-label"], ["id", "tahunLulus", "type", "number", "formControlName", "tahunLulus", "placeholder", "2020", "min", "1900", "max", "2100", 1, "form-control"], ["for", "nip", 1, "form-label"], ["id", "nip", "type", "text", "formControlName", "nip", "placeholder", "NIP unik", 1, "form-control"], ["formControlName", "statusKerja", 1, "form-select"], ["formControlName", "jabatanId", 1, "form-select"], ["formControlName", "divisiId", 1, "form-select"], ["for", "tglMulaiBekerja", 1, "form-label"], ["id", "tglMulaiBekerja", "type", "date", "formControlName", "tglMulaiBekerja", 1, "form-control"], ["for", "tglMulaiDapatCuti", 1, "form-label"], ["id", "tglMulaiDapatCuti", "type", "date", "formControlName", "tglMulaiDapatCuti", 1, "form-control"], ["for", "sisaCuti", 1, "form-label"], ["id", "sisaCuti", "type", "number", "formControlName", "sisaCuti", "min", "0", "placeholder", "0", 1, "form-control"], ["for", "tglCutiBeakhir", 1, "form-label"], ["id", "tglCutiBeakhir", "type", "date", "formControlName", "tglCutiBeakhir", 1, "form-control"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "email@perusahaan.com", 1, "form-control"], [1, "form-text", "text-muted"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Minimal 6 karakter", 1, "form-control"], ["for", "konfirmasiPassword", 1, "form-label"], ["id", "konfirmasiPassword", "type", "password", "formControlName", "konfirmasiPassword", "placeholder", "Ulangi kata sandi", 1, "form-control"], [1, "text-danger", "small", "mt-1"], [1, "bx", "bx-error-circle", "me-1"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bx", "bx-save", "me-1"]], template: function KaryawanFormComponent_Template(rf, ctx) {
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
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "a", 11);
        \u0275\u0275element(17, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h5", 13);
        \u0275\u0275element(19, "i", 14);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(21, KaryawanFormComponent_Conditional_21_Template, 4, 1, "div", 15);
        \u0275\u0275conditionalCreate(22, KaryawanFormComponent_Conditional_22_Template, 4, 1, "div", 16);
        \u0275\u0275conditionalCreate(23, KaryawanFormComponent_Conditional_23_Template, 35, 21, "form", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit" : "Tambah");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("bx-user-plus", !ctx.isEdit)("bx-edit", ctx.isEdit);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Edit Karyawan" : "Tambah Karyawan", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 23 : -1);
      }
    }, dependencies: [NgClass, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RouterLink, LayoutComponent, SearchableSelectComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanFormComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-form", standalone: true, imports: [NgClass, ReactiveFormsModule, RouterLink, LayoutComponent, SearchableSelectComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          <li class="breadcrumb-item active" aria-current="page">{{ isEdit ? 'Edit' : 'Tambah' }}</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="d-flex align-items-center gap-2 mb-3">\r
    <a routerLink="/karyawan" class="btn btn-light btn-sm"><i class="bx bx-arrow-back"></i></a>\r
    <h5 class="mb-0">\r
      <i class="bx me-1" [class.bx-user-plus]="!isEdit" [class.bx-edit]="isEdit"></i>\r
      {{ isEdit ? 'Edit Karyawan' : 'Tambah Karyawan' }}\r
    </h5>\r
  </div>\r
\r
  <!-- Skeleton -->\r
  @if (loading()) {\r
    <div class="card"><div class="card-body placeholder-glow">\r
      @for (i of [1,2,3,4,5,6]; track i) {\r
        <div class="col-md-6 mb-3">\r
          <span class="placeholder col-4 mb-1"></span>\r
          <span class="placeholder col-12 rounded" style="height:38px;display:block"></span>\r
        </div>\r
      }\r
    </div></div>\r
  }\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert">\r
      <i class="bx bx-error-circle me-2 fs-5"></i> {{ error() }}\r
      <button type="button" class="btn-close ms-auto" (click)="error.set('')"></button>\r
    </div>\r
  }\r
\r
  @if (!loading()) {\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\r
      <div class="row g-3">\r
\r
        <!-- \u2550\u2550 Kolom Kiri: Foto Profil \u2550\u2550 -->\r
        <div class="col-lg-3">\r
          <div class="card h-100">\r
            <div class="card-body text-center d-flex flex-column align-items-center justify-content-center gap-3">\r
              <div style="width:120px;height:120px;border-radius:50%;overflow:hidden;background:#f0f0f0;display:flex;align-items:center;justify-content:center;border:2px dashed #ccc;">\r
                @if (fotoPreview()) {\r
                  <img [src]="fotoPreview()!" alt="Foto Profil" style="width:100%;height:100%;object-fit:cover;" />\r
                } @else {\r
                  <i class="bx bx-user" style="font-size:3rem;color:#aaa"></i>\r
                }\r
              </div>\r
              <div>\r
                <label class="btn btn-outline-primary btn-sm" for="fotoInput">\r
                  <i class="bx bx-upload me-1"></i> Pilih Foto\r
                </label>\r
                <input id="fotoInput" type="file" accept="image/*" class="d-none" (change)="onFotoChange($event)" />\r
                @if (fotoPreview()) {\r
                  <button type="button" class="btn btn-outline-danger btn-sm ms-1" (click)="removeFoto()">\r
                    <i class="bx bx-trash"></i>\r
                  </button>\r
                }\r
              </div>\r
              <small class="text-muted">JPG/PNG, maks 2MB</small>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550 Kolom Kanan: Tab Form \u2550\u2550 -->\r
        <div class="col-lg-9">\r
          <div class="card">\r
            <div class="card-header p-0 border-bottom">\r
              <ul class="nav nav-tabs card-header-tabs ms-0" role="tablist">\r
                @for (tab of [\r
                  {id:'pribadi',     icon:'bx-user',       label:'Data Pribadi'},\r
                  {id:'alamat',      icon:'bx-map',        label:'Alamat'},\r
                  {id:'pendidikan',  icon:'bx-book',       label:'Pendidikan'},\r
                  {id:'kepegawaian', icon:'bx-briefcase',  label:'Kepegawaian'},\r
                  {id:'akun',        icon:'bx-lock',       label:'Akun'}\r
                ]; track tab.id) {\r
                  <li class="nav-item">\r
                    <button type="button" class="nav-link px-3 py-2"\r
                            [class.active]="activeTab() === tab.id"\r
                            (click)="setTab(tab.id)">\r
                      <i class="bx me-1" [ngClass]="tab.icon"></i>{{ tab.label }}\r
                    </button>\r
                  </li>\r
                }\r
              </ul>\r
            </div>\r
            <div class="card-body">\r
\r
              <!-- \u2500\u2500\u2500 Tab: Data Pribadi \u2500\u2500\u2500 -->\r
              @if (activeTab() === 'pribadi') {\r
                <div class="row g-3">\r
\r
                  <!-- Nama Lengkap -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="namaLengkap">Nama Lengkap <span class="text-danger">*</span></label>\r
                    <input id="namaLengkap" type="text" class="form-control"\r
                           [class.is-invalid]="f['namaLengkap'].invalid && f['namaLengkap'].touched"\r
                           formControlName="namaLengkap" placeholder="Nama lengkap karyawan" />\r
                    <div class="invalid-feedback">Nama lengkap wajib diisi.</div>\r
                  </div>\r
\r
                  <!-- Tempat Lahir -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="tempatLahir">Tempat Lahir</label>\r
                    <input id="tempatLahir" type="text" class="form-control"\r
                           formControlName="tempatLahir" placeholder="Kota kelahiran" />\r
                  </div>\r
\r
                  <!-- Tanggal Lahir -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="tanggalLahir">Tanggal Lahir</label>\r
                    <input id="tanggalLahir" type="date" class="form-control" formControlName="tanggalLahir" />\r
                  </div>\r
\r
                  <!-- Jenis Kelamin -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Jenis Kelamin <span class="text-danger">*</span></label>\r
                    <select class="form-select"\r
                            [class.is-invalid]="f['jenisKelamin'].invalid && f['jenisKelamin'].touched"\r
                            formControlName="jenisKelamin">\r
                      @for (opt of jenisKelaminOptions; track opt.value) {\r
                        <option [value]="opt.value">{{ opt.label }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Golongan Darah -->\r
                  <div class="col-md-4">\r
                    <label class="form-label">Golongan Darah</label>\r
                    <select class="form-select" formControlName="golonganDarah">\r
                      <option value="">-- Pilih --</option>\r
                      @for (g of golonganDarahOptions; track g) {\r
                        <option [value]="g">{{ golonganDarahLabels[g] }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Status Perkawinan -->\r
                  <div class="col-md-4">\r
                    <label class="form-label">Status Perkawinan</label>\r
                    <select class="form-select" formControlName="statusPerkawinan">\r
                      <option value="">-- Pilih --</option>\r
                      @for (opt of statusPerkawinanOptions; track opt.value) {\r
                        <option [value]="opt.value">{{ opt.label }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Agama -->\r
                  <div class="col-md-4">\r
                    <label class="form-label">Agama</label>\r
                    <select class="form-select" formControlName="agama">\r
                      <option value="">-- Pilih --</option>\r
                      @for (opt of agamaOptions; track opt.value) {\r
                        <option [value]="opt.value">{{ opt.label }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Jenis Identitas -->\r
                  <div class="col-md-4">\r
                    <label class="form-label">Jenis Identitas</label>\r
                    <select class="form-select" formControlName="jenisIdentitas">\r
                      <option value="">-- Pilih --</option>\r
                      @for (opt of jenisIdentitasOptions; track opt.value) {\r
                        <option [value]="opt.value">{{ opt.label }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Nomor Identitas -->\r
                  <div class="col-md-8">\r
                    <label class="form-label" for="nomorIdentitas">Nomor Identitas</label>\r
                    <input id="nomorIdentitas" type="text" class="form-control"\r
                           formControlName="nomorIdentitas" placeholder="Nomor KTP / SIM / Paspor" />\r
                  </div>\r
\r
                  <!-- No Telepon -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="noTelepon">Nomor Telepon</label>\r
                    <input id="noTelepon" type="text" class="form-control"\r
                           formControlName="noTelepon" placeholder="08xxxxxxxxxx" />\r
                  </div>\r
\r
                  <!-- Zona Waktu -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Zona Waktu <span class="text-danger">*</span></label>\r
                    <select class="form-select"\r
                            [class.is-invalid]="f['zonaWaktu'].invalid && f['zonaWaktu'].touched"\r
                            formControlName="zonaWaktu">\r
                      @for (z of zonaWaktuOptions; track z) {\r
                        <option [value]="z">{{ z }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Catatan -->\r
                  <div class="col-12">\r
                    <label class="form-label" for="catatan">Catatan</label>\r
                    <textarea id="catatan" class="form-control" rows="3"\r
                              formControlName="catatan" placeholder="Catatan tambahan..."></textarea>\r
                  </div>\r
\r
                </div>\r
              }\r
\r
              <!-- \u2500\u2500\u2500 Tab: Alamat \u2500\u2500\u2500 -->\r
              @if (activeTab() === 'alamat') {\r
                <div class="row g-3">\r
\r
                  <!-- Alamat KTP -->\r
                  <div class="col-12">\r
                    <label class="form-label" for="alamatKtp">Alamat KTP</label>\r
                    <textarea id="alamatKtp" class="form-control" rows="3"\r
                              formControlName="alamatKtp" placeholder="Sesuai KTP..."></textarea>\r
                  </div>\r
\r
                  <!-- Provinsi -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Provinsi</label>\r
                    <app-searchable-select\r
                      formControlName="provinsiId"\r
                      [options]="provinsiOptions()"\r
                      placeholder="-- Pilih Provinsi --"\r
                      searchPlaceholder="Cari provinsi...">\r
                    </app-searchable-select>\r
                  </div>\r
\r
                  <!-- Kabupaten / Kota -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Kabupaten / Kota</label>\r
                    <app-searchable-select\r
                      formControlName="kabupatenKotaId"\r
                      [options]="kabupatenKotaOptions()"\r
                      placeholder="-- Pilih Kabupaten/Kota --"\r
                      searchPlaceholder="Cari kabupaten/kota..."\r
                      [disabled]="kabupatenKotaList().length === 0">\r
                    </app-searchable-select>\r
                  </div>\r
\r
                  <!-- Alamat Domisili -->\r
                  <div class="col-12">\r
                    <label class="form-label" for="alamatDomisili">Alamat Domisili</label>\r
                    <textarea id="alamatDomisili" class="form-control" rows="3"\r
                              formControlName="alamatDomisili" placeholder="Alamat tempat tinggal saat ini..."></textarea>\r
                  </div>\r
\r
                </div>\r
              }\r
\r
              <!-- \u2500\u2500\u2500 Tab: Pendidikan \u2500\u2500\u2500 -->\r
              @if (activeTab() === 'pendidikan') {\r
                <div class="row g-3">\r
\r
                  <!-- Jenjang -->\r
                  <div class="col-md-4">\r
                    <label class="form-label">Jenjang Pendidikan</label>\r
                    <select class="form-select" formControlName="jenjangPendidikan">\r
                      <option value="">-- Pilih --</option>\r
                      @for (opt of jenjangOptions; track opt.value) {\r
                        <option [value]="opt.value">{{ opt.label }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Jurusan -->\r
                  <div class="col-md-8">\r
                    <label class="form-label" for="jurusan">Jurusan</label>\r
                    <input id="jurusan" type="text" class="form-control"\r
                           formControlName="jurusan" placeholder="Jurusan / Program studi" />\r
                  </div>\r
\r
                  <!-- Nama Institusi -->\r
                  <div class="col-md-8">\r
                    <label class="form-label" for="namaInstitusi">Nama Institusi Pendidikan</label>\r
                    <input id="namaInstitusi" type="text" class="form-control"\r
                           formControlName="namaInstitusi" placeholder="Universitas / Sekolah" />\r
                  </div>\r
\r
                  <!-- Tahun Lulus -->\r
                  <div class="col-md-4">\r
                    <label class="form-label" for="tahunLulus">Tahun Lulus</label>\r
                    <input id="tahunLulus" type="number" class="form-control"\r
                           formControlName="tahunLulus" placeholder="2020" min="1900" max="2100" />\r
                  </div>\r
\r
                </div>\r
              }\r
\r
              <!-- \u2500\u2500\u2500 Tab: Kepegawaian \u2500\u2500\u2500 -->\r
              @if (activeTab() === 'kepegawaian') {\r
                <div class="row g-3">\r
\r
                  <!-- NIP -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="nip">Nomor Induk Karyawan (NIP) <span class="text-danger">*</span></label>\r
                    <input id="nip" type="text" class="form-control"\r
                           [class.is-invalid]="f['nip'].invalid && f['nip'].touched"\r
                           formControlName="nip" placeholder="NIP unik" />\r
                    <div class="invalid-feedback">NIP wajib diisi, maksimal 20 karakter.</div>\r
                  </div>\r
\r
                  <!-- Status Kerja -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Status Kerja <span class="text-danger">*</span></label>\r
                    <select class="form-select"\r
                            [class.is-invalid]="f['statusKerja'].invalid && f['statusKerja'].touched"\r
                            formControlName="statusKerja">\r
                      @for (opt of statusKerjaOptions; track opt.value) {\r
                        <option [value]="opt.value">{{ opt.label }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Jabatan -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Jabatan</label>\r
                    <select class="form-select" formControlName="jabatanId">\r
                      <option [value]="null">-- Pilih Jabatan --</option>\r
                      @for (j of jabatanList(); track j.id) {\r
                        <option [value]="j.id">{{ j.namaJabatan }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Divisi -->\r
                  <div class="col-md-6">\r
                    <label class="form-label">Divisi</label>\r
                    <select class="form-select" formControlName="divisiId">\r
                      <option [value]="null">-- Pilih Divisi --</option>\r
                      @for (d of divisiList(); track d.id) {\r
                        <option [value]="d.id">{{ d.namaDivisi }}</option>\r
                      }\r
                    </select>\r
                  </div>\r
\r
                  <!-- Tgl Mulai Bekerja -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="tglMulaiBekerja">Tgl. Mulai Bekerja</label>\r
                    <input id="tglMulaiBekerja" type="date" class="form-control" formControlName="tglMulaiBekerja" />\r
                  </div>\r
\r
                  <!-- Tgl Mulai Dapat Cuti -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="tglMulaiDapatCuti">Tgl. Mulai Dapat Cuti</label>\r
                    <input id="tglMulaiDapatCuti" type="date" class="form-control" formControlName="tglMulaiDapatCuti" />\r
                  </div>\r
\r
                  <!-- Sisa Cuti -->\r
                  <div class="col-md-4">\r
                    <label class="form-label" for="sisaCuti">Sisa Cuti (hari)</label>\r
                    <input id="sisaCuti" type="number" class="form-control"\r
                           formControlName="sisaCuti" min="0" placeholder="0" />\r
                  </div>\r
\r
                  <!-- Tgl Cuti Berakhir -->\r
                  <div class="col-md-8">\r
                    <label class="form-label" for="tglCutiBeakhir">Tgl. Cuti Berakhir</label>\r
                    <input id="tglCutiBeakhir" type="date" class="form-control" formControlName="tglCutiBeakhir" />\r
                  </div>\r
\r
                </div>\r
              }\r
\r
              <!-- \u2500\u2500\u2500 Tab: Akun \u2500\u2500\u2500 -->\r
              @if (activeTab() === 'akun') {\r
                <div class="row g-3">\r
\r
                  <!-- Email -->\r
                  <div class="col-12">\r
                    <label class="form-label" for="email">Email <span class="text-danger">*</span></label>\r
                    <input id="email" type="email" class="form-control"\r
                           [class.is-invalid]="f['email'].invalid && f['email'].touched"\r
                           formControlName="email" placeholder="email@perusahaan.com" />\r
                    <div class="invalid-feedback">Email wajib diisi dengan format yang valid.</div>\r
                    <div class="form-text text-muted">Email ini digunakan sebagai username login.</div>\r
                  </div>\r
\r
                  <!-- Password -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="password">\r
                      Kata Sandi\r
                      @if (!isEdit) { <span class="text-danger">*</span> }\r
                      @if (isEdit) { <small class="text-muted">(kosongkan jika tidak ingin mengubah)</small> }\r
                    </label>\r
                    <input id="password" type="password" class="form-control"\r
                           [class.is-invalid]="f['password'].invalid && f['password'].touched"\r
                           formControlName="password" placeholder="Minimal 6 karakter" />\r
                    <div class="invalid-feedback">Minimal 6 karakter.</div>\r
                  </div>\r
\r
                  <!-- Konfirmasi Password -->\r
                  <div class="col-md-6">\r
                    <label class="form-label" for="konfirmasiPassword">\r
                      Ulangi Kata Sandi\r
                      @if (!isEdit) { <span class="text-danger">*</span> }\r
                    </label>\r
                    <input id="konfirmasiPassword" type="password" class="form-control"\r
                           [class.is-invalid]="(f['konfirmasiPassword'].invalid && f['konfirmasiPassword'].touched) || passwordMismatch"\r
                           formControlName="konfirmasiPassword" placeholder="Ulangi kata sandi" />\r
                    @if (passwordMismatch) {\r
                      <div class="text-danger small mt-1"><i class="bx bx-error-circle me-1"></i>Kata sandi tidak cocok.</div>\r
                    }\r
                  </div>\r
\r
                </div>\r
              }\r
\r
            </div><!-- card-body -->\r
          </div><!-- card -->\r
        </div><!-- col-lg-9 -->\r
\r
      </div><!-- row -->\r
\r
      <!-- Actions -->\r
      <div class="d-flex justify-content-end gap-2 mt-3">\r
        <a routerLink="/karyawan" class="btn btn-secondary btn-sm px-4">\r
          <i class="bx bx-x me-1"></i> Batal\r
        </a>\r
        <button type="submit" class="btn btn-primary btn-sm px-4" [disabled]="saving()">\r
          @if (saving()) {\r
            <span class="spinner-border spinner-border-sm me-1" role="status"></span>\r
            Menyimpan...\r
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
\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanFormComponent, { className: "KaryawanFormComponent", filePath: "src/app/features/karyawan/karyawan-form/karyawan-form.component.ts", lineNumber: 30 });
})();
export {
  KaryawanFormComponent
};
//# sourceMappingURL=chunk-MYG3IKR2.js.map
