import {
  AbsensiService
} from "./chunk-ZRLBCAEX.js";
import {
  KaryawanService
} from "./chunk-XASWB4SK.js";
import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DVNMOIF6.js";
import {
  environment
} from "./chunk-QWPH3JTV.js";
import "./chunk-CR3SFDDN.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/karyawan/karyawan-lembur/karyawan-lembur.component.ts
var _c0 = (a0) => ["/karyawan", a0];
var _c1 = (a0) => ["/karyawan", a0, "kehadiran"];
var _forTrack0 = ($index, $item) => $item.tanggal;
function KaryawanLemburComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "a", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.karyawan().id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.karyawan().namaLengkap);
  }
}
function KaryawanLemburComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanLemburComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementEnd();
  }
}
function KaryawanLemburComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.karyawan().namaJabatan, " ");
  }
}
function KaryawanLemburComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function KaryawanLemburComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "span", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3, "Memuat data lembur...");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanLemburComponent_Conditional_48_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275text(3, " Tidak ada data lembur untuk filter ini. ");
    \u0275\u0275elementEnd()();
  }
}
function KaryawanLemburComponent_Conditional_48_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function KaryawanLemburComponent_Conditional_48_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementEnd();
  }
}
function KaryawanLemburComponent_Conditional_48_For_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.namaDivisi);
  }
}
function KaryawanLemburComponent_Conditional_48_For_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.namaPolaKerja);
  }
}
function KaryawanLemburComponent_Conditional_48_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55)(2, "div", 56);
    \u0275\u0275conditionalCreate(3, KaryawanLemburComponent_Conditional_48_For_15_Conditional_3_Template, 1, 1, "img", 57)(4, KaryawanLemburComponent_Conditional_48_For_15_Conditional_4_Template, 2, 0, "div", 58);
    \u0275\u0275elementStart(5, "div")(6, "div", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, KaryawanLemburComponent_Conditional_48_For_15_Conditional_10_Template, 2, 1, "div", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 62)(12, "div", 63)(13, "span", 64);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "i", 65);
    \u0275\u0275elementStart(16, "span", 64);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, KaryawanLemburComponent_Conditional_48_For_15_Conditional_18_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 62)(20, "span", 67);
    \u0275\u0275element(21, "i", 68);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 69)(24, "a", 70);
    \u0275\u0275text(25, " Detail ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_19_0;
    const a_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = ctx_r0.fotoUrl(a_r3.fotoProfil)) ? 3 : 4, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r3.namaKaryawan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTanggal(a_r3.tanggal), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r3.namaDivisi ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r3.jamMulaiLembur));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatJam(a_r3.jamSelesaiLembur));
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r3.namaPolaKerja ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.formatDurasi(a_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, (tmp_19_0 = ctx_r0.karyawan()) == null ? null : tmp_19_0.id));
  }
}
function KaryawanLemburComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th", 40);
    \u0275\u0275text(5, "Karyawan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 41);
    \u0275\u0275text(7, "Waktu Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 42);
    \u0275\u0275text(9, "Total Lembur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, "Aksi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275conditionalCreate(13, KaryawanLemburComponent_Conditional_48_Conditional_13_Template, 4, 0, "tr");
    \u0275\u0275repeaterCreate(14, KaryawanLemburComponent_Conditional_48_For_15_Template, 26, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 44)(17, "div", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 46)(20, "button", 47);
    \u0275\u0275listener("click", function KaryawanLemburComponent_Conditional_48_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.halaman.set(1));
    });
    \u0275\u0275element(21, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 47);
    \u0275\u0275listener("click", function KaryawanLemburComponent_Conditional_48_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.halamanSebelumnya());
    });
    \u0275\u0275element(23, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 50);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 47);
    \u0275\u0275listener("click", function KaryawanLemburComponent_Conditional_48_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.halamanBerikutnya());
    });
    \u0275\u0275element(27, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 47);
    \u0275\u0275listener("click", function KaryawanLemburComponent_Conditional_48_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.halaman.set(ctx_r0.totalHalaman()));
    });
    \u0275\u0275element(29, "i", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r0.listHalaman().length === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.listHalaman());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Menampilkan ", ctx_r0.listHalaman().length, " dari ", ctx_r0.totalData(), " total data ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.halaman() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.halaman() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.halaman(), " / ", ctx_r0.totalHalaman());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.halaman() >= ctx_r0.totalHalaman());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.halaman() >= ctx_r0.totalHalaman());
  }
}
var KaryawanLemburComponent = class _KaryawanLemburComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.karyawanSvc = inject(KaryawanService);
    this.absensiSvc = inject(AbsensiService);
    this.karyawan = signal(null, ...ngDevMode ? [{ debugName: "karyawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.today = /* @__PURE__ */ new Date();
    this.dariTgl = signal(this.toIso(this.defaultFrom), ...ngDevMode ? [{ debugName: "dariTgl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sampaiTgl = signal(this.toIso(this.today), ...ngDevMode ? [{ debugName: "sampaiTgl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cari = signal("", ...ngDevMode ? [{ debugName: "cari" }] : (
      /* istanbul ignore next */
      []
    ));
    this.PAGE_SIZE = 10;
    this.halaman = signal(1, ...ngDevMode ? [{ debugName: "halaman" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listLembur = computed(() => this.list().filter((a) => a.jamMulaiLembur), ...ngDevMode ? [{ debugName: "listLembur" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listFiltered = computed(() => {
      const kata = this.cari().toLowerCase().trim();
      const dari = this.dariTgl();
      const sampai = this.sampaiTgl();
      return this.listLembur().filter((a) => {
        const tglOk = (!dari || a.tanggal >= dari) && (!sampai || a.tanggal <= sampai);
        const cariOk = !kata || a.namaKaryawan?.toLowerCase().includes(kata) || a.tanggal.includes(kata);
        return tglOk && cariOk;
      });
    }, ...ngDevMode ? [{ debugName: "listFiltered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalData = computed(() => this.listFiltered().length, ...ngDevMode ? [{ debugName: "totalData" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalHalaman = computed(() => Math.max(1, Math.ceil(this.totalData() / this.PAGE_SIZE)), ...ngDevMode ? [{ debugName: "totalHalaman" }] : (
      /* istanbul ignore next */
      []
    ));
    this.listHalaman = computed(() => {
      const start = (this.halaman() - 1) * this.PAGE_SIZE;
      return this.listFiltered().slice(start, start + this.PAGE_SIZE);
    }, ...ngDevMode ? [{ debugName: "listHalaman" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  toDateStr(d) {
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
  }
  toIso(d) {
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
  }
  // default: 1 bulan ke belakang s/d hari ini
  get defaultFrom() {
    const d = new Date(this.today);
    d.setMonth(d.getMonth() - 1);
    return d;
  }
  // ── Methods ────────────────────────────────────────────────
  fotoUrl(path) {
    if (!path)
      return null;
    if (path.startsWith("http"))
      return path;
    return `${environment.baseUrl}/${path}`;
  }
  formatTanggal(tgl) {
    const d = new Date(tgl);
    const hari = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][d.getDay()];
    const bln = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][d.getMonth()];
    return `${hari}, ${d.getDate()} ${bln} ${d.getFullYear()}`;
  }
  formatJam(jam) {
    if (!jam)
      return "\u2014";
    return jam.substring(0, 5);
  }
  formatDurasi(a) {
    if (!a.jamMulaiLembur || !a.jamSelesaiLembur)
      return "\u2014";
    const [h1, m1] = a.jamMulaiLembur.split(":").map(Number);
    const [h2, m2] = a.jamSelesaiLembur.split(":").map(Number);
    const total = h2 * 60 + m2 - (h1 * 60 + m1);
    if (total <= 0)
      return "\u2014";
    const jam = Math.floor(total / 60);
    const mnt = total % 60;
    const parts = [];
    if (jam > 0)
      parts.push(`${jam} jam`);
    if (mnt > 0)
      parts.push(`${mnt} menit`);
    return parts.join(" ");
  }
  resetFilter() {
    this.dariTgl.set(this.toIso(this.defaultFrom));
    this.sampaiTgl.set(this.toIso(this.today));
    this.cari.set("");
    this.halaman.set(1);
    this.loadData();
  }
  cariData() {
    this.halaman.set(1);
  }
  halamanSebelumnya() {
    if (this.halaman() > 1)
      this.halaman.set(this.halaman() - 1);
  }
  halamanBerikutnya() {
    if (this.halaman() < this.totalHalaman())
      this.halaman.set(this.halaman() + 1);
  }
  loadData() {
    const k = this.karyawan();
    if (!k)
      return;
    this.loading.set(true);
    const tahunIni = this.today.getFullYear();
    const requests = [tahunIni, tahunIni - 1];
    let allData = [];
    let done = 0;
    for (const tahun of requests) {
      for (let bulan = 1; bulan <= 12; bulan++) {
        this.absensiSvc.getRiwayatByKaryawan(k.id, bulan, tahun).subscribe({
          next: (data) => {
            allData = [...allData, ...data.filter((a) => a.jamMulaiLembur)];
            done++;
            if (done === requests.length * 12) {
              allData.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
              this.list.set(allData);
              this.loading.set(false);
            }
          },
          error: () => {
            done++;
            if (done === requests.length * 12) {
              allData.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
              this.list.set(allData);
              this.loading.set(false);
            }
          }
        });
      }
    }
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.karyawanSvc.findById(id).subscribe({
      next: (k) => {
        this.karyawan.set(k);
        this.loadData();
      },
      error: () => {
        this.error.set("Gagal memuat data karyawan.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function KaryawanLemburComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KaryawanLemburComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KaryawanLemburComponent, selectors: [["app-karyawan-lembur"]], decls: 49, vars: 14, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["routerLink", "/karyawan"], [1, "breadcrumb-item", "active"], [1, "info-bar", "card", "border-0", "shadow-sm", "mb-3", "px-4", "py-3", "d-flex", "flex-row", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", 2, "width", "44px", "height", "44px", "object-fit", "cover", "border", "2px solid #e9ecef", "flex-shrink", "0", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "44px", "height", "44px", "background", "#f3f4f6", "color", "#9ca3af", "font-size", "1.2rem", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-bold", 2, "font-size", "1rem"], [1, "text-muted", "small"], [1, "btn", "btn-outline-secondary", "btn-sm", "px-3", 3, "routerLink"], [1, "bx", "bx-arrow-back", "me-1"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "card", "border-0", "shadow-sm"], [1, "px-4", "pt-4", "pb-3", "border-bottom"], [1, "fw-bold", "mb-3", 2, "font-size", "1.1rem"], [1, "bx", "bx-moon", "me-2", "text-warning"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2", "justify-content-between"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["type", "date", 1, "form-control", "form-control-sm", 2, "width", "155px", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Cari...", 1, "form-control", "form-control-sm", 2, "width", "180px", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-secondary", "px-3", 3, "click"], [1, "bx", "bx-search"], ["title", "Reset filter", 1, "btn", "btn-sm", "btn-danger", "px-3", 3, "click"], [1, "bx", "bx-reset"], [1, "px-4", "py-2", "border-bottom", 2, "background", "#f9fafb", "font-size", ".78rem", "color", "#9ca3af", "font-style", "italic"], [1, "text-center", "py-5", "text-muted"], [3, "routerLink"], [1, "bx", "bx-user"], [1, "bx", "bx-error-circle", "fs-5"], [1, "spinner-border", "text-warning", "mb-3"], [1, "mb-0", "small"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".85rem"], [2, "min-width", "240px"], [2, "min-width", "200px"], [2, "min-width", "130px"], [1, "text-center", 2, "min-width", "80px"], [1, "px-4", "py-3", "border-top", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", 2, "background", "#fafafa"], [2, "font-size", ".82rem", "color", "#6b7280", "font-weight", "600"], [1, "d-flex", "align-items-center", "gap-1"], [1, "pg-btn", 3, "click", "disabled"], [1, "bx", "bx-chevrons-left"], [1, "bx", "bx-chevron-left"], [1, "pg-info"], [1, "bx", "bx-chevron-right"], [1, "bx", "bx-chevrons-right"], ["colspan", "4", 1, "text-center", "py-5", "text-muted"], [1, "bx", "bx-moon", "fs-3", "d-block", "mb-2"], [1, "py-3", "px-4"], [1, "d-flex", "align-items-center", "gap-3"], ["alt", "Foto", 1, "rounded-circle", "flex-shrink-0", 2, "width", "38px", "height", "38px", "object-fit", "cover", "border", "2px solid #e9ecef", 3, "src"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "38px", "height", "38px", "background", "#fef9c3", "color", "#a16207", "font-size", "1rem"], [1, "fw-semibold", 2, "font-size", ".88rem"], [1, "text-muted", 2, "font-size", ".77rem"], [2, "font-size", ".74rem", "color", "#a3a8b4"], [1, "py-3", "px-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "lembur-jam"], [1, "bx", "bx-right-arrow-alt", "text-muted"], [1, "text-muted", "mt-1", 2, "font-size", ".75rem"], [1, "lembur-durasi"], [1, "bx", "bx-time-five", "me-1"], [1, "py-3", "text-center"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-3", 2, "font-size", ".78rem", 3, "routerLink"]], template: function KaryawanLemburComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, KaryawanLemburComponent_Conditional_13_Template, 3, 4, "li", 5);
        \u0275\u0275elementStart(14, "li", 9);
        \u0275\u0275text(15, "Lembur");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275conditionalCreate(17, KaryawanLemburComponent_Conditional_17_Template, 1, 1, "img", 11)(18, KaryawanLemburComponent_Conditional_18_Template, 2, 0, "div", 12);
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23);
        \u0275\u0275conditionalCreate(24, KaryawanLemburComponent_Conditional_24_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 16);
        \u0275\u0275element(26, "i", 17);
        \u0275\u0275text(27, " Kembali ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(28, KaryawanLemburComponent_Conditional_28_Template, 3, 1, "div", 18);
        \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 21);
        \u0275\u0275element(32, "i", 22);
        \u0275\u0275text(33, "Lembur ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 23)(35, "div", 24)(36, "input", 25);
        \u0275\u0275listener("ngModelChange", function KaryawanLemburComponent_Template_input_ngModelChange_36_listener($event) {
          ctx.dariTgl.set($event);
          return ctx.halaman.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 15);
        \u0275\u0275text(38, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "input", 25);
        \u0275\u0275listener("ngModelChange", function KaryawanLemburComponent_Template_input_ngModelChange_39_listener($event) {
          ctx.sampaiTgl.set($event);
          return ctx.halaman.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "input", 26);
        \u0275\u0275listener("ngModelChange", function KaryawanLemburComponent_Template_input_ngModelChange_40_listener($event) {
          ctx.cari.set($event);
          return ctx.halaman.set(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 27);
        \u0275\u0275listener("click", function KaryawanLemburComponent_Template_button_click_41_listener() {
          return ctx.cariData();
        });
        \u0275\u0275element(42, "i", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "button", 29);
        \u0275\u0275listener("click", function KaryawanLemburComponent_Template_button_click_43_listener() {
          return ctx.resetFilter();
        });
        \u0275\u0275element(44, "i", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 31);
        \u0275\u0275text(46, " Daftar jam lembur karyawan yang memerlukan validasi ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(47, KaryawanLemburComponent_Conditional_47_Template, 4, 0, "div", 32);
        \u0275\u0275conditionalCreate(48, KaryawanLemburComponent_Conditional_48_Template, 30, 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(13);
        \u0275\u0275conditional(((tmp_0_0 = ctx.karyawan()) == null ? null : tmp_0_0.namaLengkap) ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_1_0 = ctx.fotoUrl((tmp_1_0 = ctx.karyawan()) == null ? null : tmp_1_0.fotoProfil)) ? 17 : 18, tmp_1_0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.karyawan()) == null ? null : tmp_2_0.namaLengkap) || "\u2014");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx.karyawan()) == null ? null : tmp_3_0.namaDivisi) || "Belum ada divisi", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_4_0 = ctx.karyawan()) == null ? null : tmp_4_0.namaJabatan) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, (tmp_5_0 = ctx.karyawan()) == null ? null : tmp_5_0.id));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 28 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.dariTgl());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.sampaiTgl());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.cari());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.loading() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 48 : -1);
      }
    }, dependencies: [RouterLink, CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LayoutComponent], styles: ['@charset "UTF-8";\n\n\n.info-bar[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 700;\n  padding: 11px 16px;\n  background: #f9fafb;\n  border-bottom: 1px solid #f1f3f5;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lembur-jam[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #111827;\n  background: #fef9c3;\n  border-radius: 6px;\n  padding: 2px 10px;\n  letter-spacing: 0.02em;\n  display: inline-block;\n}\n.lembur-durasi[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #a16207;\n  background: #fef9c3;\n  border-radius: 9999px;\n  padding: 3px 12px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  padding: 0 8px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=karyawan-lembur.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KaryawanLemburComponent, [{
    type: Component,
    args: [{ selector: "app-karyawan-lembur", standalone: true, imports: [RouterLink, CommonModule, FormsModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Manajemen</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item"><a routerLink="/karyawan">Karyawan</a></li>\r
          @if (karyawan()?.namaLengkap) {\r
            <li class="breadcrumb-item">\r
              <a [routerLink]="['/karyawan', karyawan()!.id]">{{ karyawan()!.namaLengkap }}</a>\r
            </li>\r
          }\r
          <li class="breadcrumb-item active">Lembur</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- Info Bar -->\r
  <div class="info-bar card border-0 shadow-sm mb-3 px-4 py-3 d-flex flex-row align-items-center gap-3">\r
    @if (fotoUrl(karyawan()?.fotoProfil); as url) {\r
      <img [src]="url" alt="Foto" class="rounded-circle"\r
           style="width:44px;height:44px;object-fit:cover;border:2px solid #e9ecef;flex-shrink:0" />\r
    } @else {\r
      <div class="rounded-circle d-flex align-items-center justify-content-center"\r
           style="width:44px;height:44px;background:#f3f4f6;color:#9ca3af;font-size:1.2rem;flex-shrink:0">\r
        <i class="bx bx-user"></i>\r
      </div>\r
    }\r
    <div class="flex-grow-1">\r
      <div class="fw-bold" style="font-size:1rem">{{ karyawan()?.namaLengkap || '\u2014' }}</div>\r
      <div class="text-muted small">\r
        {{ karyawan()?.namaDivisi || 'Belum ada divisi' }}\r
        @if (karyawan()?.namaJabatan) { \xB7 {{ karyawan()!.namaJabatan }} }\r
      </div>\r
    </div>\r
    <a [routerLink]="['/karyawan', karyawan()?.id]" class="btn btn-outline-secondary btn-sm px-3">\r
      <i class="bx bx-arrow-back me-1"></i> Kembali\r
    </a>\r
  </div>\r
\r
  <!-- Error -->\r
  @if (error()) {\r
    <div class="alert alert-danger d-flex align-items-center gap-2 mb-3">\r
      <i class="bx bx-error-circle fs-5"></i> {{ error() }}\r
    </div>\r
  }\r
\r
  <!-- Card utama -->\r
  <div class="card border-0 shadow-sm">\r
\r
    <!-- Header judul + filter -->\r
    <div class="px-4 pt-4 pb-3 border-bottom">\r
      <div class="fw-bold mb-3" style="font-size:1.1rem">\r
        <i class="bx bx-moon me-2 text-warning"></i>Lembur\r
      </div>\r
\r
      <!-- Filter row -->\r
      <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between">\r
        <div class="d-flex align-items-center gap-2 flex-wrap">\r
          <!-- Dari tanggal -->\r
          <input type="date" class="form-control form-control-sm"\r
                 style="width:155px"\r
                 [ngModel]="dariTgl()"\r
                 (ngModelChange)="dariTgl.set($event); halaman.set(1)" />\r
          <span class="text-muted small">-</span>\r
          <!-- Sampai tanggal -->\r
          <input type="date" class="form-control form-control-sm"\r
                 style="width:155px"\r
                 [ngModel]="sampaiTgl()"\r
                 (ngModelChange)="sampaiTgl.set($event); halaman.set(1)" />\r
          <!-- Cari -->\r
          <input type="text" class="form-control form-control-sm"\r
                 style="width:180px"\r
                 placeholder="Cari..."\r
                 [ngModel]="cari()"\r
                 (ngModelChange)="cari.set($event); halaman.set(1)" />\r
          <button class="btn btn-sm btn-secondary px-3" (click)="cariData()">\r
            <i class="bx bx-search"></i>\r
          </button>\r
        </div>\r
\r
        <!-- Tombol Reset -->\r
        <button class="btn btn-sm btn-danger px-3" (click)="resetFilter()" title="Reset filter">\r
          <i class="bx bx-reset"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Subjudul -->\r
    <div class="px-4 py-2 border-bottom"\r
         style="background:#f9fafb;font-size:.78rem;color:#9ca3af;font-style:italic">\r
      Daftar jam lembur karyawan yang memerlukan validasi\r
    </div>\r
\r
    <!-- Loading -->\r
    @if (loading()) {\r
      <div class="text-center py-5 text-muted">\r
        <span class="spinner-border text-warning mb-3"></span>\r
        <p class="mb-0 small">Memuat data lembur...</p>\r
      </div>\r
    }\r
\r
    @if (!loading()) {\r
      <!-- Tabel -->\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.85rem">\r
          <thead>\r
            <tr>\r
              <th style="min-width:240px">Karyawan</th>\r
              <th style="min-width:200px">Waktu Lembur</th>\r
              <th style="min-width:130px">Total Lembur</th>\r
              <th class="text-center" style="min-width:80px">Aksi</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (listHalaman().length === 0) {\r
              <tr>\r
                <td colspan="4" class="text-center py-5 text-muted">\r
                  <i class="bx bx-moon fs-3 d-block mb-2"></i>\r
                  Tidak ada data lembur untuk filter ini.\r
                </td>\r
              </tr>\r
            }\r
            @for (a of listHalaman(); track a.tanggal) {\r
              <tr>\r
                <!-- Karyawan -->\r
                <td class="py-3 px-4">\r
                  <div class="d-flex align-items-center gap-3">\r
                    @if (fotoUrl(a.fotoProfil); as url) {\r
                      <img [src]="url" alt="Foto"\r
                           class="rounded-circle flex-shrink-0"\r
                           style="width:38px;height:38px;object-fit:cover;border:2px solid #e9ecef" />\r
                    } @else {\r
                      <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                           style="width:38px;height:38px;background:#fef9c3;color:#a16207;font-size:1rem">\r
                        <i class="bx bx-user"></i>\r
                      </div>\r
                    }\r
                    <div>\r
                      <div class="fw-semibold" style="font-size:.88rem">{{ a.namaKaryawan }}</div>\r
                      <div class="text-muted" style="font-size:.77rem">\r
                        {{ formatTanggal(a.tanggal) }}\r
                      </div>\r
                      @if (a.namaDivisi) {\r
                        <div style="font-size:.74rem;color:#a3a8b4">{{ a.namaDivisi }}</div>\r
                      }\r
                    </div>\r
                  </div>\r
                </td>\r
\r
                <!-- Waktu Lembur -->\r
                <td class="py-3 px-3">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <span class="lembur-jam">{{ formatJam(a.jamMulaiLembur) }}</span>\r
                    <i class="bx bx-right-arrow-alt text-muted"></i>\r
                    <span class="lembur-jam">{{ formatJam(a.jamSelesaiLembur) }}</span>\r
                  </div>\r
                  @if (a.namaPolaKerja) {\r
                    <div class="text-muted mt-1" style="font-size:.75rem">{{ a.namaPolaKerja }}</div>\r
                  }\r
                </td>\r
\r
                <!-- Total Lembur -->\r
                <td class="py-3 px-3">\r
                  <span class="lembur-durasi">\r
                    <i class="bx bx-time-five me-1"></i>{{ formatDurasi(a) }}\r
                  </span>\r
                </td>\r
\r
                <!-- Aksi -->\r
                <td class="py-3 text-center">\r
                  <a [routerLink]="['/karyawan', karyawan()?.id, 'kehadiran']"\r
                     class="btn btn-sm btn-outline-secondary px-3" style="font-size:.78rem">\r
                    Detail\r
                  </a>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Footer: info + pagination -->\r
      <div class="px-4 py-3 border-top d-flex align-items-center justify-content-between flex-wrap gap-2"\r
           style="background:#fafafa">\r
        <div style="font-size:.82rem;color:#6b7280;font-weight:600">\r
          Menampilkan {{ listHalaman().length }} dari {{ totalData() }} total data\r
        </div>\r
\r
        <!-- Pagination -->\r
        <div class="d-flex align-items-center gap-1">\r
          <button class="pg-btn" [disabled]="halaman() === 1" (click)="halaman.set(1)">\r
            <i class="bx bx-chevrons-left"></i>\r
          </button>\r
          <button class="pg-btn" [disabled]="halaman() === 1" (click)="halamanSebelumnya()">\r
            <i class="bx bx-chevron-left"></i>\r
          </button>\r
          <span class="pg-info">{{ halaman() }} / {{ totalHalaman() }}</span>\r
          <button class="pg-btn" [disabled]="halaman() >= totalHalaman()" (click)="halamanBerikutnya()">\r
            <i class="bx bx-chevron-right"></i>\r
          </button>\r
          <button class="pg-btn" [disabled]="halaman() >= totalHalaman()" (click)="halaman.set(totalHalaman())">\r
            <i class="bx bx-chevrons-right"></i>\r
          </button>\r
        </div>\r
      </div>\r
    }\r
\r
  </div>\r
\r
</app-layout>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/karyawan/karyawan-lembur/karyawan-lembur.component.scss */\n.info-bar {\n  border-radius: 12px !important;\n}\n.table thead th {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 700;\n  padding: 11px 16px;\n  background: #f9fafb;\n  border-bottom: 1px solid #f1f3f5;\n  white-space: nowrap;\n}\n.table tbody td {\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lembur-jam {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #111827;\n  background: #fef9c3;\n  border-radius: 6px;\n  padding: 2px 10px;\n  letter-spacing: 0.02em;\n  display: inline-block;\n}\n.lembur-durasi {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #a16207;\n  background: #fef9c3;\n  border-radius: 9999px;\n  padding: 3px 12px;\n}\n.pg-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.pg-btn:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.pg-btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.pg-info {\n  font-size: 0.8rem;\n  color: #6b7280;\n  padding: 0 8px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=karyawan-lembur.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KaryawanLemburComponent, { className: "KaryawanLemburComponent", filePath: "src/app/features/karyawan/karyawan-lembur/karyawan-lembur.component.ts", lineNumber: 19 });
})();
export {
  KaryawanLemburComponent
};
//# sourceMappingURL=chunk-V6EYNMYI.js.map
