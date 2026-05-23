import {
  environment
} from "./chunk-QWPH3JTV.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  HttpClient,
  Router
} from "./chunk-OEINA6XM.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/landing/landing.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.q;
function LandingComponent_For_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 66);
    \u0275\u0275domElement(1, "div", 112);
    \u0275\u0275domElementStart(2, "div", 113)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "h3", 114);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 115);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 116);
    \u0275\u0275text(10, "arrow_forward");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const feat_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r1.desc);
  }
}
function LandingComponent_For_293_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 117);
    \u0275\u0275domListener("click", function LandingComponent_For_293_Template_div_click_0_listener() {
      const \u0275$index_486_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFaq(\u0275$index_486_r3));
    });
    \u0275\u0275domElementStart(1, "div", 118)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 119);
    \u0275\u0275text(5, "expand_more");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 120);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_486_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("faq__item--open", ctx_r3.openFaq() === \u0275$index_486_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.q);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.a);
  }
}
function LandingComponent_For_304_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 100)(1, "div", 121)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 122)(5, "span", 123);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "h3", 124);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 125);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 126)(12, "span", 4);
    \u0275\u0275text(13, "calendar_today");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const post_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r6.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r6.excerpt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", post_r6.date, " ");
  }
}
var LandingComponent = class _LandingComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.apiStatus = signal("checking", ...ngDevMode ? [{ debugName: "apiStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.apiVersion = signal("-", ...ngDevMode ? [{ debugName: "apiVersion" }] : (
      /* istanbul ignore next */
      []
    ));
    this.menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openFaq = signal(null, ...ngDevMode ? [{ debugName: "openFaq" }] : (
      /* istanbul ignore next */
      []
    ));
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.features = [
      {
        icon: "schedule",
        title: "Check-In & Check-Out",
        desc: "Catat kehadiran karyawan secara real-time dengan akurasi waktu yang tepat."
      },
      {
        icon: "people",
        title: "Manajemen Karyawan",
        desc: "Kelola data karyawan, jabatan, dan departemen dalam satu tempat."
      },
      {
        icon: "bar_chart",
        title: "Laporan Absensi",
        desc: "Lihat dan ekspor laporan kehadiran per periode dengan filter lengkap."
      },
      {
        icon: "verified_user",
        title: "Akses Berbasis Role",
        desc: "Hak akses terpisah untuk Admin dan Karyawan demi keamanan data."
      }
    ];
    this.faqItems = [
      {
        q: "Apakah data absensi tersimpan secara aman?",
        a: "Ya. Semua data dienkripsi dan disimpan di server dengan akses berbasis role sehingga hanya pengguna berwenang yang dapat melihatnya."
      },
      {
        q: "Bisakah digunakan dari perangkat mobile?",
        a: "Tentu! Tampilan Absensi Kerja sepenuhnya responsif dan dapat diakses dari smartphone, tablet, maupun desktop."
      },
      {
        q: "Bagaimana cara admin menambah karyawan baru?",
        a: "Admin cukup masuk ke menu Manajemen Karyawan, klik tombol Tambah, lalu isi data karyawan dan assign role yang sesuai."
      },
      {
        q: "Apakah tersedia fitur ekspor laporan?",
        a: "Paket Pro dan Enterprise mendukung ekspor laporan ke format PDF dan Excel untuk keperluan administrasi."
      },
      {
        q: "Berapa batas karyawan untuk paket gratis?",
        a: "Paket Starter gratis mendukung hingga 10 karyawan aktif tanpa biaya apapun."
      }
    ];
    this.blogPosts = [
      {
        icon: "tips_and_updates",
        tag: "Tips",
        title: "5 Cara Meningkatkan Kedisiplinan Karyawan dengan Sistem Absensi Digital",
        excerpt: "Sistem absensi digital bukan sekadar pencatat waktu \u2014 ini adalah alat strategis untuk membangun budaya kerja yang disiplin.",
        date: "28 Mar 2026"
      },
      {
        icon: "security",
        tag: "Keamanan",
        title: "Mengapa JWT + Role-Based Access Penting untuk Aplikasi HR?",
        excerpt: "Memahami bagaimana autentikasi berbasis token melindungi data sensitif karyawan dari akses yang tidak sah.",
        date: "20 Mar 2026"
      },
      {
        icon: "bar_chart",
        tag: "Laporan",
        title: "Cara Membaca Laporan Absensi untuk Evaluasi Kinerja Bulanan",
        excerpt: "Panduan lengkap memanfaatkan fitur laporan Absensi Kerja untuk evaluasi kehadiran dan produktivitas tim Anda.",
        date: "12 Mar 2026"
      }
    ];
  }
  toggleFaq(i) {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      const role = this.auth.currentUser()?.role;
      this.router.navigate([role === "KARYAWAN" ? "/absensi" : "/dashboard"]);
      return;
    }
    this.checkApiHealth();
  }
  checkApiHealth() {
    this.http.get(`${environment.apiUrl}/health`).subscribe({
      next: (data) => {
        this.apiStatus.set("online");
        this.apiVersion.set(data?.version ?? "1.0.0");
      },
      error: () => this.apiStatus.set("offline")
    });
  }
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  goToRegister() {
    this.router.navigate(["/daftar"]);
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], decls: 326, vars: 7, consts: [[1, "noise"], [1, "navbar"], [1, "navbar__brand"], [1, "navbar__logo"], [1, "material-icons"], [1, "navbar__title"], [1, "navbar__title--accent"], [1, "navbar__links"], ["href", "#features", 1, "navbar__link", 3, "click"], ["href", "#pricing", 1, "navbar__link", 3, "click"], ["href", "#faq", 1, "navbar__link", 3, "click"], ["href", "#blog", 1, "navbar__link", 3, "click"], [1, "navbar__actions"], [1, "btn-nav", "btn-nav--outline", 3, "click"], [1, "btn-nav", "btn-nav--register", 3, "click"], ["aria-label", "Menu", 1, "navbar__burger", 3, "click"], [1, "navbar__burger-bar"], [1, "mobile-drawer"], ["href", "#features", 1, "mobile-drawer__link", 3, "click"], ["href", "#pricing", 1, "mobile-drawer__link", 3, "click"], ["href", "#faq", 1, "mobile-drawer__link", 3, "click"], ["href", "#blog", 1, "mobile-drawer__link", 3, "click"], [1, "btn-nav", "mobile-drawer__cta", 3, "click"], [1, "btn-nav", "btn-nav--register", "mobile-drawer__cta", 3, "click"], [1, "mobile-overlay", 3, "click"], [1, "hero"], [1, "blob", "blob--1"], [1, "blob", "blob--2"], [1, "blob", "blob--3"], [1, "hero__inner"], [1, "hero__content"], [1, "hero__pill"], [1, "hero__pill-dot"], [1, "hero__title"], [1, "hero__title--gradient"], [1, "hero__subtitle"], [1, "hero__actions"], [1, "btn-primary", 3, "click"], ["href", "http://localhost:8080/swagger-ui/index.html", "target", "_blank", 1, "btn-secondary"], [1, "hero__visual"], [1, "card-main"], [1, "card-main__header"], [1, "card-main__avatar"], [1, "card-main__name"], [1, "card-main__role"], [1, "card-main__badge"], [1, "card-main__divider"], [1, "card-main__times"], [1, "card-main__time-item"], [1, "material-icons", "card-main__time-icon", "card-main__time-icon--in"], [1, "card-main__time-label"], [1, "card-main__time-value"], [1, "card-main__time-arrow", "material-icons"], [1, "material-icons", "card-main__time-icon", "card-main__time-icon--out"], [1, "card-main__progress"], [1, "card-main__progress-bar"], [1, "card-main__progress-fill", 2, "width", "75%"], [1, "card-main__progress-lbl"], [1, "card-float", "card-float--tl"], [1, "card-float__num"], [1, "card-float__lbl"], [1, "card-float", "card-float--br"], ["id", "features", 1, "features"], [1, "features__label"], [1, "features__title"], [1, "features__grid"], [1, "feat-card"], [1, "how"], [1, "how__label"], [1, "how__title"], [1, "how__steps"], [1, "how__step"], [1, "how__step-num"], [1, "how__step-icon", "material-icons"], [1, "how__step-title"], [1, "how__step-desc"], [1, "how__connector"], [1, "how__connector-line"], ["id", "pricing", 1, "pricing"], [1, "pricing__inner"], [1, "section-label"], [1, "section-title"], [1, "pricing__grid"], [1, "price-card"], [1, "price-card__name"], [1, "price-card__price"], [1, "price-card__period"], [1, "price-card__list"], [1, "price-card__list-off"], [1, "btn-secondary", "btn-secondary--full", 3, "click"], [1, "price-card", "price-card--featured"], [1, "price-card__badge"], [1, "btn-primary", "btn-primary--full", 3, "click"], ["id", "faq", 1, "faq"], [1, "faq__inner"], [1, "faq__list"], [1, "faq__item", 3, "faq__item--open"], ["id", "blog", 1, "blog"], [1, "blog__inner"], [1, "blog__grid"], [1, "blog-card"], [1, "cta"], [1, "cta__blob"], [1, "cta__inner"], [1, "cta__icon", "material-icons"], [1, "cta__title"], [1, "cta__subtitle"], [1, "cta__actions"], [1, "footer"], [1, "footer__brand"], [1, "footer__copy"], [1, "footer__stack"], [1, "feat-card__glow"], [1, "feat-card__icon"], [1, "feat-card__title"], [1, "feat-card__desc"], [1, "feat-card__arrow", "material-icons"], [1, "faq__item", 3, "click"], [1, "faq__question"], [1, "material-icons", "faq__chevron"], [1, "faq__answer"], [1, "blog-card__img"], [1, "blog-card__body"], [1, "blog-card__tag"], [1, "blog-card__title"], [1, "blog-card__excerpt"], [1, "blog-card__meta"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "div", 0);
        \u0275\u0275domElementStart(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "fingerprint");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(6, "span", 5);
        \u0275\u0275text(7, "Absensi ");
        \u0275\u0275domElementStart(8, "span", 6);
        \u0275\u0275text(9, "Kerja");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(10, "nav", 7)(11, "a", 8);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_11_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(12, "Fitur Utama");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(13, "a", 9);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_13_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(14, "Harga");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(15, "a", 10);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_15_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(16, "FAQ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(17, "a", 11);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_17_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(18, "Blog");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(19, "div", 12)(20, "button", 13);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_20_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275text(21, " Masuk ");
        \u0275\u0275domElementStart(22, "span", 4);
        \u0275\u0275text(23, "arrow_forward");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(24, "button", 14);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_24_listener() {
          return ctx.goToRegister();
        });
        \u0275\u0275text(25, " Daftar ");
        \u0275\u0275domElementStart(26, "strong");
        \u0275\u0275text(27, "Gratis");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(28, "button", 15);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_28_listener() {
          return ctx.menuOpen.set(!ctx.menuOpen());
        });
        \u0275\u0275domElement(29, "span", 16)(30, "span", 16)(31, "span", 16);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(32, "div", 17)(33, "a", 18);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_33_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(34, "Fitur Utama");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(35, "a", 19);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_35_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(36, "Harga");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(37, "a", 20);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_37_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(38, "FAQ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(39, "a", 21);
        \u0275\u0275domListener("click", function LandingComponent_Template_a_click_39_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(40, "Blog");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(41, "button", 22);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_41_listener() {
          ctx.goToLogin();
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(42, " Masuk ");
        \u0275\u0275domElementStart(43, "span", 4);
        \u0275\u0275text(44, "arrow_forward");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(45, "button", 23);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_45_listener() {
          ctx.goToRegister();
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275text(46, " Daftar ");
        \u0275\u0275domElementStart(47, "strong");
        \u0275\u0275text(48, "Gratis");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(49, "div", 24);
        \u0275\u0275domListener("click", function LandingComponent_Template_div_click_49_listener() {
          return ctx.menuOpen.set(false);
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(50, "section", 25);
        \u0275\u0275domElement(51, "div", 26)(52, "div", 27)(53, "div", 28);
        \u0275\u0275domElementStart(54, "div", 29)(55, "div", 30)(56, "div", 31);
        \u0275\u0275domElement(57, "span", 32);
        \u0275\u0275text(58, " Sistem Absensi Generasi Baru \u2014 Absensi Kerja ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(59, "h1", 33);
        \u0275\u0275text(60, " Kelola Absensi ");
        \u0275\u0275domElementStart(61, "span", 34);
        \u0275\u0275text(62, "Lebih Cerdas");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(63, " & Efisien ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(64, "p", 35);
        \u0275\u0275text(65, " Platform digital end-to-end untuk mencatat, memantau, dan menganalisis kehadiran karyawan \u2014 kapan saja, di mana saja, secara real-time. ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(66, "div", 36)(67, "button", 37);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_67_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275domElementStart(68, "span");
        \u0275\u0275text(69, "Mulai Sekarang");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(70, "span", 4);
        \u0275\u0275text(71, "east");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(72, "a", 38)(73, "span", 4);
        \u0275\u0275text(74, "terminal");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(75, "span");
        \u0275\u0275text(76, "Lihat API Docs");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(77, "div", 39)(78, "div", 40)(79, "div", 41)(80, "div", 42);
        \u0275\u0275text(81, "BS");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(82, "div")(83, "div", 43);
        \u0275\u0275text(84, "Budi Santoso");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(85, "div", 44);
        \u0275\u0275text(86, "Backend Developer \xB7 IT");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(87, "div", 45);
        \u0275\u0275text(88, "Hadir");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElement(89, "div", 46);
        \u0275\u0275domElementStart(90, "div", 47)(91, "div", 48)(92, "span", 49);
        \u0275\u0275text(93, "login");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(94, "div")(95, "div", 50);
        \u0275\u0275text(96, "Check In");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(97, "div", 51);
        \u0275\u0275text(98, "08:02 AM");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(99, "div", 52);
        \u0275\u0275text(100, "east");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(101, "div", 48)(102, "span", 53);
        \u0275\u0275text(103, "logout");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(104, "div")(105, "div", 50);
        \u0275\u0275text(106, "Check Out");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(107, "div", 51);
        \u0275\u0275text(108, "17:05 PM");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(109, "div", 54)(110, "div", 55);
        \u0275\u0275domElement(111, "div", 56);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(112, "span", 57);
        \u0275\u0275text(113, "9 jam 3 menit bekerja");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(114, "div", 58)(115, "span", 4);
        \u0275\u0275text(116, "people");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(117, "div")(118, "div", 59);
        \u0275\u0275text(119, "128");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(120, "div", 60);
        \u0275\u0275text(121, "Karyawan Aktif");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(122, "div", 61)(123, "span", 4);
        \u0275\u0275text(124, "bar_chart");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(125, "div")(126, "div", 59);
        \u0275\u0275text(127, "98.4%");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(128, "div", 60);
        \u0275\u0275text(129, "Tingkat Kehadiran");
        \u0275\u0275domElementEnd()()()()()();
        \u0275\u0275domElementStart(130, "section", 62)(131, "div", 63);
        \u0275\u0275text(132, "Kenapa Absensi Kerja?");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(133, "h2", 64);
        \u0275\u0275text(134, "Semua yang Anda Butuhkan,");
        \u0275\u0275domElement(135, "br");
        \u0275\u0275domElementStart(136, "span");
        \u0275\u0275text(137, "Dalam Satu Platform");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(138, "div", 65);
        \u0275\u0275repeaterCreate(139, LandingComponent_For_140_Template, 11, 3, "div", 66, _forTrack0);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(141, "section", 67)(142, "div", 68);
        \u0275\u0275text(143, "Cara Kerja");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(144, "h2", 69);
        \u0275\u0275text(145, "Mudah dalam 3 Langkah");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(146, "div", 70)(147, "div", 71)(148, "div", 72);
        \u0275\u0275text(149, "01");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(150, "div", 73);
        \u0275\u0275text(151, "login");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(152, "h3", 74);
        \u0275\u0275text(153, "Login");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(154, "p", 75);
        \u0275\u0275text(155, "Masuk dengan akun karyawan yang diberikan admin.");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(156, "div", 76);
        \u0275\u0275domElement(157, "div", 77);
        \u0275\u0275domElementStart(158, "span", 4);
        \u0275\u0275text(159, "east");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(160, "div", 71)(161, "div", 72);
        \u0275\u0275text(162, "02");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(163, "div", 73);
        \u0275\u0275text(164, "fingerprint");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(165, "h3", 74);
        \u0275\u0275text(166, "Absen");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(167, "p", 75);
        \u0275\u0275text(168, "Tekan tombol check-in saat tiba dan check-out saat pulang.");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(169, "div", 76);
        \u0275\u0275domElement(170, "div", 77);
        \u0275\u0275domElementStart(171, "span", 4);
        \u0275\u0275text(172, "east");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(173, "div", 71)(174, "div", 72);
        \u0275\u0275text(175, "03");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(176, "div", 73);
        \u0275\u0275text(177, "bar_chart");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(178, "h3", 74);
        \u0275\u0275text(179, "Pantau");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(180, "p", 75);
        \u0275\u0275text(181, "Admin melihat laporan dan statistik kehadiran real-time.");
        \u0275\u0275domElementEnd()()()();
        \u0275\u0275domElementStart(182, "section", 78)(183, "div", 79)(184, "div", 80);
        \u0275\u0275text(185, "Harga");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(186, "h2", 81);
        \u0275\u0275text(187, "Pilih Paket yang ");
        \u0275\u0275domElementStart(188, "span");
        \u0275\u0275text(189, "Sesuai Kebutuhan");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(190, "div", 82)(191, "div", 83)(192, "div", 84);
        \u0275\u0275text(193, "Starter");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(194, "div", 85);
        \u0275\u0275text(195, "Gratis");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(196, "div", 86);
        \u0275\u0275text(197, "Selamanya");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(198, "ul", 87)(199, "li")(200, "span", 4);
        \u0275\u0275text(201, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(202, " Hingga 10 karyawan");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(203, "li")(204, "span", 4);
        \u0275\u0275text(205, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(206, " Check-in & check-out");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(207, "li")(208, "span", 4);
        \u0275\u0275text(209, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(210, " Laporan dasar");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(211, "li", 88)(212, "span", 4);
        \u0275\u0275text(213, "cancel");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(214, " Ekspor PDF/Excel");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(215, "li", 88)(216, "span", 4);
        \u0275\u0275text(217, "cancel");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(218, " Multi-departemen");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(219, "button", 89);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_219_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275text(220, "Mulai Gratis");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(221, "div", 90)(222, "div", 91);
        \u0275\u0275text(223, "Populer");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(224, "div", 84);
        \u0275\u0275text(225, "Pro");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(226, "div", 85);
        \u0275\u0275text(227, "Rp 199k");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(228, "div", 86);
        \u0275\u0275text(229, "per bulan");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(230, "ul", 87)(231, "li")(232, "span", 4);
        \u0275\u0275text(233, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(234, " Hingga 100 karyawan");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(235, "li")(236, "span", 4);
        \u0275\u0275text(237, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(238, " Check-in & check-out");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(239, "li")(240, "span", 4);
        \u0275\u0275text(241, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(242, " Laporan lengkap");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(243, "li")(244, "span", 4);
        \u0275\u0275text(245, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(246, " Ekspor PDF/Excel");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(247, "li", 88)(248, "span", 4);
        \u0275\u0275text(249, "cancel");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(250, " Multi-departemen");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(251, "button", 92);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_251_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275text(252, "Coba 14 Hari Gratis");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(253, "div", 83)(254, "div", 84);
        \u0275\u0275text(255, "Enterprise");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(256, "div", 85);
        \u0275\u0275text(257, "Custom");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(258, "div", 86);
        \u0275\u0275text(259, "hubungi kami");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(260, "ul", 87)(261, "li")(262, "span", 4);
        \u0275\u0275text(263, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(264, " Karyawan tak terbatas");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(265, "li")(266, "span", 4);
        \u0275\u0275text(267, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(268, " Check-in & check-out");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(269, "li")(270, "span", 4);
        \u0275\u0275text(271, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(272, " Laporan lengkap");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(273, "li")(274, "span", 4);
        \u0275\u0275text(275, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(276, " Ekspor PDF/Excel");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(277, "li")(278, "span", 4);
        \u0275\u0275text(279, "check_circle");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(280, " Multi-departemen");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(281, "button", 89);
        \u0275\u0275domListener("click", function LandingComponent_Template_button_click_281_listener() {
          return ctx.goToLogin();
        });
        \u0275\u0275text(282, "Hubungi Kami");
        \u0275\u0275domElementEnd()()()()();
        \u0275\u0275domElementStart(283, "section", 93)(284, "div", 94)(285, "div", 80);
        \u0275\u0275text(286, "FAQ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(287, "h2", 81);
        \u0275\u0275text(288, "Pertanyaan yang ");
        \u0275\u0275domElementStart(289, "span");
        \u0275\u0275text(290, "Sering Diajukan");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(291, "div", 95);
        \u0275\u0275repeaterCreate(292, LandingComponent_For_293_Template, 8, 4, "div", 96, _forTrack1);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(294, "section", 97)(295, "div", 98)(296, "div", 80);
        \u0275\u0275text(297, "Blog");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(298, "h2", 81);
        \u0275\u0275text(299, "Artikel & ");
        \u0275\u0275domElementStart(300, "span");
        \u0275\u0275text(301, "Tips Terbaru");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(302, "div", 99);
        \u0275\u0275repeaterCreate(303, LandingComponent_For_304_Template, 15, 5, "article", 100, _forTrack0);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(305, "section", 101);
        \u0275\u0275domElement(306, "div", 102);
        \u0275\u0275domElementStart(307, "div", 103)(308, "div", 104);
        \u0275\u0275text(309, "rocket_launch");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(310, "h2", 105);
        \u0275\u0275text(311, "Siap Memulai Perjalanan?");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(312, "p", 106);
        \u0275\u0275text(313, " Bergabung dan rasakan kemudahan mengelola absensi karyawan secara digital. ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(314, "div", 107);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(315, "footer", 108)(316, "div", 109)(317, "span", 4);
        \u0275\u0275text(318, "fingerprint");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(319, "span");
        \u0275\u0275text(320, "Absensi ");
        \u0275\u0275domElementStart(321, "strong");
        \u0275\u0275text(322, "Kerja");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(323, "div", 110);
        \u0275\u0275text(324);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(325, "div", 111);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("navbar--open", ctx.menuOpen());
        \u0275\u0275advance(31);
        \u0275\u0275classProp("mobile-drawer--open", ctx.menuOpen());
        \u0275\u0275advance(17);
        \u0275\u0275classProp("mobile-overlay--show", ctx.menuOpen());
        \u0275\u0275advance(90);
        \u0275\u0275repeater(ctx.features);
        \u0275\u0275advance(153);
        \u0275\u0275repeater(ctx.faqItems);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.blogPosts);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.year, " AbsensiKerja ");
      }
    }, styles: [`
[_nghost-%COMP%] {
  display: block;
  background: #07090f;
}
.noise[_ngcontent-%COMP%] {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px;
}
.navbar[_ngcontent-%COMP%] {
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
.navbar__brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.navbar__logo[_ngcontent-%COMP%] {
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
}
.navbar__logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #ffffff;
  font-size: 1.25rem;
}
.navbar__title[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.3px;
}
.navbar__title--accent[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar__links[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
@media (max-width: 768px) {
  .navbar__links[_ngcontent-%COMP%] {
    display: none;
  }
}
.navbar__link[_ngcontent-%COMP%] {
  padding: 0.4rem 0.85rem;
  border-radius: 7px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}
.navbar__link[_ngcontent-%COMP%]:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.06);
}
.navbar__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
@media (max-width: 480px) {
  .navbar[_ngcontent-%COMP%]   .api-badge[_ngcontent-%COMP%] {
    display: none;
  }
}
@media (max-width: 480px) {
  .navbar[_ngcontent-%COMP%]   .btn-nav[_ngcontent-%COMP%] {
    display: none;
  }
}
.navbar__burger[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
}
@media (max-width: 768px) {
  .navbar__burger[_ngcontent-%COMP%] {
    display: flex;
  }
}
.navbar__burger-bar[_ngcontent-%COMP%] {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: #94a3b8;
  transition: transform 0.25s, opacity 0.25s;
}
.navbar--open[_ngcontent-%COMP%]   .navbar__burger-bar[_ngcontent-%COMP%]:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar--open[_ngcontent-%COMP%]   .navbar__burger-bar[_ngcontent-%COMP%]:nth-child(2) {
  opacity: 0;
}
.navbar--open[_ngcontent-%COMP%]   .navbar__burger-bar[_ngcontent-%COMP%]:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
.mobile-drawer[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(7, 9, 15, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 1.25rem 1.5rem 1.5rem;
  transform: translateY(-110%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
@media (max-width: 768px) {
  .mobile-drawer[_ngcontent-%COMP%] {
    display: flex;
  }
}
.mobile-drawer--open[_ngcontent-%COMP%] {
  transform: translateY(0);
}
.mobile-drawer__link[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}
.mobile-drawer__link[_ngcontent-%COMP%]:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.05);
}
.mobile-drawer__cta[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  justify-content: center;
  width: 100%;
}
.mobile-overlay[_ngcontent-%COMP%] {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
@media (max-width: 768px) {
  .mobile-overlay[_ngcontent-%COMP%] {
    display: block;
  }
}
.mobile-overlay--show[_ngcontent-%COMP%] {
  opacity: 1;
  pointer-events: all;
}
.section-label[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6366f1;
  margin-bottom: 1rem;
}
.section-title[_ngcontent-%COMP%] {
  text-align: center;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 3.5rem;
  letter-spacing: -0.5px;
  line-height: 1.25;
}
.section-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pricing[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.pricing__inner[_ngcontent-%COMP%] {
  max-width: 1100px;
  margin: 0 auto;
}
.pricing__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 900px) {
  .pricing__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}
.price-card[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem 1.75rem;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  transition:
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
}
.price-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}
.price-card--featured[_ngcontent-%COMP%] {
  border-color: rgba(99, 102, 241, 0.5);
  background:
    linear-gradient(
      160deg,
      rgba(99, 102, 241, 0.1),
      rgba(139, 92, 246, 0.06));
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.15);
}
.price-card__badge[_ngcontent-%COMP%] {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2rem 0.85rem;
  border-radius: 9999px;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
  font-size: 0.72rem;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
}
.price-card__name[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #64748b;
}
.price-card__price[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1;
}
.price-card__period[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}
.price-card__list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.price-card__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
.price-card__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: #10b981;
  flex-shrink: 0;
}
.price-card__list-off[_ngcontent-%COMP%] {
  color: #64748b !important;
  opacity: 0.5;
}
.price-card__list-off[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #ef4444 !important;
}
.btn-primary--full[_ngcontent-%COMP%], 
.btn-secondary--full[_ngcontent-%COMP%] {
  width: 100%;
  justify-content: center;
}
.faq[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.faq__inner[_ngcontent-%COMP%] {
  max-width: 760px;
  margin: 0 auto;
}
.faq__list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.faq__item[_ngcontent-%COMP%] {
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}
.faq__item[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.3);
}
.faq__item--open[_ngcontent-%COMP%] {
  border-color: rgba(99, 102, 241, 0.4);
}
.faq__item--open[_ngcontent-%COMP%]   .faq__chevron[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.faq__item--open[_ngcontent-%COMP%]   .faq__answer[_ngcontent-%COMP%] {
  max-height: 300px;
  padding: 0 1.5rem 1.25rem;
  opacity: 1;
}
.faq__question[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #f1f5f9;
}
.faq__chevron[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: transform 0.25s;
}
.faq__answer[_ngcontent-%COMP%] {
  max-height: 0;
  overflow: hidden;
  padding: 0 1.5rem;
  opacity: 0;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.7;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease,
    padding 0.3s ease;
}
.blog[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.blog__inner[_ngcontent-%COMP%] {
  max-width: 1100px;
  margin: 0 auto;
}
.blog__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 900px) {
  .blog__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .blog__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
.blog-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  transition:
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
  cursor: default;
}
.blog-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.35);
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}
.blog-card__img[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  background:
    linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.15),
      rgba(139, 92, 246, 0.1));
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.blog-card__img[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 2.8rem;
  color: #6366f1;
  opacity: 0.75;
}
.blog-card__body[_ngcontent-%COMP%] {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.blog-card__tag[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #06b6d4;
}
.blog-card__title[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
  line-height: 1.45;
}
.blog-card__excerpt[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.65;
  flex: 1;
}
.blog-card__meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: #64748b;
}
.blog-card__meta[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 0.85rem;
}
@media (max-width: 600px) {
  .hero[_ngcontent-%COMP%] {
    padding: 3.5rem 1.25rem;
  }
}
@media (max-width: 600px) {
  .features[_ngcontent-%COMP%], 
   .how[_ngcontent-%COMP%], 
   .pricing[_ngcontent-%COMP%], 
   .faq[_ngcontent-%COMP%], 
   .blog[_ngcontent-%COMP%], 
   .cta[_ngcontent-%COMP%] {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}
@media (max-width: 600px) {
  .footer[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 1.25rem;
  }
}
.api-badge[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: #0f1117;
  font-size: 0.75rem;
  font-weight: 500;
  color: #64748b;
}
.api-badge__dot[_ngcontent-%COMP%] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #64748b;
}
.api-badge--online[_ngcontent-%COMP%] {
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}
.api-badge--online[_ngcontent-%COMP%]   .api-badge__dot[_ngcontent-%COMP%] {
  background: #10b981;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
.api-badge--offline[_ngcontent-%COMP%] {
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}
.api-badge--offline[_ngcontent-%COMP%]   .api-badge__dot[_ngcontent-%COMP%] {
  background: #ef4444;
}
.api-badge--checking[_ngcontent-%COMP%]   .api-badge__dot[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_pulse 1s infinite;
}
.btn-nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  font-family: inherit;
}
.btn-nav[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.btn-nav[_ngcontent-%COMP%]:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}
.btn-nav--outline[_ngcontent-%COMP%] {
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
}
.btn-nav--outline[_ngcontent-%COMP%]:hover {
  border-color: rgba(255, 255, 255, 0.7);
  opacity: 1;
}
.btn-nav--register[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #10b981,
      #059669);
  border: none;
  color: #fff;
}
.btn-nav--register[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #fff;
  font-weight: 800;
}
.btn-nav--register[_ngcontent-%COMP%] {
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
}
.btn-nav--register[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);
}
.hero[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: 5rem 2.5rem;
}
.hero__inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
}
@media (max-width: 900px) {
  .hero__inner[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
.hero__pill[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.35);
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
  width: fit-content;
}
.hero__pill-dot[_ngcontent-%COMP%] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6366f1;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
.hero__title[_ngcontent-%COMP%] {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.15;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}
.hero__title--gradient[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}
.hero__subtitle[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #94a3b8;
  margin-bottom: 2.5rem;
  max-width: 480px;
}
.hero__actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.hero__stats[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.hero__stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.hero__stat-num[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
}
.hero__stat-lbl[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero__stat-sep[_ngcontent-%COMP%] {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.07);
}
.blob[_ngcontent-%COMP%] {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}
.blob--1[_ngcontent-%COMP%] {
  width: 600px;
  height: 600px;
  background: rgba(99, 102, 241, 0.18);
  top: -200px;
  left: -150px;
  animation: _ngcontent-%COMP%_blobMove 12s ease-in-out infinite alternate;
}
.blob--2[_ngcontent-%COMP%] {
  width: 500px;
  height: 500px;
  background: rgba(6, 182, 212, 0.12);
  bottom: -150px;
  right: -100px;
  animation: _ngcontent-%COMP%_blobMove 15s ease-in-out infinite alternate-reverse;
}
.blob--3[_ngcontent-%COMP%] {
  width: 300px;
  height: 300px;
  background: rgba(139, 92, 246, 0.14);
  top: 40%;
  left: 50%;
  animation: _ngcontent-%COMP%_blobMove 10s ease-in-out infinite alternate;
}
@keyframes _ngcontent-%COMP%_blobMove {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(40px, 30px) scale(1.08);
  }
}
.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 0 24px rgba(99, 102, 241, 0.4);
  transition:
    box-shadow 0.25s,
    transform 0.15s,
    opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1.15rem;
  transition: transform 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  box-shadow: 0 0 36px rgba(99, 102, 241, 0.6);
  transform: translateY(-2px);
}
.btn-primary[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {
  transform: translateX(3px);
}
.btn-primary--lg[_ngcontent-%COMP%] {
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 14px;
}
.btn-secondary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.15s;
}
.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1.1rem;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  text-decoration: none;
}
.hero__visual[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
}
@media (max-width: 900px) {
  .hero__visual[_ngcontent-%COMP%] {
    min-height: 300px;
  }
}
.card-main[_ngcontent-%COMP%] {
  background: rgba(22, 26, 36, 0.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.75rem;
  width: 340px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04);
  animation: _ngcontent-%COMP%_floatCard 6s ease-in-out infinite;
}
.card-main__header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}
.card-main__avatar[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.card-main__name[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.1rem;
}
.card-main__role[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #64748b;
}
.card-main__badge[_ngcontent-%COMP%] {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
}
.card-main__divider[_ngcontent-%COMP%] {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin-bottom: 1.25rem;
}
.card-main__times[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.card-main__time-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.card-main__time-icon[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.card-main__time-icon--in[_ngcontent-%COMP%] {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}
.card-main__time-icon--out[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}
.card-main__time-label[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  color: #64748b;
  margin-bottom: 0.1rem;
}
.card-main__time-value[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
}
.card-main__time-arrow[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1.1rem;
}
.card-main__progress[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card-main__progress-bar[_ngcontent-%COMP%] {
  height: 5px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.07);
  overflow: hidden;
}
.card-main__progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 9999px;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  animation: _ngcontent-%COMP%_fillBar 2s ease-out forwards;
}
.card-main__progress-lbl[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  color: #64748b;
}
@keyframes _ngcontent-%COMP%_floatCard {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
@keyframes _ngcontent-%COMP%_fillBar {
  from {
    width: 0;
  }
}
.card-float[_ngcontent-%COMP%] {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  background: rgba(22, 26, 36, 0.95);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.card-float[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #6366f1;
  font-size: 1.4rem;
}
.card-float__num[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
}
.card-float__lbl[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  color: #64748b;
}
.card-float--tl[_ngcontent-%COMP%] {
  top: -24px;
  left: -60px;
  animation: _ngcontent-%COMP%_floatCard 7s ease-in-out infinite;
}
@media (max-width: 900px) {
  .card-float--tl[_ngcontent-%COMP%] {
    display: none;
  }
}
.card-float--br[_ngcontent-%COMP%] {
  bottom: -16px;
  right: -50px;
  animation: _ngcontent-%COMP%_floatCard 8s ease-in-out infinite reverse;
}
@media (max-width: 900px) {
  .card-float--br[_ngcontent-%COMP%] {
    display: none;
  }
}
.card-api[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  right: -70px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(22, 26, 36, 0.95);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 0.78rem;
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: _ngcontent-%COMP%_floatCard 9s ease-in-out infinite;
}
@media (max-width: 1100px) {
  .card-api[_ngcontent-%COMP%] {
    display: none;
  }
}
.card-api__dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #64748b;
}
.card-api__dot--on[_ngcontent-%COMP%] {
  background: #10b981;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
.card-api__dot--off[_ngcontent-%COMP%] {
  background: #ef4444;
}
.card-api__label[_ngcontent-%COMP%] {
  color: #94a3b8;
}
.card-api__code[_ngcontent-%COMP%] {
  color: #10b981;
  font-weight: 700;
  font-family: monospace;
}
.features[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
.features__label[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6366f1;
  margin-bottom: 1rem;
}
.features__title[_ngcontent-%COMP%] {
  text-align: center;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 3.5rem;
  letter-spacing: -0.5px;
  line-height: 1.25;
}
.features__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.features__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.feat-card[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
  padding: 2rem 1.75rem;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  cursor: default;
  transition:
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
}
.feat-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(99, 102, 241, 0.1);
}
.feat-card[_ngcontent-%COMP%]:hover   .feat-card__glow[_ngcontent-%COMP%] {
  opacity: 1;
}
.feat-card[_ngcontent-%COMP%]:hover   .feat-card__arrow[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateX(0);
}
.feat-card__glow[_ngcontent-%COMP%] {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(99, 102, 241, 0.12),
      transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.feat-card__icon[_ngcontent-%COMP%] {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.feat-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #6366f1;
  font-size: 1.6rem;
}
.feat-card__title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.6rem;
}
.feat-card__desc[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.65;
}
.feat-card__arrow[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1.1rem;
  color: #6366f1;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s, transform 0.25s;
}
.how[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 5rem 2.5rem;
  background:
    linear-gradient(
      180deg,
      transparent,
      rgba(15, 17, 23, 0.6),
      transparent);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.how__label[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #06b6d4;
  margin-bottom: 1rem;
}
.how__title[_ngcontent-%COMP%] {
  text-align: center;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 3.5rem;
  letter-spacing: -0.5px;
}
.how__steps[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
}
@media (max-width: 680px) {
  .how__steps[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.how__step[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 180px;
  max-width: 240px;
  text-align: center;
  padding: 2rem 1.5rem;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  transition: border-color 0.3s, transform 0.25s;
}
.how__step[_ngcontent-%COMP%]:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-4px);
}
.how__step-num[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #6366f1;
  margin-bottom: 0.75rem;
}
.how__step-icon[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}
.how__step-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
}
.how__step-desc[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.55;
}
.how__connector[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  color: #64748b;
  gap: 0.25rem;
}
.how__connector[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  opacity: 0.4;
}
@media (max-width: 680px) {
  .how__connector[_ngcontent-%COMP%] {
    flex-direction: row;
    transform: rotate(90deg);
    padding: 0.5rem 0;
  }
}
.how__connector-line[_ngcontent-%COMP%] {
  flex: 1;
  height: 1px;
  width: 32px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.07),
      transparent);
}
.cta[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 7rem 2.5rem;
  text-align: center;
}
.cta__blob[_ngcontent-%COMP%] {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(99, 102, 241, 0.2),
      transparent 65%);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  filter: blur(40px);
}
.cta__inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
}
.cta__icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  color: #6366f1;
  margin-bottom: 1.5rem;
  display: block;
  animation: _ngcontent-%COMP%_floatCard 4s ease-in-out infinite;
}
.cta__title[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}
.cta__subtitle[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  color: #94a3b8;
  margin-bottom: 2.5rem;
  line-height: 1.65;
}
.cta__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.cta__link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #64748b;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}
.cta__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 0.95rem;
}
.cta__link[_ngcontent-%COMP%]:hover {
  color: #f1f5f9;
  text-decoration: none;
}
.footer[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 2rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer__brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #94a3b8;
}
.footer__brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #6366f1;
}
.footer__brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #f1f5f9;
}
.footer__copy[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
}
.footer__stack[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.footer__tag[_ngcontent-%COMP%] {
  padding: 0.2rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 500;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 currentColor;
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 0 4px transparent;
  }
}
/*# sourceMappingURL=landing.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [], template: '<!-- \u2500\u2500\u2500 NOISE OVERLAY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<div class="noise"></div>\r\n\r\n<!-- \u2500\u2500\u2500 NAVBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<nav class="navbar" [class.navbar--open]="menuOpen()">\r\n  <div class="navbar__brand">\r\n    <div class="navbar__logo">\r\n      <span class="material-icons">fingerprint</span>\r\n    </div>\r\n    <span class="navbar__title">Absensi <span class="navbar__title--accent">Kerja</span></span>\r\n  </div>\r\n  <nav class="navbar__links">\r\n    <a class="navbar__link" href="#features" (click)="menuOpen.set(false)">Fitur Utama</a>\r\n    <a class="navbar__link" href="#pricing" (click)="menuOpen.set(false)">Harga</a>\r\n    <a class="navbar__link" href="#faq" (click)="menuOpen.set(false)">FAQ</a>\r\n    <a class="navbar__link" href="#blog" (click)="menuOpen.set(false)">Blog</a>\r\n  </nav>\r\n\r\n  <div class="navbar__actions">\r\n\r\n    <button class="btn-nav btn-nav--outline" (click)="goToLogin()">\r\n      Masuk\r\n      <span class="material-icons">arrow_forward</span>\r\n    </button>\r\n    <button class="btn-nav btn-nav--register" (click)="goToRegister()">\r\n      Daftar <strong>Gratis</strong>\r\n    </button>\r\n    <!-- Hamburger -->\r\n    <button class="navbar__burger" (click)="menuOpen.set(!menuOpen())" aria-label="Menu">\r\n      <span class="navbar__burger-bar"></span>\r\n      <span class="navbar__burger-bar"></span>\r\n      <span class="navbar__burger-bar"></span>\r\n    </button>\r\n  </div>\r\n</nav>\r\n\r\n<!-- Mobile drawer -->\r\n<div class="mobile-drawer" [class.mobile-drawer--open]="menuOpen()">\r\n  <a class="mobile-drawer__link" href="#features" (click)="menuOpen.set(false)">Fitur Utama</a>\r\n  <a class="mobile-drawer__link" href="#pricing" (click)="menuOpen.set(false)">Harga</a>\r\n  <a class="mobile-drawer__link" href="#faq" (click)="menuOpen.set(false)">FAQ</a>\r\n  <a class="mobile-drawer__link" href="#blog" (click)="menuOpen.set(false)">Blog</a>\r\n  <button class="btn-nav mobile-drawer__cta" (click)="goToLogin(); menuOpen.set(false)">\r\n    Masuk <span class="material-icons">arrow_forward</span>\r\n  </button>\r\n  <button class="btn-nav btn-nav--register mobile-drawer__cta" (click)="goToRegister(); menuOpen.set(false)">\r\n    Daftar <strong>Gratis</strong>\r\n  </button>\r\n</div>\r\n<div class="mobile-overlay" [class.mobile-overlay--show]="menuOpen()" (click)="menuOpen.set(false)"></div>\r\n\r\n<!-- \u2500\u2500\u2500 HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="hero">\r\n  <!-- Background blobs -->\r\n  <div class="blob blob--1"></div>\r\n  <div class="blob blob--2"></div>\r\n  <div class="blob blob--3"></div>\r\n\r\n  <div class="hero__inner">\r\n    <div class="hero__content">\r\n      <div class="hero__pill">\r\n        <span class="hero__pill-dot"></span>\r\n        Sistem Absensi Generasi Baru \u2014 Absensi Kerja\r\n      </div>\r\n\r\n      <h1 class="hero__title">\r\n        Kelola Absensi\r\n        <span class="hero__title--gradient">Lebih Cerdas</span>\r\n        &amp; Efisien\r\n      </h1>\r\n\r\n      <p class="hero__subtitle">\r\n        Platform digital end-to-end untuk mencatat, memantau, dan menganalisis\r\n        kehadiran karyawan \u2014 kapan saja, di mana saja, secara real-time.\r\n      </p>\r\n\r\n      <div class="hero__actions">\r\n        <button class="btn-primary" (click)="goToLogin()">\r\n          <span>Mulai Sekarang</span>\r\n          <span class="material-icons">east</span>\r\n        </button>\r\n        <a class="btn-secondary" href="http://localhost:8080/swagger-ui/index.html" target="_blank">\r\n          <span class="material-icons">terminal</span>\r\n          <span>Lihat API Docs</span>\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Stats row -->\r\n\r\n    </div>\r\n\r\n    <!-- Card Visual -->\r\n    <div class="hero__visual">\r\n      <!-- Floating attendance card -->\r\n      <div class="card-main">\r\n        <div class="card-main__header">\r\n          <div class="card-main__avatar">BS</div>\r\n          <div>\r\n            <div class="card-main__name">Budi Santoso</div>\r\n            <div class="card-main__role">Backend Developer \xB7 IT</div>\r\n          </div>\r\n          <div class="card-main__badge">Hadir</div>\r\n        </div>\r\n        <div class="card-main__divider"></div>\r\n        <div class="card-main__times">\r\n          <div class="card-main__time-item">\r\n            <span class="material-icons card-main__time-icon card-main__time-icon--in">login</span>\r\n            <div>\r\n              <div class="card-main__time-label">Check In</div>\r\n              <div class="card-main__time-value">08:02 AM</div>\r\n            </div>\r\n          </div>\r\n          <div class="card-main__time-arrow material-icons">east</div>\r\n          <div class="card-main__time-item">\r\n            <span class="material-icons card-main__time-icon card-main__time-icon--out">logout</span>\r\n            <div>\r\n              <div class="card-main__time-label">Check Out</div>\r\n              <div class="card-main__time-value">17:05 PM</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="card-main__progress">\r\n          <div class="card-main__progress-bar">\r\n            <div class="card-main__progress-fill" style="width: 75%"></div>\r\n          </div>\r\n          <span class="card-main__progress-lbl">9 jam 3 menit bekerja</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Floating mini cards -->\r\n      <div class="card-float card-float--tl">\r\n        <span class="material-icons">people</span>\r\n        <div>\r\n          <div class="card-float__num">128</div>\r\n          <div class="card-float__lbl">Karyawan Aktif</div>\r\n        </div>\r\n      </div>\r\n      <div class="card-float card-float--br">\r\n        <span class="material-icons">bar_chart</span>\r\n        <div>\r\n          <div class="card-float__num">98.4%</div>\r\n          <div class="card-float__lbl">Tingkat Kehadiran</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- API response mini card -->\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 FEATURES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="features" id="features">\r\n  <div class="features__label">Kenapa Absensi Kerja?</div>\r\n  <h2 class="features__title">Semua yang Anda Butuhkan,<br><span>Dalam Satu Platform</span></h2>\r\n\r\n  <div class="features__grid">\r\n    @for (feat of features; track feat.title) {\r\n      <div class="feat-card">\r\n        <div class="feat-card__glow"></div>\r\n        <div class="feat-card__icon">\r\n          <span class="material-icons">{{ feat.icon }}</span>\r\n        </div>\r\n        <h3 class="feat-card__title">{{ feat.title }}</h3>\r\n        <p class="feat-card__desc">{{ feat.desc }}</p>\r\n        <div class="feat-card__arrow material-icons">arrow_forward</div>\r\n      </div>\r\n    }\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 HOW IT WORKS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="how">\r\n  <div class="how__label">Cara Kerja</div>\r\n  <h2 class="how__title">Mudah dalam 3 Langkah</h2>\r\n  <div class="how__steps">\r\n    <div class="how__step">\r\n      <div class="how__step-num">01</div>\r\n      <div class="how__step-icon material-icons">login</div>\r\n      <h3 class="how__step-title">Login</h3>\r\n      <p class="how__step-desc">Masuk dengan akun karyawan yang diberikan admin.</p>\r\n    </div>\r\n    <div class="how__connector">\r\n      <div class="how__connector-line"></div>\r\n      <span class="material-icons">east</span>\r\n    </div>\r\n    <div class="how__step">\r\n      <div class="how__step-num">02</div>\r\n      <div class="how__step-icon material-icons">fingerprint</div>\r\n      <h3 class="how__step-title">Absen</h3>\r\n      <p class="how__step-desc">Tekan tombol check-in saat tiba dan check-out saat pulang.</p>\r\n    </div>\r\n    <div class="how__connector">\r\n      <div class="how__connector-line"></div>\r\n      <span class="material-icons">east</span>\r\n    </div>\r\n    <div class="how__step">\r\n      <div class="how__step-num">03</div>\r\n      <div class="how__step-icon material-icons">bar_chart</div>\r\n      <h3 class="how__step-title">Pantau</h3>\r\n      <p class="how__step-desc">Admin melihat laporan dan statistik kehadiran real-time.</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 PRICING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="pricing" id="pricing">\r\n  <div class="pricing__inner">\r\n    <div class="section-label">Harga</div>\r\n    <h2 class="section-title">Pilih Paket yang <span>Sesuai Kebutuhan</span></h2>\r\n    <div class="pricing__grid">\r\n      <!-- Starter -->\r\n      <div class="price-card">\r\n        <div class="price-card__name">Starter</div>\r\n        <div class="price-card__price">Gratis</div>\r\n        <div class="price-card__period">Selamanya</div>\r\n        <ul class="price-card__list">\r\n          <li><span class="material-icons">check_circle</span> Hingga 10 karyawan</li>\r\n          <li><span class="material-icons">check_circle</span> Check-in &amp; check-out</li>\r\n          <li><span class="material-icons">check_circle</span> Laporan dasar</li>\r\n          <li class="price-card__list-off"><span class="material-icons">cancel</span> Ekspor PDF/Excel</li>\r\n          <li class="price-card__list-off"><span class="material-icons">cancel</span> Multi-departemen</li>\r\n        </ul>\r\n        <button class="btn-secondary btn-secondary--full" (click)="goToLogin()">Mulai Gratis</button>\r\n      </div>\r\n      <!-- Pro (popular) -->\r\n      <div class="price-card price-card--featured">\r\n        <div class="price-card__badge">Populer</div>\r\n        <div class="price-card__name">Pro</div>\r\n        <div class="price-card__price">Rp 199k</div>\r\n        <div class="price-card__period">per bulan</div>\r\n        <ul class="price-card__list">\r\n          <li><span class="material-icons">check_circle</span> Hingga 100 karyawan</li>\r\n          <li><span class="material-icons">check_circle</span> Check-in &amp; check-out</li>\r\n          <li><span class="material-icons">check_circle</span> Laporan lengkap</li>\r\n          <li><span class="material-icons">check_circle</span> Ekspor PDF/Excel</li>\r\n          <li class="price-card__list-off"><span class="material-icons">cancel</span> Multi-departemen</li>\r\n        </ul>\r\n        <button class="btn-primary btn-primary--full" (click)="goToLogin()">Coba 14 Hari Gratis</button>\r\n      </div>\r\n      <!-- Enterprise -->\r\n      <div class="price-card">\r\n        <div class="price-card__name">Enterprise</div>\r\n        <div class="price-card__price">Custom</div>\r\n        <div class="price-card__period">hubungi kami</div>\r\n        <ul class="price-card__list">\r\n          <li><span class="material-icons">check_circle</span> Karyawan tak terbatas</li>\r\n          <li><span class="material-icons">check_circle</span> Check-in &amp; check-out</li>\r\n          <li><span class="material-icons">check_circle</span> Laporan lengkap</li>\r\n          <li><span class="material-icons">check_circle</span> Ekspor PDF/Excel</li>\r\n          <li><span class="material-icons">check_circle</span> Multi-departemen</li>\r\n        </ul>\r\n        <button class="btn-secondary btn-secondary--full" (click)="goToLogin()">Hubungi Kami</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 FAQ \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="faq" id="faq">\r\n  <div class="faq__inner">\r\n    <div class="section-label">FAQ</div>\r\n    <h2 class="section-title">Pertanyaan yang <span>Sering Diajukan</span></h2>\r\n    <div class="faq__list">\r\n      @for (item of faqItems; track item.q; let i = $index) {\r\n        <div class="faq__item" [class.faq__item--open]="openFaq() === i" (click)="toggleFaq(i)">\r\n          <div class="faq__question">\r\n            <span>{{ item.q }}</span>\r\n            <span class="material-icons faq__chevron">expand_more</span>\r\n          </div>\r\n          <div class="faq__answer">{{ item.a }}</div>\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 BLOG \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="blog" id="blog">\r\n  <div class="blog__inner">\r\n    <div class="section-label">Blog</div>\r\n    <h2 class="section-title">Artikel &amp; <span>Tips Terbaru</span></h2>\r\n    <div class="blog__grid">\r\n      @for (post of blogPosts; track post.title) {\r\n        <article class="blog-card">\r\n          <div class="blog-card__img">\r\n            <span class="material-icons">{{ post.icon }}</span>\r\n          </div>\r\n          <div class="blog-card__body">\r\n            <span class="blog-card__tag">{{ post.tag }}</span>\r\n            <h3 class="blog-card__title">{{ post.title }}</h3>\r\n            <p class="blog-card__excerpt">{{ post.excerpt }}</p>\r\n            <div class="blog-card__meta">\r\n              <span class="material-icons">calendar_today</span>{{ post.date }}\r\n            </div>\r\n          </div>\r\n        </article>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<section class="cta">\r\n  <div class="cta__blob"></div>\r\n  <div class="cta__inner">\r\n    <div class="cta__icon material-icons">rocket_launch</div>\r\n    <h2 class="cta__title">Siap Memulai Perjalanan?</h2>\r\n    <p class="cta__subtitle">\r\n      Bergabung dan rasakan kemudahan mengelola absensi karyawan secara digital.\r\n    </p>\r\n    <div class="cta__actions">\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- \u2500\u2500\u2500 FOOTER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n<footer class="footer">\r\n  <div class="footer__brand">\r\n    <span class="material-icons">fingerprint</span>\r\n    <span>Absensi <strong>Kerja</strong></span>\r\n  </div>\r\n  <div class="footer__copy">\r\n    &copy; {{ year }} AbsensiKerja\r\n  </div>\r\n  <div class="footer__stack">\r\n\r\n  </div>\r\n</footer>\r\n\r\n', styles: [`/* src/app/features/landing/landing.component.scss */
:host {
  display: block;
  background: #07090f;
}
.noise {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.028;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px;
}
.navbar {
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
.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.navbar__logo {
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
}
.navbar__logo .material-icons {
  color: #ffffff;
  font-size: 1.25rem;
}
.navbar__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.3px;
}
.navbar__title--accent {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }
}
.navbar__link {
  padding: 0.4rem 0.85rem;
  border-radius: 7px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}
.navbar__link:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.06);
}
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
@media (max-width: 480px) {
  .navbar .api-badge {
    display: none;
  }
}
@media (max-width: 480px) {
  .navbar .btn-nav {
    display: none;
  }
}
.navbar__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
}
@media (max-width: 768px) {
  .navbar__burger {
    display: flex;
  }
}
.navbar__burger-bar {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: #94a3b8;
  transition: transform 0.25s, opacity 0.25s;
}
.navbar--open .navbar__burger-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar--open .navbar__burger-bar:nth-child(2) {
  opacity: 0;
}
.navbar--open .navbar__burger-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
.mobile-drawer {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(7, 9, 15, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 1.25rem 1.5rem 1.5rem;
  transform: translateY(-110%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
@media (max-width: 768px) {
  .mobile-drawer {
    display: flex;
  }
}
.mobile-drawer--open {
  transform: translateY(0);
}
.mobile-drawer__link {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}
.mobile-drawer__link:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.05);
}
.mobile-drawer__cta {
  margin-top: 0.5rem;
  justify-content: center;
  width: 100%;
}
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
@media (max-width: 768px) {
  .mobile-overlay {
    display: block;
  }
}
.mobile-overlay--show {
  opacity: 1;
  pointer-events: all;
}
.section-label {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6366f1;
  margin-bottom: 1rem;
}
.section-title {
  text-align: center;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 3.5rem;
  letter-spacing: -0.5px;
  line-height: 1.25;
}
.section-title span {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pricing {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.pricing__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.pricing__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 900px) {
  .pricing__grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}
.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem 1.75rem;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  transition:
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
}
.price-card:hover {
  border-color: rgba(99, 102, 241, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}
.price-card--featured {
  border-color: rgba(99, 102, 241, 0.5);
  background:
    linear-gradient(
      160deg,
      rgba(99, 102, 241, 0.1),
      rgba(139, 92, 246, 0.06));
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.15);
}
.price-card__badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2rem 0.85rem;
  border-radius: 9999px;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
  font-size: 0.72rem;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
}
.price-card__name {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #64748b;
}
.price-card__price {
  font-size: 2rem;
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1;
}
.price-card__period {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}
.price-card__list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.price-card__list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
.price-card__list li .material-icons {
  font-size: 1rem;
  color: #10b981;
  flex-shrink: 0;
}
.price-card__list-off {
  color: #64748b !important;
  opacity: 0.5;
}
.price-card__list-off .material-icons {
  color: #ef4444 !important;
}
.btn-primary--full,
.btn-secondary--full {
  width: 100%;
  justify-content: center;
}
.faq {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.faq__inner {
  max-width: 760px;
  margin: 0 auto;
}
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.faq__item {
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}
.faq__item:hover {
  border-color: rgba(99, 102, 241, 0.3);
}
.faq__item--open {
  border-color: rgba(99, 102, 241, 0.4);
}
.faq__item--open .faq__chevron {
  transform: rotate(180deg);
}
.faq__item--open .faq__answer {
  max-height: 300px;
  padding: 0 1.5rem 1.25rem;
  opacity: 1;
}
.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #f1f5f9;
}
.faq__chevron {
  color: #64748b;
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: transform 0.25s;
}
.faq__answer {
  max-height: 0;
  overflow: hidden;
  padding: 0 1.5rem;
  opacity: 0;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.7;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease,
    padding 0.3s ease;
}
.blog {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.blog__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 900px) {
  .blog__grid {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .blog__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.blog-card {
  display: flex;
  flex-direction: column;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  transition:
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
  cursor: default;
}
.blog-card:hover {
  border-color: rgba(99, 102, 241, 0.35);
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}
.blog-card__img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  background:
    linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.15),
      rgba(139, 92, 246, 0.1));
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.blog-card__img .material-icons {
  font-size: 2.8rem;
  color: #6366f1;
  opacity: 0.75;
}
.blog-card__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.blog-card__tag {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #06b6d4;
}
.blog-card__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
  line-height: 1.45;
}
.blog-card__excerpt {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.65;
  flex: 1;
}
.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: #64748b;
}
.blog-card__meta .material-icons {
  font-size: 0.85rem;
}
@media (max-width: 600px) {
  .hero {
    padding: 3.5rem 1.25rem;
  }
}
@media (max-width: 600px) {
  .features,
  .how,
  .pricing,
  .faq,
  .blog,
  .cta {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}
@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 1.25rem;
  }
}
.api-badge {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: #0f1117;
  font-size: 0.75rem;
  font-weight: 500;
  color: #64748b;
}
.api-badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #64748b;
}
.api-badge--online {
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}
.api-badge--online .api-badge__dot {
  background: #10b981;
  animation: pulse 2s infinite;
}
.api-badge--offline {
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}
.api-badge--offline .api-badge__dot {
  background: #ef4444;
}
.api-badge--checking .api-badge__dot {
  animation: pulse 1s infinite;
}
.btn-nav {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  font-family: inherit;
}
.btn-nav .material-icons {
  font-size: 1rem;
}
.btn-nav:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}
.btn-nav--outline {
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
}
.btn-nav--outline:hover {
  border-color: rgba(255, 255, 255, 0.7);
  opacity: 1;
}
.btn-nav--register {
  background:
    linear-gradient(
      135deg,
      #10b981,
      #059669);
  border: none;
  color: #fff;
}
.btn-nav--register strong {
  color: #fff;
  font-weight: 800;
}
.btn-nav--register {
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
}
.btn-nav--register:hover {
  opacity: 0.9;
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);
}
.hero {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: 5rem 2.5rem;
}
.hero__inner {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
}
@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
.hero__pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.35);
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
  width: fit-content;
}
.hero__pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6366f1;
  animation: pulse 2s infinite;
}
.hero__title {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.15;
  color: #f1f5f9;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}
.hero__title--gradient {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}
.hero__subtitle {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #94a3b8;
  margin-bottom: 2.5rem;
  max-width: 480px;
}
.hero__actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.hero__stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.hero__stat-num {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
}
.hero__stat-lbl {
  font-size: 0.72rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero__stat-sep {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.07);
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}
.blob--1 {
  width: 600px;
  height: 600px;
  background: rgba(99, 102, 241, 0.18);
  top: -200px;
  left: -150px;
  animation: blobMove 12s ease-in-out infinite alternate;
}
.blob--2 {
  width: 500px;
  height: 500px;
  background: rgba(6, 182, 212, 0.12);
  bottom: -150px;
  right: -100px;
  animation: blobMove 15s ease-in-out infinite alternate-reverse;
}
.blob--3 {
  width: 300px;
  height: 300px;
  background: rgba(139, 92, 246, 0.14);
  top: 40%;
  left: 50%;
  animation: blobMove 10s ease-in-out infinite alternate;
}
@keyframes blobMove {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(40px, 30px) scale(1.08);
  }
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 0 24px rgba(99, 102, 241, 0.4);
  transition:
    box-shadow 0.25s,
    transform 0.15s,
    opacity 0.2s;
}
.btn-primary .material-icons {
  font-size: 1.15rem;
  transition: transform 0.2s;
}
.btn-primary:hover {
  box-shadow: 0 0 36px rgba(99, 102, 241, 0.6);
  transform: translateY(-2px);
}
.btn-primary:hover .material-icons {
  transform: translateX(3px);
}
.btn-primary--lg {
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 14px;
}
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    transform 0.15s;
}
.btn-secondary .material-icons {
  font-size: 1.1rem;
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  text-decoration: none;
}
.hero__visual {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
}
@media (max-width: 900px) {
  .hero__visual {
    min-height: 300px;
  }
}
.card-main {
  background: rgba(22, 26, 36, 0.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.75rem;
  width: 340px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04);
  animation: floatCard 6s ease-in-out infinite;
}
.card-main__header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}
.card-main__avatar {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.card-main__name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.1rem;
}
.card-main__role {
  font-size: 0.75rem;
  color: #64748b;
}
.card-main__badge {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
}
.card-main__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin-bottom: 1.25rem;
}
.card-main__times {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.card-main__time-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.card-main__time-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.card-main__time-icon--in {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}
.card-main__time-icon--out {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}
.card-main__time-label {
  font-size: 0.7rem;
  color: #64748b;
  margin-bottom: 0.1rem;
}
.card-main__time-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f1f5f9;
}
.card-main__time-arrow {
  color: #64748b;
  font-size: 1.1rem;
}
.card-main__progress {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card-main__progress-bar {
  height: 5px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.07);
  overflow: hidden;
}
.card-main__progress-fill {
  height: 100%;
  border-radius: 9999px;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  animation: fillBar 2s ease-out forwards;
}
.card-main__progress-lbl {
  font-size: 0.72rem;
  color: #64748b;
}
@keyframes floatCard {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
@keyframes fillBar {
  from {
    width: 0;
  }
}
.card-float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  background: rgba(22, 26, 36, 0.95);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.card-float .material-icons {
  color: #6366f1;
  font-size: 1.4rem;
}
.card-float__num {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
}
.card-float__lbl {
  font-size: 0.7rem;
  color: #64748b;
}
.card-float--tl {
  top: -24px;
  left: -60px;
  animation: floatCard 7s ease-in-out infinite;
}
@media (max-width: 900px) {
  .card-float--tl {
    display: none;
  }
}
.card-float--br {
  bottom: -16px;
  right: -50px;
  animation: floatCard 8s ease-in-out infinite reverse;
}
@media (max-width: 900px) {
  .card-float--br {
    display: none;
  }
}
.card-api {
  position: absolute;
  top: 50%;
  right: -70px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(22, 26, 36, 0.95);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 0.78rem;
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: floatCard 9s ease-in-out infinite;
}
@media (max-width: 1100px) {
  .card-api {
    display: none;
  }
}
.card-api__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #64748b;
}
.card-api__dot--on {
  background: #10b981;
  animation: pulse 2s infinite;
}
.card-api__dot--off {
  background: #ef4444;
}
.card-api__label {
  color: #94a3b8;
}
.card-api__code {
  color: #10b981;
  font-weight: 700;
  font-family: monospace;
}
.features {
  position: relative;
  z-index: 2;
  padding: 6rem 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
.features__label {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6366f1;
  margin-bottom: 1rem;
}
.features__title {
  text-align: center;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 3.5rem;
  letter-spacing: -0.5px;
  line-height: 1.25;
}
.features__title span {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.feat-card {
  position: relative;
  overflow: hidden;
  padding: 2rem 1.75rem;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  cursor: default;
  transition:
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
}
.feat-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(99, 102, 241, 0.1);
}
.feat-card:hover .feat-card__glow {
  opacity: 1;
}
.feat-card:hover .feat-card__arrow {
  opacity: 1;
  transform: translateX(0);
}
.feat-card__glow {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(99, 102, 241, 0.12),
      transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.feat-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}
.feat-card__icon .material-icons {
  color: #6366f1;
  font-size: 1.6rem;
}
.feat-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.6rem;
}
.feat-card__desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.65;
}
.feat-card__arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1.1rem;
  color: #6366f1;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s, transform 0.25s;
}
.how {
  position: relative;
  z-index: 2;
  padding: 5rem 2.5rem;
  background:
    linear-gradient(
      180deg,
      transparent,
      rgba(15, 17, 23, 0.6),
      transparent);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.how__label {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #06b6d4;
  margin-bottom: 1rem;
}
.how__title {
  text-align: center;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 3.5rem;
  letter-spacing: -0.5px;
}
.how__steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
}
@media (max-width: 680px) {
  .how__steps {
    flex-direction: column;
  }
}
.how__step {
  flex: 1;
  min-width: 180px;
  max-width: 240px;
  text-align: center;
  padding: 2rem 1.5rem;
  background: #0f1117;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  transition: border-color 0.3s, transform 0.25s;
}
.how__step:hover {
  border-color: rgba(99, 102, 241, 0.4);
  transform: translateY(-4px);
}
.how__step-num {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #6366f1;
  margin-bottom: 0.75rem;
}
.how__step-icon {
  font-size: 2rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}
.how__step-title {
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
}
.how__step-desc {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.55;
}
.how__connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  color: #64748b;
  gap: 0.25rem;
}
.how__connector .material-icons {
  font-size: 1.25rem;
  opacity: 0.4;
}
@media (max-width: 680px) {
  .how__connector {
    flex-direction: row;
    transform: rotate(90deg);
    padding: 0.5rem 0;
  }
}
.how__connector-line {
  flex: 1;
  height: 1px;
  width: 32px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.07),
      transparent);
}
.cta {
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 7rem 2.5rem;
  text-align: center;
}
.cta__blob {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(99, 102, 241, 0.2),
      transparent 65%);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  filter: blur(40px);
}
.cta__inner {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
}
.cta__icon {
  font-size: 3rem;
  color: #6366f1;
  margin-bottom: 1.5rem;
  display: block;
  animation: floatCard 4s ease-in-out infinite;
}
.cta__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}
.cta__subtitle {
  font-size: 1.05rem;
  color: #94a3b8;
  margin-bottom: 2.5rem;
  line-height: 1.65;
}
.cta__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.cta__link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #64748b;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}
.cta__link .material-icons {
  font-size: 0.95rem;
}
.cta__link:hover {
  color: #f1f5f9;
  text-decoration: none;
}
.footer {
  position: relative;
  z-index: 2;
  padding: 2rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #94a3b8;
}
.footer__brand .material-icons {
  color: #6366f1;
}
.footer__brand strong {
  color: #f1f5f9;
}
.footer__copy {
  font-size: 0.8rem;
  color: #64748b;
}
.footer__stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.footer__tag {
  padding: 0.2rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 500;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 currentColor;
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 0 4px transparent;
  }
}
/*# sourceMappingURL=landing.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/features/landing/landing.component.ts", lineNumber: 21 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=chunk-ZKKJPAYO.js.map
