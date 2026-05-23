import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/unauthorized/unauthorized.component.ts
var UnauthorizedComponent = class _UnauthorizedComponent {
  constructor() {
    this.auth = inject(AuthService);
  }
  static {
    this.\u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnauthorizedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 122, vars: 5, consts: [[1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", 2, "min-height", "60vh", "padding", "2rem"], [1, "mb-4", "position-relative"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mx-auto", 2, "width", "120px", "height", "120px", "background", "linear-gradient(135deg,#fee2e2,#fecaca)"], [1, "bx", "bx-shield-x", 2, "font-size", "3.5rem", "color", "#dc2626"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger", 2, "font-size", "1rem", "padding", ".4rem .65rem"], [1, "fw-bold", "mb-2"], [1, "text-muted", "mb-1", 2, "max-width", "420px"], [1, "text-muted", "mb-4", 2, "font-size", ".85rem"], [1, "badge", "ms-1"], [1, "card", "border-0", "shadow-sm", "mb-4", "text-start", 2, "max-width", "500px", "width", "100%"], [1, "card-header", "bg-transparent", "border-0", "pb-0", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-info-circle", "text-info", "fs-5"], [1, "mb-0", "fw-semibold"], [1, "card-body", "pt-2"], [1, "table-responsive"], [1, "table", "table-sm", "align-middle", "mb-0", 2, "font-size", ".82rem"], [1, "table-light"], [1, "text-center"], [1, "bx", "bx-home-circle", "me-1", "text-primary"], [1, "bx", "bx-check-circle", "text-success", "fs-5"], [1, "bx", "bx-fingerprint", "me-1", "text-primary"], [1, "bx", "bx-buildings", "me-1", "text-primary"], [1, "bx", "bx-x-circle", "text-danger", "fs-5"], [1, "bx", "bx-briefcase", "me-1", "text-primary"], [1, "bx", "bx-group", "me-1", "text-primary"], [1, "bx", "bx-map", "me-1", "text-primary"], [1, "bx", "bx-calendar", "me-1", "text-primary"], [1, "bx", "bx-file", "me-1", "text-primary"], [1, "d-flex", "gap-2", "flex-wrap", "justify-content-center"], ["routerLink", "/dashboard", 1, "btn", "btn-primary", "px-4"], [1, "bx", "bx-home-alt", "me-1"], ["onclick", "history.back()", 1, "btn", "btn-outline-secondary", "px-4"], [1, "bx", "bx-arrow-back", "me-1"]], template: function UnauthorizedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        \u0275\u0275element(4, "i", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "403");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h3", 5);
        \u0275\u0275text(8, "Akses Ditolak");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " Maaf, kamu tidak memiliki izin untuk mengakses halaman ini. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, " Role kamu saat ini: ");
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " tidak memiliki akses ke halaman ini. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
        \u0275\u0275element(18, "i", 11);
        \u0275\u0275elementStart(19, "h6", 12);
        \u0275\u0275text(20, "Hak Akses per Role");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "table", 15)(24, "thead", 16)(25, "tr")(26, "th");
        \u0275\u0275text(27, "Fitur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 17);
        \u0275\u0275text(29, "PEMILIK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 17);
        \u0275\u0275text(31, "ADMIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th", 17);
        \u0275\u0275text(33, "KARYAWAN");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "tbody")(35, "tr")(36, "td");
        \u0275\u0275element(37, "i", 18);
        \u0275\u0275text(38, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "td", 17);
        \u0275\u0275element(40, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "td", 17);
        \u0275\u0275element(42, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "td", 17);
        \u0275\u0275element(44, "i", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "tr")(46, "td");
        \u0275\u0275element(47, "i", 20);
        \u0275\u0275text(48, "Absensi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "td", 17);
        \u0275\u0275element(50, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "td", 17);
        \u0275\u0275element(52, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "td", 17);
        \u0275\u0275element(54, "i", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "tr")(56, "td");
        \u0275\u0275element(57, "i", 21);
        \u0275\u0275text(58, "Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "td", 17);
        \u0275\u0275element(60, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "td", 17);
        \u0275\u0275element(62, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "td", 17);
        \u0275\u0275element(64, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "tr")(66, "td");
        \u0275\u0275element(67, "i", 23);
        \u0275\u0275text(68, "Jabatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "td", 17);
        \u0275\u0275element(70, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "td", 17);
        \u0275\u0275element(72, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "td", 17);
        \u0275\u0275element(74, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "tr")(76, "td");
        \u0275\u0275element(77, "i", 24);
        \u0275\u0275text(78, "Data Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "td", 17);
        \u0275\u0275element(80, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "td", 17);
        \u0275\u0275element(82, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "td", 17);
        \u0275\u0275element(84, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "tr")(86, "td");
        \u0275\u0275element(87, "i", 25);
        \u0275\u0275text(88, "Lokasi Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "td", 17);
        \u0275\u0275element(90, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "td", 17);
        \u0275\u0275element(92, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "td", 17);
        \u0275\u0275element(94, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "tr")(96, "td");
        \u0275\u0275element(97, "i", 26);
        \u0275\u0275text(98, "Jadwal & Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "td", 17);
        \u0275\u0275element(100, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "td", 17);
        \u0275\u0275element(102, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "td", 17);
        \u0275\u0275element(104, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "tr")(106, "td");
        \u0275\u0275element(107, "i", 27);
        \u0275\u0275text(108, "Laporan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "td", 17);
        \u0275\u0275element(110, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "td", 17);
        \u0275\u0275element(112, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "td", 17);
        \u0275\u0275element(114, "i", 22);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(115, "div", 28)(116, "a", 29);
        \u0275\u0275element(117, "i", 30);
        \u0275\u0275text(118, " Ke Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "button", 31);
        \u0275\u0275element(120, "i", 32);
        \u0275\u0275text(121, " Kembali ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(13);
        \u0275\u0275styleProp("background", ((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.role) === "ADMIN" ? "#dbeafe" : ((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.role) === "PEMILIK" ? "#dcfce7" : "#fef3c7")("color", ((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.role) === "ADMIN" ? "#1e40af" : ((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.role) === "PEMILIK" ? "#166534" : "#92400e");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.role) ?? "-", " ");
      }
    }, dependencies: [RouterLink, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorized", standalone: true, imports: [RouterLink, LayoutComponent], template: `<app-layout>\r
  <div class="d-flex flex-column align-items-center justify-content-center text-center"\r
       style="min-height: 60vh; padding: 2rem">\r
\r
    <!-- Ilustrasi -->\r
    <div class="mb-4 position-relative">\r
      <div class="rounded-circle d-flex align-items-center justify-content-center mx-auto"\r
           style="width:120px;height:120px;background:linear-gradient(135deg,#fee2e2,#fecaca)">\r
        <i class="bx bx-shield-x" style="font-size:3.5rem;color:#dc2626"></i>\r
      </div>\r
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"\r
            style="font-size:1rem;padding:.4rem .65rem">403</span>\r
    </div>\r
\r
    <!-- Pesan -->\r
    <h3 class="fw-bold mb-2">Akses Ditolak</h3>\r
    <p class="text-muted mb-1" style="max-width:420px">\r
      Maaf, kamu tidak memiliki izin untuk mengakses halaman ini.\r
    </p>\r
    <p class="text-muted mb-4" style="font-size:.85rem">\r
      Role kamu saat ini:\r
      <span class="badge ms-1"\r
            [style.background]="auth.currentUser()?.role === 'ADMIN' ? '#dbeafe' :\r
                                auth.currentUser()?.role === 'PEMILIK' ? '#dcfce7' : '#fef3c7'"\r
            [style.color]="auth.currentUser()?.role === 'ADMIN' ? '#1e40af' :\r
                           auth.currentUser()?.role === 'PEMILIK' ? '#166534' : '#92400e'">\r
        {{ auth.currentUser()?.role ?? '-' }}\r
      </span>\r
      tidak memiliki akses ke halaman ini.\r
    </p>\r
\r
    <!-- Role Matrix Info -->\r
    <div class="card border-0 shadow-sm mb-4 text-start" style="max-width:500px;width:100%">\r
      <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
        <i class="bx bx-info-circle text-info fs-5"></i>\r
        <h6 class="mb-0 fw-semibold">Hak Akses per Role</h6>\r
      </div>\r
      <div class="card-body pt-2">\r
        <div class="table-responsive">\r
          <table class="table table-sm align-middle mb-0" style="font-size:.82rem">\r
            <thead class="table-light">\r
              <tr>\r
                <th>Fitur</th>\r
                <th class="text-center">PEMILIK</th>\r
                <th class="text-center">ADMIN</th>\r
                <th class="text-center">KARYAWAN</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr>\r
                <td><i class="bx bx-home-circle me-1 text-primary"></i>Dashboard</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-fingerprint me-1 text-primary"></i>Absensi</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-buildings me-1 text-primary"></i>Divisi</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-x-circle text-danger fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-briefcase me-1 text-primary"></i>Jabatan</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-x-circle text-danger fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-group me-1 text-primary"></i>Data Karyawan</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-x-circle text-danger fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-map me-1 text-primary"></i>Lokasi Kehadiran</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-x-circle text-danger fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-calendar me-1 text-primary"></i>Jadwal & Shift</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-x-circle text-danger fs-5"></i></td>\r
              </tr>\r
              <tr>\r
                <td><i class="bx bx-file me-1 text-primary"></i>Laporan</td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-check-circle text-success fs-5"></i></td>\r
                <td class="text-center"><i class="bx bx-x-circle text-danger fs-5"></i></td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Tombol aksi -->\r
    <div class="d-flex gap-2 flex-wrap justify-content-center">\r
      <a routerLink="/dashboard" class="btn btn-primary px-4">\r
        <i class="bx bx-home-alt me-1"></i> Ke Dashboard\r
      </a>\r
      <button class="btn btn-outline-secondary px-4" onclick="history.back()">\r
        <i class="bx bx-arrow-back me-1"></i> Kembali\r
      </button>\r
    </div>\r
\r
  </div>\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/features/unauthorized/unauthorized.component.ts", lineNumber: 12 });
})();
export {
  UnauthorizedComponent
};
//# sourceMappingURL=chunk-VCHCBLE7.js.map
