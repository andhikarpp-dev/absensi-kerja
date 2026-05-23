import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/divisi/divisi.routes.ts
var divisiRoutes = [
  {
    path: "",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-7DAJMCVI.js").then((m) => m.DivisiListComponent)
  },
  {
    path: "baru",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-EZPGSU3Z.js").then((m) => m.DivisiFormComponent)
  },
  {
    path: ":id/edit",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-EZPGSU3Z.js").then((m) => m.DivisiFormComponent)
  }
];
export {
  divisiRoutes
};
//# sourceMappingURL=chunk-3PP7YEFY.js.map
