import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/jabatan/jabatan.routes.ts
var jabatanRoutes = [
  {
    path: "",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-KRZ2D4DW.js").then((m) => m.JabatanListComponent)
  },
  {
    path: "baru",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-XBVEEMDY.js").then((m) => m.JabatanFormComponent)
  },
  {
    path: ":id/edit",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-XBVEEMDY.js").then((m) => m.JabatanFormComponent)
  }
];
export {
  jabatanRoutes
};
//# sourceMappingURL=chunk-AJT66MR7.js.map
