import {
  CommonModule,
  NgIf,
  Router,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function RegisterComponent_div_101_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEmployeeInfo());
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275listener("click", function RegisterComponent_div_101_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 71)(3, "span", 11);
    \u0275\u0275text(4, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 72);
    \u0275\u0275text(6, "Informasi Pendaftaran Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 73);
    \u0275\u0275text(8, " Silakan hubungi admin perusahaan Anda, untuk menambahkan Anda sebagai Karyawan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 74)(10, "span", 75);
    \u0275\u0275text(11, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Pastikan perusahaan Anda sudah menggunakan aplikasi absensi kerja. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 76)(16, "button", 77);
    \u0275\u0275listener("click", function RegisterComponent_div_101_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEmployeeInfo());
    });
    \u0275\u0275text(17, "Mengerti");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 78);
    \u0275\u0275text(19, "Sudah punya akun? Login");
    \u0275\u0275elementEnd()()()();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(router) {
    this.router = router;
    this.selectedRole = null;
    this.showEmployeeInfo = false;
  }
  selectRole(role) {
    this.selectedRole = role;
  }
  onContinue() {
    if (this.selectedRole === "owner") {
      this.router.navigate(["/auth/register-owner"]);
    } else if (this.selectedRole === "employee") {
      this.showEmployeeInfo = true;
    }
  }
  closeEmployeeInfo() {
    this.showEmployeeInfo = false;
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 102, vars: 10, consts: [[1, "rp-bg"], [1, "rp-nav"], [1, "rp-nav__brand"], [1, "material-icons", "rp-nav__icon"], [1, "rp-nav__name"], [1, "rp-nav__actions"], ["routerLink", "/auth/login", 1, "rp-nav__link"], ["href", "#", 1, "rp-nav__btn", "rp-nav__btn--outline"], ["href", "#", 1, "rp-nav__btn", "rp-nav__btn--solid"], [1, "rp-main"], [1, "rp-badge"], [1, "material-icons"], [1, "rp-title"], [1, "rp-subtitle"], [1, "rp-cards"], [1, "rp-card", 3, "click"], [1, "rp-card__illustration", "rp-card__illustration--yellow"], ["viewBox", "0 0 200 160", "xmlns", "http://www.w3.org/2000/svg", 1, "rp-card__svg"], ["x", "30", "y", "100", "width", "140", "height", "8", "rx", "4", "fill", "#c4b5a0"], ["x", "40", "y", "108", "width", "8", "height", "30", "rx", "3", "fill", "#c4b5a0"], ["x", "152", "y", "108", "width", "8", "height", "30", "rx", "3", "fill", "#c4b5a0"], ["x", "80", "y", "60", "width", "55", "height", "38", "rx", "5", "fill", "#fff", "stroke", "#d1c4b0", "stroke-width", "2"], ["x", "85", "y", "65", "width", "45", "height", "28", "rx", "3", "fill", "#e8f4fd"], ["x", "88", "y", "70", "width", "30", "height", "3", "rx", "1", "fill", "#93c5fd"], ["x", "88", "y", "76", "width", "22", "height", "3", "rx", "1", "fill", "#bfdbfe"], ["x", "88", "y", "82", "width", "26", "height", "3", "rx", "1", "fill", "#bfdbfe"], ["x", "103", "y", "98", "width", "9", "height", "6", "rx", "1", "fill", "#c4b5a0"], ["x", "98", "y", "103", "width", "19", "height", "3", "rx", "1", "fill", "#c4b5a0"], ["cx", "55", "cy", "60", "r", "12", "fill", "#f9a8d4"], ["x", "43", "y", "72", "width", "24", "height", "28", "rx", "8", "fill", "#6366f1"], ["x", "45", "y", "96", "width", "9", "height", "16", "rx", "4", "fill", "#fbbf24"], ["x", "58", "y", "96", "width", "9", "height", "16", "rx", "4", "fill", "#fbbf24"], ["cx", "148", "cy", "55", "r", "11", "fill", "#fdba74"], ["x", "137", "y", "66", "width", "22", "height", "26", "rx", "7", "fill", "#10b981"], ["x", "139", "y", "90", "width", "8", "height", "18", "rx", "4", "fill", "#fbbf24"], ["x", "150", "y", "90", "width", "8", "height", "18", "rx", "4", "fill", "#fbbf24"], ["x", "25", "y", "90", "width", "6", "height", "14", "rx", "2", "fill", "#78350f"], ["cx", "28", "cy", "88", "rx", "9", "ry", "10", "fill", "#16a34a"], ["cx", "22", "cy", "84", "rx", "7", "ry", "8", "fill", "#22c55e"], ["cx", "35", "cy", "82", "rx", "7", "ry", "8", "fill", "#22c55e"], [1, "rp-card__body"], [1, "rp-card__check"], [1, "rp-card__title"], [1, "rp-card__desc"], [1, "rp-card__illustration", "rp-card__illustration--blue"], ["x", "30", "y", "100", "width", "140", "height", "8", "rx", "4", "fill", "#b8c4d0"], ["x", "40", "y", "108", "width", "8", "height", "30", "rx", "3", "fill", "#b8c4d0"], ["x", "152", "y", "108", "width", "8", "height", "30", "rx", "3", "fill", "#b8c4d0"], ["x", "70", "y", "68", "width", "60", "height", "34", "rx", "5", "fill", "#fff", "stroke", "#cbd5e1", "stroke-width", "2"], ["x", "75", "y", "72", "width", "50", "height", "26", "rx", "3", "fill", "#dbeafe"], ["x", "78", "y", "76", "width", "35", "height", "3", "rx", "1", "fill", "#60a5fa"], ["x", "78", "y", "82", "width", "25", "height", "3", "rx", "1", "fill", "#93c5fd"], ["x", "78", "y", "88", "width", "30", "height", "3", "rx", "1", "fill", "#93c5fd"], ["x", "65", "y", "100", "width", "70", "height", "4", "rx", "2", "fill", "#b8c4d0"], ["cx", "145", "cy", "52", "r", "13", "fill", "#fdba74"], ["cx", "145", "cy", "62", "rx", "7", "ry", "5", "fill", "#92400e", "opacity", ".4"], ["x", "133", "y", "64", "width", "24", "height", "28", "rx", "8", "fill", "#f97316"], ["x", "120", "y", "68", "width", "18", "height", "7", "rx", "3", "fill", "#f97316", "transform", "rotate(-20 120 68)"], ["x", "135", "y", "90", "width", "9", "height", "20", "rx", "4", "fill", "#1e293b"], ["x", "148", "y", "90", "width", "9", "height", "20", "rx", "4", "fill", "#1e293b"], ["cx", "55", "cy", "118", "rx", "18", "ry", "10", "fill", "#78350f", "opacity", ".7"], ["cx", "68", "cy", "113", "r", "7", "fill", "#92400e"], ["cx", "72", "cy", "110", "rx", "3", "ry", "5", "fill", "#92400e"], ["cx", "64", "cy", "110", "rx", "3", "ry", "5", "fill", "#92400e"], [1, "rp-continue", 3, "click", "disabled"], [1, "rp-footer"], [1, "rp-footer__links"], ["href", "#"], ["class", "rp-modal-overlay", 3, "click", 4, "ngIf"], [1, "rp-modal-overlay", 3, "click"], [1, "rp-modal", 3, "click"], [1, "rp-modal__icon"], [1, "rp-modal__title"], [1, "rp-modal__msg"], [1, "rp-modal__note"], [1, "material-icons", "rp-modal__note-icon"], [1, "rp-modal__actions"], [1, "rp-modal__btn", "rp-modal__btn--primary", 3, "click"], ["routerLink", "/auth/login", 1, "rp-modal__btn", "rp-modal__btn--outline"]], template: function RegisterComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(16, "main", 9)(17, "div", 10)(18, "span", 11);
        \u0275\u0275text(19, "rocket_launch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Mulai Gratis \u2014 Tanpa Kartu Kredit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h1", 12);
        \u0275\u0275text(22, "Daftar ke ");
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "AbsensiKerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "p", 13);
        \u0275\u0275text(26, "Pilih peran yang sesuai untuk melanjutkan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 14)(28, "div", 15);
        \u0275\u0275listener("click", function RegisterComponent_Template_div_click_28_listener() {
          return ctx.selectRole("employee");
        });
        \u0275\u0275elementStart(29, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 17);
        \u0275\u0275element(31, "rect", 18)(32, "rect", 19)(33, "rect", 20)(34, "rect", 21)(35, "rect", 22)(36, "rect", 23)(37, "rect", 24)(38, "rect", 25)(39, "rect", 26)(40, "rect", 27)(41, "circle", 28)(42, "rect", 29)(43, "rect", 30)(44, "rect", 31)(45, "circle", 32)(46, "rect", 33)(47, "rect", 34)(48, "rect", 35)(49, "rect", 36)(50, "ellipse", 37)(51, "ellipse", 38)(52, "ellipse", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(53, "div", 40)(54, "div", 41)(55, "span", 11);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "h3", 42);
        \u0275\u0275text(58, "Saya adalah karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 43);
        \u0275\u0275text(60, "Bergabung dengan workspace perusahaan Anda sebagai anggota tim.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 15);
        \u0275\u0275listener("click", function RegisterComponent_Template_div_click_61_listener() {
          return ctx.selectRole("owner");
        });
        \u0275\u0275elementStart(62, "div", 44);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(63, "svg", 17);
        \u0275\u0275element(64, "rect", 45)(65, "rect", 46)(66, "rect", 47)(67, "rect", 48)(68, "rect", 49)(69, "rect", 50)(70, "rect", 51)(71, "rect", 52)(72, "rect", 53)(73, "circle", 54)(74, "ellipse", 55)(75, "rect", 56)(76, "rect", 57)(77, "rect", 58)(78, "rect", 59)(79, "ellipse", 60)(80, "circle", 61)(81, "ellipse", 62)(82, "ellipse", 63);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(83, "div", 40)(84, "div", 41)(85, "span", 11);
        \u0275\u0275text(86);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "h3", 42);
        \u0275\u0275text(88, "Saya adalah pemilik bisnis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p", 43);
        \u0275\u0275text(90, "Daftarkan perusahaan Anda untuk mengelola waktu & kehadiran tim.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "button", 64);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_91_listener() {
          return ctx.onContinue();
        });
        \u0275\u0275text(92, " Lanjutkan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "footer", 65)(94, "span");
        \u0275\u0275text(95, "\xA9 2026 AbsensiKerja. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 66)(97, "a", 67);
        \u0275\u0275text(98, "Kebijakan Privasi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "a", 67);
        \u0275\u0275text(100, "Syarat & Ketentuan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(101, RegisterComponent_div_101_Template, 20, 0, "div", 68);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275classProp("rp-card--selected", ctx.selectedRole === "employee");
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.selectedRole === "employee" ? "check_circle" : "radio_button_unchecked");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("rp-card--selected", ctx.selectedRole === "owner");
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.selectedRole === "owner" ? "check_circle" : "radio_button_unchecked");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("rp-continue--active", ctx.selectedRole);
        \u0275\u0275property("disabled", !ctx.selectedRole);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.showEmployeeInfo);
      }
    }, dependencies: [RouterLink, CommonModule, NgIf], styles: ['@charset "UTF-8";\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.rp-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #0f172a;\n  background-image:\n    radial-gradient(\n      ellipse 60% 50% at 20% 40%,\n      rgba(99, 102, 241, 0.18) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 50% 60% at 80% 70%,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n  font-family: inherit;\n}\n.rp-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.9rem 2.5rem;\n  background: rgba(15, 23, 42, 0.8);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.rp-nav__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: #f1f5f9;\n  text-decoration: none;\n}\n.rp-nav__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 8px;\n  padding: 0.3rem;\n  font-size: 1.3rem;\n  color: #fff;\n}\n.rp-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.rp-nav__link[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #94a3b8;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.rp-nav__link[_ngcontent-%COMP%]:hover {\n  color: #a5b4fc;\n}\n.rp-nav__btn[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  padding: 0.42rem 1.1rem;\n  border-radius: 20px;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.rp-nav__btn--outline[_ngcontent-%COMP%] {\n  border: 1.5px solid rgba(255, 255, 255, 0.15);\n  color: #cbd5e1;\n}\n.rp-nav__btn--outline[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n  color: #a5b4fc;\n}\n.rp-nav__btn--solid[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  border: none;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.rp-nav__btn--solid[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.rp-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4rem 1.5rem 3rem;\n}\n.rp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  color: #a5b4fc;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.3rem 0.9rem;\n  border-radius: 20px;\n  letter-spacing: 0.4px;\n  margin-bottom: 1.25rem;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.rp-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.rp-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #f1f5f9;\n  margin: 0 0 0.5rem;\n  text-align: center;\n}\n.rp-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #818cf8,\n      #c084fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.rp-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0 0 2.5rem;\n  text-align: center;\n}\n.rp-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  width: 100%;\n  max-width: 680px;\n  margin-bottom: 2rem;\n}\n.rp-card[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  background: #1e293b;\n  cursor: pointer;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    transform 0.2s;\n  overflow: hidden;\n}\n.rp-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.18);\n  transform: translateY(-3px);\n}\n.rp-card--selected[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25), 0 12px 40px rgba(99, 102, 241, 0.2);\n}\n.rp-card--selected[_ngcontent-%COMP%]   .rp-card__check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.rp-card__illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 175px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rp-card__illustration--yellow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1c1917,\n      #292524);\n}\n.rp-card__illustration--blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e1b4b);\n}\n.rp-card__svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));\n}\n.rp-card__body[_ngcontent-%COMP%] {\n  padding: 1.15rem 1.35rem 1.35rem;\n}\n.rp-card__check[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -0.1rem;\n}\n.rp-card__check[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: rgba(255, 255, 255, 0.2);\n  transition: color 0.2s;\n}\n.rp-card__title[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 0.4rem;\n}\n.rp-card__desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.rp-continue[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 680px;\n  padding: 0.9rem;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #475569;\n  font-size: 0.95rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: not-allowed;\n  transition: all 0.25s;\n}\n.rp-continue--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  border-color: transparent;\n  cursor: pointer;\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.4);\n}\n.rp-continue--active[_ngcontent-%COMP%]:hover {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.rp-continue[_ngcontent-%COMP%]:disabled:not(.rp-continue--active) {\n  opacity: 0.5;\n}\n.rp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.8rem;\n  color: #475569;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.rp-footer__links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n}\n.rp-footer__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #475569;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.rp-footer__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #818cf8;\n}\n.rp-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.rp-modal[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 1.25rem;\n  padding: 2.5rem 2rem;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.rp-modal__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.rp-modal__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #818cf8;\n}\n.rp-modal__title[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0 0 0.75rem;\n}\n.rp-modal__msg[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin: 0 0 1rem;\n}\n.rp-modal__note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  background: rgba(251, 191, 36, 0.07);\n  border: 1px solid rgba(251, 191, 36, 0.2);\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n  color: #fde68a;\n  font-size: 0.88rem;\n  line-height: 1.5;\n  text-align: left;\n  margin: 0 0 1.5rem;\n}\n.rp-modal__note-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-top: 0.05rem;\n  flex-shrink: 0;\n  color: #fbbf24;\n}\n.rp-modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.rp-modal__btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.7rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  transition: opacity 0.2s;\n}\n.rp-modal__btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #10b981);\n  color: #fff;\n  border: none;\n}\n.rp-modal__btn--primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.rp-modal__btn--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #94a3b8;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.rp-modal__btn--outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 600px) {\n  .rp-nav[_ngcontent-%COMP%] {\n    padding: 0.8rem 1.2rem;\n  }\n  .rp-nav__btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .rp-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .rp-title[_ngcontent-%COMP%] {\n    font-size: 1.55rem;\n  }\n  .rp-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [RouterLink, CommonModule], template: `<div class="rp-bg">\r
\r
  <!-- \u2500\u2500 Top Navbar \u2500\u2500 -->\r
  <header class="rp-nav">\r
    <div class="rp-nav__brand">\r
      <span class="material-icons rp-nav__icon">fingerprint</span>\r
      <span class="rp-nav__name">Absensi<strong>Kerja</strong></span>\r
    </div>\r
    <div class="rp-nav__actions">\r
      <a routerLink="/auth/login" class="rp-nav__link">Login</a>\r
      <a href="#" class="rp-nav__btn rp-nav__btn--outline">Hubungi Kami</a>\r
      <a href="#" class="rp-nav__btn rp-nav__btn--solid">Jadwalkan Demo</a>\r
    </div>\r
  </header>\r
\r
  <!-- \u2500\u2500 Main Content \u2500\u2500 -->\r
  <main class="rp-main">\r
\r
    <!-- Badge -->\r
    <div class="rp-badge">\r
      <span class="material-icons">rocket_launch</span>\r
      Mulai Gratis \u2014 Tanpa Kartu Kredit\r
    </div>\r
\r
    <h1 class="rp-title">Daftar ke <span>AbsensiKerja</span></h1>\r
    <p class="rp-subtitle">Pilih peran yang sesuai untuk melanjutkan</p>\r
\r
    <!-- Role Cards -->\r
    <div class="rp-cards">\r
\r
      <div\r
        class="rp-card"\r
        [class.rp-card--selected]="selectedRole === 'employee'"\r
        (click)="selectRole('employee')"\r
      >\r
        <div class="rp-card__illustration rp-card__illustration--yellow">\r
          <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="rp-card__svg">\r
            <!-- desk -->\r
            <rect x="30" y="100" width="140" height="8" rx="4" fill="#c4b5a0"/>\r
            <rect x="40" y="108" width="8" height="30" rx="3" fill="#c4b5a0"/>\r
            <rect x="152" y="108" width="8" height="30" rx="3" fill="#c4b5a0"/>\r
            <!-- monitor -->\r
            <rect x="80" y="60" width="55" height="38" rx="5" fill="#fff" stroke="#d1c4b0" stroke-width="2"/>\r
            <rect x="85" y="65" width="45" height="28" rx="3" fill="#e8f4fd"/>\r
            <!-- lines on screen -->\r
            <rect x="88" y="70" width="30" height="3" rx="1" fill="#93c5fd"/>\r
            <rect x="88" y="76" width="22" height="3" rx="1" fill="#bfdbfe"/>\r
            <rect x="88" y="82" width="26" height="3" rx="1" fill="#bfdbfe"/>\r
            <!-- monitor stand -->\r
            <rect x="103" y="98" width="9" height="6" rx="1" fill="#c4b5a0"/>\r
            <rect x="98" y="103" width="19" height="3" rx="1" fill="#c4b5a0"/>\r
            <!-- person left (sitting) -->\r
            <circle cx="55" cy="60" r="12" fill="#f9a8d4"/>\r
            <rect x="43" y="72" width="24" height="28" rx="8" fill="#6366f1"/>\r
            <!-- legs -->\r
            <rect x="45" y="96" width="9" height="16" rx="4" fill="#fbbf24"/>\r
            <rect x="58" y="96" width="9" height="16" rx="4" fill="#fbbf24"/>\r
            <!-- person right (standing) -->\r
            <circle cx="148" cy="55" r="11" fill="#fdba74"/>\r
            <rect x="137" y="66" width="22" height="26" rx="7" fill="#10b981"/>\r
            <rect x="139" y="90" width="8" height="18" rx="4" fill="#fbbf24"/>\r
            <rect x="150" y="90" width="8" height="18" rx="4" fill="#fbbf24"/>\r
            <!-- plant -->\r
            <rect x="25" y="90" width="6" height="14" rx="2" fill="#78350f"/>\r
            <ellipse cx="28" cy="88" rx="9" ry="10" fill="#16a34a"/>\r
            <ellipse cx="22" cy="84" rx="7" ry="8" fill="#22c55e"/>\r
            <ellipse cx="35" cy="82" rx="7" ry="8" fill="#22c55e"/>\r
          </svg>\r
        </div>\r
        <div class="rp-card__body">\r
          <div class="rp-card__check">\r
            <span class="material-icons">{{ selectedRole === 'employee' ? 'check_circle' : 'radio_button_unchecked' }}</span>\r
          </div>\r
          <h3 class="rp-card__title">Saya adalah karyawan</h3>\r
          <p class="rp-card__desc">Bergabung dengan workspace perusahaan Anda sebagai anggota tim.</p>\r
        </div>\r
      </div>\r
\r
      <div\r
        class="rp-card"\r
        [class.rp-card--selected]="selectedRole === 'owner'"\r
        (click)="selectRole('owner')"\r
      >\r
        <div class="rp-card__illustration rp-card__illustration--blue">\r
          <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="rp-card__svg">\r
            <!-- desk -->\r
            <rect x="30" y="100" width="140" height="8" rx="4" fill="#b8c4d0"/>\r
            <rect x="40" y="108" width="8" height="30" rx="3" fill="#b8c4d0"/>\r
            <rect x="152" y="108" width="8" height="30" rx="3" fill="#b8c4d0"/>\r
            <!-- laptop -->\r
            <rect x="70" y="68" width="60" height="34" rx="5" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>\r
            <rect x="75" y="72" width="50" height="26" rx="3" fill="#dbeafe"/>\r
            <rect x="78" y="76" width="35" height="3" rx="1" fill="#60a5fa"/>\r
            <rect x="78" y="82" width="25" height="3" rx="1" fill="#93c5fd"/>\r
            <rect x="78" y="88" width="30" height="3" rx="1" fill="#93c5fd"/>\r
            <!-- laptop base -->\r
            <rect x="65" y="100" width="70" height="4" rx="2" fill="#b8c4d0"/>\r
            <!-- person (standing, pointing) -->\r
            <circle cx="145" cy="52" r="13" fill="#fdba74"/>\r
            <!-- beard -->\r
            <ellipse cx="145" cy="62" rx="7" ry="5" fill="#92400e" opacity=".4"/>\r
            <rect x="133" y="64" width="24" height="28" rx="8" fill="#f97316"/>\r
            <!-- arm pointing -->\r
            <rect x="120" y="68" width="18" height="7" rx="3" fill="#f97316" transform="rotate(-20 120 68)"/>\r
            <!-- legs -->\r
            <rect x="135" y="90" width="9" height="20" rx="4" fill="#1e293b"/>\r
            <rect x="148" y="90" width="9" height="20" rx="4" fill="#1e293b"/>\r
            <!-- dog/cat on floor -->\r
            <ellipse cx="55" cy="118" rx="18" ry="10" fill="#78350f" opacity=".7"/>\r
            <circle cx="68" cy="113" r="7" fill="#92400e"/>\r
            <ellipse cx="72" cy="110" rx="3" ry="5" fill="#92400e"/>\r
            <ellipse cx="64" cy="110" rx="3" ry="5" fill="#92400e"/>\r
          </svg>\r
        </div>\r
        <div class="rp-card__body">\r
          <div class="rp-card__check">\r
            <span class="material-icons">{{ selectedRole === 'owner' ? 'check_circle' : 'radio_button_unchecked' }}</span>\r
          </div>\r
          <h3 class="rp-card__title">Saya adalah pemilik bisnis</h3>\r
          <p class="rp-card__desc">Daftarkan perusahaan Anda untuk mengelola waktu &amp; kehadiran tim.</p>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Continue Button -->\r
    <button\r
      class="rp-continue"\r
      [class.rp-continue--active]="selectedRole"\r
      [disabled]="!selectedRole"\r
      (click)="onContinue()"\r
    >\r
      Lanjutkan\r
    </button>\r
\r
  </main>\r
\r
  <!-- \u2500\u2500 Footer \u2500\u2500 -->\r
  <footer class="rp-footer">\r
    <span>\xA9 2026 AbsensiKerja. All rights reserved.</span>\r
    <div class="rp-footer__links">\r
      <a href="#">Kebijakan Privasi</a>\r
      <a href="#">Syarat &amp; Ketentuan</a>\r
    </div>\r
  </footer>\r
\r
  <!-- \u2500\u2500 Employee Info Modal \u2500\u2500 -->\r
  <div class="rp-modal-overlay" *ngIf="showEmployeeInfo" (click)="closeEmployeeInfo()">\r
    <div class="rp-modal" (click)="$event.stopPropagation()">\r
      <div class="rp-modal__icon">\r
        <span class="material-icons">info</span>\r
      </div>\r
      <h2 class="rp-modal__title">Informasi Pendaftaran Karyawan</h2>\r
      <p class="rp-modal__msg">\r
        Silakan hubungi admin perusahaan Anda, untuk menambahkan Anda sebagai Karyawan.\r
      </p>\r
      <p class="rp-modal__note">\r
        <span class="material-icons rp-modal__note-icon">lightbulb</span>\r
        <strong>Note:</strong> Pastikan perusahaan Anda sudah menggunakan aplikasi absensi kerja.\r
      </p>\r
      <div class="rp-modal__actions">\r
        <button class="rp-modal__btn rp-modal__btn--primary" (click)="closeEmployeeInfo()">Mengerti</button>\r
        <a routerLink="/auth/login" class="rp-modal__btn rp-modal__btn--outline">Sudah punya akun? Login</a>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/auth/register/register.component.scss */\n:host {\n  display: block;\n}\n.rp-bg {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #0f172a;\n  background-image:\n    radial-gradient(\n      ellipse 60% 50% at 20% 40%,\n      rgba(99, 102, 241, 0.18) 0%,\n      transparent 70%),\n    radial-gradient(\n      ellipse 50% 60% at 80% 70%,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n  font-family: inherit;\n}\n.rp-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.9rem 2.5rem;\n  background: rgba(15, 23, 42, 0.8);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.rp-nav__brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: #f1f5f9;\n  text-decoration: none;\n}\n.rp-nav__icon {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 8px;\n  padding: 0.3rem;\n  font-size: 1.3rem;\n  color: #fff;\n}\n.rp-nav__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n.rp-nav__link {\n  font-size: 0.88rem;\n  color: #94a3b8;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.rp-nav__link:hover {\n  color: #a5b4fc;\n}\n.rp-nav__btn {\n  font-size: 0.83rem;\n  font-weight: 600;\n  padding: 0.42rem 1.1rem;\n  border-radius: 20px;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.rp-nav__btn--outline {\n  border: 1.5px solid rgba(255, 255, 255, 0.15);\n  color: #cbd5e1;\n}\n.rp-nav__btn--outline:hover {\n  border-color: #a5b4fc;\n  color: #a5b4fc;\n}\n.rp-nav__btn--solid {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  border: none;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.rp-nav__btn--solid:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.rp-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4rem 1.5rem 3rem;\n}\n.rp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(99, 102, 241, 0.3);\n  color: #a5b4fc;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.3rem 0.9rem;\n  border-radius: 20px;\n  letter-spacing: 0.4px;\n  margin-bottom: 1.25rem;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.rp-badge .material-icons {\n  font-size: 0.9rem;\n}\n.rp-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #f1f5f9;\n  margin: 0 0 0.5rem;\n  text-align: center;\n}\n.rp-title span {\n  background:\n    linear-gradient(\n      90deg,\n      #818cf8,\n      #c084fc);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.rp-subtitle {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin: 0 0 2.5rem;\n  text-align: center;\n}\n.rp-cards {\n  display: flex;\n  gap: 1.5rem;\n  width: 100%;\n  max-width: 680px;\n  margin-bottom: 2rem;\n}\n.rp-card {\n  flex: 1;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  background: #1e293b;\n  cursor: pointer;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    transform 0.2s;\n  overflow: hidden;\n}\n.rp-card:hover {\n  border-color: rgba(99, 102, 241, 0.5);\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.18);\n  transform: translateY(-3px);\n}\n.rp-card--selected {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25), 0 12px 40px rgba(99, 102, 241, 0.2);\n}\n.rp-card--selected .rp-card__check .material-icons {\n  color: #818cf8;\n}\n.rp-card__illustration {\n  width: 100%;\n  height: 175px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rp-card__illustration--yellow {\n  background:\n    linear-gradient(\n      135deg,\n      #1c1917,\n      #292524);\n}\n.rp-card__illustration--blue {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e1b4b);\n}\n.rp-card__svg {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));\n}\n.rp-card__body {\n  padding: 1.15rem 1.35rem 1.35rem;\n}\n.rp-card__check {\n  float: right;\n  margin-top: -0.1rem;\n}\n.rp-card__check .material-icons {\n  font-size: 1.3rem;\n  color: rgba(255, 255, 255, 0.2);\n  transition: color 0.2s;\n}\n.rp-card__title {\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 0.4rem;\n}\n.rp-card__desc {\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.rp-continue {\n  width: 100%;\n  max-width: 680px;\n  padding: 0.9rem;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  color: #475569;\n  font-size: 0.95rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: not-allowed;\n  transition: all 0.25s;\n}\n.rp-continue--active {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  border-color: transparent;\n  cursor: pointer;\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.4);\n}\n.rp-continue--active:hover {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.rp-continue:disabled:not(.rp-continue--active) {\n  opacity: 0.5;\n}\n.rp-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.8rem;\n  color: #475569;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.rp-footer__links {\n  display: flex;\n  gap: 1.25rem;\n}\n.rp-footer__links a {\n  color: #475569;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.rp-footer__links a:hover {\n  color: #818cf8;\n}\n.rp-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.rp-modal {\n  background: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 1.25rem;\n  padding: 2.5rem 2rem;\n  max-width: 420px;\n  width: 90%;\n  text-align: center;\n  animation: slideUp 0.25s ease;\n}\n.rp-modal__icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.rp-modal__icon .material-icons {\n  font-size: 1.8rem;\n  color: #818cf8;\n}\n.rp-modal__title {\n  color: #f1f5f9;\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0 0 0.75rem;\n}\n.rp-modal__msg {\n  color: #94a3b8;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin: 0 0 1rem;\n}\n.rp-modal__note {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  background: rgba(251, 191, 36, 0.07);\n  border: 1px solid rgba(251, 191, 36, 0.2);\n  border-radius: 0.75rem;\n  padding: 0.75rem 1rem;\n  color: #fde68a;\n  font-size: 0.88rem;\n  line-height: 1.5;\n  text-align: left;\n  margin: 0 0 1.5rem;\n}\n.rp-modal__note-icon {\n  font-size: 1.1rem;\n  margin-top: 0.05rem;\n  flex-shrink: 0;\n  color: #fbbf24;\n}\n.rp-modal__actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.rp-modal__btn {\n  display: block;\n  width: 100%;\n  padding: 0.7rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  transition: opacity 0.2s;\n}\n.rp-modal__btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #10b981);\n  color: #fff;\n  border: none;\n}\n.rp-modal__btn--primary:hover {\n  opacity: 0.85;\n}\n.rp-modal__btn--outline {\n  background: transparent;\n  color: #94a3b8;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.rp-modal__btn--outline:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 600px) {\n  .rp-nav {\n    padding: 0.8rem 1.2rem;\n  }\n  .rp-nav__btn {\n    display: none;\n  }\n  .rp-cards {\n    flex-direction: column;\n  }\n  .rp-title {\n    font-size: 1.55rem;\n  }\n  .rp-footer {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 12 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-ZNYJ6B5X.js.map
