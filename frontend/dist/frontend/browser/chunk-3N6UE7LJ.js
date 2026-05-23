import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  HttpClient,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/auth/company-register/company-register.component.ts
function CompanyRegisterComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 10);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function CompanyRegisterComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Nama lengkap tidak boleh kosong");
    \u0275\u0275elementEnd();
  }
}
function CompanyRegisterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Nama perusahaan tidak boleh kosong");
    \u0275\u0275elementEnd();
  }
}
function CompanyRegisterComponent_Conditional_66_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Jabatan tidak boleh kosong");
    \u0275\u0275elementEnd();
  }
}
function CompanyRegisterComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "label", 22);
    \u0275\u0275text(2, "Tulis Jabatan Anda");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 50);
    \u0275\u0275conditionalCreate(4, CompanyRegisterComponent_Conditional_66_Conditional_4_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("cr-field__input--err", ctx_r0.f["jabatanLainnya"].invalid && ctx_r0.f["jabatanLainnya"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.f["jabatanLainnya"].invalid && ctx_r0.f["jabatanLainnya"].touched ? 4 : -1);
  }
}
function CompanyRegisterComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Masukkan email yang valid");
    \u0275\u0275elementEnd();
  }
}
function CompanyRegisterComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Nomor WhatsApp tidak valid");
    \u0275\u0275elementEnd();
  }
}
function CompanyRegisterComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Password minimal 6 karakter");
    \u0275\u0275elementEnd();
  }
}
function CompanyRegisterComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
    \u0275\u0275text(1, " Memproses... ");
  }
}
function CompanyRegisterComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Daftar Sekarang ");
  }
}
var CompanyRegisterComponent = class _CompanyRegisterComponent {
  get f() {
    return this.form.controls;
  }
  constructor() {
    this.fb = inject(FormBuilder);
    this.http = inject(HttpClient);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = this.fb.group({
      namaLengkap: ["", [Validators.required, Validators.maxLength(100)]],
      namaPerusahaan: ["", [Validators.required, Validators.maxLength(150)]],
      jabatan: ["Owner", [Validators.required]],
      jabatanLainnya: [""],
      email: ["", [Validators.required, Validators.email]],
      whatsapp: ["", [Validators.required, Validators.pattern(/^[0-9+\-\s]{8,20}$/)]],
      zonaWaktu: ["WIB", [Validators.required]],
      fiturKebutuhan: [""],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.f["jabatan"].valueChanges.subscribe((val) => {
      const ctrl = this.f["jabatanLainnya"];
      if (val === "Lainnya") {
        ctrl.setValidators([Validators.required]);
      } else {
        ctrl.clearValidators();
        ctrl.setValue("");
      }
      ctrl.updateValueAndValidity();
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const jabatanFinal = this.form.value.jabatan === "Lainnya" ? this.form.value.jabatanLainnya ?? "" : this.form.value.jabatan ?? "";
    const body = __spreadProps(__spreadValues({}, this.form.value), {
      jabatan: jabatanFinal,
      namaDivisi: this.form.value.namaPerusahaan
    });
    this.http.post(`${environment.baseUrl}/auth/register/owner`, body).subscribe({
      next: (res) => {
        this.auth.saveSession(res.user);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        const msg = err?.data?.message ?? err?.message ?? "Registrasi gagal. Silakan coba lagi.";
        this.errorMessage.set(msg);
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function CompanyRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyRegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyRegisterComponent, selectors: [["app-company-register"]], decls: 117, vars: 24, consts: [[1, "cr-bg"], [1, "cr-nav"], [1, "cr-nav__brand"], [1, "material-icons", "cr-nav__icon"], [1, "cr-nav__name"], [1, "cr-nav__actions"], ["routerLink", "/auth/login", 1, "cr-nav__link"], ["href", "#", 1, "cr-nav__btn", "cr-nav__btn--outline"], ["href", "#", 1, "cr-nav__btn", "cr-nav__btn--solid"], [1, "cr-deco", "cr-deco--tl"], [1, "material-icons"], [1, "cr-deco", "cr-deco--bl"], [1, "cr-deco", "cr-deco--tr"], [1, "cr-deco", "cr-deco--br"], [1, "cr-main"], [1, "cr-card"], [1, "cr-card__title"], [1, "cr-card__sub"], [1, "cr-badge"], [1, "cr-alert"], ["novalidate", "", 1, "cr-form", 3, "ngSubmit", "formGroup"], [1, "cr-field"], [1, "cr-field__label"], ["type", "text", "formControlName", "namaLengkap", "placeholder", "Masukkan nama lengkap Anda", 1, "cr-field__input"], [1, "cr-field__error"], ["type", "text", "formControlName", "namaPerusahaan", "placeholder", "Nama perusahaan / instansi Anda", 1, "cr-field__input"], ["formControlName", "jabatan", 1, "cr-field__input", "cr-field__input--select"], ["value", "Owner"], ["value", "CEO"], ["value", "Direktur"], ["value", "Manajer HR"], ["value", "Supervisor"], ["value", "Lainnya"], [1, "cr-field", "cr-field--animate"], ["type", "email", "formControlName", "email", "placeholder", "contoh@perusahaan.com", "autocomplete", "email", 1, "cr-field__input"], ["type", "tel", "formControlName", "whatsapp", "placeholder", "Contoh: 08123456789", 1, "cr-field__input"], ["formControlName", "zonaWaktu", 1, "cr-field__input", "cr-field__input--select"], ["value", "WIB"], ["value", "WITA"], ["value", "WIT"], [1, "cr-field__pw-wrap"], ["formControlName", "password", "placeholder", "Minimal 6 karakter", "autocomplete", "new-password", 1, "cr-field__input", 3, "type"], ["type", "button", "tabindex", "-1", 1, "cr-field__eye", 3, "click"], [2, "font-weight", "400", "text-transform", "none", "letter-spacing", "0", "color", "#64748b"], ["formControlName", "fiturKebutuhan", "placeholder", "Ceritakan fitur apa yang Anda butuhkan...", "rows", "3", 1, "cr-field__input", "cr-field__input--textarea"], [1, "cr-tos"], ["href", "#"], ["type", "submit", 1, "cr-btn", 3, "disabled"], [1, "cr-login-link"], ["routerLink", "/auth/login"], ["type", "text", "formControlName", "jabatanLainnya", "placeholder", "Contoh: Kepala Divisi, Admin, dll.", 1, "cr-field__input"], [1, "cr-spinner"]], template: function CompanyRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "fingerprint");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Absensi");
        \u0275\u0275elementStart(7, "strong");
        \u0275\u0275text(8, "Kerja");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 7);
        \u0275\u0275text(13, "Hubungi Kami");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 8);
        \u0275\u0275text(15, "Jadwalkan Demo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
        \u0275\u0275text(18, "alarm");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 11)(20, "span", 10);
        \u0275\u0275text(21, "assignment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12)(23, "span", 10);
        \u0275\u0275text(24, "calendar_month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 13)(26, "span", 10);
        \u0275\u0275text(27, "schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "main", 14)(29, "div", 15)(30, "h1", 16);
        \u0275\u0275text(31, "Registrasi ");
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "Perusahaan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "p", 17);
        \u0275\u0275text(35, " Daftarkan perusahaan Anda untuk mulai menggunakan AbsensiKerja. ");
        \u0275\u0275elementStart(36, "span", 18);
        \u0275\u0275text(37, "GRATIS 14 Hari!");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(38, CompanyRegisterComponent_Conditional_38_Template, 4, 1, "div", 19);
        \u0275\u0275elementStart(39, "form", 20);
        \u0275\u0275listener("ngSubmit", function CompanyRegisterComponent_Template_form_ngSubmit_39_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(40, "div", 21)(41, "label", 22);
        \u0275\u0275text(42, "Nama Lengkap");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 23);
        \u0275\u0275conditionalCreate(44, CompanyRegisterComponent_Conditional_44_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 21)(46, "label", 22);
        \u0275\u0275text(47, "Nama Perusahaan");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 25);
        \u0275\u0275conditionalCreate(49, CompanyRegisterComponent_Conditional_49_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 21)(51, "label", 22);
        \u0275\u0275text(52, "Jabatan Anda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "select", 26)(54, "option", 27);
        \u0275\u0275text(55, "Owner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "option", 28);
        \u0275\u0275text(57, "CEO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "option", 29);
        \u0275\u0275text(59, "Direktur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "option", 30);
        \u0275\u0275text(61, "Manajer HR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "option", 31);
        \u0275\u0275text(63, "Supervisor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "option", 32);
        \u0275\u0275text(65, "Lainnya");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(66, CompanyRegisterComponent_Conditional_66_Template, 5, 3, "div", 33);
        \u0275\u0275elementStart(67, "div", 21)(68, "label", 22);
        \u0275\u0275text(69, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "input", 34);
        \u0275\u0275conditionalCreate(71, CompanyRegisterComponent_Conditional_71_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 21)(73, "label", 22);
        \u0275\u0275text(74, "Nomor WhatsApp");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "input", 35);
        \u0275\u0275conditionalCreate(76, CompanyRegisterComponent_Conditional_76_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 21)(78, "label", 22);
        \u0275\u0275text(79, "Zona Waktu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "select", 36)(81, "option", 37);
        \u0275\u0275text(82, "WIB (UTC+7) \u2013 Waktu Indonesia Barat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "option", 38);
        \u0275\u0275text(84, "WITA (UTC+8) \u2013 Waktu Indonesia Tengah");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "option", 39);
        \u0275\u0275text(86, "WIT (UTC+9) \u2013 Waktu Indonesia Timur");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 21)(88, "label", 22);
        \u0275\u0275text(89, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 40);
        \u0275\u0275element(91, "input", 41);
        \u0275\u0275elementStart(92, "button", 42);
        \u0275\u0275listener("click", function CompanyRegisterComponent_Template_button_click_92_listener() {
          return ctx.showPassword.set(!ctx.showPassword());
        });
        \u0275\u0275elementStart(93, "span", 10);
        \u0275\u0275text(94);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(95, CompanyRegisterComponent_Conditional_95_Template, 2, 0, "span", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 21)(97, "label", 22);
        \u0275\u0275text(98, "Kebutuhan Fitur ");
        \u0275\u0275elementStart(99, "span", 43);
        \u0275\u0275text(100, "(opsional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(101, "textarea", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "p", 45);
        \u0275\u0275text(103, " Dengan mengklik tombol registrasi, Anda menyetujui ");
        \u0275\u0275elementStart(104, "a", 46);
        \u0275\u0275text(105, "Syarat & Ketentuan");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, " dan ");
        \u0275\u0275elementStart(107, "a", 46);
        \u0275\u0275text(108, "Kebijakan Privasi");
        \u0275\u0275elementEnd();
        \u0275\u0275text(109, " AbsensiKerja. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "button", 47);
        \u0275\u0275conditionalCreate(111, CompanyRegisterComponent_Conditional_111_Template, 2, 0)(112, CompanyRegisterComponent_Conditional_112_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "p", 48);
        \u0275\u0275text(114, " Sudah punya akun? ");
        \u0275\u0275elementStart(115, "a", 49);
        \u0275\u0275text(116, "Login di sini");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(38);
        \u0275\u0275conditional(ctx.errorMessage() ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("cr-field__input--err", ctx.f["namaLengkap"].invalid && ctx.f["namaLengkap"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["namaLengkap"].invalid && ctx.f["namaLengkap"].touched ? 44 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("cr-field__input--err", ctx.f["namaPerusahaan"].invalid && ctx.f["namaPerusahaan"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["namaPerusahaan"].invalid && ctx.f["namaPerusahaan"].touched ? 49 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("cr-field__input--err", ctx.f["jabatan"].invalid && ctx.f["jabatan"].touched);
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.f["jabatan"].value === "Lainnya" ? 66 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("cr-field__input--err", ctx.f["email"].invalid && ctx.f["email"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["email"].invalid && ctx.f["email"].touched ? 71 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("cr-field__input--err", ctx.f["whatsapp"].invalid && ctx.f["whatsapp"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["whatsapp"].invalid && ctx.f["whatsapp"].touched ? 76 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275classProp("cr-field__input--err", ctx.f["password"].invalid && ctx.f["password"].touched);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility" : "visibility_off");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["password"].invalid && ctx.f["password"].touched ? 95 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 111 : 112);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: [`@charset "UTF-8";


[_nghost-%COMP%] {
  display: block;
}
.cr-bg[_ngcontent-%COMP%] {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  background-image:
    radial-gradient(
      ellipse 60% 50% at 15% 35%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 70%),
    radial-gradient(
      ellipse 50% 60% at 85% 75%,
      rgba(16, 185, 129, 0.12) 0%,
      transparent 70%),
    radial-gradient(
      ellipse 40% 40% at 50% 100%,
      rgba(139, 92, 246, 0.08) 0%,
      transparent 60%);
  font-family: inherit;
  position: relative;
  overflow: hidden;
}
.cr-nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 2.5rem;
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
}
.cr-nav__brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 1.1rem;
  color: #f1f5f9;
  text-decoration: none;
}
.cr-nav__icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  border-radius: 8px;
  padding: 0.3rem;
  font-size: 1.3rem;
  color: #fff;
}
.cr-nav__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.cr-nav__link[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.cr-nav__link[_ngcontent-%COMP%]:hover {
  color: #a5b4fc;
}
.cr-nav__btn[_ngcontent-%COMP%] {
  font-size: 0.83rem;
  font-weight: 600;
  padding: 0.42rem 1.1rem;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s;
}
.cr-nav__btn--outline[_ngcontent-%COMP%] {
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
}
.cr-nav__btn--outline[_ngcontent-%COMP%]:hover {
  border-color: #a5b4fc;
  color: #a5b4fc;
}
.cr-nav__btn--solid[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #fff;
  border: none;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.cr-nav__btn--solid[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.cr-deco[_ngcontent-%COMP%] {
  position: absolute;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  padding: 0.9rem;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  z-index: 1;
  transition: transform 0.3s ease;
}
.cr-deco[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: rgba(165, 180, 252, 0.7);
  display: block;
}
.cr-deco--tl[_ngcontent-%COMP%] {
  top: 140px;
  left: 9%;
  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;
}
.cr-deco--bl[_ngcontent-%COMP%] {
  bottom: 140px;
  left: 7%;
  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite reverse;
}
.cr-deco--tr[_ngcontent-%COMP%] {
  top: 120px;
  right: 8%;
  animation: _ngcontent-%COMP%_float 7s ease-in-out infinite 0.5s;
}
.cr-deco--br[_ngcontent-%COMP%] {
  bottom: 160px;
  right: 10%;
  animation: _ngcontent-%COMP%_float 5s ease-in-out infinite 1s;
}
@keyframes _ngcontent-%COMP%_float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.cr-main[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 3rem;
  position: relative;
  z-index: 2;
}
.cr-card[_ngcontent-%COMP%] {
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  padding: 2.5rem 2.25rem;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.08), 0 32px 64px rgba(0, 0, 0, 0.5);
}
.cr-card__title[_ngcontent-%COMP%] {
  font-size: 1.6rem;
  font-weight: 800;
  color: #f1f5f9;
  text-align: center;
  margin: 0 0 0.4rem;
}
.cr-card__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #818cf8,
      #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cr-card__sub[_ngcontent-%COMP%] {
  text-align: center;
  color: #64748b;
  font-size: 0.86rem;
  margin: 0 0 1.75rem;
  line-height: 1.5;
}
.cr-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background:
    linear-gradient(
      135deg,
      #f97316,
      #ea580c);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  vertical-align: middle;
  margin-left: 0.3rem;
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.35);
}
.cr-alert[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
}
.cr-alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.cr-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.cr-field[_ngcontent-%COMP%] {
  position: relative;
}
.cr-field--animate[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fieldSlideDown 0.25s ease;
}
.cr-field__input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #0f172a;
  border: 1.5px solid #334155;
  border-radius: 10px;
  color: #f1f5f9;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.cr-field__input[_ngcontent-%COMP%]::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.cr-field__input[_ngcontent-%COMP%]::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.cr-field__input[_ngcontent-%COMP%]::-moz-placeholder {
  color: rgba(255, 255, 255, 0.35);
  opacity: 1;
}
.cr-field__input[_ngcontent-%COMP%]:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.cr-field__input--err[_ngcontent-%COMP%] {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.cr-field__input--select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
  cursor: pointer;
}
.cr-field__input--select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #1e293b;
  color: #f1f5f9;
}
.cr-field__input--textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 90px;
}
.cr-field__pw-wrap[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.cr-field__pw-wrap[_ngcontent-%COMP%]   .cr-field__input[_ngcontent-%COMP%] {
  padding-right: 2.8rem;
  width: 100%;
}
.cr-field__eye[_ngcontent-%COMP%] {
  position: absolute;
  right: 0.7rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #475569;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  transition: color 0.2s;
}
.cr-field__eye[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1.1rem;
}
.cr-field__eye[_ngcontent-%COMP%]:hover {
  color: #94a3b8;
}
.cr-field__label[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.3rem;
  display: block;
}
.cr-field__error[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.76rem;
  color: #f87171;
  margin-top: 0.3rem;
}
.cr-divider[_ngcontent-%COMP%] {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 0.25rem 0;
}
.cr-tos[_ngcontent-%COMP%] {
  font-size: 0.79rem;
  color: #475569;
  text-align: center;
  margin: 0.1rem 0 0;
  line-height: 1.6;
}
.cr-tos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #818cf8;
  text-decoration: none;
}
.cr-tos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
  color: #a5b4fc;
}
.cr-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.88rem;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition:
    opacity 0.2s,
    transform 0.15s,
    box-shadow 0.2s;
  margin-top: 0.5rem;
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.4);
  letter-spacing: 0.2px;
}
.cr-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.5);
}
.cr-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.cr-spinner[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes _ngcontent-%COMP%_fieldSlideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.cr-login-link[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  margin: 1.25rem 0 0;
}
.cr-login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #818cf8;
  font-weight: 600;
  text-decoration: none;
}
.cr-login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #a5b4fc;
  text-decoration: underline;
}
@media (max-width: 600px) {
  .cr-nav[_ngcontent-%COMP%] {
    padding: 0.8rem 1.2rem;
  }
  .cr-nav__btn[_ngcontent-%COMP%] {
    display: none;
  }
  .cr-deco[_ngcontent-%COMP%] {
    display: none;
  }
  .cr-card[_ngcontent-%COMP%] {
    padding: 1.75rem 1.25rem;
    border-radius: 16px;
  }
  .cr-card__title[_ngcontent-%COMP%] {
    font-size: 1.35rem;
  }
}
/*# sourceMappingURL=company-register.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyRegisterComponent, [{
    type: Component,
    args: [{ selector: "app-company-register", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<div class="cr-bg">\r
\r
  <!-- \u2500\u2500 Navbar \u2500\u2500 -->\r
  <header class="cr-nav">\r
    <div class="cr-nav__brand">\r
      <span class="material-icons cr-nav__icon">fingerprint</span>\r
      <span class="cr-nav__name">Absensi<strong>Kerja</strong></span>\r
    </div>\r
    <div class="cr-nav__actions">\r
      <a routerLink="/auth/login" class="cr-nav__link">Login</a>\r
      <a href="#" class="cr-nav__btn cr-nav__btn--outline">Hubungi Kami</a>\r
      <a href="#" class="cr-nav__btn cr-nav__btn--solid">Jadwalkan Demo</a>\r
    </div>\r
  </header>\r
\r
  <!-- \u2500\u2500 Decorative floating icons \u2500\u2500 -->\r
  <div class="cr-deco cr-deco--tl">\r
    <span class="material-icons">alarm</span>\r
  </div>\r
  <div class="cr-deco cr-deco--bl">\r
    <span class="material-icons">assignment</span>\r
  </div>\r
  <div class="cr-deco cr-deco--tr">\r
    <span class="material-icons">calendar_month</span>\r
  </div>\r
  <div class="cr-deco cr-deco--br">\r
    <span class="material-icons">schedule</span>\r
  </div>\r
\r
  <!-- \u2500\u2500 Form Card \u2500\u2500 -->\r
  <main class="cr-main">\r
    <div class="cr-card">\r
\r
      <h1 class="cr-card__title">Registrasi <span>Perusahaan</span></h1>\r
      <p class="cr-card__sub">\r
        Daftarkan perusahaan Anda untuk mulai menggunakan AbsensiKerja.\r
        <span class="cr-badge">GRATIS 14 Hari!</span>\r
      </p>\r
\r
      <!-- Error -->\r
      @if (errorMessage()) {\r
        <div class="cr-alert">\r
          <span class="material-icons">warning_amber</span>\r
          {{ errorMessage() }}\r
        </div>\r
      }\r
\r
      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="cr-form">\r
\r
        <!-- Nama Lengkap -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Nama Lengkap</label>\r
          <input\r
            type="text"\r
            class="cr-field__input"\r
            [class.cr-field__input--err]="f['namaLengkap'].invalid && f['namaLengkap'].touched"\r
            formControlName="namaLengkap"\r
            placeholder="Masukkan nama lengkap Anda"\r
          />\r
          @if (f['namaLengkap'].invalid && f['namaLengkap'].touched) {\r
            <span class="cr-field__error">Nama lengkap tidak boleh kosong</span>\r
          }\r
        </div>\r
\r
        <!-- Nama Perusahaan -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Nama Perusahaan</label>\r
          <input\r
            type="text"\r
            class="cr-field__input"\r
            [class.cr-field__input--err]="f['namaPerusahaan'].invalid && f['namaPerusahaan'].touched"\r
            formControlName="namaPerusahaan"\r
            placeholder="Nama perusahaan / instansi Anda"\r
          />\r
          @if (f['namaPerusahaan'].invalid && f['namaPerusahaan'].touched) {\r
            <span class="cr-field__error">Nama perusahaan tidak boleh kosong</span>\r
          }\r
        </div>\r
\r
        <!-- Jabatan (dropdown) -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Jabatan Anda</label>\r
          <select\r
            class="cr-field__input cr-field__input--select"\r
            [class.cr-field__input--err]="f['jabatan'].invalid && f['jabatan'].touched"\r
            formControlName="jabatan"\r
          >\r
            <option value="Owner">Owner</option>\r
            <option value="CEO">CEO</option>\r
            <option value="Direktur">Direktur</option>\r
            <option value="Manajer HR">Manajer HR</option>\r
            <option value="Supervisor">Supervisor</option>\r
            <option value="Lainnya">Lainnya</option>\r
          </select>\r
        </div>\r
\r
        <!-- Jabatan Lainnya (free text) -->\r
        @if (f['jabatan'].value === 'Lainnya') {\r
          <div class="cr-field cr-field--animate">\r
            <label class="cr-field__label">Tulis Jabatan Anda</label>\r
            <input\r
              type="text"\r
              class="cr-field__input"\r
              [class.cr-field__input--err]="f['jabatanLainnya'].invalid && f['jabatanLainnya'].touched"\r
              formControlName="jabatanLainnya"\r
              placeholder="Contoh: Kepala Divisi, Admin, dll."\r
            />\r
            @if (f['jabatanLainnya'].invalid && f['jabatanLainnya'].touched) {\r
              <span class="cr-field__error">Jabatan tidak boleh kosong</span>\r
            }\r
          </div>\r
        }\r
\r
        <!-- Email -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Email</label>\r
          <input\r
            type="email"\r
            class="cr-field__input"\r
            [class.cr-field__input--err]="f['email'].invalid && f['email'].touched"\r
            formControlName="email"\r
            placeholder="contoh@perusahaan.com"\r
            autocomplete="email"\r
          />\r
          @if (f['email'].invalid && f['email'].touched) {\r
            <span class="cr-field__error">Masukkan email yang valid</span>\r
          }\r
        </div>\r
\r
        <!-- WhatsApp -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Nomor WhatsApp</label>\r
          <input\r
            type="tel"\r
            class="cr-field__input"\r
            [class.cr-field__input--err]="f['whatsapp'].invalid && f['whatsapp'].touched"\r
            formControlName="whatsapp"\r
            placeholder="Contoh: 08123456789"\r
          />\r
          @if (f['whatsapp'].invalid && f['whatsapp'].touched) {\r
            <span class="cr-field__error">Nomor WhatsApp tidak valid</span>\r
          }\r
        </div>\r
\r
        <!-- Zona Waktu (dropdown) -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Zona Waktu</label>\r
          <select\r
            class="cr-field__input cr-field__input--select"\r
            formControlName="zonaWaktu"\r
          >\r
            <option value="WIB">WIB (UTC+7) \u2013 Waktu Indonesia Barat</option>\r
            <option value="WITA">WITA (UTC+8) \u2013 Waktu Indonesia Tengah</option>\r
            <option value="WIT">WIT (UTC+9) \u2013 Waktu Indonesia Timur</option>\r
          </select>\r
        </div>\r
\r
        <!-- Password -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Password</label>\r
          <div class="cr-field__pw-wrap">\r
            <input\r
              [type]="showPassword() ? 'text' : 'password'"\r
              class="cr-field__input"\r
              [class.cr-field__input--err]="f['password'].invalid && f['password'].touched"\r
              formControlName="password"\r
              placeholder="Minimal 6 karakter"\r
              autocomplete="new-password"\r
            />\r
            <button type="button" class="cr-field__eye" (click)="showPassword.set(!showPassword())" tabindex="-1">\r
              <span class="material-icons">{{ showPassword() ? 'visibility' : 'visibility_off' }}</span>\r
            </button>\r
          </div>\r
          @if (f['password'].invalid && f['password'].touched) {\r
            <span class="cr-field__error">Password minimal 6 karakter</span>\r
          }\r
        </div>\r
\r
        <!-- Kebutuhan Fitur (textarea) -->\r
        <div class="cr-field">\r
          <label class="cr-field__label">Kebutuhan Fitur <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#64748b">(opsional)</span></label>\r
          <textarea\r
            class="cr-field__input cr-field__input--textarea"\r
            formControlName="fiturKebutuhan"\r
            placeholder="Ceritakan fitur apa yang Anda butuhkan..."\r
            rows="3"\r
          ></textarea>\r
        </div>\r
\r
        <!-- ToS notice -->\r
        <p class="cr-tos">\r
          Dengan mengklik tombol registrasi, Anda menyetujui\r
          <a href="#">Syarat &amp; Ketentuan</a> dan\r
          <a href="#">Kebijakan Privasi</a> AbsensiKerja.\r
        </p>\r
\r
        <!-- Submit -->\r
        <button type="submit" class="cr-btn" [disabled]="loading()">\r
          @if (loading()) {\r
            <span class="cr-spinner"></span> Memproses...\r
          } @else {\r
            Daftar Sekarang\r
          }\r
        </button>\r
\r
      </form>\r
\r
      <p class="cr-login-link">\r
        Sudah punya akun? <a routerLink="/auth/login">Login di sini</a>\r
      </p>\r
\r
    </div>\r
  </main>\r
\r
</div>\r
`, styles: [`@charset "UTF-8";

/* src/app/features/auth/company-register/company-register.component.scss */
:host {
  display: block;
}
.cr-bg {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  background-image:
    radial-gradient(
      ellipse 60% 50% at 15% 35%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 70%),
    radial-gradient(
      ellipse 50% 60% at 85% 75%,
      rgba(16, 185, 129, 0.12) 0%,
      transparent 70%),
    radial-gradient(
      ellipse 40% 40% at 50% 100%,
      rgba(139, 92, 246, 0.08) 0%,
      transparent 60%);
  font-family: inherit;
  position: relative;
  overflow: hidden;
}
.cr-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 2.5rem;
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
}
.cr-nav__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 1.1rem;
  color: #f1f5f9;
  text-decoration: none;
}
.cr-nav__icon {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  border-radius: 8px;
  padding: 0.3rem;
  font-size: 1.3rem;
  color: #fff;
}
.cr-nav__actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.cr-nav__link {
  font-size: 0.88rem;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.cr-nav__link:hover {
  color: #a5b4fc;
}
.cr-nav__btn {
  font-size: 0.83rem;
  font-weight: 600;
  padding: 0.42rem 1.1rem;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s;
}
.cr-nav__btn--outline {
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
}
.cr-nav__btn--outline:hover {
  border-color: #a5b4fc;
  color: #a5b4fc;
}
.cr-nav__btn--solid {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #fff;
  border: none;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.cr-nav__btn--solid:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.cr-deco {
  position: absolute;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 16px;
  padding: 0.9rem;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  z-index: 1;
  transition: transform 0.3s ease;
}
.cr-deco .material-icons {
  font-size: 2rem;
  color: rgba(165, 180, 252, 0.7);
  display: block;
}
.cr-deco--tl {
  top: 140px;
  left: 9%;
  animation: float 6s ease-in-out infinite;
}
.cr-deco--bl {
  bottom: 140px;
  left: 7%;
  animation: float 8s ease-in-out infinite reverse;
}
.cr-deco--tr {
  top: 120px;
  right: 8%;
  animation: float 7s ease-in-out infinite 0.5s;
}
.cr-deco--br {
  bottom: 160px;
  right: 10%;
  animation: float 5s ease-in-out infinite 1s;
}
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.cr-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 3rem;
  position: relative;
  z-index: 2;
}
.cr-card {
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  padding: 2.5rem 2.25rem;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.08), 0 32px 64px rgba(0, 0, 0, 0.5);
}
.cr-card__title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #f1f5f9;
  text-align: center;
  margin: 0 0 0.4rem;
}
.cr-card__title span {
  background:
    linear-gradient(
      90deg,
      #818cf8,
      #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cr-card__sub {
  text-align: center;
  color: #64748b;
  font-size: 0.86rem;
  margin: 0 0 1.75rem;
  line-height: 1.5;
}
.cr-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background:
    linear-gradient(
      135deg,
      #f97316,
      #ea580c);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  vertical-align: middle;
  margin-left: 0.3rem;
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.35);
}
.cr-alert {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
}
.cr-alert .material-icons {
  font-size: 1rem;
}
.cr-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.cr-field {
  position: relative;
}
.cr-field--animate {
  animation: fieldSlideDown 0.25s ease;
}
.cr-field__input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #0f172a;
  border: 1.5px solid #334155;
  border-radius: 10px;
  color: #f1f5f9;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.cr-field__input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.cr-field__input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.cr-field__input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.35);
  opacity: 1;
}
.cr-field__input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.cr-field__input--err {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.cr-field__input--select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
  cursor: pointer;
}
.cr-field__input--select option {
  background: #1e293b;
  color: #f1f5f9;
}
.cr-field__input--textarea {
  resize: vertical;
  min-height: 90px;
}
.cr-field__pw-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.cr-field__pw-wrap .cr-field__input {
  padding-right: 2.8rem;
  width: 100%;
}
.cr-field__eye {
  position: absolute;
  right: 0.7rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #475569;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  transition: color 0.2s;
}
.cr-field__eye .material-icons {
  font-size: 1.1rem;
}
.cr-field__eye:hover {
  color: #94a3b8;
}
.cr-field__label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.3rem;
  display: block;
}
.cr-field__error {
  display: block;
  font-size: 0.76rem;
  color: #f87171;
  margin-top: 0.3rem;
}
.cr-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 0.25rem 0;
}
.cr-tos {
  font-size: 0.79rem;
  color: #475569;
  text-align: center;
  margin: 0.1rem 0 0;
  line-height: 1.6;
}
.cr-tos a {
  color: #818cf8;
  text-decoration: none;
}
.cr-tos a:hover {
  text-decoration: underline;
  color: #a5b4fc;
}
.cr-btn {
  width: 100%;
  padding: 0.88rem;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition:
    opacity 0.2s,
    transform 0.15s,
    box-shadow 0.2s;
  margin-top: 0.5rem;
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.4);
  letter-spacing: 0.2px;
}
.cr-btn:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.5);
}
.cr-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.cr-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes fieldSlideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.cr-login-link {
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  margin: 1.25rem 0 0;
}
.cr-login-link a {
  color: #818cf8;
  font-weight: 600;
  text-decoration: none;
}
.cr-login-link a:hover {
  color: #a5b4fc;
  text-decoration: underline;
}
@media (max-width: 600px) {
  .cr-nav {
    padding: 0.8rem 1.2rem;
  }
  .cr-nav__btn {
    display: none;
  }
  .cr-deco {
    display: none;
  }
  .cr-card {
    padding: 1.75rem 1.25rem;
    border-radius: 16px;
  }
  .cr-card__title {
    font-size: 1.35rem;
  }
}
/*# sourceMappingURL=company-register.component.css.map */
`] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyRegisterComponent, { className: "CompanyRegisterComponent", filePath: "src/app/features/auth/company-register/company-register.component.ts", lineNumber: 16 });
})();
export {
  CompanyRegisterComponent
};
//# sourceMappingURL=chunk-3N6UE7LJ.js.map
