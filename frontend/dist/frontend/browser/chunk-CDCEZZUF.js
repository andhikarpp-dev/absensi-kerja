import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from "./chunk-OEINA6XM.js";
import {
  Component,
  computed,
  filter,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QLIULQP5.js";

// src/app/shared/layout/layout.component.ts
var _c0 = ["*"];
var _c1 = (a0) => ["/karyawan", a0, "izin"];
var _c2 = (a0) => ["/karyawan", a0, "cuti"];
var _c3 = (a0) => ["/karyawan", a0, "klaim"];
var LayoutComponent = class _LayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.isAdminOrPemilik = computed(() => ["ADMIN", "PEMILIK"].includes(this.auth.currentUser()?.role ?? ""), ...ngDevMode ? [{ debugName: "isAdminOrPemilik" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isKaryawan = computed(() => this.auth.currentUser()?.role === "KARYAWAN", ...ngDevMode ? [{ debugName: "isKaryawan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isPemilik = computed(() => this.auth.currentUser()?.role === "PEMILIK", ...ngDevMode ? [{ debugName: "isPemilik" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.routerSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.initPlugins());
  }
  ngAfterViewInit() {
    this.initPlugins();
  }
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
  initPlugins() {
    setTimeout(() => {
      const $ = window.$;
      if (!$)
        return;
      if ($("#menu").length && $.fn.metisMenu) {
        $("#menu").metisMenu();
      }
      $(".toggle-icon").off("click").on("click", function() {
        if ($(".wrapper").hasClass("toggled")) {
          $(".wrapper").removeClass("toggled");
          $(".sidebar-wrapper").unbind("hover");
        } else {
          $(".wrapper").addClass("toggled");
          $(".sidebar-wrapper").hover(() => $(".wrapper").addClass("sidebar-hovered"), () => $(".wrapper").removeClass("sidebar-hovered"));
        }
      });
      $(".mobile-toggle-menu").off("click").on("click", function() {
        $(".wrapper").toggleClass("toggled");
      });
      if ($(".sidebar-wrapper").length && window.PerfectScrollbar) {
        new window.PerfectScrollbar(".header-notifications-list");
      }
      $(window).off("scroll.btt").on("scroll.btt", function() {
        $(window).scrollTop() > 300 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut();
      });
      $(".back-to-top").off("click").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
      const currentUrl = window.location.href;
      $(".metismenu li a").each(function() {
        if (this.href === currentUrl) {
          $(this).parent("li").addClass("mm-active");
          $(this).closest("ul").addClass("mm-show");
          $(this).closest("ul").parent("li").addClass("mm-active");
        }
      });
    }, 100);
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 403, vars: 46, consts: [[1, "wrapper"], ["data-simplebar", "true", 1, "sidebar-wrapper"], [1, "sidebar-header"], ["src", "assets/images/logo-icon.png", "alt", "logo icon", 1, "logo-icon"], [1, "logo-text"], [1, "toggle-icon", "ms-auto"], [1, "bx", "bx-arrow-to-left"], ["id", "menu", 1, "metismenu"], [3, "hidden"], ["routerLink", "/dashboard", "routerLinkActive", "active"], [1, "parent-icon"], [1, "bx", "bx-home-circle"], [1, "menu-title"], ["routerLink", "/absensi", "routerLinkActive", "active"], [1, "bx", "bx-fingerprint"], ["routerLinkActive", "active", 3, "routerLink"], [1, "bx", "bx-calendar-exclamation"], [1, "bx", "bx-sun"], [1, "bx", "bx-receipt"], [1, "menu-label", 3, "hidden"], ["href", "javascript:;", 1, "has-arrow"], [1, "bx", "bx-group"], ["routerLink", "/divisi", "routerLinkActive", "active"], [1, "bx", "bx-right-arrow-alt"], ["routerLink", "/jabatan", "routerLinkActive", "active"], ["routerLink", "/karyawan", "routerLinkActive", "active"], ["routerLink", "/lokasi", "routerLinkActive", "active"], ["routerLink", "/jadwal-hari-kerja", "routerLinkActive", "active"], ["routerLink", "/jadwal-shift", "routerLinkActive", "active"], ["routerLink", "/surat-peringatan", "routerLinkActive", "active"], ["routerLink", "/laporan", "routerLinkActive", "active"], [1, "bx", "bx-file"], [1, "bx", "bx-calendar"], ["routerLink", "/pola-kerja/hari-kerja", "routerLinkActive", "active"], ["routerLink", "/pola-kerja/shift", "routerLinkActive", "active"], ["routerLink", "/pola-kerja/openshift", "routerLinkActive", "active"], [1, "bx", "bx-check-circle"], ["routerLink", "/kehadiran/harian", "routerLinkActive", "active"], ["routerLink", "/kehadiran/ringkasan", "routerLinkActive", "active"], ["routerLink", "/kehadiran/review", "routerLinkActive", "active"], ["routerLink", "/kehadiran/revisi", "routerLinkActive", "active"], ["routerLink", "/kehadiran/persetujuan-presensi", "routerLinkActive", "active"], ["routerLink", "/kehadiran/persetujuan-perangkat", "routerLinkActive", "active"], ["routerLink", "/kehadiran/persetujuan-foto-profil", "routerLinkActive", "active"], ["routerLink", "/kehadiran/rekap-tukar-jadwal-shift", "routerLinkActive", "active"], ["routerLink", "/kehadiran/rekap-catatan-presensi", "routerLinkActive", "active"], [1, "bx", "bx-timer"], ["routerLink", "/lembur/review", "routerLinkActive", "active"], ["routerLink", "/lembur/jadwal", "routerLinkActive", "active"], ["routerLink", "/lembur/pengaturan", "routerLinkActive", "active"], ["routerLink", "/izin/izin-hari", "routerLinkActive", "active"], ["routerLink", "/izin/review-izin-jam", "routerLinkActive", "active"], ["routerLink", "/cuti", "routerLinkActive", "active"], ["routerLink", "/cuti/laporan", "routerLinkActive", "active"], ["routerLink", "/cuti/pengaturan", "routerLinkActive", "active"], ["routerLink", "/klaim/pengajuan", "routerLinkActive", "active"], ["routerLink", "/klaim/jenis", "routerLinkActive", "active"], [1, "bx", "bx-map-pin"], ["routerLink", "/kunjungan/kunjungan", "routerLinkActive", "active"], ["routerLink", "/kunjungan/visualisasi", "routerLinkActive", "active"], ["routerLink", "/kunjungan/ringkasan", "routerLinkActive", "active"], ["routerLink", "/kunjungan/klien", "routerLinkActive", "active"], ["routerLink", "/kunjungan/jadwal", "routerLinkActive", "active"], ["routerLink", "/kunjungan/sales-dasbor", "routerLinkActive", "active"], ["routerLink", "/kunjungan/sales-produk", "routerLinkActive", "active"], ["routerLink", "/kunjungan/laporan-penjualan", "routerLinkActive", "active"], [1, "bx", "bx-spreadsheet"], ["routerLink", "/timesheet/aktivitas", "routerLinkActive", "active"], ["routerLink", "/timesheet/proyek", "routerLinkActive", "active"], ["routerLink", "/broadcast", "routerLinkActive", "active"], [1, "bx", "bx-broadcast"], [1, "bx", "bx-money"], ["routerLink", "/gaji/hitung", "routerLinkActive", "active"], ["routerLink", "/gaji/pembayaran", "routerLinkActive", "active"], ["routerLink", "/gaji/laporan", "routerLinkActive", "active"], ["routerLink", "/gaji/pengaturan", "routerLinkActive", "active"], [1, "bx", "bx-cog"], ["routerLink", "/pengaturan/perusahaan", "routerLinkActive", "active"], ["routerLink", "/pengaturan/aplikasi-mobile", "routerLinkActive", "active"], ["routerLink", "/pengaturan/alur-persetujuan", "routerLinkActive", "active"], ["routerLink", "/pengaturan/kalender-libur", "routerLinkActive", "active"], ["routerLink", "/pengaturan/langganan", "routerLinkActive", "active"], ["routerLink", "/pengaturan/admin", "routerLinkActive", "active"], ["routerLink", "/pengaturan/fitur-premium", "routerLinkActive", "active"], ["routerLink", "/pengaturan/integrasi", "routerLinkActive", "active"], ["routerLink", "/pengaturan/panduan-penggunaan", "routerLinkActive", "active"], [1, "topbar", "d-flex", "align-items-center"], [1, "navbar", "navbar-expand"], [1, "mobile-toggle-menu"], [1, "bx", "bx-menu"], [1, "d-none", "d-sm-flex", "align-items-center", "gap-2", "ms-3"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-2", "flex-shrink-0", 2, "width", "30px", "height", "30px", "background", "linear-gradient(135deg,#4f46e5,#7c3aed)"], [1, "bx", "bx-buildings", "text-white", 2, "font-size", ".9rem"], [2, "line-height", "1.2"], [1, "fw-semibold", "text-dark", 2, "font-size", ".85rem", "max-width", "220px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "text-muted", 2, "font-size", ".7rem"], [1, "top-menu", "ms-auto"], [1, "navbar-nav", "align-items-center", "gap-1"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-flex", "align-items-center", "nav-link", "dropdown-toggle", "dropdown-toggle-nocaret"], ["src", "assets/images/avatars/avatar-1.png", "alt", "user", "onerror", "this.src='assets/images/logo-icon.png'", 1, "user-img"], [1, "user-info", "ps-3"], [1, "user-name", "mb-0"], [1, "designattion", "mb-0"], [1, "badge"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "bx", "bx-user"], [1, "dropdown-divider", "mb-0"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "bx", "bx-log-out-circle"], [1, "page-wrapper"], [1, "page-content"], [1, "overlay", "toggle-icon"], ["href", "javascript:;", 1, "back-to-top"], [1, "bx", "bxs-up-arrow-alt"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        \u0275\u0275element(4, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h4", 4);
        \u0275\u0275text(7, "AbsensiKerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "i", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "ul", 7)(11, "li", 8)(12, "a", 9)(13, "div", 10);
        \u0275\u0275element(14, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12);
        \u0275\u0275text(16, "Dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "li", 8)(18, "a", 13)(19, "div", 10);
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12);
        \u0275\u0275text(22, "Absensi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "li", 8)(24, "a", 15)(25, "div", 10);
        \u0275\u0275element(26, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12);
        \u0275\u0275text(28, "Izin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "li", 8)(30, "a", 15)(31, "div", 10);
        \u0275\u0275element(32, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 12);
        \u0275\u0275text(34, "Cuti");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "li", 8)(36, "a", 15)(37, "div", 10);
        \u0275\u0275element(38, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 12);
        \u0275\u0275text(40, "Klaim");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "li", 19);
        \u0275\u0275text(42, "Manajemen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li", 8)(44, "a", 20)(45, "div", 10);
        \u0275\u0275element(46, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 12);
        \u0275\u0275text(48, "Kelola Karyawan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "ul")(50, "li")(51, "a", 22);
        \u0275\u0275element(52, "i", 23);
        \u0275\u0275text(53, "Divisi ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "li")(55, "a", 24);
        \u0275\u0275element(56, "i", 23);
        \u0275\u0275text(57, "Jabatan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "li")(59, "a", 25);
        \u0275\u0275element(60, "i", 23);
        \u0275\u0275text(61, "Data Karyawan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "li")(63, "a", 26);
        \u0275\u0275element(64, "i", 23);
        \u0275\u0275text(65, "Lokasi Kehadiran ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "li")(67, "a", 27);
        \u0275\u0275element(68, "i", 23);
        \u0275\u0275text(69, "Jadwal Hari Kerja ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "li")(71, "a", 28);
        \u0275\u0275element(72, "i", 23);
        \u0275\u0275text(73, "Jadwal Shift ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "li")(75, "a", 29);
        \u0275\u0275element(76, "i", 23);
        \u0275\u0275text(77, "Surat Peringatan ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(78, "li", 8)(79, "a", 30)(80, "div", 10);
        \u0275\u0275element(81, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 12);
        \u0275\u0275text(83, "Laporan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "li", 19);
        \u0275\u0275text(85, "Pola Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "li", 8)(87, "a", 20)(88, "div", 10);
        \u0275\u0275element(89, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 12);
        \u0275\u0275text(91, "Pola Kerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "ul")(93, "li")(94, "a", 33);
        \u0275\u0275element(95, "i", 23);
        \u0275\u0275text(96, "Hari Kerja");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "li")(98, "a", 34);
        \u0275\u0275element(99, "i", 23);
        \u0275\u0275text(100, "Shift");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "li")(102, "a", 35);
        \u0275\u0275element(103, "i", 23);
        \u0275\u0275text(104, "Openshift");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(105, "li", 19);
        \u0275\u0275text(106, "Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li", 8)(108, "a", 20)(109, "div", 10);
        \u0275\u0275element(110, "i", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 12);
        \u0275\u0275text(112, "Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "ul")(114, "li")(115, "a", 37);
        \u0275\u0275element(116, "i", 23);
        \u0275\u0275text(117, "Kehadiran Harian");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "li")(119, "a", 38);
        \u0275\u0275element(120, "i", 23);
        \u0275\u0275text(121, "Ringkasan Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "li")(123, "a", 39);
        \u0275\u0275element(124, "i", 23);
        \u0275\u0275text(125, "Review Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "li")(127, "a", 40);
        \u0275\u0275element(128, "i", 23);
        \u0275\u0275text(129, "Revisi Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "li")(131, "a", 41);
        \u0275\u0275element(132, "i", 23);
        \u0275\u0275text(133, "Persetujuan Presensi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "li")(135, "a", 42);
        \u0275\u0275element(136, "i", 23);
        \u0275\u0275text(137, "Persetujuan Perangkat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "li")(139, "a", 43);
        \u0275\u0275element(140, "i", 23);
        \u0275\u0275text(141, "Persetujuan Foto Profil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "li")(143, "a", 44);
        \u0275\u0275element(144, "i", 23);
        \u0275\u0275text(145, "Rekap Tukar Jadwal Shift");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "li")(147, "a", 45);
        \u0275\u0275element(148, "i", 23);
        \u0275\u0275text(149, "Rekap Catatan Presensi");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(150, "li", 19);
        \u0275\u0275text(151, "Lembur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li", 8)(153, "a", 20)(154, "div", 10);
        \u0275\u0275element(155, "i", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 12);
        \u0275\u0275text(157, "Lembur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "ul")(159, "li")(160, "a", 47);
        \u0275\u0275element(161, "i", 23);
        \u0275\u0275text(162, "Review Lembur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(163, "li")(164, "a", 48);
        \u0275\u0275element(165, "i", 23);
        \u0275\u0275text(166, "Jadwal Lembur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "li")(168, "a", 49);
        \u0275\u0275element(169, "i", 23);
        \u0275\u0275text(170, "Pengaturan");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(171, "li", 19);
        \u0275\u0275text(172, "Izin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "li", 8)(174, "a", 20)(175, "div", 10);
        \u0275\u0275element(176, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 12);
        \u0275\u0275text(178, "Izin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "ul")(180, "li")(181, "a", 50);
        \u0275\u0275element(182, "i", 23);
        \u0275\u0275text(183, "Izin Hari");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "li")(185, "a", 51);
        \u0275\u0275element(186, "i", 23);
        \u0275\u0275text(187, "Review Izin Jam");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(188, "li", 19);
        \u0275\u0275text(189, "Cuti");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li", 8)(191, "a", 20)(192, "div", 10);
        \u0275\u0275element(193, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 12);
        \u0275\u0275text(195, "Cuti");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "ul")(197, "li")(198, "a", 52);
        \u0275\u0275element(199, "i", 23);
        \u0275\u0275text(200, "Permohonan Cuti");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "li")(202, "a", 53);
        \u0275\u0275element(203, "i", 23);
        \u0275\u0275text(204, "Laporan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "li")(206, "a", 54);
        \u0275\u0275element(207, "i", 23);
        \u0275\u0275text(208, "Pengaturan");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(209, "li", 19);
        \u0275\u0275text(210, "Klaim");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "li", 8)(212, "a", 20)(213, "div", 10);
        \u0275\u0275element(214, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "div", 12);
        \u0275\u0275text(216, "Klaim");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "ul")(218, "li")(219, "a", 55);
        \u0275\u0275element(220, "i", 23);
        \u0275\u0275text(221, "Pengajuan Klaim");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "li")(223, "a", 56);
        \u0275\u0275element(224, "i", 23);
        \u0275\u0275text(225, "Jenis Klaim");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(226, "li", 19);
        \u0275\u0275text(227, "Kunjungan Klien");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "li", 8)(229, "a", 20)(230, "div", 10);
        \u0275\u0275element(231, "i", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "div", 12);
        \u0275\u0275text(233, "Kunjungan Klien");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "ul")(235, "li")(236, "a", 58);
        \u0275\u0275element(237, "i", 23);
        \u0275\u0275text(238, "Kunjungan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(239, "li")(240, "a", 59);
        \u0275\u0275element(241, "i", 23);
        \u0275\u0275text(242, "Visualisasi Kunjungan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "li")(244, "a", 60);
        \u0275\u0275element(245, "i", 23);
        \u0275\u0275text(246, "Ringkasan Kunjungan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(247, "li")(248, "a", 61);
        \u0275\u0275element(249, "i", 23);
        \u0275\u0275text(250, "Klien");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "li")(252, "a", 62);
        \u0275\u0275element(253, "i", 23);
        \u0275\u0275text(254, "Jadwal Kunjungan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(255, "li")(256, "a", 63);
        \u0275\u0275element(257, "i", 23);
        \u0275\u0275text(258, "Sales Dasbor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "li")(260, "a", 64);
        \u0275\u0275element(261, "i", 23);
        \u0275\u0275text(262, "Sales Produk");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "li")(264, "a", 65);
        \u0275\u0275element(265, "i", 23);
        \u0275\u0275text(266, "Laporan Penjualan");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(267, "li", 19);
        \u0275\u0275text(268, "Timesheet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "li", 8)(270, "a", 20)(271, "div", 10);
        \u0275\u0275element(272, "i", 66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "div", 12);
        \u0275\u0275text(274, "Timesheet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "ul")(276, "li")(277, "a", 67);
        \u0275\u0275element(278, "i", 23);
        \u0275\u0275text(279, "Aktivitas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(280, "li")(281, "a", 68);
        \u0275\u0275element(282, "i", 23);
        \u0275\u0275text(283, "Proyek");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(284, "li", 8)(285, "a", 69)(286, "div", 10);
        \u0275\u0275element(287, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "div", 12);
        \u0275\u0275text(289, "Broadcast");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(290, "li", 19);
        \u0275\u0275text(291, "Gaji");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(292, "li", 8)(293, "a", 20)(294, "div", 10);
        \u0275\u0275element(295, "i", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "div", 12);
        \u0275\u0275text(297, "Gaji");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(298, "ul")(299, "li")(300, "a", 72);
        \u0275\u0275element(301, "i", 23);
        \u0275\u0275text(302, "Hitung");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(303, "li")(304, "a", 73);
        \u0275\u0275element(305, "i", 23);
        \u0275\u0275text(306, "Pembayaran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(307, "li")(308, "a", 74);
        \u0275\u0275element(309, "i", 23);
        \u0275\u0275text(310, "Laporan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(311, "li")(312, "a", 75);
        \u0275\u0275element(313, "i", 23);
        \u0275\u0275text(314, "Pengaturan");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(315, "li", 19);
        \u0275\u0275text(316, "Pengaturan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "li", 8)(318, "a", 20)(319, "div", 10);
        \u0275\u0275element(320, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "div", 12);
        \u0275\u0275text(322, "Pengaturan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(323, "ul")(324, "li")(325, "a", 77);
        \u0275\u0275element(326, "i", 23);
        \u0275\u0275text(327, "Perusahaan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(328, "li")(329, "a", 78);
        \u0275\u0275element(330, "i", 23);
        \u0275\u0275text(331, "Aplikasi Mobile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(332, "li")(333, "a", 79);
        \u0275\u0275element(334, "i", 23);
        \u0275\u0275text(335, "Alur Persetujuan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(336, "li")(337, "a", 80);
        \u0275\u0275element(338, "i", 23);
        \u0275\u0275text(339, "Kalender Libur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(340, "li")(341, "a", 81);
        \u0275\u0275element(342, "i", 23);
        \u0275\u0275text(343, "Langganan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(344, "li")(345, "a", 82);
        \u0275\u0275element(346, "i", 23);
        \u0275\u0275text(347, "Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(348, "li")(349, "a", 83);
        \u0275\u0275element(350, "i", 23);
        \u0275\u0275text(351, "Fitur Premium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(352, "li")(353, "a", 84);
        \u0275\u0275element(354, "i", 23);
        \u0275\u0275text(355, "Integrasi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(356, "li")(357, "a", 85);
        \u0275\u0275element(358, "i", 23);
        \u0275\u0275text(359, "Panduan Penggunaan");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(360, "header")(361, "div", 86)(362, "nav", 87)(363, "div", 88);
        \u0275\u0275element(364, "i", 89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "div", 90)(366, "div", 91);
        \u0275\u0275element(367, "i", 92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(368, "div", 93)(369, "div", 94);
        \u0275\u0275text(370);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(371, "div", 95);
        \u0275\u0275text(372);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(373, "div", 96)(374, "ul", 97)(375, "li", 98)(376, "a", 99);
        \u0275\u0275element(377, "img", 100);
        \u0275\u0275elementStart(378, "div", 101)(379, "p", 102);
        \u0275\u0275text(380);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "p", 103)(382, "span", 104);
        \u0275\u0275text(383);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(384, "ul", 105)(385, "li")(386, "a", 106);
        \u0275\u0275element(387, "i", 107);
        \u0275\u0275elementStart(388, "span");
        \u0275\u0275text(389, "Profil");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(390, "li");
        \u0275\u0275element(391, "div", 108);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(392, "li")(393, "a", 109);
        \u0275\u0275listener("click", function LayoutComponent_Template_a_click_393_listener() {
          return ctx.logout();
        });
        \u0275\u0275element(394, "i", 110);
        \u0275\u0275elementStart(395, "span");
        \u0275\u0275text(396, "Logout");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(397, "div", 111)(398, "div", 112);
        \u0275\u0275projection(399);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(400, "div", 113);
        \u0275\u0275elementStart(401, "a", 114);
        \u0275\u0275element(402, "i", 115);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_7_0;
        let tmp_32_0;
        let tmp_33_0;
        let tmp_34_0;
        let tmp_35_0;
        let tmp_36_0;
        let tmp_37_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("hidden", !ctx.isAdminOrPemilik());
        \u0275\u0275advance(6);
        \u0275\u0275property("hidden", ((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.role) === "PEMILIK");
        \u0275\u0275advance(6);
        \u0275\u0275property("hidden", !ctx.isKaryawan());
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(40, _c1, (tmp_3_0 = ctx.auth.currentUser()) == null ? null : tmp_3_0.karyawanId));
        \u0275\u0275advance(5);
        \u0275\u0275property("hidden", !ctx.isKaryawan());
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(42, _c2, (tmp_5_0 = ctx.auth.currentUser()) == null ? null : tmp_5_0.karyawanId));
        \u0275\u0275advance(5);
        \u0275\u0275property("hidden", !ctx.isKaryawan());
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(44, _c3, (tmp_7_0 = ctx.auth.currentUser()) == null ? null : tmp_7_0.karyawanId));
        \u0275\u0275advance(5);
        \u0275\u0275property("hidden", !ctx.isAdminOrPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isAdminOrPemilik());
        \u0275\u0275advance(35);
        \u0275\u0275property("hidden", !ctx.isAdminOrPemilik());
        \u0275\u0275advance(6);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(19);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(43);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(19);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(15);
        \u0275\u0275property("hidden", !ctx.isAdminOrPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isAdminOrPemilik());
        \u0275\u0275advance(19);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(15);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(39);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(15);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(6);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(23);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !ctx.isPemilik());
        \u0275\u0275advance(53);
        \u0275\u0275textInterpolate1(" ", ((tmp_32_0 = ctx.auth.currentUser()) == null ? null : tmp_32_0.perusahaanNama) ?? "AbsensiKerja", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_33_0 = ctx.auth.currentUser()) == null ? null : tmp_33_0.role);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(((tmp_34_0 = ctx.auth.currentUser()) == null ? null : tmp_34_0.namaLengkap) ?? ((tmp_34_0 = ctx.auth.currentUser()) == null ? null : tmp_34_0.username));
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", ((tmp_35_0 = ctx.auth.currentUser()) == null ? null : tmp_35_0.role) === "PEMILIK" ? "#dcfce7" : ((tmp_35_0 = ctx.auth.currentUser()) == null ? null : tmp_35_0.role) === "ADMIN" ? "#dbeafe" : "#fef3c7")("color", ((tmp_36_0 = ctx.auth.currentUser()) == null ? null : tmp_36_0.role) === "PEMILIK" ? "#166534" : ((tmp_36_0 = ctx.auth.currentUser()) == null ? null : tmp_36_0.role) === "ADMIN" ? "#1e40af" : "#92400e");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_37_0 = ctx.auth.currentUser()) == null ? null : tmp_37_0.role, " ");
      }
    }, dependencies: [RouterLink, RouterLinkActive, CommonModule], styles: ["\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 6px 14px !important;\n  font-size: 13.5px;\n  line-height: 1.2;\n  border-radius: 6px;\n  margin: 1px 6px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   .parent-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n  margin-right: 8px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%] {\n  line-height: 1.2;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  padding: 10px 16px 4px !important;\n  margin: 0 !important;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 42px !important;\n  font-size: 12.5px;\n  line-height: 1.2;\n  border-radius: 5px;\n  margin: 1px 8px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 6px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   ul.mm-collapse[_ngcontent-%COMP%], \n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .metismenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 70, 229, .08);\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule], template: `<!-- ===== Sidebar compact tweaks ===== -->\r
<style>\r
  /* Item utama */\r
  .sidebar-wrapper .metismenu > li > a {\r
    padding: 6px 14px !important;\r
    font-size: 13.5px;\r
    line-height: 1.2;\r
    border-radius: 6px;\r
    margin: 1px 6px;\r
  }\r
  .sidebar-wrapper .metismenu > li {\r
    margin: 0 !important;\r
  }\r
  .sidebar-wrapper .metismenu .parent-icon {\r
    font-size: 18px;\r
    line-height: 1;\r
    margin-right: 8px;\r
  }\r
  .sidebar-wrapper .metismenu .menu-title {\r
    line-height: 1.2;\r
  }\r
\r
  /* Label section (Manajemen, Pola Kerja, dst.) */\r
  .sidebar-wrapper .metismenu .menu-label {\r
    padding: 10px 16px 4px !important;\r
    margin: 0 !important;\r
    font-size: 11px;\r
    font-weight: 600;\r
    letter-spacing: .04em;\r
    text-transform: uppercase;\r
    color: #94a3b8;\r
  }\r
\r
  /* Submenu (accordion children) */\r
  .sidebar-wrapper .metismenu ul li a {\r
    padding: 5px 14px 5px 42px !important;\r
    font-size: 12.5px;\r
    line-height: 1.2;\r
    border-radius: 5px;\r
    margin: 1px 8px;\r
  }\r
  .sidebar-wrapper .metismenu ul li a i {\r
    font-size: 14px;\r
    margin-right: 6px;\r
  }\r
\r
  /* Hilangkan jarak ekstra antar <ul> bawaan metismenu */\r
  .sidebar-wrapper .metismenu ul.mm-collapse,\r
  .sidebar-wrapper .metismenu ul {\r
    padding: 2px 0 !important;\r
  }\r
\r
  /* Aktifkan hover/active lebih halus */\r
  .sidebar-wrapper .metismenu a:hover {\r
    background: rgba(79, 70, 229, .08);\r
  }\r
</style>\r
\r
<!--wrapper-->\r
<div class="wrapper">\r
\r
  <!-- ============ SIDEBAR ============ -->\r
  <div class="sidebar-wrapper" data-simplebar="true">\r
    <div class="sidebar-header">\r
      <div>\r
        <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">\r
      </div>\r
      <div>\r
        <h4 class="logo-text">AbsensiKerja</h4>\r
      </div>\r
      <div class="toggle-icon ms-auto">\r
        <i class='bx bx-arrow-to-left'></i>\r
      </div>\r
    </div>\r
\r
    <!--navigation-->\r
    <ul class="metismenu" id="menu">\r
\r
      <!-- Dashboard \u2014 hanya ADMIN & PEMILIK -->\r
      <li [hidden]="!isAdminOrPemilik()">\r
        <a routerLink="/dashboard" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-home-circle'></i></div>\r
          <div class="menu-title">Dashboard</div>\r
        </a>\r
      </li>\r
\r
      <!-- Absensi \u2014 semua role kecuali PEMILIK -->\r
      <li [hidden]="auth.currentUser()?.role === 'PEMILIK'">\r
        <a routerLink="/absensi" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-fingerprint'></i></div>\r
          <div class="menu-title">Absensi</div>\r
        </a>\r
      </li>\r
\r
      <!-- Izin \u2014 hanya KARYAWAN -->\r
      <li [hidden]="!isKaryawan()">\r
        <a [routerLink]="['/karyawan', auth.currentUser()?.karyawanId, 'izin']" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-calendar-exclamation'></i></div>\r
          <div class="menu-title">Izin</div>\r
        </a>\r
      </li>\r
\r
      <!-- Cuti \u2014 hanya KARYAWAN -->\r
      <li [hidden]="!isKaryawan()">\r
        <a [routerLink]="['/karyawan', auth.currentUser()?.karyawanId, 'cuti']" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-sun'></i></div>\r
          <div class="menu-title">Cuti</div>\r
        </a>\r
      </li>\r
\r
      <!-- Klaim \u2014 hanya KARYAWAN -->\r
      <li [hidden]="!isKaryawan()">\r
        <a [routerLink]="['/karyawan', auth.currentUser()?.karyawanId, 'klaim']" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-receipt'></i></div>\r
          <div class="menu-title">Klaim</div>\r
        </a>\r
      </li>\r
\r
      <!-- Label Manajemen \u2014 hanya ADMIN & PEMILIK -->\r
      <li class="menu-label" [hidden]="!isAdminOrPemilik()">Manajemen</li>\r
\r
      <!-- Kelola Karyawan accordion \u2014 hanya ADMIN & PEMILIK -->\r
      <li [hidden]="!isAdminOrPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-group'></i></div>\r
          <div class="menu-title">Kelola Karyawan</div>\r
        </a>\r
        <ul>\r
          <li>\r
            <a routerLink="/divisi" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Divisi\r
            </a>\r
          </li>\r
          <li>\r
            <a routerLink="/jabatan" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Jabatan\r
            </a>\r
          </li>\r
          <li>\r
            <a routerLink="/karyawan" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Data Karyawan\r
            </a>\r
          </li>\r
          <li>\r
            <a routerLink="/lokasi" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Lokasi Kehadiran\r
            </a>\r
          </li>\r
          <li>\r
            <a routerLink="/jadwal-hari-kerja" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Jadwal Hari Kerja\r
            </a>\r
          </li>\r
          <li>\r
            <a routerLink="/jadwal-shift" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Jadwal Shift\r
            </a>\r
          </li>\r
          <li>\r
            <a routerLink="/surat-peringatan" routerLinkActive="active">\r
              <i class='bx bx-right-arrow-alt'></i>Surat Peringatan\r
            </a>\r
          </li>\r
        </ul>\r
      </li>\r
\r
      <!-- Laporan \u2014 hanya ADMIN & PEMILIK -->\r
      <li [hidden]="!isAdminOrPemilik()">\r
        <a routerLink="/laporan" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-file'></i></div>\r
          <div class="menu-title">Laporan</div>\r
        </a>\r
      </li>\r
\r
      <!-- ===== PEMILIK ONLY ===== -->\r
\r
      <!-- Pola Kerja -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Pola Kerja</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-calendar'></i></div>\r
          <div class="menu-title">Pola Kerja</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/pola-kerja/hari-kerja" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Hari Kerja</a></li>\r
          <li><a routerLink="/pola-kerja/shift" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Shift</a></li>\r
          <li><a routerLink="/pola-kerja/openshift" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Openshift</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Kehadiran -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Kehadiran</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-check-circle'></i></div>\r
          <div class="menu-title">Kehadiran</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/kehadiran/harian" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Kehadiran Harian</a></li>\r
          <li><a routerLink="/kehadiran/ringkasan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Ringkasan Kehadiran</a></li>\r
          <li><a routerLink="/kehadiran/review" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Review Kehadiran</a></li>\r
          <li><a routerLink="/kehadiran/revisi" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Revisi Kehadiran</a></li>\r
          <li><a routerLink="/kehadiran/persetujuan-presensi" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Persetujuan Presensi</a></li>\r
          <li><a routerLink="/kehadiran/persetujuan-perangkat" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Persetujuan Perangkat</a></li>\r
          <li><a routerLink="/kehadiran/persetujuan-foto-profil" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Persetujuan Foto Profil</a></li>\r
          <li><a routerLink="/kehadiran/rekap-tukar-jadwal-shift" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Rekap Tukar Jadwal Shift</a></li>\r
          <li><a routerLink="/kehadiran/rekap-catatan-presensi" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Rekap Catatan Presensi</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Lembur -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Lembur</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-timer'></i></div>\r
          <div class="menu-title">Lembur</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/lembur/review" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Review Lembur</a></li>\r
          <li><a routerLink="/lembur/jadwal" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Jadwal Lembur</a></li>\r
          <li><a routerLink="/lembur/pengaturan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Pengaturan</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Izin -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Izin</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-calendar-exclamation'></i></div>\r
          <div class="menu-title">Izin</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/izin/izin-hari" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Izin Hari</a></li>\r
          <li><a routerLink="/izin/review-izin-jam" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Review Izin Jam</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Cuti -->\r
      <li class="menu-label" [hidden]="!isAdminOrPemilik()">Cuti</li>\r
      <li [hidden]="!isAdminOrPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-sun'></i></div>\r
          <div class="menu-title">Cuti</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/cuti" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Permohonan Cuti</a></li>\r
          <li><a routerLink="/cuti/laporan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Laporan</a></li>\r
          <li><a routerLink="/cuti/pengaturan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Pengaturan</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Klaim -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Klaim</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-receipt'></i></div>\r
          <div class="menu-title">Klaim</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/klaim/pengajuan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Pengajuan Klaim</a></li>\r
          <li><a routerLink="/klaim/jenis" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Jenis Klaim</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Kunjungan Klien -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Kunjungan Klien</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-map-pin'></i></div>\r
          <div class="menu-title">Kunjungan Klien</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/kunjungan/kunjungan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Kunjungan</a></li>\r
          <li><a routerLink="/kunjungan/visualisasi" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Visualisasi Kunjungan</a></li>\r
          <li><a routerLink="/kunjungan/ringkasan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Ringkasan Kunjungan</a></li>\r
          <li><a routerLink="/kunjungan/klien" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Klien</a></li>\r
          <li><a routerLink="/kunjungan/jadwal" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Jadwal Kunjungan</a></li>\r
          <li><a routerLink="/kunjungan/sales-dasbor" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Sales Dasbor</a></li>\r
          <li><a routerLink="/kunjungan/sales-produk" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Sales Produk</a></li>\r
          <li><a routerLink="/kunjungan/laporan-penjualan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Laporan Penjualan</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Timesheet -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Timesheet</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-spreadsheet'></i></div>\r
          <div class="menu-title">Timesheet</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/timesheet/aktivitas" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Aktivitas</a></li>\r
          <li><a routerLink="/timesheet/proyek" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Proyek</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Broadcast -->\r
      <li [hidden]="!isPemilik()">\r
        <a routerLink="/broadcast" routerLinkActive="active">\r
          <div class="parent-icon"><i class='bx bx-broadcast'></i></div>\r
          <div class="menu-title">Broadcast</div>\r
        </a>\r
      </li>\r
\r
      <!-- Gaji -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Gaji</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-money'></i></div>\r
          <div class="menu-title">Gaji</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/gaji/hitung" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Hitung</a></li>\r
          <li><a routerLink="/gaji/pembayaran" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Pembayaran</a></li>\r
          <li><a routerLink="/gaji/laporan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Laporan</a></li>\r
          <li><a routerLink="/gaji/pengaturan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Pengaturan</a></li>\r
        </ul>\r
      </li>\r
\r
      <!-- Pengaturan -->\r
      <li class="menu-label" [hidden]="!isPemilik()">Pengaturan</li>\r
      <li [hidden]="!isPemilik()">\r
        <a href="javascript:;" class="has-arrow">\r
          <div class="parent-icon"><i class='bx bx-cog'></i></div>\r
          <div class="menu-title">Pengaturan</div>\r
        </a>\r
        <ul>\r
          <li><a routerLink="/pengaturan/perusahaan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Perusahaan</a></li>\r
          <li><a routerLink="/pengaturan/aplikasi-mobile" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Aplikasi Mobile</a></li>\r
          <li><a routerLink="/pengaturan/alur-persetujuan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Alur Persetujuan</a></li>\r
          <li><a routerLink="/pengaturan/kalender-libur" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Kalender Libur</a></li>\r
          <li><a routerLink="/pengaturan/langganan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Langganan</a></li>\r
          <li><a routerLink="/pengaturan/admin" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Admin</a></li>\r
          <li><a routerLink="/pengaturan/fitur-premium" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Fitur Premium</a></li>\r
          <li><a routerLink="/pengaturan/integrasi" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Integrasi</a></li>\r
          <li><a routerLink="/pengaturan/panduan-penggunaan" routerLinkActive="active"><i class='bx bx-right-arrow-alt'></i>Panduan Penggunaan</a></li>\r
        </ul>\r
      </li>\r
\r
    </ul>\r
    <!--end navigation-->\r
  </div>\r
  <!-- ============ END SIDEBAR ============ -->\r
\r
  <!-- ============ TOP MENU ============ -->\r
  <header>\r
    <div class="topbar d-flex align-items-center">\r
      <nav class="navbar navbar-expand">\r
        <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>\r
\r
        <!-- Nama Perusahaan -->\r
        <div class="d-none d-sm-flex align-items-center gap-2 ms-3">\r
          <div class="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"\r
               style="width:30px;height:30px;background:linear-gradient(135deg,#4f46e5,#7c3aed)">\r
            <i class="bx bx-buildings text-white" style="font-size:.9rem"></i>\r
          </div>\r
          <div style="line-height:1.2">\r
            <div class="fw-semibold text-dark" style="font-size:.85rem;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\r
              {{ auth.currentUser()?.perusahaanNama ?? 'AbsensiKerja' }}\r
            </div>\r
            <div class="text-muted" style="font-size:.7rem">{{ auth.currentUser()?.role }}</div>\r
          </div>\r
        </div>\r
\r
        <div class="top-menu ms-auto">\r
          <ul class="navbar-nav align-items-center gap-1">\r
            <!-- User dropdown -->\r
            <li class="nav-item dropdown">\r
              <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"\r
                 href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                <img src="assets/images/avatars/avatar-1.png" class="user-img" alt="user"\r
                     onerror="this.src='assets/images/logo-icon.png'">\r
                <div class="user-info ps-3">\r
                  <p class="user-name mb-0">{{ auth.currentUser()?.namaLengkap ?? auth.currentUser()?.username }}</p>\r
                  <p class="designattion mb-0">\r
                    <span class="badge"\r
                      [style.background]="auth.currentUser()?.role === 'PEMILIK' ? '#dcfce7' :\r
                                          auth.currentUser()?.role === 'ADMIN'   ? '#dbeafe' : '#fef3c7'"\r
                      [style.color]="auth.currentUser()?.role === 'PEMILIK' ? '#166534' :\r
                                     auth.currentUser()?.role === 'ADMIN'   ? '#1e40af' : '#92400e'">\r
                      {{ auth.currentUser()?.role }}\r
                    </span>\r
                  </p>\r
                </div>\r
              </a>\r
              <ul class="dropdown-menu dropdown-menu-end">\r
                <li>\r
                  <a class="dropdown-item" href="#">\r
                    <i class="bx bx-user"></i><span>Profil</span>\r
                  </a>\r
                </li>\r
                <li><div class="dropdown-divider mb-0"></div></li>\r
                <li>\r
                  <a class="dropdown-item" href="#" (click)="logout()">\r
                    <i class='bx bx-log-out-circle'></i><span>Logout</span>\r
                  </a>\r
                </li>\r
              </ul>\r
            </li>\r
          </ul>\r
        </div>\r
      </nav>\r
    </div>\r
  </header>\r
  <!-- ============ END TOP MENU ============ -->\r
\r
  <!-- ============ PAGE CONTENT ============ -->\r
  <div class="page-wrapper">\r
    <div class="page-content">\r
      <ng-content></ng-content>\r
    </div>\r
  </div>\r
  <!-- ============ END PAGE CONTENT ============ -->\r
\r
  <div class="overlay toggle-icon"></div>\r
  <a href="javascript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>\r
\r
</div>\r
<!--end wrapper-->\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout/layout.component.ts", lineNumber: 14 });
})();

export {
  LayoutComponent
};
//# sourceMappingURL=chunk-CDCEZZUF.js.map
