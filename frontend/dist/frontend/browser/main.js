import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  APP_BASE_HREF,
  DomRendererFactory2,
  HttpErrorResponse,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors,
  withRouterConfig,
  withViewTransitions
} from "./chunk-OEINA6XM.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  RendererFactory2,
  RuntimeError,
  catchError,
  inject,
  makeEnvironmentProviders,
  map,
  performanceMarkFeature,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵinvalidFactory
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/platform-browser/fesm2022/animations-async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  ngOnDestroy() {
    this._engine?.flush();
  }
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-EMMGQC4P.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(10);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: () => {
      return new AsyncAnimationRendererFactory(inject(DOCUMENT), inject(DomRendererFactory2), inject(NgZone), type);
    }
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.routes.ts
var routes = [
  // ── Public ──────────────────────────────────────────────────
  {
    path: "",
    loadComponent: () => import("./chunk-ZKKJPAYO.js").then((m) => m.LandingComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-IDNBTAS4.js").then((m) => m.authRoutes)
  },
  // ── Daftar (registrasi perusahaan baru) ─────────────────────
  {
    path: "daftar",
    loadComponent: () => import("./chunk-DIVM6PWS.js").then((m) => m.DaftarComponent)
  },
  // ── Dashboard — ADMIN & PEMILIK saja ────────────────────────
  {
    path: "dashboard",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-RJRGXPR6.js").then((m) => m.DashboardComponent)
  },
  {
    path: "absensi",
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-BY3L5QSP.js").then((m) => m.absensiRoutes)
  },
  // ── ADMIN & PEMILIK saja (izin juga bisa diakses KARYAWAN) ──────
  {
    path: "karyawan",
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-QF2Z6ZDW.js").then((m) => m.karyawanRoutes)
  },
  {
    path: "divisi",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-3PP7YEFY.js").then((m) => m.divisiRoutes)
  },
  {
    path: "jabatan",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-AJT66MR7.js").then((m) => m.jabatanRoutes)
  },
  {
    path: "laporan",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-2PB2SLOF.js").then((m) => m.laporanRoutes)
  },
  {
    path: "lokasi",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-WZD2MCKK.js").then((m) => m.lokasiRoutes)
  },
  // ── Placeholder routes (belum diimplementasi) ─────────────────
  { path: "jadwal-hari-kerja", redirectTo: "dashboard", pathMatch: "prefix" },
  {
    path: "jadwal-shift",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-PUB5CEE2.js").then((m) => m.jadwalShiftRoutes)
  },
  {
    path: "surat-peringatan",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-YHDKRKGF.js").then((m) => m.suratPeringatanRoutes)
  },
  // ── Pola Kerja — fitur asli (Hari Kerja) ──────────────────────
  {
    path: "pola-kerja",
    canActivate: [authGuard, roleGuard(["PEMILIK", "ADMIN"])],
    loadChildren: () => import("./chunk-HUJKK2Z5.js").then((m) => m.polaKerjaRoutes)
  },
  // ── Kehadiran ────────────────────────────────────────────────
  {
    path: "kehadiran",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-5JM7MQWE.js").then((m) => m.kehadiranRoutes)
  },
  // ── Lembur ───────────────────────────────────────────────────
  {
    path: "lembur",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-MVKUSKDV.js").then((m) => m.lemburRoutes)
  },
  // ── Izin (Admin/Pemilik) ─────────────────────────────────────
  {
    path: "izin",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-3JLW5TRC.js").then((m) => m.izinRoutes)
  },
  // ── Cuti (Admin/Pemilik) ─────────────────────────────────────
  {
    path: "cuti",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadChildren: () => import("./chunk-KE2ZRUHS.js").then((m) => m.cutiRoutes)
  },
  // ── Phase 7 — PEMILIK saja ────────────────────────────────────
  ...[
    "kehadiran/persetujuan-perangkat",
    "lembur/pengaturan",
    "izin/review-izin-jam",
    "cuti/pengaturan",
    "klaim/pengajuan",
    "klaim/jenis",
    "kunjungan/kunjungan",
    "kunjungan/visualisasi",
    "kunjungan/ringkasan",
    "kunjungan/klien",
    "kunjungan/jadwal",
    "kunjungan/sales-dasbor",
    "kunjungan/sales-produk",
    "kunjungan/laporan-penjualan",
    "timesheet/aktivitas",
    "timesheet/proyek",
    "broadcast",
    "gaji/hitung",
    "gaji/pembayaran",
    "gaji/laporan",
    "gaji/pengaturan",
    "pengaturan/perusahaan",
    "pengaturan/aplikasi-mobile",
    "pengaturan/alur-persetujuan",
    "pengaturan/kalender-libur",
    "pengaturan/langganan",
    "pengaturan/admin",
    "pengaturan/fitur-premium",
    "pengaturan/integrasi",
    "pengaturan/panduan-penggunaan"
  ].map((p) => ({
    path: p,
    canActivate: [authGuard, roleGuard(["PEMILIK"])],
    loadComponent: () => import("./chunk-HN2LIALA.js").then((m) => m.Phase7Component)
  })),
  // ── Halaman 403 Unauthorized ──────────────────────────────────
  {
    path: "unauthorized",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-VCHCBLE7.js").then((m) => m.UnauthorizedComponent)
  },
  // ── Fallback ──────────────────────────────────────────────────
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};

// src/app/core/interceptors/jsend.interceptor.ts
var jsendInterceptor = (req, next) => {
  if (req.responseType === "blob" || req.responseType === "arraybuffer") {
    return next(req);
  }
  return next(req).pipe(map((event) => {
    if (event?.body) {
      const body = event.body;
      if (body.status === "success") {
        return event.clone({ body: body.data });
      }
      if (body.status === "fail") {
        throw { type: "fail", data: body.data };
      }
      if (body.status === "error") {
        throw { type: "error", message: body.message };
      }
    }
    return event;
  }), catchError((err) => {
    if (err?.type === "fail" || err?.type === "error") {
      return throwError(() => err);
    }
    if (err instanceof HttpErrorResponse) {
      const body = err.error;
      if (body?.status === "fail") {
        return throwError(() => ({ type: "fail", data: body.data }));
      }
      if (body?.status === "error") {
        return throwError(() => ({ type: "error", message: body.message }));
      }
      return throwError(() => ({ type: "error", message: "Terjadi kesalahan jaringan" }));
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    { provide: APP_BASE_HREF, useValue: "/ak/" },
    provideRouter(routes, withViewTransitions(), withRouterConfig({ onSameUrlNavigation: "reload" })),
    provideHttpClient(withInterceptors([jwtInterceptor, jsendInterceptor])),
    provideAnimationsAsync()
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations-async.mjs:
  (**
   * @license Angular v21.2.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
