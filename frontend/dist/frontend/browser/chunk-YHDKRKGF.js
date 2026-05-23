import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/surat-peringatan/surat-peringatan.routes.ts
var suratPeringatanRoutes = [
  {
    path: "",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-W3P6FXHT.js").then((m) => m.SuratPeringatanListComponent)
  }
];
export {
  suratPeringatanRoutes
};
//# sourceMappingURL=chunk-YHDKRKGF.js.map
