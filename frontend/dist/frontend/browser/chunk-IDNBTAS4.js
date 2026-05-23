import "./chunk-WDMUDEB6.js";

// src/app/features/auth/auth.routes.ts
var authRoutes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-NIJ2TGWI.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-ZNYJ6B5X.js").then((m) => m.RegisterComponent)
  },
  {
    path: "register-owner",
    loadComponent: () => import("./chunk-3N6UE7LJ.js").then((m) => m.CompanyRegisterComponent)
  },
  {
    path: "verify-email",
    loadComponent: () => import("./chunk-5UDNY3MT.js").then((m) => m.VerifyEmailComponent)
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-IDNBTAS4.js.map
