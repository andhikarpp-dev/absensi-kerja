import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  Router
} from "./chunk-OEINA6XM.js";
import {
  inject
} from "./chunk-QLIULQP5.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = (allowedRoles) => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const user = auth.currentUser();
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    if (user && roles.includes(user.role)) {
      return true;
    }
    if (user) {
      if (user.role === "KARYAWAN") {
        return router.createUrlTree(["/absensi"]);
      }
      return router.createUrlTree(["/unauthorized"]);
    }
    return router.createUrlTree(["/auth/login"]);
  };
};

export {
  authGuard,
  roleGuard
};
//# sourceMappingURL=chunk-XIKUNLV2.js.map
