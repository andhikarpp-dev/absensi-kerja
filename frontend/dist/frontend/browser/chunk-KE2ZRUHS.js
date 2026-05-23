import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/cuti/cuti.routes.ts
var cutiRoutes = [
  {
    path: "",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-QUEFLNER.js").then((m) => m.CutiAdminComponent)
  },
  {
    path: "laporan",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-QU23JNGO.js").then((m) => m.CutiLaporanComponent)
  }
];
export {
  cutiRoutes
};
//# sourceMappingURL=chunk-KE2ZRUHS.js.map
