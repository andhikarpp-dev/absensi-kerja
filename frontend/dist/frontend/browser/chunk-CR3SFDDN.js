import {
  Router
} from "./chunk-OEINA6XM.js";
import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QLIULQP5.js";

// src/app/core/services/storage.service.ts
var TOKEN_KEY = "absensi_token";
var USER_KEY = "absensi_user";
var StorageService = class _StorageService {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
  setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  getUser() {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
  removeUser() {
    localStorage.removeItem(USER_KEY);
  }
  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
  static {
    this.\u0275fac = function StorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(storage, router) {
    this.storage = storage;
    this.router = router;
    this._currentUser = signal(this.storage.getUser(), ...ngDevMode ? [{ debugName: "_currentUser" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentUser = this._currentUser.asReadonly();
    this.isLoggedIn = computed(() => !!this._currentUser(), ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isAdmin = computed(() => this._currentUser()?.role === "ADMIN", ...ngDevMode ? [{ debugName: "isAdmin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isPemilik = computed(() => this._currentUser()?.role === "PEMILIK", ...ngDevMode ? [{ debugName: "isPemilik" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Simpan token + user ke localStorage dan update signal. */
  saveSession(loginResponse) {
    this.storage.setToken(loginResponse.token);
    const user = {
      id: 0,
      username: loginResponse.username,
      namaLengkap: loginResponse.namaLengkap,
      email: loginResponse.email,
      role: loginResponse.role,
      perusahaanId: loginResponse.perusahaanId ?? null,
      perusahaanNama: loginResponse.perusahaanNama ?? null,
      divisiId: loginResponse.divisiId ?? null,
      divisiNama: loginResponse.divisiNama ?? null,
      karyawanId: loginResponse.karyawanId ?? null
    };
    this.storage.setUser(user);
    this._currentUser.set(user);
  }
  logout() {
    this.storage.clear();
    this._currentUser.set(null);
    this.router.navigate(["/"]);
  }
  getToken() {
    return this.storage.getToken();
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(StorageService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: StorageService }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-CR3SFDDN.js.map
