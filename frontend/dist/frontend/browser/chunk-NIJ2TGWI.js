import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx;
    \u0275\u0275styleProp("background", v_r1.ok ? "#f0fdf4" : "#fef2f2")("color", v_r1.ok ? "#166534" : "#991b1b")("border", "1px solid " + (v_r1.ok ? "#bbf7d0" : "#fecaca"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.ok ? "check_circle" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r1.msg, " ");
  }
}
function LoginComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 34);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage(), " ");
  }
}
function LoginComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Email tidak boleh kosong");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Password minimal 6 karakter");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
    \u0275\u0275text(1, " Memproses... ");
  }
}
function LoginComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Masuk Sekarang ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.http = inject(HttpClient);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
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
    this.verifiedInfo = signal(null, ...ngDevMode ? [{ debugName: "verifiedInfo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    const qp = this.route.snapshot.queryParamMap;
    const verified = qp.get("verified");
    if (verified === "success") {
      this.verifiedInfo.set({ ok: true, msg: "Email Anda berhasil diverifikasi. Silakan login." });
    } else if (verified === "failed") {
      this.verifiedInfo.set({ ok: false, msg: qp.get("message") ?? "Verifikasi email gagal." });
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    this.http.post(`${environment.baseUrl}/auth/login`, this.form.value).subscribe({
      next: (res) => {
        this.auth.saveSession(res.user);
        const role = res.user?.role;
        const target = role === "KARYAWAN" ? "/absensi" : "/dashboard";
        this.router.navigate([target]);
      },
      error: (err) => {
        const msg = err?.data?.message ?? err?.message ?? "Login gagal, periksa kembali kredensial Anda.";
        this.errorMessage.set(msg);
        this.loading.set(false);
      }
    });
  }
  get f() {
    return this.form.controls;
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 89, vars: 13, consts: [[1, "lp-bg"], [1, "lp-container"], [1, "lp-left"], [1, "lp-left__inner"], [1, "lp-logo"], [1, "lp-logo__icon", "material-icons"], [1, "lp-logo__text"], [1, "lp-left__headline"], [1, "lp-left__accent"], [1, "lp-left__desc"], [1, "lp-features"], [1, "lp-features__item"], [1, "material-icons", "lp-features__icon"], [1, "lp-testimonial"], [1, "lp-testimonial__text"], [1, "lp-testimonial__author"], ["src", "assets/images/avatars/default.png", "alt", "Avatar", "onerror", "this.src='https://ui-avatars.com/api/?name=Nurul+Karlina&background=1e40af&color=fff&size=40'", 1, "lp-testimonial__avatar"], [1, "lp-blob", "lp-blob--1"], [1, "lp-blob", "lp-blob--2"], [1, "lp-right"], [1, "lp-form-header"], [1, "lp-form-header__title"], [1, "lp-form-header__sub"], [1, "lp-alert", 3, "background", "color", "border"], [1, "lp-alert"], ["novalidate", "", 1, "lp-form", 3, "ngSubmit", "formGroup"], [1, "lp-field"], ["for", "username", 1, "lp-field__label"], ["id", "username", "type", "email", "formControlName", "username", "placeholder", "contoh@perusahaan.com", "autocomplete", "email", 1, "lp-field__input"], [1, "lp-field__error"], ["for", "password", 1, "lp-field__label"], [1, "lp-field__pw-wrap"], ["id", "password", "formControlName", "password", "placeholder", "Minimal 6 karakter", "autocomplete", "current-password", 1, "lp-field__input", 3, "type"], ["type", "button", "tabindex", "-1", 1, "lp-field__eye", 3, "click"], [1, "material-icons"], [1, "lp-options"], [1, "lp-checkbox"], ["type", "checkbox"], ["href", "#", 1, "lp-options__forgot"], ["type", "submit", 1, "lp-btn", "lp-btn--primary", 3, "disabled"], [1, "lp-or"], ["type", "button", 1, "lp-btn", "lp-btn--google"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "fill", "#4285F4"], ["d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "fill", "#34A853"], ["d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z", "fill", "#FBBC05"], ["d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "fill", "#EA4335"], [1, "lp-register"], ["routerLink", "/auth/register"], [1, "lp-spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "work_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "AbsensiKerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h1", 7);
        \u0275\u0275text(10, " Kelola Kehadiran");
        \u0275\u0275element(11, "br");
        \u0275\u0275text(12, "Karyawan dengan ");
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Mudah & Cepat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16, " Platform manajemen absensi modern untuk perusahaan Anda. Monitor WFO & WFH dalam satu dasbor. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ul", 10)(18, "li", 11)(19, "span", 12);
        \u0275\u0275text(20, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Rekapitulasi otomatis setiap bulan ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li", 11)(23, "span", 12);
        \u0275\u0275text(24, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Laporan ekspor PDF & Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li", 11)(27, "span", 12);
        \u0275\u0275text(28, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Manajemen divisi & jabatan fleksibel ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 13)(31, "p", 14);
        \u0275\u0275text(32, ' "Sangat membantu tim HR kami dalam memantau kehadiran karyawan secara real-time." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 15);
        \u0275\u0275element(34, "img", 16);
        \u0275\u0275elementStart(35, "div")(36, "strong");
        \u0275\u0275text(37, "Nurul Karlina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "HRD \u2013 IDwebhost");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(40, "div", 17)(41, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "main", 19)(43, "div", 20)(44, "h2", 21);
        \u0275\u0275text(45, "Selamat Datang \u{1F44B}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 22);
        \u0275\u0275text(47, "Masuk ke akun anda untuk melanjutkan");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(48, LoginComponent_Conditional_48_Template, 4, 8, "div", 23);
        \u0275\u0275conditionalCreate(49, LoginComponent_Conditional_49_Template, 4, 1, "div", 24);
        \u0275\u0275elementStart(50, "form", 25);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_50_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(51, "div", 26)(52, "label", 27);
        \u0275\u0275text(53, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(54, "input", 28);
        \u0275\u0275conditionalCreate(55, LoginComponent_Conditional_55_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 26)(57, "label", 30);
        \u0275\u0275text(58, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 31);
        \u0275\u0275element(60, "input", 32);
        \u0275\u0275elementStart(61, "button", 33);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_61_listener() {
          return ctx.showPassword.set(!ctx.showPassword());
        });
        \u0275\u0275elementStart(62, "span", 34);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(64, LoginComponent_Conditional_64_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 35)(66, "label", 36);
        \u0275\u0275element(67, "input", 37);
        \u0275\u0275elementStart(68, "span");
        \u0275\u0275text(69, "Ingat saya");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "a", 38);
        \u0275\u0275text(71, "Lupa password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "button", 39);
        \u0275\u0275conditionalCreate(73, LoginComponent_Conditional_73_Template, 2, 0)(74, LoginComponent_Conditional_74_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 40)(76, "span");
        \u0275\u0275text(77, "atau");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "button", 41);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(79, "svg", 42);
        \u0275\u0275element(80, "path", 43)(81, "path", 44)(82, "path", 45)(83, "path", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, " Lanjutkan dengan Google ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(85, "p", 47);
        \u0275\u0275text(86, " Belum punya akun? ");
        \u0275\u0275elementStart(87, "a", 48);
        \u0275\u0275text(88, "Daftar Sekarang");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(48);
        \u0275\u0275conditional((tmp_0_0 = ctx.verifiedInfo()) ? 48 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMessage() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("lp-field__input--err", ctx.f["username"].invalid && ctx.f["username"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["username"].invalid && ctx.f["username"].touched ? 55 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("lp-field__input--err", ctx.f["password"].invalid && ctx.f["password"].touched);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility" : "visibility_off");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["password"].invalid && ctx.f["password"].touched ? 64 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 73 : 74);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.lp-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0f172a;\n  background-image:\n    radial-gradient(\n      ellipse 60% 50% at 20% 40%,\n      rgba(99, 102, 241, 0.18) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 50% 60% at 80% 70%,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n  padding: 1.5rem;\n}\n.lp-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  max-width: 980px;\n  min-height: 600px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.55);\n}\n.lp-left[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1.1;\n  background:\n    linear-gradient(\n      145deg,\n      #4f46e5 0%,\n      #7c3aed 60%,\n      #a855f7 100%);\n  padding: 3rem 2.8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n}\n.lp-left__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.lp-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 2.5rem;\n}\n.lp-logo__icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 0.35rem;\n  font-size: 1.6rem;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.lp-logo__text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  opacity: 0.95;\n}\n.lp-left__headline[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  line-height: 1.4;\n  margin: 0 0 1rem;\n}\n.lp-left__accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #fbbf24,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.lp-left__desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.7;\n  opacity: 0.82;\n  margin: 0 0 2rem;\n}\n.lp-features[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 2rem;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.lp-features__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.88rem;\n  opacity: 0.9;\n}\n.lp-features__icon[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #86efac;\n  flex-shrink: 0;\n}\n.lp-testimonial[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-left: 3px solid rgba(255, 255, 255, 0.4);\n  border-radius: 0 12px 12px 0;\n  padding: 1rem 1.2rem;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.lp-testimonial__text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.6;\n  font-style: italic;\n  opacity: 0.9;\n  margin: 0 0 0.75rem;\n}\n.lp-testimonial__author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.82rem;\n}\n.lp-testimonial__author[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.lp-testimonial__author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-size: 0.78rem;\n}\n.lp-testimonial__avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  flex-shrink: 0;\n}\n.lp-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.2;\n  z-index: 1;\n}\n.lp-blob--1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #818cf8;\n  top: -80px;\n  right: -100px;\n}\n.lp-blob--2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  background: #c084fc;\n  bottom: -60px;\n  left: -60px;\n}\n.lp-right[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #1e293b;\n  padding: 3rem 2.8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.lp-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.lp-form-header__title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #f1f5f9;\n  margin: 0 0 0.4rem;\n}\n.lp-form-header__sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.lp-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.35);\n  color: #fca5a5;\n  border-radius: 10px;\n  padding: 0.7rem 1rem;\n  font-size: 0.85rem;\n  margin-bottom: 1.25rem;\n}\n.lp-alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.lp-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.lp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.lp-field__label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.lp-field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: #0f172a;\n  border: 1.5px solid #334155;\n  border-radius: 10px;\n  color: #f1f5f9;\n  font-size: 0.9rem;\n  font-family: inherit;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.lp-field__input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.lp-field__input[_ngcontent-%COMP%]:focus {\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.18);\n}\n.lp-field__input--err[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.lp-field__pw-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.lp-field__pw-wrap[_ngcontent-%COMP%]   .lp-field__input[_ngcontent-%COMP%] {\n  padding-right: 2.8rem;\n}\n.lp-field__eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.7rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  padding: 0.2rem;\n}\n.lp-field__eye[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.lp-field__eye[_ngcontent-%COMP%]:hover {\n  color: #94a3b8;\n}\n.lp-field__error[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #f87171;\n}\n.lp-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.lp-options__forgot[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #818cf8;\n  text-decoration: none;\n}\n.lp-options__forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lp-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.83rem;\n  color: #64748b;\n  cursor: pointer;\n}\n.lp-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #818cf8;\n  cursor: pointer;\n}\n.lp-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.82rem;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.15s;\n}\n.lp-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.lp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.lp-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.lp-btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);\n}\n.lp-btn--google[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1e293b;\n  font-weight: 600;\n}\n.lp-or[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #334155;\n  font-size: 0.8rem;\n}\n.lp-or[_ngcontent-%COMP%]::before, \n.lp-or[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #334155;\n}\n.lp-or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #475569;\n  white-space: nowrap;\n}\n.lp-register[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.84rem;\n  color: #475569;\n}\n.lp-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #818cf8;\n  font-weight: 600;\n  text-decoration: none;\n}\n.lp-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lp-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_lp-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_lp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 700px) {\n  .lp-bg[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    background: #0f172a;\n  }\n  .lp-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: unset;\n    border-radius: 18px;\n  }\n  .lp-left[_ngcontent-%COMP%] {\n    padding: 2rem 1.75rem;\n  }\n  .lp-left[_ngcontent-%COMP%]   .lp-left__desc[_ngcontent-%COMP%], \n   .lp-left[_ngcontent-%COMP%]   .lp-features[_ngcontent-%COMP%], \n   .lp-left[_ngcontent-%COMP%]   .lp-testimonial[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lp-left[_ngcontent-%COMP%]   .lp-left__headline[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n    margin-bottom: 0;\n  }\n  .lp-right[_ngcontent-%COMP%] {\n    padding: 2rem 1.75rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<div class="lp-bg">\r
  <div class="lp-container">\r
\r
    <!-- \u2500\u2500 Left: Branding + Info \u2500\u2500 -->\r
    <aside class="lp-left">\r
      <div class="lp-left__inner">\r
\r
        <div class="lp-logo">\r
          <span class="lp-logo__icon material-icons">work_outline</span>\r
          <span class="lp-logo__text">AbsensiKerja</span>\r
        </div>\r
\r
        <h1 class="lp-left__headline">\r
          Kelola Kehadiran<br/>Karyawan dengan <span class="lp-left__accent">Mudah &amp; Cepat</span>\r
        </h1>\r
        <p class="lp-left__desc">\r
          Platform manajemen absensi modern untuk perusahaan Anda. Monitor WFO &amp; WFH dalam satu dasbor.\r
        </p>\r
\r
        <ul class="lp-features">\r
          <li class="lp-features__item">\r
            <span class="material-icons lp-features__icon">check_circle</span>\r
            Rekapitulasi otomatis setiap bulan\r
          </li>\r
          <li class="lp-features__item">\r
            <span class="material-icons lp-features__icon">check_circle</span>\r
            Laporan ekspor PDF &amp; Excel\r
          </li>\r
          <li class="lp-features__item">\r
            <span class="material-icons lp-features__icon">check_circle</span>\r
            Manajemen divisi &amp; jabatan fleksibel\r
          </li>\r
        </ul>\r
\r
        <div class="lp-testimonial">\r
          <p class="lp-testimonial__text">\r
            "Sangat membantu tim HR kami dalam memantau kehadiran karyawan secara real-time."\r
          </p>\r
          <div class="lp-testimonial__author">\r
            <img\r
              src="assets/images/avatars/default.png"\r
              class="lp-testimonial__avatar"\r
              alt="Avatar"\r
              onerror="this.src='https://ui-avatars.com/api/?name=Nurul+Karlina&background=1e40af&color=fff&size=40'"\r
            />\r
            <div>\r
              <strong>Nurul Karlina</strong>\r
              <span>HRD &ndash; IDwebhost</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- decorative blobs -->\r
      <div class="lp-blob lp-blob--1"></div>\r
      <div class="lp-blob lp-blob--2"></div>\r
    </aside>\r
\r
    <!-- \u2500\u2500 Right: Login Form \u2500\u2500 -->\r
    <main class="lp-right">\r
\r
      <div class="lp-form-header">\r
        <h2 class="lp-form-header__title">Selamat Datang \u{1F44B}</h2>\r
        <p class="lp-form-header__sub">Masuk ke akun anda untuk melanjutkan</p>\r
      </div>\r
\r
      <!-- Verifikasi email status -->\r
      @if (verifiedInfo(); as v) {\r
        <div class="lp-alert" [style.background]="v.ok ? '#f0fdf4' : '#fef2f2'"\r
             [style.color]="v.ok ? '#166534' : '#991b1b'"\r
             [style.border]="'1px solid ' + (v.ok ? '#bbf7d0' : '#fecaca')">\r
          <span class="material-icons">{{ v.ok ? 'check_circle' : 'error_outline' }}</span>\r
          {{ v.msg }}\r
        </div>\r
      }\r
\r
      <!-- Error -->\r
      @if (errorMessage()) {\r
        <div class="lp-alert">\r
          <span class="material-icons">warning_amber</span>\r
          {{ errorMessage() }}\r
        </div>\r
      }\r
\r
      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="lp-form">\r
\r
        <div class="lp-field">\r
          <label class="lp-field__label" for="username">Email</label>\r
          <input\r
            id="username"\r
            type="email"\r
            class="lp-field__input"\r
            [class.lp-field__input--err]="f['username'].invalid && f['username'].touched"\r
            formControlName="username"\r
            placeholder="contoh@perusahaan.com"\r
            autocomplete="email"\r
          />\r
          @if (f['username'].invalid && f['username'].touched) {\r
            <span class="lp-field__error">Email tidak boleh kosong</span>\r
          }\r
        </div>\r
\r
        <div class="lp-field">\r
          <label class="lp-field__label" for="password">Password</label>\r
          <div class="lp-field__pw-wrap">\r
            <input\r
              id="password"\r
              [type]="showPassword() ? 'text' : 'password'"\r
              class="lp-field__input"\r
              [class.lp-field__input--err]="f['password'].invalid && f['password'].touched"\r
              formControlName="password"\r
              placeholder="Minimal 6 karakter"\r
              autocomplete="current-password"\r
            />\r
            <button type="button" class="lp-field__eye" (click)="showPassword.set(!showPassword())" tabindex="-1">\r
              <span class="material-icons">{{ showPassword() ? 'visibility' : 'visibility_off' }}</span>\r
            </button>\r
          </div>\r
          @if (f['password'].invalid && f['password'].touched) {\r
            <span class="lp-field__error">Password minimal 6 karakter</span>\r
          }\r
        </div>\r
\r
        <div class="lp-options">\r
          <label class="lp-checkbox">\r
            <input type="checkbox" /> <span>Ingat saya</span>\r
          </label>\r
          <a class="lp-options__forgot" href="#">Lupa password?</a>\r
        </div>\r
\r
        <button type="submit" class="lp-btn lp-btn--primary" [disabled]="loading()">\r
          @if (loading()) {\r
            <span class="lp-spinner"></span> Memproses...\r
          } @else {\r
            <span class="material-icons">login</span> Masuk Sekarang\r
          }\r
        </button>\r
\r
        <div class="lp-or"><span>atau</span></div>\r
\r
        <button type="button" class="lp-btn lp-btn--google">\r
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>\r
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>\r
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>\r
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>\r
          </svg>\r
          Lanjutkan dengan Google\r
        </button>\r
\r
      </form>\r
\r
      <p class="lp-register">\r
        Belum punya akun? <a routerLink="/auth/register">Daftar Sekarang</a>\r
      </p>\r
\r
    </main>\r
\r
  </div>\r
</div>\r
\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/auth/login/login.component.scss */\n:host {\n  display: block;\n}\n.lp-bg {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0f172a;\n  background-image:\n    radial-gradient(\n      ellipse 60% 50% at 20% 40%,\n      rgba(99, 102, 241, 0.18) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 50% 60% at 80% 70%,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n  padding: 1.5rem;\n}\n.lp-container {\n  display: flex;\n  width: 100%;\n  max-width: 980px;\n  min-height: 600px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.55);\n}\n.lp-left {\n  position: relative;\n  flex: 1.1;\n  background:\n    linear-gradient(\n      145deg,\n      #4f46e5 0%,\n      #7c3aed 60%,\n      #a855f7 100%);\n  padding: 3rem 2.8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n}\n.lp-left__inner {\n  position: relative;\n  z-index: 2;\n}\n.lp-logo {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 2.5rem;\n}\n.lp-logo__icon {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 0.35rem;\n  font-size: 1.6rem;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.lp-logo__text {\n  font-size: 1.15rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  opacity: 0.95;\n}\n.lp-left__headline {\n  font-size: 1.75rem;\n  font-weight: 800;\n  line-height: 1.4;\n  margin: 0 0 1rem;\n}\n.lp-left__accent {\n  background:\n    linear-gradient(\n      90deg,\n      #fbbf24,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.lp-left__desc {\n  font-size: 0.9rem;\n  line-height: 1.7;\n  opacity: 0.82;\n  margin: 0 0 2rem;\n}\n.lp-features {\n  list-style: none;\n  margin: 0 0 2rem;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.lp-features__item {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.88rem;\n  opacity: 0.9;\n}\n.lp-features__icon {\n  font-size: 1.05rem;\n  color: #86efac;\n  flex-shrink: 0;\n}\n.lp-testimonial {\n  background: rgba(255, 255, 255, 0.1);\n  border-left: 3px solid rgba(255, 255, 255, 0.4);\n  border-radius: 0 12px 12px 0;\n  padding: 1rem 1.2rem;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.lp-testimonial__text {\n  font-size: 0.85rem;\n  line-height: 1.6;\n  font-style: italic;\n  opacity: 0.9;\n  margin: 0 0 0.75rem;\n}\n.lp-testimonial__author {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.82rem;\n}\n.lp-testimonial__author strong {\n  display: block;\n}\n.lp-testimonial__author span {\n  opacity: 0.7;\n  font-size: 0.78rem;\n}\n.lp-testimonial__avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  flex-shrink: 0;\n}\n.lp-blob {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.2;\n  z-index: 1;\n}\n.lp-blob--1 {\n  width: 300px;\n  height: 300px;\n  background: #818cf8;\n  top: -80px;\n  right: -100px;\n}\n.lp-blob--2 {\n  width: 220px;\n  height: 220px;\n  background: #c084fc;\n  bottom: -60px;\n  left: -60px;\n}\n.lp-right {\n  flex: 1;\n  background: #1e293b;\n  padding: 3rem 2.8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.lp-form-header {\n  margin-bottom: 1.75rem;\n}\n.lp-form-header__title {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #f1f5f9;\n  margin: 0 0 0.4rem;\n}\n.lp-form-header__sub {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.lp-alert {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.35);\n  color: #fca5a5;\n  border-radius: 10px;\n  padding: 0.7rem 1rem;\n  font-size: 0.85rem;\n  margin-bottom: 1.25rem;\n}\n.lp-alert .material-icons {\n  font-size: 1rem;\n}\n.lp-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n}\n.lp-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.lp-field__label {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.lp-field__input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: #0f172a;\n  border: 1.5px solid #334155;\n  border-radius: 10px;\n  color: #f1f5f9;\n  font-size: 0.9rem;\n  font-family: inherit;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.lp-field__input::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.lp-field__input:focus {\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.18);\n}\n.lp-field__input--err {\n  border-color: #ef4444;\n}\n.lp-field__pw-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.lp-field__pw-wrap .lp-field__input {\n  padding-right: 2.8rem;\n}\n.lp-field__eye {\n  position: absolute;\n  right: 0.7rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  padding: 0.2rem;\n}\n.lp-field__eye .material-icons {\n  font-size: 1.1rem;\n}\n.lp-field__eye:hover {\n  color: #94a3b8;\n}\n.lp-field__error {\n  font-size: 0.76rem;\n  color: #f87171;\n}\n.lp-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.lp-options__forgot {\n  font-size: 0.82rem;\n  color: #818cf8;\n  text-decoration: none;\n}\n.lp-options__forgot:hover {\n  text-decoration: underline;\n}\n.lp-checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.83rem;\n  color: #64748b;\n  cursor: pointer;\n}\n.lp-checkbox input[type=checkbox] {\n  accent-color: #818cf8;\n  cursor: pointer;\n}\n.lp-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.82rem;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.15s;\n}\n.lp-btn:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.lp-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.lp-btn .material-icons {\n  font-size: 1.1rem;\n}\n.lp-btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);\n}\n.lp-btn--google {\n  background: #fff;\n  color: #1e293b;\n  font-weight: 600;\n}\n.lp-or {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #334155;\n  font-size: 0.8rem;\n}\n.lp-or::before,\n.lp-or::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #334155;\n}\n.lp-or span {\n  color: #475569;\n  white-space: nowrap;\n}\n.lp-register {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.84rem;\n  color: #475569;\n}\n.lp-register a {\n  color: #818cf8;\n  font-weight: 600;\n  text-decoration: none;\n}\n.lp-register a:hover {\n  text-decoration: underline;\n}\n.lp-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: lp-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes lp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 700px) {\n  .lp-bg {\n    padding: 0.75rem;\n    background: #0f172a;\n  }\n  .lp-container {\n    flex-direction: column;\n    min-height: unset;\n    border-radius: 18px;\n  }\n  .lp-left {\n    padding: 2rem 1.75rem;\n  }\n  .lp-left .lp-left__desc,\n  .lp-left .lp-features,\n  .lp-left .lp-testimonial {\n    display: none;\n  }\n  .lp-left .lp-left__headline {\n    font-size: 1.35rem;\n    margin-bottom: 0;\n  }\n  .lp-right {\n    padding: 2rem 1.75rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-NIJ2TGWI.js.map
