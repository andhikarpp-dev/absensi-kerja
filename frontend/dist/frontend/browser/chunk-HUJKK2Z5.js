import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/pola-kerja/pola-kerja.routes.ts
var polaKerjaRoutes = [
  {
    path: "hari-kerja",
    canActivate: [authGuard, roleGuard(["PEMILIK", "ADMIN"])],
    loadComponent: () => import("./chunk-JMLTACNI.js").then((m) => m.HariKerjaListComponent)
  },
  {
    path: "shift",
    canActivate: [authGuard, roleGuard(["PEMILIK", "ADMIN"])],
    loadComponent: () => import("./chunk-ABIEHDID.js").then((m) => m.ShiftListComponent)
  },
  {
    path: "openshift",
    canActivate: [authGuard, roleGuard(["PEMILIK", "ADMIN"])],
    loadComponent: () => import("./chunk-WIRTTOAQ.js").then((m) => m.OpenshiftListComponent)
  }
];
export {
  polaKerjaRoutes
};
//# sourceMappingURL=chunk-HUJKK2Z5.js.map
