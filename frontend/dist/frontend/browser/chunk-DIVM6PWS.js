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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/daftar/daftar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DaftarComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function DaftarComponent_For_34_Template_div_click_0_listener() {
      const paket_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPaket(paket_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275element(2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "div", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const paket_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("paket-card--selected", ctx_r2.selectedPaket() === paket_r2.id)("paket-card--popular", paket_r2.popular);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("paket-card__radio-inner--active", ctx_r2.selectedPaket() === paket_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(paket_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("paket-card__sub--green", paket_r2.id !== "gratis");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paket_r2.subNote);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(paket_r2.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paket_r2.priceNote);
  }
}
function DaftarComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 53);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage(), " ");
  }
}
function DaftarComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Nama lengkap tidak boleh kosong");
    \u0275\u0275elementEnd();
  }
}
function DaftarComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Nama perusahaan tidak boleh kosong");
    \u0275\u0275elementEnd();
  }
}
function DaftarComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r4 = ctx.$implicit;
    \u0275\u0275property("value", j_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r4);
  }
}
function DaftarComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jk_r5 = ctx.$implicit;
    \u0275\u0275property("value", jk_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(jk_r5);
  }
}
function DaftarComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Nomor WhatsApp tidak valid");
    \u0275\u0275elementEnd();
  }
}
function DaftarComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Masukkan email yang valid");
    \u0275\u0275elementEnd();
  }
}
function DaftarComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Password minimal 6 karakter");
    \u0275\u0275elementEnd();
  }
}
function DaftarComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 54);
    \u0275\u0275text(1, " Memproses... ");
  }
}
function DaftarComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Daftar Sekarang ");
  }
}
var DaftarComponent = class _DaftarComponent {
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
    this.selectedPaket = signal("pro", ...ngDevMode ? [{ debugName: "selectedPaket" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paketOptions = [
      {
        id: "master",
        name: "Master",
        price: "Rp 19.175",
        priceNote: "/karyawan",
        subNote: "Coba Gratis 14 Hari"
      },
      {
        id: "pro",
        name: "Pro",
        price: "Rp 15.275",
        priceNote: "/karyawan",
        subNote: "Coba Gratis 14 Hari",
        popular: true
      },
      {
        id: "basic",
        name: "Basic",
        price: "Rp 7.800",
        priceNote: "/karyawan",
        subNote: "Coba Gratis 14 Hari"
      },
      {
        id: "gratis",
        name: "Gratis",
        price: "Rp 0",
        priceNote: "",
        subNote: "Maks. 2 karyawan \u2022 Selamanya"
      }
    ];
    this.jabatanOptions = ["Pemilik", "Owner", "CEO", "Direktur", "Manajer HR", "Supervisor", "Lainnya"];
    this.jumlahOptions = ["2-5", "6-10", "11-20", "21-50", "51-100", "> 100"];
    this.form = this.fb.group({
      namaLengkap: ["", [Validators.required, Validators.maxLength(100)]],
      namaPerusahaan: ["", [Validators.required, Validators.maxLength(150)]],
      jabatan: ["Pemilik", [Validators.required]],
      jumlahKaryawan: ["2-5", [Validators.required]],
      whatsapp: ["", [Validators.required, Validators.pattern(/^[0-9+\-\s]{8,20}$/)]],
      email: ["", [Validators.required, Validators.email]],
      fiturKebutuhan: [""],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.form.controls;
  }
  selectPaket(id) {
    this.selectedPaket.set(id);
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const body = {
      namaLengkap: this.form.value.namaLengkap,
      namaPerusahaan: this.form.value.namaPerusahaan,
      jabatan: this.form.value.jabatan,
      email: this.form.value.email,
      whatsapp: this.form.value.whatsapp,
      zonaWaktu: "WIB",
      fiturKebutuhan: this.form.value.fiturKebutuhan ?? "",
      password: this.form.value.password,
      namaDivisi: this.form.value.namaPerusahaan
    };
    this.http.post(`${environment.baseUrl}/auth/register/owner`, body).subscribe({
      next: (res) => {
        this.auth.saveSession(res.user);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        const msg = err?.error?.message ?? err?.message ?? "Registrasi gagal. Silakan coba lagi.";
        this.errorMessage.set(msg);
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function DaftarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DaftarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DaftarComponent, selectors: [["app-daftar"]], decls: 86, vars: 21, consts: [[1, "daftar-page"], [1, "daftar-noise"], [1, "daftar-blob", "daftar-blob--1"], [1, "daftar-blob", "daftar-blob--2"], [1, "daftar-blob", "daftar-blob--3"], [1, "daftar-nav"], ["routerLink", "/", 1, "daftar-nav__brand"], [1, "material-icons", "daftar-nav__icon"], [1, "daftar-nav__name"], [1, "daftar-nav__actions"], ["routerLink", "/auth/login", 1, "daftar-nav__btn", "daftar-nav__btn--outline"], ["routerLink", "/daftar", 1, "daftar-nav__btn", "daftar-nav__btn--solid"], [1, "daftar-main"], [1, "daftar-header"], [1, "daftar-header__title"], [1, "daftar-header__sub"], [1, "daftar-content"], [1, "daftar-packages"], [1, "daftar-packages__title"], [1, "paket-card", 3, "paket-card--selected", "paket-card--popular"], [1, "daftar-form-wrap"], [1, "daftar-form-card"], [1, "daftar-form-card__title"], [1, "daftar-form-card__sub"], [1, "daftar-alert"], ["novalidate", "", 1, "daftar-form", 3, "ngSubmit", "formGroup"], [1, "daftar-form__row"], [1, "daftar-field"], ["type", "text", "formControlName", "namaLengkap", "placeholder", "Nama Lengkap *", 1, "daftar-field__input"], [1, "daftar-field__error"], ["type", "text", "formControlName", "namaPerusahaan", "placeholder", "Nama Perusahaan *", 1, "daftar-field__input"], [1, "daftar-field__label"], ["formControlName", "jabatan", 1, "daftar-field__input", "daftar-field__input--select"], [3, "value"], ["formControlName", "jumlahKaryawan", 1, "daftar-field__input", "daftar-field__input--select"], ["type", "tel", "formControlName", "whatsapp", "placeholder", "Nomor WhatsApp *", 1, "daftar-field__input"], ["type", "email", "formControlName", "email", "placeholder", "Alamat Email *", "autocomplete", "email", 1, "daftar-field__input"], ["type", "password", "formControlName", "password", "placeholder", "Password * (minimal 6 karakter)", "autocomplete", "new-password", 1, "daftar-field__input"], ["formControlName", "fiturKebutuhan", "placeholder", "Kebutuhan Fitur\nContoh: Absensi online, payroll, manajemen cuti", "rows", "3", 1, "daftar-field__input", "daftar-field__input--textarea"], [1, "daftar-tos"], ["href", "#"], ["type", "submit", 1, "daftar-btn", 3, "disabled"], [1, "daftar-login-link"], ["routerLink", "/auth/login"], [1, "paket-card", 3, "click"], [1, "paket-card__radio"], [1, "paket-card__radio-inner"], [1, "paket-card__info"], [1, "paket-card__name"], [1, "paket-card__sub"], [1, "paket-card__price"], [1, "paket-card__amount"], [1, "paket-card__per"], [1, "material-icons"], [1, "daftar-spinner"]], template: function DaftarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementStart(5, "header", 5)(6, "a", 6)(7, "span", 7);
        \u0275\u0275text(8, "fingerprint");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275text(10, "Absensi");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "Kerja");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 9)(14, "a", 10);
        \u0275\u0275text(15, "Masuk");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 11);
        \u0275\u0275text(17, "Daftar ");
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19, "Gratis");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "main", 12)(21, "div", 13)(22, "h1", 14);
        \u0275\u0275text(23, "Mulai Gunakan ");
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "AbsensiKerja");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Hari Ini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 15);
        \u0275\u0275text(28, "Kelola absensi, cuti, dan payroll dalam satu aplikasi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "h2", 18);
        \u0275\u0275text(32, "Pilih Paket");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(33, DaftarComponent_For_34_Template, 13, 12, "div", 19, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 20)(36, "div", 21)(37, "h2", 22);
        \u0275\u0275text(38, "Form Pendaftaran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p", 23);
        \u0275\u0275text(40, "Lengkapi data di bawah untuk memulai");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(41, DaftarComponent_Conditional_41_Template, 4, 1, "div", 24);
        \u0275\u0275elementStart(42, "form", 25);
        \u0275\u0275listener("ngSubmit", function DaftarComponent_Template_form_ngSubmit_42_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(43, "div", 26)(44, "div", 27);
        \u0275\u0275element(45, "input", 28);
        \u0275\u0275conditionalCreate(46, DaftarComponent_Conditional_46_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 27);
        \u0275\u0275element(48, "input", 30);
        \u0275\u0275conditionalCreate(49, DaftarComponent_Conditional_49_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 26)(51, "div", 27)(52, "label", 31);
        \u0275\u0275text(53, "Jabatan *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "select", 32);
        \u0275\u0275repeaterCreate(55, DaftarComponent_For_56_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 27)(58, "label", 31);
        \u0275\u0275text(59, "Jumlah Karyawan *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "select", 34);
        \u0275\u0275repeaterCreate(61, DaftarComponent_For_62_Template, 2, 2, "option", 33, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 26)(64, "div", 27);
        \u0275\u0275element(65, "input", 35);
        \u0275\u0275conditionalCreate(66, DaftarComponent_Conditional_66_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 27);
        \u0275\u0275element(68, "input", 36);
        \u0275\u0275conditionalCreate(69, DaftarComponent_Conditional_69_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 27);
        \u0275\u0275element(71, "input", 37);
        \u0275\u0275conditionalCreate(72, DaftarComponent_Conditional_72_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 27);
        \u0275\u0275element(74, "textarea", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p", 39);
        \u0275\u0275text(76, " Dengan klik Daftar, Anda menyetujui ");
        \u0275\u0275elementStart(77, "a", 40);
        \u0275\u0275text(78, "Syarat dan Ketentuan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "button", 41);
        \u0275\u0275conditionalCreate(80, DaftarComponent_Conditional_80_Template, 2, 0)(81, DaftarComponent_Conditional_81_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "p", 42);
        \u0275\u0275text(83, " Sudah pernah daftar? ");
        \u0275\u0275elementStart(84, "a", 43);
        \u0275\u0275text(85, "Masuk");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275repeater(ctx.paketOptions);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.errorMessage() ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("daftar-field__input--err", ctx.f["namaLengkap"].invalid && ctx.f["namaLengkap"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["namaLengkap"].invalid && ctx.f["namaLengkap"].touched ? 46 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("daftar-field__input--err", ctx.f["namaPerusahaan"].invalid && ctx.f["namaPerusahaan"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["namaPerusahaan"].invalid && ctx.f["namaPerusahaan"].touched ? 49 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("daftar-field__input--err", ctx.f["jabatan"].invalid && ctx.f["jabatan"].touched);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.jabatanOptions);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.jumlahOptions);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("daftar-field__input--err", ctx.f["whatsapp"].invalid && ctx.f["whatsapp"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["whatsapp"].invalid && ctx.f["whatsapp"].touched ? 66 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("daftar-field__input--err", ctx.f["email"].invalid && ctx.f["email"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["email"].invalid && ctx.f["email"].touched ? 69 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("daftar-field__input--err", ctx.f["password"].invalid && ctx.f["password"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["password"].invalid && ctx.f["password"].touched ? 72 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 80 : 81);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: [`
[_nghost-%COMP%] {
  display: block;
  background: #07090f;
}
.daftar-noise[_ngcontent-%COMP%] {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px;
}
.daftar-page[_ngcontent-%COMP%] {
  min-height: 100vh;
  background: #07090f;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  position: relative;
}
.daftar-blob[_ngcontent-%COMP%] {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.daftar-blob--1[_ngcontent-%COMP%] {
  width: 600px;
  height: 600px;
  background: rgba(99, 102, 241, 0.12);
  top: -200px;
  left: -150px;
}
.daftar-blob--2[_ngcontent-%COMP%] {
  width: 500px;
  height: 500px;
  background: rgba(139, 92, 246, 0.1);
  bottom: -100px;
  right: -100px;
}
.daftar-blob--3[_ngcontent-%COMP%] {
  width: 400px;
  height: 400px;
  background: rgba(6, 182, 212, 0.07);
  top: 40%;
  left: 40%;
}
.daftar-nav[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 64px;
  background: rgba(7, 9, 15, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.daftar-nav__brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}
.daftar-nav__icon[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.45);
  font-size: 1.25rem !important;
  color: #ffffff;
}
.daftar-nav__name[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.3px;
}
.daftar-nav__name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}
.daftar-nav__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.daftar-nav__btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s, transform 0.15s;
}
.daftar-nav__btn--outline[_ngcontent-%COMP%] {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #94a3b8;
}
.daftar-nav__btn--outline[_ngcontent-%COMP%]:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: #f1f5f9;
}
.daftar-nav__btn--solid[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.daftar-nav__btn--solid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #ffffff;
  font-weight: 800;
}
.daftar-nav__btn--solid[_ngcontent-%COMP%]:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}
.daftar-main[_ngcontent-%COMP%] {
  flex: 1;
  padding: 3.5rem 2rem 5rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}
.daftar-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 3rem;
}
.daftar-header__title[_ngcontent-%COMP%] {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.6rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
}
.daftar-header__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.daftar-header__sub[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}
.daftar-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.75rem;
  align-items: start;
}
@media (max-width: 860px) {
  .daftar-content[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.daftar-packages__title[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #64748b;
  margin: 0 0 0.9rem;
}
.paket-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 0.6rem;
  background: #0f1117;
  transition:
    border-color 0.18s,
    box-shadow 0.18s,
    background 0.18s;
}
.paket-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.4);
  background: #161a24;
}
.paket-card--selected[_ngcontent-%COMP%] {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.08);
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.25), 0 4px 20px rgba(99, 102, 241, 0.12);
}
.paket-card__radio[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.18s;
}
.paket-card--selected[_ngcontent-%COMP%]   .paket-card__radio[_ngcontent-%COMP%] {
  border-color: #6366f1;
}
.paket-card__radio-inner[_ngcontent-%COMP%] {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.18s;
}
.paket-card__radio-inner--active[_ngcontent-%COMP%] {
  background: #6366f1;
}
.paket-card__info[_ngcontent-%COMP%] {
  flex: 1;
}
.paket-card__name[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 700;
  color: #94a3b8;
  transition: color 0.18s;
}
.paket-card--selected[_ngcontent-%COMP%]   .paket-card__name[_ngcontent-%COMP%] {
  color: #f1f5f9;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.paket-card__sub[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.15rem;
}
.paket-card__sub--green[_ngcontent-%COMP%] {
  color: #10b981;
  font-weight: 600;
}
.paket-card__price[_ngcontent-%COMP%] {
  text-align: right;
  flex-shrink: 0;
}
.paket-card__amount[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: #f1f5f9;
}
.paket-card__per[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  color: #64748b;
}
.daftar-form-card[_ngcontent-%COMP%] {
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem 2rem 1.75rem;
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.06), 0 24px 60px rgba(0, 0, 0, 0.5);
}
.daftar-form-card__title[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.25rem;
}
.daftar-form-card__sub[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 1.5rem;
}
.daftar-alert[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #fca5a5;
  border-radius: 10px;
  padding: 0.65rem 1rem;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}
.daftar-alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.daftar-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.daftar-form__row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
@media (max-width: 600px) {
  .daftar-form__row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.daftar-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.daftar-field__label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.1rem;
}
.daftar-field__input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #07090f;
  border: 1.5px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  color: #f1f5f9;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.daftar-field__input[_ngcontent-%COMP%]::placeholder {
  color: rgba(255, 255, 255, 0.25);
}
.daftar-field__input[_ngcontent-%COMP%]:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.daftar-field__input--err[_ngcontent-%COMP%] {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.daftar-field__input--select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
  cursor: pointer;
}
.daftar-field__input--select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  background: #161a24;
  color: #f1f5f9;
}
.daftar-field__input--textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 85px;
}
.daftar-field__error[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #f87171;
}
.daftar-tos[_ngcontent-%COMP%] {
  font-size: 0.79rem;
  color: #64748b;
  text-align: center;
  margin: 0.1rem 0 0;
  line-height: 1.6;
}
.daftar-tos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}
.daftar-tos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #818cf8;
  text-decoration: underline;
}
.daftar-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.9rem;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #ffffff;
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
.daftar-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.5);
}
.daftar-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.daftar-spinner[_ngcontent-%COMP%] {
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_ds-spin 0.7s linear infinite;
}
@keyframes _ngcontent-%COMP%_ds-spin {
  to {
    transform: rotate(360deg);
  }
}
.daftar-login-link[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  margin: 1.1rem 0 0;
}
.daftar-login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #6366f1;
  font-weight: 700;
  text-decoration: none;
}
.daftar-login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #818cf8;
  text-decoration: underline;
}
@media (max-width: 640px) {
  .daftar-nav[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
  .daftar-main[_ngcontent-%COMP%] {
    padding: 1.75rem 1rem 3rem;
  }
  .daftar-header__title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .daftar-form-card[_ngcontent-%COMP%] {
    padding: 1.5rem 1.1rem;
    border-radius: 14px;
  }
  .daftar-nav__btn--outline[_ngcontent-%COMP%] {
    display: none;
  }
}
/*# sourceMappingURL=daftar.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DaftarComponent, [{
    type: Component,
    args: [{ selector: "app-daftar", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<div class="daftar-page">\r
\r
  <!-- \u2500\u2500 Noise + Background blobs (same as landing) \u2500\u2500 -->\r
  <div class="daftar-noise"></div>\r
  <div class="daftar-blob daftar-blob--1"></div>\r
  <div class="daftar-blob daftar-blob--2"></div>\r
  <div class="daftar-blob daftar-blob--3"></div>\r
\r
  <!-- \u2500\u2500 Navbar \u2500\u2500 -->\r
  <header class="daftar-nav">\r
    <a routerLink="/" class="daftar-nav__brand">\r
      <span class="material-icons daftar-nav__icon">fingerprint</span>\r
      <span class="daftar-nav__name">Absensi<strong>Kerja</strong></span>\r
    </a>\r
    <div class="daftar-nav__actions">\r
      <a routerLink="/auth/login" class="daftar-nav__btn daftar-nav__btn--outline">Masuk</a>\r
      <a routerLink="/daftar" class="daftar-nav__btn daftar-nav__btn--solid">Daftar <strong>Gratis</strong></a>\r
    </div>\r
  </header>\r
\r
  <!-- \u2500\u2500 Page Content \u2500\u2500 -->\r
  <main class="daftar-main">\r
    <div class="daftar-header">\r
      <h1 class="daftar-header__title">Mulai Gunakan <span>AbsensiKerja</span> Hari Ini</h1>\r
      <p class="daftar-header__sub">Kelola absensi, cuti, dan payroll dalam satu aplikasi</p>\r
    </div>\r
\r
    <div class="daftar-content">\r
\r
      <!-- Left: Package selection -->\r
      <div class="daftar-packages">\r
        <h2 class="daftar-packages__title">Pilih Paket</h2>\r
\r
        @for (paket of paketOptions; track paket.id) {\r
          <div\r
            class="paket-card"\r
            [class.paket-card--selected]="selectedPaket() === paket.id"\r
            [class.paket-card--popular]="paket.popular"\r
            (click)="selectPaket(paket.id)"\r
          >\r
            <div class="paket-card__radio">\r
              <div class="paket-card__radio-inner" [class.paket-card__radio-inner--active]="selectedPaket() === paket.id"></div>\r
            </div>\r
            <div class="paket-card__info">\r
              <div class="paket-card__name">{{ paket.name }}</div>\r
              <div class="paket-card__sub" [class.paket-card__sub--green]="paket.id !== 'gratis'">{{ paket.subNote }}</div>\r
            </div>\r
            <div class="paket-card__price">\r
              <span class="paket-card__amount">{{ paket.price }}</span>\r
              <span class="paket-card__per">{{ paket.priceNote }}</span>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Right: Registration form -->\r
      <div class="daftar-form-wrap">\r
        <div class="daftar-form-card">\r
          <h2 class="daftar-form-card__title">Form Pendaftaran</h2>\r
          <p class="daftar-form-card__sub">Lengkapi data di bawah untuk memulai</p>\r
\r
          <!-- Error -->\r
          @if (errorMessage()) {\r
            <div class="daftar-alert">\r
              <span class="material-icons">warning_amber</span>\r
              {{ errorMessage() }}\r
            </div>\r
          }\r
\r
          <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="daftar-form">\r
\r
            <!-- Row 1: Nama Lengkap + Nama Perusahaan -->\r
            <div class="daftar-form__row">\r
              <div class="daftar-field">\r
                <input\r
                  type="text"\r
                  class="daftar-field__input"\r
                  [class.daftar-field__input--err]="f['namaLengkap'].invalid && f['namaLengkap'].touched"\r
                  formControlName="namaLengkap"\r
                  placeholder="Nama Lengkap *"\r
                />\r
                @if (f['namaLengkap'].invalid && f['namaLengkap'].touched) {\r
                  <span class="daftar-field__error">Nama lengkap tidak boleh kosong</span>\r
                }\r
              </div>\r
              <div class="daftar-field">\r
                <input\r
                  type="text"\r
                  class="daftar-field__input"\r
                  [class.daftar-field__input--err]="f['namaPerusahaan'].invalid && f['namaPerusahaan'].touched"\r
                  formControlName="namaPerusahaan"\r
                  placeholder="Nama Perusahaan *"\r
                />\r
                @if (f['namaPerusahaan'].invalid && f['namaPerusahaan'].touched) {\r
                  <span class="daftar-field__error">Nama perusahaan tidak boleh kosong</span>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Row 2: Jabatan + Jumlah Karyawan -->\r
            <div class="daftar-form__row">\r
              <div class="daftar-field">\r
                <label class="daftar-field__label">Jabatan *</label>\r
                <select\r
                  class="daftar-field__input daftar-field__input--select"\r
                  [class.daftar-field__input--err]="f['jabatan'].invalid && f['jabatan'].touched"\r
                  formControlName="jabatan"\r
                >\r
                  @for (j of jabatanOptions; track j) {\r
                    <option [value]="j">{{ j }}</option>\r
                  }\r
                </select>\r
              </div>\r
              <div class="daftar-field">\r
                <label class="daftar-field__label">Jumlah Karyawan *</label>\r
                <select\r
                  class="daftar-field__input daftar-field__input--select"\r
                  formControlName="jumlahKaryawan"\r
                >\r
                  @for (jk of jumlahOptions; track jk) {\r
                    <option [value]="jk">{{ jk }}</option>\r
                  }\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Row 3: Nomor WhatsApp + Alamat Email -->\r
            <div class="daftar-form__row">\r
              <div class="daftar-field">\r
                <input\r
                  type="tel"\r
                  class="daftar-field__input"\r
                  [class.daftar-field__input--err]="f['whatsapp'].invalid && f['whatsapp'].touched"\r
                  formControlName="whatsapp"\r
                  placeholder="Nomor WhatsApp *"\r
                />\r
                @if (f['whatsapp'].invalid && f['whatsapp'].touched) {\r
                  <span class="daftar-field__error">Nomor WhatsApp tidak valid</span>\r
                }\r
              </div>\r
              <div class="daftar-field">\r
                <input\r
                  type="email"\r
                  class="daftar-field__input"\r
                  [class.daftar-field__input--err]="f['email'].invalid && f['email'].touched"\r
                  formControlName="email"\r
                  placeholder="Alamat Email *"\r
                  autocomplete="email"\r
                />\r
                @if (f['email'].invalid && f['email'].touched) {\r
                  <span class="daftar-field__error">Masukkan email yang valid</span>\r
                }\r
              </div>\r
            </div>\r
\r
            <!-- Row 4: Password -->\r
            <div class="daftar-field">\r
              <input\r
                type="password"\r
                class="daftar-field__input"\r
                [class.daftar-field__input--err]="f['password'].invalid && f['password'].touched"\r
                formControlName="password"\r
                placeholder="Password * (minimal 6 karakter)"\r
                autocomplete="new-password"\r
              />\r
              @if (f['password'].invalid && f['password'].touched) {\r
                <span class="daftar-field__error">Password minimal 6 karakter</span>\r
              }\r
            </div>\r
\r
            <!-- Row 5: Kebutuhan Fitur -->\r
            <div class="daftar-field">\r
              <textarea\r
                class="daftar-field__input daftar-field__input--textarea"\r
                formControlName="fiturKebutuhan"\r
                placeholder="Kebutuhan Fitur&#10;Contoh: Absensi online, payroll, manajemen cuti"\r
                rows="3"\r
              ></textarea>\r
            </div>\r
\r
            <!-- ToS -->\r
            <p class="daftar-tos">\r
              Dengan klik Daftar, Anda menyetujui <a href="#">Syarat dan Ketentuan</a>\r
            </p>\r
\r
            <!-- Submit -->\r
            <button type="submit" class="daftar-btn" [disabled]="loading()">\r
              @if (loading()) {\r
                <span class="daftar-spinner"></span> Memproses...\r
              } @else {\r
                Daftar Sekarang\r
              }\r
            </button>\r
\r
          </form>\r
\r
          <p class="daftar-login-link">\r
            Sudah pernah daftar? <a routerLink="/auth/login">Masuk</a>\r
          </p>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </main>\r
\r
</div>\r
`, styles: [`/* src/app/features/daftar/daftar.component.scss */
:host {
  display: block;
  background: #07090f;
}
.daftar-noise {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px;
}
.daftar-page {
  min-height: 100vh;
  background: #07090f;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  position: relative;
}
.daftar-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.daftar-blob--1 {
  width: 600px;
  height: 600px;
  background: rgba(99, 102, 241, 0.12);
  top: -200px;
  left: -150px;
}
.daftar-blob--2 {
  width: 500px;
  height: 500px;
  background: rgba(139, 92, 246, 0.1);
  bottom: -100px;
  right: -100px;
}
.daftar-blob--3 {
  width: 400px;
  height: 400px;
  background: rgba(6, 182, 212, 0.07);
  top: 40%;
  left: 40%;
}
.daftar-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 64px;
  background: rgba(7, 9, 15, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.daftar-nav__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}
.daftar-nav__icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.45);
  font-size: 1.25rem !important;
  color: #ffffff;
}
.daftar-nav__name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.3px;
}
.daftar-nav__name strong {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}
.daftar-nav__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.daftar-nav__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s, transform 0.15s;
}
.daftar-nav__btn--outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #94a3b8;
}
.daftar-nav__btn--outline:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: #f1f5f9;
}
.daftar-nav__btn--solid {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}
.daftar-nav__btn--solid strong {
  color: #ffffff;
  font-weight: 800;
}
.daftar-nav__btn--solid:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}
.daftar-main {
  flex: 1;
  padding: 3.5rem 2rem 5rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}
.daftar-header {
  text-align: center;
  margin-bottom: 3rem;
}
.daftar-header__title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.6rem;
  letter-spacing: -0.5px;
  line-height: 1.2;
}
.daftar-header__title span {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.daftar-header__sub {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}
.daftar-content {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.75rem;
  align-items: start;
}
@media (max-width: 860px) {
  .daftar-content {
    grid-template-columns: 1fr;
  }
}
.daftar-packages__title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #64748b;
  margin: 0 0 0.9rem;
}
.paket-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 0.6rem;
  background: #0f1117;
  transition:
    border-color 0.18s,
    box-shadow 0.18s,
    background 0.18s;
}
.paket-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  background: #161a24;
}
.paket-card--selected {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.08);
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.25), 0 4px 20px rgba(99, 102, 241, 0.12);
}
.paket-card__radio {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.18s;
}
.paket-card--selected .paket-card__radio {
  border-color: #6366f1;
}
.paket-card__radio-inner {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.18s;
}
.paket-card__radio-inner--active {
  background: #6366f1;
}
.paket-card__info {
  flex: 1;
}
.paket-card__name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #94a3b8;
  transition: color 0.18s;
}
.paket-card--selected .paket-card__name {
  color: #f1f5f9;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.paket-card__sub {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.15rem;
}
.paket-card__sub--green {
  color: #10b981;
  font-weight: 600;
}
.paket-card__price {
  text-align: right;
  flex-shrink: 0;
}
.paket-card__amount {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: #f1f5f9;
}
.paket-card__per {
  font-size: 0.72rem;
  color: #64748b;
}
.daftar-form-card {
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem 2rem 1.75rem;
  box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.06), 0 24px 60px rgba(0, 0, 0, 0.5);
}
.daftar-form-card__title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0 0 0.25rem;
}
.daftar-form-card__sub {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 1.5rem;
}
.daftar-alert {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #fca5a5;
  border-radius: 10px;
  padding: 0.65rem 1rem;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}
.daftar-alert .material-icons {
  font-size: 1rem;
}
.daftar-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.daftar-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
@media (max-width: 600px) {
  .daftar-form__row {
    grid-template-columns: 1fr;
  }
}
.daftar-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.daftar-field__label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.1rem;
}
.daftar-field__input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #07090f;
  border: 1.5px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  color: #f1f5f9;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.daftar-field__input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}
.daftar-field__input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
.daftar-field__input--err {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
.daftar-field__input--select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
  cursor: pointer;
}
.daftar-field__input--select option {
  background: #161a24;
  color: #f1f5f9;
}
.daftar-field__input--textarea {
  resize: vertical;
  min-height: 85px;
}
.daftar-field__error {
  font-size: 0.75rem;
  color: #f87171;
}
.daftar-tos {
  font-size: 0.79rem;
  color: #64748b;
  text-align: center;
  margin: 0.1rem 0 0;
  line-height: 1.6;
}
.daftar-tos a {
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}
.daftar-tos a:hover {
  color: #818cf8;
  text-decoration: underline;
}
.daftar-btn {
  width: 100%;
  padding: 0.9rem;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #ffffff;
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
.daftar-btn:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 8px 28px rgba(99, 102, 241, 0.5);
}
.daftar-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.daftar-spinner {
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ds-spin 0.7s linear infinite;
}
@keyframes ds-spin {
  to {
    transform: rotate(360deg);
  }
}
.daftar-login-link {
  text-align: center;
  font-size: 0.85rem;
  color: #64748b;
  margin: 1.1rem 0 0;
}
.daftar-login-link a {
  color: #6366f1;
  font-weight: 700;
  text-decoration: none;
}
.daftar-login-link a:hover {
  color: #818cf8;
  text-decoration: underline;
}
@media (max-width: 640px) {
  .daftar-nav {
    padding: 0 1rem;
  }
  .daftar-main {
    padding: 1.75rem 1rem 3rem;
  }
  .daftar-header__title {
    font-size: 1.5rem;
  }
  .daftar-form-card {
    padding: 1.5rem 1.1rem;
    border-radius: 14px;
  }
  .daftar-nav__btn--outline {
    display: none;
  }
}
/*# sourceMappingURL=daftar.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DaftarComponent, { className: "DaftarComponent", filePath: "src/app/features/daftar/daftar.component.ts", lineNumber: 25 });
})();
export {
  DaftarComponent
};
//# sourceMappingURL=chunk-DIVM6PWS.js.map
