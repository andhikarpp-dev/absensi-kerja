import "./chunk-WDMUDEB6.js";

// src/app/features/lokasi/lokasi.routes.ts
var lokasiRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-LD3WFARJ.js").then((m) => m.LokasiListComponent)
  },
  {
    path: "baru",
    loadComponent: () => import("./chunk-XSNZZZPG.js").then((m) => m.LokasiFormComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-XSNZZZPG.js").then((m) => m.LokasiFormComponent)
  }
];
export {
  lokasiRoutes
};
//# sourceMappingURL=chunk-WZD2MCKK.js.map
