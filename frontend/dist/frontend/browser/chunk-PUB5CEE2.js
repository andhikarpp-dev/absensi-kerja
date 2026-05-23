import {
  authGuard,
  roleGuard
} from "./chunk-XIKUNLV2.js";
import "./chunk-CR3SFDDN.js";
import "./chunk-OEINA6XM.js";
import "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/jadwal-shift/jadwal-shift.routes.ts
var jadwalShiftRoutes = [
  {
    path: "",
    canActivate: [authGuard, roleGuard(["ADMIN", "PEMILIK"])],
    loadComponent: () => import("./chunk-O74HTNIK.js").then((m) => m.JadwalShiftListComponent)
  }
];
export {
  jadwalShiftRoutes
};
//# sourceMappingURL=chunk-PUB5CEE2.js.map
