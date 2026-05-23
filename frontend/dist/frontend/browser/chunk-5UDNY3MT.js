import {
  ActivatedRoute,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/verify-email/verify-email.component.ts
function VerifyEmailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 12)(2, "polyline", 13);
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "circle", 14)(2, "line", 15)(3, "line", 16);
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email Anda telah berhasil diverifikasi.");
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2, " Akun Anda kini ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "aktif");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " dan siap digunakan untuk login. ");
  }
}
function VerifyEmailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2, " Silakan hubungi administrator perusahaan Anda jika masalah berlanjut. ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg());
  }
}
function VerifyEmailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 17);
    \u0275\u0275text(2, "Langkah selanjutnya");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol", 18)(4, "li");
    \u0275\u0275text(5, "Klik tombol ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, '"Masuk ke Akun"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " di bawah");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275text(10, "Gunakan ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " dan ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "kata sandi");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Anda untuk login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Mulai menggunakan AbsensiKerja");
    \u0275\u0275elementEnd()()();
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.isSuccess = signal(true, ...ngDevMode ? [{ debugName: "isSuccess" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorMsg = signal("Token verifikasi tidak valid atau sudah digunakan.", ...ngDevMode ? [{ debugName: "errorMsg" }] : (
      /* istanbul ignore next */
      []
    ));
    const qp = this.route.snapshot.queryParamMap;
    const status = qp.get("status");
    if (status === "failed") {
      this.isSuccess.set(false);
      const msg = qp.get("message");
      if (msg)
        this.errorMsg.set(msg);
    } else {
      this.isSuccess.set(true);
    }
  }
  static {
    this.\u0275fac = function VerifyEmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerifyEmailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], decls: 20, vars: 8, consts: [[1, "ve-bg"], [1, "ve-card"], [1, "ve-icon"], ["viewBox", "0 0 24 24", "width", "64", "height", "64", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "ve-title"], [1, "ve-msg"], [1, "ve-info"], [1, "ve-actions"], ["routerLink", "/auth/login", 1, "ve-btn", "ve-btn--primary"], [1, "material-icons"], ["routerLink", "/", 1, "ve-btn", "ve-btn--ghost"], [1, "ve-footer"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "ve-info__label"], [1, "ve-info__list"]], template: function VerifyEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275conditionalCreate(3, VerifyEmailComponent_Conditional_3_Template, 3, 0, ":svg:svg", 3)(4, VerifyEmailComponent_Conditional_4_Template, 4, 0, ":svg:svg", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275conditionalCreate(8, VerifyEmailComponent_Conditional_8_Template, 6, 0)(9, VerifyEmailComponent_Conditional_9_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, VerifyEmailComponent_Conditional_10_Template, 19, 0, "div", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "a", 8)(13, "span", 9);
        \u0275\u0275text(14, "login");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Masuk ke Akun ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 10);
        \u0275\u0275text(17, " Kembali ke Beranda ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "p", 11);
        \u0275\u0275text(19, "\xA9 2026 AbsensiKerja \xB7 Sistem Absensi Digital");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("ve-card--err", !ctx.isSuccess());
        \u0275\u0275advance();
        \u0275\u0275classProp("ve-icon--err", !ctx.isSuccess());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSuccess() ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isSuccess() ? "Verifikasi Berhasil! \u{1F389}" : "Verifikasi Gagal", " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSuccess() ? 8 : 9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSuccess() ? 10 : -1);
      }
    }, dependencies: [RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.ve-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #ede9fe 50%,\n      #f0fdf4 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  font-family:\n    "Segoe UI",\n    Arial,\n    sans-serif;\n}\n.ve-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 48px 40px;\n  max-width: 520px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(79, 70, 229, .15);\n  border: 1px solid #e0e7ff;\n  text-align: center;\n  animation: _ngcontent-%COMP%_ve-fade .5s ease-out;\n}\n.ve-card--err[_ngcontent-%COMP%] {\n  border-color: #fecaca;\n  box-shadow: 0 20px 60px rgba(239, 68, 68, .15);\n}\n@keyframes _ngcontent-%COMP%_ve-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ve-icon[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 24px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #10b981);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, .35);\n  animation: _ngcontent-%COMP%_ve-bounce .6s cubic-bezier(.34, 1.56, .64, 1);\n}\n.ve-icon--err[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n  box-shadow: 0 8px 24px rgba(239, 68, 68, .35);\n}\n@keyframes _ngcontent-%COMP%_ve-bounce {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.15);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.ve-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 12px;\n  letter-spacing: -.5px;\n}\n.ve-msg[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 15px;\n  line-height: 1.7;\n  margin: 0 0 28px;\n}\n.ve-info[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 20px 24px;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.ve-info__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #166534;\n  text-transform: uppercase;\n  letter-spacing: .8px;\n  margin-bottom: 10px;\n}\n.ve-info__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  color: #334155;\n  font-size: 14px;\n  line-height: 2;\n}\n.ve-info__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #22c55e;\n  font-weight: 700;\n}\n.ve-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.ve-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px 28px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 600;\n  transition: all .2s;\n}\n.ve-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.ve-btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, .35);\n}\n.ve-btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, .45);\n}\n.ve-btn--ghost[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.ve-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.ve-footer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 16px 0 0;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n/*# sourceMappingURL=verify-email.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyEmailComponent, [{
    type: Component,
    args: [{ selector: "app-verify-email", standalone: true, imports: [RouterLink], template: `
    <div class="ve-bg">
      <div class="ve-card" [class.ve-card--err]="!isSuccess()">
        <!-- Icon -->
        <div class="ve-icon" [class.ve-icon--err]="!isSuccess()">
          @if (isSuccess()) {
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          }
        </div>

        <!-- Title -->
        <h1 class="ve-title">
          {{ isSuccess() ? 'Verifikasi Berhasil! \u{1F389}' : 'Verifikasi Gagal' }}
        </h1>

        <!-- Message -->
        <p class="ve-msg">
          @if (isSuccess()) {
            Email Anda telah berhasil diverifikasi.<br/>
            Akun Anda kini <strong>aktif</strong> dan siap digunakan untuk login.
          } @else {
            {{ errorMsg() }}<br/>
            Silakan hubungi administrator perusahaan Anda jika masalah berlanjut.
          }
        </p>

        <!-- Info box -->
        @if (isSuccess()) {
          <div class="ve-info">
            <div class="ve-info__label">Langkah selanjutnya</div>
            <ol class="ve-info__list">
              <li>Klik tombol <strong>"Masuk ke Akun"</strong> di bawah</li>
              <li>Gunakan <strong>email</strong> dan <strong>kata sandi</strong> Anda untuk login</li>
              <li>Mulai menggunakan AbsensiKerja</li>
            </ol>
          </div>
        }

        <!-- Actions -->
        <div class="ve-actions">
          <a class="ve-btn ve-btn--primary" routerLink="/auth/login">
            <span class="material-icons">login</span>
            Masuk ke Akun
          </a>
          <a class="ve-btn ve-btn--ghost" routerLink="/">
            Kembali ke Beranda
          </a>
        </div>

        <p class="ve-footer">\xA9 2026 AbsensiKerja \xB7 Sistem Absensi Digital</p>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;5f2de8ffa8713427b1e5c44bf797a53156820dd343a5238b90682d1f940eb426;C:/Users/Muhriz/Music/absensikerja/frontend/src/app/features/auth/verify-email/verify-email.component.ts */\n:host {\n  display: block;\n}\n.ve-bg {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #ede9fe 50%,\n      #f0fdf4 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  font-family:\n    "Segoe UI",\n    Arial,\n    sans-serif;\n}\n.ve-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 48px 40px;\n  max-width: 520px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(79, 70, 229, .15);\n  border: 1px solid #e0e7ff;\n  text-align: center;\n  animation: ve-fade .5s ease-out;\n}\n.ve-card--err {\n  border-color: #fecaca;\n  box-shadow: 0 20px 60px rgba(239, 68, 68, .15);\n}\n@keyframes ve-fade {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ve-icon {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 24px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #10b981);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, .35);\n  animation: ve-bounce .6s cubic-bezier(.34, 1.56, .64, 1);\n}\n.ve-icon--err {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n  box-shadow: 0 8px 24px rgba(239, 68, 68, .35);\n}\n@keyframes ve-bounce {\n  0% {\n    transform: scale(0);\n  }\n  60% {\n    transform: scale(1.15);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.ve-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 12px;\n  letter-spacing: -.5px;\n}\n.ve-msg {\n  color: #475569;\n  font-size: 15px;\n  line-height: 1.7;\n  margin: 0 0 28px;\n}\n.ve-info {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 20px 24px;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.ve-info__label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #166534;\n  text-transform: uppercase;\n  letter-spacing: .8px;\n  margin-bottom: 10px;\n}\n.ve-info__list {\n  margin: 0;\n  padding-left: 20px;\n  color: #334155;\n  font-size: 14px;\n  line-height: 2;\n}\n.ve-info__list li::marker {\n  color: #22c55e;\n  font-weight: 700;\n}\n.ve-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.ve-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px 28px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 600;\n  transition: all .2s;\n}\n.ve-btn .material-icons {\n  font-size: 20px;\n}\n.ve-btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, .35);\n}\n.ve-btn--primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, .45);\n}\n.ve-btn--ghost {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.ve-btn--ghost:hover {\n  background: #e2e8f0;\n}\n.ve-footer {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 16px 0 0;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n/*# sourceMappingURL=verify-email.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent", filePath: "src/app/features/auth/verify-email/verify-email.component.ts", lineNumber: 153 });
})();
export {
  VerifyEmailComponent
};
//# sourceMappingURL=chunk-5UDNY3MT.js.map
