import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/laporan/laporan-list/laporan-list.component.ts
var LaporanListComponent = class _LaporanListComponent {
  static {
    this.\u0275fac = function LaporanListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LaporanListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LaporanListComponent, selectors: [["app-laporan-list"]], decls: 5, vars: 0, consts: [[2, "padding", "2rem", "font-family", "Inter,sans-serif"]], template: function LaporanListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Laporan Absensi");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "p");
        \u0275\u0275text(4, "Halaman ini akan dikembangkan pada Phase 7.");
        \u0275\u0275domElementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaporanListComponent, [{
    type: Component,
    args: [{
      selector: "app-laporan-list",
      standalone: true,
      template: `
    <div style="padding:2rem; font-family:Inter,sans-serif">
      <h1>Laporan Absensi</h1>
      <p>Halaman ini akan dikembangkan pada Phase 7.</p>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LaporanListComponent, { className: "LaporanListComponent", filePath: "src/app/features/laporan/laporan-list/laporan-list.component.ts", lineNumber: 13 });
})();
export {
  LaporanListComponent
};
//# sourceMappingURL=chunk-R4YQR2C5.js.map
